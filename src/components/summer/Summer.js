import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import data from '../../data/data';
import './summer.scss';

export default function Summer() {
  const { t } = useTranslation();
  const summerCollections = data.suCollections;

  return (
    <div className="container">
      <div className="title-div">
        <h1>{t('summercollection')}</h1>
        <h4>{t('bukharaNaturalProduct')}</h4>
      </div>

      <div className="collection-container">
        {summerCollections.map((collection) => (
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
