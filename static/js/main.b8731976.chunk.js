(this["webpackJsonpportfolio-update"]=this["webpackJsonpportfolio-update"]||[]).push([[0],{28:function(e,t,a){e.exports=a(65)},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(21),s=a.n(i),r=(a(33),a(5)),c=a(1),o=(a(34),a(35),a(36),function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"boxes"},l.a.createElement("div",{className:"projectBox"},l.a.createElement("a",{href:e.link,target:"_blank"},l.a.createElement("img",{src:e.image,alt:e.alt}))),l.a.createElement("div",{className:"caption"},e.caption)))}),m=(a(37),function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("p",null,"If you need a new website, branding package, or another digital project, contact me",l.a.createElement(r.b,{to:"./ContactForm"}," HERE"),"!"))}),u=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"projects"},l.a.createElement(o,{image:"/images/flex-together.png",alt:"Flex Together Image",caption:"FlexTogether is an app prototype that pairs seniors with workout partners based on schedule availability of both parties.",link:"https://flextogether.netlify.com/"}),l.a.createElement(o,{image:"/images/live-safe.png",alt:"Live SafeImage",caption:"LiveSafe warns of potential natural disasters that affect safety and insurance rates. This was created as a collaboration with Data Scientists",link:"https://livesafe.netlify.app/"}),l.a.createElement(o,{image:"/images/lunchr.png",alt:"Lunchr Image",caption:"Lunchr is an app prototype that can be used to donors with schools requesting monetary funding for student lunches.",link:"https://luncher-team.github.io/luncher-app-frank-UI/"}),l.a.createElement(o,{image:"/images/simpson-says.png",alt:"Simpson Says Image",caption:"Simpson says is a fun app that accesses a database filled with thousands of Simpsons quotes.",link:"https://simpsonssays.netlify.app/login"})),l.a.createElement(m,null))},E=(a(43),a(44),function(e){return l.a.createElement("div",{className:"skillSection"},l.a.createElement("div",{className:"title"},e.title),l.a.createElement("div",{className:"list"},l.a.createElement("ul",null,e.list)))}),d=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"skillsTop"},l.a.createElement("div",{className:"skillsTopRow"},l.a.createElement(E,{title:"Graphic Design Software",list:l.a.createElement("ul",null,l.a.createElement("li",null,"Adobe Photoshop CC"),l.a.createElement("li",null,"Adobe Illustrator CC"),l.a.createElement("li",null,"Adobe InDesign"),l.a.createElement("li",null,"Figma"),l.a.createElement("li",null,"Sketch"))}),l.a.createElement(E,{title:"Coding Editors",list:l.a.createElement("ul",null,l.a.createElement("li",null,"Visual Studio Code"),l.a.createElement("li",null,"Atom"),l.a.createElement("li",null,"Notepad++"),l.a.createElement("li",null,"Adobe Dreamweaver CC"))})),l.a.createElement("div",{className:"skillsBottomRow"},l.a.createElement(E,{title:"Website Builders",list:l.a.createElement("ul",null,l.a.createElement("li",null,"Wordpress"),l.a.createElement("li",null,"Squarespace"),l.a.createElement("li",null,"Wix"))}),l.a.createElement(E,{title:"Coding Languages",list:l.a.createElement("ul",null,l.a.createElement("li",null,"HTML/HTML5"),l.a.createElement("li",null,"CSS/CSS3"),l.a.createElement("li",null,"Javascript"),l.a.createElement("li",null,"ReactJS"),l.a.createElement("li",null,"Python"))}))),l.a.createElement("hr",null),l.a.createElement("div",{className:"skillsBottom"},l.a.createElement(E,{title:"Areas of Exterpise",list:l.a.createElement("ul",{className:"bottomList"},l.a.createElement("li",null,"Website Design"),l.a.createElement("li",null,"UI/UX Design"),l.a.createElement("li",null,"Responsive Design"),l.a.createElement("li",null,"Website Maitenance & Updates"),l.a.createElement("li",null,"Brochure, Flyer & Pamphlet Design"),l.a.createElement("li",null,"Corporate Identity (logos, business cards & letterhead)"),l.a.createElement("li",null,"Image Manipulation"))})),l.a.createElement(m,null))},p=a(23),h=a(24),g=a(26),f=a(27),v=(a(45),function(){return l.a.createElement("div",{className:"allAboutInfo"},l.a.createElement("div",{className:"aboutSection"},l.a.createElement("img",{src:"/images/profilePic.jpeg",alt:"profile pic"}),l.a.createElement("p",null,"I\u2019m a full-stack developer who is constantly creating and learning. I write readable and performance-driven code. Check me out on"," ",l.a.createElement("a",{href:"http://www.github.com/KimDuclos",target:"blank_"},"GitHub"))))}),b=(a(46),a(25)),k=a.n(b),N=function(e){Object(f.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).state={name:"",email:"",message:""},n}return Object(h.a)(a,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),k()({method:"POST",url:"https://p6pns5z7xb.execute-api.us-west-2.amazonaws.com/prod/ContactFormLambda",data:{email:"kimduclos@gmail.com",subject:"Contact From ".concat(this.state.name," ").concat(this.state.email),message:this.state.message}}).then((function(e){200===e.status?(alert("Message Sent."),t.resetForm()):"fail"===e.data.status&&alert("Message failed to send.")}))}},{key:"resetForm",value:function(){this.setState({name:" ",email:" ",message:" "})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"allContactInfo"},l.a.createElement(v,null),l.a.createElement("div",{className:"bottomSection",id:"contact"},l.a.createElement("div",{className:"contactForm"},l.a.createElement("h1",null,"Contact me:"),l.a.createElement("form",{id:"contact-form",onSubmit:this.handleSubmit.bind(this),method:"POST"},l.a.createElement("div",{className:"form-group name"},l.a.createElement("input",{type:"text",required:!0,className:"form-control",id:"name",value:this.state.name,onChange:this.onNameChange.bind(this),placeholder:"Name"})),l.a.createElement("div",{className:"form-group email"},l.a.createElement("input",{type:"email",required:!0,className:"form-control",id:"email","aria-describedby":"emailHelp",value:this.state.email,onChange:this.onEmailChange.bind(this),placeholder:"Email"})),l.a.createElement("div",{className:"form-group message"},l.a.createElement("textarea",{className:"form-control",rows:"5",id:"message",required:!0,value:this.state.message,onChange:this.onMessageChange.bind(this),placeholder:"Message"})),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"))))),l.a.createElement(m,null))}},{key:"onNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onMessageChange",value:function(e){this.setState({message:e.target.value})}}]),a}(l.a.Component),S=function(){return l.a.createElement(r.a,{basename:"/"},l.a.createElement("div",{className:"headerBlock"},l.a.createElement("a",{href:"https://kimduclos.github.io"},l.a.createElement("div",{className:"titleBlock"},l.a.createElement("div",{className:"name"},"Kim Duclos"),l.a.createElement("div",{className:"subtitle"},"Web Development & Design"))),l.a.createElement("div",{className:"navBlock"},l.a.createElement("nav",{className:"navbar"},l.a.createElement(r.b,{to:"/"},"Projects"),l.a.createElement(r.b,{to:"/Skills"},"Skills"),l.a.createElement(r.b,{to:"/ContactForm"},"Contact")))),l.a.createElement("div",{className:"projectSection"},l.a.createElement(c.c,null,l.a.createElement(c.a,{exact:!0,path:"/",component:u}),l.a.createElement(c.a,{path:"/Skills",component:d}),l.a.createElement(c.a,{path:"/ContactForm",component:N}))))};a(64);var C=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(S,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.b8731976.chunk.js.map