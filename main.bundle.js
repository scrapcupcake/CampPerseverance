var ac_main =
webpackJsonpac__name_([4],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/*
	 * Providers provided by Angular
	 */
	var platform_browser_dynamic_1 = __webpack_require__(366);
	/*
	* Platform and Environment
	* our providers/directives/pipes
	*/
	var browser_1 = __webpack_require__(457);
	var environment_1 = __webpack_require__(458);
	/*
	* App Component
	* our top level component that holds all of our components
	*/
	var app_1 = __webpack_require__(449);
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

/***/ 125:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var angular2_hmr_1 = __webpack_require__(383);
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

/***/ 176:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var NeedsItem = (function () {
	    function NeedsItem() {
	    }
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], NeedsItem.prototype, "title", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], NeedsItem.prototype, "desc", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], NeedsItem.prototype, "usage", void 0);
	    NeedsItem = __decorate([
	        core_1.Component({
	            selector: 'needs-item',
	            styles: ["\n  div.lower-box{\n    display: flex;\n    display: webkit-flex;\n    justify-content: space-between;\n    margin:0px;\n  }\n  p{\n    margin:0px;\n  }\n  h3{\n    margin:0px;\n    margin-top:5px;\n    -webkit-text-stroke: 1px black;\n    color: white;\n    text-shadow:\n        3px 3px 0 #000,\n       -1px -1px 0 #000,  \n        1px -1px 0 #000,\n       -1px 1px 0 #000,\n        1px 1px 0 #000;\n    font-size: 3.5vh;\n  }\n\n  .usage {\n      font-weight: bold;\n  }\n  "],
	            template: "\n  <div>\n  <h3>{{title}}</h3>\n  <div class=\"lower-box\">\n    <p class=\"description\">{{desc}}</p>\n    <p class=\"usage\">{{usage}}</p>\n  </div>\n  </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], NeedsItem);
	    return NeedsItem;
	}());
	exports.NeedsItem = NeedsItem;
	

/***/ },

/***/ 177:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var NeedsSection = (function () {
	    function NeedsSection() {
	    }
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], NeedsSection.prototype, "class", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], NeedsSection.prototype, "title", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], NeedsSection.prototype, "desc", void 0);
	    NeedsSection = __decorate([
	        core_1.Component({
	            selector: 'needs-section',
	            styles: ["\n  \n  section {\n      padding: 10px;\n      padding-top: 0px;\n      margin:5px 0px;\n      }\n\n      section.Urgent {\n        border-style: solid;\n        border-width: 27px 27px 31px;\n        -webkit-border-image: url(../../assets/images/Needs1.png) 27 27 31 repeat;\n           -moz-border-image: url(../../assets/images/Needs1.png) 27 27 31 repeat;\n             -o-border-image: url(../../assets/images/Needs1.png) 27 27 31 repeat;\n                border-image: url(../../assets/images/Needs1.png) 27 27 31 fill repeat;\n      }\n      section.Moderate{\n        border-style: solid;\n        border-width: 27px 27px 31px;\n        -webkit-border-image: url(../../assets/images/Needs2.png) 27 27 31 repeat;\n           -moz-border-image: url(../../assets/images/Needs2.png) 27 27 31 repeat;\n             -o-border-image: url(../../assets/images/Needs2.png) 27 27 31 repeat;\n                border-image: url(../../assets/images/Needs2.png) 27 27 31 fill repeat;\n      }\n      section.Basic{\n        border-style: solid;\n        border-width: 27px 27px 31px;\n        -webkit-border-image: url(../../assets/images/Needs3.png) 27 27 31 repeat;\n           -moz-border-image: url(../../assets/images/Needs3.png) 27 27 31 repeat;\n             -o-border-image: url(../../assets/images/Needs3.png) 27 27 31 repeat;\n                border-image: url(../../assets/images/Needs3.png) 27 27 31 fill repeat;\n      }\n      section.Wishful{\n        border-style: solid;\n        border-width: 27px 27px 31px;\n        -webkit-border-image: url(../../assets/images/Needs4.png) 27 27 31 repeat;\n           -moz-border-image: url(../../assets/images/Needs4.png) 27 27 31 repeat;\n             -o-border-image: url(../../assets/images/Needs4.png) 27 27 31 repeat;\n                border-image: url(../../assets/images/Needs4.png) 27 27 31 fill repeat;\n      }\n    h1 { \n      position:relative;\n      left:-1vw;\n      -webkit-text-stroke: 1px black;\n      color: white;\n      text-shadow:\n         3px 3px 0 #000,\n        -1px -1px 0 #000,  \n         1px -1px 0 #000,\n        -1px 1px 0 #000,\n         1px 1px 0 #000;\n      font-size: 3.5vh;\n    }\n    h2{\n      color:white;\n      margin:0px;\n      font-size:2vh;\n      font-style: oblique;\n    }\n  "],
	            template: "\n  <section [class]=\"class\">\n  <h1>{{title}}</h1>\n  <h2>{{desc}}</h2>\n  <ng-content></ng-content>\n  </section> "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], NeedsSection);
	    return NeedsSection;
	}());
	exports.NeedsSection = NeedsSection;
	

