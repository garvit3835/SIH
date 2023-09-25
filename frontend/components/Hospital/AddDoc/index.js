import React, { useContext, useState } from 'react'
import styles from "@/components/common/AdminHeader/adminheader.module.css"
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
  RadioGroup,
  Text
} from '@chakra-ui/react'
import { inherits } from 'util';
import { useAppData } from '@/components/context/AppContext';
import { FileUploader } from "react-drag-drop-files";
import { AiOutlineClose } from 'react-icons/ai';

const AddDoc = () => {
  const { isLoading, enableLoader, disableLoader } = useAppData();
  const [doctor_image, setFile] = useState(null)
  const [load, setLoad] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [appointmentData, setAppointmentData] = useState({
    prefix: "Dr.",
    firstName: "",
    lastName: "",
    number: null,
    email: "",
    gender: "",
    dob: "",
    medical_credentials: "",
    graduation_year: "",
    qualifications: "",
    specialization: "",
    username: "",
    password: "",
    doctor_image: {},
    rating: null,

  })
  const fileTypes = ["PDF", "DOC", "JPEG"];
  const handleChange = (file) => {
    setFile(file)
       
  };
  const handleData = (ev) => {
    const key = ev.target.name
    let value = ev.target.value
    if (key === 'isEmergency') {
      if (value === '1') value = true
      else value = false
    }
    // console.log(value)
    const updatedObj = {
      ...appointmentData,
      [key]: value
    }
    // console.log(updatedObj)
   
    setAppointmentData(updatedObj)

  }

  const handleSubmit = () => {
    if(!doctor_image){
      console.log("doctor image not added")
    }
    else {
      const updatedObj = {
        ...appointmentData,
        doctor_image
      }
      // console.log(updatedObj)
      setAppointmentData(updatedObj)
      // console.log(appointmentData)
    }
    enableLoader()
    // console.log(appointmentData)

    // API CALL
    setTimeout(() => {
      disableLoader()
    }, 3000);

  }
  return (
    <>
      <Button variant="solid" className={styles.bookBtn} onClick={onOpen}>
        Add Doctor
      </Button>
      <Modal onClose={onClose} size={'full'} isOpen={isOpen} motionPreset='slideInBottom' closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent>
          <Flex className={styles.logoContainer}>
            <img src="/images/tempLogo.png" width={40}></img>
            <h1 className={styles.title}>MediBridge</h1>
          </Flex>
          <ModalHeader><Center marginTop={"65px"}>Add a Doctor</Center></ModalHeader>
          <ModalCloseButton />
          <ModalBody display={'flex'}>
            <Flex flex={1} justifyContent={'space-around'} marginTop={"40px"} className={styles.appointmentMain}>
              <Center maxW={"45%"} minW={"45%"} flexDirection={'column'} className={styles.left}>
                <Flex className={styles.topLeft}>
                  <Flex width={"100%"}>
                    <h1 className={styles.h1}>Doctor Details</h1>
                  </Flex>
                  <Flex width={"100%"} justifyContent={'flex-start'} gap={"5%"} >
                    <Flex>
                      <FormControl>
                        <FormLabel>Prefix</FormLabel>
                        <Select className={styles.inp} name='prefix' color={'orange'} onChange={(ev) => handleData(ev)}>
                          <option>Dr.</option>
                        </Select>
                      </FormControl>
                    </Flex>
                    <Flex>
                      <FormControl isRequired>
                        <FormLabel>First name</FormLabel>
                        <Input placeholder='First name' className={styles.inp} name='firstName' color={'orange'} _placeholder={{ color: "inherit" }} onChange={(ev) => handleData(ev)} />
                      </FormControl>
                    </Flex>
                    <Flex>
                      <FormControl>
                        <FormLabel>Last name</FormLabel>
                        <Input placeholder='Last name' className={styles.inp} name='lastName' color={'orange'} _placeholder={{ color: "inherit" }} onChange={(ev) => handleData(ev)} />
                      </FormControl>
                    </Flex>
                  </Flex>
                  <Flex width={"100%"} gap={"3%"}>
                    <FormControl isRequired width={'41%'}>
                      <FormLabel>Contact Number</FormLabel>
                      <Input type='number' placeholder='8929988954' className={styles.inp} name='number' color={'orange'} _placeholder={{ color: "inherit" }} onChange={(ev) => handleData(ev)} />
                    </FormControl>
                    <FormControl width={'41%'}>
                      <FormLabel>Email</FormLabel>
                      <Input type='email' placeholder='mail@email.com' className={styles.inp} name='email' color={'orange'} _placeholder={{ color: "inherit" }} onChange={(ev) => handleData(ev)} />
                    </FormControl>
                  </Flex>
                  <Flex width={"100%"} gap={"3%"}>
                    <FormControl isRequired width={"41%"}>
                      <FormLabel>Gender</FormLabel>
                      <Select className={styles.inp} name='gender' color={'orange'} onChange={(ev) => handleData(ev)}>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Others</option>
                      </Select>
                    </FormControl>
                    <FormControl isRequired width={"41%"}>
                      <FormLabel>DOB</FormLabel>
                      <Input type='date' name='dob' className={styles.inp} color={'orange'} _placeholder={{ color: "inherit" }} onChange={(ev) => handleData(ev)} />
                    </FormControl>
                  </Flex>
                </Flex>
                <Flex className={styles.botLeft}>
                  <Flex width={"100%"}>
                    <h1 className={styles.h1}>Medical Qualifications</h1>
                  </Flex>
                  <Flex width={"100%"} gap={"3%"}>

                    <FormControl width={"41%"} isRequired>
                      <FormLabel>Medical Credentials</FormLabel>
                      <Select className={styles.inp} name='medical_credentials' color={'orange'} onChange={(ev) => handleData(ev)}>
                        <option>MD.</option>
                        <option>DO.</option>
                        <option>MBBS.</option>
                        <option>PhD.</option>
                        <option>DNP.</option>
                      </Select>
                    </FormControl>
                    <FormControl isRequired width={"41%"}>
                      <FormLabel>Graduation Year</FormLabel>
                      <Input type='date' name='graduation_year' className={styles.inp} color={'orange'} _placeholder={{ color: "inherit" }} onChange={(ev) => handleData(ev)} />
                    </FormControl>


                  </Flex>
                  <Flex width={"100%"} gap={"3%"}>
                    <FormControl isRequired width={"41%"}>
                      <FormLabel>Qualification</FormLabel>
                      <Select className={styles.inp} name='qualifications' color={'orange'} onChange={(ev) => handleData(ev)}>
                        <option>MD.</option>
                        <option>DO.</option>
                        <option>MBBS.</option>
                        <option>PhD.</option>
                        <option>DNP.</option>
                      </Select>                    
                      </FormControl>
                    <FormControl isRequired width={"41%"}>
                      <FormLabel>Specialization</FormLabel>
                      <Input type='text' className={styles.inp} name='specialization' placeholder='Cardiology' color={'orange'} _placeholder={{ color: "inherit" }} onChange={(ev) => handleData(ev)} />
                    </FormControl>
                  </Flex>

                </Flex>

              </Center>
              <Box className={styles.vl}></Box>
              <Center maxW={"45%"} minW={"45%"} flexDirection={'column'} className={styles.right}>
                <Flex className={styles.topRight}>
                  <Flex width={"100%"}>
                    <h1 className={styles.h1}>Administrative Access</h1>
                  </Flex>
                  <Flex width={"100%"} gap={"3%"}>
                    <FormControl isRequired width={"41%"}>
                      <FormLabel>Username</FormLabel>
                      <Input color={'orange'} _placeholder={{ color: "inherit" }} placeholder='John_Doe' name='username' className={styles.inp} onChange={(ev) => handleData(ev)}></Input>
                    </FormControl>
                    <FormControl width={"41%"} isRequired>
                      <FormLabel>Password</FormLabel>
                      <Input type='text' name='password' className={styles.inp} color={'orange'} placeholder='Examplepassowrd123$' _placeholder={{ color: "inherit" }} onChange={(ev) => handleData(ev)} />
                    </FormControl>
                  </Flex>
                  <Flex width={"100%"} gap={"3%"}>
                    <FormControl width={"85%"} isRequired>
                      <FormLabel>Upload Image</FormLabel>
                      <Flex flexDirection={'column'} className={styles.dragContainer}>

                        <FileUploader handleChange={handleChange} name="doctor_image" types={fileTypes}
                          children=<Flex flexDirection={'column'} className={styles.dragBox}>
                            <Text className={styles.dropText}>
                              Drop files here
                            </Text>
                            <Text fontSize={18} color={'orange'}>Or</Text>
                            <Flex gap={5} alignItems={'center'} className={styles.fileBtnContainer}>
                              <Button className={styles.btns}>Choose File</Button>
                              <Text fontSize={18} color={'orange'}>{doctor_image === null ? "No file chosen" : doctor_image.name}</Text>
                              {doctor_image !== null ? <AiOutlineClose color='red' cursor={"pointer"} onClick={() => setFile(null)} /> : ""}
                            </Flex>

                          </Flex>

                        />
                      </Flex>
                    </FormControl>

                  </Flex>
                  <Flex width={"100%"} gap={"3%"}>
                    <FormControl isReadOnly width={"41%"}>
                      <FormLabel>Rating</FormLabel>
                      <Input color={'gray'} name='rating' value={"null"} className={styles.inp}></Input>
                    </FormControl>
                  </Flex>
                </Flex>
                {/* <Flex className={styles.botRight}>
                  <Flex width={"100%"}>
                    <h1 className={styles.h1}>Slot Details</h1>
                  </Flex>
                  <Flex width={"100%"} gap={"3%"}>

                    <FormControl width={"41%"}>
                      <FormLabel isRequired>Preferred Date</FormLabel>
                      <Input type='date' className={styles.inp} color={'orange'} name='date' _placeholder={{ color: "inherit" }} onChange={(ev) => handleData(ev)} />
                    </FormControl>


                    <FormControl isRequired width={"41%"} >
                      <FormLabel>Preferred Time Slot</FormLabel>
                      <Select className={styles.inp} color={'orange'} name='timeSlot' _placeholder={{ color: "inherit" }} onChange={(ev) => handleData(ev)}>
                        <option>9:00-9.30</option>
                        <option>9:30-10.00</option>
                        <option>10:00-10.30</option>
                        <option>10:30-11.00</option>
                      </Select>
                    </FormControl>


                  </Flex>
                  <Flex width={"100%"} gap={"3%"}>
                    <FormLabel>Emergency Case?</FormLabel>
                    <RadioGroup defaultValue='2' name='isEmergency' >
                      <Stack spacing={5} direction='row'>
                        <Radio colorScheme='green' value='1' onChange={(ev) => handleData(ev)}>
                          Yes
                        </Radio>
                        <Radio colorScheme='red' value='2' onChange={(ev) => handleData(ev)}>
                          No
                        </Radio>
                      </Stack>
                    </RadioGroup>
                    <FormControl width={'41%'}>

                    </FormControl>
                  </Flex>
                </Flex> */}
              </Center>

            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} color={"red"} mr={3}>Close</Button>
            <Button className={styles.btns} onClick={() => { handleSubmit() }} isLoading={load === true ? true : false}>Submit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AddDoc
