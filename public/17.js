(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/rooms/RoomsEdit.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/rooms/RoomsEdit.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "RoomsEdit",
  data: function data() {
    return {
      isLoading: false,
      room: {}
    };
  },
  methods: {
    getRoom: function getRoom() {
      var _this = this;

      this.isLoading = true;
      var roomId = this.$route.params.id;
      _components_commonController__WEBPACK_IMPORTED_MODULE_1__["default"].getRoomItem({
        id: roomId
      }).then(function (response) {
        _this.isLoading = false;

        if (response) {
          _this.room = response.data;
        }
      });
    },
    // Обновление информации о Номере
    update: function update() {
      var _this2 = this;

      var returnToPage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.isLoading = true;
      _components_commonController__WEBPACK_IMPORTED_MODULE_1__["default"].updateRoom(this.room).then(function (response) {
        _components_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].showSuccessMessage('Информация о номере успешно обновлена!');
        _this2.isLoading = false;

        if (returnToPage) {
          _this2.$router.push({
            name: 'rooms-index'
          });
        }
      });
    }
  },
  mounted: function mounted() {
    this.getRoom();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/rooms/RoomsEdit.vue?vue&type=template&id=3892407c&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/rooms/RoomsEdit.vue?vue&type=template&id=3892407c&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
      _c("h3", [
        _vm._v('Редактирование Номера "' + _vm._s(_vm.room.name) + '"')
      ]),
      _vm._v(" "),
      _c(
        "el-form",
        {
          ref: "form",
          attrs: {
            model: _vm.room,
            "label-width": "240px",
            "label-position": "left"
          }
        },
        [
          _c(
            "el-form-item",
            { attrs: { label: "Название номера" } },
            [
              _c("el-input", {
                model: {
                  value: _vm.room.name,
                  callback: function($$v) {
                    _vm.$set(_vm.room, "name", $$v)
                  },
                  expression: "room.name"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "Статус" } },
            [
              _c("el-switch", {
                attrs: { "active-text": "Вкл.", "inactive-text": "Выкл." },
                model: {
                  value: _vm.room.status,
                  callback: function($$v) {
                    _vm.$set(_vm.room, "status", $$v)
                  },
                  expression: "room.status"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "Краткое описание номера" } },
            [
              _c("el-input", {
                model: {
                  value: _vm.room.lead,
                  callback: function($$v) {
                    _vm.$set(_vm.room, "lead", $$v)
                  },
                  expression: "room.lead"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "Полное описание номера" } },
            [
              _c("el-input", {
                attrs: { type: "textarea", rows: 4 },
                model: {
                  value: _vm.room.description,
                  callback: function($$v) {
                    _vm.$set(_vm.room, "description", $$v)
                  },
                  expression: "room.description"
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
                  _c("el-button", {
                    attrs: {
                      type: "plain",
                      title: "Отмена",
                      icon: "el-icon-arrow-left"
                    },
                    on: {
                      click: function($event) {
                        return _vm.$router.push({ name: "rooms-index" })
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("el-button", {
                    attrs: {
                      type: "primary",
                      title: "Сохранить, но не выходить",
                      icon: "el-icon-check"
                    },
                    on: {
                      click: function($event) {
                        return _vm.update()
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("el-button", {
                    attrs: {
                      type: "success",
                      title: "Сохранить и вернуться к списку номеров",
                      icon: "el-icon-arrow-right"
                    },
                    on: {
                      click: function($event) {
                        return _vm.update(true)
                      }
                    }
                  })
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

/***/ "./resources/js/views/rooms/RoomsEdit.vue":
/*!************************************************!*\
  !*** ./resources/js/views/rooms/RoomsEdit.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RoomsEdit_vue_vue_type_template_id_3892407c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RoomsEdit.vue?vue&type=template&id=3892407c&scoped=true& */ "./resources/js/views/rooms/RoomsEdit.vue?vue&type=template&id=3892407c&scoped=true&");
/* harmony import */ var _RoomsEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RoomsEdit.vue?vue&type=script&lang=js& */ "./resources/js/views/rooms/RoomsEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RoomsEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RoomsEdit_vue_vue_type_template_id_3892407c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RoomsEdit_vue_vue_type_template_id_3892407c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3892407c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/rooms/RoomsEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/rooms/RoomsEdit.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/rooms/RoomsEdit.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomsEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RoomsEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/rooms/RoomsEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomsEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/rooms/RoomsEdit.vue?vue&type=template&id=3892407c&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/rooms/RoomsEdit.vue?vue&type=template&id=3892407c&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomsEdit_vue_vue_type_template_id_3892407c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./RoomsEdit.vue?vue&type=template&id=3892407c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/rooms/RoomsEdit.vue?vue&type=template&id=3892407c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomsEdit_vue_vue_type_template_id_3892407c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoomsEdit_vue_vue_type_template_id_3892407c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=17.js.map