/***/ },

/***/ 280:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var Observable_1 = __webpack_require__(5);
	__webpack_require__(749);
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

/***/ 281:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var webpack_toolkit_1 = __webpack_require__(250);
	var home_1 = __webpack_require__(444);
	var alert_1 = __webpack_require__(437);
	var code_1 = __webpack_require__(440);
	var contact_1 = __webpack_require__(442);
	var needs_1 = __webpack_require__(450);
	var who_1 = __webpack_require__(455);
	var no_content_1 = __webpack_require__(453);
	var app_resolver_1 = __webpack_require__(280);
	exports.routes = [
	    { path: '', component: home_1.Home },
	    { path: 'home', component: home_1.Home },
	    { path: 'alert', component: alert_1.Alert },
	    { path: 'code', component: code_1.Code },
	    { path: 'contact', component: contact_1.Contact },
	    { path: 'needs', component: needs_1.Needs },
	    { path: 'needs/survey', component: needs_1.NeedsSurvey },
	    { path: 'who', component: who_1.Who },
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
	    'About': __webpack_require__(463),
	    'Detail': __webpack_require__(285),
	    'Index': __webpack_require__(285),
	};
	// Optimizations for initial loads
	// An array of callbacks to be invoked after bootstrap to prefetch async routes
	exports.prefetchRouteCallbacks = [
	    exports.asyncRoutes['About'],
	    exports.asyncRoutes['Detail'],
	];
	// Es6PromiseLoader and AsyncRoutes interfaces are defined in custom-typings
	

/***/ },

/***/ 282:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/*
	 * These are globally available directives in any template
	 */
	// Angular 2
	var core_1 = __webpack_require__(1);
	// Angular 2 Router
	var router_1 = __webpack_require__(58);
	// Angular 2 forms
	var forms_1 = __webpack_require__(222);
	// application_directives: directives that are global through out the application
	exports.APPLICATION_DIRECTIVES = router_1.ROUTER_DIRECTIVES.concat(forms_1.REACTIVE_FORM_DIRECTIVES);
	exports.DIRECTIVES = [
	    { provide: core_1.PLATFORM_DIRECTIVES, multi: true, useValue: exports.APPLICATION_DIRECTIVES }
	];
	

/***/ },

/***/ 283:
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

/***/ 284:
/***/ function(module, exports, __webpack_require__) {

	/*
	 * These are globally available services in any component or any other service
	 */
	"use strict";
	// Angular 2
	var common_1 = __webpack_require__(34);
	// Angular 2 Http
	var http_1 = __webpack_require__(236);
	// Angular 2 Router
	var router_1 = __webpack_require__(58);
	// Angular 2 forms
	var forms_1 = __webpack_require__(222);
	// AngularClass
	var webpack_toolkit_1 = __webpack_require__(250);
	var request_idle_callback_1 = __webpack_require__(382);
	var app_routes_1 = __webpack_require__(281);
	var app_resolver_1 = __webpack_require__(280);
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

/***/ 285:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(1, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(434)[namespace]);
	      } else {
	        resolve(__webpack_require__(434));
	      }
	    });
	  });
	}

/***/ },

/***/ 419:
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

/***/ 436:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(58);
	/*
	 * We're loading this component asynchronously
	 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
	 * see https://github.com/gdi2290/es6-promise-loader for more info
	 */
	console.log('`alert` component loaded asynchronously');
	var Alert = (function () {
	    function Alert(route) {
	        this.route = route;
	    }
	    Alert.prototype.ngOnInit = function () {
	        var _this = this;
	        this.route
	            .data
	            .subscribe(function (data) {
	            // your resolved data from route
	            _this.localState = data.yourData;
	        });
	        console.log('hello `alert` component');
	        // static data that is bundled
	        // var mockData = require('assets/mock-data/mock-data.json');
	        // console.log('mockData', mockData);
	        // if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
	        // this.asyncDataWithWebpack();
	    };
	    Alert.prototype.asyncDataWithWebpack = function () {
	        // you can also async load mock data with 'es6-promise-loader'
	        // you would do this if you don't want the mock-data bundled
	        // remember that 'es6-promise-loader' is a promise
	        // var asyncMockDataPromiseFactory = require('es6-promise!assets/mock-data/mock-data.json');
	        // setTimeout(() => {
	        //
	        //   let asyncDataPromise = asyncMockDataPromiseFactory();
	        //   asyncDataPromise.then(json => {
	        //     console.log('async mockData', json);
	        //   });
	        //
	        // });
	    };
	    Alert = __decorate([
	        core_1.Component({
	            selector: 'alert',
	            styles: ["\n  "],
	            template: __webpack_require__(464)
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _a) || Object])
	    ], Alert);
	    return Alert;
	    var _a;
	}());
	exports.Alert = Alert;
	

/***/ },

/***/ 437:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(436));
	

