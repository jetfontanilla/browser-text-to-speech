var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function u(t,e){t.appendChild(e)}function i(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode.removeChild(t)}function s(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function f(){return a(" ")}function d(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t,e){e=""+e,t.data!==e&&(t.data=e)}function g(t,e){(null!=e||t.value)&&(t.value=e)}function m(t,e){for(let n=0;n<t.options.length;n+=1){const o=t.options[n];if(o.__value===e)return void(o.selected=!0)}}let $;function y(t){$=t}const v=[],_=[],b=[],x=[],w=Promise.resolve();let S=!1;function E(t){b.push(t)}let k=!1;const A=new Set;function C(){if(!k){k=!0;do{for(let t=0;t<v.length;t+=1){const e=v[t];y(e),L(e.$$)}for(v.length=0;_.length;)_.pop()();for(let t=0;t<b.length;t+=1){const e=b[t];A.has(e)||(A.add(e),e())}b.length=0}while(v.length);for(;x.length;)x.pop()();S=!1,k=!1,A.clear()}}function L(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}const N=new Set;function P(t,e){-1===t.$$.dirty[0]&&(v.push(t),S||(S=!0,w.then(C)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function T(c,u,i,s,a,f,d=[-1]){const p=$;y(c);const h=u.props||{},g=c.$$={fragment:null,ctx:null,props:f,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:[]),callbacks:n(),dirty:d};let m=!1;if(g.ctx=i?i(c,h,(t,e,...n)=>{const o=n.length?n[0]:e;return g.ctx&&a(g.ctx[t],g.ctx[t]=o)&&(g.bound[t]&&g.bound[t](o),m&&P(c,t)),e}):[],g.update(),m=!0,o(g.before_update),g.fragment=!!s&&s(g.ctx),u.target){if(u.hydrate){const t=function(t){return Array.from(t.childNodes)}(u.target);g.fragment&&g.fragment.l(t),t.forEach(l)}else g.fragment&&g.fragment.c();u.intro&&((v=c.$$.fragment)&&v.i&&(N.delete(v),v.i(_))),function(t,n,c){const{fragment:u,on_mount:i,on_destroy:l,after_update:s}=t.$$;u&&u.m(n,c),E(()=>{const n=i.map(e).filter(r);l?l.push(...n):o(n),t.$$.on_mount=[]}),s.forEach(E)}(c,u.target,u.anchor),C()}var v,_;y(p)}function j(t,e,n){const o=t.slice();return o[8]=e[n].name,o[9]=e[n].lang,o[11]=n,o}function q(e){let n;return{c(){n=s("h2"),n.textContent="Speech to text not supported by your browser"},m(t,e){i(t,n,e)},p:t,d(t){t&&l(n)}}}function M(t){let e,n,r,c,a,h,$,y,v=t[2],_=[];for(let e=0;e<v.length;e+=1)_[e]=O(j(t,v,e));return{c(){e=s("div"),n=s("textarea"),r=f(),c=s("div"),a=s("select");for(let t=0;t<_.length;t+=1)_[t].c();h=f(),$=s("button"),$.innerHTML="<span>Play Phrase</span>",p(n,"class","phrase"),p(n,"placeholder","Enter a phrase..."),p(e,"class","section"),p(a,"class","voices"),void 0===t[1]&&E(()=>t[7].call(a)),p($,"class","primary"),p(c,"class","section")},m(l,s,f){i(l,e,s),u(e,n),g(n,t[0]),i(l,r,s),i(l,c,s),u(c,a);for(let t=0;t<_.length;t+=1)_[t].m(a,null);m(a,t[1]),u(c,h),u(c,$),f&&o(y),y=[d(n,"input",t[6]),d(a,"change",t[7]),d($,"click",t[4])]},p(t,e){if(1&e&&g(n,t[0]),4&e){let n;for(v=t[2],n=0;n<v.length;n+=1){const o=j(t,v,n);_[n]?_[n].p(o,e):(_[n]=O(o),_[n].c(),_[n].m(a,null))}for(;n<_.length;n+=1)_[n].d(1);_.length=v.length}2&e&&m(a,t[1])},d(t){t&&l(e),t&&l(r),t&&l(c),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(_,t),o(y)}}}function O(t){let e,n,o,r,c,d,p=t[8]+"",g=t[9]+"";return{c(){e=s("option"),n=a(p),o=a(" - "),r=a(g),c=f(),e.__value=d=t[11],e.value=e.__value},m(t,l){i(t,e,l),u(e,n),u(e,o),u(e,r),u(e,c)},p(t,e){4&e&&p!==(p=t[8]+"")&&h(n,p),4&e&&g!==(g=t[9]+"")&&h(r,g)},d(t){t&&l(e)}}}function U(e){let n;let o=function(t,e){return t[3]?M:q}(e)(e);return{c(){n=s("div"),o.c(),p(n,"class","container")},m(t,e){i(t,n,e),o.m(n,null)},p(t,[e]){o.p(t,e)},i:t,o:t,d(t){t&&l(n),o.d()}}}function V(t,e,n){const o="speechSynthesis"in window&&"SpeechSynthesisUtterance"in window;let r="",c=0,u=window.speechSynthesis,i=[];return setTimeout(()=>{n(2,i=o?u.getVoices():[])},1e3),[r,c,i,o,function(){let t=new SpeechSynthesisUtterance(r);t.voice=u.getVoices()[c],u.speak(t)},u,function(){r=this.value,n(0,r)},function(){c=function(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}(this),n(1,c)}]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}{constructor(t){super(),T(this,t,V,U,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
