import React, {useState, useContext, useEffect} from 'react'
import AppContext from  './AppContext'

import menustyles from '../styles/Menu.module.css'

function Menu() {
    const context = useContext(AppContext);
    return (
    <div className={context.menu? `${menustyles.menu} ${menustyles.show}`: `${menustyles.menu} ${menustyles.hide}`}>
    {/* <div className={menustyles.menu}> */}
        <h2>Instructions</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est necessitatibus nam voluptatum quo dolore dicta, autem vitae ad illum excepturi similique eum. Tenetur officia pariatur aut, nemo laborum, suscipit at, cum enim officiis dolorum voluptatibus quisquam eligendi obcaecati itaque sequi ipsam ab molestias quibusdam ut fuga dolor odio beatae. Possimus unde reiciendis numquam dicta quam eos eveniet earum beatae maiores voluptatibus ipsa ut quod odio est quasi amet eius sunt, eaque quia tenetur! Omnis eaque, eum quam ullam labore voluptate eius asperiores nobis hic quo eos aliquid accusantium dignissimos temporibus tempore unde nostrum animi incidunt perferendis commodi nam. Libero, consectetur.</p>
      
    </div>
    )
}

export default Menu