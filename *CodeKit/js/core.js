// for testing purposes clear local storage each time to remove cached network speed tests
try {
  localStorage.removeItem("fsjs");
} catch( e ) { }
$.hisrc.speedTest({ speedTestUri: 'images/50K.jpg' });
$(document).ready(function(){
    // Smooth scrolling for internal page links
    //Based on http://www.paulund.co.uk/smooth-scroll-to-internal-links-with-jquery
    $("body").on("touchstart, click", "a[href^='#']", function (event) {
        event.preventDefault();
        var target = this.hash,
        $target = $(target);
        var navHeight = $("nav").outerHeight();
        var targetTop = $target.offset().top;
        var scrollValue = targetTop - navHeight;
        $('html, body').stop().animate({
            'scrollTop': scrollValue
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
    //Image gallery
    //The function listens for an anchor tag for compatibility with iOS and to give a non-js fallback
    //The parent of the anchor is then selected to allow z-index to be applied to the anchor's container
    $("body").on("touchstart, click", ".trigger", function (event) {
        event.preventDefault();
        var galleryTarget = $(".gallery-target");
        var parent = $(this).parent();
        var isActive = parent.hasClass("active");
        if (this.hasAttribute("data-gallery-control")){
            var galleryControl = this.getAttribute("data-gallery-control");
            galleryTarget.each(function(){
                if($(this).attr("data-gallery-target") === galleryControl){
                    $(this).removeClass("deactivate").addClass("activate");
                }
                else if($(this).hasClass("activate")){
                    $(this).addClass("deactivate").removeClass("activate");
                }
            });
        }
        else {
            if(isActive) {
                parent.removeClass("active").addClass("deactivate");
                setTimeout(function () {
                    $(".image-gallery li").removeClass("deactivate");
                }, 750);
            }
            else {
                parent.addClass("active");
            }
        }
    });
    //Mobile image gallery
    
    //Responsive images
    $("img").hisrc({ useTransparentGif: false, speedTestUri: 'images/50K.jpg'
     });
});