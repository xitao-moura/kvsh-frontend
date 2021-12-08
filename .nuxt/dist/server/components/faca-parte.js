exports.ids = [3];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=faca-parte.js.map