
$(document).ready(function() {
    $(".button-collapse").sideNav();

    /*
    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all") {
           $('.filter').show('1000');
        } else {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
        }
    });
        */
    
       var $filters = $('.filter [data-filter]'),
       $boxes = $('.boxes [data-color]');
   
     $filters.on('click', function(e) {
       e.preventDefault();
       var $this = $(this);
       
       $filters.removeClass('active');
       $this.addClass('active');
   
       var $filterColor = $this.attr('data-filter');
   
       if ($filterColor == 'all') {
         $boxes.removeClass('is-animated')
           .fadeOut().promise().done(function() {
             $boxes.addClass('is-animated').fadeIn();
           });
       } else {
         $boxes.removeClass('is-animated')
           .fadeOut().promise().done(function() {
             $boxes.filter('[data-color = "' + $filterColor + '"]')
               .addClass('is-animated').fadeIn();
           });
       }
     });
});

function triggerResume() {
    window.open("https://drive.google.com/file/d/1McNQltyXuFLiUxRAIRfIn7e-4YFdKD_r/view?usp=sharing", "_blank");
}

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}

$(window).on("load", function() {
    $(".loader-wrapper").fadeOut("slow");
});

AOS.init({
    duration: 2000,
});