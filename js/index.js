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
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showCarousel, 3000);
}



function initMap() {

    let centerLatLng = new google.maps.LatLng(56.2928515, 43.7866641);

    let mapOptions = {
        center: centerLatLng,
        zoom: 8
    };
    let map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
google.maps.event.addDomListener(window, "load", initMap);



// smooth scroll
$(function () {
    $('.smooth').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 900);
        }
    });
});

// imitation of backend. Data from JSON to section our projects
document.querySelector(".woman_sweater").addEventListener("click", () => fetchProjectJson(woman_sweater))
document.querySelector(".green_dress").addEventListener("click", () => fetchProjectJson(green_dress))
document.querySelector(".broun_scarf").addEventListener("click", () => fetchProjectJson(broun_scarf))
document.querySelector(".green_heat").addEventListener("click", () => fetchProjectJson(green_heat))
document.querySelector(".knit_for_kids").addEventListener("click", () => fetchProjectJson(knit_for_kids))

function fetchProjectJson(i) {
    fetch('json/' + i + '.json')
        .then(data => data.json())
        .then(json => {
            const projectsContainer = document.querySelector(".projects_container");
            projectsContainer.innerHTML =
                `<div class="json">${json.title}<img src="${json.bigPictureAddress}"/></div>`
        });
}



// // Closse origin photo
// $('.js_close_thank_you').click(function() { // clik on button
// 	$('.js_overlay_thank_you').fadeOut();
// });

// $(document).mouseup(function (e) { // clik around a button
// 	const popup = $('.popup');
// 	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
// 		$('.js_overlay_thank_you').fadeOut();
// 	}
// });