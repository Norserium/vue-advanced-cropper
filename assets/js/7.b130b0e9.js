(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{102:function(t,e,o){"use strict";var i=o(90),n=o(30),r=o(63),a=o(103),c=o(104),s=o(97),h=o(105),l=o(106);n(n.S+n.F*!o(107)(function(t){Array.from(t)}),"Array",{from:function(t){var e,o,n,f,u=r(t),p="function"==typeof this?this:Array,d=arguments.length,m=d>1?arguments[1]:void 0,g=void 0!==m,v=0,b=l(u);if(g&&(m=i(m,d>2?arguments[2]:void 0,2)),null==b||p==Array&&c(b))for(o=new p(e=s(u.length));e>v;v++)h(o,v,g?m(u[v],v):u[v]);else for(f=b.call(u),o=new p;!(n=f.next()).done;v++)h(o,v,g?a(f,m,[n.value,v],!0):n.value);return o.length=v,o}})},103:function(t,e,o){var i=o(53);t.exports=function(t,e,o,n){try{return n?e(i(o)[0],o[1]):e(o)}catch(e){var r=t.return;throw void 0!==r&&i(r.call(t)),e}}},104:function(t,e,o){var i=o(29),n=o(14)("iterator"),r=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||r[n]===t)}},105:function(t,e,o){"use strict";var i=o(28),n=o(54);t.exports=function(t,e,o){e in t?i.f(t,e,n(0,o)):t[e]=o}},106:function(t,e,o){var i=o(64),n=o(14)("iterator"),r=o(29);t.exports=o(13).getIteratorMethod=function(t){if(null!=t)return t[n]||t["@@iterator"]||r[i(t)]}},107:function(t,e,o){var i=o(14)("iterator"),n=!1;try{var r=[7][i]();r.return=function(){n=!0},Array.from(r,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!n)return!1;var o=!1;try{var r=[7],a=r[i]();a.next=function(){return{done:o=!0}},r[i]=function(){return a},t(r)}catch(t){}return o}},108:function(t,e,o){t.exports=o(109)},109:function(t,e,o){o(110),o(62),t.exports=o(111)},111:function(t,e,o){var i=o(64),n=o(14)("iterator"),r=o(29);t.exports=o(13).isIterable=function(t){var e=Object(t);return void 0!==e[n]||"@@iterator"in e||r.hasOwnProperty(i(e))}},131:function(t,e,o){},155:function(t,e,o){"use strict";var i=o(87),n=o.n(i);var r=o(93),a=o.n(r),c=o(108),s=o.n(c);function h(t){return function(t){if(n()(t)){for(var e=0,o=new Array(t.length);e<t.length;e++)o[e]=t[e];return o}}(t)||function(t){if(s()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return a()(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}o.d(e,"a",function(){return h})},203:function(t,e,o){var i=o(30),n=o(13),r=o(61);t.exports=function(t,e){var o=(n.Object||{})[t]||Object[t],a={};a[t]=e(o),i(i.S+i.F*r(function(){o(1)}),"Object",a)}},204:function(t,e,o){t.exports=o(303)},295:function(t,e,o){t.exports=o(296)},296:function(t,e,o){o(297);var i=o(13).Object;t.exports=function(t,e){return i.getOwnPropertyDescriptor(t,e)}},297:function(t,e,o){var i=o(38),n=o(199).f;o(203)("getOwnPropertyDescriptor",function(){return function(t,e){return n(i(t),e)}})},298:function(t,e,o){t.exports=o(299)},299:function(t,e,o){o(196),t.exports=o(13).Object.getOwnPropertySymbols},300:function(t,e,o){t.exports=o(301)},301:function(t,e,o){o(302),t.exports=o(13).Object.keys},302:function(t,e,o){var i=o(63),n=o(75);o(203)("keys",function(){return function(t){return n(i(t))}})},303:function(t,e,o){o(304);var i=o(13).Object;t.exports=function(t,e,o){return i.defineProperty(t,e,o)}},304:function(t,e,o){var i=o(30);i(i.S+i.F*!o(36),"Object",{defineProperty:o(28).f})},305:function(t,e,o){"use strict";var i=o(131);o.n(i).a},333:function(t,e,o){"use strict";o.r(e);var i=o(295),n=o.n(i),r=o(298),a=o.n(r),c=o(300),s=o.n(c),h=o(204),l=o.n(h);function f(t,e,o){return e in t?l()(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function u(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},i=s()(o);"function"==typeof a.a&&(i=i.concat(a()(o).filter(function(t){return n()(o,t).enumerable}))),i.forEach(function(e){f(t,e,o[e])})}return t}var p=o(11),d=o(155),m=(o(66),["left","right"]),g=["top","bottom"],v=["left","right","top","bottom"];o(194),o(193),o(195);o(192);function b(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var w=function t(e,o){b(this,t),this.nativeEvent=e,this.directions=o};function x(t,e){return t.width+(e.left+e.right)}function y(t,e){return t.height+(e.top+e.bottom)}function A(t,e,o){return{left:"left"in o?-Math.min(0,Math.ceil(t.left-o.left)-e.left):0,top:"top"in o?-Math.min(0,Math.ceil(t.top-o.top)-e.top):0,bottom:"bottom"in o?-Math.min(0,o.bottom-(t.bottom+e.bottom)):0,right:"right"in o?-Math.min(0,o.right-(t.right+e.right)):0}}function O(t){var e=t.directions,o=t.coordinates,i=t.restrictions,n=t.preserveAspectRatio,r=t.stopOnBreak,a=t.mode,c=void 0===a?"crop":a,s=t.allowedArea,h=void 0===s?{}:s,l=u({},e),f=x(o,l),p=y(o,l);f<0&&(l.left<0&&l.right<0?(l.left=-(o.width-i.minWidth)/(l.left/l.right),l.right=-(o.width-i.minWidth)/(l.right/l.left)):l.left<0?l.left=-(o.width-i.minWidth):l.right<0&&(l.right=-(o.width-i.minWidth))),p<0&&(l.top<0&&l.bottom<0?(l.top=-(o.height-i.minHeight)/(l.top/l.bottom),l.bottom=-(o.height-i.minHeight)/(l.bottom/l.top)):l.top<0?l.top=-(o.height-i.minHeight):l.bottom<0&&(l.bottom=-(o.height-i.minHeight)));var b=A(o,l,h);"move"===c&&(b.left>0&&0===b.right?(l.right+=b.left,l.left-=b.left):b.right>0&&0===b.left&&(l.left+=b.right,l.right-=b.right),b.top>0&&0===b.bottom?(l.bottom+=b.top,l.top-=b.top):b.bottom>0&&0===b.top&&(l.top+=b.bottom,l.bottom-=b.bottom),b=A(o,l,h));var w={width:1/0,height:1/0};if(v.forEach(function(t){b[t]&&l[t]?w[t]=Math.max(0,1-b[t]/l[t]):w[t]=1/0}),n){var O=Math.min.apply(Math,Object(d.a)(v.map(function(t){return w[t]})));O!==1/0&&v.forEach(function(t){l[t]*=O})}else m.forEach(function(t){var e=r?Math.min(w.top,w.bottom):w[t];e!==1/0&&(l[t]*=e)}),g.forEach(function(t){var e=r?Math.min(w.top,w.bottom):w[t];e!==1/0&&(l[t]*=e)});if(f=x(o,l),p=y(o,l),l.right+l.left&&(f>i.maxWidth?w.width=(i.maxWidth-o.width)/(l.right+l.left):f<i.minWidth&&(w.width=(i.minWidth-o.width)/(l.right+l.left))),l.bottom+l.top&&(p>i.maxHeight?w.height=(i.maxHeight-o.height)/(l.bottom+l.top):p<i.minHeight&&(w.height=(i.minHeight-o.height)/(l.bottom+l.top))),n){var E=Math.min(w.width,w.height);E!==1/0&&v.forEach(function(t){l[t]*=E})}else w.width!==1/0&&m.forEach(function(t){l[t]*=w.width}),w.height!==1/0&&g.forEach(function(t){l[t]*=w.height});return l}function E(t,e,o,i,n){var r;return o.minimum&&t/e<o.minimum?r=o.minimum:o.maximum&&t/e>o.maximum?r=o.maximum:n&&(r=i.width/i.height),r}function S(t){var e=t.coordinates,o=t.restrictions,i=t.allowedArea,n=t.aspectRatio,r=t.resizeEvent,a=u({},e,{right:e.left+e.width,bottom:e.top+e.height}),c=r.params||{},s=u({},r.directions),h=c.allowedDirections||{left:!0,right:!0,bottom:!0,top:!0};v.forEach(function(t){h[t]||(s[t]=0)});var l=x(a,s=O({directions:s,restrictions:o,coordinates:a,allowedArea:i,stopOnBreak:c.stopOnBreak})),f=y(a,s),p=E(l,f,n,a,c.preserveAspectRatio);if(p){var d=c.respectDirection;if(d||(d=a.width>=a.height||1==p?"width":"height"),"width"===d){var m=l/p-a.height;h.top&&h.bottom?(s.bottom=m/2,s.top=m/2):h.bottom?s.bottom=m:h.top?s.top=m:h.right?s.right=0:h.left&&(s.left=0)}else if("height"===d){var g=a.width-f*p;h.left&&h.right?(s.left=-g/2,s.right=-g/2):h.left?s.left=-g:h.right?s.right=-g:h.top?s.top=0:h.bottom&&(s.bottom=0)}s=O({directions:s,restrictions:o,coordinates:a,allowedArea:i,preserveAspectRatio:!0,mode:c.compensate&&!c.stopOnBreak?"move":"crop"})}return p=E(l=x(a,s),f=y(a,s),n,a,c.preserveAspectRatio),Math.abs(p-l/f)>.001&&(console.error("Something went wrong and ratio was broken: ".concat(l/f," instead of ").concat(p)),v.forEach(function(t){h[t]||(s[t]=0)})),function(t){var e=t.coordinates,o=t.allowedArea,i=void 0===o?{}:o,n=u({},t.moveEvent.directions),r={left:e.left+n.left,top:e.top+n.top,width:e.width,height:e.height};"left"in i&&r.left<i.left&&(r.left=i.left);"right"in i&&r.left+r.width>i.right&&(r.left=i.right-r.width);"top"in i&&r.top<i.top&&(r.top=i.top);"bottom"in i&&r.top+r.height>i.bottom&&(r.top=i.bottom-r.height);return r}({coordinates:{width:e.width+s.right+s.left,height:e.height+s.top+s.bottom,left:e.left,top:e.top},allowedArea:i,moveEvent:new w({},{left:-s.left,top:-s.top})})}var j={name:"AlgorithmTester",components:{BoundingBox:p.a},data:function(){return{coordinates:{cropper:{width:100,height:100,left:150,top:150},stencil:{width:100,height:100,left:150,top:150},current:{width:100,height:100,left:150,top:150},area:{width:400,height:400,left:0,top:0}},stencilProps:'{\n\t"aspectRatio": 10/16\n}'}},computed:{cropperStyle:function(){return{width:"".concat(this.coordinates.cropper.width,"px"),height:"".concat(this.coordinates.cropper.height,"px"),top:"".concat(this.coordinates.cropper.top,"px"),left:"".concat(this.coordinates.cropper.left,"px")}},currentStyle:function(){return{width:"".concat(this.coordinates.current.width,"px"),height:"".concat(this.coordinates.current.height,"px"),top:"".concat(this.coordinates.current.top,"px"),left:"".concat(this.coordinates.current.left,"px")}},stencilStyle:function(){return{width:"".concat(this.coordinates.stencil.width,"px"),height:"".concat(this.coordinates.stencil.height,"px"),top:"".concat(this.coordinates.stencil.top,"px"),left:"".concat(this.coordinates.stencil.left,"px")}},areaStyle:function(){return{width:"".concat(this.coordinates.area.width,"px"),height:"".concat(this.coordinates.area.height,"px"),top:"".concat(this.coordinates.area.top,"px"),left:"".concat(this.coordinates.area.left,"px")}}},methods:{onResizeStencil:function(t){var e=t.directions;this.coordinates.stencil.left-=e.left,this.coordinates.stencil.top-=e.top,this.coordinates.stencil.width+=e.right+e.left,this.coordinates.stencil.height+=e.top+e.bottom},onResizeArea:function(t){var e=t.directions;this.coordinates.area.left-=e.left,this.coordinates.area.top-=e.top,this.coordinates.area.width+=e.right+e.left,this.coordinates.area.height+=e.top+e.bottom},onResizeCurrent:function(t){var e=t.directions;this.coordinates.current.left-=e.left,this.coordinates.current.top-=e.top,this.coordinates.current.width+=e.right+e.left,this.coordinates.current.height+=e.top+e.bottom},onResize:function(t){var e=S({coordinates:u({},this.coordinates.current),restrictions:{minWidth:100,minHeight:100,maxWidth:400,maxHeight:400},aspectRatio:{minimum:.5},allowedArea:{left:this.coordinates.area.left,top:this.coordinates.area.top,bottom:this.coordinates.area.top+this.coordinates.area.height,right:this.coordinates.area.left+this.coordinates.area.width},coefficient:1,resizeEvent:new p.f({},{left:-(this.coordinates.stencil.left-this.coordinates.current.left),top:-(this.coordinates.stencil.top-this.coordinates.current.top),bottom:this.coordinates.stencil.top+this.coordinates.stencil.height-(this.coordinates.current.top+this.coordinates.current.height),right:this.coordinates.stencil.left+this.coordinates.stencil.width-(this.coordinates.current.left+this.coordinates.current.width)},{compensate:!0}),complete:t});this.coordinates.current=u({},e)}}},C=(o(305),o(1)),R=Object(C.a)(j,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bounding-box-example"},[i("div",{staticClass:"playground"},[i("div",{staticClass:"area-wrapper"},[i("div",{staticClass:"area"},[i("BoundingBox",{staticClass:"area-box",style:t.areaStyle,attrs:{"handler-component":"simple-handler","line-component":"simple-line","lines-classnames":{default:"line line--area"},"handlers-classnames":{default:"handler handler--area"}},on:{resize:t.onResizeArea}}),t._v(" "),i("BoundingBox",{staticClass:"stencil-box",style:t.stencilStyle,attrs:{"handler-component":"simple-handler","line-component":"simple-line","lines-classnames":{default:"line line--stencil"},"handlers-classnames":{default:"handler handler--stencil"}},on:{resize:t.onResizeStencil}}),t._v(" "),i("div",{staticClass:"current-box",style:t.currentStyle})],1),t._v(" "),i("div",{staticClass:"buttons"},[i("div",{staticClass:"button",on:{click:function(e){return t.onResize(!1)}}},[i("img",{attrs:{src:o(77)}})]),t._v(" "),i("div",{staticClass:"button button--complete",on:{click:function(e){return t.onResize(!0)}}},[i("img",{attrs:{src:o(77)}})])])])]),t._v(" "),i("div",{staticClass:"options"},[i("div",{staticClass:"option"},[t._v("\n\t\t\t\tStencil props:\n\t\t\t\t"),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.stencilProps,expression:"stencilProps"}],staticClass:"option__textarea",domProps:{value:t.stencilProps},on:{input:function(e){e.target.composing||(t.stencilProps=e.target.value)}}})])])])},[],!1,null,null,null);e.default=R.exports},64:function(t,e,o){var i=o(73),n=o(14)("toStringTag"),r="Arguments"==i(function(){return arguments}());t.exports=function(t){var e,o,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(o=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),n))?o:r?i(e):"Object"==(a=i(e))&&"function"==typeof e.callee?"Arguments":a}},77:function(t,e,o){t.exports=o.p+"assets/img/resize.ea093182.svg"},87:function(t,e,o){t.exports=o(88)},88:function(t,e,o){o(89),t.exports=o(13).Array.isArray},89:function(t,e,o){var i=o(30);i(i.S,"Array",{isArray:o(92)})},93:function(t,e,o){t.exports=o(94)},94:function(t,e,o){o(62),o(102),t.exports=o(13).Array.from}}]);