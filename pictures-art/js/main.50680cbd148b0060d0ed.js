/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 57:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/fail.png";

/***/ }),

/***/ 495:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/ok.png";

/***/ }),

/***/ 572:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/sizes-1-1.png";

/***/ }),

/***/ 196:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/sizes-2-1.png";

/***/ }),

/***/ 764:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/sizes-3-1.png";

/***/ }),

/***/ 350:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/sizes-4-1.png";

/***/ }),

/***/ 320:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/spinner.gif";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {

;// CONCATENATED MODULE: ./src/js/modules/sliders.js
var sliders = function sliders(slidesSel, options) {
  var slides = document.querySelectorAll(slidesSel);
  var slideIndex = 0;
  var interval;

  var swipe = function swipe() {
    var animationClass = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : options.animationClass;

    if (slideIndex >= slides.length) {
      slideIndex = 0;
    } else if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }

    slides.forEach(function (slide) {
      slide.classList.add("animated", "hide");
      slide.classList.remove("slideInLeft", "slideInRight");
    });
    slides[slideIndex].classList.remove("hide");
    slides[slideIndex].classList.add(animationClass);
  };

  swipe();

  var autoSwipe = function autoSwipe() {
    interval = setInterval(function () {
      slideIndex++;
      swipe();
    }, options.autoSwipe);
  };

  if (options.autoSwipe) autoSwipe();

  if (options.buttons) {
    document.querySelector(options.buttons.next).addEventListener("click", function () {
      slideIndex++;
      swipe("slideInLeft");
    });
    document.querySelector(options.buttons.prev).addEventListener("click", function () {
      slideIndex--;
      swipe("slideInRight");
    });
  }

  slides[0].parentNode.addEventListener("mouseenter", function () {
    clearInterval(interval);
  });
  slides[0].parentNode.addEventListener("mouseleave", autoSwipe);
};

/* harmony default export */ var modules_sliders = (sliders);
// EXTERNAL MODULE: ./src/assets/img/sizes-1-1.png
var sizes_1_1 = __webpack_require__(572);
// EXTERNAL MODULE: ./src/assets/img/sizes-2-1.png
var sizes_2_1 = __webpack_require__(196);
// EXTERNAL MODULE: ./src/assets/img/sizes-3-1.png
var sizes_3_1 = __webpack_require__(764);
// EXTERNAL MODULE: ./src/assets/img/sizes-4-1.png
var sizes_4_1 = __webpack_require__(350);
// EXTERNAL MODULE: ./src/assets/img/spinner.gif
var spinner = __webpack_require__(320);
// EXTERNAL MODULE: ./src/assets/img/ok.png
var ok = __webpack_require__(495);
// EXTERNAL MODULE: ./src/assets/img/fail.png
var fail = __webpack_require__(57);
;// CONCATENATED MODULE: ./src/js/modules/services.js
var scrollHide = function scrollHide() {
  var documentWidth = parseInt(document.documentElement.clientWidth);
  var windowWidth = parseInt(window.innerWidth);
  var scrollWidth = windowWidth - documentWidth;
  document.body.style.paddingRight = "".concat(scrollWidth, "px");
  document.body.style.overflow = "hidden";
  document.querySelector(".fixed-gift").style.marginRight = "".concat(scrollWidth, "px");
};

var scrollShow = function scrollShow() {
  document.body.style.paddingRight = "0px";
  document.body.style.overflow = "";
  document.querySelector(".fixed-gift").style.marginRight = "0px";
};


;// CONCATENATED MODULE: ./src/js/modules/popups.js


var popups = function popups(popup, show) {
  if (show) {
    scrollHide();
    popup.classList.add("show");
    popup.dataset.modal = "show";
  } else {
    scrollShow();
    popup.classList.remove("show");
    popup.dataset.modal = "";
  }
};

/* harmony default export */ var modules_popups = (popups);
;// CONCATENATED MODULE: ./src/js/modules/worksFilter.js
var worksFilter = function worksFilter(portfolioMenu, filterClass) {
  var portfolioWrapper = document.querySelector(".portfolio-wrapper");
  var portfolioNo = document.querySelector(".portfolio-no");
  portfolioMenu.querySelectorAll("li").forEach(function (menuItem) {
    if (menuItem.classList.contains(filterClass)) {
      menuItem.classList.add("active");
    } else {
      menuItem.classList.remove("active");
    }
  });

  if (portfolioWrapper.querySelectorAll(".".concat(filterClass)).length > 0) {
    portfolioNo.classList.remove("show");
  } else {
    portfolioNo.classList.add("show");
  }

  portfolioWrapper.querySelectorAll(".portfolio-block").forEach(function (portfolioItem) {
    if (!portfolioItem.classList.contains(filterClass)) {
      portfolioItem.classList.remove("show");
      portfolioItem.classList.add("hide");
    } else {
      portfolioItem.classList.add("show", "animated", "fadeIn");
    }
  });
};

