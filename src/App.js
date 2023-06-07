import { CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./scenes/Footer";
import HomeWrapper from "./components/HomeWrapper";
import GalleryPage from "./components/Gallery_page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (

    <Router>
      <div className="app">
        <CssBaseline></CssBaseline>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<HomeWrapper />} />
          <Route path="/Gallery" element={<GalleryPage />} />
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
