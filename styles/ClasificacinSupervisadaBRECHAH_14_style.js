var size = 0;
var placement = 'point';
function categories_ClasificacinSupervisadaBRECHAH_14(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'AGUA':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(0,0,255,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'ARROZ':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(247,191,135,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'CACAO':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(218,144,60,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'CAMINO':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(211,211,211,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'CITRICOS':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(221,212,85,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'CULTIVO':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,217,1,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'INFRAESTRUCTURA':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(128,128,128,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'PLATANO':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(196,197,93,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'VEGETACION':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(0,188,53,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_ClasificacinSupervisadaBRECHAH_14 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Clase");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_ClasificacinSupervisadaBRECHAH_14(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
