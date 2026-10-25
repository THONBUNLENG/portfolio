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
      {primarySkills.map((tech) => (
        <Col xs={4} sm={4} md={3} lg={2} key={tech.name} className="d-flex">
          <div
            className="flex w-full flex-col items-center justify-center rounded-2xl border border-purple-500/30 bg-[#0e121e]/80 p-3 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#e74c5e] hover:shadow-[#e74c5e]/20 sm:p-4"
            style={{ aspectRatio: "1 / 1", minHeight: "110px" }}
          >
            <div className="mb-2 flex h-[45px] items-center justify-center">
              <img
                src={tech.icon}
                alt=""
                className="h-auto w-auto max-h-[42px] max-w-[42px] object-contain transition-transform duration-300 hover:scale-110"
                loading="lazy"
              />
            </div>

            <span className="mt-1 w-full truncate text-center text-xs font-semibold tracking-wide text-slate-200 sm:text-sm">
              {tech.name}
            </span>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
