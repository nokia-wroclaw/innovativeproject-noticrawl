(this.webpackJsonpnoticrawl=this.webpackJsonpnoticrawl||[]).push([[0],{123:function(e,t,a){e.exports=a.p+"static/media/logo.fe41c8fe.png"},138:function(e,t,a){},208:function(e,t,a){e.exports=a.p+"static/media/404-cat.3eba6875.png"},227:function(e,t,a){e.exports=a(363)},232:function(e,t,a){},233:function(e,t,a){},361:function(e,t,a){},363:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),c=a.n(l),o=(a(232),a(233),a(14)),i=a(15),s=a(17),m=a(16),u=a(34),d=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={},n}return Object(i.a)(a,[{key:"submitLogin",value:function(e){}},{key:"render",value:function(){return r.a.createElement("div",{className:"inner-container"},r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"input-group"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{type:"text",name:"username",className:"login-input",placeholder:"Username"})),r.a.createElement("div",{className:"input-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",name:"password",className:"login-input",placeholder:"Password"})),r.a.createElement(u.b,{to:"/new-crawl"},r.a.createElement("button",{type:"button",className:"login-btn",onClick:this.submitLogin.bind(this)},"Login"))))}}]),a}(r.a.Component),p=a(66),g=a(133),v=a(134),h=a(95),E=a(73),b=function(e){var t=e.label,a=Object(v.a)(e,["label"]),n=Object(h.c)(a),l=Object(g.a)(n,2),c=l[0],o=l[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{htmlFor:a.id||a.name},t),r.a.createElement("input",Object.assign({className:"text-input"},c,a)),o.touched&&o.error?r.a.createElement("div",{className:"error"},o.error):null)},w=function(e){var t=e.children,a=Object(v.a)(e,["children"]),n=Object(h.c)(Object(p.a)({},a,{type:"checkbox"})),l=Object(g.a)(n,2),c=l[0],o=l[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{className:"checkbox"},r.a.createElement("input",Object.assign({},c,a,{type:"checkbox"})),t),o.touched&&o.error?r.a.createElement("div",{className:"error"},o.error):null)},f=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={username:"",password:"ss",email:"",acceptedTerms:!1,errors:{username:"",email:"",password:""}},n}return Object(i.a)(a,[{key:"render",value:function(){this.state.errors;return(r.a.createElement("div",{className:"inner-container"},r.a.createElement("div",{className:"box"},r.a.createElement(h.b,{initialValues:{email:"",password:"",confirmPassword:"",acceptedTerms:!1},validationSchema:E.b({password:E.d().max(30,"Must be 30 characters or less").required("Password required").min(8,"Minimum length 8"),confirmPassword:E.d().required("Password required").oneOf([E.c("password"),null],"Passwords must match"),email:E.d().email("Invalid email address").required("Email required"),acceptedTerms:E.a().required("Required").oneOf([!0],"You must accept the terms and conditions")}),onSubmit:function(e,t){var a=t.setSubmitting;setTimeout((function(){alert(JSON.stringify(e,null,2)),a(!1)}),400)}},r.a.createElement("div",{className:"scroll"},r.a.createElement(h.a,null,r.a.createElement("div",{className:"input-group"},r.a.createElement(b,{label:"Email Address",type:"email",name:"email",className:"login-input",placeholder:"Email"}),r.a.createElement(b,{label:"Password",type:"password",name:"password",className:"login-input",placeholder:"Password"}),r.a.createElement(b,{label:"Confirm password",type:"password",name:"confirmPassword",className:"login-input",placeholder:"Password"}),r.a.createElement(w,{name:"acceptedTerms"},"I accept the terms and conditions"),r.a.createElement("button",{className:"login-btn",type:"submit"},"Submit"))))))))}}]),a}(r.a.Component),y=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={isLoginOpen:!0,isRegisterOpen:!1},n}return Object(i.a)(a,[{key:"showLoginBox",value:function(){this.setState({isLoginOpen:!0,isRegisterOpen:!1})}},{key:"showRegisterBox",value:function(){this.setState({isRegisterOpen:!0,isLoginOpen:!1})}},{key:"render",value:function(){return r.a.createElement("div",{className:"root-container"},r.a.createElement("div",{className:"box-controller"},r.a.createElement("div",{className:"controller "+(this.state.isLoginOpen?"selected-controller":""),onClick:this.showLoginBox.bind(this)},"Login"),r.a.createElement("div",{className:"controller "+(this.state.isRegisterOpen?"selected-controller":""),onClick:this.showRegisterBox.bind(this)},"Register")),r.a.createElement("div",{className:"box-container"},this.state.isLoginOpen&&r.a.createElement(d,null),this.state.isRegisterOpen&&r.a.createElement(f,null)))}}]),a}(r.a.Component),N=a(123),k=a.n(N);var C=function(){return r.a.createElement("header",{className:"AppHeader"},r.a.createElement("img",{src:k.a,className:"AppLogo",alt:"logo"}))};var x=function(){return r.a.createElement("footer",{className:"Footer"},r.a.createElement("text",{className:"Footer-text"},"Innovative Projects Summer - Wroc\u0142aw 2020"))};var O=function(){return r.a.createElement("div",null,r.a.createElement("center",null,r.a.createElement("div",{className:"background"},r.a.createElement(C,null),r.a.createElement("main",{className:"MainContent"},r.a.createElement(y,null)),r.a.createElement(x,null))))},j=a(75),S=a(89),T=a.n(S),I=a(124),P=a(400),M=a(364),L=a(365),F=a(370),R=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).submitForm=function(){var e=Object(I.a)(T.a.mark((function e(t){var a,r,l;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(n.state),n.setState({isSubmitting:!0}),a={url:n.state.values.link.toString()},e.next=6,fetch("/api/v1/page",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}});case 6:return r=e.sent,n.setState({isSubmitting:!1}),e.next=10,r.json();case 10:(l=e.sent).hasOwnProperty("error")?n.setState({message:l.error,isError:!0}):n.setState({message:l.success}),(l={parsedPage:l.html}).parsedPage=l.parsedPage+'\n<script type=\'text/javascript\'>\n\nwindow.onload=function() {\n  var anchors = document.getElementsByTagName(\'a\');\n  for(var i=anchors.length-1;i>=0;i--){\n  anchors[i].onclick=function() { return false }\n  }}\n\n  \nvar outer = document.createElement("div");\nouter.setAttribute("id", "outer");\nouter.setAttribute("class", "outer");\ndocument.body.appendChild(outer);\nouter.style.background = \'rgba(37, 172, 131, 0.2)\';\nouter.style.position = \'absolute\';\nouter.style.zIndex = 65000000;\n\n\nvar selector = document.createElement("div");\nselector.setAttribute("id", "selector");\ndocument.body.appendChild(selector);\nselector.style.borderStyle  = "solid";\nselector.style.borderWidth  = "3px";\nselector.style.borderColor  = "blue";\nselector.style.position = \'absolute\';\nselector.style.zIndex = 65000000;\nselector.style.pointerEvents = "none";\nselector.style.transition = \'all 300ms ease\';\n\n\nvar TurnOffBordering = 1;\n\nvar xpathIframe = 5;\n\nfunction drawBorder(e) {\n\n  if (TurnOffBordering == 0) {\n    return;\n  }\n\n\n  var target = e.target;\n\n  if (target.id === "selector" ) return;\n\n      selector.style.display = \'block\';\n\n  var targetRect = target.getBoundingClientRect();\n\n  selector.style.display = "block";\n  selector.style.width = targetRect.width + "px";\n  selector.style.height = targetRect.height + "px";\n  selector.style.left = targetRect.left + "px";\n  selector.style.top = targetRect.top + window.scrollY + "px";\n}\n\nfunction UpdateBorders() {\n  selector.style.display = \'none\';\n  outer.style.display = "none";\n}\n\nfunction removeHighlight(e) {\n  var target = e.target;\n  if (target && target.className === "outer") {\n    outer.style.display = "none";\n  }\n}\n\nfunction select(e) {\n  \n\n  if (TurnOffBordering == 0) {\n    return;\n  }\n\n  var target = e.target;\n\n  if (target.id == "outer" || \n  target.id == "selector") return;\n\n\n  getElementXPath(e);\n\n  var targetRect = target.getBoundingClientRect();\n\n  outer.style.display = "block";\n  outer.style.width = targetRect.width + "px";\n  outer.style.height = targetRect.height + "px";\n  outer.style.left = targetRect.left + "px";\n  outer.style.top = targetRect.top + window.scrollY + "px";\n\n  console.log("xpath: "+ xpathIframe)\n}\n\nfunction getElementTreeXPath(element) {\n  var paths = [];\n  var target = element.target;\n\n  for (; target && target.nodeType === 1; target = target.parentNode) {\n    var index = 0;\n    // EXTRA TEST FOR target.ID\n    if (target && target.id) {\n      paths.splice(0, 0, \'/*[@id="\' + target.id + \'"]\');\n      break;\n    }\n\n    for (var sibling = target.previousSibling; sibling; sibling = sibling.previousSibling) {\n      // Ignore document type declaration.\n      if (sibling.nodeType === Node.DOCUMENT_TYPE_NODE)\n        continue;\n\n      if (sibling.nodeName === target.nodeName)\n        ++index;\n\n    }\n\n    var tagName = target.nodeName.toLowerCase();\n    var pathIndex = (index ? "[" + (index + 1) + "]" : "");\n    paths.splice(0, 0, tagName + pathIndex);\n  }\n\n  xpathIframe = paths.length ? "/" + paths.join("/") : null;\n  return paths.length ? "/" + paths.join("/") : null;\n};\n\nfunction getElementXPath(element) {\n  var target = element.target;\n\n  if (target && target.id){\n    xpathIframe = \'//*[@id="\' + target.id + \'"]\'\n    return \'//*[@id="\' + target.id + \'"]\';\n  }\n  else\n    return getElementTreeXPath(element);\n};\n\n\n  window.addEventListener(\'click\', removeHighlight);\n  window.addEventListener(\'mousemove\', drawBorder);\n  window.addEventListener(\'click\', select);\n\n\n<\/script>',n.setState({parsedPageToExport:l.parsedPage}),setTimeout((function(){n.setState({isError:!1,message:""}),document.getElementById("sendCrawlData").click()}),500);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.handleInputChange=function(e){return n.setState({values:Object(p.a)({},n.state.values,Object(j.a)({},e.target.name,e.target.value))})},n.state={values:{link:""},parsedPageToExport:"",isSubmitting:!1,isError:!1},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"PageContent"},r.a.createElement("form",{onSubmit:this.submitForm},r.a.createElement("h1",null,"Paste your link below"),r.a.createElement(M.a,{style:{width:"40ch"},variant:"outlined"},r.a.createElement("input",{value:this.state.values.link,pattern:"https?://.+",hidden:"true"}),r.a.createElement(F.a,{type:"text",name:"link",id:"linkInput",value:this.state.values.link,onChange:this.handleInputChange,style:{marginBottom:"0px"},required:!0}),r.a.createElement(L.a,{style:{marginLeft:"-25px",width:"500px"},id:"helper-text"},'Remember, that your link should start with "http://" or "https://".')),r.a.createElement("div",null,r.a.createElement(P.a,{variant:"contained",color:"primary",type:"submit",id:"linkSubmit"},"Go to website"))),r.a.createElement("div",{className:"message ".concat(this.state.isError&&"error")},this.state.isSubmitting?"Please wait...":this.state.message),r.a.createElement(u.b,{to:{pathname:"/new-crawl/start-crawling",state:{externalPageToRender:this.state.parsedPageToExport,url:this.state.values.link}}},r.a.createElement("button",{id:"sendCrawlData",hidden:"true"}))))}}]),a}(n.Component),B=a(402),A=(a(138),["blue"]),q=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={activeItem:"New Crawl"},e}return Object(i.a)(a,[{key:"moveToMyAccount",value:function(){window.location.assign("./my-account")}},{key:"moveToNewCrawl",value:function(){window.location.assign("./new-crawl")}},{key:"moveToMyCrawls",value:function(){window.location.assign("./my-crawls")}},{key:"Logout",value:function(){window.location.assign("./")}},{key:"render",value:function(){var e=this.props.color,t=this.state.activeItem;return r.a.createElement("div",{className:"navbar"},r.a.createElement(B.a,{color:e,widths:4,size:"small"},r.a.createElement(B.a.Item,{name:"New Crawl",active:"New Crawl"===t,onClick:this.moveToNewCrawl}),r.a.createElement(B.a.Item,{name:"My Crawls",active:"My Crawls"===t,onClick:this.moveToMyCrawls}),r.a.createElement(B.a.Item,{name:"My Account",active:"My Account"===t,onClick:this.moveToMyAccount}),r.a.createElement(B.a.Item,{name:"Logout",active:"Logout"===t,onClick:this.Logout})))}}]),a}(n.Component),D=function(){var e=A.map((function(e){return r.a.createElement(q,{color:e,key:e})}));return(r.a.createElement("div",null,e))};var W=function(){return r.a.createElement("div",null,r.a.createElement("center",null,r.a.createElement("div",{className:"background"},r.a.createElement(C,null),r.a.createElement("main",{className:"MainContent"},r.a.createElement(R,null),r.a.createElement(D,null)),r.a.createElement(x,null))))},z=["blue"],J=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={activeItem:"My Account"},e}return Object(i.a)(a,[{key:"moveToMyAccount",value:function(){window.location.assign("./my-account")}},{key:"moveToNewCrawl",value:function(){window.location.assign("./new-crawl")}},{key:"moveToMyCrawls",value:function(){window.location.assign("./my-crawls")}},{key:"Logout",value:function(){window.location.assign("./")}},{key:"render",value:function(){var e=this.props.color,t=this.state.activeItem;return r.a.createElement("div",{className:"navbar"},r.a.createElement(B.a,{color:e,widths:4,size:"small"},r.a.createElement(B.a.Item,{name:"New Crawl",active:"New Crawl"===t,onClick:this.moveToNewCrawl}),r.a.createElement(B.a.Item,{name:"My Crawls",active:"My Crawls"===t,onClick:this.moveToMyCrawls}),r.a.createElement(B.a.Item,{name:"My Account",active:"My Account"===t,onClick:this.moveToMyAccount}),r.a.createElement(B.a.Item,{name:"Logout",active:"Logout"===t,onClick:this.Logout})))}}]),a}(n.Component),X=function(){var e=z.map((function(e){return r.a.createElement(J,{color:e,key:e})}));return(r.a.createElement("div",null,e))};var U=function(){return r.a.createElement("div",{className:"PageContent"})};var Y=function(){return r.a.createElement("div",null,r.a.createElement("center",null,r.a.createElement("div",{className:"background"},r.a.createElement(C,null),r.a.createElement("main",{className:"MainContent"},r.a.createElement(U,null),r.a.createElement(X,null)),r.a.createElement(x,null))))},H=["blue"],G=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={activeItem:"My Crawls"},e}return Object(i.a)(a,[{key:"moveToMyAccount",value:function(){window.location.assign("./my-account")}},{key:"moveToNewCrawl",value:function(){window.location.assign("./new-crawl")}},{key:"moveToMyCrawls",value:function(){window.location.assign("./my-crawls")}},{key:"Logout",value:function(){window.location.assign("./")}},{key:"render",value:function(){var e=this.props.color,t=this.state.activeItem;return r.a.createElement("div",{className:"navbar"},r.a.createElement(B.a,{color:e,widths:4,size:"small"},r.a.createElement(B.a.Item,{name:"New Crawl",active:"New Crawl"===t,onClick:this.moveToNewCrawl}),r.a.createElement(B.a.Item,{name:"My Crawls",active:"My Crawls"===t,onClick:this.moveToMyCrawls}),r.a.createElement(B.a.Item,{name:"My Account",active:"My Account"===t,onClick:this.moveToMyAccount}),r.a.createElement(B.a.Item,{name:"Logout",active:"Logout"===t,onClick:this.Logout})))}}]),a}(n.Component),_=function(){var e=H.map((function(e){return r.a.createElement(G,{color:e,key:e})}));return(r.a.createElement("div",null,e))};var V=function(){return r.a.createElement("div",{className:"PageContent"})};var $=function(){return r.a.createElement("div",null,r.a.createElement("center",null,r.a.createElement("div",{className:"background"},r.a.createElement(C,null),r.a.createElement("main",{className:"MainContent"},r.a.createElement(V,null),r.a.createElement(_,null)),r.a.createElement(x,null))))},K=a(61);var Q=function(){var e=Object(K.g)();return(r.a.createElement("div",null,r.a.createElement("iframe",{title:"pageFrame",id:"pageFrame",name:"pageFrame",src:e.state.externalPageToRender,srcDoc:e.state.externalPageToRender,allow:"fullscreen",importance:"high",referrerPolicy:"unsafe-url",sandbox:"allow-popups allow-scripts allow-same-origin",frameBorder:"100"})))},Z=(a(361),a(207)),ee=a.n(Z),te=a(401),ae=a(371),ne=a(403),re=a(368),le=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).sendState=function(){n.props.borderState?n.props.Callback(0):n.props.Callback(1)},n.handleInputChange=function(e){n.setState({values:Object(p.a)({},n.state.values,Object(j.a)({},e.target.name,e.target.value))})},n.submitForm=function(){var e=Object(I.a)(T.a.mark((function e(t){var a,r,l;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=n.props.xpathFromParent(),console.log("Wysy\u0142any xpath: "+a),n.setState({values:Object(p.a)({},n.state.values,{xpath:a})}),n.setState({isSubmitting:!0}),e.next=7,n.sleep(2e3);case 7:return console.log(JSON.stringify(n.state.values)),e.next=10,fetch("/api/v1/crawling-data",{method:"POST",body:JSON.stringify(n.state.values),headers:{"Content-Type":"application/json"}});case 10:return r=e.sent,console.log(JSON.stringify(n.state.values)),n.setState({isSubmitting:!1}),e.next=15,r.json();case 15:(l=e.sent).hasOwnProperty("error")?n.setState({message:l.error,isError:!0}):n.setState({message:l.success}),setTimeout((function(){n.setState({isError:!1})}),1600);case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={values:{email:"",period:"",xpath:"",value:"not supported",url:n.props.url},isSubmitting:!1,isError:!1},n}return Object(i.a)(a,[{key:"sleep",value:function(e){return new Promise((function(t){return setTimeout(t,e)}))}},{key:"render",value:function(){return r.a.createElement("div",{id:"CrawlingBanner"},r.a.createElement("div",{className:"Logo"},r.a.createElement("div",{className:"elements"},r.a.createElement("img",{src:k.a,alt:"logo",height:"40",width:"167"}))),r.a.createElement("div",{className:"Status"},r.a.createElement("div",{className:"elements"},r.a.createElement("text",{className:"textLeft"},"Recording is"),r.a.createElement("text",{className:"textRight"}," ON"))),r.a.createElement("div",{className:"Bordering"},r.a.createElement("div",{className:"elements"},"Bordering",r.a.createElement("br",null),r.a.createElement("div",{className:"toggle-switch"},r.a.createElement("input",{type:"checkbox",className:"toggle-switch-checkbox",name:"toggleSwitch",id:"toggleSwitch",onChange:this.sendState,defaultChecked:!0}),r.a.createElement("label",{className:"toggle-switch-label",htmlFor:"toggleSwitch"},r.a.createElement("span",{className:"toggle-switch-inner"}),r.a.createElement("span",{className:"toggle-switch-switch"}))))),r.a.createElement("form",{onSubmit:this.submitForm},r.a.createElement("div",{className:"EmailInput"},r.a.createElement("div",{className:"elements"},r.a.createElement(M.a,{id:"crawlingForm",style:{width:"30ch",paddingTop:"8px"},onSubmit:this.submitForm},r.a.createElement(te.a,{size:"small",id:"filled-email",label:"E-mail",type:"text",name:"email",variant:"filled",onChange:this.handleInputChange,value:this.state.values.email,required:!0})))),r.a.createElement("div",{className:"NotificationFreq"},r.a.createElement("div",{className:"elements"},r.a.createElement(M.a,{variant:"filled",id:"crawlingForm",style:{width:"25ch",paddingTop:"8px"},size:"small"},r.a.createElement(ae.a,{id:"simple-select-outlined-label",style:{paddingTop:"8px"}},"Notification frequency"),r.a.createElement(re.a,{labelId:"simple-select-outlined-label",id:"simple-select-outlined",name:"period",value:this.state.values.period,onChange:this.handleInputChange,label:"period",required:"true"},r.a.createElement(ne.a,{value:""},r.a.createElement("em",null,"Choose one...")),r.a.createElement(ne.a,{value:1/360},"10sec"),r.a.createElement(ne.a,{value:1/60},"1min"),r.a.createElement(ne.a,{value:1/6},"10min"),r.a.createElement(ne.a,{value:.5},"0.5h"),r.a.createElement(ne.a,{value:1},"1h"),r.a.createElement(ne.a,{value:6},"6h"),r.a.createElement(ne.a,{value:12},"12h"),r.a.createElement(ne.a,{value:24},"24h"))))),r.a.createElement("div",{className:"SubmitButton"},r.a.createElement("div",{className:"elements"},r.a.createElement(M.a,{id:"crawlingForm"},r.a.createElement(P.a,{variant:"contained",color:"primary",startIcon:r.a.createElement(ee.a,null),type:"submit"},"Submit"))))))}}]),a}(r.a.Component);var ce=function(e){var t=Object(K.g)();return(r.a.createElement(le,{Callback:e.Callback,borderState:e.borderState,xpathFromParent:e.xpathFromParent,url:t.state.url}))},oe=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).callbackFunction=function(e){n.setState({borderState:e}),console.log(n.state.borderState),document.getElementById("pageFrame").contentWindow.TurnOffBordering=n.state.borderState,document.getElementById("pageFrame").contentWindow.UpdateBorders()},n.state={borderState:0},n}return Object(i.a)(a,[{key:"TakeXpath",value:function(){return document.getElementById("pageFrame").contentWindow.xpathIframe}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(ce,{Callback:this.callbackFunction,borderState:this.state.borderState,xpathFromParent:this.TakeXpath}),r.a.createElement("div",{id:"Content"},r.a.createElement(Q,null)))}}]),a}(r.a.Component),ie=a(208),se=a.n(ie);var me=function(){return r.a.createElement("div",null,r.a.createElement("center",null,r.a.createElement("div",{className:"background"},r.a.createElement(C,null),r.a.createElement("main",{className:"MainContent"},r.a.createElement("div",{className:"PageContent"},r.a.createElement("h2",null,"I'm really sorry, but this page doesn't exist"),r.a.createElement("img",{src:se.a,height:"170px",width:"150px",alt:"how dare you?"}),r.a.createElement("h4",null,"Go back to the right path by clicking button below..."),r.a.createElement(u.a,{forceRefresh:!0},r.a.createElement(K.d,null,r.a.createElement(u.b,{to:"/"},r.a.createElement(P.a,{variant:"contained",color:"primary"},"Cats are better than dogs!")))))),r.a.createElement(x,null))))};var ue=function(){return r.a.createElement("body",null,r.a.createElement(u.a,null,r.a.createElement(K.d,null,r.a.createElement(K.b,{exact:!0,strict:!0,path:"/",component:O}),r.a.createElement(K.b,{exact:!0,strict:!0,path:"/my-account",component:Y}),r.a.createElement(K.b,{exact:!0,strict:!0,path:"/my-crawls",component:$}),r.a.createElement(K.b,{exact:!0,strict:!0,path:"/new-crawl",component:W}),r.a.createElement(K.b,{path:"/new-crawl/start-crawling",component:oe}),r.a.createElement(K.b,{exact:!0,strict:!0,path:"/404",component:me}),r.a.createElement(K.a,{to:"/404"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ue,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[227,1,2]]]);
//# sourceMappingURL=main.b1da01e7.chunk.js.map