import { useRouter } from "next/router";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import React from "react";
import routes from "../../../routes";

import styles from "./doctornavbar.module.css";

const navRoutes = [routes.Today_APPOINTMENTS, routes.SLOTS, routes.APPOINTMENT_TRACK];

const DoctorNavbar = () => {
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
        <Tab className={styles.tab}>Today's Appointments</Tab>
        <Tab className={styles.tab}>Slots</Tab>
        <Tab className={styles.tab}>Track Appointments</Tab>
      </TabList>
    </Tabs>
  );
};

export default DoctorNavbar;