import React from "react";
import quality2 from "../../images/quality2.png";
import "./quality.scss";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export default function Qualitywin() {
  const { t } = useTranslation();

  return (
    <div className="container quality-container">
      <div className="quality-img_container win">
        <div className="text">
        <img data-aos="fade-up" className="qu2-img" src={quality2} alt="winter-material_image" />
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
