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
document.querySelector(".woman_sweater").addEventListener("click", () => fetchProjectJson("woman_sweater"))
document.querySelector(".green_dress").addEventListener("click", () => fetchProjectJson("green_dress"))
document.querySelector(".broun_scarf").addEventListener("click", () => fetchProjectJson("broun_scarf"))
document.querySelector(".green_heat").addEventListener("click", () => fetchProjectJson("green_heat"))
document.querySelector(".knit_for_kids").addEventListener("click", () => fetchProjectJson("knit_for_kids"))

function fetchProjectJson(i) {
    fetch('json/' + i + '.json')
        .then(data => data.json())
        .then(product => {
            const projectsContainer = document.querySelector(".projects_container");
            projectsContainer.innerHTML =
    
                `<div class="flex_inner_html"><div class="json">${product.title}<img src="${product.bigPictureAddress}"/>
                <div class="blok_for_data_json">
                <h3 class="header_of_data_json">${product.description}</h3>
                <ul class="data_of_product">
                <li class="list_to_data_of_product">${product.sizes}</li>
                <li class="list_to_data_of_product">${product.price}</li>
                
                </div>
                </div>
                </div>`

            });
        }
        
// Close origin photo
$(function(){
    $ ('.pop-block').each(function(){
     var closeTrigger = $(this).find('.close-block').length;
     if (closeTrigger < 1 ){ // проверяем наличие кнопки и если нет - добавляем
      $(this).append('<span class="close-block"></span>');
     }else{
      return '';
     }
     $('.close-block').on('click', function(){
      $(this).closest('.pop-block').fadeOut(100);
     });
    });
  });
