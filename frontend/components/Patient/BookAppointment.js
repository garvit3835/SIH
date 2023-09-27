import React, { useContext, useState } from 'react'
import styles from "components/common/Header/header.module.css";
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
    Flex,
    Center,
    Textarea,
    FormControl,
    FormLabel,
    Input,
    Select,
    Radio,
    Box,
    Stack,
    RadioGroup
} from '@chakra-ui/react'
import { inherits } from 'util';
import {useAppData} from '../context/AppContext'
import { createAppointment } from '@/api/patients';

const BookAppointment = () => {
    const { isLoading, enableLoader, disableLoader } = useAppData();

    const [load,setLoad] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [appointmentData,setAppointmentData] = useState({
        prefix:"Mr.",
        firstName: "",
        lastName: "",
        number: null,
        email: "",
        area: "",
        city:"",
        state:"",
        postal:"",
        description:"",
        specialization:"",
        doctor:"",
        date:"",
        timeSlot:"",
        isEmergency:false,

    })
    const handleData = (ev)=> {
        const key = ev.target.name
        let value = ev.target.value
    if(key==='isEmergency') {
        if(value==='1') value=true
        else value=false
    }
        // console.log(value)
        const updatedObj = {
                ...appointmentData,
             [key]: value
        }
        // console.log(updatedObj)
        setAppointmentData(updatedObj)
        
    }

    const handleSubmit =()=> {
       enableLoader()
        // console.log(appointmentData)

        // API CALL
        createAppointment({d_id:123,h_id:456,desc:"hello world",time:"9.30pm",emergency:false,status:true,prescription:"abc"})
        setTimeout(() => {
            disableLoader()
        }, 3000);
        
    }
    return (
        <>
            <Button variant="solid" className={styles.bookBtn} onClick={onOpen}>
                Book Appointment
            </Button>
            <Modal onClose={onClose} size={'full'} isOpen={isOpen} motionPreset='slideInBottom' closeOnOverlayClick={false}>
                <ModalOverlay />
                <ModalContent>
                    <Flex className={styles.logoContainer}>
                        <img src="/images/Logo.svg" width={40}></img>
                        <h1 className={styles.title}>MediBridge</h1>
                    </Flex>
                    <ModalHeader><Center marginTop={"65px"}>Book your Appointment</Center></ModalHeader>
                    <ModalCloseButton />
                    <ModalBody display={'flex'}>
                        <Flex flex={1} justifyContent={'space-around'} marginTop={"40px"} className={styles.appointmentMain}>
                            <Center maxW={"45%"} minW={"45%"} flexDirection={'column'} className={styles.left}>
                                <Flex className={styles.topLeft}>
                                    <Flex width={"100%"}>
                                        <h1 className={styles.h1}>Patient Details</h1>
                                    </Flex>
                                    <Flex width={"100%"} justifyContent={'flex-start'} gap={"3%"} >
                                        <Flex>
                                            <FormControl>
                                                <FormLabel>Prefix</FormLabel>
                                                <Select className={styles.inp} name='prefix' color={'teal'} onChange={(ev)=>handleData(ev)}>
                                                    <option>Mr.</option>
                                                    <option>Ms.</option>
                                                    <option>Master.</option>
                                                    <option>Dr.</option>
                                                </Select>
                                            </FormControl>
                                        </Flex>
                                        <Flex>
                                            <FormControl isRequired>
                                                <FormLabel>First name</FormLabel>
                                                <Input placeholder='First name' className={styles.inp} name='firstName' color={'teal'} _placeholder={{color:"inherit"}} onChange={(ev)=>handleData(ev)}/>
                                            </FormControl>
                                        </Flex>
                                        <Flex>
                                            <FormControl>
                                                <FormLabel>Last name</FormLabel>
                                                <Input placeholder='Last name' className={styles.inp} name='lastName'color={'teal'} _placeholder={{color:"inherit"}} onChange={(ev)=>handleData(ev)}/>
                                            </FormControl>
                                        </Flex>
                                    </Flex>
                                    <Flex width={"100%"} gap={"4%"}>
                                        <FormControl isRequired width={'41%'}>
                                            <FormLabel>Contact Number</FormLabel>
                                            <Input type='number' placeholder='8929988954' className={styles.inp} name='number' color={'teal'} _placeholder={{color:"inherit"}} onChange={(ev)=>handleData(ev)}/>
                                        </FormControl>
                                        <FormControl width={'41%'}>
                                            <FormLabel>Email</FormLabel>
                                            <Input type='email' placeholder='mail@email.com' className={styles.inp} name='email' color={'teal'} _placeholder={{color:"inherit"}} onChange={(ev)=>handleData(ev)}/>
                                        </FormControl>
                                    </Flex>
                                </Flex>
                                <Flex className={styles.botLeft}>
                                    <Flex width={"100%"}>
                                        <h1 className={styles.h1}>Address Details</h1>
                                    </Flex>
                                    <Flex width={"100%"} gap={"3%"}>
                                        <FormControl isRequired width={"41%"}>
                                            <FormLabel>Area</FormLabel>
                                            <Input type='text' placeholder='abc street' name='area' className={styles.inp} color={'teal'} _placeholder={{color:"inherit"}}onChange={(ev)=>handleData(ev)}/>
                                        </FormControl>
                                        <FormControl isRequired width={"41%"}>
                                            <FormLabel>City</FormLabel>
                                            <Input type='text' className={styles.inp} name='city' placeholder='New Delhi' color={'teal'} _placeholder={{color:"inherit"}} onChange={(ev)=>handleData(ev)}/>
                                        </FormControl>
                                    </Flex>
                                    <Flex width={"100%"} gap={"3%"}>
                                        <FormControl isRequired width={"41%"}>
                                            <FormLabel>State</FormLabel>
                                            <Input type='text' placeholder='Haryana' name='state' className={styles.inp} color={'teal'} _placeholder={{color:"inherit"}} onChange={(ev)=>handleData(ev)}/>
                                        </FormControl>
                                        <FormControl isRequired width={"41%"}>
                                            <FormLabel>Postal Code</FormLabel>
                                            <Input type='number' placeholder='110063' name='postal' className={styles.inp} color={'teal'} _placeholder={{color:"inherit"}} onChange={(ev)=>handleData(ev)}/>
                                        </FormControl>
                                    </Flex>
                                </Flex>

                            </Center>
                            <Box className={styles.vl}></Box>
                            <Center maxW={"45%"} minW={"45%"} flexDirection={'column'} className={styles.right}>
                                <Flex className={styles.topRight}>
                                    <Flex width={"100%"}>
                                        <h1 className={styles.h1}>Symptom Details</h1>
                                    </Flex>
                                    <Flex width={"100%"} gap={"3%"}>
                                        <FormControl isRequired width={"41%"}>
                                            <FormLabel>Description</FormLabel>
                                            <Textarea color={'teal'} _placeholder={{color:"inherit"}} name='description' className={styles.inp} onChange={(ev)=>handleData(ev)}></Textarea>
                                        </FormControl>
                                        <FormControl width={"41%"}>
                                            <FormLabel>Specialization required</FormLabel>
                                            <Input type='text' placeholder={"Cardiologist"} name='specialization' className={styles.inp} color={'teal'} _placeholder={{color:"inherit"}} onChange={(ev)=>handleData(ev)}/>
                                        </FormControl>
                                    </Flex>
                                    <Flex width={"100%"} gap={"3%"}>
                                        <FormControl width={"41%"}>
                                            <FormLabel>Preferred Doctor(if any)</FormLabel>
                                            <Input type='text' className={styles.inp} color={'teal'} name='doctor' _placeholder={{color:"inherit"}} onChange={(ev)=>handleData(ev)}/>
                                        </FormControl>

                                    </Flex>
                                </Flex>
                                <Flex className={styles.botRight}>
                                    <Flex width={"100%"}>
                                        <h1 className={styles.h1}>Slot Details</h1>
                                    </Flex>
                                    <Flex width={"100%"} gap={"3%"}>

                                        <FormControl width={"41%"}>
                                            <FormLabel isRequired>Preferred Date</FormLabel>
                                            <Input type='date' className={styles.inp} color={'teal'} name='date' _placeholder={{color:"inherit"}} onChange={(ev)=>handleData(ev)}/>
                                        </FormControl>


                                        <FormControl isRequired width={"41%"} >
                                            <FormLabel>Preferred Time Slot</FormLabel>
                                            <Select className={styles.inp} color={'teal'} name='timeSlot' _placeholder={{color:"inherit"}} onChange={(ev)=>handleData(ev)}>
                                                <option>9:00-9.30</option>
                                                <option>9:30-10.00</option>
                                                <option>10:00-10.30</option>
                                                <option>10:30-11.00</option>
                                            </Select>
                                        </FormControl>


                                    </Flex>
                                    <Flex width={"100%"} gap={"3%"}>
                                        <FormLabel>Emergency Case?</FormLabel>
                                        <RadioGroup defaultValue='2'name='isEmergency' >
                                            <Stack spacing={5} direction='row'>
                                                <Radio colorScheme='green' value='1'  onChange={(ev)=>handleData(ev)}>
                                                    Yes
                                                </Radio>
                                                <Radio colorScheme='red' value='2' onChange={(ev)=>handleData(ev)}>
                                                    No
                                                </Radio>
                                            </Stack>
                                        </RadioGroup>
                                        <FormControl width={'41%'}>

                                        </FormControl>
                                    </Flex>
                                </Flex>
                            </Center>
                            {/* <FormControl className={styles.inp}>
                                        <FormLabel>Is this an emergency?</FormLabel>
                                        <Radio></Radio>

                                    </FormControl> */}
                        </Flex>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose} color={"red"}  mr={3}>Close</Button>
                        <Button className={styles.btns} onClick={()=>{handleSubmit()}} isLoading = {load===true?true:false}>Submit</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default BookAppointment
