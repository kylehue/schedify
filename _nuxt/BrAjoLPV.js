import{d as Y,r as x,m as fe,b0 as _,p as w,E as q,ar as be,O as me,J as ge,aS as ve,bX as we,cr as pe,L as F,bk as ye,bl as ze,bj as $e,Y as P,Z as U,h as u,bZ as Se,at as K,q as xe,aR as Be,A as i,ak as T,y as c,z as g,C as $,cs as Ce,bq as Ee,G as V,M as N,ct as ke,P as Re,br as Me,S,cu as Fe,cv as Te,bs as He,K as We,aX as Oe}from"./BLQ00e9F.js";import{u as j}from"./D3s9aJN3.js";import{f as X}from"./B-p6aW7q.js";const Ie=Y({name:"NDrawerContent",inheritAttrs:!1,props:{blockScroll:Boolean,show:{type:Boolean,default:void 0},displayDirective:{type:String,required:!0},placement:{type:String,required:!0},contentClass:String,contentStyle:[Object,String],nativeScrollbar:{type:Boolean,required:!0},scrollbarProps:Object,trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},showMask:{type:[Boolean,String],required:!0},maxWidth:Number,maxHeight:Number,minWidth:Number,minHeight:Number,resizable:Boolean,onClickoutside:Function,onAfterLeave:Function,onAfterEnter:Function,onEsc:Function},setup(e){const r=x(!!e.show),t=x(null),p=fe(_);let b=0,B="",f=null;const y=x(!1),v=x(!1),C=w(()=>e.placement==="top"||e.placement==="bottom"),{mergedClsPrefixRef:H,mergedRtlRef:W}=q(e),O=be("Drawer",W,H),k=n,I=o=>{v.value=!0,b=C.value?o.clientY:o.clientX,B=document.body.style.cursor,document.body.style.cursor=C.value?"ns-resize":"ew-resize",document.body.addEventListener("mousemove",m),document.body.addEventListener("mouseleave",k),document.body.addEventListener("mouseup",n)},R=()=>{f!==null&&(window.clearTimeout(f),f=null),v.value?y.value=!0:f=window.setTimeout(()=>{y.value=!0},300)},D=()=>{f!==null&&(window.clearTimeout(f),f=null),y.value=!1},{doUpdateHeight:A,doUpdateWidth:L}=p,E=o=>{const{maxWidth:a}=e;if(a&&o>a)return a;const{minWidth:d}=e;return d&&o<d?d:o},M=o=>{const{maxHeight:a}=e;if(a&&o>a)return a;const{minHeight:d}=e;return d&&o<d?d:o};function m(o){var a,d;if(v.value)if(C.value){let h=((a=t.value)===null||a===void 0?void 0:a.offsetHeight)||0;const z=b-o.clientY;h+=e.placement==="bottom"?z:-z,h=M(h),A(h),b=o.clientY}else{let h=((d=t.value)===null||d===void 0?void 0:d.offsetWidth)||0;const z=b-o.clientX;h+=e.placement==="right"?z:-z,h=E(h),L(h),b=o.clientX}}function n(){v.value&&(b=0,v.value=!1,document.body.style.cursor=B,document.body.removeEventListener("mousemove",m),document.body.removeEventListener("mouseup",n),document.body.removeEventListener("mouseleave",k))}me(()=>{e.show&&(r.value=!0)}),ge(()=>e.show,o=>{o||n()}),ve(()=>{n()});const s=w(()=>{const{show:o}=e,a=[[U,o]];return e.showMask||a.push([we,e.onClickoutside,void 0,{capture:!0}]),a});function l(){var o;r.value=!1,(o=e.onAfterLeave)===null||o===void 0||o.call(e)}return pe(w(()=>e.blockScroll&&r.value)),F(ye,t),F(ze,null),F($e,null),{bodyRef:t,rtlEnabled:O,mergedClsPrefix:p.mergedClsPrefixRef,isMounted:p.isMountedRef,mergedTheme:p.mergedThemeRef,displayed:r,transitionName:w(()=>({right:"slide-in-from-right-transition",left:"slide-in-from-left-transition",top:"slide-in-from-top-transition",bottom:"slide-in-from-bottom-transition"})[e.placement]),handleAfterLeave:l,bodyDirectives:s,handleMousedownResizeTrigger:I,handleMouseenterResizeTrigger:R,handleMouseleaveResizeTrigger:D,isDragging:v,isHoverOnResizeTrigger:y}},render(){const{$slots:e,mergedClsPrefix:r}=this;return this.displayDirective==="show"||this.displayed||this.show?P(u("div",{role:"none"},u(Se,{disabled:!this.showMask||!this.trapFocus,active:this.show,autoFocus:this.autoFocus,onEsc:this.onEsc},{default:()=>u(K,{name:this.transitionName,appear:this.isMounted,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>P(u("div",xe(this.$attrs,{role:"dialog",ref:"bodyRef","aria-modal":"true",class:[`${r}-drawer`,this.rtlEnabled&&`${r}-drawer--rtl`,`${r}-drawer--${this.placement}-placement`,this.isDragging&&`${r}-drawer--unselectable`,this.nativeScrollbar&&`${r}-drawer--native-scrollbar`]}),[this.resizable?u("div",{class:[`${r}-drawer__resize-trigger`,(this.isDragging||this.isHoverOnResizeTrigger)&&`${r}-drawer__resize-trigger--hover`],onMouseenter:this.handleMouseenterResizeTrigger,onMouseleave:this.handleMouseleaveResizeTrigger,onMousedown:this.handleMousedownResizeTrigger}):null,this.nativeScrollbar?u("div",{class:[`${r}-drawer-content-wrapper`,this.contentClass],style:this.contentStyle,role:"none"},e):u(Be,Object.assign({},this.scrollbarProps,{contentStyle:this.contentStyle,contentClass:[`${r}-drawer-content-wrapper`,this.contentClass],theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar}),e)]),this.bodyDirectives)})})),[[U,this.displayDirective==="if"||this.displayed||this.show]]):null}}),{cubicBezierEaseIn:De,cubicBezierEaseOut:Ae}=T;function Le({duration:e="0.3s",leaveDuration:r="0.2s",name:t="slide-in-from-bottom"}={}){return[i(`&.${t}-transition-leave-active`,{transition:`transform ${r} ${De}`}),i(`&.${t}-transition-enter-active`,{transition:`transform ${e} ${Ae}`}),i(`&.${t}-transition-enter-to`,{transform:"translateY(0)"}),i(`&.${t}-transition-enter-from`,{transform:"translateY(100%)"}),i(`&.${t}-transition-leave-from`,{transform:"translateY(0)"}),i(`&.${t}-transition-leave-to`,{transform:"translateY(100%)"})]}const{cubicBezierEaseIn:Pe,cubicBezierEaseOut:Ue}=T;function Ne({duration:e="0.3s",leaveDuration:r="0.2s",name:t="slide-in-from-left"}={}){return[i(`&.${t}-transition-leave-active`,{transition:`transform ${r} ${Pe}`}),i(`&.${t}-transition-enter-active`,{transition:`transform ${e} ${Ue}`}),i(`&.${t}-transition-enter-to`,{transform:"translateX(0)"}),i(`&.${t}-transition-enter-from`,{transform:"translateX(-100%)"}),i(`&.${t}-transition-leave-from`,{transform:"translateX(0)"}),i(`&.${t}-transition-leave-to`,{transform:"translateX(-100%)"})]}const{cubicBezierEaseIn:je,cubicBezierEaseOut:Xe}=T;function Ye({duration:e="0.3s",leaveDuration:r="0.2s",name:t="slide-in-from-right"}={}){return[i(`&.${t}-transition-leave-active`,{transition:`transform ${r} ${je}`}),i(`&.${t}-transition-enter-active`,{transition:`transform ${e} ${Xe}`}),i(`&.${t}-transition-enter-to`,{transform:"translateX(0)"}),i(`&.${t}-transition-enter-from`,{transform:"translateX(100%)"}),i(`&.${t}-transition-leave-from`,{transform:"translateX(0)"}),i(`&.${t}-transition-leave-to`,{transform:"translateX(100%)"})]}const{cubicBezierEaseIn:_e,cubicBezierEaseOut:qe}=T;function Ke({duration:e="0.3s",leaveDuration:r="0.2s",name:t="slide-in-from-top"}={}){return[i(`&.${t}-transition-leave-active`,{transition:`transform ${r} ${_e}`}),i(`&.${t}-transition-enter-active`,{transition:`transform ${e} ${qe}`}),i(`&.${t}-transition-enter-to`,{transform:"translateY(0)"}),i(`&.${t}-transition-enter-from`,{transform:"translateY(-100%)"}),i(`&.${t}-transition-leave-from`,{transform:"translateY(0)"}),i(`&.${t}-transition-leave-to`,{transform:"translateY(-100%)"})]}const Ve=i([c("drawer",`
 word-break: break-word;
 line-height: var(--n-line-height);
 position: absolute;
 pointer-events: all;
 box-shadow: var(--n-box-shadow);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background-color: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 `,[Ye(),Ne(),Ke(),Le(),g("unselectable",`
 user-select: none; 
 -webkit-user-select: none;
 `),g("native-scrollbar",[c("drawer-content-wrapper",`
 overflow: auto;
 height: 100%;
 `)]),$("resize-trigger",`
 position: absolute;
 background-color: #0000;
 transition: background-color .3s var(--n-bezier);
 `,[g("hover",`
 background-color: var(--n-resize-trigger-color-hover);
 `)]),c("drawer-content-wrapper",`
 box-sizing: border-box;
 `),c("drawer-content",`
 height: 100%;
 display: flex;
 flex-direction: column;
 `,[g("native-scrollbar",[c("drawer-body-content-wrapper",`
 height: 100%;
 overflow: auto;
 `)]),c("drawer-body",`
 flex: 1 0 0;
 overflow: hidden;
 `),c("drawer-body-content-wrapper",`
 box-sizing: border-box;
 padding: var(--n-body-padding);
 `),c("drawer-header",`
 font-weight: var(--n-title-font-weight);
 line-height: 1;
 font-size: var(--n-title-font-size);
 color: var(--n-title-text-color);
 padding: var(--n-header-padding);
 transition: border .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-divider-color);
 border-bottom: var(--n-header-border-bottom);
 display: flex;
 justify-content: space-between;
 align-items: center;
 `,[$("main",`
 flex: 1;
 `),$("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),c("drawer-footer",`
 display: flex;
 justify-content: flex-end;
 border-top: var(--n-footer-border-top);
 transition: border .3s var(--n-bezier);
 padding: var(--n-footer-padding);
 `)]),g("right-placement",`
 top: 0;
 bottom: 0;
 right: 0;
 border-top-left-radius: var(--n-border-radius);
 border-bottom-left-radius: var(--n-border-radius);
 `,[$("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 left: 0;
 transform: translateX(-1.5px);
 cursor: ew-resize;
 `)]),g("left-placement",`
 top: 0;
 bottom: 0;
 left: 0;
 border-top-right-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `,[$("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 right: 0;
 transform: translateX(1.5px);
 cursor: ew-resize;
 `)]),g("top-placement",`
 top: 0;
 left: 0;
 right: 0;
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `,[$("resize-trigger",`
 width: 100%;
 height: 3px;
 bottom: 0;
 left: 0;
 transform: translateY(1.5px);
 cursor: ns-resize;
 `)]),g("bottom-placement",`
 left: 0;
 bottom: 0;
 right: 0;
 border-top-left-radius: var(--n-border-radius);
 border-top-right-radius: var(--n-border-radius);
 `,[$("resize-trigger",`
 width: 100%;
 height: 3px;
 top: 0;
 left: 0;
 transform: translateY(-1.5px);
 cursor: ns-resize;
 `)])]),i("body",[i(">",[c("drawer-container",`
 position: fixed;
 `)])]),c("drawer-container",`
 position: relative;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 `,[i("> *",`
 pointer-events: all;
 `)]),c("drawer-mask",`
 background-color: rgba(0, 0, 0, .3);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[g("invisible",`
 background-color: rgba(0, 0, 0, 0)
 `),Ce({enterDuration:"0.2s",leaveDuration:"0.2s",enterCubicBezier:"var(--n-bezier-in)",leaveCubicBezier:"var(--n-bezier-out)"})])]),Ze=Object.assign(Object.assign({},V.props),{show:Boolean,width:[Number,String],height:[Number,String],placement:{type:String,default:"right"},maskClosable:{type:Boolean,default:!0},showMask:{type:[Boolean,String],default:!0},to:[String,Object],displayDirective:{type:String,default:"if"},nativeScrollbar:{type:Boolean,default:!0},zIndex:Number,onMaskClick:Function,scrollbarProps:Object,contentClass:String,contentStyle:[Object,String],trapFocus:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0},maxWidth:Number,maxHeight:Number,minWidth:Number,minHeight:Number,resizable:Boolean,defaultWidth:{type:[Number,String],default:251},defaultHeight:{type:[Number,String],default:251},onUpdateWidth:[Function,Array],onUpdateHeight:[Function,Array],"onUpdate:width":[Function,Array],"onUpdate:height":[Function,Array],"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,drawerStyle:[String,Object],drawerClass:String,target:null,onShow:Function,onHide:Function}),et=Y({name:"Drawer",inheritAttrs:!1,props:Ze,setup(e){const{mergedClsPrefixRef:r,namespaceRef:t,inlineThemeDisabled:p}=q(e),b=Ee(),B=V("Drawer","-drawer",Ve,Te,e,r),f=x(e.defaultWidth),y=x(e.defaultHeight),v=j(N(e,"width"),f),C=j(N(e,"height"),y),H=w(()=>{const{placement:n}=e;return n==="top"||n==="bottom"?"":X(v.value)}),W=w(()=>{const{placement:n}=e;return n==="left"||n==="right"?"":X(C.value)}),O=n=>{const{onUpdateWidth:s,"onUpdate:width":l}=e;s&&S(s,n),l&&S(l,n),f.value=n},k=n=>{const{onUpdateHeight:s,"onUpdate:width":l}=e;s&&S(s,n),l&&S(l,n),y.value=n},I=w(()=>[{width:H.value,height:W.value},e.drawerStyle||""]);function R(n){const{onMaskClick:s,maskClosable:l}=e;l&&E(!1),s&&s(n)}function D(n){R(n)}const A=ke();function L(n){var s;(s=e.onEsc)===null||s===void 0||s.call(e),e.show&&e.closeOnEsc&&Fe(n)&&(A.value||E(!1))}function E(n){const{onHide:s,onUpdateShow:l,"onUpdate:show":o}=e;l&&S(l,n),o&&S(o,n),s&&!n&&S(s,n)}F(_,{isMountedRef:b,mergedThemeRef:B,mergedClsPrefixRef:r,doUpdateShow:E,doUpdateHeight:k,doUpdateWidth:O});const M=w(()=>{const{common:{cubicBezierEaseInOut:n,cubicBezierEaseIn:s,cubicBezierEaseOut:l},self:{color:o,textColor:a,boxShadow:d,lineHeight:h,headerPadding:z,footerPadding:Z,borderRadius:G,bodyPadding:J,titleFontSize:Q,titleTextColor:ee,titleFontWeight:te,headerBorderBottom:re,footerBorderTop:ne,closeIconColor:oe,closeIconColorHover:ie,closeIconColorPressed:se,closeColorHover:ae,closeColorPressed:le,closeIconSize:de,closeSize:ce,closeBorderRadius:ue,resizableTriggerColorHover:he}}=B.value;return{"--n-line-height":h,"--n-color":o,"--n-border-radius":G,"--n-text-color":a,"--n-box-shadow":d,"--n-bezier":n,"--n-bezier-out":l,"--n-bezier-in":s,"--n-header-padding":z,"--n-body-padding":J,"--n-footer-padding":Z,"--n-title-text-color":ee,"--n-title-font-size":Q,"--n-title-font-weight":te,"--n-header-border-bottom":re,"--n-footer-border-top":ne,"--n-close-icon-color":oe,"--n-close-icon-color-hover":ie,"--n-close-icon-color-pressed":se,"--n-close-size":ce,"--n-close-color-hover":ae,"--n-close-color-pressed":le,"--n-close-icon-size":de,"--n-close-border-radius":ue,"--n-resize-trigger-color-hover":he}}),m=p?Re("drawer",void 0,M,e):void 0;return{mergedClsPrefix:r,namespace:t,mergedBodyStyle:I,handleOutsideClick:D,handleMaskClick:R,handleEsc:L,mergedTheme:B,cssVars:p?void 0:M,themeClass:m==null?void 0:m.themeClass,onRender:m==null?void 0:m.onRender,isMounted:b}},render(){const{mergedClsPrefix:e}=this;return u(Me,{to:this.to,show:this.show},{default:()=>{var r;return(r=this.onRender)===null||r===void 0||r.call(this),P(u("div",{class:[`${e}-drawer-container`,this.namespace,this.themeClass],style:this.cssVars,role:"none"},this.showMask?u(K,{name:"fade-in-transition",appear:this.isMounted},{default:()=>this.show?u("div",{"aria-hidden":!0,class:[`${e}-drawer-mask`,this.showMask==="transparent"&&`${e}-drawer-mask--invisible`],onClick:this.handleMaskClick}):null}):null,u(Ie,Object.assign({},this.$attrs,{class:[this.drawerClass,this.$attrs.class],style:[this.mergedBodyStyle,this.$attrs.style],blockScroll:this.blockScroll,contentStyle:this.contentStyle,contentClass:this.contentClass,placement:this.placement,scrollbarProps:this.scrollbarProps,show:this.show,displayDirective:this.displayDirective,nativeScrollbar:this.nativeScrollbar,onAfterEnter:this.onAfterEnter,onAfterLeave:this.onAfterLeave,trapFocus:this.trapFocus,autoFocus:this.autoFocus,resizable:this.resizable,maxHeight:this.maxHeight,minHeight:this.minHeight,maxWidth:this.maxWidth,minWidth:this.minWidth,showMask:this.showMask,onEsc:this.handleEsc,onClickoutside:this.handleOutsideClick}),this.$slots)),[[He,{zIndex:this.zIndex,enabled:this.show}]])}})}});function tt(){const e=x(window.innerWidth),r=()=>{e.value=window.innerWidth};return We(()=>{window.addEventListener("resize",r)}),Oe(()=>{window.removeEventListener("resize",r)}),{windowWidth:e}}export{et as N,tt as u};
