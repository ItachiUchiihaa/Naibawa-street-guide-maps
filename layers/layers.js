var wms_layers = [];

var format_WORSHIP_CENTERS_0 = new ol.format.GeoJSON();
var features_WORSHIP_CENTERS_0 = format_WORSHIP_CENTERS_0.readFeatures(json_WORSHIP_CENTERS_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WORSHIP_CENTERS_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WORSHIP_CENTERS_0.addFeatures(features_WORSHIP_CENTERS_0);
var lyr_WORSHIP_CENTERS_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WORSHIP_CENTERS_0, 
                style: style_WORSHIP_CENTERS_0,
                interactive: true,
                title: '<img src="styles/legend/WORSHIP_CENTERS_0.png" /> WORSHIP_CENTERS'
            });
var format_SUPERMARKETS_1 = new ol.format.GeoJSON();
var features_SUPERMARKETS_1 = format_SUPERMARKETS_1.readFeatures(json_SUPERMARKETS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUPERMARKETS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUPERMARKETS_1.addFeatures(features_SUPERMARKETS_1);
var lyr_SUPERMARKETS_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUPERMARKETS_1, 
                style: style_SUPERMARKETS_1,
                interactive: true,
                title: '<img src="styles/legend/SUPERMARKETS_1.png" /> SUPERMARKETS'
            });
var format_SCHOOLS_2 = new ol.format.GeoJSON();
var features_SCHOOLS_2 = format_SCHOOLS_2.readFeatures(json_SCHOOLS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCHOOLS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCHOOLS_2.addFeatures(features_SCHOOLS_2);
var lyr_SCHOOLS_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SCHOOLS_2, 
                style: style_SCHOOLS_2,
                interactive: true,
                title: '<img src="styles/legend/SCHOOLS_2.png" /> SCHOOLS'
            });
var format_STREET_3 = new ol.format.GeoJSON();
var features_STREET_3 = format_STREET_3.readFeatures(json_STREET_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_STREET_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STREET_3.addFeatures(features_STREET_3);
var lyr_STREET_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_STREET_3, 
                style: style_STREET_3,
                interactive: true,
                title: '<img src="styles/legend/STREET_3.png" /> STREET'
            });
var format_BOUNDARY_LINE_4 = new ol.format.GeoJSON();
var features_BOUNDARY_LINE_4 = format_BOUNDARY_LINE_4.readFeatures(json_BOUNDARY_LINE_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BOUNDARY_LINE_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BOUNDARY_LINE_4.addFeatures(features_BOUNDARY_LINE_4);
var lyr_BOUNDARY_LINE_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BOUNDARY_LINE_4, 
                style: style_BOUNDARY_LINE_4,
                interactive: true,
                title: '<img src="styles/legend/BOUNDARY_LINE_4.png" /> BOUNDARY_LINE'
            });
var format_PROMINENT_PLACES_5 = new ol.format.GeoJSON();
var features_PROMINENT_PLACES_5 = format_PROMINENT_PLACES_5.readFeatures(json_PROMINENT_PLACES_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PROMINENT_PLACES_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROMINENT_PLACES_5.addFeatures(features_PROMINENT_PLACES_5);
var lyr_PROMINENT_PLACES_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PROMINENT_PLACES_5, 
                style: style_PROMINENT_PLACES_5,
                interactive: true,
                title: '<img src="styles/legend/PROMINENT_PLACES_5.png" /> PROMINENT_PLACES'
            });
var format_MOTOR_PARK_6 = new ol.format.GeoJSON();
var features_MOTOR_PARK_6 = format_MOTOR_PARK_6.readFeatures(json_MOTOR_PARK_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MOTOR_PARK_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MOTOR_PARK_6.addFeatures(features_MOTOR_PARK_6);
var lyr_MOTOR_PARK_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MOTOR_PARK_6, 
                style: style_MOTOR_PARK_6,
                interactive: true,
                title: '<img src="styles/legend/MOTOR_PARK_6.png" /> MOTOR_PARK'
            });
var format_HOTELS_7 = new ol.format.GeoJSON();
var features_HOTELS_7 = format_HOTELS_7.readFeatures(json_HOTELS_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HOTELS_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HOTELS_7.addFeatures(features_HOTELS_7);
var lyr_HOTELS_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HOTELS_7, 
                style: style_HOTELS_7,
                interactive: true,
                title: '<img src="styles/legend/HOTELS_7.png" /> HOTELS'
            });
var format_MAJOR_ROAD_8 = new ol.format.GeoJSON();
var features_MAJOR_ROAD_8 = format_MAJOR_ROAD_8.readFeatures(json_MAJOR_ROAD_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MAJOR_ROAD_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MAJOR_ROAD_8.addFeatures(features_MAJOR_ROAD_8);
var lyr_MAJOR_ROAD_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MAJOR_ROAD_8, 
                style: style_MAJOR_ROAD_8,
                interactive: true,
                title: '<img src="styles/legend/MAJOR_ROAD_8.png" /> MAJOR_ROAD'
            });
