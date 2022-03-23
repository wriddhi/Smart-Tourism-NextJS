import '@babel/polyfill'
import React, {useEffect, useState, useContext} from 'react'
import Head from 'next/head'
import Script from 'next/script'
import  styles from '../styles/Home.module.css'

import Input from '../components/InputComponent'
import Map from '../components/MapComponent'
import Info from '../components/InfoComponent'
import Header from '../components/Header'
import AppContext from '../components/AppContext'

export default function Home() {

  const [query, setQuery] = useState(() => "Delhi")
  const [center, SetCenter] = useState(() => [77.1025, 28.7041])
  const [results, setResults] = useState({lat: '', lon: '', dt: '', min_temp: '', max_temp: '', temp: '', country: '', main: ''})

  const updateResults = (lat, lon, dt, temp_min, temp_max, temp, country, main) => {

    setResults({
      ...results,
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
  }

  return (
    <AppContext.Provider value={userSettings}>
      <Head>
        <title>Smart-Tourism</title>
      </Head>
      {/* <Script src="https://js.arcgis.com/4.22/"></Script> */}
      <Header/>
      <Input/>
      <main className={styles.maingrid}>
        <Map/>
        <Info/>
      </main>
    </AppContext.Provider>
  )
}
