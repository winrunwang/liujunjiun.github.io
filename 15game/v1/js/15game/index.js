define("/15game/v1/js/15game/index.js",["/15game/v1/zepto/zepto.js","/15game/v1/switchui/pagesBox.js"],function(require,e){function i(e){var i=m/2;hand="left",hand=e.clientX>i?"right":"left";var a="left"===hand?e.clientX-u:e.clientX,n=e.clientY-r(".game2 .ui-title").height()-d/2;r("."+hand+"-hand").css({display:"block",left:a,top:n});var t="left"===hand?a+f/2:a-f/2;r(".broken").css({display:"block",left:t,top:n}),setTimeout(function(){r("."+hand+"-hand").hide(),r(".broken").hide()},200),v++,r(".game2 .realTimeScore").text(v),/android/i.test(navigator.userAgent)&&(b.currentTime=0,b.play())}function a(e,i){function a(){n--,0==n&&i&&i()}var n=e.length;e.forEach(function(e,i){var n=e.split("/").reverse()[0].split(".");if("mp3"===n[1]){var t=new Audio(e);if(t.src=e,t.complete)return void a();t.onloadedmetadata=function(){a()}}else{var o=new Image;if(o.src=e,o.complete)return void a();o.onload=function(){a()}}})}function n(e){switch(r(".game").css("display","none"),e){case 1:r(".game"+e).css("display","block");break;case 2:r(".game"+e).css("display","block"),f||(f=r(".broken").width(),u=r(".left-hand").width(),d=r(".left-hand").height());break;case 3:r(".game"+e).css("display","block")}p.pagesBox("goNext")}function t(){var e,i=r(".game1"),a=i.find(".ui-main"),n=r(".game2"),t=n.find(".ui-main"),o=r(".game3"),s=o.find(".ui-main"),g=Math.floor(l-i.find(".ui-title").height()-15);a.height(g),t.height(g),s.height(g),e=49.5;var c=Math.floor(m/55);h_number=Math.floor(g/e),total=c*h_number;for(var p=[],h=0;h<total;h++)p.push('<span style="width:55px;height:'+e+'px"><img src="/15game/v1/images/15game/paopao.png" alt=""></span>');a.append(p.join(""))}function o(e){var i={dataForWeixin:{title:"北上广不相信眼泪情绪发泄站",link:"",msgImg:"/15game/v1/images/15game/share.jpg",desc:e}};wx.onMenuShareAppMessage({title:i.dataForWeixin.title,desc:i.dataForWeixin.desc,link:i.dataForWeixin.link,imgUrl:i.dataForWeixin.msgImg}),wx.onMenuShareTimeline({title:i.dataForWeixin.desc,desc:i.dataForWeixin.title,link:i.dataForWeixin.link,imgUrl:i.dataForWeixin.msgImg}),wx.onMenuShareQQ({title:i.dataForWeixin.title,desc:i.dataForWeixin.desc,link:i.dataForWeixin.link,imgUrl:i.dataForWeixin.msgImg}),wx.onMenuShareWeibo({title:i.dataForWeixin.title,desc:i.dataForWeixin.desc,link:i.dataForWeixin.link,imgUrl:i.dataForWeixin.msgImg})}function s(e,i){var a=r(".game"+e),n=a.find(".time-count"),i=i?i:10,t=setInterval(function(){if(1===i){switch(a.find(".gameUi").hide(),a.find(".gameOver").show(),n.text("10s"),e){case 1:a.find(".gameOver").find(".gameScore").text(x),o("10秒内我已经捏爆了"+x+"个泡泡喔,有没有比我厉害的，快放马过来！");break;case 2:a.find(".gameOver").find(".gameScore").text(v),o("10秒内我爆发了"+v+"分的小情绪，快和我一起正能量爆棚吧！");break;case 3:a.find(".gameOver").find(".gameScore").text(_),o("10秒内，我已经练就成了骨灰级好嗓，宣泄音量"+_+"分贝。快来PK一下吧！")}return clearInterval(t),void(t=null)}i--,n.text(i+"s")},1e3)}var r=require("/15game/v1/zepto/zepto.js");require("/15game/v1/switchui/pagesBox.js")(r,window);var g=["/15game/v1/images/15game/slogan.png","/15game/v1/images/15game/game3-over-tip.png","/15game/v1/images/15game/game2-over-tip.png","/15game/v1/images/15game/page1-ani-1.png","/15game/v1/images/15game/page1-ani-2.png","/15game/v1/images/15game/game1-over-tip.png","/15game/v1/images/15game/game1-tip.png","/15game/v1/images/15game/game3-tip.png","/15game/v1/images/15game/page1-bg.jpg","/15game/v1/images/15game/game2-tip.png","/15game/v1/images/15game/man-all.png","/15game/v1/images/15game/man.png","/15game/v1/images/15game/woman-all.png","/15game/v1/images/15game/mouth.png"],l=parseInt(document.documentElement.clientHeight,10),m=parseInt(document.documentElement.clientWidth,10),c=32*l/960;r("html").css({"font-size":c+"px"});var p=r(".container>ul");p.pagesBox({pages:"li",easing:"ease-in-out",hash:!1,orientScale:!1,threshold:80}),p.pagesBox("offTouch");var h,u,d,f,x=0,v=0,_=0,z=!0;p.on("transend",function(e){var i=e.data;2===i?(w.pause(),r(".audio a").removeClass("playing").hide()):z?(w.play(),r(".audio a").addClass("playing").show()):(w.pause(),r(".audio a").removeClass("playing").show())}),a(g,function(){r(".loading").hide(),setTimeout(function(){w.play()},500)}),r(".area3").on("tap",function(){r(".area4").hide(),r(this).find("img").attr("src","/15game/v1/images/15game/page1-ani-2.png"),setTimeout(function(){p.pagesBox("goNext")},800)});var w=document.getElementById("audioc");r(".audio a").on("tap",function(){1==w.paused?(w.play(),r(this).addClass("playing"),z=!0):(w.pause(),r(this).removeClass("playing"),z=!1)}),t();var W=document.getElementById("audio1");r(".game1 .ui-main span").on("tap",function(){var e="/15game/v1/images/15game/paopao2.png";r(this).find("img").attr("src",e),r(this).addClass("score"),W.currentTime=0,W.play(),x++,r(".game1 .realTimeScore").text(x)});var b=document.getElementById("audio2");r(".game2 .bag").on("touchstart",function(e){var a=e.touches[0];b.currentTime=0,b.play(),i(a)});var k=document.getElementById("audio3");r(".game3 .clickMe-btn").on("tap",function(){_%2===0?r(".animationEle").removeClass("turnRight").addClass("turnLeft"):r(".animationEle").removeClass("turnLeft").addClass("turnRight"),k.currentTime=0,k.play(),_++,r(".game3 .realTimeScore").text(_)}),r(".gameOver a").on("tap",function(){var e=r(".game"+h);if(e.find(".gameOver").hide(),e.find(".gameTip").show(),e.find(".gameUi").show(),1===h){var i="/15game/v1/images/15game/paopao.png";r(".score").find("img").attr("src",i),r(".score").removeClass("score"),x=0,r(".game1 .realTimeScore").text(x)}2===h&&(v=0,r(".game2 .realTimeScore").text(v)),3===h&&(_=0,r(".animationEle").removeClass("turnLeft turnRight"),r(".game3 .realTimeScore").text(_)),p.pagesBox("goPrev"),/android/i.test(navigator.userAgent)&&(w.play(),r(".audio a").addClass("playing").show())}),r(".flexbox .flex-1").on("tap",function(){var e=parseInt(r(this).attr("data-gameIndex"));h=e,n(e)}),r(".gameTip a").on("tap",function(){r(this).parent(".gameTip").hide(),/android/i.test(navigator.userAgent)&&(w.pause(),r(".audio a").removeClass("playing").hide()),s(h)})}),function(){var e={appid:"",title:"",link:"",msgImg:"",desc:"",shareAppMessage_trigger:!1,shareAppMessage_success:!1,shareAppMessage_cancel:!1,shareAppMessage_fail:!1,shareTimeline_trigger:!1,shareTimeline_success:!1,shareTimeline_cancel:!1,shareTimeline_fail:!1,shareQQ_trigger:!1,shareQQ_complete:!1,shareQQ_success:!1,shareQQ_cancel:!1,shareQQ_fail:!1,shareWeibo_trigger:!1,shareWeibo_complete:!1,shareWeibo_success:!1,shareWeibo_cancel:!1,shareWeibo_fail:!1};window.wxSetShareData=function(){if("undefined"!=typeof $CONFIG&&void 0!==$CONFIG.dataForWeixin)for(key in $CONFIG.dataForWeixin)e[key]=$CONFIG.dataForWeixin[key]},window.wxSetShareData(),window.wx&&wx.config({appId:weixinConfigInfo.appId,nonceStr:weixinConfigInfo.nonceStr,signature:weixinConfigInfo.signature,timestamp:weixinConfigInfo.timestamp,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","chooseImage","uploadImage","openLocation","getLocation","getNetworkType"]}),window.wx&&wx.ready(function(){window.wxReadyCallback&&window.wxReadyCallback(),wx.onMenuShareAppMessage({title:e.title,desc:e.desc,link:e.link,imgUrl:e.msgImg,trigger:function(i){e.shareAppMessage_trigger&&e.shareAppMessage_trigger(i)},success:function(i){e.shareAppMessage_success&&e.shareAppMessage_success(i)},cancel:function(i){e.shareAppMessage_cancel&&e.shareAppMessage_cancel(i)},fail:function(i){e.shareAppMessage_fail&&e.shareAppMessage_fail(i)}}),wx.onMenuShareTimeline({title:e.title,desc:e.desc,link:e.link,imgUrl:e.msgImg,trigger:function(i){e.shareTimeline_trigger&&e.shareTimeline_trigger(i)},success:function(i){e.shareTimeline_success&&e.shareTimeline_success(i)},cancel:function(i){e.shareTimeline_cancel&&e.shareTimeline_cancel(i)},fail:function(i){e.shareTimeline_fail&&e.shareTimeline_fail(i)}}),wx.onMenuShareQQ({title:e.title,desc:e.desc,link:e.link,imgUrl:e.img_url,trigger:function(i){e.shareQQ_trigger&&e.shareQQ_trigger(i)},complete:function(i){e.shareQQ_complete&&e.shareQQ_complete(i)},success:function(i){e.shareQQ_success&&e.shareQQ_success(i)},cancel:function(i){e.shareQQ_cancel&&e.shareQQ_cancel(i)},fail:function(i){e.shareQQ_fail&&e.shareQQ_fail(i)}}),wx.onMenuShareWeibo({title:e.title,desc:e.desc,link:e.link,imgUrl:e.img_url,trigger:function(i){e.shareWeibo_trigger&&e.shareWeibo_trigger(i)},complete:function(i){e.shareWeibo_complete&&e.shareWeibo_complete(i)},success:function(i){e.shareWeibo_success&&e.shareWeibo_success(i)},cancel:function(i){e.shareWeibo_cancel&&e.shareWeibo_cancel(i)},fail:function(i){e.shareWeibo_fail&&e.shareWeibo_fail(i)}})})}();
