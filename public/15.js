(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/reservations/ReservationsIndex.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/reservations/ReservationsIndex.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/helpers */ "./resources/js/components/helpers.js");
/* harmony import */ var _components_commonController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/commonController */ "./resources/js/components/commonController.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Reservations",
  data: function data() {
    return {
      isLoading: false,
      // Флаг отображения загрузки
      fixed: true,
      // Флаг фиксирования столбца с названиями номеров
      rooms: [],
      tableData: [{
        name: 'First',
        busy: 'X'
      }, {
        name: 'Second',
        busy: 'X'
      }, {
        name: 'Third',
        busy: 'X'
      }, {
        name: 'Fourth',
        busy: 'X'
      }],
      daysInMonth: 0
    };
  },
  methods: {
    handleClick: function handleClick(row, column, cell, event) {
      console.log(row, column, cell, event);
    },
    getRooms: function getRooms() {
      var _this = this;

      this.isLoading = true;
      _components_commonController__WEBPACK_IMPORTED_MODULE_1__["default"].getRoomList().then(function (response) {
        _this.rooms = response.data.data;
        console.log(_this.rooms);
        _this.isLoading = false;
      });
    },
    // Получение бронирований на принимаемы месяц
    getReservations: function getReservations() {
      var monthNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
      axios.get('/api/reservations/').then(function (response) {
        console.log(response);
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  mounted: function mounted() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var daysInMonth = new Date(year, month, 0).getDate();
    this.daysInMonth = daysInMonth;
    console.log(daysInMonth);
    this.getRooms();
    this.getReservations();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/reservations/ReservationsIndex.vue?vue&type=template&id=18c39022&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/reservations/ReservationsIndex.vue?vue&type=template&id=18c39022&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-container",
    {
      directives: [
        {
          name: "loading",
          rawName: "v-loading",
          value: _vm.isLoading,
          expression: "isLoading"
        }
      ],
      attrs: { direction: "vertical" }
    },
    [
      _c("h3", [_vm._v("Бронирования")]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "controls" },
        [
          _c("el-button", {
            attrs: {
              circle: "",
              icon: "el-icon-plus",
              type: "primary",
              title: "Добавить бронирование"
            },
            on: {
              click: function($event) {
                return _vm.$router.push({ name: "reservations-create" })
              }
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("el-switch", {
        attrs: { "active-text": "Зафиксировать названия номеров" },
        model: {
          value: _vm.fixed,
          callback: function($$v) {
            _vm.fixed = $$v
          },
          expression: "fixed"
        }
      }),
      _vm._v(" "),
      _c(
        "el-table",
        {
          staticClass: "reservation-table",
          staticStyle: { width: "100%" },
          attrs: { data: _vm.rooms, size: "mini", border: "" },
          on: { "cell-click": _vm.handleClick }
        },
        [
          _c("el-table-column", {
            staticClass: "room-name",
            attrs: {
              fixed: _vm.fixed,
              prop: "name",
              label: "Номер",
              width: "100"
            }
          }),
          _vm._v(" "),
          _vm._l(_vm.daysInMonth, function(day, index) {
            return _c("el-table-column", {
              key: index,
              attrs: { label: "" + (index + 1), width: "30" },
              scopedSlots: _vm._u(
                [
                  {
                    key: "default",
                    fn: function(scope) {
                      return [
                        !scope.row.status
                          ? _c("i", { staticClass: "el-icon-circle-close" })
                          : _vm._e()
                      ]
                    }
                  }
                ],
                null,
                true
              )
            })
          })
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/reservations/ReservationsIndex.vue":
/*!***************************************************************!*\
  !*** ./resources/js/views/reservations/ReservationsIndex.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReservationsIndex_vue_vue_type_template_id_18c39022_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReservationsIndex.vue?vue&type=template&id=18c39022&scoped=true& */ "./resources/js/views/reservations/ReservationsIndex.vue?vue&type=template&id=18c39022&scoped=true&");
/* harmony import */ var _ReservationsIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReservationsIndex.vue?vue&type=script&lang=js& */ "./resources/js/views/reservations/ReservationsIndex.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ReservationsIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReservationsIndex_vue_vue_type_template_id_18c39022_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ReservationsIndex_vue_vue_type_template_id_18c39022_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "18c39022",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/reservations/ReservationsIndex.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/reservations/ReservationsIndex.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/reservations/ReservationsIndex.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReservationsIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ReservationsIndex.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/reservations/ReservationsIndex.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReservationsIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/reservations/ReservationsIndex.vue?vue&type=template&id=18c39022&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/views/reservations/ReservationsIndex.vue?vue&type=template&id=18c39022&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReservationsIndex_vue_vue_type_template_id_18c39022_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ReservationsIndex.vue?vue&type=template&id=18c39022&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/reservations/ReservationsIndex.vue?vue&type=template&id=18c39022&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReservationsIndex_vue_vue_type_template_id_18c39022_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReservationsIndex_vue_vue_type_template_id_18c39022_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=15.js.map