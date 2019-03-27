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

/***/ "./src/app/add-player/add-player.component.css":
/*!*****************************************************!*\
  !*** ./src/app/add-player/add-player.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1wbGF5ZXIvYWRkLXBsYXllci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/add-player/add-player.component.html":
/*!******************************************************!*\
  !*** ./src/app/add-player/add-player.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6\">\n  <h2 class=\"text-center\">Choose your Teams</h2>\n\n  <p> Enter your nick name, email and  Choose 4 teams check the View Team Points to choose</p>\n\n  <form>\n    <div class=\"form-group\">\n      <label for=\"playerName\">PlayerName:</label>\n      <input [(ngModel)]=\"player.playerName\"   #pn=\"ngModel\" placeholder=\"PlayerName\" name=\"playerName\" class=\"form-control\" id=\"playerName\" required>\n    </div>\n\t\n\t<div class=\"md-errors-spacer\" [hidden]=\"pn.valid || pn.untouched\">\n            <div  *ngIf=\"pn.errors && pn.errors.required\">\n                Player Name is required\n            </div>\n            <div  *ngIf=\"pn.errors && pn.errors.pattern\">\n                Player Name is invalid\n            </div>\n    </div>\n\n\n    <div class=\"form-group\">\n      <label for=\"email\">Email:</label>\n      <input [(ngModel)]=\"player.email\" placeholder=\"Email\" name=\"Email\" class=\"form-control\" id=\"email\" #contactemail=\"ngModel\" required\n                pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\">\n    </div>\n\t\n\t<div class=\"md-errors-spacer\" [hidden]=\"contactemail.valid || contactemail.untouched\">\n            <div  *ngIf=\"contactemail.errors && contactemail.errors.required\">\n                Email is required\n            </div>\n            <div  *ngIf=\"contactemail.errors && contactemail.errors.pattern\">\n                Email is invalid\n            </div>\n    </div>\n\n\n    <p-pickList  [source]=\"team\" [target]=\"teamTgt\" sourceHeader=\"Available Team\" targetHeader=\"Selected Team\" (onMoveToTarget)=\"addTeamTrgt($event)\" [disabled]=\"disablePl\">\n      <ng-template let-t pTemplate=\"item\">\n        <div class=\"ui-helper-clearfix\">\n          <div style=\"font-size:14px;float:right;margin:15px 5px 0 0\">{{t.name}}</div>\n        </div>\n      </ng-template>\n    </p-pickList>\n\n    <button class=\"btn btn-success\" (click)=\"createPlayer()\" [disabled]=\"!disablePl\">Create</button>\n\n\n  </form>\n\n  <p style=\"font-size:1vw;\">\n    Game Rule:\n\t</p>\n<ul>\n  <li>  Score are calculted on the below rules:</li>\n\n  <li> WIN   - if your team win the game you get the win points added to your score</li>\n <li> LOSE  -  if your team lose the game you lose the points from your score</li>\n  <li> DRAW  - if your team draw the game you get the win points added to your score </li>\n  <li> BONUS - if your team Enter top 4 you get the bonus points added to your score  </li>\n\n    <li> Check the View Team Points for individual team points</li>\n\n  <li>  Let us see if you end as Top Player </li>\n\n</ul>\t\n  \n</div>\n"

/***/ }),

/***/ "./src/app/add-player/add-player.component.ts":
/*!****************************************************!*\
  !*** ./src/app/add-player/add-player.component.ts ***!
  \****************************************************/
/*! exports provided: AddPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPlayerComponent", function() { return AddPlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_http_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/http-client.service */ "./src/app/service/http-client.service.ts");



