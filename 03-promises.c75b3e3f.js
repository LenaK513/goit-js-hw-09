var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},l={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in l){var n=l[e];delete l[e];var t={id:e,exports:{}};return o[e]=t,n.call(t.exports,t,t.exports),t.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){l[e]=o},e.parcelRequired7c6=n);var t=n("iQIUW");const i=document.querySelector(".form");i.addEventListener("submit",(function(e){e.preventDefault(),r=Number(i.elements.delay.value),s=Number(i.elements.step.value),u=Number(i.elements.amount.value),console.log(r),console.log(s),console.log(u);for(let e=1;e<=u;e+=1)o(e,r).then((({position:e,delay:o})=>{t.Notify.success(`✔ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{t.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`)})),console.log(r+=s);function o(e,o){return new Promise(((l,n)=>{setTimeout((()=>{Math.random()>.3?(l({position:e,delay:o}),console.log(`✅ Fulfilled promise ${e} in ${o}ms`)):(n({position:e,delay:o}),console.log(`❌ Rejected promise ${e} in ${o}ms`))}),r)}))}}));let r=null,s=null,u=null;
//# sourceMappingURL=03-promises.c75b3e3f.js.map