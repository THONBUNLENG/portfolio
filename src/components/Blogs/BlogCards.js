import React from "react";
import { Card, Button } from "react-bootstrap";
import { useLanguage } from "../../context/LanguageContext";
import { Link } from "react-router-dom";

function BlogCards(props) {
  const { t } = useLanguage();
  return (
    <Card className="blog-card-view">
      <Card.Img variant="top" src={props.imgPath} className="blog-img" />
      <Card.Body className="blog-card-body">
        <Card.Title className="blog-card-title">
          <strong>{props.title}</strong>
        </Card.Title>
        <Card.Text className="blog-card-text">
          {props.description}
        </Card.Text>

        {/* Meta info: date + read time */}
        {props.meta && (
          <div className="blog-meta">
            <span>{props.meta}</span>
            {props.tags && props.tags.length > 0 && (
              <div className="blog-tags">
                {props.tags.map((tag, index) => (
                  <span key={index} className="blog-tag">#{tag}</span>
                ))}
              </div>
            )}
          </div>
        )}
      </Card.Body>

      {/* Button always last */}
      {props.blogId ? (
        <Link to={`/blogs/${props.blogId}`} className="blog-link">
          <Button className="btn-view-blog">
            {t("readArticle")} &rarr;
          </Button>
        </Link>
      ) : props.ghLink && (
        <a href={props.ghLink} target="_blank" rel="noreferrer" className="blog-link">
          <Button className="btn-view-blog">
            {t("readArticle")} &rarr;
          </Button>
        </a>
      )}
    </Card>
  );
}

export default BlogCards;