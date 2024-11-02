import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiOutlineYoutube,
  AiFillInstagram,
} from "react-icons/ai";
  import { FaLinkedinIn, FaDev } from "react-icons/fa";

function SelfIntro() {
  return (
    <Container fluid className="home-about-section  container-fluid" id="about">
<Container>
  <Row>
    <Col md={8} className="home-about-description">
      <h1 style={{ fontSize: "2.6em" }}>
        LET ME <span className="purple"> INTRODUCE </span> MYSELF
      </h1>
      <p className="home-about-body">
        My journey into DevOps has been an exciting adventure of learning and implementing efficient, scalable solutions! 🚀
        <br />
        <br />I have expertise in tools and languages like
        <i>
          <b className="purple"> Python, Bash, and Terraform. </b>
        </i>
        <br />
        <br />
        My field of interest lies in automating infrastructure and developing robust
        <i>
          <b className="purple"> CI/CD pipelines </b> and efficient &nbsp;
          <b className="purple">Cloud Infrastructure</b> solutions.
        </i>
        <br />
        <br />
        Whenever possible, I also apply my passion for containerization with
        <b className="purple"> Docker and Kubernetes</b> to optimize deployments
        and
          <b className="purple"> cloud platforms </b>
        like
        <b className="purple"> AWS and Azure</b>.
      </p>
    </Col>
    <Col md={4} className="myAvtar">
      <Tilt>
        <img src={myImg} className="img-fluid" alt="avatar" />
      </Tilt>
    </Col>
  </Row>
  <Row>
    <Col md={12} className="home-about-social">
      <h1>FIND ME ON</h1>

      <ul className="home-about-social-links">
        <li className="social-icons">
          <a
            href="https://github.com/sijeeshmiziha"
            target="_blank"
            rel="noreferrer"
            className="icon-colour  home-social-icons"
          >
            <AiFillGithub />
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://www.linkedin.com/in/sijeeshmiziha/"
            target="_blank"
            rel="noreferrer"
            className="icon-colour  home-social-icons"
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://twitter.com/sijeeshmiziha"
            target="_blank"
            rel="noreferrer"
            className="icon-colour home-social-icons"
          >
            <AiOutlineTwitter />
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://dev.to/sijeeshmiziha"
            target="_blank"
            rel="noreferrer"
            className="icon-colour  home-social-icons"
          >
            <FaDev />
          </a>
        </li>
      </ul>
    </Col>
  </Row>
</Container>

    </Container>
  );
}
export default SelfIntro;
