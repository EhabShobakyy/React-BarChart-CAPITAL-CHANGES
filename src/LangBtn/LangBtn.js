import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from "react";

import "./LangBtn.css";
function LangBtn() {
  const [t, i18n] = useTranslation();
  const [lang, setLang] = useState("en");

  useEffect(() => {
    setLang(i18n.language);
  }, [i18n.language, lang]);

  return (
    <div className="lang-btn">
      {lang === "en" ? (
        <button
          onClick={() => {
            i18n.changeLanguage("ar");
          }}
        >
          عربي
        </button>
      ) : (
        <button
          onClick={() => {
            i18n.changeLanguage("en");
          }}
        >
          English
        </button>
      )}

      {/* {i18n.language === "ar" && (
        <button
          onClick={() => {
            i18n.changeLanguage("en");
          }}
        >
          English
        </button>
      )} */}
    </div>
  );
}

export default LangBtn;
