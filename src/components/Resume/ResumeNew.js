import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import me2 from "../../Assets/me2.jpg";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import {
  FaGraduationCap,
  FaBriefcase,
  FaLaptopCode,
} from "react-icons/fa";
import { ImPointRight } from "react-icons/im";
import { CgFileDocument } from "react-icons/cg";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const resumeItems = [
    {
      title: "Mobile App Developer (Flutter/Dart)",
      company: "Wintech Software Development Cambodia Co. Ltd",
      period: "2025 – 2026",
      details: [
        "Developed and maintained a complete Coffee Shop Management System (Wintech Software Development Cambodia Co. Ltd) as a production-ready mobile application.",
        "Built core features including POS, inventory management, sales reporting, and user authentication using Flutter/Dart.",
        "Collaborated with backend and QA teams to integrate APIs and ensure smooth deployment in a live business environment.",
      ],
    },
    {
      title: "Backend Developer Intern",
      company: "VANNA (Siem Reap, Cambodia)",
      period: "July 2024 – October 2024",
      details: [
        "Developed and maintained RESTful APIs using Node.js and Express, delivering reliable endpoints for mobile and web clients.",
        "Integrated MongoDB and PostgreSQL into backend services, improving data access speed by up to 30%.",
        "Collaborated with cross-functional teams to deliver features in sprints and participated in code reviews.",
      ],
    },
    {
      title: "Developer Freelancer & Open Source Contributor",
      company: "Freelance & Open Source",
      period: "2023 – Present",
      details: [
        "Built and deployed full-stack applications using Laravel, React, and Flutter for various clients.",
        "Contributed to open-source projects and created technical content (blogs and tutorials) for the developer community.",
        "Designed efficient SQL queries and REST APIs, reducing application response time by 25%.",
      ],
    },
  ];

  const education = [
    {
      title: "Bachelor of Science in Computer Science",
      school: "Beltei International University (Phnom Penh, Cambodia)",
      period: "2023 – 2026",
      details: [
        "Focused on software engineering, algorithms, databases, and web/mobile technologies.",
        "Capstone project: Automated School Management System.",
      ],
    },
    {
      title: "High School Diploma – Science",
      school: "Beltei International School",
      period: "2019 – 2023",
      details: [
        "Graduated with a focus on science and mathematics, achieving top grades in computer science and physics.",
      ],
    },
  ];

  const skills = [
    "Flutter / Dart",
    "JavaScript / TypeScript",
    "React.js / Next.js",
    "Node.js / Express",
    "Laravel / PHP",
    "MongoDB / PostgreSQL",
    "Docker / Git / CI-CD",
    "Tailwind CSS / Bootstrap",
  ];

  const tools = [
    "VS Code",
    "Postman",
    "IntelliJ IDEA",
    "Android Studio",
    "Figma",
    "GitHub / GitLab",
    "Linux",
  ];

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
              My <span className="purple">Resume</span>
            </h1>
            <p style={{ color: "white", maxWidth: "800px", marginTop: "10px", marginBottom: 0 }}>
              A summary of my professional journey, skills, and education.
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
                position: "relative",
                zIndex: 10,
                width: "150px",
                height: "150px",
                objectFit: "cover",
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
                Experience
              </h3>
            </div>

            {resumeItems.map((item, index) => (
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
                Education
              </h3>
            </div>

            {education.map((item, index) => (
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
                Skills
              </h3>
            </div>
            <Row style={{ marginBottom: "20px" }}>
              {skills.map((skill, index) => (
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
              Technical <span className="purple">Skills</span>
            </h1>
            <p style={{ color: "white", marginBottom: "20px" }}>
              Tools and technologies I work with on a daily basis.
            </p>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
          {tools.map((tool, index) => (
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
