
$(document).ready(function() {
    
    $(".navbar-toggler").click(function() {
        
        $(".navbar-toggler").toggleClass(function () {
          return $(this).is('.navbar-toggler--open, .navbar-toggler--close') ? 'navbar-toggler--open navbar-toggler--close' : 'navbar-toggler--open';
        });
  
        $(".navbar-menu").toggleClass(function () {
          return $(this).is('.show-menu, .close-menu') ? 'show-menu close-menu' : 'show-menu';
        });
              
        if($(".navbar-menu").hasClass("show-menu")){
          $(".navbar-menu").css("display" ,"block");
        }else{
          $(".navbar-menu").css("display" ,"none");
        }
      });
    });