import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { CgCPlusPlus } from 'react-icons/cg';
import {  SiReact, SiDjango } from 'react-icons/si';
import {
  DiJavascript1,
  DiReact as DiReactIcon,
  DiPython,
  DiJava,
  DiHtml5,
  DiCss3,
  DiPhp,
  DiMysql,
} from 'react-icons/di';

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus size={40} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava size={40} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 size={40} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 size={40} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 size={40} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReactIcon size={40} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython size={40} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDjango size={40} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp size={40} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql size={40} />
      </Col>
    </Row>
  );
};

export default Techstack;
