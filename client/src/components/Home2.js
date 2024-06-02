import React from "react";
import myImage from "../Assets/about.jpg"
import {
    AiOutlineTwitter,
    AiFillInstagram,
    AiOutlineTikTok,
    AiOutlineYoutube
  } from "react-icons/ai";

function Home2() {
    return (
        <div className="container">
            <div className="col-12">
                <div className="title-wrapper">
                    <h2 className="mbr-section-title mbr-fonts-style display-2">
                        <strong>About Me</strong>
                    </h2>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-8">
                <p className="home-about-body">
                    Sinenhlanhla Zethembe Ngobese, who is known professionally as S.N.E, is a dynamic music artist hailing
                    from Soweto, South Africa, currently making waves in the music industry with his distinctive blend of 
                    Amapiano rhythms and Soulful lyricism. With His smooth delivery, slick flows, and infectious cadence 
                    S.N.E captivates audiences worldwide with his electrifying performaces.
                    <br/>
                    <br/>
                    S.N.E'S latest triumph comes in the form of Tshwala Bam, a bona fide Amapiano sensation that has taken 
                    the music worldwide by storm. With its infectious beats, catchy hooks, and undeniable energy,Tshwala Bam stands as a 
                    testament to S.N.E's prowess as both a lyricist and a hit maker.      
                </p>
                <div className="row">
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
                </div>
                </div>
                <div className="col-sm-4">
                    <img src={myImage} style={{height:'400px'}} 
                    className="img-fluid rounded" alt="S.N.E"/>
                </div>
            </div>
            </div>
    )

}

export default Home2;