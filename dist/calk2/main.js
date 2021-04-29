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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-icon {\r\n    padding: 0 14px;\r\n  }\r\n  \r\n  .example-spacer {\r\n    flex: 1 1 auto;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsY0FBYztFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtaWNvbiB7XHJcbiAgICBwYWRkaW5nOiAwIDE0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLXNwYWNlciB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main></app-main>\r\n\r\n<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'calk2';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _moto_moto_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./moto/moto.component */ "./src/app/moto/moto.component.ts");
/* harmony import */ var _car_car_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./car/car.component */ "./src/app/car/car.component.ts");
/* harmony import */ var _electrocar_electrocar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./electrocar/electrocar.component */ "./src/app/electrocar/electrocar.component.ts");
/* harmony import */ var _bus_bus_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./bus/bus.component */ "./src/app/bus/bus.component.ts");
/* harmony import */ var _truck_truck_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./truck/truck.component */ "./src/app/truck/truck.component.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_9__["MainComponent"],
                _moto_moto_component__WEBPACK_IMPORTED_MODULE_10__["MotoComponent"],
                _car_car_component__WEBPACK_IMPORTED_MODULE_11__["CarComponent"],
                _electrocar_electrocar_component__WEBPACK_IMPORTED_MODULE_12__["ElectrocarComponent"],
                _bus_bus_component__WEBPACK_IMPORTED_MODULE_13__["BusComponent"],
                _truck_truck_component__WEBPACK_IMPORTED_MODULE_14__["TruckComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bus/bus.component.css":
/*!***************************************!*\
  !*** ./src/app/bus/bus.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1cy9idXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/bus/bus.component.html":
/*!****************************************!*\
  !*** ./src/app/bus/bus.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  bus works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/bus/bus.component.ts":
/*!**************************************!*\
  !*** ./src/app/bus/bus.component.ts ***!
  \**************************************/
/*! exports provided: BusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusComponent", function() { return BusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BusComponent = /** @class */ (function () {
    function BusComponent() {
    }
    BusComponent.prototype.ngOnInit = function () {
    };
    BusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bus',
            template: __webpack_require__(/*! ./bus.component.html */ "./src/app/bus/bus.component.html"),
            styles: [__webpack_require__(/*! ./bus.component.css */ "./src/app/bus/bus.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BusComponent);
    return BusComponent;
}());



/***/ }),

/***/ "./src/app/car/car.component.css":
/*!***************************************!*\
  !*** ./src/app/car/car.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\r\n    min-width: 150px;\r\n    max-width: 400px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .example-full-width {\r\n    width: 100%;\r\n  }\r\n  \r\n  #item {\r\n    display: flex;\r\n    flex-direction: row;\r\n    width: 100%;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n  \r\n  #form, #result {\r\n    width: 50%;\r\n    padding: 30px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n  \r\n  input {\r\n    width: 400px;\r\n  }\r\n  \r\n  .values {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    border-bottom: 1px solid black;\r\n    width: 400px;\r\n    padding: 20px 0px 5px 5px;\r\n  }\r\n  \r\n  @media all and (max-width: 1000px) {\r\n    #item {\r\n      display: flex;\r\n      flex-direction: column;\r\n      width: 100%;\r\n      align-items: center;\r\n      justify-content: center;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyL2Nhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBT0E7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsOEJBQThCO0lBQzlCLFlBQVk7SUFDWix5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRTtNQUNFLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsV0FBVztNQUNYLG1CQUFtQjtNQUNuQix1QkFBdUI7SUFDekI7RUFDRiIsImZpbGUiOiJzcmMvYXBwL2Nhci9jYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZvcm0ge1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcblxyXG4gXHJcblxyXG5cclxuXHJcbiAgI2l0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICNmb3JtLCAjcmVzdWx0IHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIGlucHV0IHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICB9XHJcblxyXG4gIC52YWx1ZXMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIHBhZGRpbmc6IDIwcHggMHB4IDVweCA1cHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAgICNpdGVtIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/car/car.component.html":
/*!****************************************!*\
  !*** ./src/app/car/car.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"item\">\r\n    <div id=\"form\">\r\n<form class=\"example-form\" (submit)=\"calk(price.value, volume.value, engine.value, age.value)\">\r\n  <div>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"number\" placeholder=\"Вартість авто\" value=\"\" #price>\r\n    <span matSuffix>$&nbsp;</span>\r\n  </mat-form-field>\r\n</div>\r\n<div>\r\n  <mat-form-field class=\"example-full-width\">\r\n      <mat-label>Об'єм двигуна</mat-label>\r\n      <mat-select #volume>\r\n        <mat-option *ngFor = \"let volume of volumes\" value=\"{{volume }}\">\r\n           {{ volume }}\r\n          </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  </div>\r\n<div>\r\n    <mat-form-field class=\"example-full-width\">\r\n        <mat-label>Тип двигуна</mat-label>\r\n        <mat-select #engine>\r\n          <mat-option *ngFor = \"let engine of engines \" value=\"{{engine.name}}\">\r\n              {{ engine.name }}\r\n            </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n</div>\r\n<div>\r\n<mat-form-field class=\"example-full-width\">\r\n  <mat-label>Вік автомобіля</mat-label>\r\n  <mat-select #age>\r\n      <mat-option *ngFor = \"let age of ages\" value=\"{{age}}\">\r\n          {{age}}\r\n        </mat-option>\r\n  </mat-select>\r\n</mat-form-field>\r\n</div>\r\n\r\n<button mat-raised-button color=\"primary\" type=\"submit\">Розрахувати</button>\r\n\r\n</form>\r\n</div>\r\n\r\n<div id=\"result\" > \r\n\r\n  <div>\r\n          <div class=\"values\">\r\n              <div class=\"titel\">ПДВ:</div>\r\n              <div class=\"value\">{{ results.car.pdv | number:'2.2-2'}}</div>\r\n          </div>\r\n          <div class=\"values\">\r\n              <div class=\"titel\"> Мито:</div>\r\n              <div class=\"value\">{{ results.car.myto | number:'2.2-2'}}</div>\r\n          </div>\r\n          <div class=\"values\">\r\n              <div class=\"titel\">Акцизний збір:</div>\r\n              <div class=\"value\">{{ results.car.zbir | number:'2.2-2'}}</div>\r\n          </div>\r\n          <div class=\"values\">\r\n              <div class=\"titel\">Всього митних платежів:</div>\r\n              <div class=\"value\">{{ results.car.vsogo | number:'2.2-2'}}</div>\r\n          </div>\r\n          <div class=\"values\">\r\n              <div class=\"titel\">Вартість авто після розмитнення:</div>\r\n              <div class=\"value\">{{ results.car.sum | number:'2.2-2'}}</div>\r\n          </div>\r\n\r\n        \r\n      </div>\r\n      \r\n   \r\n   \r\n     \r\n  \r\n            \r\n    \r\n    <div>\r\n</div>"

/***/ }),

