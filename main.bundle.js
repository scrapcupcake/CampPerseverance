var ac_main =
webpackJsonpac__name_([4],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/*
	 * Providers provided by Angular
	 */
	var platform_browser_dynamic_1 = __webpack_require__(357);
	/*
	* Platform and Environment
	* our providers/directives/pipes
	*/
	var browser_1 = __webpack_require__(553);
	var environment_1 = __webpack_require__(554);
	/*
	* App Component
	* our top level component that holds all of our components
	*/
	var app_1 = __webpack_require__(550);
	/*
	 * Bootstrap our Angular app with a top level component `App` and inject
	 * our Services and Providers into Angular's dependency injection
	 */
	function main(initialHmrState) {
	    return platform_browser_dynamic_1.bootstrap(app_1.App, browser_1.PLATFORM_PROVIDERS.concat(environment_1.ENV_PROVIDERS, app_1.APP_PROVIDERS))
	        .then(environment_1.decorateComponentRef)
	        .catch(function (err) { return console.error(err); });
	}
	exports.main = main;
	/*
	 * Vendors
	 * For vendors for example jQuery, Lodash, angular2-jwt just import them anywhere in your app
	 * You can also import them in vendors to ensure that they are bundled in one file
	 * Also see custom-typings.d.ts as you also need to do `typings install x` where `x` is your module
	 */
	/*
	 * Hot Module Reload
	 * experimental version by @gdi2290
	 */
	if (false) {
	    // activate hot module reload
	    var ngHmr = require('angular2-hmr');
	    ngHmr.hotModuleReplacement(main, module);
	}
	else {
	    // bootstrap when document is ready
	    document.addEventListener('DOMContentLoaded', function () { return main(); });
	}
	

/***/ },

/***/ 160:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var angular2_hmr_1 = __webpack_require__(394);
	var AppState = (function () {
	    function AppState() {
	        // @HmrState() is used by HMR to track the state of any object during HMR (hot module replacement)
	        this._state = {};
	    }
	    Object.defineProperty(AppState.prototype, "state", {
	        // already return a clone of the current state
	        get: function () {
	            return this._state = this._clone(this._state);
	        },
	        // never allow mutation
	        set: function (value) {
	            throw new Error('do not mutate the `.state` directly');
	        },
	        enumerable: true,
	        configurable: true
	    });
	    AppState.prototype.get = function (prop) {
	        // use our state getter for the clone
	        var state = this.state;
	        return state.hasOwnProperty(prop) ? state[prop] : state;
	    };
	    AppState.prototype.set = function (prop, value) {
	        // internally mutate our state
	        return this._state[prop] = value;
	    };
	    AppState.prototype._clone = function (object) {
	        // simple object clone
	        return JSON.parse(JSON.stringify(object));
	    };
	    __decorate([
	        angular2_hmr_1.HmrState(), 
	        __metadata('design:type', Object)
	    ], AppState.prototype, "_state", void 0);
	    AppState = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], AppState);
	    return AppState;
	}());
	exports.AppState = AppState;
	

/***/ },

/***/ 374:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var Observable_1 = __webpack_require__(5);
	__webpack_require__(569);
	var DataResolver = (function () {
	    function DataResolver() {
	    }
	    DataResolver.prototype.resolve = function (route, state) {
	        return Observable_1.Observable.of({ res: 'I am data' });
	    };
	    DataResolver = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], DataResolver);
	    return DataResolver;
	}());
	exports.DataResolver = DataResolver;
	// an array of services to resolve routes with data
	exports.APP_RESOLVER_PROVIDERS = [
	    DataResolver
	];
	

/***/ },

/***/ 375:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var webpack_toolkit_1 = __webpack_require__(248);
	var home_1 = __webpack_require__(545);
	var no_content_1 = __webpack_require__(551);
	var app_resolver_1 = __webpack_require__(374);
	exports.routes = [
	    { path: '', component: home_1.Home },
	    { path: 'home', component: home_1.Home },
	    // make sure you match the component type string to the require in asyncRoutes
	    { path: 'about', component: 'About',
	        resolve: {
	            'yourData': app_resolver_1.DataResolver
	        } },
	    // async components with children routes must use WebpackAsyncRoute
	    { path: 'detail', component: 'Detail',
	        canActivate: [webpack_toolkit_1.WebpackAsyncRoute],
	        children: [
	            { path: '', component: 'Index' } // must be included
	        ] },
	    { path: '**', component: no_content_1.NoContent },
	];
	// Async load a component using Webpack's require with es6-promise-loader and webpack `require`
	// asyncRoutes is needed for our @angularclass/webpack-toolkit that will allow us to resolve
	// the component correctly
	exports.asyncRoutes = {
	    // we have to use the alternative syntax for es6-promise-loader to grab the routes
	    'About': __webpack_require__(559),
	    'Detail': __webpack_require__(379),
	    'Index': __webpack_require__(379),
	};
	// Optimizations for initial loads
	// An array of callbacks to be invoked after bootstrap to prefetch async routes
	exports.prefetchRouteCallbacks = [
	    exports.asyncRoutes['About'],
	    exports.asyncRoutes['Detail'],
	];
	// Es6PromiseLoader and AsyncRoutes interfaces are defined in custom-typings
	

