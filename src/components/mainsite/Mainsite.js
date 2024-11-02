import React, { useEffect, useState } from "react";
import mainimg from "../../images/mainimg.png";
import AOS from 'aos';
import { useTranslation } from 'react-i18next';
import {
  DeliveryVan,
  Headphone,
  Verified,
  Wallet,
} from "../../helper/svgformatter/svgformatter";
import './mainsite.scss';

export default function Mainsite() {
  const { t } = useTranslation();
  const [responsive, setIsResponsive] = useState(window.innerWidth <= 768);

  useEffect(() => {
    AOS.init();

    const handleResize = () => {
      setIsResponsive(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    const cards = document.querySelectorAll('.cards');
    cards.forEach(card => {
      card.setAttribute('data-aos', responsive ? 'fade-right' : 'flip-up');
    });

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [responsive]);

  return (
    <div className="container">
      <div className="main-site">
        <div className="quality">
          <div data-aos='fade-right' className="quality-img">
            <img src={mainimg} alt="Product" className="main-img" />
          </div>
          <div className="quality-text">
            <h3>{t("location")}</h3>
            <h2>{t("natural")}</h2>
            <h1>{t("product")}</h1>
          </div>
        </div>
        <div data-aos="flip-up" className="main-icons">
          <div className="cards" data-aos={responsive ? 'fade-right' : 'flip-up'}>
            <DeliveryVan />
            <div>
              <h4>{t("freeShipping")}</h4>
              <p>{t("freeShippingDesc")}</p>
            </div>
          </div>
          <div className="cards" data-aos={responsive ? 'fade-right' : 'flip-up'}>
            <Verified />
            <div>
              <h4>{t("moneyBack")}</h4>
              <p>{t("moneyBackDesc")}</p>
            </div>
          </div>
          <div className="cards" data-aos={responsive ? 'fade-right' : 'flip-up'}>
            <Headphone />
            <div>
              <h4>{t("onlineSupport")}</h4>
              <p>{t("onlineSupportDesc")}</p>
            </div>
          </div>
          <div className="cards" data-aos={responsive ? 'fade-right' : 'flip-up'}>
            <Wallet />
            <div>
              <h4>{t("securePayment")}</h4>
              <p>{t("securePaymentDesc")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
