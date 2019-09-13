$(document).ready(function() {
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100){
      $("#composer").fadeIn();
    } else {
      $("#composer").fadeOut();
    }
  })

  $("#composer").click(function(){
    $(window).scrollTop(0);
  });

})