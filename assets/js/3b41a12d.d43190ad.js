"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5132],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(k,l(l({ref:t},d),{},{components:n})):r.createElement(k,l({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9647:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={id:"seeding",title:"\ud83d\udc89 Seeding"},l=void 0,i={unversionedId:"seeding",id:"version-4.x/seeding",title:"\ud83d\udc89 Seeding",description:"- Introduction",source:"@site/versioned_docs/version-4.x/seeding.md",sourceDirName:".",slug:"/seeding",permalink:"/docs/seeding",draft:!1,editUrl:"https://crowdin.com/project/bowphp/fr",tags:[],version:"4.x",lastUpdatedBy:"Franck DAKIA",lastUpdatedAt:1672493455,formattedLastUpdatedAt:"31 d\xe9c. 2022",frontMatter:{id:"seeding",title:"\ud83d\udc89 Seeding"},sidebar:"docs",previous:{title:"\ud83d\udcd1 Migration",permalink:"/docs/migration"},next:{title:"\ud83d\ude80 HTTP Request",permalink:"/docs/http-request"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Ajouter un seeder",id:"ajouter-un-seeder",level:2},{value:"Lancer le seeding",id:"lancer-le-seeding",level:2},{value:"Helper",id:"helper",level:2},{value:"Il manque quelque chose ?",id:"il-manque-quelque-chose-",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#introduction"},"Introduction")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#ajouter-un-seeder"},"Ajouter un seeder")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#lancer-le-seeding"},"Lancer le seeding")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#helper"},"Helper"))),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Le seeding est un m\xe9canisme qui vous permettra d'hydrater votre base de donn\xe9e pour pouvoir l'utiliser dans votre d\xe9veloppement. Le seeding dans Bow est associer \xe0 une table lors de la cr\xe9ation."),(0,a.kt)("h2",{id:"ajouter-un-seeder"},"Ajouter un seeder"),(0,a.kt)("p",null,"Pour ajouter un seeder on passe par ",(0,a.kt)("inlineCode",{parentName:"p"},"php bow")," avec la commande ",(0,a.kt)("inlineCode",{parentName:"p"},"add:seeder")," ensuite le nom de la table."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"php bow add:seeder pets\n")),(0,a.kt)("p",null,"Un fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"pets_seeder.php")," sera cr\xe9\xe9 dans le dossier ",(0,a.kt)("inlineCode",{parentName:"p"},"seeders"),". En voici le contenu:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * The pets seeder\n *\n * @see https://github.com/fzaninotto/Faker for all documentation\n */\n$faker = \\Faker\\Factory::create();\n\n$seeds['pets'] = [];\n\nforeach (range(1, 5) as $key) {\n  $seeds['pets'][] = [\n    'name' => $faker->name,\n    'created_at' => date('Y-m-d H:i:s'),\n    'updated_at' => date('Y-m-d H:i:s'),\n  ];\n}\n\nreturn $seeds;\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"La cl\xe9 ",(0,a.kt)("inlineCode",{parentName:"p"},"pets")," est le nom de la table du seeding.")),(0,a.kt)("h2",{id:"lancer-le-seeding"},"Lancer le seeding"),(0,a.kt)("p",null,"Pour lancer le seeding on utilise la commande ",(0,a.kt)("inlineCode",{parentName:"p"},"seed:table")," suivi du nom de la table."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"php bow seed:table pets\n")),(0,a.kt)("p",null,"Vous avez la possibilit\xe9 de lancer tout les seeding avec la commande ",(0,a.kt)("inlineCode",{parentName:"p"},"seed:all"),". Cela fera le seeding de tout les fichiers dans ",(0,a.kt)("inlineCode",{parentName:"p"},"seeders"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"php bow seed:all\n")),(0,a.kt)("h2",{id:"helper"},"Helper"),(0,a.kt)("p",null,"Souvent vous sera tente de faire des seedins lorsque vous testez votre application. Le helper ",(0,a.kt)("inlineCode",{parentName:"p"},"db_seed"),", tr\xe8s pratique vous permettra de faire des seeding en plein test par exemlpe"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},'db_seed("user", $overrides = ["name" => "Franck"]);\n')),(0,a.kt)("p",null,"Avec ",(0,a.kt)("inlineCode",{parentName:"p"},"$overrides")," vous pouvez modifier des valeurs du seeding."),(0,a.kt)("h2",{id:"il-manque-quelque-chose-"},"Il manque quelque chose ?"),(0,a.kt)("p",null,"Si vous rencontrez des probl\xe8mes avec la documentation ou si vous avez des suggestions pour am\xe9liorer la documentation ou le projet en g\xe9n\xe9ral, veuillez d\xe9poser une issue pour nous, ou envoyer un tweet mentionnant le compte Twitter @BowFramework ou sur directement sur le ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bowphp/docs/issues"},"github"),"."))}u.isMDXComponent=!0}}]);