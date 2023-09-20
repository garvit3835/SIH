import React, { useEffect, useState } from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button,
    Flex,
    Card,
    Stack,
    CardBody,
    CardFooter,
    Heading,
    Text
} from '@chakra-ui/react'
import FamilyMembersModal from './FamilyMembersModal'
import styles from 'pages/auth/patientForm/patientForm.module.css'

const PatientContact = (props) => {
    const {familyMember,setFamilyMember} = props
    useEffect(()=> {
        console.log(familyMember)
    },[familyMember])
    return (
        <>
            <Flex flexDirection={'column'}>

                <Flex gap={20} mb={2}>
                    <FormControl isRequired>
                        <FormLabel>First Name</FormLabel>
                        <Input type='text' name='name' isRequired color={'teal'} className={styles.inp} placeholder='John' _placeholder={{ color: "inherit" }} />

                    </FormControl>
                    <FormControl>
                        <FormLabel>Last Name</FormLabel>
                        <Input type='text' name='name' isRequired color={'teal'} className={styles.inp} placeholder='Doe' _placeholder={{ color: "inherit" }} />

                    </FormControl>
                </Flex>

                <FormControl isRequired>
                    <FormLabel>Phone</FormLabel>
                    <Input type='text' name='phone' isRequired mb={4} color={'teal'} className={styles.inp} placeholder='1234567899' _placeholder={{ color: "inherit" }} />

                </FormControl>
            </Flex>
            <Flex flexDirection={'column'}>

                <Flex alignItems={'center'} >
                    {/* <Button><AiOutlineUserAdd/></Button> */}
                    <FamilyMembersModal setFamilyMember={setFamilyMember} familyMember={familyMember}/>
                    <FormLabel m={0}>Add Family Members</FormLabel>
                    

                </Flex>
            </Flex>
            {/* <Flex  className={styles.cardContainer}>
            {
                        
                    }
            </Flex> */}
        </>
    )
}

export default PatientContact
