var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ClasificacinSupervisadaWARNES_1 = new ol.format.GeoJSON();
var features_ClasificacinSupervisadaWARNES_1 = format_ClasificacinSupervisadaWARNES_1.readFeatures(json_ClasificacinSupervisadaWARNES_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClasificacinSupervisadaWARNES_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasificacinSupervisadaWARNES_1.addFeatures(features_ClasificacinSupervisadaWARNES_1);
var lyr_ClasificacinSupervisadaWARNES_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasificacinSupervisadaWARNES_1, 
                style: style_ClasificacinSupervisadaWARNES_1,
                popuplayertitle: 'Clasificación Supervisada WARNES',
                interactive: true,
    title: 'Clasificación Supervisada WARNES<br />\
    <img src="styles/legend/ClasificacinSupervisadaWARNES_1_0.png" /> 1 - AGUA<br />\
    <img src="styles/legend/ClasificacinSupervisadaWARNES_1_1.png" /> 2 - CAMINO<br />\
    <img src="styles/legend/ClasificacinSupervisadaWARNES_1_2.png" /> 3 - CULTIVO<br />\
    <img src="styles/legend/ClasificacinSupervisadaWARNES_1_3.png" /> 4 - INFRAESTRUCTURA<br />\
    <img src="styles/legend/ClasificacinSupervisadaWARNES_1_4.png" /> 5 - MAIZ<br />\
    <img src="styles/legend/ClasificacinSupervisadaWARNES_1_5.png" /> 6 - PASTO BRACHIARIA<br />\
    <img src="styles/legend/ClasificacinSupervisadaWARNES_1_6.png" /> 7 - PASTO BRAQUIARA<br />\
    <img src="styles/legend/ClasificacinSupervisadaWARNES_1_7.png" /> 8 - PASTO BRIZANTA<br />\
    <img src="styles/legend/ClasificacinSupervisadaWARNES_1_8.png" /> 9 - PASTO TAIWAN<br />\
    <img src="styles/legend/ClasificacinSupervisadaWARNES_1_9.png" /> 10 - VEGETACION<br />' });
var format_ClasificacinSupervisadaTRINCHERA_2 = new ol.format.GeoJSON();
var features_ClasificacinSupervisadaTRINCHERA_2 = format_ClasificacinSupervisadaTRINCHERA_2.readFeatures(json_ClasificacinSupervisadaTRINCHERA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClasificacinSupervisadaTRINCHERA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasificacinSupervisadaTRINCHERA_2.addFeatures(features_ClasificacinSupervisadaTRINCHERA_2);
var lyr_ClasificacinSupervisadaTRINCHERA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasificacinSupervisadaTRINCHERA_2, 
                style: style_ClasificacinSupervisadaTRINCHERA_2,
                popuplayertitle: 'Clasificación Supervisada TRINCHERA',
                interactive: true,
    title: 'Clasificación Supervisada TRINCHERA<br />\
    <img src="styles/legend/ClasificacinSupervisadaTRINCHERA_2_0.png" /> 1 - CAMINO<br />\
    <img src="styles/legend/ClasificacinSupervisadaTRINCHERA_2_1.png" /> 2 - CULTIVO<br />\
    <img src="styles/legend/ClasificacinSupervisadaTRINCHERA_2_2.png" /> 3 - RUTA<br />\
    <img src="styles/legend/ClasificacinSupervisadaTRINCHERA_2_3.png" /> 4 - INFRAESTRUCTURA<br />\
    <img src="styles/legend/ClasificacinSupervisadaTRINCHERA_2_4.png" /> 5 - MAIZ<br />\
    <img src="styles/legend/ClasificacinSupervisadaTRINCHERA_2_5.png" /> 6 - PASTIZAL<br />\
    <img src="styles/legend/ClasificacinSupervisadaTRINCHERA_2_6.png" /> 7 - SUELO DESNUDO<br />\
    <img src="styles/legend/ClasificacinSupervisadaTRINCHERA_2_7.png" /> 8 - VEGETACION DENSA<br />' });
var format_ClasificacinSupervisadaTRESCRUCES_3 = new ol.format.GeoJSON();
var features_ClasificacinSupervisadaTRESCRUCES_3 = format_ClasificacinSupervisadaTRESCRUCES_3.readFeatures(json_ClasificacinSupervisadaTRESCRUCES_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClasificacinSupervisadaTRESCRUCES_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasificacinSupervisadaTRESCRUCES_3.addFeatures(features_ClasificacinSupervisadaTRESCRUCES_3);
var lyr_ClasificacinSupervisadaTRESCRUCES_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasificacinSupervisadaTRESCRUCES_3, 
                style: style_ClasificacinSupervisadaTRESCRUCES_3,
                popuplayertitle: 'Clasificación Supervisada TRES CRUCES',
                interactive: true,
    title: 'Clasificación Supervisada TRES CRUCES<br />\
    <img src="styles/legend/ClasificacinSupervisadaTRESCRUCES_3_0.png" /> 1 - AGUA<br />\
    <img src="styles/legend/ClasificacinSupervisadaTRESCRUCES_3_1.png" /> 2 - ARBOLES<br />\
    <img src="styles/legend/ClasificacinSupervisadaTRESCRUCES_3_2.png" /> 3 - CAMINO<br />\
    <img src="styles/legend/ClasificacinSupervisadaTRESCRUCES_3_3.png" /> 4 - CULTIVO<br />\
    <img src="styles/legend/ClasificacinSupervisadaTRESCRUCES_3_4.png" /> 5 - INFRAESTRUCTURA<br />\
    <img src="styles/legend/ClasificacinSupervisadaTRESCRUCES_3_5.png" /> 6 - PASTIZAL<br />\
    <img src="styles/legend/ClasificacinSupervisadaTRESCRUCES_3_6.png" /> 7 - PASTO BOMBAZA<br />\
    <img src="styles/legend/ClasificacinSupervisadaTRESCRUCES_3_7.png" /> 8 - PASTO FORRAJERO<br />\
    <img src="styles/legend/ClasificacinSupervisadaTRESCRUCES_3_8.png" /> 9 - PASTO GATOMPANIA<br />\
    <img src="styles/legend/ClasificacinSupervisadaTRESCRUCES_3_9.png" /> 10 - SOYA<br />\
    <img src="styles/legend/ClasificacinSupervisadaTRESCRUCES_3_10.png" /> 11 - SUELO EN DESCANSO<br />\
    <img src="styles/legend/ClasificacinSupervisadaTRESCRUCES_3_11.png" /> 12 - VEGETACION<br />' });
