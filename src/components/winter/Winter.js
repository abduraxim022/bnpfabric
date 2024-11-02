import React from 'react';
import { Link } from 'react-router-dom';
import data from '../../data/data';
import { useTranslation } from 'react-i18next';
import './winter.scss';

export default function Winter() {
  const { t } = useTranslation();
  const winterCollections = data.regularCollections;

  return (
    <div className="container kml ">
      <div className="title-div">
        <h1>{t("winterTitle")}</h1>
        <h4>{t("winterSubtitle")}</h4>
      </div>

      <div className="collection-container">
        {winterCollections.map((collection) => (
          <div className="collection-card" key={collection.id}>
            <Link to={`/product/${collection.title}`}>
              <img
                src={collection.image}
                alt={collection.title}
                className="collection-image"
              />
              <h4 className="collection-title">{collection.title}</h4>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
