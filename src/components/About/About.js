import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/me.jpg";
import Toolstack from "./Toolstack";
import { useLanguage } from "../../context/LanguageContext";

function About() {
  const { t } = useLanguage();
  return (
    <>
      {" "}
      <Particle />
      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", textAlign: "center" }}>
                {t("aboutTitlePrefix")} <strong className="purple">{t("aboutTitleHighlight")}</strong> {t("aboutTitleSuffix")}
              </h1>
              <Aboutcard />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "30px" }}
              className="about-img"
            >
              <img src={laptopImg} alt="about" className="img-fluid" />
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
    </>
  );
}

export default About;
