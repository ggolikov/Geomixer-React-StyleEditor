export const loadAttributes = (layerID) => {
    return fetch(window.serverBase + "VectorLayer/GetVectorAttrValues.ashx?WrapStyle=func&LayerName=" + layerID, {mode: 'cors', credentials: 'include'})
        .then(res => res.text())
        .then(function(str){
            let attrs = JSON.parse(str.substring(1, str.length-1));
            console.log(attrs);

            return Promise.resolve(attrs);
        });
}
