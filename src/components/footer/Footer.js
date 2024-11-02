import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png';
import { useTranslation } from 'react-i18next'; 
import './footer.scss';

export default function Footer() {
  const { t } = useTranslation();  

  return (
    <div className="container footer-container">
      <div className="section">
        <Link to='/'>
        <img src={Logo} alt="Bukhara Natural Product Logo" className="logo" />
        </Link>
        <p className="descriptionfooter">
          {t("footerDescription")}
        </p>
      </div>
<div className='double'>


      <div className="section">
        <h4 className="heading">{t("footerMenu")}</h4>
        <ul className="menu-list">
          <li><Link to="/">{t("home")}</Link></li>
          <li><Link to="/about-us">{t("about")}</Link></li>
          <li><Link to="/collection">{t("collection")}</Link></li>
          <li><Link to="/contacts">{t("contacts")}</Link></li>
        </ul>
      </div>

      <div className="section">
        <h4 className="heading">{t("footerContacts")}</h4>
        <p>{t("footerAddress")}</p>
        <p>{t("footerEmail1")}</p>
        <p>{t("footerInstagram")}</p>
        <p>{t("footerEmail2")}</p>
        <p>{t("footerPhone1")}</p>
        <p>{t("footerPhone2")}</p>
      </div>
      </div>

      <div className="sectionf">
        <h4 className="heading">{t("footerSubscribe")}</h4>
        <div className="subscribe-container">
          <input 
            type="email" 
            placeholder={t("footerEmailPlaceholder")} 
            className="input" 
          />
          <button className="subscribe-button">{t("footerSubscribeButton")}</button>
        </div>
      </div>
    </div>
  );
}
