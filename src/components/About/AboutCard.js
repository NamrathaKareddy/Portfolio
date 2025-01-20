import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Namratha Reddy Kareddy. </span>
            <br />
            An enthusiastic Web Developer and aspiring Software Engineer, completed a Master's degree in Computer Science at the University of Texas at Dallas.
            <br />
            I have contributed to various academic and personal projects, such as developing an RNN-based stock prediction system, designing a GAN model for creative portrait transformations, and building a real-time rendering system using 3D Gaussian Splatting. I am proficient in languages and frameworks such as Python, Java, Angular, React, and MySQL, with a strong focus on creating scalable and maintainable software solutions.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Diamond Art
            </li>
            <li className="about-activity">
              <ImPointRight /> Googling
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(101, 139, 183)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Namratha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
