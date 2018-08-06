(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/alert/alert.component.html":
/*!********************************************!*\
  !*** ./src/app/alert/alert.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message?.length>0\" id=\"alert\"><p>{{message}}</p></div>"

/***/ }),

/***/ "./src/app/alert/alert.component.scss":
/*!********************************************!*\
  !*** ./src/app/alert/alert.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#alert {\n  position: absolute;\n  top: 60px;\n  background-color: #ffb516;\n  right: 20px;\n  color: white;\n  padding: 10px 40px; }\n  #alert p {\n    margin: 0; }\n"

/***/ }),

/***/ "./src/app/alert/alert.component.ts":
/*!******************************************!*\
  !*** ./src/app/alert/alert.component.ts ***!
  \******************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getMessage().subscribe(function (message) {
            _this.message = message;
        });
    };
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/alert/alert.component.html"),
            styles: [__webpack_require__(/*! ./alert.component.scss */ "./src/app/alert/alert.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<router-outlet></router-outlet>\r\n<app-alert></app-alert>\r\n<app-waiting></app-waiting>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _groups_groups_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./groups/groups.component */ "./src/app/groups/groups.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var src_app_services_ligowo_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/ligowo.service */ "./src/app/services/ligowo.service.ts");
/* harmony import */ var _group_group_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./group/group.component */ "./src/app/group/group.component.ts");
/* harmony import */ var _forfilter_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./forfilter.pipe */ "./src/app/forfilter.pipe.ts");
/* harmony import */ var _toDate_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./toDate.pipe */ "./src/app/toDate.pipe.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./alert/alert.component */ "./src/app/alert/alert.component.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _click_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./click-stop-propagation.directive */ "./src/app/click-stop-propagation.directive.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var src_app_services_auth_guard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/services/auth.guard */ "./src/app/services/auth.guard.ts");
/* harmony import */ var _waiting_waiting_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./waiting/waiting.component */ "./src/app/waiting/waiting.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"],
                _groups_groups_component__WEBPACK_IMPORTED_MODULE_10__["GroupsComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_11__["MainComponent"],
                _group_group_component__WEBPACK_IMPORTED_MODULE_13__["GroupComponent"],
                _forfilter_pipe__WEBPACK_IMPORTED_MODULE_14__["ForfilterPipe"],
                _toDate_pipe__WEBPACK_IMPORTED_MODULE_15__["ToDatePipe"],
                _alert_alert_component__WEBPACK_IMPORTED_MODULE_17__["AlertComponent"],
                _click_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_19__["ClickStopPropagationDirective"],
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_20__["LandingComponent"],
                _waiting_waiting_component__WEBPACK_IMPORTED_MODULE_22__["WaitingComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_23__["PageNotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_6__["appRoutes"]),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
            ],
            providers: [_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"], src_app_services_ligowo_service__WEBPACK_IMPORTED_MODULE_12__["LigowoService"], src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_18__["AlertService"], src_app_services_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var src_app_groups_groups_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/groups/groups.component */ "./src/app/groups/groups.component.ts");
/* harmony import */ var src_app_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _group_group_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./group/group.component */ "./src/app/group/group.component.ts");
/* harmony import */ var src_app_services_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.guard */ "./src/app/services/auth.guard.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _services_login_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/login.guard */ "./src/app/services/login.guard.ts");








var appRoutes = [
    { path: '', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_0__["LandingComponent"], canActivate: [_services_login_guard__WEBPACK_IMPORTED_MODULE_7__["LoginGuard"]] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_1__["RegisterComponent"], canActivate: [_services_login_guard__WEBPACK_IMPORTED_MODULE_7__["LoginGuard"]] },
    { path: 'main', component: src_app_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'groups' },
            { path: 'groups', component: src_app_groups_groups_component__WEBPACK_IMPORTED_MODULE_2__["GroupsComponent"], canActivate: [src_app_services_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
            { path: 'groups/:id', component: _group_group_component__WEBPACK_IMPORTED_MODULE_4__["GroupComponent"], canActivate: [src_app_services_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] }
        ]
    },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"] }
];


/***/ }),

/***/ "./src/app/click-stop-propagation.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/click-stop-propagation.directive.ts ***!
  \*****************************************************/
/*! exports provided: ClickStopPropagationDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickStopPropagationDirective", function() { return ClickStopPropagationDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClickStopPropagationDirective = /** @class */ (function () {
    function ClickStopPropagationDirective() {
    }
    ClickStopPropagationDirective.prototype.onClick = function (event) {
        event.stopPropagation();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ClickStopPropagationDirective.prototype, "onClick", null);
    ClickStopPropagationDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            // tslint:disable-next-line:directive-selector
            selector: '[click-stop-propagation]'
        })
    ], ClickStopPropagationDirective);
    return ClickStopPropagationDirective;
}());



/***/ }),

/***/ "./src/app/forfilter.pipe.ts":
/*!***********************************!*\
  !*** ./src/app/forfilter.pipe.ts ***!
  \***********************************/
/*! exports provided: ForfilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForfilterPipe", function() { return ForfilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ForfilterPipe = /** @class */ (function () {
    function ForfilterPipe() {
    }
    ForfilterPipe.prototype.transform = function (items, arg1, arg2) {
        if (!items || !arg1 || !arg2) {
            return items;
        }
        if (arg2 === 'own') {
            return items.filter(function (item) { return item.admin === arg1; });
        }
        else {
            return items.filter(function (item) { return item.admin !== arg1; });
        }
    };
    ForfilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'forfilter'
        })
    ], ForfilterPipe);
    return ForfilterPipe;
}());



/***/ }),

