﻿!function(){"use strict";var e,t,n,r,o,a,i={},c={};function u(e){var t=c[e];if(void 0!==t)return t.exports;var n=c[e]={id:e,loaded:!1,exports:{}};return i[e].call(n.exports,n,n.exports,u),n.loaded=!0,n.exports}u.m=i,e=[],u.O=function(t,n,r,o){if(!n){var a=1/0;for(d=0;d<e.length;d++){n=e[d][0],r=e[d][1],o=e[d][2];for(var i=!0,c=0;c<n.length;c++)(!1&o||a>=o)&&Object.keys(u.O).every((function(e){return u.O[e](n[c])}))?n.splice(c--,1):(i=!1,o<a&&(a=o));if(i){e.splice(d--,1);var f=r();void 0!==f&&(t=f)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[n,r,o]},u.F={},u.E=function(e){Object.keys(u.F).map((function(t){u.F[t](e)}))},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},u.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);u.r(o);var a={};t=t||[null,n({}),n([]),n(n)];for(var i=2&r&&e;"object"==typeof i&&!~t.indexOf(i);i=n(i))Object.getOwnPropertyNames(i).forEach((function(t){a[t]=function(){return e[t]}}));return a.default=function(){return e},u.d(o,a),o},u.d=function(e,t){for(var n in t)u.o(t,n)&&!u.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},u.f={},u.e=function(e){return Promise.all(Object.keys(u.f).reduce((function(t,n){return u.f[n](e,t),t}),[]))},u.u=function(e){return 4736===e?"vendor.7f61898fa58c02f91a16.js":4578===e?"icons.2144ba22fa6511e361f2.js":5456===e?"vendor~vkui.cb8fd0c181caa3de16d2.js":3898===e?"vendor~react.36fcdea0aac3d2711d7e.js":1777===e?"vendor~icons.9066c65802c15cc7a075.js":5273===e?"b-be5eacd956041f950bf87ebd57bd7050.ec0e546654268e5f0b43.js":9030===e?"b-a9c0942b1326fffb17197685e2669bd8.117c236249471cfae0f8.js":8695===e?"vendor~lottie.dabe9d36c728797e9c37.js":3079===e?"vendor~draggable.1eb592d2c67aff802cba.js":{1070:"thumbnail_creator",1738:"vendor~cropperjs",4617:"narratives_list",5544:"mvk-lottie",5992:"audio_messages",5999:"vendor~MediaView",6052:"vendor~hls",7673:"MediaView"}[e]+"."+{1070:"9e47071d3dfa4a43c2d9",1738:"2c4e8f1aab570dfb3032",4617:"4dce25235c0b73842aa9",5544:"a29b88348024697998aa",5992:"a7f2edd6b85b32ea3494",5999:"6cd3f6743d4b10c74dc0",6052:"2a921ea0da50ac642533",7673:"ebaae438e558fee801d2"}[e]+".js"},u.miniCssF=function(e){return 7634===e?"apps_connect.3e678b08182a0fa1dde3.css":2661===e?"vkapps.3e678b08182a0fa1dde3.css":e+".css"},u.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),u.hmd=function(e){return(e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r={},u.l=function(e,t,n,o){if(r[e])r[e].push(t);else{var a,i;if(void 0!==n)for(var c=document.getElementsByTagName("script"),f=0;f<c.length;f++){var d=c[f];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")=="vk:"+n){a=d;break}}a||(i=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,u.nc&&a.setAttribute("nonce",u.nc),a.setAttribute("data-webpack","vk:"+n),a.src=e),r[e]=[t];var s=function(t,n){a.onerror=a.onload=null,clearTimeout(l);var o=r[e];if(delete r[e],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(n)})),t)return t(n)},l=setTimeout(s.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=s.bind(null,a.onerror),a.onload=s.bind(null,a.onload),i&&document.head.appendChild(a)}},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.p="/dist/mobile/",o=function(e){return new Promise((function(t,n){var r=u.miniCssF(e),o=u.p+r;if(function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=(i=n[r]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===t))return i}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){var i;if((o=(i=a[r]).getAttribute("data-href"))===e||o===t)return i}}(r,o))return t();!function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=function(a){if(o.onerror=o.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),c=a&&a.target&&a.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=c,o.parentNode.removeChild(o),r(u)}},o.href=t,document.head.appendChild(o)}(e,o,t,n)}))},a={3666:0},u.f.miniCss=function(e,t){a[e]?t.push(a[e]):0!==a[e]&&{7673:1}[e]&&t.push(a[e]=o(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))},function(){var e={3666:0};u.f.j=function(t,n){var r=u.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else if(3666!=t){var o=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=o);var a=u.p+u.u(t),i=new Error;u.l(a,(function(n){if(u.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,r[1](i)}}),"chunk-"+t,t)}else e[t]=0},u.F.j=function(t){if((!u.o(e,t)||void 0===e[t])&&3666!=t){e[t]=null;var n=document.createElement("link");u.nc&&n.setAttribute("nonce",u.nc),n.rel="prefetch",n.as="script",n.href=u.p+u.u(t),document.head.appendChild(n)}},u.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,a=n[0],i=n[1],c=n[2],f=0;for(r in i)u.o(i,r)&&(u.m[r]=i[r]);if(c)var d=c(u);for(t&&t(n);f<a.length;f++)o=a[f],u.o(e,o)&&e[o]&&e[o][0](),e[a[f]]=0;return u.O(d)},n=self.webpackChunkvk=self.webpackChunkvk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}()}();