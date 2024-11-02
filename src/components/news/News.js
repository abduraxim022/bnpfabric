import React from 'react';
import { useTranslation } from 'react-i18next'; 
import news1 from '../../images/news1.png';
import news2 from '../../images/news2.png';
import news3 from '../../images/news3.png';
import './news.scss';

export default function News() {
  const { t } = useTranslation();

  return (
    <div className='container'>
      <div className='news-header'>
        <h1>{t("newsTitle")}</h1> 
        <h4>{t("newsSubtitle")}</h4> 
      </div>
      <div className='news-container'>
        <div data-aos="zoom-out" className='news-card'>
          <img src={news1} alt={t("newsImageAlt1")} className='news-image' /> 
          <div className='news-content'>
            <p className='date'>05.10.2019 &nbsp; • &nbsp; {t("byAdmin")}</p> 
            <h3 className='news-title'>{t("newsTitle1")}</h3> 
            <p className='news-text'>
              {t("newsText1")}
            </p>
          </div>
        </div>

        <div data-aos="zoom-out" className='news-card'>
          <img src={news2} alt={t("newsImageAlt2")} className='news-image' />
          <div className='news-content'>
            <p className='date'>05.10.2019 &nbsp; • &nbsp; {t("byAdmin")}</p> 
            <h3 className='news-title'>{t("newsTitle2")}</h3> 
            <p className='news-text'>
              {t("newsText2")}
            </p> 
          </div>
        </div>

        <div data-aos="zoom-out" className='news-card'>
          <img src={news3} alt={t("newsImageAlt3")} className='news-image' /> 
          <div className='news-content'>
            <p className='date'>05.10.2019 &nbsp; • &nbsp; {t("byAdmin")}</p> 
            <h3 className='news-title'>{t("newsTitle3")}</h3> 
            <p className='news-text'>
              {t("newsText3")}
            </p> 
          </div>
        </div>
      </div>
    </div>
  );
}
