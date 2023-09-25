import { useRouter } from "next/router";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import React from "react";
import routes from "../../../routes";

import styles from "./navbar.module.css";

const navRoutes = [routes.PATIENT_HOME, routes.DOCTORS, routes.REPORTS];

const Navbar = () => {
  const router = useRouter();

  return (
    <Tabs
      isFitted
      onChange={(index) => {
        router.push(navRoutes[index]);
      }}
      index={
        navRoutes.includes(router.pathname)
          ? navRoutes.indexOf(router.pathname)
          : navRoutes.length
      }
    >
      <TabList style={{ border: "1px solid transparent" }}>
        <Tab className={styles.tab}>Appointments</Tab>
        <Tab className={styles.tab}>Doctors</Tab>
        <Tab className={styles.tab}>Reports</Tab>
      </TabList>
    </Tabs>
  );
};

export default Navbar;
