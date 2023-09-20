import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    FormControl,
    FormLabel,
    Input,
    Flex
} from '@chakra-ui/react'
import { AiOutlineUserAdd } from 'react-icons/ai'
import styles from '../../pages/auth/patientForm/patientForm.module.css'
const FamilyMembersModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button onClick={onOpen}><AiOutlineUserAdd /></Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Family Member Details</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex gap={10}>

                        <FormControl>
                            <FormLabel>First name</FormLabel>
                            <Input  placeholder='First name' />
                        </FormControl>

                        <FormControl >
                            <FormLabel>Last name</FormLabel>
                            <Input placeholder='Last name' />
                        </FormControl>
                        </Flex>
                        <FormControl mt={4}>
                            <FormLabel>Email</FormLabel>
                            <Input placeholder='Email' type='email'/>
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Contact Number</FormLabel>
                            <Input placeholder='Contact Number' type="number"/>
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Address</FormLabel>
                            <Input placeholder='Contact Number' />
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Previous Diseases</FormLabel>
                            <Input placeholder='Contact Number' />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}  minW={"20%"} className={styles.patientBtn}>
                            Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default FamilyMembersModal
