(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{191:function(e,t,o){"use strict";o.r(t);var s={name:"RoomsCreate",data:function(){return{isLoading:!1,form:{name:"",lead:"",description:"",status:!1,sort:0}}},methods:{submitForm:function(){var e=this;this.isLoading=!0,axios.post("/api/rooms",this.form).then((function(t){e.isLoading=!1,201==t.status&&(e.$message({type:"success",message:"Номер успешно создан!"}),e.$router.push("/rooms"))})).catch((function(t){console.log(t),e.isLoading=!1})),console.log("submit form"),console.log(this.form)}}},a=o(0),r=Object(a.a)(s,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-container",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}],attrs:{direction:"vertical"}},[o("h3",[e._v("Создание нового номера")]),e._v(" "),o("el-form",{ref:"form",attrs:{model:e.form,"label-width":"240px","label-position":"left"}},[o("el-form-item",{attrs:{label:"Название номера"}},[o("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"Статус"}},[o("el-switch",{attrs:{"active-text":"Вкл.","inactive-text":"Выкл."},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"Сортировка"}},[o("el-input-number",{attrs:{size:"small",step:1,min:0,max:100},model:{value:e.form.sort,callback:function(t){e.$set(e.form,"sort",t)},expression:"form.sort"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"Краткое описание номера"}},[o("el-input",{model:{value:e.form.lead,callback:function(t){e.$set(e.form,"lead",t)},expression:"form.lead"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"Полное описание номера"}},[o("el-input",{attrs:{type:"textarea",rows:4},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),e._v(" "),o("el-form-item",[o("el-button",{attrs:{size:"small",type:"plain"},on:{click:function(t){return e.$router.push({name:"rooms",params:{}})}}},[e._v("Отмена")]),e._v(" "),o("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.submitForm}},[e._v("Создать")])],1)],1)],1)}),[],!1,null,"303d2fa4",null);t.default=r.exports}}]);