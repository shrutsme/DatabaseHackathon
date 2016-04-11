$(document).ready(function () {
  $('a[href*=#]:not([href=#])').not('#carousel a').click(function() { //This allow you to use Carousel and Smooth Scroll at the same time
         if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
            || location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
               if (target.length) {
                 $('html,body').animate({
                     scrollTop: target.offset().top - 80  // Modify the top - number to increase the offset
                }, 1000);
                return false;
            }
        }
    });
  //$('#carousel').carousel()
});