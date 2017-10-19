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
        $('body').addClass('popup-open');
    });

    $('.js-close-popup').on('click', function() {
        var popup = $('html, body').find('.popup');
        popup.removeClass('is-open');
        $('body').removeClass('popup-open');
    });

    $(".popup").on("click", function (e) {
        if ($(e.target).closest('.js-popup-inner').length) return;
        $(".popup").removeClass('is-open');
        $('body').removeClass('popup-open');
    })

    // scroll button
    $(".js-scroll-top").on("click", function(){
        $('html, body').animate({
            scrollTop: 0
        }, 100);
        return false;
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

     $('.js-nav-btn').click(function(event){
        $(this).toggleClass('is-active');
        $('.js-mob-nav').toggleClass('is-visible');
        $('body').toggleClass('menu-open');
    });


});