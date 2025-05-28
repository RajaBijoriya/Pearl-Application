import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Work from "./Components/Work/Work";
import { Routes, Route, Link } from "react-router-dom";
import { Button } from "@mantine/core";
import { useLocation } from "react-router-dom";
import { Container } from "@mantine/core";

const Layout = ({ children }) => {
  const location = useLocation();

  // Hide footer on Contact page
  const hideFooter = location.pathname === '/contact';

  return (
    <Container  fluid  // Ensures full width
      style={{width: '100wh', padding: '0' }} >
      {children}
      {!hideFooter && <Footer />}
    </Container>
  );
};

function App() {
  return (
    <div className="w-full h-full">
      {/* <Navbar/>
    <Work/>
    <Footer/> */}
      <Navbar />
      <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      </Layout>

    
      <div>
        <Button
          className="left-245 bottom-1 fixed"
          style={{
             position: 'fixed',
          top: '92%',
          left: '92%',
          transform: 'translate(-50%, -50%)',  // Center it perfectly
          zIndex: 9999,
          boxShadow: '0 8px 15px rgba(0, 0, 0, 0.4)',
          backgroundColor: 'rgba(255, 255, 255, 1)',

          }}
          variant="outline"
          color="rgba(0, 0, 0, 1)"
          radius="md"
          size="xs">
          Made in Framers
        </Button>
      </div>
    </div>
  );
}

export default App;
