(this["webpackJsonpbmi-calc"]=this["webpackJsonpbmi-calc"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(3),c=a.n(s);a(14),a(15),a(16);var l=function(){return r.a.createElement("nav",{className:"navbar"},r.a.createElement("p",null,"BMI Calculator"))},i=(a(17),a(4)),o=a(5),m=a(6),u=a(1),h=a(8),d=a(7),f=(a(18),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).countBmi=function(e){e.preventDefault();var t=Math.round(n.state.kilos/Math.pow(n.state.meters,2)*10/10);n.setState({score:t})},n.resetForm=function(){n.setState({kilos:"",meters:"",score:""})},n.state={kilos:"",meters:"",score:""},n.handleChange=n.handleChange.bind(Object(u.a)(n)),n}return Object(m.a)(a,[{key:"handleChange",value:function(e,t){this.setState(Object(i.a)({},t,e.target.value))}},{key:"render",value:function(){var e=this;return r.a.createElement("section",{className:"app-form"},r.a.createElement("div",{className:"box"},r.a.createElement("form",{className:"form",id:"form"},r.a.createElement("label",{htmlFor:"kilos",className:"label-box"},"Your weight in kg"),r.a.createElement("input",{type:"number",step:"0.01",id:"kilos",required:!0,onChange:function(t){return e.handleChange(t,"kilos")}}),r.a.createElement("label",{htmlFor:"kilos",className:"label-box"},"Your height in meters"),r.a.createElement("input",{type:"number",step:"0.01",id:"meters",required:!0,onChange:function(t){return e.handleChange(t,"meters")}}),r.a.createElement("div",{className:"btn-row"},r.a.createElement("input",{type:"submit",className:"submit-btn",onClick:this.countBmi,value:"Count"}),r.a.createElement("input",{type:"reset",className:"reset-btn",value:"Reset",onClick:this.resetForm})),r.a.createElement("input",{type:"text",value:this.state.score,readOnly:!0}))))}}]),a}(n.Component));var p=function(e){return r.a.createElement("p",{className:e.data.class},e.data.title)},E=[{id:1,title:"Underweight = less than 18.5",description:""},{id:2,title:"Normal weight = 18.5 - 24.9",description:""},{id:3,title:"Overweight = 25 - 29.9",description:""},{id:4,title:"Obesity = 30 - 34.9",description:""},{id:5,title:"Severe obesity = 35 and more",description:""}];a(19);var b=function(e){return r.a.createElement("h3",{className:e.class},e.score)};var v=function(e){var t=E.map((function(e){return r.a.createElement(p,{class:"range",key:e.id,data:e})})),a=e.score;return r.a.createElement("section",{className:"text-box"},r.a.createElement("article",{className:"main-desc"},r.a.createElement("h2",{className:"title-desc"},"BMI - Body Mass Index"),"BMI - Body Mass Index is a preson's weight in kilograms divided by the square of height in meters. A higher BMI can be used to screen for weight categories. A high BMI can be indicator of high body fatness."),r.a.createElement("article",{className:"result-desc"},r.a.createElement("h2",{className:"title-desc"},"Result"),r.a.createElement(b,{class:"result",score:a}),t))};var g=function(){return r.a.createElement("main",{className:"main"},r.a.createElement(f,null),r.a.createElement(v,null))};a(20);var N=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",{className:"footer-para"},"Created with \u2665 by"," ",r.a.createElement("a",{className:"author",href:"https://twitter.com/makneta"},"Magdalena Ros\u0142aniec")),r.a.createElement("p",{className:"footer-para"},"\xa9 ",(new Date).getFullYear()))};var k=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(l,null),r.a.createElement(g,null),r.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.140438cd.chunk.js.map