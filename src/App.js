import { CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import AboutUs from "./scenes/AboutUs";
import HomeScreen from "./scenes/HomeScreen";
import Services from "./scenes/Services";
import Footer from "./scenes/Footer";
//import ContactUs from "./scenes/ContactUs";
import Testimonials from "./scenes/Testimonials";
import ValuableClients from "./scenes/ValuableClients";
import Gallery from "./scenes/Gallery";
import {Router, Route, Routes } from "react-router-dom";
import Contactus from "./scenes/Contactus";

function App() {
  return (
    
      <div className="app">
        <CssBaseline></CssBaseline>
        <Navbar></Navbar>
        <HomeScreen></HomeScreen>
        <AboutUs></AboutUs>
        <Services></Services>
        <Testimonials></Testimonials>
        
        <ValuableClients></ValuableClients>

        <Contactus></Contactus> 
      {/* <Contactus></Contactus> */}
        <Footer></Footer>
    
      

      
      </div>
    
  );
}

export default App;
