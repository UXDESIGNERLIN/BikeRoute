import 'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js'
const key = 'dcc3baa0d87b3cba'
export default {
  data() {
    const urlV2 = `https://api.cyclestreets.net/v2/nearestpoint?key=dcc3baa0d87b3cba&lonlat=0.11795,52.20530`
    const url = 'https://www.cyclestreets.net/api/journey.json?key=dcc3baa0d87b3cba&plan=quietest&itinerary=860766'
    const nearestPointUrl = 'https://api.cyclestreets.net/v2/nearestpoint?lonlat=0.11795,52.20530'
    return { count: 0, url, nearestPointUrl, urlV2 }
  },
  mounted() {
    console.log('mounted init')
    this.initMap()
  },
  methods: {
    async test() {
      let data = await axios.get(this.urlV2)
      console.log('testing', data.data)
    },
    //51.519145, -0.151902
    initMap() {
    console.log('map init', document.getElementById('map'))
     const map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 51.519145, lng: -0.151902},
        zoom: 18,
        mapId: '73096215c34dca50'
      });
      const animation = google.maps.Animation.BOUNCE
      const marker = new google.maps.Marker({
        position: {lat: 51.519145, lng:-0.151902},
        map: map,
        icon: {
          url: '/assets/pin.svg',
          scaledSize: new google.maps.Size(38, 31),
        },
        animation
      });
      const infoWindow = new google.maps.InfoWindow({
        content: 'testing info',
        minWidth: 100
      })
     marker.addListener("click", () => {
        infoWindow.open({
          anchor: marker,
          map,
        });
        axios.get(url).then((n) => {console.log('n', n)})
      });
    }
 
},
 
  template: `<template><div>count is {{ count }} <button @click="test">Load data</button></div><div id='map'></div></template>`
}