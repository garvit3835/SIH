import React, { useState } from 'react'
import MyStepper from '/components/common/myStepper'
import { Box, Button, Flex,Card,CardBody,Text } from '@chakra-ui/react'
import styles from '../adminForm/adminForm.module.css'
import AdminContact from '../../../components/auth/AdminContact'
import cn from "classnames";
import { infoSign } from '@/api/hospital'

const adminForm = () => {
    const [page,changePage] = useState(0)
    const [FirstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [load,setLoad] = useState(false) 
    const [phone,setPhone] = useState('') 
    const [location,setLocation] = useState('') 
    const [file,setFile] = useState('') 
    // const [location, setLocation] = useState({ lat: 28.7041, lng: 77.1025 });

    const [error,isError] = useState(false)
    const handlePrev = ()=> {
      changePage(page-1)
    }
    const handleNext = ()=> {
      // if(!isError) {
  
        changePage(page+1)
      // }
    }
    const handleSubmit = () => {
        setLoad(true);
        const name = FirstName + ' ' + lastName
        infoSign({name,number:phone,address:location,latitude:70,longitude:80})
        setTimeout(() => {
          setLoad(false);
        }, 2000);
      };
    
      return (
        <>
        <Flex className={styles.logoContainer}>
        <img src="/images/tempLogo.png" width={40}></img>
              <h1 className={styles.title}>MediBridge</h1>
        </Flex>
        <Box className={styles.main}>
        {/* <div className={styles.stepper}> */}
    
        {/* <MyStepper page={page}/>
        </div> */}
    

        <Flex flexDirection={'column'} justifyContent={'space-between'} height={250} className={cn(styles.mid, { [styles.map]: page === 2 })}>
            {
            <AdminContact  firstName={FirstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} phone={phone} setPhone={setPhone} location={location} setLocation={setLocation} file={file} setFile={setFile}/>
            }
            
        </Flex>
        <Flex>
        {
                <Button
                isLoading = {load===true?true:false}
                className={styles.btns}
                colorScheme='teal'
                variant='outline'
                onClick={()=>handleSubmit()}
                mt={4}
              >
                Submit
              </Button>
            }
        </Flex>
        </Box>
    </>
          );
}

export default adminForm;
