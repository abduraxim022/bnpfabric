import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import data from "../../data/data";
import { useTranslation } from 'react-i18next';
import "./singleproduct.scss";

export default function ProductDetail() {
  const { t } = useTranslation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const { title } = useParams();
  const allCollections = [
    ...data.regularCollections,
    ...data.auCollections,
    ...data.suCollections,
  ];

  const collection = allCollections.find((col) => col.title === title);
  const [zoomStyle, setZoomStyle] = useState({});

  if (!collection) {
    return <h2>{t('productNotFound')}</h2>;
  }

  const categoryCollections =
    data.regularCollections.includes(collection)
      ? data.regularCollections
      : data.auCollections.includes(collection)
      ? data.auCollections
      : data.suCollections;

  const similarProducts = categoryCollections.filter((item) => item.id !== collection.id);

  const handleMouseMove = (e) => {
    const img = e.target;
    const { left, top, width, height } = img.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: "scale(2.5)",
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({
      transform: "scale(1)",
      transformOrigin: "center",
    });
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 4, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3, 
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  
  return (
    <div className="container product-detail">
      <div className="table-container">
        <div className="zoom-wrapper">
          <img
            src={collection.image}
            alt={collection.title}
            className="product-image"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={zoomStyle}
          />
        </div>
        <div className="single-div">
          <h1>{collection.title}</h1>
          <table className="table styled-table">
            <tbody>
              <tr>
                <td>{t('material')}:</td>
                <td>{t('materialContent')}</td>
              </tr>
              <tr>
                <td>{t('pillowcase')}:</td>
                <td>{t('pillowcaseSize')}</td>
              </tr>
              <tr>
                <td>{t('sheet')}:</td>
                <td>{t('sheetSize')}</td>
              </tr>
              <tr>
                <td>{t('duvetCover')}:</td>
                <td>{t('duvetCoverSize')}</td>
              </tr>
              <tr>
                <td>{t('size')}:</td>
                <td>{t('sizeContent')}</td>
              </tr>
              <tr>
                <td>{t('manufacturer')}:</td>
                <td>{t('manufacturerContent')}</td>
              </tr>
            </tbody>
          </table>
          <p>
            {t('category')}: <span style={{ color: "red" }}>{t('categoryContent')}</span>
          </p>
        </div>
      </div>
      <div className="similar-container">
        <h2>{t('similarProducts')}</h2>
        <Slider {...sliderSettings} className="similar-products-slider">
          {similarProducts.map((item) => (
            <div key={item.id} className="similar-product-card">
              <Link to={`/product/${item.title}`}>
                <img src={item.image} alt={item.title} className="similar-product-image" />
                <h3>{item.title}</h3>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
