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
    <Container fluid className="blog-section" id="blogs">
      <Container>
        <h1 className="blog-heading">
          <span style={{ fontFamily: "monospace", color: "#6200ea" }}></span> {t("blogTitle")}
        </h1>
        <p className="blog-subheading">{t("blogSubtitle")}</p>

        <Row className="blog-row" style={{ justifyContent: "center" }}>
          {blogEntries.map(({ key, img }) => {
            const post = blogPosts[key];
            const title = language === "km" && post.titleKm ? post.titleKm : post.title;
            const description = language === "km" && post.descriptionKm ? post.descriptionKm : post.description;
            const date = language === "km" && post.dateKm ? post.dateKm : post.date;
            const readTime = language === "km" && post.readTimeKm ? post.readTimeKm : post.readTime;
            const tags = language === "km" && post.tagsKm ? post.tagsKm : post.tags;

            return (
              <Col md={4} className="blog-card" key={key}>
                <div className="glass-card">
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