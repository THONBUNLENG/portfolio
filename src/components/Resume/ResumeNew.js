import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import me2 from "../../Assets/me3.png";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import {
  FaGraduationCap,
  FaBriefcase,
  FaLaptopCode,
} from "react-icons/fa";
import { ImPointRight } from "react-icons/im";
import { CgFileDocument } from "react-icons/cg";
import { useLanguage } from "../../context/LanguageContext";

function ResumeNew() {
  const { t, language } = useLanguage();

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        {/* Header Row: Text left, Image right */}
        <Row
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "40px",
            paddingBottom: "20px",
          }}
        >
          <Col
            md={8}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingBottom: "20px",
              textAlign: "center",
            }}
          >
             <h1
              style={{
                fontSize: "2.4em",
                fontWeight: 700,
                color: "white",
                margin: 0,
              }}
            >
              {language === "en" ? (
                <>My <span className="purple">Resume</span></>
              ) : (
                <>{t("resumeTitlePrefix")} <span className="purple">{t("resumeTitleHighlight")}</span> {t("resumeTitleSuffix")}</>
              )}
            </h1>
            <p style={{ color: "white", maxWidth: "800px", marginTop: "10px", marginBottom: 0 }}>
              {t("resumeSummary")}
            </p>
          </Col>
          <Col
            md={4}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              paddingBottom: "20px",
            }}
          >
            <img
              src={me2}
              alt="Profile"
              style={{
                // position: "relative",
                // zIndex: 10,
                width: "250px",
                height: "250px",
                // objectFit: "cover",
              }}
            />
          </Col>
        </Row>

        <Row className="resume" style={{ paddingTop: "40px" }}>
          <Col md={6} className="resume-left">
            <div
              style={{
                color: "white",
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <FaBriefcase style={{ color: "#c770f0", fontSize: "1.5em" }} />
              <h3
                style={{
                  margin: 0,
                  fontSize: "1.3em",
                  fontWeight: 600,
                  color: "#c770f0",
                }}
              >
                {t("experienceTitle")}
              </h3>
            </div>

            {(t("resume.experience") || []).map((item, index) => (
              <div className="resume-item" key={index}>
                <h6
                  style={{
                    fontSize: "1em",
                    fontWeight: 600,
                    color: "#fff",
                    marginBottom: "5px",
                  }}
                >
                  {item.title}
                </h6>
                <p
                  style={{
                    fontSize: "0.9em",
                    color: "#c95bf5",
                    marginBottom: "4px",
                    fontWeight: 500,
                  }}
                >
                  {item.company} | {item.period}
                </p>
                <ul>
                  {item.details.map((detail, i) => (
                    <li key={i} className="like-item">
                      <ImPointRight /> {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Col>

          <Col md={6} className="resume-right">
            <div
              style={{
                color: "white",
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <FaGraduationCap
                style={{ color: "#c770f0", fontSize: "1.5em" }}
              />
              <h3
                style={{
                  margin: 0,
                  fontSize: "1.3em",
                  fontWeight: 600,
                  color: "#c770f0",
                }}
              >
                {t("educationTitle")}
              </h3>
            </div>

            {(t("resume.education") || []).map((item, index) => (
              <div className="resume-item" key={index}>
                <h6
                  style={{
                    fontSize: "1em",
                    fontWeight: 600,
                    color: "#fff",
                    marginBottom: "5px",
                  }}
                >
                  {item.title}
                </h6>
                <p
                  style={{
                    fontSize: "0.9em",
                    color: "#c95bf5",
                    marginBottom: "4px",
                    fontWeight: 500,
                  }}
                >
                  {item.school} | {item.period}
                </p>
                <ul>
                  {item.details.map((detail, i) => (
                    <li key={i} className="like-item">
                      <ImPointRight /> {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div
              style={{
                color: "white",
                marginBottom: "20px",
                marginTop: "40px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <FaLaptopCode style={{ color: "#c770f0", fontSize: "1.5em" }} />
              <h3
                style={{
                  margin: 0,
                  fontSize: "1.3em",
                  fontWeight: 600,
                  color: "#c770f0",
                }}
              >
                {t("skillsTitle")}
              </h3>
            </div>
            <Row style={{ marginBottom: "20px" }}>
              {(t("resume.skills") || []).map((skill, index) => (
                <Col
                  xs={6}
                  md={6}
                  key={index}
                  style={{ marginBottom: "8px", paddingLeft: "5px" }}
                >
                  <ImPointRight style={{ color: "#c770f0", marginRight: "8px" }} />
                  <span style={{ color: "#fff", fontSize: "0.95em" }}>
                    {skill}
                  </span>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingTop: "40px", paddingBottom: "20px" }}>
          <Col md={12} style={{ textAlign: "center" }}>
            <h1
              style={{
                fontSize: "2em",
                fontWeight: 600,
                color: "white",
                marginBottom: "10px",
              }}
            >
              <FaLaptopCode
                style={{ color: "#c770f0", marginRight: "10px" }}
              />{" "}
              {language === "en" ? (
                <>Technical <span className="purple">Skills</span></>
              ) : (
                <>{t("technicalSkillsTitle")} <span className="purple">{t("technicalSkillsHighlight")}</span></>
              )}
            </h1>
            <p style={{ color: "white", marginBottom: "20px" }}>
              {t("technicalSkillsSubtitle")}
            </p>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
          {(t("resume.tools") || []).map((tool, index) => (
            <Col
              key={index}
              xs={4}
              md={2}
              className="tech-icons"
              style={{ marginBottom: "10px" }}
            >
              <CgFileDocument
                style={{ fontSize: "1.5em", color: "#c770f0" }}
              />
              <div className="tech-icons-text" style={{ fontSize: "0.85em" }}>
                {tool}
              </div>
            </Col>
          ))}
        </Row>

        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            paddingBottom: "20px",
          }}
        >
        </Row>

        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            paddingBottom: "50px",
          }}
          className="pdf-viewer"
        >
        </Row>
      </Container>
    </Container>
  );
}

export default ResumeNew;
