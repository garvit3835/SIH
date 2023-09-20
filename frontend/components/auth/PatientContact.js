import React from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button,
    Flex
} from '@chakra-ui/react'
import FamilyMembersModal from './FamilyMembersModal'
import styles from 'pages/auth/patientForm/patientForm.module.css'

const PatientContact = () => {
    return (
        <>
            <FormControl>
                <FormLabel>First Name</FormLabel>
                <Input type='text' name='name' isRequired/>
               
            </FormControl>
            <FormControl>
                <FormLabel>Last Name</FormLabel>
                <Input type='text' name='name' isRequired/>
               
            </FormControl>
            <FormControl>
                <FormLabel>Phone</FormLabel>
                <Input type='text' name='phone' isRequired/>
               
            </FormControl>
            <Flex alignItems={'center'}>
                {/* <Button><AiOutlineUserAdd/></Button> */}
                <FamilyMembersModal/>
                <FormLabel m={0}>Add Family Members</FormLabel>
                
               
            </Flex>
        </>
    )
}

export default PatientContact
