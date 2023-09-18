import cn from "classnames";
import React, { useEffect, useState } from "react";
import { Center, Image, Input, FormControl, FormLabel, Button, Select, InputGroup, InputLeftElement, InputRightElement, Link, } from "@chakra-ui/react";
import { AiOutlineMail, AiFillEye, AiFillLock, AiFillEyeInvisible } from "react-icons/ai";
import styles from "./signup.module.css";
import { AnimatePresence, easeOut, motion } from "framer-motion"
const Login = () => {
  const [role, setRole] = useState("Patient");
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  const handleClick1 = () => setShow1(!show1)
  const handleClick2 = () => setShow2(!show2)
  const changeRole = (value) => {
    setRole(value)
  }
  return (
    <>
      <div className={styles.signupMain}>
        <Center className={cn(styles.left, styles[`left-${role}`])}>
          <AnimatePresence>
            {
              role && (
                <motion.img
                key={role}
                  src={`/images/${role}.svg`}
                  alt=""
                  className={styles.signupImg}
                  initial={{ y: 50, opacity: 0 }}
                  animate={
                    {
                      y: 0,
                      opacity: 1
                    }
                  }
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                    ease: easeOut
                  }}
                />
              )
            }

          </AnimatePresence>
        </Center>
        <div className={cn(styles.right, styles[`right-${role}`])}>
          <div className={styles.logoContainer}>
            <img src="/images/tempLogo.png" width={"5%"}></img>
            <h1 className={styles.title}>MediBridge</h1>

          </div>
          <Center className={styles.rightMain}>
            <h2 className={styles.title}>Login</h2>
            <p className={styles.p}>We suggest using the email address you use at work.</p>
            <FormControl className={styles.form}>

              <InputGroup>
                <InputLeftElement pointerEvents='none'>
                  <AiOutlineMail />
                </InputLeftElement>
                <Input type='email' placeholder='Email' isRequired color={role === "Patient" ? "teal" : (role === "Doctor" ? "purple" : "orange")} _placeholder={{ color: 'inherit' }} className={styles.inp} />
              </InputGroup>
              <InputGroup>
                <InputLeftElement>
                  <AiFillLock />
                </InputLeftElement>
                <Input placeholder='Password' isRequired type={show1 ? 'text' : 'password'} color={role === "Patient" ? "teal" : (role === "Doctor" ? "purple" : "orange")} _placeholder={{ color: 'inherit' }} className={styles.inp} />
                <InputRightElement onClick={() => { handleClick1() }}>
                  {show1 ? <AiFillEye /> : <AiFillEyeInvisible />}

                </InputRightElement>
              </InputGroup>
              <InputGroup>
                <InputLeftElement>
                  <AiFillLock />
                </InputLeftElement>
                <Input placeholder='Confirm Password' isRequired type={show2 ? 'text' : 'password'} color={role === "Patient" ? "teal" : (role === "Doctor" ? "purple" : "orange")} _placeholder={{ color: 'inherit' }} className={styles.inp} />
                <InputRightElement onClick={() => { handleClick2() }}>
                  {show2 ? <AiFillEye /> : <AiFillEyeInvisible />}
                </InputRightElement>
              </InputGroup>
              <div className={cn(styles.selectionBox)} >
                <p>Login As</p>

                <Select onChange={() => { changeRole(event.target.value) }} className={cn(styles.inp, styles.select)} color={role === "Patient" ? "teal" : (role === "Doctor" ? "purple" : "orange")}>
                  <option value="Patient" color="teal">Patient</option>
                  <option value="Doctor">Doctor</option>
                  <option value="Hospital">Hospital</option>
                </Select>
              </div>
            </FormControl>
            <Button colorScheme='blue' variant='outline' className={styles.signupBtn}>Login</Button>
            <Center className={styles.googleContainer}>

              <p className={styles.p}>Or</p>
              {/* <div className={styles.btnContainer}> */}

              <button className={styles.googleBtn}>
                <img src="/images/google-logo.png" width={"40px"}></img>

              </button>
              {/* <button className={styles.googleBtn}>
                <img src="/images/facebook-logo.png" width={"40px"}></img>

              </button>
              <button className={styles.googleBtn}>
                <img src="/images/X-logo.png" width={"40px"}></img>

              </button> */}
              {/* </div> */}
              <p className={styles.p}>Donot have an account? <Link className={styles.link} href='/auth/signup'>Click here</Link></p>
            </Center>

          </Center>
        </div>
      </div>
    </>
  );
};

export default Login;
