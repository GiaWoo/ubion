$(function() {
    $.scrollify({
      section:".section",
      sectionName:false,
      interstitialSection:".footer",
      offset: 0,
      scrollbars:true,
      overflowScroll:true,
      touchScroll: true,
      standardScrollElements: "",
      updateHash: true,
      easing: "easeOutExpo",
      scrollSpeed: 1000,
      before:function(i,panels) {
        var ref = panels[i].attr("data-section-name");
        $(".navbar-nav .active").removeClass("active");
        $(".navbar-nav").find("a[href=\"#" + ref + "\"]").parents('li').addClass("active");
        if($.scrollify.current().attr('data-section-name')=="first"){
            $('.header').addClass('fixed');
        }else{
            $('.header').removeClass('fixed');
        }
        if($.scrollify.current().attr('data-section-name')=="five"){
            $('.navbar-nav li:last-child').addClass("active");
        }
      }
    });
    $(".navbar-nav li a").on("click",function() {
        $.scrollify.move( getScrollifySectionIndex( $(this).attr("href") ) );
    });
    function getScrollifySectionIndex(anchor){
        var idpanel = false;
        $('section').each(function(i){
            if( $(this).data('section-name') == anchor.toString().replace(/#/g,"") ){
            idpanel = i;
            }
        });
        return idpanel;
    };
    $(".scroll_icon").click(function(e) {
        e.preventDefault();
        $.scrollify.next();
    });
    var header = $('header'),
	firstSection = $('section.home'),
	offset = firstSection.offset().top + firstSection.height() - header.height();
    	header.addClass('fixed');	
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll >= offset) {
        header.removeClass('fixed');
      } else {
        header.addClass('fixed');
      }
    });
    $('.sub1 .owl-carousel').owlCarousel({
        stagePadding: 0,
        loop:true,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        margin:1,
        nav:true,
        responsiveClass:true,
        responsive : {
            0 : {
                items:1,
                stagePadding:40,
                margin:42,
            },
            768 : {
                items:2
            },
            1200 : {
                items:3
            }
        }
    });
    $('.footer .owl-carousel').owlCarousel({
        stagePadding: 60,
        loop:true,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        margin:40,
        nav:true,
        responsiveClass:true,
        responsive : {
            0 : {
                items:1
            },
            768 : {
                items:2
            },
            1200 : {
                items:4
            }
        }
    });
});
