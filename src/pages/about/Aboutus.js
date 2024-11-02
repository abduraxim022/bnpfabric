import React from "react";
import { useTranslation } from 'react-i18next';
import Aboutusimg from '../../images/aboutus.png';
import "./aboutus.scss"; 

export default function Aboutus() {
  const { t } = useTranslation();

 
  const repeatedText = "Bukhara textile, Eco furniture, Bukhara fabrics, Eco bags Bukhara Natural Product Company is pleased to serve its regular customers at any time.";
  const descriptions = Array(11).fill(repeatedText);

  return (
    <div className="container aboutus-container">
      <div className="aboutus-text">
        <h1>{t("aboutUsTitle")}</h1> 
        {descriptions.map(( index) => (
          <p key={index}>
            {t("aboutUsDescription1")}
          </p>
        ))}
      </div>
      <div className="aboutus-image">
        <img
          src={Aboutusimg} 
          alt="Bukhara Natural Product Team"
        />
      </div>
    </div>
  );
}
