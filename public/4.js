(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{196:function(t,n,a){"use strict";a.r(n);var e=a(0),i=a(6),c={name:"ContactsIndex",data:function(){return{isLoading:!1,contactsList:[],needleStr:"",findTimer:null,paginatorData:{total:0,perPage:0,currentPage:1}}},methods:{getContacts:function(){var t=this;this.isLoading=!0;var n={page:this.paginatorData.currentPage};""!=this.needleStr&&(n.needleStr=this.needleStr),i.a.getContactsPaginated(n).then((function(n){t.contactsList=n.data.data,t.paginatorData.total=n.data.total,t.paginatorData.perPage=n.data.per_page,t.paginatorData.currentPage=n.data.current_page,t.isLoading=!1}))},searchContact:function(){if(null!=this.findTimer)return!1;var t=this;this.findTimer=setTimeout((function(){t.getContacts(),t.findTimer=null}),500)},mobileContactActionClick:function(t){switch(console.log(t),t.action){case"call":this.callContact(t.contact.phone);break;case"email":this.mailContact(t.contact.email);break;case"edit":this.$router.push({name:"contacts-edit",params:{id:t.contact.id}});break;case"delete":this.deleteContact(t.contact)}},paginatorPageChange:function(t){this.paginatorData.currentPage=t,window.scrollTo(0,0),this.getContacts()},deleteContact:function(t){var n=this;this.$confirm("Вы действительно хотите удалить контакт ".concat(t.name,"?"),"Удаление контакта",{confirmButtonText:"Да",cancelButtonText:"Отмена",type:"warning"}).then((function(){n.isLoading=!0,i.a.deleteContact(t.id).then((function(t){n.isLoading=!1,t&&(e.a.showSuccessMessage("Контакт успешно удален!"),n.getContacts())}))})).catch((function(){}))},callContact:function(t){window.location="tel:".concat(t)},mailContact:function(t){window.location="mailto:".concat(t)}},mounted:function(){this.getContacts()}},o=(a(98),a(1)),r=Object(o.a)(c,(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("el-container",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],attrs:{direction:"vertical"}},[a("h3",[t._v("Контакты")]),t._v(" "),a("div",{staticClass:"controls"},[a("el-button",{attrs:{circle:"",icon:"el-icon-plus",type:"primary",title:"Добавить контакт"},on:{click:function(n){return t.$router.push({name:"contacts-create"})}}})],1),t._v(" "),a("el-input",{staticClass:"search-input",attrs:{"prefix-icon":"el-icon-search",placeholder:"Введите имя, либо фамилию для поиска",clearable:""},on:{input:t.searchContact},model:{value:t.needleStr,callback:function(n){t.needleStr=n},expression:"needleStr"}}),t._v(" "),a("div",{staticClass:"card-list"},t._l(t.contactsList,(function(n){return a("el-card",{key:n.id,staticClass:"contact-card"},[a("div",{staticClass:"name-block"},[t._v("\n                "+t._s(n.name)+" "+t._s(n.surname)+"\n            ")]),t._v(" "),a("div",{staticClass:"actions-block"},[a("div",{staticClass:"hidden-xs-only"},[n.phone?a("el-button",{attrs:{circle:"",icon:"el-icon-phone",type:"success",title:"Позвонить"},on:{click:function(a){return t.callContact(n.phone)}}}):t._e(),t._v(" "),n.email?a("el-button",{attrs:{circle:"",icon:"el-icon-message",type:"primary",title:"Написать email"},on:{click:function(a){return t.mailContact(n.email)}}}):t._e(),t._v(" "),a("el-button",{attrs:{circle:"",icon:"el-icon-edit",type:"warning",title:"Редактировать"},on:{click:function(a){return t.$router.push({name:"contacts-edit",params:{id:n.id}})}}}),t._v(" "),a("el-button",{attrs:{circle:"",icon:"el-icon-delete",type:"danger",title:"Удалить контакт"},on:{click:function(a){return t.deleteContact(n)}}})],1),t._v(" "),a("el-dropdown",{staticClass:"hidden-sm-and-up",attrs:{type:"primary",trigger:"click"},on:{command:t.mobileContactActionClick}},[a("el-button",{attrs:{icon:"el-icon-more",type:"primary"}}),t._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n.phone?a("el-dropdown-item",{attrs:{icon:"el-icon-phone",command:{action:"call",contact:n}}},[t._v("Позвонить")]):t._e(),t._v(" "),n.email?a("el-dropdown-item",{attrs:{icon:"el-icon-message",command:{action:"email",contact:n}}},[t._v("Написать email")]):t._e(),t._v(" "),a("el-dropdown-item",{attrs:{icon:"el-icon-edit",command:{action:"edit",contact:n}}},[t._v("Редактировать")]),t._v(" "),a("el-dropdown-item",{attrs:{icon:"el-icon-delete",command:{action:"delete",contact:n}}},[t._v("Удалить контакт")])],1)],1)],1)])})),1),t._v(" "),a("el-pagination",{staticClass:"contact-pagination",attrs:{background:"","pager-count":5,"hide-on-single-page":!0,layout:"prev, pager, next",total:t.paginatorData.total,"page-size":t.paginatorData.perPage,"current-page":t.paginatorData.currentPage},on:{"update:currentPage":function(n){return t.$set(t.paginatorData,"currentPage",n)},"update:current-page":function(n){return t.$set(t.paginatorData,"currentPage",n)},"current-change":t.paginatorPageChange}})],1)}),[],!1,null,null,null);n.default=r.exports},27:function(t,n,a){var e=a(99);"string"==typeof e&&(e=[[t.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(15)(e,i);e.locals&&(t.exports=e.locals)},98:function(t,n,a){"use strict";var e=a(27);a.n(e).a},99:function(t,n,a){(t.exports=a(14)(!1)).push([t.i,".search-input {\n  margin-bottom: 20px;\n}\n.card-list {\n  margin-bottom: 20px;\n}\n.contact-card .el-card__body {\n  display: flex;\n  justify-content: space-between;\n}\n.contact-card .el-card__body .name-block {\n  display: flex;\n  align-items: center;\n  margin-right: 20px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: clip;\n}\n.contact-card .el-card__body .actions-block {\n  display: flex;\n  align-items: center;\n}\n.contact-pagination {\n  text-align: center;\n}",""])}}]);