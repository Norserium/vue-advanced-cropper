(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{181:function(t,s,i){},331:function(t,s,i){t.exports=i.p+"assets/img/zoom-in.183e2f11.svg"},332:function(t,s,i){t.exports=i.p+"assets/img/zoom-out.2312de1c.svg"},333:function(t,s,i){t.exports=i.p+"assets/img/arrow-top.83788133.svg"},334:function(t,s,i){t.exports=i.p+"assets/img/arrow-left.68982e03.svg"},335:function(t,s,i){t.exports=i.p+"assets/img/arrow-right.94faf580.svg"},336:function(t,s,i){t.exports=i.p+"assets/img/arrow-bottom.a1a804cf.svg"},337:function(t,s,i){t.exports=i.p+"assets/img/girl-in-green.1ffce0df.jpg"},338:function(t,s,i){"use strict";var e=i(181);i.n(e).a},368:function(t,s,i){"use strict";i.r(s);var e={components:{Cropper:i(11).b},data:function(){return{image:i(337),size:{width:null,height:null}}},methods:{updateSize:function(t){var s=t.coordinates;this.size.width=Math.round(s.width),this.size.height=Math.round(s.height)},zoom:function(t){this.$refs.cropper.zoom(t)},move:function(t){"left"===t?this.$refs.cropper.move(-this.size.width/4):"right"===t?this.$refs.cropper.move(this.size.width/4):"top"===t?this.$refs.cropper.move(0,-this.size.height/4):"bottom"===t&&this.$refs.cropper.move(0,this.size.height/4)}}},o=(i(338),i(1)),r=Object(o.a)(e,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"set-coordinates-example"},[e("Cropper",{ref:"cropper",attrs:{classname:"coodinates-cropper",src:t.image,"stencil-props":{minAspectRatio:.5}},on:{change:t.updateSize}}),t._v(" "),e("div",{staticClass:"buttons"},[e("div",{staticClass:"button",attrs:{title:"Zoom In"},on:{click:function(s){return t.zoom(2)}}},[e("img",{attrs:{src:i(331)}})]),t._v(" "),e("div",{staticClass:"button",attrs:{title:"Zoom Out"},on:{click:function(s){return t.zoom(.5)}}},[e("img",{attrs:{src:i(332)}})]),t._v(" "),e("div",{staticClass:"button",attrs:{title:"Move Top"},on:{click:function(s){return t.move("top")}}},[e("img",{attrs:{src:i(333)}})]),t._v(" "),e("div",{staticClass:"button",attrs:{title:"Move Left"},on:{click:function(s){return t.move("left")}}},[e("img",{attrs:{src:i(334)}})]),t._v(" "),e("div",{staticClass:"button",attrs:{title:"Move Right"},on:{click:function(s){return t.move("right")}}},[e("img",{attrs:{src:i(335)}})]),t._v(" "),e("div",{staticClass:"button",attrs:{title:"Move Bottom"},on:{click:function(s){return t.move("bottom")}}},[e("img",{attrs:{src:i(336)}})])]),t._v(" "),t.size.width&&t.size.height?e("div",{staticClass:"size-info"},[e("div",[t._v("Width: "+t._s(t.size.width)+"px")]),t._v(" "),e("div",[t._v("Height: "+t._s(t.size.height)+"px")])]):t._e()],1)},[],!1,null,null,null);s.default=r.exports}}]);