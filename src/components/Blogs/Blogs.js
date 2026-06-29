import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "./BlogCards";
import Particle from "../Particle";

import blog from "../../Assets/Projects/blog.png";
import { useLanguage } from "../../context/LanguageContext";

function Blogs() {
  const { t, language } = useLanguage();
  return (
    <Container fluid className="blog-section">
      <Particle />
      <Container>
        {/* Header Section */}
        <h1 className="blog-heading">
          <span style={{ fontFamily: "monospace", color: "#6200ea" }}>{"//"}</span> {t("blogTitle")}
        </h1>
        <p className="blog-subheading">
          {t("blogSubtitle")}
        </p>

        {/* Blog Cards Grid */}
        <Row className="blog-row" style={{ justifyContent: "center" }}>
          
          {/* Blog 1: Flutter Architecture */}
          <Col md={4} className="blog-card">
            <div className="blog-card-wrapper">
              <BlogCard
                imgPath={blog}
                title="Mastering State Management: Why I Choose Riverpod over BLoC"
                description="An in-depth comparison of Riverpod and BLoC patterns in large-scale Flutter applications, focusing on reactivity, testability, and code structure."
                ghLink="https://github.com/THONBUNLENG"
              />
              <div className="blog-meta">
                <span>June 2026 • 5 min read</span>
                <div className="blog-tags">
                  <span className="blog-tag">#Flutter</span>
                  <span className="blog-tag">#Architecture</span>
                </div>
              </div>
            </div>
          </Col>

          {/* Blog 2: UI/UX Glassmorphism */}
          <Col md={4} className="blog-card">
            <div className="blog-card-wrapper">
              <BlogCard
                imgPath={blog}
                title="Building Premium Glassmorphic Custom UI in Flutter"
                description="How to implement complex, high-end visual designs like premium dashboards using BackdropFilter and CustomPainter without external packages."
                ghLink="https://github.com/THONBUNLENG"
              />
              <div className="blog-meta">
                <span>May 2026 • 4 min read</span>
                <div className="blog-tags">
                  <span className="blog-tag">#UI/UX</span>
                  <span className="blog-tag">#Design</span>
                </div>
              </div>
            </div>
          </Col>

          {/* Blog 3: Optimization */}
          <Col md={4} className="blog-card">
            <div className="blog-card-wrapper">
              <BlogCard
                imgPath={blog}
                title="How I Optimized Mobile App Size by 40%"
                description="A practical guide to resource shrinking, ProGuard rules, image optimization, and dynamic delivery to achieve lightweight installation files."
                ghLink="https://github.com/THONBUNLENG"
              />
              <div className="blog-meta">
                <span>April 2026 • 6 min read</span>
                <div className="blog-tags">
                  <span className="blog-tag">#Optimization</span>
                  <span className="blog-tag">#Android</span>
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