import React, { useContext } from 'react'
import headerstyles from '../styles/Header.module.css'
import AppContext from './AppContext'

function Header() {

  const context = useContext(AppContext)

  const handleMenu = () => {
    if(context.menu){
      context.updateMenu('hide')
    }else{
      context.updateMenu('show')
    }
  }

  return (
    <>    
      <section className={headerstyles.header}>
        <div className={context.menu? `${headerstyles.hamMenuBtn} ${headerstyles.show}`: `${headerstyles.hamMenuBtn} ${headerstyles.hide}`} onClick={handleMenu}>
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