var AddPlayerComponent = /** @class */ (function () {
    function AddPlayerComponent(httpClientService) {
        this.httpClientService = httpClientService;
        this.team = [];
        this.teamTgt = [];
        this.player = new _service_http_client_service__WEBPACK_IMPORTED_MODULE_2__["Player"]("", "", "", "", []);
        this.disablePl = false;
    }
    AddPlayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.disablePl = false;
        this.httpClientService.getTeam().subscribe(function (response) { return _this.handleSuccessfulResponse(response); });
    };
    AddPlayerComponent.prototype.createPlayer = function () {
        if (this.teamTgt.length == 4) {
            var i;
            for (i = 0; i < this.teamTgt.length; i++) {
                this.player.teamLst.push(this.teamTgt[i].teamId);
            }
            this.httpClientService.createPlayer(this.player)
                .subscribe(function (data) {
                alert("Team created successfully.");
            });
        }
    };
    ;
    AddPlayerComponent.prototype.handleSuccessfulResponse = function (response) {
        this.team = response;
    };
    AddPlayerComponent.prototype.addTeamTrgt = function (event) {
        var target = event.items;
        if (this.teamTgt.length == 4) {
            this.disablePl = true;
        }
        else if (this.teamTgt.length > 4) {
            this.team = this.teamTgt;
            this.teamTgt = [];
        }
    };
    AddPlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-player',
            template: __webpack_require__(/*! ./add-player.component.html */ "./src/app/add-player/add-player.component.html"),
            styles: [__webpack_require__(/*! ./add-player.component.css */ "./src/app/add-player/add-player.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_http_client_service__WEBPACK_IMPORTED_MODULE_2__["HttpClientService"]])
    ], AddPlayerComponent);
    return AddPlayerComponent;
}());



/***/ }),

/***/ "./src/app/addteam/addteam.component.css":
/*!***********************************************!*\
  !*** ./src/app/addteam/addteam.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZHRlYW0vYWRkdGVhbS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/addteam/addteam.component.html":
/*!************************************************!*\
  !*** ./src/app/addteam/addteam.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6\">\n<input type=\"password\" [(ngModel)]=\"pass\" class=\"form-control\" id=\"password\">\n<button class=\"btn btn-success\" (click)=\"check()\">Create</button>\n</div>\n\n<ng-template [ngIf]=\"display == 'true'\" >\n<div class=\"col-md-6\">\n  <h2 class=\"text-center\">Add Team</h2>\n  <form>\n    <div class=\"form-group\">\n      <label for=\"name\">Name:</label>\n      <input type=\"name\" [(ngModel)]=\"team.name\" placeholder=\"Name\" name=\"name\" class=\"form-control\" id=\"name\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"win\">Win:</label>\n      <input [(ngModel)]=\"team.win\" placeholder=\"Win\" name=\"designation\" class=\"form-control\" id=\"win\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"lose\">Lose</label>\n      <input [(ngModel)]=\"team.lose\" placeholder=\"Lose\" name=\"Lose\" class=\"form-control\" id=\"lose\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"lose\">Draw</label>\n      <input [(ngModel)]=\"team.draw\" placeholder=\"Draw\" name=\"Draw\" class=\"form-control\" id=\"draw\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"bonus\">Bonus</label>\n      <input [(ngModel)]=\"team.bonus\" placeholder=\"Bonus\" name=\"Bonus\" class=\"form-control\" id=\"bonus\">\n    </div>\n\n    <button class=\"btn btn-success\" (click)=\"createTeam()\">Create</button>\n  </form>\n</div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/addteam/addteam.component.ts":
/*!**********************************************!*\
  !*** ./src/app/addteam/addteam.component.ts ***!
  \**********************************************/
/*! exports provided: AddteamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddteamComponent", function() { return AddteamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_http_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/http-client.service */ "./src/app/service/http-client.service.ts");



var AddteamComponent = /** @class */ (function () {
    function AddteamComponent(httpClientService) {
        this.httpClientService = httpClientService;
        this.team = new _service_http_client_service__WEBPACK_IMPORTED_MODULE_2__["Team"]("", "", "", "", "", "");
        this.display = "false";
        this.pass = "";
    }
    AddteamComponent.prototype.ngOnInit = function () {
    };
    AddteamComponent.prototype.createTeam = function () {
        this.httpClientService.createTeam(this.team)
            .subscribe(function (data) {
            alert("Team created successfully.");
        });
    };
    ;
    AddteamComponent.prototype.check = function () {
        if (this.pass == "xbox") {
            this.display = "true";
        }
        else {
            this.display = "false";
        }
    };
    ;
    AddteamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addteam',
            template: __webpack_require__(/*! ./addteam.component.html */ "./src/app/addteam/addteam.component.html"),
            styles: ["../node_modules/primeicons/primeicons.css", "../node_modules/primeng/resources/themes/nova-light/theme.css", "../node_modules/primeng/resources/primeng.min.css", __webpack_require__(/*! ./addteam.component.css */ "./src/app/addteam/addteam.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_http_client_service__WEBPACK_IMPORTED_MODULE_2__["HttpClientService"]])
    ], AddteamComponent);
    return AddteamComponent;
}());



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
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./team/team.component */ "./src/app/team/team.component.ts");
/* harmony import */ var _addteam_addteam_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addteam/addteam.component */ "./src/app/addteam/addteam.component.ts");
/* harmony import */ var _add_player_add_player_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-player/add-player.component */ "./src/app/add-player/add-player.component.ts");
/* harmony import */ var _leader_leader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./leader/leader.component */ "./src/app/leader/leader.component.ts");
/* harmony import */ var _updatescore_updatescore_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./updatescore/updatescore.component */ "./src/app/updatescore/updatescore.component.ts");








