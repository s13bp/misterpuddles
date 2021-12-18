import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
           text here bla bla blam <span className="purple">something catchy</span>
            from <span className="purple"> text here .</span>
            <br />I am a junior pursuing IMSC in Maths and Computing in BIT
            Mesra. a junior pursuing IMSC in Maths a a junior pursuing IMSC in Maths a a junior pursuing IMSC in Maths a
            <br />
            <br />
            text goes here
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> bla bla bla
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "could enter quote here!"{" "}
          </p>
          <footer className="blockquote-footer">puddles</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
