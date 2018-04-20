webpackJsonp([0],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPage = (function () {
    function LoginPage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.config = { server: "http://enumera.altamirasoftware.com/enumerando", area: "rsa", username: "enumerando", password: "" };
        if (localStorage.getItem("config") != null) {
            this.config = JSON.parse(localStorage.getItem("config"));
        }
        /*
         this.config = this.storage.get("config");
         if (this.config === null){
           this.config = {server: "http://customers.cloud1.enumera.net", username:"nome", password:""};
         }
         */
    }
    LoginPage.prototype.saveConfig = function () {
        //this.storage.set("config", "ciao");
        console.log(this.config);
        localStorage.setItem("config", JSON.stringify(this.config));
        this.presentAlert();
        console.log(localStorage.getItem("config"));
    };
    LoginPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Information',
            subTitle: 'The data has been saved correctly. Please, restart application',
            buttons: ['Ok']
        });
        alert.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\altamira\progetti_ionic\rsa\src\pages\login\login.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Login\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page5">\n  <form id="login-form1">\n    <ion-list id="login-list2">\n      <ion-item id="login-input1">\n        <ion-label stacked>\n          Server\n        </ion-label>\n        <ion-input type="text" required [(ngModel)]="config.server" name="server"></ion-input>\n      </ion-item>\n      <ion-item id="login-input3">\n        <ion-label stacked>\n          Area\n        </ion-label>\n        <ion-input type="text" required [(ngModel)]="config.area" name="area"></ion-input>\n      </ion-item>\n      <ion-item id="login-input4">\n        <ion-label stacked>\n          Username\n        </ion-label>\n        <ion-input type="text" required [(ngModel)]="config.username" name="username"></ion-input>\n      </ion-item>\n      <ion-item id="login-input2">\n        <ion-label stacked>\n          Password\n        </ion-label>\n        <ion-input type="password" [(ngModel)]="config.password" name="password"></ion-input>\n      </ion-item>\n    </ion-list>\n    <div class="spacer" style="height:40px;" id="login-spacer1"></div>\n    <button id="login-button1" ion-button color="stable" block (click)=\'saveConfig()\'>\n      Log in\n    </button>\n  </form>\n</ion-content>'/*ion-inline-end:"C:\altamira\progetti_ionic\rsa\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 113:
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
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 156:
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
webpackEmptyAsyncContext.id = 156;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackingSystemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_enumera_request__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TrackingSystemPage = (function () {
    function TrackingSystemPage(navCtrl, enumeraService, loadingController, params, alertCtrl, inappbrowser) {
        this.navCtrl = navCtrl;
        this.enumeraService = enumeraService;
        this.loadingController = loadingController;
        this.params = params;
        this.alertCtrl = alertCtrl;
        this.inappbrowser = inappbrowser;
        this.search3 = '';
        this.search1 = "";
        this.search2 = "";
        this.search3 = "";
    }
    TrackingSystemPage.prototype.getdata = function (search1, search2, search3) {
        var _this = this;
        this.showLoading();
        this.enumeraService.requestStr = 'prgname=getLottoProduzione&param[cod_articolo]=' + this.search1 + '&param[cod_lotto]=' + this.search2;
        this.enumeraService.doRequest();
        this.enumeraService.getDataSet().subscribe(function (result) {
            if (result != null) {
                if (result["error"] != 'auth-error' && result["error"] != null) {
                    _this.presentAlert('Attenzione', result["error"]);
                }
                else if (result["error"] != 'auth-error') {
                    _this.items = result;
                    _this.matricole = _this.items[0].matricole;
                    _this.documenti = _this.items[0].documenti;
                }
                else {
                    _this.presentAlert("Attenzione", "Utente non autorizzato a questa funzione. Contattare il customer service per l'attivazione");
                }
            }
        }, function (err) {
            console.error("Error : " + err);
        }, function () {
            console.log('getData completed');
            console.log(_this.items);
            //this.loading.dismiss();
            _this.hideLoading();
        });
    };
    TrackingSystemPage.prototype.showLoading = function () {
        var _this = this;
        this.loading = this.loadingController.create({
            content: "Please wait..."
        });
        this.loading.present();
        setTimeout(function () {
            _this.loading.dismiss();
        }, 20000);
    };
    TrackingSystemPage.prototype.hideLoading = function () {
        this.loading.dismiss();
    };
    TrackingSystemPage.prototype.presentAlert = function (titolo, messaggio) {
        var alert = this.alertCtrl.create({
            title: titolo,
            subTitle: messaggio,
            buttons: ['Ok']
        });
        alert.present();
    };
    TrackingSystemPage.prototype.scaricaFile = function (documento) {
        var browser = this.inappbrowser.create(documento.url, '_blank', 'location:yes');
    };
    TrackingSystemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tracking-system',template:/*ion-inline-start:"C:\altamira\progetti_ionic\rsa\src\pages\tracking-system\tracking-system.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Tracking System\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="pagets">\n  \n  <ion-card>\n      <ion-card-header>\n          Filtri di ricerca\n        </ion-card-header>\n      <ion-card-content>\n          <ion-row>\n            <ion-col col-8>            \n              <ion-input placeholder="articolo" type="text" [(ngModel)]="search1" name="search1"></ion-input>\n            </ion-col>\n            <ion-col col-4>\n              <ion-input value=" AC" readonly=true type="text"></ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-4>\n              <ion-input value="5076750-" readonly=true type="text"></ion-input>\n            </ion-col>\n            <ion-col col-8>\n              <ion-input placeholder="lotto" type="text" [(ngModel)]="search2" name="search2"></ion-input>\n            </ion-col>\n        </ion-row>      \n        <button ion-button outline block (click)="getdata(search1,search2)">Ricerca</button>\n    \n    </ion-card-content>  \n</ion-card>\n  <ion-list ion-item text-wrap *ngFor="let item of items">\n            <h2>Lotto: {{item.cod_lotto}}</h2>\n            <h3>Articolo: {{item.cod_articolo}}</h3>\n            <p>Descrizione: {{item.descr_articolo}}</p>\n            <p>Data emissione: {{item.data_emissione}}</p>\n            <p>Qta prevista: {{item.qta_prevista}}</p>\n            <p>Qta prodotta: {{item.qta_prodotta}}</p>\n            <p>Qta residua: {{item.qta_residua}}</p>\n            <p>Qta scartata: {{item.qta_scartata}}</p>\n  </ion-list>            \n      <ion-item-group>\n      <ion-item-divider color="light">Documenti scaricabili</ion-item-divider>\n      <button ion-item text-wrap *ngFor="let documento of documenti" (click)="scaricaFile(documento)">\n              <ion-icon item-start *ngIf = "documento.estensione === \'pdf\'" name="document"></ion-icon>\n              <ion-icon item-start *ngIf = "documento.estensione != \'pdf\'" name="image"></ion-icon>\n              {{documento.nome}}\n      </button>        \n    </ion-item-group>\n    <ion-item-group>\n      <ion-item-divider color="light">Pezzi prodotti</ion-item-divider>    \n      <ion-item ion-item text-wrap *ngFor="let matricola of matricole">\n              <h2>{{matricola.matricola}}</h2>\n              <p>{{matricola.stato}}</p>\n              <p *ngIf = "matricola.stato == \'Venduta\'">Cliente: {{matricola.cliente}}</p>\n      </ion-item>  \n    </ion-item-group>           \n\n</ion-content>'/*ion-inline-end:"C:\altamira\progetti_ionic\rsa\src\pages\tracking-system\tracking-system.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_enumera_request__["a" /* EnumeraService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], TrackingSystemPage);
    return TrackingSystemPage;
}());

//# sourceMappingURL=tracking-system.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CertificatiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_enumera_request__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CertificatiPage = (function () {
    function CertificatiPage(navCtrl, enumeraService, loadingController, inappbrowser, alertCtrl) {
        this.navCtrl = navCtrl;
        this.enumeraService = enumeraService;
        this.loadingController = loadingController;
        this.inappbrowser = inappbrowser;
        this.alertCtrl = alertCtrl;
        this.getdata('');
    }
    CertificatiPage.prototype.getdata = function (folder) {
        var _this = this;
        this.showLoading();
        this.enumeraService.requestStr = 'prgname=getEnuCertificati&param[folder]=' + folder;
        this.enumeraService.doRequest();
        this.enumeraService.getDataSet().subscribe(function (result) {
            if (result != null) {
                if (result["error"] != 'auth-error') {
                    _this.items = result;
                }
                else {
                    _this.presentAlert("Attenzione", "Utente non autorizzato a questa funzione. Contattare il customer service per l'attivazione");
                }
            }
            // console.log(result);
        }, function (err) {
            console.error("Error : " + err);
        }, function () {
            console.log('getData completed');
            //this.loading.dismiss();
            _this.hideLoading();
        });
    };
    CertificatiPage.prototype.showLoading = function () {
        var _this = this;
        this.loading = this.loadingController.create({
            content: "Please wait..."
        });
        this.loading.present();
        setTimeout(function () {
            _this.loading.dismiss();
        }, 2000);
    };
    CertificatiPage.prototype.hideLoading = function () {
        this.loading.dismiss();
    };
    CertificatiPage.prototype.subDir = function (item) {
        if (item.tipo == 'D') {
            this.getdata(item.nome);
        }
        else {
            this.download(item);
        }
        ;
    };
    CertificatiPage.prototype.download = function (item) {
        var browser = this.inappbrowser.create(item.url, '_blank', 'location=yes');
    };
    CertificatiPage.prototype.presentAlert = function (titolo, messaggio) {
        var alert = this.alertCtrl.create({
            title: titolo,
            subTitle: messaggio,
            buttons: ['Ok']
        });
        alert.present();
    };
    CertificatiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-certificati',template:/*ion-inline-start:"C:\altamira\progetti_ionic\rsa\src\pages\certificati\certificati.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Certificati\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page3">\n  <ion-list id="certificati-list3">\n      <button ion-item text-wrap *ngFor="let item of items" (click)="subDir(item)">\n        \n          <ion-row>\n            <ion-col width-80><h2>{{item.nome}}</h2>\n            <p>{{item.anno}}</p>\n            </ion-col>\n           <ion-col>\n            <ion-badge item-right></ion-badge>\n            </ion-col>\n          </ion-row>\n        </button>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\altamira\progetti_ionic\rsa\src\pages\certificati\certificati.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_enumera_request__["a" /* EnumeraService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], CertificatiPage);
    return CertificatiPage;
}());

//# sourceMappingURL=certificati.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MagazzinoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_enumera_request__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__articolo_articolo__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MagazzinoPage = (function () {
    function MagazzinoPage(navCtrl, enumeraService, loadingController, params, alertCtrl) {
        this.navCtrl = navCtrl;
        this.enumeraService = enumeraService;
        this.loadingController = loadingController;
        this.params = params;
        this.alertCtrl = alertCtrl;
        this.searchTerm = '';
        this.getdata('');
    }
    MagazzinoPage.prototype.getdata = function (searchTerm) {
        var _this = this;
        this.showLoading();
        this.enumeraService.requestStr = 'prgname=getCatalogo&viewname=catalogo&param[flg_matricole]=1&param[flg_solo_giacenti]=1&param[codice]=' + this.searchTerm;
        this.enumeraService.doRequest();
        this.enumeraService.getDataSet().subscribe(function (result) {
            if (result != null) {
                if (result["error"] != 'auth-error') {
                    _this.items = result;
                }
                else {
                    _this.presentAlert("Attenzione", "Utente non autorizzato a questa funzione. Contattare il customer service per l'attivazione");
                }
            }
        }, function (err) {
            console.error("Error : " + err);
        }, function () {
            console.log('getData completed');
            //console.log(this.items);
            //this.loading.dismiss();
            _this.hideLoading();
            // se trovato un solo salta al dettaglio articolo
            if (_this.items != null) {
                if (_this.items.length === 1) {
                    _this.vediArticolo(_this.items[0]);
                }
            }
        });
    };
    MagazzinoPage.prototype.vediArticolo = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__articolo_articolo__["a" /* ArticoloPage */], { item: item });
    };
    MagazzinoPage.prototype.showLoading = function () {
        var _this = this;
        this.loading = this.loadingController.create({
            content: "Please wait..."
        });
        this.loading.present();
        setTimeout(function () {
            _this.loading.dismiss();
        }, 20000);
    };
    MagazzinoPage.prototype.hideLoading = function () {
        this.loading.dismiss();
    };
    MagazzinoPage.prototype.presentAlert = function (titolo, messaggio) {
        var alert = this.alertCtrl.create({
            title: titolo,
            subTitle: messaggio,
            buttons: ['Ok']
        });
        alert.present();
    };
    MagazzinoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-magazzino',template:/*ion-inline-start:"C:\altamira\progetti_ionic\rsa\src\pages\magazzino\magazzino.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Magazzino\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page4">\n  <ion-list >\n    <ion-searchbar [(ngModel)]="searchTerm" (change)="getdata()"></ion-searchbar>\n    <button ion-item text-wrap *ngFor="let item of items" (click)="vediArticolo(item)">\n      <ion-row>\n          <ion-col>\n        <h2>{{item.CODART}}</h2>\n        <p>{{item.DESCRIZIONE}}</p>\n        <p>Giacenza: {{item.UM_1}} {{item.GIACENZA_UM1}}</p>\n          </ion-col>\n      </ion-row> \n    </button>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"C:\altamira\progetti_ionic\rsa\src\pages\magazzino\magazzino.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_enumera_request__["a" /* EnumeraService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MagazzinoPage);
    return MagazzinoPage;
}());

