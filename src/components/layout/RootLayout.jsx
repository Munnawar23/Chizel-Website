import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from './CustomCursor';

const RootLayout = () => {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
       
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;