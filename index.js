import './src/js/translations.js';
import './src/js/translationsHash.js';
import { dataHandler } from './src/js/dataHandler.js';
// import './src/css/gmx.css';

window.serverBase = 'http://maps.kosmosnimki.ru/';
var m = document.querySelector('#map');
m.style.height = document.documentElement.clientHeight + 'px';
var lp = document.querySelector('.gmx-style-editor');
lp.style.height = document.documentElement.clientHeight + 'px';

let osm = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
    }),
    point = L.latLng([55.819723, 37.611661]),
    map = new L.Map('map', {layers: [osm], center: point, zoom: 17, maxZoom: 22}),
    root = document.getElementById('content');

let mapPromise = L.gmx.loadMap('4ZICS', {leafletMap: map});

mapPromise.then((gmxMap) => {
    const layer = gmxMap.layersByID['05D50D053F8A495BB3F59A9AEFE976B8'];
    map.fitBounds(layer.getBounds());
    dataHandler(gmxMap);
});
