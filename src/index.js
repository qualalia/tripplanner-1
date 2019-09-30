const { makeNewPin } = require('./marker.js');
const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken =
  'pk.eyJ1IjoiZGNodW4xNCIsImEiOiJjazE2azZiMG8wMXZvM25ub3pkdmU1dG96In0.XudGBPq_maCnz0_IpOOhYg';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-87.6354, 41.8885],
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});

const coords = [-87.641, 41.895];
const testPin = makeNewPin('activity', coords).addTo(map);

/* const markerDomEl = document.createElement('div');
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
const newPin = new mapboxgl.Marker(markerDomEl).setLngLat(coords).addTo(map);
*/
