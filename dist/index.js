"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("react"),e=require("classnames");function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var o=n(t),a=n(e);!function(t,e){void 0===e&&(e={});var n=e.insertAt;if(t&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&o.firstChild?o.insertBefore(a,o.firstChild):o.appendChild(a),a.styleSheet?a.styleSheet.cssText=t:a.appendChild(document.createTextNode(t))}}('.button{background-color:#4caf50;border:none;box-shadow:0 8px 16px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);color:#fff;cursor:pointer;font-size:28px;overflow:hidden;padding:20px;position:relative;text-align:center;text-decoration:none;-webkit-transition-duration:.4s;transition-duration:.4s;width:200px}.button:after{background:#f1f1f1;content:"";display:block;margin-left:-20px!important;margin-top:-120%;opacity:0;padding-left:350%;padding-top:300%;position:absolute;transition:all .8s}.button:active:after{margin:0;opacity:1;padding:0;transition:0s}');exports.Button=({onClick:t,disabled:e,className:n,children:i})=>o.default.createElement("button",{type:"button",className:a.default("button",n),onClick:t,disabled:e,"data-testid":"button-comp"},i);