webpackJsonp([0],{

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PessoaPageModule", function() { return PessoaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pessoa__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PessoaPageModule = /** @class */ (function () {
    function PessoaPageModule() {
    }
    PessoaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pessoa__["a" /* PessoaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pessoa__["a" /* PessoaPage */]),
            ],
        })
    ], PessoaPageModule);
    return PessoaPageModule;
}());

//# sourceMappingURL=pessoa.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PessoaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_pessoa_pessoa__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PessoaPage = /** @class */ (function () {
    function PessoaPage(pessoaProvider, modalCtrl, navCtrl, navParams) {
        this.pessoaProvider = pessoaProvider;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PessoaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.pessoaProvider.list().subscribe(function (res) {
            _this.lista = res;
        });
    };
    PessoaPage.prototype.openFormPessoa = function () {
        var _this = this;
        var modal = this.modalCtrl.create('pessoa-form-page');
        modal.present();
        modal.onDidDismiss(function () {
            _this.pessoaProvider.list().subscribe(function (res) {
                _this.lista = res;
            });
        });
    };
    PessoaPage.prototype.delete = function (id, index) {
        var _this = this;
        this.pessoaProvider.remove({ id: id }).subscribe(function (rs) {
            _this.lista.splice(index, 1);
        }, function (err) {
            console.error(err);
        });
    };
    PessoaPage.prototype.edit = function (item) {
        var _this = this;
        var modal = this.modalCtrl.create('pessoa-form-page', { payload: item });
        modal.present();
        modal.onDidDismiss(function () {
            _this.pessoaProvider.list().subscribe(function (res) {
                _this.lista = res;
            });
        });
    };
    PessoaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pessoa',template:/*ion-inline-start:"/Users/talisoncosta/Documents/UFRN/treino/src/pages/pessoa/pessoa.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Pessoa</ion-title>\n    <ion-buttons right>\n      <button ion-button (click)="openFormPessoa()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item *ngFor="let item of lista; index as i">\n      {{item.nome}}\n      <ion-buttons item-end>\n        <button ion-button clear (click)="delete(item.id, i)">\n          <ion-icon name="trash"></ion-icon>\n        </button>\n        <button ion-button clear (click)="edit(item)">\n          <ion-icon name="create"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-item>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/talisoncosta/Documents/UFRN/treino/src/pages/pessoa/pessoa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_pessoa_pessoa__["a" /* PessoaProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], PessoaPage);
    return PessoaPage;
}());

//# sourceMappingURL=pessoa.js.map

/***/ })

});
//# sourceMappingURL=0.js.map