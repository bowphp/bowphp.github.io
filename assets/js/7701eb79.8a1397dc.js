"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[718],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(a),c=l,k=u["".concat(d,".").concat(c)]||u[c]||m[c]||r;return a?n.createElement(k,i(i({ref:t},s),{},{components:a})):n.createElement(k,i({ref:t},s))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6380:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(7462),l=(a(7294),a(3905));const r={id:"mail",title:"\u2709\ufe0f Envoie de Mail"},i=void 0,o={unversionedId:"en/mail",id:"version-4.x/en/mail",title:"\u2709\ufe0f Envoie de Mail",description:"- Introduction",source:"@site/versioned_docs/version-4.x/en/mail.md",sourceDirName:"en",slug:"/en/mail",permalink:"/docs/en/mail",draft:!1,editUrl:"https://crowdin.com/project/bowphp/fr",tags:[],version:"4.x",lastUpdatedBy:"Franck DAKIA",lastUpdatedAt:1672493455,formattedLastUpdatedAt:"31 d\xe9c. 2022",frontMatter:{id:"mail",title:"\u2709\ufe0f Envoie de Mail"}},d={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Utilisation",id:"utilisation",level:2},{value:"La m\xe9thode send",id:"la-m\xe9thode-send",level:3},{value:"Prototype send",id:"prototype-send",level:4},{value:"API de Message",id:"api-de-message",level:3},{value:"<code>addHeader</code>, ajout des ent\xeates personnalis\xe9s",id:"addheader-ajout-des-ent\xeates-personnalis\xe9s",level:5},{value:"<code>to</code>, d\xe9finit le destinataire",id:"to-d\xe9finit-le-destinataire",level:5},{value:"<code>toList</code>, Ajout plusieurs destinataires",id:"tolist-ajout-plusieurs-destinataires",level:5},{value:"<code>addFile</code>, Permet d&#39;ajouter une pi\xe8ce jointe",id:"addfile-permet-dajouter-une-pi\xe8ce-jointe",level:5},{value:"<code>subject</code>, D\xe9finit l&#39;objet du mail",id:"subject-d\xe9finit-lobjet-du-mail",level:5},{value:"<code>from</code>, d\xe9finit l&#39;exp\xe9diteur du mail",id:"from-d\xe9finit-lexp\xe9diteur-du-mail",level:5},{value:"<code>toHtml</code>, d\xe9finir le type de contenu en text/html",id:"tohtml-d\xe9finir-le-type-de-contenu-en-texthtml",level:5},{value:"<code>toText</code>, D\xe9finit le corps du message",id:"totext-d\xe9finit-le-corps-du-message",level:5},{value:"<code>addBcc</code>, ajout l&#39;ent\xeate Carbon Copy",id:"addbcc-ajout-lent\xeate-carbon-copy",level:5},{value:"<code>addCc</code>, ajout l&#39;ent\xeate Carbon Copy",id:"addcc-ajout-lent\xeate-carbon-copy",level:5},{value:"<code>addReplyTo</code>, ajout l&#39;ent\xeate Reply-To",id:"addreplyto-ajout-lent\xeate-reply-to",level:5},{value:"<code>addReturnPath</code>, ajout l&#39;ent\xeate Return-Path",id:"addreturnpath-ajout-lent\xeate-return-path",level:5},{value:"La m\xe9thode raw",id:"la-m\xe9thode-raw",level:3},{value:"Prototype raw",id:"prototype-raw",level:4},{value:"Il manque quelque chose ?",id:"il-manque-quelque-chose-",level:2}],s={toc:p};function u(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#introduction"},"Introduction")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#configuration"},"Configuration")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#utilisation"},"Utilisation"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#la-m%C3%A9thode-send"},"La m\xe9thode send"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#prototype-send"},"Prototype send")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#api-de-message"},"API de Message"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#addheader-ajout-des-ent%C3%AAtes-personnalis%C3%A9s"},(0,l.kt)("inlineCode",{parentName:"a"},"addHeader"),", ajout des ent\xeates personnalis\xe9s")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#to-d%C3%A9finit-le-destinataire"},(0,l.kt)("inlineCode",{parentName:"a"},"to"),", d\xe9finit le destinataire")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#tolist-ajout-plusieurs-destinataires"},(0,l.kt)("inlineCode",{parentName:"a"},"toList"),", Ajout plusieurs destinataires")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#addfile-permet-dajouter-une-pi%C3%A8ce-jointe"},(0,l.kt)("inlineCode",{parentName:"a"},"addFile"),", Permet d'ajouter une pi\xe8ce jointe")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#subject-d%C3%A9finit-lobjet-du-mail"},(0,l.kt)("inlineCode",{parentName:"a"},"subject"),", D\xe9finit l'objet du mail")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#from-d%C3%A9finit-lexp%C3%A9diteur-du-mail"},(0,l.kt)("inlineCode",{parentName:"a"},"from"),", d\xe9finit l'exp\xe9diteur du mail")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#tohtml-d%C3%A9finir-le-type-de-contenu-en-texthtml"},(0,l.kt)("inlineCode",{parentName:"a"},"toHtml"),", d\xe9finir le type de contenu en text/html")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#totext-d%C3%A9finit-le-corps-du-message"},(0,l.kt)("inlineCode",{parentName:"a"},"toText"),", D\xe9finit le corps du message")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#addbcc-ajout-lent%C3%AAte-carbon-copy"},(0,l.kt)("inlineCode",{parentName:"a"},"addBcc"),", ajout l'ent\xeate Carbon Copy")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#addcc-ajout-lent%C3%AAte-carbon-copy"},(0,l.kt)("inlineCode",{parentName:"a"},"addCc"),", ajout l'ent\xeate Carbon Copy")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#addreplyto-ajout-lent%C3%AAte-reply-to"},(0,l.kt)("inlineCode",{parentName:"a"},"addReplyTo"),", ajout l'ent\xeate Reply-To")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#addreturnpath-ajout-lent%C3%AAte-return-path"},(0,l.kt)("inlineCode",{parentName:"a"},"addReturnPath"),", ajout l'ent\xeate Return-Path")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#la-m%C3%A9thode-raw"},"La m\xe9thode raw"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#prototype-raw"},"Prototype raw"))))))),(0,l.kt)("h2",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"Envoyer des emails dans une application est monnaie courante. Bow Framework int\xe8gre un syst\xe8me d'envoi d'email facile \xe0 utiliser. Vous pouvez utiliser ce syst\xe8me \xe0 travers plusieurs pilotes communement appel\xe9s drivers:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"SMTP")," - Envoie direct via un serveur SMTP"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"SES")," - Vous pouvez aussi utiliser ",(0,l.kt)("a",{parentName:"li",href:"https://aws.amazon.com/fr/ses/"},"SES")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"MAIL")," - Le syst\xe8me utilisera le fonction ",(0,l.kt)("inlineCode",{parentName:"li"},"email")," natif de PHP")),(0,l.kt)("h2",{id:"configuration"},"Configuration"),(0,l.kt)("p",null,"Vous trouverez la configuration dans le fichier ",(0,l.kt)("inlineCode",{parentName:"p"},"config/mail.php")," qui est r\xe9lativement simple, les options sont toutes comment\xe9s."),(0,l.kt)("p",null,"Installez les packages suppl\xe9mentaire"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'ses "aws/aws-sdk-php"')),(0,l.kt)("h2",{id:"utilisation"},"Utilisation"),(0,l.kt)("p",null,"Pour utiliser le service, vous devez appeler la classe ",(0,l.kt)("a",{parentName:"p",href:"https://bowphp.com/api/master/Bow/Mail"},(0,l.kt)("inlineCode",{parentName:"a"},"Bow\\Mail\\Mail::class")),". Il y a deux m\xe9thode statique pour l'envoie de mail ",(0,l.kt)("inlineCode",{parentName:"p"},"email")," et ",(0,l.kt)("inlineCode",{parentName:"p"},"raw_email"),"."),(0,l.kt)("h3",{id:"la-m\xe9thode-send"},"La m\xe9thode send"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"email")," permet d'envoyer des emails en se basant sur une ",(0,l.kt)("a",{parentName:"p",href:"./views"},"vue")," dans l'application."),(0,l.kt)("h4",{id:"prototype-send"},"Prototype send"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"email($view, array $data, callable $callable)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param\xe8tre"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"view"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")," L'email du destinataire")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Array")," Les informations \xe0 passer \xe0 la vue")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callable"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Closure")," Le constructeur du message")))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"$callable")," vous permet de construire le message et prend en param\xe8tre une instance de ",(0,l.kt)("a",{parentName:"p",href:"https://bowphp.com/api/master/Bow/Mail/Message.html"},(0,l.kt)("inlineCode",{parentName:"a"},"Bow\\Mail\\Message"))," qui permet d'ajouter le destinataire, l'objet, les pi\xe8ces jointes, l'exp\xe9diteur."),(0,l.kt)("p",null,"Exemple d'utilisation:"),(0,l.kt)("p",null,"Consid\xe9rons la vue ",(0,l.kt)("inlineCode",{parentName:"p"},"email-view.tintin.php")," qui contient les informations suivantes:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jinja"},"Bonjour {{ $name }},\n\nNous vous informons que vous compte viens d'\xeatre cr\xe9diter de 100.000.000 F.\n\nCordialement,\n")),(0,l.kt)("p",null,"Ecrivons maintenant le code qui envoie le mail:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"use Bow\\Mail\\Mail;\nuse Bow\\Mail\\Message;\n\n$data = [\n  'name' => 'Franck',\n];\n\nMail::send('email-view', $data, function (Message $message) {\n  $message->to('info@exemple.com');\n  $message->subject(\"Paiement !\");\n  $messate->from(\"Bow <info@exemple.com>\");\n});\n")),(0,l.kt)("h3",{id:"api-de-message"},"API de Message"),(0,l.kt)("p",null,"Bow Framework va donc passer une instance de ",(0,l.kt)("inlineCode",{parentName:"p"},"Bow\\Mail\\Message")," qui vous permettra d'ajouter des informations suppl\xe9mentaires \xe0 votre email, notamment le destinataire."),(0,l.kt)("h5",{id:"addheader-ajout-des-ent\xeates-personnalis\xe9s"},(0,l.kt)("inlineCode",{parentName:"h5"},"addHeader"),", ajout des ent\xeates personnalis\xe9s"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"$message->addHeader(string $key, string $value)\n")),(0,l.kt)("h5",{id:"to-d\xe9finit-le-destinataire"},(0,l.kt)("inlineCode",{parentName:"h5"},"to"),", d\xe9finit le destinataire"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"$message->to(string $to, string $name = null)\n")),(0,l.kt)("h5",{id:"tolist-ajout-plusieurs-destinataires"},(0,l.kt)("inlineCode",{parentName:"h5"},"toList"),", Ajout plusieurs destinataires"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"$message->toList(array $list_desc)\n")),(0,l.kt)("h5",{id:"addfile-permet-dajouter-une-pi\xe8ce-jointe"},(0,l.kt)("inlineCode",{parentName:"h5"},"addFile"),", Permet d'ajouter une pi\xe8ce jointe"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"$message->addFile(string $file)\n")),(0,l.kt)("h5",{id:"subject-d\xe9finit-lobjet-du-mail"},(0,l.kt)("inlineCode",{parentName:"h5"},"subject"),", D\xe9finit l'objet du mail"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"$message->subject(string $subject)\n")),(0,l.kt)("h5",{id:"from-d\xe9finit-lexp\xe9diteur-du-mail"},(0,l.kt)("inlineCode",{parentName:"h5"},"from"),", d\xe9finit l'exp\xe9diteur du mail"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"$message->from(string $from, string $name = null)\n")),(0,l.kt)("h5",{id:"tohtml-d\xe9finir-le-type-de-contenu-en-texthtml"},(0,l.kt)("inlineCode",{parentName:"h5"},"toHtml"),", d\xe9finir le type de contenu en text/html"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"$message->html($html)\n")),(0,l.kt)("h5",{id:"totext-d\xe9finit-le-corps-du-message"},(0,l.kt)("inlineCode",{parentName:"h5"},"toText"),", D\xe9finit le corps du message"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"$message->text(string $text)\n")),(0,l.kt)("h5",{id:"addbcc-ajout-lent\xeate-carbon-copy"},(0,l.kt)("inlineCode",{parentName:"h5"},"addBcc"),", ajout l'ent\xeate Carbon Copy"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"$message->addBcc(string $mail, string $name = null)\n")),(0,l.kt)("h5",{id:"addcc-ajout-lent\xeate-carbon-copy"},(0,l.kt)("inlineCode",{parentName:"h5"},"addCc"),", ajout l'ent\xeate Carbon Copy"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"$message->addCc(string $mail, string $name = null)\n")),(0,l.kt)("h5",{id:"addreplyto-ajout-lent\xeate-reply-to"},(0,l.kt)("inlineCode",{parentName:"h5"},"addReplyTo"),", ajout l'ent\xeate Reply-To"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"$message->addReplyTo(string $mail, $name = null)\n")),(0,l.kt)("h5",{id:"addreturnpath-ajout-lent\xeate-return-path"},(0,l.kt)("inlineCode",{parentName:"h5"},"addReturnPath"),", ajout l'ent\xeate Return-Path"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"$message->addReturnPath(string $mail, $name = null)\n")),(0,l.kt)("h3",{id:"la-m\xe9thode-raw"},"La m\xe9thode raw"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"raw")," par contre, permet d'envoyer des emails avec un message brute"),(0,l.kt)("h4",{id:"prototype-raw"},"Prototype raw"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"raw_email($to, $subject, $message, array $headers = [])\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param\xe8tre"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"to"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")," L'email du destinataire")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"subject"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")," L'objet du mail")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")," Le message \xe0 envoyer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"headers"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Array")," Les ent\xeate-https \xe0 envoyer, par defaut est vide")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},'use Bow\\Mail\\Mail;\n\n$email = "hello@exemple.com";\n$subject = "Hello, world";\n$message = "C\'est juste un email de teste";\n\nMail::raw($email, $subject, $message);\n')),(0,l.kt)("h2",{id:"il-manque-quelque-chose-"},"Il manque quelque chose ?"),(0,l.kt)("p",null,"Si vous rencontrez des probl\xe8mes avec la documentation ou si vous avez des suggestions pour am\xe9liorer la documentation ou le projet en g\xe9n\xe9ral, veuillez d\xe9poser une issue pour nous, ou envoyer un tweet mentionnant le compte Twitter @BowFramework ou sur directement sur le ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/bowphp/docs/issues"},"github"),"."))}u.isMDXComponent=!0}}]);