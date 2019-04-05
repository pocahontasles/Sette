
jQuery(document).ready(function () {
    jQuery('.slider-container').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        /*autoplay: true,
        autoplaySpeed: 4000,*/
        dots: true,
        responsive: [
            {
                breakpoint: 1125,
                settings: {
                    slidesToShow: 3,

                }
            },
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 2,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});
