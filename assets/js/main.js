$(document).ready(function() {
    
    $('.mobile-nav-btn').click(function(e) {
        e.preventDefault();
        $('.dark-fn').addClass('opened');
        $('.header-mobile-nav').addClass('opened');
        $('html').addClass('overflowHidden');       
    });
    $('.menu-close').click(function(e) {
        e.preventDefault();
        $('.header-mobile-nav').removeClass('opened');
        $('.dark-fn').removeClass('opened');
        $('html').removeClass('overflowHidden');     
    });
    $('.dark-fn').click(function() {
        $('.header-mobile-nav').removeClass('opened');
        $(this).removeClass('opened');
        $('html').removeClass('overflowHidden');   
    });

    $('.top-slider').owlCarousel({
        items: 1,
        dots: false,
        center: true,
        nav: false,
        loop: true,
        autoplay: true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        animateOut: 'fadeOut'
    });

    $('.about-slider').owlCarousel({
        items: 1,
        dots: true,
        center: true,
        nav: true,
        loop: true,
        autoHeight: false,
        autoplay: true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
    });

    $('.sertificate-slider').owlCarousel({
        items: 2,
        dots: true,
        center: true,
        nav: true,
        loop: true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1
            },
            // breakpoint from 768 up
            768 : {
                items: 2,
            }
        }
    });

    $('.book-slider').owlCarousel({
        items: 1,
        dots: false,
        center: true,
        nav: false,
        loop: false,
        autoplay: true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        thumbs: true,
        thumbImage: false,
        thumbsPrerendered: true,
        thumbContainerClass: 'book-thumbs',
        thumbItemClass: 'book-thumbs__item'
    });

    $('.button-up').click(function() {$('body,html').animate({scrollTop:0},1000);});

    $("a.scroll-link").on("click", function(e) {
      e.preventDefault();
      $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top
      }, 1000);
    });


    $('.services-list__item .services-list__item-top').on('click', function(e){
        $(this).closest('.services-list__item').toggleClass('active');
        $(this).closest('.services-list__item').find('.services-list__item-bottom').stop().slideToggle(300)
    })

    $('.rews-item-bottom-click').on('click', function(e){
        $(this).closest('.rews-item-bottom').toggleClass('active');
        $(this).closest('.rews-item-bottom').find('.rews-item-bottom-main').stop().slideToggle(300)
    })


    $('.rews-item-answer-bottom-click').on('click', function(e){
        $(this).closest('.rews-item-answer-bottom').toggleClass('active');
        $(this).closest('.rews-item-answer-bottom').find('.rews-item-answer-bottom-main').stop().slideToggle(300)
    })

    

    $('.site-tab-links').on('click', 'li a', function() {
        var tabIndex = $(this).closest('li').index();
        var tabClosest = $(this).closest('.site-tab').find('.site-tab-main');
        var tabBody = tabClosest.find('.site-tab-item');

        $(this).closest('li').addClass('active').closest('li').siblings('li').removeClass('active');
        tabBody.eq(tabIndex).fadeIn(200).siblings('.site-tab-item').hide();
        return false;
      });

    $('.site-tab-links li:eq(0) a').click();


})