/***/ },

/***/ 438:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/*
	 * Angular 2 decorators and services
	 */
	var core_1 = __webpack_require__(1);
	var app_service_1 = __webpack_require__(125);
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
	            styles: [__webpack_require__(462)],
	            template: __webpack_require__(469)
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

/***/ 439:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(58);
	/*
	 * We're loading this component asynchronously
	 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
	 * see https://github.com/gdi2290/es6-promise-loader for more info
	 */
	console.log('`code` component loaded asynchronously');
	var Code = (function () {
	    function Code(route) {
	        this.route = route;
	    }
	    Code.prototype.ngOnInit = function () {
	        var _this = this;
	        this.route
	            .data
	            .subscribe(function (data) {
	            // your resolved data from route
	            _this.localState = data.yourData;
	        });
	        console.log('hello `code` component');
	        // static data that is bundled
	        // var mockData = require('assets/mock-data/mock-data.json');
	        // console.log('mockData', mockData);
	        // if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
	        // this.asyncDataWithWebpack();
	    };
	    Code.prototype.asyncDataWithWebpack = function () {
	        // you can also async load mock data with 'es6-promise-loader'
	        // you would do this if you don't want the mock-data bundled
	        // remember that 'es6-promise-loader' is a promise
	        // var asyncMockDataPromiseFactory = require('es6-promise!assets/mock-data/mock-data.json');
	        // setTimeout(() => {
	        //
	        //   let asyncDataPromise = asyncMockDataPromiseFactory();
	        //   asyncDataPromise.then(json => {
	        //     console.log('async mockData', json);
	        //   });
	        //
	        // });
	    };
	    Code = __decorate([
	        core_1.Component({
	            selector: 'code-of-conduct',
	            styles: ["\n  "],
	            template: __webpack_require__(465)
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _a) || Object])
	    ], Code);
	    return Code;
	    var _a;
	}());
	exports.Code = Code;
	

/***/ },

/***/ 440:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(439));
	

/***/ },

/***/ 441:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(58);
	/*
	 * We're loading this component asynchronously
	 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
	 * see https://github.com/gdi2290/es6-promise-loader for more info
	 */
	console.log('`contact` component loaded asynchronously');
	var Contact = (function () {
	    function Contact(route) {
	        this.route = route;
	    }
	    Contact.prototype.ngOnInit = function () {
	        var _this = this;
	        this.route
	            .data
	            .subscribe(function (data) {
	            // your resolved data from route
	            _this.localState = data.yourData;
	        });
	        console.log('hello `contact` component');
	        // static data that is bundled
	        // var mockData = require('assets/mock-data/mock-data.json');
	        // console.log('mockData', mockData);`
	        // if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
	        // this.asyncDataWithWebpack();
	    };
	    Contact.prototype.asyncDataWithWebpack = function () {
	        // you can also async load mock data with 'es6-promise-loader'
	        // you would do this if you don't want the mock-data bundled
	        // remember that 'es6-promise-loader' is a promise
	        // var asyncMockDataPromiseFactory = require('es6-promise!assets/mock-data/mock-data.json');
	        // setTimeout(() => {
	        //
	        //   let asyncDataPromise = asyncMockDataPromiseFactory();
	        //   asyncDataPromise.then(json => {
	        //     console.log('async mockData', json);
	        //   });
	        //
	        // });
	    };
	    Contact = __decorate([
	        core_1.Component({
	            selector: 'contact',
	            styles: ["\n  "],
	            template: __webpack_require__(466)
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _a) || Object])
	    ], Contact);
	    return Contact;
	    var _a;
	}());
	exports.Contact = Contact;
	

/***/ },

/***/ 442:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(441));
	

/***/ },

/***/ 443:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var app_service_1 = __webpack_require__(125);
	var title_1 = __webpack_require__(445);
	var x_large_1 = __webpack_require__(447);
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
	            styles: [__webpack_require__(461)],
	            // Every Angular template is first compiled by the browser before Angular runs it's compiler
	            template: __webpack_require__(467)
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof app_service_1.AppState !== 'undefined' && app_service_1.AppState) === 'function' && _a) || Object, (typeof (_b = typeof title_1.Title !== 'undefined' && title_1.Title) === 'function' && _b) || Object])
	    ], Home);
	    return Home;
	    var _a, _b;
	}());
	exports.Home = Home;
	

/***/ },

/***/ 444:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(443));
	

/***/ },

/***/ 445:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(446));
	

/***/ },

/***/ 446:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(236);
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

/***/ 447:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(448));
	

/***/ },

/***/ 448:
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

/***/ 449:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	// App
	__export(__webpack_require__(438));
	__export(__webpack_require__(125));
	__export(__webpack_require__(281));
	var app_service_2 = __webpack_require__(125);
	// Application wide providers
	exports.APP_PROVIDERS = [
	    app_service_2.AppState
	];
	

/***/ },

/***/ 450:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(176));
	__export(__webpack_require__(177));
	__export(__webpack_require__(452));
	__export(__webpack_require__(451));
	

