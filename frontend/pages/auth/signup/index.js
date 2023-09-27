import cn from "classnames";
import React, { useEffect, useState } from "react";
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
import { AnimatePresence, easeOut, motion } from "framer-motion";
import SignupForm from "components/auth/SignupForm";
const Signup = () => {
  const roles = ["patient", "doctor", "hospital"];

  const [role, setRole] = useState(roles[0]);

  const changeRole = (value) => {
    setRole(value);
  };

  return (
    <div className={styles.signupMain}>
      <Center className={cn(styles.left, styles[`left-${role}`])}>
        <AnimatePresence>
          {role && (
            <motion.img
              key={role}
              src={`/images/${role}.svg`}
              alt=""
              className={styles.signupImg}
              initial={{ y: 20, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: easeOut,
              }}
            />
          )}
        </AnimatePresence>
      </Center>
      <div className={cn(styles.right, styles[`right-${role}`])}>
        <div className={styles.logoContainer}>
          <img src="/images/Logo.svg" width={"5%"}></img>
          <h1 className={styles.title}>MediBridge</h1>
        </div>

        <div className={styles.rightAll}>
          <div className={styles.heading}>
            <h2 className={styles[`title-${role}`]}>Signup</h2>
            <p className={styles.p}>
              We suggest using the email address you use at work.
            </p>
          </div>

          <Tabs
            isFitted
            variant="line"
            className={styles.tabs}
            onChange={(index) => {
              changeRole(roles[index]);
            }}
          >
            <TabList className={styles.tabList}>
              <Tab className={cn(styles.tab, styles.patientTab)}>Patient</Tab>
              <Tab className={cn(styles.tab, styles.doctorTab)}>Doctor</Tab>
              <Tab className={cn(styles.tab, styles.hospitalTab)}>Hospital</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <SignupForm role={role} />
              </TabPanel>
              <TabPanel>
                <SignupForm role={role} />
              </TabPanel>
              <TabPanel>
                <SignupForm role={role} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Signup;
