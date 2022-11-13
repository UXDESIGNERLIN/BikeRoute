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
    let map;
    return { position, map} 
  },
  mounted() {
    this.initMap()
  },
  methods: {
    setDirections(result, status) {
      const directionsRenderer = new google.maps.DirectionsRenderer();
      directionsRenderer.setMap(this.map)
      //let directionsService = new google.maps.DirectionsService();
      if (status == google.maps.DirectionsStatus.OK) {

        //display route
        console.log(result)
        directionsRenderer.setDirections(result);
    } else {
        //delete route from map
        directionsRenderer.setDirections({ routes: [] });
      }
    },
    computePositionForEndpoint(position) {
      console.log('tt', `${position.lng},${position.lat}`, position)
      return `${position.lng},${position.lat}`
      //return position
    },
    async setRoute(options) {
      const coordinates = await this.getLeisureRoutes(options); 
      const coordinatesArray = coordinates.split(' ')
      let arr = []
      for (const key of coordinatesArray.keys()) {
        if(arr.length >= 2) {
          arr = []
        }
        arr.push(coordinatesArray[key])
        if(key%2 !== 0) {
          this.calculateRoute(arr)
        }
      }
    },
    async calculateRoute(coordinates) {
      const [origin, destination] = coordinates
      let directionsService = new google.maps.DirectionsService();
      directionsService.route({
        origin: { lng: parseFloat(origin.split(',')[0]), lat: parseFloat(origin.split(',')[1])}, // Haight.
        destination: { lng: parseFloat(destination.split(',')[0]), lat: parseFloat(destination.split(',')[1]) }, // Ocean Beach. 
        travelMode: google.maps.TravelMode.BICYCLING
      }, this.setDirections)
    },
    async getLeisureRoutes(options) {
     const data = await axios.get(leisureRouteEndpoint(this.computePositionForEndpoint(this.position), options))
     return data.data.marker[0]['@attributes'].coordinates
    },
    initMap() {
     const map = new google.maps.Map(document.getElementById('map'), {
      center: this.position,
        zoom: 18,
        mapId: '73096215c34dca50'
      });
      const bikeLayer = new google.maps.BicyclingLayer();
      bikeLayer.setMap(map);
      this.map = map
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
  template: `<div><div id='map'></div><leisure-routes @get-leisure-options='setRoute'/></div>`
}