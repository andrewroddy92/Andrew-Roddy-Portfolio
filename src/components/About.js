import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default function About() {
    const styles = {
      container: {
        paddingTop: '1.5rem'
      },
      header: {
        color: '#E63946',
        fontSize: '1.5rem'
      },
      text: {
        color: "#F1FAEE",
        fontSize: '1.5rem'
      }
    };

    return (
      <Container id="about" style={styles.container}>
        <Row>
          <Col>
            <h1 style={styles.header}>about me</h1>
            <section style={styles.text}>
              <p>Hello -- my name is Andrew and I <br/> develop, test, and deploy web applications.</p>
              <p><br/>After graduating with a B.S. in Technical Communication, I spent a few years professionally communicating product requirements between business & IT.</p>
              <p><br/>In a change of career, I've retooled my skillset to bring those requirements to life.</p>
            </section>
          </Col>
        </Row>

      </Container>
      );
}