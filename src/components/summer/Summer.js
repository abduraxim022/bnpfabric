import React from 'react';
import { Link } from 'react-router-dom';
import data from '../../data/data';
import './summer.scss'

export default function Summer() {
  const summerCollections = data.suCollections;  
  return (
    <div className="container">
      <div className="title-div">
        <h1>Summer Collection</h1>
        <h4>Bukhara Natural Product</h4>
      </div>

      <div className="collection-container">
        {summerCollections.map((collection) => (
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
