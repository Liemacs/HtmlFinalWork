$(document).ready(function(){
    $('.slider').slick({
        centerMode: true,
        variableWidth: true,
        arrows:false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });
});

$(document).ready(function(){
    $('.slider_content').slick({
        // fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: false,        
      });
});