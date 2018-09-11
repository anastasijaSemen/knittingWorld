function initMap() {

    var centerLatLng = new google.maps.LatLng(56.2928515, 43.7866641);

    var mapOptions = {
        center: centerLatLng,
        zoom: 8
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
google.maps.event.addDomListener(window, "load", initMap);