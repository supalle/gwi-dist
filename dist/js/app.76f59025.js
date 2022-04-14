(function(){"use strict";var t={8800:function(t,e,i){var a=i(144),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("layout")],1)},s=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main-layout"},[i("div",{staticClass:"system-bar bg-pale main-color system-bar-line"},[i("span",{staticClass:"main-font"},[t._v("环焊缝检测系统")]),i("v-spacer"),i("span",{staticClass:"system-bar-info"},[i("v-icon",{staticClass:"main-color system-bar-icon"},[t._v("mdi-wifi-strength-4")]),i("v-icon",{staticClass:"main-color system-bar-icon"},[t._v(" mdi-network-strength-4 ")]),i("v-icon",{staticClass:"main-color system-bar-icon"},[t._v("mdi-battery")]),i("span",{staticClass:"system-bar-clock"},[t._v("12:30")])],1)],1),i("div",{staticClass:"main-tabs"},[i("v-tabs",{staticClass:"flex-column-reverse grey lighten-5",attrs:{centered:"","hide-slider":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[i("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[i("v-tab-item",{key:"history-list",attrs:{value:"tab-history-list"}},[i("history-list")],1),i("v-tab-item",{key:"detection-dashboard",attrs:{value:"tab-detection-dashboard"}},[i("detection-dashboard")],1),i("v-tab-item",{key:"system-settings",attrs:{value:"tab-system-settings"}},[i("system-settings")],1)],1),i("v-tab",{attrs:{href:"#tab-history-list"}},[i("i",{staticClass:"iconfont icon-history v-icon"}),i("span",{staticClass:"tab-text"},[t._v("历史文件")])]),i("v-tab",{attrs:{href:"#tab-detection-dashboard"}},[i("i",{staticClass:"iconfont icon-detection v-icon"}),i("span",{staticClass:"tab-text"},[t._v("实时检测")])]),i("v-tab",{attrs:{href:"#tab-system-settings"}},[i("i",{staticClass:"iconfont icon-settings v-icon"}),i("span",{staticClass:"tab-text"},[t._v("系统设置")])])],1)],1)])},r=[],l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"history-panel"},[i("div"),i("div",[i("v-data-table",{attrs:{headers:t.headers,items:t.desserts,"items-per-page":t.itemsPerPage,height:t.tableHeight,"footer-props":t.footerProps,"fixed-header":""},scopedSlots:t._u([{key:"item.actions",fn:function(){return[i("v-btn",{attrs:{text:"",color:"primary"}},[t._v(" 播放 ")]),i("v-btn",{attrs:{text:"",color:"error"}},[t._v(" 删除 ")])]},proxy:!0}],null,!0)})],1),i("div")])},c=[],d=a.Z.extend({name:"HistoryList",data(){return{snack:!1,snackColor:"",snackText:"",pagination:{},headers:[{text:"录制日期",align:"start",value:"createdTime"},{text:"时长（秒）",value:"duration",align:"center"},{text:"检出数量",value:"count",align:"center"},{text:"操作",value:"actions",align:"center",sortable:!1}],desserts:[{fileName:"file1.bin",createdTime:"2021/11/01 17:09:20",duration:159,count:1},{fileName:"file1.bin",createdTime:"2021/11/01 17:09:20",duration:159,count:2},{fileName:"file1.bin",createdTime:"2021/11/01 17:09:20",duration:159,count:1},{fileName:"file1.bin",createdTime:"2021/11/01 17:09:20",duration:159,count:3},{fileName:"file1.bin",createdTime:"2021/11/01 17:09:20",duration:159,count:0},{fileName:"file1.bin",createdTime:"2021/11/01 17:09:20",duration:159,count:0},{fileName:"file1.bin",createdTime:"2021/11/01 17:09:20",duration:159,count:1},{fileName:"file1.bin",createdTime:"2021/11/01 17:09:20",duration:159,count:2},{fileName:"file1.bin",createdTime:"2021/11/01 17:09:20",duration:159,count:3},{fileName:"file1.bin",createdTime:"2021/11/01 17:09:20",duration:159,count:4},{fileName:"file1.bin",createdTime:"2021/11/01 17:09:20",duration:159,count:5},{fileName:"file1.bin",createdTime:"2021/11/01 17:09:20",duration:159,count:6},{fileName:"file1.bin",createdTime:"2021/11/01 17:09:20",duration:159,count:7},{fileName:"file1.bin",createdTime:"2021/11/01 17:09:20",duration:159,count:8},{fileName:"file1.bin",createdTime:"2021/11/01 17:09:20",duration:159,count:9},{fileName:"file1.bin",createdTime:"2021/11/01 17:09:20",duration:159,count:10},{fileName:"file1.bin",createdTime:"2021/11/01 17:09:20",duration:159,count:11},{fileName:"file1.bin",createdTime:"2021/11/01 17:09:20",duration:159,count:12}]}},computed:{tableHeight(){return this.$vuetify.breakpoint.height-4.875*this.getRemPx()-60},itemsPerPage(){const t=this.tableHeight,e=this.getRemPx(),i=3.5*e,a=3*e,n=Math.round((t-i)/a);return Math.max(n,1)},footerProps(){const t=[5,10,15,20,25,30,50,100],e=this.itemsPerPage,i=[e,...t.filter((t=>t>e)),-1];return{"items-per-page-options":i}}},methods:{getRemPx(){const t=getComputedStyle(document.documentElement).fontSize;return parseFloat(t.slice(0,-2))},save(){this.snack=!0,this.snackColor="success",this.snackText="Data saved"},cancel(){this.snack=!0,this.snackColor="error",this.snackText="Canceled"},open(){this.snack=!0,this.snackColor="info",this.snackText="Dialog opened"},close(){console.log("Dialog closed")}}}),u=d,m=i(1001),v=i(3453),f=i.n(v),p=i(680),b=i(5369),h=(0,m.Z)(u,l,c,!1,null,null,null),g=h.exports;f()(h,{VBtn:p.Z,VDataTable:b.Z});var y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dashboard-panel"},[i("v-card",{staticClass:"dashboard-panel-info",attrs:{tile:"",flat:""}},[i("div",{staticClass:"item-panel"},[i("div",{staticClass:"item-title"},[t._v("弱磁传感器 1")]),i("div",{staticClass:"item-line"},[i("span",[t._v("X")]),i("span",[t._v("19233291 cnt")])]),i("div",{staticClass:"item-line"},[i("span",[t._v("Y")]),i("span",[t._v("19233291 cnt")])]),i("div",{staticClass:"item-line"},[i("span",[t._v("Z")]),i("span",[t._v("19233291 cnt")])])]),i("div",{staticClass:"item-panel"},[i("div",{staticClass:"item-title"},[t._v("弱磁传感器 2")]),i("div",{staticClass:"item-line"},[i("span",[t._v("X")]),i("span",[t._v("19233291 cnt")])]),i("div",{staticClass:"item-line"},[i("span",[t._v("Y")]),i("span",[t._v("19233291 cnt")])]),i("div",{staticClass:"item-line"},[i("span",[t._v("Z")]),i("span",[t._v("19233291 cnt")])])]),i("div",{staticClass:"item-panel"},[i("div",{staticClass:"item-title"},[t._v("加速度传感器")]),i("div",{staticClass:"item-line"},[i("span",[t._v("X")]),i("span",[t._v("0.09 g")])]),i("div",{staticClass:"item-line"},[i("span",[t._v("Y")]),i("span",[t._v("0.01 g")])]),i("div",{staticClass:"item-line"},[i("span",[t._v("Z")]),i("span",[t._v("0.02 g")])])]),i("div",{staticClass:"item-panel mr-1"},[i("v-btn",{staticClass:"item-btn",attrs:{block:"",elevation:"3",plain:""}},[t._v(" 开始录制 ")])],1)]),i("v-card",{staticClass:"dashboard-panel-chart",attrs:{tile:"",flat:""}},[i("div",{directives:[{name:"resize",rawName:"v-resize",value:t.chartOnResize,expression:"chartOnResize"}],attrs:{id:"dashboard-line-chart-el"}})])],1)},C=[],x=i(8645),_=a.Z.extend({name:"DetectionDashboard",data:()=>({}),mounted:function(){var t=x.S1(this.getChartElement()),e={grid:{top:"3%",bottom:"8%",right:"5%"},xAxis:{type:"category",boundaryGap:!1},yAxis:{type:"value",boundaryGap:[0,"30%"]},visualMap:{type:"piecewise",show:!1,dimension:0,seriesIndex:0,pieces:[{gt:1,lt:3,color:"rgba(0, 0, 180, 0.4)"},{gt:5,lt:7,color:"rgba(0, 0, 180, 0.4)"}]},series:[{type:"line",smooth:.6,symbol:"none",lineStyle:{color:"#5470C6",width:5},markLine:{symbol:["none","none"],label:{show:!1},data:[{xAxis:1},{xAxis:3},{xAxis:5},{xAxis:7}]},areaStyle:{},data:[["10",200],["11",560],["12",750],["13",580],["14",250],["15",300],["16",450],["17",300],["18",100]]}]};t.setOption(e)},methods:{getChartElement(){return document.getElementById("dashboard-line-chart-el")},chartOnResize(){this.$nextTick((()=>{x.JE(this.getChartElement())?.resize(),setTimeout((()=>{x.JE(this.getChartElement())?.resize()}),300),setTimeout((()=>{x.JE(this.getChartElement())?.resize()}),1e3),setTimeout((()=>{x.JE(this.getChartElement())?.resize()}),2e3),setTimeout((()=>{x.JE(this.getChartElement())?.resize()}),5e3)}))},disposeChart(){x.JE(this.getChartElement())?.dispose()}},destroyed:function(){console.log("dispose..")}}),T=_,Z=i(3237),k=i(6392),E=i.n(k),w=i(549),N=(0,m.Z)(T,y,C,!1,null,"453754be",null),S=N.exports;f()(N,{VBtn:p.Z,VCard:Z.Z}),E()(N,{Resize:w.Z});var O=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. SystemSettings ")])},P=[],z=a.Z.extend({name:"SystemSettings"}),V=z,j=(0,m.Z)(V,O,P,!1,null,null,null),q=j.exports,A=a.Z.extend({components:{DetectionDashboard:S,HistoryList:g,SystemSettings:q},name:"MainLayout",data(){return{tab:"tab-detection-dashboard",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}}}),D=A,$=i(6428),M=i(3631),R=i(4227),J=i(1759),L=i(8733),H=i(1954),I=(0,m.Z)(D,o,r,!1,null,null,null),B=I.exports;f()(I,{VIcon:$.Z,VSpacer:M.Z,VTab:R.Z,VTabItem:J.Z,VTabs:L.Z,VTabsItems:H.Z});var X=a.Z.extend({name:"App",components:{layout:B},data:()=>({})}),Y=X,F=i(7524),G=(0,m.Z)(Y,n,s,!1,null,null,null),U=G.exports;f()(G,{VApp:F.Z});var K=i(629);a.Z.use(K.ZP);var Q=new K.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),W=i(9132);a.Z.use(W.Z);var tt=new W.Z({});a.Z.config.productionTip=!1,new a.Z({store:Q,vuetify:tt,render:t=>t(U)}).$mount("#app")}},e={};function i(a){var n=e[a];if(void 0!==n)return n.exports;var s=e[a]={exports:{}};return t[a](s,s.exports,i),s.exports}i.m=t,function(){var t=[];i.O=function(e,a,n,s){if(!a){var o=1/0;for(d=0;d<t.length;d++){a=t[d][0],n=t[d][1],s=t[d][2];for(var r=!0,l=0;l<a.length;l++)(!1&s||o>=s)&&Object.keys(i.O).every((function(t){return i.O[t](a[l])}))?a.splice(l--,1):(r=!1,s<o&&(o=s));if(r){t.splice(d--,1);var c=n();void 0!==c&&(e=c)}}return e}s=s||0;for(var d=t.length;d>0&&t[d-1][2]>s;d--)t[d]=t[d-1];t[d]=[a,n,s]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var a in e)i.o(e,a)&&!i.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,a){var n,s,o=a[0],r=a[1],l=a[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(n in r)i.o(r,n)&&(i.m[n]=r[n]);if(l)var d=l(i)}for(e&&e(a);c<o.length;c++)s=o[c],i.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return i.O(d)},a=self["webpackChunkgwi_frontend"]=self["webpackChunkgwi_frontend"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=i.O(void 0,[998],(function(){return i(8800)}));a=i.O(a)})();
//# sourceMappingURL=app.76f59025.js.map