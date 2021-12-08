exports.ids = [5];
exports.modules = {

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Store.vue?vue&type=template&id=d338511c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"store",attrs:{"id":"store"}},[_c('b-container',[_c('h1',[_vm._v("\n            SStore\n        ")]),_vm._v(" "),_c('div',{staticClass:"carousel"},[_c('swiper',{staticClass:"mySwiper",attrs:{"options":_vm.SwiperOptions,"breakpoints":_vm.SwiperOptions.breakpoints,"navigation":true}},_vm._l((_vm.stores.data),function(store){return _c('swiper-slide',{key:store.id},[_c('a',{attrs:{"href":store.url,"target":"_blank"}},[_c('b-card',{staticClass:"mb-2",staticStyle:{"max-width":"20rem"},attrs:{"img-src":_vm.getImage(store.imagem.url),"img-alt":store.descricao,"img-top":"","tag":"article"}},[_c('b-card-text',[_vm._v("\n                                "+_vm._s(store.descricao)+"\n                            ")])],1)],1)])}),1)],1)])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Store.vue?vue&type=template&id=d338511c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Store.vue?vue&type=script&lang=js&
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
//
//
/* harmony default export */ var Storevue_type_script_lang_js_ = ({data(){return{SwiperOptions:{slidesPerView:3,pagination:{el:'.swiper-pagination',clickable:true},breakpoints:{1024:{slidesPerView:3},768:{slidesPerView:2},300:{slidesPerView:1}}},stores:[]};},methods:{async getStores(){this.stores=await this.$api.get('stores');},getImage(img){return`https://kvsh-api.musiclounge.com.br${img}`;}},mounted(){this.getStores();}});
// CONCATENATED MODULE: ./components/Store.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Storevue_type_script_lang_js_ = (Storevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Store.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Storevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "11520134"
  
)

/* harmony default export */ var Store = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=store.js.map