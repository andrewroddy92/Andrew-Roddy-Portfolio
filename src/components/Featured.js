import React from "react";

import screenshot from '../assets/book-search.PNG'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons'

export default function Featured() {
    const styles = {
        row: {
          paddingTop: '2rem'
        },
        header: {
          color: '#E63946',
          fontSize: '1.5rem'
        },
        textCol: {
          textAlign: 'right',
          color: "#F1FAEE",
        },
        title: {
          fontSize: '1.8rem'
        },
        description: {
          marginTop: '1.5rem',
          marginBottom: '1.5rem',
          backgroundColor: '#457B9D',
          textAlign: 'left',
          paddingTop: '.5rem',
          paddingLeft: '1rem',
          fontSize: '1.2rem',
          height: '3rem'
        },
        techStack: {
          listStyleType: 'none'
        },
        imageCol: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        },
        image: {
          width: '29rem',
          height: '20rem',
          outline: '2px solid #457B9D',
          outlineOffset: '5px',
        }
      };

    return(
        <Row id="featured" style={styles.row}>
            <Col style={styles.imageCol}>
            <a href="https://book-search-aroddy.herokuapp.com/">
              <img src={screenshot} alt="screenshot" style={styles.image} ></img></a>
            </Col>
            <Col style={styles.textCol}>
              <div id="featured-text">
                <h2 style={styles.title}>featured: Google Books Search</h2>
                <div style={styles.description}>
                  <p>users can authenticate, search for books, and save books.</p>
                </div>
                <ul style={styles.techStack}>
                  <li>MongoDB</li>
                  <li>ExpressJS</li>
                  <li>React</li>
                  <li>NodeJS</li>
                  <li>Apollo</li>
                  <li>GraphQL</li>
                  <li>Heroku</li>
                </ul>
                <a href="https://github.com/andrewroddy92/graphql-book-search">Github <FontAwesomeIcon icon={faGithub} /></a><br/>
                <a href="https://book-search-aroddy.herokuapp.com/">Heroku <FontAwesomeIcon icon={faExternalLinkSquareAlt} /></a>
              </div>
            </Col>
        </Row>
    );
}