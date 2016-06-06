// Pass jquery to IIFE as $ so we know $ is always = jQuery
(function($){
  'use strict';

    // Protect against DOM not being ready by wrapping code in jQuery callback
    $(function(){
      $('#main-title').text('Wow! jQuery is awesome');

      $('.container').prepend('<p>First paragraph</p><p>Second paragraph</p>');
      $('.container').append('<p>Three paragraph</p><p>Four paragraph</p>');

      $('.container ul li')
        .css({display: 'inline'})
        .find('.nav-link')  //:not(.active)
          .not('.active')
          //.css({color: 'green'})
        .end()
        .addClass('nav-item');

      var $navItems = $('.container ul li a');

      $navItems.click(function(event){
        event.preventDefault();
        var $clickedLink = $(this);

        console.log($clickedLink);

        $('.container').append('<img src="http://unsplash.it/100/100"/>');
        $('.active').removeClass('active');
        $clickedLink.addClass('active');
      });
    });

}(jQuery));
