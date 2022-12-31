"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[265],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),p=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,k=d["".concat(o,".").concat(m)]||d[m]||c[m]||s;return r?a.createElement(k,l(l({ref:t},u),{},{components:r})):a.createElement(k,l({ref:t},u))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,l=new Array(s);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[d]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<s;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1853:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const s={id:"structure",title:"\u2699\ufe0f App Structure"},l=void 0,i={unversionedId:"en/structure",id:"en/structure",title:"\u2699\ufe0f App Structure",description:"- Structure globale",source:"@site/docs/en/structure.md",sourceDirName:"en",slug:"/en/structure",permalink:"/docs/next/en/structure",draft:!1,editUrl:"https://crowdin.com/project/bowphp/fr",tags:[],version:"current",lastUpdatedBy:"Franck DAKIA",lastUpdatedAt:1672493455,formattedLastUpdatedAt:"31 d\xe9c. 2022",frontMatter:{id:"structure",title:"\u2699\ufe0f App Structure"}},o={},p=[{value:"Structure globale",id:"structure-globale",level:2},{value:"Dossier app",id:"dossier-app",level:2},{value:"Dossier frontend",id:"dossier-frontend",level:2},{value:"Dossiers migrations et seeders",id:"dossiers-migrations-et-seeders",level:2},{value:"Dossier var",id:"dossier-var",level:2},{value:"Dossier tests",id:"dossier-tests",level:2},{value:"Il manque quelque chose ?",id:"il-manque-quelque-chose-",level:2}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#structure-globale"},"Structure globale")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#dossier-app"},"Dossier app")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#dossier-frontend"},"Dossier frontend")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#dossiers-migrations-et-seeders"},"Dossiers migrations et seeders")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#dossier-var"},"Dossier var")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#dossier-tests"},"Dossier tests"))),(0,n.kt)("h2",{id:"structure-globale"},"Structure globale"),(0,n.kt)("p",null,"Bow Framework se conforme au mod\xe8le ",(0,n.kt)("em",{parentName:"p"},"MVC")," (",(0,n.kt)("em",{parentName:"p"},"M"),"od\xe8le ",(0,n.kt)("em",{parentName:"p"},"V"),"ue ",(0,n.kt)("em",{parentName:"p"},"C"),"ontr\xf4leur)."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Dossier"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"app")),(0,n.kt)("td",{parentName:"tr",align:null},"Contient la logique principale de votre application. Presque toutes les classes de votre application seront dans ce dossier")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"frontend")),(0,n.kt)("td",{parentName:"tr",align:null},"Contient les scripts et fichiers de styles de l'application. Il contient entre autre le dossier ",(0,n.kt)("inlineCode",{parentName:"td"},"js"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"sass"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"lang"),". C'est l\xe0 que vous allez mettre vos fichiers static et ensuite les compiler")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"templates")),(0,n.kt)("td",{parentName:"tr",align:null},"Contient les vues de votre application")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"config")),(0,n.kt)("td",{parentName:"tr",align:null},"Contient les diff\xe9rents fichier de configuration des composants de l'application.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"migrations")),(0,n.kt)("td",{parentName:"tr",align:null},"Dossier dans lequel sera sauvegard\xe9 les migrations de votre application")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"seeders")),(0,n.kt)("td",{parentName:"tr",align:null},"Dossier dans lequel sera sauvegard\xe9 les seeding de votre application")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"public")),(0,n.kt)("td",{parentName:"tr",align:null},"Le front contr\xf4leur et les fichiers compil\xe9s sont stock\xe9s dans ce dossier.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"routes")),(0,n.kt)("td",{parentName:"tr",align:null},"Contient les routes de votre applications")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"var")),(0,n.kt)("td",{parentName:"tr",align:null},"Contient le dossier dans lequel est sauvegard\xe9 les ",(0,n.kt)("inlineCode",{parentName:"td"},"cache"),", les ",(0,n.kt)("inlineCode",{parentName:"td"},"log")," et le stockage de fichier t\xe9l\xe9charger via le syst\xe8me de ",(0,n.kt)("inlineCode",{parentName:"td"},"Storage")," de Bow.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"tests")),(0,n.kt)("td",{parentName:"tr",align:null},"Contient les tests de l'application.")))),(0,n.kt)("h2",{id:"dossier-app"},"Dossier app"),(0,n.kt)("p",null,"C'est votre r\xe9pertoire de travail sur bow. C'est l\xe0 que vous allez ins\xe9rer tous les fichiers de votre application."),(0,n.kt)("p",null,"Ici vous retrouverez les dossiers suivants:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Configurations"),": Dossier dans lequel sera sauvegard\xe9 les Configuration personnalis\xe9s de l'application."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Controllers"),": Dossier dans lequel sera sauvegard\xe9 les contr\xf4leurs de l'application."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Middlewares"),": Dossier dans lequel sera sauvegard\xe9 les middlewares de l'application."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Models"),": Dossier dans lequel sera sauvegard\xe9 les mod\xe8les de l'application."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Validations"),": Dossier dans lequel sera sauvegard\xe9 les validations de l'application."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Exceptions"),": Dossier dans lequel sera sauvegard\xe9 les exceptions personnalis\xe9s de l'application."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Services"),": Dossier dans lequel sera sauvegard\xe9 les services g\xe9n\xe9r\xe9s par Bow Console.")),(0,n.kt)("p",null,"Vous trouverez aussi les fichiers suivants:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Kernel.php"),": La configuration du lanceur de l'application.")),(0,n.kt)("h2",{id:"dossier-frontend"},"Dossier frontend"),(0,n.kt)("p",null,"C'est l\xe0 que vous allez ins\xe9rer tous les fichiers qui sont utilis\xe9 dans les vues de votre application. Vous y retrouverez les dossiers suivant:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"js"),": Votre fichier ",(0,n.kt)("inlineCode",{parentName:"li"},"Javascript")," seront sauvegard\xe9s ici."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"sass"),": Votre ficher scss seront sauvegard\xe9s ici."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"lang"),": Dossier dans lequel les locales de votre application seront sauvegard\xe9s.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Consultez la section ",(0,n.kt)("a",{parentName:"p",href:"./frontend"},"webpack.mix.js"))),(0,n.kt)("h2",{id:"dossiers-migrations-et-seeders"},"Dossiers migrations et seeders"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"migrations"),": Regroupe tout les fichiers de migration de la base de donn\xe9e."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"seeders"),": Regroupe tout les fichiers permettant d'entrer des donn\xe9es de test dans votre base de donn\xe9es.")),(0,n.kt)("h2",{id:"dossier-var"},"Dossier var"),(0,n.kt)("p",null,"Ici, Bow va stocker les fichiers de log et le cache de votre application. Vous y retrouverez les dossiers suivant:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"storage"),": Dossier dans lequel l'application sauvegarde les fichiers t\xe9l\xe9charg\xe9 de l'application"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"logs"),": Dossier dans lequel est sauvegard\xe9 les logs de l'application."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"session"),": Dossier dans lequel est sauvegard\xe9 les fichiers de session de l'application."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"cache"),": Dossier dans lequel l'application sauvegarde les caches de l'application"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"view"),": Dossier dans lequel l'application sauvegarde le cache de compilation des vues")),(0,n.kt)("h2",{id:"dossier-tests"},"Dossier tests"),(0,n.kt)("p",null,"Ici, vous allez stocker vos fichiers de test unity. Et par soucie de bien faire nous avons:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Http"),": Vos sauvegarder vos fichiers de test Http seront ici"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"view"),": Vos fichiers de test Unity seront ici")),(0,n.kt)("h2",{id:"il-manque-quelque-chose-"},"Il manque quelque chose ?"),(0,n.kt)("p",null,"Si vous rencontrez des probl\xe8mes avec la documentation ou si vous avez des suggestions pour am\xe9liorer la documentation ou le projet en g\xe9n\xe9ral, veuillez d\xe9poser une issue pour nous, ou envoyer un tweet mentionnant le compte Twitter @BowFramework ou sur directement sur le ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/bowphp/docs/issues"},"github"),"."))}d.isMDXComponent=!0}}]);