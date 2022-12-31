"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5719],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(h,i(i({ref:t},l),{},{components:r})):n.createElement(h,i({ref:t},l))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7574:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={id:"concept",title:"\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbb Concept et Architecture"},i=void 0,c={unversionedId:"concept",id:"concept",title:"\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbb Concept et Architecture",description:"Bow Framework",source:"@site/docs/concept.md",sourceDirName:".",slug:"/concept",permalink:"/docs/next/concept",draft:!1,editUrl:"https://github.com/bowphp/docs/edit/main/website/docs/concept.md",tags:[],version:"current",lastUpdatedBy:"Franck DAKIA",lastUpdatedAt:1672493455,formattedLastUpdatedAt:"Dec 31, 2022",frontMatter:{id:"concept",title:"\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbb Concept et Architecture"}},p={},s=[{value:"Bow Framework",id:"bow-framework",level:2},{value:"Contributing",id:"contributing",level:2},{value:"Contact",id:"contact",level:2},{value:"Il manque quelque chose ?",id:"il-manque-quelque-chose-",level:2}],l={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("img",{src:"https://raw.githubusercontent.com/bowphp/arts/master/bow.jpg",width:"100"}),(0,a.kt)("h2",{id:"bow-framework"},"Bow Framework"),(0,a.kt)("a",{href:"https://bowphp.com",title:"docs"},(0,a.kt)("img",{src:"https://img.shields.io/badge/docs-read%20docs-blue.svg?style=flat-square"})),(0,a.kt)("a",{href:"https://packagist.org/packages/bowphp/app",title:"version"},(0,a.kt)("img",{src:"https://img.shields.io/packagist/v/bowphp/app.svg?style=flat-square"})),(0,a.kt)("a",{href:"https://github.com/bowphp/app/blob/master/LICENSE",title:"license"},(0,a.kt)("img",{src:"https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square"})),(0,a.kt)("a",{href:"https://travis-ci.org/bowphp/app",title:"Travis branch"},(0,a.kt)("img",{src:"https://img.shields.io/travis/bowphp/app/master.svg?style=flat-square"})),(0,a.kt)("p",null,"Bow est un framework PHP, \xe9crit par ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"http://github.com/papac"},"Franck DAKIA"))," et autres contributeurs."),(0,a.kt)("p",null,"L'objectif est de permettre aux d\xe9butants qui souhaitent travailler sur un plus large projet et comprendre le fonctionnement du ",(0,a.kt)("strong",{parentName:"p"},"d\xe9veloppement collaboratif")," de s'y mettre avec aisance et faire de ce framework une r\xe9f\xe9rence dans la communaut\xe9 PHP."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Faites-vous une id\xe9e en commen\xe7ant par la ",(0,a.kt)("a",{parentName:"strong",href:"https://bowphp.com"},"documentation"),".")),(0,a.kt)("h2",{id:"contributing"},"Contributing"),(0,a.kt)("p",null,"Merci d'avoir envisag\xe9 de contribuer \xe0 Bow Framework! Le guide de contribution se trouve dans la documentation."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/papac"},"Franck DAKIA")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/bowphp/app/graphs/contributors"},"Merci aux collaborateurs"))),(0,a.kt)("h2",{id:"contact"},"Contact"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"mailto:dakiafranck@gmail.com"},"dakiafranck@gmail.com")," - ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/franck_dakia"},"@franck_dakia")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"S'il vous pla\xeet, s'il y a un bogue sur le projet s'il vous pla\xeet contactez-moi par courriel ou laissez-moi un message sur ",(0,a.kt)("a",{parentName:"strong",href:"https://bowphp.slack.com"},"slack")," ou ",(0,a.kt)("a",{parentName:"strong",href:"https://join.slack.com/t/bowphp/shared_invite/enQtNzMxOTQ0MTM2ODM5LTQ3MWQ3Mzc1NDFiNDYxMTAyNzBkNDJlMTgwNDJjM2QyMzA2YTk4NDYyN2NiMzM0YTZmNjU1YjBhNmJjZThiM2Q"},"rejoignez-nous sur slack"))),(0,a.kt)("h2",{id:"il-manque-quelque-chose-"},"Il manque quelque chose ?"),(0,a.kt)("p",null,"Si vous rencontrez des probl\xe8mes avec la documentation ou si vous avez des suggestions pour am\xe9liorer la documentation ou le projet en g\xe9n\xe9ral, veuillez d\xe9poser une issue pour nous, ou envoyer un tweet mentionnant le compte Twitter @BowFramework ou sur directement sur le ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bowphp/docs/issues"},"github"),"."))}u.isMDXComponent=!0}}]);