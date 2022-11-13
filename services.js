const key = 'dcc3baa0d87b3cba'

const baseUrlV1 = `https://api.cyclestreets.net/journey.json`
const baseUrlV2 = `https://api.cyclestreets.net/v2/`
//https://www.cyclestreets.net/api/journey.json?key=registeredapikey&plan=leisure&itinerarypoints=-0.14009,51.50202,Buckingham+Palace&duration=7200

export const nearestpoint = (lonlat) => `${baseUrlV2}nearestpoint?key=${key}&lonlat=${lonlat}`
export const leisureRoute = (lonlat, duration) => `${baseUrlV1}?key=${key}plan=leisure&itinararypoints=${lonlat}&duration=${duration}`