webpackJsonp([8,12],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__oar_api_service__ = __webpack_require__(305);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__oar_api_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_job__ = __webpack_require__(321);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__model_job__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_link__ = __webpack_require__(205);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_resource__ = __webpack_require__(322);
/* unused harmony namespace reexport */
/**
 * TODO
 */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_media_media_service__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__(156);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FmComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FmComponent = (function () {
    function FmComponent(media, activeModal) {
        this.media = media;
        this.activeModal = activeModal;
        // Item list for the current directory
        this.folderItems = [];
        // query for the datatable, use by data-filter.pipe
        this.filterQuery = '';
        this.uploadedFiles = [];
        this.uploadUrl = '';
        this.uri = '~/';
        this.getDirectory(this.uri);
    }
    /**
     *  Change the current directory given an URI
     */
    FmComponent.prototype.getDirectory = function (uri) {
        var _this = this;
        this.uri = uri;
        this.media.list(uri).subscribe(function (res) {
            var resBody = JSON.parse(res._body);
            _this.folderItems = resBody.items;
        });
        this.uriChange();
    };
    FmComponent.prototype.ngOnInit = function () {
        this.uriChange();
    };
    FmComponent.prototype.uriChange = function () {
        this.uploadUrl = this.media.getBaseUrl() + this.uri;
    };
    FmComponent.prototype.onClickItem = function (item) {
        // if item is a folder, change current directory
        if (item.type === 'd') {
            this.getDirectory(this.uri + item.name);
        }
        else {
            // If item is a file, we select the file
            this.selectedFile = item;
        }
    };
    FmComponent.prototype.reload = function () {
        this.getDirectory(this.uri);
    };
    /**
     * Use media service to delete a file
     * TODO : Display validation message before delete
     */
    FmComponent.prototype.deleteItem = function (item) {
        var _this = this;
        this.media.deleteMedia(this.generatePath(item)).subscribe(function (succes) { return _this.reload(); }, function (err) { return console.log(err); });
    };
    /**
     * Generate an URI for a given item in the current folder
     */
    FmComponent.prototype.generatePath = function (item) {
        if (this.uri.slice(-1) !== '/') {
            this.uri += '/';
        }
        var path = this.uri + item.name;
        return path;
    };
    /**
     * Emit an event with the URI of the selected File
     */
    FmComponent.prototype.selectFile = function (selectedFile) {
        this.activeModal.close(this.generatePath(selectedFile));
    };
    return FmComponent;
}());
FmComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-fm',
        template: __webpack_require__(552),
        styles: [__webpack_require__(482)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_media_media_service__["a" /* MediaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_services_media_media_service__["a" /* MediaService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["c" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["c" /* NgbActiveModal */]) === "function" && _b || Object])
], FmComponent);

var _a, _b;
//# sourceMappingURL=fm.component.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MediaService = (function () {
    function MediaService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].API_PROTOCOLE + '://' + __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].API + 'oarapi-priv/media/';
    }
    MediaService.prototype.getMedia = function (path) {
        var urlStd = this.baseUrl + '~/' + path;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'text/html');
        return this.http.get(urlStd, { headers: headers }).map(function (res) { return res; });
    };
    MediaService.prototype.list = function (path) {
        var url = this.baseUrl + 'ls/' + path;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(url, { headers: headers }).map(function (res) { return res; });
    };
    MediaService.prototype.deleteMedia = function (path) {
        var url = this.baseUrl + path;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(url, { headers: headers }).map(function (res) { return res; });
    };
    MediaService.prototype.getBaseUrl = function () {
        return this.baseUrl;
    };
    return MediaService;
}());
MediaService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], MediaService);

var _a;
//# sourceMappingURL=media.service.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Link; });
var Link = (function () {
    function Link() {
    }
    Link.prototype.deserialize = function (input) {
        this.rel = input.rel;
        this.api_href = input.href;
        this.title = input.title;
        this.href = '';
        return this;
    };
    Link.decode = function (json) {
        var jLink = Object.create(Link.prototype);
        return Object.assign(jLink, json, {});
    };
    return Link;
}());

//# sourceMappingURL=link.js.map

