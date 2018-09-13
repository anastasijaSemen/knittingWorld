// carousel
let slideIndex = 0;
showCarousel();

function showCarousel() {
    let i;
    let slides = document.getElementsByClassName("slidesmain_fade");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showCarousel, 3000); 
}



function initMap() {

    var centerLatLng = new google.maps.LatLng(56.2928515, 43.7866641);

    var mapOptions = {
        center: centerLatLng,
        zoom: 8
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
google.maps.event.addDomListener(window, "load", initMap);

// imitation of backend. Data from JSON to section our projects
document.querySelector(".woman_sweater").addEventListener("click", f1)
document.querySelector(".green_dress").addEventListener("click", f2)
document.querySelector(".green_heat").addEventListener("click", f3)
document.querySelector(".broun_scarf").addEventListener("click", f4)
document.querySelector(".knit_for_kids").addEventListener("click", f5)

function f1(){
    fetchProjectJson(1)
}

function f2(){
    fetchProjectJson(2)
}
function f3(){
    fetchProjectJson(3)
}
function f4(){
    fetchProjectJson(4)
}
function f5(){
    fetchProjectJson(5)
}


function fetchProjectJson(i){
    fetch('json/'+i+'.json')
    .then(data => data.json())
    .then(json => {
        const projectsContainer = document.querySelector(".projects_container");
        projectsContainer.innerHTML = "<div>"+json.title+"<img src=\""+json.bigPictureAddress+"\"/></div>"
    })
}