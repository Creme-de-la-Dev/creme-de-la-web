import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = ({ children }) => {
 const location = useLocation();
 const videoUrlPattern = /^\/2209626308100203jodoboioxocoocofaiafbaabgoog(\/|$)/;
 const isVideoPage = videoUrlPattern.test(location.pathname);

 return (
    <>
      {!isVideoPage && <Navbar />}
      {children}
      {!isVideoPage && <Footer />}
    </>
 );
};

export default MainLayout;
