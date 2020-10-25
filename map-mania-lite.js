
var gMap;

function initMap() {
    gMap = new google.maps.Map(document.getElementById('myMapID'), {
        center:{lat: 41.878, lng: 10}, zoom: 3});

    var marker = new google.maps.Marker({position:{lat:18.5215,lng:-77.8108}, map:gMap});

    var marker2 = new google.maps.Marker({position:{lat:28.3852,lng:-81.5639}, map:gMap});
    marker2.setIcon('https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png');

    var infoWindow = new google.maps.InfoWindow({content:'Disney World, Florida'});
    marker2.addListener('click', function() {
        infoWindow.open(gMap, marker2);
    });

    google.maps.event.addListener(gMap, 'idle', function() {
        updateGame()
    });

}

function updateGame() {
console.log('function UpdateGame() google-maps-step-03!');
var zoomLevel = gMap.getZoom()
var inBounds = false;


if (gMap.getBounds().contains({lat:18.5215,lng:-77.8108})) {
    inBounds = true;
}

console.log("inBounds:"+inBounds+" zoomLevel:"+zoomLevel);
}



function initApplication() {
    console.log('Map Mania Lite - Starting!')
}