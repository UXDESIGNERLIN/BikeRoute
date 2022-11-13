import 'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js';
import journeyPlanning from './journey-planning.js';
import leisureRoutes from './leisure-routes.js';
import { leisureRouteEndpoint } from './services.js';
export default {
  compnents: {
    journeyPlanning: journeyPlanning,
    leisureRoutes: leisureRoutes
  },
  data() {
    let position = {lat: 51.531795246662604, lng: -0.21797176148605957};
    return { position} 
  },
  mounted() {
    this.initMap()
  },
  methods: {
    computePositionForEndpoint(position) {
      console.log('tt', `${position.lng},${position.lat}`, position)
      return `${position.lng},${position.lat}`
      //return position
    },
    async getLeisureRoutes(options) {
     const data = await axios.get(leisureRouteEndpoint(this.computePositionForEndpoint(this.position)))
     console.log('data',data)
     return data
    },
    initMap() {
     const map = new google.maps.Map(document.getElementById('map'), {
      center: this.position,
        zoom: 18,
        mapId: '73096215c34dca50'
      });
      const bikeLayer = new google.maps.BicyclingLayer();
      bikeLayer.setMap(map);
      const animation = google.maps.Animation.BOUNCE
      const marker = new google.maps.Marker({
        position: {lat: 51.531795246662604, lng: -0.21797176148605957},
        map: map,
        icon: {
          url: '/assets/pin.svg',
          scaledSize: new google.maps.Size(38, 31),
        },
        animation
      });
      map.addListener("click", (mapsMouseEvent) => {
        marker.setPosition(mapsMouseEvent.latLng)  
        this.position = {lat: marker.getPosition().lat(), lng: marker.getPosition().lng()}
      });
    },
  },
  template: `<div><div id='map'></div><leisure-routes @get-leisure-options='getLeisureRoutes'/></div>`
}