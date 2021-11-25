import './App.css';
import React from "react";

import Navigation from './components/Navigation'
import Home from './components/Home'
import About from './components/About'
import Featured from './components/Featured'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function App() {
  const styles = {
    main: {
      paddingLeft: 200,
      paddingRight: 200,
      background: '#1D3557',
    },
    row: {
      paddingTop: '1.5rem'
    },
    header: {
      color: '#E63946',
      fontSize: '1.5rem'
    }
  };

  return (
    <main style={styles.main}>
      <Container>
        <Navigation />
        <Home />
        <About />
        <Row id="portfolio" style={styles.row}>
            <Col>
                <h1 style={styles.header}>my work</h1>
            </Col>
        </Row>
        <Featured />
        <Portfolio />
        <Contact />
      </Container>
    </main>
  );
}
