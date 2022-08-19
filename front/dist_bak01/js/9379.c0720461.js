"use strict";(self["webpackChunkdemo1"]=self["webpackChunkdemo1"]||[]).push([[9379],{79097:function(e,t,a){a.d(t,{O:function(){return s}});var n=a(5080),i=a(49486),s=function(e){var t=e.substring(e.lastIndexOf("."),e.length),a="dark"==i.Z.getters.getThemeMode?"".concat(e.substring(0,e.lastIndexOf(".")),"-dark"):e.substring(0,e.lastIndexOf("."));return"media/illustrations/".concat(n.Gv.value,"/").concat(a).concat(t)}},68932:function(e,t,a){a.d(t,{M:function(){return s},V:function(){return o}});var n=a(49486),i=a(15758),s=function(e,t){n.Z.dispatch(i.e.SET_BREADCRUMB_ACTION,{title:e,pageBreadcrumbPath:t})},o=function(e){n.Z.dispatch(i.e.SET_BREADCRUMB_ACTION,{title:e})}},5080:function(e,t,a){a.d(t,{Df:function(){return w},F9:function(){return v},Fh:function(){return r},Gv:function(){return _},K1:function(){return p},Lj:function(){return l},Ne:function(){return u},Yn:function(){return x},_T:function(){return f},az:function(){return b},jH:function(){return o},o$:function(){return c},o4:function(){return y},pD:function(){return g},vc:function(){return s},vj:function(){return h},xV:function(){return d},zK:function(){return m}});var n=a(66252),i=a(49486),s=(0,n.Fl)((function(){return i.Z.getters.layoutConfig()})),o=((0,n.Fl)((function(){return i.Z.getters.layoutConfig("sidebar.display")})),(0,n.Fl)((function(){return"fluid"===i.Z.getters.layoutConfig("footer.width")}))),r=(0,n.Fl)((function(){return"fluid"===i.Z.getters.layoutConfig("header.width")})),l=(0,n.Fl)((function(){return i.Z.getters.layoutConfig("header.left")})),c=(0,n.Fl)((function(){return!0===i.Z.getters.layoutConfig("aside.display")})),u=(0,n.Fl)((function(){return"fluid"===i.Z.getters.layoutConfig("toolbar.width")})),d=(0,n.Fl)((function(){return i.Z.getters.layoutConfig("toolbar.display")})),m=(0,n.Fl)((function(){return i.Z.getters.layoutConfig("loader.display")})),f=(0,n.Fl)((function(){return"fluid"===i.Z.getters.layoutConfig("content.width")})),g=(0,n.Fl)((function(){return"/metronic8/vue/demo1/"+i.Z.getters.layoutConfig("loader.logo")})),p=(0,n.Fl)((function(){return!!i.Z.getters.layoutConfig("aside.display")})),v=(0,n.Fl)((function(){return i.Z.getters.layoutConfig("aside.theme")})),b=(0,n.Fl)((function(){return i.Z.getters.layoutConfig("toolbar.display")})),y=(0,n.Fl)((function(){return i.Z.getters.layoutConfig("aside.menuIcon")})),w=(0,n.Fl)((function(){return i.Z.getters.layoutConfig("main.logo.light")})),h=(0,n.Fl)((function(){return i.Z.getters.layoutConfig("main.logo.dark")})),x=(0,n.Fl)((function(){return i.Z.getters.layoutConfig("header.menuIcon")})),_=(0,n.Fl)((function(){return i.Z.getters.layoutConfig("illustrations.set")}))},8168:function(e,t,a){a.d(t,{Z:function(){return y}});var n=a(66252),i=a(3577),s={class:"card"},o={class:"card-body p-0"},r={class:"card-px text-center py-20 my-10"},l={class:"fs-2x fw-bold mb-10"},c={class:"text-gray-400 fs-5 fw-semobold mb-13"},u=["innerHTML"],d=["data-bs-target"],m={class:"text-center px-5"},f=["src"];function g(e,t,a,g,p,v){return(0,n.wg)(),(0,n.iD)("div",s,[(0,n._)("div",o,[(0,n._)("div",r,[(0,n._)("h2",l,(0,i.zw)(e.title),1),(0,n._)("p",c,[(0,n._)("span",{innerHTML:e.description},null,8,u)]),(0,n._)("button",{type:"button",class:"btn btn-primary er fs-6 px-8 py-4","data-bs-toggle":"modal","data-bs-target":"#".concat(e.modalId)},(0,i.zw)(e.buttonText),9,d)]),(0,n._)("div",m,[(0,n._)("img",{src:e.image,alt:"",class:"mw-100 mh-300px"},null,8,f)])])])}var p=(0,n.aZ)({name:"modal-card",props:{title:String,description:String,buttonText:String,image:String,modalId:String},components:{}}),v=a(83744);const b=(0,v.Z)(p,[["render",g]]);var y=b},19379:function(e,t,a){a.r(t),a.d(t,{default:function(){return B}});var n=a(66252);function i(e,t,a,i,s,o){var r=(0,n.up)("KTModalCard"),l=(0,n.up)("KTViewUsersModal");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(r,{title:"View Users Modal Example",description:"Click on the below buttons to launch <br/>user lists example.",image:e.getIllustrationsPath("10.png"),"button-text":"View Users","modal-id":"kt_modal_view_users"},null,8,["image"]),(0,n.Wm)(l)],64)}var s=a(8168),o=a(3577),r={class:"modal fade",id:"kt_modal_view_users",tabindex:"-1","aria-hidden":"true"},l={class:"modal-dialog mw-650px"},c={class:"modal-content"},u={class:"modal-header pb-0 border-0 justify-content-end"},d={class:"btn btn-sm btn-icon btn-active-color-primary","data-bs-dismiss":"modal"},m={class:"svg-icon svg-icon-1"},f={class:"modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15"},g=(0,n._)("div",{class:"text-center mb-13"},[(0,n._)("h1",{class:"mb-3"},"Browse Users"),(0,n._)("div",{class:"text-gray-400 fw-semobold fs-5"},[(0,n.Uk)(" If you need more info, please check out our "),(0,n._)("a",{href:"#",class:"link-primary fw-bold"},"Users Directory"),(0,n.Uk)(". ")])],-1),p={class:"mb-15"},v={class:"mh-375px scroll-y me-n7 pe-7"},b={class:"d-flex align-items-center"},y={class:"symbol symbol-35px symbol-circle"},w=["src"],h={class:"ms-6"},x={href:"#",class:"d-flex align-items-center fs-5 fw-bold text-dark text-hover-primary"},_={class:"badge badge-light fs-8 fw-semobold ms-2"},k={class:"fw-semobold text-gray-400"},C={class:"d-flex"},Z={class:"text-end"},F={class:"fs-5 fw-bold text-dark"},M=(0,n._)("div",{class:"fs-7 text-muted"},"Sales",-1),D=(0,n.uE)('<div class="d-flex justify-content-between"><div class="fw-semobold"><label class="fs-6">Adding Users by Team Members</label><div class="fs-7 text-gray-400"> If you need more info, please check budget planning </div></div><label class="form-check form-switch form-check-custom form-check-solid"><input class="form-check-input" type="checkbox" value="" checked="checked"><span class="form-check-label fw-semobold text-gray-400"> Allowed </span></label></div>',1);function T(e,t,a,i,s,T){var U=(0,n.up)("inline-svg");return(0,n.wg)(),(0,n.iD)("div",r,[(0,n._)("div",l,[(0,n._)("div",c,[(0,n._)("div",u,[(0,n._)("div",d,[(0,n._)("span",m,[(0,n.Wm)(U,{src:"media/icons/duotune/arrows/arr061.svg"})])])]),(0,n._)("div",f,[g,(0,n._)("div",p,[(0,n._)("div",v,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.users,(function(e,t){return(0,n.wg)(),(0,n.iD)("div",{key:t,class:"d-flex flex-stack py-5 border-bottom border-gray-300 border-bottom-dashed"},[(0,n._)("div",b,[(0,n._)("div",y,[e.avatar?((0,n.wg)(),(0,n.iD)("img",{key:0,alt:"Pic",src:e.avatar},null,8,w)):((0,n.wg)(),(0,n.iD)("span",{key:1,class:(0,o.C_)(["bg-light-".concat(e.state," text-").concat(e.state),"symbol-label fw-semobold"])},(0,o.zw)(e.name.charAt(0)),3))]),(0,n._)("div",h,[(0,n._)("a",x,[(0,n.Uk)((0,o.zw)(e.name)+" ",1),(0,n._)("span",_,(0,o.zw)(e.position),1)]),(0,n._)("div",k,(0,o.zw)(e.email),1)])]),(0,n._)("div",C,[(0,n._)("div",Z,[(0,n._)("div",F," $"+(0,o.zw)(e.sales),1),M])])])})),128))])]),D])])])])}var U=(0,n.aZ)({name:"view-users-modal",components:{},setup:function(){var e=[{avatar:"media/avatars/300-6.jpg",name:"Emma Smith",email:"e.smith@kpmg.com.au",position:"Art Director",sales:"23,000"},{state:"danger",name:"Melody Macy",email:"melody@altbox.com",position:"Marketing Analytic",sales:"50,500"},{avatar:"media/avatars/300-1.jpg",name:"Max Smith",email:"max@kt.com",position:"Software Enginer",sales:"75,900"},{avatar:"media/avatars/300-1.jpg",name:"Sean Bean",email:"sean@dellito.com",position:"Web Developer",sales:"10,500"},{avatar:"media/avatars/300-25.jpg",name:"Brian Cox",email:"brian@exchange.com",position:"UI/UX Designer",sales:"20,000"},{state:"warning",name:"Mikaela Collins",email:"mikaela@pexcom.com",position:"Head Of Marketing",sales:"9,300"},{avatar:"media/avatars/300-9.jpg",name:"Francis Mitcham",email:"f.mitcham@kpmg.com.au",position:"Software Arcitect",sales:"15,000"},{state:"danger",name:"Olivia Wild",email:"olivia@corpmail.com",position:"System Admin",sales:"23,000"},{state:"info",name:"Neil Owen",email:"owen.neil@gmail.com",position:"Account Manager",sales:"45,000"},{avatar:"media/avatars/300-23.jpg",name:"Dan Wilson",email:"dam@consilting.com",position:"Web Desinger",sales:"90,500"},{state:"danger",name:"Emma Bold",email:"emma@intenso.com",position:"Corporate Finance",sales:"5,000"},{avatar:"media/avatars/300-12.jpg",name:"Ana Crown",email:"ana.cf@limtel.com",position:"Customer Relationship",sales:"70,000"},{state:"primary",name:"Robert Doe",email:"robert@benko.com",position:"Marketing Executive",sales:"45,500"}];return{users:e}}}),I=a(83744);const S=(0,I.Z)(U,[["render",T]]);var A=S,j=a(68932),E=a(79097),O=(0,n.aZ)({name:"view-users",components:{KTModalCard:s.Z,KTViewUsersModal:A},setup:function(){return(0,n.bv)((function(){(0,j.M)("View Users",["Modals","General"])})),{getIllustrationsPath:E.O}}});const z=(0,I.Z)(O,[["render",i]]);var B=z}}]);
//# sourceMappingURL=9379.c0720461.js.map