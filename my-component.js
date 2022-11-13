import 'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js'
import journeyPlanning from './journey-planning.js'
import leisureRoutes from './leisure-routes.js';
export default {
  compnents: {
    journeyPlanning: journeyPlanning,
    leisureRoutes: leisureRoutes
  },
  data() {
    let position = null;
    let title = 'hey'
    return {position, title}
  },
  mounted() {
    console.log('mounted init')
    this.initMap()
  },
  methods: {
    begin(n) {
      console.log('yo pa',n)
    },
    initMap() {
     const map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 51.531795246662604, lng: -0.21797176148605957},
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
      });
    },
  },
  template: `<div><div id='map'></div><journey-planning @route-planning='begin'/></div>`
}