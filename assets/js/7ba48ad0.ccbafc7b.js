"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4691],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?o.createElement(f,u(u({ref:t},c),{},{components:n})):o.createElement(f,u({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,u=new Array(i);u[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[m]="string"==typeof e?e:r,u[1]=a;for(var l=2;l<i;l++)u[l]=n[l];return o.createElement.apply(null,u)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2770:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const i={id:"contribution",title:"\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf73 Guide de Contribution"},u=void 0,a={unversionedId:"contribution",id:"version-4.x/contribution",title:"\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf73 Guide de Contribution",description:"- Introduction",source:"@site/versioned_docs/version-4.x/contribution.md",sourceDirName:".",slug:"/contribution",permalink:"/docs/contribution",draft:!1,editUrl:"https://github.com/bowphp/docs/edit/main/website/docs/contribution.md",tags:[],version:"4.x",lastUpdatedBy:"Franck DAKIA",lastUpdatedAt:1672493455,formattedLastUpdatedAt:"Dec 31, 2022",frontMatter:{id:"contribution",title:"\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf73 Guide de Contribution"},sidebar:"docs",previous:{title:"\ud83d\udc69\ud83c\udfff\u200d\ud83c\udfeb Avec un tutoriel",permalink:"/docs/tutorial"},next:{title:"\ud83d\udea6 Routing",permalink:"/docs/routing"}},s={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Processus de contribution",id:"processus-de-contribution",level:2},{value:"Format des messages de commit",id:"format-des-messages-de-commit",level:2},{value:"Il manque quelque chose ?",id:"il-manque-quelque-chose-",level:2}],c={toc:l};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#introduction"},"Introduction")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#processus-de-contribution"},"Processus de contribution")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#format-des-messages-de-commit"},"Format des messages de commit")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#il-manque-quelque-chose-"},"Il manque quelque chose ?"))),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Les contributions sont les bienvenues et seront enti\xe8rement cr\xe9dit\xe9es. Si vous voulez contribuer au projet, veuillez d'abord discuter\ndes changements que vous voulez apporter via email, en cr\xe9ant une issue sur github, avec les responsables du d\xe9p\xf4t avant\nde coder votre solution."),(0,r.kt)("p",null,"Veuillez s'il vous pla\xeet vous conformer au code de conduite lors de vos interactions sur ce projet."),(0,r.kt)("p",null,"Nous acceptons les contributions via Pull Request sur ",(0,r.kt)("a",{parentName:"p",href:"https://github.com"},"GitHub"),"."),(0,r.kt)("h2",{id:"processus-de-contribution"},"Processus de contribution"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fork le projet"),(0,r.kt)("li",{parentName:"ul"},"Cr\xe9ez une branche avec un nom descriptif de vos modifications"),(0,r.kt)("li",{parentName:"ul"},"Utilisez des messages de commits descriptifs"),(0,r.kt)("li",{parentName:"ul"},"Ajoutez des test unitaires"),(0,r.kt)("li",{parentName:"ul"},"Documentez vos modifications - Assurez vous que la documentation est mise \xe0 jour selon vos modifications"),(0,r.kt)("li",{parentName:"ul"},"Un pull request par fonctionnalit\xe9 - Si vous voulez faire plus d'une chose, faites plusieurs pull requests"),(0,r.kt)("li",{parentName:"ul"},"Mettez \xe0 jour la version - Nous suivons le schema SemVer")),(0,r.kt)("h2",{id:"format-des-messages-de-commit"},"Format des messages de commit"),(0,r.kt)("p",null,"Pour faciliter la maintenance du d\xe9p\xf4t, Bow utilise un format pour les messages de commits."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"change")," pour ajouter un changement sur un functionnement"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fix")," pour fixer une bug"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"feat")," pour ajouter une nouvelle fonctionnalit\xe9")),(0,r.kt)("p",null,"Veuillez vous r\xe9f\xe9rer \xe0 l'exemple suivant:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"git commit\n")),(0,r.kt)("p",null,"Dans votre \xe9diteur"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"change(module_name): your commit message\n\nDescription\n")),(0,r.kt)("p",null,"Si la modification affecte une section:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'git commit -m "change(session): rename init variable"\n')),(0,r.kt)("p",null,"Si la modification affecte un \xe9l\xe9ment dans une section:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'git commit -m "fix(http:request): bug fix #40"\n')),(0,r.kt)("p",null,"Dans le cas o\xf9 vos modifications affectent plusieurs sections, ajoutez une description avec votre commit sous forme de liste \xe0 puce."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Notez que les messages de commit doivent \xeatre en anglais.")),(0,r.kt)("h2",{id:"il-manque-quelque-chose-"},"Il manque quelque chose ?"),(0,r.kt)("p",null,"Si vous rencontrez des probl\xe8mes avec la documentation ou si vous avez des suggestions pour am\xe9liorer la documentation ou le projet en g\xe9n\xe9ral, veuillez d\xe9poser une issue pour nous, ou envoyer un tweet mentionnant le compte Twitter @BowFramework ou sur directement sur le ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bowphp/docs/issues"},"github"),"."))}m.isMDXComponent=!0}}]);