import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

const map = new Map({
  target: 'testmap',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: [42, 0],
    zoom: 0
  })
});
//42°20'14.9"N 72°31'40.8"W

