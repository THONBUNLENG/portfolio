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
          <p className="about-card-text">
            {language === "en"
              ? <>
                  Hi everyone! I&apos;m <span className="purple">{t("aboutCardName")}</span>{" "}
                  from <span className="purple">{t("aboutCardCity")}</span>.
                  <br />
                  I&apos;m currently working as a{" "}
                  <span className="purple">{t("aboutCardRole")}</span>.
                  <br />
                  I hold a Bachelor&apos;s Degree in{" "}
                  <span className="purple">{t("aboutCardEducation")}</span> from{" "}
                  <span className="purple">{t("aboutCardUniversity")}</span>.
                </>
              : <>{t("aboutCardParagraph")}</>
            }
          </p>

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