/* harmony default export */ var modules_worksFilter = (worksFilter);
;// CONCATENATED MODULE: ./src/js/modules/showMoreStyles.js
var showMoreStyles = function showMoreStyles() {
  var pictureStyles = document.querySelectorAll(".styles-field div");
  pictureStyles.forEach(function (element) {
    if (element.classList.contains("hidden-lg")) {
      element.className = "animated fadeIn col-sm-3 col-sm-offset-0 col-xs-10 col-xs-offset-1";
    }
  });
};

/* harmony default export */ var modules_showMoreStyles = (showMoreStyles);
;// CONCATENATED MODULE: ./src/js/modules/accordion.js
var accordion = function accordion(activeEl) {
  document.querySelectorAll(".accordion-heading").forEach(function (item) {
    if (item === activeEl) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};

/* harmony default export */ var modules_accordion = (accordion);
;// CONCATENATED MODULE: ./src/js/modules/sendForm.js
var sendForm = function sendForm(form) {
  var statusImg = document.createElement("img");
  var statusText = document.createElement("p");
  var formData = new FormData(form);
  form.reset();

  var showStatus = function showStatus(status) {
    var statusMessages = {
      sending: {
        img: "spinner.gif",
        text: "Идёт отправка..."
      },
      success: {
        img: "ok.png",
        text: "Спасибо, скоро мы с Вами свяжемся."
      },
      error: {
        img: "fail.png",
        text: "Что-то пошло не так..."
      }
    };
    form.textContent = "";
    form.style.textAlign = "center";
    statusImg.src = "img/".concat(statusMessages[status].img);
    statusText.textContent = statusMessages[status].text;
    form.appendChild(statusImg);
    form.appendChild(statusText);
  };

  showStatus("sending");
  fetch("https://script.google.com/macros/s/AKfycbzd8d2kzNWOKq5y3l6o9WA_Q1qnVRq-y_RcYSapW8NWpjxy7gOoXfxDNEorr7BCFLQUrQ/exec", {
    method: "POST",
    body: formData
  }).then(function (response) {
    if (response.status === 200) {
      showStatus("success");
    } else {
      throw new Error(response.statusText);
    }
  }).catch(function (error) {
    showStatus("error");
  });
};

/* harmony default export */ var modules_sendForm = (sendForm);
;// CONCATENATED MODULE: ./src/js/modules/handlers.js






var handlers = function handlers() {
  var burgerMenu = document.querySelector(".burger-menu");
  var showPopupGift = true;
  window.addEventListener("scroll", function () {
    if (showPopupGift && window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      showPopupGift = false;
      modules_popups(document.querySelector(".popup-gift"), true);
      document.querySelector(".fixed-gift").style.display = "none";
    }
  });
  window.addEventListener("resize", function () {
    if (window.screen.availWidth > 992) {
      burgerMenu.classList.remove("show");
    }
  });
  document.addEventListener("submit", function (e) {
    e.preventDefault();
    modules_sendForm(e.target);
  });
  document.addEventListener("click", function (e) {
    var target = e.target; // Show modals

    if (target.getAttribute("data-show-modal")) {
      var popupSel = ".".concat(target.getAttribute("data-show-modal"));
      showPopupGift = false;
      modules_popups(document.querySelector(popupSel), true);

      if (target.classList.contains("fixed-gift")) {
        target.style.display = "none";
      }
    } // Hide modals


    if (target.classList.contains("popup-close") || target.classList.contains("popup")) {
      showPopupGift = false;
      modules_popups(target.closest("[data-modal]"), false);
    } // Filter portfolio works


    if (target.parentNode.classList.contains("portfolio-menu")) {
      modules_worksFilter(target.parentNode, target.className);
    } // Show more styles


    if (target.classList.contains("button-transparent")) {
      target.classList.add("hide");
      modules_showMoreStyles();
    } // Burger menu


    if (target.closest(".burger") && window.screen.availWidth <= 992) {
      burgerMenu.classList.toggle("show");
    } // Accordion


    if (target.parentNode.classList.contains("accordion-heading")) {
      modules_accordion(target.parentNode);
    }
  });
};

/* harmony default export */ var modules_handlers = (handlers);
;// CONCATENATED MODULE: ./src/js/modules/pictureSizes.js
var pictureSizes = function pictureSizes() {
  var sizesWrapper = document.querySelector(".sizes-wrapper");

  var heandlers = function heandlers(elem, event, show) {
    return elem.addEventListener(event, function (e) {
      var target = e.target;

      if (target.tagName === "IMG") {
        if (show) {
          target.parentNode.querySelectorAll("p").forEach(function (item) {
            item.classList.remove("hide");
          });
        } else {
          target.parentNode.querySelectorAll("p").forEach(function (item) {
            if (!item.classList.contains("sizes-hit")) {
              item.classList.add("hide");
            }
          });
        }

        var _ref = [target.dataset.img, target.src];
        target.src = _ref[0];
        target.dataset.img = _ref[1];
      }
    });
  };

  heandlers(sizesWrapper, "mouseover", false);
  heandlers(sizesWrapper, "mouseout", true);
};

/* harmony default export */ var modules_pictureSizes = (pictureSizes);
;// CONCATENATED MODULE: ./src/js/modules/fileUpload.js
var fileUpload_fileUpload = function fileUpload(input) {
  var fileNameSource = input.files[0].name;
  var fileNameOut = document.querySelector("." + input.dataset.fileName);

  if (fileNameSource) {
    var fileName = fileNameSource.split(".");
    var gap = fileName[0].length > 5 ? "..." : ".";
    fileNameOut.textContent = fileName[0].substr(0, 6) + gap + fileName[1];
  } else {
    fileNameOut.textContent = "Файл не выбран";
  }
};

/* harmony default export */ var modules_fileUpload = (fileUpload_fileUpload);
;// CONCATENATED MODULE: ./src/js/modules/validations.js


var validations = function validations() {
  var regexp = new Map([["name", /[^ а-яё]/i], ["email", /[^(a-z0-9)(.@_!-)]/i], ["message", /[^ а-яё0-9.,!?]/]]);
  document.addEventListener("input", function (e) {
    var target = e.target,
        name = target.name;

    if (name && regexp.has(name)) {
      target.value = target.value.replace(regexp.get(name), "");
    }

    if (name === "upload") {
      modules_fileUpload(target);
    }
  });
};

/* harmony default export */ var modules_validations = (validations);
;// CONCATENATED MODULE: ./src/js/modules/phoneMask.js
var phoneMask = function phoneMask(selector) {
  var setCursorPosition = function setCursorPosition(pos, elem) {
    elem.focus();

    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      var range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select();
    }
  };

  function createMask(event) {
    var i = 0,
        val = this.value.replace(/\D/g, "");
    var matrix = "+7 (___) ___ __ __",
        def = matrix.replace(/\D/g, "");

    if (def.length >= val.length) {
      val = def;
    }

    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
    });

    if (event.type === "blur") {
      if (this.value.length === 2) {
        this.value = "";
      }
    } else {
      setCursorPosition(this.value.length, this);
    }
  }

  var inputs = document.querySelectorAll(selector);
  inputs.forEach(function (input) {
    input.addEventListener("input", createMask);
    input.addEventListener("focus", createMask);
    input.addEventListener("blur", createMask);
  });
};

