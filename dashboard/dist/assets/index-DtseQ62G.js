(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var dm={exports:{}},bl={},hm={exports:{}},Ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Po=Symbol.for("react.element"),fv=Symbol.for("react.portal"),dv=Symbol.for("react.fragment"),hv=Symbol.for("react.strict_mode"),pv=Symbol.for("react.profiler"),mv=Symbol.for("react.provider"),gv=Symbol.for("react.context"),_v=Symbol.for("react.forward_ref"),vv=Symbol.for("react.suspense"),xv=Symbol.for("react.memo"),yv=Symbol.for("react.lazy"),eh=Symbol.iterator;function Sv(t){return t===null||typeof t!="object"?null:(t=eh&&t[eh]||t["@@iterator"],typeof t=="function"?t:null)}var pm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},mm=Object.assign,gm={};function Cs(t,e,n){this.props=t,this.context=e,this.refs=gm,this.updater=n||pm}Cs.prototype.isReactComponent={};Cs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Cs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function _m(){}_m.prototype=Cs.prototype;function Bf(t,e,n){this.props=t,this.context=e,this.refs=gm,this.updater=n||pm}var zf=Bf.prototype=new _m;zf.constructor=Bf;mm(zf,Cs.prototype);zf.isPureReactComponent=!0;var th=Array.isArray,vm=Object.prototype.hasOwnProperty,Hf={current:null},xm={key:!0,ref:!0,__self:!0,__source:!0};function ym(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)vm.call(e,i)&&!xm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Po,type:t,key:s,ref:o,props:r,_owner:Hf.current}}function Mv(t,e){return{$$typeof:Po,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Vf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Po}function Ev(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var nh=/\/+/g;function Ql(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Ev(""+t.key):e.toString(36)}function La(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Po:case fv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Ql(o,0):i,th(r)?(n="",t!=null&&(n=t.replace(nh,"$&/")+"/"),La(r,e,n,"",function(c){return c})):r!=null&&(Vf(r)&&(r=Mv(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(nh,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",th(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Ql(s,a);o+=La(s,e,n,l,r)}else if(l=Sv(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Ql(s,a++),o+=La(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Go(t,e,n){if(t==null)return t;var i=[],r=0;return La(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Tv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Yt={current:null},Da={transition:null},wv={ReactCurrentDispatcher:Yt,ReactCurrentBatchConfig:Da,ReactCurrentOwner:Hf};function Sm(){throw Error("act(...) is not supported in production builds of React.")}Ve.Children={map:Go,forEach:function(t,e,n){Go(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Go(t,function(){e++}),e},toArray:function(t){return Go(t,function(e){return e})||[]},only:function(t){if(!Vf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ve.Component=Cs;Ve.Fragment=dv;Ve.Profiler=pv;Ve.PureComponent=Bf;Ve.StrictMode=hv;Ve.Suspense=vv;Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wv;Ve.act=Sm;Ve.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=mm({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Hf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)vm.call(e,l)&&!xm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Po,type:t.type,key:r,ref:s,props:i,_owner:o}};Ve.createContext=function(t){return t={$$typeof:gv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:mv,_context:t},t.Consumer=t};Ve.createElement=ym;Ve.createFactory=function(t){var e=ym.bind(null,t);return e.type=t,e};Ve.createRef=function(){return{current:null}};Ve.forwardRef=function(t){return{$$typeof:_v,render:t}};Ve.isValidElement=Vf;Ve.lazy=function(t){return{$$typeof:yv,_payload:{_status:-1,_result:t},_init:Tv}};Ve.memo=function(t,e){return{$$typeof:xv,type:t,compare:e===void 0?null:e}};Ve.startTransition=function(t){var e=Da.transition;Da.transition={};try{t()}finally{Da.transition=e}};Ve.unstable_act=Sm;Ve.useCallback=function(t,e){return Yt.current.useCallback(t,e)};Ve.useContext=function(t){return Yt.current.useContext(t)};Ve.useDebugValue=function(){};Ve.useDeferredValue=function(t){return Yt.current.useDeferredValue(t)};Ve.useEffect=function(t,e){return Yt.current.useEffect(t,e)};Ve.useId=function(){return Yt.current.useId()};Ve.useImperativeHandle=function(t,e,n){return Yt.current.useImperativeHandle(t,e,n)};Ve.useInsertionEffect=function(t,e){return Yt.current.useInsertionEffect(t,e)};Ve.useLayoutEffect=function(t,e){return Yt.current.useLayoutEffect(t,e)};Ve.useMemo=function(t,e){return Yt.current.useMemo(t,e)};Ve.useReducer=function(t,e,n){return Yt.current.useReducer(t,e,n)};Ve.useRef=function(t){return Yt.current.useRef(t)};Ve.useState=function(t){return Yt.current.useState(t)};Ve.useSyncExternalStore=function(t,e,n){return Yt.current.useSyncExternalStore(t,e,n)};Ve.useTransition=function(){return Yt.current.useTransition()};Ve.version="18.3.1";hm.exports=Ve;var $e=hm.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Av=$e,Cv=Symbol.for("react.element"),Rv=Symbol.for("react.fragment"),bv=Object.prototype.hasOwnProperty,Pv=Av.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Lv={key:!0,ref:!0,__self:!0,__source:!0};function Mm(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)bv.call(e,i)&&!Lv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Cv,type:t,key:s,ref:o,props:r,_owner:Pv.current}}bl.Fragment=Rv;bl.jsx=Mm;bl.jsxs=Mm;dm.exports=bl;var A=dm.exports,Em={exports:{}},_n={},Tm={exports:{}},wm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,q){var Q=D.length;D.push(q);e:for(;0<Q;){var se=Q-1>>>1,Ae=D[se];if(0<r(Ae,q))D[se]=q,D[Q]=Ae,Q=se;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var q=D[0],Q=D.pop();if(Q!==q){D[0]=Q;e:for(var se=0,Ae=D.length,He=Ae>>>1;se<He;){var X=2*(se+1)-1,te=D[X],ue=X+1,ce=D[ue];if(0>r(te,Q))ue<Ae&&0>r(ce,te)?(D[se]=ce,D[ue]=Q,se=ue):(D[se]=te,D[X]=Q,se=X);else if(ue<Ae&&0>r(ce,Q))D[se]=ce,D[ue]=Q,se=ue;else break e}}return q}function r(D,q){var Q=D.sortIndex-q.sortIndex;return Q!==0?Q:D.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,h=null,d=3,m=!1,v=!1,y=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(D){for(var q=n(c);q!==null;){if(q.callback===null)i(c);else if(q.startTime<=D)i(c),q.sortIndex=q.expirationTime,e(l,q);else break;q=n(c)}}function M(D){if(y=!1,g(D),!v)if(n(l)!==null)v=!0,O(b);else{var q=n(c);q!==null&&$(M,q.startTime-D)}}function b(D,q){v=!1,y&&(y=!1,u(P),P=-1),m=!0;var Q=d;try{for(g(q),h=n(l);h!==null&&(!(h.expirationTime>q)||D&&!E());){var se=h.callback;if(typeof se=="function"){h.callback=null,d=h.priorityLevel;var Ae=se(h.expirationTime<=q);q=t.unstable_now(),typeof Ae=="function"?h.callback=Ae:h===n(l)&&i(l),g(q)}else i(l);h=n(l)}if(h!==null)var He=!0;else{var X=n(c);X!==null&&$(M,X.startTime-q),He=!1}return He}finally{h=null,d=Q,m=!1}}var C=!1,w=null,P=-1,H=5,x=-1;function E(){return!(t.unstable_now()-x<H)}function z(){if(w!==null){var D=t.unstable_now();x=D;var q=!0;try{q=w(!0,D)}finally{q?F():(C=!1,w=null)}}else C=!1}var F;if(typeof _=="function")F=function(){_(z)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,j=W.port2;W.port1.onmessage=z,F=function(){j.postMessage(null)}}else F=function(){p(z,0)};function O(D){w=D,C||(C=!0,F())}function $(D,q){P=p(function(){D(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,O(b))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(d){case 1:case 2:case 3:var q=3;break;default:q=d}var Q=d;d=q;try{return D()}finally{d=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,q){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var Q=d;d=D;try{return q()}finally{d=Q}},t.unstable_scheduleCallback=function(D,q,Q){var se=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?se+Q:se):Q=se,D){case 1:var Ae=-1;break;case 2:Ae=250;break;case 5:Ae=1073741823;break;case 4:Ae=1e4;break;default:Ae=5e3}return Ae=Q+Ae,D={id:f++,callback:q,priorityLevel:D,startTime:Q,expirationTime:Ae,sortIndex:-1},Q>se?(D.sortIndex=Q,e(c,D),n(l)===null&&D===n(c)&&(y?(u(P),P=-1):y=!0,$(M,Q-se))):(D.sortIndex=Ae,e(l,D),v||m||(v=!0,O(b))),D},t.unstable_shouldYield=E,t.unstable_wrapCallback=function(D){var q=d;return function(){var Q=d;d=q;try{return D.apply(this,arguments)}finally{d=Q}}}})(wm);Tm.exports=wm;var Dv=Tm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nv=$e,mn=Dv;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Am=new Set,uo={};function Cr(t,e){ps(t,e),ps(t+"Capture",e)}function ps(t,e){for(uo[t]=e,t=0;t<e.length;t++)Am.add(e[t])}var hi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ru=Object.prototype.hasOwnProperty,Iv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ih={},rh={};function Uv(t){return ru.call(rh,t)?!0:ru.call(ih,t)?!1:Iv.test(t)?rh[t]=!0:(ih[t]=!0,!1)}function Fv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Ov(t,e,n,i){if(e===null||typeof e>"u"||Fv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function $t(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ot[t]=new $t(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ot[e]=new $t(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ot[t]=new $t(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ot[t]=new $t(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ot[t]=new $t(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ot[t]=new $t(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ot[t]=new $t(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ot[t]=new $t(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ot[t]=new $t(t,5,!1,t.toLowerCase(),null,!1,!1)});var Gf=/[\-:]([a-z])/g;function Wf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Gf,Wf);Ot[e]=new $t(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Gf,Wf);Ot[e]=new $t(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Gf,Wf);Ot[e]=new $t(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ot[t]=new $t(t,1,!1,t.toLowerCase(),null,!1,!1)});Ot.xlinkHref=new $t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ot[t]=new $t(t,1,!1,t.toLowerCase(),null,!0,!0)});function jf(t,e,n,i){var r=Ot.hasOwnProperty(e)?Ot[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Ov(e,n,r,i)&&(n=null),i||r===null?Uv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var vi=Nv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wo=Symbol.for("react.element"),Xr=Symbol.for("react.portal"),Yr=Symbol.for("react.fragment"),Xf=Symbol.for("react.strict_mode"),su=Symbol.for("react.profiler"),Cm=Symbol.for("react.provider"),Rm=Symbol.for("react.context"),Yf=Symbol.for("react.forward_ref"),ou=Symbol.for("react.suspense"),au=Symbol.for("react.suspense_list"),$f=Symbol.for("react.memo"),Ci=Symbol.for("react.lazy"),bm=Symbol.for("react.offscreen"),sh=Symbol.iterator;function Ds(t){return t===null||typeof t!="object"?null:(t=sh&&t[sh]||t["@@iterator"],typeof t=="function"?t:null)}var mt=Object.assign,Jl;function $s(t){if(Jl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Jl=e&&e[1]||""}return`
`+Jl+t}var ec=!1;function tc(t,e){if(!t||ec)return"";ec=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{ec=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?$s(t):""}function kv(t){switch(t.tag){case 5:return $s(t.type);case 16:return $s("Lazy");case 13:return $s("Suspense");case 19:return $s("SuspenseList");case 0:case 2:case 15:return t=tc(t.type,!1),t;case 11:return t=tc(t.type.render,!1),t;case 1:return t=tc(t.type,!0),t;default:return""}}function lu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Yr:return"Fragment";case Xr:return"Portal";case su:return"Profiler";case Xf:return"StrictMode";case ou:return"Suspense";case au:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Rm:return(t.displayName||"Context")+".Consumer";case Cm:return(t._context.displayName||"Context")+".Provider";case Yf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $f:return e=t.displayName||null,e!==null?e:lu(t.type)||"Memo";case Ci:e=t._payload,t=t._init;try{return lu(t(e))}catch{}}return null}function Bv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return lu(e);case 8:return e===Xf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Wi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Pm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function zv(t){var e=Pm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function jo(t){t._valueTracker||(t._valueTracker=zv(t))}function Lm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Pm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Za(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function cu(t,e){var n=e.checked;return mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function oh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Wi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Dm(t,e){e=e.checked,e!=null&&jf(t,"checked",e,!1)}function uu(t,e){Dm(t,e);var n=Wi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?fu(t,e.type,n):e.hasOwnProperty("defaultValue")&&fu(t,e.type,Wi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ah(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function fu(t,e,n){(e!=="number"||Za(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var qs=Array.isArray;function ss(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Wi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function du(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return mt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function lh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(qs(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Wi(n)}}function Nm(t,e){var n=Wi(e.value),i=Wi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function ch(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Im(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Im(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Xo,Um=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Xo=Xo||document.createElement("div"),Xo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Xo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function fo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var eo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hv=["Webkit","ms","Moz","O"];Object.keys(eo).forEach(function(t){Hv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),eo[e]=eo[t]})});function Fm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||eo.hasOwnProperty(t)&&eo[t]?(""+e).trim():e+"px"}function Om(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Fm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Vv=mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pu(t,e){if(e){if(Vv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function mu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gu=null;function qf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var _u=null,os=null,as=null;function uh(t){if(t=No(t)){if(typeof _u!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=Il(e),_u(t.stateNode,t.type,e))}}function km(t){os?as?as.push(t):as=[t]:os=t}function Bm(){if(os){var t=os,e=as;if(as=os=null,uh(t),e)for(t=0;t<e.length;t++)uh(e[t])}}function zm(t,e){return t(e)}function Hm(){}var nc=!1;function Vm(t,e,n){if(nc)return t(e,n);nc=!0;try{return zm(t,e,n)}finally{nc=!1,(os!==null||as!==null)&&(Hm(),Bm())}}function ho(t,e){var n=t.stateNode;if(n===null)return null;var i=Il(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var vu=!1;if(hi)try{var Ns={};Object.defineProperty(Ns,"passive",{get:function(){vu=!0}}),window.addEventListener("test",Ns,Ns),window.removeEventListener("test",Ns,Ns)}catch{vu=!1}function Gv(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var to=!1,Qa=null,Ja=!1,xu=null,Wv={onError:function(t){to=!0,Qa=t}};function jv(t,e,n,i,r,s,o,a,l){to=!1,Qa=null,Gv.apply(Wv,arguments)}function Xv(t,e,n,i,r,s,o,a,l){if(jv.apply(this,arguments),to){if(to){var c=Qa;to=!1,Qa=null}else throw Error(ne(198));Ja||(Ja=!0,xu=c)}}function Rr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Gm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function fh(t){if(Rr(t)!==t)throw Error(ne(188))}function Yv(t){var e=t.alternate;if(!e){if(e=Rr(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return fh(r),t;if(s===i)return fh(r),e;s=s.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function Wm(t){return t=Yv(t),t!==null?jm(t):null}function jm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=jm(t);if(e!==null)return e;t=t.sibling}return null}var Xm=mn.unstable_scheduleCallback,dh=mn.unstable_cancelCallback,$v=mn.unstable_shouldYield,qv=mn.unstable_requestPaint,yt=mn.unstable_now,Kv=mn.unstable_getCurrentPriorityLevel,Kf=mn.unstable_ImmediatePriority,Ym=mn.unstable_UserBlockingPriority,el=mn.unstable_NormalPriority,Zv=mn.unstable_LowPriority,$m=mn.unstable_IdlePriority,Pl=null,Kn=null;function Qv(t){if(Kn&&typeof Kn.onCommitFiberRoot=="function")try{Kn.onCommitFiberRoot(Pl,t,void 0,(t.current.flags&128)===128)}catch{}}var Hn=Math.clz32?Math.clz32:t0,Jv=Math.log,e0=Math.LN2;function t0(t){return t>>>=0,t===0?32:31-(Jv(t)/e0|0)|0}var Yo=64,$o=4194304;function Ks(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function tl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Ks(a):(s&=o,s!==0&&(i=Ks(s)))}else o=n&~r,o!==0?i=Ks(o):s!==0&&(i=Ks(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Hn(e),r=1<<n,i|=t[n],e&=~r;return i}function n0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function i0(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Hn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=n0(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function yu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function qm(){var t=Yo;return Yo<<=1,!(Yo&4194240)&&(Yo=64),t}function ic(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Lo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Hn(e),t[e]=n}function r0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Hn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Zf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Hn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var it=0;function Km(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Zm,Qf,Qm,Jm,eg,Su=!1,qo=[],Ii=null,Ui=null,Fi=null,po=new Map,mo=new Map,bi=[],s0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hh(t,e){switch(t){case"focusin":case"focusout":Ii=null;break;case"dragenter":case"dragleave":Ui=null;break;case"mouseover":case"mouseout":Fi=null;break;case"pointerover":case"pointerout":po.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":mo.delete(e.pointerId)}}function Is(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=No(e),e!==null&&Qf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function o0(t,e,n,i,r){switch(e){case"focusin":return Ii=Is(Ii,t,e,n,i,r),!0;case"dragenter":return Ui=Is(Ui,t,e,n,i,r),!0;case"mouseover":return Fi=Is(Fi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return po.set(s,Is(po.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,mo.set(s,Is(mo.get(s)||null,t,e,n,i,r)),!0}return!1}function tg(t){var e=dr(t.target);if(e!==null){var n=Rr(e);if(n!==null){if(e=n.tag,e===13){if(e=Gm(n),e!==null){t.blockedOn=e,eg(t.priority,function(){Qm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Na(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Mu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);gu=i,n.target.dispatchEvent(i),gu=null}else return e=No(n),e!==null&&Qf(e),t.blockedOn=n,!1;e.shift()}return!0}function ph(t,e,n){Na(t)&&n.delete(e)}function a0(){Su=!1,Ii!==null&&Na(Ii)&&(Ii=null),Ui!==null&&Na(Ui)&&(Ui=null),Fi!==null&&Na(Fi)&&(Fi=null),po.forEach(ph),mo.forEach(ph)}function Us(t,e){t.blockedOn===e&&(t.blockedOn=null,Su||(Su=!0,mn.unstable_scheduleCallback(mn.unstable_NormalPriority,a0)))}function go(t){function e(r){return Us(r,t)}if(0<qo.length){Us(qo[0],t);for(var n=1;n<qo.length;n++){var i=qo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ii!==null&&Us(Ii,t),Ui!==null&&Us(Ui,t),Fi!==null&&Us(Fi,t),po.forEach(e),mo.forEach(e),n=0;n<bi.length;n++)i=bi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<bi.length&&(n=bi[0],n.blockedOn===null);)tg(n),n.blockedOn===null&&bi.shift()}var ls=vi.ReactCurrentBatchConfig,nl=!0;function l0(t,e,n,i){var r=it,s=ls.transition;ls.transition=null;try{it=1,Jf(t,e,n,i)}finally{it=r,ls.transition=s}}function c0(t,e,n,i){var r=it,s=ls.transition;ls.transition=null;try{it=4,Jf(t,e,n,i)}finally{it=r,ls.transition=s}}function Jf(t,e,n,i){if(nl){var r=Mu(t,e,n,i);if(r===null)hc(t,e,i,il,n),hh(t,i);else if(o0(r,t,e,n,i))i.stopPropagation();else if(hh(t,i),e&4&&-1<s0.indexOf(t)){for(;r!==null;){var s=No(r);if(s!==null&&Zm(s),s=Mu(t,e,n,i),s===null&&hc(t,e,i,il,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else hc(t,e,i,null,n)}}var il=null;function Mu(t,e,n,i){if(il=null,t=qf(i),t=dr(t),t!==null)if(e=Rr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Gm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return il=t,null}function ng(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Kv()){case Kf:return 1;case Ym:return 4;case el:case Zv:return 16;case $m:return 536870912;default:return 16}default:return 16}}var Di=null,ed=null,Ia=null;function ig(){if(Ia)return Ia;var t,e=ed,n=e.length,i,r="value"in Di?Di.value:Di.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Ia=r.slice(t,1<i?1-i:void 0)}function Ua(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ko(){return!0}function mh(){return!1}function vn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ko:mh,this.isPropagationStopped=mh,this}return mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ko)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ko)},persist:function(){},isPersistent:Ko}),e}var Rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=vn(Rs),Do=mt({},Rs,{view:0,detail:0}),u0=vn(Do),rc,sc,Fs,Ll=mt({},Do,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fs&&(Fs&&t.type==="mousemove"?(rc=t.screenX-Fs.screenX,sc=t.screenY-Fs.screenY):sc=rc=0,Fs=t),rc)},movementY:function(t){return"movementY"in t?t.movementY:sc}}),gh=vn(Ll),f0=mt({},Ll,{dataTransfer:0}),d0=vn(f0),h0=mt({},Do,{relatedTarget:0}),oc=vn(h0),p0=mt({},Rs,{animationName:0,elapsedTime:0,pseudoElement:0}),m0=vn(p0),g0=mt({},Rs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),_0=vn(g0),v0=mt({},Rs,{data:0}),_h=vn(v0),x0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},y0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},S0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function M0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=S0[t])?!!e[t]:!1}function nd(){return M0}var E0=mt({},Do,{key:function(t){if(t.key){var e=x0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ua(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?y0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nd,charCode:function(t){return t.type==="keypress"?Ua(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ua(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),T0=vn(E0),w0=mt({},Ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vh=vn(w0),A0=mt({},Do,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nd}),C0=vn(A0),R0=mt({},Rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),b0=vn(R0),P0=mt({},Ll,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),L0=vn(P0),D0=[9,13,27,32],id=hi&&"CompositionEvent"in window,no=null;hi&&"documentMode"in document&&(no=document.documentMode);var N0=hi&&"TextEvent"in window&&!no,rg=hi&&(!id||no&&8<no&&11>=no),xh=" ",yh=!1;function sg(t,e){switch(t){case"keyup":return D0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function og(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $r=!1;function I0(t,e){switch(t){case"compositionend":return og(e);case"keypress":return e.which!==32?null:(yh=!0,xh);case"textInput":return t=e.data,t===xh&&yh?null:t;default:return null}}function U0(t,e){if($r)return t==="compositionend"||!id&&sg(t,e)?(t=ig(),Ia=ed=Di=null,$r=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return rg&&e.locale!=="ko"?null:e.data;default:return null}}var F0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!F0[t.type]:e==="textarea"}function ag(t,e,n,i){km(i),e=rl(e,"onChange"),0<e.length&&(n=new td("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var io=null,_o=null;function O0(t){vg(t,0)}function Dl(t){var e=Zr(t);if(Lm(e))return t}function k0(t,e){if(t==="change")return e}var lg=!1;if(hi){var ac;if(hi){var lc="oninput"in document;if(!lc){var Mh=document.createElement("div");Mh.setAttribute("oninput","return;"),lc=typeof Mh.oninput=="function"}ac=lc}else ac=!1;lg=ac&&(!document.documentMode||9<document.documentMode)}function Eh(){io&&(io.detachEvent("onpropertychange",cg),_o=io=null)}function cg(t){if(t.propertyName==="value"&&Dl(_o)){var e=[];ag(e,_o,t,qf(t)),Vm(O0,e)}}function B0(t,e,n){t==="focusin"?(Eh(),io=e,_o=n,io.attachEvent("onpropertychange",cg)):t==="focusout"&&Eh()}function z0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Dl(_o)}function H0(t,e){if(t==="click")return Dl(e)}function V0(t,e){if(t==="input"||t==="change")return Dl(e)}function G0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Gn=typeof Object.is=="function"?Object.is:G0;function vo(t,e){if(Gn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!ru.call(e,r)||!Gn(t[r],e[r]))return!1}return!0}function Th(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wh(t,e){var n=Th(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Th(n)}}function ug(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ug(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function fg(){for(var t=window,e=Za();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Za(t.document)}return e}function rd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function W0(t){var e=fg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ug(n.ownerDocument.documentElement,n)){if(i!==null&&rd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=wh(n,s);var o=wh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var j0=hi&&"documentMode"in document&&11>=document.documentMode,qr=null,Eu=null,ro=null,Tu=!1;function Ah(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Tu||qr==null||qr!==Za(i)||(i=qr,"selectionStart"in i&&rd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ro&&vo(ro,i)||(ro=i,i=rl(Eu,"onSelect"),0<i.length&&(e=new td("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=qr)))}function Zo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Kr={animationend:Zo("Animation","AnimationEnd"),animationiteration:Zo("Animation","AnimationIteration"),animationstart:Zo("Animation","AnimationStart"),transitionend:Zo("Transition","TransitionEnd")},cc={},dg={};hi&&(dg=document.createElement("div").style,"AnimationEvent"in window||(delete Kr.animationend.animation,delete Kr.animationiteration.animation,delete Kr.animationstart.animation),"TransitionEvent"in window||delete Kr.transitionend.transition);function Nl(t){if(cc[t])return cc[t];if(!Kr[t])return t;var e=Kr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in dg)return cc[t]=e[n];return t}var hg=Nl("animationend"),pg=Nl("animationiteration"),mg=Nl("animationstart"),gg=Nl("transitionend"),_g=new Map,Ch="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $i(t,e){_g.set(t,e),Cr(e,[t])}for(var uc=0;uc<Ch.length;uc++){var fc=Ch[uc],X0=fc.toLowerCase(),Y0=fc[0].toUpperCase()+fc.slice(1);$i(X0,"on"+Y0)}$i(hg,"onAnimationEnd");$i(pg,"onAnimationIteration");$i(mg,"onAnimationStart");$i("dblclick","onDoubleClick");$i("focusin","onFocus");$i("focusout","onBlur");$i(gg,"onTransitionEnd");ps("onMouseEnter",["mouseout","mouseover"]);ps("onMouseLeave",["mouseout","mouseover"]);ps("onPointerEnter",["pointerout","pointerover"]);ps("onPointerLeave",["pointerout","pointerover"]);Cr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Cr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Cr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Cr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Cr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Cr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zs));function Rh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Xv(i,e,void 0,t),t.currentTarget=null}function vg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Rh(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Rh(r,a,c),s=l}}}if(Ja)throw t=xu,Ja=!1,xu=null,t}function lt(t,e){var n=e[bu];n===void 0&&(n=e[bu]=new Set);var i=t+"__bubble";n.has(i)||(xg(e,t,2,!1),n.add(i))}function dc(t,e,n){var i=0;e&&(i|=4),xg(n,t,i,e)}var Qo="_reactListening"+Math.random().toString(36).slice(2);function xo(t){if(!t[Qo]){t[Qo]=!0,Am.forEach(function(n){n!=="selectionchange"&&($0.has(n)||dc(n,!1,t),dc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Qo]||(e[Qo]=!0,dc("selectionchange",!1,e))}}function xg(t,e,n,i){switch(ng(e)){case 1:var r=l0;break;case 4:r=c0;break;default:r=Jf}n=r.bind(null,e,n,t),r=void 0,!vu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function hc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=dr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Vm(function(){var c=s,f=qf(n),h=[];e:{var d=_g.get(t);if(d!==void 0){var m=td,v=t;switch(t){case"keypress":if(Ua(n)===0)break e;case"keydown":case"keyup":m=T0;break;case"focusin":v="focus",m=oc;break;case"focusout":v="blur",m=oc;break;case"beforeblur":case"afterblur":m=oc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=gh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=d0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=C0;break;case hg:case pg:case mg:m=m0;break;case gg:m=b0;break;case"scroll":m=u0;break;case"wheel":m=L0;break;case"copy":case"cut":case"paste":m=_0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=vh}var y=(e&4)!==0,p=!y&&t==="scroll",u=y?d!==null?d+"Capture":null:d;y=[];for(var _=c,g;_!==null;){g=_;var M=g.stateNode;if(g.tag===5&&M!==null&&(g=M,u!==null&&(M=ho(_,u),M!=null&&y.push(yo(_,M,g)))),p)break;_=_.return}0<y.length&&(d=new m(d,v,null,n,f),h.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==gu&&(v=n.relatedTarget||n.fromElement)&&(dr(v)||v[pi]))break e;if((m||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=c,v=v?dr(v):null,v!==null&&(p=Rr(v),v!==p||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=c),m!==v)){if(y=gh,M="onMouseLeave",u="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(y=vh,M="onPointerLeave",u="onPointerEnter",_="pointer"),p=m==null?d:Zr(m),g=v==null?d:Zr(v),d=new y(M,_+"leave",m,n,f),d.target=p,d.relatedTarget=g,M=null,dr(f)===c&&(y=new y(u,_+"enter",v,n,f),y.target=g,y.relatedTarget=p,M=y),p=M,m&&v)t:{for(y=m,u=v,_=0,g=y;g;g=Lr(g))_++;for(g=0,M=u;M;M=Lr(M))g++;for(;0<_-g;)y=Lr(y),_--;for(;0<g-_;)u=Lr(u),g--;for(;_--;){if(y===u||u!==null&&y===u.alternate)break t;y=Lr(y),u=Lr(u)}y=null}else y=null;m!==null&&bh(h,d,m,y,!1),v!==null&&p!==null&&bh(h,p,v,y,!0)}}e:{if(d=c?Zr(c):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var b=k0;else if(Sh(d))if(lg)b=V0;else{b=z0;var C=B0}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(b=H0);if(b&&(b=b(t,c))){ag(h,b,n,f);break e}C&&C(t,d,c),t==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&fu(d,"number",d.value)}switch(C=c?Zr(c):window,t){case"focusin":(Sh(C)||C.contentEditable==="true")&&(qr=C,Eu=c,ro=null);break;case"focusout":ro=Eu=qr=null;break;case"mousedown":Tu=!0;break;case"contextmenu":case"mouseup":case"dragend":Tu=!1,Ah(h,n,f);break;case"selectionchange":if(j0)break;case"keydown":case"keyup":Ah(h,n,f)}var w;if(id)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else $r?sg(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(rg&&n.locale!=="ko"&&($r||P!=="onCompositionStart"?P==="onCompositionEnd"&&$r&&(w=ig()):(Di=f,ed="value"in Di?Di.value:Di.textContent,$r=!0)),C=rl(c,P),0<C.length&&(P=new _h(P,t,null,n,f),h.push({event:P,listeners:C}),w?P.data=w:(w=og(n),w!==null&&(P.data=w)))),(w=N0?I0(t,n):U0(t,n))&&(c=rl(c,"onBeforeInput"),0<c.length&&(f=new _h("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:c}),f.data=w))}vg(h,e)})}function yo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function rl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ho(t,n),s!=null&&i.unshift(yo(t,s,r)),s=ho(t,e),s!=null&&i.push(yo(t,s,r))),t=t.return}return i}function Lr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function bh(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=ho(n,s),l!=null&&o.unshift(yo(n,l,a))):r||(l=ho(n,s),l!=null&&o.push(yo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var q0=/\r\n?/g,K0=/\u0000|\uFFFD/g;function Ph(t){return(typeof t=="string"?t:""+t).replace(q0,`
`).replace(K0,"")}function Jo(t,e,n){if(e=Ph(e),Ph(t)!==e&&n)throw Error(ne(425))}function sl(){}var wu=null,Au=null;function Cu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ru=typeof setTimeout=="function"?setTimeout:void 0,Z0=typeof clearTimeout=="function"?clearTimeout:void 0,Lh=typeof Promise=="function"?Promise:void 0,Q0=typeof queueMicrotask=="function"?queueMicrotask:typeof Lh<"u"?function(t){return Lh.resolve(null).then(t).catch(J0)}:Ru;function J0(t){setTimeout(function(){throw t})}function pc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),go(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);go(e)}function Oi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Dh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var bs=Math.random().toString(36).slice(2),$n="__reactFiber$"+bs,So="__reactProps$"+bs,pi="__reactContainer$"+bs,bu="__reactEvents$"+bs,ex="__reactListeners$"+bs,tx="__reactHandles$"+bs;function dr(t){var e=t[$n];if(e)return e;for(var n=t.parentNode;n;){if(e=n[pi]||n[$n]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Dh(t);t!==null;){if(n=t[$n])return n;t=Dh(t)}return e}t=n,n=t.parentNode}return null}function No(t){return t=t[$n]||t[pi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Zr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function Il(t){return t[So]||null}var Pu=[],Qr=-1;function qi(t){return{current:t}}function ut(t){0>Qr||(t.current=Pu[Qr],Pu[Qr]=null,Qr--)}function ot(t,e){Qr++,Pu[Qr]=t.current,t.current=e}var ji={},Gt=qi(ji),tn=qi(!1),xr=ji;function ms(t,e){var n=t.type.contextTypes;if(!n)return ji;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function nn(t){return t=t.childContextTypes,t!=null}function ol(){ut(tn),ut(Gt)}function Nh(t,e,n){if(Gt.current!==ji)throw Error(ne(168));ot(Gt,e),ot(tn,n)}function yg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,Bv(t)||"Unknown",r));return mt({},n,i)}function al(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ji,xr=Gt.current,ot(Gt,t),ot(tn,tn.current),!0}function Ih(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=yg(t,e,xr),i.__reactInternalMemoizedMergedChildContext=t,ut(tn),ut(Gt),ot(Gt,t)):ut(tn),ot(tn,n)}var ai=null,Ul=!1,mc=!1;function Sg(t){ai===null?ai=[t]:ai.push(t)}function nx(t){Ul=!0,Sg(t)}function Ki(){if(!mc&&ai!==null){mc=!0;var t=0,e=it;try{var n=ai;for(it=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ai=null,Ul=!1}catch(r){throw ai!==null&&(ai=ai.slice(t+1)),Xm(Kf,Ki),r}finally{it=e,mc=!1}}return null}var Jr=[],es=0,ll=null,cl=0,Sn=[],Mn=0,yr=null,li=1,ci="";function or(t,e){Jr[es++]=cl,Jr[es++]=ll,ll=t,cl=e}function Mg(t,e,n){Sn[Mn++]=li,Sn[Mn++]=ci,Sn[Mn++]=yr,yr=t;var i=li;t=ci;var r=32-Hn(i)-1;i&=~(1<<r),n+=1;var s=32-Hn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,li=1<<32-Hn(e)+r|n<<r|i,ci=s+t}else li=1<<s|n<<r|i,ci=t}function sd(t){t.return!==null&&(or(t,1),Mg(t,1,0))}function od(t){for(;t===ll;)ll=Jr[--es],Jr[es]=null,cl=Jr[--es],Jr[es]=null;for(;t===yr;)yr=Sn[--Mn],Sn[Mn]=null,ci=Sn[--Mn],Sn[Mn]=null,li=Sn[--Mn],Sn[Mn]=null}var pn=null,hn=null,ft=!1,On=null;function Eg(t,e){var n=Tn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Uh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,pn=t,hn=Oi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,pn=t,hn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=yr!==null?{id:li,overflow:ci}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Tn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,pn=t,hn=null,!0):!1;default:return!1}}function Lu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Du(t){if(ft){var e=hn;if(e){var n=e;if(!Uh(t,e)){if(Lu(t))throw Error(ne(418));e=Oi(n.nextSibling);var i=pn;e&&Uh(t,e)?Eg(i,n):(t.flags=t.flags&-4097|2,ft=!1,pn=t)}}else{if(Lu(t))throw Error(ne(418));t.flags=t.flags&-4097|2,ft=!1,pn=t}}}function Fh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;pn=t}function ea(t){if(t!==pn)return!1;if(!ft)return Fh(t),ft=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Cu(t.type,t.memoizedProps)),e&&(e=hn)){if(Lu(t))throw Tg(),Error(ne(418));for(;e;)Eg(t,e),e=Oi(e.nextSibling)}if(Fh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){hn=Oi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}hn=null}}else hn=pn?Oi(t.stateNode.nextSibling):null;return!0}function Tg(){for(var t=hn;t;)t=Oi(t.nextSibling)}function gs(){hn=pn=null,ft=!1}function ad(t){On===null?On=[t]:On.push(t)}var ix=vi.ReactCurrentBatchConfig;function Os(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function ta(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Oh(t){var e=t._init;return e(t._payload)}function wg(t){function e(u,_){if(t){var g=u.deletions;g===null?(u.deletions=[_],u.flags|=16):g.push(_)}}function n(u,_){if(!t)return null;for(;_!==null;)e(u,_),_=_.sibling;return null}function i(u,_){for(u=new Map;_!==null;)_.key!==null?u.set(_.key,_):u.set(_.index,_),_=_.sibling;return u}function r(u,_){return u=Hi(u,_),u.index=0,u.sibling=null,u}function s(u,_,g){return u.index=g,t?(g=u.alternate,g!==null?(g=g.index,g<_?(u.flags|=2,_):g):(u.flags|=2,_)):(u.flags|=1048576,_)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,_,g,M){return _===null||_.tag!==6?(_=Mc(g,u.mode,M),_.return=u,_):(_=r(_,g),_.return=u,_)}function l(u,_,g,M){var b=g.type;return b===Yr?f(u,_,g.props.children,M,g.key):_!==null&&(_.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Ci&&Oh(b)===_.type)?(M=r(_,g.props),M.ref=Os(u,_,g),M.return=u,M):(M=Va(g.type,g.key,g.props,null,u.mode,M),M.ref=Os(u,_,g),M.return=u,M)}function c(u,_,g,M){return _===null||_.tag!==4||_.stateNode.containerInfo!==g.containerInfo||_.stateNode.implementation!==g.implementation?(_=Ec(g,u.mode,M),_.return=u,_):(_=r(_,g.children||[]),_.return=u,_)}function f(u,_,g,M,b){return _===null||_.tag!==7?(_=vr(g,u.mode,M,b),_.return=u,_):(_=r(_,g),_.return=u,_)}function h(u,_,g){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Mc(""+_,u.mode,g),_.return=u,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Wo:return g=Va(_.type,_.key,_.props,null,u.mode,g),g.ref=Os(u,null,_),g.return=u,g;case Xr:return _=Ec(_,u.mode,g),_.return=u,_;case Ci:var M=_._init;return h(u,M(_._payload),g)}if(qs(_)||Ds(_))return _=vr(_,u.mode,g,null),_.return=u,_;ta(u,_)}return null}function d(u,_,g,M){var b=_!==null?_.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return b!==null?null:a(u,_,""+g,M);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Wo:return g.key===b?l(u,_,g,M):null;case Xr:return g.key===b?c(u,_,g,M):null;case Ci:return b=g._init,d(u,_,b(g._payload),M)}if(qs(g)||Ds(g))return b!==null?null:f(u,_,g,M,null);ta(u,g)}return null}function m(u,_,g,M,b){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(g)||null,a(_,u,""+M,b);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Wo:return u=u.get(M.key===null?g:M.key)||null,l(_,u,M,b);case Xr:return u=u.get(M.key===null?g:M.key)||null,c(_,u,M,b);case Ci:var C=M._init;return m(u,_,g,C(M._payload),b)}if(qs(M)||Ds(M))return u=u.get(g)||null,f(_,u,M,b,null);ta(_,M)}return null}function v(u,_,g,M){for(var b=null,C=null,w=_,P=_=0,H=null;w!==null&&P<g.length;P++){w.index>P?(H=w,w=null):H=w.sibling;var x=d(u,w,g[P],M);if(x===null){w===null&&(w=H);break}t&&w&&x.alternate===null&&e(u,w),_=s(x,_,P),C===null?b=x:C.sibling=x,C=x,w=H}if(P===g.length)return n(u,w),ft&&or(u,P),b;if(w===null){for(;P<g.length;P++)w=h(u,g[P],M),w!==null&&(_=s(w,_,P),C===null?b=w:C.sibling=w,C=w);return ft&&or(u,P),b}for(w=i(u,w);P<g.length;P++)H=m(w,u,P,g[P],M),H!==null&&(t&&H.alternate!==null&&w.delete(H.key===null?P:H.key),_=s(H,_,P),C===null?b=H:C.sibling=H,C=H);return t&&w.forEach(function(E){return e(u,E)}),ft&&or(u,P),b}function y(u,_,g,M){var b=Ds(g);if(typeof b!="function")throw Error(ne(150));if(g=b.call(g),g==null)throw Error(ne(151));for(var C=b=null,w=_,P=_=0,H=null,x=g.next();w!==null&&!x.done;P++,x=g.next()){w.index>P?(H=w,w=null):H=w.sibling;var E=d(u,w,x.value,M);if(E===null){w===null&&(w=H);break}t&&w&&E.alternate===null&&e(u,w),_=s(E,_,P),C===null?b=E:C.sibling=E,C=E,w=H}if(x.done)return n(u,w),ft&&or(u,P),b;if(w===null){for(;!x.done;P++,x=g.next())x=h(u,x.value,M),x!==null&&(_=s(x,_,P),C===null?b=x:C.sibling=x,C=x);return ft&&or(u,P),b}for(w=i(u,w);!x.done;P++,x=g.next())x=m(w,u,P,x.value,M),x!==null&&(t&&x.alternate!==null&&w.delete(x.key===null?P:x.key),_=s(x,_,P),C===null?b=x:C.sibling=x,C=x);return t&&w.forEach(function(z){return e(u,z)}),ft&&or(u,P),b}function p(u,_,g,M){if(typeof g=="object"&&g!==null&&g.type===Yr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Wo:e:{for(var b=g.key,C=_;C!==null;){if(C.key===b){if(b=g.type,b===Yr){if(C.tag===7){n(u,C.sibling),_=r(C,g.props.children),_.return=u,u=_;break e}}else if(C.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Ci&&Oh(b)===C.type){n(u,C.sibling),_=r(C,g.props),_.ref=Os(u,C,g),_.return=u,u=_;break e}n(u,C);break}else e(u,C);C=C.sibling}g.type===Yr?(_=vr(g.props.children,u.mode,M,g.key),_.return=u,u=_):(M=Va(g.type,g.key,g.props,null,u.mode,M),M.ref=Os(u,_,g),M.return=u,u=M)}return o(u);case Xr:e:{for(C=g.key;_!==null;){if(_.key===C)if(_.tag===4&&_.stateNode.containerInfo===g.containerInfo&&_.stateNode.implementation===g.implementation){n(u,_.sibling),_=r(_,g.children||[]),_.return=u,u=_;break e}else{n(u,_);break}else e(u,_);_=_.sibling}_=Ec(g,u.mode,M),_.return=u,u=_}return o(u);case Ci:return C=g._init,p(u,_,C(g._payload),M)}if(qs(g))return v(u,_,g,M);if(Ds(g))return y(u,_,g,M);ta(u,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,_!==null&&_.tag===6?(n(u,_.sibling),_=r(_,g),_.return=u,u=_):(n(u,_),_=Mc(g,u.mode,M),_.return=u,u=_),o(u)):n(u,_)}return p}var _s=wg(!0),Ag=wg(!1),ul=qi(null),fl=null,ts=null,ld=null;function cd(){ld=ts=fl=null}function ud(t){var e=ul.current;ut(ul),t._currentValue=e}function Nu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function cs(t,e){fl=t,ld=ts=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(en=!0),t.firstContext=null)}function Rn(t){var e=t._currentValue;if(ld!==t)if(t={context:t,memoizedValue:e,next:null},ts===null){if(fl===null)throw Error(ne(308));ts=t,fl.dependencies={lanes:0,firstContext:t}}else ts=ts.next=t;return e}var hr=null;function fd(t){hr===null?hr=[t]:hr.push(t)}function Cg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,fd(e)):(n.next=r.next,r.next=n),e.interleaved=n,mi(t,i)}function mi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ri=!1;function dd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function di(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ki(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,mi(t,n)}return r=i.interleaved,r===null?(e.next=e,fd(i)):(e.next=r.next,r.next=e),i.interleaved=e,mi(t,n)}function Fa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Zf(t,n)}}function kh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function dl(t,e,n,i){var r=t.updateQueue;Ri=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,f=c=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,y=a;switch(d=e,m=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){h=v.call(m,h,d);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,d=typeof v=="function"?v.call(m,h,d):v,d==null)break e;h=mt({},h,d);break e;case 2:Ri=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=m,l=h):f=f.next=m,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Mr|=o,t.lanes=o,t.memoizedState=h}}function Bh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var Io={},Zn=qi(Io),Mo=qi(Io),Eo=qi(Io);function pr(t){if(t===Io)throw Error(ne(174));return t}function hd(t,e){switch(ot(Eo,e),ot(Mo,t),ot(Zn,Io),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:hu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=hu(e,t)}ut(Zn),ot(Zn,e)}function vs(){ut(Zn),ut(Mo),ut(Eo)}function bg(t){pr(Eo.current);var e=pr(Zn.current),n=hu(e,t.type);e!==n&&(ot(Mo,t),ot(Zn,n))}function pd(t){Mo.current===t&&(ut(Zn),ut(Mo))}var ht=qi(0);function hl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var gc=[];function md(){for(var t=0;t<gc.length;t++)gc[t]._workInProgressVersionPrimary=null;gc.length=0}var Oa=vi.ReactCurrentDispatcher,_c=vi.ReactCurrentBatchConfig,Sr=0,pt=null,Tt=null,Pt=null,pl=!1,so=!1,To=0,rx=0;function kt(){throw Error(ne(321))}function gd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Gn(t[n],e[n]))return!1;return!0}function _d(t,e,n,i,r,s){if(Sr=s,pt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Oa.current=t===null||t.memoizedState===null?lx:cx,t=n(i,r),so){s=0;do{if(so=!1,To=0,25<=s)throw Error(ne(301));s+=1,Pt=Tt=null,e.updateQueue=null,Oa.current=ux,t=n(i,r)}while(so)}if(Oa.current=ml,e=Tt!==null&&Tt.next!==null,Sr=0,Pt=Tt=pt=null,pl=!1,e)throw Error(ne(300));return t}function vd(){var t=To!==0;return To=0,t}function jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pt===null?pt.memoizedState=Pt=t:Pt=Pt.next=t,Pt}function bn(){if(Tt===null){var t=pt.alternate;t=t!==null?t.memoizedState:null}else t=Tt.next;var e=Pt===null?pt.memoizedState:Pt.next;if(e!==null)Pt=e,Tt=t;else{if(t===null)throw Error(ne(310));Tt=t,t={memoizedState:Tt.memoizedState,baseState:Tt.baseState,baseQueue:Tt.baseQueue,queue:Tt.queue,next:null},Pt===null?pt.memoizedState=Pt=t:Pt=Pt.next=t}return Pt}function wo(t,e){return typeof e=="function"?e(t):e}function vc(t){var e=bn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=Tt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((Sr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,pt.lanes|=f,Mr|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Gn(i,e.memoizedState)||(en=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,pt.lanes|=s,Mr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function xc(t){var e=bn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Gn(s,e.memoizedState)||(en=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Pg(){}function Lg(t,e){var n=pt,i=bn(),r=e(),s=!Gn(i.memoizedState,r);if(s&&(i.memoizedState=r,en=!0),i=i.queue,xd(Ig.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Pt!==null&&Pt.memoizedState.tag&1){if(n.flags|=2048,Ao(9,Ng.bind(null,n,i,r,e),void 0,null),Dt===null)throw Error(ne(349));Sr&30||Dg(n,e,r)}return r}function Dg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=pt.updateQueue,e===null?(e={lastEffect:null,stores:null},pt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ng(t,e,n,i){e.value=n,e.getSnapshot=i,Ug(e)&&Fg(t)}function Ig(t,e,n){return n(function(){Ug(e)&&Fg(t)})}function Ug(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Gn(t,n)}catch{return!0}}function Fg(t){var e=mi(t,1);e!==null&&Vn(e,t,1,-1)}function zh(t){var e=jn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wo,lastRenderedState:t},e.queue=t,t=t.dispatch=ax.bind(null,pt,t),[e.memoizedState,t]}function Ao(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=pt.updateQueue,e===null?(e={lastEffect:null,stores:null},pt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Og(){return bn().memoizedState}function ka(t,e,n,i){var r=jn();pt.flags|=t,r.memoizedState=Ao(1|e,n,void 0,i===void 0?null:i)}function Fl(t,e,n,i){var r=bn();i=i===void 0?null:i;var s=void 0;if(Tt!==null){var o=Tt.memoizedState;if(s=o.destroy,i!==null&&gd(i,o.deps)){r.memoizedState=Ao(e,n,s,i);return}}pt.flags|=t,r.memoizedState=Ao(1|e,n,s,i)}function Hh(t,e){return ka(8390656,8,t,e)}function xd(t,e){return Fl(2048,8,t,e)}function kg(t,e){return Fl(4,2,t,e)}function Bg(t,e){return Fl(4,4,t,e)}function zg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Hg(t,e,n){return n=n!=null?n.concat([t]):null,Fl(4,4,zg.bind(null,e,t),n)}function yd(){}function Vg(t,e){var n=bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&gd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Gg(t,e){var n=bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&gd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Wg(t,e,n){return Sr&21?(Gn(n,e)||(n=qm(),pt.lanes|=n,Mr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,en=!0),t.memoizedState=n)}function sx(t,e){var n=it;it=n!==0&&4>n?n:4,t(!0);var i=_c.transition;_c.transition={};try{t(!1),e()}finally{it=n,_c.transition=i}}function jg(){return bn().memoizedState}function ox(t,e,n){var i=zi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Xg(t))Yg(e,n);else if(n=Cg(t,e,n,i),n!==null){var r=Xt();Vn(n,t,i,r),$g(n,e,i)}}function ax(t,e,n){var i=zi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Xg(t))Yg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Gn(a,o)){var l=e.interleaved;l===null?(r.next=r,fd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Cg(t,e,r,i),n!==null&&(r=Xt(),Vn(n,t,i,r),$g(n,e,i))}}function Xg(t){var e=t.alternate;return t===pt||e!==null&&e===pt}function Yg(t,e){so=pl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function $g(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Zf(t,n)}}var ml={readContext:Rn,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useInsertionEffect:kt,useLayoutEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useMutableSource:kt,useSyncExternalStore:kt,useId:kt,unstable_isNewReconciler:!1},lx={readContext:Rn,useCallback:function(t,e){return jn().memoizedState=[t,e===void 0?null:e],t},useContext:Rn,useEffect:Hh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ka(4194308,4,zg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ka(4194308,4,t,e)},useInsertionEffect:function(t,e){return ka(4,2,t,e)},useMemo:function(t,e){var n=jn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=jn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=ox.bind(null,pt,t),[i.memoizedState,t]},useRef:function(t){var e=jn();return t={current:t},e.memoizedState=t},useState:zh,useDebugValue:yd,useDeferredValue:function(t){return jn().memoizedState=t},useTransition:function(){var t=zh(!1),e=t[0];return t=sx.bind(null,t[1]),jn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=pt,r=jn();if(ft){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),Dt===null)throw Error(ne(349));Sr&30||Dg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Hh(Ig.bind(null,i,s,t),[t]),i.flags|=2048,Ao(9,Ng.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=jn(),e=Dt.identifierPrefix;if(ft){var n=ci,i=li;n=(i&~(1<<32-Hn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=To++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=rx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},cx={readContext:Rn,useCallback:Vg,useContext:Rn,useEffect:xd,useImperativeHandle:Hg,useInsertionEffect:kg,useLayoutEffect:Bg,useMemo:Gg,useReducer:vc,useRef:Og,useState:function(){return vc(wo)},useDebugValue:yd,useDeferredValue:function(t){var e=bn();return Wg(e,Tt.memoizedState,t)},useTransition:function(){var t=vc(wo)[0],e=bn().memoizedState;return[t,e]},useMutableSource:Pg,useSyncExternalStore:Lg,useId:jg,unstable_isNewReconciler:!1},ux={readContext:Rn,useCallback:Vg,useContext:Rn,useEffect:xd,useImperativeHandle:Hg,useInsertionEffect:kg,useLayoutEffect:Bg,useMemo:Gg,useReducer:xc,useRef:Og,useState:function(){return xc(wo)},useDebugValue:yd,useDeferredValue:function(t){var e=bn();return Tt===null?e.memoizedState=t:Wg(e,Tt.memoizedState,t)},useTransition:function(){var t=xc(wo)[0],e=bn().memoizedState;return[t,e]},useMutableSource:Pg,useSyncExternalStore:Lg,useId:jg,unstable_isNewReconciler:!1};function Un(t,e){if(t&&t.defaultProps){e=mt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Iu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:mt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ol={isMounted:function(t){return(t=t._reactInternals)?Rr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Xt(),r=zi(t),s=di(i,r);s.payload=e,n!=null&&(s.callback=n),e=ki(t,s,r),e!==null&&(Vn(e,t,r,i),Fa(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Xt(),r=zi(t),s=di(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ki(t,s,r),e!==null&&(Vn(e,t,r,i),Fa(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Xt(),i=zi(t),r=di(n,i);r.tag=2,e!=null&&(r.callback=e),e=ki(t,r,i),e!==null&&(Vn(e,t,i,n),Fa(e,t,i))}};function Vh(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!vo(n,i)||!vo(r,s):!0}function qg(t,e,n){var i=!1,r=ji,s=e.contextType;return typeof s=="object"&&s!==null?s=Rn(s):(r=nn(e)?xr:Gt.current,i=e.contextTypes,s=(i=i!=null)?ms(t,r):ji),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ol,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Gh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Ol.enqueueReplaceState(e,e.state,null)}function Uu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},dd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Rn(s):(s=nn(e)?xr:Gt.current,r.context=ms(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Iu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ol.enqueueReplaceState(r,r.state,null),dl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function xs(t,e){try{var n="",i=e;do n+=kv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function yc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Fu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var fx=typeof WeakMap=="function"?WeakMap:Map;function Kg(t,e,n){n=di(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){_l||(_l=!0,Xu=i),Fu(t,e)},n}function Zg(t,e,n){n=di(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Fu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Fu(t,e),typeof i!="function"&&(Bi===null?Bi=new Set([this]):Bi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Wh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new fx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=wx.bind(null,t,e,n),e.then(t,t))}function jh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Xh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=di(-1,1),e.tag=2,ki(n,e,1))),n.lanes|=1),t)}var dx=vi.ReactCurrentOwner,en=!1;function jt(t,e,n,i){e.child=t===null?Ag(e,null,n,i):_s(e,t.child,n,i)}function Yh(t,e,n,i,r){n=n.render;var s=e.ref;return cs(e,r),i=_d(t,e,n,i,s,r),n=vd(),t!==null&&!en?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,gi(t,e,r)):(ft&&n&&sd(e),e.flags|=1,jt(t,e,i,r),e.child)}function $h(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Rd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Qg(t,e,s,i,r)):(t=Va(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:vo,n(o,i)&&t.ref===e.ref)return gi(t,e,r)}return e.flags|=1,t=Hi(s,i),t.ref=e.ref,t.return=e,e.child=t}function Qg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(vo(s,i)&&t.ref===e.ref)if(en=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(en=!0);else return e.lanes=t.lanes,gi(t,e,r)}return Ou(t,e,n,i,r)}function Jg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ot(is,dn),dn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ot(is,dn),dn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ot(is,dn),dn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ot(is,dn),dn|=i;return jt(t,e,r,n),e.child}function e_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ou(t,e,n,i,r){var s=nn(n)?xr:Gt.current;return s=ms(e,s),cs(e,r),n=_d(t,e,n,i,s,r),i=vd(),t!==null&&!en?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,gi(t,e,r)):(ft&&i&&sd(e),e.flags|=1,jt(t,e,n,r),e.child)}function qh(t,e,n,i,r){if(nn(n)){var s=!0;al(e)}else s=!1;if(cs(e,r),e.stateNode===null)Ba(t,e),qg(e,n,i),Uu(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Rn(c):(c=nn(n)?xr:Gt.current,c=ms(e,c));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Gh(e,o,i,c),Ri=!1;var d=e.memoizedState;o.state=d,dl(e,i,o,r),l=e.memoizedState,a!==i||d!==l||tn.current||Ri?(typeof f=="function"&&(Iu(e,n,f,i),l=e.memoizedState),(a=Ri||Vh(e,n,a,i,d,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Rg(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Un(e.type,a),o.props=c,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Rn(l):(l=nn(n)?xr:Gt.current,l=ms(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Gh(e,o,i,l),Ri=!1,d=e.memoizedState,o.state=d,dl(e,i,o,r);var v=e.memoizedState;a!==h||d!==v||tn.current||Ri?(typeof m=="function"&&(Iu(e,n,m,i),v=e.memoizedState),(c=Ri||Vh(e,n,c,i,d,v,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return ku(t,e,n,i,s,r)}function ku(t,e,n,i,r,s){e_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Ih(e,n,!1),gi(t,e,s);i=e.stateNode,dx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=_s(e,t.child,null,s),e.child=_s(e,null,a,s)):jt(t,e,a,s),e.memoizedState=i.state,r&&Ih(e,n,!0),e.child}function t_(t){var e=t.stateNode;e.pendingContext?Nh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Nh(t,e.context,!1),hd(t,e.containerInfo)}function Kh(t,e,n,i,r){return gs(),ad(r),e.flags|=256,jt(t,e,n,i),e.child}var Bu={dehydrated:null,treeContext:null,retryLane:0};function zu(t){return{baseLanes:t,cachePool:null,transitions:null}}function n_(t,e,n){var i=e.pendingProps,r=ht.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ot(ht,r&1),t===null)return Du(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=zl(o,i,0,null),t=vr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=zu(n),e.memoizedState=Bu,t):Sd(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return hx(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Hi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Hi(a,s):(s=vr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?zu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Bu,i}return s=t.child,t=s.sibling,i=Hi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Sd(t,e){return e=zl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function na(t,e,n,i){return i!==null&&ad(i),_s(e,t.child,null,n),t=Sd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function hx(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=yc(Error(ne(422))),na(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=zl({mode:"visible",children:i.children},r,0,null),s=vr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&_s(e,t.child,null,o),e.child.memoizedState=zu(o),e.memoizedState=Bu,s);if(!(e.mode&1))return na(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ne(419)),i=yc(s,i,void 0),na(t,e,o,i)}if(a=(o&t.childLanes)!==0,en||a){if(i=Dt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,mi(t,r),Vn(i,t,r,-1))}return Cd(),i=yc(Error(ne(421))),na(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Ax.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,hn=Oi(r.nextSibling),pn=e,ft=!0,On=null,t!==null&&(Sn[Mn++]=li,Sn[Mn++]=ci,Sn[Mn++]=yr,li=t.id,ci=t.overflow,yr=e),e=Sd(e,i.children),e.flags|=4096,e)}function Zh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Nu(t.return,e,n)}function Sc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function i_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(jt(t,e,i.children,n),i=ht.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Zh(t,n,e);else if(t.tag===19)Zh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ot(ht,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&hl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Sc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&hl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Sc(e,!0,n,null,s);break;case"together":Sc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ba(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function gi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Mr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=Hi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Hi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function px(t,e,n){switch(e.tag){case 3:t_(e),gs();break;case 5:bg(e);break;case 1:nn(e.type)&&al(e);break;case 4:hd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ot(ul,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ot(ht,ht.current&1),e.flags|=128,null):n&e.child.childLanes?n_(t,e,n):(ot(ht,ht.current&1),t=gi(t,e,n),t!==null?t.sibling:null);ot(ht,ht.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return i_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ot(ht,ht.current),i)break;return null;case 22:case 23:return e.lanes=0,Jg(t,e,n)}return gi(t,e,n)}var r_,Hu,s_,o_;r_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Hu=function(){};s_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,pr(Zn.current);var s=null;switch(n){case"input":r=cu(t,r),i=cu(t,i),s=[];break;case"select":r=mt({},r,{value:void 0}),i=mt({},i,{value:void 0}),s=[];break;case"textarea":r=du(t,r),i=du(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=sl)}pu(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(uo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(uo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&lt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};o_=function(t,e,n,i){n!==i&&(e.flags|=4)};function ks(t,e){if(!ft)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Bt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function mx(t,e,n){var i=e.pendingProps;switch(od(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(e),null;case 1:return nn(e.type)&&ol(),Bt(e),null;case 3:return i=e.stateNode,vs(),ut(tn),ut(Gt),md(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ea(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,On!==null&&(qu(On),On=null))),Hu(t,e),Bt(e),null;case 5:pd(e);var r=pr(Eo.current);if(n=e.type,t!==null&&e.stateNode!=null)s_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return Bt(e),null}if(t=pr(Zn.current),ea(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[$n]=e,i[So]=s,t=(e.mode&1)!==0,n){case"dialog":lt("cancel",i),lt("close",i);break;case"iframe":case"object":case"embed":lt("load",i);break;case"video":case"audio":for(r=0;r<Zs.length;r++)lt(Zs[r],i);break;case"source":lt("error",i);break;case"img":case"image":case"link":lt("error",i),lt("load",i);break;case"details":lt("toggle",i);break;case"input":oh(i,s),lt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},lt("invalid",i);break;case"textarea":lh(i,s),lt("invalid",i)}pu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Jo(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Jo(i.textContent,a,t),r=["children",""+a]):uo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&lt("scroll",i)}switch(n){case"input":jo(i),ah(i,s,!0);break;case"textarea":jo(i),ch(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=sl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Im(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[$n]=e,t[So]=i,r_(t,e,!1,!1),e.stateNode=t;e:{switch(o=mu(n,i),n){case"dialog":lt("cancel",t),lt("close",t),r=i;break;case"iframe":case"object":case"embed":lt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Zs.length;r++)lt(Zs[r],t);r=i;break;case"source":lt("error",t),r=i;break;case"img":case"image":case"link":lt("error",t),lt("load",t),r=i;break;case"details":lt("toggle",t),r=i;break;case"input":oh(t,i),r=cu(t,i),lt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=mt({},i,{value:void 0}),lt("invalid",t);break;case"textarea":lh(t,i),r=du(t,i),lt("invalid",t);break;default:r=i}pu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Om(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Um(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&fo(t,l):typeof l=="number"&&fo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(uo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&lt("scroll",t):l!=null&&jf(t,s,l,o))}switch(n){case"input":jo(t),ah(t,i,!1);break;case"textarea":jo(t),ch(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Wi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ss(t,!!i.multiple,s,!1):i.defaultValue!=null&&ss(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=sl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Bt(e),null;case 6:if(t&&e.stateNode!=null)o_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=pr(Eo.current),pr(Zn.current),ea(e)){if(i=e.stateNode,n=e.memoizedProps,i[$n]=e,(s=i.nodeValue!==n)&&(t=pn,t!==null))switch(t.tag){case 3:Jo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Jo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[$n]=e,e.stateNode=i}return Bt(e),null;case 13:if(ut(ht),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ft&&hn!==null&&e.mode&1&&!(e.flags&128))Tg(),gs(),e.flags|=98560,s=!1;else if(s=ea(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[$n]=e}else gs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Bt(e),s=!1}else On!==null&&(qu(On),On=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ht.current&1?wt===0&&(wt=3):Cd())),e.updateQueue!==null&&(e.flags|=4),Bt(e),null);case 4:return vs(),Hu(t,e),t===null&&xo(e.stateNode.containerInfo),Bt(e),null;case 10:return ud(e.type._context),Bt(e),null;case 17:return nn(e.type)&&ol(),Bt(e),null;case 19:if(ut(ht),s=e.memoizedState,s===null)return Bt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)ks(s,!1);else{if(wt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=hl(t),o!==null){for(e.flags|=128,ks(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ot(ht,ht.current&1|2),e.child}t=t.sibling}s.tail!==null&&yt()>ys&&(e.flags|=128,i=!0,ks(s,!1),e.lanes=4194304)}else{if(!i)if(t=hl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ks(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ft)return Bt(e),null}else 2*yt()-s.renderingStartTime>ys&&n!==1073741824&&(e.flags|=128,i=!0,ks(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=yt(),e.sibling=null,n=ht.current,ot(ht,i?n&1|2:n&1),e):(Bt(e),null);case 22:case 23:return Ad(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?dn&1073741824&&(Bt(e),e.subtreeFlags&6&&(e.flags|=8192)):Bt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function gx(t,e){switch(od(e),e.tag){case 1:return nn(e.type)&&ol(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return vs(),ut(tn),ut(Gt),md(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return pd(e),null;case 13:if(ut(ht),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));gs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ut(ht),null;case 4:return vs(),null;case 10:return ud(e.type._context),null;case 22:case 23:return Ad(),null;case 24:return null;default:return null}}var ia=!1,Vt=!1,_x=typeof WeakSet=="function"?WeakSet:Set,ge=null;function ns(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){_t(t,e,i)}else n.current=null}function Vu(t,e,n){try{n()}catch(i){_t(t,e,i)}}var Qh=!1;function vx(t,e){if(wu=nl,t=fg(),rd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,h=t,d=null;t:for(;;){for(var m;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++f===i&&(l=o),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Au={focusedElem:t,selectionRange:n},nl=!1,ge=e;ge!==null;)if(e=ge,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ge=t;else for(;ge!==null;){e=ge;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,p=v.memoizedState,u=e.stateNode,_=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:Un(e.type,y),p);u.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(M){_t(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,ge=t;break}ge=e.return}return v=Qh,Qh=!1,v}function oo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Vu(e,n,s)}r=r.next}while(r!==i)}}function kl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Gu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function a_(t){var e=t.alternate;e!==null&&(t.alternate=null,a_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[$n],delete e[So],delete e[bu],delete e[ex],delete e[tx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function l_(t){return t.tag===5||t.tag===3||t.tag===4}function Jh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||l_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Wu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=sl));else if(i!==4&&(t=t.child,t!==null))for(Wu(t,e,n),t=t.sibling;t!==null;)Wu(t,e,n),t=t.sibling}function ju(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(ju(t,e,n),t=t.sibling;t!==null;)ju(t,e,n),t=t.sibling}var It=null,Fn=!1;function yi(t,e,n){for(n=n.child;n!==null;)c_(t,e,n),n=n.sibling}function c_(t,e,n){if(Kn&&typeof Kn.onCommitFiberUnmount=="function")try{Kn.onCommitFiberUnmount(Pl,n)}catch{}switch(n.tag){case 5:Vt||ns(n,e);case 6:var i=It,r=Fn;It=null,yi(t,e,n),It=i,Fn=r,It!==null&&(Fn?(t=It,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):It.removeChild(n.stateNode));break;case 18:It!==null&&(Fn?(t=It,n=n.stateNode,t.nodeType===8?pc(t.parentNode,n):t.nodeType===1&&pc(t,n),go(t)):pc(It,n.stateNode));break;case 4:i=It,r=Fn,It=n.stateNode.containerInfo,Fn=!0,yi(t,e,n),It=i,Fn=r;break;case 0:case 11:case 14:case 15:if(!Vt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Vu(n,e,o),r=r.next}while(r!==i)}yi(t,e,n);break;case 1:if(!Vt&&(ns(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){_t(n,e,a)}yi(t,e,n);break;case 21:yi(t,e,n);break;case 22:n.mode&1?(Vt=(i=Vt)||n.memoizedState!==null,yi(t,e,n),Vt=i):yi(t,e,n);break;default:yi(t,e,n)}}function ep(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new _x),e.forEach(function(i){var r=Cx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Ln(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:It=a.stateNode,Fn=!1;break e;case 3:It=a.stateNode.containerInfo,Fn=!0;break e;case 4:It=a.stateNode.containerInfo,Fn=!0;break e}a=a.return}if(It===null)throw Error(ne(160));c_(s,o,r),It=null,Fn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){_t(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)u_(e,t),e=e.sibling}function u_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ln(e,t),Wn(t),i&4){try{oo(3,t,t.return),kl(3,t)}catch(y){_t(t,t.return,y)}try{oo(5,t,t.return)}catch(y){_t(t,t.return,y)}}break;case 1:Ln(e,t),Wn(t),i&512&&n!==null&&ns(n,n.return);break;case 5:if(Ln(e,t),Wn(t),i&512&&n!==null&&ns(n,n.return),t.flags&32){var r=t.stateNode;try{fo(r,"")}catch(y){_t(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Dm(r,s),mu(a,o);var c=mu(a,s);for(o=0;o<l.length;o+=2){var f=l[o],h=l[o+1];f==="style"?Om(r,h):f==="dangerouslySetInnerHTML"?Um(r,h):f==="children"?fo(r,h):jf(r,f,h,c)}switch(a){case"input":uu(r,s);break;case"textarea":Nm(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?ss(r,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?ss(r,!!s.multiple,s.defaultValue,!0):ss(r,!!s.multiple,s.multiple?[]:"",!1))}r[So]=s}catch(y){_t(t,t.return,y)}}break;case 6:if(Ln(e,t),Wn(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){_t(t,t.return,y)}}break;case 3:if(Ln(e,t),Wn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{go(e.containerInfo)}catch(y){_t(t,t.return,y)}break;case 4:Ln(e,t),Wn(t);break;case 13:Ln(e,t),Wn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Td=yt())),i&4&&ep(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Vt=(c=Vt)||f,Ln(e,t),Vt=c):Ln(e,t),Wn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(ge=t,f=t.child;f!==null;){for(h=ge=f;ge!==null;){switch(d=ge,m=d.child,d.tag){case 0:case 11:case 14:case 15:oo(4,d,d.return);break;case 1:ns(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){_t(i,n,y)}}break;case 5:ns(d,d.return);break;case 22:if(d.memoizedState!==null){np(h);continue}}m!==null?(m.return=d,ge=m):np(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Fm("display",o))}catch(y){_t(t,t.return,y)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(y){_t(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ln(e,t),Wn(t),i&4&&ep(t);break;case 21:break;default:Ln(e,t),Wn(t)}}function Wn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(l_(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(fo(r,""),i.flags&=-33);var s=Jh(t);ju(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Jh(t);Wu(t,a,o);break;default:throw Error(ne(161))}}catch(l){_t(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function xx(t,e,n){ge=t,f_(t)}function f_(t,e,n){for(var i=(t.mode&1)!==0;ge!==null;){var r=ge,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ia;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Vt;a=ia;var c=Vt;if(ia=o,(Vt=l)&&!c)for(ge=r;ge!==null;)o=ge,l=o.child,o.tag===22&&o.memoizedState!==null?ip(r):l!==null?(l.return=o,ge=l):ip(r);for(;s!==null;)ge=s,f_(s),s=s.sibling;ge=r,ia=a,Vt=c}tp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ge=s):tp(t)}}function tp(t){for(;ge!==null;){var e=ge;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Vt||kl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Vt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Un(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Bh(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Bh(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&go(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}Vt||e.flags&512&&Gu(e)}catch(d){_t(e,e.return,d)}}if(e===t){ge=null;break}if(n=e.sibling,n!==null){n.return=e.return,ge=n;break}ge=e.return}}function np(t){for(;ge!==null;){var e=ge;if(e===t){ge=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ge=n;break}ge=e.return}}function ip(t){for(;ge!==null;){var e=ge;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{kl(4,e)}catch(l){_t(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){_t(e,r,l)}}var s=e.return;try{Gu(e)}catch(l){_t(e,s,l)}break;case 5:var o=e.return;try{Gu(e)}catch(l){_t(e,o,l)}}}catch(l){_t(e,e.return,l)}if(e===t){ge=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ge=a;break}ge=e.return}}var yx=Math.ceil,gl=vi.ReactCurrentDispatcher,Md=vi.ReactCurrentOwner,An=vi.ReactCurrentBatchConfig,qe=0,Dt=null,Et=null,Ft=0,dn=0,is=qi(0),wt=0,Co=null,Mr=0,Bl=0,Ed=0,ao=null,Qt=null,Td=0,ys=1/0,oi=null,_l=!1,Xu=null,Bi=null,ra=!1,Ni=null,vl=0,lo=0,Yu=null,za=-1,Ha=0;function Xt(){return qe&6?yt():za!==-1?za:za=yt()}function zi(t){return t.mode&1?qe&2&&Ft!==0?Ft&-Ft:ix.transition!==null?(Ha===0&&(Ha=qm()),Ha):(t=it,t!==0||(t=window.event,t=t===void 0?16:ng(t.type)),t):1}function Vn(t,e,n,i){if(50<lo)throw lo=0,Yu=null,Error(ne(185));Lo(t,n,i),(!(qe&2)||t!==Dt)&&(t===Dt&&(!(qe&2)&&(Bl|=n),wt===4&&Pi(t,Ft)),rn(t,i),n===1&&qe===0&&!(e.mode&1)&&(ys=yt()+500,Ul&&Ki()))}function rn(t,e){var n=t.callbackNode;i0(t,e);var i=tl(t,t===Dt?Ft:0);if(i===0)n!==null&&dh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&dh(n),e===1)t.tag===0?nx(rp.bind(null,t)):Sg(rp.bind(null,t)),Q0(function(){!(qe&6)&&Ki()}),n=null;else{switch(Km(i)){case 1:n=Kf;break;case 4:n=Ym;break;case 16:n=el;break;case 536870912:n=$m;break;default:n=el}n=x_(n,d_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function d_(t,e){if(za=-1,Ha=0,qe&6)throw Error(ne(327));var n=t.callbackNode;if(us()&&t.callbackNode!==n)return null;var i=tl(t,t===Dt?Ft:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=xl(t,i);else{e=i;var r=qe;qe|=2;var s=p_();(Dt!==t||Ft!==e)&&(oi=null,ys=yt()+500,_r(t,e));do try{Ex();break}catch(a){h_(t,a)}while(!0);cd(),gl.current=s,qe=r,Et!==null?e=0:(Dt=null,Ft=0,e=wt)}if(e!==0){if(e===2&&(r=yu(t),r!==0&&(i=r,e=$u(t,r))),e===1)throw n=Co,_r(t,0),Pi(t,i),rn(t,yt()),n;if(e===6)Pi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Sx(r)&&(e=xl(t,i),e===2&&(s=yu(t),s!==0&&(i=s,e=$u(t,s))),e===1))throw n=Co,_r(t,0),Pi(t,i),rn(t,yt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:ar(t,Qt,oi);break;case 3:if(Pi(t,i),(i&130023424)===i&&(e=Td+500-yt(),10<e)){if(tl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Xt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Ru(ar.bind(null,t,Qt,oi),e);break}ar(t,Qt,oi);break;case 4:if(Pi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Hn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=yt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*yx(i/1960))-i,10<i){t.timeoutHandle=Ru(ar.bind(null,t,Qt,oi),i);break}ar(t,Qt,oi);break;case 5:ar(t,Qt,oi);break;default:throw Error(ne(329))}}}return rn(t,yt()),t.callbackNode===n?d_.bind(null,t):null}function $u(t,e){var n=ao;return t.current.memoizedState.isDehydrated&&(_r(t,e).flags|=256),t=xl(t,e),t!==2&&(e=Qt,Qt=n,e!==null&&qu(e)),t}function qu(t){Qt===null?Qt=t:Qt.push.apply(Qt,t)}function Sx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Gn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Pi(t,e){for(e&=~Ed,e&=~Bl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Hn(e),i=1<<n;t[n]=-1,e&=~i}}function rp(t){if(qe&6)throw Error(ne(327));us();var e=tl(t,0);if(!(e&1))return rn(t,yt()),null;var n=xl(t,e);if(t.tag!==0&&n===2){var i=yu(t);i!==0&&(e=i,n=$u(t,i))}if(n===1)throw n=Co,_r(t,0),Pi(t,e),rn(t,yt()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ar(t,Qt,oi),rn(t,yt()),null}function wd(t,e){var n=qe;qe|=1;try{return t(e)}finally{qe=n,qe===0&&(ys=yt()+500,Ul&&Ki())}}function Er(t){Ni!==null&&Ni.tag===0&&!(qe&6)&&us();var e=qe;qe|=1;var n=An.transition,i=it;try{if(An.transition=null,it=1,t)return t()}finally{it=i,An.transition=n,qe=e,!(qe&6)&&Ki()}}function Ad(){dn=is.current,ut(is)}function _r(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Z0(n)),Et!==null)for(n=Et.return;n!==null;){var i=n;switch(od(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ol();break;case 3:vs(),ut(tn),ut(Gt),md();break;case 5:pd(i);break;case 4:vs();break;case 13:ut(ht);break;case 19:ut(ht);break;case 10:ud(i.type._context);break;case 22:case 23:Ad()}n=n.return}if(Dt=t,Et=t=Hi(t.current,null),Ft=dn=e,wt=0,Co=null,Ed=Bl=Mr=0,Qt=ao=null,hr!==null){for(e=0;e<hr.length;e++)if(n=hr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}hr=null}return t}function h_(t,e){do{var n=Et;try{if(cd(),Oa.current=ml,pl){for(var i=pt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}pl=!1}if(Sr=0,Pt=Tt=pt=null,so=!1,To=0,Md.current=null,n===null||n.return===null){wt=1,Co=e,Et=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ft,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=jh(o);if(m!==null){m.flags&=-257,Xh(m,o,a,s,e),m.mode&1&&Wh(s,c,e),e=m,l=c;var v=e.updateQueue;if(v===null){var y=new Set;y.add(l),e.updateQueue=y}else v.add(l);break e}else{if(!(e&1)){Wh(s,c,e),Cd();break e}l=Error(ne(426))}}else if(ft&&a.mode&1){var p=jh(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Xh(p,o,a,s,e),ad(xs(l,a));break e}}s=l=xs(l,a),wt!==4&&(wt=2),ao===null?ao=[s]:ao.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=Kg(s,l,e);kh(s,u);break e;case 1:a=l;var _=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Bi===null||!Bi.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=Zg(s,a,e);kh(s,M);break e}}s=s.return}while(s!==null)}g_(n)}catch(b){e=b,Et===n&&n!==null&&(Et=n=n.return);continue}break}while(!0)}function p_(){var t=gl.current;return gl.current=ml,t===null?ml:t}function Cd(){(wt===0||wt===3||wt===2)&&(wt=4),Dt===null||!(Mr&268435455)&&!(Bl&268435455)||Pi(Dt,Ft)}function xl(t,e){var n=qe;qe|=2;var i=p_();(Dt!==t||Ft!==e)&&(oi=null,_r(t,e));do try{Mx();break}catch(r){h_(t,r)}while(!0);if(cd(),qe=n,gl.current=i,Et!==null)throw Error(ne(261));return Dt=null,Ft=0,wt}function Mx(){for(;Et!==null;)m_(Et)}function Ex(){for(;Et!==null&&!$v();)m_(Et)}function m_(t){var e=v_(t.alternate,t,dn);t.memoizedProps=t.pendingProps,e===null?g_(t):Et=e,Md.current=null}function g_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=gx(n,e),n!==null){n.flags&=32767,Et=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{wt=6,Et=null;return}}else if(n=mx(n,e,dn),n!==null){Et=n;return}if(e=e.sibling,e!==null){Et=e;return}Et=e=t}while(e!==null);wt===0&&(wt=5)}function ar(t,e,n){var i=it,r=An.transition;try{An.transition=null,it=1,Tx(t,e,n,i)}finally{An.transition=r,it=i}return null}function Tx(t,e,n,i){do us();while(Ni!==null);if(qe&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(r0(t,s),t===Dt&&(Et=Dt=null,Ft=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ra||(ra=!0,x_(el,function(){return us(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=An.transition,An.transition=null;var o=it;it=1;var a=qe;qe|=4,Md.current=null,vx(t,n),u_(n,t),W0(Au),nl=!!wu,Au=wu=null,t.current=n,xx(n),qv(),qe=a,it=o,An.transition=s}else t.current=n;if(ra&&(ra=!1,Ni=t,vl=r),s=t.pendingLanes,s===0&&(Bi=null),Qv(n.stateNode),rn(t,yt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(_l)throw _l=!1,t=Xu,Xu=null,t;return vl&1&&t.tag!==0&&us(),s=t.pendingLanes,s&1?t===Yu?lo++:(lo=0,Yu=t):lo=0,Ki(),null}function us(){if(Ni!==null){var t=Km(vl),e=An.transition,n=it;try{if(An.transition=null,it=16>t?16:t,Ni===null)var i=!1;else{if(t=Ni,Ni=null,vl=0,qe&6)throw Error(ne(331));var r=qe;for(qe|=4,ge=t.current;ge!==null;){var s=ge,o=s.child;if(ge.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ge=c;ge!==null;){var f=ge;switch(f.tag){case 0:case 11:case 15:oo(8,f,s)}var h=f.child;if(h!==null)h.return=f,ge=h;else for(;ge!==null;){f=ge;var d=f.sibling,m=f.return;if(a_(f),f===c){ge=null;break}if(d!==null){d.return=m,ge=d;break}ge=m}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var p=y.sibling;y.sibling=null,y=p}while(y!==null)}}ge=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ge=o;else e:for(;ge!==null;){if(s=ge,s.flags&2048)switch(s.tag){case 0:case 11:case 15:oo(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,ge=u;break e}ge=s.return}}var _=t.current;for(ge=_;ge!==null;){o=ge;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,ge=g;else e:for(o=_;ge!==null;){if(a=ge,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:kl(9,a)}}catch(b){_t(a,a.return,b)}if(a===o){ge=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,ge=M;break e}ge=a.return}}if(qe=r,Ki(),Kn&&typeof Kn.onPostCommitFiberRoot=="function")try{Kn.onPostCommitFiberRoot(Pl,t)}catch{}i=!0}return i}finally{it=n,An.transition=e}}return!1}function sp(t,e,n){e=xs(n,e),e=Kg(t,e,1),t=ki(t,e,1),e=Xt(),t!==null&&(Lo(t,1,e),rn(t,e))}function _t(t,e,n){if(t.tag===3)sp(t,t,n);else for(;e!==null;){if(e.tag===3){sp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Bi===null||!Bi.has(i))){t=xs(n,t),t=Zg(e,t,1),e=ki(e,t,1),t=Xt(),e!==null&&(Lo(e,1,t),rn(e,t));break}}e=e.return}}function wx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Xt(),t.pingedLanes|=t.suspendedLanes&n,Dt===t&&(Ft&n)===n&&(wt===4||wt===3&&(Ft&130023424)===Ft&&500>yt()-Td?_r(t,0):Ed|=n),rn(t,e)}function __(t,e){e===0&&(t.mode&1?(e=$o,$o<<=1,!($o&130023424)&&($o=4194304)):e=1);var n=Xt();t=mi(t,e),t!==null&&(Lo(t,e,n),rn(t,n))}function Ax(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),__(t,n)}function Cx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),__(t,n)}var v_;v_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||tn.current)en=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return en=!1,px(t,e,n);en=!!(t.flags&131072)}else en=!1,ft&&e.flags&1048576&&Mg(e,cl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ba(t,e),t=e.pendingProps;var r=ms(e,Gt.current);cs(e,n),r=_d(null,e,i,t,r,n);var s=vd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,nn(i)?(s=!0,al(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,dd(e),r.updater=Ol,e.stateNode=r,r._reactInternals=e,Uu(e,i,t,n),e=ku(null,e,i,!0,s,n)):(e.tag=0,ft&&s&&sd(e),jt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ba(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=bx(i),t=Un(i,t),r){case 0:e=Ou(null,e,i,t,n);break e;case 1:e=qh(null,e,i,t,n);break e;case 11:e=Yh(null,e,i,t,n);break e;case 14:e=$h(null,e,i,Un(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),Ou(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),qh(t,e,i,r,n);case 3:e:{if(t_(e),t===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Rg(t,e),dl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=xs(Error(ne(423)),e),e=Kh(t,e,i,n,r);break e}else if(i!==r){r=xs(Error(ne(424)),e),e=Kh(t,e,i,n,r);break e}else for(hn=Oi(e.stateNode.containerInfo.firstChild),pn=e,ft=!0,On=null,n=Ag(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(gs(),i===r){e=gi(t,e,n);break e}jt(t,e,i,n)}e=e.child}return e;case 5:return bg(e),t===null&&Du(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Cu(i,r)?o=null:s!==null&&Cu(i,s)&&(e.flags|=32),e_(t,e),jt(t,e,o,n),e.child;case 6:return t===null&&Du(e),null;case 13:return n_(t,e,n);case 4:return hd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=_s(e,null,i,n):jt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),Yh(t,e,i,r,n);case 7:return jt(t,e,e.pendingProps,n),e.child;case 8:return jt(t,e,e.pendingProps.children,n),e.child;case 12:return jt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ot(ul,i._currentValue),i._currentValue=o,s!==null)if(Gn(s.value,o)){if(s.children===r.children&&!tn.current){e=gi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=di(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Nu(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ne(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Nu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}jt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,cs(e,n),r=Rn(r),i=i(r),e.flags|=1,jt(t,e,i,n),e.child;case 14:return i=e.type,r=Un(i,e.pendingProps),r=Un(i.type,r),$h(t,e,i,r,n);case 15:return Qg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),Ba(t,e),e.tag=1,nn(i)?(t=!0,al(e)):t=!1,cs(e,n),qg(e,i,r),Uu(e,i,r,n),ku(null,e,i,!0,t,n);case 19:return i_(t,e,n);case 22:return Jg(t,e,n)}throw Error(ne(156,e.tag))};function x_(t,e){return Xm(t,e)}function Rx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(t,e,n,i){return new Rx(t,e,n,i)}function Rd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function bx(t){if(typeof t=="function")return Rd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Yf)return 11;if(t===$f)return 14}return 2}function Hi(t,e){var n=t.alternate;return n===null?(n=Tn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Va(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Rd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Yr:return vr(n.children,r,s,e);case Xf:o=8,r|=8;break;case su:return t=Tn(12,n,e,r|2),t.elementType=su,t.lanes=s,t;case ou:return t=Tn(13,n,e,r),t.elementType=ou,t.lanes=s,t;case au:return t=Tn(19,n,e,r),t.elementType=au,t.lanes=s,t;case bm:return zl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Cm:o=10;break e;case Rm:o=9;break e;case Yf:o=11;break e;case $f:o=14;break e;case Ci:o=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=Tn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function vr(t,e,n,i){return t=Tn(7,t,i,e),t.lanes=n,t}function zl(t,e,n,i){return t=Tn(22,t,i,e),t.elementType=bm,t.lanes=n,t.stateNode={isHidden:!1},t}function Mc(t,e,n){return t=Tn(6,t,null,e),t.lanes=n,t}function Ec(t,e,n){return e=Tn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Px(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ic(0),this.expirationTimes=ic(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ic(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function bd(t,e,n,i,r,s,o,a,l){return t=new Px(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Tn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},dd(s),t}function Lx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function y_(t){if(!t)return ji;t=t._reactInternals;e:{if(Rr(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(nn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(nn(n))return yg(t,n,e)}return e}function S_(t,e,n,i,r,s,o,a,l){return t=bd(n,i,!0,t,r,s,o,a,l),t.context=y_(null),n=t.current,i=Xt(),r=zi(n),s=di(i,r),s.callback=e??null,ki(n,s,r),t.current.lanes=r,Lo(t,r,i),rn(t,i),t}function Hl(t,e,n,i){var r=e.current,s=Xt(),o=zi(r);return n=y_(n),e.context===null?e.context=n:e.pendingContext=n,e=di(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ki(r,e,o),t!==null&&(Vn(t,r,o,s),Fa(t,r,o)),o}function yl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function op(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Pd(t,e){op(t,e),(t=t.alternate)&&op(t,e)}function Dx(){return null}var M_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ld(t){this._internalRoot=t}Vl.prototype.render=Ld.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));Hl(t,e,null,null)};Vl.prototype.unmount=Ld.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Er(function(){Hl(null,t,null,null)}),e[pi]=null}};function Vl(t){this._internalRoot=t}Vl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Jm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<bi.length&&e!==0&&e<bi[n].priority;n++);bi.splice(n,0,t),n===0&&tg(t)}};function Dd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Gl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ap(){}function Nx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=yl(o);s.call(c)}}var o=S_(e,i,t,0,null,!1,!1,"",ap);return t._reactRootContainer=o,t[pi]=o.current,xo(t.nodeType===8?t.parentNode:t),Er(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=yl(l);a.call(c)}}var l=bd(t,0,!1,null,null,!1,!1,"",ap);return t._reactRootContainer=l,t[pi]=l.current,xo(t.nodeType===8?t.parentNode:t),Er(function(){Hl(e,l,n,i)}),l}function Wl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=yl(o);a.call(l)}}Hl(e,o,t,r)}else o=Nx(n,e,t,r,i);return yl(o)}Zm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ks(e.pendingLanes);n!==0&&(Zf(e,n|1),rn(e,yt()),!(qe&6)&&(ys=yt()+500,Ki()))}break;case 13:Er(function(){var i=mi(t,1);if(i!==null){var r=Xt();Vn(i,t,1,r)}}),Pd(t,1)}};Qf=function(t){if(t.tag===13){var e=mi(t,134217728);if(e!==null){var n=Xt();Vn(e,t,134217728,n)}Pd(t,134217728)}};Qm=function(t){if(t.tag===13){var e=zi(t),n=mi(t,e);if(n!==null){var i=Xt();Vn(n,t,e,i)}Pd(t,e)}};Jm=function(){return it};eg=function(t,e){var n=it;try{return it=t,e()}finally{it=n}};_u=function(t,e,n){switch(e){case"input":if(uu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Il(i);if(!r)throw Error(ne(90));Lm(i),uu(i,r)}}}break;case"textarea":Nm(t,n);break;case"select":e=n.value,e!=null&&ss(t,!!n.multiple,e,!1)}};zm=wd;Hm=Er;var Ix={usingClientEntryPoint:!1,Events:[No,Zr,Il,km,Bm,wd]},Bs={findFiberByHostInstance:dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ux={bundleType:Bs.bundleType,version:Bs.version,rendererPackageName:Bs.rendererPackageName,rendererConfig:Bs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Wm(t),t===null?null:t.stateNode},findFiberByHostInstance:Bs.findFiberByHostInstance||Dx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sa.isDisabled&&sa.supportsFiber)try{Pl=sa.inject(Ux),Kn=sa}catch{}}_n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ix;_n.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Dd(e))throw Error(ne(200));return Lx(t,e,null,n)};_n.createRoot=function(t,e){if(!Dd(t))throw Error(ne(299));var n=!1,i="",r=M_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=bd(t,1,!1,null,null,n,!1,i,r),t[pi]=e.current,xo(t.nodeType===8?t.parentNode:t),new Ld(e)};_n.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=Wm(e),t=t===null?null:t.stateNode,t};_n.flushSync=function(t){return Er(t)};_n.hydrate=function(t,e,n){if(!Gl(e))throw Error(ne(200));return Wl(null,t,e,!0,n)};_n.hydrateRoot=function(t,e,n){if(!Dd(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=M_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=S_(e,null,t,1,n??null,r,!1,s,o),t[pi]=e.current,xo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Vl(e)};_n.render=function(t,e,n){if(!Gl(e))throw Error(ne(200));return Wl(null,t,e,!1,n)};_n.unmountComponentAtNode=function(t){if(!Gl(t))throw Error(ne(40));return t._reactRootContainer?(Er(function(){Wl(null,null,t,!1,function(){t._reactRootContainer=null,t[pi]=null})}),!0):!1};_n.unstable_batchedUpdates=wd;_n.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Gl(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return Wl(t,e,n,!1,i)};_n.version="18.3.1-next-f1338f8080-20240426";function E_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E_)}catch(t){console.error(t)}}E_(),Em.exports=_n;var Fx=Em.exports,T_,lp=Fx;T_=lp.createRoot,lp.hydrateRoot;const cp=6e3;function up(t){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${t}`}function Ox(t){let e=((t+180)%360+360)%360-180;return e===-180&&(e=180),e}function kx(){const[t,e]=$e.useState(!1),[n,i]=$e.useState(null),[r,s]=$e.useState(null),[o,a]=$e.useState(null),[l,c]=$e.useState(null),[f,h]=$e.useState([]),[d,m]=$e.useState(!1),[v,y]=$e.useState([]),[p,u]=$e.useState(()=>localStorage.getItem("rl.token")??""),_=$e.useRef([]),[,g]=$e.useState(0),M=$e.useRef(null);$e.useEffect(()=>{let w=null,P,H=!1,x=0;const E=()=>{w=new WebSocket(up("/ws/telemetry")),w.onopen=()=>{e(!0),i(null)},w.onclose=()=>{e(!1),H||(P=window.setTimeout(E,1200))},w.onerror=()=>i("telemetry socket error"),w.onmessage=z=>{const F=JSON.parse(z.data);if(F.type==="world"){s(F),_.current=[],h([]),c(null);return}if(F.type==="results"){c(F.metrics);return}a(F),F.path&&h(F.path);const W=F.ground_truth,j={t:F.t,posError:W?W.position_error_m:null,posSigma:F.estimate.pos_sigma_h,nis:F.gnss_integrity.nis,cusum:F.gnss_integrity.cusum_max,speed:W?W.speed:0,speedCmd:F.control?F.control.speed_cmd:0,state:F.resilience.state,flagged:F.gnss_integrity.flagged,estX:F.estimate.position[0],estY:F.estimate.position[1],trueX:W?W.position[0]:null,trueY:W?W.position[1]:null,yawErr:W?Ox(F.estimate.yaw_deg-W.yaw_deg):null,clearance:F.mission_progress.min_clearance_m},O=_.current;O.push(j),O.length>cp&&O.splice(0,O.length-cp),++x%5===0&&g($=>$+1)}};return E(),()=>{H=!0,P&&window.clearTimeout(P),w==null||w.close()}},[]),$e.useEffect(()=>{if(!p){m(!1);return}const w=new WebSocket(up("/ws/command")+"?token="+encodeURIComponent(p));return M.current=w,w.onmessage=P=>{const H=JSON.parse(P.data);H.type==="ready"&&m(!0),H.type==="error"&&m(!1),y(x=>[H.type==="error"?`refused: ${H.error}`:`${H.command??H.type}: ${JSON.stringify(H.result??H)}`,...x].slice(0,40))},w.onclose=()=>m(!1),()=>{M.current=null,w.close()}},[p]);const b=$e.useCallback((w,P={})=>{const H=M.current;if(!H||H.readyState!==WebSocket.OPEN){y(x=>["not connected: enter the bridge token",...x]);return}H.send(JSON.stringify({command:w,args:P,id:w}))},[]),C=$e.useCallback(w=>{localStorage.setItem("rl.token",w),u(w)},[]);return{connected:t,error:n,world:r,latest:o,results:l,history:_.current,path:f,sendCommand:b,commandReady:d,commandLog:v,setToken:C,token:p}}function Lt({title:t,children:e,right:n,className:i=""}){return A.jsxs("section",{className:`card ${i}`,children:[A.jsxs("header",{children:[A.jsx("h2",{children:t}),n]}),A.jsx("div",{className:"card-body",children:e})]})}function xe({label:t,value:e,unit:n,tone:i="",hint:r}){return A.jsxs("div",{className:`stat ${i}`,title:r,children:[A.jsx("span",{className:"stat-label",children:t}),A.jsxs("span",{className:"stat-value",children:[e,n?A.jsx("small",{children:n}):null]})]})}function w_({state:t}){const e=t==="NORMAL"?"ok":t==="DEGRADED"||t==="RECOVERY"?"warn":t==="IDLE"?"":"bad";return A.jsx("span",{className:`badge ${e}`,children:t.replace(/_/g," ")})}function Fe(t,e=2){return t==null||!Number.isFinite(t)?"–":t.toFixed(e)}function Ga({rows:t,series:e,height:n=150,yLabel:i,yMax:r,shadeFlagged:s=!1,window:o=1200}){const l=n,c=46,f=20,h=8,d=8,m=$e.useMemo(()=>t.slice(-o),[t,o]),{paths:v,flagSpans:y,t0:p,t1:u,lo:_,hi:g}=$e.useMemo(()=>{if(m.length<2)return{paths:[],flagSpans:[],t0:0,t1:1,lo:0,hi:1};const b=m[0].t,C=m[m.length-1].t,w=Math.max(C-b,1e-6);let P=1/0,H=-1/0;for(const j of e)for(const O of m){const $=O[j.key];typeof $=="number"&&Number.isFinite($)&&($<P&&(P=$),$>H&&(H=$))}Number.isFinite(P)||(P=0,H=1),r!==void 0&&(H=Math.min(H,r)),P=Math.min(P,0),H-P<1e-9&&(H=P+1);const x=(H-P)*.08;H+=x;const E=j=>c+(j-b)/w*(760-c-d),z=j=>l-f-(j-P)/(H-P)*(l-f-h),F=e.map(j=>{let O="",$=!1;for(const D of m){const q=D[j.key];if(typeof q!="number"||!Number.isFinite(q)){$=!1;continue}const Q=z(Math.min(q,H));O+=`${$?"L":"M"}${E(D.t).toFixed(1)},${Q.toFixed(1)}`,$=!0}return{...j,d:O}}),W=[];if(s){let j=null;for(const O of m)O.flagged&&j===null&&(j=O.t),!O.flagged&&j!==null&&(W.push({x:E(j),w:Math.max(E(O.t)-E(j),1)}),j=null);j!==null&&W.push({x:E(j),w:Math.max(E(C)-E(j),1)})}return{paths:F,flagSpans:W,t0:b,t1:C,lo:P,hi:H}},[m,e,r,s,l]);if(m.length<2)return A.jsx("div",{className:"chart-empty",style:{height:l},children:"waiting for telemetry…"});const M=[_,_+(g-_)/2,g];return A.jsxs("div",{className:"chart",children:[A.jsxs("svg",{viewBox:`0 0 760 ${l}`,width:"100%",height:l,role:"img","aria-label":i??"time series",children:[y.map((b,C)=>A.jsx("rect",{x:b.x,y:h,width:b.w,height:l-f-h,className:"chart-flag"},C)),M.map((b,C)=>{const w=l-f-(b-_)/(g-_)*(l-f-h);return A.jsxs("g",{children:[A.jsx("line",{x1:c,x2:760-d,y1:w,y2:w,className:"chart-grid"}),A.jsx("text",{x:c-6,y:w+3,className:"chart-tick",textAnchor:"end",children:Math.abs(b)>=100?b.toFixed(0):b.toFixed(2)})]},C)}),A.jsxs("text",{x:c,y:l-6,className:"chart-tick",children:[p.toFixed(0),"s"]}),A.jsxs("text",{x:760-d,y:l-6,className:"chart-tick",textAnchor:"end",children:[u.toFixed(0),"s"]}),v.map(b=>A.jsx("path",{d:b.d,fill:"none",stroke:b.color,strokeWidth:1.6,strokeDasharray:b.dashed?"4 3":void 0},String(b.key)))]}),A.jsxs("div",{className:"chart-legend",children:[e.map(b=>A.jsxs("span",{children:[A.jsx("i",{style:{background:b.color}}),b.label]},String(b.key))),s&&A.jsxs("span",{children:[A.jsx("i",{className:"legend-flag"}),"GNSS inconsistent"]})]})]})}function Bx({latest:t,world:e,history:n}){const i=t.resilience,r=t.gnss_integrity,s=t.mission_progress,o=t.ground_truth,a=Math.max(1e-6,Math.hypot(e.mission.goal[0]-e.mission.start[0],e.mission.goal[1]-e.mission.start[1])),l=Math.max(0,Math.min(1,1-s.distance_to_goal_m/a));return A.jsxs("div",{className:"grid",children:[A.jsxs(Lt,{title:"Mission",right:A.jsx(w_,{state:i.state}),className:"span2",children:[A.jsxs("div",{className:"stat-row",children:[A.jsx(xe,{label:"scenario",value:e.scenario.id}),A.jsx(xe,{label:"seed",value:e.scenario.seed,hint:"Fixed per trial so every run is reproducible."}),A.jsx(xe,{label:"time",value:Fe(t.t,1),unit:"s"}),A.jsx(xe,{label:"nav mode",value:i.nav_mode.replace(/_/g," ")}),A.jsx(xe,{label:"speed limit",value:Fe(i.speed_limit,2),unit:"m/s",tone:i.speed_limit<1?"warn":"ok"})]}),A.jsxs("div",{className:"progress",children:[A.jsx("div",{className:"progress-fill",style:{width:`${l*100}%`}}),A.jsxs("span",{children:[Fe(s.distance_travelled_m,0)," m driven · ",Fe(s.distance_to_goal_m,0)," m to goal"]})]}),A.jsx("p",{className:"reason",children:i.reason}),!i.allow_motion&&A.jsxs("p",{className:"alert",children:["Motion inhibited — ",i.safe_action??"safe action"," held."]})]}),A.jsxs(Lt,{title:"Localisation",children:[A.jsxs("div",{className:"stat-row",children:[A.jsx(xe,{label:"reported σ",value:Fe(t.estimate.pos_sigma_h),unit:"m",hint:"The filter's own horizontal uncertainty."}),A.jsx(xe,{label:"true error",value:o?Fe(o.position_error_m):"n/a",unit:"m",tone:o?o.position_error_m<2*t.estimate.pos_sigma_h?"ok":"warn":"",hint:"Scored against ground truth; not available to the navigator."}),A.jsx(xe,{label:"yaw σ",value:Fe(t.estimate.yaw_sigma_deg,1),unit:"°"})]}),A.jsx(Ga,{rows:n,height:132,shadeFlagged:!0,series:[{key:"posError",label:"true error (m)",color:"#f0803c"},{key:"posSigma",label:"reported σ (m)",color:"#4a9eff",dashed:!0}]})]}),A.jsxs(Lt,{title:"GNSS integrity",children:[A.jsxs("div",{className:"stat-row",children:[A.jsx(xe,{label:"status",value:r.status,tone:r.flagged?"bad":"ok",hint:"Evidence of disagreement between streams. The monitor cannot identify a cause."}),A.jsx(xe,{label:"NIS",value:Fe(r.nis)}),A.jsx(xe,{label:"CUSUM",value:Fe(r.cusum_max,1)}),A.jsx(xe,{label:"satellites",value:t.sensors.gnss?t.sensors.gnss.status:"–"})]}),r.reasons.length>0&&A.jsx("ul",{className:"reasons",children:r.reasons.map(c=>A.jsx("li",{children:c},c))}),A.jsx("p",{className:"caveat",children:"A flag means the GNSS solution is inconsistent with the inertial and odometric evidence. Interference, multipath, a receiver fault and an estimator fault all look alike from here, so no cause is claimed."})]}),A.jsxs(Lt,{title:"Faults",className:"span2",children:[t.faults_active.length===0?A.jsxs("p",{className:"muted",children:["No fault active."," ",e.faults_declared.length>0&&`${e.faults_declared.length} declared in this scenario.`]}):A.jsxs("table",{className:"table",children:[A.jsx("thead",{children:A.jsxs("tr",{children:[A.jsx("th",{children:"type"}),A.jsx("th",{children:"target"}),A.jsx("th",{children:"onset"}),A.jsx("th",{children:"detected"}),A.jsx("th",{children:"latency"}),A.jsx("th",{children:"by"})]})}),A.jsx("tbody",{children:t.faults_active.map((c,f)=>A.jsxs("tr",{children:[A.jsx("td",{children:c.type.replace(/_/g," ")}),A.jsx("td",{children:c.target}),A.jsxs("td",{children:[Fe(c.onset,1)," s"]}),A.jsx("td",{className:c.detected?"ok-text":"warn-text",children:c.detected?Fe(c.detected_time,1)+" s":"not yet"}),A.jsx("td",{children:c.detection_latency_s===null?"–":Fe(c.detection_latency_s,2)+" s"}),A.jsx("td",{children:c.detected_by||"–"})]},f))})]}),A.jsxs("div",{className:"stat-row",children:[A.jsx(xe,{label:"replans",value:s.replans}),A.jsx(xe,{label:"failed plans",value:s.failed_plans,tone:s.failed_plans>0?"warn":"ok"}),A.jsx(xe,{label:"collisions",value:s.collisions,tone:s.collisions>0?"bad":"ok"}),A.jsx(xe,{label:"min clearance",value:Fe(s.min_clearance_m),unit:"m",tone:s.min_clearance_m<.5?"bad":"ok"}),A.jsx(xe,{label:"dead reckoning",value:Fe(i.dead_reckoning_time_s,1),unit:"s",tone:i.dead_reckoning_time_s>0?"warn":"ok"})]})]})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nd="169",zx=0,fp=1,Hx=2,A_=1,Vx=2,si=3,Xi=0,sn=1,qn=2,Vi=0,fs=1,dp=2,hp=3,pp=4,Gx=5,ur=100,Wx=101,jx=102,Xx=103,Yx=104,$x=200,qx=201,Kx=202,Zx=203,Ku=204,Zu=205,Qx=206,Jx=207,ey=208,ty=209,ny=210,iy=211,ry=212,sy=213,oy=214,Qu=0,Ju=1,ef=2,Ss=3,tf=4,nf=5,rf=6,sf=7,C_=0,ay=1,ly=2,Gi=0,cy=1,uy=2,fy=3,dy=4,hy=5,py=6,my=7,R_=300,Ms=301,Es=302,of=303,af=304,jl=306,lf=1e3,mr=1001,cf=1002,wn=1003,gy=1004,oa=1005,kn=1006,Tc=1007,gr=1008,_i=1009,b_=1010,P_=1011,Ro=1012,Id=1013,Tr=1014,ui=1015,Uo=1016,Ud=1017,Fd=1018,Ts=1020,L_=35902,D_=1021,N_=1022,zn=1023,I_=1024,U_=1025,ds=1026,ws=1027,F_=1028,Od=1029,O_=1030,kd=1031,Bd=1033,Wa=33776,ja=33777,Xa=33778,Ya=33779,uf=35840,ff=35841,df=35842,hf=35843,pf=36196,mf=37492,gf=37496,_f=37808,vf=37809,xf=37810,yf=37811,Sf=37812,Mf=37813,Ef=37814,Tf=37815,wf=37816,Af=37817,Cf=37818,Rf=37819,bf=37820,Pf=37821,$a=36492,Lf=36494,Df=36495,k_=36283,Nf=36284,If=36285,Uf=36286,_y=3200,vy=3201,B_=0,xy=1,Li="",Xn="srgb",Zi="srgb-linear",zd="display-p3",Xl="display-p3-linear",Sl="linear",ct="srgb",Ml="rec709",El="p3",Dr=7680,mp=519,yy=512,Sy=513,My=514,z_=515,Ey=516,Ty=517,wy=518,Ay=519,gp=35044,_p="300 es",fi=2e3,Tl=2001;class Ps{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wc=Math.PI/180,Ff=180/Math.PI;function Fo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[t&255]+zt[t>>8&255]+zt[t>>16&255]+zt[t>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[n&63|128]+zt[n>>8&255]+"-"+zt[n>>16&255]+zt[n>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function Jt(t,e,n){return Math.max(e,Math.min(n,t))}function Cy(t,e){return(t%e+e)%e}function Ac(t,e,n){return(1-n)*t+n*e}function zs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Zt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ze{constructor(e=0,n=0){Ze.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(e,n,i,r,s,o,a,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],h=i[7],d=i[2],m=i[5],v=i[8],y=r[0],p=r[3],u=r[6],_=r[1],g=r[4],M=r[7],b=r[2],C=r[5],w=r[8];return s[0]=o*y+a*_+l*b,s[3]=o*p+a*g+l*C,s[6]=o*u+a*M+l*w,s[1]=c*y+f*_+h*b,s[4]=c*p+f*g+h*C,s[7]=c*u+f*M+h*w,s[2]=d*y+m*_+v*b,s[5]=d*p+m*g+v*C,s[8]=d*u+m*M+v*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=f*o-a*c,d=a*l-f*s,m=c*s-o*l,v=n*h+i*d+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=h*y,e[1]=(r*c-f*i)*y,e[2]=(a*i-r*o)*y,e[3]=d*y,e[4]=(f*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=m*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Cc.makeScale(e,n)),this}rotate(e){return this.premultiply(Cc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Cc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Cc=new ze;function H_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function wl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Ry(){const t=wl("canvas");return t.style.display="block",t}const vp={};function qa(t){t in vp||(vp[t]=!0,console.warn(t))}function by(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function Py(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ly(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const xp=new ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),yp=new ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Hs={[Zi]:{transfer:Sl,primaries:Ml,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Xn]:{transfer:ct,primaries:Ml,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Xl]:{transfer:Sl,primaries:El,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(yp),fromReference:t=>t.applyMatrix3(xp)},[zd]:{transfer:ct,primaries:El,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(yp),fromReference:t=>t.applyMatrix3(xp).convertLinearToSRGB()}},Dy=new Set([Zi,Xl]),tt={enabled:!0,_workingColorSpace:Zi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!Dy.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Hs[e].toReference,r=Hs[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Hs[t].primaries},getTransfer:function(t){return t===Li?Sl:Hs[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Hs[e].luminanceCoefficients)}};function hs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Rc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Nr;class Ny{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Nr===void 0&&(Nr=wl("canvas")),Nr.width=e.width,Nr.height=e.height;const i=Nr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Nr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=wl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=hs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(hs(n[i]/255)*255):n[i]=hs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Iy=0;class V_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Iy++}),this.uuid=Fo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(bc(r[o].image)):s.push(bc(r[o]))}else s=bc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function bc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Ny.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Uy=0;class on extends Ps{constructor(e=on.DEFAULT_IMAGE,n=on.DEFAULT_MAPPING,i=mr,r=mr,s=kn,o=gr,a=zn,l=_i,c=on.DEFAULT_ANISOTROPY,f=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uy++}),this.uuid=Fo(),this.name="",this.source=new V_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==R_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lf:e.x=e.x-Math.floor(e.x);break;case mr:e.x=e.x<0?0:1;break;case cf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case lf:e.y=e.y-Math.floor(e.y);break;case mr:e.y=e.y<0?0:1;break;case cf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=R_;on.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,n=0,i=0,r=1){vt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],h=l[8],d=l[1],m=l[5],v=l[9],y=l[2],p=l[6],u=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-y)<.01&&Math.abs(v-p)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+y)<.1&&Math.abs(v+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,M=(m+1)/2,b=(u+1)/2,C=(f+d)/4,w=(h+y)/4,P=(v+p)/4;return g>M&&g>b?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=C/i,s=w/i):M>b?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=C/r,s=P/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=w/s,r=P/s),this.set(i,r,s,n),this}let _=Math.sqrt((p-v)*(p-v)+(h-y)*(h-y)+(d-f)*(d-f));return Math.abs(_)<.001&&(_=1),this.x=(p-v)/_,this.y=(h-y)/_,this.z=(d-f)/_,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fy extends Ps{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new vt(0,0,e,n),this.scissorTest=!1,this.viewport=new vt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new on(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new V_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wr extends Fy{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class G_ extends on{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=wn,this.minFilter=wn,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Oy extends on{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=wn,this.minFilter=wn,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],h=i[r+3];const d=s[o+0],m=s[o+1],v=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h;return}if(a===1){e[n+0]=d,e[n+1]=m,e[n+2]=v,e[n+3]=y;return}if(h!==y||l!==d||c!==m||f!==v){let p=1-a;const u=l*d+c*m+f*v+h*y,_=u>=0?1:-1,g=1-u*u;if(g>Number.EPSILON){const b=Math.sqrt(g),C=Math.atan2(b,u*_);p=Math.sin(p*C)/b,a=Math.sin(a*C)/b}const M=a*_;if(l=l*p+d*M,c=c*p+m*M,f=f*p+v*M,h=h*p+y*M,p===1-a){const b=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=b,c*=b,f*=b,h*=b}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],h=s[o],d=s[o+1],m=s[o+2],v=s[o+3];return e[n]=a*v+f*h+l*m-c*d,e[n+1]=l*v+f*d+c*h-a*m,e[n+2]=c*v+f*m+a*d-l*h,e[n+3]=f*v-a*h-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),h=a(s/2),d=l(i/2),m=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=d*f*h+c*m*v,this._y=c*m*h-d*f*v,this._z=c*f*v+d*m*h,this._w=c*f*h-d*m*v;break;case"YXZ":this._x=d*f*h+c*m*v,this._y=c*m*h-d*f*v,this._z=c*f*v-d*m*h,this._w=c*f*h+d*m*v;break;case"ZXY":this._x=d*f*h-c*m*v,this._y=c*m*h+d*f*v,this._z=c*f*v+d*m*h,this._w=c*f*h-d*m*v;break;case"ZYX":this._x=d*f*h-c*m*v,this._y=c*m*h+d*f*v,this._z=c*f*v-d*m*h,this._w=c*f*h+d*m*v;break;case"YZX":this._x=d*f*h+c*m*v,this._y=c*m*h+d*f*v,this._z=c*f*v-d*m*h,this._w=c*f*h-d*m*v;break;case"XZY":this._x=d*f*h-c*m*v,this._y=c*m*h-d*f*v,this._z=c*f*v+d*m*h,this._w=c*f*h+d*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],h=n[10],d=i+a+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(f-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Jt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),h=Math.sin((1-n)*f)/c,d=Math.sin(n*f)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,n=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Sp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Sp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*f,this.y=i+l*f+a*c-s*h,this.z=r+l*h+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Pc.copy(this).projectOnVector(e),this.sub(Pc)}reflect(e){return this.sub(Pc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pc=new B,Sp=new Oo;class ko{constructor(e=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Dn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Dn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Dn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Dn):Dn.fromBufferAttribute(s,o),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),aa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),aa.copy(i.boundingBox)),aa.applyMatrix4(e.matrixWorld),this.union(aa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vs),la.subVectors(this.max,Vs),Ir.subVectors(e.a,Vs),Ur.subVectors(e.b,Vs),Fr.subVectors(e.c,Vs),Si.subVectors(Ur,Ir),Mi.subVectors(Fr,Ur),Ji.subVectors(Ir,Fr);let n=[0,-Si.z,Si.y,0,-Mi.z,Mi.y,0,-Ji.z,Ji.y,Si.z,0,-Si.x,Mi.z,0,-Mi.x,Ji.z,0,-Ji.x,-Si.y,Si.x,0,-Mi.y,Mi.x,0,-Ji.y,Ji.x,0];return!Lc(n,Ir,Ur,Fr,la)||(n=[1,0,0,0,1,0,0,0,1],!Lc(n,Ir,Ur,Fr,la))?!1:(ca.crossVectors(Si,Mi),n=[ca.x,ca.y,ca.z],Lc(n,Ir,Ur,Fr,la))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ei=[new B,new B,new B,new B,new B,new B,new B,new B],Dn=new B,aa=new ko,Ir=new B,Ur=new B,Fr=new B,Si=new B,Mi=new B,Ji=new B,Vs=new B,la=new B,ca=new B,er=new B;function Lc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){er.fromArray(t,s);const a=r.x*Math.abs(er.x)+r.y*Math.abs(er.y)+r.z*Math.abs(er.z),l=e.dot(er),c=n.dot(er),f=i.dot(er);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const ky=new ko,Gs=new B,Dc=new B;class Bo{constructor(e=new B,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):ky.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gs.subVectors(e,this.center);const n=Gs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Gs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gs.copy(e.center).add(Dc)),this.expandByPoint(Gs.copy(e.center).sub(Dc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ti=new B,Nc=new B,ua=new B,Ei=new B,Ic=new B,fa=new B,Uc=new B;class Hd{constructor(e=new B,n=new B(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ti.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,n),ti.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Nc.copy(e).add(n).multiplyScalar(.5),ua.copy(n).sub(e).normalize(),Ei.copy(this.origin).sub(Nc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ua),a=Ei.dot(this.direction),l=-Ei.dot(ua),c=Ei.lengthSq(),f=Math.abs(1-o*o);let h,d,m,v;if(f>0)if(h=o*l-a,d=o*a-l,v=s*f,h>=0)if(d>=-v)if(d<=v){const y=1/f;h*=y,d*=y,m=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;else d<=-v?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c):d<=v?(h=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Nc).addScaledVector(ua,d),m}intersectSphere(e,n){ti.subVectors(e.center,this.origin);const i=ti.dot(this.direction),r=ti.dot(ti)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),f>=0?(s=(e.min.y-d.y)*f,o=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,o=(e.min.y-d.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,n,i,r,s){Ic.subVectors(n,e),fa.subVectors(i,e),Uc.crossVectors(Ic,fa);let o=this.direction.dot(Uc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ei.subVectors(this.origin,e);const l=a*this.direction.dot(fa.crossVectors(Ei,fa));if(l<0)return null;const c=a*this.direction.dot(Ic.cross(Ei));if(c<0||l+c>o)return null;const f=-a*Ei.dot(Uc);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dt{constructor(e,n,i,r,s,o,a,l,c,f,h,d,m,v,y,p){dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,h,d,m,v,y,p)}set(e,n,i,r,s,o,a,l,c,f,h,d,m,v,y,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=f,u[10]=h,u[14]=d,u[3]=m,u[7]=v,u[11]=y,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Or.setFromMatrixColumn(e,0).length(),s=1/Or.setFromMatrixColumn(e,1).length(),o=1/Or.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*f,m=o*h,v=a*f,y=a*h;n[0]=l*f,n[4]=-l*h,n[8]=c,n[1]=m+v*c,n[5]=d-y*c,n[9]=-a*l,n[2]=y-d*c,n[6]=v+m*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*f,m=l*h,v=c*f,y=c*h;n[0]=d+y*a,n[4]=v*a-m,n[8]=o*c,n[1]=o*h,n[5]=o*f,n[9]=-a,n[2]=m*a-v,n[6]=y+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*f,m=l*h,v=c*f,y=c*h;n[0]=d-y*a,n[4]=-o*h,n[8]=v+m*a,n[1]=m+v*a,n[5]=o*f,n[9]=y-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*f,m=o*h,v=a*f,y=a*h;n[0]=l*f,n[4]=v*c-m,n[8]=d*c+y,n[1]=l*h,n[5]=y*c+d,n[9]=m*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*c,v=a*l,y=a*c;n[0]=l*f,n[4]=y-d*h,n[8]=v*h+m,n[1]=h,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=m*h+v,n[10]=d-y*h}else if(e.order==="XZY"){const d=o*l,m=o*c,v=a*l,y=a*c;n[0]=l*f,n[4]=-h,n[8]=c*f,n[1]=d*h+y,n[5]=o*f,n[9]=m*h-v,n[2]=v*h-m,n[6]=a*f,n[10]=y*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(By,e,zy)}lookAt(e,n,i){const r=this.elements;return un.subVectors(e,n),un.lengthSq()===0&&(un.z=1),un.normalize(),Ti.crossVectors(i,un),Ti.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),Ti.crossVectors(i,un)),Ti.normalize(),da.crossVectors(un,Ti),r[0]=Ti.x,r[4]=da.x,r[8]=un.x,r[1]=Ti.y,r[5]=da.y,r[9]=un.y,r[2]=Ti.z,r[6]=da.z,r[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],h=i[5],d=i[9],m=i[13],v=i[2],y=i[6],p=i[10],u=i[14],_=i[3],g=i[7],M=i[11],b=i[15],C=r[0],w=r[4],P=r[8],H=r[12],x=r[1],E=r[5],z=r[9],F=r[13],W=r[2],j=r[6],O=r[10],$=r[14],D=r[3],q=r[7],Q=r[11],se=r[15];return s[0]=o*C+a*x+l*W+c*D,s[4]=o*w+a*E+l*j+c*q,s[8]=o*P+a*z+l*O+c*Q,s[12]=o*H+a*F+l*$+c*se,s[1]=f*C+h*x+d*W+m*D,s[5]=f*w+h*E+d*j+m*q,s[9]=f*P+h*z+d*O+m*Q,s[13]=f*H+h*F+d*$+m*se,s[2]=v*C+y*x+p*W+u*D,s[6]=v*w+y*E+p*j+u*q,s[10]=v*P+y*z+p*O+u*Q,s[14]=v*H+y*F+p*$+u*se,s[3]=_*C+g*x+M*W+b*D,s[7]=_*w+g*E+M*j+b*q,s[11]=_*P+g*z+M*O+b*Q,s[15]=_*H+g*F+M*$+b*se,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],h=e[6],d=e[10],m=e[14],v=e[3],y=e[7],p=e[11],u=e[15];return v*(+s*l*h-r*c*h-s*a*d+i*c*d+r*a*m-i*l*m)+y*(+n*l*m-n*c*d+s*o*d-r*o*m+r*c*f-s*l*f)+p*(+n*c*h-n*a*m-s*o*h+i*o*m+s*a*f-i*c*f)+u*(-r*a*f-n*l*h+n*a*d+r*o*h-i*o*d+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=e[9],d=e[10],m=e[11],v=e[12],y=e[13],p=e[14],u=e[15],_=h*p*c-y*d*c+y*l*m-a*p*m-h*l*u+a*d*u,g=v*d*c-f*p*c-v*l*m+o*p*m+f*l*u-o*d*u,M=f*y*c-v*h*c+v*a*m-o*y*m-f*a*u+o*h*u,b=v*h*l-f*y*l-v*a*d+o*y*d+f*a*p-o*h*p,C=n*_+i*g+r*M+s*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return e[0]=_*w,e[1]=(y*d*s-h*p*s-y*r*m+i*p*m+h*r*u-i*d*u)*w,e[2]=(a*p*s-y*l*s+y*r*c-i*p*c-a*r*u+i*l*u)*w,e[3]=(h*l*s-a*d*s-h*r*c+i*d*c+a*r*m-i*l*m)*w,e[4]=g*w,e[5]=(f*p*s-v*d*s+v*r*m-n*p*m-f*r*u+n*d*u)*w,e[6]=(v*l*s-o*p*s-v*r*c+n*p*c+o*r*u-n*l*u)*w,e[7]=(o*d*s-f*l*s+f*r*c-n*d*c-o*r*m+n*l*m)*w,e[8]=M*w,e[9]=(v*h*s-f*y*s-v*i*m+n*y*m+f*i*u-n*h*u)*w,e[10]=(o*y*s-v*a*s+v*i*c-n*y*c-o*i*u+n*a*u)*w,e[11]=(f*a*s-o*h*s-f*i*c+n*h*c+o*i*m-n*a*m)*w,e[12]=b*w,e[13]=(f*y*r-v*h*r+v*i*d-n*y*d-f*i*p+n*h*p)*w,e[14]=(v*a*r-o*y*r-v*i*l+n*y*l+o*i*p-n*a*p)*w,e[15]=(o*h*r-f*a*r+f*i*l-n*h*l-o*i*d+n*a*d)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,h=a+a,d=s*c,m=s*f,v=s*h,y=o*f,p=o*h,u=a*h,_=l*c,g=l*f,M=l*h,b=i.x,C=i.y,w=i.z;return r[0]=(1-(y+u))*b,r[1]=(m+M)*b,r[2]=(v-g)*b,r[3]=0,r[4]=(m-M)*C,r[5]=(1-(d+u))*C,r[6]=(p+_)*C,r[7]=0,r[8]=(v+g)*w,r[9]=(p-_)*w,r[10]=(1-(d+y))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Or.set(r[0],r[1],r[2]).length();const o=Or.set(r[4],r[5],r[6]).length(),a=Or.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Nn.copy(this);const c=1/s,f=1/o,h=1/a;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=f,Nn.elements[5]*=f,Nn.elements[6]*=f,Nn.elements[8]*=h,Nn.elements[9]*=h,Nn.elements[10]*=h,n.setFromRotationMatrix(Nn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=fi){const l=this.elements,c=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let m,v;if(a===fi)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Tl)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=fi){const l=this.elements,c=1/(n-e),f=1/(i-r),h=1/(o-s),d=(n+e)*c,m=(i+r)*f;let v,y;if(a===fi)v=(o+s)*h,y=-2*h;else if(a===Tl)v=s*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Or=new B,Nn=new dt,By=new B(0,0,0),zy=new B(1,1,1),Ti=new B,da=new B,un=new B,Mp=new dt,Ep=new Oo;class Qn{constructor(e=0,n=0,i=0,r=Qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],h=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Mp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Ep.setFromEuler(this),this.setFromQuaternion(Ep,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qn.DEFAULT_ORDER="XYZ";class W_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hy=0;const Tp=new B,kr=new Oo,ni=new dt,ha=new B,Ws=new B,Vy=new B,Gy=new Oo,wp=new B(1,0,0),Ap=new B(0,1,0),Cp=new B(0,0,1),Rp={type:"added"},Wy={type:"removed"},Br={type:"childadded",child:null},Fc={type:"childremoved",child:null};class At extends Ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hy++}),this.uuid=Fo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new B,n=new Qn,i=new Oo,r=new B(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new dt},normalMatrix:{value:new ze}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new W_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return kr.setFromAxisAngle(e,n),this.quaternion.multiply(kr),this}rotateOnWorldAxis(e,n){return kr.setFromAxisAngle(e,n),this.quaternion.premultiply(kr),this}rotateX(e){return this.rotateOnAxis(wp,e)}rotateY(e){return this.rotateOnAxis(Ap,e)}rotateZ(e){return this.rotateOnAxis(Cp,e)}translateOnAxis(e,n){return Tp.copy(e).applyQuaternion(this.quaternion),this.position.add(Tp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(wp,e)}translateY(e){return this.translateOnAxis(Ap,e)}translateZ(e){return this.translateOnAxis(Cp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ha.copy(e):ha.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(Ws,ha,this.up):ni.lookAt(ha,Ws,this.up),this.quaternion.setFromRotationMatrix(ni),r&&(ni.extractRotation(r.matrixWorld),kr.setFromRotationMatrix(ni),this.quaternion.premultiply(kr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rp),Br.child=e,this.dispatchEvent(Br),Br.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Wy),Fc.child=e,this.dispatchEvent(Fc),Fc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rp),Br.child=e,this.dispatchEvent(Br),Br.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,e,Vy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,Gy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),h=o(e.shapes),d=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}At.DEFAULT_UP=new B(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const In=new B,ii=new B,Oc=new B,ri=new B,zr=new B,Hr=new B,bp=new B,kc=new B,Bc=new B,zc=new B,Hc=new vt,Vc=new vt,Gc=new vt;class Bn{constructor(e=new B,n=new B,i=new B){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),In.subVectors(e,n),r.cross(In);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){In.subVectors(r,n),ii.subVectors(i,n),Oc.subVectors(e,n);const o=In.dot(In),a=In.dot(ii),l=In.dot(Oc),c=ii.dot(ii),f=ii.dot(Oc),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,m=(c*l-a*f)*d,v=(o*f-a*l)*d;return s.set(1-m-v,v,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ri.x),l.addScaledVector(o,ri.y),l.addScaledVector(a,ri.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Hc.setScalar(0),Vc.setScalar(0),Gc.setScalar(0),Hc.fromBufferAttribute(e,n),Vc.fromBufferAttribute(e,i),Gc.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Hc,s.x),o.addScaledVector(Vc,s.y),o.addScaledVector(Gc,s.z),o}static isFrontFacing(e,n,i,r){return In.subVectors(i,n),ii.subVectors(e,n),In.cross(ii).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),In.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Bn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Bn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;zr.subVectors(r,i),Hr.subVectors(s,i),kc.subVectors(e,i);const l=zr.dot(kc),c=Hr.dot(kc);if(l<=0&&c<=0)return n.copy(i);Bc.subVectors(e,r);const f=zr.dot(Bc),h=Hr.dot(Bc);if(f>=0&&h<=f)return n.copy(r);const d=l*h-f*c;if(d<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(zr,o);zc.subVectors(e,s);const m=zr.dot(zc),v=Hr.dot(zc);if(v>=0&&m<=v)return n.copy(s);const y=m*c-l*v;if(y<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(Hr,a);const p=f*v-m*h;if(p<=0&&h-f>=0&&m-v>=0)return bp.subVectors(s,r),a=(h-f)/(h-f+(m-v)),n.copy(r).addScaledVector(bp,a);const u=1/(p+y+d);return o=y*u,a=d*u,n.copy(i).addScaledVector(zr,o).addScaledVector(Hr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const j_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},pa={h:0,s:0,l:0};function Wc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class We{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=tt.workingColorSpace){return this.r=e,this.g=n,this.b=i,tt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=tt.workingColorSpace){if(e=Cy(e,1),n=Jt(n,0,1),i=Jt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Wc(o,s,e+1/3),this.g=Wc(o,s,e),this.b=Wc(o,s,e-1/3)}return tt.toWorkingColorSpace(this,r),this}setStyle(e,n=Xn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Xn){const i=j_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hs(e.r),this.g=hs(e.g),this.b=hs(e.b),this}copyLinearToSRGB(e){return this.r=Rc(e.r),this.g=Rc(e.g),this.b=Rc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xn){return tt.fromWorkingColorSpace(Ht.copy(this),e),Math.round(Jt(Ht.r*255,0,255))*65536+Math.round(Jt(Ht.g*255,0,255))*256+Math.round(Jt(Ht.b*255,0,255))}getHexString(e=Xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=tt.workingColorSpace){tt.fromWorkingColorSpace(Ht.copy(this),n);const i=Ht.r,r=Ht.g,s=Ht.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=f<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=tt.workingColorSpace){return tt.fromWorkingColorSpace(Ht.copy(this),n),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=Xn){tt.fromWorkingColorSpace(Ht.copy(this),e);const n=Ht.r,i=Ht.g,r=Ht.b;return e!==Xn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(wi),this.setHSL(wi.h+e,wi.s+n,wi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(wi),e.getHSL(pa);const i=Ac(wi.h,pa.h,n),r=Ac(wi.s,pa.s,n),s=Ac(wi.l,pa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new We;We.NAMES=j_;let jy=0;class br extends Ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jy++}),this.uuid=Fo(),this.name="",this.type="Material",this.blending=fs,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ku,this.blendDst=Zu,this.blendEquation=ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dr,this.stencilZFail=Dr,this.stencilZPass=Dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fs&&(i.blending=this.blending),this.side!==Xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ku&&(i.blendSrc=this.blendSrc),this.blendDst!==Zu&&(i.blendDst=this.blendDst),this.blendEquation!==ur&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ss&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Dr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Dr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Dr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class co extends br{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=C_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new B,ma=new Ze;class Cn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=gp,this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ma.fromBufferAttribute(this,n),ma.applyMatrix3(e),this.setXY(n,ma.x,ma.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix3(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix4(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyNormalMatrix(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.transformDirection(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=zs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Zt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=zs(n,this.array)),n}setX(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=zs(n,this.array)),n}setY(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=zs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=zs(n,this.array)),n}setW(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array),r=Zt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array),r=Zt(r,this.array),s=Zt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gp&&(e.usage=this.usage),e}}class X_ extends Cn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Y_ extends Cn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class an extends Cn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Xy=0;const yn=new dt,jc=new At,Vr=new B,fn=new ko,js=new ko,bt=new B;class gn extends Ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xy++}),this.uuid=Fo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(H_(e)?Y_:X_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,n,i){return yn.makeTranslation(e,n,i),this.applyMatrix4(yn),this}scale(e,n,i){return yn.makeScale(e,n,i),this.applyMatrix4(yn),this}lookAt(e){return jc.lookAt(e),jc.updateMatrix(),this.applyMatrix4(jc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vr).negate(),this.translate(Vr.x,Vr.y,Vr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new an(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ko);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];fn.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];js.setFromBufferAttribute(a),this.morphTargetsRelative?(bt.addVectors(fn.min,js.min),fn.expandByPoint(bt),bt.addVectors(fn.max,js.max),fn.expandByPoint(bt)):(fn.expandByPoint(js.min),fn.expandByPoint(js.max))}fn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(bt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)bt.fromBufferAttribute(a,c),l&&(Vr.fromBufferAttribute(e,c),bt.add(Vr)),r=Math.max(r,i.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Cn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new B,l[P]=new B;const c=new B,f=new B,h=new B,d=new Ze,m=new Ze,v=new Ze,y=new B,p=new B;function u(P,H,x){c.fromBufferAttribute(i,P),f.fromBufferAttribute(i,H),h.fromBufferAttribute(i,x),d.fromBufferAttribute(s,P),m.fromBufferAttribute(s,H),v.fromBufferAttribute(s,x),f.sub(c),h.sub(c),m.sub(d),v.sub(d);const E=1/(m.x*v.y-v.x*m.y);isFinite(E)&&(y.copy(f).multiplyScalar(v.y).addScaledVector(h,-m.y).multiplyScalar(E),p.copy(h).multiplyScalar(m.x).addScaledVector(f,-v.x).multiplyScalar(E),a[P].add(y),a[H].add(y),a[x].add(y),l[P].add(p),l[H].add(p),l[x].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let P=0,H=_.length;P<H;++P){const x=_[P],E=x.start,z=x.count;for(let F=E,W=E+z;F<W;F+=3)u(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const g=new B,M=new B,b=new B,C=new B;function w(P){b.fromBufferAttribute(r,P),C.copy(b);const H=a[P];g.copy(H),g.sub(b.multiplyScalar(b.dot(H))).normalize(),M.crossVectors(C,H);const E=M.dot(l[P])<0?-1:1;o.setXYZW(P,g.x,g.y,g.z,E)}for(let P=0,H=_.length;P<H;++P){const x=_[P],E=x.start,z=x.count;for(let F=E,W=E+z;F<W;F+=3)w(e.getX(F+0)),w(e.getX(F+1)),w(e.getX(F+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Cn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new B,s=new B,o=new B,a=new B,l=new B,c=new B,f=new B,h=new B;if(e)for(let d=0,m=e.count;d<m;d+=3){const v=e.getX(d+0),y=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,p),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,p),a.add(f),l.add(f),c.add(f),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)bt.fromBufferAttribute(e,n),bt.normalize(),e.setXYZ(n,bt.x,bt.y,bt.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,h=a.normalized,d=new c.constructor(l.length*f);let m=0,v=0;for(let y=0,p=l.length;y<p;y++){a.isInterleavedBufferAttribute?m=l[y]*a.data.stride+a.offset:m=l[y]*f;for(let u=0;u<f;u++)d[v++]=c[m++]}return new Cn(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new gn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,h=c.length;f<h;f++){const d=c[f],m=e(d,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],h=s[c];for(let d=0,m=h.length;d<m;d++)f.push(h[d].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pp=new dt,tr=new Hd,ga=new Bo,Lp=new B,_a=new B,va=new B,xa=new B,Xc=new B,ya=new B,Dp=new B,Sa=new B;class Ut extends At{constructor(e=new gn,n=new co){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ya.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],h=s[l];f!==0&&(Xc.fromBufferAttribute(h,e),o?ya.addScaledVector(Xc,f):ya.addScaledVector(Xc.sub(n),f))}n.add(ya)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ga.copy(i.boundingSphere),ga.applyMatrix4(s),tr.copy(e.ray).recast(e.near),!(ga.containsPoint(tr.origin)===!1&&(tr.intersectSphere(ga,Lp)===null||tr.origin.distanceToSquared(Lp)>(e.far-e.near)**2))&&(Pp.copy(s).invert(),tr.copy(e.ray).applyMatrix4(Pp),!(i.boundingBox!==null&&tr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,tr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,y=d.length;v<y;v++){const p=d[v],u=o[p.materialIndex],_=Math.max(p.start,m.start),g=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let M=_,b=g;M<b;M+=3){const C=a.getX(M),w=a.getX(M+1),P=a.getX(M+2);r=Ma(this,u,e,i,c,f,h,C,w,P),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let p=v,u=y;p<u;p+=3){const _=a.getX(p),g=a.getX(p+1),M=a.getX(p+2);r=Ma(this,o,e,i,c,f,h,_,g,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,y=d.length;v<y;v++){const p=d[v],u=o[p.materialIndex],_=Math.max(p.start,m.start),g=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=_,b=g;M<b;M+=3){const C=M,w=M+1,P=M+2;r=Ma(this,u,e,i,c,f,h,C,w,P),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let p=v,u=y;p<u;p+=3){const _=p,g=p+1,M=p+2;r=Ma(this,o,e,i,c,f,h,_,g,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function Yy(t,e,n,i,r,s,o,a){let l;if(e.side===sn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Xi,a),l===null)return null;Sa.copy(a),Sa.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Sa);return c<n.near||c>n.far?null:{distance:c,point:Sa.clone(),object:t}}function Ma(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,_a),t.getVertexPosition(l,va),t.getVertexPosition(c,xa);const f=Yy(t,e,n,i,_a,va,xa,Dp);if(f){const h=new B;Bn.getBarycoord(Dp,_a,va,xa,h),r&&(f.uv=Bn.getInterpolatedAttribute(r,a,l,c,h,new Ze)),s&&(f.uv1=Bn.getInterpolatedAttribute(s,a,l,c,h,new Ze)),o&&(f.normal=Bn.getInterpolatedAttribute(o,a,l,c,h,new B),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new B,materialIndex:0};Bn.getNormal(_a,va,xa,d.normal),f.face=d,f.barycoord=h}return f}class Ar extends gn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],h=[];let d=0,m=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new an(c,3)),this.setAttribute("normal",new an(f,3)),this.setAttribute("uv",new an(h,2));function v(y,p,u,_,g,M,b,C,w,P,H){const x=M/w,E=b/P,z=M/2,F=b/2,W=C/2,j=w+1,O=P+1;let $=0,D=0;const q=new B;for(let Q=0;Q<O;Q++){const se=Q*E-F;for(let Ae=0;Ae<j;Ae++){const He=Ae*x-z;q[y]=He*_,q[p]=se*g,q[u]=W,c.push(q.x,q.y,q.z),q[y]=0,q[p]=0,q[u]=C>0?1:-1,f.push(q.x,q.y,q.z),h.push(Ae/w),h.push(1-Q/P),$+=1}}for(let Q=0;Q<P;Q++)for(let se=0;se<w;se++){const Ae=d+se+j*Q,He=d+se+j*(Q+1),X=d+(se+1)+j*(Q+1),te=d+(se+1)+j*Q;l.push(Ae,He,te),l.push(He,X,te),D+=6}a.addGroup(m,D,H),m+=D,d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ar(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function As(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Wt(t){const e={};for(let n=0;n<t.length;n++){const i=As(t[n]);for(const r in i)e[r]=i[r]}return e}function $y(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function $_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const qy={clone:As,merge:Wt};var Ky=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends br{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ky,this.fragmentShader=Zy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=As(e.uniforms),this.uniformsGroups=$y(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class q_ extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=fi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ai=new B,Np=new Ze,Ip=new Ze;class En extends q_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ff*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ff*2*Math.atan(Math.tan(wc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z)}getViewSize(e,n){return this.getViewBounds(e,Np,Ip),n.subVectors(Ip,Np)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(wc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Gr=-90,Wr=1;class Qy extends At{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new En(Gr,Wr,e,n);r.layers=this.layers,this.add(r);const s=new En(Gr,Wr,e,n);s.layers=this.layers,this.add(s);const o=new En(Gr,Wr,e,n);o.layers=this.layers,this.add(o);const a=new En(Gr,Wr,e,n);a.layers=this.layers,this.add(a);const l=new En(Gr,Wr,e,n);l.layers=this.layers,this.add(l);const c=new En(Gr,Wr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===fi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Tl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(h,d,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class K_ extends on{constructor(e,n,i,r,s,o,a,l,c,f){e=e!==void 0?e:[],n=n!==void 0?n:Ms,super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jy extends wr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new K_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:kn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ar(5,5,5),s=new Yi({name:"CubemapFromEquirect",uniforms:As(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:Vi});s.uniforms.tEquirect.value=n;const o=new Ut(r,s),a=n.minFilter;return n.minFilter===gr&&(n.minFilter=kn),new Qy(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Yc=new B,eS=new B,tS=new ze;class lr{constructor(e=new B(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Yc.subVectors(i,n).cross(eS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Yc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||tS.getNormalMatrix(e),r=this.coplanarPoint(Yc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const nr=new Bo,Ea=new B;class Vd{constructor(e=new lr,n=new lr,i=new lr,r=new lr,s=new lr,o=new lr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=fi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],f=r[5],h=r[6],d=r[7],m=r[8],v=r[9],y=r[10],p=r[11],u=r[12],_=r[13],g=r[14],M=r[15];if(i[0].setComponents(l-s,d-c,p-m,M-u).normalize(),i[1].setComponents(l+s,d+c,p+m,M+u).normalize(),i[2].setComponents(l+o,d+f,p+v,M+_).normalize(),i[3].setComponents(l-o,d-f,p-v,M-_).normalize(),i[4].setComponents(l-a,d-h,p-y,M-g).normalize(),n===fi)i[5].setComponents(l+a,d+h,p+y,M+g).normalize();else if(n===Tl)i[5].setComponents(a,h,y,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),nr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),nr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(nr)}intersectsSprite(e){return nr.center.set(0,0,0),nr.radius=.7071067811865476,nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(nr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ea.x=r.normal.x>0?e.max.x:e.min.x,Ea.y=r.normal.y>0?e.max.y:e.min.y,Ea.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ea)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Z_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function nS(t){const e=new WeakMap;function n(a,l){const c=a.array,f=a.usage,h=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,f),a.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const f=l.array,h=l.updateRanges;if(t.bindBuffer(c,a),h.length===0)t.bufferSubData(c,0,f);else{h.sort((m,v)=>m.start-v.start);let d=0;for(let m=1;m<h.length;m++){const v=h[d],y=h[m];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++d,h[d]=y)}h.length=d+1;for(let m=0,v=h.length;m<v;m++){const y=h[m];t.bufferSubData(c,y.start*f.BYTES_PER_ELEMENT,f,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class zo extends gn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,h=e/a,d=n/l,m=[],v=[],y=[],p=[];for(let u=0;u<f;u++){const _=u*d-o;for(let g=0;g<c;g++){const M=g*h-s;v.push(M,-_,0),y.push(0,0,1),p.push(g/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let _=0;_<a;_++){const g=_+c*u,M=_+c*(u+1),b=_+1+c*(u+1),C=_+1+c*u;m.push(g,M,C),m.push(M,b,C)}this.setIndex(m),this.setAttribute("position",new an(v,3)),this.setAttribute("normal",new an(y,3)),this.setAttribute("uv",new an(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zo(e.width,e.height,e.widthSegments,e.heightSegments)}}var iS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rS=`#ifdef USE_ALPHAHASH
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
#endif`,sS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,oS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cS=`#ifdef USE_AOMAP
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
#endif`,uS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fS=`#ifdef USE_BATCHING
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
#endif`,dS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gS=`#ifdef USE_IRIDESCENCE
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
#endif`,_S=`#ifdef USE_BUMPMAP
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
#endif`,vS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,SS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,MS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ES=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,TS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wS=`#if defined( USE_COLOR_ALPHA )
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
#endif`,AS=`#define PI 3.141592653589793
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
} // validated`,CS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,RS=`vec3 transformedNormal = objectNormal;
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
#endif`,bS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,PS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,LS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,DS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,NS="gl_FragColor = linearToOutputTexel( gl_FragColor );",IS=`
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
}`,US=`#ifdef USE_ENVMAP
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
#endif`,FS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,OS=`#ifdef USE_ENVMAP
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
#endif`,kS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,BS=`#ifdef USE_ENVMAP
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
#endif`,zS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,HS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,VS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,GS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,WS=`#ifdef USE_GRADIENTMAP
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
}`,jS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,XS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,YS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$S=`uniform bool receiveShadow;
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
#endif`,qS=`#ifdef USE_ENVMAP
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
#endif`,KS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ZS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,QS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,JS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eM=`PhysicalMaterial material;
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
#endif`,tM=`struct PhysicalMaterial {
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
}`,nM=`
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
#endif`,iM=`#if defined( RE_IndirectDiffuse )
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
#endif`,rM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,oM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dM=`#if defined( USE_POINTS_UV )
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
#endif`,hM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_M=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vM=`#ifdef USE_MORPHTARGETS
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
#endif`,xM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,SM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,MM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,EM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wM=`#ifdef USE_NORMALMAP
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
#endif`,AM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,CM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,RM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,PM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,LM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,DM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,NM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,IM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,UM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,FM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,OM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,BM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,HM=`float getShadowMask() {
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
}`,VM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,GM=`#ifdef USE_SKINNING
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
#endif`,WM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jM=`#ifdef USE_SKINNING
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
#endif`,XM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,YM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$M=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,KM=`#ifdef USE_TRANSMISSION
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
#endif`,ZM=`#ifdef USE_TRANSMISSION
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
#endif`,QM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iE=`uniform sampler2D t2D;
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
}`,rE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,oE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lE=`#include <common>
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
}`,cE=`#if DEPTH_PACKING == 3200
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
}`,uE=`#define DISTANCE
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
}`,fE=`#define DISTANCE
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
}`,dE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pE=`uniform float scale;
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
}`,mE=`uniform vec3 diffuse;
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
}`,gE=`#include <common>
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
}`,_E=`uniform vec3 diffuse;
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
}`,vE=`#define LAMBERT
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
}`,xE=`#define LAMBERT
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
}`,yE=`#define MATCAP
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
}`,SE=`#define MATCAP
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
}`,ME=`#define NORMAL
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
}`,EE=`#define NORMAL
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
}`,TE=`#define PHONG
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
}`,wE=`#define PHONG
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
}`,AE=`#define STANDARD
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
}`,CE=`#define STANDARD
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
}`,RE=`#define TOON
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
}`,bE=`#define TOON
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
}`,PE=`uniform float size;
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
}`,LE=`uniform vec3 diffuse;
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
}`,DE=`#include <common>
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
}`,NE=`uniform vec3 color;
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
}`,IE=`uniform float rotation;
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
}`,UE=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:iS,alphahash_pars_fragment:rS,alphamap_fragment:sS,alphamap_pars_fragment:oS,alphatest_fragment:aS,alphatest_pars_fragment:lS,aomap_fragment:cS,aomap_pars_fragment:uS,batching_pars_vertex:fS,batching_vertex:dS,begin_vertex:hS,beginnormal_vertex:pS,bsdfs:mS,iridescence_fragment:gS,bumpmap_pars_fragment:_S,clipping_planes_fragment:vS,clipping_planes_pars_fragment:xS,clipping_planes_pars_vertex:yS,clipping_planes_vertex:SS,color_fragment:MS,color_pars_fragment:ES,color_pars_vertex:TS,color_vertex:wS,common:AS,cube_uv_reflection_fragment:CS,defaultnormal_vertex:RS,displacementmap_pars_vertex:bS,displacementmap_vertex:PS,emissivemap_fragment:LS,emissivemap_pars_fragment:DS,colorspace_fragment:NS,colorspace_pars_fragment:IS,envmap_fragment:US,envmap_common_pars_fragment:FS,envmap_pars_fragment:OS,envmap_pars_vertex:kS,envmap_physical_pars_fragment:qS,envmap_vertex:BS,fog_vertex:zS,fog_pars_vertex:HS,fog_fragment:VS,fog_pars_fragment:GS,gradientmap_pars_fragment:WS,lightmap_pars_fragment:jS,lights_lambert_fragment:XS,lights_lambert_pars_fragment:YS,lights_pars_begin:$S,lights_toon_fragment:KS,lights_toon_pars_fragment:ZS,lights_phong_fragment:QS,lights_phong_pars_fragment:JS,lights_physical_fragment:eM,lights_physical_pars_fragment:tM,lights_fragment_begin:nM,lights_fragment_maps:iM,lights_fragment_end:rM,logdepthbuf_fragment:sM,logdepthbuf_pars_fragment:oM,logdepthbuf_pars_vertex:aM,logdepthbuf_vertex:lM,map_fragment:cM,map_pars_fragment:uM,map_particle_fragment:fM,map_particle_pars_fragment:dM,metalnessmap_fragment:hM,metalnessmap_pars_fragment:pM,morphinstance_vertex:mM,morphcolor_vertex:gM,morphnormal_vertex:_M,morphtarget_pars_vertex:vM,morphtarget_vertex:xM,normal_fragment_begin:yM,normal_fragment_maps:SM,normal_pars_fragment:MM,normal_pars_vertex:EM,normal_vertex:TM,normalmap_pars_fragment:wM,clearcoat_normal_fragment_begin:AM,clearcoat_normal_fragment_maps:CM,clearcoat_pars_fragment:RM,iridescence_pars_fragment:bM,opaque_fragment:PM,packing:LM,premultiplied_alpha_fragment:DM,project_vertex:NM,dithering_fragment:IM,dithering_pars_fragment:UM,roughnessmap_fragment:FM,roughnessmap_pars_fragment:OM,shadowmap_pars_fragment:kM,shadowmap_pars_vertex:BM,shadowmap_vertex:zM,shadowmask_pars_fragment:HM,skinbase_vertex:VM,skinning_pars_vertex:GM,skinning_vertex:WM,skinnormal_vertex:jM,specularmap_fragment:XM,specularmap_pars_fragment:YM,tonemapping_fragment:$M,tonemapping_pars_fragment:qM,transmission_fragment:KM,transmission_pars_fragment:ZM,uv_pars_fragment:QM,uv_pars_vertex:JM,uv_vertex:eE,worldpos_vertex:tE,background_vert:nE,background_frag:iE,backgroundCube_vert:rE,backgroundCube_frag:sE,cube_vert:oE,cube_frag:aE,depth_vert:lE,depth_frag:cE,distanceRGBA_vert:uE,distanceRGBA_frag:fE,equirect_vert:dE,equirect_frag:hE,linedashed_vert:pE,linedashed_frag:mE,meshbasic_vert:gE,meshbasic_frag:_E,meshlambert_vert:vE,meshlambert_frag:xE,meshmatcap_vert:yE,meshmatcap_frag:SE,meshnormal_vert:ME,meshnormal_frag:EE,meshphong_vert:TE,meshphong_frag:wE,meshphysical_vert:AE,meshphysical_frag:CE,meshtoon_vert:RE,meshtoon_frag:bE,points_vert:PE,points_frag:LE,shadow_vert:DE,shadow_frag:NE,sprite_vert:IE,sprite_frag:UE},le={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Yn={basic:{uniforms:Wt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Wt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new We(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Wt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Wt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Wt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new We(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Wt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Wt([le.points,le.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Wt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Wt([le.common,le.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Wt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Wt([le.sprite,le.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Wt([le.common,le.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Wt([le.lights,le.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Yn.physical={uniforms:Wt([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Ta={r:0,b:0,g:0},ir=new Qn,FE=new dt;function OE(t,e,n,i,r,s,o){const a=new We(0);let l=s===!0?0:1,c,f,h=null,d=0,m=null;function v(_){let g=_.isScene===!0?_.background:null;return g&&g.isTexture&&(g=(_.backgroundBlurriness>0?n:e).get(g)),g}function y(_){let g=!1;const M=v(_);M===null?u(a,l):M&&M.isColor&&(u(M,1),g=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function p(_,g){const M=v(g);M&&(M.isCubeTexture||M.mapping===jl)?(f===void 0&&(f=new Ut(new Ar(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:As(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(b,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),ir.copy(g.backgroundRotation),ir.x*=-1,ir.y*=-1,ir.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ir.y*=-1,ir.z*=-1),f.material.uniforms.envMap.value=M,f.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(FE.makeRotationFromEuler(ir)),f.material.toneMapped=tt.getTransfer(M.colorSpace)!==ct,(h!==M||d!==M.version||m!==t.toneMapping)&&(f.material.needsUpdate=!0,h=M,d=M.version,m=t.toneMapping),f.layers.enableAll(),_.unshift(f,f.geometry,f.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Ut(new zo(2,2),new Yi({name:"BackgroundMaterial",uniforms:As(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=tt.getTransfer(M.colorSpace)!==ct,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,m=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function u(_,g){_.getRGB(Ta,$_(t)),i.buffers.color.setClear(Ta.r,Ta.g,Ta.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(_,g=1){a.set(_),l=g,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,u(a,l)},render:y,addToRenderList:p}}function kE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(x,E,z,F,W){let j=!1;const O=h(F,z,E);s!==O&&(s=O,c(s.object)),j=m(x,F,z,W),j&&v(x,F,z,W),W!==null&&e.update(W,t.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,M(x,E,z,F),W!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return t.createVertexArray()}function c(x){return t.bindVertexArray(x)}function f(x){return t.deleteVertexArray(x)}function h(x,E,z){const F=z.wireframe===!0;let W=i[x.id];W===void 0&&(W={},i[x.id]=W);let j=W[E.id];j===void 0&&(j={},W[E.id]=j);let O=j[F];return O===void 0&&(O=d(l()),j[F]=O),O}function d(x){const E=[],z=[],F=[];for(let W=0;W<n;W++)E[W]=0,z[W]=0,F[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:z,attributeDivisors:F,object:x,attributes:{},index:null}}function m(x,E,z,F){const W=s.attributes,j=E.attributes;let O=0;const $=z.getAttributes();for(const D in $)if($[D].location>=0){const Q=W[D];let se=j[D];if(se===void 0&&(D==="instanceMatrix"&&x.instanceMatrix&&(se=x.instanceMatrix),D==="instanceColor"&&x.instanceColor&&(se=x.instanceColor)),Q===void 0||Q.attribute!==se||se&&Q.data!==se.data)return!0;O++}return s.attributesNum!==O||s.index!==F}function v(x,E,z,F){const W={},j=E.attributes;let O=0;const $=z.getAttributes();for(const D in $)if($[D].location>=0){let Q=j[D];Q===void 0&&(D==="instanceMatrix"&&x.instanceMatrix&&(Q=x.instanceMatrix),D==="instanceColor"&&x.instanceColor&&(Q=x.instanceColor));const se={};se.attribute=Q,Q&&Q.data&&(se.data=Q.data),W[D]=se,O++}s.attributes=W,s.attributesNum=O,s.index=F}function y(){const x=s.newAttributes;for(let E=0,z=x.length;E<z;E++)x[E]=0}function p(x){u(x,0)}function u(x,E){const z=s.newAttributes,F=s.enabledAttributes,W=s.attributeDivisors;z[x]=1,F[x]===0&&(t.enableVertexAttribArray(x),F[x]=1),W[x]!==E&&(t.vertexAttribDivisor(x,E),W[x]=E)}function _(){const x=s.newAttributes,E=s.enabledAttributes;for(let z=0,F=E.length;z<F;z++)E[z]!==x[z]&&(t.disableVertexAttribArray(z),E[z]=0)}function g(x,E,z,F,W,j,O){O===!0?t.vertexAttribIPointer(x,E,z,W,j):t.vertexAttribPointer(x,E,z,F,W,j)}function M(x,E,z,F){y();const W=F.attributes,j=z.getAttributes(),O=E.defaultAttributeValues;for(const $ in j){const D=j[$];if(D.location>=0){let q=W[$];if(q===void 0&&($==="instanceMatrix"&&x.instanceMatrix&&(q=x.instanceMatrix),$==="instanceColor"&&x.instanceColor&&(q=x.instanceColor)),q!==void 0){const Q=q.normalized,se=q.itemSize,Ae=e.get(q);if(Ae===void 0)continue;const He=Ae.buffer,X=Ae.type,te=Ae.bytesPerElement,ue=X===t.INT||X===t.UNSIGNED_INT||q.gpuType===Id;if(q.isInterleavedBufferAttribute){const ce=q.data,be=ce.stride,Ce=q.offset;if(ce.isInstancedInterleavedBuffer){for(let Ge=0;Ge<D.locationSize;Ge++)u(D.location+Ge,ce.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ge=0;Ge<D.locationSize;Ge++)p(D.location+Ge);t.bindBuffer(t.ARRAY_BUFFER,He);for(let Ge=0;Ge<D.locationSize;Ge++)g(D.location+Ge,se/D.locationSize,X,Q,be*te,(Ce+se/D.locationSize*Ge)*te,ue)}else{if(q.isInstancedBufferAttribute){for(let ce=0;ce<D.locationSize;ce++)u(D.location+ce,q.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ce=0;ce<D.locationSize;ce++)p(D.location+ce);t.bindBuffer(t.ARRAY_BUFFER,He);for(let ce=0;ce<D.locationSize;ce++)g(D.location+ce,se/D.locationSize,X,Q,se*te,se/D.locationSize*ce*te,ue)}}else if(O!==void 0){const Q=O[$];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(D.location,Q);break;case 3:t.vertexAttrib3fv(D.location,Q);break;case 4:t.vertexAttrib4fv(D.location,Q);break;default:t.vertexAttrib1fv(D.location,Q)}}}}_()}function b(){P();for(const x in i){const E=i[x];for(const z in E){const F=E[z];for(const W in F)f(F[W].object),delete F[W];delete E[z]}delete i[x]}}function C(x){if(i[x.id]===void 0)return;const E=i[x.id];for(const z in E){const F=E[z];for(const W in F)f(F[W].object),delete F[W];delete E[z]}delete i[x.id]}function w(x){for(const E in i){const z=i[E];if(z[x.id]===void 0)continue;const F=z[x.id];for(const W in F)f(F[W].object),delete F[W];delete z[x.id]}}function P(){H(),o=!0,s!==r&&(s=r,c(s.object))}function H(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:H,dispose:b,releaseStatesOfGeometry:C,releaseStatesOfProgram:w,initAttributes:y,enableAttribute:p,disableUnusedAttributes:_}}function BE(t,e,n){let i;function r(c){i=c}function s(c,f){t.drawArrays(i,c,f),n.update(f,i,1)}function o(c,f,h){h!==0&&(t.drawArraysInstanced(i,c,f,h),n.update(f,i,h))}function a(c,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,h);let m=0;for(let v=0;v<h;v++)m+=f[v];n.update(m,i,1)}function l(c,f,h,d){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)o(c[v],f[v],d[v]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,f,0,d,0,h);let v=0;for(let y=0;y<h;y++)v+=f[y];for(let y=0;y<d.length;y++)n.update(v,i,d[y])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function zE(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==zn&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const P=w===Uo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==_i&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==ui&&!P)}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const h=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const w=e.get("EXT_clip_control");w.clipControlEXT(w.LOWER_LEFT_EXT,w.ZERO_TO_ONE_EXT)}const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=v>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:_,maxVaryings:g,maxFragmentUniforms:M,vertexTextures:b,maxSamples:C}}function HE(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new lr,a=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||i!==0||r;return r=d,i=h.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=f(h,d,0)},this.setState=function(h,d,m){const v=h.clippingPlanes,y=h.clipIntersection,p=h.clipShadows,u=t.get(h);if(!r||v===null||v.length===0||s&&!p)s?f(null):c();else{const _=s?0:i,g=_*4;let M=u.clippingState||null;l.value=M,M=f(v,d,g,m);for(let b=0;b!==g;++b)M[b]=n[b];u.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,m,v){const y=h!==null?h.length:0;let p=null;if(y!==0){if(p=l.value,v!==!0||p===null){const u=m+y*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<u)&&(p=new Float32Array(u));for(let g=0,M=m;g!==y;++g,M+=4)o.copy(h[g]).applyMatrix4(_,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function VE(t){let e=new WeakMap;function n(o,a){return a===of?o.mapping=Ms:a===af&&(o.mapping=Es),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===of||a===af)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Jy(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Q_ extends q_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const rs=4,Up=[.125,.215,.35,.446,.526,.582],fr=20,$c=new Q_,Fp=new We;let qc=null,Kc=0,Zc=0,Qc=!1;const cr=(1+Math.sqrt(5))/2,jr=1/cr,Op=[new B(-cr,jr,0),new B(cr,jr,0),new B(-jr,0,cr),new B(jr,0,cr),new B(0,cr,-jr),new B(0,cr,jr),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class kp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){qc=this._renderer.getRenderTarget(),Kc=this._renderer.getActiveCubeFace(),Zc=this._renderer.getActiveMipmapLevel(),Qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qc,Kc,Zc),this._renderer.xr.enabled=Qc,e.scissorTest=!1,wa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ms||e.mapping===Es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qc=this._renderer.getRenderTarget(),Kc=this._renderer.getActiveCubeFace(),Zc=this._renderer.getActiveMipmapLevel(),Qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:Uo,format:zn,colorSpace:Zi,depthBuffer:!1},r=Bp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=GE(s)),this._blurMaterial=WE(s,e,n)}return r}_compileMaterial(e){const n=new Ut(this._lodPlanes[0],e);this._renderer.compile(n,$c)}_sceneToCubeUV(e,n,i,r){const a=new En(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Fp),f.toneMapping=Gi,f.autoClear=!1;const m=new co({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),v=new Ut(new Ar,m);let y=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,y=!0):(m.color.copy(Fp),y=!0);for(let u=0;u<6;u++){const _=u%3;_===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):_===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const g=this._cubeSize;wa(r,_*g,u>2?g:0,g,g),f.setRenderTarget(r),y&&f.render(v,a),f.render(e,a)}v.geometry.dispose(),v.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ms||e.mapping===Es;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ut(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;wa(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,$c)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Op[(r-s-1)%Op.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new Ut(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*fr-1),y=s/v,p=isFinite(s)?1+Math.floor(f*y):fr;p>fr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${fr}`);const u=[];let _=0;for(let w=0;w<fr;++w){const P=w/y,H=Math.exp(-P*P/2);u.push(H),w===0?_+=H:w<p&&(_+=2*H)}for(let w=0;w<u.length;w++)u[w]=u[w]/_;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=u,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:g}=this;d.dTheta.value=v,d.mipInt.value=g-i;const M=this._sizeLods[r],b=3*M*(r>g-rs?r-g+rs:0),C=4*(this._cubeSize-M);wa(n,b,C,3*M,2*M),l.setRenderTarget(n),l.render(h,$c)}}function GE(t){const e=[],n=[],i=[];let r=t;const s=t-rs+1+Up.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-rs?l=Up[o-t+rs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,h=1+c,d=[f,f,h,f,h,h,f,f,h,h,f,h],m=6,v=6,y=3,p=2,u=1,_=new Float32Array(y*v*m),g=new Float32Array(p*v*m),M=new Float32Array(u*v*m);for(let C=0;C<m;C++){const w=C%3*2/3-1,P=C>2?0:-1,H=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];_.set(H,y*v*C),g.set(d,p*v*C);const x=[C,C,C,C,C,C];M.set(x,u*v*C)}const b=new gn;b.setAttribute("position",new Cn(_,y)),b.setAttribute("uv",new Cn(g,p)),b.setAttribute("faceIndex",new Cn(M,u)),e.push(b),r>rs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Bp(t,e,n){const i=new wr(t,e,n);return i.texture.mapping=jl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function wa(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function WE(t,e,n){const i=new Float32Array(fr),r=new B(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Gd(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function zp(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gd(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Hp(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Gd(){return`

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
	`}function jE(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===of||l===af,f=l===Ms||l===Es;if(c||f){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new kp(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const m=a.image;return c&&m&&m.height>0||f&&m&&r(m)?(n===null&&(n=new kp(t)),h=c?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function XE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&qa("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function YE(t,e,n,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const y=d.morphAttributes[v];for(let p=0,u=y.length;p<u;p++)e.remove(y[p])}d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const v in d)e.update(d[v],t.ARRAY_BUFFER);const m=h.morphAttributes;for(const v in m){const y=m[v];for(let p=0,u=y.length;p<u;p++)e.update(y[p],t.ARRAY_BUFFER)}}function c(h){const d=[],m=h.index,v=h.attributes.position;let y=0;if(m!==null){const _=m.array;y=m.version;for(let g=0,M=_.length;g<M;g+=3){const b=_[g+0],C=_[g+1],w=_[g+2];d.push(b,C,C,w,w,b)}}else if(v!==void 0){const _=v.array;y=v.version;for(let g=0,M=_.length/3-1;g<M;g+=3){const b=g+0,C=g+1,w=g+2;d.push(b,C,C,w,w,b)}}else return;const p=new(H_(d)?Y_:X_)(d,1);p.version=y;const u=s.get(h);u&&e.remove(u),s.set(h,p)}function f(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function $E(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,m){t.drawElements(i,m,s,d*o),n.update(m,i,1)}function c(d,m,v){v!==0&&(t.drawElementsInstanced(i,m,s,d*o,v),n.update(m,i,v))}function f(d,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,d,0,v);let p=0;for(let u=0;u<v;u++)p+=m[u];n.update(p,i,1)}function h(d,m,v,y){if(v===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<d.length;u++)c(d[u]/o,m[u],y[u]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,d,0,y,0,v);let u=0;for(let _=0;_<v;_++)u+=m[_];for(let _=0;_<y.length;_++)n.update(u,i,y[_])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function qE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function KE(t,e,n){const i=new WeakMap,r=new vt;function s(o,a,l){const c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=f!==void 0?f.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let x=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var m=x;d!==void 0&&d.texture.dispose();const v=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],g=a.morphAttributes.color||[];let M=0;v===!0&&(M=1),y===!0&&(M=2),p===!0&&(M=3);let b=a.attributes.position.count*M,C=1;b>e.maxTextureSize&&(C=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const w=new Float32Array(b*C*4*h),P=new G_(w,b,C,h);P.type=ui,P.needsUpdate=!0;const H=M*4;for(let E=0;E<h;E++){const z=u[E],F=_[E],W=g[E],j=b*C*4*E;for(let O=0;O<z.count;O++){const $=O*H;v===!0&&(r.fromBufferAttribute(z,O),w[j+$+0]=r.x,w[j+$+1]=r.y,w[j+$+2]=r.z,w[j+$+3]=0),y===!0&&(r.fromBufferAttribute(F,O),w[j+$+4]=r.x,w[j+$+5]=r.y,w[j+$+6]=r.z,w[j+$+7]=0),p===!0&&(r.fromBufferAttribute(W,O),w[j+$+8]=r.x,w[j+$+9]=r.y,w[j+$+10]=r.z,w[j+$+11]=W.itemSize===4?r.w:1)}}d={count:h,texture:P,size:new Ze(b,C)},i.set(a,d),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let v=0;for(let p=0;p<c.length;p++)v+=c[p];const y=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function ZE(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,h=e.get(l,f);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class J_ extends on{constructor(e,n,i,r,s,o,a,l,c,f=ds){if(f!==ds&&f!==ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===ds&&(i=Tr),i===void 0&&f===ws&&(i=Ts),super(null,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:wn,this.minFilter=l!==void 0?l:wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const ev=new on,Vp=new J_(1,1),tv=new G_,nv=new Oy,iv=new K_,Gp=[],Wp=[],jp=new Float32Array(16),Xp=new Float32Array(9),Yp=new Float32Array(4);function Ls(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Gp[r];if(s===void 0&&(s=new Float32Array(r),Gp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ct(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Rt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Yl(t,e){let n=Wp[e];n===void 0&&(n=new Int32Array(e),Wp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function QE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function JE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2fv(this.addr,e),Rt(n,e)}}function eT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ct(n,e))return;t.uniform3fv(this.addr,e),Rt(n,e)}}function tT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4fv(this.addr,e),Rt(n,e)}}function nT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Rt(n,e)}else{if(Ct(n,i))return;Yp.set(i),t.uniformMatrix2fv(this.addr,!1,Yp),Rt(n,i)}}function iT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Rt(n,e)}else{if(Ct(n,i))return;Xp.set(i),t.uniformMatrix3fv(this.addr,!1,Xp),Rt(n,i)}}function rT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Rt(n,e)}else{if(Ct(n,i))return;jp.set(i),t.uniformMatrix4fv(this.addr,!1,jp),Rt(n,i)}}function sT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function oT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2iv(this.addr,e),Rt(n,e)}}function aT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3iv(this.addr,e),Rt(n,e)}}function lT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4iv(this.addr,e),Rt(n,e)}}function cT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function uT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2uiv(this.addr,e),Rt(n,e)}}function fT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3uiv(this.addr,e),Rt(n,e)}}function dT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4uiv(this.addr,e),Rt(n,e)}}function hT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Vp.compareFunction=z_,s=Vp):s=ev,n.setTexture2D(e||s,r)}function pT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||nv,r)}function mT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||iv,r)}function gT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||tv,r)}function _T(t){switch(t){case 5126:return QE;case 35664:return JE;case 35665:return eT;case 35666:return tT;case 35674:return nT;case 35675:return iT;case 35676:return rT;case 5124:case 35670:return sT;case 35667:case 35671:return oT;case 35668:case 35672:return aT;case 35669:case 35673:return lT;case 5125:return cT;case 36294:return uT;case 36295:return fT;case 36296:return dT;case 35678:case 36198:case 36298:case 36306:case 35682:return hT;case 35679:case 36299:case 36307:return pT;case 35680:case 36300:case 36308:case 36293:return mT;case 36289:case 36303:case 36311:case 36292:return gT}}function vT(t,e){t.uniform1fv(this.addr,e)}function xT(t,e){const n=Ls(e,this.size,2);t.uniform2fv(this.addr,n)}function yT(t,e){const n=Ls(e,this.size,3);t.uniform3fv(this.addr,n)}function ST(t,e){const n=Ls(e,this.size,4);t.uniform4fv(this.addr,n)}function MT(t,e){const n=Ls(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function ET(t,e){const n=Ls(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function TT(t,e){const n=Ls(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function wT(t,e){t.uniform1iv(this.addr,e)}function AT(t,e){t.uniform2iv(this.addr,e)}function CT(t,e){t.uniform3iv(this.addr,e)}function RT(t,e){t.uniform4iv(this.addr,e)}function bT(t,e){t.uniform1uiv(this.addr,e)}function PT(t,e){t.uniform2uiv(this.addr,e)}function LT(t,e){t.uniform3uiv(this.addr,e)}function DT(t,e){t.uniform4uiv(this.addr,e)}function NT(t,e,n){const i=this.cache,r=e.length,s=Yl(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||ev,s[o])}function IT(t,e,n){const i=this.cache,r=e.length,s=Yl(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||nv,s[o])}function UT(t,e,n){const i=this.cache,r=e.length,s=Yl(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||iv,s[o])}function FT(t,e,n){const i=this.cache,r=e.length,s=Yl(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||tv,s[o])}function OT(t){switch(t){case 5126:return vT;case 35664:return xT;case 35665:return yT;case 35666:return ST;case 35674:return MT;case 35675:return ET;case 35676:return TT;case 5124:case 35670:return wT;case 35667:case 35671:return AT;case 35668:case 35672:return CT;case 35669:case 35673:return RT;case 5125:return bT;case 36294:return PT;case 36295:return LT;case 36296:return DT;case 35678:case 36198:case 36298:case 36306:case 35682:return NT;case 35679:case 36299:case 36307:return IT;case 35680:case 36300:case 36308:case 36293:return UT;case 36289:case 36303:case 36311:case 36292:return FT}}class kT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=_T(n.type)}}class BT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=OT(n.type)}}class zT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Jc=/(\w+)(\])?(\[|\.)?/g;function $p(t,e){t.seq.push(e),t.map[e.id]=e}function HT(t,e,n){const i=t.name,r=i.length;for(Jc.lastIndex=0;;){const s=Jc.exec(i),o=Jc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){$p(n,c===void 0?new kT(a,t,e):new BT(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new zT(a),$p(n,h)),n=h}}}class Ka{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);HT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function qp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const VT=37297;let GT=0;function WT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function jT(t){const e=tt.getPrimaries(tt.workingColorSpace),n=tt.getPrimaries(t);let i;switch(e===n?i="":e===El&&n===Ml?i="LinearDisplayP3ToLinearSRGB":e===Ml&&n===El&&(i="LinearSRGBToLinearDisplayP3"),t){case Zi:case Xl:return[i,"LinearTransferOETF"];case Xn:case zd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Kp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+WT(t.getShaderSource(e),o)}else return r}function XT(t,e){const n=jT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function YT(t,e){let n;switch(e){case cy:n="Linear";break;case uy:n="Reinhard";break;case fy:n="Cineon";break;case dy:n="ACESFilmic";break;case py:n="AgX";break;case my:n="Neutral";break;case hy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Aa=new B;function $T(){tt.getLuminanceCoefficients(Aa);const t=Aa.x.toFixed(4),e=Aa.y.toFixed(4),n=Aa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qs).join(`
`)}function KT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function ZT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Qs(t){return t!==""}function Zp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const QT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Of(t){return t.replace(QT,e1)}const JT=new Map;function e1(t,e){let n=Be[e];if(n===void 0){const i=JT.get(e);if(i!==void 0)n=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Of(n)}const t1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jp(t){return t.replace(t1,n1)}function n1(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function em(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function i1(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===A_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Vx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===si&&(e="SHADOWMAP_TYPE_VSM"),e}function r1(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ms:case Es:e="ENVMAP_TYPE_CUBE";break;case jl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function s1(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Es:e="ENVMAP_MODE_REFRACTION";break}return e}function o1(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case C_:e="ENVMAP_BLENDING_MULTIPLY";break;case ay:e="ENVMAP_BLENDING_MIX";break;case ly:e="ENVMAP_BLENDING_ADD";break}return e}function a1(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function l1(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=i1(n),c=r1(n),f=s1(n),h=o1(n),d=a1(n),m=qT(n),v=KT(s),y=r.createProgram();let p,u,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Qs).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Qs).join(`
`),u.length>0&&(u+=`
`)):(p=[em(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),u=[em(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Gi?"#define TONE_MAPPING":"",n.toneMapping!==Gi?Be.tonemapping_pars_fragment:"",n.toneMapping!==Gi?YT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,XT("linearToOutputTexel",n.outputColorSpace),$T(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Qs).join(`
`)),o=Of(o),o=Zp(o,n),o=Qp(o,n),a=Of(a),a=Zp(a,n),a=Qp(a,n),o=Jp(o),a=Jp(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",n.glslVersion===_p?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===_p?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const g=_+p+o,M=_+u+a,b=qp(r,r.VERTEX_SHADER,g),C=qp(r,r.FRAGMENT_SHADER,M);r.attachShader(y,b),r.attachShader(y,C),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function w(E){if(t.debug.checkShaderErrors){const z=r.getProgramInfoLog(y).trim(),F=r.getShaderInfoLog(b).trim(),W=r.getShaderInfoLog(C).trim();let j=!0,O=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(j=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,b,C);else{const $=Kp(r,b,"vertex"),D=Kp(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+z+`
`+$+`
`+D)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(F===""||W==="")&&(O=!1);O&&(E.diagnostics={runnable:j,programLog:z,vertexShader:{log:F,prefix:p},fragmentShader:{log:W,prefix:u}})}r.deleteShader(b),r.deleteShader(C),P=new Ka(r,y),H=ZT(r,y)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let H;this.getAttributes=function(){return H===void 0&&w(this),H};let x=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(y,VT)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=GT++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=C,this}let c1=0;class u1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new f1(e),n.set(e,i)),i}}class f1{constructor(e){this.id=c1++,this.code=e,this.usedTimes=0}}function d1(t,e,n,i,r,s,o){const a=new W_,l=new u1,c=new Set,f=[],h=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,m=r.vertexTextures;let v=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return c.add(x),x===0?"uv":`uv${x}`}function u(x,E,z,F,W){const j=F.fog,O=W.geometry,$=x.isMeshStandardMaterial?F.environment:null,D=(x.isMeshStandardMaterial?n:e).get(x.envMap||$),q=D&&D.mapping===jl?D.image.height:null,Q=y[x.type];x.precision!==null&&(v=r.getMaxPrecision(x.precision),v!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",v,"instead."));const se=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Ae=se!==void 0?se.length:0;let He=0;O.morphAttributes.position!==void 0&&(He=1),O.morphAttributes.normal!==void 0&&(He=2),O.morphAttributes.color!==void 0&&(He=3);let X,te,ue,ce;if(Q){const Kt=Yn[Q];X=Kt.vertexShader,te=Kt.fragmentShader}else X=x.vertexShader,te=x.fragmentShader,l.update(x),ue=l.getVertexShaderID(x),ce=l.getFragmentShaderID(x);const be=t.getRenderTarget(),Ce=W.isInstancedMesh===!0,Ge=W.isBatchedMesh===!0,oe=!!x.map,Te=!!x.matcap,L=!!D,je=!!x.aoMap,Ne=!!x.lightMap,ke=!!x.bumpMap,Pe=!!x.normalMap,rt=!!x.displacementMap,Re=!!x.emissiveMap,R=!!x.metalnessMap,S=!!x.roughnessMap,k=x.anisotropy>0,Z=x.clearcoat>0,ee=x.dispersion>0,K=x.iridescence>0,Se=x.sheen>0,ae=x.transmission>0,he=k&&!!x.anisotropyMap,Ke=Z&&!!x.clearcoatMap,ie=Z&&!!x.clearcoatNormalMap,_e=Z&&!!x.clearcoatRoughnessMap,Ie=K&&!!x.iridescenceMap,Ue=K&&!!x.iridescenceThicknessMap,ve=Se&&!!x.sheenColorMap,Xe=Se&&!!x.sheenRoughnessMap,Oe=!!x.specularMap,st=!!x.specularColorMap,N=!!x.specularIntensityMap,pe=ae&&!!x.transmissionMap,Y=ae&&!!x.thicknessMap,J=!!x.gradientMap,fe=!!x.alphaMap,me=x.alphaTest>0,Ye=!!x.alphaHash,St=!!x.extensions;let qt=Gi;x.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(qt=t.toneMapping);const Qe={shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:X,fragmentShader:te,defines:x.defines,customVertexShaderID:ue,customFragmentShaderID:ce,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:v,batching:Ge,batchingColor:Ge&&W._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&W.instanceColor!==null,instancingMorph:Ce&&W.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:be===null?t.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:Zi,alphaToCoverage:!!x.alphaToCoverage,map:oe,matcap:Te,envMap:L,envMapMode:L&&D.mapping,envMapCubeUVHeight:q,aoMap:je,lightMap:Ne,bumpMap:ke,normalMap:Pe,displacementMap:m&&rt,emissiveMap:Re,normalMapObjectSpace:Pe&&x.normalMapType===xy,normalMapTangentSpace:Pe&&x.normalMapType===B_,metalnessMap:R,roughnessMap:S,anisotropy:k,anisotropyMap:he,clearcoat:Z,clearcoatMap:Ke,clearcoatNormalMap:ie,clearcoatRoughnessMap:_e,dispersion:ee,iridescence:K,iridescenceMap:Ie,iridescenceThicknessMap:Ue,sheen:Se,sheenColorMap:ve,sheenRoughnessMap:Xe,specularMap:Oe,specularColorMap:st,specularIntensityMap:N,transmission:ae,transmissionMap:pe,thicknessMap:Y,gradientMap:J,opaque:x.transparent===!1&&x.blending===fs&&x.alphaToCoverage===!1,alphaMap:fe,alphaTest:me,alphaHash:Ye,combine:x.combine,mapUv:oe&&p(x.map.channel),aoMapUv:je&&p(x.aoMap.channel),lightMapUv:Ne&&p(x.lightMap.channel),bumpMapUv:ke&&p(x.bumpMap.channel),normalMapUv:Pe&&p(x.normalMap.channel),displacementMapUv:rt&&p(x.displacementMap.channel),emissiveMapUv:Re&&p(x.emissiveMap.channel),metalnessMapUv:R&&p(x.metalnessMap.channel),roughnessMapUv:S&&p(x.roughnessMap.channel),anisotropyMapUv:he&&p(x.anisotropyMap.channel),clearcoatMapUv:Ke&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:ie&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&p(x.sheenRoughnessMap.channel),specularMapUv:Oe&&p(x.specularMap.channel),specularColorMapUv:st&&p(x.specularColorMap.channel),specularIntensityMapUv:N&&p(x.specularIntensityMap.channel),transmissionMapUv:pe&&p(x.transmissionMap.channel),thicknessMapUv:Y&&p(x.thicknessMap.channel),alphaMapUv:fe&&p(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Pe||k),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!O.attributes.uv&&(oe||fe),fog:!!j,useFog:x.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:d,skinning:W.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:He,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&z.length>0,shadowMapType:t.shadowMap.type,toneMapping:qt,decodeVideoTexture:oe&&x.map.isVideoTexture===!0&&tt.getTransfer(x.map.colorSpace)===ct,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===qn,flipSided:x.side===sn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:St&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(St&&x.extensions.multiDraw===!0||Ge)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Qe.vertexUv1s=c.has(1),Qe.vertexUv2s=c.has(2),Qe.vertexUv3s=c.has(3),c.clear(),Qe}function _(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const z in x.defines)E.push(z),E.push(x.defines[z]);return x.isRawShaderMaterial===!1&&(g(E,x),M(E,x),E.push(t.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function g(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function M(x,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),x.push(a.mask)}function b(x){const E=y[x.type];let z;if(E){const F=Yn[E];z=qy.clone(F.uniforms)}else z=x.uniforms;return z}function C(x,E){let z;for(let F=0,W=f.length;F<W;F++){const j=f[F];if(j.cacheKey===E){z=j,++z.usedTimes;break}}return z===void 0&&(z=new l1(t,E,x,s),f.push(z)),z}function w(x){if(--x.usedTimes===0){const E=f.indexOf(x);f[E]=f[f.length-1],f.pop(),x.destroy()}}function P(x){l.remove(x)}function H(){l.dispose()}return{getParameters:u,getProgramCacheKey:_,getUniforms:b,acquireProgram:C,releaseProgram:w,releaseShaderCache:P,programs:f,dispose:H}}function h1(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function p1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function tm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function nm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,d,m,v,y,p){let u=t[e];return u===void 0?(u={id:h.id,object:h,geometry:d,material:m,groupOrder:v,renderOrder:h.renderOrder,z:y,group:p},t[e]=u):(u.id=h.id,u.object=h,u.geometry=d,u.material=m,u.groupOrder=v,u.renderOrder=h.renderOrder,u.z=y,u.group=p),e++,u}function a(h,d,m,v,y,p){const u=o(h,d,m,v,y,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):n.push(u)}function l(h,d,m,v,y,p){const u=o(h,d,m,v,y,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):n.unshift(u)}function c(h,d){n.length>1&&n.sort(h||p1),i.length>1&&i.sort(d||tm),r.length>1&&r.sort(d||tm)}function f(){for(let h=e,d=t.length;h<d;h++){const m=t[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:c}}function m1(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new nm,t.set(i,[o])):r>=s.length?(o=new nm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function g1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new B,color:new We};break;case"SpotLight":n={position:new B,direction:new B,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new We,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new We,groundColor:new We};break;case"RectAreaLight":n={color:new We,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function _1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let v1=0;function x1(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function y1(t){const e=new g1,n=_1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);const r=new B,s=new dt,o=new dt;function a(c){let f=0,h=0,d=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let m=0,v=0,y=0,p=0,u=0,_=0,g=0,M=0,b=0,C=0,w=0;c.sort(x1);for(let H=0,x=c.length;H<x;H++){const E=c[H],z=E.color,F=E.intensity,W=E.distance,j=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)f+=z.r*F,h+=z.g*F,d+=z.b*F;else if(E.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(E.sh.coefficients[O],F);w++}else if(E.isDirectionalLight){const O=e.get(E);if(O.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const $=E.shadow,D=n.get(E);D.shadowIntensity=$.intensity,D.shadowBias=$.bias,D.shadowNormalBias=$.normalBias,D.shadowRadius=$.radius,D.shadowMapSize=$.mapSize,i.directionalShadow[m]=D,i.directionalShadowMap[m]=j,i.directionalShadowMatrix[m]=E.shadow.matrix,_++}i.directional[m]=O,m++}else if(E.isSpotLight){const O=e.get(E);O.position.setFromMatrixPosition(E.matrixWorld),O.color.copy(z).multiplyScalar(F),O.distance=W,O.coneCos=Math.cos(E.angle),O.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),O.decay=E.decay,i.spot[y]=O;const $=E.shadow;if(E.map&&(i.spotLightMap[b]=E.map,b++,$.updateMatrices(E),E.castShadow&&C++),i.spotLightMatrix[y]=$.matrix,E.castShadow){const D=n.get(E);D.shadowIntensity=$.intensity,D.shadowBias=$.bias,D.shadowNormalBias=$.normalBias,D.shadowRadius=$.radius,D.shadowMapSize=$.mapSize,i.spotShadow[y]=D,i.spotShadowMap[y]=j,M++}y++}else if(E.isRectAreaLight){const O=e.get(E);O.color.copy(z).multiplyScalar(F),O.halfWidth.set(E.width*.5,0,0),O.halfHeight.set(0,E.height*.5,0),i.rectArea[p]=O,p++}else if(E.isPointLight){const O=e.get(E);if(O.color.copy(E.color).multiplyScalar(E.intensity),O.distance=E.distance,O.decay=E.decay,E.castShadow){const $=E.shadow,D=n.get(E);D.shadowIntensity=$.intensity,D.shadowBias=$.bias,D.shadowNormalBias=$.normalBias,D.shadowRadius=$.radius,D.shadowMapSize=$.mapSize,D.shadowCameraNear=$.camera.near,D.shadowCameraFar=$.camera.far,i.pointShadow[v]=D,i.pointShadowMap[v]=j,i.pointShadowMatrix[v]=E.shadow.matrix,g++}i.point[v]=O,v++}else if(E.isHemisphereLight){const O=e.get(E);O.skyColor.copy(E.color).multiplyScalar(F),O.groundColor.copy(E.groundColor).multiplyScalar(F),i.hemi[u]=O,u++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=d;const P=i.hash;(P.directionalLength!==m||P.pointLength!==v||P.spotLength!==y||P.rectAreaLength!==p||P.hemiLength!==u||P.numDirectionalShadows!==_||P.numPointShadows!==g||P.numSpotShadows!==M||P.numSpotMaps!==b||P.numLightProbes!==w)&&(i.directional.length=m,i.spot.length=y,i.rectArea.length=p,i.point.length=v,i.hemi.length=u,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=M+b-C,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=w,P.directionalLength=m,P.pointLength=v,P.spotLength=y,P.rectAreaLength=p,P.hemiLength=u,P.numDirectionalShadows=_,P.numPointShadows=g,P.numSpotShadows=M,P.numSpotMaps=b,P.numLightProbes=w,i.version=v1++)}function l(c,f){let h=0,d=0,m=0,v=0,y=0;const p=f.matrixWorldInverse;for(let u=0,_=c.length;u<_;u++){const g=c[u];if(g.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),h++}else if(g.isSpotLight){const M=i.spot[m];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),m++}else if(g.isRectAreaLight){const M=i.rectArea[v];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(p),o.identity(),s.copy(g.matrixWorld),s.premultiply(p),o.extractRotation(s),M.halfWidth.set(g.width*.5,0,0),M.halfHeight.set(0,g.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),v++}else if(g.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(p),d++}else if(g.isHemisphereLight){const M=i.hemi[y];M.direction.setFromMatrixPosition(g.matrixWorld),M.direction.transformDirection(p),y++}}}return{setup:a,setupView:l,state:i}}function im(t){const e=new y1(t),n=[],i=[];function r(f){c.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function o(f){i.push(f)}function a(){e.setup(n)}function l(f){e.setupView(n,f)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function S1(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new im(t),e.set(r,[a])):s>=o.length?(a=new im(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class M1 extends br{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_y,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class E1 extends br{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const T1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,w1=`uniform sampler2D shadow_pass;
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
}`;function A1(t,e,n){let i=new Vd;const r=new Ze,s=new Ze,o=new vt,a=new M1({depthPacking:vy}),l=new E1,c={},f=n.maxTextureSize,h={[Xi]:sn,[sn]:Xi,[qn]:qn},d=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:T1,fragmentShader:w1}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const v=new gn;v.setAttribute("position",new Cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Ut(v,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=A_;let u=this.type;this.render=function(C,w,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const H=t.getRenderTarget(),x=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),z=t.state;z.setBlending(Vi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const F=u!==si&&this.type===si,W=u===si&&this.type!==si;for(let j=0,O=C.length;j<O;j++){const $=C[j],D=$.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const q=D.getFrameExtents();if(r.multiply(q),s.copy(D.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/q.x),r.x=s.x*q.x,D.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/q.y),r.y=s.y*q.y,D.mapSize.y=s.y)),D.map===null||F===!0||W===!0){const se=this.type!==si?{minFilter:wn,magFilter:wn}:{};D.map!==null&&D.map.dispose(),D.map=new wr(r.x,r.y,se),D.map.texture.name=$.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const Q=D.getViewportCount();for(let se=0;se<Q;se++){const Ae=D.getViewport(se);o.set(s.x*Ae.x,s.y*Ae.y,s.x*Ae.z,s.y*Ae.w),z.viewport(o),D.updateMatrices($,se),i=D.getFrustum(),M(w,P,D.camera,$,this.type)}D.isPointLightShadow!==!0&&this.type===si&&_(D,P),D.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(H,x,E)};function _(C,w){const P=e.update(y);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new wr(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(w,null,P,d,y,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(w,null,P,m,y,null)}function g(C,w,P,H){let x=null;const E=P.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(E!==void 0)x=E;else if(x=P.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const z=x.uuid,F=w.uuid;let W=c[z];W===void 0&&(W={},c[z]=W);let j=W[F];j===void 0&&(j=x.clone(),W[F]=j,w.addEventListener("dispose",b)),x=j}if(x.visible=w.visible,x.wireframe=w.wireframe,H===si?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:h[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const z=t.properties.get(x);z.light=P}return x}function M(C,w,P,H,x){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===si)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,C.matrixWorld);const F=e.update(C),W=C.material;if(Array.isArray(W)){const j=F.groups;for(let O=0,$=j.length;O<$;O++){const D=j[O],q=W[D.materialIndex];if(q&&q.visible){const Q=g(C,q,H,x);C.onBeforeShadow(t,C,w,P,F,Q,D),t.renderBufferDirect(P,null,F,Q,C,D),C.onAfterShadow(t,C,w,P,F,Q,D)}}}else if(W.visible){const j=g(C,W,H,x);C.onBeforeShadow(t,C,w,P,F,j,null),t.renderBufferDirect(P,null,F,j,C,null),C.onAfterShadow(t,C,w,P,F,j,null)}}const z=C.children;for(let F=0,W=z.length;F<W;F++)M(z[F],w,P,H,x)}function b(C){C.target.removeEventListener("dispose",b);for(const P in c){const H=c[P],x=C.target.uuid;x in H&&(H[x].dispose(),delete H[x])}}}const C1={[Qu]:Ju,[ef]:rf,[tf]:sf,[Ss]:nf,[Ju]:Qu,[rf]:ef,[sf]:tf,[nf]:Ss};function R1(t){function e(){let N=!1;const pe=new vt;let Y=null;const J=new vt(0,0,0,0);return{setMask:function(fe){Y!==fe&&!N&&(t.colorMask(fe,fe,fe,fe),Y=fe)},setLocked:function(fe){N=fe},setClear:function(fe,me,Ye,St,qt){qt===!0&&(fe*=St,me*=St,Ye*=St),pe.set(fe,me,Ye,St),J.equals(pe)===!1&&(t.clearColor(fe,me,Ye,St),J.copy(pe))},reset:function(){N=!1,Y=null,J.set(-1,0,0,0)}}}function n(){let N=!1,pe=!1,Y=null,J=null,fe=null;return{setReversed:function(me){pe=me},setTest:function(me){me?ue(t.DEPTH_TEST):ce(t.DEPTH_TEST)},setMask:function(me){Y!==me&&!N&&(t.depthMask(me),Y=me)},setFunc:function(me){if(pe&&(me=C1[me]),J!==me){switch(me){case Qu:t.depthFunc(t.NEVER);break;case Ju:t.depthFunc(t.ALWAYS);break;case ef:t.depthFunc(t.LESS);break;case Ss:t.depthFunc(t.LEQUAL);break;case tf:t.depthFunc(t.EQUAL);break;case nf:t.depthFunc(t.GEQUAL);break;case rf:t.depthFunc(t.GREATER);break;case sf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}J=me}},setLocked:function(me){N=me},setClear:function(me){fe!==me&&(t.clearDepth(me),fe=me)},reset:function(){N=!1,Y=null,J=null,fe=null}}}function i(){let N=!1,pe=null,Y=null,J=null,fe=null,me=null,Ye=null,St=null,qt=null;return{setTest:function(Qe){N||(Qe?ue(t.STENCIL_TEST):ce(t.STENCIL_TEST))},setMask:function(Qe){pe!==Qe&&!N&&(t.stencilMask(Qe),pe=Qe)},setFunc:function(Qe,Kt,Jn){(Y!==Qe||J!==Kt||fe!==Jn)&&(t.stencilFunc(Qe,Kt,Jn),Y=Qe,J=Kt,fe=Jn)},setOp:function(Qe,Kt,Jn){(me!==Qe||Ye!==Kt||St!==Jn)&&(t.stencilOp(Qe,Kt,Jn),me=Qe,Ye=Kt,St=Jn)},setLocked:function(Qe){N=Qe},setClear:function(Qe){qt!==Qe&&(t.clearStencil(Qe),qt=Qe)},reset:function(){N=!1,pe=null,Y=null,J=null,fe=null,me=null,Ye=null,St=null,qt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},f={},h=new WeakMap,d=[],m=null,v=!1,y=null,p=null,u=null,_=null,g=null,M=null,b=null,C=new We(0,0,0),w=0,P=!1,H=null,x=null,E=null,z=null,F=null;const W=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,O=0;const $=t.getParameter(t.VERSION);$.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec($)[1]),j=O>=1):$.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),j=O>=2);let D=null,q={};const Q=t.getParameter(t.SCISSOR_BOX),se=t.getParameter(t.VIEWPORT),Ae=new vt().fromArray(Q),He=new vt().fromArray(se);function X(N,pe,Y,J){const fe=new Uint8Array(4),me=t.createTexture();t.bindTexture(N,me),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ye=0;Ye<Y;Ye++)N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?t.texImage3D(pe,0,t.RGBA,1,1,J,0,t.RGBA,t.UNSIGNED_BYTE,fe):t.texImage2D(pe+Ye,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,fe);return me}const te={};te[t.TEXTURE_2D]=X(t.TEXTURE_2D,t.TEXTURE_2D,1),te[t.TEXTURE_CUBE_MAP]=X(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[t.TEXTURE_2D_ARRAY]=X(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),te[t.TEXTURE_3D]=X(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ue(t.DEPTH_TEST),s.setFunc(Ss),Ne(!1),ke(fp),ue(t.CULL_FACE),L(Vi);function ue(N){c[N]!==!0&&(t.enable(N),c[N]=!0)}function ce(N){c[N]!==!1&&(t.disable(N),c[N]=!1)}function be(N,pe){return f[N]!==pe?(t.bindFramebuffer(N,pe),f[N]=pe,N===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=pe),N===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=pe),!0):!1}function Ce(N,pe){let Y=d,J=!1;if(N){Y=h.get(pe),Y===void 0&&(Y=[],h.set(pe,Y));const fe=N.textures;if(Y.length!==fe.length||Y[0]!==t.COLOR_ATTACHMENT0){for(let me=0,Ye=fe.length;me<Ye;me++)Y[me]=t.COLOR_ATTACHMENT0+me;Y.length=fe.length,J=!0}}else Y[0]!==t.BACK&&(Y[0]=t.BACK,J=!0);J&&t.drawBuffers(Y)}function Ge(N){return m!==N?(t.useProgram(N),m=N,!0):!1}const oe={[ur]:t.FUNC_ADD,[Wx]:t.FUNC_SUBTRACT,[jx]:t.FUNC_REVERSE_SUBTRACT};oe[Xx]=t.MIN,oe[Yx]=t.MAX;const Te={[$x]:t.ZERO,[qx]:t.ONE,[Kx]:t.SRC_COLOR,[Ku]:t.SRC_ALPHA,[ny]:t.SRC_ALPHA_SATURATE,[ey]:t.DST_COLOR,[Qx]:t.DST_ALPHA,[Zx]:t.ONE_MINUS_SRC_COLOR,[Zu]:t.ONE_MINUS_SRC_ALPHA,[ty]:t.ONE_MINUS_DST_COLOR,[Jx]:t.ONE_MINUS_DST_ALPHA,[iy]:t.CONSTANT_COLOR,[ry]:t.ONE_MINUS_CONSTANT_COLOR,[sy]:t.CONSTANT_ALPHA,[oy]:t.ONE_MINUS_CONSTANT_ALPHA};function L(N,pe,Y,J,fe,me,Ye,St,qt,Qe){if(N===Vi){v===!0&&(ce(t.BLEND),v=!1);return}if(v===!1&&(ue(t.BLEND),v=!0),N!==Gx){if(N!==y||Qe!==P){if((p!==ur||g!==ur)&&(t.blendEquation(t.FUNC_ADD),p=ur,g=ur),Qe)switch(N){case fs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case dp:t.blendFunc(t.ONE,t.ONE);break;case hp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case pp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case fs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case dp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case hp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case pp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}u=null,_=null,M=null,b=null,C.set(0,0,0),w=0,y=N,P=Qe}return}fe=fe||pe,me=me||Y,Ye=Ye||J,(pe!==p||fe!==g)&&(t.blendEquationSeparate(oe[pe],oe[fe]),p=pe,g=fe),(Y!==u||J!==_||me!==M||Ye!==b)&&(t.blendFuncSeparate(Te[Y],Te[J],Te[me],Te[Ye]),u=Y,_=J,M=me,b=Ye),(St.equals(C)===!1||qt!==w)&&(t.blendColor(St.r,St.g,St.b,qt),C.copy(St),w=qt),y=N,P=!1}function je(N,pe){N.side===qn?ce(t.CULL_FACE):ue(t.CULL_FACE);let Y=N.side===sn;pe&&(Y=!Y),Ne(Y),N.blending===fs&&N.transparent===!1?L(Vi):L(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),r.setMask(N.colorWrite);const J=N.stencilWrite;o.setTest(J),J&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),rt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ue(t.SAMPLE_ALPHA_TO_COVERAGE):ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(N){H!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),H=N)}function ke(N){N!==zx?(ue(t.CULL_FACE),N!==x&&(N===fp?t.cullFace(t.BACK):N===Hx?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ce(t.CULL_FACE),x=N}function Pe(N){N!==E&&(j&&t.lineWidth(N),E=N)}function rt(N,pe,Y){N?(ue(t.POLYGON_OFFSET_FILL),(z!==pe||F!==Y)&&(t.polygonOffset(pe,Y),z=pe,F=Y)):ce(t.POLYGON_OFFSET_FILL)}function Re(N){N?ue(t.SCISSOR_TEST):ce(t.SCISSOR_TEST)}function R(N){N===void 0&&(N=t.TEXTURE0+W-1),D!==N&&(t.activeTexture(N),D=N)}function S(N,pe,Y){Y===void 0&&(D===null?Y=t.TEXTURE0+W-1:Y=D);let J=q[Y];J===void 0&&(J={type:void 0,texture:void 0},q[Y]=J),(J.type!==N||J.texture!==pe)&&(D!==Y&&(t.activeTexture(Y),D=Y),t.bindTexture(N,pe||te[N]),J.type=N,J.texture=pe)}function k(){const N=q[D];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Z(){try{t.compressedTexImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ee(){try{t.compressedTexImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function K(){try{t.texSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Se(){try{t.texSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ae(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function he(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ke(){try{t.texStorage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{t.texStorage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _e(){try{t.texImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ie(){try{t.texImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ue(N){Ae.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),Ae.copy(N))}function ve(N){He.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),He.copy(N))}function Xe(N,pe){let Y=l.get(pe);Y===void 0&&(Y=new WeakMap,l.set(pe,Y));let J=Y.get(N);J===void 0&&(J=t.getUniformBlockIndex(pe,N.name),Y.set(N,J))}function Oe(N,pe){const J=l.get(pe).get(N);a.get(pe)!==J&&(t.uniformBlockBinding(pe,J,N.__bindingPointIndex),a.set(pe,J))}function st(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},D=null,q={},f={},h=new WeakMap,d=[],m=null,v=!1,y=null,p=null,u=null,_=null,g=null,M=null,b=null,C=new We(0,0,0),w=0,P=!1,H=null,x=null,E=null,z=null,F=null,Ae.set(0,0,t.canvas.width,t.canvas.height),He.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ue,disable:ce,bindFramebuffer:be,drawBuffers:Ce,useProgram:Ge,setBlending:L,setMaterial:je,setFlipSided:Ne,setCullFace:ke,setLineWidth:Pe,setPolygonOffset:rt,setScissorTest:Re,activeTexture:R,bindTexture:S,unbindTexture:k,compressedTexImage2D:Z,compressedTexImage3D:ee,texImage2D:_e,texImage3D:Ie,updateUBOMapping:Xe,uniformBlockBinding:Oe,texStorage2D:Ke,texStorage3D:ie,texSubImage2D:K,texSubImage3D:Se,compressedTexSubImage2D:ae,compressedTexSubImage3D:he,scissor:Ue,viewport:ve,reset:st}}function rm(t,e,n,i){const r=b1(i);switch(n){case D_:return t*e;case I_:return t*e;case U_:return t*e*2;case F_:return t*e/r.components*r.byteLength;case Od:return t*e/r.components*r.byteLength;case O_:return t*e*2/r.components*r.byteLength;case kd:return t*e*2/r.components*r.byteLength;case N_:return t*e*3/r.components*r.byteLength;case zn:return t*e*4/r.components*r.byteLength;case Bd:return t*e*4/r.components*r.byteLength;case Wa:case ja:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Xa:case Ya:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ff:case hf:return Math.max(t,16)*Math.max(e,8)/4;case uf:case df:return Math.max(t,8)*Math.max(e,8)/2;case pf:case mf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case gf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case _f:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case vf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case xf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case yf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Sf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Mf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Ef:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Tf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case wf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Af:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Cf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Rf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case bf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Pf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case $a:case Lf:case Df:return Math.ceil(t/4)*Math.ceil(e/4)*16;case k_:case Nf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case If:case Uf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function b1(t){switch(t){case _i:case b_:return{byteLength:1,components:1};case Ro:case P_:case Uo:return{byteLength:2,components:1};case Ud:case Fd:return{byteLength:2,components:4};case Tr:case Id:case ui:return{byteLength:4,components:1};case L_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function P1(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ze,f=new WeakMap;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,S){return m?new OffscreenCanvas(R,S):wl("canvas")}function y(R,S,k){let Z=1;const ee=Re(R);if((ee.width>k||ee.height>k)&&(Z=k/Math.max(ee.width,ee.height)),Z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const K=Math.floor(Z*ee.width),Se=Math.floor(Z*ee.height);h===void 0&&(h=v(K,Se));const ae=S?v(K,Se):h;return ae.width=K,ae.height=Se,ae.getContext("2d").drawImage(R,0,0,K,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+K+"x"+Se+")."),ae}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),R;return R}function p(R){return R.generateMipmaps&&R.minFilter!==wn&&R.minFilter!==kn}function u(R){t.generateMipmap(R)}function _(R,S,k,Z,ee=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let K=S;if(S===t.RED&&(k===t.FLOAT&&(K=t.R32F),k===t.HALF_FLOAT&&(K=t.R16F),k===t.UNSIGNED_BYTE&&(K=t.R8)),S===t.RED_INTEGER&&(k===t.UNSIGNED_BYTE&&(K=t.R8UI),k===t.UNSIGNED_SHORT&&(K=t.R16UI),k===t.UNSIGNED_INT&&(K=t.R32UI),k===t.BYTE&&(K=t.R8I),k===t.SHORT&&(K=t.R16I),k===t.INT&&(K=t.R32I)),S===t.RG&&(k===t.FLOAT&&(K=t.RG32F),k===t.HALF_FLOAT&&(K=t.RG16F),k===t.UNSIGNED_BYTE&&(K=t.RG8)),S===t.RG_INTEGER&&(k===t.UNSIGNED_BYTE&&(K=t.RG8UI),k===t.UNSIGNED_SHORT&&(K=t.RG16UI),k===t.UNSIGNED_INT&&(K=t.RG32UI),k===t.BYTE&&(K=t.RG8I),k===t.SHORT&&(K=t.RG16I),k===t.INT&&(K=t.RG32I)),S===t.RGB_INTEGER&&(k===t.UNSIGNED_BYTE&&(K=t.RGB8UI),k===t.UNSIGNED_SHORT&&(K=t.RGB16UI),k===t.UNSIGNED_INT&&(K=t.RGB32UI),k===t.BYTE&&(K=t.RGB8I),k===t.SHORT&&(K=t.RGB16I),k===t.INT&&(K=t.RGB32I)),S===t.RGBA_INTEGER&&(k===t.UNSIGNED_BYTE&&(K=t.RGBA8UI),k===t.UNSIGNED_SHORT&&(K=t.RGBA16UI),k===t.UNSIGNED_INT&&(K=t.RGBA32UI),k===t.BYTE&&(K=t.RGBA8I),k===t.SHORT&&(K=t.RGBA16I),k===t.INT&&(K=t.RGBA32I)),S===t.RGB&&k===t.UNSIGNED_INT_5_9_9_9_REV&&(K=t.RGB9_E5),S===t.RGBA){const Se=ee?Sl:tt.getTransfer(Z);k===t.FLOAT&&(K=t.RGBA32F),k===t.HALF_FLOAT&&(K=t.RGBA16F),k===t.UNSIGNED_BYTE&&(K=Se===ct?t.SRGB8_ALPHA8:t.RGBA8),k===t.UNSIGNED_SHORT_4_4_4_4&&(K=t.RGBA4),k===t.UNSIGNED_SHORT_5_5_5_1&&(K=t.RGB5_A1)}return(K===t.R16F||K===t.R32F||K===t.RG16F||K===t.RG32F||K===t.RGBA16F||K===t.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function g(R,S){let k;return R?S===null||S===Tr||S===Ts?k=t.DEPTH24_STENCIL8:S===ui?k=t.DEPTH32F_STENCIL8:S===Ro&&(k=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Tr||S===Ts?k=t.DEPTH_COMPONENT24:S===ui?k=t.DEPTH_COMPONENT32F:S===Ro&&(k=t.DEPTH_COMPONENT16),k}function M(R,S){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==wn&&R.minFilter!==kn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function b(R){const S=R.target;S.removeEventListener("dispose",b),w(S),S.isVideoTexture&&f.delete(S)}function C(R){const S=R.target;S.removeEventListener("dispose",C),H(S)}function w(R){const S=i.get(R);if(S.__webglInit===void 0)return;const k=R.source,Z=d.get(k);if(Z){const ee=Z[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&P(R),Object.keys(Z).length===0&&d.delete(k)}i.remove(R)}function P(R){const S=i.get(R);t.deleteTexture(S.__webglTexture);const k=R.source,Z=d.get(k);delete Z[S.__cacheKey],o.memory.textures--}function H(R){const S=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let ee=0;ee<S.__webglFramebuffer[Z].length;ee++)t.deleteFramebuffer(S.__webglFramebuffer[Z][ee]);else t.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)t.deleteFramebuffer(S.__webglFramebuffer[Z]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const k=R.textures;for(let Z=0,ee=k.length;Z<ee;Z++){const K=i.get(k[Z]);K.__webglTexture&&(t.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(k[Z])}i.remove(R)}let x=0;function E(){x=0}function z(){const R=x;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),x+=1,R}function F(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function W(R,S){const k=i.get(R);if(R.isVideoTexture&&Pe(R),R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){const Z=R.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{He(k,R,S);return}}n.bindTexture(t.TEXTURE_2D,k.__webglTexture,t.TEXTURE0+S)}function j(R,S){const k=i.get(R);if(R.version>0&&k.__version!==R.version){He(k,R,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,k.__webglTexture,t.TEXTURE0+S)}function O(R,S){const k=i.get(R);if(R.version>0&&k.__version!==R.version){He(k,R,S);return}n.bindTexture(t.TEXTURE_3D,k.__webglTexture,t.TEXTURE0+S)}function $(R,S){const k=i.get(R);if(R.version>0&&k.__version!==R.version){X(k,R,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture,t.TEXTURE0+S)}const D={[lf]:t.REPEAT,[mr]:t.CLAMP_TO_EDGE,[cf]:t.MIRRORED_REPEAT},q={[wn]:t.NEAREST,[gy]:t.NEAREST_MIPMAP_NEAREST,[oa]:t.NEAREST_MIPMAP_LINEAR,[kn]:t.LINEAR,[Tc]:t.LINEAR_MIPMAP_NEAREST,[gr]:t.LINEAR_MIPMAP_LINEAR},Q={[yy]:t.NEVER,[Ay]:t.ALWAYS,[Sy]:t.LESS,[z_]:t.LEQUAL,[My]:t.EQUAL,[wy]:t.GEQUAL,[Ey]:t.GREATER,[Ty]:t.NOTEQUAL};function se(R,S){if(S.type===ui&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===kn||S.magFilter===Tc||S.magFilter===oa||S.magFilter===gr||S.minFilter===kn||S.minFilter===Tc||S.minFilter===oa||S.minFilter===gr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,D[S.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,D[S.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,D[S.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,q[S.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,q[S.minFilter]),S.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Q[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===wn||S.minFilter!==oa&&S.minFilter!==gr||S.type===ui&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Ae(R,S){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",b));const Z=S.source;let ee=d.get(Z);ee===void 0&&(ee={},d.set(Z,ee));const K=F(S);if(K!==R.__cacheKey){ee[K]===void 0&&(ee[K]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,k=!0),ee[K].usedTimes++;const Se=ee[R.__cacheKey];Se!==void 0&&(ee[R.__cacheKey].usedTimes--,Se.usedTimes===0&&P(S)),R.__cacheKey=K,R.__webglTexture=ee[K].texture}return k}function He(R,S,k){let Z=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=t.TEXTURE_3D);const ee=Ae(R,S),K=S.source;n.bindTexture(Z,R.__webglTexture,t.TEXTURE0+k);const Se=i.get(K);if(K.version!==Se.__version||ee===!0){n.activeTexture(t.TEXTURE0+k);const ae=tt.getPrimaries(tt.workingColorSpace),he=S.colorSpace===Li?null:tt.getPrimaries(S.colorSpace),Ke=S.colorSpace===Li||ae===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let ie=y(S.image,!1,r.maxTextureSize);ie=rt(S,ie);const _e=s.convert(S.format,S.colorSpace),Ie=s.convert(S.type);let Ue=_(S.internalFormat,_e,Ie,S.colorSpace,S.isVideoTexture);se(Z,S);let ve;const Xe=S.mipmaps,Oe=S.isVideoTexture!==!0,st=Se.__version===void 0||ee===!0,N=K.dataReady,pe=M(S,ie);if(S.isDepthTexture)Ue=g(S.format===ws,S.type),st&&(Oe?n.texStorage2D(t.TEXTURE_2D,1,Ue,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,Ue,ie.width,ie.height,0,_e,Ie,null));else if(S.isDataTexture)if(Xe.length>0){Oe&&st&&n.texStorage2D(t.TEXTURE_2D,pe,Ue,Xe[0].width,Xe[0].height);for(let Y=0,J=Xe.length;Y<J;Y++)ve=Xe[Y],Oe?N&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,ve.width,ve.height,_e,Ie,ve.data):n.texImage2D(t.TEXTURE_2D,Y,Ue,ve.width,ve.height,0,_e,Ie,ve.data);S.generateMipmaps=!1}else Oe?(st&&n.texStorage2D(t.TEXTURE_2D,pe,Ue,ie.width,ie.height),N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ie.width,ie.height,_e,Ie,ie.data)):n.texImage2D(t.TEXTURE_2D,0,Ue,ie.width,ie.height,0,_e,Ie,ie.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Oe&&st&&n.texStorage3D(t.TEXTURE_2D_ARRAY,pe,Ue,Xe[0].width,Xe[0].height,ie.depth);for(let Y=0,J=Xe.length;Y<J;Y++)if(ve=Xe[Y],S.format!==zn)if(_e!==null)if(Oe){if(N)if(S.layerUpdates.size>0){const fe=rm(ve.width,ve.height,S.format,S.type);for(const me of S.layerUpdates){const Ye=ve.data.subarray(me*fe/ve.data.BYTES_PER_ELEMENT,(me+1)*fe/ve.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,me,ve.width,ve.height,1,_e,Ye,0,0)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,ve.width,ve.height,ie.depth,_e,ve.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Y,Ue,ve.width,ve.height,ie.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?N&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,ve.width,ve.height,ie.depth,_e,Ie,ve.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Y,Ue,ve.width,ve.height,ie.depth,0,_e,Ie,ve.data)}else{Oe&&st&&n.texStorage2D(t.TEXTURE_2D,pe,Ue,Xe[0].width,Xe[0].height);for(let Y=0,J=Xe.length;Y<J;Y++)ve=Xe[Y],S.format!==zn?_e!==null?Oe?N&&n.compressedTexSubImage2D(t.TEXTURE_2D,Y,0,0,ve.width,ve.height,_e,ve.data):n.compressedTexImage2D(t.TEXTURE_2D,Y,Ue,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?N&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,ve.width,ve.height,_e,Ie,ve.data):n.texImage2D(t.TEXTURE_2D,Y,Ue,ve.width,ve.height,0,_e,Ie,ve.data)}else if(S.isDataArrayTexture)if(Oe){if(st&&n.texStorage3D(t.TEXTURE_2D_ARRAY,pe,Ue,ie.width,ie.height,ie.depth),N)if(S.layerUpdates.size>0){const Y=rm(ie.width,ie.height,S.format,S.type);for(const J of S.layerUpdates){const fe=ie.data.subarray(J*Y/ie.data.BYTES_PER_ELEMENT,(J+1)*Y/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,J,ie.width,ie.height,1,_e,Ie,fe)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,_e,Ie,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ue,ie.width,ie.height,ie.depth,0,_e,Ie,ie.data);else if(S.isData3DTexture)Oe?(st&&n.texStorage3D(t.TEXTURE_3D,pe,Ue,ie.width,ie.height,ie.depth),N&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,_e,Ie,ie.data)):n.texImage3D(t.TEXTURE_3D,0,Ue,ie.width,ie.height,ie.depth,0,_e,Ie,ie.data);else if(S.isFramebufferTexture){if(st)if(Oe)n.texStorage2D(t.TEXTURE_2D,pe,Ue,ie.width,ie.height);else{let Y=ie.width,J=ie.height;for(let fe=0;fe<pe;fe++)n.texImage2D(t.TEXTURE_2D,fe,Ue,Y,J,0,_e,Ie,null),Y>>=1,J>>=1}}else if(Xe.length>0){if(Oe&&st){const Y=Re(Xe[0]);n.texStorage2D(t.TEXTURE_2D,pe,Ue,Y.width,Y.height)}for(let Y=0,J=Xe.length;Y<J;Y++)ve=Xe[Y],Oe?N&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,_e,Ie,ve):n.texImage2D(t.TEXTURE_2D,Y,Ue,_e,Ie,ve);S.generateMipmaps=!1}else if(Oe){if(st){const Y=Re(ie);n.texStorage2D(t.TEXTURE_2D,pe,Ue,Y.width,Y.height)}N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,_e,Ie,ie)}else n.texImage2D(t.TEXTURE_2D,0,Ue,_e,Ie,ie);p(S)&&u(Z),Se.__version=K.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function X(R,S,k){if(S.image.length!==6)return;const Z=Ae(R,S),ee=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+k);const K=i.get(ee);if(ee.version!==K.__version||Z===!0){n.activeTexture(t.TEXTURE0+k);const Se=tt.getPrimaries(tt.workingColorSpace),ae=S.colorSpace===Li?null:tt.getPrimaries(S.colorSpace),he=S.colorSpace===Li||Se===ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Ke=S.isCompressedTexture||S.image[0].isCompressedTexture,ie=S.image[0]&&S.image[0].isDataTexture,_e=[];for(let J=0;J<6;J++)!Ke&&!ie?_e[J]=y(S.image[J],!0,r.maxCubemapSize):_e[J]=ie?S.image[J].image:S.image[J],_e[J]=rt(S,_e[J]);const Ie=_e[0],Ue=s.convert(S.format,S.colorSpace),ve=s.convert(S.type),Xe=_(S.internalFormat,Ue,ve,S.colorSpace),Oe=S.isVideoTexture!==!0,st=K.__version===void 0||Z===!0,N=ee.dataReady;let pe=M(S,Ie);se(t.TEXTURE_CUBE_MAP,S);let Y;if(Ke){Oe&&st&&n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,Xe,Ie.width,Ie.height);for(let J=0;J<6;J++){Y=_e[J].mipmaps;for(let fe=0;fe<Y.length;fe++){const me=Y[fe];S.format!==zn?Ue!==null?Oe?N&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe,0,0,me.width,me.height,Ue,me.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe,Xe,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe,0,0,me.width,me.height,Ue,ve,me.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe,Xe,me.width,me.height,0,Ue,ve,me.data)}}}else{if(Y=S.mipmaps,Oe&&st){Y.length>0&&pe++;const J=Re(_e[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,Xe,J.width,J.height)}for(let J=0;J<6;J++)if(ie){Oe?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,_e[J].width,_e[J].height,Ue,ve,_e[J].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Xe,_e[J].width,_e[J].height,0,Ue,ve,_e[J].data);for(let fe=0;fe<Y.length;fe++){const Ye=Y[fe].image[J].image;Oe?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe+1,0,0,Ye.width,Ye.height,Ue,ve,Ye.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe+1,Xe,Ye.width,Ye.height,0,Ue,ve,Ye.data)}}else{Oe?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ue,ve,_e[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Xe,Ue,ve,_e[J]);for(let fe=0;fe<Y.length;fe++){const me=Y[fe];Oe?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe+1,0,0,Ue,ve,me.image[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe+1,Xe,Ue,ve,me.image[J])}}}p(S)&&u(t.TEXTURE_CUBE_MAP),K.__version=ee.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function te(R,S,k,Z,ee,K){const Se=s.convert(k.format,k.colorSpace),ae=s.convert(k.type),he=_(k.internalFormat,Se,ae,k.colorSpace);if(!i.get(S).__hasExternalTextures){const ie=Math.max(1,S.width>>K),_e=Math.max(1,S.height>>K);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,K,he,ie,_e,S.depth,0,Se,ae,null):n.texImage2D(ee,K,he,ie,_e,0,Se,ae,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),ke(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,ee,i.get(k).__webglTexture,0,Ne(S)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,ee,i.get(k).__webglTexture,K),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ue(R,S,k){if(t.bindRenderbuffer(t.RENDERBUFFER,R),S.depthBuffer){const Z=S.depthTexture,ee=Z&&Z.isDepthTexture?Z.type:null,K=g(S.stencilBuffer,ee),Se=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=Ne(S);ke(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ae,K,S.width,S.height):k?t.renderbufferStorageMultisample(t.RENDERBUFFER,ae,K,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,K,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Se,t.RENDERBUFFER,R)}else{const Z=S.textures;for(let ee=0;ee<Z.length;ee++){const K=Z[ee],Se=s.convert(K.format,K.colorSpace),ae=s.convert(K.type),he=_(K.internalFormat,Se,ae,K.colorSpace),Ke=Ne(S);k&&ke(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ke,he,S.width,S.height):ke(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ke,he,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,he,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ce(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),W(S.depthTexture,0);const Z=i.get(S.depthTexture).__webglTexture,ee=Ne(S);if(S.depthTexture.format===ds)ke(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0);else if(S.depthTexture.format===ws)ke(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function be(R){const S=i.get(R),k=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const Z=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){const ee=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",ee)};Z.addEventListener("dispose",ee),S.__depthDisposeCallback=ee}S.__boundDepthTexture=Z}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");ce(S.__webglFramebuffer,R)}else if(k){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=t.createRenderbuffer(),ue(S.__webglDepthbuffer[Z],R,!1);else{const ee=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer[Z];t.bindRenderbuffer(t.RENDERBUFFER,K),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,K)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),ue(S.__webglDepthbuffer,R,!1);else{const Z=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ee=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ee),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,ee)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ce(R,S,k){const Z=i.get(R);S!==void 0&&te(Z.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),k!==void 0&&be(R)}function Ge(R){const S=R.texture,k=i.get(R),Z=i.get(S);R.addEventListener("dispose",C);const ee=R.textures,K=R.isWebGLCubeRenderTarget===!0,Se=ee.length>1;if(Se||(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=S.version,o.memory.textures++),K){k.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[ae]=[];for(let he=0;he<S.mipmaps.length;he++)k.__webglFramebuffer[ae][he]=t.createFramebuffer()}else k.__webglFramebuffer[ae]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let ae=0;ae<S.mipmaps.length;ae++)k.__webglFramebuffer[ae]=t.createFramebuffer()}else k.__webglFramebuffer=t.createFramebuffer();if(Se)for(let ae=0,he=ee.length;ae<he;ae++){const Ke=i.get(ee[ae]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&ke(R)===!1){k.__webglMultisampledFramebuffer=t.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ae=0;ae<ee.length;ae++){const he=ee[ae];k.__webglColorRenderbuffer[ae]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,k.__webglColorRenderbuffer[ae]);const Ke=s.convert(he.format,he.colorSpace),ie=s.convert(he.type),_e=_(he.internalFormat,Ke,ie,he.colorSpace,R.isXRRenderTarget===!0),Ie=Ne(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ie,_e,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.RENDERBUFFER,k.__webglColorRenderbuffer[ae])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=t.createRenderbuffer(),ue(k.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(K){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),se(t.TEXTURE_CUBE_MAP,S);for(let ae=0;ae<6;ae++)if(S.mipmaps&&S.mipmaps.length>0)for(let he=0;he<S.mipmaps.length;he++)te(k.__webglFramebuffer[ae][he],R,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,he);else te(k.__webglFramebuffer[ae],R,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);p(S)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Se){for(let ae=0,he=ee.length;ae<he;ae++){const Ke=ee[ae],ie=i.get(Ke);n.bindTexture(t.TEXTURE_2D,ie.__webglTexture),se(t.TEXTURE_2D,Ke),te(k.__webglFramebuffer,R,Ke,t.COLOR_ATTACHMENT0+ae,t.TEXTURE_2D,0),p(Ke)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let ae=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ae=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ae,Z.__webglTexture),se(ae,S),S.mipmaps&&S.mipmaps.length>0)for(let he=0;he<S.mipmaps.length;he++)te(k.__webglFramebuffer[he],R,S,t.COLOR_ATTACHMENT0,ae,he);else te(k.__webglFramebuffer,R,S,t.COLOR_ATTACHMENT0,ae,0);p(S)&&u(ae),n.unbindTexture()}R.depthBuffer&&be(R)}function oe(R){const S=R.textures;for(let k=0,Z=S.length;k<Z;k++){const ee=S[k];if(p(ee)){const K=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Se=i.get(ee).__webglTexture;n.bindTexture(K,Se),u(K),n.unbindTexture()}}}const Te=[],L=[];function je(R){if(R.samples>0){if(ke(R)===!1){const S=R.textures,k=R.width,Z=R.height;let ee=t.COLOR_BUFFER_BIT;const K=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Se=i.get(R),ae=S.length>1;if(ae)for(let he=0;he<S.length;he++)n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let he=0;he<S.length;he++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),ae){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Se.__webglColorRenderbuffer[he]);const Ke=i.get(S[he]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ke,0)}t.blitFramebuffer(0,0,k,Z,0,0,k,Z,ee,t.NEAREST),l===!0&&(Te.length=0,L.length=0,Te.push(t.COLOR_ATTACHMENT0+he),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Te.push(K),L.push(K),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,L)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Te))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ae)for(let he=0;he<S.length;he++){n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,Se.__webglColorRenderbuffer[he]);const Ke=i.get(S[he]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,Ke,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const S=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function Ne(R){return Math.min(r.maxSamples,R.samples)}function ke(R){const S=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Pe(R){const S=o.render.frame;f.get(R)!==S&&(f.set(R,S),R.update())}function rt(R,S){const k=R.colorSpace,Z=R.format,ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==Zi&&k!==Li&&(tt.getTransfer(k)===ct?(Z!==zn||ee!==_i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),S}function Re(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=E,this.setTexture2D=W,this.setTexture2DArray=j,this.setTexture3D=O,this.setTextureCube=$,this.rebindTextures=Ce,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=te,this.useMultisampledRTT=ke}function L1(t,e){function n(i,r=Li){let s;const o=tt.getTransfer(r);if(i===_i)return t.UNSIGNED_BYTE;if(i===Ud)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Fd)return t.UNSIGNED_SHORT_5_5_5_1;if(i===L_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===b_)return t.BYTE;if(i===P_)return t.SHORT;if(i===Ro)return t.UNSIGNED_SHORT;if(i===Id)return t.INT;if(i===Tr)return t.UNSIGNED_INT;if(i===ui)return t.FLOAT;if(i===Uo)return t.HALF_FLOAT;if(i===D_)return t.ALPHA;if(i===N_)return t.RGB;if(i===zn)return t.RGBA;if(i===I_)return t.LUMINANCE;if(i===U_)return t.LUMINANCE_ALPHA;if(i===ds)return t.DEPTH_COMPONENT;if(i===ws)return t.DEPTH_STENCIL;if(i===F_)return t.RED;if(i===Od)return t.RED_INTEGER;if(i===O_)return t.RG;if(i===kd)return t.RG_INTEGER;if(i===Bd)return t.RGBA_INTEGER;if(i===Wa||i===ja||i===Xa||i===Ya)if(o===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Wa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ja)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ya)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Wa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ja)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ya)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===uf||i===ff||i===df||i===hf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===uf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ff)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===df)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===hf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===pf||i===mf||i===gf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===pf||i===mf)return o===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===gf)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===_f||i===vf||i===xf||i===yf||i===Sf||i===Mf||i===Ef||i===Tf||i===wf||i===Af||i===Cf||i===Rf||i===bf||i===Pf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===_f)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===vf)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===xf)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===yf)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Sf)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Mf)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ef)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Tf)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===wf)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Af)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Cf)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Rf)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===bf)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Pf)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===$a||i===Lf||i===Df)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===$a)return o===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Lf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Df)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===k_||i===Nf||i===If||i===Uf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===$a)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Nf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===If)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Uf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ts?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class D1 extends En{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Js extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const N1={type:"move"};class eu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Js,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Js,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Js,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const p=n.getJointPose(y,i),u=this._getHandJoint(c,y);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=f.position.distanceTo(h.position),m=.02,v=.005;c.inputState.pinching&&d>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(N1)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Js;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const I1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,U1=`
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

}`;class F1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new on,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Yi({vertexShader:I1,fragmentShader:U1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ut(new zo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class O1 extends Ps{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,h=null,d=null,m=null,v=null;const y=new F1,p=n.getContextAttributes();let u=null,_=null;const g=[],M=[],b=new Ze;let C=null;const w=new En;w.layers.enable(1),w.viewport=new vt;const P=new En;P.layers.enable(2),P.viewport=new vt;const H=[w,P],x=new D1;x.layers.enable(1),x.layers.enable(2);let E=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let te=g[X];return te===void 0&&(te=new eu,g[X]=te),te.getTargetRaySpace()},this.getControllerGrip=function(X){let te=g[X];return te===void 0&&(te=new eu,g[X]=te),te.getGripSpace()},this.getHand=function(X){let te=g[X];return te===void 0&&(te=new eu,g[X]=te),te.getHandSpace()};function F(X){const te=M.indexOf(X.inputSource);if(te===-1)return;const ue=g[te];ue!==void 0&&(ue.update(X.inputSource,X.frame,c||o),ue.dispatchEvent({type:X.type,data:X.inputSource}))}function W(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",j);for(let X=0;X<g.length;X++){const te=M[X];te!==null&&(M[X]=null,g[X].disconnect(te))}E=null,z=null,y.reset(),e.setRenderTarget(u),m=null,d=null,h=null,r=null,_=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",W),r.addEventListener("inputsourceschange",j),p.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0){const te={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,te),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),_=new wr(m.framebufferWidth,m.framebufferHeight,{format:zn,type:_i,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let te=null,ue=null,ce=null;p.depth&&(ce=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,te=p.stencil?ws:ds,ue=p.stencil?Ts:Tr);const be={colorFormat:n.RGBA8,depthFormat:ce,scaleFactor:s};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(be),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new wr(d.textureWidth,d.textureHeight,{format:zn,type:_i,depthTexture:new J_(d.textureWidth,d.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),He.setContext(r),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function j(X){for(let te=0;te<X.removed.length;te++){const ue=X.removed[te],ce=M.indexOf(ue);ce>=0&&(M[ce]=null,g[ce].disconnect(ue))}for(let te=0;te<X.added.length;te++){const ue=X.added[te];let ce=M.indexOf(ue);if(ce===-1){for(let Ce=0;Ce<g.length;Ce++)if(Ce>=M.length){M.push(ue),ce=Ce;break}else if(M[Ce]===null){M[Ce]=ue,ce=Ce;break}if(ce===-1)break}const be=g[ce];be&&be.connect(ue)}}const O=new B,$=new B;function D(X,te,ue){O.setFromMatrixPosition(te.matrixWorld),$.setFromMatrixPosition(ue.matrixWorld);const ce=O.distanceTo($),be=te.projectionMatrix.elements,Ce=ue.projectionMatrix.elements,Ge=be[14]/(be[10]-1),oe=be[14]/(be[10]+1),Te=(be[9]+1)/be[5],L=(be[9]-1)/be[5],je=(be[8]-1)/be[0],Ne=(Ce[8]+1)/Ce[0],ke=Ge*je,Pe=Ge*Ne,rt=ce/(-je+Ne),Re=rt*-je;if(te.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Re),X.translateZ(rt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),be[10]===-1)X.projectionMatrix.copy(te.projectionMatrix),X.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const R=Ge+rt,S=oe+rt,k=ke-Re,Z=Pe+(ce-Re),ee=Te*oe/S*R,K=L*oe/S*R;X.projectionMatrix.makePerspective(k,Z,ee,K,R,S),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function q(X,te){te===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(te.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let te=X.near,ue=X.far;y.texture!==null&&(y.depthNear>0&&(te=y.depthNear),y.depthFar>0&&(ue=y.depthFar)),x.near=P.near=w.near=te,x.far=P.far=w.far=ue,(E!==x.near||z!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),E=x.near,z=x.far);const ce=X.parent,be=x.cameras;q(x,ce);for(let Ce=0;Ce<be.length;Ce++)q(be[Ce],ce);be.length===2?D(x,w,P):x.projectionMatrix.copy(w.projectionMatrix),Q(X,x,ce)};function Q(X,te,ue){ue===null?X.matrix.copy(te.matrixWorld):(X.matrix.copy(ue.matrixWorld),X.matrix.invert(),X.matrix.multiply(te.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(te.projectionMatrix),X.projectionMatrixInverse.copy(te.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ff*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let se=null;function Ae(X,te){if(f=te.getViewerPose(c||o),v=te,f!==null){const ue=f.views;m!==null&&(e.setRenderTargetFramebuffer(_,m.framebuffer),e.setRenderTarget(_));let ce=!1;ue.length!==x.cameras.length&&(x.cameras.length=0,ce=!0);for(let Ce=0;Ce<ue.length;Ce++){const Ge=ue[Ce];let oe=null;if(m!==null)oe=m.getViewport(Ge);else{const L=h.getViewSubImage(d,Ge);oe=L.viewport,Ce===0&&(e.setRenderTargetTextures(_,L.colorTexture,d.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(_))}let Te=H[Ce];Te===void 0&&(Te=new En,Te.layers.enable(Ce),Te.viewport=new vt,H[Ce]=Te),Te.matrix.fromArray(Ge.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(Ge.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(oe.x,oe.y,oe.width,oe.height),Ce===0&&(x.matrix.copy(Te.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ce===!0&&x.cameras.push(Te)}const be=r.enabledFeatures;if(be&&be.includes("depth-sensing")){const Ce=h.getDepthInformation(ue[0]);Ce&&Ce.isValid&&Ce.texture&&y.init(e,Ce,r.renderState)}}for(let ue=0;ue<g.length;ue++){const ce=M[ue],be=g[ue];ce!==null&&be!==void 0&&be.update(ce,te,c||o)}se&&se(X,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),v=null}const He=new Z_;He.setAnimationLoop(Ae),this.setAnimationLoop=function(X){se=X},this.dispose=function(){}}}const rr=new Qn,k1=new dt;function B1(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,$_(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,_,g,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),h(p,u)):u.isMeshPhongMaterial?(s(p,u),f(p,u)):u.isMeshStandardMaterial?(s(p,u),d(p,u),u.isMeshPhysicalMaterial&&m(p,u,M)):u.isMeshMatcapMaterial?(s(p,u),v(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),y(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,_,g):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===sn&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===sn&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const _=e.get(u),g=_.envMap,M=_.envMapRotation;g&&(p.envMap.value=g,rr.copy(M),rr.x*=-1,rr.y*=-1,rr.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(rr.y*=-1,rr.z*=-1),p.envMapRotation.value.setFromMatrix4(k1.makeRotationFromEuler(rr)),p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,_,g){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*_,p.scale.value=g*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function f(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function h(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function d(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,_){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===sn&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,u){u.matcap&&(p.matcap.value=u.matcap)}function y(p,u){const _=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function z1(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,g){const M=g.program;i.uniformBlockBinding(_,M)}function c(_,g){let M=r[_.id];M===void 0&&(v(_),M=f(_),r[_.id]=M,_.addEventListener("dispose",p));const b=g.program;i.updateUBOMapping(_,b);const C=e.render.frame;s[_.id]!==C&&(d(_),s[_.id]=C)}function f(_){const g=h();_.__bindingPointIndex=g;const M=t.createBuffer(),b=_.__size,C=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,b,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,M),M}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const g=r[_.id],M=_.uniforms,b=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let C=0,w=M.length;C<w;C++){const P=Array.isArray(M[C])?M[C]:[M[C]];for(let H=0,x=P.length;H<x;H++){const E=P[H];if(m(E,C,H,b)===!0){const z=E.__offset,F=Array.isArray(E.value)?E.value:[E.value];let W=0;for(let j=0;j<F.length;j++){const O=F[j],$=y(O);typeof O=="number"||typeof O=="boolean"?(E.__data[0]=O,t.bufferSubData(t.UNIFORM_BUFFER,z+W,E.__data)):O.isMatrix3?(E.__data[0]=O.elements[0],E.__data[1]=O.elements[1],E.__data[2]=O.elements[2],E.__data[3]=0,E.__data[4]=O.elements[3],E.__data[5]=O.elements[4],E.__data[6]=O.elements[5],E.__data[7]=0,E.__data[8]=O.elements[6],E.__data[9]=O.elements[7],E.__data[10]=O.elements[8],E.__data[11]=0):(O.toArray(E.__data,W),W+=$.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,z,E.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(_,g,M,b){const C=_.value,w=g+"_"+M;if(b[w]===void 0)return typeof C=="number"||typeof C=="boolean"?b[w]=C:b[w]=C.clone(),!0;{const P=b[w];if(typeof C=="number"||typeof C=="boolean"){if(P!==C)return b[w]=C,!0}else if(P.equals(C)===!1)return P.copy(C),!0}return!1}function v(_){const g=_.uniforms;let M=0;const b=16;for(let w=0,P=g.length;w<P;w++){const H=Array.isArray(g[w])?g[w]:[g[w]];for(let x=0,E=H.length;x<E;x++){const z=H[x],F=Array.isArray(z.value)?z.value:[z.value];for(let W=0,j=F.length;W<j;W++){const O=F[W],$=y(O),D=M%b,q=D%$.boundary,Q=D+q;M+=q,Q!==0&&b-Q<$.storage&&(M+=b-Q),z.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=M,M+=$.storage}}}const C=M%b;return C>0&&(M+=b-C),_.__size=M,_.__cache={},this}function y(_){const g={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function p(_){const g=_.target;g.removeEventListener("dispose",p);const M=o.indexOf(g.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function u(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class H1{constructor(e={}){const{canvas:n=Ry(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const m=new Uint32Array(4),v=new Int32Array(4);let y=null,p=null;const u=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xn,this.toneMapping=Gi,this.toneMappingExposure=1;const g=this;let M=!1,b=0,C=0,w=null,P=-1,H=null;const x=new vt,E=new vt;let z=null;const F=new We(0);let W=0,j=n.width,O=n.height,$=1,D=null,q=null;const Q=new vt(0,0,j,O),se=new vt(0,0,j,O);let Ae=!1;const He=new Vd;let X=!1,te=!1;const ue=new dt,ce=new dt,be=new B,Ce=new vt,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let oe=!1;function Te(){return w===null?$:1}let L=i;function je(T,I){return n.getContext(T,I)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Nd}`),n.addEventListener("webglcontextlost",J,!1),n.addEventListener("webglcontextrestored",fe,!1),n.addEventListener("webglcontextcreationerror",me,!1),L===null){const I="webgl2";if(L=je(I,T),L===null)throw je(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ne,ke,Pe,rt,Re,R,S,k,Z,ee,K,Se,ae,he,Ke,ie,_e,Ie,Ue,ve,Xe,Oe,st,N;function pe(){Ne=new XE(L),Ne.init(),Oe=new L1(L,Ne),ke=new zE(L,Ne,e,Oe),Pe=new R1(L),ke.reverseDepthBuffer&&Pe.buffers.depth.setReversed(!0),rt=new qE(L),Re=new h1,R=new P1(L,Ne,Pe,Re,ke,Oe,rt),S=new VE(g),k=new jE(g),Z=new nS(L),st=new kE(L,Z),ee=new YE(L,Z,rt,st),K=new ZE(L,ee,Z,rt),Ue=new KE(L,ke,R),ie=new HE(Re),Se=new d1(g,S,k,Ne,ke,st,ie),ae=new B1(g,Re),he=new m1,Ke=new S1(Ne),Ie=new OE(g,S,k,Pe,K,d,l),_e=new A1(g,K,ke),N=new z1(L,rt,ke,Pe),ve=new BE(L,Ne,rt),Xe=new $E(L,Ne,rt),rt.programs=Se.programs,g.capabilities=ke,g.extensions=Ne,g.properties=Re,g.renderLists=he,g.shadowMap=_e,g.state=Pe,g.info=rt}pe();const Y=new O1(g,L);this.xr=Y,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const T=Ne.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ne.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(T){T!==void 0&&($=T,this.setSize(j,O,!1))},this.getSize=function(T){return T.set(j,O)},this.setSize=function(T,I,V=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=T,O=I,n.width=Math.floor(T*$),n.height=Math.floor(I*$),V===!0&&(n.style.width=T+"px",n.style.height=I+"px"),this.setViewport(0,0,T,I)},this.getDrawingBufferSize=function(T){return T.set(j*$,O*$).floor()},this.setDrawingBufferSize=function(T,I,V){j=T,O=I,$=V,n.width=Math.floor(T*V),n.height=Math.floor(I*V),this.setViewport(0,0,T,I)},this.getCurrentViewport=function(T){return T.copy(x)},this.getViewport=function(T){return T.copy(Q)},this.setViewport=function(T,I,V,G){T.isVector4?Q.set(T.x,T.y,T.z,T.w):Q.set(T,I,V,G),Pe.viewport(x.copy(Q).multiplyScalar($).round())},this.getScissor=function(T){return T.copy(se)},this.setScissor=function(T,I,V,G){T.isVector4?se.set(T.x,T.y,T.z,T.w):se.set(T,I,V,G),Pe.scissor(E.copy(se).multiplyScalar($).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(T){Pe.setScissorTest(Ae=T)},this.setOpaqueSort=function(T){D=T},this.setTransparentSort=function(T){q=T},this.getClearColor=function(T){return T.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(T=!0,I=!0,V=!0){let G=0;if(T){let U=!1;if(w!==null){const re=w.texture.format;U=re===Bd||re===kd||re===Od}if(U){const re=w.texture.type,de=re===_i||re===Tr||re===Ro||re===Ts||re===Ud||re===Fd,ye=Ie.getClearColor(),Me=Ie.getClearAlpha(),Le=ye.r,De=ye.g,Ee=ye.b;de?(m[0]=Le,m[1]=De,m[2]=Ee,m[3]=Me,L.clearBufferuiv(L.COLOR,0,m)):(v[0]=Le,v[1]=De,v[2]=Ee,v[3]=Me,L.clearBufferiv(L.COLOR,0,v))}else G|=L.COLOR_BUFFER_BIT}I&&(G|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),V&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",J,!1),n.removeEventListener("webglcontextrestored",fe,!1),n.removeEventListener("webglcontextcreationerror",me,!1),he.dispose(),Ke.dispose(),Re.dispose(),S.dispose(),k.dispose(),K.dispose(),st.dispose(),N.dispose(),Se.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Xd),Y.removeEventListener("sessionend",Yd),Qi.stop()};function J(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const T=rt.autoReset,I=_e.enabled,V=_e.autoUpdate,G=_e.needsUpdate,U=_e.type;pe(),rt.autoReset=T,_e.enabled=I,_e.autoUpdate=V,_e.needsUpdate=G,_e.type=U}function me(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ye(T){const I=T.target;I.removeEventListener("dispose",Ye),St(I)}function St(T){qt(T),Re.remove(T)}function qt(T){const I=Re.get(T).programs;I!==void 0&&(I.forEach(function(V){Se.releaseProgram(V)}),T.isShaderMaterial&&Se.releaseShaderCache(T))}this.renderBufferDirect=function(T,I,V,G,U,re){I===null&&(I=Ge);const de=U.isMesh&&U.matrixWorld.determinant()<0,ye=av(T,I,V,G,U);Pe.setMaterial(G,de);let Me=V.index,Le=1;if(G.wireframe===!0){if(Me=ee.getWireframeAttribute(V),Me===void 0)return;Le=2}const De=V.drawRange,Ee=V.attributes.position;let nt=De.start*Le,at=(De.start+De.count)*Le;re!==null&&(nt=Math.max(nt,re.start*Le),at=Math.min(at,(re.start+re.count)*Le)),Me!==null?(nt=Math.max(nt,0),at=Math.min(at,Me.count)):Ee!=null&&(nt=Math.max(nt,0),at=Math.min(at,Ee.count));const gt=at-nt;if(gt<0||gt===1/0)return;st.setup(U,G,ye,V,Me);let ln,Je=ve;if(Me!==null&&(ln=Z.get(Me),Je=Xe,Je.setIndex(ln)),U.isMesh)G.wireframe===!0?(Pe.setLineWidth(G.wireframeLinewidth*Te()),Je.setMode(L.LINES)):Je.setMode(L.TRIANGLES);else if(U.isLine){let we=G.linewidth;we===void 0&&(we=1),Pe.setLineWidth(we*Te()),U.isLineSegments?Je.setMode(L.LINES):U.isLineLoop?Je.setMode(L.LINE_LOOP):Je.setMode(L.LINE_STRIP)}else U.isPoints?Je.setMode(L.POINTS):U.isSprite&&Je.setMode(L.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Je.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ne.get("WEBGL_multi_draw"))Je.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const we=U._multiDrawStarts,Nt=U._multiDrawCounts,et=U._multiDrawCount,Pn=Me?Z.get(Me).bytesPerElement:1,Pr=Re.get(G).currentProgram.getUniforms();for(let cn=0;cn<et;cn++)Pr.setValue(L,"_gl_DrawID",cn),Je.render(we[cn]/Pn,Nt[cn])}else if(U.isInstancedMesh)Je.renderInstances(nt,gt,U.count);else if(V.isInstancedBufferGeometry){const we=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Nt=Math.min(V.instanceCount,we);Je.renderInstances(nt,gt,Nt)}else Je.render(nt,gt)};function Qe(T,I,V){T.transparent===!0&&T.side===qn&&T.forceSinglePass===!1?(T.side=sn,T.needsUpdate=!0,Vo(T,I,V),T.side=Xi,T.needsUpdate=!0,Vo(T,I,V),T.side=qn):Vo(T,I,V)}this.compile=function(T,I,V=null){V===null&&(V=T),p=Ke.get(V),p.init(I),_.push(p),V.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),T!==V&&T.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const G=new Set;return T.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const re=U.material;if(re)if(Array.isArray(re))for(let de=0;de<re.length;de++){const ye=re[de];Qe(ye,V,U),G.add(ye)}else Qe(re,V,U),G.add(re)}),_.pop(),p=null,G},this.compileAsync=function(T,I,V=null){const G=this.compile(T,I,V);return new Promise(U=>{function re(){if(G.forEach(function(de){Re.get(de).currentProgram.isReady()&&G.delete(de)}),G.size===0){U(T);return}setTimeout(re,10)}Ne.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Kt=null;function Jn(T){Kt&&Kt(T)}function Xd(){Qi.stop()}function Yd(){Qi.start()}const Qi=new Z_;Qi.setAnimationLoop(Jn),typeof self<"u"&&Qi.setContext(self),this.setAnimationLoop=function(T){Kt=T,Y.setAnimationLoop(T),T===null?Qi.stop():Qi.start()},Y.addEventListener("sessionstart",Xd),Y.addEventListener("sessionend",Yd),this.render=function(T,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(I),I=Y.getCamera()),T.isScene===!0&&T.onBeforeRender(g,T,I,w),p=Ke.get(T,_.length),p.init(I),_.push(p),ce.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),He.setFromProjectionMatrix(ce),te=this.localClippingEnabled,X=ie.init(this.clippingPlanes,te),y=he.get(T,u.length),y.init(),u.push(y),Y.enabled===!0&&Y.isPresenting===!0){const re=g.xr.getDepthSensingMesh();re!==null&&$l(re,I,-1/0,g.sortObjects)}$l(T,I,0,g.sortObjects),y.finish(),g.sortObjects===!0&&y.sort(D,q),oe=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,oe&&Ie.addToRenderList(y,T),this.info.render.frame++,X===!0&&ie.beginShadows();const V=p.state.shadowsArray;_e.render(V,T,I),X===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=y.opaque,U=y.transmissive;if(p.setupLights(),I.isArrayCamera){const re=I.cameras;if(U.length>0)for(let de=0,ye=re.length;de<ye;de++){const Me=re[de];qd(G,U,T,Me)}oe&&Ie.render(T);for(let de=0,ye=re.length;de<ye;de++){const Me=re[de];$d(y,T,Me,Me.viewport)}}else U.length>0&&qd(G,U,T,I),oe&&Ie.render(T),$d(y,T,I);w!==null&&(R.updateMultisampleRenderTarget(w),R.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(g,T,I),st.resetDefaultState(),P=-1,H=null,_.pop(),_.length>0?(p=_[_.length-1],X===!0&&ie.setGlobalState(g.clippingPlanes,p.state.camera)):p=null,u.pop(),u.length>0?y=u[u.length-1]:y=null};function $l(T,I,V,G){if(T.visible===!1)return;if(T.layers.test(I.layers)){if(T.isGroup)V=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(I);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||He.intersectsSprite(T)){G&&Ce.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ce);const de=K.update(T),ye=T.material;ye.visible&&y.push(T,de,ye,V,Ce.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||He.intersectsObject(T))){const de=K.update(T),ye=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ce.copy(T.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Ce.copy(de.boundingSphere.center)),Ce.applyMatrix4(T.matrixWorld).applyMatrix4(ce)),Array.isArray(ye)){const Me=de.groups;for(let Le=0,De=Me.length;Le<De;Le++){const Ee=Me[Le],nt=ye[Ee.materialIndex];nt&&nt.visible&&y.push(T,de,nt,V,Ce.z,Ee)}}else ye.visible&&y.push(T,de,ye,V,Ce.z,null)}}const re=T.children;for(let de=0,ye=re.length;de<ye;de++)$l(re[de],I,V,G)}function $d(T,I,V,G){const U=T.opaque,re=T.transmissive,de=T.transparent;p.setupLightsView(V),X===!0&&ie.setGlobalState(g.clippingPlanes,V),G&&Pe.viewport(x.copy(G)),U.length>0&&Ho(U,I,V),re.length>0&&Ho(re,I,V),de.length>0&&Ho(de,I,V),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function qd(T,I,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new wr(1,1,{generateMipmaps:!0,type:Ne.has("EXT_color_buffer_half_float")||Ne.has("EXT_color_buffer_float")?Uo:_i,minFilter:gr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const re=p.state.transmissionRenderTarget[G.id],de=G.viewport||x;re.setSize(de.z,de.w);const ye=g.getRenderTarget();g.setRenderTarget(re),g.getClearColor(F),W=g.getClearAlpha(),W<1&&g.setClearColor(16777215,.5),g.clear(),oe&&Ie.render(V);const Me=g.toneMapping;g.toneMapping=Gi;const Le=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),X===!0&&ie.setGlobalState(g.clippingPlanes,G),Ho(T,V,G),R.updateMultisampleRenderTarget(re),R.updateRenderTargetMipmap(re),Ne.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let Ee=0,nt=I.length;Ee<nt;Ee++){const at=I[Ee],gt=at.object,ln=at.geometry,Je=at.material,we=at.group;if(Je.side===qn&&gt.layers.test(G.layers)){const Nt=Je.side;Je.side=sn,Je.needsUpdate=!0,Kd(gt,V,G,ln,Je,we),Je.side=Nt,Je.needsUpdate=!0,De=!0}}De===!0&&(R.updateMultisampleRenderTarget(re),R.updateRenderTargetMipmap(re))}g.setRenderTarget(ye),g.setClearColor(F,W),Le!==void 0&&(G.viewport=Le),g.toneMapping=Me}function Ho(T,I,V){const G=I.isScene===!0?I.overrideMaterial:null;for(let U=0,re=T.length;U<re;U++){const de=T[U],ye=de.object,Me=de.geometry,Le=G===null?de.material:G,De=de.group;ye.layers.test(V.layers)&&Kd(ye,I,V,Me,Le,De)}}function Kd(T,I,V,G,U,re){T.onBeforeRender(g,I,V,G,U,re),T.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),U.onBeforeRender(g,I,V,G,T,re),U.transparent===!0&&U.side===qn&&U.forceSinglePass===!1?(U.side=sn,U.needsUpdate=!0,g.renderBufferDirect(V,I,G,U,T,re),U.side=Xi,U.needsUpdate=!0,g.renderBufferDirect(V,I,G,U,T,re),U.side=qn):g.renderBufferDirect(V,I,G,U,T,re),T.onAfterRender(g,I,V,G,U,re)}function Vo(T,I,V){I.isScene!==!0&&(I=Ge);const G=Re.get(T),U=p.state.lights,re=p.state.shadowsArray,de=U.state.version,ye=Se.getParameters(T,U.state,re,I,V),Me=Se.getProgramCacheKey(ye);let Le=G.programs;G.environment=T.isMeshStandardMaterial?I.environment:null,G.fog=I.fog,G.envMap=(T.isMeshStandardMaterial?k:S).get(T.envMap||G.environment),G.envMapRotation=G.environment!==null&&T.envMap===null?I.environmentRotation:T.envMapRotation,Le===void 0&&(T.addEventListener("dispose",Ye),Le=new Map,G.programs=Le);let De=Le.get(Me);if(De!==void 0){if(G.currentProgram===De&&G.lightsStateVersion===de)return Qd(T,ye),De}else ye.uniforms=Se.getUniforms(T),T.onBeforeCompile(ye,g),De=Se.acquireProgram(ye,Me),Le.set(Me,De),G.uniforms=ye.uniforms;const Ee=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ee.clippingPlanes=ie.uniform),Qd(T,ye),G.needsLights=cv(T),G.lightsStateVersion=de,G.needsLights&&(Ee.ambientLightColor.value=U.state.ambient,Ee.lightProbe.value=U.state.probe,Ee.directionalLights.value=U.state.directional,Ee.directionalLightShadows.value=U.state.directionalShadow,Ee.spotLights.value=U.state.spot,Ee.spotLightShadows.value=U.state.spotShadow,Ee.rectAreaLights.value=U.state.rectArea,Ee.ltc_1.value=U.state.rectAreaLTC1,Ee.ltc_2.value=U.state.rectAreaLTC2,Ee.pointLights.value=U.state.point,Ee.pointLightShadows.value=U.state.pointShadow,Ee.hemisphereLights.value=U.state.hemi,Ee.directionalShadowMap.value=U.state.directionalShadowMap,Ee.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ee.spotShadowMap.value=U.state.spotShadowMap,Ee.spotLightMatrix.value=U.state.spotLightMatrix,Ee.spotLightMap.value=U.state.spotLightMap,Ee.pointShadowMap.value=U.state.pointShadowMap,Ee.pointShadowMatrix.value=U.state.pointShadowMatrix),G.currentProgram=De,G.uniformsList=null,De}function Zd(T){if(T.uniformsList===null){const I=T.currentProgram.getUniforms();T.uniformsList=Ka.seqWithValue(I.seq,T.uniforms)}return T.uniformsList}function Qd(T,I){const V=Re.get(T);V.outputColorSpace=I.outputColorSpace,V.batching=I.batching,V.batchingColor=I.batchingColor,V.instancing=I.instancing,V.instancingColor=I.instancingColor,V.instancingMorph=I.instancingMorph,V.skinning=I.skinning,V.morphTargets=I.morphTargets,V.morphNormals=I.morphNormals,V.morphColors=I.morphColors,V.morphTargetsCount=I.morphTargetsCount,V.numClippingPlanes=I.numClippingPlanes,V.numIntersection=I.numClipIntersection,V.vertexAlphas=I.vertexAlphas,V.vertexTangents=I.vertexTangents,V.toneMapping=I.toneMapping}function av(T,I,V,G,U){I.isScene!==!0&&(I=Ge),R.resetTextureUnits();const re=I.fog,de=G.isMeshStandardMaterial?I.environment:null,ye=w===null?g.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Zi,Me=(G.isMeshStandardMaterial?k:S).get(G.envMap||de),Le=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,De=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ee=!!V.morphAttributes.position,nt=!!V.morphAttributes.normal,at=!!V.morphAttributes.color;let gt=Gi;G.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(gt=g.toneMapping);const ln=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Je=ln!==void 0?ln.length:0,we=Re.get(G),Nt=p.state.lights;if(X===!0&&(te===!0||T!==H)){const xn=T===H&&G.id===P;ie.setState(G,T,xn)}let et=!1;G.version===we.__version?(we.needsLights&&we.lightsStateVersion!==Nt.state.version||we.outputColorSpace!==ye||U.isBatchedMesh&&we.batching===!1||!U.isBatchedMesh&&we.batching===!0||U.isBatchedMesh&&we.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&we.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&we.instancing===!1||!U.isInstancedMesh&&we.instancing===!0||U.isSkinnedMesh&&we.skinning===!1||!U.isSkinnedMesh&&we.skinning===!0||U.isInstancedMesh&&we.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&we.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&we.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&we.instancingMorph===!1&&U.morphTexture!==null||we.envMap!==Me||G.fog===!0&&we.fog!==re||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==ie.numPlanes||we.numIntersection!==ie.numIntersection)||we.vertexAlphas!==Le||we.vertexTangents!==De||we.morphTargets!==Ee||we.morphNormals!==nt||we.morphColors!==at||we.toneMapping!==gt||we.morphTargetsCount!==Je)&&(et=!0):(et=!0,we.__version=G.version);let Pn=we.currentProgram;et===!0&&(Pn=Vo(G,I,U));let Pr=!1,cn=!1,ql=!1;const xt=Pn.getUniforms(),xi=we.uniforms;if(Pe.useProgram(Pn.program)&&(Pr=!0,cn=!0,ql=!0),G.id!==P&&(P=G.id,cn=!0),Pr||H!==T){ke.reverseDepthBuffer?(ue.copy(T.projectionMatrix),Py(ue),Ly(ue),xt.setValue(L,"projectionMatrix",ue)):xt.setValue(L,"projectionMatrix",T.projectionMatrix),xt.setValue(L,"viewMatrix",T.matrixWorldInverse);const xn=xt.map.cameraPosition;xn!==void 0&&xn.setValue(L,be.setFromMatrixPosition(T.matrixWorld)),ke.logarithmicDepthBuffer&&xt.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&xt.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),H!==T&&(H=T,cn=!0,ql=!0)}if(U.isSkinnedMesh){xt.setOptional(L,U,"bindMatrix"),xt.setOptional(L,U,"bindMatrixInverse");const xn=U.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),xt.setValue(L,"boneTexture",xn.boneTexture,R))}U.isBatchedMesh&&(xt.setOptional(L,U,"batchingTexture"),xt.setValue(L,"batchingTexture",U._matricesTexture,R),xt.setOptional(L,U,"batchingIdTexture"),xt.setValue(L,"batchingIdTexture",U._indirectTexture,R),xt.setOptional(L,U,"batchingColorTexture"),U._colorsTexture!==null&&xt.setValue(L,"batchingColorTexture",U._colorsTexture,R));const Kl=V.morphAttributes;if((Kl.position!==void 0||Kl.normal!==void 0||Kl.color!==void 0)&&Ue.update(U,V,Pn),(cn||we.receiveShadow!==U.receiveShadow)&&(we.receiveShadow=U.receiveShadow,xt.setValue(L,"receiveShadow",U.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(xi.envMap.value=Me,xi.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&I.environment!==null&&(xi.envMapIntensity.value=I.environmentIntensity),cn&&(xt.setValue(L,"toneMappingExposure",g.toneMappingExposure),we.needsLights&&lv(xi,ql),re&&G.fog===!0&&ae.refreshFogUniforms(xi,re),ae.refreshMaterialUniforms(xi,G,$,O,p.state.transmissionRenderTarget[T.id]),Ka.upload(L,Zd(we),xi,R)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ka.upload(L,Zd(we),xi,R),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&xt.setValue(L,"center",U.center),xt.setValue(L,"modelViewMatrix",U.modelViewMatrix),xt.setValue(L,"normalMatrix",U.normalMatrix),xt.setValue(L,"modelMatrix",U.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const xn=G.uniformsGroups;for(let Zl=0,uv=xn.length;Zl<uv;Zl++){const Jd=xn[Zl];N.update(Jd,Pn),N.bind(Jd,Pn)}}return Pn}function lv(T,I){T.ambientLightColor.needsUpdate=I,T.lightProbe.needsUpdate=I,T.directionalLights.needsUpdate=I,T.directionalLightShadows.needsUpdate=I,T.pointLights.needsUpdate=I,T.pointLightShadows.needsUpdate=I,T.spotLights.needsUpdate=I,T.spotLightShadows.needsUpdate=I,T.rectAreaLights.needsUpdate=I,T.hemisphereLights.needsUpdate=I}function cv(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,I,V){Re.get(T.texture).__webglTexture=I,Re.get(T.depthTexture).__webglTexture=V;const G=Re.get(T);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||Ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,I){const V=Re.get(T);V.__webglFramebuffer=I,V.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(T,I=0,V=0){w=T,b=I,C=V;let G=!0,U=null,re=!1,de=!1;if(T){const Me=Re.get(T);if(Me.__useDefaultFramebuffer!==void 0)Pe.bindFramebuffer(L.FRAMEBUFFER,null),G=!1;else if(Me.__webglFramebuffer===void 0)R.setupRenderTarget(T);else if(Me.__hasExternalTextures)R.rebindTextures(T,Re.get(T.texture).__webglTexture,Re.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ee=T.depthTexture;if(Me.__boundDepthTexture!==Ee){if(Ee!==null&&Re.has(Ee)&&(T.width!==Ee.image.width||T.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(T)}}const Le=T.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(de=!0);const De=Re.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(De[I])?U=De[I][V]:U=De[I],re=!0):T.samples>0&&R.useMultisampledRTT(T)===!1?U=Re.get(T).__webglMultisampledFramebuffer:Array.isArray(De)?U=De[V]:U=De,x.copy(T.viewport),E.copy(T.scissor),z=T.scissorTest}else x.copy(Q).multiplyScalar($).floor(),E.copy(se).multiplyScalar($).floor(),z=Ae;if(Pe.bindFramebuffer(L.FRAMEBUFFER,U)&&G&&Pe.drawBuffers(T,U),Pe.viewport(x),Pe.scissor(E),Pe.setScissorTest(z),re){const Me=Re.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+I,Me.__webglTexture,V)}else if(de){const Me=Re.get(T.texture),Le=I||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Me.__webglTexture,V||0,Le)}P=-1},this.readRenderTargetPixels=function(T,I,V,G,U,re,de){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Re.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&de!==void 0&&(ye=ye[de]),ye){Pe.bindFramebuffer(L.FRAMEBUFFER,ye);try{const Me=T.texture,Le=Me.format,De=Me.type;if(!ke.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ke.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=T.width-G&&V>=0&&V<=T.height-U&&L.readPixels(I,V,G,U,Oe.convert(Le),Oe.convert(De),re)}finally{const Me=w!==null?Re.get(w).__webglFramebuffer:null;Pe.bindFramebuffer(L.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(T,I,V,G,U,re,de){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=Re.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&de!==void 0&&(ye=ye[de]),ye){const Me=T.texture,Le=Me.format,De=Me.type;if(!ke.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ke.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=T.width-G&&V>=0&&V<=T.height-U){Pe.bindFramebuffer(L.FRAMEBUFFER,ye);const Ee=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ee),L.bufferData(L.PIXEL_PACK_BUFFER,re.byteLength,L.STREAM_READ),L.readPixels(I,V,G,U,Oe.convert(Le),Oe.convert(De),0);const nt=w!==null?Re.get(w).__webglFramebuffer:null;Pe.bindFramebuffer(L.FRAMEBUFFER,nt);const at=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await by(L,at,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ee),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,re),L.deleteBuffer(Ee),L.deleteSync(at),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,I=null,V=0){T.isTexture!==!0&&(qa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,T=arguments[1]);const G=Math.pow(2,-V),U=Math.floor(T.image.width*G),re=Math.floor(T.image.height*G),de=I!==null?I.x:0,ye=I!==null?I.y:0;R.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,V,0,0,de,ye,U,re),Pe.unbindTexture()},this.copyTextureToTexture=function(T,I,V=null,G=null,U=0){T.isTexture!==!0&&(qa("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,T=arguments[1],I=arguments[2],U=arguments[3]||0,V=null);let re,de,ye,Me,Le,De;V!==null?(re=V.max.x-V.min.x,de=V.max.y-V.min.y,ye=V.min.x,Me=V.min.y):(re=T.image.width,de=T.image.height,ye=0,Me=0),G!==null?(Le=G.x,De=G.y):(Le=0,De=0);const Ee=Oe.convert(I.format),nt=Oe.convert(I.type);R.setTexture2D(I,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);const at=L.getParameter(L.UNPACK_ROW_LENGTH),gt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),ln=L.getParameter(L.UNPACK_SKIP_PIXELS),Je=L.getParameter(L.UNPACK_SKIP_ROWS),we=L.getParameter(L.UNPACK_SKIP_IMAGES),Nt=T.isCompressedTexture?T.mipmaps[U]:T.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Nt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Nt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ye),L.pixelStorei(L.UNPACK_SKIP_ROWS,Me),T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,U,Le,De,re,de,Ee,nt,Nt.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,U,Le,De,Nt.width,Nt.height,Ee,Nt.data):L.texSubImage2D(L.TEXTURE_2D,U,Le,De,re,de,Ee,nt,Nt),L.pixelStorei(L.UNPACK_ROW_LENGTH,at),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,gt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ln),L.pixelStorei(L.UNPACK_SKIP_ROWS,Je),L.pixelStorei(L.UNPACK_SKIP_IMAGES,we),U===0&&I.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Pe.unbindTexture()},this.copyTextureToTexture3D=function(T,I,V=null,G=null,U=0){T.isTexture!==!0&&(qa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,T=arguments[2],I=arguments[3],U=arguments[4]||0);let re,de,ye,Me,Le,De,Ee,nt,at;const gt=T.isCompressedTexture?T.mipmaps[U]:T.image;V!==null?(re=V.max.x-V.min.x,de=V.max.y-V.min.y,ye=V.max.z-V.min.z,Me=V.min.x,Le=V.min.y,De=V.min.z):(re=gt.width,de=gt.height,ye=gt.depth,Me=0,Le=0,De=0),G!==null?(Ee=G.x,nt=G.y,at=G.z):(Ee=0,nt=0,at=0);const ln=Oe.convert(I.format),Je=Oe.convert(I.type);let we;if(I.isData3DTexture)R.setTexture3D(I,0),we=L.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)R.setTexture2DArray(I,0),we=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);const Nt=L.getParameter(L.UNPACK_ROW_LENGTH),et=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Pn=L.getParameter(L.UNPACK_SKIP_PIXELS),Pr=L.getParameter(L.UNPACK_SKIP_ROWS),cn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,gt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,gt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Me),L.pixelStorei(L.UNPACK_SKIP_ROWS,Le),L.pixelStorei(L.UNPACK_SKIP_IMAGES,De),T.isDataTexture||T.isData3DTexture?L.texSubImage3D(we,U,Ee,nt,at,re,de,ye,ln,Je,gt.data):I.isCompressedArrayTexture?L.compressedTexSubImage3D(we,U,Ee,nt,at,re,de,ye,ln,gt.data):L.texSubImage3D(we,U,Ee,nt,at,re,de,ye,ln,Je,gt),L.pixelStorei(L.UNPACK_ROW_LENGTH,Nt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,et),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Pn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Pr),L.pixelStorei(L.UNPACK_SKIP_IMAGES,cn),U===0&&I.generateMipmaps&&L.generateMipmap(we),Pe.unbindTexture()},this.initRenderTarget=function(T){Re.get(T).__webglFramebuffer===void 0&&R.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),Pe.unbindTexture()},this.resetState=function(){b=0,C=0,w=null,Pe.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===zd?"display-p3":"srgb",n.unpackColorSpace=tt.workingColorSpace===Xl?"display-p3":"srgb"}}class Wd{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new We(e),this.near=n,this.far=i}clone(){return new Wd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class V1 extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class rv extends br{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Al=new B,Cl=new B,sm=new dt,Xs=new Hd,Ca=new Bo,tu=new B,om=new B;class G1 extends At{constructor(e=new gn,n=new rv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Al.fromBufferAttribute(n,r-1),Cl.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Al.distanceTo(Cl);e.setAttribute("lineDistance",new an(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ca.copy(i.boundingSphere),Ca.applyMatrix4(r),Ca.radius+=s,e.ray.intersectsSphere(Ca)===!1)return;sm.copy(r).invert(),Xs.copy(e.ray).applyMatrix4(sm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,f=i.index,d=i.attributes.position;if(f!==null){const m=Math.max(0,o.start),v=Math.min(f.count,o.start+o.count);for(let y=m,p=v-1;y<p;y+=c){const u=f.getX(y),_=f.getX(y+1),g=Ra(this,e,Xs,l,u,_);g&&n.push(g)}if(this.isLineLoop){const y=f.getX(v-1),p=f.getX(m),u=Ra(this,e,Xs,l,y,p);u&&n.push(u)}}else{const m=Math.max(0,o.start),v=Math.min(d.count,o.start+o.count);for(let y=m,p=v-1;y<p;y+=c){const u=Ra(this,e,Xs,l,y,y+1);u&&n.push(u)}if(this.isLineLoop){const y=Ra(this,e,Xs,l,v-1,m);y&&n.push(y)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ra(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(Al.fromBufferAttribute(o,r),Cl.fromBufferAttribute(o,s),n.distanceSqToSegment(Al,Cl,tu,om)>i)return;tu.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(tu);if(!(l<e.near||l>e.far))return{distance:l,point:om.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}class sv extends br{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const am=new dt,kf=new Hd,ba=new Bo,Pa=new B;class W1 extends At{constructor(e=new gn,n=new sv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ba.copy(i.boundingSphere),ba.applyMatrix4(r),ba.radius+=s,e.ray.intersectsSphere(ba)===!1)return;am.copy(r).invert(),kf.copy(e.ray).applyMatrix4(am);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let v=d,y=m;v<y;v++){const p=c.getX(v);Pa.fromBufferAttribute(h,p),lm(Pa,p,l,r,e,n,this)}}else{const d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let v=d,y=m;v<y;v++)Pa.fromBufferAttribute(h,v),lm(Pa,v,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function lm(t,e,n,i,r,s,o){const a=kf.distanceSqToPoint(t);if(a<n){const l=new B;kf.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class bo extends gn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const f=[],h=[],d=[],m=[];let v=0;const y=[],p=i/2;let u=0;_(),o===!1&&(e>0&&g(!0),n>0&&g(!1)),this.setIndex(f),this.setAttribute("position",new an(h,3)),this.setAttribute("normal",new an(d,3)),this.setAttribute("uv",new an(m,2));function _(){const M=new B,b=new B;let C=0;const w=(n-e)/i;for(let P=0;P<=s;P++){const H=[],x=P/s,E=x*(n-e)+e;for(let z=0;z<=r;z++){const F=z/r,W=F*l+a,j=Math.sin(W),O=Math.cos(W);b.x=E*j,b.y=-x*i+p,b.z=E*O,h.push(b.x,b.y,b.z),M.set(j,w,O).normalize(),d.push(M.x,M.y,M.z),m.push(F,1-x),H.push(v++)}y.push(H)}for(let P=0;P<r;P++)for(let H=0;H<s;H++){const x=y[H][P],E=y[H+1][P],z=y[H+1][P+1],F=y[H][P+1];e>0&&(f.push(x,E,F),C+=3),n>0&&(f.push(E,z,F),C+=3)}c.addGroup(u,C,0),u+=C}function g(M){const b=v,C=new Ze,w=new B;let P=0;const H=M===!0?e:n,x=M===!0?1:-1;for(let z=1;z<=r;z++)h.push(0,p*x,0),d.push(0,x,0),m.push(.5,.5),v++;const E=v;for(let z=0;z<=r;z++){const W=z/r*l+a,j=Math.cos(W),O=Math.sin(W);w.x=H*O,w.y=p*x,w.z=H*j,h.push(w.x,w.y,w.z),d.push(0,x,0),C.x=j*.5+.5,C.y=O*.5*x+.5,m.push(C.x,C.y),v++}for(let z=0;z<r;z++){const F=b+z,W=E+z;M===!0?f.push(W,W+1,F):f.push(W+1,W,F),P+=3}c.addGroup(u,P,M===!0?1:2),u+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Rl extends bo{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Rl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class jd extends gn{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],f=[];let h=e;const d=(n-e)/r,m=new B,v=new Ze;for(let y=0;y<=r;y++){for(let p=0;p<=i;p++){const u=s+p/i*o;m.x=h*Math.cos(u),m.y=h*Math.sin(u),l.push(m.x,m.y,m.z),c.push(0,0,1),v.x=(m.x/n+1)/2,v.y=(m.y/n+1)/2,f.push(v.x,v.y)}h+=d}for(let y=0;y<r;y++){const p=y*(i+1);for(let u=0;u<i;u++){const _=u+p,g=_,M=_+i+1,b=_+i+2,C=_+1;a.push(g,M,C),a.push(M,b,C)}}this.setIndex(a),this.setAttribute("position",new an(l,3)),this.setAttribute("normal",new an(c,3)),this.setAttribute("uv",new an(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jd(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ys extends br{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=B_,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ov extends At{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class j1 extends ov{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const nu=new dt,cm=new B,um=new B;class X1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vd,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;cm.setFromMatrixPosition(e.matrixWorld),n.position.copy(cm),um.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(um),n.updateMatrixWorld(),nu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(nu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Y1 extends X1{constructor(){super(new Q_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $1 extends ov{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new Y1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nd);function q1({latest:t,world:e,path:n}){const i=$e.useRef(null),r=$e.useRef(null),s=$e.useRef(!0);$e.useEffect(()=>{var Ge;const a=i.current;if(!a)return;const l=new V1;l.background=new We(856343),l.fog=new Wd(856343,120,400);const c=new En(55,a.clientWidth/Math.max(a.clientHeight,1),.5,2e3),f=new H1({antialias:!0});f.setPixelRatio(Math.min(window.devicePixelRatio,2)),f.setSize(a.clientWidth,a.clientHeight),a.appendChild(f.domElement),l.add(new j1(12571903,2102798,1.1));const h=new $1(16777215,1.5);h.position.set(-90,140,110),l.add(h);const d=e.terrain,[m,v]=d.shape,y=(v-1)*d.resolution,p=(m-1)*d.resolution,u=new zo(y,p,v-1,m-1),_=u.attributes.position;for(let oe=0;oe<m;oe++)for(let Te=0;Te<v;Te++){const L=((Ge=d.height[m-1-oe])==null?void 0:Ge[Te])??0;_.setZ(oe*v+Te,L)}u.computeVertexNormals();const g=new Ut(u,new Ys({color:7044954,roughness:.95,metalness:0,flatShading:!1}));g.rotation.x=-Math.PI/2,g.position.set(d.origin[0]+y/2,0,-(d.origin[1]+p/2)),l.add(g);const M=new Ut(u,new co({color:9414778,wireframe:!0,transparent:!0,opacity:.12}));M.rotation.copy(g.rotation),M.position.copy(g.position),l.add(M);const b=(oe,Te)=>{var K,Se,ae,he;const L=(oe-d.origin[0])/d.resolution,je=(Te-d.origin[1])/d.resolution,Ne=Math.max(0,Math.min(v-1,Math.floor(L))),ke=Math.max(0,Math.min(m-1,Math.floor(je))),Pe=Math.min(v-1,Ne+1),rt=Math.min(m-1,ke+1),Re=Math.max(0,Math.min(1,L-Ne)),R=Math.max(0,Math.min(1,je-ke)),S=((K=d.height[ke])==null?void 0:K[Ne])??0,k=((Se=d.height[ke])==null?void 0:Se[Pe])??0,Z=((ae=d.height[rt])==null?void 0:ae[Ne])??0,ee=((he=d.height[rt])==null?void 0:he[Pe])??0;return S*(1-Re)*(1-R)+k*Re*(1-R)+Z*(1-Re)*R+ee*Re*R};for(const oe of e.obstacles){const Te=new Ys({color:oe.known_a_priori?9200185:12734511,roughness:.8}),L=oe.kind==="cylinder"?new bo(oe.radius,oe.radius,oe.height,18):new Ar(oe.half_x*2,oe.height,oe.half_y*2),je=new Ut(L,Te);je.position.set(oe.x,b(oe.x,oe.y)+oe.height/2-.15,-oe.y),oe.kind==="box"&&(je.rotation.y=-oe.yaw),l.add(je)}const C=(oe,Te,L)=>{const je=new Ut(new Rl(1.1,3.2,14),new Ys({color:L,emissive:L,emissiveIntensity:.4}));je.position.set(oe,b(oe,Te)+3.4,-Te),je.rotation.x=Math.PI,l.add(je)};C(e.mission.start[0],e.mission.start[1],4176208),C(e.mission.goal[0],e.mission.goal[1],4890367);const w=(oe,Te)=>{const L=new Js,je=new Ut(new Ar(.9,.38,.76),new Ys({color:oe,wireframe:Te,transparent:Te,opacity:Te?.85:1,emissive:oe,emissiveIntensity:Te?.5:.18}));je.position.y=.3,L.add(je);const Ne=new Ut(new Rl(.17,.5,10),new Ys({color:oe,emissive:oe,emissiveIntensity:.5}));Ne.rotation.z=-Math.PI/2,Ne.position.set(.68,.3,0),L.add(Ne);const ke=new Ut(new bo(.07,.07,3,8),new co({color:oe,transparent:!0,opacity:.55}));return ke.position.y=1.8,L.add(ke),L},P=w(4890367,!1),H=w(15761468,!0);l.add(P,H);const x=new Ut(new jd(.98,1,48),new co({color:4890367,transparent:!0,opacity:.5,side:qn}));x.rotation.x=-Math.PI/2,l.add(x);const E=(oe,Te,L)=>{const je=new gn;return je.setAttribute("position",new Cn(new Float32Array(L*3),3)),je.setDrawRange(0,0),new G1(je,new rv({color:oe,linewidth:Te}))},z=E(4890367,2,4096),F=E(15761468,2,12e3);l.add(z,F);const W=new gn;W.setAttribute("position",new Cn(new Float32Array(360*3),3)),W.setDrawRange(0,0);const j=new W1(W,new sv({color:16767078,size:.42}));l.add(j);const O={az:-.7,el:.52,dist:42};let $=!1,D=0,q=0;const Q=oe=>{$=!0,D=oe.clientX,q=oe.clientY},se=()=>{$=!1},Ae=oe=>{$&&(O.az-=(oe.clientX-D)*.006,O.el=Math.max(.08,Math.min(1.5,O.el+(oe.clientY-q)*.005)),D=oe.clientX,q=oe.clientY)},He=oe=>{oe.preventDefault(),O.dist=Math.max(8,Math.min(320,O.dist*(1+oe.deltaY*.0012)))},X=f.domElement;X.addEventListener("pointerdown",Q),window.addEventListener("pointerup",se),window.addEventListener("pointermove",Ae),X.addEventListener("wheel",He,{passive:!1});const te=()=>{a.clientWidth&&(c.aspect=a.clientWidth/Math.max(a.clientHeight,1),c.updateProjectionMatrix(),f.setSize(a.clientWidth,a.clientHeight))},ue=new ResizeObserver(te);ue.observe(a);let ce=0;const be=new B,Ce=()=>{ce=requestAnimationFrame(Ce);const oe=s.current?P.position:g.position;be.lerp(oe,s.current?.12:.05),c.position.set(be.x+O.dist*Math.cos(O.el)*Math.cos(O.az),be.y+O.dist*Math.sin(O.el),be.z+O.dist*Math.cos(O.el)*Math.sin(O.az)),c.lookAt(be),f.render(l,c)};return Ce(),r.current={renderer:f,scene:l,camera:c,estBody:P,trueBody:H,sigmaRing:x,planLine:z,trailLine:F,scanPoints:j,trail:[],sampleMesh:b,dispose:()=>{cancelAnimationFrame(ce),ue.disconnect(),X.removeEventListener("pointerdown",Q),window.removeEventListener("pointerup",se),window.removeEventListener("pointermove",Ae),X.removeEventListener("wheel",He),f.dispose(),l.traverse(oe=>{var je;const Te=oe;(je=Te.geometry)==null||je.dispose();const L=Te.material;Array.isArray(L)?L.forEach(Ne=>Ne.dispose()):L==null||L.dispose()}),X.parentNode===a&&a.removeChild(X)}},()=>{var oe;(oe=r.current)==null||oe.dispose(),r.current=null}},[e]),$e.useEffect(()=>{const a=r.current;if(!a)return;const l=t.estimate,c=Math.PI/180,f=a.sampleMesh(l.position[0],l.position[1]);a.estBody.position.set(l.position[0],f+.1,-l.position[1]),a.estBody.rotation.set(0,-l.yaw_deg*c,0);const h=Math.max(l.pos_sigma_h,.05);a.sigmaRing.position.copy(a.estBody.position),a.sigmaRing.position.y=f+.06,a.sigmaRing.scale.set(h,h,1);const d=t.ground_truth;if(d){a.trueBody.visible=!0;const v=a.sampleMesh(d.position[0],d.position[1]);a.trueBody.position.set(d.position[0],v+.1,-d.position[1]),a.trueBody.rotation.set(0,-d.yaw_deg*c,0);const y=a.trail,p=y.length;if(p===0||Math.hypot(d.position[0]-y[p-3],d.position[1]+y[p-1])>.45){y.push(d.position[0],v+.25,-d.position[1]),y.length>12e3*3&&y.splice(0,3);const u=a.trailLine.geometry.attributes.position;u.array.set(y),u.needsUpdate=!0,a.trailLine.geometry.setDrawRange(0,y.length/3),a.trailLine.geometry.computeBoundingSphere()}}else a.trueBody.visible=!1;const m=t.lidar;if(m&&m.ranges.length){const v=a.scanPoints.geometry.attributes.position,y=v.array;let p=0;const u=l.yaw_deg*c;for(let _=0;_<m.ranges.length&&p<360;_++){const g=m.ranges[_];if(g===null||!Number.isFinite(g))continue;const M=u+m.angles[_];y[p*3]=l.position[0]+g*Math.cos(M),y[p*3+1]=f+.55,y[p*3+2]=-(l.position[1]+g*Math.sin(M)),p++}v.needsUpdate=!0,a.scanPoints.geometry.setDrawRange(0,p),a.scanPoints.geometry.computeBoundingSphere()}},[t]),$e.useEffect(()=>{const a=r.current;if(!a||n.length===0)return;const l=a.planLine.geometry.attributes.position,c=l.array,f=Math.min(n.length,c.length/3);for(let h=0;h<f;h++){const[d,m]=n[h];c[h*3]=d,c[h*3+1]=a.sampleMesh(d,m)+.35,c[h*3+2]=-m}l.needsUpdate=!0,a.planLine.geometry.setDrawRange(0,f),a.planLine.geometry.computeBoundingSphere()},[n,e]);const o=t.ground_truth;return A.jsxs("div",{className:"grid",children:[A.jsxs(Lt,{title:"3D simulation",className:"span2",right:A.jsxs("label",{className:"toggle",children:[A.jsx("input",{type:"checkbox",defaultChecked:!0,onChange:a=>s.current=a.target.checked}),"follow vehicle"]}),children:[A.jsx("div",{ref:i,className:"three-mount"}),A.jsxs("div",{className:"legend3d",children:[A.jsxs("span",{children:[A.jsx("i",{style:{background:"#4a9eff"}}),"estimated pose + 1σ ring"]}),A.jsxs("span",{children:[A.jsx("i",{style:{background:"#f0803c"}}),"ground truth (display only)"]}),A.jsxs("span",{children:[A.jsx("i",{style:{background:"#ffd866"}}),"LiDAR returns"]}),A.jsxs("span",{children:[A.jsx("i",{style:{background:"#8c6239"}}),"known obstacle"]}),A.jsxs("span",{children:[A.jsx("i",{style:{background:"#c2502f"}}),"discovered obstacle"]})]})]}),A.jsxs(Lt,{title:"Pose",children:[A.jsxs("div",{className:"stat-row",children:[A.jsx(xe,{label:"est x",value:Fe(t.estimate.position[0]),unit:"m"}),A.jsx(xe,{label:"est y",value:Fe(t.estimate.position[1]),unit:"m"}),A.jsx(xe,{label:"est yaw",value:Fe(t.estimate.yaw_deg,1),unit:"°"})]}),A.jsxs("div",{className:"stat-row",children:[A.jsx(xe,{label:"roll",value:Fe(t.estimate.roll_deg,1),unit:"°"}),A.jsx(xe,{label:"pitch",value:Fe(t.estimate.pitch_deg,1),unit:"°"}),A.jsx(xe,{label:"error",value:o?Fe(o.position_error_m):"n/a",unit:"m"})]})]}),A.jsx(Lt,{title:"Control",children:t.control?A.jsxs(A.Fragment,{children:[A.jsxs("div",{className:"stat-row",children:[A.jsx(xe,{label:"speed cmd",value:Fe(t.control.speed_cmd),unit:"m/s"}),A.jsx(xe,{label:"yaw rate",value:Fe(t.control.yaw_rate_cmd),unit:"rad/s"}),A.jsx(xe,{label:"cross-track",value:Fe(t.control.cross_track_m),unit:"m"})]}),A.jsxs("div",{className:"stat-row",children:[A.jsx(xe,{label:"limited by",value:t.control.limiting_constraint}),A.jsx(xe,{label:"obstacle",value:t.control.obstacle_distance_m===null?"clear":Fe(t.control.obstacle_distance_m)+" m",tone:t.control.obstacle_distance_m!==null&&t.control.obstacle_distance_m<1.5?"warn":"ok"}),A.jsx(xe,{label:"e-stop",value:t.control.emergency_stop?"yes":"no",tone:t.control.emergency_stop?"bad":"ok"})]})]}):A.jsx("p",{className:"muted",children:"no control output yet"})})]})}const K1={OK:"ok",DEGRADED:"warn",STALE:"bad",TIMEOUT:"bad",INVALID:"bad",FAILED:"bad",UNKNOWN:""},Z1=[[1,"timeout"],[2,"rate low"],[4,"stale payload"],[8,"out of range"],[16,"noisy"],[32,"inconsistent"]];function Q1(t){const e=Z1.filter(([n])=>(t&n)!==0).map(([,n])=>n);return e.length?e.join(", "):"—"}function J1({latest:t,history:e}){const n=t.estimate,i=Object.entries(t.sensors),r=i.filter(([,s])=>s.status!=="OK");return A.jsxs("div",{className:"grid",children:[A.jsxs(Lt,{title:"Sensor health",className:"span2",right:A.jsx("span",{className:r.length?"badge warn":"badge ok",children:r.length?`${r.length} not OK`:"all nominal"}),children:[A.jsxs("table",{className:"table",children:[A.jsx("thead",{children:A.jsxs("tr",{children:[A.jsx("th",{children:"sensor"}),A.jsx("th",{children:"status"}),A.jsx("th",{children:"rate"}),A.jsx("th",{children:"expected"}),A.jsx("th",{children:"availability"}),A.jsx("th",{children:"last valid"}),A.jsx("th",{children:"flags"}),A.jsx("th",{children:"detail"})]})}),A.jsx("tbody",{children:i.map(([s,o])=>A.jsxs("tr",{className:o.status==="OK"?"":"row-bad",children:[A.jsx("td",{children:s}),A.jsx("td",{children:A.jsx("span",{className:`badge ${K1[o.status]??""}`,children:o.status})}),A.jsxs("td",{children:[Fe(o.rate_hz,1)," Hz"]}),A.jsxs("td",{children:[Fe(o.expected_hz,0)," Hz"]}),A.jsxs("td",{children:[(o.availability*100).toFixed(2),"%"]}),A.jsxs("td",{children:[Fe(o.last_valid,2)," s"]}),A.jsx("td",{children:Q1(o.flags)}),A.jsx("td",{className:"muted",children:o.detail})]},s))})]}),A.jsxs("p",{className:"caveat",children:["A stream that keeps arriving with a fresh timestamp but an unchanged payload is reported as ",A.jsx("strong",{children:"STALE"}),", not OK. That case is the reason the monitor fingerprints the payload instead of watching only the timestamp and the rate."]})]}),A.jsxs(Lt,{title:"Estimator residuals",children:[A.jsx(Ga,{rows:e,height:140,shadeFlagged:!0,yMax:40,series:[{key:"nis",label:"GNSS NIS",color:"#4a9eff"},{key:"cusum",label:"CUSUM",color:"#f0803c",dashed:!0}]}),A.jsxs("div",{className:"stat-row",children:[A.jsx(xe,{label:"updates",value:n.updates}),A.jsx(xe,{label:"rejections",value:n.rejections,tone:n.rejections>n.updates*.3?"warn":"ok",hint:"Measurements refused by the chi-square gate."}),A.jsx(xe,{label:"NIS",value:Fe(t.gnss_integrity.nis)})]})]}),A.jsxs(Lt,{title:"Estimated sensor errors",children:[A.jsx("p",{className:"muted small",children:"Biases the filter has learned. These are states, not calibration constants: they drift, and watching them converge is how you tell a healthy filter from one that is absorbing a modelling error."}),A.jsxs("div",{className:"stat-row",children:[A.jsx(xe,{label:"gyro bias x",value:(n.gyro_bias[0]*1e3).toFixed(2),unit:"mrad/s"}),A.jsx(xe,{label:"y",value:(n.gyro_bias[1]*1e3).toFixed(2),unit:"mrad/s"}),A.jsx(xe,{label:"z",value:(n.gyro_bias[2]*1e3).toFixed(2),unit:"mrad/s"})]}),A.jsxs("div",{className:"stat-row",children:[A.jsx(xe,{label:"accel bias x",value:Fe(n.accel_bias[0],3),unit:"m/s²"}),A.jsx(xe,{label:"y",value:Fe(n.accel_bias[1],3),unit:"m/s²"}),A.jsx(xe,{label:"z",value:Fe(n.accel_bias[2],3),unit:"m/s²"})]}),A.jsxs("div",{className:"stat-row",children:[A.jsx(xe,{label:"baro bias",value:Fe(n.baro_bias),unit:"m"}),A.jsx(xe,{label:"odometry scale",value:(n.odom_scale*100).toFixed(2),unit:"%",hint:"Wheel slip makes the encoders over-report; this is the learned correction."}),A.jsx(xe,{label:"vel σ",value:Fe(n.vel_sigma,3),unit:"m/s"})]})]}),A.jsx(Lt,{title:"Speed tracking",children:A.jsx(Ga,{rows:e,height:140,series:[{key:"speed",label:"true speed (m/s)",color:"#3fb950"},{key:"speedCmd",label:"commanded (m/s)",color:"#4a9eff",dashed:!0}]})}),A.jsxs(Lt,{title:"Heading error",children:[A.jsx(Ga,{rows:e,height:140,shadeFlagged:!0,series:[{key:"yawErr",label:"yaw error (deg)",color:"#d2a8ff"}]}),A.jsxs("div",{className:"stat-row",children:[A.jsx(xe,{label:"yaw σ",value:Fe(n.yaw_sigma_deg,2),unit:"°"}),t.battery&&A.jsxs(A.Fragment,{children:[A.jsx(xe,{label:"battery",value:Fe(t.battery.percentage*100,1),unit:"%"}),A.jsx(xe,{label:"pack",value:Fe(t.battery.voltage,1),unit:"V"}),A.jsx(xe,{label:"draw",value:Fe(t.battery.current,1),unit:"A"})]})]})]})]})}function sr(t){return t==null?"–":typeof t=="boolean"?t?"yes":"no":typeof t=="number"?Number.isInteger(t)?String(t):t.toFixed(3):typeof t=="string"?t:JSON.stringify(t)}const ew={outcome:"Mission outcome",accuracy:"Localisation accuracy",consistency:"Estimator consistency",detection:"Fault detection",recovery:"Recovery",path:"Path efficiency",availability:"Data availability",false_alarms:"False alarms"};function tw({results:t,latest:e,world:n}){if(!t)return A.jsx("div",{className:"grid",children:A.jsxs(Lt,{title:"Experiment results",className:"span2",children:[A.jsx("p",{className:"muted",children:"The run is still in progress. Metrics are computed when the scenario ends — at the goal, at the timeout, or on an abort."}),e&&n&&A.jsxs("div",{className:"stat-row",children:[A.jsx(xe,{label:"scenario",value:n.scenario.id}),A.jsx(xe,{label:"elapsed",value:Fe(e.t,1),unit:"s"}),A.jsx(xe,{label:"of",value:Fe(n.scenario.duration_s,0),unit:"s"}),A.jsx(xe,{label:"state",value:e.resilience.state})]})]})});const i=t.outcome??{},r=i.mission_success===!0;return A.jsxs("div",{className:"grid",children:[A.jsxs(Lt,{title:"Verdict",className:"span2",right:A.jsx("span",{className:`badge ${r?"ok":"bad"}`,children:r?"mission success":"not successful"}),children:[A.jsxs("div",{className:"stat-row",children:[A.jsx(xe,{label:"goal reached",value:sr(i.goal_reached),tone:i.goal_reached?"ok":"warn"}),A.jsx(xe,{label:"collisions",value:sr(i.collisions),tone:Number(i.collisions)>0?"bad":"ok"}),A.jsx(xe,{label:"min clearance",value:sr(i.min_obstacle_clearance_m),unit:"m"}),A.jsx(xe,{label:"final state",value:sr(i.final_state)}),A.jsx(xe,{label:"duration",value:sr(i.duration_s),unit:"s"}),A.jsx(xe,{label:"real-time factor",value:sr(i.realtime_factor),unit:"×"})]}),i.safe_stop_short_of_goal===!0&&A.jsx("p",{className:"reason",children:"The vehicle stopped safely without reaching the goal. That is scored separately from a success and from a failure: declining to continue on untrustworthy data is the correct outcome, but it is not a completed mission."})]}),Object.entries(t).filter(([s])=>s!=="outcome").map(([s,o])=>A.jsx(Lt,{title:ew[s]??s,children:A.jsx("table",{className:"table compact",children:A.jsx("tbody",{children:Object.entries(o).filter(([a])=>!a.startsWith("per_")&&a!=="_note").map(([a,l])=>A.jsxs("tr",{children:[A.jsx("th",{children:a.replace(/_/g," ")}),A.jsx("td",{children:sr(l)})]},a))})})},s))]})}const fm=["t","estX","estY","trueX","trueY","posError","posSigma","yawErr","nis","cusum","speed","speedCmd","clearance","state","flagged"];function nw(t){const e=fm.join(","),n=t.map(i=>fm.map(r=>{const s=i[r];return s==null?"":typeof s=="number"?Number.isFinite(s)?String(s):"":String(s)}).join(","));return[e,...n].join(`
`)}function iu(t,e,n){const i=new Blob([e],{type:n}),r=URL.createObjectURL(i),s=document.createElement("a");s.href=r,s.download=t,s.click(),URL.revokeObjectURL(r)}function iw({history:t,world:e,latest:n,results:i,sendCommand:r,commandReady:s,commandLog:o,token:a,setToken:l}){const[c,f]=$e.useState(null),[h,d]=$e.useState(a),[m,v]=$e.useState(1),y=$e.useRef(void 0),p=c===null?t[t.length-1]:t[c],u=$e.useMemo(()=>t.length>1?[t[0].t,t[t.length-1].t]:[0,0],[t]),_=()=>{window.clearInterval(y.current);let b=c??0;y.current=window.setInterval(()=>{if(b+=1,b>=t.length){window.clearInterval(y.current),f(null);return}f(b)},50)},g=()=>window.clearInterval(y.current),M=(e==null?void 0:e.faults_declared)??[];return A.jsxs("div",{className:"grid",children:[A.jsx(Lt,{title:"Replay",className:"span2",children:t.length<2?A.jsx("p",{className:"muted",children:"Nothing buffered yet."}):A.jsxs(A.Fragment,{children:[A.jsx("input",{className:"scrub",type:"range",min:0,max:t.length-1,value:c??t.length-1,onChange:b=>{g(),f(Number(b.target.value))}}),A.jsxs("div",{className:"replay-controls",children:[A.jsx("button",{onClick:_,children:"▶ play"}),A.jsx("button",{onClick:g,children:"⏸ pause"}),A.jsx("button",{onClick:()=>{g(),f(null)},children:"⏭ live"}),A.jsxs("span",{className:"muted",children:["buffer ",u[0].toFixed(1),"–",u[1].toFixed(1)," s ·"," ",t.length," frames",c!==null&&" · scrubbing"]})]}),p&&A.jsxs("div",{className:"stat-row",children:[A.jsx(xe,{label:"t",value:Fe(p.t,2),unit:"s"}),A.jsx(xe,{label:"state",value:p.state}),A.jsx(xe,{label:"error",value:Fe(p.posError),unit:"m"}),A.jsx(xe,{label:"σ",value:Fe(p.posSigma),unit:"m"}),A.jsx(xe,{label:"NIS",value:Fe(p.nis)}),A.jsx(xe,{label:"GNSS",value:p.flagged?"inconsistent":"consistent",tone:p.flagged?"bad":"ok"})]})]})}),A.jsxs(Lt,{title:"Export",children:[A.jsxs("p",{className:"muted small",children:["This exports the dashboard's in-memory buffer. The authoritative per-trial record is written by the Python recorder as"," ",A.jsx("code",{children:"timeseries.csv"}),", ",A.jsx("code",{children:"metrics.json"}),","," ",A.jsx("code",{children:"events.csv"})," and ",A.jsx("code",{children:"result.json"})," under"," ",A.jsx("code",{children:"runs/"}),"."]}),A.jsxs("div",{className:"btn-row",children:[A.jsxs("button",{disabled:t.length===0,onClick:()=>iu(`${(e==null?void 0:e.scenario.id)??"session"}_seed${(e==null?void 0:e.scenario.seed)??0}_buffer.csv`,nw(t),"text/csv"),children:["buffer → CSV (",t.length,")"]}),A.jsx("button",{disabled:!i,onClick:()=>iu(`${(e==null?void 0:e.scenario.id)??"session"}_metrics.json`,JSON.stringify(i,null,1),"application/json"),children:"metrics → JSON"}),A.jsx("button",{disabled:!e,onClick:()=>iu(`${(e==null?void 0:e.scenario.id)??"session"}_scenario.json`,JSON.stringify({scenario:e==null?void 0:e.scenario,mission:e==null?void 0:e.mission,faults_declared:e==null?void 0:e.faults_declared},null,1),"application/json"),children:"scenario → JSON"})]}),e&&A.jsxs("div",{className:"stat-row",children:[A.jsx(xe,{label:"scenario",value:e.scenario.id}),A.jsx(xe,{label:"seed",value:e.scenario.seed})]})]}),A.jsxs(Lt,{title:"Command console",right:A.jsx("span",{className:s?"badge ok":"badge",children:s?"authorised":"read-only"}),children:[A.jsx("p",{className:"muted small",children:"Telemetry is read-only. Commands need the token the bridge prints at startup, and only the verbs below exist — the browser cannot name a topic, a node or a Python attribute."}),A.jsxs("div",{className:"btn-row",children:[A.jsx("input",{className:"token",type:"password",placeholder:"bridge token",value:h,onChange:b=>d(b.target.value)}),A.jsx("button",{onClick:()=>l(h),children:"connect"})]}),A.jsxs("div",{className:"btn-row",children:[A.jsx("button",{disabled:!s,onClick:()=>r("pause"),children:"pause"}),A.jsx("button",{disabled:!s,onClick:()=>r("resume"),children:"resume"}),A.jsx("button",{disabled:!s,onClick:()=>r("step",{steps:400}),children:"step 1 s"}),A.jsx("button",{disabled:!s,onClick:()=>r("reset",{}),children:"reset"})]}),A.jsx("div",{className:"btn-row",children:A.jsxs("label",{className:"muted small",children:["pacing ×",m,A.jsx("input",{type:"range",min:1,max:30,step:1,value:m,disabled:!s,onChange:b=>{const C=Number(b.target.value);v(C),r("set_speed",{speed:C})}})]})}),M.length>0&&A.jsxs(A.Fragment,{children:[A.jsx("p",{className:"muted small",children:"Declared faults for this scenario. Each is arithmetic applied to a simulated stream inside the simulator process — nothing is transmitted and no system state is changed."}),A.jsx("div",{className:"btn-row",children:M.map((b,C)=>A.jsxs("button",{disabled:!s,onClick:()=>r("inject_declared_fault",{index:C}),title:`${b.type} on ${b.target}, declared onset ${b.onset} s`,children:["inject ",b.type.replace(/_/g," ").toLowerCase()]},C))})]}),o.length>0&&A.jsx("pre",{className:"log",children:o.slice(0,12).join(`
`)}),(n==null?void 0:n.paused)&&A.jsx("p",{className:"reason",children:"simulation paused"})]})]})}const rw=[{id:"overview",label:"Mission"},{id:"simulation",label:"3D view"},{id:"sensors",label:"Sensors"},{id:"results",label:"Results"},{id:"replay",label:"Replay / export"}];function sw(){const t=kx(),[e,n]=$e.useState("overview");return A.jsxs("div",{className:"app",children:[A.jsxs("nav",{className:"nav",children:[A.jsxs("div",{className:"brand",children:["ResilienceLab",A.jsx("small",{children:"SITL autonomy & resilience testbed"})]}),A.jsx("div",{className:"tabs",children:rw.map(i=>A.jsx("button",{className:e===i.id?"tab active":"tab",onClick:()=>n(i.id),children:i.label},i.id))}),A.jsxs("div",{className:"nav-right",children:[t.latest&&A.jsx(w_,{state:t.latest.resilience.state}),t.latest&&A.jsxs("span",{className:"clock",children:["t = ",Fe(t.latest.t,1)," s"]}),A.jsx("span",{className:t.connected?"dot ok":"dot bad"}),A.jsx("span",{className:"muted small",children:t.connected?"bridge connected":"bridge offline"})]})]}),A.jsxs("main",{children:[!t.connected&&!t.latest&&A.jsxs("div",{className:"splash",children:[A.jsx("h1",{children:"Waiting for the telemetry bridge"}),A.jsx("p",{children:"Start it with:"}),A.jsx("pre",{children:"python3 -m bridge.telemetry_server \\ --scenario experiments/scenarios/baseline_normal.yaml"}),A.jsx("p",{className:"muted",children:"The dashboard reconnects on its own once the bridge is up."})]}),t.latest&&t.world&&e==="overview"&&A.jsx(Bx,{latest:t.latest,world:t.world,history:t.history}),t.latest&&t.world&&e==="simulation"&&A.jsx(q1,{latest:t.latest,world:t.world,path:t.path}),t.latest&&e==="sensors"&&A.jsx(J1,{latest:t.latest,history:t.history}),e==="results"&&A.jsx(tw,{results:t.results,latest:t.latest,world:t.world}),e==="replay"&&A.jsx(iw,{history:t.history,world:t.world,latest:t.latest,results:t.results,sendCommand:t.sendCommand,commandReady:t.commandReady,commandLog:t.commandLog,token:t.token,setToken:t.setToken})]}),A.jsxs("footer",{className:"foot",children:[A.jsx("span",{children:"Ground truth is shown for scoring and display only; the navigation stack never reads it."}),A.jsxs("span",{children:["GNSS flags report that streams ",A.jsx("em",{children:"disagree"})," — no cause is claimed."]})]})]})}T_(document.getElementById("root")).render(A.jsx($e.StrictMode,{children:A.jsx(sw,{})}));
//# sourceMappingURL=index-DtseQ62G.js.map
