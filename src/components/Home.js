import React from "react";

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
    const styles = {
      row: {
        paddingTop: '8rem'
      },
      intro: {
        color: '#A8DADC',
        fontSize: '1.5rem'
      },
      name: {
        color: '#E63946',
        fontSize: '3.5rem'
      },
      text: {
        color: "#F1FAEE",
        fontSize: '1.5rem'
      }
    };

    return (
          <Row id="home" style={styles.row}>
            <Col>
              <h1 style={styles.intro}>my name is</h1>
              <h2 style={styles.name}>Andrew Roddy.</h2>
              <section style={styles.text}>
                <p>I'm a full stack web developer<br/>
                based in the Greater Atlanta Area<br/>
                seeking the opportunity to build<br/>
                high quality, high value wep apps.</p>
                <br/>
                <p><FontAwesomeIcon icon={faLinkedin} style={styles.fontAwesome}/> <a href = ">https://www.linkedin.com/in/andrew-roddy/">https://www.linkedin.com/in/andrew-roddy/</a></p>
                <p><FontAwesomeIcon icon={faGithub} style={styles.fontAwesome}/> <a href = "https://github.com/andrewroddy92">https://github.com/andrewroddy92</a></p>
                <p><FontAwesomeIcon icon={faEnvelope} style={styles.fontAwesome}/> <a href = "mailto: andrewroddy92@yahoo.com">andrewroddy92@yahoo.com</a></p>
              </section>
            </Col>
          </Row>
      );
}