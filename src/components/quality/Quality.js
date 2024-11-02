import React from "react";
import { Link } from "react-router-dom";
import quality1 from "../../images/quality1.png";
import { useTranslation } from "react-i18next";
import "./quality.scss";

export default function Quality() {
  const { t } = useTranslation();

  return (
    <div className="quality-container">
      <div className="container">
        <div className="quality-img_container">
          <div className="text">
            <img data-aos='fade-up' className="qu1-img" src={quality1} alt="quality" />
            <div className="left-text">
              <p>{t("percentage")}</p>
              <h1>{t("qualityText")}</h1>
            </div>
            <div className="right-text">
              <h2>{t("company")}</h2>
              <p>{t("description")}</p>
              <div className='quality-btn'>
                <Link to="/collection">{t("button")}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
