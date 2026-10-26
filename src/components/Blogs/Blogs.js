import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "./BlogCards";
import { useLanguage } from "../../context/LanguageContext";

// ព្យាយាម import ទាំង default និង named export ដើម្បីការពារកុំឱ្យ undefined
import blogPostsData, { blogPosts as namedBlogPosts } from "./blogData";

const posts = blogPostsData || namedBlogPosts || {};

function Blogs() {
  const { language, t } = useLanguage();

  const blogKeys = ["blog1", "blog2", "blog3", "blog4"];

  return (
    <Container fluid className="blog-section py-5" id="blogs">
      <Container>
        <div className="text-center mb-5">
          <h1 className="blog-heading font-black text-3xl sm:text-4xl text-white mb-2">
            {t("blogTitle") || "Latest Insights & Articles"}
          </h1>
          <p className="blog-subheading text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            {t("blogSubtitle") || "Deep dives into Flutter architecture, performance optimization, and UI engineering."}
          </p>
        </div>

        <Row className="g-4 justify-content-center">
          {blogKeys.map((key) => {
            // ប្រើ optional chaining (?.) ដើម្បីកុំឱ្យបុក error ប្រសិនបើ posts[key] រកមិនឃើញ
            const post = posts?.[key];
            if (!post) return null;

            const isKhmer = language === "km";
            const isChinese = language === "zh" || language === "nan";

            const title = isKhmer && post.titleKm ? post.titleKm : isChinese && post.titleZh ? post.titleZh : post.title;
            const description = isKhmer && post.descriptionKm ? post.descriptionKm : isChinese && post.descriptionZh ? post.descriptionZh : post.description;
            const date = isKhmer && post.dateKm ? post.dateKm : isChinese && post.dateZh ? post.dateZh : post.date;
            const readTime = isKhmer && post.readTimeKm ? post.readTimeKm : isChinese && post.readTimeZh ? post.readTimeZh : post.readTime;
            const tags = isKhmer && post.tagsKm ? post.tagsKm : isChinese && post.tagsZh ? post.tagsZh : post.tags;

            const thumbnail = post.images && post.images.length > 0 
              ? post.images[0] 
              : "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80";

            return (
              <Col lg={4} md={6} className="d-flex" key={key}>
                <div className="glass-card w-100 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-sm overflow-hidden hover:border-purple-500/50 transition-all duration-300">
                  <BlogCard
                    imgPath={thumbnail}
                    title={title}
                    description={description}
                    blogId={key}
                    meta={`${date} • ${readTime}`}
                    tags={tags}
                  />
                </div>
              </Col>
            );
          })}
        </Row>
      </Container> 
    </Container>
  );
}

export default Blogs;