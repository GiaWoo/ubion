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
        $(".navbar-nav .on").removeClass("on");
        $(".navbar-nav").find("a[href=\"#" + ref + "\"]").parents('li').addClass("on");

        if($.scrollify.current().attr('data-section-name')=="second")
        {
            $('nav').addClass('scroll_bg');
        }
        if($.scrollify.current().attr('data-section-name')=="first")
        {
            $('nav').removeClass('scroll_bg');
        }
        if($.scrollify.current().attr('data-section-name')=="five")
        {
            $('nav li:last-child').addClass("on");
        }

      },
    });
    $("nav li a").on("click",function() {
        $.scrollify.move( getScrollifySectionIndex( $(this).attr("href") ) );
    });
    function getScrollifySectionIndex(anchor){
        var idpanel = false;
        $('section').each(function(i){
            if( jQuery(this).data('section-name') == anchor.toString().replace(/#/g,"") ){
            idpanel = i;
            }
        });
        return idpanel;
    };
});
  