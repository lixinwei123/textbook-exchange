webpackJsonp([2],{

/***/ 198:
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
webpackEmptyAsyncContext.id = 198;

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		779,
		1
	],
	"../pages/owned-books/owned-books.module": [
		780,
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
webpackAsyncContext.id = 242;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(104);
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
    HomePage.prototype.goToLogin = function () {
        this.navCtrl.setRoot("LoginPage");
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/kevinli/Desktop/ci103/textbook-exchange/src/pages/home/home.html"*/'<!-- <ion-header class = "background-photo-1" >\n  <ion-navbar >\n    <ion-title >\n      getYourTextBooks.com\n    </ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content padding>\n    <section class="menu cid-riK5pvdtHI" once="menu" id="menu1-1">\n    <nav class="navbar navbar-expand beta-menu navbar-dropdown align-items-center navbar-fixed-top navbar-toggleable-sm">\n        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">\n            <div class="hamburger">\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n            </div>\n        </button>\n        <div class="menu-logo">\n            <div class="navbar-brand">\n                <span class="navbar-logo">\n                    <a href="https://mobirise.co">\n                         <img src="assets/images/logo2.png" alt="Mobirise" style="height: 3.8rem;">\n                    </a>\n                </span>\n                <span class="navbar-caption-wrap"><a class="navbar-caption text-white display-4" href="https://mobirise.co">\n                        GRYTB</a></span>\n            </div>\n        </div>\n        <div class="collapse navbar-collapse" id="navbarSupportedContent">\n            <ul class="navbar-nav nav-dropdown nav-right" data-app-modern-menu="true"><li class="nav-item">\n                    <a class="nav-link link text-white display-4" (click) = "goToLogin();"><span class="mbrib-login mbr-iconfont mbr-iconfont-btn" >Login</span>\n                        </a>\n                </li></ul>\n            \n        </div>\n    </nav>\n</section>\n\n<section class="engine"><a href="https://mobirise.info/m">web design templates</a></section><section class="header12 cid-riK4FWcWrI mbr-fullscreen mbr-parallax-background" id="header12-0">\n\n    \n\n    <div class="mbr-overlay" style="opacity: 0.5; background-color: rgb(35, 35, 35);">\n    </div>\n\n    <div class="container  ">\n            <div class="media-container">\n                <div class="col-md-12 align-center">\n                    <h1 class="mbr-section-title pb-3 mbr-white mbr-bold mbr-fonts-style display-1">getRidOfYourTextBook.com</h1>\n                    <p class="mbr-text pb-3 mbr-white mbr-fonts-style display-5">putting evil publishers out of business, one at a time.</p>\n\n                    <div class="icons-media-container mbr-white">\n                        <div class="card col-12 col-md-6 col-lg-3">\n                            <div class="icon-block">\n                            <a >\n                                <span class="mbr-iconfont mbri-cash"></span>\n                            </a>\n                            </div>\n                            <h5 class="mbr-fonts-style display-5">\n                                Save money</h5>\n                        </div>\n\n                        <div class="card col-12 col-md-6 col-lg-3">\n                            <div class="icon-block">\n                                <a >\n                                    <span class="mbr-iconfont mbri-shopping-cart"></span>\n                                </a>\n                            </div>\n                            <h5 class="mbr-fonts-style display-5">Get more books</h5>\n                        </div>\n\n                        <div class="card col-12 col-md-6 col-lg-3">\n                            <div class="icon-block">\n                                <a >\n                                    <span class="mbr-iconfont mbri-users"></span>\n                                </a>\n                            </div>\n                            <h5 class="mbr-fonts-style display-5">Meet new people</h5>\n                        </div>\n\n                        <div class="card col-12 col-md-6 col-lg-3">\n                            <div class="icon-block">\n                                <a >\n                                    <span class="mbr-iconfont mbri-laptop"></span>\n                                </a>\n                            </div>\n                            <h5 class="mbr-fonts-style display-5">Easy to use</h5>\n                        </div>\n                    </div>\n                </div>\n            </div>\n    </div>\n</section>\n\n<section class="counters4 counters cid-riK6QgZm6D" id="counters4-2">\n\n    \n\n    \n\n    <div class="container pt-4 mt-2">\n        <h2 class="mbr-section-title pb-3 align-center mbr-fonts-style display-2">Why Choose Us</h2>\n        <h3 class="mbr-section-subtitle pb-5 align-center mbr-fonts-style display-5">\n            We are awesome just the way we are</h3>\n        <div class="media-container-row">\n            <div class="media-block m-auto" style="width: 49%;">\n                <div class="mbr-figure">\n                    <img src="assets/images/mbr-1024x682.jpg" alt="" title="">\n                </div>\n            </div>\n            <div class="cards-block">\n                <div class="cards-container">\n                    <div class="card px-3 align-left col-12">\n                        <div class="panel-item p-4 d-flex align-items-start">\n                            <div class="card-img pr-3">\n                                <h3 class="img-text d-flex align-items-center justify-content-center">\n                                    1\n                                </h3>\n                            </div>\n                            <div class="card-text">\n                                <h4 class="mbr-content-title mbr-bold mbr-fonts-style display-7" style = "font-size: 2rem;">Billionaires of users</h4>\n                                <p class="mbr-content-text mbr-fonts-style display-7"  style = "font-size: 1.5rem;">You are guaranteed to find yourself a book buddy who shares the same crusade as you for putting publishers out of business!</p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="card px-3 align-left col-12">\n                        <div class="panel-item p-4 d-flex align-items-start">\n                            <div class="card-img pr-3">\n                                <h3 class="img-text d-flex align-items-center justify-content-center">\n                                    2\n                                </h3>\n                            </div>\n                            <div class="card-text">\n                                <h4 class="mbr-content-title mbr-bold mbr-fonts-style display-7"  style = "font-size: 2rem;">Easy to use</h4>\n                                <p class="mbr-content-text mbr-fonts-style display-7" style = "font-size: 1.5rem;">\n                                    This is so easy use, our state of the art minimalistic design guarantees that you can use it really easily.</p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="card px-3 align-left col-12">\n                        <div class="panel-item p-4 d-flex align-items-start">\n                            <div class="card-img pr-3">\n                                <h3 class="img-text d-flex align-items-center justify-content-center">\n                                    3\n                                </h3>\n                            </div>\n                            <div class="card-text">\n                                <h4 class="mbr-content-title mbr-bold mbr-fonts-style display-7"  style = "font-size: 2rem;">Save money</h4>\n                                <p class="mbr-content-text mbr-fonts-style display-7" style = "font-size: 1.5rem;">You will NEVER have to buy another textbooooook using dis site, give me a fist pump right now. *BROFIST*</p>\n                            </div>\n                        </div>\n                    </div>\n                    \n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/kevinli/Desktop/ci103/textbook-exchange/src/pages/home/home.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { Database } from 'firebase/database';
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
        this.text = "";
        this.password = "";
        this.email = "";
        this.passwordC = "";
        this.emailC = "";
        this.firstname = "";
        this.lastname = "";
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
        //var database = Database.database();
        //var ref = database.ref("ID");
        //ref.on('ID', this.getID, this.err);
        var _this = this;
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (this.password != this.passwordC) {
            this.alertError("Passwords do not match.");
        }
        else if (this.email != this.emailC) {
            this.alertError("Emails do not match.");
        }
        else if (this.password.length < 7) {
            this.alertError("The password should be at least 7 characters long.");
        }
        else if (re.test(String(this.email).toLowerCase()) == false) {
            this.alertError("bad email");
        }
        else if (this.firstname == "") {
            this.alertError("Please enter your first name.");
        }
        else if (this.lastname == "") {
            this.alertError("Please enter your last name.");
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
                _this.restAPI.postRequest(usrInfo, '/createUser').then(function (result) {
                    console.log(result);
                }, function (err) {
                    console.log("error", err);
                });
                _this.closeModal();
            }, function (fail) {
                _this.alertError("invalid information or this email has already been used");
            });
        }
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'register',template:/*ion-inline-start:"/Users/kevinli/Desktop/ci103/textbook-exchange/src/components/register/register.html"*/'<!-- Generated template for the RegisterComponent component -->\n\n<ion-content>\n	\n<button ion-button icon-only (click) = "closeModal();" class = "close-button"><ion-icon name = "close"></ion-icon></button>\n	<h1>Registration</h1>\n	<div class = "input-information">\n		<ion-item>\n		<ion-label floating>Email Address</ion-label>\n		<ion-input type="text" [(ngModel)] = "email"></ion-input>\n		</ion-item>\n		<ion-item>\n		<ion-label floating>Confirm Email Address</ion-label>\n		<ion-input type="text" [(ngModel)] = "emailC"></ion-input>\n		</ion-item>\n		<ion-item>\n		<ion-label floating >Password</ion-label>\n		<ion-input type="password"[(ngModel)] = "password" ></ion-input>\n		</ion-item>\n			<ion-item>\n		<ion-label floating >Confirm Password</ion-label>\n		<ion-input type="password" [(ngModel)] = "passwordC"></ion-input>\n		</ion-item>\n		<ion-item>\n		<ion-label floating>First Name</ion-label>\n		<ion-input type="text" [(ngModel)] = "firstname"></ion-input>\n		</ion-item>\n		<ion-item>\n		<ion-label floating>Last Name</ion-label>\n		<ion-input type="text" [(ngModel)] = "lastname"></ion-input>\n		</ion-item>\n	</div>\n		<div class = "next-step">		\n			<button ion-button (click) = "finishRegistration()">Finish Registration</button>\n		</div>\n</ion-content>\n'/*ion-inline-end:"/Users/kevinli/Desktop/ci103/textbook-exchange/src/components/register/register.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */]])
    ], RegisterComponent);
    return RegisterComponent;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NeedBookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_userinfo_userinfo__ = __webpack_require__(79);
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
    function NeedBookComponent(navCtrl, modalCtrl, viewCtrl, events, alertCtrl, restAPI, usrInfo) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.restAPI = restAPI;
        this.usrInfo = usrInfo;
        this.bookBuy = false;
        this.bookExchange = true;
        this.currentEdit = false; //if currentEdit is false, then addBook function will add a new entry, if it's true, then addbook will modify existing entry.
        console.log("Hello RegisterComponent Component");
        this.text = "Hello World";
        this.getBookArr();
    }
    NeedBookComponent.prototype.getBookArr = function () {
        var _this = this;
        this.neededBooks = this.usrInfo.getNeededBookArray();
        if (this.neededBooks.length <= 0) {
            setTimeout(function (bad) { _this.getBookArr(); }, 1000);
        }
    };
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
        else if (this.bookBuy == true && (this.bookPrice == null || this.bookPrice == 0)) {
            this.showAlert('Invalid price, please enter a valid price');
        }
        else if (String(this.bookISBN).length != 13) {
            this.showAlert('Invalid ISBN number');
        }
        else {
            var method;
            if (this.bookBuy && this.bookExchange) {
                method = 3;
            }
            else if (this.bookBuy) {
                method = 2;
            }
            else {
                method = 1;
            }
            var newBookObj = {
                isbn: this.bookISBN,
                name: this.bookName,
                buy: this.bookBuy,
                exchange: this.bookExchange,
                price: this.bookPrice
            };
            console.log("foobar", this.usrInfo.getUsrId());
            if (!this.bookBuy) {
                this.bookPrice = 0;
            }
            var apiObj = {
                isbn: this.bookISBN,
                bName: this.bookName,
                method: method,
                price: this.bookPrice,
                uid: this.usrInfo.getUsrId()
            };
            if (this.currentEdit) {
                apiObj["oldisbn"] = this.oldISBN;
                console.log("fooo", this.oldISBN);
                this.neededBooks[this.currentIndex] = newBookObj;
                this.postReq(apiObj, '/editNeededBook');
                this.currentEdit = false;
            }
            else {
                this.neededBooks.push(newBookObj);
                this.postReq(apiObj, '/postNeedBook');
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
        for (var i in this.neededBooks) {
            if (this.neededBooks[i].isbn == bookInfo.isbn) {
                this.neededBooks.splice(parseInt(i), 1);
                var obj = {
                    isbn: bookInfo.isbn,
                    uid: this.usrInfo.getUsrId()
                };
                this.postReq(obj, '/deleteNeededBook');
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
    NeedBookComponent.prototype.postReq = function (obj, url) {
        this.restAPI.postRequest(obj, url).then(function (result) {
            console.log(result);
        }, function (err) {
            console.log("error,err");
        });
    };
    NeedBookComponent.prototype.editBook = function (bookInfo) {
        this.currentEdit = true;
        this.bookBuy = bookInfo.buy;
        this.bookExchange = bookInfo.exchange;
        this.bookISBN = bookInfo.isbn;
        this.bookPrice = bookInfo.price;
        this.bookName = bookInfo.name;
        for (var i in this.neededBooks) {
            if (this.neededBooks[i].isbn == bookInfo.isbn) {
                this.oldISBN = this.neededBooks[i].isbn;
                this.currentIndex = parseInt(i);
            }
        }
    };
    NeedBookComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'need-book',template:/*ion-inline-start:"/Users/kevinli/Desktop/ci103/textbook-exchange/src/components/need-book/need-book.html"*/'\n<ion-content>\n<button ion-button icon-only (click) = "closeModal();" class = "close-button"><ion-icon name = "close"></ion-icon></button>\n	<h1>Needed Books</h1>\n	<ion-grid>\n		<h3 style = "margin-left:0.8rem;">Registered Books:</h3>\n		<ion-row style = "margin-top:1rem;">\n			<ion-col>\n				ISBN\n			</ion-col>\n			<ion-col>\n				name\n			</ion-col>\n			<ion-col>\n				options\n			</ion-col>\n		</ion-row>\n		<ion-row *ngFor = "let book of neededBooks">\n			<ion-col>\n				{{book.isbn}}\n			</ion-col>\n			<ion-col>\n				 {{book.name}}\n			</ion-col>			\n			<ion-col>\n				<span *ngIf = "book.exchange" ><ion-icon name = "checkbox" color = "secondary"></ion-icon> Exchange &nbsp; &nbsp;</span>\n				<span *ngIf = "book.buy"> <ion-icon name = "checkbox" ></ion-icon> Buy ${{book.price}}</span> \n				<button ion-button icon-only class = "delete-button" (click) = "confirmDeletion(book)"> <ion-icon name = "close" ></ion-icon></button>\n				<button ion-button icon-only class = "create-button delete-button" (click) = "editBook(book)"> <ion-icon name = "create" ></ion-icon></button>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n	<ion-grid>\n		<ion-row>\n			<ion-col>\n				<ion-input type="text" placeholder = "ISBN" [(ngModel)] = "bookISBN"></ion-input>\n			</ion-col>\n			<ion-col>\n				<ion-input type="text" placeholder = "Book Name" [(ngModel)]="bookName"></ion-input>\n			</ion-col>\n			<ion-col style = "margin:auto;">\n					<span><ion-checkbox color="secondary" checked="true" [(ngModel)] = "bookExchange"></ion-checkbox> Exchange &nbsp; &nbsp;</span>\n					<span><ion-checkbox color="dark" checked="true" [(ngModel)] = "bookBuy"></ion-checkbox> Buy </span>\n					<button ion-button icon-only class = "add-button delete-button" (click) = "addBook()"> \n						<ion-icon name = "add" *ngIf = "!currentEdit"></ion-icon>\n						<ion-icon name = "create" *ngIf = "currentEdit"></ion-icon>\n					</button> \n					<ion-input placeholder = "maximum amount willing to buy" *ngIf = "bookBuy" [(ngModel)] = "bookPrice"></ion-input>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/kevinli/Desktop/ci103/textbook-exchange/src/components/need-book/need-book.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_userinfo_userinfo__["a" /* UserinfoProvider */]])
    ], NeedBookComponent);
    return NeedBookComponent;
}());

