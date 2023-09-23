import cn from "classnames";
import {validate} from 'email-validator'
import {
  Center,
  Image,
  Input,
  FormControl,
  FormLabel,
  Button,
  Select,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  FormErrorMessage,
  Flex
} from "@chakra-ui/react";

import {
  AiOutlineMail,
  AiFillEye,
  AiFillLock,
  AiFillEyeInvisible,
} from "react-icons/ai";
import styles from "pages/auth/signup/signup.module.css";
import { useEffect, useState } from "react";
import routes from "../../routes";

const SignupForm = ({ role }) => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const handleClick1 = () => setShow1(!show1);
  const handleClick2 = () => setShow2(!show2);
  const [email,setEmail] = useState('')
  const [pass,setPass] = useState('')
  const [confirmPass,setConfirmPass] = useState('')
  const [emailError,setEmailError] = useState({
    status:false,
    type:'',
    msg:''
  })
  const [passError,setPassError] = useState({
    status:false,
    type:'',
    msg:''
  })
  const changeEmailError = (status,type,msg)=> {
    const newError = {
      status,type,msg
    }
    setEmailError(newError)
  }
  const changePassError = (status,type,msg)=> {
    const newError = {
      status,type,msg
    }
    setPassError(newError)
  }
  const handleSubmit = ()=> {
    if(!validate(email)) {
      changeEmailError(true,'invalid email','Please enter a valid email')
      return
    }
    if(pass!==confirmPass) {
      changePassError(true,'mismatch','Passwords didnt match')
      return
    }
    else {
      changePassError(false,'','');
      changeEmailError(false,'','')
      // API CALL
    }
  }
  return (
    <Center className={cn(styles.rightMain, styles[role])}>
      <FormControl className={styles.form} isInvalid={emailError.status}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <AiOutlineMail className={styles.icon} />
          </InputLeftElement>
          <Input
            type="email"
            placeholder="Email"
            isRequired
            color={
              role === "patient"
                ? "teal"
                : role === "doctor"
                ? "purple"
                : "orange"
            }
            _placeholder={{ color: "inherit" }}
            className={styles.inp}
            onChange={(ev)=>setEmail(ev.target.value)}
          />
        </InputGroup>
        {!emailError.status ? (
        ""
      ) : (
        <FormErrorMessage>{emailError.msg}</FormErrorMessage>
      )}
        </FormControl>
        <FormControl className={styles.form} isInvalid={passError.status}>
        <InputGroup>
          <InputLeftElement>
            <AiFillLock className={styles.icon} />
          </InputLeftElement>
          <Input
            placeholder="Password"
            isRequired
            type={show1 ? "text" : "password"}
            color={
              role === "patient"
                ? "teal"
                : role === "doctor"
                ? "purple"
                : "orange"
            }
            _placeholder={{ color: "inherit" }}
            className={styles.inp}
            onChange={(ev)=>setPass(ev.target.value)}
          />
          <InputRightElement
            onClick={() => {
              handleClick1();
            }}
          >
            {show1 ? (
              <AiFillEye className={styles.icon} />
            ) : (
              <AiFillEyeInvisible className={styles.icon} />
            )}
          </InputRightElement>
        </InputGroup>
        {!passError.status ? (
        ""
      ) : (
        <FormErrorMessage>{passError.msg}</FormErrorMessage>
      )}
        </FormControl>
        <FormControl className={styles.form}>
        <InputGroup>
          <InputLeftElement>
            <AiFillLock className={styles.icon} />
          </InputLeftElement>
          <Input
            placeholder="Confirm Password"
            isRequired
            type={show2 ? "text" : "password"}
            color={
              role === "patient"
                ? "teal"
                : role === "doctor"
                ? "purple"
                : "orange"
            }
            _placeholder={{ color: "inherit" }}
            className={styles.inp}
            onChange={(ev)=>setConfirmPass(ev.target.value)}
          />
          <InputRightElement
            onClick={() => {
              handleClick2();
            }}
          >
            {show2 ? (
              <AiFillEye className={styles.icon} />
            ) : (
              <AiFillEyeInvisible className={styles.icon} />
            )}
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        colorScheme={
          role === "patient" ? "teal" : role === "doctor" ? "purple" : "orange"
        }
        variant="outline"
        className={styles.signupBtn}
        onClick={()=>handleSubmit()}
      >
        {/* <Link href="/auth/patientForm"> */}
        
        Signup
        {/* </Link> */}
      </Button>
      <Center className={styles.googleContainer}>
        <p className={styles.p}>Or</p>

        <button className={styles.googleBtn}>
          <img src="/images/google-logo.png" width={"40px"}></img>
        </button>
        {/* <button className={styles.googleBtn}>
      <img src="/images/facebook-logo.png" width={"40px"}></img>

    </button>
    <button className={styles.googleBtn}>
      <img src="/images/X-logo.png" width={"40px"}></img>

    </button> */}
        <p className={styles.p}>
          Already have an account?{" "}
          <Link className={styles.link} href={routes.LOGIN}>
            Login here
          </Link>
        </p>
      </Center>
    </Center>
  );
};

export default SignupForm;
