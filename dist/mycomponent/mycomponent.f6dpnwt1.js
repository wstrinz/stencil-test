/*! Built with http://stenciljs.com */
(function(Context,appNamespace,hydratedCssClass,publicPath){"use strict";
var s=document.querySelector("script[data-core='mycomponent.f6dpnwt1.js'][data-path]");if(s){publicPath=s.getAttribute('data-path');}
(function(n,t,e,o,i){"use strict";function c(n,t,e,o,i,c,u,l){return u=e.split(":"),t&&u.length>1&&(t=n.t.n(t,u[0]),e=u[1]),t?(l=o,(u=e.split(".")).length>1&&(e=u[0],l=(n=>{n.keyCode===Y[u[1]]&&o(n)})),n.t.e(t,e,l,i,c)):V}function u(n){n.o&&(Object.keys(n.o).forEach(t=>n.o[t]()),n.o=null)}function l(n,t,e){const o={i:t.documentElement,c:t.head,u:t.body,l:n=>n.nodeType,f:n=>t.createElement(n),r:(n,e)=>t.createElementNS(n,e),s:n=>t.createTextNode(n),a:n=>t.createComment(n),d:(n,t,e)=>n.insertBefore(t,e),m:(n,t)=>n.removeChild(t),p:(n,t)=>n.appendChild(t),v:n=>n.childNodes,b:n=>n.parentNode,h:n=>n.nextSibling,y:n=>Q(n.tagName),C:n=>n.textContent,g:(n,t)=>n.textContent=t,w:(n,t)=>n.getAttribute(t),N:(n,t,e)=>n.setAttribute(t,e),T:(n,t,e,o)=>n.setAttributeNS(t,e,o),j:(n,t)=>n.removeAttribute(t),e:(n,t,e,i,c,u)=>(u=o.x?{capture:!!i,passive:!!c}:!!i,n.addEventListener(t,e,u),()=>n&&n.removeEventListener(t,e,u)),n:(e,i)=>"child"===i?e.firstElementChild:"parent"===i?o.k(e):"body"===i?o.u:"document"===i?t:"window"===i?n:e};return o.O=((n,t)=>n.attachShadow(t)),o.A=!!o.i.attachShadow,o.k=((n,t)=>(t=o.b(n))&&11===o.l(t)?t.host:t),o}function f(n,t,e,o,i){const c=11===e.M.nodeType&&e.M.host?e.M.host:e.M,u=t&&t.P||W,l=e.P||W;for(i in u)l&&null!=l[i]||null==u[i]||r(n,c,i,u[i],void 0,o);for(i in l)i in u&&l[i]===("value"===i||"checked"===i?c[i]:u[i])||r(n,c,i,u[i],l[i],o)}function r(n,t,e,o,i,u,l,f){if("class"!==e||u)if("style"===e){o=o||W,i=i||W;for(l in o)i[l]||(t.style[l]="");for(l in i)i[l]!==o[l]&&(t.style[l]=i[l])}else if("o"!==e[0]||"n"!==e[1]||e in t)if("list"!==e&&"type"!==e&&!u&&(e in t||-1!==["object","function"].indexOf(typeof i)&&null!==i)){const o=n.S(t);o&&o.B&&e in o.B?s(t,e,i):(s(t,e,null==i?"":i),null!=i&&!1!==i||t.removeAttribute(e))}else null!=i&&(l=e!==(e=e.replace(/^xlink\:?/,"")),1!==nn[e]||i&&"false"!==i?"function"!=typeof i&&(l?t.setAttributeNS(tn,Q(e),i):t.setAttribute(e,i)):l?t.removeAttributeNS(tn,Q(e)):t.removeAttribute(e));else{e=Q(e).substring(2);const u=t.o=t.o||{};i?o||(u[e]=c(n,t,e,i)):u[e]&&u[e]()}else if(o!==i){const n=null==o||""===o?X:o.trim().split(/\s+/),e=null==i||""===i?X:i.trim().split(/\s+/);let c=null==t.className||""===t.className?X:t.className.trim().split(/\s+/);for(l=0,f=n.length;l<f;l++)-1===e.indexOf(n[l])&&(c=c.filter(t=>t!==n[l]));for(l=0,f=e.length;l<f;l++)-1===n.indexOf(e[l])&&(c=[...c,e[l]]);t.className=c.join(" ")}}function s(n,t,e){try{n[t]=e}catch(n){}}function a(n,t){function e(o,i,c){let u=0;if("function"==typeof o.R&&(o=o.R(Object.assign({},o.P,{q:o.D}))),J(o.H))o.M=t.s(o.H);else{const i=o.M=t.f(o.R);f(n,null,o,en),null!==m&&i.I!==m&&t.N(i,i.I=m,"");const c=o.D;if(c){let n;for(;u<c.length;++u)(n=e(c[u],i,u))&&t.p(i,n)}}return o.M}function o(n,o,i,c,u){const l=n.$defaultHolder&&t.b(n.$defaultHolder)||n;let f;for(;c<=u;++c){var r=i[c];J(r)&&(f=J(r.H)?t.s(r.H):e(r,n,c),J(f)&&(r.M=f,t.d(l,f,o)))}}function i(n,e,o,i){for(;o<=i;++o)J(e[o])&&t.m(n,e[o].M)}function c(n,c,f){let s,a,d,m,p=0,v=0,b=c.length-1,h=c[0],y=c[b],$=f.length-1,C=f[0],g=f[$];for(;p<=b&&v<=$;)null==h?h=c[++p]:null==y?y=c[--b]:null==C?C=f[++v]:null==g?g=f[--$]:u(h,C)?(r(h,C),h=c[++p],C=f[++v]):u(y,g)?(r(y,g),y=c[--b],g=f[--$]):u(h,g)?(r(h,g),t.d(n,h.M,t.h(y.M)),h=c[++p],g=f[--$]):u(y,C)?(r(y,C),t.d(n,y.M,h.M),y=c[--b],C=f[++v]):(K(s)&&(s=l(c,p,b)),a=s[C.L],K(a)?(m=e(C,n,v),C=f[++v]):((d=c[a]).R!==C.R?m=e(C,n,a):(r(d,C),c[a]=void 0,m=d.M),C=f[++v]),m&&t.d(n,m,h.M));p>b?o(n,null==f[$+1]?null:f[$+1].M,f,v,$):v>$&&i(n,c,p,b)}function u(n,t){return n.R===t.R&&n.L===t.L}function l(n,t,e){let o,i,c,u={};for(o=t;o<=e;++o)null!=(c=n[o])&&void 0!==(i=c.L)&&(u.z=o);return u}function r(e,u){const l=u.M=e.M,r=e.D,s=u.D;if(K(u.H))"slot"!==u.R&&f(n,e,u,en),J(r)&&J(s)?c(l,r,s):J(s)?(J(e.H)&&t.g(l,""),o(l,null,s,0,s.length-1)):J(r)&&i(l,r,0,r.length-1);else if(l.F&&l.F.Z){let n=l.F.Z[0].parentElement;t.g(n,u.H),l.F.Z=[n.childNodes[0]]}else e.H!==u.H&&t.g(l,u.H)}let s,a,d,m;return function n(e,o,i,c,u,l){return s=i,a=c,m=2===u||1===u&&!t.A?"data-"+t.y(e.M):null,d=1===u&&t.A,s||(d?e.M=t.O(e.M,{mode:"open"}):m&&t.N(e.M,m+"-host","")),r(e,o),o}}function d(n,t){n&&(n._&&n._(t?null:n.M),n.D&&n.D.forEach(n=>{d(n,t)}))}function m(n,t,e){for(var o,i=!1,c=!1,u=arguments.length;u-- >2;)cn.push(arguments[u]);for(;cn.length;)if((e=cn.pop())&&void 0!==e.pop)for(u=e.length;u--;)cn.push(e[u]);else"boolean"==typeof e&&(e=null),(c="function"!=typeof n)&&(null==e?e="":"number"==typeof e?e=String(e):"string"!=typeof e&&(c=!1)),c&&i?o[o.length-1].H+=e:void 0===o?o=[c?p(e):e]:o.push(c?p(e):e),i=c;const l=new on;if(l.R=n,l.D=o,t&&(l.P=t,l.L=t.G,l._=t.J,t.className&&(t.class=t.className),"object"==typeof t.class)){for(u in t.class)t.class[u]&&cn.push(u);t.class=cn.join(" "),cn.length=0}return l}function p(n){const t=new on;return t.H=n,t}function v(n,t,e,o){function i(){for(;f.length>0;)f.shift()();e=!1}function c(e){for(e=t(),i();r.length>0&&t()-e<40;)r.shift()();(o=r.length>0)&&n(u)}function u(e){for(i(),e=4+t();r.length>0&&t()<e;)r.shift()();(o=r.length>0)&&n(c)}const l=Promise.resolve(),f=[],r=[];return{add:(t,u)=>{3===u?(f.push(t),e||(e=!0,l.then(i))):(r.push(t),o||(o=!0,n(c)))}}}function b(n,t,e){const o={K:n[0],B:{mode:{Q:1},color:{Q:1,U:"color"}}};return o.V=n[1],y(o,n[3],e),o.W=n[4],o.X=n[5],n[6]&&(o.Y=n[6].map(h)),o.nn=n[7],t[o.K]=o}function h(n){return{tn:n[0],en:n[1],on:!!n[2],in:!!n[3],cn:!!n[4]}}function y(n,t,e){if(t){n.B=n.B||{};for(var o=0;o<t.length;o++){var i=t[o];n.B[i[0]]={Q:i[1],U:i[2]?1===e?Q(i[0]):U(i[0]):0,un:i[3],ln:i[4]}}}}function $(n,t,e,o){const i=n[e[0]];i.fn=t[e[0]],y(i,e[1],o),i.rn=e[2],e[3]&&(i.sn=e[3].map(C)),i.an=e[4],i.dn=e[5]}function C(n){return{tn:n[0],en:n[1]||n[0],mn:!n[2],pn:!n[3],vn:!n[4]}}function g(n,t){if(J(t)){if(3===n)return"false"!==t&&(""===t||!!t);if(4===n)return parseFloat(t)}return t}function w(n,t,e,o,i,c){if(o!==i&&n){e=Q(e);for(c in n)if(n[c].U===e){t[c]=g(n[c].un,i);break}}}function N(n,t,e){t&&Object.keys(t).forEach(o=>{const i=t[o].Q;1===i||2===i?E(e,o,function n(){return(this.bn=this.bn||{})[o]},function t(e){x(n,this,o,e)}):6===i&&k(e,o,V)})}function T(n,t,e,o){o.hn=e,e.bn=e.bn||{},t.B&&Object.keys(t.B).forEach(i=>{j(n,t,e,o,i)})}function j(n,t,e,o,i){const c=t.B[i],u=c.Q;if(1===u||5===u||2===u){if(5!==u){if(c.U&&(void 0===e.bn[i]||""===e.bn[i])){const n=e.getAttribute(c.U);null!=n&&(e.bn[i]=g(c.un,n))}e.hasOwnProperty(i)&&(void 0===e.bn[i]&&(e.bn[i]=e[i]),n.isClient&&delete e[i])}o.hasOwnProperty(i)&&void 0===e.bn[i]&&(e.bn[i]=o[i]),E(o,i,function l(){const n=this.hn;return n&&n.bn&&n.bn[i]},function f(t){const e=this.hn;1!==u&&x(n,e,i,t)})}}function x(n,t,e,o){const i=t.bn=t.bn||{};o!==i[e]&&(i[e]=o,t.yn&&!n.$n&&q(n,t))}function k(n,t,e){Object.defineProperty(n,t,{configurable:!0,value:e})}function E(n,t,e,o){Object.defineProperty(n,t,{configurable:!0,get:e,set:o})}function O(n,t,e){return{create:M(n,t,e,"create"),componentOnReady:M(n,t,e,"componentOnReady")}}function A(n,t,e){return new Promise(o=>{let i=t[e];i||(i=n.u.querySelector(e)),i||(i=t[e]=n.f(e),n.p(n.u,i)),i.componentOnReady(o)})}function M(n,t,e,o){return function(){const i=arguments;return A(n,t,e).then(n=>n[o].apply(n,i))}}function P(n,t,e){try{e=n.S(t),t.yn=new e.fn,T(n,e,t,t.yn)}catch(e){t.yn={},n.Cn(e,7,t,!0)}}function S(n,t,e){if(t.yn&&!t.gn&&(!t.$activeLoading||!t.$activeLoading.length)){t.$activeLoading=null,t.wn=!0;try{t.Nn&&(t.Nn.forEach(n=>n(t)),t.Nn=null),d(t.Tn)}catch(e){n.Cn(e,4,t)}t.classList.add(e),B(t)}}function B(n,t,e){n.jn&&((e=n.jn.$activeLoading)&&((t=e.indexOf(n))>-1&&e.splice(t,1),!e.length&&n.jn.$initLoad()),n.jn=null)}function R(n,t,e,o){const i=t.yn,c=e.rn;if(i.render||i.hostData||c){n.$n=!0;const c=i.render&&i.render();n.$n=!1;const u=t.Tn||new on;u.M=t,t.Tn=n.render(u,m(null,void 0,c),o,t.F,e.W)}n.xn(e,i.mode,t),t.$rendered=!0,t.$onRender&&(t.$onRender.forEach(n=>n()),t.$onRender=null)}function q(n,t){t.kn||(t.kn=!0,n.En.add(()=>{t.kn=!1,D(n,t)}))}function D(n,t){if(!t.gn){const e=!t.yn;if(e){const e=t.jn;if(e&&!e.$rendered)return void(e.$onRender=e.$onRender||[]).push(()=>{D(n,t)});P(n,t)}H(n,t,e)}}function H(n,t,e){try{R(n,t,n.S(t),!e)}catch(e){n.Cn(e,8,t,!0)}try{e&&t.$initLoad()}catch(e){n.Cn(e,6,t,!0)}}function I(n,t,e){e.$connected||(e.$connected=!0,e.gn=null,L(n,e),n.En.add(()=>{n.On(t,e),n.An(t,e,()=>q(n,e))},3))}function L(n,t,e){for(e=t;e=n.t.k(e);)if(n.Mn(e)){e.wn||(t.jn=e,(e.$activeLoading=e.$activeLoading||[]).push(t));break}}function z(n,t){!n.Pn&&F(n.t,t)&&(t.gn=!0,B(t),d(t.Tn,!0),u(t),t.yn&&(t.yn=t.yn.hn=null),t.$activeLoading=t.$connected=t.$defaultHolder=t.Sn=t.bn=t.Tn=t.jn=t.wn=t.kn=t.Bn=null)}function F(n,t){for(;t;){if(!n.b(t))return 9!==n.l(t);t=n.b(t)}}function Z(n,t,e,o){e.connectedCallback=function(){I(n,t,this)},e.attributeChangedCallback=function(n,e,o){w(t.B,this,n,e,o)},e.disconnectedCallback=function(){z(n,this)},e.componentOnReady=function(n,t){return n||(t=new Promise(t=>n=t)),_(this,n),t},e.$initLoad=function(){S(n,this,o)},N(n,t.B,e)}function _(n,t){n.gn||(n.wn?t(n):(n.Nn=n.Nn||[]).push(t))}function G(n,t){return 2===t.W||1===t.W&&!n}const J=n=>void 0!==n&&null!==n,K=n=>void 0===n||null===n,Q=n=>n.toLowerCase(),U=n=>n.replace(/([A-Z])/g,n=>"-"+Q(n[0])),V=()=>{},W={},X=[],Y={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},nn={allowfullscreen:1,async:1,autofocus:1,autoplay:1,checked:1,controls:1,disabled:1,enabled:1,formnovalidate:1,hidden:1,multiple:1,noresize:1,readonly:1,required:1,selected:1,spellcheck:1},tn="http://www.w3.org/1999/xlink";let en=!1;class on{}const cn=[],un=n[o]=n[o]||{},ln=function fn(t,e,o,i,c,u){function f(n,t,e,o,i){function u(){clearTimeout(o),i.onerror=i.onload=null,g.m(g.b(i),i),y[e]=!1}e=c+t+(G(g.A,n)?".sc":"")+".js",y[e]||(y[e]=!0,(i=g.f("script")).charset="utf-8",i.async=!0,i.src=e,o=setTimeout(u,12e4),i.onerror=i.onload=u,g.p(g.c,i))}const r={html:{}},s={},d={},p={},h={},y={},C={},g=l(o,i);t.isServer=t.isPrerender=!(t.isClient=!0),t.window=o,t.location=o.location,t.document=i;const w=o.Rn=o.Rn||{},N={On:function T(n,e){e.mode||(e.mode=g.w(e,"mode")||t.mode),g.A||1!==n.W||(e.shadowRoot=e)},t:g,qn:function j(n,t){const e=n.K;if(!w[e]){w[e]=!0,Z(N,n,t.prototype,u);{const e=[];for(var i in n.B)n.B[i].U&&e.push(n.B[i].U);t.observedAttributes=e}o.customElements.define(e,t)}},Dn:t.emit,S:n=>r[g.y(n)],Hn:n=>t[n],isClient:!0,Mn:n=>!(!w[g.y(n)]&&!N.S(n)),An:function x(n,t,e,o){o=(n.V[t.mode]||n.V)[0],p[o]?e():((d[o]=d[o]||[]).push(e),f(n,o))},Cn:(n,t,e)=>void 0,In:n=>O(g,C,n),En:v(t=>n.requestAnimationFrame(t),()=>o.performance.now()),Ln:n=>(n||[]).map(n=>b(n,r))};N.render=a(N,g);const k=g.i;return k.$rendered=!0,k.$activeLoading=[],k.$initLoad=(()=>k.wn=!0),e.loadComponents=function n(e,o){const i=arguments;o(s,m,t,c);for(var u=2;u<i.length;u++)$(r,s,i[u]);var l=d[e];if(l){for(u=0;u<l.length;u++)l[u]();d[e]=null}p[e]=!0},e.loadStyles=function n(){const t=arguments;let e;for(var o=0;o<t.length;o+=2)h[t[o]]=e=g.f("template"),e.innerHTML=`<style>${t[o+1]}</style>`,e.id=`tmp-${t[o]}`,g.p(g.c,e)},N.xn=((n,t,e)=>{{const o=h[n.K+"_"+t]||h[n.K];if(o){let t=g.c;if(g.A)if(1===n.W)t=e.shadowRoot;else for(;e=g.b(e);)if(e.host&&e.host.shadowRoot){t=e.host.shadowRoot;break}const i=t.zn=t.zn||{};if(!i[o.id]){const n=o.content.cloneNode(!0),e=t.querySelector("[data-visibility]");g.d(t,n,e&&e.nextSibling||t.Fn),i[o.id]=!0}}}}),N}(e,un,n,t,i,hydratedCssClass);ln.Ln(un.components).forEach(n=>ln.qn(n,class extends HTMLElement{}))})(window,document,Context,appNamespace,publicPath);
})({},"mycomponent","hydrated","/build/mycomponent/");