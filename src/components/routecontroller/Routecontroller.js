import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import Aboutus from '../../pages/about/Aboutus';
import Collection from '../../pages/collection/Collection';
import Contact from '../../pages/contact/Contact';
import ProductDetail from '../singleproduct/ProductDetail';
import NotFound from '../../pages/notfound/Notfound';


export default function Routecontroller() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<Aboutus />} />
      <Route path="/collection" element={<Collection />} />
      <Route path="/product/:title" element={<ProductDetail />} />
      <Route path="/contact" element={<Contact />} />
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  );
}
