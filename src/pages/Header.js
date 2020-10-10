import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap';
import topImage from "../assets/images/laptop.jpeg";

const BoxLeft = styled.div`
  width: 100%;
  height: 95vh;
  background: url(${topImage});
  background-position: center;
  background-size: cover;
`;
const BoxRight = styled.div`
  width: 100%;
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContentRight = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const TypoGraphyH3 = styled.p`
  color: #0077d9;
  font-size: 56px;
  text-align: center;
  font-family: "Rubik", sans-serif;
`;
const TypoGraphyH4 = styled(TypoGraphyH3)`
  font-size: 36px;
  margin-top: 10px;
  font-family: "Karla", sans-serif;
`;
const Btn = styled.button`
  width: 200px;
  padding: 10px 0px;
  border-radius: 20px;
  border: none;
  outline: none;
  color: #fafdff;
  background-color: #0077d9;
  align-self: center;
  margin-top: 20px;
  font-size: 20px;
`;

export default function Header() {
  const link = {
    listStyle: "none",
    textDecoration: "none",
    fontSsize: "20px",
    color: "#fafdff",
    fontFamily: "'Karla', sans-serif",
  };
  return (
    <Container fluid>
      <Row>
        <Col md={6} style={{margin: '0px', padding: '0px'}}>
        <BoxLeft></BoxLeft>
        </Col>
        <Col md={6}>
        <BoxRight>
             <ContentRight>
                 <TypoGraphyH3 className="textName">Ridho Abdul Majid</TypoGraphyH3>
                 <TypoGraphyH4 className="textJob">Software Engineer</TypoGraphyH4>
                 <Btn className="textBtn"> <Link style={link}to="/about">About Me</Link></Btn>
             </ContentRight>
         </BoxRight>
        </Col>
      </Row>
    </Container>
  );
}
