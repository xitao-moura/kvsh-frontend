exports.ids = [1];
exports.modules = {

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Bio.vue?vue&type=template&id=37cbd6ba&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-row',{staticClass:"bio",attrs:{"id":"bio"}},[_c('b-container',[_c('h1',{staticClass:"d-block d-md-none"},[_vm._v("BBio")]),_vm._v(" "),_c('b-row',{staticClass:"d-block d-md-none"},[_c('b-col',{attrs:{"cols":"12"}},[_c('b-img-lazy',{attrs:{"src":"kvsh-bio.jpg","center":"","fluid":""}})],1)],1),_vm._v(" "),_c('b-row',[_c('b-col',{staticClass:"box-1 d-none d-md-block",attrs:{"cols":"2","md":"5"}},[_c('b-img-lazy',{attrs:{"src":_vm.getImage(_vm.bio.imagem),"center":"","fluid":""}})],1),_vm._v(" "),_c('b-col',{staticClass:"box-2",attrs:{"cols":"12","md":"7"}},[_c('h1',{staticClass:"d-none d-md-block"},[_vm._v("BBio")]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.bio.descricao))])])],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Bio.vue?vue&type=template&id=37cbd6ba&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Bio.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Biovue_type_script_lang_js_ = ({data(){return{bio:{}};},methods:{async getSlider(){this.bio=await this.$api.get('bio');this.bio=this.bio.data;},getImage(img){//console.log(img.url)
return`https://kvsh-api.musiclounge.com.br/uploads/kvsh_bio_8c070763bd.jpg`;}},mounted(){this.getSlider();}});
// CONCATENATED MODULE: ./components/Bio.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Biovue_type_script_lang_js_ = (Biovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Bio.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Biovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0f886c9b"
  
)

/* harmony default export */ var Bio = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=bio.js.map