/***/ },

/***/ 376:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/*
	 * These are globally available directives in any template
	 */
	// Angular 2
	var core_1 = __webpack_require__(1);
	// Angular 2 Router
	var router_1 = __webpack_require__(124);
	// Angular 2 forms
	var forms_1 = __webpack_require__(220);
	// application_directives: directives that are global through out the application
	exports.APPLICATION_DIRECTIVES = router_1.ROUTER_DIRECTIVES.concat(forms_1.REACTIVE_FORM_DIRECTIVES);
	exports.DIRECTIVES = [
	    { provide: core_1.PLATFORM_DIRECTIVES, multi: true, useValue: exports.APPLICATION_DIRECTIVES }
	];
	

/***/ },

/***/ 377:
/***/ function(module, exports, __webpack_require__) {

	/*
	 * These are globally available pipes in any template
	 */
	"use strict";
	var core_1 = __webpack_require__(1);
	// application_pipes: pipes that are global through out the application
	exports.APPLICATION_PIPES = [];
	exports.PIPES = [
	    { provide: core_1.PLATFORM_PIPES, multi: true, useValue: exports.APPLICATION_PIPES }
	];
	

/***/ },

/***/ 378:
/***/ function(module, exports, __webpack_require__) {

	/*
	 * These are globally available services in any component or any other service
	 */
	"use strict";
	// Angular 2
	var common_1 = __webpack_require__(34);
	// Angular 2 Http
	var http_1 = __webpack_require__(234);
	// Angular 2 Router
	var router_1 = __webpack_require__(124);
	// Angular 2 forms
	var forms_1 = __webpack_require__(220);
	// AngularClass
	var webpack_toolkit_1 = __webpack_require__(248);
	var request_idle_callback_1 = __webpack_require__(373);
	var app_routes_1 = __webpack_require__(375);
	var app_resolver_1 = __webpack_require__(374);
	/*
	* Application Providers/Directives/Pipes
	* providers/directives/pipes that only live in our browser environment
	*/
	exports.APPLICATION_PROVIDERS = [
	    // new Angular 2 forms
	    forms_1.disableDeprecatedForms(),
	    forms_1.provideForms()
	].concat(app_resolver_1.APP_RESOLVER_PROVIDERS, [
	    router_1.provideRouter(app_routes_1.routes),
	    webpack_toolkit_1.provideWebpack(app_routes_1.asyncRoutes),
	    request_idle_callback_1.providePrefetchIdleCallbacks(app_routes_1.prefetchRouteCallbacks)
	], http_1.HTTP_PROVIDERS, [
	    { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
	]);
	exports.PROVIDERS = exports.APPLICATION_PROVIDERS.slice();
	

/***/ },

/***/ 379:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(1, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(432)[namespace]);
	      } else {
	        resolve(__webpack_require__(432));
	      }
	    });
	  });
	}

/***/ },

/***/ 430:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 543:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/*
	 * Angular 2 decorators and services
	 */
	var core_1 = __webpack_require__(1);
	var app_service_1 = __webpack_require__(160);
	/*
	 * App Component
	 * Top Level Component
	 */
	var App = (function () {
	    function App(appState) {
	        this.appState = appState;
	        this.angularclassLogo = 'assets/img/angularclass-avatar.png';
	        this.name = 'Angular 2 Webpack Starter';
	        this.url = 'https://twitter.com/AngularClass';
	    }
	    App.prototype.ngOnInit = function () {
	        console.log('Initial App State', this.appState.state);
	    };
	    App = __decorate([
	        core_1.Component({
	            selector: 'app',
	            encapsulation: core_1.ViewEncapsulation.None,
	            styles: [__webpack_require__(558)],
	            template: __webpack_require__(561)
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof app_service_1.AppState !== 'undefined' && app_service_1.AppState) === 'function' && _a) || Object])
	    ], App);
	    return App;
	    var _a;
	}());
	exports.App = App;
	/*
	 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
	 * more angular app examples that you may copy/paste
	 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
	 * For help or questions please contact us at @AngularClass on twitter
	 * or our chat on Slack at https://AngularClass.com/slack-join
	 */
	

