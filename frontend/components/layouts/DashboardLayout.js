import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import {usePathname} from 'next/navigation'
import AdminHeader from "../common/AdminHeader";
import DoctorHeader from "../common/Doctorheader";
const DashboardLayout = ({ children }) => {
  const pathName = usePathname()
 
  return (
    <>
      {
        pathName==='/p'?<Header />:(pathName==='/h'?<AdminHeader/>:<DoctorHeader/>)
      }
    
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default DashboardLayout;
