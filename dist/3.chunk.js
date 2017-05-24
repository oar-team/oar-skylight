webpackJsonp([3,12],{

/***/ 819:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_component__ = __webpack_require__(856);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_datatable__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5____ = __webpack_require__(855);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services___ = __webpack_require__(827);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return SearchModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SearchModule = (function () {
    function SearchModule() {
    }
    return SearchModule;
}());
SearchModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_4_angular2_datatable__["DataTableModule"], __WEBPACK_IMPORTED_MODULE_5____["a" /* SearchRoutingModule */]],
        providers: [__WEBPACK_IMPORTED_MODULE_6__shared_services___["a" /* SearchService */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_1__search_component__["a" /* SearchComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__search_component__["a" /* SearchComponent */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"]]
    })
], SearchModule);

//# sourceMappingURL=search.module.js.map

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

/***/ 855:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__search_component__ = __webpack_require__(856);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__search_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_module__ = __webpack_require__(819);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_routes__ = __webpack_require__(867);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__search_routes__["a"]; });
/**
 * This barrel file provides the export for the lazy loaded Jobs.
 */



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 856:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_oar_api_oar_api_service__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_search_search_service__ = __webpack_require__(826);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchComponent = (function () {
    function SearchComponent(apiService, router, http, searchService, route) {
        var _this = this;
        this.apiService = apiService;
        this.router = router;
        this.http = http;
        this.searchService = searchService;
        this.route = route;
        this.json = '';
        this.jobList = [];
        this.selectedValue = 'Id';
        this.options = ['Name', 'Id', 'Date'];
        this.route.params.subscribe(function (params) {
            console.log(params);
            _this.search = params['strSearch'];
        });
    }
    SearchComponent.prototype.searchRequestByName = function (name) {
        var _this = this;
        this.searchService.searchByName(name).subscribe(function (res) { return _this.jobList = res.items; }, function (err) { return _this.jobList = []; });
    };
    SearchComponent.prototype.searchSubmit = function () {
        switch (this.selectedValue) {
            case 'Id':
                this.gotoJob(this.search);
                break;
            case 'Name':
                this.searchRequestByName(this.search);
                break;
            case 'Date':
                this.searchRequestByName(this.search);
                break;
        }
    };
    SearchComponent.prototype.gotoJob = function (id) {
        this.router.navigate(['jobs/' + id]);
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'search-page',
        template: __webpack_require__(887),
        providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_oar_api_oar_api_service__["a" /* OarApiService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_oar_api_oar_api_service__["a" /* OarApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_oar_api_oar_api_service__["a" /* OarApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_search_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_search_search_service__["a" /* SearchService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _e || Object])
], SearchComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ 867:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(855);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: ':strSearch', component: __WEBPACK_IMPORTED_MODULE_1__index__["b" /* SearchComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__index__["b" /* SearchComponent */] },
];
var SearchRoutingModule = (function () {
    function SearchRoutingModule() {
    }
    return SearchRoutingModule;
}());
SearchRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"]]
    })
], SearchRoutingModule);

//# sourceMappingURL=search.routes.js.map

/***/ }),

/***/ 887:
/***/ (function(module, exports) {

module.exports = "<h1>Search</h1>\n\n\n<div class=\"row\">\n    <div class=\"col-md-12 form-inline\">\n\n        <select [(ngModel)]=\"selectedValue\" class=\"custom-select\">\n            <option *ngFor=\"let o of options\" [ngValue]=\"o\">{{o}}</option>\n        </select>\n        <input type=\"text\" class=\"form-control\" width=\"100%\" [(ngModel)]=\"search\" placeholder=\"Search\" />\n        <button (click)=\"searchSubmit()\" class=\"btn btn-default\">Submit</button>\n    </div>\n\n</div>\n\n<div class=\"row\">\n\n    <table class=\"table table-striped\" [mfData]=\"jobList\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"5\" *ngIf=\"jobList.length > 0 \">\n        <thead>\n            <tr>\n                <th style=\"width: 20%\">\n                    <mfDefaultSorter by=\"job_id\">ID</mfDefaultSorter>\n                </th>\n                <th style=\"width: 30%\">\n                    <mfDefaultSorter by=\"job_name\">Name</mfDefaultSorter>\n                </th>\n                <th style=\"width: 10%\">\n                    <mfDefaultSorter by=\"job_user\">Owner</mfDefaultSorter>\n                </th>\n                <th style=\"width: 20%\">\n                    <mfDefaultSorter by=\"state\">State</mfDefaultSorter>\n                </th>\n                <th style=\"width: 20%\"> More\n                </th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let item of mf.data\">\n                <td>{{ item.job_id }}</td>\n                <td>{{item.job_name}}</td>\n                <td>{{item.job_user}}</td>\n                <td>{{item.state}}</td>\n                <td><button class=\"btn btn-default\" (click)=\"gotoJob(item.job_id)\">More</button></td>\n\n\n            </tr>\n        </tbody>\n        <tfoot>\n            <tr>\n                <td colspan=\"4\">\n                    <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\n                </td>\n            </tr>\n        </tfoot>\n    </table>\n</div>"

/***/ })

});
//# sourceMappingURL=3.chunk.js.map