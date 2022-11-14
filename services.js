const baseUrlV1 = `https://www.cyclestreets.net/api/journey.json`
const baseUrlV2 = `https://api.cyclestreets.net/v2/`

export const nearestpointEndpoint = (lonlat) => `${baseUrlV2}nearestpoint?key=${YOURAPIKEY}&lonlat=${lonlat}`
export const leisureRouteEndpoint = (lonlat, options) => `${baseUrlV1}?key=${YOURAPIKEY}&plan=leisure&itinerarypoints=${lonlat}&duration=${options.durance}&distance=${options.distance}`