import React from "react";
import { Navbar } from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Download from "./components/Download";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Download />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
