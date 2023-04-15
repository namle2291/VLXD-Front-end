$(document).ready(function () {
    $('.product_slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: "<button class='btn btn-sm'><i class='fas fa-angle-left'></i></button>",
        nextArrow: "<button class='btn btn-sm'><i class='fas fa-angle-right'></i></button>",
        adaptiveHeight: true,
        responsive: [{
                breakpoint: 1240,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
    });
});

$(document).ready(function () {
    $('.post_list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('#post_prev_btn'),
        nextArrow: $('#post_next_btn'),
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });
});

$('.btn_go_to_top').on('click',()=>{
    $(window).scrollTop(0);
})