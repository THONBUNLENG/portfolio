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
    <Card 
      className="project-card-view h-100 d-flex flex-column border-0 text-white overflow-hidden transition-all duration-300"
      style={{
        background: "rgba(15, 23, 42, 0.65)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: "18px",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.35)",
      }}
    >
      {/* Media / Thumbnail Container */}
      {props.themeDemo ? (
        <div className="project-card-media p-3 d-flex align-items-center justify-content-center bg-black/20">
          <PhoneMockup />
        </div>
      ) : (
        <div 
          className="position-relative overflow-hidden w-100 bg-slate-950/60"
          style={{ height: "200px" }}
        >
          <Card.Img
            variant="top"
            src={props.imgPath}
            alt={props.title || "Project preview"}
            className="w-100 h-100 transition-transform duration-500 hover:scale-105"
            style={{
              objectFit: "cover",
              objectPosition: "top center",
            }}
            loading="lazy"
          />
          <div 
            className="position-absolute bottom-0 start-0 w-100 h-50 pointer-events-none"
            style={{
              background: "linear-gradient(to top, rgba(15, 23, 42, 0.95), transparent)",
            }}
          />
        </div>
      )}

      {/* Card Body */}
      <Card.Body className="d-flex flex-column justify-content-between p-4 flex-grow-1">
        <div>
          <Card.Title 
            className="text-center font-bold mb-2 text-slate-100"
            style={{ fontSize: "1.15rem", letterSpacing: "0.01em" }}
          >
            {props.title}
          </Card.Title>

          {/* Tech Stack Tags */}
          {props.technologies && props.technologies.length > 0 && (
            <div className="d-flex flex-wrap justify-content-center gap-1.5 mb-3">
              {props.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="badge px-2.5 py-1 text-slate-300 font-medium"
                  style={{
                    fontSize: "0.7rem",
                    backgroundColor: "rgba(124, 58, 237, 0.12)",
                    border: "1px solid rgba(167, 139, 250, 0.25)",
                    borderRadius: "6px",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Description with Line Clamping for neat uniform grid heights */}
          <Card.Text 
            className="text-center text-slate-400 text-xs sm:text-sm leading-relaxed mb-4"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              minHeight: "4rem",
            }}
          >
            {props.description}
          </Card.Text>
        </div>

        {/* Action Buttons */}
        <div className="d-flex justify-content-center align-items-center gap-2.5 pt-2 mt-auto">
          {props.ghLink && (
            <Button
              variant="custom"
              href={props.ghLink}
              target="_blank"
              rel="noopener noreferrer"
              className="d-inline-flex align-items-center justify-content-center text-xs font-semibold px-3.5 py-2 rounded-lg transition-all duration-200"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                color: "#e2e8f0",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
              }}
            >
              <BsGithub className="me-1.5 text-sm" />
              {t("githubButton") || "GitHub"}
            </Button>
          )}

          {!props.isBlog && props.demoLink && (
            <Button
              variant="custom"
              href={props.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="d-inline-flex align-items-center justify-content-center text-xs font-semibold px-3.5 py-2 rounded-lg transition-all duration-200 text-white"
              style={{
                backgroundColor: "#7c3aed",
                border: "1px solid #8b5cf6",
                boxShadow: "0 0 15px rgba(124, 58, 237, 0.35)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#6d28d9";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#7c3aed";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <CgWebsite className="me-1.5 text-sm" />
              {t("demoButton") || "Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;