import 'leaflet';
import 'leaflet-geomixer';

import { dataHandler } from './src/js/dataHandler.js';

var m = document.querySelector('#map');
m.style.height = document.documentElement.clientHeight + 'px';
var lp = document.querySelector('.left-panel');
lp.style.height = document.documentElement.clientHeight + 'px';

var osm = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
    }),
    point = L.latLng([55.819723, 37.611661]),
    map = new L.Map('map', {layers: [osm], center: point, zoom: 17, maxZoom: 22}),
    root = document.getElementById('content');


// var def = L.gmx.gmxMapManager.loadMapProperties(
//     {
//     	hostName: 'maps.kosmosnimki.ru',
//     	mapName: '4ZICS',
//     	skipTiles: 'all'
//     });
var def = L.gmx.loadMap('4ZICS', {leafletMap: map});
def.then((gmxMap) => {
    const layer = gmxMap.layersByID['063834BB2D8B40079E26C9A83BFAB034'];
    map.fitBounds(layer.getBounds());
    dataHandler(gmxMap);
});
