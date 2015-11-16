$(document).ready(function(){
  $('.bxslider').bxSlider({
      pager: false,
      
      auto: true,
      speed: 1200,
      easing: 'ease-in-out',
      
  });
    $('.bxslider2').bxSlider({
        mode: 'vertical',
       
        pager: false,
        nextSelector: '#slider-next',
        prevSelector: '#slider-prev',
        minSlides: 4,
        maxSlides: 4,
        slideMargin: 13,
        easing: 'ease-in-out',
        
    });
    $( "#accordion" ).accordion({
        collapsible: true,
        animate: 500,
        
        
       } );

    

});
     

$('a.popup').popup({
    backOpacity: 0.75
});





