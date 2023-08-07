import { Input, Text } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import {DotsIcon} from '../icons/accounts/dots-icon';
import {InfoIcon} from '../icons/accounts/info-icon';
import {TrashIcon} from '../icons/accounts/trash-icon';
import {SettingsIcon} from '../icons/sidebar/settings-icon';
import {Flex} from '../styles/flex';
import {TableWrapper} from '../table/table';
import {AddUser} from './add-user';
import {columns, users} from './data';
import { useSelector, useDispatch } from 'react-redux';
import { render } from '../../store/slice';

export const Accounts = () => {

   const { base } = useSelector((store) => store.items)
   const dispatch = useDispatch()

   const [data, setData] = useState(base)
   const [visible, setVisible] = useState(false);
   const [listId, setListId] = useState(null);
   const [editToggle, setEditToggle] = useState(false);
   const [info, setInfo] = useState({
      name: '',
      status: false,
      type: '',
      about: '',
      title: '',
      filler: '',
      isRequired: false,
      placement: false,
      wide: 0
   })
   const  { name, status, type, about, title, filler, isRequired, placement, wide } = info

   useEffect(() => {
      dispatch(render(data))
   }, [data])

   const [selectOptions, setSelectOptions] = useState([])
   console.log(data)
   const addClick = () => {
      setVisible(true)
      setEditToggle(true)
      setInfo({
         name: '',
         status: false,
         type: '',
         about: '',
         title: '',
         filler: '',
         isRequired: false,
         placement: false,
         wide: 0
      })
   }
   const closeModal = () => {
      setVisible(false)
   }

   const addList = () => {
      let res = {
         id: data.length+1,
         name,
         status,
         type,
         about,
         title,
         filler,
         isRequired,
         placement,
         wide
      }
      if(type.includes('elect')) {
         res.options = selectOptions
      }
      setData([...data, res])
      setVisible(false)
   }
   const editHandle = (item) => {
      setEditToggle(false)
      setListId(item.id)
      if(type.includes('elect')) {
         setSelectOptions(item.options)
      }
      setInfo({
         name: item.name,
         status: item.status,
         type: item.type,
         about: item.about,
         title: item.title,
         filler: item.filler,
         isRequired: item.isRequired,
         placement: item.placement,
         wide: item.wide
      })
      setVisible(true)
      console.log(item, 'item')
   }

   const saveList = () => {
      let res = {
         id: listId,
         name,
         status,
         type,
         about,
         title,
         filler,
         isRequired,
         placement,
         wide
      }

      if(type.includes('elect')) {
         res.options = selectOptions
      }
      setData([...data.filter(item => item.id !== listId), res])
      setVisible(false)
   }
   const deleteList = (id) => {
      setData(data.filter(item => item.id !== id))
   }
   return (
      <Flex
         css={{
            'mt': '$5',
            'px': '$6',
            '@sm': {
               mt: '$10',
               px: '$16',
            },
         }}
         justify={'center'}
         direction={'column'}
      >
         <Text h3>Maydonlar</Text>
         <Flex
            css={{gap: '$8'}}
            align={'center'}
            justify={'between'}
            wrap={'wrap'}
         >
            <Flex
               css={{
                  'gap': '$6',
                  'flexWrap': 'wrap',
                  '@sm': {flexWrap: 'nowrap'},
               }}
               align={'center'}
            >
               <Input
                  css={{width: '100%', maxW: '410px'}}
                  placeholder="Search users"
               />
               <SettingsIcon />
               <TrashIcon />
               <InfoIcon />
               <DotsIcon />
            </Flex>
            <Flex direction={'row'} css={{gap: '$6'}} wrap={'wrap'}>
               <AddUser 
                  addClick={addClick} 
                  closeModal={closeModal}
                  info={info}
                  setInfo={setInfo}
                  visible={visible}
                  selectOptions={selectOptions}
                  setSelectOptions={setSelectOptions}
                  addList={addList}
                  editToggle={editToggle}
                  saveList={saveList}
               />
            </Flex>
         </Flex>
         <TableWrapper columns={columns} users={data} editHandle={editHandle} deleteList={deleteList} />
      </Flex>
   );
};
