import { Fragment } from "react";
import Videoview from './Videoview';
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <header>
        <Videoview />
        <Navbar />
      </header>
      <main style={{
        backgroundImage: `url(/bg2.jpg)`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        imageOrientation: ' from-image',
        fontFamily: 'bagea',
        
      }} className='section wrapper lg:px-20'>{children}</main>
      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
};

export default Layout;
