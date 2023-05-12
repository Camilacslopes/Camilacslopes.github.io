import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../../assets/img/pipefy.png";
import projImg2 from "../../assets/img/portfolio.png";
import projImg3 from "../../assets/img/designsystem.png";
import projImg4 from "../../assets/img/js-array.png";
import projImg5 from "../../assets/img/js.gif";
import projImg6 from "../../assets/img/bccsa.png";
import projImg7 from "../../assets/img/toDoList.png";
import projImg8 from "../../assets/img/tic-tac-toe-game-example.png";

import colorSharp2 from "../../assets/img/color-sharp2.png";
import "./styles/project.css";


export const Projects = () => {

  const frontendProjects = [
    {
      title: "Pipefy",
      description: "SaaS Business Startup",
      imgUrl: projImg1,
    },
    {
      title: "Personal Portfolio",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Pipefy",
      description: "Design System",
      imgUrl: projImg3,
    },
  ];

  const backendProjects = [
    {
      title: "Pipefy",
      description: "Databases and APIs",
      imgUrl: projImg1,
    },
    {
      title: "BCCSA",
      description: "Cloud, Databases, APIs",
      imgUrl: projImg6,
    },
    {
      title: "API REST",
      description: "Project with Node",
      imgUrl: projImg7,
    },
  ];

  const algorithmProjects = [
    {
      title: "JavaScript Exercises",
      description: "Basic JS",
      imgUrl: projImg5,
    },
    {
      title: "JavaScript Arrays",
      description: "JS Exercises with Arrays",
      imgUrl: projImg4,
    },
    {
      title: "JavaScript Exercises",
      description: "Basic JS",
      imgUrl: projImg8,
    },
  ];


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are some of my projects as a software developer, Front-End projects developed with technologies like React, TypeScript, HTML, CSS. Also projects in the Back-End with technologies like Ruby and NodeJs.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Frontend</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Backend</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Algorithm and Data Structure</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          frontendProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          backendProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          algorithmProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>                    
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img alt="projects" className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}