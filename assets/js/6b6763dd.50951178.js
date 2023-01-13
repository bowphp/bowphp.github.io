"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7190],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[m]="string"==typeof e?e:o,a[1]=u;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5313:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294);const o=()=>r.createElement(r.Fragment,null,r.createElement("h2",null,"Il manque quelque chose ?"),r.createElement("p",null,"Si vous rencontrez des probl\xe8mes avec la documentation ou si vous avez des suggestions pour am\xe9liorer la documentation ou le projet en g\xe9n\xe9ral, veuillez d\xe9poser une issue pour nous, ou envoyer un tweet mentionnant le compte Twitter"," ",r.createElement("a",{href:"https://twitter.com/@bowframework"},"@bowframework")," ou sur directement sur le"," ",r.createElement("a",{href:"https://github.com/bowphp/docs/issues"},"github"),"."))},2250:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905)),i=n(5313);const a={id:"contribution",title:"\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf73 Guide de Contribution"},u=void 0,s={unversionedId:"contribution",id:"contribution",title:"\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf73 Guide de Contribution",description:"- Introduction",source:"@site/docs/contribution.mdx",sourceDirName:".",slug:"/contribution",permalink:"/docs/next/contribution",draft:!1,editUrl:"https://crowdin.com/project/bowphp/fr",tags:[],version:"current",lastUpdatedBy:"Franck DAKIA",lastUpdatedAt:1673138992,formattedLastUpdatedAt:"8 janv. 2023",frontMatter:{id:"contribution",title:"\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf73 Guide de Contribution"},sidebar:"docs",previous:{title:"\u2699\ufe0f App Structure",permalink:"/docs/next/structure"},next:{title:"\ud83d\udea6 Routing",permalink:"/docs/next/routing"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Processus de contribution",id:"processus-de-contribution",level:2},{value:"Format des messages de commit",id:"format-des-messages-de-commit",level:2}],m={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#introduction"},"Introduction")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#processus-de-contribution"},"Processus de contribution")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#format-des-messages-de-commit"},"Format des messages de commit")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#il-manque-quelque-chose-"},"Il manque quelque chose ?"))),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Les contributions sont les bienvenues et seront enti\xe8rement cr\xe9dit\xe9es. Si vous voulez contribuer au projet, veuillez d'abord discuter\ndes changements que vous voulez apporter via email, en cr\xe9ant une issue sur github, avec les responsables du d\xe9p\xf4t avant\nde coder votre solution."),(0,o.kt)("p",null,"Veuillez s'il vous pla\xeet vous conformer au code de conduite lors de vos interactions sur ce projet."),(0,o.kt)("p",null,"Nous acceptons les contributions via Pull Request sur ",(0,o.kt)("a",{parentName:"p",href:"https://github.com"},"GitHub"),"."),(0,o.kt)("h2",{id:"processus-de-contribution"},"Processus de contribution"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fork le projet"),(0,o.kt)("li",{parentName:"ul"},"Cr\xe9ez une branche avec un nom descriptif de vos modifications"),(0,o.kt)("li",{parentName:"ul"},"Utilisez des messages de commits descriptifs"),(0,o.kt)("li",{parentName:"ul"},"Ajoutez des test unitaires"),(0,o.kt)("li",{parentName:"ul"},"Documentez vos modifications - Assurez vous que la documentation est mise \xe0 jour selon vos modifications"),(0,o.kt)("li",{parentName:"ul"},"Un pull request par fonctionnalit\xe9 - Si vous voulez faire plus d'une chose, faites plusieurs pull requests"),(0,o.kt)("li",{parentName:"ul"},"Mettez \xe0 jour la version - Nous suivons le schema SemVer")),(0,o.kt)("h2",{id:"format-des-messages-de-commit"},"Format des messages de commit"),(0,o.kt)("p",null,"Pour faciliter la maintenance du d\xe9p\xf4t, Bow utilise un format pour les messages de commits."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"change")," pour ajouter un changement sur un functionnement"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"fix")," pour fixer une bug"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"feat")," pour ajouter une nouvelle fonctionnalit\xe9")),(0,o.kt)("p",null,"Veuillez vous r\xe9f\xe9rer \xe0 l'exemple suivant:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git commit\n")),(0,o.kt)("p",null,"Dans votre \xe9diteur"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"change(module_name): your commit message\n\nDescription\n")),(0,o.kt)("p",null,"Si la modification affecte une section:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'git commit -m "change(session): rename init variable"\n')),(0,o.kt)("p",null,"Si la modification affecte un \xe9l\xe9ment dans une section:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'git commit -m "fix(http:request): bug fix #40"\n')),(0,o.kt)("p",null,"Dans le cas o\xf9 vos modifications affectent plusieurs sections, ajoutez une description avec votre commit sous forme de liste \xe0 puce."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Notez que les messages de commit doivent \xeatre en anglais.")),(0,o.kt)(i.Z,{mdxType:"SuggestionFeature"}))}p.isMDXComponent=!0}}]);