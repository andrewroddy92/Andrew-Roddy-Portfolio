import React from "react";

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons'

export default function Portfolio() {
    const styles = {
        row: {
          paddingTop: '3rem',
          paddingBottom: '3rem'
        },
        col: {
            display: "flex", 
            justifyContent: "center",
            paddingTop: '2rem'
        },
        fontAwesome: {
            fontSize: '2rem'
        },
        header: {
          color: '#E63946',
          fontSize: '1.5rem'
        },
        card: {
            backgroundColor: "#1D3557",
            color: "#457B9D",
            width: '18rem',
            border: '2px solid #457B9D',
            outline: '2px solid #457B9D',
            outlineOffset: '5px',
        }
      };

    return(
        <Row style={styles.row} className="justify-content-center">
            <Col style={styles.col}>
                <Card style={styles.card}>
                    <Card.Body style={{color: "#F1FAEE"}}>
                        <Card.Title>ecommerce-backend</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">NodeJS, ExpressJS, MySQL</Card.Subtitle>
                        <Card.Text>
                        A backend app for an e-commerce website with full CRUD capabilities.
                        </Card.Text>
                        <Card.Link href="https://github.com/andrewroddy92/ecommerce-backend">
                            <FontAwesomeIcon icon={faGithub} style={styles.fontAwesome}/>
                        </Card.Link>
                        <Card.Link href="https://watch.screencastify.com/v/QgVwgUiFa53TjGiojPO1">
                            <FontAwesomeIcon icon={faVideo} style={styles.fontAwesome}/>
                        </Card.Link>
                    </Card.Body>
                </Card>
            </Col>
            <Col style={styles.col}>
                <Card style={styles.card}>
                    <Card.Body style={{color: "#F1FAEE"}}>
                        <Card.Title>budget-tracker</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">MERN Stack, Heroku</Card.Subtitle>
                        <Card.Text>
                        A budget tracking tool that can be used offline or online - allows users to record their deposits and withdrawals while visualizing their cash flow overtime.
                        </Card.Text>
                        <Card.Link href="https://github.com/andrewroddy92/budget-tracker">
                            <FontAwesomeIcon icon={faGithub} style={styles.fontAwesome}/>
                        </Card.Link>
                        <Card.Link href="https://budget-tracker-aroddy.herokuapp.com/">
                            <FontAwesomeIcon icon={faExternalLinkSquareAlt} style={styles.fontAwesome}/>
                        </Card.Link>
                    </Card.Body>
                </Card>
            </Col>
            <Col style={styles.col}>
                <Card style={styles.card}>
                    <Card.Body style={{color: "#F1FAEE"}}>
                        <Card.Title>workout-tracker</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">MERN Stack, Heroku</Card.Subtitle>
                        <Card.Text>
                        Fitness Tracker allows you to see the daily metrics hit by past workouts so you can see your general activity level.
                        </Card.Text>
                        <Card.Link href="https://github.com/andrewroddy92/Workout-tracker">
                            <FontAwesomeIcon icon={faGithub} style={styles.fontAwesome}/>
                        </Card.Link>
                        <Card.Link href="https://fitness-tracker-aroddy.herokuapp.com/">
                            <FontAwesomeIcon icon={faExternalLinkSquareAlt} style={styles.fontAwesome}/>
                        </Card.Link>
                    </Card.Body>
                </Card>
            </Col>
            <Col style={styles.col}>
                <Card style={styles.card}>
                    <Card.Body style={{color: "#F1FAEE"}}>
                        <Card.Title>artnnection</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">MySQL, ExpressJS, Handlebars, Heroku</Card.Subtitle>
                        <Card.Text>
                        Fitness Tracker also allows you to see the daily metrics hit by past workouts so you can see your general activity level.
                        </Card.Text>
                        <Card.Link href="https://github.com/Leci1259/Artnnection">
                            <FontAwesomeIcon icon={faGithub} style={styles.fontAwesome}/>
                        </Card.Link>
                        <Card.Link href="https://dashboard.heroku.com/apps/artnnection">
                            <FontAwesomeIcon icon={faExternalLinkSquareAlt} style={styles.fontAwesome}/>
                        </Card.Link>
                    </Card.Body>
                </Card>
            </Col>
            <Col style={styles.col}>
                <Card style={styles.card}>
                    <Card.Body style={{color: "#F1FAEE"}}>
                        <Card.Title>note-taker</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">ExpressJS, NodeJS, Heroku</Card.Subtitle>
                        <Card.Text>
                        Note Taker is a note saving application that uses json files to store notes for later reading.
                        </Card.Text>
                        <Card.Link href="https://github.com/andrewroddy92/note-taker">
                            <FontAwesomeIcon icon={faGithub} style={styles.fontAwesome}/>
                        </Card.Link>
                        <Card.Link href="https://note-taker-aroddy.herokuapp.com/">
                            <FontAwesomeIcon icon={faExternalLinkSquareAlt} style={styles.fontAwesome}/>
                        </Card.Link>
                    </Card.Body>
                </Card>
            </Col>

        </Row>
    );
}