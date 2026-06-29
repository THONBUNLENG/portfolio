import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import homeLogo from "../../Assets/home-main.svg";
import { useLanguage } from "../../context/LanguageContext";

function Home2() {
  const { t, language } = useLanguage();
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="align-items-center">
          {/* Text Section */}
          <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                {t("homeIntroPrefix")} <span className="purple">{t("homeIntroMiddle")}</span> {t("homeIntroSuffix")}
              </h1>

              <p className="home-about-body">
                {t("homeIntroParagraph")}
              </p>
          </Col>

          {/* Image Section */}
          <Col
            md={4}
            className="myAvtar"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "20px",
            }}
          >
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
                className="img-fluid"
                style={{
                  width: "100%",
                  maxWidth: "450px",
                  height: "auto",
                  objectFit: "cover",
                  borderRadius: "20px",
                  display: "block",  
                }}
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;