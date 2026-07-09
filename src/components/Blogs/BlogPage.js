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
    title: language === "km" && blog.titleKm ? blog.titleKm : blog.title,
    date: language === "km" && blog.dateKm ? blog.dateKm : blog.date,
    readTime: language === "km" && blog.readTimeKm ? blog.readTimeKm : blog.readTime,
    tags: language === "km" && blog.tagsKm ? blog.tagsKm : blog.tags,
    images: blog.images,
    content: language === "km" && blog.contentKm ? blog.contentKm : blog.content,
  };
  
  return <BlogDetail blog={displayBlog} />;
}

export default BlogPage;