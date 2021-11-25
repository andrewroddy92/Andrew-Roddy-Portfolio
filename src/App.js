import './App.css';
import React from "react";

import Navigation from './components/Navigation'
import Home from './components/Home'
import About from './components/About'
import Featured from './components/Featured'
import Portfolio from './components/Portfolio'

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
    header: {
      color: '#E63946',
      fontSize: '1.5rem'
    },
    hr: {
      // paddingTop: '3rem',
      marginTop: '5rem',
      marginBottom: '5rem',
      borderTop: '5px dotted #A8DADC', 
      width: '50%', 
      marginLeft: 'auto',
      marginRight: 'auto',
      backgroundColor: '#1D3557'
    }
  };

  return (
    <main style={styles.main}>
      <Container>
        <Navigation />
        <Home />
        <hr style={styles.hr}/>
        <About />
        <hr style={styles.hr}/>
        <Row id="portfolio">
            <Col>
                <h1 style={styles.header}>my work</h1>
            </Col>
        </Row>
        <Featured />
        <Portfolio />
      </Container>
    </main>
  );
}
