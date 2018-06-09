import './src/js/translations.js';
import './src/js/translationsHash.js';
import { dataHandler } from './src/js/dataHandler.js';

window.serverBase = 'http://maps.kosmosnimki.ru/';
var m = document.querySelector('#map');
m.style.height = document.documentElement.clientHeight + 'px';
var lp = document.querySelector('.gmx-style-editor');
lp.style.height = document.documentElement.clientHeight + 'px';

let osm = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
    }),
    // point = L.latLng([55.819723, 37.611661]), zoom = 17, // points
    point = L.latLng([50.075643, 107.58023]), zoom = 7, // lines,

    map = new L.Map('map', {layers: [osm], center: point, zoom: zoom, maxZoom: 22}),
    root = document.getElementById('content');

let mapPromise = L.gmx.loadMap('4ZICS', {leafletMap: map});

mapPromise.then((gmxMap) => {
    // const layer = gmxMap.layersByID['5DFD00DFD3F1454B83360166A058CF8E']; // points
    // const layer = gmxMap.layersByID['FBCEEB06FB004A2DBD568CDBDDBAFAB2']; // lines
    // const layer = gmxMap.layersByID['6963F0B5F73A4147889847555E0C0AF3']; // lines2
    const layer = gmxMap.layersByID['6D5AB48B78484236A3157167446B65BC']; // polys
    map.fitBounds(layer.getBounds());
    dataHandler(gmxMap);
});
