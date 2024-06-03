import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImage from "../Assets/about.jpg"
import ReadMoreButton from "../components/ReadMoreButton";
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineTikTok,
  AiOutlineYoutube
} from "react-icons/ai";
import Player from "../components/Player";
import Hitsong from "../components/Hitsong";
// import Hitsong2 from "../components/Hitsong2";
  
function About() {
  return (
    <div className="container">
      <div className="row" style={{marginTop:'80px'}}>
      <div className="col-sm-4">
        <img src={myImage} style={{height:'400px'}} 
        className="img-fluid rounded" alt="S.N.E"/>
      </div>

        <div className="col-sm-8">
          <h2 className="display-2">
            <strong>My Bio</strong>
          </h2>
          <p className="home-about-body">
              <ReadMoreButton
                initialText="A Musical Journey from Jabulani, Soweto Sixteen years ago, amidst the bustling streets of Jabulani, Soweto, 
                             a young Sinenhlanhla Zethembe Ngobese, known today as S.N.E, embarked on a musical journey that would shape 
                             his destiny. Armed with nothing but sheer passion and a burning desire to express himself through music, 
                             S.N.E's humble beginnings laid the foundation for his remarkable ascent in the industry.
                             
                             At the tender age of a teenager, S.N.E's musical adyssey commenced in the confines of his own home, where he 
                             ingeniously crafted his earliest compositions using nothing more than cheap equipment and a humble computer 
                             microphone. Despite the limitations of his resources, his boundless creativity and unwavering determination 
                             propelled him forward, igniting a spark that would eventually ignite a blazing flame of musical brilliance. "
                            
                expandedText="The roots of S.N.E's melodic prowess can be traced back to his formative years spent in the heart of his 
                              community's vibrant church choir. As a cherished member of the worship team, S.N.E honed his vocal abilities 
                              and developed a deep appreciation of the power of harmony and rythm. It was within the sacred halls of the 
                              church that he discovered his innate talent for singing, laying the groundwork for his future endeavours in 
                              the music industry.
                              
                              While his upbringing instilled in him a profound reverence for gospel music, S.N.E's artistic palette war 
                              far from limited. Fuelled by an an insatiable curiosity and an insatiable appete for musical exploration, 
                              he found himself drawn to the rhythmic allure of hip-hop, where he first cut his teeth as a burgeoning rapper. 
                              Infused with the raw energy and lyrical finesse of innermost thoughts, dreams, and aspirations, laying the 
                              groundwork for his evolution as multifaced artist. 
                              
                              Indeed, S.N.E's eclectic musical influences and diverse experiences have left an indelible mark on his artistry, 
                              infusing every genre he he touches with remnants of his past life and enery as an MC. From the infectious rhythms 
                              of Amapiano to the soul-stirring melodies of gospel, S.N.E's music serves as a testament to his rich tapestry of 
                              influences and his unwavering commitment to pushing the boundaries of creativity and self-expression. 
                              
                              In an era defined by musical innovation and boundary-pushing creativity, S.N.E stands at the forefront as a true 
                              vanguard of the Amapiano movement. With his finger firmly on the pulse of contemporary music, S.N.E continues to 
                              push the envelope, captivating audiences with His electrifying performaces and charttopping hits. As he continues 
                              to blaze a trail for himself in the music industry, S.N.E remains committed to pushing boundaries, breaking barriers, 
                              and inspiring audiences around the globe with his unparalleled talent and infectious passion for music. 
                              
                              With each subsequent release, S.N.E pushed the boundaries of creativity, exploring new sonic landscapes and pushing 
                              the envelope of what contemporary music could be. His ability to seamlessly blend elements of Hip-Hop, Amapiano, gospel, 
                              and traditional African rhythms garned him widespread acclaim and solidified his reputation as a trailblazer in the industry. 
                              
                              At the heart of S.N.E's music lies a commitment to authenticity and storytelling. Whether delving into personal experiences, 
                              social commentary, or matters of the heart, S.N.E approaches each song with sense of vulnerability and honesty that resonates 
                              deeply with listeners. His smooth delivery, slick flows, and impeccable cadence imbue his music with an infectious energy and 
                              undeniable charm, drawing audiences into his world with every verse. Throughout his career, S.N.E has achieved numerous milestones 
                              and accolades that attest to his impact and influence in the music industry. From topping streaming charts and garninring millions 
                              on views on music vides to perfoming on prestigious stages and collaborating with industry heavywights, S.N.E's trajectory has 
                              been nothing short of meteoric. 
                              
                              While S.N.E's roots may lie in Soweto, his music transcends geographical boundaries, resonating with audiences around the world. 
                              His international appeal has led to collaborations and performaces in diverse location, further cementing his status as a global 
                              ambassador for South African music. Beyong his musical endeavours, S.N.E is also committed to making a positive impact in his 
                              community. Through various philanthropic initiatives and community outreach programs, he strives to uplift and empower the next 
                              generation of aspiring artists, ensuring that the legacy of South African music continues to thrive for years to come. 
                              
                              
                              In a musical landscape defined by innovation and reinvention, S.N.E stands out as a true original. With his unparalleled talent, 
                              unwavering dedication, and boundless creativity, he continues to push the boundaries of what is possible in music, inspiring 
                              audiences and fellow artists alike. As he continues on his journey, one thing is certain: the world has only begun to experience 
                              the full extent of S.N.E's artistry and influence. "
              />
              </p>   
              <div className="mbr-section-btn">
              <a className="btn btn-success display-4" href="#"> Read More </a>
              <a className="btn btn-primary display-4" href="#"> Listen Now </a>
            </div>

            <div className="col-sm-12">
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
      </div>
      <Player />
      <Hitsong/>
  </div>
    );
  }
export default About;