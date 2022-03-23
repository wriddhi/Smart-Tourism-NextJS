import React, { useRef, useEffect, useState, useContext } from 'react'
import styles from '../styles/Map.module.css'
import { loadModules } from 'esri-loader'
import AppContext from './AppContext'


function WebMap() {

  const context = useContext(AppContext)

  const MapEl = useRef(() => null)

  const [mapState, setMapState] = useState('dark-gray-vector')

  let view;
  
  useEffect(() => {
    loadModules(["esri/views/MapView", "esri/WebMap", 'esri/widgets/Search', 'esri/widgets/Zoom', 'esri/geometry/Point'],{
      css: true
    }).then(([MapView, WebMap, Search, Zoom]) => {
      const webmap  = new WebMap({
        basemap: `${mapState}`
      })
      view = new MapView({
        map: webmap,
        center: context.center,
        zoom: 12,
        container: MapEl.current
      })
      const searchWidget = new Search({
        view: view
      });
      const zoom = new Zoom({
        position: "top-left",
        index: 2
      })
      view.ui.add(searchWidget, {
        border: "2px solid red",
        position: "top-right",
        index: 2
      });
    }, [context.center])

    
    return () => {
      // close the map view
      if(!!view){
        view.destroy()
        view = null
      }
    }
  })
  
  
  const updateCenter = (lat, lon) => {
    view.goTo({
      center: [lon, lat]
    })
  }

  return (
    <div className={styles.mapcontainer}>
      <div className={styles.btns}>
        <button className={mapState=='hybrid'? `${styles.btn} ${styles.active}`: `${styles.btn}`} onClick={() => setMapState('hybrid')}>Satellite</button>
        <button className={mapState=='streets-vector'? `${styles.btn} ${styles.active}`: `${styles.btn}`} onClick={() => setMapState('streets-vector')}>Streets</button>
        <button className={mapState=='dark-gray-vector'? `${styles.btn} ${styles.active}`: `${styles.btn}`} onClick={() => setMapState('dark-gray-vector')}>Topographic</button>
        <button className={mapState=='oceans'? `${styles.btn} ${styles.active}`: `${styles.btn}`} onClick={() => setMapState('oceans')}>Oceans</button>
      </div>
      <div className={styles.map} ref={MapEl}/>
    </div>
  )
}
export default WebMap