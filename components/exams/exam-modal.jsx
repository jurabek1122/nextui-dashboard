import {Button, Divider, Input, Modal, Text} from '@nextui-org/react';
import { useState } from 'react';
import {Flex} from '../styles/flex';

export const ExamModal = () => {
   const [visible, setVisible] = useState(false);

   const openModal = () => {
    setVisible(true)
   }

   const handleSubmit = (e) => {
    e.preventDefault()
    console.log('ishladi')
   }
   return (
      <div>
         <Button auto onClick={openModal}>
            Add Exam
         </Button>
         <Modal
            closeButton
            aria-labelledby="modal-title"
            width="600px"
            open={visible}
            onClose={() => setVisible(false)}
         >
            <form onSubmit={handleSubmit}>
            <Modal.Header css={{justifyContent: 'start'}}>
               <Text id="modal-title" h4>
                  Add new exam
               </Text>
            </Modal.Header>
            <Divider css={{my: '$5'}} />
            <Modal.Body css={{py: '$10'}}>
               <Flex
                  direction={'column'}
                  css={{
                     'flexWrap': 'wrap',
                     'gap': '$8',
                     '@lg': {flexWrap: 'nowrap', gap: '$12'},
                  }}
               >
                  <Flex
                     css={{
                        'gap': '$10',
                        'flexWrap': 'wrap',
                        '@lg': {flexWrap: 'nowrap'},
                     }}
                  >
                     <Input
                        label="First Name"
                        bordered
                        clearable
                        fullWidth
                        size="lg"
                        required
                        placeholder="First Name"
                     />
                     <Input
                        label="Last Name"
                        clearable
                        bordered
                        fullWidth
                        size="lg"
                        placeholder="Last Name"
                        required
                     />
                  </Flex>
               </Flex>
            </Modal.Body>
            <Divider css={{my: '$5'}} />
            <Modal.Footer>
               <Button auto type='submit'>
                  Add User
               </Button>
            </Modal.Footer>
            </form>
         </Modal>
      </div>
   );
};
