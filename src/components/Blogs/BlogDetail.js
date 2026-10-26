import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

function BlogDetail({ blog }) {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/home");
    setTimeout(() => {
      document.getElementById("blogs")?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  if (!blog) return null;

  return (
    <Container fluid className="blog-section position-relative py-5 min-h-screen text-white">
      <Container className="position-relative" style={{ zIndex: 2 }}>
        {/* Back Button */}
        <div className="mb-4">
          <Button
            className="btn-back-blog inline-flex items-center gap-2 border border-white/20 bg-slate-900/80 hover:bg-slate-800 text-slate-200 px-4 py-2 rounded-xl text-sm transition-all"
            onClick={handleBack}
          >
            &larr; {t("backToBlogs") || "Back to Blogs"}
          </Button>
        </div>

        <Row className="justify-content-center">
          <Col lg={9} md={11}>
            <article className="glass-card blog-article p-4 p-md-5 rounded-3xl border border-white/10 bg-slate-900/70 backdrop-blur-md shadow-2xl">
              {/* Blog Title */}
              <h1 className="blog-article-title text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-3">
                {blog.title}
              </h1>

              {/* Meta Info */}
              <div className="blog-article-meta text-sm text-slate-400 mb-3 d-flex align-items-center gap-2">
                <span>{blog.date}</span>
                <span>•</span>
                <span>{blog.readTime}</span>
              </div>

              {/* Tags */}
              {blog.tags && blog.tags.length > 0 && (
                <div className="blog-article-tags d-flex flex-wrap gap-2 mb-4">
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="badge px-2.5 py-1 text-purple-300 font-medium"
                      style={{
                        fontSize: "0.78rem",
                        backgroundColor: "rgba(124, 58, 237, 0.15)",
                        border: "1px solid rgba(167, 139, 250, 0.3)",
                        borderRadius: "6px",
                      }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Image Gallery (បង្ហាញរូបពេញ 100% ស្មើគ្នា) */}
              {blog.images && blog.images.length > 0 && (
                <div className="row g-3 mb-5">
                  {blog.images.map((image, index) => (
                    <div
                      key={index}
                      className={blog.images.length === 1 ? "col-12" : "col-12 col-md-6"}
                    >
                      <div 
                        className="rounded-2xl overflow-hidden bg-[#030712] border border-white/10 p-2 d-flex align-items-center justify-content-center shadow-inner"
                        style={{ height: "240px" }}
                      >
                        <img
                          src={image}
                          alt={`${blog.title} - View ${index + 1}`}
                          className="w-100 h-100 rounded-xl object-contain transition-transform duration-300 hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Blog HTML Content */}
              <div
                className="blog-article-text text-slate-200 leading-relaxed"
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