webpackJsonp([10],{KUWr:function(e,t){!function(t){"use strict";function n(e,t,n){"addEventListener"in window?e.addEventListener(t,n,!1):"attachEvent"in window&&e.attachEvent("on"+t,n)}function o(e,t,n){"removeEventListener"in window?e.removeEventListener(t,n,!1):"detachEvent"in window&&e.detachEvent("on"+t,n)}function i(e){return e.charAt(0).toUpperCase()+e.slice(1)}function r(e){return de+"["+me+"] "+e}function a(e){se&&"object"==typeof window.console&&console.log(r(e))}function u(e){"object"==typeof window.console&&console.warn(r(e))}function c(){l(),a("Initialising iFrame ("+location.href+")"),s(),m(),f("background",X),f("padding",Q),I(),y(),b(),g(),C(),w(),ue=N(),q("init","Init message from host page"),Ce()}function l(){function e(e){return"true"===e}var n=ae.substr(fe).split(":");me=n[0],Y=t!==n[1]?Number(n[1]):Y,Z=t!==n[2]?e(n[2]):Z,se=t!==n[3]?e(n[3]):se,ce=t!==n[4]?Number(n[4]):ce,K=t!==n[6]?e(n[6]):K,$=n[7],ie=t!==n[8]?n[8]:ie,X=n[9],Q=n[10],be=t!==n[11]?Number(n[11]):be,ue.enable=t!==n[12]&&e(n[12]),he=t!==n[13]?n[13]:he,Me=t!==n[14]?n[14]:Me}function s(){function e(e,t){return"function"==typeof e&&(a("Setup custom "+t+"CalcMethod"),Ae[t]=e,e="custom"),e}"iFrameResizer"in window&&Object===window.iFrameResizer.constructor&&(!function(){var e=window.iFrameResizer;a("Reading data from page: "+JSON.stringify(e)),Ne="messageCallback"in e?e.messageCallback:Ne,Ce="readyCallback"in e?e.readyCallback:Ce,ye="targetOrigin"in e?e.targetOrigin:ye,ie="heightCalculationMethod"in e?e.heightCalculationMethod:ie,Me="widthCalculationMethod"in e?e.widthCalculationMethod:Me}(),ie=e(ie,"height"),Me=e(Me,"width")),a("TargetOrigin for parent set to: "+ye)}function d(e,t){return-1!==t.indexOf("-")&&(u("Negative CSS value ignored for "+e),t=""),t}function f(e,n){t!==n&&""!==n&&"null"!==n&&(document.body.style[e]=n,a("Body "+e+' set to "'+n+'"'))}function m(){t===$&&($=Y+"px"),f("margin",d("margin",$))}function g(){document.documentElement.style.height="",document.body.style.height="",a('HTML & body height set to "auto"')}function h(e){var t={add:function(t){function o(){q(e.eventName,e.eventType)}xe[t]=o,n(window,t,o)},remove:function(e){var t=xe[e];delete xe[e],o(window,e,t)}};e.eventNames&&Array.prototype.map?(e.eventName=e.eventNames[0],e.eventNames.map(t[e.method])):t[e.method](e.eventName),a(i(e.method)+" event listener: "+e.eventType)}function p(e){h({method:e,eventType:"Animation Start",eventNames:["animationstart","webkitAnimationStart"]}),h({method:e,eventType:"Animation Iteration",eventNames:["animationiteration","webkitAnimationIteration"]}),h({method:e,eventType:"Animation End",eventNames:["animationend","webkitAnimationEnd"]}),h({method:e,eventType:"Input",eventName:"input"}),h({method:e,eventType:"Mouse Up",eventName:"mouseup"}),h({method:e,eventType:"Mouse Down",eventName:"mousedown"}),h({method:e,eventType:"Orientation Change",eventName:"orientationchange"}),h({method:e,eventType:"Print",eventName:["afterprint","beforeprint"]}),h({method:e,eventType:"Ready State Change",eventName:"readystatechange"}),h({method:e,eventType:"Touch Start",eventName:"touchstart"}),h({method:e,eventType:"Touch End",eventName:"touchend"}),h({method:e,eventType:"Touch Cancel",eventName:"touchcancel"}),h({method:e,eventType:"Transition Start",eventNames:["transitionstart","webkitTransitionStart","MSTransitionStart","oTransitionStart","otransitionstart"]}),h({method:e,eventType:"Transition Iteration",eventNames:["transitioniteration","webkitTransitionIteration","MSTransitionIteration","oTransitionIteration","otransitioniteration"]}),h({method:e,eventType:"Transition End",eventNames:["transitionend","webkitTransitionEnd","MSTransitionEnd","oTransitionEnd","otransitionend"]}),"child"===he&&h({method:e,eventType:"IFrame Resized",eventName:"resize"})}function v(e,t,n,o){return t!==e&&(e in n||(u(e+" is not a valid option for "+o+"CalculationMethod."),e=t),a(o+' calculation method set to "'+e+'"')),e}function y(){ie=v(ie,oe,Re,"height")}function b(){Me=v(Me,Oe,Le,"width")}function w(){!0===K?(p("add"),x()):a("Auto Resize disabled")}function T(){a("Disable outgoing messages"),pe=!1}function E(){a("Remove event listener: Message"),o(window,"message",V)}function S(){null!==G&&G.disconnect()}function O(){p("remove"),S(),clearInterval(le)}function M(){T(),E(),!0===K&&O()}function I(){var e=document.createElement("div");e.style.clear="both",e.style.display="block",document.body.appendChild(e)}function N(){function e(){return{x:window.pageXOffset!==t?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==t?window.pageYOffset:document.documentElement.scrollTop}}function o(t){var n=t.getBoundingClientRect(),o=e();return{x:parseInt(n.left,10)+parseInt(o.x,10),y:parseInt(n.top,10)+parseInt(o.y,10)}}function i(e){var n=e.split("#")[1]||e,i=decodeURIComponent(n),r=document.getElementById(i)||document.getElementsByName(i)[0];t!==r?function(e){var t=o(e);a("Moving to in page link (#"+n+") at x: "+t.x+" y: "+t.y),J(t.y,t.x,"scrollToOffset")}(r):(a("In page link (#"+n+") not found in iFrame, so sending to parent"),J(0,0,"inPageLink","#"+n))}function r(){""!==location.hash&&"#"!==location.hash&&i(location.href)}function c(){function e(e){function t(e){e.preventDefault(),i(this.getAttribute("href"))}"#"!==e.getAttribute("href")&&n(e,"click",t)}Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'),e)}function l(){n(window,"hashchange",r)}function s(){setTimeout(r,ee)}return ue.enable?function(){Array.prototype.forEach&&document.querySelectorAll?(a("Setting up location.hash handlers"),c(),l(),s()):u("In page linking not fully supported in this browser! (See README.md for IE8 workaround)")}():a("In page linking not enabled"),{findTarget:i}}function C(){a("Enable public methods"),Ie.parentIFrame={autoResize:function(e){return!0===e&&!1===K?(K=!0,w()):!1===e&&!0===K&&(K=!1,O()),K},close:function(){J(0,0,"close"),M()},getId:function(){return me},getPageInfo:function(e){"function"==typeof e?(ke=e,J(0,0,"pageInfo")):(ke=function(){},J(0,0,"pageInfoStop"))},moveToAnchor:function(e){ue.findTarget(e)},reset:function(){U("parentIFrame.reset")},scrollTo:function(e,t){J(t,e,"scrollTo")},scrollToOffset:function(e,t){J(t,e,"scrollToOffset")},sendMessage:function(e,t){J(0,0,"message",JSON.stringify(e),t)},setHeightCalculationMethod:function(e){ie=e,y()},setWidthCalculationMethod:function(e){Me=e,b()},setTargetOrigin:function(e){a("Set targetOrigin: "+e),ye=e},size:function(e,t){q("size","parentIFrame.size("+(e||"")+(t?","+t:"")+")",e,t)}}}function k(){0!==ce&&(a("setInterval: "+ce+"ms"),le=setInterval(function(){q("interval","setInterval: "+ce)},Math.abs(ce)))}function A(){function e(e){function t(e){!1===e.complete&&(a("Attach listeners to "+e.src),e.addEventListener("load",r,!1),e.addEventListener("error",u,!1),l.push(e))}"attributes"===e.type&&"src"===e.attributeName?t(e.target):"childList"===e.type&&Array.prototype.forEach.call(e.target.querySelectorAll("img"),t)}function n(e){l.splice(l.indexOf(e),1)}function o(e){a("Remove listeners from "+e.src),e.removeEventListener("load",r,!1),e.removeEventListener("error",u,!1),n(e)}function i(e,n,i){o(e.target),q(n,i+": "+e.target.src,t,t)}function r(e){i(e,"imageLoad","Image loaded")}function u(e){i(e,"imageLoadFailed","Image load failed")}function c(t){q("mutationObserver","mutationObserver: "+t[0].target+" "+t[0].type),t.forEach(e)}var l=[],s=window.MutationObserver||window.WebKitMutationObserver,d=function(){var e=document.querySelector("body"),t={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0};return d=new s(c),a("Create body MutationObserver"),d.observe(e,t),d}();return{disconnect:function(){"disconnect"in d&&(a("Disconnect body MutationObserver"),d.disconnect(),l.forEach(o))}}}function x(){var e=0>ce;window.MutationObserver||window.WebKitMutationObserver?e?k():G=A():(a("MutationObserver not supported in this browser!"),k())}function z(e,t){var n=0;return t=t||document.body,"defaultView"in document&&"getComputedStyle"in document.defaultView?(n=document.defaultView.getComputedStyle(t,null),n=null!==n?n[e]:0):n=function(e){if(/^\d+(px)?$/i.test(e))return parseInt(e,j);var n=t.style.left,o=t.runtimeStyle.left;return t.runtimeStyle.left=t.currentStyle.left,t.style.left=e||0,e=t.style.pixelLeft,t.style.left=n,t.runtimeStyle.left=o,e}(t.currentStyle[e]),parseInt(n,j)}function R(e){e>Ee/2&&(Ee=2*e,a("Event throttle increased to "+Ee+"ms"))}function L(e,t){for(var n=t.length,o=0,r=0,u=i(e),c=ze(),l=0;l<n;l++)(o=t[l].getBoundingClientRect()[e]+z("margin"+u,t[l]))>r&&(r=o);return c=ze()-c,a("Parsed "+n+" HTML elements"),a("Element position calculated in "+c+"ms"),R(c),r}function F(e){return[e.bodyOffset(),e.bodyScroll(),e.documentElementOffset(),e.documentElementScroll()]}function P(e,t){var n=document.querySelectorAll("["+t+"]");return 0===n.length&&function(){u("No tagged elements ("+t+") found on page"),document.querySelectorAll("body *")}(),L(e,n)}function W(){return document.querySelectorAll("body *")}function D(e,n,o,i){function r(){return!(e in{init:1,interval:1,size:1})}function u(){return ie in ge||Z&&Me in ge}function c(){a("No change in size detected")}var l,s;!function(){function e(e,t){return!(Math.abs(e-t)<=be)}return l=t!==o?o:Re[ie](),s=t!==i?i:Le[Me](),e(ne,l)||Z&&e(Se,s)}()&&"init"!==e?function(){r()&&u()?U(n):e in{interval:1}||c()}():(H(),function(){ne=l,Se=s,J(ne,Se,e)}())}function q(e,t,n,o){!function(){return we&&e in _}()?(!function(){e in{reset:1,resetPage:1,init:1}||a("Trigger event: "+t)}(),"init"===e?D(e,t,n,o):Fe(e,t,n,o)):a("Trigger event cancelled: "+e)}function H(){we||(we=!0,a("Trigger event lock on")),clearTimeout(Te),Te=setTimeout(function(){we=!1,a("Trigger event lock off"),a("--")},ee)}function B(e){ne=Re[ie](),Se=Le[Me](),J(ne,Se,e)}function U(e){var t=ie;ie=oe,a("Reset trigger event: "+e),H(),B("reset"),ie=t}function J(e,n,o,i,r){!0===pe&&(function(){t===r?r=ye:a("Message targetOrigin: "+r)}(),function(){var u=e+":"+n,c=me+":"+u+":"+o+(t!==i?":"+i:"");a("Sending message to host page ("+c+")"),ve.postMessage(de+c,r)}())}function V(t){function o(){return t.data.split("]")[1].split(":")[0]}function i(){return t.data.substr(t.data.indexOf(":")+1)}function r(){return!(void 0!==e&&e.exports)&&"iFrameResize"in window}function l(){return t.data.split(":")[2]in{true:1,false:1}}function s(){var e=o();e in d?d[e]():r()||l()||u("Unexpected message ("+t.data+")")}var d={init:function(){"interactive"===document.readyState||"complete"===document.readyState?function(){ae=t.data,ve=t.source,c(),te=!1,setTimeout(function(){re=!1},ee)}():(a("Waiting for page ready"),n(window,"readystatechange",d.initFromParent))},reset:function(){re?a("Page reset ignored by init"):(a("Page size reset by host page"),B("resetPage"))},resize:function(){q("resizeParent","Parent window requested size check")},moveToAnchor:function(){ue.findTarget(i())},inPageLink:function(){this.moveToAnchor()},pageInfo:function(){var e=i();a("PageInfoFromParent called from parent: "+e),ke(JSON.parse(e)),a(" --")},message:function(){var e=i();a("MessageCallback called from parent: "+e),Ne(JSON.parse(e)),a(" --")}};(function(){return de===(""+t.data).substr(0,fe)})()&&function(){!1===te?s():l()?d.init():a('Ignored message of type "'+o()+'". Received before initialization.')}()}if("undefined"!=typeof window){var K=!0,j=10,X="",Y=0,$="",G=null,Q="",Z=!1,_={resize:1,click:1},ee=128,te=!0,ne=1,oe="bodyOffset",ie=oe,re=!0,ae="",ue={},ce=32,le=null,se=!1,de="[iFrameSizer]",fe=de.length,me="",ge={max:1,min:1,bodyScroll:1,documentElementScroll:1},he="child",pe=!0,ve=window.parent,ye="*",be=0,we=!1,Te=null,Ee=16,Se=1,Oe="scroll",Me=Oe,Ie=window,Ne=function(){u("MessageCallback function not defined")},Ce=function(){},ke=function(){},Ae={height:function(){return u("Custom height calculation function not defined"),document.documentElement.offsetHeight},width:function(){return u("Custom width calculation function not defined"),document.body.scrollWidth}},xe={},ze=Date.now||function(){return(new Date).getTime()},Re={bodyOffset:function(){return document.body.offsetHeight+z("marginTop")+z("marginBottom")},offset:function(){return Re.bodyOffset()},bodyScroll:function(){return document.body.scrollHeight},custom:function(){return Ae.height()},documentElementOffset:function(){return document.documentElement.offsetHeight},documentElementScroll:function(){return document.documentElement.scrollHeight},max:function(){return Math.max.apply(null,F(Re))},min:function(){return Math.min.apply(null,F(Re))},grow:function(){return Re.max()},lowestElement:function(){return Math.max(Re.bodyOffset()||Re.documentElementOffset(),L("bottom",W()))},taggedElement:function(){return P("bottom","data-iframe-height")}},Le={bodyScroll:function(){return document.body.scrollWidth},bodyOffset:function(){return document.body.offsetWidth},custom:function(){return Ae.width()},documentElementScroll:function(){return document.documentElement.scrollWidth},documentElementOffset:function(){return document.documentElement.offsetWidth},scroll:function(){return Math.max(Le.bodyScroll(),Le.documentElementScroll())},max:function(){return Math.max.apply(null,F(Le))},min:function(){return Math.min.apply(null,F(Le))},rightMostElement:function(){return L("right",W())},taggedElement:function(){return P("right","data-iframe-width")}},Fe=function(e){var t,n,o,i=null,r=0,a=function(){r=ze(),i=null,o=e.apply(t,n),i||(t=n=null)};return function(){var u=ze();r||(r=u);var c=Ee-(u-r);return t=this,n=arguments,c<=0||c>Ee?(i&&(clearTimeout(i),i=null),r=u,o=e.apply(t,n),i||(t=n=null)):i||(i=setTimeout(a,c)),o}}(D);n(window,"message",V),function(){"loading"!==document.readyState&&window.parent.postMessage("[iFrameResizerChild]Ready","*")}()}}()}},["KUWr"]);
//# sourceMappingURL=uiengine-preview.7d527f1efb61f66ec24a.js.map