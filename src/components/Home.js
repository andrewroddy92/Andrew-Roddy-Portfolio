import React from "react";

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
                <p>in: <a href = ">https://www.linkedin.com/in/andrew-roddy/">https://www.linkedin.com/in/andrew-roddy/</a></p>
                <p>git: <a href = "https://github.com/andrewroddy92">https://github.com/andrewroddy92</a></p>
                <p>email: <a href = "mailto: andrewroddy92@yahoo.com">andrewroddy92@yahoo.com</a></p>
              </section>
            </Col>
          </Row>
      );
}