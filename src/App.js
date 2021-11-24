import './App.css';
import React from "react";

import Navbar from './components/Navbar'
import Navbar from './components/About'
import Navbar from './components/Projects'
import Navbar from './components/Contact'

export default function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
