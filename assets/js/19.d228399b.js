(window.webpackJsonp=window.webpackJsonp||[]).push([[19,50],{303:function(e,t,n){},304:function(e,t,n){e.exports=n.p+"assets/img/link.03ea4d17.svg"},305:function(e,t,n){"use strict";n(303)},306:function(e,t,n){"use strict";n.r(t);var o={props:{href:{type:String,default:""},noBorder:{type:Boolean,default:!1}}},r=(n(305),n(41)),a=Object(r.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"example-wrapper",class:{"example-wrapper--no-border":this.noBorder}},[this._t("default"),this._v(" "),this.href?t("a",{staticClass:"example-wrapper__icon",attrs:{href:this.href,title:"Full Source",target:"_blank",rel:"nofollow noopener"}},[t("img",{attrs:{src:n(304)}})]):this._e()],2)}),[],!1,null,null,null);t.default=a.exports},480:function(e,t,n){},601:function(e,t,n){e.exports=n.p+"assets/img/reset.7e4751dd.svg"},602:function(e,t,n){var o,r,a;r=[],void 0===(a="function"==typeof(o=function(){"use strict";function t(e,t,n){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){s(o.response,t,n)},o.onerror=function(){console.error("could not download file")},o.send()}function n(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function o(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(n){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var r="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=r.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),s=r.saveAs||("object"!=typeof window||window!==r?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(e,a,s){var i=r.URL||r.webkitURL,c=document.createElement("a");a=a||e.name||"download",c.download=a,c.rel="noopener","string"==typeof e?(c.href=e,c.origin===location.origin?o(c):n(c.href)?t(e,a,s):o(c,c.target="_blank")):(c.href=i.createObjectURL(e),setTimeout((function(){i.revokeObjectURL(c.href)}),4e4),setTimeout((function(){o(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,r,a){if(r=r||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(function(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}(e,a),r);else if(n(e))t(e,r,a);else{var s=document.createElement("a");s.href=e,s.target="_blank",setTimeout((function(){o(s)}))}}:function(e,n,o,s){if((s=s||open("","_blank"))&&(s.document.title=s.document.body.innerText="downloading..."),"string"==typeof e)return t(e,n,o);var i="application/octet-stream"===e.type,c=/constructor/i.test(r.HTMLElement)||r.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||i&&c||a)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var e=u.result;e=l?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),s?s.location.href=e:location=e,s=null},u.readAsDataURL(e)}else{var f=r.URL||r.webkitURL,p=f.createObjectURL(e);s?s.location=p:location.href=p,s=null,setTimeout((function(){f.revokeObjectURL(p)}),4e4)}});r.saveAs=s.saveAs=s,e.exports=s})?o.apply(t,r):o)||(e.exports=a)},603:function(e,t,n){"use strict";n(480)},655:function(e,t,n){"use strict";n.r(t);n(419),n(10),n(100),n(27),n(420),n(422),n(423),n(424),n(425),n(426),n(427),n(428),n(429),n(430),n(431),n(432),n(433),n(434),n(435),n(436),n(437),n(438),n(439),n(440),n(441),n(442),n(443),n(444),n(32),n(445);var o=n(307),r=n(306),a=n(602);function s(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=new Uint8Array(e).subarray(0,4),o="",r=0;r<n.length;r++)o+=n[r].toString(16);switch(o){case"89504e47":return"image/png";case"47494638":return"image/gif";case"ffd8ffe0":case"ffd8ffe1":case"ffd8ffe2":case"ffd8ffe3":case"ffd8ffe8":return"image/jpeg";default:return t}}var i={components:{Cropper:o.c,ExampleWrapper:r.default},data:function(){return{image:{src:null,type:null}}},methods:{crop:function(){this.$refs.cropper.getResult().canvas.toBlob((function(e){Object(a.saveAs)(e)}),this.image.type)},reset:function(){this.image={src:null,type:null}},loadImage:function(e){var t=this,n=e.target.files;if(n&&n[0]){this.image.src&&URL.revokeObjectURL(this.image.src);var o=URL.createObjectURL(n[0]),r=new FileReader;r.onload=function(e){t.image={src:o,type:s(e.target.result,n[0].type)}},r.readAsDataURL(n[0])}}},destroyed:function(){this.image.src&&URL.revokeObjectURL(this.image.src)}},c=(n(603),n(41)),l=Object(c.a)(i,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("example-wrapper",{staticClass:"upload-example",attrs:{"no-border":!0,href:"https://github.com/Norserium/vue-advanced-cropper/blob/master/example/docs/.vuepress/components/upload-example.vue"}},[o("div",{staticClass:"cropper-wrapper"},[o("cropper",{ref:"cropper",staticClass:"upload-example-cropper",attrs:{"check-orientation":"",src:e.image.src}}),e._v(" "),o("div",{staticClass:"reset-button",attrs:{title:"Reset Image"},on:{click:function(t){return e.reset()}}},[o("img",{attrs:{src:n(601)}})])],1),e._v(" "),o("div",{staticClass:"button-wrapper"},[o("button",{staticClass:"button",on:{click:function(t){return e.$refs.file.click()}}},[o("input",{ref:"file",attrs:{type:"file",accept:"image/*"},on:{change:function(t){return e.loadImage(t)}}}),e._v("\n\t\t\tUpload image\n\t\t")]),e._v(" "),e.image.src?o("button",{staticClass:"button",on:{click:function(t){return e.crop()}}},[e._v("Download result")]):e._e()])])}),[],!1,null,null,null);t.default=l.exports}}]);