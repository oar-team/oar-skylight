webpackJsonp([1,12],{

/***/ 821:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jobs_component_jobs_component__ = __webpack_require__(849);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__job_details_component_job_details_component__ = __webpack_require__(848);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_datatable_index__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_datatable_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_datatable_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_pipes_keys_pipe__ = __webpack_require__(870);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_auth_auth_guard_service__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__jobs_routes__ = __webpack_require__(850);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared__ = __webpack_require__(831);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11____ = __webpack_require__(847);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsModule", function() { return JobsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// Add the AuthGuard service





var JobsModule = (function () {
    function JobsModule() {
    }
    return JobsModule;
}());
JobsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_5_angular2_datatable_index__["DataTableModule"], __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["a" /* NgbDropdownModule */], __WEBPACK_IMPORTED_MODULE_9__jobs_routes__["a" /* JobsRoutingModule */], __WEBPACK_IMPORTED_MODULE_10__shared__["a" /* PageHeaderModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"]],
        providers: [__WEBPACK_IMPORTED_MODULE_7__shared_services_auth_auth_guard_service__["a" /* AuthGuard */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__jobs_component_jobs_component__["a" /* JobsComponent */], __WEBPACK_IMPORTED_MODULE_11____["a" /* NewJobFormComponent */], __WEBPACK_IMPORTED_MODULE_4__job_details_component_job_details_component__["a" /* JobDetails */], __WEBPACK_IMPORTED_MODULE_6__shared_pipes_keys_pipe__["a" /* KeysPipe */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__jobs_component_jobs_component__["a" /* JobsComponent */], __WEBPACK_IMPORTED_MODULE_4__job_details_component_job_details_component__["a" /* JobDetails */], __WEBPACK_IMPORTED_MODULE_11____["a" /* NewJobFormComponent */]]
    })
], JobsModule);

//# sourceMappingURL=jobs.module.js.map

/***/ }),

/***/ 826:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(84);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
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
 * For the research, we use the select_all?query functionnality (NOT STABLE).
 * The return format is the database format, therefore we cannot use the job model.
 */
var SearchService = (function () {
    function SearchService(http) {
        this.http = http;
        this.baseUrlSearch = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API_PROTOCOLE + '://' + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].API + 'oarapi-priv/select_all.json';
    }
    /**
     * Build the URL base on a given query
     * if limit isn't defined, we set it to 1000
     */
    SearchService.prototype.buildUrl = function (query, limit) {
        // TODO : Add limit to App config
        if (!limit) {
            limit = 1000;
        }
        return this.baseUrlSearch + '?limit=' + limit + '&query=' + encodeURI(query);
    };
    /**
     * Execute the search request
     */
    SearchService.prototype.request = function (url) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'text/html');
        console.log('req function');
        return this.http.get(url, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    SearchService.prototype.searchByName = function (name) {
        name = name.toLowerCase();
        // GROUPE BY because of count(*) request being also execute
        //let req = `FROM jobs WHERE job_user='docker' GROUP BY job_id ORDER BY job_id DESC`;
        var query = "FROM jobs WHERE lower(job_name) LIKE '%" + name + "%' GROUP BY job_id ORDER BY job_id DESC";
        var url = this.buildUrl(query);
        return this.request(url);
    };
    return SearchService;
}());
SearchService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], SearchService);

var _a;
//# sourceMappingURL=search.service.js.map

/***/ }),

/***/ 827:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__oar_api__ = __webpack_require__(107);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_search_service__ = __webpack_require__(826);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__search_search_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_guard_service__ = __webpack_require__(304);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_authentification_service__ = __webpack_require__(83);
/* unused harmony namespace reexport */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 828:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_authentification_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(_auth, router) {
        var _this = this;
        this._auth = _auth;
        this.router = router;
        this.searchInput = '';
        this._auth.getUserObservable().subscribe(function (user) { return _this.user = user; });
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.toggleSidebar = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle('push-right');
    };
    HeaderComponent.prototype.rltAndLtr = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle('rtl');
    };
    /**
     * Should always return false (else page is reloaded)
     * @param form
     * @returns {boolean}
     */
    HeaderComponent.prototype.search = function () {
        this.router.navigate(['search', this.searchInput]);
        return false;
    };
    HeaderComponent.prototype.login = function () {
        this.router.navigate(['login']);
    };
    HeaderComponent.prototype.logout = function () {
        this._auth.logOut(['logout']);
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(842),
        styles: [__webpack_require__(838)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_authentification_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_authentification_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object])
], HeaderComponent);

var _a, _b;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 829:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_header_component__ = __webpack_require__(828);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__header_header_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__ = __webpack_require__(830);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 830:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_authentification_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = (function () {
    function SidebarComponent(auth) {
        var _this = this;
        this.auth = auth;
        this.isActive = false;
        this.showMenu = '';
        this.auth.getUserObservable().subscribe(function (user) { return _this.user = user; });
    }
    SidebarComponent.prototype.eventCalled = function () {
        this.isActive = !this.isActive;
    };
    SidebarComponent.prototype.addExpandClass = function (element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__(843),
        styles: [__webpack_require__(839)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_auth_authentification_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_auth_authentification_service__["a" /* AuthenticationService */]) === "function" && _a || Object])
], SidebarComponent);

