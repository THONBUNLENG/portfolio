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
  AiOutlineMail,
} from "react-icons/ai";

import { useLanguage } from "../context/LanguageContext";
import ukFlag from "../Assets/uk-flag.png";
import taiwanFlag from "../Assets/taiwan-flag.png";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const toggleLanguage = () => {
    if (setLanguage) {
      setLanguage(language === "en" ? "nan" : "en");
    } else {
      navigate("/language");
    }
  };

  const goToSection = (id) => {
    updateExpanded(false);
    if (location.pathname !== "/home") {
      navigate("/home");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 350);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goHome = () => {
    updateExpanded(false);
    if (location.pathname !== "/home") {
      navigate("/home");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 350);
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
      onClick={toggleLanguage}
      className={className}
      style={{
        background: "rgba(255, 255, 255, 0.06)",
        border: "1px solid rgba(255, 255, 255, 0.15)",
        color: "#f8fafc",
        fontSize: "0.8rem",
        padding: "5px 12px",
        borderRadius: "20px",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        backdropFilter: "blur(8px)",
        transition: "all 0.25s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "#a78bfa";
        e.currentTarget.style.background = "rgba(124, 58, 237, 0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
        e.currentTarget.style.background = "rgba(255, 255, 255, 0.06)";
      }}
    >
      <img
        src={language === "en" ? ukFlag : taiwanFlag}
        alt={language === "en" ? "English" : "台語"}
        style={{
          height: "1.1em",
          width: "1.1em",
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
      <span style={{ fontWeight: "600", letterSpacing: "0.05em" }}>
        {language === "en" ? "EN" : "台"}
      </span>
    </Button>
  );

  const ForkButton = () => (
    <Button
      href="https://github.com/THONBUNLENG/portfolio.git"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        background: "rgba(255, 255, 255, 0.06)",
        border: "1px solid rgba(255, 255, 255, 0.15)",
        color: "#f8fafc",
        padding: "6px 14px",
        borderRadius: "20px",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        backdropFilter: "blur(8px)",
        transition: "all 0.25s ease",
        textDecoration: "none",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "#a78bfa";
        e.currentTarget.style.background = "rgba(124, 58, 237, 0.2)";
        e.currentTarget.style.boxShadow = "0 0 12px rgba(124, 58, 237, 0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
        e.currentTarget.style.background = "rgba(255, 255, 255, 0.06)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <CgGitFork style={{ fontSize: "1.2em" }} />
      <AiFillStar style={{ fontSize: "1.05em", color: "#fbbf24" }} />
    </Button>
  );

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky shadow-lg backdrop-blur-md" : "navbar"}
      style={{
        background: navColour ? "rgba(2, 6, 23, 0.85)" : "transparent",
        borderBottom: navColour ? "1px solid rgba(255, 255, 255, 0.06)" : "none",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <Container className="d-flex align-items-center justify-content-between">
        <Navbar.Brand
          href="/home"
          onClick={(e) => {
            e.preventDefault();
            goHome();
          }}
          className="d-flex align-items-center me-auto"
          style={{ cursor: "pointer" }}
        >
          <img src={logo} className="img-fluid logo me-2" alt="brand" style={{ maxHeight: "32px" }} />
          <span className="brand-name font-bold tracking-wider text-white">THON BUNLENG</span>
        </Navbar.Brand>

        <div className="d-flex d-md-none align-items-center me-2">
          <LanguageButton className="lang-btn lang-btn-mobile" />
        </div>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => updateExpanded(expand ? false : "expanded")}
          style={{ border: "1px solid rgba(255, 255, 255, 0.15)" }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-md-center gap-1 gap-lg-2" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  goHome();
                }}
              >
                <AiOutlineHome className="me-1" style={{ marginBottom: "2px" }} />{" "}
                {t("navbarHome") || "Home"}
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
                <AiOutlineUser className="me-1" style={{ marginBottom: "2px" }} />{" "}
                {t("navbarAbout") || "About"}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  goToSection("projects");
                }}
              >
                <AiOutlineFundProjectionScreen className="me-1" style={{ marginBottom: "2px" }} />{" "}
                {t("navbarProjects") || "Projects"}
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
                <ImBlog className="me-1" style={{ marginBottom: "2px" }} />{" "}
                {t("navbarBlogs") || "Blogs"}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  goToSection("contact");
                }}
              >
                <AiOutlineMail className="me-1" style={{ marginBottom: "2px" }} />{" "}
                {t("navbarContact") || "Contact"}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="d-none d-md-flex align-items-center ms-2">
              <LanguageButton className="lang-btn" />
            </Nav.Item>

            <Nav.Item className="d-flex align-items-center ms-2 mt-2 mt-md-0">
              <ForkButton />
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;