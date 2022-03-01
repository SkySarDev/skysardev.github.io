(function(){"use strict";var e={5553:function(e,t,a){var n=a(9242),r=a(678),o=a(3396);const i={class:"save-button"};function u(e,t,a,r,u,l){const s=(0,o.up)("user-form"),d=(0,o.up)("children-form"),c=(0,o.up)("main-button");return(0,o.wg)(),(0,o.iD)("form",{onSubmit:t[0]||(t[0]=(0,n.iM)(((...e)=>l.save&&l.save(...e)),["prevent"]))},[(0,o.Wm)(s),(0,o.Wm)(d),(0,o._)("div",i,[(0,o.Wm)(c,{type:"submit",variant:"contained",text:"Сохранить"})])],32)}var l=a(4870);const s={state:(0,l.qj)({userData:{name:"",age:"",children:[]}}),addChildren(){const e=Date.now();this.state.userData.children.push({id:e,name:"",age:""})},deleteChildren(e){this.state.userData.children=this.state.userData.children.filter((t=>t.id!==e))},save(){localStorage.setItem("userData",JSON.stringify(this.state.userData))},init(){const e=localStorage.getItem("userData");if(e){const t=JSON.parse(e);this.state.userData.name=t.name||"",this.state.userData.age=t.age||"",this.state.userData.children=t.children||[]}}};var d=s;const c=e=>((0,o.dD)("data-v-86b96f12"),e=e(),(0,o.Cn)(),e),m=c((()=>(0,o._)("h2",{class:"block-title"},"Персональные данные",-1))),f={class:"form-field"};function p(e,t,a,n,r,i){const u=(0,o.up)("main-input");return(0,o.wg)(),(0,o.iD)(o.HY,null,[m,(0,o._)("div",f,[(0,o.Wm)(u,{modelValue:r.userData.name,"onUpdate:modelValue":t[0]||(t[0]=e=>r.userData.name=e),modelModifiers:{trim:!0},label:"Имя"},null,8,["modelValue"]),(0,o.Wm)(u,{modelValue:r.userData.age,"onUpdate:modelValue":t[1]||(t[1]=e=>r.userData.age=e),type:"number",label:"Возраст"},null,8,["modelValue"])])],64)}var v={name:"UserForm",data(){return{userData:d.state.userData}}},h=a(89);const g=(0,h.Z)(v,[["render",p],["__scopeId","data-v-86b96f12"]]);var D=g;const b=e=>((0,o.dD)("data-v-a6c053a4"),e=e(),(0,o.Cn)(),e),w={class:"form-header"},y=b((()=>(0,o._)("h2",{class:"block-title"},"Дети (макс. 5)",-1))),I={class:"form-field"};function A(e,t,a,n,r,i){const u=(0,o.up)("main-button"),l=(0,o.up)("child-item");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",w,[y,r.userData.children.length<5?((0,o.wg)(),(0,o.j4)(u,{key:0,onClick:i.addChildren,variant:"outlined",text:"Добавить ребенка"},null,8,["onClick"])):(0,o.kq)("",!0)]),(0,o._)("div",I,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.userData.children,(e=>((0,o.wg)(),(0,o.j4)(l,{key:e.id,child:e,"delete-children":i.deleteChildren},null,8,["child","delete-children"])))),128))])],64)}const U={class:"child-item"};function P(e,t,a,n,r,i){const u=(0,o.up)("main-input"),l=(0,o.up)("main-button");return(0,o.wg)(),(0,o.iD)("div",U,[(0,o.Wm)(u,{modelValue:a.child.name,"onUpdate:modelValue":t[0]||(t[0]=e=>a.child.name=e),modelModifiers:{trim:!0},label:"Имя"},null,8,["modelValue"]),(0,o.Wm)(u,{modelValue:a.child.age,"onUpdate:modelValue":t[1]||(t[1]=e=>a.child.age=e),type:"number",label:"Возраст"},null,8,["modelValue"]),(0,o.Wm)(l,{onClick:t[2]||(t[2]=e=>a.deleteChildren(a.child.id)),type:"button",variant:"text",text:"Удалить"})])}var j={name:"ChildItem",props:{child:{type:Object,required:!0},deleteChildren:{type:Function,required:!0}}};const C=(0,h.Z)(j,[["render",P],["__scopeId","data-v-996ca658"]]);var L=C,V={name:"ChildrenForm",components:{ChildItem:L},data(){return{userData:d.state.userData}},methods:{addChildren(){d.addChildren()},deleteChildren(e){d.deleteChildren(e)}}};const O=(0,h.Z)(V,[["render",A],["__scopeId","data-v-a6c053a4"]]);var k=O,S=a(7139);function _(e,t,a,n,r,i){return(0,o.wg)(),(0,o.iD)("button",{class:(0,S.C_)(["button",a.variant||"contained"])},(0,S.zw)(a.text),3)}var x={name:"MainButton",props:{variant:{type:String,required:!1},text:{type:String,required:!0}}};const T=(0,h.Z)(x,[["render",_],["__scopeId","data-v-9488c57a"]]);var H=T,q={name:"UserFormPage",components:{MainButton:H,UserForm:D,ChildrenForm:k},methods:{save(){d.save()}}};const z=(0,h.Z)(q,[["render",u],["__scopeId","data-v-2ccfbfd8"]]);var Z=z;const W=e=>((0,o.dD)("data-v-2e817643"),e=e(),(0,o.Cn)(),e),M={key:0},B=W((()=>(0,o._)("h2",{class:"block-title"},"Персональные данные",-1))),G={class:"user-info"},X={key:0,class:"children-block"},R=W((()=>(0,o._)("h2",{class:"block-title"},"Дети",-1))),E={class:"child-info"},N={key:1},F=W((()=>(0,o._)("h2",{class:"block-title"},"Вы не предоставили свои данные!",-1))),Y={class:"no-info"},K=(0,o.Uk)(" Заполните "),Q=(0,o.Uk)("форму");function J(e,t,a,n,r,i){const u=(0,o.up)("router-link");return r.userData.name&&r.userData.age?((0,o.wg)(),(0,o.iD)("div",M,[B,(0,o._)("p",G,(0,S.zw)(r.userData.name)+", "+(0,S.zw)(r.userData.age)+" "+(0,S.zw)(r.yearsDeclension(r.userData.age)),1),r.userData.children.length?((0,o.wg)(),(0,o.iD)("div",X,[R,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.userData.children,(e=>((0,o.wg)(),(0,o.iD)("div",{key:e.id},[(0,o._)("p",E,(0,S.zw)(e.name)+", "+(0,S.zw)(e.age)+" "+(0,S.zw)(r.yearsDeclension(e.age)),1)])))),128))])):(0,o.kq)("",!0)])):((0,o.wg)(),(0,o.iD)("div",N,[F,(0,o._)("p",Y,[K,(0,o.Wm)(u,{to:"/user-form"},{default:(0,o.w5)((()=>[Q])),_:1})])]))}function $(e){const t=["год","года","лет"];return e%100>10&&e%100<20?t[2]:e%10>1&&e%10<5?t[1]:e%10===1?t[0]:t[2]}var ee={name:"UserPreviewPage",data(){return{userData:d.state.userData,yearsDeclension:$}}};const te=(0,h.Z)(ee,[["render",J],["__scopeId","data-v-2e817643"]]);var ae=te;const ne=[{path:"/",alias:"/user-form",name:"user-form",component:Z},{path:"/user-preview",name:"user-preview",component:ae}],re=(0,r.p7)({history:(0,r.PO)("/testing/vue-alef/"),routes:ne});var oe=re;function ie(e,t,a,n,r,i){const u=(0,o.up)("router-view"),l=(0,o.up)("main-layout");return(0,o.wg)(),(0,o.j4)(l,null,{default:(0,o.w5)((()=>[(0,o.Wm)(u)])),_:1})}const ue={class:"wrapper"},le={class:"main"};function se(e,t,a,n,r,i){const u=(0,o.up)("header-layout"),l=(0,o.up)("footer-layout");return(0,o.wg)(),(0,o.iD)("div",ue,[(0,o.Wm)(u),(0,o._)("main",le,[(0,o.WI)(e.$slots,"default",{},void 0,!0)]),(0,o.Wm)(l)])}var de=a(6949);const ce=e=>((0,o.dD)("data-v-53d15b12"),e=e(),(0,o.Cn)(),e),me={class:"header"},fe={class:"header-container container"},pe=ce((()=>(0,o._)("img",{class:"header-logo",src:de,alt:"Logo"},null,-1))),ve={class:"header-nav"},he=(0,o.Uk)("Форма"),ge=(0,o.Uk)("Превью");function De(e,t,a,n,r,i){const u=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("header",me,[(0,o._)("div",fe,[pe,(0,o._)("nav",ve,[(0,o.Wm)(u,{to:"/user-form"},{default:(0,o.w5)((()=>[he])),_:1}),(0,o.Wm)(u,{to:"/user-preview"},{default:(0,o.w5)((()=>[ge])),_:1})])])])}var be={name:"HeaderLayout"};const we=(0,h.Z)(be,[["render",De],["__scopeId","data-v-53d15b12"]]);var ye=we;const Ie=e=>((0,o.dD)("data-v-bceafa22"),e=e(),(0,o.Cn)(),e),Ae={class:"footer"},Ue=Ie((()=>(0,o._)("div",{class:"container"}," all rights reserved ",-1))),Pe=[Ue];function je(e,t,a,n,r,i){return(0,o.wg)(),(0,o.iD)("footer",Ae,Pe)}var Ce={name:"FooterLayout"};const Le=(0,h.Z)(Ce,[["render",je],["__scopeId","data-v-bceafa22"]]);var Ve=Le,Oe={name:"MainLayout",components:{HeaderLayout:ye,FooterLayout:Ve}};const ke=(0,h.Z)(Oe,[["render",se],["__scopeId","data-v-089cf998"]]);var Se=ke,_e={components:{MainLayout:Se},mounted(){d.init()}};const xe=(0,h.Z)(_e,[["render",ie]]);var Te=xe;const He={class:"input-border"},qe=["type"];function ze(e,t,a,r,i,u){return(0,o.wg)(),(0,o.iD)("div",He,[(0,o._)("label",null,[(0,o.Uk)((0,S.zw)(a.label)+" ",1),(0,o.wy)((0,o._)("input",{type:a.type,"onUpdate:modelValue":t[0]||(t[0]=e=>a.modelValue=e),onInput:t[1]||(t[1]=(...e)=>u.changeValue&&u.changeValue(...e)),required:""},null,40,qe),[[n.YZ,a.modelValue]])])])}var Ze={name:"MainInput",props:{type:{type:String,defaultValue:"text",required:!1},label:{type:String,required:!0},modelValue:[String,Number]},methods:{changeValue(e){this.$emit("update:modelValue",e.target.value)}},inheritAttrs:!1};const We=(0,h.Z)(Ze,[["render",ze],["__scopeId","data-v-19096e8e"]]);var Me=We,Be=[Me,H];const Ge=(0,n.ri)(Te);Be.forEach((e=>{Ge.component(e.name,e)})),Ge.use(oe),Ge.mount("#app")},6949:function(e){e.exports="data:image/png;base64,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"}},t={};function a(n){var r=t[n];if(void 0!==r)return r.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,n,r,o){if(!n){var i=1/0;for(d=0;d<e.length;d++){n=e[d][0],r=e[d][1],o=e[d][2];for(var u=!0,l=0;l<n.length;l++)(!1&o||i>=o)&&Object.keys(a.O).every((function(e){return a.O[e](n[l])}))?n.splice(l--,1):(u=!1,o<i&&(i=o));if(u){e.splice(d--,1);var s=r();void 0!==s&&(t=s)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[n,r,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,i=n[0],u=n[1],l=n[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(r in u)a.o(u,r)&&(a.m[r]=u[r]);if(l)var d=l(a)}for(t&&t(n);s<i.length;s++)o=i[s],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(d)},n=self["webpackChunkvue_alef_testing"]=self["webpackChunkvue_alef_testing"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(5553)}));n=a.O(n)})();