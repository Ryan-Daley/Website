const u={};function _(e){u.context=e}function oe(){return{...u.context,id:`${u.context.id}${u.context.count++}-`,count:0}}const fe=(e,t)=>e===t,Ce=Symbol("solid-proxy"),ue=Symbol("solid-track"),O={equals:fe};let Q=te;const m=1,U=2,Z={owned:null,cleanups:null,context:null,owner:null};var d=null;let T=null,h=null,g=null,S=null,P=0;function I(e,t){const n=h,s=d,i=e.length===0,r=i?Z:{owned:null,cleanups:null,context:null,owner:t===void 0?s:t},o=i?e:()=>e(()=>E(()=>j(r)));d=r,h=null;try{return C(o,!0)}finally{h=n,d=s}}function ce(e,t){t=t?Object.assign({},O,t):O;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(i=i(n.value)),ee(n,i));return[z.bind(n),s]}function R(e,t,n){const s=V(e,t,!1,m);L(s)}function ae(e,t,n){Q=ye;const s=V(e,t,!1,m),i=K&&se(d,K.id);i&&(s.suspense=i),s.user=!0,S?S.push(s):L(s)}function he(e,t,n){n=n?Object.assign({},O,n):O;const s=V(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,L(s),z.bind(s)}function Ne(e){return C(e,!1)}function E(e){if(h===null)return e();const t=h;h=null;try{return e()}finally{h=t}}function $e(e,t,n){const s=Array.isArray(e);let i,r=n&&n.defer;return o=>{let l;if(s){l=Array(e.length);for(let c=0;c<e.length;c++)l[c]=e[c]()}else l=e();if(r){r=!1;return}const a=E(()=>t(l,i,o));return i=l,a}}function He(e){ae(()=>E(e))}function de(e){return d===null||(d.cleanups===null?d.cleanups=[e]:d.cleanups.push(e)),e}function Le(){return h}function Me(){return d}function ke(e,t){const n=d,s=h;d=e,h=null;try{return C(t,!0)}catch(i){Y(i)}finally{d=n,h=s}}let K;function z(){const e=T;if(this.sources&&(this.state||e))if(this.state===m||e)L(this);else{const t=g;g=null,C(()=>q(this),!1),g=t}if(h){const t=this.observers?this.observers.length:0;h.sources?(h.sources.push(this),h.sourceSlots.push(t)):(h.sources=[this],h.sourceSlots=[t]),this.observers?(this.observers.push(h),this.observerSlots.push(h.sources.length-1)):(this.observers=[h],this.observerSlots=[h.sources.length-1])}return this.value}function ee(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&C(()=>{for(let i=0;i<e.observers.length;i+=1){const r=e.observers[i],o=T&&T.running;o&&T.disposed.has(r),(o&&!r.tState||!o&&!r.state)&&(r.pure?g.push(r):S.push(r),r.observers&&ne(r)),o||(r.state=m)}if(g.length>1e6)throw g=[],new Error},!1)),t}function L(e){if(!e.fn)return;j(e);const t=d,n=h,s=P;h=d=e,pe(e,e.value,s),h=n,d=t}function pe(e,t,n){let s;try{s=e.fn(t)}catch(i){return e.pure&&(e.state=m,e.owned&&e.owned.forEach(j),e.owned=null),e.updatedAt=n+1,Y(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?ee(e,s):e.value=s,e.updatedAt=n)}function V(e,t,n,s=m,i){const r={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:d,context:null,pure:n};return d===null||d!==Z&&(d.owned?d.owned.push(r):d.owned=[r]),r}function B(e){const t=T;if(e.state===0||t)return;if(e.state===U||t)return q(e);if(e.suspense&&E(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<P);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===m||t)L(e);else if(e.state===U||t){const i=g;g=null,C(()=>q(e,n[0]),!1),g=i}}function C(e,t){if(g)return e();let n=!1;t||(g=[]),S?n=!0:S=[],P++;try{const s=e();return ge(n),s}catch(s){n||(S=null),g=null,Y(s)}}function ge(e){if(g&&(te(g),g=null),e)return;const t=S;S=null,t.length&&C(()=>Q(t),!1)}function te(e){for(let t=0;t<e.length;t++)B(e[t])}function ye(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:B(s)}for(u.context&&_(),t=0;t<n;t++)B(e[t])}function q(e,t){const n=T;e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];i.sources&&(i.state===m||n?i!==t&&(!i.updatedAt||i.updatedAt<P)&&B(i):(i.state===U||n)&&q(i,t))}}function ne(e){const t=T;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=U,s.pure?g.push(s):S.push(s),s.observers&&ne(s))}}function j(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const r=i.pop(),o=n.observerSlots.pop();s<i.length&&(r.sourceSlots[o]=s,i[s]=r,n.observerSlots[s]=o)}}if(e.owned){for(t=0;t<e.owned.length;t++)j(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function we(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function Y(e){throw e=we(e),e}function se(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:se(e.owner,t):void 0}const be=Symbol("fallback");function W(e){for(let t=0;t<e.length;t++)e[t]()}function xe(e,t,n={}){let s=[],i=[],r=[],o=0,l=t.length>1?[]:null;return de(()=>W(r)),()=>{let a=e()||[],c,f;return a[ue],E(()=>{let p=a.length,w,v,H,M,k,b,x,A,N;if(p===0)o!==0&&(W(r),r=[],s=[],i=[],o=0,l&&(l=[])),n.fallback&&(s=[be],i[0]=I(re=>(r[0]=re,n.fallback())),o=1);else if(o===0){for(i=new Array(p),f=0;f<p;f++)s[f]=a[f],i[f]=I(y);o=p}else{for(H=new Array(p),M=new Array(p),l&&(k=new Array(p)),b=0,x=Math.min(o,p);b<x&&s[b]===a[b];b++);for(x=o-1,A=p-1;x>=b&&A>=b&&s[x]===a[A];x--,A--)H[A]=i[x],M[A]=r[x],l&&(k[A]=l[x]);for(w=new Map,v=new Array(A+1),f=A;f>=b;f--)N=a[f],c=w.get(N),v[f]=c===void 0?-1:c,w.set(N,f);for(c=b;c<=x;c++)N=s[c],f=w.get(N),f!==void 0&&f!==-1?(H[f]=i[c],M[f]=r[c],l&&(k[f]=l[c]),f=v[f],w.set(N,f)):r[c]();for(f=b;f<p;f++)f in H?(i[f]=H[f],r[f]=M[f],l&&(l[f]=k[f],l[f](f))):i[f]=I(y);i=i.slice(0,o=p),s=a.slice(0)}return i});function y(p){if(r[f]=p,l){const[w,v]=ce(f);return l[f]=v,t(a[f],w)}return t(a[f])}}}let ie=!1;function Ae(){ie=!0}function Ie(e,t){if(ie&&u.context){const n=u.context;_(oe());const s=E(()=>e(t||{}));return _(n),s}return E(()=>e(t||{}))}function Oe(e){const t="fallback"in e&&{fallback:()=>e.fallback};return he(xe(()=>e.each,e.children,t||void 0))}function Se(e,t,n){let s=n.length,i=t.length,r=s,o=0,l=0,a=t[i-1].nextSibling,c=null;for(;o<i||l<r;){if(t[o]===n[l]){o++,l++;continue}for(;t[i-1]===n[r-1];)i--,r--;if(i===o){const f=r<s?l?n[l-1].nextSibling:n[r-l]:a;for(;l<r;)e.insertBefore(n[l++],f)}else if(r===l)for(;o<i;)(!c||!c.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[r-1]&&n[l]===t[i-1]){const f=t[--i].nextSibling;e.insertBefore(n[l++],t[o++].nextSibling),e.insertBefore(n[--r],f),t[i]=n[r]}else{if(!c){c=new Map;let y=l;for(;y<r;)c.set(n[y],y++)}const f=c.get(t[o]);if(f!=null)if(l<f&&f<r){let y=o,p=1,w;for(;++y<i&&y<r&&!((w=c.get(t[y]))==null||w!==f+p);)p++;if(p>f-l){const v=t[o];for(;l<f;)e.insertBefore(n[l++],v)}else e.replaceChild(n[l++],t[o++])}else o++;else t[o++].remove()}}}const X="_$DX_DELEGATE";function Ee(e,t,n,s={}){let i;return I(r=>{i=r,t===document?e():me(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{i(),t.textContent=""}}function Ue(e,t,n){const s=document.createElement("template");if(s.innerHTML=e,t&&s.innerHTML.split("<").length-1!==t)throw`The browser resolved template HTML does not match JSX input:
${s.innerHTML}

${e}. Is your HTML properly formed?`;let i=s.content.firstChild;return n&&(i=i.firstChild),i}function Be(e,t=window.document){const n=t[X]||(t[X]=new Set);for(let s=0,i=e.length;s<i;s++){const r=e[s];n.has(r)||(n.add(r),t.addEventListener(r,le))}}function qe(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function De(e,t){t==null?e.removeAttribute("class"):e.className=t}function Pe(e,t){!u.context&&(e.innerHTML=t)}function je(e,t,n){return E(()=>e(t,n))}function me(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return D(e,t,s,n);R(i=>D(e,t(),i,n),s)}function ve(e,t,n={}){u.completed=globalThis._$HY.completed,u.events=globalThis._$HY.events,u.load=globalThis._$HY.load,u.gather=i=>J(t,i),u.registry=new Map,u.context={id:n.renderId||"",count:0},J(t,n.renderId);const s=Ee(e,t,[...t.childNodes],n);return u.context=null,s}function _e(e){let t,n;if(!u.context||!(t=u.registry.get(n=Te()))){if(u.context&&console.warn("Unable to find DOM nodes for hydration key:",n),!e)throw new Error("Unrecoverable Hydration Mismatch. No template for key: "+n);return e.cloneNode(!0)}return u.completed&&u.completed.add(t),u.registry.delete(n),t}function Re(e){let t=e,n=0,s=[];if(u.context)for(;t;){if(t.nodeType===8){const i=t.nodeValue;if(i==="#")n++;else if(i==="/"){if(n===0)return[t,s];n--}}s.push(t),t=t.nextSibling}return[t,s]}function Fe(){u.events&&!u.events.queued&&(queueMicrotask(()=>{const{completed:e,events:t}=u;for(t.queued=!1;t.length;){const[n,s]=t[0];if(!e.has(n))return;le(s),t.shift()}}),u.events.queued=!0)}function le(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),u.registry&&!u.done&&(u.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>{for(;s&&s.nodeType!==8&&s.nodeValue!=="pl-"+e;){let i=s.nextSibling;s.remove(),s=i}s&&s.remove()}));n;){const s=n[t];if(s&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?s.call(n,i,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function D(e,t,n,s,i){for(u.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const r=typeof t,o=s!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,r==="string"||r==="number"){if(u.context)return n;if(r==="number"&&(t=t.toString()),o){let l=n[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),n=$(e,n,s,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||r==="boolean"){if(u.context)return n;n=$(e,n,s)}else{if(r==="function")return R(()=>{let l=t();for(;typeof l=="function";)l=l();n=D(e,l,n,s)}),()=>n;if(Array.isArray(t)){const l=[],a=n&&Array.isArray(n);if(F(l,t,n,i))return R(()=>n=D(e,l,n,s,!0)),()=>n;if(u.context){if(!l.length)return n;for(let c=0;c<l.length;c++)if(l[c].parentNode)return n=l}if(l.length===0){if(n=$(e,n,s),o)return n}else a?n.length===0?G(e,l,s):Se(e,n,l):(n&&$(e),G(e,l));n=l}else if(t instanceof Node){if(u.context&&t.parentNode)return n=o?[t]:t;if(Array.isArray(n)){if(o)return n=$(e,n,s,t);$(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function F(e,t,n,s){let i=!1;for(let r=0,o=t.length;r<o;r++){let l=t[r],a=n&&n[r];if(l instanceof Node)e.push(l);else if(!(l==null||l===!0||l===!1))if(Array.isArray(l))i=F(e,l,a)||i;else if(typeof l=="function")if(s){for(;typeof l=="function";)l=l();i=F(e,Array.isArray(l)?l:[l],Array.isArray(a)?a:[a])||i}else e.push(l),i=!0;else{const c=String(l);c==="<!>"?a&&a.nodeType===8&&e.push(a):a&&a.nodeType===3?(a.data=c,e.push(a)):e.push(document.createTextNode(c))}}return i}function G(e,t,n=null){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function $(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let r=!1;for(let o=t.length-1;o>=0;o--){const l=t[o];if(i!==l){const a=l.parentNode===e;!r&&!o?a?e.replaceChild(i,l):e.insertBefore(i,n):a&&l.remove()}else r=!0}}else e.insertBefore(i,n);return[i]}function J(e,t){const n=e.querySelectorAll("*[data-hk]");for(let s=0;s<n.length;s++){const i=n[s],r=i.getAttribute("data-hk");(!t||r.startsWith(t))&&!u.registry.has(r)&&u.registry.set(r,i)}}function Te(){const e=u.context;return`${e.id}${e.count++}`}const Ve=(...e)=>(Ae(),ve(...e));export{Ce as $,Oe as F,he as a,ae as b,ce as c,Be as d,R as e,Re as f,_e as g,Ie as h,me as i,De as j,Pe as k,ue as l,Le as m,Ne as n,He as o,Me as p,de as q,Fe as r,qe as s,Ue as t,je as u,$e as v,ke as w,u as x,Ee as y,Ve as z};
