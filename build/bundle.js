!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/build",n(n.s=3)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-helmet")},function(e,t){e.exports=require("react-router")},function(e,t,n){"use strict";(function(e){n(5);var t=c(n(6)),r=c(n(0)),o=c(n(7)),u=n(2),i=c(n(8)),l=n(1),a=c(n(9));function c(e){return e&&e.__esModule?e:{default:e}}var f=(0,t.default)(),s=e.env.PORT||3e3,p=n(12);f.use(i.default.json()),f.use(i.default.urlencoded({extended:!0})),f.use(t.default.static("build/public")),f.get("/signup",function(e,t){t.sendFile(p.resolve("full/ssrendering/ssr3/build/public/index.html"))}),f.get("/chk",function(e,t){t.json({one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10,eleven:11,tweleve:12,thirty:13})}),f.get("/okay",function(e,t){t.send("hey this okay message checking of the application")}),f.get("*",function(e,t){var n=o.default.renderToString(r.default.createElement(u.StaticRouter,{location:e.url,context:{}},r.default.createElement(a.default,null))),i=l.Helmet.renderStatic(),c="\n      <html>\n        <head>\n        "+i.meta.toString()+"\n"+i.title.toString()+"\n        </head>\n        <body>\n            <div id='root'>\n                "+n+"\n            </div>\n            <script src='client_bundle.js'><\/script>\n        </body>\n      </html>\n  ";t.send(c)}),f.listen(s,function(){console.log("The Server is RUnning in PORT "+s)})}).call(this,n(4))},function(e,t){var n,r,o=e.exports={};function u(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function l(e){if(n===setTimeout)return setTimeout(e,0);if((n===u||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:u}catch(e){n=u}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var a,c=[],f=!1,s=-1;function p(){f&&a&&(f=!1,a.length?c=a.concat(c):s=-1,c.length&&h())}function h(){if(!f){var e=l(p);f=!0;for(var t=c.length;t;){for(a=c,c=[];++s<t;)a&&a[s].run();s=-1,t=c.length}a=null,f=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function b(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new d(e,t)),1!==c.length||f||l(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=b,o.addListener=b,o.once=b,o.off=b,o.removeListener=b,o.removeAllListeners=b,o.emit=b,o.prependListener=b,o.prependOnceListener=b,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t){e.exports=require("babel-polyfill")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("body-parser")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),u=c(o),i=n(2),l=c(n(10)),a=c(n(11));function c(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(){return u.default.createElement(i.Switch,null,u.default.createElement(i.Route,{exact:!0,path:"/",render:function(e){return u.default.createElement(l.default,e)}}),u.default.createElement(i.Route,{exact:!0,path:"/one",render:function(e){return u.default.createElement(a.default,e)}}))}}]),t}();t.default=f},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),u=function(e){return e&&e.__esModule?e:{default:e}}(o),i=n(1);var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"hit",value:function(){console.log("hitted me ")}},{key:"head",value:function(){return u.default.createElement(i.Helmet,null,u.default.createElement("meta",{content:"dhanasekar/rendering_ssr"}),u.default.createElement("title",null,"My page dhanasekar"))}},{key:"render",value:function(){var e=this;return u.default.createElement("div",null,this.head(),u.default.createElement("h1",null,"My Home page of the application in the program of the respective erp"),u.default.createElement("p",null,"The paragraph page of the application"),u.default.createElement("button",{onClick:function(){return e.hit()}},"Click button of the application"))}}]),t}();t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),u=function(e){return e&&e.__esModule?e:{default:e}}(o),i=n(1);var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"hit",value:function(){console.log("One component in the application in the field of ones existinges ")}},{key:"head",value:function(){return u.default.createElement(i.Helmet,null,u.default.createElement("meta",{content:"dhanasekar/rendering_ssr"}),u.default.createElement("title",null,"One Component of the application"))}},{key:"render",value:function(){var e=this;return u.default.createElement("div",null,this.head(),u.default.createElement("h1",null,"The One page of the current appliction"),u.default.createElement("p",null,"any content in the applicatoin"),u.default.createElement("button",{onClick:function(){return e.hit()}},"Click button of the application"))}}]),t}();t.default=l},function(e,t,n){(function(e){function n(e,t){for(var n=0,r=e.length-1;r>=0;r--){var o=e[r];"."===o?e.splice(r,1):".."===o?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}var r=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,o=function(e){return r.exec(e).slice(1)};function u(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}t.resolve=function(){for(var t="",r=!1,o=arguments.length-1;o>=-1&&!r;o--){var i=o>=0?arguments[o]:e.cwd();if("string"!=typeof i)throw new TypeError("Arguments to path.resolve must be strings");i&&(t=i+"/"+t,r="/"===i.charAt(0))}return t=n(u(t.split("/"),function(e){return!!e}),!r).join("/"),(r?"/":"")+t||"."},t.normalize=function(e){var r=t.isAbsolute(e),o="/"===i(e,-1);return(e=n(u(e.split("/"),function(e){return!!e}),!r).join("/"))||r||(e="."),e&&o&&(e+="/"),(r?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(u(e,function(e,t){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e}).join("/"))},t.relative=function(e,n){function r(e){for(var t=0;t<e.length&&""===e[t];t++);for(var n=e.length-1;n>=0&&""===e[n];n--);return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var o=r(e.split("/")),u=r(n.split("/")),i=Math.min(o.length,u.length),l=i,a=0;a<i;a++)if(o[a]!==u[a]){l=a;break}var c=[];for(a=l;a<o.length;a++)c.push("..");return(c=c.concat(u.slice(l))).join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){var t=o(e),n=t[0],r=t[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},t.basename=function(e,t){var n=o(e)[2];return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){return o(e)[3]};var i="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n(4))}]);