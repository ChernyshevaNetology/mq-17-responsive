$(document).ready(function(){
  $('.homepage_slider, .trending_list').slick({
    autoplay: false,
    autoplaySpeed: 6000,
    arrows: true,
    infinite: true,
    dots: false,
    centerMode: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px"
  });
});