//# sourceMappingURL=need-book.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OwnBookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_userinfo_userinfo__ = __webpack_require__(79);
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
    function OwnBookComponent(navCtrl, modalCtrl, viewCtrl, events, alertCtrl, restAPI, usrInfo) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.restAPI = restAPI;
        this.usrInfo = usrInfo;
        this.bookSell = false;
        this.bookExchange = true;
        this.currentEdit = false;
        console.log('Hello RegisterComponent Component');
        this.text = 'Hello World';
        this.getBookArr();
    }
    OwnBookComponent.prototype.getBookArr = function () {
        var _this = this;
        this.ownedBooks = this.usrInfo.getBookArray();
        if (this.ownedBooks.length <= 0) {
            setTimeout(function (bad) { _this.getBookArr(); }, 1000);
        }
    };
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
        else if (this.bookSell == true && (this.bookPrice == null || this.bookPrice == 0)) {
            this.showAlert('Invalid price, please enter a valid price');
        }
        else if (String(this.bookISBN).length != 13) {
            this.showAlert("Invalid ISBN number");
        }
        else {
            var method;
            if (this.bookSell && this.bookExchange) {
                method = 3;
            }
            else if (this.bookSell) {
                method = 2;
            }
            else {
                method = 1;
            }
            var newBookObj = {
                isbn: this.bookISBN,
                name: this.bookName,
                sell: this.bookSell,
                exchange: this.bookExchange,
                price: this.bookPrice
            };
            console.log("foobar", this.usrInfo.getUsrId());
            if (!this.bookSell) {
                this.bookPrice = 0;
            }
            var apiObj = {
                isbn: this.bookISBN,
                bName: this.bookName,
                method: method,
                price: this.bookPrice,
                uid: this.usrInfo.getUsrId()
            };
            if (this.currentEdit) {
                apiObj["oldisbn"] = this.oldISBN;
                console.log("foooo", this.oldISBN);
                this.ownedBooks[this.currentIndex] = newBookObj;
                this.postReq(apiObj, '/editBook');
                this.currentEdit = false;
            }
            else {
                this.ownedBooks.push(newBookObj);
                this.postReq(apiObj, '/postOwnBook');
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
                var obj = {
                    isbn: bookInfo.isbn,
                    uid: this.usrInfo.getUsrId()
                };
                this.postReq(obj, '/deleteBook');
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
    OwnBookComponent.prototype.postReq = function (obj, url) {
        this.restAPI.postRequest(obj, url).then(function (result) {
            console.log(result);
        }, function (err) {
            console.log("error", err);
        });
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
                this.oldISBN = this.ownedBooks[i].isbn;
                this.currentIndex = parseInt(i);
            }
        }
    };
    OwnBookComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'own-book',template:/*ion-inline-start:"/Users/kevinli/Desktop/ci103/textbook-exchange/src/components/own-book/own-book.html"*/'\n<ion-content>\n<button ion-button icon-only (click) = "closeModal();" class = "close-button"><ion-icon name = "close"></ion-icon></button>\n	<h1>Owned Books</h1>\n	<ion-grid>\n		<h3 style = "margin-left:0.8rem;">Registered Books:</h3>\n		<ion-row style = "margin-top:1rem;">\n			<ion-col>\n				ISBN\n			</ion-col>\n			<ion-col>\n				name\n			</ion-col>\n			<ion-col>\n				options\n			</ion-col>\n		</ion-row>\n		<ion-row *ngFor = "let book of ownedBooks">\n			<ion-col>\n				{{book.isbn}}\n			</ion-col>\n			<ion-col>\n				 {{book.name}}\n			</ion-col>\n			<ion-col>\n				<span *ngIf = "book.exchange" ><ion-icon name = "checkbox" color = "secondary"></ion-icon> Exchange &nbsp; &nbsp;</span>\n				<span *ngIf = "book.sell"> <ion-icon name = "checkbox" ></ion-icon> Sell ${{book.price}}</span> \n				<button ion-button icon-only class = "delete-button" (click) = "confirmDeletion(book)"> <ion-icon name = "close" ></ion-icon></button>\n				<button ion-button icon-only class = "create-button delete-button" (click) = "editBook(book)"> <ion-icon name = "create" ></ion-icon></button>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n	<ion-grid>\n		<ion-row>\n			<ion-col>\n				<ion-input type="text" placeholder = "ISBN" [(ngModel)] = "bookISBN"></ion-input>\n			</ion-col>\n			<ion-col>\n				<ion-input type="text" placeholder = "Book Name" [(ngModel)]="bookName"></ion-input>\n			</ion-col>\n			<ion-col style = "margin:auto;">\n					<span><ion-checkbox color="secondary" checked="true" [(ngModel)] = "bookExchange"></ion-checkbox> Exchange &nbsp; &nbsp;</span>\n					<span><ion-checkbox color="dark" checked="true" [(ngModel)] = "bookSell"></ion-checkbox> Sell </span>\n					<button ion-button icon-only class = "add-button delete-button" (click) = "addBook()"> \n						<ion-icon name = "add" *ngIf = "!currentEdit"></ion-icon>\n						<ion-icon name = "create" *ngIf = "currentEdit"></ion-icon>\n					</button> \n					<ion-input placeholder = "minimum amount willing to sell" *ngIf = "bookSell" [(ngModel)] = "bookPrice"></ion-input>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/kevinli/Desktop/ci103/textbook-exchange/src/components/own-book/own-book.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_userinfo_userinfo__["a" /* UserinfoProvider */]])
    ], OwnBookComponent);
    return OwnBookComponent;
}());

