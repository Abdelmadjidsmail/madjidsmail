(function(e){function t(t){for(var n,r,o=t[0],i=t[1],l=t[2],u=0,d=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);p&&p(t);while(d.length)d.shift()();return c.push.apply(c,l||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],n=!0,r=1;r<a.length;r++){var i=a[r];0!==s[i]&&(n=!1)}n&&(c.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},s={app:0},c=[];function r(e){return o.p+"js/"+({about:"about"}[e]||e)+"."+{about:"2f1b3d17"}[e]+".js"}function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(e){var t=[],a=s[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=s[e]=[t,n]}));t.push(a[2]=n);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.src=r(e);var l=new Error;c=function(t){i.onerror=i.onload=null,clearTimeout(u);var a=s[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+c+")",l.name="ChunkLoadError",l.type=n,l.request=c,a[1](l)}s[e]=void 0}};var u=setTimeout((function(){c({type:"timeout",target:i})}),12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/Portfolio/",o.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var p=l;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},4705:function(e,t,a){e.exports=a.p+"img/moadly.33715a7d.jpg"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23"),s={class:"flex-center upercase",id:""},c=Object(n["g"])("a",{class:"logo",href:"/"},[Object(n["g"])("h5",null," @madjsmail ")],-1),r={class:"nav flex-center"},o=Object(n["f"])("Home"),i=Object(n["f"])(" portfolio "),l=Object(n["f"])("About"),u=Object(n["f"])("Contact"),p=Object(n["g"])("div",null,null,-1);function d(e,t,a,d,b,f){var h=Object(n["u"])("router-link"),m=Object(n["u"])("router-view");return Object(n["p"])(),Object(n["d"])(n["a"],null,[Object(n["g"])("nav",s,[c,Object(n["g"])("ul",r,[Object(n["g"])("li",null,[Object(n["g"])(h,{class:["links",b.created?"nav-links":""],to:"/"},{default:Object(n["z"])((function(){return[o]})),_:1},8,["class"])]),Object(n["g"])("li",null,[Object(n["g"])(h,{class:["links",b.created?"nav-links":""],to:"/Portfolio"},{default:Object(n["z"])((function(){return[i]})),_:1},8,["class"])]),Object(n["g"])("li",null,[Object(n["g"])(h,{class:["links",b.created?"nav-links":""],to:"/about"},{default:Object(n["z"])((function(){return[l]})),_:1},8,["class"])]),Object(n["g"])("li",null,[Object(n["g"])(h,{class:["links",b.created?"nav-links":""],to:"/Contact"},{default:Object(n["z"])((function(){return[u]})),_:1},8,["class"])])])]),p,Object(n["g"])(m)],64)}var b={data:function(){return{created:null}},created:function(){this.created=!0}};b.render=d;var f=b,h=(a("d3b7"),a("6c02")),m={class:"home "},j={class:"container"},g={class:"home-container"},v=Object(n["g"])("h1",{id:"ful-name",class:"upercase"}," smail abd el madjid ",-1),O=Object(n["g"])("div",{class:"line-div"},[Object(n["g"])("h5",null," computer science student "),Object(n["g"])("h5",null," web dev ")],-1),k=Object(n["f"])("portfolio");function y(e,t,a,s,c,r){var o=Object(n["u"])("router-link");return Object(n["p"])(),Object(n["d"])("div",m,[Object(n["g"])("div",j,[Object(n["g"])("div",g,[v,O,Object(n["g"])(o,{class:"btn",to:"/Portfolio"},{default:Object(n["z"])((function(){return[k]})),_:1})])])])}var w={name:"Home",components:{}};w.render=y;var _=w,P={class:"contact "},M=Object(n["e"])('<div class="container  contact-container"><div class="line-div email"><p>Get in touch to discuss how we can work together.</p><h2 class="contact--h2"> madjsmail@gmail.com </h2><h4 class="contact--h2"> +213668484926 </h4></div><div class="social-media"><h5 class="upercase">social media</h5><div class="line-div"><ul><li><a class="links" href="https://github.com/Abdelmadjidsmail"> github </a></li><li><a class="links" href="https://www.facebook.com/smailmadjid1998"> facebook </a></li><li><a class="links" href="https://twitter.com/MadjSmail"> twitter </a></li><li><a class="links" href="https://www.instagram.com/madjismail/"> instagram </a></li></ul></div></div></div>',1);function L(e,t,a,s,c,r){return Object(n["p"])(),Object(n["d"])("div",P,[M])}var T={components:{}};T.render=L;var x=T,A={class:"Portfolio"},H={class:"container container-Portfolio"},S=Object(n["g"])("h1",{class:"upercase"}," my work ",-1),C={class:"card-content"},z={class:"upercase"},E={class:"card-img"};function D(e,t,a,s,c,r){return Object(n["p"])(),Object(n["d"])("div",A,[Object(n["g"])("div",H,[S,(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["t"])(c.works,(function(e,t){return Object(n["p"])(),Object(n["d"])("div",{class:"card",key:t},[Object(n["g"])("div",C,[Object(n["g"])("h3",z,Object(n["w"])(e.title),1),Object(n["g"])("p",{innerHTML:e.body},null,8,["innerHTML"])]),Object(n["g"])("div",E,[Object(n["g"])("img",{src:e.photo,alt:""},null,8,["src"])])])})),128))])])}var G={data:function(){return{active:!1,works:[{title:"moadaly",body:'is a web application that allow you to calculate your pass mark. The app is for first and second year computer science student " LMD "\nتطبيق ويب لحساب المعدل الفصلي و السنوي للسنة الاولى و الثانية اعلام الى نطام\n     <br/>\n            <a href="https://abdelmadjidsmail.github.io/moadaly/ " target="_" class="links about-link "> demo  </a>\n            <a href="https://github.com/Abdelmadjidsmail/moadaly" target="_"  class="links about-link"> code source </a>\n            <br/>\n            <b>Languages :</b> <span class="upercase" > HTML</span> \n             <span class="upercase" > css</span> \n             <span class="upercase" > javascript </span> \n             <span class="upercase" > scss</span> \n            ',photo:a("4705")},{title:"tasnif",body:'An app that allows the user to search for scientific journals with their classifications.\n     <br/>\n            <a href="http://tahadz.com/tasnif/" target="_" class="links about-link "> demo  </a>\n            <a href="https://github.com/40uf411/Tasnif" target="_"  class="links about-link"> code source </a>\n            <br/>\n            <b>Languages :</b> <span class="upercase" > HTML</span> \n             <span class="upercase" > css</span> \n             <span class="upercase" > javascript </span> \n            ',photo:a("b49b")},{title:"GED SETRAM",body:'Document Management System for the company setram. <br/>\n            <b>Languages :</b> <span class="upercase" > HTML</span> \n             <span class="upercase" > css</span> \n             <span class="upercase" > javascript </span> \n             <span class="upercase" > php /laravel </span> \n          ',photo:a("62b3")},{title:"Awalna",body:'dictionary for the Algerian dialect built with vuejs and firebase. <br/>\n            <a href="https://awalna-76bf8.firebaseapp.com/" target="_" class="links about-link "> demo  </a>\n            <a href="https://github.com/Abdelmadjidsmail/darja" target="_"  class="links about-link"> code source </a><br/>\n            <b>Languages :</b> <span class="upercase" > HTML</span> \n             <span class="upercase" > css</span> \n             <span class="upercase" > javascript /vuejs </span> \n             <span class="upercase" > firebase </span> \n\n          ',photo:a("9164")}]}},created:function(){this.active=!0}};G.render=D;var J=G,q=[{path:"/",name:"Home",component:_},{path:"/Contact",name:"Contact",component:x},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/Portfolio",name:"Portfolio",component:J}],R=Object(h["a"])({history:Object(h["b"])(""),routes:q,linkActiveClass:"active"}),B=R;a("77ed"),a("7046");Object(n["c"])(f).use(B).mount("#app")},"62b3":function(e,t,a){e.exports=a.p+"img/setram.6dd583b6.png"},7046:function(e,t,a){},9164:function(e,t,a){e.exports=a.p+"img/awalna.563ed6df.jpg"},b49b:function(e,t,a){e.exports=a.p+"img/tasnif.0a26c070.jpg"}});
//# sourceMappingURL=app.e4c42480.js.map