/***/ "./src/app/car/car.component.ts":
/*!**************************************!*\
  !*** ./src/app/car/car.component.ts ***!
  \**************************************/
/*! exports provided: CarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarComponent", function() { return CarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main-data */ "./src/app/main-data.ts");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../main.service */ "./src/app/main.service.ts");




var CarComponent = /** @class */ (function () {
    function CarComponent(mainService) {
        this.mainService = mainService;
        this.ages = _main_data__WEBPACK_IMPORTED_MODULE_2__["CAR_AGE"];
        this.engines = _main_data__WEBPACK_IMPORTED_MODULE_2__["ENGINE"];
        this.volumes = _main_data__WEBPACK_IMPORTED_MODULE_2__["VOLUME"];
        this.results = _main_data__WEBPACK_IMPORTED_MODULE_2__["RESULT"];
    }
    CarComponent.prototype.calk = function (price, volume, engine, age) {
        this.mainService.calk(price, volume, engine, age);
    };
    CarComponent.prototype.ngOnInit = function () {
    };
    CarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-car',
            template: __webpack_require__(/*! ./car.component.html */ "./src/app/car/car.component.html"),
            styles: [__webpack_require__(/*! ./car.component.css */ "./src/app/car/car.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]])
    ], CarComponent);
    return CarComponent;
}());



