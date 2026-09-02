import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/me7.jpg";
import About from "../About/About";
import Home2 from "./Home2";
import Projects from "../Projects/Projects";
import Resume from "../Resume/ResumeNew";
import Blogs from "../Blogs/Blogs";
import Contact from "../Contact/Contact";
import { useLanguage } from "../../context/LanguageContext";
import {
  AiFillGithub,
  AiFillPhone,
  AiOutlineMail,
  AiOutlineFacebook,
  AiOutlineArrowDown,
} from "react-icons/ai";
import { FaTelegram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { SiTiktok, SiGitlab } from "react-icons/si";

import nodeIcon from "../../Assets/TechIcons/Node.svg";
import flutterIcon from "../../Assets/TechIcons/flutter.svg";
import swiftIcon from "../../Assets/TechIcons/swift-svgrepo.svg";
import kotlinIcon from "../../Assets/TechIcons/kotlin-svgrepo.svg";
import javaIcon from "../../Assets/TechIcons/Java.svg";
import postmanIcon from "../../Assets/TechIcons/Postman.svg";
import androidstudio from "../../Assets/TechIcons/android-studio.png";
import figma from "../../Assets/TechIcons/figma.png";
import laravel from "../../Assets/TechIcons/laravel.png";
import apple from "../../Assets/TechIcons/apple.png";

function Home() {
  const { t } = useLanguage();
  const telegramUrl = "https://t.me/bunleng_dev";
  const telegramQrUrl =
    "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https%3A%2F%2Ft.me%2Fbunleng_dev";

  const techBadges = [
    { id: "flutter", label: "Flutter", icon: flutterIcon, color: "#02569b" },
    { id: "swift", label: "Swift", icon: swiftIcon, color: "#ffac45" },
    { id: "kotlin", label: "Kotlin", icon: kotlinIcon, color: "#7f52ff" },
    { id: "java", label: "Java", icon: javaIcon, color: "#f89820" },
    { id: "postman", label: "Postman", icon: postmanIcon, color: "#ff6c37" },
    { id: "figma", label: "Figma", icon: figma, color: "#f24e1e" },
    { id: "apple", label: "Apple", icon: apple, color: "#000000" },
    { id: "androidstudio", label: "Android Studio", icon: androidstudio, color: "#2994eb" },
    { id: "laravel", label: "Laravel", icon: laravel, color: "#ff2d20" },
    { id: "node", label: "Node.js", icon: nodeIcon, color: "#339933" },
  ];

  const services = [
    t("services.webDevelopment"),
    t("services.mobileAppDevelopment"),
    t("services.customSoftwareDevelopment"),
    t("services.apiIntegration"),
    t("services.databaseDesign"),
    t("services.bugFixingMaintenance"),
    t("services.systemDevelopment"),
  ];

  const heroSocialLinks = [
    { id: "github", icon: <AiFillGithub />, href: "https://github.com/THONBUNLENG", label: t("socialLabels.github") },
    { id: "gitlab", icon: <SiGitlab />, href: "https://gitlab.com/leng94570", label: t("socialLabels.gitlab") },
    { id: "linkedin", icon: <FaLinkedin />, href: "https://kh.linkedin.com/in/thon-bunleng-dev", label: t("socialLabels.linkedin") },
    { id: "telegram", icon: <FaTelegram />, href: "https://t.me/bunleng_dev", label: t("socialLabels.telegram") },
    { id: "facebook", icon: <AiOutlineFacebook />, href: "https://www.facebook.com/wen.linji.i", label: t("socialLabels.facebook") },
    { id: "youtube", icon: <FaYoutube />, href: "https://www.youtube.com/", label: t("socialLabels.youtube") },
    { id: "tiktok", icon: <SiTiktok />, href: "https://www.tiktok.com/@wen_lin1314", label: t("socialLabels.tiktok") },
    { id: "phone-metfone", icon: <AiFillPhone />, href: "tel:+855883205515", label: t("socialLabels.phone") },
  ];

  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container fluid className="home-content-new">
          <Row className="align-items-center home-hero-row">
            {/* Image on the left with blend styling */}
            <Col lg={5} className="home-img-left">
              <div className="home-img-wrapper">
                <img
                  src={myImg}
                  alt="Thon Bunleng"
                  className="img-fluid home-hero-img"
                  style={{
                    borderRadius: "24px",
                    boxShadow: "0 20px 50px rgba(0, 0, 0, 0.6)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                />

                {/* Tech Stack Badges */}
                <div className="tech-badges-container">
                  {techBadges.map((badge, idx) => (
                    <div
                      key={badge.id}
                      className="tech-badge-item"
                      style={{ "--badge-index": idx }}
                    >
                      <div className="badge-circle">
                        {badge.icon ? (
                          <img
                            src={badge.icon}
                            alt={badge.label}
                            className="badge-icon"
                            style={{
                              width: "60%",
                              height: "60%",
                              objectFit: "contain",
                            }}
                          />
                        ) : (
                          <span
                            className="badge-text"
                            style={{ color: badge.color }}
                          >
                            {badge.label}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Col>

            {/* Content on the right */}
            <Col lg={7} className="home-header-right">
              {/* Telegram QR float badge */}
              <a
                href={telegramUrl}
                target="_blank"
                rel="noreferrer"
                className="telegram-qr-card"
                aria-label={t("telegramAriaLabel")}
              >
                <img src={telegramQrUrl} alt={t("telegramQrAlt")} />
                <span>{t("telegramLabel")}</span>
              </a>

              {/* Main Content */}
              <div className="hero-content">
                <div className="d-inline-flex align-items-center gap-2 mb-2">
                  <span className="freelance-badge">{t("availableFreelance")}</span>
                </div>

                <h1 className="hero-title">
                  {t("homeHeroTitle")}{" "}
                  <span className="text-gold">{t("homeHeroTitleHighlight")}</span>
                </h1>

                <p className="hero-tagline">{t("homeHeroTagline")}</p>

                {/* Services Section */}
                <div className="services-section">
                  <h3 className="services-title">{t("servicesTitle")}</h3>
                  <ul className="services-list">
                    {services.map((service, idx) => (
                      <li key={idx} className="service-item">
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact Info - Compact Flex Layout */}
                <div className="contact-info d-flex flex-wrap gap-3 align-items-center mb-3">
                  <a href="tel:+85511820595" className="contact-link phone-cellcard">
                    <AiFillPhone style={{ marginRight: "6px" }} />
                    +855 11 820 595
                  </a>
                  <span className="text-zinc-600 d-none d-sm-inline">•</span>
                  <a href="tel:+855883205515" className="contact-link phone-metfone">
                    <AiFillPhone style={{ marginRight: "6px" }} />
                    +855 88 320 5515
                  </a>
                  <span className="text-zinc-600 d-none d-sm-inline">•</span>
                  <a href="mailto:leng94570@gmail.com" className="contact-link contact-email">
                    <AiOutlineMail style={{ marginRight: "6px" }} />
                    {t("contactEmail")}
                  </a>
                </div>

                {/* CTA Action & Social Icons */}
                <div className="d-flex flex-wrap align-items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={scrollToProjects}
                    className="btn btn-primary rounded-pill px-4 py-2 d-inline-flex align-items-center gap-2"
                    style={{
                      backgroundColor: "#7c3aed",
                      borderColor: "#7c3aed",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                    }}
                  >
                    <span>View Projects</span>
                    <AiOutlineArrowDown />
                  </button>

                  <div className="hero-social-row m-0">
                    {heroSocialLinks.map((link) => (
                      <a
                        key={link.id}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="hero-social-icon"
                        aria-label={link.label}
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Other Sections */}
      <Home2 />
      <About />
      <Projects />
      <Resume />
      <Blogs />
      <Contact />
    </section>
  );
}

export default Home;