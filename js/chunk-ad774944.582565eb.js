(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ad774944"],{"06d9":function(t,n,e){"use strict";e("6d3b")},"12f0":function(t,n,e){},"1e59":function(t,n,e){t.exports=e.p+"img/logo.8ebc5e7d.svg"},3588:function(t,n,e){"use strict";e("12f0")},"4d81":function(t,n,e){t.exports=e.p+"img/menu.74db39ad.svg"},6540:function(t,n,e){t.exports=e.p+"img/share.598eac66.svg"},"6d3b":function(t,n,e){},bc54:function(t,n,e){"use strict";e.r(n);var s=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"get-name"},[s("div",{staticClass:"header"},[s("img",{attrs:{src:e("4d81")},on:{click:function(n){t.showMenu=!t.showMenu}}}),s("img",{attrs:{src:e("1e59")}}),s("img",{attrs:{src:e("6540")},on:{click:t.showCard}}),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showMenu,expression:"showMenu"}],staticClass:"menus"},[s("span",{on:{click:t.toNFTList}},[t._v("你的NFT")]),s("span",{on:{click:t.showCard}},[t._v("邀请卡")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showMenu,expression:"showMenu"}],staticClass:"overlay",on:{click:function(n){t.showMenu=!1}}})]),t._m(0),s("van-swipe",{staticClass:"my-swipe",attrs:{"show-indicators":!1},on:{change:t.change}},[s("van-swipe-item",[s("pre",{domProps:{innerHTML:t._s(t.$t("getName.text1"))}}),t._v(" "),s("button",{on:{click:t.showTradeConfirm}},[t._v("$ "+t._s(t.paymentUSDT))])]),s("van-swipe-item",[s("pre",{domProps:{innerHTML:t._s(t.$t("getName.text2"))}}),t._v(" "),s("button",{on:{click:t.showTradeConfirm}},[t._v("$ "+t._s(t.paymentUSDT))])]),s("van-swipe-item",[s("pre",{domProps:{innerHTML:t._s(t.$t("getName.text3"))}}),t._v(" "),s("button",{on:{click:t.showTradeConfirm}},[t._v("$ "+t._s(t.paymentUSDT))])])],1),s("div",{staticClass:"indicators"},t._l(t.classList,(function(t){return s("i",{key:t,class:t})})),0),s("trade-confirm",{ref:"tradeConfirm",attrs:{paymentUSDT:t.paymentUSDT}}),s("invitation-card",{ref:"invitationCard"})],1)},i=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"title"},[e("span",[t._v("汉字姓名")]),e("span",[t._v("能量密码")])])}],r=(e("d3b7"),{components:{"trade-confirm":function(){return e.e("chunk-6d67d758").then(e.bind(null,"ccfd"))},"invitation-card":function(){return Promise.all([e.e("chunk-6ff8ab98"),e.e("chunk-2d0e6c3b")]).then(e.bind(null,"6baf"))}},computed:{classList:function(){switch(this.currentPage){case 0:return["current","next","prev"];case 1:return["prev","current","next"];case 2:return["prev","next","current"]}}},data:function(){return{showMenu:!1,currentPage:0,paymentUSDT:0,isBind:!1}},created:function(){this.$contracts&&this.init()},methods:{change:function(t){this.currentPage=t},showTradeConfirm:function(){var t=this.$getIsBind(!0);t&&this.$refs.tradeConfirm.open()},toNFTList:function(){var t=this.$getIsBind(!0);t&&this.$router.push("/NFTList"),this.showMenu=!1},showCard:function(){var t=this.$getIsBind(!0);t&&this.$refs.invitationCard.open(),this.showMenu=!1},init:function(){var t=this;this.$contracts.NFTFactory.methods.nftPrice().call((function(n,e){n||(t.paymentUSDT=e.fromWei())}))}}}),a=r,o=a,c=(e("3588"),e("06d9"),e("2877")),u=Object(c["a"])(o,s,i,!1,null,"6ef428f4",null);n["default"]=u.exports}}]);