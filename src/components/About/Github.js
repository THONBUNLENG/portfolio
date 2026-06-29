import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import { useLanguage } from "../../context/LanguageContext";

function Github() {
  const { t, language } = useLanguage();
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "white",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        {language === "en" ? (
          <>Days I <strong className="purple">Code</strong></>
        ) : (
          <>{t("codeDays")} <strong className="purple">{t("codeDaysHighlight")}</strong></>
        )}
      </h1>
      <GitHubCalendar
        username="THONBUNLENG"
        blockSize={30}
        blockMargin={10}
        color="#c084f5"
        fontSize={20}
      />
    </Row>
  );
}

export default Github;
