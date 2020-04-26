(this.webpackJsonpnoticrawl=this.webpackJsonpnoticrawl||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(76),r=a.n(i),s=(a(91),a(92),a(4)),o=a(5),c=a(8),u=a(7),m=a(3),d=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(o.a)(a,[{key:"submitLogin",value:function(e){}},{key:"render",value:function(){return l.a.createElement("div",{className:"inner-container"},l.a.createElement("div",{className:"box"},l.a.createElement("div",{className:"input-group"},l.a.createElement("label",{htmlFor:"username"},"Username"),l.a.createElement("input",{type:"text",name:"username",className:"login-input",placeholder:"Username"})),l.a.createElement("div",{className:"input-group"},l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{type:"password",name:"password",className:"login-input",placeholder:"Password"})),l.a.createElement(m.b,{to:"/new-crawl"},l.a.createElement("button",{type:"button",className:"login-btn",onClick:this.submitLogin.bind(this)},"Login"))))}}]),a}(l.a.Component),p=a(53),v=a(66),E=a(67),b=a(49),h=a(36),g=function(e){var t=e.label,a=Object(E.a)(e,["label"]),n=Object(b.c)(a),i=Object(v.a)(n,2),r=i[0],s=i[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("label",{htmlFor:a.id||a.name},t),l.a.createElement("input",Object.assign({className:"text-input"},r,a)),s.touched&&s.error?l.a.createElement("div",{className:"error"},s.error):null)},f=function(e){var t=e.children,a=Object(E.a)(e,["children"]),n=Object(b.c)(Object(p.a)({},a,{type:"checkbox"})),i=Object(v.a)(n,2),r=i[0],s=i[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("label",{className:"checkbox"},l.a.createElement("input",Object.assign({},r,a,{type:"checkbox"})),t),s.touched&&s.error?l.a.createElement("div",{className:"error"},s.error):null)},w=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={username:"",password:"ss",email:"",acceptedTerms:!1,errors:{username:"",email:"",password:""}},n}return Object(o.a)(a,[{key:"render",value:function(){this.state.errors;return(l.a.createElement("div",{className:"inner-container"},l.a.createElement("div",{className:"box"},l.a.createElement(b.b,{initialValues:{email:"",password:"",confirmPassword:"",acceptedTerms:!1},validationSchema:h.b({password:h.d().max(30,"Must be 30 characters or less").required("Password required").min(8,"Minimum length 8"),confirmPassword:h.d().required("Password required").oneOf([h.c("password"),null],"Passwords must match"),email:h.d().email("Invalid email address").required("Email required"),acceptedTerms:h.a().required("Required").oneOf([!0],"You must accept the terms and conditions")}),onSubmit:function(e,t){var a=t.setSubmitting;setTimeout((function(){alert(JSON.stringify(e,null,2)),a(!1)}),400)}},l.a.createElement("div",{className:"scroll"},l.a.createElement(b.a,null,l.a.createElement("div",{className:"input-group"},l.a.createElement(g,{label:"Email Address",type:"email",name:"email",className:"login-input",placeholder:"Email"}),l.a.createElement(g,{label:"Password",type:"password",name:"password",className:"login-input",placeholder:"Password"}),l.a.createElement(g,{label:"Confirm password",type:"password",name:"confirmPassword",className:"login-input",placeholder:"Password"}),l.a.createElement(f,{name:"acceptedTerms"},"I accept the terms and conditions"),l.a.createElement("button",{className:"login-btn",type:"submit"},"Submit"))))))))}}]),a}(l.a.Component),N=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={isLoginOpen:!0,isRegisterOpen:!1},n}return Object(o.a)(a,[{key:"showLoginBox",value:function(){this.setState({isLoginOpen:!0,isRegisterOpen:!1})}},{key:"showRegisterBox",value:function(){this.setState({isRegisterOpen:!0,isLoginOpen:!1})}},{key:"render",value:function(){return l.a.createElement("div",{className:"root-container"},l.a.createElement("div",{className:"box-controller"},l.a.createElement("div",{className:"controller "+(this.state.isLoginOpen?"selected-controller":""),onClick:this.showLoginBox.bind(this)},"Login"),l.a.createElement("div",{className:"controller "+(this.state.isRegisterOpen?"selected-controller":""),onClick:this.showRegisterBox.bind(this)},"Register")),l.a.createElement("div",{className:"box-container"},this.state.isLoginOpen&&l.a.createElement(d,null),this.state.isRegisterOpen&&l.a.createElement(w,null)))}}]),a}(l.a.Component),y=a(81),O=a.n(y);var q=function(){return l.a.createElement("header",{className:"AppHeader"},l.a.createElement("img",{src:O.a,className:"AppLogo",alt:"logo"}))};var x=function(){return l.a.createElement("footer",{className:"Footer"},l.a.createElement("text",{className:"Footer-text"},"Innovative Projects Summer - Wroc\u0142aw 2020"))};var k=function(){return l.a.createElement("div",null,l.a.createElement("center",null,l.a.createElement("div",{className:"background"},l.a.createElement(q,null),l.a.createElement("main",{className:"MainContent"},l.a.createElement(N,null)),l.a.createElement(x,null))))},j=a(54),C=a(72),S=a.n(C),L=a(82),P=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).submitForm=function(){var e=Object(L.a)(S.a.mark((function e(t){var a,l;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(n.state),n.setState({isSubmitting:!0}),e.next=5,fetch("/api/v1/new-crawl",{method:"POST",body:JSON.stringify(n.state.values),headers:{"Content-Type":"application/json"}});case 5:return a=e.sent,alert(JSON.stringify(n.state.values)),n.setState({isSubmitting:!1}),e.next=10,a.json();case 10:(l=e.sent).hasOwnProperty("error")?n.setState({message:l.error,isError:!0}):n.setState({message:l.success}),alert(l.parsedPage),n.setState({parsedPageToExport:l.parsedPage}),setTimeout((function(){n.setState({isError:!1,message:"",values:{link:""}}),window.location.replace="/start-crawling"}),1600);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.handleInputChange=function(e){return n.setState({values:Object(p.a)({},n.state.values,Object(j.a)({},e.target.name,e.target.value))})},n.state={values:{link:""},parsedPageToExport:"",isSubmitting:!1,isError:!1},n}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"LinkInput"},l.a.createElement("form",{onSubmit:this.submitForm},l.a.createElement("div",{className:"input-group"},l.a.createElement("label",{htmlFor:"link"},l.a.createElement("h1",null,"Paste your link below")),l.a.createElement("input",{type:"link",name:"link",id:"link",value:this.state.values.link,onChange:this.handleInputChange,title:"link",required:!0})),l.a.createElement("button",{type:"submit"},"Go to website")),l.a.createElement("div",{className:"message ".concat(this.state.isError&&"error")},this.state.isSubmitting?"Submitting...":this.state.message),l.a.createElement(m.b,{to:{pathname:"/new-crawl/start-crawling",state:{externalPageToRender:this.state.parsedPageToExport}}},l.a.createElement("button",null,'working "go to website" button'))))}}]),a}(l.a.Component),B=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("center",null,l.a.createElement("ul",{className:"nav"},l.a.createElement("li",null,l.a.createElement(m.b,{to:"/my-crawls"},"My Crawls")),l.a.createElement("li",null,l.a.createElement(m.b,{to:"/new-crawl"},l.a.createElement("u",null,"New Crawl"))),l.a.createElement("li",null,l.a.createElement(m.b,{to:"/my-account"},"My Account")),l.a.createElement("li",null,l.a.createElement("a",{href:"/"},"Logout")))))}}]),a}(l.a.Component);var M=function(){return l.a.createElement("div",null,l.a.createElement("center",null,l.a.createElement("div",{className:"background"},l.a.createElement(q,null),l.a.createElement("main",{className:"MainContent"},l.a.createElement(P,null),l.a.createElement(B,null)),l.a.createElement(x,null))))},I=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("center",null,l.a.createElement("ul",{className:"nav"},l.a.createElement("li",null,l.a.createElement(m.b,{to:"/my-crawls"},"My Crawls")),l.a.createElement("li",null,l.a.createElement(m.b,{to:"/new-crawl"},"New Crawl")),l.a.createElement("li",null,l.a.createElement(m.b,{to:"/my-account"},l.a.createElement("u",null,"My Account"))),l.a.createElement("li",null,l.a.createElement("a",{href:"/"},"Logout")))))}}]),a}(l.a.Component);var T=function(){return l.a.createElement("div",null,l.a.createElement("center",null,l.a.createElement("div",{className:"background"},l.a.createElement(q,null),l.a.createElement("main",{className:"MainContent"},l.a.createElement(I,null)),l.a.createElement(x,null))))},R=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("center",null,l.a.createElement("ul",{className:"nav"},l.a.createElement("li",null,l.a.createElement(m.b,{to:"/my-crawls"},l.a.createElement("u",null,"My Crawls"))),l.a.createElement("li",null,l.a.createElement(m.b,{to:"/new-crawl"},"New Crawl")),l.a.createElement("li",null,l.a.createElement(m.b,{to:"/my-account"},"My Account")),l.a.createElement("li",null,l.a.createElement("a",{href:"/"},"Logout")))))}}]),a}(l.a.Component);var F=function(){return l.a.createElement("div",null,l.a.createElement("center",null,l.a.createElement("div",{className:"background"},l.a.createElement(q,null),l.a.createElement("main",{className:"MainContent"},l.a.createElement(R,null)),l.a.createElement(x,null))))},W=a(35),D=a(83),A=a.n(D),J=a(84),H=a.n(J),z=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).sendState=function(){e.props.borderState?e.props.Callback(0):e.props.Callback(1)},e}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{id:"CrawlingBanner"},l.a.createElement("div",{className:"Logo"},l.a.createElement("div",{className:"elements"},l.a.createElement("img",{src:H.a,alt:"logo",height:"40",width:"167"}))),l.a.createElement("div",{className:"StatusBox"},l.a.createElement("div",{className:"elements"},l.a.createElement("h4",null,"Recording is ON"))),l.a.createElement("div",{className:"Setting1"},l.a.createElement("div",{className:"elements"},"Bordering",l.a.createElement("br",null),l.a.createElement("div",{className:"toggle-switch"},l.a.createElement("input",{type:"checkbox",className:"toggle-switch-checkbox",name:"toggleSwitch",id:"toggleSwitch",onChange:this.sendState,defaultChecked:!0}),l.a.createElement("label",{className:"toggle-switch-label",htmlFor:"toggleSwitch"},l.a.createElement("span",{className:"toggle-switch-inner"}),l.a.createElement("span",{className:"toggle-switch-switch"}))))),l.a.createElement("div",{className:"Setting2"},l.a.createElement("div",{className:"elements"},l.a.createElement("h4",null,"something"))),l.a.createElement("div",{className:"SubmitButton"},l.a.createElement("div",{className:"elements"},l.a.createElement("button",{className:"submit"},"Submit"))),l.a.createElement("div",{className:"xPaths"},l.a.createElement("div",{className:"elements"},l.a.createElement("text",{id:"status"},"Wait for it... or enable JavaScript."),l.a.createElement("br",null),l.a.createElement("text",{id:"status2"},"Wait for it... or enable JavaScript."))))}}]),a}(l.a.Component),U=a(32);var _=function(){var e=Object(U.g)();return(l.a.createElement("div",null,l.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.state.externalPageToRender}})))},V=(a(99),function(e){return e&&e.id?'//*[@id="'+e.id+'"]':function(e){for(var t=[];e&&1===e.nodeType;e=e.parentNode){var a=0;if(e&&e.id){t.splice(0,0,'/*[@id="'+e.id+'"]');break}for(var n=e.previousSibling;n;n=n.previousSibling)n.nodeType!==Node.DOCUMENT_TYPE_NODE&&n.nodeName===e.nodeName&&++a;var l=e.nodeName.toLowerCase(),i=a?"["+(a+1)+"]":"";t.splice(0,0,l+i)}return t.length?"/"+t.join("/"):null}(e)}),G=null;function K(){return l.a.createElement("div",null,l.a.createElement("div",{id:"empty"}),l.a.createElement("div",{id:"outer",class:"outer"}),l.a.createElement("div",{id:"selector"},l.a.createElement("div",{id:"selector-top"}),l.a.createElement("div",{id:"selector-left"}),l.a.createElement("div",{id:"selector-right"}),l.a.createElement("div",{id:"selector-bottom"})))}document.addEventListener("mouseover",(function(e){G=e.target})),setInterval((function(){A()("#status").text("The current element is: "+V(G)+".")}),1);var Y=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).callbackFunction=function(e){n.setState({borderState:e})},n.select=function(e){var t=e.target;n.setState({title:V(t)});var a=document.getElementById("outer").style;a.display="block",a.width=t.offsetWidth+"px",a.height=t.offsetHeight+"px",a.left=t.offsetLeft+"px",a.top=t.offsetTop+"px"},n.state={title:"Click here"},n.state={borderState:1},n.select=n.select.bind(Object(W.a)(n)),n.handleLoad=n.handleLoad.bind(Object(W.a)(n)),n.border=n.border.bind(Object(W.a)(n)),n.borderDel=n.borderDel.bind(Object(W.a)(n)),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("click",this.handleLoad),document.getElementById("HereWillBeContent").addEventListener("mousemove",this.border),document.getElementById("CrawlingBanner").addEventListener("mousemove",this.borderDel),window.addEventListener("mousewheel",this.borderDel)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("click",this.handleLoad),document.getElementById("HereWillBeContent").removeEventListener("mousemove",this.border),document.getElementById("CrawlingBanner").removeEventListener("mousemove",this.borderDel),window.removeEventListener("mousewheel",this.borderDel)}},{key:"borderDel",value:function(){document.getElementById("selector").style.display="none"}},{key:"border",value:function(e){if(0!=this.state.borderState){var t=e.target;if("selector-top"!==t.id&&"selector-bottom"!==t.id&&"selector-left"!==t.id&&"selector-right"!==t.id){document.getElementById("selector").style.display="block";var a=t.getBoundingClientRect(),n=a.height,l=a.width,i=document.getElementById("selector-top").style;i.width=l+"px",i.left=a.left+"px",i.top=a.top+"px";var r=document.getElementById("selector-bottom").style;r.width=l+"px",r.left=a.left+"px",r.top=a.top+n-3+"px";var s=document.getElementById("selector-left").style;s.height=n+"px",s.left=a.left+"px",s.top=a.top+"px";var o=document.getElementById("selector-right").style;o.height=n+"px",o.left=a.left+l+"px",o.top=a.top+"px"}}}},{key:"handleLoad",value:function(e){var t=e.target;t&&"outer"===t.className&&(document.getElementById("outer").style.display="none")}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(z,{Callback:this.callbackFunction,borderState:this.state.borderState}),l.a.createElement(K,null),l.a.createElement("div",{className:"Content"},l.a.createElement("div",{id:"HereWillBeContent",onClick:this.select},this.state.title,">",l.a.createElement(_,null),this.state.borderState,"/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////",l.a.createElement("h1",{id:"aaaaasdasdasdasd"},"element h1"),l.a.createElement("h4",null,"element dddh4"),l.a.createElement("h1",null,"Welcome"),l.a.createElement("button",{class:"n"},"Click me"),l.a.createElement("button",{onClick:function(){return alert("Klikni\u0119to!")}},"Kliknij!"),l.a.createElement("div",null,"Witaj, "),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo voluptates doloremque quisquam omnis rem fuga veritatis odit! Perferendis cupiditate corporis consequuntur amet ducimus quam       ",l.a.createElement("button",{class:"n"},"Click me1"),"at magni facilis debitis ut quisquam molestias maxime voluptatibus voluptatum    ",l.a.createElement("div",null,"     sadasdsasadasdsa ",l.a.createElement("button",{class:"n"},"Click me2")),"  ",l.a.createElement("button",{class:"n"},"Click me3"),"minima in totam. Velit inventore deserunt facilis temporibus id provident illo optio ipsa aut consequuntur sed repellat dolorem obcaecati iusto ab. Placeat repellat dolores debitis deleniti ipsum a accusamus in necessitatibus perferendis nostrum laudantium error modi adipisci aliquam a deleniti omnis expedita quis natus. Velit placeat fugit officiis non nihil fuga dolorum veritatis maiores fugiat eligendi iste veniam tempore deserunt."),l.a.createElement("button",null,"More test buttons"),l.a.createElement("center",null,l.a.createElement("h1",null,"Przyk\u0142adowy tekst do zaznaczenia")),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam voluptatem a architecto nihil ullam. Non dolores optio ea dolorem accusantium a delectus molestias quam nulla fugit voluptas iste ipsum! Molestias id quaerat praesentium quo a illum optio sed at ut ad corporis asperiores eos dolorum commodi laboriosam adipisci provident voluptas nemo soluta voluptas molestias similique ex. Praesentium sequi natus molestiae adipisci perspiciatis voluptatibus et vero nisi!"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam voluptatem a architecto nihil ullam. Non dolores optio ea dolorem accusantium a delectus molestias quam nulla fugit voluptas iste ipsum! Molestias id quaerat praesentium quo a illum optio sed at ut ad corporis asperiores eos dolorum commodi laboriosam adipisci provident voluptas nemo soluta voluptas molestias similique ex. Praesentium sequi natus molestiae adipisci perspiciatis voluptatibus et vero nisi!"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam voluptatem a architecto nihil ullam. Non dolores optio ea dolorem accusantium a delectus molestias quam nulla fugit voluptas iste ipsum! Molestias id quaerat praesentium quo a illum optio sed at ut ad corporis asperiores eos dolorum commodi laboriosam adipisci provident voluptas nemo soluta voluptas molestias similique ex. Praesentium sequi natus molestiae adipisci perspiciatis voluptatibus et vero nisi!"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam voluptatem a architecto nihil ullam. Non dolores optio ea dolorem accusantium a delectus molestias quam nulla fugit voluptas iste ipsum! Molestias id quaerat praesentium quo a illum optio sed at ut ad corporis asperiores eos dolorum commodi laboriosam adipisci provident voluptas nemo soluta voluptas molestias similique ex. Praesentium sequi natus molestiae adipisci perspiciatis voluptatibus et vero nisi!"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam voluptatem a architecto nihil ullam. Non dolores optio ea dolorem accusantium a delectus molestias quam nulla fugit voluptas iste ipsum! Molestias id quaerat praesentium quo a illum optio sed at ut ad corporis asperiores eos dolorum commodi laboriosam adipisci provident voluptas nemo soluta voluptas molestias similique ex. Praesentium sequi natus molestiae adipisci perspiciatis voluptatibus et vero nisi!"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam voluptatem a architecto nihil ullam. Non dolores optio ea dolorem accusantium a delectus molestias quam nulla fugit voluptas iste ipsum! Molestias id quaerat praesentium quo a illum optio sed at ut ad corporis asperiores eos dolorum commodi laboriosam adipisci provident voluptas nemo soluta voluptas molestias similique ex. Praesentium sequi natus molestiae adipisci perspiciatis voluptatibus et vero nisi!"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam voluptatem a architecto nihil ullam. Non dolores optio ea dolorem accusantium a delectus molestias quam nulla fugit voluptas iste ipsum! Molestias id quaerat praesentium quo a illum optio sed at ut ad corporis asperiores eos dolorum commodi laboriosam adipisci provident voluptas nemo soluta voluptas molestias similique ex. Praesentium sequi natus molestiae adipisci perspiciatis voluptatibus et vero nisi!"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam voluptatem a architecto nihil ullam. Non dolores optio ea dolorem accusantium a delectus molestias quam nulla fugit voluptas iste ipsum! Molestias id quaerat praesentium quo a illum optio sed at ut ad corporis asperiores eos dolorum commodi laboriosam adipisci provident voluptas nemo soluta voluptas molestias similique ex. Praesentium sequi natus molestiae adipisci perspiciatis voluptatibus et vero nisi!"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam voluptatem a architecto nihil ullam. Non dolores optio ea dolorem accusantium a delectus molestias quam nulla fugit voluptas iste ipsum! Molestias id quaerat praesentium quo a illum optio sed at ut ad corporis asperiores eos dolorum commodi laboriosam adipisci provident voluptas nemo soluta voluptas molestias similique ex. Praesentium sequi natus molestiae adipisci perspiciatis voluptatibus et vero nisi!"))))}}]),a}(l.a.Component),$=a(85),Q=a.n($);var X=function(){return l.a.createElement("div",null,l.a.createElement("center",null,l.a.createElement("div",{className:"background"},l.a.createElement(q,null),l.a.createElement("main",{className:"MainContent"},l.a.createElement("div",{className:"LinkInput"},l.a.createElement("h2",null,"I'm really sorry, but this page doesn't exist"),l.a.createElement("img",{src:Q.a,height:"170px",width:"150px",alt:"how dare you?"}),l.a.createElement("h4",null,"Go back to the right path by clicking button below..."),l.a.createElement(m.a,{forceRefresh:!0},l.a.createElement(U.d,null,l.a.createElement(m.b,{to:"/"},l.a.createElement("button",null,"Cats are better than dogs!")))))),l.a.createElement(x,null))))},Z=l.a.createContext(),ee=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).state={message:""},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return(l.a.createElement(Z.Provider,{value:{state:this.state,setMessage:function(t){return e.setState({message:t})}}},this.props.children,"   "))}}]),a}(n.Component);var te=function(){return l.a.createElement("body",null,l.a.createElement(ee,null,l.a.createElement(m.a,null,l.a.createElement(U.d,null,l.a.createElement(U.b,{exact:!0,strict:!0,path:"/",component:k}),l.a.createElement(U.b,{exact:!0,strict:!0,path:"/new-crawl",component:M}),l.a.createElement(U.b,{exact:!0,strict:!0,path:"/new-crawl/start-crawling",component:Y}),l.a.createElement(U.b,{exact:!0,strict:!0,path:"/my-account",component:T}),l.a.createElement(U.b,{exact:!0,strict:!0,path:"/my-crawls",component:F}),l.a.createElement(U.b,{exact:!0,strict:!0,path:"/404",component:X}),l.a.createElement(U.a,{to:"/404"})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},81:function(e,t,a){e.exports=a.p+"static/media/logo.fe41c8fe.png"},84:function(e,t,a){e.exports=a.p+"static/media/logo.fe41c8fe.png"},85:function(e,t,a){e.exports=a.p+"static/media/404-cat.3eba6875.png"},86:function(e,t,a){e.exports=a(100)},91:function(e,t,a){},92:function(e,t,a){},99:function(e,t,a){}},[[86,1,2]]]);
//# sourceMappingURL=main.5d948b0f.chunk.js.map