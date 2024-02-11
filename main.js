(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{x:()=>H,s:()=>r});var t={baseUrl:"http://localhost:3000",headers:{authorization:"c920339b-2c17-46f2-a77c-c209db7e0a7d","Content-Type":"application/json"}};function n(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}function o(e){console.log("ой что то не так с отображением карточек "+e)}var r,c,a=function(e){return fetch("".concat(t.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:t.headers,body:JSON.stringify({_id:e})}).then(n)},u=function(e){return fetch("".concat(t.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:t.headers}).then(n)},i=function(e){return fetch("".concat(t.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:t.headers}).then(n)},l=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(n.inactiveButtonClass),t.removeAttribute("disabled")):(t.classList.add(n.inactiveButtonClass),t.setAttribute("disabled","disabled"))},s=(document.querySelector(".popup__toggle-edit-button "),document.querySelector(".profile__editor")),d=document.querySelector(".popup__admin-new-place"),p=document.querySelector(".popup__admin"),m=document.querySelector(".popup__item_value_name"),_=document.querySelector(".popup__item_value_hobby"),f=document.querySelector(".profile__button"),y=document.querySelector(".elements__list"),v=document.querySelector(".card-template").content,h=(document.querySelector(".popup__toggle-big-image"),document.querySelector(".popup__toggle-add-image"),document.querySelector(".profile__name")),b=document.querySelector(".profile__status"),S=document.querySelector(".popup-profile"),g=document.querySelector(".popup_opened-big-image"),q=document.querySelector(".popup_opened-image"),L=document.querySelectorAll(".popup"),E=document.querySelector(".popup__item_value_link"),C=document.querySelector(".popup__item_value_new-place"),k=(document.querySelectorAll(".popup__toggle"),document.querySelector(".popup__button-create")),A=document.querySelector(".popup__image"),x=document.querySelector(".popup__image-comment"),O=(document.querySelector(".elements__delite-button"),document.querySelector(".profile__avatar-button")),w=document.querySelector(".popup-profile-change-avatar"),U=document.querySelector(".popup__admin-change-avatar"),j=document.querySelector(".profile__avatar"),T=document.querySelector(".popup__item_value_link-avatar"),P=document.querySelectorAll(".popup__button");function B(e){e.classList.add("popup_opened"),document.addEventListener("keydown",N)}function D(e){e.classList.remove("popup_opened"),document.removeEventListener("keydown",N)}function N(e){"Escape"===e.key&&D(document.querySelector(".popup_opened"))}function J(e){P.forEach((function(t){t.textContent=e?"Сохранение...":t===k?"Создать":"Сохранить"}))}function M(e){console.log(e);var t=v.querySelector(".elements__card").cloneNode(!0),n=t.querySelector(".elements__image"),c=t.querySelector(".elements__title"),l=t.querySelector(".elements__delite-button"),s=t.querySelector(".elements__button"),d=t.querySelector(".elements__like-counter");function p(e){var t=H(e);d.textContent=t.count,t.isOwnerLike?s.classList.add("elements__button_active"):s.classList.remove("elements__button_active")}return e.owner._id!==r?(console.log(r),l.remove()):l.addEventListener("click",(function(){a(e._id).then((function(){t.remove()})).catch(o)})),n.src=e.link,c.textContent=e.name,n.alt=e.name,p(e),s.addEventListener("click",(function(){s.classList.contains("elements__button_active")?i(e._id).then((function(e){p(e)})).catch(o):u(e._id).then((function(e){p(e)})).catch(o)})),n.addEventListener("click",(function(){A.src=e.link,x.textContent=e.name,A.alt=e.name,B(g)})),t}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function H(e){return{count:e.likes.length,isOwnerLike:e.likes.some((function(e){return e._id===r}))}}L.forEach((function(e){e.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&D(e),t.target.classList.contains("popup__toggle")&&D(e)}))})),Promise.all([fetch("".concat(t.baseUrl,"/cards"),{headers:t.headers}).then(n),fetch("".concat(t.baseUrl,"/users/me"),{headers:t.headers}).then(n)]).then((function(e){var t,n,o=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,c,a,u=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(o=c.call(n)).done)&&(u.push(o.value),u.length!==t);i=!0);}catch(e){l=!0,r=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw r}}return u}}(t,n)||function(e,t){if(e){if("string"==typeof e)return I(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?I(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=o[0],a=o[1];h.textContent=a.name,b.textContent=a.about,j.src=a.avatar,r=a._id,console.log(r),c.forEach((function(e){y.append(M(e))}))})).catch(o),d.addEventListener("submit",(function(e){var r,c;J(!0),e.preventDefault(),(r=C.value,c=E.value,fetch("".concat(t.baseUrl,"/cards"),{method:"POST",headers:t.headers,body:JSON.stringify({name:r,link:c})}).then(n)).then((function(t){!function(e,t){t.prepend(e)}(M(t),y),D(q),e.target.reset()})).catch(o).finally((function(){J(!1)}))})),s.addEventListener("click",(function(){m.value=h.textContent,_.value=b.textContent,B(S)})),p.addEventListener("submit",(function(e){var r,c;J(!0),e.preventDefault(),(r=m.value,c=_.value,fetch("".concat(t.baseUrl,"/users/me"),{method:"PATCH",headers:t.headers,body:JSON.stringify({name:r,about:c})}).then(n)).then((function(){h.textContent=m.value,b.textContent=_.value,D(S)})).catch(o).finally((function(){J(!1)}))})),f.addEventListener("click",(function(){B(q)})),O.addEventListener("click",(function(){B(w)})),U.addEventListener("submit",(function(e){var r;J(!0),e.preventDefault(),(r=T.value,fetch("".concat(t.baseUrl,"/users/me/avatar "),{method:"PATCH",headers:t.headers,body:JSON.stringify({avatar:r})}).then(n)).then((function(){j.src=T.value,D(w),e.target.reset()})).catch(o).finally((function(){J(!1)}))})),c={formSelector:".popup__admin",inputSelector:".popup__item",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__item_error",errorClass:"popup__input-error_active"},Array.from(document.querySelectorAll(c.formSelector)).forEach((function(e){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),o=e.querySelector(t.submitButtonSelector);l(n,o,t),e.addEventListener("reset",(function(){setTimeout((function(){l(n,o,t)}),0)})),n.forEach((function(r){r.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),o.classList.remove(n.errorClass),o.textContent=""}(e,t,n):function(e,t,n,o){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add(n.inputErrorClass),r.textContent=o,r.classList.add(n.errorClass)}(e,t,n,t.validationMessage)}(e,r,t),l(n,o,t)}))}))}(e,c)}))})();