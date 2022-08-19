"use strict";(self["webpackChunkdemo1"]=self["webpackChunkdemo1"]||[]).push([[5893],{60607:function(e,t,a){a.r(t),a.d(t,{default:function(){return J}});var n=a(66252),l=a(49963),o=a(3577),s={class:"card"},r={class:"card-header border-0 pt-6"},c={class:"card-title"},u={class:"d-flex align-items-center position-relative my-1"},d={class:"svg-icon svg-icon-1 position-absolute ms-6"},i={class:"card-toolbar"},m={key:0,class:"d-flex justify-content-end","data-kt-customer-table-toolbar":"base"},p={type:"button",class:"btn btn-light-primary me-3","data-bs-toggle":"modal","data-bs-target":"#kt_customers_export_modal"},v={class:"svg-icon svg-icon-2"},b=(0,n.Uk)(" Добавить отклик "),f={type:"button",class:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#kt_modal_add_customer"},g={class:"svg-icon svg-icon-2"},h=(0,n.Uk)(" Добавить категорию "),w={key:1,class:"d-flex justify-content-end align-items-center","data-kt-customer-table-toolbar":"selected"},_={class:"fw-bold me-5"},k={class:"me-2"},y=(0,n.Uk)("Selected "),C=(0,n._)("div",{class:"d-flex justify-content-end align-items-center d-none","data-kt-customer-table-toolbar":"selected"},[(0,n._)("div",{class:"fw-bold me-5"},[(0,n._)("span",{class:"me-2","data-kt-customer-table-select":"selected_count"}),(0,n.Uk)("Selected ")]),(0,n._)("button",{type:"button",class:"btn btn-danger","data-kt-customer-table-select":"delete_selected"}," Delete Selected ")],-1),x={class:"card-body pt-0"},W={href:"#",class:"text-gray-600 text-hover-primary mb-1"},D=["src"],I={href:"#",class:"btn btn-sm btn-light btn-active-light-primary","data-kt-menu-trigger":"click","data-kt-menu-placement":"bottom-end","data-kt-menu-flip":"top-end"},S=(0,n.Uk)("Actions "),U={class:"svg-icon svg-icon-5 m-0"},E={class:"menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semobold fs-7 w-125px py-4","data-kt-menu":"true"},H={class:"menu-item px-3"},M=(0,n.Uk)("View"),N={class:"menu-item px-3"},R=["onClick"];function z(e,t,a,z,L,Z){var O=(0,n.up)("inline-svg"),j=(0,n.up)("router-link"),A=(0,n.up)("Datatable"),F=(0,n.up)("ExportCustomerModal"),V=(0,n.up)("AddCustomerModal");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",s,[(0,n._)("div",r,[(0,n._)("div",c,[(0,n._)("div",u,[(0,n._)("span",d,[(0,n.Wm)(O,{src:"media/icons/duotune/general/gen021.svg"})]),(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.search=t}),onInput:t[1]||(t[1]=function(t){return e.searchItems()}),class:"form-control form-control-solid w-250px ps-15",placeholder:"Search Response"},null,544),[[l.nr,e.search]])])]),(0,n._)("div",i,[0===e.selectedIds.length?((0,n.wg)(),(0,n.iD)("div",m,[(0,n._)("button",p,[(0,n._)("span",v,[(0,n.Wm)(O,{src:"media/icons/duotune/arrows/arr078.svg"})]),b]),(0,n._)("button",f,[(0,n._)("span",g,[(0,n.Wm)(O,{src:"media/icons/duotune/arrows/arr075.svg"})]),h])])):((0,n.wg)(),(0,n.iD)("div",w,[(0,n._)("div",_,[(0,n._)("span",k,(0,o.zw)(e.selectedIds.length),1),y]),(0,n._)("button",{type:"button",class:"btn btn-danger",onClick:t[2]||(t[2]=function(t){return e.deleteFewCustomers()})}," Delete Selected ")])),C])]),(0,n._)("div",x,[(0,n.Wm)(A,{onOnSort:e.sort,onOnItemsSelect:e.onItemSelect,data:e.tableData,header:e.tableHeader,"enable-items-per-page-dropdown":!0,"checkbox-enabled":!0,"checkbox-label":"id"},{name:(0,n.w5)((function(e){var t=e.row;return[(0,n.Uk)((0,o.zw)(t.name),1)]})),email:(0,n.w5)((function(e){var t=e.row;return[(0,n._)("a",W,(0,o.zw)(t.email),1)]})),company:(0,n.w5)((function(e){var t=e.row;return[(0,n.Uk)((0,o.zw)(t.company),1)]})),paymentMethod:(0,n.w5)((function(e){var t=e.row;return[(0,n._)("img",{src:t.payment.icon,class:"w-35px me-3",alt:""},null,8,D),(0,n.Uk)((0,o.zw)(t.payment.ccnumber),1)]})),date:(0,n.w5)((function(e){var t=e.row;return[(0,n.Uk)((0,o.zw)(t.date),1)]})),actions:(0,n.w5)((function(t){var a=t.row;return[(0,n._)("a",I,[S,(0,n._)("span",U,[(0,n.Wm)(O,{src:"media/icons/duotune/arrows/arr072.svg"})])]),(0,n._)("div",E,[(0,n._)("div",H,[(0,n.Wm)(j,{to:"/apps/customers/customer-details",class:"menu-link px-3"},{default:(0,n.w5)((function(){return[M]})),_:1})]),(0,n._)("div",N,[(0,n._)("a",{onClick:function(t){return e.deleteCustomer(a.id)},class:"menu-link px-3"},"Delete",8,R)])])]})),_:1},8,["onOnSort","onOnItemsSelect","data","header"])])]),(0,n.Wm)(F),(0,n.Wm)(V)],64)}var L=a(70655),Z=a(2262),O=a(42489),j=a(59747),A=a(95370),F=a(68932),V=a(4321),P=a(27621),Y=a.n(P),q=(0,n.aZ)({name:"list-responses-representations",components:{Datatable:O.Z,ExportCustomerModal:j.Z,AddCustomerModal:A.Z},setup:function(){var e=(0,Z.iH)([{columnName:"Customer Name",columnLabel:"name",sortEnabled:!0,columnWidth:175},{columnName:"Email",columnLabel:"email",sortEnabled:!0,columnWidth:230},{columnName:"Company",columnLabel:"company",sortEnabled:!0,columnWidth:175},{columnName:"Payment Method",columnLabel:"paymentMethod",sortEnabled:!0,columnWidth:175},{columnName:"Created Date",columnLabel:"date",sortEnabled:!0,columnWidth:225},{columnName:"Actions",columnLabel:"actions",sortEnabled:!1,columnWidth:135}]),t=(0,Z.iH)([]),a=(0,Z.iH)(V.Z),l=(0,Z.iH)([]);(0,n.bv)((function(){var e;(0,F.M)("Responses",["Representations"]),(e=l.value).splice.apply(e,(0,L.ev)([0,a.value.length],(0,L.CR)(a.value),!1))}));var o=function(){t.value.forEach((function(e){s(e)})),t.value.length=0},s=function(e){for(var t=0;t<a.value.length;t++)a.value[t].id===e&&a.value.splice(t,1)},r=(0,Z.iH)(""),c=function(){var e,t;if((e=a.value).splice.apply(e,(0,L.ev)([0,a.value.length],(0,L.CR)(l.value),!1)),""!==r.value){for(var n=[],o=0;o<a.value.length;o++)u(a.value[o],r.value)&&n.push(a.value[o]);(t=a.value).splice.apply(t,(0,L.ev)([0,a.value.length],(0,L.CR)(n),!1))}},u=function(e,t){for(var a in e)if(!Number.isInteger(e[a])&&"object"!==typeof e[a]&&-1!=e[a].indexOf(t))return!0;return!1},d=function(e){var t="asc"===e.order;e.label&&Y()(a.value,e.label,{reverse:t})},i=function(e){0===e.length?t.value=[]:t.value=(0,L.ev)((0,L.ev)([],(0,L.CR)(t.value),!1),(0,L.CR)(e),!1)};return{tableData:a,tableHeader:e,deleteCustomer:s,search:r,searchItems:c,selectedIds:t,deleteFewCustomers:o,sort:d,onItemSelect:i}}}),B=a(83744);const G=(0,B.Z)(q,[["render",z]]);var J=G}}]);
//# sourceMappingURL=5893.446029d4.js.map