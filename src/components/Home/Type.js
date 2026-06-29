import React from "react";
import Typewriter from "typewriter-effect";
import { useLanguage } from "../../context/LanguageContext";

function Type() {
  const { t } = useLanguage();
  return (
    <Typewriter
      options={{
        strings: [
          t("typeOptions.softwareDeveloper"),
          t("typeOptions.mobileAppDeveloper"),
          t("typeOptions.webDeveloper"),
          t("typeOptions.uxUiDesigner"),
          t("typeOptions.freelancer"),
          t("typeOptions.mernStackDeveloper"),
          t("typeOptions.openSourceContributor"),
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}


export default Type;