/***/ },

/***/ 451:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var needs_section_component_1 = __webpack_require__(177);
	var needs_item_component_1 = __webpack_require__(176);
	var NeedsSurvey = (function () {
	    function NeedsSurvey() {
	    }
	    NeedsSurvey = __decorate([
	        core_1.Component({
	            directives: [needs_item_component_1.NeedsItem, needs_section_component_1.NeedsSection],
	            template: "\n    <div>\n        <needs-section class=\"Urgent\" title=\"Campwide Needs\" desc=\"List all the things you can think of that we all use, including:\">            <needs-item title=\"Gasoline\" desc=\"To power the generator\" usage=\"3 Gallons/Day\"></needs-item>\n        </needs-section>\n        <needs-section class=\"Urgent\" title=\"\" desc=\"\">\n            <textarea cols=\"90\" rows=\"14\"></textarea>\n        </needs-section>\n        <needs-section class=\"Basic\" title=\"Campwide Wants\" desc=\"Things that the entire camp likes, especially to eat:\">            <needs-item title=\"NutterButters\" desc=\"To power the people\" usage=\"Lots, apparently, who knew?\"></needs-item>\n        </needs-section>\n        <needs-section class=\"Basic\" title=\"\" desc=\"\">\n            <textarea cols=\"90\" rows=\"14\"></textarea>\n        </needs-section>\n        <needs-section class=\"Urgent\" title=\"Camper Needs\" desc=\"Personal needs, will be put on the final list as a tally:\">            <needs-item title=\"Health Care\" desc=\"To heal the people\" usage=\"\"></needs-item>\n            <needs-item title=\"Job Placement\" desc=\"To heal the wallets of the people\" usage=\"\"></needs-item>\n            <needs-item title=\"Day Labor\" desc=\"Same\" usage=\"\"></needs-item>\n        </needs-section>\n        <needs-section class=\"Urgent\" title=\"\" desc=\"\">\n            <textarea cols=\"90\" rows=\"35\"></textarea>\n        </needs-section>\n    </div>"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], NeedsSurvey);
	    return NeedsSurvey;
	}());
	exports.NeedsSurvey = NeedsSurvey;
	

/***/ },

/***/ 452:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var needs_section_component_1 = __webpack_require__(177);
	var needs_item_component_1 = __webpack_require__(176);
	var Needs = (function () {
	    function Needs() {
	    }
	    Needs = __decorate([
	        core_1.Component({
	            selector: 'needs',
	            directives: [needs_section_component_1.NeedsSection, needs_item_component_1.NeedsItem],
	            styles: ["\n  .TwoFlex{\n    display: flex;\n    display: -webkit-flex;\n    align-items: stretch;\n    align-content: stretch;\n    flex-wrap: wrap;\n    }\n    needs-section{\n      flex: 1 0 400px;\n      \n    }\n  "],
	            template: __webpack_require__(468)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Needs);
	    return Needs;
	}());
	exports.Needs = Needs;
	

/***/ },

/***/ 453:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(454));
	

/***/ },

/***/ 454:
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

/***/ 455:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(456));
	

/***/ },

/***/ 456:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(58);
	/*
	 * We're loading this component asynchronously
	 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
	 * see https://github.com/gdi2290/es6-promise-loader for more info
	 */
	console.log('`who` component loaded asynchronously');
	var Who = (function () {
	    function Who(route) {
	        this.route = route;
	    }
	    Who.prototype.ngOnInit = function () {
	        var _this = this;
	        this.route
	            .data
	            .subscribe(function (data) {
	            // your resolved data from route
	            _this.localState = data.yourData;
	        });
	        console.log('hello `who` component');
	        // static data that is bundled
	        // var mockData = require('assets/mock-data/mock-data.json');
	        // console.log('mockData', mockData);
	        // if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
	        // this.asyncDataWithWebpack();
	    };
	    Who.prototype.asyncDataWithWebpack = function () {
	        // you can also async load mock data with 'es6-promise-loader'
	        // you would do this if you don't want the mock-data bundled
	        // remember that 'es6-promise-loader' is a promise
	        // var asyncMockDataPromiseFactory = require('es6-promise!assets/mock-data/mock-data.json');
	        // setTimeout(() => {
	        //
	        //   let asyncDataPromise = asyncMockDataPromiseFactory();
	        //   asyncDataPromise.then(json => {
	        //     console.log('async mockData', json);
	        //   });
	        //
	        // });
	    };
	    Who = __decorate([
	        core_1.Component({
	            selector: 'who',
	            styles: ["\n  "],
	            template: __webpack_require__(470)
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _a) || Object])
	    ], Who);
	    return Who;
	    var _a;
	}());
	exports.Who = Who;
	

/***/ },

/***/ 457:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(282));
	__export(__webpack_require__(283));
	__export(__webpack_require__(284));
	var browser_directives_2 = __webpack_require__(282);
	var browser_pipes_2 = __webpack_require__(283);
	var browser_providers_2 = __webpack_require__(284);
	exports.PLATFORM_PROVIDERS = browser_providers_2.PROVIDERS.concat(browser_directives_2.DIRECTIVES, browser_pipes_2.PIPES);
	

