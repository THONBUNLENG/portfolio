import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { useLanguage } from "../../context/LanguageContext";
import PhoneMockup from "./PhoneMockup";

function ProjectCards(props) {
  const { t } = useLanguage();

  return (
    <Card className="project-card-view h-100 d-flex flex-column">
      {props.themeDemo ? (
        <div className="project-card-media">
          <PhoneMockup />
        </div>
      ) : (
        <div 
          className="d-flex align-items-center justify-content-center bg-black/40 p-2 overflow-hidden" 
          style={{ height: "220px", borderTopLeftRadius: "calc(0.375rem - 1px)", borderTopRightRadius: "calc(0.375rem - 1px)" }}
        >
          <Card.Img
            variant="top"
            src={props.imgPath}
            alt={props.title || "Project preview"}
            className="project-card-img"
            style={{
              maxHeight: "100%",
              maxWidth: "100%",
              width: "auto",
              height: "auto",
              objectFit: "contain",
            }}
            loading="lazy"
          />
        </div>
      )}

      <Card.Body className="d-flex flex-column justify-content-between flex-grow-1">
        <div>
          <Card.Title className="text-center font-bold mb-2">
            {props.title}
          </Card.Title>

          {/* Tech Stack Tags */}
          {props.technologies && props.technologies.length > 0 && (
            <div className="d-flex flex-wrap justify-content-center gap-1 mb-3">
              {props.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="badge bg-black/60 text-slate-200 border border-white/20 px-2 py-1"
                  style={{ fontSize: "0.72rem", fontWeight: "500", borderRadius: "6px" }}
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          <Card.Text className="text-center text-slate-300 text-sm leading-relaxed mb-4">
            {props.description}
          </Card.Text>
        </div>

        {/* Action Buttons */}
        <div className="d-flex justify-content-center align-items-center gap-2 pt-2 mt-auto">
          {props.ghLink && (
            <Button
              variant="custom"
              href={props.ghLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex align-items-center justify-content-center text-sm font-semibold transition-all duration-200"
              style={{
                backgroundColor: "#e74c5e",
                borderColor: "#e74c5e",
                color: "#fff",
                padding: "8px 16px",
                borderRadius: "8px",
              }}
            >
              <BsGithub className="me-1.5" />
              {t("githubButton") || "GitHub"}
            </Button>
          )}

          {!props.isBlog && props.demoLink && (
            <Button
              variant="custom"
              href={props.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex align-items-center justify-content-center text-sm font-semibold transition-all duration-200"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                borderColor: "rgba(255, 255, 255, 0.25)",
                color: "#fff",
                padding: "8px 16px",
                borderRadius: "8px",
              }}
            >
              <CgWebsite className="me-1.5" />
              {t("demoButton") || "Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;