import './App.css';
import React from "react";

import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

export default function App() {
  return (
    <main>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </main>
  );
}
