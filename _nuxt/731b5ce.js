(window.webpackJsonp=window.webpackJsonp||[]).push([[3,2],{258:function(t,e,n){"use strict";var r=n(11),o=n(2),c=n(89),l=n(16),h=n(12),d=n(39),f=n(170),m=n(64),v=n(169),y=n(5),w=n(48),C=n(65).f,_=n(31).f,S=n(15).f,x=n(259).trim,E="Number",N=o.Number,k=N.prototype,A=d(w(k))==E,T=function(t){if(m(t))throw TypeError("Cannot convert a Symbol value to a number");var e,n,r,o,c,l,h,code,d=v(t,"number");if("string"==typeof d&&d.length>2)if(43===(e=(d=x(d)).charCodeAt(0))||45===e){if(88===(n=d.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+d}for(l=(c=d.slice(2)).length,h=0;h<l;h++)if((code=c.charCodeAt(h))<48||code>o)return NaN;return parseInt(c,r)}return+d};if(c(E,!N(" 0o1")||!N("0b1")||N("+0x1"))){for(var I,$=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof $&&(A?y((function(){k.valueOf.call(n)})):d(n)!=E)?f(new N(T(e)),n,$):T(e)},F=r?C(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),O=0;F.length>O;O++)h(N,I=F[O])&&!h($,I)&&S($,I,_(N,I));$.prototype=k,k.constructor=$,l(o,E,$)}},259:function(t,e,n){var r=n(19),o=n(8),c="["+n(260)+"]",l=RegExp("^"+c+c+"*"),h=RegExp(c+c+"*$"),d=function(t){return function(e){var n=o(r(e));return 1&t&&(n=n.replace(l,"")),2&t&&(n=n.replace(h,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},260:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},261:function(t,e){var n=/^(attrs|props|on|nativeOn|class|style|hook)$/;function r(a,b){return function(){a&&a.apply(this,arguments),b&&b.apply(this,arguments)}}t.exports=function(t){return t.reduce((function(a,b){var t,e,o,c,l;for(o in b)if(t=a[o],e=b[o],t&&n.test(o))if("class"===o&&("string"==typeof t&&(l=t,a[o]=t={},t[l]=!0),"string"==typeof e&&(l=e,b[o]=e={},e[l]=!0)),"on"===o||"nativeOn"===o||"hook"===o)for(c in e)t[c]=r(t[c],e[c]);else if(Array.isArray(t))a[o]=t.concat(e);else if(Array.isArray(e))a[o]=[t].concat(e);else for(c in e)t[c]=e[c];else a[o]=b[o];return a}),{})}},262:function(t,e,n){"use strict";n.r(e);n(258),n(38);var r=n(261),o=n.n(r),c=function(){return Math.random().toString(36).substring(2)},l={name:"ContentLoader",functional:!0,props:{width:{type:[Number,String],default:400},height:{type:[Number,String],default:130},speed:{type:Number,default:2},preserveAspectRatio:{type:String,default:"xMidYMid meet"},baseUrl:{type:String,default:""},primaryColor:{type:String,default:"#f9f9f9"},secondaryColor:{type:String,default:"#ecebeb"},primaryOpacity:{type:Number,default:1},secondaryOpacity:{type:Number,default:1},uniqueKey:{type:String},animate:{type:Boolean,default:!0}},render:function(t,e){var n=e.props,data=e.data,r=e.children,l=n.uniqueKey?n.uniqueKey+"-idClip":c(),h=n.uniqueKey?n.uniqueKey+"-idGradient":c();return t("svg",o()([data,{attrs:{viewBox:"0 0 "+n.width+" "+n.height,version:"1.1",preserveAspectRatio:n.preserveAspectRatio}}]),[t("rect",{style:{fill:"url("+n.baseUrl+"#"+h+")"},attrs:{"clip-path":"url("+n.baseUrl+"#"+l+")",x:"0",y:"0",width:n.width,height:n.height}}),t("defs",[t("clipPath",{attrs:{id:l}},[r||t("rect",{attrs:{x:"0",y:"0",rx:"5",ry:"5",width:n.width,height:n.height}})]),t("linearGradient",{attrs:{id:h}},[t("stop",{attrs:{offset:"0%","stop-color":n.primaryColor,"stop-opacity":n.primaryOpacity}},[n.animate?t("animate",{attrs:{attributeName:"offset",values:"-2; 1",dur:n.speed+"s",repeatCount:"indefinite"}}):null]),t("stop",{attrs:{offset:"50%","stop-color":n.secondaryColor,"stop-opacity":n.secondaryOpacity}},[n.animate?t("animate",{attrs:{attributeName:"offset",values:"-1.5; 1.5",dur:n.speed+"s",repeatCount:"indefinite"}}):null]),t("stop",{attrs:{offset:"100%","stop-color":n.primaryColor,"stop-opacity":n.primaryOpacity}},[n.animate?t("animate",{attrs:{attributeName:"offset",values:"-1; 2",dur:n.speed+"s",repeatCount:"indefinite"}}):null])])])])}},h={name:"TheViewer",components:{ContentLoader:l},props:{inPage:{type:Number,default:200},isLoading:{type:Boolean,required:!0},hemistiches:{type:Array,required:!0}},data:function(){return{start:0,end:this.inPage,tipShown:!0,selected:null,highlighted:null}},computed:{minStart:function(){return 0},maxEnd:function(){return this.hemistiches.length},shownHemistiches:function(){return this.hemistiches.slice(this.start,this.end)}},watch:{hemistiches:function(){this.start=0,this.end=this.inPage,this.$refs.content.scrollTo(0,0),this.selected=this.highlighted=null}},mounted:function(){this.$refs.content.addEventListener("scroll",this.scrolled)},methods:{scrolled:function(){var t,e,n,r=this.$refs.content;if(0===r.scrollTop&&(t=this.start>this.minStart?-this.inPage/2:0),r.scrollTop+r.clientHeight>=r.scrollHeight&&(t=this.end<this.maxEnd?this.inPage/2:0),t){this.start+t<this.minStart?(this.start=this.minStart,this.end=this.minStart+this.inPage):this.end+t>this.maxEnd?(this.start=this.maxEnd-this.inPage,this.end=this.maxEnd):(this.start=this.start+t,this.end=this.end+t),e=this.$refs.hemistiches[Math.abs(t)-(t>0?1:-1)].offsetTop,n=this.$refs.hemistiches[t>0?this.inPage-1:0].offsetTop;var o=r.scrollTop-(n-e);r.scrollTo(0,o)}},jumpTo:function(t){var e=this.$refs.content;this.start=t-this.inPage/2>>1<<1,this.end=t+this.inPage/2>>1<<1,e.scrollTo(0,this.$refs.hemistiches[t-this.start].offsetTop-e.clientHeight/2),this.highlighted=t},emitSelection:function(t){this.selected=t,this.highlighted=null,this.$emit("selected",t)}}},d=n(69),component=Object(d.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"content",attrs:{id:"content"}},[t.isLoading?t._l(Array(8),(function(t){return n("div",{key:t,staticClass:"hemistich"},[n("content-loader",{staticClass:"is-placeholder",attrs:{width:"200",height:"24",viewBox:"0 0 200 24"}},[n("rect",{attrs:{x:"0",y:"0",rx:"3",ry:"3",width:"200",height:"24"}})])],1)})):t._l(t.shownHemistiches,(function(e,r){return n("div",{key:r,ref:"hemistiches",refInFor:!0,staticClass:"hemistich",class:{"is-highlighted":r+t.start===t.highlighted,"is-selected":r+t.start===t.selected},on:{click:function(e){return t.emitSelection(r+t.start)}}},[t._v("\n            "+t._s(e)+"\n        ")])})),t._v(" "),n("transition",{attrs:{name:"fade"}},[t.tipShown?n("div",{attrs:{id:"scroll-tip"}},[n("div",{staticClass:"box is-size-7"},[t._v("\n                به سمت\n                "),n("i",{staticClass:"mdi mdi-arrow-up-thick wobbles"}),t._v("\n                یا\n                "),n("i",{staticClass:"mdi mdi-arrow-down-thick wobbles"}),t._v("\n                آزادانه حرکت کنید. بیت‌ها به تدریج بارگذاری خواهند شد.\n                 "),n("i",{staticClass:"mdi mdi-close-circle has-text-danger is-clickable",on:{click:function(e){t.tipShown=!1}}})])]):t._e()])],2)}),[],!1,null,null,null);e.default=component.exports},263:function(t,e,n){"use strict";var r=n(4),o=n(66).find,c=n(118),l="find",h=!0;l in[]&&Array(1).find((function(){h=!1})),r({target:"Array",proto:!0,forced:h},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),c(l)},264:function(t,e,n){"use strict";n.r(e);var r=n(6),o=(n(38),n(40),n(67),n(25),n(263),n(50),n(51),n(68),n(49),{components:{TheViewer:n(262).default},data:function(){return{hemistiches:[],chapters:[],start:null,end:null,isLoading:!0,viewing:null,query:"",isShowing:{chapterSelection:!1,searchForm:!1,notFoundError:!1}}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("https://farahmand-m.github.io/shahnama/data/chapters.json");case 2:return t.chapters=e.sent,e.next=5,t.$axios.$get("https://farahmand-m.github.io/shahnama/data/hemistiches.json");case 5:t.hemistiches=e.sent,t.isLoading=!1;case 7:case"end":return e.stop()}}),e)})))()},fetchOnServer:!1,computed:{selectedHemistiches:function(){var t=this.start||0,e=this.end||this.hemistiches.length;return this.hemistiches.slice(t,e)}},methods:{selectedChapter:function(t){var e=t.start,n=t.end;this.start!==e?(this.start=e,this.end=n):(this.start=null,this.end=null),this.viewing=null},flipChapterSelection:function(){this.isShowing.chapterSelection=!this.isShowing.chapterSelection},flipSearchForm:function(){this.viewing=null,this.isShowing.searchForm=!this.isShowing.searchForm},search:function(t){var e=this,n=t.submitter,r=this.selectedHemistiches.map((function(element,t){return[element,t]}));r=r.slice(this.viewing||0,r.length).concat(r.slice(0,this.viewing||0)),"previous"===n.name&&r.reverse();var o=r.find((function(t){return t[0].includes(e.query)&&t[1]!==e.viewing}));o?(this.viewing=o[1],this.$refs.viewer.jumpTo(o[1])):(this.isShowing.notFoundError=!0,setTimeout((function(){e.isShowing.notFoundError=!1}),2e3))},alterViewing:function(t){this.viewing=t}}}),c=n(69),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"container"}},[n("header",{staticClass:"has-shadow",attrs:{id:"header"}},[n("div",{staticClass:"level is-mobile"},[n("div",{staticClass:"level-left"},[n("div",{staticClass:"buttons is-pulled-left"},[n("button",{staticClass:"button is-white",attrs:{title:"انتخاب فصل"},on:{click:t.flipChapterSelection}},[t._m(0)])])]),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"level-right"},[n("div",{staticClass:"buttons is-pulled-left"},[n("button",{staticClass:"button is-white",attrs:{title:"جستجو در ابیات"},on:{click:t.flipSearchForm}},[t._m(2)])])])])]),t._v(" "),n("the-viewer",{ref:"viewer",attrs:{hemistiches:t.selectedHemistiches,"is-loading":t.isLoading},on:{selected:t.alterViewing}}),t._v(" "),n("transition",{attrs:{name:"fade"}},[t.isShowing.chapterSelection?n("div",{staticClass:"floating box",attrs:{id:"chapters"}},[n("aside",{staticClass:"menu is-size-7"},[n("ul",{staticClass:"menu-list"},t._l(t.chapters,(function(e){return n("li",{key:e.start},[n("a",{class:{"is-active":t.start===e.start},on:{click:function(n){return t.selectedChapter(e)}}},[t._v("\n                            "+t._s(e.title)+" ("+t._s((e.end-e.start)/2)+" بیت)\n                        ")])])})),0)])]):t._e()]),t._v(" "),n("transition",{attrs:{name:"fade"}},[t.isShowing.searchForm?n("div",{staticClass:"floating box",attrs:{id:"search"},on:{submit:function(e){return e.preventDefault(),t.search.apply(null,arguments)}}},[n("form",{staticClass:"is-size-7"},[n("div",{staticClass:"field"},[n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"input is-small",attrs:{type:"text",placeholder:"عبارت جستجو..."},domProps:{value:t.query},on:{keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;t.isShowing.searchForm=!1},input:function(e){e.target.composing||(t.query=e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"field is-grouped"},[n("p",{staticClass:"control is-expanded"},[n("button",{staticClass:"button is-light is-small is-fullwidth",attrs:{name:"next"}},[n("span",{staticClass:"icon"},[n("i",{staticClass:"mdi mdi-arrow-right-thick"})]),t._v(" "),n("span",[t._v("بعدی")])])]),t._v(" "),n("p",{staticClass:"control is-expanded"},[n("button",{staticClass:"button is-light is-small is-fullwidth",attrs:{name:"previous"}},[n("span",[t._v("قبلی")]),t._v(" "),n("span",{staticClass:"icon"},[n("i",{staticClass:"mdi mdi-arrow-left-thick"})])])])])])]):t._e()]),t._v(" "),n("transition",{attrs:{name:"fade"}},[t.isShowing.notFoundError?n("div",{staticClass:"floating",attrs:{id:"not-found"}},[n("div",{staticClass:"message is-danger"},[n("div",{staticClass:"message-body is-size-7"},[t._v("\n                    چنین کلمه‌ای یافت نشد!\n                ")])])]):t._e()])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon"},[e("i",{staticClass:"mdi mdi-format-list-checkbox"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"level-item"},[n("h1",{staticClass:"title is-6"},[t._v("شاهنامه فردوسی")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon"},[e("i",{staticClass:"mdi mdi-magnify"})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{TheViewer:n(262).default})}}]);