var _a;
//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ 831:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipes_shared_pipes_module__ = __webpack_require__(837);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__(829);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__components__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__components__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules__ = __webpack_require__(832);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__modules__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__modules__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__(827);
/* unused harmony namespace reexport */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 832:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stat_stat_module__ = __webpack_require__(836);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__stat_stat_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page_header_page_header_module__ = __webpack_require__(834);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__page_header_page_header_module__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 833:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageHeaderComponent = (function () {
    function PageHeaderComponent() {
    }
    return PageHeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], PageHeaderComponent.prototype, "heading", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], PageHeaderComponent.prototype, "icon", void 0);
PageHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-page-header',
        template: __webpack_require__(844),
        styles: [__webpack_require__(840)]
    })
], PageHeaderComponent);

//# sourceMappingURL=page-header.component.js.map

/***/ }),

/***/ 834:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_header_component__ = __webpack_require__(833);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageHeaderModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PageHeaderModule = (function () {
    function PageHeaderModule() {
    }
    return PageHeaderModule;
}());
PageHeaderModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__page_header_component__["a" /* PageHeaderComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__page_header_component__["a" /* PageHeaderComponent */]]
    })
], PageHeaderModule);

//# sourceMappingURL=page-header.module.js.map

/***/ }),

/***/ 835:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatComponent = (function () {
    function StatComponent() {
        this.event = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    StatComponent.prototype.ngOnInit = function () { };
    return StatComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], StatComponent.prototype, "bgClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], StatComponent.prototype, "icon", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], StatComponent.prototype, "count", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], StatComponent.prototype, "label", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], StatComponent.prototype, "data", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], StatComponent.prototype, "event", void 0);
StatComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-stat',
        template: __webpack_require__(845),
        styles: [__webpack_require__(841)]
    }),
    __metadata("design:paramtypes", [])
], StatComponent);

var _a;
//# sourceMappingURL=stat.component.js.map

/***/ }),

/***/ 836:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stat_component__ = __webpack_require__(835);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StatModule = (function () {
    function StatModule() {
    }
    return StatModule;
}());
StatModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__stat_component__["a" /* StatComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__stat_component__["a" /* StatComponent */]]
    })
], StatModule);

//# sourceMappingURL=stat.module.js.map

/***/ }),

/***/ 837:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(3);
/* unused harmony export SharedPipesModule */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SharedPipesModule = (function () {
    function SharedPipesModule() {
    }
    return SharedPipesModule;
}());
SharedPipesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        declarations: []
    })
], SharedPipesModule);

//# sourceMappingURL=shared-pipes.module.js.map

/***/ }),

/***/ 838:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(54)();
// imports


