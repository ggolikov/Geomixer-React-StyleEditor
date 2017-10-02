import 'leaflet';
import 'leaflet-geomixer';
import { dataHandler } from './src/js/dataHandler.js';
import { createTab } from './src/js/utils/tabFactory.js';

import './src/js/IconSidebarControl/dist/iconSidebarControl.css';

var m = document.querySelector('#map');
m.style.height = document.documentElement.clientHeight + 'px';
var lp = document.querySelector('.left-panel');
lp.style.height = document.documentElement.clientHeight + 'px';

let osm = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
    }),
    IconSidebarControl = require('./src/js/IconSidebarControl/dist/iconSidebarControl.js'),
    point = L.latLng([55.819723, 37.611661]),
    map = new L.Map('map', {layers: [osm], center: point, zoom: 17, maxZoom: 22}),
    root = document.getElementById('content');
    //
    //
    // /**
    //  *
    //  * SIDEBAR
    //  *
    //  */
    // window.sidebarControl = new IconSidebarControl({
    //     position: "topleft"
    // });
    //
    // map.addControl(window.sidebarControl);
    //
    // document
    //     .querySelector(".iconSidebarControl")
    //     .classList.add("noselect");
    //
    // var leftMainContainer = window.sidebarControl.setPane(
    //     "layers-tree", {
    //         createTab: createTab({
    //             icon: "gmx-icon-choose",
    //             active: "uploadfile-uploadfile-sidebar",
    //             inactive: "uploadfile-uploadfile-sidebar",
    //             hint: "layers-tree"
    //         })
    //     }
    // );
    // leftMainContainer.innerHTML = '<div id="leftMenu" class="leftMenu">' + '<div id="leftPanelHeader" class="leftPanelHeader"></div>' + '<div id="leftContent" class="leftContent">' + '<div id="leftContentInner" class="leftContentInner"></div>' + "</div>" + '<div id="leftPanelFooter" class="leftPanelFooter"></div>' + "</div>";
    //
    // window.sidebarControl.on('opened', function (e) {
    //     switch (e.id) {
    //         case 'layers-tree':
    //             console.log('sdsdsdsd');
    //             break;
    //         default:
    //             break;
    //     }
    // });
    // /**
    //  *
    //  * SIDEBAR END
    //  *
    //  */

let mapPromise = L.gmx.loadMap('4ZICS', {leafletMap: map});

mapPromise.then((gmxMap) => {
    const layer = gmxMap.layersByID['063834BB2D8B40079E26C9A83BFAB034'];
    map.fitBounds(layer.getBounds());
    dataHandler(gmxMap);
});
