(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{100:function(t,n,r){"use strict";r.r(n);var u=r(11);r.d(n,"MemoryRouter",(function(){return u.d})),r.d(n,"Prompt",(function(){return u.f})),r.d(n,"Redirect",(function(){return u.g})),r.d(n,"Route",(function(){return u.h})),r.d(n,"Router",(function(){return u.i})),r.d(n,"StaticRouter",(function(){return u.j})),r.d(n,"Switch",(function(){return u.k})),r.d(n,"generatePath",(function(){return u.l})),r.d(n,"matchPath",(function(){return u.m})),r.d(n,"useHistory",(function(){return u.n})),r.d(n,"useLocation",(function(){return u.o})),r.d(n,"useParams",(function(){return u.p})),r.d(n,"useRouteMatch",(function(){return u.q})),r.d(n,"withRouter",(function(){return u.r})),r.d(n,"BrowserRouter",(function(){return u.a})),r.d(n,"HashRouter",(function(){return u.b})),r.d(n,"Link",(function(){return u.c})),r.d(n,"NavLink",(function(){return u.e}))},102:function(t,n,r){"use strict";function u(t){return!0===/^(\w*:|\/\/)/.test(t)}function e(t){return void 0!==t&&!u(t)}r.d(n,"b",(function(){return u})),r.d(n,"a",(function(){return e}))},90:function(t,n,r){"use strict";r.r(n);var u=r(0),e=r.n(u),i=r(100),o=r(98);n.default=function(){return e.a.createElement(i.Redirect,{to:Object(o.a)("/getting_started")})}},98:function(t,n,r){"use strict";r.d(n,"b",(function(){return i})),r.d(n,"a",(function(){return o}));var u=r(22),e=r(102);function i(){var t=Object(u.default)().siteConfig,n=(t=void 0===t?{}:t).baseUrl,r=void 0===n?"/":n,i=t.url;return{withBaseUrl:function(t,n){return function(t,n,r,u){var i=void 0===u?{}:u,o=i.forcePrependBaseUrl,c=void 0!==o&&o,f=i.absolute,d=void 0!==f&&f;if(!r)return r;if(r.startsWith("#"))return r;if(Object(e.b)(r))return r;if(c)return n+r;var a=r.startsWith(n)?r:n+r.replace(/^\//,"");return d?t+a:a}(i,r,t,n)}}}function o(t,n){return void 0===n&&(n={}),(0,i().withBaseUrl)(t,n)}}}]);