// module
exports.push([module.i, ".topnav {\n  border-radius: 0;\n  background-color: #222;\n  padding: 6px;\n  z-index: 2; }\n  .topnav .text-center {\n    text-align: center;\n    padding-left: 0;\n    cursor: pointer; }\n  .topnav .top-right-nav .buy-now a {\n    color: #999; }\n  .topnav .top-right-nav .dropdown-menu {\n    top: 40px;\n    right: -5px;\n    left: auto; }\n    .topnav .top-right-nav .dropdown-menu .message-preview .media .media-body .media-heading {\n      font-size: 14px;\n      font-weight: bold;\n      margin-bottom: 0; }\n    .topnav .top-right-nav .dropdown-menu .message-preview .media .media-body p {\n      margin: 0; }\n    .topnav .top-right-nav .dropdown-menu .message-preview .media .media-body p.last {\n      font-size: 13px;\n      margin-bottom: 0; }\n    .topnav .top-right-nav .dropdown-menu hr {\n      margin-top: 1px;\n      margin-bottom: 4px; }\n\n.messages {\n  width: 300px; }\n  .messages .media {\n    border-bottom: 1px solid #DDD;\n    padding: 5px 10px; }\n    .messages .media:last-child {\n      border-bottom: none; }\n  .messages .media-body h5 {\n    font-size: 13px;\n    font-weight: 600; }\n  .messages .media-body .small {\n    margin: 0; }\n  .messages .media-body .last {\n    font-size: 12px;\n    margin: 0; }\n\n.header .navbar {\n  background: #222 !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 839:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(54)();
// imports


// module
exports.push([module.i, ".sidebar {\n  border-radius: 0;\n  position: fixed;\n  z-index: 1000;\n  top: 55px;\n  left: 235px;\n  width: 235px;\n  margin-left: -235px;\n  border: none;\n  border-radius: 0;\n  overflow-y: auto;\n  background-color: #222;\n  bottom: 0;\n  overflow-x: hidden;\n  padding-bottom: 40px;\n  transition: all 0.2s ease-in-out; }\n  .sidebar .list-group a.list-group-item {\n    background: #222;\n    border: 0;\n    border-radius: 0;\n    color: #999;\n    text-decoration: none; }\n  .sidebar .list-group a:hover {\n    background: #151515;\n    color: #fff; }\n  .sidebar .list-group a.router-link-active {\n    background: #151515;\n    color: #fff; }\n  .sidebar .sidebar-dropdown *:focus {\n    border-radius: none;\n    border: none; }\n  .sidebar .sidebar-dropdown .panel-title {\n    font-size: 1rem;\n    height: 50px;\n    margin-bottom: 0; }\n    .sidebar .sidebar-dropdown .panel-title a {\n      color: #999;\n      text-decoration: none;\n      font-weight: 400;\n      background: #222; }\n      .sidebar .sidebar-dropdown .panel-title a span {\n        position: relative;\n        display: block;\n        padding: .75rem 1.5rem;\n        padding-top: 1rem; }\n    .sidebar .sidebar-dropdown .panel-title a:hover, .sidebar .sidebar-dropdown .panel-title a:focus {\n      color: #fff;\n      outline: none;\n      outline-offset: -2px; }\n  .sidebar .sidebar-dropdown .panel-title:hover {\n    background: #151515; }\n  .sidebar .sidebar-dropdown .panel-collapse {\n    border-radious: 0;\n    border: none; }\n    .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item {\n      border-radius: 0;\n      background-color: #222;\n      border: 0 solid transparent; }\n      .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a {\n        color: #999; }\n      .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a:hover {\n        color: #FFF; }\n    .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item:hover {\n      background: #151515; }\n\n.nested-menu .list-group-item {\n  cursor: pointer; }\n\n.nested-menu .nested {\n  list-style-type: none; }\n\n.nested-menu ul.submenu {\n  display: none;\n  height: 0; }\n\n.nested-menu .expand ul.submenu {\n  display: block;\n  list-style-type: none;\n  height: auto; }\n  .nested-menu .expand ul.submenu li a {\n    color: #FFF;\n    padding: 10px;\n    display: block; }\n\n@media screen and (max-width: 992px) {\n  .sidebar {\n    top: 54px;\n    left: 0px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 840:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(54)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 841:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(54)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 842:
/***/ (function(module, exports) {

module.exports = "<div class=\"pos-f-t fixed-top header\">\n    <nav class=\"navbar navbar-inverse bg-inverse navbar-toggleable-md\">\n        <button class=\"navbar-toggler navbar-toggler-right\" (click)=\"toggleSidebar()\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"#\">Oar Skylight</a>\n        <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo02\">\n\n\n            <form (ngSubmit)=\"search()\" class=\"form-inline my-2 my-lg-0\" *ngIf=\"user.username\">\n                <input class=\"form-control\" type=\"search\" placeholder=\"Search\" id=\"navbar-search-input\" name=\"searchInput\" [(ngModel)]=\"searchInput\">\n            </form>\n\n            <!--\n            <form class=\"form-inline my-2 my-lg-0\">\n                <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">\n            </form>\n            -->\n            <ul class=\"navbar-nav ml-auto mt-2 mt-md-0\">\n\n                <li class=\"nav-item dropdown\" ngbDropdown *ngIf=\"user.username\">\n                    <a href=\"javascript:void(0)\" class=\"nav-link\" ngbDropdownToggle>\n                        <i class=\"fa fa-bell\"></i> <b class=\"caret\"></b><span class=\"sr-only\">(current)</span>\n                    </a>\n                    <ul class=\"dropdown-menu dropdown-menu-right\">\n                        <a href=\"javascript:void(0)\" class=\"dropdown-item\">Pending Task <span class=\"badge badge-info\">6</span></a>\n                        <a href=\"javascript:void(0)\" class=\"dropdown-item\">In queue <span class=\"badge badge-info\"> 13</span></a>\n                        <a href=\"javascript:void(0)\" class=\"dropdown-item\">Mail <span class=\"badge badge-info\"> 45</span></a>\n                        <li class=\"dropdown-divider\"></li>\n                        <a href=\"javascript:void(0)\" class=\"dropdown-item\">View All</a>\n                    </ul>\n                </li>\n                <li class=\"nav-item dropdown\" ngbDropdown *ngIf=\"user.username\">\n                    <a href=\"javascript:void(0)\" class=\"nav-link\" ngbDropdownToggle>\n                        <i class=\"fa fa-user\"></i> {{ user.username }}<b class=\"caret\"></b>\n                    </a>\n                    <div class=\"dropdown-menu dropdown-menu-right\">\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\"><i class=\"fa fa-fw fa-gear\"></i> Settings</a>\n                        <a class=\"dropdown-item\" (click)=\"logout()\"><i class=\"fa fa-fw fa-power-off\"></i> Log Out</a>\n                    </div>\n                </li>\n                <li class=\"nav-item\" *ngIf=\"! user.username\">\n                    <button (click)=\"login()\" class=\"btn btn-success\">Login</button>\n                </li> &nbsp;\n            </ul>\n        </div>\n    </nav>\n</div>"

/***/ }),

/***/ 843:
/***/ (function(module, exports) {

module.exports = "<nav class=\"sidebar\" [ngClass]=\"{sidebarPushRight: isActive}\">\n    <ul class=\"list-group\">\n        <a routerLink=\"/dashboard\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-dashboard\"></i>&nbsp;dashboard\n        </a>\n        <a [routerLink]=\"['/jobs']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-tasks\"></i> &nbsp;Jobs\n        </a>\n        <a [routerLink]=\"['/jobs/new']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\" *ngIf=\"user.username\">\n            <i class=\"fa fa-plus\"></i> &nbsp;New Job\n        </a>\n        <a [routerLink]=\"['/resources']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-th-list\"></i> &nbsp;Resources\n        </a>\n    </ul>\n</nav>"

/***/ }),

/***/ 844:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xl-12\">\n        <h2 class=\"page-header\">\n            {{heading}}\n        </h2>\n        <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\">\n                <i class=\"fa fa-dashboard\"></i> <a href=\"Javascript:void(0)\" [routerLink]=\"['/dashboard']\">Dashboard</a>\n            </li>\n            <li class=\"breadcrumb-item active\"><i class=\"fa {{icon}}\"></i> {{heading}}</li>\n        </ol>\n    </div>\n</div>"

/***/ }),

/***/ 845:
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-inverse {{bgClass}}\">\n    <div class=\"card-header\">\n        <div class=\"row\">\n            <div class=\"col col-xs-3\">\n                <i class=\"fa {{icon}} fa-5x\"></i>\n            </div>\n            <div class=\"col col-xs-9 text-right\">\n                <div class=\"d-block huge\">{{count}}</div>\n                <div class=\"d-block\">{{label}}</div>\n            </div>\n        </div>\n    </div>\n    <div class=\"card-footer\">\n        <span class=\"float-left\">View Details {{data}}</span>\n        <a href=\"javascript:void(0)\" class=\"float-right card-inverse\">\n            <span ><i class=\"fa fa-arrow-circle-right\"></i></span>\n        </a>\n    </div>\n</div>\n"

/***/ }),

