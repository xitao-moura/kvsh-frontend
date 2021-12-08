exports.ids = [8,1,3,4,5,6,7];
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

/***/ }),

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

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Tours.vue?vue&type=template&id=b4564180&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tour",attrs:{"id":"tour"}},[_c('b-container',[_c('h1',{staticClass:"d-block"},[_vm._v("PPróximos eventoss")]),_vm._v(" "),_c('b-row',_vm._l((_vm.tours),function(tour){return _c('b-col',{key:tour.id,staticClass:"box",attrs:{"cols":"12","md":"6"}},[_c('h2',[_vm._v(_vm._s(_vm.dateFormat(tour.data)))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(tour.local)+" - "+_vm._s(_vm.hourFormat(tour.data))+"H")])])}),1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Tours.vue?vue&type=template&id=b4564180&

// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__(45);

// EXTERNAL MODULE: external "date-fns/addDays"
var addDays_ = __webpack_require__(46);
var addDays_default = /*#__PURE__*/__webpack_require__.n(addDays_);

// EXTERNAL MODULE: external "date-fns/addHours"
var addHours_ = __webpack_require__(47);
var addHours_default = /*#__PURE__*/__webpack_require__.n(addHours_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Tours.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Toursvue_type_script_lang_js_ = ({data(){return{tours:[]};},methods:{async getTours(){this.tours=await this.$api.get('tours');this.tours=this.tours.data;},dateFormat(date){date=addDays_default()(new Date(date),1);return Object(external_date_fns_["format"])(date,'dd/MM');},hourFormat(date){date=addHours_default()(new Date(date),1);return Object(external_date_fns_["format"])(date,'HH');}},mounted(){this.getTours();}});
// CONCATENATED MODULE: ./components/Tours.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Toursvue_type_script_lang_js_ = (Toursvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Tours.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Toursvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "47498724"
  
)

/* harmony default export */ var Tours = __webpack_exports__["default"] = (component.exports);

/***/ }),

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

/***/ }),

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

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FacaParte.vue?vue&type=template&id=f164ff0c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"faca-parte",attrs:{"id":"faca-parte-da-kvshgang"}},[_vm._ssrNode("<h1>","</h1>",[_c('b-img',{attrs:{"center":"","fluid":"","src":"faca-parte.png"}})],1),_vm._ssrNode(" "),_c('b-container',[_c('b-input-group',{staticClass:"mb-3"},[_c('b-form-input',{attrs:{"placeholder":"Digite seu melhor e-mail"},model:{value:(_vm.email),callback:function ($$v) {_vm.email=$$v},expression:"email"}}),_vm._v(" "),_c('b-input-group-append',[_c('b-button',{attrs:{"size":"sm","text":"Button","variant":"success"},on:{"click":_vm.insertMailKvshGang}},[_vm._v("ENVIAR")])],1)],1)],1),_vm._ssrNode(" "),_c('b-container',{staticClass:"sociais"},[_c('ul',_vm._l((_vm.sociais.socialNetworks),function(social){return _c('li',{key:social.id},[_c('a',{attrs:{"href":social.url,"target":"_blank"}},[_c('b-img-lazy',{attrs:{"center":"","src":_vm.getImage(social.icon.url)}})],1)])}),0)]),_vm._ssrNode(" "),_c('vs-dialog',{attrs:{"width":"550px","not-center":""},scopedSlots:_vm._u([{key:"header",fn:function(){return [_c('h4',{staticClass:"not-margin"},[_vm._v("\n        Atenção!\n      ")])]},proxy:true},{key:"footer",fn:function(){return [_c('div',{staticClass:"con-footer"},[_c('vs-button',{attrs:{"transparent":""},on:{"click":function($event){_vm.dialogEmail=false}}},[_vm._v("\n          Ok\n        ")])],1)]},proxy:true}]),model:{value:(_vm.dialogEmail),callback:function ($$v) {_vm.dialogEmail=$$v},expression:"dialogEmail"}},[_vm._v(" "),_c('div',{staticClass:"con-content"},[_c('p',[_vm._v("\n        "+_vm._s(_vm.messageError)+"\n      ")])])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/FacaParte.vue?vue&type=template&id=f164ff0c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FacaParte.vue?vue&type=script&lang=js&
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
/* harmony default export */ var FacaPartevue_type_script_lang_js_ = ({data(){return{email:'',dialogEmail:false,messageError:'',sociais:[]};},methods:{async getSociais(){this.sociais=await this.$api.get('global');this.sociais=this.sociais.data;},getImage(img){return`https://kvsh-api.musiclounge.com.br${img}`;},async insertMailKvshGang(){if(!this.email){this.messageError='Por favor, informe um email válido.';this.dialogEmail=true;return false;}await this.$api.post(`kvsh-gangs`,{email:this.email}).then(resp=>{this.messageError='Email cadastrado com sucesso.';this.dialogEmail=true;console.log(resp);}).catch(error=>{this.messageError='Houve um erro ao salvar seu email. Por favor tente novamente.';this.dialogEmail=true;console.log(error);});}},mounted(){this.getSociais();}});
// CONCATENATED MODULE: ./components/FacaParte.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FacaPartevue_type_script_lang_js_ = (FacaPartevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/FacaParte.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FacaPartevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0c42ea68"
  
)

/* harmony default export */ var FacaParte = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=a19991b0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Store'),_vm._ssrNode(" "),_c('Bio'),_vm._ssrNode(" "),_c('Tours'),_vm._ssrNode(" "),_c('Lancamentos'),_vm._ssrNode(" "),_c('Videos'),_vm._ssrNode(" "),_c('FacaParte')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=a19991b0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
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
if(false){ var flowtype; }/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "682e4b4b"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Store: __webpack_require__(48).default,Bio: __webpack_require__(49).default,Tours: __webpack_require__(50).default,Lancamentos: __webpack_require__(51).default,Videos: __webpack_require__(52).default,FacaParte: __webpack_require__(53).default})


/***/ })

};;
//# sourceMappingURL=index.js.map