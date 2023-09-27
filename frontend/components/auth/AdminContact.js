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
import styles from 'pages/auth/adminForm/adminForm.module.css'
import { AiOutlineClose } from "react-icons/ai";
import { FileUploader } from "react-drag-drop-files";
const fileTypes = ["PDF", "DOC", "JPEG"];
const AdminContact = (props) => {
    const { FirstName, setFirstName, lastName, setLastName, phone, setPhone,location,setLocation,setError,file,setFile } = props
    const handleChange = (file) => {
        setFile(file);
    
      };
    const isError = false
    
    return (
        <>

            <Flex flexDirection={'column'}>

                <Flex gap={20} mb={2}>
                    <FormControl isRequired isInvalid={isError}>
                        <FormLabel>First Name</FormLabel>
                        <Input type='text' name='name' value={FirstName !== '' ? FirstName : ''} isRequired color={'orange'} className={styles.inp} placeholder='John' _placeholder={{ color: "inherit" }} onChange={(ev) => setFirstName(ev.target.value)} />
                        {!isError ? (
                            ''
                        ) : (
                            <FormErrorMessage>This field is required.</FormErrorMessage>
                        )}
                    </FormControl>
                    <FormControl>
                        <FormLabel>Last Name</FormLabel>
                        <Input type='text' name='name'  isRequired color={'orange'} value={lastName !== '' ? lastName : ''} className={styles.inp} placeholder='Doe' _placeholder={{ color: "inherit" }} onChange={(ev) => setLastName(ev.target.value)} />

                    </FormControl>
                </Flex>

                <FormControl isRequired isInvalid={isError} mb={4}>
                    <FormLabel>Phone</FormLabel>
                    <Input type='text' name='phone' isRequired  color={'orange'} value={phone !== '' ? phone : ''} className={styles.inp} placeholder='1234567899' _placeholder={{ color: "inherit" }} onChange={(ev) => setPhone(ev.target.value)} />
                    {!isError ? (
                            ''
                        ) : (
                            <FormErrorMessage>This field is required.</FormErrorMessage>
                        )}
                </FormControl>

                <FormControl isRequired isInvalid={isError} mb={4}>
                    <FormLabel>Location</FormLabel>
                    <Input type='text' name='location' isRequired  color={'orange'} value={location !== '' ? location : ''} className={styles.inp} placeholder='Delhi' _placeholder={{ color: "inherit" }} onChange={(ev) => setLocation(ev.target.value)} />
                    {!isError ? (
                            ''
                        ) : (
                            <FormErrorMessage>This field is required.</FormErrorMessage>
                        )}
                </FormControl>
                
            <FormLabel>Proof of Identification</FormLabel>
            <Flex flexDirection={'column'} className={styles.dragContainer}>
        <FileUploader handleChange={handleChange} name="file" types={fileTypes}
          children=<Flex flexDirection={'column'} className={styles.dragBox}>
            <Text className={styles.dropText}>
              Drop files here
            </Text>
            <Text fontSize={18} color={'orange'}>Or</Text>
            <Flex gap={5} alignItems={'center'} className={styles.fileBtnContainer}>
              <Button className={styles.btns}>Choose File</Button>
              <Text fontSize={18} color={'orange'}>{file === null ? "No file chosen" : file.name}</Text>
              {file !== null ? <AiOutlineClose color='red' cursor={"pointer"} onClick={() => setFile(null)} /> : ""}
            </Flex>
            
          </Flex>

        />

      </Flex>
            </Flex>
           
            
        </>
    )
}

export default AdminContact
