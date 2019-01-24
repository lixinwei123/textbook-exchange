webpackJsonp([2],{

/***/ 196:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 196;

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		776,
		1
	],
	"../pages/owned-books/owned-books.module": [
		777,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 240;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestProvider = /** @class */ (function () {
    function RestProvider(http) {
        this.http = http;
        this.apiUrl = "http://f16190f8.ngrok.io";
        console.log('Hello RestProvider Provider');
    }
    RestProvider.prototype.addUser = function (uObj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/createUser', uObj, { responseType: 'text' })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], RestProvider);
    return RestProvider;
    var _a;
}());

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { HttpClientModule } from "@angular/common/http"; 
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
    }
    HomePage.prototype.makeRequest = function () {
        this.req = this.http.get('http://f16190f8.ngrok.io/posts');
        this.req.subscribe(function (data) {
            console.log("data", data);
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/wanghui/Desktop/Classes/Textbook-exchange/textbook-exchange/src/pages/home/home.html"*/'<ion-header class = "background-photo-1" >\n  <ion-navbar >\n    <ion-title >\n      getYourTextBooks.com\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  The world is your oyster.\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n  </p>\n\n  <button ion-button (click) = "makeRequest();">request</button>\n</ion-content>\n\n'/*ion-inline-end:"/Users/wanghui/Desktop/Classes/Textbook-exchange/textbook-exchange/src/pages/home/home.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(348);
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
 * Generated class for the RegisterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(navCtrl, modalCtrl, viewCtrl, events, afAuth, alertCtrl, restAPI) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.events = events;
        this.afAuth = afAuth;
        this.alertCtrl = alertCtrl;
        this.restAPI = restAPI;
        console.log('Hello RegisterComponent Component');
        this.text = 'Hello World';
    }
    RegisterComponent.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
        this.events.publish('showLoginCard');
        console.log('clicked on closeModal function');
    };
    RegisterComponent.prototype.alertError = function (error) {
        var alert = this.alertCtrl.create({
            title: error
        });
        alert.present();
    };
    RegisterComponent.prototype.finishRegistration = function () {
        var _this = this;
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (this.password != this.passwordC) {
            this.alertError("passwords do not match");
        }
        else if (this.email != this.emailC) {
            this.alertError("email do not match");
        }
        else if (this.password.length < 7) {
            this.alertError("password must be 6 characters long");
        }
        else if (re.test(String(this.email).toLowerCase()) == false) {
            this.alertError("bad email");
        }
        else {
            var result = this.afAuth.auth.createUserWithEmailAndPassword(this.email, this.password).then(function (res) {
                var usrInfo = {
                    uid: res.user.uid,
                    email: _this.email,
                    firstname: _this.firstname,
                    lastname: _this.lastname
                };
                console.log("registered", res.user.uid);
                _this.restAPI.addUser(usrInfo).then(function (result) {
                    console.log(result);
                }, function (err) {
                    console.log("error", err);
                });
            });
            this.closeModal();
        }
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'register',template:/*ion-inline-start:"/Users/wanghui/Desktop/Classes/Textbook-exchange/textbook-exchange/src/components/register/register.html"*/'<!-- Generated template for the RegisterComponent component -->\n\n<ion-content>\n<button ion-button icon-only (click) = "closeModal();" class = "close-button"><ion-icon name = "close"></ion-icon></button>\n	<h1>Registration</h1>\n	<div class = "input-information">\n		<ion-item>\n		<ion-label floating>Email Address</ion-label>\n		<ion-input type="text" [(ngModel)] = "email"></ion-input>\n		</ion-item>\n		<ion-item>\n		<ion-label floating>Confirm Email Address</ion-label>\n		<ion-input type="text" [(ngModel)] = "emailC"></ion-input>\n		</ion-item>\n		<ion-item>\n		<ion-label floating >Password</ion-label>\n		<ion-input type="password"[(ngModel)] = "password" ></ion-input>\n		</ion-item>\n			<ion-item>\n		<ion-label floating >Confirm Password</ion-label>\n		<ion-input type="password" [(ngModel)] = "passwordC"></ion-input>\n		</ion-item>\n		<ion-item>\n		<ion-label floating>First Name</ion-label>\n		<ion-input type="text" [(ngModel)] = "firstname"></ion-input>\n		</ion-item>\n		<ion-item>\n		<ion-label floating>Last Name</ion-label>\n		<ion-input type="text" [(ngModel)] = "lastname"></ion-input>\n		</ion-item>\n	</div>\n		<div class = "next-step">		\n			<button ion-button (click) = "finishRegistration()">Finish Registration</button>\n		</div>\n</ion-content>\n'/*ion-inline-end:"/Users/wanghui/Desktop/Classes/Textbook-exchange/textbook-exchange/src/components/register/register.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */]])
    ], RegisterComponent);
    return RegisterComponent;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NeedBookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NeedBookComponent = /** @class */ (function () {
    function NeedBookComponent(navCtrl, modalCtrl, viewCtrl, events, alertCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.bookBuy = false;
        this.bookExchange = true;
        this.currentEdit = false; //if currentEdit is false, then addBook function will add a new entry, if it's true, then addbook will modify existing entry.
        //below is hardcoded fake data for testing purpose only
        this.ownedBooks = [{ isbn: 1931283412831, name: "Conception of Mind", buy: true, exchange: true, price: 21 },
            { isbn: 1838407937423, name: "Calculus Fundamentals 101", buy: true, exchange: false, price: 34 },
            { isbn: 9534241410034, name: "Art History and Man Kind 221", buy: false, exchange: true }
        ];
    }
    NeedBookComponent.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
        this.events.publish('showChoices');
        console.log('clicked on closeModal function');
    };
    //ADD ENTRY OR MODIFY CURRENT ENTRY BASED ON THE BOOLEAN VARIABLE 
    NeedBookComponent.prototype.addBook = function () {
        if (!this.bookISBN || !this.bookName) {
            this.showAlert('you are missing either the ISBN or the name');
        }
        else if (!this.bookExchange && !this.bookBuy) {
            this.showAlert('Please select at least one option for handling your book');
        }
        else if (this.bookISBN.toString().length || Number.isInteger(this.bookISBN) == false) {
            this.showAlert('Invalid ISBN number');
        }
        else {
            var newBookObj = {
                isbn: this.bookISBN,
                name: this.bookName,
                buy: this.bookBuy,
                exchange: this.bookExchange,
                price: this.bookPrice
            };
            if (this.currentEdit) {
                this.ownedBooks[this.currentIndex] = newBookObj;
                this.currentEdit = false;
            }
            else {
                this.ownedBooks.push(newBookObj);
            }
            this.bookISBN = null;
            this.bookName = "";
            this.bookExchange = true;
            this.bookBuy = false;
            this.bookPrice = null;
        }
    };
    NeedBookComponent.prototype.deleteBook = function (bookInfo) {
        console.log("bookInfo", bookInfo);
        for (var i in this.ownedBooks) {
            if (this.ownedBooks[i].isbn == bookInfo.isbn) {
                console.log("hii", i);
                this.ownedBooks.splice(parseInt(i), 1);
            }
        }
    };
    NeedBookComponent.prototype.showAlert = function (alertMessage) {
        var alertCtrl = this.alertCtrl.create({
            title: alertMessage,
            buttons: [
                {
                    text: "got it",
                    role: "cancel"
                }
            ]
        });
        alertCtrl.present();
    };
    //POP CONFIRMATION OF DELETION
    NeedBookComponent.prototype.confirmDeletion = function (bookInfo) {
        var _this = this;
        var alertCtrl = this.alertCtrl.create({
            title: "are you sure you want to delete this entry?",
            buttons: [
                {
                    text: "delete",
                    role: "ok",
                    handler: function () {
                        _this.deleteBook(bookInfo);
                    }
                },
                {
                    text: "cancel",
                    role: "cancel",
                }
            ]
        });
        alertCtrl.present();
    };
    NeedBookComponent.prototype.editBook = function (bookInfo) {
        this.currentEdit = true;
        this.bookBuy = bookInfo.buy;
        this.bookExchange = bookInfo.exchange;
        this.bookISBN = bookInfo.isbn;
        this.bookPrice = bookInfo.price;
        this.bookName = bookInfo.name;
        for (var i in this.ownedBooks) {
            if (this.ownedBooks[i].isbn == bookInfo.isbn) {
                this.currentIndex = i;
            }
        }
    };
    NeedBookComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'need-book',template:/*ion-inline-start:"/Users/wanghui/Desktop/Classes/Textbook-exchange/textbook-exchange/src/components/need-book/need-book.html"*/'\n<ion-content>\n<button ion-button icon-only (click) = "closeModal();" class = "close-button"><ion-icon name = "close"></ion-icon></button>\n	<h1>Needed Books</h1>\n	<ion-grid>\n		<h3 style = "margin-left:0.8rem;">Registered Books:</h3>\n		<ion-row style = "margin-top:1rem;">\n			<ion-col>\n				ISBN\n			</ion-col>\n			<ion-col>\n				name\n			</ion-col>\n			<ion-col>\n				options\n			</ion-col>\n		</ion-row>\n		<ion-row *ngFor = "let book of ownedBooks">\n			<ion-col>\n				{{book.isbn}}\n			</ion-col>\n			<ion-col>\n				 {{book.name}}\n			</ion-col>\n			<ion-col>\n				<span *ngIf = "book.exchange" ><ion-icon name = "checkbox" color = "secondary"></ion-icon> Exchange &nbsp; &nbsp;</span>\n				<span *ngIf = "book.buy"> <ion-icon name = "checkbox" ></ion-icon> Buy ${{book.price}}</span> \n				<button ion-button icon-only class = "delete-button" (click) = "confirmDeletion(book)"> <ion-icon name = "close" ></ion-icon></button>\n				<button ion-button icon-only class = "create-button delete-button" (click) = "editBook(book)"> <ion-icon name = "create" ></ion-icon></button>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n	<ion-grid>\n		<ion-row>\n			<ion-col>\n				<ion-input type="text" placeholder = "ISBN" [(ngModel)] = "bookISBN"></ion-input>\n			</ion-col>\n			<ion-col>\n				<ion-input type="text" placeholder = "Book Name" [(ngModel)]="bookName"></ion-input>\n			</ion-col>\n			<ion-col style = "margin:auto;">\n					<span><ion-checkbox color="secondary" checked="true" [(ngModel)] = "bookExchange"></ion-checkbox> Exchange &nbsp; &nbsp;</span>\n					<span><ion-checkbox color="dark" checked="true" [(ngModel)] = "bookBuy"></ion-checkbox> Buy </span>\n					<button ion-button icon-only class = "add-button delete-button" (click) = "addBook()"> \n						<ion-icon name = "add" *ngIf = "!currentEdit"></ion-icon>\n						<ion-icon name = "create" *ngIf = "currentEdit"></ion-icon>\n					</button> \n					<ion-input placeholder = "maximum amount willing to buy" *ngIf = "bookBuy" [(ngModel)] = "bookPrice"></ion-input>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/wanghui/Desktop/Classes/Textbook-exchange/textbook-exchange/src/components/need-book/need-book.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], NeedBookComponent);
    return NeedBookComponent;
}());

