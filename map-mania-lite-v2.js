
var gMap;

var favoritePlaces = [
    {content:'#1 Jamaica Hilton Rose Hall Resort', coordinates:{lat:18.5215,lng:-77.8108}, iconImagePath:"one.png"},
    {content:'#2: NAPERVILLE ILLINOIS BD MONGEOLEON GRILL!', coordinates:{lat:41.7722,lng:-88.1481}, iconImagePath:"two.png"},
    {content:'<strong>Florida, DISNEY WORLD!!!<strong>', coordinates:{lat:28.3852,lng:-81.5639}, iconImagePath:"flag.png"},
    {content:'Myrtle Beach,SC, Hard Rock Park', coordinates:{lat:33.7115,lng:-78.9361}, iconImagePath:"flag.png"},
    {content:'Atlanta, Georgia, World of Coca-Cola', coordinates:{lat:33.7625,lng:-84.3926}, iconImagePath:"flag.png"},
    {content:'Romeoville, Illinois, Lewis University', coordinates:{lat:41.6050,lng:88.0806}, iconImagePath:"flag.png"},
    {content:'Joliet, Illinois, Inwood Golf Course', coordinates:{lat:41.5185,lng:-88.1598}, iconImagePath:"flag.png"},
    {content:'Bloomington, Minnesota, Mall of America', coordinates:{lat:44.8549,lng:-93.2422}, iconImagePath:"flag.png"},
    {content:'Tokyo, Japan, Pokemon Center', coordinates:{lat:35.7288,lng:139.7192}, iconImagePath:"flag.png"},
    {content:'Joliet, Illinois, My town', coordinates:{lat:41.5250,lng:-88.0817}, iconImagePath:"flag.png"}
]; 
var currentPlaceIndex = 9;
var currentPlace = favoritePlaces[currentPlaceIndex]
var score = 10;

function initMap() {
    gMap = new google.maps.Map(document.getElementById('myMapID'), {
        center:{lat: 41.878, lng: 10}, zoom: 3});
    

    google.maps.event.addListener(gMap, 'idle', function() {
        updateGame()
    });

    SetHint("Hint 1: Mickey Mouse");
    SetScore(score);

}

function updateGame() {
console.log('function UpdateGame() google-maps-step-03!');
var zoomLevel = gMap.getZoom()
var inBounds = false;


if (gMap.getBounds().contains({lat:18.5215,lng:-77.8108})) {
    inBounds = true
    console.log("Now in bounds");
}

if (gMap.getBounds().contains({lat:41.7722,lng:-88.1481})) {
    inBounds = true
    console.log("Now in bounds");
}

if (gMap.getBounds().contains({lat:28.3852,lng:-81.5639})) {
    inBounds = true
    console.log("Now in bounds");
}

if (gMap.getBounds().contains({lat:33.7115,lng:-78.9361})) {
    inBounds = true
    console.log("Now in bounds");
}

if (gMap.getBounds().contains({lat:41.6050,lng:88.0806})) {
    inBounds = true
    console.log("Now in bounds");
}

if (gMap.getBounds().contains({lat:41.5185,lng:-88.1598})) {
    inBounds = true
    console.log("Now in bounds");
}

if (gMap.getBounds().contains({lat:44.8549,lng:-93.2422})) {
    inBounds = true
    console.log("Now in bounds");
}

if (gMap.getBounds().contains({lat:35.7288,lng:139.7192})) {
    inBounds = true
    console.log("Now in bounds");
}

if (gMap.getBounds().contains({lat:33.7625,lng:-84.3926})) {
    inBounds = true
    console.log("Now in bounds");
}

if (gMap.getBounds().contains({lat:41.5250,lng:-88.0817})) {
    inBounds = true
    console.log("Now in bounds");
}

console.log("inBounds:"+inBounds+" zoomLevel:"+zoomLevel);
}

function SetHint(hint) {
    document.getElementById("hint-id").value = hint;  
}

function SetScore() {
    document.getElementById("score-id").value = score; 
}

function initApplication() {
    console.log('Map Mania Lite - Starting!')
    alert("Welcome to map mania,Try and find my favorite places. You can also click the button to win the game")
}
