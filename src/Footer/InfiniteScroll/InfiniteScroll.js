import React, { useEffect, useState } from "react";
// to call data
import axios from "axios";
import AccessRefreshTokens from "../../RefreshToken/AccessRefreshTokens";
// Style
import "./InfiniteScroll.css";
// Translation hook
import { useTranslation } from "react-i18next";

function InfiniteScroll() {
  // State
  const { t, i18n } = useTranslation(); // translation State
  const [stockInfo, setStockInfo] = useState([]); // Price State
  const [latestNews, setLatestNews] = useState([]); // News State

  useEffect(() => {
    AccessRefreshTokens.getAccessToken();
    axios
      .get(
        `https://data.argaam.com/api/v1/json/ir-api/overview/${i18n.language}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        // console.log(res.data);
        setStockInfo(res.data.prices);
        setLatestNews(res.data.latestNews);
        // console.log(res.data.latestNews);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [localStorage.getItem("token")]);

  const numFormatTwoDig = (num) => num?.toFixed(2);

  return (
    <div
      style={{ direction: i18n.language === "ar" ? "ltr" : "" }}
      className="fixed-bottom"
    >
      <div className="slider">
        <div
          className="slide-track"
          style={{
            animationDirection: i18n.language === "ar" ? "reverse" : null,
            direction: i18n.language === "ar" ? "rtl" : "",
          }}
        >
          <div className="slide d-flex">
            <p
              className="slide-text"
              style={{
                color: stockInfo[0]?.high < 0 ? "red" : "#3aebad ",
              }}
            >
              <span>{t("footer.High")} :</span>
              {numFormatTwoDig(stockInfo[0]?.high)}
            </p>

            <p
              className="slide-text"
              style={{
                color: stockInfo[0]?.low < 0 ? "red" : "#3aebad ",
              }}
            >
              <span>{t("footer.Low")} :</span>
              {numFormatTwoDig(stockInfo[0]?.low)}
            </p>

            <p
              className="slide-text"
              style={{
                color: stockInfo[0]?.transactions < 0 ? "red" : "#3aebad ",
              }}
            >
              <span>{t("footer.Transactions")} :</span>
              {numFormatTwoDig(stockInfo[0]?.transactions)}
            </p>
            <p
              className="slide-text"
              style={{
                color: stockInfo[0]?.amount < 0 ? "red" : "#3aebad ",
              }}
            >
              <span>{t("footer.Turnover")} :</span>
              {numFormatTwoDig(stockInfo[0]?.amount)}
            </p>

            <p className="slide-text">
              <span>{t("footer.latestNews")} :</span>
              {latestNews[0]?.title}
            </p>
            <p className="slide-text">
              <span>{t("footer.latestNews")} :</span>
              {latestNews[1]?.title}
            </p>
            <p className="slide-text">
              <span>{t("footer.latestNews")} :</span>
              {latestNews[2]?.title}
            </p>
          </div>

          {/* <!-- same 9 slides doubled (duplicate) --> */}
          <div className="slide d-flex">
            <p
              className="slide-text"
              style={{
                color: stockInfo[0]?.high < 0 ? "red" : "#3aebad ",
              }}
            >
              <span>{t("footer.High")} :</span>
              {numFormatTwoDig(stockInfo[0]?.high)}
            </p>

            <p
              className="slide-text"
              style={{
                color: stockInfo[0]?.low < 0 ? "red" : "#3aebad ",
              }}
            >
              <span>{t("footer.Low")} :</span>
              {numFormatTwoDig(stockInfo[0]?.low)}
            </p>

            <p
              className="slide-text"
              style={{
                color: stockInfo[0]?.transactions < 0 ? "red" : "#3aebad ",
              }}
            >
              <span>{t("footer.Transactions")} :</span>
              {numFormatTwoDig(stockInfo[0]?.transactions)}
            </p>

            <p
              className="slide-text"
              style={{
                color: stockInfo[0]?.amount < 0 ? "red" : "#3aebad ",
              }}
            >
              <span>{t("footer.Turnover")} :</span>
              {numFormatTwoDig(stockInfo[0]?.amount)}
            </p>

            <p className="slide-text">
              <span>{t("footer.latestNews")} :</span>
              {latestNews[0]?.title}
            </p>
            <p className="slide-text">
              <span>{t("footer.latestNews")} :</span>
              {latestNews[1]?.title}
            </p>
            <p className="slide-text">
              <span>{t("footer.latestNews")} :</span>
              {latestNews[2]?.title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfiniteScroll;
