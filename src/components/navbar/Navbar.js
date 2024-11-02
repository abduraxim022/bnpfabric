import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Routecontroller from '../routecontroller/Routecontroller';
import Logo from '../../images/logo.png';
import { Sidebar } from 'primereact/sidebar';
import "primereact/resources/themes/saga-blue/theme.css"; // PrimeReact Theme
import "primereact/resources/primereact.min.css"; // Core CSS
import "primeicons/primeicons.css";
import './navbar.scss';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    i18n.changeLanguage(savedLanguage);
  }, [i18n]);

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem('language', selectedLanguage);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="container containern">
          <div className="logo-container">
            <Link to='/'>
            <img src={Logo} alt="Logo" className="logo" />
            </Link>
          </div>
          <ul className="nav-links">
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')} end>
                {t('home')}
              </NavLink>
            </li>
            <li>
              <NavLink to="/collection" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                {t('collection')}
              </NavLink>
            </li>
            <li>
              <NavLink to="/about-us" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                {t('about')}
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                {t('contacts')}
              </NavLink>
            </li>
          </ul>
          <div className='lang-container'>
          <div className="language-selector">
            <select onChange={handleLanguageChange} value={i18n.language}>
              <option value="uz">UZ</option>
              <option value="en">EN</option>
              <option value="ru">RU</option>
            </select>
          </div>
          <span className="menu-button" onClick={() => setMenuOpen(true)}>
            ☰
          </span>
          </div>
          <div className='sidebarnb'>

       
          <Sidebar visible={menuOpen} onHide={() => setMenuOpen(false)} position="right">
            <ul className="sidebar-content">
              <li>
                <NavLink to="/" onClick={() => setMenuOpen(false)}>
                  {t('home')}
                </NavLink>
              </li>
              <li>
                <NavLink to="/collection" onClick={() => setMenuOpen(false)}>
                  {t('collection')}
                </NavLink>
              </li>
              <li>
                <NavLink to="/about-us" onClick={() => setMenuOpen(false)}>
                  {t('about')}
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
                  {t('contacts')}
                </NavLink>
              </li>
            </ul>
          </Sidebar>
          </div>
        </div>
      </nav>
      <Routecontroller />
    </div>
  );
}
