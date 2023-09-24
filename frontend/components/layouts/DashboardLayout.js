import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import {usePathname} from 'next/navigation'
import AdminHeader from "../common/AdminHeader";
const DashboardLayout = ({ children }) => {
  const pathName = usePathname()
 
  return (
    <>
      {
        pathName==='/p'?<Header />:(pathName==='/h'?<AdminHeader/>:"")
      }
    
      
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default DashboardLayout;
