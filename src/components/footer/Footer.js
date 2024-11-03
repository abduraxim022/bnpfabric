import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png';
import { useTranslation } from 'react-i18next'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './footer.scss';

export default function Footer() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');

  const botToken = "YOUR_BOT_TOKEN";
  const chatId = "YOUR_CHAT_ID";

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const sendToTelegram = async (email) => {
    const message = `📧 New Subscription: ${email}`;
    const telegramURL = `https://api.telegram.org/bot${botToken}/sendMessage`;

    await fetch(telegramURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message
      })
    });
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error(t("Please enter a valid email"));
      return;
    }

    try {
      await sendToTelegram(email);
      toast.success(t("subscription Success"));
      setEmail('');
    } catch (error) {
      toast.error(t("subscriptionError"));
    }
  };

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
            <li><Link to="/contact">{t("contacts")}</Link></li>
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
            value={email}
            onChange={handleEmailChange}
            required
          />
          <button className="subscribe-button" onClick={handleSubscribe}>
            {t("footerSubscribeButton")}
          </button>
        </div>
      </div>
      <ToastContainer position="top-right" />
    </div>
  );
}