var format_ClasificacinSupervisadaTHULAWINTHO_4 = new ol.format.GeoJSON();
var features_ClasificacinSupervisadaTHULAWINTHO_4 = format_ClasificacinSupervisadaTHULAWINTHO_4.readFeatures(json_ClasificacinSupervisadaTHULAWINTHO_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClasificacinSupervisadaTHULAWINTHO_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasificacinSupervisadaTHULAWINTHO_4.addFeatures(features_ClasificacinSupervisadaTHULAWINTHO_4);
var lyr_ClasificacinSupervisadaTHULAWINTHO_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasificacinSupervisadaTHULAWINTHO_4, 
                style: style_ClasificacinSupervisadaTHULAWINTHO_4,
                popuplayertitle: 'Clasificación Supervisada THULAWINTHO',
                interactive: true,
    title: 'Clasificación Supervisada THULAWINTHO<br />\
    <img src="styles/legend/ClasificacinSupervisadaTHULAWINTHO_4_0.png" /> 1 - AGUA<br />\
    <img src="styles/legend/ClasificacinSupervisadaTHULAWINTHO_4_1.png" /> 2 - CULTIVO<br />\
    <img src="styles/legend/ClasificacinSupervisadaTHULAWINTHO_4_2.png" /> 3 - PAPA<br />\
    <img src="styles/legend/ClasificacinSupervisadaTHULAWINTHO_4_3.png" /> 4 - INFRAESTRUCTURA<br />\
    <img src="styles/legend/ClasificacinSupervisadaTHULAWINTHO_4_4.png" /> 5 - PASTIZAL<br />\
    <img src="styles/legend/ClasificacinSupervisadaTHULAWINTHO_4_5.png" /> 6 - SUELO DESNUDO<br />' });
var format_ClasificacinSupervisadaSALANCACHI_5 = new ol.format.GeoJSON();
var features_ClasificacinSupervisadaSALANCACHI_5 = format_ClasificacinSupervisadaSALANCACHI_5.readFeatures(json_ClasificacinSupervisadaSALANCACHI_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClasificacinSupervisadaSALANCACHI_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasificacinSupervisadaSALANCACHI_5.addFeatures(features_ClasificacinSupervisadaSALANCACHI_5);
var lyr_ClasificacinSupervisadaSALANCACHI_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasificacinSupervisadaSALANCACHI_5, 
                style: style_ClasificacinSupervisadaSALANCACHI_5,
                popuplayertitle: 'Clasificación Supervisada SALANCACHI',
                interactive: true,
    title: 'Clasificación Supervisada SALANCACHI<br />\
    <img src="styles/legend/ClasificacinSupervisadaSALANCACHI_5_0.png" /> 1 - AGUA<br />\
    <img src="styles/legend/ClasificacinSupervisadaSALANCACHI_5_1.png" /> 2 - CAMINO<br />\
    <img src="styles/legend/ClasificacinSupervisadaSALANCACHI_5_2.png" /> 3 - INFRAESTRUCTURA<br />\
    <img src="styles/legend/ClasificacinSupervisadaSALANCACHI_5_3.png" /> 4 - MAIZ<br />\
    <img src="styles/legend/ClasificacinSupervisadaSALANCACHI_5_4.png" /> 5 - PAPA<br />\
    <img src="styles/legend/ClasificacinSupervisadaSALANCACHI_5_5.png" /> 6 - SUELO<br />\
    <img src="styles/legend/ClasificacinSupervisadaSALANCACHI_5_6.png" /> 7 - VEGETACION<br />' });
var format_ClasificacinSupervisadaPOZOALMAR_6 = new ol.format.GeoJSON();
var features_ClasificacinSupervisadaPOZOALMAR_6 = format_ClasificacinSupervisadaPOZOALMAR_6.readFeatures(json_ClasificacinSupervisadaPOZOALMAR_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClasificacinSupervisadaPOZOALMAR_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasificacinSupervisadaPOZOALMAR_6.addFeatures(features_ClasificacinSupervisadaPOZOALMAR_6);
var lyr_ClasificacinSupervisadaPOZOALMAR_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasificacinSupervisadaPOZOALMAR_6, 
                style: style_ClasificacinSupervisadaPOZOALMAR_6,
                popuplayertitle: 'Clasificación Supervisada POZO AL MAR',
                interactive: true,
    title: 'Clasificación Supervisada POZO AL MAR<br />\
    <img src="styles/legend/ClasificacinSupervisadaPOZOALMAR_6_0.png" /> 1 - AGUA<br />\
    <img src="styles/legend/ClasificacinSupervisadaPOZOALMAR_6_1.png" /> 2 - CAMINO<br />\
    <img src="styles/legend/ClasificacinSupervisadaPOZOALMAR_6_2.png" /> 3 - COLINA<br />\
    <img src="styles/legend/ClasificacinSupervisadaPOZOALMAR_6_3.png" /> 4 - CULTIVO<br />\
    <img src="styles/legend/ClasificacinSupervisadaPOZOALMAR_6_4.png" /> 5 - INFRAESTRUCTURA<br />\
    <img src="styles/legend/ClasificacinSupervisadaPOZOALMAR_6_5.png" /> 6 - PASTIZAL<br />\
    <img src="styles/legend/ClasificacinSupervisadaPOZOALMAR_6_6.png" /> 7 - QUINUA<br />\
    <img src="styles/legend/ClasificacinSupervisadaPOZOALMAR_6_7.png" /> 8 - SUELO<br />\
    <img src="styles/legend/ClasificacinSupervisadaPOZOALMAR_6_8.png" /> 9 - SUELO_DESNUDO<br />\
    <img src="styles/legend/ClasificacinSupervisadaPOZOALMAR_6_9.png" /> 10 - VEGETACION<br />' });
