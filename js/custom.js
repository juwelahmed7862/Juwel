$(function(){


  // wow-js 
  new WOW().init();

  // preloder-js 
  $('#preloader').delay(2000).fadeOut(200, function() {
         
  });



  // clients-js 
    $('.clients-slick').slick({
        
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:".to",
        nextArrow:".on",
      });





      // backto-top-js 
      $(" .backto-top i").click(function(){

        $('html,body').animate({
          scrollTop:0,
      
        })
      })
      
      $(window).scroll(function(){
      
        var scrolling = $(this).scrollTop()
        if(scrolling > 20 ){
          $(".backto-top i").fadeIn(500)
        }else{
          $(".backto-top i").fadeOut(500)
        }
      
        if(scrolling > 50 ){
          $(".menu-bg").addClass("nav-bg")
        }else{
          $(".menu-bg").removeClass("nav-bg")
        }
      
      })



      // kursor-js 
      new kursor({
        removeDefaultCursor: false,
        type: 1,
        color: '#00fbf0'
    })



})