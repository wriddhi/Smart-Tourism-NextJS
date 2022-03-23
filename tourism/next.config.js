/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env : {
    ARCGIS_API_KEY: 'AAPKd5a7607067f14bfa884e8054ad167323OVDaBrS-25X2-_O-yvRuWB-v6t1IfvD1nXcG6lIEqlu__j8Zh4KNPn1ON2TaXKo2',
    SPEECHLY_APP_ID: 'ca8c8cbe-efd0-4970-bf52-3863e4e5f16f',
    WEATHER: '3eca9ee923bdbe84b42cf97485b3a890',
    DEMO: 'This is inside .config demo'
  }
}

module.exports = nextConfig
