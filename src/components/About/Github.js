import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row, Container } from "react-bootstrap";
import { useLanguage } from "../../context/LanguageContext";

const contributionTheme = {
  light: ["#161b22", "#4a121a", "#7e1d2c", "#b82b41", "#e74c5e"],
  dark: ["#161b22", "#4a121a", "#7e1d2c", "#b82b41", "#e74c5e"],
};

function Github() {
  const { t, language } = useLanguage();

  return (
    <Container className="py-4">
      <Row className="justify-content-center text-white">
        <h2 className="project-heading pb-4 text-center font-bold text-[2.1rem]">
          {language === "en" ? (
            <>
              Days I <strong className="text-[#e74c5e]">Code</strong>
            </>
          ) : (
            <>
              {t("codeDays")} {" "}
              <strong className="text-[#e74c5e]">{t("codeDaysHighlight")}</strong>
            </>
          )}
        </h2>

        <div className="github-calendar-wrapper flex w-full justify-content-center overflow-x-auto rounded-2xl border border-white/10 bg-[#0e121e]/80 p-3 shadow-xl backdrop-blur-md md:p-4">
          <GitHubCalendar
            username="THONBUNLENG"
            blockSize={14}
            blockMargin={4}
            colorScheme="dark"
            theme={contributionTheme}
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
