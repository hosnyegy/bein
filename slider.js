!function(t){var e=null,n={init:function(n){var a=t.extend({slideTransition:"none",slideTransitionSpeed:2e3,slideEndAnimation:!0,position:"0,0",transitionIn:"left",transitionOut:"left",fullWidth:!1,delay:0,timeout:2e3,speedIn:2500,speedOut:1e3,easeIn:"easeOutExpo",easeOut:"easeOutCubic",controls:!1,pager:!1,autoChange:!0,pauseOnHover:!1,backgroundAnimation:!1,backgroundElement:null,backgroundX:500,backgroundY:500,backgroundSpeed:2500,backgroundEase:"easeOutCubic",responsive:!1,increase:!1,dimensions:"",startCallback:null,startNextSlideCallback:null,stopCallback:null,pauseCallback:null,resumeCallback:null,nextSlideCallback:null,prevSlideCallback:null,pagerCallback:null},n);return this.each(function(){e=new i(this,a)})},pause:function(){e.pause(!0)},resume:function(){e.resume()},stop:function(){e.stop()},start:function(){e.start()},startNextSlide:function(){e.startNextSlide()}},i=function(e,n){function i(){if(n.controls&&(G.append('<a href="#" class="prev"></a><a href="#" class="next" ></a>'),G.find(".next").bind("click",function(){return b()}),G.find(".prev").bind("click",function(){return h()})),n.pauseOnHover&&G.bind({mouseenter:function(){s(!1)},mouseleave:function(){o()}}),n.fullWidth?G.css({overflow:"visible"}):G.css({overflow:"hidden"}),n.pager){var e="boolean"!=typeof n.pager;J=e?n.pager:t('<div class="fs-pager-wrapper"></div>'),e?J.addClass("fs-custom-pager-wrapper"):G.append(J)}G.children(".h-slide").each(function(i){var a=t(this);if(a.children().attr("rel",i).addClass("fs_obj"),a.children("[data-fixed]").addClass("fs_fixed_obj"),n.pager||e){var r=t('<a rel="'+i+'" href="#"></a>').bind("click",function(){return f(this)});J.append(r)}}),n.pager&&(J=t(J).children("a")),n.responsive&&W(),G.find(".fs_loader").length>0&&G.find(".fs_loader").remove(),a()}function a(){P.stop=!1,P.pause=!1,P.running=!0,g("slide"),p(n.startCallback)}function r(){P.stop=!1,P.pause=!1,P.running=!0,u(),p(n.startNextSlideCallback)}function l(){P.stop=!0,P.running=!1,G.find(".h-slide").stop(!0,!0),G.find(".fs_obj").stop(!0,!0).removeClass("fs-animation"),z(X),p(n.stopCallback)}function s(t){P.pause=!0,P.running=!1,t&&G.find(".fs-animation").finish(),p(n.pauseCallback)}function o(){P.stop=!1,P.pause=!1,P.running=!0,P.slideComplete?g("slide"):P.stepComplete?g("step"):P.finishedObjs<P.maxObjs||g(P.currentStep<P.maxStep?"step":"slide"),p(n.resumeCallback)}function u(){P.lastSlide=P.currentSlide,P.currentSlide+=1,P.stop=!1,P.pause=!1,P.running=!0,v(),p(n.nextSlideCallback)}function c(){P.lastSlide=P.currentSlide,P.currentSlide-=1,P.stop=!1,P.pause=!1,P.running=!0,v(),p(n.prevSlideCallback)}function d(t){P.lastSlide=P.currentSlide,P.currentSlide=t,P.stop=!1,P.pause=!1,P.running=!0,v(),p(n.pagerCallback)}function p(e){t.isFunction(e)&&e.call(this,G,P.currentSlide,P.lastSlide,P.currentStep)}function f(e){var n=parseInt(t(e).attr("rel"));return n!=P.currentSlide&&(l(),d(n)),!1}function h(){return l(),c(),!1}function b(){return l(),u(),!1}function g(t){if(!P.pause&&!P.stop&&P.running)switch(t){case"slide":P.slideComplete=!1,m();break;case"step":P.stepComplete=!1,O();break;case"obj":j()}}function m(){var t=n.timeout;P.init?(P.init=!1,v(!0)):X.push(setTimeout(function(){0==P.maxSlide&&1==P.running||(P.lastSlide=P.currentSlide,P.currentSlide+=1,v())},t))}function v(t){if(G.find(".active-slide").removeClass("active-slide"),P.currentSlide>P.maxSlide&&(P.currentSlide=0),P.currentSlide<0&&(P.currentSlide=P.maxSlide),F.currentSlide=G.children(".h-slide:eq("+P.currentSlide+")").addClass("active-slide"),0==F.currentSlide.length&&(P.currentSlide=0,F.currentSlide=G.children(".h-slide:eq("+P.currentSlide+")")),null!=P.lastSlide&&(P.lastSlide<0&&(P.lastSlide=P.maxSlide),F.lastSlide=G.children(".h-slide:eq("+P.lastSlide+")")),t?F.animation="none":(F.animation=F.currentSlide.attr("data-in"),null==F.animation&&(F.animation=n.slideTransition)),n.slideEndAnimation&&null!=P.lastSlide)E();else switch(F.animation){case"none":S(),x();break;case"scrollLeft":S(),x();break;case"scrollRight":S(),x();break;case"scrollTop":S(),x();break;case"scrollBottom":S(),x();break;default:S()}}function S(){n.backgroundAnimation&&R(),n.pager&&(J.removeClass("active"),J.eq(P.currentSlide).addClass("active")),C(),F.currentSlide.children().hide(),P.currentStep=0,P.currentObj=0,P.maxObjs=0,P.finishedObjs=0,F.currentSlide.children("[data-fixed]").show(),N()}function k(t){null!=F.lastSlide&&F.lastSlide.hide(),t.hasClass("active-slide")&&g("step")}function x(){null!=F.lastSlide&&"none"!=F.animation&&M()}function w(){}function C(){var e=F.currentSlide.children(),n=0;e.each(function(){var e=parseFloat(t(this).attr("data-step"));n=e>n?e:n}),P.maxStep=n}function O(){var t;t=0==P.currentStep?F.currentSlide.children('*:not([data-step]):not([data-fixed]), *[data-step="'+P.currentStep+'"]:not([data-fixed])'):F.currentSlide.children('*[data-step="'+P.currentStep+'"]:not([data-fixed])'),P.maxObjs=t.length,Y=t,P.maxObjs>0?(P.currentObj=0,P.finishedObjs=0,g("obj")):y()}function y(){return P.stepComplete=!0,P.currentStep+=1,P.currentStep>P.maxStep?void(n.autoChange&&(P.currentStep=0,P.slideComplete=!0,g("slide"))):void g("step")}function j(){var e=t(Y[P.currentObj]);e.addClass("fs-animation");var i=e.attr("data-position"),a=e.attr("data-in"),r=e.attr("data-delay"),l=e.attr("data-time"),s=e.attr("data-ease-in"),o=e.attr("data-special");i=null==i?n.position.split(","):i.split(","),null==a&&(a=n.transitionIn),null==r&&(r=n.delay),null==s&&(s=n.easeIn),L(e,i,a,r,l,s,o),P.currentObj+=1,P.currentObj<P.maxObjs?g("obj"):P.currentObj=0}function I(t){t.removeClass("fs-animation"),t.attr("rel")==P.currentSlide&&(P.finishedObjs+=1,P.finishedObjs==P.maxObjs&&y())}function E(){var e=F.lastSlide.children(":not([data-fixed])");e.each(function(){var e=t(this),i=e.position(),a=e.attr("data-out"),r=e.attr("data-ease-out");null==a&&(a=n.transitionOut),null==r&&(r=n.easeOut),T(e,i,a,null,r)}).promise().done(function(){x(),S()})}function N(){var t=F.currentSlide,e={},i={},a=n.slideTransitionSpeed,r=F.animation;switch(n.responsive?unit="%":unit="px",r){case"slideLeft":e.left=K+unit,e.top="0"+unit,e.display="block",i.left="0"+unit,i.top="0"+unit;break;case"slideTop":e.left="0"+unit,e.top=-Z+unit,e.display="block",i.left="0"+unit,i.top="0"+unit;break;case"slideBottom":e.left="0"+unit,e.top=Z+unit,e.display="block",i.left="0"+unit,i.top="0"+unit;break;case"slideRight":e.left=-K+unit,e.top="0"+unit,e.display="block",i.left="0"+unit,i.top="0"+unit;break;case"fade":e.left="0"+unit,e.top="0"+unit,e.display="block",e.opacity=0,i.opacity=1;break;case"none":e.left="0"+unit,e.top="0"+unit,e.display="block",a=0;break;case"scrollLeft":e.left=K+unit,e.top="0"+unit,e.display="block",i.left="0"+unit,i.top="0"+unit;break;case"scrollTop":e.left="0"+unit,e.top=-Z+unit,e.display="block",i.left="0"+unit,i.top="0"+unit;break;case"scrollBottom":e.left="0"+unit,e.top=Z+unit,e.display="block",i.left="0"+unit,i.top="0"+unit;break;case"scrollRight":e.left=-K+unit,e.top="0"+unit,e.display="block",i.left="0"+unit,i.top="0"+unit}t.css(e).animate(i,a,"linear",function(){k(t)})}function M(){var t={},e=n.slideTransitionSpeed,i=null,a=F.animation;switch(i=n.responsive?"%":"px",a){case"scrollLeft":t.left=-K+i,t.top="0"+i;break;case"scrollTop":t.left="0"+i,t.top=Z+i;break;case"scrollBottom":t.left="0"+i,t.top=-Z+i;break;case"scrollRight":t.left=K+i,t.top="0"+i;break;default:e=0}F.lastSlide.animate(t,e,"linear",function(){w()})}function L(e,i,a,r,l,s,o){var u={},c={},d=n.speedIn,p=null;switch(p=n.responsive?"%":"px",null!=l&&""!=l&&(d=l-r),u.opacity=1,a){case"left":u.top=i[0],u.left=K;break;case"bottomLeft":u.top=Z,u.left=K;break;case"topLeft":u.top=-1*e.outerHeight(),u.left=K;break;case"top":u.top=-1*e.outerHeight(),u.left=i[1];break;case"bottom":u.top=Z,u.left=i[1];break;case"right":u.top=i[0],u.left=-V-e.outerWidth();break;case"bottomRight":u.top=Z,u.left=-V-e.outerWidth();break;case"topRight":u.top=-1*e.outerHeight(),u.left=-V-e.outerWidth();break;case"fade":u.top=i[0],u.left=i[1],u.opacity=0,c.opacity=1;break;case"none":u.top=i[0],u.left=i[1],u.display="none",d=0}c.top=i[0],c.left=i[1],c.left=c.left+p,c.top=c.top+p,u.left=u.left+p,u.top=u.top+p,X.push(setTimeout(function(){if("cycle"==o&&e.attr("rel")==P.currentSlide){var i=e.prev();if(i.length>0){var a=t(i).attr("data-position").split(",");a={top:a[0],left:a[1]};var r=t(i).attr("data-out");null==r&&(r=n.transitionOut),T(i,a,r,d)}}e.css(u).show().animate(c,d,s,function(){I(e)}).addClass("fs_obj_active")},r))}function T(t,e,i,a,r){var l={},s={},o=null;a=n.speedOut,o=n.responsive?"%":"px";var u=t.outerWidth(),c=t.outerHeight();switch(n.responsive&&(u=q(u,$),c=q(c,D)),i){case"left":s.left=-V-100-u;break;case"bottomLeft":s.top=Z,s.left=-V-100-u;break;case"topLeft":s.top=-c,s.left=-V-100-u;break;case"top":s.top=-c;break;case"bottom":s.top=Z;break;case"right":s.left=K;break;case"bottomRight":s.top=Z,s.left=K;break;case"topRight":s.top=-c,s.left=K;break;case"fade":l.opacity=1,s.opacity=0;break;case"hide":s.display="none",a=0;break;default:s.display="none",a=0}"undefined"!=typeof s.top&&s.top.toString().indexOf("px")>0&&(s.top=s.top.substring(0,s.top.length-2),n.responsive&&(s.top=q(s.top,D))),"undefined"!=typeof s.left&&s.left.toString().indexOf("px")>0&&(s.left=s.left.substring(0,s.left.length-2),n.responsive&&(s.left=q(s.left,$))),s.left=s.left+o,s.top=s.top+o,t.css(l).animate(s,a,r,function(){t.hide()}).removeClass("fs_obj_active")}function R(){var e;e=null==n.backgroundElement||""==n.backgroundElement?G.parent():t(n.backgroundElement);var i=e.css("background-position");i=i.split(" ");var a=n.backgroundX,r=n.backgroundY,l=Number(i[0].replace(/[px,%]/g,""))+Number(a),s=Number(i[1].replace(/[px,%]/g,""))+Number(r);e.animate({backgroundPositionX:l+"px",backgroundPositionY:s+"px"},n.backgroundSpeed,n.backgroundEase)}function W(){var i=n.dimensions.split(","),a=Q();$=i[0],D=i[1],n.increase||t(e).css({maxWidth:$+"px"});var r=G.children(".h-slide").find("*");r.each(function(){var e=t(this),n=null,i=null,r=null;if(null!=e.attr("data-position")){var l=e.attr("data-position").split(",");n=q(l[1],$),i=q(l[0],D),e.attr("data-position",i+","+n)}null!=e.attr("width")&&""!=e.attr("width")?(r=e.attr("width"),n=q(r,$),e.attr("width",n+"%"),e.css("width",n+"%")):"0px"!=e.css("width")?(r=e.css("width"),r.indexOf("px")>0&&(r=r.substring(0,r.length-2),n=q(r,$),e.css("width",n+"%"))):"img"==e.prop("tagName").toLowerCase()&&-1!=a?(r=_(e),n=q(r,$),e.css("width",n+"%").attr("width",n+"%")):"img"==e.prop("tagName").toLowerCase()&&(r=e.get(0).width,n=q(r,$),e.css("width",n+"%")),null!=e.attr("height")&&""!=e.attr("height")?(r=e.attr("height"),i=q(r,D),e.attr("height",i+"%"),e.css("height",i+"%")):"0px"!=e.css("height")?(r=e.css("height"),r.indexOf("px")>0&&(r=r.substring(0,r.length-2),i=q(r,D),e.css("height",i+"%"))):"img"==e.prop("tagName").toLowerCase()&&-1!=a?(r=H(e),i=q(r,D),e.css("height",i+"%").attr("height",i+"%")):"img"==e.prop("tagName").toLowerCase()&&(r=e.get(0).height,i=q(r,D),e.css("height",i+"%")),e.attr("data-fontsize",e.css("font-size"))}),G.css({width:"auto",height:"auto"}).append('<div class="fs-stretcher" style="width:'+$+"px; height:"+D+'px"></div>'),A(),t(window).bind("resize",function(){A()})}function _(t){var e=new Image;return e.src=t.attr("src"),e.width}function H(t){var e=new Image;return e.src=t.attr("src"),e.height}function A(){var e=G.innerWidth();G.innerHeight();if($>=e||n.increase){var i=$/D,a=e/i;G.find(".fs-stretcher").css({width:e+"px",height:a+"px"})}U=t("body").width();var r=G.width();V=q((U-r)/2,$),K=100,n.fullWidth&&(K=100+2*V),Z=100,(0==P.init||$>e)&&B()}function B(){var e=null,n=G.children(".h-slide").find("*");n.each(function(){obj=t(this);var n=obj.attr("data-fontsize");n.indexOf("px")>0&&(n=n.substring(0,n.length-2),e=q(n,D)*(G.find(".fs-stretcher").height()/100),obj.css("fontSize",e+"px"),obj.css("lineHeight","100%"))})}function q(t,e){return t/(e/100)}function z(e){var n=e.length;t.each(e,function(t){clearTimeout(this),t==n-1&&(e=[])})}function Q(){var t=-1;if("Microsoft Internet Explorer"==navigator.appName){var e=navigator.userAgent,n=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");null!=n.exec(e)&&(t=parseFloat(RegExp.$1))}return t}var P={init:!0,running:!1,pause:!1,stop:!1,slideComplete:!1,stepComplete:!1,controlsActive:!0,currentSlide:0,lastSlide:null,maxSlide:0,currentStep:0,maxStep:0,currentObj:0,maxObjs:0,finishedObjs:0},F={currentSlide:null,lastSlide:null,animationkey:"none"},X=[],Y=null,$=null,D=null;t(e).wrapInner('<div class="fraction-slider" />');var G=t(e).find(".fraction-slider"),J=null;P.maxSlide=G.children(".h-slide").length-1;var K=G.width(),U=t("body").width(),V=0;n.fullWidth&&(V=(U-K)/2,K=U);var Z=G.height();i(),this.start=function(){a()},this.startNextSlide=function(){r()},this.stop=function(){l()},this.pause=function(){s(!1)},this.resume=function(){o()}};t.fn.fractionSlider=function(e){return n[e]?n[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void t.error("Method "+e+" does not exist on jQuery.tooltip"):n.init.apply(this,arguments)};var a={};t.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,e){a[e]=function(e){return Math.pow(e,t+2)}}),t.extend(a,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0==t||1==t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,n=4;t<((e=Math.pow(2,--n))-1)/11;);return 1/Math.pow(4,3-n)-7.5625*Math.pow((3*e-2)/22-t,2)}}),t.each(a,function(e,n){t.easing["easeIn"+e]=n,t.easing["easeOut"+e]=function(t){return 1-n(1-t)},t.easing["easeInOut"+e]=function(t){return.5>t?n(2*t)/2:1-n(-2*t+2)/2}})}(jQuery);