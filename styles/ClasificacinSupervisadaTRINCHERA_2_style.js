var size = 0;
var placement = 'point';
function categories_ClasificacinSupervisadaTRINCHERA_2(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'CAMINO':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(211,211,211,1.0)'}),
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
case 'FRUTA':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,207,153,1.0)'}),
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
case 'MAIZ':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(137,167,14,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'PASTIZAL':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(157,196,110,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SUELO DESNUDO':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(210,180,140,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'VEGETACION DENSA':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(0,128,0,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_ClasificacinSupervisadaTRINCHERA_2 = function(feature, resolution){
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
    
    var style = categories_ClasificacinSupervisadaTRINCHERA_2(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