/***/ 847:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__jobs_component_jobs_component__ = __webpack_require__(849);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__jobs_component_jobs_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__job_details_component_job_details_component__ = __webpack_require__(848);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__job_details_component_job_details_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jobs_routes__ = __webpack_require__(850);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__post_job_component_new_job_form_component__ = __webpack_require__(851);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__post_job_component_new_job_form_component__["a"]; });
/**
 * This barrel file provides the export for the lazy loaded Jobs.
 */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 848:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_media_media_service__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_stores_jobs_store__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_oar_api__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_stores_user_config_store__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobDetails; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var JobDetails = (function () {
    function JobDetails(route, router, apiService, media, jobStore, userConfig, location) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.apiService = apiService;
        this.media = media;
        this.jobStore = jobStore;
        this.userConfig = userConfig;
        this.location = location;
        this.messageButton = 'Display details';
        this.displayStd = '';
        this.job = new __WEBPACK_IMPORTED_MODULE_4__shared_services_oar_api__["b" /* Job */]();
        this.buttonState = 1;
        this.jobKeys = [];
        this.jobParametersToDisplay = [];
        this.userConfig.getConfigObs().subscribe(function (config) {
            _this.jobParametersToDisplay = config.jobDetailProperties;
            console.log(_this.jobParametersToDisplay);
        }, function (err) { return console.log(err); });
    }
    JobDetails.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = +params['id']; // (+) converts string 'id' to a number
            _this.id = id;
            _this.jobStore.jobs.subscribe(function (list) {
                if (list.find(function (job) { return job.id == id; })) {
                    _this.job = list.find(function (job) { return job.id == id; });
                    _this.jobKeys = Object.keys(_this.job.json);
                    _this.jobKeys.sort();
                }
                else {
                    _this.jobStore.addJob(id.toString());
                }
            });
        });
    };
    JobDetails.prototype.ngAfterViewInit = function () {
        //
    };
    JobDetails.prototype.showStdOut = function () {
        var _this = this;
        this.media.getMedia(this.job.stdoutFile).subscribe(function (res) {
            _this.displayStd = res._body;
        }, function (err) { return console.log(err); });
    };
    JobDetails.prototype.showStdErr = function () {
        var _this = this;
        this.media.getMedia(this.job.stderrFile).subscribe(function (res) {
            _this.displayStd = res._body;
        }, function (err) { return console.log(err); });
    };
    JobDetails.prototype.hideStd = function () {
        this.displayStd = undefined;
    };
    JobDetails.prototype.getDetails = function () {
        if (this.buttonState == 0) {
            this.buttonState = 1;
            this.messageButton = "Display Details";
            this.jobDetailsTable.nativeElement.style = "display:none;";
        }
        else {
            this.buttonState = 0;
            this.messageButton = "Hide Details";
            this.jobDetailsTable.nativeElement.style = "display:table;";
        }
    };
    JobDetails.prototype.onClickLink = function (link) {
        console.log('route : ' + link.href);
    };
    JobDetails.prototype.addPropertyToPref = function (property) {
        this.userConfig.addJobDetailsProperty(property);
    };
    JobDetails.prototype.goBack = function () {
        this.location.back();
    };
    JobDetails.prototype.unsetPropertyToPref = function (property) {
        this.userConfig.unsetJobDetailsProperty(property);
    };
    return JobDetails;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('jobDetailsTable'),
    __metadata("design:type", Object)
], JobDetails.prototype, "jobDetailsTable", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('code'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"]) === "function" && _a || Object)
], JobDetails.prototype, "codeElement", void 0);
JobDetails = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'job-details',
        template: __webpack_require__(882),
        providers: [__WEBPACK_IMPORTED_MODULE_4__shared_services_oar_api__["a" /* OarApiService */]],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_oar_api__["a" /* OarApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_oar_api__["a" /* OarApiService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_media_media_service__["a" /* MediaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_services_media_media_service__["a" /* MediaService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__shared_stores_jobs_store__["a" /* JobsStore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_stores_jobs_store__["a" /* JobsStore */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__shared_stores_user_config_store__["a" /* UserConfigStore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_stores_user_config_store__["a" /* UserConfigStore */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_common__["Location"]) === "function" && _h || Object])
], JobDetails);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=job-details.component.js.map

