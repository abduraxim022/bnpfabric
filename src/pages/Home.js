import React, { useEffect } from 'react'
import Quality from '../components/quality/Quality.js'
import Winter from '../components/winter/Winter.js'
import Autumn from '../components/autumn/Autumn.js'
import Summer from '../components/summer/Summer.js'
import Mainsite from '../components/mainsite/Mainsite.js'
import Qualitywin from '../components/quality/Qualitywin.js'
import Qualityaut from '../components/quality/Qualityaut.js'
import News from '../components/news/News.js'

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
    <Mainsite/>
     <Quality/>
     <Winter/>
     <Qualitywin/>
     <Autumn/>
     <Qualityaut/>
     <Summer/>
     <News/>
   
    </div>
  )
}
