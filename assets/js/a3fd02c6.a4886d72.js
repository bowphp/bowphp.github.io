"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6118],{3905:(e,n,t)=>{t.d(n,{Zo:()=>i,kt:()=>k});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),d=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},i=function(e){var n=d(e.components);return a.createElement(u.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=d(t),c=r,k=p["".concat(u,".").concat(c)]||p[c]||m[c]||o;return t?a.createElement(k,l(l({ref:n},i),{},{components:t})):a.createElement(k,l({ref:n},i))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=c;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var d=2;d<o;d++)l[d]=t[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},4371:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=t(7462),r=(t(7294),t(3905));const o={id:"orm",title:"\ud83e\udde9 ORM Barry"},l=void 0,s={unversionedId:"en/orm",id:"version-4.x/en/orm",title:"\ud83e\udde9 ORM Barry",description:"BARRY ORM",source:"@site/versioned_docs/version-4.x/en/orm.md",sourceDirName:"en",slug:"/en/orm",permalink:"/docs/en/orm",draft:!1,editUrl:"https://crowdin.com/project/bowphp/fr",tags:[],version:"4.x",lastUpdatedBy:"Franck DAKIA",lastUpdatedAt:1672493455,formattedLastUpdatedAt:"31 d\xe9c. 2022",frontMatter:{id:"orm",title:"\ud83e\udde9 ORM Barry"}},u={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Ajouter un model",id:"ajouter-un-model",level:2},{value:"Nom de Table",id:"nom-de-table",level:3},{value:"Cl\xe9s primaires",id:"cl\xe9s-primaires",level:3},{value:"R\xe9cup\xe9rer les donn\xe9es",id:"r\xe9cup\xe9rer-les-donn\xe9es",level:2},{value:"Ajout de contraintes suppl\xe9mentaires",id:"ajout-de-contraintes-suppl\xe9mentaires",level:2},{value:"R\xe9cup\xe9ration d&#39;agr\xe9gats",id:"r\xe9cup\xe9ration-dagr\xe9gats",level:2},{value:"Insertion et mise \xe0 jour de mod\xe8les",id:"insertion-et-mise-\xe0-jour-de-mod\xe8les",level:2},{value:"INSERT",id:"insert",level:3},{value:"Insert via CREATE",id:"insert-via-create",level:3},{value:"UPDATE",id:"update",level:3},{value:"Suppression de donn\xe9e",id:"suppression-de-donn\xe9e",level:2},{value:"Il manque quelque chose ?",id:"il-manque-quelque-chose-",level:2}],i={toc:d};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{align:"center"},(0,r.kt)("img",{src:"https://raw.githubusercontent.com/bowphp/arts/master/barry.jpg",width:"150px"}),(0,r.kt)("br",null),(0,r.kt)("span",null,"BARRY ORM")),(0,r.kt)("p",{align:"center"},"BARRY c'est l'ORM (",(0,r.kt)("strong",null,"Object Relation Mapping"),") int\xe9gr\xe9 dans Bow Framework."),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Un ORM c'est une fa\xe7on de r\xe9lier les tables entre elles en utilisant des classes. Ici chaque enregistrement d'une table repr\xe9sentera un Objet qui peut \xeatre en r\xe9lation avec d'autre enregistrement. C'est ce qu'on appel en anglais ",(0,r.kt)("strong",{parentName:"p"},"The Object Relation Mapping")," et en fran\xe7ais ben, Mappage de r\xe9lation en Objet \ud83d\ude09."),(0,r.kt)("p",null,"L'ORM BARRY inclus avec Bow Framework fournit une impl\xe9mentation ActiveRecord belle et simple pour travailler avec votre base de donn\xe9es. Chaque table de base de donn\xe9es a un \"mod\xe8le\" correspondant qui est utilis\xe9 pour interagir avec cette table. Les mod\xe8les vous permettent de rechercher des donn\xe9es dans vos tables, ainsi que d'ins\xe9rer de nouveaux enregistrements dans la table."),(0,r.kt)("p",null,"Dans tout bon Framework qui se respect, il y a un syst\xe8me de ORM et qui poss\xe9de un nom super mignon. Celui de Bow se nomme ",(0,r.kt)("strong",{parentName:"p"},"BARRY"),", n'est pas mignon \xe7a \ud83d\ude04."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Avant de commencer, assurez-vous de configurer une connexion \xe0 la base de donn\xe9es dans ",(0,r.kt)("inlineCode",{parentName:"p"},"config/database.php"),".")),(0,r.kt)("p",null,"Avant de continuer veuillez ajouter une migration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"php bow add:migration CreateTodoTable\n")),(0,r.kt)("p",null,"Ensuite modifiez la migration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"public function up()\n{\n  $this->create(\"todos\", function (SQLGenerator $table) {\n    $table->addIncrement('id');\n    $table->addString('title');\n    $table->addString('status', 0);\n    $table->addInteger('budget', 0);\n    $table->addTimestamps();\n  });\n}\n")),(0,r.kt)("p",null,"En fin de faire la migration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"php bow migration:migrate\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Cette migration sera utilis\xe9 pour vous permettre de faire directement les tests sur le mod\xe8le ",(0,r.kt)("inlineCode",{parentName:"p"},"App\\Models\\Todo::class"),".")),(0,r.kt)("h2",{id:"ajouter-un-model"},"Ajouter un model"),(0,r.kt)("p",null,"Pour ajouter un mod\xeale il faut utiliser la ligne de commande ",(0,r.kt)("inlineCode",{parentName:"p"},"php bow")," avec la commande ",(0,r.kt)("inlineCode",{parentName:"p"},"add:model")," suivi du nom du model."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"php bow add:model Todo\n")),(0,r.kt)("p",null,"Apr\xe8s cr\xe9ation du modele, un fichier du meme nom sera cr\xe9er, dans note cas ",(0,r.kt)("inlineCode",{parentName:"p"},"Todo.php"),", \xe0 la racine du dossier ",(0,r.kt)("inlineCode",{parentName:"p"},"app/Models"),"."),(0,r.kt)("p",null,"Voici un aper\xe7u du fichier:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Models;\n\nuse Bow\\Database\\Barry\\Model;\n\nclass Todo extends Model\n{\n  //\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Avant d'utiliser le model v\xe9rifier que vous avez configurer votre base de donn\xe9e")),(0,r.kt)("h3",{id:"nom-de-table"},"Nom de Table"),(0,r.kt)("p",null,"Notez que nous n'avons pas indiqu\xe9 \xe0 BARRY quelle table utiliser pour notre mod\xe8le Todo. Par convention, le \"snake case\", le nom pluriel de la classe sera utilis\xe9 comme nom de table \xe0 moins qu'un autre nom ne soit explicitement sp\xe9cifi\xe9."),(0,r.kt)("p",null,"Vous pouvez sp\xe9cifier manuellement un nom de table en d\xe9finissant une propri\xe9t\xe9 de table sur votre mod\xe8le:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Models;\n\nuse Bow\\Database\\Barry\\Model;\n\nclass Todo extends Model\n{\n  /**\n   * D\xe9finissez la table associ\xe9e au mod\xe8le.\n   *\n   * @var string\n   */\n  protected $table = 'tbl_todos';\n}\n")),(0,r.kt)("h3",{id:"cl\xe9s-primaires"},"Cl\xe9s primaires"),(0,r.kt)("p",null,"BARRY supposera \xe9galement que chaque table a une colonne de cl\xe9 primaire nomm\xe9e id. Vous pouvez d\xe9finir une propri\xe9t\xe9 ",(0,r.kt)("inlineCode",{parentName:"p"},"$primary_key")," prot\xe9g\xe9e pour remplacer cette convention:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Models;\n\nuse Bow\\Database\\Barry\\Model;\n\nclass Todo extends Model\n{\n  /**\n   * La cl\xe9 primaire associ\xe9e \xe0 la table.\n   *\n   * @var string\n   */\n  protected $primary_key = 'id_todo';\n}\n")),(0,r.kt)("h2",{id:"r\xe9cup\xe9rer-les-donn\xe9es"},"R\xe9cup\xe9rer les donn\xe9es"),(0,r.kt)("p",null,"Une fois que vous avez cr\xe9\xe9 un mod\xe8le et sa table de base de donn\xe9es associ\xe9e, vous \xeates pr\xeat \xe0 commencer \xe0 r\xe9cup\xe9rer les donn\xe9es de votre base de donn\xe9es. Consid\xe9rez chaque mod\xe8le BARRY comme un puissant ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/query-builder"},"g\xe9n\xe9rateur de requ\xeates")," vous permettant d'interroger couramment la table de base de donn\xe9es associ\xe9e au mod\xe8le."),(0,r.kt)("p",null,"Par exemple:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use App\\Models\\Todo;\n\n$todos = Todo::all();\n\nforeach ($todos as $todo) {\n  echo $todo->title;\n}\n")),(0,r.kt)("p",null,"La m\xe9thode ",(0,r.kt)("inlineCode",{parentName:"p"},"find")," et ",(0,r.kt)("inlineCode",{parentName:"p"},"findBy")," permet aussi de r\xe9cup\xe9rer les informations:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"// Avec find\n$todo = Todo::find(1);\n\n// Avec findBy\n$todo = Todo::findBy('id', 1);\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"La m\xe9thode peut aussi retourner ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," dans le case ou il y a aucun enr\xe9gistrement trouv\xe9")),(0,r.kt)("h2",{id:"ajout-de-contraintes-suppl\xe9mentaires"},"Ajout de contraintes suppl\xe9mentaires"),(0,r.kt)("p",null,"La m\xe9thode BARRY ",(0,r.kt)("inlineCode",{parentName:"p"},"all")," retournera tous les r\xe9sultats dans le tableau du mod\xe8le. \xc9tant donn\xe9 que chaque mod\xe8le BARRY sert de ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/query-builder"},"g\xe9n\xe9rateur de requ\xeates"),", vous pouvez \xe9galement ajouter des contraintes aux requ\xeates, puis utiliser la m\xe9thode get pour r\xe9cup\xe9rer les r\xe9sultats:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$flights = App\\Models\\Todo::where('status', 'done')\n            ->orderBy('titie', 'desc')\n            ->take(10)\n            ->get();\n")),(0,r.kt)("h2",{id:"r\xe9cup\xe9ration-dagr\xe9gats"},"R\xe9cup\xe9ration d'agr\xe9gats"),(0,r.kt)("p",null,"Vous pouvez \xe9galement utiliser les m\xe9thodes ",(0,r.kt)("inlineCode",{parentName:"p"},"count"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"sum"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"max")," et d'autres m\xe9thodes d'agr\xe9gation fournies par le ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/query-builder"},"g\xe9n\xe9rateur de requ\xeates"),". Ces m\xe9thodes renvoient la valeur scalaire appropri\xe9e au lieu d'une instance de mod\xe8le compl\xe8te:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use App\\Models\\Todo;\n\n$count = Todo::where('status', 'done')->count();\n\n$max = Todo::where('status', 'done')->max('budget');\n")),(0,r.kt)("h2",{id:"insertion-et-mise-\xe0-jour-de-mod\xe8les"},"Insertion et mise \xe0 jour de mod\xe8les"),(0,r.kt)("h3",{id:"insert"},"INSERT"),(0,r.kt)("p",null,"Pour cr\xe9er un nouvel enregistrement dans la base de donn\xe9es, cr\xe9ez une nouvelle instance de mod\xe8le, d\xe9finissez des attributs sur le mod\xe8le, puis appelez la m\xe9thode de sauvegarde:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"\nnamespace App\\Http\\Controllers;\n\nuse App\\Controllers\\Controller;\nuse App\\Models\\Todo;\nuse Bow\\Http\\Request;\n\nclass TodoController extends Controller\n{\n  /**\n   * Cr\xe9ez une nouvelle instance de todo.\n   *\n   * @param Request $request\n   * @return mixed\n   */\n  public function store(Request $request)\n  {\n    // Validez la demande...\n\n    $todo = new Todo;\n\n    $todo->title = $request->get('title');\n    $todo->budget = $request->get('budget', 0);\n    $todo->status = 'pending';\n\n    $todo->save();\n  }\n}\n")),(0,r.kt)("p",null,"Dans cet exemple, nous affectons le param\xe8tre de nom de la requ\xeate HTTP entrante \xe0 les attributs ",(0,r.kt)("inlineCode",{parentName:"p"},"title"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"budget")," de l'instance de mod\xe8le ",(0,r.kt)("inlineCode",{parentName:"p"},"App\\Models\\Todo"),". Lorsque nous appelons la m\xe9thode ",(0,r.kt)("inlineCode",{parentName:"p"},"save"),", un enregistrement sera ins\xe9r\xe9 dans la base de donn\xe9es. Les horodatages ",(0,r.kt)("inlineCode",{parentName:"p"},"created_at")," et ",(0,r.kt)("inlineCode",{parentName:"p"},"updated_at")," seront automatiquement d\xe9finis lorsque la m\xe9thode de sauvegarde sera appel\xe9e, il n'est donc pas n\xe9cessaire de les d\xe9finir manuellement."),(0,r.kt)("h3",{id:"insert-via-create"},"Insert via CREATE"),(0,r.kt)("p",null,"Les objets Active Record peuvent \xeatre cr\xe9\xe9s \xe0 partir d'un hachage, d'un bloc ou avoir leurs attributs d\xe9finis manuellement apr\xe8s la cr\xe9ation. La nouvelle m\xe9thode renverra un nouvel objet tandis que ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," renverra l'objet et l'enregistrera dans la base de donn\xe9es."),(0,r.kt)("p",null,"Par exemple, \xe9tant donn\xe9 un utilisateur mod\xe8le avec des attributs de nom et d'occupation, l'appel de la m\xe9thode create cr\xe9era et enregistrera un nouvel enregistrement dans la base de donn\xe9es:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use App\\Models\\Todo;\n\n$user = Todo::create([\n  'title' => 'Acheter un ticket metro',\n  'budget' => 2000,\n  'status' => 'pending',\n]);\n")),(0,r.kt)("h3",{id:"update"},"UPDATE"),(0,r.kt)("p",null,"La m\xe9thode ",(0,r.kt)("inlineCode",{parentName:"p"},"save")," peut \xe9galement \xeatre utilis\xe9e pour mettre \xe0 jour des mod\xe8les qui existent d\xe9j\xe0 dans la base de donn\xe9es. Pour mettre \xe0 jour un mod\xe8le, vous devez le r\xe9cup\xe9rer, d\xe9finir les attributs que vous souhaitez mettre \xe0 jour, puis appeler la m\xe9thode ",(0,r.kt)("inlineCode",{parentName:"p"},"save"),". Encore une fois, l'horodatage ",(0,r.kt)("inlineCode",{parentName:"p"},"updated_at")," sera automatiquement mis \xe0 jour, il n'est donc pas n\xe9cessaire de d\xe9finir manuellement sa valeur:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use App\\Models\\Todo;\n\n$todo = Todo::find(1);\n\n$todo->title = 'Shopping pour Franck';\n\n$todo->save();\n")),(0,r.kt)("p",null,"Ou bien vous pouvez aussi utiliser la methode ",(0,r.kt)("inlineCode",{parentName:"p"},"update"),". Seulement vous d\xe9vez definir les conditions pour ainsi limiter l'impact de la mise \xe0 jour."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use App\\Models\\Todo;\n\nTodo::where('status', 'done')\n  ->update(['title' => 'Achat de ticket d\\'avion']);\n")),(0,r.kt)("p",null,"La m\xe9thode ",(0,r.kt)("inlineCode",{parentName:"p"},"update")," attend un tableau de paires de colonnes et de valeurs repr\xe9sentant les colonnes \xe0 mettre \xe0 jour."),(0,r.kt)("h2",{id:"suppression-de-donn\xe9e"},"Suppression de donn\xe9e"),(0,r.kt)("p",null,"De m\xeame, une fois r\xe9cup\xe9r\xe9, un objet Active Record peut \xeatre d\xe9truit, ce qui le supprime de la base de donn\xe9es."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use App\\Models\\Todo;\n\n$todo = Todo::find(1);\n$todo->delete();\n")),(0,r.kt)("p",null,"Si vous souhaitez supprimer plusieurs enregistrements en masse, vous pouvez utiliser la m\xe9thode ",(0,r.kt)("inlineCode",{parentName:"p"},"destroyBy")," ou ",(0,r.kt)("inlineCode",{parentName:"p"},"truncate"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"// Delete all todo by id\nTodo::deleteBy('id', 'David');\n\n// delete all todo\nTodo::truncate();\n")),(0,r.kt)("h2",{id:"il-manque-quelque-chose-"},"Il manque quelque chose ?"),(0,r.kt)("p",null,"Si vous rencontrez des probl\xe8mes avec la documentation ou si vous avez des suggestions pour am\xe9liorer la documentation ou le projet en g\xe9n\xe9ral, veuillez d\xe9poser une issue pour nous, ou envoyer un tweet mentionnant le compte Twitter @BowFramework ou sur directement sur le ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bowphp/docs/issues"},"github"),"."))}p.isMDXComponent=!0}}]);