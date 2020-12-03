(function(e){function t(t){for(var n,a,o=t[0],s=t[1],u=t[2],p=0,c=[];p<o.length;p++)a=o[p],Object.prototype.hasOwnProperty.call(l,a)&&l[a]&&c.push(l[a][0]),l[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);m&&m(t);while(c.length)c.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,o=1;o<r.length;o++){var s=r[o];0!==l[s]&&(n=!1)}n&&(i.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},l={app:0},i=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/D2Calc/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var m=s;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"5c0b":function(e,t,r){"use strict";r("9e9d")},"9e9d":function(e,t,r){},cd49:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("h3",[e._v(e._s(e.totalDPS))]),r("form",{on:{submit:function(t){return t.preventDefault(),e.saveSetup(t)}}},[r("div",[r("label",[e._v("Setup")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.skillTree.setupName,expression:"skillTree.setupName"}],attrs:{type:"text"},domProps:{value:e.skillTree.setupName},on:{input:function(t){t.target.composing||e.$set(e.skillTree,"setupName",t.target.value)}}})]),r("div"),r("div",[r("label",[e._v("Golem Min-Damage")]),r("input",{directives:[{name:"model",rawName:"v-model.number",value:e.skillTree.golemDmgMin,expression:"skillTree.golemDmgMin",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:e.skillTree.golemDmgMin},on:{input:function(t){t.target.composing||e.$set(e.skillTree,"golemDmgMin",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),r("div",[r("label",[e._v("Golem Max-Damage")]),r("input",{directives:[{name:"model",rawName:"v-model.number",value:e.skillTree.golemDmgMax,expression:"skillTree.golemDmgMax",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:e.skillTree.golemDmgMax},on:{input:function(t){t.target.composing||e.$set(e.skillTree,"golemDmgMax",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),r("div",[r("label",[e._v("Skelly Damage")]),r("input",{directives:[{name:"model",rawName:"v-model.number",value:e.skillTree.physSkellyDmg,expression:"skillTree.physSkellyDmg",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:e.skillTree.physSkellyDmg},on:{input:function(t){t.target.composing||e.$set(e.skillTree,"physSkellyDmg",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),r("div",[r("label",[e._v("Magi Skelly Damage")]),r("input",{directives:[{name:"model",rawName:"v-model.number",value:e.skillTree.magiSkellyDmg,expression:"skillTree.magiSkellyDmg",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:e.skillTree.magiSkellyDmg},on:{input:function(t){t.target.composing||e.$set(e.skillTree,"magiSkellyDmg",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),r("div",[r("label",[e._v("Num Mages")]),r("input",{directives:[{name:"model",rawName:"v-model.number",value:e.skillTree.numMages,expression:"skillTree.numMages",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:e.skillTree.numMages},on:{input:function(t){t.target.composing||e.$set(e.skillTree,"numMages",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),r("div",[r("label",[e._v("Amp damage?")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.skillTree.withAmpDamage,expression:"skillTree.withAmpDamage"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.skillTree.withAmpDamage)?e._i(e.skillTree.withAmpDamage,null)>-1:e.skillTree.withAmpDamage},on:{change:function(t){var r=e.skillTree.withAmpDamage,n=t.target,l=!!n.checked;if(Array.isArray(r)){var i=null,a=e._i(r,i);n.checked?a<0&&e.$set(e.skillTree,"withAmpDamage",r.concat([i])):a>-1&&e.$set(e.skillTree,"withAmpDamage",r.slice(0,a).concat(r.slice(a+1)))}else e.$set(e.skillTree,"withAmpDamage",l)}}})]),e._m(0)]),r("section",e._l(e.orderedSetups,(function(t,n){return r("div",{key:n},[r("hr"),r("hr"),r("hr"),e._l(t,(function(l,i,a){return[1===a?r("h3",{key:"name_"+n+"_"+i},[e._v(e._s(e.getTotalDPS(t)))]):e._e(),r("p",{key:n+"_"+i},[e._v(e._s(i)+": "),r("b",[e._v(e._s(l))])])]})),r("button",{on:{click:function(r){return e.removesetup(t.originalIndex)}}},[e._v("delete")])],2)})),0)])},i=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("button",{attrs:{type:"submit"}},[e._v("save")])])}],a=(r("d81d"),r("fb6a"),r("a434"),localStorage.getItem("setups")),o=null;a&&(o=JSON.parse(a));var s=function(){return{setupName:"",golemDmgMin:0,golemDmgMax:0,physSkellyDmg:0,magiSkellyDmg:0,numMages:0,withAmpDamage:!1}},u=n["a"].extend({name:"App",data:function(){return{skillTree:s(),setups:o||[],mirrorSetups:o}},computed:{totalDPS:function(){return this.getTotalDPS(this.skillTree)},orderedSetups:function(){var e=this;return this.mirrorSetups?this.mirrorSetups.map((function(e,t){return e.originalIndex=t,e})).slice().sort((function(t,r){return e.getTotalDPS(r)-e.getTotalDPS(t)})):[]}},watch:{setups:function(){localStorage.setItem("setups",JSON.stringify(this.setups));var e=localStorage.getItem("setups");null!==e&&(this.mirrorSetups=JSON.parse(e))}},methods:{saveSetup:function(){this.setups.push(this.skillTree),this.skillTree=s()},removesetup:function(e){this.setups.splice(e,1)},getTotalDPS:function(e){var t=5*(e.golemDmgMin+e.golemDmgMax)/2,r=8*e.physSkellyDmg,n=e.magiSkellyDmg*e.numMages,l=t+r+n;return e.withAmpDamage?l+.5*l:l}}}),m=u,p=(r("5c0b"),r("2877")),c=Object(p["a"])(m,l,i,!1,null,null,null),g=c.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(g)}}).$mount("#app")}});
//# sourceMappingURL=app.34cab1b4.js.map