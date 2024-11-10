import{g as L,m as R,p as O,_ as P,r as j,d as z,a as p,c as F,W as X,P as B,q as U}from"./index.CDxVNqGS.js";import{g as q,C as G,i as V,a as J}from"./colors.nj2LBEDT.js";import{d as D,h as m,G as d,D as K,s as Q,F as Y}from"./framework.BG-FXJvp.js";const h=(o,t,l)=>{const r=O(l);return{[`${o.componentCls}-${t}`]:{color:o[`color${l}`],background:o[`color${r}Bg`],borderColor:o[`color${r}Border`],[`&${o.componentCls}-borderless`]:{borderColor:"transparent"}}}},Z=o=>q(o,(t,l)=>{let{textColor:r,lightBorderColor:a,lightColor:e,darkColor:c}=l;return{[`${o.componentCls}-${t}`]:{color:r,background:e,borderColor:a,"&-inverse":{color:o.colorTextLightSolid,background:c,borderColor:c},[`&${o.componentCls}-borderless`]:{borderColor:"transparent"}}}}),oo=o=>{const{paddingXXS:t,lineWidth:l,tagPaddingHorizontal:r,componentCls:a}=o,e=r-l,c=t-l;return{[a]:P(P({},j(o)),{display:"inline-block",height:"auto",marginInlineEnd:o.marginXS,paddingInline:e,fontSize:o.tagFontSize,lineHeight:`${o.tagLineHeight}px`,whiteSpace:"nowrap",background:o.tagDefaultBg,border:`${o.lineWidth}px ${o.lineType} ${o.colorBorder}`,borderRadius:o.borderRadiusSM,opacity:1,transition:`all ${o.motionDurationMid}`,textAlign:"start",[`&${a}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:o.tagDefaultColor},[`${a}-close-icon`]:{marginInlineStart:c,color:o.colorTextDescription,fontSize:o.tagIconSize,cursor:"pointer",transition:`all ${o.motionDurationMid}`,"&:hover":{color:o.colorTextHeading}},[`&${a}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${o.iconCls}-close, ${o.iconCls}-close:hover`]:{color:o.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${a}-checkable-checked):hover`]:{color:o.colorPrimary,backgroundColor:o.colorFillSecondary},"&:active, &-checked":{color:o.colorTextLightSolid},"&-checked":{backgroundColor:o.colorPrimary,"&:hover":{backgroundColor:o.colorPrimaryHover}},"&:active":{backgroundColor:o.colorPrimaryActive}},"&-hidden":{display:"none"},[`> ${o.iconCls} + span, > span + ${o.iconCls}`]:{marginInlineStart:e}}),[`${a}-borderless`]:{borderColor:"transparent",background:o.tagBorderlessBg}}},H=L("Tag",o=>{const{fontSize:t,lineHeight:l,lineWidth:r,fontSizeIcon:a}=o,e=Math.round(t*l),c=o.fontSizeSM,g=e-r*2,C=o.colorFillAlter,i=o.colorText,n=R(o,{tagFontSize:c,tagLineHeight:g,tagDefaultBg:C,tagDefaultColor:i,tagIconSize:a-2*r,tagPaddingHorizontal:8,tagBorderlessBg:o.colorFillTertiary});return[oo(n),Z(n),h(n,"success","Success"),h(n,"processing","Info"),h(n,"error","Error"),h(n,"warning","Warning")]}),eo=()=>({prefixCls:String,checked:{type:Boolean,default:void 0},onChange:{type:Function},onClick:{type:Function},"onUpdate:checked":Function}),S=D({compatConfig:{MODE:3},name:"ACheckableTag",inheritAttrs:!1,props:eo(),setup(o,t){let{slots:l,emit:r,attrs:a}=t;const{prefixCls:e}=z("tag",o),[c,g]=H(e),C=n=>{const{checked:u}=o;r("update:checked",!u),r("change",!u),r("click",n)},i=m(()=>F(e.value,g.value,{[`${e.value}-checkable`]:!0,[`${e.value}-checkable-checked`]:o.checked}));return()=>{var n;return c(d("span",p(p({},a),{},{class:[i.value,a.class],onClick:C}),[(n=l.default)===null||n===void 0?void 0:n.call(l)]))}}}),lo=()=>({prefixCls:String,color:{type:String},closable:{type:Boolean,default:!1},closeIcon:B.any,visible:{type:Boolean,default:void 0},onClose:{type:Function},onClick:U(),"onUpdate:visible":Function,icon:B.any,bordered:{type:Boolean,default:!0}}),v=D({compatConfig:{MODE:3},name:"ATag",inheritAttrs:!1,props:lo(),slots:Object,setup(o,t){let{slots:l,emit:r,attrs:a}=t;const{prefixCls:e,direction:c}=z("tag",o),[g,C]=H(e),i=K(!0);Q(()=>{o.visible!==void 0&&(i.value=o.visible)});const n=s=>{s.stopPropagation(),r("update:visible",!1),r("close",s),!s.defaultPrevented&&o.visible===void 0&&(i.value=!1)},u=m(()=>V(o.color)||J(o.color)),M=m(()=>F(e.value,C.value,{[`${e.value}-${o.color}`]:u.value,[`${e.value}-has-color`]:o.color&&!u.value,[`${e.value}-hidden`]:!i.value,[`${e.value}-rtl`]:c.value==="rtl",[`${e.value}-borderless`]:!o.bordered})),w=s=>{r("click",s)};return()=>{var s,b,f;const{icon:A=(s=l.icon)===null||s===void 0?void 0:s.call(l),color:$,closeIcon:y=(b=l.closeIcon)===null||b===void 0?void 0:b.call(l),closable:W=!1}=o,_=()=>W?y?d("span",{class:`${e.value}-close-icon`,onClick:n},[y]):d(G,{class:`${e.value}-close-icon`,onClick:n},null):null,k={backgroundColor:$&&!u.value?$:void 0},T=A||null,I=(f=l.default)===null||f===void 0?void 0:f.call(l),N=T?d(Y,null,[T,d("span",null,[I])]):I,E=o.onClick!==void 0,x=d("span",p(p({},a),{},{onClick:w,class:[M.value,a.class],style:[k,a.style]}),[N,_()]);return g(E?d(X,null,{default:()=>[x]}):x)}}});v.CheckableTag=S;v.install=function(o){return o.component(v.name,v),o.component(S.name,S),o};export{v as T};
