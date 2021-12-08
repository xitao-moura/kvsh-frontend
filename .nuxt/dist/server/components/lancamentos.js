exports.ids = [4];
exports.modules = {

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Lancamentos.vue?vue&type=template&id=3a194e48&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ultimos-lancamentos",attrs:{"id":"lancamentos"}},[_vm._ssrNode("<h1>","</h1>",[_c('b-img',{attrs:{"center":"","fluid":"","src":"ultimos-lancametos.png"}})],1),_vm._ssrNode(" "),_c('b-container',_vm._l((_vm.lancamentos),function(lancamento){return (lancamento.destaque)?_c('b-img-lazy',{key:lancamento._id,staticClass:"destaque",attrs:{"center":"","fluid":"","src":"destaque-ultimos-lancametnos.png"}}):_vm._e()}),1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"carousel-background\">","</div>",[_c('b-container',[_c('div',{staticClass:"carousel-lancamentos"},[_c('swiper',{staticClass:"mySwiper",attrs:{"options":_vm.SwiperOptions,"breakpoints":_vm.SwiperOptions.breakpoints,"navigation":true}},_vm._l((_vm.lancamentos),function(lancamento){return (!lancamento.destaque)?_c('swiper-slide',{key:lancamento._id},[_c('a',{attrs:{"href":lancamento.url,"target":"_blank"}},[_c('b-card',{staticClass:"mb-2",staticStyle:{"max-width":"20rem"},attrs:{"img-src":_vm.getImage(lancamento.imagem.url),"img-alt":lancamento.titulo,"img-top":"","tag":"article"}},[_c('b-card-text',[_vm._v("\n                                    "+_vm._s(lancamento.titulo)+"\n                                ")])],1)],1)]):_vm._e()}),1)],1)])],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Lancamentos.vue?vue&type=template&id=3a194e48&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Lancamentos.vue?vue&type=script&lang=js&
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
//
//
//
//
/* harmony default export */ var Lancamentosvue_type_script_lang_js_ = ({data(){return{lancamentos:[],SwiperOptions:{slidesPerView:3,spaceBetween:200,pagination:{el:'.swiper-pagination',clickable:true},breakpoints:{1024:{slidesPerView:3},768:{slidesPerView:2},300:{slidesPerView:1}}}};},methods:{async getLancamentos(){this.lancamentos=await this.$api.get('lancamentos');this.lancamentos=this.lancamentos.data;},getImage(img){return`https://kvsh-api.musiclounge.com.br${img}`;}},mounted(){this.getLancamentos();}});
// CONCATENATED MODULE: ./components/Lancamentos.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Lancamentosvue_type_script_lang_js_ = (Lancamentosvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Lancamentos.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Lancamentosvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4e8ece4c"
  
)

/* harmony default export */ var Lancamentos = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=lancamentos.js.map