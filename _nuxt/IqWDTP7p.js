import{d as N,r as $,j as f,L as T,M as z,t as A,h as s,l as d,c3 as q,m as y,c4 as j,q as g,s as X,a3 as L,c5 as U,a_ as _,ak as G,af as P,g as K,C as O,bO as J,aV as Q,E as ee,F as ae,G as te,bV as ne,ah as oe,U as le,c6 as ie,z as w,aR as re,c7 as se,o as u,c as m,aq as C,ar as Y,a2 as I,a as h,az as ue,as as de,at as fe,w as B,b as ce,u as R,c8 as me,c9 as he}from"./CCwICSxJ.js";import{g as pe}from"./DNhtUW22.js";const E=N({name:"SlotMachineNumber",props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],required:!0},oldOriginalNumber:{type:Number,default:void 0},newOriginalNumber:{type:Number,default:void 0}},setup(e){const a=$(null),n=$(e.value),i=$(e.value),t=$("up"),o=$(!1),r=f(()=>o.value?`${e.clsPrefix}-base-slot-machine-current-number--${t.value}-scroll`:null),p=f(()=>o.value?`${e.clsPrefix}-base-slot-machine-old-number--${t.value}-scroll`:null);T(A(e,"value"),(l,c)=>{n.value=c,i.value=l,z(H)});function H(){const l=e.newOriginalNumber,c=e.oldOriginalNumber;c===void 0||l===void 0||(l>c?v("up"):c>l&&v("down"))}function v(l){t.value=l,o.value=!1,z(()=>{var c;(c=a.value)===null||c===void 0||c.offsetWidth,o.value=!0})}return()=>{const{clsPrefix:l}=e;return s("span",{ref:a,class:`${l}-base-slot-machine-number`},n.value!==null?s("span",{class:[`${l}-base-slot-machine-old-number ${l}-base-slot-machine-old-number--top`,p.value]},n.value):null,s("span",{class:[`${l}-base-slot-machine-current-number`,r.value]},s("span",{ref:"numberWrapper",class:[`${l}-base-slot-machine-current-number__inner`,typeof e.value!="number"&&`${l}-base-slot-machine-current-number__inner--not-number`]},i.value)),n.value!==null?s("span",{class:[`${l}-base-slot-machine-old-number ${l}-base-slot-machine-old-number--bottom`,p.value]},n.value):null)}}}),{cubicBezierEaseOut:Z}=q;function ve({duration:e=".2s"}={}){return[d("&.fade-up-width-expand-transition-leave-active",{transition:`
 opacity ${e} ${Z},
 max-width ${e} ${Z},
 transform ${e} ${Z}
 `}),d("&.fade-up-width-expand-transition-enter-active",{transition:`
 opacity ${e} ${Z},
 max-width ${e} ${Z},
 transform ${e} ${Z}
 `}),d("&.fade-up-width-expand-transition-enter-to",{opacity:1,transform:"translateX(0) translateY(0)"}),d("&.fade-up-width-expand-transition-enter-from",{maxWidth:"0 !important",opacity:0,transform:"translateY(60%)"}),d("&.fade-up-width-expand-transition-leave-from",{opacity:1,transform:"translateY(0)"}),d("&.fade-up-width-expand-transition-leave-to",{maxWidth:"0 !important",opacity:0,transform:"translateY(60%)"})]}const be=d([d("@keyframes n-base-slot-machine-fade-up-in",`
 from {
 transform: translateY(60%);
 opacity: 0;
 }
 to {
 transform: translateY(0);
 opacity: 1;
 }
 `),d("@keyframes n-base-slot-machine-fade-down-in",`
 from {
 transform: translateY(-60%);
 opacity: 0;
 }
 to {
 transform: translateY(0);
 opacity: 1;
 }
 `),d("@keyframes n-base-slot-machine-fade-up-out",`
 from {
 transform: translateY(0%);
 opacity: 1;
 }
 to {
 transform: translateY(-60%);
 opacity: 0;
 }
 `),d("@keyframes n-base-slot-machine-fade-down-out",`
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
 `,[ve({duration:".2s"}),j({duration:".2s",delay:"0s"}),y("base-slot-machine-old-number",`
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
 `,[g("down-scroll",{animation:"n-base-slot-machine-fade-down-in .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),g("up-scroll",{animation:"n-base-slot-machine-fade-up-in .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),X("inner",`
 display: inline-block;
 position: absolute;
 right: 0;
 top: 0;
 width: .6em;
 `,[g("not-number",`
 right: unset;
 left: 0;
 `)])])])])]),ge=N({name:"BaseSlotMachine",props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],default:0},max:{type:Number,default:void 0},appeared:{type:Boolean,required:!0}},setup(e){L("-base-slot-machine",be,A(e,"clsPrefix"));const a=$(),n=$(),i=f(()=>{if(typeof e.value=="string")return[];if(e.value<1)return[0];const t=[];let o=e.value;for(e.max!==void 0&&(o=Math.min(e.max,o));o>=1;)t.push(o%10),o/=10,o=Math.floor(o);return t.reverse(),t});return T(A(e,"value"),(t,o)=>{typeof t=="string"?(n.value=void 0,a.value=void 0):typeof o=="string"?(n.value=t,a.value=void 0):(n.value=t,a.value=o)}),()=>{const{value:t,clsPrefix:o}=e;return typeof t=="number"?s("span",{class:`${o}-base-slot-machine`},s(_,{name:"fade-up-width-expand-transition",tag:"span"},{default:()=>i.value.map((r,p)=>s(E,{clsPrefix:o,key:i.value.length-p-1,oldOriginalNumber:a.value,newOriginalNumber:n.value,value:r}))}),s(U,{key:"+",width:!0},{default:()=>e.max!==void 0&&e.max<t?s(E,{clsPrefix:o,value:"+"}):null})):s("span",{class:`${o}-base-slot-machine`},t)}}});function ye(e){const{errorColor:a,infoColor:n,successColor:i,warningColor:t,fontFamily:o}=e;return{color:a,colorInfo:n,colorSuccess:i,colorError:a,colorWarning:t,fontSize:"12px",fontFamily:o}}const we={name:"Badge",common:G,self:ye},xe=d([d("@keyframes badge-wave-spread",{from:{boxShadow:"0 0 0.5px 0px var(--n-ripple-color)",opacity:.6},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)",opacity:0}}),y("badge",`
 display: inline-flex;
 position: relative;
 vertical-align: middle;
 font-family: var(--n-font-family);
 `,[g("as-is",[y("badge-sup",{position:"static",transform:"translateX(0)"},[P({transformOrigin:"left bottom",originalTransform:"translateX(0)"})])]),g("dot",[y("badge-sup",`
 height: 8px;
 width: 8px;
 padding: 0;
 min-width: 8px;
 left: 100%;
 bottom: calc(100% - 4px);
 `,[d("::before","border-radius: 4px;")])]),y("badge-sup",`
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
 `,[P({transformOrigin:"left bottom",originalTransform:"translateX(-50%)"}),y("base-wave",{zIndex:1,animationDuration:"2s",animationIterationCount:"infinite",animationDelay:"1s",animationTimingFunction:"var(--n-ripple-bezier)",animationName:"badge-wave-spread"}),d("&::before",`
 opacity: 0;
 transform: scale(1);
 border-radius: 9px;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)])])]),Ve=Object.assign(Object.assign({},O.props),{value:[String,Number],max:Number,dot:Boolean,type:{type:String,default:"default"},show:{type:Boolean,default:!0},showZero:Boolean,processing:Boolean,color:String,offset:Array}),ma=N({name:"Badge",props:Ve,setup(e,{slots:a}){const{mergedClsPrefixRef:n,inlineThemeDisabled:i,mergedRtlRef:t}=K(e),o=O("Badge","-badge",xe,we,e,n),r=$(!1),p=()=>{r.value=!0},H=()=>{r.value=!1},v=f(()=>e.show&&(e.dot||e.value!==void 0&&!(!e.showZero&&Number(e.value)<=0)||!J(a.value)));Q(()=>{v.value&&(r.value=!0)});const l=ee("Badge",t,n),c=f(()=>{const{type:x,color:b}=e,{common:{cubicBezierEaseInOut:V,cubicBezierEaseOut:S},self:{[ae("color",x)]:k,fontFamily:W,fontSize:D}}=o.value;return{"--n-font-size":D,"--n-font-family":W,"--n-color":b||k,"--n-ripple-color":b||k,"--n-bezier":V,"--n-ripple-bezier":S}}),M=i?te("badge",f(()=>{let x="";const{type:b,color:V}=e;return b&&(x+=b[0]),V&&(x+=ne(V)),x}),c,e):void 0,F=f(()=>{const{offset:x}=e;if(!x)return;const[b,V]=x,S=typeof b=="number"?`${b}px`:b,k=typeof V=="number"?`${V}px`:V;return{transform:`translate(calc(${l!=null&&l.value?"50%":"-50%"} + ${S}), ${k})`}});return{rtlEnabled:l,mergedClsPrefix:n,appeared:r,showBadge:v,handleAfterEnter:p,handleAfterLeave:H,cssVars:i?void 0:c,themeClass:M==null?void 0:M.themeClass,onRender:M==null?void 0:M.onRender,offsetStyle:F}},render(){var e;const{mergedClsPrefix:a,onRender:n,themeClass:i,$slots:t}=this;n==null||n();const o=(e=t.default)===null||e===void 0?void 0:e.call(t);return s("div",{class:[`${a}-badge`,this.rtlEnabled&&`${a}-badge--rtl`,i,{[`${a}-badge--dot`]:this.dot,[`${a}-badge--as-is`]:!o}],style:this.cssVars},o,s(oe,{name:"fade-in-scale-up-transition",onAfterEnter:this.handleAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>this.showBadge?s("sup",{class:`${a}-badge-sup`,title:pe(this.value),style:this.offsetStyle},le(t.value,()=>[this.dot?null:s(ge,{clsPrefix:a,appeared:this.appeared,max:this.max,value:this.value})]),this.processing?s(ie,{clsPrefix:a}):null):null}))}});function ha(){const e=w(se,null);return e===null&&re("use-dialog","No outer <n-dialog-provider /> founded."),e}const $e=["width","height","fill","transform"],He={key:0},Me=h("path",{d:"M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"},null,-1),Ze=[Me],Ne={key:1},ke=h("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"},null,-1),Ce=h("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"},null,-1),Se=[ke,Ce],Be={key:2},Ae=h("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H136v48a8,8,0,0,1-16,0V136H72a8,8,0,0,1,0-16h48V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"},null,-1),ze=[Ae],Pe={key:3},Re=h("path",{d:"M222,128a6,6,0,0,1-6,6H134v82a6,6,0,0,1-12,0V134H40a6,6,0,0,1,0-12h82V40a6,6,0,0,1,12,0v82h82A6,6,0,0,1,222,128Z"},null,-1),Ee=[Re],Te={key:4},Oe=h("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"},null,-1),Ye=[Oe],Ie={key:5},Fe=h("path",{d:"M220,128a4,4,0,0,1-4,4H132v84a4,4,0,0,1-8,0V132H40a4,4,0,0,1,0-8h84V40a4,4,0,0,1,8,0v84h84A4,4,0,0,1,220,128Z"},null,-1),We=[Fe],De={name:"PhPlus"},pa=N({...De,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(e){const a=e,n=w("weight","regular"),i=w("size","1em"),t=w("color","currentColor"),o=w("mirrored",!1),r=f(()=>a.weight??n),p=f(()=>a.size??i),H=f(()=>a.color??t),v=f(()=>a.mirrored!==void 0?a.mirrored?"scale(-1, 1)":void 0:o?"scale(-1, 1)":void 0);return(l,c)=>(u(),m("svg",I({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:p.value,height:p.value,fill:H.value,transform:v.value},l.$attrs),[C(l.$slots,"default"),r.value==="bold"?(u(),m("g",He,Ze)):r.value==="duotone"?(u(),m("g",Ne,Se)):r.value==="fill"?(u(),m("g",Be,ze)):r.value==="light"?(u(),m("g",Pe,Ee)):r.value==="regular"?(u(),m("g",Te,Ye)):r.value==="thin"?(u(),m("g",Ie,We)):Y("",!0)],16,$e))}}),qe=["width","height","fill","transform"],je={key:0},Xe=h("path",{d:"M216,48H180V36A28,28,0,0,0,152,8H104A28,28,0,0,0,76,36V48H40a12,12,0,0,0,0,24h4V208a20,20,0,0,0,20,20H192a20,20,0,0,0,20-20V72h4a12,12,0,0,0,0-24ZM100,36a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4V48H100Zm88,168H68V72H188ZM116,104v64a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Zm48,0v64a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Z"},null,-1),Le=[Xe],Ue={key:1},_e=h("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56Z",opacity:"0.2"},null,-1),Ge=h("path",{d:"M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"},null,-1),Ke=[_e,Ge],Je={key:2},Qe=h("path",{d:"M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM112,168a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm0-120H96V40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z"},null,-1),ea=[Qe],aa={key:3},ta=h("path",{d:"M216,50H174V40a22,22,0,0,0-22-22H104A22,22,0,0,0,82,40V50H40a6,6,0,0,0,0,12H50V208a14,14,0,0,0,14,14H192a14,14,0,0,0,14-14V62h10a6,6,0,0,0,0-12ZM94,40a10,10,0,0,1,10-10h48a10,10,0,0,1,10,10V50H94ZM194,208a2,2,0,0,1-2,2H64a2,2,0,0,1-2-2V62H194ZM110,104v64a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Zm48,0v64a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Z"},null,-1),na=[ta],oa={key:4},la=h("path",{d:"M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"},null,-1),ia=[la],ra={key:5},sa=h("path",{d:"M216,52H172V40a20,20,0,0,0-20-20H104A20,20,0,0,0,84,40V52H40a4,4,0,0,0,0,8H52V208a12,12,0,0,0,12,12H192a12,12,0,0,0,12-12V60h12a4,4,0,0,0,0-8ZM92,40a12,12,0,0,1,12-12h48a12,12,0,0,1,12,12V52H92ZM196,208a4,4,0,0,1-4,4H64a4,4,0,0,1-4-4V60H196ZM108,104v64a4,4,0,0,1-8,0V104a4,4,0,0,1,8,0Zm48,0v64a4,4,0,0,1-8,0V104a4,4,0,0,1,8,0Z"},null,-1),ua=[sa],da={name:"PhTrash"},va=N({...da,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(e){const a=e,n=w("weight","regular"),i=w("size","1em"),t=w("color","currentColor"),o=w("mirrored",!1),r=f(()=>a.weight??n),p=f(()=>a.size??i),H=f(()=>a.color??t),v=f(()=>a.mirrored!==void 0?a.mirrored?"scale(-1, 1)":void 0:o?"scale(-1, 1)":void 0);return(l,c)=>(u(),m("svg",I({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:p.value,height:p.value,fill:H.value,transform:v.value},l.$attrs),[C(l.$slots,"default"),r.value==="bold"?(u(),m("g",je,Le)):r.value==="duotone"?(u(),m("g",Ue,Ke)):r.value==="fill"?(u(),m("g",Je,ea)):r.value==="light"?(u(),m("g",aa,na)):r.value==="regular"?(u(),m("g",oa,ia)):r.value==="thin"?(u(),m("g",ra,ua)):Y("",!0)],16,qe))}}),ba=N({__name:"modal",props:ue({title:{},positiveText:{},negativeText:{},onPositiveClick:{type:Function}},{show:{type:Boolean,default:!1},showModifiers:{}}),emits:["update:show"],setup(e){const a=de(e,"show");return(n,i)=>(u(),fe(R(he),{show:a.value,"onUpdate:show":i[3]||(i[3]=t=>a.value=t)},{default:B(()=>[ce(R(me),{title:n.title,"positive-text":n.positiveText,"negative-text":n.negativeText,show:a.value,"onUpdate:show":i[0]||(i[0]=t=>a.value=t),onClose:i[1]||(i[1]=t=>a.value=!1),onNegativeClick:i[2]||(i[2]=t=>a.value=!1),onPositiveClick:n.onPositiveClick,"show-icon":!1},{icon:B(()=>[C(n.$slots,"icon")]),default:B(()=>[C(n.$slots,"default")]),_:3},8,["title","positive-text","negative-text","show","onPositiveClick"])]),_:3},8,["show"]))}});export{va as G,pa as I,ma as N,ba as _,ha as u};
