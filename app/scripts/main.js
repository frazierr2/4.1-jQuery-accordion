(function($) {
$(function(){

  $('.outer-container').ready(function(){
    $('h3').click(function(event){
      event.preventDefault();
      $('.accord-content').slideUp();
      if (!$(this).next().is(':visible'))
      {
        $(this).next().slideDown();
      }
      // else{
      //   $(this).next().slideUp();
      // }
    });
  });




});
}(jQuery));
