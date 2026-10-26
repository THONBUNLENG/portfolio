import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import { useLanguage } from "../../context/LanguageContext";
import BlogDetail from "./BlogDetail";

// Import ការពារទាំង Default Export និង Named Export
import blogPostsData, { blogPosts as namedBlogPosts } from "./blogData";

const posts = blogPostsData || namedBlogPosts || {};

function BlogPage() {
  const { blogId } = useParams();
  const { language, t } = useLanguage();
  const navigate = useNavigate();

  // ប្រើ safe check
  const blog = posts?.[blogId];

  // ករណីរកមិនឃើញ Blog (Not Found UI ស្អាតស៊ីគ្នាជាមួយ Theme)
  if (!blog) {
    return (
      <Container className="min-h-screen d-flex flex-column align-items-center justify-content-center text-center py-5">
        <div 
          className="p-5 rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-md shadow-2xl max-w-md mx-auto"
        >
          <div className="text-5xl mb-3">📄</div>
          <h2 className="text-white font-bold mb-2">
            {t("blogNotFound") || "Blog Post Not Found"}
          </h2>
          <p className="text-slate-400 text-sm mb-4">
            {t("blogNotFoundDesc") || "The article you are looking for might have been moved or removed."}
          </p>
          <Button
            onClick={() => navigate("/home")}
            className="px-4 py-2 rounded-xl text-sm font-semibold bg-purple-600 hover:bg-purple-700 border-0 transition-all"
          >
            &larr; {t("backToHome") || "Back to Home"}
          </Button>
        </div>
      </Container>
    );
  }

  // កំណត់ភាសា (ខ្មែរ, ចិន, ឬ អង់គ្លេស)
  const isKhmer = language === "km";
  const isChinese = language === "zh" || language === "nan";

  const displayBlog = {
    title: isKhmer && blog.titleKm ? blog.titleKm : isChinese && blog.titleZh ? blog.titleZh : blog.title,
    date: isKhmer && blog.dateKm ? blog.dateKm : isChinese && blog.dateZh ? blog.dateZh : blog.date,
    readTime: isKhmer && blog.readTimeKm ? blog.readTimeKm : isChinese && blog.readTimeZh ? blog.readTimeZh : blog.readTime,
    tags: isKhmer && blog.tagsKm ? blog.tagsKm : isChinese && blog.tagsZh ? blog.tagsZh : blog.tags,
    images: blog.images || [],
    content: isKhmer && blog.contentKm ? blog.contentKm : isChinese && blog.contentZh ? blog.contentZh : blog.content,
  };

  return <BlogDetail blog={displayBlog} />;
}

export default BlogPage;