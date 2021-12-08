exports.ids = [6];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=tours.js.map