var format_MINOR_ROAD_9 = new ol.format.GeoJSON();
var features_MINOR_ROAD_9 = format_MINOR_ROAD_9.readFeatures(json_MINOR_ROAD_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MINOR_ROAD_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MINOR_ROAD_9.addFeatures(features_MINOR_ROAD_9);
var lyr_MINOR_ROAD_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MINOR_ROAD_9, 
                style: style_MINOR_ROAD_9,
                interactive: true,
                title: '<img src="styles/legend/MINOR_ROAD_9.png" /> MINOR_ROAD'
            });
var format_MAJOR_ROAD_10 = new ol.format.GeoJSON();
var features_MAJOR_ROAD_10 = format_MAJOR_ROAD_10.readFeatures(json_MAJOR_ROAD_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MAJOR_ROAD_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MAJOR_ROAD_10.addFeatures(features_MAJOR_ROAD_10);
var lyr_MAJOR_ROAD_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MAJOR_ROAD_10, 
                style: style_MAJOR_ROAD_10,
                interactive: true,
                title: '<img src="styles/legend/MAJOR_ROAD_10.png" /> MAJOR_ROAD'
            });
var format_HEALTH_CENTERS_11 = new ol.format.GeoJSON();
var features_HEALTH_CENTERS_11 = format_HEALTH_CENTERS_11.readFeatures(json_HEALTH_CENTERS_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HEALTH_CENTERS_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HEALTH_CENTERS_11.addFeatures(features_HEALTH_CENTERS_11);
var lyr_HEALTH_CENTERS_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HEALTH_CENTERS_11, 
                style: style_HEALTH_CENTERS_11,
                interactive: true,
                title: '<img src="styles/legend/HEALTH_CENTERS_11.png" /> HEALTH_CENTERS'
            });
var format_GAS_STATION_12 = new ol.format.GeoJSON();
var features_GAS_STATION_12 = format_GAS_STATION_12.readFeatures(json_GAS_STATION_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GAS_STATION_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GAS_STATION_12.addFeatures(features_GAS_STATION_12);
var lyr_GAS_STATION_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GAS_STATION_12, 
                style: style_GAS_STATION_12,
                interactive: true,
                title: '<img src="styles/legend/GAS_STATION_12.png" /> GAS_STATION'
            });
var format_BANKS_13 = new ol.format.GeoJSON();
var features_BANKS_13 = format_BANKS_13.readFeatures(json_BANKS_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANKS_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANKS_13.addFeatures(features_BANKS_13);
var lyr_BANKS_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BANKS_13, 
                style: style_BANKS_13,
                interactive: true,
                title: '<img src="styles/legend/BANKS_13.png" /> BANKS '
            });

