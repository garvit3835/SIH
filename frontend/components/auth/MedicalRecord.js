import { Flex, Input, Text, Button } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
import styles from 'pages/auth/patientForm/patientForm.module.css'
import { AiOutlineClose } from "react-icons/ai";
const fileTypes = ["PDF", "DOC", "JPEG"];
const MedicalRecord = () => {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);

  };
  useEffect(() => {
    console.log(file)
  }, [file])
  return (
    <>
      <FormControl>
        <FormLabel>Medical prescription</FormLabel>

        {/* <FormHelperText>Your previous prescription will help us understand your current problems better.</FormHelperText> */}
      </FormControl>
      <Flex flexDirection={'column'} className={styles.dragContainer}>
        <FileUploader handleChange={handleChange} name="file" types={fileTypes}
          children=<Flex flexDirection={'column'} className={styles.dragBox}>
            <Text className={styles.dropText}>
              Drop files here
            </Text>
            <Text fontSize={18} color={'teal'}>Or</Text>
            <Flex gap={5} alignItems={'center'} className={styles.fileBtnContainer}>
              <Button className={styles.btns}>Choose File</Button>
              <Text fontSize={18} color={'teal'}>{file === null ? "No file chosen" : file.name}</Text>
              {file !== null ? <AiOutlineClose color='red' cursor={"pointer"} onClick={() => setFile(null)} /> : ""}
            </Flex>
            
          </Flex>

        />

      </Flex>
      <FormControl mt={5}>
              <FormLabel>Chronic Diseases(if any)</FormLabel>
              <Input type='text' className={styles.inp}/>
              
            </FormControl>
    </>
  )
}

export default MedicalRecord
