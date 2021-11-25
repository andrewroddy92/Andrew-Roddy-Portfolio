import React from "react";
import resume from '../andrew_roddy_resume.docx';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default function Navigation() {
    const styles = {
        nav: {
            paddingTop: '2.5rem',
            paddingRight: '2.5rem'
        },
        navLink: {
            color: '#F1FAEE',
            fontSize: '1.2rem'
        },
        resume: {
            paddingLeft: '1rem'
        },
        resumeBtn: {
            fontSize: '1.2rem'
        }
      };

    return(
        <Row>
            <Col>
                <Navbar fixed="top" className="justify-content-end" style={styles.nav}>
                    <Nav  >
                        <Nav.Item>
                            <Nav.Link style={styles.navLink} href="#about">about</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link style={styles.navLink} href="#portfolio">work</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link style={styles.navLink} href="#home">contact</Nav.Link>
                        </Nav.Item>
                        <Nav.Item style={styles.resume}>
                            <Button style={styles.resumeBtn} href={resume} variant="outline-info">resume</Button>{' '}
                        </Nav.Item>
                    </Nav>
                </Navbar>
            </Col>
        </Row>
    );
}