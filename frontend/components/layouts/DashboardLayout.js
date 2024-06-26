import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { useRouter } from "next/router";
import AdminHeader from "../common/AdminHeader";
import DoctorHeader from "../common/doctor/Header";

const DashboardLayout = ({ children }) => {
  const router = useRouter();
  const rootPath = router.pathname.split("/")[1];

  return (
    <>
      {rootPath === "p" ? (
        <Header />
      ) : rootPath === "d" ? (
        <DoctorHeader />
      ) : (
        <AdminHeader />
      )}

      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default DashboardLayout;
