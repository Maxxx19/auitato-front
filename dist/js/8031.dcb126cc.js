"use strict";(self["webpackChunkdemo1"]=self["webpackChunkdemo1"]||[]).push([[8031],{79097:function(t,n,e){e.d(n,{O:function(){return s}});var o=e(5080),a=e(49486),s=function(t){var n=t.substring(t.lastIndexOf("."),t.length),e="dark"==a.Z.getters.getThemeMode?"".concat(t.substring(0,t.lastIndexOf(".")),"-dark"):t.substring(0,t.lastIndexOf("."));return"media/illustrations/".concat(o.Gv.value,"/").concat(e).concat(n)}},68932:function(t,n,e){e.d(n,{M:function(){return s},V:function(){return r}});var o=e(49486),a=e(15758),s=function(t,n){o.Z.dispatch(a.e.SET_BREADCRUMB_ACTION,{title:t,pageBreadcrumbPath:n})},r=function(t){o.Z.dispatch(a.e.SET_BREADCRUMB_ACTION,{title:t})}},5080:function(t,n,e){e.d(n,{Df:function(){return _},F9:function(){return g},Fh:function(){return i},Gv:function(){return k},K1:function(){return p},Lj:function(){return l},Ne:function(){return c},Yn:function(){return w},_T:function(){return f},az:function(){return h},jH:function(){return r},o$:function(){return u},o4:function(){return v},pD:function(){return b},vc:function(){return s},vj:function(){return y},xV:function(){return d},zK:function(){return m}});var o=e(66252),a=e(49486),s=(0,o.Fl)((function(){return a.Z.getters.layoutConfig()})),r=((0,o.Fl)((function(){return a.Z.getters.layoutConfig("sidebar.display")})),(0,o.Fl)((function(){return"fluid"===a.Z.getters.layoutConfig("footer.width")}))),i=(0,o.Fl)((function(){return"fluid"===a.Z.getters.layoutConfig("header.width")})),l=(0,o.Fl)((function(){return a.Z.getters.layoutConfig("header.left")})),u=(0,o.Fl)((function(){return!0===a.Z.getters.layoutConfig("aside.display")})),c=(0,o.Fl)((function(){return"fluid"===a.Z.getters.layoutConfig("toolbar.width")})),d=(0,o.Fl)((function(){return a.Z.getters.layoutConfig("toolbar.display")})),m=(0,o.Fl)((function(){return a.Z.getters.layoutConfig("loader.display")})),f=(0,o.Fl)((function(){return"fluid"===a.Z.getters.layoutConfig("content.width")})),b=(0,o.Fl)((function(){return"/metronic8/vue/demo1/"+a.Z.getters.layoutConfig("loader.logo")})),p=(0,o.Fl)((function(){return!!a.Z.getters.layoutConfig("aside.display")})),g=(0,o.Fl)((function(){return a.Z.getters.layoutConfig("aside.theme")})),h=(0,o.Fl)((function(){return a.Z.getters.layoutConfig("toolbar.display")})),v=(0,o.Fl)((function(){return a.Z.getters.layoutConfig("aside.menuIcon")})),_=(0,o.Fl)((function(){return a.Z.getters.layoutConfig("main.logo.light")})),y=(0,o.Fl)((function(){return a.Z.getters.layoutConfig("main.logo.dark")})),w=(0,o.Fl)((function(){return a.Z.getters.layoutConfig("header.menuIcon")})),k=(0,o.Fl)((function(){return a.Z.getters.layoutConfig("illustrations.set")}))},8168:function(t,n,e){e.d(n,{Z:function(){return v}});var o=e(66252),a=e(3577),s={class:"card"},r={class:"card-body p-0"},i={class:"card-px text-center py-20 my-10"},l={class:"fs-2x fw-bold mb-10"},u={class:"text-gray-400 fs-5 fw-semobold mb-13"},c=["innerHTML"],d=["data-bs-target"],m={class:"text-center px-5"},f=["src"];function b(t,n,e,b,p,g){return(0,o.wg)(),(0,o.iD)("div",s,[(0,o._)("div",r,[(0,o._)("div",i,[(0,o._)("h2",l,(0,a.zw)(t.title),1),(0,o._)("p",u,[(0,o._)("span",{innerHTML:t.description},null,8,c)]),(0,o._)("button",{type:"button",class:"btn btn-primary er fs-6 px-8 py-4","data-bs-toggle":"modal","data-bs-target":"#".concat(t.modalId)},(0,a.zw)(t.buttonText),9,d)]),(0,o._)("div",m,[(0,o._)("img",{src:t.image,alt:"",class:"mw-100 mh-300px"},null,8,f)])])])}var p=(0,o.aZ)({name:"modal-card",props:{title:String,description:String,buttonText:String,image:String,modalId:String},components:{}}),g=e(83744);const h=(0,g.Z)(p,[["render",b]]);var v=h},58031:function(t,n,e){e.r(n),e.d(n,{default:function(){return rt}});var o=e(66252);function a(t,n,e,a,s,r){var i=(0,o.up)("KTModalCard"),l=(0,o.up)("KTTwoFactorAuthModal");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(i,{title:"Two-factor Authentication",description:"Click on the below buttons to launch <br/>two-factor authentication setup example.",image:t.getIllustrationsPath("4.png"),"button-text":"Enable Two-factor Authentication","modal-id":"kt_modal_two_factor_authentication"},null,8,["image"]),(0,o.Wm)(l)],64)}var s=e(8168),r=e(3577),i=e(49963),l={class:"modal fade",id:"kt_modal_two_factor_authentication",tabindex:"-1","aria-hidden":"true"},u={class:"modal-dialog modal-dialog-centered mw-650px"},c={class:"modal-content"},d={class:"modal-header flex-stack"},m=(0,o._)("h2",null,"Choose An Authentication Method",-1),f={class:"btn btn-sm btn-icon btn-active-color-primary","data-bs-dismiss":"modal"},b={class:"svg-icon svg-icon-1"},p={class:"modal-body scroll-y pt-10 pb-15 px-lg-17"},g=(0,o._)("p",{class:"text-gray-400 fs-5 fw-semobold mb-10"}," In addition to your username and password, you’ll have to enter a code (delivered via app or SMS) to log into your account. ",-1),h={class:"pb-10"},v={class:"btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center mb-5",for:"kt_modal_two_factor_authentication_option_1"},_={class:"svg-icon svg-icon-4x me-4"},y=(0,o._)("span",{class:"d-block fw-semobold text-start"},[(0,o._)("span",{class:"text-dark fw-bold d-block fs-3"},"Authenticator Apps"),(0,o._)("span",{class:"text-gray-400 fw-semobold fs-6"}," Get codes from an app like Google Authenticator, Microsoft Authenticator, Authy or 1Password. ")],-1),w={class:"btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center",for:"kt_modal_two_factor_authentication_option_2"},k={class:"svg-icon svg-icon-4x me-4"},x=(0,o._)("span",{class:"d-block fw-semobold text-start"},[(0,o._)("span",{class:"text-dark fw-bold d-block fs-3"},"SMS"),(0,o._)("span",{class:"text-gray-400 fw-semobold fs-6"},"We will send a code via SMS if you need to use your backup login method.")],-1),C=(0,o.uE)('<h3 class="text-dark fw-bold mb-7">Authenticator Apps</h3><div class="text-gray-500 fw-semobold fs-6 mb-10"> Using an authenticator app like <a href="https://support.google.com/accounts/answer/1066447?hl=en" target="_blank">Google Authenticator</a>, <a href="https://www.microsoft.com/en-us/account/authenticator" target="_blank">Microsoft Authenticator</a>, <a href="https://authy.com/download/" target="_blank">Authy</a>, or <a href="https://support.1password.com/one-time-passwords/" target="_blank">1Password</a>, scan the QR code. It will generate a 6 digit code for you to enter below. <div class="pt-5 text-center"><img src="media/misc/qr.png" alt="" class="mw-150px"></div></div>',2),F={class:"notice d-flex bg-light-warning rounded border-warning border border-dashed mb-10 p-6"},A={class:"svg-icon svg-icon-2tx svg-icon-warning me-4"},Z=(0,o._)("div",{class:"d-flex flex-stack flex-grow-1"},[(0,o._)("div",{class:"fw-semobold"},[(0,o._)("div",{class:"fs-6 text-gray-600"},[(0,o.Uk)(" If you having trouble using the QR code, select manual entry on your app, and enter your username and the code: "),(0,o._)("div",{class:"fw-bold text-dark pt-2"}," KBSS3QDAAFUMCBY63YCKI5WSSVACUMPN ")])])],-1),M={class:"mb-10 fv-row"},S={class:"fv-plugins-message-container"},T={class:"fv-help-block"},B={class:"d-flex flex-center"},I={ref:"submitAuthCodeButtonRef",type:"submit","data-kt-element":"apps-submit",class:"btn btn-primary"},W=(0,o._)("span",{class:"indicator-label"}," Submit ",-1),R=(0,o._)("span",{class:"indicator-progress"},[(0,o.Uk)(" Please wait... "),(0,o._)("span",{class:"spinner-border spinner-border-sm align-middle ms-2"})],-1),E=[W,R],U=(0,o._)("h3",{class:"text-dark fw-bold fs-3 mb-5"}," SMS: Verify Your Mobile Number ",-1),O=(0,o._)("div",{class:"text-gray-400 fw-semobold mb-10"}," Enter your mobile phone number with country code and we will send you a verification code upon request. ",-1),D={class:"mb-10 fv-row"},H={class:"fv-plugins-message-container"},K={class:"fv-help-block"},P={class:"d-flex flex-center"},G={ref:"submitMobileButtonRef",type:"submit","data-kt-element":"sms-submit",class:"btn btn-primary"},N=(0,o._)("span",{class:"indicator-label"}," Submit ",-1),V=(0,o._)("span",{class:"indicator-progress"},[(0,o.Uk)(" Please wait... "),(0,o._)("span",{class:"spinner-border spinner-border-sm align-middle ms-2"})],-1),z=[N,V];function Y(t,n,e,a,s,W){var R=(0,o.up)("inline-svg"),N=(0,o.up)("Field"),V=(0,o.up)("ErrorMessage"),Y=(0,o.up)("Form");return(0,o.wg)(),(0,o.iD)("div",l,[(0,o._)("div",u,[(0,o._)("div",c,[(0,o._)("div",d,[m,(0,o._)("div",f,[(0,o._)("span",b,[(0,o.Wm)(R,{src:"media/icons/duotune/arrows/arr061.svg"})])])]),(0,o._)("div",p,[(0,o._)("div",{class:(0,r.C_)([""!==t.state&&"d-none"])},[g,(0,o._)("div",h,[(0,o.wy)((0,o._)("input",{type:"radio",class:"btn-check",name:"auth_option",value:"apps",checked:"checked",id:"kt_modal_two_factor_authentication_option_1","onUpdate:modelValue":n[0]||(n[0]=function(n){return t.value=n})},null,512),[[i.G2,t.value]]),(0,o._)("label",v,[(0,o._)("span",_,[(0,o.Wm)(R,{src:"media/icons/duotune/coding/cod001.svg"})]),y]),(0,o.wy)((0,o._)("input",{type:"radio",class:"btn-check",name:"auth_option",value:"sms",id:"kt_modal_two_factor_authentication_option_2","onUpdate:modelValue":n[1]||(n[1]=function(n){return t.value=n})},null,512),[[i.G2,t.value]]),(0,o._)("label",w,[(0,o._)("span",k,[(0,o.Wm)(R,{src:"media/icons/duotune/communication/com003.svg"})]),x])]),(0,o._)("button",{onClick:n[2]||(n[2]=function(n){return t.state=t.value}),class:"btn btn-primary w-100"}," Continue ")],2),(0,o._)("div",{class:(0,r.C_)(["apps"!==t.state&&"d-none"]),"data-kt-element":"apps"},[C,(0,o._)("div",F,[(0,o._)("span",A,[(0,o.Wm)(R,{src:"media/icons/duotune/general/gen044.svg"})]),Z]),(0,o.Wm)(Y,{class:"form",onSubmit:n[4]||(n[4]=function(n){return t.submitAuthCodeForm()}),"validation-schema":t.schema2},{default:(0,o.w5)((function(){return[(0,o._)("div",M,[(0,o.Wm)(N,{type:"text",class:"form-control form-control-lg form-control-solid",placeholder:"Enter authentication code",name:"code"}),(0,o._)("div",S,[(0,o._)("div",T,[(0,o.Wm)(V,{name:"code"})])])]),(0,o._)("div",B,[(0,o._)("button",{type:"reset",onClick:n[3]||(n[3]=function(n){return t.state=""}),class:"btn btn-light me-3"}," Cancel "),(0,o._)("button",I,E,512)])]})),_:1},8,["validation-schema"])],2),(0,o._)("div",{class:(0,r.C_)(["sms"!==t.state&&"d-none"]),"data-kt-element":"sms"},[U,O,(0,o.Wm)(Y,{class:"form",onSubmit:n[6]||(n[6]=function(n){return t.submitMobileForm()}),"validation-schema":t.schema1},{default:(0,o.w5)((function(){return[(0,o._)("div",D,[(0,o.Wm)(N,{type:"text",class:"form-control form-control-lg form-control-solid",placeholder:"Mobile number with country code...",name:"mobile"}),(0,o._)("div",H,[(0,o._)("div",K,[(0,o.Wm)(V,{name:"mobile"})])])]),(0,o._)("div",P,[(0,o._)("button",{onClick:n[5]||(n[5]=function(n){return t.state=""}),class:"btn btn-light me-3"}," Cancel "),(0,o._)("button",G,z,512)])]})),_:1},8,["validation-schema"])],2)])])])])}var q=e(2262),j=e(74231),L=e(12954),Q=e(78764),$=e.n(Q),J=(0,o.aZ)({name:"two-factor-auth-modal",components:{ErrorMessage:L.Bc,Field:L.gN,Form:L.l0},setup:function(){var t=(0,q.iH)("apps"),n=(0,q.iH)(""),e=(0,q.iH)(null),o=(0,q.iH)(null),a=j.Ry().shape({mobile:j.Z_().required().label("Mobile")}),s=j.Ry().shape({code:j.Z_().required().label("Code")}),r=function(){e.value&&(e.value.setAttribute("data-kt-indicator","on"),setTimeout((function(){var t;null===(t=e.value)||void 0===t||t.removeAttribute("data-kt-indicator"),$().fire({text:"Form has been successfully submitted!",icon:"success",buttonsStyling:!1,confirmButtonText:"Ok, got it!",customClass:{confirmButton:"btn btn-primary"}}).then((function(){n.value=""}))}),2e3))},i=function(){o.value&&(o.value.disabled=!0,o.value.setAttribute("data-kt-indicator","on"),setTimeout((function(){var t;o.value&&(o.value.disabled=!1,null===(t=o.value)||void 0===t||t.removeAttribute("data-kt-indicator")),$().fire({text:"Form has been successfully submitted!",icon:"success",buttonsStyling:!1,confirmButtonText:"Ok, got it!",customClass:{confirmButton:"btn btn-primary"}}).then((function(){n.value=""}))}),2e3))};return{value:t,state:n,schema1:a,schema2:s,submitAuthCodeForm:r,submitMobileForm:i,submitAuthCodeButtonRef:e,submitMobileButtonRef:o}}}),X=e(83744);const tt=(0,X.Z)(J,[["render",Y]]);var nt=tt,et=e(68932),ot=e(79097),at=(0,o.aZ)({name:"two-factor-auth",components:{KTModalCard:s.Z,KTTwoFactorAuthModal:nt},setup:function(){return(0,o.bv)((function(){(0,et.M)("Two Factor Auth",["Modals","Wizards"])})),{getIllustrationsPath:ot.O}}});const st=(0,X.Z)(at,[["render",a]]);var rt=st}}]);
//# sourceMappingURL=8031.dcb126cc.js.map