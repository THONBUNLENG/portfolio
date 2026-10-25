import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { useLanguage } from "../../context/LanguageContext";
import PhoneMockup from "./PhoneMockup";

function ProjectCards(props) {
  const { t } = useLanguage();
  const [imageError, setImageError] = useState(false);

  return (
    <Card 
      className="project-card-view h-100 d-flex flex-column text-white overflow-hidden border-0"
      style={{
        background: "rgba(15, 23, 42, 0.75)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: "16px",
        transition: "transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.borderColor = "rgba(167, 139, 250, 0.4)";
        e.currentTarget.style.boxShadow = "0 12px 30px rgba(0, 0, 0, 0.45)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* 1. Image Thumbnail Container - បង្ហាញរូបភាពពេញលេញ (See Full Image) */}
      <div 
        className="w-100 p-3 pb-0 position-relative" 
        style={{ height: "220px", flexShrink: 0 }}
      >
        <div 
          className="w-100 h-100 position-relative overflow-hidden d-flex align-items-center justify-content-center p-2"
          style={{
            borderRadius: "12px",
            backgroundColor: "#030712",
            border: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          {props.themeDemo ? (
            <div className="w-100 h-100 d-flex align-items-center justify-content-center">
              <PhoneMockup />
            </div>
          ) : props.imgPath && !imageError ? (
            <Card.Img
              variant="top"
              src={props.imgPath}
              alt={props.title || "Project preview"}
              className="w-100 h-100 transition-transform duration-300 hover:scale-105"
              style={{
                objectFit: "contain",
                objectPosition: "center",
              }}
              loading="lazy"
              onError={() => setImageError(true)}
            />
          ) : (
            <div
              className="w-100 h-100 d-flex flex-column align-items-center justify-content-center text-center px-3"
              role="img"
              aria-label={`${props.title || "Project"} preview unavailable`}
              style={{
                color: "#c4b5fd",
                background: "radial-gradient(circle at top, rgba(124, 58, 237, 0.22), transparent 65%)",
              }}
            >
              <span aria-hidden="true" style={{ fontSize: "2rem", lineHeight: 1 }}>▧</span>
              <span className="mt-2 small">{props.title || "Project preview"}</span>
            </div>
          )}
        </div>
      </div>

      {/* 2. Card Body */}
      <Card.Body className="d-flex flex-column p-4 flex-grow-1">
        <div>
          {/* Title */}
          <Card.Title 
            className="text-start font-bold mb-2 text-slate-100"
            style={{ fontSize: "1.1rem", lineHeight: "1.4" }}
          >
            {props.title}
          </Card.Title>

          {/* Tech Badges */}
          <div className="d-flex flex-wrap gap-1.5 mb-3" style={{ minHeight: "26px" }}>
            {props.technologies && props.technologies.length > 0 ? (
              props.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="badge px-2 py-1 text-purple-300 font-medium"
                  style={{
                    fontSize: "0.68rem",
                    backgroundColor: "rgba(124, 58, 237, 0.15)",
                    border: "1px solid rgba(167, 139, 250, 0.25)",
                    borderRadius: "6px",
                  }}
                >
                  {tech}
                </span>
              ))
            ) : (
              <span
                className="badge px-2 py-1 text-slate-400 font-medium"
                style={{
                  fontSize: "0.68rem",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "6px",
                }}
              >
                App & Web
              </span>
            )}
          </div>

          {/* Description with Uniform Height */}
          <Card.Text 
            className="text-start text-slate-400 text-xs sm:text-sm leading-relaxed mb-4"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              lineHeight: "1.55",
              minHeight: "4rem",
            }}
          >
            {props.description}
          </Card.Text>
        </div>

        {/* 3. Action Buttons - ជាប់បាតស្មើជួរគ្រប់ Card ទាំងអស់ */}
        <div className="d-flex align-items-center gap-2 pt-3 mt-auto border-top border-slate-800">
          {props.ghLink && (
            <Button
              variant="custom"
              href={props.ghLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-fill d-inline-flex align-items-center justify-content-center text-xs font-semibold py-2 rounded-lg"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(255, 255, 255, 0.14)",
                color: "#e2e8f0",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.12)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.06)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.14)";
              }}
            >
              <BsGithub className="me-1.5" style={{ fontSize: "0.85rem" }} />
              {t("githubButton") || "GitHub"}
            </Button>
          )}

          {!props.isBlog && props.demoLink && (
            <Button
              variant="custom"
              href={props.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-fill d-inline-flex align-items-center justify-content-center text-xs font-semibold py-2 rounded-lg text-white"
              style={{
                backgroundColor: "#7c3aed",
                border: "1px solid #8b5cf6",
                transition: "background-color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#6d28d9")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#7c3aed")}
            >
              <CgWebsite className="me-1.5" style={{ fontSize: "0.85rem" }} />
              {t("demoButton") || "Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
