"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9091],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5313:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);const r=()=>a.createElement(a.Fragment,null,a.createElement("h2",null,"Il manque quelque chose ?"),a.createElement("p",null,"Si vous rencontrez des probl\xe8mes avec la documentation ou si vous avez des suggestions pour am\xe9liorer la documentation ou le projet en g\xe9n\xe9ral, veuillez d\xe9poser une issue pour nous, ou envoyer un tweet mentionnant le compte Twitter"," ",a.createElement("a",{href:"https://twitter.com/@bowframework"},"@bowframework")," ou sur directement sur le"," ",a.createElement("a",{href:"https://github.com/bowphp/docs/issues"},"github"),"."))},9014:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),l=n(5313);const i={id:"database",title:"\ud83c\udfaf D\xe9marrage"},o=void 0,s={unversionedId:"database",id:"database",title:"\ud83c\udfaf D\xe9marrage",description:"- Introduction",source:"@site/docs/database.mdx",sourceDirName:".",slug:"/database",permalink:"/docs/next/database",draft:!1,editUrl:"https://crowdin.com/project/bowphp/fr",tags:[],version:"current",lastUpdatedBy:"Franck DAKIA",lastUpdatedAt:1673138992,formattedLastUpdatedAt:"8 janv. 2023",frontMatter:{id:"database",title:"\ud83c\udfaf D\xe9marrage"},sidebar:"docs",previous:{title:"\ud83d\udeeb Testez votre application",permalink:"/docs/next/testing"},next:{title:"\ud83c\udfd7 SQL Builder",permalink:"/docs/next/query-builder"}},u={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Configuration",id:"configuration",level:2},{value:"SQLite Configuration",id:"sqlite-configuration",level:2},{value:"Connexion \xe0 plusieur Base de donn\xe9e",id:"connexion-\xe0-plusieur-base-de-donn\xe9e",level:2},{value:"Utilisation de requ\xeate SQL Brute",id:"utilisation-de-requ\xeate-sql-brute",level:2},{value:"Execution de requ\xeate Select",id:"execution-de-requ\xeate-select",level:3},{value:"S\xe9lection conditionnel",id:"s\xe9lection-conditionnel",level:3},{value:"Execution de requ\xeate Insert",id:"execution-de-requ\xeate-insert",level:3},{value:"Insertion multiple",id:"insertion-multiple",level:4},{value:"Execution de requ\xeate Update",id:"execution-de-requ\xeate-update",level:3},{value:"Execution de requ\xeate Delete",id:"execution-de-requ\xeate-delete",level:3},{value:"Execution de requ\xeate",id:"execution-de-requ\xeate",level:3},{value:"Database Transactions",id:"database-transactions",level:2},{value:"Utilisation manuel des transaction",id:"utilisation-manuel-des-transaction",level:3},{value:"Les jointures",id:"les-jointures",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#introduction"},"Introduction")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#configuration"},"Configuration")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#sqlite-configuration"},"SQLite Configuration")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#connexion-%C3%A0-plusieur-base-de-donn%C3%A9e"},"Connexion \xe0 plusieur Base de donn\xe9e")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#utilisation-de-requ%C3%AAte-sql-brute"},"Utilisation de requ\xeate SQL Brute"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#execution-de-requ%C3%AAte-select"},"Execution de requ\xeate Select")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#s%C3%A9lection-conditionnel"},"S\xe9lection conditionnel")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#execution-de-requ%C3%AAte-insert"},"Execution de requ\xeate Insert"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#insertion-multiple"},"Insertion multiple")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#execution-de-requ%C3%AAte-update"},"Execution de requ\xeate Update")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#execution-de-requ%C3%AAte-delete"},"Execution de requ\xeate Delete")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#execution-de-requ%C3%AAte"},"Execution de requ\xeate")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#database-transactions"},"Database Transactions"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#utilisation-manuel-des-transaction"},"Utilisation manuel des transaction")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#les-jointures"},"Les jointures"))),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Bow rend l'interaction avec les bases de donn\xe9es extr\xeamement simple sur deux backends de bases de donn\xe9es en utilisant le ",(0,r.kt)("inlineCode",{parentName:"p"},"SQL brut"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"le g\xe9n\xe9rateur de requ\xeates courant")," et l'",(0,r.kt)("a",{parentName:"p",href:"./orm"},"ORM")," Barry."),(0,r.kt)("p",null,"Actuellement, Bow prend en charge deux bases de donn\xe9es:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MySQL"),(0,r.kt)("li",{parentName:"ul"},"SQLite")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"La configuration de la base donn\xe9e de votre application se localise dans le fihcier ",(0,r.kt)("inlineCode",{parentName:"p"},"config/database.php"),". Dans ce fichier, vous pouvez d\xe9finir tous les connections de votre base de donn\xe9e et un exemple en plus pour tous les supports de base de donn\xe9e est defini dans ce fichier."),(0,r.kt)("h2",{id:"sqlite-configuration"},"SQLite Configuration"),(0,r.kt)("p",null,"Apr\xe8s avoir cr\xe9\xe9 une nouvelle base de donn\xe9es SQLite \xe0 l'aide d'une commande tel que ",(0,r.kt)("inlineCode",{parentName:"p"},"touch var/database.sqlite"),", vous pouvez facilement configurer vos variables d'environnement (dans le fichier ",(0,r.kt)("inlineCode",{parentName:"p"},".env.json"),") pour qu'elles pointent vers cette base de donn\xe9es nouvellement cr\xe9\xe9e \xe0 l'aide du chemin absolu de la base de donn\xe9es:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "DB_DEFAULT": "mysql",\n  "SQLITE_DATABASE": "/absolute/path/to/database.sqlite",\n}\n')),(0,r.kt)("h2",{id:"connexion-\xe0-plusieur-base-de-donn\xe9e"},"Connexion \xe0 plusieur Base de donn\xe9e"),(0,r.kt)("p",null,"Lorsque vous utilisez plusieurs connexions, vous pouvez acc\xe9der \xe0 chaque connexion via la m\xe9thode static de ",(0,r.kt)("inlineCode",{parentName:"p"},"connexion")," sur la classe ",(0,r.kt)("a",{parentName:"p",href:"https://bowphp.com/api/master/Bow/Database/Database.html"},"Bow\\Database\\Database::class"),". Le nom transmis \xe0 la m\xe9thode de connexion doit correspondre \xe0 l'une des points de connexions r\xe9pertori\xe9es dans votre fichier de configuration ",(0,r.kt)("inlineCode",{parentName:"p"},"config/database.php"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use Bow\\Database\\Database;\n\n$users = Database::connection('mysql')->select(...);\n")),(0,r.kt)("p",null,"Ou via le helper ",(0,r.kt)("inlineCode",{parentName:"p"},"db"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$users = db('mysql')->select(...);\n")),(0,r.kt)("p",null,"Une fois la configuration chang\xe9, elle est directement appliquer sur la connexion des mod\xe8les. ",(0,r.kt)("a",{parentName:"p",href:"./orm"},"Cliquer ici")," pour plus d'information sur les models."),(0,r.kt)("h2",{id:"utilisation-de-requ\xeate-sql-brute"},"Utilisation de requ\xeate SQL Brute"),(0,r.kt)("p",null,"Les requ\xeate brute ici sont les requ\xeates SQL \xe9crite litt\xe9ralement sans passer par un Query Builder.\nDans cette section nous allons utiliser une table nommer ",(0,r.kt)("inlineCode",{parentName:"p"},"pets")," pour effectuer nos requ\xeate avec."),(0,r.kt)("p",null,"Voici la description de la table ",(0,r.kt)("inlineCode",{parentName:"p"},"pets"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `pets` (\n  id int primary key,\n  name varchar(200),\n  color varchar(50)\n);\n")),(0,r.kt)("p",null,"Alors notre table \xe0 comme colonne:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Nom de la colonne"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null},"Ici la cl\xe9 primaire")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},"Le nom du pet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"color")),(0,r.kt)("td",{parentName:"tr",align:null},"La couleur du pet")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Pour information, un ",(0,r.kt)("inlineCode",{parentName:"p"},"pet")," c'est un animal domestique")),(0,r.kt)("h3",{id:"execution-de-requ\xeate-select"},"Execution de requ\xeate Select"),(0,r.kt)("p",null,"Pour executer une requ\xeate brute de type ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," nous devrez utiliser la m\xe9thode ",(0,r.kt)("inlineCode",{parentName:"p"},"Database::select")," ou le helper ",(0,r.kt)("inlineCode",{parentName:"p"},"select"),". On consid\xe8re notre table ",(0,r.kt)("inlineCode",{parentName:"p"},"pets")," et que nous sommes bien connect\xe9s \xe0 la base de donn\xe9e."),(0,r.kt)("p",null,"Execution d'un requ\xeate pour optenir tous les informations de la table ",(0,r.kt)("inlineCode",{parentName:"p"},"pets"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use Bow\\Database\\Database;\n\n$pets = Database::select('select * from `pets`');\n")),(0,r.kt)("p",null,"Via helper ",(0,r.kt)("inlineCode",{parentName:"p"},"db_select"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$pets = db_select('select * from `pets`');\n")),(0,r.kt)("h3",{id:"s\xe9lection-conditionnel"},"S\xe9lection conditionnel"),(0,r.kt)("p",null,"Execution d'un requ\xeate pour optenir tous les informations de la table ",(0,r.kt)("inlineCode",{parentName:"p"},"pets")," quand ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," \xe9gale \xe0 1:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use Bow\\Database\\Database;\n\n$pet = Database::select('select * from `pets` where id = :id', ['id' => 1]);\n")),(0,r.kt)("p",null,"Via helper ",(0,r.kt)("inlineCode",{parentName:"p"},"db_select"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$pet = db_select('select * from `pets` where id = :id', ['id' => 1]);\n")),(0,r.kt)("p",null,"Notez que la valeur retourn\xe9e par la m\xe9thode ",(0,r.kt)("inlineCode",{parentName:"p"},"db_select")," est un ",(0,r.kt)("inlineCode",{parentName:"p"},"array")," ou ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," s'il y a aucune informations.\nDans le cas ou c'est un ",(0,r.kt)("inlineCode",{parentName:"p"},"array")," le contenu est de type ",(0,r.kt)("inlineCode",{parentName:"p"},"stClass")," (plus d'information sur ",(0,r.kt)("a",{parentName:"p",href:"http://php.net/manual/fr/language.types.object.php"},"stClass"),")."),(0,r.kt)("h3",{id:"execution-de-requ\xeate-insert"},"Execution de requ\xeate Insert"),(0,r.kt)("p",null,"Pour executer une requ\xeate brute de type ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," nous devrez utiliser la m\xe9thode ",(0,r.kt)("inlineCode",{parentName:"p"},"Database::insert")," ou le helper ",(0,r.kt)("inlineCode",{parentName:"p"},"insert"),". On consid\xe8re toujour notre table ",(0,r.kt)("inlineCode",{parentName:"p"},"pets")," et que nous sommes bien connect\xe9s \xe0 la base de donn\xe9e."),(0,r.kt)("p",null,"Execution d'un requ\xeate pour inserer une information dans table ",(0,r.kt)("inlineCode",{parentName:"p"},"pets"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use Bow\\Database\\Database;\n\n$pet = [\n  'id' => 1,\n  'name' => 'Medor',\n  'color' => 'Green'\n];\n\n$inserted = Database::insert('insert into `pets` (id, name, color) values (:id, :name, :color);', $pet);\n")),(0,r.kt)("p",null,"Via helper ",(0,r.kt)("inlineCode",{parentName:"p"},"db_insert"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$pet = [\n  'id' => 2,\n  'name' => 'Mashmalo',\n  'color' => 'White'\n];\n\n$inserted = db_insert('insert into `pets` (id, name, color) values (:id, :name, :color);', $pet);\n")),(0,r.kt)("p",null,"Notez que la valeur retourn\xe9e par la m\xe9thode ",(0,r.kt)("inlineCode",{parentName:"p"},"insert")," est un ",(0,r.kt)("inlineCode",{parentName:"p"},"int")," ou ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," qui est le nombre d'insertion."),(0,r.kt)("h4",{id:"insertion-multiple"},"Insertion multiple"),(0,r.kt)("p",null,"Vous avez aussi la possibilit\xe9 d'inserer plusieurs enregistrements en m\xeame temps."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use Bow\\Database\\Database;\n\n// Liste de pets\n$pets = [\n  [\n    'id' => 1,\n    'name' => 'Medor',\n    'color' => 'Black'\n  ],\n  [\n    'id' => 2,\n    'name' => 'Milou',\n    'color' => 'Gay'\n  ]\n];\n\n$inserted = Database::insert(\n  'insert into `pets` (id, name, color) values (:id, :name, :color);',\n  $pets\n);\n")),(0,r.kt)("p",null,"Via helper ",(0,r.kt)("inlineCode",{parentName:"p"},"db_insert"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$updated = db_insert(\n  'insert into `pets` (id, name, color) values (:id, :name, :color);',\n  $pets\n);\n")),(0,r.kt)("h3",{id:"execution-de-requ\xeate-update"},"Execution de requ\xeate Update"),(0,r.kt)("p",null,"Pour executer une requ\xeate brute de type ",(0,r.kt)("inlineCode",{parentName:"p"},"UPDATE")," nous devrez utiliser la m\xe9thode ",(0,r.kt)("inlineCode",{parentName:"p"},"Database::update")," ou le helper ",(0,r.kt)("inlineCode",{parentName:"p"},"db_update"),". On consid\xe8re toujour notre table ",(0,r.kt)("inlineCode",{parentName:"p"},"pets")," et que nous sommes bien connect\xe9s \xe0 la base de donn\xe9e."),(0,r.kt)("p",null,"Execution d'un requ\xeate de mettre \xe0 jour d'information dans table ",(0,r.kt)("inlineCode",{parentName:"p"},"pets"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use Bow\\Database\\Database;\n\n$pet = [\n  'id' => 1,\n  'name' => 'Medora',\n  'color' => 'Purple'\n];\n\n$updated = Database::update(\n  'update `pets` set id = :id, name = :name, color = :color where id = :id',\n  $pet\n);\n")),(0,r.kt)("p",null,"Via le helper ",(0,r.kt)("inlineCode",{parentName:"p"},"db_update"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$pet = [\n  'id' => 2,\n  'name' => 'Spark',\n  'color' => 'Yellow'\n];\n\n$updated = db_update(\n  'update `pets` set id = :id, name = :name, color = :color where id = :id',\n  $pet\n);\n")),(0,r.kt)("h3",{id:"execution-de-requ\xeate-delete"},"Execution de requ\xeate Delete"),(0,r.kt)("p",null,"Pour executer une requ\xeate brute de type ",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE")," nous devrez utiliser la m\xe9thode ",(0,r.kt)("inlineCode",{parentName:"p"},"Database::delete")," ou le helper ",(0,r.kt)("inlineCode",{parentName:"p"},"db_delete"),". On consid\xe8re toujour notre table ",(0,r.kt)("inlineCode",{parentName:"p"},"pets")," et que nous sommes bien connect\xe9s \xe0 la base de donn\xe9e."),(0,r.kt)("p",null,"Execution d'un requ\xeate pour inserer une information dans table ",(0,r.kt)("inlineCode",{parentName:"p"},"pets"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use Bow\\Database\\Database;\n\n$deleted = Database::delete(\n  'delete from `pets` where id = :id',\n  ['id' => 1]\n);\n")),(0,r.kt)("p",null,"Via le helper ",(0,r.kt)("inlineCode",{parentName:"p"},"db_delete"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$deleted = db_delete(\n  'delete from `pets` where id = :id',\n  ['id' => 2]\n);\n")),(0,r.kt)("h3",{id:"execution-de-requ\xeate"},"Execution de requ\xeate"),(0,r.kt)("p",null,"Pour ex\xe9cuter une requ\xeate brute autre que ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"UPDATE"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE"),". Il y a une m\xe9thode faite pour ",(0,r.kt)("inlineCode",{parentName:"p"},"Database::statement")," ou le helper ",(0,r.kt)("inlineCode",{parentName:"p"},"db_statement"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use Bow\\Database\\Database;\n\nDatabase::statement('alter table `pets` add `owner` varchar(80) default null;');\n")),(0,r.kt)("p",null,"Via le helper ",(0,r.kt)("inlineCode",{parentName:"p"},"db_statement"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"db_statement('alter table `pets` add `owner` varchar(80) default null;');\n")),(0,r.kt)("h2",{id:"database-transactions"},"Database Transactions"),(0,r.kt)("p",null,"Vous pouvez utiliser la m\xe9thode de ",(0,r.kt)("inlineCode",{parentName:"p"},"startTransaction")," sur la classe ",(0,r.kt)("inlineCode",{parentName:"p"},"Database")," pour ex\xe9cuter un ensemble d'op\xe9rations dans une transaction de base de donn\xe9es."),(0,r.kt)("p",null,"Si vous passez une ",(0,r.kt)("inlineCode",{parentName:"p"},"Closure")," et qu'une exception est lev\xe9e dans la fonction de rappel de la transaction, la transaction sera automatiquement annul\xe9e. Si la ",(0,r.kt)("inlineCode",{parentName:"p"},"Closure")," s'ex\xe9cute correctement, la transaction sera automatiquement valid\xe9e. Vous n'avez pas \xe0 vous soucier de l'annulation manuelle ou de la validation lorsque vous utilisez la m\xe9thode de transaction:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use Bow\\Database\\Database;\n\nDatabase::startTransaction(function () {\n  Database::update('update users set votes = :votes', ['votes' => 1]);\n\n  Database::delete('delete from posts');\n});\n")),(0,r.kt)("p",null,"Via le helper ",(0,r.kt)("inlineCode",{parentName:"p"},"db_transaction"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"db_transaction(function () {\n  update('update users set votes = :votes', ['votes' => 1]);\n\n  delete('delete from posts');\n});\n")),(0,r.kt)("h3",{id:"utilisation-manuel-des-transaction"},"Utilisation manuel des transaction"),(0,r.kt)("p",null,"Vous pouvez aussi utiliser manuelement le syst\xe8me de transaction.\nPour d\xe9marrer la transaction avec la m\xe9thode:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use Bow\\Database\\Database;\n\nDatabase::startTransaction();\n// Ou\ndb_transaction();\n")),(0,r.kt)("p",null,"Vous pouvez annuler la transaction avec la m\xe9thode:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use Bow\\Database\\Database;\n\nDatabase::rollback();\n// Ou\ndb_rollback();\n")),(0,r.kt)("p",null,"Vous pouvez valider la transaction avec la m\xe9thode:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use Bow\\Database\\Database;\n\nDatabase::commit();\n// Ou\ndb_commit();\n")),(0,r.kt)("p",null,"Avec la m\xe9thode ",(0,r.kt)("inlineCode",{parentName:"p"},"inTransaction")," vous pouvez v\xe9rifier si la base de donn\xe9e est en transaction:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use Bow\\Database\\Database;\n\nDatabase::inTransaction();\n// Ou\ndb_transaction_started();\n")),(0,r.kt)("h2",{id:"les-jointures"},"Les jointures"),(0,r.kt)("p",null,"Consid\xe9rons les tables suivantes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"create table `author` (\n  `id` int primary key,\n  `name` varchar(200)\n);\n\ncreate table `pets` (\n  `id` int primary key,\n  `name` varchar(200),\n  `color` varchar(50),\n  `author_id` int default 0\n);\n")),(0,r.kt)("p",null,"Pour faire une jointure dans Bow Framework c'est tr\xe8s simple en fait. Pour ce faire on utilise la m\xe9thode ",(0,r.kt)("inlineCode",{parentName:"p"},"join"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$results = table('pets')->join('autors', 'authors.id', 'pets.author_id')->get();\n")),(0,r.kt)("p",null,"Souvant il est int\xe9ressant d'ajouter des contraintes dans la r\xe9qu\xeate normalement avec la clause ",(0,r.kt)("inlineCode",{parentName:"p"},"WHERE"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$results = table('pets')\n  ->join('authors', 'authors.id', 'pets.author_id')\n  ->whereColumn('pets.author_id', 1)->get();\n")),(0,r.kt)("p",null,"Normalement vous pouvez ajouter plusieur jointure dans l'appel de m\xe9thode.\nPour l'exemple disons qu'il y a une autre table nomm\xe9 ",(0,r.kt)("inlineCode",{parentName:"p"},"countries")," qui est le pays du propri\xe9taire et que la table ",(0,r.kt)("inlineCode",{parentName:"p"},"authors")," est maintenant:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"create table `author` (\n  `id` int primary key,\n  `name` varchar(200),\n  `country_id` int\n);\n")),(0,r.kt)("p",null,"Notre requ\xeate sera maintenant:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$results = table('authors')\n  ->join('authors', 'authors.id', 'pets.author_id')\n  ->join('countries', 'countries.id', 'pets.country_id')\n  ->whereColumn('pets.author_id', 1)->get();\n")),(0,r.kt)(l.Z,{mdxType:"SuggestionFeature"}))}c.isMDXComponent=!0}}]);