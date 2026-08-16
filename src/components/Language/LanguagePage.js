import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { useNavigate } from "react-router-dom";
import cambodiaFlag from "../../Assets/cambodia-flag.png";
import ukFlag from "../../Assets/uk-flag.png";
import "./LanguagePage.css";

const chinaFlag = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 20'%3E%3Crect width='30' height='20' fill='%23DE2910'/%3E%3Cpolygon points='5,3 5.5,5 7.5,5 6,6.2 6.5,8.2 5,7 3.5,8.2 4,6.2 2.5,5 4.5,5' fill='%23FFDE00'/%3E%3Cpolygon points='10,2 10.3,3 11.3,3 10.5,3.5 10.8,4.5 10,4 9.2,4.5 9.5,3.5 8.7,3 9.7,3' fill='%23FFDE00' transform='scale(0.5) translate(14, 2)'/%3E%3Cpolygon points='10,2 10.3,3 11.3,3 10.5,3.5 10.8,4.5 10,4 9.2,4.5 9.5,3.5 8.7,3 9.7,3' fill='%23FFDE00' transform='scale(0.5) translate(16, 5)'/%3E%3Cpolygon points='10,2 10.3,3 11.3,3 10.5,3.5 10.8,4.5 10,4 9.2,4.5 9.5,3.5 8.7,3 9.7,3' fill='%23FFDE00' transform='scale(0.4) translate(16, 9)'/%3E%3Cpolygon points='10,2 10.3,3 11.3,3 10.5,3.5 10.8,4.5 10,4 9.2,4.5 9.5,3.5 8.7,3 9.7,3' fill='%23FFDE00' transform='scale(0.4) translate(18, 13)'/%3E%3C/svg%3E";

const LANGUAGES = [
  { code: "en", label: "English", flag: ukFlag }, 
  { code: "km", label: "ខ្មែរ", flag: cambodiaFlag },
  { code: "zh", label: "中文", flag: chinaFlag },
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
