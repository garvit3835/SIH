import React from 'react'
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
const BookAppointment = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button variant="solid" className={styles.bookBtn} onClick={onOpen}>
                Book Appointment
            </Button>
            <Modal onClose={onClose} size={'full'} isOpen={isOpen} motionPreset='slideInBottom' closeOnOverlayClick={false}>
                <ModalOverlay />
                <ModalContent>
                    <Flex className={styles.logoContainer}>
                        <img src="/images/tempLogo.png" width={40}></img>
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
                                                <Select className={styles.inp} color={'teal'}>
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
                                                <Input placeholder='First name' className={styles.inp} color={'teal'} _placeholder={{color:"inherit"}}/>
                                            </FormControl>
                                        </Flex>
                                        <Flex>
                                            <FormControl>
                                                <FormLabel>Last name</FormLabel>
                                                <Input placeholder='Last name' className={styles.inp}color={'teal'} _placeholder={{color:"inherit"}}/>
                                            </FormControl>
                                        </Flex>
                                    </Flex>
                                    <Flex width={"100%"} gap={"4%"}>
                                        <FormControl isRequired width={'41%'}>
                                            <FormLabel>Contact Number</FormLabel>
                                            <Input type='number' placeholder='8929988954' className={styles.inp} color={'teal'} _placeholder={{color:"inherit"}}/>
                                        </FormControl>
                                        <FormControl width={'41%'}>
                                            <FormLabel>Email</FormLabel>
                                            <Input type='email' placeholder='mail@email.com' className={styles.inp} color={'teal'} _placeholder={{color:"inherit"}}/>
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
                                            <Input type='text' placeholder='abc street' className={styles.inp} color={'teal'} _placeholder={{color:"inherit"}}/>
                                        </FormControl>
                                        <FormControl isRequired width={"41%"}>
                                            <FormLabel>City</FormLabel>
                                            <Input type='text' className={styles.inp} placeholder='New Delhi' color={'teal'} _placeholder={{color:"inherit"}}/>
                                        </FormControl>
                                    </Flex>
                                    <Flex width={"100%"} gap={"3%"}>
                                        <FormControl isRequired width={"41%"}>
                                            <FormLabel>State</FormLabel>
                                            <Input type='text' placeholder='Haryana' className={styles.inp} color={'teal'} _placeholder={{color:"inherit"}}/>
                                        </FormControl>
                                        <FormControl isRequired width={"41%"}>
                                            <FormLabel>Postal Code</FormLabel>
                                            <Input type='text' placeholder='110063' className={styles.inp} color={'teal'} _placeholder={{color:"inherit"}}/>
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
                                            <Textarea color={'teal'} _placeholder={{color:"inherit"}} className={styles.inp}></Textarea>
                                        </FormControl>
                                        <FormControl width={"41%"}>
                                            <FormLabel>Specialization required</FormLabel>
                                            <Input type='text' placeholder={"Cardiologist"} className={styles.inp} color={'teal'} _placeholder={{color:"inherit"}}/>
                                        </FormControl>
                                    </Flex>
                                    <Flex width={"100%"} gap={"3%"}>
                                        <FormControl width={"41%"}>
                                            <FormLabel>Preferred Doctor(if any)</FormLabel>
                                            <Input type='text' className={styles.inp} color={'teal'} _placeholder={{color:"inherit"}}/>
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
                                            <Input type='date' className={styles.inp} color={'teal'} _placeholder={{color:"inherit"}}/>
                                        </FormControl>


                                        <FormControl isRequired width={"41%"} >
                                            <FormLabel>Preferred Time Slot</FormLabel>
                                            <Select className={styles.inp} color={'teal'} _placeholder={{color:"inherit"}}>
                                                <option>9:00-9.30</option>
                                                <option>9:30-10.00</option>
                                                <option>10:00-10.30</option>
                                                <option>10:30-11.00</option>
                                            </Select>
                                        </FormControl>


                                    </Flex>
                                    <Flex width={"100%"} gap={"3%"}>
                                        <FormLabel>Emergency Case?</FormLabel>
                                        <RadioGroup defaultValue='2'>
                                            <Stack spacing={5} direction='row'>
                                                <Radio colorScheme='green' value='1'>
                                                    Yes
                                                </Radio>
                                                <Radio colorScheme='red' value='2'>
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
                        <Button className={styles.btns}>Submit</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default BookAppointment
