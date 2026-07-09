import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiNextdotjs, SiSolidity } from "react-icons/si";
import { FaRust } from "react-icons/fa";
import Flutter from "../../Assets/TechIcons/flutter.svg";
import Kotlin from "../../Assets/TechIcons/kotlin-svgrepo.svg";
import Swift from "../../Assets/TechIcons/swift-svgrepo.svg";
import Go from "../../Assets/TechIcons/go.svg";
import C from "../../Assets/TechIcons/C++.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import HaskellIcon from "../../Assets/TechIcons/Haskell.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Firebase from "../../Assets/TechIcons/Firebase.svg";
import Redis from "../../Assets/TechIcons/Redis.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Kubernates from "../../Assets/TechIcons/Kubernates.svg";
import Redux from "../../Assets/TechIcons/Redux.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import MUI from "../../Assets/TechIcons/MUI.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import AWS from "../../Assets/TechIcons/AWS.svg";
import Kafka from "../../Assets/TechIcons/Kafka.svg";
import Csharp from "../../Assets/TechIcons/csharp.svg";

// Short + medium names — static grid (no marquee)
const staticGridList = [
  { icon: Csharp, name: "C#" },
  { icon: Go, name: "Go" },
  { icon: C, name: "C++" },
  { icon: Git, name: "Git" },
  { icon: AWS, name: "AWS" },
  { icon: Java, name: "Java" },
  { icon: null, name: "Rust", jsx: <FaRust fontSize={"24px"} /> },
  { icon: Swift, name: "Swift" },
  { icon: Redux, name: "Redux" },
  { icon: Redis, name: "Redis" },
  { icon: Kafka, name: "Kafka" },
  { icon: Kotlin, name: "Kotlin" },
  { icon: Docker, name: "Docker" },
  { icon: Python, name: "Python" },
  { icon: Flutter, name: "Flutter" },
  { icon: Node, name: "Node.Js" },
  { icon: HaskellIcon, name: "Haskell" },
  { icon: Postman, name: "Postman" },
];

// Long names — marquee (auto-scroll)
const longNameRow = [
  { icon: ReactIcon, name: "React.Js" },
  { icon: null, name: "Solidity", jsx: <SiSolidity fontSize={"24px"} /> },
  { icon: Mongo, name: "Mongo DB" },
  { icon: Firebase, name: "Firebase" },
  { icon: Javascript, name: "Javascript" },
  { icon: Typescript, name: "Typescript" },
  { icon: Kubernates, name: "Kubernetes" },
  { icon: SQL, name: "Postgresql" },
  { icon: MUI, name: "Material UI" },
  { icon: Tailwind, name: "Tailwind CSS" },
   { icon: null, name: "Next.js", jsx: <SiNextdotjs fontSize={"24px"} />, textClass: "tech-nextjs" },
];

function TechItem({ tech }) {
  return (
    <div className="tech-icons tech-marquee-item">
      {tech.jsx ? tech.jsx : (
        <img src={tech.icon} alt={tech.name} className="tech-icon-images" />
      )}
      <div className={`tech-icons-text ${tech.textClass || ""}`}>
        {tech.name}
      </div>
    </div>
  );
}

function MarqueeRow({ items, speed }) {
  return (
    <div className="tech-marquee-wrapper">
      <div
        className="tech-marquee-track"
        style={{ animationDuration: `${speed}s` }}
      >
        {items.map((tech, idx) => (
          <TechItem tech={tech} key={`a-${idx}`} />
        ))}
        {items.map((tech, idx) => (
          <TechItem tech={tech} key={`b-${idx}`} />
        ))}
      </div>
    </div>
  );
}

function Techstack() {
  return (
    <>
      {/* Static grid for short/medium names */}
      <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
        {staticGridList.map((tech, idx) => (
          <Col xs={4} md={2} className="tech-icons" key={idx}>
            {tech.jsx ? tech.jsx : (
              <img src={tech.icon} alt={tech.name} className="tech-icon-images" />
            )}
            <div className={`tech-icons-text ${tech.textClass || ""}`}>
              {tech.name}
            </div>
          </Col>
        ))}
      </Row>

      {/* Marquee only for long names */}
      <div style={{ paddingBottom: "30px" }}>
        <MarqueeRow items={longNameRow} speed={38} />
      </div>
    </>
  );
}

export default Techstack;