var routes = [
    { path: 'viewTeam', component: _team_team_component__WEBPACK_IMPORTED_MODULE_3__["TeamComponent"] },
    { path: 'addTeam', component: _addteam_addteam_component__WEBPACK_IMPORTED_MODULE_4__["AddteamComponent"] },
    { path: 'addPlayer', component: _add_player_add_player_component__WEBPACK_IMPORTED_MODULE_5__["AddPlayerComponent"] },
    { path: 'updateScore', component: _updatescore_updatescore_component__WEBPACK_IMPORTED_MODULE_7__["UpdatescoreComponent"] },
    { path: '', component: _leader_leader_component__WEBPACK_IMPORTED_MODULE_6__["LeaderComponent"] }
];
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

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
        this.title = 'league';
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./team/team.component */ "./src/app/team/team.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _addteam_addteam_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./addteam/addteam.component */ "./src/app/addteam/addteam.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _add_player_add_player_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add-player/add-player.component */ "./src/app/add-player/add-player.component.ts");
/* harmony import */ var primeng_orderlist__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/orderlist */ "./node_modules/primeng/orderlist.js");
/* harmony import */ var primeng_orderlist__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_orderlist__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_picklist__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/picklist */ "./node_modules/primeng/picklist.js");
/* harmony import */ var primeng_picklist__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_picklist__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _leader_leader_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./leader/leader.component */ "./src/app/leader/leader.component.ts");
/* harmony import */ var _updatescore_updatescore_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./updatescore/updatescore.component */ "./src/app/updatescore/updatescore.component.ts");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _team_team_component__WEBPACK_IMPORTED_MODULE_5__["TeamComponent"],
                _addteam_addteam_component__WEBPACK_IMPORTED_MODULE_7__["AddteamComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                _add_player_add_player_component__WEBPACK_IMPORTED_MODULE_11__["AddPlayerComponent"],
                _leader_leader_component__WEBPACK_IMPORTED_MODULE_15__["LeaderComponent"],
                _updatescore_updatescore_component__WEBPACK_IMPORTED_MODULE_16__["UpdatescoreComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                primeng_orderlist__WEBPACK_IMPORTED_MODULE_12__["OrderListModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_13__["TableModule"],
                primeng_picklist__WEBPACK_IMPORTED_MODULE_14__["PickListModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " .footer {\r\n    position: absolute;\r\n    bottom: 0;\r\n    width:100%;\r\n    height: 40px;\r\n    background-color: #222222;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFDO0lBQ0csa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsWUFBWTtJQUNaLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAuZm9vdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  \n\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n\n\n    <div class=\"navbar\">\n     <a  routerLink=\"/\" >Top Player</a>\n     <a  routerLink=\"/addPlayer\" >Register</a>\n     <a  routerLink=\"/viewTeam\" >View Team Points</a>\n     <a  routerLink=\"/updateScore\" >Update Score</a>\n\t    <a  routerLink=\"/addTeam\" >Add New Team</a>\n    </div>\n\n</header>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/leader/leader.component.css":
/*!*********************************************!*\
  !*** ./src/app/leader/leader.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xlYWRlci9sZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/leader/leader.component.html":
/*!**********************************************!*\
  !*** ./src/app/leader/leader.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-table [value]=\"player\">\n  <ng-template pTemplate=\"header\">\n    <tr>\n      <th>name</th>\n      <th>score</th>\n      <th>Team</th>\n    </tr>\n  </ng-template>\n  <ng-template pTemplate=\"body\" let-t>\n    <tr>\n      <td>{{t.playerName}}</td>\n      <td>{{t.score}}</td>\n      <td>\n\n        <div *ngFor=\"let kk of  t.teamLst\">\n            <div *ngFor=\"let ts of team\">\n\n              <div *ngIf=\"ts.teamId == kk \">\n               <!-- Key: <b>{{ts.teamId}}</b> and Value: <b>{{ts.name}}</b>\n              {{kk}}-->\n                <b>{{ts.name}}</b>\n              </div>\n\n            </div>\n        </div>\n\n\n\n       </td>\n      </tr>\n  </ng-template>\n</p-table>\n"

/***/ }),

/***/ "./src/app/leader/leader.component.ts":
/*!********************************************!*\
  !*** ./src/app/leader/leader.component.ts ***!
  \********************************************/
/*! exports provided: LeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderComponent", function() { return LeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_http_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/http-client.service */ "./src/app/service/http-client.service.ts");



var LeaderComponent = /** @class */ (function () {
    function LeaderComponent(httpClientService) {
        this.httpClientService = httpClientService;
    }
    LeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpClientService.getTeam().subscribe(function (response) { return _this.handleSuccessfulResponseTeam(response); });
        this.httpClientService.getPlayer().subscribe(function (response) { return _this.handleSuccessfulResponse(response); });
    };
    LeaderComponent.prototype.handleSuccessfulResponseTeam = function (response) {
        this.team = response;
    };
    LeaderComponent.prototype.handleSuccessfulResponse = function (response) {
        this.player = response;
    };
    LeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leader',
            template: __webpack_require__(/*! ./leader.component.html */ "./src/app/leader/leader.component.html"),
            styles: [__webpack_require__(/*! ./leader.component.css */ "./src/app/leader/leader.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_http_client_service__WEBPACK_IMPORTED_MODULE_2__["HttpClientService"]])
    ], LeaderComponent);
    return LeaderComponent;
}());