/***/ }),

/***/ 849:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_oar_api_oar_api_service__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_stores_jobs_store__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_auth_authentification_service__ = __webpack_require__(83);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JobsComponent = (function () {
    function JobsComponent(apiService, router, jobStore, AuthService) {
        var _this = this;
        this.apiService = apiService;
        this.router = router;
        this.jobStore = jobStore;
        this.AuthService = AuthService;
        this.jobStore.jobs.subscribe(function (jobs) { return _this.jobs = jobs.toArray(); }, function (err) { return console.log(err); });
        this.AuthService.getUserObservable().subscribe(function (user) { return _this.user = user; }, function (err) { return console.log(err); });
    }
    JobsComponent.prototype.onInit = function () {
    };
    JobsComponent.prototype.getJobs = function () {
        var _this = this;
        return this.jobStore.jobs.subscribe(function (jobList) { return _this.jobs = jobList.toArray(); });
    };
    // Charge un ensemble de jobs
    JobsComponent.prototype.loadJobs = function (data) {
        if (this.AuthService.getIsLogged()) {
            for (var _i = 0, _a = data.items; _i < _a.length; _i++) {
                var jsonJob = _a[_i];
                // let j:Job = new Job().deserialize(jsonJob);
                this.getJob(jsonJob.id);
            }
        }
        else {
            console.log('loadJobs not logged');
        }
    };
    /**
    *
    */
    JobsComponent.prototype.getJob = function (id) {
        this.jobStore.addJob(id);
    };
    JobsComponent.prototype.gotoJob = function (id) {
        this.router.navigate(['' + id]);
    };
    JobsComponent.prototype.hideJob = function (job) {
        this.jobStore.removeJob(job);
    };
    return JobsComponent;
}());
JobsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'jobs-page',
        template: __webpack_require__(883),
        providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_oar_api_oar_api_service__["a" /* OarApiService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_oar_api_oar_api_service__["a" /* OarApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_oar_api_oar_api_service__["a" /* OarApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_stores_jobs_store__["a" /* JobsStore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_stores_jobs_store__["a" /* JobsStore */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_auth_authentification_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_auth_authentification_service__["a" /* AuthenticationService */]) === "function" && _d || Object])
], JobsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=jobs.component.js.map

/***/ }),

/***/ 850:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(847);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_auth_guard_service__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__post_job_component_new_job_form_component__ = __webpack_require__(851);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__index__["b" /* JobsComponent */] },
    { path: 'new', component: __WEBPACK_IMPORTED_MODULE_4__post_job_component_new_job_form_component__["a" /* NewJobFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__shared_services_auth_auth_guard_service__["a" /* AuthGuard */]] },
    { path: ':id', component: __WEBPACK_IMPORTED_MODULE_0__index__["c" /* JobDetails */] }
];
var JobsRoutingModule = (function () {
    function JobsRoutingModule() {
    }
    return JobsRoutingModule;
}());
JobsRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"]]
    })
], JobsRoutingModule);

//# sourceMappingURL=jobs.routes.js.map

/***/ }),

