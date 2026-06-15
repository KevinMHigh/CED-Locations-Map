var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_temp1_1 = new ol.format.GeoJSON();
var features_temp1_1 = format_temp1_1.readFeatures(json_temp1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_temp1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_temp1_1.addFeatures(features_temp1_1);
var lyr_temp1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_temp1_1, 
                style: style_temp1_1,
                popuplayertitle: 'temp1',
                interactive: true,
                title: '<img src="styles/legend/temp1_1.png" /> temp1'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_temp1_1.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_temp1_1];
lyr_temp1_1.set('fieldAliases', {'Company': 'Company', 'Location N': 'Location N', 'Location_1': 'Location_1', 'Location D': 'Location D', 'Is Active': 'Is Active', 'Location M': 'Location M', 'Location P': 'Location P', 'Address': 'Address', 'City': 'City', 'State': 'State', 'Zip': 'Zip', 'Country': 'Country', 'Irving': 'Irving', 'Region': 'Region', 'Division': 'Division', 'District': 'District', 'result_num': 'result_num', 'status': 'status', 'formatted_': 'formatted_', 'place_id': 'place_id', 'location_t': 'location_t', 'latlong': 'latlong', });
lyr_temp1_1.set('fieldImages', {'Company': '', 'Location N': '', 'Location_1': '', 'Location D': '', 'Is Active': '', 'Location M': '', 'Location P': '', 'Address': '', 'City': '', 'State': '', 'Zip': '', 'Country': '', 'Irving': '', 'Region': '', 'Division': '', 'District': '', 'result_num': '', 'status': '', 'formatted_': '', 'place_id': '', 'location_t': '', 'latlong': '', });
lyr_temp1_1.set('fieldLabels', {'Company': 'no label', 'Location N': 'inline label - visible with data', 'Location_1': 'no label', 'Location D': 'no label', 'Is Active': 'no label', 'Location M': 'no label', 'Location P': 'no label', 'Address': 'no label', 'City': 'no label', 'State': 'no label', 'Zip': 'no label', 'Country': 'no label', 'Irving': 'no label', 'Region': 'no label', 'Division': 'no label', 'District': 'no label', 'result_num': 'no label', 'status': 'no label', 'formatted_': 'no label', 'place_id': 'no label', 'location_t': 'no label', 'latlong': 'no label', });
lyr_temp1_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});