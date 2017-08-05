(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");

        $('[data-toggle="tooltip"]').tooltip();




        //Work slider
        $(".work-slider").owlCarousel({
            items: 2,
            autoplay: true,
            autoplayTimeout: 900,
            loop: true,
            smartSpeed: 400,
            margin: 15,
            responsive: {
                0: {
                    items: 1
                },
                767: {
                    items: 2
                },
                768: {
                    items: 2
                },
                
            }
        });



        //Lightbox     
        $(".gallery-lightbox").magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });







    });


    jQuery(window).load(function () {


    });


}(jQuery));