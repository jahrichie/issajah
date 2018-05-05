$(function(){
  function jumpTo($el) {
    var speed = 1000
    $('html, body').animate({
         scrollTop: $el.offset().top
     }, speed);

  }


  $(".top-nav ul li a").click(function() {
    event.preventDefault();
    var jump_location = $(this).data("jump-to")
    if ( jump_location == "top" ) {
      jumpTo( $("body") )
    } else if (jump_location == "current_work"){
      jumpTo( $("#current-work") )
    } else {
      jumpTo( $("#sillyprojects") )
    }




  });

  var waypoint = new Waypoint({
    element: $(".nav-trigger"),
    handler: function(direction) {
      if(direction == "down"){
        console.log('Scrolled to waypoint!', direction)
        $(".top-nav").fadeIn()
      } else {
        console.log('Scrolled to waypoint!', direction)
        $(".top-nav").fadeOut()
      }


    }
  })



});
