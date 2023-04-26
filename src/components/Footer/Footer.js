import { Container, Row, Col } from "react-bootstrap";
import "./styles/footer.css";
import logo from "./assets/img/logo.svg";
import linkedin from "./assets/img/linkedin.svg";
import github from "./assets/img/github.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <br/>
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/camila-lopes-dev/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedInLogo" /></a>
              <a href="https://github.com/Camilacslopes" target="_blank" rel="noopener noreferrer"><img src={github} alt="GithubLogo" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}