!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var i=t("h6c0i"),a=document.querySelector(".form");a.addEventListener("submit",(function(e){e.preventDefault(),delay=a.elements.delay.value,step=a.elements.step.value,amount=a.elements.amount.value;for(var n=1;n<amount;n+=1){}(o={position:position,delay:delay},new Promise((function(e,n){var a=Math.random()>.3;setTimeout((function(e){a?i.Notify.success("✔ Fulfilled promise ".concat(o," in ").concat(e,"ms")):i.Notify.failure("✖ Rejected promise ".concat(o," in ").concat(e,"ms"))}),t),t+=step}))).then((function(e){var n=e.position,o=e.delay;console.log("✔ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;console.log("✖ Rejected promise ".concat(n," in ").concat(o,"ms"))}));var o,t}))}();
//# sourceMappingURL=03-promises.2dfc55d5.js.map
