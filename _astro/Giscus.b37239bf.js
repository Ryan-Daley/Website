import{o as c,b as n,g as u,t as d}from"./web.7eadcb02.js";import{u as p}from"./index.bb838f96.js";const g={website:"https://zxh.io/",title:"Xiaohan Zou",desc:"A dragon lost in human world.",author:"Xiaohan Zou"},e={repo:"This-is-an-Apple/giscus-zxh.io",repoId:"R_kgDOGl2SjQ",category:"Announcements",categoryId:"DIC_kwDOGl2Sjc4CAcxK",light:"light",dark:`${g.website}/css/giscus-dark.css`},m=d('<div class="giscus"></div>',2),A=()=>{const[r,l]=p(),a=()=>r()?e.dark:e.light,i=s=>{const t=document.createElement("script");return t.setAttribute("src","https://giscus.app/client.js"),t.setAttribute("data-repo",e.repo),t.setAttribute("data-repo-id",e.repoId),t.setAttribute("data-category",e.category),t.setAttribute("data-category-id",e.categoryId),t.setAttribute("data-theme",s),t.setAttribute("data-lang","en"),t.setAttribute("data-mapping","pathname"),t.setAttribute("data-reactions-enabled","1"),t.setAttribute("data-emit-metadata","0"),t.setAttribute("crossorigin","anonymous"),t.setAttribute("async","true"),t},o=s=>{document.querySelector("iframe.giscus-frame")?.contentWindow?.postMessage({giscus:{setConfig:{theme:s}}},"https://giscus.app")};return c(()=>{document.head.appendChild(i(a()))}),n(()=>o(a())),u(m)};export{A as Giscus,A as default};