/***/ },

/***/ 458:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	// Angular 2
	// rc2 workaround
	var platform_browser_1 = __webpack_require__(112);
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

/***/ 459:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(419)();
	// imports


	// module
	exports.push([module.id, "/*styles for home content only*/\n", ""]);

	// exports


/***/ },

/***/ 460:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(419)();
	// imports


	// module
	exports.push([module.id, "@media print {\n  .Header {\n    display: none; }\n  .Nav {\n    display: none; }\n  h1 {\n    text-shadow: none !important; }\n  h1, h2, h3 {\n    outline: none !important;\n    color: black !important;\n    margin: 0; } }\n\n@media screen {\n  body {\n    margin: 0px;\n    font-family: \"Cabin\";\n    background-color: #809361; }\n  .Header {\n    display: -webkit-flex;\n    display: flex;\n    height: 26vh;\n    margin: 0px;\n    background-image: url(" + __webpack_require__(785) + ");\n    background-repeat: no-repeat;\n    background-size: auto 23vh;\n    background-position: 8vw 1.5vh; }\n  a {\n    color: #809361;\n    text-decoration: none; }\n  a:hover {\n    color: #b6dc76; }\n  h1 {\n    font-size: 4vh;\n    margin: 5px;\n    text-align: left; }\n  h2 {\n    font-size: 3.5vh;\n    margin: 5px;\n    text-align: left; }\n  h3 {\n    font-size: 3vh;\n    margin: 5px;\n    text-align: left; }\n  .Title {\n    box-sizing: border-box;\n    position: relative;\n    margin: 0px;\n    top: 4vh;\n    left: 20vw;\n    padding: 0px;\n    color: white;\n    font-weight: bold;\n    text-shadow: 0px 0px 7px rgba(51, 51, 51, 0.58), 0px 3px 0px rgba(51, 51, 51, 0.51); }\n  .Title h1 {\n    font-size: 4vw;\n    text-align: left;\n    margin: 0px; }\n  .Title h2 {\n    margin: 0px;\n    text-align: right; }\n  .FBLink {\n    position: absolute;\n    right: 1.5vw;\n    top: 15vh; }\n  .FBLink img {\n    height: 5vh; }\n  .Nav {\n    position: absolute;\n    display: flex;\n    display: -webkit-flex;\n    justify-content: flex-end;\n    top: 22vh;\n    right: 1.5vw;\n    flex-wrap: wrap;\n    box-sizing: border-box;\n    z-index: 100;\n    align-items: baseline; }\n  .Alert {\n    display: block;\n    background-color: #2a87ad;\n    border-width: 2px;\n    border-style: solid;\n    border-color: #003333;\n    box-shadow: 0px 0px 7px rgba(51, 51, 51, 0.58), 0px 3px 0px rgba(51, 51, 51, 0.51);\n    color: white;\n    padding: 10px;\n    font-size: 3vh;\n    z-index: 200;\n    text-decoration: none; }\n  .Alert:hover {\n    background-color: #6dcff6;\n    color: #003333; }\n  .NavBar {\n    box-sizing: border-box;\n    display: flex;\n    display: -webkit-flex;\n    justify-content: flex-end;\n    border-width: 1px;\n    border-style: solid;\n    border-color: #333333;\n    background-color: #98b06f;\n    box-shadow: 0px 0px 7px rgba(51, 51, 51, 0.58), 0px 3px 0px rgba(51, 51, 51, 0.51);\n    color: white;\n    font-size: 2.5vh; }\n  .NavBar a {\n    color: white;\n    display: block;\n    text-decoration: none;\n    padding: 4px 10px; }\n  .NavBar a:hover {\n    color: #726e60;\n    background-color: #b6dc76; }\n  .Main {\n    left: 0px;\n    min-height: 74vh;\n    width: 100%;\n    z-index: 100;\n    box-sizing: border-box;\n    margin: 0px;\n    padding: 5vh 20vw;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-flex-direction: column;\n    flex-direction: column;\n    border-style: solid;\n    border-width: 1px;\n    border-color: #333333;\n    border-radius: 15vw 0px 0px 0px;\n    box-shadow: 0px 0px 7px rgba(51, 51, 51, 0.58), 0px 3px 0px rgba(51, 51, 51, 0.51);\n    background-color: white;\n    background-size: auto 70vh;\n    background-image: url(" + __webpack_require__(784) + ");\n    background-repeat: no-repeat;\n    background-position: 5vw 2.5vh;\n    text-align: justify;\n    color: black; } }\n\n@media screen and (orientation: portrait) and (max-width: 700px) {\n  .Header {\n    height: 31vh; }\n  .Nav {\n    font-size: 3vw; }\n  h1 {\n    font-size: 4vw; }\n  h2 {\n    font-size: 3.5vw; }\n  h3 {\n    font-size: 3vw; }\n  .Title h1 {\n    font-size: 7vw; }\n  .Main {\n    padding: 5vh 10vw; } }\n\n@media screen {\n  .TwoColumn {\n    -webkit-columns: 2 400px;\n    -moz-columns: 2 400px;\n    columns: 2 400px;\n    -webkit-column-gap: 2em;\n    -moz-column-gap: 2em;\n    column-gap: 2em;\n    padding: 0px; }\n  .MultiColumn {\n    display: flex;\n    display: -webkit-flex;\n    flex-wrap: wrap;\n    padding: 0px; }\n  .ColumnItem {\n    flex: 1 275px;\n    max-width: 275px;\n    margin: 2px; }\n  .Profile {\n    display: block;\n    min-height: 100px;\n    margin-bottom: 10px; }\n  .Profile img {\n    float: left;\n    margin-right: 10px; }\n  .Profile h3 {\n    margin: 0px; }\n  ul {\n    margin: 0px;\n    text-align: left; }\n  li {\n    text-indent: -6px; }\n  .Input {\n    border-width: 2px;\n    border-color: #333333;\n    border-style: solid;\n    background-color: #f8fbf1;\n    box-shadow: inset 2px 2px 0px 0px rgba(51, 51, 51, 0.25);\n    width: 100%;\n    margin: 5px 0px 10px 10px;\n    padding: 5px;\n    min-height: 35px; }\n  input[type=submit] {\n    min-width: 165px;\n    margin: 10px;\n    padding: 5px;\n    border-style: solid;\n    border-width: 2px;\n    border-color: #333333;\n    background-color: #98b06f;\n    box-shadow: 0px 0px 4px 0px rgba(51, 51, 51, 0.004), 0px 3px 0px 0px rgba(51, 51, 51, 0.51);\n    border-radius: 5px;\n    color: white;\n    font-size: 2.5vh; }\n  iframe {\n    width: 100%;\n    height: 400px; } }\n\n@media screen and (min-width: 700px) {\n  body {\n    background-image: url(" + __webpack_require__(783) + ");\n    background-repeat: no-repeat;\n    background-size: cover; } }\n", ""]);

	// exports


