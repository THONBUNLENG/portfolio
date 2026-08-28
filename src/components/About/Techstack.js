import React from "react";
import { Col, Row } from "react-bootstrap";
import Flutter from "../../Assets/TechIcons/flutter.svg";
import Kotlin from "../../Assets/TechIcons/kotlin-svgrepo.svg";
import Swift from "../../Assets/TechIcons/swift-svgrepo.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Csharp from "../../Assets/TechIcons/csharp.svg";
import Firebase from "../../Assets/TechIcons/Firebase.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";

const primarySkills = [
  { icon: Flutter, name: "Flutter" },
  { icon: ReactIcon, name: "React" },
  { icon: Javascript, name: "JavaScript" },
  { icon: Typescript, name: "TypeScript" },
  { icon: Node, name: "Node.js" },
  { icon: Kotlin, name: "Kotlin" },
  { icon: Swift, name: "Swift" },
  { icon: Csharp, name: "C#" },
  { icon: Python, name: "Python" },
  { icon: Firebase, name: "Firebase" },
  { icon: SQL, name: "PostgreSQL" },
  { icon: Mongo, name: "MongoDB" },
];

function Techstack() {
  return (
    <Row className="g-3 g-md-4 justify-content-center pb-4">
      {primarySkills.map((tech, idx) => (
        <Col xs={4} sm={4} md={3} lg={2} key={idx} className="d-flex">
          <div
            className="w-100 d-flex flex-column align-items-center justify-content-center p-3 p-md-4 rounded-2xl bg-[#0e121e]/80 border border-purple-500/30 shadow-lg hover:border-[#e74c5e] hover:shadow-[#e74c5e]/20 hover:-translate-y-1 transition-all duration-300"
            style={{
              aspectRatio: "1 / 1",
              minHeight: "110px",
              backdropFilter: "blur(6px)",
            }}
          >
            <div className="d-flex align-items-center justify-content-center mb-2" style={{ height: "45px" }}>
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-auto h-auto transition-transform duration-300 hover:scale-110"
                style={{
                  maxHeight: "42px",
                  maxWidth: "42px",
                  objectFit: "contain",
                }}
                loading="lazy"
              />
            </div>
            
            <span className="text-xs sm:text-sm text-slate-200 font-semibold tracking-wide text-center truncate w-100 mt-1">
              {tech.name}
            </span>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;