/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./dashboard/dashboard.module": [
		820,
		0
	],
	"./jobs/jobs.module.ts": [
		821,
		1
	],
	"./layout/layout.module": [
		822,
		2
	],
	"./login/login.module": [
		824,
		5
	],
	"./not-found/not-found.module": [
		825,
		4
	],
	"./resources/resources.module.ts": [
		823,
		6
	],
	"./search/search.module.ts": [
		819,
		3
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 298;


/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(84);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentification_service__ = __webpack_require__(83);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Import our authentication service

/**
 *   Authguard for logged user
 *
 *   __more info :__ https://angular.io/docs/ts/latest/guide/router.html#!#guards
 */
var AuthGuard = (function () {
    function AuthGuard(auth, router, route) {
        this.auth = auth;
        this.router = router;
        this.route = route;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        // If user is not logged in we'll send them to the login page 
        var bool = this.auth.getIsLoggedValue();
        if (!bool) {
            this.router.navigate(['login'], { relativeTo: this.route });
        }
        return bool;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__authentification_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentification_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _c || Object])
], AuthGuard);

var _a, _b, _c;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_authentification_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(84);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OarApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 *     Service for OAR API Access
 *     __More info about the API :__ http://oar.imag.fr/docs/latest/user/api.html
 *     You can change the protocole and API entry point in the enrivonment config file.
 *
 */
var OarApiService = (function () {
    function OarApiService(http, auth) {
        this.http = http;
        this.auth = auth;
        this.login = 'docker';
        this.mdp = 'docker';
        this.baseUrlOar = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].API_PROTOCOLE + '://' + __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].API + 'oarapi-priv/';
        this.urlResources = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].API_PROTOCOLE + '://' + __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].API + 'oarapi/' + 'resources.json';
        this.urlJobs = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].API_PROTOCOLE + '://' + __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].API + 'oarapi/' + 'jobs.json';
        this._urlMedia = this.baseUrlOar + 'media';
    }
    /**
       *     Get all current jobs
       *     __return format :__ JSON
       */
    OarApiService.prototype.getJobs = function () {
        var url = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].API_PROTOCOLE + '://' + __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].API + 'oarapi/' + 'jobs.json';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    /**
     * Return a JSON of given job by id
     */
    OarApiService.prototype.getJobsById = function (ids) {
        if (this.auth.getIsLoggedValue()) {
            console.log('user is logged');
            var headers = this.generateHeaders();
            return this.http.get(this.baseUrlOar + 'jobs.json?ids=' + ids.toString(), { headers: headers }).map(function (res) {
                if (res.status < 200 || res.status >= 300) {
                    console.log('res err');
                    throw new Error('This request has failed ' + res.status);
                }
                return res.json();
            });
        }
        else {
            console.log('Could not execute this request');
        }
    };
    /**
    *    Get a job by its id
    *    __return format :__ JSON
    */
    OarApiService.prototype.getJob = function (id) {
        var headers = this.generateHeaders();
        return this.http.get(this.baseUrlOar + 'jobs/' + id + '.json', { headers: headers }).map(function (res) { return res.json(); });
    };
    /**
     * Get the jobs of a given username
     */
    OarApiService.prototype.getUserJobs = function (username) {
        var headers = this.generateHeaders();
        return this.http.get(
        //    TODO : Parameters for states
        this.urlJobs + '?owner=' + username + '&state=Terminated,Running,Waiting', { headers: headers }).map(function (res) { return res.json(); });
    };
    /**
     *     Get all resources
     *     __return format :__ JSON
     */
    OarApiService.prototype.getResources = function () {
        return this.http.get(this.urlResources).map(function (res) { return res.json(); });
    };
    Object.defineProperty(OarApiService.prototype, "urlMedia", {
        /**
         * Getter for urlMedia
         * @returns {string}
         */
        get: function () {
            return this._urlMedia;
        },
        enumerable: true,
        configurable: true
    });
    OarApiService.prototype.postNewJob = function (resource, name, command, directory, property, type, reservation) {
        var job = {
            'resource': resource,
            'name': name,
            'command': command,
            'directory': directory,
            'property': property,
            'type': type,
            'reservation': reservation,
        };
        var headers = this.generateHeaders();
        return this.http.post(this.baseUrlOar + 'jobs', JSON.stringify(job), { headers: headers });
    };
    OarApiService.prototype.generateHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Authorization', 'Basic ' + btoa(this.auth.getUser().getUsername() + ':' + this.auth.getUser().getPassword()));
        headers.append('Content-Type', 'application/json');
        return headers;
    };
    return OarApiService;
}());
OarApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__auth_authentification_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__auth_authentification_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], OarApiService);

