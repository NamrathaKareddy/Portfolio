import React from "react";
import { Col, Row, Tooltip, OverlayTrigger } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import { FaRProject } from "react-icons/fa";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiAngularjs,
  SiTypescript,
  SiOracle,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  // Helper function to create a tooltip
  const renderTooltip = (text) => (
    <Tooltip id={`tooltip-${text.toLowerCase()}`}>{text}</Tooltip>
  );

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={renderTooltip("Python")}>
          <DiPython />
        </OverlayTrigger>
        <h5 style={{ marginTop: "10px" }}>Python</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={renderTooltip("Java")}>
          <DiJava />
        </OverlayTrigger>
        <h5 style={{ marginTop: "10px" }}>Java</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={renderTooltip("C++")}>
          <CgCPlusPlus />
        </OverlayTrigger>
        <h5 style={{ marginTop: "10px" }}>C++</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={renderTooltip("JavaScript")}>
          <DiJavascript1 />
        </OverlayTrigger>
        <h5 style={{ marginTop: "10px" }}>JavaScript</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={renderTooltip("TypeScript")}>
          <SiTypescript />
        </OverlayTrigger>
        <h5 style={{ marginTop: "10px" }}>TypeScript</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={renderTooltip("R Language")}>
          <FaRProject />
        </OverlayTrigger>
        <h5 style={{ marginTop: "10px" }}>RLanguage</h5>
      </Col>
    </Row>
    
    
  );
}

export default Techstack;