/***/ 851:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__file_manager_fm_fm_component__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__JobFormTemplate__ = __webpack_require__(864);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_oar_api_oar_api_service__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_stores_jobs_store__ = __webpack_require__(306);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewJobFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NewJobFormComponent = (function () {
    function NewJobFormComponent(oarApi, router, jobStore, modalService) {
        this.oarApi = oarApi;
        this.router = router;
        this.jobStore = jobStore;
        this.modalService = modalService;
        this.jobTemplate = new __WEBPACK_IMPORTED_MODULE_3__JobFormTemplate__["a" /* JobFormTemplate */]();
    }
    /**
     * Submit the job from the Form
     * We use jobTemplate .getXXX() to format our request
     */
    NewJobFormComponent.prototype.submitNewJobForm = function () {
        var _this = this;
        var resource = this.jobTemplate.getResource();
        var name = this.jobTemplate.getName();
        var command = this.jobTemplate.getCommand();
        var directory = this.jobTemplate.getDirectory();
        var property = this.jobTemplate.getProperty();
        var type = this.jobTemplate.getType();
        var reservation = this.jobTemplate.getReservation();
        this.oarApi.postNewJob(resource, name, command, directory, property, type, reservation).subscribe(function (result) {
            var jobId = result.json().id;
            if (jobId) {
                _this.jobStore.addJob(result.json().id).subscribe(function () { return _this.redirect(result.json()); }, function (err) { return console.log(err); });
            }
        }, function (err) { return console.log(err); });
    };
    /**
     * Redirect to the job detail page
     * @param jsonResponse
     */
    NewJobFormComponent.prototype.redirect = function (jsonResponse) {
        console.log(jsonResponse);
        var jobId = jsonResponse.id;
        if (jobId) {
            this.router.navigate(['jobs/' + jobId]);
        }
    };
    NewJobFormComponent.prototype.demo = function () {
        var _this = this;
        var jobsToPost = [];
        var jobT = new __WEBPACK_IMPORTED_MODULE_3__JobFormTemplate__["a" /* JobFormTemplate */]();
        jobT.script = "/bin/sleep 5; \n        echo 'Hello World \n Job took 5s';\n        ";
        jobsToPost.push(jobT);
        for (var i = 0; i < 32; i++) {
            var jobT_1 = new __WEBPACK_IMPORTED_MODULE_3__JobFormTemplate__["a" /* JobFormTemplate */]();
            var randomTime = Math.floor(Math.random() * (150 - 5)) + 5;
            jobT_1.name = 'Demo job ' + i;
            jobT_1.script = '/bin/sleep ' + randomTime;
            jobsToPost.push(jobT_1);
        }
        jobsToPost.forEach(function (job) {
            _this.jobTemplate = job;
            _this.submitNewJobFormDemo();
        });
        this.router.navigate(['dashboard/jobs']);
    };
    NewJobFormComponent.prototype.submitNewJobFormDemo = function () {
        var _this = this;
        var resource = this.jobTemplate.getResource();
        var name = this.jobTemplate.getName();
        var command = this.jobTemplate.getCommand();
        var directory = this.jobTemplate.getDirectory();
        var property = this.jobTemplate.getProperty();
        var type = this.jobTemplate.getType();
        var reservation = this.jobTemplate.getReservation();
        this.oarApi.postNewJob(resource, name, command, directory, property, type, reservation).subscribe(function (result) {
            var jobId = result.json().id;
            if (jobId) {
                _this.jobStore.addJob(result.json().id).subscribe(
                //() => this.redirect(result.json()),
                function (err) { return console.log(err); });
            }
        }, function (err) { return console.log(err); });
    };
    NewJobFormComponent.prototype.openFm = function () {
        var _this = this;
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_0__file_manager_fm_fm_component__["a" /* FmComponent */], { size: 'lg' });
        modalRef.result.then(function (filePath) {
            _this.jobTemplate.script = filePath;
        })
            .catch(function (err) { return console.log(err); });
    };
    return NewJobFormComponent;
}());
NewJobFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'new-job-form',
        template: __webpack_require__(884)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_oar_api_oar_api_service__["a" /* OarApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_oar_api_oar_api_service__["a" /* OarApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__shared_stores_jobs_store__["a" /* JobsStore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_stores_jobs_store__["a" /* JobsStore */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _d || Object])
], NewJobFormComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=new-job-form.component.js.map

/***/ }),

/***/ 864:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobFormTemplate; });
var JobFormTemplate = (function () {
    function JobFormTemplate() {
        this.name = "test_job";
        this.nodes = 1;
        this.script = "/bin/sleep 300";
        this.walltime = "00:30";
        this.cpu = 1;
    }
    JobFormTemplate.prototype.getResource = function () {
        var str = "/nodes=" + this.nodes;
        str += "/cpu=" + this.cpu;
        str += ",walltime=" + this.walltime + ":00";
        return str;
    };
    JobFormTemplate.prototype.getName = function () {
        return this.name;
    };
    JobFormTemplate.prototype.getCommand = function () {
        return this.script;
    };
    JobFormTemplate.prototype.getDirectory = function () {
        return this.directory;
    };
    JobFormTemplate.prototype.getProperty = function () {
        return this.properties;
    };
    JobFormTemplate.prototype.getType = function () {
        return this.types;
    };
    JobFormTemplate.prototype.getReservation = function () {
        return this.reservationDates;
    };
    return JobFormTemplate;
}());

//# sourceMappingURL=JobFormTemplate.js.map

/***/ }),

/***/ 870:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Custom pipe that return a list of key for each element.
 *
 * __Usage :__
*
      *ngFor="let entry of object | keys"

          {{ entry.key }}
          {{ entry.value}}

 */
var KeysPipe = (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            keys.push({ key: key, value: value[key] });
        }
        return keys;
    };
    return KeysPipe;
}());
KeysPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'keys' })
], KeysPipe);

