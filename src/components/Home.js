import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Home() {
    const styles = {
      intro: {
        color: '#A8DADC',
      },
      name: {
        color: '#E63946',
      },
      text: {
        color: "#F1FAEE"
      }
    };

    return (
      <Container id="home">
          <Row>
            <Col>
              <h3 style={styles.intro}>my name is</h3>
              <h1 style={styles.name}>Andrew Roddy.</h1>
              <p style={styles.text}>I'm a full stack web developer<br/>
              based in the Greater Atlanta Area<br/>
              seeking the opportunity to build<br/>
              high quality, high value applications.</p>
              <br/>
              <p>in: <a href = ">https://www.linkedin.com/in/andrew-roddy/">https://www.linkedin.com/in/andrew-roddy/</a></p>
              <p>git: <a href = "https://github.com/andrewroddy92">https://github.com/andrewroddy92</a></p>
              <p>email: <a href = "mailto: andrewroddy92@yahoo.com">andrewroddy92@yahoo.com</a></p>
            </Col>
          </Row>
      </Container>
      );
}