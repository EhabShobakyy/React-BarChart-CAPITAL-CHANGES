import React, { useEffect, useState } from "react";
// to call data
import axios from "axios";
import AccessRefreshTokens from "../../RefreshToken/AccessRefreshTokens";
// Style
import "./InfiniteScroll.css";

function InfiniteScroll() {
  // State
  const [stockInfo, setStockInfo] = useState([]);
  useEffect(() => {
    AccessRefreshTokens.getAccessToken();
    axios
      .get(`https://data.argaam.com/api/v1/json/ir-api/overview/en`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res.data.companyStockSummary);
        setStockInfo(res.data.companyStockSummary);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [localStorage.getItem("token")]);

  return (
    <>
      <div className="container">
        <div className="slider">
          <div className="slide-track">
            <div className="slide bg-gradient-danger">
              <p>
                <span>High :</span>
                {stockInfo.high}
              </p>
            </div>
            <div className="slide bg-purple-500">2</div>
            <div className="slide bg-blue-500">3</div>
            <div className="slide bg-indigo-500">4</div>
            <div className="slide bg-pink-500">5</div>
            <div className="slide bg-green-500">6</div>
            <div className="slide bg-yellow-500">7</div>
            <div className="slide bg-red-500">8</div>
            <div className="slide bg-gray-500 text-white">9</div>
            <div className="slide bg-blue-800">0</div>

            {/* <!-- same 9 slides doubled (duplicate) --> */}
            <div className="slide bg-red-500">1</div>
            <div className="slide bg-purple-500">2</div>
            <div className="slide bg-blue-500">3</div>
            <div className="slide bg-indigo-500">4</div>
            <div className="slide bg-pink-500">5</div>
            <div className="slide bg-green-500">6</div>
            <div className="slide bg-yellow-500">7</div>
            <div className="slide bg-red-500">8</div>
            <div className="slide bg-gray-500 text-white">9</div>
            <div className="slide bg-blue-800">0</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfiniteScroll;
