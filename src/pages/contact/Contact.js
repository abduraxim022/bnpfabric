import React, { useState } from "react";
import "./contact.scss";
import { Contacticon, Email, Adresscontact } from "../../helper/svgformatter/svgformatter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    message: ""
  });
  
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const botToken = "8056479648:AAHNr3hOpOHVWyDPm5zgc4V5T0obDqYNjKU";
  const chatId = "5126374949";

  const sendToTelegram = async (data) => {
    const message = `📧 ${t('email')}: ${data.email}\n📞 ${t('phone')}: ${data.phone}\n✉️ ${t('message')}: ${data.message}`;
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await sendToTelegram(formData);
      toast.success(t('success'));
      setFormData({ email: "", phone: "", message: "" });
    } catch (error) {
      toast.error(t('error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container contact-container">
      <ToastContainer position="top-right" />
      <div className="contact-content">
        <div className="contact-form">
          <h2>{t('contact')}</h2>
          <form onSubmit={handleSubmit}>
            <input
              type={"email"}
              name="email"
              placeholder={t('email')}
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder={t('phone')}
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder={t('message')}
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" disabled={loading}>
              {loading ? t('Yuborilmoqda') : t('submit')}
            </button>
          </form>
        </div>
        <div className="contact-map">
          <iframe
            loading="lazy"
            src="https://maps.google.com/maps?q=39.747452957301974%2C%2064.45996439941372&amp;t=m&amp;z=17&amp;output=embed&amp;iwloc=near"
            title={t('location_map')}
            aria-label={t('location_map')}
          ></iframe>
        </div>
      </div>
      <div className="contact-info">
        <div className="contact-item">
          <Email />
          <p>{t('info')}</p>
        </div>
        <div className="contact-item">
          <Contacticon />
          <p>{t('tel')}</p>
        </div>
        <div className="contact-item">
          <Adresscontact />
          <p>{t('address')}</p>
        </div>
      </div>
    </div>
  );
}
