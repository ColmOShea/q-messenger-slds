var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/docs/ui/components/scoped-notifications/docs.mdx.js"]=function(e){function t(t){for(var o,c,a=t[0],s=t[1],u=t[2],f=0,d=[];f<a.length;f++)c=a[f],r[c]&&d.push(r[c][0]),r[c]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);for(l&&l(t);d.length;)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,a=1;a<n.length;a++){var s=n[a];0!==r[s]&&(o=!1)}o&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={65:0},i=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/assets/scripts/bundle/";var a=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var l=s;return i.push([128,0]),n()}({0:function(e,t){e.exports=React},128:function(e,t,n){"use strict";n.r(t),n.d(t,"getElement",function(){return p}),n.d(t,"getContents",function(){return h});var o=n(0),r=n(3),i=n(1),c=(n(23),n(16),n(2)),a=n(77),s=r.c.code,u=r.c.h2,l=r.c.h3,f=r.c.h4,d=r.c.p,p=function(){return Object(o.createElement)(r.b,{},Object(o.createElement)("div",{className:"lead doc"},"Scoped notifications serve advisory information for the user that is not important enough to justify an alert. It is often presented as a status bar scoped to the container. They are not dismissable."),Object(o.createElement)(i.a,{exampleOnly:!0},Object(c.e)(a.c,"dark-theme")),u({id:"About-Scoped-Notifications"},"About Scoped Notifications"),l({id:"Accessibility"},"Accessibility"),d({},"Scoped notifications contain ",s({},'role="status"')," on the container to signal to the browser to send an accessible status event to assistive technology. The assistive technology then notifies the user."),u({id:"Base"},"Base"),Object(o.createElement)(i.a,null,a.b),l({id:"Examples"},"Examples"),f({id:"Light-Theme"},"Light Theme"),Object(o.createElement)(i.a,null,Object(c.e)(a.c,"light-theme")),f({id:"Dark-Theme"},"Dark Theme"),Object(o.createElement)(i.a,null,Object(c.e)(a.c,"dark-theme")))},h=function(){return Object(r.a)(p())}},18:function(e,t){e.exports=JSBeautify},19:function(e,t){e.exports=ReactDOM}});