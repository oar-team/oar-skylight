webpackJsonp([6,12],{

/***/ 823:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resources_component__ = __webpack_require__(854);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_datatable_index__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_datatable_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_datatable_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3____ = __webpack_require__(853);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesModule", function() { return ResourcesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ResourcesModule = (function () {
    function ResourcesModule() {
    }
    return ResourcesModule;
}());
ResourcesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2_angular2_datatable_index__["DataTableModule"], __WEBPACK_IMPORTED_MODULE_3____["a" /* ResourcesRoutingModule */]],
        providers: [],
        declarations: [__WEBPACK_IMPORTED_MODULE_1__resources_component__["a" /* ResourcesComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__resources_component__["a" /* ResourcesComponent */]]
    })
], ResourcesModule);

//# sourceMappingURL=resources.module.js.map

/***/ }),

/***/ 853:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resources_component__ = __webpack_require__(854);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__resources_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resources_routes__ = __webpack_require__(866);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__resources_routes__["a"]; });
/**
 * This barrel file provides the export for the lazy loaded Jobs.
 */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 854:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_oar_api_oar_api_service__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourcesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResourcesComponent = (function () {
    function ResourcesComponent(apiService, router) {
        this.apiService = apiService;
        this.router = router;
    }
    ResourcesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getResources().subscribe(function (data) { return _this.loadResources(data); }, function (error) { return console.log(error); });
    };
    ResourcesComponent.prototype.loadResources = function (json) {
        this.data = json.items;
    };
    return ResourcesComponent;
}());
ResourcesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'resources-page',
        template: __webpack_require__(886),
        providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_oar_api_oar_api_service__["a" /* OarApiService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_oar_api_oar_api_service__["a" /* OarApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_oar_api_oar_api_service__["a" /* OarApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object])
], ResourcesComponent);

var _a, _b;
//# sourceMappingURL=resources.component.js.map

/***/ }),

/***/ 866:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2____ = __webpack_require__(853);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourcesRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2____["b" /* ResourcesComponent */] },
];
var ResourcesRoutingModule = (function () {
    function ResourcesRoutingModule() {
    }
    return ResourcesRoutingModule;
}());
ResourcesRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"]]
    })
], ResourcesRoutingModule);

//# sourceMappingURL=resources.routes.js.map

/***/ }),

/***/ 886:
/***/ (function(module, exports) {

module.exports = "<h1>Resources</h1>\n<!--\n<div class=\"list-group\">\n    <a *ngFor=\"let job of jobs\" href=\"#\" class=\"list-group-item\" >{{job.id}} - {{job.owner}}</a>\n</div>-->\n\n<table class=\"table table-striped\" [mfData]=\"data\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"25\">\n    <thead>\n    <tr>\n        <th style=\"width: 10%\">\n            <mfDefaultSorter by=\"id\">ID</mfDefaultSorter>\n        </th>\n        <th style=\"width: 10%\">\n            <mfDefaultSorter by=\"stopTime\">available_upto</mfDefaultSorter>\n        </th>\n        <th style=\"width: 10%\">\n            <mfDefaultSorter by=\"owner\">state</mfDefaultSorter>\n        </th>\n        <th style=\"width: 30%\">\n            <mfDefaultSorter by=\"message\">network_address</mfDefaultSorter>\n        </th>     \n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let item of mf.data\">\n        <td >{{item.id}}</td>\n        <td>{{item.available_upto | date:'medium'}}</td>\n        <td>{{item.state}}</td>\n        <td>{{item.network_address}}</td>\n    </tr>\n    </tbody>\n    <tfoot>\n    <tr>\n        <td colspan=\"4\">\n            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\n        </td>\n    </tr>\n    </tfoot>\n</table>"

/***/ })

});
//# sourceMappingURL=6.chunk.js.map