import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import About from './components/About';
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    // Update page title
    document.title = "Eclat By Aaliyah | Professional Makeup Artist";

    // Add Google Fonts
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="font-quicksand">
      <Navbar />
      <Hero />
      {/* <About /> */}
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
