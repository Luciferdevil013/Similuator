(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Rm={exports:{}},Ul={},Pm={exports:{}},We={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ia=Symbol.for("react.element"),N_=Symbol.for("react.portal"),L_=Symbol.for("react.fragment"),D_=Symbol.for("react.strict_mode"),I_=Symbol.for("react.profiler"),U_=Symbol.for("react.provider"),F_=Symbol.for("react.context"),O_=Symbol.for("react.forward_ref"),k_=Symbol.for("react.suspense"),B_=Symbol.for("react.memo"),z_=Symbol.for("react.lazy"),uh=Symbol.iterator;function j_(t){return t===null||typeof t!="object"?null:(t=uh&&t[uh]||t["@@iterator"],typeof t=="function"?t:null)}var Nm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Lm=Object.assign,Dm={};function Is(t,e,n){this.props=t,this.context=e,this.refs=Dm,this.updater=n||Nm}Is.prototype.isReactComponent={};Is.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Is.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Im(){}Im.prototype=Is.prototype;function Wd(t,e,n){this.props=t,this.context=e,this.refs=Dm,this.updater=n||Nm}var Xd=Wd.prototype=new Im;Xd.constructor=Wd;Lm(Xd,Is.prototype);Xd.isPureReactComponent=!0;var dh=Array.isArray,Um=Object.prototype.hasOwnProperty,$d={current:null},Fm={key:!0,ref:!0,__self:!0,__source:!0};function Om(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Um.call(e,i)&&!Fm.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Ia,type:t,key:s,ref:a,props:r,_owner:$d.current}}function H_(t,e){return{$$typeof:Ia,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Yd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ia}function V_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var fh=/\/+/g;function rc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?V_(""+t.key):e.toString(36)}function ko(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Ia:case N_:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+rc(a,0):i,dh(r)?(n="",t!=null&&(n=t.replace(fh,"$&/")+"/"),ko(r,e,n,"",function(u){return u})):r!=null&&(Yd(r)&&(r=H_(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(fh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",dh(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+rc(s,o);a+=ko(s,e,n,l,r)}else if(l=j_(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+rc(s,o++),a+=ko(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Ya(t,e,n){if(t==null)return t;var i=[],r=0;return ko(t,i,"","",function(s){return e.call(n,s,r++)}),i}function G_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Kt={current:null},Bo={transition:null},W_={ReactCurrentDispatcher:Kt,ReactCurrentBatchConfig:Bo,ReactCurrentOwner:$d};function km(){throw Error("act(...) is not supported in production builds of React.")}We.Children={map:Ya,forEach:function(t,e,n){Ya(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ya(t,function(){e++}),e},toArray:function(t){return Ya(t,function(e){return e})||[]},only:function(t){if(!Yd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};We.Component=Is;We.Fragment=L_;We.Profiler=I_;We.PureComponent=Wd;We.StrictMode=D_;We.Suspense=k_;We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W_;We.act=km;We.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Lm({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=$d.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Um.call(e,l)&&!Fm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:Ia,type:t.type,key:r,ref:s,props:i,_owner:a}};We.createContext=function(t){return t={$$typeof:F_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:U_,_context:t},t.Consumer=t};We.createElement=Om;We.createFactory=function(t){var e=Om.bind(null,t);return e.type=t,e};We.createRef=function(){return{current:null}};We.forwardRef=function(t){return{$$typeof:O_,render:t}};We.isValidElement=Yd;We.lazy=function(t){return{$$typeof:z_,_payload:{_status:-1,_result:t},_init:G_}};We.memo=function(t,e){return{$$typeof:B_,type:t,compare:e===void 0?null:e}};We.startTransition=function(t){var e=Bo.transition;Bo.transition={};try{t()}finally{Bo.transition=e}};We.unstable_act=km;We.useCallback=function(t,e){return Kt.current.useCallback(t,e)};We.useContext=function(t){return Kt.current.useContext(t)};We.useDebugValue=function(){};We.useDeferredValue=function(t){return Kt.current.useDeferredValue(t)};We.useEffect=function(t,e){return Kt.current.useEffect(t,e)};We.useId=function(){return Kt.current.useId()};We.useImperativeHandle=function(t,e,n){return Kt.current.useImperativeHandle(t,e,n)};We.useInsertionEffect=function(t,e){return Kt.current.useInsertionEffect(t,e)};We.useLayoutEffect=function(t,e){return Kt.current.useLayoutEffect(t,e)};We.useMemo=function(t,e){return Kt.current.useMemo(t,e)};We.useReducer=function(t,e,n){return Kt.current.useReducer(t,e,n)};We.useRef=function(t){return Kt.current.useRef(t)};We.useState=function(t){return Kt.current.useState(t)};We.useSyncExternalStore=function(t,e,n){return Kt.current.useSyncExternalStore(t,e,n)};We.useTransition=function(){return Kt.current.useTransition()};We.version="18.3.1";Pm.exports=We;var ae=Pm.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X_=ae,$_=Symbol.for("react.element"),Y_=Symbol.for("react.fragment"),q_=Object.prototype.hasOwnProperty,K_=X_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Z_={key:!0,ref:!0,__self:!0,__source:!0};function Bm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)q_.call(e,i)&&!Z_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:$_,type:t,key:s,ref:a,props:r,_owner:K_.current}}Ul.Fragment=Y_;Ul.jsx=Bm;Ul.jsxs=Bm;Rm.exports=Ul;var c=Rm.exports,zm={exports:{}},yn={},jm={exports:{}},Hm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,q){var Z=N.length;N.push(q);e:for(;0<Z;){var ie=Z-1>>>1,ue=N[ie];if(0<r(ue,q))N[ie]=q,N[Z]=ue,Z=ie;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var q=N[0],Z=N.pop();if(Z!==q){N[0]=Z;e:for(var ie=0,ue=N.length,Ne=ue>>>1;ie<Ne;){var H=2*(ie+1)-1,te=N[H],le=H+1,de=N[le];if(0>r(te,Z))le<ue&&0>r(de,te)?(N[ie]=de,N[le]=Z,ie=le):(N[ie]=te,N[H]=Z,ie=H);else if(le<ue&&0>r(de,Z))N[ie]=de,N[le]=Z,ie=le;else break e}}return q}function r(N,q){var Z=N.sortIndex-q.sortIndex;return Z!==0?Z:N.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],u=[],h=1,d=null,p=3,g=!1,_=!1,v=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(N){for(var q=n(u);q!==null;){if(q.callback===null)i(u);else if(q.startTime<=N)i(u),q.sortIndex=q.expirationTime,e(l,q);else break;q=n(u)}}function M(N){if(v=!1,y(N),!_)if(n(l)!==null)_=!0,B(L);else{var q=n(u);q!==null&&J(M,q.startTime-N)}}function L(N,q){_=!1,v&&(v=!1,f(R),R=-1),g=!0;var Z=p;try{for(y(q),d=n(l);d!==null&&(!(d.expirationTime>q)||N&&!w());){var ie=d.callback;if(typeof ie=="function"){d.callback=null,p=d.priorityLevel;var ue=ie(d.expirationTime<=q);q=t.unstable_now(),typeof ue=="function"?d.callback=ue:d===n(l)&&i(l),y(q)}else i(l);d=n(l)}if(d!==null)var Ne=!0;else{var H=n(u);H!==null&&J(M,H.startTime-q),Ne=!1}return Ne}finally{d=null,p=Z,g=!1}}var E=!1,A=null,R=-1,z=5,S=-1;function w(){return!(t.unstable_now()-S<z)}function I(){if(A!==null){var N=t.unstable_now();S=N;var q=!0;try{q=A(!0,N)}finally{q?b():(E=!1,A=null)}}else E=!1}var b;if(typeof x=="function")b=function(){x(I)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,$=j.port2;j.port1.onmessage=I,b=function(){$.postMessage(null)}}else b=function(){m(I,0)};function B(N){A=N,E||(E=!0,b())}function J(N,q){R=m(function(){N(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,B(L))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(p){case 1:case 2:case 3:var q=3;break;default:q=p}var Z=p;p=q;try{return N()}finally{p=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,q){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var Z=p;p=N;try{return q()}finally{p=Z}},t.unstable_scheduleCallback=function(N,q,Z){var ie=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ie+Z:ie):Z=ie,N){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=Z+ue,N={id:h++,callback:q,priorityLevel:N,startTime:Z,expirationTime:ue,sortIndex:-1},Z>ie?(N.sortIndex=Z,e(u,N),n(l)===null&&N===n(u)&&(v?(f(R),R=-1):v=!0,J(M,Z-ie))):(N.sortIndex=ue,e(l,N),_||g||(_=!0,B(L))),N},t.unstable_shouldYield=w,t.unstable_wrapCallback=function(N){var q=p;return function(){var Z=p;p=q;try{return N.apply(this,arguments)}finally{p=Z}}}})(Hm);jm.exports=Hm;var Q_=jm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J_=ae,xn=Q_;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Vm=new Set,ga={};function Lr(t,e){Ss(t,e),Ss(t+"Capture",e)}function Ss(t,e){for(ga[t]=e,t=0;t<e.length;t++)Vm.add(e[t])}var gi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uu=Object.prototype.hasOwnProperty,e0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,hh={},ph={};function t0(t){return uu.call(ph,t)?!0:uu.call(hh,t)?!1:e0.test(t)?ph[t]=!0:(hh[t]=!0,!1)}function n0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function i0(t,e,n,i){if(e===null||typeof e>"u"||n0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Zt(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Bt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Bt[t]=new Zt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Bt[e]=new Zt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Bt[t]=new Zt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Bt[t]=new Zt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Bt[t]=new Zt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Bt[t]=new Zt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Bt[t]=new Zt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Bt[t]=new Zt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Bt[t]=new Zt(t,5,!1,t.toLowerCase(),null,!1,!1)});var qd=/[\-:]([a-z])/g;function Kd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(qd,Kd);Bt[e]=new Zt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(qd,Kd);Bt[e]=new Zt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(qd,Kd);Bt[e]=new Zt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Bt[t]=new Zt(t,1,!1,t.toLowerCase(),null,!1,!1)});Bt.xlinkHref=new Zt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Bt[t]=new Zt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Zd(t,e,n,i){var r=Bt.hasOwnProperty(e)?Bt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(i0(e,n,r,i)&&(n=null),i||r===null?t0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Si=J_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qa=Symbol.for("react.element"),Zr=Symbol.for("react.portal"),Qr=Symbol.for("react.fragment"),Qd=Symbol.for("react.strict_mode"),du=Symbol.for("react.profiler"),Gm=Symbol.for("react.provider"),Wm=Symbol.for("react.context"),Jd=Symbol.for("react.forward_ref"),fu=Symbol.for("react.suspense"),hu=Symbol.for("react.suspense_list"),ef=Symbol.for("react.memo"),Ni=Symbol.for("react.lazy"),Xm=Symbol.for("react.offscreen"),mh=Symbol.iterator;function Bs(t){return t===null||typeof t!="object"?null:(t=mh&&t[mh]||t["@@iterator"],typeof t=="function"?t:null)}var gt=Object.assign,sc;function ea(t){if(sc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);sc=e&&e[1]||""}return`
`+sc+t}var ac=!1;function oc(t,e){if(!t||ac)return"";ac=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{ac=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ea(t):""}function r0(t){switch(t.tag){case 5:return ea(t.type);case 16:return ea("Lazy");case 13:return ea("Suspense");case 19:return ea("SuspenseList");case 0:case 2:case 15:return t=oc(t.type,!1),t;case 11:return t=oc(t.type.render,!1),t;case 1:return t=oc(t.type,!0),t;default:return""}}function pu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Qr:return"Fragment";case Zr:return"Portal";case du:return"Profiler";case Qd:return"StrictMode";case fu:return"Suspense";case hu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Wm:return(t.displayName||"Context")+".Consumer";case Gm:return(t._context.displayName||"Context")+".Provider";case Jd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ef:return e=t.displayName||null,e!==null?e:pu(t.type)||"Memo";case Ni:e=t._payload,t=t._init;try{return pu(t(e))}catch{}}return null}function s0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pu(e);case 8:return e===Qd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function qi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function $m(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function a0(t){var e=$m(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ka(t){t._valueTracker||(t._valueTracker=a0(t))}function Ym(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=$m(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function il(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function mu(t,e){var n=e.checked;return gt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function gh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=qi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function qm(t,e){e=e.checked,e!=null&&Zd(t,"checked",e,!1)}function gu(t,e){qm(t,e);var n=qi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?vu(t,e.type,n):e.hasOwnProperty("defaultValue")&&vu(t,e.type,qi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function vh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function vu(t,e,n){(e!=="number"||il(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ta=Array.isArray;function ds(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+qi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function _u(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return gt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function _h(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(ta(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:qi(n)}}function Km(t,e){var n=qi(e.value),i=qi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function xh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Zm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Zm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Za,Qm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Za=Za||document.createElement("div"),Za.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Za.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function va(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var sa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},o0=["Webkit","ms","Moz","O"];Object.keys(sa).forEach(function(t){o0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),sa[e]=sa[t]})});function Jm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||sa.hasOwnProperty(t)&&sa[t]?(""+e).trim():e+"px"}function eg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Jm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var l0=gt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yu(t,e){if(e){if(l0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function Su(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mu=null;function tf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Eu=null,fs=null,hs=null;function yh(t){if(t=Oa(t)){if(typeof Eu!="function")throw Error(se(280));var e=t.stateNode;e&&(e=zl(e),Eu(t.stateNode,t.type,e))}}function tg(t){fs?hs?hs.push(t):hs=[t]:fs=t}function ng(){if(fs){var t=fs,e=hs;if(hs=fs=null,yh(t),e)for(t=0;t<e.length;t++)yh(e[t])}}function ig(t,e){return t(e)}function rg(){}var lc=!1;function sg(t,e,n){if(lc)return t(e,n);lc=!0;try{return ig(t,e,n)}finally{lc=!1,(fs!==null||hs!==null)&&(rg(),ng())}}function _a(t,e){var n=t.stateNode;if(n===null)return null;var i=zl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var wu=!1;if(gi)try{var zs={};Object.defineProperty(zs,"passive",{get:function(){wu=!0}}),window.addEventListener("test",zs,zs),window.removeEventListener("test",zs,zs)}catch{wu=!1}function c0(t,e,n,i,r,s,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var aa=!1,rl=null,sl=!1,Tu=null,u0={onError:function(t){aa=!0,rl=t}};function d0(t,e,n,i,r,s,a,o,l){aa=!1,rl=null,c0.apply(u0,arguments)}function f0(t,e,n,i,r,s,a,o,l){if(d0.apply(this,arguments),aa){if(aa){var u=rl;aa=!1,rl=null}else throw Error(se(198));sl||(sl=!0,Tu=u)}}function Dr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ag(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Sh(t){if(Dr(t)!==t)throw Error(se(188))}function h0(t){var e=t.alternate;if(!e){if(e=Dr(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Sh(r),t;if(s===i)return Sh(r),e;s=s.sibling}throw Error(se(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function og(t){return t=h0(t),t!==null?lg(t):null}function lg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=lg(t);if(e!==null)return e;t=t.sibling}return null}var cg=xn.unstable_scheduleCallback,Mh=xn.unstable_cancelCallback,p0=xn.unstable_shouldYield,m0=xn.unstable_requestPaint,Mt=xn.unstable_now,g0=xn.unstable_getCurrentPriorityLevel,nf=xn.unstable_ImmediatePriority,ug=xn.unstable_UserBlockingPriority,al=xn.unstable_NormalPriority,v0=xn.unstable_LowPriority,dg=xn.unstable_IdlePriority,Fl=null,Qn=null;function _0(t){if(Qn&&typeof Qn.onCommitFiberRoot=="function")try{Qn.onCommitFiberRoot(Fl,t,void 0,(t.current.flags&128)===128)}catch{}}var Vn=Math.clz32?Math.clz32:S0,x0=Math.log,y0=Math.LN2;function S0(t){return t>>>=0,t===0?32:31-(x0(t)/y0|0)|0}var Qa=64,Ja=4194304;function na(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ol(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=na(o):(s&=a,s!==0&&(i=na(s)))}else a=n&~r,a!==0?i=na(a):s!==0&&(i=na(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Vn(e),r=1<<n,i|=t[n],e&=~r;return i}function M0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function E0(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Vn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=M0(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Au(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function fg(){var t=Qa;return Qa<<=1,!(Qa&4194240)&&(Qa=64),t}function cc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ua(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Vn(e),t[e]=n}function w0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Vn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function rf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Vn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var at=0;function hg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var pg,sf,mg,gg,vg,Cu=!1,eo=[],Bi=null,zi=null,ji=null,xa=new Map,ya=new Map,Di=[],T0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Eh(t,e){switch(t){case"focusin":case"focusout":Bi=null;break;case"dragenter":case"dragleave":zi=null;break;case"mouseover":case"mouseout":ji=null;break;case"pointerover":case"pointerout":xa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ya.delete(e.pointerId)}}function js(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Oa(e),e!==null&&sf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function A0(t,e,n,i,r){switch(e){case"focusin":return Bi=js(Bi,t,e,n,i,r),!0;case"dragenter":return zi=js(zi,t,e,n,i,r),!0;case"mouseover":return ji=js(ji,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return xa.set(s,js(xa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ya.set(s,js(ya.get(s)||null,t,e,n,i,r)),!0}return!1}function _g(t){var e=_r(t.target);if(e!==null){var n=Dr(e);if(n!==null){if(e=n.tag,e===13){if(e=ag(n),e!==null){t.blockedOn=e,vg(t.priority,function(){mg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function zo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=bu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Mu=i,n.target.dispatchEvent(i),Mu=null}else return e=Oa(n),e!==null&&sf(e),t.blockedOn=n,!1;e.shift()}return!0}function wh(t,e,n){zo(t)&&n.delete(e)}function C0(){Cu=!1,Bi!==null&&zo(Bi)&&(Bi=null),zi!==null&&zo(zi)&&(zi=null),ji!==null&&zo(ji)&&(ji=null),xa.forEach(wh),ya.forEach(wh)}function Hs(t,e){t.blockedOn===e&&(t.blockedOn=null,Cu||(Cu=!0,xn.unstable_scheduleCallback(xn.unstable_NormalPriority,C0)))}function Sa(t){function e(r){return Hs(r,t)}if(0<eo.length){Hs(eo[0],t);for(var n=1;n<eo.length;n++){var i=eo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Bi!==null&&Hs(Bi,t),zi!==null&&Hs(zi,t),ji!==null&&Hs(ji,t),xa.forEach(e),ya.forEach(e),n=0;n<Di.length;n++)i=Di[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Di.length&&(n=Di[0],n.blockedOn===null);)_g(n),n.blockedOn===null&&Di.shift()}var ps=Si.ReactCurrentBatchConfig,ll=!0;function b0(t,e,n,i){var r=at,s=ps.transition;ps.transition=null;try{at=1,af(t,e,n,i)}finally{at=r,ps.transition=s}}function R0(t,e,n,i){var r=at,s=ps.transition;ps.transition=null;try{at=4,af(t,e,n,i)}finally{at=r,ps.transition=s}}function af(t,e,n,i){if(ll){var r=bu(t,e,n,i);if(r===null)xc(t,e,i,cl,n),Eh(t,i);else if(A0(r,t,e,n,i))i.stopPropagation();else if(Eh(t,i),e&4&&-1<T0.indexOf(t)){for(;r!==null;){var s=Oa(r);if(s!==null&&pg(s),s=bu(t,e,n,i),s===null&&xc(t,e,i,cl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else xc(t,e,i,null,n)}}var cl=null;function bu(t,e,n,i){if(cl=null,t=tf(i),t=_r(t),t!==null)if(e=Dr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ag(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return cl=t,null}function xg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(g0()){case nf:return 1;case ug:return 4;case al:case v0:return 16;case dg:return 536870912;default:return 16}default:return 16}}var Fi=null,of=null,jo=null;function yg(){if(jo)return jo;var t,e=of,n=e.length,i,r="value"in Fi?Fi.value:Fi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return jo=r.slice(t,1<i?1-i:void 0)}function Ho(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function to(){return!0}function Th(){return!1}function Sn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?to:Th,this.isPropagationStopped=Th,this}return gt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=to)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=to)},persist:function(){},isPersistent:to}),e}var Us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lf=Sn(Us),Fa=gt({},Us,{view:0,detail:0}),P0=Sn(Fa),uc,dc,Vs,Ol=gt({},Fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Vs&&(Vs&&t.type==="mousemove"?(uc=t.screenX-Vs.screenX,dc=t.screenY-Vs.screenY):dc=uc=0,Vs=t),uc)},movementY:function(t){return"movementY"in t?t.movementY:dc}}),Ah=Sn(Ol),N0=gt({},Ol,{dataTransfer:0}),L0=Sn(N0),D0=gt({},Fa,{relatedTarget:0}),fc=Sn(D0),I0=gt({},Us,{animationName:0,elapsedTime:0,pseudoElement:0}),U0=Sn(I0),F0=gt({},Us,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),O0=Sn(F0),k0=gt({},Us,{data:0}),Ch=Sn(k0),B0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},z0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},j0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function H0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=j0[t])?!!e[t]:!1}function cf(){return H0}var V0=gt({},Fa,{key:function(t){if(t.key){var e=B0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ho(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?z0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cf,charCode:function(t){return t.type==="keypress"?Ho(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ho(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),G0=Sn(V0),W0=gt({},Ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bh=Sn(W0),X0=gt({},Fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cf}),$0=Sn(X0),Y0=gt({},Us,{propertyName:0,elapsedTime:0,pseudoElement:0}),q0=Sn(Y0),K0=gt({},Ol,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Z0=Sn(K0),Q0=[9,13,27,32],uf=gi&&"CompositionEvent"in window,oa=null;gi&&"documentMode"in document&&(oa=document.documentMode);var J0=gi&&"TextEvent"in window&&!oa,Sg=gi&&(!uf||oa&&8<oa&&11>=oa),Rh=" ",Ph=!1;function Mg(t,e){switch(t){case"keyup":return Q0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Eg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Jr=!1;function ex(t,e){switch(t){case"compositionend":return Eg(e);case"keypress":return e.which!==32?null:(Ph=!0,Rh);case"textInput":return t=e.data,t===Rh&&Ph?null:t;default:return null}}function tx(t,e){if(Jr)return t==="compositionend"||!uf&&Mg(t,e)?(t=yg(),jo=of=Fi=null,Jr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Sg&&e.locale!=="ko"?null:e.data;default:return null}}var nx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!nx[t.type]:e==="textarea"}function wg(t,e,n,i){tg(i),e=ul(e,"onChange"),0<e.length&&(n=new lf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var la=null,Ma=null;function ix(t){Ug(t,0)}function kl(t){var e=ns(t);if(Ym(e))return t}function rx(t,e){if(t==="change")return e}var Tg=!1;if(gi){var hc;if(gi){var pc="oninput"in document;if(!pc){var Lh=document.createElement("div");Lh.setAttribute("oninput","return;"),pc=typeof Lh.oninput=="function"}hc=pc}else hc=!1;Tg=hc&&(!document.documentMode||9<document.documentMode)}function Dh(){la&&(la.detachEvent("onpropertychange",Ag),Ma=la=null)}function Ag(t){if(t.propertyName==="value"&&kl(Ma)){var e=[];wg(e,Ma,t,tf(t)),sg(ix,e)}}function sx(t,e,n){t==="focusin"?(Dh(),la=e,Ma=n,la.attachEvent("onpropertychange",Ag)):t==="focusout"&&Dh()}function ax(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return kl(Ma)}function ox(t,e){if(t==="click")return kl(e)}function lx(t,e){if(t==="input"||t==="change")return kl(e)}function cx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Wn=typeof Object.is=="function"?Object.is:cx;function Ea(t,e){if(Wn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!uu.call(e,r)||!Wn(t[r],e[r]))return!1}return!0}function Ih(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Uh(t,e){var n=Ih(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ih(n)}}function Cg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Cg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function bg(){for(var t=window,e=il();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=il(t.document)}return e}function df(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ux(t){var e=bg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Cg(n.ownerDocument.documentElement,n)){if(i!==null&&df(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Uh(n,s);var a=Uh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var dx=gi&&"documentMode"in document&&11>=document.documentMode,es=null,Ru=null,ca=null,Pu=!1;function Fh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pu||es==null||es!==il(i)||(i=es,"selectionStart"in i&&df(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ca&&Ea(ca,i)||(ca=i,i=ul(Ru,"onSelect"),0<i.length&&(e=new lf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=es)))}function no(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ts={animationend:no("Animation","AnimationEnd"),animationiteration:no("Animation","AnimationIteration"),animationstart:no("Animation","AnimationStart"),transitionend:no("Transition","TransitionEnd")},mc={},Rg={};gi&&(Rg=document.createElement("div").style,"AnimationEvent"in window||(delete ts.animationend.animation,delete ts.animationiteration.animation,delete ts.animationstart.animation),"TransitionEvent"in window||delete ts.transitionend.transition);function Bl(t){if(mc[t])return mc[t];if(!ts[t])return t;var e=ts[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Rg)return mc[t]=e[n];return t}var Pg=Bl("animationend"),Ng=Bl("animationiteration"),Lg=Bl("animationstart"),Dg=Bl("transitionend"),Ig=new Map,Oh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ji(t,e){Ig.set(t,e),Lr(e,[t])}for(var gc=0;gc<Oh.length;gc++){var vc=Oh[gc],fx=vc.toLowerCase(),hx=vc[0].toUpperCase()+vc.slice(1);Ji(fx,"on"+hx)}Ji(Pg,"onAnimationEnd");Ji(Ng,"onAnimationIteration");Ji(Lg,"onAnimationStart");Ji("dblclick","onDoubleClick");Ji("focusin","onFocus");Ji("focusout","onBlur");Ji(Dg,"onTransitionEnd");Ss("onMouseEnter",["mouseout","mouseover"]);Ss("onMouseLeave",["mouseout","mouseover"]);Ss("onPointerEnter",["pointerout","pointerover"]);Ss("onPointerLeave",["pointerout","pointerover"]);Lr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Lr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Lr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Lr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Lr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Lr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),px=new Set("cancel close invalid load scroll toggle".split(" ").concat(ia));function kh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,f0(i,e,void 0,t),t.currentTarget=null}function Ug(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;kh(r,o,u),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;kh(r,o,u),s=l}}}if(sl)throw t=Tu,sl=!1,Tu=null,t}function ct(t,e){var n=e[Uu];n===void 0&&(n=e[Uu]=new Set);var i=t+"__bubble";n.has(i)||(Fg(e,t,2,!1),n.add(i))}function _c(t,e,n){var i=0;e&&(i|=4),Fg(n,t,i,e)}var io="_reactListening"+Math.random().toString(36).slice(2);function wa(t){if(!t[io]){t[io]=!0,Vm.forEach(function(n){n!=="selectionchange"&&(px.has(n)||_c(n,!1,t),_c(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[io]||(e[io]=!0,_c("selectionchange",!1,e))}}function Fg(t,e,n,i){switch(xg(e)){case 1:var r=b0;break;case 4:r=R0;break;default:r=af}n=r.bind(null,e,n,t),r=void 0,!wu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function xc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=_r(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}sg(function(){var u=s,h=tf(n),d=[];e:{var p=Ig.get(t);if(p!==void 0){var g=lf,_=t;switch(t){case"keypress":if(Ho(n)===0)break e;case"keydown":case"keyup":g=G0;break;case"focusin":_="focus",g=fc;break;case"focusout":_="blur",g=fc;break;case"beforeblur":case"afterblur":g=fc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Ah;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=L0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=$0;break;case Pg:case Ng:case Lg:g=U0;break;case Dg:g=q0;break;case"scroll":g=P0;break;case"wheel":g=Z0;break;case"copy":case"cut":case"paste":g=O0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=bh}var v=(e&4)!==0,m=!v&&t==="scroll",f=v?p!==null?p+"Capture":null:p;v=[];for(var x=u,y;x!==null;){y=x;var M=y.stateNode;if(y.tag===5&&M!==null&&(y=M,f!==null&&(M=_a(x,f),M!=null&&v.push(Ta(x,M,y)))),m)break;x=x.return}0<v.length&&(p=new g(p,_,null,n,h),d.push({event:p,listeners:v}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",p&&n!==Mu&&(_=n.relatedTarget||n.fromElement)&&(_r(_)||_[vi]))break e;if((g||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=u,_=_?_r(_):null,_!==null&&(m=Dr(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(v=Ah,M="onMouseLeave",f="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(v=bh,M="onPointerLeave",f="onPointerEnter",x="pointer"),m=g==null?p:ns(g),y=_==null?p:ns(_),p=new v(M,x+"leave",g,n,h),p.target=m,p.relatedTarget=y,M=null,_r(h)===u&&(v=new v(f,x+"enter",_,n,h),v.target=y,v.relatedTarget=m,M=v),m=M,g&&_)t:{for(v=g,f=_,x=0,y=v;y;y=Fr(y))x++;for(y=0,M=f;M;M=Fr(M))y++;for(;0<x-y;)v=Fr(v),x--;for(;0<y-x;)f=Fr(f),y--;for(;x--;){if(v===f||f!==null&&v===f.alternate)break t;v=Fr(v),f=Fr(f)}v=null}else v=null;g!==null&&Bh(d,p,g,v,!1),_!==null&&m!==null&&Bh(d,m,_,v,!0)}}e:{if(p=u?ns(u):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var L=rx;else if(Nh(p))if(Tg)L=lx;else{L=ax;var E=sx}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(L=ox);if(L&&(L=L(t,u))){wg(d,L,n,h);break e}E&&E(t,p,u),t==="focusout"&&(E=p._wrapperState)&&E.controlled&&p.type==="number"&&vu(p,"number",p.value)}switch(E=u?ns(u):window,t){case"focusin":(Nh(E)||E.contentEditable==="true")&&(es=E,Ru=u,ca=null);break;case"focusout":ca=Ru=es=null;break;case"mousedown":Pu=!0;break;case"contextmenu":case"mouseup":case"dragend":Pu=!1,Fh(d,n,h);break;case"selectionchange":if(dx)break;case"keydown":case"keyup":Fh(d,n,h)}var A;if(uf)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Jr?Mg(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Sg&&n.locale!=="ko"&&(Jr||R!=="onCompositionStart"?R==="onCompositionEnd"&&Jr&&(A=yg()):(Fi=h,of="value"in Fi?Fi.value:Fi.textContent,Jr=!0)),E=ul(u,R),0<E.length&&(R=new Ch(R,t,null,n,h),d.push({event:R,listeners:E}),A?R.data=A:(A=Eg(n),A!==null&&(R.data=A)))),(A=J0?ex(t,n):tx(t,n))&&(u=ul(u,"onBeforeInput"),0<u.length&&(h=new Ch("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:u}),h.data=A))}Ug(d,e)})}function Ta(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ul(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=_a(t,n),s!=null&&i.unshift(Ta(t,s,r)),s=_a(t,e),s!=null&&i.push(Ta(t,s,r))),t=t.return}return i}function Fr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Bh(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,u=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&u!==null&&(o=u,r?(l=_a(n,s),l!=null&&a.unshift(Ta(n,l,o))):r||(l=_a(n,s),l!=null&&a.push(Ta(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var mx=/\r\n?/g,gx=/\u0000|\uFFFD/g;function zh(t){return(typeof t=="string"?t:""+t).replace(mx,`
`).replace(gx,"")}function ro(t,e,n){if(e=zh(e),zh(t)!==e&&n)throw Error(se(425))}function dl(){}var Nu=null,Lu=null;function Du(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Iu=typeof setTimeout=="function"?setTimeout:void 0,vx=typeof clearTimeout=="function"?clearTimeout:void 0,jh=typeof Promise=="function"?Promise:void 0,_x=typeof queueMicrotask=="function"?queueMicrotask:typeof jh<"u"?function(t){return jh.resolve(null).then(t).catch(xx)}:Iu;function xx(t){setTimeout(function(){throw t})}function yc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Sa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Sa(e)}function Hi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Hh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Fs=Math.random().toString(36).slice(2),Kn="__reactFiber$"+Fs,Aa="__reactProps$"+Fs,vi="__reactContainer$"+Fs,Uu="__reactEvents$"+Fs,yx="__reactListeners$"+Fs,Sx="__reactHandles$"+Fs;function _r(t){var e=t[Kn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[vi]||n[Kn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Hh(t);t!==null;){if(n=t[Kn])return n;t=Hh(t)}return e}t=n,n=t.parentNode}return null}function Oa(t){return t=t[Kn]||t[vi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ns(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function zl(t){return t[Aa]||null}var Fu=[],is=-1;function er(t){return{current:t}}function dt(t){0>is||(t.current=Fu[is],Fu[is]=null,is--)}function ot(t,e){is++,Fu[is]=t.current,t.current=e}var Ki={},Wt=er(Ki),an=er(!1),Tr=Ki;function Ms(t,e){var n=t.type.contextTypes;if(!n)return Ki;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function on(t){return t=t.childContextTypes,t!=null}function fl(){dt(an),dt(Wt)}function Vh(t,e,n){if(Wt.current!==Ki)throw Error(se(168));ot(Wt,e),ot(an,n)}function Og(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,s0(t)||"Unknown",r));return gt({},n,i)}function hl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ki,Tr=Wt.current,ot(Wt,t),ot(an,an.current),!0}function Gh(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=Og(t,e,Tr),i.__reactInternalMemoizedMergedChildContext=t,dt(an),dt(Wt),ot(Wt,t)):dt(an),ot(an,n)}var ci=null,jl=!1,Sc=!1;function kg(t){ci===null?ci=[t]:ci.push(t)}function Mx(t){jl=!0,kg(t)}function tr(){if(!Sc&&ci!==null){Sc=!0;var t=0,e=at;try{var n=ci;for(at=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ci=null,jl=!1}catch(r){throw ci!==null&&(ci=ci.slice(t+1)),cg(nf,tr),r}finally{at=e,Sc=!1}}return null}var rs=[],ss=0,pl=null,ml=0,wn=[],Tn=0,Ar=null,ui=1,di="";function dr(t,e){rs[ss++]=ml,rs[ss++]=pl,pl=t,ml=e}function Bg(t,e,n){wn[Tn++]=ui,wn[Tn++]=di,wn[Tn++]=Ar,Ar=t;var i=ui;t=di;var r=32-Vn(i)-1;i&=~(1<<r),n+=1;var s=32-Vn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,ui=1<<32-Vn(e)+r|n<<r|i,di=s+t}else ui=1<<s|n<<r|i,di=t}function ff(t){t.return!==null&&(dr(t,1),Bg(t,1,0))}function hf(t){for(;t===pl;)pl=rs[--ss],rs[ss]=null,ml=rs[--ss],rs[ss]=null;for(;t===Ar;)Ar=wn[--Tn],wn[Tn]=null,di=wn[--Tn],wn[Tn]=null,ui=wn[--Tn],wn[Tn]=null}var vn=null,gn=null,ft=!1,Bn=null;function zg(t,e){var n=Cn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Wh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,vn=t,gn=Hi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,vn=t,gn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ar!==null?{id:ui,overflow:di}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Cn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,vn=t,gn=null,!0):!1;default:return!1}}function Ou(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ku(t){if(ft){var e=gn;if(e){var n=e;if(!Wh(t,e)){if(Ou(t))throw Error(se(418));e=Hi(n.nextSibling);var i=vn;e&&Wh(t,e)?zg(i,n):(t.flags=t.flags&-4097|2,ft=!1,vn=t)}}else{if(Ou(t))throw Error(se(418));t.flags=t.flags&-4097|2,ft=!1,vn=t}}}function Xh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;vn=t}function so(t){if(t!==vn)return!1;if(!ft)return Xh(t),ft=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Du(t.type,t.memoizedProps)),e&&(e=gn)){if(Ou(t))throw jg(),Error(se(418));for(;e;)zg(t,e),e=Hi(e.nextSibling)}if(Xh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){gn=Hi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}gn=null}}else gn=vn?Hi(t.stateNode.nextSibling):null;return!0}function jg(){for(var t=gn;t;)t=Hi(t.nextSibling)}function Es(){gn=vn=null,ft=!1}function pf(t){Bn===null?Bn=[t]:Bn.push(t)}var Ex=Si.ReactCurrentBatchConfig;function Gs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function ao(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function $h(t){var e=t._init;return e(t._payload)}function Hg(t){function e(f,x){if(t){var y=f.deletions;y===null?(f.deletions=[x],f.flags|=16):y.push(x)}}function n(f,x){if(!t)return null;for(;x!==null;)e(f,x),x=x.sibling;return null}function i(f,x){for(f=new Map;x!==null;)x.key!==null?f.set(x.key,x):f.set(x.index,x),x=x.sibling;return f}function r(f,x){return f=Xi(f,x),f.index=0,f.sibling=null,f}function s(f,x,y){return f.index=y,t?(y=f.alternate,y!==null?(y=y.index,y<x?(f.flags|=2,x):y):(f.flags|=2,x)):(f.flags|=1048576,x)}function a(f){return t&&f.alternate===null&&(f.flags|=2),f}function o(f,x,y,M){return x===null||x.tag!==6?(x=bc(y,f.mode,M),x.return=f,x):(x=r(x,y),x.return=f,x)}function l(f,x,y,M){var L=y.type;return L===Qr?h(f,x,y.props.children,M,y.key):x!==null&&(x.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Ni&&$h(L)===x.type)?(M=r(x,y.props),M.ref=Gs(f,x,y),M.return=f,M):(M=qo(y.type,y.key,y.props,null,f.mode,M),M.ref=Gs(f,x,y),M.return=f,M)}function u(f,x,y,M){return x===null||x.tag!==4||x.stateNode.containerInfo!==y.containerInfo||x.stateNode.implementation!==y.implementation?(x=Rc(y,f.mode,M),x.return=f,x):(x=r(x,y.children||[]),x.return=f,x)}function h(f,x,y,M,L){return x===null||x.tag!==7?(x=wr(y,f.mode,M,L),x.return=f,x):(x=r(x,y),x.return=f,x)}function d(f,x,y){if(typeof x=="string"&&x!==""||typeof x=="number")return x=bc(""+x,f.mode,y),x.return=f,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case qa:return y=qo(x.type,x.key,x.props,null,f.mode,y),y.ref=Gs(f,null,x),y.return=f,y;case Zr:return x=Rc(x,f.mode,y),x.return=f,x;case Ni:var M=x._init;return d(f,M(x._payload),y)}if(ta(x)||Bs(x))return x=wr(x,f.mode,y,null),x.return=f,x;ao(f,x)}return null}function p(f,x,y,M){var L=x!==null?x.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return L!==null?null:o(f,x,""+y,M);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case qa:return y.key===L?l(f,x,y,M):null;case Zr:return y.key===L?u(f,x,y,M):null;case Ni:return L=y._init,p(f,x,L(y._payload),M)}if(ta(y)||Bs(y))return L!==null?null:h(f,x,y,M,null);ao(f,y)}return null}function g(f,x,y,M,L){if(typeof M=="string"&&M!==""||typeof M=="number")return f=f.get(y)||null,o(x,f,""+M,L);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case qa:return f=f.get(M.key===null?y:M.key)||null,l(x,f,M,L);case Zr:return f=f.get(M.key===null?y:M.key)||null,u(x,f,M,L);case Ni:var E=M._init;return g(f,x,y,E(M._payload),L)}if(ta(M)||Bs(M))return f=f.get(y)||null,h(x,f,M,L,null);ao(x,M)}return null}function _(f,x,y,M){for(var L=null,E=null,A=x,R=x=0,z=null;A!==null&&R<y.length;R++){A.index>R?(z=A,A=null):z=A.sibling;var S=p(f,A,y[R],M);if(S===null){A===null&&(A=z);break}t&&A&&S.alternate===null&&e(f,A),x=s(S,x,R),E===null?L=S:E.sibling=S,E=S,A=z}if(R===y.length)return n(f,A),ft&&dr(f,R),L;if(A===null){for(;R<y.length;R++)A=d(f,y[R],M),A!==null&&(x=s(A,x,R),E===null?L=A:E.sibling=A,E=A);return ft&&dr(f,R),L}for(A=i(f,A);R<y.length;R++)z=g(A,f,R,y[R],M),z!==null&&(t&&z.alternate!==null&&A.delete(z.key===null?R:z.key),x=s(z,x,R),E===null?L=z:E.sibling=z,E=z);return t&&A.forEach(function(w){return e(f,w)}),ft&&dr(f,R),L}function v(f,x,y,M){var L=Bs(y);if(typeof L!="function")throw Error(se(150));if(y=L.call(y),y==null)throw Error(se(151));for(var E=L=null,A=x,R=x=0,z=null,S=y.next();A!==null&&!S.done;R++,S=y.next()){A.index>R?(z=A,A=null):z=A.sibling;var w=p(f,A,S.value,M);if(w===null){A===null&&(A=z);break}t&&A&&w.alternate===null&&e(f,A),x=s(w,x,R),E===null?L=w:E.sibling=w,E=w,A=z}if(S.done)return n(f,A),ft&&dr(f,R),L;if(A===null){for(;!S.done;R++,S=y.next())S=d(f,S.value,M),S!==null&&(x=s(S,x,R),E===null?L=S:E.sibling=S,E=S);return ft&&dr(f,R),L}for(A=i(f,A);!S.done;R++,S=y.next())S=g(A,f,R,S.value,M),S!==null&&(t&&S.alternate!==null&&A.delete(S.key===null?R:S.key),x=s(S,x,R),E===null?L=S:E.sibling=S,E=S);return t&&A.forEach(function(I){return e(f,I)}),ft&&dr(f,R),L}function m(f,x,y,M){if(typeof y=="object"&&y!==null&&y.type===Qr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case qa:e:{for(var L=y.key,E=x;E!==null;){if(E.key===L){if(L=y.type,L===Qr){if(E.tag===7){n(f,E.sibling),x=r(E,y.props.children),x.return=f,f=x;break e}}else if(E.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Ni&&$h(L)===E.type){n(f,E.sibling),x=r(E,y.props),x.ref=Gs(f,E,y),x.return=f,f=x;break e}n(f,E);break}else e(f,E);E=E.sibling}y.type===Qr?(x=wr(y.props.children,f.mode,M,y.key),x.return=f,f=x):(M=qo(y.type,y.key,y.props,null,f.mode,M),M.ref=Gs(f,x,y),M.return=f,f=M)}return a(f);case Zr:e:{for(E=y.key;x!==null;){if(x.key===E)if(x.tag===4&&x.stateNode.containerInfo===y.containerInfo&&x.stateNode.implementation===y.implementation){n(f,x.sibling),x=r(x,y.children||[]),x.return=f,f=x;break e}else{n(f,x);break}else e(f,x);x=x.sibling}x=Rc(y,f.mode,M),x.return=f,f=x}return a(f);case Ni:return E=y._init,m(f,x,E(y._payload),M)}if(ta(y))return _(f,x,y,M);if(Bs(y))return v(f,x,y,M);ao(f,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,x!==null&&x.tag===6?(n(f,x.sibling),x=r(x,y),x.return=f,f=x):(n(f,x),x=bc(y,f.mode,M),x.return=f,f=x),a(f)):n(f,x)}return m}var ws=Hg(!0),Vg=Hg(!1),gl=er(null),vl=null,as=null,mf=null;function gf(){mf=as=vl=null}function vf(t){var e=gl.current;dt(gl),t._currentValue=e}function Bu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ms(t,e){vl=t,mf=as=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(sn=!0),t.firstContext=null)}function Pn(t){var e=t._currentValue;if(mf!==t)if(t={context:t,memoizedValue:e,next:null},as===null){if(vl===null)throw Error(se(308));as=t,vl.dependencies={lanes:0,firstContext:t}}else as=as.next=t;return e}var xr=null;function _f(t){xr===null?xr=[t]:xr.push(t)}function Gg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,_f(e)):(n.next=r.next,r.next=n),e.interleaved=n,_i(t,i)}function _i(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Li=!1;function xf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function mi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Vi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,_i(t,n)}return r=i.interleaved,r===null?(e.next=e,_f(i)):(e.next=r.next,r.next=e),i.interleaved=e,_i(t,n)}function Vo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,rf(t,n)}}function Yh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function _l(t,e,n,i){var r=t.updateQueue;Li=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,u=l.next;l.next=null,a===null?s=u:a.next=u,a=l;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=u:o.next=u,h.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;a=0,h=u=l=null,o=s;do{var p=o.lane,g=o.eventTime;if((i&p)===p){h!==null&&(h=h.next={eventTime:g,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,v=o;switch(p=e,g=n,v.tag){case 1:if(_=v.payload,typeof _=="function"){d=_.call(g,d,p);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=v.payload,p=typeof _=="function"?_.call(g,d,p):_,p==null)break e;d=gt({},d,p);break e;case 2:Li=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,p=r.effects,p===null?r.effects=[o]:p.push(o))}else g={eventTime:g,lane:p,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(u=h=g,l=d):h=h.next=g,a|=p;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;p=o,o=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(!0);if(h===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);br|=a,t.lanes=a,t.memoizedState=d}}function qh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var ka={},Jn=er(ka),Ca=er(ka),ba=er(ka);function yr(t){if(t===ka)throw Error(se(174));return t}function yf(t,e){switch(ot(ba,e),ot(Ca,t),ot(Jn,ka),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:xu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=xu(e,t)}dt(Jn),ot(Jn,e)}function Ts(){dt(Jn),dt(Ca),dt(ba)}function Xg(t){yr(ba.current);var e=yr(Jn.current),n=xu(e,t.type);e!==n&&(ot(Ca,t),ot(Jn,n))}function Sf(t){Ca.current===t&&(dt(Jn),dt(Ca))}var pt=er(0);function xl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Mc=[];function Mf(){for(var t=0;t<Mc.length;t++)Mc[t]._workInProgressVersionPrimary=null;Mc.length=0}var Go=Si.ReactCurrentDispatcher,Ec=Si.ReactCurrentBatchConfig,Cr=0,mt=null,At=null,Dt=null,yl=!1,ua=!1,Ra=0,wx=0;function zt(){throw Error(se(321))}function Ef(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Wn(t[n],e[n]))return!1;return!0}function wf(t,e,n,i,r,s){if(Cr=s,mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Go.current=t===null||t.memoizedState===null?bx:Rx,t=n(i,r),ua){s=0;do{if(ua=!1,Ra=0,25<=s)throw Error(se(301));s+=1,Dt=At=null,e.updateQueue=null,Go.current=Px,t=n(i,r)}while(ua)}if(Go.current=Sl,e=At!==null&&At.next!==null,Cr=0,Dt=At=mt=null,yl=!1,e)throw Error(se(300));return t}function Tf(){var t=Ra!==0;return Ra=0,t}function $n(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?mt.memoizedState=Dt=t:Dt=Dt.next=t,Dt}function Nn(){if(At===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=At.next;var e=Dt===null?mt.memoizedState:Dt.next;if(e!==null)Dt=e,At=t;else{if(t===null)throw Error(se(310));At=t,t={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},Dt===null?mt.memoizedState=Dt=t:Dt=Dt.next=t}return Dt}function Pa(t,e){return typeof e=="function"?e(t):e}function wc(t){var e=Nn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=At,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,u=s;do{var h=u.lane;if((Cr&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=d,a=i):l=l.next=d,mt.lanes|=h,br|=h}u=u.next}while(u!==null&&u!==s);l===null?a=i:l.next=o,Wn(i,e.memoizedState)||(sn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,mt.lanes|=s,br|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Tc(t){var e=Nn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Wn(s,e.memoizedState)||(sn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function $g(){}function Yg(t,e){var n=mt,i=Nn(),r=e(),s=!Wn(i.memoizedState,r);if(s&&(i.memoizedState=r,sn=!0),i=i.queue,Af(Zg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Dt!==null&&Dt.memoizedState.tag&1){if(n.flags|=2048,Na(9,Kg.bind(null,n,i,r,e),void 0,null),It===null)throw Error(se(349));Cr&30||qg(n,e,r)}return r}function qg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Kg(t,e,n,i){e.value=n,e.getSnapshot=i,Qg(e)&&Jg(t)}function Zg(t,e,n){return n(function(){Qg(e)&&Jg(t)})}function Qg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Wn(t,n)}catch{return!0}}function Jg(t){var e=_i(t,1);e!==null&&Gn(e,t,1,-1)}function Kh(t){var e=$n();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:t},e.queue=t,t=t.dispatch=Cx.bind(null,mt,t),[e.memoizedState,t]}function Na(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function ev(){return Nn().memoizedState}function Wo(t,e,n,i){var r=$n();mt.flags|=t,r.memoizedState=Na(1|e,n,void 0,i===void 0?null:i)}function Hl(t,e,n,i){var r=Nn();i=i===void 0?null:i;var s=void 0;if(At!==null){var a=At.memoizedState;if(s=a.destroy,i!==null&&Ef(i,a.deps)){r.memoizedState=Na(e,n,s,i);return}}mt.flags|=t,r.memoizedState=Na(1|e,n,s,i)}function Zh(t,e){return Wo(8390656,8,t,e)}function Af(t,e){return Hl(2048,8,t,e)}function tv(t,e){return Hl(4,2,t,e)}function nv(t,e){return Hl(4,4,t,e)}function iv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function rv(t,e,n){return n=n!=null?n.concat([t]):null,Hl(4,4,iv.bind(null,e,t),n)}function Cf(){}function sv(t,e){var n=Nn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ef(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function av(t,e){var n=Nn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ef(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function ov(t,e,n){return Cr&21?(Wn(n,e)||(n=fg(),mt.lanes|=n,br|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,sn=!0),t.memoizedState=n)}function Tx(t,e){var n=at;at=n!==0&&4>n?n:4,t(!0);var i=Ec.transition;Ec.transition={};try{t(!1),e()}finally{at=n,Ec.transition=i}}function lv(){return Nn().memoizedState}function Ax(t,e,n){var i=Wi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},cv(t))uv(e,n);else if(n=Gg(t,e,n,i),n!==null){var r=Yt();Gn(n,t,i,r),dv(n,e,i)}}function Cx(t,e,n){var i=Wi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(cv(t))uv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Wn(o,a)){var l=e.interleaved;l===null?(r.next=r,_f(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Gg(t,e,r,i),n!==null&&(r=Yt(),Gn(n,t,i,r),dv(n,e,i))}}function cv(t){var e=t.alternate;return t===mt||e!==null&&e===mt}function uv(t,e){ua=yl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function dv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,rf(t,n)}}var Sl={readContext:Pn,useCallback:zt,useContext:zt,useEffect:zt,useImperativeHandle:zt,useInsertionEffect:zt,useLayoutEffect:zt,useMemo:zt,useReducer:zt,useRef:zt,useState:zt,useDebugValue:zt,useDeferredValue:zt,useTransition:zt,useMutableSource:zt,useSyncExternalStore:zt,useId:zt,unstable_isNewReconciler:!1},bx={readContext:Pn,useCallback:function(t,e){return $n().memoizedState=[t,e===void 0?null:e],t},useContext:Pn,useEffect:Zh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Wo(4194308,4,iv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Wo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Wo(4,2,t,e)},useMemo:function(t,e){var n=$n();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=$n();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Ax.bind(null,mt,t),[i.memoizedState,t]},useRef:function(t){var e=$n();return t={current:t},e.memoizedState=t},useState:Kh,useDebugValue:Cf,useDeferredValue:function(t){return $n().memoizedState=t},useTransition:function(){var t=Kh(!1),e=t[0];return t=Tx.bind(null,t[1]),$n().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=mt,r=$n();if(ft){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),It===null)throw Error(se(349));Cr&30||qg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Zh(Zg.bind(null,i,s,t),[t]),i.flags|=2048,Na(9,Kg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=$n(),e=It.identifierPrefix;if(ft){var n=di,i=ui;n=(i&~(1<<32-Vn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ra++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=wx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Rx={readContext:Pn,useCallback:sv,useContext:Pn,useEffect:Af,useImperativeHandle:rv,useInsertionEffect:tv,useLayoutEffect:nv,useMemo:av,useReducer:wc,useRef:ev,useState:function(){return wc(Pa)},useDebugValue:Cf,useDeferredValue:function(t){var e=Nn();return ov(e,At.memoizedState,t)},useTransition:function(){var t=wc(Pa)[0],e=Nn().memoizedState;return[t,e]},useMutableSource:$g,useSyncExternalStore:Yg,useId:lv,unstable_isNewReconciler:!1},Px={readContext:Pn,useCallback:sv,useContext:Pn,useEffect:Af,useImperativeHandle:rv,useInsertionEffect:tv,useLayoutEffect:nv,useMemo:av,useReducer:Tc,useRef:ev,useState:function(){return Tc(Pa)},useDebugValue:Cf,useDeferredValue:function(t){var e=Nn();return At===null?e.memoizedState=t:ov(e,At.memoizedState,t)},useTransition:function(){var t=Tc(Pa)[0],e=Nn().memoizedState;return[t,e]},useMutableSource:$g,useSyncExternalStore:Yg,useId:lv,unstable_isNewReconciler:!1};function On(t,e){if(t&&t.defaultProps){e=gt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function zu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:gt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Vl={isMounted:function(t){return(t=t._reactInternals)?Dr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Yt(),r=Wi(t),s=mi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Vi(t,s,r),e!==null&&(Gn(e,t,r,i),Vo(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Yt(),r=Wi(t),s=mi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Vi(t,s,r),e!==null&&(Gn(e,t,r,i),Vo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Yt(),i=Wi(t),r=mi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Vi(t,r,i),e!==null&&(Gn(e,t,i,n),Vo(e,t,i))}};function Qh(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Ea(n,i)||!Ea(r,s):!0}function fv(t,e,n){var i=!1,r=Ki,s=e.contextType;return typeof s=="object"&&s!==null?s=Pn(s):(r=on(e)?Tr:Wt.current,i=e.contextTypes,s=(i=i!=null)?Ms(t,r):Ki),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Vl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Jh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Vl.enqueueReplaceState(e,e.state,null)}function ju(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},xf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Pn(s):(s=on(e)?Tr:Wt.current,r.context=Ms(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(zu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Vl.enqueueReplaceState(r,r.state,null),_l(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function As(t,e){try{var n="",i=e;do n+=r0(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Ac(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Hu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Nx=typeof WeakMap=="function"?WeakMap:Map;function hv(t,e,n){n=mi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){El||(El=!0,Qu=i),Hu(t,e)},n}function pv(t,e,n){n=mi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Hu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Hu(t,e),typeof i!="function"&&(Gi===null?Gi=new Set([this]):Gi.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function ep(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Nx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Wx.bind(null,t,e,n),e.then(t,t))}function tp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function np(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=mi(-1,1),e.tag=2,Vi(n,e,1))),n.lanes|=1),t)}var Lx=Si.ReactCurrentOwner,sn=!1;function $t(t,e,n,i){e.child=t===null?Vg(e,null,n,i):ws(e,t.child,n,i)}function ip(t,e,n,i,r){n=n.render;var s=e.ref;return ms(e,r),i=wf(t,e,n,i,s,r),n=Tf(),t!==null&&!sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,xi(t,e,r)):(ft&&n&&ff(e),e.flags|=1,$t(t,e,i,r),e.child)}function rp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Uf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,mv(t,e,s,i,r)):(t=qo(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ea,n(a,i)&&t.ref===e.ref)return xi(t,e,r)}return e.flags|=1,t=Xi(s,i),t.ref=e.ref,t.return=e,e.child=t}function mv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ea(s,i)&&t.ref===e.ref)if(sn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(sn=!0);else return e.lanes=t.lanes,xi(t,e,r)}return Vu(t,e,n,i,r)}function gv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ot(ls,mn),mn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ot(ls,mn),mn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ot(ls,mn),mn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ot(ls,mn),mn|=i;return $t(t,e,r,n),e.child}function vv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Vu(t,e,n,i,r){var s=on(n)?Tr:Wt.current;return s=Ms(e,s),ms(e,r),n=wf(t,e,n,i,s,r),i=Tf(),t!==null&&!sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,xi(t,e,r)):(ft&&i&&ff(e),e.flags|=1,$t(t,e,n,r),e.child)}function sp(t,e,n,i,r){if(on(n)){var s=!0;hl(e)}else s=!1;if(ms(e,r),e.stateNode===null)Xo(t,e),fv(e,n,i),ju(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Pn(u):(u=on(n)?Tr:Wt.current,u=Ms(e,u));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==u)&&Jh(e,a,i,u),Li=!1;var p=e.memoizedState;a.state=p,_l(e,i,a,r),l=e.memoizedState,o!==i||p!==l||an.current||Li?(typeof h=="function"&&(zu(e,n,h,i),l=e.memoizedState),(o=Li||Qh(e,n,o,i,p,l,u))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Wg(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:On(e.type,o),a.props=u,d=e.pendingProps,p=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Pn(l):(l=on(n)?Tr:Wt.current,l=Ms(e,l));var g=n.getDerivedStateFromProps;(h=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==d||p!==l)&&Jh(e,a,i,l),Li=!1,p=e.memoizedState,a.state=p,_l(e,i,a,r);var _=e.memoizedState;o!==d||p!==_||an.current||Li?(typeof g=="function"&&(zu(e,n,g,i),_=e.memoizedState),(u=Li||Qh(e,n,u,i,p,_,l)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),i=!1)}return Gu(t,e,n,i,s,r)}function Gu(t,e,n,i,r,s){vv(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Gh(e,n,!1),xi(t,e,s);i=e.stateNode,Lx.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=ws(e,t.child,null,s),e.child=ws(e,null,o,s)):$t(t,e,o,s),e.memoizedState=i.state,r&&Gh(e,n,!0),e.child}function _v(t){var e=t.stateNode;e.pendingContext?Vh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Vh(t,e.context,!1),yf(t,e.containerInfo)}function ap(t,e,n,i,r){return Es(),pf(r),e.flags|=256,$t(t,e,n,i),e.child}var Wu={dehydrated:null,treeContext:null,retryLane:0};function Xu(t){return{baseLanes:t,cachePool:null,transitions:null}}function xv(t,e,n){var i=e.pendingProps,r=pt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ot(pt,r&1),t===null)return ku(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Xl(a,i,0,null),t=wr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Xu(n),e.memoizedState=Wu,t):bf(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return Dx(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Xi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Xi(o,s):(s=wr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Xu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Wu,i}return s=t.child,t=s.sibling,i=Xi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function bf(t,e){return e=Xl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function oo(t,e,n,i){return i!==null&&pf(i),ws(e,t.child,null,n),t=bf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Dx(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Ac(Error(se(422))),oo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Xl({mode:"visible",children:i.children},r,0,null),s=wr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ws(e,t.child,null,a),e.child.memoizedState=Xu(a),e.memoizedState=Wu,s);if(!(e.mode&1))return oo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(se(419)),i=Ac(s,i,void 0),oo(t,e,a,i)}if(o=(a&t.childLanes)!==0,sn||o){if(i=It,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,_i(t,r),Gn(i,t,r,-1))}return If(),i=Ac(Error(se(421))),oo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Xx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,gn=Hi(r.nextSibling),vn=e,ft=!0,Bn=null,t!==null&&(wn[Tn++]=ui,wn[Tn++]=di,wn[Tn++]=Ar,ui=t.id,di=t.overflow,Ar=e),e=bf(e,i.children),e.flags|=4096,e)}function op(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Bu(t.return,e,n)}function Cc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function yv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if($t(t,e,i.children,n),i=pt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&op(t,n,e);else if(t.tag===19)op(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ot(pt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&xl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Cc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&xl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Cc(e,!0,n,null,s);break;case"together":Cc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Xo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function xi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),br|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=Xi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Xi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Ix(t,e,n){switch(e.tag){case 3:_v(e),Es();break;case 5:Xg(e);break;case 1:on(e.type)&&hl(e);break;case 4:yf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ot(gl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ot(pt,pt.current&1),e.flags|=128,null):n&e.child.childLanes?xv(t,e,n):(ot(pt,pt.current&1),t=xi(t,e,n),t!==null?t.sibling:null);ot(pt,pt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return yv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ot(pt,pt.current),i)break;return null;case 22:case 23:return e.lanes=0,gv(t,e,n)}return xi(t,e,n)}var Sv,$u,Mv,Ev;Sv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$u=function(){};Mv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,yr(Jn.current);var s=null;switch(n){case"input":r=mu(t,r),i=mu(t,i),s=[];break;case"select":r=gt({},r,{value:void 0}),i=gt({},i,{value:void 0}),s=[];break;case"textarea":r=_u(t,r),i=_u(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=dl)}yu(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ga.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ga.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ct("scroll",t),s||o===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Ev=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ws(t,e){if(!ft)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Ux(t,e,n){var i=e.pendingProps;switch(hf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(e),null;case 1:return on(e.type)&&fl(),jt(e),null;case 3:return i=e.stateNode,Ts(),dt(an),dt(Wt),Mf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(so(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Bn!==null&&(td(Bn),Bn=null))),$u(t,e),jt(e),null;case 5:Sf(e);var r=yr(ba.current);if(n=e.type,t!==null&&e.stateNode!=null)Mv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return jt(e),null}if(t=yr(Jn.current),so(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Kn]=e,i[Aa]=s,t=(e.mode&1)!==0,n){case"dialog":ct("cancel",i),ct("close",i);break;case"iframe":case"object":case"embed":ct("load",i);break;case"video":case"audio":for(r=0;r<ia.length;r++)ct(ia[r],i);break;case"source":ct("error",i);break;case"img":case"image":case"link":ct("error",i),ct("load",i);break;case"details":ct("toggle",i);break;case"input":gh(i,s),ct("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ct("invalid",i);break;case"textarea":_h(i,s),ct("invalid",i)}yu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&ro(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&ro(i.textContent,o,t),r=["children",""+o]):ga.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&ct("scroll",i)}switch(n){case"input":Ka(i),vh(i,s,!0);break;case"textarea":Ka(i),xh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=dl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Zm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Kn]=e,t[Aa]=i,Sv(t,e,!1,!1),e.stateNode=t;e:{switch(a=Su(n,i),n){case"dialog":ct("cancel",t),ct("close",t),r=i;break;case"iframe":case"object":case"embed":ct("load",t),r=i;break;case"video":case"audio":for(r=0;r<ia.length;r++)ct(ia[r],t);r=i;break;case"source":ct("error",t),r=i;break;case"img":case"image":case"link":ct("error",t),ct("load",t),r=i;break;case"details":ct("toggle",t),r=i;break;case"input":gh(t,i),r=mu(t,i),ct("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=gt({},i,{value:void 0}),ct("invalid",t);break;case"textarea":_h(t,i),r=_u(t,i),ct("invalid",t);break;default:r=i}yu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?eg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Qm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&va(t,l):typeof l=="number"&&va(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ga.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ct("scroll",t):l!=null&&Zd(t,s,l,a))}switch(n){case"input":Ka(t),vh(t,i,!1);break;case"textarea":Ka(t),xh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+qi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ds(t,!!i.multiple,s,!1):i.defaultValue!=null&&ds(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=dl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return jt(e),null;case 6:if(t&&e.stateNode!=null)Ev(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=yr(ba.current),yr(Jn.current),so(e)){if(i=e.stateNode,n=e.memoizedProps,i[Kn]=e,(s=i.nodeValue!==n)&&(t=vn,t!==null))switch(t.tag){case 3:ro(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ro(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Kn]=e,e.stateNode=i}return jt(e),null;case 13:if(dt(pt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ft&&gn!==null&&e.mode&1&&!(e.flags&128))jg(),Es(),e.flags|=98560,s=!1;else if(s=so(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[Kn]=e}else Es(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;jt(e),s=!1}else Bn!==null&&(td(Bn),Bn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||pt.current&1?bt===0&&(bt=3):If())),e.updateQueue!==null&&(e.flags|=4),jt(e),null);case 4:return Ts(),$u(t,e),t===null&&wa(e.stateNode.containerInfo),jt(e),null;case 10:return vf(e.type._context),jt(e),null;case 17:return on(e.type)&&fl(),jt(e),null;case 19:if(dt(pt),s=e.memoizedState,s===null)return jt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Ws(s,!1);else{if(bt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=xl(t),a!==null){for(e.flags|=128,Ws(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ot(pt,pt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Mt()>Cs&&(e.flags|=128,i=!0,Ws(s,!1),e.lanes=4194304)}else{if(!i)if(t=xl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ws(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ft)return jt(e),null}else 2*Mt()-s.renderingStartTime>Cs&&n!==1073741824&&(e.flags|=128,i=!0,Ws(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Mt(),e.sibling=null,n=pt.current,ot(pt,i?n&1|2:n&1),e):(jt(e),null);case 22:case 23:return Df(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?mn&1073741824&&(jt(e),e.subtreeFlags&6&&(e.flags|=8192)):jt(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function Fx(t,e){switch(hf(e),e.tag){case 1:return on(e.type)&&fl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ts(),dt(an),dt(Wt),Mf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Sf(e),null;case 13:if(dt(pt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));Es()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return dt(pt),null;case 4:return Ts(),null;case 10:return vf(e.type._context),null;case 22:case 23:return Df(),null;case 24:return null;default:return null}}var lo=!1,Gt=!1,Ox=typeof WeakSet=="function"?WeakSet:Set,Me=null;function os(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){_t(t,e,i)}else n.current=null}function Yu(t,e,n){try{n()}catch(i){_t(t,e,i)}}var lp=!1;function kx(t,e){if(Nu=ll,t=bg(),df(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,u=0,h=0,d=t,p=null;t:for(;;){for(var g;d!==n||r!==0&&d.nodeType!==3||(o=a+r),d!==s||i!==0&&d.nodeType!==3||(l=a+i),d.nodeType===3&&(a+=d.nodeValue.length),(g=d.firstChild)!==null;)p=d,d=g;for(;;){if(d===t)break t;if(p===n&&++u===r&&(o=a),p===s&&++h===i&&(l=a),(g=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=g}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Lu={focusedElem:t,selectionRange:n},ll=!1,Me=e;Me!==null;)if(e=Me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Me=t;else for(;Me!==null;){e=Me;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var v=_.memoizedProps,m=_.memoizedState,f=e.stateNode,x=f.getSnapshotBeforeUpdate(e.elementType===e.type?v:On(e.type,v),m);f.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(M){_t(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,Me=t;break}Me=e.return}return _=lp,lp=!1,_}function da(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Yu(e,n,s)}r=r.next}while(r!==i)}}function Gl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function qu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function wv(t){var e=t.alternate;e!==null&&(t.alternate=null,wv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Kn],delete e[Aa],delete e[Uu],delete e[yx],delete e[Sx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Tv(t){return t.tag===5||t.tag===3||t.tag===4}function cp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Tv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ku(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=dl));else if(i!==4&&(t=t.child,t!==null))for(Ku(t,e,n),t=t.sibling;t!==null;)Ku(t,e,n),t=t.sibling}function Zu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Zu(t,e,n),t=t.sibling;t!==null;)Zu(t,e,n),t=t.sibling}var Ft=null,kn=!1;function Ei(t,e,n){for(n=n.child;n!==null;)Av(t,e,n),n=n.sibling}function Av(t,e,n){if(Qn&&typeof Qn.onCommitFiberUnmount=="function")try{Qn.onCommitFiberUnmount(Fl,n)}catch{}switch(n.tag){case 5:Gt||os(n,e);case 6:var i=Ft,r=kn;Ft=null,Ei(t,e,n),Ft=i,kn=r,Ft!==null&&(kn?(t=Ft,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ft.removeChild(n.stateNode));break;case 18:Ft!==null&&(kn?(t=Ft,n=n.stateNode,t.nodeType===8?yc(t.parentNode,n):t.nodeType===1&&yc(t,n),Sa(t)):yc(Ft,n.stateNode));break;case 4:i=Ft,r=kn,Ft=n.stateNode.containerInfo,kn=!0,Ei(t,e,n),Ft=i,kn=r;break;case 0:case 11:case 14:case 15:if(!Gt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Yu(n,e,a),r=r.next}while(r!==i)}Ei(t,e,n);break;case 1:if(!Gt&&(os(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){_t(n,e,o)}Ei(t,e,n);break;case 21:Ei(t,e,n);break;case 22:n.mode&1?(Gt=(i=Gt)||n.memoizedState!==null,Ei(t,e,n),Gt=i):Ei(t,e,n);break;default:Ei(t,e,n)}}function up(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Ox),e.forEach(function(i){var r=$x.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Dn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Ft=o.stateNode,kn=!1;break e;case 3:Ft=o.stateNode.containerInfo,kn=!0;break e;case 4:Ft=o.stateNode.containerInfo,kn=!0;break e}o=o.return}if(Ft===null)throw Error(se(160));Av(s,a,r),Ft=null,kn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){_t(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Cv(e,t),e=e.sibling}function Cv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Dn(e,t),Xn(t),i&4){try{da(3,t,t.return),Gl(3,t)}catch(v){_t(t,t.return,v)}try{da(5,t,t.return)}catch(v){_t(t,t.return,v)}}break;case 1:Dn(e,t),Xn(t),i&512&&n!==null&&os(n,n.return);break;case 5:if(Dn(e,t),Xn(t),i&512&&n!==null&&os(n,n.return),t.flags&32){var r=t.stateNode;try{va(r,"")}catch(v){_t(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&qm(r,s),Su(o,a);var u=Su(o,s);for(a=0;a<l.length;a+=2){var h=l[a],d=l[a+1];h==="style"?eg(r,d):h==="dangerouslySetInnerHTML"?Qm(r,d):h==="children"?va(r,d):Zd(r,h,d,u)}switch(o){case"input":gu(r,s);break;case"textarea":Km(r,s);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?ds(r,!!s.multiple,g,!1):p!==!!s.multiple&&(s.defaultValue!=null?ds(r,!!s.multiple,s.defaultValue,!0):ds(r,!!s.multiple,s.multiple?[]:"",!1))}r[Aa]=s}catch(v){_t(t,t.return,v)}}break;case 6:if(Dn(e,t),Xn(t),i&4){if(t.stateNode===null)throw Error(se(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(v){_t(t,t.return,v)}}break;case 3:if(Dn(e,t),Xn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Sa(e.containerInfo)}catch(v){_t(t,t.return,v)}break;case 4:Dn(e,t),Xn(t);break;case 13:Dn(e,t),Xn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Nf=Mt())),i&4&&up(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Gt=(u=Gt)||h,Dn(e,t),Gt=u):Dn(e,t),Xn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(Me=t,h=t.child;h!==null;){for(d=Me=h;Me!==null;){switch(p=Me,g=p.child,p.tag){case 0:case 11:case 14:case 15:da(4,p,p.return);break;case 1:os(p,p.return);var _=p.stateNode;if(typeof _.componentWillUnmount=="function"){i=p,n=p.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(v){_t(i,n,v)}}break;case 5:os(p,p.return);break;case 22:if(p.memoizedState!==null){fp(d);continue}}g!==null?(g.return=p,Me=g):fp(d)}h=h.sibling}e:for(h=null,d=t;;){if(d.tag===5){if(h===null){h=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=d.stateNode,l=d.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Jm("display",a))}catch(v){_t(t,t.return,v)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){_t(t,t.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Dn(e,t),Xn(t),i&4&&up(t);break;case 21:break;default:Dn(e,t),Xn(t)}}function Xn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Tv(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(va(r,""),i.flags&=-33);var s=cp(t);Zu(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=cp(t);Ku(t,o,a);break;default:throw Error(se(161))}}catch(l){_t(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Bx(t,e,n){Me=t,bv(t)}function bv(t,e,n){for(var i=(t.mode&1)!==0;Me!==null;){var r=Me,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||lo;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Gt;o=lo;var u=Gt;if(lo=a,(Gt=l)&&!u)for(Me=r;Me!==null;)a=Me,l=a.child,a.tag===22&&a.memoizedState!==null?hp(r):l!==null?(l.return=a,Me=l):hp(r);for(;s!==null;)Me=s,bv(s),s=s.sibling;Me=r,lo=o,Gt=u}dp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Me=s):dp(t)}}function dp(t){for(;Me!==null;){var e=Me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Gt||Gl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Gt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:On(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&qh(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}qh(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&Sa(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}Gt||e.flags&512&&qu(e)}catch(p){_t(e,e.return,p)}}if(e===t){Me=null;break}if(n=e.sibling,n!==null){n.return=e.return,Me=n;break}Me=e.return}}function fp(t){for(;Me!==null;){var e=Me;if(e===t){Me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Me=n;break}Me=e.return}}function hp(t){for(;Me!==null;){var e=Me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Gl(4,e)}catch(l){_t(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){_t(e,r,l)}}var s=e.return;try{qu(e)}catch(l){_t(e,s,l)}break;case 5:var a=e.return;try{qu(e)}catch(l){_t(e,a,l)}}}catch(l){_t(e,e.return,l)}if(e===t){Me=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Me=o;break}Me=e.return}}var zx=Math.ceil,Ml=Si.ReactCurrentDispatcher,Rf=Si.ReactCurrentOwner,Rn=Si.ReactCurrentBatchConfig,Qe=0,It=null,Tt=null,Ot=0,mn=0,ls=er(0),bt=0,La=null,br=0,Wl=0,Pf=0,fa=null,nn=null,Nf=0,Cs=1/0,li=null,El=!1,Qu=null,Gi=null,co=!1,Oi=null,wl=0,ha=0,Ju=null,$o=-1,Yo=0;function Yt(){return Qe&6?Mt():$o!==-1?$o:$o=Mt()}function Wi(t){return t.mode&1?Qe&2&&Ot!==0?Ot&-Ot:Ex.transition!==null?(Yo===0&&(Yo=fg()),Yo):(t=at,t!==0||(t=window.event,t=t===void 0?16:xg(t.type)),t):1}function Gn(t,e,n,i){if(50<ha)throw ha=0,Ju=null,Error(se(185));Ua(t,n,i),(!(Qe&2)||t!==It)&&(t===It&&(!(Qe&2)&&(Wl|=n),bt===4&&Ii(t,Ot)),ln(t,i),n===1&&Qe===0&&!(e.mode&1)&&(Cs=Mt()+500,jl&&tr()))}function ln(t,e){var n=t.callbackNode;E0(t,e);var i=ol(t,t===It?Ot:0);if(i===0)n!==null&&Mh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Mh(n),e===1)t.tag===0?Mx(pp.bind(null,t)):kg(pp.bind(null,t)),_x(function(){!(Qe&6)&&tr()}),n=null;else{switch(hg(i)){case 1:n=nf;break;case 4:n=ug;break;case 16:n=al;break;case 536870912:n=dg;break;default:n=al}n=Fv(n,Rv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Rv(t,e){if($o=-1,Yo=0,Qe&6)throw Error(se(327));var n=t.callbackNode;if(gs()&&t.callbackNode!==n)return null;var i=ol(t,t===It?Ot:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Tl(t,i);else{e=i;var r=Qe;Qe|=2;var s=Nv();(It!==t||Ot!==e)&&(li=null,Cs=Mt()+500,Er(t,e));do try{Vx();break}catch(o){Pv(t,o)}while(!0);gf(),Ml.current=s,Qe=r,Tt!==null?e=0:(It=null,Ot=0,e=bt)}if(e!==0){if(e===2&&(r=Au(t),r!==0&&(i=r,e=ed(t,r))),e===1)throw n=La,Er(t,0),Ii(t,i),ln(t,Mt()),n;if(e===6)Ii(t,i);else{if(r=t.current.alternate,!(i&30)&&!jx(r)&&(e=Tl(t,i),e===2&&(s=Au(t),s!==0&&(i=s,e=ed(t,s))),e===1))throw n=La,Er(t,0),Ii(t,i),ln(t,Mt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:fr(t,nn,li);break;case 3:if(Ii(t,i),(i&130023424)===i&&(e=Nf+500-Mt(),10<e)){if(ol(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Yt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Iu(fr.bind(null,t,nn,li),e);break}fr(t,nn,li);break;case 4:if(Ii(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Vn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Mt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*zx(i/1960))-i,10<i){t.timeoutHandle=Iu(fr.bind(null,t,nn,li),i);break}fr(t,nn,li);break;case 5:fr(t,nn,li);break;default:throw Error(se(329))}}}return ln(t,Mt()),t.callbackNode===n?Rv.bind(null,t):null}function ed(t,e){var n=fa;return t.current.memoizedState.isDehydrated&&(Er(t,e).flags|=256),t=Tl(t,e),t!==2&&(e=nn,nn=n,e!==null&&td(e)),t}function td(t){nn===null?nn=t:nn.push.apply(nn,t)}function jx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Wn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ii(t,e){for(e&=~Pf,e&=~Wl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Vn(e),i=1<<n;t[n]=-1,e&=~i}}function pp(t){if(Qe&6)throw Error(se(327));gs();var e=ol(t,0);if(!(e&1))return ln(t,Mt()),null;var n=Tl(t,e);if(t.tag!==0&&n===2){var i=Au(t);i!==0&&(e=i,n=ed(t,i))}if(n===1)throw n=La,Er(t,0),Ii(t,e),ln(t,Mt()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,fr(t,nn,li),ln(t,Mt()),null}function Lf(t,e){var n=Qe;Qe|=1;try{return t(e)}finally{Qe=n,Qe===0&&(Cs=Mt()+500,jl&&tr())}}function Rr(t){Oi!==null&&Oi.tag===0&&!(Qe&6)&&gs();var e=Qe;Qe|=1;var n=Rn.transition,i=at;try{if(Rn.transition=null,at=1,t)return t()}finally{at=i,Rn.transition=n,Qe=e,!(Qe&6)&&tr()}}function Df(){mn=ls.current,dt(ls)}function Er(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,vx(n)),Tt!==null)for(n=Tt.return;n!==null;){var i=n;switch(hf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&fl();break;case 3:Ts(),dt(an),dt(Wt),Mf();break;case 5:Sf(i);break;case 4:Ts();break;case 13:dt(pt);break;case 19:dt(pt);break;case 10:vf(i.type._context);break;case 22:case 23:Df()}n=n.return}if(It=t,Tt=t=Xi(t.current,null),Ot=mn=e,bt=0,La=null,Pf=Wl=br=0,nn=fa=null,xr!==null){for(e=0;e<xr.length;e++)if(n=xr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}xr=null}return t}function Pv(t,e){do{var n=Tt;try{if(gf(),Go.current=Sl,yl){for(var i=mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}yl=!1}if(Cr=0,Dt=At=mt=null,ua=!1,Ra=0,Rf.current=null,n===null||n.return===null){bt=1,La=e,Tt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Ot,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=o,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=tp(a);if(g!==null){g.flags&=-257,np(g,a,o,s,e),g.mode&1&&ep(s,u,e),e=g,l=u;var _=e.updateQueue;if(_===null){var v=new Set;v.add(l),e.updateQueue=v}else _.add(l);break e}else{if(!(e&1)){ep(s,u,e),If();break e}l=Error(se(426))}}else if(ft&&o.mode&1){var m=tp(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),np(m,a,o,s,e),pf(As(l,o));break e}}s=l=As(l,o),bt!==4&&(bt=2),fa===null?fa=[s]:fa.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=hv(s,l,e);Yh(s,f);break e;case 1:o=l;var x=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Gi===null||!Gi.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=pv(s,o,e);Yh(s,M);break e}}s=s.return}while(s!==null)}Dv(n)}catch(L){e=L,Tt===n&&n!==null&&(Tt=n=n.return);continue}break}while(!0)}function Nv(){var t=Ml.current;return Ml.current=Sl,t===null?Sl:t}function If(){(bt===0||bt===3||bt===2)&&(bt=4),It===null||!(br&268435455)&&!(Wl&268435455)||Ii(It,Ot)}function Tl(t,e){var n=Qe;Qe|=2;var i=Nv();(It!==t||Ot!==e)&&(li=null,Er(t,e));do try{Hx();break}catch(r){Pv(t,r)}while(!0);if(gf(),Qe=n,Ml.current=i,Tt!==null)throw Error(se(261));return It=null,Ot=0,bt}function Hx(){for(;Tt!==null;)Lv(Tt)}function Vx(){for(;Tt!==null&&!p0();)Lv(Tt)}function Lv(t){var e=Uv(t.alternate,t,mn);t.memoizedProps=t.pendingProps,e===null?Dv(t):Tt=e,Rf.current=null}function Dv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Fx(n,e),n!==null){n.flags&=32767,Tt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{bt=6,Tt=null;return}}else if(n=Ux(n,e,mn),n!==null){Tt=n;return}if(e=e.sibling,e!==null){Tt=e;return}Tt=e=t}while(e!==null);bt===0&&(bt=5)}function fr(t,e,n){var i=at,r=Rn.transition;try{Rn.transition=null,at=1,Gx(t,e,n,i)}finally{Rn.transition=r,at=i}return null}function Gx(t,e,n,i){do gs();while(Oi!==null);if(Qe&6)throw Error(se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(w0(t,s),t===It&&(Tt=It=null,Ot=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||co||(co=!0,Fv(al,function(){return gs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Rn.transition,Rn.transition=null;var a=at;at=1;var o=Qe;Qe|=4,Rf.current=null,kx(t,n),Cv(n,t),ux(Lu),ll=!!Nu,Lu=Nu=null,t.current=n,Bx(n),m0(),Qe=o,at=a,Rn.transition=s}else t.current=n;if(co&&(co=!1,Oi=t,wl=r),s=t.pendingLanes,s===0&&(Gi=null),_0(n.stateNode),ln(t,Mt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(El)throw El=!1,t=Qu,Qu=null,t;return wl&1&&t.tag!==0&&gs(),s=t.pendingLanes,s&1?t===Ju?ha++:(ha=0,Ju=t):ha=0,tr(),null}function gs(){if(Oi!==null){var t=hg(wl),e=Rn.transition,n=at;try{if(Rn.transition=null,at=16>t?16:t,Oi===null)var i=!1;else{if(t=Oi,Oi=null,wl=0,Qe&6)throw Error(se(331));var r=Qe;for(Qe|=4,Me=t.current;Me!==null;){var s=Me,a=s.child;if(Me.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(Me=u;Me!==null;){var h=Me;switch(h.tag){case 0:case 11:case 15:da(8,h,s)}var d=h.child;if(d!==null)d.return=h,Me=d;else for(;Me!==null;){h=Me;var p=h.sibling,g=h.return;if(wv(h),h===u){Me=null;break}if(p!==null){p.return=g,Me=p;break}Me=g}}}var _=s.alternate;if(_!==null){var v=_.child;if(v!==null){_.child=null;do{var m=v.sibling;v.sibling=null,v=m}while(v!==null)}}Me=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Me=a;else e:for(;Me!==null;){if(s=Me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:da(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,Me=f;break e}Me=s.return}}var x=t.current;for(Me=x;Me!==null;){a=Me;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,Me=y;else e:for(a=x;Me!==null;){if(o=Me,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Gl(9,o)}}catch(L){_t(o,o.return,L)}if(o===a){Me=null;break e}var M=o.sibling;if(M!==null){M.return=o.return,Me=M;break e}Me=o.return}}if(Qe=r,tr(),Qn&&typeof Qn.onPostCommitFiberRoot=="function")try{Qn.onPostCommitFiberRoot(Fl,t)}catch{}i=!0}return i}finally{at=n,Rn.transition=e}}return!1}function mp(t,e,n){e=As(n,e),e=hv(t,e,1),t=Vi(t,e,1),e=Yt(),t!==null&&(Ua(t,1,e),ln(t,e))}function _t(t,e,n){if(t.tag===3)mp(t,t,n);else for(;e!==null;){if(e.tag===3){mp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Gi===null||!Gi.has(i))){t=As(n,t),t=pv(e,t,1),e=Vi(e,t,1),t=Yt(),e!==null&&(Ua(e,1,t),ln(e,t));break}}e=e.return}}function Wx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Yt(),t.pingedLanes|=t.suspendedLanes&n,It===t&&(Ot&n)===n&&(bt===4||bt===3&&(Ot&130023424)===Ot&&500>Mt()-Nf?Er(t,0):Pf|=n),ln(t,e)}function Iv(t,e){e===0&&(t.mode&1?(e=Ja,Ja<<=1,!(Ja&130023424)&&(Ja=4194304)):e=1);var n=Yt();t=_i(t,e),t!==null&&(Ua(t,e,n),ln(t,n))}function Xx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Iv(t,n)}function $x(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),Iv(t,n)}var Uv;Uv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||an.current)sn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return sn=!1,Ix(t,e,n);sn=!!(t.flags&131072)}else sn=!1,ft&&e.flags&1048576&&Bg(e,ml,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Xo(t,e),t=e.pendingProps;var r=Ms(e,Wt.current);ms(e,n),r=wf(null,e,i,t,r,n);var s=Tf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,on(i)?(s=!0,hl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,xf(e),r.updater=Vl,e.stateNode=r,r._reactInternals=e,ju(e,i,t,n),e=Gu(null,e,i,!0,s,n)):(e.tag=0,ft&&s&&ff(e),$t(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Xo(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=qx(i),t=On(i,t),r){case 0:e=Vu(null,e,i,t,n);break e;case 1:e=sp(null,e,i,t,n);break e;case 11:e=ip(null,e,i,t,n);break e;case 14:e=rp(null,e,i,On(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),Vu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),sp(t,e,i,r,n);case 3:e:{if(_v(e),t===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Wg(t,e),_l(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=As(Error(se(423)),e),e=ap(t,e,i,n,r);break e}else if(i!==r){r=As(Error(se(424)),e),e=ap(t,e,i,n,r);break e}else for(gn=Hi(e.stateNode.containerInfo.firstChild),vn=e,ft=!0,Bn=null,n=Vg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Es(),i===r){e=xi(t,e,n);break e}$t(t,e,i,n)}e=e.child}return e;case 5:return Xg(e),t===null&&ku(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Du(i,r)?a=null:s!==null&&Du(i,s)&&(e.flags|=32),vv(t,e),$t(t,e,a,n),e.child;case 6:return t===null&&ku(e),null;case 13:return xv(t,e,n);case 4:return yf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ws(e,null,i,n):$t(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),ip(t,e,i,r,n);case 7:return $t(t,e,e.pendingProps,n),e.child;case 8:return $t(t,e,e.pendingProps.children,n),e.child;case 12:return $t(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,ot(gl,i._currentValue),i._currentValue=a,s!==null)if(Wn(s.value,a)){if(s.children===r.children&&!an.current){e=xi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=mi(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Bu(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(se(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Bu(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}$t(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ms(e,n),r=Pn(r),i=i(r),e.flags|=1,$t(t,e,i,n),e.child;case 14:return i=e.type,r=On(i,e.pendingProps),r=On(i.type,r),rp(t,e,i,r,n);case 15:return mv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),Xo(t,e),e.tag=1,on(i)?(t=!0,hl(e)):t=!1,ms(e,n),fv(e,i,r),ju(e,i,r,n),Gu(null,e,i,!0,t,n);case 19:return yv(t,e,n);case 22:return gv(t,e,n)}throw Error(se(156,e.tag))};function Fv(t,e){return cg(t,e)}function Yx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Cn(t,e,n,i){return new Yx(t,e,n,i)}function Uf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qx(t){if(typeof t=="function")return Uf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Jd)return 11;if(t===ef)return 14}return 2}function Xi(t,e){var n=t.alternate;return n===null?(n=Cn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function qo(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Uf(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Qr:return wr(n.children,r,s,e);case Qd:a=8,r|=8;break;case du:return t=Cn(12,n,e,r|2),t.elementType=du,t.lanes=s,t;case fu:return t=Cn(13,n,e,r),t.elementType=fu,t.lanes=s,t;case hu:return t=Cn(19,n,e,r),t.elementType=hu,t.lanes=s,t;case Xm:return Xl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Gm:a=10;break e;case Wm:a=9;break e;case Jd:a=11;break e;case ef:a=14;break e;case Ni:a=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=Cn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function wr(t,e,n,i){return t=Cn(7,t,i,e),t.lanes=n,t}function Xl(t,e,n,i){return t=Cn(22,t,i,e),t.elementType=Xm,t.lanes=n,t.stateNode={isHidden:!1},t}function bc(t,e,n){return t=Cn(6,t,null,e),t.lanes=n,t}function Rc(t,e,n){return e=Cn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Kx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cc(0),this.expirationTimes=cc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ff(t,e,n,i,r,s,a,o,l){return t=new Kx(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Cn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xf(s),t}function Zx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Ov(t){if(!t)return Ki;t=t._reactInternals;e:{if(Dr(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(on(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(on(n))return Og(t,n,e)}return e}function kv(t,e,n,i,r,s,a,o,l){return t=Ff(n,i,!0,t,r,s,a,o,l),t.context=Ov(null),n=t.current,i=Yt(),r=Wi(n),s=mi(i,r),s.callback=e??null,Vi(n,s,r),t.current.lanes=r,Ua(t,r,i),ln(t,i),t}function $l(t,e,n,i){var r=e.current,s=Yt(),a=Wi(r);return n=Ov(n),e.context===null?e.context=n:e.pendingContext=n,e=mi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Vi(r,e,a),t!==null&&(Gn(t,r,a,s),Vo(t,r,a)),a}function Al(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function gp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Of(t,e){gp(t,e),(t=t.alternate)&&gp(t,e)}function Qx(){return null}var Bv=typeof reportError=="function"?reportError:function(t){console.error(t)};function kf(t){this._internalRoot=t}Yl.prototype.render=kf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));$l(t,e,null,null)};Yl.prototype.unmount=kf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Rr(function(){$l(null,t,null,null)}),e[vi]=null}};function Yl(t){this._internalRoot=t}Yl.prototype.unstable_scheduleHydration=function(t){if(t){var e=gg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Di.length&&e!==0&&e<Di[n].priority;n++);Di.splice(n,0,t),n===0&&_g(t)}};function Bf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ql(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function vp(){}function Jx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Al(a);s.call(u)}}var a=kv(e,i,t,0,null,!1,!1,"",vp);return t._reactRootContainer=a,t[vi]=a.current,wa(t.nodeType===8?t.parentNode:t),Rr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=Al(l);o.call(u)}}var l=Ff(t,0,!1,null,null,!1,!1,"",vp);return t._reactRootContainer=l,t[vi]=l.current,wa(t.nodeType===8?t.parentNode:t),Rr(function(){$l(e,l,n,i)}),l}function Kl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Al(a);o.call(l)}}$l(e,a,t,r)}else a=Jx(n,e,t,r,i);return Al(a)}pg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=na(e.pendingLanes);n!==0&&(rf(e,n|1),ln(e,Mt()),!(Qe&6)&&(Cs=Mt()+500,tr()))}break;case 13:Rr(function(){var i=_i(t,1);if(i!==null){var r=Yt();Gn(i,t,1,r)}}),Of(t,1)}};sf=function(t){if(t.tag===13){var e=_i(t,134217728);if(e!==null){var n=Yt();Gn(e,t,134217728,n)}Of(t,134217728)}};mg=function(t){if(t.tag===13){var e=Wi(t),n=_i(t,e);if(n!==null){var i=Yt();Gn(n,t,e,i)}Of(t,e)}};gg=function(){return at};vg=function(t,e){var n=at;try{return at=t,e()}finally{at=n}};Eu=function(t,e,n){switch(e){case"input":if(gu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=zl(i);if(!r)throw Error(se(90));Ym(i),gu(i,r)}}}break;case"textarea":Km(t,n);break;case"select":e=n.value,e!=null&&ds(t,!!n.multiple,e,!1)}};ig=Lf;rg=Rr;var ey={usingClientEntryPoint:!1,Events:[Oa,ns,zl,tg,ng,Lf]},Xs={findFiberByHostInstance:_r,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ty={bundleType:Xs.bundleType,version:Xs.version,rendererPackageName:Xs.rendererPackageName,rendererConfig:Xs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Si.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=og(t),t===null?null:t.stateNode},findFiberByHostInstance:Xs.findFiberByHostInstance||Qx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uo.isDisabled&&uo.supportsFiber)try{Fl=uo.inject(ty),Qn=uo}catch{}}yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ey;yn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bf(e))throw Error(se(200));return Zx(t,e,null,n)};yn.createRoot=function(t,e){if(!Bf(t))throw Error(se(299));var n=!1,i="",r=Bv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Ff(t,1,!1,null,null,n,!1,i,r),t[vi]=e.current,wa(t.nodeType===8?t.parentNode:t),new kf(e)};yn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=og(e),t=t===null?null:t.stateNode,t};yn.flushSync=function(t){return Rr(t)};yn.hydrate=function(t,e,n){if(!ql(e))throw Error(se(200));return Kl(null,t,e,!0,n)};yn.hydrateRoot=function(t,e,n){if(!Bf(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Bv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=kv(e,null,t,1,n??null,r,!1,s,a),t[vi]=e.current,wa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Yl(e)};yn.render=function(t,e,n){if(!ql(e))throw Error(se(200));return Kl(null,t,e,!1,n)};yn.unmountComponentAtNode=function(t){if(!ql(t))throw Error(se(40));return t._reactRootContainer?(Rr(function(){Kl(null,null,t,!1,function(){t._reactRootContainer=null,t[vi]=null})}),!0):!1};yn.unstable_batchedUpdates=Lf;yn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!ql(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return Kl(t,e,n,!1,i)};yn.version="18.3.1-next-f1338f8080-20240426";function zv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zv)}catch(t){console.error(t)}}zv(),zm.exports=yn;var ny=zm.exports,jv,_p=ny;jv=_p.createRoot,_p.hydrateRoot;function iy(){return""}async function fo(t,e,n,i){try{const r=await fetch(iy()+e,{method:t,headers:{...i!==void 0?{"Content-Type":"application/json"}:{},...n?{"X-Token":n}:{}},body:i!==void 0?JSON.stringify(i):void 0}),s=await r.json().catch(()=>({ok:!1,errors:[r.statusText]}));return{ok:!!s.ok,errors:s.errors,data:s}}catch(r){return{ok:!1,errors:[String(r)],data:{}}}}const Ct={get:t=>fo("GET",t,""),getAuthed:(t,e)=>fo("GET",t,e),post:(t,e,n)=>fo("POST",t,e,n),del:(t,e)=>fo("DELETE",t,e)};function ry(){const t=new URLSearchParams(window.location.search).get("token");if(t)return t;try{return localStorage.getItem("rl.token")??""}catch{return""}}function sy(t){try{localStorage.setItem("rl.token",t)}catch{}}const xp=6e3;function ay(t){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${t}`}function oy(t){let e=((t+180)%360+360)%360-180;return e===-180&&(e=180),e}function ly(t,e){const[n,i]=ae.useState(!1),[r,s]=ae.useState(!1),[a,o]=ae.useState(null),[l,u]=ae.useState(null),[h,d]=ae.useState(null),[p,g]=ae.useState(null),[_,v]=ae.useState([]),[m,f]=ae.useState([]),x=ae.useRef([]),[y,M]=ae.useState(0);ae.useEffect(()=>{if(x.current=[],M(I=>I+1),u(null),d(null),g(null),v([]),s(!1),!t){i(!1);return}let A=null,R,z=!1,S=0;const w=()=>{A=new WebSocket(ay("/ws/telemetry?session="+encodeURIComponent(t))),A.onopen=()=>{i(!0),o(null)},A.onclose=I=>{if(i(!1),I.code===4404||I.code===4410){s(!0);return}z||(R=window.setTimeout(w,1200))},A.onerror=()=>o("telemetry socket error"),A.onmessage=I=>{const b=JSON.parse(I.data);if(b.type==="no_session"){s(!0);return}if(b.type==="world"){u(b),x.current=[],M(J=>J+1),v([]),g(null);return}if(b.type==="world_update"){u({...b,type:"world"});return}if(b.type==="results"){g(b.metrics);return}d(b),b.path&&v(b.path);const j=b.ground_truth,$={t:b.t,posError:j?j.position_error_m:null,posSigma:b.estimate.pos_sigma_h,nis:b.gnss_integrity.nis,cusum:b.gnss_integrity.cusum_max,speed:j?j.speed:0,speedCmd:b.control?b.control.speed_cmd:0,state:b.resilience.state,flagged:b.gnss_integrity.flagged,estX:b.estimate.position[0],estY:b.estimate.position[1],trueX:j?j.position[0]:null,trueY:j?j.position[1]:null,yawErr:j?oy(b.estimate.yaw_deg-j.yaw_deg):null,clearance:b.mission_progress.min_clearance_m,agl:b.drone?b.drone.agl_estimate_m:null,trueAgl:b.drone&&j&&j.agl_m!==void 0?j.agl_m:null},B=x.current;B.length&&B[B.length-1].t>=$.t||(B.push($),B.length>xp&&B.splice(0,B.length-xp),++S%5===0&&M(J=>J+1))}};return w(),()=>{z=!0,R&&window.clearTimeout(R),A==null||A.close()}},[t]);const L=ae.useCallback(async(A,R={})=>{if(!t)return!1;const z=await Ct.post(`/api/sessions/${encodeURIComponent(t)}/command`,e,{command:A,args:R});return f(S=>[z.ok?`${A}: ${JSON.stringify(z.data.result??{})}`:`refused (${A}): ${(z.errors??["error"]).join("; ")}`,...S].slice(0,40)),z.ok},[t,e]),E=ae.useMemo(()=>x.current.slice(),[y]);return{connected:n,missing:r,error:a,world:l,latest:h,results:p,history:E,path:_,sendCommand:L,commandLog:m}}function qe({title:t,children:e,right:n,className:i=""}){return c.jsxs("section",{className:`card ${i}`,children:[c.jsxs("header",{children:[c.jsx("h2",{children:t}),n]}),c.jsx("div",{className:"card-body",children:e})]})}function fe({label:t,value:e,unit:n,tone:i="",hint:r}){return c.jsxs("div",{className:`stat ${i}`,title:r,children:[c.jsx("span",{className:"stat-label",children:t}),c.jsxs("span",{className:"stat-value",children:[e,n?c.jsx("small",{children:n}):null]})]})}function Ba({state:t}){const e=t==="NORMAL"?"ok":t==="DEGRADED"||t==="RECOVERY"?"warn":t==="IDLE"?"":"bad";return c.jsx("span",{className:`badge ${e}`,children:t.replace(/_/g," ")})}function ge(t,e=2){return t==null||!Number.isFinite(t)?"–":t.toFixed(e)}const cy={fill:"none",stroke:"currentColor",strokeWidth:1.7,strokeLinecap:"round",strokeLinejoin:"round"},uy={home:c.jsx("path",{d:"M3 11l9-7 9 7M5 10v10h5v-6h4v6h5V10"}),mission:c.jsxs(c.Fragment,{children:[c.jsx("circle",{cx:"12",cy:"12",r:"8"}),c.jsx("circle",{cx:"12",cy:"12",r:"3.5"}),c.jsx("path",{d:"M12 2v3M12 19v3M2 12h3M19 12h3"})]}),cube:c.jsxs(c.Fragment,{children:[c.jsx("path",{d:"M12 2l9 5v10l-9 5-9-5V7z"}),c.jsx("path",{d:"M3 7l9 5 9-5M12 12v10"})]}),sensors:c.jsx(c.Fragment,{children:c.jsx("path",{d:"M4 12h3l2-6 4 12 2-6h5"})}),results:c.jsx(c.Fragment,{children:c.jsx("path",{d:"M4 20V10M10 20V4M16 20v-7M22 20H2"})}),replay:c.jsxs(c.Fragment,{children:[c.jsx("path",{d:"M3 12a9 9 0 1 0 3-6.7"}),c.jsx("path",{d:"M3 4v5h5"}),c.jsx("path",{d:"M10 9l5 3-5 3z"})]}),lab:c.jsxs(c.Fragment,{children:[c.jsx("path",{d:"M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.7 3h10.6A2 2 0 0 0 19 18l-5-9V3"}),c.jsx("path",{d:"M7 15h10"})]}),fleet:c.jsxs(c.Fragment,{children:[c.jsx("rect",{x:"3",y:"3",width:"7",height:"7",rx:"1.5"}),c.jsx("rect",{x:"14",y:"3",width:"7",height:"7",rx:"1.5"}),c.jsx("rect",{x:"3",y:"14",width:"7",height:"7",rx:"1.5"}),c.jsx("rect",{x:"14",y:"14",width:"7",height:"7",rx:"1.5"})]}),drone:c.jsxs(c.Fragment,{children:[c.jsx("circle",{cx:"5.5",cy:"5.5",r:"2.5"}),c.jsx("circle",{cx:"18.5",cy:"5.5",r:"2.5"}),c.jsx("circle",{cx:"5.5",cy:"18.5",r:"2.5"}),c.jsx("circle",{cx:"18.5",cy:"18.5",r:"2.5"}),c.jsx("path",{d:"M7.5 7.5l3 3M16.5 7.5l-3 3M7.5 16.5l3-3M16.5 16.5l-3-3"}),c.jsx("rect",{x:"10",y:"10",width:"4",height:"4",rx:"1"})]}),rover:c.jsxs(c.Fragment,{children:[c.jsx("rect",{x:"3",y:"8",width:"18",height:"7",rx:"2"}),c.jsx("circle",{cx:"7",cy:"17.5",r:"2.5"}),c.jsx("circle",{cx:"17",cy:"17.5",r:"2.5"}),c.jsx("path",{d:"M8 8l2-3h4l2 3"})]}),bolt:c.jsx("path",{d:"M13 2L4 14h7l-1 8 9-12h-7z"}),check:c.jsx(c.Fragment,{children:c.jsx("path",{d:"M20 6L9 17l-5-5"})}),globe:c.jsxs(c.Fragment,{children:[c.jsx("circle",{cx:"12",cy:"12",r:"9"}),c.jsx("path",{d:"M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18"})]}),play:c.jsx("path",{d:"M7 4l13 8-13 8z"}),arrow:c.jsx("path",{d:"M5 12h14M13 6l6 6-6 6"})};function ki({name:t,size:e=18}){return c.jsx("svg",{viewBox:"0 0 24 24",width:e,height:e,...cy,"aria-hidden":"true",children:uy[t]??null})}function dy({latest:t,authed:e,speed:n,onCommand:i}){const r=(t==null?void 0:t.paused)??!1,s=(t==null?void 0:t.finished)??!1,a=s?{label:"↻ Run again",cmd:"reset",args:{}}:r?{label:"▶ Resume",cmd:"resume",args:{}}:{label:"⏸ Pause",cmd:"pause",args:{}};return c.jsxs("div",{className:"mc",children:[c.jsx("button",{className:"mc-primary",disabled:!e,onClick:()=>i(a.cmd,a.args),title:e?a.label:"command channel not authorised",children:a.label}),c.jsx("button",{disabled:!e||s,onClick:()=>i("step",{steps:400}),title:"Advance one second of simulated time",children:"⏭ 1 s"}),c.jsx("button",{disabled:!e,onClick:()=>i("reset",{paused:!0}),title:"Rebuild this scenario and wait at the start",children:"↺ Restart"}),c.jsxs("label",{className:"mc-speed",title:"Wall-clock pacing multiplier",children:[c.jsxs("span",{children:["×",n<1?n.toFixed(2):n.toFixed(0)]}),c.jsx("input",{type:"range",min:1,max:40,step:1,value:Math.round(n),disabled:!e,onChange:o=>i("set_speed",{speed:Number(o.target.value)})})]})]})}const yp={rolling_hills:["#1d3b22","#3f7a3c","#c8ff4d"],flat_open:["#1e2a1a","#55703a","#e6ff8a"],mountain_pass:["#1a1f33","#4c5a8f","#9b7bff"],dense_forest:["#0f2a1d","#1f5c3a","#4dffa6"],rocky_desert:["#3a2614","#8a5a2b","#ffb84d"]};function fy(t){let e=t;return()=>(e=e*16807%2147483647,e/2147483647)}function Sp(t,e,n,i,r,s){const a=[];let o=e;for(let l=0;l<=r;l+=r/24)o+=(t()-.5)*n*i,o=Math.max(e-n,Math.min(e+n*.4,o)),a.push(`${l.toFixed(1)},${o.toFixed(1)}`);return`M0,${s} L${a.join(" L")} L${r},${s} Z`}function Hv({env:t,relief:e=14,obstacles:n=45}){const[i,r,s]=yp[t]??yp.rolling_hills,a=fy([...t].reduce((g,_)=>g+_.charCodeAt(0),7)),o=240,l=80,u=8+e*1.1,h=t==="rocky_desert"?1.6:t==="mountain_pass"?1.3:.8,d=Math.min(40,Math.round(n/3)),p=`g-${t}`;return c.jsxs("svg",{className:"art",viewBox:`0 0 ${o} ${l}`,preserveAspectRatio:"none",width:"100%",height:"74",children:[c.jsx("defs",{children:c.jsxs("linearGradient",{id:p,x1:"0",y1:"0",x2:"0",y2:"1",children:[c.jsx("stop",{offset:"0",stopColor:s,stopOpacity:".28"}),c.jsx("stop",{offset:"1",stopColor:"#06080b",stopOpacity:"0"})]})}),c.jsx("rect",{width:o,height:l,fill:`url(#${p})`}),c.jsx("path",{d:Sp(a,l*.52,u*.7,h,o,l),fill:r,opacity:".55"}),c.jsx("path",{d:Sp(a,l*.7,u*.5,h,o,l),fill:i}),Array.from({length:d}).map((g,_)=>{const v=a()*o,m=l*.72+a()*l*.22;return c.jsx("circle",{cx:v,cy:m,r:.9+a()*1.4,fill:s,opacity:.35+a()*.4},_)})]})}function hy({token:t,authed:e,compact:n=!1}){const[i,r]=ae.useState(null),[s,a]=ae.useState(!1),[o,l]=ae.useState(null);ae.useEffect(()=>{Ct.get("/api/selftest").then(d=>{d.ok&&d.data.report&&r(d.data.report)})},[]);const u=async()=>{a(!0),l(null);const d=await Ct.post("/api/selftest",t,{});a(!1),d.ok?r(d.data.report):l((d.errors??["failed"]).join("; "))},h=i?c.jsxs("span",{className:`badge ${i.ok?"ok":"bad"}`,children:[i.passed,"/",i.total," passed"]}):c.jsx("span",{className:"badge",children:"not run"});return c.jsxs(qe,{title:"Component self-test",className:n?"":"span2",right:h,children:[c.jsx("p",{className:"muted small",style:{marginTop:0},children:"Checks every component in isolation — sensor models, estimator, fault injector, planner, safety state machine — plus a short closed loop for each vehicle, against physical expectations."}),c.jsxs("div",{className:"btn-row",children:[c.jsx("button",{className:"primary",disabled:!e||s,onClick:u,children:s?"running… (~15 s)":"▶ run self-test"}),i&&c.jsxs("span",{className:"muted small mono",children:["last run ",i.seconds,"s"]})]}),o&&c.jsx("p",{className:"alert",children:o}),i&&c.jsx("div",{children:i.results.map(d=>c.jsxs("div",{className:"check",title:d.detail,children:[c.jsx("span",{className:`tag ${d.ok?"pass":"fail"}`,children:d.ok?"PASS":"FAIL"}),c.jsx("span",{className:"comp muted small",children:d.component}),c.jsxs("span",{children:[d.name,c.jsx("div",{className:"detail",children:d.detail.split(`
`)[0]})]}),c.jsxs("span",{className:"mono muted small",style:{textAlign:"right"},children:[d.ms," ms"]})]},d.check))})]})}function py(){return c.jsxs("svg",{className:"glyph",viewBox:"0 0 200 200",fill:"none",children:[c.jsx("defs",{children:c.jsxs("linearGradient",{id:"rg",x1:"0",y1:"0",x2:"1",y2:"1",children:[c.jsx("stop",{offset:"0",stopColor:"#c8ff4d"}),c.jsx("stop",{offset:"1",stopColor:"#4de2ff"})]})}),c.jsx("rect",{x:"30",y:"80",width:"140",height:"48",rx:"12",stroke:"url(#rg)",strokeWidth:"3"}),c.jsx("path",{d:"M62 80l14-24h48l14 24",stroke:"url(#rg)",strokeWidth:"3"}),[52,100,148].map(t=>c.jsx("circle",{cx:t,cy:"140",r:"16",stroke:"url(#rg)",strokeWidth:"3"},t)),c.jsx("path",{d:"M150 56c18 0 30 12 30 30",stroke:"#c8ff4d",strokeOpacity:".5",strokeWidth:"2",strokeDasharray:"4 5"})]})}function my(){return c.jsxs("svg",{className:"glyph",viewBox:"0 0 200 200",fill:"none",children:[c.jsx("defs",{children:c.jsxs("linearGradient",{id:"dg",x1:"0",y1:"0",x2:"1",y2:"1",children:[c.jsx("stop",{offset:"0",stopColor:"#9b7bff"}),c.jsx("stop",{offset:"1",stopColor:"#4de2ff"})]})}),[[50,50],[150,50],[50,150],[150,150]].map(([t,e])=>c.jsxs("g",{children:[c.jsx("line",{x1:"100",y1:"100",x2:t,y2:e,stroke:"url(#dg)",strokeWidth:"4"}),c.jsx("ellipse",{cx:t,cy:e,rx:"30",ry:"8",stroke:"url(#dg)",strokeWidth:"2.5",opacity:".8"})]},`${t}${e}`)),c.jsx("rect",{x:"82",y:"82",width:"36",height:"36",rx:"9",stroke:"url(#dg)",strokeWidth:"3"}),c.jsx("circle",{cx:"100",cy:"100",r:"5",fill:"#c8ff4d"})]})}function gy({schema:t,sessions:e,token:n,authed:i,openLab:r,openSession:s,openFleet:a}){const[o,l]=ae.useState([]);ae.useEffect(()=>{Ct.get("/api/runs").then(d=>d.ok&&l(d.data.runs))},[]);const u=ae.useMemo(()=>{const d=o.length,p=o.filter(v=>v.mission_success).length,g=o.reduce((v,m)=>v+(m.faults_detected||0),0),_=o.reduce((v,m)=>v+(m.faults_declared||0),0);return{done:d,rate:d?100*p/d:0,det:g,decl:_}},[o]),h=["GNSS outage → dead reckoning in 1 s","Spoofed GNSS rejected, error held at 1.4 m","Barometer drift voted out by GNSS + rangefinder","LiDAR loss → stop, recover, resume","Drone failsafe: land level when position is lost","Ground truth reaches the recorder only","Every fault is arithmetic on a simulated stream"];return c.jsxs("div",{className:"home",children:[c.jsxs("section",{className:"hero",children:[c.jsx("div",{className:"hero-orb"}),c.jsx("span",{className:"eyebrow",children:"Software-in-the-loop · Mission: Resilience"}),c.jsxs("h1",{children:["Break the sensors.",c.jsx("br",{}),c.jsx("span",{className:"grad",children:"Keep the mission"})," ",c.jsx("span",{className:"outline",children:"safe."})]}),c.jsx("p",{className:"lede",children:"A rover and a quadrotor fly and drive through five procedurally generated worlds while we inject GNSS loss, spoofing, LiDAR dropout, sensor drift and wind. They have to notice, degrade gracefully and recover — and every trial is scored against ground truth."}),c.jsxs("div",{className:"cta",children:[c.jsxs("button",{className:"primary",onClick:()=>r(),children:[c.jsx(ki,{name:"lab"})," Design a scenario"]}),e[0]&&c.jsxs("button",{onClick:()=>s(e[0].id),children:[c.jsx(ki,{name:"play"})," Watch live: ",e[0].label]}),c.jsxs("button",{className:"ghost",onClick:a,children:[c.jsx(ki,{name:"fleet"})," Fleet & results"]})]})]}),c.jsx("div",{className:"marquee","aria-hidden":"true",children:c.jsx("div",{className:"marquee-track",children:[...h,...h].map((d,p)=>c.jsx("span",{children:d},p))})}),c.jsxs("div",{className:"kpi-strip",children:[c.jsxs("div",{className:"kpi",children:[c.jsxs("div",{className:"v",children:[e.length,c.jsx("small",{children:"/ 6"})]}),c.jsx("div",{className:"l",children:"live simulations"})]}),c.jsxs("div",{className:"kpi",style:{animationDelay:".05s"},children:[c.jsx("div",{className:"v",children:u.done}),c.jsx("div",{className:"l",children:"recorded trials"})]}),c.jsxs("div",{className:"kpi",style:{animationDelay:".1s"},children:[c.jsxs("div",{className:"v",children:[ge(u.rate,0),c.jsx("small",{children:"%"})]}),c.jsx("div",{className:"l",children:"mission success"})]}),c.jsxs("div",{className:"kpi",style:{animationDelay:".15s"},children:[c.jsxs("div",{className:"v",children:[u.det,c.jsxs("small",{children:["/ ",u.decl]})]}),c.jsx("div",{className:"l",children:"faults detected"})]})]}),e.length>0&&c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"section-title",children:[c.jsx("h3",{children:"Running now"}),c.jsx("span",{children:"click to watch"})]}),c.jsx("div",{className:"grid three",children:e.map(d=>c.jsxs("button",{className:"vehicle-card",style:{minHeight:130,padding:18},onClick:()=>s(d.id),children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:[c.jsxs("span",{className:"chip",children:[c.jsx(ki,{name:d.vehicle==="drone"?"drone":"rover",size:14})," ",d.vehicle]}),d.state&&c.jsx(Ba,{state:d.state})]}),c.jsxs("div",{children:[c.jsx("div",{style:{font:"600 18px var(--font-display)",letterSpacing:"-.02em"},children:d.label}),c.jsxs("div",{className:"muted small mono",children:[d.environment.replace(/_/g," ")," · seed ",d.seed," · t=",ge(d.t,0)," s"]})]})]},d.id))})]}),c.jsxs("div",{className:"section-title",children:[c.jsx("h3",{children:"Two vehicles, one safety brain"}),c.jsx("span",{children:"same estimator, monitors and state machine"})]}),c.jsxs("div",{className:"vehicle-cards",children:[c.jsxs("button",{className:"vehicle-card",onClick:()=>r({vehicle:"ugv"}),children:[c.jsx(py,{}),c.jsxs("div",{children:[c.jsx("span",{className:"eyebrow",children:"Ground"}),c.jsx("h4",{children:"Rover"}),c.jsx("p",{children:"Skid-steer UGV with IMU, GNSS, wheel odometry, LiDAR and compass. Terrain-aware A*, pure pursuit, LiDAR braking."})]}),c.jsxs("div",{className:"tags",children:[c.jsx("span",{className:"chip",children:"9 scenarios"}),c.jsx("span",{className:"chip",children:"dead reckoning 75 s"}),c.jsx("span",{className:"chip",children:"safe action: stop"})]})]}),c.jsxs("button",{className:"vehicle-card",onClick:()=>r({vehicle:"drone"}),children:[c.jsx(my,{}),c.jsxs("div",{children:[c.jsx("span",{className:"eyebrow",children:"Air"}),c.jsx("h4",{children:"Quadrotor"}),c.jsx("p",{children:"Multicopter with IMU, GNSS, baro, compass and rangefinder. Terrain-following cruise, wind, PX4-style failsafe landing."})]}),c.jsxs("div",{className:"tags",children:[c.jsx("span",{className:"chip",children:"7 scenarios"}),c.jsx("span",{className:"chip",children:"wind & gusts"}),c.jsx("span",{className:"chip",children:"safe action: land"})]})]})]}),t&&c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"section-title",children:[c.jsx("h3",{children:"Five worlds"}),c.jsx("span",{children:"procedural terrain · every seed is a new map"})]}),c.jsx("div",{className:"env-grid",children:Object.entries(t.environments).map(([d,p])=>c.jsxs("button",{className:"env",onClick:()=>r({environment:d}),children:[c.jsx(Hv,{env:d,relief:p.world.relief,obstacles:p.world.n_obstacles}),c.jsxs("div",{className:"meta",children:[c.jsx("b",{children:p.label}),c.jsx("span",{className:"muted small",children:p.description}),c.jsxs("span",{className:"muted small mono",children:["relief ",p.world.relief," m · ",p.world.n_obstacles," obstacles"]})]})]},d))})]}),c.jsxs("div",{className:"section-title",children:[c.jsx("h3",{children:"Is everything working?"}),c.jsx("span",{children:"run before the demo"})]}),c.jsx("div",{className:"grid",children:c.jsx(hy,{token:n,authed:i})})]})}function pa({rows:t,series:e,height:n=150,yLabel:i,yMax:r,shadeFlagged:s=!1,window:a=1200}){const l=n,u=46,h=20,d=8,p=8,g=ae.useMemo(()=>t.slice(-a),[t,a]),_=ae.useRef(null),[v,m]=ae.useState(null),{paths:f,flagSpans:x,t0:y,t1:M,lo:L,hi:E}=ae.useMemo(()=>{if(g.length<2)return{paths:[],flagSpans:[],t0:0,t1:1,lo:0,hi:1};const I=g[0].t,b=g[g.length-1].t,j=Math.max(b-I,1e-6);let $=1/0,B=-1/0;for(const ue of e)for(const Ne of g){const H=Ne[ue.key];typeof H=="number"&&Number.isFinite(H)&&(H<$&&($=H),H>B&&(B=H))}Number.isFinite($)||($=0,B=1),r!==void 0&&(B=Math.min(B,r)),$=Math.min($,0),B-$<1e-9&&(B=$+1);const J=(B-$)*.08;B+=J;const N=ue=>u+(ue-I)/j*(760-u-p),q=ue=>l-h-(ue-$)/(B-$)*(l-h-d),Z=e.map(ue=>{let Ne="",H=!1;for(const te of g){const le=te[ue.key];if(typeof le!="number"||!Number.isFinite(le)){H=!1;continue}const de=q(Math.min(le,B));Ne+=`${H?"L":"M"}${N(te.t).toFixed(1)},${de.toFixed(1)}`,H=!0}return{...ue,d:Ne}}),ie=[];if(s){let ue=null;for(const Ne of g)Ne.flagged&&ue===null&&(ue=Ne.t),!Ne.flagged&&ue!==null&&(ie.push({x:N(ue),w:Math.max(N(Ne.t)-N(ue),1)}),ue=null);ue!==null&&ie.push({x:N(ue),w:Math.max(N(b)-N(ue),1)})}return{paths:Z,flagSpans:ie,t0:I,t1:b,lo:$,hi:B}},[g,e,r,s,l]);if(g.length<2)return c.jsx("div",{className:"chart-empty",style:{height:l},children:"waiting for telemetry…"});const A=[L,L+(E-L)/2,E],R=I=>u+(I-y)/Math.max(M-y,1e-6)*(760-u-p),z=I=>l-h-(I-L)/(E-L)*(l-h-d),S=I=>{const b=_.current;if(!b)return;const j=b.getBoundingClientRect(),B=((I.clientX-j.left)/j.width*760-u)/(760-u-p);if(B<0||B>1){m(null);return}m(Math.min(g.length-1,Math.max(0,Math.round(B*(g.length-1)))))},w=v===null?null:g[v];return c.jsxs("div",{className:"chart",children:[c.jsxs("svg",{ref:_,viewBox:`0 0 760 ${l}`,width:"100%",height:l,role:"img","aria-label":i??"time series",onPointerMove:S,onPointerLeave:()=>m(null),style:{touchAction:"none"},children:[x.map((I,b)=>c.jsx("rect",{x:I.x,y:d,width:I.w,height:l-h-d,className:"chart-flag"},b)),A.map((I,b)=>{const j=l-h-(I-L)/(E-L)*(l-h-d);return c.jsxs("g",{children:[c.jsx("line",{x1:u,x2:760-p,y1:j,y2:j,className:"chart-grid"}),c.jsx("text",{x:u-6,y:j+3,className:"chart-tick",textAnchor:"end",children:Math.abs(I)>=100?I.toFixed(0):I.toFixed(2)})]},b)}),c.jsxs("text",{x:u,y:l-6,className:"chart-tick",children:[y.toFixed(0),"s"]}),c.jsxs("text",{x:760-p,y:l-6,className:"chart-tick",textAnchor:"end",children:[M.toFixed(0),"s"]}),f.map(I=>c.jsx("path",{d:I.d,fill:"none",stroke:I.color,strokeWidth:1.6,strokeDasharray:I.dashed?"4 3":void 0},String(I.key))),w&&c.jsxs("g",{className:"chart-cursor",children:[c.jsx("line",{x1:R(w.t),x2:R(w.t),y1:d,y2:l-h}),e.map(I=>{const b=w[I.key];return typeof b!="number"||!Number.isFinite(b)?null:c.jsx("circle",{cx:R(w.t),cy:z(Math.min(b,E)),r:3,fill:I.color},String(I.key))})]})]}),w&&c.jsxs("div",{className:"chart-readout",children:[c.jsxs("strong",{children:[w.t.toFixed(2)," s"]}),e.map(I=>{const b=w[I.key];return c.jsxs("span",{children:[c.jsx("i",{style:{background:I.color}}),I.label,":"," ",typeof b=="number"&&Number.isFinite(b)?b.toFixed(3):"–"]},String(I.key))}),c.jsx("span",{className:"muted",children:w.state.replace(/_/g," ").toLowerCase()})]}),c.jsxs("div",{className:"chart-legend",children:[e.map(I=>c.jsxs("span",{children:[c.jsx("i",{style:{background:I.color}}),I.label]},String(I.key))),s&&c.jsxs("span",{children:[c.jsx("i",{className:"legend-flag"}),"GNSS inconsistent"]})]})]})}const Mp={IDLE:"#3d4552",NORMAL:"#3fb950",DEGRADED:"#e3b341",LIMITED_OPERATION:"#e08c3b",SAFE_ACTION:"#f05d5d",RECOVERY:"#4a9eff",COMPLETE:"#2ea043",ABORTED:"#8b1a1a"};function Vv({t,duration:e,transitions:n,faultWindows:i,faults:r}){const s=Math.max(e,t,1),a=l=>`${Math.max(0,Math.min(100,l/s*100))}%`,o=ae.useMemo(()=>{const l=[];let u=n.length?n[0].from:"NORMAL",h=0,d="start";for(const p of n)l.push({from:h,to:p.t,state:u,reason:d}),u=p.to,h=p.t,d=p.reason;return l.push({from:h,to:t,state:u,reason:d}),l.filter(p=>p.to>p.from)},[n,t]);return c.jsxs("div",{className:"timeline",children:[c.jsxs("div",{className:"tl-row",children:[c.jsx("span",{className:"tl-label",children:"state"}),c.jsxs("div",{className:"tl-track",children:[o.map((l,u)=>c.jsx("div",{className:"tl-band",style:{left:a(l.from),width:a(l.to-l.from),background:Mp[l.state]??"#3d4552"},title:`${l.state.replace(/_/g," ")}  ${l.from.toFixed(1)}–${l.to.toFixed(1)} s
${l.reason}`},u)),c.jsx("div",{className:"tl-now",style:{left:a(t)}})]})]}),c.jsxs("div",{className:"tl-row",children:[c.jsx("span",{className:"tl-label",children:"faults"}),c.jsxs("div",{className:"tl-track",children:[i.map((l,u)=>c.jsx("div",{className:"tl-fault",style:{left:a(l.onset),width:a(l.end-l.onset)},title:`${l.type.replace(/_/g," ")} injected ${l.onset.toFixed(1)}–${l.end.toFixed(1)} s`,children:c.jsx("span",{children:l.type.replace(/_/g," ").toLowerCase()})},u)),r.filter(l=>l.detected&&l.detection_time!==null).map((l,u)=>{var h;return c.jsx("div",{className:"tl-detect",style:{left:a(l.detection_time)},title:`flagged at ${l.detection_time.toFixed(2)} s by ${l.detected_by||"monitor"} — ${(h=l.detection_latency)==null?void 0:h.toFixed(2)} s after onset`},`d${u}`)}),c.jsx("div",{className:"tl-now",style:{left:a(t)}})]})]}),c.jsxs("div",{className:"tl-axis",children:[c.jsx("span",{children:"0 s"}),c.jsxs("span",{children:[(s/2).toFixed(0)," s"]}),c.jsxs("span",{children:[s.toFixed(0)," s"]})]}),c.jsxs("div",{className:"tl-legend",children:[Object.entries(Mp).filter(([l])=>o.some(u=>u.state===l)).map(([l,u])=>c.jsxs("span",{children:[c.jsx("i",{style:{background:u}}),l.replace(/_/g," ").toLowerCase()]},l)),i.length>0&&c.jsxs(c.Fragment,{children:[c.jsxs("span",{children:[c.jsx("i",{className:"legend-faultband"}),"fault injected"]}),c.jsxs("span",{children:[c.jsx("i",{className:"legend-detect"}),"flagged by monitor"]})]})]})]})}function nd({values:t,color:e="#4a9eff",width:n=72,height:i=20}){const r=ae.useMemo(()=>{const s=t.filter(h=>h!==null&&Number.isFinite(h));if(s.length<2)return"";const a=Math.min(...s),l=Math.max(...s)-a||1,u=n/(s.length-1);return s.map((h,d)=>`${d?"L":"M"}${(d*u).toFixed(1)},${(i-(h-a)/l*(i-2)-1).toFixed(1)}`).join("")},[t,n,i]);return r?c.jsx("svg",{className:"spark",width:n,height:i,"aria-hidden":"true",children:c.jsx("path",{d:r,fill:"none",stroke:e,strokeWidth:1.4})}):null}const Ep=["PREFLIGHT","TAKEOFF","CRUISE","DESCEND","LAND","LANDED"];function vy({latest:t,history:e}){const n=t.drone,i=t.ground_truth,r=n.phase==="FAILSAFE_LAND",s=Ep.indexOf(n.phase),a=i!=null&&i.wind?Math.hypot(i.wind[0],i.wind[1]):null;return c.jsxs(qe,{title:"Flight",className:"span2",right:c.jsx("span",{className:`badge ${r?"bad":n.armed?"ok":""}`,children:r?"failsafe landing":n.armed?"armed":"disarmed"}),children:[c.jsxs("div",{className:"phase-rail",children:[Ep.map((o,l)=>c.jsx("span",{className:`phase ${!r&&l===s?"now":!r&&l<s?"done":""}`,children:o.toLowerCase()},o)),r&&c.jsx("span",{className:"phase fail",children:"failsafe land"})]}),c.jsxs("div",{className:"stat-row",children:[c.jsx(fe,{label:"height (est)",value:ge(n.agl_estimate_m,1),unit:"m",tone:n.agl_estimate_m!==null&&n.agl_estimate_m<5&&n.phase==="CRUISE"?"warn":""}),c.jsx(fe,{label:"height (true)",value:(i==null?void 0:i.agl_m)!==void 0?ge(i.agl_m,1):"n/a",unit:"m"}),c.jsx(fe,{label:"alt setpoint",value:ge(n.alt_setpoint_m,1),unit:"m"}),c.jsx(fe,{label:"vertical speed",value:ge(n.vertical_speed_mps,2),unit:"m/s"}),c.jsx(fe,{label:"thrust / weight",value:ge(n.thrust_ratio,2),tone:n.thrust_ratio>1.8?"warn":""}),c.jsx(fe,{label:"tilt cmd",value:ge(n.tilt_cmd_deg,1),unit:"°",tone:n.tilt_cmd_deg>18?"warn":""})]}),c.jsxs("div",{className:"stat-row",children:[c.jsx(fe,{label:"rangefinder",value:n.rangefinder_m===null?"no return":ge(n.rangefinder_m,2),unit:n.rangefinder_m===null?void 0:"m"}),c.jsx(fe,{label:"wind (true)",value:a===null?"n/a":ge(a,1),unit:"m/s",tone:a!==null&&a>10?"warn":""}),c.jsx(fe,{label:"barometer",value:n.baro_excluded?"voted out":"in use",tone:n.baro_excluded?"bad":"ok",hint:"Excluded when it disagrees with both GNSS and terrain map + rangefinder."}),c.jsx(fe,{label:"landed (est)",value:n.landed_estimate?"yes":"no"})]}),c.jsx(pa,{rows:e,height:130,series:[{key:"trueAgl",label:"true height (m)",color:"#ff8a3d"},{key:"agl",label:"estimated height (m)",color:"#4de2ff",dashed:!0}]})]})}function _y({latest:t,world:e,history:n}){const i=t.resilience,r=t.gnss_integrity,s=t.mission_progress,a=t.ground_truth,o=Math.max(1e-6,Math.hypot(e.mission.goal[0]-e.mission.start[0],e.mission.goal[1]-e.mission.start[1])),l=Math.max(0,Math.min(1,1-s.distance_to_goal_m/o));return c.jsxs("div",{className:"grid",children:[c.jsxs(qe,{title:"Mission",right:c.jsx(Ba,{state:i.state}),className:"span2",children:[c.jsxs("div",{className:"stat-row",children:[c.jsx(fe,{label:"scenario",value:e.scenario.id}),c.jsx(fe,{label:"seed",value:e.scenario.seed,hint:"Fixed per trial so every run is reproducible."}),c.jsx(fe,{label:"time",value:ge(t.t,1),unit:"s"}),c.jsx(fe,{label:"nav mode",value:i.nav_mode.replace(/_/g," ")}),c.jsx(fe,{label:"speed limit",value:ge(i.speed_limit,2),unit:"m/s",tone:i.speed_limit<1?"warn":"ok"})]}),c.jsxs("div",{className:"progress",children:[c.jsx("div",{className:"progress-fill",style:{width:`${l*100}%`}}),c.jsxs("span",{children:[ge(s.distance_travelled_m,0)," m ",t.drone?"flown":"driven"," ·"," ",ge(s.distance_to_goal_m,0)," m to goal"]})]}),c.jsx(Vv,{t:t.t,duration:e.scenario.duration_s,transitions:t.transitions,faultWindows:e.fault_windows,faults:t.fault_history}),c.jsx("p",{className:"reason",children:i.reason}),!i.allow_motion&&(i.state==="COMPLETE"||i.state==="ABORTED"?c.jsx("p",{className:i.state==="ABORTED"?"alert":"reason",children:i.state==="COMPLETE"?"Mission complete — the vehicle has stopped at the goal.":"Mission aborted — the vehicle stopped and will not continue."}):c.jsx("p",{className:"alert",children:t.drone?"Failsafe — landing in place.":`Motion inhibited — ${(i.safe_action??"safe action").replace(/_/g," ").toLowerCase()} held.`})),(a==null?void 0:a.crashed)&&c.jsx("p",{className:"alert",children:"Vehicle crashed."})]}),t.drone&&c.jsx(vy,{latest:t,history:n}),c.jsxs(qe,{title:"Localisation",children:[c.jsxs("div",{className:"stat-row",children:[c.jsx(fe,{label:"reported σ",value:ge(t.estimate.pos_sigma_h),unit:"m",hint:"The filter's own horizontal uncertainty."}),c.jsx(fe,{label:"true error",value:a?ge(a.position_error_m):"n/a",unit:"m",tone:a?a.position_error_m<2*t.estimate.pos_sigma_h?"ok":"warn":"",hint:"Scored against ground truth; not available to the navigator."}),c.jsx(fe,{label:"yaw σ",value:ge(t.estimate.yaw_sigma_deg,1),unit:"°"}),c.jsxs("div",{className:"spark-cell",children:[c.jsx("span",{className:"stat-label",children:"trend"}),c.jsx(nd,{values:n.slice(-200).map(u=>u.posError),color:"#f0803c"})]})]}),c.jsx(pa,{rows:n,height:132,shadeFlagged:!0,series:[{key:"posError",label:"true error (m)",color:"#f0803c"},{key:"posSigma",label:"reported σ (m)",color:"#4a9eff",dashed:!0}]})]}),c.jsxs(qe,{title:"GNSS integrity",children:[c.jsxs("div",{className:"stat-row",children:[c.jsx(fe,{label:"status",value:r.status,tone:r.flagged?"bad":"ok",hint:"Evidence of disagreement between streams. The monitor cannot identify a cause."}),c.jsx(fe,{label:"NIS",value:ge(r.nis)}),c.jsx(fe,{label:"CUSUM",value:ge(r.cusum_max,1)}),c.jsx(fe,{label:"satellites",value:t.sensors.gnss?t.sensors.gnss.status:"–"})]}),r.reasons.length>0&&c.jsx("ul",{className:"reasons",children:r.reasons.map(u=>c.jsx("li",{children:u},u))}),c.jsx("p",{className:"caveat",children:"A flag means the GNSS solution is inconsistent with the inertial and odometric evidence. Interference, multipath, a receiver fault and an estimator fault all look alike from here, so no cause is claimed."})]}),c.jsxs(qe,{title:"Faults",className:"span2",children:[t.faults_active.length===0?c.jsxs("p",{className:"muted",children:["No fault active."," ",e.faults_declared.length>0&&`${e.faults_declared.length} declared in this scenario.`]}):c.jsxs("table",{className:"table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"type"}),c.jsx("th",{children:"target"}),c.jsx("th",{children:"onset"}),c.jsx("th",{children:"detected"}),c.jsx("th",{children:"latency"}),c.jsx("th",{children:"by"})]})}),c.jsx("tbody",{children:t.faults_active.map((u,h)=>c.jsxs("tr",{children:[c.jsx("td",{children:u.type.replace(/_/g," ")}),c.jsx("td",{children:u.target}),c.jsxs("td",{children:[ge(u.onset,1)," s"]}),c.jsx("td",{className:u.detected?"ok-text":"warn-text",children:u.detected?ge(u.detected_time,1)+" s":"not yet"}),c.jsx("td",{children:u.detection_latency_s===null?"–":ge(u.detection_latency_s,2)+" s"}),c.jsx("td",{children:u.detected_by||"–"})]},h))})]}),c.jsxs("div",{className:"stat-row",children:[c.jsx(fe,{label:"replans",value:s.replans}),c.jsx(fe,{label:"failed plans",value:s.failed_plans,tone:s.failed_plans>0?"warn":"ok"}),c.jsx(fe,{label:"collisions",value:s.collisions,tone:s.collisions>0?"bad":"ok"}),c.jsx(fe,{label:"min clearance",value:ge(s.min_clearance_m),unit:"m",tone:s.min_clearance_m<.5?"bad":"ok"}),c.jsx(fe,{label:"dead reckoning",value:ge(i.dead_reckoning_time_s,1),unit:"s",tone:i.dead_reckoning_time_s>0?"warn":"ok"})]})]})]})}const en={bg:"#0d1117",grid:"#1d2531",terrainLo:[58,70,52],terrainHi:[150,160,120],known:"#8c6239",discovered:"#c2502f",plan:"#4a9eff",trail:"#f0803c",est:"#4a9eff",truth:"#f0803c",scan:"#ffd866",goal:"#3fb950"};function xy({world:t,latest:e,path:n,history:i,height:r=560}){const s=ae.useRef(null),a=ae.useRef(null),[o,l]=ae.useState(!1),[u,h]=ae.useState(1),d=t.terrain,p=(d.shape[1]-1)*d.resolution,g=(d.shape[0]-1)*d.resolution;return ae.useEffect(()=>{var E,A,R,z,S;const[_,v]=d.shape,m=document.createElement("canvas");m.width=v,m.height=_;const f=m.getContext("2d");if(!f)return;const x=f.createImageData(v,_),[y,M]=d.z_range,L=Math.max(M-y,1e-6);for(let w=0;w<_;w++)for(let I=0;I<v;I++){const b=((E=d.height[w])==null?void 0:E[I])??0,j=Math.max(0,Math.min(1,(b-y)/L)),$=3,B=((A=d.height[w])==null?void 0:A[Math.max(0,I-$)])??b,J=((R=d.height[w])==null?void 0:R[Math.min(v-1,I+$)])??b,N=((z=d.height[Math.max(0,w-$)])==null?void 0:z[I])??b,q=((S=d.height[Math.min(_-1,w+$)])==null?void 0:S[I])??b,Z=(J-B)/(2*$*d.resolution),ie=(q-N)/(2*$*d.resolution),ue=Math.max(.62,Math.min(1.3,1+(Z-ie)*.9)),Ne=((_-1-w)*v+I)*4;for(let H=0;H<3;H++){const te=(en.terrainLo[H]+(en.terrainHi[H]-en.terrainLo[H])*j)*ue;x.data[Ne+H]=Math.max(0,Math.min(255,te))}x.data[Ne+3]=255}f.putImageData(x,0,0),a.current=m},[d]),ae.useEffect(()=>{const _=s.current;if(!_)return;const v=_.getContext("2d");if(!v)return;const m=Math.min(window.devicePixelRatio||1,2),f=_.clientWidth,x=r;(_.width!==f*m||_.height!==x*m)&&(_.width=f*m,_.height=x*m),v.setTransform(m,0,0,m,0,0),v.clearRect(0,0,f,x),v.fillStyle=en.bg,v.fillRect(0,0,f,x);const y=e.estimate.position,L=Math.min(f/p,x/g)*u,E=o?y[0]:d.origin[0]+p/2,A=o?y[1]:d.origin[1]+g/2,R=N=>f/2+(N-E)*L,z=N=>x/2-(N-A)*L,S=a.current;S&&(v.imageSmoothingEnabled=!0,v.drawImage(S,R(d.origin[0]),z(d.origin[1]+g),p*L,g*L)),v.strokeStyle=en.grid,v.lineWidth=1,v.globalAlpha=.5,v.beginPath();for(let N=0;N<=p;N+=25)v.moveTo(R(d.origin[0]+N),z(d.origin[1])),v.lineTo(R(d.origin[0]+N),z(d.origin[1]+g));for(let N=0;N<=g;N+=25)v.moveTo(R(d.origin[0]),z(d.origin[1]+N)),v.lineTo(R(d.origin[0]+p),z(d.origin[1]+N));v.stroke(),v.globalAlpha=1;for(const N of t.obstacles)N.spawn_time>e.t||(v.fillStyle=N.known_a_priori?en.known:en.discovered,v.strokeStyle="rgba(0,0,0,0.75)",v.lineWidth=1,v.beginPath(),N.kind==="cylinder"?v.arc(R(N.x),z(N.y),Math.max(3,N.radius*L),0,Math.PI*2):(v.save(),v.translate(R(N.x),z(N.y)),v.rotate(-N.yaw),v.rect(-N.half_x*L,-N.half_y*L,N.half_x*2*L,N.half_y*2*L),v.restore()),v.fill(),v.stroke());const w=(N,q,Z,ie)=>{v.strokeStyle=Z,v.fillStyle=Z,v.lineWidth=2,v.beginPath(),v.arc(R(N),z(q),7,0,Math.PI*2),v.stroke(),v.font="10px ui-sans-serif, sans-serif",v.fillText(ie,R(N)+10,z(q)+3)};if(w(t.mission.start[0],t.mission.start[1],en.goal,"start"),w(t.mission.goal[0],t.mission.goal[1],en.plan,"goal"),n.length>1&&(v.strokeStyle=en.plan,v.lineWidth=1.8,v.globalAlpha=.85,v.beginPath(),n.forEach(([N,q],Z)=>Z?v.lineTo(R(N),z(q)):v.moveTo(R(N),z(q))),v.stroke(),v.globalAlpha=1),i.length>1){v.lineWidth=2.2;let N=null;for(const q of i){if(q.trueX===null||q.trueY===null){N=null;continue}N&&N.trueX!==null&&N.trueY!==null&&(v.strokeStyle=q.flagged?"#f05d5d":en.trail,v.beginPath(),v.moveTo(R(N.trueX),z(N.trueY)),v.lineTo(R(q.trueX),z(q.trueY)),v.stroke()),N=q}}const I=e.lidar;if(I){v.fillStyle=en.scan;const N=e.estimate.yaw_deg*Math.PI/180;for(let q=0;q<I.ranges.length;q++){const Z=I.ranges[q];if(Z===null||!Number.isFinite(Z))continue;const ie=N+I.angles[q];v.fillRect(R(y[0]+Z*Math.cos(ie))-1,z(y[1]+Z*Math.sin(ie))-1,2,2)}}const b=e.estimate.pos_sigma_h;v.fillStyle="rgba(74,158,255,0.14)",v.strokeStyle="rgba(74,158,255,0.55)",v.lineWidth=1,v.beginPath(),v.arc(R(y[0]),z(y[1]),Math.max(2,b*2*L),0,Math.PI*2),v.fill(),v.stroke();const j=(N,q,Z,ie,ue)=>{const Ne=-Z*Math.PI/180,H=9;v.save(),v.translate(R(N),z(q)),v.rotate(Ne),v.beginPath(),v.moveTo(H,0),v.lineTo(-H*.6,H*.6),v.lineTo(-H*.6,-H*.6),v.closePath(),v.lineWidth=2,ue?(v.fillStyle=ie,v.fill()):(v.strokeStyle=ie,v.stroke()),v.restore()},$=e.ground_truth;$&&(v.strokeStyle="rgba(240,128,60,0.8)",v.setLineDash([3,3]),v.lineWidth=1.2,v.beginPath(),v.moveTo(R(y[0]),z(y[1])),v.lineTo(R($.position[0]),z($.position[1])),v.stroke(),v.setLineDash([]),j($.position[0],$.position[1],$.yaw_deg,en.truth,!1)),j(y[0],y[1],e.estimate.yaw_deg,en.est,!0);const B=u>2.5?10:u>1.2?25:50,J=B*L;v.strokeStyle="#8b98a8",v.fillStyle="#8b98a8",v.lineWidth=2,v.beginPath(),v.moveTo(14,x-16),v.lineTo(14+J,x-16),v.moveTo(14,x-20),v.lineTo(14,x-12),v.moveTo(14+J,x-20),v.lineTo(14+J,x-12),v.stroke(),v.font="10px ui-sans-serif, sans-serif",v.fillText(`${B} m`,16+J,x-19)},[t,e,n,i,o,u,r,d,p,g]),c.jsxs("div",{className:"mapwrap",children:[c.jsx("canvas",{ref:s,style:{width:"100%",height:r},onWheel:_=>{_.preventDefault(),h(v=>Math.max(.6,Math.min(14,v*(1-_.deltaY*.0015))))}}),c.jsxs("div",{className:"map-controls",children:[c.jsxs("label",{className:"toggle",children:[c.jsx("input",{type:"checkbox",checked:o,onChange:_=>l(_.target.checked)}),"follow"]}),c.jsx("button",{onClick:()=>h(_=>Math.min(14,_*1.4)),children:"+"}),c.jsx("button",{onClick:()=>h(_=>Math.max(.6,_/1.4)),children:"−"}),c.jsx("button",{onClick:()=>{h(1),l(!1)},children:"fit"}),c.jsxs("span",{className:"muted small",children:["×",u.toFixed(1)]})]})]})}function yy({latest:t,world:e,path:n,history:i}){const r=t.ground_truth,s=i.slice(-240);return c.jsxs("div",{className:"grid",children:[c.jsxs(qe,{title:"Tactical map",className:"span2",right:c.jsx(Ba,{state:t.resilience.state}),children:[c.jsx(xy,{world:e,latest:t,path:n,history:i,height:480}),c.jsxs("div",{className:"legend3d",children:[c.jsxs("span",{children:[c.jsx("i",{style:{background:"#4a9eff"}}),"estimate + 2σ"]}),c.jsxs("span",{children:[c.jsx("i",{style:{background:"#f0803c"}}),"ground truth & driven track"]}),c.jsxs("span",{children:[c.jsx("i",{style:{background:"#f05d5d"}}),"track while GNSS inconsistent"]}),c.jsxs("span",{children:[c.jsx("i",{style:{background:"#ffd866"}}),"LiDAR returns"]}),c.jsxs("span",{children:[c.jsx("i",{style:{background:"#8c6239"}}),"known obstacle"]}),c.jsxs("span",{children:[c.jsx("i",{style:{background:"#c2502f"}}),"discovered obstacle"]})]})]}),c.jsxs(qe,{title:"Mission timeline",className:"span2",children:[c.jsx(Vv,{t:t.t,duration:e.scenario.duration_s,transitions:t.transitions,faultWindows:e.fault_windows,faults:t.fault_history}),t.transitions.length>0&&c.jsxs("table",{className:"table compact tl-table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"t"}),c.jsx("th",{children:"transition"}),c.jsx("th",{children:"reason"})]})}),c.jsx("tbody",{children:t.transitions.slice(-6).reverse().map((a,o)=>c.jsxs("tr",{children:[c.jsxs("td",{children:[ge(a.t,1)," s"]}),c.jsxs("td",{children:[a.from.replace(/_/g," ")," → ",c.jsx("strong",{children:a.to.replace(/_/g," ")})]}),c.jsx("td",{className:"muted",children:a.reason})]},o))})]})]}),c.jsxs(qe,{title:"Tracking",children:[c.jsxs("div",{className:"stat-row",children:[c.jsx(fe,{label:"position error",value:r?ge(r.position_error_m):"n/a",unit:"m",tone:r?r.position_error_m<2*t.estimate.pos_sigma_h?"ok":"warn":""}),c.jsx(fe,{label:"reported σ",value:ge(t.estimate.pos_sigma_h),unit:"m"}),c.jsx(fe,{label:"heading error",value:s.length&&s[s.length-1].yawErr!==null?ge(s[s.length-1].yawErr,1):"n/a",unit:"°"})]}),c.jsxs("div",{className:"spark-row",children:[c.jsx("span",{className:"muted small",children:"error trend"}),c.jsx(nd,{values:s.map(a=>a.posError),color:"#f0803c",width:200,height:30})]}),c.jsxs("div",{className:"spark-row",children:[c.jsx("span",{className:"muted small",children:"speed trend"}),c.jsx(nd,{values:s.map(a=>a.speed),color:"#3fb950",width:200,height:30})]})]}),c.jsxs(qe,{title:"Fault record",children:[t.fault_history.length===0?c.jsxs("p",{className:"muted",children:["No fault has fired yet."," ",e.fault_windows.length>0&&`${e.fault_windows.length} declared for this scenario.`]}):c.jsxs("table",{className:"table compact",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"fault"}),c.jsx("th",{children:"window"}),c.jsx("th",{children:"flagged"}),c.jsx("th",{children:"latency"})]})}),c.jsx("tbody",{children:t.fault_history.map((a,o)=>c.jsxs("tr",{children:[c.jsxs("td",{children:[a.fault_type.replace(/_/g," ").toLowerCase(),c.jsx("br",{}),c.jsx("span",{className:"muted small",children:a.target})]}),c.jsxs("td",{children:[ge(a.onset,0),"–",a.end===null?"now":ge(a.end,0)," s"]}),c.jsx("td",{className:a.detected?"ok-text":"warn-text",children:a.detected?`${ge(a.detection_time,1)} s`:"not detected"}),c.jsx("td",{children:a.detection_latency===null?"–":`${ge(a.detection_latency,2)} s`})]},o))})]}),c.jsx("p",{className:"caveat",children:"The window is the injection truth. The flag is the monitor's own claim, and the gap between them is the detection latency — a fault with no flag was simply never caught."})]})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zf="169",Sy=0,wp=1,My=2,Gv=1,Ey=2,oi=3,Zi=0,cn=1,Zn=2,$i=0,vs=1,Tp=2,Ap=3,Cp=4,wy=5,mr=100,Ty=101,Ay=102,Cy=103,by=104,Ry=200,Py=201,Ny=202,Ly=203,id=204,rd=205,Dy=206,Iy=207,Uy=208,Fy=209,Oy=210,ky=211,By=212,zy=213,jy=214,sd=0,ad=1,od=2,bs=3,ld=4,cd=5,ud=6,dd=7,Wv=0,Hy=1,Vy=2,Yi=0,Gy=1,Wy=2,Xy=3,$y=4,Yy=5,qy=6,Ky=7,Xv=300,Rs=301,Ps=302,fd=303,hd=304,Zl=306,pd=1e3,Sr=1001,md=1002,bn=1003,Zy=1004,ho=1005,zn=1006,Pc=1007,Mr=1008,yi=1009,$v=1010,Yv=1011,Da=1012,jf=1013,Pr=1014,fi=1015,za=1016,Hf=1017,Vf=1018,Ns=1020,qv=35902,Kv=1021,Zv=1022,Hn=1023,Qv=1024,Jv=1025,_s=1026,Ls=1027,e_=1028,Gf=1029,t_=1030,Wf=1031,Xf=1033,Ko=33776,Zo=33777,Qo=33778,Jo=33779,gd=35840,vd=35841,_d=35842,xd=35843,yd=36196,Sd=37492,Md=37496,Ed=37808,wd=37809,Td=37810,Ad=37811,Cd=37812,bd=37813,Rd=37814,Pd=37815,Nd=37816,Ld=37817,Dd=37818,Id=37819,Ud=37820,Fd=37821,el=36492,Od=36494,kd=36495,n_=36283,Bd=36284,zd=36285,jd=36286,Qy=3200,Jy=3201,i_=0,eS=1,Ui="",Yn="srgb",nr="srgb-linear",$f="display-p3",Ql="display-p3-linear",Cl="linear",ut="srgb",bl="rec709",Rl="p3",Or=7680,bp=519,tS=512,nS=513,iS=514,r_=515,rS=516,sS=517,aS=518,oS=519,Rp=35044,Pp="300 es",hi=2e3,Pl=2001;class Os{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nc=Math.PI/180,Hd=180/Math.PI;function ja(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[t&255]+Ht[t>>8&255]+Ht[t>>16&255]+Ht[t>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[n&63|128]+Ht[n>>8&255]+"-"+Ht[n>>16&255]+Ht[n>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function rn(t,e,n){return Math.max(e,Math.min(n,t))}function lS(t,e){return(t%e+e)%e}function Lc(t,e,n){return(1-n)*t+n*e}function $s(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function tn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Je{constructor(e=0,n=0){Je.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,n,i,r,s,a,o,l,u){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u)}set(e,n,i,r,s,a,o,l,u){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],h=i[4],d=i[7],p=i[2],g=i[5],_=i[8],v=r[0],m=r[3],f=r[6],x=r[1],y=r[4],M=r[7],L=r[2],E=r[5],A=r[8];return s[0]=a*v+o*x+l*L,s[3]=a*m+o*y+l*E,s[6]=a*f+o*M+l*A,s[1]=u*v+h*x+d*L,s[4]=u*m+h*y+d*E,s[7]=u*f+h*M+d*A,s[2]=p*v+g*x+_*L,s[5]=p*m+g*y+_*E,s[8]=p*f+g*M+_*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],h=e[8];return n*a*h-n*o*u-i*s*h+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],h=e[8],d=h*a-o*u,p=o*l-h*s,g=u*s-a*l,_=n*d+i*p+r*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=d*v,e[1]=(r*u-h*i)*v,e[2]=(o*i-r*a)*v,e[3]=p*v,e[4]=(h*n-r*l)*v,e[5]=(r*s-o*n)*v,e[6]=g*v,e[7]=(i*l-u*n)*v,e[8]=(a*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Dc.makeScale(e,n)),this}rotate(e){return this.premultiply(Dc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Dc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Dc=new He;function s_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Nl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function cS(){const t=Nl("canvas");return t.style.display="block",t}const Np={};function tl(t){t in Np||(Np[t]=!0,console.warn(t))}function uS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function dS(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function fS(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Lp=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Dp=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ys={[nr]:{transfer:Cl,primaries:bl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Yn]:{transfer:ut,primaries:bl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Ql]:{transfer:Cl,primaries:Rl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Dp),fromReference:t=>t.applyMatrix3(Lp)},[$f]:{transfer:ut,primaries:Rl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Dp),fromReference:t=>t.applyMatrix3(Lp).convertLinearToSRGB()}},hS=new Set([nr,Ql]),it={enabled:!0,_workingColorSpace:nr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!hS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Ys[e].toReference,r=Ys[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ys[t].primaries},getTransfer:function(t){return t===Ui?Cl:Ys[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Ys[e].luminanceCoefficients)}};function xs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ic(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let kr;class pS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{kr===void 0&&(kr=Nl("canvas")),kr.width=e.width,kr.height=e.height;const i=kr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=kr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Nl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=xs(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(xs(n[i]/255)*255):n[i]=xs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let mS=0;class a_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mS++}),this.uuid=ja(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Uc(r[a].image)):s.push(Uc(r[a]))}else s=Uc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Uc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?pS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gS=0;class un extends Os{constructor(e=un.DEFAULT_IMAGE,n=un.DEFAULT_MAPPING,i=Sr,r=Sr,s=zn,a=Mr,o=Hn,l=yi,u=un.DEFAULT_ANISOTROPY,h=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gS++}),this.uuid=ja(),this.name="",this.source=new a_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pd:e.x=e.x-Math.floor(e.x);break;case Sr:e.x=e.x<0?0:1;break;case md:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pd:e.y=e.y-Math.floor(e.y);break;case Sr:e.y=e.y<0?0:1;break;case md:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=Xv;un.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,n=0,i=0,r=1){xt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],h=l[4],d=l[8],p=l[1],g=l[5],_=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(h-p)<.01&&Math.abs(d-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(d+v)<.1&&Math.abs(_+m)<.1&&Math.abs(u+g+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(u+1)/2,M=(g+1)/2,L=(f+1)/2,E=(h+p)/4,A=(d+v)/4,R=(_+m)/4;return y>M&&y>L?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=E/i,s=A/i):M>L?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=E/r,s=R/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=A/s,r=R/s),this.set(i,r,s,n),this}let x=Math.sqrt((m-_)*(m-_)+(d-v)*(d-v)+(p-h)*(p-h));return Math.abs(x)<.001&&(x=1),this.x=(m-_)/x,this.y=(d-v)/x,this.z=(p-h)/x,this.w=Math.acos((u+g+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vS extends Os{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new xt(0,0,e,n),this.scissorTest=!1,this.viewport=new xt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new un(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new a_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nr extends vS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class o_ extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _S extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ha{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],u=i[r+1],h=i[r+2],d=i[r+3];const p=s[a+0],g=s[a+1],_=s[a+2],v=s[a+3];if(o===0){e[n+0]=l,e[n+1]=u,e[n+2]=h,e[n+3]=d;return}if(o===1){e[n+0]=p,e[n+1]=g,e[n+2]=_,e[n+3]=v;return}if(d!==v||l!==p||u!==g||h!==_){let m=1-o;const f=l*p+u*g+h*_+d*v,x=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const L=Math.sqrt(y),E=Math.atan2(L,f*x);m=Math.sin(m*E)/L,o=Math.sin(o*E)/L}const M=o*x;if(l=l*m+p*M,u=u*m+g*M,h=h*m+_*M,d=d*m+v*M,m===1-o){const L=1/Math.sqrt(l*l+u*u+h*h+d*d);l*=L,u*=L,h*=L,d*=L}}e[n]=l,e[n+1]=u,e[n+2]=h,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],h=i[r+3],d=s[a],p=s[a+1],g=s[a+2],_=s[a+3];return e[n]=o*_+h*d+l*g-u*p,e[n+1]=l*_+h*p+u*d-o*g,e[n+2]=u*_+h*g+o*p-l*d,e[n+3]=h*_-o*d-l*p-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),h=o(r/2),d=o(s/2),p=l(i/2),g=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=p*h*d+u*g*_,this._y=u*g*d-p*h*_,this._z=u*h*_+p*g*d,this._w=u*h*d-p*g*_;break;case"YXZ":this._x=p*h*d+u*g*_,this._y=u*g*d-p*h*_,this._z=u*h*_-p*g*d,this._w=u*h*d+p*g*_;break;case"ZXY":this._x=p*h*d-u*g*_,this._y=u*g*d+p*h*_,this._z=u*h*_+p*g*d,this._w=u*h*d-p*g*_;break;case"ZYX":this._x=p*h*d-u*g*_,this._y=u*g*d+p*h*_,this._z=u*h*_-p*g*d,this._w=u*h*d+p*g*_;break;case"YZX":this._x=p*h*d+u*g*_,this._y=u*g*d+p*h*_,this._z=u*h*_-p*g*d,this._w=u*h*d-p*g*_;break;case"XZY":this._x=p*h*d-u*g*_,this._y=u*g*d-p*h*_,this._z=u*h*_+p*g*d,this._w=u*h*d+p*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],u=n[2],h=n[6],d=n[10],p=i+o+d;if(p>0){const g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(h-l)*g,this._y=(s-u)*g,this._z=(a-r)*g}else if(i>o&&i>d){const g=2*Math.sqrt(1+i-o-d);this._w=(h-l)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+u)/g}else if(o>d){const g=2*Math.sqrt(1+o-i-d);this._w=(s-u)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(l+h)/g}else{const g=2*Math.sqrt(1+d-i-o);this._w=(a-r)/g,this._x=(s+u)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,u=n._z,h=n._w;return this._x=i*h+a*o+r*u-s*l,this._y=r*h+a*l+s*o-i*u,this._z=s*h+a*u+i*l-r*o,this._w=a*h-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const g=1-n;return this._w=g*a+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),h=Math.atan2(u,o),d=Math.sin((1-n)*h)/u,p=Math.sin(n*h)/u;return this._w=a*d+this._w*p,this._x=i*d+this._x*p,this._y=r*d+this._y*p,this._z=s*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,n=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ip.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ip.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),h=2*(o*n-s*r),d=2*(s*i-a*n);return this.x=n+l*u+a*d-o*h,this.y=i+l*h+o*u-s*d,this.z=r+l*d+s*h-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Fc.copy(this).projectOnVector(e),this.sub(Fc)}reflect(e){return this.sub(Fc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fc=new V,Ip=new Ha;class Va{constructor(e=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(In.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(In.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=In.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,In):In.fromBufferAttribute(s,a),In.applyMatrix4(e.matrixWorld),this.expandByPoint(In);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),po.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),po.copy(i.boundingBox)),po.applyMatrix4(e.matrixWorld),this.union(po)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,In),In.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qs),mo.subVectors(this.max,qs),Br.subVectors(e.a,qs),zr.subVectors(e.b,qs),jr.subVectors(e.c,qs),wi.subVectors(zr,Br),Ti.subVectors(jr,zr),rr.subVectors(Br,jr);let n=[0,-wi.z,wi.y,0,-Ti.z,Ti.y,0,-rr.z,rr.y,wi.z,0,-wi.x,Ti.z,0,-Ti.x,rr.z,0,-rr.x,-wi.y,wi.x,0,-Ti.y,Ti.x,0,-rr.y,rr.x,0];return!Oc(n,Br,zr,jr,mo)||(n=[1,0,0,0,1,0,0,0,1],!Oc(n,Br,zr,jr,mo))?!1:(go.crossVectors(wi,Ti),n=[go.x,go.y,go.z],Oc(n,Br,zr,jr,mo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,In).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(In).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ni=[new V,new V,new V,new V,new V,new V,new V,new V],In=new V,po=new Va,Br=new V,zr=new V,jr=new V,wi=new V,Ti=new V,rr=new V,qs=new V,mo=new V,go=new V,sr=new V;function Oc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){sr.fromArray(t,s);const o=r.x*Math.abs(sr.x)+r.y*Math.abs(sr.y)+r.z*Math.abs(sr.z),l=e.dot(sr),u=n.dot(sr),h=i.dot(sr);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>o)return!1}return!0}const xS=new Va,Ks=new V,kc=new V;class Ga{constructor(e=new V,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):xS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ks.subVectors(e,this.center);const n=Ks.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ks,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ks.copy(e.center).add(kc)),this.expandByPoint(Ks.copy(e.center).sub(kc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ii=new V,Bc=new V,vo=new V,Ai=new V,zc=new V,_o=new V,jc=new V;class Yf{constructor(e=new V,n=new V(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ii)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ii.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ii.copy(this.origin).addScaledVector(this.direction,n),ii.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Bc.copy(e).add(n).multiplyScalar(.5),vo.copy(n).sub(e).normalize(),Ai.copy(this.origin).sub(Bc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(vo),o=Ai.dot(this.direction),l=-Ai.dot(vo),u=Ai.lengthSq(),h=Math.abs(1-a*a);let d,p,g,_;if(h>0)if(d=a*l-o,p=a*o-l,_=s*h,d>=0)if(p>=-_)if(p<=_){const v=1/h;d*=v,p*=v,g=d*(d+a*p+2*o)+p*(a*d+p+2*l)+u}else p=s,d=Math.max(0,-(a*p+o)),g=-d*d+p*(p+2*l)+u;else p=-s,d=Math.max(0,-(a*p+o)),g=-d*d+p*(p+2*l)+u;else p<=-_?(d=Math.max(0,-(-a*s+o)),p=d>0?-s:Math.min(Math.max(-s,-l),s),g=-d*d+p*(p+2*l)+u):p<=_?(d=0,p=Math.min(Math.max(-s,-l),s),g=p*(p+2*l)+u):(d=Math.max(0,-(a*s+o)),p=d>0?s:Math.min(Math.max(-s,-l),s),g=-d*d+p*(p+2*l)+u);else p=a>0?-s:s,d=Math.max(0,-(a*p+o)),g=-d*d+p*(p+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Bc).addScaledVector(vo,p),g}intersectSphere(e,n){ii.subVectors(e.center,this.origin);const i=ii.dot(this.direction),r=ii.dot(ii)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const u=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return u>=0?(i=(e.min.x-p.x)*u,r=(e.max.x-p.x)*u):(i=(e.max.x-p.x)*u,r=(e.min.x-p.x)*u),h>=0?(s=(e.min.y-p.y)*h,a=(e.max.y-p.y)*h):(s=(e.max.y-p.y)*h,a=(e.min.y-p.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-p.z)*d,l=(e.max.z-p.z)*d):(o=(e.max.z-p.z)*d,l=(e.min.z-p.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ii)!==null}intersectTriangle(e,n,i,r,s){zc.subVectors(n,e),_o.subVectors(i,e),jc.crossVectors(zc,_o);let a=this.direction.dot(jc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ai.subVectors(this.origin,e);const l=o*this.direction.dot(_o.crossVectors(Ai,_o));if(l<0)return null;const u=o*this.direction.dot(zc.cross(Ai));if(u<0||l+u>a)return null;const h=-o*Ai.dot(jc);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,n,i,r,s,a,o,l,u,h,d,p,g,_,v,m){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u,h,d,p,g,_,v,m)}set(e,n,i,r,s,a,o,l,u,h,d,p,g,_,v,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=u,f[6]=h,f[10]=d,f[14]=p,f[3]=g,f[7]=_,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Hr.setFromMatrixColumn(e,0).length(),s=1/Hr.setFromMatrixColumn(e,1).length(),a=1/Hr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const p=a*h,g=a*d,_=o*h,v=o*d;n[0]=l*h,n[4]=-l*d,n[8]=u,n[1]=g+_*u,n[5]=p-v*u,n[9]=-o*l,n[2]=v-p*u,n[6]=_+g*u,n[10]=a*l}else if(e.order==="YXZ"){const p=l*h,g=l*d,_=u*h,v=u*d;n[0]=p+v*o,n[4]=_*o-g,n[8]=a*u,n[1]=a*d,n[5]=a*h,n[9]=-o,n[2]=g*o-_,n[6]=v+p*o,n[10]=a*l}else if(e.order==="ZXY"){const p=l*h,g=l*d,_=u*h,v=u*d;n[0]=p-v*o,n[4]=-a*d,n[8]=_+g*o,n[1]=g+_*o,n[5]=a*h,n[9]=v-p*o,n[2]=-a*u,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const p=a*h,g=a*d,_=o*h,v=o*d;n[0]=l*h,n[4]=_*u-g,n[8]=p*u+v,n[1]=l*d,n[5]=v*u+p,n[9]=g*u-_,n[2]=-u,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const p=a*l,g=a*u,_=o*l,v=o*u;n[0]=l*h,n[4]=v-p*d,n[8]=_*d+g,n[1]=d,n[5]=a*h,n[9]=-o*h,n[2]=-u*h,n[6]=g*d+_,n[10]=p-v*d}else if(e.order==="XZY"){const p=a*l,g=a*u,_=o*l,v=o*u;n[0]=l*h,n[4]=-d,n[8]=u*h,n[1]=p*d+v,n[5]=a*h,n[9]=g*d-_,n[2]=_*d-g,n[6]=o*h,n[10]=v*d+p}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yS,e,SS)}lookAt(e,n,i){const r=this.elements;return hn.subVectors(e,n),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),Ci.crossVectors(i,hn),Ci.lengthSq()===0&&(Math.abs(i.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),Ci.crossVectors(i,hn)),Ci.normalize(),xo.crossVectors(hn,Ci),r[0]=Ci.x,r[4]=xo.x,r[8]=hn.x,r[1]=Ci.y,r[5]=xo.y,r[9]=hn.y,r[2]=Ci.z,r[6]=xo.z,r[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],h=i[1],d=i[5],p=i[9],g=i[13],_=i[2],v=i[6],m=i[10],f=i[14],x=i[3],y=i[7],M=i[11],L=i[15],E=r[0],A=r[4],R=r[8],z=r[12],S=r[1],w=r[5],I=r[9],b=r[13],j=r[2],$=r[6],B=r[10],J=r[14],N=r[3],q=r[7],Z=r[11],ie=r[15];return s[0]=a*E+o*S+l*j+u*N,s[4]=a*A+o*w+l*$+u*q,s[8]=a*R+o*I+l*B+u*Z,s[12]=a*z+o*b+l*J+u*ie,s[1]=h*E+d*S+p*j+g*N,s[5]=h*A+d*w+p*$+g*q,s[9]=h*R+d*I+p*B+g*Z,s[13]=h*z+d*b+p*J+g*ie,s[2]=_*E+v*S+m*j+f*N,s[6]=_*A+v*w+m*$+f*q,s[10]=_*R+v*I+m*B+f*Z,s[14]=_*z+v*b+m*J+f*ie,s[3]=x*E+y*S+M*j+L*N,s[7]=x*A+y*w+M*$+L*q,s[11]=x*R+y*I+M*B+L*Z,s[15]=x*z+y*b+M*J+L*ie,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],h=e[2],d=e[6],p=e[10],g=e[14],_=e[3],v=e[7],m=e[11],f=e[15];return _*(+s*l*d-r*u*d-s*o*p+i*u*p+r*o*g-i*l*g)+v*(+n*l*g-n*u*p+s*a*p-r*a*g+r*u*h-s*l*h)+m*(+n*u*d-n*o*g-s*a*d+i*a*g+s*o*h-i*u*h)+f*(-r*o*h-n*l*d+n*o*p+r*a*d-i*a*p+i*l*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],h=e[8],d=e[9],p=e[10],g=e[11],_=e[12],v=e[13],m=e[14],f=e[15],x=d*m*u-v*p*u+v*l*g-o*m*g-d*l*f+o*p*f,y=_*p*u-h*m*u-_*l*g+a*m*g+h*l*f-a*p*f,M=h*v*u-_*d*u+_*o*g-a*v*g-h*o*f+a*d*f,L=_*d*l-h*v*l-_*o*p+a*v*p+h*o*m-a*d*m,E=n*x+i*y+r*M+s*L;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=x*A,e[1]=(v*p*s-d*m*s-v*r*g+i*m*g+d*r*f-i*p*f)*A,e[2]=(o*m*s-v*l*s+v*r*u-i*m*u-o*r*f+i*l*f)*A,e[3]=(d*l*s-o*p*s-d*r*u+i*p*u+o*r*g-i*l*g)*A,e[4]=y*A,e[5]=(h*m*s-_*p*s+_*r*g-n*m*g-h*r*f+n*p*f)*A,e[6]=(_*l*s-a*m*s-_*r*u+n*m*u+a*r*f-n*l*f)*A,e[7]=(a*p*s-h*l*s+h*r*u-n*p*u-a*r*g+n*l*g)*A,e[8]=M*A,e[9]=(_*d*s-h*v*s-_*i*g+n*v*g+h*i*f-n*d*f)*A,e[10]=(a*v*s-_*o*s+_*i*u-n*v*u-a*i*f+n*o*f)*A,e[11]=(h*o*s-a*d*s-h*i*u+n*d*u+a*i*g-n*o*g)*A,e[12]=L*A,e[13]=(h*v*r-_*d*r+_*i*p-n*v*p-h*i*m+n*d*m)*A,e[14]=(_*o*r-a*v*r-_*i*l+n*v*l+a*i*m-n*o*m)*A,e[15]=(a*d*r-h*o*r+h*i*l-n*d*l-a*i*p+n*o*p)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,h=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,h*o+i,h*l-r*a,0,u*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,u=s+s,h=a+a,d=o+o,p=s*u,g=s*h,_=s*d,v=a*h,m=a*d,f=o*d,x=l*u,y=l*h,M=l*d,L=i.x,E=i.y,A=i.z;return r[0]=(1-(v+f))*L,r[1]=(g+M)*L,r[2]=(_-y)*L,r[3]=0,r[4]=(g-M)*E,r[5]=(1-(p+f))*E,r[6]=(m+x)*E,r[7]=0,r[8]=(_+y)*A,r[9]=(m-x)*A,r[10]=(1-(p+v))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Hr.set(r[0],r[1],r[2]).length();const a=Hr.set(r[4],r[5],r[6]).length(),o=Hr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Un.copy(this);const u=1/s,h=1/a,d=1/o;return Un.elements[0]*=u,Un.elements[1]*=u,Un.elements[2]*=u,Un.elements[4]*=h,Un.elements[5]*=h,Un.elements[6]*=h,Un.elements[8]*=d,Un.elements[9]*=d,Un.elements[10]*=d,n.setFromRotationMatrix(Un),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=hi){const l=this.elements,u=2*s/(n-e),h=2*s/(i-r),d=(n+e)/(n-e),p=(i+r)/(i-r);let g,_;if(o===hi)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Pl)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=hi){const l=this.elements,u=1/(n-e),h=1/(i-r),d=1/(a-s),p=(n+e)*u,g=(i+r)*h;let _,v;if(o===hi)_=(a+s)*d,v=-2*d;else if(o===Pl)_=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Hr=new V,Un=new ht,yS=new V(0,0,0),SS=new V(1,1,1),Ci=new V,xo=new V,hn=new V,Up=new ht,Fp=new Ha;class ei{constructor(e=0,n=0,i=0,r=ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],h=r[9],d=r[2],p=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,u),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(rn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-rn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Up.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Up,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Fp.setFromEuler(this),this.setFromQuaternion(Fp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ei.DEFAULT_ORDER="XYZ";class l_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let MS=0;const Op=new V,Vr=new Ha,ri=new ht,yo=new V,Zs=new V,ES=new V,wS=new Ha,kp=new V(1,0,0),Bp=new V(0,1,0),zp=new V(0,0,1),jp={type:"added"},TS={type:"removed"},Gr={type:"childadded",child:null},Hc={type:"childremoved",child:null};class Rt extends Os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:MS++}),this.uuid=ja(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new V,n=new ei,i=new Ha,r=new V(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new He}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new l_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Vr.setFromAxisAngle(e,n),this.quaternion.multiply(Vr),this}rotateOnWorldAxis(e,n){return Vr.setFromAxisAngle(e,n),this.quaternion.premultiply(Vr),this}rotateX(e){return this.rotateOnAxis(kp,e)}rotateY(e){return this.rotateOnAxis(Bp,e)}rotateZ(e){return this.rotateOnAxis(zp,e)}translateOnAxis(e,n){return Op.copy(e).applyQuaternion(this.quaternion),this.position.add(Op.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(kp,e)}translateY(e){return this.translateOnAxis(Bp,e)}translateZ(e){return this.translateOnAxis(zp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?yo.copy(e):yo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(Zs,yo,this.up):ri.lookAt(yo,Zs,this.up),this.quaternion.setFromRotationMatrix(ri),r&&(ri.extractRotation(r.matrixWorld),Vr.setFromRotationMatrix(ri),this.quaternion.premultiply(Vr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jp),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(TS),Hc.child=e,this.dispatchEvent(Hc),Hc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jp),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,e,ES),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,wS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),h=a(e.images),d=a(e.shapes),p=a(e.skeletons),g=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),p.length>0&&(i.skeletons=p),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const u in o){const h=o[u];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Rt.DEFAULT_UP=new V(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fn=new V,si=new V,Vc=new V,ai=new V,Wr=new V,Xr=new V,Hp=new V,Gc=new V,Wc=new V,Xc=new V,$c=new xt,Yc=new xt,qc=new xt;class jn{constructor(e=new V,n=new V,i=new V){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Fn.subVectors(e,n),r.cross(Fn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Fn.subVectors(r,n),si.subVectors(i,n),Vc.subVectors(e,n);const a=Fn.dot(Fn),o=Fn.dot(si),l=Fn.dot(Vc),u=si.dot(si),h=si.dot(Vc),d=a*u-o*o;if(d===0)return s.set(0,0,0),null;const p=1/d,g=(u*l-o*h)*p,_=(a*h-o*l)*p;return s.set(1-g-_,_,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ai.x),l.addScaledVector(a,ai.y),l.addScaledVector(o,ai.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return $c.setScalar(0),Yc.setScalar(0),qc.setScalar(0),$c.fromBufferAttribute(e,n),Yc.fromBufferAttribute(e,i),qc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector($c,s.x),a.addScaledVector(Yc,s.y),a.addScaledVector(qc,s.z),a}static isFrontFacing(e,n,i,r){return Fn.subVectors(i,n),si.subVectors(e,n),Fn.cross(si).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Fn.cross(si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return jn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return jn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Wr.subVectors(r,i),Xr.subVectors(s,i),Gc.subVectors(e,i);const l=Wr.dot(Gc),u=Xr.dot(Gc);if(l<=0&&u<=0)return n.copy(i);Wc.subVectors(e,r);const h=Wr.dot(Wc),d=Xr.dot(Wc);if(h>=0&&d<=h)return n.copy(r);const p=l*d-h*u;if(p<=0&&l>=0&&h<=0)return a=l/(l-h),n.copy(i).addScaledVector(Wr,a);Xc.subVectors(e,s);const g=Wr.dot(Xc),_=Xr.dot(Xc);if(_>=0&&g<=_)return n.copy(s);const v=g*u-l*_;if(v<=0&&u>=0&&_<=0)return o=u/(u-_),n.copy(i).addScaledVector(Xr,o);const m=h*_-g*d;if(m<=0&&d-h>=0&&g-_>=0)return Hp.subVectors(s,r),o=(d-h)/(d-h+(g-_)),n.copy(r).addScaledVector(Hp,o);const f=1/(m+v+p);return a=v*f,o=p*f,n.copy(i).addScaledVector(Wr,a).addScaledVector(Xr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const c_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},So={h:0,s:0,l:0};function Kc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class $e{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=it.workingColorSpace){return this.r=e,this.g=n,this.b=i,it.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=it.workingColorSpace){if(e=lS(e,1),n=rn(n,0,1),i=rn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Kc(a,s,e+1/3),this.g=Kc(a,s,e),this.b=Kc(a,s,e-1/3)}return it.toWorkingColorSpace(this,r),this}setStyle(e,n=Yn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Yn){const i=c_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xs(e.r),this.g=xs(e.g),this.b=xs(e.b),this}copyLinearToSRGB(e){return this.r=Ic(e.r),this.g=Ic(e.g),this.b=Ic(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yn){return it.fromWorkingColorSpace(Vt.copy(this),e),Math.round(rn(Vt.r*255,0,255))*65536+Math.round(rn(Vt.g*255,0,255))*256+Math.round(rn(Vt.b*255,0,255))}getHexString(e=Yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=it.workingColorSpace){it.fromWorkingColorSpace(Vt.copy(this),n);const i=Vt.r,r=Vt.g,s=Vt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const h=(o+a)/2;if(o===a)l=0,u=0;else{const d=a-o;switch(u=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=h,e}getRGB(e,n=it.workingColorSpace){return it.fromWorkingColorSpace(Vt.copy(this),n),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=Yn){it.fromWorkingColorSpace(Vt.copy(this),e);const n=Vt.r,i=Vt.g,r=Vt.b;return e!==Yn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+n,bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(bi),e.getHSL(So);const i=Lc(bi.h,So.h,n),r=Lc(bi.s,So.s,n),s=Lc(bi.l,So.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new $e;$e.NAMES=c_;let AS=0;class Ir extends Os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:AS++}),this.uuid=ja(),this.name="",this.type="Material",this.blending=vs,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=id,this.blendDst=rd,this.blendEquation=mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Or,this.stencilZFail=Or,this.stencilZPass=Or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==vs&&(i.blending=this.blending),this.side!==Zi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==id&&(i.blendSrc=this.blendSrc),this.blendDst!==rd&&(i.blendDst=this.blendDst),this.blendEquation!==mr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==bs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Or&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Or&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Or&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class gr extends Ir{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=Wv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new V,Mo=new Je;class _n{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Rp,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Mo.fromBufferAttribute(this,n),Mo.applyMatrix3(e),this.setXY(n,Mo.x,Mo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix3(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix4(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyNormalMatrix(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.transformDirection(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=$s(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=tn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=$s(n,this.array)),n}setX(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=$s(n,this.array)),n}setY(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=$s(n,this.array)),n}setZ(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=$s(n,this.array)),n}setW(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array),r=tn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array),r=tn(r,this.array),s=tn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rp&&(e.usage=this.usage),e}}class u_ extends _n{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class d_ extends _n{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class kt extends _n{constructor(e,n,i){super(new Float32Array(e),n,i)}}let CS=0;const En=new ht,Zc=new Rt,$r=new V,pn=new Va,Qs=new Va,Lt=new V;class qt extends Os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:CS++}),this.uuid=ja(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(s_(e)?d_:u_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,n,i){return En.makeTranslation(e,n,i),this.applyMatrix4(En),this}scale(e,n,i){return En.makeScale(e,n,i),this.applyMatrix4(En),this}lookAt(e){return Zc.lookAt(e),Zc.updateMatrix(),this.applyMatrix4(Zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($r).negate(),this.translate($r.x,$r.y,$r.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new kt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Va);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];pn.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ga);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Qs.setFromBufferAttribute(o),this.morphTargetsRelative?(Lt.addVectors(pn.min,Qs.min),pn.expandByPoint(Lt),Lt.addVectors(pn.max,Qs.max),pn.expandByPoint(Lt)):(pn.expandByPoint(Qs.min),pn.expandByPoint(Qs.max))}pn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Lt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Lt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)Lt.fromBufferAttribute(o,u),l&&($r.fromBufferAttribute(e,u),Lt.add($r)),r=Math.max(r,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _n(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<i.count;R++)o[R]=new V,l[R]=new V;const u=new V,h=new V,d=new V,p=new Je,g=new Je,_=new Je,v=new V,m=new V;function f(R,z,S){u.fromBufferAttribute(i,R),h.fromBufferAttribute(i,z),d.fromBufferAttribute(i,S),p.fromBufferAttribute(s,R),g.fromBufferAttribute(s,z),_.fromBufferAttribute(s,S),h.sub(u),d.sub(u),g.sub(p),_.sub(p);const w=1/(g.x*_.y-_.x*g.y);isFinite(w)&&(v.copy(h).multiplyScalar(_.y).addScaledVector(d,-g.y).multiplyScalar(w),m.copy(d).multiplyScalar(g.x).addScaledVector(h,-_.x).multiplyScalar(w),o[R].add(v),o[z].add(v),o[S].add(v),l[R].add(m),l[z].add(m),l[S].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let R=0,z=x.length;R<z;++R){const S=x[R],w=S.start,I=S.count;for(let b=w,j=w+I;b<j;b+=3)f(e.getX(b+0),e.getX(b+1),e.getX(b+2))}const y=new V,M=new V,L=new V,E=new V;function A(R){L.fromBufferAttribute(r,R),E.copy(L);const z=o[R];y.copy(z),y.sub(L.multiplyScalar(L.dot(z))).normalize(),M.crossVectors(E,z);const w=M.dot(l[R])<0?-1:1;a.setXYZW(R,y.x,y.y,y.z,w)}for(let R=0,z=x.length;R<z;++R){const S=x[R],w=S.start,I=S.count;for(let b=w,j=w+I;b<j;b+=3)A(e.getX(b+0)),A(e.getX(b+1)),A(e.getX(b+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new _n(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let p=0,g=i.count;p<g;p++)i.setXYZ(p,0,0,0);const r=new V,s=new V,a=new V,o=new V,l=new V,u=new V,h=new V,d=new V;if(e)for(let p=0,g=e.count;p<g;p+=3){const _=e.getX(p+0),v=e.getX(p+1),m=e.getX(p+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,v),a.fromBufferAttribute(n,m),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,m),o.add(h),l.add(h),u.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let p=0,g=n.count;p<g;p+=3)r.fromBufferAttribute(n,p+0),s.fromBufferAttribute(n,p+1),a.fromBufferAttribute(n,p+2),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Lt.fromBufferAttribute(e,n),Lt.normalize(),e.setXYZ(n,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(o,l){const u=o.array,h=o.itemSize,d=o.normalized,p=new u.constructor(l.length*h);let g=0,_=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?g=l[v]*o.data.stride+o.offset:g=l[v]*h;for(let f=0;f<h;f++)p[_++]=u[g++]}return new _n(p,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new qt,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let h=0,d=u.length;h<d;h++){const p=u[h],g=e(p,i);l.push(g)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],h=[];for(let d=0,p=u.length;d<p;d++){const g=u[d];h.push(g.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(n))}const s=e.morphAttributes;for(const u in s){const h=[],d=s[u];for(let p=0,g=d.length;p<g;p++)h.push(d[p].clone(n));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,h=a.length;u<h;u++){const d=a[u];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vp=new ht,ar=new Yf,Eo=new Ga,Gp=new V,wo=new V,To=new V,Ao=new V,Qc=new V,Co=new V,Wp=new V,bo=new V;class St extends Rt{constructor(e=new qt,n=new gr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Co.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const h=o[l],d=s[l];h!==0&&(Qc.fromBufferAttribute(d,e),a?Co.addScaledVector(Qc,h):Co.addScaledVector(Qc.sub(n),h))}n.add(Co)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Eo.copy(i.boundingSphere),Eo.applyMatrix4(s),ar.copy(e.ray).recast(e.near),!(Eo.containsPoint(ar.origin)===!1&&(ar.intersectSphere(Eo,Gp)===null||ar.origin.distanceToSquared(Gp)>(e.far-e.near)**2))&&(Vp.copy(s).invert(),ar.copy(e.ray).applyMatrix4(Vp),!(i.boundingBox!==null&&ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ar)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,p=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=p.length;_<v;_++){const m=p[_],f=a[m.materialIndex],x=Math.max(m.start,g.start),y=Math.min(o.count,Math.min(m.start+m.count,g.start+g.count));for(let M=x,L=y;M<L;M+=3){const E=o.getX(M),A=o.getX(M+1),R=o.getX(M+2);r=Ro(this,f,e,i,u,h,d,E,A,R),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,g.start),v=Math.min(o.count,g.start+g.count);for(let m=_,f=v;m<f;m+=3){const x=o.getX(m),y=o.getX(m+1),M=o.getX(m+2);r=Ro(this,a,e,i,u,h,d,x,y,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,v=p.length;_<v;_++){const m=p[_],f=a[m.materialIndex],x=Math.max(m.start,g.start),y=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let M=x,L=y;M<L;M+=3){const E=M,A=M+1,R=M+2;r=Ro(this,f,e,i,u,h,d,E,A,R),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,g.start),v=Math.min(l.count,g.start+g.count);for(let m=_,f=v;m<f;m+=3){const x=m,y=m+1,M=m+2;r=Ro(this,a,e,i,u,h,d,x,y,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function bS(t,e,n,i,r,s,a,o){let l;if(e.side===cn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Zi,o),l===null)return null;bo.copy(o),bo.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(bo);return u<n.near||u>n.far?null:{distance:u,point:bo.clone(),object:t}}function Ro(t,e,n,i,r,s,a,o,l,u){t.getVertexPosition(o,wo),t.getVertexPosition(l,To),t.getVertexPosition(u,Ao);const h=bS(t,e,n,i,wo,To,Ao,Wp);if(h){const d=new V;jn.getBarycoord(Wp,wo,To,Ao,d),r&&(h.uv=jn.getInterpolatedAttribute(r,o,l,u,d,new Je)),s&&(h.uv1=jn.getInterpolatedAttribute(s,o,l,u,d,new Je)),a&&(h.normal=jn.getInterpolatedAttribute(a,o,l,u,d,new V),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const p={a:o,b:l,c:u,normal:new V,materialIndex:0};jn.getNormal(wo,To,Ao,p.normal),h.face=p,h.barycoord=d}return h}class pi extends qt{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],h=[],d=[];let p=0,g=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new kt(u,3)),this.setAttribute("normal",new kt(h,3)),this.setAttribute("uv",new kt(d,2));function _(v,m,f,x,y,M,L,E,A,R,z){const S=M/A,w=L/R,I=M/2,b=L/2,j=E/2,$=A+1,B=R+1;let J=0,N=0;const q=new V;for(let Z=0;Z<B;Z++){const ie=Z*w-b;for(let ue=0;ue<$;ue++){const Ne=ue*S-I;q[v]=Ne*x,q[m]=ie*y,q[f]=j,u.push(q.x,q.y,q.z),q[v]=0,q[m]=0,q[f]=E>0?1:-1,h.push(q.x,q.y,q.z),d.push(ue/A),d.push(1-Z/R),J+=1}}for(let Z=0;Z<R;Z++)for(let ie=0;ie<A;ie++){const ue=p+ie+$*Z,Ne=p+ie+$*(Z+1),H=p+(ie+1)+$*(Z+1),te=p+(ie+1)+$*Z;l.push(ue,Ne,te),l.push(Ne,H,te),N+=6}o.addGroup(g,N,z),g+=N,p+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ds(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Xt(t){const e={};for(let n=0;n<t.length;n++){const i=Ds(t[n]);for(const r in i)e[r]=i[r]}return e}function RS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function f_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const PS={clone:Ds,merge:Xt};var NS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,LS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qi extends Ir{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=NS,this.fragmentShader=LS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ds(e.uniforms),this.uniformsGroups=RS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class h_ extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=hi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ri=new V,Xp=new Je,$p=new Je;class An extends h_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Hd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Nc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hd*2*Math.atan(Math.tan(Nc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z),Ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z)}getViewSize(e,n){return this.getViewBounds(e,Xp,$p),n.subVectors($p,Xp)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Nc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Yr=-90,qr=1;class DS extends Rt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new An(Yr,qr,e,n);r.layers=this.layers,this.add(r);const s=new An(Yr,qr,e,n);s.layers=this.layers,this.add(s);const a=new An(Yr,qr,e,n);a.layers=this.layers,this.add(a);const o=new An(Yr,qr,e,n);o.layers=this.layers,this.add(o);const l=new An(Yr,qr,e,n);l.layers=this.layers,this.add(l);const u=new An(Yr,qr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const u of n)this.remove(u);if(e===hi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Pl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,h]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(d,p,g),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class p_ extends un{constructor(e,n,i,r,s,a,o,l,u,h){e=e!==void 0?e:[],n=n!==void 0?n:Rs,super(e,n,i,r,s,a,o,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class IS extends Nr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new p_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:zn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new pi(5,5,5),s=new Qi({name:"CubemapFromEquirect",uniforms:Ds(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:$i});s.uniforms.tEquirect.value=n;const a=new St(r,s),o=n.minFilter;return n.minFilter===Mr&&(n.minFilter=zn),new DS(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const Jc=new V,US=new V,FS=new He;class hr{constructor(e=new V(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Jc.subVectors(i,n).cross(US.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Jc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||FS.getNormalMatrix(e),r=this.coplanarPoint(Jc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const or=new Ga,Po=new V;class qf{constructor(e=new hr,n=new hr,i=new hr,r=new hr,s=new hr,a=new hr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=hi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],u=r[4],h=r[5],d=r[6],p=r[7],g=r[8],_=r[9],v=r[10],m=r[11],f=r[12],x=r[13],y=r[14],M=r[15];if(i[0].setComponents(l-s,p-u,m-g,M-f).normalize(),i[1].setComponents(l+s,p+u,m+g,M+f).normalize(),i[2].setComponents(l+a,p+h,m+_,M+x).normalize(),i[3].setComponents(l-a,p-h,m-_,M-x).normalize(),i[4].setComponents(l-o,p-d,m-v,M-y).normalize(),n===hi)i[5].setComponents(l+o,p+d,m+v,M+y).normalize();else if(n===Pl)i[5].setComponents(o,d,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),or.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(or)}intersectsSprite(e){return or.center.set(0,0,0),or.radius=.7071067811865476,or.applyMatrix4(e.matrixWorld),this.intersectsSphere(or)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Po.x=r.normal.x>0?e.max.x:e.min.x,Po.y=r.normal.y>0?e.max.y:e.min.y,Po.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Po)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function m_(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function OS(t){const e=new WeakMap;function n(o,l){const u=o.array,h=o.usage,d=u.byteLength,p=t.createBuffer();t.bindBuffer(l,p),t.bufferData(l,u,h),o.onUploadCallback();let g;if(u instanceof Float32Array)g=t.FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?g=t.HALF_FLOAT:g=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=t.SHORT;else if(u instanceof Uint32Array)g=t.UNSIGNED_INT;else if(u instanceof Int32Array)g=t.INT;else if(u instanceof Int8Array)g=t.BYTE;else if(u instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,u){const h=l.array,d=l.updateRanges;if(t.bindBuffer(u,o),d.length===0)t.bufferSubData(u,0,h);else{d.sort((g,_)=>g.start-_.start);let p=0;for(let g=1;g<d.length;g++){const _=d[p],v=d[g];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++p,d[p]=v)}d.length=p+1;for(let g=0,_=d.length;g<_;g++){const v=d[g];t.bufferSubData(u,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,n(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:r,remove:s,update:a}}class Wa extends qt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),u=o+1,h=l+1,d=e/o,p=n/l,g=[],_=[],v=[],m=[];for(let f=0;f<h;f++){const x=f*p-a;for(let y=0;y<u;y++){const M=y*d-s;_.push(M,-x,0),v.push(0,0,1),m.push(y/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<o;x++){const y=x+u*f,M=x+u*(f+1),L=x+1+u*(f+1),E=x+1+u*f;g.push(y,M,E),g.push(M,L,E)}this.setIndex(g),this.setAttribute("position",new kt(_,3)),this.setAttribute("normal",new kt(v,3)),this.setAttribute("uv",new kt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wa(e.width,e.height,e.widthSegments,e.heightSegments)}}var kS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,BS=`#ifdef USE_ALPHAHASH
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
#endif`,zS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,HS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,VS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,GS=`#ifdef USE_AOMAP
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
#endif`,WS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,XS=`#ifdef USE_BATCHING
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
#endif`,$S=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,YS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,KS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ZS=`#ifdef USE_IRIDESCENCE
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
#endif`,QS=`#ifdef USE_BUMPMAP
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
#endif`,JS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,eM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,aM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,oM=`#define PI 3.141592653589793
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
} // validated`,lM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cM=`vec3 transformedNormal = objectNormal;
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
#endif`,uM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pM="gl_FragColor = linearToOutputTexel( gl_FragColor );",mM=`
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
}`,gM=`#ifdef USE_ENVMAP
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
#endif`,vM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_M=`#ifdef USE_ENVMAP
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
#endif`,xM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yM=`#ifdef USE_ENVMAP
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
#endif`,SM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,MM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,EM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,TM=`#ifdef USE_GRADIENTMAP
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
}`,AM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,CM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,RM=`uniform bool receiveShadow;
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
#endif`,PM=`#ifdef USE_ENVMAP
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
#endif`,NM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,LM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,DM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,IM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,UM=`PhysicalMaterial material;
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
#endif`,FM=`struct PhysicalMaterial {
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
}`,OM=`
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
#endif`,kM=`#if defined( RE_IndirectDiffuse )
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
#endif`,BM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,GM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,WM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,XM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$M=`#if defined( USE_POINTS_UV )
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
#endif`,YM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,KM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ZM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,QM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,JM=`#ifdef USE_MORPHTARGETS
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
#endif`,eE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,iE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,aE=`#ifdef USE_NORMALMAP
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
#endif`,oE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_E=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,SE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ME=`float getShadowMask() {
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
}`,EE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wE=`#ifdef USE_SKINNING
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
#endif`,TE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,AE=`#ifdef USE_SKINNING
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
#endif`,CE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,RE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,PE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,NE=`#ifdef USE_TRANSMISSION
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
#endif`,LE=`#ifdef USE_TRANSMISSION
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
#endif`,DE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,UE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const OE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kE=`uniform sampler2D t2D;
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
}`,BE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VE=`#include <common>
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
}`,GE=`#if DEPTH_PACKING == 3200
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
}`,WE=`#define DISTANCE
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
}`,XE=`#define DISTANCE
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
}`,$E=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,YE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qE=`uniform float scale;
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
}`,KE=`uniform vec3 diffuse;
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
}`,ZE=`#include <common>
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
}`,QE=`uniform vec3 diffuse;
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
}`,JE=`#define LAMBERT
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
}`,e1=`#define LAMBERT
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
}`,t1=`#define MATCAP
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
}`,n1=`#define MATCAP
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
}`,i1=`#define NORMAL
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
}`,r1=`#define NORMAL
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
}`,s1=`#define PHONG
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
}`,a1=`#define PHONG
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
}`,o1=`#define STANDARD
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
}`,l1=`#define STANDARD
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
}`,c1=`#define TOON
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
}`,u1=`#define TOON
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
}`,d1=`uniform float size;
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
}`,f1=`uniform vec3 diffuse;
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
}`,h1=`#include <common>
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
}`,p1=`uniform vec3 color;
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
}`,m1=`uniform float rotation;
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
}`,g1=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:kS,alphahash_pars_fragment:BS,alphamap_fragment:zS,alphamap_pars_fragment:jS,alphatest_fragment:HS,alphatest_pars_fragment:VS,aomap_fragment:GS,aomap_pars_fragment:WS,batching_pars_vertex:XS,batching_vertex:$S,begin_vertex:YS,beginnormal_vertex:qS,bsdfs:KS,iridescence_fragment:ZS,bumpmap_pars_fragment:QS,clipping_planes_fragment:JS,clipping_planes_pars_fragment:eM,clipping_planes_pars_vertex:tM,clipping_planes_vertex:nM,color_fragment:iM,color_pars_fragment:rM,color_pars_vertex:sM,color_vertex:aM,common:oM,cube_uv_reflection_fragment:lM,defaultnormal_vertex:cM,displacementmap_pars_vertex:uM,displacementmap_vertex:dM,emissivemap_fragment:fM,emissivemap_pars_fragment:hM,colorspace_fragment:pM,colorspace_pars_fragment:mM,envmap_fragment:gM,envmap_common_pars_fragment:vM,envmap_pars_fragment:_M,envmap_pars_vertex:xM,envmap_physical_pars_fragment:PM,envmap_vertex:yM,fog_vertex:SM,fog_pars_vertex:MM,fog_fragment:EM,fog_pars_fragment:wM,gradientmap_pars_fragment:TM,lightmap_pars_fragment:AM,lights_lambert_fragment:CM,lights_lambert_pars_fragment:bM,lights_pars_begin:RM,lights_toon_fragment:NM,lights_toon_pars_fragment:LM,lights_phong_fragment:DM,lights_phong_pars_fragment:IM,lights_physical_fragment:UM,lights_physical_pars_fragment:FM,lights_fragment_begin:OM,lights_fragment_maps:kM,lights_fragment_end:BM,logdepthbuf_fragment:zM,logdepthbuf_pars_fragment:jM,logdepthbuf_pars_vertex:HM,logdepthbuf_vertex:VM,map_fragment:GM,map_pars_fragment:WM,map_particle_fragment:XM,map_particle_pars_fragment:$M,metalnessmap_fragment:YM,metalnessmap_pars_fragment:qM,morphinstance_vertex:KM,morphcolor_vertex:ZM,morphnormal_vertex:QM,morphtarget_pars_vertex:JM,morphtarget_vertex:eE,normal_fragment_begin:tE,normal_fragment_maps:nE,normal_pars_fragment:iE,normal_pars_vertex:rE,normal_vertex:sE,normalmap_pars_fragment:aE,clearcoat_normal_fragment_begin:oE,clearcoat_normal_fragment_maps:lE,clearcoat_pars_fragment:cE,iridescence_pars_fragment:uE,opaque_fragment:dE,packing:fE,premultiplied_alpha_fragment:hE,project_vertex:pE,dithering_fragment:mE,dithering_pars_fragment:gE,roughnessmap_fragment:vE,roughnessmap_pars_fragment:_E,shadowmap_pars_fragment:xE,shadowmap_pars_vertex:yE,shadowmap_vertex:SE,shadowmask_pars_fragment:ME,skinbase_vertex:EE,skinning_pars_vertex:wE,skinning_vertex:TE,skinnormal_vertex:AE,specularmap_fragment:CE,specularmap_pars_fragment:bE,tonemapping_fragment:RE,tonemapping_pars_fragment:PE,transmission_fragment:NE,transmission_pars_fragment:LE,uv_pars_fragment:DE,uv_pars_vertex:IE,uv_vertex:UE,worldpos_vertex:FE,background_vert:OE,background_frag:kE,backgroundCube_vert:BE,backgroundCube_frag:zE,cube_vert:jE,cube_frag:HE,depth_vert:VE,depth_frag:GE,distanceRGBA_vert:WE,distanceRGBA_frag:XE,equirect_vert:$E,equirect_frag:YE,linedashed_vert:qE,linedashed_frag:KE,meshbasic_vert:ZE,meshbasic_frag:QE,meshlambert_vert:JE,meshlambert_frag:e1,meshmatcap_vert:t1,meshmatcap_frag:n1,meshnormal_vert:i1,meshnormal_frag:r1,meshphong_vert:s1,meshphong_frag:a1,meshphysical_vert:o1,meshphysical_frag:l1,meshtoon_vert:c1,meshtoon_frag:u1,points_vert:d1,points_frag:f1,shadow_vert:h1,shadow_frag:p1,sprite_vert:m1,sprite_frag:g1},he={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},qn={basic:{uniforms:Xt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Xt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new $e(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Xt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Xt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Xt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new $e(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Xt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Xt([he.points,he.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Xt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Xt([he.common,he.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Xt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Xt([he.sprite,he.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:Xt([he.common,he.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:Xt([he.lights,he.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};qn.physical={uniforms:Xt([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const No={r:0,b:0,g:0},lr=new ei,v1=new ht;function _1(t,e,n,i,r,s,a){const o=new $e(0);let l=s===!0?0:1,u,h,d=null,p=0,g=null;function _(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?n:e).get(y)),y}function v(x){let y=!1;const M=_(x);M===null?f(o,l):M&&M.isColor&&(f(M,1),y=!0);const L=t.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(x,y){const M=_(y);M&&(M.isCubeTexture||M.mapping===Zl)?(h===void 0&&(h=new St(new pi(1,1,1),new Qi({name:"BackgroundCubeMaterial",uniforms:Ds(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),lr.copy(y.backgroundRotation),lr.x*=-1,lr.y*=-1,lr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(v1.makeRotationFromEuler(lr)),h.material.toneMapped=it.getTransfer(M.colorSpace)!==ut,(d!==M||p!==M.version||g!==t.toneMapping)&&(h.material.needsUpdate=!0,d=M,p=M.version,g=t.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(u===void 0&&(u=new St(new Wa(2,2),new Qi({name:"BackgroundMaterial",uniforms:Ds(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=M,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.toneMapped=it.getTransfer(M.colorSpace)!==ut,M.matrixAutoUpdate===!0&&M.updateMatrix(),u.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||p!==M.version||g!==t.toneMapping)&&(u.material.needsUpdate=!0,d=M,p=M.version,g=t.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null))}function f(x,y){x.getRGB(No,f_(t)),i.buffers.color.setClear(No.r,No.g,No.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(x,y=1){o.set(x),l=y,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,f(o,l)},render:v,addToRenderList:m}}function x1(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=p(null);let s=r,a=!1;function o(S,w,I,b,j){let $=!1;const B=d(b,I,w);s!==B&&(s=B,u(s.object)),$=g(S,b,I,j),$&&_(S,b,I,j),j!==null&&e.update(j,t.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,M(S,w,I,b),j!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return t.createVertexArray()}function u(S){return t.bindVertexArray(S)}function h(S){return t.deleteVertexArray(S)}function d(S,w,I){const b=I.wireframe===!0;let j=i[S.id];j===void 0&&(j={},i[S.id]=j);let $=j[w.id];$===void 0&&($={},j[w.id]=$);let B=$[b];return B===void 0&&(B=p(l()),$[b]=B),B}function p(S){const w=[],I=[],b=[];for(let j=0;j<n;j++)w[j]=0,I[j]=0,b[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:I,attributeDivisors:b,object:S,attributes:{},index:null}}function g(S,w,I,b){const j=s.attributes,$=w.attributes;let B=0;const J=I.getAttributes();for(const N in J)if(J[N].location>=0){const Z=j[N];let ie=$[N];if(ie===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(ie=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(ie=S.instanceColor)),Z===void 0||Z.attribute!==ie||ie&&Z.data!==ie.data)return!0;B++}return s.attributesNum!==B||s.index!==b}function _(S,w,I,b){const j={},$=w.attributes;let B=0;const J=I.getAttributes();for(const N in J)if(J[N].location>=0){let Z=$[N];Z===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(Z=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(Z=S.instanceColor));const ie={};ie.attribute=Z,Z&&Z.data&&(ie.data=Z.data),j[N]=ie,B++}s.attributes=j,s.attributesNum=B,s.index=b}function v(){const S=s.newAttributes;for(let w=0,I=S.length;w<I;w++)S[w]=0}function m(S){f(S,0)}function f(S,w){const I=s.newAttributes,b=s.enabledAttributes,j=s.attributeDivisors;I[S]=1,b[S]===0&&(t.enableVertexAttribArray(S),b[S]=1),j[S]!==w&&(t.vertexAttribDivisor(S,w),j[S]=w)}function x(){const S=s.newAttributes,w=s.enabledAttributes;for(let I=0,b=w.length;I<b;I++)w[I]!==S[I]&&(t.disableVertexAttribArray(I),w[I]=0)}function y(S,w,I,b,j,$,B){B===!0?t.vertexAttribIPointer(S,w,I,j,$):t.vertexAttribPointer(S,w,I,b,j,$)}function M(S,w,I,b){v();const j=b.attributes,$=I.getAttributes(),B=w.defaultAttributeValues;for(const J in $){const N=$[J];if(N.location>=0){let q=j[J];if(q===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(q=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(q=S.instanceColor)),q!==void 0){const Z=q.normalized,ie=q.itemSize,ue=e.get(q);if(ue===void 0)continue;const Ne=ue.buffer,H=ue.type,te=ue.bytesPerElement,le=H===t.INT||H===t.UNSIGNED_INT||q.gpuType===jf;if(q.isInterleavedBufferAttribute){const de=q.data,Fe=de.stride,De=q.offset;if(de.isInstancedInterleavedBuffer){for(let Ge=0;Ge<N.locationSize;Ge++)f(N.location+Ge,de.meshPerAttribute);S.isInstancedMesh!==!0&&b._maxInstanceCount===void 0&&(b._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ge=0;Ge<N.locationSize;Ge++)m(N.location+Ge);t.bindBuffer(t.ARRAY_BUFFER,Ne);for(let Ge=0;Ge<N.locationSize;Ge++)y(N.location+Ge,ie/N.locationSize,H,Z,Fe*te,(De+ie/N.locationSize*Ge)*te,le)}else{if(q.isInstancedBufferAttribute){for(let de=0;de<N.locationSize;de++)f(N.location+de,q.meshPerAttribute);S.isInstancedMesh!==!0&&b._maxInstanceCount===void 0&&(b._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let de=0;de<N.locationSize;de++)m(N.location+de);t.bindBuffer(t.ARRAY_BUFFER,Ne);for(let de=0;de<N.locationSize;de++)y(N.location+de,ie/N.locationSize,H,Z,ie*te,ie/N.locationSize*de*te,le)}}else if(B!==void 0){const Z=B[J];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(N.location,Z);break;case 3:t.vertexAttrib3fv(N.location,Z);break;case 4:t.vertexAttrib4fv(N.location,Z);break;default:t.vertexAttrib1fv(N.location,Z)}}}}x()}function L(){R();for(const S in i){const w=i[S];for(const I in w){const b=w[I];for(const j in b)h(b[j].object),delete b[j];delete w[I]}delete i[S]}}function E(S){if(i[S.id]===void 0)return;const w=i[S.id];for(const I in w){const b=w[I];for(const j in b)h(b[j].object),delete b[j];delete w[I]}delete i[S.id]}function A(S){for(const w in i){const I=i[w];if(I[S.id]===void 0)continue;const b=I[S.id];for(const j in b)h(b[j].object),delete b[j];delete I[S.id]}}function R(){z(),a=!0,s!==r&&(s=r,u(s.object))}function z(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:R,resetDefaultState:z,dispose:L,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function y1(t,e,n){let i;function r(u){i=u}function s(u,h){t.drawArrays(i,u,h),n.update(h,i,1)}function a(u,h,d){d!==0&&(t.drawArraysInstanced(i,u,h,d),n.update(h,i,d))}function o(u,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_];n.update(g,i,1)}function l(u,h,d,p){if(d===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<u.length;_++)a(u[_],h[_],p[_]);else{g.multiDrawArraysInstancedWEBGL(i,u,0,h,0,p,0,d);let _=0;for(let v=0;v<d;v++)_+=h[v];for(let v=0;v<p.length;v++)n.update(_,i,p[v])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function S1(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==Hn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const R=A===za&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==yi&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==fi&&!R)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const h=l(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const d=n.logarithmicDepthBuffer===!0,p=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(p===!0){const A=e.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const g=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),L=_>0,E=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:d,reverseDepthBuffer:p,maxTextures:g,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:M,vertexTextures:L,maxSamples:E}}function M1(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new hr,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const g=d.length!==0||p||i!==0||r;return r=p,i=d.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,p){n=h(d,p,0)},this.setState=function(d,p,g){const _=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,f=t.get(d);if(!r||_===null||_.length===0||s&&!m)s?h(null):u();else{const x=s?0:i,y=x*4;let M=f.clippingState||null;l.value=M,M=h(_,p,y,g);for(let L=0;L!==y;++L)M[L]=n[L];f.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,p,g,_){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,_!==!0||m===null){const f=g+v*4,x=p.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,M=g;y!==v;++y,M+=4)a.copy(d[y]).applyMatrix4(x,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function E1(t){let e=new WeakMap;function n(a,o){return o===fd?a.mapping=Rs:o===hd&&(a.mapping=Ps),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===fd||o===hd)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new IS(l.height);return u.fromEquirectangularTexture(t,a),e.set(a,u),a.addEventListener("dispose",r),n(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class g_ extends h_{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const cs=4,Yp=[.125,.215,.35,.446,.526,.582],vr=20,eu=new g_,qp=new $e;let tu=null,nu=0,iu=0,ru=!1;const pr=(1+Math.sqrt(5))/2,Kr=1/pr,Kp=[new V(-pr,Kr,0),new V(pr,Kr,0),new V(-Kr,0,pr),new V(Kr,0,pr),new V(0,pr,-Kr),new V(0,pr,Kr),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)];class Zp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){tu=this._renderer.getRenderTarget(),nu=this._renderer.getActiveCubeFace(),iu=this._renderer.getActiveMipmapLevel(),ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=em(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(tu,nu,iu),this._renderer.xr.enabled=ru,e.scissorTest=!1,Lo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Rs||e.mapping===Ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tu=this._renderer.getRenderTarget(),nu=this._renderer.getActiveCubeFace(),iu=this._renderer.getActiveMipmapLevel(),ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:za,format:Hn,colorSpace:nr,depthBuffer:!1},r=Qp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=w1(s)),this._blurMaterial=T1(s,e,n)}return r}_compileMaterial(e){const n=new St(this._lodPlanes[0],e);this._renderer.compile(n,eu)}_sceneToCubeUV(e,n,i,r){const o=new An(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(qp),h.toneMapping=Yi,h.autoClear=!1;const g=new gr({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),_=new St(new pi,g);let v=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,v=!0):(g.color.copy(qp),v=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(o.up.set(0,l[f],0),o.lookAt(u[f],0,0)):x===1?(o.up.set(0,0,l[f]),o.lookAt(0,u[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,u[f]));const y=this._cubeSize;Lo(r,x*y,f>2?y:0,y,y),h.setRenderTarget(r),v&&h.render(_,o),h.render(e,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=p,h.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Rs||e.mapping===Ps;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=em()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jp());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new St(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Lo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,eu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Kp[(r-s-1)%Kp.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new St(this._lodPlanes[r],u),p=u.uniforms,g=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*vr-1),v=s/_,m=isFinite(s)?1+Math.floor(h*v):vr;m>vr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vr}`);const f=[];let x=0;for(let A=0;A<vr;++A){const R=A/v,z=Math.exp(-R*R/2);f.push(z),A===0?x+=z:A<m&&(x+=2*z)}for(let A=0;A<f.length;A++)f[A]=f[A]/x;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=f,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:y}=this;p.dTheta.value=_,p.mipInt.value=y-i;const M=this._sizeLods[r],L=3*M*(r>y-cs?r-y+cs:0),E=4*(this._cubeSize-M);Lo(n,L,E,3*M,2*M),l.setRenderTarget(n),l.render(d,eu)}}function w1(t){const e=[],n=[],i=[];let r=t;const s=t-cs+1+Yp.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-cs?l=Yp[a-t+cs-1]:a===0&&(l=0),i.push(l);const u=1/(o-2),h=-u,d=1+u,p=[h,h,d,h,d,d,h,h,d,d,h,d],g=6,_=6,v=3,m=2,f=1,x=new Float32Array(v*_*g),y=new Float32Array(m*_*g),M=new Float32Array(f*_*g);for(let E=0;E<g;E++){const A=E%3*2/3-1,R=E>2?0:-1,z=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];x.set(z,v*_*E),y.set(p,m*_*E);const S=[E,E,E,E,E,E];M.set(S,f*_*E)}const L=new qt;L.setAttribute("position",new _n(x,v)),L.setAttribute("uv",new _n(y,m)),L.setAttribute("faceIndex",new _n(M,f)),e.push(L),r>cs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Qp(t,e,n){const i=new Nr(t,e,n);return i.texture.mapping=Zl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Lo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function T1(t,e,n){const i=new Float32Array(vr),r=new V(0,1,0);return new Qi({name:"SphericalGaussianBlur",defines:{n:vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Kf(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Jp(){return new Qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kf(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function em(){return new Qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Kf(){return`

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
	`}function A1(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,u=l===fd||l===hd,h=l===Rs||l===Ps;if(u||h){let d=e.get(o);const p=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return n===null&&(n=new Zp(t)),d=u?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const g=o.image;return u&&g&&g.height>0||h&&g&&r(g)?(n===null&&(n=new Zp(t)),d=u?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let l=0;const u=6;for(let h=0;h<u;h++)o[h]!==void 0&&l++;return l===u}function s(o){const l=o.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function C1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&tl("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function b1(t,e,n,i){const r={},s=new WeakMap;function a(d){const p=d.target;p.index!==null&&e.remove(p.index);for(const _ in p.attributes)e.remove(p.attributes[_]);for(const _ in p.morphAttributes){const v=p.morphAttributes[_];for(let m=0,f=v.length;m<f;m++)e.remove(v[m])}p.removeEventListener("dispose",a),delete r[p.id];const g=s.get(p);g&&(e.remove(g),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,n.memory.geometries--}function o(d,p){return r[p.id]===!0||(p.addEventListener("dispose",a),r[p.id]=!0,n.memory.geometries++),p}function l(d){const p=d.attributes;for(const _ in p)e.update(p[_],t.ARRAY_BUFFER);const g=d.morphAttributes;for(const _ in g){const v=g[_];for(let m=0,f=v.length;m<f;m++)e.update(v[m],t.ARRAY_BUFFER)}}function u(d){const p=[],g=d.index,_=d.attributes.position;let v=0;if(g!==null){const x=g.array;v=g.version;for(let y=0,M=x.length;y<M;y+=3){const L=x[y+0],E=x[y+1],A=x[y+2];p.push(L,E,E,A,A,L)}}else if(_!==void 0){const x=_.array;v=_.version;for(let y=0,M=x.length/3-1;y<M;y+=3){const L=y+0,E=y+1,A=y+2;p.push(L,E,E,A,A,L)}}else return;const m=new(s_(p)?d_:u_)(p,1);m.version=v;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function h(d){const p=s.get(d);if(p){const g=d.index;g!==null&&p.version<g.version&&u(d)}else u(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function R1(t,e,n){let i;function r(p){i=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function l(p,g){t.drawElements(i,g,s,p*a),n.update(g,i,1)}function u(p,g,_){_!==0&&(t.drawElementsInstanced(i,g,s,p*a,_),n.update(g,i,_))}function h(p,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,s,p,0,_);let m=0;for(let f=0;f<_;f++)m+=g[f];n.update(m,i,1)}function d(p,g,_,v){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<p.length;f++)u(p[f]/a,g[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(i,g,0,s,p,0,v,0,_);let f=0;for(let x=0;x<_;x++)f+=g[x];for(let x=0;x<v.length;x++)n.update(f,i,v[x])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function P1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function N1(t,e,n){const i=new WeakMap,r=new xt;function s(a,o,l){const u=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let p=i.get(o);if(p===void 0||p.count!==d){let S=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var g=S;p!==void 0&&p.texture.dispose();const _=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let M=0;_===!0&&(M=1),v===!0&&(M=2),m===!0&&(M=3);let L=o.attributes.position.count*M,E=1;L>e.maxTextureSize&&(E=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const A=new Float32Array(L*E*4*d),R=new o_(A,L,E,d);R.type=fi,R.needsUpdate=!0;const z=M*4;for(let w=0;w<d;w++){const I=f[w],b=x[w],j=y[w],$=L*E*4*w;for(let B=0;B<I.count;B++){const J=B*z;_===!0&&(r.fromBufferAttribute(I,B),A[$+J+0]=r.x,A[$+J+1]=r.y,A[$+J+2]=r.z,A[$+J+3]=0),v===!0&&(r.fromBufferAttribute(b,B),A[$+J+4]=r.x,A[$+J+5]=r.y,A[$+J+6]=r.z,A[$+J+7]=0),m===!0&&(r.fromBufferAttribute(j,B),A[$+J+8]=r.x,A[$+J+9]=r.y,A[$+J+10]=r.z,A[$+J+11]=j.itemSize===4?r.w:1)}}p={count:d,texture:R,size:new Je(L,E)},i.set(o,p),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let _=0;for(let m=0;m<u.length;m++)_+=u[m];const v=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}return{update:s}}function L1(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return d}function a(){r=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:a}}class v_ extends un{constructor(e,n,i,r,s,a,o,l,u,h=_s){if(h!==_s&&h!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===_s&&(i=Pr),i===void 0&&h===Ls&&(i=Ns),super(null,r,s,a,o,l,h,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:bn,this.minFilter=l!==void 0?l:bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const __=new un,tm=new v_(1,1),x_=new o_,y_=new _S,S_=new p_,nm=[],im=[],rm=new Float32Array(16),sm=new Float32Array(9),am=new Float32Array(4);function ks(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=nm[r];if(s===void 0&&(s=new Float32Array(r),nm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Pt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Nt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Jl(t,e){let n=im[e];n===void 0&&(n=new Int32Array(e),im[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function D1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function I1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2fv(this.addr,e),Nt(n,e)}}function U1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Pt(n,e))return;t.uniform3fv(this.addr,e),Nt(n,e)}}function F1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4fv(this.addr,e),Nt(n,e)}}function O1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Nt(n,e)}else{if(Pt(n,i))return;am.set(i),t.uniformMatrix2fv(this.addr,!1,am),Nt(n,i)}}function k1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Nt(n,e)}else{if(Pt(n,i))return;sm.set(i),t.uniformMatrix3fv(this.addr,!1,sm),Nt(n,i)}}function B1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Nt(n,e)}else{if(Pt(n,i))return;rm.set(i),t.uniformMatrix4fv(this.addr,!1,rm),Nt(n,i)}}function z1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function j1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2iv(this.addr,e),Nt(n,e)}}function H1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3iv(this.addr,e),Nt(n,e)}}function V1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4iv(this.addr,e),Nt(n,e)}}function G1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function W1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2uiv(this.addr,e),Nt(n,e)}}function X1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3uiv(this.addr,e),Nt(n,e)}}function $1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4uiv(this.addr,e),Nt(n,e)}}function Y1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(tm.compareFunction=r_,s=tm):s=__,n.setTexture2D(e||s,r)}function q1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||y_,r)}function K1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||S_,r)}function Z1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||x_,r)}function Q1(t){switch(t){case 5126:return D1;case 35664:return I1;case 35665:return U1;case 35666:return F1;case 35674:return O1;case 35675:return k1;case 35676:return B1;case 5124:case 35670:return z1;case 35667:case 35671:return j1;case 35668:case 35672:return H1;case 35669:case 35673:return V1;case 5125:return G1;case 36294:return W1;case 36295:return X1;case 36296:return $1;case 35678:case 36198:case 36298:case 36306:case 35682:return Y1;case 35679:case 36299:case 36307:return q1;case 35680:case 36300:case 36308:case 36293:return K1;case 36289:case 36303:case 36311:case 36292:return Z1}}function J1(t,e){t.uniform1fv(this.addr,e)}function ew(t,e){const n=ks(e,this.size,2);t.uniform2fv(this.addr,n)}function tw(t,e){const n=ks(e,this.size,3);t.uniform3fv(this.addr,n)}function nw(t,e){const n=ks(e,this.size,4);t.uniform4fv(this.addr,n)}function iw(t,e){const n=ks(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function rw(t,e){const n=ks(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function sw(t,e){const n=ks(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function aw(t,e){t.uniform1iv(this.addr,e)}function ow(t,e){t.uniform2iv(this.addr,e)}function lw(t,e){t.uniform3iv(this.addr,e)}function cw(t,e){t.uniform4iv(this.addr,e)}function uw(t,e){t.uniform1uiv(this.addr,e)}function dw(t,e){t.uniform2uiv(this.addr,e)}function fw(t,e){t.uniform3uiv(this.addr,e)}function hw(t,e){t.uniform4uiv(this.addr,e)}function pw(t,e,n){const i=this.cache,r=e.length,s=Jl(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||__,s[a])}function mw(t,e,n){const i=this.cache,r=e.length,s=Jl(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||y_,s[a])}function gw(t,e,n){const i=this.cache,r=e.length,s=Jl(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||S_,s[a])}function vw(t,e,n){const i=this.cache,r=e.length,s=Jl(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||x_,s[a])}function _w(t){switch(t){case 5126:return J1;case 35664:return ew;case 35665:return tw;case 35666:return nw;case 35674:return iw;case 35675:return rw;case 35676:return sw;case 5124:case 35670:return aw;case 35667:case 35671:return ow;case 35668:case 35672:return lw;case 35669:case 35673:return cw;case 5125:return uw;case 36294:return dw;case 36295:return fw;case 36296:return hw;case 35678:case 36198:case 36298:case 36306:case 35682:return pw;case 35679:case 36299:case 36307:return mw;case 35680:case 36300:case 36308:case 36293:return gw;case 36289:case 36303:case 36311:case 36292:return vw}}class xw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Q1(n.type)}}class yw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=_w(n.type)}}class Sw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const su=/(\w+)(\])?(\[|\.)?/g;function om(t,e){t.seq.push(e),t.map[e.id]=e}function Mw(t,e,n){const i=t.name,r=i.length;for(su.lastIndex=0;;){const s=su.exec(i),a=su.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){om(n,u===void 0?new xw(o,t,e):new yw(o,t,e));break}else{let d=n.map[o];d===void 0&&(d=new Sw(o),om(n,d)),n=d}}}class nl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);Mw(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function lm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Ew=37297;let ww=0;function Tw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function Aw(t){const e=it.getPrimaries(it.workingColorSpace),n=it.getPrimaries(t);let i;switch(e===n?i="":e===Rl&&n===bl?i="LinearDisplayP3ToLinearSRGB":e===bl&&n===Rl&&(i="LinearSRGBToLinearDisplayP3"),t){case nr:case Ql:return[i,"LinearTransferOETF"];case Yn:case $f:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function cm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Tw(t.getShaderSource(e),a)}else return r}function Cw(t,e){const n=Aw(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function bw(t,e){let n;switch(e){case Gy:n="Linear";break;case Wy:n="Reinhard";break;case Xy:n="Cineon";break;case $y:n="ACESFilmic";break;case qy:n="AgX";break;case Ky:n="Neutral";break;case Yy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Do=new V;function Rw(){it.getLuminanceCoefficients(Do);const t=Do.x.toFixed(4),e=Do.y.toFixed(4),n=Do.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Pw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ra).join(`
`)}function Nw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Lw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function ra(t){return t!==""}function um(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Dw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vd(t){return t.replace(Dw,Uw)}const Iw=new Map;function Uw(t,e){let n=je[e];if(n===void 0){const i=Iw.get(e);if(i!==void 0)n=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Vd(n)}const Fw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fm(t){return t.replace(Fw,Ow)}function Ow(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function hm(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function kw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Gv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Ey?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===oi&&(e="SHADOWMAP_TYPE_VSM"),e}function Bw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Rs:case Ps:e="ENVMAP_TYPE_CUBE";break;case Zl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ps:e="ENVMAP_MODE_REFRACTION";break}return e}function jw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Wv:e="ENVMAP_BLENDING_MULTIPLY";break;case Hy:e="ENVMAP_BLENDING_MIX";break;case Vy:e="ENVMAP_BLENDING_ADD";break}return e}function Hw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Vw(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=kw(n),u=Bw(n),h=zw(n),d=jw(n),p=Hw(n),g=Pw(n),_=Nw(s),v=r.createProgram();let m,f,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(ra).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(ra).join(`
`),f.length>0&&(f+=`
`)):(m=[hm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ra).join(`
`),f=[hm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Yi?"#define TONE_MAPPING":"",n.toneMapping!==Yi?je.tonemapping_pars_fragment:"",n.toneMapping!==Yi?bw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,Cw("linearToOutputTexel",n.outputColorSpace),Rw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ra).join(`
`)),a=Vd(a),a=um(a,n),a=dm(a,n),o=Vd(o),o=um(o,n),o=dm(o,n),a=fm(a),o=fm(o),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===Pp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Pp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=x+m+a,M=x+f+o,L=lm(r,r.VERTEX_SHADER,y),E=lm(r,r.FRAGMENT_SHADER,M);r.attachShader(v,L),r.attachShader(v,E),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function A(w){if(t.debug.checkShaderErrors){const I=r.getProgramInfoLog(v).trim(),b=r.getShaderInfoLog(L).trim(),j=r.getShaderInfoLog(E).trim();let $=!0,B=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,L,E);else{const J=cm(r,L,"vertex"),N=cm(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+I+`
`+J+`
`+N)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(b===""||j==="")&&(B=!1);B&&(w.diagnostics={runnable:$,programLog:I,vertexShader:{log:b,prefix:m},fragmentShader:{log:j,prefix:f}})}r.deleteShader(L),r.deleteShader(E),R=new nl(r,v),z=Lw(r,v)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let z;this.getAttributes=function(){return z===void 0&&A(this),z};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(v,Ew)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ww++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=E,this}let Gw=0;class Ww{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Xw(e),n.set(e,i)),i}}class Xw{constructor(e){this.id=Gw++,this.code=e,this.usedTimes=0}}function $w(t,e,n,i,r,s,a){const o=new l_,l=new Ww,u=new Set,h=[],d=r.logarithmicDepthBuffer,p=r.reverseDepthBuffer,g=r.vertexTextures;let _=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S){return u.add(S),S===0?"uv":`uv${S}`}function f(S,w,I,b,j){const $=b.fog,B=j.geometry,J=S.isMeshStandardMaterial?b.environment:null,N=(S.isMeshStandardMaterial?n:e).get(S.envMap||J),q=N&&N.mapping===Zl?N.image.height:null,Z=v[S.type];S.precision!==null&&(_=r.getMaxPrecision(S.precision),_!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",_,"instead."));const ie=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ue=ie!==void 0?ie.length:0;let Ne=0;B.morphAttributes.position!==void 0&&(Ne=1),B.morphAttributes.normal!==void 0&&(Ne=2),B.morphAttributes.color!==void 0&&(Ne=3);let H,te,le,de;if(Z){const Jt=qn[Z];H=Jt.vertexShader,te=Jt.fragmentShader}else H=S.vertexShader,te=S.fragmentShader,l.update(S),le=l.getVertexShaderID(S),de=l.getFragmentShaderID(S);const Fe=t.getRenderTarget(),De=j.isInstancedMesh===!0,Ge=j.isBatchedMesh===!0,Ke=!!S.map,ee=!!S.matcap,D=!!N,ze=!!S.aoMap,Te=!!S.lightMap,Le=!!S.bumpMap,be=!!S.normalMap,Ye=!!S.displacementMap,Ee=!!S.emissiveMap,P=!!S.metalnessMap,T=!!S.roughnessMap,U=S.anisotropy>0,W=S.clearcoat>0,Q=S.dispersion>0,G=S.iridescence>0,ve=S.sheen>0,ce=S.transmission>0,pe=U&&!!S.anisotropyMap,Ve=W&&!!S.clearcoatMap,re=W&&!!S.clearcoatNormalMap,me=W&&!!S.clearcoatRoughnessMap,Ie=G&&!!S.iridescenceMap,Ue=G&&!!S.iridescenceThicknessMap,we=ve&&!!S.sheenColorMap,Xe=ve&&!!S.sheenRoughnessMap,Be=!!S.specularMap,rt=!!S.specularColorMap,F=!!S.specularIntensityMap,_e=ce&&!!S.transmissionMap,K=ce&&!!S.thicknessMap,ne=!!S.gradientMap,xe=!!S.alphaMap,Se=S.alphaTest>0,Ze=!!S.alphaHash,Et=!!S.extensions;let Qt=Yi;S.toneMapped&&(Fe===null||Fe.isXRRenderTarget===!0)&&(Qt=t.toneMapping);const et={shaderID:Z,shaderType:S.type,shaderName:S.name,vertexShader:H,fragmentShader:te,defines:S.defines,customVertexShaderID:le,customFragmentShaderID:de,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:_,batching:Ge,batchingColor:Ge&&j._colorsTexture!==null,instancing:De,instancingColor:De&&j.instanceColor!==null,instancingMorph:De&&j.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:Fe===null?t.outputColorSpace:Fe.isXRRenderTarget===!0?Fe.texture.colorSpace:nr,alphaToCoverage:!!S.alphaToCoverage,map:Ke,matcap:ee,envMap:D,envMapMode:D&&N.mapping,envMapCubeUVHeight:q,aoMap:ze,lightMap:Te,bumpMap:Le,normalMap:be,displacementMap:g&&Ye,emissiveMap:Ee,normalMapObjectSpace:be&&S.normalMapType===eS,normalMapTangentSpace:be&&S.normalMapType===i_,metalnessMap:P,roughnessMap:T,anisotropy:U,anisotropyMap:pe,clearcoat:W,clearcoatMap:Ve,clearcoatNormalMap:re,clearcoatRoughnessMap:me,dispersion:Q,iridescence:G,iridescenceMap:Ie,iridescenceThicknessMap:Ue,sheen:ve,sheenColorMap:we,sheenRoughnessMap:Xe,specularMap:Be,specularColorMap:rt,specularIntensityMap:F,transmission:ce,transmissionMap:_e,thicknessMap:K,gradientMap:ne,opaque:S.transparent===!1&&S.blending===vs&&S.alphaToCoverage===!1,alphaMap:xe,alphaTest:Se,alphaHash:Ze,combine:S.combine,mapUv:Ke&&m(S.map.channel),aoMapUv:ze&&m(S.aoMap.channel),lightMapUv:Te&&m(S.lightMap.channel),bumpMapUv:Le&&m(S.bumpMap.channel),normalMapUv:be&&m(S.normalMap.channel),displacementMapUv:Ye&&m(S.displacementMap.channel),emissiveMapUv:Ee&&m(S.emissiveMap.channel),metalnessMapUv:P&&m(S.metalnessMap.channel),roughnessMapUv:T&&m(S.roughnessMap.channel),anisotropyMapUv:pe&&m(S.anisotropyMap.channel),clearcoatMapUv:Ve&&m(S.clearcoatMap.channel),clearcoatNormalMapUv:re&&m(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&m(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&m(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&m(S.iridescenceThicknessMap.channel),sheenColorMapUv:we&&m(S.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&m(S.sheenRoughnessMap.channel),specularMapUv:Be&&m(S.specularMap.channel),specularColorMapUv:rt&&m(S.specularColorMap.channel),specularIntensityMapUv:F&&m(S.specularIntensityMap.channel),transmissionMapUv:_e&&m(S.transmissionMap.channel),thicknessMapUv:K&&m(S.thicknessMap.channel),alphaMapUv:xe&&m(S.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(be||U),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!B.attributes.uv&&(Ke||xe),fog:!!$,useFog:S.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:p,skinning:j.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Ne,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:Qt,decodeVideoTexture:Ke&&S.map.isVideoTexture===!0&&it.getTransfer(S.map.colorSpace)===ut,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Zn,flipSided:S.side===cn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Et&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&S.extensions.multiDraw===!0||Ge)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return et.vertexUv1s=u.has(1),et.vertexUv2s=u.has(2),et.vertexUv3s=u.has(3),u.clear(),et}function x(S){const w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(const I in S.defines)w.push(I),w.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(y(w,S),M(w,S),w.push(t.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function y(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function M(S,w){o.disableAll(),w.supportsVertexTextures&&o.enable(0),w.instancing&&o.enable(1),w.instancingColor&&o.enable(2),w.instancingMorph&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),w.dispersion&&o.enable(20),w.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reverseDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.alphaToCoverage&&o.enable(20),S.push(o.mask)}function L(S){const w=v[S.type];let I;if(w){const b=qn[w];I=PS.clone(b.uniforms)}else I=S.uniforms;return I}function E(S,w){let I;for(let b=0,j=h.length;b<j;b++){const $=h[b];if($.cacheKey===w){I=$,++I.usedTimes;break}}return I===void 0&&(I=new Vw(t,w,S,s),h.push(I)),I}function A(S){if(--S.usedTimes===0){const w=h.indexOf(S);h[w]=h[h.length-1],h.pop(),S.destroy()}}function R(S){l.remove(S)}function z(){l.dispose()}return{getParameters:f,getProgramCacheKey:x,getUniforms:L,acquireProgram:E,releaseProgram:A,releaseShaderCache:R,programs:h,dispose:z}}function Yw(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function qw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function pm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function mm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d,p,g,_,v,m){let f=t[e];return f===void 0?(f={id:d.id,object:d,geometry:p,material:g,groupOrder:_,renderOrder:d.renderOrder,z:v,group:m},t[e]=f):(f.id=d.id,f.object=d,f.geometry=p,f.material=g,f.groupOrder=_,f.renderOrder=d.renderOrder,f.z=v,f.group=m),e++,f}function o(d,p,g,_,v,m){const f=a(d,p,g,_,v,m);g.transmission>0?i.push(f):g.transparent===!0?r.push(f):n.push(f)}function l(d,p,g,_,v,m){const f=a(d,p,g,_,v,m);g.transmission>0?i.unshift(f):g.transparent===!0?r.unshift(f):n.unshift(f)}function u(d,p){n.length>1&&n.sort(d||qw),i.length>1&&i.sort(p||pm),r.length>1&&r.sort(p||pm)}function h(){for(let d=e,p=t.length;d<p;d++){const g=t[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:h,sort:u}}function Kw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new mm,t.set(i,[a])):r>=s.length?(a=new mm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function Zw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new V,color:new $e};break;case"SpotLight":n={position:new V,direction:new V,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new $e,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":n={color:new $e,position:new V,halfWidth:new V,halfHeight:new V};break}return t[e.id]=n,n}}}function Qw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Jw=0;function eT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function tT(t){const e=new Zw,n=Qw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new V);const r=new V,s=new ht,a=new ht;function o(u){let h=0,d=0,p=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let g=0,_=0,v=0,m=0,f=0,x=0,y=0,M=0,L=0,E=0,A=0;u.sort(eT);for(let z=0,S=u.length;z<S;z++){const w=u[z],I=w.color,b=w.intensity,j=w.distance,$=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=I.r*b,d+=I.g*b,p+=I.b*b;else if(w.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(w.sh.coefficients[B],b);A++}else if(w.isDirectionalLight){const B=e.get(w);if(B.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const J=w.shadow,N=n.get(w);N.shadowIntensity=J.intensity,N.shadowBias=J.bias,N.shadowNormalBias=J.normalBias,N.shadowRadius=J.radius,N.shadowMapSize=J.mapSize,i.directionalShadow[g]=N,i.directionalShadowMap[g]=$,i.directionalShadowMatrix[g]=w.shadow.matrix,x++}i.directional[g]=B,g++}else if(w.isSpotLight){const B=e.get(w);B.position.setFromMatrixPosition(w.matrixWorld),B.color.copy(I).multiplyScalar(b),B.distance=j,B.coneCos=Math.cos(w.angle),B.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),B.decay=w.decay,i.spot[v]=B;const J=w.shadow;if(w.map&&(i.spotLightMap[L]=w.map,L++,J.updateMatrices(w),w.castShadow&&E++),i.spotLightMatrix[v]=J.matrix,w.castShadow){const N=n.get(w);N.shadowIntensity=J.intensity,N.shadowBias=J.bias,N.shadowNormalBias=J.normalBias,N.shadowRadius=J.radius,N.shadowMapSize=J.mapSize,i.spotShadow[v]=N,i.spotShadowMap[v]=$,M++}v++}else if(w.isRectAreaLight){const B=e.get(w);B.color.copy(I).multiplyScalar(b),B.halfWidth.set(w.width*.5,0,0),B.halfHeight.set(0,w.height*.5,0),i.rectArea[m]=B,m++}else if(w.isPointLight){const B=e.get(w);if(B.color.copy(w.color).multiplyScalar(w.intensity),B.distance=w.distance,B.decay=w.decay,w.castShadow){const J=w.shadow,N=n.get(w);N.shadowIntensity=J.intensity,N.shadowBias=J.bias,N.shadowNormalBias=J.normalBias,N.shadowRadius=J.radius,N.shadowMapSize=J.mapSize,N.shadowCameraNear=J.camera.near,N.shadowCameraFar=J.camera.far,i.pointShadow[_]=N,i.pointShadowMap[_]=$,i.pointShadowMatrix[_]=w.shadow.matrix,y++}i.point[_]=B,_++}else if(w.isHemisphereLight){const B=e.get(w);B.skyColor.copy(w.color).multiplyScalar(b),B.groundColor.copy(w.groundColor).multiplyScalar(b),i.hemi[f]=B,f++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=p;const R=i.hash;(R.directionalLength!==g||R.pointLength!==_||R.spotLength!==v||R.rectAreaLength!==m||R.hemiLength!==f||R.numDirectionalShadows!==x||R.numPointShadows!==y||R.numSpotShadows!==M||R.numSpotMaps!==L||R.numLightProbes!==A)&&(i.directional.length=g,i.spot.length=v,i.rectArea.length=m,i.point.length=_,i.hemi.length=f,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=M+L-E,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=A,R.directionalLength=g,R.pointLength=_,R.spotLength=v,R.rectAreaLength=m,R.hemiLength=f,R.numDirectionalShadows=x,R.numPointShadows=y,R.numSpotShadows=M,R.numSpotMaps=L,R.numLightProbes=A,i.version=Jw++)}function l(u,h){let d=0,p=0,g=0,_=0,v=0;const m=h.matrixWorldInverse;for(let f=0,x=u.length;f<x;f++){const y=u[f];if(y.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),d++}else if(y.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),g++}else if(y.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),a.identity(),s.copy(y.matrixWorld),s.premultiply(m),a.extractRotation(s),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const M=i.point[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),p++}else if(y.isHemisphereLight){const M=i.hemi[v];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function gm(t){const e=new tT(t),n=[],i=[];function r(h){u.camera=h,n.length=0,i.length=0}function s(h){n.push(h)}function a(h){i.push(h)}function o(){e.setup(n)}function l(h){e.setupView(n,h)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function nT(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new gm(t),e.set(r,[o])):s>=a.length?(o=new gm(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class iT extends Ir{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rT extends Ir{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const sT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aT=`uniform sampler2D shadow_pass;
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
}`;function oT(t,e,n){let i=new qf;const r=new Je,s=new Je,a=new xt,o=new iT({depthPacking:Jy}),l=new rT,u={},h=n.maxTextureSize,d={[Zi]:cn,[cn]:Zi,[Zn]:Zn},p=new Qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:sT,fragmentShader:aT}),g=p.clone();g.defines.HORIZONTAL_PASS=1;const _=new qt;_.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new St(_,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gv;let f=this.type;this.render=function(E,A,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const z=t.getRenderTarget(),S=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),I=t.state;I.setBlending($i),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const b=f!==oi&&this.type===oi,j=f===oi&&this.type!==oi;for(let $=0,B=E.length;$<B;$++){const J=E[$],N=J.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const q=N.getFrameExtents();if(r.multiply(q),s.copy(N.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/q.x),r.x=s.x*q.x,N.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/q.y),r.y=s.y*q.y,N.mapSize.y=s.y)),N.map===null||b===!0||j===!0){const ie=this.type!==oi?{minFilter:bn,magFilter:bn}:{};N.map!==null&&N.map.dispose(),N.map=new Nr(r.x,r.y,ie),N.map.texture.name=J.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const Z=N.getViewportCount();for(let ie=0;ie<Z;ie++){const ue=N.getViewport(ie);a.set(s.x*ue.x,s.y*ue.y,s.x*ue.z,s.y*ue.w),I.viewport(a),N.updateMatrices(J,ie),i=N.getFrustum(),M(A,R,N.camera,J,this.type)}N.isPointLightShadow!==!0&&this.type===oi&&x(N,R),N.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(z,S,w)};function x(E,A){const R=e.update(v);p.defines.VSM_SAMPLES!==E.blurSamples&&(p.defines.VSM_SAMPLES=E.blurSamples,g.defines.VSM_SAMPLES=E.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Nr(r.x,r.y)),p.uniforms.shadow_pass.value=E.map.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(A,null,R,p,v,null),g.uniforms.shadow_pass.value=E.mapPass.texture,g.uniforms.resolution.value=E.mapSize,g.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(A,null,R,g,v,null)}function y(E,A,R,z){let S=null;const w=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(w!==void 0)S=w;else if(S=R.isPointLight===!0?l:o,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const I=S.uuid,b=A.uuid;let j=u[I];j===void 0&&(j={},u[I]=j);let $=j[b];$===void 0&&($=S.clone(),j[b]=$,A.addEventListener("dispose",L)),S=$}if(S.visible=A.visible,S.wireframe=A.wireframe,z===oi?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:d[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const I=t.properties.get(S);I.light=R}return S}function M(E,A,R,z,S){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===oi)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);const b=e.update(E),j=E.material;if(Array.isArray(j)){const $=b.groups;for(let B=0,J=$.length;B<J;B++){const N=$[B],q=j[N.materialIndex];if(q&&q.visible){const Z=y(E,q,z,S);E.onBeforeShadow(t,E,A,R,b,Z,N),t.renderBufferDirect(R,null,b,Z,E,N),E.onAfterShadow(t,E,A,R,b,Z,N)}}}else if(j.visible){const $=y(E,j,z,S);E.onBeforeShadow(t,E,A,R,b,$,null),t.renderBufferDirect(R,null,b,$,E,null),E.onAfterShadow(t,E,A,R,b,$,null)}}const I=E.children;for(let b=0,j=I.length;b<j;b++)M(I[b],A,R,z,S)}function L(E){E.target.removeEventListener("dispose",L);for(const R in u){const z=u[R],S=E.target.uuid;S in z&&(z[S].dispose(),delete z[S])}}}const lT={[sd]:ad,[od]:ud,[ld]:dd,[bs]:cd,[ad]:sd,[ud]:od,[dd]:ld,[cd]:bs};function cT(t){function e(){let F=!1;const _e=new xt;let K=null;const ne=new xt(0,0,0,0);return{setMask:function(xe){K!==xe&&!F&&(t.colorMask(xe,xe,xe,xe),K=xe)},setLocked:function(xe){F=xe},setClear:function(xe,Se,Ze,Et,Qt){Qt===!0&&(xe*=Et,Se*=Et,Ze*=Et),_e.set(xe,Se,Ze,Et),ne.equals(_e)===!1&&(t.clearColor(xe,Se,Ze,Et),ne.copy(_e))},reset:function(){F=!1,K=null,ne.set(-1,0,0,0)}}}function n(){let F=!1,_e=!1,K=null,ne=null,xe=null;return{setReversed:function(Se){_e=Se},setTest:function(Se){Se?le(t.DEPTH_TEST):de(t.DEPTH_TEST)},setMask:function(Se){K!==Se&&!F&&(t.depthMask(Se),K=Se)},setFunc:function(Se){if(_e&&(Se=lT[Se]),ne!==Se){switch(Se){case sd:t.depthFunc(t.NEVER);break;case ad:t.depthFunc(t.ALWAYS);break;case od:t.depthFunc(t.LESS);break;case bs:t.depthFunc(t.LEQUAL);break;case ld:t.depthFunc(t.EQUAL);break;case cd:t.depthFunc(t.GEQUAL);break;case ud:t.depthFunc(t.GREATER);break;case dd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ne=Se}},setLocked:function(Se){F=Se},setClear:function(Se){xe!==Se&&(t.clearDepth(Se),xe=Se)},reset:function(){F=!1,K=null,ne=null,xe=null}}}function i(){let F=!1,_e=null,K=null,ne=null,xe=null,Se=null,Ze=null,Et=null,Qt=null;return{setTest:function(et){F||(et?le(t.STENCIL_TEST):de(t.STENCIL_TEST))},setMask:function(et){_e!==et&&!F&&(t.stencilMask(et),_e=et)},setFunc:function(et,Jt,ti){(K!==et||ne!==Jt||xe!==ti)&&(t.stencilFunc(et,Jt,ti),K=et,ne=Jt,xe=ti)},setOp:function(et,Jt,ti){(Se!==et||Ze!==Jt||Et!==ti)&&(t.stencilOp(et,Jt,ti),Se=et,Ze=Jt,Et=ti)},setLocked:function(et){F=et},setClear:function(et){Qt!==et&&(t.clearStencil(et),Qt=et)},reset:function(){F=!1,_e=null,K=null,ne=null,xe=null,Se=null,Ze=null,Et=null,Qt=null}}}const r=new e,s=new n,a=new i,o=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,p=[],g=null,_=!1,v=null,m=null,f=null,x=null,y=null,M=null,L=null,E=new $e(0,0,0),A=0,R=!1,z=null,S=null,w=null,I=null,b=null;const j=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,B=0;const J=t.getParameter(t.VERSION);J.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(J)[1]),$=B>=1):J.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),$=B>=2);let N=null,q={};const Z=t.getParameter(t.SCISSOR_BOX),ie=t.getParameter(t.VIEWPORT),ue=new xt().fromArray(Z),Ne=new xt().fromArray(ie);function H(F,_e,K,ne){const xe=new Uint8Array(4),Se=t.createTexture();t.bindTexture(F,Se),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ze=0;Ze<K;Ze++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(_e,0,t.RGBA,1,1,ne,0,t.RGBA,t.UNSIGNED_BYTE,xe):t.texImage2D(_e+Ze,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,xe);return Se}const te={};te[t.TEXTURE_2D]=H(t.TEXTURE_2D,t.TEXTURE_2D,1),te[t.TEXTURE_CUBE_MAP]=H(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[t.TEXTURE_2D_ARRAY]=H(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),te[t.TEXTURE_3D]=H(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),le(t.DEPTH_TEST),s.setFunc(bs),Te(!1),Le(wp),le(t.CULL_FACE),D($i);function le(F){u[F]!==!0&&(t.enable(F),u[F]=!0)}function de(F){u[F]!==!1&&(t.disable(F),u[F]=!1)}function Fe(F,_e){return h[F]!==_e?(t.bindFramebuffer(F,_e),h[F]=_e,F===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=_e),F===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=_e),!0):!1}function De(F,_e){let K=p,ne=!1;if(F){K=d.get(_e),K===void 0&&(K=[],d.set(_e,K));const xe=F.textures;if(K.length!==xe.length||K[0]!==t.COLOR_ATTACHMENT0){for(let Se=0,Ze=xe.length;Se<Ze;Se++)K[Se]=t.COLOR_ATTACHMENT0+Se;K.length=xe.length,ne=!0}}else K[0]!==t.BACK&&(K[0]=t.BACK,ne=!0);ne&&t.drawBuffers(K)}function Ge(F){return g!==F?(t.useProgram(F),g=F,!0):!1}const Ke={[mr]:t.FUNC_ADD,[Ty]:t.FUNC_SUBTRACT,[Ay]:t.FUNC_REVERSE_SUBTRACT};Ke[Cy]=t.MIN,Ke[by]=t.MAX;const ee={[Ry]:t.ZERO,[Py]:t.ONE,[Ny]:t.SRC_COLOR,[id]:t.SRC_ALPHA,[Oy]:t.SRC_ALPHA_SATURATE,[Uy]:t.DST_COLOR,[Dy]:t.DST_ALPHA,[Ly]:t.ONE_MINUS_SRC_COLOR,[rd]:t.ONE_MINUS_SRC_ALPHA,[Fy]:t.ONE_MINUS_DST_COLOR,[Iy]:t.ONE_MINUS_DST_ALPHA,[ky]:t.CONSTANT_COLOR,[By]:t.ONE_MINUS_CONSTANT_COLOR,[zy]:t.CONSTANT_ALPHA,[jy]:t.ONE_MINUS_CONSTANT_ALPHA};function D(F,_e,K,ne,xe,Se,Ze,Et,Qt,et){if(F===$i){_===!0&&(de(t.BLEND),_=!1);return}if(_===!1&&(le(t.BLEND),_=!0),F!==wy){if(F!==v||et!==R){if((m!==mr||y!==mr)&&(t.blendEquation(t.FUNC_ADD),m=mr,y=mr),et)switch(F){case vs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Tp:t.blendFunc(t.ONE,t.ONE);break;case Ap:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Cp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case vs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Tp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Ap:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Cp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}f=null,x=null,M=null,L=null,E.set(0,0,0),A=0,v=F,R=et}return}xe=xe||_e,Se=Se||K,Ze=Ze||ne,(_e!==m||xe!==y)&&(t.blendEquationSeparate(Ke[_e],Ke[xe]),m=_e,y=xe),(K!==f||ne!==x||Se!==M||Ze!==L)&&(t.blendFuncSeparate(ee[K],ee[ne],ee[Se],ee[Ze]),f=K,x=ne,M=Se,L=Ze),(Et.equals(E)===!1||Qt!==A)&&(t.blendColor(Et.r,Et.g,Et.b,Qt),E.copy(Et),A=Qt),v=F,R=!1}function ze(F,_e){F.side===Zn?de(t.CULL_FACE):le(t.CULL_FACE);let K=F.side===cn;_e&&(K=!K),Te(K),F.blending===vs&&F.transparent===!1?D($i):D(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),s.setFunc(F.depthFunc),s.setTest(F.depthTest),s.setMask(F.depthWrite),r.setMask(F.colorWrite);const ne=F.stencilWrite;a.setTest(ne),ne&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ye(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):de(t.SAMPLE_ALPHA_TO_COVERAGE)}function Te(F){z!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),z=F)}function Le(F){F!==Sy?(le(t.CULL_FACE),F!==S&&(F===wp?t.cullFace(t.BACK):F===My?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):de(t.CULL_FACE),S=F}function be(F){F!==w&&($&&t.lineWidth(F),w=F)}function Ye(F,_e,K){F?(le(t.POLYGON_OFFSET_FILL),(I!==_e||b!==K)&&(t.polygonOffset(_e,K),I=_e,b=K)):de(t.POLYGON_OFFSET_FILL)}function Ee(F){F?le(t.SCISSOR_TEST):de(t.SCISSOR_TEST)}function P(F){F===void 0&&(F=t.TEXTURE0+j-1),N!==F&&(t.activeTexture(F),N=F)}function T(F,_e,K){K===void 0&&(N===null?K=t.TEXTURE0+j-1:K=N);let ne=q[K];ne===void 0&&(ne={type:void 0,texture:void 0},q[K]=ne),(ne.type!==F||ne.texture!==_e)&&(N!==K&&(t.activeTexture(K),N=K),t.bindTexture(F,_e||te[F]),ne.type=F,ne.texture=_e)}function U(){const F=q[N];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function W(){try{t.compressedTexImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Q(){try{t.compressedTexImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function G(){try{t.texSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ve(){try{t.texSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ce(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ve(){try{t.texStorage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function re(){try{t.texStorage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function me(){try{t.texImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ie(){try{t.texImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ue(F){ue.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),ue.copy(F))}function we(F){Ne.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),Ne.copy(F))}function Xe(F,_e){let K=l.get(_e);K===void 0&&(K=new WeakMap,l.set(_e,K));let ne=K.get(F);ne===void 0&&(ne=t.getUniformBlockIndex(_e,F.name),K.set(F,ne))}function Be(F,_e){const ne=l.get(_e).get(F);o.get(_e)!==ne&&(t.uniformBlockBinding(_e,ne,F.__bindingPointIndex),o.set(_e,ne))}function rt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},N=null,q={},h={},d=new WeakMap,p=[],g=null,_=!1,v=null,m=null,f=null,x=null,y=null,M=null,L=null,E=new $e(0,0,0),A=0,R=!1,z=null,S=null,w=null,I=null,b=null,ue.set(0,0,t.canvas.width,t.canvas.height),Ne.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:le,disable:de,bindFramebuffer:Fe,drawBuffers:De,useProgram:Ge,setBlending:D,setMaterial:ze,setFlipSided:Te,setCullFace:Le,setLineWidth:be,setPolygonOffset:Ye,setScissorTest:Ee,activeTexture:P,bindTexture:T,unbindTexture:U,compressedTexImage2D:W,compressedTexImage3D:Q,texImage2D:me,texImage3D:Ie,updateUBOMapping:Xe,uniformBlockBinding:Be,texStorage2D:Ve,texStorage3D:re,texSubImage2D:G,texSubImage3D:ve,compressedTexSubImage2D:ce,compressedTexSubImage3D:pe,scissor:Ue,viewport:we,reset:rt}}function vm(t,e,n,i){const r=uT(i);switch(n){case Kv:return t*e;case Qv:return t*e;case Jv:return t*e*2;case e_:return t*e/r.components*r.byteLength;case Gf:return t*e/r.components*r.byteLength;case t_:return t*e*2/r.components*r.byteLength;case Wf:return t*e*2/r.components*r.byteLength;case Zv:return t*e*3/r.components*r.byteLength;case Hn:return t*e*4/r.components*r.byteLength;case Xf:return t*e*4/r.components*r.byteLength;case Ko:case Zo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Qo:case Jo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case vd:case xd:return Math.max(t,16)*Math.max(e,8)/4;case gd:case _d:return Math.max(t,8)*Math.max(e,8)/2;case yd:case Sd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Md:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ed:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case wd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Td:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Ad:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Cd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case bd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Rd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Pd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Nd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Ld:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Dd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Id:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Ud:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Fd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case el:case Od:case kd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case n_:case Bd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case zd:case jd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function uT(t){switch(t){case yi:case $v:return{byteLength:1,components:1};case Da:case Yv:case za:return{byteLength:2,components:1};case Hf:case Vf:return{byteLength:2,components:4};case Pr:case jf:case fi:return{byteLength:4,components:1};case qv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function dT(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Je,h=new WeakMap;let d;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,T){return g?new OffscreenCanvas(P,T):Nl("canvas")}function v(P,T,U){let W=1;const Q=Ee(P);if((Q.width>U||Q.height>U)&&(W=U/Math.max(Q.width,Q.height)),W<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const G=Math.floor(W*Q.width),ve=Math.floor(W*Q.height);d===void 0&&(d=_(G,ve));const ce=T?_(G,ve):d;return ce.width=G,ce.height=ve,ce.getContext("2d").drawImage(P,0,0,G,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+G+"x"+ve+")."),ce}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),P;return P}function m(P){return P.generateMipmaps&&P.minFilter!==bn&&P.minFilter!==zn}function f(P){t.generateMipmap(P)}function x(P,T,U,W,Q=!1){if(P!==null){if(t[P]!==void 0)return t[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let G=T;if(T===t.RED&&(U===t.FLOAT&&(G=t.R32F),U===t.HALF_FLOAT&&(G=t.R16F),U===t.UNSIGNED_BYTE&&(G=t.R8)),T===t.RED_INTEGER&&(U===t.UNSIGNED_BYTE&&(G=t.R8UI),U===t.UNSIGNED_SHORT&&(G=t.R16UI),U===t.UNSIGNED_INT&&(G=t.R32UI),U===t.BYTE&&(G=t.R8I),U===t.SHORT&&(G=t.R16I),U===t.INT&&(G=t.R32I)),T===t.RG&&(U===t.FLOAT&&(G=t.RG32F),U===t.HALF_FLOAT&&(G=t.RG16F),U===t.UNSIGNED_BYTE&&(G=t.RG8)),T===t.RG_INTEGER&&(U===t.UNSIGNED_BYTE&&(G=t.RG8UI),U===t.UNSIGNED_SHORT&&(G=t.RG16UI),U===t.UNSIGNED_INT&&(G=t.RG32UI),U===t.BYTE&&(G=t.RG8I),U===t.SHORT&&(G=t.RG16I),U===t.INT&&(G=t.RG32I)),T===t.RGB_INTEGER&&(U===t.UNSIGNED_BYTE&&(G=t.RGB8UI),U===t.UNSIGNED_SHORT&&(G=t.RGB16UI),U===t.UNSIGNED_INT&&(G=t.RGB32UI),U===t.BYTE&&(G=t.RGB8I),U===t.SHORT&&(G=t.RGB16I),U===t.INT&&(G=t.RGB32I)),T===t.RGBA_INTEGER&&(U===t.UNSIGNED_BYTE&&(G=t.RGBA8UI),U===t.UNSIGNED_SHORT&&(G=t.RGBA16UI),U===t.UNSIGNED_INT&&(G=t.RGBA32UI),U===t.BYTE&&(G=t.RGBA8I),U===t.SHORT&&(G=t.RGBA16I),U===t.INT&&(G=t.RGBA32I)),T===t.RGB&&U===t.UNSIGNED_INT_5_9_9_9_REV&&(G=t.RGB9_E5),T===t.RGBA){const ve=Q?Cl:it.getTransfer(W);U===t.FLOAT&&(G=t.RGBA32F),U===t.HALF_FLOAT&&(G=t.RGBA16F),U===t.UNSIGNED_BYTE&&(G=ve===ut?t.SRGB8_ALPHA8:t.RGBA8),U===t.UNSIGNED_SHORT_4_4_4_4&&(G=t.RGBA4),U===t.UNSIGNED_SHORT_5_5_5_1&&(G=t.RGB5_A1)}return(G===t.R16F||G===t.R32F||G===t.RG16F||G===t.RG32F||G===t.RGBA16F||G===t.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function y(P,T){let U;return P?T===null||T===Pr||T===Ns?U=t.DEPTH24_STENCIL8:T===fi?U=t.DEPTH32F_STENCIL8:T===Da&&(U=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Pr||T===Ns?U=t.DEPTH_COMPONENT24:T===fi?U=t.DEPTH_COMPONENT32F:T===Da&&(U=t.DEPTH_COMPONENT16),U}function M(P,T){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==bn&&P.minFilter!==zn?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function L(P){const T=P.target;T.removeEventListener("dispose",L),A(T),T.isVideoTexture&&h.delete(T)}function E(P){const T=P.target;T.removeEventListener("dispose",E),z(T)}function A(P){const T=i.get(P);if(T.__webglInit===void 0)return;const U=P.source,W=p.get(U);if(W){const Q=W[T.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&R(P),Object.keys(W).length===0&&p.delete(U)}i.remove(P)}function R(P){const T=i.get(P);t.deleteTexture(T.__webglTexture);const U=P.source,W=p.get(U);delete W[T.__cacheKey],a.memory.textures--}function z(P){const T=i.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(T.__webglFramebuffer[W]))for(let Q=0;Q<T.__webglFramebuffer[W].length;Q++)t.deleteFramebuffer(T.__webglFramebuffer[W][Q]);else t.deleteFramebuffer(T.__webglFramebuffer[W]);T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer[W])}else{if(Array.isArray(T.__webglFramebuffer))for(let W=0;W<T.__webglFramebuffer.length;W++)t.deleteFramebuffer(T.__webglFramebuffer[W]);else t.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&t.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let W=0;W<T.__webglColorRenderbuffer.length;W++)T.__webglColorRenderbuffer[W]&&t.deleteRenderbuffer(T.__webglColorRenderbuffer[W]);T.__webglDepthRenderbuffer&&t.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const U=P.textures;for(let W=0,Q=U.length;W<Q;W++){const G=i.get(U[W]);G.__webglTexture&&(t.deleteTexture(G.__webglTexture),a.memory.textures--),i.remove(U[W])}i.remove(P)}let S=0;function w(){S=0}function I(){const P=S;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),S+=1,P}function b(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function j(P,T){const U=i.get(P);if(P.isVideoTexture&&be(P),P.isRenderTargetTexture===!1&&P.version>0&&U.__version!==P.version){const W=P.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ne(U,P,T);return}}n.bindTexture(t.TEXTURE_2D,U.__webglTexture,t.TEXTURE0+T)}function $(P,T){const U=i.get(P);if(P.version>0&&U.__version!==P.version){Ne(U,P,T);return}n.bindTexture(t.TEXTURE_2D_ARRAY,U.__webglTexture,t.TEXTURE0+T)}function B(P,T){const U=i.get(P);if(P.version>0&&U.__version!==P.version){Ne(U,P,T);return}n.bindTexture(t.TEXTURE_3D,U.__webglTexture,t.TEXTURE0+T)}function J(P,T){const U=i.get(P);if(P.version>0&&U.__version!==P.version){H(U,P,T);return}n.bindTexture(t.TEXTURE_CUBE_MAP,U.__webglTexture,t.TEXTURE0+T)}const N={[pd]:t.REPEAT,[Sr]:t.CLAMP_TO_EDGE,[md]:t.MIRRORED_REPEAT},q={[bn]:t.NEAREST,[Zy]:t.NEAREST_MIPMAP_NEAREST,[ho]:t.NEAREST_MIPMAP_LINEAR,[zn]:t.LINEAR,[Pc]:t.LINEAR_MIPMAP_NEAREST,[Mr]:t.LINEAR_MIPMAP_LINEAR},Z={[tS]:t.NEVER,[oS]:t.ALWAYS,[nS]:t.LESS,[r_]:t.LEQUAL,[iS]:t.EQUAL,[aS]:t.GEQUAL,[rS]:t.GREATER,[sS]:t.NOTEQUAL};function ie(P,T){if(T.type===fi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===zn||T.magFilter===Pc||T.magFilter===ho||T.magFilter===Mr||T.minFilter===zn||T.minFilter===Pc||T.minFilter===ho||T.minFilter===Mr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,N[T.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,N[T.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,N[T.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,q[T.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,q[T.minFilter]),T.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,Z[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===bn||T.minFilter!==ho&&T.minFilter!==Mr||T.type===fi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function ue(P,T){let U=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",L));const W=T.source;let Q=p.get(W);Q===void 0&&(Q={},p.set(W,Q));const G=b(T);if(G!==P.__cacheKey){Q[G]===void 0&&(Q[G]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,U=!0),Q[G].usedTimes++;const ve=Q[P.__cacheKey];ve!==void 0&&(Q[P.__cacheKey].usedTimes--,ve.usedTimes===0&&R(T)),P.__cacheKey=G,P.__webglTexture=Q[G].texture}return U}function Ne(P,T,U){let W=t.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(W=t.TEXTURE_2D_ARRAY),T.isData3DTexture&&(W=t.TEXTURE_3D);const Q=ue(P,T),G=T.source;n.bindTexture(W,P.__webglTexture,t.TEXTURE0+U);const ve=i.get(G);if(G.version!==ve.__version||Q===!0){n.activeTexture(t.TEXTURE0+U);const ce=it.getPrimaries(it.workingColorSpace),pe=T.colorSpace===Ui?null:it.getPrimaries(T.colorSpace),Ve=T.colorSpace===Ui||ce===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let re=v(T.image,!1,r.maxTextureSize);re=Ye(T,re);const me=s.convert(T.format,T.colorSpace),Ie=s.convert(T.type);let Ue=x(T.internalFormat,me,Ie,T.colorSpace,T.isVideoTexture);ie(W,T);let we;const Xe=T.mipmaps,Be=T.isVideoTexture!==!0,rt=ve.__version===void 0||Q===!0,F=G.dataReady,_e=M(T,re);if(T.isDepthTexture)Ue=y(T.format===Ls,T.type),rt&&(Be?n.texStorage2D(t.TEXTURE_2D,1,Ue,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,Ue,re.width,re.height,0,me,Ie,null));else if(T.isDataTexture)if(Xe.length>0){Be&&rt&&n.texStorage2D(t.TEXTURE_2D,_e,Ue,Xe[0].width,Xe[0].height);for(let K=0,ne=Xe.length;K<ne;K++)we=Xe[K],Be?F&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,we.width,we.height,me,Ie,we.data):n.texImage2D(t.TEXTURE_2D,K,Ue,we.width,we.height,0,me,Ie,we.data);T.generateMipmaps=!1}else Be?(rt&&n.texStorage2D(t.TEXTURE_2D,_e,Ue,re.width,re.height),F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,re.width,re.height,me,Ie,re.data)):n.texImage2D(t.TEXTURE_2D,0,Ue,re.width,re.height,0,me,Ie,re.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Be&&rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,_e,Ue,Xe[0].width,Xe[0].height,re.depth);for(let K=0,ne=Xe.length;K<ne;K++)if(we=Xe[K],T.format!==Hn)if(me!==null)if(Be){if(F)if(T.layerUpdates.size>0){const xe=vm(we.width,we.height,T.format,T.type);for(const Se of T.layerUpdates){const Ze=we.data.subarray(Se*xe/we.data.BYTES_PER_ELEMENT,(Se+1)*xe/we.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,Se,we.width,we.height,1,me,Ze,0,0)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,we.width,we.height,re.depth,me,we.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,K,Ue,we.width,we.height,re.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?F&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,we.width,we.height,re.depth,me,Ie,we.data):n.texImage3D(t.TEXTURE_2D_ARRAY,K,Ue,we.width,we.height,re.depth,0,me,Ie,we.data)}else{Be&&rt&&n.texStorage2D(t.TEXTURE_2D,_e,Ue,Xe[0].width,Xe[0].height);for(let K=0,ne=Xe.length;K<ne;K++)we=Xe[K],T.format!==Hn?me!==null?Be?F&&n.compressedTexSubImage2D(t.TEXTURE_2D,K,0,0,we.width,we.height,me,we.data):n.compressedTexImage2D(t.TEXTURE_2D,K,Ue,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?F&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,we.width,we.height,me,Ie,we.data):n.texImage2D(t.TEXTURE_2D,K,Ue,we.width,we.height,0,me,Ie,we.data)}else if(T.isDataArrayTexture)if(Be){if(rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,_e,Ue,re.width,re.height,re.depth),F)if(T.layerUpdates.size>0){const K=vm(re.width,re.height,T.format,T.type);for(const ne of T.layerUpdates){const xe=re.data.subarray(ne*K/re.data.BYTES_PER_ELEMENT,(ne+1)*K/re.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ne,re.width,re.height,1,me,Ie,xe)}T.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,me,Ie,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ue,re.width,re.height,re.depth,0,me,Ie,re.data);else if(T.isData3DTexture)Be?(rt&&n.texStorage3D(t.TEXTURE_3D,_e,Ue,re.width,re.height,re.depth),F&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,me,Ie,re.data)):n.texImage3D(t.TEXTURE_3D,0,Ue,re.width,re.height,re.depth,0,me,Ie,re.data);else if(T.isFramebufferTexture){if(rt)if(Be)n.texStorage2D(t.TEXTURE_2D,_e,Ue,re.width,re.height);else{let K=re.width,ne=re.height;for(let xe=0;xe<_e;xe++)n.texImage2D(t.TEXTURE_2D,xe,Ue,K,ne,0,me,Ie,null),K>>=1,ne>>=1}}else if(Xe.length>0){if(Be&&rt){const K=Ee(Xe[0]);n.texStorage2D(t.TEXTURE_2D,_e,Ue,K.width,K.height)}for(let K=0,ne=Xe.length;K<ne;K++)we=Xe[K],Be?F&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,me,Ie,we):n.texImage2D(t.TEXTURE_2D,K,Ue,me,Ie,we);T.generateMipmaps=!1}else if(Be){if(rt){const K=Ee(re);n.texStorage2D(t.TEXTURE_2D,_e,Ue,K.width,K.height)}F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,me,Ie,re)}else n.texImage2D(t.TEXTURE_2D,0,Ue,me,Ie,re);m(T)&&f(W),ve.__version=G.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function H(P,T,U){if(T.image.length!==6)return;const W=ue(P,T),Q=T.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+U);const G=i.get(Q);if(Q.version!==G.__version||W===!0){n.activeTexture(t.TEXTURE0+U);const ve=it.getPrimaries(it.workingColorSpace),ce=T.colorSpace===Ui?null:it.getPrimaries(T.colorSpace),pe=T.colorSpace===Ui||ve===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Ve=T.isCompressedTexture||T.image[0].isCompressedTexture,re=T.image[0]&&T.image[0].isDataTexture,me=[];for(let ne=0;ne<6;ne++)!Ve&&!re?me[ne]=v(T.image[ne],!0,r.maxCubemapSize):me[ne]=re?T.image[ne].image:T.image[ne],me[ne]=Ye(T,me[ne]);const Ie=me[0],Ue=s.convert(T.format,T.colorSpace),we=s.convert(T.type),Xe=x(T.internalFormat,Ue,we,T.colorSpace),Be=T.isVideoTexture!==!0,rt=G.__version===void 0||W===!0,F=Q.dataReady;let _e=M(T,Ie);ie(t.TEXTURE_CUBE_MAP,T);let K;if(Ve){Be&&rt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,_e,Xe,Ie.width,Ie.height);for(let ne=0;ne<6;ne++){K=me[ne].mipmaps;for(let xe=0;xe<K.length;xe++){const Se=K[xe];T.format!==Hn?Ue!==null?Be?F&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe,0,0,Se.width,Se.height,Ue,Se.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe,Xe,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe,0,0,Se.width,Se.height,Ue,we,Se.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe,Xe,Se.width,Se.height,0,Ue,we,Se.data)}}}else{if(K=T.mipmaps,Be&&rt){K.length>0&&_e++;const ne=Ee(me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,_e,Xe,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(re){Be?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,me[ne].width,me[ne].height,Ue,we,me[ne].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Xe,me[ne].width,me[ne].height,0,Ue,we,me[ne].data);for(let xe=0;xe<K.length;xe++){const Ze=K[xe].image[ne].image;Be?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe+1,0,0,Ze.width,Ze.height,Ue,we,Ze.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe+1,Xe,Ze.width,Ze.height,0,Ue,we,Ze.data)}}else{Be?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ue,we,me[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Xe,Ue,we,me[ne]);for(let xe=0;xe<K.length;xe++){const Se=K[xe];Be?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe+1,0,0,Ue,we,Se.image[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe+1,Xe,Ue,we,Se.image[ne])}}}m(T)&&f(t.TEXTURE_CUBE_MAP),G.__version=Q.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function te(P,T,U,W,Q,G){const ve=s.convert(U.format,U.colorSpace),ce=s.convert(U.type),pe=x(U.internalFormat,ve,ce,U.colorSpace);if(!i.get(T).__hasExternalTextures){const re=Math.max(1,T.width>>G),me=Math.max(1,T.height>>G);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?n.texImage3D(Q,G,pe,re,me,T.depth,0,ve,ce,null):n.texImage2D(Q,G,pe,re,me,0,ve,ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),Le(T)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,W,Q,i.get(U).__webglTexture,0,Te(T)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,W,Q,i.get(U).__webglTexture,G),n.bindFramebuffer(t.FRAMEBUFFER,null)}function le(P,T,U){if(t.bindRenderbuffer(t.RENDERBUFFER,P),T.depthBuffer){const W=T.depthTexture,Q=W&&W.isDepthTexture?W.type:null,G=y(T.stencilBuffer,Q),ve=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=Te(T);Le(T)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ce,G,T.width,T.height):U?t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,G,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,G,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ve,t.RENDERBUFFER,P)}else{const W=T.textures;for(let Q=0;Q<W.length;Q++){const G=W[Q],ve=s.convert(G.format,G.colorSpace),ce=s.convert(G.type),pe=x(G.internalFormat,ve,ce,G.colorSpace),Ve=Te(T);U&&Le(T)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ve,pe,T.width,T.height):Le(T)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ve,pe,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,pe,T.width,T.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function de(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),j(T.depthTexture,0);const W=i.get(T.depthTexture).__webglTexture,Q=Te(T);if(T.depthTexture.format===_s)Le(T)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,W,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,W,0);else if(T.depthTexture.format===Ls)Le(T)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,W,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,W,0);else throw new Error("Unknown depthTexture format")}function Fe(P){const T=i.get(P),U=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){const W=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),W){const Q=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,W.removeEventListener("dispose",Q)};W.addEventListener("dispose",Q),T.__depthDisposeCallback=Q}T.__boundDepthTexture=W}if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");de(T.__webglFramebuffer,P)}else if(U){T.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[W]),T.__webglDepthbuffer[W]===void 0)T.__webglDepthbuffer[W]=t.createRenderbuffer(),le(T.__webglDepthbuffer[W],P,!1);else{const Q=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,G=T.__webglDepthbuffer[W];t.bindRenderbuffer(t.RENDERBUFFER,G),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,G)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=t.createRenderbuffer(),le(T.__webglDepthbuffer,P,!1);else{const W=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=T.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Q),t.framebufferRenderbuffer(t.FRAMEBUFFER,W,t.RENDERBUFFER,Q)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function De(P,T,U){const W=i.get(P);T!==void 0&&te(W.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),U!==void 0&&Fe(P)}function Ge(P){const T=P.texture,U=i.get(P),W=i.get(T);P.addEventListener("dispose",E);const Q=P.textures,G=P.isWebGLCubeRenderTarget===!0,ve=Q.length>1;if(ve||(W.__webglTexture===void 0&&(W.__webglTexture=t.createTexture()),W.__version=T.version,a.memory.textures++),G){U.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(T.mipmaps&&T.mipmaps.length>0){U.__webglFramebuffer[ce]=[];for(let pe=0;pe<T.mipmaps.length;pe++)U.__webglFramebuffer[ce][pe]=t.createFramebuffer()}else U.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){U.__webglFramebuffer=[];for(let ce=0;ce<T.mipmaps.length;ce++)U.__webglFramebuffer[ce]=t.createFramebuffer()}else U.__webglFramebuffer=t.createFramebuffer();if(ve)for(let ce=0,pe=Q.length;ce<pe;ce++){const Ve=i.get(Q[ce]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=t.createTexture(),a.memory.textures++)}if(P.samples>0&&Le(P)===!1){U.__webglMultisampledFramebuffer=t.createFramebuffer(),U.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ce=0;ce<Q.length;ce++){const pe=Q[ce];U.__webglColorRenderbuffer[ce]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,U.__webglColorRenderbuffer[ce]);const Ve=s.convert(pe.format,pe.colorSpace),re=s.convert(pe.type),me=x(pe.internalFormat,Ve,re,pe.colorSpace,P.isXRRenderTarget===!0),Ie=Te(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ie,me,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,U.__webglColorRenderbuffer[ce])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(U.__webglDepthRenderbuffer=t.createRenderbuffer(),le(U.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(G){n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture),ie(t.TEXTURE_CUBE_MAP,T);for(let ce=0;ce<6;ce++)if(T.mipmaps&&T.mipmaps.length>0)for(let pe=0;pe<T.mipmaps.length;pe++)te(U.__webglFramebuffer[ce][pe],P,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,pe);else te(U.__webglFramebuffer[ce],P,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(T)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ve){for(let ce=0,pe=Q.length;ce<pe;ce++){const Ve=Q[ce],re=i.get(Ve);n.bindTexture(t.TEXTURE_2D,re.__webglTexture),ie(t.TEXTURE_2D,Ve),te(U.__webglFramebuffer,P,Ve,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,0),m(Ve)&&f(t.TEXTURE_2D)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ce=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,W.__webglTexture),ie(ce,T),T.mipmaps&&T.mipmaps.length>0)for(let pe=0;pe<T.mipmaps.length;pe++)te(U.__webglFramebuffer[pe],P,T,t.COLOR_ATTACHMENT0,ce,pe);else te(U.__webglFramebuffer,P,T,t.COLOR_ATTACHMENT0,ce,0);m(T)&&f(ce),n.unbindTexture()}P.depthBuffer&&Fe(P)}function Ke(P){const T=P.textures;for(let U=0,W=T.length;U<W;U++){const Q=T[U];if(m(Q)){const G=P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ve=i.get(Q).__webglTexture;n.bindTexture(G,ve),f(G),n.unbindTexture()}}}const ee=[],D=[];function ze(P){if(P.samples>0){if(Le(P)===!1){const T=P.textures,U=P.width,W=P.height;let Q=t.COLOR_BUFFER_BIT;const G=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ve=i.get(P),ce=T.length>1;if(ce)for(let pe=0;pe<T.length;pe++)n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let pe=0;pe<T.length;pe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),ce){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ve.__webglColorRenderbuffer[pe]);const Ve=i.get(T[pe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ve,0)}t.blitFramebuffer(0,0,U,W,0,0,U,W,Q,t.NEAREST),l===!0&&(ee.length=0,D.length=0,ee.push(t.COLOR_ATTACHMENT0+pe),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ee.push(G),D.push(G),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,D)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ee))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ce)for(let pe=0;pe<T.length;pe++){n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,ve.__webglColorRenderbuffer[pe]);const Ve=i.get(T[pe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,Ve,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const T=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[T])}}}function Te(P){return Math.min(r.maxSamples,P.samples)}function Le(P){const T=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function be(P){const T=a.render.frame;h.get(P)!==T&&(h.set(P,T),P.update())}function Ye(P,T){const U=P.colorSpace,W=P.format,Q=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||U!==nr&&U!==Ui&&(it.getTransfer(U)===ut?(W!==Hn||Q!==yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),T}function Ee(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(u.width=P.naturalWidth||P.width,u.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(u.width=P.displayWidth,u.height=P.displayHeight):(u.width=P.width,u.height=P.height),u}this.allocateTextureUnit=I,this.resetTextureUnits=w,this.setTexture2D=j,this.setTexture2DArray=$,this.setTexture3D=B,this.setTextureCube=J,this.rebindTextures=De,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=te,this.useMultisampledRTT=Le}function fT(t,e){function n(i,r=Ui){let s;const a=it.getTransfer(r);if(i===yi)return t.UNSIGNED_BYTE;if(i===Hf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Vf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===qv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===$v)return t.BYTE;if(i===Yv)return t.SHORT;if(i===Da)return t.UNSIGNED_SHORT;if(i===jf)return t.INT;if(i===Pr)return t.UNSIGNED_INT;if(i===fi)return t.FLOAT;if(i===za)return t.HALF_FLOAT;if(i===Kv)return t.ALPHA;if(i===Zv)return t.RGB;if(i===Hn)return t.RGBA;if(i===Qv)return t.LUMINANCE;if(i===Jv)return t.LUMINANCE_ALPHA;if(i===_s)return t.DEPTH_COMPONENT;if(i===Ls)return t.DEPTH_STENCIL;if(i===e_)return t.RED;if(i===Gf)return t.RED_INTEGER;if(i===t_)return t.RG;if(i===Wf)return t.RG_INTEGER;if(i===Xf)return t.RGBA_INTEGER;if(i===Ko||i===Zo||i===Qo||i===Jo)if(a===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ko)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Zo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Qo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Jo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ko)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Zo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Qo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Jo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===gd||i===vd||i===_d||i===xd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===gd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===vd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_d)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===yd||i===Sd||i===Md)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===yd||i===Sd)return a===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Md)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ed||i===wd||i===Td||i===Ad||i===Cd||i===bd||i===Rd||i===Pd||i===Nd||i===Ld||i===Dd||i===Id||i===Ud||i===Fd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ed)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===wd)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Td)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ad)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Cd)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===bd)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Rd)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Pd)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Nd)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ld)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Dd)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Id)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ud)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fd)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===el||i===Od||i===kd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===el)return a===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Od)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===kd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===n_||i===Bd||i===zd||i===jd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===el)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Bd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===zd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===jd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ns?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class hT extends An{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class us extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pT={type:"move"};class au{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new us,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new us,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new us,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),f=this._getHandJoint(u,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],p=h.position.distanceTo(d.position),g=.02,_=.005;u.inputState.pinching&&p>g+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&p<=g-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pT)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new us;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const mT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gT=`
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

}`;class vT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new un,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Qi({vertexShader:mT,fragmentShader:gT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new St(new Wa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _T extends Os{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,h=null,d=null,p=null,g=null,_=null;const v=new vT,m=n.getContextAttributes();let f=null,x=null;const y=[],M=[],L=new Je;let E=null;const A=new An;A.layers.enable(1),A.viewport=new xt;const R=new An;R.layers.enable(2),R.viewport=new xt;const z=[A,R],S=new hT;S.layers.enable(1),S.layers.enable(2);let w=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let te=y[H];return te===void 0&&(te=new au,y[H]=te),te.getTargetRaySpace()},this.getControllerGrip=function(H){let te=y[H];return te===void 0&&(te=new au,y[H]=te),te.getGripSpace()},this.getHand=function(H){let te=y[H];return te===void 0&&(te=new au,y[H]=te),te.getHandSpace()};function b(H){const te=M.indexOf(H.inputSource);if(te===-1)return;const le=y[te];le!==void 0&&(le.update(H.inputSource,H.frame,u||a),le.dispatchEvent({type:H.type,data:H.inputSource}))}function j(){r.removeEventListener("select",b),r.removeEventListener("selectstart",b),r.removeEventListener("selectend",b),r.removeEventListener("squeeze",b),r.removeEventListener("squeezestart",b),r.removeEventListener("squeezeend",b),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",$);for(let H=0;H<y.length;H++){const te=M[H];te!==null&&(M[H]=null,y[H].disconnect(te))}w=null,I=null,v.reset(),e.setRenderTarget(f),g=null,p=null,d=null,r=null,x=null,Ne.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(H){u=H},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",b),r.addEventListener("selectstart",b),r.addEventListener("selectend",b),r.addEventListener("squeeze",b),r.addEventListener("squeezestart",b),r.addEventListener("squeezeend",b),r.addEventListener("end",j),r.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await n.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(L),r.renderState.layers===void 0){const te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,te),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),x=new Nr(g.framebufferWidth,g.framebufferHeight,{format:Hn,type:yi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let te=null,le=null,de=null;m.depth&&(de=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,te=m.stencil?Ls:_s,le=m.stencil?Ns:Pr);const Fe={colorFormat:n.RGBA8,depthFormat:de,scaleFactor:s};d=new XRWebGLBinding(r,n),p=d.createProjectionLayer(Fe),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),x=new Nr(p.textureWidth,p.textureHeight,{format:Hn,type:yi,depthTexture:new v_(p.textureWidth,p.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),Ne.setContext(r),Ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function $(H){for(let te=0;te<H.removed.length;te++){const le=H.removed[te],de=M.indexOf(le);de>=0&&(M[de]=null,y[de].disconnect(le))}for(let te=0;te<H.added.length;te++){const le=H.added[te];let de=M.indexOf(le);if(de===-1){for(let De=0;De<y.length;De++)if(De>=M.length){M.push(le),de=De;break}else if(M[De]===null){M[De]=le,de=De;break}if(de===-1)break}const Fe=y[de];Fe&&Fe.connect(le)}}const B=new V,J=new V;function N(H,te,le){B.setFromMatrixPosition(te.matrixWorld),J.setFromMatrixPosition(le.matrixWorld);const de=B.distanceTo(J),Fe=te.projectionMatrix.elements,De=le.projectionMatrix.elements,Ge=Fe[14]/(Fe[10]-1),Ke=Fe[14]/(Fe[10]+1),ee=(Fe[9]+1)/Fe[5],D=(Fe[9]-1)/Fe[5],ze=(Fe[8]-1)/Fe[0],Te=(De[8]+1)/De[0],Le=Ge*ze,be=Ge*Te,Ye=de/(-ze+Te),Ee=Ye*-ze;if(te.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Ee),H.translateZ(Ye),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),Fe[10]===-1)H.projectionMatrix.copy(te.projectionMatrix),H.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const P=Ge+Ye,T=Ke+Ye,U=Le-Ee,W=be+(de-Ee),Q=ee*Ke/T*P,G=D*Ke/T*P;H.projectionMatrix.makePerspective(U,W,Q,G,P,T),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function q(H,te){te===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(te.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;let te=H.near,le=H.far;v.texture!==null&&(v.depthNear>0&&(te=v.depthNear),v.depthFar>0&&(le=v.depthFar)),S.near=R.near=A.near=te,S.far=R.far=A.far=le,(w!==S.near||I!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),w=S.near,I=S.far);const de=H.parent,Fe=S.cameras;q(S,de);for(let De=0;De<Fe.length;De++)q(Fe[De],de);Fe.length===2?N(S,A,R):S.projectionMatrix.copy(A.projectionMatrix),Z(H,S,de)};function Z(H,te,le){le===null?H.matrix.copy(te.matrixWorld):(H.matrix.copy(le.matrixWorld),H.matrix.invert(),H.matrix.multiply(te.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(te.projectionMatrix),H.projectionMatrixInverse.copy(te.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Hd*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(p===null&&g===null))return l},this.setFoveation=function(H){l=H,p!==null&&(p.fixedFoveation=H),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=H)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let ie=null;function ue(H,te){if(h=te.getViewerPose(u||a),_=te,h!==null){const le=h.views;g!==null&&(e.setRenderTargetFramebuffer(x,g.framebuffer),e.setRenderTarget(x));let de=!1;le.length!==S.cameras.length&&(S.cameras.length=0,de=!0);for(let De=0;De<le.length;De++){const Ge=le[De];let Ke=null;if(g!==null)Ke=g.getViewport(Ge);else{const D=d.getViewSubImage(p,Ge);Ke=D.viewport,De===0&&(e.setRenderTargetTextures(x,D.colorTexture,p.ignoreDepthValues?void 0:D.depthStencilTexture),e.setRenderTarget(x))}let ee=z[De];ee===void 0&&(ee=new An,ee.layers.enable(De),ee.viewport=new xt,z[De]=ee),ee.matrix.fromArray(Ge.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(Ge.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),De===0&&(S.matrix.copy(ee.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),de===!0&&S.cameras.push(ee)}const Fe=r.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")){const De=d.getDepthInformation(le[0]);De&&De.isValid&&De.texture&&v.init(e,De,r.renderState)}}for(let le=0;le<y.length;le++){const de=M[le],Fe=y[le];de!==null&&Fe!==void 0&&Fe.update(de,te,u||a)}ie&&ie(H,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),_=null}const Ne=new m_;Ne.setAnimationLoop(ue),this.setAnimationLoop=function(H){ie=H},this.dispose=function(){}}}const cr=new ei,xT=new ht;function yT(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,f_(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,x,y,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f)):f.isMeshStandardMaterial?(s(m,f),p(m,f),f.isMeshPhysicalMaterial&&g(m,f,M)):f.isMeshMatcapMaterial?(s(m,f),_(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),v(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,x,y):f.isSpriteMaterial?u(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===cn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===cn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=e.get(f),y=x.envMap,M=x.envMapRotation;y&&(m.envMap.value=y,cr.copy(M),cr.x*=-1,cr.y*=-1,cr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),m.envMapRotation.value.setFromMatrix4(xT.makeRotationFromEuler(cr)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,x,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=y*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function p(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function g(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===cn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const x=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ST(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const M=y.program;i.uniformBlockBinding(x,M)}function u(x,y){let M=r[x.id];M===void 0&&(_(x),M=h(x),r[x.id]=M,x.addEventListener("dispose",m));const L=y.program;i.updateUBOMapping(x,L);const E=e.render.frame;s[x.id]!==E&&(p(x),s[x.id]=E)}function h(x){const y=d();x.__bindingPointIndex=y;const M=t.createBuffer(),L=x.__size,E=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,L,E),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,M),M}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(x){const y=r[x.id],M=x.uniforms,L=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let E=0,A=M.length;E<A;E++){const R=Array.isArray(M[E])?M[E]:[M[E]];for(let z=0,S=R.length;z<S;z++){const w=R[z];if(g(w,E,z,L)===!0){const I=w.__offset,b=Array.isArray(w.value)?w.value:[w.value];let j=0;for(let $=0;$<b.length;$++){const B=b[$],J=v(B);typeof B=="number"||typeof B=="boolean"?(w.__data[0]=B,t.bufferSubData(t.UNIFORM_BUFFER,I+j,w.__data)):B.isMatrix3?(w.__data[0]=B.elements[0],w.__data[1]=B.elements[1],w.__data[2]=B.elements[2],w.__data[3]=0,w.__data[4]=B.elements[3],w.__data[5]=B.elements[4],w.__data[6]=B.elements[5],w.__data[7]=0,w.__data[8]=B.elements[6],w.__data[9]=B.elements[7],w.__data[10]=B.elements[8],w.__data[11]=0):(B.toArray(w.__data,j),j+=J.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,I,w.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(x,y,M,L){const E=x.value,A=y+"_"+M;if(L[A]===void 0)return typeof E=="number"||typeof E=="boolean"?L[A]=E:L[A]=E.clone(),!0;{const R=L[A];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return L[A]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function _(x){const y=x.uniforms;let M=0;const L=16;for(let A=0,R=y.length;A<R;A++){const z=Array.isArray(y[A])?y[A]:[y[A]];for(let S=0,w=z.length;S<w;S++){const I=z[S],b=Array.isArray(I.value)?I.value:[I.value];for(let j=0,$=b.length;j<$;j++){const B=b[j],J=v(B),N=M%L,q=N%J.boundary,Z=N+q;M+=q,Z!==0&&L-Z<J.storage&&(M+=L-Z),I.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=M,M+=J.storage}}}const E=M%L;return E>0&&(M+=L-E),x.__size=M,x.__cache={},this}function v(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function m(x){const y=x.target;y.removeEventListener("dispose",m);const M=a.indexOf(y.__bindingPointIndex);a.splice(M,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function f(){for(const x in r)t.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:l,update:u,dispose:f}}class MT{constructor(e={}){const{canvas:n=cS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),_=new Int32Array(4);let v=null,m=null;const f=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Yn,this.toneMapping=Yi,this.toneMappingExposure=1;const y=this;let M=!1,L=0,E=0,A=null,R=-1,z=null;const S=new xt,w=new xt;let I=null;const b=new $e(0);let j=0,$=n.width,B=n.height,J=1,N=null,q=null;const Z=new xt(0,0,$,B),ie=new xt(0,0,$,B);let ue=!1;const Ne=new qf;let H=!1,te=!1;const le=new ht,de=new ht,Fe=new V,De=new xt,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ke=!1;function ee(){return A===null?J:1}let D=i;function ze(C,O){return n.getContext(C,O)}try{const C={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${zf}`),n.addEventListener("webglcontextlost",ne,!1),n.addEventListener("webglcontextrestored",xe,!1),n.addEventListener("webglcontextcreationerror",Se,!1),D===null){const O="webgl2";if(D=ze(O,C),D===null)throw ze(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Te,Le,be,Ye,Ee,P,T,U,W,Q,G,ve,ce,pe,Ve,re,me,Ie,Ue,we,Xe,Be,rt,F;function _e(){Te=new C1(D),Te.init(),Be=new fT(D,Te),Le=new S1(D,Te,e,Be),be=new cT(D),Le.reverseDepthBuffer&&be.buffers.depth.setReversed(!0),Ye=new P1(D),Ee=new Yw,P=new dT(D,Te,be,Ee,Le,Be,Ye),T=new E1(y),U=new A1(y),W=new OS(D),rt=new x1(D,W),Q=new b1(D,W,Ye,rt),G=new L1(D,Q,W,Ye),Ue=new N1(D,Le,P),re=new M1(Ee),ve=new $w(y,T,U,Te,Le,rt,re),ce=new yT(y,Ee),pe=new Kw,Ve=new nT(Te),Ie=new _1(y,T,U,be,G,p,l),me=new oT(y,G,Le),F=new ST(D,Ye,Le,be),we=new y1(D,Te,Ye),Xe=new R1(D,Te,Ye),Ye.programs=ve.programs,y.capabilities=Le,y.extensions=Te,y.properties=Ee,y.renderLists=pe,y.shadowMap=me,y.state=be,y.info=Ye}_e();const K=new _T(y,D);this.xr=K,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const C=Te.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Te.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(C){C!==void 0&&(J=C,this.setSize($,B,!1))},this.getSize=function(C){return C.set($,B)},this.setSize=function(C,O,X=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=C,B=O,n.width=Math.floor(C*J),n.height=Math.floor(O*J),X===!0&&(n.style.width=C+"px",n.style.height=O+"px"),this.setViewport(0,0,C,O)},this.getDrawingBufferSize=function(C){return C.set($*J,B*J).floor()},this.setDrawingBufferSize=function(C,O,X){$=C,B=O,J=X,n.width=Math.floor(C*X),n.height=Math.floor(O*X),this.setViewport(0,0,C,O)},this.getCurrentViewport=function(C){return C.copy(S)},this.getViewport=function(C){return C.copy(Z)},this.setViewport=function(C,O,X,Y){C.isVector4?Z.set(C.x,C.y,C.z,C.w):Z.set(C,O,X,Y),be.viewport(S.copy(Z).multiplyScalar(J).round())},this.getScissor=function(C){return C.copy(ie)},this.setScissor=function(C,O,X,Y){C.isVector4?ie.set(C.x,C.y,C.z,C.w):ie.set(C,O,X,Y),be.scissor(w.copy(ie).multiplyScalar(J).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(C){be.setScissorTest(ue=C)},this.setOpaqueSort=function(C){N=C},this.setTransparentSort=function(C){q=C},this.getClearColor=function(C){return C.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(C=!0,O=!0,X=!0){let Y=0;if(C){let k=!1;if(A!==null){const oe=A.texture.format;k=oe===Xf||oe===Wf||oe===Gf}if(k){const oe=A.texture.type,ye=oe===yi||oe===Pr||oe===Da||oe===Ns||oe===Hf||oe===Vf,Ae=Ie.getClearColor(),Ce=Ie.getClearAlpha(),Oe=Ae.r,ke=Ae.g,Re=Ae.b;ye?(g[0]=Oe,g[1]=ke,g[2]=Re,g[3]=Ce,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=Oe,_[1]=ke,_[2]=Re,_[3]=Ce,D.clearBufferiv(D.COLOR,0,_))}else Y|=D.COLOR_BUFFER_BIT}O&&(Y|=D.DEPTH_BUFFER_BIT,D.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),X&&(Y|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ne,!1),n.removeEventListener("webglcontextrestored",xe,!1),n.removeEventListener("webglcontextcreationerror",Se,!1),pe.dispose(),Ve.dispose(),Ee.dispose(),T.dispose(),U.dispose(),G.dispose(),rt.dispose(),F.dispose(),ve.dispose(),K.dispose(),K.removeEventListener("sessionstart",nh),K.removeEventListener("sessionend",ih),ir.stop()};function ne(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const C=Ye.autoReset,O=me.enabled,X=me.autoUpdate,Y=me.needsUpdate,k=me.type;_e(),Ye.autoReset=C,me.enabled=O,me.autoUpdate=X,me.needsUpdate=Y,me.type=k}function Se(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ze(C){const O=C.target;O.removeEventListener("dispose",Ze),Et(O)}function Et(C){Qt(C),Ee.remove(C)}function Qt(C){const O=Ee.get(C).programs;O!==void 0&&(O.forEach(function(X){ve.releaseProgram(X)}),C.isShaderMaterial&&ve.releaseShaderCache(C))}this.renderBufferDirect=function(C,O,X,Y,k,oe){O===null&&(O=Ge);const ye=k.isMesh&&k.matrixWorld.determinant()<0,Ae=C_(C,O,X,Y,k);be.setMaterial(Y,ye);let Ce=X.index,Oe=1;if(Y.wireframe===!0){if(Ce=Q.getWireframeAttribute(X),Ce===void 0)return;Oe=2}const ke=X.drawRange,Re=X.attributes.position;let st=ke.start*Oe,lt=(ke.start+ke.count)*Oe;oe!==null&&(st=Math.max(st,oe.start*Oe),lt=Math.min(lt,(oe.start+oe.count)*Oe)),Ce!==null?(st=Math.max(st,0),lt=Math.min(lt,Ce.count)):Re!=null&&(st=Math.max(st,0),lt=Math.min(lt,Re.count));const vt=lt-st;if(vt<0||vt===1/0)return;rt.setup(k,Y,Ae,X,Ce);let dn,tt=we;if(Ce!==null&&(dn=W.get(Ce),tt=Xe,tt.setIndex(dn)),k.isMesh)Y.wireframe===!0?(be.setLineWidth(Y.wireframeLinewidth*ee()),tt.setMode(D.LINES)):tt.setMode(D.TRIANGLES);else if(k.isLine){let Pe=Y.linewidth;Pe===void 0&&(Pe=1),be.setLineWidth(Pe*ee()),k.isLineSegments?tt.setMode(D.LINES):k.isLineLoop?tt.setMode(D.LINE_LOOP):tt.setMode(D.LINE_STRIP)}else k.isPoints?tt.setMode(D.POINTS):k.isSprite&&tt.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)tt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Te.get("WEBGL_multi_draw"))tt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Pe=k._multiDrawStarts,Ut=k._multiDrawCounts,nt=k._multiDrawCount,Ln=Ce?W.get(Ce).bytesPerElement:1,Ur=Ee.get(Y).currentProgram.getUniforms();for(let fn=0;fn<nt;fn++)Ur.setValue(D,"_gl_DrawID",fn),tt.render(Pe[fn]/Ln,Ut[fn])}else if(k.isInstancedMesh)tt.renderInstances(st,vt,k.count);else if(X.isInstancedBufferGeometry){const Pe=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ut=Math.min(X.instanceCount,Pe);tt.renderInstances(st,vt,Ut)}else tt.render(st,vt)};function et(C,O,X){C.transparent===!0&&C.side===Zn&&C.forceSinglePass===!1?(C.side=cn,C.needsUpdate=!0,$a(C,O,X),C.side=Zi,C.needsUpdate=!0,$a(C,O,X),C.side=Zn):$a(C,O,X)}this.compile=function(C,O,X=null){X===null&&(X=C),m=Ve.get(X),m.init(O),x.push(m),X.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),C!==X&&C.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights();const Y=new Set;return C.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const oe=k.material;if(oe)if(Array.isArray(oe))for(let ye=0;ye<oe.length;ye++){const Ae=oe[ye];et(Ae,X,k),Y.add(Ae)}else et(oe,X,k),Y.add(oe)}),x.pop(),m=null,Y},this.compileAsync=function(C,O,X=null){const Y=this.compile(C,O,X);return new Promise(k=>{function oe(){if(Y.forEach(function(ye){Ee.get(ye).currentProgram.isReady()&&Y.delete(ye)}),Y.size===0){k(C);return}setTimeout(oe,10)}Te.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Jt=null;function ti(C){Jt&&Jt(C)}function nh(){ir.stop()}function ih(){ir.start()}const ir=new m_;ir.setAnimationLoop(ti),typeof self<"u"&&ir.setContext(self),this.setAnimationLoop=function(C){Jt=C,K.setAnimationLoop(C),C===null?ir.stop():ir.start()},K.addEventListener("sessionstart",nh),K.addEventListener("sessionend",ih),this.render=function(C,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(O),O=K.getCamera()),C.isScene===!0&&C.onBeforeRender(y,C,O,A),m=Ve.get(C,x.length),m.init(O),x.push(m),de.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ne.setFromProjectionMatrix(de),te=this.localClippingEnabled,H=re.init(this.clippingPlanes,te),v=pe.get(C,f.length),v.init(),f.push(v),K.enabled===!0&&K.isPresenting===!0){const oe=y.xr.getDepthSensingMesh();oe!==null&&ec(oe,O,-1/0,y.sortObjects)}ec(C,O,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(N,q),Ke=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Ke&&Ie.addToRenderList(v,C),this.info.render.frame++,H===!0&&re.beginShadows();const X=m.state.shadowsArray;me.render(X,C,O),H===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=v.opaque,k=v.transmissive;if(m.setupLights(),O.isArrayCamera){const oe=O.cameras;if(k.length>0)for(let ye=0,Ae=oe.length;ye<Ae;ye++){const Ce=oe[ye];sh(Y,k,C,Ce)}Ke&&Ie.render(C);for(let ye=0,Ae=oe.length;ye<Ae;ye++){const Ce=oe[ye];rh(v,C,Ce,Ce.viewport)}}else k.length>0&&sh(Y,k,C,O),Ke&&Ie.render(C),rh(v,C,O);A!==null&&(P.updateMultisampleRenderTarget(A),P.updateRenderTargetMipmap(A)),C.isScene===!0&&C.onAfterRender(y,C,O),rt.resetDefaultState(),R=-1,z=null,x.pop(),x.length>0?(m=x[x.length-1],H===!0&&re.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function ec(C,O,X,Y){if(C.visible===!1)return;if(C.layers.test(O.layers)){if(C.isGroup)X=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(O);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Ne.intersectsSprite(C)){Y&&De.setFromMatrixPosition(C.matrixWorld).applyMatrix4(de);const ye=G.update(C),Ae=C.material;Ae.visible&&v.push(C,ye,Ae,X,De.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Ne.intersectsObject(C))){const ye=G.update(C),Ae=C.material;if(Y&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),De.copy(C.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),De.copy(ye.boundingSphere.center)),De.applyMatrix4(C.matrixWorld).applyMatrix4(de)),Array.isArray(Ae)){const Ce=ye.groups;for(let Oe=0,ke=Ce.length;Oe<ke;Oe++){const Re=Ce[Oe],st=Ae[Re.materialIndex];st&&st.visible&&v.push(C,ye,st,X,De.z,Re)}}else Ae.visible&&v.push(C,ye,Ae,X,De.z,null)}}const oe=C.children;for(let ye=0,Ae=oe.length;ye<Ae;ye++)ec(oe[ye],O,X,Y)}function rh(C,O,X,Y){const k=C.opaque,oe=C.transmissive,ye=C.transparent;m.setupLightsView(X),H===!0&&re.setGlobalState(y.clippingPlanes,X),Y&&be.viewport(S.copy(Y)),k.length>0&&Xa(k,O,X),oe.length>0&&Xa(oe,O,X),ye.length>0&&Xa(ye,O,X),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function sh(C,O,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Y.id]===void 0&&(m.state.transmissionRenderTarget[Y.id]=new Nr(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")||Te.has("EXT_color_buffer_float")?za:yi,minFilter:Mr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const oe=m.state.transmissionRenderTarget[Y.id],ye=Y.viewport||S;oe.setSize(ye.z,ye.w);const Ae=y.getRenderTarget();y.setRenderTarget(oe),y.getClearColor(b),j=y.getClearAlpha(),j<1&&y.setClearColor(16777215,.5),y.clear(),Ke&&Ie.render(X);const Ce=y.toneMapping;y.toneMapping=Yi;const Oe=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),m.setupLightsView(Y),H===!0&&re.setGlobalState(y.clippingPlanes,Y),Xa(C,X,Y),P.updateMultisampleRenderTarget(oe),P.updateRenderTargetMipmap(oe),Te.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Re=0,st=O.length;Re<st;Re++){const lt=O[Re],vt=lt.object,dn=lt.geometry,tt=lt.material,Pe=lt.group;if(tt.side===Zn&&vt.layers.test(Y.layers)){const Ut=tt.side;tt.side=cn,tt.needsUpdate=!0,ah(vt,X,Y,dn,tt,Pe),tt.side=Ut,tt.needsUpdate=!0,ke=!0}}ke===!0&&(P.updateMultisampleRenderTarget(oe),P.updateRenderTargetMipmap(oe))}y.setRenderTarget(Ae),y.setClearColor(b,j),Oe!==void 0&&(Y.viewport=Oe),y.toneMapping=Ce}function Xa(C,O,X){const Y=O.isScene===!0?O.overrideMaterial:null;for(let k=0,oe=C.length;k<oe;k++){const ye=C[k],Ae=ye.object,Ce=ye.geometry,Oe=Y===null?ye.material:Y,ke=ye.group;Ae.layers.test(X.layers)&&ah(Ae,O,X,Ce,Oe,ke)}}function ah(C,O,X,Y,k,oe){C.onBeforeRender(y,O,X,Y,k,oe),C.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),k.onBeforeRender(y,O,X,Y,C,oe),k.transparent===!0&&k.side===Zn&&k.forceSinglePass===!1?(k.side=cn,k.needsUpdate=!0,y.renderBufferDirect(X,O,Y,k,C,oe),k.side=Zi,k.needsUpdate=!0,y.renderBufferDirect(X,O,Y,k,C,oe),k.side=Zn):y.renderBufferDirect(X,O,Y,k,C,oe),C.onAfterRender(y,O,X,Y,k,oe)}function $a(C,O,X){O.isScene!==!0&&(O=Ge);const Y=Ee.get(C),k=m.state.lights,oe=m.state.shadowsArray,ye=k.state.version,Ae=ve.getParameters(C,k.state,oe,O,X),Ce=ve.getProgramCacheKey(Ae);let Oe=Y.programs;Y.environment=C.isMeshStandardMaterial?O.environment:null,Y.fog=O.fog,Y.envMap=(C.isMeshStandardMaterial?U:T).get(C.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&C.envMap===null?O.environmentRotation:C.envMapRotation,Oe===void 0&&(C.addEventListener("dispose",Ze),Oe=new Map,Y.programs=Oe);let ke=Oe.get(Ce);if(ke!==void 0){if(Y.currentProgram===ke&&Y.lightsStateVersion===ye)return lh(C,Ae),ke}else Ae.uniforms=ve.getUniforms(C),C.onBeforeCompile(Ae,y),ke=ve.acquireProgram(Ae,Ce),Oe.set(Ce,ke),Y.uniforms=Ae.uniforms;const Re=Y.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Re.clippingPlanes=re.uniform),lh(C,Ae),Y.needsLights=R_(C),Y.lightsStateVersion=ye,Y.needsLights&&(Re.ambientLightColor.value=k.state.ambient,Re.lightProbe.value=k.state.probe,Re.directionalLights.value=k.state.directional,Re.directionalLightShadows.value=k.state.directionalShadow,Re.spotLights.value=k.state.spot,Re.spotLightShadows.value=k.state.spotShadow,Re.rectAreaLights.value=k.state.rectArea,Re.ltc_1.value=k.state.rectAreaLTC1,Re.ltc_2.value=k.state.rectAreaLTC2,Re.pointLights.value=k.state.point,Re.pointLightShadows.value=k.state.pointShadow,Re.hemisphereLights.value=k.state.hemi,Re.directionalShadowMap.value=k.state.directionalShadowMap,Re.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Re.spotShadowMap.value=k.state.spotShadowMap,Re.spotLightMatrix.value=k.state.spotLightMatrix,Re.spotLightMap.value=k.state.spotLightMap,Re.pointShadowMap.value=k.state.pointShadowMap,Re.pointShadowMatrix.value=k.state.pointShadowMatrix),Y.currentProgram=ke,Y.uniformsList=null,ke}function oh(C){if(C.uniformsList===null){const O=C.currentProgram.getUniforms();C.uniformsList=nl.seqWithValue(O.seq,C.uniforms)}return C.uniformsList}function lh(C,O){const X=Ee.get(C);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.batchingColor=O.batchingColor,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function C_(C,O,X,Y,k){O.isScene!==!0&&(O=Ge),P.resetTextureUnits();const oe=O.fog,ye=Y.isMeshStandardMaterial?O.environment:null,Ae=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:nr,Ce=(Y.isMeshStandardMaterial?U:T).get(Y.envMap||ye),Oe=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,ke=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Re=!!X.morphAttributes.position,st=!!X.morphAttributes.normal,lt=!!X.morphAttributes.color;let vt=Yi;Y.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(vt=y.toneMapping);const dn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,tt=dn!==void 0?dn.length:0,Pe=Ee.get(Y),Ut=m.state.lights;if(H===!0&&(te===!0||C!==z)){const Mn=C===z&&Y.id===R;re.setState(Y,C,Mn)}let nt=!1;Y.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Ut.state.version||Pe.outputColorSpace!==Ae||k.isBatchedMesh&&Pe.batching===!1||!k.isBatchedMesh&&Pe.batching===!0||k.isBatchedMesh&&Pe.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Pe.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Pe.instancing===!1||!k.isInstancedMesh&&Pe.instancing===!0||k.isSkinnedMesh&&Pe.skinning===!1||!k.isSkinnedMesh&&Pe.skinning===!0||k.isInstancedMesh&&Pe.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Pe.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Pe.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Pe.instancingMorph===!1&&k.morphTexture!==null||Pe.envMap!==Ce||Y.fog===!0&&Pe.fog!==oe||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==re.numPlanes||Pe.numIntersection!==re.numIntersection)||Pe.vertexAlphas!==Oe||Pe.vertexTangents!==ke||Pe.morphTargets!==Re||Pe.morphNormals!==st||Pe.morphColors!==lt||Pe.toneMapping!==vt||Pe.morphTargetsCount!==tt)&&(nt=!0):(nt=!0,Pe.__version=Y.version);let Ln=Pe.currentProgram;nt===!0&&(Ln=$a(Y,O,k));let Ur=!1,fn=!1,tc=!1;const yt=Ln.getUniforms(),Mi=Pe.uniforms;if(be.useProgram(Ln.program)&&(Ur=!0,fn=!0,tc=!0),Y.id!==R&&(R=Y.id,fn=!0),Ur||z!==C){Le.reverseDepthBuffer?(le.copy(C.projectionMatrix),dS(le),fS(le),yt.setValue(D,"projectionMatrix",le)):yt.setValue(D,"projectionMatrix",C.projectionMatrix),yt.setValue(D,"viewMatrix",C.matrixWorldInverse);const Mn=yt.map.cameraPosition;Mn!==void 0&&Mn.setValue(D,Fe.setFromMatrixPosition(C.matrixWorld)),Le.logarithmicDepthBuffer&&yt.setValue(D,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&yt.setValue(D,"isOrthographic",C.isOrthographicCamera===!0),z!==C&&(z=C,fn=!0,tc=!0)}if(k.isSkinnedMesh){yt.setOptional(D,k,"bindMatrix"),yt.setOptional(D,k,"bindMatrixInverse");const Mn=k.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),yt.setValue(D,"boneTexture",Mn.boneTexture,P))}k.isBatchedMesh&&(yt.setOptional(D,k,"batchingTexture"),yt.setValue(D,"batchingTexture",k._matricesTexture,P),yt.setOptional(D,k,"batchingIdTexture"),yt.setValue(D,"batchingIdTexture",k._indirectTexture,P),yt.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&yt.setValue(D,"batchingColorTexture",k._colorsTexture,P));const nc=X.morphAttributes;if((nc.position!==void 0||nc.normal!==void 0||nc.color!==void 0)&&Ue.update(k,X,Ln),(fn||Pe.receiveShadow!==k.receiveShadow)&&(Pe.receiveShadow=k.receiveShadow,yt.setValue(D,"receiveShadow",k.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Mi.envMap.value=Ce,Mi.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&O.environment!==null&&(Mi.envMapIntensity.value=O.environmentIntensity),fn&&(yt.setValue(D,"toneMappingExposure",y.toneMappingExposure),Pe.needsLights&&b_(Mi,tc),oe&&Y.fog===!0&&ce.refreshFogUniforms(Mi,oe),ce.refreshMaterialUniforms(Mi,Y,J,B,m.state.transmissionRenderTarget[C.id]),nl.upload(D,oh(Pe),Mi,P)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(nl.upload(D,oh(Pe),Mi,P),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&yt.setValue(D,"center",k.center),yt.setValue(D,"modelViewMatrix",k.modelViewMatrix),yt.setValue(D,"normalMatrix",k.normalMatrix),yt.setValue(D,"modelMatrix",k.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Mn=Y.uniformsGroups;for(let ic=0,P_=Mn.length;ic<P_;ic++){const ch=Mn[ic];F.update(ch,Ln),F.bind(ch,Ln)}}return Ln}function b_(C,O){C.ambientLightColor.needsUpdate=O,C.lightProbe.needsUpdate=O,C.directionalLights.needsUpdate=O,C.directionalLightShadows.needsUpdate=O,C.pointLights.needsUpdate=O,C.pointLightShadows.needsUpdate=O,C.spotLights.needsUpdate=O,C.spotLightShadows.needsUpdate=O,C.rectAreaLights.needsUpdate=O,C.hemisphereLights.needsUpdate=O}function R_(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(C,O,X){Ee.get(C.texture).__webglTexture=O,Ee.get(C.depthTexture).__webglTexture=X;const Y=Ee.get(C);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||Te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,O){const X=Ee.get(C);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(C,O=0,X=0){A=C,L=O,E=X;let Y=!0,k=null,oe=!1,ye=!1;if(C){const Ce=Ee.get(C);if(Ce.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(D.FRAMEBUFFER,null),Y=!1;else if(Ce.__webglFramebuffer===void 0)P.setupRenderTarget(C);else if(Ce.__hasExternalTextures)P.rebindTextures(C,Ee.get(C.texture).__webglTexture,Ee.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Re=C.depthTexture;if(Ce.__boundDepthTexture!==Re){if(Re!==null&&Ee.has(Re)&&(C.width!==Re.image.width||C.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(C)}}const Oe=C.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(ye=!0);const ke=Ee.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ke[O])?k=ke[O][X]:k=ke[O],oe=!0):C.samples>0&&P.useMultisampledRTT(C)===!1?k=Ee.get(C).__webglMultisampledFramebuffer:Array.isArray(ke)?k=ke[X]:k=ke,S.copy(C.viewport),w.copy(C.scissor),I=C.scissorTest}else S.copy(Z).multiplyScalar(J).floor(),w.copy(ie).multiplyScalar(J).floor(),I=ue;if(be.bindFramebuffer(D.FRAMEBUFFER,k)&&Y&&be.drawBuffers(C,k),be.viewport(S),be.scissor(w),be.setScissorTest(I),oe){const Ce=Ee.get(C.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ce.__webglTexture,X)}else if(ye){const Ce=Ee.get(C.texture),Oe=O||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ce.__webglTexture,X||0,Oe)}R=-1},this.readRenderTargetPixels=function(C,O,X,Y,k,oe,ye){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Ee.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ye!==void 0&&(Ae=Ae[ye]),Ae){be.bindFramebuffer(D.FRAMEBUFFER,Ae);try{const Ce=C.texture,Oe=Ce.format,ke=Ce.type;if(!Le.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=C.width-Y&&X>=0&&X<=C.height-k&&D.readPixels(O,X,Y,k,Be.convert(Oe),Be.convert(ke),oe)}finally{const Ce=A!==null?Ee.get(A).__webglFramebuffer:null;be.bindFramebuffer(D.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(C,O,X,Y,k,oe,ye){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=Ee.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ye!==void 0&&(Ae=Ae[ye]),Ae){const Ce=C.texture,Oe=Ce.format,ke=Ce.type;if(!Le.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=C.width-Y&&X>=0&&X<=C.height-k){be.bindFramebuffer(D.FRAMEBUFFER,Ae);const Re=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Re),D.bufferData(D.PIXEL_PACK_BUFFER,oe.byteLength,D.STREAM_READ),D.readPixels(O,X,Y,k,Be.convert(Oe),Be.convert(ke),0);const st=A!==null?Ee.get(A).__webglFramebuffer:null;be.bindFramebuffer(D.FRAMEBUFFER,st);const lt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await uS(D,lt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Re),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,oe),D.deleteBuffer(Re),D.deleteSync(lt),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,O=null,X=0){C.isTexture!==!0&&(tl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,C=arguments[1]);const Y=Math.pow(2,-X),k=Math.floor(C.image.width*Y),oe=Math.floor(C.image.height*Y),ye=O!==null?O.x:0,Ae=O!==null?O.y:0;P.setTexture2D(C,0),D.copyTexSubImage2D(D.TEXTURE_2D,X,0,0,ye,Ae,k,oe),be.unbindTexture()},this.copyTextureToTexture=function(C,O,X=null,Y=null,k=0){C.isTexture!==!0&&(tl("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,C=arguments[1],O=arguments[2],k=arguments[3]||0,X=null);let oe,ye,Ae,Ce,Oe,ke;X!==null?(oe=X.max.x-X.min.x,ye=X.max.y-X.min.y,Ae=X.min.x,Ce=X.min.y):(oe=C.image.width,ye=C.image.height,Ae=0,Ce=0),Y!==null?(Oe=Y.x,ke=Y.y):(Oe=0,ke=0);const Re=Be.convert(O.format),st=Be.convert(O.type);P.setTexture2D(O,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);const lt=D.getParameter(D.UNPACK_ROW_LENGTH),vt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),dn=D.getParameter(D.UNPACK_SKIP_PIXELS),tt=D.getParameter(D.UNPACK_SKIP_ROWS),Pe=D.getParameter(D.UNPACK_SKIP_IMAGES),Ut=C.isCompressedTexture?C.mipmaps[k]:C.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Ut.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ut.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ae),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ce),C.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,k,Oe,ke,oe,ye,Re,st,Ut.data):C.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,k,Oe,ke,Ut.width,Ut.height,Re,Ut.data):D.texSubImage2D(D.TEXTURE_2D,k,Oe,ke,oe,ye,Re,st,Ut),D.pixelStorei(D.UNPACK_ROW_LENGTH,lt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,vt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,dn),D.pixelStorei(D.UNPACK_SKIP_ROWS,tt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Pe),k===0&&O.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),be.unbindTexture()},this.copyTextureToTexture3D=function(C,O,X=null,Y=null,k=0){C.isTexture!==!0&&(tl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,Y=arguments[1]||null,C=arguments[2],O=arguments[3],k=arguments[4]||0);let oe,ye,Ae,Ce,Oe,ke,Re,st,lt;const vt=C.isCompressedTexture?C.mipmaps[k]:C.image;X!==null?(oe=X.max.x-X.min.x,ye=X.max.y-X.min.y,Ae=X.max.z-X.min.z,Ce=X.min.x,Oe=X.min.y,ke=X.min.z):(oe=vt.width,ye=vt.height,Ae=vt.depth,Ce=0,Oe=0,ke=0),Y!==null?(Re=Y.x,st=Y.y,lt=Y.z):(Re=0,st=0,lt=0);const dn=Be.convert(O.format),tt=Be.convert(O.type);let Pe;if(O.isData3DTexture)P.setTexture3D(O,0),Pe=D.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)P.setTexture2DArray(O,0),Pe=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);const Ut=D.getParameter(D.UNPACK_ROW_LENGTH),nt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ln=D.getParameter(D.UNPACK_SKIP_PIXELS),Ur=D.getParameter(D.UNPACK_SKIP_ROWS),fn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,vt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,vt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ce),D.pixelStorei(D.UNPACK_SKIP_ROWS,Oe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ke),C.isDataTexture||C.isData3DTexture?D.texSubImage3D(Pe,k,Re,st,lt,oe,ye,Ae,dn,tt,vt.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(Pe,k,Re,st,lt,oe,ye,Ae,dn,vt.data):D.texSubImage3D(Pe,k,Re,st,lt,oe,ye,Ae,dn,tt,vt),D.pixelStorei(D.UNPACK_ROW_LENGTH,Ut),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,nt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ln),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ur),D.pixelStorei(D.UNPACK_SKIP_IMAGES,fn),k===0&&O.generateMipmaps&&D.generateMipmap(Pe),be.unbindTexture()},this.initRenderTarget=function(C){Ee.get(C).__webglFramebuffer===void 0&&P.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?P.setTextureCube(C,0):C.isData3DTexture?P.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?P.setTexture2DArray(C,0):P.setTexture2D(C,0),be.unbindTexture()},this.resetState=function(){L=0,E=0,A=null,be.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===$f?"display-p3":"srgb",n.unpackColorSpace=it.workingColorSpace===Ql?"display-p3":"srgb"}}class Zf{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new $e(e),this.near=n,this.far=i}clone(){return new Zf(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ET extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Qf extends Ir{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ll=new V,Dl=new V,_m=new ht,Js=new Yf,Io=new Ga,ou=new V,xm=new V;class ym extends Rt{constructor(e=new qt,n=new Qf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Ll.fromBufferAttribute(n,r-1),Dl.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Ll.distanceTo(Dl);e.setAttribute("lineDistance",new kt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Io.copy(i.boundingSphere),Io.applyMatrix4(r),Io.radius+=s,e.ray.intersectsSphere(Io)===!1)return;_m.copy(r).invert(),Js.copy(e.ray).applyMatrix4(_m);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=this.isLineSegments?2:1,h=i.index,p=i.attributes.position;if(h!==null){const g=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let v=g,m=_-1;v<m;v+=u){const f=h.getX(v),x=h.getX(v+1),y=Uo(this,e,Js,l,f,x);y&&n.push(y)}if(this.isLineLoop){const v=h.getX(_-1),m=h.getX(g),f=Uo(this,e,Js,l,v,m);f&&n.push(f)}}else{const g=Math.max(0,a.start),_=Math.min(p.count,a.start+a.count);for(let v=g,m=_-1;v<m;v+=u){const f=Uo(this,e,Js,l,v,v+1);f&&n.push(f)}if(this.isLineLoop){const v=Uo(this,e,Js,l,_-1,g);v&&n.push(v)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Uo(t,e,n,i,r,s){const a=t.geometry.attributes.position;if(Ll.fromBufferAttribute(a,r),Dl.fromBufferAttribute(a,s),n.distanceSqToSegment(Ll,Dl,ou,xm)>i)return;ou.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(ou);if(!(l<e.near||l>e.far))return{distance:l,point:xm.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}class M_ extends Ir{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Sm=new ht,Gd=new Yf,Fo=new Ga,Oo=new V;class wT extends Rt{constructor(e=new qt,n=new M_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fo.copy(i.boundingSphere),Fo.applyMatrix4(r),Fo.radius+=s,e.ray.intersectsSphere(Fo)===!1)return;Sm.copy(r).invert(),Gd.copy(e.ray).applyMatrix4(Sm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=i.index,d=i.attributes.position;if(u!==null){const p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=p,v=g;_<v;_++){const m=u.getX(_);Oo.fromBufferAttribute(d,m),Mm(Oo,m,l,r,e,n,this)}}else{const p=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=p,v=g;_<v;_++)Oo.fromBufferAttribute(d,_),Mm(Oo,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Mm(t,e,n,i,r,s,a){const o=Gd.distanceSqToPoint(t);if(o<n){const l=new V;Gd.closestPointToPoint(t,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Jf extends qt{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],a=[],o=[],l=[],u=new V,h=new Je;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,p=3;d<=n;d++,p+=3){const g=i+d/n*r;u.x=e*Math.cos(g),u.y=e*Math.sin(g),a.push(u.x,u.y,u.z),o.push(0,0,1),h.x=(a[p]/e+1)/2,h.y=(a[p+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=n;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new kt(a,3)),this.setAttribute("normal",new kt(o,3)),this.setAttribute("uv",new kt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jf(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ys extends qt{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const h=[],d=[],p=[],g=[];let _=0;const v=[],m=i/2;let f=0;x(),a===!1&&(e>0&&y(!0),n>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new kt(d,3)),this.setAttribute("normal",new kt(p,3)),this.setAttribute("uv",new kt(g,2));function x(){const M=new V,L=new V;let E=0;const A=(n-e)/i;for(let R=0;R<=s;R++){const z=[],S=R/s,w=S*(n-e)+e;for(let I=0;I<=r;I++){const b=I/r,j=b*l+o,$=Math.sin(j),B=Math.cos(j);L.x=w*$,L.y=-S*i+m,L.z=w*B,d.push(L.x,L.y,L.z),M.set($,A,B).normalize(),p.push(M.x,M.y,M.z),g.push(b,1-S),z.push(_++)}v.push(z)}for(let R=0;R<r;R++)for(let z=0;z<s;z++){const S=v[z][R],w=v[z+1][R],I=v[z+1][R+1],b=v[z][R+1];e>0&&(h.push(S,w,b),E+=3),n>0&&(h.push(w,I,b),E+=3)}u.addGroup(f,E,0),f+=E}function y(M){const L=_,E=new Je,A=new V;let R=0;const z=M===!0?e:n,S=M===!0?1:-1;for(let I=1;I<=r;I++)d.push(0,m*S,0),p.push(0,S,0),g.push(.5,.5),_++;const w=_;for(let I=0;I<=r;I++){const j=I/r*l+o,$=Math.cos(j),B=Math.sin(j);A.x=z*B,A.y=m*S,A.z=z*$,d.push(A.x,A.y,A.z),p.push(0,S,0),E.x=$*.5+.5,E.y=B*.5*S+.5,g.push(E.x,E.y),_++}for(let I=0;I<r;I++){const b=L+I,j=w+I;M===!0?h.push(j,j+1,b):h.push(j+1,j,b),R+=3}u.addGroup(f,R,M===!0?1:2),f+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ys(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Il extends ys{constructor(e=1,n=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,n,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Il(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class eh extends qt{constructor(e=.5,n=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],u=[],h=[];let d=e;const p=(n-e)/r,g=new V,_=new Je;for(let v=0;v<=r;v++){for(let m=0;m<=i;m++){const f=s+m/i*a;g.x=d*Math.cos(f),g.y=d*Math.sin(f),l.push(g.x,g.y,g.z),u.push(0,0,1),_.x=(g.x/n+1)/2,_.y=(g.y/n+1)/2,h.push(_.x,_.y)}d+=p}for(let v=0;v<r;v++){const m=v*(i+1);for(let f=0;f<i;f++){const x=f+m,y=x,M=x+i+1,L=x+i+2,E=x+1;o.push(y,M,E),o.push(M,L,E)}}this.setIndex(o),this.setAttribute("position",new kt(l,3)),this.setAttribute("normal",new kt(u,3)),this.setAttribute("uv",new kt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ur extends Ir{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=i_,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class TT extends Qf{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class E_ extends Rt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class AT extends E_{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const lu=new ht,Em=new V,wm=new V;class CT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qf,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Em.setFromMatrixPosition(e.matrixWorld),n.position.copy(Em),wm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(wm),n.updateMatrixWorld(),lu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(lu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class bT extends CT{constructor(){super(new g_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class RT extends E_{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new bT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zf);function PT({latest:t,world:e,path:n,history:i=[]}){const r=ae.useRef(i);r.current=i;const s=ae.useRef(null),a=ae.useRef(null),o=ae.useRef(!0);ae.useEffect(()=>{var P,T;const u=s.current;if(!u)return;const h=((P=e.vehicle)==null?void 0:P.type)==="drone",d=new ET;d.background=new $e(461326),d.fog=new Zf(461326,140,460);const p=new An(55,u.clientWidth/Math.max(u.clientHeight,1),.5,2e3),g=new MT({antialias:!0});g.setPixelRatio(Math.min(window.devicePixelRatio,2)),g.setSize(u.clientWidth,u.clientHeight),u.appendChild(g.domElement),d.add(new AT(12571903,2102798,1.1));const _=new RT(16777215,1.5);_.position.set(-90,140,110),d.add(_);const v=e.terrain,[m,f]=v.shape,x=(f-1)*v.resolution,y=(m-1)*v.resolution,M=new Wa(x,y,f-1,m-1),L=M.attributes.position;for(let U=0;U<m;U++)for(let W=0;W<f;W++){const Q=((T=v.height[m-1-U])==null?void 0:T[W])??0;L.setZ(U*f+W,Q)}M.computeVertexNormals();const E=new St(M,new ur({color:5204805,roughness:.95,metalness:0,flatShading:!1}));E.rotation.x=-Math.PI/2,E.position.set(v.origin[0]+x/2,0,-(v.origin[1]+y/2)),d.add(E);const A=new St(M,new gr({color:13172557,wireframe:!0,transparent:!0,opacity:.07}));A.rotation.copy(E.rotation),A.position.copy(E.position),d.add(A);const R=(U,W)=>{var Be,rt,F,_e;const Q=(U-v.origin[0])/v.resolution,G=(W-v.origin[1])/v.resolution,ve=Math.max(0,Math.min(f-1,Math.floor(Q))),ce=Math.max(0,Math.min(m-1,Math.floor(G))),pe=Math.min(f-1,ve+1),Ve=Math.min(m-1,ce+1),re=Math.max(0,Math.min(1,Q-ve)),me=Math.max(0,Math.min(1,G-ce)),Ie=((Be=v.height[ce])==null?void 0:Be[ve])??0,Ue=((rt=v.height[ce])==null?void 0:rt[pe])??0,we=((F=v.height[Ve])==null?void 0:F[ve])??0,Xe=((_e=v.height[Ve])==null?void 0:_e[pe])??0;return Ie*(1-re)*(1-me)+Ue*re*(1-me)+we*(1-re)*me+Xe*re*me};for(const U of e.obstacles){const W=new ur({color:U.known_a_priori?9200185:12734511,roughness:.8}),Q=U.kind==="cylinder"?new ys(U.radius,U.radius,U.height,18):new pi(U.half_x*2,U.height,U.half_y*2),G=new St(Q,W);G.position.set(U.x,R(U.x,U.y)+U.height/2-.15,-U.y),U.kind==="box"&&(G.rotation.y=-U.yaw),d.add(G)}const z=(U,W,Q)=>{const G=new St(new Il(1.1,3.2,14),new ur({color:Q,emissive:Q,emissiveIntensity:.4}));G.position.set(U,R(U,W)+3.4,-W),G.rotation.x=Math.PI,d.add(G)};z(e.mission.start[0],e.mission.start[1],5111718),z(e.mission.goal[0],e.mission.goal[1],5104383);const S=(U,W)=>{const Q=new us,G=new St(new pi(.9,.38,.76),new ur({color:U,wireframe:W,transparent:W,opacity:W?.85:1,emissive:U,emissiveIntensity:W?.5:.18}));G.position.y=.3,Q.add(G);const ve=new St(new Il(.17,.5,10),new ur({color:U,emissive:U,emissiveIntensity:.5}));ve.rotation.z=-Math.PI/2,ve.position.set(.68,.3,0),Q.add(ve);const ce=new St(new ys(.07,.07,3,8),new gr({color:U,transparent:!0,opacity:.55}));return ce.position.y=1.8,Q.add(ce),Q},w=[],I=(U,W)=>{const Q=new us,G=4,ve=new ur({color:U,wireframe:W,transparent:W,opacity:W?.8:1,emissive:U,emissiveIntensity:W?.6:.25,roughness:.4,metalness:.3}),ce=new St(new pi(.34*G,.12*G,.34*G),ve);Q.add(ce);for(let pe=0;pe<4;pe++){const Ve=Math.PI/4+pe*Math.PI/2,re=Math.cos(Ve)*.42*G,me=Math.sin(Ve)*.42*G,Ie=new St(new pi(.62*G,.04*G,.05*G),pe===0||pe===3?new ur({color:16735354,emissive:16735354,emissiveIntensity:.4,wireframe:W}):ve);Ie.position.set(re/2,0,me/2),Ie.rotation.y=-Ve,Q.add(Ie);const Ue=new St(new ys(.24*G,.24*G,.01*G,24),new gr({color:W?U:14673903,transparent:!0,opacity:W?.35:.28,wireframe:W}));Ue.position.set(re,.07*G,me),Q.add(Ue),W||w.push(Ue)}return Q},b=h?I(5104383,!1):S(5104383,!1),j=h?I(16747069,!0):S(16747069,!0);d.add(b,j);const $=new St(new Jf(1.2,32),new gr({color:0,transparent:!0,opacity:.45}));$.rotation.x=-Math.PI/2,$.visible=h,d.add($);const B=new qt;B.setAttribute("position",new _n(new Float32Array(6),3));const J=new ym(B,new TT({color:5104383,dashSize:.8,gapSize:.6,transparent:!0,opacity:.7}));J.visible=h,d.add(J);const N=new St(new eh(.98,1,48),new gr({color:5104383,transparent:!0,opacity:.55,side:Zn}));N.rotation.x=-Math.PI/2,d.add(N);const q=(U,W,Q)=>{const G=new qt;return G.setAttribute("position",new _n(new Float32Array(Q*3),3)),G.setDrawRange(0,0),new ym(G,new Qf({color:U,linewidth:W}))},Z=q(13172557,2,4096),ie=q(16747069,2,12e3);d.add(Z,ie);const ue=new qt;ue.setAttribute("position",new _n(new Float32Array(360*3),3)),ue.setDrawRange(0,0);const Ne=new wT(ue,new M_({color:16767078,size:.42}));d.add(Ne);const H={az:-.7,el:h?.42:.52,dist:h?55:36};let te=!1,le=0,de=0;const Fe=U=>{te=!0,le=U.clientX,de=U.clientY},De=()=>{te=!1},Ge=U=>{te&&(H.az-=(U.clientX-le)*.006,H.el=Math.max(.08,Math.min(1.5,H.el+(U.clientY-de)*.005)),le=U.clientX,de=U.clientY)},Ke=U=>{U.preventDefault(),H.dist=Math.max(8,Math.min(320,H.dist*(1+U.deltaY*.0012)))},ee=g.domElement;ee.addEventListener("pointerdown",Fe),window.addEventListener("pointerup",De),window.addEventListener("pointermove",Ge),ee.addEventListener("wheel",Ke,{passive:!1});const D=()=>{u.clientWidth&&(p.aspect=u.clientWidth/Math.max(u.clientHeight,1),p.updateProjectionMatrix(),g.setSize(u.clientWidth,u.clientHeight))},ze=new ResizeObserver(D);ze.observe(u);let Te=0;const Le=new V;let be=!1;const Ye=()=>{Te=requestAnimationFrame(Ye);for(const W of w)W.rotation.y+=.9;!be&&o.current&&b.position.lengthSq()>0&&(Le.copy(b.position),be=!0);const U=o.current?b.position:E.position;Le.lerp(U,o.current?.12:.05),p.position.set(Le.x+H.dist*Math.cos(H.el)*Math.cos(H.az),Le.y+H.dist*Math.sin(H.el),Le.z+H.dist*Math.cos(H.el)*Math.sin(H.az)),p.lookAt(Le),g.render(d,p)};Ye();const Ee=[];for(const U of r.current){if(U.trueX===null||U.trueY===null)continue;const W=R(U.trueX,U.trueY),Q=h?W+(U.trueAgl??0)+.18:W+.25,G=Ee.length;(G===0||Math.hypot(U.trueX-Ee[G-3],U.trueY+Ee[G-1])>.45)&&Ee.push(U.trueX,Q,-U.trueY)}if(Ee.length){const U=ie.geometry.attributes.position;U.array.set(Ee.slice(-12e3*3)),U.needsUpdate=!0,ie.geometry.setDrawRange(0,Math.min(Ee.length/3,12e3)),ie.geometry.computeBoundingSphere()}return a.current={renderer:g,scene:d,camera:p,estBody:b,trueBody:j,sigmaRing:N,planLine:Z,trailLine:ie,scanPoints:Ne,trail:Ee,sampleMesh:R,isDrone:h,rotors:w,shadow:$,stem:J,dispose:()=>{cancelAnimationFrame(Te),ze.disconnect(),ee.removeEventListener("pointerdown",Fe),window.removeEventListener("pointerup",De),window.removeEventListener("pointermove",Ge),ee.removeEventListener("wheel",Ke),g.dispose(),d.traverse(U=>{var G;const W=U;(G=W.geometry)==null||G.dispose();const Q=W.material;Array.isArray(Q)?Q.forEach(ve=>ve.dispose()):Q==null||Q.dispose()}),ee.parentNode===u&&u.removeChild(ee)}},()=>{var U;(U=a.current)==null||U.dispose(),a.current=null}},[e]),ae.useEffect(()=>{var m;const u=a.current;if(!u)return;const h=t.estimate,d=Math.PI/180,p=u.sampleMesh(h.position[0],h.position[1]);if(u.isDrone){u.estBody.position.set(h.position[0],Math.max(h.position[2],p+.3),-h.position[1]),u.estBody.rotation.set(h.roll_deg*d,h.yaw_deg*d,-h.pitch_deg*d,"YZX"),u.shadow.position.set(h.position[0],p+.08,-h.position[1]);const f=u.stem.geometry.attributes.position;f.setXYZ(0,h.position[0],p+.1,-h.position[1]),f.setXYZ(1,h.position[0],u.estBody.position.y,-h.position[1]),f.needsUpdate=!0,u.stem.computeLineDistances();const x=(m=t.drone)!=null&&m.armed?1:0;for(const y of u.rotors)y.visible=x===1}else u.estBody.position.set(h.position[0],p+.1,-h.position[1]),u.estBody.rotation.set(0,h.yaw_deg*d,0);const g=Math.max(h.pos_sigma_h,.05);u.sigmaRing.position.copy(u.estBody.position),u.sigmaRing.position.y=p+.06,u.sigmaRing.scale.set(g,g,1);const _=t.ground_truth;if(_){u.trueBody.visible=!0;const f=u.sampleMesh(_.position[0],_.position[1]),x=u.isDrone?Math.max(_.position[2],f+.3):f+.1;u.trueBody.position.set(_.position[0],x,-_.position[1]),u.isDrone?u.trueBody.rotation.set(_.roll_deg*d,_.yaw_deg*d,-_.pitch_deg*d,"YZX"):u.trueBody.rotation.set(0,_.yaw_deg*d,0);const y=u.trail,M=y.length;if(M===0||Math.hypot(_.position[0]-y[M-3],_.position[1]+y[M-1])>.45){y.push(_.position[0],u.isDrone?x:f+.25,-_.position[1]),y.length>12e3*3&&y.splice(0,3);const L=u.trailLine.geometry.attributes.position;L.array.set(y),L.needsUpdate=!0,u.trailLine.geometry.setDrawRange(0,y.length/3),u.trailLine.geometry.computeBoundingSphere()}}else u.trueBody.visible=!1;const v=t.lidar;if(v&&v.ranges.length){const f=u.scanPoints.geometry.attributes.position,x=f.array;let y=0;const M=h.yaw_deg*d;for(let L=0;L<v.ranges.length&&y<360;L++){const E=v.ranges[L];if(E===null||!Number.isFinite(E))continue;const A=M+v.angles[L];x[y*3]=h.position[0]+E*Math.cos(A),x[y*3+1]=p+.55,x[y*3+2]=-(h.position[1]+E*Math.sin(A)),y++}f.needsUpdate=!0,u.scanPoints.geometry.setDrawRange(0,y),u.scanPoints.geometry.computeBoundingSphere()}},[t]),ae.useEffect(()=>{var g;const u=a.current;if(!u||n.length===0)return;const h=u.planLine.geometry.attributes.position,d=h.array,p=Math.min(n.length,d.length/3);for(let _=0;_<p;_++){const[v,m]=n[_];d[_*3]=v,d[_*3+1]=u.sampleMesh(v,m)+(u.isDrone?((g=e.vehicle)==null?void 0:g.cruise_agl)??20:.35),d[_*3+2]=-m}h.needsUpdate=!0,u.planLine.geometry.setDrawRange(0,p),u.planLine.geometry.computeBoundingSphere()},[n,e]);const l=t.ground_truth;return c.jsxs("div",{className:"grid",children:[c.jsxs(qe,{title:"3D simulation",className:"span2",right:c.jsxs("label",{className:"toggle",children:[c.jsx("input",{type:"checkbox",defaultChecked:!0,onChange:u=>o.current=u.target.checked}),"follow vehicle"]}),children:[c.jsx("div",{ref:s,className:"three-mount",children:c.jsxs("div",{className:"hud",children:[c.jsx("span",{className:"chip",children:t.resilience.state.replace(/_/g," ")}),t.drone&&c.jsxs("span",{className:"chip",children:[t.drone.phase.replace(/_/g," ").toLowerCase()," · ",ge(t.drone.agl_estimate_m,1)," m AGL"]}),c.jsxs("span",{className:"chip",children:["σ ",ge(t.estimate.pos_sigma_h,2)," m",l?` · err ${ge(l.position_error_m,2)} m`:""]})]})}),c.jsxs("div",{className:"legend3d",children:[c.jsxs("span",{children:[c.jsx("i",{style:{background:"#4de2ff"}}),"estimated pose + 1σ ring"]}),c.jsxs("span",{children:[c.jsx("i",{style:{background:"#ff8a3d"}}),"ground truth (display only)"]}),c.jsxs("span",{children:[c.jsx("i",{style:{background:"#c8ff4d"}}),"planned route"]}),!t.drone&&c.jsxs("span",{children:[c.jsx("i",{style:{background:"#ffd866"}}),"LiDAR returns"]}),c.jsxs("span",{children:[c.jsx("i",{style:{background:"#8c6239"}}),"known obstacle"]}),c.jsxs("span",{children:[c.jsx("i",{style:{background:"#c2502f"}}),"discovered obstacle"]}),t.drone&&c.jsxs("span",{children:[c.jsx("i",{style:{background:"#ff5c7a"}}),"drone nose arms"]})]})]}),c.jsxs(qe,{title:"Pose",children:[c.jsxs("div",{className:"stat-row",children:[c.jsx(fe,{label:"est x",value:ge(t.estimate.position[0]),unit:"m"}),c.jsx(fe,{label:"est y",value:ge(t.estimate.position[1]),unit:"m"}),c.jsx(fe,{label:"est yaw",value:ge(t.estimate.yaw_deg,1),unit:"°"})]}),c.jsxs("div",{className:"stat-row",children:[c.jsx(fe,{label:"roll",value:ge(t.estimate.roll_deg,1),unit:"°"}),c.jsx(fe,{label:"pitch",value:ge(t.estimate.pitch_deg,1),unit:"°"}),c.jsx(fe,{label:"error",value:l?ge(l.position_error_m):"n/a",unit:"m"})]})]}),c.jsx(qe,{title:"Control",children:t.control?c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"stat-row",children:[c.jsx(fe,{label:"speed cmd",value:ge(t.control.speed_cmd),unit:"m/s"}),c.jsx(fe,{label:"yaw rate",value:ge(t.control.yaw_rate_cmd),unit:"rad/s"}),c.jsx(fe,{label:"cross-track",value:ge(t.control.cross_track_m),unit:"m"})]}),c.jsxs("div",{className:"stat-row",children:[c.jsx(fe,{label:"limited by",value:t.control.limiting_constraint}),c.jsx(fe,{label:"obstacle",value:t.control.obstacle_distance_m===null?"clear":ge(t.control.obstacle_distance_m)+" m",tone:t.control.obstacle_distance_m!==null&&t.control.obstacle_distance_m<1.5?"warn":"ok"}),c.jsx(fe,{label:"e-stop",value:t.control.emergency_stop?"yes":"no",tone:t.control.emergency_stop?"bad":"ok"})]})]}):c.jsx("p",{className:"muted",children:"no control output yet"})})]})}const NT={OK:"ok",DEGRADED:"warn",STALE:"bad",TIMEOUT:"bad",INVALID:"bad",FAILED:"bad",UNKNOWN:""},LT=[[1,"timeout"],[2,"rate low"],[4,"stale payload"],[8,"out of range"],[16,"noisy"],[32,"inconsistent"]];function DT(t){const e=LT.filter(([n])=>(t&n)!==0).map(([,n])=>n);return e.length?e.join(", "):"—"}function IT({latest:t,history:e}){const n=t.estimate,i=Object.entries(t.sensors),r=i.filter(([,s])=>s.status!=="OK");return c.jsxs("div",{className:"grid",children:[c.jsxs(qe,{title:"Sensor health",className:"span2",right:c.jsx("span",{className:r.length?"badge warn":"badge ok",children:r.length?`${r.length} not OK`:"all nominal"}),children:[c.jsxs("table",{className:"table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"sensor"}),c.jsx("th",{children:"status"}),c.jsx("th",{children:"rate"}),c.jsx("th",{children:"expected"}),c.jsx("th",{children:"availability"}),c.jsx("th",{children:"last valid"}),c.jsx("th",{children:"flags"}),c.jsx("th",{children:"detail"})]})}),c.jsx("tbody",{children:i.map(([s,a])=>c.jsxs("tr",{className:a.status==="OK"?"":"row-bad",children:[c.jsx("td",{children:s}),c.jsx("td",{children:c.jsx("span",{className:`badge ${NT[a.status]??""}`,children:a.status})}),c.jsxs("td",{children:[ge(a.rate_hz,1)," Hz"]}),c.jsxs("td",{children:[ge(a.expected_hz,0)," Hz"]}),c.jsxs("td",{children:[(a.availability*100).toFixed(2),"%"]}),c.jsxs("td",{children:[ge(a.last_valid,2)," s"]}),c.jsx("td",{children:DT(a.flags)}),c.jsx("td",{className:"muted",children:a.detail})]},s))})]}),c.jsxs("p",{className:"caveat",children:["A stream that keeps arriving with a fresh timestamp but an unchanged payload is reported as ",c.jsx("strong",{children:"STALE"}),", not OK. That case is the reason the monitor fingerprints the payload instead of watching only the timestamp and the rate."]})]}),c.jsxs(qe,{title:"Estimator residuals",children:[c.jsx(pa,{rows:e,height:140,shadeFlagged:!0,yMax:40,series:[{key:"nis",label:"GNSS NIS",color:"#4a9eff"},{key:"cusum",label:"CUSUM",color:"#f0803c",dashed:!0}]}),c.jsxs("div",{className:"stat-row",children:[c.jsx(fe,{label:"updates",value:n.updates}),c.jsx(fe,{label:"rejections",value:n.rejections,tone:n.rejections>n.updates*.3?"warn":"ok",hint:"Measurements refused by the chi-square gate."}),c.jsx(fe,{label:"NIS",value:ge(t.gnss_integrity.nis)})]})]}),c.jsxs(qe,{title:"Estimated sensor errors",children:[c.jsx("p",{className:"muted small",children:"Biases the filter has learned. These are states, not calibration constants: they drift, and watching them converge is how you tell a healthy filter from one that is absorbing a modelling error."}),c.jsxs("div",{className:"stat-row",children:[c.jsx(fe,{label:"gyro bias x",value:(n.gyro_bias[0]*1e3).toFixed(2),unit:"mrad/s"}),c.jsx(fe,{label:"y",value:(n.gyro_bias[1]*1e3).toFixed(2),unit:"mrad/s"}),c.jsx(fe,{label:"z",value:(n.gyro_bias[2]*1e3).toFixed(2),unit:"mrad/s"})]}),c.jsxs("div",{className:"stat-row",children:[c.jsx(fe,{label:"accel bias x",value:ge(n.accel_bias[0],3),unit:"m/s²"}),c.jsx(fe,{label:"y",value:ge(n.accel_bias[1],3),unit:"m/s²"}),c.jsx(fe,{label:"z",value:ge(n.accel_bias[2],3),unit:"m/s²"})]}),c.jsxs("div",{className:"stat-row",children:[c.jsx(fe,{label:"baro bias",value:ge(n.baro_bias),unit:"m"}),c.jsx(fe,{label:"odometry scale",value:(n.odom_scale*100).toFixed(2),unit:"%",hint:"Wheel slip makes the encoders over-report; this is the learned correction."}),c.jsx(fe,{label:"vel σ",value:ge(n.vel_sigma,3),unit:"m/s"})]})]}),c.jsx(qe,{title:"Speed tracking",children:c.jsx(pa,{rows:e,height:140,series:[{key:"speed",label:"true speed (m/s)",color:"#3fb950"},{key:"speedCmd",label:"commanded (m/s)",color:"#4a9eff",dashed:!0}]})}),c.jsxs(qe,{title:"Heading error",children:[c.jsx(pa,{rows:e,height:140,shadeFlagged:!0,series:[{key:"yawErr",label:"yaw error (deg)",color:"#d2a8ff"}]}),c.jsxs("div",{className:"stat-row",children:[c.jsx(fe,{label:"yaw σ",value:ge(n.yaw_sigma_deg,2),unit:"°"}),t.battery&&c.jsxs(c.Fragment,{children:[c.jsx(fe,{label:"battery",value:ge(t.battery.percentage*100,1),unit:"%"}),c.jsx(fe,{label:"pack",value:ge(t.battery.voltage,1),unit:"V"}),c.jsx(fe,{label:"draw",value:ge(t.battery.current,1),unit:"A"})]})]})]})]})}function Pi(t){return t==null?"–":typeof t=="boolean"?t?"yes":"no":typeof t=="number"?Number.isInteger(t)?String(t):t.toFixed(3):typeof t=="string"?t:JSON.stringify(t)}const UT={outcome:"Mission outcome",accuracy:"Localisation accuracy",consistency:"Estimator consistency",detection:"Fault detection",recovery:"Recovery",path:"Path efficiency",availability:"Data availability",false_alarms:"False alarms"};function FT({results:t,latest:e,world:n}){if(!t)return c.jsx("div",{className:"grid",children:c.jsxs(qe,{title:"Experiment results",className:"span2",children:[c.jsx("p",{className:"muted",children:"The run is still in progress. Metrics are computed when the scenario ends — at the goal, at the timeout, or on an abort."}),e&&n&&c.jsxs("div",{className:"stat-row",children:[c.jsx(fe,{label:"scenario",value:n.scenario.id}),c.jsx(fe,{label:"elapsed",value:ge(e.t,1),unit:"s"}),c.jsx(fe,{label:"of",value:ge(n.scenario.duration_s,0),unit:"s"}),c.jsx(fe,{label:"state",value:e.resilience.state})]})]})});const i=t.outcome??{},r=i.mission_success===!0;return c.jsxs("div",{className:"grid",children:[c.jsxs(qe,{title:"Verdict",className:"span2",right:c.jsx("span",{className:`badge ${r?"ok":"bad"}`,children:r?"mission success":"not successful"}),children:[c.jsxs("div",{className:"stat-row",children:[c.jsx(fe,{label:"goal reached",value:Pi(i.goal_reached),tone:i.goal_reached?"ok":"warn"}),c.jsx(fe,{label:"collisions",value:Pi(i.collisions),tone:Number(i.collisions)>0?"bad":"ok"}),c.jsx(fe,{label:"min clearance",value:Pi(i.min_obstacle_clearance_m),unit:"m"}),c.jsx(fe,{label:"final state",value:Pi(i.final_state)}),c.jsx(fe,{label:"duration",value:Pi(i.duration_s),unit:"s"}),c.jsx(fe,{label:"seed",value:Pi(t.seed)}),typeof i.realtime_factor=="number"&&c.jsx(fe,{label:"real-time factor",value:Pi(i.realtime_factor),unit:"×"})]}),i.safe_stop_short_of_goal===!0&&c.jsx("p",{className:"reason",children:"The vehicle stopped safely without reaching the goal. That is scored separately from a success and from a failure: declining to continue on untrustworthy data is the correct outcome, but it is not a completed mission."})]}),Object.entries(t).filter(([s,a])=>s!=="outcome"&&a!==null&&typeof a=="object"&&!Array.isArray(a)).map(([s,a])=>c.jsx(qe,{title:UT[s]??s,children:c.jsx("table",{className:"table compact",children:c.jsx("tbody",{children:Object.entries(a).filter(([o])=>!o.startsWith("per_")&&o!=="_note").map(([o,l])=>c.jsxs("tr",{children:[c.jsx("th",{children:o.replace(/_/g," ")}),c.jsx("td",{children:Pi(l)})]},o))})})},s))]})}function OT(t,e){return Object.keys(t.faults).filter(n=>t.faults[n].vehicles.includes(e))}function w_(t,e,n){var r;const i=new Set([...t.vehicle_sensors[n]??[],"world"]);return(((r=t.faults[e])==null?void 0:r.targets)??[]).filter(s=>i.has(s))}function th(t,e,n=60,i="ugv"){const r=t.faults[e],s={...r.defaults??{}};for(const[a,o]of Object.entries(r.params))s[a]===void 0&&o.default!==void 0&&o.default!==null&&(s[a]=o.default),s[a]===void 0&&o.type==="vec3"&&(s[a]=[0,0,0]),s[a]===void 0&&o.type==="bool"&&(s[a]=!1);return{type:e,target:w_(t,e,i)[0]??r.targets[0],onset:n,duration:30,ramp:0,params:s}}function kT(t){return t.replace(/_/g," ").toLowerCase()}function ma({value:t,onChange:e,step:n,min:i,max:r,width:s=74}){return c.jsx("input",{className:"num",type:"number",style:{width:s},value:Number.isFinite(t)?t:"",step:n??"any",min:i,max:r,onChange:a=>e(a.target.value===""?NaN:Number(a.target.value))})}function BT({name:t,spec:e,value:n,onChange:i}){const r=`${e.label}${e.unit?` [${e.unit}]`:""}`+(e.min!==void 0?` (${e.min} … ${e.max})`:"");if(e.type==="bool")return c.jsxs("label",{className:"param",title:r,children:[c.jsx("input",{type:"checkbox",checked:!!n,onChange:s=>i(s.target.checked)}),e.label]});if(e.type==="vec3"){const s=Array.isArray(n)?n:[0,0,0];return c.jsxs("span",{className:"param",title:r,children:[c.jsx("span",{className:"muted small",children:t}),[0,1,2].map(a=>c.jsx(ma,{value:s[a],width:64,onChange:o=>i(s.map((l,u)=>u===a?o:l))},a)),e.unit&&c.jsx("span",{className:"muted small",children:e.unit})]})}return c.jsxs("span",{className:"param",title:r,children:[c.jsx("span",{className:"muted small",children:e.label}),c.jsx(ma,{value:Number(n),onChange:i,min:e.min,max:e.max}),e.unit&&c.jsx("span",{className:"muted small",children:e.unit})]})}function T_({schema:t,fault:e,onChange:n,onRemove:i,live:r=!1,vehicle:s="ugv"}){const a=t.faults[e.type],o=w_(t,e.type,s),l=u=>n({...e,...u});return c.jsxs("div",{className:"fault-row",children:[c.jsxs("div",{className:"fault-main",children:[c.jsx("select",{value:e.type,onChange:u=>n({...th(t,u.target.value,e.onset,s),duration:e.duration}),children:OT(t,s).map(u=>c.jsx("option",{value:u,children:kT(u)},u))}),o.length>1?c.jsx("select",{value:e.target,onChange:u=>l({target:u.target.value}),children:o.map(u=>c.jsx("option",{value:u,children:u},u))}):c.jsx("span",{className:"chip",children:e.target}),!r&&c.jsxs("label",{className:"param",children:[c.jsx("span",{className:"muted small",children:"onset"}),c.jsx(ma,{value:e.onset,min:0,onChange:u=>l({onset:u})}),c.jsx("span",{className:"muted small",children:"s"})]}),c.jsxs("label",{className:"param",children:[c.jsx("span",{className:"muted small",children:"duration"}),c.jsx(ma,{value:e.duration,onChange:u=>l({duration:u})}),c.jsx("span",{className:"muted small",children:"s"})]}),c.jsxs("label",{className:"param",title:"Time to ramp to full magnitude",children:[c.jsx("span",{className:"muted small",children:"ramp"}),c.jsx(ma,{value:e.ramp,min:0,width:60,onChange:u=>l({ramp:u})}),c.jsx("span",{className:"muted small",children:"s"})]}),c.jsxs("label",{className:"param",title:"-1 = until the run ends",children:[c.jsx("input",{type:"checkbox",checked:e.duration<0,onChange:u=>l({duration:u.target.checked?-1:30})}),c.jsx("span",{className:"muted small",children:"until end"})]}),i&&c.jsx("button",{className:"icon",onClick:i,title:"remove",children:"✕"})]}),a&&Object.keys(a.params).length>0&&c.jsx("div",{className:"fault-params",children:Object.entries(a.params).map(([u,h])=>c.jsx(BT,{name:u,spec:h,value:e.params[u],onChange:d=>l({params:{...e.params,[u]:d}})},u))}),a&&c.jsx("p",{className:"muted small fault-desc",children:a.description})]})}const Tm=["t","estX","estY","trueX","trueY","posError","posSigma","yawErr","nis","cusum","speed","speedCmd","clearance","state","flagged"];function zT(t){const e=Tm.join(","),n=t.map(i=>Tm.map(r=>{const s=i[r];return s==null?"":typeof s=="number"?Number.isFinite(s)?String(s):"":String(s)}).join(","));return[e,...n].join(`
`)}function cu(t,e,n){const i=new Blob([e],{type:n}),r=URL.createObjectURL(i),s=document.createElement("a");s.href=r,s.download=t,s.click(),URL.revokeObjectURL(r)}function jT({history:t,world:e,latest:n,results:i,sendCommand:r,authed:s,commandLog:a,token:o,setToken:l,schema:u,vehicle:h}){const d=s,[p,g]=ae.useState(null),[_,v]=ae.useState(o),[m,f]=ae.useState(1),[x,y]=ae.useState(""),[M,L]=ae.useState(u?th(u,"GNSS_OUTAGE",0,h):null),E=ae.useRef(void 0),A=p===null?t[t.length-1]:t[p],R=ae.useMemo(()=>t.length>1?[t[0].t,t[t.length-1].t]:[0,0],[t]),z=()=>{window.clearInterval(E.current);let I=p??0;E.current=window.setInterval(()=>{if(I+=1,I>=t.length){window.clearInterval(E.current),g(null);return}g(I)},50)},S=()=>window.clearInterval(E.current),w=(e==null?void 0:e.faults_declared)??[];return c.jsxs("div",{className:"grid",children:[c.jsx(qe,{title:"Replay",className:"span2",children:t.length<2?c.jsx("p",{className:"muted",children:"Nothing buffered yet."}):c.jsxs(c.Fragment,{children:[c.jsx("input",{className:"scrub",type:"range",min:0,max:t.length-1,value:p??t.length-1,onChange:I=>{S(),g(Number(I.target.value))}}),c.jsxs("div",{className:"replay-controls",children:[c.jsx("button",{onClick:z,children:"▶ play"}),c.jsx("button",{onClick:S,children:"⏸ pause"}),c.jsx("button",{onClick:()=>{S(),g(null)},children:"⏭ live"}),c.jsxs("span",{className:"muted",children:["buffer ",R[0].toFixed(1),"–",R[1].toFixed(1)," s ·"," ",t.length," frames",p!==null&&" · scrubbing"]})]}),A&&c.jsxs("div",{className:"stat-row",children:[c.jsx(fe,{label:"t",value:ge(A.t,2),unit:"s"}),c.jsx(fe,{label:"state",value:A.state}),c.jsx(fe,{label:"error",value:ge(A.posError),unit:"m"}),c.jsx(fe,{label:"σ",value:ge(A.posSigma),unit:"m"}),c.jsx(fe,{label:"NIS",value:ge(A.nis)}),c.jsx(fe,{label:"GNSS",value:A.flagged?"inconsistent":"consistent",tone:A.flagged?"bad":"ok"})]})]})}),c.jsxs(qe,{title:"Export",children:[c.jsxs("p",{className:"muted small",children:["This exports the dashboard's in-memory buffer. The authoritative per-trial record is written by the Python recorder as"," ",c.jsx("code",{children:"timeseries.csv"}),", ",c.jsx("code",{children:"metrics.json"}),","," ",c.jsx("code",{children:"events.csv"})," and ",c.jsx("code",{children:"result.json"})," under"," ",c.jsx("code",{children:"runs/"}),"."]}),c.jsxs("div",{className:"btn-row",children:[c.jsxs("button",{disabled:t.length===0,onClick:()=>cu(`${(e==null?void 0:e.scenario.id)??"session"}_seed${(e==null?void 0:e.scenario.seed)??0}_buffer.csv`,zT(t),"text/csv"),children:["buffer → CSV (",t.length,")"]}),c.jsx("button",{disabled:!i,onClick:()=>cu(`${(e==null?void 0:e.scenario.id)??"session"}_metrics.json`,JSON.stringify(i,null,1),"application/json"),children:"metrics → JSON"}),c.jsx("button",{disabled:!e,onClick:()=>cu(`${(e==null?void 0:e.scenario.id)??"session"}_scenario.json`,JSON.stringify({scenario:e==null?void 0:e.scenario,mission:e==null?void 0:e.mission,faults_declared:e==null?void 0:e.faults_declared},null,1),"application/json"),children:"scenario → JSON"})]}),e&&c.jsxs("div",{className:"stat-row",children:[c.jsx(fe,{label:"scenario",value:e.scenario.id}),c.jsx(fe,{label:"seed",value:e.scenario.seed})]})]}),c.jsxs(qe,{title:"Command console",right:c.jsx("span",{className:d?"badge ok":"badge",children:d?"authorised":"read-only"}),children:[c.jsx("p",{className:"muted small",children:"Telemetry is read-only. Commands need the token the bridge prints at startup, and only the verbs below exist — the browser cannot name a topic, a node or a Python attribute. Commands apply to the session selected in the top bar."}),c.jsxs("div",{className:"btn-row",children:[c.jsx("input",{className:"token",type:"password",placeholder:"bridge token",value:_,onChange:I=>v(I.target.value)}),c.jsx("button",{onClick:()=>l(_),children:"connect"})]}),c.jsxs("div",{className:"btn-row",children:[c.jsx("button",{disabled:!d,onClick:()=>r("pause"),children:"pause"}),c.jsx("button",{disabled:!d,onClick:()=>r("resume"),children:"resume"}),c.jsx("button",{disabled:!d,onClick:()=>r("step",{steps:400}),children:"step 1 s"}),c.jsx("button",{disabled:!d,onClick:()=>r("reset",{}),children:"restart"})]}),c.jsxs("div",{className:"btn-row",children:[c.jsx("input",{className:"token",style:{flex:"0 1 140px"},placeholder:"new seed",value:x,onChange:I=>y(I.target.value.replace(/[^0-9]/g,""))}),c.jsx("button",{disabled:!d||!x,onClick:()=>r("reset",{seed:Number(x)}),title:"Restart this session on a different random map / noise sequence",children:"restart with seed"})]}),c.jsx("div",{className:"btn-row",children:c.jsx("button",{disabled:!d,onClick:()=>r("reset",{seed:Math.floor(Math.random()*1e5)}),title:"Re-run the same scenario with a different random seed.",children:"new seed"})}),c.jsx("div",{className:"btn-row",children:c.jsxs("label",{className:"muted small",children:["pacing ×",m,c.jsx("input",{type:"range",min:1,max:30,step:1,value:m,disabled:!d,onChange:I=>{const b=Number(I.target.value);f(b),r("set_speed",{speed:b})}})]})}),w.length>0&&c.jsxs(c.Fragment,{children:[c.jsx("p",{className:"muted small",children:"Declared faults for this scenario. Each is arithmetic applied to a simulated stream inside the simulator process — nothing is transmitted and no system state is changed."}),c.jsx("div",{className:"btn-row",children:w.map((I,b)=>c.jsxs("button",{disabled:!d,onClick:()=>r("inject_declared_fault",{index:b}),title:`${I.type} on ${I.target}, declared onset ${I.onset} s`,children:["inject ",I.type.replace(/_/g," ").toLowerCase()]},b))})]}),u&&M&&c.jsxs(c.Fragment,{children:[c.jsxs("p",{className:"muted small",children:["Inject a ",c.jsx("b",{children:"new"})," fault into the running simulation, starting now. Same allow-list and bounds as the scenario editor."]}),c.jsx(T_,{schema:u,fault:M,onChange:L,live:!0,vehicle:h}),c.jsx("div",{className:"btn-row",children:c.jsx("button",{className:"primary",disabled:!d||!!(n!=null&&n.finished),onClick:()=>r("inject_fault",{fault:M}),children:"⚡ inject now"})})]}),a.length>0&&c.jsx("pre",{className:"log",children:a.slice(0,12).join(`
`)}),(n==null?void 0:n.paused)&&c.jsx("p",{className:"reason",children:"simulation paused"})]})]})}const Am={ugv:"gnss_outage",drone:"drone_gnss_outage"};function HT({size:t,start:e,goal:n,faults:i,onStart:r,onGoal:s}){const[a,o]=ae.useState("goal"),l=260,u=Math.round(l*t[1]/t[0]),h=_=>_/t[0]*l,d=_=>u-_/t[1]*u,p=_=>{const v=_.currentTarget.getBoundingClientRect(),m=(_.clientX-v.left)/v.width*t[0],f=(1-(_.clientY-v.top)/v.height)*t[1],x=[Math.round(m),Math.round(f)];(a==="goal"?s:r)(x)},g=i.filter(_=>_.type==="OBSTACLE_APPEARS");return c.jsxs("div",{className:"mission-map",children:[c.jsxs("svg",{viewBox:`0 0 ${l} ${u}`,width:l,height:u,onClick:p,role:"img","aria-label":"mission map: click to place the start or goal",children:[c.jsx("rect",{x:0,y:0,width:l,height:u,className:"map-bg"}),[.25,.5,.75].map(_=>c.jsxs("g",{children:[c.jsx("line",{x1:l*_,x2:l*_,y1:0,y2:u,className:"map-grid"}),c.jsx("line",{y1:u*_,y2:u*_,x1:0,x2:l,className:"map-grid"})]},_)),c.jsx("line",{x1:h(e[0]),y1:d(e[1]),x2:h(n[0]),y2:d(n[1]),className:"map-line"}),g.map((_,v)=>c.jsx("circle",{cx:h(Number(_.params.x)),cy:d(Number(_.params.y)),r:Math.max(3,h(Number(_.params.radius??1.3))),className:"map-obs"},v)),c.jsx("circle",{cx:h(e[0]),cy:d(e[1]),r:6,className:"map-start"}),c.jsx("circle",{cx:h(n[0]),cy:d(n[1]),r:6,className:"map-goal"})]}),c.jsxs("div",{className:"btn-row",children:[c.jsx("span",{className:"muted small",children:"click map to place:"}),c.jsx("button",{className:a==="start"?"sel":"",onClick:()=>o("start"),children:"start"}),c.jsx("button",{className:a==="goal"?"sel":"",onClick:()=>o("goal"),children:"goal"})]}),c.jsxs("div",{className:"btn-row",children:[c.jsx("span",{className:"legend-dot start"})," start (",e.join(", "),")",c.jsx("span",{className:"legend-dot goal"})," goal (",n.join(", "),")",g.length>0&&c.jsxs(c.Fragment,{children:[c.jsx("span",{className:"legend-dot obs"})," scripted obstacle"]})]})]})}function VT({schema:t,scenarios:e,token:n,authed:i,onLaunched:r,onBatchStarted:s,refreshScenarios:a,preset:o}){const[l,u]=ae.useState((o==null?void 0:o.vehicle)??"ugv"),[h,d]=ae.useState(Am[(o==null?void 0:o.vehicle)??"ugv"]),[p,g]=ae.useState((o==null?void 0:o.environment)??"rolling_hills"),[_,v]=ae.useState(!!(o!=null&&o.environment)),[m,f]=ae.useState({}),[x,y]=ae.useState([12,12]),[M,L]=ae.useState([185,185]),[E,A]=ae.useState([]),[R,z]=ae.useState(""),[S,w]=ae.useState(""),[I,b]=ae.useState(""),[j,$]=ae.useState(3),[B,J]=ae.useState("12345 2 7"),[N,q]=ae.useState(null),[Z,ie]=ae.useState(!1);ae.useEffect(()=>{let ee=!0;return Ct.get(`/api/scenarios/${encodeURIComponent(h)}`).then(D=>{var Le,be,Ye;if(!ee||!D.ok)return;const ze=D.data.config;f(D.data.values);const Te=((Le=e.find(Ee=>Ee.id===h))==null?void 0:Le.vehicle)??l;if(u(Te),_&&(o!=null&&o.environment)){const Ee=t.environments[o.environment].world,P={...D.data.values};for(const[T,U]of Object.entries(Ee))P[`world.${T}`]=U;f(P),g(o.environment),v(!1)}else g(ze.environment??"rolling_hills");y((((be=ze.mission)==null?void 0:be.start)??[12,12]).map(Number)),L((((Ye=ze.mission)==null?void 0:Ye.goal)??[185,185]).map(Number)),A((ze.faults??[]).map(Ee=>({type:String(Ee.type).toUpperCase(),target:Ee.target,onset:Number(Ee.onset??0),duration:Number(Ee.duration??-1),ramp:Number(Ee.ramp??0),params:{...Ee.params??{}},label:Ee.label??""}))),z((ze.description??"").trim()),q(null)}),()=>{ee=!1}},[h]);const ue=ee=>{g(ee);const D=t.environments[ee].world;f(ze=>{const Te={...ze};for(const[Le,be]of Object.entries(D))Te[`world.${Le}`]=be;return Te})},Ne=ae.useMemo(()=>{var D;const ee={};for(const[ze,Te]of Object.entries(t.fields))Te.vehicles.includes(l)&&(ee[D=Te.group]??(ee[D]=[])).push(ze);return ee},[t,l]),H=ee=>{ee!==l&&(u(ee),d(Am[ee]))},te=(ee={})=>{var ze;const D={};for(const[Te,Le]of Object.entries(m))Le!=null&&((ze=t.fields[Te])!=null&&ze.vehicles.includes(l))&&(D[Te]=Number(Le));return{base:h,vehicle:l,environment:p,fields:D,description:R,mission:{start:x,goal:M},faults:E,...ee}},le=(ee,D)=>q({ok:ee,text:D}),de=async()=>{const ee=await Ct.post("/api/scenarios/validate",n,te());return le(ee.ok,ee.ok?["Scenario is valid."]:ee.errors??["invalid"]),ee.ok},Fe=async()=>{ie(!0);const ee=await Ct.post("/api/sessions",n,{...te(),speed:j,label:I||`${h} · ${p} · seed ${m.seed}`});ie(!1),ee.ok?r(ee.data.session):le(!1,ee.errors??["launch failed"])},De=async()=>{const ee=await Ct.post("/api/scenarios",n,te({id:S}));le(ee.ok,ee.ok?[`Saved as ${ee.data.id} (${ee.data.path}).`]:ee.errors??["save failed"]),ee.ok&&a()},Ge=async()=>{const ee=B.split(/[\s,]+/).filter(Boolean).map(Number);if(ee.some(ze=>!Number.isInteger(ze))){le(!1,["seeds must be whole numbers separated by spaces"]);return}const D=await Ct.post("/api/batches",n,{edit:te({id:S||void 0}),seeds:ee,jobs:4,label:I||`${h} on ${p}`});D.ok?s():le(!1,D.errors??["batch failed"])},Ke=[Number(m["world.size_x"]??200),Number(m["world.size_y"]??200)];return c.jsxs("div",{className:"grid lab",children:[c.jsx(qe,{title:"1 · Vehicle & starting scenario",className:"span2",children:c.jsxs("div",{className:"btn-row",children:[c.jsxs("div",{className:"seg",role:"tablist","aria-label":"vehicle",children:[c.jsxs("button",{className:l==="ugv"?"on":"",onClick:()=>H("ugv"),children:[c.jsx(ki,{name:"rover",size:15})," Rover"]}),c.jsxs("button",{className:l==="drone"?"on":"",onClick:()=>H("drone"),children:[c.jsx(ki,{name:"drone",size:15})," Drone"]})]}),c.jsx("select",{value:h,onChange:ee=>d(ee.target.value),children:e.filter(ee=>!ee.error&&(ee.vehicle??"ugv")===l).map(ee=>c.jsxs("option",{value:ee.id,children:[ee.id,ee.source==="custom"?" (custom)":""]},ee.id))}),c.jsx("input",{className:"token",value:R,placeholder:"description",onChange:ee=>z(ee.target.value)})]})}),c.jsx(qe,{title:"2 · Environment",className:"span2",children:c.jsx("div",{className:"env-grid",children:Object.entries(t.environments).map(([ee,D])=>c.jsxs("button",{className:p===ee?"env sel":"env",onClick:()=>ue(ee),children:[c.jsx(Hv,{env:ee,relief:D.world.relief,obstacles:D.world.n_obstacles}),c.jsxs("div",{className:"meta",children:[c.jsx("b",{children:D.label}),c.jsx("span",{className:"muted small",children:D.description}),c.jsxs("span",{className:"muted small mono",children:["relief ",D.world.relief," m · ",D.world.n_obstacles," obstacles"]})]})]},ee))})}),c.jsx(qe,{title:"3 · Parameters",children:Object.entries(Ne).map(([ee,D])=>c.jsxs("fieldset",{className:"fields",children:[c.jsx("legend",{children:ee}),D.map(ze=>{const Te=t.fields[ze],Le=m[ze];return c.jsxs("label",{className:"field",title:`${Te.min} … ${Te.max} ${Te.unit}`,children:[c.jsx("span",{children:Te.label}),c.jsxs("span",{children:[c.jsx("input",{className:"num",type:"number",value:Le??"",min:Te.min,max:Te.max,step:Te.step??"any",onChange:be=>{const Ye=be.target.value===""?null:Number(be.target.value);f({...m,[ze]:Ye,...ze==="duration"?{"mission.timeout_s":Ye}:{}})}}),c.jsx("small",{className:"muted",children:Te.unit}),ze==="seed"&&c.jsx("button",{className:"icon",title:"random seed",onClick:()=>f({...m,seed:Math.floor(Math.random()*1e6)}),children:"🎲"})]})]},ze)})]},ee))}),c.jsxs("div",{className:"stack",children:[c.jsx(qe,{title:"4 · Mission",children:c.jsx(HT,{size:Ke,start:x,goal:M,faults:E,onStart:y,onGoal:L})}),c.jsxs(qe,{title:`5 · Faults (${E.length}/${t.max_faults})`,right:c.jsx("button",{disabled:E.length>=t.max_faults,onClick:()=>A([...E,th(t,"GNSS_OUTAGE",60,l)]),children:"+ add fault"}),children:[E.length===0&&c.jsx("p",{className:"muted",children:"No faults: a baseline run."}),E.map((ee,D)=>c.jsx(T_,{schema:t,fault:ee,vehicle:l,onChange:ze=>A(E.map((Te,Le)=>Le===D?ze:Te)),onRemove:()=>A(E.filter((ze,Te)=>Te!==D))},D))]})]}),c.jsxs(qe,{title:"6 · Run it",className:"span2",children:[!i&&c.jsxs("p",{className:"alert",children:["Read-only: open the dashboard with ",c.jsx("code",{children:"?token=…"})," (printed by the bridge) to launch, save or batch."]}),c.jsxs("div",{className:"btn-row",children:[c.jsx("input",{className:"token",value:I,placeholder:"session label (optional)",onChange:ee=>b(ee.target.value)}),c.jsxs("label",{className:"muted small",children:["speed ×",c.jsx("select",{value:j,onChange:ee=>$(Number(ee.target.value)),children:[.5,1,2,3,5,10,20].map(ee=>c.jsx("option",{value:ee,children:ee},ee))})]}),c.jsx("button",{onClick:de,children:"validate"}),c.jsx("button",{className:"primary",disabled:!i||Z,onClick:Fe,children:"▶ launch simulation"})]}),c.jsxs("div",{className:"btn-row",children:[c.jsx("input",{className:"token",value:S,placeholder:"scenario id to save, e.g. forest_gnss_test",onChange:ee=>w(ee.target.value.toLowerCase())}),c.jsx("button",{disabled:!i||!S,onClick:De,children:"save scenario"})]}),c.jsxs("div",{className:"btn-row",children:[c.jsx("input",{className:"token",value:B,placeholder:"seeds, e.g. 1 2 3",onChange:ee=>J(ee.target.value)}),c.jsx("button",{disabled:!i,onClick:Ge,children:"run batch over these seeds"})]}),N&&c.jsx("div",{className:N.ok?"reason":"alert",children:N.text.map((ee,D)=>c.jsx("div",{children:ee},D))})]})]})}function A_(t){return t==null?c.jsx("span",{className:"muted",children:"–"}):t?c.jsx("span",{className:"ok-text",children:"yes"}):c.jsx("span",{className:"bad-text",children:"no"})}function Cm({rows:t,onPick:e}){return c.jsx("div",{className:"table-wrap",children:c.jsxs("table",{className:"table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"scenario"}),c.jsx("th",{children:"seed"}),c.jsx("th",{children:"success"}),c.jsx("th",{children:"final state"}),c.jsx("th",{children:"RMSE m"}),c.jsx("th",{children:"detected"}),c.jsx("th",{children:"latency s"}),c.jsx("th",{children:"collisions"}),c.jsx("th",{children:"duration s"})]})}),c.jsx("tbody",{children:t.map((n,i)=>c.jsxs("tr",{className:e?"clickable":"",onClick:()=>e==null?void 0:e(n),children:[c.jsx("td",{children:n.scenario}),c.jsx("td",{children:n.seed}),c.jsx("td",{children:A_(n.mission_success)}),c.jsx("td",{children:n.final_state}),c.jsx("td",{children:ge(n.rmse_m)}),c.jsx("td",{children:n.faults_declared?`${n.faults_detected}/${n.faults_declared}`:"–"}),c.jsx("td",{children:ge(n.detection_latency_s)}),c.jsx("td",{className:n.collision_steps?"bad-text":"",children:n.collision_steps}),c.jsx("td",{children:ge(n.duration_s,0)})]},i))})]})})}function GT({sessions:t,current:e,token:n,authed:i,onOpen:r,refreshSessions:s}){const[a,o]=ae.useState([]),[l,u]=ae.useState(null),[h,d]=ae.useState([]),[p,g]=ae.useState(null),[_,v]=ae.useState(""),m=ae.useCallback(async()=>{const E=await Ct.get("/api/batches");E.ok&&o(E.data.batches)},[]),f=ae.useCallback(async()=>{const E=await Ct.get("/api/runs");E.ok&&d(E.data.runs)},[]);ae.useEffect(()=>{m(),f();const E=window.setInterval(m,2500);return()=>window.clearInterval(E)},[m,f]),ae.useEffect(()=>{if(!l)return;const E=l.id,A=async()=>{const z=await Ct.get(`/api/batches/${E}`);z.ok&&u(z.data.batch)};if(A(),l.state!=="running"&&l.state!=="queued")return;const R=window.setInterval(A,3e3);return()=>window.clearInterval(R)},[l==null?void 0:l.id,l==null?void 0:l.state]);const x=async(E,A,R={})=>{const z=await Ct.post(`/api/sessions/${E}/command`,n,{command:A,args:R});v(z.ok?`${E}: ${A} ok`:`${E}: ${(z.errors??[]).join("; ")}`),s()},y=async E=>{const A=await Ct.del(`/api/sessions/${E}`,n);v(A.ok?`${E} closed`:(A.errors??[]).join("; ")),s()},M=async E=>{await Ct.del(`/api/batches/${E}`,n),m()},L=async E=>{if(!E.path)return;const A=await Ct.get(`/api/runs/${E.path}`);A.ok&&g(A.data)};return c.jsxs("div",{className:"grid",children:[c.jsxs(qe,{title:`Live sessions (${t.length})`,className:"span2",right:c.jsx("span",{className:"muted small",children:"all run concurrently in the bridge"}),children:[t.length===0?c.jsx("p",{className:"muted",children:"No sessions. Launch one from the Lab tab."}):c.jsx("div",{className:"table-wrap",children:c.jsxs("table",{className:"table",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"id"}),c.jsx("th",{children:"label"}),c.jsx("th",{children:"scenario"}),c.jsx("th",{children:"environment"}),c.jsx("th",{children:"seed"}),c.jsx("th",{children:"progress"}),c.jsx("th",{children:"state"}),c.jsx("th",{children:"faults"}),c.jsx("th",{children:"result"}),c.jsx("th",{})]})}),c.jsx("tbody",{children:t.map(E=>c.jsxs("tr",{className:E.id===e?"current":"",children:[c.jsx("td",{children:E.id}),c.jsx("td",{children:E.label}),c.jsx("td",{children:E.scenario}),c.jsx("td",{children:E.environment.replace(/_/g," ")}),c.jsx("td",{children:E.seed}),c.jsx("td",{style:{minWidth:130},children:c.jsxs("div",{className:"progress mini",children:[c.jsx("div",{className:"progress-fill",style:{width:`${Math.min(100,100*E.t/E.duration)}%`}}),c.jsxs("span",{children:[E.building?"building…":`${ge(E.t,0)} s`,E.paused&&!E.finished?" · paused":""]})]})}),c.jsx("td",{children:E.state?c.jsx(Ba,{state:E.state}):"–"}),c.jsx("td",{children:E.faults}),c.jsx("td",{children:E.finished?A_(E.success):c.jsx("span",{className:"muted",children:"running"})}),c.jsxs("td",{className:"actions",children:[c.jsx("button",{onClick:()=>r(E.id),children:"open"}),E.paused?c.jsx("button",{disabled:!i||E.finished,onClick:()=>x(E.id,"resume"),children:"resume"}):c.jsx("button",{disabled:!i,onClick:()=>x(E.id,"pause"),children:"pause"}),c.jsx("button",{disabled:!i,onClick:()=>x(E.id,"reset"),children:"restart"}),c.jsx("button",{disabled:!i,onClick:()=>y(E.id),children:"close"})]})]},E.id))})]})}),WT(t),_&&c.jsx("p",{className:"muted small",children:_})]}),c.jsxs(qe,{title:"Batch sweeps",className:"span2",right:c.jsx("span",{className:"muted small",children:"start one from the Lab tab"}),children:[a.length===0&&c.jsx("p",{className:"muted",children:"No batches yet."}),a.map(E=>c.jsxs("div",{className:"batch",children:[c.jsxs("div",{className:"btn-row",children:[c.jsx("b",{children:E.label||E.id}),c.jsx("span",{className:`badge ${E.state==="done"?"ok":E.state==="cancelled"?"bad":"warn"}`,children:E.state}),c.jsxs("div",{className:"progress mini grow",children:[c.jsx("div",{className:"progress-fill",style:{width:`${100*E.done/E.total}%`}}),c.jsxs("span",{children:[E.done,"/",E.total," trials · ",E.succeeded," succeeded · ",E.jobs," workers"]})]}),c.jsx("button",{onClick:()=>u((l==null?void 0:l.id)===E.id?null:E),children:(l==null?void 0:l.id)===E.id?"hide":"results"}),(E.state==="running"||E.state==="queued")&&c.jsx("button",{disabled:!i,onClick:()=>M(E.id),children:"cancel"})]}),E.errors.length>0&&c.jsx("p",{className:"alert",children:E.errors.join(`
`)}),(l==null?void 0:l.id)===E.id&&l.rows&&c.jsxs(c.Fragment,{children:[c.jsx(Cm,{rows:l.rows}),c.jsxs("p",{className:"muted small",children:["Written to ",c.jsxs("code",{children:[E.out_dir,"/"]})," (summary.md, summary.csv, one folder per trial)."]})]})]},E.id))]}),c.jsxs(qe,{title:`Run archive (${h.length})`,className:"span2",right:c.jsx("button",{onClick:f,children:"refresh"}),children:[c.jsxs("p",{className:"muted small",children:["Every recorded trial under ",c.jsx("code",{children:"runs/"}),". Click a row for its metrics and event log."]}),c.jsx(Cm,{rows:h.slice(0,60),onPick:L})]}),p&&c.jsx(qe,{title:`Run · ${p.path}`,className:"span2",right:c.jsx("button",{onClick:()=>g(null),children:"close"}),children:c.jsxs("div",{className:"grid",children:[c.jsx("div",{children:["outcome","accuracy","detection","recovery"].map(E=>c.jsxs("table",{className:"table compact",children:[c.jsx("thead",{children:c.jsx("tr",{children:c.jsx("th",{colSpan:2,children:E})})}),c.jsx("tbody",{children:Object.entries(p.metrics[E]??{}).filter(([,A])=>typeof A!="object"||A===null).map(([A,R])=>c.jsxs("tr",{children:[c.jsx("th",{children:A}),c.jsx("td",{children:typeof R=="number"?ge(R,3):String(R)})]},A))})]},E))}),c.jsx("div",{children:c.jsx("pre",{className:"log tall",children:(p.events??[]).map(E=>`${Number(E.t).toFixed(2).padStart(8)}  ${E.kind.padEnd(17)} ${E.detail}`).join(`
`)})})]})})]})}function WT(t){const e=t.filter(n=>n.error||n.warning);return e.length?c.jsx("p",{className:"alert",children:e.map(n=>c.jsxs("span",{children:[n.id,": ",n.error??n.warning,c.jsx("br",{})]},n.id))}):null}const bm=[{id:"home",label:"Home",icon:"home",needsSession:!1,sub:"Overview of the testbed"},{id:"overview",label:"Mission",icon:"mission",needsSession:!0,sub:"State, localisation and faults"},{id:"map",label:"Map",icon:"mission",needsSession:!0,sub:"Top-down track, path and clearance"},{id:"simulation",label:"3D view",icon:"cube",needsSession:!0,sub:"Terrain, vehicle and path"},{id:"sensors",label:"Sensors",icon:"sensors",needsSession:!0,sub:"Health, residuals and biases"},{id:"results",label:"Results",icon:"results",needsSession:!0,sub:"Scored against ground truth"},{id:"replay",label:"Replay & control",icon:"replay",needsSession:!0,sub:"Scrub, export, inject faults live"},{id:"lab",label:"Lab",icon:"lab",needsSession:!1,sub:"Design and launch scenarios"},{id:"fleet",label:"Fleet",icon:"fleet",needsSession:!1,sub:"Sessions, batches and archive"}];function XT(){const[t,e]=ae.useState(ry),[n,i]=ae.useState(!1),[r,s]=ae.useState(null),[a,o]=ae.useState([]),[l,u]=ae.useState([]),[h,d]=ae.useState(!0),[p,g]=ae.useState(null),[_,v]=ae.useState("home"),[m,f]=ae.useState({n:0}),[x,y]=ae.useState(null),M=ly(p,t),L=ae.useCallback(b=>{sy(b),e(b)},[]);ae.useEffect(()=>{Ct.getAuthed("/api/info",t).then(b=>{b.ok&&(s(b.data.schema),i(b.data.authed),!b.data.authed&&b.data.token&&L(b.data.token))})},[t,L]);const E=ae.useCallback(()=>{Ct.get("/api/scenarios").then(b=>{b.ok&&o(b.data.scenarios)})},[]);ae.useEffect(E,[E]);const A=ae.useCallback(async()=>{const b=await Ct.get("/api/sessions");d(b.ok),b.ok&&(u(b.data.sessions),g(j=>{const $=b.data.sessions.map(B=>B.id);return j&&$.includes(j)?j:$[0]??null}))},[]);ae.useEffect(()=>{A();const b=window.setInterval(A,2e3);return()=>window.clearInterval(b)},[A]);const R=b=>{g(b),v("overview")},z=b=>{f(j=>({...b,n:j.n+1})),v("lab")},S=bm.find(b=>b.id===_),w=l.find(b=>b.id===p),I=async b=>{if(!p)return;y("switching to "+b.replace(/_/g," ")+"…");const j=await M.sendCommand("set_environment",{environment:b});y(j?null:"environment change refused (token?)"),A()};return c.jsxs("div",{className:"app",children:[c.jsxs("aside",{className:"sidebar",children:[c.jsxs("div",{className:"brand",children:[c.jsx("span",{className:"brand-mark"}),c.jsxs("span",{className:"brand-name",children:["ResilienceLab",c.jsx("small",{children:"SITL resilience testbed"})]})]}),c.jsxs("nav",{className:"nav-group",children:[c.jsx("span",{className:"nav-label",children:"Navigate"}),bm.map(b=>c.jsxs("button",{className:_===b.id?"nav-item active":"nav-item",onClick:()=>v(b.id),disabled:b.needsSession&&!p,children:[c.jsx(ki,{name:b.icon}),b.label,b.id==="fleet"&&l.length>0&&c.jsx("span",{className:"count",children:l.length})]},b.id))]}),l.length>0&&c.jsxs("div",{className:"side-sessions",children:[c.jsx("span",{className:"nav-label",children:"Live sessions"}),l.map(b=>c.jsxs("button",{className:b.id===p?"side-session current":"side-session",onClick:()=>R(b.id),title:`${b.label} · ${b.environment} · seed ${b.seed}`,children:[c.jsx("span",{className:`dot ${b.finished?"idle":b.state==="NORMAL"||b.state==="COMPLETE"?"ok":b.state?"warn":"idle"}`}),c.jsxs("span",{className:"lbl",children:[b.vehicle==="drone"?"✈ ":"◼ ",b.label]}),c.jsxs("span",{className:"t",children:[ge(b.t,0),"s"]})]},b.id))]}),c.jsxs("div",{className:"side-foot",children:[c.jsx("span",{className:h?"dot ok":"dot bad"}),h?n?"bridge · control":"bridge · read-only":"bridge offline"]})]}),c.jsxs("div",{className:"main",children:[c.jsxs("header",{className:"topbar",children:[c.jsxs("h1",{className:"page-title",children:[S.label,c.jsx("small",{children:S.sub})]}),c.jsxs("div",{className:"topbar-right",children:[S.needsSession&&w&&c.jsxs(c.Fragment,{children:[c.jsxs("span",{className:"chip",children:[c.jsx(ki,{name:w.vehicle==="drone"?"drone":"rover",size:14}),w.vehicle==="drone"?"quadrotor":"rover"]}),r&&c.jsx("select",{value:w.environment,onChange:b=>I(b.target.value),disabled:!n,title:"Restart this simulation in another environment",children:Object.entries(r.environments).map(([b,j])=>c.jsxs("option",{value:b,children:["🌍 ",j.label]},b))})]}),c.jsxs("select",{className:"session-select",value:p??"",onChange:b=>g(b.target.value||null),title:"Session shown in the Mission / 3D / Sensors / Results / Replay pages",children:[l.length===0&&c.jsx("option",{value:"",children:"no sessions"}),l.map(b=>c.jsxs("option",{value:b.id,children:[b.id," · ",b.label]},b.id))]}),S.needsSession&&p&&M.latest&&c.jsx(dy,{latest:M.latest,authed:n,speed:(w==null?void 0:w.speed)??1,onCommand:M.sendCommand}),M.latest&&c.jsx(Ba,{state:M.latest.resilience.state}),M.latest&&c.jsxs("span",{className:"clock",children:["t ",ge(M.latest.t,1),"s"]})]})]}),c.jsxs("main",{children:[x&&c.jsx("p",{className:"reason",style:{marginTop:0,marginBottom:14},children:x}),!h&&c.jsxs("div",{className:"splash",children:[c.jsx("h1",{children:"Waiting for the bridge"}),c.jsx("p",{className:"muted",children:"Start the backend, then this page reconnects by itself:"}),c.jsx("pre",{children:"./run_demo.sh"})]}),h&&S.needsSession&&!p&&c.jsxs("div",{className:"splash",children:[c.jsx("h1",{children:"No simulation running"}),c.jsx("p",{className:"muted",children:"Design a scenario and launch it from the Lab."}),c.jsx("button",{className:"primary",onClick:()=>z(),children:"Open the Lab"})]}),S.needsSession&&p&&!M.latest&&h&&c.jsxs("div",{className:"splash",children:[c.jsx("h1",{children:M.missing?"Session closed":"Building the world…"}),c.jsx("p",{className:"muted",children:M.missing?"Pick another session.":"Generating terrain, obstacles and sensors."})]}),S.needsSession&&(w==null?void 0:w.warning)&&c.jsxs("p",{className:"alert banner",children:["⚠ ",w.warning]}),_==="home"&&c.jsx(gy,{schema:r,sessions:l,token:t,authed:n,openLab:z,openSession:R,openFleet:()=>v("fleet")}),M.latest&&M.world&&_==="overview"&&c.jsx(_y,{latest:M.latest,world:M.world,history:M.history}),M.latest&&M.world&&_==="map"&&c.jsx(yy,{latest:M.latest,world:M.world,path:M.path,history:M.history}),M.latest&&M.world&&_==="simulation"&&c.jsx(PT,{latest:M.latest,world:M.world,path:M.path,history:M.history}),M.latest&&_==="sensors"&&c.jsx(IT,{latest:M.latest,history:M.history}),p&&M.latest&&_==="results"&&c.jsx(FT,{results:M.results,latest:M.latest,world:M.world}),p&&M.latest&&_==="replay"&&c.jsx(jT,{history:M.history,world:M.world,latest:M.latest,results:M.results,sendCommand:M.sendCommand,authed:n,commandLog:M.commandLog,token:t,setToken:L,schema:r,vehicle:(w==null?void 0:w.vehicle)??"ugv"}),_==="lab"&&r&&c.jsx(VT,{schema:r,scenarios:a,token:t,authed:n,preset:m,onLaunched:b=>{A(),R(b.id)},onBatchStarted:()=>v("fleet"),refreshScenarios:E},m.n),_==="fleet"&&c.jsx(GT,{sessions:l,current:p,token:t,authed:n,onOpen:R,refreshSessions:A})]}),c.jsxs("footer",{className:"foot",children:[c.jsx("span",{children:"Ground truth is for scoring and display only — the navigation stack never reads it."}),c.jsxs("span",{children:["GNSS flags report that streams ",c.jsx("em",{children:"disagree"}),"; no cause is claimed."]})]})]})]})}jv(document.getElementById("root")).render(c.jsx(ae.StrictMode,{children:c.jsx(XT,{})}));
//# sourceMappingURL=index-BYniFrkM.js.map