/***/ "./src/app/group/group.component.html":
/*!********************************************!*\
  !*** ./src/app/group/group.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"admin-panel-wrapper\" *ngIf=\"current_user==group?.admin\" [@myAwesomeAnimation]='adminPanel'>\r\n  <section id=\"admin-panel\">\r\n    <section class=\"admin-panel-element\">\r\n      <h4>Dodaj mecze<i class=\"fa fa-times\" [ngClass]=\"{'fa-cog':adminPanel=='hide', 'fa-times':adminPanel=='show'}\" (click)=\"showAdminPanel()\"></i></h4>\r\n      <form  id=\"newMatch\">\r\n        <div *ngFor=\"let newMatch of newMatches; let i = index;\" class=\"form-group\">\r\n          <input [(ngModel)]=\"newMatch.name\" name=\"newMatchName{{i}}\" placeholder=\"nazwa meczu\" required />\r\n          <input [(ngModel)]=\"newMatch.date\" name=\"newMatchDate{{i}}\" id=\"date\" type=\"date\" required />\r\n          <input [(ngModel)]=\"newMatch.time\" name=\"newMatchTime{{i}}\" id=\"time\" type=\"time\" required />\r\n        </div>\r\n        <button (click)=\"addMatch()\" >Dodaj mecz</button>\r\n      </form>\r\n      <button  class=\"confirm-admin\" (click)=\"sendMatches()\">DODAJ MECZE</button>\r\n    </section>\r\n    <section class=\"admin-panel-element match-group\">\r\n      <h4>Wprowadz wyniki</h4>\r\n      <p *ngIf=\"groupMatches?.length==0\">Brak zakończonych meczow</p>\r\n      <div class=\"match-panel\" *ngFor=\"let match of groupMatches\">\r\n        <div class=\"name\">{{match.name}}</div>\r\n        <div class=\"bet-wrapper\">\r\n          <button (click)=\"updateMatch(match,1)\">1</button>\r\n          <button (click)=\"updateMatch(match,0)\">X</button>\r\n          <button (click)=\"updateMatch(match,2)\">2</button>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <section class=\"admin-panel-element\">\r\n      <h4>Aktualizacja rankingu</h4>\r\n      <button class=\"confirm-admin\" (click)=\"updateRank()\">ZAAKTUALIZUJ</button>\r\n    </section>\r\n    <section class=\"admin-panel-element new-user\">\r\n      <h4>Dodaj użytkownika</h4>\r\n      <input name=\"emailAdress\" [(ngModel)]=\"newUserEmail\" placeholder=\"Adres email użytkownika\" />\r\n      <button class=\"confirm-admin\" (click)=\"joinUser()\">DODAJ UŻYTKOWNIKA</button>\r\n    </section>\r\n  </section>\r\n</div>\r\n\r\n<section class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-9\">\r\n      <div class=\"header\">Twoje typowania</div>\r\n        <div class=\"row\">\r\n            <section class=\"col-md-4 match-group\">\r\n              <h4>Mecze do obstawienia:</h4>\r\n                <p *ngIf=\"matches?.length==0\">Nie ma żadnych meczow</p>\r\n                <div class=\"match-panel\" *ngFor=\"let match of matches\">\r\n                  <div class=\"name\">{{match.name}}<br><small>{{match.date | toDate}}</small></div>\r\n                  <div class=\"bet-wrapper\">\r\n                    <button (click)=\"betMatch(match,1)\">1</button>\r\n                    <button (click)=\"betMatch(match,0)\">X</button>\r\n                    <button (click)=\"betMatch(match,2)\">2</button>\r\n                  </div>\r\n                </div>\r\n            </section>\r\n            <section class=\"col-md-4 match-group\">\r\n              <h4>Mecze obstawione:</h4>\r\n              <p *ngIf=\"leftMatches?.length==0\">Nic nie obstawiles</p>\r\n              <div class=\"match-panel\" *ngFor=\"let leftM of leftMatches\">\r\n                <div class=\"name\">{{leftM.match.name}}<br><small>{{leftM.match.date | toDate}}</small></div>\r\n                <div class=\"bet\">{{leftM.type}}</div>\r\n                <div class=\"bet-wrapper\">\r\n                  <button (click)=\"updateBet(leftM,1)\">1</button>\r\n                  <button (click)=\"updateBet(leftM,0)\">X</button>\r\n                  <button (click)=\"updateBet(leftM,2)\">2</button>\r\n                </div>\r\n\r\n              </div>\r\n            </section>\r\n            <section class=\"col-md-4 match-group\">\r\n              <h4>Mecze zakończone:</h4>\r\n              <p *ngIf=\"finalMatches?.length==0\">Brak zakończonych meczow</p>\r\n              <div class=\"match-panel\" *ngFor=\"let finalM of finalMatches\" >\r\n                <div class=\"name\">{{finalM.match.name}}</div>\r\n\r\n                <i *ngIf=\"finalM.status==2\" class=\"fa fa-times\" ></i>\r\n                <i *ngIf=\"finalM.status==1\" class=\"fa fa-check\"></i>\r\n                <i *ngIf=\"finalM.status==0\" class=\"fa fa-minus\"></i>\r\n              </div>\r\n            </section>\r\n          </div>\r\n    </div>\r\n    <section class=\"col-md-3 ranking\">\r\n        <div class=\"header\">Ranking</div>\r\n        <p *ngIf=\"ranks?.length==0\">Brak aktualnego rankingu.</p>\r\n        <div class=\"rank-panel\" *ngFor=\"let rank of ranks\">\r\n          <div class=\"name\">{{rank.user.username}}</div> <div class=\"rank\">{{rank.rank}} pkt</div>\r\n        </div>\r\n      </section>\r\n  </div>\r\n</section>\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/group/group.component.scss":
/*!********************************************!*\
  !*** ./src/app/group/group.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ranking .header {\n  padding-left: 20px !important; }\n\n.ranking .rank-panel {\n  background-color: white;\n  display: flex;\n  padding: 0px 10px;\n  justify-content: space-between; }\n\n.ranking .rank-panel:nth-child(1) {\n    border-left: solid 4px #73ea14; }\n\n.ranking .rank-panel:nth-child(2) {\n    border-left: solid 4px #97f050; }\n\n.ranking .rank-panel:nth-child(3) {\n    border-left: solid 4px #bbf58d; }\n\n.ranking .rank-panel:nth-child(4) {\n    border-left: solid 4px #e0fbca; }\n\n.ranking .rank-panel .name, .ranking .rank-panel .rank {\n    padding: 10px 0px;\n    font-size: 13px; }\n\n.ranking .rank-panel .rank {\n    width: 30px; }\n\nh1 {\n  text-align: center;\n  margin-bottom: 20px;\n  background: white;\n  padding: 10px;\n  margin-top: -20px; }\n\np {\n  font-size: 14px;\n  font-weight: 500;\n  color: #b4b4b4;\n  text-align: center; }\n\n.container {\n  margin-bottom: 20px; }\n\n.container .header {\n    font-size: 15px;\n    font-weight: bold;\n    text-align: left;\n    margin: 0 -15px 0 -15px;\n    padding: 7px; }\n\n@media only screen and (max-width: 767px) {\n      .container .header {\n        text-align: center; } }\n\n.new-user input {\n  width: 100%;\n  padding: 10px;\n  border: none;\n  text-align: left;\n  border-bottom: 2px solid #e9e9e9; }\n\n.new-user input:focus {\n    outline: none; }\n\n.match-group {\n  background-color: white;\n  padding: 15px; }\n\n.match-group h4 {\n    font-size: 20px;\n    text-align: center; }\n\n.match-group .match-panel {\n    display: flex;\n    flex-flow: row wrap;\n    margin-bottom: 1px;\n    font-size: 14px; }\n\n.match-group .match-panel .name {\n      margin-right: auto; }\n\n.match-group .match-panel .bet {\n      padding: 10px !important;\n      font-weight: 500; }\n\n.match-group .match-panel .name, .match-group .match-panel .bet {\n      padding: 2px;\n      display: flex;\n      flex-direction: column;\n      justify-content: center; }\n\n.match-group .match-panel .bet-wrapper {\n      border-left: none; }\n\n.match-group .match-panel .bet-wrapper button {\n        cursor: pointer;\n        background: whitesmoke;\n        border: none;\n        height: 100%;\n        width: 30px; }\n\n.match-group .match-panel .bet-wrapper button:hover {\n          background: #009385;\n          color: white; }\n\n.match-group .match-panel .fa-times {\n      color: #ed1b24 !important;\n      padding: 10px; }\n\n.match-group .match-panel .fa-check {\n      color: #73ea14 !important;\n      padding: 10px; }\n\n.match-group .match-panel .fa-minus {\n      color: #c2c2c2 !important;\n      padding: 10px; }\n\n.match-group:last-child {\n    border-right: none; }\n\n#admin-panel-wrapper {\n  z-index: 9;\n  overflow: scroll;\n  box-shadow: 2px 2px 2px 0px #afafaf;\n  width: 600px;\n  position: absolute;\n  left: 0;\n  height: 100%;\n  top: 0;\n  padding-top: 44px;\n  background-color: white; }\n\n#admin-panel-wrapper::-webkit-scrollbar {\n    display: none; }\n\n#admin-panel-wrapper h4 {\n    text-align: left !important; }\n\n@media only screen and (max-width: 767px) {\n    #admin-panel-wrapper {\n      position: initial;\n      width: 100%;\n      padding-top: 0px;\n      height: none;\n      -webkit-transform: none !important;\n              transform: none !important;\n      height: auto !important; } }\n\n#admin-panel-wrapper #admin-panel .admin-panel-element {\n    padding: 10px; }\n\n#admin-panel-wrapper #admin-panel .admin-panel-element h4 {\n      font-size: 14px;\n      color: white;\n      padding: 20px;\n      background-color: #009385;\n      margin: -10px -10px 10px -10px; }\n\n#admin-panel-wrapper #admin-panel .admin-panel-element h4 i {\n        float: right;\n        cursor: pointer; }\n\n@media only screen and (max-width: 767px) {\n          #admin-panel-wrapper #admin-panel .admin-panel-element h4 i {\n            display: none; } }\n\n#admin-panel-wrapper #admin-panel .admin-panel-element #newMatch .form-group {\n      margin-bottom: 4px; }\n\n#admin-panel-wrapper #admin-panel .admin-panel-element #newMatch input {\n      font-size: 14px;\n      width: 50%;\n      padding: 10px;\n      border: none;\n      text-align: left;\n      border-bottom: 2px solid #e9e9e9; }\n\n#admin-panel-wrapper #admin-panel .admin-panel-element #newMatch input:focus {\n        outline: none; }\n\n#admin-panel-wrapper #admin-panel .admin-panel-element #newMatch input#date, #admin-panel-wrapper #admin-panel .admin-panel-element #newMatch input#time {\n        width: 25%; }\n\n#admin-panel-wrapper #admin-panel .admin-panel-element #newMatch button {\n      width: 100%;\n      border: none;\n      background: #00c6b3;\n      padding: 10px;\n      font-weight: 600;\n      margin-top: 10px;\n      font-size: 14px;\n      color: white; }\n\n#admin-panel-wrapper #admin-panel .admin-panel-element .confirm-admin {\n      background: none;\n      border: none;\n      padding: 10px;\n      font-weight: 600;\n      margin-top: 10px;\n      font-size: 14px;\n      color: #00897c;\n      display: block;\n      margin-left: auto; }\n"

/***/ }),

