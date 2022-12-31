"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9834],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),u=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(d.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),c=r,k=m["".concat(d,".").concat(c)]||m[c]||s[c]||l;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5126:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={id:"migration",title:"\ud83d\udcd1 Migration"},i=void 0,o={unversionedId:"migration",id:"version-4.x/migration",title:"\ud83d\udcd1 Migration",description:"- Introduction",source:"@site/versioned_docs/version-4.x/migration.md",sourceDirName:".",slug:"/migration",permalink:"/docs/migration",draft:!1,editUrl:"https://crowdin.com/project/bowphp/fr",tags:[],version:"4.x",lastUpdatedBy:"Franck DAKIA",lastUpdatedAt:1672493455,formattedLastUpdatedAt:"31 d\xe9c. 2022",frontMatter:{id:"migration",title:"\ud83d\udcd1 Migration"},sidebar:"docs",previous:{title:"\ud83e\udde9 ORM Barry",permalink:"/docs/orm"},next:{title:"\ud83d\udc89 Seeding",permalink:"/docs/seeding"}},d={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Ajouter une migration",id:"ajouter-une-migration",level:2},{value:"Structure de migration",id:"structure-de-migration",level:2},{value:"Ex\xe9cuter des migrations",id:"ex\xe9cuter-des-migrations",level:2},{value:"Faire reculer les migrations",id:"faire-reculer-les-migrations",level:2},{value:"Cr\xe9ation de table",id:"cr\xe9ation-de-table",level:2},{value:"Connexion \xe0 la base de donn\xe9es et options de table",id:"connexion-\xe0-la-base-de-donn\xe9es-et-options-de-table",level:2},{value:"Renommer / Supprimer des tables",id:"renommer--supprimer-des-tables",level:2},{value:"Cr\xe9er des colonnes",id:"cr\xe9er-des-colonnes",level:2},{value:"Api de migration",id:"api-de-migration",level:2},{value:"Examinons ensemble",id:"examinons-ensemble",level:3},{value:"Liste des helpers",id:"liste-des-helpers",level:3},{value:"Il manque quelque chose ?",id:"il-manque-quelque-chose-",level:2}],p={toc:u};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#introduction"},"Introduction")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#ajouter-une-migration"},"Ajouter une migration")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#structure-de-migration"},"Structure de migration")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#ex%C3%A9cuter-des-migrations"},"Ex\xe9cuter des migrations")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#faire-reculer-les-migrations"},"Faire reculer les migrations")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#cr%C3%A9ation-de-table"},"Cr\xe9ation de table")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#connexion-%C3%A0-la-base-de-donn%C3%A9es-et-options-de-table"},"Connexion \xe0 la base de donn\xe9es et options de table")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#renommer--supprimer-des-tables"},"Renommer / Supprimer des tables")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#cr%C3%A9er-des-colonnes"},"Cr\xe9er des colonnes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#api-de-migration"},"Api de migration"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#examinons-ensemble"},"Examinons ensemble")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#liste-des-helpers"},"Liste des helpers"))))),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Les migrations sont un moyen pour versionner votre base de donn\xe9e qui \xe9volue souvent avec les modifications de l'application."),(0,r.kt)("p",null,"Les migrations sont sauvegard\xe9s dans le dossier ",(0,r.kt)("inlineCode",{parentName:"p"},"migration"),"."),(0,r.kt)("h2",{id:"ajouter-une-migration"},"Ajouter une migration"),(0,r.kt)("p",null,"Pour ajouter une migration il faut passer par ",(0,r.kt)("inlineCode",{parentName:"p"},"php bow")," avec la commande ",(0,r.kt)("inlineCode",{parentName:"p"},"add:migration")," ensuite le nom de la migration(ex: ",(0,r.kt)("inlineCode",{parentName:"p"},"createTodosTable"),"). Bow cr\xe9ra un fichier du m\xeame nom pr\xe9c\xe9d\xe9 d'une date de cr\xe9ation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"php bow add:migration create_todos_table\n")),(0,r.kt)("p",null,"Les options ",(0,r.kt)("inlineCode",{parentName:"p"},"--table")," et ",(0,r.kt)("inlineCode",{parentName:"p"},"--create")," peuvent \xe9galement \xeatre utilis\xe9es pour indiquer le nom de la table et indiquer si la migration cr\xe9era une nouvelle table. Ces options pr\xe9-remplissent le fichier de raccord de migration g\xe9n\xe9r\xe9 avec la table sp\xe9cifi\xe9e:"),(0,r.kt)("p",null,"Si vous voulez ajouter directement le nom de table dans la migration, ajouter le flag ",(0,r.kt)("inlineCode",{parentName:"p"},"--create=nom_de_la_table")," ou ",(0,r.kt)("inlineCode",{parentName:"p"},"--table=nom_de_la_table"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"php bow add:migration create_todos_table --create=todos\n\nphp bow add:migration create_todos_table --table=todos\n")),(0,r.kt)("h2",{id:"structure-de-migration"},"Structure de migration"),(0,r.kt)("p",null,"Une classe de migration contient deux m\xe9thodes: ",(0,r.kt)("inlineCode",{parentName:"p"},"up")," et ",(0,r.kt)("inlineCode",{parentName:"p"},"rollback"),". La m\xe9thode ",(0,r.kt)("inlineCode",{parentName:"p"},"up")," sert \xe0 ajouter de nouvelles tables, colonnes ou index \xe0 votre base de donn\xe9es, tandis que la m\xe9thode ",(0,r.kt)("inlineCode",{parentName:"p"},"rollback")," doit inverser les op\xe9rations effectu\xe9es par la m\xe9thode ",(0,r.kt)("inlineCode",{parentName:"p"},"up"),"."),(0,r.kt)("p",null,"Par exemple, la migration cr\xe9\xe9 pr\xe9c\xe9dement:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'use Bow\\Database\\Migration\\Migration;\nuse Bow\\Database\\Migration\\SQLGenerator;\n\nclass Version20190929153939CreatTodosTable extends Migration\n{\n  /**\n   * Create Table\n   */\n  public function up()\n  {\n    $this->create("users", function (SQLGenerator $table) {\n      $table->addIncrement(\'id\');\n      $table->addTimestamps();\n    });\n  }\n\n  /**\n   * Drop Table\n   */\n  public function rollback()\n  {\n    $this->dropIfExists("users");\n  }\n}\n')),(0,r.kt)("h2",{id:"ex\xe9cuter-des-migrations"},"Ex\xe9cuter des migrations"),(0,r.kt)("p",null,"Pour ex\xe9cuter toutes vos migrations en attente, ex\xe9cutez la commande ",(0,r.kt)("inlineCode",{parentName:"p"},"migration:migrate")," de la commande Bow:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"php bow migration:migrate\n")),(0,r.kt)("p",null,"Vous pouvez aussi utiliser le racourci ",(0,r.kt)("inlineCode",{parentName:"p"},"migrate"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"php bow migrate\n")),(0,r.kt)("h2",{id:"faire-reculer-les-migrations"},"Faire reculer les migrations"),(0,r.kt)("p",null,'Pour annuler la derni\xe8re op\xe9ration de migration, vous pouvez utiliser la commande d\'annulation. Cette commande annule le dernier "lot" de migrations, qui peut inclure plusieurs fichiers de migration:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan migration:rollback\n")),(0,r.kt)("p",null,"La commande ",(0,r.kt)("inlineCode",{parentName:"p"},"migration:reset")," annule toutes les migrations de votre application:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan migration:reset\n")),(0,r.kt)("h2",{id:"cr\xe9ation-de-table"},"Cr\xe9ation de table"),(0,r.kt)("p",null,"Pour cr\xe9er une nouvelle table de base de donn\xe9es, utilisez la m\xe9thode ",(0,r.kt)("inlineCode",{parentName:"p"},"create"),". La m\xe9thode ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," accepte deux arguments. Le premier est le nom de la table, tandis que le second est une cl\xf4ture qui re\xe7oit un objet ",(0,r.kt)("inlineCode",{parentName:"p"},"\\Bow\\Database\\Migration\\SQLGenerator::class")," pouvant \xeatre utilis\xe9 pour d\xe9finir la nouvelle table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$this->create(\"users\", function (SQLGenerator $table) {\n  $table->addIncrement('id');\n  $table->addTimestamps();\n});\n")),(0,r.kt)("h2",{id:"connexion-\xe0-la-base-de-donn\xe9es-et-options-de-table"},"Connexion \xe0 la base de donn\xe9es et options de table"),(0,r.kt)("p",null,"Si vous souhaitez effectuer une op\xe9ration de sch\xe9ma sur une connexion \xe0 une base de donn\xe9es autre que la connexion par d\xe9faut, utilisez la m\xe9thode de ",(0,r.kt)("inlineCode",{parentName:"p"},"connection")," suivante:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$this->connection('name')->create(\"users\", function (SQLGenerator $table) {\n  $table->addIncrement('id');\n  $table->addTimestamps();\n});\n")),(0,r.kt)("p",null,"Vous pouvez utiliser les commandes suivantes dans le g\xe9n\xe9rateur de sch\xe9ma pour d\xe9finir les options de la table:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param\xe8tre"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"$table->withEngine('InnoDB')")),(0,r.kt)("td",{parentName:"tr",align:null},"Ici, on modifie le syst\xe8me de storage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"$table->withCharset('utf8')")),(0,r.kt)("td",{parentName:"tr",align:null},"Ici, on modifie l'encodage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"$table->withCollation('utf8_unicode_ci')")),(0,r.kt)("td",{parentName:"tr",align:null},"Ici, Sp\xe9cifier un classement par d\xe9faut pour la table")))),(0,r.kt)("h2",{id:"renommer--supprimer-des-tables"},"Renommer / Supprimer des tables"),(0,r.kt)("p",null,"Pour renommer une table de base de donn\xe9es existante, utilisez la m\xe9thode ",(0,r.kt)("inlineCode",{parentName:"p"},"renameTable"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"public function up()\n{\n  $this->renameTable($from, $to);\n}\n")),(0,r.kt)("p",null,"Pour supprimer une table existante, vous pouvez utiliser les m\xe9thodes drop ou ",(0,r.kt)("inlineCode",{parentName:"p"},"dropIfExists"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"public function rollback()\n{\n  $this->drop('users');\n  \n  $this->dropIfExists('users');\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Avant de renommer une table, vous devez v\xe9rifier que toutes les contraintes de cl\xe9 \xe9trang\xe8re sur la table ont un nom explicite dans vos fichiers de migration au lieu de laisser Laravel attribuer un nom bas\xe9 sur une convention. Sinon, le nom de la contrainte de cl\xe9 \xe9trang\xe8re fera r\xe9f\xe9rence \xe0 l'ancien nom de la table.")),(0,r.kt)("h2",{id:"cr\xe9er-des-colonnes"},"Cr\xe9er des colonnes"),(0,r.kt)("p",null,"La m\xe9thode de ",(0,r.kt)("inlineCode",{parentName:"p"},"alter")," sur ",(0,r.kt)("inlineCode",{parentName:"p"},"Bow\\Database\\Migration\\Migration::class")," peut \xeatre utilis\xe9e pour mettre \xe0 jour des tables existantes. Comme la m\xe9thode ",(0,r.kt)("inlineCode",{parentName:"p"},"create"),", la m\xe9thode ",(0,r.kt)("inlineCode",{parentName:"p"},"alter")," accepte deux arguments: le nom de la table et une cl\xf4ture qui re\xe7oit une instance de ",(0,r.kt)("inlineCode",{parentName:"p"},"\\Bow\\Database\\Migration\\SQLGenerator::class")," que vous pouvez utiliser pour ajouter des colonnes \xe0 la table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"public function up()\n{\n  $this->alter('users', function (SQLGenerator $table) {\n    $table->addString('name');\n  });\n}\n")),(0,r.kt)("h2",{id:"api-de-migration"},"Api de migration"),(0,r.kt)("p",null,"Notons pour l'instant que tous ces m\xe9thodes sont en r\xe9alit\xe9 des helpers de la m\xe9thode ",(0,r.kt)("inlineCode",{parentName:"p"},"addColumn")," de ",(0,r.kt)("inlineCode",{parentName:"p"},"\\Bow\\Database\\Migration\\SQLGenerator::class"),"."),(0,r.kt)("h3",{id:"examinons-ensemble"},"Examinons ensemble"),(0,r.kt)("p",null,"Prototype de la m\xe9thode ",(0,r.kt)("inlineCode",{parentName:"p"},"addColumn"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$table->addColumn(string $column_name, string $column_type, array $column_attributes);\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param\xe8tre"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"$column_name"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Le nom de la colonne de la table")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"$column_type"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Le type de la colonne de la table")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"$column_attributes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Array")),(0,r.kt)("td",{parentName:"tr",align:null},"Les diff\xe9rents attributes de la colonne en fonction du type")))),(0,r.kt)("p",null,"Liste des attributes: ",(0,r.kt)("strong",{parentName:"p"},"unique"),", ",(0,r.kt)("strong",{parentName:"p"},"primary"),", ",(0,r.kt)("strong",{parentName:"p"},"index"),", ",(0,r.kt)("strong",{parentName:"p"},"increment"),", ",(0,r.kt)("strong",{parentName:"p"},"default"),", ",(0,r.kt)("strong",{parentName:"p"},"size"),", ",(0,r.kt)("strong",{parentName:"p"},"nullable"),", ",(0,r.kt)("strong",{parentName:"p"},"unsigned"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param\xe8tre"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"unique"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"Ajout UNIQUE sur la description de la colonne")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"primary"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"Define la colonne comme une cl\xe9 primaire. Ajout PRIMARY AUTO sur la description de la colonne")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"index"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"Definie la colonne comme une INDEX")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"increment"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"Definie la colonne comme une AUTO INCREMENT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"size"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Integer")),(0,r.kt)("td",{parentName:"tr",align:null},"Definie la taille de la colonne")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nullable"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"La colonne pourra avoir une valeur nul")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"unsigned"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"Seulement pour les colonnes de type nombre. Elle define la colonne comme non sign\xe9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"default"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Mixed")),(0,r.kt)("td",{parentName:"tr",align:null},"Ajout une valeur par defaut \xe0 la colonne si une valeur n'est pas ajout\xe9")))),(0,r.kt)("p",null,"Regardons ensemble cette exemple:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$table->addColumn('id', 'int', [\n  'primary' => true,\n  'increment' => true,\n  'size' => 11\n]);\n\n$table->addColumn('price', 'int', [\n  'size' => 11,\n  'unsigned' => true\n]);\n\n$table->addColumn('name', 'string', [\n  'nullable' => true,\n  'default' => 'Franck DAKIA',\n  'size' => 200\n]);\n")),(0,r.kt)("h3",{id:"liste-des-helpers"},"Liste des helpers"),(0,r.kt)("p",null,"Bien entendu, le g\xe9n\xe9rateur de sch\xe9ma contient divers types de colonnes que vous pouvez sp\xe9cifier lors de la construction de vos tables:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Commande"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"$table->addIncrement('id')"),(0,r.kt)("td",{parentName:"tr",align:null},"Incr\xe9mentation automatique de la colonne \xe9quivalente \xe0 INTEGER (cl\xe9 primaire).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"$table->addBigIncrement('id')"),(0,r.kt)("td",{parentName:"tr",align:null},"Incr\xe9mentation automatique de la colonne \xe9quivalente \xe0 BIGINT (cl\xe9 primaire).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"$table->addMediumIncrement('id')"),(0,r.kt)("td",{parentName:"tr",align:null},"Incr\xe9mentation automatique de la colonne \xe9quivalente \xe0 MEDIUMINT (cl\xe9 primaire).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"$table->addString('name', $attr = [])"),(0,r.kt)("td",{parentName:"tr",align:null},"Colonne \xe9quivalente \xe0 VARCGAR.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"$table->addInteger('price', $attr = [])"),(0,r.kt)("td",{parentName:"tr",align:null},"Colonne \xe9quivalente \xe0 INTEGER.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"$table->addBigInteger('price', $attr = [])"),(0,r.kt)("td",{parentName:"tr",align:null},"Colonne \xe9quivalente \xe0 BIGINT.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"$table->addDouble('price', $attr = [])"),(0,r.kt)("td",{parentName:"tr",align:null},"Colonne \xe9quivalente \xe0 DOUBLE.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"$table->addTinyInteger('status', $attr = [])"),(0,r.kt)("td",{parentName:"tr",align:null},"Colonne \xe9quivalente \xe0 TINYINT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"$table->addMediumInteger('status', $attr = [])"),(0,r.kt)("td",{parentName:"tr",align:null},"Colonne \xe9quivalente \xe0 MEDIUMINT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"$table->addBoolean('column')"),(0,r.kt)("td",{parentName:"tr",align:null},"Colonne \xe9quivalente \xe0 BOOLEAN")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"$table->addFloat('column')"),(0,r.kt)("td",{parentName:"tr",align:null},"Colonne \xe9quivalente \xe0 FLOAT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"$table->addFloatPrimary('column')"),(0,r.kt)("td",{parentName:"tr",align:null},"Colonne \xe9quivalente \xe0 FLOAT (cl\xe9 primaire)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"$table->addDouble('column')"),(0,r.kt)("td",{parentName:"tr",align:null},"Colonne \xe9quivalente \xe0 DOUBLE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"$table->addDoublePrimary('column')"),(0,r.kt)("td",{parentName:"tr",align:null},"Colonne \xe9quivalente \xe0 DOUBLE (cl\xe9 primaire)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"$table->addUuid('uuid')"),(0,r.kt)("td",{parentName:"tr",align:null},"Colonne \xe9quivalente \xe0 UUID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"$table->addBinary('uuid')"),(0,r.kt)("td",{parentName:"tr",align:null},"Colonne \xe9quivalente \xe0 BINARY")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"$table->addIpAddress('uuid')"),(0,r.kt)("td",{parentName:"tr",align:null},"Colonne \xe9quivalente \xe0 IP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"$table->addMacAddress('uuid')"),(0,r.kt)("td",{parentName:"tr",align:null},"Colonne \xe9quivalente \xe0 MAC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"$table->addDatetime('date_column')"),(0,r.kt)("td",{parentName:"tr",align:null},"Colonne \xe9quivalente \xe0 DATETIME")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"$table->addDate('date_column')"),(0,r.kt)("td",{parentName:"tr",align:null},"Colonne \xe9quivalente \xe0 DATE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"$table->addTime('date_column')"),(0,r.kt)("td",{parentName:"tr",align:null},"Colonne \xe9quivalente \xe0 TIME")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"$table->addYear('date_column')"),(0,r.kt)("td",{parentName:"tr",align:null},"Colonne \xe9quivalente \xe0 YEAR")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"$table->addTimestamp('date_column')"),(0,r.kt)("td",{parentName:"tr",align:null},"Colonne \xe9quivalente \xe0 TIMESTAMP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"$table->addTimestamps()"),(0,r.kt)("td",{parentName:"tr",align:null},"Ajout les colonnes ",(0,r.kt)("inlineCode",{parentName:"td"},"updated_at")," et ",(0,r.kt)("inlineCode",{parentName:"td"},"created_at")," en TIMESTAMP")))),(0,r.kt)("h2",{id:"il-manque-quelque-chose-"},"Il manque quelque chose ?"),(0,r.kt)("p",null,"Si vous rencontrez des probl\xe8mes avec la documentation ou si vous avez des suggestions pour am\xe9liorer la documentation ou le projet en g\xe9n\xe9ral, veuillez d\xe9poser une issue pour nous, ou envoyer un tweet mentionnant le compte Twitter @BowFramework ou sur directement sur le ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bowphp/docs/issues"},"github"),"."))}m.isMDXComponent=!0}}]);