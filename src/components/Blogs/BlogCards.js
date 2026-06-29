import React from "react";
import { Card, Button } from "react-bootstrap";
import { useLanguage } from "../../context/LanguageContext";

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
        
        {props.ghLink && (
          <a
            href={props.ghLink}
            target="_blank"
            rel="noreferrer"
            className="blog-link"
          >
            <Button className="btn-view-blog">
              {t("readArticle")} &rarr;
            </Button>
          </a>
        )}
      </Card.Body>
    </Card>
  );
}

export default BlogCards;