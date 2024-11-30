import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Research from "./pages/Research";
import Publications from "./pages/Publications";
import Contact from "./pages/Contact";
import Home from "./pages/Home"


function App() {
  const location = useLocation();

   //Header'ı ilk sayfa (HomePage) için farklı göstermek için kontrol
  const isAbout = location.pathname === "/";

  return (
    <div className="App">
      {!isAbout && <Header showMenu />}
      <Routes>
        <Route path="/" element={<About />} /> {/* HomePage bileşenini ana sayfada gösteriyoruz */}
        <Route path="/home" element={<Home />} />
      
        <Route path="/research" element={<Research />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/contact" element={<Contact />} />
       
      </Routes>
      <Footer />
    </div>
  );
}

 //Router'ı sarmalayarak export
export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}