/***/ }),

/***/ "./src/app/service/http-client.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/http-client.service.ts ***!
  \************************************************/
/*! exports provided: Team, Player, Scorer, HttpClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Team", function() { return Team; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scorer", function() { return Scorer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientService", function() { return HttpClientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var Team = /** @class */ (function () {
    function Team(teamId, name, win, lose, bonus, draw) {
        this.teamId = teamId;
        this.name = name;
        this.win = win;
        this.lose = lose;
        this.bonus = bonus;
        this.draw = draw;
    }
    return Team;
}());

var Player = /** @class */ (function () {
    function Player(playId, playerName, email, score, teamLst) {
        this.playId = playId;
        this.playerName = playerName;
        this.email = email;
        this.score = score;
        this.teamLst = teamLst;
    }
    return Player;
}());

var Scorer = /** @class */ (function () {
    function Scorer(teamId, status) {
        this.teamId = teamId;
        this.status = status;
    }
    return Scorer;
}());

var HttpClientService = /** @class */ (function () {
    function HttpClientService(httpClient) {
        this.httpClient = httpClient;
    }
    HttpClientService.prototype.getTeam = function () {
        return this.httpClient.get('https://league-ipl.herokuapp.com/team');
    };
    HttpClientService.prototype.getPlayer = function () {
        return this.httpClient.get('https://league-ipl.herokuapp.com/players');
    };
    HttpClientService.prototype.createTeam = function (team) {
        return this.httpClient.post("https://league-ipl.herokuapp.com/addteam", team);
    };
    HttpClientService.prototype.createPlayer = function (player) {
        return this.httpClient.post("https://league-ipl.herokuapp.com/addplayers", player);
    };
    HttpClientService.prototype.updateScore = function (scorer) {
        return this.httpClient.post("https://league-ipl.herokuapp.com/scorecalc", scorer);
    };
    HttpClientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpClientService);
    return HttpClientService;
}());



/***/ }),

