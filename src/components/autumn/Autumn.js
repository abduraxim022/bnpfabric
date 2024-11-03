import React from 'react';
import { Link } from 'react-router-dom';
import data from '../../data/data';
import './autumn.scss'
import { useTranslation } from 'react-i18next';
export default function Autumn() {
  const autumnCollections = data.auCollections; 
  const { t } = useTranslation(); 

  return (
    <div className="container">
      <div className="title-div">
      <h1>{t('autumnCollection')}</h1>
      <h4>{t('bukharaNaturalProduct')}</h4>
      </div>

      <div  className="collection-container">
        {autumnCollections.map((collection) => (
          <div  className="collection-card" key={collection.id}>
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
