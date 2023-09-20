import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import routes from "../../../routes";
import { useRouter } from "next/router";

const navRoutes = [routes.HOME, routes.DOCTORS, routes.REPORTS];

const Navbar = () => {
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
        <Tab>Appointments</Tab>
        <Tab>Doctors</Tab>
        <Tab>Reports</Tab>
      </TabList>
    </Tabs>
  );
};

export default Navbar;