/***/ "./src/app/team/team.component.css":
/*!*****************************************!*\
  !*** ./src/app/team/team.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlYW0vdGVhbS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/team/team.component.html":
/*!******************************************!*\
  !*** ./src/app/team/team.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-table [value]=\"team\">\n  <ng-template pTemplate=\"header\">\n    <tr>\n      <th>name</th>\n      <th>win</th>\n      <th>lose</th>\n      <th>draw</th>\n      <th>bonus</th>\n    </tr>\n  </ng-template>\n  <ng-template pTemplate=\"body\" let-t>\n    <tr>\n      <td>{{t.name}}</td>\n      <td>{{t.win}}</td>\n      <td>{{t.lose}}</td>\n      <td>{{t.draw}}</td>\n      <td>{{t.bonus}}</td>\n    </tr>\n  </ng-template>\n</p-table>\n"

/***/ }),

/***/ "./src/app/team/team.component.ts":
/*!****************************************!*\
  !*** ./src/app/team/team.component.ts ***!
  \****************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_http_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/http-client.service */ "./src/app/service/http-client.service.ts");



var TeamComponent = /** @class */ (function () {
    function TeamComponent(httpClientService) {
        this.httpClientService = httpClientService;
    }
    TeamComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpClientService.getTeam().subscribe(function (response) { return _this.handleSuccessfulResponse(response); });
    };
    TeamComponent.prototype.handleSuccessfulResponse = function (response) {
        this.team = response;
    };
    TeamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-team',
            template: __webpack_require__(/*! ./team.component.html */ "./src/app/team/team.component.html"),
            styles: [__webpack_require__(/*! ./team.component.css */ "./src/app/team/team.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_http_client_service__WEBPACK_IMPORTED_MODULE_2__["HttpClientService"]])
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "./src/app/updatescore/updatescore.component.css":
/*!*******************************************************!*\
  !*** ./src/app/updatescore/updatescore.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZXNjb3JlL3VwZGF0ZXNjb3JlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/updatescore/updatescore.component.html":
/*!********************************************************!*\
  !*** ./src/app/updatescore/updatescore.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6\">\n<input type=\"password\" [(ngModel)]=\"pass\" class=\"form-control\" id=\"password\">\n<button class=\"btn btn-success\" (click)=\"check()\">Create</button>\n</div>\n\n<ng-template [ngIf]=\"display == 'true'\" >\n<div class=\"col-md-6\">\n  <h2 class=\"text-center\">Update Score</h2>\n  <form>\n    <div class=\"form-group\">\n      <label for=\"teamId\">Team Id:</label>\n      <input [(ngModel)]=\"scorer.teamId\" placeholder=\"TeamId\" name=\"teamId\" class=\"form-control\" id=\"teamId\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"status\">Status:</label>\n      <input [(ngModel)]=\"scorer.status\" placeholder=\"Status\" name=\"status\" class=\"form-control\" id=\"status\">\n    </div>\n\n    <button class=\"btn btn-success\" (click)=\"updateScore()\" >Update</button>\n\n\n  </form>\n</div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/updatescore/updatescore.component.ts":
/*!******************************************************!*\
  !*** ./src/app/updatescore/updatescore.component.ts ***!
  \******************************************************/
/*! exports provided: UpdatescoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatescoreComponent", function() { return UpdatescoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_http_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/http-client.service */ "./src/app/service/http-client.service.ts");



var UpdatescoreComponent = /** @class */ (function () {
    function UpdatescoreComponent(httpClientService) {
        this.httpClientService = httpClientService;
        this.scorer = new _service_http_client_service__WEBPACK_IMPORTED_MODULE_2__["Scorer"]("", "");
        this.display = "false";
        this.pass = "";
    }
    UpdatescoreComponent.prototype.ngOnInit = function () {
    };
    UpdatescoreComponent.prototype.updateScore = function () {
        this.httpClientService.updateScore(this.scorer)
            .subscribe(function (data) {
            alert("Score Updated successfully.");
        });
    };
    UpdatescoreComponent.prototype.check = function () {
        if (this.pass == "xbox") {
            this.display = "true";
        }
        else {
            this.display = "false";
        }
    };
    ;
    UpdatescoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-updatescore',
            template: __webpack_require__(/*! ./updatescore.component.html */ "./src/app/updatescore/updatescore.component.html"),
            styles: [__webpack_require__(/*! ./updatescore.component.css */ "./src/app/updatescore/updatescore.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_http_client_service__WEBPACK_IMPORTED_MODULE_2__["HttpClientService"]])
    ], UpdatescoreComponent);
    return UpdatescoreComponent;
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

module.exports = __webpack_require__(/*! D:\workspaces\league-game\src\main\webapp\league\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map