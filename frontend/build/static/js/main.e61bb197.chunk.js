(this.webpackJsonpnoticrawl=this.webpackJsonpnoticrawl||[]).push([[0],{78:function(e,t,a){e.exports=a.p+"static/media/logo.fe41c8fe.png"},84:function(e,t,a){e.exports=a.p+"static/media/logo.fe41c8fe.png"},85:function(e,t,a){e.exports=a(99)},90:function(e,t,a){},91:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var i=a(0),l=a.n(i),n=a(54),s=a.n(n),o=(a(90),a(91),a(78)),r=a.n(o);var u=function(){return l.a.createElement("header",{className:"AppHeader"},l.a.createElement("img",{src:r.a,className:"AppLogo",alt:"logo"}))};var m=function(){return l.a.createElement("footer",{className:"Footer"},l.a.createElement("text",{className:"Footer-text"},"Innovative Projects Summer - Wroc\u0142aw 2020"))},c=a(5),p=a(6),d=a(8),v=a(7),E=a(9),b=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(e){var i;return Object(c.a)(this,a),(i=t.call(this,e)).state={},i}return Object(p.a)(a,[{key:"submitLogin",value:function(e){}},{key:"render",value:function(){return l.a.createElement("div",{className:"inner-container"},l.a.createElement("div",{className:"box"},l.a.createElement("div",{className:"input-group"},l.a.createElement("label",{htmlFor:"username"},"Username"),l.a.createElement("input",{type:"text",name:"username",className:"login-input",placeholder:"Username"})),l.a.createElement("div",{className:"input-group"},l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{type:"password",name:"password",className:"login-input",placeholder:"Password"})),l.a.createElement(E.b,{to:"/new-crawl"},l.a.createElement("button",{type:"button",className:"login-btn",onClick:this.submitLogin.bind(this)},"Login"))))}}]),a}(l.a.Component),h=a(55),g=a(68),f=a(69),q=a(48),N=a(35),w=function(e){var t=e.label,a=Object(f.a)(e,["label"]),i=Object(q.c)(a),n=Object(g.a)(i,2),s=n[0],o=n[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("label",{htmlFor:a.id||a.name},t),l.a.createElement("input",Object.assign({className:"text-input"},s,a)),o.touched&&o.error?l.a.createElement("div",{className:"error"},o.error):null)},O=function(e){var t=e.children,a=Object(f.a)(e,["children"]),i=Object(q.c)(Object(h.a)({},a,{type:"checkbox"})),n=Object(g.a)(i,2),s=n[0],o=n[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("label",{className:"checkbox"},l.a.createElement("input",Object.assign({},s,a,{type:"checkbox"})),t),o.touched&&o.error?l.a.createElement("div",{className:"error"},o.error):null)},y=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(e){var i;return Object(c.a)(this,a),(i=t.call(this,e)).state={username:"",password:"ss",email:"",acceptedTerms:!1,errors:{username:"",email:"",password:""}},i}return Object(p.a)(a,[{key:"render",value:function(){this.state.errors;return(l.a.createElement("div",{className:"inner-container"},l.a.createElement("div",{className:"box"},l.a.createElement(q.b,{initialValues:{email:"",password:"",confirmPassword:"",acceptedTerms:!1},validationSchema:N.b({password:N.d().max(30,"Must be 30 characters or less").required("Password required").min(8,"Minimum length 8"),confirmPassword:N.d().required("Password required").oneOf([N.c("password"),null],"Passwords must match"),email:N.d().email("Invalid email address").required("Email required"),acceptedTerms:N.a().required("Required").oneOf([!0],"You must accept the terms and conditions")}),onSubmit:function(e,t){var a=t.setSubmitting;setTimeout((function(){alert(JSON.stringify(e,null,2)),a(!1)}),400)}},l.a.createElement("div",{className:"scroll"},l.a.createElement(q.a,null,l.a.createElement("div",{className:"input-group"},l.a.createElement(w,{label:"Email Address",type:"email",name:"email",className:"login-input",placeholder:"Email"}),l.a.createElement(w,{label:"Password",type:"password",name:"password",className:"login-input",placeholder:"Password"}),l.a.createElement(w,{label:"Confirm password",type:"password",name:"confirmPassword",className:"login-input",placeholder:"Password"}),l.a.createElement(O,{name:"acceptedTerms"},"I accept the terms and conditions"),l.a.createElement("button",{className:"login-btn",type:"submit"},"Submit"))))))))}}]),a}(l.a.Component),j=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(e){var i;return Object(c.a)(this,a),(i=t.call(this,e)).state={isLoginOpen:!0,isRegisterOpen:!1},i}return Object(p.a)(a,[{key:"showLoginBox",value:function(){this.setState({isLoginOpen:!0,isRegisterOpen:!1})}},{key:"showRegisterBox",value:function(){this.setState({isRegisterOpen:!0,isLoginOpen:!1})}},{key:"render",value:function(){return l.a.createElement("div",{className:"root-container"},l.a.createElement("div",{className:"box-controller"},l.a.createElement("div",{className:"controller "+(this.state.isLoginOpen?"selected-controller":""),onClick:this.showLoginBox.bind(this)},"Login"),l.a.createElement("div",{className:"controller "+(this.state.isRegisterOpen?"selected-controller":""),onClick:this.showRegisterBox.bind(this)},"Register")),l.a.createElement("div",{className:"box-container"},this.state.isLoginOpen&&l.a.createElement(b,null),this.state.isRegisterOpen&&l.a.createElement(y,null)))}}]),a}(l.a.Component);var k=function(){return l.a.createElement("div",null,l.a.createElement("main",{className:"MainContent"},l.a.createElement(j,null)))},x=a(56),L=a(74),C=a.n(L),P=a(83),S=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(e){var i;return Object(c.a)(this,a),(i=t.call(this,e)).submitForm=function(){var e=Object(P.a)(C.a.mark((function e(t){var a,l;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(i.state),i.setState({isSubmitting:!0}),e.next=5,fetch("/new-crawl",{method:"POST",body:JSON.stringify(i.state.values),headers:{"Content-Type":"application/json"}});case 5:return a=e.sent,alert(JSON.stringify(i.state.values)),i.setState({isSubmitting:!1}),e.next=10,a.json();case 10:(l=e.sent).hasOwnProperty("error")?i.setState({message:l.error,isError:!0}):i.setState({message:l.success}),alert(l.parsedPage),setTimeout((function(){return i.setState({isError:!1,message:"",values:{link:""}})}),1600);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i.handleInputChange=function(e){return i.setState({values:Object(h.a)({},i.state.values,Object(x.a)({},e.target.name,e.target.value))})},i.state={values:{link:""},isSubmitting:!1,isError:!1},i}return Object(p.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.submitForm},l.a.createElement("div",{className:"input-group"},l.a.createElement("label",{htmlFor:"link"},l.a.createElement("h1",null,"Paste your link below")),l.a.createElement("input",{type:"link",name:"link",id:"link",value:this.state.values.link,onChange:this.handleInputChange,title:"link",required:!0})),l.a.createElement("button",{type:"submit"},"Go to website")),l.a.createElement("div",{className:"message ".concat(this.state.isError&&"error")},this.state.isSubmitting?"Submitting...":this.state.message),l.a.createElement(E.b,{to:"/start-crawling"},l.a.createElement("button",null,'working "go to website" button')))}}]),a}(l.a.Component),M=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("center",null,l.a.createElement("ul",{className:"nav"},l.a.createElement("li",null,l.a.createElement(E.b,{to:"/my-crawls"},"My Crawls")),l.a.createElement("li",null,l.a.createElement(E.b,{to:"/new-crawl"},l.a.createElement("u",null,"New Crawl"))),l.a.createElement("li",null,l.a.createElement(E.b,{to:"/my-account"},"My Account")),l.a.createElement("li",null,l.a.createElement("a",{href:"/"},"Logout")))))}}]),a}(l.a.Component);var T=function(){return l.a.createElement("div",null,l.a.createElement("center",null,l.a.createElement("main",{className:"MainContent"},l.a.createElement(S,null),l.a.createElement(M,null))))},B=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("center",null,l.a.createElement("ul",{className:"nav"},l.a.createElement("li",null,l.a.createElement(E.b,{to:"/my-crawls"},"My Crawls")),l.a.createElement("li",null,l.a.createElement(E.b,{to:"/new-crawl"},"New Crawl")),l.a.createElement("li",null,l.a.createElement(E.b,{to:"/my-account"},l.a.createElement("u",null,"My Account"))),l.a.createElement("li",null,l.a.createElement("a",{href:"/"},"Logout")))))}}]),a}(l.a.Component);var I=function(){return l.a.createElement("div",null,l.a.createElement("center",null,l.a.createElement("main",{className:"MainContent"},l.a.createElement(B,null))))},F=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("center",null,l.a.createElement("ul",{className:"nav"},l.a.createElement("li",null,l.a.createElement(E.b,{to:"/my-crawls"},l.a.createElement("u",null,"My Crawls"))),l.a.createElement("li",null,l.a.createElement(E.b,{to:"/new-crawl"},"New Crawl")),l.a.createElement("li",null,l.a.createElement(E.b,{to:"/my-account"},"My Account")),l.a.createElement("li",null,l.a.createElement("a",{href:"/"},"Logout")))))}}]),a}(l.a.Component);var R=function(){return l.a.createElement("div",null,l.a.createElement("center",null,l.a.createElement("main",{className:"MainContent"},l.a.createElement(F,null))))},W=a(50),J=a(53),A=a.n(J),D=a(84),U=a.n(D);var H=function(){return l.a.createElement("div",{className:"CrawlingBanner"},l.a.createElement("div",{className:"Logo"},l.a.createElement("div",{className:"elements"},l.a.createElement("img",{src:U.a,alt:"logo",height:"40",width:"167"}))),l.a.createElement("div",{className:"StatusBox"},l.a.createElement("div",{className:"elements"},l.a.createElement("h4",null,"Recording is ON"))),l.a.createElement("div",{className:"Setting1"},l.a.createElement("div",{className:"elements"},l.a.createElement("h4",null,"something"))),l.a.createElement("div",{className:"Setting2"},l.a.createElement("div",{className:"elements"},l.a.createElement("h4",null,"something"))),l.a.createElement("div",{className:"SubmitButton"},l.a.createElement("div",{className:"elements"},l.a.createElement("button",{className:"submit"},"Submit"))),l.a.createElement("div",{className:"xPaths"},l.a.createElement("div",{className:"elements"},l.a.createElement("text",{id:"status"},"Wait for it... or enable JavaScript."),l.a.createElement("br",null),l.a.createElement("text",{id:"status2"},"Wait for it... or enable JavaScript."))))},V=(i.Component,function(e){return e&&e.id?'//*[@id="'+e.id+'"]':function(e){for(var t=[];e&&1===e.nodeType;e=e.parentNode){var a=0;if(e&&e.id){t.splice(0,0,'/*[@id="'+e.id+'"]');break}for(var i=e.previousSibling;i;i=i.previousSibling)i.nodeType!==Node.DOCUMENT_TYPE_NODE&&i.nodeName===e.nodeName&&++a;var l=e.nodeName.toLowerCase(),n=a?"["+(a+1)+"]":"";t.splice(0,0,l+n)}return t.length?"/"+t.join("/"):null}(e)}),K=null;function Y(){return l.a.createElement("div",null,l.a.createElement("div",{id:"empty"}),l.a.createElement("div",{id:"outer",class:"outer"}))}document.addEventListener("mouseover",(function(e){K=e.target})),setInterval((function(){A()("#status").text("The current element is: "+V(K)+".")}),1);var _=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(e){var i;return Object(c.a)(this,a),(i=t.call(this,e)).changeTitle=function(e){var t,a,l=A()(document.getElementById("outer"));if(t=e.target,i.setState({title:V(t)}),l.show(),t!==a){a=t;var n=A()(t),s=n.offset();l.css({width:n.outerWidth()-1,height:n.outerHeight()-1,left:s.left,top:s.top})}},i.state={title:"Click here"},i.changeTitle=i.changeTitle.bind(Object(W.a)(i)),i.handleLoad=i.handleLoad.bind(Object(W.a)(i)),i}return Object(p.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("click",this.handleLoad)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("click",this.handleLoad)}},{key:"handleLoad",value:function(e){var t;(t=e.target)&&"outer"===t.className&&(A()(document.getElementById("outer")).hide(),t=document.getElementById("empty"))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(H,null)),l.a.createElement("div",null,l.a.createElement(Y,null)),l.a.createElement("div",{className:"Content"}),l.a.createElement("div",{id:"HereWillBeContent",onClick:this.changeTitle},this.state.title,">",l.a.createElement("br",null),"/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////",l.a.createElement("h1",{id:"aaaaasdasdasdasd"},"element h1"),l.a.createElement("h4",null,"element dddh4"),l.a.createElement("h1",null,"Welcome"),l.a.createElement("button",{class:"n"},"Click me"),l.a.createElement("button",{onClick:function(){return alert("Klikni\u0119to!")}},"Kliknij!"),l.a.createElement("div",null,"Witaj, "),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo voluptates doloremque quisquam omnis rem fuga veritatis odit! Perferendis cupiditate corporis consequuntur amet ducimus quam       ",l.a.createElement("button",{class:"n"},"Click me1"),"at magni facilis debitis ut quisquam molestias maxime voluptatibus voluptatum    ",l.a.createElement("div",null,"     sadasdsasadasdsa ",l.a.createElement("button",{class:"n"},"Click me2")),"  ",l.a.createElement("button",{class:"n"},"Click me3"),"minima in totam. Velit inventore deserunt facilis temporibus id provident illo optio ipsa aut consequuntur sed repellat dolorem obcaecati iusto ab. Placeat repellat dolores debitis deleniti ipsum a accusamus in necessitatibus perferendis nostrum laudantium error modi adipisci aliquam a deleniti omnis expedita quis natus. Velit placeat fugit officiis non nihil fuga dolorum veritatis maiores fugiat eligendi iste veniam tempore deserunt."),l.a.createElement("button",null,"More test buttons"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam voluptatem a architecto nihil ullam. Non dolores optio ea dolorem accusantium a delectus molestias quam nulla fugit voluptas iste ipsum! Molestias id quaerat praesentium quo a illum optio sed at ut ad corporis asperiores eos dolorum commodi laboriosam adipisci provident voluptas nemo soluta voluptas molestias similique ex. Praesentium sequi natus molestiae adipisci perspiciatis voluptatibus et vero nisi!"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam voluptatem a architecto nihil ullam. Non dolores optio ea dolorem accusantium a delectus molestias quam nulla fugit voluptas iste ipsum! Molestias id quaerat praesentium quo a illum optio sed at ut ad corporis asperiores eos dolorum commodi laboriosam adipisci provident voluptas nemo soluta voluptas molestias similique ex. Praesentium sequi natus molestiae adipisci perspiciatis voluptatibus et vero nisi!"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam voluptatem a architecto nihil ullam. Non dolores optio ea dolorem accusantium a delectus molestias quam nulla fugit voluptas iste ipsum! Molestias id quaerat praesentium quo a illum optio sed at ut ad corporis asperiores eos dolorum commodi laboriosam adipisci provident voluptas nemo soluta voluptas molestias similique ex. Praesentium sequi natus molestiae adipisci perspiciatis voluptatibus et vero nisi!"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam voluptatem a architecto nihil ullam. Non dolores optio ea dolorem accusantium a delectus molestias quam nulla fugit voluptas iste ipsum! Molestias id quaerat praesentium quo a illum optio sed at ut ad corporis asperiores eos dolorum commodi laboriosam adipisci provident voluptas nemo soluta voluptas molestias similique ex. Praesentium sequi natus molestiae adipisci perspiciatis voluptatibus et vero nisi!"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam voluptatem a architecto nihil ullam. Non dolores optio ea dolorem accusantium a delectus molestias quam nulla fugit voluptas iste ipsum! Molestias id quaerat praesentium quo a illum optio sed at ut ad corporis asperiores eos dolorum commodi laboriosam adipisci provident voluptas nemo soluta voluptas molestias similique ex. Praesentium sequi natus molestiae adipisci perspiciatis voluptatibus et vero nisi!"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam voluptatem a architecto nihil ullam. Non dolores optio ea dolorem accusantium a delectus molestias quam nulla fugit voluptas iste ipsum! Molestias id quaerat praesentium quo a illum optio sed at ut ad corporis asperiores eos dolorum commodi laboriosam adipisci provident voluptas nemo soluta voluptas molestias similique ex. Praesentium sequi natus molestiae adipisci perspiciatis voluptatibus et vero nisi!"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam voluptatem a architecto nihil ullam. Non dolores optio ea dolorem accusantium a delectus molestias quam nulla fugit voluptas iste ipsum! Molestias id quaerat praesentium quo a illum optio sed at ut ad corporis asperiores eos dolorum commodi laboriosam adipisci provident voluptas nemo soluta voluptas molestias similique ex. Praesentium sequi natus molestiae adipisci perspiciatis voluptatibus et vero nisi!"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam voluptatem a architecto nihil ullam. Non dolores optio ea dolorem accusantium a delectus molestias quam nulla fugit voluptas iste ipsum! Molestias id quaerat praesentium quo a illum optio sed at ut ad corporis asperiores eos dolorum commodi laboriosam adipisci provident voluptas nemo soluta voluptas molestias similique ex. Praesentium sequi natus molestiae adipisci perspiciatis voluptatibus et vero nisi!"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam voluptatem a architecto nihil ullam. Non dolores optio ea dolorem accusantium a delectus molestias quam nulla fugit voluptas iste ipsum! Molestias id quaerat praesentium quo a illum optio sed at ut ad corporis asperiores eos dolorum commodi laboriosam adipisci provident voluptas nemo soluta voluptas molestias similique ex. Praesentium sequi natus molestiae adipisci perspiciatis voluptatibus et vero nisi!"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam voluptatem a architecto nihil ullam. Non dolores optio ea dolorem accusantium a delectus molestias quam nulla fugit voluptas iste ipsum! Molestias id quaerat praesentium quo a illum optio sed at ut ad corporis asperiores eos dolorum commodi laboriosam adipisci provident voluptas nemo soluta voluptas molestias similique ex. Praesentium sequi natus molestiae adipisci perspiciatis voluptatibus et vero nisi!"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam voluptatem a architecto nihil ullam. Non dolores optio ea dolorem accusantium a delectus molestias quam nulla fugit voluptas iste ipsum! Molestias id quaerat praesentium quo a illum optio sed at ut ad corporis asperiores eos dolorum commodi laboriosam adipisci provident voluptas nemo soluta voluptas molestias similique ex. Praesentium sequi natus molestiae adipisci perspiciatis voluptatibus et vero nisi!"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam voluptatem a architecto nihil ullam. Non dolores optio ea dolorem accusantium a delectus molestias quam nulla fugit voluptas iste ipsum! Molestias id quaerat praesentium quo a illum optio sed at ut ad corporis asperiores eos dolorum commodi laboriosam adipisci provident voluptas nemo soluta voluptas molestias similique ex. Praesentium sequi natus molestiae adipisci perspiciatis voluptatibus et vero nisi!"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam voluptatem a architecto nihil ullam. Non dolores optio ea dolorem accusantium a delectus molestias quam nulla fugit voluptas iste ipsum! Molestias id quaerat praesentium quo a illum optio sed at ut ad corporis asperiores eos dolorum commodi laboriosam adipisci provident voluptas nemo soluta voluptas molestias similique ex. Praesentium sequi natus molestiae adipisci perspiciatis voluptatibus et vero nisi!"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam voluptatem a architecto nihil ullam. Non dolores optio ea dolorem accusantium a delectus molestias quam nulla fugit voluptas iste ipsum! Molestias id quaerat praesentium quo a illum optio sed at ut ad corporis asperiores eos dolorum commodi laboriosam adipisci provident voluptas nemo soluta voluptas molestias similique ex. Praesentium sequi natus molestiae adipisci perspiciatis voluptatibus et vero nisi!")))}}]),a}(l.a.Component);a(98);var G=function(){return s.a.render(l.a.createElement(_,null),document.getElementById("root"))},$=a(32);var z=function(){return l.a.createElement("body",null,l.a.createElement("center",null,l.a.createElement("div",{className:"background"},l.a.createElement(u,null),l.a.createElement(E.a,null,l.a.createElement($.c,null,l.a.createElement($.a,{exact:!0,path:"/",component:k}),l.a.createElement($.a,{path:"/new-crawl*",component:T}),l.a.createElement($.a,{path:"/start-crawling",component:G}),l.a.createElement($.a,{path:"/my-account",component:I}),l.a.createElement($.a,{path:"/my-crawls",component:R}))),l.a.createElement(m,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[85,1,2]]]);
//# sourceMappingURL=main.e61bb197.chunk.js.map