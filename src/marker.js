const mapboxgl = require('mapbox-gl');

const pinImgs = {
  activity: 'http://i.imgur.com/WbMOfMl.png',
  hotel: 'http://i.imgur.com/D9574Cu.png',
  restaurant: 'http://i.imgur.com/cqR6pUI.png',
};

const makeNewPin = (type, coords) => {
  const newMarkerDOMEl = document.createElement('div');
  newMarkerDOMEl.style.width = "32px";
  newMarkerDOMEl.style.height = "39px";
  newMarkerDOMEl.style.backgroundImage = pinImgs[type];
  const newPin = new mapboxgl.Marker(newMarkerDOMEl).setLngLat(coords);
  return newPin;
}

module.exports.makeNewPin = makeNewPin;
module.exports.pinImgs = pinImgs;
