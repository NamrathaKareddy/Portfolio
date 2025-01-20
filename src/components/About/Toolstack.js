import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiMicrosoftteams,
  SiSelenium,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      <h5 style={{ marginTop: "10px" }}>MacOS</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h5 style={{ marginTop: "10px" }}>VisualStudioCode</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSelenium />
        <h5 style={{ marginTop: "10px" }}>Selenium</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
        <h5 style={{ marginTop: "10px" }}>Slack</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftteams />
        <h5 style={{ marginTop: "10px" }}>Teams</h5>
      </Col>
    </Row>
  );
}

export default Toolstack;
