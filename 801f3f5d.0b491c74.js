(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{78:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),s=t(104),o=t(96),r=t(132);n.default=function(){Object(o.a)("img/visa.png"),Object(o.a)("img/mastercard.png"),Object(o.a)("img/amex.png"),Object(o.a)("img/discover.png"),Object(o.a)("img/jcb.png"),Object(o.a)("img/dinersclub.png"),Object(o.a)("img/maestro.png");var e=Object(a.useState)(void 0),n=(e[0],e[1],Object(a.useState)(""));return n[0],n[1],c.a.createElement(s.a,{title:"Playground"},c.a.createElement("div",{className:"demo-container"},c.a.createElement("div",{className:"front-end-section"},c.a.createElement("iframe",{width:"80%",height:"410",src:"//jsfiddle.net/johnnyshrewd/3r65hLs9/18/embedded/result,html,js,css/dark/",allowFullscreen:"allowfullscreen",allowPaymentRequest:!0,frameborder:"0"})),c.a.createElement("div",{className:"back-end-section"},c.a.createElement(r,{source:"const { Checkout } = require('checkout-sdk-node');\n\n/** For this example please do not change this key.*/\nconst cko = new Checkout('sk_test_3e1ad21b-ac23-4eb3-ad1f-375e9fb56481');\n\n(async () => {\n    const transaction = await cko.payments.request({\n        source: {\n            token: 'put_the_token_here',\n        },\n        currency: 'USD',\n        amount: 100\n    });\n\n    console.log(transaction);\n})();\n\n    ",title:"checkout-sdk-node"}))))}}}]);