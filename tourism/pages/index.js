import '@babel/polyfill'
import React, {useEffect, useState, useContext} from 'react'
import Head from 'next/head'
import Script from 'next/script'
import  styles from '../styles/Home.module.css'

import Input from '../components/InputComponent'
import Map from '../components/MapComponent'
import Info from '../components/InfoComponent'
import Header from '../components/Header'
import Agriculture from '../components/Agriculture'
import AppContext from '../components/AppContext'
import Menu from '../components/Menu'

export default function Home() {

  const [menu, showMenu] = useState(() => true)
  const [query, setQuery] = useState(() => "Delhi")
  const [center, SetCenter] = useState(() => [77.1025, 28.7041])
  const [results, setResults] = useState({name: '', lat: '', lon: '', dt: '', min_temp: '', max_temp: '', temp: '', country: '', main: ''})

  const updateResults = (name, lat, lon, dt, temp_min, temp_max, temp, country, main) => {

    setResults({
      name: name,
      lat: lat, 
      lon: lon,
      dt: dt,
      temp_min: Math.round(temp_min),
      temp_max: Math.round(temp_max),
      temp: Math.round(temp),
      country: country, 
      main: main})
  }

  const updateSearch = (q) => {
    setQuery(query = q)
  }

  const updateCenter = (lat, lon) => {
    SetCenter(center = [lon, lat])
  }

  const updateMenu = (state) => {
    if(state ==='show'){
      showMenu(true)
    }else{
      showMenu(false)
    }
  }

  const userSettings = {
    query: query,
    setQuery,
    updateSearch,
    center: center,
    SetCenter,
    updateCenter,
    results,
    setResults,
    updateResults,
    menu,
    showMenu,
    updateMenu
  }

  return (
    <AppContext.Provider value={userSettings}>
      <Head>
        <title>Smart-Tourism</title>
      </Head>
      {/* <Script src="https://js.arcgis.com/4.22/"></Script> */}
      <Header/>
      <Menu/>
      <Input/>
      <main className={styles.maingrid}>
        <Map/>
        <Info/>
        <Agriculture/>
      </main>      
    </AppContext.Provider>
  )
}
