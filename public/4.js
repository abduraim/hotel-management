(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1:function(e,s,t){"use strict";var n=t(19);s.a={showSuccessMessage:function(e){Object(n.Message)({type:"success",message:e,showClose:!0})},handleError:function(e){Object(n.Message)({type:"error",message:"Произошла ошибка! (код: ".concat(e.response.status,")"),showClose:!0}),console.log(e.response)}}},195:function(e,s,t){"use strict";t.r(s);var n=t(1),o={name:"Reservations",data:function(){return{Helpers:n.a,isLoading:!1}},methods:{}},a=t(0),r=Object(a.a)(o,(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("el-container",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}],attrs:{direction:"vertical"}},[t("h3",[e._v("Бронирования")]),e._v(" "),t("div",{staticClass:"controls"},[t("el-button",{attrs:{size:"small",circle:"",icon:"el-icon-plus",type:"primary",title:"Добавить бронирование"},on:{click:function(s){return e.$router.push({name:"reservations-create"})}}})],1)])}),[],!1,null,"422982b0",null);s.default=r.exports}}]);