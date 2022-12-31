"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3051],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(n),c=i,k=d["".concat(p,".").concat(c)]||d[c]||m[c]||l;return n?a.createElement(k,r(r({ref:t},s),{},{components:n})):a.createElement(k,r({ref:t},s))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:i,r[1]=o;for(var u=2;u<l;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1695:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(7462),i=(n(7294),n(3905));const l={id:"views",title:"\ud83c\udfa8 Utiliser les vues"},r=void 0,o={unversionedId:"views",id:"views",title:"\ud83c\udfa8 Utiliser les vues",description:"- Introduction",source:"@site/docs/view.md",sourceDirName:".",slug:"/views",permalink:"/docs/next/views",draft:!1,editUrl:"https://github.com/bowphp/docs/edit/main/website/docs/view.md",tags:[],version:"current",lastUpdatedBy:"Franck DAKIA",lastUpdatedAt:1672493455,formattedLastUpdatedAt:"Dec 31, 2022",frontMatter:{id:"views",title:"\ud83c\udfa8 Utiliser les vues"},sidebar:"docs",previous:{title:"\ud83d\udc68\ud83c\udffd\u200d\u2708\ufe0f Contr\xf4leurs",permalink:"/docs/next/controleur"},next:{title:"\ud83d\udea5 Middlewares",permalink:"/docs/next/middleware"}},p={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Cr\xe9ation de vue",id:"cr\xe9ation-de-vue",level:2},{value:"Utilisation",id:"utilisation",level:3},{value:"Introduction Tintin",id:"introduction-tintin",level:2},{value:"Configuration Tintin",id:"configuration-tintin",level:3},{value:"Affichage des donn\xe9es",id:"affichage-des-donn\xe9es",level:3},{value:"Affichage des donn\xe9es non \xe9chapp\xe9es",id:"affichage-des-donn\xe9es-non-\xe9chapp\xe9es",level:4},{value:"Ajouter un commentaire",id:"ajouter-un-commentaire",level:3},{value:"#if / #elseif ou #elif / #else",id:"if--elseif-ou-elif--else",level:3},{value:"#unless",id:"unless",level:3},{value:"#loop / #for / #while",id:"loop--for--while",level:3},{value:"L&#39;utilisation de #loop",id:"lutilisation-de-loop",level:4},{value:"Les sucres syntaxiques #jump et #stop",id:"les-sucres-syntaxiques-jump-et-stop",level:4},{value:"L&#39;utilisation de #for",id:"lutilisation-de-for",level:4},{value:"L&#39;utilisation de #while",id:"lutilisation-de-while",level:4},{value:"Inclusion de fichier",id:"inclusion-de-fichier",level:3},{value:"Exemple d&#39;inclusion",id:"exemple-dinclusion",level:4},{value:"H\xe9ritage avec #extends, #block et #inject",id:"h\xe9ritage-avec-extends-block-et-inject",level:2},{value:"Explication",id:"explication",level:3},{value:"Directive personnelis\xe9e",id:"directive-personnelis\xe9e",level:2},{value:"Ajouter vos directive de la configuration",id:"ajouter-vos-directive-de-la-configuration",level:3},{value:"Exemple de cr\xe9ation de directive",id:"exemple-de-cr\xe9ation-de-directive",level:3},{value:"Utilisation des directives",id:"utilisation-des-directives",level:3},{value:"Compilation du template",id:"compilation-du-template",level:3},{value:"Sortie apr\xe8s compilation",id:"sortie-apr\xe8s-compilation",level:3},{value:"IDE support",id:"ide-support",level:2},{value:"Comment installer Sublime Package Control",id:"comment-installer-sublime-package-control",level:3},{value:"Installer le package Tintin",id:"installer-le-package-tintin",level:3},{value:"Package suppl\xe9mentaire",id:"package-suppl\xe9mentaire",level:2},{value:"Installation de twig",id:"installation-de-twig",level:3},{value:"Vue avec Twig",id:"vue-avec-twig",level:3},{value:"Il manque quelque chose ?",id:"il-manque-quelque-chose-",level:2}],s={toc:u};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#introduction"},"Introduction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#configuration"},"Configuration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#cr%C3%A9ation-de-vue"},"Cr\xe9ation de vue"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#utilisation"},"Utilisation")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#introduction-tintin"},"Introduction Tintin"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#configuration-tintin"},"Configuration Tintin")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#affichage-des-donn%C3%A9es"},"Affichage des donn\xe9es"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#affichage-des-donn%C3%A9es-non-%C3%A9chapp%C3%A9es"},"Affichage des donn\xe9es non \xe9chapp\xe9es")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#ajouter-un-commentaire"},"Ajouter un commentaire")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#if--elseif-ou-elif--else"},"#if / #elseif ou #elif / #else")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#unless"},"#unless")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#loop--for--while"},"#loop / #for / #while"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#lutilisation-de-loop"},"L'utilisation de #loop")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#les-sucres-syntaxiques-jump-et-stop"},"Les sucres syntaxiques #jump et #stop")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#lutilisation-de-for"},"L'utilisation de #for")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#lutilisation-de-while"},"L'utilisation de #while")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#inclusion-de-fichier"},"Inclusion de fichier"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#exemple-dinclusion"},"Exemple d'inclusion")))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#h%C3%A9ritage-avec-extends-block-et-inject"},"H\xe9ritage avec #extends, #block et #inject"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#explication"},"Explication")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#directive-personnelis%C3%A9e"},"Directive personnelis\xe9e"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#ajouter-vos-directive-de-la-configuration"},"Ajouter vos directive de la configuration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#exemple-de-cr%C3%A9ation-de-directive"},"Exemple de cr\xe9ation de directive")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#utilisation-des-directives"},"Utilisation des directives")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#compilation-du-template"},"Compilation du template")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#sortie-apr%C3%A8s-compilation"},"Sortie apr\xe8s compilation")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#ide-support"},"IDE support"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#comment-installer-sublime-package-control"},"Comment installer Sublime Package Control")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#installer-le-package-tintin"},"Installer le package Tintin")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#package-suppl%C3%A9mentaire"},"Package suppl\xe9mentaire"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#installation-de-twig"},"Installation de twig")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#vue-avec-twig"},"Vue avec Twig")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#il-manque-quelque-chose-"},"Il manque quelque chose ?"))),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Les vues contiennent le code HTML fourni par votre application et s\xe9parent votre logique de contr\xf4leur/application de votre logique de pr\xe9sentation:"),(0,i.kt)("script",{id:"asciicast-srlT0uYy1bOin8Z3Z35E66JJB",src:"https://asciinema.org/a/srlT0uYy1bOin8Z3Z35E66JJB.js","data-speed":"3","data-rows":"20",async:!0}),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Bow Framework impl\xe9mente 2 moteurs de template et le template par defaut est ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"./tintin"},"Tintin")),".\nLa configuration des vues ce trouve dans le fichier ",(0,i.kt)("inlineCode",{parentName:"p"},"view.php")," du dossier ",(0,i.kt)("inlineCode",{parentName:"p"},"config/"),"."),(0,i.kt)("p",null,"Sp\xe9cifiez le nom du template \xe0 utiliser avec option ",(0,i.kt)("inlineCode",{parentName:"p"},"engine")," de la configuration, cette option peut prendre le valeur suivant ",(0,i.kt)("inlineCode",{parentName:"p"},"tintin"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"twig")," et ",(0,i.kt)("inlineCode",{parentName:"p"},"php"),". Par d\xe9faut Bow utilise ",(0,i.kt)("inlineCode",{parentName:"p"},"tintin"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Notez que si vous d\xe9finissez ",(0,i.kt)("inlineCode",{parentName:"p"},"php"),", le rendu des vues se fera sans moteur de template")),(0,i.kt)("p",null,"Vous pouvez aussi changer l'extension de template en modifiant la valeur de l'entr\xe9 ",(0,i.kt)("inlineCode",{parentName:"p"},"extension"),". Vous verez \xe9galement que les vues sont stock\xe9es dans le r\xe9pertoire ",(0,i.kt)("inlineCode",{parentName:"p"},"templates")," par defaut."),(0,i.kt)("h2",{id:"cr\xe9ation-de-vue"},"Cr\xe9ation de vue"),(0,i.kt)("p",null,"Une simple vue peut ressembler \xe0 ceci"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!-- View stored in templates/greeting.tintin.php --\x3e\n<html>\n  <body>\n    <h1>Hello, {{ $name }}</h1>\n  </body>\n</html>\n")),(0,i.kt)("p",null,"Apres avoir modifier et sauvegarde votre vue dans ",(0,i.kt)("inlineCode",{parentName:"p"},"templates/greeting.tintin.php"),". Vous pouvez maintenant l'envoyer au utilisateur avec le helper view comme ceci:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$app->get('/', function() {\n  return view('greeting', ['name' => 'Tintin']);\n});\n")),(0,i.kt)("h3",{id:"utilisation"},"Utilisation"),(0,i.kt)("p",null,"Exemple d'utilisation: (Avec le classe ",(0,i.kt)("inlineCode",{parentName:"p"},"View"),")\nCette utilise la m\xe9thode ",(0,i.kt)("inlineCode",{parentName:"p"},"parse"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"View::parse(view, data, status)\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Param\xe8tre"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"view")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:null},"Le chemin de la vue sachant dans le moteur se base sur le dossier des vues")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"data")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Array"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Object")),(0,i.kt)("td",{parentName:"tr",align:null},"Les donn\xe9es a pass\xe9 \xe0 la vue")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"status")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Integer")),(0,i.kt)("td",{parentName:"tr",align:null},"Le code http")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"use Bow\\View\\View;\n\necho View::parse('nom-de-la-vue-sans-extension');\n")),(0,i.kt)("p",null,"Pour passer des variables \xe0 la vue"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"use Bow\\View\\View;\n\necho View::parse(\n  'nom-de-la-vue-sans-extension',\n  ['name' => 'bow'],\n  200\n);\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Vous pouvez utiliser le helper ",(0,i.kt)("inlineCode",{parentName:"p"},"view")," qui s'utilise de la m\xeame fa\xe7on.")),(0,i.kt)("p",null,"Avec la vue suivante:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!-- View stored in templates/greeting.tintin.php --\x3e\n<html>\n <body>\n  <h1>Hello, {{ $name }}</h1>\n </body>\n</html>\n")),(0,i.kt)("p",null,"Exemple dans un controlleur:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Controllers;\n\nuse App\\Controllers\\Controller;\n\nclass HomeController extends Controller\n{\n  /**\n   * Show hello page\n   *\n   * @return mixed\n   */\n  public function show()\n  {\n    return view('greeting', ['name' => 'Bowphp']);\n    // Ou\n    return $this->render('greeting', ['name' => \"Bowphp\"]);\n    // Ou\n    return response()->render('greeting', ['name' => \"Bowphp\"]);\n  }\n}\n")),(0,i.kt)("h2",{id:"introduction-tintin"},"Introduction Tintin"),(0,i.kt)("p",null,"Tintin est un template PHP qui se veut tr\xe8s simple et extensible. Il peut \xeatre utilisable dans n'importe quel projet PHP. Par d\xe9faut #Tintin est le moteur de template de Bow Framework utilise."),(0,i.kt)("h3",{id:"configuration-tintin"},"Configuration Tintin"),(0,i.kt)("p",null,"Vous trouverez la configuration dans le fichier ",(0,i.kt)("inlineCode",{parentName:"p"},"config/view.php")," et c'est dans le dossier ",(0,i.kt)("inlineCode",{parentName:"p"},"templates")," que sont sauvegard\xe9s le fichier de template avec l'extension ",(0,i.kt)("inlineCode",{parentName:"p"},".tintin.php"),"."),(0,i.kt)("h3",{id:"affichage-des-donn\xe9es"},"Affichage des donn\xe9es"),(0,i.kt)("p",null,"Vous pouvez afficher le contenu de la variable name de la mani\xe8re suivante:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},"Hello, {{ $name }}.\n")),(0,i.kt)("p",null,"Bien entendu, vous n'\xeates pas limit\xe9 \xe0 afficher le contenu des variables transmises \xe0 la vue. Vous pouvez \xe9galement faire \xe9cho aux r\xe9sultats de toute fonction PHP. En fait, vous pouvez ins\xe9rer n'importe quel code PHP dans une instruction echo Blade:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},"Hello, {{ strtoupper($name) }}.\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Les instructions Tintin ",(0,i.kt)("inlineCode",{parentName:"p"},"{{ }}")," sont automatiquement envoy\xe9es via la fonction PHP ",(0,i.kt)("inlineCode",{parentName:"p"},"htmlspecialchars")," pour emp\xeacher les attaques XSS.")),(0,i.kt)("h4",{id:"affichage-des-donn\xe9es-non-\xe9chapp\xe9es"},"Affichage des donn\xe9es non \xe9chapp\xe9es"),(0,i.kt)("p",null,"Par d\xe9faut, les instructions Tintin ",(0,i.kt)("inlineCode",{parentName:"p"},"{{ }}")," sont automatiquement envoy\xe9es via la fonction PHP ",(0,i.kt)("inlineCode",{parentName:"p"},"htmlspecialchars")," pour emp\xeacher les attaques XSS. Si vous ne souhaitez pas que vos donn\xe9es soient prot\xe9g\xe9es, vous pouvez utiliser la syntaxe suivante:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},"Hello, {{{ $name }}}.\n")),(0,i.kt)("h3",{id:"ajouter-un-commentaire"},"Ajouter un commentaire"),(0,i.kt)("p",null,"Cette clause ",(0,i.kt)("inlineCode",{parentName:"p"},"{# comments #}")," permet d'ajouter un commentaire \xe0 votre code ",(0,i.kt)("inlineCode",{parentName:"p"},"tintin"),"."),(0,i.kt)("h3",{id:"if--elseif-ou-elif--else"},"#if / #elseif ou #elif / #else"),(0,i.kt)("p",null,"Ce sont les clauses qui permettent d'\xe9tablir des branchements conditionnels comme dans la plupart des langages de programmation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},"<p>\n#if ($name == 'tintin')\n  {{ $name }}\n#elseif ($name == 'template')\n  {{ $name }}\n#else\n  {{ $name }}\n#endif\n</p>\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Vous pouvez utiliser ",(0,i.kt)("inlineCode",{parentName:"p"},"#elif")," \xe0 la place de ",(0,i.kt)("inlineCode",{parentName:"p"},"#elseif"),".")),(0,i.kt)("h3",{id:"unless"},"#unless"),(0,i.kt)("p",null,"Petite sp\xe9cificit\xe9, le ",(0,i.kt)("inlineCode",{parentName:"p"},"#unless")," quant \xe0 lui, il permet de faire une condition inverse du ",(0,i.kt)("inlineCode",{parentName:"p"},"#if"),".\nPour faire simple, voici un exemple:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},"#unless ($name == 'tintin')\n\n// Egale \xe0\n#if (!($name == 'tintin'))\n")),(0,i.kt)("h3",{id:"loop--for--while"},"#loop / #for / #while"),(0,i.kt)("p",null,"Souvent vous pouvez \xeatre amener \xe0 faire des listes ou r\xe9p\xe9titions sur des \xe9l\xe9ments. Par exemple, afficher tout les utilisateurs de votre plateforme."),(0,i.kt)("h4",{id:"lutilisation-de-loop"},"L'utilisation de #loop"),(0,i.kt)("p",null,"Cette clause faire exactement l'action de ",(0,i.kt)("inlineCode",{parentName:"p"},"foreach"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},"#loop ($names as $name)\n  Bonjour {{ $name }}\n#endloop\n")),(0,i.kt)("p",null,"Cette clause peux \xeatre aussi coupler avec tout autre clause telque ",(0,i.kt)("inlineCode",{parentName:"p"},"#if"),". Voici un exemple rapide:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},"#loop ($names as $name)\n  #if ($name == 'tintin')\n    Bonjour {{ $name }}\n    #stop\n  #endif\n#endloop\n")),(0,i.kt)("p",null,"Vous avez peut-\xeatre remarquer le ",(0,i.kt)("inlineCode",{parentName:"p"},"#stop")," il permet de stoper l'\xe9x\xe9cution de la boucle. Il y a aussi son conjoint le ",(0,i.kt)("inlineCode",{parentName:"p"},"#jump"),", lui parcontre permet d'arr\xeater l'\xe9x\xe9cution \xe0 son niveau et de lancer s'\xe9x\xe9cution du prochain tour de la boucle."),(0,i.kt)("h4",{id:"les-sucres-syntaxiques-jump-et-stop"},"Les sucres syntaxiques #jump et #stop"),(0,i.kt)("p",null,"Souvent le d\xe9v\xe9loppeur est amen\xe9 \xe0 faire des conditions d'arr\xeat de la boucle ",(0,i.kt)("inlineCode",{parentName:"p"},"#loop")," comme ceci:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},"#loop ($names as $name)\n  #if ($name == 'tintin')\n    #stop\n    // Ou\n    #jump\n  #endif\n#endloop\n")),(0,i.kt)("p",null,"Avec les sucres syntaxique, on peut r\xe9duire le code comme ceci:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},"#loop ($names as $name)\n  #stop($name == 'tintin')\n  // Ou\n  #jump($name == 'tintin')\n#endloop\n")),(0,i.kt)("h4",{id:"lutilisation-de-for"},"L'utilisation de #for"),(0,i.kt)("p",null,"Cette clause faire exactement l'action de ",(0,i.kt)("inlineCode",{parentName:"p"},"for"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},"#for ($i = 0; $i < 10; $i++)\n // ..\n#endfor\n")),(0,i.kt)("h4",{id:"lutilisation-de-while"},"L'utilisation de #while"),(0,i.kt)("p",null,"Cette clause faire exactement l'action de ",(0,i.kt)("inlineCode",{parentName:"p"},"while"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},"#while ($name != 'tintin')\n // ..\n#endwhile\n")),(0,i.kt)("h3",{id:"inclusion-de-fichier"},"Inclusion de fichier"),(0,i.kt)("p",null,"Souvent lorsque vous d\xe9v\xe9loppez votre code, vous \xeates amener \xe0 subdiviser les vues de votre application pour \xeatre plus flexible et \xe9crire moin de code."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"#include")," permet d'include un autre fichier de template dans un autre."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"}," #include('filename', data)\n")),(0,i.kt)("h4",{id:"exemple-dinclusion"},"Exemple d'inclusion"),(0,i.kt)("p",null,"Consid\xe9rons le fichier ",(0,i.kt)("inlineCode",{parentName:"p"},"hello.tintin.php")," suivant:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},"Hello {{ $name }}\n")),(0,i.kt)("p",null,"Utilisation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},"#include('hello', ['name' => 'Tintin'])\n// => Hello Tintin\n")),(0,i.kt)("h2",{id:"h\xe9ritage-avec-extends-block-et-inject"},"H\xe9ritage avec #extends, #block et #inject"),(0,i.kt)("p",null,"Comme tout bon syst\xe8me de template ",(0,i.kt)("strong",{parentName:"p"},"tintin")," support le partage de code entre fichier. Ceci permet de rendre votre code flexible et maintenable."),(0,i.kt)("p",null,"Consid\xe9r\xe9rons le code ",(0,i.kt)("strong",{parentName:"p"},"tintin")," suivant:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"// le fichier `layout.tintin.php`\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Hello, world</title>\n</head>\n<body>\n  <h1>Page header</h1>\n  <div id=\"page-content\">\n    #inject('content')\n  </div>\n  <p>Page footer</p>\n</body>\n</html>\n")),(0,i.kt)("p",null,"Et aussi, on a un autre fichier qui h\xe9rite du code du fichier ",(0,i.kt)("inlineCode",{parentName:"p"},"layout.tintin.php")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},"// le fichier se nomme `content.tintin.php`\n#extends('layout')\n\n#block('content')\n  <p>This is the page content</p>\n#endblock\n")),(0,i.kt)("h3",{id:"explication"},"Explication"),(0,i.kt)("p",null,"Le fichier ",(0,i.kt)("inlineCode",{parentName:"p"},"content.tintin.php")," va h\xe9rit\xe9 du code de ",(0,i.kt)("inlineCode",{parentName:"p"},"layout.tintin.php")," et si vous r\xe9marquez bien, dans le fichier ",(0,i.kt)("inlineCode",{parentName:"p"},"layout.tintin.php")," on a la clause ",(0,i.kt)("inlineCode",{parentName:"p"},"#inject")," qui a pour param\xe8tre le nom du ",(0,i.kt)("inlineCode",{parentName:"p"},"#block")," de ",(0,i.kt)("inlineCode",{parentName:"p"},"content.tintin.php")," qui est ",(0,i.kt)("inlineCode",{parentName:"p"},"content"),". Ce qui veut dire que le contenu du ",(0,i.kt)("inlineCode",{parentName:"p"},"#block")," ",(0,i.kt)("inlineCode",{parentName:"p"},"content")," sera remplac\xe9 par ",(0,i.kt)("inlineCode",{parentName:"p"},"#inject"),". Ce qui donn\xe9ra \xe0 la fin ceci:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n<head>\n  <title>Hello, world</title>\n</head>\n<body>\n  <h1>Page header</h1>\n  <div id="page-content">\n    <p>This is the page content</p>\n  </div>\n  <p>Page footer</p>\n</body>\n</html>\n')),(0,i.kt)("h2",{id:"directive-personnelis\xe9e"},"Directive personnelis\xe9e"),(0,i.kt)("p",null,"Tintin peut \xeatre \xe9tendu avec son syst\xeame de directive personnalis\xe9, pour ce faire utilis\xe9 la m\xe9thode ",(0,i.kt)("inlineCode",{parentName:"p"},"directive"),". Pour se faire nous avons cr\xe9er un configuration et extendre la configuration native ",(0,i.kt)("inlineCode",{parentName:"p"},"\\Tintin\\Bow\\TintinConfiguration::class"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"php bow add:configuration TintinConfiguration\n")),(0,i.kt)("h3",{id:"ajouter-vos-directive-de-la-configuration"},"Ajouter vos directive de la configuration"),(0,i.kt)("p",null,"Apr\xe8s avoir cr\xe9\xe9 la configuration vous trouverez le fichier ",(0,i.kt)("inlineCode",{parentName:"p"},"app/Configurations/TintinConfiguration.php")," qui va \xe9tendre la configuration par d\xe9faut de Tintin qui est ",(0,i.kt)("inlineCode",{parentName:"p"},"\\Tintin\\Bow\\TintinConfiguration::class")," et ensuite modifier la m\xe9thode ",(0,i.kt)("inlineCode",{parentName:"p"},"onRunning"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"use Tintin\\Tintin;\n\nclass TintinConfiguration extends \\Tintin\\Bow\\TintinConfiguration\n{\n  /**\n   * Add action in tintin\n   *\n   * @param Tintin $tintin\n   */\n  public function onRunning(Tintin $tintin)\n  {\n    $tintin->directive('super', function (array $attributes = []) {\n      return \"Super !\";\n    });\n  }\n}\n")),(0,i.kt)("p",null,"Pour fin en beaut\xe9. remplacez la configuration par defaut de Tintin dans le ",(0,i.kt)("inlineCode",{parentName:"p"},"app/Kernel.php")," par ",(0,i.kt)("inlineCode",{parentName:"p"},"App/Configurations/TintinConfiguration::class"),"."),(0,i.kt)("p",null,"Maintenant la directive ",(0,i.kt)("inlineCode",{parentName:"p"},"#super")," est disponible et vous pouvez l'utiliser."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"  return $tintin->render('#super');\n  // => Super !\n")),(0,i.kt)("h3",{id:"exemple-de-cr\xe9ation-de-directive"},"Exemple de cr\xe9ation de directive"),(0,i.kt)("p",null,"Ajoutons une directive simple. On l'appelera ",(0,i.kt)("inlineCode",{parentName:"p"},"#hello")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$tintin->directive('hello', function (array $attributes = []) {\n  return 'Hello, '. $attributes[0];\n});\n\necho $tintin->render('#hello(\"Tintin\")');\n// => Hello, Tintin\n")),(0,i.kt)("p",null,"Cr\xe9ation de directive pour g\xe9rer un formulaires:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$tintin->directive('input', function (array $attributes = []) {\n  $attribute = $attributes[0];\n\n  return '<input type=\"'.$attribute['type'].'\" name=\"'.$attribute['name'].'\" value=\"'.$attribute['value'].'\" />';\n});\n\n$tintin->directive('textarea', function (array $attributes = []) {\n  $attribute = $attributes[0];\n\n  return '<textarea name=\"'.$attribute['name'].'\">\"'.$attribute['value'].'\"</textarea>';\n});\n\n$tintin->directive('button', function (array $attributes = []) {\n  $attribute = $attributes[0];\n\n  return '<button type=\"'.$attribute['type'].'\">'.$attribute['label'].'\"</button>';\n});\n\n$tintin->directive('form', function (array $attributes = []) {\n  $attribute = \" \";\n  \n  if (isset($attributes[0])) {\n    foreach ($attributes[0] as $key => $value) {\n      $attribute .= $key . '=\"'.$value.'\" ';\n    }\n  }\n\n  return '<form \"'.trim($attribute).'\">';\n});\n\n$tintin->directive('endform', function (array $attributes = []) {\n  return '</form>';\n});\n")),(0,i.kt)("h3",{id:"utilisation-des-directives"},"Utilisation des directives"),(0,i.kt)("p",null,"Pour utiliser ces directives, rien de plus simple. Ecrivez le nom de la directive pr\xe9c\xe9d\xe9 la par ",(0,i.kt)("inlineCode",{parentName:"p"},"#"),". Ensuite si cette directive prend des param\xe8tres, lancer la directive comme vous lancez les fonctions dans votre programme. Les param\xe8tres seront r\xe9group\xe9s dans la varibles ",(0,i.kt)("inlineCode",{parentName:"p"},"$attributes")," dans l'ordre d'ajout."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},'/** Fichier form.tintin.php **/\n#form([\'method\' => \'post\', "action" => "/posts", "enctype" => "multipart/form-data"])\n  #input(["type" => "text", "value" => null, "name" => "name"])\n  #textarea(["value" => null, "name" => "content"])\n  #button([\'type\' => \'submit\', \'label\' => \'Add\'])\n#endform\n')),(0,i.kt)("h3",{id:"compilation-du-template"},"Compilation du template"),(0,i.kt)("p",null,"La compilation se fait comme d'habitude, pour plus d'information sur la ",(0,i.kt)("a",{parentName:"p",href:"#utilisation"},"compilation"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"echo $tintin->render('form');\n")),(0,i.kt)("h3",{id:"sortie-apr\xe8s-compilation"},"Sortie apr\xe8s compilation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<form action="/posts" method="post" enctype="multipart/form-data">\n  <input type="text" name="name" value="" />\n  <textarea name="content"></textarea>\n  <button type="submit">Add</button>\n</form>\n')),(0,i.kt)("h2",{id:"ide-support"},"IDE support"),(0,i.kt)("p",null,"Tintin est support\xe9 actuellement par ",(0,i.kt)("a",{parentName:"p",href:"https://www.sublimetext.com"},"sublime text"),"."),(0,i.kt)("h3",{id:"comment-installer-sublime-package-control"},"Comment installer Sublime Package Control"),(0,i.kt)("p",null,"Allez sur le ",(0,i.kt)("a",{parentName:"p",href:"https://packagecontrol.io/installation"},"site")," et suivez les instructions."),(0,i.kt)("h3",{id:"installer-le-package-tintin"},"Installer le package Tintin"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Recherchez ",(0,i.kt)("strong",{parentName:"li"},"Bow Tintin")," et installez-le/T\xe9l\xe9chargez ou clonez ce r\xe9f\xe9rentiel dans ","[install-dir]","/Packages/bow-tintin"),(0,i.kt)("li",{parentName:"ul"},"Red\xe9marrez Sublime Text."),(0,i.kt)("li",{parentName:"ul"},"Rouvrez n\u2019importe quel fichier ",(0,i.kt)("inlineCode",{parentName:"li"},".tintin")," ou ",(0,i.kt)("inlineCode",{parentName:"li"},".tintin.php"),"."),(0,i.kt)("li",{parentName:"ul"},"Enjoy \ud83d\ude03")),(0,i.kt)("h2",{id:"package-suppl\xe9mentaire"},"Package suppl\xe9mentaire"),(0,i.kt)("p",null,"Dans le cas o\xf9 vous avez opter pour le moteur de template ",(0,i.kt)("inlineCode",{parentName:"p"},"twig"),", voici la liste du package twig:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Template"),(0,i.kt)("th",{parentName:"tr",align:null},"Package"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Twig"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"twig/twig"))))),(0,i.kt)("h3",{id:"installation-de-twig"},"Installation de twig"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"composer require twig/twig\n")),(0,i.kt)("h3",{id:"vue-avec-twig"},"Vue avec Twig"),(0,i.kt)("p",null,"Twig est un moteur de templates pour le langage de programmation PHP, utilis\xe9 par d\xe9faut par le Framework Symfony."),(0,i.kt)("p",null,"Il aurait \xe9t\xe9 inspir\xe9 par ",(0,i.kt)("inlineCode",{parentName:"p"},"Jinja"),", moteur de template Python utilis\xe9 dans ",(0,i.kt)("a",{parentName:"p",href:"https://www.djangoproject.com"},"Django"),"."),(0,i.kt)("p",null,"Exemple de code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'$names = [\n  "resque", "hub", "rip"\n];\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"{# templates/greeting.twig #}\n<html>\n  <body>\n    <h1>Hello, User</h1>\n    {% for name in names %}\n      <p>Hello, {{name}}</p>\n    {% endfor %}\n  </body>\n</html>\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://twig.symfony.com/",title:"Lien de la documentation"},"Lien de la documentation")),(0,i.kt)("h2",{id:"il-manque-quelque-chose-"},"Il manque quelque chose ?"),(0,i.kt)("p",null,"Si vous rencontrez des probl\xe8mes avec la documentation ou si vous avez des suggestions pour am\xe9liorer la documentation ou le projet en g\xe9n\xe9ral, veuillez d\xe9poser une issue pour nous, ou envoyer un tweet mentionnant le compte Twitter @BowFramework ou sur directement sur le ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bowphp/docs/issues"},"github"),"."))}d.isMDXComponent=!0}}]);