var Doctum = {
    treeJson: {"tree":{"l":0,"n":"","p":"","c":[{"l":1,"n":"[Global Namespace]","p":"[Global_Namespace]"},{"l":1,"n":"Bow","p":"Bow","c":[{"l":2,"n":"Application","p":"Bow/Application","c":[{"l":3,"n":"Exception","p":"Bow/Application/Exception","c":[{"l":4,"n":"ApplicationAbortException","p":"Bow/Application/Exception/ApplicationAbortException"},{"l":4,"n":"ApplicationException","p":"Bow/Application/Exception/ApplicationException"}]},{"l":3,"n":"Application","p":"Bow/Application/Application"}]},{"l":2,"n":"Auth","p":"Bow/Auth","c":[{"l":3,"n":"Exception","p":"Bow/Auth/Exception","c":[{"l":4,"n":"AuthenticationException","p":"Bow/Auth/Exception/AuthenticationException"}]},{"l":3,"n":"Traits","p":"Bow/Auth/Traits","c":[{"l":4,"n":"LoginUserTrait","p":"Bow/Auth/Traits/LoginUserTrait"}]},{"l":3,"n":"Auth","p":"Bow/Auth/Auth"},{"l":3,"n":"Authentication","p":"Bow/Auth/Authentication"},{"l":3,"n":"AuthenticationConfiguration","p":"Bow/Auth/AuthenticationConfiguration"},{"l":3,"n":"GuardContract","p":"Bow/Auth/GuardContract"},{"l":3,"n":"JwtGuard","p":"Bow/Auth/JwtGuard"},{"l":3,"n":"SessionGuard","p":"Bow/Auth/SessionGuard"}]},{"l":2,"n":"Cache","p":"Bow/Cache","c":[{"l":3,"n":"Cache","p":"Bow/Cache/Cache"},{"l":3,"n":"CacheConfiguration","p":"Bow/Cache/CacheConfiguration"}]},{"l":2,"n":"Configuration","p":"Bow/Configuration","c":[{"l":3,"n":"Configuration","p":"Bow/Configuration/Configuration"},{"l":3,"n":"EnvConfiguration","p":"Bow/Configuration/EnvConfiguration"},{"l":3,"n":"Loader","p":"Bow/Configuration/Loader"},{"l":3,"n":"LoggerConfiguration","p":"Bow/Configuration/LoggerConfiguration"}]},{"l":2,"n":"Console","p":"Bow/Console","c":[{"l":3,"n":"Command","p":"Bow/Console/Command","c":[{"l":4,"n":"AbstractCommand","p":"Bow/Console/Command/AbstractCommand"},{"l":4,"n":"ClearCommand","p":"Bow/Console/Command/ClearCommand"},{"l":4,"n":"ConfigurationCommand","p":"Bow/Console/Command/ConfigurationCommand"},{"l":4,"n":"ConsoleCommand","p":"Bow/Console/Command/ConsoleCommand"},{"l":4,"n":"ControllerCommand","p":"Bow/Console/Command/ControllerCommand"},{"l":4,"n":"EventCommand","p":"Bow/Console/Command/EventCommand"},{"l":4,"n":"ExceptionCommand","p":"Bow/Console/Command/ExceptionCommand"},{"l":4,"n":"GenerateKeyCommand","p":"Bow/Console/Command/GenerateKeyCommand"},{"l":4,"n":"GenerateResourceControllerCommand","p":"Bow/Console/Command/GenerateResourceControllerCommand"},{"l":4,"n":"GenerateSessionCommand","p":"Bow/Console/Command/GenerateSessionCommand"},{"l":4,"n":"MiddlewareCommand","p":"Bow/Console/Command/MiddlewareCommand"},{"l":4,"n":"MigrationCommand","p":"Bow/Console/Command/MigrationCommand"},{"l":4,"n":"ModelCommand","p":"Bow/Console/Command/ModelCommand"},{"l":4,"n":"ProducerCommand","p":"Bow/Console/Command/ProducerCommand"},{"l":4,"n":"ReplCommand","p":"Bow/Console/Command/ReplCommand"},{"l":4,"n":"SeederCommand","p":"Bow/Console/Command/SeederCommand"},{"l":4,"n":"ServerCommand","p":"Bow/Console/Command/ServerCommand"},{"l":4,"n":"ServiceCommand","p":"Bow/Console/Command/ServiceCommand"},{"l":4,"n":"ValidationCommand","p":"Bow/Console/Command/ValidationCommand"},{"l":4,"n":"WorkerCommand","p":"Bow/Console/Command/WorkerCommand"}]},{"l":3,"n":"Exception","p":"Bow/Console/Exception","c":[{"l":4,"n":"ConsoleException","p":"Bow/Console/Exception/ConsoleException"}]},{"l":3,"n":"ArgOption","p":"Bow/Console/ArgOption"},{"l":3,"n":"Color","p":"Bow/Console/Color"},{"l":3,"n":"Command","p":"Bow/Console/Command"},{"l":3,"n":"Console","p":"Bow/Console/Console"},{"l":3,"n":"ConsoleInformation","p":"Bow/Console/ConsoleInformation"},{"l":3,"n":"Generator","p":"Bow/Console/Generator"},{"l":3,"n":"Setting","p":"Bow/Console/Setting"}]},{"l":2,"n":"Container","p":"Bow/Container","c":[{"l":3,"n":"Action","p":"Bow/Container/Action"},{"l":3,"n":"Capsule","p":"Bow/Container/Capsule"},{"l":3,"n":"ContainerConfiguration","p":"Bow/Container/ContainerConfiguration"},{"l":3,"n":"MiddlewareDispatcher","p":"Bow/Container/MiddlewareDispatcher"}]},{"l":2,"n":"Contracts","p":"Bow/Contracts","c":[{"l":3,"n":"CollectionInterface","p":"Bow/Contracts/CollectionInterface"},{"l":3,"n":"ResponseInterface","p":"Bow/Contracts/ResponseInterface"}]},{"l":2,"n":"Database","p":"Bow/Database","c":[{"l":3,"n":"Barry","p":"Bow/Database/Barry","c":[{"l":4,"n":"Concerns","p":"Bow/Database/Barry/Concerns","c":[{"l":5,"n":"Relationship","p":"Bow/Database/Barry/Concerns/Relationship"}]},{"l":4,"n":"Relations","p":"Bow/Database/Barry/Relations","c":[{"l":5,"n":"BelongsTo","p":"Bow/Database/Barry/Relations/BelongsTo"},{"l":5,"n":"BelongsToMany","p":"Bow/Database/Barry/Relations/BelongsToMany"},{"l":5,"n":"HasMany","p":"Bow/Database/Barry/Relations/HasMany"},{"l":5,"n":"HasOne","p":"Bow/Database/Barry/Relations/HasOne"}]},{"l":4,"n":"Traits","p":"Bow/Database/Barry/Traits","c":[{"l":5,"n":"ArrayAccessTrait","p":"Bow/Database/Barry/Traits/ArrayAccessTrait"},{"l":5,"n":"CanSerialized","p":"Bow/Database/Barry/Traits/CanSerialized"},{"l":5,"n":"EventTrait","p":"Bow/Database/Barry/Traits/EventTrait"}]},{"l":4,"n":"Builder","p":"Bow/Database/Barry/Builder"},{"l":4,"n":"Model","p":"Bow/Database/Barry/Model"},{"l":4,"n":"Relation","p":"Bow/Database/Barry/Relation"}]},{"l":3,"n":"Connection","p":"Bow/Database/Connection","c":[{"l":4,"n":"Adapter","p":"Bow/Database/Connection/Adapter","c":[{"l":5,"n":"MysqlAdapter","p":"Bow/Database/Connection/Adapter/MysqlAdapter"},{"l":5,"n":"SqliteAdapter","p":"Bow/Database/Connection/Adapter/SqliteAdapter"}]},{"l":4,"n":"AbstractConnection","p":"Bow/Database/Connection/AbstractConnection"},{"l":4,"n":"Connection","p":"Bow/Database/Connection/Connection"}]},{"l":3,"n":"Exception","p":"Bow/Database/Exception","c":[{"l":4,"n":"ConnectionException","p":"Bow/Database/Exception/ConnectionException"},{"l":4,"n":"DatabaseException","p":"Bow/Database/Exception/DatabaseException"},{"l":4,"n":"ModelException","p":"Bow/Database/Exception/ModelException"},{"l":4,"n":"NotFoundException","p":"Bow/Database/Exception/NotFoundException"},{"l":4,"n":"QueryBuilderException","p":"Bow/Database/Exception/QueryBuilderException"}]},{"l":3,"n":"Migration","p":"Bow/Database/Migration","c":[{"l":4,"n":"Shortcut","p":"Bow/Database/Migration/Shortcut","c":[{"l":5,"n":"ConstraintColumn","p":"Bow/Database/Migration/Shortcut/ConstraintColumn"},{"l":5,"n":"DateColumn","p":"Bow/Database/Migration/Shortcut/DateColumn"},{"l":5,"n":"MixedColumn","p":"Bow/Database/Migration/Shortcut/MixedColumn"},{"l":5,"n":"NumberColumn","p":"Bow/Database/Migration/Shortcut/NumberColumn"},{"l":5,"n":"TextColumn","p":"Bow/Database/Migration/Shortcut/TextColumn"}]},{"l":4,"n":"Migration","p":"Bow/Database/Migration/Migration"},{"l":4,"n":"SQLGenerator","p":"Bow/Database/Migration/SQLGenerator"}]},{"l":3,"n":"Collection","p":"Bow/Database/Collection"},{"l":3,"n":"Database","p":"Bow/Database/Database"},{"l":3,"n":"DatabaseConfiguration","p":"Bow/Database/DatabaseConfiguration"},{"l":3,"n":"QueryBuilder","p":"Bow/Database/QueryBuilder"}]},{"l":2,"n":"Event","p":"Bow/Event","c":[{"l":3,"n":"Event","p":"Bow/Event/Event"},{"l":3,"n":"EventException","p":"Bow/Event/EventException"},{"l":3,"n":"EventListener","p":"Bow/Event/EventListener"},{"l":3,"n":"Listener","p":"Bow/Event/Listener"}]},{"l":2,"n":"Http","p":"Bow/Http","c":[{"l":3,"n":"Client","p":"Bow/Http/Client","c":[{"l":4,"n":"HttpClient","p":"Bow/Http/Client/HttpClient"},{"l":4,"n":"Parser","p":"Bow/Http/Client/Parser"}]},{"l":3,"n":"Exception","p":"Bow/Http/Exception","c":[{"l":4,"n":"BadRequestException","p":"Bow/Http/Exception/BadRequestException"},{"l":4,"n":"CreatedException","p":"Bow/Http/Exception/CreatedException"},{"l":4,"n":"ForbiddenException","p":"Bow/Http/Exception/ForbiddenException"},{"l":4,"n":"HttpException","p":"Bow/Http/Exception/HttpException"},{"l":4,"n":"InternalServerErrorException","p":"Bow/Http/Exception/InternalServerErrorException"},{"l":4,"n":"MethodNotAllowedException","p":"Bow/Http/Exception/MethodNotAllowedException"},{"l":4,"n":"NoContentException","p":"Bow/Http/Exception/NoContentException"},{"l":4,"n":"NotFoundException","p":"Bow/Http/Exception/NotFoundException"},{"l":4,"n":"RequestException","p":"Bow/Http/Exception/RequestException"},{"l":4,"n":"ResponseException","p":"Bow/Http/Exception/ResponseException"},{"l":4,"n":"ServerAccessControlException","p":"Bow/Http/Exception/ServerAccessControlException"},{"l":4,"n":"UnauthorizedException","p":"Bow/Http/Exception/UnauthorizedException"},{"l":4,"n":"UploadFileException","p":"Bow/Http/Exception/UploadFileException"}]},{"l":3,"n":"Redirect","p":"Bow/Http/Redirect"},{"l":3,"n":"Request","p":"Bow/Http/Request"},{"l":3,"n":"Response","p":"Bow/Http/Response"},{"l":3,"n":"ServerAccessControl","p":"Bow/Http/ServerAccessControl"},{"l":3,"n":"UploadFile","p":"Bow/Http/UploadFile"}]},{"l":2,"n":"Mail","p":"Bow/Mail","c":[{"l":3,"n":"Contracts","p":"Bow/Mail/Contracts","c":[{"l":4,"n":"MailDriverInterface","p":"Bow/Mail/Contracts/MailDriverInterface"}]},{"l":3,"n":"Driver","p":"Bow/Mail/Driver","c":[{"l":4,"n":"NativeDriver","p":"Bow/Mail/Driver/NativeDriver"},{"l":4,"n":"SesDriver","p":"Bow/Mail/Driver/SesDriver"},{"l":4,"n":"SmtpDriver","p":"Bow/Mail/Driver/SmtpDriver"}]},{"l":3,"n":"Exception","p":"Bow/Mail/Exception","c":[{"l":4,"n":"MailException","p":"Bow/Mail/Exception/MailException"},{"l":4,"n":"SmtpException","p":"Bow/Mail/Exception/SmtpException"},{"l":4,"n":"SocketException","p":"Bow/Mail/Exception/SocketException"}]},{"l":3,"n":"Mail","p":"Bow/Mail/Mail"},{"l":3,"n":"MailConfiguration","p":"Bow/Mail/MailConfiguration"},{"l":3,"n":"Message","p":"Bow/Mail/Message"}]},{"l":2,"n":"Middleware","p":"Bow/Middleware","c":[{"l":3,"n":"AuthMiddleware","p":"Bow/Middleware/AuthMiddleware"},{"l":3,"n":"CsrfMiddleware","p":"Bow/Middleware/CsrfMiddleware"}]},{"l":2,"n":"Packages","p":"Bow/Packages","c":[{"l":3,"n":"Traits","p":"Bow/Packages/Traits","c":[{"l":4,"n":"SerializationService","p":"Bow/Packages/Traits/SerializationService"}]}]},{"l":2,"n":"Queue","p":"Bow/Queue","c":[{"l":3,"n":"Adapters","p":"Bow/Queue/Adapters","c":[{"l":4,"n":"BeanstalkdAdapter","p":"Bow/Queue/Adapters/BeanstalkdAdapter"},{"l":4,"n":"QueueAdapter","p":"Bow/Queue/Adapters/QueueAdapter"}]},{"l":3,"n":"Connection","p":"Bow/Queue/Connection"},{"l":3,"n":"ProducerService","p":"Bow/Queue/ProducerService"},{"l":3,"n":"QueueConfiguration","p":"Bow/Queue/QueueConfiguration"},{"l":3,"n":"WorkerService","p":"Bow/Queue/WorkerService"}]},{"l":2,"n":"Router","p":"Bow/Router","c":[{"l":3,"n":"Exception","p":"Bow/Router/Exception","c":[{"l":4,"n":"RouterException","p":"Bow/Router/Exception/RouterException"}]},{"l":3,"n":"Resource","p":"Bow/Router/Resource"},{"l":3,"n":"Route","p":"Bow/Router/Route"},{"l":3,"n":"Router","p":"Bow/Router/Router"}]},{"l":2,"n":"Security","p":"Bow/Security","c":[{"l":3,"n":"Exception","p":"Bow/Security/Exception","c":[{"l":4,"n":"TokenMismatch","p":"Bow/Security/Exception/TokenMismatch"}]},{"l":3,"n":"Crypto","p":"Bow/Security/Crypto"},{"l":3,"n":"CryptoConfiguration","p":"Bow/Security/CryptoConfiguration"},{"l":3,"n":"Hash","p":"Bow/Security/Hash"},{"l":3,"n":"Sanitize","p":"Bow/Security/Sanitize"},{"l":3,"n":"Tokenize","p":"Bow/Security/Tokenize"}]},{"l":2,"n":"Session","p":"Bow/Session","c":[{"l":3,"n":"Driver","p":"Bow/Session/Driver","c":[{"l":4,"n":"ArrayDriver","p":"Bow/Session/Driver/ArrayDriver"},{"l":4,"n":"DatabaseDriver","p":"Bow/Session/Driver/DatabaseDriver"},{"l":4,"n":"DurationTrait","p":"Bow/Session/Driver/DurationTrait"},{"l":4,"n":"FilesystemDriver","p":"Bow/Session/Driver/FilesystemDriver"}]},{"l":3,"n":"Exception","p":"Bow/Session/Exception","c":[{"l":4,"n":"SessionException","p":"Bow/Session/Exception/SessionException"}]},{"l":3,"n":"Cookie","p":"Bow/Session/Cookie"},{"l":3,"n":"Session","p":"Bow/Session/Session"},{"l":3,"n":"SessionConfiguration","p":"Bow/Session/SessionConfiguration"}]},{"l":2,"n":"Storage","p":"Bow/Storage","c":[{"l":3,"n":"Contracts","p":"Bow/Storage/Contracts","c":[{"l":4,"n":"FilesystemInterface","p":"Bow/Storage/Contracts/FilesystemInterface"},{"l":4,"n":"ServiceInterface","p":"Bow/Storage/Contracts/ServiceInterface"}]},{"l":3,"n":"Exception","p":"Bow/Storage/Exception","c":[{"l":4,"n":"MountDiskNotFoundException","p":"Bow/Storage/Exception/MountDiskNotFoundException"},{"l":4,"n":"ResourceException","p":"Bow/Storage/Exception/ResourceException"},{"l":4,"n":"ServiceConfigurationNotFoundException","p":"Bow/Storage/Exception/ServiceConfigurationNotFoundException"},{"l":4,"n":"ServiceNotFoundException","p":"Bow/Storage/Exception/ServiceNotFoundException"}]},{"l":3,"n":"Service","p":"Bow/Storage/Service","c":[{"l":4,"n":"FTPService","p":"Bow/Storage/Service/FTPService"},{"l":4,"n":"S3Service","p":"Bow/Storage/Service/S3Service"}]},{"l":3,"n":"MountFilesystem","p":"Bow/Storage/MountFilesystem"},{"l":3,"n":"Storage","p":"Bow/Storage/Storage"},{"l":3,"n":"StorageConfiguration","p":"Bow/Storage/StorageConfiguration"},{"l":3,"n":"Temporary","p":"Bow/Storage/Temporary"}]},{"l":2,"n":"Support","p":"Bow/Support","c":[{"l":3,"n":"Arraydotify","p":"Bow/Support/Arraydotify"},{"l":3,"n":"Collection","p":"Bow/Support/Collection"},{"l":3,"n":"Env","p":"Bow/Support/Env"},{"l":3,"n":"Str","p":"Bow/Support/Str"},{"l":3,"n":"Util","p":"Bow/Support/Util"}]},{"l":2,"n":"Testing","p":"Bow/Testing","c":[{"l":3,"n":"Features","p":"Bow/Testing/Features","c":[{"l":4,"n":"FeatureHelper","p":"Bow/Testing/Features/FeatureHelper"},{"l":4,"n":"Migration","p":"Bow/Testing/Features/Migration"},{"l":4,"n":"SeedingHelper","p":"Bow/Testing/Features/SeedingHelper"}]},{"l":3,"n":"Assert","p":"Bow/Testing/Assert"},{"l":3,"n":"Response","p":"Bow/Testing/Response"},{"l":3,"n":"TestCase","p":"Bow/Testing/TestCase"}]},{"l":2,"n":"Translate","p":"Bow/Translate","c":[{"l":3,"n":"Translator","p":"Bow/Translate/Translator"},{"l":3,"n":"TranslatorConfiguration","p":"Bow/Translate/TranslatorConfiguration"}]},{"l":2,"n":"Validation","p":"Bow/Validation","c":[{"l":3,"n":"Exception","p":"Bow/Validation/Exception","c":[{"l":4,"n":"AuthorizationException","p":"Bow/Validation/Exception/AuthorizationException"},{"l":4,"n":"ValidationException","p":"Bow/Validation/Exception/ValidationException"}]},{"l":3,"n":"Rules","p":"Bow/Validation/Rules","c":[{"l":4,"n":"Email","p":"Bow/Validation/Rules/Email"}]},{"l":3,"n":"FieldLexical","p":"Bow/Validation/FieldLexical"},{"l":3,"n":"RequestValidation","p":"Bow/Validation/RequestValidation"},{"l":3,"n":"Validate","p":"Bow/Validation/Validate"},{"l":3,"n":"Validator","p":"Bow/Validation/Validator"}]},{"l":2,"n":"View","p":"Bow/View","c":[{"l":3,"n":"Engine","p":"Bow/View/Engine","c":[{"l":4,"n":"PHPEngine","p":"Bow/View/Engine/PHPEngine"},{"l":4,"n":"TwigEngine","p":"Bow/View/Engine/TwigEngine"}]},{"l":3,"n":"Exception","p":"Bow/View/Exception","c":[{"l":4,"n":"ViewException","p":"Bow/View/Exception/ViewException"}]},{"l":3,"n":"EngineAbstract","p":"Bow/View/EngineAbstract"},{"l":3,"n":"View","p":"Bow/View/View"},{"l":3,"n":"ViewConfiguration","p":"Bow/View/ViewConfiguration"}]}]}]},"treeOpenLevel":2},
    /** @var boolean */
    treeLoaded: false,
    /** @var boolean */
    listenersRegistered: false,
    autoCompleteData: null,
    /** @var boolean */
    autoCompleteLoading: false,
    /** @var boolean */
    autoCompleteLoaded: false,
    /** @var string|null */
    rootPath: null,
    /** @var string|null */
    autoCompleteDataUrl: null,
    /** @var HTMLElement|null */
    doctumSearchAutoComplete: null,
    /** @var HTMLElement|null */
    doctumSearchAutoCompleteProgressBarContainer: null,
    /** @var HTMLElement|null */
    doctumSearchAutoCompleteProgressBar: null,
    /** @var number */
    doctumSearchAutoCompleteProgressBarPercent: 0,
    /** @var autoComplete|null */
    autoCompleteJS: null,
    querySearchSecurityRegex: /([^0-9a-zA-Z:\\\\_\s])/gi,
    buildTreeNode: function (treeNode, htmlNode, treeOpenLevel) {
        var ulNode = document.createElement('ul');
        for (var childKey in treeNode.c) {
            var child = treeNode.c[childKey];
            var liClass = document.createElement('li');
            var hasChildren = child.hasOwnProperty('c');
            var nodeSpecialName = (hasChildren ? 'namespace:' : 'class:') + child.p.replace(/\//g, '_');
            liClass.setAttribute('data-name', nodeSpecialName);

            // Create the node that will have the text
            var divHd = document.createElement('div');
            var levelCss = child.l - 1;
            divHd.className = hasChildren ? 'hd' : 'hd leaf';
            divHd.style.paddingLeft = (hasChildren ? (levelCss * 18) : (8 + (levelCss * 18))) + 'px';
            if (hasChildren) {
                if (child.l <= treeOpenLevel) {
                    liClass.className = 'opened';
                }
                var spanIcon = document.createElement('span');
                spanIcon.className = 'icon icon-play';
                divHd.appendChild(spanIcon);
            }
            var aLink = document.createElement('a');

            // Edit the HTML link to work correctly based on the current depth
            aLink.href = Doctum.rootPath + child.p + '.html';
            aLink.innerText = child.n;
            divHd.appendChild(aLink);
            liClass.appendChild(divHd);

            // It has children
            if (hasChildren) {
                var divBd = document.createElement('div');
                divBd.className = 'bd';
                Doctum.buildTreeNode(child, divBd, treeOpenLevel);
                liClass.appendChild(divBd);
            }
            ulNode.appendChild(liClass);
        }
        htmlNode.appendChild(ulNode);
    },
    initListeners: function () {
        if (Doctum.listenersRegistered) {
            // Quick exit, already registered
            return;
        }
                        var versionSwitcher = document.getElementById('version-switcher');
        if (versionSwitcher !== null) {
            versionSwitcher.addEventListener('change', function () {
                window.location = this.value;
            });
        }
                Doctum.listenersRegistered = true;
    },
    loadTree: function () {
        if (Doctum.treeLoaded) {
            // Quick exit, already registered
            return;
        }
        Doctum.rootPath = document.body.getAttribute('data-root-path');
        Doctum.buildTreeNode(Doctum.treeJson.tree, document.getElementById('api-tree'), Doctum.treeJson.treeOpenLevel);

        // Toggle left-nav divs on click
        $('#api-tree .hd span').on('click', function () {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }
        Doctum.treeLoaded = true;
    },
    pagePartiallyLoaded: function (event) {
        Doctum.initListeners();
        Doctum.loadTree();
        Doctum.loadAutoComplete();
    },
    pageFullyLoaded: function (event) {
        // it may not have received DOMContentLoaded event
        Doctum.initListeners();
        Doctum.loadTree();
        Doctum.loadAutoComplete();
        // Fire the event in the search page too
        if (typeof DoctumSearch === 'object') {
            DoctumSearch.pageFullyLoaded();
        }
    },
    loadAutoComplete: function () {
        if (Doctum.autoCompleteLoaded) {
            // Quick exit, already loaded
            return;
        }
        Doctum.autoCompleteDataUrl = document.body.getAttribute('data-search-index-url');
        Doctum.doctumSearchAutoComplete = document.getElementById('doctum-search-auto-complete');
        Doctum.doctumSearchAutoCompleteProgressBarContainer = document.getElementById('search-progress-bar-container');
        Doctum.doctumSearchAutoCompleteProgressBar = document.getElementById('search-progress-bar');
        if (Doctum.doctumSearchAutoComplete !== null) {
            // Wait for it to be loaded
            Doctum.doctumSearchAutoComplete.addEventListener('init', function (_) {
                Doctum.autoCompleteLoaded = true;
                Doctum.doctumSearchAutoComplete.addEventListener('selection', function (event) {
                    // Go to selection page
                    window.location = Doctum.rootPath + event.detail.selection.value.p;
                });
                Doctum.doctumSearchAutoComplete.addEventListener('navigate', function (event) {
                    // Set selection in text box
                    if (typeof event.detail.selection.value === 'object') {
                        Doctum.doctumSearchAutoComplete.value = event.detail.selection.value.n;
                    }
                });
                Doctum.doctumSearchAutoComplete.addEventListener('results', function (event) {
                    Doctum.markProgressFinished();
                });
            });
        }
        // Check if the lib is loaded
        if (typeof autoComplete === 'function') {
            Doctum.bootAutoComplete();
        }
    },
    markInProgress: function () {
            Doctum.doctumSearchAutoCompleteProgressBarContainer.className = 'search-bar';
            Doctum.doctumSearchAutoCompleteProgressBar.className = 'progress-bar indeterminate';
            if (typeof DoctumSearch === 'object' && DoctumSearch.pageFullyLoaded) {
                DoctumSearch.doctumSearchPageAutoCompleteProgressBarContainer.className = 'search-bar';
                DoctumSearch.doctumSearchPageAutoCompleteProgressBar.className = 'progress-bar indeterminate';
            }
    },
    markProgressFinished: function () {
        Doctum.doctumSearchAutoCompleteProgressBarContainer.className = 'search-bar hidden';
        Doctum.doctumSearchAutoCompleteProgressBar.className = 'progress-bar';
        if (typeof DoctumSearch === 'object' && DoctumSearch.pageFullyLoaded) {
            DoctumSearch.doctumSearchPageAutoCompleteProgressBarContainer.className = 'search-bar hidden';
            DoctumSearch.doctumSearchPageAutoCompleteProgressBar.className = 'progress-bar';
        }
    },
    makeProgess: function () {
        Doctum.makeProgressOnProgressBar(
            Doctum.doctumSearchAutoCompleteProgressBarPercent,
            Doctum.doctumSearchAutoCompleteProgressBar
        );
        if (typeof DoctumSearch === 'object' && DoctumSearch.pageFullyLoaded) {
            Doctum.makeProgressOnProgressBar(
                Doctum.doctumSearchAutoCompleteProgressBarPercent,
                DoctumSearch.doctumSearchPageAutoCompleteProgressBar
            );
        }
    },
    loadAutoCompleteData: function (query) {
        return new Promise(function (resolve, reject) {
            if (Doctum.autoCompleteData !== null) {
                resolve(Doctum.autoCompleteData);
                return;
            }
            Doctum.markInProgress();
            function reqListener() {
                Doctum.autoCompleteLoading = false;
                Doctum.autoCompleteData = JSON.parse(this.responseText).items;
                Doctum.markProgressFinished();

                setTimeout(function () {
                    resolve(Doctum.autoCompleteData);
                }, 50);// Let the UI render once before sending the results for processing. This gives time to the progress bar to hide
            }
            function reqError(err) {
                Doctum.autoCompleteLoading = false;
                Doctum.autoCompleteData = null;
                console.error(err);
                reject(err);
            }

            var oReq = new XMLHttpRequest();
            oReq.onload = reqListener;
            oReq.onerror = reqError;
            oReq.onprogress = function (pe) {
                if (pe.lengthComputable) {
                    Doctum.doctumSearchAutoCompleteProgressBarPercent = parseInt(pe.loaded / pe.total * 100, 10);
                    Doctum.makeProgess();
                }
            };
            oReq.onloadend = function (_) {
                Doctum.markProgressFinished();
            };
            oReq.open('get', Doctum.autoCompleteDataUrl, true);
            oReq.send();
        });
    },
    /**
     * Make some progress on a progress bar
     *
     * @param number percentage
     * @param HTMLElement progressBar
     * @return void
     */
    makeProgressOnProgressBar: function(percentage, progressBar) {
        progressBar.className = 'progress-bar';
        progressBar.style.width = percentage + '%';
        progressBar.setAttribute(
            'aria-valuenow', percentage
        );
    },
    searchEngine: function (query, record) {
        if (typeof query !== 'string') {
            return '';
        }
        // replace all (mode = g) spaces and non breaking spaces (\s) by pipes
        // g = global mode to mark also the second word searched
        // i = case insensitive
        // how this function works:
        // First: search if the query has the keywords in sequence
        // Second: replace the keywords by a mark and leave all the text in between non marked
        
        if (record.match(new RegExp('(' + query.replace(/\s/g, ').*(') + ')', 'gi')) === null) {
            return '';// Does not match
        }

        var replacedRecord = record.replace(new RegExp('(' + query.replace(/\s/g, '|') + ')', 'gi'), function (group) {
            return '<mark class="auto-complete-highlight">' + group + '</mark>';
        });

        if (replacedRecord !== record) {
            return replacedRecord;// This should not happen but just in case there was no match done
        }

        return '';
    },
    /**
     * Clean the search query
     *
     * @param string query
     * @return string
     */
    cleanSearchQuery: function (query) {
        // replace any chars that could lead to injecting code in our regex
        // remove start or end spaces
        // replace backslashes by an escaped version, use case in search: \myRootFunction
        return query.replace(Doctum.querySearchSecurityRegex, '').trim().replace(/\\/g, '\\\\');
    },
    bootAutoComplete: function () {
        Doctum.autoCompleteJS = new autoComplete(
            {
                selector: '#doctum-search-auto-complete',
                searchEngine: function (query, record) {
                    return Doctum.searchEngine(query, record);
                },
                submit: true,
                data: {
                    src: function (q) {
                        Doctum.markInProgress();
                        return Doctum.loadAutoCompleteData(q);
                    },
                    keys: ['n'],// Data 'Object' key to be searched
                    cache: false, // Is not compatible with async fetch of data
                },
                query: (input) => {
                    return Doctum.cleanSearchQuery(input);
                },
                trigger: (query) => {
                    return Doctum.cleanSearchQuery(query).length > 0;
                },
                resultsList: {
                    tag: 'ul',
                    class: 'auto-complete-dropdown-menu',
                    destination: '#auto-complete-results',
                    position: 'afterbegin',
                    maxResults: 500,
                    noResults: false,
                },
                resultItem: {
                    tag: 'li',
                    class: 'auto-complete-result',
                    highlight: 'auto-complete-highlight',
                    selected: 'auto-complete-selected'
                },
            }
        );
    }
};


document.addEventListener('DOMContentLoaded', Doctum.pagePartiallyLoaded, false);
window.addEventListener('load', Doctum.pageFullyLoaded, false);
