(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-407061fe"],{"332e":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Redemption"},[a("div",{staticClass:"Redemptiontitle"},[a("div",{staticClass:"middle"},[a("div",[a("span",[t._v(t._s(t.$t("Redemption.text6")))]),a("div",[a("span",[t._v(t._s(t.Redemptionagreement)+" LP")]),a("span",[t._v("≈$ "+t._s(t.USDT))])])]),a("div",[a("div",[a("img",{attrs:{src:n("8ea2"),alt:""}}),a("span",[t._v(t._s(t.USDT)+" USDT")])]),a("div",[a("img",{attrs:{src:n("dd20"),alt:""}}),a("span",[t._v(t._s(t.UPC)+" UPC")])])])]),a("div",{staticClass:"Withdrawablequantity"},[a("span",[t._v(t._s(t.$t("Redemption.text7"))+" ")]),a("span",[t._v(t._s(t.Redemptionagreement))])]),a("div",{staticClass:"quantity"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],attrs:{placeholder:this.$t("Redemption.text8"),type:"text"},domProps:{value:t.amount},on:{input:function(e){e.target.composing||(t.amount=e.target.value)}}}),a("span",[t._v("USDT-UPC/LP")])]),a("button",{on:{click:t.withdraw}},[t._v(t._s(t.$t("Redemption.text9")))])]),a("div",{staticClass:"Pledgetitle"},[t._v(t._s(t.$t("Redemption.text10")))]),t._l(t.list,(function(e){return a("div",{key:e,staticClass:"record"},[a("div",[t._m(0,!0),a("span",[t._v(t._s(e.time))])]),a("div",[a("span",[t._v(t._s(t.$t("Redemption.text11")))]),a("span",[t._v(t._s(e.amount))])])])}))],2)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("img",{attrs:{src:n("8ea2"),alt:""}}),a("img",{attrs:{src:n("dd20"),alt:""}}),a("span",[t._v("USDT-UPC/LP")])])}],r=n("5530"),o=(n("99af"),n("a9e3"),n("b680"),n("96cf"),n("1da1")),i={data:function(){return{Redemptionagreement:0,amount:"",UPC:0,USDT:0,list:[]}},created:function(){this.$contracts&&this.init()},methods:{init:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n,a,s,r,i,c,d,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.$contracts.MasterChef.methods.userInfo(0,t.$address).call((function(e,n){e||(t.Redemptionagreement=n.amount.fromWei())})),t.$contracts.MasterChef.methods.userInfo(0,t.$address).call((function(e,n){e||(t.pledgeamount=n.amount.fromWei())})),e.next=4,t.$contracts.UPC.methods.balanceOf(t.$contracts.Token._address).call();case 4:return n=e.sent,e.next=7,t.$contracts.USDT.methods.balanceOf(t.$contracts.Token._address).call();case 7:return a=e.sent,e.next=10,t.$contracts.Token.methods.totalSupply().call();case 10:return s=e.sent,e.next=13,t.$contracts.MasterChef.methods.userInfo(0,t.$address).call();case 13:return r=e.sent,i=r.amount.toBNs().div(s).times("100"),c=n.toBNs().times(i).div("100").toFixed(0).fromWei(),d=a.toBNs().times(i).div("100").toFixed(0).fromWei(),t.UPC=c.toFixed(4),t.USDT=d.toFixed(4),e.next=21,t.$web3.eth.getBlock("latest");case 21:u=e.sent,t.$contracts.MasterChef.events.Withdraw({fromBlock:u.number-4990,filter:{user:t.$address}}).on("data",function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(n),e.next=3,t.$web3.eth.getBlock(n.blockHash);case 3:a=e.sent,0!=n.returnValues.amount.fromWei()&&t.list.unshift({amount:n.returnValues.amount.fromWei().toFixed(1),time:t.formatTime(a.timestamp)});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 23:case"end":return e.stop()}}),e)})))()},formatTime:function(t){var e=new Date(1e3*Number(t)),n=e.getFullYear(),a=e.getMonth()+1,s=e.getDate(),r=e.getHours(),o=e.getMinutes();return"".concat(n,"/").concat(a,"/").concat(s," ").concat(r,":").concat(o)},withdraw:function(){var t=this;if(""==this.amount)return vant.Toast.fail(this.$t("Redemption.text1"));if(this.amount>this.Redemptionagreement)return vant.Toast.fail(this.$t("Redemption.text2"));console.log(this.amount);var e=this.$contracts.MasterChef.methods.withdraw(0,this.amount.toWei());e.send({from:this.$address}).on("transactionHash",(function(e){vant.Toast.loading({message:t.$t("Redemption.text3"),duration:"toast"})})).on("receipt",(function(e){vant.Toast.success(t.$t("Redemption.text4")),t.init(),t.$reload(),t.amount})).on("error",(function(e){console.log(e),vant.Toast.fail(t.$t("Redemption.text5")),t.amount,t.$reload()}))}}},c=Object(r["a"])({},i),d=c,u=(n("88f7"),n("2877")),m=Object(u["a"])(d,a,s,!1,null,"78d803c6",null);e["default"]=m.exports},"88f7":function(t,e,n){"use strict";n("a073")},"8ea2":function(t,e,n){t.exports=n.p+"img/USDT.5c93c206.svg"},"99af":function(t,e,n){"use strict";var a=n("23e7"),s=n("d039"),r=n("e8b5"),o=n("861d"),i=n("7b0b"),c=n("50c4"),d=n("8418"),u=n("65f0"),m=n("1dde"),l=n("b622"),f=n("2d00"),p=l("isConcatSpreadable"),v=9007199254740991,h="Maximum allowed index exceeded",g=f>=51||!s((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),$=m("concat"),_=function(t){if(!o(t))return!1;var e=t[p];return void 0!==e?!!e:r(t)},x=!g||!$;a({target:"Array",proto:!0,forced:x},{concat:function(t){var e,n,a,s,r,o=i(this),m=u(o,0),l=0;for(e=-1,a=arguments.length;e<a;e++)if(r=-1===e?o:arguments[e],_(r)){if(s=c(r.length),l+s>v)throw TypeError(h);for(n=0;n<s;n++,l++)n in r&&d(m,l,r[n])}else{if(l>=v)throw TypeError(h);d(m,l++,r)}return m.length=l,m}})},a073:function(t,e,n){},dd20:function(t,e,n){t.exports=n.p+"img/UPC.acb359d1.svg"}}]);