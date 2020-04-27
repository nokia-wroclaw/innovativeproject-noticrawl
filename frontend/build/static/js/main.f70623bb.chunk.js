(this.webpackJsonpnoticrawl=this.webpackJsonpnoticrawl||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(76),c=a.n(l),s=(a(91),a(92),a(4)),i=a(5),o=a(8),m=a(7),u=a(3),d=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(i.a)(a,[{key:"submitLogin",value:function(e){}},{key:"render",value:function(){return r.a.createElement("div",{className:"inner-container"},r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"input-group"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{type:"text",name:"username",className:"login-input",placeholder:"Username"})),r.a.createElement("div",{className:"input-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",name:"password",className:"login-input",placeholder:"Password"})),r.a.createElement(u.b,{to:"/new-crawl"},r.a.createElement("button",{type:"button",className:"login-btn",onClick:this.submitLogin.bind(this)},"Login"))))}}]),a}(r.a.Component),E=a(54),p=a(66),b=a(67),h=a(50),v=a(37),g=function(e){var t=e.label,a=Object(b.a)(e,["label"]),n=Object(h.c)(a),l=Object(p.a)(n,2),c=l[0],s=l[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{htmlFor:a.id||a.name},t),r.a.createElement("input",Object.assign({className:"text-input"},c,a)),s.touched&&s.error?r.a.createElement("div",{className:"error"},s.error):null)},f=function(e){var t=e.children,a=Object(b.a)(e,["children"]),n=Object(h.c)(Object(E.a)({},a,{type:"checkbox"})),l=Object(p.a)(n,2),c=l[0],s=l[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{className:"checkbox"},r.a.createElement("input",Object.assign({},c,a,{type:"checkbox"})),t),s.touched&&s.error?r.a.createElement("div",{className:"error"},s.error):null)},w=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={username:"",password:"ss",email:"",acceptedTerms:!1,errors:{username:"",email:"",password:""}},n}return Object(i.a)(a,[{key:"render",value:function(){this.state.errors;return(r.a.createElement("div",{className:"inner-container"},r.a.createElement("div",{className:"box"},r.a.createElement(h.b,{initialValues:{email:"",password:"",confirmPassword:"",acceptedTerms:!1},validationSchema:v.b({password:v.d().max(30,"Must be 30 characters or less").required("Password required").min(8,"Minimum length 8"),confirmPassword:v.d().required("Password required").oneOf([v.c("password"),null],"Passwords must match"),email:v.d().email("Invalid email address").required("Email required"),acceptedTerms:v.a().required("Required").oneOf([!0],"You must accept the terms and conditions")}),onSubmit:function(e,t){var a=t.setSubmitting;setTimeout((function(){alert(JSON.stringify(e,null,2)),a(!1)}),400)}},r.a.createElement("div",{className:"scroll"},r.a.createElement(h.a,null,r.a.createElement("div",{className:"input-group"},r.a.createElement(g,{label:"Email Address",type:"email",name:"email",className:"login-input",placeholder:"Email"}),r.a.createElement(g,{label:"Password",type:"password",name:"password",className:"login-input",placeholder:"Password"}),r.a.createElement(g,{label:"Confirm password",type:"password",name:"confirmPassword",className:"login-input",placeholder:"Password"}),r.a.createElement(f,{name:"acceptedTerms"},"I accept the terms and conditions"),r.a.createElement("button",{className:"login-btn",type:"submit"},"Submit"))))))))}}]),a}(r.a.Component),y=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={isLoginOpen:!0,isRegisterOpen:!1},n}return Object(i.a)(a,[{key:"showLoginBox",value:function(){this.setState({isLoginOpen:!0,isRegisterOpen:!1})}},{key:"showRegisterBox",value:function(){this.setState({isRegisterOpen:!0,isLoginOpen:!1})}},{key:"render",value:function(){return r.a.createElement("div",{className:"root-container"},r.a.createElement("div",{className:"box-controller"},r.a.createElement("div",{className:"controller "+(this.state.isLoginOpen?"selected-controller":""),onClick:this.showLoginBox.bind(this)},"Login"),r.a.createElement("div",{className:"controller "+(this.state.isRegisterOpen?"selected-controller":""),onClick:this.showRegisterBox.bind(this)},"Register")),r.a.createElement("div",{className:"box-container"},this.state.isLoginOpen&&r.a.createElement(d,null),this.state.isRegisterOpen&&r.a.createElement(w,null)))}}]),a}(r.a.Component),O=a(81),N=a.n(O);var j=function(){return r.a.createElement("header",{className:"AppHeader"},r.a.createElement("img",{src:N.a,className:"AppLogo",alt:"logo"}))};var x=function(){return r.a.createElement("footer",{className:"Footer"},r.a.createElement("text",{className:"Footer-text"},"Innovative Projects Summer - Wroc\u0142aw 2020"))};var k=function(){return r.a.createElement("div",null,r.a.createElement("center",null,r.a.createElement("div",{className:"background"},r.a.createElement(j,null),r.a.createElement("main",{className:"MainContent"},r.a.createElement(y,null)),r.a.createElement(x,null))))},C=a(21),S=a(72),L=a.n(S),B=a(82),P=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).submitForm=function(){var e=Object(B.a)(L.a.mark((function e(t){var a,r;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(n.state),n.setState({isSubmitting:!0}),e.next=5,fetch("/api/v1/new-crawl",{method:"POST",body:JSON.stringify(n.state.values),headers:{"Content-Type":"application/json"}});case 5:return a=e.sent,alert(JSON.stringify(n.state.values)),n.setState({isSubmitting:!1}),e.next=10,a.json();case 10:(r=e.sent).hasOwnProperty("error")?n.setState({message:r.error,isError:!0}):n.setState({message:r.success}),alert(r.parsedPage),n.setState({parsedPageToExport:r.parsedPage}),setTimeout((function(){n.setState({isError:!1,message:"",values:{link:""}}),window.location.replace="/start-crawling"}),1600);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.handleInputChange=function(e){return n.setState({values:Object(E.a)({},n.state.values,Object(C.a)({},e.target.name,e.target.value))})},n.state={values:{link:""},parsedPageToExport:"",isSubmitting:!1,isError:!1},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"LinkInput"},r.a.createElement("form",{onSubmit:this.submitForm},r.a.createElement("div",{className:"input-group"},r.a.createElement("label",{htmlFor:"link"},r.a.createElement("h1",null,"Paste your link below")),r.a.createElement("input",{type:"link",name:"link",id:"link",value:this.state.values.link,onChange:this.handleInputChange,title:"link",required:!0})),r.a.createElement("button",{type:"submit"},"Go to website")),r.a.createElement("div",{className:"message ".concat(this.state.isError&&"error")},this.state.isSubmitting?"Submitting...":this.state.message),r.a.createElement(u.b,{to:{pathname:"/new-crawl/start-crawling",state:{externalPageToRender:this.state.parsedPageToExport}}},r.a.createElement("button",null,'working "go to website" button'))))}}]),a}(r.a.Component),I=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("center",null,r.a.createElement("ul",{className:"nav"},r.a.createElement("li",null,r.a.createElement(u.b,{to:"/my-crawls"},"My Crawls")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/new-crawl"},r.a.createElement("u",null,"New Crawl"))),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/my-account"},"My Account")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Logout")))))}}]),a}(r.a.Component);var T=function(){return r.a.createElement("div",null,r.a.createElement("center",null,r.a.createElement("div",{className:"background"},r.a.createElement(j,null),r.a.createElement("main",{className:"MainContent"},r.a.createElement(P,null),r.a.createElement(I,null)),r.a.createElement(x,null))))},M=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("center",null,r.a.createElement("ul",{className:"nav"},r.a.createElement("li",null,r.a.createElement(u.b,{to:"/my-crawls"},"My Crawls")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/new-crawl"},"New Crawl")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/my-account"},r.a.createElement("u",null,"My Account"))),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Logout")))))}}]),a}(r.a.Component);var R=function(){return r.a.createElement("div",null,r.a.createElement("center",null,r.a.createElement("div",{className:"background"},r.a.createElement(j,null),r.a.createElement("main",{className:"MainContent"},r.a.createElement(M,null)),r.a.createElement(x,null))))},F=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("center",null,r.a.createElement("ul",{className:"nav"},r.a.createElement("li",null,r.a.createElement(u.b,{to:"/my-crawls"},r.a.createElement("u",null,"My Crawls"))),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/new-crawl"},"New Crawl")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/my-account"},"My Account")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Logout")))))}}]),a}(r.a.Component);var D=function(){return r.a.createElement("div",null,r.a.createElement("center",null,r.a.createElement("div",{className:"background"},r.a.createElement(j,null),r.a.createElement("main",{className:"MainContent"},r.a.createElement(F,null)),r.a.createElement(x,null))))},W=a(36),q=a(83),A=a.n(q),J=a(84),H=a.n(J),U=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).sendState=function(){e.props.borderState?e.props.Callback(0):e.props.Callback(1)},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"CrawlingBanner"},r.a.createElement("div",{className:"Logo"},r.a.createElement("div",{className:"elements"},r.a.createElement("img",{src:H.a,alt:"logo",height:"40",width:"167"}))),r.a.createElement("div",{className:"StatusBox"},r.a.createElement("div",{className:"elements"},r.a.createElement("h4",null,"Recording is ON"))),r.a.createElement("div",{className:"Setting1"},r.a.createElement("div",{className:"elements"},"Bordering",r.a.createElement("br",null),r.a.createElement("div",{className:"toggle-switch"},r.a.createElement("input",{type:"checkbox",className:"toggle-switch-checkbox",name:"toggleSwitch",id:"toggleSwitch",onChange:this.sendState,defaultChecked:!0}),r.a.createElement("label",{className:"toggle-switch-label",htmlFor:"toggleSwitch"},r.a.createElement("span",{className:"toggle-switch-inner"}),r.a.createElement("span",{className:"toggle-switch-switch"}))))),r.a.createElement("div",{className:"Setting2"},r.a.createElement("div",{className:"elements"},r.a.createElement("h4",null,"something"))),r.a.createElement("div",{className:"SubmitButton"},r.a.createElement("div",{className:"elements"},r.a.createElement("button",{className:"submit"},"Submit"))),r.a.createElement("div",{className:"xPaths"},r.a.createElement("div",{className:"elements"},r.a.createElement("text",{id:"status"},"Wait for it... or enable JavaScript."),r.a.createElement("br",null),r.a.createElement("text",{id:"status2"},"Wait for it... or enable JavaScript."))))}}]),a}(r.a.Component),G=a(33);var Y=function(){var e,t=Object(G.g)();return r.a.createElement("div",null,r.a.createElement("iframe",(e={id:"template",src:t.state.externalPageToRender,srcDoc:t.state.externalPageToRender,allow:"fullscreen"},Object(C.a)(e,"allow","payment"),Object(C.a)(e,"importance","high"),Object(C.a)(e,"height","650px"),Object(C.a)(e,"width","100%"),Object(C.a)(e,"referrerPolicy","origin"),Object(C.a)(e,"sandbox","allow-popups"),e)))},_=(a(99),function(e){return e&&e.id?'//*[@id="'+e.id+'"]':function(e){for(var t=[];e&&1===e.nodeType;e=e.parentNode){var a=0;if(e&&e.id){t.splice(0,0,'/*[@id="'+e.id+'"]');break}for(var n=e.previousSibling;n;n=n.previousSibling)n.nodeType!==Node.DOCUMENT_TYPE_NODE&&n.nodeName===e.nodeName&&++a;var r=e.nodeName.toLowerCase(),l=a?"["+(a+1)+"]":"";t.splice(0,0,r+l)}return t.length?"/"+t.join("/"):null}(e)}),V=null;function $(){return r.a.createElement("div",null,r.a.createElement("div",{id:"empty"}),r.a.createElement("div",{id:"outer",class:"outer"}),r.a.createElement("div",{id:"selector"},r.a.createElement("div",{id:"selector-top"}),r.a.createElement("div",{id:"selector-left"}),r.a.createElement("div",{id:"selector-right"}),r.a.createElement("div",{id:"selector-bottom"})))}document.addEventListener("mouseover",(function(e){V=e.target})),setInterval((function(){A()("#status").text("The current element is: "+_(V)+".")}),1);var z=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).callbackFunction=function(e){n.setState({borderState:e})},n.select=function(e){var t=e.target;n.setState({title:_(t)});var a=document.getElementById("outer").style;a.display="block",a.width=t.offsetWidth+"px",a.height=t.offsetHeight+"px",a.left=t.offsetLeft+"px",a.top=t.offsetTop+"px"},n.state={title:"Click here"},n.state={borderState:1},n.select=n.select.bind(Object(W.a)(n)),n.handleLoad=n.handleLoad.bind(Object(W.a)(n)),n.border=n.border.bind(Object(W.a)(n)),n.borderDel=n.borderDel.bind(Object(W.a)(n)),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("click",this.handleLoad),document.getElementById("HereWillBeContent").addEventListener("mousemove",this.border),document.getElementById("CrawlingBanner").addEventListener("mousemove",this.borderDel),window.addEventListener("mousewheel",this.borderDel)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("click",this.handleLoad),document.getElementById("HereWillBeContent").removeEventListener("mousemove",this.border),document.getElementById("CrawlingBanner").removeEventListener("mousemove",this.borderDel),window.removeEventListener("mousewheel",this.borderDel)}},{key:"borderDel",value:function(){document.getElementById("selector").style.display="none"}},{key:"border",value:function(e){if(0!=this.state.borderState){var t=e.target;if("selector-top"!==t.id&&"selector-bottom"!==t.id&&"selector-left"!==t.id&&"selector-right"!==t.id){document.getElementById("selector").style.display="block";var a=t.getBoundingClientRect(),n=a.height,r=a.width,l=document.getElementById("selector-top").style;l.width=r+"px",l.left=a.left+"px",l.top=a.top+"px";var c=document.getElementById("selector-bottom").style;c.width=r+"px",c.left=a.left+"px",c.top=a.top+n-3+"px";var s=document.getElementById("selector-left").style;s.height=n+"px",s.left=a.left+"px",s.top=a.top+"px";var i=document.getElementById("selector-right").style;i.height=n+"px",i.left=a.left+r+"px",i.top=a.top+"px"}}}},{key:"handleLoad",value:function(e){var t=e.target;t&&"outer"===t.className&&(document.getElementById("outer").style.display="none")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(U,{Callback:this.callbackFunction,borderState:this.state.borderState}),r.a.createElement($,null),r.a.createElement("div",{className:"Content"},r.a.createElement("div",{id:"HereWillBeContent",onClick:this.select},this.state.title,">",r.a.createElement(Y,null),this.state.borderState)))}}]),a}(r.a.Component),K=a(85),Q=a.n(K);var X=function(){return r.a.createElement("div",null,r.a.createElement("center",null,r.a.createElement("div",{className:"background"},r.a.createElement(j,null),r.a.createElement("main",{className:"MainContent"},r.a.createElement("div",{className:"LinkInput"},r.a.createElement("h2",null,"I'm really sorry, but this page doesn't exist"),r.a.createElement("img",{src:Q.a,height:"170px",width:"150px",alt:"how dare you?"}),r.a.createElement("h4",null,"Go back to the right path by clicking button below..."),r.a.createElement(u.a,{forceRefresh:!0},r.a.createElement(G.d,null,r.a.createElement(u.b,{to:"/"},r.a.createElement("button",null,"Cats are better than dogs!")))))),r.a.createElement(x,null))))},Z=r.a.createContext(),ee=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={message:""},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return(r.a.createElement(Z.Provider,{value:{state:this.state,setMessage:function(t){return e.setState({message:t})}}},this.props.children,"   "))}}]),a}(n.Component);var te=function(){return r.a.createElement("body",null,r.a.createElement(ee,null,r.a.createElement(u.a,null,r.a.createElement(G.d,null,r.a.createElement(G.b,{exact:!0,strict:!0,path:"/",component:k}),r.a.createElement(G.b,{exact:!0,strict:!0,path:"/new-crawl",component:T}),r.a.createElement(G.b,{exact:!0,strict:!0,path:"/new-crawl/start-crawling",component:z}),r.a.createElement(G.b,{exact:!0,strict:!0,path:"/my-account",component:R}),r.a.createElement(G.b,{exact:!0,strict:!0,path:"/my-crawls",component:D}),r.a.createElement(G.b,{exact:!0,strict:!0,path:"/404",component:X}),r.a.createElement(G.a,{to:"/404"})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},81:function(e,t,a){e.exports=a.p+"static/media/logo.fe41c8fe.png"},84:function(e,t,a){e.exports=a.p+"static/media/logo.fe41c8fe.png"},85:function(e,t,a){e.exports=a.p+"static/media/404-cat.3eba6875.png"},86:function(e,t,a){e.exports=a(100)},91:function(e,t,a){},92:function(e,t,a){},99:function(e,t,a){}},[[86,1,2]]]);
//# sourceMappingURL=main.f70623bb.chunk.js.map