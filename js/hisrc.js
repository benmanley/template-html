/*
 * Hisrc jQuery Plugin
 *
 * Copyright (c) 2012
 * Licensed under the MIT license.
 *
 */(function(e){e.hisrc={bandwidth:null,connectionTestResult:null,connectionKbps:null,connectionType:null,devicePixelRatio:null};e.hisrc.defaults={useTransparentGif:!1,transparentGifSrc:"data:image/gif;base64,R0lGODlhAQABAIAAAMz/AAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",minKbpsForHighBandwidth:300,speedTestUri:"50K.jpg",speedTestKB:50,speedTestExpireMinutes:30,forcedBandwidth:!1,srcIsLowResoltion:!0};e.hisrc.speedTest=function(t){e(window).hisrc(t)};e.fn.hisrc=function(t){var n=e.extend({callback:function(){}},e.hisrc.defaults,t),r=e(this),i=navigator.connection||{type:0},s=i.type==3||i.type==4||/^[23]g$/.test(i.type);e.hisrc.devicePixelRatio=1;if(window.devicePixelRatio!==undefined)e.hisrc.devicePixelRatio=window.devicePixelRatio;else if(window.matchMedia!==undefined)for(var o=1;o<=2;o+=.5)window.matchMedia("(min-resolution: "+o+"dppx)").matches&&(e.hisrc.devicePixelRatio=o);var u=n.speedTestUri,a="loading",f="complete",l="fsjs",c,h=function(){if(c)return;if(n.forcedBandwidth){e.hisrc.bandwidth=n.forcedBandwidth;e.hisrc.connectionTestResult="forced";c=f;r.trigger("speedTestComplete.hisrc");return}if(e.hisrc.devicePixelRatio===1){e.hisrc.connectionTestResult="skip";c=f;r.trigger("speedTestComplete.hisrc");return}e.hisrc.connectionType=i.type;if(s){e.hisrc.connectionTestResult="connTypeSlow";c=f;r.trigger("speedTestComplete.hisrc");return}try{var t=JSON.parse(localStorage.getItem(l));if(t!==null&&(new Date).getTime()<t.exp){e.hisrc.bandwidth=t.bw;e.hisrc.connectionKbps=t.kbps;e.hisrc.connectionTestResult="localStorage";c=f;r.trigger("speedTestComplete.hisrc");return}}catch(o){}var h=document.createElement("img"),d,v,m;h.onload=function(){d=(new Date).getTime();var t=(d-v)/1e3;t=t>1?t:1;e.hisrc.connectionKbps=n.speedTestKB*1024*8/t/1024;e.hisrc.bandwidth=e.hisrc.connectionKbps>=n.minKbpsForHighBandwidth?"high":"low";p("networkSuccess")};h.onerror=function(){p("networkError",5)};h.onabort=function(){p("networkAbort",5)};v=(new Date).getTime();c=a;document.location.protocol==="https:"&&(u=u.replace("http:","https:"));h.src=u+"?r="+Math.random();m=n.speedTestKB*8/n.minKbpsForHighBandwidth*1e3+350;setTimeout(function(){p("networkSlow")},m)},p=function(t,i){if(c===f)return;c=f;e.hisrc.connectionTestResult=t;try{i||(i=n.speedTestExpireMinutes);var s={kbps:e.hisrc.connectionKbps,bw:e.hisrc.bandwidth,exp:(new Date).getTime()+i*6e4};localStorage.setItem(l,JSON.stringify(s))}catch(o){}r.trigger("speedTestComplete.hisrc")},d=function(e,t){n.useTransparentGif?e.attr("src",n.transparentGifSrc).css("max-height","100%").css("max-width","100%").css("background",'url("'+t+'") no-repeat 0 0').css("background-size","contain"):e.attr("src",t)};n.callback.call(this);r.each(function(){var t=e(this),r=t.attr("src");if(r){t.data("m1src")||t.data("m1src",r);!t.attr("width")&&t.width()>0&&t.attr("width",t.width());!t.attr("height")&&t.height()>0&&t.attr("height",t.height());t.on("speedTestComplete.hisrc",function(){if(c===f){if(s)t.attr("src",t.data("m1src"));else if(e.hisrc.devicePixelRatio>1&&e.hisrc.bandwidth==="high"){var r=t.data("2x");r||(r=t.data("m1src").replace(/\.\w+$/,function(e){return"@2x"+e}));d(t,r)}else if(n.srcIsLowResoltion){var i=t.data("1x");i||(i=t.data("m1src").replace(/\.\w+$/,function(e){return"@1x"+e}));d(t,i)}t.off("speedTestComplete.hisrc")}})}});h();return r}})(jQuery);