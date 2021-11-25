import React from "react";
import resume from '../andrew_roddy_resume.docx';
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

export default function Navigation() {
    const styles = {
        nav: {
            paddingTop: '3rem'
        },
        navLink: {
            color: '#F1FAEE',
        }
      };

    return(
            <Nav className="justify-content-end" style={styles.nav} >
                <Nav.Item>
                    <Nav.Link style={styles.navLink} href="#about">about</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link style={styles.navLink} href="#portfolio">work</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link style={styles.navLink} href="#home">contact</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Button href={resume} variant="outline-info">resume</Button>{' '}
                </Nav.Item>
            </Nav>
    );
}