/* harmony default export */ var modules_phoneMask = (phoneMask);
;// CONCATENATED MODULE: ./src/js/modules/calculator.js
var calculator = function calculator() {
  var size = document.getElementById("size");
  var material = document.getElementById("material");
  var options = document.getElementById("options");
  var calcUpload = document.getElementById("calc-upload");
  var promocode = document.querySelector(".promocode");
  var calcPrice = document.querySelector(".calc-price");
  var calcForm = document.querySelector(".calc_form");
  var calcButton = calcForm.querySelector(".button-order");
  var startPrice = 1000;
  var currentPrice;

  var calc = function calc() {
    if (size.value !== "" && material.value !== "") {
      var optionsValue = options.value || 1;
      currentPrice = startPrice * size.value * material.value * optionsValue;

      if (promocode.value === "IWANTPOPART") {
        currentPrice = currentPrice * 0.7;
      }

      calcPrice.textContent = "".concat(Math.ceil(currentPrice), " \u0440\u0443\u0431");

      if (calcUpload.value !== "") {
        calcButton.disabled = false;
      }
    } else {
      calcPrice.textContent = calcPrice.dataset.defaultMsg;
      calcButton.disabled = true;
    }
  };

  calcForm.addEventListener("change", calc);
};

/* harmony default export */ var modules_calculator = (calculator);
;// CONCATENATED MODULE: ./src/js/index.js



if (false) {}

















var startConsultInterval = function startConsultInterval() {
  var isModalShow = Array.from(document.querySelectorAll("[data-modal]")).filter(function (item) {
    return item.dataset.modal === "show";
  });

  if (isModalShow.length) {
    setTimeout(startConsultInterval, 5000);
  } else {
    modules_popups(document.querySelector(".popup-consultation"), true);
  }
};

setTimeout(startConsultInterval, 60000);
modules_handlers();
modules_pictureSizes();
modules_validations();
modules_phoneMask('input[name="phone"]');
modules_calculator();
modules_sliders(".main-slider-item", {
  autoSwipe: 4000,
  animationClass: "slideInDown"
});
modules_sliders(".feedback-slider-item", {
  autoSwipe: 5000,
  animationClass: "slideInLeft",
  buttons: {
    next: ".main-next-btn",
    prev: ".main-prev-btn"
  }
});
}();
/******/ })()
;