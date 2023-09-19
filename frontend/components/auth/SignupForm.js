import cn from "classnames";

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
} from "@chakra-ui/react";

import {
  AiOutlineMail,
  AiFillEye,
  AiFillLock,
  AiFillEyeInvisible,
} from "react-icons/ai";
import styles from "pages/auth/signup/signup.module.css";
import { useState } from "react";
import routes from "../../routes";

const SignupForm = ({ role }) => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const handleClick1 = () => setShow1(!show1);
  const handleClick2 = () => setShow2(!show2);

  return (
    <Center className={cn(styles.rightMain, styles[role])}>
      <FormControl className={styles.form}>
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
          />
        </InputGroup>
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
      >
        Signup
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
