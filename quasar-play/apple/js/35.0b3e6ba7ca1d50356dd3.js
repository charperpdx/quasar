webpackJsonp([35,92],{189:function(t,e,s){var a,n;a=s(371);var o=s(451);n=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(n=a=a.default),"function"==typeof n&&(n=n.options),n.render=o.render,n.staticRenderFns=o.staticRenderFns,t.exports=a},371:function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(117),o=a(n);e.default={data:function(){return{store:o.default.state}}}},451:function(t,e){t.exports={render:function(){var t=this;return t._h("q-layout",[t._h("div",{staticClass:"toolbar",slot:"header"},[t._h("button",{directives:[{name:"go-back",rawName:"v-go-back.single",value:t.store.backRoute,expression:"store.backRoute",modifiers:{single:!0}}],staticClass:"within-iframe-hide"},[t._h("i",["arrow_back"])])," ",t._h("q-toolbar-title",{attrs:{padding:1}},[t._h("i",{directives:[{name:"show",rawName:"v-show",value:t.store.icon,expression:"store.icon"}],staticStyle:{"font-size":"2rem","margin-right":"5px"}},["\n        "+t._s(t.store.icon)+"\n      "]),"\n      "+t._s(t.store.title)+"\n    "])])," ",t.store.tabs.length>0?t._h("q-tabs",{staticClass:"within-iframe-hide",slot:"navigation"},[t._l(t.store.tabs,function(e){return t._h("q-tab",{attrs:{icon:e.icon,route:"/showcase"+t.store.hash+"/"+e.hash,exact:"",replace:""}},["\n      "+t._s(e.label)+"\n    "])})]):t._e()," ",t._h("router-view",{staticClass:"layout-view"})])},staticRenderFns:[]}}});