var format_ClasificacinSupervisadaMEDIALUNA_7 = new ol.format.GeoJSON();
var features_ClasificacinSupervisadaMEDIALUNA_7 = format_ClasificacinSupervisadaMEDIALUNA_7.readFeatures(json_ClasificacinSupervisadaMEDIALUNA_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClasificacinSupervisadaMEDIALUNA_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasificacinSupervisadaMEDIALUNA_7.addFeatures(features_ClasificacinSupervisadaMEDIALUNA_7);
var lyr_ClasificacinSupervisadaMEDIALUNA_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasificacinSupervisadaMEDIALUNA_7, 
                style: style_ClasificacinSupervisadaMEDIALUNA_7,
                popuplayertitle: 'Clasificación Supervisada MEDIA LUNA',
                interactive: true,
    title: 'Clasificación Supervisada MEDIA LUNA<br />\
    <img src="styles/legend/ClasificacinSupervisadaMEDIALUNA_7_0.png" /> 1 - AGUA<br />\
    <img src="styles/legend/ClasificacinSupervisadaMEDIALUNA_7_1.png" /> 2 - ALFALFA<br />\
    <img src="styles/legend/ClasificacinSupervisadaMEDIALUNA_7_2.png" /> 3 - ARBEJA<br />\
    <img src="styles/legend/ClasificacinSupervisadaMEDIALUNA_7_3.png" /> 4 - BETERRAGA<br />\
    <img src="styles/legend/ClasificacinSupervisadaMEDIALUNA_7_4.png" /> 5 - CAMINO<br />\
    <img src="styles/legend/ClasificacinSupervisadaMEDIALUNA_7_5.png" /> 6 - CAMOTE<br />\
    <img src="styles/legend/ClasificacinSupervisadaMEDIALUNA_7_6.png" /> 7 - CEBOLLA<br />\
    <img src="styles/legend/ClasificacinSupervisadaMEDIALUNA_7_7.png" /> 8 - COLIFLOR<br />\
    <img src="styles/legend/ClasificacinSupervisadaMEDIALUNA_7_8.png" /> 9 - CULTIVO<br />\
    <img src="styles/legend/ClasificacinSupervisadaMEDIALUNA_7_9.png" /> 10 - FRUTALES<br />\
    <img src="styles/legend/ClasificacinSupervisadaMEDIALUNA_7_10.png" /> 11 - HABA<br />\
    <img src="styles/legend/ClasificacinSupervisadaMEDIALUNA_7_11.png" /> 12 - INFRAESTRUCTURA<br />\
    <img src="styles/legend/ClasificacinSupervisadaMEDIALUNA_7_12.png" /> 13 - MAIZ<br />\
    <img src="styles/legend/ClasificacinSupervisadaMEDIALUNA_7_13.png" /> 14 - PAPA<br />\
    <img src="styles/legend/ClasificacinSupervisadaMEDIALUNA_7_14.png" /> 15 - SUELO<br />\
    <img src="styles/legend/ClasificacinSupervisadaMEDIALUNA_7_15.png" /> 16 - TOMATE<br />\
    <img src="styles/legend/ClasificacinSupervisadaMEDIALUNA_7_16.png" /> 17 - VEGETACION<br />\
    <img src="styles/legend/ClasificacinSupervisadaMEDIALUNA_7_17.png" /> 18 - ZAPALLO<br />' });
var format_ClasificacinSupervisadaLACAHUARCA_8 = new ol.format.GeoJSON();
var features_ClasificacinSupervisadaLACAHUARCA_8 = format_ClasificacinSupervisadaLACAHUARCA_8.readFeatures(json_ClasificacinSupervisadaLACAHUARCA_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClasificacinSupervisadaLACAHUARCA_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasificacinSupervisadaLACAHUARCA_8.addFeatures(features_ClasificacinSupervisadaLACAHUARCA_8);
var lyr_ClasificacinSupervisadaLACAHUARCA_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasificacinSupervisadaLACAHUARCA_8, 
                style: style_ClasificacinSupervisadaLACAHUARCA_8,
                popuplayertitle: 'Clasificación Supervisada LACAHUARCA',
                interactive: true,
    title: 'Clasificación Supervisada LACAHUARCA<br />\
    <img src="styles/legend/ClasificacinSupervisadaLACAHUARCA_8_0.png" /> 1 - AGUA<br />\
    <img src="styles/legend/ClasificacinSupervisadaLACAHUARCA_8_1.png" /> 2- CAFE<br />\
    <img src="styles/legend/ClasificacinSupervisadaLACAHUARCA_8_2.png" /> 3 - CAMINO<br />\
    <img src="styles/legend/ClasificacinSupervisadaLACAHUARCA_8_3.png" /> 4 - COCA<br />\
    <img src="styles/legend/ClasificacinSupervisadaLACAHUARCA_8_4.png" /> 5 - FRUTAL<br />\
    <img src="styles/legend/ClasificacinSupervisadaLACAHUARCA_8_5.png" /> 6 - INFRAESTRUCTURA<br />\
    <img src="styles/legend/ClasificacinSupervisadaLACAHUARCA_8_6.png" /> 7 - LECHUGA<br />\
    <img src="styles/legend/ClasificacinSupervisadaLACAHUARCA_8_7.png" /> 8 - MAIZ<br />\
    <img src="styles/legend/ClasificacinSupervisadaLACAHUARCA_8_8.png" /> 9 - MANDARINA<br />\
    <img src="styles/legend/ClasificacinSupervisadaLACAHUARCA_8_9.png" /> 10 - PLATANO<br />\
    <img src="styles/legend/ClasificacinSupervisadaLACAHUARCA_8_10.png" /> 11- SUELO<br />\
    <img src="styles/legend/ClasificacinSupervisadaLACAHUARCA_8_11.png" /> 12- VEGETACION<br />' });
