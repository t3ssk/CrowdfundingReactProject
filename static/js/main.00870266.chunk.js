(this.webpackJsonpcrowdfunding=this.webpackJsonpcrowdfunding||[]).push([[0],{113:function(e,t,a){e.exports={Logo:"Logo_Logo__2CcPY"}},114:function(e,t,a){e.exports={MobileNav:"MobileNav_MobileNav__nlm_q"}},115:function(e,t,a){e.exports={Logo:"MakerLogo_Logo__1dZs3"}},116:function(e,t,a){e.exports={H1:"Infotext_H1__1IOxN"}},117:function(e,t,a){e.exports={Button:"Button_Button__1ouAX"}},118:function(e,t,a){e.exports={Main:"Maincontent_Main__1d6xc"}},131:function(e,t,a){},17:function(e,t,a){e.exports={active:"OptionsList_active__2oW5m",disabled:"OptionsList_disabled__21D1h",PickOption:"OptionsList_PickOption__17q5v",Option__Heading:"OptionsList_Option__Heading__1sn5v",Option__left:"OptionsList_Option__left__31Zdk",Radio__btn:"OptionsList_Radio__btn__3KeUT",Radio__btn__active:"OptionsList_Radio__btn__active__2_hRE",Option__Desc:"OptionsList_Option__Desc__irK3W",Option__enterPledge:"OptionsList_Option__enterPledge__21UHP",Currency:"OptionsList_Currency__3QKl4",Option:"OptionsList_Option__1pQGZ",Option__Heading_text:"OptionsList_Option__Heading_text__mhVzV",Pledge__text:"OptionsList_Pledge__text__2obEn",Pledge__enter:"OptionsList_Pledge__enter__pdk6w"}},234:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a.n(n),c=a(58),o=a.n(c),i=a(5),s=a(28),l=a(46),d=(a(131),a(7)),u=a(8),j=(a(38),a(78)),b=a.n(j),_=a(2),p=function(e){return Object(_.jsx)("section",{className:"".concat(b.a.Card," ").concat(e.small&&b.a.small),children:e.children})},O=a(79),h=a.n(O),m=function(){var e=Object(i.c)((function(e){return e.backers}));return Object(_.jsx)("div",{className:h.a.Progress__holder,children:Object(_.jsx)("div",{className:h.a.Progress__bar,style:{width:"".concat(function(e){var t=e/1e5*100;return t<=100?t:100}(e.money),"%")}})})},f=a(80),x=a.n(f),g=a(63),v=a.n(g),y=function(e){return Object(_.jsxs)("div",{className:"".concat(v.a.Counter__Item," ").concat(e.isLast?null:v.a.Counter__bordered),children:[Object(_.jsx)("h2",{children:e.heading}),Object(_.jsx)("p",{children:e.desc}),Object(_.jsx)("hr",{className:v.a.Deco__underline})]})},k=function(){var e=Object(i.c)((function(e){return e.backers})),t=function(e){for(var t=e.toString().split("").reverse(),a=[],n=t.length;n>=0;n--)3===n?a.push(t[n],","):a.push(t[n]);return a.join("")},a="loading...",n=[{id:"count1",heading:0===e.money?a:"$ ".concat(t(e.money)),desc:"of $100,000 backed",isLast:!1},{id:"count2",heading:0===e.backers?a:t(e.backers),desc:"total backers",isLast:!1},{id:"count3",heading:"56",desc:"days left",isLast:!0}].map((function(e){return Object(_.jsx)(y,{heading:e.heading,desc:e.desc,isLast:e.isLast},e.id)}));return Object(_.jsx)("div",{className:x.a.Counter,children:Object(_.jsxs)(p,{children:[Object(_.jsx)("div",{className:x.a.Counter__info,children:n}),Object(_.jsx)(m,{}),e.money>=1e5&&Object(_.jsx)("h3",{children:"\ud83c\udf89 Thanks for your support, we now have all the money we need \ud83c\udf89"})]})})},N=a(47),C=function(e){var t=e.children;return Object(N.useMediaQuery)({minWidth:787})?t:null},I=function(e){var t=e.children;return Object(N.useMediaQuery)({maxWidth:786})?t:null},T=a(49),S=a.n(T),P=a(12),L=a.p+"static/media/logo.e6f12bc6.svg",w=a(113),E=a.n(w),A=function(){return Object(_.jsx)(s.b,{to:"/",children:Object(_.jsx)("img",{src:L,alt:"company logo",className:E.a.Logo})})},M=a.p+"static/media/icon-hamburger.f8a9f0cf.svg",B=a.p+"static/media/icon-close-menu.32169d31.svg",F=a(50),D=a.n(F),R=function(e){var t=Object(i.c)((function(e){return e.user})),a=Object(i.b)(),n=Object(N.useMediaQuery)({maxWidth:786}),r=function(){a({type:"LOG-OUT/USER"}),a({type:"USER/ERASE_DATA"}),localStorage.removeItem("refreshToken"),localStorage.removeItem("userID"),e.history.push("/")},c=[{id:"nav0",title:"Login/Sign in",href:"/login"},{id:"nav0b",title:"Logout",href:"/logout"},{id:"nav0c",title:"Your purchases",href:"/purchases"},{id:"nav1",title:"About",href:"#"},{id:"nav2",title:"Discover",href:"#"},{id:"nav3",title:"Get Started",href:"#"}].map((function(e){if("#"===e.href)return Object(_.jsx)("li",{children:Object(_.jsx)("a",{href:e.href,className:D.a.disabled,children:e.title})},e.id);if(null===t.refreshToken){if("Logout"!==e.title&&"Your purchases"!==e.title)return Object(_.jsx)("li",{children:Object(_.jsx)(s.c,{to:e.href,children:e.title})},e.id)}else if(null!==t.refreshToken&&"Login/Sign in"!==e.title)return"Logout"===e.title?Object(_.jsx)("li",{className:D.a.Logout,onClick:r,children:e.title},e.id):Object(_.jsx)("li",{children:Object(_.jsx)(s.c,{to:e.href,children:e.title})},e.id)}));return Object(_.jsx)("ul",{className:n?D.a.MobileNavList:D.a.Nav,children:c})},H=Object(d.f)(R),U=a(83),Y=a.n(U),W=a(114),z=a.n(W),K=function(){return Object(_.jsx)("div",{className:z.a.MobileNav,children:Object(_.jsx)(R,{})})},G=function(){var e=Object(n.useState)(!1),t=Object(P.a)(e,2),a=t[0],c=t[1];return Object(_.jsxs)(r.a.Fragment,{children:[Object(_.jsxs)("div",{className:Y.a.Navbar,children:[Object(_.jsx)(A,{}),Object(_.jsx)(C,{children:Object(_.jsx)(H,{})}),Object(_.jsx)(I,{children:Object(_.jsx)("img",{src:a?B:M,alt:"Mobile menu icon",className:Y.a.Burger,onClick:function(){return c(!a)}})})]}),Object(_.jsx)(I,{children:a&&Object(_.jsx)(K,{})})]})},q=function(){return Object(_.jsxs)(r.a.Fragment,{children:[Object(_.jsx)(C,{children:Object(_.jsx)("header",{className:"".concat(S.a.Hero," ").concat(S.a.desktop),children:Object(_.jsx)(G,{})})}),Object(_.jsx)(I,{children:Object(_.jsx)("header",{className:"".concat(S.a.Hero," ").concat(S.a.mobile),children:Object(_.jsx)(G,{})})})]})},V=a(84),Z=a.n(V),Q=a.p+"static/media/logo-mastercraft.dca2a831.svg",X=a(115),$=a.n(X),J=function(){return Object(_.jsx)("div",{className:$.a.Logo,children:Object(_.jsx)("img",{src:Q,alt:"Manufactorer's logo"})})},ee=a(116),te=a.n(ee),ae=function(){return Object(_.jsxs)(r.a.Fragment,{children:[Object(_.jsx)("h1",{className:te.a.H1,children:"Mastercraft Bamboo Monitor Riser"}),Object(_.jsx)("p",{children:"A beautiful & handcrafted monitor stand to reduce neck and eye strain."})]})},ne=a(117),re=a.n(ne),ce=function(e){return Object(_.jsx)("button",{className:re.a.Button,type:e.type?e.type:"button",disabled:e.disabled,onClick:e.onClick,style:{margin:"".concat(e.margin,"px")},children:e.children})},oe=a(36),ie=a.n(oe),se=a.p+"static/media/icon-bookmark.8097d349.svg",le=a.p+"static/media/icon-bookmarkactive.14eeef4f.svg",de=function(){var e=Object(i.c)((function(e){return e.userData})),t=Object(i.b)(),a=e.bookmarked,n=function(){e.userId?(t({type:"USER/UPDATE_BOOKMARK"}),u.a.database().ref("/users/".concat(e.userId,"/bookmarked")).set(!a)):alert("You have to be logged in!")};return Object(_.jsxs)(r.a.Fragment,{children:[Object(_.jsx)(C,{children:Object(_.jsxs)("div",{className:ie.a.Bookamark__Container,onClick:n,children:[Object(_.jsx)("div",{className:ie.a.Bookmark__Icon,children:Object(_.jsx)("img",{src:a?le:se,alt:"bookmark icon"})}),Object(_.jsx)("div",{children:Object(_.jsx)("p",{className:a?"".concat(ie.a.Bookmark__Text," ").concat(ie.a.active):ie.a.Bookmark__Text,children:a?"Bookmarked":"Bookmark"})})]})}),Object(_.jsx)(I,{children:Object(_.jsx)("div",{className:ie.a.Bookmark__Icon,onClick:n,children:Object(_.jsx)("img",{src:a?le:se,alt:"bookmark icon"})})})]})},ue=function(){var e=Object(i.b)();return Object(_.jsx)("div",{className:Z.a.titleCard,children:Object(_.jsxs)(p,{children:[Object(_.jsx)(J,{}),Object(_.jsx)(ae,{}),Object(_.jsxs)("div",{className:Z.a.Buttons,children:[Object(_.jsx)(ce,{onClick:function(){return e({type:"OPTIONS_MODAL/ON"})},children:"Back this project"}),Object(_.jsx)(de,{})]})]})})},je=a(64),be=a.n(je),_e=function(){return Object(_.jsxs)(r.a.Fragment,{children:[Object(_.jsx)("h3",{className:be.a.About__heading,children:"About this project"}),Object(_.jsx)("p",{className:be.a.About__content,children:"The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand."}),Object(_.jsx)("p",{className:be.a.About__content,children:"Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand."})]})},pe=a(118),Oe=a.n(pe),he=a(37),me=a.n(he),fe=function(){var e=Object(i.c)((function(e){return e.options})),t=Object(i.b)(),a=e.filter((function(e){return!0!==e.backingOnly})).map((function(e){return Object(_.jsxs)("article",{className:"".concat(me.a.optionCard," ").concat(e.disabled()?me.a.optionCard_disabled:null),children:[Object(_.jsxs)("div",{className:me.a.optionCard__Titlepart,children:[Object(_.jsx)("h3",{children:e.title}),Object(_.jsx)("p",{className:me.a.optionCard__pledge,children:e.pledge})]}),Object(_.jsx)("p",{children:e.desc}),Object(_.jsxs)("div",{className:me.a.optionCard__Select,children:[Object(_.jsxs)("div",{className:me.a.optionCard__Itemsleft,children:[Object(_.jsx)("h4",{children:e.left}),Object(_.jsx)("p",{children:"left"})]}),Object(_.jsx)(ce,{disabled:e.disabled(),onClick:function(){t({type:"OPTIONS_MODAL/ON"}),t({type:"OPTION/SET_ACTIVE",payload:{id:e.id}})},children:e.disabled()?"Out of stock":"Select Reward"})]})]},e.id)}));return Object(_.jsx)(r.a.Fragment,{children:a})},xe=function(){return Object(_.jsx)("div",{className:Oe.a.Main,children:Object(_.jsxs)(p,{children:[Object(_.jsx)(_e,{}),Object(_.jsx)(fe,{})]})})},ge=a(65),ve=a.n(ge),ye=function(e){var t=Object(i.b)();Object(n.useEffect)((function(){a()}),[]);var a=function(){document.body.scrollTop=0,document.documentElement.scrollTop=0};return Object(_.jsxs)("section",{children:[Object(_.jsx)("div",{className:"".concat(ve.a.Modal," ").concat(e.large&&ve.a.Large),children:e.children}),Object(_.jsx)("div",{className:ve.a.Modal_backsplash,onClick:function(){t({type:"OPTIONS_MODAL/OFF"}),t({type:"SUPPORT_MODAL/OFF"})}})]})},ke=a.p+"static/media/icon-close-modal.982332f7.svg",Ne=a(85),Ce=a.n(Ne),Ie=a(17),Te=a.n(Ie),Se=function(){var e=r.a.useState(0),t=Object(P.a)(e,2),a=t[0],n=t[1],c=Object(i.c)((function(e){return e.options})),o=Object(i.c)((function(e){return e.user})),s=Object(i.c)((function(e){return e.backers})),l=Object(i.b)(),d=function(e){var t=e.target;n(Number(t.value))},j=c.map((function(e){return Object(_.jsxs)("div",{className:"".concat(Te.a.Option," ").concat(e.active&&Te.a.active," ").concat(e.left<=0?Te.a.disabled:null),children:[Object(_.jsxs)("div",{onClick:function(){e.left>0&&l({type:"OPTION/SET_ACTIVE",payload:{id:e.id}})},className:Te.a.PickOption,children:[Object(_.jsxs)("div",{className:Te.a.Option__Heading,children:[Object(_.jsx)("div",{className:Te.a.Radio__btn,children:e.active&&Object(_.jsx)("div",{className:Te.a.Radio__btn__active})}),Object(_.jsxs)("div",{className:Te.a.Option__Heading_text,children:[Object(_.jsx)("h4",{children:e.title}),Object(_.jsx)("p",{children:e.pledge})]})]}),e.left<999&&Object(_.jsxs)("div",{className:Te.a.Option__left,children:[Object(_.jsx)("h5",{children:e.left}),Object(_.jsx)("p",{children:"left"})]}),Object(_.jsx)("p",{className:Te.a.Option__Desc,children:e.desc})]}),e.active&&Object(_.jsxs)("div",{className:Te.a.Option__enterPledge,children:[Object(_.jsx)("p",{className:Te.a.Pledge__text,children:"Enter your pledge"}),Object(_.jsxs)("div",{className:Te.a.Pledge__enter,children:[Object(_.jsxs)("span",{className:Te.a.Currency,children:[Object(_.jsx)("i",{children:"$"}),Object(_.jsx)("input",{type:"number",min:e.minPrice,value:0===a?"":a.toString(),onChange:d})]}),Object(_.jsx)(ce,{onClick:function(){if(0!==a&&a>=e.minPrice){var t={orderNum:Math.floor(1e6*Math.random()),orderedBy:o.userId,donated:a,date:(new Date).toLocaleString("cs-CZ",{timeZone:"UTC"}),item:e.title};u.a.database().ref("/orders/"+t.orderNum).set(t),l({type:"BACKERS/ADD",payload:a}),l({type:"OPTIONS/CHANGE_AMOUNT",payload:{id:e.id}}),u.a.database().ref("backers/").set({backers:s.backers+1,money:s.money+a}),u.a.database().ref("/products/"+e.id).set(e.left),l({type:"OPTIONS_MODAL/OFF"}),l({type:"SUPPORT_MODAL/ON"})}else alert("You have to select at least the minimal amount of money you want to back us with!")},disabled:null===o.refreshToken,children:"Continue"})]})]})]},e.id)}));return Object(_.jsx)(r.a.Fragment,{children:j})},Pe=function(){var e=Object(i.b)();return Object(_.jsxs)(ye,{large:!0,children:[Object(_.jsx)("div",{className:"closeBtn",children:Object(_.jsx)("img",{src:ke,alt:"close button",className:Ce.a.Cross,onClick:function(){return e({type:"OPTIONS_MODAL/OFF"})}})}),Object(_.jsxs)("div",{className:Ce.a.Options__Content,children:[Object(_.jsx)("h3",{children:"Back this project"}),Object(_.jsx)("p",{children:"Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?"})]}),Object(_.jsx)(Se,{})]})},Le=a.p+"static/media/icon-check.bdee5269.svg",we=a(86),Ee=a.n(we),Ae=function(){var e=Object(i.b)();return Object(_.jsxs)(ye,{large:!1,children:[Object(_.jsx)("div",{className:Ee.a.icon,children:Object(_.jsx)("img",{src:Le,alt:"checkmark icon"})}),Object(_.jsxs)("div",{className:Ee.a.SupportModal,children:[Object(_.jsx)("h2",{children:"Thanks for your support!"}),Object(_.jsx)("p",{children:"Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed."}),Object(_.jsx)(ce,{onClick:function(){return e({type:"SUPPORT_MODAL/OFF"})},children:"Got it!"})]})]})},Me=a(66),Be=a.n(Me),Fe=a(41),De=a(11),Re=a(14),He=(a(69),a(51)),Ue=a.n(He),Ye=a(19),We=Ye.a().shape({email:Ye.b().email("Invalid email!").required(),usrname:Ye.b().min(5,"Your username is too short!").max(20,"Your username is too long!").required(),pwd:Ye.b().min(5,"Password too weak").required(),fname:Ye.b().min(3,"Your first name is too short!").max(20,"Your first name is too long!").required(),lname:Ye.b().min(3,"Your last name is too short!").max(20,"Your last name is too long!").required(),address:Ye.b().min(10,"Did you fill in your adress with house number?").required(),city:Ye.b().min(2,"Please use whole name of the city where you live").required(),zip:Ye.b().min(5,"Please use whole postal code").max(5,"The zip code should be without any spaces").required(),phone:Ye.b().min(9,"Please use your whole telephone number").max(13,"Telephone number should be without spaces").required()}),ze=Ye.a().shape({email:Ye.b().email("Invalid email!").required(),pwd:Ye.b().min(5,"Password too weak").required()}),Ke=function(e){var t={email:"",pwd:""},a=Object(n.useState)(t),c=Object(P.a)(a,2),o=c[0],s=c[1],l=Object(i.b)(),d=function(e){var t=Object(De.a)(Object(De.a)({},o),{},Object(Fe.a)({},e.target.id,e.target.value));s(t)};return Object(_.jsx)(r.a.Fragment,{children:Object(_.jsxs)(p,{small:!0,children:[Object(_.jsx)("h2",{className:Ue.a.Login__Welcome,children:"Welcome back!"}),Object(_.jsx)(Re.c,{initialValues:o,onSubmit:function(e){return function(e){u.a.auth().signInWithEmailAndPassword(e.email,e.pwd).then((function(e){var a=e.user;a&&(l({type:"LOG-IN/USER",payload:{userId:a.uid,refreshToken:a.refreshToken}}),u.a.database().ref("/users/"+a.uid).on("value",(function(e){var t=e.val();console.log(a),l({type:"USER/FETCH_DATA",payload:t}),localStorage.setItem("refreshToken",a.refreshToken),localStorage.setItem("userID",a.uid)}))),s(t)})).catch((function(e){alert(e.message)}))}(e)},enableReinitialize:!0,validationSchema:ze,validateOnChange:!0,children:function(e){var t=e.errors,a=e.touched;return Object(_.jsxs)(Re.b,{className:Ue.a.Form,children:[Object(_.jsxs)("div",{className:Ue.a.Input,children:[Object(_.jsx)("label",{htmlFor:"email",children:"E-mail"}),Object(_.jsx)(Re.a,{type:"email",name:"email",id:"email",placeholder:"name@email.com",value:o.email,onChange:d}),t.email&&a.email?Object(_.jsx)("p",{children:t.email}):null]}),Object(_.jsxs)("div",{className:Ue.a.Input,children:[Object(_.jsx)("label",{htmlFor:"pwd",children:"Password"}),Object(_.jsx)(Re.a,{type:"password",name:"pwd",id:"pwd",placeholder:"ooooooo",value:o.pwd,onChange:d}),t.pwd&&a.pwd?Object(_.jsx)("p",{children:t.pwd}):null]}),Object(_.jsx)(ce,{margin:30,type:"submit",children:"Login"})]})}})]})})},Ge=a.p+"static/media/logo-dark.211c3174.svg",qe=a(88),Ve=a.n(qe),Ze=a(25),Qe=a.n(Ze),Xe=function(e){var t={email:"",pwd:"",usrname:"",fname:"",lname:"",address:"",city:"",zip:"",phone:""},a=Object(n.useState)(t),r=Object(P.a)(a,2),c=r[0],o=r[1],s=Object(i.b)(),l=Object(n.useState)(null),d=Object(P.a)(l,2),j=d[0],b=d[1],O=function(e){var t=e.target.value,a=e.target.id,n=Object(De.a)(Object(De.a)({},c),{},Object(Fe.a)({},a,t));o(n)};return Object(_.jsxs)(p,{small:!0,children:[Object(_.jsx)("h2",{className:Qe.a.Signin__Welcome,children:"Welcome to the club!"}),j&&Object(_.jsx)("p",{children:j}),Object(_.jsx)(Re.c,{initialValues:c,onSubmit:function(e){return function(e){u.a.auth().createUserWithEmailAndPassword(e.email,e.pwd).then((function(a){var n=a.user;if(n){var r={username:e.usrname,name:e.fname,lastName:e.lname,userId:n.uid,address:e.address,city:e.city,zip:e.zip,phone:e.phone,bookmarked:!1};s({type:"LOG-IN/USER",payload:{userId:n.uid,refreshToken:n.refreshToken}}),localStorage.setItem("refreshToken",n.refreshToken),localStorage.setItem("userID",n.uid),u.a.database().ref("users/"+n.uid).set(r),s({type:"USER/FETCH_DATA",payload:r})}o(t)})).catch((function(e){b(e.message)}))}(e)},enableReinitialize:!0,validationSchema:We,validateOnChange:!0,children:function(e){var t=e.errors,a=e.touched;return Object(_.jsxs)(Re.b,{className:Qe.a.Form,children:[Object(_.jsxs)("div",{className:Qe.a.Input,children:[Object(_.jsx)("label",{htmlFor:"email",children:"E-mail"}),Object(_.jsx)(Re.a,{type:"email",id:"email",name:"email",placeholder:"eg. name@email.com",value:c.email,onChange:O}),t.email&&a.email?Object(_.jsx)("p",{children:t.email}):null]}),Object(_.jsxs)("div",{className:Qe.a.Input,children:[Object(_.jsx)("label",{htmlFor:"pwd",children:"Password"}),Object(_.jsx)(Re.a,{type:"password",id:"pwd",name:"pwd",placeholder:"*******",value:c.pwd,onChange:O}),t.pwd&&a.pwd?Object(_.jsx)("p",{children:t.pwd}):null]}),Object(_.jsxs)("div",{className:Qe.a.Input,children:[Object(_.jsx)("label",{htmlFor:"usrname",children:"Username"}),Object(_.jsx)(Re.a,{type:"text",id:"usrname",name:"usrname",placeholder:"eg. Mrs.Doom500",value:c.usrname,onChange:O}),t.usrname&&a.usrname?Object(_.jsx)("p",{children:t.usrname}):null]}),Object(_.jsxs)("div",{className:Qe.a.Input,children:[Object(_.jsx)("label",{htmlFor:"fname",children:"First name"}),Object(_.jsx)(Re.a,{type:"text",id:"fname",name:"fname",placeholder:"eg. Jane",value:c.fname,onChange:O}),t.fname&&a.fname?Object(_.jsx)("p",{children:t.fname}):null]}),Object(_.jsxs)("div",{className:Qe.a.Input,children:[Object(_.jsx)("label",{htmlFor:"lname",children:"Last name"}),Object(_.jsx)(Re.a,{type:"text",id:"lname",name:"lname",placeholder:"eg. Jane",value:c.lname,onChange:O}),t.lname&&a.lname?Object(_.jsx)("p",{children:t.lname}):null]}),Object(_.jsxs)("div",{className:Qe.a.Input,children:[Object(_.jsx)("label",{htmlFor:"address",children:"Address line 1"}),Object(_.jsx)(Re.a,{type:"text",id:"address",name:"address",placeholder:"eg. Prazska 3",value:c.address,onChange:O}),t.address&&a.address?Object(_.jsx)("p",{children:t.address}):null]}),Object(_.jsxs)("div",{className:Qe.a.Input,children:[Object(_.jsx)("label",{htmlFor:"city",children:"City"}),Object(_.jsx)(Re.a,{type:"text",id:"city",name:"city",placeholder:"eg. Prague",value:c.city,onChange:O}),t.city&&a.city?Object(_.jsx)("p",{children:t.city}):null]}),Object(_.jsxs)("div",{className:Qe.a.Input,children:[Object(_.jsx)("label",{htmlFor:"zip",children:"ZIP code"}),Object(_.jsx)(Re.a,{type:"text",id:"zip",name:"zip",placeholder:"eg. 13000",value:c.zip,onChange:O}),t.zip&&a.zip?Object(_.jsx)("p",{children:t.zip}):null]}),Object(_.jsxs)("div",{className:Qe.a.Input,children:[Object(_.jsx)("label",{htmlFor:"ziphonep",children:"ZIP code"}),Object(_.jsx)(Re.a,{type:"text",id:"phone",name:"phone",placeholder:"eg. 603254123",value:c.phone,onChange:O}),t.phone&&a.phone?Object(_.jsx)("p",{children:t.phone}):null]}),Object(_.jsx)(ce,{margin:30,type:"submit",children:"Sign me up!"})]})}})]})},$e=function(){var e=r.a.useState(!1),t=Object(P.a)(e,2),a=t[0],n=t[1],c=Object(i.c)((function(e){return e.user}));return Object(_.jsxs)("div",{className:Ve.a.Login,children:[null!==c.refreshToken&&Object(_.jsx)(d.a,{to:"/"}),Object(_.jsx)("div",{className:Ve.a.Logo,children:Object(_.jsx)("img",{src:Ge,alt:"company logo"})}),a&&Object(_.jsx)(Ke,{}),!a&&Object(_.jsx)(Xe,{}),Object(_.jsxs)("h4",{onClick:function(){return n(!a)},children:["I am ",a?"not":"already"," a member, ",a?"sign":"log"," me in! "]})]})},Je=a(67),et=a.n(Je),tt=function(){var e=Object(i.c)((function(e){return e.user})),t=Object(i.c)((function(e){return e.userData})),a=r.a.useState([]),n=Object(P.a)(a,2),c=n[0],o=n[1];r.a.useEffect((function(){return e.userId&&u.a.database().ref("/orders").orderByChild("orderedBy").equalTo(t.userId).on("value",(function(e){var t=e.val(),a=[];for(var n in t)a.push(t[n]);o(a)})),function(){return u.a.database().ref("/orders").orderByChild("orderedBy").equalTo(t.userId).off()}}));var s=c.map((function(e){return Object(_.jsxs)("div",{className:et.a.Order,children:[Object(_.jsxs)("div",{className:et.a.Head__Info,children:[Object(_.jsx)("h4",{children:e.item}),Object(_.jsxs)("p",{children:["Order number: ",e.orderNum]})]}),Object(_.jsxs)("p",{children:[Object(_.jsx)("span",{children:"Date ordered:"})," ",e.date," "]}),Object(_.jsxs)("p",{children:[Object(_.jsx)("span",{children:"You donated:"})," $",e.donated]})]},e.orderNum)}));return Object(_.jsx)("div",{className:et.a.Purchases,children:Object(_.jsxs)(p,{children:[Object(_.jsxs)("h2",{children:["Thank you for having our backs",t.username&&", "+t.username,"!"]}),Object(_.jsx)("h3",{children:"You chose to support these projects: "}),c.length>0?s:Object(_.jsx)("h3",{children:"You haven't made an order yet."})]})})},at=function(e){var t=Object(i.c)((function(e){return e.supportModal})),a=Object(i.c)((function(e){return e.optionsModal})),c=Object(i.b)();return Object(n.useEffect)((function(){u.a.database().ref("backers/").on("value",(function(e){var t=e.val();c({type:"BACKERS/INIT",payload:t})})),u.a.database().ref("products/").on("value",(function(e){var t=e.val();c({type:"OPTION-NOREWARD/FETCH",payload:t.opt1}),c({type:"OPTION-BAMBOO/FETCH",payload:t.opt2}),c({type:"OPTION-BLACK/FETCH",payload:t.opt3}),c({type:"OPTION-MAHOGANY/FETCH",payload:t.opt4})}));var e=localStorage.getItem("userID"),t=localStorage.getItem("refreshToken");return c({type:"LOG-IN/USER",payload:{userID:e,refreshToken:t}}),function(){u.a.database().ref("backers/").off(),u.a.database().ref("products/").off()}})),Object(_.jsxs)(r.a.Fragment,{children:[Object(_.jsxs)("main",{className:Be.a.Main,children:[Object(_.jsxs)(d.b,{exact:!0,path:"/",children:[Object(_.jsx)(q,{}),Object(_.jsx)(ue,{}),Object(_.jsx)(k,{}),Object(_.jsx)(xe,{})]}),Object(_.jsxs)(d.b,{exact:!0,path:"/login",children:[Object(_.jsx)("div",{className:Be.a.BG__DARK,children:Object(_.jsx)(G,{})}),Object(_.jsx)($e,{})]}),Object(_.jsxs)(d.b,{exact:!0,path:"/purchases",children:[Object(_.jsx)("div",{className:Be.a.BG__DARK,children:Object(_.jsx)(G,{})}),Object(_.jsx)(tt,{})]})]}),t&&Object(_.jsx)(Ae,{}),a&&Object(_.jsx)(Pe,{})]})},nt=(a(235),{apiKey:"AIzaSyA_DepRytEVQH_dW24y9dAyW5dfhLkFYYs",authDomain:"portfolio-crowdfund-project.firebaseapp.com",projectId:"portfolio-crowdfund-project",storageBucket:"portfolio-crowdfund-project.appspot.com",messagingSenderId:"567272035196",appId:"1:567272035196:web:6efbd2f5d31749e8f60af9",databaseURL:"https://portfolio-crowdfund-project-default-rtdb.firebaseio.com/"});u.a.initializeApp(nt);var rt=function(){return Object(_.jsx)("div",{className:"App",children:Object(_.jsx)(at,{})})},ct=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SUPPORT_MODAL/ON":return!0;case"SUPPORT_MODAL/OFF":return!1;default:return e}},ot=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"OPTIONS_MODAL/ON":return!0;case"OPTIONS_MODAL/OFF":return!1;default:return e}},it=a(13),st=[{id:"opt1",title:"Pledge with no reward",desc:"Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",left:0,backingOnly:!0,pledge:"",minPrice:1,active:!1,disabled:function(){return!(this.left>0)}},{id:"opt2",title:"Bamboo Stand",desc:"You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you\u2019ll be added to a special Backer member list.",left:0,backingOnly:!1,pledge:"Pledge $25 or more",minPrice:25,active:!1,disabled:function(){return!(this.left>0)}},{id:"opt3",title:"Black Edition Stand",desc:"You get a Black Special Edition computer stand and a personal thank you. You\u2019ll be added to our Backer member list. Shipping is included.",left:0,backingOnly:!1,pledge:"Pledge $75 or more",minPrice:75,active:!1,disabled:function(){return!(this.left>0)}},{id:"opt4",title:"Mahogany Special Edition",desc:"You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You\u2019ll be added to our Backer member list. Shipping is included.",left:0,backingOnly:!1,pledge:"Pledge $200 or more",minPrice:200,active:!1,disabled:function(){return!(this.left>0)}}],lt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:st,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"OPTIONS/CHANGE_AMOUNT":var a=Object(it.a)(e);return a.forEach((function(e){e.id===t.payload.id&&(e.left-=1)})),a;case"OPTION/SET_ACTIVE":var n=Object(it.a)(e);return n.forEach((function(e){e.id===t.payload.id&&(e.active=!0),e.id!==t.payload.id&&(e.active=!1)})),n;case"OPTION-NOREWARD/FETCH":var r=Object(it.a)(e);return r.forEach((function(e){"opt1"===e.id&&(e.left=t.payload)})),r;case"OPTION-BAMBOO/FETCH":var c=Object(it.a)(e);return c.forEach((function(e){"opt2"===e.id&&(e.left=t.payload)})),c;case"OPTION-BLACK/FETCH":var o=Object(it.a)(e);return o.forEach((function(e){"opt3"===e.id&&(e.left=t.payload)})),o;case"OPTION-MAHOGANY/FETCH":var i=Object(it.a)(e);return i.forEach((function(e){"opt4"===e.id&&(e.left=t.payload)})),i;default:return e}},dt={money:0,backers:0},ut=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:dt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"BACKERS/INIT":return"number"!==typeof t.payload?Object(De.a)(Object(De.a)({},e),t.payload):e;case"BACKERS/ADD":if("number"===typeof t.payload){var a=e.money+t.payload,n=e.backers+1;return Object(De.a)(Object(De.a)({},e),{},{money:a,backers:n})}return e;default:return e}},jt={userId:null,refreshToken:null},bt={username:null,name:null,lastName:null,userId:null,address:null,city:null,zip:null,phone:null,bookmarked:!1},_t=Object(l.b)({supportModal:ct,optionsModal:ot,options:lt,backers:ut,user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:jt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOG-IN/USER":return Object(De.a)(Object(De.a)({},e),t.payload);case"LOG-OUT/USER":return jt;default:return e}},userData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER/FETCH_DATA":return Object(De.a)(Object(De.a)({},e),t.payload);case"USER/ERASE_DATA":return bt;case"USER/UPDATE_BOOKMARK":var a=e.bookmarked;return Object(De.a)(Object(De.a)({},e),{},{bookmarked:!a});default:return e}}}),pt=Object(l.c)(_t,window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window&&window.__REDUX_DEVTOOLS_EXTENSION__());o.a.render(Object(_.jsx)(i.a,{store:pt,children:Object(_.jsx)(s.a,{basename:"/CrowdfundingReactProject",children:Object(_.jsx)(rt,{})})}),document.getElementById("root"))},25:function(e,t,a){e.exports={Signin__Welcome:"SignInForm_Signin__Welcome__3tLX_",Form:"SignInForm_Form__19fLa",Input:"SignInForm_Input__1V35y"}},36:function(e,t,a){e.exports={Bookamark__Container:"Bookmark_Bookamark__Container__1A87L",Bookmark__Icon:"Bookmark_Bookmark__Icon__3tSrX",Bookmark__Text:"Bookmark_Bookmark__Text__1lfXy",active:"Bookmark_active__2_PhS"}},37:function(e,t,a){e.exports={optionCard:"Productcards_optionCard__1cvUh",optionCard__Titlepart:"Productcards_optionCard__Titlepart__1CDbM",optionCard__Select:"Productcards_optionCard__Select__ICaTN",optionCard__Itemsleft:"Productcards_optionCard__Itemsleft__39oTi",optionCard_disabled:"Productcards_optionCard_disabled__2j80y"}},49:function(e,t,a){e.exports={Hero:"HeroSection_Hero__iAPei",desktop:"HeroSection_desktop__dYhx3",mobile:"HeroSection_mobile__27szz"}},50:function(e,t,a){e.exports={Nav:"NavItems_Nav__1wpsx",MobileNavList:"NavItems_MobileNavList__1H_sm",disabled:"NavItems_disabled__1Koex",Logout:"NavItems_Logout__1uv19"}},51:function(e,t,a){e.exports={Login__Welcome:"LoginForm_Login__Welcome__gxKWJ",Form:"LoginForm_Form__3EH2W",Input:"LoginForm_Input__2cz5Q"}},63:function(e,t,a){e.exports={Counter__Item:"CountInfo_Counter__Item__2KfE_",Counter__bordered:"CountInfo_Counter__bordered__2WV9y",Deco__underline:"CountInfo_Deco__underline__2T8Fn"}},64:function(e,t,a){e.exports={About__heading:"Info_About__heading__2kQbr",About__content:"Info_About__content__CL3mB"}},65:function(e,t,a){e.exports={Modal_backsplash:"Modal_Modal_backsplash__gLOKp",Modal:"Modal_Modal__-GjUy",Large:"Modal_Large__3h1ye"}},66:function(e,t,a){e.exports={Main:"Layout_Main__QFnq_",BG__DARK:"Layout_BG__DARK__H0Fv4"}},67:function(e,t,a){e.exports={Purchases:"Purchases_Purchases__1UW_o",Order:"Purchases_Order__1iv_d",Head__Info:"Purchases_Head__Info__2c7iZ"}},78:function(e,t,a){e.exports={Card:"Card_Card__msx0q",small:"Card_small__1RXJE"}},79:function(e,t,a){e.exports={Progress__holder:"Counter_Progress__holder__2aY08",Progress__bar:"Counter_Progress__bar__ZXVez",growth:"Counter_growth__qEFMP"}},80:function(e,t,a){e.exports={Counter:"CounterSection_Counter__20yuL",Counter__info:"CounterSection_Counter__info__1n60A"}},83:function(e,t,a){e.exports={Navbar:"Navbar_Navbar__10f5p",Burger:"Navbar_Burger__3_lcZ"}},84:function(e,t,a){e.exports={titleCard:"InfoCard_titleCard__198w6",Buttons:"InfoCard_Buttons__xlWc5"}},85:function(e,t,a){e.exports={Cross:"OptionsModal_Cross__3uMWG",Options__Content:"OptionsModal_Options__Content__1mBEQ"}},86:function(e,t,a){e.exports={SupportModal:"SupportModal_SupportModal__2TN5U"}},88:function(e,t,a){e.exports={Logo:"LoginPage_Logo__VMrys",Login:"LoginPage_Login__247Zs"}}},[[234,1,2]]]);
//# sourceMappingURL=main.00870266.chunk.js.map