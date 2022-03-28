import React, {useState, useContext, useEffect} from 'react'
import AppContext from './AppContext'

import agristyles from '../styles/Agriculture.module.css'

function Agriculture() {

    const context = useContext(AppContext)

    const [info, setInfo] = useState('no-info')

  return (
    <div className={agristyles.card}>
      <h3 className={agristyles.mid}>More Info about {context.results.name}</h3>
      <nav className={agristyles.btns}>
        <button className={agristyles.btn} onClick={() => setInfo('crops')}>Regional Crops</button>
        <button className={agristyles.btn}>Tourist Places</button>
        <button className={agristyles.btn}>Famous Foods</button>
        <button className={agristyles.btn}>Accomodation</button>
      </nav>
      <section className={agristyles.info}></section>
    </div>
  )
}

export default Agriculture