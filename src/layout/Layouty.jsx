import { Fragment } from "react";
import Videoview from './Videoview';
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <Fragment style={{ fontFamily: 'bagea' }}>
      <header style={{ fontFamily: 'bagea' }}>
        <Videoview />
        <Navbar />
      </header>
      <main style={{
        backgroundColor: 'white',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        imageOrientation: ' from-image',
        fontFamily: 'bagea',
        
      }} className='section wrapper lg:px-40'>{children}</main>
      <footer className="lg:-px-40" >
        <Footer  />
      </footer>
    </Fragment>
  );
};

export default Layout;
