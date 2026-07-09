import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { useNavigate, useLocation } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { useLanguage } from "../context/LanguageContext";
import cambodiaFlag from "../Assets/cambodia-flag.png";
import ukFlag from "../Assets/uk-flag.png";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const { language, t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (id) => {
    updateExpanded(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goHome = () => {
    updateExpanded(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 300);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    function scrollHandler() {
      updateNavbar(window.scrollY >= 20);
    }

    window.addEventListener("scroll", scrollHandler);
    scrollHandler();

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const LanguageButton = ({ className }) => (
    <Button
      onClick={() => navigate("/language")}
      className={className}
      style={{
        background: "transparent",
        border: "1px solid #c770f0",
        color: "#fbfbfb",
        fontSize: "0.85rem",
        padding: "4px 12px",
        borderRadius: "20px",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        transition: "all 0.3s ease",
      }}
    >
      <img
        src={language === "en" ? ukFlag : cambodiaFlag}
        alt={language === "en" ? "English" : "Khmer"}
        style={{
          height: "1.2em",
          width: "1.2em",
          borderRadius: "50%",
          objectFit: "contain",
        }}
      />
      <span style={{ fontWeight: "500", textTransform: "uppercase" }}>
        {language === "en" ? "EN" : "KM"}
      </span>
    </Button>
  );

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container className="d-flex align-items-center justify-content-between">
        <Navbar.Brand
          href="/"
          onClick={(e) => {
            e.preventDefault();
            goHome();
          }}
          className="d-flex align-items-center me-auto"
        >
          <img src={logo} className="img-fluid logo" alt="brand" />
          <span className="brand-name">THON BUNLENG</span>
        </Navbar.Brand>
        <div className="d-flex d-md-none align-items-center">
          <LanguageButton className="lang-btn lang-btn-mobile" />
        </div>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  goToSection("home");
                }}
              >
                <AiOutlineHome style={{ marginBottom: "2px" }} /> {t("navbarHome")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  goToSection("about");
                }}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> {t("navbarAbout")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="#project"
                onClick={(e) => {
                  e.preventDefault();
                  goToSection("project");
                }}
              >
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />{" "}
                {t("navbarProjects")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="#resume"
                onClick={(e) => {
                  e.preventDefault();
                  goToSection("resume");
                }}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> {t("navbarResume")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="#blogs"
                onClick={(e) => {
                  e.preventDefault();
                  goToSection("blogs");
                }}
              >
                <ImBlog style={{ marginBottom: "2px" }} /> {t("navbarBlogs")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="/language"
                onClick={(e) => {
                  e.preventDefault();
                  updateExpanded(false);
                  navigate("/language");
                }}
              >
                🌐 {language === "en" ? "Language" : "ភាសា"}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/THONBUNLENG/portfolio.git"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>

            {/* Language toggle inside collapse — desktop only */}
            <Nav.Item className="d-none d-md-block">
              <LanguageButton className="lang-btn" />
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;