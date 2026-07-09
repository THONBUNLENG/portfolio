import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/me4.jpg";
import Particle from "../Particle";
import About from "../About/About";
import Home2 from "./Home2";
import Projects from "../Projects/Projects";
import Resume from "../Resume/ResumeNew";
import Blogs from "../Blogs/Blogs";
import { useLanguage } from "../../context/LanguageContext";
import {
  AiFillGithub,
  AiFillPhone,
  AiOutlineMail,
  AiOutlineFacebook,
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
    { label: "Flutter", icon: flutterIcon, color: "#02569b" },
    { label: "Swift", icon: swiftIcon, color: "#ffac45" },
    { label: "Kotlin", icon: kotlinIcon, color: "#7f52ff" },
    { label: "Java", icon: javaIcon, color: "#f89820" },
    { label: "Postman", icon: postmanIcon, color: "#ff6c37" },
    {label: "Figma", icon: figma, color: "#f24e1e"},
    {label:"Apple", icon: apple, color:"#000000"},
    { label: "Android Studio", icon: androidstudio, color: "#2994eb" },
    { label: "Laravel", icon:laravel, color: "#ff2d20" },
    { label: "Node.js", icon: nodeIcon, color: "#339933" },


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
    { icon: <AiFillGithub />, href: "https://github.com/THONBUNLENG", label: t("socialLabels.github") },
    { icon: <SiGitlab />, href: "https://gitlab.com/leng94570", label: t("socialLabels.gitlab") },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/", label: t("socialLabels.linkedin") },
    { icon: <FaTelegram />, href: "https://t.me/bunleng_dev", label: t("socialLabels.telegram") },
    { icon: <AiOutlineFacebook />, href: "https://www.facebook.com/wen.linji.i", label: t("socialLabels.facebook") },
    { icon: <FaYoutube />, href: "https://www.youtube.com/", label: t("socialLabels.youtube") },
    { icon: <SiTiktok />, href: "https://www.tiktok.com/@wen_lin1314", label: t("socialLabels.tiktok") },
    { icon: <AiFillPhone />, href: "tel:+855011820595", label: t("socialLabels.phone") },
  ];

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container fluid className="home-content-new">
          <Row className="align-items-center home-hero-row">
            {/* Image on the left */}
            <Col lg={5} className="home-img-left">
              <div className="home-img-wrapper">
                <img
                  src={myImg}
                  alt="home pic"
                  className="img-fluid home-hero-img"
                />

                {/* Tech Stack Badges - centered on the image, no color fill */}
                <div className="tech-badges-container">
                  {techBadges.map((badge, idx) => (
                    <div
                      key={idx}
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
              <a
                href={telegramUrl}
                target="_blank"
                rel="noreferrer"
                className="telegram-qr-card"
                aria-label="Open Telegram"
              >
                <img src={telegramQrUrl} alt="Telegram QR code" />
                <span>Telegram</span>
              </a>

              {/* Main Content */}
              <div className="hero-content">
                <span className="freelance-badge">{t("availableFreelance")}</span>

                <h1 className="hero-title">
                  {t("homeHeroTitle")} <span className="text-gold">{t("homeHeroTitleHighlight")}</span>
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

                {/* Contact Info */}
                <div className="contact-info">
                  <p className="contact-phone">
                    <AiFillPhone style={{ marginRight: "8px" }} />
                    {t("contactPhone")}
                  </p>
                  <p className="contact-email">
                    <AiOutlineMail style={{ marginRight: "8px" }} />
                    {t("contactEmail")}
                  </p>
                </div>

                {/* Social Icons Row */}
                <div className="hero-social-row">
                  {heroSocialLinks.map((link, idx) => (
                    <a
                      key={idx}
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
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <About />
      <Projects />
      <Resume />
      <Blogs />
    </section>
  );
}

export default Home;
