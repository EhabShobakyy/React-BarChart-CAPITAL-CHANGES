import React, { useEffect, useState } from "react";
// to call data
import axios from "axios";
import AccessRefreshTokens from "../../RefreshToken/AccessRefreshTokens";
// Style
import "./InfiniteScroll.css";
// Translation hook
import { useTranslation } from "react-i18next";
// Format Date
import Moment from "moment";
// Icons
import Icons from "../../Components/GlobalComponents/Icons/Icons";

function InfiniteScroll() {
  // State
  const { t, i18n } = useTranslation(); // translation State
  const [stockInfo, setStockInfo] = useState([]); // Price State
  const [latestNews, setLatestNews] = useState([]); // News State
  const [calendar, setCalendar] = useState([]);

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
        console.log(res.data);
        setStockInfo(res.data.companyStockSummary);
        setLatestNews(res.data.latestNews);
        setCalendar(res.data.events);
        // console.log(res.data.latestNews);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [i18n.language, localStorage.getItem("token")]);

  const numFormatTwoDig = (num) => num?.toFixed(2).replace("-", "");
  const changeLanguage = () =>
    i18n.language.charAt(0).toUpperCase() + i18n.language.charAt(1);

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
                color: stockInfo?.closeValue < 0 ? "red" : "white ",
              }}
            >
              <span className="tasi-footer">{t("footer.TASI")}</span>
              <span className="extra-footer">{t("footer.EXTRA")}</span>
              {numFormatTwoDig(stockInfo?.closeValue)}
              <span className="footer-sar">{t("footer.SAR")}</span>
              <span className=" footer-change">
                <Icons number={stockInfo?.change} type="sign" />
                <span>{numFormatTwoDig(stockInfo?.change)}</span>
                <span>({numFormatTwoDig(stockInfo?.percentageChange)}%)</span>
              </span>
            </p>

            <p className="slide-text">
              <span>{t("footer.Calendar")} :</span>
              <span className="calendar-date">
                {Moment(calendar[0]?.occursOn).format("DD MMM, YYYY")}
              </span>
              {calendar[0]?.[`title${changeLanguage()}`]}
            </p>

            <p className="slide-text">
              <span>{t("footer.latestNews")} :</span>
              {latestNews[0]?.title}
            </p>

            <p className="slide-text">
              <span>{t("footer.Calendar")} :</span>
              <span className="calendar-date">
                {Moment(calendar[1]?.occursOn).format("DD MMM, YYYY")}
              </span>
              {calendar[1]?.[`title${changeLanguage()}`]}
            </p>

            <p className="slide-text">
              <span>{t("footer.latestNews")} :</span>
              {latestNews[1]?.title}
            </p>

            <p className="slide-text">
              <span>{t("footer.Calendar")} :</span>
              <span className="calendar-date">
                {Moment(calendar[2]?.occursOn).format("DD MMM, YYYY")}
              </span>
              {calendar[2]?.[`title${changeLanguage()}`]}
            </p>

            <p className="slide-text">
              <span>{t("footer.latestNews")} :</span>
              {latestNews[2]?.title}
            </p>
          </div>

          {/* <!-- same  slides doubled (duplicate) --> */}
          <div className="slide d-flex">
            <p
              className="slide-text"
              style={{
                color: stockInfo?.closeValue < 0 ? "red" : "white ",
              }}
            >
              <span className="tasi-footer">{t("footer.TASI")}</span>
              <span className="extra-footer">{t("footer.EXTRA")}</span>
              {numFormatTwoDig(stockInfo?.closeValue)}
              <span className="footer-sar">{t("footer.SAR")}</span>
              <span className=" footer-change">
                <Icons number={stockInfo?.change} type="sign" />
                <span>{numFormatTwoDig(stockInfo?.change)}</span>
                <span>({numFormatTwoDig(stockInfo?.percentageChange)}%)</span>
              </span>
            </p>

            <p className="slide-text">
              <span>{t("footer.Calendar")} :</span>
              <span className="calendar-date">
                {Moment(calendar[0]?.occursOn).format("DD MMM, YYYY")}
              </span>
              {calendar[0]?.[`title${changeLanguage()}`]}
            </p>

            <p className="slide-text">
              <span>{t("footer.latestNews")} :</span>
              {latestNews[0]?.title}
            </p>

            <p className="slide-text">
              <span>{t("footer.Calendar")} :</span>
              <span className="calendar-date">
                {Moment(calendar[1]?.occursOn).format("DD MMM, YYYY")}
              </span>
              {calendar[1]?.[`title${changeLanguage()}`]}
            </p>

            <p className="slide-text">
              <span>{t("footer.latestNews")} :</span>
              {latestNews[1]?.title}
            </p>

            <p className="slide-text">
              <span>{t("footer.Calendar")} :</span>
              <span className="calendar-date">
                {Moment(calendar[2]?.occursOn).format("DD MMM, YYYY")}
              </span>
              {calendar[2]?.[`title${changeLanguage()}`]}
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
