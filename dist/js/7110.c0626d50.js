"use strict";(self["webpackChunkdemo1"]=self["webpackChunkdemo1"]||[]).push([[7110],{79097:function(e,t,a){a.d(t,{O:function(){return r}});var n=a(5080),l=a(49486),r=function(e){var t=e.substring(e.lastIndexOf("."),e.length),a="dark"==l.Z.getters.getThemeMode?"".concat(e.substring(0,e.lastIndexOf(".")),"-dark"):e.substring(0,e.lastIndexOf("."));return"media/illustrations/".concat(n.Gv.value,"/").concat(a).concat(t)}},68932:function(e,t,a){a.d(t,{M:function(){return r},V:function(){return o}});var n=a(49486),l=a(15758),r=function(e,t){n.Z.dispatch(l.e.SET_BREADCRUMB_ACTION,{title:e,pageBreadcrumbPath:t})},o=function(e){n.Z.dispatch(l.e.SET_BREADCRUMB_ACTION,{title:e})}},5080:function(e,t,a){a.d(t,{Df:function(){return y},F9:function(){return p},Fh:function(){return i},Gv:function(){return k},K1:function(){return b},Lj:function(){return s},Ne:function(){return c},Yn:function(){return w},_T:function(){return m},az:function(){return _},jH:function(){return o},o$:function(){return u},o4:function(){return v},pD:function(){return g},vc:function(){return r},vj:function(){return h},xV:function(){return d},zK:function(){return f}});var n=a(66252),l=a(49486),r=(0,n.Fl)((function(){return l.Z.getters.layoutConfig()})),o=((0,n.Fl)((function(){return l.Z.getters.layoutConfig("sidebar.display")})),(0,n.Fl)((function(){return"fluid"===l.Z.getters.layoutConfig("footer.width")}))),i=(0,n.Fl)((function(){return"fluid"===l.Z.getters.layoutConfig("header.width")})),s=(0,n.Fl)((function(){return l.Z.getters.layoutConfig("header.left")})),u=(0,n.Fl)((function(){return!0===l.Z.getters.layoutConfig("aside.display")})),c=(0,n.Fl)((function(){return"fluid"===l.Z.getters.layoutConfig("toolbar.width")})),d=(0,n.Fl)((function(){return l.Z.getters.layoutConfig("toolbar.display")})),f=(0,n.Fl)((function(){return l.Z.getters.layoutConfig("loader.display")})),m=(0,n.Fl)((function(){return"fluid"===l.Z.getters.layoutConfig("content.width")})),g=(0,n.Fl)((function(){return"/metronic8/vue/demo1/"+l.Z.getters.layoutConfig("loader.logo")})),b=(0,n.Fl)((function(){return!!l.Z.getters.layoutConfig("aside.display")})),p=(0,n.Fl)((function(){return l.Z.getters.layoutConfig("aside.theme")})),_=(0,n.Fl)((function(){return l.Z.getters.layoutConfig("toolbar.display")})),v=(0,n.Fl)((function(){return l.Z.getters.layoutConfig("aside.menuIcon")})),y=(0,n.Fl)((function(){return l.Z.getters.layoutConfig("main.logo.light")})),h=(0,n.Fl)((function(){return l.Z.getters.layoutConfig("main.logo.dark")})),w=(0,n.Fl)((function(){return l.Z.getters.layoutConfig("header.menuIcon")})),k=(0,n.Fl)((function(){return l.Z.getters.layoutConfig("illustrations.set")}))},8168:function(e,t,a){a.d(t,{Z:function(){return v}});var n=a(66252),l=a(3577),r={class:"card"},o={class:"card-body p-0"},i={class:"card-px text-center py-20 my-10"},s={class:"fs-2x fw-bold mb-10"},u={class:"text-gray-400 fs-5 fw-semobold mb-13"},c=["innerHTML"],d=["data-bs-target"],f={class:"text-center px-5"},m=["src"];function g(e,t,a,g,b,p){return(0,n.wg)(),(0,n.iD)("div",r,[(0,n._)("div",o,[(0,n._)("div",i,[(0,n._)("h2",s,(0,l.zw)(e.title),1),(0,n._)("p",u,[(0,n._)("span",{innerHTML:e.description},null,8,c)]),(0,n._)("button",{type:"button",class:"btn btn-primary er fs-6 px-8 py-4","data-bs-toggle":"modal","data-bs-target":"#".concat(e.modalId)},(0,l.zw)(e.buttonText),9,d)]),(0,n._)("div",f,[(0,n._)("img",{src:e.image,alt:"",class:"mw-100 mh-300px"},null,8,m)])])])}var b=(0,n.aZ)({name:"modal-card",props:{title:String,description:String,buttonText:String,image:String,modalId:String},components:{}}),p=a(83744);const _=(0,p.Z)(b,[["render",g]]);var v=_},2178:function(e,t,a){a.d(t,{Z:function(){return ee}});var n=a(66252),l=a(49963),r={class:"modal fade",id:"kt_modal_new_target",ref:"newTargetModalRef",tabindex:"-1","aria-hidden":"true"},o={class:"modal-dialog modal-dialog-centered mw-650px"},i={class:"modal-content rounded"},s={class:"modal-header pb-0 border-0 justify-content-end"},u={class:"btn btn-sm btn-icon btn-active-color-primary","data-bs-dismiss":"modal"},c={class:"svg-icon svg-icon-1"},d={class:"modal-body scroll-y px-10 px-lg-15 pt-0 pb-15"},f=(0,n._)("div",{class:"mb-13 text-center"},[(0,n._)("h1",{class:"mb-3"},"Set First Target"),(0,n._)("div",{class:"text-gray-400 fw-semobold fs-5"},[(0,n.Uk)(" If you need more info, please check "),(0,n._)("a",{href:"#",class:"fw-bold link-primary"},"Project Guidelines"),(0,n.Uk)(". ")])],-1),m={class:"d-flex flex-column mb-8 fv-row"},g=(0,n._)("label",{class:"d-flex align-items-center fs-6 fw-semobold mb-2"},[(0,n._)("span",{class:"required"},"Target Title"),(0,n._)("i",{class:"fas fa-exclamation-circle ms-2 fs-7","data-bs-toggle":"tooltip",title:"Specify a target name for future usage and reference"})],-1),b={class:"row g-9 mb-8"},p={class:"col-md-6 fv-row"},_=(0,n._)("label",{class:"required fs-6 fw-semobold mb-2"},"Assign",-1),v=(0,n.Uk)("Select user..."),y=(0,n.Uk)("Karina Clark"),h=(0,n.Uk)("Robert Doe"),w=(0,n.Uk)("Niel Owen"),k=(0,n.Uk)("Olivia Wild"),x=(0,n.Uk)("Sean Bean"),D={class:"col-md-6 fv-row"},T=(0,n._)("label",{class:"required fs-6 fw-semobold mb-2"},"Due Date",-1),C={class:"position-relative align-items-center"},Z={class:"symbol symbol-20px me-4 position-absolute ms-4"},W={class:"symbol-label bg-secondary"},F={class:"svg-icon"},S={class:"d-flex flex-column mb-8"},U=(0,n._)("label",{class:"fs-6 fw-semobold mb-2"},"Target Details",-1),V={class:"d-flex flex-column mb-8 fv-row"},A=(0,n._)("label",{class:"d-flex align-items-center fs-6 fw-semobold mb-2"},[(0,n._)("span",{class:"required"},"Tags"),(0,n._)("i",{class:"fas fa-exclamation-circle ms-2 fs-7","data-bs-toggle":"tooltip",title:"Specify a target priorty"})],-1),I=(0,n._)("div",{class:"d-flex flex-stack mb-8"},[(0,n._)("div",{class:"me-5"},[(0,n._)("label",{class:"fs-6 fw-semobold"},"Adding Users by Team Members"),(0,n._)("div",{class:"fs-7 fw-semobold text-gray-400"}," If you need more info, please check budget planning ")]),(0,n._)("label",{class:"form-check form-switch form-check-custom form-check-solid"},[(0,n._)("input",{class:"form-check-input",type:"checkbox",value:"1",checked:"checked"}),(0,n._)("span",{class:"form-check-label fw-semobold text-gray-400"}," Allowed ")])],-1),O=(0,n._)("div",{class:"mb-15 fv-row"},[(0,n._)("div",{class:"d-flex flex-stack"},[(0,n._)("div",{class:"fw-semobold me-5"},[(0,n._)("label",{class:"fs-6"},"Notifications"),(0,n._)("div",{class:"fs-7 text-gray-400"}," Allow Notifications by Phone or Email ")]),(0,n._)("div",{class:"d-flex align-items-center"},[(0,n._)("label",{class:"form-check form-check-custom form-check-solid me-10"},[(0,n._)("input",{class:"form-check-input h-20px w-20px",type:"checkbox",name:"communication[]",value:"email",checked:"checked"}),(0,n._)("span",{class:"form-check-label fw-semobold"}," Email ")]),(0,n._)("label",{class:"form-check form-check-custom form-check-solid"},[(0,n._)("input",{class:"form-check-input h-20px w-20px",type:"checkbox",name:"communication[]",value:"phone"}),(0,n._)("span",{class:"form-check-label fw-semobold"}," Phone ")])])])],-1),B={class:"text-center"},M=(0,n._)("button",{type:"reset",id:"kt_modal_new_target_cancel",class:"btn btn-light me-3"}," Cancel ",-1),q=["data-kt-indicator"],R={key:0,class:"indicator-label"},P=(0,n.Uk)(" Submit "),H={class:"svg-icon svg-icon-3 ms-2 me-0"},z={key:1,class:"indicator-progress"},E=(0,n.Uk)(" Please wait... "),N=(0,n._)("span",{class:"spinner-border spinner-border-sm align-middle ms-2"},null,-1),j=[E,N];function K(e,t,a,E,N,K){var G=(0,n.up)("inline-svg"),L=(0,n.up)("el-input"),Y=(0,n.up)("el-form-item"),$=(0,n.up)("el-option"),J=(0,n.up)("el-select"),Q=(0,n.up)("el-date-picker"),X=(0,n.up)("el-form");return(0,n.wg)(),(0,n.iD)("div",r,[(0,n._)("div",o,[(0,n._)("div",i,[(0,n._)("div",s,[(0,n._)("div",u,[(0,n._)("span",c,[(0,n.Wm)(G,{src:"media/icons/duotune/arrows/arr061.svg"})])])]),(0,n._)("div",d,[(0,n.Wm)(X,{id:"kt_modal_new_target_form",onSubmit:t[5]||(t[5]=(0,l.iM)((function(t){return e.submit()}),["prevent"])),model:e.targetData,rules:e.rules,ref:"formRef",class:"form"},{default:(0,n.w5)((function(){return[f,(0,n._)("div",m,[g,(0,n.Wm)(Y,{prop:"targetTitle"},{default:(0,n.w5)((function(){return[(0,n.Wm)(L,{modelValue:e.targetData.targetTitle,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.targetData.targetTitle=t}),placeholder:"Enter Target Title",name:"targetTitle"},null,8,["modelValue"])]})),_:1})]),(0,n._)("div",b,[(0,n._)("div",p,[_,(0,n.Wm)(Y,{prop:"assign"},{default:(0,n.w5)((function(){return[(0,n.Wm)(J,{modelValue:e.targetData.assign,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.targetData.assign=t}),placeholder:"Select a Team Member",name:"assign",as:"select"},{default:(0,n.w5)((function(){return[(0,n.Wm)($,{value:""},{default:(0,n.w5)((function(){return[v]})),_:1}),(0,n.Wm)($,{label:"Karina Clark",value:"1"},{default:(0,n.w5)((function(){return[y]})),_:1}),(0,n.Wm)($,{label:"Robert Doe",value:"2"},{default:(0,n.w5)((function(){return[h]})),_:1}),(0,n.Wm)($,{label:"Niel Owen",value:"3"},{default:(0,n.w5)((function(){return[w]})),_:1}),(0,n.Wm)($,{label:"Olivia Wild",value:"4"},{default:(0,n.w5)((function(){return[k]})),_:1}),(0,n.Wm)($,{label:"Sean Bean",value:"5"},{default:(0,n.w5)((function(){return[x]})),_:1})]})),_:1},8,["modelValue"])]})),_:1})]),(0,n._)("div",D,[T,(0,n._)("div",C,[(0,n._)("div",Z,[(0,n._)("span",W,[(0,n._)("span",F,[(0,n.Wm)(G,{src:"media/icons/duotune/general/gen025.svg"})])])]),(0,n.Wm)(Y,{prop:"dueDate"},{default:(0,n.w5)((function(){return[(0,n.Wm)(Q,{modelValue:e.targetData.dueDate,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.targetData.dueDate=t}),placeholder:"Select a date",name:"dueDate"},null,8,["modelValue"])]})),_:1})])])]),(0,n._)("div",S,[U,(0,n.Wm)(Y,{prop:"targetDetails"},{default:(0,n.w5)((function(){return[(0,n.Wm)(L,{modelValue:e.targetData.targetDetails,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.targetData.targetDetails=t}),type:"textarea",rows:"3",name:"targetDetails",placeholder:"Type Target Details"},null,8,["modelValue"])]})),_:1})]),(0,n._)("div",V,[A,(0,n.Wm)(Y,{prop:"tags"},{default:(0,n.w5)((function(){return[(0,n.Wm)(J,{modelValue:e.targetData.tags,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.targetData.tags=t}),multiple:"",filterable:"","allow-create":"","default-first-option":"",placeholder:"Choose tags for your target"},{default:(0,n.w5)((function(){return[(0,n.Wm)($,{label:"Important",value:"important"}),(0,n.Wm)($,{label:"Urgent",value:"urgent"}),(0,n.Wm)($,{label:"high",value:"high"}),(0,n.Wm)($,{label:"low",value:"low"}),(0,n.Wm)($,{label:"medium",value:"medium"})]})),_:1},8,["modelValue"])]})),_:1})]),I,O,(0,n._)("div",B,[M,(0,n._)("button",{"data-kt-indicator":e.loading?"on":null,class:"btn btn-lg btn-primary",type:"submit"},[e.loading?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("span",R,[P,(0,n._)("span",H,[(0,n.Wm)(G,{src:"media/icons/duotune/arrows/arr064.svg"})])])),e.loading?((0,n.wg)(),(0,n.iD)("span",z,j)):(0,n.kq)("",!0)],8,q)])]})),_:1},8,["model","rules"])])])])],512)}var G=a(2262),L=a(38561),Y=a(78764),$=a.n(Y),J=(0,n.aZ)({name:"new-target-modal",components:{},setup:function(){var e=(0,G.iH)(null),t=(0,G.iH)(null),a=(0,G.iH)(!1),n=(0,G.iH)({targetTitle:"",assign:"",dueDate:"",targetDetails:"",tags:["important","urgent"]}),l=(0,G.iH)({targetTitle:[{required:!0,message:"Please input Activity name",trigger:"blur"}],assign:[{required:!0,message:"Please select Activity zone",trigger:"change"}],dueDate:[{required:!0,message:"Please select Activity zone",trigger:"change"}],tags:[{required:!0,message:"Please select Activity zone",trigger:"change"}]}),r=function(){e.value&&e.value.validate((function(e){if(!e)return $().fire({text:"Sorry, looks like there are some errors detected, please try again.",icon:"error",buttonsStyling:!1,confirmButtonText:"Ok, got it!",customClass:{confirmButton:"btn btn-primary"}}),!1;a.value=!0,setTimeout((function(){a.value=!1,$().fire({text:"Form has been successfully submitted!",icon:"success",buttonsStyling:!1,confirmButtonText:"Ok, got it!",customClass:{confirmButton:"btn btn-primary"}}).then((function(){(0,L.V)(t.value)}))}),2e3)}))};return{targetData:n,submit:r,loading:a,formRef:e,rules:l,newTargetModalRef:t}}}),Q=a(83744);const X=(0,Q.Z)(J,[["render",K]]);var ee=X}}]);
//# sourceMappingURL=7110.c0626d50.js.map