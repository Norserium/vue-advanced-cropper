(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{135:function(t,i,a){},309:function(t,i,a){"use strict";var e=a(135);a.n(e).a},345:function(t,i,a){"use strict";a.r(i);var e={components:{Cropper:a(11).b},data:function(){return{image:"https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",limitations:{minWidth:400,minHeight:400},result:null}},methods:{pixelsRestriction:function(t){var i=t.minWidth,a=t.minHeight,e=t.maxWidth,n=t.maxHeight;t.imageWidth,t.imageHeight;return{minWidth:i,minHeight:a,maxWidth:e,maxHeight:n}},onCrop:function(t){var i=t.canvas;this.result=i.toDataURL()},showImage:function(){window.open().document.body.innerHTML='<img src="'.concat(this.result,'"></img>')},uploadImage:function(t){var i=this,a=t.target;if(a.files&&a.files[0]){var e=new FileReader;e.onload=function(t){i.image=t.target.result},e.readAsDataURL(a.files[0])}}}},n=(a(309),a(1)),s=Object(n.a)(e,function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"custom-restrictions-example"},[a("Cropper",{attrs:{classname:"custom-restrictions-cropper",src:t.image,restrictions:t.pixelsRestriction,"max-height":t.limitations.maxHeight,"max-width":t.limitations.maxWidth,"min-height":t.limitations.minHeight,"min-width":t.limitations.minWidth,"check-orientation":""},on:{change:t.onCrop}}),t._v(" "),a("div",{staticClass:"panel"},[a("div",{staticClass:"panel__left"},[a("div",{staticClass:"input"},[a("span",{staticClass:"input__label"},[t._v("Min width")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.limitations.minWidth,expression:"limitations.minWidth"}],staticClass:"input__control",attrs:{type:"text"},domProps:{value:t.limitations.minWidth},on:{input:function(i){i.target.composing||t.$set(t.limitations,"minWidth",i.target.value)}}})]),t._v(" "),a("div",{staticClass:"input"},[a("span",{staticClass:"input__label"},[t._v("Min height")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.limitations.minHeight,expression:"limitations.minHeight"}],staticClass:"input__control",attrs:{type:"text"},domProps:{value:t.limitations.minHeight},on:{input:function(i){i.target.composing||t.$set(t.limitations,"minHeight",i.target.value)}}})]),t._v(" "),a("div",{staticClass:"input"},[a("span",{staticClass:"input__label"},[t._v("Max width")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.limitations.maxWidth,expression:"limitations.maxWidth"}],staticClass:"input__control",attrs:{type:"text"},domProps:{value:t.limitations.maxWidth},on:{input:function(i){i.target.composing||t.$set(t.limitations,"maxWidth",i.target.value)}}})]),t._v(" "),a("div",{staticClass:"input"},[a("span",{staticClass:"input__label"},[t._v("Max height")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.limitations.maxHeight,expression:"limitations.maxHeight"}],staticClass:"input__control",attrs:{type:"text"},domProps:{value:t.limitations.maxHeight},on:{input:function(i){i.target.composing||t.$set(t.limitations,"maxHeight",i.target.value)}}})])]),t._v(" "),a("div",{staticClass:"panel__right"},[a("div",{staticClass:"button",on:{click:function(i){return t.$refs.file.click()}}},[a("input",{ref:"file",attrs:{type:"file",accept:"image/*"},on:{change:function(i){return t.uploadImage(i)}}}),t._v("\n        Upload image\n      ")]),t._v(" "),this.result?a("div",{staticClass:"button",on:{click:function(i){return t.showImage()}}},[t._v("\n        Download result\n      ")]):t._e()])])],1)},[],!1,null,null,null);i.default=s.exports}}]);