/***/ "./src/app/group/group.component.ts":
/*!******************************************!*\
  !*** ./src/app/group/group.component.ts ***!
  \******************************************/
/*! exports provided: GroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupComponent", function() { return GroupComponent; });
/* harmony import */ var _services_ligowo_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/ligowo.service */ "./src/app/services/ligowo.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_grouptitle_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/grouptitle.service */ "./src/app/services/grouptitle.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GroupComponent = /** @class */ (function () {
    function GroupComponent(route, ligowoService, groupTitle, alertService) {
        this.route = route;
        this.ligowoService = ligowoService;
        this.groupTitle = groupTitle;
        this.alertService = alertService;
        // animation
        this.adminPanel = 'hide';
        this.newMatches = [{ name: '', date: '', time: '' }];
    }
    GroupComponent.prototype.ngOnDestroy = function () {
        this.groupTitle.setTitle('');
    };
    GroupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.current_user = JSON.parse(localStorage.getItem('currentUser')).userId;
        this.group_id = this.route.snapshot.paramMap.get('id');
        this.ligowoService.getGroupInfo(this.group_id).subscribe(function (group) {
            _this.group = group;
            _this.groupTitle.setTitle(_this.group.name);
        });
        this.refresh(function () {
        });
    };
    GroupComponent.prototype.getGroupMatches = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.ligowoService.getGroupMatches(id).subscribe(function (matches) {
                _this.groupMatches = matches;
                resolve();
            });
        });
    };
    GroupComponent.prototype.getMatches = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.ligowoService.getMatches(id).subscribe(function (matches) {
                _this.matches = matches;
                resolve();
            });
        });
    };
    GroupComponent.prototype.getFinalMatches = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.ligowoService.getFinalMatches(id).subscribe(function (finalMatches) {
                _this.finalMatches = finalMatches;
                resolve();
            });
        });
    };
    GroupComponent.prototype.getLeftMatches = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.ligowoService.getLeftMatches(id).subscribe(function (leftMatches) {
                _this.leftMatches = leftMatches;
                resolve();
            });
        });
    };
    GroupComponent.prototype.getRank = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.ligowoService.getRank(id).subscribe(function (ranks) {
                _this.ranks = ranks;
                resolve();
            });
        });
    };
    GroupComponent.prototype.addMatch = function () {
        this.newMatches.push({ name: '', date: '', time: '' });
    };
    GroupComponent.prototype.sendMatches = function () {
        var _this = this;
        this.alertService.showModal();
        this.ligowoService.addMatch(this.newMatches, this.group_id).subscribe(function (match) {
            _this.newMatches = [{ name: '', date: '', time: '' }];
            _this.refresh(function () {
                _this.alertService.setMessage('Dodano mecze', function () {
                    var ft = _this.alertService.setMessage('', function () { });
                });
            });
        }, function (err) {
            _this.alertService.hideModal();
            _this.alertService.setMessage(err.error.error.message, function () {
                var ft = _this.alertService.setMessage('', function () { });
            });
        });
    };
    GroupComponent.prototype.updateRank = function () {
        var _this = this;
        this.alertService.showModal();
        this.ligowoService.updateRank(this.group_id).subscribe(function (status) {
            _this.refresh(function () {
                _this.alertService.setMessage(status, function () {
                    var ft = _this.alertService.setMessage('', function () { });
                });
            });
        });
    };
    GroupComponent.prototype.updateMatch = function (match, score) {
        var _this = this;
        this.alertService.showModal();
        this.ligowoService.updateMatch(match, score).subscribe(function (matchs) {
            _this.refresh(function () {
            });
        });
    };
    GroupComponent.prototype.betMatch = function (match, type) {
        var _this = this;
        this.alertService.showModal();
        var newBet = {
            type: type,
            status: 0,
            date: match.date,
            matchId: match.id
        };
        this.ligowoService.addBet(newBet).subscribe(function (bet) {
            _this.refresh(function () {
            });
        });
    };
    GroupComponent.prototype.updateBet = function (bet, type) {
        var _this = this;
        this.alertService.showModal();
        this.ligowoService.updateBet(bet, type).subscribe(function (betx) {
            _this.refresh(function () {
            });
        }, function (err) {
            _this.refresh(function () {
                _this.alertService.setMessage(err.error.error.message, function () {
                    var ft = _this.alertService.setMessage('', function () { });
                });
            });
        });
    };
    GroupComponent.prototype.joinUser = function () {
        var _this = this;
        this.ligowoService.joinGroup(this.group_id, this.newUserEmail).subscribe(function (message) {
            _this.alertService.setMessage('Dodano użytkownika', function () {
                var ft = _this.alertService.setMessage('', function () { });
            });
        }, function (err) {
            console.log(err);
            _this.alertService.setMessage(err.error.error.message, function () {
                var ft = _this.alertService.setMessage('', function () { });
            });
        });
    };
    GroupComponent.prototype.refresh = function (cb) {
        var _this = this;
        this.alertService.showModal();
        Promise.all([this.getMatches(this.group_id), this.getLeftMatches(this.group_id),
            this.getFinalMatches(this.group_id), this.getGroupMatches(this.group_id), this.getRank(this.group_id)])
            .then(function () {
            _this.alertService.hideModal();
            cb();
        });
    };
    GroupComponent.prototype.showAdminPanel = function () {
        this.adminPanel = (this.adminPanel === 'hide' ? 'show' : 'hide');
    };
    GroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-group',
            template: __webpack_require__(/*! ./group.component.html */ "./src/app/group/group.component.html"),
            styles: [__webpack_require__(/*! ./group.component.scss */ "./src/app/group/group.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('myAwesomeAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                        transform: 'translateX(-550px)',
                        height: '99px',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                        transform: 'translateX(0px)',
                        height: '100%',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('hide <=> show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('200ms ease-in')),
                ]),
            ]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_ligowo_service__WEBPACK_IMPORTED_MODULE_0__["LigowoService"], _services_grouptitle_service__WEBPACK_IMPORTED_MODULE_3__["GrouptitleService"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]])
    ], GroupComponent);
    return GroupComponent;
}());



