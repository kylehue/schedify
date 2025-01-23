import{_ as U}from"./DoZA1TFs.js";import{u as B,N as z,G as D,_ as F,I as G}from"./IqWDTP7p.js";import{d as A,aG as q,aF as R,b0 as k,o as v,at as P,w as s,b as t,u as e,au as N,e as x,aL as S,a as b,B as g,aI as L,aw as V,n as M,r as _,c as y,aJ as j,b2 as H,V as J,aK as K}from"./CCwICSxJ.js";import{u as O}from"./C_Ai-skY.js";import{b as Q,N as E}from"./DNhtUW22.js";const W={class:"flex flex-col md:flex-row md:items-center gap-1"},X={class:"flex flex-wrap justify-between"},Y={class:"flex flex-wrap gap-2"},Z=A({__name:"section",props:{code:{}},setup($){const c=$,p=B(),n=q(),i=R(),r=i.getSubject(n.params.subject);if(!r)throw k({statusCode:404,statusMessage:`Subject does not exist: ${n.params.subject}`});const a=i.getSection(r.code,c.code);if(!a)throw k({statusCode:404,statusMessage:`Section does not exist: ${c.code}`});function m(){M({params:{section:c.code},query:{s:n.query.s},name:"subjects-subject-sections-section-timeslots"})}function u(){p.warning({title:"Remove section",content:`Are you sure you want to remove ${c.code} from ${n.params.subject}?`,positiveText:"Remove",negativeText:"Cancel",onPositiveClick(C){i.removeSection(r.code,a.code)}})}return(C,d)=>(v(),P(e(V),{class:L([{"opacity-50":!e(a).isEnabled},"transition-opacity"])},{header:s(()=>[t(e(N),{class:"truncate text-sm"},{default:s(()=>[x(S(c.code),1)]),_:1})]),default:s(()=>[b("div",W,[t(e(N),{class:"truncate",depth:3},{default:s(()=>[x(S(e(a).description||"Empty description"),1)]),_:1})])]),action:s(()=>[b("div",X,[b("div",Y,[t(e(z),{dot:"",show:!e(i).isTimeslotsValid(e(r).code,e(a).code)},{default:s(()=>[t(e(g),{tertiary:"",onClick:m},{default:s(()=>d[1]||(d[1]=[x(" Edit time slots... ")])),_:1})]),_:1},8,["show"]),t(e(g),{onClick:d[0]||(d[0]=T=>e(a).isEnabled=!e(a).isEnabled),tertiary:""},{default:s(()=>[x(S(e(a).isEnabled?"Disable":"Enable"),1)]),_:1})]),t(e(g),{onClick:u,type:"error",quaternary:"",circle:""},{icon:s(()=>[t(e(D))]),_:1})])]),_:1},8,["class"]))}}),ee={class:"w-full h-full flex flex-col items-start justify-start gap-10 p-10 overflow-y-scroll"},te={key:1,class:"flex flex-row flex-wrap"},se={class:"flex flex-wrap w-full justify-between gap-2"},oe={class:"flex flex-col gap-2"},re=A({__name:"index",setup($){O({title:"Sections"});const c=B(),p=q(),n=_(!1),i=_(""),r=_(void 0),a=_(""),m=R(),u=m.getSubject(p.params.subject);if(!u)throw k({statusCode:404,statusMessage:`Subject does not exist: ${p.params.subject}`});function C(){let f=i.value.trim(),o=a.value.trim()||void 0;const w=()=>{m.addSection(u.code,f,o),i.value="",a.value="",n.value=!1,r.value=void 0};m.getSection(u.code,f)?c.warning({title:"Duplicate section",content:"This section already exists! Do you want to replace it instead?",negativeText:"Cancel",positiveText:"Replace",onPositiveClick(h){w()}}):f.length?w():r.value="error"}function d(){M({name:"subjects",query:{s:p.query.s}})}function T(){c.warning({title:"Clear all",content:`Are you sure you want to clear all sections in ${p.params.subject}?`,positiveText:"Clear all",negativeText:"Cancel",onPositiveClick(f){m.clearSections(u.code)}})}return(f,o)=>{const w=U,h=Z,I=F;return v(),y("div",ee,[t(e(V),{"content-class":"min-h-[300px]"},{header:s(()=>[t(w,{title:"Sections",onBack:o[0]||(o[0]=()=>d()),breadcrumbs:[{label:"Subjects",click:()=>d()},{label:(f._.provides[H]||f.$route).params.subject}]},null,8,["breadcrumbs"])]),default:s(()=>[e(u).sections.size<=0?(v(),P(e(Q),{key:0,class:"h-full w-full flex items-center justify-center"})):(v(),y("div",te,[(v(!0),y(J,null,K(e(u).sections.values(),l=>(v(),y("div",{key:l.code,class:"w-1/3 max-md:w-full max-xl:w-1/2 p-2"},[t(h,{code:l.code},null,8,["code"])]))),128))]))]),action:s(()=>[b("div",se,[t(e(g),{onClick:o[1]||(o[1]=l=>n.value=!0)},{icon:s(()=>[t(e(G))]),default:s(()=>[o[5]||(o[5]=x(" Add a section "))]),_:1}),t(e(g),{onClick:T,ghost:"",type:"error"},{icon:s(()=>[t(e(D))]),default:s(()=>[o[6]||(o[6]=x(" Clear all "))]),_:1})])]),_:1}),t(I,{show:e(n),"onUpdate:show":o[4]||(o[4]=l=>j(n)?n.value=l:null),title:"Add a section","positive-text":"Add","negative-text":"Nevermind",onPositiveClick:C},{default:s(()=>[b("div",oe,[t(e(E),{value:e(i),"onUpdate:value":o[2]||(o[2]=l=>j(i)?i.value=l:null),status:e(r),placeholder:"Code (must be unique)"},null,8,["value","status"]),t(e(E),{value:e(a),"onUpdate:value":o[3]||(o[3]=l=>j(a)?a.value=l:null),placeholder:"Description (optional)"},null,8,["value"])])]),_:1},8,["show"])])}}});export{re as default};