//# sourceMappingURL=need-book.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OwnBookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
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
 * Generated class for the RegisterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var OwnBookComponent = /** @class */ (function () {
    function OwnBookComponent(navCtrl, modalCtrl, viewCtrl, events, alertCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.bookSell = false;
        this.bookExchange = true;
        this.currentEdit = false;
        this.ownedBooks = [{ isbn: 1931283412831, name: "Conception of Mind", sell: true, exchange: true, price: 46 },
            { isbn: 1838407937423, name: "Calculus Fundamentals 101", sell: true, exchange: false, price: 57 },
            { isbn: 9534241410034, name: "Art History and Man Kind 221", sell: false, exchange: true, price: 88 }
        ];
        console.log('Hello RegisterComponent Component');
        this.text = 'Hello World';
    }
    OwnBookComponent.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
        this.events.publish('showChoices');
        console.log('clicked on closeModal function');
    };
    OwnBookComponent.prototype.addBook = function () {
        if (!this.bookISBN || !this.bookName) {
            this.showAlert('you are missing either the ISBN or the name');
        }
        else if (!this.bookExchange && !this.bookSell) {
            this.showAlert('Please select at least one option for handling your book');
        }
        else {
            var newBookObj = {
                isbn: this.bookISBN,
                name: this.bookName,
                sell: this.bookSell,
                exchange: this.bookExchange,
                price: this.bookPrice
            };
            if (this.currentEdit) {
                this.ownedBooks[this.currentIndex] = newBookObj;
                this.currentEdit = false;
            }
            else {
                this.ownedBooks.push(newBookObj);
            }
            this.bookISBN = null;
            this.bookName = "";
            this.bookExchange = true;
            this.bookSell = false;
            this.bookPrice = null;
        }
    };
    OwnBookComponent.prototype.deleteBook = function (bookInfo) {
        console.log("bookInfo", bookInfo);
        for (var i in this.ownedBooks) {
            if (this.ownedBooks[i].isbn == bookInfo.isbn) {
                this.ownedBooks.splice(parseInt(i), 1);
            }
        }
    };
    OwnBookComponent.prototype.showAlert = function (alertMessage) {
        var alertCtrl = this.alertCtrl.create({
            title: alertMessage,
            buttons: [
                {
                    text: "got it",
                    role: "cancel"
                }
            ]
        });
        alertCtrl.present();
    };
    OwnBookComponent.prototype.confirmDeletion = function (bookInfo) {
        var _this = this;
        var alertCtrl = this.alertCtrl.create({
            title: "are you sure you want to delete this entry?",
            buttons: [
                {
                    text: "delete",
                    role: "ok",
                    handler: function () {
                        _this.deleteBook(bookInfo);
                    }
                },
                {
                    text: "cancel",
                    role: "cancel",
                }
            ]
        });
        alertCtrl.present();
    };
    OwnBookComponent.prototype.editBook = function (bookInfo) {
        this.currentEdit = true;
        this.bookSell = bookInfo.sell;
        this.bookExchange = bookInfo.exchange;
        this.bookISBN = bookInfo.isbn;
        this.bookPrice = bookInfo.price;
        this.bookName = bookInfo.name;
        for (var i in this.ownedBooks) {
            if (this.ownedBooks[i].isbn == bookInfo.isbn) {
                this.currentIndex = parseInt(i);
            }
        }
    };
    OwnBookComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'own-book',template:/*ion-inline-start:"/Users/wanghui/Desktop/Classes/Textbook-exchange/textbook-exchange/src/components/own-book/own-book.html"*/'\n<ion-content>\n<button ion-button icon-only (click) = "closeModal();" class = "close-button"><ion-icon name = "close"></ion-icon></button>\n	<h1>Owned Books</h1>\n	<ion-grid>\n		<h3 style = "margin-left:0.8rem;">Registered Books:</h3>\n		<ion-row style = "margin-top:1rem;">\n			<ion-col>\n				ISBN\n			</ion-col>\n			<ion-col>\n				name\n			</ion-col>\n			<ion-col>\n				options\n			</ion-col>\n		</ion-row>\n		<ion-row *ngFor = "let book of ownedBooks">\n			<ion-col>\n				{{book.isbn}}\n			</ion-col>\n			<ion-col>\n				 {{book.name}}\n			</ion-col>\n			<ion-col>\n				<span *ngIf = "book.exchange" ><ion-icon name = "checkbox" color = "secondary"></ion-icon> Exchange &nbsp; &nbsp;</span>\n				<span *ngIf = "book.sell"> <ion-icon name = "checkbox" ></ion-icon> Sell ${{book.price}}</span> \n				<button ion-button icon-only class = "delete-button" (click) = "confirmDeletion(book)"> <ion-icon name = "close" ></ion-icon></button>\n				<button ion-button icon-only class = "create-button delete-button" (click) = "editBook(book)"> <ion-icon name = "create" ></ion-icon></button>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n	<ion-grid>\n		<ion-row>\n			<ion-col>\n				<ion-input type="text" placeholder = "ISBN" [(ngModel)] = "bookISBN"></ion-input>\n			</ion-col>\n			<ion-col>\n				<ion-input type="text" placeholder = "Book Name" [(ngModel)]="bookName"></ion-input>\n			</ion-col>\n			<ion-col style = "margin:auto;">\n					<span><ion-checkbox color="secondary" checked="true" [(ngModel)] = "bookExchange"></ion-checkbox> Exchange &nbsp; &nbsp;</span>\n					<span><ion-checkbox color="dark" checked="true" [(ngModel)] = "bookSell"></ion-checkbox> Sell </span>\n					<button ion-button icon-only class = "add-button delete-button" (click) = "addBook()"> \n						<ion-icon name = "add" *ngIf = "!currentEdit"></ion-icon>\n						<ion-icon name = "create" *ngIf = "currentEdit"></ion-icon>\n					</button> \n					<ion-input placeholder = "minimum amount willing to sell" *ngIf = "bookSell" [(ngModel)] = "bookPrice"></ion-input>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/wanghui/Desktop/Classes/Textbook-exchange/textbook-exchange/src/components/own-book/own-book.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], OwnBookComponent);
    return OwnBookComponent;
}());