/***/ }),

/***/ "./src/app/groups/groups.component.html":
/*!**********************************************!*\
  !*** ./src/app/groups/groups.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\r\n    <section class=\"group-box\">\r\n      <div class=\"group-section\">GRUPY DO KTÓRYCH NALEŻYSZ</div>\r\n      <div class=\"group-wrapper\" #notOwner>\r\n          <div class=\"group\" *ngFor=\"let group of groups | forfilter:current_user.userId:'others'\" (click)=\"openGroup(group)\" >\r\n            {{group.name}}\r\n            <div class=\"play-c\">Graczy: {{group.users.length}}</div>\r\n          </div>\r\n      </div>\r\n      <p *ngIf=\"!notOwner.children.length\">Brak grup</p>\r\n    </section>\r\n</section>\r\n<section class=\"container\">\r\n    <section class=\"group-box\">\r\n      <div class=\"group-section\">TWOJE GRUPY</div>\r\n      <div class=\"group-wrapper group-box\">\r\n          <div class=\"group\" *ngFor=\"let group of groups | forfilter:current_user.userId:'own'\" (click)=\"openGroup(group)\" >\r\n            {{group.name}}\r\n            <div class=\"play-c\">Graczy: {{group.users.length}}</div>\r\n          </div>\r\n          <div class=\"group new-group\" (click)=\"showNewGroupPanel()\">\r\n            <i class=\"fa fa-plus-square-o\" aria-hidden=\"true\"></i>\r\n            <div [@slideTop]='new_group_panel' class=\"ngrform\">\r\n              <form>\r\n                  <input  name=\"ngGroupName\" [(ngModel)]=\"newGroupName\" click-stop-propagation placeholder=\"Nazwa grupy\" required>\r\n                  <button click-stop-propagation (click)=\"addGroup()\">DODAJ</button>\r\n              </form>\r\n            </div>\r\n          </div>\r\n      </div>\r\n    </section>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/groups/groups.component.scss":
/*!**********************************************!*\
  !*** ./src/app/groups/groups.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  background-color: white;\n  box-shadow: 2px 2px 2px 0px #afafaf; }\n  .container .group-box p {\n    padding-bottom: 10px; }\n  .container .group-box .group-section {\n    margin-left: -10px;\n    font-weight: 600;\n    color: #727272;\n    padding: 10px; }\n  .container .group-box .group-wrapper {\n    display: flex;\n    flex-flow: row wrap; }\n  .container .group-box .group-wrapper .group {\n      flex: 25%;\n      flex-grow: 0;\n      margin-bottom: 15px;\n      cursor: pointer;\n      position: relative;\n      padding: 20px 20px;\n      border-left: solid 2px #727272;\n      transition: 0.2s ease all;\n      font-weight: 500; }\n  .container .group-box .group-wrapper .group .play-c {\n        font-size: 12px;\n        color: #a1a1a1; }\n  .container .group-box .group-wrapper .group.new-group {\n        border-left: none;\n        background-color: #727272;\n        position: relative;\n        overflow: hidden; }\n  .container .group-box .group-wrapper .group.new-group i {\n          position: relative;\n          color: white;\n          font-size: 40px;\n          left: 50%;\n          top: 50%;\n          -webkit-transform: translate(-50%, -50%);\n                  transform: translate(-50%, -50%); }\n  .container .group-box .group-wrapper .group.new-group:hover {\n          background-color: #727272ad; }\n  .container .group-box .group-wrapper .group.new-group .ngrform {\n          background-color: rgba(0, 0, 0, 0.5);\n          position: absolute;\n          width: 100%;\n          height: 100%;\n          left: 0;\n          top: 100%; }\n  .container .group-box .group-wrapper .group.new-group .ngrform form {\n            width: 100%;\n            bottom: 0;\n            position: absolute; }\n  .container .group-box .group-wrapper .group.new-group .ngrform form input, .container .group-box .group-wrapper .group.new-group .ngrform form button {\n              border: none;\n              text-align: center;\n              width: 100%;\n              padding: 5px; }\n  .container .group-box .group-wrapper .group:hover {\n        background-color: #727272;\n        color: white; }\n"

/***/ }),

