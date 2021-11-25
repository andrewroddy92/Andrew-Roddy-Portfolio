import React from "react";

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import me from '../assets/me.jpg'

export default function About() {
    const styles = {
      row: {
        paddingTop: '1.5rem'
      },
      header: {
        color: '#E63946',
        fontSize: '1.5rem'
      },
      text: {
        color: "#F1FAEE",
        fontSize: '1.5rem'
      },
      imageCol: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      image: {
        borderRadius: '50%',
        width: 400,
        height: 400,
        border: '5px solid #457B9D',
        outline: '2px solid #457B9D',
        outlineOffset: '5px',
      }
    };

    return (
        <Row id="about" style={styles.row}>
          <Col>
            <h1 style={styles.header}>about me</h1>
            <section style={styles.text}>
              <p>Hello -- my name is Andrew and I <br/> develop, test, and deploy web applications.</p>
              <p><br/>After graduating with a B.S. in Technical Communication, I spent a few years professionally communicating product requirements between business & IT.</p>
              <p><br/>In a change of career, I've retooled my skillset to bring those requirements to life.</p>
            </section>
          </Col>
          <Col style={styles.imageCol}>
            <img src={me} alt="self portait" style={styles.image}></img>
          </Col>
        </Row>
      );
}