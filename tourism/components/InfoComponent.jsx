import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import infostyles from '../styles/Info.module.css'
import axios from 'axios'
import AppContext from './AppContext'

function Info() {

  const context = useContext(AppContext);

  let place = context.query;
  
  let preventBan = 0;
  
  setInterval(() => {
    preventBan = 0;
  }, 60000)
  
  useEffect(() => {

    if(place !== 'No query' && place !== '' && place.trim().length!==0){
      if(preventBan > 10){
        return;
      }
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${context.query}&units=metric&appid=${process.env.WEATHER}`
      try{
        axios(url).then((response) => {
          console.log(response.data)
          
          const {name} = response.data
          const {lat, lon} = response.data.coord
          const {temp_min, temp_max, temp} = response.data.main 
          const {country} = response.data.sys
          const {dt} = response.data
          const {main} = response.data.weather[0]

          context.updateResults(name, lat, lon, dt, temp_min, temp_max, temp, country, main)
          context.updateCenter(lat, lon)
          preventBan += 1;
        }).catch((error) => {
          console.log("Could not fetch weather")
          context.updateSearch('invalid')
          preventBan += 1;
        })
      }catch{
          console.log("Could not fetch weather")
          preventBan+=1;
      }
    }
    
  }, [context.query])

  const date = new Date()
  const time = date.toLocaleTimeString().split(' ')[0].split(':')
  const fulltime = `${time[0]}:${time[1]}`
  const fulldate = date.toDateString().split(' ')

  const showdate = `${fulldate[0]} | ${fulldate[1]} ${fulldate[2]} | ${fulltime}`
  
  if(place !== 'invalid'){
    return (
      <>
          <div className={infostyles.card}>
              {context.results.temp>20? <div className={infostyles.warm}></div>: <div className={`${infostyles.cold}`}></div>}
              {/* <div className={infostyles.img}></div> */}
              <h3 className={infostyles.title}>{context.query}, {context.results.country}</h3>
              <span className={infostyles.small}>{showdate}</span>
              <p className={infostyles.mid}>{context.results.main}</p>
              <h1 className={infostyles.large}>{context.results.temp}°C</h1>
          </div>
        </>
    )
  }else if(place == '' || place == 'undefined' || place.trim().length===0){
    return(
      <>
        <div className={infostyles.emptycard}>
          <h1>Info will be displayed here</h1>
        </div>
      </>
    )
  }else if(place == 'invalid'){
    return(
    <>
      <div className={infostyles.emptycard}>
        <h1>Sorry, we couldn't find weather for the specified place!</h1>
      </div>
    </>
    )
  }
}

export default Info