import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { useNavigate } from "react-router-dom";
import cambodiaFlag from "../../Assets/cambodia-flag.png";
import ukFlag from "../../Assets/uk-flag.png";
import "./LanguagePage.css";

const LANGUAGES = [
  { code: "en", label: "English", flag: ukFlag },
  { code: "km", label: "ខ្មែរ", flag: cambodiaFlag },
];

function LanguagePage() {
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();

  const handleSelect = (code) => {
    setLanguage(code);
  };

  const handleContinue = () => {
    navigate("/");
  };

  return (
    <div className="language-page">
      <div className="language-card">
        <h1 className="language-title">{t("languagePageTitle")}</h1>
        <p className="language-subtitle">{t("languagePageSubtitle")}</p>

        <div className="language-options">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              className={`language-option ${language === lang.code ? "active" : ""}`}
              onClick={() => handleSelect(lang.code)}
            >
              <img src={lang.flag} alt={lang.label} className="language-flag" />
              <span className="language-label">{lang.label}</span>
              {language === lang.code && <span className="language-check">✓</span>}
            </button>
          ))}
        </div>

        <button
          className="language-continue"
          onClick={handleContinue}
        >
          {t("languagePageContinue")}
        </button>
      </div>
    </div>
  );
}

export default LanguagePage;
