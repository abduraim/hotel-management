(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/rooms/RoomsIndex.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/rooms/RoomsIndex.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "RoomsIndex",
  data: function data() {
    return {
      isLoading: false,
      // Флаг отображения загрузки
      roomsList: [],
      // Список номеров
      // Данные пагинатора
      paginatorData: {
        total: 0,
        perPage: 0,
        currentPage: 1
      }
    };
  },
  methods: {
    // Получение всех номеров отеля
    getRooms: function getRooms() {
      var _this = this;

      this.isLoading = true;
      var requestData = {
        page: this.paginatorData.currentPage
      };
      _components_commonController__WEBPACK_IMPORTED_MODULE_1__["default"].getRoomList(requestData).then(function (response) {
        _this.roomsList = response.data.data;
        _this.paginatorData.total = response.data.meta.total;
        _this.paginatorData.perPage = response.data.meta.per_page;
        _this.paginatorData.currentPage = response.data.meta.current_page;
        _this.isLoading = false;
      });
    },
    // Изменение статуса Вкл./Выкл. у номера
    changeRoomStatus: function changeRoomStatus(room) {
      var _this2 = this;

      this.isLoading = true;
      _components_commonController__WEBPACK_IMPORTED_MODULE_1__["default"].changeRoomStatus(room).then(function (repsonse) {
        _this2.isLoading = false;
        _components_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].showSuccessMessage('Статус номера успешно изменен!');
      });
    },
    // Удалить номер
    deleteRoom: function deleteRoom(room) {
      var _this3 = this;

      this.$confirm("\u0412\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043D\u043E\u043C\u0435\u0440 ".concat(room.name, "?"), 'Удаление номера', {
        confirmButtonText: 'Да',
        cancelButtonText: 'Отмена',
        type: 'warning'
      }).then(function () {
        _this3.isLoading = true;
        _components_commonController__WEBPACK_IMPORTED_MODULE_1__["default"].deleteRoom(room).then(function (response) {
          _this3.isLoading = false;
          _components_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].showSuccessMessage('Номер успешно удален!');

          _this3.getRooms();
        });
      })["catch"](function () {// Клик по кнопке Отмена
      });
    },
    // Смена страницы в пагинации
    paginatorPageChange: function paginatorPageChange(val) {
      this.paginatorData.currentPage = val;
      window.scrollTo(0, 0);
      this.getRooms();
    }
  },
  mounted: function mounted() {
    this.getRooms();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/rooms/RoomsIndex.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/rooms/RoomsIndex.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".controls {\n  margin-bottom: 20px;\n}\n.room-card {\n  margin-bottom: 20px;\n}\n.room-card .room-card__header {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: nowrap;\n}\n.room-card .room-card__header .card-header__room-name {\n  display: flex;\n  align-items: center;\n  font-size: 20px;\n  margin-right: 10px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: clip;\n}\n.room-card .room-card__header .card-header__controls {\n  flex-shrink: 0;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/rooms/RoomsIndex.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/rooms/RoomsIndex.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./RoomsIndex.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/rooms/RoomsIndex.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/rooms/RoomsIndex.vue?vue&type=template&id=1b6d88d0&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/rooms/RoomsIndex.vue?vue&type=template&id=1b6d88d0& ***!
  \**************************************************************************************************************************************************************************************************************/
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
      _c("h3", [_vm._v("Номера")]),
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
              title: "Добавить номер"
            },
            on: {
              click: function($event) {
                return _vm.$router.push({ name: "rooms-create" })
              }
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _vm._l(_vm.roomsList, function(room) {
        return _c(
          "el-card",
          { key: room.id, staticClass: "room-card" },
          [
            _c(
              "div",
              {
                staticClass: "room-card__header",
                attrs: { slot: "header" },
                slot: "header"
              },
              [
                _c("span", { staticClass: "card-header__room-name" }, [
                  _vm._v(_vm._s(room.name))
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "card-header__controls" },
                  [
                    _c("el-button", {
                      attrs: {
                        circle: "",
                        icon: "el-icon-edit",
                        type: "warning",
                        title: "Редактировать"
                      },
                      on: {
                        click: function($event) {
                          return _vm.$router.push({
                            name: "rooms-edit",
                            params: { id: room.id }
                          })
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("el-button", {
                      attrs: {
                        circle: "",
                        icon: "el-icon-delete",
                        type: "danger",
                        title: "Удалить номер"
                      },
                      on: {
                        click: function($event) {
                          return _vm.deleteRoom(room)
                        }
                      }
                    })
                  ],
                  1
                )
              ]
            ),
            _vm._v(" "),
            _c("el-switch", {
              attrs: { "active-text": "Вкл.", "inactive-text": "Выкл." },
              on: {
                change: function($event) {
                  return _vm.changeRoomStatus(room)
                }
              },
              model: {
                value: room.status,
                callback: function($$v) {
                  _vm.$set(room, "status", $$v)
                },
                expression: "room.status"
              }
            })
          ],
          1
        )
      }),
      _vm._v(" "),
      _c("el-pagination", {
        staticClass: "contact-pagination",
        attrs: {
          background: "",
          "pager-count": 5,
          "hide-on-single-page": true,
          layout: "prev, pager, next",
          total: _vm.paginatorData.total,
          "page-size": _vm.paginatorData.perPage,
          "current-page": _vm.paginatorData.currentPage
        },
        on: {
          "update:currentPage": function($event) {
            return _vm.$set(_vm.paginatorData, "currentPage", $event)
          },
          "update:current-page": function($event) {
            return _vm.$set(_vm.paginatorData, "currentPage", $event)
          },
          "current-change": _vm.paginatorPageChange
        }
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/rooms/RoomsIndex.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/rooms/RoomsIndex.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RoomsIndex_vue_vue_type_template_id_1b6d88d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RoomsIndex.vue?vue&type=template&id=1b6d88d0& */ "./resources/js/views/rooms/RoomsIndex.vue?vue&type=template&id=1b6d88d0&");
/* harmony import */ var _RoomsIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RoomsIndex.vue?vue&type=script&lang=js& */ "./resources/js/views/rooms/RoomsIndex.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _RoomsIndex_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RoomsIndex.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/views/rooms/RoomsIndex.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RoomsIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RoomsIndex_vue_vue_type_template_id_1b6d88d0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RoomsIndex_vue_vue_type_template_id_1b6d88d0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/rooms/RoomsIndex.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/rooms/RoomsIndex.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/rooms/RoomsIndex.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomsIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RoomsIndex.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/rooms/RoomsIndex.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomsIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/rooms/RoomsIndex.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/rooms/RoomsIndex.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomsIndex_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./RoomsIndex.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/rooms/RoomsIndex.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomsIndex_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomsIndex_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomsIndex_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomsIndex_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomsIndex_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/rooms/RoomsIndex.vue?vue&type=template&id=1b6d88d0&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/rooms/RoomsIndex.vue?vue&type=template&id=1b6d88d0& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomsIndex_vue_vue_type_template_id_1b6d88d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./RoomsIndex.vue?vue&type=template&id=1b6d88d0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/rooms/RoomsIndex.vue?vue&type=template&id=1b6d88d0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomsIndex_vue_vue_type_template_id_1b6d88d0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomsIndex_vue_vue_type_template_id_1b6d88d0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=12.js.map