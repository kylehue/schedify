import{d as N,r as $,p as d,J as R,U as B,M as A,h as s,A as u,al as _,y,am as q,z as g,C as D,an as F,ao as j,_ as X,ap as L,aq as C,E as G,G as P,ar as K,K as U,as as J,W as Q,P as ee,at as ae,au as te,av as ne,aw as re,m as x,t as le,ax as oe,o as f,c as m,ay as E,ak as O,q as T,a as h}from"./Dah7evWW.js";import{g as ie}from"./x2dJ-OLu.js";const z=N({name:"SlotMachineNumber",props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],required:!0},oldOriginalNumber:{type:Number,default:void 0},newOriginalNumber:{type:Number,default:void 0}},setup(e){const a=$(null),l=$(e.value),i=$(e.value),n=$("up"),t=$(!1),o=d(()=>t.value?`${e.clsPrefix}-base-slot-machine-current-number--${n.value}-scroll`:null),p=d(()=>t.value?`${e.clsPrefix}-base-slot-machine-old-number--${n.value}-scroll`:null);R(A(e,"value"),(r,c)=>{l.value=c,i.value=r,B(H)});function H(){const r=e.newOriginalNumber,c=e.oldOriginalNumber;c===void 0||r===void 0||(r>c?v("up"):c>r&&v("down"))}function v(r){n.value=r,t.value=!1,B(()=>{var c;(c=a.value)===null||c===void 0||c.offsetWidth,t.value=!0})}return()=>{const{clsPrefix:r}=e;return s("span",{ref:a,class:`${r}-base-slot-machine-number`},l.value!==null?s("span",{class:[`${r}-base-slot-machine-old-number ${r}-base-slot-machine-old-number--top`,p.value]},l.value):null,s("span",{class:[`${r}-base-slot-machine-current-number`,o.value]},s("span",{ref:"numberWrapper",class:[`${r}-base-slot-machine-current-number__inner`,typeof e.value!="number"&&`${r}-base-slot-machine-current-number__inner--not-number`]},i.value)),l.value!==null?s("span",{class:[`${r}-base-slot-machine-old-number ${r}-base-slot-machine-old-number--bottom`,p.value]},l.value):null)}}}),{cubicBezierEaseOut:M}=_;function se({duration:e=".2s"}={}){return[u("&.fade-up-width-expand-transition-leave-active",{transition:`
 opacity ${e} ${M},
 max-width ${e} ${M},
 transform ${e} ${M}
 `}),u("&.fade-up-width-expand-transition-enter-active",{transition:`
 opacity ${e} ${M},
 max-width ${e} ${M},
 transform ${e} ${M}
 `}),u("&.fade-up-width-expand-transition-enter-to",{opacity:1,transform:"translateX(0) translateY(0)"}),u("&.fade-up-width-expand-transition-enter-from",{maxWidth:"0 !important",opacity:0,transform:"translateY(60%)"}),u("&.fade-up-width-expand-transition-leave-from",{opacity:1,transform:"translateY(0)"}),u("&.fade-up-width-expand-transition-leave-to",{maxWidth:"0 !important",opacity:0,transform:"translateY(60%)"})]}const ue=u([u("@keyframes n-base-slot-machine-fade-up-in",`
 from {
 transform: translateY(60%);
 opacity: 0;
 }
 to {
 transform: translateY(0);
 opacity: 1;
 }
 `),u("@keyframes n-base-slot-machine-fade-down-in",`
 from {
 transform: translateY(-60%);
 opacity: 0;
 }
 to {
 transform: translateY(0);
 opacity: 1;
 }
 `),u("@keyframes n-base-slot-machine-fade-up-out",`
 from {
 transform: translateY(0%);
 opacity: 1;
 }
 to {
 transform: translateY(-60%);
 opacity: 0;
 }
 `),u("@keyframes n-base-slot-machine-fade-down-out",`
 from {
 transform: translateY(0%);
 opacity: 1;
 }
 to {
 transform: translateY(60%);
 opacity: 0;
 }
 `),y("base-slot-machine",`
 overflow: hidden;
 white-space: nowrap;
 display: inline-block;
 height: 18px;
 line-height: 18px;
 `,[y("base-slot-machine-number",`
 display: inline-block;
 position: relative;
 height: 18px;
 width: .6em;
 max-width: .6em;
 `,[se({duration:".2s"}),q({duration:".2s",delay:"0s"}),y("base-slot-machine-old-number",`
 display: inline-block;
 opacity: 0;
 position: absolute;
 left: 0;
 right: 0;
 `,[g("top",{transform:"translateY(-100%)"}),g("bottom",{transform:"translateY(100%)"}),g("down-scroll",{animation:"n-base-slot-machine-fade-down-out .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),g("up-scroll",{animation:"n-base-slot-machine-fade-up-out .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1})]),y("base-slot-machine-current-number",`
 display: inline-block;
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 1;
 transform: translateY(0);
 width: .6em;
 `,[g("down-scroll",{animation:"n-base-slot-machine-fade-down-in .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),g("up-scroll",{animation:"n-base-slot-machine-fade-up-in .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),D("inner",`
 display: inline-block;
 position: absolute;
 right: 0;
 top: 0;
 width: .6em;
 `,[g("not-number",`
 right: unset;
 left: 0;
 `)])])])])]),de=N({name:"BaseSlotMachine",props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],default:0},max:{type:Number,default:void 0},appeared:{type:Boolean,required:!0}},setup(e){F("-base-slot-machine",ue,A(e,"clsPrefix"));const a=$(),l=$(),i=d(()=>{if(typeof e.value=="string")return[];if(e.value<1)return[0];const n=[];let t=e.value;for(e.max!==void 0&&(t=Math.min(e.max,t));t>=1;)n.push(t%10),t/=10,t=Math.floor(t);return n.reverse(),n});return R(A(e,"value"),(n,t)=>{typeof n=="string"?(l.value=void 0,a.value=void 0):typeof t=="string"?(l.value=n,a.value=void 0):(l.value=n,a.value=t)}),()=>{const{value:n,clsPrefix:t}=e;return typeof n=="number"?s("span",{class:`${t}-base-slot-machine`},s(X,{name:"fade-up-width-expand-transition",tag:"span"},{default:()=>i.value.map((o,p)=>s(z,{clsPrefix:t,key:i.value.length-p-1,oldOriginalNumber:a.value,newOriginalNumber:l.value,value:o}))}),s(j,{key:"+",width:!0},{default:()=>e.max!==void 0&&e.max<n?s(z,{clsPrefix:t,value:"+"}):null})):s("span",{class:`${t}-base-slot-machine`},n)}}});function ce(e){const{errorColor:a,infoColor:l,successColor:i,warningColor:n,fontFamily:t}=e;return{color:a,colorInfo:l,colorSuccess:i,colorError:a,colorWarning:n,fontSize:"12px",fontFamily:t}}const fe={name:"Badge",common:L,self:ce},me=u([u("@keyframes badge-wave-spread",{from:{boxShadow:"0 0 0.5px 0px var(--n-ripple-color)",opacity:.6},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)",opacity:0}}),y("badge",`
 display: inline-flex;
 position: relative;
 vertical-align: middle;
 font-family: var(--n-font-family);
 `,[g("as-is",[y("badge-sup",{position:"static",transform:"translateX(0)"},[C({transformOrigin:"left bottom",originalTransform:"translateX(0)"})])]),g("dot",[y("badge-sup",`
 height: 8px;
 width: 8px;
 padding: 0;
 min-width: 8px;
 left: 100%;
 bottom: calc(100% - 4px);
 `,[u("::before","border-radius: 4px;")])]),y("badge-sup",`
 background: var(--n-color);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: #FFF;
 position: absolute;
 height: 18px;
 line-height: 18px;
 border-radius: 9px;
 padding: 0 6px;
 text-align: center;
 font-size: var(--n-font-size);
 transform: translateX(-50%);
 left: 100%;
 bottom: calc(100% - 9px);
 font-variant-numeric: tabular-nums;
 z-index: 2;
 display: flex;
 align-items: center;
 `,[C({transformOrigin:"left bottom",originalTransform:"translateX(-50%)"}),y("base-wave",{zIndex:1,animationDuration:"2s",animationIterationCount:"infinite",animationDelay:"1s",animationTimingFunction:"var(--n-ripple-bezier)",animationName:"badge-wave-spread"}),u("&::before",`
 opacity: 0;
 transform: scale(1);
 border-radius: 9px;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)])])]),he=Object.assign(Object.assign({},P.props),{value:[String,Number],max:Number,dot:Boolean,type:{type:String,default:"default"},show:{type:Boolean,default:!0},showZero:Boolean,processing:Boolean,color:String,offset:Array}),la=N({name:"Badge",props:he,setup(e,{slots:a}){const{mergedClsPrefixRef:l,inlineThemeDisabled:i,mergedRtlRef:n}=G(e),t=P("Badge","-badge",me,fe,e,l),o=$(!1),p=()=>{o.value=!0},H=()=>{o.value=!1},v=d(()=>e.show&&(e.dot||e.value!==void 0&&!(!e.showZero&&Number(e.value)<=0)||!K(a.value)));U(()=>{v.value&&(o.value=!0)});const r=J("Badge",n,l),c=d(()=>{const{type:w,color:b}=e,{common:{cubicBezierEaseInOut:V,cubicBezierEaseOut:k},self:{[Q("color",w)]:S,fontFamily:I,fontSize:W}}=t.value;return{"--n-font-size":W,"--n-font-family":I,"--n-color":b||S,"--n-ripple-color":b||S,"--n-bezier":V,"--n-ripple-bezier":k}}),Z=i?ee("badge",d(()=>{let w="";const{type:b,color:V}=e;return b&&(w+=b[0]),V&&(w+=ae(V)),w}),c,e):void 0,Y=d(()=>{const{offset:w}=e;if(!w)return;const[b,V]=w,k=typeof b=="number"?`${b}px`:b,S=typeof V=="number"?`${V}px`:V;return{transform:`translate(calc(${r!=null&&r.value?"50%":"-50%"} + ${k}), ${S})`}});return{rtlEnabled:r,mergedClsPrefix:l,appeared:o,showBadge:v,handleAfterEnter:p,handleAfterLeave:H,cssVars:i?void 0:c,themeClass:Z==null?void 0:Z.themeClass,onRender:Z==null?void 0:Z.onRender,offsetStyle:Y}},render(){var e;const{mergedClsPrefix:a,onRender:l,themeClass:i,$slots:n}=this;l==null||l();const t=(e=n.default)===null||e===void 0?void 0:e.call(n);return s("div",{class:[`${a}-badge`,this.rtlEnabled&&`${a}-badge--rtl`,i,{[`${a}-badge--dot`]:this.dot,[`${a}-badge--as-is`]:!t}],style:this.cssVars},t,s(te,{name:"fade-in-scale-up-transition",onAfterEnter:this.handleAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>this.showBadge?s("sup",{class:`${a}-badge-sup`,title:ie(this.value),style:this.offsetStyle},ne(n.value,()=>[this.dot?null:s(de,{clsPrefix:a,appeared:this.appeared,max:this.max,value:this.value})]),this.processing?s(re,{clsPrefix:a}):null):null}))}});function oa(){const e=x(oe,null);return e===null&&le("use-dialog","No outer <n-dialog-provider /> founded."),e}const pe=["width","height","fill","transform"],ve={key:0},be=h("path",{d:"M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"},null,-1),ge=[be],ye={key:1},xe=h("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"},null,-1),we=h("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"},null,-1),Ve=[xe,we],$e={key:2},He=h("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H136v48a8,8,0,0,1-16,0V136H72a8,8,0,0,1,0-16h48V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"},null,-1),Ze=[He],Me={key:3},Ne=h("path",{d:"M222,128a6,6,0,0,1-6,6H134v82a6,6,0,0,1-12,0V134H40a6,6,0,0,1,0-12h82V40a6,6,0,0,1,12,0v82h82A6,6,0,0,1,222,128Z"},null,-1),Se=[Ne],ke={key:4},Ae=h("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"},null,-1),Be=[Ae],Ce={key:5},ze=h("path",{d:"M220,128a4,4,0,0,1-4,4H132v84a4,4,0,0,1-8,0V132H40a4,4,0,0,1,0-8h84V40a4,4,0,0,1,8,0v84h84A4,4,0,0,1,220,128Z"},null,-1),Re=[ze],Pe={name:"PhPlus"},ia=N({...Pe,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(e){const a=e,l=x("weight","regular"),i=x("size","1em"),n=x("color","currentColor"),t=x("mirrored",!1),o=d(()=>a.weight??l),p=d(()=>a.size??i),H=d(()=>a.color??n),v=d(()=>a.mirrored!==void 0?a.mirrored?"scale(-1, 1)":void 0:t?"scale(-1, 1)":void 0);return(r,c)=>(f(),m("svg",T({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:p.value,height:p.value,fill:H.value,transform:v.value},r.$attrs),[E(r.$slots,"default"),o.value==="bold"?(f(),m("g",ve,ge)):o.value==="duotone"?(f(),m("g",ye,Ve)):o.value==="fill"?(f(),m("g",$e,Ze)):o.value==="light"?(f(),m("g",Me,Se)):o.value==="regular"?(f(),m("g",ke,Be)):o.value==="thin"?(f(),m("g",Ce,Re)):O("",!0)],16,pe))}}),Ee=["width","height","fill","transform"],Oe={key:0},Te=h("path",{d:"M216,48H180V36A28,28,0,0,0,152,8H104A28,28,0,0,0,76,36V48H40a12,12,0,0,0,0,24h4V208a20,20,0,0,0,20,20H192a20,20,0,0,0,20-20V72h4a12,12,0,0,0,0-24ZM100,36a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4V48H100Zm88,168H68V72H188ZM116,104v64a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Zm48,0v64a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Z"},null,-1),Ye=[Te],Ie={key:1},We=h("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56Z",opacity:"0.2"},null,-1),_e=h("path",{d:"M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"},null,-1),qe=[We,_e],De={key:2},Fe=h("path",{d:"M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM112,168a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm0-120H96V40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z"},null,-1),je=[Fe],Xe={key:3},Le=h("path",{d:"M216,50H174V40a22,22,0,0,0-22-22H104A22,22,0,0,0,82,40V50H40a6,6,0,0,0,0,12H50V208a14,14,0,0,0,14,14H192a14,14,0,0,0,14-14V62h10a6,6,0,0,0,0-12ZM94,40a10,10,0,0,1,10-10h48a10,10,0,0,1,10,10V50H94ZM194,208a2,2,0,0,1-2,2H64a2,2,0,0,1-2-2V62H194ZM110,104v64a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Zm48,0v64a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Z"},null,-1),Ge=[Le],Ke={key:4},Ue=h("path",{d:"M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"},null,-1),Je=[Ue],Qe={key:5},ea=h("path",{d:"M216,52H172V40a20,20,0,0,0-20-20H104A20,20,0,0,0,84,40V52H40a4,4,0,0,0,0,8H52V208a12,12,0,0,0,12,12H192a12,12,0,0,0,12-12V60h12a4,4,0,0,0,0-8ZM92,40a12,12,0,0,1,12-12h48a12,12,0,0,1,12,12V52H92ZM196,208a4,4,0,0,1-4,4H64a4,4,0,0,1-4-4V60H196ZM108,104v64a4,4,0,0,1-8,0V104a4,4,0,0,1,8,0Zm48,0v64a4,4,0,0,1-8,0V104a4,4,0,0,1,8,0Z"},null,-1),aa=[ea],ta={name:"PhTrash"},sa=N({...ta,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(e){const a=e,l=x("weight","regular"),i=x("size","1em"),n=x("color","currentColor"),t=x("mirrored",!1),o=d(()=>a.weight??l),p=d(()=>a.size??i),H=d(()=>a.color??n),v=d(()=>a.mirrored!==void 0?a.mirrored?"scale(-1, 1)":void 0:t?"scale(-1, 1)":void 0);return(r,c)=>(f(),m("svg",T({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:p.value,height:p.value,fill:H.value,transform:v.value},r.$attrs),[E(r.$slots,"default"),o.value==="bold"?(f(),m("g",Oe,Ye)):o.value==="duotone"?(f(),m("g",Ie,qe)):o.value==="fill"?(f(),m("g",De,je)):o.value==="light"?(f(),m("g",Xe,Ge)):o.value==="regular"?(f(),m("g",Ke,Je)):o.value==="thin"?(f(),m("g",Qe,aa)):O("",!0)],16,Ee))}});export{sa as G,ia as I,la as N,oa as u};
