import React from "react";
import quality3 from "../../images/quality3.png";
import "./quality.scss";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export default function Qualityaut() {
  const { t } = useTranslation();

  return (
    <div className="container quality-container">
      <div className="quality-img_container">
        <div className="text">
        <img data-aos="fade-up" className="qu3-img" src={quality3} alt="autumn-material-image" />
        <div className="left-text">
              <p>{t("percentage")}</p>
              <h1>{t("qualityText")}</h1>
            </div>
          <div className="right-text">
            <h2>{t("qualitySubtitle")}</h2>
            <p>
              {t("qualityDescription")}
            </p>
            <div className='quality-btn'>
              <Link to="/collection">{t("qualityButton")}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
