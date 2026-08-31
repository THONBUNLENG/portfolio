import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/home-main.svg";
import Toolstack from "./Toolstack";
import { useLanguage } from "../../context/LanguageContext";

function About() {
  const { t } = useLanguage();

  return (
    <Container fluid className="about-section" id="about">
      <Container>
        <Row
          style={{
            justifyContent: "center",
            alignItems: "stretch",
            padding: "10px",
            position: "relative",
          }}
        >
          <Col
            md={7}
            className="order-2 order-md-1"
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
              zIndex: 2,
            }}
          >
            <h1
              style={{
                fontSize: "2.1em",
                paddingBottom: "20px",
                textAlign: "center",
              }}
            >
              {t("aboutTitlePrefix")}{" "}
              <strong className="purple">{t("aboutTitleHighlight")}</strong>{" "}
              {t("aboutTitleSuffix")}
            </h1>
            <Aboutcard />
          </Col>

          {/* Image Wrapper Column */}
          <Col md={5} className="order-1 order-md-2 about-img-full">
            <img src={laptopImg} alt="about" />
          </Col>
        </Row>

        {/* Professional Skillset Heading */}
        <h1 className="project-heading">
          {t("technicalSkillsTitle")}{" "}
          <strong className="purple">{t("technicalSkillsHighlight")}</strong>
        </h1>

        <Techstack />

        {/* Tools Heading */}
        <h1 className="project-heading">
          <strong className="purple">{t("toolsTitlePrefix") || t("toolsTitle")}</strong>{" "}
          {t("toolsTitleSuffix") || ""}
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;