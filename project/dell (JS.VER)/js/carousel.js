$(document).ready(function() {
    var owl = $('.news');
    
    owl.owlCarousel({
      margin: 10,
      dots: true,
      nav: true,
      navText:["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
      loop: true,
      responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 3 },
        1500: {items: 4}
      }
    })
});





