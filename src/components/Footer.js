import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineFacebook,
  AiFillInstagram,
  AiOutlinePhone,
  AiFillPhone,
} from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { useLanguage } from "./../context/LanguageContext";

function Footer() {
  const { t } = useLanguage();
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>{t("footerDesigned")}</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>{t("footerCopyright")} {year} {t("footerBy")}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/THONBUNLENG"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
              <li className="social-icons">
              <a
                href="https://www.tiktok.com/@wen_lin1314?is_from_webapp=1&sender_device=pc"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiTiktok />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.facebook.com/wen.linji.i"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineFacebook />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://t.me/bunleng_dev"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaTelegram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/wenlin08/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
              <li className="social-icons">
                <a
                  href="tel:+855011820595"
                  style={{ color: "white" }}
                >
                  <AiFillPhone />
                </a>
              </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
