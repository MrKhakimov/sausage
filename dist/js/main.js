$(document).ready((function(){$(".mobile-nav-btn").click((function(e){e.preventDefault(),$(".dark-fn").addClass("opened"),$(".header-mobile-nav").addClass("opened"),$("html").addClass("overflowHidden")})),$(".menu-close").click((function(e){e.preventDefault(),$(".header-mobile-nav").removeClass("opened"),$(".dark-fn").removeClass("opened"),$("html").removeClass("overflowHidden")})),$(".dark-fn").click((function(){$(".header-mobile-nav").removeClass("opened"),$(this).removeClass("opened"),$("html").removeClass("overflowHidden")})),$(".top-slider").owlCarousel({items:1,dots:!1,center:!0,nav:!1,loop:!0,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0,animateOut:"fadeOut"}),$(".about-slider").owlCarousel({items:1,dots:!0,center:!0,nav:!0,loop:!0,autoHeight:!1,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0}),$(".sertificate-slider").owlCarousel({items:2,dots:!0,center:!0,nav:!0,loop:!0,responsive:{0:{items:1},768:{items:2}}}),$(".book-slider").owlCarousel({items:1,dots:!1,center:!0,nav:!1,loop:!1,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0,thumbs:!0,thumbImage:!1,thumbsPrerendered:!0,thumbContainerClass:"book-thumbs",thumbItemClass:"book-thumbs__item"}),$(".button-up").click((function(){$("body,html").animate({scrollTop:0},1e3)})),$("a.scroll-link").on("click",(function(e){e.preventDefault(),$("html, body").animate({scrollTop:$($(this).attr("href")).offset().top},1e3)})),$(".services-list__item .services-list__item-top").on("click",(function(e){$(this).closest(".services-list__item").toggleClass("active"),$(this).closest(".services-list__item").find(".services-list__item-bottom").stop().slideToggle(300)})),$(".rews-item-bottom-click").on("click",(function(e){$(this).closest(".rews-item-bottom").toggleClass("active"),$(this).closest(".rews-item-bottom").find(".rews-item-bottom-main").stop().slideToggle(300)})),$(".rews-item-answer-bottom-click").on("click",(function(e){$(this).closest(".rews-item-answer-bottom").toggleClass("active"),$(this).closest(".rews-item-answer-bottom").find(".rews-item-answer-bottom-main").stop().slideToggle(300)})),$(".site-tab-links").on("click","li a",(function(){var e=$(this).closest("li").index(),t=$(this).closest(".site-tab").find(".site-tab-main").find(".site-tab-item");return $(this).closest("li").addClass("active").closest("li").siblings("li").removeClass("active"),t.eq(e).fadeIn(200).siblings(".site-tab-item").hide(),!1})),$(".site-tab-links li:eq(0) a").click()}));
//# sourceMappingURL=main.js.map