!function(){"use strict";var t,e,n,o,a,r,c,s,i={1370:function(t){t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),e.hash&&(t+=e.hash),e.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(t)?'"'.concat(t,'"'):t):t}},6250:function(t,e,n){t.exports=n.p+"admin/img/sprite.svg"}},u={};function l(t){var e=u[t];if(void 0!==e)return e.exports;var n=u[t]={exports:{}};return i[t](n,n.exports,l),n.exports}l.m=i,l.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return l.d(e,{a:e}),e},l.d=function(t,e){for(var n in e)l.o(e,n)&&!l.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t;l.g.importScripts&&(t=l.g.location+"");var e=l.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),l.p=t+"../"}(),l.b=document.baseURI||self.location.href,e=l(1370),n=l.n(e),o=new URL(l(6250),l.b),n()(o,{hash:"#sorting"}),n()(o,{hash:"#plus"}),n()(o,{hash:"#close_modal"}),a=function(t){var e=t.url,n=t.method,o=t.body;return fetch(e,{method:n,headers:{"Content-Type":"application/json"},body:o})},r=function(t){return a({url:t,method:"GET"}).then((function(t){if(200===t.status)return t.json();throw new Error(t.statusText)}))},c=function(t){var e=new Map,n=document.getElementById("typeItem"),o=function(t){var e=document.getElementById("tbody");e.textContent="",t.forEach((function(t){var n=document.createElement("tr");n.className="table__row",n.setAttribute("data-id",t.id),n.innerHTML='\n                <td class="table__id table__cell">'.concat(t.id,'</td>\n                <td class="table-type table__cell">').concat(t.type,'</td>\n                <td class="table-name table__cell">').concat(t.name,'</td>\n                <td class="table-units table__cell">').concat(t.units,'</td>\n                <td class="table-cost table__cell">').concat(t.cost,' руб</td>\n                <td>\n                    <div class="table__actions table__cell">\n                        <button class="button action-change"><span class="svg_ui">\n                            <svg class="action-icon_change">\n                                <use xlink:href="./img/sprite.svg#change"></use>\n                            </svg></span><span>Изменить</span>\n                        </button>\n                        <button class="button action-remove"><span class="svg_ui">\n                            <svg class="action-icon_remove">\n                                <use xlink:href="./img/sprite.svg#remove"></use>\n                            </svg></span><span>Удалить</span>\n                        </button>\n                    </div>\n                </td>\n            '),e.append(n)}))},a=function(t){var a;t.forEach((function(t){e.has(t.type)?e.get(t.type).push(t):e.set(t.type,[t])})),a=e.keys(),Array.from(a).forEach((function(t){var e=document.createElement("option");e.value=t,e.textContent=t,n.append(e)})),o(Array.from(e.values()).flat())};n.addEventListener("change",(function(t){var n=t.target;e.get(n.value)&&o(e.get(n.value))})),r(t+"/api/items").then((function(t){return a(t)})).catch((function(t){console.warn(t)}))},s=window.location.origin,new RegExp("demo").test(document.cookie)||(t=s+"/admin",document.location.replace(t)),c("https://obscure-scrubland-21489.herokuapp.com")}();