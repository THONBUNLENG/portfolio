import React from "react";
import Card from "react-bootstrap/Card";
import { GiConsoleController } from "react-icons/gi";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { FaPlane } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";

function AboutCard() {
  const { t, language } = useLanguage();

  const activities = [
    { icon: <GiConsoleController />, text: t("aboutCardActivities.games") },
    { icon: <HiOutlinePencilAlt />, text: t("aboutCardActivities.blogs") },
    { icon: <FaPlane />, text: t("aboutCardActivities.travel") },
  ];

  return (
    <Card className="quote-card-view about-glass-card">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          {language === "en" || language === "nan" ? (
            <p className="about-card-text">
              {language === "nan" ? "大家好！我是 " : "Hi everyone! I&apos;m "}<span className="purple">{t("aboutCardName")}</span>{" "}
              {language === "nan" ? "来自" : "from"} <span className="purple">{t("aboutCardCity")}</span>.
              <br />
              {language === "nan" ? "我目前是一名" : "I&apos;m currently working as a"} <span className="purple">{t("aboutCardRole")}</span>.
              <br />
              {language === "nan" ? "我拥有" : "I hold a Bachelor&apos;s Degree in"} <span className="purple">{t("aboutCardEducation")}</span> {language === "nan" ? "学位，毕业于" : "from"} <span className="purple">{t("aboutCardUniversity")}</span>.
            </p>
          ) : (
            <p className="about-card-text" dangerouslySetInnerHTML={{ __html: t("aboutCardParagraph") }} />
          )}

          <p className="about-activities-intro">
            {t("aboutCardActivitiesPrefix")}
          </p>

          <ul className="about-activity-list">
            {activities.map((item, idx) => (
              <li key={idx} className="about-activity-pill">
                <span className="about-activity-icon">{item.icon}</span>
                {item.text}
              </li>
            ))}
          </ul>

          <p className="about-card-quote">{t("aboutCardQuote")}</p>
          <footer className="blockquote-footer">{t("aboutCardFooter")}</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;