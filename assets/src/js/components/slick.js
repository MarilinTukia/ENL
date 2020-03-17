let $ = jQuery;
let slidesPerView = 5;
if (window.innerWidth < 700) {
    slidesPerView = 2;
} else if (window.innerWidth < 1000) {
    slidesPerView = 4;
}


$(".front-page-carousel").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,
});

$(".front-page-sponsors").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: slidesPerView,
    slidesToScroll: 1,
});