var format_ClasificacinSupervisadaLASMARAS_9 = new ol.format.GeoJSON();
var features_ClasificacinSupervisadaLASMARAS_9 = format_ClasificacinSupervisadaLASMARAS_9.readFeatures(json_ClasificacinSupervisadaLASMARAS_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClasificacinSupervisadaLASMARAS_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasificacinSupervisadaLASMARAS_9.addFeatures(features_ClasificacinSupervisadaLASMARAS_9);
var lyr_ClasificacinSupervisadaLASMARAS_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasificacinSupervisadaLASMARAS_9, 
                style: style_ClasificacinSupervisadaLASMARAS_9,
                popuplayertitle: 'Clasificación Supervisada LAS MARAS',
                interactive: true,
    title: 'Clasificación Supervisada LAS MARAS<br />\
    <img src="styles/legend/ClasificacinSupervisadaLASMARAS_9_0.png" /> 1 - AGUA<br />\
    <img src="styles/legend/ClasificacinSupervisadaLASMARAS_9_1.png" /> 2 - ARBOLES<br />\
    <img src="styles/legend/ClasificacinSupervisadaLASMARAS_9_2.png" /> 3 - CAMINO<br />\
    <img src="styles/legend/ClasificacinSupervisadaLASMARAS_9_3.png" /> 4 - CAÑA DE AZUCAR<br />\
    <img src="styles/legend/ClasificacinSupervisadaLASMARAS_9_4.png" /> 5 - CULTIVO<br />\
    <img src="styles/legend/ClasificacinSupervisadaLASMARAS_9_5.png" /> 6 - INFRAESTRUCTURA<br />\
    <img src="styles/legend/ClasificacinSupervisadaLASMARAS_9_6.png" /> 7 - PASTIZAL<br />\
    <img src="styles/legend/ClasificacinSupervisadaLASMARAS_9_7.png" /> 8 - PASTO BRACHIARIA<br />\
    <img src="styles/legend/ClasificacinSupervisadaLASMARAS_9_8.png" /> 9 - PASTO TAIWAN<br />\
    <img src="styles/legend/ClasificacinSupervisadaLASMARAS_9_9.png" /> 10 - SOYA<br />\
    <img src="styles/legend/ClasificacinSupervisadaLASMARAS_9_10.png" /> 11 - SUELO EN DESCANSO<br />\
    <img src="styles/legend/ClasificacinSupervisadaLASMARAS_9_11.png" /> 12 - VEGETACION<br />' });
var format_ClasificacinSupervisadaELCARMENELDORADO_10 = new ol.format.GeoJSON();
var features_ClasificacinSupervisadaELCARMENELDORADO_10 = format_ClasificacinSupervisadaELCARMENELDORADO_10.readFeatures(json_ClasificacinSupervisadaELCARMENELDORADO_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClasificacinSupervisadaELCARMENELDORADO_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasificacinSupervisadaELCARMENELDORADO_10.addFeatures(features_ClasificacinSupervisadaELCARMENELDORADO_10);
var lyr_ClasificacinSupervisadaELCARMENELDORADO_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasificacinSupervisadaELCARMENELDORADO_10, 
                style: style_ClasificacinSupervisadaELCARMENELDORADO_10,
                popuplayertitle: 'Clasificación Supervisada EL CARMEN EL DORADO',
                interactive: true,
    title: 'Clasificación Supervisada EL CARMEN EL DORADO<br />\
    <img src="styles/legend/ClasificacinSupervisadaELCARMENELDORADO_10_0.png" /> 1 - ARROZ<br />\
    <img src="styles/legend/ClasificacinSupervisadaELCARMENELDORADO_10_1.png" /> 2 - CAMINO<br />\
    <img src="styles/legend/ClasificacinSupervisadaELCARMENELDORADO_10_2.png" /> 3 - CULTIVO<br />\
    <img src="styles/legend/ClasificacinSupervisadaELCARMENELDORADO_10_3.png" /> 4 - MAIZ<br />\
    <img src="styles/legend/ClasificacinSupervisadaELCARMENELDORADO_10_4.png" /> 5 - PAPAYA<br />\
    <img src="styles/legend/ClasificacinSupervisadaELCARMENELDORADO_10_5.png" /> 6 - PLATANO<br />\
    <img src="styles/legend/ClasificacinSupervisadaELCARMENELDORADO_10_6.png" /> 7 - SOYA<br />\
    <img src="styles/legend/ClasificacinSupervisadaELCARMENELDORADO_10_7.png" /> 8 - VEGETACION<br />' });
var format_ClasificacinSupervisadaKORYMAYU_11 = new ol.format.GeoJSON();
var features_ClasificacinSupervisadaKORYMAYU_11 = format_ClasificacinSupervisadaKORYMAYU_11.readFeatures(json_ClasificacinSupervisadaKORYMAYU_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClasificacinSupervisadaKORYMAYU_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasificacinSupervisadaKORYMAYU_11.addFeatures(features_ClasificacinSupervisadaKORYMAYU_11);
var lyr_ClasificacinSupervisadaKORYMAYU_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasificacinSupervisadaKORYMAYU_11, 
                style: style_ClasificacinSupervisadaKORYMAYU_11,
                popuplayertitle: 'Clasificación Supervisada KORY MAYU',
                interactive: true,
    title: 'Clasificación Supervisada KORY MAYU<br />\
    <img src="styles/legend/ClasificacinSupervisadaKORYMAYU_11_0.png" /> 1- AGUA<br />\
    <img src="styles/legend/ClasificacinSupervisadaKORYMAYU_11_1.png" /> 2 - CAMINO<br />\
    <img src="styles/legend/ClasificacinSupervisadaKORYMAYU_11_2.png" /> 3 - CEBOLLA<br />\
    <img src="styles/legend/ClasificacinSupervisadaKORYMAYU_11_3.png" /> 4 - CULTIVO<br />\
    <img src="styles/legend/ClasificacinSupervisadaKORYMAYU_11_4.png" /> 5 - DURAZNO<br />\
    <img src="styles/legend/ClasificacinSupervisadaKORYMAYU_11_5.png" /> 6 - INFRAESTRUCTURA<br />\
    <img src="styles/legend/ClasificacinSupervisadaKORYMAYU_11_6.png" /> 7 - MAIZ<br />\
    <img src="styles/legend/ClasificacinSupervisadaKORYMAYU_11_7.png" /> 8 - PAPA<br />\
    <img src="styles/legend/ClasificacinSupervisadaKORYMAYU_11_8.png" /> 9 - PASTIZAL<br />\
    <img src="styles/legend/ClasificacinSupervisadaKORYMAYU_11_9.png" /> 10 - SUELO<br />\
    <img src="styles/legend/ClasificacinSupervisadaKORYMAYU_11_10.png" /> 11 - VEGETACION<br />' });
