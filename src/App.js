import "./App.css";
import { useTranslation } from "react-i18next";
import InfiniteScroll from "../src/Footer/InfiniteScroll/InfiniteScroll";
import LangBtn from "../src/LangBtn/LangBtn";

function App() {
  const [t, i18n] = useTranslation();
  return (
    <div
      style={{ direction: i18n.language === "ar" ? "rtl" : "ltr" }}
      className="App"
    >
      <LangBtn />
      <InfiniteScroll />
    </div>
  );
}

export default App;
