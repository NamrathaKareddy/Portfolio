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
  DiHtml5,
  DiCss3,
  DiSqllite,
  DiMsqlServer,
  DiDatabase,
  DiMysql,
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
  SiCss3,
  SiMysql,
  SiFigma,
  SiBootstrap,
  SiPhp,
  SiTensorflow,
  SiApachekafka,
  SiPostman,
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
        <OverlayTrigger placement="top" overlay={renderTooltip("React")}>
          <DiReact />
        </OverlayTrigger>
        <h5 style={{ marginTop: "10px" }}>React</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={renderTooltip("Angular")}>
          <SiAngularjs/>
        </OverlayTrigger>
        <h5 style={{ marginTop: "10px" }}>Angular</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={renderTooltip("HTML 5")}>
          <DiHtml5 />
        </OverlayTrigger>
        <h5 style={{ marginTop: "10px" }}>HTML 5</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={renderTooltip("CSS")}>
          <DiCss3/>
        </OverlayTrigger>
        <h5 style={{ marginTop: "10px" }}>CSS</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={renderTooltip("Git")}>
          <DiGit />
        </OverlayTrigger>
        <h5 style={{ marginTop: "10px" }}>Git</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={renderTooltip("Node.js")}>
          <DiNodejs />
        </OverlayTrigger>
        <h5 style={{ marginTop: "10px" }}>Node.js</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={renderTooltip("SQL")}>
          <DiMysql />
        </OverlayTrigger>
        <h5 style={{ marginTop: "10px" }}>SQL</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={renderTooltip("Oracle")}>
          <SiOracle />
        </OverlayTrigger>
        <h5 style={{ marginTop: "10px" }}>Oracle</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={renderTooltip("Figma")}>
          <SiFigma />
        </OverlayTrigger>
        <h5 style={{ marginTop: "10px" }}>Figma</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={renderTooltip("Bootstrap")}>
          <SiBootstrap />
        </OverlayTrigger>
        <h5 style={{ marginTop: "10px" }}>Bootstrap</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={renderTooltip("PHP")}>
          <SiPhp />
        </OverlayTrigger>
        <h5 style={{ marginTop: "10px" }}>PHP</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={renderTooltip("TensorFlow")}>
          <SiTensorflow />
        </OverlayTrigger>
        <h5 style={{ marginTop: "10px" }}>TensorFlow</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={renderTooltip("Kafka")}>
          <SiApachekafka />
        </OverlayTrigger>
        <h5 style={{ marginTop: "10px" }}>Kafka</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={renderTooltip("Postman")}>
          <SiPostman />
        </OverlayTrigger>
        <h5 style={{ marginTop: "10px" }}>Postman</h5>
      </Col>
    </Row>
    
    
  );
}

export default Techstack;
