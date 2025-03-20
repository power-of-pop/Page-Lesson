$(function() {
  $('#back a').on('click',function(event){
    $('html').animate({
      scrollTop:0
    }, 800);
    event.preventDefault();
  });
});