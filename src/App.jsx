import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactPage from "./Pages/ContactPage";
import Skills from "./Pages/skills";
import Aboutme from "./Pages/Aboutme";
import Experience from "./Pages/Experience";
import Chat from "./Pages/Chat";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" Component={HeroSection} />
          <Route path="/Contact" Component={ContactPage} />
          <Route path="/Skills" Component={Skills} />
          <Route path="/Aboutme" Component={Aboutme} />
          <Route path="/Experience" Component={Experience} />
          <Route path="/ChatButton" Component={Chat} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
