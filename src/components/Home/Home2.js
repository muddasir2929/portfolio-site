import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillFacebook,
  AiOutlineAim,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            As a multifaceted professional, I proudly wear the hats of a Digital Marketing Expert, 
            Web Designer & Developer, and Custom Application Developer, I think… 🤷‍♂️
              <br />
              <br />With a passion for igniting businesses, I leverage my expertise in
              <i>
                <b className="purple"> SEO, SEM, SMM, & Application Development</b>
              </i>
              <br />to create tailored solutions that propel brands to new heights
              <br />
              <br />
              My commitment to blending innovative design with &nbsp;
              <i>
                <b className="purple">powerful marketing strategies makes me a dynamic force in the digital landscape</b> 
                ensuring that your business{" "}
                <b className="purple">
                thrives and excels.
                </b>
              </i>
              <br />
              <br />
              My mission is to craft seamless 
              digital experiences<b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  that captivate audiences, 
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> drive engagement, ultimately 
              boost your bottom line</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/muddasir2929"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.fiverr.com/muddasir7429"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineAim />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mmuddasir/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/muddasir.web"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
