(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2628c2f4"],{"0f39":function(t,e,i){t.exports=i.p+"img/invitationCardlogo.5572d6ba.svg"},"12db":function(t,e,i){t.exports=i.p+"img/closure.89e995c5.png"},"26ae":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"spread-mining"},[n("div",{staticClass:"info"},[n("div",[n("img",{attrs:{src:i("6a6c")}}),n("div",[n("span",{domProps:{textContent:t._s(t.$t("home.text44"))}}),t.isBind?n("span",{domProps:{textContent:t._s(t.address)}}):n("span",[t._v("******")])])]),t.isBind?n("div",[n("img",{attrs:{src:i("2952")},on:{click:function(e){t.invitationCard=!0}}})]):n("div",{on:{click:t.generate}},[n("span",{domProps:{textContent:t._s(t.$t("home.text45"))}}),n("img",{attrs:{src:i("2952")}})])]),n("div",{staticClass:"user-list"},[n("span",{staticClass:"before",domProps:{textContent:t._s(t.$t("home.text48"))}}),n("div",{staticClass:"title"},[n("span",{domProps:{textContent:t._s(t.$t("home.text49"))}}),n("span",{domProps:{textContent:t._s(t.$t("home.text3"))}}),n("span",{domProps:{textContent:t._s(t.$t("home.text4"))}})]),n("div",{staticClass:"list"},t._l(t.list,(function(e){return n("div",{key:e.code},[n("span",{domProps:{textContent:t._s(e.code)}}),n("span",{domProps:{textContent:t._s(e.burn)}}),n("span",{domProps:{textContent:t._s(e.spread)}})])})),0)]),n("van-overlay",{attrs:{show:t.invitationCard},on:{click:function(e){t.invitationCard=!1}}},[n("div",{staticClass:"invitationCard",on:{click:function(t){t.stopPropagation()}}},[n("div",{staticClass:"invitationCardContent"},[n("div",{staticClass:"White"},[n("div",{staticClass:"title"},[n("span",[t._v(t._s(t.$t("home.text44")))]),n("div",[n("i"),n("span",[t._v(t._s(t.$t("home.text57")))]),n("i",{staticClass:"ii"})]),n("img",{staticClass:"closure",attrs:{src:i("12db"),alt:""},on:{click:function(e){t.invitationCard=!1}}})]),n("img",{staticClass:"invitationCardlogo",attrs:{src:i("0f39"),alt:""}}),n("div",{staticClass:"Exclusive"},[n("div",[t._v(t._s(t.myaddress))])]),n("div",{staticClass:"Exclusive-text"},[n("span",[t._v(t._s(t.$t("home.text58")))])]),n("div",{staticClass:"semicircle"},[n("div",{staticClass:"left"}),n("i"),n("div",{staticClass:"rigth"})]),n("div",{staticClass:"QRcodelogo"},[n("div",{ref:"qrcode",attrs:{id:"qrcode"}})]),n("div",{staticClass:"QRcode-text"},[t._v(t._s(t.$t("home.text59")))])])]),n("button",{staticClass:"button",on:{click:t.copy1}},[t._v(t._s(t.$t("home.text60")))])])])],1)},r=[],o=i("5530"),s=(i("99af"),i("c975"),i("fb6a"),i("d3b7"),i("3ca3"),i("ddb0"),i("ade3")),a=i("3835"),h=(i("96cf"),i("1da1")),l=i("d044"),u=i.n(l),c={data:function(){return{code:"******",link:"".concat(location.href),isBind:!1,list:[],invitationCard:!1,inviteaddress:"",address:""}},created:function(){this.$utils&&this.init(),this.$address&&(this.myaddress=this.$address,this.address="".concat(this.$address.slice(0,2),"...").concat(this.$address.slice(-5)),this.inviteaddress=this.$address)},methods:Object(s["a"])({generate:function(){this.$getIsBind(!0)},copy:function(t){var e=this;this.$copyText(t).then((function(t){vant.Toast.success(e.$t("home.text50"))}),(function(t){vant.Toast.fail(e.$t("home.text51"))}))},qrcode:function(){new u.a("qrcode",{width:100,height:100,text:"".concat(location.href.slice(0,location.href.indexOf("#")),"#selfHome/?inviteaddress=").concat(this.inviteaddress),colorDark:"#206865"})},copy1:function(){var t=this,e="".concat(location.href.slice(0,location.href.indexOf("#")),"#selfHome");this.$copyText(e).then((function(e){vant.Toast.success(t.$t("home.text50"))}),(function(e){vant.Toast.fail(t.$t("home.text51"))}))},init:function(){var t=this,e=this.$getIsBind();null==e&&(this.isBind=!0),this.$contracts.Relations.methods.RecommendList(this.$address).call(function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(i,n){var r,o,s,h,l,u,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log(n),i){e.next=18;break}r=[],o=0;case 4:if(!(o<n.len)){e.next=17;break}return e.next=7,Promise.all([t.$contracts.Relations.methods.AddressToShortCode(n.list[o]).call(),t.$contracts.Mine.methods.userInfomationOf(n.list[o]).call()]);case 7:s=e.sent,h=Object(a["a"])(s,2),h[0],l=h[1],u=l.pow_st,c=l.pow_dy,r.push({code:"".concat(n.list[o].slice(0,2),"...").concat(n.list[o].slice(-6)),burn:Math.floor(u.fromWei()),spread:Math.floor(c.fromWei())});case 14:o++,e.next=4;break;case 17:t.list=r;case 18:case"end":return e.stop()}}),e)})));return function(t,i){return e.apply(this,arguments)}}())}},"qrcode",(function(){new u.a("qrcode",{width:100,height:100,text:"".concat(location.href.slice(0,location.href.indexOf("#")),"#selfHome/?inviteaddress=").concat(this.inviteaddress),colorDark:"#206865"})})),mounted:function(){var t=this;this.$nextTick((function(){t.qrcode()}))}},d=Object(o["a"])({},c),f=d,g=(i("c93e"),i("2877")),p=Object(g["a"])(f,n,r,!1,null,"0ae1a137",null);e["default"]=p.exports},2952:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaCAMAAACJtiw1AAAAilBMVEUAAACqxuOZs+aiueidsdikttuqu+6fu+Ofv+SfvOKhvd6fu9+eveCfvN6fvOKivuOiveGivOKhvuChveGgvN+gveCgvuGgveChvOChveGgvN+hvOGhvuKgvOGhveGhveChveGgveChveChveCgvOGhvOGhveGhveGgveGhveGhveGhveGgvOGhveGt4eFuAAAALXRSTlMACQoLDQ4PLTA1Njg6PT0/cHN1d3l7gYOFh4mKjbq+wMHExsjJy+zt8PHz9PWalq7dAAAAgklEQVQY033RRxLCQAwFUZFNzjZDNtGBvv/1WE2Qp0C716tfJRFZGVG3AdMwZEFIaZYMgDQq26DsomJ+lPXfso/KAYBlUI4ALJxbZ4DP3Lp90e5cAeqZcw5QT627OUDlfQOoJta9u3b/AVB6PwHKsRt0Aii8JXlriySvYqgfMxiF+gL4TRfgurub9QAAAABJRU5ErkJggg=="},"6a6c":function(t,e){t.exports="data:image/png;base64,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"},c93e:function(t,e,i){"use strict";i("eb3c")},d044:function(t,e,i){var n;(function(e,i){t.exports=i()})(0,(function(){function t(t){this.mode=i.MODE_8BIT_BYTE,this.data=t,this.parsedData=[];for(var e=0,n=this.data.length;e<n;e++){var r=[],o=this.data.charCodeAt(e);o>65536?(r[0]=240|(1835008&o)>>>18,r[1]=128|(258048&o)>>>12,r[2]=128|(4032&o)>>>6,r[3]=128|63&o):o>2048?(r[0]=224|(61440&o)>>>12,r[1]=128|(4032&o)>>>6,r[2]=128|63&o):o>128?(r[0]=192|(1984&o)>>>6,r[1]=128|63&o):r[0]=o,this.parsedData.push(r)}this.parsedData=Array.prototype.concat.apply([],this.parsedData),this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function e(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}t.prototype={getLength:function(t){return this.parsedData.length},write:function(t){for(var e=0,i=this.parsedData.length;e<i;e++)t.put(this.parsedData[e],8)}},e.prototype={addData:function(e){var i=new t(e);this.dataList.push(i),this.dataCache=null},isDark:function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,i){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++){this.modules[n]=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++)this.modules[n][r]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,i),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=e.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,i)},setupPositionProbePattern:function(t,e){for(var i=-1;i<=7;i++)if(!(t+i<=-1||this.moduleCount<=t+i))for(var n=-1;n<=7;n++)e+n<=-1||this.moduleCount<=e+n||(this.modules[t+i][e+n]=0<=i&&i<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==i||6==i)||2<=i&&i<=4&&2<=n&&n<=4)},getBestMaskPattern:function(){for(var t=0,e=0,i=0;i<8;i++){this.makeImpl(!0,i);var n=s.getLostPoint(this);(0==i||t>n)&&(t=n,e=i)}return e},createMovieClip:function(t,e,i){var n=t.createEmptyMovieClip(e,i),r=1;this.make();for(var o=0;o<this.modules.length;o++)for(var s=o*r,a=0;a<this.modules[o].length;a++){var h=a*r,l=this.modules[o][a];l&&(n.beginFill(0,100),n.moveTo(h,s),n.lineTo(h+r,s),n.lineTo(h+r,s+r),n.lineTo(h,s+r),n.endFill())}return n},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},setupPositionAdjustPattern:function(){for(var t=s.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var i=0;i<t.length;i++){var n=t[e],r=t[i];if(null==this.modules[n][r])for(var o=-2;o<=2;o++)for(var a=-2;a<=2;a++)this.modules[n+o][r+a]=-2==o||2==o||-2==a||2==a||0==o&&0==a}},setupTypeNumber:function(t){for(var e=s.getBCHTypeNumber(this.typeNumber),i=0;i<18;i++){var n=!t&&1==(e>>i&1);this.modules[Math.floor(i/3)][i%3+this.moduleCount-8-3]=n}for(i=0;i<18;i++){n=!t&&1==(e>>i&1);this.modules[i%3+this.moduleCount-8-3][Math.floor(i/3)]=n}},setupTypeInfo:function(t,e){for(var i=this.errorCorrectLevel<<3|e,n=s.getBCHTypeInfo(i),r=0;r<15;r++){var o=!t&&1==(n>>r&1);r<6?this.modules[r][8]=o:r<8?this.modules[r+1][8]=o:this.modules[this.moduleCount-15+r][8]=o}for(r=0;r<15;r++){o=!t&&1==(n>>r&1);r<8?this.modules[8][this.moduleCount-r-1]=o:r<9?this.modules[8][15-r-1+1]=o:this.modules[8][15-r-1]=o}this.modules[this.moduleCount-8][8]=!t},mapData:function(t,e){for(var i=-1,n=this.moduleCount-1,r=7,o=0,a=this.moduleCount-1;a>0;a-=2){6==a&&a--;while(1){for(var h=0;h<2;h++)if(null==this.modules[n][a-h]){var l=!1;o<t.length&&(l=1==(t[o]>>>r&1));var u=s.getMask(e,n,a-h);u&&(l=!l),this.modules[n][a-h]=l,r--,-1==r&&(o++,r=7)}if(n+=i,n<0||this.moduleCount<=n){n-=i,i=-i;break}}}}},e.PAD0=236,e.PAD1=17,e.createData=function(t,i,n){for(var r=u.getRSBlocks(t,i),o=new c,a=0;a<n.length;a++){var h=n[a];o.put(h.mode,4),o.put(h.getLength(),s.getLengthInBits(h.mode,t)),h.write(o)}var l=0;for(a=0;a<r.length;a++)l+=r[a].dataCount;if(o.getLengthInBits()>8*l)throw new Error("code length overflow. ("+o.getLengthInBits()+">"+8*l+")");o.getLengthInBits()+4<=8*l&&o.put(0,4);while(o.getLengthInBits()%8!=0)o.putBit(!1);while(1){if(o.getLengthInBits()>=8*l)break;if(o.put(e.PAD0,8),o.getLengthInBits()>=8*l)break;o.put(e.PAD1,8)}return e.createBytes(o,r)},e.createBytes=function(t,e){for(var i=0,n=0,r=0,o=new Array(e.length),a=new Array(e.length),h=0;h<e.length;h++){var u=e[h].dataCount,c=e[h].totalCount-u;n=Math.max(n,u),r=Math.max(r,c),o[h]=new Array(u);for(var d=0;d<o[h].length;d++)o[h][d]=255&t.buffer[d+i];i+=u;var f=s.getErrorCorrectPolynomial(c),g=new l(o[h],f.getLength()-1),p=g.mod(f);a[h]=new Array(f.getLength()-1);for(d=0;d<a[h].length;d++){var v=d+p.getLength()-a[h].length;a[h][d]=v>=0?p.get(v):0}}var m=0;for(d=0;d<e.length;d++)m+=e[d].totalCount;var C=new Array(m),A=0;for(d=0;d<n;d++)for(h=0;h<e.length;h++)d<o[h].length&&(C[A++]=o[h][d]);for(d=0;d<r;d++)for(h=0;h<e.length;h++)d<a[h].length&&(C[A++]=a[h][d]);return C};for(var i={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},r={L:1,M:0,Q:3,H:2},o={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},s={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){var e=t<<10;while(s.getBCHDigit(e)-s.getBCHDigit(s.G15)>=0)e^=s.G15<<s.getBCHDigit(e)-s.getBCHDigit(s.G15);return(t<<10|e)^s.G15_MASK},getBCHTypeNumber:function(t){var e=t<<12;while(s.getBCHDigit(e)-s.getBCHDigit(s.G18)>=0)e^=s.G18<<s.getBCHDigit(e)-s.getBCHDigit(s.G18);return t<<12|e},getBCHDigit:function(t){var e=0;while(0!=t)e++,t>>>=1;return e},getPatternPosition:function(t){return s.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,i){switch(t){case o.PATTERN000:return(e+i)%2==0;case o.PATTERN001:return e%2==0;case o.PATTERN010:return i%3==0;case o.PATTERN011:return(e+i)%3==0;case o.PATTERN100:return(Math.floor(e/2)+Math.floor(i/3))%2==0;case o.PATTERN101:return e*i%2+e*i%3==0;case o.PATTERN110:return(e*i%2+e*i%3)%2==0;case o.PATTERN111:return(e*i%3+(e+i)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new l([1],0),i=0;i<t;i++)e=e.multiply(new l([1,a.gexp(i)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case i.MODE_NUMBER:return 10;case i.MODE_ALPHA_NUM:return 9;case i.MODE_8BIT_BYTE:return 8;case i.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case i.MODE_NUMBER:return 12;case i.MODE_ALPHA_NUM:return 11;case i.MODE_8BIT_BYTE:return 16;case i.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case i.MODE_NUMBER:return 14;case i.MODE_ALPHA_NUM:return 13;case i.MODE_8BIT_BYTE:return 16;case i.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),i=0,n=0;n<e;n++)for(var r=0;r<e;r++){for(var o=0,s=t.isDark(n,r),a=-1;a<=1;a++)if(!(n+a<0||e<=n+a))for(var h=-1;h<=1;h++)r+h<0||e<=r+h||0==a&&0==h||s==t.isDark(n+a,r+h)&&o++;o>5&&(i+=3+o-5)}for(n=0;n<e-1;n++)for(r=0;r<e-1;r++){var l=0;t.isDark(n,r)&&l++,t.isDark(n+1,r)&&l++,t.isDark(n,r+1)&&l++,t.isDark(n+1,r+1)&&l++,0!=l&&4!=l||(i+=3)}for(n=0;n<e;n++)for(r=0;r<e-6;r++)t.isDark(n,r)&&!t.isDark(n,r+1)&&t.isDark(n,r+2)&&t.isDark(n,r+3)&&t.isDark(n,r+4)&&!t.isDark(n,r+5)&&t.isDark(n,r+6)&&(i+=40);for(r=0;r<e;r++)for(n=0;n<e-6;n++)t.isDark(n,r)&&!t.isDark(n+1,r)&&t.isDark(n+2,r)&&t.isDark(n+3,r)&&t.isDark(n+4,r)&&!t.isDark(n+5,r)&&t.isDark(n+6,r)&&(i+=40);var u=0;for(r=0;r<e;r++)for(n=0;n<e;n++)t.isDark(n,r)&&u++;var c=Math.abs(100*u/e/e-50)/5;return i+=10*c,i}},a={glog:function(t){if(t<1)throw new Error("glog("+t+")");return a.LOG_TABLE[t]},gexp:function(t){while(t<0)t+=255;while(t>=256)t-=255;return a.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},h=0;h<8;h++)a.EXP_TABLE[h]=1<<h;for(h=8;h<256;h++)a.EXP_TABLE[h]=a.EXP_TABLE[h-4]^a.EXP_TABLE[h-5]^a.EXP_TABLE[h-6]^a.EXP_TABLE[h-8];for(h=0;h<255;h++)a.LOG_TABLE[a.EXP_TABLE[h]]=h;function l(t,e){if(void 0==t.length)throw new Error(t.length+"/"+e);var i=0;while(i<t.length&&0==t[i])i++;this.num=new Array(t.length-i+e);for(var n=0;n<t.length-i;n++)this.num[n]=t[n+i]}function u(t,e){this.totalCount=t,this.dataCount=e}function c(){this.buffer=[],this.length=0}l.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),i=0;i<this.getLength();i++)for(var n=0;n<t.getLength();n++)e[i+n]^=a.gexp(a.glog(this.get(i))+a.glog(t.get(n)));return new l(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=a.glog(this.get(0))-a.glog(t.get(0)),i=new Array(this.getLength()),n=0;n<this.getLength();n++)i[n]=this.get(n);for(n=0;n<t.getLength();n++)i[n]^=a.gexp(a.glog(t.get(n))+e);return new l(i,0).mod(t)}},u.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],u.getRSBlocks=function(t,e){var i=u.getRsBlockTable(t,e);if(void 0==i)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var n=i.length/3,r=[],o=0;o<n;o++)for(var s=i[3*o+0],a=i[3*o+1],h=i[3*o+2],l=0;l<s;l++)r.push(new u(a,h));return r},u.getRsBlockTable=function(t,e){switch(e){case r.L:return u.RS_BLOCK_TABLE[4*(t-1)+0];case r.M:return u.RS_BLOCK_TABLE[4*(t-1)+1];case r.Q:return u.RS_BLOCK_TABLE[4*(t-1)+2];case r.H:return u.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},c.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var i=0;i<e;i++)this.putBit(1==(t>>>e-i-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var d=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]];function f(){return"undefined"!=typeof CanvasRenderingContext2D}function g(){var t=!1,e=navigator.userAgent;if(/android/i.test(e)){t=!0;var i=e.toString().match(/android ([0-9]\.[0-9])/i);i&&i[1]&&(t=parseFloat(i[1]))}return t}var p=function(){var t=function(t,e){this._el=t,this._htOption=e};return t.prototype.draw=function(t){var e=this._htOption,i=this._el,n=t.getModuleCount();Math.floor(e.width/n),Math.floor(e.height/n);function r(t,e){var i=document.createElementNS("http://www.w3.org/2000/svg",t);for(var n in e)e.hasOwnProperty(n)&&i.setAttribute(n,e[n]);return i}this.clear();var o=r("svg",{viewBox:"0 0 "+String(n)+" "+String(n),width:"100%",height:"100%",fill:e.colorLight});o.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),i.appendChild(o),o.appendChild(r("rect",{fill:e.colorLight,width:"100%",height:"100%"})),o.appendChild(r("rect",{fill:e.colorDark,width:"1",height:"1",id:"template"}));for(var s=0;s<n;s++)for(var a=0;a<n;a++)if(t.isDark(s,a)){var h=r("use",{x:String(a),y:String(s)});h.setAttributeNS("http://www.w3.org/1999/xlink","href","#template"),o.appendChild(h)}},t.prototype.clear=function(){while(this._el.hasChildNodes())this._el.removeChild(this._el.lastChild)},t}(),v="svg"===document.documentElement.tagName.toLowerCase(),m=v?p:f()?function(){function t(){this._elImage.src=this._elCanvas.toDataURL("image/png"),this._elImage.style.display="block",this._elCanvas.style.display="none"}if(this._android&&this._android<=2.1){var e=1/window.devicePixelRatio,i=CanvasRenderingContext2D.prototype.drawImage;CanvasRenderingContext2D.prototype.drawImage=function(t,n,r,o,s,a,h,l,u){if("nodeName"in t&&/img/i.test(t.nodeName))for(var c=arguments.length-1;c>=1;c--)arguments[c]=arguments[c]*e;else"undefined"==typeof l&&(arguments[1]*=e,arguments[2]*=e,arguments[3]*=e,arguments[4]*=e);i.apply(this,arguments)}}function n(t,e){var i=this;if(i._fFail=e,i._fSuccess=t,null===i._bSupportDataURI){var n=document.createElement("img"),r=function(){i._bSupportDataURI=!1,i._fFail&&i._fFail.call(i)},o=function(){i._bSupportDataURI=!0,i._fSuccess&&i._fSuccess.call(i)};return n.onabort=r,n.onerror=r,n.onload=o,void(n.src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==")}!0===i._bSupportDataURI&&i._fSuccess?i._fSuccess.call(i):!1===i._bSupportDataURI&&i._fFail&&i._fFail.call(i)}var r=function(t,e){this._bIsPainted=!1,this._android=g(),this._htOption=e,this._elCanvas=document.createElement("canvas"),this._elCanvas.width=e.width,this._elCanvas.height=e.height,t.appendChild(this._elCanvas),this._el=t,this._oContext=this._elCanvas.getContext("2d"),this._bIsPainted=!1,this._elImage=document.createElement("img"),this._elImage.alt="Scan me!",this._elImage.style.display="none",this._el.appendChild(this._elImage),this._bSupportDataURI=null};return r.prototype.draw=function(t){var e=this._elImage,i=this._oContext,n=this._htOption,r=t.getModuleCount(),o=n.width/r,s=n.height/r,a=Math.round(o),h=Math.round(s);e.style.display="none",this.clear();for(var l=0;l<r;l++)for(var u=0;u<r;u++){var c=t.isDark(l,u),d=u*o,f=l*s;i.strokeStyle=c?n.colorDark:n.colorLight,i.lineWidth=1,i.fillStyle=c?n.colorDark:n.colorLight,i.fillRect(d,f,o,s),i.strokeRect(Math.floor(d)+.5,Math.floor(f)+.5,a,h),i.strokeRect(Math.ceil(d)-.5,Math.ceil(f)-.5,a,h)}this._bIsPainted=!0},r.prototype.makeImage=function(){this._bIsPainted&&n.call(this,t)},r.prototype.isPainted=function(){return this._bIsPainted},r.prototype.clear=function(){this._oContext.clearRect(0,0,this._elCanvas.width,this._elCanvas.height),this._bIsPainted=!1},r.prototype.round=function(t){return t?Math.floor(1e3*t)/1e3:t},r}():function(){var t=function(t,e){this._el=t,this._htOption=e};return t.prototype.draw=function(t){for(var e=this._htOption,i=this._el,n=t.getModuleCount(),r=Math.floor(e.width/n),o=Math.floor(e.height/n),s=['<table style="border:0;border-collapse:collapse;">'],a=0;a<n;a++){s.push("<tr>");for(var h=0;h<n;h++)s.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:'+r+"px;height:"+o+"px;background-color:"+(t.isDark(a,h)?e.colorDark:e.colorLight)+';"></td>');s.push("</tr>")}s.push("</table>"),i.innerHTML=s.join("");var l=i.childNodes[0],u=(e.width-l.offsetWidth)/2,c=(e.height-l.offsetHeight)/2;u>0&&c>0&&(l.style.margin=c+"px "+u+"px")},t.prototype.clear=function(){this._el.innerHTML=""},t}();function C(t,e){for(var i=1,n=A(t),o=0,s=d.length;o<=s;o++){var a=0;switch(e){case r.L:a=d[o][0];break;case r.M:a=d[o][1];break;case r.Q:a=d[o][2];break;case r.H:a=d[o][3];break}if(n<=a)break;i++}if(i>d.length)throw new Error("Too long data");return i}function A(t){var e=encodeURI(t).toString().replace(/\%[0-9a-fA-F]{2}/g,"a");return e.length+(e.length!=t?3:0)}return n=function(t,e){if(this._htOption={width:256,height:256,typeNumber:4,colorDark:"#000000",colorLight:"#ffffff",correctLevel:r.H},"string"===typeof e&&(e={text:e}),e)for(var i in e)this._htOption[i]=e[i];"string"==typeof t&&(t=document.getElementById(t)),this._htOption.useSVG&&(m=p),this._android=g(),this._el=t,this._oQRCode=null,this._oDrawing=new m(this._el,this._htOption),this._htOption.text&&this.makeCode(this._htOption.text)},n.prototype.makeCode=function(t){this._oQRCode=new e(C(t,this._htOption.correctLevel),this._htOption.correctLevel),this._oQRCode.addData(t),this._oQRCode.make(),this._el.title=t,this._oDrawing.draw(this._oQRCode),this.makeImage()},n.prototype.makeImage=function(){"function"==typeof this._oDrawing.makeImage&&(!this._android||this._android>=3)&&this._oDrawing.makeImage()},n.prototype.clear=function(){this._oDrawing.clear()},n.CorrectLevel=r,n}))},eb3c:function(t,e,i){}}]);