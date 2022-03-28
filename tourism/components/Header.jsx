import React, { useContext } from 'react'
import headerstyles from '../styles/Header.module.css'
import AppContext from './AppContext'

function Header() {

  const context = useContext(AppContext)

  const handleMenu = () => {
    console.log(context.menu)
    if(context.menu){
      context.updateMenu('hide')
    }else{
      context.updateMenu('show')
    }
  }

  return (
    <>    
      <section className={headerstyles.header}>
        <div className={headerstyles.hamMenuBtn} onClick={handleMenu}>
          <div className={headerstyles.top}></div>
          <div className={headerstyles.mid}></div>
          <div className={headerstyles.low}></div>
        </div>
        <span>Smart Tourism</span>
      </section>
    </>
  )
}

export default Header