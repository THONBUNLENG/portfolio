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
    <Row className="g-3 justify-content-center pb-4">
      {primarySkills.map((tech, idx) => (
        <Col xs={4} sm={4} md={3} lg={2} key={idx} className="d-flex">
          <div className="tech-icons w-100 d-flex flex-column align-items-center justify-content-center p-3 rounded-2xl bg-[#0e121e]/80 border border-purple-500/30 hover:border-[#e74c5e] transition-all">
            <img
              src={tech.icon}
              alt={tech.name}
              className="tech-icon-images mb-2"
              style={{ width: "36px", height: "36px", objectFit: "contain" }}
            />
            <div className="tech-icons-text text-center text-xs text-slate-200 font-mono tracking-tight truncate w-100">
              {tech.name}
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;