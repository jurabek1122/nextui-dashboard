import {Col, Row, User, Text, Tooltip} from '@nextui-org/react';
import React from 'react';
import {DeleteIcon} from '../icons/table/delete-icon';
import {EditIcon} from '../icons/table/edit-icon';
import {EyeIcon} from '../icons/table/eye-icon';
import {IconButton, StyledBadge} from './table.styled';

export const RenderCell = ({ user, columnKey, editHandle, deleteList }) => {
   // @ts-ignore
   const cellValue = user[columnKey];
   switch (columnKey) {
      case 'name':
         return (
            <Text b size={14} css={{tt: 'capitalize'}}>
               {cellValue}
            </Text>
         );
      case 'status':
         return (
            // @ts-ignore
            <StyledBadge type={user.status ? 'active' : 'inactive'}>{user.status ? 'active' : 'inactive'}</StyledBadge>
         );
      case 'type':
         return (
            <Text b size={14} css={{tt: 'capitalize'}}>
               {cellValue}
            </Text>
         );
      case 'isRequired':
         return (
            <Text b size={14} css={{tt: 'capitalize'}}>
               {cellValue ? 'ha' : 'yo`q'}
            </Text>
         );
      case 'actions':
         return (
            <Row
               justify="center"
               align="center"
               css={{'gap': '$8', '@md': {gap: 0}}}
            >
               <Col css={{d: 'flex'}}>
                  <Tooltip content="Edit item">
                     <IconButton
                        onClick={() => console.log('Edit user', user.id)}
                     >
                        <EditIcon size={20} fill="#979797" onClick={() => editHandle(user)} />
                     </IconButton>
                  </Tooltip>
               </Col>
               <Col css={{d: 'flex'}}>
                  <Tooltip
                     content="Delete item"
                     color="error"
                     onClick={() => console.log('Delete user', user.id)}
                  >
                     <IconButton>
                        <DeleteIcon size={20} fill="#FF0080" onClick={() => deleteList(user.id)} />
                     </IconButton>
                  </Tooltip>
               </Col>
            </Row>
         );
      default:
         return cellValue;
   }
};
