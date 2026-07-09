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
      
  
      <div className="github-calendar-wrapper" style={{ display: "flex", justifyContent: "center", width: "100%", padding: "0 10px" }}>
        <GitHubCalendar
          username="THONBUNLENG"
          blockSize={15}    
          blockMargin={5}      
          color="#c084f5"
          fontSize={14}      
        />
      </div>
    </Row>
  );
}

export default Github;