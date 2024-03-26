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
      <main className="wrapper">{children}</main>
      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
};

export default Layout;
