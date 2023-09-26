import { useRouter } from "next/router";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import React from "react";
import routes from "../../../routes";

import styles from "./adminnavbar.module.css";

const navRoutes = [routes.CURRENT_APPOINTMENTS, routes.DOCTOR_DATA, routes.APPOINTMENT_TRACK];

const AdminNavbar = () => {
  const router = useRouter();

  return (
    <Tabs
      isFitted
      onChange={(index) => {
        router.push(navRoutes[index]);
      }}
      defaultIndex={navRoutes.indexOf(router.pathname)}
    >
      <TabList style={{ border: "1px solid transparent" }}>
        <Tab className={styles.tab}>Current Appointments</Tab>
        <Tab className={styles.tab}>Doctor Data</Tab>
        <Tab className={styles.tab}>Track Appointments</Tab>
      </TabList>
    </Tabs>
  );
};

export default AdminNavbar;
