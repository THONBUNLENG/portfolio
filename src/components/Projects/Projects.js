import React, { useState, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import { useLanguage } from "../../context/LanguageContext";
import { projects } from "./projectData";

function Projects() {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);

  // ប្រភេទ Filter Categories
  const categories = [
    { key: "all", label: "All Projects" },
    { key: "mobile", label: "Mobile Apps (Flutter)" },
    { key: "web", label: "Full-Stack Web" },
    { key: "other", label: "Desktop & Tools" },
  ];

  const getProjectTitle = (projectId) => {
    const project = projects[projectId];
    if (language === "nan" && project?.titleZh) return project.titleZh;
    return project?.title;
  };

  const getProjectDescription = (projectId) => {
    const project = projects[projectId];
    if (language === "nan" && project?.descriptionZh) return project.descriptionZh;
    return project?.description;
  };

  // តម្រៀប និង Filter គម្រោងតាម Category
  const filteredProjects = useMemo(() => {
    const entries = Object.entries(projects);
    if (selectedCategory === "all") return entries;

    return entries.filter(([_, item]) => {
      // ផ្ទៀងផ្ទាត់ជាមួយ category ឬ tags ក្នុង projectData
      if (item.category) return item.category.toLowerCase() === selectedCategory;
      if (selectedCategory === "mobile") {
        return (
          item.title?.toLowerCase().includes("app") ||
          item.technologies?.some((tech) => ["Flutter", "Dart", "Swift", "Kotlin"].includes(tech))
        );
      }
      if (selectedCategory === "web") {
        return (
          item.title?.toLowerCase().includes("web") ||
          item.technologies?.some((tech) => ["React", "Laravel", "Node.js"].includes(tech))
        );
      }
      return true;
    });
  }, [selectedCategory]);

  // បង្ហាញត្រឹម 6 projects ដំបូង ប្រសិនបើមិនទាន់ចុច "View More"
  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <Container fluid className="project-section py-5" id="projects">
      <Container>
        {/* Title */}
        <h1 className="project-heading text-center">
          {t("projectsTitlePrefix")}{" "}
          <strong className="purple">{t("projectsTitleHighlight")}</strong>{" "}
          {t("projectsTitleSuffix")}
        </h1>
        <p className="project-subheading text-center text-slate-400 mb-4">
          {t("projectsSubtitle")}
        </p>

        {/* Filter Tabs */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => {
                setSelectedCategory(cat.key);
                setShowAll(false); // Reset ការបង្ហាញពេលដូរ Tab
              }}
              className="px-4 py-2 rounded-pill text-xs font-semibold uppercase tracking-wider transition-all duration-200"
              style={{
                backgroundColor:
                  selectedCategory === cat.key ? "#7c3aed" : "rgba(255, 255, 255, 0.05)",
                border:
                  selectedCategory === cat.key
                    ? "1px solid #a78bfa"
                    : "1px solid rgba(255, 255, 255, 0.12)",
                color: selectedCategory === cat.key ? "#ffffff" : "#94a3b8",
                boxShadow:
                  selectedCategory === cat.key ? "0 0 15px rgba(124, 58, 237, 0.35)" : "none",
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <Row className="g-4 justify-content-center">
          {visibleProjects.map(([projectId, project]) => (
            <Col md={6} lg={4} className="d-flex" key={projectId}>
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={false}
                title={getProjectTitle(projectId)}
                description={getProjectDescription(projectId)}
                technologies={project.technologies || []}
                ghLink={project.ghLink}
                demoLink={project.demoLink || ""}
                themeDemo={project.themeDemo}
              />
            </Col>
          ))}
        </Row>

        {/* View More / Show Less Button */}
        {filteredProjects.length > 6 && (
          <div className="text-center pt-5">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="btn rounded-pill px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all duration-200"
              style={{
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(8px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.16)";
                e.currentTarget.style.borderColor = "#a78bfa";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
              }}
            >
              {showAll ? "Show Less ↑" : `View More Projects (${filteredProjects.length - 6} more) ↓`}
            </button>
          </div>
        )}
      </Container>
    </Container>
  );
}

export default Projects;