$(function() {
    $.scrollify({
      section:".section",
      sectionName:false,
      interstitialSection:".footer",
      offset: 0,
      scrollbars:false,
      standardScrollElements: "",
      updateHash: true,
      touchScroll: true,
      easing: "easeOutExpo",
      scrollSpeed: 800,
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
    $('.owl-carousel').owlCarousel({
        stagePadding: 50,
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
});

  
