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
$('ul.tabs').each(function(){
    // For each set of tabs, we want to keep track of
    // which tab is active and its associated content
    var $active, $content, $links = $(this).find('a');

    // If the location.hash matches one of the links, use that as the active tab.
    // If no match is found, use the first link as the initial active tab.
    $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
    $active.addClass('active');

    $content = $($active[0].hash);

    // Hide the remaining content
    $links.not($active).each(function () {
        $(this.hash).hide();
    });

    // Bind the click event handler
    $(this).on('click', 'a', function(e){
        // Make the old tab inactive.
        $active.removeClass('active');
        $content.hide();

        // Update the variables with the new link and content
        $active = $(this);
        $content = $(this.hash);

        // Make the tab active.
        $active.addClass('active');
        $content.show();

        // Prevent the anchor's default click action
        e.preventDefault();
    });
});
//Test
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


//modal-form
$(document).ready(function() {
    $(function() {
        $("#dialog").dialog({
            autoOpen: false
        });
        $("#button").on("click", function() {
            $("#dialog").dialog("open");
        });
    });
// Validating Form Fields.....
    $("#submit").click(function(e) {
        var email = $("#email2").val();
        var name = $("#name").val();
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        if (email === '' || name === '') {
            alert("Please fill all fields...!!!!!!");
            e.preventDefault();
        } else if (!(email).match(emailReg)) {
            alert("Invalid Email...!!!!!!");
            e.preventDefault();
        } else {
            alert("Form Submitted Successfully......");
        }
    });
});





//Tool-tip
$(function() {
    $( document ).tooltip();
});
