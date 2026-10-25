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
    <Container fluid className="about-section py-5" id="about">
      <Container>
        <Row className="align-items-center justify-content-center py-4">
          <Col md={7} className="order-2 order-md-1 text-center text-md-start">
            <h2 className="display-6 fw-bold pb-3">
              {t("aboutTitlePrefix")}{" "}
              <strong className="purple">{t("aboutTitleHighlight")}</strong>{" "}
              {t("aboutTitleSuffix")}
            </h2>
            <Aboutcard />
          </Col>

          <Col md={5} className="order-1 order-md-2 text-center pb-4 pb-md-0">
            <img
              src={laptopImg}
              alt="About illustration"
              className="img-fluid"
              style={{ maxHeight: "420px" }}
            />
          </Col>
        </Row>

        <div className="pt-4">
          <h2 className="project-heading text-center mb-4">
            {t("technicalSkillsTitle")}{" "}
            <strong className="purple">{t("technicalSkillsHighlight")}</strong>
          </h2>
          <Techstack />
        </div>

        <div className="pt-4">
          <h2 className="project-heading text-center mb-4">
            <strong className="purple">{t("toolsTitlePrefix")}</strong>{" "}
            {t("toolsTitleSuffix")}
          </h2>
          <Toolstack />
        </div>

        <div className="pt-4">
          <Github />
        </div>
      </Container>
    </Container>
  );
}

export default About;
