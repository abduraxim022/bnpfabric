import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import data from '../../data/data';
import Pagination from '@mui/material/Pagination';
import GridLoader from 'react-spinners/GridLoader';
import './collection.scss';

export default function Collection() {
  const { regularCollections, auCollections, suCollections } = data;
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const itemsPerPage = 12;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    

    return () => clearTimeout(timeout);
  }, [selectedCategory, currentPage]);

  let collectionsToDisplay;
  let title;

  if (selectedCategory === 'winter') {
    collectionsToDisplay = regularCollections;
    title = "Winter Collection";
  } else if (selectedCategory === 'autumn') {
    collectionsToDisplay = auCollections;
    title = "Autumn Collection";
  } else if (selectedCategory === 'summer') {
    collectionsToDisplay = suCollections;
    title = "Summer Collection";
  } else {
    collectionsToDisplay = [...regularCollections, ...auCollections, ...suCollections];
    title = "All Collections";
  }

  const filteredCollections = collectionsToDisplay.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalItems = filteredCollections.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginatedCollections = filteredCollections.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (event, page) => {
    setLoading(true);
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryChange = (category) => {
    setLoading(true);
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleImageClick = (title) => {
    navigate(`/product/${title}`);
  };

  return (
    <div className="container collections-page">
      <aside className="sidebar">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="categories">
          <h3>Categories</h3>
          <p onClick={() => handleCategoryChange('')}>All</p>
          <p onClick={() => handleCategoryChange('summer')}>Summer</p>
          <p onClick={() => handleCategoryChange('winter')}>Winter</p>
          <p onClick={() => handleCategoryChange('autumn')}>Autumn</p>
        </div>
      </aside>

      <div className="container collections">
        <h2>{title}</h2>
        
        {loading ? (
          <div className="loading-spinner">
            <GridLoader color="#ff0000" loading={loading} size={30} />
          </div>
        ) : (
          <>
            <div className="card-container">
              {paginatedCollections.length > 0 ? (
                paginatedCollections.map((item) => (
                  <div key={item.id} className="card" onClick={() => handleImageClick(item.title)}>
                    <img src={item.image} alt={item.title} className="card-image" />
                    <div className="card-content">
                      <h3>{item.title}</h3>
                    </div>
                  </div>
                ))
              ) : (
                <p className="no-results">This item is not found</p>
              )}
            </div>

            {paginatedCollections.length >= 12 && (
              <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
                color="primary"
                className="pagination"
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}
