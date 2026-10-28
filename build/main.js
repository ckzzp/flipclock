webpackJsonp([0],{

/***/ 112:
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
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
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
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
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
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = [
            { bg: 'yellow', ico_title: 'icon-mobile-ui', title: 'MOBILE UI/UX' },
            { bg: 'orange', ico_title: 'icon-website', title: 'WEBSITE' },
            { bg: 'red', ico_title: 'icon-branding', title: 'BRANDING' }
        ];
        this.service[0];
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"E:\APP Backup\Clock\src\pages\about\about.html"*/'<ion-header no-border>\n    <ion-icon class="icon-back" (click)="goBack()"></ion-icon>\n</ion-header>\n\n\n<ion-content padding align="center">\n      <a href="http://www.creative-era.com" class="logo">\n        <img src="assets/imgs/logo.svg" alt="">\n      </a>\n      <p>We are result driven design fanatic studio. We create innovative UI/UX, Web & Branding design which is precisely handcrafted and balance between functionality and design aesthetics.</p>\n      <ul class="services-list">\n        <li *ngFor="let s of service" class="{{s.bg}}">\n            <ion-icon class="{{s.ico_title}}"></ion-icon><span>{{s.title}}</span>\n        </li>\n      </ul>\n      <a href="http://www.creative-era.com" class="link">www.creative-era.com</a>\n</ion-content>\n'/*ion-inline-end:"E:\APP Backup\Clock\src\pages\about\about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(52);
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
 * Generated class for the ThemesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ThemesPage = (function () {
    function ThemesPage(navCtrl, navParams, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.BC = this.BC;
        this.CL = this.CL;
        this.popup = 'popup';
        this.BCOLOR = [
            { class: 'theme-col avl', theme_bg: 'white', theme_color: 'font_black' },
            { class: 'theme-col avl', theme_bg: 'slate', theme_color: 'font_white' },
            { class: 'theme-col avl', theme_bg: 'black', theme_color: 'font_white' },
            { class: 'theme-col avl', theme_bg: 'blue', theme_color: 'font_black' },
            { class: 'theme-col avl', theme_bg: 'green', theme_color: 'font_black' },
            { class: 'theme-col avl', theme_bg: 'orange', theme_color: 'font_black' },
            { class: 'theme-col avl', theme_bg: 'magenta', theme_color: 'font_white' },
            { class: 'theme-col avl', theme_bg: 'pink', theme_color: 'font_black' },
            { class: 'theme-col avl', theme_bg: 'purple', theme_color: 'font_white' },
        ];
        this.BCOLOR[0];
        this.storage.get('BC').then(function (BC) {
            _this.BC = BC == undefined ? 'white' : BC;
        });
        this.storage.get('CL').then(function (CL) {
            _this.CL = CL == undefined ? 'font_black' : CL;
        });
    }
    ThemesPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad ThemesPage');
    };
    ThemesPage.prototype.goBack = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], {
            BC: this.BC,
            CL: this.CL
        });
    };
    ThemesPage.prototype.ChangeColor = function (event, theme_bg, theme_color) {
        this.BC = event.theme_bg;
        this.CL = event.theme_color;
    };
    ThemesPage.prototype.saveTheme = function () {
        console.log(this.BC);
        this.storage.set('BC', this.BC);
        this.storage.set('CL', this.CL);
    };
    ThemesPage.prototype.resetTheme = function () {
        this.BC = 'black';
        this.CL = 'font_white';
        this.storage.set('BC', this.BC);
        this.storage.set('CL', this.CL);
    };
    ThemesPage.prototype.buyTheme = function () {
        // All features unlocked - popup disabled
    };
    ThemesPage.prototype.popupClose = function () {
        if (this.popup = 'popup open') {
            this.popup = 'popup';
        }
    };
    ThemesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-themes',template:/*ion-inline-start:"E:\APP Backup\Clock\src\pages\themes\themes.html"*/'<ion-header no-border class="{{CL}}">\n    <div class="title-holder">\n      <ion-icon class="icon-back" (click)="goBack($event)"></ion-icon>\n      <h1 class="page-title">themes</h1>\n    </div>\n    <div class="header-btn buyNow"></div>\n</ion-header>\n<ion-content padding class="theme-page-content {{BC}} {{CL}}"> \n  <ion-grid>\n      <ion-row>\n        <ion-col col-4 class="partition">\n          <ion-row>\n            <ion-col *ngFor="let b of BCOLOR" (click)="ChangeColor(b,event,theme_bg,theme_color);" col-4 class="{{b.class}}">\n              <div class="{{b.theme_color}} {{b.theme_bg}}"></div>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n        <ion-col col-8  class="partition">\n            <div class="seconds-holder">\n              <div class="clock"></div>\n              <div class="btn-holder">\n                  <a href="#" (click)="saveTheme();" class="save-btn">Save</a><a (click)="resetTheme()" href="#" class="reset-btn">Reset</a>\n                </div>\n            </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <div class="{{popup}}">\n      <div class="popup-body">\n          <ion-icon class="icon-close" (click)="popupClose()"></ion-icon>\n          <h2>unlock all features</h2>\n          <ul class="byu-listing">\n              <li>\n                  <img src="assets/imgs/remove-add.svg" alt="Remove Add"\n                  ><span>Remover ADS</span>\n              </li>\n              <li>\n                  <img src="assets/imgs/theme_fill.svg" alt="Remove Add"\n                  ><span>All Flip clock Themes</span>\n              </li>\n              <li>\n                  <img src="assets/imgs/new.svg" alt="Remove Add" class="new_f"\n                  ><span>All New features to be\n                      added in future releases</span>\n              </li>\n          </ul>\n          <a href="https://play.google.com/store/apps/details?id=com.digitalDesk.FlipClockPro&hl=en" class="gen-btn">Buy Full Version</a>\n      </div>\n    </div>\n</ion-content>\n\n'/*ion-inline-end:"E:\APP Backup\Clock\src\pages\themes\themes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], ThemesPage);
    return ThemesPage;
}());

//# sourceMappingURL=themes.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(52);
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
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IntroPage = (function () {
    function IntroPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.options = {
            show: false
        };
        this.storage.set('name', 'Max');
    }
    IntroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IntroPage');
    };
    IntroPage.prototype.goBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    IntroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-intro',template:/*ion-inline-start:"E:\APP Backup\Clock\src\pages\intro\intro.html"*/'<!--\n  Generated template for the IntroPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n  <span class="close-intro" (click)="goBack()">Skip</span>\n  <ion-slides pager="true">\n    <ion-slide>\n      <img src="assets/imgs/slider/slider1.svg"/>\n      <h2>Flip Clock</h2>\n      <p>Flip Clock is a Digital Desk Clock with Colorful Clock<br>\n        Themes & Flashlight Feature</p>\n    </ion-slide>\n    <ion-slide>\n      <img src="assets/imgs/slider/slider2.svg"/>\n      <h2>Tourch</h2>\n      <p>Instant handy torch feature will<br>\n        very helpful during the night in emergency</p>\n    </ion-slide>\n    <ion-slide>\n      <img src="assets/imgs/slider/slider3.svg" class="theme-ico"/>\n      <h2>Themes</h2>\n      <p>Various Colorful Clock Themes<br>\n        to give vibrant look to your Flip Clock</p>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"E:\APP Backup\Clock\src\pages\intro\intro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], IntroPage);
    return IntroPage;
}());

