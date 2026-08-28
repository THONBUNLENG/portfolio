import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "./BlogCards";
import { useLanguage } from "../../context/LanguageContext";
import blogPosts from "./blogData";
import bloc from "../../Assets/bloc.png";
import ui2 from "../../Assets/ui3.png";
import app from "../../Assets/app.png";
import bloc_cubit2 from "../../Assets/bloc_cubit2.png";

function Blogs() {
  const { language, t } = useLanguage();

  const blogEntries = [
    { key: "blog1", img: bloc },
    { key: "blog2", img: ui2 },
    { key: "blog3", img: app },
    { key: "blog4", img: bloc_cubit2 },
  ];

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
          {blogEntries.map(({ key, img }) => {
            const post = blogPosts[key];
            if (!post) return null;

            const title =
              language === "km" && post.titleKm
                ? post.titleKm
                : language === "zh" && post.titleZh
                ? post.titleZh
                : post.title;

            const description =
              language === "km" && post.descriptionKm
                ? post.descriptionKm
                : language === "zh" && post.descriptionZh
                ? post.descriptionZh
                : post.description;

            const date =
              language === "km" && post.dateKm
                ? post.dateKm
                : language === "zh" && post.dateZh
                ? post.dateZh
                : post.date;

            const readTime =
              language === "km" && post.readTimeKm
                ? post.readTimeKm
                : language === "zh" && post.readTimeZh
                ? post.readTimeZh
                : post.readTime;

            const tags =
              language === "km" && post.tagsKm
                ? post.tagsKm
                : language === "zh" && post.tagsZh
                ? post.tagsZh
                : post.tags;

            return (
              <Col lg={4} md={6} className="d-flex" key={key}>
                <div className="glass-card w-100 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-sm overflow-hidden hover:border-[#e74c5e]/50 transition-all duration-300">
                  <BlogCard
                    imgPath={img}
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