import { useEffect } from 'react';
import Navbar from './components/navbar/Navbar'
import './style/main.scss'
import AOS from "aos";
import "aos/dist/aos.css";
import './i18n'; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Footer from './components/footer/Footer'

function App() {
  useEffect(() => {
    AOS.init({
      duration:1500,
      once:true
    });
  }, []);
  return (
    <>
    <div >
    <Navbar/>
    
    <Footer/>
    </div>
        </>
  )
}

export default App
