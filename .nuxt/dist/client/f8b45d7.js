(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{321:function(t,e,r){"use strict";r.r(e);var n=r(20),o=(r(49),r(331)),c=r(316),d=r(318),l={data:function(){return{tours:[]}},methods:{getTours:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.get("tours");case 2:t.tours=e.sent,t.tours=t.tours.data;case 4:case"end":return e.stop()}}),e)})))()},dateFormat:function(t){return t=Object(c.a)(new Date(t),1),Object(o.a)(t,"dd/MM")},hourFormat:function(t){return t=Object(d.a)(new Date(t),1),Object(o.a)(t,"HH")}},mounted:function(){this.getTours()}},f=r(43),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tour",attrs:{id:"tour"}},[r("b-container",[r("h1",{staticClass:"d-block"},[t._v("PPróximos eventoss")]),t._v(" "),r("b-row",t._l(t.tours,(function(e){return r("b-col",{key:e.id,staticClass:"box",attrs:{cols:"12",md:"6"}},[r("h2",[t._v(t._s(t.dateFormat(e.data)))]),t._v(" "),r("p",[t._v(t._s(e.local)+" - "+t._s(t.hourFormat(e.data))+"H")])])})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);