var _a, _b;
//# sourceMappingURL=oar-api.service.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment_prod__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_oar_api__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_immutable__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsStore; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 *     more about info about stores in Angular2 : https://dzone.com/articles/how-to-build-angular-2-apps-using-observable-data-1
 */
var JobsStore = (function () {
    function JobsStore(oarApiService) {
        // this.loadInitialData();
        var _this = this;
        this.oarApiService = oarApiService;
        this._jobs = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["BehaviorSubject"](__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_immutable__["List"])([]));
        __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].interval(__WEBPACK_IMPORTED_MODULE_0__environments_environment_prod__["a" /* environment */].POLLING)
            .mergeMap(function () { return _this.oarApiService.getJobs(); })
            .subscribe(function (json) {
            _this.initNewJobs(json);
            _this.updateJobs();
        });
    }
    /**
     * update jobs that are not terminated
     */
    JobsStore.prototype.updateJobs = function () {
        var _this = this;
        var jobIds = this._jobs.getValue()
            .filter(function (job) { return job.state != "Terminated" && job.state != "Error"; })
            .map(function (job) { return job.id; }).toArray();
        if (jobIds.length > 0) {
            this.oarApiService.getJobsById(jobIds).subscribe(function (json) {
                if (json.items.length > 0) {
                    json.items.forEach(function (jsonJob) {
                        var jobsInStore = _this._jobs.getValue();
                        if (jobsInStore.find(function (job) { return job.id == +jsonJob.id; }).state != jsonJob.state) {
                            _this.updateJob(jsonJob.id);
                        }
                        // let updatedJob: Job = new Job().deserialize(jsonJob);
                        // this.addJobWithJob(updatedJob, jobsInStore.toArray());
                    });
                }
            });
        }
    };
    JobsStore.prototype.updateJob = function (id) {
        var _this = this;
        this.oarApiService.getJob(id).subscribe(function (jsonJob) {
            var job = new __WEBPACK_IMPORTED_MODULE_2__services_oar_api__["b" /* Job */]().deserialize(jsonJob);
            _this.addJobWithJob(job, _this._jobs.getValue().toArray());
        });
    };
    JobsStore.prototype.initNewJobs = function (json) {
        var _this = this;
        // Update if there's something to update
        if (json.items.length > 0) {
            json.items.forEach(function (jsonJob) {
                var job = new __WEBPACK_IMPORTED_MODULE_2__services_oar_api__["b" /* Job */]().deserialize(jsonJob);
                if (!_this.containsJob(job.id.toString(), _this._jobs.getValue().toArray())) {
                    _this.addJobWithJob(job, _this._jobs.getValue().toArray());
                }
            });
        }
    };
    JobsStore.prototype.addJob = function (id) {
        var _this = this;
        var obs = this.oarApiService.getJob(id);
        obs.subscribe(function (json) { return _this.addJobWithJob(new __WEBPACK_IMPORTED_MODULE_2__services_oar_api__["b" /* Job */]().deserialize(json), _this._jobs.getValue().toArray()); }, function (error) { return console.log(error); });
        return obs;
    };
    /**
     * todo : return value ?
     */
    JobsStore.prototype.addJobWithJob = function (job, arr) {
        if (!this.containsJob(job.id.toString(), arr)) {
            this._jobs.next(this._jobs.getValue().push(job));
        }
        else {
            arr[arr.findIndex(function (jobArr) { return jobArr.id == job.id; })] = job;
            this._jobs.next(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_immutable__["List"])(arr));
        }
        return this._jobs;
    };
    Object.defineProperty(JobsStore.prototype, "jobs", {
        /**
         * Return the Job List as an Observable
         */
        get: function () {
            return this._jobs.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * return a Job given an id
     *
     * todo : if job doesn't exist, do a request
     */
    JobsStore.prototype.getJob = function (id) {
        if (this.containsJob(id, this._jobs.getValue().toArray())) {
            return this._jobs.getValue().find(function (job) { return job.id.toString() === id; });
        }
        else {
            console.log('else');
            var job = new __WEBPACK_IMPORTED_MODULE_2__services_oar_api__["b" /* Job */]();
            return job;
        }
    };
    /**
     * Check if a job exist in the List
     */
    JobsStore.prototype.containsJob = function (id, jobs) {
        return jobs.some(function (job) { return job.id.toString() === id; });
    };
    JobsStore.prototype.removeJob = function (job) {
        var jobs = this._jobs.getValue().toArray();
        if (this.containsJob(job.id.toString(), jobs)) {
            var jobIndex = jobs.indexOf(job);
            this._jobs.next(this._jobs.getValue().remove(jobIndex));
        }
    };
    return JobsStore;
}());
JobsStore = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_oar_api__["a" /* OarApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_oar_api__["a" /* OarApiService */]) === "function" && _a || Object])
], JobsStore);

