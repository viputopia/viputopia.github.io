(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-789a7df3"],{"0a8a":function(t,e,n){},"450f":function(t,e,n){"use strict";n("0a8a")},6143:function(t,e,n){t.exports=n.p+"img/search.09ce25e9.svg"},d81d:function(t,e,n){"use strict";var s=n("23e7"),a=n("b727").map,r=n("1dde"),o=n("ae40"),i=r("map"),d=o("map");s({target:"Array",proto:!0,forced:!i||!d},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},f5da:function(t,e,n){t.exports=n.p+"img/confirm-logo.c437f13a.svg"},fe5e:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"nft-list"},[s("div",{staticClass:"header"},[s("van-icon",{attrs:{name:"arrow-left"},on:{click:function(e){return t.$router.back()}}}),s("span",[t._v("NFTs")]),s("img",{attrs:{src:n("6143")},on:{click:function(e){t.showSearch=!0}}})],1),t._l(t.searchList,(function(e){return s("div",{key:e.id,staticClass:"search-list"},[s("div",{staticClass:"info"},[s("img",{attrs:{src:n("f5da")}}),s("div",[s("span",[t._v("代币ID："),s("span",[t._v(t._s(e.id))])]),s("span",[t._v("汉字能量 #"+t._s(e.id))]),s("div",[s("span",[t._v("总付款")]),s("div",[s("span",[t._v(t._s(e.payment))]),s("span",[t._v("($"+t._s(e.dollar)+")")])])])])]),s("van-button",{attrs:{type:"default"},on:{click:function(n){return t.showTransferNFT(e.id)}}},[t._v("转移")])],1)})),s("van-list",{directives:[{name:"show",rawName:"v-show",value:0===t.searchList.length,expression:"searchList.length === 0"}],attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.sortList,(function(e){return s("div",{key:e.id},[s("div",{staticClass:"info"},[s("img",{attrs:{src:n("f5da")}}),s("div",[s("span",[t._v("代币ID："),s("span",[t._v(t._s(e.id))])]),s("span",[t._v("汉字能量 #"+t._s(e.id))]),s("div",[s("span",[t._v("总付款")]),s("div",[s("span",[t._v(t._s(e.payment))]),s("span",[t._v("($"+t._s(e.dollar)+")")])])])])]),s("van-button",{attrs:{type:"default"},on:{click:function(n){return t.showTransferNFT(e.id)}}},[t._v("转移")])],1)})),0),s("transfer-nft",{ref:"transferNFT"}),s("van-overlay",{staticClass:"search-token",attrs:{show:t.showSearch},on:{click:function(e){t.showSearch=!1}}},[s("div",{staticClass:"container",on:{click:function(t){t.stopPropagation()}}},[s("div",{staticClass:"header"},[t._v("查询NFT")]),s("div",{staticClass:"content"},[s("span",[t._v("查询我的NFTs")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchId,expression:"searchId"}],attrs:{type:"number",placeholder:"输入代币ID"},domProps:{value:t.searchId},on:{input:function(e){e.target.composing||(t.searchId=e.target.value)}}}),s("van-button",{on:{click:t.search}},[t._v("确定")])],1)])])],2)},a=[],r=(n("4160"),n("d81d"),n("a9e3"),n("b680"),n("d3b7"),n("159b"),n("96cf"),n("1da1")),o={components:{"transfer-nft":function(){return n.e("chunk-48d93568").then(n.bind(null,"f95b"))}},data:function(){return{list:[],loading:!1,finished:!1,start:0,end:0,total:0,ready:!1,showSearch:!1,searchId:"",searchList:[]}},computed:{sortList:function(){return this.list.sort((function(t,e){return Number(t.id)-Number(e.id)}))}},created:function(){this.$contracts&&this.init()},methods:{isUSDT:function(t){return t.toLowerCase()===this.$contracts.USDT._address.toLowerCase()},showTransferNFT:function(t){this.$refs.transferNFT.open(t)},init:function(){var t=this;this.$contracts.NFTToken.methods.balanceOf(this.$address).call({from:this.$address},(function(e,n){e||(t.total=Number(n),t.end=n>10?10:Number(n),t.ready=!0)}))},search:function(){var t=this;if(0===this.searchId.length)return this.showSearch=!1,this.searchList=[],!1;this.$contracts.NFTToken.methods.ownerOf(this.searchId).call({from:this.$address},(function(e,n){return e?vant.Toast.fail("该NFT不存在！"):n.toLowerCase()!==t.$address.toLowerCase()?vant.Toast.fail("该NFT不在你的地址下！"):void t.$contracts.NFTFactory.methods.nftSold(t.searchId).call({from:t.$address},function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(n,s){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n){e.next=10;break}if(!t.isUSDT(s.token)){e.next=5;break}t.searchList=[{id:t.searchId,payment:s.amount.fromWei().toFixed(4),dollar:s.amount.fromWei().toFixed(0)}],e.next=9;break;case 5:return e.next=7,t.$contracts.Router.methods.getAmountsOut(s.amount,[t.$contracts.UPC._address,t.$contracts.USDT._address]).call({from:t.$address});case 7:a=e.sent,t.searchList=[{id:t.searchId,payment:s.amount.fromWei().toFixed(4),dollar:a[1].fromWei().toFixed(0)}];case 9:t.showSearch=!1;case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())}))},onLoad:function(){var t=this;if(!this.$contracts)return!1;if(!this.ready){var e=setTimeout((function(){t.loading=!1,clearTimeout(e)}),500);return!1}if(this.total<=0)return this.finished=!0,!1;for(var n=new this.$web3.BatchRequest,s=this.start;s<this.end;s++)n.add(this.$contracts.NFTToken.methods.tokenOfOwnerByIndex(this.$address,s).call.request({from:this.$address}));n.requestManager.sendBatch(n.requests,(function(e,n){if(!e){var s=n.map((function(t){return t.result.decode(["uint256"])})),a=new t.$web3.BatchRequest;s.forEach((function(e){a.add(t.$contracts.NFTFactory.methods.nftSold(e).call.request({from:t.$address}))})),a.requestManager.sendBatch(a.requests,(function(e,n){if(!e){var a=new t.$web3.BatchRequest,r=n.map((function(e){var n=e.result.decode([{name:"amount",type:"uint256"},{name:"token",type:"address"}]);return t.isUSDT(n.token)||a.add(t.$contracts.Router.methods.getAmountsOut(n.amount,[t.$contracts.UPC._address,t.$contracts.USDT._address]).call.request({from:t.$address})),n}));if(a.requests.length>0){var o=0;a.requestManager.sendBatch(a.requests,(function(e,n){if(!e){for(var a=n.map((function(t){var e=t.result.decode(["uint256[]"]);return e[1].fromWei().toFixed(0)})),i=0;i<r.length;i++)t.isUSDT(r[i].token)?t.list.push({id:s[i],payment:r[i].amount.fromWei().toFixed(4),dollar:r[i].amount.fromWei().toFixed(0)}):(t.list.push({id:s[i],payment:r[i].amount.fromWei().toFixed(4),dollar:a[o]}),o++);t.loading=!1,t.start=t.end,t.end+=10,t.start>=t.total&&t.end>=t.total&&(t.finished=!0),t.end>t.total&&(t.end=t.total)}}))}else{for(var i=0;i<r.length;i++)t.list.push({id:s[i],payment:r[i].amount.fromWei().toFixed(4),dollar:r[i].amount.fromWei().toFixed(0)});t.loading=!1,t.start=t.end,t.end+=10,t.start>=t.total&&t.end>=t.total?t.finished=!0:t.end>t.total&&(t.end=t.total)}}}))}}))}}},i=o,d=i,c=(n("450f"),n("2877")),u=Object(c["a"])(d,s,a,!1,null,"3ac22328",null);e["default"]=u.exports}}]);