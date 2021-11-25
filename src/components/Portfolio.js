import React from "react";

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Portfolio() {
    const styles = {
        row: {
          paddingTop: '1.5rem'
        },
        header: {
          color: '#E63946',
          fontSize: '1.5rem'
        }
      };

    return(
        <Row style={styles.row}>
            Cards here
        </Row>
    );
}