var _a;
//# sourceMappingURL=jobs-store.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(username, password) {
        this.password = password;
        this.username = username;
    }
    User.prototype.getUsername = function () {
        return this.username;
    };
    User.prototype.getPassword = function () {
        return this.username;
    };
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_authentification_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_oar_api__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_user_config__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserConfigStore; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 *     more about stores in Angular2 : https://dzone.com/articles/how-to-build-angular-2-apps-using-observable-data-1
 */
var UserConfigStore = (function () {
    function UserConfigStore(oarApiService, auth, http) {
        var _this = this;
        this.oarApiService = oarApiService;
        this.auth = auth;
        this.http = http;
        this.urlConfig = '/~/.oar-skylight/config.json';
        this.urlMedia = this.oarApiService.urlMedia + this.urlConfig;
        this.config = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["BehaviorSubject"](new __WEBPACK_IMPORTED_MODULE_4__model_user_config__["a" /* UserConfig */]());
        this.loadConfig();
        this.config.subscribe(function (change) { return _this.saveConfig(change); });
    }
    // TODO : Save Config on window close
    UserConfigStore.prototype.saveConfig = function (config) {
        console.log(config);
        var blob = new Blob([JSON.stringify(config)]);
        console.log(blob);
        // Ajout de 'force' pour enregistré le fichier
        var urlMediaForce = this.oarApiService.urlMedia + '/force' + this.urlConfig;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/octet-stream');
        headers.append('Authorization', 'Basic ' + btoa(this.auth.getUser().getUsername() + ':' + this.auth.getUser().getPassword()));
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var obs = this.http.post(urlMediaForce, blob, options);
        obs.subscribe(function (val) { return console.log(val); }, function (err) { return console.log(err); });
        return obs;
    };
    /**
     * load config using the media api :
     * load ~/.config/oar-skylight.json
     */
    UserConfigStore.prototype.loadConfig = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Headers */]();
        headers.append('Authorization', 'Basic ' + btoa(this.auth.getUser().getUsername() + ':' + this.auth.getUser().getPassword()));
        var obs = this.http.get(this.urlMedia, { headers: headers }).subscribe(function (res) { return _this.setConfigFromString(res.text()); }, function (err) { return _this.saveConfig(new __WEBPACK_IMPORTED_MODULE_4__model_user_config__["a" /* UserConfig */]()); } // Create cofig file if not found
        );
        return obs;
    };
    /**
     *
     * @param str
     */
    UserConfigStore.prototype.setConfigFromString = function (str) {
        if (str) {
            var config = new __WEBPACK_IMPORTED_MODULE_4__model_user_config__["a" /* UserConfig */]().deserialize(JSON.parse(str));
            if (config) {
                this.config.next(config);
            }
        }
    };
    UserConfigStore.prototype.getConfigObs = function () {
        return this.config.asObservable();
    };
    UserConfigStore.prototype.getUserConfig = function () {
        return this.config.getValue();
    };
    UserConfigStore.prototype.addJobDetailsProperty = function (property) {
        this.config.next(this.getUserConfig().addJobDetailProperty(property));
    };
    UserConfigStore.prototype.unsetJobDetailsProperty = function (property) {
        var config = this.getUserConfig();
        this.config.next(config.unsetProperty(property));
    };
    return UserConfigStore;
}());
UserConfigStore = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_oar_api__["a" /* OarApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_oar_api__["a" /* OarApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_auth_authentification_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_auth_authentification_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _c || Object])
], UserConfigStore);

var _a, _b, _c;
//# sourceMappingURL=user-config-store.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__file_manager_fm_fm_component__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', loadChildren: './layout/layout.module#LayoutModule' },
    { path: 'fm', component: __WEBPACK_IMPORTED_MODULE_0__file_manager_fm_fm_component__["a" /* FmComponent */] },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    { path: '**', redirectTo: 'not-found' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(159);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(translate) {
        this.translate = translate;
        translate.addLangs(['en', 'fr', 'ur']);
        translate.setDefaultLang('en');
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr|ur/) ? browserLang : 'en');
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(550),
        styles: [__webpack_require__(480)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_auth_auth_guard_service__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__file_manager_fm_module__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_services_auth_authentification_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_stores_jobs_store__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_services_oar_api__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_stores_user_config_store__ = __webpack_require__(309);
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














// AoT requires an exported function for factories
function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, '/assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["a" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["b" /* TranslateLoader */],
                    useFactory: HttpLoaderFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]]
                }
            }),
            __WEBPACK_IMPORTED_MODULE_1__file_manager_fm_module__["a" /* FmModule */],
            __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__shared_services_auth_authentification_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_11__shared_stores_jobs_store__["a" /* JobsStore */], __WEBPACK_IMPORTED_MODULE_12__shared_services_oar_api__["a" /* OarApiService */], __WEBPACK_IMPORTED_MODULE_13__shared_stores_user_config_store__["a" /* UserConfigStore */], __WEBPACK_IMPORTED_MODULE_0__shared_services_auth_auth_guard_service__["a" /* AuthGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DataFilterPipe = (function () {
    function DataFilterPipe() {
    }
    DataFilterPipe.prototype.transform = function (array, query) {
        if (query) {
            return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](array, function (row) { return row.name.indexOf(query) > -1; });
        }
        return array;
    };
    return DataFilterPipe;
}());
DataFilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
        name: 'dataFilter'
    })
], DataFilterPipe);

//# sourceMappingURL=data-filter.pipe.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FmBreadcrumbComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FmBreadcrumbComponent = (function () {
    function FmBreadcrumbComponent() {
        /**
         * Redirect to a folder.
         * Call getDirectory from parent FmComponent
         */
        this.goTo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.elements = [];
    }
    FmBreadcrumbComponent.prototype.ngOnInit = function () {
    };
    FmBreadcrumbComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.elements = [];
        var arrSplit = this.uri.split('/');
        arrSplit.forEach(function (item) {
            var tempArray = _this.uri.split('/');
            var link = '';
            var index = arrSplit.indexOf(item);
            tempArray.length = index + 1;
            link = tempArray.join('/') + '/';
            if (item === '~') {
                _this.elements.push({ name: '~', link: '~/' });
            }
            else {
                if (item !== '') {
                    _this.elements.push({ name: item, link: link });
                }
            }
        });
    };
    FmBreadcrumbComponent.prototype.goto = function (link) {
        this.goTo.next(link);
        this.uri = link;
    };
    return FmBreadcrumbComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], FmBreadcrumbComponent.prototype, "uri", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], FmBreadcrumbComponent.prototype, "goTo", void 0);
FmBreadcrumbComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-fm-breadcrumb',
        template: __webpack_require__(551),
        styles: [__webpack_require__(481)]
    }),
    __metadata("design:paramtypes", [])
], FmBreadcrumbComponent);

//# sourceMappingURL=fm-breadcrumb.component.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ng_bootstrap_ng_bootstrap__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_filter_pipe__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_datatable_index__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_datatable_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_datatable_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_media_media_service__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__fm_fm_component__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__fm_breadcrumb_fm_breadcrumb_component__ = __webpack_require__(319);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FmModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var FmModule = (function () {
    function FmModule() {
    }
    return FmModule;
}());
FmModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3_angular2_datatable_index__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["FileUploadModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_8__fm_fm_component__["a" /* FmComponent */], __WEBPACK_IMPORTED_MODULE_9__fm_breadcrumb_fm_breadcrumb_component__["a" /* FmBreadcrumbComponent */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_8__fm_fm_component__["a" /* FmComponent */], __WEBPACK_IMPORTED_MODULE_9__fm_breadcrumb_fm_breadcrumb_component__["a" /* FmBreadcrumbComponent */], __WEBPACK_IMPORTED_MODULE_1__data_filter_pipe__["a" /* DataFilterPipe */]],
        providers: [__WEBPACK_IMPORTED_MODULE_4__shared_services_media_media_service__["a" /* MediaService */], __WEBPACK_IMPORTED_MODULE_0__ng_bootstrap_ng_bootstrap__["c" /* NgbActiveModal */]]
    })
], FmModule);