/***/ "./src/app/groups/groups.component.ts":
/*!********************************************!*\
  !*** ./src/app/groups/groups.component.ts ***!
  \********************************************/
/*! exports provided: GroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsComponent", function() { return GroupsComponent; });
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_ligowo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/ligowo.service */ "./src/app/services/ligowo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GroupsComponent = /** @class */ (function () {
    function GroupsComponent(ligowoService, router, alertService) {
        this.ligowoService = ligowoService;
        this.router = router;
        this.alertService = alertService;
        this.new_group_panel = 'hide';
    }
    GroupsComponent.prototype.addGroup = function () {
        var _this = this;
        var new_group = {
            name: this.newGroupName,
            admin: this.current_user.userId,
            users: [this.current_user.userId]
        };
        this.alertService.showModal();
        this.ligowoService.addGroup(new_group).subscribe(function (group) {
            _this.getGroups().then(function () {
                _this.alertService.hideModal();
            });
        }, function (err) {
            console.log(err);
        });
        this.new_group_panel = 'hide';
        this.newGroupName = '';
    };
    GroupsComponent.prototype.getGroups = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.ligowoService.getUserGroups(_this.current_user.userId).subscribe(function (groups) {
                _this.groups = groups.data;
                resolve();
            });
        });
    };
    GroupsComponent.prototype.openGroup = function (group) {
        this.router.navigate(["main/groups/" + group.id]);
    };
    GroupsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.showModal();
        this.current_user = JSON.parse(localStorage.getItem('currentUser'));
        this.getGroups().then(function () {
            _this.alertService.hideModal();
        });
    };
    GroupsComponent.prototype.showNewGroupPanel = function () {
        this.new_group_panel = (this.new_group_panel === 'hide' ? 'show' : 'hide');
    };
    GroupsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-groups',
            template: __webpack_require__(/*! ./groups.component.html */ "./src/app/groups/groups.component.html"),
            styles: [__webpack_require__(/*! ./groups.component.scss */ "./src/app/groups/groups.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('slideTop', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                        top: '100%',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                        top: '0%',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('hide <=> show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('200ms ease-in')),
                ]),
            ]
        }),
        __metadata("design:paramtypes", [src_app_services_ligowo_service__WEBPACK_IMPORTED_MODULE_2__["LigowoService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"]])
    ], GroupsComponent);
    return GroupsComponent;
}());



/***/ }),

