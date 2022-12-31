"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7613],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),u=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(p.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(t),m=r,k=s["".concat(p,".").concat(m)]||s[m]||d[m]||o;return t?a.createElement(k,i(i({ref:n},c),{},{components:t})):a.createElement(k,i({ref:n},c))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[s]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4305:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=t(7462),r=(t(7294),t(3905));const o={id:"package",title:"\ud83d\udce6 Bow Package"},i=void 0,l={unversionedId:"package",id:"version-4.x/package",title:"\ud83d\udce6 Bow Package",description:"- Introduction",source:"@site/versioned_docs/version-4.x/package.md",sourceDirName:".",slug:"/package",permalink:"/docs/package",draft:!1,editUrl:"https://crowdin.com/project/bowphp/fr",tags:[],version:"4.x",lastUpdatedBy:"Franck DAKIA",lastUpdatedAt:1672493455,formattedLastUpdatedAt:"31 d\xe9c. 2022",frontMatter:{id:"package",title:"\ud83d\udce6 Bow Package"},sidebar:"docs",previous:{title:"\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbb Bow Console",permalink:"/docs/console"}},p={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Cr\xe9ation de plugin",id:"cr\xe9ation-de-plugin",level:2},{value:"Exemple de cr\xe9ation",id:"exemple-de-cr\xe9ation",level:3},{value:"Testons notre package",id:"testons-notre-package",level:3},{value:"Il manque quelque chose ?",id:"il-manque-quelque-chose-",level:2}],c={toc:u};function s(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#introduction"},"Introduction")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#cr%C3%A9ation-de-plugin"},"Cr\xe9ation de plugin"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#exemple-de-cr%C3%A9ation"},"Exemple de cr\xe9ation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#testons-notre-package"},"Testons notre package")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#il-manque-quelque-chose-"},"Il manque quelque chose ?"))),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Ce syst\xe8me permet d'\xe9tendre votre application, de gr\xe9ffer des package externe dans une application Bow."),(0,r.kt)("h2",{id:"cr\xe9ation-de-plugin"},"Cr\xe9ation de plugin"),(0,r.kt)("p",null,"Si vous avez une application Bow, il vous suffit de faire la cr\xe9ation via ",(0,r.kt)("inlineCode",{parentName:"p"},"php bow")," et lancer la commande ",(0,r.kt)("inlineCode",{parentName:"p"},"add:configuration")," ensuite vous donnez le nom de votre configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"php bow add:configuration PluginConfiguration\n")),(0,r.kt)("p",null,"Le fichier ",(0,r.kt)("inlineCode",{parentName:"p"},"PluginConfiguration.php")," sera cr\xe9\xe9 dans le dossier ",(0,r.kt)("inlineCode",{parentName:"p"},"app/Configuration")," qui contient deux m\xe9thode ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," et ",(0,r.kt)("inlineCode",{parentName:"p"},"run"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"create")," permet d'initialiser le package"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"run")," permet de lancer d'initialisation le package.")),(0,r.kt)("p",null,"Dans l'initialisation des packages c'est la methode create qui ce lancera avant pour tous le autre packages qui seront defini au dessus dans votre configuration ensuite la methode run sera sera dans le meme orde."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"N'Essayez pas de contacter un package ici si vous attendez qu'il soit dabort configurer.")),(0,r.kt)("p",null,"Dans le fichier de configuration, Bow va inject\xe9 le ",(0,r.kt)("a",{parentName:"p",href:"https://fr.wikipedia.org/wiki/Injection_de_d%C3%A9pendances"},"DIC")," et sera acc\xe9ssible via la propr\xe9t\xe9 ",(0,r.kt)("inlineCode",{parentName:"p"},"$this->container"),". Plus d'information sur le ",(0,r.kt)("a",{parentName:"p",href:"/docs/container"},"DIC")," de Bow."),(0,r.kt)("h3",{id:"exemple-de-cr\xe9ation"},"Exemple de cr\xe9ation"),(0,r.kt)("p",null,"Vous allons faire un plugin aui va v\xe9rifier un email, alors on cr\xe9e la configuration avec le nom ",(0,r.kt)("inlineCode",{parentName:"p"},"EmailCheckerConfiguration"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Notez que c'est un exemple pour vous montrez comment vous ici prendre, cet exemple dans un vrai projet aurai pu \xeatre traiter autrement.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"php bow add:configuration EmailCheckerConfiguration\n")),(0,r.kt)("p",null,"Dans le dossier ",(0,r.kt)("inlineCode",{parentName:"p"},"app")," nous allons ajouter un dossier ",(0,r.kt)("inlineCode",{parentName:"p"},"Packages")," dans ce dossier, nous allons encore ajouter le fichier ",(0,r.kt)("inlineCode",{parentName:"p"},"EmailCheckController.php"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Packages;\n\nuse Bow\\Http\\Request;\nuse Bow\\Support\\Str;\n\nclass EmailCheckController\n{\n  /**\n   * Check the email\n   *\n   * @param Request $request\n   * @return mixed\n   */\n  public function __invoke(Request $request)\n  {\n    $email = $request->get('email');\n\n    if (Str::isMail($email)) {\n      $response = [\n        'message' => 'Ok',\n        'error' => false\n      ];\n    } else {\n      $response = [\n        'message' => 'C\\'est un mauvais email !',\n        'error' => true\n      ];\n    }\n\n    return $response;\n  }\n}\n")),(0,r.kt)("p",null,"Vous allons maintenant cr\xe9er note configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Configurations;\n\nuse Bow\\Configuration\\Loader;\nuse Bow\\Configuration\\Configuration;\n\nclass EmailCheckController extends Configuration\n{\n  /**\n   * Permet de lancement de configuration\n   *\n   * @return void\n   */\n  public function run()\n  {\n    $this->container->make('app')->post(\n      '/email/checker', \\App\\Packages\\EmailCheckController::class\n    );\n  }\n}\n")),(0,r.kt)("p",null,"Allons tester notre application Bow Framework avec la commande ",(0,r.kt)("inlineCode",{parentName:"p"},"php bow run:server")," pour lancer le serveur de d\xe9veloppement."),(0,r.kt)("h3",{id:"testons-notre-package"},"Testons notre package"),(0,r.kt)("p",null,"Pour cette exemple nous allons texter node code avec ",(0,r.kt)("inlineCode",{parentName:"p"},"curl"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST -d "email=exemple@exemple.com" http://localhost:5000/email/checker\n# {"message": "Ok", "error": false}\n')),(0,r.kt)("h2",{id:"il-manque-quelque-chose-"},"Il manque quelque chose ?"),(0,r.kt)("p",null,"Si vous rencontrez des probl\xe8mes avec la documentation ou si vous avez des suggestions pour am\xe9liorer la documentation ou le projet en g\xe9n\xe9ral, veuillez d\xe9poser une issue pour nous, ou envoyer un tweet mentionnant le compte Twitter @BowFramework ou sur directement sur le ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bowphp/docs/issues"},"github"),"."))}s.isMDXComponent=!0}}]);