/***/ },

/***/ 544:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var app_service_1 = __webpack_require__(160);
	var title_1 = __webpack_require__(546);
	var x_large_1 = __webpack_require__(548);
	var Home = (function () {
	    // TypeScript public modifiers
	    function Home(appState, title) {
	        this.appState = appState;
	        this.title = title;
	        // Set our default values
	        this.localState = { value: '' };
	    }
	    Home.prototype.ngOnInit = function () {
	        console.log('hello `Home` component');
	        // this.title.getData().subscribe(data => this.data = data);
	    };
	    Home.prototype.submitState = function (value) {
	        console.log('submitState', value);
	        this.appState.set('value', value);
	        this.localState.value = '';
	    };
	    Home = __decorate([
	        core_1.Component({
	            // The selector is what angular internally uses
	            // for `document.querySelectorAll(selector)` in our index.html
	            // where, in this case, selector is the string 'home'
	            selector: 'home',
	            // We need to tell Angular's Dependency Injection which providers are in our app.
	            providers: [
	                title_1.Title
	            ],
	            // We need to tell Angular's compiler which directives are in our template.
	            // Doing so will allow Angular to attach our behavior to an element
	            directives: [
	                x_large_1.XLarge
	            ],
	            // We need to tell Angular's compiler which custom pipes are in our template.
	            pipes: [],
	            // Our list of styles in our component. We may add more to compose many styles together
	            styles: [__webpack_require__(557)],
	            // Every Angular template is first compiled by the browser before Angular runs it's compiler
	            template: __webpack_require__(560)
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof app_service_1.AppState !== 'undefined' && app_service_1.AppState) === 'function' && _a) || Object, (typeof (_b = typeof title_1.Title !== 'undefined' && title_1.Title) === 'function' && _b) || Object])
	    ], Home);
	    return Home;
	    var _a, _b;
	}());
	exports.Home = Home;
	

/***/ },

/***/ 545:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(544));
	

/***/ },

/***/ 546:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(547));
	

/***/ },

/***/ 547:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(234);
	var Title = (function () {
	    function Title(http) {
	        this.http = http;
	        this.value = 'Angular 2';
	    }
	    Title.prototype.getData = function () {
	        console.log('Title#getData(): Get Data');
	        // return this.http.get('/assets/data.json')
	        // .map(res => res.json());
	        return {
	            value: 'AngularClass'
	        };
	    };
	    Title = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
	    ], Title);
	    return Title;
	    var _a;
	}());
	exports.Title = Title;
	

/***/ },

/***/ 548:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(549));
	

/***/ },

/***/ 549:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	/*
	 * Directive
	 * XLarge is a simple directive to show how one is made
	 */
	var XLarge = (function () {
	    function XLarge(element, renderer) {
	        // simple DOM manipulation to set font size to x-large
	        // `nativeElement` is the direct reference to the DOM element
	        // element.nativeElement.style.fontSize = 'x-large';
	        // for server/webworker support use the renderer
	        renderer.setElementStyle(element.nativeElement, 'fontSize', 'x-large');
	    }
	    XLarge = __decorate([
	        core_1.Directive({
	            selector: '[x-large]' // using [ ] means selecting attributes
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.Renderer !== 'undefined' && core_1.Renderer) === 'function' && _b) || Object])
	    ], XLarge);
	    return XLarge;
	    var _a, _b;
	}());
	exports.XLarge = XLarge;
	

/***/ },

/***/ 550:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	// App
	__export(__webpack_require__(543));
	__export(__webpack_require__(160));
	__export(__webpack_require__(375));
	var app_service_2 = __webpack_require__(160);
	// Application wide providers
	exports.APP_PROVIDERS = [
	    app_service_2.AppState
	];
	

/***/ },

/***/ 551:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(552));
	

/***/ },

