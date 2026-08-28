import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row, Container } from "react-bootstrap";
import { useLanguage } from "../../context/LanguageContext";

function Github() {
  const { t, language } = useLanguage();

  // កំណត់ Palette ពណ៌ពីងងឹត (0 contributions) ទៅភ្លឺ (#e74c5e - Max)
  const explicitTheme = {
    light: ["#161b22", "#4a121a", "#7e1d2c", "#b82b41", "#e74c5e"],
    dark: ["#161b22", "#4a121a", "#7e1d2c", "#b82b41", "#e74c5e"],
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
            theme={explicitTheme}
            fontSize={13}
            labels={{
              totalCount: "{{count}} contributions in the last year",
            }}
          />
        </div>
      </Row>
    </Container>
  );
}

export default Github;