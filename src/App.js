import './App.css';
import React from "react";

import Navigation from './components/Navigation'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

export default function App() {
  const styles = {
    main: {
      paddingLeft: 200,
      paddingRight: 200,
      background: '#1D3557',
    },
  };

  return (
    <main style={styles.main}>
      <Navigation />
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </main>
  );
}
