import{_ as Ut}from"./CydwgXTo.js";import{d as Y,r as E,aN as Vt,h as x,aO as Xt,aP as ve,aQ as Gt,f as qt,z as Ze,aR as Yt,j as ae,a2 as Kt,V as ue,W as Jt,aS as Qt,aT as Zt,Q as ea,m as r,q as f,l as W,s as F,R as ta,g as aa,C as et,aU as Le,Z as ye,L as ne,aV as na,p as ra,t as N,T as oa,G as sa,I as Me,ac as we,aW as ia,k as fe,X as la,M as Te,F as O,aX as be,aY as da,aZ as ca,a_ as fa,a$ as ba,as as me,aA as Fe,ay as ua,o as U,c as ee,a as G,b as k,u as i,av as De,w as A,e as q,au as Ie,aL as Pe,aM as pa,az as He,aG as tt,aF as at,b0 as ie,at as pe,aw as nt,aI as va,b1 as te,B as re,aJ as se,b2 as Ne,aK as Oe,b3 as Ue,n as Ve,ar as ma}from"./DYb7Z_Wy.js";import{o as ga,q as Xe,A as ha,r as xa,k as Ge,i as ya,e as wa}from"./P6PxH_Ld.js";import{u as rt,G as Re,N as Ta,_ as Ca,I as Sa}from"./DSoBiAvg.js";import{u as $a}from"./CPr2AfzK.js";import{u as Ra,b as za}from"./Drx-gCDG.js";const Pa=Xe(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[Xe("&::-webkit-scrollbar",{width:0,height:0})]),ka=Y({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=E(null);function n(o){!(o.currentTarget.offsetWidth<o.currentTarget.scrollWidth)||o.deltaY===0||(o.currentTarget.scrollLeft+=o.deltaY+o.deltaX,o.preventDefault())}const l=Vt();return Pa.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:ga,ssr:l}),Object.assign({selfRef:e,handleWheel:n},{scrollTo(...o){var p;(p=e.value)===null||p===void 0||p.scrollTo(...o)}})},render(){return x("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});var ja=/\s/;function Aa(e){for(var n=e.length;n--&&ja.test(e.charAt(n)););return n}var _a=/^\s+/;function Wa(e){return e&&e.slice(0,Aa(e)+1).replace(_a,"")}var qe=NaN,Ea=/^[-+]0x[0-9a-f]+$/i,Ba=/^0b[01]+$/i,La=/^0o[0-7]+$/i,Ma=parseInt;function Ye(e){if(typeof e=="number")return e;if(Xt(e))return qe;if(ve(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=ve(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=Wa(e);var l=Ba.test(e);return l||La.test(e)?Ma(e.slice(2),l?2:8):Ea.test(e)?qe:+e}var Ce=function(){return Gt.Date.now()},Fa="Expected a function",Da=Math.max,Ia=Math.min;function Ha(e,n,l){var d,o,p,b,c,T,g=0,u=!1,P=!1,j=!0;if(typeof e!="function")throw new TypeError(Fa);n=Ye(n)||0,ve(l)&&(u=!!l.leading,P="maxWait"in l,p=P?Da(Ye(l.maxWait)||0,n):p,j="trailing"in l?!!l.trailing:j);function z(h){var L=d,$=o;return d=o=void 0,g=h,b=e.apply($,L),b}function R(h){return g=h,c=setTimeout(S,n),u?z(h):b}function w(h){var L=h-T,$=h-g,D=n-L;return P?Ia(D,p-$):D}function B(h){var L=h-T,$=h-g;return T===void 0||L>=n||L<0||P&&$>=p}function S(){var h=Ce();if(B(h))return m(h);c=setTimeout(S,w(h))}function m(h){return c=void 0,j&&d?z(h):(d=o=void 0,b)}function y(){c!==void 0&&clearTimeout(c),g=0,d=T=o=c=void 0}function M(){return c===void 0?b:m(Ce())}function C(){var h=Ce(),L=B(h);if(d=arguments,o=this,T=h,L){if(c===void 0)return R(T);if(P)return clearTimeout(c),c=setTimeout(S,n),z(T)}return c===void 0&&(c=setTimeout(S,n)),b}return C.cancel=y,C.flush=M,C}var Na="Expected a function";function Se(e,n,l){var d=!0,o=!0;if(typeof e!="function")throw new TypeError(Na);return ve(l)&&(d="leading"in l?!!l.leading:d,o="trailing"in l?!!l.trailing:o),Ha(e,n,{leading:d,maxWait:n,trailing:o})}const ke=qt("n-tabs"),ot={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},Oa=Y({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:ot,slots:Object,setup(e){const n=Ze(ke,null);return n||Yt("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:n.paneStyleRef,class:n.paneClassRef,mergedClsPrefix:n.mergedClsPrefixRef}},render(){return x("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),Ua=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},ea(ot,["displayDirective"])),ze=Y({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:Ua,setup(e){const{mergedClsPrefixRef:n,valueRef:l,typeRef:d,closableRef:o,tabStyleRef:p,addTabStyleRef:b,tabClassRef:c,addTabClassRef:T,tabChangeIdRef:g,onBeforeLeaveRef:u,triggerRef:P,handleAdd:j,activateTab:z,handleClose:R}=Ze(ke);return{trigger:P,mergedClosable:ae(()=>{if(e.internalAddable)return!1;const{closable:w}=e;return w===void 0?o.value:w}),style:p,addStyle:b,tabClass:c,addTabClass:T,clsPrefix:n,value:l,type:d,handleClose(w){w.stopPropagation(),!e.disabled&&R(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){j();return}const{name:w}=e,B=++g.id;if(w!==l.value){const{value:S}=u;S?Promise.resolve(S(e.name,l.value)).then(m=>{m&&g.id===B&&z(w)}):z(w)}}}},render(){const{internalAddable:e,clsPrefix:n,name:l,disabled:d,label:o,tab:p,value:b,mergedClosable:c,trigger:T,$slots:{default:g}}=this,u=o??p;return x("div",{class:`${n}-tabs-tab-wrapper`},this.internalLeftPadded?x("div",{class:`${n}-tabs-tab-pad`}):null,x("div",Object.assign({key:l,"data-name":l,"data-disabled":d?!0:void 0},Kt({class:[`${n}-tabs-tab`,b===l&&`${n}-tabs-tab--active`,d&&`${n}-tabs-tab--disabled`,c&&`${n}-tabs-tab--closable`,e&&`${n}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:T==="click"?this.activateTab:void 0,onMouseenter:T==="hover"?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),x("span",{class:`${n}-tabs-tab__label`},e?x(ue,null,x("div",{class:`${n}-tabs-tab__height-placeholder`}," "),x(Jt,{clsPrefix:n},{default:()=>x(ha,null)})):g?g():typeof u=="object"?u:Qt(u??l)),c&&this.type==="card"?x(Zt,{clsPrefix:n,class:`${n}-tabs-tab__close`,onClick:this.handleClose,disabled:d}):null))}}),Va=r("tabs",`
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
 `,[F("prefix, suffix",`
 display: flex;
 align-items: center;
 `),F("prefix","padding-right: 16px;"),F("suffix","padding-left: 16px;")]),f("top, bottom",[r("tabs-nav-scroll-wrapper",[W("&::before",`
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
 `,[f("disabled",{cursor:"not-allowed"}),F("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),F("label",`
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
 `),f("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),r("tabs-nav",[f("line-type",[f("top",[F("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 bottom: -1px;
 `)]),f("left",[F("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 right: -1px;
 `)]),f("right",[F("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 left: -1px;
 `)]),f("bottom",[F("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 top: -1px;
 `)]),F("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-bar",`
 border-radius: 0;
 `)]),f("card-type",[F("prefix, suffix",`
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
 `,[F("height-placeholder",`
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
 `,[F("prefix, suffix",`
 padding: var(--n-tab-padding-vertical);
 `),r("tabs-wrapper",`
 flex-direction: column;
 `),r("tabs-tab-wrapper",`
 flex-direction: column;
 `,[r("tabs-tab-pad",`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),f("top",[f("card-type",[r("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);"),F("prefix, suffix",`
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
 `)])]),f("left",[f("card-type",[r("tabs-scroll-padding","border-right: 1px solid var(--n-tab-border-color);"),F("prefix, suffix",`
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
 `)])]),f("right",[f("card-type",[r("tabs-scroll-padding","border-left: 1px solid var(--n-tab-border-color);"),F("prefix, suffix",`
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
 `)])]),f("bottom",[f("card-type",[r("tabs-scroll-padding","border-top: 1px solid var(--n-tab-border-color);"),F("prefix, suffix",`
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
 `)])])])]),Xa=Object.assign(Object.assign({},et.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),Ga=Y({name:"Tabs",props:Xa,slots:Object,setup(e,{slots:n}){var l,d,o,p;const{mergedClsPrefixRef:b,inlineThemeDisabled:c}=aa(e),T=et("Tabs","-tabs",Va,ia,e,b),g=E(null),u=E(null),P=E(null),j=E(null),z=E(null),R=E(null),w=E(!0),B=E(!0),S=Le(e,["labelSize","size"]),m=Le(e,["activeName","value"]),y=E((d=(l=m.value)!==null&&l!==void 0?l:e.defaultValue)!==null&&d!==void 0?d:n.default?(p=(o=ye(n.default())[0])===null||o===void 0?void 0:o.props)===null||p===void 0?void 0:p.name:null),M=Ra(m,y),C={id:0},h=ae(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});ne(M,()=>{C.id=0,le(),je()});function L(){var t;const{value:a}=M;return a===null?null:(t=g.value)===null||t===void 0?void 0:t.querySelector(`[data-name="${a}"]`)}function $(t){if(e.type==="card")return;const{value:a}=u;if(!a)return;const s=a.style.opacity==="0";if(t){const v=`${b.value}-tabs-bar--disabled`,{barWidth:_,placement:I}=e;if(t.dataset.disabled==="true"?a.classList.add(v):a.classList.remove(v),["top","bottom"].includes(I)){if(V(["top","maxHeight","height"]),typeof _=="number"&&t.offsetWidth>=_){const H=Math.floor((t.offsetWidth-_)/2)+t.offsetLeft;a.style.left=`${H}px`,a.style.maxWidth=`${_}px`}else a.style.left=`${t.offsetLeft}px`,a.style.maxWidth=`${t.offsetWidth}px`;a.style.width="8192px",s&&(a.style.transition="none"),a.offsetWidth,s&&(a.style.transition="",a.style.opacity="1")}else{if(V(["left","maxWidth","width"]),typeof _=="number"&&t.offsetHeight>=_){const H=Math.floor((t.offsetHeight-_)/2)+t.offsetTop;a.style.top=`${H}px`,a.style.maxHeight=`${_}px`}else a.style.top=`${t.offsetTop}px`,a.style.maxHeight=`${t.offsetHeight}px`;a.style.height="8192px",s&&(a.style.transition="none"),a.offsetHeight,s&&(a.style.transition="",a.style.opacity="1")}}}function D(){if(e.type==="card")return;const{value:t}=u;t&&(t.style.opacity="0")}function V(t){const{value:a}=u;if(a)for(const s of t)a.style[s]=""}function le(){if(e.type==="card")return;const t=L();t?$(t):D()}function je(){var t;const a=(t=z.value)===null||t===void 0?void 0:t.$el;if(!a)return;const s=L();if(!s)return;const{scrollLeft:v,offsetWidth:_}=a,{offsetLeft:I,offsetWidth:H}=s;v>I?a.scrollTo({top:0,left:I,behavior:"smooth"}):I+H>v+_&&a.scrollTo({top:0,left:I+H-_,behavior:"smooth"})}const de=E(null);let ge=0,X=null;function it(t){const a=de.value;if(a){ge=t.getBoundingClientRect().height;const s=`${ge}px`,v=()=>{a.style.height=s,a.style.maxHeight=s};X?(v(),X(),X=null):X=v}}function lt(t){const a=de.value;if(a){const s=t.getBoundingClientRect().height,v=()=>{document.body.offsetHeight,a.style.maxHeight=`${s}px`,a.style.height=`${Math.max(ge,s)}px`};X?(X(),X=null,v()):X=v}}function dt(){const t=de.value;if(t){t.style.maxHeight="",t.style.height="";const{paneWrapperStyle:a}=e;if(typeof a=="string")t.style.cssText=a;else if(a){const{maxHeight:s,height:v}=a;s!==void 0&&(t.style.maxHeight=s),v!==void 0&&(t.style.height=v)}}}const Ae={value:[]},_e=E("next");function ct(t){const a=M.value;let s="next";for(const v of Ae.value){if(v===a)break;if(v===t){s="prev";break}}_e.value=s,ft(t)}function ft(t){const{onActiveNameChange:a,onUpdateValue:s,"onUpdate:value":v}=e;a&&fe(a,t),s&&fe(s,t),v&&fe(v,t),y.value=t}function bt(t){const{onClose:a}=e;a&&fe(a,t)}function We(){const{value:t}=u;if(!t)return;const a="transition-disabled";t.classList.add(a),le(),t.classList.remove(a)}const K=E(null);function he({transitionDisabled:t}){const a=g.value;if(!a)return;t&&a.classList.add("transition-disabled");const s=L();s&&K.value&&(K.value.style.width=`${s.offsetWidth}px`,K.value.style.height=`${s.offsetHeight}px`,K.value.style.transform=`translateX(${s.offsetLeft-la(getComputedStyle(a).paddingLeft)}px)`,t&&K.value.offsetWidth),t&&a.classList.remove("transition-disabled")}ne([M],()=>{e.type==="segment"&&Te(()=>{he({transitionDisabled:!1})})}),na(()=>{e.type==="segment"&&he({transitionDisabled:!0})});let Ee=0;function ut(t){var a;if(t.contentRect.width===0&&t.contentRect.height===0||Ee===t.contentRect.width)return;Ee=t.contentRect.width;const{type:s}=e;if((s==="line"||s==="bar")&&We(),s!=="segment"){const{placement:v}=e;xe((v==="top"||v==="bottom"?(a=z.value)===null||a===void 0?void 0:a.$el:R.value)||null)}}const pt=Se(ut,64);ne([()=>e.justifyContent,()=>e.size],()=>{Te(()=>{const{type:t}=e;(t==="line"||t==="bar")&&We()})});const J=E(!1);function vt(t){var a;const{target:s,contentRect:{width:v,height:_}}=t,I=s.parentElement.parentElement.offsetWidth,H=s.parentElement.parentElement.offsetHeight,{placement:Z}=e;if(!J.value)Z==="top"||Z==="bottom"?I<v&&(J.value=!0):H<_&&(J.value=!0);else{const{value:oe}=j;if(!oe)return;Z==="top"||Z==="bottom"?I-v>oe.$el.offsetWidth&&(J.value=!1):H-_>oe.$el.offsetHeight&&(J.value=!1)}xe(((a=z.value)===null||a===void 0?void 0:a.$el)||null)}const mt=Se(vt,64);function gt(){const{onAdd:t}=e;t&&t(),Te(()=>{const a=L(),{value:s}=z;!a||!s||s.scrollTo({left:a.offsetLeft,top:0,behavior:"smooth"})})}function xe(t){if(!t)return;const{placement:a}=e;if(a==="top"||a==="bottom"){const{scrollLeft:s,scrollWidth:v,offsetWidth:_}=t;w.value=s<=0,B.value=s+_>=v}else{const{scrollTop:s,scrollHeight:v,offsetHeight:_}=t;w.value=s<=0,B.value=s+_>=v}}const ht=Se(t=>{xe(t.target)},64);ra(ke,{triggerRef:N(e,"trigger"),tabStyleRef:N(e,"tabStyle"),tabClassRef:N(e,"tabClass"),addTabStyleRef:N(e,"addTabStyle"),addTabClassRef:N(e,"addTabClass"),paneClassRef:N(e,"paneClass"),paneStyleRef:N(e,"paneStyle"),mergedClsPrefixRef:b,typeRef:N(e,"type"),closableRef:N(e,"closable"),valueRef:M,tabChangeIdRef:C,onBeforeLeaveRef:N(e,"onBeforeLeave"),activateTab:ct,handleClose:bt,handleAdd:gt}),xa(()=>{le(),je()}),oa(()=>{const{value:t}=P;if(!t)return;const{value:a}=b,s=`${a}-tabs-nav-scroll-wrapper--shadow-start`,v=`${a}-tabs-nav-scroll-wrapper--shadow-end`;w.value?t.classList.remove(s):t.classList.add(s),B.value?t.classList.remove(v):t.classList.add(v)});const xt={syncBarPosition:()=>{le()}},yt=()=>{he({transitionDisabled:!0})},Be=ae(()=>{const{value:t}=S,{type:a}=e,s={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[a],v=`${t}${s}`,{self:{barColor:_,closeIconColor:I,closeIconColorHover:H,closeIconColorPressed:Z,tabColor:oe,tabBorderColor:wt,paneTextColor:Tt,tabFontWeight:Ct,tabBorderRadius:St,tabFontWeightActive:$t,colorSegment:Rt,fontWeightStrong:zt,tabColorSegment:Pt,closeSize:kt,closeIconSize:jt,closeColorHover:At,closeColorPressed:_t,closeBorderRadius:Wt,[O("panePadding",t)]:ce,[O("tabPadding",v)]:Et,[O("tabPaddingVertical",v)]:Bt,[O("tabGap",v)]:Lt,[O("tabGap",`${v}Vertical`)]:Mt,[O("tabTextColor",a)]:Ft,[O("tabTextColorActive",a)]:Dt,[O("tabTextColorHover",a)]:It,[O("tabTextColorDisabled",a)]:Ht,[O("tabFontSize",t)]:Nt},common:{cubicBezierEaseInOut:Ot}}=T.value;return{"--n-bezier":Ot,"--n-color-segment":Rt,"--n-bar-color":_,"--n-tab-font-size":Nt,"--n-tab-text-color":Ft,"--n-tab-text-color-active":Dt,"--n-tab-text-color-disabled":Ht,"--n-tab-text-color-hover":It,"--n-pane-text-color":Tt,"--n-tab-border-color":wt,"--n-tab-border-radius":St,"--n-close-size":kt,"--n-close-icon-size":jt,"--n-close-color-hover":At,"--n-close-color-pressed":_t,"--n-close-border-radius":Wt,"--n-close-icon-color":I,"--n-close-icon-color-hover":H,"--n-close-icon-color-pressed":Z,"--n-tab-color":oe,"--n-tab-font-weight":Ct,"--n-tab-font-weight-active":$t,"--n-tab-padding":Et,"--n-tab-padding-vertical":Bt,"--n-tab-gap":Lt,"--n-tab-gap-vertical":Mt,"--n-pane-padding-left":be(ce,"left"),"--n-pane-padding-right":be(ce,"right"),"--n-pane-padding-top":be(ce,"top"),"--n-pane-padding-bottom":be(ce,"bottom"),"--n-font-weight-strong":zt,"--n-tab-color-segment":Pt}}),Q=c?sa("tabs",ae(()=>`${S.value[0]}${e.type[0]}`),Be,e):void 0;return Object.assign({mergedClsPrefix:b,mergedValue:M,renderedNames:new Set,segmentCapsuleElRef:K,tabsPaneWrapperRef:de,tabsElRef:g,barElRef:u,addTabInstRef:j,xScrollInstRef:z,scrollWrapperElRef:P,addTabFixed:J,tabWrapperStyle:h,handleNavResize:pt,mergedSize:S,handleScroll:ht,handleTabsResize:mt,cssVars:c?void 0:Be,themeClass:Q==null?void 0:Q.themeClass,animationDirection:_e,renderNameListRef:Ae,yScrollElRef:R,handleSegmentResize:yt,onAnimationBeforeLeave:it,onAnimationEnter:lt,onAnimationAfterEnter:dt,onRender:Q==null?void 0:Q.onRender},xt)},render(){const{mergedClsPrefix:e,type:n,placement:l,addTabFixed:d,addable:o,mergedSize:p,renderNameListRef:b,onRender:c,paneWrapperClass:T,paneWrapperStyle:g,$slots:{default:u,prefix:P,suffix:j}}=this;c==null||c();const z=u?ye(u()).filter(C=>C.type.__TAB_PANE__===!0):[],R=u?ye(u()).filter(C=>C.type.__TAB__===!0):[],w=!R.length,B=n==="card",S=n==="segment",m=!B&&!S&&this.justifyContent;b.value=[];const y=()=>{const C=x("div",{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},m?null:x("div",{class:`${e}-tabs-scroll-padding`,style:l==="top"||l==="bottom"?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`}}),w?z.map((h,L)=>(b.value.push(h.props.name),$e(x(ze,Object.assign({},h.props,{internalCreatedByPane:!0,internalLeftPadded:L!==0&&(!m||m==="center"||m==="start"||m==="end")}),h.children?{default:h.children.tab}:void 0)))):R.map((h,L)=>(b.value.push(h.props.name),$e(L!==0&&!m?Qe(h):h))),!d&&o&&B?Je(o,(w?z.length:R.length)!==0):null,m?null:x("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return x("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},B&&o?x(we,{onResize:this.handleTabsResize},{default:()=>C}):C,B?x("div",{class:`${e}-tabs-pad`}):null,B?null:x("div",{ref:"barElRef",class:`${e}-tabs-bar`}))},M=S?"top":l;return x("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${n}-type`,`${e}-tabs--${p}-size`,m&&`${e}-tabs--flex`,`${e}-tabs--${M}`],style:this.cssVars},x("div",{class:[`${e}-tabs-nav--${n}-type`,`${e}-tabs-nav--${M}`,`${e}-tabs-nav`]},Me(P,C=>C&&x("div",{class:`${e}-tabs-nav__prefix`},C)),S?x(we,{onResize:this.handleSegmentResize},{default:()=>x("div",{class:`${e}-tabs-rail`,ref:"tabsElRef"},x("div",{class:`${e}-tabs-capsule`,ref:"segmentCapsuleElRef"},x("div",{class:`${e}-tabs-wrapper`},x("div",{class:`${e}-tabs-tab`}))),w?z.map((C,h)=>(b.value.push(C.props.name),x(ze,Object.assign({},C.props,{internalCreatedByPane:!0,internalLeftPadded:h!==0}),C.children?{default:C.children.tab}:void 0))):R.map((C,h)=>(b.value.push(C.props.name),h===0?C:Qe(C))))}):x(we,{onResize:this.handleNavResize},{default:()=>x("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(M)?x(ka,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:y}):x("div",{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:"yScrollElRef"},y()))}),d&&o&&B?Je(o,!0):null,Me(j,C=>C&&x("div",{class:`${e}-tabs-nav__suffix`},C))),w&&(this.animated&&(M==="top"||M==="bottom")?x("div",{ref:"tabsPaneWrapperRef",style:g,class:[`${e}-tabs-pane-wrapper`,T]},Ke(z,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):Ke(z,this.mergedValue,this.renderedNames)))}});function Ke(e,n,l,d,o,p,b){const c=[];return e.forEach(T=>{const{name:g,displayDirective:u,"display-directive":P}=T.props,j=R=>u===R||P===R,z=n===g;if(T.key!==void 0&&(T.key=g),z||j("show")||j("show:lazy")&&l.has(g)){l.has(g)||l.add(g);const R=!j("if");c.push(R?da(T,[[ca,z]]):T)}}),b?x(fa,{name:`${b}-transition`,onBeforeLeave:d,onEnter:o,onAfterEnter:p},{default:()=>c}):c}function Je(e,n){return x(ze,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:n,disabled:typeof e=="object"&&e.disabled})}function Qe(e){const n=ba(e);return n.props?n.props.internalLeftPadded=!0:n.props={internalLeftPadded:!0},n}function $e(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}const qa={class:"flex flex-col items-end justify-end gap-1"},Ya={class:"flex flex-row items-center gap-2 w-full"},st=Y({__name:"time-range",props:{from:{default:"12:00 AM"},fromModifiers:{},to:{default:"12:00 AM"},toModifiers:{}},emits:["update:from","update:to"],setup(e){const n=me(e,"from"),l=me(e,"to"),d=ae(()=>{const o=Fe(n.value),p=Fe(l.value),[b,c]=pa(o,p);return ua(c-b)});return(o,p)=>(U(),ee("div",qa,[G("div",Ya,[k(i(Ge),{class:"flex-1","formatted-value":n.value,"onUpdate:formattedValue":p[0]||(p[0]=b=>n.value=b),format:"defaultTimeFormat"in o?o.defaultTimeFormat:i(De),minutes:[0,30],"use12-hours":""},null,8,["formatted-value","format"]),k(i(Ie),{depth:3,class:"text-nowrap"},{default:A(()=>p[2]||(p[2]=[q("to")])),_:1}),k(i(Ge),{class:"flex-1","formatted-value":l.value,"onUpdate:formattedValue":p[1]||(p[1]=b=>l.value=b),format:"defaultTimeFormat"in o?o.defaultTimeFormat:i(De),minutes:[0,30],"use12-hours":""},null,8,["formatted-value","format"])]),k(i(Ie),{depth:3,class:"text-xs"},{default:A(()=>[q("Total: "+Pe(i(d)),1)]),_:1})]))}}),Ka={class:"flex flex-row items-center gap-2"},Ja={class:"flex flex-wrap gap-2 justify-between"},Qa={class:"flex flex-wrap gap-2"},Za=Y({__name:"timeslot",props:He({id:{}},{timeFrom:{default:"12:00 AM"},timeFromModifiers:{},timeTo:{default:"12:00 AM"},timeToModifiers:{}}),emits:He(["changeDay"],["update:timeFrom","update:timeTo"]),setup(e,{emit:n}){const l=e,d=rt(),o=tt(),p=me(e,"timeFrom"),b=me(e,"timeTo"),c=at(),T=c.getSubject(o.params.subject);if(!T)throw ie({statusCode:404,statusMessage:`Subject does not exist: ${o.params.subject}`});const g=c.getSection(T.code,o.params.section);if(!g)throw ie({statusCode:404,statusMessage:`Section does not exist: ${o.params.section}`});const u=c.getTimeslot(T.code,g.code,l.id);if(!u)throw ie({statusCode:404,statusMessage:"Time slot does not exist."});const P=n;function j(){d.warning({title:"Remove time slot",content:`Are you sure you want to remove the ${p.value} to ${b.value} timeslot from ${o.params.subject} - ${o.params.section}?`,positiveText:"Remove",negativeText:"Cancel",onPositiveClick(R){c.removeTimeslot(T.code,g.code,u.id)}})}function z(R){u.day=R,P("changeDay",R)}return(R,w)=>{const B=st;return U(),pe(i(Ta),{class:"w-full",dot:"",show:i(c).isTimeslotConflicted(i(T).code,i(g).code,i(u).id)},{default:A(()=>[k(i(nt),{class:va([{"opacity-50":!i(u).isEnabled},"transition-opacity"])},{default:A(()=>[G("div",Ka,[k(B,{from:p.value,"onUpdate:from":w[0]||(w[0]=S=>p.value=S),to:b.value,"onUpdate:to":w[1]||(w[1]=S=>b.value=S)},null,8,["from","to"])])]),action:A(()=>[G("div",Ja,[G("div",Qa,[k(i(ya),{trigger:"click",options:("days"in R?R.days:i(te)).map(S=>({...S,show:S.key!==i(u).day})),onSelect:w[2]||(w[2]=S=>z(S))},{default:A(()=>[k(i(re),{tertiary:""},{default:A(()=>w[4]||(w[4]=[q(" Change day... ")])),_:1})]),_:1},8,["options"]),k(i(re),{onClick:w[3]||(w[3]=S=>i(u).isEnabled=!i(u).isEnabled),tertiary:""},{default:A(()=>[q(Pe(i(u).isEnabled?"Disable":"Enable"),1)]),_:1})]),k(i(re),{onClick:j,type:"error",quaternary:"",circle:""},{icon:A(()=>[k(i(Re))]),_:1})])]),_:1},8,["class"])]),_:1},8,["show"])}}}),en={class:"w-full h-full flex flex-col items-start justify-start gap-10 p-10 overflow-y-scroll"},tn={class:"flex flex-row flex-wrap"},an={class:"flex flex-wrap w-full justify-between gap-2"},nn={class:"flex flex-wrap gap-2"},rn={class:"flex flex-col gap-2"},bn=Y({__name:"timeslots",setup(e){$a({title:"Time slots"});const n=tt(),l=rt(),d=E(te[0].key),o=E(!1),p=E("12:00 AM"),b=E("12:00 AM"),c=E(d.value),T=E(te[0].key),g=at(),u=g.getSubject(n.params.subject);if(!u)throw ie({statusCode:404,statusMessage:`Subject does not exist: ${n.params.subject}`});const P=g.getSection(u.code,n.params.section);if(!P)throw ie({statusCode:404,statusMessage:`Section does not exist: ${n.params.section}`});const j=ae(()=>g.getTimeslotsGroupedByDay(u.code,P.code));ne(T,m=>{d.value=m},{flush:"post"}),ne(d,m=>{c.value=m}),ne(j,()=>{if(j.value[d.value].length<=0)for(let{key:m}of te){let y=j.value[m];if(y.length>0){d.value=y[0].day;break}}},{immediate:!0,flush:"post"});function z(){let m=p.value,y=b.value,M=c.value;(()=>{g.addTimeslot(u.code,P.code,Date.now(),m,y,M),p.value="12:00 AM",b.value="12:00 AM",d.value=c.value,o.value=!1})()}function R(){Ve({name:"subjects-subject-sections",query:{s:n.query.s},params:{subject:n.params.subject}})}function w(){Ve({name:"subjects",query:{s:n.query.s}})}function B(){l.warning({title:"Clear all",content:`Are you sure you want to clear ALL timeslots in ${n.params.subject} - ${n.params.section}?`,positiveText:"Clear all",negativeText:"Cancel",onPositiveClick(m){g.clearTimeslot(u.code,P.code)}})}function S(){l.warning({title:"Clear all",content:`Are you sure you want to clear the ${Ue[d.value]} timeslots in ${n.params.subject} - ${n.params.section}?`,positiveText:"Clear all",negativeText:"Cancel",onPositiveClick(m){g.clearTimeslotInDay(u.code,P.code,d.value)}})}return(m,y)=>{const M=Ut,C=Za,h=st,L=Ca;return U(),ee("div",en,[k(i(nt),{"content-class":"min-h-[300px]"},{header:A(()=>[k(M,{title:"Time slots",onBack:y[0]||(y[0]=()=>R()),breadcrumbs:[{label:"Subjects",click:w},{label:(m._.provides[Ne]||m.$route).params.subject,click:()=>R()},{label:(m._.provides[Ne]||m.$route).params.section}]},null,8,["breadcrumbs"])]),default:A(()=>[i(g).isTimeslotsEmpty(i(u).code,i(P).code)?(U(),pe(i(za),{key:0,class:"h-full w-full flex items-center justify-center"})):(U(),pe(i(Ga),{key:1,type:"line",animated:"",value:i(d),"onUpdate:value":y[2]||(y[2]=$=>se(d)?d.value=$:null),class:"h-full w-full","pane-class":"h-full w-full","pane-wrapper-class":"h-full w-full"},{default:A(()=>[(U(!0),ee(ue,null,Oe("days"in m?m.days:i(te),$=>(U(),ee(ue,null,[i(j)[$.key].length>0?(U(),pe(i(Oa),{name:$.key,tab:$.label,key:$.key},{default:A(()=>[G("div",tn,[(U(!0),ee(ue,null,Oe(i(j)[$.key],D=>(U(),ee("div",{key:D.id,class:"w-1/3 max-md:w-full max-xl:w-1/2 p-2"},[k(C,{id:D.id,"time-from":D.from,"onUpdate:timeFrom":V=>D.from=V,"time-to":D.to,"onUpdate:timeTo":V=>D.to=V,onChangeDay:y[1]||(y[1]=V=>T.value=V)},null,8,["id","time-from","onUpdate:timeFrom","time-to","onUpdate:timeTo"])]))),128))])]),_:2},1032,["name","tab"])):ma("",!0)],64))),256))]),_:1},8,["value"]))]),action:A(()=>[G("div",an,[k(i(re),{onClick:y[3]||(y[3]=$=>o.value=!0)},{icon:A(()=>[k(i(Sa))]),default:A(()=>[y[8]||(y[8]=q(" Add a time slot "))]),_:1}),G("div",nn,[k(i(re),{onClick:B,ghost:"",type:"error"},{icon:A(()=>[k(i(Re))]),default:A(()=>[y[9]||(y[9]=q(" Clear all "))]),_:1}),k(i(re),{onClick:S,ghost:"",type:"error"},{icon:A(()=>[k(i(Re))]),default:A(()=>[q(" Clear all in "+Pe(("daysMap"in m?m.daysMap:i(Ue))[i(d)]),1)]),_:1})])])]),_:1}),k(L,{show:i(o),"onUpdate:show":y[7]||(y[7]=$=>se(o)?o.value=$:null),title:"Add a timeslot","positive-text":"Add","negative-text":"Nevermind",onPositiveClick:z},{default:A(()=>[G("div",rn,[k(h,{from:i(p),"onUpdate:from":y[4]||(y[4]=$=>se(p)?p.value=$:null),to:i(b),"onUpdate:to":y[5]||(y[5]=$=>se(b)?b.value=$:null)},null,8,["from","to"]),k(i(wa),{value:i(c),"onUpdate:value":y[6]||(y[6]=$=>se(c)?c.value=$:null),options:("days"in m?m.days:i(te)).map($=>({label:$.label,value:$.key}))},null,8,["value","options"])])]),_:1},8,["show"])])}}});export{bn as default};
