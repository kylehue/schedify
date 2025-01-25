import{d as K,r as W,g as Ot,h,i as Ut,j as ve,k as Vt,l as Xt,m as Ze,t as Gt,p as ne,q as qt,F as le,N as Yt,s as Kt,v as Jt,x as Qt,y as r,z as f,A,C as D,D as Zt,E as ea,G as et,H as Le,I as ye,J as re,K as ta,L as aa,M as O,O as na,P as ra,Q as Me,V as we,R as oa,S as be,T as sa,U as Te,W as U,X as ue,Y as ia,Z as la,_ as da,$ as ca,a0 as me,a1 as De,a2 as fa,o as V,c as te,a as q,e as k,b as i,a3 as Ie,w as E,f as Y,a4 as Fe,a5 as _e,a6 as ba,a7 as Ne,a8 as tt,a9 as at,aa as de,ab as pe,ac as ua,ad as pa,ae,B as oe,u as va,af as He,ag as ie,n as Oe,ah as Ue,ai as Ve,aj as ma}from"./BLQ00e9F.js";import{c as ga,a as Xe,A as ha,o as xa,N as Ge,b as ya,d as wa}from"./D-mic6t0.js";import{u as nt,G as Re,N as Ta,I as Ca}from"./Dohc5GIr.js";import{_ as Sa,a as $a,N as Ra}from"./7pwkaAgh.js";import{u as za}from"./D3s9aJN3.js";import"./B-p6aW7q.js";const _a=Xe(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[Xe("&::-webkit-scrollbar",{width:0,height:0})]),Pa=K({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=W(null);function n(o){!(o.currentTarget.offsetWidth<o.currentTarget.scrollWidth)||o.deltaY===0||(o.currentTarget.scrollLeft+=o.deltaY+o.deltaX,o.preventDefault())}const l=Ot();return _a.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:ga,ssr:l}),Object.assign({selfRef:e,handleWheel:n},{scrollTo(...o){var p;(p=e.value)===null||p===void 0||p.scrollTo(...o)}})},render(){return h("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});var ka=/\s/;function ja(e){for(var n=e.length;n--&&ka.test(e.charAt(n)););return n}var Aa=/^\s+/;function Wa(e){return e&&e.slice(0,ja(e)+1).replace(Aa,"")}var qe=NaN,Ea=/^[-+]0x[0-9a-f]+$/i,Ba=/^0b[01]+$/i,La=/^0o[0-7]+$/i,Ma=parseInt;function Ye(e){if(typeof e=="number")return e;if(Ut(e))return qe;if(ve(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=ve(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=Wa(e);var l=Ba.test(e);return l||La.test(e)?Ma(e.slice(2),l?2:8):Ea.test(e)?qe:+e}var Ce=function(){return Vt.Date.now()},Da="Expected a function",Ia=Math.max,Fa=Math.min;function Na(e,n,l){var d,o,p,b,c,w,m=0,u=!1,z=!1,_=!0;if(typeof e!="function")throw new TypeError(Da);n=Ye(n)||0,ve(l)&&(u=!!l.leading,z="maxWait"in l,p=z?Ia(Ye(l.maxWait)||0,n):p,_="trailing"in l?!!l.trailing:_);function $(g){var L=d,P=o;return d=o=void 0,m=g,b=e.apply(P,L),b}function R(g){return m=g,c=setTimeout(S,n),u?$(g):b}function y(g){var L=g-w,P=g-m,I=n-L;return z?Fa(I,p-P):I}function B(g){var L=g-w,P=g-m;return w===void 0||L>=n||L<0||z&&P>=p}function S(){var g=Ce();if(B(g))return T(g);c=setTimeout(S,y(g))}function T(g){return c=void 0,_&&d?$(g):(d=o=void 0,b)}function x(){c!==void 0&&clearTimeout(c),m=0,d=w=o=c=void 0}function M(){return c===void 0?b:T(Ce())}function C(){var g=Ce(),L=B(g);if(d=arguments,o=this,w=g,L){if(c===void 0)return R(w);if(z)return clearTimeout(c),c=setTimeout(S,n),$(w)}return c===void 0&&(c=setTimeout(S,n)),b}return C.cancel=x,C.flush=M,C}var Ha="Expected a function";function Se(e,n,l){var d=!0,o=!0;if(typeof e!="function")throw new TypeError(Ha);return ve(l)&&(d="leading"in l?!!l.leading:d,o="trailing"in l?!!l.trailing:o),Na(e,n,{leading:d,maxWait:n,trailing:o})}const Pe=Xt("n-tabs"),rt={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},Oa=K({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:rt,slots:Object,setup(e){const n=Ze(Pe,null);return n||Gt("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:n.paneStyleRef,class:n.paneClassRef,mergedClsPrefix:n.mergedClsPrefixRef}},render(){return h("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),Ua=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},Qt(rt,["displayDirective"])),ze=K({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:Ua,setup(e){const{mergedClsPrefixRef:n,valueRef:l,typeRef:d,closableRef:o,tabStyleRef:p,addTabStyleRef:b,tabClassRef:c,addTabClassRef:w,tabChangeIdRef:m,onBeforeLeaveRef:u,triggerRef:z,handleAdd:_,activateTab:$,handleClose:R}=Ze(Pe);return{trigger:z,mergedClosable:ne(()=>{if(e.internalAddable)return!1;const{closable:y}=e;return y===void 0?o.value:y}),style:p,addStyle:b,tabClass:c,addTabClass:w,clsPrefix:n,value:l,type:d,handleClose(y){y.stopPropagation(),!e.disabled&&R(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){_();return}const{name:y}=e,B=++m.id;if(y!==l.value){const{value:S}=u;S?Promise.resolve(S(e.name,l.value)).then(T=>{T&&m.id===B&&$(y)}):$(y)}}}},render(){const{internalAddable:e,clsPrefix:n,name:l,disabled:d,label:o,tab:p,value:b,mergedClosable:c,trigger:w,$slots:{default:m}}=this,u=o??p;return h("div",{class:`${n}-tabs-tab-wrapper`},this.internalLeftPadded?h("div",{class:`${n}-tabs-tab-pad`}):null,h("div",Object.assign({key:l,"data-name":l,"data-disabled":d?!0:void 0},qt({class:[`${n}-tabs-tab`,b===l&&`${n}-tabs-tab--active`,d&&`${n}-tabs-tab--disabled`,c&&`${n}-tabs-tab--closable`,e&&`${n}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:w==="click"?this.activateTab:void 0,onMouseenter:w==="hover"?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),h("span",{class:`${n}-tabs-tab__label`},e?h(le,null,h("div",{class:`${n}-tabs-tab__height-placeholder`}," "),h(Yt,{clsPrefix:n},{default:()=>h(ha,null)})):m?m():typeof u=="object"?u:Kt(u??l)),c&&this.type==="card"?h(Jt,{clsPrefix:n,class:`${n}-tabs-tab__close`,onClick:this.handleClose,disabled:d}):null))}}),Va=r("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[f("segment-type",[r("tabs-rail",[A("&.transition-disabled",[r("tabs-capsule",`
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
 `),A("&:hover",`
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
 `),D("prefix","padding-right: 16px;"),D("suffix","padding-left: 16px;")]),f("top, bottom",[r("tabs-nav-scroll-wrapper",[A("&::before",`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),A("&::after",`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),f("shadow-start",[A("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),f("shadow-end",[A("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])]),f("left, right",[r("tabs-nav-scroll-content",`
 flex-direction: column;
 `),r("tabs-nav-scroll-wrapper",[A("&::before",`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),A("&::after",`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),f("shadow-start",[A("&::before",`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),f("shadow-end",[A("&::after",`
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
 `,[A("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `)]),A("&::before, &::after",`
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
 `,[A("&.transition-disabled",`
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
 `,[A("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),A("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),A("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),A("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),A("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
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
 `,[A("&:hover",{color:"var(--n-tab-text-color-hover)"}),f("active",`
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
 `),Zt("disabled",[A("&:hover",`
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
 `)])])])]),Xa=Object.assign(Object.assign({},et.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),Ga=K({name:"Tabs",props:Xa,slots:Object,setup(e,{slots:n}){var l,d,o,p;const{mergedClsPrefixRef:b,inlineThemeDisabled:c}=ea(e),w=et("Tabs","-tabs",Va,oa,e,b),m=W(null),u=W(null),z=W(null),_=W(null),$=W(null),R=W(null),y=W(!0),B=W(!0),S=Le(e,["labelSize","size"]),T=Le(e,["activeName","value"]),x=W((d=(l=T.value)!==null&&l!==void 0?l:e.defaultValue)!==null&&d!==void 0?d:n.default?(p=(o=ye(n.default())[0])===null||o===void 0?void 0:o.props)===null||p===void 0?void 0:p.name:null),M=za(T,x),C={id:0},g=ne(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});re(M,()=>{C.id=0,H(),ke()});function L(){var t;const{value:a}=M;return a===null?null:(t=m.value)===null||t===void 0?void 0:t.querySelector(`[data-name="${a}"]`)}function P(t){if(e.type==="card")return;const{value:a}=u;if(!a)return;const s=a.style.opacity==="0";if(t){const v=`${b.value}-tabs-bar--disabled`,{barWidth:j,placement:F}=e;if(t.dataset.disabled==="true"?a.classList.add(v):a.classList.remove(v),["top","bottom"].includes(F)){if(X(["top","maxHeight","height"]),typeof j=="number"&&t.offsetWidth>=j){const N=Math.floor((t.offsetWidth-j)/2)+t.offsetLeft;a.style.left=`${N}px`,a.style.maxWidth=`${j}px`}else a.style.left=`${t.offsetLeft}px`,a.style.maxWidth=`${t.offsetWidth}px`;a.style.width="8192px",s&&(a.style.transition="none"),a.offsetWidth,s&&(a.style.transition="",a.style.opacity="1")}else{if(X(["left","maxWidth","width"]),typeof j=="number"&&t.offsetHeight>=j){const N=Math.floor((t.offsetHeight-j)/2)+t.offsetTop;a.style.top=`${N}px`,a.style.maxHeight=`${j}px`}else a.style.top=`${t.offsetTop}px`,a.style.maxHeight=`${t.offsetHeight}px`;a.style.height="8192px",s&&(a.style.transition="none"),a.offsetHeight,s&&(a.style.transition="",a.style.opacity="1")}}}function I(){if(e.type==="card")return;const{value:t}=u;t&&(t.style.opacity="0")}function X(t){const{value:a}=u;if(a)for(const s of t)a.style[s]=""}function H(){if(e.type==="card")return;const t=L();t?P(t):I()}function ke(){var t;const a=(t=$.value)===null||t===void 0?void 0:t.$el;if(!a)return;const s=L();if(!s)return;const{scrollLeft:v,offsetWidth:j}=a,{offsetLeft:F,offsetWidth:N}=s;v>F?a.scrollTo({top:0,left:F,behavior:"smooth"}):F+N>v+j&&a.scrollTo({top:0,left:F+N-j,behavior:"smooth"})}const ce=W(null);let ge=0,G=null;function st(t){const a=ce.value;if(a){ge=t.getBoundingClientRect().height;const s=`${ge}px`,v=()=>{a.style.height=s,a.style.maxHeight=s};G?(v(),G(),G=null):G=v}}function it(t){const a=ce.value;if(a){const s=t.getBoundingClientRect().height,v=()=>{document.body.offsetHeight,a.style.maxHeight=`${s}px`,a.style.height=`${Math.max(ge,s)}px`};G?(G(),G=null,v()):G=v}}function lt(){const t=ce.value;if(t){t.style.maxHeight="",t.style.height="";const{paneWrapperStyle:a}=e;if(typeof a=="string")t.style.cssText=a;else if(a){const{maxHeight:s,height:v}=a;s!==void 0&&(t.style.maxHeight=s),v!==void 0&&(t.style.height=v)}}}const je={value:[]},Ae=W("next");function dt(t){const a=M.value;let s="next";for(const v of je.value){if(v===a)break;if(v===t){s="prev";break}}Ae.value=s,ct(t)}function ct(t){const{onActiveNameChange:a,onUpdateValue:s,"onUpdate:value":v}=e;a&&be(a,t),s&&be(s,t),v&&be(v,t),x.value=t}function ft(t){const{onClose:a}=e;a&&be(a,t)}function We(){const{value:t}=u;if(!t)return;const a="transition-disabled";t.classList.add(a),H(),t.classList.remove(a)}const J=W(null);function he({transitionDisabled:t}){const a=m.value;if(!a)return;t&&a.classList.add("transition-disabled");const s=L();s&&J.value&&(J.value.style.width=`${s.offsetWidth}px`,J.value.style.height=`${s.offsetHeight}px`,J.value.style.transform=`translateX(${s.offsetLeft-sa(getComputedStyle(a).paddingLeft)}px)`,t&&J.value.offsetWidth),t&&a.classList.remove("transition-disabled")}re([M],()=>{e.type==="segment"&&Te(()=>{he({transitionDisabled:!1})})}),ta(()=>{e.type==="segment"&&he({transitionDisabled:!0})});let Ee=0;function bt(t){var a;if(t.contentRect.width===0&&t.contentRect.height===0||Ee===t.contentRect.width)return;Ee=t.contentRect.width;const{type:s}=e;if((s==="line"||s==="bar")&&We(),s!=="segment"){const{placement:v}=e;xe((v==="top"||v==="bottom"?(a=$.value)===null||a===void 0?void 0:a.$el:R.value)||null)}}const ut=Se(bt,64);re([()=>e.justifyContent,()=>e.size],()=>{Te(()=>{const{type:t}=e;(t==="line"||t==="bar")&&We()})});const Q=W(!1);function pt(t){var a;const{target:s,contentRect:{width:v,height:j}}=t,F=s.parentElement.parentElement.offsetWidth,N=s.parentElement.parentElement.offsetHeight,{placement:ee}=e;if(!Q.value)ee==="top"||ee==="bottom"?F<v&&(Q.value=!0):N<j&&(Q.value=!0);else{const{value:se}=_;if(!se)return;ee==="top"||ee==="bottom"?F-v>se.$el.offsetWidth&&(Q.value=!1):N-j>se.$el.offsetHeight&&(Q.value=!1)}xe(((a=$.value)===null||a===void 0?void 0:a.$el)||null)}const vt=Se(pt,64);function mt(){const{onAdd:t}=e;t&&t(),Te(()=>{const a=L(),{value:s}=$;!a||!s||s.scrollTo({left:a.offsetLeft,top:0,behavior:"smooth"})})}function xe(t){if(!t)return;const{placement:a}=e;if(a==="top"||a==="bottom"){const{scrollLeft:s,scrollWidth:v,offsetWidth:j}=t;y.value=s<=0,B.value=s+j>=v}else{const{scrollTop:s,scrollHeight:v,offsetHeight:j}=t;y.value=s<=0,B.value=s+j>=v}}const gt=Se(t=>{xe(t.target)},64);aa(Pe,{triggerRef:O(e,"trigger"),tabStyleRef:O(e,"tabStyle"),tabClassRef:O(e,"tabClass"),addTabStyleRef:O(e,"addTabStyle"),addTabClassRef:O(e,"addTabClass"),paneClassRef:O(e,"paneClass"),paneStyleRef:O(e,"paneStyle"),mergedClsPrefixRef:b,typeRef:O(e,"type"),closableRef:O(e,"closable"),valueRef:M,tabChangeIdRef:C,onBeforeLeaveRef:O(e,"onBeforeLeave"),activateTab:dt,handleClose:ft,handleAdd:mt}),xa(()=>{H(),ke()}),na(()=>{const{value:t}=z;if(!t)return;const{value:a}=b,s=`${a}-tabs-nav-scroll-wrapper--shadow-start`,v=`${a}-tabs-nav-scroll-wrapper--shadow-end`;y.value?t.classList.remove(s):t.classList.add(s),B.value?t.classList.remove(v):t.classList.add(v)});const ht={syncBarPosition:()=>{H()}},xt=()=>{he({transitionDisabled:!0})},Be=ne(()=>{const{value:t}=S,{type:a}=e,s={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[a],v=`${t}${s}`,{self:{barColor:j,closeIconColor:F,closeIconColorHover:N,closeIconColorPressed:ee,tabColor:se,tabBorderColor:yt,paneTextColor:wt,tabFontWeight:Tt,tabBorderRadius:Ct,tabFontWeightActive:St,colorSegment:$t,fontWeightStrong:Rt,tabColorSegment:zt,closeSize:_t,closeIconSize:Pt,closeColorHover:kt,closeColorPressed:jt,closeBorderRadius:At,[U("panePadding",t)]:fe,[U("tabPadding",v)]:Wt,[U("tabPaddingVertical",v)]:Et,[U("tabGap",v)]:Bt,[U("tabGap",`${v}Vertical`)]:Lt,[U("tabTextColor",a)]:Mt,[U("tabTextColorActive",a)]:Dt,[U("tabTextColorHover",a)]:It,[U("tabTextColorDisabled",a)]:Ft,[U("tabFontSize",t)]:Nt},common:{cubicBezierEaseInOut:Ht}}=w.value;return{"--n-bezier":Ht,"--n-color-segment":$t,"--n-bar-color":j,"--n-tab-font-size":Nt,"--n-tab-text-color":Mt,"--n-tab-text-color-active":Dt,"--n-tab-text-color-disabled":Ft,"--n-tab-text-color-hover":It,"--n-pane-text-color":wt,"--n-tab-border-color":yt,"--n-tab-border-radius":Ct,"--n-close-size":_t,"--n-close-icon-size":Pt,"--n-close-color-hover":kt,"--n-close-color-pressed":jt,"--n-close-border-radius":At,"--n-close-icon-color":F,"--n-close-icon-color-hover":N,"--n-close-icon-color-pressed":ee,"--n-tab-color":se,"--n-tab-font-weight":Tt,"--n-tab-font-weight-active":St,"--n-tab-padding":Wt,"--n-tab-padding-vertical":Et,"--n-tab-gap":Bt,"--n-tab-gap-vertical":Lt,"--n-pane-padding-left":ue(fe,"left"),"--n-pane-padding-right":ue(fe,"right"),"--n-pane-padding-top":ue(fe,"top"),"--n-pane-padding-bottom":ue(fe,"bottom"),"--n-font-weight-strong":Rt,"--n-tab-color-segment":zt}}),Z=c?ra("tabs",ne(()=>`${S.value[0]}${e.type[0]}`),Be,e):void 0;return Object.assign({mergedClsPrefix:b,mergedValue:M,renderedNames:new Set,segmentCapsuleElRef:J,tabsPaneWrapperRef:ce,tabsElRef:m,barElRef:u,addTabInstRef:_,xScrollInstRef:$,scrollWrapperElRef:z,addTabFixed:Q,tabWrapperStyle:g,handleNavResize:ut,mergedSize:S,handleScroll:gt,handleTabsResize:vt,cssVars:c?void 0:Be,themeClass:Z==null?void 0:Z.themeClass,animationDirection:Ae,renderNameListRef:je,yScrollElRef:R,handleSegmentResize:xt,onAnimationBeforeLeave:st,onAnimationEnter:it,onAnimationAfterEnter:lt,onRender:Z==null?void 0:Z.onRender},ht)},render(){const{mergedClsPrefix:e,type:n,placement:l,addTabFixed:d,addable:o,mergedSize:p,renderNameListRef:b,onRender:c,paneWrapperClass:w,paneWrapperStyle:m,$slots:{default:u,prefix:z,suffix:_}}=this;c==null||c();const $=u?ye(u()).filter(C=>C.type.__TAB_PANE__===!0):[],R=u?ye(u()).filter(C=>C.type.__TAB__===!0):[],y=!R.length,B=n==="card",S=n==="segment",T=!B&&!S&&this.justifyContent;b.value=[];const x=()=>{const C=h("div",{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},T?null:h("div",{class:`${e}-tabs-scroll-padding`,style:l==="top"||l==="bottom"?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`}}),y?$.map((g,L)=>(b.value.push(g.props.name),$e(h(ze,Object.assign({},g.props,{internalCreatedByPane:!0,internalLeftPadded:L!==0&&(!T||T==="center"||T==="start"||T==="end")}),g.children?{default:g.children.tab}:void 0)))):R.map((g,L)=>(b.value.push(g.props.name),$e(L!==0&&!T?Qe(g):g))),!d&&o&&B?Je(o,(y?$.length:R.length)!==0):null,T?null:h("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return h("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},B&&o?h(we,{onResize:this.handleTabsResize},{default:()=>C}):C,B?h("div",{class:`${e}-tabs-pad`}):null,B?null:h("div",{ref:"barElRef",class:`${e}-tabs-bar`}))},M=S?"top":l;return h("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${n}-type`,`${e}-tabs--${p}-size`,T&&`${e}-tabs--flex`,`${e}-tabs--${M}`],style:this.cssVars},h("div",{class:[`${e}-tabs-nav--${n}-type`,`${e}-tabs-nav--${M}`,`${e}-tabs-nav`]},Me(z,C=>C&&h("div",{class:`${e}-tabs-nav__prefix`},C)),S?h(we,{onResize:this.handleSegmentResize},{default:()=>h("div",{class:`${e}-tabs-rail`,ref:"tabsElRef"},h("div",{class:`${e}-tabs-capsule`,ref:"segmentCapsuleElRef"},h("div",{class:`${e}-tabs-wrapper`},h("div",{class:`${e}-tabs-tab`}))),y?$.map((C,g)=>(b.value.push(C.props.name),h(ze,Object.assign({},C.props,{internalCreatedByPane:!0,internalLeftPadded:g!==0}),C.children?{default:C.children.tab}:void 0))):R.map((C,g)=>(b.value.push(C.props.name),g===0?C:Qe(C))))}):h(we,{onResize:this.handleNavResize},{default:()=>h("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(M)?h(Pa,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:x}):h("div",{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:"yScrollElRef"},x()))}),d&&o&&B?Je(o,!0):null,Me(_,C=>C&&h("div",{class:`${e}-tabs-nav__suffix`},C))),y&&(this.animated&&(M==="top"||M==="bottom")?h("div",{ref:"tabsPaneWrapperRef",style:m,class:[`${e}-tabs-pane-wrapper`,w]},Ke($,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):Ke($,this.mergedValue,this.renderedNames)))}});function Ke(e,n,l,d,o,p,b){const c=[];return e.forEach(w=>{const{name:m,displayDirective:u,"display-directive":z}=w.props,_=R=>u===R||z===R,$=n===m;if(w.key!==void 0&&(w.key=m),$||_("show")||_("show:lazy")&&l.has(m)){l.has(m)||l.add(m);const R=!_("if");c.push(R?ia(w,[[la,$]]):w)}}),b?h(da,{name:`${b}-transition`,onBeforeLeave:d,onEnter:o,onAfterEnter:p},{default:()=>c}):c}function Je(e,n){return h(ze,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:n,disabled:typeof e=="object"&&e.disabled})}function Qe(e){const n=ca(e);return n.props?n.props.internalLeftPadded=!0:n.props={internalLeftPadded:!0},n}function $e(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}const qa={class:"flex flex-col items-end justify-end gap-1"},Ya={class:"flex flex-row items-center gap-2 w-full"},ot=K({__name:"time-range",props:{from:{default:"12:00 AM"},fromModifiers:{},to:{default:"12:00 AM"},toModifiers:{}},emits:["update:from","update:to"],setup(e){const n=me(e,"from"),l=me(e,"to"),d=ne(()=>{const o=De(n.value),p=De(l.value),[b,c]=ba(o,p);return fa(c-b)});return(o,p)=>(V(),te("div",qa,[q("div",Ya,[k(i(Ge),{class:"flex-1","formatted-value":n.value,"onUpdate:formattedValue":p[0]||(p[0]=b=>n.value=b),format:i(Ie),minutes:[0,30],"use12-hours":""},null,8,["formatted-value","format"]),k(i(Fe),{depth:3,class:"text-nowrap"},{default:E(()=>p[2]||(p[2]=[Y("to")])),_:1}),k(i(Ge),{class:"flex-1","formatted-value":l.value,"onUpdate:formattedValue":p[1]||(p[1]=b=>l.value=b),format:i(Ie),minutes:[0,30],"use12-hours":""},null,8,["formatted-value","format"])]),k(i(Fe),{depth:3,class:"text-xs"},{default:E(()=>[Y("Total: "+_e(i(d)),1)]),_:1})]))}}),Ka={class:"flex flex-row items-center gap-2"},Ja={class:"flex flex-wrap gap-2 justify-between"},Qa={class:"flex flex-wrap gap-2"},Za=K({__name:"timeslot",props:Ne({id:{}},{timeFrom:{default:"12:00 AM"},timeFromModifiers:{},timeTo:{default:"12:00 AM"},timeToModifiers:{}}),emits:Ne(["changeDay"],["update:timeFrom","update:timeTo"]),setup(e,{emit:n}){const l=e,d=nt(),o=tt(),p=me(e,"timeFrom"),b=me(e,"timeTo"),c=at(),w=c.getSubject(o.params.subject);if(!w)throw de({statusCode:404,statusMessage:`Subject does not exist: ${o.params.subject}`});const m=c.getSection(w.code,o.params.section);if(!m)throw de({statusCode:404,statusMessage:`Section does not exist: ${o.params.section}`});const u=c.getTimeslot(w.code,m.code,l.id);if(!u)throw de({statusCode:404,statusMessage:"Time slot does not exist."});const z=n;function _(){d.warning({title:"Remove time slot",content:`Are you sure you want to remove the ${p.value} to ${b.value} timeslot from ${o.params.subject} - ${o.params.section}?`,positiveText:"Remove",negativeText:"Cancel",onPositiveClick(R){c.removeTimeslot(w.code,m.code,u.id)}})}function $(R){u.day=R,z("changeDay",R)}return(R,y)=>{const B=ot;return V(),pe(i(Ta),{class:"w-full",dot:"",show:i(c).isTimeslotConflicted(i(w).code,i(m).code,i(u).id)},{default:E(()=>[k(i(ua),{class:pa([{"opacity-50":!i(u).isEnabled},"transition-opacity"])},{default:E(()=>[q("div",Ka,[k(B,{from:p.value,"onUpdate:from":y[0]||(y[0]=S=>p.value=S),to:b.value,"onUpdate:to":y[1]||(y[1]=S=>b.value=S)},null,8,["from","to"])])]),action:E(()=>[q("div",Ja,[q("div",Qa,[k(i(ya),{trigger:"click",options:i(ae).map(S=>({...S,show:S.key!==i(u).day})),onSelect:y[2]||(y[2]=S=>$(S))},{default:E(()=>[k(i(oe),{tertiary:""},{default:E(()=>y[4]||(y[4]=[Y(" Change day... ")])),_:1})]),_:1},8,["options"]),k(i(oe),{onClick:y[3]||(y[3]=S=>i(u).isEnabled=!i(u).isEnabled),tertiary:""},{default:E(()=>[Y(_e(i(u).isEnabled?"Disable":"Enable"),1)]),_:1})]),k(i(oe),{onClick:_,type:"error",quaternary:"",circle:""},{icon:E(()=>[k(i(Re))]),_:1})])]),_:1},8,["class"])]),_:1},8,["show"])}}}),en={class:"flex flex-wrap w-full justify-between gap-2"},tn={class:"flex h-full justify-center"},an={class:"flex flex-row flex-wrap"},nn={class:"flex flex-col gap-2"},fn=K({__name:"timeslots",setup(e){va({title:"Time slots"});const n=tt(),l=nt(),d=W(ae[0].key),o=W(!1),p=W("12:00 AM"),b=W("12:00 AM"),c=W(d.value),w=W(ae[0].key),m=at(),u=m.getSubject(n.params.subject);if(!u)throw de({statusCode:404,statusMessage:`Subject does not exist: ${n.params.subject}`});const z=m.getSection(u.code,n.params.section);if(!z)throw de({statusCode:404,statusMessage:`Section does not exist: ${n.params.section}`});const _=ne(()=>m.getTimeslotsGroupedByDay(u.code,z.code));re(w,T=>{d.value=T},{flush:"post"}),re(d,T=>{c.value=T}),re(_,()=>{if(_.value[d.value].length<=0)for(let{key:T}of ae){let x=_.value[T];if(x.length>0){d.value=x[0].day;break}}},{immediate:!0,flush:"post"});function $(){let T=p.value,x=b.value,M=c.value;(()=>{m.addTimeslot(u.code,z.code,Date.now(),T,x,M),p.value="12:00 AM",b.value="12:00 AM",d.value=c.value,o.value=!1})()}function R(){Oe({name:"subjects-subject-sections",query:{s:n.query.s},params:{subject:n.params.subject}})}function y(){Oe({name:"subjects",query:{s:n.query.s}})}function B(){l.warning({title:"Clear all",content:`Are you sure you want to clear ALL timeslots in ${n.params.subject} - ${n.params.section}?`,positiveText:"Clear all",negativeText:"Cancel",onPositiveClick(T){m.clearTimeslot(u.code,z.code)}})}function S(){l.warning({title:"Clear all",content:`Are you sure you want to clear the ${Ue[d.value]} timeslots in ${n.params.subject} - ${n.params.section}?`,positiveText:"Clear all",negativeText:"Cancel",onPositiveClick(T){m.clearTimeslotInDay(u.code,z.code,d.value)}})}return(T,x)=>{const M=Za,C=Sa,g=ot,L=$a;return V(),te(le,null,[k(C,{name:"app",title:"Time slots",onBack:x[3]||(x[3]=()=>R()),breadcrumbs:[{label:"Subjects",click:y},{label:(T._.provides[He]||T.$route).params.subject,click:()=>R()},{label:(T._.provides[He]||T.$route).params.section}]},{"header-extra":E(()=>[q("div",en,[k(i(oe),{class:"flex-1",onClick:x[0]||(x[0]=P=>o.value=!0)},{icon:E(()=>[k(i(Ca))]),default:E(()=>[x[8]||(x[8]=Y(" Add a time slot "))]),_:1}),k(i(oe),{class:"flex-1",onClick:S,ghost:"",type:"error"},{icon:E(()=>[k(i(Re))]),default:E(()=>[Y(" Clear all in "+_e(i(Ue)[i(d)]),1)]),_:1}),k(i(oe),{class:"flex-1",onClick:B,ghost:"",type:"error"},{icon:E(()=>[k(i(Re))]),default:E(()=>[x[9]||(x[9]=Y(" Clear all "))]),_:1})])]),default:E(()=>{var P;return[q("div",tn,[(P=i(m).getSection(i(u).code,i(z).code))!=null&&P.timeslots.size?(V(),pe(i(Ga),{key:1,type:"line",animated:"",value:i(d),"onUpdate:value":x[2]||(x[2]=I=>ie(d)?d.value=I:null),class:"container h-fit w-full","pane-class":"h-fit w-full","pane-wrapper-class":"h-fit w-full pb-8"},{default:E(()=>[(V(!0),te(le,null,Ve(i(ae),I=>(V(),te(le,null,[i(_)[I.key].length>0?(V(),pe(i(Oa),{name:I.key,tab:I.label,key:I.key},{default:E(()=>[q("div",an,[(V(!0),te(le,null,Ve(i(_)[I.key],X=>(V(),te("div",{key:X.id,class:"w-1/3 max-md:w-full max-xl:w-1/2 p-2"},[k(M,{id:X.id,"time-from":X.from,"onUpdate:timeFrom":H=>X.from=H,"time-to":X.to,"onUpdate:timeTo":H=>X.to=H,onChangeDay:x[1]||(x[1]=H=>w.value=H)},null,8,["id","time-from","onUpdate:timeFrom","time-to","onUpdate:timeTo"])]))),128))])]),_:2},1032,["name","tab"])):ma("",!0)],64))),256))]),_:1},8,["value"])):(V(),pe(i(Ra),{key:0,class:"h-full w-full flex items-center justify-center"}))])]}),_:1},8,["breadcrumbs"]),k(L,{show:i(o),"onUpdate:show":x[7]||(x[7]=P=>ie(o)?o.value=P:null),title:"Add a timeslot","positive-text":"Add","negative-text":"Nevermind",onPositiveClick:$},{default:E(()=>[q("div",nn,[k(g,{from:i(p),"onUpdate:from":x[4]||(x[4]=P=>ie(p)?p.value=P:null),to:i(b),"onUpdate:to":x[5]||(x[5]=P=>ie(b)?b.value=P:null)},null,8,["from","to"]),k(i(wa),{value:i(c),"onUpdate:value":x[6]||(x[6]=P=>ie(c)?c.value=P:null),options:i(ae).map(P=>({label:P.label,value:P.key}))},null,8,["value","options"])])]),_:1},8,["show"])],64)}}});export{fn as default};