/***/ 552:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var NoContent = (function () {
	    function NoContent() {
	    }
	    NoContent = __decorate([
	        core_1.Component({
	            selector: 'no-content',
	            template: "\n    <div>\n      <h1>404: page missing</h1>\n    </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], NoContent);
	    return NoContent;
	}());
	exports.NoContent = NoContent;
	

/***/ },

/***/ 553:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(376));
	__export(__webpack_require__(377));
	__export(__webpack_require__(378));
	var browser_directives_2 = __webpack_require__(376);
	var browser_pipes_2 = __webpack_require__(377);
	var browser_providers_2 = __webpack_require__(378);
	exports.PLATFORM_PROVIDERS = browser_providers_2.PROVIDERS.concat(browser_directives_2.DIRECTIVES, browser_pipes_2.PIPES);
	

/***/ },

/***/ 554:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	// Angular 2
	// rc2 workaround
	var platform_browser_1 = __webpack_require__(111);
	var core_1 = __webpack_require__(1);
	// Environment Providers
	var PROVIDERS = [];
	// Angular debug tools in the dev console
	// https://github.com/angular/angular/blob/86405345b781a9dc2438c0fbe3e9409245647019/TOOLS_JS.md
	var _decorateComponentRef = function identity(value) { return value; };
	if (false) {
	    // Production
	    platform_browser_1.disableDebugTools();
	    core_1.enableProdMode();
	    PROVIDERS = PROVIDERS.slice();
	}
	else {
	    _decorateComponentRef = function (cmpRef) {
	        var _ng = window.ng;
	        platform_browser_1.enableDebugTools(cmpRef);
	        window.ng.probe = _ng.probe;
	        window.ng.coreTokens = _ng.coreTokens;
	        return cmpRef;
	    };
	    // Development
	    PROVIDERS = PROVIDERS.slice();
	}
	exports.decorateComponentRef = _decorateComponentRef;
	exports.ENV_PROVIDERS = PROVIDERS.slice();
	

/***/ },

/***/ 555:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(430)();
	// imports


	// module
	exports.push([module.id, "/*styles for home content only*/\n", ""]);

	// exports


/***/ },

