import React from "react";
import Card from "react-bootstrap/Card";
import { GiConsoleController } from "react-icons/gi";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { FaPlane } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";

const activities = [
  { id: "games", Icon: GiConsoleController },
  { id: "blogs", Icon: HiOutlinePencilAlt },
  { id: "travel", Icon: FaPlane },
];

function AboutCard() {
  const { t } = useLanguage();

  return (
    <Card className="quote-card-view about-glass-card">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p className="about-card-text">{t("aboutCardParagraph")}</p>

          <p className="about-activities-intro">
            {t("aboutCardActivitiesPrefix")}
          </p>

          <ul className="about-activity-list">
            {activities.map(({ id, Icon }) => (
              <li key={id} className="about-activity-pill">
                <span className="about-activity-icon" aria-hidden="true">
                  <Icon />
                </span>
                {t(`aboutCardActivities.${id}`)}
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
