(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-443e4af6"],{"069c":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"record"},[n("div",{staticClass:"title",domProps:{textContent:t._s(t.$t("change.text1"))}}),n("div",{staticClass:"content"},t._l(t.list,(function(e,r){return n("div",{key:r,staticClass:"list"},[n("div",[n("span",{domProps:{textContent:t._s(t.$t("change.text2"))}}),n("span",[t._v(t._s(e.time))])]),n("div",[n("span",[t._v("+"+t._s(e.token)+" UPC")]),n("span",[t._v("-"+t._s(e.amount)+" ETH")])])])})),0)])},a=[],o=n("5530"),i=(n("99af"),n("a9e3"),n("b680"),n("96cf"),n("1da1")),c={data:function(){return{list:[]}},created:function(){this.$utils&&this.init()},methods:{init:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$utils.web3.eth.getBlockNumber();case 2:e.t0=e.sent,n=e.t0-4998,t.$contracts.TokenChanger.events.Log_ChangedToken({fromBlock:n,filter:{owner:t.$address}}).on("data",(function(e){t.list.push({time:t.formatTime(e.returnValues.time),amount:e.returnValues.ethValue.fromWei().toFixed(),token:e.returnValues.tokenValue.fromWei().toFixed()})}));case 5:case"end":return e.stop()}}),e)})))()},formatTime:function(t){var e=new Date(1e3*Number(t)),n=e.getFullYear(),r=e.getMonth()+1,a=e.getDate();return"".concat(n,"/").concat(r,"/").concat(a)}}},s=Object(o["a"])({},c),u=s,f=(n("4a39"),n("2877")),l=Object(f["a"])(u,r,a,!1,null,"866100fe",null);e["default"]=l.exports},"1ea5":function(t,e,n){},"4a39":function(t,e,n){"use strict";n("1ea5")},"99af":function(t,e,n){"use strict";var r=n("23e7"),a=n("d039"),o=n("e8b5"),i=n("861d"),c=n("7b0b"),s=n("50c4"),u=n("8418"),f=n("65f0"),l=n("1dde"),d=n("b622"),h=n("2d00"),m=d("isConcatSpreadable"),v=9007199254740991,p="Maximum allowed index exceeded",g=h>=51||!a((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),w=l("concat"),b=function(t){if(!i(t))return!1;var e=t[m];return void 0!==e?!!e:o(t)},k=!g||!w;r({target:"Array",proto:!0,forced:k},{concat:function(t){var e,n,r,a,o,i=c(this),l=f(i,0),d=0;for(e=-1,r=arguments.length;e<r;e++)if(o=-1===e?i:arguments[e],b(o)){if(a=s(o.length),d+a>v)throw TypeError(p);for(n=0;n<a;n++,d++)n in o&&u(l,d,o[n])}else{if(d>=v)throw TypeError(p);u(l,d++,o)}return l.length=d,l}})}}]);