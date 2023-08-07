import {Button, Checkbox, Divider, Input, Modal, Text, styled} from '@nextui-org/react';
import { useState } from 'react';
import {Flex} from '../styles/flex';
import Select from '../styles/Select';
import CustomItem from './custom-item';
import { DeleteIcon } from '../icons/table/delete-icon';

export const AddUser = ({ addClick, closeModal, visible, info, setInfo, selectOptions, setSelectOptions, addList, editToggle, saveList }) => {

   const Label = styled('label', {
      margin: '5px 15px 0 0'
   })
console.log(editToggle, '111')
   const typeOptions = [
      {
         value: 'select',
         title: 'Ro`yhatdan biri'
      },
      {
         value: 'multiSelect',
         title: 'Ro`yhatdan bir nechtasi'
      },
      {
         value: 'text',
         title: 'Text'
      },
      {
         value: 'raqam',
         title: 'Raqam'
      },
      {
         value: 'textarea',
         title: 'Textarea'
      },
      {
         value: 'boolean',
         title: 'Ha / Yo`q'
      },
      {
         value: 'date',
         title: 'Date'
      }
   ]

   const  { name, status, type, about, title, filler, isRequired, placement, wide } = info

   const handleChage = (e) => {
      setInfo(prev => ({
         ...prev,
         [e.target.id]: e.target.value
       }))
   }
   const  optionsChange = (e, i) => {
      let data = [...selectOptions]
      data[i][e.target.name] = e.target.value;
      setSelectOptions(data)
   }
   const addEmployeer = () => {
      const obj = {
         label: '',
         value: ''
      }
      setSelectOptions([...selectOptions, obj])
   }

   const removeOption = (i) => {
      setSelectOptions(selectOptions.filter((_, index) => index !== i))
   }

   return (
      <div>
         <Button auto onClick={addClick}>
            Add
         </Button>
         <Modal
            closeButton
            aria-labelledby="modal-title"
            width="800px"
            open={visible}
            onClose={closeModal}
         >
            <Modal.Header css={{justifyContent: 'start'}}>
               <Text id="modal-title" h4>
                  Umumiy ma`lumotlar
               </Text>
            </Modal.Header>
            <Divider css={{my: '$5'}} />
            <Modal.Body css={{py: '$5'}}>
               <Flex
                  direction={'row'}
                  css={{
                     'flexWrap': 'wrap',
                     'gap': '$8',
                     '@lg': {flexWrap: 'nowrap', gap: '$12'},
                  }}
               >
                  <Flex
                     direction={'column'}
                     css={{
                        'gap': '$6',
                        'flexWrap': 'wrap',
                        '@lg': {flexWrap: 'nowrap'},
                     }}
                  >
                     <Checkbox 
                        id='status'
                        size='sm'
                        isSelected={status}
                        onChange={() => setInfo(prev => ({...prev, status: !status}))}
                     >Holati</Checkbox>
                     <Flex direction={'row'}>
                        <Label>Nomi</Label>
                        <Input
                           bordered
                           clearable
                           fullWidth
                           size="md"
                           placeholder="Name"
                           id='name'
                           value={name}
                           onChange={handleChage}
                        />
                     </Flex>
                     <Flex direction={'row'}>
                        <Label>Turi</Label>
                        <Select 
                           id='type'
                           value={type}
                           handleChage={handleChage}
                           options={typeOptions}
                           title='Turini tanlang'
                        />
                     </Flex>
                     <Flex direction={'row'}>
                        <Label>Sarlavha</Label>
                        <Input
                           clearable
                           bordered
                           fullWidth
                           size="md"
                           placeholder="Tavsif"
                           id='about'
                           value={about}
                           onChange={handleChage}
                        />
                     </Flex>
                     <Flex direction={'row'}>
                        <Label>Tavsif</Label>
                        <Input
                           clearable
                           bordered
                           fullWidth
                           size="md"
                           placeholder="Sarlavha"
                           id='title'
                           value={title}
                           onChange={handleChage}
                        />
                     </Flex>
                     <Flex direction={'row'}>
                        <Label>To`ldiruvchi</Label>
                        <Input
                           clearable
                           bordered
                           fullWidth
                           size="md"
                           placeholder="To`ldiruvchi"
                           id='filler'
                           value={filler}
                           onChange={handleChage}
                        />
                     </Flex>

                     
                     <Flex direction={'row'}>
                        <Label>Kengligi</Label>
                        <Input
                           type='number'
                           clearable
                           bordered
                           fullWidth
                           size="md"
                           placeholder="Kengligi"
                           id='wide'
                           value={wide}
                           onChange={handleChage}
                           min='1'
                           max='12'
                        />
                     </Flex>
                     <Checkbox 
                        size='sm'
                        id='placement'
                        isSelected={placement}
                        onChange={() => setInfo(prev => ({...prev, placement: !placement}))}
                     >Joylashuv turi</Checkbox>
                     <Checkbox 
                        size='sm'
                        id='isRequired'
                        isSelected={isRequired}
                        onChange={() => setInfo(prev => ({...prev, isRequired: !isRequired}))}
                     >Majburiy maydon</Checkbox>
                  </Flex>
                  <Flex
                     direction={'column'}
                     css={{
                        'gap': '$6',
                        'width': '500px',
                        'flexWrap': 'wrap',
                        '@lg': {flexWrap: 'nowrap'},
                     }}
                  >
                     <Flex justify={"between"} direction={"row"} width='500px'>
                        <Text >{name}</Text>
                        <CustomItem 
                           type={type}
                        />
                     </Flex>
                     {type.includes('elect') ? <>
                        <Flex direction={"column"}>
                        {selectOptions.map((item, i) => {
                           return <Flex key={i} direction={"column"} css={{ 'gap': '$6' }}>
                              <DeleteIcon size={20} fill="#FF0080" onClick={() => removeOption(i)} />
                              <Flex direction={"row"} justify={"between"} >
                                 <Label>label</Label>
                                 <Input 
                                    clearable
                                    bordered
                                    size="md"
                                    type="text"
                                    name='title'
                                    value={item.title} 
                                    onChange={(e) => optionsChange(e, i)}
                                 />
                              </Flex>
                              <Flex direction={"row"} justify={"between"}>
                                 <Label>value</Label>
                                 <Input 
                                    clearable
                                    bordered
                                    size="md"
                                    type="text"
                                    name='value'
                                    value={item.value} 
                                    onChange={(e) => optionsChange(e, i)}
                                 />
                              </Flex>
                           </Flex>
                        })}
                        <Button auto onClick={addEmployeer} css={{ mt: '$4'}}>Add Option</Button>
                     </Flex>
                     </> : null}
                     
                  </Flex>
                  
               </Flex>
            </Modal.Body>
            <Divider css={{my: '$5'}} />
            <Modal.Footer>
               {editToggle ? <Button auto onClick={addList}>
                  Add
               </Button> : <Button auto onClick={saveList}>
                  Save
               </Button>}
               
            </Modal.Footer>
         </Modal>
      </div>
   );
};