//# sourceMappingURL=own-book.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindMatchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_userinfo_userinfo__ = __webpack_require__(79);
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
 * Generated class for the FindMatchComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var FindMatchComponent = /** @class */ (function () {
    function FindMatchComponent(navCtrl, modalCtrl, viewCtrl, events, alertCtrl, restAPI, usrInfo, rest) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.restAPI = restAPI;
        this.usrInfo = usrInfo;
        this.rest = rest;
        console.log('Hello FindMatchComponent Component');
        this.text = 'Hello World';
        this.findExchanger();
        this.findSeller();
        this.findBuyer();
    }
    FindMatchComponent.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
        this.events.publish('showChoices');
        console.log('clicked on closeModal function');
    };
    FindMatchComponent.prototype.findExchanger = function () {
        var _this = this;
        this.exchangerArray = [];
        var user_obj = {
            user_id: this.usrInfo.getUsrId()
        };
        console.log(user_obj);
        this.rest.postRequest(user_obj, "/findExchanger").then(function (success) {
            console.log("success", success);
            //success = JSON.stringify(success);
            success = JSON.parse(success.toString());
            for (var i in success) {
                var exchangerObj = {
                    name: success[i].first_name + " " + success[i].last_name,
                    email: success[i].email,
                    owned_ISBN: success[i].OWNED_ISBN,
                    owned_title: success[i].OWNED_Title,
                    need_ISBN: success[i].NEED_ISBN,
                    need_title: success[i].NEED_Title,
                };
                _this.exchangerArray.push(exchangerObj);
            }
            console.log("omg", _this.exchangerArray);
            return _this.exchangerArray;
        }, function (fail) {
            console.log("fail");
        });
    };
    FindMatchComponent.prototype.findSeller = function () {
        var _this = this;
        this.sellerArray = [];
        var user_obj = {
            user_id: this.usrInfo.getUsrId()
        };
        console.log(user_obj);
        this.rest.postRequest(user_obj, "/findSeller").then(function (success) {
            console.log("success", success);
            success = JSON.parse(success.toString());
            for (var i in success) {
                var sellerObj = {
                    name: success[i].first_name + " " + success[i].last_name,
                    email: success[i].email,
                    need_title: success[i].title,
                    need_ISBN: success[i].ISBN,
                    price: "$ " + success[i].PRICE,
                };
                _this.sellerArray.push(sellerObj);
            }
            console.log("omg", _this.sellerArray);
            return _this.sellerArray;
        }, function (fail) {
            console.log("fail");
        });
    };
    FindMatchComponent.prototype.findBuyer = function () {
        var _this = this;
        this.buyerArray = [];
        var user_obj = {
            user_id: this.usrInfo.getUsrId()
        };
        console.log(user_obj);
        this.rest.postRequest(user_obj, "/findBuyer").then(function (success) {
            console.log("success", success);
            success = JSON.parse(success.toString());
            for (var i in success) {
                var buyerObj = {
                    name: success[i].first_name + " " + success[i].last_name,
                    email: success[i].email,
                    owned_title: success[i].title,
                    owned_ISBN: success[i].ISBN,
                    price: "$ " + success[i].PRICE,
                };
                _this.buyerArray.push(buyerObj);
            }
            console.log("omg", _this.buyerArray);
            return _this.buyerArray;
        }, function (fail) {
            console.log("fail");
        });
    };
    FindMatchComponent.prototype.postReq = function (obj, url) {
        this.restAPI.postRequest(obj, url).then(function (result) {
            console.log(result);
        }, function (err) {
            console.log("error", err);
        });
    };
    FindMatchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'find-match',template:/*ion-inline-start:"/Users/kevinli/Desktop/ci103/textbook-exchange/src/components/find-match/find-match.html"*/'<!-- Generated template for the FindMatchComponent component -->\n<ion-content>\n<button ion-button icon-only (click) = "closeModal();" class = "close-button"><ion-icon name = "close"></ion-icon></button>\n	<h1>Exchange Offer(s):</h1>\n  <ion-list>\n  <ion-grid>\n		<ion-row style = "margin-top:1rem;">\n			<ion-col>\n				Name:\n			</ion-col>\n			<ion-col>\n				Email Address:\n			</ion-col>\n			<ion-col>\n				Title:\n			</ion-col>\n			<ion-col>\n				ISBN:\n			</ion-col>\n			<ion-col>\n				Your Book\'s Title:\n			</ion-col>\n			<ion-col>\n				Your Book\'s ISBN:\n			</ion-col>\n		</ion-row>\n		<ion-row *ngFor = "let exchanger of exchangerArray">\n			<ion-col>\n				{{exchanger.name}}\n			</ion-col>\n			<ion-col>\n				 {{exchanger.email}}\n			</ion-col>\n				<ion-col>\n				 {{exchanger.need_title}}\n			</ion-col>\n				<ion-col>\n				 {{exchanger.need_ISBN}}\n			</ion-col>\n				<ion-col>\n				 {{exchanger.owned_title}}\n			</ion-col>\n				<ion-col>\n				 {{exchanger.owned_ISBN}}\n			</ion-col>\n		</ion-row>\n  </ion-grid>\n  	<h2>Selling Offer(s):</h2>\n  <ion-grid>\n		<ion-row style = "margin-top:1rem;">\n			<ion-col>\n				Name:\n			</ion-col>\n			<ion-col>\n				Email Address:\n			</ion-col>\n			<ion-col>\n				Title:\n			</ion-col>\n			<ion-col>\n				ISBN:\n			</ion-col>\n			<ion-col>\n				Price Offered:\n			</ion-col>\n		</ion-row>\n		<ion-row *ngFor = "let seller of sellerArray">\n			<ion-col>\n				{{seller.name}}\n			</ion-col>\n			<ion-col>\n				{{seller.email}}\n			</ion-col>\n			<ion-col>\n				{{seller.need_title}}\n			</ion-col>\n			<ion-col>\n				{{seller.need_ISBN}}\n			</ion-col>\n			<ion-col>\n				{{seller.price}}\n			</ion-col>\n		</ion-row>\n  </ion-grid>\n   	<h3>Buying Offer(s):</h3>\n  <ion-grid>\n		<ion-row style = "margin-top:1rem;">\n			<ion-col>\n				Name:\n			</ion-col>\n			<ion-col>\n				Email Address:\n			</ion-col>\n			<ion-col>\n				Title:\n			</ion-col>\n			<ion-col>\n				ISBN:\n			</ion-col>\n			<ion-col>\n				Price Offered:\n			</ion-col>\n		</ion-row>\n		<ion-row *ngFor = "let buyer of buyerArray">\n			<ion-col>\n				{{buyer.name}}\n			</ion-col>\n			<ion-col>\n				{{buyer.email}}\n			</ion-col>\n			<ion-col>\n				{{buyer.owned_title}}\n			</ion-col>\n			<ion-col>\n				{{buyer.owned_ISBN}}\n			</ion-col>\n			<ion-col>\n				{{buyer.price}}\n			</ion-col>\n		</ion-row>\n  </ion-grid>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/kevinli/Desktop/ci103/textbook-exchange/src/components/find-match/find-match.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_userinfo_userinfo__["a" /* UserinfoProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]])
    ], FindMatchComponent);
    return FindMatchComponent;
}());

