import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import imageHTML from "../assets/images/html.png";
import imageCSS from "../assets/images/css.jpg";
import imageJS from "../assets/images/js.jpg";
import imageReact from "../assets/images/react.png";
import imageRedux from "../assets/images/redux.png";
import imageNode from "../assets/images/node.png";
import imageExpress from "../assets/images/express.jpg";
import imageMongo from "../assets/images/mongo.png";
import imageMysql from "../assets/images/mysql.png";
import imageCukurin from '../assets/images/ckri.png';
import imageMG from '../assets/images/mgf.png';
import imageAdmin from '../assets/images/admin.png';
import imageMini from '../assets/images/mini_menagerie.JPG';
import imageQasirSignIn from '../assets/images/qasir_sign_in.JPG';
import imageQasirDashboard from '../assets/images/qasir_user_dashboard.JPG';
import imageStoryBook from '../assets/images/storybook_qasir_ui.JPG';

import './Skills.css'
const Container = styled.div`
  width: 100%;
  height: 95vh;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;
const BoxLeft = styled.div`
  margin-top: 5px;
  padding: 5px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const CardHolder = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

`;

const Card = styled.div`
  width: 200px;
  height: 150px;
  border: 1px solid black;
  margin: 8px;
  background: url(${imageHTML});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  &:hover {
    opacity: 0.5;
  }
`;
const Card1 = styled(Card)`
  background: url(${imageCSS});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

`;
const Card2 = styled(Card)`
  background: url(${imageJS});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
const Card3 = styled(Card)`
  background: url(${imageReact});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

`;
const Card4 = styled(Card)`
  background: url(${imageRedux});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

`;
const Card5 = styled(Card)`
  background: url(${imageNode});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

`;
const Card6 = styled(Card)`
  background: url(${imageExpress});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

`;
const Card7 = styled(Card)`
  background: url(${imageMongo});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

`;
const Card8 = styled(Card)`
  background: url(${imageMysql});
  background-position: center;
  background-ize: cover;
  background-repeat: no-repeat;

`;

const BoxRight = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  
`;
const TypoGraphyH4 = styled.p`
  font-size: 24px;
  font-family: "Karla", sans-serif;
  font-weight: 400;
  padding: 15px;
  text-align: center;
  letter-spacing: 2px;
  margin-bottom: 20px;
  color: #0077d9;
  font-family: 'Rubik', sans-serif;
`;
const Btn = styled.button`
    width: 300px;
    padding: 10px 0px;
    border-radius: 20px;
    border: none;
    outline: none;
    color: #fafdff;
    background-color: #0077d9;
    align-self: center;
    margin-top: 20px;
    font-size: 20px;
    text-align: center;

    &:hover {
        background-color: darkblue;
    }
`

export default function Skills() {
  return (
    <Container className="ctr">
      <BoxLeft className="box-left">
        <CardHolder className="card-holder">
          <Card className = "item-card"></Card>
          <Card1 className = "item-card"></Card1>
          <Card2 className = "item-card"></Card2>
          <Card3 className = "item-card"></Card3>
          <Card4 className = "item-card"></Card4>
          <Card5 className = "item-card"></Card5>
          <Card6 className = "item-card"></Card6>
          <Card7 className = "item-card"></Card7>
          <Card8 className = "item-card"></Card8>
        </CardHolder>
      </BoxLeft>
      <BoxRight>
                <TypoGraphyH4>My Portofolio using MERN Stack</TypoGraphyH4>
      <Carousel>
                <div>
                    <img src={imageAdmin} alt="img1" />
                    <p className="legend">admin.mgfriends.com</p>
                </div>
                <div>
                    <img src={imageCukurin} alt="img2" />
                    <p className="legend">cukurin.netlify.com</p>
                </div>
                <div>
                    <img src={imageMG} alt="img3" />
                    <p className="legend">mgfriends.com</p>
                </div>
                <div>
                    <img src={imageMini} alt="img4" />
                    <p className="legend">mini-m.netlify.app</p>
                </div>
                <div>
                    <img src={imageQasirSignIn} alt="img4" />
                    <p className="legend">qasir.id</p>
                </div>
                <div>
                    <img src={imageQasirDashboard} alt="img4" />
                    <p className="legend">qasir.id</p>
                </div>
                <div>
                    <img src={imageStoryBook} alt="img4" />
                    <p className="legend">qasir-ui.qasir.xyz</p>
                </div>
            </Carousel>
            <Btn><Link to="/contact" style={{textDecoration: 'none', color: '#fafdff', fontFamily: "'Karla', sans-serif"}}> Get In Touch </Link> </Btn>

      </BoxRight>
    </Container>
  );
}
