import React, { useState } from 'react'
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
import styles from 'pages/auth/patientForm/patientForm.module.css'
const FamilyMembersModal = (props) => {
    const {setFamilyMember,familyMember} = props
    const [memberData,setMemberData] = useState({
        FirstName:"",
        LastName: "",
        email: "",
        phone: "",
        address: "",
        diseases: "",

    })
    const handleData = (ev)=> {
        const key = ev.target.name
        // console.log(key)
        const value = ev.target.value
        const updatedObj = {
            ...memberData, 
             [key]: value
        }
        // console.log(updatedObj)
        setMemberData(updatedObj)
        
    }
    const handleSubmit = ()=> {
        const arr = [...familyMember]
        arr.push(memberData)
        setMemberData({
            FirstName:"",
        LastName: "",
        email: "",
        phone: "",
        address: "",
        diseases: "",
        })
        setFamilyMember(arr);
        console.log(familyMember)
        onClose()
    }
    var { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button onClick={onOpen} className={styles.btns} mr={3}><AiOutlineUserAdd /></Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Family Member Details</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex gap={10}>

                        <FormControl isRequired>
                            <FormLabel>First name</FormLabel>
                            <Input  className={styles.inp} placeholder='John' _placeholder={{color:"inherit"}} name='FirstName' color={'teal'} onChange={(ev)=>handleData(ev)}/>
                        </FormControl>

                        <FormControl >
                            <FormLabel>Last name</FormLabel>
                            <Input className={styles.inp} placeholder='Doe' _placeholder={{color:"inherit"}} name='LastName' color={'teal'} onChange={(ev)=>handleData(ev)}/>
                        </FormControl>
                        </Flex>
                        <FormControl mt={4} isRequired>
                            <FormLabel>Email</FormLabel>
                            <Input  className={styles.inp} placeholder='email@mail.com' _placeholder={{color:"inherit"}} name='email' type='email'color={'teal'} onChange={(ev)=>handleData(ev)}/>
                        </FormControl>
                        <FormControl mt={4} isRequired>
                            <FormLabel>Contact Number</FormLabel>
                            <Input  className={styles.inp} placeholder='1234567899' _placeholder={{color:"inherit"}} name='phone' type="number"color={'teal'} onChange={(ev)=>handleData(ev)}/>
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Address</FormLabel>
                            <Input className={styles.inp} placeholder='Abc street xyz lane' _placeholder={{color:"inherit"}} name='address' color={'teal'} onChange={(ev)=>handleData(ev)}/>
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel>Previous Diseases</FormLabel>
                            <Input className={styles.inp} placeholder='Jaundice' _placeholder={{color:"inherit"}} name='diseases' color={'teal'} onChange={(ev)=>handleData(ev)}/>
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button color={"red"}  mr={3} onClick={onClose}  minW={"20%"}>
                            Close
                        </Button>
                        <Button  className={styles.btns} onClick={()=>{handleSubmit()}}>Submit</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default FamilyMembersModal
