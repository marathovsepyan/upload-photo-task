(function(e){function t(t){for(var n,o,i=t[0],u=t[1],s=t[2],l=0,p=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);f&&f(t);while(p.length)p.shift()();return c.push.apply(c,s||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,o=1;o<r.length;o++){var i=r[o];0!==a[i]&&(n=!1)}n&&(c.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},o={app:0},a={app:0},c=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-284189c8":"a5c9069b"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r={"chunk-284189c8":1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-284189c8":"ff4a0cb0"}[e]+".css",a=u.p+n,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===n||l===a))return t()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){s=p[i],l=s.getAttribute("data-href");if(l===n||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete o[e],f.parentNode.removeChild(f),r(c)},f.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var p=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",p.name="ChunkLoadError",p.type=n,p.request=o,r[1](p)}a[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/upload-photo-task/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var f=l;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r(e.layout,{tag:"component"},[r("router-view")],1)],1)},a=[],c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"empty-layout"},[r("main",{},[r("div",{staticClass:"app-page"},[r("router-view")],1)])])},i=[],u={},s=u,l=r("2877"),p=Object(l["a"])(s,c,i,!1,null,null,null),f=p.exports,d={computed:{layout:function(){return(this.$route.meta.layout||"empty")+"-layout"}},components:{EmptyLayout:f}},h=d,m=(r("5c0b"),Object(l["a"])(h,o,a,!1,null,null,null)),v=m.exports,b=r("9483");Object(b["a"])("".concat("/upload-photo-task/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});r("d3b7"),r("3ca3"),r("ddb0");var g=r("8c4f");n["a"].use(g["a"]);var y=[{path:"/",name:"Home",meta:{layout:"empty"},component:function(){return r.e("chunk-284189c8").then(r.bind(null,"bb51"))}}],w=new g["a"]({routes:y}),k=w,O=r("5530"),_=r("1da1"),j=(r("96cf"),r("b0c0"),r("d81d"),r("b64b"),r("2f62")),E=r("260b");n["a"].use(j["a"]);var x=new j["a"].Store({state:{},mutations:{setError:function(e,t){e.error=t},clearError:function(e){e.error=null}},actions:{insertPhoto:function(e,t){return Object(_["a"])(regeneratorRuntime.mark((function r(){var n,o,a,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,o=t.id,a=t.name,c=t.url,r.prev=2,r.next=5,E["a"].database().ref("/photos/".concat(o,"/")).set({name:a,url:c});case 5:return r.abrupt("return",r.sent);case 8:throw r.prev=8,r.t0=r["catch"](2),n(r.t0),r.t0;case 12:case"end":return r.stop()}}),r,null,[[2,8]])})))()},fetchPhoto:function(e){return Object(_["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.prev=1,t.next=4,E["a"].database().ref("/photos").once("value");case 4:if(t.t0=t.sent.val(),t.t0){t.next=7;break}t.t0={};case 7:return n=t.t0,t.abrupt("return",Object.keys(n).map((function(e){return Object(O["a"])(Object(O["a"])({},n[e]),{},{id:e})})));case 11:throw t.prev=11,t.t1=t["catch"](1),r(t.t1),t.t1;case 15:case"end":return t.stop()}}),t,null,[[1,11]])})))()},deletePhotoById:function(e,t){return Object(_["a"])(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,o=t.id,r.prev=2,r.next=5,E["a"].database().ref("/photos").child(o).remove();case 5:r.next=11;break;case 7:throw r.prev=7,r.t0=r["catch"](2),n(r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[2,7]])})))()},deleteAllPhotos:function(e,t){return Object(_["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:e.dispatch,n=e.commit,r.prev=1,t.map((function(e,t){E["a"].database().ref("photos").child(e.id).remove()})),r.next=9;break;case 5:throw r.prev=5,r.t0=r["catch"](1),n(r.t0),r.t0;case 9:case"end":return r.stop()}}),r,null,[[1,5]])})))()}},modules:{}}),C=(r("6885"),{install:function(e,t){e.prototype.$message=function(e){M.toast({html:e})},e.prototype.$error=function(e){M.toast({html:"[ERROR]: ".concat(e)})}}}),P=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-loader"},[r("div",{staticClass:"preloader-wrapper active"},[r("div",{staticClass:"spinner-layer",class:e.color},[e._m(0),e._m(1),e._m(2)])])])},A=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"circle-clipper left"},[r("div",{staticClass:"circle"})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"gap-patch"},[r("div",{staticClass:"circle"})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"circle-clipper right"},[r("div",{staticClass:"circle"})])}],R={computed:{color:function(){var e=["spinner-red-only","spinner-blue-only","spinner-green-only"];return e[Math.floor(3*Math.random())]}}},S=R,$=Object(l["a"])(S,P,A,!1,null,null,null),L=$.exports;r("66ce");n["a"].config.productionTip=!1,n["a"].use(C),n["a"].component("Loader",L);var N={apiKey:"AIzaSyDnWk1OuC_u6UYLQEMJBRGwHwm0A3llcy8",authDomain:"upload-photo-task.firebaseapp.com",databaseURL:"https://upload-photo-task-default-rtdb.firebaseio.com",projectId:"upload-photo-task",storageBucket:"upload-photo-task.appspot.com",messagingSenderId:"287710597810",appId:"1:287710597810:web:53d04b7fbfd610da072fab"};E["a"].initializeApp(N),new n["a"]({router:k,store:x,render:function(e){return e(v)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";r("9c0c")},"9c0c":function(e,t,r){}});
//# sourceMappingURL=app.e3813728.js.map