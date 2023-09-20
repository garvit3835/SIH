import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default DashboardLayout;
