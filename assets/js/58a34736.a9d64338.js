"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3411],{3905:(e,n,s)=>{s.d(n,{Zo:()=>p,kt:()=>k});var t=s(7294);function a(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function r(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,t)}return s}function o(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?r(Object(s),!0).forEach((function(n){a(e,n,s[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))}))}return e}function l(e,n){if(null==e)return{};var s,t,a=function(e,n){if(null==e)return{};var s,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)s=r[t],n.indexOf(s)>=0||(a[s]=e[s]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)s=r[t],n.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}var i=t.createContext({}),u=function(e){var n=t.useContext(i),s=n;return e&&(s="function"==typeof e?e(n):o(o({},n),e)),s},p=function(e){var n=u(e.components);return t.createElement(i.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var s=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(s),c=a,k=d["".concat(i,".").concat(c)]||d[c]||m[c]||r;return s?t.createElement(k,o(o({ref:n},p),{},{components:s})):t.createElement(k,o({ref:n},p))}));function k(e,n){var s=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=s.length,o=new Array(r);o[0]=c;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<r;u++)o[u]=s[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,s)}c.displayName="MDXCreateElement"},7159:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var t=s(7462),a=(s(7294),s(3905));const r={id:"http-session",title:"\ud83c\udfac HTTP Session"},o=void 0,l={unversionedId:"en/http-session",id:"en/http-session",title:"\ud83c\udfac HTTP Session",description:"- Introduction",source:"@site/docs/en/session.md",sourceDirName:"en",slug:"/en/http-session",permalink:"/docs/next/en/http-session",draft:!1,editUrl:"https://crowdin.com/project/bowphp/fr",tags:[],version:"current",lastUpdatedBy:"Franck DAKIA",lastUpdatedAt:1672493455,formattedLastUpdatedAt:"31 d\xe9c. 2022",frontMatter:{id:"http-session",title:"\ud83c\udfac HTTP Session"}},i={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Utilisation",id:"utilisation",level:2},{value:"R\xe9cup\xe9ration des donn\xe9es",id:"r\xe9cup\xe9ration-des-donn\xe9es",level:3},{value:"Le helper global de session",id:"le-helper-global-de-session",level:3},{value:"R\xe9cup\xe9ration de toutes les donn\xe9es de session",id:"r\xe9cup\xe9ration-de-toutes-les-donn\xe9es-de-session",level:3},{value:"D\xe9terminer si un \xe9l\xe9ment existe dans la session",id:"d\xe9terminer-si-un-\xe9l\xe9ment-existe-dans-la-session",level:3},{value:"Stocker des donn\xe9es",id:"stocker-des-donn\xe9es",level:3},{value:"Donn\xe9es flash",id:"donn\xe9es-flash",level:2},{value:"Suppression de donn\xe9es",id:"suppression-de-donn\xe9es",level:2},{value:"Il manque quelque chose ?",id:"il-manque-quelque-chose-",level:2}],p={toc:u};function d(e){let{components:n,...s}=e;return(0,a.kt)("wrapper",(0,t.Z)({},p,s,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#introduction"},"Introduction")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#utilisation"},"Utilisation"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#r%C3%A9cup%C3%A9ration-des-donn%C3%A9es"},"R\xe9cup\xe9ration des donn\xe9es")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#le-helper-global-de-session"},"Le helper global de session")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#r%C3%A9cup%C3%A9ration-de-toutes-les-donn%C3%A9es-de-session"},"R\xe9cup\xe9ration de toutes les donn\xe9es de session")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#d%C3%A9terminer-si-un-%C3%A9l%C3%A9ment-existe-dans-la-session"},"D\xe9terminer si un \xe9l\xe9ment existe dans la session")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#stocker-des-donn%C3%A9es"},"Stocker des donn\xe9es")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#donn%C3%A9es-flash"},"Donn\xe9es flash")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#suppression-de-donn%C3%A9es"},"Suppression de donn\xe9es"))),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Les applications HTTP \xe9tant sans \xe9tat, les sessions offrent un moyen de stocker des informations sur l'utilisateur dans plusieurs requ\xeates."),(0,a.kt)("h2",{id:"utilisation"},"Utilisation"),(0,a.kt)("h3",{id:"r\xe9cup\xe9ration-des-donn\xe9es"},"R\xe9cup\xe9ration des donn\xe9es"),(0,a.kt)("p",null,"il existe deux mani\xe8res principales de travailler avec les donn\xe9es de ",(0,a.kt)("inlineCode",{parentName:"p"},"session")," dans Bow, le helper global de ",(0,a.kt)("inlineCode",{parentName:"p"},"session")," et via une instance ",(0,a.kt)("inlineCode",{parentName:"p"},"Bow\\Http\\Request"),"."),(0,a.kt)("p",null,"Premi\xe8rement, examinons l\u2019acc\xe8s \xe0 la session via une instance ",(0,a.kt)("inlineCode",{parentName:"p"},"Bow\\Http\\Request"),", qui peut \xeatre index\xe9e sur une m\xe9thode de contr\xf4leur. N'oubliez pas que les d\xe9pendances des m\xe9thodes du contr\xf4leur sont automatiquement inject\xe9es via le conteneur Bow:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"App\\Controller;\n\nuse App\\Controllers\\Controller;\nuse App\\Models\\User;\nuse Bow\\Http\\Request;\n\nclass UserController extends Controller\n{\n  /**\n   * Afficher d'un utilisateur\n   *\n   * @param Request $request\n   * @param int $id\n   * @return Response\n   */\n  public function show(Request $request, $id)\n  {\n    $value = $request->session()->get('key');\n\n    //\n  }\n}\n")),(0,a.kt)("p",null,"Lorsque vous r\xe9cup\xe9rez un \xe9l\xe9ment de la session, vous pouvez \xe9galement transmettre une valeur par d\xe9faut comme deuxi\xe8me argument de la m\xe9thode ",(0,a.kt)("inlineCode",{parentName:"p"},"get"),". Cette valeur par d\xe9faut sera renvoy\xe9e si la cl\xe9 sp\xe9cifi\xe9e n'existe pas dans la session. Si vous transmettez une ",(0,a.kt)("inlineCode",{parentName:"p"},"closure")," en tant que valeur par d\xe9faut \xe0 la m\xe9thode ",(0,a.kt)("inlineCode",{parentName:"p"},"get")," et que la cl\xe9 demand\xe9e n'existe pas, la ",(0,a.kt)("inlineCode",{parentName:"p"},"closure")," sera ex\xe9cut\xe9e et son r\xe9sultat sera renvoy\xe9:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$value = $request->session()->get('key', 'default');\n\n$value = $request->session()->get('key', function ()\n{\n  return 'default';\n});\n")),(0,a.kt)("h3",{id:"le-helper-global-de-session"},"Le helper global de session"),(0,a.kt)("p",null,"Vous pouvez \xe9galement utiliser la fonction PHP de ",(0,a.kt)("inlineCode",{parentName:"p"},"session")," globale pour r\xe9cup\xe9rer et stocker des donn\xe9es dans la session. Lorsque le helper ",(0,a.kt)("inlineCode",{parentName:"p"},"session")," est appel\xe9 avec un seul argument de cha\xeene, il renvoie la valeur de cette cl\xe9 de session. Lorsque l'assistant est appel\xe9 avec un tableau de paires cl\xe9/valeur, ces valeurs sont stock\xe9es dans la session:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$app->get('home', function ()\n{\n  // R\xe9cup\xe9rer une donn\xe9e de la session\n  $value = session('key');\n\n  // Sp\xe9cifier une valeur par d\xe9faut\n  $value = session('key', 'default');\n\n  // Stocker une donn\xe9e dans la session\n  session(['key' => 'value']);\n});\n")),(0,a.kt)("h3",{id:"r\xe9cup\xe9ration-de-toutes-les-donn\xe9es-de-session"},"R\xe9cup\xe9ration de toutes les donn\xe9es de session"),(0,a.kt)("p",null,"Si vous souhaitez r\xe9cup\xe9rer toutes les donn\xe9es de la session, vous pouvez utiliser la m\xe9thode ",(0,a.kt)("inlineCode",{parentName:"p"},"all"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$data = $request->session()->all();\n")),(0,a.kt)("h3",{id:"d\xe9terminer-si-un-\xe9l\xe9ment-existe-dans-la-session"},"D\xe9terminer si un \xe9l\xe9ment existe dans la session"),(0,a.kt)("p",null,"Pour d\xe9terminer si un \xe9l\xe9ment est pr\xe9sent dans la session, vous pouvez utiliser la m\xe9thode ",(0,a.kt)("inlineCode",{parentName:"p"},"has"),". La m\xe9thode ",(0,a.kt)("inlineCode",{parentName:"p"},"has")," renvoie true si l'\xe9l\xe9ment est pr\xe9sent et n'est pas ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"if ($request->session()->has('users')) {\n  //\n}\n")),(0,a.kt)("p",null,"Pour d\xe9terminer si un \xe9l\xe9ment est pr\xe9sent dans la session, m\xeame si sa valeur est ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),", vous pouvez utiliser la m\xe9thode ",(0,a.kt)("inlineCode",{parentName:"p"},"exists"),". La m\xe9thode ",(0,a.kt)("inlineCode",{parentName:"p"},"exists")," renvoie ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," si l'\xe9l\xe9ment est pr\xe9sent:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"if ($request->session()->exists('users')) {\n //\n}\n")),(0,a.kt)("h3",{id:"stocker-des-donn\xe9es"},"Stocker des donn\xe9es"),(0,a.kt)("p",null,"Pour stocker des donn\xe9es dans la session, vous utiliserez g\xe9n\xe9ralement la m\xe9thode ",(0,a.kt)("inlineCode",{parentName:"p"},"put")," ou le helper ",(0,a.kt)("inlineCode",{parentName:"p"},"session"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"// Via une instance de requ\xeate\n$request->session()->set('key', 'value');\n\n// Via te helper session...\nsession(['key' => 'value']);\n")),(0,a.kt)("h2",{id:"donn\xe9es-flash"},"Donn\xe9es flash"),(0,a.kt)("p",null,"Parfois, vous souhaiterez peut-\xeatre stocker des \xe9l\xe9ments dans la session uniquement pour la prochaine demande. Vous pouvez le faire en utilisant la m\xe9thode ",(0,a.kt)("inlineCode",{parentName:"p"},"flash")," ou le helper ",(0,a.kt)("inlineCode",{parentName:"p"},"flash"),". Les donn\xe9es stock\xe9es dans la session \xe0 l'aide de cette m\xe9thode ne seront disponibles que lors de la requ\xeate HTTP suivante, puis seront supprim\xe9es. Les donn\xe9es Flash sont principalement utiles pour les messages d'\xe9tat de courte dur\xe9e:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$request->session()->flash('status', 'Welcome !');\n")),(0,a.kt)("p",null,"Si vous devez supprimer vos donn\xe9es Flash, vous pouvez utiliser la m\xe9thode de ",(0,a.kt)("inlineCode",{parentName:"p"},"clearFlash"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$request->session()->clearFlash();\n")),(0,a.kt)("h2",{id:"suppression-de-donn\xe9es"},"Suppression de donn\xe9es"),(0,a.kt)("p",null,"La m\xe9thode de ",(0,a.kt)("inlineCode",{parentName:"p"},"remove")," supprimera une donn\xe9e de la session. Si vous souhaitez supprimer toutes les donn\xe9es de la session, vous pouvez utiliser la m\xe9thode ",(0,a.kt)("inlineCode",{parentName:"p"},"flush"),". Si par contre vous souhaitez supprimer tout les informations sauf les informations de flash, vous pouvez utiliser la m\xe9thode ",(0,a.kt)("inlineCode",{parentName:"p"},"clear"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"// Supprimer une donn\xe9e de la session\n$request->session()->remove('key');\n\n// Supprimer tout les informations sauf les informations de flash\n$request->session()->clear();\n\n// Supprimer toutes les donn\xe9es de la session\n$request->session()->flush();\n")),(0,a.kt)("h2",{id:"il-manque-quelque-chose-"},"Il manque quelque chose ?"),(0,a.kt)("p",null,"Si vous rencontrez des probl\xe8mes avec la documentation ou si vous avez des suggestions pour am\xe9liorer la documentation ou le projet en g\xe9n\xe9ral, veuillez d\xe9poser une issue pour nous, ou envoyer un tweet mentionnant le compte Twitter @BowFramework ou sur directement sur le ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bowphp/docs/issues"},"github"),"."))}d.isMDXComponent=!0}}]);