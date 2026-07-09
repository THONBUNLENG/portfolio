import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import homeLogo from "../../Assets/tenor.gif";
import { useLanguage } from "../../context/LanguageContext";

function Home2() {
  // eslint-disable-next-line no-unused-vars
  const { t, language } = useLanguage();
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="align-items-center">
          {/* Image Section */}
          <Col md={5} className="myAvtar">
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              transitionSpeed={1500}
              scale={1.02}
            >
              <img
                src={homeLogo}
                alt="avatar"
                className="img-fluid home-about-avatar"
                style={{
                  display: "block",
                  margin: "0 auto",
                  width: "100%",
                  maxWidth: "100%",
                  maxHeight: "90vh",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </Tilt>
          </Col>

          {/* Text Section */}
          <Col md={7} className="home-about-description">
            <h1 className="home-intro-title">
              {t("homeIntroPrefix")} <span className="purple">{t("homeIntroMiddle")}</span> {t("homeIntroSuffix")}
            </h1>

            <p className="home-about-body" dangerouslySetInnerHTML={{ __html: t("homeIntroParagraph") }} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;