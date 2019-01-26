webpackJsonp([1],{

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PessoaFormPageModule", function() { return PessoaFormPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pessoa_form__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PessoaFormPageModule = /** @class */ (function () {
    function PessoaFormPageModule() {
    }
    PessoaFormPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pessoa_form__["a" /* PessoaFormPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pessoa_form__["a" /* PessoaFormPage */]),
            ],
        })
    ], PessoaFormPageModule);
    return PessoaFormPageModule;
}());

//# sourceMappingURL=pessoa-form.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PessoaFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_pessoa_pessoa__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PessoaFormPage = /** @class */ (function () {
    function PessoaFormPage(fb, pessoaProvider, viewCtrl, navCtrl, navParams) {
        this.fb = fb;
        this.pessoaProvider = pessoaProvider;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.campos = [
            { nome: 'nome', label: 'Nome', tipo: 'text' },
            { nome: 'cpf', label: 'CPF', tipo: 'text' },
            { nome: 'email', label: 'Email', tipo: 'text' },
            { nome: 'password', label: 'Senha', tipo: 'password' },
        ];
        this.pessoaForm = this.fb.group({
            nome: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            cpf: [''],
            email: [''],
            password: [''],
        });
    }
    PessoaFormPage.prototype.ngOnInit = function () {
        this.payload = this.navParams.get('payload');
        if (this.payload != undefined) {
            this.pessoaForm.setValue({
                nome: this.payload.nome,
                cpf: this.payload.cpf,
                email: this.payload.email,
                password: this.payload.password
            });
        }
    };
    PessoaFormPage.prototype.onSubmit = function () {
        var _this = this;
        if (this.payload) {
            var temp = this.pessoaForm.value;
            temp['id'] = this.payload.id;
            this.pessoaProvider.update(temp).subscribe(function (res) {
                _this.viewCtrl.dismiss();
            }, function (err) {
                console.error(err);
            });
        }
        else {
            this.pessoaProvider.add(this.pessoaForm.value).subscribe(function (res) {
                _this.viewCtrl.dismiss();
            }, function (err) {
                console.error(err);
            });
        }
    };
    PessoaFormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pessoa-form',template:/*ion-inline-start:"/Users/talisoncosta/Documents/UFRN/treino/src/pages/pessoa-form/pessoa-form.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Cadastro Pessoa</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <form [formGroup]="pessoaForm" (ngSubmit)="onSubmit()">\n\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6 *ngFor="let campo of campos">\n          <ion-item>\n            <ion-label stacked>{{campo.label}}</ion-label>\n            <ion-input [type]="campo.tipo" [formControlName]="campo.nome"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <button ion-button type="reset" color="danger">Limpar</button>\n    <button ion-button type="submit" [disabled]="!pessoaForm.valid">Salvar</button>\n  </form>\n\n</ion-content>'/*ion-inline-end:"/Users/talisoncosta/Documents/UFRN/treino/src/pages/pessoa-form/pessoa-form.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_pessoa_pessoa__["a" /* PessoaProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], PessoaFormPage);
    return PessoaFormPage;
}());

//# sourceMappingURL=pessoa-form.js.map

/***/ })

});
//# sourceMappingURL=1.js.map