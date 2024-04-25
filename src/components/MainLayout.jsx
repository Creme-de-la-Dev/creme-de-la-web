import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = ({ children }) => {
 const location = useLocation();
 const isSecretsPage = location.pathname === "/2209626308100203jodoboioxocoocofaiafbaabgoog";

 return (
    <>
      {!isSecretsPage && <Navbar />}
      {children}
      {!isSecretsPage && <Footer />}
    </>
 );
};

export default MainLayout;
