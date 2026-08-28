import React from "react";
import { Card, Button } from "react-bootstrap";
import { useLanguage } from "../../context/LanguageContext";
import { Link } from "react-router-dom";

function BlogCards(props) {
  const { t } = useLanguage();

  const buttonContent = (
    <Button
      className="btn-view-blog w-100 d-inline-flex align-items-center justify-content-center text-sm font-semibold transition-all duration-200"
      style={{
        backgroundColor: "#e74c5e",
        borderColor: "#e74c5e",
        color: "#fff",
        padding: "10px 16px",
        borderRadius: "8px",
      }}
    >
      {t("readArticle") || "Read Article"} &rarr;
    </Button>
  );

  return (
    <Card className="blog-card-view h-100 d-flex flex-column border-0 bg-transparent">
      {/* Image Container with Contain Fit */}
      <div
        className="d-flex align-items-center justify-content-center bg-black/40 overflow-hidden"
        style={{
          height: "200px",
          borderTopLeftRadius: "calc(0.375rem - 1px)",
          borderTopRightRadius: "calc(0.375rem - 1px)",
        }}
      >
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt={props.title}
          className="blog-img"
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

      <Card.Body className="blog-card-body d-flex flex-column justify-content-between flex-grow-1 p-4">
        <div>
          {/* Meta info: Date + Read Time */}
          {props.meta && (
            <div className="blog-meta text-xs text-slate-400 mb-2 font-medium">
              <span>{props.meta}</span>
            </div>
          )}

          <Card.Title className="blog-card-title text-white font-bold text-lg mb-2 line-clamp-2">
            {props.title}
          </Card.Title>

          {/* Tags */}
          {props.tags && props.tags.length > 0 && (
            <div className="blog-tags d-flex flex-wrap gap-1.5 mb-3">
              {props.tags.map((tag, index) => (
                <span
                  key={index}
                  className="blog-tag badge bg-black/50 text-[#e74c5e] border border-[#e74c5e]/30 px-2 py-0.5"
                  style={{ fontSize: "0.72rem", fontWeight: "600", borderRadius: "4px" }}
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          <Card.Text className="blog-card-text text-slate-300 text-sm leading-relaxed mb-4">
            {props.description}
          </Card.Text>
        </div>

        {/* Read Button at Bottom */}
        <div className="mt-auto pt-2">
          {props.blogId ? (
            <Link to={`/blogs/${props.blogId}`} className="blog-link text-decoration-none">
              {buttonContent}
            </Link>
          ) : props.ghLink ? (
            <a
              href={props.ghLink}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-link text-decoration-none"
            >
              {buttonContent}
            </a>
          ) : null}
        </div>
      </Card.Body>
    </Card>
  );
}

export default BlogCards;