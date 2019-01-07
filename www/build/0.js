webpackJsonp([0],{

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnedBooksPageModule", function() { return OwnedBooksPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__owned_books__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OwnedBooksPageModule = /** @class */ (function () {
    function OwnedBooksPageModule() {
    }
    OwnedBooksPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__owned_books__["a" /* OwnedBooksPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__owned_books__["a" /* OwnedBooksPage */]),
            ],
        })
    ], OwnedBooksPageModule);
    return OwnedBooksPageModule;
}());

//# sourceMappingURL=owned-books.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OwnedBooksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_need_book_need_book__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_own_book_own_book__ = __webpack_require__(196);
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
 * Generated class for the OwnedBooksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OwnedBooksPage = /** @class */ (function () {
    function OwnedBooksPage(navCtrl, navParams, events, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.modalCtrl = modalCtrl;
        this.mainChoice = true;
        this.events.subscribe('showChoices', function () {
            console.log("this got triggered");
            _this.mainChoice = true;
        });
    }
    OwnedBooksPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OwnedBooksPage');
    };
    OwnedBooksPage.prototype.goToOwnedBooks = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__components_own_book_own_book__["a" /* OwnBookComponent */]);
        this.mainChoice = false;
        modal.present();
    };
    OwnedBooksPage.prototype.goToNeedBooks = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__components_need_book_need_book__["a" /* NeedBookComponent */]);
        this.mainChoice = false;
        modal.present();
    };
    OwnedBooksPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-owned-books',template:/*ion-inline-start:"/Users/wanghui/Desktop/Classes/Textbook-exchange/textbook-exchange/src/pages/owned-books/owned-books.html"*/'<!--\n  Generated template for the OwnedBooksPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>owned-books</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n\n<ion-content padding class = "background-photo">\n<div *ngIf = "mainChoice">\n<h1 class = "header-info">do you wish to register the books you owned or the books you need?</h1>\n<ion-grid class = "need-or-sell">\n	<ion-row>\n		<ion-col><button ion-button class = "button-1" (click) = "goToOwnedBooks()">Owned Textbooks</button></ion-col>\n		<ion-col><button ion-button class = "button-2" (click) = "goToNeedBooks()">Needed Textbooks</button></ion-col>\n	</ion-row>\n</ion-grid>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/wanghui/Desktop/Classes/Textbook-exchange/textbook-exchange/src/pages/owned-books/owned-books.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], OwnedBooksPage);
    return OwnedBooksPage;
}());

//# sourceMappingURL=owned-books.js.map

/***/ })

});
//# sourceMappingURL=0.js.map