/***/ "./src/app/landing/landing.component.html":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- <section class=\"container-fluid\">\r\n  <header>LIGOWO</header>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"page-header\">\r\n        <h1>Baw się ze znajomymi obstawiając wydarzenia sportowe</h1>\r\n        <small>Tworz grupy, dodawaj i obstawiaj wyniki spotkań, awansuj w rankingu!</small>\r\n        <button class=\"register\" routerLink=\"/register\">Zarejestruj się!</button>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <app-login></app-login>\r\n    </div>\r\n  </div>\r\n</section> -->\r\n<section class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-5 col-sm-12 left\">\r\n      <div class=\"content\">\r\n        <div class=\"page-header\">\r\n          <h1>LIGOWO</h1>\r\n          <small>Tworz grupy, dodawaj i obstawiaj wyniki spotkań, awansuj w rankingu!</small>\r\n          <!-- <button class=\"register\" routerLink=\"/register\">Zarejestruj się!</button> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-7 col-sm-12 right\">\r\n      <div class=\"content\">\r\n        <app-login></app-login>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/landing/landing.component.scss":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  height: 100vh;\n  background-repeat: no-repeat;\n  background-size: 100% 100%; }\n  .container-fluid header {\n    padding: 15px;\n    letter-spacing: 2px;\n    font-weight: 700;\n    position: absolute; }\n  .container-fluid .row {\n    height: 100vh; }\n  .container-fluid .row .left {\n      background-color: #009385;\n      -webkit-transform: skewX(-15deg);\n              transform: skewX(-15deg);\n      z-index: 99; }\n  @media only screen and (max-width: 1025px) {\n        .container-fluid .row .left {\n          height: 100%;\n          -webkit-transform: skewX(0deg);\n                  transform: skewX(0deg); } }\n  .container-fluid .row .left:before {\n        content: \"\";\n        position: absolute;\n        top: 0;\n        left: -130px;\n        width: 200px;\n        height: 50%;\n        background-color: #009385; }\n  .container-fluid .row .right {\n      position: relative; }\n  @media only screen and (max-width: 767px) {\n        .container-fluid .row .right .content {\n          position: relative;\n          z-index: 99;\n          width: 100%;\n          top: 80px; } }\n  .container-fluid .row .content {\n      position: relative;\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n              transform: translateY(-50%); }\n  .page-header {\n  text-align: center;\n  color: #f7f7f7; }\n  @media only screen and (max-width: 1025px) {\n    .page-header {\n      -webkit-transform: skewX(0deg);\n              transform: skewX(0deg); } }\n  .page-header h1 {\n    letter-spacing: 2px;\n    font-weight: 500;\n    font-size: 65px;\n    margin-bottom: 10px; }\n  .page-header small {\n    font-size: 22px;\n    letter-spacing: 0px; }\n"

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.scss */ "./src/app/landing/landing.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <form class=\"login\">\r\n      <div class=\"form-header\">LOGOWANIE</div>\r\n    <div class=\"\">\r\n      <input type=\"email\" class=\"form-control\" name=\"username\" [(ngModel)]=\"username\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"email\">\r\n    </div>\r\n    <div class=\"\">\r\n      <input type=\"password\" class=\"form-control\" name=\"username\" [(ngModel)]=\"password\" id=\"exampleInputPassword1\" placeholder=\"hasło\">\r\n    </div>\r\n    <button type=\"submit\" (click)=\"login()\" >ZALOGUJ</button>\r\n    <a routerLink=\"/register\">Rejestracja</a>\r\n  </form>\r\n\r\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  margin: 0 auto;\n  width: 500px;\n  padding: 30px;\n  background-color: white; }\n  @media only screen and (max-width: 1025px) {\n    form {\n      width: 100%; } }\n  form .form-header {\n    border-left: solid 3px #009385;\n    font-weight: 600;\n    font-size: 35px;\n    text-align: left;\n    margin: 20px 0px;\n    margin-left: -30px;\n    padding-left: 30px; }\n  form input {\n    border-bottom: 1px solid #dddddd;\n    text-align: left;\n    margin-bottom: 20px; }\n  form a {\n    text-decoration: none;\n    color: gray; }\n  form button {\n    transition: .4s;\n    color: white; }\n  form button:hover {\n      opacity: 0.9; }\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, alertService) {
        this.authService = authService;
        this.router = router;
        this.alertService = alertService;
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.alertService.showModal();
        this.authService.login(this.username, this.password).subscribe(function (user) {
            _this.alertService.hideModal();
            _this.router.navigate(['main/groups']);
        }, function (err) {
            _this.alertService.hideModal();
            _this.alertService.setMessage(err.error.error.message, function () {
                var ft = _this.alertService.setMessage('', function () { });
            });
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<header>\r\n<div class=\"container\">\r\n<div id=\"user-info\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i>{{user?.username}}</div>\r\n<div id=\"group-title\" [hidden]=\"titleH?.length==0\">{{titleH}}</div>\r\n<button (click)=\"logout()\">Wyloguj</button>\r\n</div>\r\n</header>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/main/main.component.scss":
/*!******************************************!*\
  !*** ./src/app/main/main.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  z-index: 10;\n  position: relative;\n  background-color: white;\n  margin-bottom: 20px; }\n  header .container {\n    padding: 0;\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: space-between; }\n  header .container #user-info, header .container #group-title {\n      font-family: 'Quicksand', sans-serif;\n      padding: 10px; }\n  header .container button {\n      font-family: 'Quicksand', sans-serif;\n      margin-left: 10px;\n      border: none;\n      background: none;\n      color: #009385;\n      transition: 0.1s all;\n      padding: 10px;\n      font-size: 14px;\n      font-weight: bold; }\n  header .container button:hover {\n        background-color: #009385;\n        color: white; }\n  header .container i {\n      padding-right: 10px; }\n  header .container #group-title {\n      font-weight: 700; }\n  header:after {\n    content: \"\";\n    height: 2px;\n    background: #009385;\n    background: linear-gradient(to right, #00c6b3, #00ad9c, #009385);\n    width: 100%;\n    position: absolute;\n    bottom: 0;\n    display: block; }\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_grouptitle_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/grouptitle.service */ "./src/app/services/grouptitle.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainComponent = /** @class */ (function () {
    function MainComponent(authService, router, groupTitle) {
        this.authService = authService;
        this.router = router;
        this.groupTitle = groupTitle;
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.groupTitle.getTitle().subscribe(function (title) {
            _this.titleH = title;
        });
        this.authService.getUserData().subscribe(function (user) {
            _this.user = user;
        });
    };
    MainComponent.prototype.logout = function () {
        this.authService.logout();
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_grouptitle_service__WEBPACK_IMPORTED_MODULE_3__["GrouptitleService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"notFound\">\r\n  <div class=\"code\">404</div>\r\n  Strona o podanym adresie nie istnieje.\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".notFound {\n  width: 100%;\n  text-align: center;\n  padding: 20px;\n  font-size: 50px;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  position: absolute; }\n  .notFound .code {\n    color: #009385;\n    letter-spacing: 4px;\n    font-size: 90px; }\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/page-not-found/page-not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container-fluid\">\r\n  <form class=\"col-md-6 offset-md-3 register\">\r\n      <div class=\"form-header\">REJESTRACJA</div>\r\n    <div class=\"form-group\">\r\n      <input type=\"text\" class=\"form-control\"  name=\"username\" [(ngModel)]=\"username\" placeholder=\"Wprowadź nazwę użytkownika\" required>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <input type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"email\" placeholder=\"Wprowadź adres email\" required>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"password\"  placeholder=\"Hasło\" required>\r\n    </div>\r\n    <button  (click)=\"register()\">ZAREJESTRUJ SIĘ!</button>\r\n    <a routerLink=\"/\">Logowanie</a>\r\n  </form>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/register/register.component.scss":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  padding-top: 100px;\n  background-image: url('background.png');\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  height: 100vh; }\n\nform {\n  margin: 0 auto;\n  width: 500px;\n  padding: 30px;\n  background-color: white; }\n\nform .form-header {\n    border-left: solid 3px #009385;\n    font-weight: 600;\n    font-size: 35px;\n    text-align: left;\n    margin: 20px 0px;\n    margin-left: -30px;\n    padding-left: 30px; }\n\nform input {\n    border-bottom: 1px solid #dddddd;\n    text-align: left;\n    margin-bottom: 20px; }\n\nform a {\n    text-decoration: none;\n    color: gray; }\n\nform button {\n    transition: .4s;\n    color: white; }\n\nform button:hover {\n      opacity: 0.9; }\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, router, alertService) {
        this.authService = authService;
        this.router = router;
        this.alertService = alertService;
        this.username = '';
        this.password = '';
        this.email = '';
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.alertService.showModal();
        this.authService.register(this.username, this.email, this.password).subscribe(function (user) {
            _this.alertService.hideModal();
            _this.router.navigate(['/']);
        }, function (err) {
            _this.alertService.hideModal();
            _this.alertService.setMessage(err.error.error.message, function () {
                var ft = _this.alertService.setMessage('', function () { });
            });
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/alert.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/alert.service.ts ***!
  \*******************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertService = /** @class */ (function () {
    function AlertService() {
        this.message = '';
        this.message$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.showWModal = true;
        this.showWModal$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    AlertService.prototype.setMessage = function (title, cb) {
        this.message = title;
        this.message$.next(this.message);
        setTimeout(function () {
            cb();
        }, 3000);
    };
    AlertService.prototype.getMessage = function () {
        return this.message$.asObservable();
    };
    AlertService.prototype.clearMessage = function () {
        this.message = '';
    };
    AlertService.prototype.showModal = function () {
        this.showWModal = true;
        this.showWModal$.next(this.showWModal);
    };
    AlertService.prototype.hideModal = function () {
        this.showWModal = false;
        this.showWModal$.next(this.showWModal);
    };
    AlertService.prototype.getModal = function () {
        return this.showWModal$.asObservable();
    };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/services/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/services/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        var current_user = JSON.parse(localStorage.getItem('currentUser'));
        if (current_user) {
            return true;
        }
        else {
            this.router.navigate([""]);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = /** @class */ (function () {
    // private base_url = 'http://localhost:3000';
    function AuthenticationService(http) {
        this.http = http;
        this.base_url = 'https://quiet-sea-36923.herokuapp.com';
    }
    AuthenticationService.prototype.login = function (email, password) {
        return this.http.post(this.base_url + "/api/Users/login", { email: email, password: password }).map(function (user) {
            if (user && user.id) {
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return user;
        });
    };
    AuthenticationService.prototype.register = function (username, email, password) {
        return this.http.post(this.base_url + "/api/Users", { username: username, email: email, password: password });
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem('currentUser');
        window.location.replace('/ligowo-app-dev');
    };
    AuthenticationService.prototype.getUserData = function () {
        var current_user = JSON.parse(localStorage.getItem('currentUser'));
        return this.http.get(this.base_url + "/api/Users/" + current_user.userId + "?access_token=" + current_user.id);
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/grouptitle.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/grouptitle.service.ts ***!
  \************************************************/
/*! exports provided: GrouptitleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrouptitleService", function() { return GrouptitleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GrouptitleService = /** @class */ (function () {
    function GrouptitleService() {
        this.groupTitle = '';
        this.groupTitle$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    GrouptitleService.prototype.setTitle = function (title) {
        this.groupTitle = title;
        this.groupTitle$.next(this.groupTitle);
    };
    GrouptitleService.prototype.getTitle = function () {
        return this.groupTitle$.asObservable();
    };
    GrouptitleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], GrouptitleService);
    return GrouptitleService;
}());



/***/ }),

/***/ "./src/app/services/ligowo.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/ligowo.service.ts ***!
  \********************************************/
/*! exports provided: LigowoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LigowoService", function() { return LigowoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LigowoService = /** @class */ (function () {
    // private base_url = 'http://localhost:3000';
    function LigowoService(http) {
        this.http = http;
        this.base_url = 'https://quiet-sea-36923.herokuapp.com';
        var current_user = JSON.parse(localStorage.getItem('currentUser'));
        this.auth_token = current_user.id;
        this.user_id = current_user.userId;
    }
    LigowoService.prototype.getUserGroups = function (userid) {
        return this.http.get(this.base_url + "/api/groups/usergroups/" + this.user_id + "?access_token=" + this.auth_token);
    };
    LigowoService.prototype.addGroup = function (group) {
        return this.http.post(this.base_url + "/api/groups/?access_token=" + this.auth_token, group);
    };
    LigowoService.prototype.joinGroup = function (group_id, user_email) {
        return this.http.patch(this.base_url + "/api/groups/join/" + group_id + "/" + user_email + "?access_token=" + this.auth_token, {});
    };
    LigowoService.prototype.getGroupInfo = function (group_id) {
        return this.http.get(this.base_url + "/api/groups/" + group_id + "?access_token=" + this.auth_token, {});
    };
    LigowoService.prototype.getMatches = function (group_id) {
        return this.http.get(this.base_url + "/api/Matches/bets/" + this.user_id + "/" + group_id + "?access_token=" + this.auth_token, {});
    };
    LigowoService.prototype.getGroupMatches = function (group_id) {
        return this.http.get(this.base_url + "/api/Matches//bets/groupMatches/" + group_id + "?access_token=" + this.auth_token, {});
    };
    LigowoService.prototype.getFinalMatches = function (group_id) {
        return this.http.get(this.base_url + "/api/Matches/bets/userdone/" + this.user_id + "/" + group_id + "?access_token=" + this.auth_token, {});
    };
    LigowoService.prototype.getLeftMatches = function (group_id) {
        return this.http.get(this.base_url + "/api/Matches/bets/userleft/" + this.user_id + "/" + group_id + "?access_token=" + this.auth_token, {});
    };
    LigowoService.prototype.addMatch = function (matches, gid) {
        console.log(matches);
        return this.http.post(this.base_url + "/api/Matches/add/" + gid, matches);
    };
    LigowoService.prototype.addBet = function (bet) {
        bet.user_id = this.user_id;
        return this.http.post(this.base_url + "/api/Bets", bet);
    };
    LigowoService.prototype.updateBet = function (bet, type) {
        return this.http.patch(this.base_url + "/api/Bets/updateBet/" + bet.id + "/" + type + "?access_token=" + this.auth_token, {});
    };
    LigowoService.prototype.updateMatch = function (match, score) {
        return this.http.patch(this.base_url + "/api/Matches/" + match.id + "?access_token=" + this.auth_token, { score: score });
    };
    LigowoService.prototype.updateRank = function (group_id) {
        return this.http.get(this.base_url + "/api/Matches/updateRank/" + group_id + "?access_token=" + this.auth_token);
    };
    LigowoService.prototype.getRank = function (group_id) {
        return this.http.get(this.base_url + "/api/Ranks/" + group_id + "?access_token=" + this.auth_token);
    };
    LigowoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LigowoService);
    return LigowoService;
}());



/***/ }),

/***/ "./src/app/services/login.guard.ts":
/*!*****************************************!*\
  !*** ./src/app/services/login.guard.ts ***!
  \*****************************************/
/*! exports provided: LoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return LoginGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginGuard = /** @class */ (function () {
    function LoginGuard(router) {
        this.router = router;
    }
    LoginGuard.prototype.canActivate = function () {
        var current_user = JSON.parse(localStorage.getItem('currentUser'));
        if (!current_user) {
            return true;
        }
        else {
            this.router.navigate(["main"]);
            return false;
        }
    };
    LoginGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginGuard);
    return LoginGuard;
}());



/***/ }),

/***/ "./src/app/toDate.pipe.ts":
/*!********************************!*\
  !*** ./src/app/toDate.pipe.ts ***!
  \********************************/
/*! exports provided: ToDatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToDatePipe", function() { return ToDatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ToDatePipe = /** @class */ (function () {
    function ToDatePipe() {
    }
    ToDatePipe.prototype.transform = function (item) {
        return item.substring(0, 4) + "-" + item.substring(4, 6) + "-" + item.substring(6, 8) + " " + item.substring(8, 10) + ":" + item.substring(10, 12);
    };
    ToDatePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'toDate'
        })
    ], ToDatePipe);
    return ToDatePipe;
}());



/***/ }),

/***/ "./src/app/waiting/waiting.component.html":
/*!************************************************!*\
  !*** ./src/app/waiting/waiting.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showModal\" class=\"waiting-modal\">\r\n  <img class=\"ldi\" src=\"assets/loading.svg\">\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/waiting/waiting.component.scss":
/*!************************************************!*\
  !*** ./src/app/waiting/waiting.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".waiting-modal {\n  z-index: 999;\n  width: 100%;\n  height: 100%;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0; }\n  .waiting-modal .ldi {\n    width: 130px; }\n"

/***/ }),

/***/ "./src/app/waiting/waiting.component.ts":
/*!**********************************************!*\
  !*** ./src/app/waiting/waiting.component.ts ***!
  \**********************************************/
/*! exports provided: WaitingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaitingComponent", function() { return WaitingComponent; });
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WaitingComponent = /** @class */ (function () {
    function WaitingComponent(alertService) {
        this.alertService = alertService;
    }
    WaitingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getModal().subscribe(function (sm) {
            _this.showModal = sm;
        });
    };
    WaitingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-waiting',
            template: __webpack_require__(/*! ./waiting.component.html */ "./src/app/waiting/waiting.component.html"),
            styles: [__webpack_require__(/*! ./waiting.component.scss */ "./src/app/waiting/waiting.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"]])
    ], WaitingComponent);
    return WaitingComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\user\Desktop\my_dev\ligowo-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map