/***/ },

/***/ 461:
/***/ function(module, exports, __webpack_require__) {

	// css-to-string-loader: transforms styles from css-loader to a string output

	// Get the styles
	var styles = __webpack_require__(459);

	if (typeof styles === 'string') {
	  // Return an existing string
	  module.exports = styles;
	} else {
	  // Call the custom toString method from css-loader module
	  module.exports = styles.toString();
	}

/***/ },

/***/ 462:
/***/ function(module, exports, __webpack_require__) {

	// css-to-string-loader: transforms styles from css-loader to a string output

	// Get the styles
	var styles = __webpack_require__(460);

	if (typeof styles === 'string') {
	  // Return an existing string
	  module.exports = styles;
	} else {
	  // Call the custom toString method from css-loader module
	  module.exports = styles.toString();
	}

/***/ },

/***/ 463:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (namespace) {
	  return new Promise(function (resolve) {
	    __webpack_require__.e/* nsure */(2, function (require) {
	      if (namespace) {
	        resolve(__webpack_require__(435)[namespace]);
	      } else {
	        resolve(__webpack_require__(435));
	      }
	    });
	  });
	}

/***/ },

/***/ 464:
/***/ function(module, exports) {

	module.exports = "<h1>The search for a new home...</h1>\r\nStuff about our move story, and what we're looking for in a host site."

/***/ },

/***/ 465:
/***/ function(module, exports) {

	module.exports = "<h1>Code of Conduct</h1>\r\nPress-friendly version of our code of conduct, calling out being a \"dry camp\""

/***/ },

/***/ 466:
/***/ function(module, exports) {

	module.exports = "<h1>Contact Us</h1>\r\n    <div>The best way to contact us is by phone, which we'll answer 24/7.  Our camp coordinator will answer emails within one day, and you can stop by to tour the camp, drop off donations, or come by and chat any day between 9am and 8pm.\r\n    </div>\r\n    <div class=\"TwoColumn\">\r\n      <h2>Phone: <a href=\"tel://15555555555\" title=\"phone\">(555)555-5555</a></h2>\r\n      <h2>Email: CampWackyPants@gmail.com</h2>\r\n    </div>\r\n    <div>\r\n      <h3>Current Location:</h3>\r\n      <iframe src=\"//www.google.com/maps/embed/v1/place?q=9637+Myers+Way+S,+Seattle,+WA+98108\r\n      &zoom=13\r\n      &key=AIzaSyBZEG39Vyr_iXFbKLFXSUONs8EFdesUsGc\">\r\n      </iframe>\r\n    </div>"

/***/ },