//# sourceMappingURL=find-match.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(403);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(776);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_register_register__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_own_book_own_book__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_need_book_need_book__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_find_match_find_match__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_menu_menu__ = __webpack_require__(777);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_fire__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_fire_auth__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_firebase_config__ = __webpack_require__(778);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_rest_rest__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_userinfo_userinfo__ = __webpack_require__(79);
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





//import { Database } from '@firebase/database';
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
                __WEBPACK_IMPORTED_MODULE_9__components_need_book_need_book__["a" /* NeedBookComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_menu_menu__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_find_match_find_match__["a" /* FindMatchComponent */]
                // RegisterPage
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/owned-books/owned-books.module#OwnedBooksPageModule', name: 'OwnedBooksPage', segment: 'owned-books', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_fire__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_15__app_firebase_config__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_14__angular_fire_auth__["b" /* AngularFireAuthModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__components_register_register__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_own_book_own_book__["a" /* OwnBookComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_need_book_need_book__["a" /* NeedBookComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_find_match_find_match__["a" /* FindMatchComponent */]
                // RegisterPage
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                // HttpClient,
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__providers_rest_rest__["a" /* RestProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_userinfo_userinfo__["a" /* UserinfoProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(104);
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
        this.apiUrl = "http://62696024.ngrok.io";
        console.log('Hello RestProvider Provider');
    }
    RestProvider.prototype.postRequest = function (uObj, method) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + method, uObj, { responseType: 'text' })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestProvider.prototype.getRequest = function (uObj, method) { };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RestProvider);
    return RestProvider;
}());

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 776:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(393);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/kevinli/Desktop/ci103/textbook-exchange/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>\n      Menu\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n  	<menu></menu>\n  </ion-content>\n</ion-menu>\n<ion-nav [root]="rootPage" #content></ion-nav>\n\n\n'/*ion-inline-end:"/Users/kevinli/Desktop/ci103/textbook-exchange/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 777:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_auth__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import {LoginPage} from "../../pages/login/login"
/**
 * Generated class for the MenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var MenuComponent = /** @class */ (function () {
    function MenuComponent(toastCtrl, afAuth, app) {
        this.toastCtrl = toastCtrl;
        this.afAuth = afAuth;
        this.app = app;
        console.log('Hello MenuComponent Component');
        this.text = 'Hello World';
    }
    MenuComponent.prototype.logout = function () {
        var _this = this;
        console.log("clicked");
        this.afAuth.auth.signOut().then(function (success) {
            _this.toastCtrl.create({
                message: "we hope to see you again ... :(",
                duration: 6000
            }).present();
        });
        var nav = this.app.getRootNav();
        nav.setRoot("LoginPage");
    };
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'menu',template:/*ion-inline-start:"/Users/kevinli/Desktop/ci103/textbook-exchange/src/components/menu/menu.html"*/'<!-- Generated template for the MenuComponent component -->\n<div>\n  <ion-list>\n  	<ion-item (click) = "logout();">Logout</ion-item>\n  </ion-list>\n</div>\n'/*ion-inline-end:"/Users/kevinli/Desktop/ci103/textbook-exchange/src/components/menu/menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1__angular_fire_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* App */]])
    ], MenuComponent);
    return MenuComponent;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 778:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CONFIG; });
