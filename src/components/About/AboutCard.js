import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Muhammad Muddasir</span> 
            from <span className="purple"> Multan, Pakistan.</span>
            <br /> I hold a Bachelor's of Business Administration (BBA) degree from Bahauddin Zakariya University
            <br />
            <br />
            Additionally, I am currently employed as a Digital Marketing Team Lead at
            Verticalsols.com.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Morning Walk
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Muddasir</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
