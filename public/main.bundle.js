webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <!-- Latest compiled and minified CSS -->\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\">\n\n  <!-- Optional theme -->\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css\" integrity=\"sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp\" crossorigin=\"anonymous\">\n\n  <h1>\n    {{title}}!\n  </h1>\n\n  <app-view-document> </app-view-document>\n\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'CIA';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__censor_document_censor_document_component__ = __webpack_require__("./src/app/censor-document/censor-document.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__view_document_view_document_component__ = __webpack_require__("./src/app/view-document/view-document.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_document_service__ = __webpack_require__("./src/app/services/document.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__censor_document_censor_document_component__["a" /* CensorDocumentComponent */],
                __WEBPACK_IMPORTED_MODULE_6__view_document_view_document_component__["a" /* ViewDocumentComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__services_document_service__["a" /* DocumentService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/censor-document/censor-document.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/censor-document/censor-document.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n  <form (ngSubmit)=\"onSubmit()\">\n    <div>\n      <label for=\"censor\">Censor</label>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newDocument.censor\" name=\"censor\" required>\n    </div>\n\n    <div>\n      <label for=\"documentToCensor\">Document to Censor</label>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newDocument.documentToCensor\" name=\"documentToCensor\" required>\n    </div>\n\n    <button type=\"submit\">Submit</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/censor-document/censor-document.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CensorDocumentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_document_service__ = __webpack_require__("./src/app/services/document.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CensorDocumentComponent = /** @class */ (function () {
    function CensorDocumentComponent(documentServ) {
        this.documentServ = documentServ;
        this.censorDocument = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    CensorDocumentComponent.prototype.ngOnInit = function () {
        this.newDocument = {
            censor: '',
            documentToCensor: '',
            _id: ''
        };
    };
    CensorDocumentComponent.prototype.onSubmit = function () {
        var _this = this;
        this.censor();
        this.documentServ.censorDocument(this.newDocument).subscribe(function (response) {
            console.log(response);
            if (response.success == true)
                _this.censorDocument.emit(_this.newDocument);
        });
        /*this.newDocument._id = '';
        this.newDocument.documentToCensor = '';
        this.newDocument.censor = '';*/
    };
    /**
     * Censor comma or space delimited text to 'XXXX'
     */
    CensorDocumentComponent.prototype.censor = function () {
        var documentToCensor = this.newDocument.documentToCensor;
        var censor = this.newDocument.censor;
        // if censor has single or double quotes, remove
        censor = censor.replace(/['"]+/g, '');
        censor = censor.replace(/[, ]+/g, ',');
        var censorArray = censor.split(',');
        // loop through censorArray to replace any words needed censoring
        for (var i = 0; i < censorArray.length; i++) {
            var item = censorArray[i];
            documentToCensor = documentToCensor.replace(item, 'XXXX');
        }
        this.newDocument.documentToCensor = documentToCensor;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], CensorDocumentComponent.prototype, "censorDocument", void 0);
    CensorDocumentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-censor-document',
            template: __webpack_require__("./src/app/censor-document/censor-document.component.html"),
            styles: [__webpack_require__("./src/app/censor-document/censor-document.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_document_service__["a" /* DocumentService */]])
    ], CensorDocumentComponent);
    return CensorDocumentComponent;
}());



/***/ }),

/***/ "./src/app/services/document.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DocumentService = /** @class */ (function () {
    function DocumentService(http) {
        this.http = http;
        this.serverApi = 'http://localhost:3000';
    }
    DocumentService.prototype.getAllDocuments = function () {
        var URI = this.serverApi + "/documentcensor/";
        return this.http.get(URI)
            .map(function (res) { return res.json(); })
            .map(function (res) { return res.documents; });
    };
    DocumentService.prototype.censorDocument = function (document) {
        var URI = this.serverApi + "/documentcensor/";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        var body = JSON.stringify({ censor: document.censor, documentToCensor: document.documentToCensor });
        console.log(body);
        headers.append('Content-Type', 'application/json');
        return this.http.post(URI, body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    DocumentService.prototype.deleteDocument = function (documentId) {
        var URI = this.serverApi + "/documentcensor/" + documentId;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        headers.append('Content-Type', 'application/json');
        return this.http.delete(URI, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    DocumentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], DocumentService);
    return DocumentService;
}());



/***/ }),

/***/ "./src/app/view-document/view-document.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/view-document/view-document.component.html":
/***/ (function(module, exports) {

module.exports = "<h2> Censor Classified Documents </h2>\n\n<!-- Table starts here -->\n<table id=\"table\">\n  <thead>\n  <tr>\n    <th style=\"text-align:center\">Document to Censor</th>\n    <th> Delete </th>\n\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let document of documents\">\n    <td>{{document.documentToCensor}}</td>\n    <td> <button type=\"button\" (click)=\"deleteDocument(document); $event.stopPropagation();\">Delete</button></td>\n\n  </tr>\n  </tbody>\n</table>\n\n<app-censor-document (censorDocument)='onCensorDocument($event)'> </app-censor-document>\n"

/***/ }),

/***/ "./src/app/view-document/view-document.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewDocumentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_document_service__ = __webpack_require__("./src/app/services/document.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewDocumentComponent = /** @class */ (function () {
    function ViewDocumentComponent(documentServ) {
        this.documentServ = documentServ;
        //lists property which is an array of Document type
        this.documents = [];
    }
    ViewDocumentComponent.prototype.ngOnInit = function () {
        //Load all documents on init
        this.loadDocuments();
    };
    ViewDocumentComponent.prototype.loadDocuments = function () {
        var _this = this;
        //Get all documents from server and update the documents property
        this.documentServ.getAllDocuments().subscribe(function (response) { return _this.documents = response; });
    };
    ViewDocumentComponent.prototype.onCensorDocument = function (newDocument) {
        this.documents = this.documents.concat(newDocument);
    };
    //deleteDocument. The deleted document is being filtered out using the .filter method
    ViewDocumentComponent.prototype.deleteDocument = function (document) {
        var _this = this;
        this.documentServ.deleteDocument(document._id).subscribe(function (response) { return _this.documents = _this.documents.filter(function (documents) { return documents !== document; }); });
    };
    ViewDocumentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-view-document',
            template: __webpack_require__("./src/app/view-document/view-document.component.html"),
            styles: [__webpack_require__("./src/app/view-document/view-document.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_document_service__["a" /* DocumentService */]])
    ], ViewDocumentComponent);
    return ViewDocumentComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map