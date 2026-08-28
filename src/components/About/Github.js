import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row, Container } from "react-bootstrap";
import { useLanguage } from "../../context/LanguageContext";

function Github() {
  const { t, language } = useLanguage();

  // រៀបចំកម្រិតពណ៌ពី "គ្មាន Contribution (ងងឹត)" ទៅ "ច្រើនបំផុត (ភ្លឺ)"
  const customTheme = {
    dark: [
      "#161b22", // 0 contributions (ផ្ទៃងងឹត)
      "#591b26", // កម្រិត 1
      "#8c2436", // កម្រិត 2
      "#bf364c", // កម្រិត 3
      "#e74c5e", // កម្រិត 4 (ច្រើនបំផុត - Accent Pink/Red)
    ],
  };

  return (
    <Container className="py-4">
      <Row
        style={{
          justifyContent: "center",
          paddingBottom: "10px",
          color: "white",
        }}
      >
        <h1
          className="project-heading pb-4 text-center font-bold"
          style={{ paddingBottom: "25px", fontSize: "2.1rem" }}
        >
          {language === "en" ? (
            <>
              Days I <strong style={{ color: "#e74c5e" }}>Code</strong>
            </>
          ) : (
            <>
              {t("codeDays") || "ថ្ងៃដែលខ្ញុំ"}{" "}
              <strong style={{ color: "#e74c5e" }}>
                {t("codeDaysHighlight") || "Code"}
              </strong>
            </>
          )}
        </h1>

        <div
          className="github-calendar-wrapper d-flex justify-content-center w-100 p-3 p-md-4 rounded-2xl bg-[#0e121e]/80 border border-white/10 shadow-xl backdrop-blur-md"
          style={{ overflowX: "auto" }}
        >
          <GitHubCalendar
            username="THONBUNLENG"
            blockSize={14}
            blockMargin={4}
            colorScheme="dark"
            theme={customTheme}
            fontSize={13}
            style={{
              color: "#e2e8f0",
            }}
          />
        </div>
      </Row>
    </Container>
  );
}

export default Github;