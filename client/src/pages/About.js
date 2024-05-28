import React from "react";
import { Container, Row, Col } from "react-bootstrap";
  
  
  function About() {
    return (
      <section>
        <Container fluid className="home-section" id="home">
          <Container  className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 className="heading-name">
                  This the About Page
                </h1>             
              </Col>          
            </Row>  
          </Container>
        </Container>
      </section>
    );
  }

export default About;