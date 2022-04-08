$('.hamMenu').off('click').click(function(e){
  e.preventDefault();
  $('header nav').slideToggle(300);
  if($(this).children('.ham').hasClass('open')){
    $(this).children('.ham').removeClass('open');
  }else {
    $(this).children('.ham').addClass('open');
  }
});
// $('.hamMenu').off('click').click(function(e){
//   e.preventDefault();
//   $('header nav').slideToggle(300);
// });