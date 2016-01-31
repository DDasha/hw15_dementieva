/* ========================================================================= */
/*  scripts
/* ========================================================================*/

$(function(){
    /* ========================================================================= */
    /*  Menu item highlighting
    /* ========================================================================= */

    jQuery(window).scroll(function () {
        if (jQuery(window).scrollTop() > 400) {
            jQuery("#navigation").css("background-color","#00C7FC");
            jQuery("#navigation").addClass("animated-nav");
        } else {
            jQuery("#navigation").css("background-color","transparent");
            jQuery("#navigation").removeClass("animated-nav");
        }
    });

    $('#nav').onePageNav({
        filter: ':not(.external)',
        scrollSpeed: 950,
        scrollThreshold: 1
    });

    // Slider Height
    var slideHeight = $(window).height();
    $('#home-carousel .carousel-inner .item, #home-carousel .video-container').css('height',slideHeight);

    $(window).resize(function(){'use strict',
        $('#home-carousel .carousel-inner .item, #home-carousel .video-container').css('height',slideHeight);
    });

});

$(document).ready(function() {

    $("#owl-demo").owlCarousel({

        autoPlay: 3000, //Set AutoPlay to 3 seconds

        items : 4,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]

    });

});

    //Tabs
$(document).ready(function() {
    $(".tab-item").not(":first").hide();
    $(".tab").first().css("background-color","white");
    $(".tabs-block .tab").click(function () {
        $(".tabs-block .tab").removeClass("active").css("background-color","gray").eq($(this).index()).addClass("active").css("background-color","white");
        $(".tab-item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");
});

//accordion
// $(function() {
  //  $( "#accordion" ).accordion({
  //      collapsible: true
   // });
//});

(function($) {

    var allPanels = $('.accordion > dd').hide();

    $('.accordion > dt > a').click(function() {
        allPanels.slideUp();
        $(this).parent().next().slideDown();
        return false;
    });

})(jQuery);

//Tool-tip
$(function() {
    $( document ).tooltip();
});
