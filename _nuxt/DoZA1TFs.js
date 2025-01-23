import{m as g,l as f,q as j,s as k,d as C,g as E,C as A,c1 as T,p as I,t as q,j as h,G as D,h as y,f as O,r as F,aV as G,ab as K,c2 as U,z as p,U as J,o as a,c as l,aq as M,ar as L,a2 as V,a as n,at as _,w as $,b as B,u as x,B as Q,aL as z,V as X,aK as Y,e as W}from"./CCwICSxJ.js";const ee=g("breadcrumb",`
 white-space: nowrap;
 cursor: default;
 line-height: var(--n-item-line-height);
`,[f("ul",`
 list-style: none;
 padding: 0;
 margin: 0;
 `),f("a",`
 color: inherit;
 text-decoration: inherit;
 `),g("breadcrumb-item",`
 font-size: var(--n-font-size);
 transition: color .3s var(--n-bezier);
 display: inline-flex;
 align-items: center;
 `,[g("icon",`
 font-size: 18px;
 vertical-align: -.2em;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `),f("&:not(:last-child)",[j("clickable",[k("link",`
 cursor: pointer;
 `,[f("&:hover",`
 background-color: var(--n-item-color-hover);
 `),f("&:active",`
 background-color: var(--n-item-color-pressed); 
 `)])])]),k("link",`
 padding: 4px;
 border-radius: var(--n-item-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 position: relative;
 `,[f("&:hover",`
 color: var(--n-item-text-color-hover);
 `,[g("icon",`
 color: var(--n-item-text-color-hover);
 `)]),f("&:active",`
 color: var(--n-item-text-color-pressed);
 `,[g("icon",`
 color: var(--n-item-text-color-pressed);
 `)])]),k("separator",`
 margin: 0 8px;
 color: var(--n-separator-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 `),f("&:last-child",[k("link",`
 font-weight: var(--n-font-weight-active);
 cursor: unset;
 color: var(--n-item-text-color-active);
 `,[g("icon",`
 color: var(--n-item-text-color-active);
 `)]),k("separator",`
 display: none;
 `)])])]),Z=O("n-breadcrumb"),re=Object.assign(Object.assign({},A.props),{separator:{type:String,default:"/"}}),te=C({name:"Breadcrumb",props:re,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:o}=E(e),c=A("Breadcrumb","-breadcrumb",ee,T,e,r);I(Z,{separatorRef:q(e,"separator"),mergedClsPrefixRef:r});const i=h(()=>{const{common:{cubicBezierEaseInOut:t},self:{separatorColor:d,itemTextColor:u,itemTextColorHover:m,itemTextColorPressed:v,itemTextColorActive:b,fontSize:w,fontWeightActive:R,itemBorderRadius:S,itemColorHover:H,itemColorPressed:P,itemLineHeight:N}}=c.value;return{"--n-font-size":w,"--n-bezier":t,"--n-item-text-color":u,"--n-item-text-color-hover":m,"--n-item-text-color-pressed":v,"--n-item-text-color-active":b,"--n-separator-color":d,"--n-item-color-hover":H,"--n-item-color-pressed":P,"--n-item-border-radius":S,"--n-font-weight-active":R,"--n-item-line-height":N}}),s=o?D("breadcrumb",void 0,i,e):void 0;return{mergedClsPrefix:r,cssVars:o?void 0:i,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),y("nav",{class:[`${this.mergedClsPrefix}-breadcrumb`,this.themeClass],style:this.cssVars,"aria-label":"Breadcrumb"},y("ul",null,this.$slots))}});function ae(e=U?window:null){const r=()=>{const{hash:i,host:s,hostname:t,href:d,origin:u,pathname:m,port:v,protocol:b,search:w}=(e==null?void 0:e.location)||{};return{hash:i,host:s,hostname:t,href:d,origin:u,pathname:m,port:v,protocol:b,search:w}},o=F(r()),c=()=>{o.value=r()};return G(()=>{e&&(e.addEventListener("popstate",c),e.addEventListener("hashchange",c))}),K(()=>{e&&(e.removeEventListener("popstate",c),e.removeEventListener("hashchange",c))}),o}const ne={separator:String,href:String,clickable:{type:Boolean,default:!0},onClick:Function},le=C({name:"BreadcrumbItem",props:ne,slots:Object,setup(e,{slots:r}){const o=p(Z,null);if(!o)return()=>null;const{separatorRef:c,mergedClsPrefixRef:i}=o,s=ae(),t=h(()=>e.href?"a":"span"),d=h(()=>s.value.href===e.href?"location":null);return()=>{const{value:u}=i;return y("li",{class:[`${u}-breadcrumb-item`,e.clickable&&`${u}-breadcrumb-item--clickable`]},y(t.value,{class:`${u}-breadcrumb-item__link`,"aria-current":d.value,href:e.href,onClick:e.onClick},r),y("span",{class:`${u}-breadcrumb-item__separator`,"aria-hidden":"true"},J(r.separator,()=>{var m;return[(m=e.separator)!==null&&m!==void 0?m:c.value]})))}}}),oe=["width","height","fill","transform"],ie={key:0},se=n("path",{d:"M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z"},null,-1),ce=[se],ue={key:1},de=n("path",{d:"M112,56V200L40,128Z",opacity:"0.2"},null,-1),me=n("path",{d:"M216,120H120V56a8,8,0,0,0-13.66-5.66l-72,72a8,8,0,0,0,0,11.32l72,72A8,8,0,0,0,120,200V136h96a8,8,0,0,0,0-16ZM104,180.69,51.31,128,104,75.31Z"},null,-1),he=[de,me],ve={key:2},pe=n("path",{d:"M224,128a8,8,0,0,1-8,8H120v64a8,8,0,0,1-13.66,5.66l-72-72a8,8,0,0,1,0-11.32l72-72A8,8,0,0,1,120,56v64h96A8,8,0,0,1,224,128Z"},null,-1),fe=[pe],ge={key:3},be=n("path",{d:"M222,128a6,6,0,0,1-6,6H54.49l61.75,61.76a6,6,0,1,1-8.48,8.48l-72-72a6,6,0,0,1,0-8.48l72-72a6,6,0,0,1,8.48,8.48L54.49,122H216A6,6,0,0,1,222,128Z"},null,-1),ke=[be],xe={key:4},ye=n("path",{d:"M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"},null,-1),Ce=[ye],$e={key:5},we=n("path",{d:"M220,128a4,4,0,0,1-4,4H49.66l65.17,65.17a4,4,0,0,1-5.66,5.66l-72-72a4,4,0,0,1,0-5.66l72-72a4,4,0,0,1,5.66,5.66L49.66,124H216A4,4,0,0,1,220,128Z"},null,-1),Be=[we],Le={name:"PhArrowLeft"},_e=C({...Le,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(e){const r=e,o=p("weight","regular"),c=p("size","1em"),i=p("color","currentColor"),s=p("mirrored",!1),t=h(()=>r.weight??o),d=h(()=>r.size??c),u=h(()=>r.color??i),m=h(()=>r.mirrored!==void 0?r.mirrored?"scale(-1, 1)":void 0:s?"scale(-1, 1)":void 0);return(v,b)=>(a(),l("svg",V({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:d.value,height:d.value,fill:u.value,transform:m.value},v.$attrs),[M(v.$slots,"default"),t.value==="bold"?(a(),l("g",ie,ce)):t.value==="duotone"?(a(),l("g",ue,he)):t.value==="fill"?(a(),l("g",ve,fe)):t.value==="light"?(a(),l("g",ge,ke)):t.value==="regular"?(a(),l("g",xe,Ce)):t.value==="thin"?(a(),l("g",$e,Be)):L("",!0)],16,oe))}}),ze=["width","height","fill","transform"],Ae={key:0},Me=n("path",{d:"M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"},null,-1),Ve=[Me],Ze={key:1},Re=n("path",{d:"M176,128,96,208V48Z",opacity:"0.2"},null,-1),Se=n("path",{d:"M181.66,122.34l-80-80A8,8,0,0,0,88,48V208a8,8,0,0,0,13.66,5.66l80-80A8,8,0,0,0,181.66,122.34ZM104,188.69V67.31L164.69,128Z"},null,-1),He=[Re,Se],Pe={key:2},Ne=n("path",{d:"M181.66,133.66l-80,80A8,8,0,0,1,88,208V48a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,181.66,133.66Z"},null,-1),je=[Ne],Ee={key:3},Te=n("path",{d:"M180.24,132.24l-80,80a6,6,0,0,1-8.48-8.48L167.51,128,91.76,52.24a6,6,0,0,1,8.48-8.48l80,80A6,6,0,0,1,180.24,132.24Z"},null,-1),Ie=[Te],qe={key:4},De=n("path",{d:"M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"},null,-1),Oe=[De],Fe={key:5},Ge=n("path",{d:"M178.83,130.83l-80,80a4,4,0,0,1-5.66-5.66L170.34,128,93.17,50.83a4,4,0,0,1,5.66-5.66l80,80A4,4,0,0,1,178.83,130.83Z"},null,-1),Ke=[Ge],Ue={name:"PhCaretRight"},Je=C({...Ue,props:{weight:{type:String},size:{type:[String,Number]},color:{type:String},mirrored:{type:Boolean}},setup(e){const r=e,o=p("weight","regular"),c=p("size","1em"),i=p("color","currentColor"),s=p("mirrored",!1),t=h(()=>r.weight??o),d=h(()=>r.size??c),u=h(()=>r.color??i),m=h(()=>r.mirrored!==void 0?r.mirrored?"scale(-1, 1)":void 0:s?"scale(-1, 1)":void 0);return(v,b)=>(a(),l("svg",V({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:d.value,height:d.value,fill:u.value,transform:m.value},v.$attrs),[M(v.$slots,"default"),t.value==="bold"?(a(),l("g",Ae,Ve)):t.value==="duotone"?(a(),l("g",Ze,He)):t.value==="fill"?(a(),l("g",Pe,je)):t.value==="light"?(a(),l("g",Ee,Ie)):t.value==="regular"?(a(),l("g",qe,Oe)):t.value==="thin"?(a(),l("g",Fe,Ke)):L("",!0)],16,ze))}}),Qe={class:"flex flex-col gap-2"},Xe={class:"flex flex-row items-center gap-2"},Ye={class:"flex flex-row items-center gap-2"},er=C({__name:"navigator",props:{title:{},onBack:{type:Function},breadcrumbs:{}},setup(e){const r=e;return(o,c)=>(a(),l("div",Qe,[n("div",Xe,[r.onBack?(a(),_(x(Q),{key:0,quaternary:"",circle:"",onClick:r.onBack},{icon:$(()=>[B(x(_e))]),_:1},8,["onClick"])):L("",!0),n("span",null,z(r.title),1)]),n("div",Ye,[B(x(te),null,{default:$(()=>[(a(!0),l(X,null,Y(o.breadcrumbs,i=>(a(),_(x(le),{clickable:!!i.click,onClick:i.click},{separator:$(()=>[B(x(Je))]),default:$(()=>[W(z(i.label)+" ",1)]),_:2},1032,["clickable","onClick"]))),256))]),_:1})])]))}});export{er as _};