//# sourceMappingURL=fm.module.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__link__ = __webpack_require__(205);
/* unused harmony export JobEvent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Job; });

/**
* TODO : Description JobEvent
*/
var JobEvent = (function () {
    function JobEvent() {
    }
    JobEvent.prototype.deserialize = function (input) {
        this.date = input.date;
        this.description = input.description;
        this.eventId = input.event_id;
        this.jobId = input.job_id;
        this.toCheck = input.to_check;
        this.type = input.type;
        return this;
    };
    return JobEvent;
}());

/**
* TODO : Description Job
*/
var Job = (function () {
    function Job() {
        this.links = new Array();
        this.events = new Array();
    }
    Job.prototype.deserialize = function (input) {
        this.apiTimestamp = input.api_timestamp;
        this.arrayId = input.array_id;
        this.arrayIndex = input.array_index;
        this.command = input.command;
        this.cpusetName = input.cpuset_name;
        this.exitCode = input.exit_code;
        this.id = input.id;
        this.initialRequest = input.initial_request;
        this.message = input.message;
        this.name = input.name;
        this.owner = input.owner;
        this.project = input.project;
        this.properties = input.properties;
        this.queue = input.queue;
        this.reservation = input.reservation;
        this.resubmitJobId = input.resubmit_job_id;
        this.scheduledStart = input.scheduled_start;
        this.startTime = input.start_time;
        this.state = input.state;
        this.stderrFile = input.stderr_file;
        this.stdoutFile = input.stdout_file;
        this.stopTime = input.stop_time;
        this.submissionTime = input.submission_time;
        this.type = input.type;
        this.types = input.types;
        this.walltime = input.walltime;
        this.wantedResources = input.wanted_resources;
        // Link implementation for a Job
        for (var _i = 0, _a = input.links; _i < _a.length; _i++) {
            var element = _a[_i];
            var link = new __WEBPACK_IMPORTED_MODULE_0__link__["a" /* Link */]().deserialize(element);
            /*
            *  Since we don't know where to split the string ("/oar-priv/" can change)
            *  we split on "/jobs" to avoid trouble and then add "jobs" to form a link route that look like : jobs/1/nodes
            */
            var arrStr = link.api_href.split('/jobs');
            link.href = 'jobs' + arrStr[1];
            this.links.push(link);
        }
        if (input.events) {
            for (var _b = 0, _c = input.events; _b < _c.length; _b++) {
                var element = _c[_b];
                this.events.push(new JobEvent().deserialize(element));
            }
        }
        this.json = input;
        return this;
    };
    return Job;
}());

//# sourceMappingURL=job.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Resource */
var Resource = (function () {
    function Resource() {
    }
    return Resource;
}());

//# sourceMappingURL=resource.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserConfig; });
/**
 * Created by bouguerr on 16/02/17.
 */
/**
 * TODO : Description UserConfig
 */
var UserConfig = (function () {
    function UserConfig() {
        this._jobDetailProperties = [];
    }
    Object.defineProperty(UserConfig.prototype, "jobDetailProperties", {
        get: function () {
            return this._jobDetailProperties;
        },
        enumerable: true,
        configurable: true
    });
    UserConfig.prototype.deserialize = function (input) {
        this._jobDetailProperties = input._jobDetailProperties;
        return this;
    };
    UserConfig.prototype.addJobDetailProperty = function (property) {
        this.jobDetailProperties.push(property);
        return this;
    };
    UserConfig.prototype.unsetProperty = function (property) {
        var keyIndex = this.jobDetailProperties.indexOf(property);
        if (keyIndex >= 0) {
            this.jobDetailProperties.splice(keyIndex, 1);
        }
        return this;
    };
    return UserConfig;
}());

