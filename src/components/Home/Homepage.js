import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "./homepage.css";
import "./override.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BurgerIcon from "../burger/BurgerIcon";
import githubLogo from "../images/github.png";
import linkedInLogo from "../images/linkedin.png";
import instagramLogo from "../images/instagram.png";
import emailLogo from "../images/emailLogo.png";
import tempaLogo from "../images/newLogo.png";

import { ReactComponent as Logo } from "../images/github.svg";

class Homepage extends Component {

  render() {
    const Header = () => (
        <div className="header" >
        <Image src={tempaLogo} rounded className="LogoInHeader" />
      </div>
    );

    return (
    <div>    
        <Header />
        <Container className="bodyText" >
        <div className="iconText">
          <Row >
            <Col xs={12} md={8}>
              <text className="text">
                My Name is E and I am a web developer in the DC/Metro Area.
              </text>
            </Col>
            </Row>
            </div>
            <div className="iconLogo">
            <Row >
            <Col md="auto" >
              <Image id="git_logo" src={githubLogo} className="LogoInHeader" onClick={((e) => window.open("https://github.com/Emmanuella-Aninye", "_blank"))}/>
              <Image id="linkedIn_logo" src={linkedInLogo} className="LogoInHeader" onClick={((e) => window.open("https://www.linkedin.com/in/emmanuella-aninye-a2487a97/", "_blank"))}/>
              <Image id="instagram_logo" src={instagramLogo} className="LogoInHeader" onClick={((e) => window.open("https://www.instagram.com/_natural_e/", "_blank"))}/>
              <Image id="instagram_logo" src={emailLogo} className="LogoInHeader" onClick={((e) => window.open("mailto:aninyeen@gmail.com", "_blank"))}/>

            </Col>
          </Row>
          </div>
        </Container>
      </div>
    );
  }
}

const pluginWrapper = () => {
  /**
   * require('fullpage.js/vendors/scrolloverflow'); // Optional. When using scrollOverflow:true
   */
};

export default Homepage;