/***/ 556:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(430)();
	// imports


	// module
	exports.push([module.id, "body {\n  margin: 0px;\n  padding: 0px;\n  font-family: \"Cabin\";\n  background-color: #809361; }\n\n@media screen and (min-width: 700px) {\n  body {\n    background-image: url(" + __webpack_require__(765) + ");\n    background-repeat: no-repeat;\n    background-size: cover; } }\n\n.Header {\n  display: -webkit-flex;\n  display: flex;\n  height: 26vh;\n  margin: 0px;\n  background-image: url(" + __webpack_require__(766) + ");\n  background-repeat: no-repeat;\n  background-size: auto 23vh;\n  background-position: 8vw 1.5vh; }\n\nh1 {\n  font-size: 4vh;\n  margin: 5px;\n  text-align: left; }\n\nh2 {\n  font-size: 3.5vh;\n  margin: 5px;\n  text-align: left; }\n\nh3 {\n  font-size: 3vh;\n  margin: 0px;\n  text-align: left; }\n\nh4 {\n  font-size: 2.5vh;\n  margin: 0px;\n  padding-right: 20px;\n  text-align: left; }\n\n.Title {\n  box-sizing: border-box;\n  position: relative;\n  margin: 0px;\n  top: 4vh;\n  left: 20vw;\n  padding: 0px;\n  color: white;\n  font-weight: bold;\n  text-shadow: 0px 0px 7px rgba(51, 51, 51, 0.58), 0px 3px 0px rgba(51, 51, 51, 0.51); }\n\n.Title h1 {\n  font-size: 4vw;\n  text-align: left;\n  margin: 0px; }\n\n.Title h2 {\n  margin: 0px;\n  text-align: right; }\n\n.FBLink {\n  position: absolute;\n  right: 1.5vw;\n  top: 15vh; }\n\n.FBLink img {\n  height: 5vh; }\n\n.Nav {\n  position: absolute;\n  top: 22vh;\n  right: 1.5vw;\n  height: 5vh;\n  width: 65vw;\n  box-sizing: border-box;\n  z-index: 1;\n  display: flex;\n  display: -webkit-flex;\n  justify-content: flex-start;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #333333;\n  background-color: #98b06f;\n  box-shadow: 0px 0px 7px rgba(51, 51, 51, 0.58), 0px 3px 0px rgba(51, 51, 51, 0.51);\n  color: white;\n  font-size: 2.5vh; }\n\n@media screen and (orientation: portrait) {\n  .Nav {\n    font-size: 3vw; }\n  h1 {\n    font-size: 4vw; }\n  h2 {\n    font-size: 3.5vw; }\n  h3 {\n    font-size: 3vw; }\n  h4 {\n    font-size: 2.5vw; }\n  .Title h1 {\n    font-size: 7vw; } }\n\n.Nav a {\n  color: white;\n  display: block;\n  text-decoration: none;\n  padding: 4px 10px; }\n\n.Nav a:hover {\n  background-color: #b6dc76; }\n\n.Main {\n  position: absolute;\n  left: 0px;\n  min-height: 74vh;\n  width: 100%;\n  z-index: 100;\n  box-sizing: border-box;\n  margin: 0px;\n  padding: 1vh 20vw;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: column;\n  flex-direction: column;\n  border-style: solid;\n  border-width: 1px;\n  border-color: #333333;\n  border-radius: 15vw 0px 0px 0px;\n  background-color: white;\n  box-shadow: 0px 0px 7px rgba(51, 51, 51, 0.58), 0px 3px 0px rgba(51, 51, 51, 0.51);\n  background-size: auto 70vh;\n  background-image: url(" + __webpack_require__(767) + ");\n  background-repeat: no-repeat;\n  background-position: 5vw 2.5vh;\n  text-align: justify;\n  color: black; }\n\n.TwoColumn {\n  -webkit-columns: 2 400px;\n  -moz-columns: 2 400px;\n  columns: 2 400px;\n  -webkit-column-gap: 2em;\n  -moz-column-gap: 2em;\n  column-gap: 2em;\n  padding: 0px; }\n\n.Profile {\n  display: block;\n  min-height: 100px;\n  margin-bottom: 10px; }\n\n.Profile img {\n  float: left;\n  margin-right: 10px; }\n\n.Profile h3 {\n  margin: 0px; }\n\n.FlexRow {\n  display: flex;\n  display: -webkit-flex;\n  flex-wrap: wrap;\n  justify-content: space-between; }\n\nul {\n  margin: 0px;\n  padding: 0px;\n  list-style-position: inside; }\n\nli {\n  padding: 0px;\n  margin: 5px;\n  text-align: left; }\n\n.Input {\n  border-width: 2px;\n  border-color: #333333;\n  border-style: solid;\n  background-color: #f8fbf1;\n  box-shadow: inset 2px 2px 0px 0px rgba(51, 51, 51, 0.25);\n  width: 100%;\n  margin: 5px 0px 10px 10px;\n  padding: 5px;\n  min-height: 35px; }\n\ninput[type=submit] {\n  min-width: 165px;\n  margin: 10px;\n  padding: 5px;\n  border-style: solid;\n  border-width: 2px;\n  border-color: #333333;\n  background-color: #98b06f;\n  box-shadow: 0px 0px 4px 0px rgba(51, 51, 51, 0.004), 0px 3px 0px 0px rgba(51, 51, 51, 0.51);\n  border-radius: 5px;\n  color: white;\n  font-size: 2.5vh; }\n", ""]);

	// exports


/***/ },

/***/ 557:
/***/ function(module, exports, __webpack_require__) {

	// css-to-string-loader: transforms styles from css-loader to a string output

	// Get the styles
	var styles = __webpack_require__(555);

	if (typeof styles === 'string') {
	  // Return an existing string
	  module.exports = styles;
	} else {
	  // Call the custom toString method from css-loader module
	  module.exports = styles.toString();
	}

/***/ },

/***/ 558:
/***/ function(module, exports, __webpack_require__) {

	// css-to-string-loader: transforms styles from css-loader to a string output

	// Get the styles
	var styles = __webpack_require__(556);

	if (typeof styles === 'string') {
	  // Return an existing string
	  module.exports = styles;
	} else {
	  // Call the custom toString method from css-loader module
	  module.exports = styles.toString();
	}

/***/ },

/***/ 559:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(2, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(433)[namespace]);
	      } else {
	        resolve(__webpack_require__(433));
	      }
	    });
	  });
	}

/***/ },

