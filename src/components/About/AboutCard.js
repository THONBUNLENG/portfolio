import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useLanguage } from "../../context/LanguageContext";

function AboutCard() {
  const { t, language } = useLanguage();
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
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
                  <br />
                  <br />
                  {t("aboutCardActivitiesPrefix")}
                </>
              : <>
                  {t("aboutCardParagraph")}
                  <br />
                  <br />
                  {t("aboutCardActivitiesPrefix")}
                </>
            }
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> {t("aboutCardActivities.games")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("aboutCardActivities.blogs")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("aboutCardActivities.travel")}
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            {language === "en" ? t("aboutCardQuote") : t("aboutCardQuote")}
          </p>
          <footer className="blockquote-footer">{t("aboutCardFooter")}</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;