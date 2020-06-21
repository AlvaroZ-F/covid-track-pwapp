function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["global-global-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/global/global.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/global/global.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGlobalGlobalPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n\n    <ion-toolbar>\n    <ion-title>\n        Global Information about Covid-19\n    </ion-title>\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n    <ion-header collapse=\"condense\">\n    <ion-toolbar>\n        <ion-title size=\"large\">Global Information about Covid-19</ion-title>\n    </ion-toolbar>\n    </ion-header>\n\n    <ion-card>\n\n    <ion-card-header>\n        <ion-card-subtitle>Global</ion-card-subtitle>\n        <ion-card-title>Coronavirus Confirmed Cases</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n        <h1>{{ total_confirmed | number }}</h1>\n    </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n    <ion-card-header>\n        <ion-card-subtitle>Global</ion-card-subtitle>\n        <ion-card-title>Deaths</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n        <h1>{{ total_deaths | number }}</h1>\n    </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n    <ion-card-header>\n        <ion-card-subtitle>Global</ion-card-subtitle>\n        <ion-card-title>Recovered</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n        <h1>{{ total_recovered | number }}</h1>\n    </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-header>\n            <ion-card-subtitle>All Countries Affected by the Covid-19</ion-card-subtitle>\n            <ion-card-title>Covid-19 by Country</ion-card-title>\n        </ion-card-header>\n        \n        <ion-card-content>\n            <ion-toolbar>\n                <ion-searchbar [(ngModel)]=\"Country_Search\" autocomplete=\"off\"></ion-searchbar>\n            </ion-toolbar>\n\n            <ion-toolbar style=\"height: 400px; overflow: auto\">\n                <ion-list *ngFor=\"let country of info_country | filter:Country_Search\">\n                    <ion-item-sliding>\n                        <ion-item>\n                            <ion-label>\n                                <h1>{{ country.Country }}</h1>\n                                <p>\n                                    Cases: {{ country.TotalConfirmed | number }} | Today: {{ country.NewConfirmed | number }}\n                                    Deaths: {{ country.TotalDeaths | number }} | Today: {{ country.NewDeaths }}\n                                    Recovered: {{ country.TotalRecovered | number }} | Today: {{ country.NewRecovered | number }}\n                                </p>\n                            </ion-label>\n                        </ion-item>\n                    </ion-item-sliding>\n                </ion-list>\n            </ion-toolbar>            \n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/global/global.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/global/global.module.ts ***!
    \*****************************************/

  /*! exports provided: GlobalPageModule */

  /***/
  function srcAppGlobalGlobalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlobalPageModule", function () {
      return GlobalPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _global_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./global.page */
    "./src/app/global/global.page.ts");
    /* harmony import */


    var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng2-search-filter */
    "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");

    var GlobalPageModule = function GlobalPageModule() {
      _classCallCheck(this, GlobalPageModule);
    };

    GlobalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _global_page__WEBPACK_IMPORTED_MODULE_6__["GlobalPage"]
      }])],
      declarations: [_global_page__WEBPACK_IMPORTED_MODULE_6__["GlobalPage"]]
    })], GlobalPageModule);
    /***/
  },

  /***/
  "./src/app/global/global.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/global/global.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppGlobalGlobalPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content ion-toolbar {\n  --background: translucent;\n}\n\n.custom_select {\n  padding: 5px;\n  background: #0a0a0a;\n  color: white;\n  border: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvQWx2YXJvWi1GL2NvdmlkLXRyYWNrLXB3YXBwL3NyYy9hcHAvZ2xvYmFsL2dsb2JhbC5wYWdlLnNjc3MiLCJzcmMvYXBwL2dsb2JhbC9nbG9iYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9nbG9iYWwvZ2xvYmFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuXG4uY3VzdG9tX3NlbGVjdCB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJhY2tncm91bmQ6ICMwYTBhMGE7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogaGlkZGVuO1xufSIsImlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn1cblxuLmN1c3RvbV9zZWxlY3Qge1xuICBwYWRkaW5nOiA1cHg7XG4gIGJhY2tncm91bmQ6ICMwYTBhMGE7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBoaWRkZW47XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/global/global.page.ts":
  /*!***************************************!*\
    !*** ./src/app/global/global.page.ts ***!
    \***************************************/

  /*! exports provided: GlobalPage */

  /***/
  function srcAppGlobalGlobalPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlobalPage", function () {
      return GlobalPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _covid_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../covid.service */
    "./src/app/covid.service.ts");

    var GlobalPage = /*#__PURE__*/function () {
      function GlobalPage(covidService) {
        var _this = this;

        _classCallCheck(this, GlobalPage);

        this.covidService = covidService;
        this.info_country = null;
        this.covidService.getAll().subscribe(function (val) {
          _this.info_global = val.Global;
          _this.total_confirmed = _this.info_global.TotalConfirmed;
          _this.total_deaths = _this.info_global.TotalDeaths;
          _this.total_recovered = _this.info_global.TotalRecovered;
        });
        this.getCountries();
      }

      _createClass(GlobalPage, [{
        key: "getCountries",
        value: function getCountries() {
          var _this2 = this;

          this.covidService.getAll().subscribe(function (val) {
            _this2.info_country = _this2.sortData('TotalConfirmed', val.Countries);
          });
        }
      }, {
        key: "sortData",
        value: function sortData(sortBy, data) {
          try {
            var sortProp = sortBy;
            data.sort(function (a, b) {
              if (a[sortProp] < b[sortProp]) {
                return 1;
              } else if (a[sortProp] > b[sortProp]) {
                return -1;
              }

              return 0;
            });
          } catch (e) {
            console.error("ERROR while sorting", e);
            return data;
          }

          console.log(data);
          return data;
        }
      }]);

      return GlobalPage;
    }();

    GlobalPage.ctorParameters = function () {
      return [{
        type: _covid_service__WEBPACK_IMPORTED_MODULE_2__["CovidService"]
      }];
    };

    GlobalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-global',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./global.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/global/global.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./global.page.scss */
      "./src/app/global/global.page.scss"))["default"]]
    })], GlobalPage);
    /***/
  }
}]);
//# sourceMappingURL=global-global-module-es5.js.map