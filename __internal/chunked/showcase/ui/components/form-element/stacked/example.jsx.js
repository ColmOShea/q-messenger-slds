var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/showcase/ui/components/form-element/stacked/example.jsx.js"]=function(e){function t(t){for(var n,o,c=t[0],i=t[1],d=t[2],u=0,p=[];u<c.length;u++)o=c[u],r[o]&&p.push(r[o][0]),r[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(s&&s(t);p.length;)p.shift()();return l.push.apply(l,d||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],n=!0,c=1;c<a.length;c++){var i=a[c];0!==r[i]&&(n=!1)}n&&(l.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={89:0,6:0,13:0,14:0,22:0,24:0,26:0,35:0,36:0,37:0,56:0,72:0,73:0,79:0,80:0,93:0,94:0,96:0,97:0,98:0,103:0,104:0,112:0,117:0,118:0,122:0,124:0,127:0,131:0,133:0,135:0,136:0,137:0,140:0,142:0,145:0,146:0,147:0,150:0,154:0,157:0},l=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/assets/scripts/bundle/";var c=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var s=i;return l.push([124,0]),a()}({0:function(e,t){e.exports=React},124:function(e,t,a){"use strict";a.r(t),a.d(t,"states",function(){return p}),a.d(t,"examples",function(){return f});var n=a(0),r=a.n(n),l=a(33),o=a(35),c=a(5),i=a(8),d=a(36),s=a(27),u=a(23);t.default=r.a.createElement(l.a,{direction:"stacked",snapshot:o.b,isViewMode:!0,hasInlineEdit:!0});var p=[{id:"edit-stacked",label:"Stacked form layout - Edit Mode",element:r.a.createElement(l.a,{direction:"stacked",snapshot:o.b})}],f=[{id:"stacked-single-column",label:"Stacked form layout - 1 column - Read Only Mode",element:r.a.createElement(l.a,{direction:"stacked",snapshot:o.d,isViewMode:!0})},{id:"deprecated-view-stacked",label:"Deprecated - Stacked form layout - View Mode",element:r.a.createElement(l.a,{direction:"stacked",snapshot:o.a,isViewMode:!0,hasInlineEdit:!0,isDeprecated:!0})},{id:"deprecated-edit-stacked",label:"Deprecated - Stacked form layout - Edit Mode",element:r.a.createElement(l.a,{direction:"stacked",snapshot:o.a,isDeprecated:!0})},{id:"simple-stacked",label:"Simple - Stacked form layout",element:r.a.createElement("div",{className:"slds-form"},r.a.createElement(c.b,{labelContent:"Text Input",inputId:"stacked-input-id-01",isStacked:!0},r.a.createElement(i.a,{id:"stacked-input-id-01",placeholder:"Placeholder Text"})),r.a.createElement(c.b,{labelContent:"Textarea Input",inputId:"stacked-input-id-02",isStacked:!0},r.a.createElement(d.Textarea,{id:"stacked-input-id-02",placeholder:"Placeholder Text"})),r.a.createElement(c.a,{label:"Checkbox Group label",isStacked:!0},r.a.createElement(u.Checkbox,{label:"All opportunities owned by you",name:"default"}),r.a.createElement(u.Checkbox,{label:"All contacts in the account owned by you",name:"default"})),r.a.createElement(c.a,{label:"Radio Group label",isStacked:!0},r.a.createElement(s.Radio,{label:"Lead Generation",name:"options"}),r.a.createElement(s.Radio,{label:"Education Leads",name:"options"})))}]}});