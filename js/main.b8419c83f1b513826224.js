!function(){"use strict";var t={623:function(t,e,n){t.exports=n.p+"img/projects/full/3d-glo-320w.png"},13:function(t,e,n){t.exports=n.p+"img/projects/full/3d-glo-470w.png"},793:function(t,e,n){t.exports=n.p+"img/projects/full/3d-glo-700w.png"},599:function(t,e,n){t.exports=n.p+"img/projects/full/be-320w.png"},555:function(t,e,n){t.exports=n.p+"img/projects/full/be-470w.png"},622:function(t,e,n){t.exports=n.p+"img/projects/full/be-700w.png"},53:function(t,e,n){t.exports=n.p+"img/projects/full/irvas-320w.png"},295:function(t,e,n){t.exports=n.p+"img/projects/full/irvas-470w.png"},692:function(t,e,n){t.exports=n.p+"img/projects/full/irvas-700w.png"},205:function(t,e,n){t.exports=n.p+"img/projects/full/pictures-art-320w.png"},651:function(t,e,n){t.exports=n.p+"img/projects/full/pictures-art-470w.png"},22:function(t,e,n){t.exports=n.p+"img/projects/full/pictures-art-700w.png"},441:function(t,e,n){t.exports=n.p+"img/projects/full/relax-live-320w.png"},921:function(t,e,n){t.exports=n.p+"img/projects/full/relax-live-470w.png"},52:function(t,e,n){t.exports=n.p+"img/projects/full/relax-live-700w.png"},324:function(t,e,n){t.exports=n.p+"img/projects/preview/3d-glo.jpg"},6:function(t,e,n){t.exports=n.p+"img/projects/preview/be.jpg"},170:function(t,e,n){t.exports=n.p+"img/projects/preview/irvas.jpg"},580:function(t,e,n){t.exports=n.p+"img/projects/preview/pictures-art.jpg"},851:function(t,e,n){t.exports=n.p+"img/projects/preview/relax-live.jpg"}},e={};function n(o){var c=e[o];if(void 0!==c)return c.exports;var r=e[o]={exports:{}};return t[o](r,r.exports,n),r.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),function(){var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var o=e.getElementsByTagName("script");o.length&&(t=o[o.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t+"../"}(),function(){n(170),n(6),n(324),n(851),n(580),n(599),n(555),n(622),n(53),n(295),n(692),n(441),n(921),n(52),n(623),n(13),n(793),n(205),n(651),n(22);var t=function(t){if(t){document.querySelector(".main__slider").style.transform="translateX(-".concat({about:0,projects:100,skills:200,contact:300}[t],"%)")}},e=function(t,e){var n=t.querySelector(".popup__content");e?(t.classList.add("show"),setTimeout((function(){return n.classList.add("show")}),50)):(n.classList.remove("show"),setTimeout((function(){return t.classList.remove("show")}),400))},o=function(t,n){document.querySelector(".popup-notification__message").textContent=t,document.querySelector(".popup-notification__img").innerHTML='\n    <svg>\n      <use xlink:href="#'.concat(n,'"></use>\n    </svg>'),e(document.querySelector(".popup-notification"),!0)},c=function(t){if(!document.getElementById("honeypot").value){var n=document.querySelector(".popup-notification"),c=localStorage.getItem("lang")||"en",r={en:{sending:"Message sending...",success:"Message has been sent!",error:"Error! Message was not sent!"},ru:{sending:"Отправка сообщения...",success:"Сообщение отправлено!",error:"Ошибка! Сообщение не отправлено!"}};o(r[c].sending,"spinner");var i=function(){setTimeout((function(){e(n,!1)}),5e3)};fetch("https://script.google.com/macros/s/AKfycbwexEvV9AudKto6CzD_354ZgX6_C6hgZpLefcH3AtXdPhf2z_oWTRO76L2ZMTRWmsT8/exec",{method:"POST",body:new FormData(t)}).then((function(t){if(200!==t.status)throw Error;o(r[c].success,"check-yes"),i()})).catch((function(t){o(r[c].error,"check-no"),i()}))}},r=function(t,e,n){return fetch(t,{method:e,body:n,headers:{"Content-Type":"application/json"}}).then((function(t){if(200===t.status)return t.json();throw new Error(t.statusText)}))},i=function(){return localStorage.getItem("lang")||"en"},s=function(t){var n=document.querySelector(".popup-project__field");r("../assets/projects-list.json","GET").then((function(o){return c=o[t],r=document.createElement("div"),s=function(t,e,n){return'\n        <div class="col-5 col-sm-4 col-md-3 col-lg-2">\n          <a href="'.concat(t,'" target="_blank">\n            <div class="popup-project__button button">\n              <svg class="popup-project__icon">\n                <use xlink:href="#').concat(e,'"></use>\n              </svg>\n              ').concat(n,"\n            </div>\n          </a>\n        </div>")},n.textContent="",r.classList.add("popup-project__body"),r.innerHTML='\n        <div class="popup-project__header">\n          <h4 class="popup-project__title">'.concat(c.title,'</h4>\n          <div class="popup-project__description">\n            ').concat(c["full-description"][i()],'\n          </div>\n        </div>\n        <div class="popup-project__nav row">\n          ').concat(c.link?s(c.link,"link","Demo"):"","\n          ").concat(c.github?s(c.github,"github","GitHub"):"",'\n        </div>\n        <div class="popup-project__img">\n          <img srcset="../img/projects/full/').concat(c.img,"-320w.png 400w,\n               ../img/projects/full/").concat(c.img,"-470w.png 470w,\n               ../img/projects/full/").concat(c.img,'-700w.png 700w"\n               sizes="(max-width: 400px) 400px, (max-width: 767px) 470px, 700px"\n               src="../img/projects/full/').concat(c.img,'-700w.png"\n               alt="').concat(c.title,'" />\n        </div>'),n.appendChild(r),void e(document.querySelector(".popup-project"),!0);var c,r,s})).catch((function(t){o({en:"Data loading error",ru:"Ошибка загрузки данных"}[i()],"check-no")}))},p=function(){var n=document.querySelector(".menu"),o=document.querySelector(".main"),r=document.getElementById("contact-form"),i=document.querySelectorAll(".popup"),p=document.querySelector(".projects__list");n.addEventListener("click",(function(e){var o,c=e.target;c.classList.contains("menu__burger-btn")&&(n.classList.contains("active")?n.classList.remove("active"):(n.classList.add("active"),setTimeout((function(){document.body.addEventListener("click",(function(e){var o=e.target;o.classList.contains("menu-mobile__link")&&t(o.getAttribute("href").substring(1)),n.classList.remove("active")}),{once:!0})}),0))),c.parentNode.classList.contains("menu__nav-link")&&(t(c.getAttribute("href").substring(1)),n.classList.remove("active")),c.closest(".menu__lang")&&(o=c.closest(".menu__lang").getAttribute("data-lang"),localStorage.setItem("lang",o))})),o.addEventListener("click",(function(e){e.target.classList.contains("main-nav__link")&&t(e.target.getAttribute("href").substring(1))})),r.addEventListener("submit",(function(t){t.preventDefault(),c(r),r.reset()})),i.forEach((function(t){t.addEventListener("click",(function(t){var n=t.target;!n.classList.contains("popup__close")&&n.closest(".popup__wrapper")||e(n.closest(".popup"),!1)}))})),p.addEventListener("click",(function(t){var e=t.target.closest(".projects__item");e&&s(e.getAttribute("data-key"))}))},a=function(){var t=document.querySelector(".projects__list"),e=i();t.textContent="";r("../assets/projects-list.json","GET").then((function(n){return function(n){var o,c,r={en:"More info",ru:"Подробнее"};for(var i in n)o=n[i],c=void 0,(c=document.createElement("div")).className="projects__item project-card",c.dataset.key=o.key,c.innerHTML='\n        <div class="project-card__inner">\n          <div class="project-card__content">\n            <h3 class="project-card__title"><b>'.concat(o.title,"</b>\n              <br />").concat(o.description[e],'</h3>\n            <div class="project-card__more-info">').concat(r[e],'</div>\n            <img\n              class="project-card__img"\n              src="../img/projects/preview/').concat(o.img,'.jpg"\n              alt="').concat(o.title,'"\n            />\n          </div>\n        </div>'),t.appendChild(c)}(n)})).catch((function(t){o({en:"Data loading error",ru:"Ошибка загрузки данных"}[e],"check-no")}))};document.addEventListener("DOMContentLoaded",(function(){if(localStorage.getItem("lang")){var t=i();"/"===window.location.pathname&&"ru"===t&&window.location.replace("/ru"),"/ru"===window.location.pathname&&"en"===t&&window.location.replace("/")}p(),a()}))}()}();