var format_ClasificacinSupervisadaCHUNCUSLA_12 = new ol.format.GeoJSON();
var features_ClasificacinSupervisadaCHUNCUSLA_12 = format_ClasificacinSupervisadaCHUNCUSLA_12.readFeatures(json_ClasificacinSupervisadaCHUNCUSLA_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClasificacinSupervisadaCHUNCUSLA_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasificacinSupervisadaCHUNCUSLA_12.addFeatures(features_ClasificacinSupervisadaCHUNCUSLA_12);
var lyr_ClasificacinSupervisadaCHUNCUSLA_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasificacinSupervisadaCHUNCUSLA_12, 
                style: style_ClasificacinSupervisadaCHUNCUSLA_12,
                popuplayertitle: 'Clasificación Supervisada CHUNCUSLA',
                interactive: true,
    title: 'Clasificación Supervisada CHUNCUSLA<br />\
    <img src="styles/legend/ClasificacinSupervisadaCHUNCUSLA_12_0.png" /> 1 - AGUA<br />\
    <img src="styles/legend/ClasificacinSupervisadaCHUNCUSLA_12_1.png" /> 2 - CAMINO<br />\
    <img src="styles/legend/ClasificacinSupervisadaCHUNCUSLA_12_2.png" /> 3 - CEBOLLA<br />\
    <img src="styles/legend/ClasificacinSupervisadaCHUNCUSLA_12_3.png" /> 4 - CULTIVO<br />\
    <img src="styles/legend/ClasificacinSupervisadaCHUNCUSLA_12_4.png" /> 5 - MAIZ<br />\
    <img src="styles/legend/ClasificacinSupervisadaCHUNCUSLA_12_5.png" /> 6 - POROTO<br />\
    <img src="styles/legend/ClasificacinSupervisadaCHUNCUSLA_12_6.png" /> 7 - VEGETACION<br />' });
var format_ClasificacinSupervisadaCAIMANES_13 = new ol.format.GeoJSON();
var features_ClasificacinSupervisadaCAIMANES_13 = format_ClasificacinSupervisadaCAIMANES_13.readFeatures(json_ClasificacinSupervisadaCAIMANES_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClasificacinSupervisadaCAIMANES_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasificacinSupervisadaCAIMANES_13.addFeatures(features_ClasificacinSupervisadaCAIMANES_13);
var lyr_ClasificacinSupervisadaCAIMANES_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasificacinSupervisadaCAIMANES_13, 
                style: style_ClasificacinSupervisadaCAIMANES_13,
                popuplayertitle: 'Clasificación Supervisada CAIMANES',
                interactive: true,
    title: 'Clasificación Supervisada CAIMANES<br />\
    <img src="styles/legend/ClasificacinSupervisadaCAIMANES_13_0.png" /> 1 - ARROZ<br />\
    <img src="styles/legend/ClasificacinSupervisadaCAIMANES_13_1.png" /> 2 - CAMINO<br />\
    <img src="styles/legend/ClasificacinSupervisadaCAIMANES_13_2.png" /> 3 - CULTIVO<br />\
    <img src="styles/legend/ClasificacinSupervisadaCAIMANES_13_3.png" /> 4 - INFRAESTRUCTURA<br />\
    <img src="styles/legend/ClasificacinSupervisadaCAIMANES_13_4.png" /> 5 - LIMON<br />\
    <img src="styles/legend/ClasificacinSupervisadaCAIMANES_13_5.png" /> 6 - MAIZ<br />\
    <img src="styles/legend/ClasificacinSupervisadaCAIMANES_13_6.png" /> 7 - PASTO BOMBAZA<br />\
    <img src="styles/legend/ClasificacinSupervisadaCAIMANES_13_7.png" /> 8 - PASTO PANGOLA<br />\
    <img src="styles/legend/ClasificacinSupervisadaCAIMANES_13_8.png" /> 9 - PLATANO<br />\
    <img src="styles/legend/ClasificacinSupervisadaCAIMANES_13_9.png" /> 10 - SOYA<br />\
    <img src="styles/legend/ClasificacinSupervisadaCAIMANES_13_10.png" /> 11 - VEGETACION<br />\
    <img src="styles/legend/ClasificacinSupervisadaCAIMANES_13_11.png" /> 12 - YUCA<br />' });
var format_ClasificacinSupervisadaBRECHAH_14 = new ol.format.GeoJSON();
var features_ClasificacinSupervisadaBRECHAH_14 = format_ClasificacinSupervisadaBRECHAH_14.readFeatures(json_ClasificacinSupervisadaBRECHAH_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClasificacinSupervisadaBRECHAH_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasificacinSupervisadaBRECHAH_14.addFeatures(features_ClasificacinSupervisadaBRECHAH_14);
var lyr_ClasificacinSupervisadaBRECHAH_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasificacinSupervisadaBRECHAH_14, 
                style: style_ClasificacinSupervisadaBRECHAH_14,
                popuplayertitle: 'Clasificación Supervisada BRECHA H',
                interactive: true,
    title: 'Clasificación Supervisada BRECHA H<br />\
    <img src="styles/legend/ClasificacinSupervisadaBRECHAH_14_0.png" /> 1 - AGUA<br />\
    <img src="styles/legend/ClasificacinSupervisadaBRECHAH_14_1.png" /> 2 - ARROZ<br />\
    <img src="styles/legend/ClasificacinSupervisadaBRECHAH_14_2.png" /> 3 - CACAO<br />\
    <img src="styles/legend/ClasificacinSupervisadaBRECHAH_14_3.png" /> 4 - CAMINO<br />\
    <img src="styles/legend/ClasificacinSupervisadaBRECHAH_14_4.png" /> 5 - CITRICOS<br />\
    <img src="styles/legend/ClasificacinSupervisadaBRECHAH_14_5.png" /> 6 - CULTIVO<br />\
    <img src="styles/legend/ClasificacinSupervisadaBRECHAH_14_6.png" /> 7 - INFRAESTRUCTURA<br />\
    <img src="styles/legend/ClasificacinSupervisadaBRECHAH_14_7.png" /> 8 - PLATANO<br />\
    <img src="styles/legend/ClasificacinSupervisadaBRECHAH_14_8.png" /> 9 - VEGETACION<br />' });