//# sourceMappingURL=keys-pipe.js.map

/***/ }),

/***/ 882:
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-default\" (click)=\"goBack()\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i> Go Back</button>\n\n<app-page-header [heading]=\"'Details'\" [icon]=\"'fa-th-list'\"></app-page-header>\n\n<h2>Job : {{id}} - Details </h2>\n<div class=\"row\" *ngIf=\"job\">\n    <div class=\"col-xl-4\">\n        <table class=\"table table-striped table-hover table-bordered\">\n            <tr>\n                <td>ID</td>\n                <td> {{ job.id }}</td>\n            </tr>\n            <tr>\n                <td>Owner</td>\n                <td> {{ job.owner }}</td>\n            </tr>\n            <tr>\n                <td>State</td>\n                <td> {{ job.state }}</td>\n            </tr>\n            <ng-container *ngIf=\"job.json\">\n                <tr *ngFor=\"let param of jobParametersToDisplay\">\n                    <td>{{ param }}</td>\n                    <td>{{ job.json[param] }}</td>\n                </tr>\n            </ng-container>\n        </table>\n    </div>\n    <div class=\"col-xl-4\">\n        <div class=\"btn-group-vertical\" role=\"group\" aria-label=\"...\">\n            <button type=\"button\" class=\"btn btn-lg btn-secondary\" *ngFor=\"let link of job.links\" (click)=\"onClickLink(link)\">\n        <span *ngIf=\"link.title\">{{ link.title }}</span>\n      </button>\n            <button *ngIf=\"!displayStd\" class=\"btn btn-lg btn-success\" (click)=\"showStdOut()\">\n        Show output\n      </button>\n            <button *ngIf=\"displayStd\" class=\"btn btn-lg btn-success\" (click)=\"hideStd()\">\n        Hide output\n      </button>\n            <!--<button *ngIf=\"!displayStd\" class=\"btn btn-lg btn-info\">\n        Show error\n      </button>-->\n        </div>\n    </div>\n</div>\n<div class=\"row\" [hidden]=\"!displayStd\">\n    <div class=\"col-md-8 offset-md-2\">\n\n        <pre>\n      <code [innerHTML]=\"displayStd\" highlight class=\"bash\">\n        \n      </code>\n    </pre>\n\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-xl-8 col-xs-12\">\n\n        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" (click)=\"getDetails()\" id=\"showDetailsButton\" title=\"Display this job properties\">{{ messageButton }}\n    </button>\n        <br> <br>\n        <table class=\"table table-striped table-hover table-bordered\" id=\"jobDetailsTable\" #jobDetailsTable style=\"display:none;\">\n            <tr *ngFor=\"let key of jobKeys\">\n                <td>{{ key }}</td>\n                <td>{{ job.json[key] }}</td>\n                <td>\n\n                    <div ngbDropdown class=\"d-inline-block\">\n                        <button class=\"btn btn-default\" id=\"dropdownMenu\" ngbDropdownToggle>Options</button>\n                        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu\">\n                            <a class=\"dropdown-item\" *ngIf=\"jobParametersToDisplay.indexOf(key) < 0\" (click)=\"addPropertyToPref(key)\" title=\"Add this property to the default job display\">\n                                <button class=\"dropdown-item\">Add parameter to favorite</button>\n                            </a>\n                            <a class=\"dropdown-item\" *ngIf=\"jobParametersToDisplay.indexOf(key) >= 0\" (click)=\"unsetPropertyToPref(key)\" title=\"Remove this property to the default job display\">\n                                <button class=\"dropdown-item\">Remove parameter from favorite</button>\n                            </a>\n                        </div>\n                    </div>\n                    <!--                \n                    <div class=\"btn-group\" ngbDropdownToggle>\n                        <button id=\"single-button\" type=\"button\" class=\"btn btn-default\">\n                          Options <span class=\"caret\"></span>\n                        </button>\n                        <ul role=\"menu\" aria-labelledby=\"single-button\">\n                            <li role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"addPropertyToPref(key)\" title=\"Add this property to the default job display\">Add parameter to favorite</a></li>\n                        </ul>\n                    </div>-->\n\n                </td>\n            </tr>\n        </table>\n\n    </div>\n\n</div>"

/***/ }),

