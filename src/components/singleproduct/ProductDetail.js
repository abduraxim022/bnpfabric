import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import data from "../../data/data";
import "./singleproduct.scss";

export default function ProductDetail() {
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
    return <h2>Product not found</h2>;
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
                <td>Material:</td>
                <td>100% cotton flannel</td>
              </tr>
              <tr>
                <td>Pillowcase:</td>
                <td>50x70 cm (2 pcs.)</td>
              </tr>
              <tr>
                <td>Sheet:</td>
                <td>260x280 cm (1 pc.)</td>
              </tr>
              <tr>
                <td>Duvet cover:</td>
                <td>160x220 cm (2 pcs.)</td>
              </tr>
              <tr>
                <td>Size:</td>
                <td>Special size</td>
              </tr>
              <tr>
                <td>Manufacturer:</td>
                <td>Bukhara Natural Product</td>
              </tr>
            </tbody>
          </table>
          <p>
            Category: <span style={{ color: "red" }}>Autumn Collection</span>
          </p>
        </div>
      </div>
<div className="similar-container">
      <h2>Similar Products</h2>
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