//# sourceMappingURL=intro.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(230);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_flashlight__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_admob_free__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_about_about__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_app_rate__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_social_sharing__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_themes_themes__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_android_full_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_intro_intro__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_background_mode__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_local_notifications__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_themes_themes__["a" /* ThemesPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_intro_intro__["a" /* IntroPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_themes_themes__["a" /* ThemesPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_intro_intro__["a" /* IntroPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_flashlight__["a" /* Flashlight */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_admob_free__["a" /* AdMobFree */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_app_rate__["a" /* AppRate */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_android_full_screen__["a" /* AndroidFullScreen */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_background_mode__["a" /* BackgroundMode */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_local_notifications__["a" /* LocalNotifications */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_screen_orientation__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_themes_themes__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_android_full_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_intro_intro__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_background_mode__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_storage__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_admob_free__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, screenOrientation, socialSharing, androidFullScreen, backgroundMode, storage, admob) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.screenOrientation = screenOrientation;
        this.socialSharing = socialSharing;
        this.androidFullScreen = androidFullScreen;
        this.backgroundMode = backgroundMode;
        this.storage = storage;
        this.admob = admob;
        this.message = 'Share a usefull app,Flip clock - Digital clock';
        this.file = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjMzkwYzEwYy1hNzBlLTZjNDctOGY3MC1lNTliMzk1MTY5OGQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEQ5NUEzQ0UyOTA3MTFFOEJERDA4M0ZGRDhBRUE5MDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEQ5NUEzQ0QyOTA3MTFFOEJERDA4M0ZGRDhBRUE5MDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjIxZTdhZGMwLTMyMmEtYzk0ZC04ZTllLWYzMzBlMmMzZjhkZiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpjMzkwYzEwYy1hNzBlLTZjNDctOGY3MC1lNTliMzk1MTY5OGQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6hqNvXAABLjklEQVR42uydB9gWxbXHRwQLqBRBQKlSREHsDQtiwxIV1KjEkmtXMLZ7bVw73muJJvaSxGiQ2BJb1CQqaq6KJYnGEgQJAlakCmIhinr3v3yDy8vb3y2zu7/f88zzwVd2993dM+c/Z86cWem7774zjtPBawO91t9r63uth9c6ea2919p5rYXX1jAAAADx8ZnXvvbafK/N9drHXpvhtWlem+i1N7w2x+UPsJKDAqC314Z6bfum1o33DAAAUsh7XpvQ1B732lQEwIr089rhXjukSQAAAABkDQmAe702zmuT8ywAFL7/UZPj34b3AgAAcsTLTULgLrN0GiEXAmADr53htSO9thrvAAAA5JjFXhvrtZ957e2sCoC+XrvAayO81oxnDgAAsIxvvXaP1y722pSsCID2TR/oeK815xkDAACUZInXfuG1C83S1QWpFAAree1or13ltTY8UwAAgKpZ4LUzvXab1yJx1FEJgB5eu91rO/MMAQAA6uYvXjvKLK0xECpRzMUrq/91nD8AAEDD7NzkUw93WQCs6rVfeu1Or63FMwMAAAiFtZp86y+bfG0ohDUFoNK8f/DaVjwnAACAyPib1/b32kwXBMAArz1mKNkLAAAQByoxvI/X/tnIQRqdAtjWa8/i/AEAAGKjW5Pv3TYpAbCT1570WlueBQAAQKy0bfLBO9V7gHqnAFS7f7xhG14AAIAkWeS13c3SvQUiFwAbe+05r7XmvgMAACTOQq/t6LU3oxQA6zapjC7cbwAAAGf4wGvbNX2tilpyAFbx2gM4fwAAAOeQb/59k68OXQDcaJbO/QMAAIB7yEffVO0vVzsFoBKEd3JvAQAAnOcIr40LQwD0MEvrEFPeFwAAwH0+9dompsIGQpWmALSl769x/gAAAKlBPvv2Jh9etwA4xmtDuJcAAACpYmevHVt2hF9mCmBtr03xWjvuIwAAQOr4xGt9vDav1gjAxTh/AACA1KJywZfUGgHo67WJXmvO/QMAAEgtS7zW3yyN6FcVAbgQ5w8AAJB65MsvqjYCsIHX3jKNbxUMAAAAyfNtUxRgcqUIwH/i/AEAADKDfPoZlSIA7b32ntdW534BAABkhi+91s1rc0tFAI7E+QMAAGQO+fYfl4sATPJaP+4TAABA5lAOwIbFIgBb4PwBAAAyS78mX7+CADiYewMAAJBplvn64BTAv7zWm3sDAACQWaaapeWBl0UAeuH8AQAAMk/vJp+/TADsyT0BAADIBXsGBcAO3A8AAIBcsENQAGzP/QAAAMiPAFASYAfv62zuBwAAQG5YRxGAgdwHAACAXLGpBEB/7gMAAECu2FACYH3uAwAAQK5YXwKgJ/cBAAAgfwJgXe4DAABArugsAdCe+wAAAJArOkgAtOE+AAAA5IrWEgArcx8AAAByRXMVAvqO+wAAAJAvmnELAAAAEAAAAACAAAAAAAAEAAAAACAAAAAAAAEAAAAACAAAAABAAAAAAAACAAAAABAAAAAAgAAAAAAABAAAAAAgAAAAAAABAAAAAAgAAAAAQAAAAAAAAgAAAAAQAAAAAAgAAAAAQAAAAAAAAgAAAAAQAAAAAIAAAAAAAAQAAAAAIAAAAAAAAQAAAAAIAAAAAEAAAAAAAAIAAAAAEAAAAACAAAAAAAAEAAAAACAAAAAAAAEAAAAACAAAAAAEAAAAACAAAAAAAAEAAAAACAAAAABAAAAAAAACAAAAABAAAAAAgAAAAAAABAAAAAAgAAAAAAABAAAAAAgAAAAAQAAAAAAAAgAAAAAQAAAAAIAAAAAAAAQAAAAAAgAAAAAQAAAAAIAAAAAAAAQAAAAAIAAAAAAAAQAAAAAIAAAAAEAAAAAAAAIAAAAAEAAAAACAAAAAAAAEAAAAACAAAAAAoF6a5/0GfPPNN+b//u//zFNPPWX+/ve/mylTpphPPvnELFy4kLcDYmfVVVc1a665punevbvZcMMNzeDBg83QoUNN165dU/U53n//ffP444/7tjVp0iTz7rvvmkWLFpl///vfPGSIndatW5u2bduavn37mi233NLssssuZueddzYrr7xyru/LSt955PGDv/fee+bmm282V1xxhWnTpo3/cugladWqlWnevLnfVlppJb8tu1lF/l/yxlb5s1qOUenvyv28mvOU+p1K56rndxv5Xq33sZHnU+3vBM2o1mspFKTffvut7yi//PJL32kuWLDAbL755mbEiBFm9913b+j4UaJ78OCDD/p29fzzz5t27dr5tiWbWm211fzONtjhWnvCxrCxqG3sq6++Ml9//bVvT3PnzjUfffSR+fjjj81ZZ51lTjrpJNOtWzcEQB6YN2+eueyyy8z111/vj6o6depklixZYj7//HO/09WLog5YrZbOqZ7OoFLHUGuHUsv1VHsN1fy8luuqtXOtt3NqxEkmKQCEdZSKBshxtmzZ0nz22Wdm5syZZv78+ebKK680w4cPd8quxo4da3784x+btdde27crRTF0zV988YVvV7IxiZvCZ4uNYWNx2JjsSX+zyiqr+E02pf9PmzbN/POf/zQjR44055xzjmnfvj0CIKv84he/WKb2unTp4o+s1Cp1TIXfr2e0UM9oo9ZOpdrzVfv9ejqdajqZev+u3tFVPSOqMBx5PR1bKVZffXU/QiVhOnXqVDNs2DBz+umn+442STRVdv7555s77rjDbLDBBqZZs2a+yJagLveMsDFsLGkbkyhYa621zBprrGHeeust8/rrr5ubbrrJHH/88QiArDF69Ghz7bXXmv79+/sjEoWB7Ci/sEOqtwOotYMKq3OqthOo9zOEPfKp9RxRd1DVdkJJht7te9miRQs/tK4QpubV77rrLjNo0KBErknz+0OGDPEF9brrruuHVDVtUe7ZYGPYmGs2JtEqca2vzzzzjDnxxBPN//7v/yIAssJ//dd/mdtuu80focyaNcssXry4ro6pkY4kjPBdvaOMRkOYtRh88G/0atXbOYXx/3o7mTg7oWpGKsF3Uz9XxEojfznbN99809xzzz1+bkCc/PnPfzb77LOPn6iokdScOXNKXjs2ho2lwcY03SZx/dxzz5lDDz3UXH311QiAtHPuueeaW2+91fTp08d8+OGHy8L9hZ2S1F89L32tiUK1hOHqmZurtvMJ4/fqHcEk0TmF1eGE3XFVO89p/62olebTFcVSNEDff+2118yrr77qR7fiYOLEiWbjjTc2AwYM8K/j008/rRi5wMawsTTYmMSs8gAmTJjg57QoXyzLZLoOgOb8r7vuOtOrVy/zwQcf1OX884AMohodGKZWrPactR7TlXsVVqdlv+qccv56h21Gs5araq5d77fmLuPixhtv9AW1ImlhOH9sDBtzxcZkVxoobrrppv57rsEjEYAUomzpDh06mIEDB/rhyXKJfmGECmv9+0bDlLWOBGqZOw0z8zqszxHWMaIaVVQ74qjl+LbZVSlqcv622ex6LbVT4t2xxx5rxowZE6ldXXjhhX6nqFCpBEiljhUbw8bSaGPy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';
        this.url = 'https://play.google.com/store/apps/details?id=com.ionic.flipClock&hl=en';
        this.subject = "Share a usefull app";
        this.rootPage = this.rootPage;
        this.popup = 'popup';
        // ADS REMOVED (unlocked)
        // background-mode: native-only, skipped in PWA
        platform.ready().then(function () {
            // PWA build: open the clock directly, skip native plugins
            _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        });
    }
    MyApp.prototype.showBanner = function () {
        var bannerConfig = {
            // isTesting: true, // Remove in production
            autoShow: true,
            id: 'ca-app-pub-1929919118556351/3430419604'
        };
        this.admob.banner.config(bannerConfig);
        this.admob.banner.prepare().then(function () {
            // success
        }).catch(function (e) { return console.log(e); });
    };
    MyApp.prototype.showBannerIND = function () {
        var bannerConfig = {
            // isTesting: true, // Remove in production
            autoShow: true,
            id: 'ca-app-pub-1929919118556351/8320200464'
        };
        this.admob.interstitial.config(bannerConfig);
        this.admob.interstitial.prepare().then(function () {
            // success
        }).catch(function (e) { return console.log(e); });
    };
    MyApp.prototype.goAbout = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */]);
    };
    MyApp.prototype.rating = function () {
        // PWA: open store link in new tab
        window.open('https://play.google.com/store/apps/details?id=com.ionic.flipClock&hl=en', '_blank');
    };
    MyApp.prototype.share = function () {
        if (navigator.share) {
            navigator.share({ title: this.subject, text: this.message, url: this.url }).catch(function () {});
        } else {
            window.open(this.url, '_blank');
        }
    };
    MyApp.prototype.goIntro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__pages_intro_intro__["a" /* IntroPage */]);
    };
    MyApp.prototype.goThemes = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pages_themes_themes__["a" /* ThemesPage */]);
    };
    MyApp.prototype.buyTheme = function () {
        // All features unlocked - popup disabled
    };
    MyApp.prototype.popupClose = function () {
        if (this.popup = 'popup open') {
            this.popup = 'popup';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\APP Backup\Clock\src\app\app.html"*/'<ion-menu [content]="content" side="right" type="push">\n<div class="menu-padding">\n    <h2 class="menu-title">Settings</h2>\n    <ul class="menu-listing">\n        <li menuClose (click)="goThemes()">\n            <a>\n                <span class="start">\n                    <ion-icon class="icon-theme"></ion-icon\n                    ><span>Themes</span>\n                </span>\n                <!-- <ion-icon class="icon-right-arrow"></ion-icon> -->\n            </a>\n        </li>\n        <li menuClose (click)="rating()">\n            <a href="https://play.google.com/store/apps/details?id=com.digitalDesk.FlipClockPro&hl=en">\n                <span class="start">\n                    <ion-icon class="icon-rating"></ion-icon\n                    ><span>Rate Us</span>\n                </span>\n                <!-- <ion-icon class="icon-right-arrow"></ion-icon> -->\n            </a>\n        </li>\n        <li menuClose (click)="share()">\n            <a>\n                <span class="start">\n                    <ion-icon class="icon-share"></ion-icon\n                    ><span>Share</span>\n                </span>\n                <!-- <ion-icon class="icon-right-arrow"></ion-icon> -->\n            </a>\n        </li>\n        <li menuClose (click)="goAbout()">\n            <a>\n                <span class="start">\n                    <ion-icon class="icon-info"></ion-icon\n                    ><span>About us</span>\n                </span>\n                <!-- <ion-icon class="icon-right-arrow"></ion-icon> -->\n            </a>\n        </li>\n        <li menuClose (click)="goIntro()">\n            <a>\n                <span class="start">\n                    <ion-icon class="icon-help"></ion-icon\n                    ><span>Help</span>\n                </span>\n                <!-- <ion-icon class="icon-right-arrow"></ion-icon> -->\n            </a>\n        </li>\n    </ul>\n    <!-- <footer>\n            <div class="contact-det">\n                <a class="icon-call" href="tel:+91 7405 286 990">+91 7405 286 990</a>\n                <a class="icon-email" href="mailto:hello@creative-era.com">hello@creative-era.com</a>\n            </div>\n            <ul class="socials">\n                <li *ngFor="let Soc of socials"><a href="{{Soc.links}}"><img src="assets/imgs/{{Soc.socImage}}" alt=""></a></li>\n            </ul>\n    </footer> -->\n</div>\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n<div class="{{popup}}">\n    <div class="popup-body">\n        <ion-icon class="icon-close" (click)="popupClose()"></ion-icon>\n        <h2>unlock all features</h2>\n        <ul class="byu-listing">\n            <li>\n                <img src="assets/imgs/remove-add.svg" alt="Remove Add"\n                ><span>Remover ADS</span>\n            </li>\n            <li>\n                <img src="assets/imgs/theme_fill.svg" alt="Remove Add"\n                ><span>All Flip clock Themes</span>\n            </li>\n            <li>\n                <img src="assets/imgs/new.svg" alt="Remove Add" class="new_f"\n                ><span>All New features to be\n                    added in future releases</span>\n            </li>\n        </ul>\n        <a href="https://play.google.com/store/apps/details?id=com.digitalDesk.FlipClockPro&hl=en" class="gen-btn">Buy Full Version</a>\n    </div>\n</div>\n'/*ion-inline-end:"E:\APP Backup\Clock\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_android_full_screen__["a" /* AndroidFullScreen */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_background_mode__["a" /* BackgroundMode */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_admob_free__["a" /* AdMobFree */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_flashlight__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, flashlight, modalCtrl, plt, storage, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.flashlight = flashlight;
        this.modalCtrl = modalCtrl;
        this.plt = plt;
        this.storage = storage;
        this.navParams = navParams;
        this.popup = 'popup';
        this.BC = this.BC;
        this.CL = this.CL;
        // Schedule delayed notification
        this.storage.get('BC').then(function (BC) {
            _this.BC = BC;
            // console.log(this.BC)
        });
        this.storage.get('CL').then(function (CL) {
            _this.CL = CL;
            // console.log(this.CL)
        });
        this.BC = this.navParams.get('BC');
        this.CL = this.navParams.get('CL');
    }
    HomePage.prototype.torch = function () {
        this.plt.is('cordova') ? this.flashlight.toggle() : null;
    };
    HomePage.prototype.getActive = function () {
        if (this.showActive) {
            return "icon-tourch_on";
        }
        else {
            return "icon-tourch_off";
        }
    };
    HomePage.prototype.buyTheme = function () {
        // All features unlocked - popup disabled
    };
    HomePage.prototype.popupClose = function () {
        if (this.popup = 'popup open') {
            this.popup = 'popup';
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\APP Backup\Clock\src\pages\home\home.html"*/'<ion-content class="padding {{BC}} {{CL}}"align="center" >\n    <div class="time-stamp">\n        <span class="hour"></span>:<span class="min"></span><span class="AMPM"></span>\n    </div>\n    <ion-icon class="icon-setting" menuToggle></ion-icon>\n    <div class="clock-holder">\n        <div class="middle-area">\n            <div class="date-row"><span class="date">12</span> <span class="month">march</span><span class="year">2018</span><span class="day">monday</span></div>\n            <div>\n                <div class="clock"></div>\n            </div>\n        </div>\n    </div>\n    <ion-icon class="icon-ad" (click)="buyTheme()"></ion-icon>\n    <ion-icon [ngClass]="getActive()" (click)="showActive = !showActive;torch()" ></ion-icon> \n    <!-- <ion-icon class="icon-tourch_off tourch" (click)="torch()" ></ion-icon>  -->\n    <!-- <ion-icon class="icon-alarm_of" (click)="openAlarm()"></ion-icon> -->\n    <div class="{{popup}}">\n        <div class="popup-body">\n            <ion-icon class="icon-close" (click)="popupClose()"></ion-icon>\n            <h2>unlock all features</h2>\n            <ul class="byu-listing">\n                <li>\n                    <img src="assets/imgs/remove-add.svg" alt="Remove Add"\n                    ><span>Remover ADS</span>\n                </li>\n                <li>\n                    <img src="assets/imgs/theme_fill.svg" alt="Remove Add"\n                    ><span>All Flip clock Themes</span>\n                </li>\n                <li>\n                    <img src="assets/imgs/new.svg" alt="Remove Add" class="new_f"\n                    ><span>All New features to be\n                        added in future releases</span>\n                </li>\n            </ul>\n            <a href="https://play.google.com/store/apps/details?id=com.digitalDesk.FlipClockPro&hl=en" class="gen-btn">Buy Full Version</a>\n        </div>\n    </div>\n</ion-content>   '/*ion-inline-end:"E:\APP Backup\Clock\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_flashlight__["a" /* Flashlight */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.js.map