/***/ }),

/***/ "./src/app/electrocar/electrocar.component.css":
/*!*****************************************************!*\
  !*** ./src/app/electrocar/electrocar.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VsZWN0cm9jYXIvZWxlY3Ryb2Nhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/electrocar/electrocar.component.html":
/*!******************************************************!*\
  !*** ./src/app/electrocar/electrocar.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  electrocar works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/electrocar/electrocar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/electrocar/electrocar.component.ts ***!
  \****************************************************/
/*! exports provided: ElectrocarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElectrocarComponent", function() { return ElectrocarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ElectrocarComponent = /** @class */ (function () {
    function ElectrocarComponent() {
    }
    ElectrocarComponent.prototype.ngOnInit = function () {
    };
    ElectrocarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-electrocar',
            template: __webpack_require__(/*! ./electrocar.component.html */ "./src/app/electrocar/electrocar.component.html"),
            styles: [__webpack_require__(/*! ./electrocar.component.css */ "./src/app/electrocar/electrocar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ElectrocarComponent);
    return ElectrocarComponent;
}());



/***/ }),

/***/ "./src/app/main-data.ts":
/*!******************************!*\
  !*** ./src/app/main-data.ts ***!
  \******************************/
/*! exports provided: ENGINE, RESULT, CAR_AGE, VOLUME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENGINE", function() { return ENGINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESULT", function() { return RESULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAR_AGE", function() { return CAR_AGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VOLUME", function() { return VOLUME; });
var ENGINE = [
    { name: 'Дизель' },
    { name: 'Бензин' },
];
var RESULT = {
    car: { pdv: '', myto: '', zbir: '', vsogo: '', sum: '' },
    electrocar: { pdv: '', myto: '', zbir: '', vsogo: '', sum: '' },
    truck: { pdv: '', myto: '', zbir: '', vsogo: '', sum: '' },
    bus: { pdv: '', myto: '', zbir: '', vsogo: '', sum: '' }
};
var CAR_AGE = [1, 2, 3, 4, 5, 6, 7, 8,];
var VOLUME = [];
for (var i = 0.9; i < 20.1;) {
    VOLUME.push(i);
    i = +(i + 0.1).toFixed(10);
}


/***/ }),

/***/ "./src/app/main.service.ts":
/*!*********************************!*\
  !*** ./src/app/main.service.ts ***!
  \*********************************/
/*! exports provided: MainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainService", function() { return MainService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-data */ "./src/app/main-data.ts");



