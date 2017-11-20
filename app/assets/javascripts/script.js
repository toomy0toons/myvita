/*global $, window, document, setTimeout, WOW, jQuery*/
$(document).ready(function () {

    'use strict';
    // Defining used variables
    var skill            =   $('.skill'),
        accordionBox     =   $('.accordion-box'),
        accordion        =   $('.accordion'),
        accordionContent =   $('.acc-content');

    
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click', function() {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: (target.offset().top - 48)
            }, 1000, "easeInOutExpo");
            return false;
            }
        }
    });


    //Accordion Box
    if(accordionBox.length){
        $(this).on('click', '.acc-btn', function() {
            
            var outerBox = $(this).parents(accordionBox);
            var target = $(this).parents(accordion);
            
            if($(this).hasClass('active')!==true){
                $('.accordion .acc-btn').removeClass('active');
            }
            
            if ($(this).next(accordionContent).is(':visible')){
                return false;
            }else{
                $(this).addClass('active');
                $(outerBox).children(accordion).removeClass('active-block');
                $(outerBox).find(accordion).children('.acc-content').slideUp(300);
                target.addClass('active-block');
                $(this).next(accordionContent).slideDown(300);    
            }
        }); 
    }


    // animating progress values on scroll
    $(window).on('scroll', function () {
        var wScroll = $(window).scrollTop();

        if (wScroll > (skill.offset().top - 400)) {
            skill.each(function (i) {
                setTimeout(function () {
                    skill.eq(i).find('.progress-bar').attr('style', 'width: ' + skill.eq(i).find('li.strength').text() + '');
                }, 200 + (200 * i));
            });
        }

    });


    //Fact Counter + Text Count
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });


    //Screenshoot slider
    $(".owl-carousel").owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            991: {
                items: 3
            }
        },
        loop: true,
        center: true,
        dots: true,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        autoplay: false
    });

});

//preloader
$(window).on('load', function(){
    $("body").css("overflow","auto");
    $(".preloader").fadeOut(1000,function(){
        $(this).remove();
    });
});