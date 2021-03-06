var geoJson;
var map = L.map('map').setView([41.89, -87.61], 12);

var layer = new L.StamenTileLayer("toner-lite");
map.addLayer(layer);

var myStyle = {
  "color": '#ff7800',
  "weight": 5.5,
  "opacity": 0.5
};

var info = L.control({ position: 'bottomleft' });

info.onAdd = function (map) {
  this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
  this.update();
  return this._div;
};

info.update = function (props) {
  this._div.innerHTML = (props ? props.infoText : 'Hover over any trip.');
};

info.addTo(map);


mapTitle = L.control({ position: 'topright' });

mapTitle.onAdd = function (map) {
  this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
  this._div.innerHTML = '<div id="title">DivvyBrags Map</div>';
  this._div.innerHTML += '<div id="subtitle">Alex Soble</div>';
  this._div.innerHTML += '<div id="github-link"><a href="https://github.com/alexsoble/divvy-trips-map">(Code here.)</a></div>';

  return this._div;
};

mapTitle.addTo(map);

var geoJson = L.geoJson(data, {
  style: myStyle,
  onEachFeature: onEachFeature
});


// var sliderControl = L.control.sliderControl({
//   position: "bottomright", layer: tripsData
// });

// Make sure to add the slider to the map ;-)
// map.addControl(sliderControl);

//And initialize the slider
// sliderControl.startSlider();

geoJson.addTo(map);
