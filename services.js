const key = 'dcc3baa0d87b3cba'

const baseUrlV1 = `https://www.cyclestreets.net/api/journey.json`
const baseUrlV2 = `https://api.cyclestreets.net/v2/`
//https://www.cyclestreets.net/api/journey.json?key=registeredapikey&plan=leisure&itinerarypoints=-0.14009,51.50202,Buckingham+Palace&duration=7200
//https://www.cyclestreets.net/api/journey.json?key=dcc3baa0d87b3cba&plan=leisure&itinerarypoints=-0.14009,51.50202&duration=720

export const nearestpointEndpoint = (lonlat) => `${baseUrlV2}nearestpoint?key=${key}&lonlat=${lonlat}`
export const leisureRouteEndpoint = (lonlat, options) => `${baseUrlV1}?key=${key}&plan=leisure&itinerarypoints=${lonlat}&duration=${options.durance}&distance=${options.distance}`
//export const leisureRouteEndpoint = () => 'https://api.cyclestreets.net/v2/nearestpoint?key=6eeb6a96b726107e&lonlat=-2.4300367,53.5782863'
//export const leisureRouteEndpoint = () => 'https://www.cyclestreets.net/api/journey.json?key=dcc3baa0d87b3cba&plan=leisure&itinerarypoints=-0.14009,51.50202&duration=720'