var MainService = /** @class */ (function () {
    function MainService() {
        this.ages = _main_data__WEBPACK_IMPORTED_MODULE_2__["CAR_AGE"];
        this.engines = _main_data__WEBPACK_IMPORTED_MODULE_2__["ENGINE"];
        this.volumes = _main_data__WEBPACK_IMPORTED_MODULE_2__["VOLUME"];
        this.results = _main_data__WEBPACK_IMPORTED_MODULE_2__["RESULT"];
    }
    MainService.prototype.calk = function (price, volume, engine, age) {
        var stavka;
        if (engine == 'Бензин') {
            if (volume < 3) {
                stavka = 50;
            }
            else {
                stavka = 100;
            }
        }
        else {
            if (volume < 3) {
                stavka = 75;
            }
            else {
                stavka = 150;
            }
        }
        console.log(stavka);
        var pdv = price * 0.2;
        var myto = price * 0.1;
        var zbir = stavka * volume * age;
        this.results.car.pdv = pdv;
        this.results.car.myto = myto;
        this.results.car.zbir = zbir;
        this.results.car.vsogo = pdv + myto + zbir;
        this.results.car.sum = Number(price) + pdv + myto + zbir;
    };
    MainService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainService);
    return MainService;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-tab-group {\r\n    width: 80%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 30px;\r\n  \r\n}\r\n\r\n.blok {\r\n    height: 300px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 16pt;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC10YWItZ3JvdXAge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICBcclxufVxyXG5cclxuLmJsb2sge1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE2cHQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group mat-stretch-tabs class=\"example-stretched-tabs mat-elevation-z4\">\r\n    <mat-tab label=\"Легкові\">\r\n      <div >\r\n      <app-car></app-car>\r\n    </div>\r\n    </mat-tab>\r\n    <mat-tab  label=\"Електро\"> \r\n      <div class=\"blok\">Вибачте, даний розділ на стадії розробки.</div>\r\n    </mat-tab>\r\n    <mat-tab label=\"Мото\">\r\n      <div class=\"blok\">Вибачте, даний розділ на стадії розробки.</div>\r\n    </mat-tab>\r\n    <mat-tab label=\"Автобуси\">\r\n      <div class=\"blok\">Вибачте, даний розділ на стадії розробки.</div>\r\n    </mat-tab>\r\n    <mat-tab label=\"Вантажні\">\r\n      <div class=\"blok\">Вибачте, даний розділ на стадії розробки.</div>\r\n    </mat-tab>\r\n</mat-tab-group>\r\n\r\n\r\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: mapMaterialModules, MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapMaterialModules", function() { return mapMaterialModules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



function mapMaterialModules() {
    return Object.keys(_angular_material__WEBPACK_IMPORTED_MODULE_2__).filter(function (k) {
        var asset = _angular_material__WEBPACK_IMPORTED_MODULE_2__[k];
        return typeof asset == 'function'
            && asset.name.startsWith('Mat')
            && asset.name.includes('Module');
    }).map(function (k) { return _angular_material__WEBPACK_IMPORTED_MODULE_2__[k]; });
}
var modules = mapMaterialModules();
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: modules,
            exports: modules
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/moto/moto.component.css":
/*!*****************************************!*\
  !*** ./src/app/moto/moto.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vdG8vbW90by5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/moto/moto.component.html":
/*!******************************************!*\
  !*** ./src/app/moto/moto.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  moto works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/moto/moto.component.ts":
/*!****************************************!*\
  !*** ./src/app/moto/moto.component.ts ***!
  \****************************************/
/*! exports provided: MotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotoComponent", function() { return MotoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MotoComponent = /** @class */ (function () {
    function MotoComponent() {
    }
    MotoComponent.prototype.ngOnInit = function () {
    };
    MotoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-moto',
            template: __webpack_require__(/*! ./moto.component.html */ "./src/app/moto/moto.component.html"),
            styles: [__webpack_require__(/*! ./moto.component.css */ "./src/app/moto/moto.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MotoComponent);
    return MotoComponent;
}());



/***/ }),

/***/ "./src/app/truck/truck.component.css":
/*!*******************************************!*\
  !*** ./src/app/truck/truck.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RydWNrL3RydWNrLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/truck/truck.component.html":
/*!********************************************!*\
  !*** ./src/app/truck/truck.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  truck works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/truck/truck.component.ts":
/*!******************************************!*\
  !*** ./src/app/truck/truck.component.ts ***!
  \******************************************/
/*! exports provided: TruckComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruckComponent", function() { return TruckComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TruckComponent = /** @class */ (function () {
    function TruckComponent() {
    }
    TruckComponent.prototype.ngOnInit = function () {
    };
    TruckComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-truck',
            template: __webpack_require__(/*! ./truck.component.html */ "./src/app/truck/truck.component.html"),
            styles: [__webpack_require__(/*! ./truck.component.css */ "./src/app/truck/truck.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TruckComponent);
    return TruckComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Project\calk\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map