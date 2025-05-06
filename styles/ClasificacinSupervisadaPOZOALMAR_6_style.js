var size = 0;
var placement = 'point';
function categories_ClasificacinSupervisadaPOZOALMAR_6(feature, value, size, resolution, labelText,
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
case 'CAMINO':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(211,211,211,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'COLINA':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(137,122,50,1.0)'}),
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
case 'PASTIZAL':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(157,196,110,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'QUINUA':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(208,199,90,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SUELO':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(193,153,111,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SUELO_DESNUDO':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(210,180,140,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'VEGETACION':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(0,188,53,0.7568627450980392)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_ClasificacinSupervisadaPOZOALMAR_6 = function(feature, resolution){
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
    
    var style = categories_ClasificacinSupervisadaPOZOALMAR_6(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
