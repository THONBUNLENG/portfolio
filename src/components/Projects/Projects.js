import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/elements.png";
import chatify from "../../Assets/Projects/dark_mode.png";
import ecommerce_app from "../../Assets/Projects/pink_house.png";
import biu from "../../Assets/Projects/BIU.png";
import school from "../../Assets/Projects/school.png";
import loan from "../../Assets/Projects/pos_loan.png";
import pos_coffee from "../../Assets/Projects/coffee_pos.png"
import ecommerce_web from "../../Assets/Projects/e-commerce_web.png";
import admin from "../../Assets/Projects/admin.png";
import club from "../../Assets/Projects/pontoon.png";
import mjq from "../../Assets/Projects/mjq.png";
import pis from "../../Assets/Projects/pis.png";
import { useLanguage } from "../../context/LanguageContext";

function Projects() {
  const { t, language } = useLanguage();
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {t("projectsTitlePrefix")} <strong className="purple">{t("projectsTitleHighlight")}</strong> {t("projectsTitleSuffix")}
        </h1>
        <p className="project-subheading">
          {t("projectsSubtitle")}
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce_app}
              isBlog={false}
              title="Pink House E-commerce App"
              description="A-high-performance,scalable,and visually stunning Flutter mobile e-commerce application designed for online grocery mart businesses.Built with a robust Clean Architecture approach and enterprise-grade state management."
              ghLink="https://github.com/THONBUNLENG/pink_house-Ecommerce-App.git"
              demoLink="https://play.google.com/store/apps/details?id=com.wintech.pinkhouse"
            />
          </Col>
           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={club}
              isBlog={false}
              title="Pontoon Club App"
              description=" A modern Flutter-based mobile application designed for the Pontoon Club, providing members with a seamless experience to access club information, events, and services through an intuitive interface."
              ghLink="https://github.com/THONBUNLENG/pontoon-club_app.git"
              demoLink="https://play.google.com/store/apps/details?id=com.eliteclub&hl=en"
            />
          </Col>​
            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mjq}
              isBlog={false}
              title="MJQ AIS and AII school App"
              description=" A Flutter-based mobile application designed for MJQ AIS and AII School, providing students, parents, and teachers with a centralized platform to access academic information, manage school activities, and enhance communication within the school community."
              ghLink="https://github.com/THONBUNLENG/MJQ-AII-and-AIS-school-App.git"
              demoLink="https://play.google.com/store/apps/details?id=kh.edu.mjqeducation.sms&hl=en"
            />
          </Col>
  <Col md={4} className="project-card">
            <ProjectCard
              imgPath={biu}
              isBlog={false}
              title="Beltei University App"
              description="The BIU University Mobile App is designed to improve communication and accessibility within the university community. The application centralizes important university services and information, allowing users to stay informed and connected anytime, anywhere."
              ghLink="https://github.com/THONBUNLENG/-BIU_university.git"
              demoLink="https://play.google.com/store/apps/details?id=com.rnbis&hl=en"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pis}
              isBlog={false}
              title="PIS School App"
              description="A Flutter-based mobile application designed for PIS School, providing students, parents, and teachers with a centralized platform to access academic information, manage school activities, and enhance communication within the school community."
              ghLink="https://github.com/THONBUNLENG/pis_school.git"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={school}
              isBlog={false}
              title="School App"
              description=" A Flutter-based mobile application designed for Beltei International School, providing students, parents, and teachers with a centralized platform to access academic information, manage school activities, and enhance communication within the school community."
              ghLink="https://github.com/THONBUNLENG/-school_management.git"
              demoLink=""              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={loan}
              isBlog={false}
              title="System Loan "
              description="A modern desktop application developed with C# Windows Forms and SQL Server that combines educational loan management, user statistics, and leaderboard tracking into one platform."
              ghLink="https://github.com/THONBUNLENG/loan_and_game.git"
              // demoLink="" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pos_coffee}
              isBlog={false}
              title="System Coffee shop"
              description="A modern desktop application developed with C# Windows Forms and SQL Server that combines coffee shop management, user statistics, and leaderboard tracking into one platform."
              ghLink="https://github.com/THONBUNLENG/coffee-shop-system.git"
              // demoLink=""       
            />
          </Col>
             <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce_web}
              isBlog={false}
              title="E-Commerce Web"
              description="A modern web application built with Laravel and Node.js that provides a seamless online shopping experience. It features a user-friendly interface, secure payment processing, and efficient product management for both customers and administrators."
              ghLink="https://github.com/THONBUNLENG/ecommerce_api.git"
              // demoLink=""       
            />
          </Col>
             <Col md={4} className="project-card">
            <ProjectCard
              imgPath={admin}
              isBlog={false}
              title="Admin Dashboard"
              description="A role-based admin dashboard built with Laravel. It features user authentication, role management, and a responsive interface for managing various aspects of the application."
              ghLink="https://github.com/THONBUNLENG/Admin_dashboard.git"
              // demoLink=""       
            />
          </Col>
             <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Light Dark Theme in App"
              description="A clean and reusable Flutter theme management system that supports both Light Mode and Dark Mode using Flutter's ThemeData.This project demonstrates how to create and organize custom themes for different UI components while maintaining a consistent design throughout your application."
              ghLink="https://github.com/THONBUNLENG/light_dark_theme.git"
              // demoLink=""       
            />
          </Col>
              <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Ai Selenium"
              description=" A Python-based AI-powered Selenium automation project that utilizes machine learning algorithms to enhance web testing and interaction. It leverages AI techniques to intelligently navigate web pages, identify elements, and perform automated actions, improving the efficiency and accuracy of web testing processes."
              ghLink="https://github.com/THONBUNLENG/ai_selenium.git"
              // demoLink=""       
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
