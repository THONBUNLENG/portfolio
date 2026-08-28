import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import Particle from "../Particle";

function BlogDetail({ blog }) {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/home");
    setTimeout(() => {
      document.getElementById("blogs")?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <Container fluid className="blog-section position-relative py-5 min-h-screen text-white">
      <Particle />
      <Container className="position-relative" style={{ zIndex: 2 }}>
        <div className="mb-4">
          <Button
            className="btn-back-blog inline-flex items-center gap-2 border border-white/20 bg-black/50 hover:bg-white/10 text-slate-200 px-4 py-2 rounded-xl text-sm transition-all"
            onClick={handleBack}
          >
            &larr; {t("backToBlogs") || "Back to Blogs"}
          </Button>
        </div>

        <Row className="justify-content-center">
          <Col lg={9} md={11}>
            <article className="glass-card blog-article p-4 p-md-5 rounded-3xl border border-white/10 bg-black/60 backdrop-blur-md shadow-2xl">
              <h1 className="blog-article-title text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-3">
                {blog.title}
              </h1>

              <div className="blog-article-meta text-sm text-slate-400 mb-3 flex items-center gap-2">
                <span>{blog.date}</span>
                <span>•</span>
                <span>{blog.readTime}</span>
              </div>

              {blog.tags && blog.tags.length > 0 && (
                <div className="blog-article-tags d-flex flex-wrap gap-2 mb-4">
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="badge bg-black/50 text-[#e74c5e] border border-[#e74c5e]/30 px-2.5 py-1"
                      style={{ fontSize: "0.78rem" }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Gallery with Clean Grid */}
              {blog.images && blog.images.length > 0 && (
                <div className="row g-3 mb-4">
                  {blog.images.map((image, index) => (
                    <div
                      key={index}
                      className={blog.images.length === 1 ? "col-12" : "col-6 col-md-4"}
                    >
                      <div className="rounded-xl overflow-hidden bg-black/40 border border-white/10 p-2 d-flex align-items-center justify-content-center" style={{ minHeight: "160px" }}>
                        <img
                          src={image}
                          alt={`${blog.title} - ${index + 1}`}
                          className="w-100 h-auto rounded-lg object-contain"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Blog HTML Content */}
              <div
                className="blog-article-text text-slate-200 leading-relaxed space-y-4"
                style={{ fontSize: "1.05rem" }}
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </article>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default BlogDetail;