var format_ClasificacinSupervisada25DEMAYO_15 = new ol.format.GeoJSON();
var features_ClasificacinSupervisada25DEMAYO_15 = format_ClasificacinSupervisada25DEMAYO_15.readFeatures(json_ClasificacinSupervisada25DEMAYO_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClasificacinSupervisada25DEMAYO_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasificacinSupervisada25DEMAYO_15.addFeatures(features_ClasificacinSupervisada25DEMAYO_15);
var lyr_ClasificacinSupervisada25DEMAYO_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasificacinSupervisada25DEMAYO_15, 
                style: style_ClasificacinSupervisada25DEMAYO_15,
                popuplayertitle: 'Clasificación Supervisada 25 DE MAYO',
                interactive: true,
    title: 'Clasificación Supervisada 25 DE MAYO<br />\
    <img src="styles/legend/ClasificacinSupervisada25DEMAYO_15_0.png" /> 1 - AGUA<br />\
    <img src="styles/legend/ClasificacinSupervisada25DEMAYO_15_1.png" /> 2 - ALGODON<br />\
    <img src="styles/legend/ClasificacinSupervisada25DEMAYO_15_2.png" /> 3 - ARBOLES<br />\
    <img src="styles/legend/ClasificacinSupervisada25DEMAYO_15_3.png" /> 4 - CAMINO<br />\
    <img src="styles/legend/ClasificacinSupervisada25DEMAYO_15_4.png" /> 5 - CULTIVO<br />\
    <img src="styles/legend/ClasificacinSupervisada25DEMAYO_15_5.png" /> 6 - INFRAESTRUCTURA<br />\
    <img src="styles/legend/ClasificacinSupervisada25DEMAYO_15_6.png" /> 7 - PASTIZAL<br />\
    <img src="styles/legend/ClasificacinSupervisada25DEMAYO_15_7.png" /> 8 - PASTO BOMBAZA<br />\
    <img src="styles/legend/ClasificacinSupervisada25DEMAYO_15_8.png" /> 9 - PASTO GATOMPANIA<br />\
    <img src="styles/legend/ClasificacinSupervisada25DEMAYO_15_9.png" /> 10 - SOYA<br />\
    <img src="styles/legend/ClasificacinSupervisada25DEMAYO_15_10.png" /> 11 - SUELO EN DESCANSO<br />\
    <img src="styles/legend/ClasificacinSupervisada25DEMAYO_15_11.png" /> 12 - VEGETACION<br />' });
var format_Departamentos_16 = new ol.format.GeoJSON();
var features_Departamentos_16 = format_Departamentos_16.readFeatures(json_Departamentos_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamentos_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamentos_16.addFeatures(features_Departamentos_16);
var lyr_Departamentos_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Departamentos_16, 
                style: style_Departamentos_16,
                popuplayertitle: 'Departamentos',
                interactive: false,
                title: '<img src="styles/legend/Departamentos_16.png" /> Departamentos'
            });
var format_Municipios_17 = new ol.format.GeoJSON();
var features_Municipios_17 = format_Municipios_17.readFeatures(json_Municipios_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipios_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipios_17.addFeatures(features_Municipios_17);
var lyr_Municipios_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Municipios_17,
maxResolution:168.0267969135718,
 
                style: style_Municipios_17,
                popuplayertitle: 'Municipios',
                interactive: false,
                title: '<img src="styles/legend/Municipios_17.png" /> Municipios'
            });
var format_PerimetroABA_18 = new ol.format.GeoJSON();
var features_PerimetroABA_18 = format_PerimetroABA_18.readFeatures(json_PerimetroABA_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PerimetroABA_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PerimetroABA_18.addFeatures(features_PerimetroABA_18);
var lyr_PerimetroABA_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PerimetroABA_18, 
                style: style_PerimetroABA_18,
                popuplayertitle: 'Perimetro ABA',
                interactive: true,
                title: '<img src="styles/legend/PerimetroABA_18.png" /> Perimetro ABA'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_ClasificacinSupervisadaWARNES_1.setVisible(true);lyr_ClasificacinSupervisadaTRINCHERA_2.setVisible(true);lyr_ClasificacinSupervisadaTRESCRUCES_3.setVisible(true);lyr_ClasificacinSupervisadaTHULAWINTHO_4.setVisible(true);lyr_ClasificacinSupervisadaSALANCACHI_5.setVisible(true);lyr_ClasificacinSupervisadaPOZOALMAR_6.setVisible(true);lyr_ClasificacinSupervisadaMEDIALUNA_7.setVisible(true);lyr_ClasificacinSupervisadaLACAHUARCA_8.setVisible(true);lyr_ClasificacinSupervisadaLASMARAS_9.setVisible(true);lyr_ClasificacinSupervisadaELCARMENELDORADO_10.setVisible(true);lyr_ClasificacinSupervisadaKORYMAYU_11.setVisible(true);lyr_ClasificacinSupervisadaCHUNCUSLA_12.setVisible(true);lyr_ClasificacinSupervisadaCAIMANES_13.setVisible(true);lyr_ClasificacinSupervisadaBRECHAH_14.setVisible(true);lyr_ClasificacinSupervisada25DEMAYO_15.setVisible(true);lyr_Departamentos_16.setVisible(true);lyr_Municipios_17.setVisible(true);lyr_PerimetroABA_18.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ClasificacinSupervisadaWARNES_1,lyr_ClasificacinSupervisadaTRINCHERA_2,lyr_ClasificacinSupervisadaTRESCRUCES_3,lyr_ClasificacinSupervisadaTHULAWINTHO_4,lyr_ClasificacinSupervisadaSALANCACHI_5,lyr_ClasificacinSupervisadaPOZOALMAR_6,lyr_ClasificacinSupervisadaMEDIALUNA_7,lyr_ClasificacinSupervisadaLACAHUARCA_8,lyr_ClasificacinSupervisadaLASMARAS_9,lyr_ClasificacinSupervisadaELCARMENELDORADO_10,lyr_ClasificacinSupervisadaKORYMAYU_11,lyr_ClasificacinSupervisadaCHUNCUSLA_12,lyr_ClasificacinSupervisadaCAIMANES_13,lyr_ClasificacinSupervisadaBRECHAH_14,lyr_ClasificacinSupervisada25DEMAYO_15,lyr_Departamentos_16,lyr_Municipios_17,lyr_PerimetroABA_18];
