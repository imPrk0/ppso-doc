import{B as p}from"./chunks/useFlexGapSupport.upHTof6Q.js";import{I as m,q as _,a as x}from"./chunks/index.D2hcoE4i.js";import{a as d,F as P}from"./chunks/index.IJua3cRl.js";import{d as f,p as V,a3 as F,o as b,b as C,w as o,G as r,a as i,k as a,c as v,a1 as N,j as s}from"./chunks/framework.BG-FXJvp.js";import"./chunks/index.CDxVNqGS.js";import"./chunks/colors.nj2LBEDT.js";const q=f({__name:"ApplySites",setup(c){const u=V(),t=F({websiteName:"",siteCode:"",websiteUrl:""}),h={websiteName:[{trigger:"blur",validator:async(l,e)=>e?Promise.resolve():Promise.reject("请输入网站名称")}],websiteUrl:[{trigger:"blur",validator:async(l,e)=>e?Promise.resolve():Promise.reject("请输入网站首页")}],siteCode:[{trigger:"blur",validator:async(l,e)=>e?e.length!==32?Promise.reject("网站授权码格式不正确"):Promise.resolve():Promise.reject("网站授权码是必须的")}]},w=l=>{console.log(l,t)},k=l=>{console.log(l)},g=()=>{var l;(l=u.value)==null||l.resetFields()},y=(...l)=>{console.log(l)};return(l,e)=>(b(),C(a(x),{title:"申请上位"},{extra:o(()=>[r(a(p),{type:"link",href:"https://www.prkauth.com",target:"_blank"},{default:o(()=>e[3]||(e[3]=[i(" 授权管理中心 ")])),_:1})]),default:o(()=>[r(a(P),{ref_key:"formRef",ref:u,name:"apply-site",model:t,rules:h,labelCol:{style:{width:"150px"}},wrapperCol:{span:14},onFinish:w,onValidate:y,onFinishFailed:k},{default:o(()=>[r(a(d),{label:"网站名称",hasFeedback:"",name:"websiteName"},{default:o(()=>[r(a(m),{modelValue:t.websiteName,"onUpdate:modelValue":e[0]||(e[0]=n=>t.websiteName=n),placeholder:"如：皮皮盘搜"},null,8,["modelValue"])]),_:1}),r(a(d),{label:"网站首页",hasFeedback:"",name:"websiteUrl"},{default:o(()=>[r(a(m),{modelValue:t.websiteUrl,"onUpdate:modelValue":e[1]||(e[1]=n=>t.websiteUrl=n),placeholder:"www.ppsou.cc",addonBefore:"https://",addonAfter:"/"},null,8,["modelValue"])]),_:1}),r(a(d),{label:"操作码",hasFeedback:"",name:"siteCode"},{default:o(()=>[r(a(_),{modelValue:t.siteCode,"onUpdate:modelValue":e[2]||(e[2]=n=>t.siteCode=n),placeholder:"在Prk授权中心的网站码",autocomplete:"off"},null,8,["modelValue"])]),_:1}),r(a(d),{wrapperCol:{span:14,offset:4}},{default:o(()=>[r(a(p),{type:"primary","html-type":"submit"},{default:o(()=>e[4]||(e[4]=[i("提交申请")])),_:1}),r(a(p),{style:{"margin-left":"10px"},onClick:g},{default:o(()=>e[5]||(e[5]=[i("清空输入")])),_:1})]),_:1})]),_:1},8,["model"])]),_:1}))}}),R=JSON.parse('{"title":"推荐站点","description":"","frontmatter":{"aside":false},"headers":[],"relativePath":"sites.md","filePath":"sites.md","lastUpdated":null}'),U={name:"sites.md"},D=f({...U,setup(c){return(u,t)=>(b(),v("div",null,[t[0]||(t[0]=N('<h1 id="title" tabindex="-1">推荐站点 <a class="header-anchor" href="#title" aria-label="Permalink to &quot;推荐站点 {#title}&quot;">​</a></h1><p>以下是使用我们的程序 “皮皮盘搜” 搭建的网站。</p><div class="warning custom-block"><p class="custom-block-title">⚠️ 注意！</p><p>以下站点不受我们的管理与约束，我们无法为以下网站负责！</p></div><h2 id="list" tabindex="-1">推荐列表 <a class="header-anchor" href="#list" aria-label="Permalink to &quot;推荐列表 {#list}&quot;">​</a></h2><blockquote><p>以下排名不分先后</p></blockquote><table tabindex="0"><thead><tr><th style="text-align:left;">网站名称</th><th style="text-align:left;">网站地址</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="https://www.example.com" target="_blank" rel="noreferrer">XXX盘搜</a></td><td style="text-align:left;">example.com</td></tr></tbody></table><h2 id="apply" tabindex="-1">毛遂自荐 <a class="header-anchor" href="#apply" aria-label="Permalink to &quot;毛遂自荐 {#apply}&quot;">​</a></h2><p>满足以下要求的，可登录 “<a href="https://www.prkauth.com" target="_blank" rel="noreferrer">Prk产品授权中心</a>”，在后台处为网站申请 “验证码”，并完成下方表单提交申请。</p>',8)),r(q),t[1]||(t[1]=s("ul",null,[s("li",null,[i("购买 “皮皮盘搜” 程序并在授权有效期内 "),s("ul",null,[s("li",null,[s("strong",null,"永久许可证"),i(" 可永久享受")]),s("li",null,[s("strong",null,"订阅制"),i(" 在订阅到期后将只再保留一年（365 天），直到续订")])])]),s("li",null,[i("网站使用 "),s("code",null,"https://"),i(" 加密协议")])],-1))]))}});export{R as __pageData,D as default};