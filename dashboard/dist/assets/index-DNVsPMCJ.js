(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var vm={exports:{}},Nl={},xm={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var La=Symbol.for("react.element"),vv=Symbol.for("react.portal"),xv=Symbol.for("react.fragment"),yv=Symbol.for("react.strict_mode"),Sv=Symbol.for("react.profiler"),Mv=Symbol.for("react.provider"),Ev=Symbol.for("react.context"),wv=Symbol.for("react.forward_ref"),Tv=Symbol.for("react.suspense"),Av=Symbol.for("react.memo"),Cv=Symbol.for("react.lazy"),sh=Symbol.iterator;function Rv(t){return t===null||typeof t!="object"?null:(t=sh&&t[sh]||t["@@iterator"],typeof t=="function"?t:null)}var ym={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Sm=Object.assign,Mm={};function Rs(t,e,n){this.props=t,this.context=e,this.refs=Mm,this.updater=n||ym}Rs.prototype.isReactComponent={};Rs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Rs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Em(){}Em.prototype=Rs.prototype;function Hd(t,e,n){this.props=t,this.context=e,this.refs=Mm,this.updater=n||ym}var Vd=Hd.prototype=new Em;Vd.constructor=Hd;Sm(Vd,Rs.prototype);Vd.isPureReactComponent=!0;var ah=Array.isArray,wm=Object.prototype.hasOwnProperty,Gd={current:null},Tm={key:!0,ref:!0,__self:!0,__source:!0};function Am(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)wm.call(e,i)&&!Tm.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:La,type:t,key:s,ref:a,props:r,_owner:Gd.current}}function bv(t,e){return{$$typeof:La,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function jd(t){return typeof t=="object"&&t!==null&&t.$$typeof===La}function Pv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var oh=/\/+/g;function tc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Pv(""+t.key):e.toString(36)}function Io(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case La:case vv:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+tc(a,0):i,ah(r)?(n="",t!=null&&(n=t.replace(oh,"$&/")+"/"),Io(r,e,n,"",function(c){return c})):r!=null&&(jd(r)&&(r=bv(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(oh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",ah(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+tc(s,o);a+=Io(s,e,n,l,r)}else if(l=Rv(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+tc(s,o++),a+=Io(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function ja(t,e,n){if(t==null)return t;var i=[],r=0;return Io(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Lv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Yt={current:null},Uo={transition:null},Nv={ReactCurrentDispatcher:Yt,ReactCurrentBatchConfig:Uo,ReactCurrentOwner:Gd};function Cm(){throw Error("act(...) is not supported in production builds of React.")}je.Children={map:ja,forEach:function(t,e,n){ja(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ja(t,function(){e++}),e},toArray:function(t){return ja(t,function(e){return e})||[]},only:function(t){if(!jd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};je.Component=Rs;je.Fragment=xv;je.Profiler=Sv;je.PureComponent=Hd;je.StrictMode=yv;je.Suspense=Tv;je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nv;je.act=Cm;je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Sm({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Gd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)wm.call(e,l)&&!Tm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:La,type:t.type,key:r,ref:s,props:i,_owner:a}};je.createContext=function(t){return t={$$typeof:Ev,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Mv,_context:t},t.Consumer=t};je.createElement=Am;je.createFactory=function(t){var e=Am.bind(null,t);return e.type=t,e};je.createRef=function(){return{current:null}};je.forwardRef=function(t){return{$$typeof:wv,render:t}};je.isValidElement=jd;je.lazy=function(t){return{$$typeof:Cv,_payload:{_status:-1,_result:t},_init:Lv}};je.memo=function(t,e){return{$$typeof:Av,type:t,compare:e===void 0?null:e}};je.startTransition=function(t){var e=Uo.transition;Uo.transition={};try{t()}finally{Uo.transition=e}};je.unstable_act=Cm;je.useCallback=function(t,e){return Yt.current.useCallback(t,e)};je.useContext=function(t){return Yt.current.useContext(t)};je.useDebugValue=function(){};je.useDeferredValue=function(t){return Yt.current.useDeferredValue(t)};je.useEffect=function(t,e){return Yt.current.useEffect(t,e)};je.useId=function(){return Yt.current.useId()};je.useImperativeHandle=function(t,e,n){return Yt.current.useImperativeHandle(t,e,n)};je.useInsertionEffect=function(t,e){return Yt.current.useInsertionEffect(t,e)};je.useLayoutEffect=function(t,e){return Yt.current.useLayoutEffect(t,e)};je.useMemo=function(t,e){return Yt.current.useMemo(t,e)};je.useReducer=function(t,e,n){return Yt.current.useReducer(t,e,n)};je.useRef=function(t){return Yt.current.useRef(t)};je.useState=function(t){return Yt.current.useState(t)};je.useSyncExternalStore=function(t,e,n){return Yt.current.useSyncExternalStore(t,e,n)};je.useTransition=function(){return Yt.current.useTransition()};je.version="18.3.1";xm.exports=je;var he=xm.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dv=he,Iv=Symbol.for("react.element"),Uv=Symbol.for("react.fragment"),Fv=Object.prototype.hasOwnProperty,Ov=Dv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,kv={key:!0,ref:!0,__self:!0,__source:!0};function Rm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)Fv.call(e,i)&&!kv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Iv,type:t,key:s,ref:a,props:r,_owner:Ov.current}}Nl.Fragment=Uv;Nl.jsx=Rm;Nl.jsxs=Rm;vm.exports=Nl;var g=vm.exports,bm={exports:{}},vn={},Pm={exports:{}},Lm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,K){var Z=N.length;N.push(K);e:for(;0<Z;){var ae=Z-1>>>1,Re=N[ae];if(0<r(Re,K))N[ae]=K,N[Z]=Re,Z=ae;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var K=N[0],Z=N.pop();if(Z!==K){N[0]=Z;e:for(var ae=0,Re=N.length,Ge=Re>>>1;ae<Ge;){var $=2*(ae+1)-1,ie=N[$],W=$+1,te=N[W];if(0>r(ie,Z))W<Re&&0>r(te,ie)?(N[ae]=te,N[W]=Z,ae=W):(N[ae]=ie,N[$]=Z,ae=$);else if(W<Re&&0>r(te,Z))N[ae]=te,N[W]=Z,ae=W;else break e}}return K}function r(N,K){var Z=N.sortIndex-K.sortIndex;return Z!==0?Z:N.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],d=1,h=null,f=3,m=!1,_=!1,S=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(N){for(var K=n(c);K!==null;){if(K.callback===null)i(c);else if(K.startTime<=N)i(c),K.sortIndex=K.expirationTime,e(l,K);else break;K=n(c)}}function w(N){if(S=!1,x(N),!_)if(n(l)!==null)_=!0,O(b);else{var K=n(c);K!==null&&q(w,K.startTime-N)}}function b(N,K){_=!1,S&&(S=!1,u(P),P=-1),m=!0;var Z=f;try{for(x(K),h=n(l);h!==null&&(!(h.expirationTime>K)||N&&!T());){var ae=h.callback;if(typeof ae=="function"){h.callback=null,f=h.priorityLevel;var Re=ae(h.expirationTime<=K);K=t.unstable_now(),typeof Re=="function"?h.callback=Re:h===n(l)&&i(l),x(K)}else i(l);h=n(l)}if(h!==null)var Ge=!0;else{var $=n(c);$!==null&&q(w,$.startTime-K),Ge=!1}return Ge}finally{h=null,f=Z,m=!1}}var E=!1,M=null,P=-1,B=5,y=-1;function T(){return!(t.unstable_now()-y<B)}function k(){if(M!==null){var N=t.unstable_now();y=N;var K=!0;try{K=M(!0,N)}finally{K?U():(E=!1,M=null)}}else E=!1}var U;if(typeof v=="function")U=function(){v(k)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,X=j.port2;j.port1.onmessage=k,U=function(){X.postMessage(null)}}else U=function(){p(k,0)};function O(N){M=N,E||(E=!0,U())}function q(N,K){P=p(function(){N(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,O(b))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(f){case 1:case 2:case 3:var K=3;break;default:K=f}var Z=f;f=K;try{return N()}finally{f=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,K){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var Z=f;f=N;try{return K()}finally{f=Z}},t.unstable_scheduleCallback=function(N,K,Z){var ae=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ae+Z:ae):Z=ae,N){case 1:var Re=-1;break;case 2:Re=250;break;case 5:Re=1073741823;break;case 4:Re=1e4;break;default:Re=5e3}return Re=Z+Re,N={id:d++,callback:K,priorityLevel:N,startTime:Z,expirationTime:Re,sortIndex:-1},Z>ae?(N.sortIndex=Z,e(c,N),n(l)===null&&N===n(c)&&(S?(u(P),P=-1):S=!0,q(w,Z-ae))):(N.sortIndex=Re,e(l,N),_||m||(_=!0,O(b))),N},t.unstable_shouldYield=T,t.unstable_wrapCallback=function(N){var K=f;return function(){var Z=f;f=K;try{return N.apply(this,arguments)}finally{f=Z}}}})(Lm);Pm.exports=Lm;var Bv=Pm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zv=he,gn=Bv;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Nm=new Set,fa={};function Rr(t,e){ms(t,e),ms(t+"Capture",e)}function ms(t,e){for(fa[t]=e,t=0;t<e.length;t++)Nm.add(e[t])}var pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ou=Object.prototype.hasOwnProperty,Hv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lh={},ch={};function Vv(t){return ou.call(ch,t)?!0:ou.call(lh,t)?!1:Hv.test(t)?ch[t]=!0:(lh[t]=!0,!1)}function Gv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function jv(t,e,n,i){if(e===null||typeof e>"u"||Gv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function qt(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ot[t]=new qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ot[e]=new qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ot[t]=new qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ot[t]=new qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ot[t]=new qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ot[t]=new qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ot[t]=new qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ot[t]=new qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ot[t]=new qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Wd=/[\-:]([a-z])/g;function Xd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Wd,Xd);Ot[e]=new qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Wd,Xd);Ot[e]=new qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Wd,Xd);Ot[e]=new qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ot[t]=new qt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ot.xlinkHref=new qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ot[t]=new qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function $d(t,e,n,i){var r=Ot.hasOwnProperty(e)?Ot[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(jv(e,n,r,i)&&(n=null),i||r===null?Vv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var xi=zv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wa=Symbol.for("react.element"),$r=Symbol.for("react.portal"),Yr=Symbol.for("react.fragment"),Yd=Symbol.for("react.strict_mode"),lu=Symbol.for("react.profiler"),Dm=Symbol.for("react.provider"),Im=Symbol.for("react.context"),qd=Symbol.for("react.forward_ref"),cu=Symbol.for("react.suspense"),uu=Symbol.for("react.suspense_list"),Kd=Symbol.for("react.memo"),bi=Symbol.for("react.lazy"),Um=Symbol.for("react.offscreen"),uh=Symbol.iterator;function Ds(t){return t===null||typeof t!="object"?null:(t=uh&&t[uh]||t["@@iterator"],typeof t=="function"?t:null)}var gt=Object.assign,nc;function qs(t){if(nc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);nc=e&&e[1]||""}return`
`+nc+t}var ic=!1;function rc(t,e){if(!t||ic)return"";ic=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{ic=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?qs(t):""}function Wv(t){switch(t.tag){case 5:return qs(t.type);case 16:return qs("Lazy");case 13:return qs("Suspense");case 19:return qs("SuspenseList");case 0:case 2:case 15:return t=rc(t.type,!1),t;case 11:return t=rc(t.type.render,!1),t;case 1:return t=rc(t.type,!0),t;default:return""}}function du(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Yr:return"Fragment";case $r:return"Portal";case lu:return"Profiler";case Yd:return"StrictMode";case cu:return"Suspense";case uu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Im:return(t.displayName||"Context")+".Consumer";case Dm:return(t._context.displayName||"Context")+".Provider";case qd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Kd:return e=t.displayName||null,e!==null?e:du(t.type)||"Memo";case bi:e=t._payload,t=t._init;try{return du(t(e))}catch{}}return null}function Xv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return du(e);case 8:return e===Yd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Xi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Fm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function $v(t){var e=Fm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Xa(t){t._valueTracker||(t._valueTracker=$v(t))}function Om(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Fm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function el(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function fu(t,e){var n=e.checked;return gt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function dh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Xi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function km(t,e){e=e.checked,e!=null&&$d(t,"checked",e,!1)}function hu(t,e){km(t,e);var n=Xi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?pu(t,e.type,n):e.hasOwnProperty("defaultValue")&&pu(t,e.type,Xi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function fh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function pu(t,e,n){(e!=="number"||el(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ks=Array.isArray;function as(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Xi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function mu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return gt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function hh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(Ks(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Xi(n)}}function Bm(t,e){var n=Xi(e.value),i=Xi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function ph(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function zm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?zm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var $a,Hm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for($a=$a||document.createElement("div"),$a.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=$a.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ha(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ta={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Yv=["Webkit","ms","Moz","O"];Object.keys(ta).forEach(function(t){Yv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ta[e]=ta[t]})});function Vm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ta.hasOwnProperty(t)&&ta[t]?(""+e).trim():e+"px"}function Gm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Vm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var qv=gt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _u(t,e){if(e){if(qv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function vu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xu=null;function Zd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var yu=null,os=null,ls=null;function mh(t){if(t=Ia(t)){if(typeof yu!="function")throw Error(se(280));var e=t.stateNode;e&&(e=Ol(e),yu(t.stateNode,t.type,e))}}function jm(t){os?ls?ls.push(t):ls=[t]:os=t}function Wm(){if(os){var t=os,e=ls;if(ls=os=null,mh(t),e)for(t=0;t<e.length;t++)mh(e[t])}}function Xm(t,e){return t(e)}function $m(){}var sc=!1;function Ym(t,e,n){if(sc)return t(e,n);sc=!0;try{return Xm(t,e,n)}finally{sc=!1,(os!==null||ls!==null)&&($m(),Wm())}}function pa(t,e){var n=t.stateNode;if(n===null)return null;var i=Ol(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var Su=!1;if(pi)try{var Is={};Object.defineProperty(Is,"passive",{get:function(){Su=!0}}),window.addEventListener("test",Is,Is),window.removeEventListener("test",Is,Is)}catch{Su=!1}function Kv(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var na=!1,tl=null,nl=!1,Mu=null,Zv={onError:function(t){na=!0,tl=t}};function Qv(t,e,n,i,r,s,a,o,l){na=!1,tl=null,Kv.apply(Zv,arguments)}function Jv(t,e,n,i,r,s,a,o,l){if(Qv.apply(this,arguments),na){if(na){var c=tl;na=!1,tl=null}else throw Error(se(198));nl||(nl=!0,Mu=c)}}function br(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function qm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function gh(t){if(br(t)!==t)throw Error(se(188))}function e0(t){var e=t.alternate;if(!e){if(e=br(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return gh(r),t;if(s===i)return gh(r),e;s=s.sibling}throw Error(se(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function Km(t){return t=e0(t),t!==null?Zm(t):null}function Zm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Zm(t);if(e!==null)return e;t=t.sibling}return null}var Qm=gn.unstable_scheduleCallback,_h=gn.unstable_cancelCallback,t0=gn.unstable_shouldYield,n0=gn.unstable_requestPaint,St=gn.unstable_now,i0=gn.unstable_getCurrentPriorityLevel,Qd=gn.unstable_ImmediatePriority,Jm=gn.unstable_UserBlockingPriority,il=gn.unstable_NormalPriority,r0=gn.unstable_LowPriority,eg=gn.unstable_IdlePriority,Dl=null,Zn=null;function s0(t){if(Zn&&typeof Zn.onCommitFiberRoot=="function")try{Zn.onCommitFiberRoot(Dl,t,void 0,(t.current.flags&128)===128)}catch{}}var Vn=Math.clz32?Math.clz32:l0,a0=Math.log,o0=Math.LN2;function l0(t){return t>>>=0,t===0?32:31-(a0(t)/o0|0)|0}var Ya=64,qa=4194304;function Zs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function rl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Zs(o):(s&=a,s!==0&&(i=Zs(s)))}else a=n&~r,a!==0?i=Zs(a):s!==0&&(i=Zs(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Vn(e),r=1<<n,i|=t[n],e&=~r;return i}function c0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function u0(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Vn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=c0(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Eu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function tg(){var t=Ya;return Ya<<=1,!(Ya&4194240)&&(Ya=64),t}function ac(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Na(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Vn(e),t[e]=n}function d0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Vn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Jd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Vn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var it=0;function ng(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ig,ef,rg,sg,ag,wu=!1,Ka=[],Fi=null,Oi=null,ki=null,ma=new Map,ga=new Map,Li=[],f0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vh(t,e){switch(t){case"focusin":case"focusout":Fi=null;break;case"dragenter":case"dragleave":Oi=null;break;case"mouseover":case"mouseout":ki=null;break;case"pointerover":case"pointerout":ma.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ga.delete(e.pointerId)}}function Us(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ia(e),e!==null&&ef(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function h0(t,e,n,i,r){switch(e){case"focusin":return Fi=Us(Fi,t,e,n,i,r),!0;case"dragenter":return Oi=Us(Oi,t,e,n,i,r),!0;case"mouseover":return ki=Us(ki,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ma.set(s,Us(ma.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ga.set(s,Us(ga.get(s)||null,t,e,n,i,r)),!0}return!1}function og(t){var e=hr(t.target);if(e!==null){var n=br(e);if(n!==null){if(e=n.tag,e===13){if(e=qm(n),e!==null){t.blockedOn=e,ag(t.priority,function(){rg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Fo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Tu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);xu=i,n.target.dispatchEvent(i),xu=null}else return e=Ia(n),e!==null&&ef(e),t.blockedOn=n,!1;e.shift()}return!0}function xh(t,e,n){Fo(t)&&n.delete(e)}function p0(){wu=!1,Fi!==null&&Fo(Fi)&&(Fi=null),Oi!==null&&Fo(Oi)&&(Oi=null),ki!==null&&Fo(ki)&&(ki=null),ma.forEach(xh),ga.forEach(xh)}function Fs(t,e){t.blockedOn===e&&(t.blockedOn=null,wu||(wu=!0,gn.unstable_scheduleCallback(gn.unstable_NormalPriority,p0)))}function _a(t){function e(r){return Fs(r,t)}if(0<Ka.length){Fs(Ka[0],t);for(var n=1;n<Ka.length;n++){var i=Ka[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Fi!==null&&Fs(Fi,t),Oi!==null&&Fs(Oi,t),ki!==null&&Fs(ki,t),ma.forEach(e),ga.forEach(e),n=0;n<Li.length;n++)i=Li[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Li.length&&(n=Li[0],n.blockedOn===null);)og(n),n.blockedOn===null&&Li.shift()}var cs=xi.ReactCurrentBatchConfig,sl=!0;function m0(t,e,n,i){var r=it,s=cs.transition;cs.transition=null;try{it=1,tf(t,e,n,i)}finally{it=r,cs.transition=s}}function g0(t,e,n,i){var r=it,s=cs.transition;cs.transition=null;try{it=4,tf(t,e,n,i)}finally{it=r,cs.transition=s}}function tf(t,e,n,i){if(sl){var r=Tu(t,e,n,i);if(r===null)gc(t,e,i,al,n),vh(t,i);else if(h0(r,t,e,n,i))i.stopPropagation();else if(vh(t,i),e&4&&-1<f0.indexOf(t)){for(;r!==null;){var s=Ia(r);if(s!==null&&ig(s),s=Tu(t,e,n,i),s===null&&gc(t,e,i,al,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else gc(t,e,i,null,n)}}var al=null;function Tu(t,e,n,i){if(al=null,t=Zd(i),t=hr(t),t!==null)if(e=br(t),e===null)t=null;else if(n=e.tag,n===13){if(t=qm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return al=t,null}function lg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(i0()){case Qd:return 1;case Jm:return 4;case il:case r0:return 16;case eg:return 536870912;default:return 16}default:return 16}}var Ii=null,nf=null,Oo=null;function cg(){if(Oo)return Oo;var t,e=nf,n=e.length,i,r="value"in Ii?Ii.value:Ii.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Oo=r.slice(t,1<i?1-i:void 0)}function ko(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Za(){return!0}function yh(){return!1}function xn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Za:yh,this.isPropagationStopped=yh,this}return gt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Za)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Za)},persist:function(){},isPersistent:Za}),e}var bs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rf=xn(bs),Da=gt({},bs,{view:0,detail:0}),_0=xn(Da),oc,lc,Os,Il=gt({},Da,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Os&&(Os&&t.type==="mousemove"?(oc=t.screenX-Os.screenX,lc=t.screenY-Os.screenY):lc=oc=0,Os=t),oc)},movementY:function(t){return"movementY"in t?t.movementY:lc}}),Sh=xn(Il),v0=gt({},Il,{dataTransfer:0}),x0=xn(v0),y0=gt({},Da,{relatedTarget:0}),cc=xn(y0),S0=gt({},bs,{animationName:0,elapsedTime:0,pseudoElement:0}),M0=xn(S0),E0=gt({},bs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),w0=xn(E0),T0=gt({},bs,{data:0}),Mh=xn(T0),A0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},C0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},R0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function b0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=R0[t])?!!e[t]:!1}function sf(){return b0}var P0=gt({},Da,{key:function(t){if(t.key){var e=A0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ko(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?C0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sf,charCode:function(t){return t.type==="keypress"?ko(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ko(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),L0=xn(P0),N0=gt({},Il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Eh=xn(N0),D0=gt({},Da,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sf}),I0=xn(D0),U0=gt({},bs,{propertyName:0,elapsedTime:0,pseudoElement:0}),F0=xn(U0),O0=gt({},Il,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),k0=xn(O0),B0=[9,13,27,32],af=pi&&"CompositionEvent"in window,ia=null;pi&&"documentMode"in document&&(ia=document.documentMode);var z0=pi&&"TextEvent"in window&&!ia,ug=pi&&(!af||ia&&8<ia&&11>=ia),wh=" ",Th=!1;function dg(t,e){switch(t){case"keyup":return B0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var qr=!1;function H0(t,e){switch(t){case"compositionend":return fg(e);case"keypress":return e.which!==32?null:(Th=!0,wh);case"textInput":return t=e.data,t===wh&&Th?null:t;default:return null}}function V0(t,e){if(qr)return t==="compositionend"||!af&&dg(t,e)?(t=cg(),Oo=nf=Ii=null,qr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ug&&e.locale!=="ko"?null:e.data;default:return null}}var G0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ah(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!G0[t.type]:e==="textarea"}function hg(t,e,n,i){jm(i),e=ol(e,"onChange"),0<e.length&&(n=new rf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ra=null,va=null;function j0(t){wg(t,0)}function Ul(t){var e=Qr(t);if(Om(e))return t}function W0(t,e){if(t==="change")return e}var pg=!1;if(pi){var uc;if(pi){var dc="oninput"in document;if(!dc){var Ch=document.createElement("div");Ch.setAttribute("oninput","return;"),dc=typeof Ch.oninput=="function"}uc=dc}else uc=!1;pg=uc&&(!document.documentMode||9<document.documentMode)}function Rh(){ra&&(ra.detachEvent("onpropertychange",mg),va=ra=null)}function mg(t){if(t.propertyName==="value"&&Ul(va)){var e=[];hg(e,va,t,Zd(t)),Ym(j0,e)}}function X0(t,e,n){t==="focusin"?(Rh(),ra=e,va=n,ra.attachEvent("onpropertychange",mg)):t==="focusout"&&Rh()}function $0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ul(va)}function Y0(t,e){if(t==="click")return Ul(e)}function q0(t,e){if(t==="input"||t==="change")return Ul(e)}function K0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var jn=typeof Object.is=="function"?Object.is:K0;function xa(t,e){if(jn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!ou.call(e,r)||!jn(t[r],e[r]))return!1}return!0}function bh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ph(t,e){var n=bh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bh(n)}}function gg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?gg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function _g(){for(var t=window,e=el();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=el(t.document)}return e}function of(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Z0(t){var e=_g(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&gg(n.ownerDocument.documentElement,n)){if(i!==null&&of(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Ph(n,s);var a=Ph(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Q0=pi&&"documentMode"in document&&11>=document.documentMode,Kr=null,Au=null,sa=null,Cu=!1;function Lh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Cu||Kr==null||Kr!==el(i)||(i=Kr,"selectionStart"in i&&of(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),sa&&xa(sa,i)||(sa=i,i=ol(Au,"onSelect"),0<i.length&&(e=new rf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Kr)))}function Qa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Zr={animationend:Qa("Animation","AnimationEnd"),animationiteration:Qa("Animation","AnimationIteration"),animationstart:Qa("Animation","AnimationStart"),transitionend:Qa("Transition","TransitionEnd")},fc={},vg={};pi&&(vg=document.createElement("div").style,"AnimationEvent"in window||(delete Zr.animationend.animation,delete Zr.animationiteration.animation,delete Zr.animationstart.animation),"TransitionEvent"in window||delete Zr.transitionend.transition);function Fl(t){if(fc[t])return fc[t];if(!Zr[t])return t;var e=Zr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in vg)return fc[t]=e[n];return t}var xg=Fl("animationend"),yg=Fl("animationiteration"),Sg=Fl("animationstart"),Mg=Fl("transitionend"),Eg=new Map,Nh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ki(t,e){Eg.set(t,e),Rr(e,[t])}for(var hc=0;hc<Nh.length;hc++){var pc=Nh[hc],J0=pc.toLowerCase(),ex=pc[0].toUpperCase()+pc.slice(1);Ki(J0,"on"+ex)}Ki(xg,"onAnimationEnd");Ki(yg,"onAnimationIteration");Ki(Sg,"onAnimationStart");Ki("dblclick","onDoubleClick");Ki("focusin","onFocus");Ki("focusout","onBlur");Ki(Mg,"onTransitionEnd");ms("onMouseEnter",["mouseout","mouseover"]);ms("onMouseLeave",["mouseout","mouseover"]);ms("onPointerEnter",["pointerout","pointerover"]);ms("onPointerLeave",["pointerout","pointerover"]);Rr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qs));function Dh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Jv(i,e,void 0,t),t.currentTarget=null}function wg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Dh(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Dh(r,o,c),s=l}}}if(nl)throw t=Mu,nl=!1,Mu=null,t}function ct(t,e){var n=e[Nu];n===void 0&&(n=e[Nu]=new Set);var i=t+"__bubble";n.has(i)||(Tg(e,t,2,!1),n.add(i))}function mc(t,e,n){var i=0;e&&(i|=4),Tg(n,t,i,e)}var Ja="_reactListening"+Math.random().toString(36).slice(2);function ya(t){if(!t[Ja]){t[Ja]=!0,Nm.forEach(function(n){n!=="selectionchange"&&(tx.has(n)||mc(n,!1,t),mc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ja]||(e[Ja]=!0,mc("selectionchange",!1,e))}}function Tg(t,e,n,i){switch(lg(e)){case 1:var r=m0;break;case 4:r=g0;break;default:r=tf}n=r.bind(null,e,n,t),r=void 0,!Su||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function gc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=hr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Ym(function(){var c=s,d=Zd(n),h=[];e:{var f=Eg.get(t);if(f!==void 0){var m=rf,_=t;switch(t){case"keypress":if(ko(n)===0)break e;case"keydown":case"keyup":m=L0;break;case"focusin":_="focus",m=cc;break;case"focusout":_="blur",m=cc;break;case"beforeblur":case"afterblur":m=cc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Sh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=x0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=I0;break;case xg:case yg:case Sg:m=M0;break;case Mg:m=F0;break;case"scroll":m=_0;break;case"wheel":m=k0;break;case"copy":case"cut":case"paste":m=w0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Eh}var S=(e&4)!==0,p=!S&&t==="scroll",u=S?f!==null?f+"Capture":null:f;S=[];for(var v=c,x;v!==null;){x=v;var w=x.stateNode;if(x.tag===5&&w!==null&&(x=w,u!==null&&(w=pa(v,u),w!=null&&S.push(Sa(v,w,x)))),p)break;v=v.return}0<S.length&&(f=new m(f,_,null,n,d),h.push({event:f,listeners:S}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==xu&&(_=n.relatedTarget||n.fromElement)&&(hr(_)||_[mi]))break e;if((m||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=c,_=_?hr(_):null,_!==null&&(p=br(_),_!==p||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=c),m!==_)){if(S=Sh,w="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(S=Eh,w="onPointerLeave",u="onPointerEnter",v="pointer"),p=m==null?f:Qr(m),x=_==null?f:Qr(_),f=new S(w,v+"leave",m,n,d),f.target=p,f.relatedTarget=x,w=null,hr(d)===c&&(S=new S(u,v+"enter",_,n,d),S.target=x,S.relatedTarget=p,w=S),p=w,m&&_)t:{for(S=m,u=_,v=0,x=S;x;x=Nr(x))v++;for(x=0,w=u;w;w=Nr(w))x++;for(;0<v-x;)S=Nr(S),v--;for(;0<x-v;)u=Nr(u),x--;for(;v--;){if(S===u||u!==null&&S===u.alternate)break t;S=Nr(S),u=Nr(u)}S=null}else S=null;m!==null&&Ih(h,f,m,S,!1),_!==null&&p!==null&&Ih(h,p,_,S,!0)}}e:{if(f=c?Qr(c):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var b=W0;else if(Ah(f))if(pg)b=q0;else{b=$0;var E=X0}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(b=Y0);if(b&&(b=b(t,c))){hg(h,b,n,d);break e}E&&E(t,f,c),t==="focusout"&&(E=f._wrapperState)&&E.controlled&&f.type==="number"&&pu(f,"number",f.value)}switch(E=c?Qr(c):window,t){case"focusin":(Ah(E)||E.contentEditable==="true")&&(Kr=E,Au=c,sa=null);break;case"focusout":sa=Au=Kr=null;break;case"mousedown":Cu=!0;break;case"contextmenu":case"mouseup":case"dragend":Cu=!1,Lh(h,n,d);break;case"selectionchange":if(Q0)break;case"keydown":case"keyup":Lh(h,n,d)}var M;if(af)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else qr?dg(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(ug&&n.locale!=="ko"&&(qr||P!=="onCompositionStart"?P==="onCompositionEnd"&&qr&&(M=cg()):(Ii=d,nf="value"in Ii?Ii.value:Ii.textContent,qr=!0)),E=ol(c,P),0<E.length&&(P=new Mh(P,t,null,n,d),h.push({event:P,listeners:E}),M?P.data=M:(M=fg(n),M!==null&&(P.data=M)))),(M=z0?H0(t,n):V0(t,n))&&(c=ol(c,"onBeforeInput"),0<c.length&&(d=new Mh("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=M))}wg(h,e)})}function Sa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ol(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=pa(t,n),s!=null&&i.unshift(Sa(t,s,r)),s=pa(t,e),s!=null&&i.push(Sa(t,s,r))),t=t.return}return i}function Nr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ih(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=pa(n,s),l!=null&&a.unshift(Sa(n,l,o))):r||(l=pa(n,s),l!=null&&a.push(Sa(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var nx=/\r\n?/g,ix=/\u0000|\uFFFD/g;function Uh(t){return(typeof t=="string"?t:""+t).replace(nx,`
`).replace(ix,"")}function eo(t,e,n){if(e=Uh(e),Uh(t)!==e&&n)throw Error(se(425))}function ll(){}var Ru=null,bu=null;function Pu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Lu=typeof setTimeout=="function"?setTimeout:void 0,rx=typeof clearTimeout=="function"?clearTimeout:void 0,Fh=typeof Promise=="function"?Promise:void 0,sx=typeof queueMicrotask=="function"?queueMicrotask:typeof Fh<"u"?function(t){return Fh.resolve(null).then(t).catch(ax)}:Lu;function ax(t){setTimeout(function(){throw t})}function _c(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),_a(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);_a(e)}function Bi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Oh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ps=Math.random().toString(36).slice(2),qn="__reactFiber$"+Ps,Ma="__reactProps$"+Ps,mi="__reactContainer$"+Ps,Nu="__reactEvents$"+Ps,ox="__reactListeners$"+Ps,lx="__reactHandles$"+Ps;function hr(t){var e=t[qn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[mi]||n[qn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Oh(t);t!==null;){if(n=t[qn])return n;t=Oh(t)}return e}t=n,n=t.parentNode}return null}function Ia(t){return t=t[qn]||t[mi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Qr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function Ol(t){return t[Ma]||null}var Du=[],Jr=-1;function Zi(t){return{current:t}}function dt(t){0>Jr||(t.current=Du[Jr],Du[Jr]=null,Jr--)}function ot(t,e){Jr++,Du[Jr]=t.current,t.current=e}var $i={},jt=Zi($i),nn=Zi(!1),yr=$i;function gs(t,e){var n=t.type.contextTypes;if(!n)return $i;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function rn(t){return t=t.childContextTypes,t!=null}function cl(){dt(nn),dt(jt)}function kh(t,e,n){if(jt.current!==$i)throw Error(se(168));ot(jt,e),ot(nn,n)}function Ag(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,Xv(t)||"Unknown",r));return gt({},n,i)}function ul(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||$i,yr=jt.current,ot(jt,t),ot(nn,nn.current),!0}function Bh(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=Ag(t,e,yr),i.__reactInternalMemoizedMergedChildContext=t,dt(nn),dt(jt),ot(jt,t)):dt(nn),ot(nn,n)}var li=null,kl=!1,vc=!1;function Cg(t){li===null?li=[t]:li.push(t)}function cx(t){kl=!0,Cg(t)}function Qi(){if(!vc&&li!==null){vc=!0;var t=0,e=it;try{var n=li;for(it=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}li=null,kl=!1}catch(r){throw li!==null&&(li=li.slice(t+1)),Qm(Qd,Qi),r}finally{it=e,vc=!1}}return null}var es=[],ts=0,dl=null,fl=0,Mn=[],En=0,Sr=null,ci=1,ui="";function or(t,e){es[ts++]=fl,es[ts++]=dl,dl=t,fl=e}function Rg(t,e,n){Mn[En++]=ci,Mn[En++]=ui,Mn[En++]=Sr,Sr=t;var i=ci;t=ui;var r=32-Vn(i)-1;i&=~(1<<r),n+=1;var s=32-Vn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,ci=1<<32-Vn(e)+r|n<<r|i,ui=s+t}else ci=1<<s|n<<r|i,ui=t}function lf(t){t.return!==null&&(or(t,1),Rg(t,1,0))}function cf(t){for(;t===dl;)dl=es[--ts],es[ts]=null,fl=es[--ts],es[ts]=null;for(;t===Sr;)Sr=Mn[--En],Mn[En]=null,ui=Mn[--En],Mn[En]=null,ci=Mn[--En],Mn[En]=null}var mn=null,pn=null,ft=!1,kn=null;function bg(t,e){var n=Tn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function zh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,mn=t,pn=Bi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,mn=t,pn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Sr!==null?{id:ci,overflow:ui}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Tn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,mn=t,pn=null,!0):!1;default:return!1}}function Iu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Uu(t){if(ft){var e=pn;if(e){var n=e;if(!zh(t,e)){if(Iu(t))throw Error(se(418));e=Bi(n.nextSibling);var i=mn;e&&zh(t,e)?bg(i,n):(t.flags=t.flags&-4097|2,ft=!1,mn=t)}}else{if(Iu(t))throw Error(se(418));t.flags=t.flags&-4097|2,ft=!1,mn=t}}}function Hh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;mn=t}function to(t){if(t!==mn)return!1;if(!ft)return Hh(t),ft=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Pu(t.type,t.memoizedProps)),e&&(e=pn)){if(Iu(t))throw Pg(),Error(se(418));for(;e;)bg(t,e),e=Bi(e.nextSibling)}if(Hh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){pn=Bi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}pn=null}}else pn=mn?Bi(t.stateNode.nextSibling):null;return!0}function Pg(){for(var t=pn;t;)t=Bi(t.nextSibling)}function _s(){pn=mn=null,ft=!1}function uf(t){kn===null?kn=[t]:kn.push(t)}var ux=xi.ReactCurrentBatchConfig;function ks(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function no(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Vh(t){var e=t._init;return e(t._payload)}function Lg(t){function e(u,v){if(t){var x=u.deletions;x===null?(u.deletions=[v],u.flags|=16):x.push(v)}}function n(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function r(u,v){return u=Gi(u,v),u.index=0,u.sibling=null,u}function s(u,v,x){return u.index=x,t?(x=u.alternate,x!==null?(x=x.index,x<v?(u.flags|=2,v):x):(u.flags|=2,v)):(u.flags|=1048576,v)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,v,x,w){return v===null||v.tag!==6?(v=Tc(x,u.mode,w),v.return=u,v):(v=r(v,x),v.return=u,v)}function l(u,v,x,w){var b=x.type;return b===Yr?d(u,v,x.props.children,w,x.key):v!==null&&(v.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===bi&&Vh(b)===v.type)?(w=r(v,x.props),w.ref=ks(u,v,x),w.return=u,w):(w=Wo(x.type,x.key,x.props,null,u.mode,w),w.ref=ks(u,v,x),w.return=u,w)}function c(u,v,x,w){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=Ac(x,u.mode,w),v.return=u,v):(v=r(v,x.children||[]),v.return=u,v)}function d(u,v,x,w,b){return v===null||v.tag!==7?(v=xr(x,u.mode,w,b),v.return=u,v):(v=r(v,x),v.return=u,v)}function h(u,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Tc(""+v,u.mode,x),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Wa:return x=Wo(v.type,v.key,v.props,null,u.mode,x),x.ref=ks(u,null,v),x.return=u,x;case $r:return v=Ac(v,u.mode,x),v.return=u,v;case bi:var w=v._init;return h(u,w(v._payload),x)}if(Ks(v)||Ds(v))return v=xr(v,u.mode,x,null),v.return=u,v;no(u,v)}return null}function f(u,v,x,w){var b=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return b!==null?null:o(u,v,""+x,w);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Wa:return x.key===b?l(u,v,x,w):null;case $r:return x.key===b?c(u,v,x,w):null;case bi:return b=x._init,f(u,v,b(x._payload),w)}if(Ks(x)||Ds(x))return b!==null?null:d(u,v,x,w,null);no(u,x)}return null}function m(u,v,x,w,b){if(typeof w=="string"&&w!==""||typeof w=="number")return u=u.get(x)||null,o(v,u,""+w,b);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Wa:return u=u.get(w.key===null?x:w.key)||null,l(v,u,w,b);case $r:return u=u.get(w.key===null?x:w.key)||null,c(v,u,w,b);case bi:var E=w._init;return m(u,v,x,E(w._payload),b)}if(Ks(w)||Ds(w))return u=u.get(x)||null,d(v,u,w,b,null);no(v,w)}return null}function _(u,v,x,w){for(var b=null,E=null,M=v,P=v=0,B=null;M!==null&&P<x.length;P++){M.index>P?(B=M,M=null):B=M.sibling;var y=f(u,M,x[P],w);if(y===null){M===null&&(M=B);break}t&&M&&y.alternate===null&&e(u,M),v=s(y,v,P),E===null?b=y:E.sibling=y,E=y,M=B}if(P===x.length)return n(u,M),ft&&or(u,P),b;if(M===null){for(;P<x.length;P++)M=h(u,x[P],w),M!==null&&(v=s(M,v,P),E===null?b=M:E.sibling=M,E=M);return ft&&or(u,P),b}for(M=i(u,M);P<x.length;P++)B=m(M,u,P,x[P],w),B!==null&&(t&&B.alternate!==null&&M.delete(B.key===null?P:B.key),v=s(B,v,P),E===null?b=B:E.sibling=B,E=B);return t&&M.forEach(function(T){return e(u,T)}),ft&&or(u,P),b}function S(u,v,x,w){var b=Ds(x);if(typeof b!="function")throw Error(se(150));if(x=b.call(x),x==null)throw Error(se(151));for(var E=b=null,M=v,P=v=0,B=null,y=x.next();M!==null&&!y.done;P++,y=x.next()){M.index>P?(B=M,M=null):B=M.sibling;var T=f(u,M,y.value,w);if(T===null){M===null&&(M=B);break}t&&M&&T.alternate===null&&e(u,M),v=s(T,v,P),E===null?b=T:E.sibling=T,E=T,M=B}if(y.done)return n(u,M),ft&&or(u,P),b;if(M===null){for(;!y.done;P++,y=x.next())y=h(u,y.value,w),y!==null&&(v=s(y,v,P),E===null?b=y:E.sibling=y,E=y);return ft&&or(u,P),b}for(M=i(u,M);!y.done;P++,y=x.next())y=m(M,u,P,y.value,w),y!==null&&(t&&y.alternate!==null&&M.delete(y.key===null?P:y.key),v=s(y,v,P),E===null?b=y:E.sibling=y,E=y);return t&&M.forEach(function(k){return e(u,k)}),ft&&or(u,P),b}function p(u,v,x,w){if(typeof x=="object"&&x!==null&&x.type===Yr&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Wa:e:{for(var b=x.key,E=v;E!==null;){if(E.key===b){if(b=x.type,b===Yr){if(E.tag===7){n(u,E.sibling),v=r(E,x.props.children),v.return=u,u=v;break e}}else if(E.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===bi&&Vh(b)===E.type){n(u,E.sibling),v=r(E,x.props),v.ref=ks(u,E,x),v.return=u,u=v;break e}n(u,E);break}else e(u,E);E=E.sibling}x.type===Yr?(v=xr(x.props.children,u.mode,w,x.key),v.return=u,u=v):(w=Wo(x.type,x.key,x.props,null,u.mode,w),w.ref=ks(u,v,x),w.return=u,u=w)}return a(u);case $r:e:{for(E=x.key;v!==null;){if(v.key===E)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){n(u,v.sibling),v=r(v,x.children||[]),v.return=u,u=v;break e}else{n(u,v);break}else e(u,v);v=v.sibling}v=Ac(x,u.mode,w),v.return=u,u=v}return a(u);case bi:return E=x._init,p(u,v,E(x._payload),w)}if(Ks(x))return _(u,v,x,w);if(Ds(x))return S(u,v,x,w);no(u,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(n(u,v.sibling),v=r(v,x),v.return=u,u=v):(n(u,v),v=Tc(x,u.mode,w),v.return=u,u=v),a(u)):n(u,v)}return p}var vs=Lg(!0),Ng=Lg(!1),hl=Zi(null),pl=null,ns=null,df=null;function ff(){df=ns=pl=null}function hf(t){var e=hl.current;dt(hl),t._currentValue=e}function Fu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function us(t,e){pl=t,df=ns=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(tn=!0),t.firstContext=null)}function bn(t){var e=t._currentValue;if(df!==t)if(t={context:t,memoizedValue:e,next:null},ns===null){if(pl===null)throw Error(se(308));ns=t,pl.dependencies={lanes:0,firstContext:t}}else ns=ns.next=t;return e}var pr=null;function pf(t){pr===null?pr=[t]:pr.push(t)}function Dg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,pf(e)):(n.next=r.next,r.next=n),e.interleaved=n,gi(t,i)}function gi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Pi=!1;function mf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ig(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function hi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function zi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,gi(t,n)}return r=i.interleaved,r===null?(e.next=e,pf(i)):(e.next=r.next,r.next=e),i.interleaved=e,gi(t,n)}function Bo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Jd(t,n)}}function Gh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ml(t,e,n,i){var r=t.updateQueue;Pi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==a&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,d=c=l=null,o=s;do{var f=o.lane,m=o.eventTime;if((i&f)===f){d!==null&&(d=d.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,S=o;switch(f=e,m=n,S.tag){case 1:if(_=S.payload,typeof _=="function"){h=_.call(m,h,f);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=S.payload,f=typeof _=="function"?_.call(m,h,f):_,f==null)break e;h=gt({},h,f);break e;case 2:Pi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else m={eventTime:m,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=m,l=h):d=d.next=m,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(d===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Er|=a,t.lanes=a,t.memoizedState=h}}function jh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var Ua={},Qn=Zi(Ua),Ea=Zi(Ua),wa=Zi(Ua);function mr(t){if(t===Ua)throw Error(se(174));return t}function gf(t,e){switch(ot(wa,e),ot(Ea,t),ot(Qn,Ua),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:gu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=gu(e,t)}dt(Qn),ot(Qn,e)}function xs(){dt(Qn),dt(Ea),dt(wa)}function Ug(t){mr(wa.current);var e=mr(Qn.current),n=gu(e,t.type);e!==n&&(ot(Ea,t),ot(Qn,n))}function _f(t){Ea.current===t&&(dt(Qn),dt(Ea))}var pt=Zi(0);function gl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var xc=[];function vf(){for(var t=0;t<xc.length;t++)xc[t]._workInProgressVersionPrimary=null;xc.length=0}var zo=xi.ReactCurrentDispatcher,yc=xi.ReactCurrentBatchConfig,Mr=0,mt=null,Tt=null,Lt=null,_l=!1,aa=!1,Ta=0,dx=0;function kt(){throw Error(se(321))}function xf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!jn(t[n],e[n]))return!1;return!0}function yf(t,e,n,i,r,s){if(Mr=s,mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,zo.current=t===null||t.memoizedState===null?mx:gx,t=n(i,r),aa){s=0;do{if(aa=!1,Ta=0,25<=s)throw Error(se(301));s+=1,Lt=Tt=null,e.updateQueue=null,zo.current=_x,t=n(i,r)}while(aa)}if(zo.current=vl,e=Tt!==null&&Tt.next!==null,Mr=0,Lt=Tt=mt=null,_l=!1,e)throw Error(se(300));return t}function Sf(){var t=Ta!==0;return Ta=0,t}function Xn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?mt.memoizedState=Lt=t:Lt=Lt.next=t,Lt}function Pn(){if(Tt===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=Tt.next;var e=Lt===null?mt.memoizedState:Lt.next;if(e!==null)Lt=e,Tt=t;else{if(t===null)throw Error(se(310));Tt=t,t={memoizedState:Tt.memoizedState,baseState:Tt.baseState,baseQueue:Tt.baseQueue,queue:Tt.queue,next:null},Lt===null?mt.memoizedState=Lt=t:Lt=Lt.next=t}return Lt}function Aa(t,e){return typeof e=="function"?e(t):e}function Sc(t){var e=Pn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=Tt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var d=c.lane;if((Mr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,mt.lanes|=d,Er|=d}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,jn(i,e.memoizedState)||(tn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,mt.lanes|=s,Er|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Mc(t){var e=Pn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);jn(s,e.memoizedState)||(tn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Fg(){}function Og(t,e){var n=mt,i=Pn(),r=e(),s=!jn(i.memoizedState,r);if(s&&(i.memoizedState=r,tn=!0),i=i.queue,Mf(zg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Lt!==null&&Lt.memoizedState.tag&1){if(n.flags|=2048,Ca(9,Bg.bind(null,n,i,r,e),void 0,null),Nt===null)throw Error(se(349));Mr&30||kg(n,e,r)}return r}function kg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Bg(t,e,n,i){e.value=n,e.getSnapshot=i,Hg(e)&&Vg(t)}function zg(t,e,n){return n(function(){Hg(e)&&Vg(t)})}function Hg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!jn(t,n)}catch{return!0}}function Vg(t){var e=gi(t,1);e!==null&&Gn(e,t,1,-1)}function Wh(t){var e=Xn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Aa,lastRenderedState:t},e.queue=t,t=t.dispatch=px.bind(null,mt,t),[e.memoizedState,t]}function Ca(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Gg(){return Pn().memoizedState}function Ho(t,e,n,i){var r=Xn();mt.flags|=t,r.memoizedState=Ca(1|e,n,void 0,i===void 0?null:i)}function Bl(t,e,n,i){var r=Pn();i=i===void 0?null:i;var s=void 0;if(Tt!==null){var a=Tt.memoizedState;if(s=a.destroy,i!==null&&xf(i,a.deps)){r.memoizedState=Ca(e,n,s,i);return}}mt.flags|=t,r.memoizedState=Ca(1|e,n,s,i)}function Xh(t,e){return Ho(8390656,8,t,e)}function Mf(t,e){return Bl(2048,8,t,e)}function jg(t,e){return Bl(4,2,t,e)}function Wg(t,e){return Bl(4,4,t,e)}function Xg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function $g(t,e,n){return n=n!=null?n.concat([t]):null,Bl(4,4,Xg.bind(null,e,t),n)}function Ef(){}function Yg(t,e){var n=Pn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&xf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function qg(t,e){var n=Pn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&xf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Kg(t,e,n){return Mr&21?(jn(n,e)||(n=tg(),mt.lanes|=n,Er|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,tn=!0),t.memoizedState=n)}function fx(t,e){var n=it;it=n!==0&&4>n?n:4,t(!0);var i=yc.transition;yc.transition={};try{t(!1),e()}finally{it=n,yc.transition=i}}function Zg(){return Pn().memoizedState}function hx(t,e,n){var i=Vi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Qg(t))Jg(e,n);else if(n=Dg(t,e,n,i),n!==null){var r=$t();Gn(n,t,i,r),e_(n,e,i)}}function px(t,e,n){var i=Vi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qg(t))Jg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,jn(o,a)){var l=e.interleaved;l===null?(r.next=r,pf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Dg(t,e,r,i),n!==null&&(r=$t(),Gn(n,t,i,r),e_(n,e,i))}}function Qg(t){var e=t.alternate;return t===mt||e!==null&&e===mt}function Jg(t,e){aa=_l=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function e_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Jd(t,n)}}var vl={readContext:bn,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useInsertionEffect:kt,useLayoutEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useMutableSource:kt,useSyncExternalStore:kt,useId:kt,unstable_isNewReconciler:!1},mx={readContext:bn,useCallback:function(t,e){return Xn().memoizedState=[t,e===void 0?null:e],t},useContext:bn,useEffect:Xh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ho(4194308,4,Xg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ho(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ho(4,2,t,e)},useMemo:function(t,e){var n=Xn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Xn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=hx.bind(null,mt,t),[i.memoizedState,t]},useRef:function(t){var e=Xn();return t={current:t},e.memoizedState=t},useState:Wh,useDebugValue:Ef,useDeferredValue:function(t){return Xn().memoizedState=t},useTransition:function(){var t=Wh(!1),e=t[0];return t=fx.bind(null,t[1]),Xn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=mt,r=Xn();if(ft){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),Nt===null)throw Error(se(349));Mr&30||kg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Xh(zg.bind(null,i,s,t),[t]),i.flags|=2048,Ca(9,Bg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Xn(),e=Nt.identifierPrefix;if(ft){var n=ui,i=ci;n=(i&~(1<<32-Vn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ta++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=dx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},gx={readContext:bn,useCallback:Yg,useContext:bn,useEffect:Mf,useImperativeHandle:$g,useInsertionEffect:jg,useLayoutEffect:Wg,useMemo:qg,useReducer:Sc,useRef:Gg,useState:function(){return Sc(Aa)},useDebugValue:Ef,useDeferredValue:function(t){var e=Pn();return Kg(e,Tt.memoizedState,t)},useTransition:function(){var t=Sc(Aa)[0],e=Pn().memoizedState;return[t,e]},useMutableSource:Fg,useSyncExternalStore:Og,useId:Zg,unstable_isNewReconciler:!1},_x={readContext:bn,useCallback:Yg,useContext:bn,useEffect:Mf,useImperativeHandle:$g,useInsertionEffect:jg,useLayoutEffect:Wg,useMemo:qg,useReducer:Mc,useRef:Gg,useState:function(){return Mc(Aa)},useDebugValue:Ef,useDeferredValue:function(t){var e=Pn();return Tt===null?e.memoizedState=t:Kg(e,Tt.memoizedState,t)},useTransition:function(){var t=Mc(Aa)[0],e=Pn().memoizedState;return[t,e]},useMutableSource:Fg,useSyncExternalStore:Og,useId:Zg,unstable_isNewReconciler:!1};function Fn(t,e){if(t&&t.defaultProps){e=gt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ou(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:gt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var zl={isMounted:function(t){return(t=t._reactInternals)?br(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=$t(),r=Vi(t),s=hi(i,r);s.payload=e,n!=null&&(s.callback=n),e=zi(t,s,r),e!==null&&(Gn(e,t,r,i),Bo(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=$t(),r=Vi(t),s=hi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=zi(t,s,r),e!==null&&(Gn(e,t,r,i),Bo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=$t(),i=Vi(t),r=hi(n,i);r.tag=2,e!=null&&(r.callback=e),e=zi(t,r,i),e!==null&&(Gn(e,t,i,n),Bo(e,t,i))}};function $h(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!xa(n,i)||!xa(r,s):!0}function t_(t,e,n){var i=!1,r=$i,s=e.contextType;return typeof s=="object"&&s!==null?s=bn(s):(r=rn(e)?yr:jt.current,i=e.contextTypes,s=(i=i!=null)?gs(t,r):$i),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=zl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Yh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&zl.enqueueReplaceState(e,e.state,null)}function ku(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},mf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=bn(s):(s=rn(e)?yr:jt.current,r.context=gs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ou(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&zl.enqueueReplaceState(r,r.state,null),ml(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ys(t,e){try{var n="",i=e;do n+=Wv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Ec(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Bu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var vx=typeof WeakMap=="function"?WeakMap:Map;function n_(t,e,n){n=hi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){yl||(yl=!0,qu=i),Bu(t,e)},n}function i_(t,e,n){n=hi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Bu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Bu(t,e),typeof i!="function"&&(Hi===null?Hi=new Set([this]):Hi.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function qh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new vx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Nx.bind(null,t,e,n),e.then(t,t))}function Kh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Zh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=hi(-1,1),e.tag=2,zi(n,e,1))),n.lanes|=1),t)}var xx=xi.ReactCurrentOwner,tn=!1;function Xt(t,e,n,i){e.child=t===null?Ng(e,null,n,i):vs(e,t.child,n,i)}function Qh(t,e,n,i,r){n=n.render;var s=e.ref;return us(e,r),i=yf(t,e,n,i,s,r),n=Sf(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,_i(t,e,r)):(ft&&n&&lf(e),e.flags|=1,Xt(t,e,i,r),e.child)}function Jh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Lf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,r_(t,e,s,i,r)):(t=Wo(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:xa,n(a,i)&&t.ref===e.ref)return _i(t,e,r)}return e.flags|=1,t=Gi(s,i),t.ref=e.ref,t.return=e,e.child=t}function r_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(xa(s,i)&&t.ref===e.ref)if(tn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(tn=!0);else return e.lanes=t.lanes,_i(t,e,r)}return zu(t,e,n,i,r)}function s_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ot(rs,hn),hn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ot(rs,hn),hn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ot(rs,hn),hn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ot(rs,hn),hn|=i;return Xt(t,e,r,n),e.child}function a_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function zu(t,e,n,i,r){var s=rn(n)?yr:jt.current;return s=gs(e,s),us(e,r),n=yf(t,e,n,i,s,r),i=Sf(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,_i(t,e,r)):(ft&&i&&lf(e),e.flags|=1,Xt(t,e,n,r),e.child)}function ep(t,e,n,i,r){if(rn(n)){var s=!0;ul(e)}else s=!1;if(us(e,r),e.stateNode===null)Vo(t,e),t_(e,n,i),ku(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=bn(c):(c=rn(n)?yr:jt.current,c=gs(e,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Yh(e,a,i,c),Pi=!1;var f=e.memoizedState;a.state=f,ml(e,i,a,r),l=e.memoizedState,o!==i||f!==l||nn.current||Pi?(typeof d=="function"&&(Ou(e,n,d,i),l=e.memoizedState),(o=Pi||$h(e,n,o,i,f,l,c))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Ig(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Fn(e.type,o),a.props=c,h=e.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=bn(l):(l=rn(n)?yr:jt.current,l=gs(e,l));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||f!==l)&&Yh(e,a,i,l),Pi=!1,f=e.memoizedState,a.state=f,ml(e,i,a,r);var _=e.memoizedState;o!==h||f!==_||nn.current||Pi?(typeof m=="function"&&(Ou(e,n,m,i),_=e.memoizedState),(c=Pi||$h(e,n,c,i,f,_,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Hu(t,e,n,i,s,r)}function Hu(t,e,n,i,r,s){a_(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Bh(e,n,!1),_i(t,e,s);i=e.stateNode,xx.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=vs(e,t.child,null,s),e.child=vs(e,null,o,s)):Xt(t,e,o,s),e.memoizedState=i.state,r&&Bh(e,n,!0),e.child}function o_(t){var e=t.stateNode;e.pendingContext?kh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&kh(t,e.context,!1),gf(t,e.containerInfo)}function tp(t,e,n,i,r){return _s(),uf(r),e.flags|=256,Xt(t,e,n,i),e.child}var Vu={dehydrated:null,treeContext:null,retryLane:0};function Gu(t){return{baseLanes:t,cachePool:null,transitions:null}}function l_(t,e,n){var i=e.pendingProps,r=pt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ot(pt,r&1),t===null)return Uu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Gl(a,i,0,null),t=xr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Gu(n),e.memoizedState=Vu,t):wf(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return yx(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Gi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Gi(o,s):(s=xr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Gu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Vu,i}return s=t.child,t=s.sibling,i=Gi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function wf(t,e){return e=Gl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function io(t,e,n,i){return i!==null&&uf(i),vs(e,t.child,null,n),t=wf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function yx(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Ec(Error(se(422))),io(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Gl({mode:"visible",children:i.children},r,0,null),s=xr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&vs(e,t.child,null,a),e.child.memoizedState=Gu(a),e.memoizedState=Vu,s);if(!(e.mode&1))return io(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(se(419)),i=Ec(s,i,void 0),io(t,e,a,i)}if(o=(a&t.childLanes)!==0,tn||o){if(i=Nt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,gi(t,r),Gn(i,t,r,-1))}return Pf(),i=Ec(Error(se(421))),io(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Dx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,pn=Bi(r.nextSibling),mn=e,ft=!0,kn=null,t!==null&&(Mn[En++]=ci,Mn[En++]=ui,Mn[En++]=Sr,ci=t.id,ui=t.overflow,Sr=e),e=wf(e,i.children),e.flags|=4096,e)}function np(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Fu(t.return,e,n)}function wc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function c_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Xt(t,e,i.children,n),i=pt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&np(t,n,e);else if(t.tag===19)np(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ot(pt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&gl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),wc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&gl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}wc(e,!0,n,null,s);break;case"together":wc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Vo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function _i(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Er|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=Gi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Gi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Sx(t,e,n){switch(e.tag){case 3:o_(e),_s();break;case 5:Ug(e);break;case 1:rn(e.type)&&ul(e);break;case 4:gf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ot(hl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ot(pt,pt.current&1),e.flags|=128,null):n&e.child.childLanes?l_(t,e,n):(ot(pt,pt.current&1),t=_i(t,e,n),t!==null?t.sibling:null);ot(pt,pt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return c_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ot(pt,pt.current),i)break;return null;case 22:case 23:return e.lanes=0,s_(t,e,n)}return _i(t,e,n)}var u_,ju,d_,f_;u_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ju=function(){};d_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,mr(Qn.current);var s=null;switch(n){case"input":r=fu(t,r),i=fu(t,i),s=[];break;case"select":r=gt({},r,{value:void 0}),i=gt({},i,{value:void 0}),s=[];break;case"textarea":r=mu(t,r),i=mu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ll)}_u(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(fa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(fa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ct("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};f_=function(t,e,n,i){n!==i&&(e.flags|=4)};function Bs(t,e){if(!ft)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Bt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Mx(t,e,n){var i=e.pendingProps;switch(cf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(e),null;case 1:return rn(e.type)&&cl(),Bt(e),null;case 3:return i=e.stateNode,xs(),dt(nn),dt(jt),vf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(to(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,kn!==null&&(Qu(kn),kn=null))),ju(t,e),Bt(e),null;case 5:_f(e);var r=mr(wa.current);if(n=e.type,t!==null&&e.stateNode!=null)d_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return Bt(e),null}if(t=mr(Qn.current),to(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[qn]=e,i[Ma]=s,t=(e.mode&1)!==0,n){case"dialog":ct("cancel",i),ct("close",i);break;case"iframe":case"object":case"embed":ct("load",i);break;case"video":case"audio":for(r=0;r<Qs.length;r++)ct(Qs[r],i);break;case"source":ct("error",i);break;case"img":case"image":case"link":ct("error",i),ct("load",i);break;case"details":ct("toggle",i);break;case"input":dh(i,s),ct("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ct("invalid",i);break;case"textarea":hh(i,s),ct("invalid",i)}_u(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&eo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&eo(i.textContent,o,t),r=["children",""+o]):fa.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&ct("scroll",i)}switch(n){case"input":Xa(i),fh(i,s,!0);break;case"textarea":Xa(i),ph(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ll)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=zm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[qn]=e,t[Ma]=i,u_(t,e,!1,!1),e.stateNode=t;e:{switch(a=vu(n,i),n){case"dialog":ct("cancel",t),ct("close",t),r=i;break;case"iframe":case"object":case"embed":ct("load",t),r=i;break;case"video":case"audio":for(r=0;r<Qs.length;r++)ct(Qs[r],t);r=i;break;case"source":ct("error",t),r=i;break;case"img":case"image":case"link":ct("error",t),ct("load",t),r=i;break;case"details":ct("toggle",t),r=i;break;case"input":dh(t,i),r=fu(t,i),ct("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=gt({},i,{value:void 0}),ct("invalid",t);break;case"textarea":hh(t,i),r=mu(t,i),ct("invalid",t);break;default:r=i}_u(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Gm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Hm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ha(t,l):typeof l=="number"&&ha(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(fa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ct("scroll",t):l!=null&&$d(t,s,l,a))}switch(n){case"input":Xa(t),fh(t,i,!1);break;case"textarea":Xa(t),ph(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Xi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?as(t,!!i.multiple,s,!1):i.defaultValue!=null&&as(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ll)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Bt(e),null;case 6:if(t&&e.stateNode!=null)f_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=mr(wa.current),mr(Qn.current),to(e)){if(i=e.stateNode,n=e.memoizedProps,i[qn]=e,(s=i.nodeValue!==n)&&(t=mn,t!==null))switch(t.tag){case 3:eo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&eo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[qn]=e,e.stateNode=i}return Bt(e),null;case 13:if(dt(pt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ft&&pn!==null&&e.mode&1&&!(e.flags&128))Pg(),_s(),e.flags|=98560,s=!1;else if(s=to(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[qn]=e}else _s(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Bt(e),s=!1}else kn!==null&&(Qu(kn),kn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||pt.current&1?At===0&&(At=3):Pf())),e.updateQueue!==null&&(e.flags|=4),Bt(e),null);case 4:return xs(),ju(t,e),t===null&&ya(e.stateNode.containerInfo),Bt(e),null;case 10:return hf(e.type._context),Bt(e),null;case 17:return rn(e.type)&&cl(),Bt(e),null;case 19:if(dt(pt),s=e.memoizedState,s===null)return Bt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Bs(s,!1);else{if(At!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=gl(t),a!==null){for(e.flags|=128,Bs(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ot(pt,pt.current&1|2),e.child}t=t.sibling}s.tail!==null&&St()>Ss&&(e.flags|=128,i=!0,Bs(s,!1),e.lanes=4194304)}else{if(!i)if(t=gl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Bs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ft)return Bt(e),null}else 2*St()-s.renderingStartTime>Ss&&n!==1073741824&&(e.flags|=128,i=!0,Bs(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=St(),e.sibling=null,n=pt.current,ot(pt,i?n&1|2:n&1),e):(Bt(e),null);case 22:case 23:return bf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?hn&1073741824&&(Bt(e),e.subtreeFlags&6&&(e.flags|=8192)):Bt(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function Ex(t,e){switch(cf(e),e.tag){case 1:return rn(e.type)&&cl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return xs(),dt(nn),dt(jt),vf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return _f(e),null;case 13:if(dt(pt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));_s()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return dt(pt),null;case 4:return xs(),null;case 10:return hf(e.type._context),null;case 22:case 23:return bf(),null;case 24:return null;default:return null}}var ro=!1,Gt=!1,wx=typeof WeakSet=="function"?WeakSet:Set,xe=null;function is(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){vt(t,e,i)}else n.current=null}function Wu(t,e,n){try{n()}catch(i){vt(t,e,i)}}var ip=!1;function Tx(t,e){if(Ru=sl,t=_g(),of(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,d=0,h=t,f=null;t:for(;;){for(var m;h!==n||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(m=h.firstChild)!==null;)f=h,h=m;for(;;){if(h===t)break t;if(f===n&&++c===r&&(o=a),f===s&&++d===i&&(l=a),(m=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(bu={focusedElem:t,selectionRange:n},sl=!1,xe=e;xe!==null;)if(e=xe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,xe=t;else for(;xe!==null;){e=xe;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var S=_.memoizedProps,p=_.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?S:Fn(e.type,S),p);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(w){vt(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,xe=t;break}xe=e.return}return _=ip,ip=!1,_}function oa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Wu(e,n,s)}r=r.next}while(r!==i)}}function Hl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Xu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function h_(t){var e=t.alternate;e!==null&&(t.alternate=null,h_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[qn],delete e[Ma],delete e[Nu],delete e[ox],delete e[lx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function p_(t){return t.tag===5||t.tag===3||t.tag===4}function rp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||p_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function $u(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ll));else if(i!==4&&(t=t.child,t!==null))for($u(t,e,n),t=t.sibling;t!==null;)$u(t,e,n),t=t.sibling}function Yu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Yu(t,e,n),t=t.sibling;t!==null;)Yu(t,e,n),t=t.sibling}var It=null,On=!1;function Si(t,e,n){for(n=n.child;n!==null;)m_(t,e,n),n=n.sibling}function m_(t,e,n){if(Zn&&typeof Zn.onCommitFiberUnmount=="function")try{Zn.onCommitFiberUnmount(Dl,n)}catch{}switch(n.tag){case 5:Gt||is(n,e);case 6:var i=It,r=On;It=null,Si(t,e,n),It=i,On=r,It!==null&&(On?(t=It,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):It.removeChild(n.stateNode));break;case 18:It!==null&&(On?(t=It,n=n.stateNode,t.nodeType===8?_c(t.parentNode,n):t.nodeType===1&&_c(t,n),_a(t)):_c(It,n.stateNode));break;case 4:i=It,r=On,It=n.stateNode.containerInfo,On=!0,Si(t,e,n),It=i,On=r;break;case 0:case 11:case 14:case 15:if(!Gt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Wu(n,e,a),r=r.next}while(r!==i)}Si(t,e,n);break;case 1:if(!Gt&&(is(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){vt(n,e,o)}Si(t,e,n);break;case 21:Si(t,e,n);break;case 22:n.mode&1?(Gt=(i=Gt)||n.memoizedState!==null,Si(t,e,n),Gt=i):Si(t,e,n);break;default:Si(t,e,n)}}function sp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new wx),e.forEach(function(i){var r=Ix.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Nn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:It=o.stateNode,On=!1;break e;case 3:It=o.stateNode.containerInfo,On=!0;break e;case 4:It=o.stateNode.containerInfo,On=!0;break e}o=o.return}if(It===null)throw Error(se(160));m_(s,a,r),It=null,On=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){vt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)g_(e,t),e=e.sibling}function g_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Nn(e,t),Wn(t),i&4){try{oa(3,t,t.return),Hl(3,t)}catch(S){vt(t,t.return,S)}try{oa(5,t,t.return)}catch(S){vt(t,t.return,S)}}break;case 1:Nn(e,t),Wn(t),i&512&&n!==null&&is(n,n.return);break;case 5:if(Nn(e,t),Wn(t),i&512&&n!==null&&is(n,n.return),t.flags&32){var r=t.stateNode;try{ha(r,"")}catch(S){vt(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&km(r,s),vu(o,a);var c=vu(o,s);for(a=0;a<l.length;a+=2){var d=l[a],h=l[a+1];d==="style"?Gm(r,h):d==="dangerouslySetInnerHTML"?Hm(r,h):d==="children"?ha(r,h):$d(r,d,h,c)}switch(o){case"input":hu(r,s);break;case"textarea":Bm(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?as(r,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?as(r,!!s.multiple,s.defaultValue,!0):as(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ma]=s}catch(S){vt(t,t.return,S)}}break;case 6:if(Nn(e,t),Wn(t),i&4){if(t.stateNode===null)throw Error(se(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(S){vt(t,t.return,S)}}break;case 3:if(Nn(e,t),Wn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{_a(e.containerInfo)}catch(S){vt(t,t.return,S)}break;case 4:Nn(e,t),Wn(t);break;case 13:Nn(e,t),Wn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Cf=St())),i&4&&sp(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Gt=(c=Gt)||d,Nn(e,t),Gt=c):Nn(e,t),Wn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(xe=t,d=t.child;d!==null;){for(h=xe=d;xe!==null;){switch(f=xe,m=f.child,f.tag){case 0:case 11:case 14:case 15:oa(4,f,f.return);break;case 1:is(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(S){vt(i,n,S)}}break;case 5:is(f,f.return);break;case 22:if(f.memoizedState!==null){op(h);continue}}m!==null?(m.return=f,xe=m):op(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Vm("display",a))}catch(S){vt(t,t.return,S)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(S){vt(t,t.return,S)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Nn(e,t),Wn(t),i&4&&sp(t);break;case 21:break;default:Nn(e,t),Wn(t)}}function Wn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(p_(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ha(r,""),i.flags&=-33);var s=rp(t);Yu(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=rp(t);$u(t,o,a);break;default:throw Error(se(161))}}catch(l){vt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ax(t,e,n){xe=t,__(t)}function __(t,e,n){for(var i=(t.mode&1)!==0;xe!==null;){var r=xe,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||ro;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Gt;o=ro;var c=Gt;if(ro=a,(Gt=l)&&!c)for(xe=r;xe!==null;)a=xe,l=a.child,a.tag===22&&a.memoizedState!==null?lp(r):l!==null?(l.return=a,xe=l):lp(r);for(;s!==null;)xe=s,__(s),s=s.sibling;xe=r,ro=o,Gt=c}ap(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,xe=s):ap(t)}}function ap(t){for(;xe!==null;){var e=xe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Gt||Hl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Gt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Fn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&jh(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}jh(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&_a(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}Gt||e.flags&512&&Xu(e)}catch(f){vt(e,e.return,f)}}if(e===t){xe=null;break}if(n=e.sibling,n!==null){n.return=e.return,xe=n;break}xe=e.return}}function op(t){for(;xe!==null;){var e=xe;if(e===t){xe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,xe=n;break}xe=e.return}}function lp(t){for(;xe!==null;){var e=xe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Hl(4,e)}catch(l){vt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){vt(e,r,l)}}var s=e.return;try{Xu(e)}catch(l){vt(e,s,l)}break;case 5:var a=e.return;try{Xu(e)}catch(l){vt(e,a,l)}}}catch(l){vt(e,e.return,l)}if(e===t){xe=null;break}var o=e.sibling;if(o!==null){o.return=e.return,xe=o;break}xe=e.return}}var Cx=Math.ceil,xl=xi.ReactCurrentDispatcher,Tf=xi.ReactCurrentOwner,Cn=xi.ReactCurrentBatchConfig,qe=0,Nt=null,wt=null,Ft=0,hn=0,rs=Zi(0),At=0,Ra=null,Er=0,Vl=0,Af=0,la=null,Jt=null,Cf=0,Ss=1/0,oi=null,yl=!1,qu=null,Hi=null,so=!1,Ui=null,Sl=0,ca=0,Ku=null,Go=-1,jo=0;function $t(){return qe&6?St():Go!==-1?Go:Go=St()}function Vi(t){return t.mode&1?qe&2&&Ft!==0?Ft&-Ft:ux.transition!==null?(jo===0&&(jo=tg()),jo):(t=it,t!==0||(t=window.event,t=t===void 0?16:lg(t.type)),t):1}function Gn(t,e,n,i){if(50<ca)throw ca=0,Ku=null,Error(se(185));Na(t,n,i),(!(qe&2)||t!==Nt)&&(t===Nt&&(!(qe&2)&&(Vl|=n),At===4&&Ni(t,Ft)),sn(t,i),n===1&&qe===0&&!(e.mode&1)&&(Ss=St()+500,kl&&Qi()))}function sn(t,e){var n=t.callbackNode;u0(t,e);var i=rl(t,t===Nt?Ft:0);if(i===0)n!==null&&_h(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&_h(n),e===1)t.tag===0?cx(cp.bind(null,t)):Cg(cp.bind(null,t)),sx(function(){!(qe&6)&&Qi()}),n=null;else{switch(ng(i)){case 1:n=Qd;break;case 4:n=Jm;break;case 16:n=il;break;case 536870912:n=eg;break;default:n=il}n=T_(n,v_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function v_(t,e){if(Go=-1,jo=0,qe&6)throw Error(se(327));var n=t.callbackNode;if(ds()&&t.callbackNode!==n)return null;var i=rl(t,t===Nt?Ft:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Ml(t,i);else{e=i;var r=qe;qe|=2;var s=y_();(Nt!==t||Ft!==e)&&(oi=null,Ss=St()+500,vr(t,e));do try{Px();break}catch(o){x_(t,o)}while(!0);ff(),xl.current=s,qe=r,wt!==null?e=0:(Nt=null,Ft=0,e=At)}if(e!==0){if(e===2&&(r=Eu(t),r!==0&&(i=r,e=Zu(t,r))),e===1)throw n=Ra,vr(t,0),Ni(t,i),sn(t,St()),n;if(e===6)Ni(t,i);else{if(r=t.current.alternate,!(i&30)&&!Rx(r)&&(e=Ml(t,i),e===2&&(s=Eu(t),s!==0&&(i=s,e=Zu(t,s))),e===1))throw n=Ra,vr(t,0),Ni(t,i),sn(t,St()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:lr(t,Jt,oi);break;case 3:if(Ni(t,i),(i&130023424)===i&&(e=Cf+500-St(),10<e)){if(rl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){$t(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Lu(lr.bind(null,t,Jt,oi),e);break}lr(t,Jt,oi);break;case 4:if(Ni(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Vn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=St()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Cx(i/1960))-i,10<i){t.timeoutHandle=Lu(lr.bind(null,t,Jt,oi),i);break}lr(t,Jt,oi);break;case 5:lr(t,Jt,oi);break;default:throw Error(se(329))}}}return sn(t,St()),t.callbackNode===n?v_.bind(null,t):null}function Zu(t,e){var n=la;return t.current.memoizedState.isDehydrated&&(vr(t,e).flags|=256),t=Ml(t,e),t!==2&&(e=Jt,Jt=n,e!==null&&Qu(e)),t}function Qu(t){Jt===null?Jt=t:Jt.push.apply(Jt,t)}function Rx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!jn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ni(t,e){for(e&=~Af,e&=~Vl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Vn(e),i=1<<n;t[n]=-1,e&=~i}}function cp(t){if(qe&6)throw Error(se(327));ds();var e=rl(t,0);if(!(e&1))return sn(t,St()),null;var n=Ml(t,e);if(t.tag!==0&&n===2){var i=Eu(t);i!==0&&(e=i,n=Zu(t,i))}if(n===1)throw n=Ra,vr(t,0),Ni(t,e),sn(t,St()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,lr(t,Jt,oi),sn(t,St()),null}function Rf(t,e){var n=qe;qe|=1;try{return t(e)}finally{qe=n,qe===0&&(Ss=St()+500,kl&&Qi())}}function wr(t){Ui!==null&&Ui.tag===0&&!(qe&6)&&ds();var e=qe;qe|=1;var n=Cn.transition,i=it;try{if(Cn.transition=null,it=1,t)return t()}finally{it=i,Cn.transition=n,qe=e,!(qe&6)&&Qi()}}function bf(){hn=rs.current,dt(rs)}function vr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,rx(n)),wt!==null)for(n=wt.return;n!==null;){var i=n;switch(cf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&cl();break;case 3:xs(),dt(nn),dt(jt),vf();break;case 5:_f(i);break;case 4:xs();break;case 13:dt(pt);break;case 19:dt(pt);break;case 10:hf(i.type._context);break;case 22:case 23:bf()}n=n.return}if(Nt=t,wt=t=Gi(t.current,null),Ft=hn=e,At=0,Ra=null,Af=Vl=Er=0,Jt=la=null,pr!==null){for(e=0;e<pr.length;e++)if(n=pr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}pr=null}return t}function x_(t,e){do{var n=wt;try{if(ff(),zo.current=vl,_l){for(var i=mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}_l=!1}if(Mr=0,Lt=Tt=mt=null,aa=!1,Ta=0,Tf.current=null,n===null||n.return===null){At=1,Ra=e,wt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Ft,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=o,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=Kh(a);if(m!==null){m.flags&=-257,Zh(m,a,o,s,e),m.mode&1&&qh(s,c,e),e=m,l=c;var _=e.updateQueue;if(_===null){var S=new Set;S.add(l),e.updateQueue=S}else _.add(l);break e}else{if(!(e&1)){qh(s,c,e),Pf();break e}l=Error(se(426))}}else if(ft&&o.mode&1){var p=Kh(a);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Zh(p,a,o,s,e),uf(ys(l,o));break e}}s=l=ys(l,o),At!==4&&(At=2),la===null?la=[s]:la.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=n_(s,l,e);Gh(s,u);break e;case 1:o=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Hi===null||!Hi.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=i_(s,o,e);Gh(s,w);break e}}s=s.return}while(s!==null)}M_(n)}catch(b){e=b,wt===n&&n!==null&&(wt=n=n.return);continue}break}while(!0)}function y_(){var t=xl.current;return xl.current=vl,t===null?vl:t}function Pf(){(At===0||At===3||At===2)&&(At=4),Nt===null||!(Er&268435455)&&!(Vl&268435455)||Ni(Nt,Ft)}function Ml(t,e){var n=qe;qe|=2;var i=y_();(Nt!==t||Ft!==e)&&(oi=null,vr(t,e));do try{bx();break}catch(r){x_(t,r)}while(!0);if(ff(),qe=n,xl.current=i,wt!==null)throw Error(se(261));return Nt=null,Ft=0,At}function bx(){for(;wt!==null;)S_(wt)}function Px(){for(;wt!==null&&!t0();)S_(wt)}function S_(t){var e=w_(t.alternate,t,hn);t.memoizedProps=t.pendingProps,e===null?M_(t):wt=e,Tf.current=null}function M_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ex(n,e),n!==null){n.flags&=32767,wt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{At=6,wt=null;return}}else if(n=Mx(n,e,hn),n!==null){wt=n;return}if(e=e.sibling,e!==null){wt=e;return}wt=e=t}while(e!==null);At===0&&(At=5)}function lr(t,e,n){var i=it,r=Cn.transition;try{Cn.transition=null,it=1,Lx(t,e,n,i)}finally{Cn.transition=r,it=i}return null}function Lx(t,e,n,i){do ds();while(Ui!==null);if(qe&6)throw Error(se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(d0(t,s),t===Nt&&(wt=Nt=null,Ft=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||so||(so=!0,T_(il,function(){return ds(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Cn.transition,Cn.transition=null;var a=it;it=1;var o=qe;qe|=4,Tf.current=null,Tx(t,n),g_(n,t),Z0(bu),sl=!!Ru,bu=Ru=null,t.current=n,Ax(n),n0(),qe=o,it=a,Cn.transition=s}else t.current=n;if(so&&(so=!1,Ui=t,Sl=r),s=t.pendingLanes,s===0&&(Hi=null),s0(n.stateNode),sn(t,St()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(yl)throw yl=!1,t=qu,qu=null,t;return Sl&1&&t.tag!==0&&ds(),s=t.pendingLanes,s&1?t===Ku?ca++:(ca=0,Ku=t):ca=0,Qi(),null}function ds(){if(Ui!==null){var t=ng(Sl),e=Cn.transition,n=it;try{if(Cn.transition=null,it=16>t?16:t,Ui===null)var i=!1;else{if(t=Ui,Ui=null,Sl=0,qe&6)throw Error(se(331));var r=qe;for(qe|=4,xe=t.current;xe!==null;){var s=xe,a=s.child;if(xe.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(xe=c;xe!==null;){var d=xe;switch(d.tag){case 0:case 11:case 15:oa(8,d,s)}var h=d.child;if(h!==null)h.return=d,xe=h;else for(;xe!==null;){d=xe;var f=d.sibling,m=d.return;if(h_(d),d===c){xe=null;break}if(f!==null){f.return=m,xe=f;break}xe=m}}}var _=s.alternate;if(_!==null){var S=_.child;if(S!==null){_.child=null;do{var p=S.sibling;S.sibling=null,S=p}while(S!==null)}}xe=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,xe=a;else e:for(;xe!==null;){if(s=xe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:oa(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,xe=u;break e}xe=s.return}}var v=t.current;for(xe=v;xe!==null;){a=xe;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,xe=x;else e:for(a=v;xe!==null;){if(o=xe,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Hl(9,o)}}catch(b){vt(o,o.return,b)}if(o===a){xe=null;break e}var w=o.sibling;if(w!==null){w.return=o.return,xe=w;break e}xe=o.return}}if(qe=r,Qi(),Zn&&typeof Zn.onPostCommitFiberRoot=="function")try{Zn.onPostCommitFiberRoot(Dl,t)}catch{}i=!0}return i}finally{it=n,Cn.transition=e}}return!1}function up(t,e,n){e=ys(n,e),e=n_(t,e,1),t=zi(t,e,1),e=$t(),t!==null&&(Na(t,1,e),sn(t,e))}function vt(t,e,n){if(t.tag===3)up(t,t,n);else for(;e!==null;){if(e.tag===3){up(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Hi===null||!Hi.has(i))){t=ys(n,t),t=i_(e,t,1),e=zi(e,t,1),t=$t(),e!==null&&(Na(e,1,t),sn(e,t));break}}e=e.return}}function Nx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=$t(),t.pingedLanes|=t.suspendedLanes&n,Nt===t&&(Ft&n)===n&&(At===4||At===3&&(Ft&130023424)===Ft&&500>St()-Cf?vr(t,0):Af|=n),sn(t,e)}function E_(t,e){e===0&&(t.mode&1?(e=qa,qa<<=1,!(qa&130023424)&&(qa=4194304)):e=1);var n=$t();t=gi(t,e),t!==null&&(Na(t,e,n),sn(t,n))}function Dx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),E_(t,n)}function Ix(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),E_(t,n)}var w_;w_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||nn.current)tn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return tn=!1,Sx(t,e,n);tn=!!(t.flags&131072)}else tn=!1,ft&&e.flags&1048576&&Rg(e,fl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Vo(t,e),t=e.pendingProps;var r=gs(e,jt.current);us(e,n),r=yf(null,e,i,t,r,n);var s=Sf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,rn(i)?(s=!0,ul(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,mf(e),r.updater=zl,e.stateNode=r,r._reactInternals=e,ku(e,i,t,n),e=Hu(null,e,i,!0,s,n)):(e.tag=0,ft&&s&&lf(e),Xt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Vo(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Fx(i),t=Fn(i,t),r){case 0:e=zu(null,e,i,t,n);break e;case 1:e=ep(null,e,i,t,n);break e;case 11:e=Qh(null,e,i,t,n);break e;case 14:e=Jh(null,e,i,Fn(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),zu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),ep(t,e,i,r,n);case 3:e:{if(o_(e),t===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Ig(t,e),ml(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ys(Error(se(423)),e),e=tp(t,e,i,n,r);break e}else if(i!==r){r=ys(Error(se(424)),e),e=tp(t,e,i,n,r);break e}else for(pn=Bi(e.stateNode.containerInfo.firstChild),mn=e,ft=!0,kn=null,n=Ng(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_s(),i===r){e=_i(t,e,n);break e}Xt(t,e,i,n)}e=e.child}return e;case 5:return Ug(e),t===null&&Uu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Pu(i,r)?a=null:s!==null&&Pu(i,s)&&(e.flags|=32),a_(t,e),Xt(t,e,a,n),e.child;case 6:return t===null&&Uu(e),null;case 13:return l_(t,e,n);case 4:return gf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=vs(e,null,i,n):Xt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),Qh(t,e,i,r,n);case 7:return Xt(t,e,e.pendingProps,n),e.child;case 8:return Xt(t,e,e.pendingProps.children,n),e.child;case 12:return Xt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,ot(hl,i._currentValue),i._currentValue=a,s!==null)if(jn(s.value,a)){if(s.children===r.children&&!nn.current){e=_i(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=hi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Fu(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(se(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Fu(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Xt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,us(e,n),r=bn(r),i=i(r),e.flags|=1,Xt(t,e,i,n),e.child;case 14:return i=e.type,r=Fn(i,e.pendingProps),r=Fn(i.type,r),Jh(t,e,i,r,n);case 15:return r_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),Vo(t,e),e.tag=1,rn(i)?(t=!0,ul(e)):t=!1,us(e,n),t_(e,i,r),ku(e,i,r,n),Hu(null,e,i,!0,t,n);case 19:return c_(t,e,n);case 22:return s_(t,e,n)}throw Error(se(156,e.tag))};function T_(t,e){return Qm(t,e)}function Ux(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(t,e,n,i){return new Ux(t,e,n,i)}function Lf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Fx(t){if(typeof t=="function")return Lf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===qd)return 11;if(t===Kd)return 14}return 2}function Gi(t,e){var n=t.alternate;return n===null?(n=Tn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Wo(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Lf(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Yr:return xr(n.children,r,s,e);case Yd:a=8,r|=8;break;case lu:return t=Tn(12,n,e,r|2),t.elementType=lu,t.lanes=s,t;case cu:return t=Tn(13,n,e,r),t.elementType=cu,t.lanes=s,t;case uu:return t=Tn(19,n,e,r),t.elementType=uu,t.lanes=s,t;case Um:return Gl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Dm:a=10;break e;case Im:a=9;break e;case qd:a=11;break e;case Kd:a=14;break e;case bi:a=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=Tn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function xr(t,e,n,i){return t=Tn(7,t,i,e),t.lanes=n,t}function Gl(t,e,n,i){return t=Tn(22,t,i,e),t.elementType=Um,t.lanes=n,t.stateNode={isHidden:!1},t}function Tc(t,e,n){return t=Tn(6,t,null,e),t.lanes=n,t}function Ac(t,e,n){return e=Tn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ox(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ac(0),this.expirationTimes=ac(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ac(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Nf(t,e,n,i,r,s,a,o,l){return t=new Ox(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Tn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},mf(s),t}function kx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$r,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function A_(t){if(!t)return $i;t=t._reactInternals;e:{if(br(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(rn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(rn(n))return Ag(t,n,e)}return e}function C_(t,e,n,i,r,s,a,o,l){return t=Nf(n,i,!0,t,r,s,a,o,l),t.context=A_(null),n=t.current,i=$t(),r=Vi(n),s=hi(i,r),s.callback=e??null,zi(n,s,r),t.current.lanes=r,Na(t,r,i),sn(t,i),t}function jl(t,e,n,i){var r=e.current,s=$t(),a=Vi(r);return n=A_(n),e.context===null?e.context=n:e.pendingContext=n,e=hi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=zi(r,e,a),t!==null&&(Gn(t,r,a,s),Bo(t,r,a)),a}function El(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function dp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Df(t,e){dp(t,e),(t=t.alternate)&&dp(t,e)}function Bx(){return null}var R_=typeof reportError=="function"?reportError:function(t){console.error(t)};function If(t){this._internalRoot=t}Wl.prototype.render=If.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));jl(t,e,null,null)};Wl.prototype.unmount=If.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;wr(function(){jl(null,t,null,null)}),e[mi]=null}};function Wl(t){this._internalRoot=t}Wl.prototype.unstable_scheduleHydration=function(t){if(t){var e=sg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Li.length&&e!==0&&e<Li[n].priority;n++);Li.splice(n,0,t),n===0&&og(t)}};function Uf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Xl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function fp(){}function zx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=El(a);s.call(c)}}var a=C_(e,i,t,0,null,!1,!1,"",fp);return t._reactRootContainer=a,t[mi]=a.current,ya(t.nodeType===8?t.parentNode:t),wr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=El(l);o.call(c)}}var l=Nf(t,0,!1,null,null,!1,!1,"",fp);return t._reactRootContainer=l,t[mi]=l.current,ya(t.nodeType===8?t.parentNode:t),wr(function(){jl(e,l,n,i)}),l}function $l(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=El(a);o.call(l)}}jl(e,a,t,r)}else a=zx(n,e,t,r,i);return El(a)}ig=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Zs(e.pendingLanes);n!==0&&(Jd(e,n|1),sn(e,St()),!(qe&6)&&(Ss=St()+500,Qi()))}break;case 13:wr(function(){var i=gi(t,1);if(i!==null){var r=$t();Gn(i,t,1,r)}}),Df(t,1)}};ef=function(t){if(t.tag===13){var e=gi(t,134217728);if(e!==null){var n=$t();Gn(e,t,134217728,n)}Df(t,134217728)}};rg=function(t){if(t.tag===13){var e=Vi(t),n=gi(t,e);if(n!==null){var i=$t();Gn(n,t,e,i)}Df(t,e)}};sg=function(){return it};ag=function(t,e){var n=it;try{return it=t,e()}finally{it=n}};yu=function(t,e,n){switch(e){case"input":if(hu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Ol(i);if(!r)throw Error(se(90));Om(i),hu(i,r)}}}break;case"textarea":Bm(t,n);break;case"select":e=n.value,e!=null&&as(t,!!n.multiple,e,!1)}};Xm=Rf;$m=wr;var Hx={usingClientEntryPoint:!1,Events:[Ia,Qr,Ol,jm,Wm,Rf]},zs={findFiberByHostInstance:hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Vx={bundleType:zs.bundleType,version:zs.version,rendererPackageName:zs.rendererPackageName,rendererConfig:zs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Km(t),t===null?null:t.stateNode},findFiberByHostInstance:zs.findFiberByHostInstance||Bx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ao=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ao.isDisabled&&ao.supportsFiber)try{Dl=ao.inject(Vx),Zn=ao}catch{}}vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hx;vn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Uf(e))throw Error(se(200));return kx(t,e,null,n)};vn.createRoot=function(t,e){if(!Uf(t))throw Error(se(299));var n=!1,i="",r=R_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Nf(t,1,!1,null,null,n,!1,i,r),t[mi]=e.current,ya(t.nodeType===8?t.parentNode:t),new If(e)};vn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=Km(e),t=t===null?null:t.stateNode,t};vn.flushSync=function(t){return wr(t)};vn.hydrate=function(t,e,n){if(!Xl(e))throw Error(se(200));return $l(null,t,e,!0,n)};vn.hydrateRoot=function(t,e,n){if(!Uf(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=R_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=C_(e,null,t,1,n??null,r,!1,s,a),t[mi]=e.current,ya(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Wl(e)};vn.render=function(t,e,n){if(!Xl(e))throw Error(se(200));return $l(null,t,e,!1,n)};vn.unmountComponentAtNode=function(t){if(!Xl(t))throw Error(se(40));return t._reactRootContainer?(wr(function(){$l(null,null,t,!1,function(){t._reactRootContainer=null,t[mi]=null})}),!0):!1};vn.unstable_batchedUpdates=Rf;vn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Xl(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return $l(t,e,n,!1,i)};vn.version="18.3.1-next-f1338f8080-20240426";function b_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b_)}catch(t){console.error(t)}}b_(),bm.exports=vn;var Gx=bm.exports,P_,hp=Gx;P_=hp.createRoot,hp.hydrateRoot;function jx(){return""}async function oo(t,e,n,i){try{const r=await fetch(jx()+e,{method:t,headers:{...i!==void 0?{"Content-Type":"application/json"}:{},...n?{"X-Token":n}:{}},body:i!==void 0?JSON.stringify(i):void 0}),s=await r.json().catch(()=>({ok:!1,errors:[r.statusText]}));return{ok:!!s.ok,errors:s.errors,data:s}}catch(r){return{ok:!1,errors:[String(r)],data:{}}}}const Vt={get:t=>oo("GET",t,""),getAuthed:(t,e)=>oo("GET",t,e),post:(t,e,n)=>oo("POST",t,e,n),del:(t,e)=>oo("DELETE",t,e)};function Wx(){const t=new URLSearchParams(window.location.search).get("token");if(t)return t;try{return localStorage.getItem("rl.token")??""}catch{return""}}function Xx(t){try{localStorage.setItem("rl.token",t)}catch{}}const pp=6e3;function $x(t){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${t}`}function Yx(t){let e=((t+180)%360+360)%360-180;return e===-180&&(e=180),e}function qx(t,e){const[n,i]=he.useState(!1),[r,s]=he.useState(!1),[a,o]=he.useState(null),[l,c]=he.useState(null),[d,h]=he.useState(null),[f,m]=he.useState(null),[_,S]=he.useState([]),[p,u]=he.useState([]),v=he.useRef([]),[x,w]=he.useState(0);he.useEffect(()=>{if(v.current=[],w(k=>k+1),c(null),h(null),m(null),S([]),s(!1),!t){i(!1);return}let M=null,P,B=!1,y=0;const T=()=>{M=new WebSocket($x("/ws/telemetry?session="+encodeURIComponent(t))),M.onopen=()=>{i(!0),o(null)},M.onclose=k=>{if(i(!1),k.code===4404||k.code===4410){s(!0);return}B||(P=window.setTimeout(T,1200))},M.onerror=()=>o("telemetry socket error"),M.onmessage=k=>{const U=JSON.parse(k.data);if(U.type==="no_session"){s(!0);return}if(U.type==="world"){c(U),v.current=[],w(q=>q+1),S([]),m(null);return}if(U.type==="world_update"){c({...U,type:"world"});return}if(U.type==="results"){m(U.metrics);return}h(U),U.path&&S(U.path);const j=U.ground_truth,X={t:U.t,posError:j?j.position_error_m:null,posSigma:U.estimate.pos_sigma_h,nis:U.gnss_integrity.nis,cusum:U.gnss_integrity.cusum_max,speed:j?j.speed:0,speedCmd:U.control?U.control.speed_cmd:0,state:U.resilience.state,flagged:U.gnss_integrity.flagged,estX:U.estimate.position[0],estY:U.estimate.position[1],trueX:j?j.position[0]:null,trueY:j?j.position[1]:null,yawErr:j?Yx(U.estimate.yaw_deg-j.yaw_deg):null,clearance:U.mission_progress.min_clearance_m},O=v.current;O.length&&O[O.length-1].t>=X.t||(O.push(X),O.length>pp&&O.splice(0,O.length-pp),++y%5===0&&w(q=>q+1))}};return T(),()=>{B=!0,P&&window.clearTimeout(P),M==null||M.close()}},[t]);const b=he.useCallback(async(M,P={})=>{if(!t)return!1;const B=await Vt.post(`/api/sessions/${encodeURIComponent(t)}/command`,e,{command:M,args:P});return u(y=>[B.ok?`${M}: ${JSON.stringify(B.data.result??{})}`:`refused (${M}): ${(B.errors??["error"]).join("; ")}`,...y].slice(0,40)),B.ok},[t,e]),E=he.useMemo(()=>v.current.slice(),[x]);return{connected:n,missing:r,error:a,world:l,latest:d,results:f,history:E,path:_,sendCommand:b,commandLog:p}}function st({title:t,children:e,right:n,className:i=""}){return g.jsxs("section",{className:`card ${i}`,children:[g.jsxs("header",{children:[g.jsx("h2",{children:t}),n]}),g.jsx("div",{className:"card-body",children:e})]})}function ye({label:t,value:e,unit:n,tone:i="",hint:r}){return g.jsxs("div",{className:`stat ${i}`,title:r,children:[g.jsx("span",{className:"stat-label",children:t}),g.jsxs("span",{className:"stat-value",children:[e,n?g.jsx("small",{children:n}):null]})]})}function Ff({state:t}){const e=t==="NORMAL"?"ok":t==="DEGRADED"||t==="RECOVERY"?"warn":t==="IDLE"?"":"bad";return g.jsx("span",{className:`badge ${e}`,children:t.replace(/_/g," ")})}function Le(t,e=2){return t==null||!Number.isFinite(t)?"–":t.toFixed(e)}function Xo({rows:t,series:e,height:n=150,yLabel:i,yMax:r,shadeFlagged:s=!1,window:a=1200}){const l=n,c=46,d=20,h=8,f=8,m=he.useMemo(()=>t.slice(-a),[t,a]),{paths:_,flagSpans:S,t0:p,t1:u,lo:v,hi:x}=he.useMemo(()=>{if(m.length<2)return{paths:[],flagSpans:[],t0:0,t1:1,lo:0,hi:1};const b=m[0].t,E=m[m.length-1].t,M=Math.max(E-b,1e-6);let P=1/0,B=-1/0;for(const X of e)for(const O of m){const q=O[X.key];typeof q=="number"&&Number.isFinite(q)&&(q<P&&(P=q),q>B&&(B=q))}Number.isFinite(P)||(P=0,B=1),r!==void 0&&(B=Math.min(B,r)),P=Math.min(P,0),B-P<1e-9&&(B=P+1);const y=(B-P)*.08;B+=y;const T=X=>c+(X-b)/M*(760-c-f),k=X=>l-d-(X-P)/(B-P)*(l-d-h),U=e.map(X=>{let O="",q=!1;for(const N of m){const K=N[X.key];if(typeof K!="number"||!Number.isFinite(K)){q=!1;continue}const Z=k(Math.min(K,B));O+=`${q?"L":"M"}${T(N.t).toFixed(1)},${Z.toFixed(1)}`,q=!0}return{...X,d:O}}),j=[];if(s){let X=null;for(const O of m)O.flagged&&X===null&&(X=O.t),!O.flagged&&X!==null&&(j.push({x:T(X),w:Math.max(T(O.t)-T(X),1)}),X=null);X!==null&&j.push({x:T(X),w:Math.max(T(E)-T(X),1)})}return{paths:U,flagSpans:j,t0:b,t1:E,lo:P,hi:B}},[m,e,r,s,l]);if(m.length<2)return g.jsx("div",{className:"chart-empty",style:{height:l},children:"waiting for telemetry…"});const w=[v,v+(x-v)/2,x];return g.jsxs("div",{className:"chart",children:[g.jsxs("svg",{viewBox:`0 0 760 ${l}`,width:"100%",height:l,role:"img","aria-label":i??"time series",children:[S.map((b,E)=>g.jsx("rect",{x:b.x,y:h,width:b.w,height:l-d-h,className:"chart-flag"},E)),w.map((b,E)=>{const M=l-d-(b-v)/(x-v)*(l-d-h);return g.jsxs("g",{children:[g.jsx("line",{x1:c,x2:760-f,y1:M,y2:M,className:"chart-grid"}),g.jsx("text",{x:c-6,y:M+3,className:"chart-tick",textAnchor:"end",children:Math.abs(b)>=100?b.toFixed(0):b.toFixed(2)})]},E)}),g.jsxs("text",{x:c,y:l-6,className:"chart-tick",children:[p.toFixed(0),"s"]}),g.jsxs("text",{x:760-f,y:l-6,className:"chart-tick",textAnchor:"end",children:[u.toFixed(0),"s"]}),_.map(b=>g.jsx("path",{d:b.d,fill:"none",stroke:b.color,strokeWidth:1.6,strokeDasharray:b.dashed?"4 3":void 0},String(b.key)))]}),g.jsxs("div",{className:"chart-legend",children:[e.map(b=>g.jsxs("span",{children:[g.jsx("i",{style:{background:b.color}}),b.label]},String(b.key))),s&&g.jsxs("span",{children:[g.jsx("i",{className:"legend-flag"}),"GNSS inconsistent"]})]})]})}function Kx({latest:t,world:e,history:n}){const i=t.resilience,r=t.gnss_integrity,s=t.mission_progress,a=t.ground_truth,o=Math.max(1e-6,Math.hypot(e.mission.goal[0]-e.mission.start[0],e.mission.goal[1]-e.mission.start[1])),l=Math.max(0,Math.min(1,1-s.distance_to_goal_m/o));return g.jsxs("div",{className:"grid",children:[g.jsxs(st,{title:"Mission",right:g.jsx(Ff,{state:i.state}),className:"span2",children:[g.jsxs("div",{className:"stat-row",children:[g.jsx(ye,{label:"scenario",value:e.scenario.id}),g.jsx(ye,{label:"seed",value:e.scenario.seed,hint:"Fixed per trial so every run is reproducible."}),g.jsx(ye,{label:"time",value:Le(t.t,1),unit:"s"}),g.jsx(ye,{label:"nav mode",value:i.nav_mode.replace(/_/g," ")}),g.jsx(ye,{label:"speed limit",value:Le(i.speed_limit,2),unit:"m/s",tone:i.speed_limit<1?"warn":"ok"})]}),g.jsxs("div",{className:"progress",children:[g.jsx("div",{className:"progress-fill",style:{width:`${l*100}%`}}),g.jsxs("span",{children:[Le(s.distance_travelled_m,0)," m driven · ",Le(s.distance_to_goal_m,0)," m to goal"]})]}),g.jsx("p",{className:"reason",children:i.reason}),!i.allow_motion&&g.jsxs("p",{className:"alert",children:["Motion inhibited — ",i.safe_action??"safe action"," held."]})]}),g.jsxs(st,{title:"Localisation",children:[g.jsxs("div",{className:"stat-row",children:[g.jsx(ye,{label:"reported σ",value:Le(t.estimate.pos_sigma_h),unit:"m",hint:"The filter's own horizontal uncertainty."}),g.jsx(ye,{label:"true error",value:a?Le(a.position_error_m):"n/a",unit:"m",tone:a?a.position_error_m<2*t.estimate.pos_sigma_h?"ok":"warn":"",hint:"Scored against ground truth; not available to the navigator."}),g.jsx(ye,{label:"yaw σ",value:Le(t.estimate.yaw_sigma_deg,1),unit:"°"})]}),g.jsx(Xo,{rows:n,height:132,shadeFlagged:!0,series:[{key:"posError",label:"true error (m)",color:"#f0803c"},{key:"posSigma",label:"reported σ (m)",color:"#4a9eff",dashed:!0}]})]}),g.jsxs(st,{title:"GNSS integrity",children:[g.jsxs("div",{className:"stat-row",children:[g.jsx(ye,{label:"status",value:r.status,tone:r.flagged?"bad":"ok",hint:"Evidence of disagreement between streams. The monitor cannot identify a cause."}),g.jsx(ye,{label:"NIS",value:Le(r.nis)}),g.jsx(ye,{label:"CUSUM",value:Le(r.cusum_max,1)}),g.jsx(ye,{label:"satellites",value:t.sensors.gnss?t.sensors.gnss.status:"–"})]}),r.reasons.length>0&&g.jsx("ul",{className:"reasons",children:r.reasons.map(c=>g.jsx("li",{children:c},c))}),g.jsx("p",{className:"caveat",children:"A flag means the GNSS solution is inconsistent with the inertial and odometric evidence. Interference, multipath, a receiver fault and an estimator fault all look alike from here, so no cause is claimed."})]}),g.jsxs(st,{title:"Faults",className:"span2",children:[t.faults_active.length===0?g.jsxs("p",{className:"muted",children:["No fault active."," ",e.faults_declared.length>0&&`${e.faults_declared.length} declared in this scenario.`]}):g.jsxs("table",{className:"table",children:[g.jsx("thead",{children:g.jsxs("tr",{children:[g.jsx("th",{children:"type"}),g.jsx("th",{children:"target"}),g.jsx("th",{children:"onset"}),g.jsx("th",{children:"detected"}),g.jsx("th",{children:"latency"}),g.jsx("th",{children:"by"})]})}),g.jsx("tbody",{children:t.faults_active.map((c,d)=>g.jsxs("tr",{children:[g.jsx("td",{children:c.type.replace(/_/g," ")}),g.jsx("td",{children:c.target}),g.jsxs("td",{children:[Le(c.onset,1)," s"]}),g.jsx("td",{className:c.detected?"ok-text":"warn-text",children:c.detected?Le(c.detected_time,1)+" s":"not yet"}),g.jsx("td",{children:c.detection_latency_s===null?"–":Le(c.detection_latency_s,2)+" s"}),g.jsx("td",{children:c.detected_by||"–"})]},d))})]}),g.jsxs("div",{className:"stat-row",children:[g.jsx(ye,{label:"replans",value:s.replans}),g.jsx(ye,{label:"failed plans",value:s.failed_plans,tone:s.failed_plans>0?"warn":"ok"}),g.jsx(ye,{label:"collisions",value:s.collisions,tone:s.collisions>0?"bad":"ok"}),g.jsx(ye,{label:"min clearance",value:Le(s.min_clearance_m),unit:"m",tone:s.min_clearance_m<.5?"bad":"ok"}),g.jsx(ye,{label:"dead reckoning",value:Le(i.dead_reckoning_time_s,1),unit:"s",tone:i.dead_reckoning_time_s>0?"warn":"ok"})]})]})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Of="169",Zx=0,mp=1,Qx=2,L_=1,Jx=2,ai=3,Yi=0,an=1,Kn=2,ji=0,fs=1,gp=2,_p=3,vp=4,ey=5,dr=100,ty=101,ny=102,iy=103,ry=104,sy=200,ay=201,oy=202,ly=203,Ju=204,ed=205,cy=206,uy=207,dy=208,fy=209,hy=210,py=211,my=212,gy=213,_y=214,td=0,nd=1,id=2,Ms=3,rd=4,sd=5,ad=6,od=7,N_=0,vy=1,xy=2,Wi=0,yy=1,Sy=2,My=3,Ey=4,wy=5,Ty=6,Ay=7,D_=300,Es=301,ws=302,ld=303,cd=304,Yl=306,ud=1e3,gr=1001,dd=1002,An=1003,Cy=1004,lo=1005,Bn=1006,Cc=1007,_r=1008,vi=1009,I_=1010,U_=1011,ba=1012,kf=1013,Tr=1014,di=1015,Fa=1016,Bf=1017,zf=1018,Ts=1020,F_=35902,O_=1021,k_=1022,Hn=1023,B_=1024,z_=1025,hs=1026,As=1027,H_=1028,Hf=1029,V_=1030,Vf=1031,Gf=1033,$o=33776,Yo=33777,qo=33778,Ko=33779,fd=35840,hd=35841,pd=35842,md=35843,gd=36196,_d=37492,vd=37496,xd=37808,yd=37809,Sd=37810,Md=37811,Ed=37812,wd=37813,Td=37814,Ad=37815,Cd=37816,Rd=37817,bd=37818,Pd=37819,Ld=37820,Nd=37821,Zo=36492,Dd=36494,Id=36495,G_=36283,Ud=36284,Fd=36285,Od=36286,Ry=3200,by=3201,j_=0,Py=1,Di="",$n="srgb",Ji="srgb-linear",jf="display-p3",ql="display-p3-linear",wl="linear",ut="srgb",Tl="rec709",Al="p3",Dr=7680,xp=519,Ly=512,Ny=513,Dy=514,W_=515,Iy=516,Uy=517,Fy=518,Oy=519,yp=35044,Sp="300 es",fi=2e3,Cl=2001;class Ls{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rc=Math.PI/180,kd=180/Math.PI;function Oa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[t&255]+zt[t>>8&255]+zt[t>>16&255]+zt[t>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[n&63|128]+zt[n>>8&255]+"-"+zt[n>>16&255]+zt[n>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function en(t,e,n){return Math.max(e,Math.min(n,t))}function ky(t,e){return(t%e+e)%e}function bc(t,e,n){return(1-n)*t+n*e}function Hs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Qt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ze{constructor(e=0,n=0){Ze.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(en(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,n,i,r,s,a,o,l,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],h=i[7],f=i[2],m=i[5],_=i[8],S=r[0],p=r[3],u=r[6],v=r[1],x=r[4],w=r[7],b=r[2],E=r[5],M=r[8];return s[0]=a*S+o*v+l*b,s[3]=a*p+o*x+l*E,s[6]=a*u+o*w+l*M,s[1]=c*S+d*v+h*b,s[4]=c*p+d*x+h*E,s[7]=c*u+d*w+h*M,s[2]=f*S+m*v+_*b,s[5]=f*p+m*x+_*E,s[8]=f*u+m*w+_*M,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return n*a*d-n*o*c-i*s*d+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=d*a-o*c,f=o*l-d*s,m=c*s-a*l,_=n*h+i*f+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return e[0]=h*S,e[1]=(r*c-d*i)*S,e[2]=(o*i-r*a)*S,e[3]=f*S,e[4]=(d*n-r*l)*S,e[5]=(r*s-o*n)*S,e[6]=m*S,e[7]=(i*l-c*n)*S,e[8]=(a*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Pc.makeScale(e,n)),this}rotate(e){return this.premultiply(Pc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Pc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Pc=new Ve;function X_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Rl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function By(){const t=Rl("canvas");return t.style.display="block",t}const Mp={};function Qo(t){t in Mp||(Mp[t]=!0,console.warn(t))}function zy(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function Hy(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Vy(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ep=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),wp=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Vs={[Ji]:{transfer:wl,primaries:Tl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[$n]:{transfer:ut,primaries:Tl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[ql]:{transfer:wl,primaries:Al,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(wp),fromReference:t=>t.applyMatrix3(Ep)},[jf]:{transfer:ut,primaries:Al,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(wp),fromReference:t=>t.applyMatrix3(Ep).convertLinearToSRGB()}},Gy=new Set([Ji,ql]),tt={enabled:!0,_workingColorSpace:Ji,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!Gy.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Vs[e].toReference,r=Vs[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Vs[t].primaries},getTransfer:function(t){return t===Di?wl:Vs[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Vs[e].luminanceCoefficients)}};function ps(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Lc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ir;class jy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ir===void 0&&(Ir=Rl("canvas")),Ir.width=e.width,Ir.height=e.height;const i=Ir.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ir}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Rl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ps(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ps(n[i]/255)*255):n[i]=ps(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Wy=0;class $_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wy++}),this.uuid=Oa(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Nc(r[a].image)):s.push(Nc(r[a]))}else s=Nc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Nc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?jy.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xy=0;class on extends Ls{constructor(e=on.DEFAULT_IMAGE,n=on.DEFAULT_MAPPING,i=gr,r=gr,s=Bn,a=_r,o=Hn,l=vi,c=on.DEFAULT_ANISOTROPY,d=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xy++}),this.uuid=Oa(),this.name="",this.source=new $_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==D_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ud:e.x=e.x-Math.floor(e.x);break;case gr:e.x=e.x<0?0:1;break;case dd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ud:e.y=e.y-Math.floor(e.y);break;case gr:e.y=e.y<0?0:1;break;case dd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=D_;on.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,n=0,i=0,r=1){xt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],h=l[8],f=l[1],m=l[5],_=l[9],S=l[2],p=l[6],u=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-S)<.01&&Math.abs(_-p)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+S)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,w=(m+1)/2,b=(u+1)/2,E=(d+f)/4,M=(h+S)/4,P=(_+p)/4;return x>w&&x>b?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=E/i,s=M/i):w>b?w<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),i=E/r,s=P/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=M/s,r=P/s),this.set(i,r,s,n),this}let v=Math.sqrt((p-_)*(p-_)+(h-S)*(h-S)+(f-d)*(f-d));return Math.abs(v)<.001&&(v=1),this.x=(p-_)/v,this.y=(h-S)/v,this.z=(f-d)/v,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $y extends Ls{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new xt(0,0,e,n),this.scissorTest=!1,this.viewport=new xt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new on(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new $_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ar extends $y{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Y_ extends on{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=An,this.minFilter=An,this.wrapR=gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yy extends on{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=An,this.minFilter=An,this.wrapR=gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ka{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],d=i[r+2],h=i[r+3];const f=s[a+0],m=s[a+1],_=s[a+2],S=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h;return}if(o===1){e[n+0]=f,e[n+1]=m,e[n+2]=_,e[n+3]=S;return}if(h!==S||l!==f||c!==m||d!==_){let p=1-o;const u=l*f+c*m+d*_+h*S,v=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const b=Math.sqrt(x),E=Math.atan2(b,u*v);p=Math.sin(p*E)/b,o=Math.sin(o*E)/b}const w=o*v;if(l=l*p+f*w,c=c*p+m*w,d=d*p+_*w,h=h*p+S*w,p===1-o){const b=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=b,c*=b,d*=b,h*=b}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],d=i[r+3],h=s[a],f=s[a+1],m=s[a+2],_=s[a+3];return e[n]=o*_+d*h+l*m-c*f,e[n+1]=l*_+d*f+c*h-o*m,e[n+2]=c*_+d*m+o*f-l*h,e[n+3]=d*_-o*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(r/2),h=o(s/2),f=l(i/2),m=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=f*d*h+c*m*_,this._y=c*m*h-f*d*_,this._z=c*d*_+f*m*h,this._w=c*d*h-f*m*_;break;case"YXZ":this._x=f*d*h+c*m*_,this._y=c*m*h-f*d*_,this._z=c*d*_-f*m*h,this._w=c*d*h+f*m*_;break;case"ZXY":this._x=f*d*h-c*m*_,this._y=c*m*h+f*d*_,this._z=c*d*_+f*m*h,this._w=c*d*h-f*m*_;break;case"ZYX":this._x=f*d*h-c*m*_,this._y=c*m*h+f*d*_,this._z=c*d*_-f*m*h,this._w=c*d*h+f*m*_;break;case"YZX":this._x=f*d*h+c*m*_,this._y=c*m*h+f*d*_,this._z=c*d*_-f*m*h,this._w=c*d*h-f*m*_;break;case"XZY":this._x=f*d*h-c*m*_,this._y=c*m*h-f*d*_,this._z=c*d*_+f*m*h,this._w=c*d*h+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],d=n[6],h=n[10],f=i+o+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(d-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>h){const m=2*Math.sqrt(1+i-o-h);this._w=(d-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-i-h);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+h-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(en(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-i*c,this._z=s*d+a*c+i*l-r*o,this._w=a*d-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),h=Math.sin((1-n)*d)/c,f=Math.sin(n*d)/c;return this._w=a*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,n=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Tp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Tp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),d=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+l*c+a*h-o*d,this.y=i+l*d+o*c-s*h,this.z=r+l*h+s*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Dc.copy(this).projectOnVector(e),this.sub(Dc)}reflect(e){return this.sub(Dc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(en(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dc=new H,Tp=new ka;class Ba{constructor(e=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Dn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Dn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Dn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Dn):Dn.fromBufferAttribute(s,a),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),co.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),co.copy(i.boundingBox)),co.applyMatrix4(e.matrixWorld),this.union(co)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gs),uo.subVectors(this.max,Gs),Ur.subVectors(e.a,Gs),Fr.subVectors(e.b,Gs),Or.subVectors(e.c,Gs),Mi.subVectors(Fr,Ur),Ei.subVectors(Or,Fr),tr.subVectors(Ur,Or);let n=[0,-Mi.z,Mi.y,0,-Ei.z,Ei.y,0,-tr.z,tr.y,Mi.z,0,-Mi.x,Ei.z,0,-Ei.x,tr.z,0,-tr.x,-Mi.y,Mi.x,0,-Ei.y,Ei.x,0,-tr.y,tr.x,0];return!Ic(n,Ur,Fr,Or,uo)||(n=[1,0,0,0,1,0,0,0,1],!Ic(n,Ur,Fr,Or,uo))?!1:(fo.crossVectors(Mi,Ei),n=[fo.x,fo.y,fo.z],Ic(n,Ur,Fr,Or,uo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ti=[new H,new H,new H,new H,new H,new H,new H,new H],Dn=new H,co=new Ba,Ur=new H,Fr=new H,Or=new H,Mi=new H,Ei=new H,tr=new H,Gs=new H,uo=new H,fo=new H,nr=new H;function Ic(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){nr.fromArray(t,s);const o=r.x*Math.abs(nr.x)+r.y*Math.abs(nr.y)+r.z*Math.abs(nr.z),l=e.dot(nr),c=n.dot(nr),d=i.dot(nr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const qy=new Ba,js=new H,Uc=new H;class za{constructor(e=new H,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):qy.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;js.subVectors(e,this.center);const n=js.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(js,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(js.copy(e.center).add(Uc)),this.expandByPoint(js.copy(e.center).sub(Uc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ni=new H,Fc=new H,ho=new H,wi=new H,Oc=new H,po=new H,kc=new H;class Wf{constructor(e=new H,n=new H(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ni)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ni.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ni.copy(this.origin).addScaledVector(this.direction,n),ni.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Fc.copy(e).add(n).multiplyScalar(.5),ho.copy(n).sub(e).normalize(),wi.copy(this.origin).sub(Fc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(ho),o=wi.dot(this.direction),l=-wi.dot(ho),c=wi.lengthSq(),d=Math.abs(1-a*a);let h,f,m,_;if(d>0)if(h=a*l-o,f=a*o-l,_=s*d,h>=0)if(f>=-_)if(f<=_){const S=1/d;h*=S,f*=S,m=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Fc).addScaledVector(ho,f),m}intersectSphere(e,n){ni.subVectors(e.center,this.origin);const i=ni.dot(this.direction),r=ni.dot(ni)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),d>=0?(s=(e.min.y-f.y)*d,a=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,a=(e.min.y-f.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ni)!==null}intersectTriangle(e,n,i,r,s){Oc.subVectors(n,e),po.subVectors(i,e),kc.crossVectors(Oc,po);let a=this.direction.dot(kc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;wi.subVectors(this.origin,e);const l=o*this.direction.dot(po.crossVectors(wi,po));if(l<0)return null;const c=o*this.direction.dot(Oc.cross(wi));if(c<0||l+c>a)return null;const d=-o*wi.dot(kc);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,n,i,r,s,a,o,l,c,d,h,f,m,_,S,p){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,d,h,f,m,_,S,p)}set(e,n,i,r,s,a,o,l,c,d,h,f,m,_,S,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=f,u[3]=m,u[7]=_,u[11]=S,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/kr.setFromMatrixColumn(e,0).length(),s=1/kr.setFromMatrixColumn(e,1).length(),a=1/kr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*d,m=a*h,_=o*d,S=o*h;n[0]=l*d,n[4]=-l*h,n[8]=c,n[1]=m+_*c,n[5]=f-S*c,n[9]=-o*l,n[2]=S-f*c,n[6]=_+m*c,n[10]=a*l}else if(e.order==="YXZ"){const f=l*d,m=l*h,_=c*d,S=c*h;n[0]=f+S*o,n[4]=_*o-m,n[8]=a*c,n[1]=a*h,n[5]=a*d,n[9]=-o,n[2]=m*o-_,n[6]=S+f*o,n[10]=a*l}else if(e.order==="ZXY"){const f=l*d,m=l*h,_=c*d,S=c*h;n[0]=f-S*o,n[4]=-a*h,n[8]=_+m*o,n[1]=m+_*o,n[5]=a*d,n[9]=S-f*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const f=a*d,m=a*h,_=o*d,S=o*h;n[0]=l*d,n[4]=_*c-m,n[8]=f*c+S,n[1]=l*h,n[5]=S*c+f,n[9]=m*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*c,_=o*l,S=o*c;n[0]=l*d,n[4]=S-f*h,n[8]=_*h+m,n[1]=h,n[5]=a*d,n[9]=-o*d,n[2]=-c*d,n[6]=m*h+_,n[10]=f-S*h}else if(e.order==="XZY"){const f=a*l,m=a*c,_=o*l,S=o*c;n[0]=l*d,n[4]=-h,n[8]=c*d,n[1]=f*h+S,n[5]=a*d,n[9]=m*h-_,n[2]=_*h-m,n[6]=o*d,n[10]=S*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ky,e,Zy)}lookAt(e,n,i){const r=this.elements;return dn.subVectors(e,n),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Ti.crossVectors(i,dn),Ti.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Ti.crossVectors(i,dn)),Ti.normalize(),mo.crossVectors(dn,Ti),r[0]=Ti.x,r[4]=mo.x,r[8]=dn.x,r[1]=Ti.y,r[5]=mo.y,r[9]=dn.y,r[2]=Ti.z,r[6]=mo.z,r[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],h=i[5],f=i[9],m=i[13],_=i[2],S=i[6],p=i[10],u=i[14],v=i[3],x=i[7],w=i[11],b=i[15],E=r[0],M=r[4],P=r[8],B=r[12],y=r[1],T=r[5],k=r[9],U=r[13],j=r[2],X=r[6],O=r[10],q=r[14],N=r[3],K=r[7],Z=r[11],ae=r[15];return s[0]=a*E+o*y+l*j+c*N,s[4]=a*M+o*T+l*X+c*K,s[8]=a*P+o*k+l*O+c*Z,s[12]=a*B+o*U+l*q+c*ae,s[1]=d*E+h*y+f*j+m*N,s[5]=d*M+h*T+f*X+m*K,s[9]=d*P+h*k+f*O+m*Z,s[13]=d*B+h*U+f*q+m*ae,s[2]=_*E+S*y+p*j+u*N,s[6]=_*M+S*T+p*X+u*K,s[10]=_*P+S*k+p*O+u*Z,s[14]=_*B+S*U+p*q+u*ae,s[3]=v*E+x*y+w*j+b*N,s[7]=v*M+x*T+w*X+b*K,s[11]=v*P+x*k+w*O+b*Z,s[15]=v*B+x*U+w*q+b*ae,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],h=e[6],f=e[10],m=e[14],_=e[3],S=e[7],p=e[11],u=e[15];return _*(+s*l*h-r*c*h-s*o*f+i*c*f+r*o*m-i*l*m)+S*(+n*l*m-n*c*f+s*a*f-r*a*m+r*c*d-s*l*d)+p*(+n*c*h-n*o*m-s*a*h+i*a*m+s*o*d-i*c*d)+u*(-r*o*d-n*l*h+n*o*f+r*a*h-i*a*f+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=e[9],f=e[10],m=e[11],_=e[12],S=e[13],p=e[14],u=e[15],v=h*p*c-S*f*c+S*l*m-o*p*m-h*l*u+o*f*u,x=_*f*c-d*p*c-_*l*m+a*p*m+d*l*u-a*f*u,w=d*S*c-_*h*c+_*o*m-a*S*m-d*o*u+a*h*u,b=_*h*l-d*S*l-_*o*f+a*S*f+d*o*p-a*h*p,E=n*v+i*x+r*w+s*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=v*M,e[1]=(S*f*s-h*p*s-S*r*m+i*p*m+h*r*u-i*f*u)*M,e[2]=(o*p*s-S*l*s+S*r*c-i*p*c-o*r*u+i*l*u)*M,e[3]=(h*l*s-o*f*s-h*r*c+i*f*c+o*r*m-i*l*m)*M,e[4]=x*M,e[5]=(d*p*s-_*f*s+_*r*m-n*p*m-d*r*u+n*f*u)*M,e[6]=(_*l*s-a*p*s-_*r*c+n*p*c+a*r*u-n*l*u)*M,e[7]=(a*f*s-d*l*s+d*r*c-n*f*c-a*r*m+n*l*m)*M,e[8]=w*M,e[9]=(_*h*s-d*S*s-_*i*m+n*S*m+d*i*u-n*h*u)*M,e[10]=(a*S*s-_*o*s+_*i*c-n*S*c-a*i*u+n*o*u)*M,e[11]=(d*o*s-a*h*s-d*i*c+n*h*c+a*i*m-n*o*m)*M,e[12]=b*M,e[13]=(d*S*r-_*h*r+_*i*f-n*S*f-d*i*p+n*h*p)*M,e[14]=(_*o*r-a*S*r-_*i*l+n*S*l+a*i*p-n*o*p)*M,e[15]=(a*h*r-d*o*r+d*i*l-n*h*l-a*i*f+n*o*f)*M,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,d=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+i,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,d=a+a,h=o+o,f=s*c,m=s*d,_=s*h,S=a*d,p=a*h,u=o*h,v=l*c,x=l*d,w=l*h,b=i.x,E=i.y,M=i.z;return r[0]=(1-(S+u))*b,r[1]=(m+w)*b,r[2]=(_-x)*b,r[3]=0,r[4]=(m-w)*E,r[5]=(1-(f+u))*E,r[6]=(p+v)*E,r[7]=0,r[8]=(_+x)*M,r[9]=(p-v)*M,r[10]=(1-(f+S))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=kr.set(r[0],r[1],r[2]).length();const a=kr.set(r[4],r[5],r[6]).length(),o=kr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],In.copy(this);const c=1/s,d=1/a,h=1/o;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=d,In.elements[5]*=d,In.elements[6]*=d,In.elements[8]*=h,In.elements[9]*=h,In.elements[10]*=h,n.setFromRotationMatrix(In),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=fi){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),h=(n+e)/(n-e),f=(i+r)/(i-r);let m,_;if(o===fi)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Cl)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=fi){const l=this.elements,c=1/(n-e),d=1/(i-r),h=1/(a-s),f=(n+e)*c,m=(i+r)*d;let _,S;if(o===fi)_=(a+s)*h,S=-2*h;else if(o===Cl)_=s*h,S=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=S,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const kr=new H,In=new ht,Ky=new H(0,0,0),Zy=new H(1,1,1),Ti=new H,mo=new H,dn=new H,Ap=new ht,Cp=new ka;class Jn{constructor(e=0,n=0,i=0,r=Jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],h=r[2],f=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(en(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-en(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(en(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-en(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(en(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-en(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Ap.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ap,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Cp.setFromEuler(this),this.setFromQuaternion(Cp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jn.DEFAULT_ORDER="XYZ";class q_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Qy=0;const Rp=new H,Br=new ka,ii=new ht,go=new H,Ws=new H,Jy=new H,eS=new ka,bp=new H(1,0,0),Pp=new H(0,1,0),Lp=new H(0,0,1),Np={type:"added"},tS={type:"removed"},zr={type:"childadded",child:null},Bc={type:"childremoved",child:null};class Ct extends Ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qy++}),this.uuid=Oa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ct.DEFAULT_UP.clone();const e=new H,n=new Jn,i=new ka,r=new H(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new Ve}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new q_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Br.setFromAxisAngle(e,n),this.quaternion.multiply(Br),this}rotateOnWorldAxis(e,n){return Br.setFromAxisAngle(e,n),this.quaternion.premultiply(Br),this}rotateX(e){return this.rotateOnAxis(bp,e)}rotateY(e){return this.rotateOnAxis(Pp,e)}rotateZ(e){return this.rotateOnAxis(Lp,e)}translateOnAxis(e,n){return Rp.copy(e).applyQuaternion(this.quaternion),this.position.add(Rp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(bp,e)}translateY(e){return this.translateOnAxis(Pp,e)}translateZ(e){return this.translateOnAxis(Lp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?go.copy(e):go.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(Ws,go,this.up):ii.lookAt(go,Ws,this.up),this.quaternion.setFromRotationMatrix(ii),r&&(ii.extractRotation(r.matrixWorld),Br.setFromRotationMatrix(ii),this.quaternion.premultiply(Br.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Np),zr.child=e,this.dispatchEvent(zr),zr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(tS),Bc.child=e,this.dispatchEvent(Bc),Bc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Np),zr.child=e,this.dispatchEvent(zr),zr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,e,Jy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,eS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),h=a(e.shapes),f=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ct.DEFAULT_UP=new H(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Un=new H,ri=new H,zc=new H,si=new H,Hr=new H,Vr=new H,Dp=new H,Hc=new H,Vc=new H,Gc=new H,jc=new xt,Wc=new xt,Xc=new xt;class zn{constructor(e=new H,n=new H,i=new H){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Un.subVectors(e,n),r.cross(Un);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Un.subVectors(r,n),ri.subVectors(i,n),zc.subVectors(e,n);const a=Un.dot(Un),o=Un.dot(ri),l=Un.dot(zc),c=ri.dot(ri),d=ri.dot(zc),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,m=(c*l-o*d)*f,_=(a*d-o*l)*f;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,si.x),l.addScaledVector(a,si.y),l.addScaledVector(o,si.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return jc.setScalar(0),Wc.setScalar(0),Xc.setScalar(0),jc.fromBufferAttribute(e,n),Wc.fromBufferAttribute(e,i),Xc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(jc,s.x),a.addScaledVector(Wc,s.y),a.addScaledVector(Xc,s.z),a}static isFrontFacing(e,n,i,r){return Un.subVectors(i,n),ri.subVectors(e,n),Un.cross(ri).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Un.cross(ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return zn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return zn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Hr.subVectors(r,i),Vr.subVectors(s,i),Hc.subVectors(e,i);const l=Hr.dot(Hc),c=Vr.dot(Hc);if(l<=0&&c<=0)return n.copy(i);Vc.subVectors(e,r);const d=Hr.dot(Vc),h=Vr.dot(Vc);if(d>=0&&h<=d)return n.copy(r);const f=l*h-d*c;if(f<=0&&l>=0&&d<=0)return a=l/(l-d),n.copy(i).addScaledVector(Hr,a);Gc.subVectors(e,s);const m=Hr.dot(Gc),_=Vr.dot(Gc);if(_>=0&&m<=_)return n.copy(s);const S=m*c-l*_;if(S<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(Vr,o);const p=d*_-m*h;if(p<=0&&h-d>=0&&m-_>=0)return Dp.subVectors(s,r),o=(h-d)/(h-d+(m-_)),n.copy(r).addScaledVector(Dp,o);const u=1/(p+S+f);return a=S*u,o=f*u,n.copy(i).addScaledVector(Hr,a).addScaledVector(Vr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const K_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},_o={h:0,s:0,l:0};function $c(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class We{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=$n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=tt.workingColorSpace){return this.r=e,this.g=n,this.b=i,tt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=tt.workingColorSpace){if(e=ky(e,1),n=en(n,0,1),i=en(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=$c(a,s,e+1/3),this.g=$c(a,s,e),this.b=$c(a,s,e-1/3)}return tt.toWorkingColorSpace(this,r),this}setStyle(e,n=$n){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=$n){const i=K_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}copyLinearToSRGB(e){return this.r=Lc(e.r),this.g=Lc(e.g),this.b=Lc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$n){return tt.fromWorkingColorSpace(Ht.copy(this),e),Math.round(en(Ht.r*255,0,255))*65536+Math.round(en(Ht.g*255,0,255))*256+Math.round(en(Ht.b*255,0,255))}getHexString(e=$n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=tt.workingColorSpace){tt.fromWorkingColorSpace(Ht.copy(this),n);const i=Ht.r,r=Ht.g,s=Ht.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=d<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=tt.workingColorSpace){return tt.fromWorkingColorSpace(Ht.copy(this),n),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=$n){tt.fromWorkingColorSpace(Ht.copy(this),e);const n=Ht.r,i=Ht.g,r=Ht.b;return e!==$n?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ai),this.setHSL(Ai.h+e,Ai.s+n,Ai.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ai),e.getHSL(_o);const i=bc(Ai.h,_o.h,n),r=bc(Ai.s,_o.s,n),s=bc(Ai.l,_o.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new We;We.NAMES=K_;let nS=0;class Pr extends Ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nS++}),this.uuid=Oa(),this.name="",this.type="Material",this.blending=fs,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ju,this.blendDst=ed,this.blendEquation=dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dr,this.stencilZFail=Dr,this.stencilZPass=Dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fs&&(i.blending=this.blending),this.side!==Yi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ju&&(i.blendSrc=this.blendSrc),this.blendDst!==ed&&(i.blendDst=this.blendDst),this.blendEquation!==dr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ms&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Dr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Dr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Dr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ua extends Pr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=N_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new H,vo=new Ze;class Rn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=yp,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)vo.fromBufferAttribute(this,n),vo.applyMatrix3(e),this.setXY(n,vo.x,vo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix3(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix4(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyNormalMatrix(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.transformDirection(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Hs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Qt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Hs(n,this.array)),n}setX(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Hs(n,this.array)),n}setY(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Hs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Hs(n,this.array)),n}setW(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array),r=Qt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array),r=Qt(r,this.array),s=Qt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yp&&(e.usage=this.usage),e}}class Z_ extends Rn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Q_ extends Rn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ln extends Rn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let iS=0;const Sn=new ht,Yc=new Ct,Gr=new H,fn=new Ba,Xs=new Ba,Pt=new H;class _n extends Ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:iS++}),this.uuid=Oa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(X_(e)?Q_:Z_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,n,i){return Sn.makeTranslation(e,n,i),this.applyMatrix4(Sn),this}scale(e,n,i){return Sn.makeScale(e,n,i),this.applyMatrix4(Sn),this}lookAt(e){return Yc.lookAt(e),Yc.updateMatrix(),this.applyMatrix4(Yc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gr).negate(),this.translate(Gr.x,Gr.y,Gr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ln(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ba);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];fn.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new za);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Xs.setFromBufferAttribute(o),this.morphTargetsRelative?(Pt.addVectors(fn.min,Xs.min),fn.expandByPoint(Pt),Pt.addVectors(fn.max,Xs.max),fn.expandByPoint(Pt)):(fn.expandByPoint(Xs.min),fn.expandByPoint(Xs.max))}fn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Pt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Pt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Pt.fromBufferAttribute(o,c),l&&(Gr.fromBufferAttribute(e,c),Pt.add(Gr)),r=Math.max(r,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<i.count;P++)o[P]=new H,l[P]=new H;const c=new H,d=new H,h=new H,f=new Ze,m=new Ze,_=new Ze,S=new H,p=new H;function u(P,B,y){c.fromBufferAttribute(i,P),d.fromBufferAttribute(i,B),h.fromBufferAttribute(i,y),f.fromBufferAttribute(s,P),m.fromBufferAttribute(s,B),_.fromBufferAttribute(s,y),d.sub(c),h.sub(c),m.sub(f),_.sub(f);const T=1/(m.x*_.y-_.x*m.y);isFinite(T)&&(S.copy(d).multiplyScalar(_.y).addScaledVector(h,-m.y).multiplyScalar(T),p.copy(h).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(T),o[P].add(S),o[B].add(S),o[y].add(S),l[P].add(p),l[B].add(p),l[y].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,B=v.length;P<B;++P){const y=v[P],T=y.start,k=y.count;for(let U=T,j=T+k;U<j;U+=3)u(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const x=new H,w=new H,b=new H,E=new H;function M(P){b.fromBufferAttribute(r,P),E.copy(b);const B=o[P];x.copy(B),x.sub(b.multiplyScalar(b.dot(B))).normalize(),w.crossVectors(E,B);const T=w.dot(l[P])<0?-1:1;a.setXYZW(P,x.x,x.y,x.z,T)}for(let P=0,B=v.length;P<B;++P){const y=v[P],T=y.start,k=y.count;for(let U=T,j=T+k;U<j;U+=3)M(e.getX(U+0)),M(e.getX(U+1)),M(e.getX(U+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Rn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new H,s=new H,a=new H,o=new H,l=new H,c=new H,d=new H,h=new H;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),S=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,S),a.fromBufferAttribute(n,p),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,p),o.add(d),l.add(d),c.add(d),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=n.count;f<m;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Pt.fromBufferAttribute(e,n),Pt.normalize(),e.setXYZ(n,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,h=o.normalized,f=new c.constructor(l.length*d);let m=0,_=0;for(let S=0,p=l.length;S<p;S++){o.isInterleavedBufferAttribute?m=l[S]*o.data.stride+o.offset:m=l[S]*d;for(let u=0;u<d;u++)f[_++]=c[m++]}return new Rn(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new _n,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,h=c.length;d<h;d++){const f=c[d],m=e(f,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let f=0,m=h.length;f<m;f++)d.push(h[f].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ip=new ht,ir=new Wf,xo=new za,Up=new H,yo=new H,So=new H,Mo=new H,qc=new H,Eo=new H,Fp=new H,wo=new H;class Ut extends Ct{constructor(e=new _n,n=new ua){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Eo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],h=s[l];d!==0&&(qc.fromBufferAttribute(h,e),a?Eo.addScaledVector(qc,d):Eo.addScaledVector(qc.sub(n),d))}n.add(Eo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xo.copy(i.boundingSphere),xo.applyMatrix4(s),ir.copy(e.ray).recast(e.near),!(xo.containsPoint(ir.origin)===!1&&(ir.intersectSphere(xo,Up)===null||ir.origin.distanceToSquared(Up)>(e.far-e.near)**2))&&(Ip.copy(s).invert(),ir.copy(e.ray).applyMatrix4(Ip),!(i.boundingBox!==null&&ir.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ir)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=f.length;_<S;_++){const p=f[_],u=a[p.materialIndex],v=Math.max(p.start,m.start),x=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let w=v,b=x;w<b;w+=3){const E=o.getX(w),M=o.getX(w+1),P=o.getX(w+2);r=To(this,u,e,i,c,d,h,E,M,P),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),S=Math.min(o.count,m.start+m.count);for(let p=_,u=S;p<u;p+=3){const v=o.getX(p),x=o.getX(p+1),w=o.getX(p+2);r=To(this,a,e,i,c,d,h,v,x,w),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,S=f.length;_<S;_++){const p=f[_],u=a[p.materialIndex],v=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let w=v,b=x;w<b;w+=3){const E=w,M=w+1,P=w+2;r=To(this,u,e,i,c,d,h,E,M,P),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),S=Math.min(l.count,m.start+m.count);for(let p=_,u=S;p<u;p+=3){const v=p,x=p+1,w=p+2;r=To(this,a,e,i,c,d,h,v,x,w),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function rS(t,e,n,i,r,s,a,o){let l;if(e.side===an?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Yi,o),l===null)return null;wo.copy(o),wo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(wo);return c<n.near||c>n.far?null:{distance:c,point:wo.clone(),object:t}}function To(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,yo),t.getVertexPosition(l,So),t.getVertexPosition(c,Mo);const d=rS(t,e,n,i,yo,So,Mo,Fp);if(d){const h=new H;zn.getBarycoord(Fp,yo,So,Mo,h),r&&(d.uv=zn.getInterpolatedAttribute(r,o,l,c,h,new Ze)),s&&(d.uv1=zn.getInterpolatedAttribute(s,o,l,c,h,new Ze)),a&&(d.normal=zn.getInterpolatedAttribute(a,o,l,c,h,new H),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new H,materialIndex:0};zn.getNormal(yo,So,Mo,f.normal),d.face=f,d.barycoord=h}return d}class Cr extends _n{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],h=[];let f=0,m=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ln(c,3)),this.setAttribute("normal",new ln(d,3)),this.setAttribute("uv",new ln(h,2));function _(S,p,u,v,x,w,b,E,M,P,B){const y=w/M,T=b/P,k=w/2,U=b/2,j=E/2,X=M+1,O=P+1;let q=0,N=0;const K=new H;for(let Z=0;Z<O;Z++){const ae=Z*T-U;for(let Re=0;Re<X;Re++){const Ge=Re*y-k;K[S]=Ge*v,K[p]=ae*x,K[u]=j,c.push(K.x,K.y,K.z),K[S]=0,K[p]=0,K[u]=E>0?1:-1,d.push(K.x,K.y,K.z),h.push(Re/M),h.push(1-Z/P),q+=1}}for(let Z=0;Z<P;Z++)for(let ae=0;ae<M;ae++){const Re=f+ae+X*Z,Ge=f+ae+X*(Z+1),$=f+(ae+1)+X*(Z+1),ie=f+(ae+1)+X*Z;l.push(Re,Ge,ie),l.push(Ge,$,ie),N+=6}o.addGroup(m,N,B),m+=N,f+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Cs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Wt(t){const e={};for(let n=0;n<t.length;n++){const i=Cs(t[n]);for(const r in i)e[r]=i[r]}return e}function sS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function J_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const aS={clone:Cs,merge:Wt};var oS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends Pr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oS,this.fragmentShader=lS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cs(e.uniforms),this.uniformsGroups=sS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class ev extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=fi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ci=new H,Op=new Ze,kp=new Ze;class wn extends ev{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=kd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Rc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return kd*2*Math.atan(Math.tan(Rc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z),Ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z)}getViewSize(e,n){return this.getViewBounds(e,Op,kp),n.subVectors(kp,Op)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Rc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const jr=-90,Wr=1;class cS extends Ct{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new wn(jr,Wr,e,n);r.layers=this.layers,this.add(r);const s=new wn(jr,Wr,e,n);s.layers=this.layers,this.add(s);const a=new wn(jr,Wr,e,n);a.layers=this.layers,this.add(a);const o=new wn(jr,Wr,e,n);o.layers=this.layers,this.add(o);const l=new wn(jr,Wr,e,n);l.layers=this.layers,this.add(l);const c=new wn(jr,Wr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===fi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Cl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(h,f,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class tv extends on{constructor(e,n,i,r,s,a,o,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:Es,super(e,n,i,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class uS extends Ar{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new tv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Bn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Cr(5,5,5),s=new qi({name:"CubemapFromEquirect",uniforms:Cs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:ji});s.uniforms.tEquirect.value=n;const a=new Ut(r,s),o=n.minFilter;return n.minFilter===_r&&(n.minFilter=Bn),new cS(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const Kc=new H,dS=new H,fS=new Ve;class cr{constructor(e=new H(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Kc.subVectors(i,n).cross(dS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Kc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||fS.getNormalMatrix(e),r=this.coplanarPoint(Kc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rr=new za,Ao=new H;class Xf{constructor(e=new cr,n=new cr,i=new cr,r=new cr,s=new cr,a=new cr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=fi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],d=r[5],h=r[6],f=r[7],m=r[8],_=r[9],S=r[10],p=r[11],u=r[12],v=r[13],x=r[14],w=r[15];if(i[0].setComponents(l-s,f-c,p-m,w-u).normalize(),i[1].setComponents(l+s,f+c,p+m,w+u).normalize(),i[2].setComponents(l+a,f+d,p+_,w+v).normalize(),i[3].setComponents(l-a,f-d,p-_,w-v).normalize(),i[4].setComponents(l-o,f-h,p-S,w-x).normalize(),n===fi)i[5].setComponents(l+o,f+h,p+S,w+x).normalize();else if(n===Cl)i[5].setComponents(o,h,S,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(e){return rr.center.set(0,0,0),rr.radius=.7071067811865476,rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ao.x=r.normal.x>0?e.max.x:e.min.x,Ao.y=r.normal.y>0?e.max.y:e.min.y,Ao.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ao)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function nv(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function hS(t){const e=new WeakMap;function n(o,l){const c=o.array,d=o.usage,h=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,d),o.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const d=l.array,h=l.updateRanges;if(t.bindBuffer(c,o),h.length===0)t.bufferSubData(c,0,d);else{h.sort((m,_)=>m.start-_.start);let f=0;for(let m=1;m<h.length;m++){const _=h[f],S=h[m];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++f,h[f]=S)}h.length=f+1;for(let m=0,_=h.length;m<_;m++){const S=h[m];t.bufferSubData(c,S.start*d.BYTES_PER_ELEMENT,d,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class Ha extends _n{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,d=l+1,h=e/o,f=n/l,m=[],_=[],S=[],p=[];for(let u=0;u<d;u++){const v=u*f-a;for(let x=0;x<c;x++){const w=x*h-s;_.push(w,-v,0),S.push(0,0,1),p.push(x/o),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<o;v++){const x=v+c*u,w=v+c*(u+1),b=v+1+c*(u+1),E=v+1+c*u;m.push(x,w,E),m.push(w,b,E)}this.setIndex(m),this.setAttribute("position",new ln(_,3)),this.setAttribute("normal",new ln(S,3)),this.setAttribute("uv",new ln(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ha(e.width,e.height,e.widthSegments,e.heightSegments)}}var pS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_S=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,SS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,MS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ES=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,TS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,AS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,CS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,RS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,PS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,LS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,NS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,DS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,IS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,US=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,FS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,OS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,kS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,BS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,zS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,HS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,VS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,GS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jS="gl_FragColor = linearToOutputTexel( gl_FragColor );",WS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,XS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,$S=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,YS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,qS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,KS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ZS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,QS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,JS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,nM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,aM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,oM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,fM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,pM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,mM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_M=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,SM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,MM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,EM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,TM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,AM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,CM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,RM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,PM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,NM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,DM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,FM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,OM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,BM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,HM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,VM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,GM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,WM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,XM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$M=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,YM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,KM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ZM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,QM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,JM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,tE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,iE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,aE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,oE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,cE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,fE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_E=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,SE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ME=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,EE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,AE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,CE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,RE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,NE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,IE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,UE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,kE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,VE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,GE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,WE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,XE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:pS,alphahash_pars_fragment:mS,alphamap_fragment:gS,alphamap_pars_fragment:_S,alphatest_fragment:vS,alphatest_pars_fragment:xS,aomap_fragment:yS,aomap_pars_fragment:SS,batching_pars_vertex:MS,batching_vertex:ES,begin_vertex:wS,beginnormal_vertex:TS,bsdfs:AS,iridescence_fragment:CS,bumpmap_pars_fragment:RS,clipping_planes_fragment:bS,clipping_planes_pars_fragment:PS,clipping_planes_pars_vertex:LS,clipping_planes_vertex:NS,color_fragment:DS,color_pars_fragment:IS,color_pars_vertex:US,color_vertex:FS,common:OS,cube_uv_reflection_fragment:kS,defaultnormal_vertex:BS,displacementmap_pars_vertex:zS,displacementmap_vertex:HS,emissivemap_fragment:VS,emissivemap_pars_fragment:GS,colorspace_fragment:jS,colorspace_pars_fragment:WS,envmap_fragment:XS,envmap_common_pars_fragment:$S,envmap_pars_fragment:YS,envmap_pars_vertex:qS,envmap_physical_pars_fragment:aM,envmap_vertex:KS,fog_vertex:ZS,fog_pars_vertex:QS,fog_fragment:JS,fog_pars_fragment:eM,gradientmap_pars_fragment:tM,lightmap_pars_fragment:nM,lights_lambert_fragment:iM,lights_lambert_pars_fragment:rM,lights_pars_begin:sM,lights_toon_fragment:oM,lights_toon_pars_fragment:lM,lights_phong_fragment:cM,lights_phong_pars_fragment:uM,lights_physical_fragment:dM,lights_physical_pars_fragment:fM,lights_fragment_begin:hM,lights_fragment_maps:pM,lights_fragment_end:mM,logdepthbuf_fragment:gM,logdepthbuf_pars_fragment:_M,logdepthbuf_pars_vertex:vM,logdepthbuf_vertex:xM,map_fragment:yM,map_pars_fragment:SM,map_particle_fragment:MM,map_particle_pars_fragment:EM,metalnessmap_fragment:wM,metalnessmap_pars_fragment:TM,morphinstance_vertex:AM,morphcolor_vertex:CM,morphnormal_vertex:RM,morphtarget_pars_vertex:bM,morphtarget_vertex:PM,normal_fragment_begin:LM,normal_fragment_maps:NM,normal_pars_fragment:DM,normal_pars_vertex:IM,normal_vertex:UM,normalmap_pars_fragment:FM,clearcoat_normal_fragment_begin:OM,clearcoat_normal_fragment_maps:kM,clearcoat_pars_fragment:BM,iridescence_pars_fragment:zM,opaque_fragment:HM,packing:VM,premultiplied_alpha_fragment:GM,project_vertex:jM,dithering_fragment:WM,dithering_pars_fragment:XM,roughnessmap_fragment:$M,roughnessmap_pars_fragment:YM,shadowmap_pars_fragment:qM,shadowmap_pars_vertex:KM,shadowmap_vertex:ZM,shadowmask_pars_fragment:QM,skinbase_vertex:JM,skinning_pars_vertex:eE,skinning_vertex:tE,skinnormal_vertex:nE,specularmap_fragment:iE,specularmap_pars_fragment:rE,tonemapping_fragment:sE,tonemapping_pars_fragment:aE,transmission_fragment:oE,transmission_pars_fragment:lE,uv_pars_fragment:cE,uv_pars_vertex:uE,uv_vertex:dE,worldpos_vertex:fE,background_vert:hE,background_frag:pE,backgroundCube_vert:mE,backgroundCube_frag:gE,cube_vert:_E,cube_frag:vE,depth_vert:xE,depth_frag:yE,distanceRGBA_vert:SE,distanceRGBA_frag:ME,equirect_vert:EE,equirect_frag:wE,linedashed_vert:TE,linedashed_frag:AE,meshbasic_vert:CE,meshbasic_frag:RE,meshlambert_vert:bE,meshlambert_frag:PE,meshmatcap_vert:LE,meshmatcap_frag:NE,meshnormal_vert:DE,meshnormal_frag:IE,meshphong_vert:UE,meshphong_frag:FE,meshphysical_vert:OE,meshphysical_frag:kE,meshtoon_vert:BE,meshtoon_frag:zE,points_vert:HE,points_frag:VE,shadow_vert:GE,shadow_frag:jE,sprite_vert:WE,sprite_frag:XE},ue={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Yn={basic:{uniforms:Wt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Wt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new We(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Wt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Wt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Wt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new We(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Wt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Wt([ue.points,ue.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Wt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Wt([ue.common,ue.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Wt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Wt([ue.sprite,ue.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Wt([ue.common,ue.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Wt([ue.lights,ue.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Yn.physical={uniforms:Wt([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Co={r:0,b:0,g:0},sr=new Jn,$E=new ht;function YE(t,e,n,i,r,s,a){const o=new We(0);let l=s===!0?0:1,c,d,h=null,f=0,m=null;function _(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?n:e).get(x)),x}function S(v){let x=!1;const w=_(v);w===null?u(o,l):w&&w.isColor&&(u(w,1),x=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function p(v,x){const w=_(x);w&&(w.isCubeTexture||w.mapping===Yl)?(d===void 0&&(d=new Ut(new Cr(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:Cs(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(b,E,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),sr.copy(x.backgroundRotation),sr.x*=-1,sr.y*=-1,sr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),d.material.uniforms.envMap.value=w,d.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4($E.makeRotationFromEuler(sr)),d.material.toneMapped=tt.getTransfer(w.colorSpace)!==ut,(h!==w||f!==w.version||m!==t.toneMapping)&&(d.material.needsUpdate=!0,h=w,f=w.version,m=t.toneMapping),d.layers.enableAll(),v.unshift(d,d.geometry,d.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Ut(new Ha(2,2),new qi({name:"BackgroundMaterial",uniforms:Cs(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=tt.getTransfer(w.colorSpace)!==ut,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||f!==w.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,h=w,f=w.version,m=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function u(v,x){v.getRGB(Co,J_(t)),i.buffers.color.setClear(Co.r,Co.g,Co.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(v,x=1){o.set(v),l=x,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,u(o,l)},render:S,addToRenderList:p}}function qE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(y,T,k,U,j){let X=!1;const O=h(U,k,T);s!==O&&(s=O,c(s.object)),X=m(y,U,k,j),X&&_(y,U,k,j),j!==null&&e.update(j,t.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,w(y,T,k,U),j!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function d(y){return t.deleteVertexArray(y)}function h(y,T,k){const U=k.wireframe===!0;let j=i[y.id];j===void 0&&(j={},i[y.id]=j);let X=j[T.id];X===void 0&&(X={},j[T.id]=X);let O=X[U];return O===void 0&&(O=f(l()),X[U]=O),O}function f(y){const T=[],k=[],U=[];for(let j=0;j<n;j++)T[j]=0,k[j]=0,U[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:k,attributeDivisors:U,object:y,attributes:{},index:null}}function m(y,T,k,U){const j=s.attributes,X=T.attributes;let O=0;const q=k.getAttributes();for(const N in q)if(q[N].location>=0){const Z=j[N];let ae=X[N];if(ae===void 0&&(N==="instanceMatrix"&&y.instanceMatrix&&(ae=y.instanceMatrix),N==="instanceColor"&&y.instanceColor&&(ae=y.instanceColor)),Z===void 0||Z.attribute!==ae||ae&&Z.data!==ae.data)return!0;O++}return s.attributesNum!==O||s.index!==U}function _(y,T,k,U){const j={},X=T.attributes;let O=0;const q=k.getAttributes();for(const N in q)if(q[N].location>=0){let Z=X[N];Z===void 0&&(N==="instanceMatrix"&&y.instanceMatrix&&(Z=y.instanceMatrix),N==="instanceColor"&&y.instanceColor&&(Z=y.instanceColor));const ae={};ae.attribute=Z,Z&&Z.data&&(ae.data=Z.data),j[N]=ae,O++}s.attributes=j,s.attributesNum=O,s.index=U}function S(){const y=s.newAttributes;for(let T=0,k=y.length;T<k;T++)y[T]=0}function p(y){u(y,0)}function u(y,T){const k=s.newAttributes,U=s.enabledAttributes,j=s.attributeDivisors;k[y]=1,U[y]===0&&(t.enableVertexAttribArray(y),U[y]=1),j[y]!==T&&(t.vertexAttribDivisor(y,T),j[y]=T)}function v(){const y=s.newAttributes,T=s.enabledAttributes;for(let k=0,U=T.length;k<U;k++)T[k]!==y[k]&&(t.disableVertexAttribArray(k),T[k]=0)}function x(y,T,k,U,j,X,O){O===!0?t.vertexAttribIPointer(y,T,k,j,X):t.vertexAttribPointer(y,T,k,U,j,X)}function w(y,T,k,U){S();const j=U.attributes,X=k.getAttributes(),O=T.defaultAttributeValues;for(const q in X){const N=X[q];if(N.location>=0){let K=j[q];if(K===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(K=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(K=y.instanceColor)),K!==void 0){const Z=K.normalized,ae=K.itemSize,Re=e.get(K);if(Re===void 0)continue;const Ge=Re.buffer,$=Re.type,ie=Re.bytesPerElement,W=$===t.INT||$===t.UNSIGNED_INT||K.gpuType===kf;if(K.isInterleavedBufferAttribute){const te=K.data,fe=te.stride,de=K.offset;if(te.isInstancedInterleavedBuffer){for(let Ue=0;Ue<N.locationSize;Ue++)u(N.location+Ue,te.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Ue=0;Ue<N.locationSize;Ue++)p(N.location+Ue);t.bindBuffer(t.ARRAY_BUFFER,Ge);for(let Ue=0;Ue<N.locationSize;Ue++)x(N.location+Ue,ae/N.locationSize,$,Z,fe*ie,(de+ae/N.locationSize*Ue)*ie,W)}else{if(K.isInstancedBufferAttribute){for(let te=0;te<N.locationSize;te++)u(N.location+te,K.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let te=0;te<N.locationSize;te++)p(N.location+te);t.bindBuffer(t.ARRAY_BUFFER,Ge);for(let te=0;te<N.locationSize;te++)x(N.location+te,ae/N.locationSize,$,Z,ae*ie,ae/N.locationSize*te*ie,W)}}else if(O!==void 0){const Z=O[q];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(N.location,Z);break;case 3:t.vertexAttrib3fv(N.location,Z);break;case 4:t.vertexAttrib4fv(N.location,Z);break;default:t.vertexAttrib1fv(N.location,Z)}}}}v()}function b(){P();for(const y in i){const T=i[y];for(const k in T){const U=T[k];for(const j in U)d(U[j].object),delete U[j];delete T[k]}delete i[y]}}function E(y){if(i[y.id]===void 0)return;const T=i[y.id];for(const k in T){const U=T[k];for(const j in U)d(U[j].object),delete U[j];delete T[k]}delete i[y.id]}function M(y){for(const T in i){const k=i[T];if(k[y.id]===void 0)continue;const U=k[y.id];for(const j in U)d(U[j].object),delete U[j];delete k[y.id]}}function P(){B(),a=!0,s!==r&&(s=r,c(s.object))}function B(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:P,resetDefaultState:B,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfProgram:M,initAttributes:S,enableAttribute:p,disableUnusedAttributes:v}}function KE(t,e,n){let i;function r(c){i=c}function s(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function a(c,d,h){h!==0&&(t.drawArraysInstanced(i,c,d,h),n.update(d,i,h))}function o(c,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,h);let m=0;for(let _=0;_<h;_++)m+=d[_];n.update(m,i,1)}function l(c,d,h,f){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)a(c[_],d[_],f[_]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,d,0,f,0,h);let _=0;for(let S=0;S<h;S++)_+=d[S];for(let S=0;S<f.length;S++)n.update(_,i,f[S])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function ZE(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(M){return!(M!==Hn&&i.convert(M)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(M){const P=M===Fa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==vi&&i.convert(M)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==di&&!P)}function l(M){if(M==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const M=e.get("EXT_clip_control");M.clipControlEXT(M.LOWER_LEFT_EXT,M.ZERO_TO_ONE_EXT)}const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),w=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=_>0,E=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:w,vertexTextures:b,maxSamples:E}}function QE(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new cr,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||i!==0||r;return r=f,i=h.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=d(h,f,0)},this.setState=function(h,f,m){const _=h.clippingPlanes,S=h.clipIntersection,p=h.clipShadows,u=t.get(h);if(!r||_===null||_.length===0||s&&!p)s?d(null):c();else{const v=s?0:i,x=v*4;let w=u.clippingState||null;l.value=w,w=d(_,f,x,m);for(let b=0;b!==x;++b)w[b]=n[b];u.clippingState=w,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,f,m,_){const S=h!==null?h.length:0;let p=null;if(S!==0){if(p=l.value,_!==!0||p===null){const u=m+S*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<u)&&(p=new Float32Array(u));for(let x=0,w=m;x!==S;++x,w+=4)a.copy(h[x]).applyMatrix4(v,o),a.normal.toArray(p,w),p[w+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,p}}function JE(t){let e=new WeakMap;function n(a,o){return o===ld?a.mapping=Es:o===cd&&(a.mapping=ws),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===ld||o===cd)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new uS(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class iv extends ev{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ss=4,Bp=[.125,.215,.35,.446,.526,.582],fr=20,Zc=new iv,zp=new We;let Qc=null,Jc=0,eu=0,tu=!1;const ur=(1+Math.sqrt(5))/2,Xr=1/ur,Hp=[new H(-ur,Xr,0),new H(ur,Xr,0),new H(-Xr,0,ur),new H(Xr,0,ur),new H(0,ur,-Xr),new H(0,ur,Xr),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class Vp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Qc=this._renderer.getRenderTarget(),Jc=this._renderer.getActiveCubeFace(),eu=this._renderer.getActiveMipmapLevel(),tu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qc,Jc,eu),this._renderer.xr.enabled=tu,e.scissorTest=!1,Ro(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Es||e.mapping===ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qc=this._renderer.getRenderTarget(),Jc=this._renderer.getActiveCubeFace(),eu=this._renderer.getActiveMipmapLevel(),tu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:Fa,format:Hn,colorSpace:Ji,depthBuffer:!1},r=Gp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=e1(s)),this._blurMaterial=t1(s,e,n)}return r}_compileMaterial(e){const n=new Ut(this._lodPlanes[0],e);this._renderer.compile(n,Zc)}_sceneToCubeUV(e,n,i,r){const o=new wn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(zp),d.toneMapping=Wi,d.autoClear=!1;const m=new ua({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),_=new Ut(new Cr,m);let S=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,S=!0):(m.color.copy(zp),S=!0);for(let u=0;u<6;u++){const v=u%3;v===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):v===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const x=this._cubeSize;Ro(r,v*x,u>2?x:0,x,x),d.setRenderTarget(r),S&&d.render(_,o),d.render(e,o)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Es||e.mapping===ws;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jp());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Ut(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ro(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Zc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Hp[(r-s-1)%Hp.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new Ut(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*fr-1),S=s/_,p=isFinite(s)?1+Math.floor(d*S):fr;p>fr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${fr}`);const u=[];let v=0;for(let M=0;M<fr;++M){const P=M/S,B=Math.exp(-P*P/2);u.push(B),M===0?v+=B:M<p&&(v+=2*B)}for(let M=0;M<u.length;M++)u[M]=u[M]/v;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-i;const w=this._sizeLods[r],b=3*w*(r>x-ss?r-x+ss:0),E=4*(this._cubeSize-w);Ro(n,b,E,3*w,2*w),l.setRenderTarget(n),l.render(h,Zc)}}function e1(t){const e=[],n=[],i=[];let r=t;const s=t-ss+1+Bp.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-ss?l=Bp[a-t+ss-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),d=-c,h=1+c,f=[d,d,h,d,h,h,d,d,h,h,d,h],m=6,_=6,S=3,p=2,u=1,v=new Float32Array(S*_*m),x=new Float32Array(p*_*m),w=new Float32Array(u*_*m);for(let E=0;E<m;E++){const M=E%3*2/3-1,P=E>2?0:-1,B=[M,P,0,M+2/3,P,0,M+2/3,P+1,0,M,P,0,M+2/3,P+1,0,M,P+1,0];v.set(B,S*_*E),x.set(f,p*_*E);const y=[E,E,E,E,E,E];w.set(y,u*_*E)}const b=new _n;b.setAttribute("position",new Rn(v,S)),b.setAttribute("uv",new Rn(x,p)),b.setAttribute("faceIndex",new Rn(w,u)),e.push(b),r>ss&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Gp(t,e,n){const i=new Ar(t,e,n);return i.texture.mapping=Yl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ro(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function t1(t,e,n){const i=new Float32Array(fr),r=new H(0,1,0);return new qi({name:"SphericalGaussianBlur",defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:$f(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function jp(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$f(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Wp(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$f(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function $f(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function n1(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===ld||l===cd,d=l===Es||l===ws;if(c||d){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new Vp(t)),h=c?n.fromEquirectangular(o,h):n.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const m=o.image;return c&&m&&m.height>0||d&&m&&r(m)?(n===null&&(n=new Vp(t)),h=c?n.fromEquirectangular(o):n.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function i1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Qo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function r1(t,e,n,i){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const S=f.morphAttributes[_];for(let p=0,u=S.length;p<u;p++)e.remove(S[p])}f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],t.ARRAY_BUFFER);const m=h.morphAttributes;for(const _ in m){const S=m[_];for(let p=0,u=S.length;p<u;p++)e.update(S[p],t.ARRAY_BUFFER)}}function c(h){const f=[],m=h.index,_=h.attributes.position;let S=0;if(m!==null){const v=m.array;S=m.version;for(let x=0,w=v.length;x<w;x+=3){const b=v[x+0],E=v[x+1],M=v[x+2];f.push(b,E,E,M,M,b)}}else if(_!==void 0){const v=_.array;S=_.version;for(let x=0,w=v.length/3-1;x<w;x+=3){const b=x+0,E=x+1,M=x+2;f.push(b,E,E,M,M,b)}}else return;const p=new(X_(f)?Q_:Z_)(f,1);p.version=S;const u=s.get(h);u&&e.remove(u),s.set(h,p)}function d(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function s1(t,e,n){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,m){t.drawElements(i,m,s,f*a),n.update(m,i,1)}function c(f,m,_){_!==0&&(t.drawElementsInstanced(i,m,s,f*a,_),n.update(m,i,_))}function d(f,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,f,0,_);let p=0;for(let u=0;u<_;u++)p+=m[u];n.update(p,i,1)}function h(f,m,_,S){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<f.length;u++)c(f[u]/a,m[u],S[u]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,f,0,S,0,_);let u=0;for(let v=0;v<_;v++)u+=m[v];for(let v=0;v<S.length;v++)n.update(u,i,S[v])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function a1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function o1(t,e,n){const i=new WeakMap,r=new xt;function s(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let y=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",y)};var m=y;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let w=0;_===!0&&(w=1),S===!0&&(w=2),p===!0&&(w=3);let b=o.attributes.position.count*w,E=1;b>e.maxTextureSize&&(E=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const M=new Float32Array(b*E*4*h),P=new Y_(M,b,E,h);P.type=di,P.needsUpdate=!0;const B=w*4;for(let T=0;T<h;T++){const k=u[T],U=v[T],j=x[T],X=b*E*4*T;for(let O=0;O<k.count;O++){const q=O*B;_===!0&&(r.fromBufferAttribute(k,O),M[X+q+0]=r.x,M[X+q+1]=r.y,M[X+q+2]=r.z,M[X+q+3]=0),S===!0&&(r.fromBufferAttribute(U,O),M[X+q+4]=r.x,M[X+q+5]=r.y,M[X+q+6]=r.z,M[X+q+7]=0),p===!0&&(r.fromBufferAttribute(j,O),M[X+q+8]=r.x,M[X+q+9]=r.y,M[X+q+10]=r.z,M[X+q+11]=j.itemSize===4?r.w:1)}}f={count:h,texture:P,size:new Ze(b,E)},i.set(o,f),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const S=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",S),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function l1(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class rv extends on{constructor(e,n,i,r,s,a,o,l,c,d=hs){if(d!==hs&&d!==As)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===hs&&(i=Tr),i===void 0&&d===As&&(i=Ts),super(null,r,s,a,o,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:An,this.minFilter=l!==void 0?l:An,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const sv=new on,Xp=new rv(1,1),av=new Y_,ov=new Yy,lv=new tv,$p=[],Yp=[],qp=new Float32Array(16),Kp=new Float32Array(9),Zp=new Float32Array(4);function Ns(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=$p[r];if(s===void 0&&(s=new Float32Array(r),$p[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Rt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Kl(t,e){let n=Yp[e];n===void 0&&(n=new Int32Array(e),Yp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function c1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function u1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2fv(this.addr,e),bt(n,e)}}function d1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Rt(n,e))return;t.uniform3fv(this.addr,e),bt(n,e)}}function f1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4fv(this.addr,e),bt(n,e)}}function h1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),bt(n,e)}else{if(Rt(n,i))return;Zp.set(i),t.uniformMatrix2fv(this.addr,!1,Zp),bt(n,i)}}function p1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),bt(n,e)}else{if(Rt(n,i))return;Kp.set(i),t.uniformMatrix3fv(this.addr,!1,Kp),bt(n,i)}}function m1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),bt(n,e)}else{if(Rt(n,i))return;qp.set(i),t.uniformMatrix4fv(this.addr,!1,qp),bt(n,i)}}function g1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function _1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2iv(this.addr,e),bt(n,e)}}function v1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3iv(this.addr,e),bt(n,e)}}function x1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4iv(this.addr,e),bt(n,e)}}function y1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function S1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2uiv(this.addr,e),bt(n,e)}}function M1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3uiv(this.addr,e),bt(n,e)}}function E1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4uiv(this.addr,e),bt(n,e)}}function w1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Xp.compareFunction=W_,s=Xp):s=sv,n.setTexture2D(e||s,r)}function T1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||ov,r)}function A1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||lv,r)}function C1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||av,r)}function R1(t){switch(t){case 5126:return c1;case 35664:return u1;case 35665:return d1;case 35666:return f1;case 35674:return h1;case 35675:return p1;case 35676:return m1;case 5124:case 35670:return g1;case 35667:case 35671:return _1;case 35668:case 35672:return v1;case 35669:case 35673:return x1;case 5125:return y1;case 36294:return S1;case 36295:return M1;case 36296:return E1;case 35678:case 36198:case 36298:case 36306:case 35682:return w1;case 35679:case 36299:case 36307:return T1;case 35680:case 36300:case 36308:case 36293:return A1;case 36289:case 36303:case 36311:case 36292:return C1}}function b1(t,e){t.uniform1fv(this.addr,e)}function P1(t,e){const n=Ns(e,this.size,2);t.uniform2fv(this.addr,n)}function L1(t,e){const n=Ns(e,this.size,3);t.uniform3fv(this.addr,n)}function N1(t,e){const n=Ns(e,this.size,4);t.uniform4fv(this.addr,n)}function D1(t,e){const n=Ns(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function I1(t,e){const n=Ns(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function U1(t,e){const n=Ns(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function F1(t,e){t.uniform1iv(this.addr,e)}function O1(t,e){t.uniform2iv(this.addr,e)}function k1(t,e){t.uniform3iv(this.addr,e)}function B1(t,e){t.uniform4iv(this.addr,e)}function z1(t,e){t.uniform1uiv(this.addr,e)}function H1(t,e){t.uniform2uiv(this.addr,e)}function V1(t,e){t.uniform3uiv(this.addr,e)}function G1(t,e){t.uniform4uiv(this.addr,e)}function j1(t,e,n){const i=this.cache,r=e.length,s=Kl(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||sv,s[a])}function W1(t,e,n){const i=this.cache,r=e.length,s=Kl(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||ov,s[a])}function X1(t,e,n){const i=this.cache,r=e.length,s=Kl(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||lv,s[a])}function $1(t,e,n){const i=this.cache,r=e.length,s=Kl(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||av,s[a])}function Y1(t){switch(t){case 5126:return b1;case 35664:return P1;case 35665:return L1;case 35666:return N1;case 35674:return D1;case 35675:return I1;case 35676:return U1;case 5124:case 35670:return F1;case 35667:case 35671:return O1;case 35668:case 35672:return k1;case 35669:case 35673:return B1;case 5125:return z1;case 36294:return H1;case 36295:return V1;case 36296:return G1;case 35678:case 36198:case 36298:case 36306:case 35682:return j1;case 35679:case 36299:case 36307:return W1;case 35680:case 36300:case 36308:case 36293:return X1;case 36289:case 36303:case 36311:case 36292:return $1}}class q1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=R1(n.type)}}class K1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Y1(n.type)}}class Z1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const nu=/(\w+)(\])?(\[|\.)?/g;function Qp(t,e){t.seq.push(e),t.map[e.id]=e}function Q1(t,e,n){const i=t.name,r=i.length;for(nu.lastIndex=0;;){const s=nu.exec(i),a=nu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Qp(n,c===void 0?new q1(o,t,e):new K1(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new Z1(o),Qp(n,h)),n=h}}}class Jo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);Q1(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Jp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const J1=37297;let ew=0;function tw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function nw(t){const e=tt.getPrimaries(tt.workingColorSpace),n=tt.getPrimaries(t);let i;switch(e===n?i="":e===Al&&n===Tl?i="LinearDisplayP3ToLinearSRGB":e===Tl&&n===Al&&(i="LinearSRGBToLinearDisplayP3"),t){case Ji:case ql:return[i,"LinearTransferOETF"];case $n:case jf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function em(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+tw(t.getShaderSource(e),a)}else return r}function iw(t,e){const n=nw(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function rw(t,e){let n;switch(e){case yy:n="Linear";break;case Sy:n="Reinhard";break;case My:n="Cineon";break;case Ey:n="ACESFilmic";break;case Ty:n="AgX";break;case Ay:n="Neutral";break;case wy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const bo=new H;function sw(){tt.getLuminanceCoefficients(bo);const t=bo.x.toFixed(4),e=bo.y.toFixed(4),n=bo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function aw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Js).join(`
`)}function ow(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function lw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Js(t){return t!==""}function tm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bd(t){return t.replace(cw,dw)}const uw=new Map;function dw(t,e){let n=He[e];if(n===void 0){const i=uw.get(e);if(i!==void 0)n=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Bd(n)}const fw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function im(t){return t.replace(fw,hw)}function hw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function rm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function pw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===L_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Jx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ai&&(e="SHADOWMAP_TYPE_VSM"),e}function mw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Es:case ws:e="ENVMAP_TYPE_CUBE";break;case Yl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ws:e="ENVMAP_MODE_REFRACTION";break}return e}function _w(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case N_:e="ENVMAP_BLENDING_MULTIPLY";break;case vy:e="ENVMAP_BLENDING_MIX";break;case xy:e="ENVMAP_BLENDING_ADD";break}return e}function vw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function xw(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=pw(n),c=mw(n),d=gw(n),h=_w(n),f=vw(n),m=aw(n),_=ow(s),S=r.createProgram();let p,u,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Js).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Js).join(`
`),u.length>0&&(u+=`
`)):(p=[rm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Js).join(`
`),u=[rm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Wi?"#define TONE_MAPPING":"",n.toneMapping!==Wi?He.tonemapping_pars_fragment:"",n.toneMapping!==Wi?rw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,iw("linearToOutputTexel",n.outputColorSpace),sw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Js).join(`
`)),a=Bd(a),a=tm(a,n),a=nm(a,n),o=Bd(o),o=tm(o,n),o=nm(o,n),a=im(a),o=im(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",n.glslVersion===Sp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Sp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const x=v+p+a,w=v+u+o,b=Jp(r,r.VERTEX_SHADER,x),E=Jp(r,r.FRAGMENT_SHADER,w);r.attachShader(S,b),r.attachShader(S,E),n.index0AttributeName!==void 0?r.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function M(T){if(t.debug.checkShaderErrors){const k=r.getProgramInfoLog(S).trim(),U=r.getShaderInfoLog(b).trim(),j=r.getShaderInfoLog(E).trim();let X=!0,O=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(X=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,S,b,E);else{const q=em(r,b,"vertex"),N=em(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+k+`
`+q+`
`+N)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(U===""||j==="")&&(O=!1);O&&(T.diagnostics={runnable:X,programLog:k,vertexShader:{log:U,prefix:p},fragmentShader:{log:j,prefix:u}})}r.deleteShader(b),r.deleteShader(E),P=new Jo(r,S),B=lw(r,S)}let P;this.getUniforms=function(){return P===void 0&&M(this),P};let B;this.getAttributes=function(){return B===void 0&&M(this),B};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(S,J1)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ew++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=b,this.fragmentShader=E,this}let yw=0;class Sw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Mw(e),n.set(e,i)),i}}class Mw{constructor(e){this.id=yw++,this.code=e,this.usedTimes=0}}function Ew(t,e,n,i,r,s,a){const o=new q_,l=new Sw,c=new Set,d=[],h=r.logarithmicDepthBuffer,f=r.reverseDepthBuffer,m=r.vertexTextures;let _=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return c.add(y),y===0?"uv":`uv${y}`}function u(y,T,k,U,j){const X=U.fog,O=j.geometry,q=y.isMeshStandardMaterial?U.environment:null,N=(y.isMeshStandardMaterial?n:e).get(y.envMap||q),K=N&&N.mapping===Yl?N.image.height:null,Z=S[y.type];y.precision!==null&&(_=r.getMaxPrecision(y.precision),_!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",_,"instead."));const ae=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Re=ae!==void 0?ae.length:0;let Ge=0;O.morphAttributes.position!==void 0&&(Ge=1),O.morphAttributes.normal!==void 0&&(Ge=2),O.morphAttributes.color!==void 0&&(Ge=3);let $,ie,W,te;if(Z){const Zt=Yn[Z];$=Zt.vertexShader,ie=Zt.fragmentShader}else $=y.vertexShader,ie=y.fragmentShader,l.update(y),W=l.getVertexShaderID(y),te=l.getFragmentShaderID(y);const fe=t.getRenderTarget(),de=j.isInstancedMesh===!0,Ue=j.isBatchedMesh===!0,re=!!y.map,Ae=!!y.matcap,L=!!N,Xe=!!y.aoMap,Fe=!!y.lightMap,ze=!!y.bumpMap,Ne=!!y.normalMap,rt=!!y.displacementMap,Pe=!!y.emissiveMap,R=!!y.metalnessMap,A=!!y.roughnessMap,z=y.anisotropy>0,J=y.clearcoat>0,ne=y.dispersion>0,Q=y.iridescence>0,we=y.sheen>0,ce=y.transmission>0,ge=z&&!!y.anisotropyMap,Ke=J&&!!y.clearcoatMap,oe=J&&!!y.clearcoatNormalMap,Se=J&&!!y.clearcoatRoughnessMap,Oe=Q&&!!y.iridescenceMap,ke=Q&&!!y.iridescenceThicknessMap,Me=we&&!!y.sheenColorMap,$e=we&&!!y.sheenRoughnessMap,Be=!!y.specularMap,at=!!y.specularColorMap,D=!!y.specularIntensityMap,_e=ce&&!!y.transmissionMap,Y=ce&&!!y.thicknessMap,ee=!!y.gradientMap,pe=!!y.alphaMap,ve=y.alphaTest>0,Ye=!!y.alphaHash,Mt=!!y.extensions;let Kt=Wi;y.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Kt=t.toneMapping);const Qe={shaderID:Z,shaderType:y.type,shaderName:y.name,vertexShader:$,fragmentShader:ie,defines:y.defines,customVertexShaderID:W,customFragmentShaderID:te,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:_,batching:Ue,batchingColor:Ue&&j._colorsTexture!==null,instancing:de,instancingColor:de&&j.instanceColor!==null,instancingMorph:de&&j.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:fe===null?t.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Ji,alphaToCoverage:!!y.alphaToCoverage,map:re,matcap:Ae,envMap:L,envMapMode:L&&N.mapping,envMapCubeUVHeight:K,aoMap:Xe,lightMap:Fe,bumpMap:ze,normalMap:Ne,displacementMap:m&&rt,emissiveMap:Pe,normalMapObjectSpace:Ne&&y.normalMapType===Py,normalMapTangentSpace:Ne&&y.normalMapType===j_,metalnessMap:R,roughnessMap:A,anisotropy:z,anisotropyMap:ge,clearcoat:J,clearcoatMap:Ke,clearcoatNormalMap:oe,clearcoatRoughnessMap:Se,dispersion:ne,iridescence:Q,iridescenceMap:Oe,iridescenceThicknessMap:ke,sheen:we,sheenColorMap:Me,sheenRoughnessMap:$e,specularMap:Be,specularColorMap:at,specularIntensityMap:D,transmission:ce,transmissionMap:_e,thicknessMap:Y,gradientMap:ee,opaque:y.transparent===!1&&y.blending===fs&&y.alphaToCoverage===!1,alphaMap:pe,alphaTest:ve,alphaHash:Ye,combine:y.combine,mapUv:re&&p(y.map.channel),aoMapUv:Xe&&p(y.aoMap.channel),lightMapUv:Fe&&p(y.lightMap.channel),bumpMapUv:ze&&p(y.bumpMap.channel),normalMapUv:Ne&&p(y.normalMap.channel),displacementMapUv:rt&&p(y.displacementMap.channel),emissiveMapUv:Pe&&p(y.emissiveMap.channel),metalnessMapUv:R&&p(y.metalnessMap.channel),roughnessMapUv:A&&p(y.roughnessMap.channel),anisotropyMapUv:ge&&p(y.anisotropyMap.channel),clearcoatMapUv:Ke&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:oe&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:$e&&p(y.sheenRoughnessMap.channel),specularMapUv:Be&&p(y.specularMap.channel),specularColorMapUv:at&&p(y.specularColorMap.channel),specularIntensityMapUv:D&&p(y.specularIntensityMap.channel),transmissionMapUv:_e&&p(y.transmissionMap.channel),thicknessMapUv:Y&&p(y.thicknessMap.channel),alphaMapUv:pe&&p(y.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Ne||z),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!O.attributes.uv&&(re||pe),fog:!!X,useFog:y.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:f,skinning:j.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:Ge,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&k.length>0,shadowMapType:t.shadowMap.type,toneMapping:Kt,decodeVideoTexture:re&&y.map.isVideoTexture===!0&&tt.getTransfer(y.map.colorSpace)===ut,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Kn,flipSided:y.side===an,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Mt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Mt&&y.extensions.multiDraw===!0||Ue)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Qe.vertexUv1s=c.has(1),Qe.vertexUv2s=c.has(2),Qe.vertexUv3s=c.has(3),c.clear(),Qe}function v(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const k in y.defines)T.push(k),T.push(y.defines[k]);return y.isRawShaderMaterial===!1&&(x(T,y),w(T,y),T.push(t.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function x(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function w(y,T){o.disableAll(),T.supportsVertexTextures&&o.enable(0),T.instancing&&o.enable(1),T.instancingColor&&o.enable(2),T.instancingMorph&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),T.dispersion&&o.enable(20),T.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reverseDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.alphaToCoverage&&o.enable(20),y.push(o.mask)}function b(y){const T=S[y.type];let k;if(T){const U=Yn[T];k=aS.clone(U.uniforms)}else k=y.uniforms;return k}function E(y,T){let k;for(let U=0,j=d.length;U<j;U++){const X=d[U];if(X.cacheKey===T){k=X,++k.usedTimes;break}}return k===void 0&&(k=new xw(t,T,y,s),d.push(k)),k}function M(y){if(--y.usedTimes===0){const T=d.indexOf(y);d[T]=d[d.length-1],d.pop(),y.destroy()}}function P(y){l.remove(y)}function B(){l.dispose()}return{getParameters:u,getProgramCacheKey:v,getUniforms:b,acquireProgram:E,releaseProgram:M,releaseShaderCache:P,programs:d,dispose:B}}function ww(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function Tw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function sm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function am(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(h,f,m,_,S,p){let u=t[e];return u===void 0?(u={id:h.id,object:h,geometry:f,material:m,groupOrder:_,renderOrder:h.renderOrder,z:S,group:p},t[e]=u):(u.id=h.id,u.object=h,u.geometry=f,u.material=m,u.groupOrder=_,u.renderOrder=h.renderOrder,u.z=S,u.group=p),e++,u}function o(h,f,m,_,S,p){const u=a(h,f,m,_,S,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):n.push(u)}function l(h,f,m,_,S,p){const u=a(h,f,m,_,S,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):n.unshift(u)}function c(h,f){n.length>1&&n.sort(h||Tw),i.length>1&&i.sort(f||sm),r.length>1&&r.sort(f||sm)}function d(){for(let h=e,f=t.length;h<f;h++){const m=t[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:d,sort:c}}function Aw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new am,t.set(i,[a])):r>=s.length?(a=new am,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function Cw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new H,color:new We};break;case"SpotLight":n={position:new H,direction:new H,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new We,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new We,groundColor:new We};break;case"RectAreaLight":n={color:new We,position:new H,halfWidth:new H,halfHeight:new H};break}return t[e.id]=n,n}}}function Rw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let bw=0;function Pw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Lw(t){const e=new Cw,n=Rw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const r=new H,s=new ht,a=new ht;function o(c){let d=0,h=0,f=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let m=0,_=0,S=0,p=0,u=0,v=0,x=0,w=0,b=0,E=0,M=0;c.sort(Pw);for(let B=0,y=c.length;B<y;B++){const T=c[B],k=T.color,U=T.intensity,j=T.distance,X=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)d+=k.r*U,h+=k.g*U,f+=k.b*U;else if(T.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(T.sh.coefficients[O],U);M++}else if(T.isDirectionalLight){const O=e.get(T);if(O.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const q=T.shadow,N=n.get(T);N.shadowIntensity=q.intensity,N.shadowBias=q.bias,N.shadowNormalBias=q.normalBias,N.shadowRadius=q.radius,N.shadowMapSize=q.mapSize,i.directionalShadow[m]=N,i.directionalShadowMap[m]=X,i.directionalShadowMatrix[m]=T.shadow.matrix,v++}i.directional[m]=O,m++}else if(T.isSpotLight){const O=e.get(T);O.position.setFromMatrixPosition(T.matrixWorld),O.color.copy(k).multiplyScalar(U),O.distance=j,O.coneCos=Math.cos(T.angle),O.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),O.decay=T.decay,i.spot[S]=O;const q=T.shadow;if(T.map&&(i.spotLightMap[b]=T.map,b++,q.updateMatrices(T),T.castShadow&&E++),i.spotLightMatrix[S]=q.matrix,T.castShadow){const N=n.get(T);N.shadowIntensity=q.intensity,N.shadowBias=q.bias,N.shadowNormalBias=q.normalBias,N.shadowRadius=q.radius,N.shadowMapSize=q.mapSize,i.spotShadow[S]=N,i.spotShadowMap[S]=X,w++}S++}else if(T.isRectAreaLight){const O=e.get(T);O.color.copy(k).multiplyScalar(U),O.halfWidth.set(T.width*.5,0,0),O.halfHeight.set(0,T.height*.5,0),i.rectArea[p]=O,p++}else if(T.isPointLight){const O=e.get(T);if(O.color.copy(T.color).multiplyScalar(T.intensity),O.distance=T.distance,O.decay=T.decay,T.castShadow){const q=T.shadow,N=n.get(T);N.shadowIntensity=q.intensity,N.shadowBias=q.bias,N.shadowNormalBias=q.normalBias,N.shadowRadius=q.radius,N.shadowMapSize=q.mapSize,N.shadowCameraNear=q.camera.near,N.shadowCameraFar=q.camera.far,i.pointShadow[_]=N,i.pointShadowMap[_]=X,i.pointShadowMatrix[_]=T.shadow.matrix,x++}i.point[_]=O,_++}else if(T.isHemisphereLight){const O=e.get(T);O.skyColor.copy(T.color).multiplyScalar(U),O.groundColor.copy(T.groundColor).multiplyScalar(U),i.hemi[u]=O,u++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=f;const P=i.hash;(P.directionalLength!==m||P.pointLength!==_||P.spotLength!==S||P.rectAreaLength!==p||P.hemiLength!==u||P.numDirectionalShadows!==v||P.numPointShadows!==x||P.numSpotShadows!==w||P.numSpotMaps!==b||P.numLightProbes!==M)&&(i.directional.length=m,i.spot.length=S,i.rectArea.length=p,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=w+b-E,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=M,P.directionalLength=m,P.pointLength=_,P.spotLength=S,P.rectAreaLength=p,P.hemiLength=u,P.numDirectionalShadows=v,P.numPointShadows=x,P.numSpotShadows=w,P.numSpotMaps=b,P.numLightProbes=M,i.version=bw++)}function l(c,d){let h=0,f=0,m=0,_=0,S=0;const p=d.matrixWorldInverse;for(let u=0,v=c.length;u<v;u++){const x=c[u];if(x.isDirectionalLight){const w=i.directional[h];w.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(p),h++}else if(x.isSpotLight){const w=i.spot[m];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(p),m++}else if(x.isRectAreaLight){const w=i.rectArea[_];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(p),a.identity(),s.copy(x.matrixWorld),s.premultiply(p),a.extractRotation(s),w.halfWidth.set(x.width*.5,0,0),w.halfHeight.set(0,x.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){const w=i.point[f];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){const w=i.hemi[S];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(p),S++}}}return{setup:o,setupView:l,state:i}}function om(t){const e=new Lw(t),n=[],i=[];function r(d){c.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function a(d){i.push(d)}function o(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Nw(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new om(t),e.set(r,[o])):s>=a.length?(o=new om(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class Dw extends Pr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ry,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Iw extends Pr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Uw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ow(t,e,n){let i=new Xf;const r=new Ze,s=new Ze,a=new xt,o=new Dw({depthPacking:by}),l=new Iw,c={},d=n.maxTextureSize,h={[Yi]:an,[an]:Yi,[Kn]:Kn},f=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:Uw,fragmentShader:Fw}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new _n;_.setAttribute("position",new Rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Ut(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=L_;let u=this.type;this.render=function(E,M,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const B=t.getRenderTarget(),y=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),k=t.state;k.setBlending(ji),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const U=u!==ai&&this.type===ai,j=u===ai&&this.type!==ai;for(let X=0,O=E.length;X<O;X++){const q=E[X],N=q.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const K=N.getFrameExtents();if(r.multiply(K),s.copy(N.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/K.x),r.x=s.x*K.x,N.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/K.y),r.y=s.y*K.y,N.mapSize.y=s.y)),N.map===null||U===!0||j===!0){const ae=this.type!==ai?{minFilter:An,magFilter:An}:{};N.map!==null&&N.map.dispose(),N.map=new Ar(r.x,r.y,ae),N.map.texture.name=q.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const Z=N.getViewportCount();for(let ae=0;ae<Z;ae++){const Re=N.getViewport(ae);a.set(s.x*Re.x,s.y*Re.y,s.x*Re.z,s.y*Re.w),k.viewport(a),N.updateMatrices(q,ae),i=N.getFrustum(),w(M,P,N.camera,q,this.type)}N.isPointLightShadow!==!0&&this.type===ai&&v(N,P),N.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(B,y,T)};function v(E,M){const P=e.update(S);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Ar(r.x,r.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(M,null,P,f,S,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(M,null,P,m,S,null)}function x(E,M,P,B){let y=null;const T=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(T!==void 0)y=T;else if(y=P.isPointLight===!0?l:o,t.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const k=y.uuid,U=M.uuid;let j=c[k];j===void 0&&(j={},c[k]=j);let X=j[U];X===void 0&&(X=y.clone(),j[U]=X,M.addEventListener("dispose",b)),y=X}if(y.visible=M.visible,y.wireframe=M.wireframe,B===ai?y.side=M.shadowSide!==null?M.shadowSide:M.side:y.side=M.shadowSide!==null?M.shadowSide:h[M.side],y.alphaMap=M.alphaMap,y.alphaTest=M.alphaTest,y.map=M.map,y.clipShadows=M.clipShadows,y.clippingPlanes=M.clippingPlanes,y.clipIntersection=M.clipIntersection,y.displacementMap=M.displacementMap,y.displacementScale=M.displacementScale,y.displacementBias=M.displacementBias,y.wireframeLinewidth=M.wireframeLinewidth,y.linewidth=M.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const k=t.properties.get(y);k.light=P}return y}function w(E,M,P,B,y){if(E.visible===!1)return;if(E.layers.test(M.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&y===ai)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);const U=e.update(E),j=E.material;if(Array.isArray(j)){const X=U.groups;for(let O=0,q=X.length;O<q;O++){const N=X[O],K=j[N.materialIndex];if(K&&K.visible){const Z=x(E,K,B,y);E.onBeforeShadow(t,E,M,P,U,Z,N),t.renderBufferDirect(P,null,U,Z,E,N),E.onAfterShadow(t,E,M,P,U,Z,N)}}}else if(j.visible){const X=x(E,j,B,y);E.onBeforeShadow(t,E,M,P,U,X,null),t.renderBufferDirect(P,null,U,X,E,null),E.onAfterShadow(t,E,M,P,U,X,null)}}const k=E.children;for(let U=0,j=k.length;U<j;U++)w(k[U],M,P,B,y)}function b(E){E.target.removeEventListener("dispose",b);for(const P in c){const B=c[P],y=E.target.uuid;y in B&&(B[y].dispose(),delete B[y])}}}const kw={[td]:nd,[id]:ad,[rd]:od,[Ms]:sd,[nd]:td,[ad]:id,[od]:rd,[sd]:Ms};function Bw(t){function e(){let D=!1;const _e=new xt;let Y=null;const ee=new xt(0,0,0,0);return{setMask:function(pe){Y!==pe&&!D&&(t.colorMask(pe,pe,pe,pe),Y=pe)},setLocked:function(pe){D=pe},setClear:function(pe,ve,Ye,Mt,Kt){Kt===!0&&(pe*=Mt,ve*=Mt,Ye*=Mt),_e.set(pe,ve,Ye,Mt),ee.equals(_e)===!1&&(t.clearColor(pe,ve,Ye,Mt),ee.copy(_e))},reset:function(){D=!1,Y=null,ee.set(-1,0,0,0)}}}function n(){let D=!1,_e=!1,Y=null,ee=null,pe=null;return{setReversed:function(ve){_e=ve},setTest:function(ve){ve?W(t.DEPTH_TEST):te(t.DEPTH_TEST)},setMask:function(ve){Y!==ve&&!D&&(t.depthMask(ve),Y=ve)},setFunc:function(ve){if(_e&&(ve=kw[ve]),ee!==ve){switch(ve){case td:t.depthFunc(t.NEVER);break;case nd:t.depthFunc(t.ALWAYS);break;case id:t.depthFunc(t.LESS);break;case Ms:t.depthFunc(t.LEQUAL);break;case rd:t.depthFunc(t.EQUAL);break;case sd:t.depthFunc(t.GEQUAL);break;case ad:t.depthFunc(t.GREATER);break;case od:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ee=ve}},setLocked:function(ve){D=ve},setClear:function(ve){pe!==ve&&(t.clearDepth(ve),pe=ve)},reset:function(){D=!1,Y=null,ee=null,pe=null}}}function i(){let D=!1,_e=null,Y=null,ee=null,pe=null,ve=null,Ye=null,Mt=null,Kt=null;return{setTest:function(Qe){D||(Qe?W(t.STENCIL_TEST):te(t.STENCIL_TEST))},setMask:function(Qe){_e!==Qe&&!D&&(t.stencilMask(Qe),_e=Qe)},setFunc:function(Qe,Zt,ei){(Y!==Qe||ee!==Zt||pe!==ei)&&(t.stencilFunc(Qe,Zt,ei),Y=Qe,ee=Zt,pe=ei)},setOp:function(Qe,Zt,ei){(ve!==Qe||Ye!==Zt||Mt!==ei)&&(t.stencilOp(Qe,Zt,ei),ve=Qe,Ye=Zt,Mt=ei)},setLocked:function(Qe){D=Qe},setClear:function(Qe){Kt!==Qe&&(t.clearStencil(Qe),Kt=Qe)},reset:function(){D=!1,_e=null,Y=null,ee=null,pe=null,ve=null,Ye=null,Mt=null,Kt=null}}}const r=new e,s=new n,a=new i,o=new WeakMap,l=new WeakMap;let c={},d={},h=new WeakMap,f=[],m=null,_=!1,S=null,p=null,u=null,v=null,x=null,w=null,b=null,E=new We(0,0,0),M=0,P=!1,B=null,y=null,T=null,k=null,U=null;const j=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,O=0;const q=t.getParameter(t.VERSION);q.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(q)[1]),X=O>=1):q.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),X=O>=2);let N=null,K={};const Z=t.getParameter(t.SCISSOR_BOX),ae=t.getParameter(t.VIEWPORT),Re=new xt().fromArray(Z),Ge=new xt().fromArray(ae);function $(D,_e,Y,ee){const pe=new Uint8Array(4),ve=t.createTexture();t.bindTexture(D,ve),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ye=0;Ye<Y;Ye++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(_e,0,t.RGBA,1,1,ee,0,t.RGBA,t.UNSIGNED_BYTE,pe):t.texImage2D(_e+Ye,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,pe);return ve}const ie={};ie[t.TEXTURE_2D]=$(t.TEXTURE_2D,t.TEXTURE_2D,1),ie[t.TEXTURE_CUBE_MAP]=$(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[t.TEXTURE_2D_ARRAY]=$(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ie[t.TEXTURE_3D]=$(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),W(t.DEPTH_TEST),s.setFunc(Ms),Fe(!1),ze(mp),W(t.CULL_FACE),L(ji);function W(D){c[D]!==!0&&(t.enable(D),c[D]=!0)}function te(D){c[D]!==!1&&(t.disable(D),c[D]=!1)}function fe(D,_e){return d[D]!==_e?(t.bindFramebuffer(D,_e),d[D]=_e,D===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=_e),D===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=_e),!0):!1}function de(D,_e){let Y=f,ee=!1;if(D){Y=h.get(_e),Y===void 0&&(Y=[],h.set(_e,Y));const pe=D.textures;if(Y.length!==pe.length||Y[0]!==t.COLOR_ATTACHMENT0){for(let ve=0,Ye=pe.length;ve<Ye;ve++)Y[ve]=t.COLOR_ATTACHMENT0+ve;Y.length=pe.length,ee=!0}}else Y[0]!==t.BACK&&(Y[0]=t.BACK,ee=!0);ee&&t.drawBuffers(Y)}function Ue(D){return m!==D?(t.useProgram(D),m=D,!0):!1}const re={[dr]:t.FUNC_ADD,[ty]:t.FUNC_SUBTRACT,[ny]:t.FUNC_REVERSE_SUBTRACT};re[iy]=t.MIN,re[ry]=t.MAX;const Ae={[sy]:t.ZERO,[ay]:t.ONE,[oy]:t.SRC_COLOR,[Ju]:t.SRC_ALPHA,[hy]:t.SRC_ALPHA_SATURATE,[dy]:t.DST_COLOR,[cy]:t.DST_ALPHA,[ly]:t.ONE_MINUS_SRC_COLOR,[ed]:t.ONE_MINUS_SRC_ALPHA,[fy]:t.ONE_MINUS_DST_COLOR,[uy]:t.ONE_MINUS_DST_ALPHA,[py]:t.CONSTANT_COLOR,[my]:t.ONE_MINUS_CONSTANT_COLOR,[gy]:t.CONSTANT_ALPHA,[_y]:t.ONE_MINUS_CONSTANT_ALPHA};function L(D,_e,Y,ee,pe,ve,Ye,Mt,Kt,Qe){if(D===ji){_===!0&&(te(t.BLEND),_=!1);return}if(_===!1&&(W(t.BLEND),_=!0),D!==ey){if(D!==S||Qe!==P){if((p!==dr||x!==dr)&&(t.blendEquation(t.FUNC_ADD),p=dr,x=dr),Qe)switch(D){case fs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case gp:t.blendFunc(t.ONE,t.ONE);break;case _p:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case vp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case fs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case gp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case _p:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case vp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}u=null,v=null,w=null,b=null,E.set(0,0,0),M=0,S=D,P=Qe}return}pe=pe||_e,ve=ve||Y,Ye=Ye||ee,(_e!==p||pe!==x)&&(t.blendEquationSeparate(re[_e],re[pe]),p=_e,x=pe),(Y!==u||ee!==v||ve!==w||Ye!==b)&&(t.blendFuncSeparate(Ae[Y],Ae[ee],Ae[ve],Ae[Ye]),u=Y,v=ee,w=ve,b=Ye),(Mt.equals(E)===!1||Kt!==M)&&(t.blendColor(Mt.r,Mt.g,Mt.b,Kt),E.copy(Mt),M=Kt),S=D,P=!1}function Xe(D,_e){D.side===Kn?te(t.CULL_FACE):W(t.CULL_FACE);let Y=D.side===an;_e&&(Y=!Y),Fe(Y),D.blending===fs&&D.transparent===!1?L(ji):L(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),r.setMask(D.colorWrite);const ee=D.stencilWrite;a.setTest(ee),ee&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),rt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?W(t.SAMPLE_ALPHA_TO_COVERAGE):te(t.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(D){B!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),B=D)}function ze(D){D!==Zx?(W(t.CULL_FACE),D!==y&&(D===mp?t.cullFace(t.BACK):D===Qx?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):te(t.CULL_FACE),y=D}function Ne(D){D!==T&&(X&&t.lineWidth(D),T=D)}function rt(D,_e,Y){D?(W(t.POLYGON_OFFSET_FILL),(k!==_e||U!==Y)&&(t.polygonOffset(_e,Y),k=_e,U=Y)):te(t.POLYGON_OFFSET_FILL)}function Pe(D){D?W(t.SCISSOR_TEST):te(t.SCISSOR_TEST)}function R(D){D===void 0&&(D=t.TEXTURE0+j-1),N!==D&&(t.activeTexture(D),N=D)}function A(D,_e,Y){Y===void 0&&(N===null?Y=t.TEXTURE0+j-1:Y=N);let ee=K[Y];ee===void 0&&(ee={type:void 0,texture:void 0},K[Y]=ee),(ee.type!==D||ee.texture!==_e)&&(N!==Y&&(t.activeTexture(Y),N=Y),t.bindTexture(D,_e||ie[D]),ee.type=D,ee.texture=_e)}function z(){const D=K[N];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function J(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ke(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Oe(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ke(D){Re.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),Re.copy(D))}function Me(D){Ge.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),Ge.copy(D))}function $e(D,_e){let Y=l.get(_e);Y===void 0&&(Y=new WeakMap,l.set(_e,Y));let ee=Y.get(D);ee===void 0&&(ee=t.getUniformBlockIndex(_e,D.name),Y.set(D,ee))}function Be(D,_e){const ee=l.get(_e).get(D);o.get(_e)!==ee&&(t.uniformBlockBinding(_e,ee,D.__bindingPointIndex),o.set(_e,ee))}function at(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},N=null,K={},d={},h=new WeakMap,f=[],m=null,_=!1,S=null,p=null,u=null,v=null,x=null,w=null,b=null,E=new We(0,0,0),M=0,P=!1,B=null,y=null,T=null,k=null,U=null,Re.set(0,0,t.canvas.width,t.canvas.height),Ge.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:W,disable:te,bindFramebuffer:fe,drawBuffers:de,useProgram:Ue,setBlending:L,setMaterial:Xe,setFlipSided:Fe,setCullFace:ze,setLineWidth:Ne,setPolygonOffset:rt,setScissorTest:Pe,activeTexture:R,bindTexture:A,unbindTexture:z,compressedTexImage2D:J,compressedTexImage3D:ne,texImage2D:Se,texImage3D:Oe,updateUBOMapping:$e,uniformBlockBinding:Be,texStorage2D:Ke,texStorage3D:oe,texSubImage2D:Q,texSubImage3D:we,compressedTexSubImage2D:ce,compressedTexSubImage3D:ge,scissor:ke,viewport:Me,reset:at}}function lm(t,e,n,i){const r=zw(i);switch(n){case O_:return t*e;case B_:return t*e;case z_:return t*e*2;case H_:return t*e/r.components*r.byteLength;case Hf:return t*e/r.components*r.byteLength;case V_:return t*e*2/r.components*r.byteLength;case Vf:return t*e*2/r.components*r.byteLength;case k_:return t*e*3/r.components*r.byteLength;case Hn:return t*e*4/r.components*r.byteLength;case Gf:return t*e*4/r.components*r.byteLength;case $o:case Yo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case qo:case Ko:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case hd:case md:return Math.max(t,16)*Math.max(e,8)/4;case fd:case pd:return Math.max(t,8)*Math.max(e,8)/2;case gd:case _d:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case vd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case xd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case yd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Sd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Md:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Ed:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case wd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Td:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Ad:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Cd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Rd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case bd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Pd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Ld:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Nd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Zo:case Dd:case Id:return Math.ceil(t/4)*Math.ceil(e/4)*16;case G_:case Ud:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Fd:case Od:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function zw(t){switch(t){case vi:case I_:return{byteLength:1,components:1};case ba:case U_:case Fa:return{byteLength:2,components:1};case Bf:case zf:return{byteLength:2,components:4};case Tr:case kf:case di:return{byteLength:4,components:1};case F_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function Hw(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ze,d=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,A){return m?new OffscreenCanvas(R,A):Rl("canvas")}function S(R,A,z){let J=1;const ne=Pe(R);if((ne.width>z||ne.height>z)&&(J=z/Math.max(ne.width,ne.height)),J<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Q=Math.floor(J*ne.width),we=Math.floor(J*ne.height);h===void 0&&(h=_(Q,we));const ce=A?_(Q,we):h;return ce.width=Q,ce.height=we,ce.getContext("2d").drawImage(R,0,0,Q,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+Q+"x"+we+")."),ce}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),R;return R}function p(R){return R.generateMipmaps&&R.minFilter!==An&&R.minFilter!==Bn}function u(R){t.generateMipmap(R)}function v(R,A,z,J,ne=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Q=A;if(A===t.RED&&(z===t.FLOAT&&(Q=t.R32F),z===t.HALF_FLOAT&&(Q=t.R16F),z===t.UNSIGNED_BYTE&&(Q=t.R8)),A===t.RED_INTEGER&&(z===t.UNSIGNED_BYTE&&(Q=t.R8UI),z===t.UNSIGNED_SHORT&&(Q=t.R16UI),z===t.UNSIGNED_INT&&(Q=t.R32UI),z===t.BYTE&&(Q=t.R8I),z===t.SHORT&&(Q=t.R16I),z===t.INT&&(Q=t.R32I)),A===t.RG&&(z===t.FLOAT&&(Q=t.RG32F),z===t.HALF_FLOAT&&(Q=t.RG16F),z===t.UNSIGNED_BYTE&&(Q=t.RG8)),A===t.RG_INTEGER&&(z===t.UNSIGNED_BYTE&&(Q=t.RG8UI),z===t.UNSIGNED_SHORT&&(Q=t.RG16UI),z===t.UNSIGNED_INT&&(Q=t.RG32UI),z===t.BYTE&&(Q=t.RG8I),z===t.SHORT&&(Q=t.RG16I),z===t.INT&&(Q=t.RG32I)),A===t.RGB_INTEGER&&(z===t.UNSIGNED_BYTE&&(Q=t.RGB8UI),z===t.UNSIGNED_SHORT&&(Q=t.RGB16UI),z===t.UNSIGNED_INT&&(Q=t.RGB32UI),z===t.BYTE&&(Q=t.RGB8I),z===t.SHORT&&(Q=t.RGB16I),z===t.INT&&(Q=t.RGB32I)),A===t.RGBA_INTEGER&&(z===t.UNSIGNED_BYTE&&(Q=t.RGBA8UI),z===t.UNSIGNED_SHORT&&(Q=t.RGBA16UI),z===t.UNSIGNED_INT&&(Q=t.RGBA32UI),z===t.BYTE&&(Q=t.RGBA8I),z===t.SHORT&&(Q=t.RGBA16I),z===t.INT&&(Q=t.RGBA32I)),A===t.RGB&&z===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),A===t.RGBA){const we=ne?wl:tt.getTransfer(J);z===t.FLOAT&&(Q=t.RGBA32F),z===t.HALF_FLOAT&&(Q=t.RGBA16F),z===t.UNSIGNED_BYTE&&(Q=we===ut?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function x(R,A){let z;return R?A===null||A===Tr||A===Ts?z=t.DEPTH24_STENCIL8:A===di?z=t.DEPTH32F_STENCIL8:A===ba&&(z=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Tr||A===Ts?z=t.DEPTH_COMPONENT24:A===di?z=t.DEPTH_COMPONENT32F:A===ba&&(z=t.DEPTH_COMPONENT16),z}function w(R,A){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==An&&R.minFilter!==Bn?Math.log2(Math.max(A.width,A.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?A.mipmaps.length:1}function b(R){const A=R.target;A.removeEventListener("dispose",b),M(A),A.isVideoTexture&&d.delete(A)}function E(R){const A=R.target;A.removeEventListener("dispose",E),B(A)}function M(R){const A=i.get(R);if(A.__webglInit===void 0)return;const z=R.source,J=f.get(z);if(J){const ne=J[A.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&P(R),Object.keys(J).length===0&&f.delete(z)}i.remove(R)}function P(R){const A=i.get(R);t.deleteTexture(A.__webglTexture);const z=R.source,J=f.get(z);delete J[A.__cacheKey],a.memory.textures--}function B(R){const A=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(A.__webglFramebuffer[J]))for(let ne=0;ne<A.__webglFramebuffer[J].length;ne++)t.deleteFramebuffer(A.__webglFramebuffer[J][ne]);else t.deleteFramebuffer(A.__webglFramebuffer[J]);A.__webglDepthbuffer&&t.deleteRenderbuffer(A.__webglDepthbuffer[J])}else{if(Array.isArray(A.__webglFramebuffer))for(let J=0;J<A.__webglFramebuffer.length;J++)t.deleteFramebuffer(A.__webglFramebuffer[J]);else t.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&t.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&t.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let J=0;J<A.__webglColorRenderbuffer.length;J++)A.__webglColorRenderbuffer[J]&&t.deleteRenderbuffer(A.__webglColorRenderbuffer[J]);A.__webglDepthRenderbuffer&&t.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const z=R.textures;for(let J=0,ne=z.length;J<ne;J++){const Q=i.get(z[J]);Q.__webglTexture&&(t.deleteTexture(Q.__webglTexture),a.memory.textures--),i.remove(z[J])}i.remove(R)}let y=0;function T(){y=0}function k(){const R=y;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),y+=1,R}function U(R){const A=[];return A.push(R.wrapS),A.push(R.wrapT),A.push(R.wrapR||0),A.push(R.magFilter),A.push(R.minFilter),A.push(R.anisotropy),A.push(R.internalFormat),A.push(R.format),A.push(R.type),A.push(R.generateMipmaps),A.push(R.premultiplyAlpha),A.push(R.flipY),A.push(R.unpackAlignment),A.push(R.colorSpace),A.join()}function j(R,A){const z=i.get(R);if(R.isVideoTexture&&Ne(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){const J=R.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ge(z,R,A);return}}n.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+A)}function X(R,A){const z=i.get(R);if(R.version>0&&z.__version!==R.version){Ge(z,R,A);return}n.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+A)}function O(R,A){const z=i.get(R);if(R.version>0&&z.__version!==R.version){Ge(z,R,A);return}n.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+A)}function q(R,A){const z=i.get(R);if(R.version>0&&z.__version!==R.version){$(z,R,A);return}n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+A)}const N={[ud]:t.REPEAT,[gr]:t.CLAMP_TO_EDGE,[dd]:t.MIRRORED_REPEAT},K={[An]:t.NEAREST,[Cy]:t.NEAREST_MIPMAP_NEAREST,[lo]:t.NEAREST_MIPMAP_LINEAR,[Bn]:t.LINEAR,[Cc]:t.LINEAR_MIPMAP_NEAREST,[_r]:t.LINEAR_MIPMAP_LINEAR},Z={[Ly]:t.NEVER,[Oy]:t.ALWAYS,[Ny]:t.LESS,[W_]:t.LEQUAL,[Dy]:t.EQUAL,[Fy]:t.GEQUAL,[Iy]:t.GREATER,[Uy]:t.NOTEQUAL};function ae(R,A){if(A.type===di&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Bn||A.magFilter===Cc||A.magFilter===lo||A.magFilter===_r||A.minFilter===Bn||A.minFilter===Cc||A.minFilter===lo||A.minFilter===_r)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,N[A.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,N[A.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,N[A.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,K[A.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,K[A.minFilter]),A.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Z[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===An||A.minFilter!==lo&&A.minFilter!==_r||A.type===di&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function Re(R,A){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,A.addEventListener("dispose",b));const J=A.source;let ne=f.get(J);ne===void 0&&(ne={},f.set(J,ne));const Q=U(A);if(Q!==R.__cacheKey){ne[Q]===void 0&&(ne[Q]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,z=!0),ne[Q].usedTimes++;const we=ne[R.__cacheKey];we!==void 0&&(ne[R.__cacheKey].usedTimes--,we.usedTimes===0&&P(A)),R.__cacheKey=Q,R.__webglTexture=ne[Q].texture}return z}function Ge(R,A,z){let J=t.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(J=t.TEXTURE_2D_ARRAY),A.isData3DTexture&&(J=t.TEXTURE_3D);const ne=Re(R,A),Q=A.source;n.bindTexture(J,R.__webglTexture,t.TEXTURE0+z);const we=i.get(Q);if(Q.version!==we.__version||ne===!0){n.activeTexture(t.TEXTURE0+z);const ce=tt.getPrimaries(tt.workingColorSpace),ge=A.colorSpace===Di?null:tt.getPrimaries(A.colorSpace),Ke=A.colorSpace===Di||ce===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let oe=S(A.image,!1,r.maxTextureSize);oe=rt(A,oe);const Se=s.convert(A.format,A.colorSpace),Oe=s.convert(A.type);let ke=v(A.internalFormat,Se,Oe,A.colorSpace,A.isVideoTexture);ae(J,A);let Me;const $e=A.mipmaps,Be=A.isVideoTexture!==!0,at=we.__version===void 0||ne===!0,D=Q.dataReady,_e=w(A,oe);if(A.isDepthTexture)ke=x(A.format===As,A.type),at&&(Be?n.texStorage2D(t.TEXTURE_2D,1,ke,oe.width,oe.height):n.texImage2D(t.TEXTURE_2D,0,ke,oe.width,oe.height,0,Se,Oe,null));else if(A.isDataTexture)if($e.length>0){Be&&at&&n.texStorage2D(t.TEXTURE_2D,_e,ke,$e[0].width,$e[0].height);for(let Y=0,ee=$e.length;Y<ee;Y++)Me=$e[Y],Be?D&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,Me.width,Me.height,Se,Oe,Me.data):n.texImage2D(t.TEXTURE_2D,Y,ke,Me.width,Me.height,0,Se,Oe,Me.data);A.generateMipmaps=!1}else Be?(at&&n.texStorage2D(t.TEXTURE_2D,_e,ke,oe.width,oe.height),D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,oe.width,oe.height,Se,Oe,oe.data)):n.texImage2D(t.TEXTURE_2D,0,ke,oe.width,oe.height,0,Se,Oe,oe.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Be&&at&&n.texStorage3D(t.TEXTURE_2D_ARRAY,_e,ke,$e[0].width,$e[0].height,oe.depth);for(let Y=0,ee=$e.length;Y<ee;Y++)if(Me=$e[Y],A.format!==Hn)if(Se!==null)if(Be){if(D)if(A.layerUpdates.size>0){const pe=lm(Me.width,Me.height,A.format,A.type);for(const ve of A.layerUpdates){const Ye=Me.data.subarray(ve*pe/Me.data.BYTES_PER_ELEMENT,(ve+1)*pe/Me.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,ve,Me.width,Me.height,1,Se,Ye,0,0)}A.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,Me.width,Me.height,oe.depth,Se,Me.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Y,ke,Me.width,Me.height,oe.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,Me.width,Me.height,oe.depth,Se,Oe,Me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Y,ke,Me.width,Me.height,oe.depth,0,Se,Oe,Me.data)}else{Be&&at&&n.texStorage2D(t.TEXTURE_2D,_e,ke,$e[0].width,$e[0].height);for(let Y=0,ee=$e.length;Y<ee;Y++)Me=$e[Y],A.format!==Hn?Se!==null?Be?D&&n.compressedTexSubImage2D(t.TEXTURE_2D,Y,0,0,Me.width,Me.height,Se,Me.data):n.compressedTexImage2D(t.TEXTURE_2D,Y,ke,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?D&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,Me.width,Me.height,Se,Oe,Me.data):n.texImage2D(t.TEXTURE_2D,Y,ke,Me.width,Me.height,0,Se,Oe,Me.data)}else if(A.isDataArrayTexture)if(Be){if(at&&n.texStorage3D(t.TEXTURE_2D_ARRAY,_e,ke,oe.width,oe.height,oe.depth),D)if(A.layerUpdates.size>0){const Y=lm(oe.width,oe.height,A.format,A.type);for(const ee of A.layerUpdates){const pe=oe.data.subarray(ee*Y/oe.data.BYTES_PER_ELEMENT,(ee+1)*Y/oe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ee,oe.width,oe.height,1,Se,Oe,pe)}A.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Se,Oe,oe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ke,oe.width,oe.height,oe.depth,0,Se,Oe,oe.data);else if(A.isData3DTexture)Be?(at&&n.texStorage3D(t.TEXTURE_3D,_e,ke,oe.width,oe.height,oe.depth),D&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Se,Oe,oe.data)):n.texImage3D(t.TEXTURE_3D,0,ke,oe.width,oe.height,oe.depth,0,Se,Oe,oe.data);else if(A.isFramebufferTexture){if(at)if(Be)n.texStorage2D(t.TEXTURE_2D,_e,ke,oe.width,oe.height);else{let Y=oe.width,ee=oe.height;for(let pe=0;pe<_e;pe++)n.texImage2D(t.TEXTURE_2D,pe,ke,Y,ee,0,Se,Oe,null),Y>>=1,ee>>=1}}else if($e.length>0){if(Be&&at){const Y=Pe($e[0]);n.texStorage2D(t.TEXTURE_2D,_e,ke,Y.width,Y.height)}for(let Y=0,ee=$e.length;Y<ee;Y++)Me=$e[Y],Be?D&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,Se,Oe,Me):n.texImage2D(t.TEXTURE_2D,Y,ke,Se,Oe,Me);A.generateMipmaps=!1}else if(Be){if(at){const Y=Pe(oe);n.texStorage2D(t.TEXTURE_2D,_e,ke,Y.width,Y.height)}D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Se,Oe,oe)}else n.texImage2D(t.TEXTURE_2D,0,ke,Se,Oe,oe);p(A)&&u(J),we.__version=Q.version,A.onUpdate&&A.onUpdate(A)}R.__version=A.version}function $(R,A,z){if(A.image.length!==6)return;const J=Re(R,A),ne=A.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+z);const Q=i.get(ne);if(ne.version!==Q.__version||J===!0){n.activeTexture(t.TEXTURE0+z);const we=tt.getPrimaries(tt.workingColorSpace),ce=A.colorSpace===Di?null:tt.getPrimaries(A.colorSpace),ge=A.colorSpace===Di||we===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Ke=A.isCompressedTexture||A.image[0].isCompressedTexture,oe=A.image[0]&&A.image[0].isDataTexture,Se=[];for(let ee=0;ee<6;ee++)!Ke&&!oe?Se[ee]=S(A.image[ee],!0,r.maxCubemapSize):Se[ee]=oe?A.image[ee].image:A.image[ee],Se[ee]=rt(A,Se[ee]);const Oe=Se[0],ke=s.convert(A.format,A.colorSpace),Me=s.convert(A.type),$e=v(A.internalFormat,ke,Me,A.colorSpace),Be=A.isVideoTexture!==!0,at=Q.__version===void 0||J===!0,D=ne.dataReady;let _e=w(A,Oe);ae(t.TEXTURE_CUBE_MAP,A);let Y;if(Ke){Be&&at&&n.texStorage2D(t.TEXTURE_CUBE_MAP,_e,$e,Oe.width,Oe.height);for(let ee=0;ee<6;ee++){Y=Se[ee].mipmaps;for(let pe=0;pe<Y.length;pe++){const ve=Y[pe];A.format!==Hn?ke!==null?Be?D&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe,0,0,ve.width,ve.height,ke,ve.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe,$e,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe,0,0,ve.width,ve.height,ke,Me,ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe,$e,ve.width,ve.height,0,ke,Me,ve.data)}}}else{if(Y=A.mipmaps,Be&&at){Y.length>0&&_e++;const ee=Pe(Se[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,_e,$e,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(oe){Be?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Se[ee].width,Se[ee].height,ke,Me,Se[ee].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,$e,Se[ee].width,Se[ee].height,0,ke,Me,Se[ee].data);for(let pe=0;pe<Y.length;pe++){const Ye=Y[pe].image[ee].image;Be?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe+1,0,0,Ye.width,Ye.height,ke,Me,Ye.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe+1,$e,Ye.width,Ye.height,0,ke,Me,Ye.data)}}else{Be?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ke,Me,Se[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,$e,ke,Me,Se[ee]);for(let pe=0;pe<Y.length;pe++){const ve=Y[pe];Be?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe+1,0,0,ke,Me,ve.image[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe+1,$e,ke,Me,ve.image[ee])}}}p(A)&&u(t.TEXTURE_CUBE_MAP),Q.__version=ne.version,A.onUpdate&&A.onUpdate(A)}R.__version=A.version}function ie(R,A,z,J,ne,Q){const we=s.convert(z.format,z.colorSpace),ce=s.convert(z.type),ge=v(z.internalFormat,we,ce,z.colorSpace);if(!i.get(A).__hasExternalTextures){const oe=Math.max(1,A.width>>Q),Se=Math.max(1,A.height>>Q);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,Q,ge,oe,Se,A.depth,0,we,ce,null):n.texImage2D(ne,Q,ge,oe,Se,0,we,ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),ze(A)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,ne,i.get(z).__webglTexture,0,Fe(A)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,J,ne,i.get(z).__webglTexture,Q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function W(R,A,z){if(t.bindRenderbuffer(t.RENDERBUFFER,R),A.depthBuffer){const J=A.depthTexture,ne=J&&J.isDepthTexture?J.type:null,Q=x(A.stencilBuffer,ne),we=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=Fe(A);ze(A)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ce,Q,A.width,A.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,Q,A.width,A.height):t.renderbufferStorage(t.RENDERBUFFER,Q,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,we,t.RENDERBUFFER,R)}else{const J=A.textures;for(let ne=0;ne<J.length;ne++){const Q=J[ne],we=s.convert(Q.format,Q.colorSpace),ce=s.convert(Q.type),ge=v(Q.internalFormat,we,ce,Q.colorSpace),Ke=Fe(A);z&&ze(A)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ke,ge,A.width,A.height):ze(A)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ke,ge,A.width,A.height):t.renderbufferStorage(t.RENDERBUFFER,ge,A.width,A.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function te(R,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),j(A.depthTexture,0);const J=i.get(A.depthTexture).__webglTexture,ne=Fe(A);if(A.depthTexture.format===hs)ze(A)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0);else if(A.depthTexture.format===As)ze(A)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function fe(R){const A=i.get(R),z=R.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==R.depthTexture){const J=R.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),J){const ne=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,J.removeEventListener("dispose",ne)};J.addEventListener("dispose",ne),A.__depthDisposeCallback=ne}A.__boundDepthTexture=J}if(R.depthTexture&&!A.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");te(A.__webglFramebuffer,R)}else if(z){A.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer[J]),A.__webglDepthbuffer[J]===void 0)A.__webglDepthbuffer[J]=t.createRenderbuffer(),W(A.__webglDepthbuffer[J],R,!1);else{const ne=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=A.__webglDepthbuffer[J];t.bindRenderbuffer(t.RENDERBUFFER,Q),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,Q)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=t.createRenderbuffer(),W(A.__webglDepthbuffer,R,!1);else{const J=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ne=A.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ne),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,ne)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function de(R,A,z){const J=i.get(R);A!==void 0&&ie(J.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),z!==void 0&&fe(R)}function Ue(R){const A=R.texture,z=i.get(R),J=i.get(A);R.addEventListener("dispose",E);const ne=R.textures,Q=R.isWebGLCubeRenderTarget===!0,we=ne.length>1;if(we||(J.__webglTexture===void 0&&(J.__webglTexture=t.createTexture()),J.__version=A.version,a.memory.textures++),Q){z.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(A.mipmaps&&A.mipmaps.length>0){z.__webglFramebuffer[ce]=[];for(let ge=0;ge<A.mipmaps.length;ge++)z.__webglFramebuffer[ce][ge]=t.createFramebuffer()}else z.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){z.__webglFramebuffer=[];for(let ce=0;ce<A.mipmaps.length;ce++)z.__webglFramebuffer[ce]=t.createFramebuffer()}else z.__webglFramebuffer=t.createFramebuffer();if(we)for(let ce=0,ge=ne.length;ce<ge;ce++){const Ke=i.get(ne[ce]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=t.createTexture(),a.memory.textures++)}if(R.samples>0&&ze(R)===!1){z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ce=0;ce<ne.length;ce++){const ge=ne[ce];z.__webglColorRenderbuffer[ce]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[ce]);const Ke=s.convert(ge.format,ge.colorSpace),oe=s.convert(ge.type),Se=v(ge.internalFormat,Ke,oe,ge.colorSpace,R.isXRRenderTarget===!0),Oe=Fe(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Oe,Se,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,z.__webglColorRenderbuffer[ce])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),W(z.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Q){n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),ae(t.TEXTURE_CUBE_MAP,A);for(let ce=0;ce<6;ce++)if(A.mipmaps&&A.mipmaps.length>0)for(let ge=0;ge<A.mipmaps.length;ge++)ie(z.__webglFramebuffer[ce][ge],R,A,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ge);else ie(z.__webglFramebuffer[ce],R,A,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);p(A)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(we){for(let ce=0,ge=ne.length;ce<ge;ce++){const Ke=ne[ce],oe=i.get(Ke);n.bindTexture(t.TEXTURE_2D,oe.__webglTexture),ae(t.TEXTURE_2D,Ke),ie(z.__webglFramebuffer,R,Ke,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,0),p(Ke)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ce=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,J.__webglTexture),ae(ce,A),A.mipmaps&&A.mipmaps.length>0)for(let ge=0;ge<A.mipmaps.length;ge++)ie(z.__webglFramebuffer[ge],R,A,t.COLOR_ATTACHMENT0,ce,ge);else ie(z.__webglFramebuffer,R,A,t.COLOR_ATTACHMENT0,ce,0);p(A)&&u(ce),n.unbindTexture()}R.depthBuffer&&fe(R)}function re(R){const A=R.textures;for(let z=0,J=A.length;z<J;z++){const ne=A[z];if(p(ne)){const Q=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,we=i.get(ne).__webglTexture;n.bindTexture(Q,we),u(Q),n.unbindTexture()}}}const Ae=[],L=[];function Xe(R){if(R.samples>0){if(ze(R)===!1){const A=R.textures,z=R.width,J=R.height;let ne=t.COLOR_BUFFER_BIT;const Q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,we=i.get(R),ce=A.length>1;if(ce)for(let ge=0;ge<A.length;ge++)n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let ge=0;ge<A.length;ge++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),ce){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,we.__webglColorRenderbuffer[ge]);const Ke=i.get(A[ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ke,0)}t.blitFramebuffer(0,0,z,J,0,0,z,J,ne,t.NEAREST),l===!0&&(Ae.length=0,L.length=0,Ae.push(t.COLOR_ATTACHMENT0+ge),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ae.push(Q),L.push(Q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,L)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ae))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ce)for(let ge=0;ge<A.length;ge++){n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,we.__webglColorRenderbuffer[ge]);const Ke=i.get(A[ge]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,Ke,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const A=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[A])}}}function Fe(R){return Math.min(r.maxSamples,R.samples)}function ze(R){const A=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ne(R){const A=a.render.frame;d.get(R)!==A&&(d.set(R,A),R.update())}function rt(R,A){const z=R.colorSpace,J=R.format,ne=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==Ji&&z!==Di&&(tt.getTransfer(z)===ut?(J!==Hn||ne!==vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),A}function Pe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=T,this.setTexture2D=j,this.setTexture2DArray=X,this.setTexture3D=O,this.setTextureCube=q,this.rebindTextures=de,this.setupRenderTarget=Ue,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=ze}function Vw(t,e){function n(i,r=Di){let s;const a=tt.getTransfer(r);if(i===vi)return t.UNSIGNED_BYTE;if(i===Bf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===zf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===F_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===I_)return t.BYTE;if(i===U_)return t.SHORT;if(i===ba)return t.UNSIGNED_SHORT;if(i===kf)return t.INT;if(i===Tr)return t.UNSIGNED_INT;if(i===di)return t.FLOAT;if(i===Fa)return t.HALF_FLOAT;if(i===O_)return t.ALPHA;if(i===k_)return t.RGB;if(i===Hn)return t.RGBA;if(i===B_)return t.LUMINANCE;if(i===z_)return t.LUMINANCE_ALPHA;if(i===hs)return t.DEPTH_COMPONENT;if(i===As)return t.DEPTH_STENCIL;if(i===H_)return t.RED;if(i===Hf)return t.RED_INTEGER;if(i===V_)return t.RG;if(i===Vf)return t.RG_INTEGER;if(i===Gf)return t.RGBA_INTEGER;if(i===$o||i===Yo||i===qo||i===Ko)if(a===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===$o)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Yo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===qo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ko)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===$o)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Yo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===qo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ko)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===fd||i===hd||i===pd||i===md)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===fd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===hd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===pd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===md)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===gd||i===_d||i===vd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===gd||i===_d)return a===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===vd)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===xd||i===yd||i===Sd||i===Md||i===Ed||i===wd||i===Td||i===Ad||i===Cd||i===Rd||i===bd||i===Pd||i===Ld||i===Nd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===xd)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===yd)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Sd)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Md)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ed)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===wd)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Td)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ad)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Cd)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Rd)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===bd)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Pd)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ld)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Nd)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Zo||i===Dd||i===Id)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Zo)return a===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Dd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Id)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===G_||i===Ud||i===Fd||i===Od)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Zo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ud)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Od)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ts?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class Gw extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ea extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jw={type:"move"};class iu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ea,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ea,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ea,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const p=n.getJointPose(S,i),u=this._getHandJoint(c,S);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jw)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ea;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Ww=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class $w{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new on,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new qi({vertexShader:Ww,fragmentShader:Xw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ut(new Ha(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Yw extends Ls{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,h=null,f=null,m=null,_=null;const S=new $w,p=n.getContextAttributes();let u=null,v=null;const x=[],w=[],b=new Ze;let E=null;const M=new wn;M.layers.enable(1),M.viewport=new xt;const P=new wn;P.layers.enable(2),P.viewport=new xt;const B=[M,P],y=new Gw;y.layers.enable(1),y.layers.enable(2);let T=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ie=x[$];return ie===void 0&&(ie=new iu,x[$]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function($){let ie=x[$];return ie===void 0&&(ie=new iu,x[$]=ie),ie.getGripSpace()},this.getHand=function($){let ie=x[$];return ie===void 0&&(ie=new iu,x[$]=ie),ie.getHandSpace()};function U($){const ie=w.indexOf($.inputSource);if(ie===-1)return;const W=x[ie];W!==void 0&&(W.update($.inputSource,$.frame,c||a),W.dispatchEvent({type:$.type,data:$.inputSource}))}function j(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",X);for(let $=0;$<x.length;$++){const ie=w[$];ie!==null&&(w[$]=null,x[$].disconnect(ie))}T=null,k=null,S.reset(),e.setRenderTarget(u),m=null,f=null,h=null,r=null,v=null,Ge.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",j),r.addEventListener("inputsourceschange",X),p.xrCompatible!==!0&&await n.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0){const ie={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,ie),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new Ar(m.framebufferWidth,m.framebufferHeight,{format:Hn,type:vi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ie=null,W=null,te=null;p.depth&&(te=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ie=p.stencil?As:hs,W=p.stencil?Ts:Tr);const fe={colorFormat:n.RGBA8,depthFormat:te,scaleFactor:s};h=new XRWebGLBinding(r,n),f=h.createProjectionLayer(fe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Ar(f.textureWidth,f.textureHeight,{format:Hn,type:vi,depthTexture:new rv(f.textureWidth,f.textureHeight,W,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ge.setContext(r),Ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function X($){for(let ie=0;ie<$.removed.length;ie++){const W=$.removed[ie],te=w.indexOf(W);te>=0&&(w[te]=null,x[te].disconnect(W))}for(let ie=0;ie<$.added.length;ie++){const W=$.added[ie];let te=w.indexOf(W);if(te===-1){for(let de=0;de<x.length;de++)if(de>=w.length){w.push(W),te=de;break}else if(w[de]===null){w[de]=W,te=de;break}if(te===-1)break}const fe=x[te];fe&&fe.connect(W)}}const O=new H,q=new H;function N($,ie,W){O.setFromMatrixPosition(ie.matrixWorld),q.setFromMatrixPosition(W.matrixWorld);const te=O.distanceTo(q),fe=ie.projectionMatrix.elements,de=W.projectionMatrix.elements,Ue=fe[14]/(fe[10]-1),re=fe[14]/(fe[10]+1),Ae=(fe[9]+1)/fe[5],L=(fe[9]-1)/fe[5],Xe=(fe[8]-1)/fe[0],Fe=(de[8]+1)/de[0],ze=Ue*Xe,Ne=Ue*Fe,rt=te/(-Xe+Fe),Pe=rt*-Xe;if(ie.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Pe),$.translateZ(rt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),fe[10]===-1)$.projectionMatrix.copy(ie.projectionMatrix),$.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const R=Ue+rt,A=re+rt,z=ze-Pe,J=Ne+(te-Pe),ne=Ae*re/A*R,Q=L*re/A*R;$.projectionMatrix.makePerspective(z,J,ne,Q,R,A),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function K($,ie){ie===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ie.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let ie=$.near,W=$.far;S.texture!==null&&(S.depthNear>0&&(ie=S.depthNear),S.depthFar>0&&(W=S.depthFar)),y.near=P.near=M.near=ie,y.far=P.far=M.far=W,(T!==y.near||k!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,k=y.far);const te=$.parent,fe=y.cameras;K(y,te);for(let de=0;de<fe.length;de++)K(fe[de],te);fe.length===2?N(y,M,P):y.projectionMatrix.copy(M.projectionMatrix),Z($,y,te)};function Z($,ie,W){W===null?$.matrix.copy(ie.matrixWorld):($.matrix.copy(W.matrixWorld),$.matrix.invert(),$.matrix.multiply(ie.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ie.projectionMatrix),$.projectionMatrixInverse.copy(ie.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=kd*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(y)};let ae=null;function Re($,ie){if(d=ie.getViewerPose(c||a),_=ie,d!==null){const W=d.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let te=!1;W.length!==y.cameras.length&&(y.cameras.length=0,te=!0);for(let de=0;de<W.length;de++){const Ue=W[de];let re=null;if(m!==null)re=m.getViewport(Ue);else{const L=h.getViewSubImage(f,Ue);re=L.viewport,de===0&&(e.setRenderTargetTextures(v,L.colorTexture,f.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(v))}let Ae=B[de];Ae===void 0&&(Ae=new wn,Ae.layers.enable(de),Ae.viewport=new xt,B[de]=Ae),Ae.matrix.fromArray(Ue.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(Ue.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(re.x,re.y,re.width,re.height),de===0&&(y.matrix.copy(Ae.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),te===!0&&y.cameras.push(Ae)}const fe=r.enabledFeatures;if(fe&&fe.includes("depth-sensing")){const de=h.getDepthInformation(W[0]);de&&de.isValid&&de.texture&&S.init(e,de,r.renderState)}}for(let W=0;W<x.length;W++){const te=w[W],fe=x[W];te!==null&&fe!==void 0&&fe.update(te,ie,c||a)}ae&&ae($,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),_=null}const Ge=new nv;Ge.setAnimationLoop(Re),this.setAnimationLoop=function($){ae=$},this.dispose=function(){}}}const ar=new Jn,qw=new ht;function Kw(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,J_(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,v,x,w){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),h(p,u)):u.isMeshPhongMaterial?(s(p,u),d(p,u)):u.isMeshStandardMaterial?(s(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,w)):u.isMeshMatcapMaterial?(s(p,u),_(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),S(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?l(p,u,v,x):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===an&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===an&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const v=e.get(u),x=v.envMap,w=v.envMapRotation;x&&(p.envMap.value=x,ar.copy(w),ar.x*=-1,ar.y*=-1,ar.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ar.y*=-1,ar.z*=-1),p.envMapRotation.value.setFromMatrix4(qw.makeRotationFromEuler(ar)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,v,x){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*v,p.scale.value=x*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function d(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function h(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,v){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===an&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,u){u.matcap&&(p.matcap.value=u.matcap)}function S(p,u){const v=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Zw(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const w=x.program;i.uniformBlockBinding(v,w)}function c(v,x){let w=r[v.id];w===void 0&&(_(v),w=d(v),r[v.id]=w,v.addEventListener("dispose",p));const b=x.program;i.updateUBOMapping(v,b);const E=e.render.frame;s[v.id]!==E&&(f(v),s[v.id]=E)}function d(v){const x=h();v.__bindingPointIndex=x;const w=t.createBuffer(),b=v.__size,E=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,b,E),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,w),w}function h(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const x=r[v.id],w=v.uniforms,b=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let E=0,M=w.length;E<M;E++){const P=Array.isArray(w[E])?w[E]:[w[E]];for(let B=0,y=P.length;B<y;B++){const T=P[B];if(m(T,E,B,b)===!0){const k=T.__offset,U=Array.isArray(T.value)?T.value:[T.value];let j=0;for(let X=0;X<U.length;X++){const O=U[X],q=S(O);typeof O=="number"||typeof O=="boolean"?(T.__data[0]=O,t.bufferSubData(t.UNIFORM_BUFFER,k+j,T.__data)):O.isMatrix3?(T.__data[0]=O.elements[0],T.__data[1]=O.elements[1],T.__data[2]=O.elements[2],T.__data[3]=0,T.__data[4]=O.elements[3],T.__data[5]=O.elements[4],T.__data[6]=O.elements[5],T.__data[7]=0,T.__data[8]=O.elements[6],T.__data[9]=O.elements[7],T.__data[10]=O.elements[8],T.__data[11]=0):(O.toArray(T.__data,j),j+=q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,k,T.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(v,x,w,b){const E=v.value,M=x+"_"+w;if(b[M]===void 0)return typeof E=="number"||typeof E=="boolean"?b[M]=E:b[M]=E.clone(),!0;{const P=b[M];if(typeof E=="number"||typeof E=="boolean"){if(P!==E)return b[M]=E,!0}else if(P.equals(E)===!1)return P.copy(E),!0}return!1}function _(v){const x=v.uniforms;let w=0;const b=16;for(let M=0,P=x.length;M<P;M++){const B=Array.isArray(x[M])?x[M]:[x[M]];for(let y=0,T=B.length;y<T;y++){const k=B[y],U=Array.isArray(k.value)?k.value:[k.value];for(let j=0,X=U.length;j<X;j++){const O=U[j],q=S(O),N=w%b,K=N%q.boundary,Z=N+K;w+=K,Z!==0&&b-Z<q.storage&&(w+=b-Z),k.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=w,w+=q.storage}}}const E=w%b;return E>0&&(w+=b-E),v.__size=w,v.__cache={},this}function S(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function p(v){const x=v.target;x.removeEventListener("dispose",p);const w=a.indexOf(x.__bindingPointIndex);a.splice(w,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function u(){for(const v in r)t.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}class Qw{constructor(e={}){const{canvas:n=By(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const m=new Uint32Array(4),_=new Int32Array(4);let S=null,p=null;const u=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$n,this.toneMapping=Wi,this.toneMappingExposure=1;const x=this;let w=!1,b=0,E=0,M=null,P=-1,B=null;const y=new xt,T=new xt;let k=null;const U=new We(0);let j=0,X=n.width,O=n.height,q=1,N=null,K=null;const Z=new xt(0,0,X,O),ae=new xt(0,0,X,O);let Re=!1;const Ge=new Xf;let $=!1,ie=!1;const W=new ht,te=new ht,fe=new H,de=new xt,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let re=!1;function Ae(){return M===null?q:1}let L=i;function Xe(C,I){return n.getContext(C,I)}try{const C={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Of}`),n.addEventListener("webglcontextlost",ee,!1),n.addEventListener("webglcontextrestored",pe,!1),n.addEventListener("webglcontextcreationerror",ve,!1),L===null){const I="webgl2";if(L=Xe(I,C),L===null)throw Xe(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Fe,ze,Ne,rt,Pe,R,A,z,J,ne,Q,we,ce,ge,Ke,oe,Se,Oe,ke,Me,$e,Be,at,D;function _e(){Fe=new i1(L),Fe.init(),Be=new Vw(L,Fe),ze=new ZE(L,Fe,e,Be),Ne=new Bw(L),ze.reverseDepthBuffer&&Ne.buffers.depth.setReversed(!0),rt=new a1(L),Pe=new ww,R=new Hw(L,Fe,Ne,Pe,ze,Be,rt),A=new JE(x),z=new n1(x),J=new hS(L),at=new qE(L,J),ne=new r1(L,J,rt,at),Q=new l1(L,ne,J,rt),ke=new o1(L,ze,R),oe=new QE(Pe),we=new Ew(x,A,z,Fe,ze,at,oe),ce=new Kw(x,Pe),ge=new Aw,Ke=new Nw(Fe),Oe=new YE(x,A,z,Ne,Q,f,l),Se=new Ow(x,Q,ze),D=new Zw(L,rt,ze,Ne),Me=new KE(L,Fe,rt),$e=new s1(L,Fe,rt),rt.programs=we.programs,x.capabilities=ze,x.extensions=Fe,x.properties=Pe,x.renderLists=ge,x.shadowMap=Se,x.state=Ne,x.info=rt}_e();const Y=new Yw(x,L);this.xr=Y,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const C=Fe.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Fe.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(C){C!==void 0&&(q=C,this.setSize(X,O,!1))},this.getSize=function(C){return C.set(X,O)},this.setSize=function(C,I,V=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=C,O=I,n.width=Math.floor(C*q),n.height=Math.floor(I*q),V===!0&&(n.style.width=C+"px",n.style.height=I+"px"),this.setViewport(0,0,C,I)},this.getDrawingBufferSize=function(C){return C.set(X*q,O*q).floor()},this.setDrawingBufferSize=function(C,I,V){X=C,O=I,q=V,n.width=Math.floor(C*V),n.height=Math.floor(I*V),this.setViewport(0,0,C,I)},this.getCurrentViewport=function(C){return C.copy(y)},this.getViewport=function(C){return C.copy(Z)},this.setViewport=function(C,I,V,G){C.isVector4?Z.set(C.x,C.y,C.z,C.w):Z.set(C,I,V,G),Ne.viewport(y.copy(Z).multiplyScalar(q).round())},this.getScissor=function(C){return C.copy(ae)},this.setScissor=function(C,I,V,G){C.isVector4?ae.set(C.x,C.y,C.z,C.w):ae.set(C,I,V,G),Ne.scissor(T.copy(ae).multiplyScalar(q).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(C){Ne.setScissorTest(Re=C)},this.setOpaqueSort=function(C){N=C},this.setTransparentSort=function(C){K=C},this.getClearColor=function(C){return C.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(C=!0,I=!0,V=!0){let G=0;if(C){let F=!1;if(M!==null){const le=M.texture.format;F=le===Gf||le===Vf||le===Hf}if(F){const le=M.texture.type,me=le===vi||le===Tr||le===ba||le===Ts||le===Bf||le===zf,Ee=Oe.getClearColor(),Te=Oe.getClearAlpha(),De=Ee.r,Ie=Ee.g,Ce=Ee.b;me?(m[0]=De,m[1]=Ie,m[2]=Ce,m[3]=Te,L.clearBufferuiv(L.COLOR,0,m)):(_[0]=De,_[1]=Ie,_[2]=Ce,_[3]=Te,L.clearBufferiv(L.COLOR,0,_))}else G|=L.COLOR_BUFFER_BIT}I&&(G|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),V&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ee,!1),n.removeEventListener("webglcontextrestored",pe,!1),n.removeEventListener("webglcontextcreationerror",ve,!1),ge.dispose(),Ke.dispose(),Pe.dispose(),A.dispose(),z.dispose(),Q.dispose(),at.dispose(),D.dispose(),we.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Zf),Y.removeEventListener("sessionend",Qf),er.stop()};function ee(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const C=rt.autoReset,I=Se.enabled,V=Se.autoUpdate,G=Se.needsUpdate,F=Se.type;_e(),rt.autoReset=C,Se.enabled=I,Se.autoUpdate=V,Se.needsUpdate=G,Se.type=F}function ve(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ye(C){const I=C.target;I.removeEventListener("dispose",Ye),Mt(I)}function Mt(C){Kt(C),Pe.remove(C)}function Kt(C){const I=Pe.get(C).programs;I!==void 0&&(I.forEach(function(V){we.releaseProgram(V)}),C.isShaderMaterial&&we.releaseShaderCache(C))}this.renderBufferDirect=function(C,I,V,G,F,le){I===null&&(I=Ue);const me=F.isMesh&&F.matrixWorld.determinant()<0,Ee=pv(C,I,V,G,F);Ne.setMaterial(G,me);let Te=V.index,De=1;if(G.wireframe===!0){if(Te=ne.getWireframeAttribute(V),Te===void 0)return;De=2}const Ie=V.drawRange,Ce=V.attributes.position;let nt=Ie.start*De,lt=(Ie.start+Ie.count)*De;le!==null&&(nt=Math.max(nt,le.start*De),lt=Math.min(lt,(le.start+le.count)*De)),Te!==null?(nt=Math.max(nt,0),lt=Math.min(lt,Te.count)):Ce!=null&&(nt=Math.max(nt,0),lt=Math.min(lt,Ce.count));const _t=lt-nt;if(_t<0||_t===1/0)return;at.setup(F,G,Ee,V,Te);let cn,Je=Me;if(Te!==null&&(cn=J.get(Te),Je=$e,Je.setIndex(cn)),F.isMesh)G.wireframe===!0?(Ne.setLineWidth(G.wireframeLinewidth*Ae()),Je.setMode(L.LINES)):Je.setMode(L.TRIANGLES);else if(F.isLine){let be=G.linewidth;be===void 0&&(be=1),Ne.setLineWidth(be*Ae()),F.isLineSegments?Je.setMode(L.LINES):F.isLineLoop?Je.setMode(L.LINE_LOOP):Je.setMode(L.LINE_STRIP)}else F.isPoints?Je.setMode(L.POINTS):F.isSprite&&Je.setMode(L.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Je.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))Je.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const be=F._multiDrawStarts,Dt=F._multiDrawCounts,et=F._multiDrawCount,Ln=Te?J.get(Te).bytesPerElement:1,Lr=Pe.get(G).currentProgram.getUniforms();for(let un=0;un<et;un++)Lr.setValue(L,"_gl_DrawID",un),Je.render(be[un]/Ln,Dt[un])}else if(F.isInstancedMesh)Je.renderInstances(nt,_t,F.count);else if(V.isInstancedBufferGeometry){const be=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Dt=Math.min(V.instanceCount,be);Je.renderInstances(nt,_t,Dt)}else Je.render(nt,_t)};function Qe(C,I,V){C.transparent===!0&&C.side===Kn&&C.forceSinglePass===!1?(C.side=an,C.needsUpdate=!0,Ga(C,I,V),C.side=Yi,C.needsUpdate=!0,Ga(C,I,V),C.side=Kn):Ga(C,I,V)}this.compile=function(C,I,V=null){V===null&&(V=C),p=Ke.get(V),p.init(I),v.push(p),V.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),C!==V&&C.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const G=new Set;return C.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const le=F.material;if(le)if(Array.isArray(le))for(let me=0;me<le.length;me++){const Ee=le[me];Qe(Ee,V,F),G.add(Ee)}else Qe(le,V,F),G.add(le)}),v.pop(),p=null,G},this.compileAsync=function(C,I,V=null){const G=this.compile(C,I,V);return new Promise(F=>{function le(){if(G.forEach(function(me){Pe.get(me).currentProgram.isReady()&&G.delete(me)}),G.size===0){F(C);return}setTimeout(le,10)}Fe.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let Zt=null;function ei(C){Zt&&Zt(C)}function Zf(){er.stop()}function Qf(){er.start()}const er=new nv;er.setAnimationLoop(ei),typeof self<"u"&&er.setContext(self),this.setAnimationLoop=function(C){Zt=C,Y.setAnimationLoop(C),C===null?er.stop():er.start()},Y.addEventListener("sessionstart",Zf),Y.addEventListener("sessionend",Qf),this.render=function(C,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(I),I=Y.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,I,M),p=Ke.get(C,v.length),p.init(I),v.push(p),te.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Ge.setFromProjectionMatrix(te),ie=this.localClippingEnabled,$=oe.init(this.clippingPlanes,ie),S=ge.get(C,u.length),S.init(),u.push(S),Y.enabled===!0&&Y.isPresenting===!0){const le=x.xr.getDepthSensingMesh();le!==null&&Zl(le,I,-1/0,x.sortObjects)}Zl(C,I,0,x.sortObjects),S.finish(),x.sortObjects===!0&&S.sort(N,K),re=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,re&&Oe.addToRenderList(S,C),this.info.render.frame++,$===!0&&oe.beginShadows();const V=p.state.shadowsArray;Se.render(V,C,I),$===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=S.opaque,F=S.transmissive;if(p.setupLights(),I.isArrayCamera){const le=I.cameras;if(F.length>0)for(let me=0,Ee=le.length;me<Ee;me++){const Te=le[me];eh(G,F,C,Te)}re&&Oe.render(C);for(let me=0,Ee=le.length;me<Ee;me++){const Te=le[me];Jf(S,C,Te,Te.viewport)}}else F.length>0&&eh(G,F,C,I),re&&Oe.render(C),Jf(S,C,I);M!==null&&(R.updateMultisampleRenderTarget(M),R.updateRenderTargetMipmap(M)),C.isScene===!0&&C.onAfterRender(x,C,I),at.resetDefaultState(),P=-1,B=null,v.pop(),v.length>0?(p=v[v.length-1],$===!0&&oe.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,u.pop(),u.length>0?S=u[u.length-1]:S=null};function Zl(C,I,V,G){if(C.visible===!1)return;if(C.layers.test(I.layers)){if(C.isGroup)V=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(I);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Ge.intersectsSprite(C)){G&&de.setFromMatrixPosition(C.matrixWorld).applyMatrix4(te);const me=Q.update(C),Ee=C.material;Ee.visible&&S.push(C,me,Ee,V,de.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Ge.intersectsObject(C))){const me=Q.update(C),Ee=C.material;if(G&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),de.copy(C.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),de.copy(me.boundingSphere.center)),de.applyMatrix4(C.matrixWorld).applyMatrix4(te)),Array.isArray(Ee)){const Te=me.groups;for(let De=0,Ie=Te.length;De<Ie;De++){const Ce=Te[De],nt=Ee[Ce.materialIndex];nt&&nt.visible&&S.push(C,me,nt,V,de.z,Ce)}}else Ee.visible&&S.push(C,me,Ee,V,de.z,null)}}const le=C.children;for(let me=0,Ee=le.length;me<Ee;me++)Zl(le[me],I,V,G)}function Jf(C,I,V,G){const F=C.opaque,le=C.transmissive,me=C.transparent;p.setupLightsView(V),$===!0&&oe.setGlobalState(x.clippingPlanes,V),G&&Ne.viewport(y.copy(G)),F.length>0&&Va(F,I,V),le.length>0&&Va(le,I,V),me.length>0&&Va(me,I,V),Ne.buffers.depth.setTest(!0),Ne.buffers.depth.setMask(!0),Ne.buffers.color.setMask(!0),Ne.setPolygonOffset(!1)}function eh(C,I,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new Ar(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?Fa:vi,minFilter:_r,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const le=p.state.transmissionRenderTarget[G.id],me=G.viewport||y;le.setSize(me.z,me.w);const Ee=x.getRenderTarget();x.setRenderTarget(le),x.getClearColor(U),j=x.getClearAlpha(),j<1&&x.setClearColor(16777215,.5),x.clear(),re&&Oe.render(V);const Te=x.toneMapping;x.toneMapping=Wi;const De=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),$===!0&&oe.setGlobalState(x.clippingPlanes,G),Va(C,V,G),R.updateMultisampleRenderTarget(le),R.updateRenderTargetMipmap(le),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let Ce=0,nt=I.length;Ce<nt;Ce++){const lt=I[Ce],_t=lt.object,cn=lt.geometry,Je=lt.material,be=lt.group;if(Je.side===Kn&&_t.layers.test(G.layers)){const Dt=Je.side;Je.side=an,Je.needsUpdate=!0,th(_t,V,G,cn,Je,be),Je.side=Dt,Je.needsUpdate=!0,Ie=!0}}Ie===!0&&(R.updateMultisampleRenderTarget(le),R.updateRenderTargetMipmap(le))}x.setRenderTarget(Ee),x.setClearColor(U,j),De!==void 0&&(G.viewport=De),x.toneMapping=Te}function Va(C,I,V){const G=I.isScene===!0?I.overrideMaterial:null;for(let F=0,le=C.length;F<le;F++){const me=C[F],Ee=me.object,Te=me.geometry,De=G===null?me.material:G,Ie=me.group;Ee.layers.test(V.layers)&&th(Ee,I,V,Te,De,Ie)}}function th(C,I,V,G,F,le){C.onBeforeRender(x,I,V,G,F,le),C.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),F.onBeforeRender(x,I,V,G,C,le),F.transparent===!0&&F.side===Kn&&F.forceSinglePass===!1?(F.side=an,F.needsUpdate=!0,x.renderBufferDirect(V,I,G,F,C,le),F.side=Yi,F.needsUpdate=!0,x.renderBufferDirect(V,I,G,F,C,le),F.side=Kn):x.renderBufferDirect(V,I,G,F,C,le),C.onAfterRender(x,I,V,G,F,le)}function Ga(C,I,V){I.isScene!==!0&&(I=Ue);const G=Pe.get(C),F=p.state.lights,le=p.state.shadowsArray,me=F.state.version,Ee=we.getParameters(C,F.state,le,I,V),Te=we.getProgramCacheKey(Ee);let De=G.programs;G.environment=C.isMeshStandardMaterial?I.environment:null,G.fog=I.fog,G.envMap=(C.isMeshStandardMaterial?z:A).get(C.envMap||G.environment),G.envMapRotation=G.environment!==null&&C.envMap===null?I.environmentRotation:C.envMapRotation,De===void 0&&(C.addEventListener("dispose",Ye),De=new Map,G.programs=De);let Ie=De.get(Te);if(Ie!==void 0){if(G.currentProgram===Ie&&G.lightsStateVersion===me)return ih(C,Ee),Ie}else Ee.uniforms=we.getUniforms(C),C.onBeforeCompile(Ee,x),Ie=we.acquireProgram(Ee,Te),De.set(Te,Ie),G.uniforms=Ee.uniforms;const Ce=G.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ce.clippingPlanes=oe.uniform),ih(C,Ee),G.needsLights=gv(C),G.lightsStateVersion=me,G.needsLights&&(Ce.ambientLightColor.value=F.state.ambient,Ce.lightProbe.value=F.state.probe,Ce.directionalLights.value=F.state.directional,Ce.directionalLightShadows.value=F.state.directionalShadow,Ce.spotLights.value=F.state.spot,Ce.spotLightShadows.value=F.state.spotShadow,Ce.rectAreaLights.value=F.state.rectArea,Ce.ltc_1.value=F.state.rectAreaLTC1,Ce.ltc_2.value=F.state.rectAreaLTC2,Ce.pointLights.value=F.state.point,Ce.pointLightShadows.value=F.state.pointShadow,Ce.hemisphereLights.value=F.state.hemi,Ce.directionalShadowMap.value=F.state.directionalShadowMap,Ce.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ce.spotShadowMap.value=F.state.spotShadowMap,Ce.spotLightMatrix.value=F.state.spotLightMatrix,Ce.spotLightMap.value=F.state.spotLightMap,Ce.pointShadowMap.value=F.state.pointShadowMap,Ce.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=Ie,G.uniformsList=null,Ie}function nh(C){if(C.uniformsList===null){const I=C.currentProgram.getUniforms();C.uniformsList=Jo.seqWithValue(I.seq,C.uniforms)}return C.uniformsList}function ih(C,I){const V=Pe.get(C);V.outputColorSpace=I.outputColorSpace,V.batching=I.batching,V.batchingColor=I.batchingColor,V.instancing=I.instancing,V.instancingColor=I.instancingColor,V.instancingMorph=I.instancingMorph,V.skinning=I.skinning,V.morphTargets=I.morphTargets,V.morphNormals=I.morphNormals,V.morphColors=I.morphColors,V.morphTargetsCount=I.morphTargetsCount,V.numClippingPlanes=I.numClippingPlanes,V.numIntersection=I.numClipIntersection,V.vertexAlphas=I.vertexAlphas,V.vertexTangents=I.vertexTangents,V.toneMapping=I.toneMapping}function pv(C,I,V,G,F){I.isScene!==!0&&(I=Ue),R.resetTextureUnits();const le=I.fog,me=G.isMeshStandardMaterial?I.environment:null,Ee=M===null?x.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Ji,Te=(G.isMeshStandardMaterial?z:A).get(G.envMap||me),De=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ie=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ce=!!V.morphAttributes.position,nt=!!V.morphAttributes.normal,lt=!!V.morphAttributes.color;let _t=Wi;G.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(_t=x.toneMapping);const cn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Je=cn!==void 0?cn.length:0,be=Pe.get(G),Dt=p.state.lights;if($===!0&&(ie===!0||C!==B)){const yn=C===B&&G.id===P;oe.setState(G,C,yn)}let et=!1;G.version===be.__version?(be.needsLights&&be.lightsStateVersion!==Dt.state.version||be.outputColorSpace!==Ee||F.isBatchedMesh&&be.batching===!1||!F.isBatchedMesh&&be.batching===!0||F.isBatchedMesh&&be.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&be.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&be.instancing===!1||!F.isInstancedMesh&&be.instancing===!0||F.isSkinnedMesh&&be.skinning===!1||!F.isSkinnedMesh&&be.skinning===!0||F.isInstancedMesh&&be.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&be.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&be.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&be.instancingMorph===!1&&F.morphTexture!==null||be.envMap!==Te||G.fog===!0&&be.fog!==le||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==oe.numPlanes||be.numIntersection!==oe.numIntersection)||be.vertexAlphas!==De||be.vertexTangents!==Ie||be.morphTargets!==Ce||be.morphNormals!==nt||be.morphColors!==lt||be.toneMapping!==_t||be.morphTargetsCount!==Je)&&(et=!0):(et=!0,be.__version=G.version);let Ln=be.currentProgram;et===!0&&(Ln=Ga(G,I,F));let Lr=!1,un=!1,Ql=!1;const yt=Ln.getUniforms(),yi=be.uniforms;if(Ne.useProgram(Ln.program)&&(Lr=!0,un=!0,Ql=!0),G.id!==P&&(P=G.id,un=!0),Lr||B!==C){ze.reverseDepthBuffer?(W.copy(C.projectionMatrix),Hy(W),Vy(W),yt.setValue(L,"projectionMatrix",W)):yt.setValue(L,"projectionMatrix",C.projectionMatrix),yt.setValue(L,"viewMatrix",C.matrixWorldInverse);const yn=yt.map.cameraPosition;yn!==void 0&&yn.setValue(L,fe.setFromMatrixPosition(C.matrixWorld)),ze.logarithmicDepthBuffer&&yt.setValue(L,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&yt.setValue(L,"isOrthographic",C.isOrthographicCamera===!0),B!==C&&(B=C,un=!0,Ql=!0)}if(F.isSkinnedMesh){yt.setOptional(L,F,"bindMatrix"),yt.setOptional(L,F,"bindMatrixInverse");const yn=F.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),yt.setValue(L,"boneTexture",yn.boneTexture,R))}F.isBatchedMesh&&(yt.setOptional(L,F,"batchingTexture"),yt.setValue(L,"batchingTexture",F._matricesTexture,R),yt.setOptional(L,F,"batchingIdTexture"),yt.setValue(L,"batchingIdTexture",F._indirectTexture,R),yt.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&yt.setValue(L,"batchingColorTexture",F._colorsTexture,R));const Jl=V.morphAttributes;if((Jl.position!==void 0||Jl.normal!==void 0||Jl.color!==void 0)&&ke.update(F,V,Ln),(un||be.receiveShadow!==F.receiveShadow)&&(be.receiveShadow=F.receiveShadow,yt.setValue(L,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(yi.envMap.value=Te,yi.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&I.environment!==null&&(yi.envMapIntensity.value=I.environmentIntensity),un&&(yt.setValue(L,"toneMappingExposure",x.toneMappingExposure),be.needsLights&&mv(yi,Ql),le&&G.fog===!0&&ce.refreshFogUniforms(yi,le),ce.refreshMaterialUniforms(yi,G,q,O,p.state.transmissionRenderTarget[C.id]),Jo.upload(L,nh(be),yi,R)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Jo.upload(L,nh(be),yi,R),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&yt.setValue(L,"center",F.center),yt.setValue(L,"modelViewMatrix",F.modelViewMatrix),yt.setValue(L,"normalMatrix",F.normalMatrix),yt.setValue(L,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const yn=G.uniformsGroups;for(let ec=0,_v=yn.length;ec<_v;ec++){const rh=yn[ec];D.update(rh,Ln),D.bind(rh,Ln)}}return Ln}function mv(C,I){C.ambientLightColor.needsUpdate=I,C.lightProbe.needsUpdate=I,C.directionalLights.needsUpdate=I,C.directionalLightShadows.needsUpdate=I,C.pointLights.needsUpdate=I,C.pointLightShadows.needsUpdate=I,C.spotLights.needsUpdate=I,C.spotLightShadows.needsUpdate=I,C.rectAreaLights.needsUpdate=I,C.hemisphereLights.needsUpdate=I}function gv(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(C,I,V){Pe.get(C.texture).__webglTexture=I,Pe.get(C.depthTexture).__webglTexture=V;const G=Pe.get(C);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||Fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,I){const V=Pe.get(C);V.__webglFramebuffer=I,V.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(C,I=0,V=0){M=C,b=I,E=V;let G=!0,F=null,le=!1,me=!1;if(C){const Te=Pe.get(C);if(Te.__useDefaultFramebuffer!==void 0)Ne.bindFramebuffer(L.FRAMEBUFFER,null),G=!1;else if(Te.__webglFramebuffer===void 0)R.setupRenderTarget(C);else if(Te.__hasExternalTextures)R.rebindTextures(C,Pe.get(C.texture).__webglTexture,Pe.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ce=C.depthTexture;if(Te.__boundDepthTexture!==Ce){if(Ce!==null&&Pe.has(Ce)&&(C.width!==Ce.image.width||C.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(C)}}const De=C.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(me=!0);const Ie=Pe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ie[I])?F=Ie[I][V]:F=Ie[I],le=!0):C.samples>0&&R.useMultisampledRTT(C)===!1?F=Pe.get(C).__webglMultisampledFramebuffer:Array.isArray(Ie)?F=Ie[V]:F=Ie,y.copy(C.viewport),T.copy(C.scissor),k=C.scissorTest}else y.copy(Z).multiplyScalar(q).floor(),T.copy(ae).multiplyScalar(q).floor(),k=Re;if(Ne.bindFramebuffer(L.FRAMEBUFFER,F)&&G&&Ne.drawBuffers(C,F),Ne.viewport(y),Ne.scissor(T),Ne.setScissorTest(k),le){const Te=Pe.get(C.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+I,Te.__webglTexture,V)}else if(me){const Te=Pe.get(C.texture),De=I||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Te.__webglTexture,V||0,De)}P=-1},this.readRenderTargetPixels=function(C,I,V,G,F,le,me){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Pe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&me!==void 0&&(Ee=Ee[me]),Ee){Ne.bindFramebuffer(L.FRAMEBUFFER,Ee);try{const Te=C.texture,De=Te.format,Ie=Te.type;if(!ze.textureFormatReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=C.width-G&&V>=0&&V<=C.height-F&&L.readPixels(I,V,G,F,Be.convert(De),Be.convert(Ie),le)}finally{const Te=M!==null?Pe.get(M).__webglFramebuffer:null;Ne.bindFramebuffer(L.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(C,I,V,G,F,le,me){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=Pe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&me!==void 0&&(Ee=Ee[me]),Ee){const Te=C.texture,De=Te.format,Ie=Te.type;if(!ze.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=C.width-G&&V>=0&&V<=C.height-F){Ne.bindFramebuffer(L.FRAMEBUFFER,Ee);const Ce=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ce),L.bufferData(L.PIXEL_PACK_BUFFER,le.byteLength,L.STREAM_READ),L.readPixels(I,V,G,F,Be.convert(De),Be.convert(Ie),0);const nt=M!==null?Pe.get(M).__webglFramebuffer:null;Ne.bindFramebuffer(L.FRAMEBUFFER,nt);const lt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await zy(L,lt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ce),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,le),L.deleteBuffer(Ce),L.deleteSync(lt),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,I=null,V=0){C.isTexture!==!0&&(Qo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,C=arguments[1]);const G=Math.pow(2,-V),F=Math.floor(C.image.width*G),le=Math.floor(C.image.height*G),me=I!==null?I.x:0,Ee=I!==null?I.y:0;R.setTexture2D(C,0),L.copyTexSubImage2D(L.TEXTURE_2D,V,0,0,me,Ee,F,le),Ne.unbindTexture()},this.copyTextureToTexture=function(C,I,V=null,G=null,F=0){C.isTexture!==!0&&(Qo("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,C=arguments[1],I=arguments[2],F=arguments[3]||0,V=null);let le,me,Ee,Te,De,Ie;V!==null?(le=V.max.x-V.min.x,me=V.max.y-V.min.y,Ee=V.min.x,Te=V.min.y):(le=C.image.width,me=C.image.height,Ee=0,Te=0),G!==null?(De=G.x,Ie=G.y):(De=0,Ie=0);const Ce=Be.convert(I.format),nt=Be.convert(I.type);R.setTexture2D(I,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);const lt=L.getParameter(L.UNPACK_ROW_LENGTH),_t=L.getParameter(L.UNPACK_IMAGE_HEIGHT),cn=L.getParameter(L.UNPACK_SKIP_PIXELS),Je=L.getParameter(L.UNPACK_SKIP_ROWS),be=L.getParameter(L.UNPACK_SKIP_IMAGES),Dt=C.isCompressedTexture?C.mipmaps[F]:C.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Dt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Dt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ee),L.pixelStorei(L.UNPACK_SKIP_ROWS,Te),C.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,F,De,Ie,le,me,Ce,nt,Dt.data):C.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,F,De,Ie,Dt.width,Dt.height,Ce,Dt.data):L.texSubImage2D(L.TEXTURE_2D,F,De,Ie,le,me,Ce,nt,Dt),L.pixelStorei(L.UNPACK_ROW_LENGTH,lt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,_t),L.pixelStorei(L.UNPACK_SKIP_PIXELS,cn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Je),L.pixelStorei(L.UNPACK_SKIP_IMAGES,be),F===0&&I.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Ne.unbindTexture()},this.copyTextureToTexture3D=function(C,I,V=null,G=null,F=0){C.isTexture!==!0&&(Qo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,C=arguments[2],I=arguments[3],F=arguments[4]||0);let le,me,Ee,Te,De,Ie,Ce,nt,lt;const _t=C.isCompressedTexture?C.mipmaps[F]:C.image;V!==null?(le=V.max.x-V.min.x,me=V.max.y-V.min.y,Ee=V.max.z-V.min.z,Te=V.min.x,De=V.min.y,Ie=V.min.z):(le=_t.width,me=_t.height,Ee=_t.depth,Te=0,De=0,Ie=0),G!==null?(Ce=G.x,nt=G.y,lt=G.z):(Ce=0,nt=0,lt=0);const cn=Be.convert(I.format),Je=Be.convert(I.type);let be;if(I.isData3DTexture)R.setTexture3D(I,0),be=L.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)R.setTexture2DArray(I,0),be=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);const Dt=L.getParameter(L.UNPACK_ROW_LENGTH),et=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ln=L.getParameter(L.UNPACK_SKIP_PIXELS),Lr=L.getParameter(L.UNPACK_SKIP_ROWS),un=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,_t.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,_t.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Te),L.pixelStorei(L.UNPACK_SKIP_ROWS,De),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ie),C.isDataTexture||C.isData3DTexture?L.texSubImage3D(be,F,Ce,nt,lt,le,me,Ee,cn,Je,_t.data):I.isCompressedArrayTexture?L.compressedTexSubImage3D(be,F,Ce,nt,lt,le,me,Ee,cn,_t.data):L.texSubImage3D(be,F,Ce,nt,lt,le,me,Ee,cn,Je,_t),L.pixelStorei(L.UNPACK_ROW_LENGTH,Dt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,et),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ln),L.pixelStorei(L.UNPACK_SKIP_ROWS,Lr),L.pixelStorei(L.UNPACK_SKIP_IMAGES,un),F===0&&I.generateMipmaps&&L.generateMipmap(be),Ne.unbindTexture()},this.initRenderTarget=function(C){Pe.get(C).__webglFramebuffer===void 0&&R.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?R.setTextureCube(C,0):C.isData3DTexture?R.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?R.setTexture2DArray(C,0):R.setTexture2D(C,0),Ne.unbindTexture()},this.resetState=function(){b=0,E=0,M=null,Ne.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===jf?"display-p3":"srgb",n.unpackColorSpace=tt.workingColorSpace===ql?"display-p3":"srgb"}}class Yf{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new We(e),this.near=n,this.far=i}clone(){return new Yf(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Jw extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class cv extends Pr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const bl=new H,Pl=new H,cm=new ht,$s=new Wf,Po=new za,ru=new H,um=new H;class eT extends Ct{constructor(e=new _n,n=new cv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)bl.fromBufferAttribute(n,r-1),Pl.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=bl.distanceTo(Pl);e.setAttribute("lineDistance",new ln(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Po.copy(i.boundingSphere),Po.applyMatrix4(r),Po.radius+=s,e.ray.intersectsSphere(Po)===!1)return;cm.copy(r).invert(),$s.copy(e.ray).applyMatrix4(cm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=i.index,f=i.attributes.position;if(d!==null){const m=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let S=m,p=_-1;S<p;S+=c){const u=d.getX(S),v=d.getX(S+1),x=Lo(this,e,$s,l,u,v);x&&n.push(x)}if(this.isLineLoop){const S=d.getX(_-1),p=d.getX(m),u=Lo(this,e,$s,l,S,p);u&&n.push(u)}}else{const m=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let S=m,p=_-1;S<p;S+=c){const u=Lo(this,e,$s,l,S,S+1);u&&n.push(u)}if(this.isLineLoop){const S=Lo(this,e,$s,l,_-1,m);S&&n.push(S)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Lo(t,e,n,i,r,s){const a=t.geometry.attributes.position;if(bl.fromBufferAttribute(a,r),Pl.fromBufferAttribute(a,s),n.distanceSqToSegment(bl,Pl,ru,um)>i)return;ru.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(ru);if(!(l<e.near||l>e.far))return{distance:l,point:um.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}class uv extends Pr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const dm=new ht,zd=new Wf,No=new za,Do=new H;class tT extends Ct{constructor(e=new _n,n=new uv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),No.copy(i.boundingSphere),No.applyMatrix4(r),No.radius+=s,e.ray.intersectsSphere(No)===!1)return;dm.copy(r).invert(),zd.copy(e.ray).applyMatrix4(dm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let _=f,S=m;_<S;_++){const p=c.getX(_);Do.fromBufferAttribute(h,p),fm(Do,p,l,r,e,n,this)}}else{const f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let _=f,S=m;_<S;_++)Do.fromBufferAttribute(h,_),fm(Do,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function fm(t,e,n,i,r,s,a){const o=zd.distanceSqToPoint(t);if(o<n){const l=new H;zd.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Pa extends _n{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],h=[],f=[],m=[];let _=0;const S=[],p=i/2;let u=0;v(),a===!1&&(e>0&&x(!0),n>0&&x(!1)),this.setIndex(d),this.setAttribute("position",new ln(h,3)),this.setAttribute("normal",new ln(f,3)),this.setAttribute("uv",new ln(m,2));function v(){const w=new H,b=new H;let E=0;const M=(n-e)/i;for(let P=0;P<=s;P++){const B=[],y=P/s,T=y*(n-e)+e;for(let k=0;k<=r;k++){const U=k/r,j=U*l+o,X=Math.sin(j),O=Math.cos(j);b.x=T*X,b.y=-y*i+p,b.z=T*O,h.push(b.x,b.y,b.z),w.set(X,M,O).normalize(),f.push(w.x,w.y,w.z),m.push(U,1-y),B.push(_++)}S.push(B)}for(let P=0;P<r;P++)for(let B=0;B<s;B++){const y=S[B][P],T=S[B+1][P],k=S[B+1][P+1],U=S[B][P+1];e>0&&(d.push(y,T,U),E+=3),n>0&&(d.push(T,k,U),E+=3)}c.addGroup(u,E,0),u+=E}function x(w){const b=_,E=new Ze,M=new H;let P=0;const B=w===!0?e:n,y=w===!0?1:-1;for(let k=1;k<=r;k++)h.push(0,p*y,0),f.push(0,y,0),m.push(.5,.5),_++;const T=_;for(let k=0;k<=r;k++){const j=k/r*l+o,X=Math.cos(j),O=Math.sin(j);M.x=B*O,M.y=p*y,M.z=B*X,h.push(M.x,M.y,M.z),f.push(0,y,0),E.x=X*.5+.5,E.y=O*.5*y+.5,m.push(E.x,E.y),_++}for(let k=0;k<r;k++){const U=b+k,j=T+k;w===!0?d.push(j,j+1,U):d.push(j+1,j,U),P+=3}c.addGroup(u,P,w===!0?1:2),u+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pa(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ll extends Pa{constructor(e=1,n=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,n,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Ll(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class qf extends _n{constructor(e=.5,n=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],c=[],d=[];let h=e;const f=(n-e)/r,m=new H,_=new Ze;for(let S=0;S<=r;S++){for(let p=0;p<=i;p++){const u=s+p/i*a;m.x=h*Math.cos(u),m.y=h*Math.sin(u),l.push(m.x,m.y,m.z),c.push(0,0,1),_.x=(m.x/n+1)/2,_.y=(m.y/n+1)/2,d.push(_.x,_.y)}h+=f}for(let S=0;S<r;S++){const p=S*(i+1);for(let u=0;u<i;u++){const v=u+p,x=v,w=v+i+1,b=v+i+2,E=v+1;o.push(x,w,E),o.push(w,b,E)}}this.setIndex(o),this.setAttribute("position",new ln(l,3)),this.setAttribute("normal",new ln(c,3)),this.setAttribute("uv",new ln(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qf(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ys extends Pr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=j_,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class dv extends Ct{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class nT extends dv{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const su=new ht,hm=new H,pm=new H;class iT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xf,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;hm.setFromMatrixPosition(e.matrixWorld),n.position.copy(hm),pm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(pm),n.updateMatrixWorld(),su.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(su),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(su)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class rT extends iT{constructor(){super(new iv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sT extends dv{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new rT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Of}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Of);function aT({latest:t,world:e,path:n}){const i=he.useRef(null),r=he.useRef(null),s=he.useRef(!0);he.useEffect(()=>{var Ue;const o=i.current;if(!o)return;const l=new Jw;l.background=new We(856343),l.fog=new Yf(856343,120,400);const c=new wn(55,o.clientWidth/Math.max(o.clientHeight,1),.5,2e3),d=new Qw({antialias:!0});d.setPixelRatio(Math.min(window.devicePixelRatio,2)),d.setSize(o.clientWidth,o.clientHeight),o.appendChild(d.domElement),l.add(new nT(12571903,2102798,1.1));const h=new sT(16777215,1.5);h.position.set(-90,140,110),l.add(h);const f=e.terrain,[m,_]=f.shape,S=(_-1)*f.resolution,p=(m-1)*f.resolution,u=new Ha(S,p,_-1,m-1),v=u.attributes.position;for(let re=0;re<m;re++)for(let Ae=0;Ae<_;Ae++){const L=((Ue=f.height[m-1-re])==null?void 0:Ue[Ae])??0;v.setZ(re*_+Ae,L)}u.computeVertexNormals();const x=new Ut(u,new Ys({color:7044954,roughness:.95,metalness:0,flatShading:!1}));x.rotation.x=-Math.PI/2,x.position.set(f.origin[0]+S/2,0,-(f.origin[1]+p/2)),l.add(x);const w=new Ut(u,new ua({color:9414778,wireframe:!0,transparent:!0,opacity:.12}));w.rotation.copy(x.rotation),w.position.copy(x.position),l.add(w);const b=(re,Ae)=>{var Q,we,ce,ge;const L=(re-f.origin[0])/f.resolution,Xe=(Ae-f.origin[1])/f.resolution,Fe=Math.max(0,Math.min(_-1,Math.floor(L))),ze=Math.max(0,Math.min(m-1,Math.floor(Xe))),Ne=Math.min(_-1,Fe+1),rt=Math.min(m-1,ze+1),Pe=Math.max(0,Math.min(1,L-Fe)),R=Math.max(0,Math.min(1,Xe-ze)),A=((Q=f.height[ze])==null?void 0:Q[Fe])??0,z=((we=f.height[ze])==null?void 0:we[Ne])??0,J=((ce=f.height[rt])==null?void 0:ce[Fe])??0,ne=((ge=f.height[rt])==null?void 0:ge[Ne])??0;return A*(1-Pe)*(1-R)+z*Pe*(1-R)+J*(1-Pe)*R+ne*Pe*R};for(const re of e.obstacles){const Ae=new Ys({color:re.known_a_priori?9200185:12734511,roughness:.8}),L=re.kind==="cylinder"?new Pa(re.radius,re.radius,re.height,18):new Cr(re.half_x*2,re.height,re.half_y*2),Xe=new Ut(L,Ae);Xe.position.set(re.x,b(re.x,re.y)+re.height/2-.15,-re.y),re.kind==="box"&&(Xe.rotation.y=-re.yaw),l.add(Xe)}const E=(re,Ae,L)=>{const Xe=new Ut(new Ll(1.1,3.2,14),new Ys({color:L,emissive:L,emissiveIntensity:.4}));Xe.position.set(re,b(re,Ae)+3.4,-Ae),Xe.rotation.x=Math.PI,l.add(Xe)};E(e.mission.start[0],e.mission.start[1],4176208),E(e.mission.goal[0],e.mission.goal[1],4890367);const M=(re,Ae)=>{const L=new ea,Xe=new Ut(new Cr(.9,.38,.76),new Ys({color:re,wireframe:Ae,transparent:Ae,opacity:Ae?.85:1,emissive:re,emissiveIntensity:Ae?.5:.18}));Xe.position.y=.3,L.add(Xe);const Fe=new Ut(new Ll(.17,.5,10),new Ys({color:re,emissive:re,emissiveIntensity:.5}));Fe.rotation.z=-Math.PI/2,Fe.position.set(.68,.3,0),L.add(Fe);const ze=new Ut(new Pa(.07,.07,3,8),new ua({color:re,transparent:!0,opacity:.55}));return ze.position.y=1.8,L.add(ze),L},P=M(4890367,!1),B=M(15761468,!0);l.add(P,B);const y=new Ut(new qf(.98,1,48),new ua({color:4890367,transparent:!0,opacity:.5,side:Kn}));y.rotation.x=-Math.PI/2,l.add(y);const T=(re,Ae,L)=>{const Xe=new _n;return Xe.setAttribute("position",new Rn(new Float32Array(L*3),3)),Xe.setDrawRange(0,0),new eT(Xe,new cv({color:re,linewidth:Ae}))},k=T(4890367,2,4096),U=T(15761468,2,12e3);l.add(k,U);const j=new _n;j.setAttribute("position",new Rn(new Float32Array(360*3),3)),j.setDrawRange(0,0);const X=new tT(j,new uv({color:16767078,size:.42}));l.add(X);const O={az:-.7,el:.52,dist:42};let q=!1,N=0,K=0;const Z=re=>{q=!0,N=re.clientX,K=re.clientY},ae=()=>{q=!1},Re=re=>{q&&(O.az-=(re.clientX-N)*.006,O.el=Math.max(.08,Math.min(1.5,O.el+(re.clientY-K)*.005)),N=re.clientX,K=re.clientY)},Ge=re=>{re.preventDefault(),O.dist=Math.max(8,Math.min(320,O.dist*(1+re.deltaY*.0012)))},$=d.domElement;$.addEventListener("pointerdown",Z),window.addEventListener("pointerup",ae),window.addEventListener("pointermove",Re),$.addEventListener("wheel",Ge,{passive:!1});const ie=()=>{o.clientWidth&&(c.aspect=o.clientWidth/Math.max(o.clientHeight,1),c.updateProjectionMatrix(),d.setSize(o.clientWidth,o.clientHeight))},W=new ResizeObserver(ie);W.observe(o);let te=0;const fe=new H,de=()=>{te=requestAnimationFrame(de);const re=s.current?P.position:x.position;fe.lerp(re,s.current?.12:.05),c.position.set(fe.x+O.dist*Math.cos(O.el)*Math.cos(O.az),fe.y+O.dist*Math.sin(O.el),fe.z+O.dist*Math.cos(O.el)*Math.sin(O.az)),c.lookAt(fe),d.render(l,c)};return de(),r.current={renderer:d,scene:l,camera:c,estBody:P,trueBody:B,sigmaRing:y,planLine:k,trailLine:U,scanPoints:X,trail:[],sampleMesh:b,dispose:()=>{cancelAnimationFrame(te),W.disconnect(),$.removeEventListener("pointerdown",Z),window.removeEventListener("pointerup",ae),window.removeEventListener("pointermove",Re),$.removeEventListener("wheel",Ge),d.dispose(),l.traverse(re=>{var Xe;const Ae=re;(Xe=Ae.geometry)==null||Xe.dispose();const L=Ae.material;Array.isArray(L)?L.forEach(Fe=>Fe.dispose()):L==null||L.dispose()}),$.parentNode===o&&o.removeChild($)}},()=>{var re;(re=r.current)==null||re.dispose(),r.current=null}},[e]),he.useEffect(()=>{const o=r.current;if(!o)return;const l=t.estimate,c=Math.PI/180,d=o.sampleMesh(l.position[0],l.position[1]);o.estBody.position.set(l.position[0],d+.1,-l.position[1]),o.estBody.rotation.set(0,-l.yaw_deg*c,0);const h=Math.max(l.pos_sigma_h,.05);o.sigmaRing.position.copy(o.estBody.position),o.sigmaRing.position.y=d+.06,o.sigmaRing.scale.set(h,h,1);const f=t.ground_truth;if(f){o.trueBody.visible=!0;const _=o.sampleMesh(f.position[0],f.position[1]);o.trueBody.position.set(f.position[0],_+.1,-f.position[1]),o.trueBody.rotation.set(0,-f.yaw_deg*c,0);const S=o.trail,p=S.length;if(p===0||Math.hypot(f.position[0]-S[p-3],f.position[1]+S[p-1])>.45){S.push(f.position[0],_+.25,-f.position[1]),S.length>12e3*3&&S.splice(0,3);const u=o.trailLine.geometry.attributes.position;u.array.set(S),u.needsUpdate=!0,o.trailLine.geometry.setDrawRange(0,S.length/3),o.trailLine.geometry.computeBoundingSphere()}}else o.trueBody.visible=!1;const m=t.lidar;if(m&&m.ranges.length){const _=o.scanPoints.geometry.attributes.position,S=_.array;let p=0;const u=l.yaw_deg*c;for(let v=0;v<m.ranges.length&&p<360;v++){const x=m.ranges[v];if(x===null||!Number.isFinite(x))continue;const w=u+m.angles[v];S[p*3]=l.position[0]+x*Math.cos(w),S[p*3+1]=d+.55,S[p*3+2]=-(l.position[1]+x*Math.sin(w)),p++}_.needsUpdate=!0,o.scanPoints.geometry.setDrawRange(0,p),o.scanPoints.geometry.computeBoundingSphere()}},[t]),he.useEffect(()=>{const o=r.current;if(!o||n.length===0)return;const l=o.planLine.geometry.attributes.position,c=l.array,d=Math.min(n.length,c.length/3);for(let h=0;h<d;h++){const[f,m]=n[h];c[h*3]=f,c[h*3+1]=o.sampleMesh(f,m)+.35,c[h*3+2]=-m}l.needsUpdate=!0,o.planLine.geometry.setDrawRange(0,d),o.planLine.geometry.computeBoundingSphere()},[n,e]);const a=t.ground_truth;return g.jsxs("div",{className:"grid",children:[g.jsxs(st,{title:"3D simulation",className:"span2",right:g.jsxs("label",{className:"toggle",children:[g.jsx("input",{type:"checkbox",defaultChecked:!0,onChange:o=>s.current=o.target.checked}),"follow vehicle"]}),children:[g.jsx("div",{ref:i,className:"three-mount"}),g.jsxs("div",{className:"legend3d",children:[g.jsxs("span",{children:[g.jsx("i",{style:{background:"#4a9eff"}}),"estimated pose + 1σ ring"]}),g.jsxs("span",{children:[g.jsx("i",{style:{background:"#f0803c"}}),"ground truth (display only)"]}),g.jsxs("span",{children:[g.jsx("i",{style:{background:"#ffd866"}}),"LiDAR returns"]}),g.jsxs("span",{children:[g.jsx("i",{style:{background:"#8c6239"}}),"known obstacle"]}),g.jsxs("span",{children:[g.jsx("i",{style:{background:"#c2502f"}}),"discovered obstacle"]})]})]}),g.jsxs(st,{title:"Pose",children:[g.jsxs("div",{className:"stat-row",children:[g.jsx(ye,{label:"est x",value:Le(t.estimate.position[0]),unit:"m"}),g.jsx(ye,{label:"est y",value:Le(t.estimate.position[1]),unit:"m"}),g.jsx(ye,{label:"est yaw",value:Le(t.estimate.yaw_deg,1),unit:"°"})]}),g.jsxs("div",{className:"stat-row",children:[g.jsx(ye,{label:"roll",value:Le(t.estimate.roll_deg,1),unit:"°"}),g.jsx(ye,{label:"pitch",value:Le(t.estimate.pitch_deg,1),unit:"°"}),g.jsx(ye,{label:"error",value:a?Le(a.position_error_m):"n/a",unit:"m"})]})]}),g.jsx(st,{title:"Control",children:t.control?g.jsxs(g.Fragment,{children:[g.jsxs("div",{className:"stat-row",children:[g.jsx(ye,{label:"speed cmd",value:Le(t.control.speed_cmd),unit:"m/s"}),g.jsx(ye,{label:"yaw rate",value:Le(t.control.yaw_rate_cmd),unit:"rad/s"}),g.jsx(ye,{label:"cross-track",value:Le(t.control.cross_track_m),unit:"m"})]}),g.jsxs("div",{className:"stat-row",children:[g.jsx(ye,{label:"limited by",value:t.control.limiting_constraint}),g.jsx(ye,{label:"obstacle",value:t.control.obstacle_distance_m===null?"clear":Le(t.control.obstacle_distance_m)+" m",tone:t.control.obstacle_distance_m!==null&&t.control.obstacle_distance_m<1.5?"warn":"ok"}),g.jsx(ye,{label:"e-stop",value:t.control.emergency_stop?"yes":"no",tone:t.control.emergency_stop?"bad":"ok"})]})]}):g.jsx("p",{className:"muted",children:"no control output yet"})})]})}const oT={OK:"ok",DEGRADED:"warn",STALE:"bad",TIMEOUT:"bad",INVALID:"bad",FAILED:"bad",UNKNOWN:""},lT=[[1,"timeout"],[2,"rate low"],[4,"stale payload"],[8,"out of range"],[16,"noisy"],[32,"inconsistent"]];function cT(t){const e=lT.filter(([n])=>(t&n)!==0).map(([,n])=>n);return e.length?e.join(", "):"—"}function uT({latest:t,history:e}){const n=t.estimate,i=Object.entries(t.sensors),r=i.filter(([,s])=>s.status!=="OK");return g.jsxs("div",{className:"grid",children:[g.jsxs(st,{title:"Sensor health",className:"span2",right:g.jsx("span",{className:r.length?"badge warn":"badge ok",children:r.length?`${r.length} not OK`:"all nominal"}),children:[g.jsxs("table",{className:"table",children:[g.jsx("thead",{children:g.jsxs("tr",{children:[g.jsx("th",{children:"sensor"}),g.jsx("th",{children:"status"}),g.jsx("th",{children:"rate"}),g.jsx("th",{children:"expected"}),g.jsx("th",{children:"availability"}),g.jsx("th",{children:"last valid"}),g.jsx("th",{children:"flags"}),g.jsx("th",{children:"detail"})]})}),g.jsx("tbody",{children:i.map(([s,a])=>g.jsxs("tr",{className:a.status==="OK"?"":"row-bad",children:[g.jsx("td",{children:s}),g.jsx("td",{children:g.jsx("span",{className:`badge ${oT[a.status]??""}`,children:a.status})}),g.jsxs("td",{children:[Le(a.rate_hz,1)," Hz"]}),g.jsxs("td",{children:[Le(a.expected_hz,0)," Hz"]}),g.jsxs("td",{children:[(a.availability*100).toFixed(2),"%"]}),g.jsxs("td",{children:[Le(a.last_valid,2)," s"]}),g.jsx("td",{children:cT(a.flags)}),g.jsx("td",{className:"muted",children:a.detail})]},s))})]}),g.jsxs("p",{className:"caveat",children:["A stream that keeps arriving with a fresh timestamp but an unchanged payload is reported as ",g.jsx("strong",{children:"STALE"}),", not OK. That case is the reason the monitor fingerprints the payload instead of watching only the timestamp and the rate."]})]}),g.jsxs(st,{title:"Estimator residuals",children:[g.jsx(Xo,{rows:e,height:140,shadeFlagged:!0,yMax:40,series:[{key:"nis",label:"GNSS NIS",color:"#4a9eff"},{key:"cusum",label:"CUSUM",color:"#f0803c",dashed:!0}]}),g.jsxs("div",{className:"stat-row",children:[g.jsx(ye,{label:"updates",value:n.updates}),g.jsx(ye,{label:"rejections",value:n.rejections,tone:n.rejections>n.updates*.3?"warn":"ok",hint:"Measurements refused by the chi-square gate."}),g.jsx(ye,{label:"NIS",value:Le(t.gnss_integrity.nis)})]})]}),g.jsxs(st,{title:"Estimated sensor errors",children:[g.jsx("p",{className:"muted small",children:"Biases the filter has learned. These are states, not calibration constants: they drift, and watching them converge is how you tell a healthy filter from one that is absorbing a modelling error."}),g.jsxs("div",{className:"stat-row",children:[g.jsx(ye,{label:"gyro bias x",value:(n.gyro_bias[0]*1e3).toFixed(2),unit:"mrad/s"}),g.jsx(ye,{label:"y",value:(n.gyro_bias[1]*1e3).toFixed(2),unit:"mrad/s"}),g.jsx(ye,{label:"z",value:(n.gyro_bias[2]*1e3).toFixed(2),unit:"mrad/s"})]}),g.jsxs("div",{className:"stat-row",children:[g.jsx(ye,{label:"accel bias x",value:Le(n.accel_bias[0],3),unit:"m/s²"}),g.jsx(ye,{label:"y",value:Le(n.accel_bias[1],3),unit:"m/s²"}),g.jsx(ye,{label:"z",value:Le(n.accel_bias[2],3),unit:"m/s²"})]}),g.jsxs("div",{className:"stat-row",children:[g.jsx(ye,{label:"baro bias",value:Le(n.baro_bias),unit:"m"}),g.jsx(ye,{label:"odometry scale",value:(n.odom_scale*100).toFixed(2),unit:"%",hint:"Wheel slip makes the encoders over-report; this is the learned correction."}),g.jsx(ye,{label:"vel σ",value:Le(n.vel_sigma,3),unit:"m/s"})]})]}),g.jsx(st,{title:"Speed tracking",children:g.jsx(Xo,{rows:e,height:140,series:[{key:"speed",label:"true speed (m/s)",color:"#3fb950"},{key:"speedCmd",label:"commanded (m/s)",color:"#4a9eff",dashed:!0}]})}),g.jsxs(st,{title:"Heading error",children:[g.jsx(Xo,{rows:e,height:140,shadeFlagged:!0,series:[{key:"yawErr",label:"yaw error (deg)",color:"#d2a8ff"}]}),g.jsxs("div",{className:"stat-row",children:[g.jsx(ye,{label:"yaw σ",value:Le(n.yaw_sigma_deg,2),unit:"°"}),t.battery&&g.jsxs(g.Fragment,{children:[g.jsx(ye,{label:"battery",value:Le(t.battery.percentage*100,1),unit:"%"}),g.jsx(ye,{label:"pack",value:Le(t.battery.voltage,1),unit:"V"}),g.jsx(ye,{label:"draw",value:Le(t.battery.current,1),unit:"A"})]})]})]})]})}function Ri(t){return t==null?"–":typeof t=="boolean"?t?"yes":"no":typeof t=="number"?Number.isInteger(t)?String(t):t.toFixed(3):typeof t=="string"?t:JSON.stringify(t)}const dT={outcome:"Mission outcome",accuracy:"Localisation accuracy",consistency:"Estimator consistency",detection:"Fault detection",recovery:"Recovery",path:"Path efficiency",availability:"Data availability",false_alarms:"False alarms"};function fT({results:t,latest:e,world:n}){if(!t)return g.jsx("div",{className:"grid",children:g.jsxs(st,{title:"Experiment results",className:"span2",children:[g.jsx("p",{className:"muted",children:"The run is still in progress. Metrics are computed when the scenario ends — at the goal, at the timeout, or on an abort."}),e&&n&&g.jsxs("div",{className:"stat-row",children:[g.jsx(ye,{label:"scenario",value:n.scenario.id}),g.jsx(ye,{label:"elapsed",value:Le(e.t,1),unit:"s"}),g.jsx(ye,{label:"of",value:Le(n.scenario.duration_s,0),unit:"s"}),g.jsx(ye,{label:"state",value:e.resilience.state})]})]})});const i=t.outcome??{},r=i.mission_success===!0;return g.jsxs("div",{className:"grid",children:[g.jsxs(st,{title:"Verdict",className:"span2",right:g.jsx("span",{className:`badge ${r?"ok":"bad"}`,children:r?"mission success":"not successful"}),children:[g.jsxs("div",{className:"stat-row",children:[g.jsx(ye,{label:"goal reached",value:Ri(i.goal_reached),tone:i.goal_reached?"ok":"warn"}),g.jsx(ye,{label:"collisions",value:Ri(i.collisions),tone:Number(i.collisions)>0?"bad":"ok"}),g.jsx(ye,{label:"min clearance",value:Ri(i.min_obstacle_clearance_m),unit:"m"}),g.jsx(ye,{label:"final state",value:Ri(i.final_state)}),g.jsx(ye,{label:"duration",value:Ri(i.duration_s),unit:"s"}),g.jsx(ye,{label:"seed",value:Ri(t.seed)}),typeof i.realtime_factor=="number"&&g.jsx(ye,{label:"real-time factor",value:Ri(i.realtime_factor),unit:"×"})]}),i.safe_stop_short_of_goal===!0&&g.jsx("p",{className:"reason",children:"The vehicle stopped safely without reaching the goal. That is scored separately from a success and from a failure: declining to continue on untrustworthy data is the correct outcome, but it is not a completed mission."})]}),Object.entries(t).filter(([s,a])=>s!=="outcome"&&a!==null&&typeof a=="object"&&!Array.isArray(a)).map(([s,a])=>g.jsx(st,{title:dT[s]??s,children:g.jsx("table",{className:"table compact",children:g.jsx("tbody",{children:Object.entries(a).filter(([o])=>!o.startsWith("per_")&&o!=="_note").map(([o,l])=>g.jsxs("tr",{children:[g.jsx("th",{children:o.replace(/_/g," ")}),g.jsx("td",{children:Ri(l)})]},o))})})},s))]})}function Kf(t,e,n=60){const i=t.faults[e],r={...i.defaults??{}};for(const[s,a]of Object.entries(i.params))r[s]===void 0&&a.default!==void 0&&a.default!==null&&(r[s]=a.default),r[s]===void 0&&a.type==="vec3"&&(r[s]=[0,0,0]),r[s]===void 0&&a.type==="bool"&&(r[s]=!1);return{type:e,target:i.targets[0],onset:n,duration:30,ramp:0,params:r}}function hT(t){return t.replace(/_/g," ").toLowerCase()}function da({value:t,onChange:e,step:n,min:i,max:r,width:s=74}){return g.jsx("input",{className:"num",type:"number",style:{width:s},value:Number.isFinite(t)?t:"",step:n??"any",min:i,max:r,onChange:a=>e(a.target.value===""?NaN:Number(a.target.value))})}function pT({name:t,spec:e,value:n,onChange:i}){const r=`${e.label}${e.unit?` [${e.unit}]`:""}`+(e.min!==void 0?` (${e.min} … ${e.max})`:"");if(e.type==="bool")return g.jsxs("label",{className:"param",title:r,children:[g.jsx("input",{type:"checkbox",checked:!!n,onChange:s=>i(s.target.checked)}),e.label]});if(e.type==="vec3"){const s=Array.isArray(n)?n:[0,0,0];return g.jsxs("span",{className:"param",title:r,children:[g.jsx("span",{className:"muted small",children:t}),[0,1,2].map(a=>g.jsx(da,{value:s[a],width:64,onChange:o=>i(s.map((l,c)=>c===a?o:l))},a)),e.unit&&g.jsx("span",{className:"muted small",children:e.unit})]})}return g.jsxs("span",{className:"param",title:r,children:[g.jsx("span",{className:"muted small",children:e.label}),g.jsx(da,{value:Number(n),onChange:i,min:e.min,max:e.max}),e.unit&&g.jsx("span",{className:"muted small",children:e.unit})]})}function fv({schema:t,fault:e,onChange:n,onRemove:i,live:r=!1}){const s=t.faults[e.type],a=o=>n({...e,...o});return g.jsxs("div",{className:"fault-row",children:[g.jsxs("div",{className:"fault-main",children:[g.jsx("select",{value:e.type,onChange:o=>n({...Kf(t,o.target.value,e.onset),duration:e.duration}),children:Object.keys(t.faults).map(o=>g.jsx("option",{value:o,children:hT(o)},o))}),s&&s.targets.length>1?g.jsx("select",{value:e.target,onChange:o=>a({target:o.target.value}),children:s.targets.map(o=>g.jsx("option",{value:o,children:o},o))}):g.jsx("span",{className:"chip",children:e.target}),!r&&g.jsxs("label",{className:"param",children:[g.jsx("span",{className:"muted small",children:"onset"}),g.jsx(da,{value:e.onset,min:0,onChange:o=>a({onset:o})}),g.jsx("span",{className:"muted small",children:"s"})]}),g.jsxs("label",{className:"param",children:[g.jsx("span",{className:"muted small",children:"duration"}),g.jsx(da,{value:e.duration,onChange:o=>a({duration:o})}),g.jsx("span",{className:"muted small",children:"s"})]}),g.jsxs("label",{className:"param",title:"Time to ramp to full magnitude",children:[g.jsx("span",{className:"muted small",children:"ramp"}),g.jsx(da,{value:e.ramp,min:0,width:60,onChange:o=>a({ramp:o})}),g.jsx("span",{className:"muted small",children:"s"})]}),g.jsxs("label",{className:"param",title:"-1 = until the run ends",children:[g.jsx("input",{type:"checkbox",checked:e.duration<0,onChange:o=>a({duration:o.target.checked?-1:30})}),g.jsx("span",{className:"muted small",children:"until end"})]}),i&&g.jsx("button",{className:"icon",onClick:i,title:"remove",children:"✕"})]}),s&&Object.keys(s.params).length>0&&g.jsx("div",{className:"fault-params",children:Object.entries(s.params).map(([o,l])=>g.jsx(pT,{name:o,spec:l,value:e.params[o],onChange:c=>a({params:{...e.params,[o]:c}})},o))}),s&&g.jsx("p",{className:"muted small fault-desc",children:s.description})]})}const mm=["t","estX","estY","trueX","trueY","posError","posSigma","yawErr","nis","cusum","speed","speedCmd","clearance","state","flagged"];function mT(t){const e=mm.join(","),n=t.map(i=>mm.map(r=>{const s=i[r];return s==null?"":typeof s=="number"?Number.isFinite(s)?String(s):"":String(s)}).join(","));return[e,...n].join(`
`)}function au(t,e,n){const i=new Blob([e],{type:n}),r=URL.createObjectURL(i),s=document.createElement("a");s.href=r,s.download=t,s.click(),URL.revokeObjectURL(r)}function gT({history:t,world:e,latest:n,results:i,sendCommand:r,authed:s,commandLog:a,token:o,setToken:l,schema:c}){const d=s,[h,f]=he.useState(null),[m,_]=he.useState(o),[S,p]=he.useState(1),[u,v]=he.useState(""),[x,w]=he.useState(c?Kf(c,"GNSS_OUTAGE",0):null),b=he.useRef(void 0),E=h===null?t[t.length-1]:t[h],M=he.useMemo(()=>t.length>1?[t[0].t,t[t.length-1].t]:[0,0],[t]),P=()=>{window.clearInterval(b.current);let T=h??0;b.current=window.setInterval(()=>{if(T+=1,T>=t.length){window.clearInterval(b.current),f(null);return}f(T)},50)},B=()=>window.clearInterval(b.current),y=(e==null?void 0:e.faults_declared)??[];return g.jsxs("div",{className:"grid",children:[g.jsx(st,{title:"Replay",className:"span2",children:t.length<2?g.jsx("p",{className:"muted",children:"Nothing buffered yet."}):g.jsxs(g.Fragment,{children:[g.jsx("input",{className:"scrub",type:"range",min:0,max:t.length-1,value:h??t.length-1,onChange:T=>{B(),f(Number(T.target.value))}}),g.jsxs("div",{className:"replay-controls",children:[g.jsx("button",{onClick:P,children:"▶ play"}),g.jsx("button",{onClick:B,children:"⏸ pause"}),g.jsx("button",{onClick:()=>{B(),f(null)},children:"⏭ live"}),g.jsxs("span",{className:"muted",children:["buffer ",M[0].toFixed(1),"–",M[1].toFixed(1)," s ·"," ",t.length," frames",h!==null&&" · scrubbing"]})]}),E&&g.jsxs("div",{className:"stat-row",children:[g.jsx(ye,{label:"t",value:Le(E.t,2),unit:"s"}),g.jsx(ye,{label:"state",value:E.state}),g.jsx(ye,{label:"error",value:Le(E.posError),unit:"m"}),g.jsx(ye,{label:"σ",value:Le(E.posSigma),unit:"m"}),g.jsx(ye,{label:"NIS",value:Le(E.nis)}),g.jsx(ye,{label:"GNSS",value:E.flagged?"inconsistent":"consistent",tone:E.flagged?"bad":"ok"})]})]})}),g.jsxs(st,{title:"Export",children:[g.jsxs("p",{className:"muted small",children:["This exports the dashboard's in-memory buffer. The authoritative per-trial record is written by the Python recorder as"," ",g.jsx("code",{children:"timeseries.csv"}),", ",g.jsx("code",{children:"metrics.json"}),","," ",g.jsx("code",{children:"events.csv"})," and ",g.jsx("code",{children:"result.json"})," under"," ",g.jsx("code",{children:"runs/"}),"."]}),g.jsxs("div",{className:"btn-row",children:[g.jsxs("button",{disabled:t.length===0,onClick:()=>au(`${(e==null?void 0:e.scenario.id)??"session"}_seed${(e==null?void 0:e.scenario.seed)??0}_buffer.csv`,mT(t),"text/csv"),children:["buffer → CSV (",t.length,")"]}),g.jsx("button",{disabled:!i,onClick:()=>au(`${(e==null?void 0:e.scenario.id)??"session"}_metrics.json`,JSON.stringify(i,null,1),"application/json"),children:"metrics → JSON"}),g.jsx("button",{disabled:!e,onClick:()=>au(`${(e==null?void 0:e.scenario.id)??"session"}_scenario.json`,JSON.stringify({scenario:e==null?void 0:e.scenario,mission:e==null?void 0:e.mission,faults_declared:e==null?void 0:e.faults_declared},null,1),"application/json"),children:"scenario → JSON"})]}),e&&g.jsxs("div",{className:"stat-row",children:[g.jsx(ye,{label:"scenario",value:e.scenario.id}),g.jsx(ye,{label:"seed",value:e.scenario.seed})]})]}),g.jsxs(st,{title:"Command console",right:g.jsx("span",{className:d?"badge ok":"badge",children:d?"authorised":"read-only"}),children:[g.jsx("p",{className:"muted small",children:"Telemetry is read-only. Commands need the token the bridge prints at startup, and only the verbs below exist — the browser cannot name a topic, a node or a Python attribute. Commands apply to the session selected in the top bar."}),g.jsxs("div",{className:"btn-row",children:[g.jsx("input",{className:"token",type:"password",placeholder:"bridge token",value:m,onChange:T=>_(T.target.value)}),g.jsx("button",{onClick:()=>l(m),children:"connect"})]}),g.jsxs("div",{className:"btn-row",children:[g.jsx("button",{disabled:!d,onClick:()=>r("pause"),children:"pause"}),g.jsx("button",{disabled:!d,onClick:()=>r("resume"),children:"resume"}),g.jsx("button",{disabled:!d,onClick:()=>r("step",{steps:400}),children:"step 1 s"}),g.jsx("button",{disabled:!d,onClick:()=>r("reset",{}),children:"restart"})]}),g.jsxs("div",{className:"btn-row",children:[g.jsx("input",{className:"token",style:{flex:"0 1 140px"},placeholder:"new seed",value:u,onChange:T=>v(T.target.value.replace(/[^0-9]/g,""))}),g.jsx("button",{disabled:!d||!u,onClick:()=>r("reset",{seed:Number(u)}),title:"Restart this session on a different random map / noise sequence",children:"restart with seed"})]}),g.jsx("div",{className:"btn-row",children:g.jsxs("label",{className:"muted small",children:["pacing ×",S,g.jsx("input",{type:"range",min:1,max:30,step:1,value:S,disabled:!d,onChange:T=>{const k=Number(T.target.value);p(k),r("set_speed",{speed:k})}})]})}),y.length>0&&g.jsxs(g.Fragment,{children:[g.jsx("p",{className:"muted small",children:"Declared faults for this scenario. Each is arithmetic applied to a simulated stream inside the simulator process — nothing is transmitted and no system state is changed."}),g.jsx("div",{className:"btn-row",children:y.map((T,k)=>g.jsxs("button",{disabled:!d,onClick:()=>r("inject_declared_fault",{index:k}),title:`${T.type} on ${T.target}, declared onset ${T.onset} s`,children:["inject ",T.type.replace(/_/g," ").toLowerCase()]},k))})]}),c&&x&&g.jsxs(g.Fragment,{children:[g.jsxs("p",{className:"muted small",children:["Inject a ",g.jsx("b",{children:"new"})," fault into the running simulation, starting now. Same allow-list and bounds as the scenario editor."]}),g.jsx(fv,{schema:c,fault:x,onChange:w,live:!0}),g.jsx("div",{className:"btn-row",children:g.jsx("button",{className:"primary",disabled:!d||!!(n!=null&&n.finished),onClick:()=>r("inject_fault",{fault:x}),children:"⚡ inject now"})})]}),a.length>0&&g.jsx("pre",{className:"log",children:a.slice(0,12).join(`
`)}),(n==null?void 0:n.paused)&&g.jsx("p",{className:"reason",children:"simulation paused"})]})]})}function _T({size:t,start:e,goal:n,faults:i,onStart:r,onGoal:s}){const[a,o]=he.useState("goal"),l=260,c=Math.round(l*t[1]/t[0]),d=_=>_/t[0]*l,h=_=>c-_/t[1]*c,f=_=>{const S=_.currentTarget.getBoundingClientRect(),p=(_.clientX-S.left)/S.width*t[0],u=(1-(_.clientY-S.top)/S.height)*t[1],v=[Math.round(p),Math.round(u)];(a==="goal"?s:r)(v)},m=i.filter(_=>_.type==="OBSTACLE_APPEARS");return g.jsxs("div",{className:"mission-map",children:[g.jsxs("svg",{viewBox:`0 0 ${l} ${c}`,width:l,height:c,onClick:f,role:"img","aria-label":"mission map: click to place the start or goal",children:[g.jsx("rect",{x:0,y:0,width:l,height:c,className:"map-bg"}),[.25,.5,.75].map(_=>g.jsxs("g",{children:[g.jsx("line",{x1:l*_,x2:l*_,y1:0,y2:c,className:"map-grid"}),g.jsx("line",{y1:c*_,y2:c*_,x1:0,x2:l,className:"map-grid"})]},_)),g.jsx("line",{x1:d(e[0]),y1:h(e[1]),x2:d(n[0]),y2:h(n[1]),className:"map-line"}),m.map((_,S)=>g.jsx("circle",{cx:d(Number(_.params.x)),cy:h(Number(_.params.y)),r:Math.max(3,d(Number(_.params.radius??1.3))),className:"map-obs"},S)),g.jsx("circle",{cx:d(e[0]),cy:h(e[1]),r:6,className:"map-start"}),g.jsx("circle",{cx:d(n[0]),cy:h(n[1]),r:6,className:"map-goal"})]}),g.jsxs("div",{className:"btn-row",children:[g.jsx("span",{className:"muted small",children:"click map to place:"}),g.jsx("button",{className:a==="start"?"sel":"",onClick:()=>o("start"),children:"start"}),g.jsx("button",{className:a==="goal"?"sel":"",onClick:()=>o("goal"),children:"goal"})]}),g.jsxs("div",{className:"btn-row",children:[g.jsx("span",{className:"legend-dot start"})," start (",e.join(", "),")",g.jsx("span",{className:"legend-dot goal"})," goal (",n.join(", "),")",m.length>0&&g.jsxs(g.Fragment,{children:[g.jsx("span",{className:"legend-dot obs"})," scripted obstacle"]})]})]})}function vT({schema:t,scenarios:e,token:n,authed:i,onLaunched:r,onBatchStarted:s,refreshScenarios:a}){const[o,l]=he.useState("gnss_outage"),[c,d]=he.useState("rolling_hills"),[h,f]=he.useState({}),[m,_]=he.useState([12,12]),[S,p]=he.useState([185,185]),[u,v]=he.useState([]),[x,w]=he.useState(""),[b,E]=he.useState(""),[M,P]=he.useState(""),[B,y]=he.useState(3),[T,k]=he.useState("12345 2 7"),[U,j]=he.useState(null),[X,O]=he.useState(!1);he.useEffect(()=>{let W=!0;return Vt.get(`/api/scenarios/${encodeURIComponent(o)}`).then(te=>{var de,Ue;if(!W||!te.ok)return;const fe=te.data.config;f(te.data.values),d(fe.environment??"rolling_hills"),_((((de=fe.mission)==null?void 0:de.start)??[12,12]).map(Number)),p((((Ue=fe.mission)==null?void 0:Ue.goal)??[185,185]).map(Number)),v((fe.faults??[]).map(re=>({type:String(re.type).toUpperCase(),target:re.target,onset:Number(re.onset??0),duration:Number(re.duration??-1),ramp:Number(re.ramp??0),params:{...re.params??{}},label:re.label??""}))),w((fe.description??"").trim()),j(null)}),()=>{W=!1}},[o]);const q=W=>{d(W);const te=t.environments[W].world;f(fe=>{const de={...fe};for(const[Ue,re]of Object.entries(te))de[`world.${Ue}`]=re;return de})},N=he.useMemo(()=>{var te;const W={};for(const[fe,de]of Object.entries(t.fields))(W[te=de.group]??(W[te]=[])).push(fe);return W},[t]),K=(W={})=>{const te={};for(const[fe,de]of Object.entries(h))de!=null&&t.fields[fe]&&(te[fe]=Number(de));return{base:o,environment:c,fields:te,description:x,mission:{start:m,goal:S},faults:u,...W}},Z=(W,te)=>j({ok:W,text:te}),ae=async()=>{const W=await Vt.post("/api/scenarios/validate",n,K());return Z(W.ok,W.ok?["Scenario is valid."]:W.errors??["invalid"]),W.ok},Re=async()=>{O(!0);const W=await Vt.post("/api/sessions",n,{...K(),speed:B,label:M||`${o} · ${c} · seed ${h.seed}`});O(!1),W.ok?r(W.data.session):Z(!1,W.errors??["launch failed"])},Ge=async()=>{const W=await Vt.post("/api/scenarios",n,K({id:b}));Z(W.ok,W.ok?[`Saved as ${W.data.id} (${W.data.path}).`]:W.errors??["save failed"]),W.ok&&a()},$=async()=>{const W=T.split(/[\s,]+/).filter(Boolean).map(Number);if(W.some(fe=>!Number.isInteger(fe))){Z(!1,["seeds must be whole numbers separated by spaces"]);return}const te=await Vt.post("/api/batches",n,{edit:K({id:b||void 0}),seeds:W,jobs:4,label:M||`${o} on ${c}`});te.ok?s():Z(!1,te.errors??["batch failed"])},ie=[Number(h["world.size_x"]??200),Number(h["world.size_y"]??200)];return g.jsxs("div",{className:"grid lab",children:[g.jsx(st,{title:"1 · Start from",className:"span2",children:g.jsxs("div",{className:"btn-row",children:[g.jsx("select",{value:o,onChange:W=>l(W.target.value),children:e.filter(W=>!W.error).map(W=>g.jsxs("option",{value:W.id,children:[W.id,W.source==="custom"?" (custom)":""]},W.id))}),g.jsx("input",{className:"token",value:x,placeholder:"description",onChange:W=>w(W.target.value)})]})}),g.jsx(st,{title:"2 · Environment",className:"span2",children:g.jsx("div",{className:"env-grid",children:Object.entries(t.environments).map(([W,te])=>g.jsxs("button",{className:c===W?"env sel":"env",onClick:()=>q(W),children:[g.jsx("b",{children:te.label}),g.jsx("span",{className:"muted small",children:te.description}),g.jsxs("span",{className:"muted small",children:["relief ",te.world.relief," m · ",te.world.n_obstacles," obstacles"]})]},W))})}),g.jsx(st,{title:"3 · Parameters",children:Object.entries(N).map(([W,te])=>g.jsxs("fieldset",{className:"fields",children:[g.jsx("legend",{children:W}),te.map(fe=>{const de=t.fields[fe],Ue=h[fe];return g.jsxs("label",{className:"field",title:`${de.min} … ${de.max} ${de.unit}`,children:[g.jsx("span",{children:de.label}),g.jsxs("span",{children:[g.jsx("input",{className:"num",type:"number",value:Ue??"",min:de.min,max:de.max,step:de.step??"any",onChange:re=>{const Ae=re.target.value===""?null:Number(re.target.value);f({...h,[fe]:Ae,...fe==="duration"?{"mission.timeout_s":Ae}:{}})}}),g.jsx("small",{className:"muted",children:de.unit}),fe==="seed"&&g.jsx("button",{className:"icon",title:"random seed",onClick:()=>f({...h,seed:Math.floor(Math.random()*1e6)}),children:"🎲"})]})]},fe)})]},W))}),g.jsxs("div",{className:"stack",children:[g.jsx(st,{title:"4 · Mission",children:g.jsx(_T,{size:ie,start:m,goal:S,faults:u,onStart:_,onGoal:p})}),g.jsxs(st,{title:`5 · Faults (${u.length}/${t.max_faults})`,right:g.jsx("button",{disabled:u.length>=t.max_faults,onClick:()=>v([...u,Kf(t,"GNSS_OUTAGE")]),children:"+ add fault"}),children:[u.length===0&&g.jsx("p",{className:"muted",children:"No faults: a baseline run."}),u.map((W,te)=>g.jsx(fv,{schema:t,fault:W,onChange:fe=>v(u.map((de,Ue)=>Ue===te?fe:de)),onRemove:()=>v(u.filter((fe,de)=>de!==te))},te))]})]}),g.jsxs(st,{title:"6 · Run it",className:"span2",children:[!i&&g.jsxs("p",{className:"alert",children:["Read-only: open the dashboard with ",g.jsx("code",{children:"?token=…"})," (printed by the bridge) to launch, save or batch."]}),g.jsxs("div",{className:"btn-row",children:[g.jsx("input",{className:"token",value:M,placeholder:"session label (optional)",onChange:W=>P(W.target.value)}),g.jsxs("label",{className:"muted small",children:["speed ×",g.jsx("select",{value:B,onChange:W=>y(Number(W.target.value)),children:[.5,1,2,3,5,10,20].map(W=>g.jsx("option",{value:W,children:W},W))})]}),g.jsx("button",{onClick:ae,children:"validate"}),g.jsx("button",{className:"primary",disabled:!i||X,onClick:Re,children:"▶ launch simulation"})]}),g.jsxs("div",{className:"btn-row",children:[g.jsx("input",{className:"token",value:b,placeholder:"scenario id to save, e.g. forest_gnss_test",onChange:W=>E(W.target.value.toLowerCase())}),g.jsx("button",{disabled:!i||!b,onClick:Ge,children:"save scenario"})]}),g.jsxs("div",{className:"btn-row",children:[g.jsx("input",{className:"token",value:T,placeholder:"seeds, e.g. 1 2 3",onChange:W=>k(W.target.value)}),g.jsx("button",{disabled:!i,onClick:$,children:"run batch over these seeds"})]}),U&&g.jsx("div",{className:U.ok?"reason":"alert",children:U.text.map((W,te)=>g.jsx("div",{children:W},te))})]})]})}function hv(t){return t==null?g.jsx("span",{className:"muted",children:"–"}):t?g.jsx("span",{className:"ok-text",children:"yes"}):g.jsx("span",{className:"bad-text",children:"no"})}function gm({rows:t,onPick:e}){return g.jsx("div",{className:"table-wrap",children:g.jsxs("table",{className:"table",children:[g.jsx("thead",{children:g.jsxs("tr",{children:[g.jsx("th",{children:"scenario"}),g.jsx("th",{children:"seed"}),g.jsx("th",{children:"success"}),g.jsx("th",{children:"final state"}),g.jsx("th",{children:"RMSE m"}),g.jsx("th",{children:"detected"}),g.jsx("th",{children:"latency s"}),g.jsx("th",{children:"collisions"}),g.jsx("th",{children:"duration s"})]})}),g.jsx("tbody",{children:t.map((n,i)=>g.jsxs("tr",{className:e?"clickable":"",onClick:()=>e==null?void 0:e(n),children:[g.jsx("td",{children:n.scenario}),g.jsx("td",{children:n.seed}),g.jsx("td",{children:hv(n.mission_success)}),g.jsx("td",{children:n.final_state}),g.jsx("td",{children:Le(n.rmse_m)}),g.jsx("td",{children:n.faults_declared?`${n.faults_detected}/${n.faults_declared}`:"–"}),g.jsx("td",{children:Le(n.detection_latency_s)}),g.jsx("td",{className:n.collision_steps?"bad-text":"",children:n.collision_steps}),g.jsx("td",{children:Le(n.duration_s,0)})]},i))})]})})}function xT({sessions:t,current:e,token:n,authed:i,onOpen:r,refreshSessions:s}){const[a,o]=he.useState([]),[l,c]=he.useState(null),[d,h]=he.useState([]),[f,m]=he.useState(null),[_,S]=he.useState(""),p=he.useCallback(async()=>{const E=await Vt.get("/api/batches");E.ok&&o(E.data.batches)},[]),u=he.useCallback(async()=>{const E=await Vt.get("/api/runs");E.ok&&h(E.data.runs)},[]);he.useEffect(()=>{p(),u();const E=window.setInterval(p,2500);return()=>window.clearInterval(E)},[p,u]),he.useEffect(()=>{if(!l)return;const E=l.id,M=async()=>{const B=await Vt.get(`/api/batches/${E}`);B.ok&&c(B.data.batch)};if(M(),l.state!=="running"&&l.state!=="queued")return;const P=window.setInterval(M,3e3);return()=>window.clearInterval(P)},[l==null?void 0:l.id,l==null?void 0:l.state]);const v=async(E,M,P={})=>{const B=await Vt.post(`/api/sessions/${E}/command`,n,{command:M,args:P});S(B.ok?`${E}: ${M} ok`:`${E}: ${(B.errors??[]).join("; ")}`),s()},x=async E=>{const M=await Vt.del(`/api/sessions/${E}`,n);S(M.ok?`${E} closed`:(M.errors??[]).join("; ")),s()},w=async E=>{await Vt.del(`/api/batches/${E}`,n),p()},b=async E=>{if(!E.path)return;const M=await Vt.get(`/api/runs/${E.path}`);M.ok&&m(M.data)};return g.jsxs("div",{className:"grid",children:[g.jsxs(st,{title:`Live sessions (${t.length})`,className:"span2",right:g.jsx("span",{className:"muted small",children:"all run concurrently in the bridge"}),children:[t.length===0?g.jsx("p",{className:"muted",children:"No sessions. Launch one from the Lab tab."}):g.jsx("div",{className:"table-wrap",children:g.jsxs("table",{className:"table",children:[g.jsx("thead",{children:g.jsxs("tr",{children:[g.jsx("th",{children:"id"}),g.jsx("th",{children:"label"}),g.jsx("th",{children:"scenario"}),g.jsx("th",{children:"environment"}),g.jsx("th",{children:"seed"}),g.jsx("th",{children:"progress"}),g.jsx("th",{children:"state"}),g.jsx("th",{children:"faults"}),g.jsx("th",{children:"result"}),g.jsx("th",{})]})}),g.jsx("tbody",{children:t.map(E=>g.jsxs("tr",{className:E.id===e?"current":"",children:[g.jsx("td",{children:E.id}),g.jsx("td",{children:E.label}),g.jsx("td",{children:E.scenario}),g.jsx("td",{children:E.environment.replace(/_/g," ")}),g.jsx("td",{children:E.seed}),g.jsx("td",{style:{minWidth:130},children:g.jsxs("div",{className:"progress mini",children:[g.jsx("div",{className:"progress-fill",style:{width:`${Math.min(100,100*E.t/E.duration)}%`}}),g.jsxs("span",{children:[E.building?"building…":`${Le(E.t,0)} s`,E.paused&&!E.finished?" · paused":""]})]})}),g.jsx("td",{children:E.state?g.jsx(Ff,{state:E.state}):"–"}),g.jsx("td",{children:E.faults}),g.jsx("td",{children:E.finished?hv(E.success):g.jsx("span",{className:"muted",children:"running"})}),g.jsxs("td",{className:"actions",children:[g.jsx("button",{onClick:()=>r(E.id),children:"open"}),E.paused?g.jsx("button",{disabled:!i||E.finished,onClick:()=>v(E.id,"resume"),children:"resume"}):g.jsx("button",{disabled:!i,onClick:()=>v(E.id,"pause"),children:"pause"}),g.jsx("button",{disabled:!i,onClick:()=>v(E.id,"reset"),children:"restart"}),g.jsx("button",{disabled:!i,onClick:()=>x(E.id),children:"close"})]})]},E.id))})]})}),yT(t),_&&g.jsx("p",{className:"muted small",children:_})]}),g.jsxs(st,{title:"Batch sweeps",className:"span2",right:g.jsx("span",{className:"muted small",children:"start one from the Lab tab"}),children:[a.length===0&&g.jsx("p",{className:"muted",children:"No batches yet."}),a.map(E=>g.jsxs("div",{className:"batch",children:[g.jsxs("div",{className:"btn-row",children:[g.jsx("b",{children:E.label||E.id}),g.jsx("span",{className:`badge ${E.state==="done"?"ok":E.state==="cancelled"?"bad":"warn"}`,children:E.state}),g.jsxs("div",{className:"progress mini grow",children:[g.jsx("div",{className:"progress-fill",style:{width:`${100*E.done/E.total}%`}}),g.jsxs("span",{children:[E.done,"/",E.total," trials · ",E.succeeded," succeeded · ",E.jobs," workers"]})]}),g.jsx("button",{onClick:()=>c((l==null?void 0:l.id)===E.id?null:E),children:(l==null?void 0:l.id)===E.id?"hide":"results"}),(E.state==="running"||E.state==="queued")&&g.jsx("button",{disabled:!i,onClick:()=>w(E.id),children:"cancel"})]}),E.errors.length>0&&g.jsx("p",{className:"alert",children:E.errors.join(`
`)}),(l==null?void 0:l.id)===E.id&&l.rows&&g.jsxs(g.Fragment,{children:[g.jsx(gm,{rows:l.rows}),g.jsxs("p",{className:"muted small",children:["Written to ",g.jsxs("code",{children:[E.out_dir,"/"]})," (summary.md, summary.csv, one folder per trial)."]})]})]},E.id))]}),g.jsxs(st,{title:`Run archive (${d.length})`,className:"span2",right:g.jsx("button",{onClick:u,children:"refresh"}),children:[g.jsxs("p",{className:"muted small",children:["Every recorded trial under ",g.jsx("code",{children:"runs/"}),". Click a row for its metrics and event log."]}),g.jsx(gm,{rows:d.slice(0,60),onPick:b})]}),f&&g.jsx(st,{title:`Run · ${f.path}`,className:"span2",right:g.jsx("button",{onClick:()=>m(null),children:"close"}),children:g.jsxs("div",{className:"grid",children:[g.jsx("div",{children:["outcome","accuracy","detection","recovery"].map(E=>g.jsxs("table",{className:"table compact",children:[g.jsx("thead",{children:g.jsx("tr",{children:g.jsx("th",{colSpan:2,children:E})})}),g.jsx("tbody",{children:Object.entries(f.metrics[E]??{}).filter(([,M])=>typeof M!="object"||M===null).map(([M,P])=>g.jsxs("tr",{children:[g.jsx("th",{children:M}),g.jsx("td",{children:typeof P=="number"?Le(P,3):String(P)})]},M))})]},E))}),g.jsx("div",{children:g.jsx("pre",{className:"log tall",children:(f.events??[]).map(E=>`${Number(E.t).toFixed(2).padStart(8)}  ${E.kind.padEnd(17)} ${E.detail}`).join(`
`)})})]})})]})}function yT(t){const e=t.filter(n=>n.error);return e.length?g.jsx("p",{className:"alert",children:e.map(n=>`${n.id}: ${n.error}`).join(`
`)}):null}const _m=[{id:"overview",label:"Mission",needsSession:!0},{id:"simulation",label:"3D view",needsSession:!0},{id:"sensors",label:"Sensors",needsSession:!0},{id:"results",label:"Results",needsSession:!0},{id:"replay",label:"Replay / control",needsSession:!0},{id:"lab",label:"Lab",needsSession:!1},{id:"fleet",label:"Fleet",needsSession:!1}];function ST(){const[t,e]=he.useState(Wx),[n,i]=he.useState(!1),[r,s]=he.useState(null),[a,o]=he.useState([]),[l,c]=he.useState([]),[d,h]=he.useState(!0),[f,m]=he.useState(null),[_,S]=he.useState("overview"),p=qx(f,t),u=he.useCallback(M=>{Xx(M),e(M)},[]);he.useEffect(()=>{Vt.getAuthed("/api/info",t).then(M=>{M.ok&&(s(M.data.schema),i(M.data.authed))})},[t]);const v=he.useCallback(()=>{Vt.get("/api/scenarios").then(M=>{M.ok&&o(M.data.scenarios)})},[]);he.useEffect(v,[v]);const x=he.useCallback(async()=>{const M=await Vt.get("/api/sessions");h(M.ok),M.ok&&(c(M.data.sessions),m(P=>{const B=M.data.sessions.map(y=>y.id);return P&&B.includes(P)?P:B[0]??null}))},[]);he.useEffect(()=>{x();const M=window.setInterval(x,2e3);return()=>window.clearInterval(M)},[x]);const w=M=>{m(M),S("overview")},E=_m.find(M=>M.id===_).needsSession;return g.jsxs("div",{className:"app",children:[g.jsxs("nav",{className:"nav",children:[g.jsxs("div",{className:"brand",children:["ResilienceLab",g.jsx("small",{children:"SITL autonomy & resilience testbed"})]}),g.jsx("div",{className:"tabs",children:_m.map(M=>g.jsxs("button",{className:_===M.id?"tab active":"tab",onClick:()=>S(M.id),children:[M.label,M.id==="fleet"&&l.length>0&&g.jsx("span",{className:"count",children:l.length})]},M.id))}),g.jsxs("div",{className:"nav-right",children:[g.jsxs("select",{className:"session-select",value:f??"",onChange:M=>m(M.target.value||null),title:"simulation session shown in the Mission/3D/Sensors/Results/Replay tabs",children:[l.length===0&&g.jsx("option",{value:"",children:"no sessions"}),l.map(M=>g.jsxs("option",{value:M.id,children:[M.id," · ",M.label]},M.id))]}),p.latest&&g.jsx(Ff,{state:p.latest.resilience.state}),p.latest&&g.jsxs("span",{className:"clock",children:["t = ",Le(p.latest.t,1)," s"]}),g.jsx("span",{className:d?"dot ok":"dot bad"}),g.jsx("span",{className:"muted small",children:d?n?"bridge · control":"bridge · read-only":"bridge offline"})]})]}),g.jsxs("main",{children:[!d&&g.jsxs("div",{className:"splash",children:[g.jsx("h1",{children:"Waiting for the telemetry bridge"}),g.jsx("p",{children:"Start it with:"}),g.jsx("pre",{children:"./run_demo.sh"}),g.jsx("p",{className:"muted",children:"The dashboard reconnects on its own once the bridge is up."})]}),d&&E&&!f&&g.jsxs("div",{className:"splash",children:[g.jsx("h1",{children:"No simulation running"}),g.jsx("p",{className:"muted",children:"Design a scenario and launch it from the Lab."}),g.jsx("button",{className:"primary",onClick:()=>S("lab"),children:"Open the Lab"})]}),E&&f&&!p.latest&&d&&g.jsxs("div",{className:"splash",children:[g.jsx("h1",{children:p.missing?"Session closed":"Building the world…"}),g.jsx("p",{className:"muted",children:p.missing?"Pick another session from the menu.":"Generating terrain and obstacles."})]}),p.latest&&p.world&&_==="overview"&&g.jsx(Kx,{latest:p.latest,world:p.world,history:p.history}),p.latest&&p.world&&_==="simulation"&&g.jsx(aT,{latest:p.latest,world:p.world,path:p.path}),p.latest&&_==="sensors"&&g.jsx(uT,{latest:p.latest,history:p.history}),f&&p.latest&&_==="results"&&g.jsx(fT,{results:p.results,latest:p.latest,world:p.world}),f&&p.latest&&_==="replay"&&g.jsx(gT,{history:p.history,world:p.world,latest:p.latest,results:p.results,sendCommand:p.sendCommand,authed:n,commandLog:p.commandLog,token:t,setToken:u,schema:r}),_==="lab"&&r&&g.jsx(vT,{schema:r,scenarios:a,token:t,authed:n,onLaunched:M=>{x(),w(M.id)},onBatchStarted:()=>S("fleet"),refreshScenarios:v}),_==="fleet"&&g.jsx(xT,{sessions:l,current:f,token:t,authed:n,onOpen:w,refreshSessions:x})]}),g.jsxs("footer",{className:"foot",children:[g.jsx("span",{children:"Ground truth is shown for scoring and display only; the navigation stack never reads it."}),g.jsxs("span",{children:["GNSS flags report that streams ",g.jsx("em",{children:"disagree"})," — no cause is claimed."]})]})]})}P_(document.getElementById("root")).render(g.jsx(he.StrictMode,{children:g.jsx(ST,{})}));
//# sourceMappingURL=index-DNVsPMCJ.js.map
