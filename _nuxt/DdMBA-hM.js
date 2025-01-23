import{_ as Ut}from"./DoZA1TFs.js";import{d as Y,r as E,aN as Vt,h,aO as Xt,aP as ve,aQ as Gt,f as qt,z as Ze,aR as Yt,j as ae,a2 as Kt,V as ue,W as Jt,aS as Qt,aT as Zt,Q as ea,m as r,q as f,l as W,s as D,R as ta,g as aa,C as et,aU as Le,Z as ye,L as ne,aV as na,p as ra,t as N,T as oa,G as sa,I as Me,ac as we,aW as ia,k as fe,X as la,M as Te,F as O,aX as be,aY as da,aZ as ca,a_ as fa,a$ as ba,as as me,aA as De,ay as ua,o as U,c as ee,a as G,b as P,u as i,av as Ie,w as j,e as q,au as Fe,aL as _e,aM as pa,az as He,aG as tt,aF as at,b0 as ie,at as pe,aw as nt,aI as va,b1 as te,B as re,aJ as se,b2 as Ne,aK as Oe,b3 as Ue,n as Ve,ar as ma}from"./CCwICSxJ.js";import{o as ga,q as Xe,A as ha,r as xa,k as Ge,i as ya,e as wa}from"./1CPpH3Gn.js";import{u as rt,G as Re,N as Ta,_ as Ca,I as Sa}from"./IqWDTP7p.js";import{u as $a}from"./C_Ai-skY.js";import{u as Ra,b as za}from"./DNhtUW22.js";const _a=Xe(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[Xe("&::-webkit-scrollbar",{width:0,height:0})]),Pa=Y({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=E(null);function n(o){!(o.currentTarget.offsetWidth<o.currentTarget.scrollWidth)||o.deltaY===0||(o.currentTarget.scrollLeft+=o.deltaY+o.deltaX,o.preventDefault())}const l=Vt();return _a.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:ga,ssr:l}),Object.assign({selfRef:e,handleWheel:n},{scrollTo(...o){var p;(p=e.value)===null||p===void 0||p.scrollTo(...o)}})},render(){return h("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});var ka=/\s/;function ja(e){for(var n=e.length;n--&&ka.test(e.charAt(n)););return n}var Aa=/^\s+/;function Wa(e){return e&&e.slice(0,ja(e)+1).replace(Aa,"")}var qe=NaN,Ea=/^[-+]0x[0-9a-f]+$/i,Ba=/^0b[01]+$/i,La=/^0o[0-7]+$/i,Ma=parseInt;function Ye(e){if(typeof e=="number")return e;if(Xt(e))return qe;if(ve(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=ve(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=Wa(e);var l=Ba.test(e);return l||La.test(e)?Ma(e.slice(2),l?2:8):Ea.test(e)?qe:+e}var Ce=function(){return Gt.Date.now()},Da="Expected a function",Ia=Math.max,Fa=Math.min;function Ha(e,n,l){var d,o,p,b,c,w,m=0,u=!1,_=!1,k=!0;if(typeof e!="function")throw new TypeError(Da);n=Ye(n)||0,ve(l)&&(u=!!l.leading,_="maxWait"in l,p=_?Ia(Ye(l.maxWait)||0,n):p,k="trailing"in l?!!l.trailing:k);function R(g){var L=d,$=o;return d=o=void 0,m=g,b=e.apply($,L),b}function z(g){return m=g,c=setTimeout(S,n),u?R(g):b}function y(g){var L=g-w,$=g-m,I=n-L;return _?Fa(I,p-$):I}function B(g){var L=g-w,$=g-m;return w===void 0||L>=n||L<0||_&&$>=p}function S(){var g=Ce();if(B(g))return T(g);c=setTimeout(S,y(g))}function T(g){return c=void 0,k&&d?R(g):(d=o=void 0,b)}function x(){c!==void 0&&clearTimeout(c),m=0,d=w=o=c=void 0}function M(){return c===void 0?b:T(Ce())}function C(){var g=Ce(),L=B(g);if(d=arguments,o=this,w=g,L){if(c===void 0)return z(w);if(_)return clearTimeout(c),c=setTimeout(S,n),R(w)}return c===void 0&&(c=setTimeout(S,n)),b}return C.cancel=x,C.flush=M,C}var Na="Expected a function";function Se(e,n,l){var d=!0,o=!0;if(typeof e!="function")throw new TypeError(Na);return ve(l)&&(d="leading"in l?!!l.leading:d,o="trailing"in l?!!l.trailing:o),Ha(e,n,{leading:d,maxWait:n,trailing:o})}const Pe=qt("n-tabs"),ot={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},Oa=Y({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:ot,slots:Object,setup(e){const n=Ze(Pe,null);return n||Yt("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:n.paneStyleRef,class:n.paneClassRef,mergedClsPrefix:n.mergedClsPrefixRef}},render(){return h("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),Ua=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},ea(ot,["displayDirective"])),ze=Y({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:Ua,setup(e){const{mergedClsPrefixRef:n,valueRef:l,typeRef:d,closableRef:o,tabStyleRef:p,addTabStyleRef:b,tabClassRef:c,addTabClassRef:w,tabChangeIdRef:m,onBeforeLeaveRef:u,triggerRef:_,handleAdd:k,activateTab:R,handleClose:z}=Ze(Pe);return{trigger:_,mergedClosable:ae(()=>{if(e.internalAddable)return!1;const{closable:y}=e;return y===void 0?o.value:y}),style:p,addStyle:b,tabClass:c,addTabClass:w,clsPrefix:n,value:l,type:d,handleClose(y){y.stopPropagation(),!e.disabled&&z(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){k();return}const{name:y}=e,B=++m.id;if(y!==l.value){const{value:S}=u;S?Promise.resolve(S(e.name,l.value)).then(T=>{T&&m.id===B&&R(y)}):R(y)}}}},render(){const{internalAddable:e,clsPrefix:n,name:l,disabled:d,label:o,tab:p,value:b,mergedClosable:c,trigger:w,$slots:{default:m}}=this,u=o??p;return h("div",{class:`${n}-tabs-tab-wrapper`},this.internalLeftPadded?h("div",{class:`${n}-tabs-tab-pad`}):null,h("div",Object.assign({key:l,"data-name":l,"data-disabled":d?!0:void 0},Kt({class:[`${n}-tabs-tab`,b===l&&`${n}-tabs-tab--active`,d&&`${n}-tabs-tab--disabled`,c&&`${n}-tabs-tab--closable`,e&&`${n}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:w==="click"?this.activateTab:void 0,onMouseenter:w==="hover"?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),h("span",{class:`${n}-tabs-tab__label`},e?h(ue,null,h("div",{class:`${n}-tabs-tab__height-placeholder`}," "),h(Jt,{clsPrefix:n},{default:()=>h(ha,null)})):m?m():typeof u=="object"?u:Qt(u??l)),c&&this.type==="card"?h(Zt,{clsPrefix:n,class:`${n}-tabs-tab__close`,onClick:this.handleClose,disabled:d}):null))}}),Va=r("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[f("segment-type",[r("tabs-rail",[W("&.transition-disabled",[r("tabs-capsule",`
 transition: none;
 `)])])]),f("top",[r("tab-pane",`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),f("left",[r("tab-pane",`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),f("left, right",`
 flex-direction: row;
 `,[r("tabs-bar",`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),r("tabs-tab",`
 padding: var(--n-tab-padding-vertical); 
 `)]),f("right",`
 flex-direction: row-reverse;
 `,[r("tab-pane",`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),r("tabs-bar",`
 left: 0;
 `)]),f("bottom",`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[r("tab-pane",`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),r("tabs-bar",`
 top: 0;
 `)]),r("tabs-rail",`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[r("tabs-capsule",`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),r("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[r("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[f("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),W("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),f("flex",[r("tabs-nav",`
 width: 100%;
 position: relative;
 `,[r("tabs-wrapper",`
 width: 100%;
 `,[r("tabs-tab",`
 margin-right: 0;
 `)])])]),r("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[D("prefix, suffix",`
 display: flex;
 align-items: center;
 `),D("prefix","padding-right: 16px;"),D("suffix","padding-left: 16px;")]),f("top, bottom",[r("tabs-nav-scroll-wrapper",[W("&::before",`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),W("&::after",`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),f("shadow-start",[W("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),f("shadow-end",[W("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])]),f("left, right",[r("tabs-nav-scroll-content",`
 flex-direction: column;
 `),r("tabs-nav-scroll-wrapper",[W("&::before",`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),W("&::after",`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),f("shadow-start",[W("&::before",`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),f("shadow-end",[W("&::after",`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])]),r("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[r("tabs-nav-y-scroll",`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[W("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `)]),W("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),r("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),r("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),r("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),r("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[f("disabled",{cursor:"not-allowed"}),D("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),D("label",`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),r("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[W("&.transition-disabled",`
 transition: none;
 `),f("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),r("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),r("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[W("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),W("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),W("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),W("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),W("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),r("tabs-tab-pad",`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),f("line-type, bar-type",[r("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[W("&:hover",{color:"var(--n-tab-text-color-hover)"}),f("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),f("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),r("tabs-nav",[f("line-type",[f("top",[D("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 bottom: -1px;
 `)]),f("left",[D("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 right: -1px;
 `)]),f("right",[D("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 left: -1px;
 `)]),f("bottom",[D("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 top: -1px;
 `)]),D("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-bar",`
 border-radius: 0;
 `)]),f("card-type",[D("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[f("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 justify-content: center;
 `,[D("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),ta("disabled",[W("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),f("closable","padding-right: 8px;"),f("active",`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),f("disabled","color: var(--n-tab-text-color-disabled);")])]),f("left, right",`
 flex-direction: column; 
 `,[D("prefix, suffix",`
 padding: var(--n-tab-padding-vertical);
 `),r("tabs-wrapper",`
 flex-direction: column;
 `),r("tabs-tab-wrapper",`
 flex-direction: column;
 `,[r("tabs-tab-pad",`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),f("top",[f("card-type",[r("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);"),D("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[f("active",`
 border-bottom: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),f("left",[f("card-type",[r("tabs-scroll-padding","border-right: 1px solid var(--n-tab-border-color);"),D("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[f("active",`
 border-right: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),f("right",[f("card-type",[r("tabs-scroll-padding","border-left: 1px solid var(--n-tab-border-color);"),D("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-tab",`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[f("active",`
 border-left: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),f("bottom",[f("card-type",[r("tabs-scroll-padding","border-top: 1px solid var(--n-tab-border-color);"),D("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-tab",`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[f("active",`
 border-top: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),Xa=Object.assign(Object.assign({},et.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),Ga=Y({name:"Tabs",props:Xa,slots:Object,setup(e,{slots:n}){var l,d,o,p;const{mergedClsPrefixRef:b,inlineThemeDisabled:c}=aa(e),w=et("Tabs","-tabs",Va,ia,e,b),m=E(null),u=E(null),_=E(null),k=E(null),R=E(null),z=E(null),y=E(!0),B=E(!0),S=Le(e,["labelSize","size"]),T=Le(e,["activeName","value"]),x=E((d=(l=T.value)!==null&&l!==void 0?l:e.defaultValue)!==null&&d!==void 0?d:n.default?(p=(o=ye(n.default())[0])===null||o===void 0?void 0:o.props)===null||p===void 0?void 0:p.name:null),M=Ra(T,x),C={id:0},g=ae(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});ne(M,()=>{C.id=0,le(),ke()});function L(){var t;const{value:a}=M;return a===null?null:(t=m.value)===null||t===void 0?void 0:t.querySelector(`[data-name="${a}"]`)}function $(t){if(e.type==="card")return;const{value:a}=u;if(!a)return;const s=a.style.opacity==="0";if(t){const v=`${b.value}-tabs-bar--disabled`,{barWidth:A,placement:F}=e;if(t.dataset.disabled==="true"?a.classList.add(v):a.classList.remove(v),["top","bottom"].includes(F)){if(V(["top","maxHeight","height"]),typeof A=="number"&&t.offsetWidth>=A){const H=Math.floor((t.offsetWidth-A)/2)+t.offsetLeft;a.style.left=`${H}px`,a.style.maxWidth=`${A}px`}else a.style.left=`${t.offsetLeft}px`,a.style.maxWidth=`${t.offsetWidth}px`;a.style.width="8192px",s&&(a.style.transition="none"),a.offsetWidth,s&&(a.style.transition="",a.style.opacity="1")}else{if(V(["left","maxWidth","width"]),typeof A=="number"&&t.offsetHeight>=A){const H=Math.floor((t.offsetHeight-A)/2)+t.offsetTop;a.style.top=`${H}px`,a.style.maxHeight=`${A}px`}else a.style.top=`${t.offsetTop}px`,a.style.maxHeight=`${t.offsetHeight}px`;a.style.height="8192px",s&&(a.style.transition="none"),a.offsetHeight,s&&(a.style.transition="",a.style.opacity="1")}}}function I(){if(e.type==="card")return;const{value:t}=u;t&&(t.style.opacity="0")}function V(t){const{value:a}=u;if(a)for(const s of t)a.style[s]=""}function le(){if(e.type==="card")return;const t=L();t?$(t):I()}function ke(){var t;const a=(t=R.value)===null||t===void 0?void 0:t.$el;if(!a)return;const s=L();if(!s)return;const{scrollLeft:v,offsetWidth:A}=a,{offsetLeft:F,offsetWidth:H}=s;v>F?a.scrollTo({top:0,left:F,behavior:"smooth"}):F+H>v+A&&a.scrollTo({top:0,left:F+H-A,behavior:"smooth"})}const de=E(null);let ge=0,X=null;function it(t){const a=de.value;if(a){ge=t.getBoundingClientRect().height;const s=`${ge}px`,v=()=>{a.style.height=s,a.style.maxHeight=s};X?(v(),X(),X=null):X=v}}function lt(t){const a=de.value;if(a){const s=t.getBoundingClientRect().height,v=()=>{document.body.offsetHeight,a.style.maxHeight=`${s}px`,a.style.height=`${Math.max(ge,s)}px`};X?(X(),X=null,v()):X=v}}function dt(){const t=de.value;if(t){t.style.maxHeight="",t.style.height="";const{paneWrapperStyle:a}=e;if(typeof a=="string")t.style.cssText=a;else if(a){const{maxHeight:s,height:v}=a;s!==void 0&&(t.style.maxHeight=s),v!==void 0&&(t.style.height=v)}}}const je={value:[]},Ae=E("next");function ct(t){const a=M.value;let s="next";for(const v of je.value){if(v===a)break;if(v===t){s="prev";break}}Ae.value=s,ft(t)}function ft(t){const{onActiveNameChange:a,onUpdateValue:s,"onUpdate:value":v}=e;a&&fe(a,t),s&&fe(s,t),v&&fe(v,t),x.value=t}function bt(t){const{onClose:a}=e;a&&fe(a,t)}function We(){const{value:t}=u;if(!t)return;const a="transition-disabled";t.classList.add(a),le(),t.classList.remove(a)}const K=E(null);function he({transitionDisabled:t}){const a=m.value;if(!a)return;t&&a.classList.add("transition-disabled");const s=L();s&&K.value&&(K.value.style.width=`${s.offsetWidth}px`,K.value.style.height=`${s.offsetHeight}px`,K.value.style.transform=`translateX(${s.offsetLeft-la(getComputedStyle(a).paddingLeft)}px)`,t&&K.value.offsetWidth),t&&a.classList.remove("transition-disabled")}ne([M],()=>{e.type==="segment"&&Te(()=>{he({transitionDisabled:!1})})}),na(()=>{e.type==="segment"&&he({transitionDisabled:!0})});let Ee=0;function ut(t){var a;if(t.contentRect.width===0&&t.contentRect.height===0||Ee===t.contentRect.width)return;Ee=t.contentRect.width;const{type:s}=e;if((s==="line"||s==="bar")&&We(),s!=="segment"){const{placement:v}=e;xe((v==="top"||v==="bottom"?(a=R.value)===null||a===void 0?void 0:a.$el:z.value)||null)}}const pt=Se(ut,64);ne([()=>e.justifyContent,()=>e.size],()=>{Te(()=>{const{type:t}=e;(t==="line"||t==="bar")&&We()})});const J=E(!1);function vt(t){var a;const{target:s,contentRect:{width:v,height:A}}=t,F=s.parentElement.parentElement.offsetWidth,H=s.parentElement.parentElement.offsetHeight,{placement:Z}=e;if(!J.value)Z==="top"||Z==="bottom"?F<v&&(J.value=!0):H<A&&(J.value=!0);else{const{value:oe}=k;if(!oe)return;Z==="top"||Z==="bottom"?F-v>oe.$el.offsetWidth&&(J.value=!1):H-A>oe.$el.offsetHeight&&(J.value=!1)}xe(((a=R.value)===null||a===void 0?void 0:a.$el)||null)}const mt=Se(vt,64);function gt(){const{onAdd:t}=e;t&&t(),Te(()=>{const a=L(),{value:s}=R;!a||!s||s.scrollTo({left:a.offsetLeft,top:0,behavior:"smooth"})})}function xe(t){if(!t)return;const{placement:a}=e;if(a==="top"||a==="bottom"){const{scrollLeft:s,scrollWidth:v,offsetWidth:A}=t;y.value=s<=0,B.value=s+A>=v}else{const{scrollTop:s,scrollHeight:v,offsetHeight:A}=t;y.value=s<=0,B.value=s+A>=v}}const ht=Se(t=>{xe(t.target)},64);ra(Pe,{triggerRef:N(e,"trigger"),tabStyleRef:N(e,"tabStyle"),tabClassRef:N(e,"tabClass"),addTabStyleRef:N(e,"addTabStyle"),addTabClassRef:N(e,"addTabClass"),paneClassRef:N(e,"paneClass"),paneStyleRef:N(e,"paneStyle"),mergedClsPrefixRef:b,typeRef:N(e,"type"),closableRef:N(e,"closable"),valueRef:M,tabChangeIdRef:C,onBeforeLeaveRef:N(e,"onBeforeLeave"),activateTab:ct,handleClose:bt,handleAdd:gt}),xa(()=>{le(),ke()}),oa(()=>{const{value:t}=_;if(!t)return;const{value:a}=b,s=`${a}-tabs-nav-scroll-wrapper--shadow-start`,v=`${a}-tabs-nav-scroll-wrapper--shadow-end`;y.value?t.classList.remove(s):t.classList.add(s),B.value?t.classList.remove(v):t.classList.add(v)});const xt={syncBarPosition:()=>{le()}},yt=()=>{he({transitionDisabled:!0})},Be=ae(()=>{const{value:t}=S,{type:a}=e,s={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[a],v=`${t}${s}`,{self:{barColor:A,closeIconColor:F,closeIconColorHover:H,closeIconColorPressed:Z,tabColor:oe,tabBorderColor:wt,paneTextColor:Tt,tabFontWeight:Ct,tabBorderRadius:St,tabFontWeightActive:$t,colorSegment:Rt,fontWeightStrong:zt,tabColorSegment:_t,closeSize:Pt,closeIconSize:kt,closeColorHover:jt,closeColorPressed:At,closeBorderRadius:Wt,[O("panePadding",t)]:ce,[O("tabPadding",v)]:Et,[O("tabPaddingVertical",v)]:Bt,[O("tabGap",v)]:Lt,[O("tabGap",`${v}Vertical`)]:Mt,[O("tabTextColor",a)]:Dt,[O("tabTextColorActive",a)]:It,[O("tabTextColorHover",a)]:Ft,[O("tabTextColorDisabled",a)]:Ht,[O("tabFontSize",t)]:Nt},common:{cubicBezierEaseInOut:Ot}}=w.value;return{"--n-bezier":Ot,"--n-color-segment":Rt,"--n-bar-color":A,"--n-tab-font-size":Nt,"--n-tab-text-color":Dt,"--n-tab-text-color-active":It,"--n-tab-text-color-disabled":Ht,"--n-tab-text-color-hover":Ft,"--n-pane-text-color":Tt,"--n-tab-border-color":wt,"--n-tab-border-radius":St,"--n-close-size":Pt,"--n-close-icon-size":kt,"--n-close-color-hover":jt,"--n-close-color-pressed":At,"--n-close-border-radius":Wt,"--n-close-icon-color":F,"--n-close-icon-color-hover":H,"--n-close-icon-color-pressed":Z,"--n-tab-color":oe,"--n-tab-font-weight":Ct,"--n-tab-font-weight-active":$t,"--n-tab-padding":Et,"--n-tab-padding-vertical":Bt,"--n-tab-gap":Lt,"--n-tab-gap-vertical":Mt,"--n-pane-padding-left":be(ce,"left"),"--n-pane-padding-right":be(ce,"right"),"--n-pane-padding-top":be(ce,"top"),"--n-pane-padding-bottom":be(ce,"bottom"),"--n-font-weight-strong":zt,"--n-tab-color-segment":_t}}),Q=c?sa("tabs",ae(()=>`${S.value[0]}${e.type[0]}`),Be,e):void 0;return Object.assign({mergedClsPrefix:b,mergedValue:M,renderedNames:new Set,segmentCapsuleElRef:K,tabsPaneWrapperRef:de,tabsElRef:m,barElRef:u,addTabInstRef:k,xScrollInstRef:R,scrollWrapperElRef:_,addTabFixed:J,tabWrapperStyle:g,handleNavResize:pt,mergedSize:S,handleScroll:ht,handleTabsResize:mt,cssVars:c?void 0:Be,themeClass:Q==null?void 0:Q.themeClass,animationDirection:Ae,renderNameListRef:je,yScrollElRef:z,handleSegmentResize:yt,onAnimationBeforeLeave:it,onAnimationEnter:lt,onAnimationAfterEnter:dt,onRender:Q==null?void 0:Q.onRender},xt)},render(){const{mergedClsPrefix:e,type:n,placement:l,addTabFixed:d,addable:o,mergedSize:p,renderNameListRef:b,onRender:c,paneWrapperClass:w,paneWrapperStyle:m,$slots:{default:u,prefix:_,suffix:k}}=this;c==null||c();const R=u?ye(u()).filter(C=>C.type.__TAB_PANE__===!0):[],z=u?ye(u()).filter(C=>C.type.__TAB__===!0):[],y=!z.length,B=n==="card",S=n==="segment",T=!B&&!S&&this.justifyContent;b.value=[];const x=()=>{const C=h("div",{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},T?null:h("div",{class:`${e}-tabs-scroll-padding`,style:l==="top"||l==="bottom"?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`}}),y?R.map((g,L)=>(b.value.push(g.props.name),$e(h(ze,Object.assign({},g.props,{internalCreatedByPane:!0,internalLeftPadded:L!==0&&(!T||T==="center"||T==="start"||T==="end")}),g.children?{default:g.children.tab}:void 0)))):z.map((g,L)=>(b.value.push(g.props.name),$e(L!==0&&!T?Qe(g):g))),!d&&o&&B?Je(o,(y?R.length:z.length)!==0):null,T?null:h("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return h("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},B&&o?h(we,{onResize:this.handleTabsResize},{default:()=>C}):C,B?h("div",{class:`${e}-tabs-pad`}):null,B?null:h("div",{ref:"barElRef",class:`${e}-tabs-bar`}))},M=S?"top":l;return h("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${n}-type`,`${e}-tabs--${p}-size`,T&&`${e}-tabs--flex`,`${e}-tabs--${M}`],style:this.cssVars},h("div",{class:[`${e}-tabs-nav--${n}-type`,`${e}-tabs-nav--${M}`,`${e}-tabs-nav`]},Me(_,C=>C&&h("div",{class:`${e}-tabs-nav__prefix`},C)),S?h(we,{onResize:this.handleSegmentResize},{default:()=>h("div",{class:`${e}-tabs-rail`,ref:"tabsElRef"},h("div",{class:`${e}-tabs-capsule`,ref:"segmentCapsuleElRef"},h("div",{class:`${e}-tabs-wrapper`},h("div",{class:`${e}-tabs-tab`}))),y?R.map((C,g)=>(b.value.push(C.props.name),h(ze,Object.assign({},C.props,{internalCreatedByPane:!0,internalLeftPadded:g!==0}),C.children?{default:C.children.tab}:void 0))):z.map((C,g)=>(b.value.push(C.props.name),g===0?C:Qe(C))))}):h(we,{onResize:this.handleNavResize},{default:()=>h("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(M)?h(Pa,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:x}):h("div",{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:"yScrollElRef"},x()))}),d&&o&&B?Je(o,!0):null,Me(k,C=>C&&h("div",{class:`${e}-tabs-nav__suffix`},C))),y&&(this.animated&&(M==="top"||M==="bottom")?h("div",{ref:"tabsPaneWrapperRef",style:m,class:[`${e}-tabs-pane-wrapper`,w]},Ke(R,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):Ke(R,this.mergedValue,this.renderedNames)))}});function Ke(e,n,l,d,o,p,b){const c=[];return e.forEach(w=>{const{name:m,displayDirective:u,"display-directive":_}=w.props,k=z=>u===z||_===z,R=n===m;if(w.key!==void 0&&(w.key=m),R||k("show")||k("show:lazy")&&l.has(m)){l.has(m)||l.add(m);const z=!k("if");c.push(z?da(w,[[ca,R]]):w)}}),b?h(fa,{name:`${b}-transition`,onBeforeLeave:d,onEnter:o,onAfterEnter:p},{default:()=>c}):c}function Je(e,n){return h(ze,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:n,disabled:typeof e=="object"&&e.disabled})}function Qe(e){const n=ba(e);return n.props?n.props.internalLeftPadded=!0:n.props={internalLeftPadded:!0},n}function $e(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}const qa={class:"flex flex-col items-end justify-end gap-1"},Ya={class:"flex flex-row items-center gap-2 w-full"},st=Y({__name:"time-range",props:{from:{default:"12:00 AM"},fromModifiers:{},to:{default:"12:00 AM"},toModifiers:{}},emits:["update:from","update:to"],setup(e){const n=me(e,"from"),l=me(e,"to"),d=ae(()=>{const o=De(n.value),p=De(l.value),[b,c]=pa(o,p);return ua(c-b)});return(o,p)=>(U(),ee("div",qa,[G("div",Ya,[P(i(Ge),{class:"flex-1","formatted-value":n.value,"onUpdate:formattedValue":p[0]||(p[0]=b=>n.value=b),format:i(Ie),minutes:[0,30],"use12-hours":""},null,8,["formatted-value","format"]),P(i(Fe),{depth:3,class:"text-nowrap"},{default:j(()=>p[2]||(p[2]=[q("to")])),_:1}),P(i(Ge),{class:"flex-1","formatted-value":l.value,"onUpdate:formattedValue":p[1]||(p[1]=b=>l.value=b),format:i(Ie),minutes:[0,30],"use12-hours":""},null,8,["formatted-value","format"])]),P(i(Fe),{depth:3,class:"text-xs"},{default:j(()=>[q("Total: "+_e(i(d)),1)]),_:1})]))}}),Ka={class:"flex flex-row items-center gap-2"},Ja={class:"flex flex-wrap gap-2 justify-between"},Qa={class:"flex flex-wrap gap-2"},Za=Y({__name:"timeslot",props:He({id:{}},{timeFrom:{default:"12:00 AM"},timeFromModifiers:{},timeTo:{default:"12:00 AM"},timeToModifiers:{}}),emits:He(["changeDay"],["update:timeFrom","update:timeTo"]),setup(e,{emit:n}){const l=e,d=rt(),o=tt(),p=me(e,"timeFrom"),b=me(e,"timeTo"),c=at(),w=c.getSubject(o.params.subject);if(!w)throw ie({statusCode:404,statusMessage:`Subject does not exist: ${o.params.subject}`});const m=c.getSection(w.code,o.params.section);if(!m)throw ie({statusCode:404,statusMessage:`Section does not exist: ${o.params.section}`});const u=c.getTimeslot(w.code,m.code,l.id);if(!u)throw ie({statusCode:404,statusMessage:"Time slot does not exist."});const _=n;function k(){d.warning({title:"Remove time slot",content:`Are you sure you want to remove the ${p.value} to ${b.value} timeslot from ${o.params.subject} - ${o.params.section}?`,positiveText:"Remove",negativeText:"Cancel",onPositiveClick(z){c.removeTimeslot(w.code,m.code,u.id)}})}function R(z){u.day=z,_("changeDay",z)}return(z,y)=>{const B=st;return U(),pe(i(Ta),{class:"w-full",dot:"",show:i(c).isTimeslotConflicted(i(w).code,i(m).code,i(u).id)},{default:j(()=>[P(i(nt),{class:va([{"opacity-50":!i(u).isEnabled},"transition-opacity"])},{default:j(()=>[G("div",Ka,[P(B,{from:p.value,"onUpdate:from":y[0]||(y[0]=S=>p.value=S),to:b.value,"onUpdate:to":y[1]||(y[1]=S=>b.value=S)},null,8,["from","to"])])]),action:j(()=>[G("div",Ja,[G("div",Qa,[P(i(ya),{trigger:"click",options:i(te).map(S=>({...S,show:S.key!==i(u).day})),onSelect:y[2]||(y[2]=S=>R(S))},{default:j(()=>[P(i(re),{tertiary:""},{default:j(()=>y[4]||(y[4]=[q(" Change day... ")])),_:1})]),_:1},8,["options"]),P(i(re),{onClick:y[3]||(y[3]=S=>i(u).isEnabled=!i(u).isEnabled),tertiary:""},{default:j(()=>[q(_e(i(u).isEnabled?"Disable":"Enable"),1)]),_:1})]),P(i(re),{onClick:k,type:"error",quaternary:"",circle:""},{icon:j(()=>[P(i(Re))]),_:1})])]),_:1},8,["class"])]),_:1},8,["show"])}}}),en={class:"w-full h-full flex flex-col items-start justify-start gap-10 p-10 overflow-y-scroll"},tn={class:"flex flex-row flex-wrap"},an={class:"flex flex-wrap w-full justify-between gap-2"},nn={class:"flex flex-wrap gap-2"},rn={class:"flex flex-col gap-2"},bn=Y({__name:"timeslots",setup(e){$a({title:"Time slots"});const n=tt(),l=rt(),d=E(te[0].key),o=E(!1),p=E("12:00 AM"),b=E("12:00 AM"),c=E(d.value),w=E(te[0].key),m=at(),u=m.getSubject(n.params.subject);if(!u)throw ie({statusCode:404,statusMessage:`Subject does not exist: ${n.params.subject}`});const _=m.getSection(u.code,n.params.section);if(!_)throw ie({statusCode:404,statusMessage:`Section does not exist: ${n.params.section}`});const k=ae(()=>m.getTimeslotsGroupedByDay(u.code,_.code));ne(w,T=>{d.value=T},{flush:"post"}),ne(d,T=>{c.value=T}),ne(k,()=>{if(k.value[d.value].length<=0)for(let{key:T}of te){let x=k.value[T];if(x.length>0){d.value=x[0].day;break}}},{immediate:!0,flush:"post"});function R(){let T=p.value,x=b.value,M=c.value;(()=>{m.addTimeslot(u.code,_.code,Date.now(),T,x,M),p.value="12:00 AM",b.value="12:00 AM",d.value=c.value,o.value=!1})()}function z(){Ve({name:"subjects-subject-sections",query:{s:n.query.s},params:{subject:n.params.subject}})}function y(){Ve({name:"subjects",query:{s:n.query.s}})}function B(){l.warning({title:"Clear all",content:`Are you sure you want to clear ALL timeslots in ${n.params.subject} - ${n.params.section}?`,positiveText:"Clear all",negativeText:"Cancel",onPositiveClick(T){m.clearTimeslot(u.code,_.code)}})}function S(){l.warning({title:"Clear all",content:`Are you sure you want to clear the ${Ue[d.value]} timeslots in ${n.params.subject} - ${n.params.section}?`,positiveText:"Clear all",negativeText:"Cancel",onPositiveClick(T){m.clearTimeslotInDay(u.code,_.code,d.value)}})}return(T,x)=>{const M=Ut,C=Za,g=st,L=Ca;return U(),ee("div",en,[P(i(nt),{"content-class":"min-h-[300px]"},{header:j(()=>[P(M,{title:"Time slots",onBack:x[0]||(x[0]=()=>z()),breadcrumbs:[{label:"Subjects",click:y},{label:(T._.provides[Ne]||T.$route).params.subject,click:()=>z()},{label:(T._.provides[Ne]||T.$route).params.section}]},null,8,["breadcrumbs"])]),default:j(()=>[i(m).isTimeslotsEmpty(i(u).code,i(_).code)?(U(),pe(i(za),{key:0,class:"h-full w-full flex items-center justify-center"})):(U(),pe(i(Ga),{key:1,type:"line",animated:"",value:i(d),"onUpdate:value":x[2]||(x[2]=$=>se(d)?d.value=$:null),class:"h-full w-full","pane-class":"h-full w-full","pane-wrapper-class":"h-full w-full"},{default:j(()=>[(U(!0),ee(ue,null,Oe(i(te),$=>(U(),ee(ue,null,[i(k)[$.key].length>0?(U(),pe(i(Oa),{name:$.key,tab:$.label,key:$.key},{default:j(()=>[G("div",tn,[(U(!0),ee(ue,null,Oe(i(k)[$.key],I=>(U(),ee("div",{key:I.id,class:"w-1/3 max-md:w-full max-xl:w-1/2 p-2"},[P(C,{id:I.id,"time-from":I.from,"onUpdate:timeFrom":V=>I.from=V,"time-to":I.to,"onUpdate:timeTo":V=>I.to=V,onChangeDay:x[1]||(x[1]=V=>w.value=V)},null,8,["id","time-from","onUpdate:timeFrom","time-to","onUpdate:timeTo"])]))),128))])]),_:2},1032,["name","tab"])):ma("",!0)],64))),256))]),_:1},8,["value"]))]),action:j(()=>[G("div",an,[P(i(re),{onClick:x[3]||(x[3]=$=>o.value=!0)},{icon:j(()=>[P(i(Sa))]),default:j(()=>[x[8]||(x[8]=q(" Add a time slot "))]),_:1}),G("div",nn,[P(i(re),{onClick:B,ghost:"",type:"error"},{icon:j(()=>[P(i(Re))]),default:j(()=>[x[9]||(x[9]=q(" Clear all "))]),_:1}),P(i(re),{onClick:S,ghost:"",type:"error"},{icon:j(()=>[P(i(Re))]),default:j(()=>[q(" Clear all in "+_e(i(Ue)[i(d)]),1)]),_:1})])])]),_:1}),P(L,{show:i(o),"onUpdate:show":x[7]||(x[7]=$=>se(o)?o.value=$:null),title:"Add a timeslot","positive-text":"Add","negative-text":"Nevermind",onPositiveClick:R},{default:j(()=>[G("div",rn,[P(g,{from:i(p),"onUpdate:from":x[4]||(x[4]=$=>se(p)?p.value=$:null),to:i(b),"onUpdate:to":x[5]||(x[5]=$=>se(b)?b.value=$:null)},null,8,["from","to"]),P(i(wa),{value:i(c),"onUpdate:value":x[6]||(x[6]=$=>se(c)?c.value=$:null),options:i(te).map($=>({label:$.label,value:$.key}))},null,8,["value","options"])])]),_:1},8,["show"])])}}});export{bn as default};
