// for testing purposes clear local storage each time to remove cached network speed tests
try{localStorage.removeItem("fsjs")}catch(e){}$.hisrc.speedTest({speedTestUri:"images/50K.jpg"});$(document).ready(function(){$("body").on("touchstart, click","a[href^='#']",function(e){e.preventDefault();var t=this.hash,n=$(t),r=$("nav").outerHeight(),i=n.offset().top,s=i-r;$("html, body").stop().animate({scrollTop:s},900,"swing",function(){window.location.hash=t})});$("body").on("touchstart, click",".trigger",function(e){e.preventDefault();var t=$(this).parent(),n=t.hasClass("active");if(n){t.removeClass("active").addClass("deactivate");setTimeout(function(){$(".image-gallery li").removeClass("deactivate")},750)}else t.addClass("active")});$("img").hisrc({useTransparentGif:!1,speedTestUri:"images/50K.jpg"})});