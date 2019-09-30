const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken =
  'pk.eyJ1IjoiZGNodW4xNCIsImEiOiJjazE2azZiMG8wMXZvM25ub3pkdmU1dG96In0.XudGBPq_maCnz0_IpOOhYg';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-87.6354, 41.8885],
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});
