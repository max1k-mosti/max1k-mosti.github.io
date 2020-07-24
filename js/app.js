$(document).ready(function(){
      $('.rewiew__slider').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
      });
    
    $('.header__burger').click(function(event){
       $('.header__burger,.header__menu').toggleClass('active');
    });
    });