/***/ 560:
/***/ function(module, exports) {

	module.exports = "<div id='indexContent'>\r\n            <div class=\"Content\">\r\n                <h1>Flowery message about us...</h1>\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at laoreet enim. Nam fermentum venenatis pharetra. Integer commodo vitae ipsum at rhoncus. Etiam luctus mi sed scelerisque pharetra. Sed sapien nisi, posuere eu sapien vitae, finibus placerat ex. Maecenas venenatis, orci pretium fermentum luctus, ex odio varius velit, eu vehicula nisl ligula sed magna. Nullam cursus placerat eros ut lacinia. Nullam consequat felis vitae euismod sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec gravida tellus eu est tincidunt, in laoreet dolor viverra. Suspendisse non efficitur magna. Pellentesque eu venenatis diam. Cras faucibus nulla ut diam ornare, sed tempus turpis posuere.\r\n                <br>\r\n                Donec lacinia vestibulum magna. Vivamus in hendrerit ante, et dignissim odio. Ut in est vitae nulla bibendum iaculis at at eros. Proin leo leo, varius id ante sit amet, interdum sodales purus. Nullam ligula odio, convallis vel molestie vel, porta eleifend lectus. Nunc vulputate risus eget orci aliquet viverra. Aenean et magna semper urna pharetra faucibus. Cras maximus placerat lectus nec placerat. Nulla non vulputate metus. Nulla facilisi. Sed tincidunt felis congue finibus facilisis. Etiam laoreet eget elit nec consequat. Pellentesque iaculis sem ex, ornare rhoncus ligula commodo et. Cras efficitur libero id leo porttitor, quis posuere felis euismod. Nulla quis tortor elit. Nulla tincidunt hendrerit convallis.\r\n                </p>\r\n            </div>\r\n            <h1>Camp Officials</h1>   \r\n            <div class=\"TwoColumn\">\r\n                <div class=\"Profile\">\r\n                    <img src=\"assets/images/Portrait-1.jpg\">\r\n                    <h3>Camp Coordinator: Trina</h3>\r\n                    Profile Text Goes Here        \r\n                </div>\r\n                <div class=\"Profile\">\r\n                    <img src=\"assets/images/Portrait-1.jpg\">\r\n                    <h3>Camp Liason: David Y.</h3>\r\n                    Profile Text Goes Here\r\n                </div>\r\n              \r\n            </div>\r\n            <h2>Board of Directors</h2>\r\n            <div class = \"FlexRow\">\r\n                <h4>Chair: David Y.</h4>\r\n                <h4>Chris B.</h4>\r\n                <h4>Eric D.</h4>\r\n                <h4>????</h4>\r\n            </div>\r\n            <h2>Other Positions</h2>\r\n            <div>\r\n                <ul class=\"FlexRow\">\r\n                    <li><b>Secretary:</b> Trina</li>\r\n                    <li><b>Treasurer:</b> Pam T.</li>\r\n                    <li><b>Treasurer:</b> Eric P.</li>\r\n                    <li><b>Kitchen Coordinator:</b> Hunnie T.</li>\r\n                    <li><b>Kitchen Coordinator:</b> Alisa C.</li>\r\n                    <li><b>Tent Master:</b> unfilled</li>\r\n                </ul>                \r\n            </div> \r\n</div>"

/***/ },

/***/ 561:
/***/ function(module, exports) {

	module.exports = "<section class=\"Container\">\r\n        <div class=\"Header\">\r\n            <div class=\"Title\"> \r\n                <h1>Camp Second Chance</h1>\r\n                <h2>(206) 578-6551</h2>\r\n            </div>\r\n            <div class=\"FBLink\">\r\n                <a href=\"https://www.facebook.com/groups/823968681070416/\" target=\"new\"><img src=\"/assets/images/FB-f-Logo__white_50.png\"></a>\r\n            </div>\r\n            <nav class=\"Nav\">\r\n                <a [routerLink]=\"['/']\">Home</a>\r\n                <a [routerLink]=\"['/needs']\">Needs</a>\r\n                <a [routerLink]=\"['/']\">Needs</a>\r\n            </nav>\r\n        \r\n        </div>\r\n        <div class=\"Main\">   \r\n            <router-outlet></router-outlet>\r\n        </div>\r\n</section>"

/***/ },

/***/ 569:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(5);
	var of_1 = __webpack_require__(162);
	Observable_1.Observable.of = of_1.of;
	//# sourceMappingURL=of.js.map

/***/ },

/***/ 765:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/images/BGSplash.jpg?b07bd45fb63932412ef4";

/***/ },

/***/ 766:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/images/Logo.png?85410fe1747a132e370d";

/***/ },

/***/ 767:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/images/LogoBig.png?a6643da89613ab479320";

/***/ }

});
//# sourceMappingURL=main.map