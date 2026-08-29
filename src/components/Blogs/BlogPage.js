import React from "react";
import { useParams } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import BlogDetail from "./BlogDetail";
import blogPosts from "./blogData";

function BlogPage() {
  const { blogId } = useParams();
  const { language, t } = useLanguage();
  
  const blog = blogPosts[blogId];
  
  if (!blog) {
    return (
      <div style={{ textAlign: "center", padding: "60px 20px", color: "#b0b8c7" }}>
        <h2 style={{ color: "#ffffff", marginBottom: "10px" }}>{t("blogNotFound")}</h2>
        <p style={{ color: "#888" }}>The blog post you're looking for doesn't exist.</p>
      </div>
    );
  }
  
  const displayBlog = {
    title: language === "nan" && blog.titleZh ? blog.titleZh : blog.title,
    date: language === "nan" && blog.dateZh ? blog.dateZh : blog.date,
    readTime: language === "nan" && blog.readTimeZh ? blog.readTimeZh : blog.readTime,
    tags: language === "nan" && blog.tagsZh ? blog.tagsZh : blog.tags,
    images: blog.images,
    content: language === "nan" && blog.contentZh ? blog.contentZh : blog.content,
  };
  
  return <BlogDetail blog={displayBlog} />;
}

export default BlogPage;