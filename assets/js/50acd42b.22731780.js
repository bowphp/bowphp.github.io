"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3058],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=i,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2037:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const a={id:"frontend",title:"\ud83d\udcef Front-End"},o=void 0,l={unversionedId:"en/frontend",id:"en/frontend",title:"\ud83d\udcef Front-End",description:"- Introduction",source:"@site/docs/en/frontend.md",sourceDirName:"en",slug:"/en/frontend",permalink:"/docs/next/en/frontend",draft:!1,editUrl:"https://github.com/bowphp/docs/edit/main/website/docs/en/frontend.md",tags:[],version:"current",lastUpdatedBy:"Franck DAKIA",lastUpdatedAt:1672493455,formattedLastUpdatedAt:"Dec 31, 2022",frontMatter:{id:"frontend",title:"\ud83d\udcef Front-End"}},c={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Utilisation",id:"utilisation",level:2},{value:"Compilation simplement",id:"compilation-simplement",level:3},{value:"Compilation et minification les fichiers sources",id:"compilation-et-minification-les-fichiers-sources",level:3},{value:"Surveiller le changement de fichier et r\xe9compile en fonction",id:"surveiller-le-changement-de-fichier-et-r\xe9compile-en-fonction",level:3},{value:"Pour lancer code sniffer",id:"pour-lancer-code-sniffer",level:3},{value:"Webpack.mix.js",id:"webpackmixjs",level:2},{value:"Il manque quelque chose ?",id:"il-manque-quelque-chose-",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#introduction"},"Introduction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#utilisation"},"Utilisation"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#compilation-simplement"},"Compilation simplement")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#compilation-et-minification-les-fichiers-sources"},"Compilation et minification les fichiers sources")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#surveiller-le-changement-de-fichier-et-r%C3%A9compile-en-fonction"},"Surveiller le changement de fichier et r\xe9compile en fonction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#pour-lancer-code-sniffer"},"Pour lancer code sniffer")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#webpackmixjs"},"Webpack.mix.js"))),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Bow est preset (Pr\xe9configur\xe9) avec un environement Frontend, notamment avec ",(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org"},"Reacjs"),", ",(0,i.kt)("a",{parentName:"p",href:"https://vuejs.org"},"Vuejs")," et ",(0,i.kt)("a",{parentName:"p",href:"https://sass-lang.com"},"Sass")," base sur le package ",(0,i.kt)("a",{parentName:"p",href:"https://laravel-mix.com"},"laravel-mix"),". Ce qui permet d'acc\xe9l\xe9rer le d\xe9veloppement d'application web."),(0,i.kt)("h2",{id:"utilisation"},"Utilisation"),(0,i.kt)("p",null,"Pour lancer la compilation, allez dans la racine de votre application et taper ",(0,i.kt)("inlineCode",{parentName:"p"},"npm install")," ou ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn install")," dans votre console, en fonction du gestionnaire de package que vous utilisez."),(0,i.kt)("h3",{id:"compilation-simplement"},"Compilation simplement"),(0,i.kt)("p",null,"Lance la compilation des fichirs d\xe9finient dans ",(0,i.kt)("inlineCode",{parentName:"p"},"webpack.mix.js"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run dev\n")),(0,i.kt)("h3",{id:"compilation-et-minification-les-fichiers-sources"},"Compilation et minification les fichiers sources"),(0,i.kt)("p",null,"Compile les sources d\xe9finient dans ",(0,i.kt)("inlineCode",{parentName:"p"},"webpack.mix.js")," et optimise les fichiers."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run prod\n")),(0,i.kt)("h3",{id:"surveiller-le-changement-de-fichier-et-r\xe9compile-en-fonction"},"Surveiller le changement de fichier et r\xe9compile en fonction"),(0,i.kt)("p",null,"Ceci permet de surveiller le changement des fichiers d\xe9finient dans webpack.mix.js et ensuite r\xe9lance la compilation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run watch\n")),(0,i.kt)("h3",{id:"pour-lancer-code-sniffer"},"Pour lancer code sniffer"),(0,i.kt)("p",null,"Code sniffer c'est un outil qui permet de formater le code, valid\xe9 sa qualit\xe9 et r\xe9organis\xe9 votre code dans le standard de d\xe9velopement (Ici me standard c'est le ",(0,i.kt)("inlineCode",{parentName:"p"},"psr-2"),")."),(0,i.kt)("p",null,"Cette commande va aussi lancer ",(0,i.kt)("inlineCode",{parentName:"p"},"format")," qui est simple outil de validation synthaxique pour PHP."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run format\n")),(0,i.kt)("h2",{id:"webpackmixjs"},"Webpack.mix.js"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"webpack.mix.js")," est une fichier qui vous permet de d\xe9finir les fichiers JavaScript, JSx et Sass \xe0 compiler et est pr\xe9configur\xe9 comme suit:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"mix.react('frontend/js/app.js', 'public/js')\n  .sass('frontend/js/app.scss', 'public/css');\n")),(0,i.kt)("p",null,"Pour plus d'information sur ",(0,i.kt)("a",{parentName:"p",href:"https://laravel-mix.com/docs/4.0/basic-example"},"laravel-mix"),"."),(0,i.kt)("h2",{id:"il-manque-quelque-chose-"},"Il manque quelque chose ?"),(0,i.kt)("p",null,"Si vous rencontrez des probl\xe8mes avec la documentation ou si vous avez des suggestions pour am\xe9liorer la documentation ou le projet en g\xe9n\xe9ral, veuillez d\xe9poser une issue pour nous, ou envoyer un tweet mentionnant le compte Twitter @BowFramework ou sur directement sur le ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bowphp/docs/issues"},"github"),"."))}u.isMDXComponent=!0}}]);