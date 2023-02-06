import { useTranslation } from "react-i18next";
import "./LangBtn.css";
function LangBtn() {
  const [t, i18n] = useTranslation();
  return (
    <div className="lang-btn">
      {i18n.language === "en" && (
        <button
          onClick={() => {
            i18n.changeLanguage("ar");
          }}
        >
          عربي
        </button>
      )}

      {i18n.language === "en-US" && (
        <button
          onClick={() => {
            i18n.changeLanguage("ar");
          }}
        >
          عربي
        </button>
      )}

      {i18n.language === "ar" && (
        <button
          onClick={() => {
            i18n.changeLanguage("en");
          }}
        >
          English
        </button>
      )}
    </div>
  );
}

export default LangBtn;