//# sourceMappingURL=own-book.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(401);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(774);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_register_register__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_own_book_own_book__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_need_book_need_book__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_fire__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_fire_auth__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_firebase_config__ = __webpack_require__(775);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_rest_rest__ = __webpack_require__(348);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// import { HTTP } from '@ionic-native/http';
// import { HttpClient } from '@angular/common/http';
//import { HttpModule } from '@angular/http';

// import {RegisterPage} from '../pages/register/register';
// import {LoginPage} from '../pages/login/login';




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__components_register_register__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_own_book_own_book__["a" /* OwnBookComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_need_book_need_book__["a" /* NeedBookComponent */]
                // RegisterPage
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/owned-books/owned-books.module#OwnedBooksPageModule', name: 'OwnedBooksPage', segment: 'owned-books', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_fire__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_13__app_firebase_config__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_12__angular_fire_auth__["b" /* AngularFireAuthModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__components_register_register__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_own_book_own_book__["a" /* OwnBookComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_need_book_need_book__["a" /* NeedBookComponent */]
                // RegisterPage
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                // HttpClient,
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__providers_rest_rest__["a" /* RestProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 774:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(392);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/wanghui/Desktop/Classes/Textbook-exchange/textbook-exchange/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/wanghui/Desktop/Classes/Textbook-exchange/textbook-exchange/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 775:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CONFIG; });
var FIREBASE_CONFIG = {
    apiKey: "AIzaSyDeTUSuZDqBDljOC9BbboO_Sw9AyHhhUAw",
    authDomain: "textbook-exchange-26a49.firebaseapp.com",
    databaseURL: "https://textbook-exchange-26a49.firebaseio.com",
    projectId: "textbook-exchange-26a49",
    storageBucket: "textbook-exchange-26a49.appspot.com",
    messagingSenderId: "651601817700"
};
//# sourceMappingURL=app.firebase.config.js.map

/***/ })

},[396]);
//# sourceMappingURL=main.js.map