(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{316:function(t,e,n){"use strict";n.r(e);var r=n(20),c=(n(49),{data:function(){return{lancamentos:[],SwiperOptions:{slidesPerView:3,spaceBetween:200,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{1024:{slidesPerView:3},768:{slidesPerView:2},300:{slidesPerView:1}}}}},methods:{getLancamentos:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.get("lancamentos");case 2:t.lancamentos=e.sent,t.lancamentos=t.lancamentos.data;case 4:case"end":return e.stop()}}),e)})))()},getImage:function(img){return"https://kvsh-api.musiclounge.com.br".concat(img)}},mounted:function(){this.getLancamentos()}}),o=n(43),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ultimos-lancamentos",attrs:{id:"lancamentos"}},[n("h1",[n("b-img",{attrs:{center:"",fluid:"",src:"ultimos-lancametos.png"}})],1),t._v(" "),n("b-container",t._l(t.lancamentos,(function(e){return e.destaque?n("b-img-lazy",{key:e._id,staticClass:"destaque",attrs:{center:"",fluid:"",src:"destaque-ultimos-lancametnos.png"}}):t._e()})),1),t._v(" "),n("div",{staticClass:"carousel-background"},[n("b-container",[n("div",{staticClass:"carousel-lancamentos"},[n("swiper",{staticClass:"mySwiper",attrs:{options:t.SwiperOptions,breakpoints:t.SwiperOptions.breakpoints,navigation:!0}},t._l(t.lancamentos,(function(e){return e.destaque?t._e():n("swiper-slide",{key:e._id},[n("a",{attrs:{href:e.url,target:"_blank"}},[n("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"20rem"},attrs:{"img-src":t.getImage(e.imagem.url),"img-alt":e.titulo,"img-top":"",tag:"article"}},[n("b-card-text",[t._v("\n                                    "+t._s(e.titulo)+"\n                                ")])],1)],1)])})),1)],1)])],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);