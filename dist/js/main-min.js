!function e(t,n,i){function r(a,s){if(!n[a]){if(!t[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(o)return o(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var l=n[a]={exports:{}};t[a][0].call(l.exports,function(e){var n=t[a][1][e];return r(n?n:e)},l,l.exports,e,t,n,i)}return n[a].exports}for(var o="function"==typeof require&&require,a=0;a<i.length;a++)r(i[a]);return r}({1:[function(e,t,n){"use strict";!function(e,t,n,i,r,o,a){e.GoogleAnalyticsObject=r,e[r]=e[r]||function(){(e[r].q=e[r].q||[]).push(arguments)},e[r].l=1*new Date,o=t.createElement(n),a=t.getElementsByTagName(n)[0],o.async=1,o.src=i,a.parentNode.insertBefore(o,a)}(window,document,"script","//www.google-analytics.com/analytics.js","ga");var i=function(e){ga("create",e,"auto"),ga("send","pageview")};t.exports.initialize=i},{}],2:[function(e,t,n){"use strict";window.requestAnimationFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}()},{}],3:[function(e,t,n){"use strict";function i(e,t){function n(e){return Math.sin(e*(Math.PI/2))}function i(){s+=1/60;var e=s/u,t=n(e);1>e?(requestAnimationFrame(i),window.scrollTo(0,o+(r-o)*t)):window.scrollTo(0,r)}var r=e.offsetTop||0,o=window.scrollY,a=t||2e3,s=0,u=Math.max(.1,Math.min(Math.abs(o-r)/a,.8));i()}e("./requestAnimationFrame.js"),t.exports=i},{"./requestAnimationFrame.js":2}],4:[function(e,t,n){"use strict";var i=e("./helpers/googleAnalytics.js"),r=e("./helpers/scrollToElement.js"),o=function(){function e(){for(var e=document.querySelectorAll(".sidebar-link"),t=0;t<e.length;t++)e[t].addEventListener("click",function(e){var t=e.target.getAttribute("href").replace("#",""),n=document.getElementById(t);n&&(e.preventDefault(),r(n,1500))})}return{initialize:function(){var t="UA-43275048-5";i.initialize(t),e()}}}();t.exports.Main=o.initialize()},{"./helpers/googleAnalytics.js":1,"./helpers/scrollToElement.js":3}]},{},[4]);