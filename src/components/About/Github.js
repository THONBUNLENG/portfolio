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
          <>Days I <strong style={{ color: "#e74c5e" }}>Code</strong></>
        ) : (
          <>{t("codeDays")} <strong style={{ color: "#e74c5e" }}>{t("codeDaysHighlight")}</strong></>
        )}
      </h1>
      
      <div className="github-calendar-wrapper" style={{ display: "flex", justifyContent: "center", width: "100%", padding: "0 10px" }}>
        <GitHubCalendar
          username="THONBUNLENG"
          blockSize={15}    
          blockMargin={5}      
          colorScheme="dark"
          theme={{
            dark: ["#161b22", "#4c1d24", "#8c2535", "#c7384d", "#e74c5e"],
          }}
          fontSize={14}      
        />
      </div>
    </Row>
  );
}

export default Github;