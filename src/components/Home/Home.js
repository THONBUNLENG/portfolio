import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/me4.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import {
  AiFillGithub,
  AiFillPhone,
  AiOutlineMail,
  AiOutlineFacebook,
} from "react-icons/ai";
import { FaTelegram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { SiTiktok, SiGitlab } from "react-icons/si";
import nodeIcon from "../../Assets/TechIcons/Node.svg";
import csharpIcon from "../../Assets/TechIcons/csharp.svg";
import mongoIcon from "../../Assets/TechIcons/Mongo.svg";

function Home() {
  const telegramUrl = "https://t.me/bunleng_dev";
  const telegramQrUrl =
    "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https%3A%2F%2Ft.me%2Fbunleng_dev";

  const techBadges = [
    { label: "MongoDB", icon: mongoIcon, color: "#13aa52" },
    { label: "Angular", icon: null, color: "#dd0031" },
    { label: ".NET", icon: csharpIcon, color: "#512bd4" },
    { label: "Laravel", icon: null, color: "#ff2d20" },
    { label: "Node.js", icon: nodeIcon, color: "#339933" },
  ];

  const services = [
    "Web Development",
    "Mobile App Development",
    "Custom Software Development",
    "API Integration",
    "Database Design",
    "Bug Fixing & Maintenance",
    "System Development for Businesses",
  ];

  const heroSocialLinks = [
    { icon: <AiFillGithub />, href: "https://github.com/THONBUNLENG", label: "GitHub" },
    { icon: <SiGitlab />, href: "https://gitlab.com/", label: "GitLab" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/", label: "LinkedIn" },
    { icon: <FaTelegram />, href: "https://t.me/bunleng_dev", label: "Telegram" },
    { icon: <AiOutlineFacebook />, href: "https://www.facebook.com/wen.linji.i", label: "Facebook" },
    { icon: <FaYoutube />, href: "https://www.youtube.com/", label: "YouTube" },
    { icon: <SiTiktok />, href: "https://www.tiktok.com/@wen_lin1314", label: "TikTok" },
    { icon: <AiFillPhone />, href: "tel:+855011820595", label: "Phone" },
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
                <span className="freelance-badge">FREELANCE</span>

                <h1 className="hero-title">
                  SOFTWARE <span className="text-gold">ENGINEER</span>
                </h1>

                <p className="hero-tagline">Building Quality Software, Fast</p>

                {/* Services Section */}
                <div className="services-section">
                  <h3 className="services-title">SERVICES</h3>
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
                    011820595
                  </p>
                  <p className="contact-email">
                    <AiOutlineMail style={{ marginRight: "8px" }} />
                    leng94570@gmail.com
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
      {/* <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1>{t("homeFindMe")}</h1>
            <p>
              {t("homeConnect")}{" "}
              <span className="purple">{t("homeConnectHighlight")}</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/THONBUNLENG"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.tiktok.com/@wen_lin1314?is_from_webapp=1&sender_device=pc"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiTiktok />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/wen.linji.i"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://t.me/bunleng_dev"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaTelegram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/wenlin08/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="tel:+855011820595"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillPhone />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container> */}
    </section>
  );
}

export default Home;