lyr_WORSHIP_CENTERS_0.setVisible(true);lyr_SUPERMARKETS_1.setVisible(true);lyr_SCHOOLS_2.setVisible(true);lyr_STREET_3.setVisible(true);lyr_BOUNDARY_LINE_4.setVisible(true);lyr_PROMINENT_PLACES_5.setVisible(true);lyr_MOTOR_PARK_6.setVisible(true);lyr_HOTELS_7.setVisible(true);lyr_MAJOR_ROAD_8.setVisible(true);lyr_MINOR_ROAD_9.setVisible(true);lyr_MAJOR_ROAD_10.setVisible(true);lyr_HEALTH_CENTERS_11.setVisible(true);lyr_GAS_STATION_12.setVisible(true);lyr_BANKS_13.setVisible(true);
var layersList = [lyr_WORSHIP_CENTERS_0,lyr_SUPERMARKETS_1,lyr_SCHOOLS_2,lyr_STREET_3,lyr_BOUNDARY_LINE_4,lyr_PROMINENT_PLACES_5,lyr_MOTOR_PARK_6,lyr_HOTELS_7,lyr_MAJOR_ROAD_8,lyr_MINOR_ROAD_9,lyr_MAJOR_ROAD_10,lyr_HEALTH_CENTERS_11,lyr_GAS_STATION_12,lyr_BANKS_13];
lyr_WORSHIP_CENTERS_0.set('fieldAliases', {'Id': 'Id', 'WORSHIP_CE': 'WORSHIP_CE', });
lyr_SUPERMARKETS_1.set('fieldAliases', {'Id': 'Id', 'MALLS': 'MALLS', });
lyr_SCHOOLS_2.set('fieldAliases', {'Id': 'Id', 'SCHOOL': 'SCHOOL', });
lyr_STREET_3.set('fieldAliases', {'Id': 'Id', 'STREET': 'STREET', });
lyr_BOUNDARY_LINE_4.set('fieldAliases', {'Id': 'Id', });
lyr_PROMINENT_PLACES_5.set('fieldAliases', {'Id': 'Id', 'PROMINENT_': 'PROMINENT_', });
lyr_MOTOR_PARK_6.set('fieldAliases', {'Id': 'Id', 'MOTOR_PARK': 'MOTOR_PARK', });
lyr_HOTELS_7.set('fieldAliases', {'Id': 'Id', 'HOTELS': 'HOTELS', });
lyr_MAJOR_ROAD_8.set('fieldAliases', {'Id': 'Id', 'MAJOR_ROAD': 'MAJOR_ROAD', });
lyr_MINOR_ROAD_9.set('fieldAliases', {'Id': 'Id', 'MINOR_ROAD': 'MINOR_ROAD', });
lyr_MAJOR_ROAD_10.set('fieldAliases', {'Id': 'Id', 'MAJOR_ROAD': 'MAJOR_ROAD', });
lyr_HEALTH_CENTERS_11.set('fieldAliases', {'Id': 'Id', 'HEALTH_CEN': 'HEALTH_CEN', });
lyr_GAS_STATION_12.set('fieldAliases', {'Id': 'Id', 'GAS': 'GAS', });
lyr_BANKS_13.set('fieldAliases', {'Id': 'Id', 'BANKS': 'BANKS', });
lyr_WORSHIP_CENTERS_0.set('fieldImages', {'Id': 'Range', 'WORSHIP_CE': 'TextEdit', });
lyr_SUPERMARKETS_1.set('fieldImages', {'Id': 'Range', 'MALLS': 'TextEdit', });
lyr_SCHOOLS_2.set('fieldImages', {'Id': 'Range', 'SCHOOL': 'TextEdit', });
lyr_STREET_3.set('fieldImages', {'Id': 'Range', 'STREET': 'TextEdit', });
lyr_BOUNDARY_LINE_4.set('fieldImages', {'Id': '', });
lyr_PROMINENT_PLACES_5.set('fieldImages', {'Id': 'Range', 'PROMINENT_': 'TextEdit', });
lyr_MOTOR_PARK_6.set('fieldImages', {'Id': 'Range', 'MOTOR_PARK': 'TextEdit', });
lyr_HOTELS_7.set('fieldImages', {'Id': 'Range', 'HOTELS': 'TextEdit', });
lyr_MAJOR_ROAD_8.set('fieldImages', {'Id': '', 'MAJOR_ROAD': '', });
lyr_MINOR_ROAD_9.set('fieldImages', {'Id': 'Range', 'MINOR_ROAD': 'TextEdit', });
lyr_MAJOR_ROAD_10.set('fieldImages', {'Id': 'Range', 'MAJOR_ROAD': 'TextEdit', });
lyr_HEALTH_CENTERS_11.set('fieldImages', {'Id': 'Range', 'HEALTH_CEN': 'TextEdit', });
lyr_GAS_STATION_12.set('fieldImages', {'Id': 'Range', 'GAS': 'TextEdit', });
lyr_BANKS_13.set('fieldImages', {'Id': 'Range', 'BANKS': 'TextEdit', });
lyr_WORSHIP_CENTERS_0.set('fieldLabels', {'Id': 'no label', 'WORSHIP_CE': 'header label', });
lyr_SUPERMARKETS_1.set('fieldLabels', {'Id': 'no label', 'MALLS': 'header label', });
lyr_SCHOOLS_2.set('fieldLabels', {'Id': 'no label', 'SCHOOL': 'header label', });
lyr_STREET_3.set('fieldLabels', {'Id': 'no label', 'STREET': 'header label', });
lyr_BOUNDARY_LINE_4.set('fieldLabels', {'Id': 'no label', });
lyr_PROMINENT_PLACES_5.set('fieldLabels', {'Id': 'no label', 'PROMINENT_': 'header label', });
lyr_MOTOR_PARK_6.set('fieldLabels', {'Id': 'no label', 'MOTOR_PARK': 'header label', });
lyr_HOTELS_7.set('fieldLabels', {'Id': 'no label', 'HOTELS': 'header label', });
lyr_MAJOR_ROAD_8.set('fieldLabels', {'Id': 'no label', 'MAJOR_ROAD': 'no label', });
lyr_MINOR_ROAD_9.set('fieldLabels', {'Id': 'no label', 'MINOR_ROAD': 'no label', });
lyr_MAJOR_ROAD_10.set('fieldLabels', {'Id': 'no label', 'MAJOR_ROAD': 'no label', });
lyr_HEALTH_CENTERS_11.set('fieldLabels', {'Id': 'no label', 'HEALTH_CEN': 'header label', });
lyr_GAS_STATION_12.set('fieldLabels', {'Id': 'no label', 'GAS': 'header label', });
lyr_BANKS_13.set('fieldLabels', {'Id': 'no label', 'BANKS': 'header label', });
lyr_BANKS_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});