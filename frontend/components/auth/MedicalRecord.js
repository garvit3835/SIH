import { Flex, Input, Text, Button, Center } from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react'
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'
import styles from 'pages/auth/patientForm/patientForm.module.css'
import { AiOutlineClose } from "react-icons/ai";
const fileTypes = ["PDF", "DOC", "JPEG"];

const MedicalRecord = (props) => {
  const {file, setFile, diseases, setDiseases} = props
  const ref = useRef()
  const [search,setSearch] = useState([])
  const handleChange = (file) => {
    setFile(file);

  };
  const test = ['jaundice','typhoid','fever','cough','corona','food poisoning','tuberculosis','diarrhea','dengue']
  const filterSearch = (ev)=> {
    const arr = test.filter((el)=> {
      if(ev.target.value!=='') {

        if(el.includes(ev.target.value)){
          return true
        }
      }
    })
    // console.log(arr)
    setSearch(arr)
  }
  const handleDiseasesChange =()=> {
    
    const arr = [...diseases]
    arr.push(ref.current.value)
    // console.log(arr)
    setDiseases(arr)
  }
  const removeDisease =(id)=> {
    const arr = diseases.filter((el,index)=> {
      if(index===id){
        return false;
      }
      return true
    })
    setDiseases(arr)
  }
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
              <Flex gap={5}>

              <Input type='text' className={styles.inp} name='disease' ref={ref} onChange={(ev)=>filterSearch(ev)}/>
              <Button className={styles.btns} onClick={()=>handleDiseasesChange()}>Add</Button>
              </Flex>
            </FormControl>

            {/* filter search coded but need help in ui */}
            {/* {
              search && search.map((el,index)=> {
                return <UnorderedList key={index}>
                <ListItem>{el}</ListItem>
               
              </UnorderedList>
              })
            } */}
            <Flex mt={3}>

            {
              diseases && diseases.map((el,index)=> {
                return <Center key={index} className={styles.diseaseBox} mr={2}>

                  <Text className={styles.disease}>{el}</Text>
                  <AiOutlineClose color='red' cursor={"pointer"} onClick={()=>removeDisease(index)}/>
                </Center>
              })
            }
            </Flex>
    </>
  )
}

export default MedicalRecord
