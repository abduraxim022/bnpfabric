import React from 'react';
import { Link } from 'react-router-dom';
import data from '../../data/data';
import './autumn.scss'

export default function Autumn() {
  const autumnCollections = data.auCollections;  

  return (
    <div className="container">
      <div className="title-div">
        <h1>Autumn Collection</h1>
        <h4>Bukhara Natural Product</h4>
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
