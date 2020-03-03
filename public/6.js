(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1:function(e,t,o){"use strict";var s=o(19);t.a={showSuccessMessage:function(e){Object(s.Message)({type:"success",message:e,showClose:!0})},handleError:function(e){Object(s.Message)({type:"error",message:"Произошла ошибка! (код: ".concat(e.response.status,")"),showClose:!0}),console.log(e.response)}}},194:function(e,t,o){"use strict";o.r(t);var s=o(1),a={name:"RoomsEdit",data:function(){return{Helpers:s.a,isLoading:!1,room:{}}},methods:{getRoom:function(){var e=this;this.isLoading=!0;var t=this.$route.params.id;axios.get("/api/rooms/".concat(t)).then((function(t){e.isLoading=!1,e.room=t.data})).catch((function(t){e.isLoading=!1,s.a.handleError(t)}))},update:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];axios.post("/api/rooms/update",this.room).then((function(o){e.isLoading=!1,s.a.showSuccessMessage("Информация о номере успешно обновлена!"),t&&e.$router.push("/rooms")})).catch((function(t){e.isLoading=!1,s.a.handleError(t)}))}},mounted:function(){this.getRoom()}},n=o(0),r=Object(n.a)(a,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-container",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}],attrs:{direction:"vertical"}},[o("h3",[e._v('Редактирование Номера "'+e._s(e.room.name)+'"')]),e._v(" "),o("el-form",{ref:"form",attrs:{model:e.room,"label-width":"240px","label-position":"left"}},[o("el-form-item",{attrs:{label:"Название номера"}},[o("el-input",{model:{value:e.room.name,callback:function(t){e.$set(e.room,"name",t)},expression:"room.name"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"Статус"}},[o("el-switch",{attrs:{"active-text":"Вкл.","inactive-text":"Выкл."},model:{value:e.room.status,callback:function(t){e.$set(e.room,"status",t)},expression:"room.status"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"Сортировка"}},[o("el-input-number",{attrs:{size:"small",step:1,min:0,max:100},model:{value:e.room.sort,callback:function(t){e.$set(e.room,"sort",t)},expression:"room.sort"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"Краткое описание номера"}},[o("el-input",{model:{value:e.room.lead,callback:function(t){e.$set(e.room,"lead",t)},expression:"room.lead"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"Полное описание номера"}},[o("el-input",{attrs:{type:"textarea",rows:4},model:{value:e.room.description,callback:function(t){e.$set(e.room,"description",t)},expression:"room.description"}})],1),e._v(" "),o("el-form-item",[o("el-button",{attrs:{size:"small",type:"plain",title:"Отмена"},on:{click:function(t){return e.$router.push({name:"rooms"})}}},[e._v("Отмена")]),e._v(" "),o("el-button",{attrs:{size:"small",type:"primary",title:"Сохранить, но не выходить"},on:{click:function(t){return e.update()}}},[e._v("Применить")]),e._v(" "),o("el-button",{attrs:{size:"small",type:"success",title:"Сохранить и вернуться к списку номеров"},on:{click:function(t){return e.update(!0)}}},[e._v("Сохранить")])],1)],1)],1)}),[],!1,null,"741fb27a",null);t.default=r.exports}}]);