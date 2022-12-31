"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6377],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,h=c["".concat(p,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9886:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={id:"http-upload",title:"\ud83d\udeeb Envoie de fichier"},o=void 0,l={unversionedId:"http-upload",id:"version-4.x/http-upload",title:"\ud83d\udeeb Envoie de fichier",description:"- Traiter les fichiers envoy\xe9s",source:"@site/versioned_docs/version-4.x/upload.md",sourceDirName:".",slug:"/http-upload",permalink:"/docs/http-upload",draft:!1,editUrl:"https://crowdin.com/project/bowphp/fr",tags:[],version:"4.x",lastUpdatedBy:"Franck DAKIA",lastUpdatedAt:1672493455,formattedLastUpdatedAt:"31 d\xe9c. 2022",frontMatter:{id:"http-upload",title:"\ud83d\udeeb Envoie de fichier"}},p={},s=[{value:"Traiter les fichiers envoy\xe9s",id:"traiter-les-fichiers-envoy\xe9s",level:2},{value:"Determiner si un fichier existe",id:"determiner-si-un-fichier-existe",level:2},{value:"Validation des t\xe9l\xe9chargements r\xe9ussis",id:"validation-des-t\xe9l\xe9chargements-r\xe9ussis",level:2},{value:"Savegarder le fichier",id:"savegarder-le-fichier",level:2},{value:"Il manque quelque chose ?",id:"il-manque-quelque-chose-",level:2}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#traiter-les-fichiers-envoy%C3%A9s"},"Traiter les fichiers envoy\xe9s")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#determiner-si-un-fichier-existe"},"Determiner si un fichier existe")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#validation-des-t%C3%A9l%C3%A9chargements-r%C3%A9ussis"},"Validation des t\xe9l\xe9chargements r\xe9ussis")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#savegarder-le-fichier"},"Savegarder le fichier")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#il-manque-quelque-chose-"},"Il manque quelque chose ?"))),(0,a.kt)("h2",{id:"traiter-les-fichiers-envoy\xe9s"},"Traiter les fichiers envoy\xe9s"),(0,a.kt)("p",null,"Souvent les requ\xeates sont associ\xe9s \xe0 des fichiers envoy\xe9s par l'utilisateur, vous pouvez traiter ces fichiers sur ",(0,a.kt)("a",{parentName:"p",href:"https://bowphp.com/api/master/Bow/Http/Request.html"},(0,a.kt)("inlineCode",{parentName:"a"},"Bow\\Http\\Request"))," les m\xe9thodes ",(0,a.kt)("inlineCode",{parentName:"p"},"file")," et le helper du m\xeame nom."),(0,a.kt)("p",null,"Consid\xe9rons le formulaire suivant:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<form action="/upload" method="post" enctype="multipart/form-data">\n  <input type="file" name="photo" accept="image/png"><br/>\n  <button type="submit">Uploader</button>\n</form>\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Comment avoir acc\xe8s au fichier envoy\xe9 ?")),(0,a.kt)("p",null,"Ici nous pouvons utiliser la m\xe9thode ",(0,a.kt)("inlineCode",{parentName:"p"},"file")," qui retourne ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," ou une instance de ",(0,a.kt)("a",{parentName:"p",href:"https://bowphp.com/api/master/Bow/Http/UploadFile.html"},(0,a.kt)("inlineCode",{parentName:"a"},"Bow\\Http\\UploadFile")),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use Bow\\Http\\Request;\n\n$app->post('/upload', function(Request $request) {\n  $file = $request->file('photo');\n  // ou\n  $file = file('photo');\n\n  debug($file);\n});\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},'// Debug output\nUploadFile {#92 \u25bc\n  -file: array:5 [\u25bc\n    "name" => "23270116.png"\n    "type" => "image/png"\n    "tmp_name" => "/tmp/phpellwCx"\n    "error" => 0\n    "size" => 7388\n  ]\n}\n')),(0,a.kt)("h2",{id:"determiner-si-un-fichier-existe"},"Determiner si un fichier existe"),(0,a.kt)("p",null,"Vous pouvez d\xe9terminer si un fichier est pr\xe9sent sur la requ\xeate en utilisant la m\xe9thode ",(0,a.kt)("inlineCode",{parentName:"p"},"hasFile"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"if ($request->hasFile('photo')) {\n  //\n}\n")),(0,a.kt)("h2",{id:"validation-des-t\xe9l\xe9chargements-r\xe9ussis"},"Validation des t\xe9l\xe9chargements r\xe9ussis"),(0,a.kt)("p",null,"Vous pouvez v\xe9rifier qu'il n'y a pas eu de probl\xe8mes lors du t\xe9l\xe9chargement avec la m\xe9thode ",(0,a.kt)("inlineCode",{parentName:"p"},"isUploaded"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$file = $request->file('photo');\n\nif ($file->isUploaded()) {\n  // Code ici\n}\n")),(0,a.kt)("h2",{id:"savegarder-le-fichier"},"Savegarder le fichier"),(0,a.kt)("p",null,"Cela consiste juste \xe0 d\xe9placer le fichier uploader dans une autre dossier et ceci grace \xe0 la m\xe9thode ",(0,a.kt)("inlineCode",{parentName:"p"},"moveTo"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$file = $request->file('photo');\n\n$file->moveTo(\"/path/to/your/store/directory\", $filename = null);\n")),(0,a.kt)("p",null,"Si ",(0,a.kt)("inlineCode",{parentName:"p"},"$filename")," est ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),", sa valeur sera le nom du fichier hasher avec la m\xe9thode ",(0,a.kt)("a",{parentName:"p",href:"https://bowphp.com/api/master/Bow/Http/UploadFile.html#method_getHashName"},(0,a.kt)("inlineCode",{parentName:"a"},"getHashName")),"."),(0,a.kt)("p",null,"Souvent dans le cas o\xf9 vous attendez des fichiers envoy\xe9 via un formulaire dont le champs est sous la forme ",(0,a.kt)("inlineCode",{parentName:"p"},"photo[]"),". la m\xe9thode ",(0,a.kt)("inlineCode",{parentName:"p"},"file")," retourne une ",(0,a.kt)("a",{parentName:"p",href:"https://bowphp.com/api/master/Bow/Support/Collection.html"},(0,a.kt)("inlineCode",{parentName:"a"},"Bow\\Support\\Collection")),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<form action="/upload" method="post" enctype="multipart/form-data">\n  <label>Fichier 1: <input type="file" name="photo[]" accept="image/png"></label><br/>\n  <label>Fichier 2: <input type="file" name="photo[]" accept="image/png"></label><br/>\n  <button type="submit">Uploader</button>\n</form>\n')),(0,a.kt)("p",null,"Dans cette exemple, la m\xe9thode ",(0,a.kt)("inlineCode",{parentName:"p"},"file")," retournera une ",(0,a.kt)("a",{parentName:"p",href:"https://bowphp.com/api/master/Bow/Support/Collection.html"},(0,a.kt)("inlineCode",{parentName:"a"},"Bow\\Support\\Collection"))," qui contiendra pour chaque oruccencre une instance de ",(0,a.kt)("a",{parentName:"p",href:"https://bowphp.com/api/master/Bow/Http/UploadFile.html"},(0,a.kt)("inlineCode",{parentName:"a"},"Bow\\Http\\UploadFile")),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use Bow\\Http\\Request;\nuse Bow\\Http\\UploadFile;\n\n$app->get('/upload', function (Request $request)\n{\n  $files = $request->file('photo');\n\n  if (!$files->isEmpty()) {\n    $files->each(function(UploadFile $file) {\n      $file->moveTo(\"/path/to/your/store/directory\");\n    });\n  }\n});\n")),(0,a.kt)("h2",{id:"il-manque-quelque-chose-"},"Il manque quelque chose ?"),(0,a.kt)("p",null,"Si vous rencontrez des probl\xe8mes avec la documentation ou si vous avez des suggestions pour am\xe9liorer la documentation ou le projet en g\xe9n\xe9ral, veuillez d\xe9poser une issue pour nous, ou envoyer un tweet mentionnant le compte Twitter @BowFramework ou sur directement sur le ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bowphp/docs/issues"},"github"),"."))}c.isMDXComponent=!0}}]);