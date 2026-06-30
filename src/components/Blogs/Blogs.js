import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "./BlogCards";
import Particle from "../Particle";

import blog from "../../Assets/Projects/blog.png";
import { useLanguage } from "../../context/LanguageContext";
import blogPosts from "./blogData";
import bloc from "../../Assets/bloc.png";
import ui2 from "../../Assets/ui3.png";
import app from "../../Assets/app.png";
import bloc_cubit2 from "../../Assets/bloc_cubit2.png";
function Blogs() {
  const { language, t } = useLanguage();
  
  return (
    <Container fluid className="blog-section">
      <Particle />
      <Container>
        {/* Header Section */}
        <h1 className="blog-heading">
          <span style={{ fontFamily: "monospace", color: "#6200ea" }}></span> {t("blogTitle")}
        </h1>
        <p className="blog-subheading">
          {t("blogSubtitle")}
        </p>

        {/* Blog Cards Grid */}
        <Row className="blog-row" style={{ justifyContent: "center" }}>
          
          {/* Blog 1: Flutter Architecture */}
          <Col md={4} className="blog-card">
            <div className="glass-card">
              <BlogCard
                imgPath={bloc}
                title={language === "km" && blogPosts.blog1.titleKm ? blogPosts.blog1.titleKm : blogPosts.blog1.title}
                description={language === "km" && blogPosts.blog1.descriptionKm ? blogPosts.blog1.descriptionKm : blogPosts.blog1.description}
                blogId="blog1"
              />
              <div className="blog-meta">
                <span>{language === "km" && blogPosts.blog1.dateKm ? blogPosts.blog1.dateKm : blogPosts.blog1.date} • {language === "km" && blogPosts.blog1.readTimeKm ? blogPosts.blog1.readTimeKm : blogPosts.blog1.readTime}</span>
                <div className="blog-tags">
                  {(language === "km" && blogPosts.blog1.tagsKm ? blogPosts.blog1.tagsKm : blogPosts.blog1.tags).map((tag, index) => (
                    <span key={index} className="blog-tag">#{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </Col>

          {/* Blog 2: UI/UX Glassmorphism */}
          <Col md={4} className="blog-card">
            <div className="glass-card">
              <BlogCard
                imgPath={ui2}
                title={language === "km" && blogPosts.blog2.titleKm ? blogPosts.blog2.titleKm : blogPosts.blog2.title}
                description={language === "km" && blogPosts.blog2.descriptionKm ? blogPosts.blog2.descriptionKm : blogPosts.blog2.description}
                blogId="blog2"
              />
              <div className="blog-meta">
                <span>{language === "km" && blogPosts.blog2.dateKm ? blogPosts.blog2.dateKm : blogPosts.blog2.date} • {language === "km" && blogPosts.blog2.readTimeKm ? blogPosts.blog2.readTimeKm : blogPosts.blog2.readTime}</span>
                <div className="blog-tags">
                  {(language === "km" && blogPosts.blog2.tagsKm ? blogPosts.blog2.tagsKm : blogPosts.blog2.tags).map((tag, index) => (
                    <span key={index} className="blog-tag">#{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </Col>

          {/* Blog 3: Optimization */}
          <Col md={4} className="blog-card">
            <div className="glass-card">
              <BlogCard
                imgPath={app}
                title={language === "km" && blogPosts.blog3.titleKm ? blogPosts.blog3.titleKm : blogPosts.blog3.title}
                description={language === "km" && blogPosts.blog3.descriptionKm ? blogPosts.blog3.descriptionKm : blogPosts.blog3.description}
                blogId="blog3"
              />
              <div className="blog-meta">
                <span>{language === "km" && blogPosts.blog3.dateKm ? blogPosts.blog3.dateKm : blogPosts.blog3.date} • {language === "km" && blogPosts.blog3.readTimeKm ? blogPosts.blog3.readTimeKm : blogPosts.blog3.readTime}</span>
                <div className="blog-tags">
                  {(language === "km" && blogPosts.blog3.tagsKm ? blogPosts.blog3.tagsKm : blogPosts.blog3.tags).map((tag, index) => (
                    <span key={index} className="blog-tag">#{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </Col>

          {/* Blog 4: BLoC Pattern */}
          <Col md={4} className="blog-card">
            <div className="glass-card">
              <BlogCard
                imgPath={bloc_cubit2}
                title={language === "km" && blogPosts.blog4.titleKm ? blogPosts.blog4.titleKm : blogPosts.blog4.title}
                description={language === "km" && blogPosts.blog4.descriptionKm ? blogPosts.blog4.descriptionKm : blogPosts.blog4.description}
                blogId="blog4"
              />
              <div className="blog-meta">
                <span>{language === "km" && blogPosts.blog4.dateKm ? blogPosts.blog4.dateKm : blogPosts.blog4.date} • {language === "km" && blogPosts.blog4.readTimeKm ? blogPosts.blog4.readTimeKm : blogPosts.blog4.readTime}</span>
                <div className="blog-tags">
                  {(language === "km" && blogPosts.blog4.tagsKm ? blogPosts.blog4.tagsKm : blogPosts.blog4.tags).map((tag, index) => (
                    <span key={index} className="blog-tag">#{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Blogs;