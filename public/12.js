(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/reservations/ReservationsCreate.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/reservations/ReservationsCreate.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/helpers */ "./resources/js/components/helpers.js");
/* harmony import */ var _components_commonController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/commonController */ "./resources/js/components/commonController.js");
/* harmony import */ var vue_functional_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-functional-calendar */ "./node_modules/vue-functional-calendar/index.js");
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
  name: "ReservationsCreate",
  data: function data() {
    return {
      isLoading: false,
      // Флаг отображения загрузки
      calendarData: {},
      calendarConfig: {
        dateFormat: 'yyyy.mm.dd',
        disabledDates: ['beforeToday'],
        isDateRange: true,
        // withTimePicker: true,
        changeMonthFunction: true,
        changeYearFunction: true,
        changeYearStep: 1,
        dayNames: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        shortMonthNames: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек']
      },
      // Данные бронирования
      formReservation: {
        room_id: '',
        name: '',
        surname: '',
        phone: '',
        email: '',
        period: {}
      },
      selectRoomDisabled: false,
      rooms: []
    };
  },
  components: {
    FunctionalCalendar: vue_functional_calendar__WEBPACK_IMPORTED_MODULE_2__["FunctionalCalendar"]
  },
  methods: {
    // Загрузка списка номеров
    getRooms: function getRooms() {
      var _this = this;

      this.isLoading = true;
      _components_commonController__WEBPACK_IMPORTED_MODULE_1__["default"].getRoomList().then(function (response) {
        _this.rooms = response.data.data; // Если бронирование открыто на определнный номер

        if (_this.$route.query.room_id) {
          _this.formReservation.room_id = parseInt(_this.$route.query.room_id);
          _this.selectRoomDisabled = true;
        }

        _this.isLoading = false;
      });
    },
    choseDay: function choseDay(ob) {// console.log(this.formReservation.period.dateRange.start.date);
      // console.log(this.formReservation.period.dateRange.end.date);
    },
    selectedDaysCount: function selectedDaysCount(selectedDaysAmount) {
      console.log(this.formReservation.period.dateRange.start.date);
      console.log(this.formReservation.period.dateRange.end.date);
    },
    // Клик по кнопке Забронировать
    doReservation: function doReservation() {
      var _this2 = this;

      console.log(this.formReservation);
      this.isLoading = true;
      _components_commonController__WEBPACK_IMPORTED_MODULE_1__["default"].createReservation(this.formReservation).then(function (response) {
        if (response.status == 201) {
          _components_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].showSuccessMessage('Бронирование успешно создано!');
        }

        _this2.isLoading = false;
      });
    } // v-model="calendar"
    // :day-names="dayNames" //dayNames=['Su','Mo','Tu','We','Th','Fr','Sa']
    // :month-names="monthNames" //monthNames=["January","February","March","April","May","June","July","August","September","October","November","December"]
    // v-on:choseDay="clickDay"
    // v-on:changeMonth="changeDate"
    // v-on:isToday="clickToday"
    // :sundayStart="true"
    // :is-date-range="true"
    // :is-date-picker="true"
    // :is-modal="false"
    // :is-multiple="true"
    // :calendars-count="3"
    // :change-month-function="true"
    // :change-year-function="true"
    // :markDate=arr // arr=['2018/10/20','2018/10/28', '2018/10/16']
    // :agoDayHide='1514937600' //Do not click before a date. Timestamp 10 digits
    // :futureDayHide='1525104000' //Do not click after a date Timestamp 10 digits

  },
  mounted: function mounted() {
    this.getRooms();
    console.log(this.$route.query);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/reservations/ReservationsCreate.vue?vue&type=template&id=2762bedc&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/reservations/ReservationsCreate.vue?vue&type=template&id=2762bedc& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
      _c("h3", [_vm._v("Создание нового бронирования")]),
      _vm._v(" "),
      _c(
        "el-form",
        {
          ref: "form",
          attrs: { model: _vm.formReservation, "label-width": "200px" }
        },
        [
          _c(
            "el-form-item",
            { attrs: { label: "Номер" } },
            [
              _c(
                "el-select",
                {
                  attrs: {
                    disabled: _vm.selectRoomDisabled,
                    placeholder: "Выберите номер"
                  },
                  model: {
                    value: _vm.formReservation.room_id,
                    callback: function($$v) {
                      _vm.$set(_vm.formReservation, "room_id", $$v)
                    },
                    expression: "formReservation.room_id"
                  }
                },
                _vm._l(_vm.rooms, function(room) {
                  return _c("el-option", {
                    key: room.id,
                    attrs: {
                      label: room.name,
                      value: room.id,
                      disabled: !room.status
                    }
                  })
                }),
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "Имя" } },
            [
              _c("el-input", {
                attrs: { placeholder: "Введите имя" },
                model: {
                  value: _vm.formReservation.name,
                  callback: function($$v) {
                    _vm.$set(_vm.formReservation, "name", $$v)
                  },
                  expression: "formReservation.name"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "Фамилия" } },
            [
              _c("el-input", {
                attrs: { placeholder: "Введите фамилию" },
                model: {
                  value: _vm.formReservation.surname,
                  callback: function($$v) {
                    _vm.$set(_vm.formReservation, "surname", $$v)
                  },
                  expression: "formReservation.surname"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "Телефон" } },
            [
              _c("el-input", {
                attrs: { placeholder: "Введите телефон" },
                model: {
                  value: _vm.formReservation.phone,
                  callback: function($$v) {
                    _vm.$set(_vm.formReservation, "phone", $$v)
                  },
                  expression: "formReservation.phone"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "Email" } },
            [
              _c("el-input", {
                attrs: { placeholder: "Введите email" },
                model: {
                  value: _vm.formReservation.email,
                  callback: function($$v) {
                    _vm.$set(_vm.formReservation, "email", $$v)
                  },
                  expression: "formReservation.email"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "Даты бронирования" } },
            [
              _c("functional-calendar", {
                attrs: { configs: _vm.calendarConfig },
                on: {
                  selectedDaysCount: _vm.selectedDaysCount,
                  choseDay: _vm.choseDay
                },
                model: {
                  value: _vm.formReservation.period,
                  callback: function($$v) {
                    _vm.$set(_vm.formReservation, "period", $$v)
                  },
                  expression: "formReservation.period"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            [
              _c(
                "el-button-group",
                [
                  _c(
                    "el-button",
                    {
                      attrs: {
                        type: "plain",
                        title: "Отменить создание бронирования и вернуться"
                      },
                      on: {
                        click: function($event) {
                          return _vm.$router.push({
                            name: "reservations-index"
                          })
                        }
                      }
                    },
                    [_vm._v("\n                    Отмена\n                ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "el-button",
                    {
                      attrs: {
                        type: "success",
                        title: "Сохранить бронирование"
                      },
                      on: { click: _vm.doReservation }
                    },
                    [
                      _vm._v(
                        "\n                    Забронировать\n                "
                      )
                    ]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/reservations/ReservationsCreate.vue":
/*!****************************************************************!*\
  !*** ./resources/js/views/reservations/ReservationsCreate.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReservationsCreate_vue_vue_type_template_id_2762bedc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReservationsCreate.vue?vue&type=template&id=2762bedc& */ "./resources/js/views/reservations/ReservationsCreate.vue?vue&type=template&id=2762bedc&");
/* harmony import */ var _ReservationsCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReservationsCreate.vue?vue&type=script&lang=js& */ "./resources/js/views/reservations/ReservationsCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ReservationsCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReservationsCreate_vue_vue_type_template_id_2762bedc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ReservationsCreate_vue_vue_type_template_id_2762bedc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/reservations/ReservationsCreate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/reservations/ReservationsCreate.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/reservations/ReservationsCreate.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReservationsCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ReservationsCreate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/reservations/ReservationsCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReservationsCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/reservations/ReservationsCreate.vue?vue&type=template&id=2762bedc&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/reservations/ReservationsCreate.vue?vue&type=template&id=2762bedc& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReservationsCreate_vue_vue_type_template_id_2762bedc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ReservationsCreate.vue?vue&type=template&id=2762bedc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/reservations/ReservationsCreate.vue?vue&type=template&id=2762bedc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReservationsCreate_vue_vue_type_template_id_2762bedc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReservationsCreate_vue_vue_type_template_id_2762bedc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=12.js.map