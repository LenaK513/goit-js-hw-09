var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in n){var i=n[e];delete n[e];var t={id:e,exports:{}};return o[e]=t,i.call(t.exports,t,t.exports),t.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){n[e]=o},e.parcelRequired7c6=i);var t=i("iQIUW");const l=document.querySelector(".form");l.addEventListener("submit",(function(e){e.preventDefault(),delayTime=l.elements.delay.value,step=l.elements.step.value,amount=l.elements.amount.value;for(let e=1;e<=amount;e+=1)o(e,delayTime).then((({position:e,delay:o})=>{t.Notify.success(`✔ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{t.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`)})),delayTime+=step;function o(e,o){return new Promise(((n,i)=>{setTimeout((()=>{Math.random()>.3?(n({position:e,delay:o}),console.log(`✅ Fulfilled promise ${e} in ${o}ms`)):(i({position:e,delay:o}),console.log(`❌ Rejected promise ${e} in ${o}ms`))}),delayTime)}))}}));
//# sourceMappingURL=03-promises.ce819e9e.js.map
