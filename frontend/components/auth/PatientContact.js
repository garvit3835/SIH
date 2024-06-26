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
    const { familyMember, setFamilyMember, FirstName, setFirstName, lastName, setLastName, phone, setPhone,setError } = props
    
    const isError = false
    
    return (
        <>
            <Flex flexDirection={'column'}>

                <Flex gap={20} mb={2}>
                    <FormControl isRequired isInvalid={isError}>
                        <FormLabel>First Name</FormLabel>
                        <Input type='text' name='name' value={FirstName !== '' ? FirstName : ''} isRequired color={'teal'} className={styles.inp} placeholder='John' _placeholder={{ color: "inherit" }} onChange={(ev) => setFirstName(ev.target.value)} />
                        {!isError ? (
                            ''
                        ) : (
                            <FormErrorMessage>This field is required.</FormErrorMessage>
                        )}
                    </FormControl>
                    <FormControl>
                        <FormLabel>Last Name</FormLabel>
                        <Input type='text' name='name'  isRequired color={'teal'} value={lastName !== '' ? lastName : ''} className={styles.inp} placeholder='Doe' _placeholder={{ color: "inherit" }} onChange={(ev) => setLastName(ev.target.value)} />

                    </FormControl>
                </Flex>

                <FormControl isRequired isInvalid={isError} mb={4}>
                    <FormLabel>Phone</FormLabel>
                    <Input type='text' name='phone' isRequired  color={'teal'} value={phone !== '' ? phone : ''} className={styles.inp} placeholder='1234567899' _placeholder={{ color: "inherit" }} onChange={(ev) => setPhone(ev.target.value)} />
                    {!isError ? (
                            ''
                        ) : (
                            <FormErrorMessage>This field is required.</FormErrorMessage>
                        )}
                </FormControl>
            </Flex>
            <Flex flexDirection={'column'}>

                <Flex alignItems={'center'} >
                    {/* <Button><AiOutlineUserAdd/></Button> */}
                    <FamilyMembersModal setFamilyMember={setFamilyMember} familyMember={familyMember} />
                    <FormLabel m={0}>Add Family Members</FormLabel>


                </Flex>
            </Flex>
            
        </>
    )
}

export default PatientContact
