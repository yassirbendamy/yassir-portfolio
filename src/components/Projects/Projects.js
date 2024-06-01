import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/prj3.png";
import chatify from "../../Assets/Projects/macar.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/prj2.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="MACAR"
              description="Welcome to macar! We offer a seamless and user-friendly experience for purchasing your next vehicle. Browse our vast inventory of new and used cars, refine your search with advanced filters, and read reviews from other buyers. Get pre-approved for financing, compare rates, and take advantage of our convenient trade-in program. macar is here to make your car buying process easy and enjoyable."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Yummy"
              description="Welcome to Yummy! We offer a delightful and convenient way to satisfy your culinary cravings. Explore a wide variety of restaurants and cuisines, from local favorites to exotic dishes, all at your fingertips."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Intense"
              description="
              The Intensity Fit Gym website offers a dynamic and engaging experience, reflecting the intense and energetic environment of the gym. Visitors can easily access essential information such as the gym's mission and values, the various classes offered, trainer profiles, membership options, and ways to contact us. With striking visuals and user-friendly navigation, our website invites users to discover and join our community focused on performance and physical transformation."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