/***/ 467:
/***/ function(module, exports) {

	module.exports = "<div id='indexContent'>\r\n            <div class=\"Content\">\r\n                <h1>Flowery message about us...</h1>\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at laoreet enim. Nam fermentum venenatis pharetra. Integer commodo vitae ipsum at rhoncus. Etiam luctus mi sed scelerisque pharetra. Sed sapien nisi, posuere eu sapien vitae, finibus placerat ex. Maecenas venenatis, orci pretium fermentum luctus, ex odio varius velit, eu vehicula nisl ligula sed magna. Nullam cursus placerat eros ut lacinia. Nullam consequat felis vitae euismod sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec gravida tellus eu est tincidunt, in laoreet dolor viverra. Suspendisse non efficitur magna. Pellentesque eu venenatis diam. Cras faucibus nulla ut diam ornare, sed tempus turpis posuere.\r\n                <br>\r\n                Donec lacinia vestibulum magna. Vivamus in hendrerit ante, et dignissim odio. Ut in est vitae nulla bibendum iaculis at at eros. Proin leo leo, varius id ante sit amet, interdum sodales purus. Nullam ligula odio, convallis vel molestie vel, porta eleifend lectus. Nunc vulputate risus eget orci aliquet viverra. Aenean et magna semper urna pharetra faucibus. Cras maximus placerat lectus nec placerat. Nulla non vulputate metus. Nulla facilisi. Sed tincidunt felis congue finibus facilisis. Etiam laoreet eget elit nec consequat. Pellentesque iaculis sem ex, ornare rhoncus ligula commodo et. Cras efficitur libero id leo porttitor, quis posuere felis euismod. Nulla quis tortor elit. Nulla tincidunt hendrerit convallis.\r\n                </p>\r\n            </div>\r\n            \r\n</div>"

/***/ },

/***/ 468:
/***/ function(module, exports) {

	module.exports = "<h1>Help from our friends...</h1>\r\n<p>We appreciate all the help we receive from our friends and neighbors in the community.  Here is a comprehensive list of camp needs and wants.  Please give us a call if you have any questions about specifics.  Donations can be dropped off in person at our current location at 32 Wallaby Way, Seattle WA 98168.</p>\r\n\r\n<h2><a class=\"Alert\" [routerLink]=\"['/alert']\"><b>Urgent Need:</b> A New Location</a></h2>\r\n<div class=\"TwoFlex\">\r\n<needs-section class=\"Urgent\" title=\"High Priority Needs\" desc=\"Necessary for the camp to function\">\r\n    <needs-item title='Gasoline' desc='to run our generator' usage=\"3 gallons/day\"></needs-item>\r\n    <needs-item title=\"Water\" desc=\"for drinking, washing dishes, etc\" usage=\"5 gallons/day\"></needs-item> \r\n    <needs-item title=\"Ice\" desc=\"to keep cool during the summer\" usage=\"2 bags/day\"></needs-item>    \r\n</needs-section>\r\n<needs-section class=\"Moderate\" title=\"Moderate Needs\" desc=\"Things we're short on\">\r\n    <needs-item title=\"Paper Cups\" desc=\"for water and coffee\" usage=\"20/day\"></needs-item>\r\n    <needs-item title=\"Shipping Palettes\" desc=\"to build structures\"></needs-item>\r\n    <needs-item title=\"Plywood\" desc=\"for flooring\"></needs-item>\r\n</needs-section>\r\n<needs-section class=\"Basic\" title=\"Basic Needs\" desc=\"We're well stocked on these\">\r\n    <needs-item title=\"Propane\" desc=\"for cooking and heating water\" usage=\"1 tank/month\"></needs-item>\r\n    <needs-item title=\"Canned Foods\" desc=\"and other non-perishables\"></needs-item>\r\n    <needs-item title=\"Bread\" desc=\"sandwich, buns, etc\"></needs-item>\r\n</needs-section>\r\n\r\n<needs-section class=\"Wishful\" title=\"Wishlist\" desc=\"We'd love to have these\">\r\n</needs-section>\r\n</div>\r\n\r\n<ul class=\"MultiColumn\">\r\n    \r\n</ul>\r\n<h3>Bulk Items</h3>\r\n<div class=\"MultiColumn\">\r\n    <div class=\"ColumnItem\">\r\n    <b>Food</b>\r\n    <ul>\r\n        <li>Pre-cooked meals to feed 20</li>\r\n        <li>Non-perishable food items</li>\r\n        <li>Sandwich fixings, cheese, meats</li>\r\n        <li>Produce, fruits and salads</li>\r\n    </ul>\r\n    </div>\r\n\r\n    <div class=\"ColumnItem\">\r\n        <b>Kitchen Needs</b>\r\n        <ul>\r\n            <li>Paper plates, bowls and cups</li>\r\n            <li>Aluminum serving trays</li>\r\n            <li>Aluminum foil or plastic wrap</li>\r\n            <li>Re-usable storage containers</li>\r\n        </ul>\r\n    </div>\r\n\r\n    <div class=\"ColumnItem\">\r\n    <b>Toiletries</b>\r\n    <ul>\r\n        <li>Toilet paper</li>\r\n        <li>Toothpaste</li>\r\n        <li>Toothbrushes</li>\r\n        <li>Travel soaps and shampoos</li>\r\n        <li>Tampons and feminine napkins</li>\r\n    </ul>\r\n    </div>\r\n\r\n    <div class=\"ColumnItem\">\r\n    <b>Cleaning</b>\r\n    <ul>\r\n        <li>Paper Towels</li>\r\n        <li>Surface Cleaners</li>\r\n        <li>Dish Soap</li>\r\n        <li>Sanitizing Wipes</li>\r\n    </ul>\r\n    </div>\r\n\r\n    <div class=\"ColumnItem\">\r\n    <b>Repair</b>\r\n    <ul>\r\n        <li>Tarps</li>\r\n        <li>Wire</li>\r\n        <li>Twine</li>\r\n        <li>Tapes, Gorilla or duct</li>\r\n        <li>Nails</li>\r\n    </ul>\r\n    </div>\r\n\r\n    <div class=\"ColumnItem\">\r\n        <b>Clothing</b>\r\n        <ul>\r\n            <li>Adult sizes M-2XL</li>\r\n            <li>Toddler size 12-18mo</li>\r\n            <li>Socks</li>\r\n            <li>Shoes</li>\r\n            <li>Jackets</li>\r\n        </ul>\r\n    </div>\r\n</div>"

/***/ },