lyr_ClasificacinSupervisadaWARNES_1.set('fieldAliases', {'Clase': 'Clase', 'Region': 'Region', 'Superficie': 'Superficie', 'Cultivo': 'Cultivo', });
lyr_ClasificacinSupervisadaTRINCHERA_2.set('fieldAliases', {'Clase': 'Clase', 'Region': 'Region', 'Superficie': 'Superficie', 'Cultivo': 'Cultivo', });
lyr_ClasificacinSupervisadaTRESCRUCES_3.set('fieldAliases', {'Clase': 'Clase', 'Region': 'Region', 'Superficie': 'Superficie', 'Cultivo': 'Cultivo', });
lyr_ClasificacinSupervisadaTHULAWINTHO_4.set('fieldAliases', {'Clase': 'Clase', 'Region': 'Region', 'Cultivo': 'Cultivo', 'Superficie': 'Superficie', });
lyr_ClasificacinSupervisadaSALANCACHI_5.set('fieldAliases', {'Clase': 'Clase', 'Region': 'Region', 'Cultivo': 'Cultivo', 'Superficie': 'Superficie', });
lyr_ClasificacinSupervisadaPOZOALMAR_6.set('fieldAliases', {'Clase': 'Clase', 'Region': 'Region', 'Superficie': 'Superficie', 'Cultivo': 'Cultivo', });
lyr_ClasificacinSupervisadaMEDIALUNA_7.set('fieldAliases', {'Clase': 'Clase', 'Region': 'Region', 'Superficie': 'Superficie', 'Cultivo': 'Cultivo', });
lyr_ClasificacinSupervisadaLACAHUARCA_8.set('fieldAliases', {'Clase': 'Clase', 'Region': 'Region', 'Cultivo': 'Cultivo', 'Superficie': 'Superficie', });
lyr_ClasificacinSupervisadaLASMARAS_9.set('fieldAliases', {'Clase': 'Clase', 'Region': 'Region', 'Superficie': 'Superficie', 'Cultivo': 'Cultivo', });
lyr_ClasificacinSupervisadaELCARMENELDORADO_10.set('fieldAliases', {'Clase': 'Clase', 'Region': 'Region', 'Superficie': 'Superficie', 'Cultivo': 'Cultivo', });
lyr_ClasificacinSupervisadaKORYMAYU_11.set('fieldAliases', {'Clase': 'Clase', 'Region': 'Region', 'Superficie': 'Superficie', 'Cultivo': 'Cultivo', });
lyr_ClasificacinSupervisadaCHUNCUSLA_12.set('fieldAliases', {'Clase': 'Clase', 'Region': 'Region', 'Cultivo': 'Cultivo', 'Superficie': 'Superficie', });
lyr_ClasificacinSupervisadaCAIMANES_13.set('fieldAliases', {'Clase': 'Clase', 'Region': 'Region', 'Cultivo': 'Cultivo', 'Superficie': 'Superficie', });
lyr_ClasificacinSupervisadaBRECHAH_14.set('fieldAliases', {'Clase': 'Clase', 'Region': 'Region', 'Superficie': 'Superficie', 'Cultivo': 'Cultivo', });
lyr_ClasificacinSupervisada25DEMAYO_15.set('fieldAliases', {'Clase': 'Clase', 'Region': 'Region', 'Superficie': 'Superficie', 'Cultivo': 'Cultivo', });
lyr_Departamentos_16.set('fieldAliases', {'departamen': 'departamen', });
lyr_Municipios_17.set('fieldAliases', {'id': 'id', 'gid': 'gid', 'c_ut': 'c_ut', 'departamen': 'departamen', 'provincia': 'provincia', 'municipio': 'municipio', 'n°_ley': 'n°_ley', 'fecha_ley': 'fecha_ley', 'zona': 'zona', 'id_ut': 'id_ut', 'bl_comli_m': 'bl_comli_m', 'capital': 'capital', 'c_siot': 'c_siot', 'tioc_aioc': 'tioc_aioc', 'visor': 'visor', });
lyr_PerimetroABA_18.set('fieldAliases', {'Depto.': 'Depto.', 'Provincia': 'Provincia', 'Municipio': 'Municipio', 'Comunidad': 'Comunidad', 'A. Cult.': 'A. Cult.', 'A. no Cul': 'A. no Cul', });
lyr_ClasificacinSupervisadaWARNES_1.set('fieldImages', {'Clase': 'TextEdit', 'Region': 'TextEdit', 'Superficie': 'TextEdit', 'Cultivo': 'TextEdit', });
lyr_ClasificacinSupervisadaTRINCHERA_2.set('fieldImages', {'Clase': 'TextEdit', 'Region': 'TextEdit', 'Superficie': 'TextEdit', 'Cultivo': '', });
lyr_ClasificacinSupervisadaTRESCRUCES_3.set('fieldImages', {'Clase': 'TextEdit', 'Region': 'TextEdit', 'Superficie': '', 'Cultivo': '', });
lyr_ClasificacinSupervisadaTHULAWINTHO_4.set('fieldImages', {'Clase': 'TextEdit', 'Region': 'TextEdit', 'Cultivo': 'TextEdit', 'Superficie': 'TextEdit', });
lyr_ClasificacinSupervisadaSALANCACHI_5.set('fieldImages', {'Clase': 'TextEdit', 'Region': 'TextEdit', 'Cultivo': 'TextEdit', 'Superficie': 'TextEdit', });
lyr_ClasificacinSupervisadaPOZOALMAR_6.set('fieldImages', {'Clase': 'TextEdit', 'Region': 'TextEdit', 'Superficie': 'TextEdit', 'Cultivo': '', });
lyr_ClasificacinSupervisadaMEDIALUNA_7.set('fieldImages', {'Clase': 'TextEdit', 'Region': 'TextEdit', 'Superficie': 'TextEdit', 'Cultivo': '', });
lyr_ClasificacinSupervisadaLACAHUARCA_8.set('fieldImages', {'Clase': 'TextEdit', 'Region': 'TextEdit', 'Cultivo': 'TextEdit', 'Superficie': 'TextEdit', });
lyr_ClasificacinSupervisadaLASMARAS_9.set('fieldImages', {'Clase': 'TextEdit', 'Region': 'TextEdit', 'Superficie': '', 'Cultivo': '', });
lyr_ClasificacinSupervisadaELCARMENELDORADO_10.set('fieldImages', {'Clase': 'TextEdit', 'Region': 'TextEdit', 'Superficie': '', 'Cultivo': '', });
lyr_ClasificacinSupervisadaKORYMAYU_11.set('fieldImages', {'Clase': 'TextEdit', 'Region': 'TextEdit', 'Superficie': 'TextEdit', 'Cultivo': '', });
lyr_ClasificacinSupervisadaCHUNCUSLA_12.set('fieldImages', {'Clase': 'TextEdit', 'Region': 'TextEdit', 'Cultivo': 'TextEdit', 'Superficie': 'TextEdit', });
lyr_ClasificacinSupervisadaCAIMANES_13.set('fieldImages', {'Clase': 'TextEdit', 'Region': 'TextEdit', 'Cultivo': 'TextEdit', 'Superficie': 'TextEdit', });
lyr_ClasificacinSupervisadaBRECHAH_14.set('fieldImages', {'Clase': 'TextEdit', 'Region': 'TextEdit', 'Superficie': '', 'Cultivo': '', });
lyr_ClasificacinSupervisada25DEMAYO_15.set('fieldImages', {'Clase': 'TextEdit', 'Region': 'TextEdit', 'Superficie': 'TextEdit', 'Cultivo': '', });
lyr_Departamentos_16.set('fieldImages', {'departamen': 'TextEdit', });
lyr_Municipios_17.set('fieldImages', {'id': 'TextEdit', 'gid': 'TextEdit', 'c_ut': 'TextEdit', 'departamen': 'TextEdit', 'provincia': 'TextEdit', 'municipio': 'TextEdit', 'n°_ley': 'TextEdit', 'fecha_ley': 'DateTime', 'zona': 'TextEdit', 'id_ut': 'TextEdit', 'bl_comli_m': 'TextEdit', 'capital': 'TextEdit', 'c_siot': 'TextEdit', 'tioc_aioc': 'TextEdit', 'visor': '', });
lyr_PerimetroABA_18.set('fieldImages', {'Depto.': 'TextEdit', 'Provincia': 'TextEdit', 'Municipio': 'TextEdit', 'Comunidad': 'TextEdit', 'A. Cult.': '', 'A. no Cul': '', });
lyr_ClasificacinSupervisadaWARNES_1.set('fieldLabels', {'Clase': 'inline label - always visible', 'Region': 'inline label - always visible', 'Superficie': 'inline label - always visible', 'Cultivo': 'inline label - always visible', });
lyr_ClasificacinSupervisadaTRINCHERA_2.set('fieldLabels', {'Clase': 'inline label - always visible', 'Region': 'inline label - always visible', 'Superficie': 'inline label - always visible', 'Cultivo': 'inline label - always visible', });
lyr_ClasificacinSupervisadaTRESCRUCES_3.set('fieldLabels', {'Clase': 'inline label - always visible', 'Region': 'inline label - always visible', 'Superficie': 'inline label - always visible', 'Cultivo': 'inline label - always visible', });
lyr_ClasificacinSupervisadaTHULAWINTHO_4.set('fieldLabels', {'Clase': 'inline label - always visible', 'Region': 'inline label - always visible', 'Cultivo': 'inline label - always visible', 'Superficie': 'inline label - always visible', });
lyr_ClasificacinSupervisadaSALANCACHI_5.set('fieldLabels', {'Clase': 'inline label - always visible', 'Region': 'inline label - always visible', 'Cultivo': 'inline label - always visible', 'Superficie': 'inline label - always visible', });
lyr_ClasificacinSupervisadaPOZOALMAR_6.set('fieldLabels', {'Clase': 'inline label - always visible', 'Region': 'inline label - always visible', 'Superficie': 'inline label - always visible', 'Cultivo': 'inline label - always visible', });
lyr_ClasificacinSupervisadaMEDIALUNA_7.set('fieldLabels', {'Clase': 'inline label - always visible', 'Region': 'inline label - always visible', 'Superficie': 'inline label - always visible', 'Cultivo': 'inline label - always visible', });
lyr_ClasificacinSupervisadaLACAHUARCA_8.set('fieldLabels', {'Clase': 'inline label - always visible', 'Region': 'inline label - always visible', 'Cultivo': 'inline label - always visible', 'Superficie': 'inline label - always visible', });
lyr_ClasificacinSupervisadaLASMARAS_9.set('fieldLabels', {'Clase': 'inline label - always visible', 'Region': 'inline label - always visible', 'Superficie': 'inline label - always visible', 'Cultivo': 'inline label - always visible', });
lyr_ClasificacinSupervisadaELCARMENELDORADO_10.set('fieldLabels', {'Clase': 'inline label - always visible', 'Region': 'inline label - always visible', 'Superficie': 'inline label - always visible', 'Cultivo': 'inline label - always visible', });
lyr_ClasificacinSupervisadaKORYMAYU_11.set('fieldLabels', {'Clase': 'inline label - always visible', 'Region': 'inline label - always visible', 'Superficie': 'inline label - always visible', 'Cultivo': 'inline label - always visible', });
lyr_ClasificacinSupervisadaCHUNCUSLA_12.set('fieldLabels', {'Clase': 'inline label - always visible', 'Region': 'inline label - always visible', 'Cultivo': 'inline label - always visible', 'Superficie': 'inline label - always visible', });
lyr_ClasificacinSupervisadaCAIMANES_13.set('fieldLabels', {'Clase': 'inline label - always visible', 'Region': 'inline label - always visible', 'Cultivo': 'inline label - always visible', 'Superficie': 'inline label - always visible', });
lyr_ClasificacinSupervisadaBRECHAH_14.set('fieldLabels', {'Clase': 'inline label - always visible', 'Region': 'inline label - always visible', 'Superficie': 'inline label - always visible', 'Cultivo': 'inline label - always visible', });
lyr_ClasificacinSupervisada25DEMAYO_15.set('fieldLabels', {'Clase': 'inline label - always visible', 'Region': 'inline label - always visible', 'Superficie': 'inline label - always visible', 'Cultivo': 'inline label - always visible', });
lyr_Departamentos_16.set('fieldLabels', {'departamen': 'no label', });
lyr_Municipios_17.set('fieldLabels', {'id': 'no label', 'gid': 'no label', 'c_ut': 'no label', 'departamen': 'no label', 'provincia': 'no label', 'municipio': 'no label', 'n°_ley': 'no label', 'fecha_ley': 'no label', 'zona': 'no label', 'id_ut': 'no label', 'bl_comli_m': 'no label', 'capital': 'no label', 'c_siot': 'no label', 'tioc_aioc': 'no label', 'visor': 'no label', });
lyr_PerimetroABA_18.set('fieldLabels', {'Depto.': 'inline label - always visible', 'Provincia': 'inline label - always visible', 'Municipio': 'inline label - always visible', 'Comunidad': 'inline label - always visible', 'A. Cult.': 'inline label - always visible', 'A. no Cul': 'inline label - always visible', });
lyr_PerimetroABA_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});