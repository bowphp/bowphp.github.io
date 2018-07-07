Documentation
=============

Bow est un micro framework php ivoirien MVC. Ecrit pour les débutants qui veulent travail sur un projet un peut plus
grand. Cette document ce veut simple avec des exemples et les prototypes des fonctions pour vous emmener
à bien comprendre l'outil.

[![GitHub forks](https://img.shields.io/github/forks/papac/bow.svg?label=Fork&style=flat-square)](https://github.com/papac/bow)
[![docs](https://img.shields.io/packagist/v/papac/bow.svg?style=flat-square)](https://packagist.org/papac/bow)
[![Travis branch](https://img.shields.io/travis/papac/framework/master.svg?style=flat-square)](https://travis-ci.com/papac/framework)

 * [Getting Started](#documentation-getting-started)
 * [Configuration](#documentation-configuration)
 * [Routing](#documentation-routing)
 * [Controlleurs](#documentation-controlleurs)
 * [Middlewares](#documentation-middlewares)
 * [Vues](#documentation-vues)
 * [Validator](#documentation-validator)
 * [Database](#documentation-database)
 * [ORM (Maany)](#documentation-orm-maany)
 * [Mail](#documentation-mail)
 * [Collection](#documentation-collection)
 * [Event](#documentation-event)
 * [Bow (task runner)](#documentation-task-runner)
 * [Helper List](#documentation-helper-list)
 * [Extrat](#documentation-extrat)

[![GitHub forks](https://img.shields.io/github/forks/papac/bow.svg?label=Fork&style=flat-square)](https://github.com/papac/bow)
[![docs](https://img.shields.io/packagist/v/papac/bow.svg?style=flat-square)](https://packagist.org/papac/bow)
[![Travis branch](https://img.shields.io/travis/papac/framework/master.svg?style=flat-square)](https://travis-ci.com/papac/framework)


Getting started
---------------

### Préréquis

Vous devez vous assurer les différents elements suivants sont installés sur votre machine.

- php >= 5.6
- mcrypt
- mb_string
- PDO
- php-sqlite3 (optionnel) seulement si vous utiliser une db sqlite.
- php-openssl
= php-curl


### Installation

Pour installer une copie de Bow il vous faut d'abort installer [composer](https://getcomposer.org) ensuite vous lancez la commande suivant:

```shell
$ php composer.phar create-project --prefer-dist papac/bow
```

### Lancer un test

Vous pouvez tester votre application directement sans serveur web telque `apache` ou `nginx`.
Il vous suffit de vous déplacer dans le dossier de l'application et ensuite lancer la commande qui suit:

```shell
$ php bow serve
```

> Vous pouvez changer le port et le nom d'host avec les options `--host` et `--port`. Par défaut le port est à `5000`.
> et l'host est `localhost`. Si vous voulez faire sortir le serveur de sur le réseau remplacez `localhost` par `0.0.0.0`.
> et aussi ajouter options pour `php` avec `--php-settings=""`. Comme par exemple `-php-settings="-d display_errors=1"`
> ```shell
> $ php bow serve --host=localhost --port=8000
> ```

Enfin ouvrez votre navigateur et entrez l'url correspondant. Chez moi c'est `http://localhost:8000`.

### Ngnix

Pour les utilisateurs de nginx, vous devez ajouter les lignes suivantes à votre configuration.

```nginx
root /path/to/bow/public/;

location / {
	if (!-e $request_filename){
		rewrite ^(.*)$ /index.php break;
	}
}
```

[Voir la Vidéo](https://www.youtube.com/watch?v=:id 'video')

> Nous allons voir comment est configuré l'application `bow`.


Configuration
-------------

## Structure

L'orgination de `bow` respect le parten *MVC*, entendez par *M*odel *V*ue *C*ontrolleur.

| Dossier ou fichier | Description |
|---------|-------------|
| __app__ | Contient les dossiers de l'application. C'est le dossier dans lequel vous allez programmer votre application à `95%`. Il contient entre autre le dossier `Controller`, le dossier `Middelware`, le dossier `routes` et `views`, (si vous générez un validateur le dossier Validation apparaitra). Enfin tout les fichiers du model y seront stocker |
| __assets__ | Contient les assets de l'application. Il contient entre autre le dossier `js`, le dossier `sass` et le dossier `image`. Qui sont le assets de votre application. C'est la que vous allez mettre vos fichiers static et ensuite le compiler |
| __config__ | Contient tout la configuration de l'application. |
| __lang__ | Contient les dossier des langs.|
| __migration__ | Régroupe tout les fichiers de migration de la base de donnée. Il existe un fichier nommé `.registers` qui ne doit en aucun cas être supprimer, c'est la mémoire en effet du système de migration de bow|
| __public__ | Régroupe les feuilles de styles et fichier javascript ou tout autre fichier statique. (Si vous utiliser des préprocésseurs. Nous vous invitons a les mettres dans le dossier `assets` pour ensuite les compilés enfin de les protégés des acces public) |
| __storage__ | Contient le dossier dans lequel est sauvegardé les `caches`, les `logs` et le stockage de fichier uploader par le bien du système de `Storage` de bow de l'application.|
| __tests__ | Contient le dossier dans lequel vous allez faire les tests de l'application.|
| __vendor__ | Contient les dépendances de l'application. Ce dossier est généré pas `composer`. |
| __.gitignore__ | Fichier de configuration  git |
| __LICENSE__ | Licence de l'application. Nottons que la licence est MIT |
| __README.md__ | Le fichier de description de bow |
| __bow__ | Le lancer de tache de bow. `php bow help` pour voir l'aide |
| __composer.json__ | Le fichier de dependance de bow qui permet à `composer` d'install les bonnes dependance |
| __composer.lock__ | Le fichier de verrou de `composer` |
| __gulpfile.js__ | Le fichier de configuration de [`gulp`](https://npm.org/packages/gulp) |
| __package.json__ | Le fichier de configuration de [`npm`](https://npm.org) |
| __phpunit.xml__ | Le fichier de configuration de [`phpunit`](https://github.com/phpunit/phpunit) |
| __server.php__ | Le fichier de configuration du serveur local de bow. C'est ce fichier qu'utilise le lancer de tache pour activer le serveur local. |

## Configuration

Parlant de configuration. L'ensemble des configuration de votre application est accessible dont le dossier `config`.
Et est divisé en plusieur fichier pour permet un meillieur organisation.

Nous allons parler de configuration pour chacun des section dans la documentation. 
Mais pour lors, presentons les differents fichiers.

| fichier | Description |
|---------|-------------|
| __.key__ | Ce fichier contient la clé de chiffrement de l'application. Que vous pouvez changer avec la commande `php bow generate:key`. |
| __application.php__ | Ce fichier contient la configuration du comportement de votre application, le moteur de template a utiliser; le nom de votre application, etc... |
| __bootstrap.php__ | c'est le fichier qui configurement le classe de base de l'application |
| __database.php__ | Ce fichier contient votre configuration des connections à base de donnée |
| __helper.php__ | Ce fichier vous permettra d'injecter des `helper` personnaliser dans votre application |
| __mail.php__ | Ce fichier content la configuration de mail |
| __namespaces.php__ | Ce fichier contient la configuration de namspaces et des alias de middleware |
| __resource.php__ | Ce fichier contient la configuration des connections ftp, et dossier de base de stockage de l'application |


[Voir la vidéo](https://www.youtube.com/watch?v=:id 'video')

Routing
-------

Le routing vous permet de maper une url sur un controlleur ou une action particulière.
Le systeme de routing de bow est grèfé directement sur l'instance de l'application.
donc sur la variable `$app`.
Les routes de l'application sont dans le fichier `main.php` du dossier `app/routes`
de votre application.

prototype des methodes du routing

```
$app->verbe(url, [name, ], action);
```
> `verbe` correspond au verbe `http` à associer à la route, soit GET, POST, PUT, DELETE, OPTIONS, PATCH écrite en minuscule.

| paramete | Type |
|----------|------|
| url      | String |
| name      | String, le nom de la route. (optionnel) |
| action   | String, array, function. Le fonction doit retourner un element |

- Avec un callback (aussi appelé `closure` ou `callable` en `php`)

``` php
$app->verbe('/', function() {
	return 'hello world';
});
```

- Avec une collection de fonction dans un tableau:

``` php
$app->verbe('/', [function() {
	echo 'hello world';
}, function() {
	echo 'Bien merci';
}]);
```

- Avec le nom d'un controller

``` php
$app->verbe('/', 'ClassController@actionAExecuter');
```

- Avec le nom d'un controller et un middelware

``` php
$app->verbe('/', ['middleware' => 'ip', 'uses' => 'ClassController@actionAExecuter']);
```

> `verbe` correspond au verbe `http` à associer à la route, soit GET, POST, PUT, DELETE, OPTIONS, PATCH écrite en minuscule.

La mise en place du routage se faire donc via les methodes suivants:

### get

Cette methode permet de maper une url a une requête de type `GET`.

``` php
$app->get('/', function() {
	return 'hello world';
});
```

### post

Cette methode permet de maper une url a une requête de type `POST`

``` php
$app->post('/', function() {
	return 'data posted';
});
```

### put

Cette methode permet de maper une url a une requête de type `PUT`.

Quand vous utilisez des outils qui peut envoyer des requêtes de ce type comme `curl`, `httpie`.
Parcontre les navigateurs ne supportent pas cette methode. Alors dans votre formulaire d'envoie,
il faudra créer un champs comme ceci:

```html
<input type="hidden" name="_method" valude="PUT">
```

ce qui aura pour but de permettre à bow de comprendre votre requête.


``` php
$app->put('/', function() {
	// code ici
});
```

### delete

Cette methode permet de maper une url a une requête de type `DELETE`.

Quand vous utilisez des outils qui peut envoyer des requêtes de ce type comme `curl`, `httpie`.
Parcontre les navigateurs ne supportent pas cette methode. Alors dans votre formulaire d'envoie,
il faudra créer un champs comme ceci:

```html
<input type="hidden" name="_method" valude="PUT">
```

ce qui aura pour but de permettre à bow de comprendre votre requête.


``` php
$app->delete('/', function() {
	// code ici
});
```

### patch

Cette methode permet de maper une url a une requête de type `PATCH`.

Quand vous utilisez des outils qui peut envoyer des requêtes de ce type comme `curl`, `httpie`.
Parcontre les navigateurs ne supportent pas cette methode. Alors dans votre formulaire d'envoie,
il faudra créer un champs comme ceci:

```html
 <input type="hidden" name="_method" valude="PATCH">
```

ce qui aura pour but de permettre à bow de comprendre votre requête.


``` php
$app->patch('/', function() {
	// code ici
});
```

### options

Cette methode permet de maper une url a une requête de type `OPTIONS`.

Quand vous utilisez des outils qui peut envoyer des requêtes de ce type comme `curl`, `httpie`.
Parcontre les navigateurs ne supportent pas cette methode. Alors dans votre formulaire d'envoie,
il faudra créer un champs comme ceci:

```html
 <input type="hidden" name="_method" valude="OPTIONS">
```

ce qui aura pour but de permettre à bow de comprendre votre requête.


``` php
$app->options('/', function() {
	// code ici
});
```

### match

Permet d'associer des methodes `http` sur l'url spécifier.

prototype de la methode `match`.

```
$app->match(verbes, url, action);
```

| paramete | Type |
|----------|------|
| verbes      | Array, La liste de methode `http` |
| url      | String, L'url de la route |
| action      | String, array, callable ou Closure |

``` php
$app->match(['GET', 'POST'], function() {
	// code ici
});
```

### any

Permet d'associer tout les methodes `http` sur l'url spécifier.

prototype de la methode `any`.

```
$app->any(String url, action);
```

| paramete | Type |
|----------|------|
| url      | String, L'url de la route |
| action      | String, array, callable ou Closure |


``` php
$app->any('/', function() {
	// code ici
});
```

### code

Le routing vous permet aussi de capturer le code http telque le fameux `404` et autre, et ensuite
lancer une fonction pour répondre à l'utilisateur.

prototype de la methode `code`.

```
$app->code(statusCode, action);
```

| paramete | Type |
|----------|------|
| statusCode      | Number, Le code http |
| action      | Callable ou Closure, le fonction à éxécuter |


> Notons que les methodes ci-dessus retourne l'instance de l'application.
> Alors vous pouvez chainer les methodes comme ceci.
> 
> ``` php
> $app->get(..., ...)->post(..., ...)->put(..., ...)->delete(..., ...)->patch(..., ...)
> ```

### Personnalisation

Le routing vous permet aussi de personnaliser vos urls. Voici la list des possibilités de personnalisation.

- Capturer des variables dans l'url
- Ajouter des critères, des restrictions sur les urls
- Donner un nom au route
- Association de middleware
- La composition d'action

Pour faire la personnalisation il faut utiliser l'enchainement de methode.
Dans le exemple qui suit nous allons utiliser la methode `get`.

#### Capturer des variables dans l'url

Le routing vous permet de pouvoir capturer des variables dans urls.
Pour le faire il faut imperativement utiliser la notation `:name_de_la_variable`.
Ensuite la variable capturé sera passer en paramètre à l'action (fonction à executer dans le cas où l'url est valide)
quelque soit le nombre de variable.

``` php
$app->get('/:name', function($name) {
	return 'bonjour ' . $name;
});
```

#### Ajouter des critères, des restrictions sur les urls

Parlant de capture de variable. Sécurisé ces variables est primordial. Alors le routing vous permet
aussi d'ajout des validateurs sur le variable. C'est la methode `where` qui s'en occupe.

prototype de la methode `where`.

```
$app->where(String name, String value);
// ou
$app->where(array rules);
```

| paramete | Type |
|----------|------|
| name      | String, Le nom de la variable |
| value      | String, Le critaire de validation |
| rules      | Array, Tableau associatif dont la clé est la varibale et la valeur est le critaire de validation |

``` php
$app->get('/:name', function($name) {
	return 'bonjour ' . $name;
})->where('name', '[a-z]+');

// S'il y a plusieurs variables
$app->get('/:name/:lastname/:number', function($name, $lastname, $number) {
	return 'bonjour '.$name.' '.$lastname.' et votre numero est '.$number;
})->where([
	'name' => '[a-z]+', 
	'lastname' => '[a-z]+', 
	'number' => '\d+'
]);
```

#### Donner un nom au route

Quand vous être dans le développement d'un gros projet, les routes deviendront nombreuses
et la gestion visuel pour le développeur deviendra difficile.

Alors `bow` vous permet de donner des noms à vos routes comme ceci:

prototype de la methode `name`.

```
$app->name(String name);
```

| paramete | Type |
|----------|------|
| name    | String, Le nom de la route |

``` php
$app->get('/:name', function($name) {
	return 'bonjour ' . $name;
})->name('hello');

// ou
$app->get('/:name', 'hello', function($name) {
	return 'bonjour ' . $name;
});
```

#### Association de middleware

Un middleware c'est un ou plusieurs actions qui ce placent entre la requete et l'action
a executer.

Plus d'information sur le sujet allez ce lien [middleware](#documentation-middlewares)


``` php
$app->get('/:name', ['middleware' => 'ip', function($name) {
	return 'bonjour ' . $name;
}])->name('hello');
```

#### La composition d'action

``` php
$app->get('/:name', ['middleware' => 'ip', 'uses' => 'Controller@action']);
```

### group

Souvant vous serez amener à vouloir grouper vos routes et effectuer un branchement, de bien orienté votre logique.
Les urls peuvents souvants se répéter comme ceci:

```php
$app->get('users', function() {
	// code ici
});

$app->get('users/:id', function($id) {
	// code ici
});

$app->get('users/:id/delete', function($id) {
	// code ici
});
```

Dans ce case nous avons `users` qui se répéte plusieur fois.
Comment bien organiser tout ça?

La réponse est le groupage de route. Alors la methodes groupe nous permet
de grouper plusieur urls.

prototype de le methode `group`.

```
$app->group(url, action);
```

| paramete | Type |
|----------|------|
| url      | String |
| action   | closuer, callable. Cette fonction prendra en parametre l'instance de l'application |

Donc pour réorganiser le code precedent il faut faire:

```php
$app->group('/users', function($app) {
	$app->get('/', function() {
		// code ici
	});
	$app->get('/:id', function() {
		// code ici
	});
	$app->get('/:id/delete', function() {
		// code ici
	});
});
```

### resources

Controlleurs
------------

Les controlleurs c'est

[Voir la vidéo](https://www.youtube.com/watch?v=:id 'video')


Niddlewares
-----------

>
>
>
Source wikipedia.

De façon simplement un middleware c'est un ou plusieurs actions qui ce placent entre la requête et l'action
a éxécuter.

Il permet de faire quelque test préléminaire avant de laisser passer la requête de l'utiliseur.
Par exemple on pourrez écrire un middleware qui se nommera `ip` dont le but serais de vérifier l'ip des utilisateurs avant de lancer l'action associé à l'url. 
Sinon le middleware lancera une exception ou bloquera tout (avec un `die` par exemple).

[Voir la vidéo](https://www.youtube.com/watch?v=:id 'video')


Vues
----


[Voir la vidéo](https://www.youtube.com/watch?v=:id 'video')


Validator
---------


[Voir la vidéo](https://www.youtube.com/watch?v=:id 'video')


Database
--------


[Voir la vidéo](https://www.youtube.com/watch?v=:id 'video')

ORM (Maany)
-----------


[Voir la vidéo](https://www.youtube.com/watch?v=:id 'video')

Mail
----


[Voir la vidéo](https://www.youtube.com/watch?v=:id 'video')

Events
------


[Voir la vidéo](https://www.youtube.com/watch?v=:id 'video')

Collection
----------


[Voir la vidéo](https://www.youtube.com/watch?v=:id 'video')

Task runner
-----------


[Voir la vidéo](https://www.youtube.com/watch?v=:id 'video')

Helper List
-----------


Extrat
------

Dans cette section j'aimerais vous apprendre a organiser vous fichier static. Donc a bien apprehendé l'utlisation
du dossier `assets`.

Alors dans ce dossier nous avons trois dossier qui sont `js`, `sass` et `images`.
Cette organisation vous permet de bien protégé vos fichier source `js` et sass

> Note que pour ceux qui utilise une preprocess vous pouvez tout de meme modifier votre config gulpfile.js ou meme
> utiliser `grunt`


Misc
====

Inspirations
------------

Les projets suivant ont impirés `bow`.

 * [laravel] - Laravel est un framework créé par Taylor Otwell.
 * [CakePHP]

Contributions
-------------

Pour participer au project il faut:

+ Cloner le project `git clone https://github.com/papac/bow`
+ Créer un branche qui aura le nom résumé de votre modification `git branch branche-de-vos-traveaux`
+ Faire une publication sur votre dépot `git push origin branche-de-vos-traveaux`
+ Enfin faire un `pull-request`

Acknowledgements
----------------

[MIT License](http://www.opensource.org/licenses/mit-license.php).
*Franck DAKIA* est l'auteur et le mainteneur de **Bow framework** avec l'aide des *contributeurs*.

 * [Github](http://github.com/papac) (@papac)
 * [Twitter](http://twitter.com/franck_dakia) (@franck_dakia)

[![GitHub forks](https://img.shields.io/github/forks/papac/bow.svg?label=Fork&style=flat-square)](https://github.com/papac/bow)
[![docs](https://img.shields.io/packagist/v/papac/bow.svg?style=flat-square)](https://packagist.org/papac/bow)
[![Travis branch](https://img.shields.io/travis/papac/framework/master.svg?style=flat-square)](https://travis-ci.com/papac/framework)
