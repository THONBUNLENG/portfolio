import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import { useLanguage } from "../../context/LanguageContext";
import { projects } from "./projectData";

function Projects() {
  const { t, language } = useLanguage();

  const getProjectTitle = (projectId) => {
    const project = projects[projectId];
    return language === "km" && project?.titleKm ? project.titleKm : project?.title;
  };

  const getProjectDescription = (projectId) => {
    const project = projects[projectId];
    return language === "km" && project?.descriptionKm ? project.descriptionKm : project?.description;
  };

  return (
    <Container fluid className="project-section" id="project">
      <Container>
        <h1 className="project-heading">
          {t("projectsTitlePrefix")} <strong className="purple">{t("projectsTitleHighlight")}</strong> {t("projectsTitleSuffix")}
        </h1>
        <p className="project-subheading">
          {t("projectsSubtitle")}
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {Object.entries(projects).map(([projectId, project]) => (
            <Col md={4} className="project-card" key={projectId}>
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={false}
                title={getProjectTitle(projectId)}
                description={getProjectDescription(projectId)}
                ghLink={project.ghLink}
                demoLink={project.demoLink || ""}
                themeDemo={project.themeDemo}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;