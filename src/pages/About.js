import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

import topImage from "../assets/images/robot.jpeg";

import "./About.css";

const BoxRight = styled.div`
  width: 100%;
  height: 95vh;
  background: url(${topImage});
  background-position: center;
  background-size: cover;
`;

export default function About() {
  return (
    <Container fluid>
      <Row className="rowInduk">
        <Col className="colatas">
              <Row className="rowi1">
                <p className="content-text">
                  Hello, My name is Ridho Abdul Majid, I am 26 Years old, and I
                  live in Citayam, Indonesia.
                </p>
              </Row>
              <Row className="rowi2">
                <p className="content-text">
                  I started learning to code in June 2018, I choose Javascript
                  as my 1st programming language, and I mesmerized with
                  Javascript.
                </p>
              </Row>
              <Row className="rowi3">
                <p className="content-text">
                  I got my first job as Full Stack Developer at November 2019, I
                  Enjoy my time learning something new in order to upgrade my
                  programming skills.
                  <Button className="btn-btm">
                    <Link
                      to="/skills"
                      style={{
                        textDecoration: "none",
                        color: "#0077d9",
                        fontFamily: "'Karla', sans-serif",
                      }}
                    >
                      {" "}
                      Read More{" "}
                    </Link>{" "}
                  </Button>
                </p>
              </Row>
        </Col>
        <Col className="colbawah">
          <BoxRight></BoxRight>
        </Col>
      </Row>
    </Container>
  );
}
