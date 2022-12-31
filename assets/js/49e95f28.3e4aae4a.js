"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[129],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>w});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=u(n),c=a,w=p["".concat(o,".").concat(c)]||p[c]||m[c]||l;return n?r.createElement(w,i(i({ref:t},s),{},{components:n})):r.createElement(w,i({ref:t},s))}));function w(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[p]="string"==typeof e?e:a,i[1]=d;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7466:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={id:"middleware",title:"\ud83d\udea5 Middleware"},i=void 0,d={unversionedId:"en/middleware",id:"en/middleware",title:"\ud83d\udea5 Middleware",description:"- Introduction",source:"@site/docs/en/middleware.md",sourceDirName:"en",slug:"/en/middleware",permalink:"/docs/next/en/middleware",draft:!1,editUrl:"https://github.com/bowphp/docs/edit/main/website/docs/en/middleware.md",tags:[],version:"current",lastUpdatedBy:"Franck DAKIA",lastUpdatedAt:1672493455,formattedLastUpdatedAt:"Dec 31, 2022",frontMatter:{id:"middleware",title:"\ud83d\udea5 Middleware"}},o={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Comment \xe7a marche",id:"comment-\xe7a-marche",level:2},{value:"Ajouter un middleware",id:"ajouter-un-middleware",level:2},{value:"Enregistrement de middleware",id:"enregistrement-de-middleware",level:2},{value:"Utiliser le middleware",id:"utiliser-le-middleware",level:2},{value:"Il manque quelque chose ?",id:"il-manque-quelque-chose-",level:2}],s={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#introduction"},"Introduction")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#comment-%C3%A7a-marche"},"Comment \xe7a marche")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#ajouter-un-middleware"},"Ajouter un middleware")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#enregistrement-de-middleware"},"Enregistrement de middleware")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#utiliser-le-middleware"},"Utiliser le middleware"))),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Les middlewares constituent un m\xe9canisme pratique pour filtrer les requ\xeates HTTP entrant dans votre application. Par exemple vous pouvez faire un middleware pour v\xe9rifier si un utilisateur est connect\xe9 et ensuite faire une action en fonction. Vous pouvez ex\xe9cuter du code avant et apr\xe8s votre application Bow pour manipuler les objets ",(0,a.kt)("inlineCode",{parentName:"p"},"Request")," et ",(0,a.kt)("inlineCode",{parentName:"p"},"Response")," comme bon vous semble."),(0,a.kt)("script",{id:"asciicast-bfTIiqg1ew9x1QRxeMTufxJJU",src:"https://asciinema.org/a/bfTIiqg1ew9x1QRxeMTufxJJU.js","data-speed":"2",async:!0}),(0,a.kt)("h2",{id:"comment-\xe7a-marche"},"Comment \xe7a marche"),(0,a.kt)("p",null,"Diff\xe9rents Frameworks utilisent le syst\xe8me de middleware diff\xe9remment. Bow ajoute un middleware sous forme de file d'attente au dessus de votre application principale. Chaque nouvelle couche de middleware est ajout\xe9 la file de middleware existante. La structure de file se dilate vers l'ext\xe9rieur au fure et \xe0 mesure que les couches interm\xe9diaires suppl\xe9mentaires sont ajout\xe9es."),(0,a.kt)("p",null,"Lorsque vous ex\xe9cutez l'application Bow, les objets Request traversent la structure du middleware de l'ext\xe9rieur vers l'int\xe9rieur. Ils entrent d'abord dans le middleware le plus externe, puis dans le prochain middleware le plus externe (et ainsi de suite), jusqu'\xe0 ce qu'ils atteignent l'application elle-m\xeame. Une fois que l'application Bow a distribu\xe9 la route appropri\xe9, l'objet Response r\xe9sultant quitte l'application Bow et est s\xe9rialis\xe9 dans une r\xe9ponse HTTP qui est renvoy\xe9 au client HTTP."),(0,a.kt)("p",null,"La seule condition stricte est qu'un middleware doit renvoyer une value autre de ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),". Chaque middleware devra appeler le middleware suivant et lui transmettre les objets ",(0,a.kt)("inlineCode",{parentName:"p"},"Request")," comme arguments via la m\xe9thode ",(0,a.kt)("inlineCode",{parentName:"p"},"$next"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Bow inclut plusieur middlewares par defaut comme le middleware ",(0,a.kt)("inlineCode",{parentName:"p"},"csrf")," et ",(0,a.kt)("inlineCode",{parentName:"p"},"auth"),".")),(0,a.kt)("h2",{id:"ajouter-un-middleware"},"Ajouter un middleware"),(0,a.kt)("p",null,"Pour ajouter un middleware il faut utiliser la commande ",(0,a.kt)("inlineCode",{parentName:"p"},"add:middleware")," de ",(0,a.kt)("inlineCode",{parentName:"p"},"php bow"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"php bow add:middleware IpMiddleware\n")),(0,a.kt)("p",null,"Notez que tout les middlewares sont sauvegard\xe9s par d\xe9faut dans le fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"app/Middleware"),"."),(0,a.kt)("p",null,"Alors, le middleware que nous venons d'ajouter, v\xe9rifira l'adresse IP du client et si son adresse est \xe9gale \xe0 ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," on dira que l'application est MODE DEV."),(0,a.kt)("p",null,"Mais d'abort, regardons le contenu du fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"IpMiddleware"),". C'est la m\xe9thode ",(0,a.kt)("inlineCode",{parentName:"p"},"process")," qui permet de lancer le middleware et la callable permet de lancer le prochaine middleware."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Middlewares;\n\nuse Bow\\Http\\Request;\n\nclass IpMiddleware\n{\n  /**\n   * Fonction de lancement du middleware.\n   *\n   * @param Request $request\n   * @param callable $next\n   */\n  public function process(Request $request, callable $next)\n  {\n    //\n    return $next($request);\n  }\n}\n")),(0,a.kt)("p",null,"Pour notre exemple on aura alors le ",(0,a.kt)("inlineCode",{parentName:"p"},"process")," suivant:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"public function process(Request $request, callable $next)\n{\n  if ($request->ip() == '127.0.0.1') {\n    return \"MODE DEV\";\n  }\n\n  return $next($request);\n}\n")),(0,a.kt)("h2",{id:"enregistrement-de-middleware"},"Enregistrement de middleware"),(0,a.kt)("p",null,"G\xe9n\xe9ralement l'enregistrement ce faire dans le fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"app/Kernel.php")," avec une cl\xe9 qui l'identifie."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"public function middlewares()\n{\n  return [\n    ...\n    'ip' => \\App\\Middlewares\\IpMiddleware::class\n    ...\n  ];\n}\n")),(0,a.kt)("p",null,"Il est aussi possible d'ajouter les middlwares de fa\xe7on globle dans l'application. Et ceci se faire dans le fichier de ",(0,a.kt)("inlineCode",{parentName:"p"},"routes")," avec la m\xe9thode ",(0,a.kt)("inlineCode",{parentName:"p"},"middleware")," sur ",(0,a.kt)("inlineCode",{parentName:"p"},"$app")," qui va nous retourn\xe9 une instance de ",(0,a.kt)("inlineCode",{parentName:"p"},"\\Bow\\Router\\Router::class")," donc tout les routes qui sera definir avec cette instance h\xe9rit\xe9rons des middlewares sp\xe9cifi\xe9s."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$router = $app->middleware(\\App\\Middlewares\\IpMiddleware::class);\n$router->get('/', 'HomeController::index');\n\n// Ou\n$router = $app->middleware([\n  \\App\\Middlewares\\IpMiddleware::class,\n  \\App\\Middlewares\\OtherMiddleware::class,\n]);\n$router->get('/', 'HomeController::index');\n")),(0,a.kt)("h2",{id:"utiliser-le-middleware"},"Utiliser le middleware"),(0,a.kt)("p",null,"Apr\xe8s avoir d\xe9finir un middleware dans le ",(0,a.kt)("inlineCode",{parentName:"p"},"app/Kernel.php"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$app->get('/', 'HomeController::index')->middleware('ip');\n$app->get('/', 'HomeController::index')->middleware(['ip', 'autre']);\n\n// ou\n$app->route([\n  'path' => '/',\n  'method' => 'GET',\n  'handler' => 'HomeController::index',\n  'middleware' => ['ip', 'autre']\n]);\n")),(0,a.kt)("h2",{id:"il-manque-quelque-chose-"},"Il manque quelque chose ?"),(0,a.kt)("p",null,"Si vous rencontrez des probl\xe8mes avec la documentation ou si vous avez des suggestions pour am\xe9liorer la documentation ou le projet en g\xe9n\xe9ral, veuillez d\xe9poser une issue pour nous, ou envoyer un tweet mentionnant le compte Twitter @BowFramework ou sur directement sur le ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bowphp/docs/issues"},"github"),"."))}p.isMDXComponent=!0}}]);