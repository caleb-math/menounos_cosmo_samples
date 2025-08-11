var wms_layers = [];


        var lyr_ESRISatelliteArcGISWorld_Imagery_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite (ArcGIS/World_Imagery)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_MenounosSamples_1 = new ol.format.GeoJSON();
var features_MenounosSamples_1 = format_MenounosSamples_1.readFeatures(json_MenounosSamples_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MenounosSamples_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MenounosSamples_1.addFeatures(features_MenounosSamples_1);
var lyr_MenounosSamples_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MenounosSamples_1, 
                style: style_MenounosSamples_1,
                popuplayertitle: 'Menounos Samples',
                interactive: true,
    title: 'Menounos Samples<br />\
    <img src="styles/legend/MenounosSamples_1_0.png" /> Bedrock<br />\
    <img src="styles/legend/MenounosSamples_1_1.png" /> Erratic boulder<br />\
    <img src="styles/legend/MenounosSamples_1_2.png" /> Moraine boulder<br />\
    <img src="styles/legend/MenounosSamples_1_3.png" /> <br />' });

lyr_ESRISatelliteArcGISWorld_Imagery_0.setVisible(true);lyr_MenounosSamples_1.setVisible(true);
var layersList = [lyr_ESRISatelliteArcGISWorld_Imagery_0,lyr_MenounosSamples_1];
lyr_MenounosSamples_1.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'lon': 'lon', 'lat': 'lat', 'elv_m': 'elv_m', 'site_name': 'site_name', 'what': 'what', 'lithology': 'lithology', 'date_collected': 'date_collected', 'sample_url': 'sample_url', 'site_url': 'site_url', 'publications': 'publications', 'nuclide': 'nuclide', 't_St': 't_St', 'dtint_St': 'dtint_St', 't_LSDn': 't_LSDn', 'dtint_LSDn': 'dtint_LSDn', });
lyr_MenounosSamples_1.set('fieldImages', {'fid': '', 'name': '', 'lon': '', 'lat': '', 'elv_m': '', 'site_name': '', 'what': '', 'lithology': '', 'date_collected': '', 'sample_url': '', 'site_url': '', 'publications': '', 'nuclide': '', 't_St': '', 'dtint_St': '', 't_LSDn': '', 'dtint_LSDn': '', });
lyr_MenounosSamples_1.set('fieldLabels', {'fid': 'hidden field', 'name': 'inline label - always visible', 'lon': 'hidden field', 'lat': 'hidden field', 'elv_m': 'inline label - always visible', 'site_name': 'inline label - always visible', 'what': 'inline label - always visible', 'lithology': 'inline label - always visible', 'date_collected': 'inline label - always visible', 'sample_url': 'inline label - always visible', 'site_url': 'hidden field', 'publications': 'inline label - always visible', 'nuclide': 'hidden field', 't_St': 'hidden field', 'dtint_St': 'hidden field', 't_LSDn': 'inline label - visible with data', 'dtint_LSDn': 'hidden field', });
lyr_MenounosSamples_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});