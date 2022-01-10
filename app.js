document.addEventListener("DOMContentLoaded", function(){
		
    window.addEventListener('scroll', function() {
       
        if (window.scrollY > 450) {
            document.getElementById('navbar_top').classList.add('fixed-top');
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
            console.log(navbar_height);
        } else {
             document.getElementById('navbar_top').classList.remove('fixed-top');
            document.body.style.paddingTop = '0';
        } 
    });
}); 
//map
var map = L.map('map').setView([45.764875340199936, 4.832037587266412], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYWNlcml2ZXJiYXQiLCJhIjoiY2t5NDRqaWg0MDhhYzJ3cHY3OWxpenB1cCJ9.qfiPMg4HJ5fPATJ1O8uckQ'
}).addTo(map);


var marker = L.marker([45.764875340199936, 4.832037587266412]).addTo(map);
var circle = L.circle([45.764875340199936, 4.832037587266412], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 1000
}).addTo(map);
marker.bindPopup("Mon secteur d'activité").openPopup();

    
    map.on('click', onMapClick);
    var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent(e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);