/***/ 883:
/***/ (function(module, exports) {

module.exports = "<app-page-header [heading]=\"'Jobs'\" [icon]=\"'fa-tasks'\"></app-page-header>\n\n<table class=\"table table-striped\" [mfData]=\"jobs\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"25\">\n    <thead>\n        <tr>\n            <th style=\"width: 10%\">\n                <mfDefaultSorter by=\"id\">ID</mfDefaultSorter>\n            </th>\n            <th style=\"width: 10%\">\n                <mfDefaultSorter by=\"owner\">Owner</mfDefaultSorter>\n            </th>\n            <th style=\"width: 30%\">\n                <mfDefaultSorter by=\"message\">Message</mfDefaultSorter>\n            </th>\n            <th style=\"width: 10%\">\n                <mfDefaultSorter by=\"message\">Name</mfDefaultSorter>\n            </th>\n            <th style=\"width: 20%\">\n                <mfDefaultSorter by=\"state\">State</mfDefaultSorter>\n            </th>\n            <th style=\"width: 20%\">\n                Details\n            </th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let item of mf.data\">\n            <td>{{item.id}}</td>\n            <td>{{item.owner}}</td>\n            <td>{{item.message}}</td>\n            <td>{{item.name}}</td>\n            <td>{{item.state}}</td>\n            <td>\n                <span *ngIf=\"user.username \">\n\n                <a [routerLink]=\"['/jobs/' + item.id]\"><button class=\"btn btn-default\">More</button></a>\n                <button class=\"btn btn-default\" (click)=\"hideJob(item)\">Hide</button>\n                </span>\n            </td>\n        </tr>\n    </tbody>\n    <tfoot>\n        <tr>\n            <td colspan=\"4\">\n                <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\n            </td>\n\n        </tr>\n    </tfoot>\n</table>"

/***/ }),

/***/ 884:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <h1> New Job </h1>\n\n\n    <form #jobForm=\"ngForm\" (ngSubmit)=\"submitNewJobForm()\">\n\n        <div class=\"row\">\n            <!-- COL 1 -->\n            <div class=\"col-lg-6 col-xs-12\">\n\n                <div class=\"form-group\">\n\n                    <label for=\"inputRessourcesJobForm\">Nodes</label>\n                    <input type=\"number\" class=\"form-control\" id=\"inputRessourcesJobForm\" required [(ngModel)]=\"jobTemplate.nodes\" name=\"nodes\">\n                    <small class=\"form-text text-muted\">Number of nodes</small>\n                </div>\n\n                <div class=\"form-group\">\n\n                    <label for=\"inputJobNameJobForm\">Name</label>\n                    <input type=\"text\" class=\"form-control\" id=\"inputJobNameJobForm\" required [(ngModel)]=\"jobTemplate.name\" name=\"name\">\n\n                </div>\n\n\n                <div class=\"form-group\">\n\n                    <label for=\"inputRunJobForm\">Program to run</label>\n                    <div class=\"input-group\">\n\n                        <input type=\"text\" class=\"form-control\" id=\"inputRunJobForm\" [(ngModel)]=\"jobTemplate.script\" name=\"script\">\n                        <span class=\"input-group-btn\">\n                            <button class=\"btn btn-secondary\" type=\"button\" (click)=\"openFm()\"><i class=\"fa fa-folder-open\" aria-hidden=\"true\"></i></button>\n                        </span>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n\n                    <label for=\"inputTypesJobForm\">Types</label>\n                    <input type=\"text\" class=\"form-control\" id=\"inputTypesJobForm\" [(ngModel)]=\"jobTemplate.types\" name=\"types\">\n\n                </div>\n\n                <div class=\"form-group\">\n\n                    <label for=\"inputReservationDatesJobForm\">Reservation dates</label>\n                    <input type=\"text\" class=\"form-control\" id=\"inputReservationDatesJobForm\">\n\n                </div>\n\n\n            </div>\n\n            <!-- COL 2 -->\n            <div class=\"col-lg-6  col-xs-12\">\n\n                <div class=\"form-group\">\n\n                    <label for=\"inputPropertiesJobForm\">Properties</label>\n                    <input type=\"text\" class=\"form-control\" id=\"inputPropertiesJobForm\">\n\n                </div>\n\n                <div class=\"form-group\">\n\n                    <label for=\"inputCpuJobForm\">CPU</label>\n                    <input type=\"number\" class=\"form-control\" id=\"inputCpuJobForm\" required [(ngModel)]=\"jobTemplate.cpu\" name=\"cpu\">\n\n                </div>\n\n\n                <div class=\"form-group\">\n\n                    <label for=\"inputWalltimeJobForm\">Walltime</label>\n                    <input type=\"time\" class=\"form-control\" id=\"inputWalltimeJobForm\" name=\"time\" step=\"600\" required [(ngModel)]=\"jobTemplate.walltime\" name=\"walltime\">\n                    <small class=\"form-text text-muted\">hours : minutes</small>\n\n                </div>\n\n\n                <div class=\"form-group\">\n\n                    <label for=\"inputDirectoryJobForm\">Directory</label>\n                    <input type=\"text\" class=\"form-control\" id=\"inputDirectoryJobForm\">\n\n                </div>\n\n            </div>\n\n\n\n            <div class=\"col-lg-12 text-center\">\n\n                <div class=\"row\">\n\n                    <div class=\"col-lg-2 offset-lg-6\">\n\n                        <button type=\"submit\" class=\"btn btn-default\" [class.disabled]=\"!jobForm.valid\">Submit Job</button>\n\n                        <button type=\"button\" (click)=\"demo()\" class=\"btn btn-success\">Demo</button>\n                    </div>\n\n                </div>\n\n            </div>\n\n        </div>\n    </form>\n\n\n</div>"

/***/ })

});
//# sourceMappingURL=1.chunk.js.map