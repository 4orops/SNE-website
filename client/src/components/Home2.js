import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "./Particle";
import myImage from "../Assets/about.jpg"
import ReadMoreButton from "./ReadMoreButton";
import {
    AiOutlineTwitter,
    AiFillInstagram,
    AiOutlineTikTok,
    AiOutlineYoutube
  } from "react-icons/ai";

function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Particle />
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>About Me</h1>
                        
                        <p className="home-about-body">
                        <ReadMoreButton
                            initialText="Sinenhlanhla Zethembe Ngobese, who is known professionally as S.N.E, is a dynamic music artist hailing
                            from Soweto, South Africa, currently making waves in the music industry with his distinctive blend of 
                            Amapiano rhythms and Soulful lyricism. With His smooth delivery, slick flows, and infectious cadence 
                            S.N.E captivates audiences worldwide with his electrifying performaces."
                            
                            expandedText="S.N.E'S latest triumph comes in the form of Tshwala Bam, a bona fide Amapiano sensation that has taken 
                            the music worldwide by storm. With its infectious beats, catchy hooks, and undeniable energy,Tshwala Bam stands as a 
                            testament to S.N.E's prowess as both a lyricist and a hit maker."
                            />
                        </p>
                        
                        <Col md={12} className="home-about-social">
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/soumyajit4419"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                  >
                             <AiOutlineTikTok />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://github.com/soumyajit4419"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                  >
                             <AiOutlineTwitter/>
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://github.com/soumyajit4419"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                  >
                             <AiFillInstagram/>
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://github.com/soumyajit4419"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                  >
                             <AiOutlineYoutube/>
                                </a>
                            </li>
                        </ul>
                    </Col>
                    </Col>
                    <Col md={4} className="myAbout"> 
                        <img src={myImage} className="img-fluid" alt="S.N.E"/>
                    </Col>
                </Row>
            </Container>
        </Container>
    )

}

export default Home2;