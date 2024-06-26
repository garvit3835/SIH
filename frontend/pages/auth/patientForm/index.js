import React, { useState } from 'react'
import MyStepper from '/components/common/myStepper'
import { Box, Button, Flex,Card,CardBody,Text } from '@chakra-ui/react'
import styles from '../patientForm/patientForm.module.css'
import PatientContact from '../../../components/auth/PatientContact'
import MedicalRecord from '../../../components/auth/MedicalRecord'
import PatientLocation from '../../../components/auth/PatientLocation'
import { wrap } from 'framer-motion'
import cn from "classnames";
import { infoSign } from '@/api/patients'
import { useRouter } from 'next/router'
const patientForm = () => {
  const router = useRouter()
  const [page,changePage] = useState(0)
  const [load,setLoad] = useState(false)
  const [familyMember, setFamilyMember] = useState([])
  const [FirstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [phone,setPhone] = useState('')
  const [file, setFile] = useState(null);
  const [diseases,setDiseases] = useState([])
  const [currentPos, setCurrentPos] = useState({ lat: 28.7041, lng: 77.1025 });

  // errors in form to be sorted
  const [error,isError] = useState(false)
  const handlePrev = ()=> {
    changePage(page-1)
  }
  const handleNext = ()=> {
    // if(!isError) {

      changePage(page+1)
    // }
  }
  const handleSubmit = ()=> {
    setLoad(true);
    const name = FirstName + ' ' + lastName
    // console.log(phone)
    infoSign({name,number:phone,gender:"male",family:familyMember,address:"xyz",latitude:currentPos.lat,longitude:currentPos.lng})
    
    setTimeout(() => {
      setLoad(false)
      router.push('/p')
    }, 2000);
    changePage(page+1)
  }
  return (
    <>
    <Flex className={styles.logoContainer}>
    <img src="/images/tempLogo.png" width={40}></img>
          <h1 className={styles.title}>MediBridge</h1>
    </Flex>
    <Box className={styles.main}>
    <div className={styles.stepper}>

    <MyStepper page={page}/>
    </div>

    <Flex flexDirection={'column'} justifyContent={'space-between'} height={250} className={cn(styles.mid, { [styles.map]: page === 2 })}>

    {
      page===0 && <PatientContact isError={isError} familyMember={familyMember} setFamilyMember={setFamilyMember} FirstName={FirstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} phone={phone} setPhone={setPhone}/>
    }
    {
      page===1 && <MedicalRecord isError={isError} file={file} setFile={setFile} diseases={diseases} setDiseases={setDiseases}/>
    }
    {
      page>=2 && <PatientLocation isError={isError} setCurrentPos={setCurrentPos}/>
    }
    </Flex>
    <Flex className={styles.cardContainer}>

    {
      page===0 && familyMember.length>0 && familyMember.map((el, index) => {
        return <Card className={styles.card} key={index}>
        <CardBody>
          <Text><strong>Name</strong>: {el.FirstName} {el.LastName}</Text>
          <Text><strong>Number</strong>: {el.phone}</Text>
          <Text><strong>Email</strong>: {el.email}</Text>
        </CardBody>
      </Card>
    })
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