//# sourceMappingURL=magazzino.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticoloPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_enumera_request__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArticoloPage = (function () {
    function ArticoloPage(navCtrl, params, enumeraService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.enumeraService = enumeraService;
        this.alertCtrl = alertCtrl;
        this.items_details = 0;
        this.item = params.get('item');
        this.enumeraService.requestStr = 'prgname=getArticolo&param[codice]=' + this.item.CODART;
        this.enumeraService.doRequest();
        this.getdata();
    }
    ArticoloPage.prototype.getdata = function () {
        var _this = this;
        this.enumeraService.getDataSet().subscribe(function (result) {
            _this.items_details = result;
        }, function (err) {
            console.error("Error : " + err);
        }, function () {
            console.log('getData completed');
        });
    };
    ArticoloPage.prototype.prenotaMatricola = function (item) {
        var _this = this;
        this.enumeraService.requestStr = 'prgname=prenotaMatricola&param[idmatricola]=' + item.matricola;
        this.enumeraService.doRequest();
        this.enumeraService.getDataSet().subscribe(function (result) {
            if (result != null) {
                if (result["status"] != 'NACK') {
                    _this.presentAlert("Invio email", "La sua richiesta è stata registrata con successo. A breve sarete contattati dal customers service");
                }
                else {
                    _this.presentAlert("Attenzione", "La sua richiesta non è andata a buon fine. Contattare il customer service");
                }
            }
        }, function (err) {
            console.error("Error : " + err);
            _this.presentAlert("Invio email", "Errore sistema");
        }, function () {
            console.log('getData completed');
        });
    };
    ArticoloPage.prototype.presentAlert = function (titolo, messaggio) {
        var alert = this.alertCtrl.create({
            title: titolo,
            subTitle: messaggio,
            buttons: ['Ok']
        });
        alert.present();
    };
    ArticoloPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\altamira\progetti_ionic\rsa\src\pages\articolo\articolo.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      {{item.CODART}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n<ion-card>\n\n\n\n\n\n\n\n    <ion-card-content>\n\n      <ion-card-title>\n\n        {{item.CODART}}\n\n      \n\n      <p>\n\n        {{item.DESCRIZIONE}}\n\n      </p>\n\n      <p>Categoria: {{item.DESCRIZIONE_CATEGORIA}}</p>\n\n      <p>Gruppo: {{item.DESCRIZIONE_GRUPPO}}</p>\n\n      <p>Sottogruppo: {{item.DESCRIZIONE_SOTTOGRUPPO}}</p>      \n\n      <p>Classe: {{item.DESCRIZIONE_CLASSE}}</p>      \n\n      <p>Marca: {{item.DESCRIZIONE_MARCA}}</p>\n\n      </ion-card-title>\n\n    \n\n    </ion-card-content>\n\n    <img src="{{item.IMAGE_URL}}" imageViewer />\n\n    <ion-list>\n\n      <ion-list-header>Pezzi disponibili</ion-list-header>\n\n      <ion-spinner name="circles" *ngIf = "items_details === 0"></ion-spinner>\n\n      <ion-item text-wrap *ngFor="let itemd of items_details" >\n\n        <ion-list>\n\n          <ion-col width-80><h2>{{itemd.matricola}}</h2>\n\n          <p>Dimensioni: {{itemd.dimensioni}}</p>\n\n          <p>Giacenza: {{itemd.giacenza}}</p>\n\n          <button ion-button (click)="prenotaMatricola(itemd)">Richiedi disponibilità\n\n            </button>\n\n          </ion-col>\n\n        </ion-list>\n\n      </ion-item>\n\n    </ion-list>\n\n    \n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\altamira\progetti_ionic\rsa\src\pages\articolo\articolo.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_enumera_request__["a" /* EnumeraService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_enumera_request__["a" /* EnumeraService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ArticoloPage);
    return ArticoloPage;
}());

//# sourceMappingURL=articolo.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatricolaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MatricolaPage = (function () {
    function MatricolaPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MatricolaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-matricola',template:/*ion-inline-start:"C:\altamira\progetti_ionic\rsa\src\pages\matricola\matricola.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Matricola\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page7">\n  <ion-card id="matricola-card21">\n    <ion-list>\n      <ion-item color="none" id="matricola-list-item10">\n        XXXYYYY\n        <ion-icon name="barcode" item-right></ion-icon>\n      </ion-item>\n      <div style="width:100%;height:220px;margin:0px 0px;line-height:250px;background-color:#e8ebef;text-align:center;">\n        <i class="icon ion-image" style="font-size:64px;color:#888;vertical-align:middle;"></i>\n      </div>\n      <ion-item id="matricola-list-item-container3">\n        <div id="matricola-markdown4" class="show-list-numbers-and-dots">\n          <p style="margin-top:0px;color:#000000;">\n            Lotto di provenienza: cccc&lt;br&gt;Misure: 30x200\n          </p>\n        </div>\n      </ion-item>\n      <ion-item color="assertive" id="matricola-list-item11">\n        <ion-icon name="musical-notes" item-left></ion-icon>\n        Play Song\n      </ion-item>\n    </ion-list>\n  </ion-card>\n  <button id="matricola-button3" ion-button color="positive" block>\n    Prenota\n  </button>\n</ion-content>'/*ion-inline-end:"C:\altamira\progetti_ionic\rsa\src\pages\matricola\matricola.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], MatricolaPage);
    return MatricolaPage;
}());

//# sourceMappingURL=matricola.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_enumera_request__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(102);
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
    function HomePage(navCtrl, enumeraService, plt, loadingController) {
        this.navCtrl = navCtrl;
        this.enumeraService = enumeraService;
        this.plt = plt;
        this.loadingController = loadingController;
        this.config = 0;
        if (localStorage.getItem("config") === null) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        }
        else {
            this.config = JSON.parse(localStorage.getItem("config"));
            this.showLoading();
            this.loadTesto();
            this.loadSlides();
            this.testo_home = { "TESTO": "Benvenuto in RS" };
        }
    }
    HomePage.prototype.loadTesto = function () {
        var _this = this;
        this.enumeraService.requestStr = 'prgname=getTestiBase&viewname=testo_home';
        this.enumeraService.doRequest();
        this.enumeraService.getDataSet().subscribe(function (result) {
            _this.testi = result;
            _this.testo_home = _this.testi[0].TESTO;
        }, function (err) {
            console.error("Error : " + err);
        }, function () {
            console.log('getData completed');
            console.log(_this.testi);
        });
    };
    HomePage.prototype.loadSlides = function () {
        var _this = this;
        this.enumeraService.requestStr = 'prgname=getHomeSlides&viewname=immagini';
        this.enumeraService.doRequest();
        this.enumeraService.getDataSet().subscribe(function (result) {
            _this.slides = result;
        }, function (err) {
            console.error("Error : " + err);
        }, function () {
            console.log('getData completed');
            _this.hideLoading();
        });
    };
    HomePage.prototype.showLoading = function () {
        var _this = this;
        this.loading = this.loadingController.create({
            content: "Please wait..."
        });
        this.loading.present();
        setTimeout(function () {
            _this.loading.dismiss();
        }, 20000);
    };
    HomePage.prototype.hideLoading = function () {
        this.loading.dismiss();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\altamira\progetti_ionic\rsa\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Home\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding id="page1">\n    <h2>RS</h2><p>Benvenuto nella nuova APP dedicata ai clienti di RS ACCIAI</p>\n    <ion-slides pager>\n      <ion-slide *ngFor="let slide of slides"> \n        <img src="{{slide.URL}}" class="slide-image">\n      </ion-slide>\n    </ion-slides>\n    <p>{{testo_home}}</p>\n</ion-content>\n\n'/*ion-inline-end:"C:\altamira\progetti_ionic\rsa\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_enumera_request__["a" /* EnumeraService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(229);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tracking_system_tracking_system__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_certificati_certificati__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_magazzino_magazzino__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_articolo_articolo__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_matricola_matricola__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_email_composer__ = __webpack_require__(281);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tracking_system_tracking_system__["a" /* TrackingSystemPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_certificati_certificati__["a" /* CertificatiPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_magazzino_magazzino__["a" /* MagazzinoPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_articolo_articolo__["a" /* ArticoloPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_matricola_matricola__["a" /* MatricolaPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tracking_system_tracking_system__["a" /* TrackingSystemPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_certificati_certificati__["a" /* CertificatiPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_articolo_articolo__["a" /* ArticoloPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_magazzino_magazzino__["a" /* MagazzinoPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_matricola_matricola__["a" /* MatricolaPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_email_composer__["a" /* EmailComposer */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_enumera_request__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tracking_system_tracking_system__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_certificati_certificati__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_magazzino_magazzino__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_matricola_matricola__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(204);
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
    function MyApp(statusBar, splashScreen, menu, platform, alertCtrl) {
        var _this = this;
        this.menu = menu;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            platform.registerBackButtonAction(function () {
                if (_this.menu.isOpen()) {
                    _this.menu.close();
                }
                else if (_this.navCtrl.canGoBack()) {
                    _this.navCtrl.pop();
                }
                else {
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Conferma',
                        message: 'Confermi di voler uscire?',
                        buttons: [{
                                text: "Si, esci",
                                handler: function () { _this.platform.exitApp(); }
                            }, {
                                text: "No, rimani",
                                role: 'cancel'
                            }]
                    });
                    alert_1.present();
                    //don't do anything
                }
            });
        });
    }
    MyApp.prototype.goToHome = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */]);
    };
    MyApp.prototype.goToTrackingSystem = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_tracking_system_tracking_system__["a" /* TrackingSystemPage */]);
    };
    MyApp.prototype.goToCertificati = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_certificati_certificati__["a" /* CertificatiPage */]);
    };
    MyApp.prototype.goToMagazzino = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_magazzino_magazzino__["a" /* MagazzinoPage */]);
    };
    MyApp.prototype.goToMatricola = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_matricola_matricola__["a" /* MatricolaPage */]);
    };
    MyApp.prototype.goToLogin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */]);
    };
    MyApp.prototype.exitApp = function () {
        this.platform.exitApp();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\altamira\progetti_ionic\rsa\src\app\app.html"*/'<ion-menu [content]="mainContent">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>\n        Menu\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content id="side-menu21">\n    <ion-list id="menu-list1">\n      <ion-item-divider color="light" id="menu-list-item-divider1">\n        Servizi\n      </ion-item-divider>\n      <ion-item color="none" menuClose="" on-click="goToHome()" id="menu-list-item1">\n        Home\n        <ion-icon name="home" item-right></ion-icon>\n      </ion-item>\n      <ion-item color="none" menuClose="" on-click="goToTrackingSystem()" id="menu-list-item2">\n        Tracking system\n        <ion-icon name="cloud" item-right></ion-icon>\n      </ion-item>\n      <ion-item color="none" menuClose="" on-click="goToCertificati()" id="menu-list-item5">\n        Certificati\n        <ion-icon name="document" item-right></ion-icon>\n      </ion-item>\n      <ion-item color="none" menuClose="" on-click="goToMagazzino()" id="menu-list-item3">\n        Magazzino\n        <ion-icon name="barcode" item-right></ion-icon>\n      </ion-item>\n      <ion-item-divider color="light" id="menu-list-item-divider2">\n        Configurazione\n      </ion-item-divider>\n      <ion-item color="none" menuClose="" on-click="goToLogin()" id="menu-list-item4">\n        Login\n        <ion-icon name="contact" item-right></ion-icon>\n      </ion-item>\n      <ion-item-divider color="light" id="menu-list-item-divider2">\n      </ion-item-divider>      \n      <ion-item color="none" menuClose="" on-click="exitApp()" id="menu-list-item5">\n        Esci\n        <ion-icon name="exit" item-right></ion-icon>\n      </ion-item>      \n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav #mainContent [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\altamira\progetti_ionic\rsa\src\app\app.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_enumera_request__["a" /* EnumeraService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnumeraService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
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
  Generated class for the EnumeraRequest provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var EnumeraService = (function () {
    function EnumeraService(phttp) {
        this.phttp = phttp;
        this.config = JSON.parse(localStorage.getItem("config"));
        this.http = phttp;
    }
    EnumeraService.prototype.doRequest = function () {
        this.baseUrl = this.config.server + '/enumerando.php?user=' + this.config.username + '&password=' + this.config.password + '&db=' + this.config.area + '&pagesize=10000&loglevel=1&onlydata=1&';
        this.response = this.http.get(this.baseUrl.concat(this.requestStr)).map(function (res) { return res.json(); });
        console.log("Richiesta http: " + this.baseUrl.concat(this.requestStr));
    };
    EnumeraService.prototype.getDataSet = function () {
        return this.response;
    };
    EnumeraService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], EnumeraService);
    return EnumeraService;
}());

//# sourceMappingURL=enumera-request.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map