$('.hamMenu').off('click').click(function(e){
  e.preventDefault();
  $('header nav').slideToggle(300);
});