var FIREBASE_CONFIG = {
    //apiKey: "AIzaSyDeTUSuZDqBDljOC9BbboO_Sw9AyHhhUAw",
    apiKey: "AIzaSyAWt6G5DQopB54KULyf429JVp0B0xb895Y",
    //authDomain: "textbook-exchange-26a49.firebaseapp.com",
    authDomain: "ci103-testplan.firebaseapp.com",
    databaseURL: "https://ci103-testplan.firebaseio.com",
    //databaseURL: "https://textbook-exchange-26a49.firebaseio.com",
    //projectId: "textbook-exchange-26a49",
    projectId: "ci103-testplan",
    //storageBucket: "textbook-exchange-26a49.appspot.com",
    storageBucket: "ci103-testplan.appspot.com",
    //messagingSenderId: "651601817700"
    messagingSenderId: "950851464766"
};
//# sourceMappingURL=app.firebase.config.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserinfoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rest_rest__ = __webpack_require__(56);
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
  Generated class for the UserinfoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserinfoProvider = /** @class */ (function () {
    function UserinfoProvider(http, afAuth, rest) {
        this.http = http;
        this.afAuth = afAuth;
        this.rest = rest;
        console.log('Hello UserinfoProvider Provider');
    }
    UserinfoProvider.prototype.subData = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (data) {
            if (data.uid) {
                _this.setUsrId(data.uid);
                console.log("ok done");
                _this.getOwnedBooks();
                _this.getNeededBooks();
            }
            else {
                console.log("no one logged in yet");
            }
        });
    };
    UserinfoProvider.prototype.getOwnedBooks = function () {
        var _this = this;
        this.bookArray = [];
        var obj = {
            uid: this.getUsrId()
        };
        this.rest.postRequest(obj, "/getOwnedBooks").then(function (success) {
            console.log("success", success);
            //success = JSON.stringify(success);
            success = JSON.parse(success.toString());
            var bookArr = [];
            for (var i in success) {
                var price, sell, exchange;
                if (success[i].PRICE == 0) {
                    price = null;
                }
                else {
                    price = success[i].PRICE;
                }
                if (success[i].METHOD == 1) {
                    sell = false;
                    exchange = true;
                }
                else if (success[i].METHOD == 2) {
                    sell = true;
                    exchange = false;
                }
                else if (success[i].METHOD == 3) {
                    sell = true;
                    exchange = true;
                }
                var bookObj = {
                    isbn: success[i].ISBN,
                    name: success[i].title,
                    price: price,
                    sell: sell,
                    exchange: exchange
                };
                bookArr.push(bookObj);
            }
            _this.bookArray = bookArr;
            console.log("omg", bookArr);
            return bookArr;
        }, function (fail) {
            console.log("fail");
        });
    };
    UserinfoProvider.prototype.getNeededBooks = function () {
        var _this = this;
        this.neededBookArray = [];
        var obj = {
            uid: this.getUsrId()
        };
        this.rest.postRequest(obj, "/getNeededBooks").then(function (success) {
            console.log("success", success);
            success = JSON.parse(success.toString());
            var neededBookArr = [];
            for (var i in success) {
                var price, buy, exchange;
                if (success[i].PRICE == 0) {
                    price = null;
                }
                else {
                    price = success[i].PRICE;
                }
                if (success[i].METHOD == 1) {
                    buy = false;
                    exchange = true;
                }
                else if (success[i].METHOD == 2) {
                    buy = true;
                    exchange = false;
                }
                else if (success[i].METHOD == 3) {
                    buy = true;
                    exchange = true;
                }
                var bookObj = {
                    isbn: success[i].ISBN,
                    name: success[i].title,
                    price: price,
                    buy: buy,
                    exchange: exchange
                };
                neededBookArr.push(bookObj);
            }
            _this.neededBookArray = neededBookArr;
            console.log("omg I know", neededBookArr);
            return neededBookArr;
        }, function (fail) {
            console.log("fail");
        });
    };
    UserinfoProvider.prototype.setUsrId = function (uid) {
        this.uid = uid;
    };
    UserinfoProvider.prototype.getUsrId = function () {
        return this.uid;
    };
    UserinfoProvider.prototype.getBookArray = function () {
        return this.bookArray;
    };
    UserinfoProvider.prototype.getNeededBookArray = function () {
        return this.neededBookArray;
    };
    UserinfoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_3__rest_rest__["a" /* RestProvider */]])
    ], UserinfoProvider);
    return UserinfoProvider;
}());

//# sourceMappingURL=userinfo.js.map

/***/ })

},[398]);
//# sourceMappingURL=main.js.map