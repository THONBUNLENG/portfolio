import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import Particle from "../Particle";

function BlogDetail({ blog }) {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
    setTimeout(() => {
      document.getElementById("blogs")?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <Container fluid className="blog-section">
      <Particle />
      <Container>
        <Button 
          className="btn-back-blog"
          onClick={handleBack}
        >
          ← {t("backToBlogs") || "Back to Blogs"}
        </Button>
        
        <Row className="justify-content-center">
          <Col lg={8} md={10}>
            <article className="glass-card blog-article">
              <h1 className="blog-article-title">{blog.title}</h1>
              
              <div className="blog-article-meta">
                <span>{blog.date}</span>
                <span>• {blog.readTime}</span>
              </div>
              
              <div className="blog-article-tags">
                {blog.tags.map((tag, index) => (
                  <span key={index} className="blog-tag">#{tag}</span>
                ))}
              </div>
              
              <div className="blog-article-content">
                {blog.images && blog.images.length > 0 && (
                  <div className="blog-images-gallery">
                    {blog.images.map((image, index) => (
                      <img 
                        key={index} 
                        src={image} 
                        alt={`${blog.title} - ${index + 1}`} 
                        className="blog-article-image"
                      />
                    ))}
                  </div>
                )}
                
                <div 
                  className="blog-article-text"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />
              </div>
            </article>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default BlogDetail;