//# sourceMappingURL=user-config.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    API_PROTOCOLE: 'https',
    API: 'localhost:46668/',
    POLLING: 30000
};
//# sourceMappingURL=environment.prod.js.map

/***/ }),

/***/ 480:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(54)();
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 481:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(54)();
// imports


// module
exports.push([module.i, "li {\n  display: inline; }\n\nli a {\n  cursor: pointer;\n  text-decoration: underline; }\n\nul {\n  margin: 0 0 1em 0;\n  padding: 0 0 0 1em; }\n\n.fa {\n  padding: 5px;\n  margin-left: 7px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 482:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(54)();
// imports


// module
exports.push([module.i, ".pointer,\nbutton {\n  cursor: pointer; }\n\n.padding {\n  padding: 1em; }\n\ntbody button {\n  padding: 2px 7px; }\n\ntd {\n  padding: 5px 10px; }\n\ntd.type {\n  padding: 5px 1em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 550:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 551:
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-row\">\n    <i class=\"fa fa-folder-open-o\" aria-hidden=\"true\"></i>\n    <ul>\n        <li *ngFor=\"let el of elements\"> <a (click)=\"goto(el.link)\">{{ el.name }}</a> /</li>\n    </ul>\n</div>"

/***/ }),

/***/ 552:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h4 class=\"modal-title\">File Manager</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n<div class=\"modal-body\">\n    <h1></h1>\n\n    <app-fm-breadcrumb (goTo)=\"getDirectory($event)\" [uri]=\"uri\">\n    </app-fm-breadcrumb>\n\n    <table class=\"table table-striped\" [mfData]=\"folderItems | dataFilter : filterQuery\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"5\">\n        <thead>\n            <tr>\n                <th style=\"width: 5%\">\n                    <mfDefaultSorter by=\"type\">Type</mfDefaultSorter>\n                </th>\n                <th style=\"width: 65%\">\n                    <mfDefaultSorter by=\"name\">Name</mfDefaultSorter>\n                </th>\n                <th style=\"width: 10%\">\n                    <mfDefaultSorter by=\"mtime\">Last updated</mfDefaultSorter>\n                </th>\n                <th style=\"width: 10%\">\n                    <mfDefaultSorter by=\"size\">Size</mfDefaultSorter>\n                </th>\n                <th style=\"width: 10%\">\n                    Action\n                </th>\n            </tr>\n\n            <tr>\n                <th colspan=\"5\">\n                    Filter by name:\n                    <input class=\"form-control\" [(ngModel)]=\"filterQuery\" />\n                </th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngIf=\"mf.data.length == 0\">\n                <td colspan=\"5\">\n                    <p>There's nothing here ...</p>\n                </td>\n            </tr>\n            <tr *ngFor=\"let item of mf.data\" [class.table-active]=\"item === selectedFile\">\n                <td (click)=\"onClickItem(item)\" class=\"pointer type\">\n                    <i class=\"fa fa-folder-o\" aria-hidden=\"true\" *ngIf=\"item.type == 'd'\"></i>\n                    <i class=\"fa fa-file\" aria-hidden=\"true\" *ngIf=\"item.type == 'f'\"></i>\n                </td>\n                <td (click)=\"onClickItem(item)\" class=\"pointer\">{{item.name}}</td>\n                <td (click)=\"onClickItem(item)\" class=\"pointer\">{{item.mtime | date:'jms' }}</td>\n                <td (click)=\"onClickItem(item)\" class=\"pointer\">{{item.size}}<span *ngIf=\"item.size\"> ko</span></td>\n                <td>\n                    <button class=\"btn btn-danger\" (click)=\"deleteItem(item)\">\n                        <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\n                    </button>\n                </td>\n            </tr>\n        </tbody>\n        <tfoot>\n\n            <tr>\n                <td colspan=\"5\">\n                    <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    <button type=\"button\" class=\"btn btn-success\">Add to this Folder</button>\n                </td>\n                <td colspan=\"3\">\n                </td>\n                <td>\n                </td>\n            </tr>\n        </tfoot>\n    </table>\n</div>\n\n<div class=\"modal-footer\">\n\n    <button type=\"button\" class=\"btn\" [disabled]=\"!selectedFile\" (click)=\"selectFile(selectedFile)\">Select File</button>\n</div>"

/***/ }),

