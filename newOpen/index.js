import Map from './ol/Map.js';
import View from './ol/View.js';
import TileLayer from './ol/layer/Tile.js';
import {CartoDB, OSM} from './ol/source.js';

const mapConfig = {
  'layers': [{
    'type': 'cartodb',
    'options': {
      'cartocss_version': '2.1.1',
      'cartocss': '#layer { polygon-fill: #F00; }',
      'sql': 'select * from european_countries_e where area > 0'
    }
  }]
};

const cartoDBSource = new CartoDB({
  account: 'documentation',
  config: mapConfig
});

const map = new Map({
  layers: [
    new TileLayer({
      source: new OSM()
    }),
    new TileLayer({
      source: cartoDBSource
    })
  ],
  target: 'map',
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});

function setArea(n) {
  mapConfig.layers[0].options.sql =
      'select * from european_countries_e where area > ' + n;
  cartoDBSource.setConfig(mapConfig);
}


document.getElementById('country-area').addEventListener('change', function() {
  setArea(this.value);
});

// import 'ol/ol.css';
// import {Map, View} from 'ol';
// import TileLayer from 'ol/layer/Tile';
// import OSM from 'ol/source/OSM';
// import {fromLonLat} from 'ol/proj';

// const map = new Map({
//   target: 'map',
//   layers: [
//     new TileLayer({
//       source: new OSM()
//     })
//   ],
//   view: new View({
//     center: fromLonLat([-0.1275, 51.507222]),
//     zoom: 5
//   })
// });