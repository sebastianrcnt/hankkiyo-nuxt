(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{201:function(t,e,n){var content=n(225);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("1d1ab7a1",content,!0,{sourceMap:!1})},224:function(t,e,n){"use strict";var o=n(201);n.n(o).a},225:function(t,e,n){(e=n(35)(!1)).push([t.i,".container[data-v-e0171b76]{width:100%;height:100%}.container .top-bar[data-v-e0171b76]{width:100%;height:55px;display:flex;flex-direction:row;align-items:center;justify-content:center;position:-webkit-sticky;position:sticky;top:0;background:#fff;box-shadow:1px 1px 5px rgba(0,0,0,.1)}.container .top-bar i[data-v-e0171b76]{position:absolute;left:18px;color:grey}.container .top-bar span[data-v-e0171b76]{font-size:16px}.container .loading[data-v-e0171b76]{width:100px;height:100px;display:flex;align-items:center;justify-content:center;position:fixed;top:calc(50vh - 50px);left:calc(50vw - 50px)}.container .store-image[data-v-e0171b76]{width:100%;height:172px}.container .store-image img[data-v-e0171b76]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.container h1.store-title[data-v-e0171b76]{width:100%;height:100%;padding:27px;font-size:20px;color:#383838;font-weight:600;margin:0;border-bottom:1px solid #ddd}.container .store-menus[data-v-e0171b76]{padding:27px;margin-bottom:66px}.container .store-menus h2[data-v-e0171b76]{font-size:15px;color:#383838;padding-bottom:27px;margin:0}.container .store-menus .menu[data-v-e0171b76]{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;margin-bottom:30px}.container .store-menus .menu .checkbox[data-v-e0171b76]{width:21px;height:21px;display:flex;align-items:center;justify-content:center;background:#cecece;color:#fff;border-radius:2.5px}.container .store-menus .menu .checkbox.active[data-v-e0171b76]{background:#ef4b57}.container .store-menus .menu span[data-v-e0171b76]{color:#383838}.container .store-menus .menu span.menu-name[data-v-e0171b76]{font-size:14px;margin-left:12.64px}.container .store-menus .menu span.menu-price[data-v-e0171b76]{font-size:13px;margin-left:auto;font-weight:300}.container button.order-button[data-v-e0171b76]{width:calc(100% - 54px);margin-left:27px;margin-right:27px;position:fixed;color:#ef4b57;font-size:17px;background:#fff;bottom:25px;height:41px;border-radius:3px;border:1px solid #ef4b57;outline:none}.container button.order-button.active[data-v-e0171b76]{background-color:#ef4b57;color:#fff}.container button.order-button span[data-v-e0171b76]{color:#fff;position:absolute;right:10px}",""]),t.exports=e},234:function(t,e,n){"use strict";n.r(e);var o=n(229),r=(n(70),n(71),n(28),n(29),n(13),n(69),n(30),n(214),n(47)),c=n.n(r),l=n(228),d=(n(223),{data:function(){return{store:{},cart:[]}},created:function(){var t=this;c.a.get("/api/stores").then((function(e){var n=e.data;t.store=n.find((function(e){return t.$route.params.name==e.name}))}))},computed:{loading:function(){return!!this.store},total:function(){var t=this,e=0;return this.cart.forEach((function(n){var menu=t.store.menus.find((function(t){return t.abbr===n}));menu.price&&(e+=menu.price)})),e}},methods:{insertCommas:function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},handleMenuClick:function(menu){this.cart.includes(menu.abbr)?this.cart=this.cart.filter((function(t){return t!==menu.abbr})):this.cart=[].concat(Object(o.a)(this.cart),[menu.abbr])},handleOrderButtonClick:function(){var t=this;if(0!==this.cart.length){var e=JSON.stringify(this.cart.map((function(e){return{menu_abbr:e,destination:t.$store.getters.fullAddress}})));c.a.post("/api/orders/",e,{headers:{"Content-Type":"application/json"}}).then((function(t){console.log(t)})).catch((function(t){console.log(t)})).finally((function(){alert("🐔죄송합니다 고객님,\n아직 준비 중인 서비스 입니다.🙇‍♀️\n\nOK 버튼을 통해 설문에 참여해주시면 스타벅스 기프티콘을 포함한\n✨3가지 혜택을 드리겠습니다."),window.location="https://forms.gle/Cr4xSvNfGtucAYBX7"})),console.log(e)}else alert("메뉴를 선택해주세요")}},components:{Spinner:l.a}}),f=(n(224),n(15)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"top-bar"},[n("span",[t._v(t._s(t.store.name))]),t._v(" "),n("i",{staticClass:"fa fa-chevron-left",on:{click:function(e){return t.$router.push("/home")}}})]),t._v(" "),n("div",{staticClass:"store-image"},[n("img",{attrs:{src:t.store.imgSrc,alt:""}})]),t._v(" "),n("h1",{staticClass:"store-title"},[t._v(t._s(t.store.name))]),t._v(" "),n("div",{staticClass:"store-menus"},[n("h2",[t._v("메뉴")]),t._v(" "),t._l(t.store.menus,(function(menu,e){return[n("div",{key:e,staticClass:"menu",on:{click:function(e){return t.handleMenuClick(menu)}}},[n("div",{staticClass:"checkbox",class:{active:t.cart.includes(menu.abbr)}},[n("i",{staticClass:"fa fa-check"})]),t._v(" "),n("span",{staticClass:"menu-name"},[t._v("\n          "+t._s(menu.name)+"\n        ")]),t._v(" "),n("span",{staticClass:"menu-price"},[t._v(" + "+t._s(t.insertCommas(menu.price))+" 원 ")])])]}))],2),t._v(" "),n("button",{staticClass:"order-button",class:{active:t.cart.length>0},on:{click:function(e){return t.handleOrderButtonClick()}}},[t._v("\n    주문하기\n    "),n("span",[t._v(t._s(t.insertCommas(t.total))+" 원")])])])}),[],!1,null,"e0171b76",null);e.default=component.exports}}]);