/***/ 816:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(299);


/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthenticationService = (function () {
    function AuthenticationService(_router, http) {
        this._router = _router;
        this.http = http;
        this.urlProtocole = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].API_PROTOCOLE + '://';
        this.urlWhoAmI = this.urlProtocole + __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].API + 'oarapi-priv/' + 'whoami.json';
        this.user = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__["BehaviorSubject"](new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]('', ''));
        this.isLogged = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__["BehaviorSubject"](false);
    }
    /**
     *  Getter for user
     */
    AuthenticationService.prototype.getUser = function () {
        return this.user.getValue();
    };
    AuthenticationService.prototype.getUserObservable = function () {
        return this.user;
    };
    /**
     * Setter for user
     */
    AuthenticationService.prototype.setUser = function (user) {
        this.user.next(user);
    };
    /**
     * Action of clicking in the login button
     */
    AuthenticationService.prototype.login = function (user) {
        this.setUser(user);
        this.requestWhoAmI();
    };
    /**
     * Get WhoAmI data and call isUserLogged
     */
    AuthenticationService.prototype.requestWhoAmI = function () {
        var _this = this;
        this.doRequestWhoAmI().subscribe(function (data) { return _this.isUserLogged(data); }, function (error) { return console.log(error); });
    };
    /**
     *  From WhoAmI Response, set isLogged
     *  If a user is responded, isLogged = true
     */
    AuthenticationService.prototype.isUserLogged = function (data) {
        console.log('isUserLogged');
        if (data.authenticated_user === this.getUser().getUsername()) {
            this.setIsLogged(true);
        }
        else {
            this.setIsLogged(false);
        }
    };
    AuthenticationService.prototype.setIsLogged = function (value) {
        this.isLogged.next(value);
        sessionStorage.setItem('isLogged', '' + value);
    };
    //  Getter for isLogged
    AuthenticationService.prototype.getIsLogged = function () {
        return this.isLogged;
    };
    /*
     *    Request the Api if the user is logged.
     *    Return isLogged. Subscribe to get the value
     */
    AuthenticationService.prototype.getIsLoggedWhoAmI = function () {
        this.requestWhoAmI();
        return this.isLogged;
    };
    //  Getter for isLogged value
    AuthenticationService.prototype.getIsLoggedValue = function () {
        var isLogged = false;
        if (this.isLogged.getValue()) {
            isLogged = this.isLogged.getValue();
        }
        else if (sessionStorage.getItem('isLogged') === 'true') {
            isLogged = true;
        }
        else if (sessionStorage.getItem('isLogged') === 'false') {
            isLogged = false;
        }
        return isLogged;
    };
    /** Request WhoAmI to the API. We check if we are correctly logged In
    * if not logged the authenticated user is an empty string ('')
    * Level of access: private
    * API doc: http://oar.imag.fr/docs/latest/user/api.html#get-whoami
    */
    AuthenticationService.prototype.doRequestWhoAmI = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* Headers */]();
        var user = this.user.getValue();
        headers.append('Authorization', 'Basic ' + btoa(user.getUsername() + ':' + user.getPassword()));
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.urlWhoAmI, {
            headers: headers
        }).map(function (res) { return res.json(); });
    };
    AuthenticationService.prototype.logOut = function (error) {
        console.log(error);
        console.log('Log out');
        this.isLogged.next(false);
        this.user.next(new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]('', ''));
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]) === "function" && _b || Object])
], AuthenticationService);

var _a, _b;
//# sourceMappingURL=authentification.service.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    API_PROTOCOLE: 'http',
    API: 'localhost:46668/',
    POLLING: 30000
};
//# sourceMappingURL=environment.js.map

/***/ })

},[816]);
//# sourceMappingURL=main.bundle.js.map