import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaTelegram, FaLinkedin, FaGithub } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";
import Particle from "../Particle";
import "./Contact.css";

function Contact() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:leng94570@gmail.com?subject=${encodeURIComponent(
      formData.subject || "Contact from Portfolio"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: language === "nan" ? "地點" : "Location",
      desc: "Phnom Penh, Cambodia",
    },
    {
      icon: <FaPhoneAlt />,
      title: language === "nan" ? "電話 & Telegram" : "Phone & Telegram",
      desc: "+855 88 320 5515",
      link: "tel:+855883205515",
    },
    {
      icon: <FaEnvelope />,
      title: language === "nan" ? "電子郵件" : "Email Address",
      desc: "leng94570@gmail.com",
      link: "mailto:leng94570@gmail.com",
    },
  ];

  const socialLinks = [
    { icon: <FaGithub />, name: "GitHub", href: "https://github.com/THONBUNLENG" },
    { icon: <FaLinkedin />, name: "LinkedIn", href: "https://kh.linkedin.com/in/thon-bunleng-dev" },
    { icon: <FaTelegram />, name: "Telegram", href: "https://t.me/bunleng_dev" },
    
  ];

  return (
    <section className="contact-section position-relative text-white" id="contact">
      <Particle />
      <Container className="position-relative" style={{ zIndex: 2 }}>

        {/* Heading */}
        <div className="text-center mb-5">
          <h1 className="font-extrabold text-3xl sm:text-5xl mb-3 tracking-tight">
            {language === "nan" ? "聯繫" : "Get In"}{" "}
            <strong style={{ color: "#e74c5e" }}>
              {language === "nan" ? "我" : "Touch"}
            </strong>
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            {language === "nan"
              ? "有專案構想或正在尋找優秀的開發者嗎？歡迎直接與我聯繫。"
              : "Have a project in mind or looking for a skilled developer? Feel free to reach out directly."}
          </p>
        </div>

        <Row className="g-4 align-items-stretch justify-content-center">

          {/* Left: Contact Info Cards */}
          <Col lg={4} md={5} className="d-flex flex-column gap-3">
            {contactInfo.map((info, idx) => (
              <div
                key={idx}
                className="d-flex align-items-center gap-3 p-3.5 rounded-2xl bg-[#0e121e]/80 border border-white/10 shadow-lg backdrop-blur-md hover:border-[#e74c5e]/50 transition-all"
              >
                <div
                  className="d-flex align-items-center justify-content-center rounded-xl text-xl flex-shrink-0"
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "rgba(231, 76, 94, 0.12)",
                    color: "#e74c5e",
                    border: "1px solid rgba(231, 76, 94, 0.4)",
                  }}
                >
                  {info.icon}
                </div>
                <div className="overflow-hidden">
                  <h6 className="text-slate-400 text-xs uppercase tracking-wider mb-1 font-semibold">
                    {info.title}
                  </h6>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-slate-200 text-sm font-medium hover:text-[#e74c5e] text-decoration-none truncate d-block"
                    >
                      {info.desc}
                    </a>
                  ) : (
                    <p className="text-slate-200 text-sm font-medium mb-0 truncate">
                      {info.desc}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </Col>

          {/* Right: Contact Form */}
          <Col lg={8} md={7}>
            <div className="p-4 p-md-5 rounded-3xl bg-[#0e121e]/80 border border-white/10 shadow-2xl backdrop-blur-md">
              <Form onSubmit={handleSubmit}>
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Control
                        type="text"
                        name="name"
                        required
                        placeholder={language === "nan" ? "您的姓名 *" : "Your Name *"}
                        value={formData.name}
                        onChange={handleChange}
                        className="contact-input py-2.5 px-3 rounded-xl shadow-none"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Control
                        type="email"
                        name="email"
                        required
                        placeholder={language === "nan" ? "電子郵件 *" : "Email Address *"}
                        value={formData.email}
                        onChange={handleChange}
                        className="contact-input py-2.5 px-3 rounded-xl shadow-none"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Control
                        type="text"
                        name="phone"
                        placeholder={language === "nan" ? "電話號碼" : "Phone Number"}
                        value={formData.phone}
                        onChange={handleChange}
                        className="contact-input py-2.5 px-3 rounded-xl shadow-none"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Control
                        type="text"
                        name="subject"
                        placeholder={language === "nan" ? "主旨" : "Subject"}
                        value={formData.subject}
                        onChange={handleChange}
                        className="contact-input py-2.5 px-3 rounded-xl shadow-none"
                      />
                    </Form.Group>
                  </Col>

                  <Col xs={12}>
                    <Form.Group>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        name="message"
                        required
                        placeholder={language === "nan" ? "您的訊息..." : "Your Message..."}
                        value={formData.message}
                        onChange={handleChange}
                        className="contact-input py-2.5 px-3 rounded-xl shadow-none"
                        style={{ resize: "none" }}
                      />
                    </Form.Group>
                  </Col>

                  <Col xs={12}>
                    <Button
                      type="submit"
                      className="w-100 sm:w-auto font-bold px-5 py-3 rounded-xl transition-all duration-200 border-0 shadow-lg"
                      style={{
                        backgroundColor: "#e74c5e",
                        color: "#fff",
                        boxShadow: "0 4px 15px rgba(231, 76, 94, 0.35)",
                      }}
                    >
                      {language === "nan" ? "發送訊息" : "Send Message"} &rarr;
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>

        {/* Bottom Social Links Bar */}
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-3 gap-md-4 mt-5 pt-3">
          {socialLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-full bg-black/60 border border-white/10 text-slate-300 hover:text-white hover:border-[#e74c5e] hover:bg-[#e74c5e]/20 transition-all text-xs sm:text-sm text-decoration-none shadow-md"
            >
              <span style={{ color: "#e74c5e" }}>{item.icon}</span>
              <span>{item.name}</span>
            </a>
          ))}
        </div>

      </Container>
    </section>
  );
}

export default Contact;