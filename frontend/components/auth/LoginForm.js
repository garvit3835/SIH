import cn from "classnames";

import {
  Center,
  Input,
  FormControl,
  Button,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  FormErrorMessage,

} from "@chakra-ui/react";
import {validate} from 'email-validator'
import {
  AiOutlineMail,
  AiFillEye,
  AiFillLock,
  AiFillEyeInvisible,
} from "react-icons/ai";
import styles from "pages/auth/signup/signup.module.css";
import { useState } from "react";
import routes from "../../routes";
import { login } from "@/api/patients";
import {login as docLogin}   from '@/api/doctors'
import {login as hospitalLogin}   from '@/api/hospital'
const LoginForm = ({ role }) => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const handleClick1 = () => setShow1(!show1);
  const handleClick2 = () => setShow2(!show2);
  const [email,setEmail] = useState('')
  const [pass,setPass] = useState('')
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
      console.log(validate(email))
      changeEmailError(true,'invalid email','Please enter a valid email')
      return
    }
    else {
      changeEmailError(false,'','')
    }
    if(pass==='') {
      changePassError(true,'invalid password','Please add a valid password')
      return
    }
    else {
      changePassError(false,'','');
      changeEmailError(false,'','')
      console.log(emailError.msg)
      // API CALL
      if(role==='patient') {
        login(email,pass)
      }
      else if(role==='doctor') {
        docLogin(email,pass)
      }
      else {
        hospitalLogin(email,pass)
      }
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
      <Button
        colorScheme={
          role === "patient" ? "teal" : role === "doctor" ? "purple" : "orange"
        }
        variant="outline"
        className={styles.signupBtn}
        onClick={()=>handleSubmit()}
      >
        Login
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
          Don't have an existing account?{" "}
          <Link className={styles.link} href={routes.SIGNUP}>
            Signup here
          </Link>
        </p>
      </Center>
    </Center>
  );
};

export default LoginForm;
