import cn from "classnames";
import React, { useState } from "react";
import { Center } from "@chakra-ui/react";

import styles from "./signup.module.css";

const Signup = () => {
  const [role, setRole] = useState("Hospital");

  return (
    <>
      <div className={styles.signupMain}>
        <Center className={cn(styles.left, styles[`left-${role}`])}>
          <img
            src={`/images/${role}.svg`}
            alt=""
            className={styles.signupImg}
          />
        </Center>
        <div className={cn(styles.right, styles[`right-${role}`])}></div>
      </div>
    </>
  );
};

export default Signup;
