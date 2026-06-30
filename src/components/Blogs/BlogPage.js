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
    return <div>{t("blogNotFound")}</div>;
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