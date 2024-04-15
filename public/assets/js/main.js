// Initialize Swiper with a hidden scrollbar
const swiper = new Swiper('.swiper', {
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
      },
    });
    
    // Initialize AOS
    document.addEventListener('DOMContentLoaded', function() {
        AOS.init();
    });
    
    // Initialize Kursor library 
    document.addEventListener('DOMContentLoaded', function() {
        new kursor({
            type: 1
        });
    });
    
    // Set base options for mo.js animations
      const OPTS = {
        fill:           'none',
        radius:         25,
        strokeWidth:    { 50 : 0 },
        scale:          { 0: 1 },
        angle:          { 'rand(-35, -70)': 0 },
        duration:       500,
        left: 0,        top: 0,
        easing: 'cubic.out'
      };
      
      // Create the first circle with gray stroke
      const circle1 = new mojs.Shape({
        ...OPTS,
        stroke:         'gray',
      });
      
      // Create the second circle with black stroke and modified radius and strokeWidth
      const circle2 = new mojs.Shape({
        ...OPTS,
        radius:         { 0 : 15 },
        strokeWidth:    { 30: 0 },
        stroke:         'black',
        delay:          'rand(75, 150)'
      });
      
      document.addEventListener( 'click', function (e) {
        // Tune and replay the animation for circle1 to the click position
         circle1
          .tune({ x: e.pageX, y: e.pageY  })
          .replay();
    
        // Tune and replay the animation for circle2 to the click position
        circle2
          .tune({ x: e.pageX, y: e.pageY  })
          .replay();
        
      });
    
      // jQuery function to handle navigation and animation on scroll
      $(function(){
      
      var
        winW = $(window).width(),
        winH = $(window).height(),
        nav = $('#mainnav ul a'),
        curPos = $(this).scrollTop();
    
      // Adjust header height based on window width
      if (winW > 880){
        var headerH =20;
      }
      else{
        var headerH =60;
      }
    
      // On clicking a navigation link
      $(nav).on('click', function(){
        nav.removeClass('active');
        var $el = $(this),
        id = $el.attr('href');
            // Animate scroll to the section's offset, adjusting for header height.
        $('html, body').animate({
          scrollTop: $(id).offset().top - headerH
        }, 500);
        $(this).addClass('active');
            // If on a small screen, toggle the navigation menu.
        if (winW < 880){
          $('#menuWrap').next().slideToggle();
          $('#menuBtn').removeClass('close');
        }
        return false;
      });
    
       // Hide panel by default and setup toggle for menu on small screens
      $('.panel').hide();
      $('#menuWrap').toggle(function(){
        $(this).next().slideToggle();
        $('#menuBtn').toggleClass('close');
      },
      function(){
        $(this).next().slideToggle();
        $('#menuBtn').removeClass('close');
      });
    
    });
    
    