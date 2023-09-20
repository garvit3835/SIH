import React, { useState } from 'react'
import MyStepper from '../../../components/common/myStepper'
import { Box, Button, Flex } from '@chakra-ui/react'
import styles from '../patientForm/patientForm.module.css'
import PatientContact from '../../../components/auth/PatientContact'
import MedicalRecord from '../../../components/auth/MedicalRecord'
import PatientLocation from '../../../components/auth/PatientLocation'

const patientForm = () => {
  const [page,changePage] = useState(0)
  const [load,setLoad] = useState(false)
  const handlePrev = ()=> {
    changePage(page-1)
  }
  const handleNext = ()=> {
    changePage(page+1)
  }
  const handleSubmit = ()=> {
    setLoad(true);
    setTimeout(() => {
      setLoad(false)
    }, 2000);
    changePage(page+1)
  }
  return (
    <>
    <Box className={styles.main}>

    <MyStepper page={page}/>
    <Flex flexDirection={'column'}>

    {
      page===0 && <PatientContact/>
    }
    {
      page===1 && <MedicalRecord/>
    }
    {
      page>=2 && <PatientLocation/>
    }
    </Flex>
    <Flex minW={'inherit'} justifyContent={'space-around'}>
    {
      page!==0 && <Button colorScheme='teal' variant="outline" className={styles.btns} onClick={()=>{handlePrev()}}>Prev</Button>
    }
    {
      page<2 &&<Button colorScheme='teal' variant="outline" className={styles.btns} onClick={()=>{handleNext()}}>Next</Button>
    }
    {
      page>=2 &&<Button
      isLoading = {load===true?true:false}
      className={styles.btns}
      colorScheme='teal'
      variant='outline'
      onClick={()=>handleSubmit()}
    >
      Submit
    </Button>
    }
    
    </Flex>
    </Box>
    </>
  )
}

export default patientForm
