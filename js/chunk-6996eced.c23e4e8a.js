(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6996eced"],{"26ae":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"spread-mining"},[s("div",{staticClass:"info",on:{click:t.generate}},[s("div",[s("img",{attrs:{src:n("6a6c")}}),s("div",[s("span",{domProps:{textContent:t._s(t.$t("home.text44"))}}),t.isBind?s("span",{domProps:{textContent:t._s(t.address)}}):s("span",[t._v("******")])])]),t.isBind?s("div",[s("img",{attrs:{src:n("2952")},on:{click:t.openCard}})]):s("div",[s("span",{domProps:{textContent:t._s(t.$t("home.text45"))}}),s("img",{attrs:{src:n("2952")}})])]),s("div",{staticClass:"user-list"},[s("span",{staticClass:"before",domProps:{textContent:t._s(t.$t("home.text48"))}}),s("div",{staticClass:"title"},[s("span",{domProps:{textContent:t._s(t.$t("home.text49"))}}),s("span",{domProps:{textContent:t._s(t.$t("home.text3"))}}),s("span",{domProps:{textContent:t._s(t.$t("home.text4"))}})]),s("div",{staticClass:"list"},t._l(t.list,(function(e){return s("div",{key:e.code},[s("span",{domProps:{textContent:t._s(e.code)}}),s("span",{domProps:{textContent:t._s(e.burn)}}),s("span",{domProps:{textContent:t._s(e.spread)}})])})),0)]),s("invitation-card",{ref:"invitationCard"})],1)},i=[],o=(n("99af"),n("fb6a"),n("d3b7"),n("3ca3"),n("ddb0"),n("3835")),a=(n("96cf"),n("1da1")),c={components:{"invitation-card":function(){return n.e("chunk-6ff8ab98").then(n.bind(null,"6baf"))}},data:function(){return{code:"******",link:"".concat(location.href),isBind:!1,list:[],address:""}},created:function(){this.$utils&&this.init()},methods:{generate:function(){this.$getIsBind(!0),this.isBind||this.openCard()},openCard:function(){this.$refs.invitationCard.open()},copy:function(t){var e=this;this.$copyText(t).then((function(t){vant.Toast.success(e.$t("home.text50"))}),(function(t){vant.Toast.fail(e.$t("home.text51"))}))},init:function(){var t=this;this.address="".concat(this.$address.slice(0,2),"...").concat(this.$address.slice(-5)),this.isBind=this.$getIsBind(),this.$contracts.Relations.methods.RecommendList(this.$address).call(function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(n,s){var i,a,c,r,d,l,v;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n){e.next=17;break}i=[],a=0;case 3:if(!(a<s.len)){e.next=16;break}return e.next=6,Promise.all([t.$contracts.Relations.methods.AddressToShortCode(s.list[a]).call(),t.$contracts.Mine.methods.userInfomationOf(s.list[a]).call()]);case 6:c=e.sent,r=Object(o["a"])(c,2),r[0],d=r[1],l=d.pow_st,v=d.pow_dy,i.push({code:"".concat(s.list[a].slice(0,2),"...").concat(s.list[a].slice(-6)),burn:Math.floor(l.fromWei()),spread:Math.floor(v.fromWei())});case 13:a++,e.next=3;break;case 16:t.list=i;case 17:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())}}},r=c,d=r,l=(n("57b9"),n("2877")),v=Object(l["a"])(d,s,i,!1,null,"5595bf4c",null);e["default"]=v.exports},2952:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaCAMAAACJtiw1AAAAilBMVEUAAACqxuOZs+aiueidsdikttuqu+6fu+Ofv+SfvOKhvd6fu9+eveCfvN6fvOKivuOiveGivOKhvuChveGgvN+gveCgvuGgveChvOChveGgvN+hvOGhvuKgvOGhveGhveChveGgveChveChveCgvOGhvOGhveGhveGgveGhveGhveGhveGgvOGhveGt4eFuAAAALXRSTlMACQoLDQ4PLTA1Njg6PT0/cHN1d3l7gYOFh4mKjbq+wMHExsjJy+zt8PHz9PWalq7dAAAAgklEQVQY033RRxLCQAwFUZFNzjZDNtGBvv/1WE2Qp0C716tfJRFZGVG3AdMwZEFIaZYMgDQq26DsomJ+lPXfso/KAYBlUI4ALJxbZ4DP3Lp90e5cAeqZcw5QT627OUDlfQOoJta9u3b/AVB6PwHKsRt0Aii8JXlriySvYqgfMxiF+gL4TRfgurub9QAAAABJRU5ErkJggg=="},"57b9":function(t,e,n){"use strict";n("cbff")},"6a6c":function(t,e){t.exports="data:image/png;base64,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"},cbff:function(t,e,n){}}]);