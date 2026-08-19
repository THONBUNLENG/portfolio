import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { useLanguage } from "../../context/LanguageContext";

function Home2() {
  // eslint-disable-next-line no-unused-vars
  const { t, language } = useLanguage();
  return (
   <Container fluid className="home-about-section" id="about">
  <Container>
    <Row className="justify-content-center">
      <Col md={9} lg={8} className="home-about-description">
        <h1 className="home-intro-title">
          {t("homeIntroPrefix")}{" "}
          <span className="purple">{t("homeIntroMiddle")}</span>{" "}
          {t("homeIntroSuffix")}
        </h1>
        <p
          className="home-about-body"
          dangerouslySetInnerHTML={{ __html: t("homeIntroParagraph") }}
        />
      </Col>
    </Row>
  </Container>
</Container>
  );
}

export default Home2;