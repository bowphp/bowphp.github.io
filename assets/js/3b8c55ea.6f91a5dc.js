"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3217],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,k=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return r?n.createElement(k,o(o({ref:t},p),{},{components:r})):n.createElement(k,o({ref:t},p))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9803:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const i={id:"installation",title:"\ud83d\ude80 Installation"},o=void 0,s={unversionedId:"installation",id:"installation",title:"\ud83d\ude80 Installation",description:"- Pr\xe9requis",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/docs/next/installation",draft:!1,editUrl:"https://github.com/bowphp/docs/edit/main/website/docs/installation.md",tags:[],version:"current",lastUpdatedBy:"Franck DAKIA",lastUpdatedAt:1672493455,formattedLastUpdatedAt:"Dec 31, 2022",frontMatter:{id:"installation",title:"\ud83d\ude80 Installation"},sidebar:"docs",next:{title:"\ud83d\udc68\ud83c\udffd\u200d\ud83d\udd27 App Configuration",permalink:"/docs/next/configuration"}},l={},u=[{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"Cr\xe9er un projet",id:"cr\xe9er-un-projet",level:2},{value:"Via Composer",id:"via-composer",level:3},{value:"\ud83d\ude80 D\xe9marrer votre projet",id:"-d\xe9marrer-votre-projet",level:2},{value:"\u2699\ufe0f Configuration",id:"\ufe0f-configuration",level:2},{value:"Dossier Public",id:"dossier-public",level:3},{value:"Fichiers de configuration",id:"fichiers-de-configuration",level:3},{value:"Permissions sur les dossiers",id:"permissions-sur-les-dossiers",level:3},{value:"Configuration Serveur Web",id:"configuration-serveur-web",level:2},{value:"Apache",id:"apache",level:3},{value:"Nginx",id:"nginx",level:3},{value:"D\xe9ploy\xe9 sur un server mutualis\xe9",id:"d\xe9ploy\xe9-sur-un-server-mutualis\xe9",level:3},{value:"Il manque quelque chose ?",id:"il-manque-quelque-chose-",level:2}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#pr%C3%A9requis"},"Pr\xe9requis")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#cr%C3%A9er-un-projet"},"Cr\xe9er un projet"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#via-composer"},"Via Composer")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#-d%C3%A9marrer-votre-projet"},"\ud83d\ude80 D\xe9marrer votre projet")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#%EF%B8%8F-configuration"},"\u2699\ufe0f Configuration"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#dossier-public"},"Dossier Public")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#fichiers-de-configuration"},"Fichiers de configuration")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#permissions-sur-les-dossiers"},"Permissions sur les dossiers")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#configuration-serveur-web"},"Configuration Serveur Web"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#apache"},"Apache")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#nginx"},"Nginx")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#d%C3%A9ploy%C3%A9-sur-un-server-mutualis%C3%A9"},"D\xe9ploy\xe9 sur un server mutualis\xe9")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#il-manque-quelque-chose-"},"Il manque quelque chose ?"))),(0,a.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The presets: [","['classic', {...}]","] shorthand works as well.")),(0,a.kt)("p",null,"Pour cr\xe9er une nouvelle application Bow, veuillez d'abord vous assurer que votre ordinateur remplit les conditions suivantes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"PHP >= 7.1"),(0,a.kt)("li",{parentName:"ul"},"OpenSSL PHP Extension"),(0,a.kt)("li",{parentName:"ul"},"PDO PHP Extension"),(0,a.kt)("li",{parentName:"ul"},"Mbstring PHP Extension"),(0,a.kt)("li",{parentName:"ul"},"XML PHP Extension"),(0,a.kt)("li",{parentName:"ul"},"JSON PHP Extension")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Si vous \xeates sous Windows et que vous utilisez un serveur web tel que ",(0,a.kt)("a",{parentName:"p",href:"https://laragon.org/"},"Laragon"),", ces d\xe9pendances sont d\xe9j\xe0 satisfaites.")),(0,a.kt)("h2",{id:"cr\xe9er-un-projet"},"Cr\xe9er un projet"),(0,a.kt)("p",null,"Bow Framework utilise ",(0,a.kt)("a",{parentName:"p",href:"https://getcomposer.org"},"Composer")," pour g\xe9rer ses d\xe9pendances. Donc, avant d'utiliser Bow, il vous faut d'abord installer Composer sur votre machine."),(0,a.kt)("h3",{id:"via-composer"},"Via Composer"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"composer create-project --prefer-dist bowphp/app nom-du-projet\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Nous vous conseillons d'installer ",(0,a.kt)("inlineCode",{parentName:"p"},"composer")," de fa\xe7on globale sur votre machine. Pour ce faire, r\xe9f\xe9rez-vous \xe0 la ",(0,a.kt)("a",{parentName:"p",href:"https://getcomposer.org/download"},"documentation")," d'installation de composer.\nSi vous n'\xeates pas familier \xe0 ",(0,a.kt)("inlineCode",{parentName:"p"},"composer"),", nous vous invitons \xe0 parcourir la documentation.")),(0,a.kt)("script",{id:"asciicast-s8HpeoaUwnxEZ7OOPRxxXE52z",src:"https://asciinema.org/a/s8HpeoaUwnxEZ7OOPRxxXE52z.js","data-speed":"2","data-rows":"20",async:!0}),(0,a.kt)("h2",{id:"-d\xe9marrer-votre-projet"},"\ud83d\ude80 D\xe9marrer votre projet"),(0,a.kt)("p",null,"Rendez vous \xe0 la racine de votre projet et d\xe9marrez le serveur:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd mon-projet\nphp bow run:server --port=8000 --host=0.0.0.0\n")),(0,a.kt)("p",null,"Ouvrez votre navigateur et tapez ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8000"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"5000")," est le port par d\xe9faut quand le port n'est pas sp\xe9cifi\xe9 avec la commande ",(0,a.kt)("inlineCode",{parentName:"p"},"php bow run:server"),".")),(0,a.kt)("h2",{id:"\ufe0f-configuration"},"\u2699\ufe0f Configuration"),(0,a.kt)("h3",{id:"dossier-public"},"Dossier Public"),(0,a.kt)("p",null,"Apr\xe8s l'installation de Bow Framework, vous devez configurer le ",(0,a.kt)("inlineCode",{parentName:"p"},"document root")," de votre serveur pour qu'il pointe vers le dossier ",(0,a.kt)("inlineCode",{parentName:"p"},"public"),"."),(0,a.kt)("p",null,"Le fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"index.php")," qui se trouve dans le dossier public sert de point d'entr\xe9e pour toutes les requ\xeates HTTP (c'est le ",(0,a.kt)("strong",{parentName:"p"},"Front Contr\xf4leur"),")."),(0,a.kt)("h3",{id:"fichiers-de-configuration"},"Fichiers de configuration"),(0,a.kt)("p",null,"Tous les fichiers de configurations de Bow Framework sont stock\xe9s dans le dossier ",(0,a.kt)("inlineCode",{parentName:"p"},"config"),". Toutes les options sont document\xe9es pour vous permettre de vous familiariser avec les options disponibles."),(0,a.kt)("h3",{id:"permissions-sur-les-dossiers"},"Permissions sur les dossiers"),(0,a.kt)("p",null,"Apr\xe8s l'installation de Bow, vous aurez besoin de configurer quelques permissions. Les dossiers contenu dans le dossier ",(0,a.kt)("inlineCode",{parentName:"p"},"var")," doivent avoir les permissions d'\xe9criture sur le serveur web."),(0,a.kt)("h2",{id:"configuration-serveur-web"},"Configuration Serveur Web"),(0,a.kt)("h3",{id:"apache"},"Apache"),(0,a.kt)("p",null,"Bow inclut un fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"public/.htaccess")," qui est utilis\xe9 pour faire de la r\xe9-\xe9criture d'URLs sur le front contr\xf4leur. Avant d'utiliser Bow avec Apache, assurez-vous que le module ",(0,a.kt)("inlineCode",{parentName:"p"},"mod_rewrite")," est activ\xe9 pour que le serveur\nprenne en compte les instructions du fichier ",(0,a.kt)("inlineCode",{parentName:"p"},".htaccess"),"."),(0,a.kt)("p",null,"Si le fichier ",(0,a.kt)("inlineCode",{parentName:"p"},".htaccess")," par d\xe9faut dans Bow ne fonctionne pas avec votre installation d'Apache, essayez cette alternative:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"Options +FollowSymLinks\nRewriteEngine On\n\nRewriteCond %{REQUEST_FILENAME} !-d\nRewriteCond %{REQUEST_FILENAME} !-f\nRewriteRule ^ index.php [L]\n")),(0,a.kt)("h3",{id:"nginx"},"Nginx"),(0,a.kt)("p",null,"Si vous utilisez Nginx, les directives suivantes dans votre configuration redirigeront les requ\xeates vers le front contr\xf4leur:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-nginx"},"location / {\n  try_files $uri $uri/ /index.php?$query_string;\n}\n")),(0,a.kt)("h3",{id:"d\xe9ploy\xe9-sur-un-server-mutualis\xe9"},"D\xe9ploy\xe9 sur un server mutualis\xe9"),(0,a.kt)("p",null,"Pour deployer Bow Framework sur un serveur mutualis\xe9. Il faut d\xe9placer le fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"index.php")," et ",(0,a.kt)("inlineCode",{parentName:"p"},".htaccess")," \xe0 la racine du projet.\nEt assur\xe9 le bien appel\xe9 les fichiers du fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"index.php")," ensuite vous pouvez copier le code qui suit dans le fichier htaccess."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'Options -indexes\n<IfModule mod_rewrite.c>\n  <IfModule mod_negotiation.c>\n    Options -MultiViews\n  </IfModule>\n\n  RewriteEngine On\n  RewriteCond %{REQUEST_FILENAME} !-d\n  RewriteRule ^(.*)/$ /$1 [L,R=301]\n\n  RewriteCond %{REQUEST_FILENAME} !-d\n  RewriteCond %{REQUEST_FILENAME} !-f\n  RewriteRule ^ index.php [L]\n</IfModule>\n\n<Files ".env.*|server.php|bow|app/**|vendor/**|postman/*|var/**|seeders/*|templates/**|tests/**|migrations/**">\n  Order Allow,Deny\n  Deny from all\n</Files>\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Il est en ce sens recommand\xe9 d'appel\xe9 vos fichiers d'assets avec la m\xe9thode ",(0,a.kt)("inlineCode",{parentName:"p"},"app_assets")," et modifier votre ",(0,a.kt)("inlineCode",{parentName:"p"},".env.json")," la valeur de ",(0,a.kt)("inlineCode",{parentName:"p"},"APP_ASSET_PREFIX")," en ",(0,a.kt)("inlineCode",{parentName:"p"},"/public")," et bow fait le reste \ud83d\ude05")),(0,a.kt)("p",null,"Vous pouvez continuer vers ces sections pour d\xe9marrer votre d\xe9veloppement."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/routing"},"Ajouter des routes \xe0 votre application")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/controleur"},"Plus de contr\xf4leur")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/database"},"Comment ajouter des donn\xe9es dans une Base de donn\xe9e ?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/http-session"},"Manipuler les sessions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/storage"},"Consulter aussi le syst\xe8me de stockage"))),(0,a.kt)("h2",{id:"il-manque-quelque-chose-"},"Il manque quelque chose ?"),(0,a.kt)("p",null,"Si vous rencontrez des probl\xe8mes avec la documentation ou si vous avez des suggestions pour am\xe9liorer la documentation ou le projet en g\xe9n\xe9ral, veuillez d\xe9poser une issue pour nous, ou envoyer un tweet mentionnant le compte Twitter @BowFramework ou sur directement sur le ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bowphp/docs/issues"},"github"),"."))}c.isMDXComponent=!0}}]);