$(document).ready(function() {

$("#product").mouseenter(function(){
        $(this).addClass('hover-state');
    }).mouseleave(function(){
        $(this).removeClass('hover-state');
    });

    $("#play-video.video").click(function(e){
    	e.preventDefault();

        $('#product').addClass('is-transparent');

        player = new YT.Player('player', {
            width : '100%',
            height : '100%',
            videoId : 'hdn2pFOKK8o',
            playerVars: { 'autoplay': 1 },
            events : {
                'onReady' : onPlayerReady,
                'onStateChange' : onPlayerStateChange
            }
        });
    });

    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var player;
    function onPlayerReady(event) {
        //event.target.playVideo();
    }
    function onPlayerStateChange(event) {
        if(event.data == YT.PlayerState.ENDED) {
            player.destroy();
            $('#product').removeClass('is-transparent');
        }
    }

	$(".js-timer").countdown('2017/11/01 23:00:00', function(event) {
		$('.js-timer-days').text(event.strftime('%D'));
		$('.js-timer-hour').text(event.strftime('%H'));
		$('.js-timer-min').text(event.strftime('%M'));
	});


   $('.js-join-btn').on('click', function() {
        var popup = $('html, body').find('.popup');
        popup.addClass('is-open');
        $('body').addClass('is-hidden');
    });

    $('.js-close-popup').on('click', function() {
        var popup = $('html, body').find('.popup');
        popup.removeClass('is-open');
        $('body').removeClass('is-hidden');
    });

    $(".popup").on("click", function (e) {
        if ($(e.target).closest('.js-popup-inner').length) return;
        $(".popup").removeClass('is-open');
        $('body').removeClass('is-hidden');
    })

    // scroll button
    $(".js-scroll-top").on("click", function(){
        $('html, body').animate({
            scrollTop: 0
        }, 100);
        return false;
    });

    // switch langs
    $('.js-lang').on('click touchend', function() {
        var parent = $(this).closest(".lang");

        if ( !parent.hasClass("is-open")) {
            parent.addClass("is-open");
        } else {
            parent.removeClass("is-open");
        }

    });

    var lastScrollTop = 0;
    $(window).scroll(function(event){
       var st = $(this).scrollTop();
       if (st > lastScrollTop){
            if (!$(".js-scroll-top").hasClass("is-visible")) {
                $(".js-scroll-top").addClass("is-visible");
            }

       } else {
        if ($(".js-scroll-top").hasClass("is-visible")) {
            $(".js-scroll-top").removeClass("is-visible");
        }
       }
       lastScrollTop = st;
    });  

    // counter of buying
    jQuery(function($) {
        $('.js-timer-tokken').countTo({
            from: 0,
            to: 2500,
            speed: 5000000,
            refreshInterval: 5004,
            onComplete: function(value) {
                console.debug(this);
            }
        });
    });

    $('.js-nav-btn').click(function(event){
        $(this).toggleClass('is-active');
        $('.js-mob-nav').toggleClass('is-visible');
        $('body').addClass('is-hidden');
    });

    $('.js-nav-link').on('click', function() {
        var section = $(this).attr('href');
        
        $('html, body').animate({
            scrollTop: $(section).offset().top - 10
        }, 500);

        $('body').removeClass('is-hidden');
        $('.js-nav-btn').removeClass('is-active');
        $('.js-mob-nav').removeClass('is-visible');

        return false;
    });

});