/***/ 469:
/***/ function(module, exports) {

	module.exports = "<section class=\"Container\">\r\n        <div class=\"Header\">\r\n            <div class=\"Title\"> \r\n                <h1>Camp Wacky Pants</h1>\r\n                <h2>(555) 555-5555</h2>\r\n            </div>\r\n            <div class=\"FBLink\">\r\n                <a href=\"https://www.facebook.com/groups/823968681070416/\" target=\"new\"><img src=\"/assets/images/FB-f-Logo__white_50.png\"></a>\r\n            </div>\r\n            <nav class=\"Nav\">\r\n                <a class=\"Alert\" [routerLink]=\"['/alert']\"><b>Urgent Need:</b> A New Location</a>\r\n                <div class=\"NavBar\">\r\n                    <a [routerLink]=\"['/']\">Home</a>\r\n                    <a [routerLink]=\"['/who']\">Who</a>\r\n                    <a [routerLink]=\"['/needs']\">Needs</a>\r\n                    <a [routerLink]=\"['/contact']\">Contact</a>\r\n                    <a [routerLink]=\"['/code']\">Code</a>\r\n                </div>\r\n            </nav>\r\n        \r\n        </div>\r\n        <div class=\"Main\">   \r\n            <router-outlet></router-outlet>\r\n        </div>\r\n</section>"

/***/ },

/***/ 470:
/***/ function(module, exports) {

	module.exports = "<h1>Who We Are</h1>\r\n    We are a self-governed camp, with each camper having a voice in how the camp is run.  We also have elected people from within the camp to spearhead specific areas of camp operations.\r\n<h2>Camp Officials</h2>   \r\n            <div class=\"TwoColumn\">\r\n                <div class=\"Profile\">\r\n                    <img src=\"assets/images/Portrait-1.jpg\">\r\n                    <h3>Camp Coordinator: Trina G.</h3>\r\n                    Profile Text Goes Here        \r\n                </div>\r\n                <div class=\"Profile\">\r\n                    <img src=\"assets/images/Portrait-1.jpg\">\r\n                    <h3>Camp Liason: David Y.</h3>\r\n                    Profile Text Goes Here\r\n                </div>\r\n            </div>\r\n            <div class=\"MultiColumn\">\r\n                <div class=\"ColumnItem\">\r\n                    <h3>Board of Directors</h3>\r\n                    <ul>\r\n                        <b>\r\n                        <li>Trina G.</li>\r\n                        <li>Chris B.</li>\r\n                        <li>Eric D.</li>\r\n                        <li>Hunnie T.</li>\r\n                        <li>Chris A.</li>\r\n                        </b>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"ColumnItem\">\r\n                    <h3>Other Positions</h3>\r\n                        <ul>\r\n                            <li><b>Bookkeeper:</b> Trina</li>\r\n                            <li><b>Treasurer:</b> Eric P.</li>\r\n                            <li><b>Kitchen Coordinator:</b> Hunnie T.</li>\r\n                            <li><b>Kitchen Coordinator:</b> Alisa C.</li>\r\n                            <li><b>Maintanence Master:</b> Eric D.</li>\r\n                        </ul>\r\n                </div>\r\n            </div>\r\n            \r\n                            "

/***/ },

/***/ 749:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(5);
	var of_1 = __webpack_require__(173);
	Observable_1.Observable.of = of_1.of;
	

/***/ },

/***/ 783:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/images/BGSplash.jpg?b07bd45fb63932412ef4";

/***/ },

/***/ 784:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/images/LogoBig.png?a6643da89613ab479320";

/***/ },

/***/ 785:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/images/logo.png?85410fe1747a132e370d";

/***/ }

});
//# sourceMappingURL=main.map