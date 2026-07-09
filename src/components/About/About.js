import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/me2.png";
import Toolstack from "./Toolstack";
import Particle from "../Particle";
import { useLanguage } from "../../context/LanguageContext";

function About() {
  const { t } = useLanguage();
  return (
    <Container fluid className="about-section" id="about">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", alignItems: "stretch", padding: "10px", position: "relative" }}>
          <Col
            md={7}
            className="order-2 order-md-1"
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
              zIndex: 2 /* Keeps text content layers cleanly structured over backgrounds */
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", textAlign: "center" }}>
              {t("aboutTitlePrefix")} <strong className="purple">{t("aboutTitleHighlight")}</strong> {t("aboutTitleSuffix")}
            </h1>
            <Aboutcard />
          </Col>

          {/* The Absolute Wrapper Column */}
          <Col
            md={5}
            className="order-1 order-md-2 about-img-full"
          >
            <img src={laptopImg} alt="about" />
          </Col>
        </Row>

        <h1 className="project-heading">
          {t("professionalSkills").split(" ").map((word, i) =>
            word === "Skillset" ? <strong key={i} className="purple">{word}</strong> : <span key={i}>{word} </span>
          )}
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">{t("toolsTitle").split(" ")[0]}</strong> {t("toolsTitle").split(" ").slice(1).join(" ")}
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;