(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o=[],s=!0,a=!1;try{for(r=r.call(e);!(s=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);s=!0);}catch(e){a=!0,i=e}finally{try{s||null==r.return||r.return()}finally{if(a)throw i}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var a={target:document.body,reference:void 0,designSize:[1920,1080],transform:"translate(0, 0)",style:{transformOrigin:"0 0"},pause:!1},c=function(){function r(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),s(this,"listeners",new Map);var t=Object.assign(i({},a),e);t.style=Object.assign(i({},a.style),e.style),this.target=t.target,this.reference=t.reference,this.designSize=t.designSize,this.transform=t.transform,this.style=t.style,this.pause=t.pause,this.zoom=1,this.realSize=t.designSize,this.unobserve=null,this.rezoom=null,this.init()}var n,c;return n=r,c=[{key:"init",value:function(){var e=this;if(!this.target)throw Error("Must provide a target Element! Please give `target` option.");if("string"==typeof this.target&&(this.target=document.querySelector(this.target)),!(this.target instanceof HTMLElement))throw Error("Target must a HTMLElement! Please give a right selector or HTMLElement.");if(this.reference){if(!ResizeObserver)throw Error("Sorry your browser does not support `ResizeObserver`!");if("string"==typeof this.reference&&(this.reference=document.querySelector(this.reference)),this.reference instanceof HTMLElement){var t=new ResizeObserver((function(t){if(!e.pause&&t.length&&t[0].contentRect){var r=t[0].contentRect,n=r.width,i=r.height;e.resize(n,i)}}));t.observe(this.reference),this.rezoom=function(){return e.resize(e.reference.clientWidth,e.reference.clientHeight)},this.unobserve=function(){t.unobserve(e.reference);var r=e.listeners.get("unobserve");r&&r.forEach((function(t){return t(e)}))}}}else{var r=function(){return!e.pause&&e.resize()};window.addEventListener("resize",r),!this.pause&&r(),this.rezoom=function(){return e.resize()},this.unobserve=function(){window.removeEventListener("resize",r);var t=e.listeners.get("unobserve");t&&t.forEach((function(t){return t(e)}))}}}},{key:"start",value:function(){var e=this;this.pause=!1;var t=this.listeners.get("start");t&&t.forEach((function(t){return t(e)}))}},{key:"stop",value:function(){var e=this;this.pause=!0;var t=this.listeners.get("stop");t&&t.forEach((function(t){return t(e)}))}},{key:"resize",value:function(){var r=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.innerWidth||document.documentElement.clientWidth,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.innerHeight||document.documentElement.clientHeight;if(!(this.designSize&&this.designSize.length>=2))throw Error("`designSize` Option must be an array of length greater than 2.");var o=this.target,s=t(this.designSize,2),a=s[0],c=s[1];o.style.width=a+"px",o.style.height=c+"px";var u=n/a,f=i/c,l=u<f?u:f;if("object"==e(this.style))for(var h in this.style)o.style[h]=this.style[h];this.transform instanceof Function?o.style.transform=this.tansform(l,[n,i],[a,c]):this.transform&&(o.style.transform="scale(".concat(l,") ").concat(this.transform||"")),this.zoom=l,this.realSize=[this.designSize[0]*l,this.designSize[1]*l];var y=this.listeners.get("zoom");y&&y.forEach((function(e){return e(r)}))}},{key:"on",value:function(e,t){var r;switch(e){case"zoom":case"start":case"stop":case"unobserve":(r=this.listeners.get(e))?r.push(t):this.listeners.set(e,r=[t])}return function(){var e=r.indexOf(t);return-1!=e&&r.splice(e,1),!0}}},{key:"off",value:function(e,t){switch(e){case"zoom":case"start":case"stop":case"unobserve":var r=this.listeners.get(e);if(r){var n=r.indexOf(t);-1!=n&&r.splice(n,1)}}}}],c&&o(n.prototype,c),Object.defineProperty(n,"prototype",{writable:!1}),r}();window.AutoZoom=c})();