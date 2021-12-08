exports.ids = [7];
exports.modules = {

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Videos.vue?vue&type=template&id=f8a0231c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-container',{staticClass:"videos",attrs:{"fluid":"","id":"videos"}},[_c('b-row',[_c('b-col',{attrs:{"cols":"10","offset":"1","sm":"6","lg":"4","xs":"8","offset-sm":"3","offset-lg":"1","offeset-xs":"0"}},[_c('div',{staticClass:"lollapalooza"},[_c('p',[_vm._v(_vm._s(_vm.video.titulo))]),_vm._v(" "),_c('p',[_c('span',[_vm._v(_vm._s(_vm.video.subtitulo))])]),_vm._v(" "),_c('b-row',{staticClass:"box"},[_c('div',{staticClass:"d1"},[_c('p',[_vm._v("assista agora"),_c('br'),_vm._v("no youtube")])]),_vm._v(" "),_c('div',{staticClass:"d2"},[_c('b-img-lazy',{attrs:{"src":"icon-youtube.png"}})],1)])],1)]),_vm._v(" "),_c('b-col',{staticClass:"bg-embed",attrs:{"cols":"11","offset":"1","lg":"6","xs":"4","offset-sm":"1","offset-lg":"0"}},[_c('b-embed',{attrs:{"type":"iframe","aspect":"16by9","src":_vm.video.url,"allowfullscreen":""}})],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Videos.vue?vue&type=template&id=f8a0231c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Videos.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Videosvue_type_script_lang_js_ = ({data(){return{video:{}};},methods:{async getVideos(){this.video=await this.$api.get('videos');this.video=this.video.data;}},mounted(){this.getVideos();}});
// CONCATENATED MODULE: ./components/Videos.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Videosvue_type_script_lang_js_ = (Videosvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Videos.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Videosvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "f59049d6"
  
)

/* harmony default export */ var Videos = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=videos.js.map