(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var eh={exports:{}},wo={};var E0;function vS(){if(E0)return wo;E0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var p in l)p!=="key"&&(u[p]=l[p])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:u}}return wo.Fragment=e,wo.jsx=i,wo.jsxs=i,wo}var b0;function xS(){return b0||(b0=1,eh.exports=vS()),eh.exports}var Kt=xS(),nh={exports:{}},oe={};var T0;function SS(){if(T0)return oe;T0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),v=Symbol.iterator;function E(O){return O===null||typeof O!="object"?null:(O=v&&O[v]||O["@@iterator"],typeof O=="function"?O:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,M={};function x(O,Y,_t){this.props=O,this.context=Y,this.refs=M,this.updater=_t||b}x.prototype.isReactComponent={},x.prototype.setState=function(O,Y){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,Y,"setState")},x.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function D(){}D.prototype=x.prototype;function P(O,Y,_t){this.props=O,this.context=Y,this.refs=M,this.updater=_t||b}var N=P.prototype=new D;N.constructor=P,C(N,x.prototype),N.isPureReactComponent=!0;var X=Array.isArray;function H(){}var B={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function U(O,Y,_t){var At=_t.ref;return{$$typeof:o,type:O,key:Y,ref:At!==void 0?At:null,props:_t}}function ht(O,Y){return U(O.type,Y,O.props)}function G(O){return typeof O=="object"&&O!==null&&O.$$typeof===o}function Q(O){var Y={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(_t){return Y[_t]})}var st=/\/+/g;function ot(O,Y){return typeof O=="object"&&O!==null&&O.key!=null?Q(""+O.key):Y.toString(36)}function J(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(H,H):(O.status="pending",O.then(function(Y){O.status==="pending"&&(O.status="fulfilled",O.value=Y)},function(Y){O.status==="pending"&&(O.status="rejected",O.reason=Y)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function L(O,Y,_t,At,Ot){var et=typeof O;(et==="undefined"||et==="boolean")&&(O=null);var vt=!1;if(O===null)vt=!0;else switch(et){case"bigint":case"string":case"number":vt=!0;break;case"object":switch(O.$$typeof){case o:case e:vt=!0;break;case S:return vt=O._init,L(vt(O._payload),Y,_t,At,Ot)}}if(vt)return Ot=Ot(O),vt=At===""?"."+ot(O,0):At,X(Ot)?(_t="",vt!=null&&(_t=vt.replace(st,"$&/")+"/"),L(Ot,Y,_t,"",function(Zt){return Zt})):Ot!=null&&(G(Ot)&&(Ot=ht(Ot,_t+(Ot.key==null||O&&O.key===Ot.key?"":(""+Ot.key).replace(st,"$&/")+"/")+vt)),Y.push(Ot)),1;vt=0;var St=At===""?".":At+":";if(X(O))for(var Gt=0;Gt<O.length;Gt++)At=O[Gt],et=St+ot(At,Gt),vt+=L(At,Y,_t,et,Ot);else if(Gt=E(O),typeof Gt=="function")for(O=Gt.call(O),Gt=0;!(At=O.next()).done;)At=At.value,et=St+ot(At,Gt++),vt+=L(At,Y,_t,et,Ot);else if(et==="object"){if(typeof O.then=="function")return L(J(O),Y,_t,At,Ot);throw Y=String(O),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return vt}function F(O,Y,_t){if(O==null)return O;var At=[],Ot=0;return L(O,At,"","",function(et){return Y.call(_t,et,Ot++)}),At}function lt(O){if(O._status===-1){var Y=O._result;Y=Y(),Y.then(function(_t){(O._status===0||O._status===-1)&&(O._status=1,O._result=_t)},function(_t){(O._status===0||O._status===-1)&&(O._status=2,O._result=_t)}),O._status===-1&&(O._status=0,O._result=Y)}if(O._status===1)return O._result.default;throw O._result}var mt=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},Et={map:F,forEach:function(O,Y,_t){F(O,function(){Y.apply(this,arguments)},_t)},count:function(O){var Y=0;return F(O,function(){Y++}),Y},toArray:function(O){return F(O,function(Y){return Y})||[]},only:function(O){if(!G(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return oe.Activity=y,oe.Children=Et,oe.Component=x,oe.Fragment=i,oe.Profiler=l,oe.PureComponent=P,oe.StrictMode=s,oe.Suspense=g,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,oe.__COMPILER_RUNTIME={__proto__:null,c:function(O){return B.H.useMemoCache(O)}},oe.cache=function(O){return function(){return O.apply(null,arguments)}},oe.cacheSignal=function(){return null},oe.cloneElement=function(O,Y,_t){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var At=C({},O.props),Ot=O.key;if(Y!=null)for(et in Y.key!==void 0&&(Ot=""+Y.key),Y)!T.call(Y,et)||et==="key"||et==="__self"||et==="__source"||et==="ref"&&Y.ref===void 0||(At[et]=Y[et]);var et=arguments.length-2;if(et===1)At.children=_t;else if(1<et){for(var vt=Array(et),St=0;St<et;St++)vt[St]=arguments[St+2];At.children=vt}return U(O.type,Ot,At)},oe.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},oe.createElement=function(O,Y,_t){var At,Ot={},et=null;if(Y!=null)for(At in Y.key!==void 0&&(et=""+Y.key),Y)T.call(Y,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(Ot[At]=Y[At]);var vt=arguments.length-2;if(vt===1)Ot.children=_t;else if(1<vt){for(var St=Array(vt),Gt=0;Gt<vt;Gt++)St[Gt]=arguments[Gt+2];Ot.children=St}if(O&&O.defaultProps)for(At in vt=O.defaultProps,vt)Ot[At]===void 0&&(Ot[At]=vt[At]);return U(O,et,Ot)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(O){return{$$typeof:p,render:O}},oe.isValidElement=G,oe.lazy=function(O){return{$$typeof:S,_payload:{_status:-1,_result:O},_init:lt}},oe.memo=function(O,Y){return{$$typeof:d,type:O,compare:Y===void 0?null:Y}},oe.startTransition=function(O){var Y=B.T,_t={};B.T=_t;try{var At=O(),Ot=B.S;Ot!==null&&Ot(_t,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(H,mt)}catch(et){mt(et)}finally{Y!==null&&_t.types!==null&&(Y.types=_t.types),B.T=Y}},oe.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},oe.use=function(O){return B.H.use(O)},oe.useActionState=function(O,Y,_t){return B.H.useActionState(O,Y,_t)},oe.useCallback=function(O,Y){return B.H.useCallback(O,Y)},oe.useContext=function(O){return B.H.useContext(O)},oe.useDebugValue=function(){},oe.useDeferredValue=function(O,Y){return B.H.useDeferredValue(O,Y)},oe.useEffect=function(O,Y){return B.H.useEffect(O,Y)},oe.useEffectEvent=function(O){return B.H.useEffectEvent(O)},oe.useId=function(){return B.H.useId()},oe.useImperativeHandle=function(O,Y,_t){return B.H.useImperativeHandle(O,Y,_t)},oe.useInsertionEffect=function(O,Y){return B.H.useInsertionEffect(O,Y)},oe.useLayoutEffect=function(O,Y){return B.H.useLayoutEffect(O,Y)},oe.useMemo=function(O,Y){return B.H.useMemo(O,Y)},oe.useOptimistic=function(O,Y){return B.H.useOptimistic(O,Y)},oe.useReducer=function(O,Y,_t){return B.H.useReducer(O,Y,_t)},oe.useRef=function(O){return B.H.useRef(O)},oe.useState=function(O){return B.H.useState(O)},oe.useSyncExternalStore=function(O,Y,_t){return B.H.useSyncExternalStore(O,Y,_t)},oe.useTransition=function(){return B.H.useTransition()},oe.version="19.2.4",oe}var A0;function Od(){return A0||(A0=1,nh.exports=SS()),nh.exports}var Cn=Od(),ih={exports:{}},Do={},ah={exports:{}},sh={};var R0;function yS(){return R0||(R0=1,(function(o){function e(L,F){var lt=L.length;L.push(F);t:for(;0<lt;){var mt=lt-1>>>1,Et=L[mt];if(0<l(Et,F))L[mt]=F,L[lt]=Et,lt=mt;else break t}}function i(L){return L.length===0?null:L[0]}function s(L){if(L.length===0)return null;var F=L[0],lt=L.pop();if(lt!==F){L[0]=lt;t:for(var mt=0,Et=L.length,O=Et>>>1;mt<O;){var Y=2*(mt+1)-1,_t=L[Y],At=Y+1,Ot=L[At];if(0>l(_t,lt))At<Et&&0>l(Ot,_t)?(L[mt]=Ot,L[At]=lt,mt=At):(L[mt]=_t,L[Y]=lt,mt=Y);else if(At<Et&&0>l(Ot,lt))L[mt]=Ot,L[At]=lt,mt=At;else break t}}return F}function l(L,F){var lt=L.sortIndex-F.sortIndex;return lt!==0?lt:L.id-F.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,p=h.now();o.unstable_now=function(){return h.now()-p}}var g=[],d=[],S=1,y=null,v=3,E=!1,b=!1,C=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function N(L){for(var F=i(d);F!==null;){if(F.callback===null)s(d);else if(F.startTime<=L)s(d),F.sortIndex=F.expirationTime,e(g,F);else break;F=i(d)}}function X(L){if(C=!1,N(L),!b)if(i(g)!==null)b=!0,H||(H=!0,Q());else{var F=i(d);F!==null&&J(X,F.startTime-L)}}var H=!1,B=-1,T=5,U=-1;function ht(){return M?!0:!(o.unstable_now()-U<T)}function G(){if(M=!1,H){var L=o.unstable_now();U=L;var F=!0;try{t:{b=!1,C&&(C=!1,D(B),B=-1),E=!0;var lt=v;try{e:{for(N(L),y=i(g);y!==null&&!(y.expirationTime>L&&ht());){var mt=y.callback;if(typeof mt=="function"){y.callback=null,v=y.priorityLevel;var Et=mt(y.expirationTime<=L);if(L=o.unstable_now(),typeof Et=="function"){y.callback=Et,N(L),F=!0;break e}y===i(g)&&s(g),N(L)}else s(g);y=i(g)}if(y!==null)F=!0;else{var O=i(d);O!==null&&J(X,O.startTime-L),F=!1}}break t}finally{y=null,v=lt,E=!1}F=void 0}}finally{F?Q():H=!1}}}var Q;if(typeof P=="function")Q=function(){P(G)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,ot=st.port2;st.port1.onmessage=G,Q=function(){ot.postMessage(null)}}else Q=function(){x(G,0)};function J(L,F){B=x(function(){L(o.unstable_now())},F)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(L){L.callback=null},o.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<L?Math.floor(1e3/L):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(L){switch(v){case 1:case 2:case 3:var F=3;break;default:F=v}var lt=v;v=F;try{return L()}finally{v=lt}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(L,F){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var lt=v;v=L;try{return F()}finally{v=lt}},o.unstable_scheduleCallback=function(L,F,lt){var mt=o.unstable_now();switch(typeof lt=="object"&&lt!==null?(lt=lt.delay,lt=typeof lt=="number"&&0<lt?mt+lt:mt):lt=mt,L){case 1:var Et=-1;break;case 2:Et=250;break;case 5:Et=1073741823;break;case 4:Et=1e4;break;default:Et=5e3}return Et=lt+Et,L={id:S++,callback:F,priorityLevel:L,startTime:lt,expirationTime:Et,sortIndex:-1},lt>mt?(L.sortIndex=lt,e(d,L),i(g)===null&&L===i(d)&&(C?(D(B),B=-1):C=!0,J(X,lt-mt))):(L.sortIndex=Et,e(g,L),b||E||(b=!0,H||(H=!0,Q()))),L},o.unstable_shouldYield=ht,o.unstable_wrapCallback=function(L){var F=v;return function(){var lt=v;v=F;try{return L.apply(this,arguments)}finally{v=lt}}}})(sh)),sh}var C0;function MS(){return C0||(C0=1,ah.exports=yS()),ah.exports}var rh={exports:{}},Tn={};var w0;function ES(){if(w0)return Tn;w0=1;var o=Od();function e(g){var d="https://react.dev/errors/"+g;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)d+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+g+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(g,d,S){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:y==null?null:""+y,children:g,containerInfo:d,implementation:S}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(g,d){if(g==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Tn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Tn.createPortal=function(g,d){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return u(g,d,null,S)},Tn.flushSync=function(g){var d=h.T,S=s.p;try{if(h.T=null,s.p=2,g)return g()}finally{h.T=d,s.p=S,s.d.f()}},Tn.preconnect=function(g,d){typeof g=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,s.d.C(g,d))},Tn.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},Tn.preinit=function(g,d){if(typeof g=="string"&&d&&typeof d.as=="string"){var S=d.as,y=p(S,d.crossOrigin),v=typeof d.integrity=="string"?d.integrity:void 0,E=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;S==="style"?s.d.S(g,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:y,integrity:v,fetchPriority:E}):S==="script"&&s.d.X(g,{crossOrigin:y,integrity:v,fetchPriority:E,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Tn.preinitModule=function(g,d){if(typeof g=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var S=p(d.as,d.crossOrigin);s.d.M(g,{crossOrigin:S,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&s.d.M(g)},Tn.preload=function(g,d){if(typeof g=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var S=d.as,y=p(S,d.crossOrigin);s.d.L(g,S,{crossOrigin:y,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Tn.preloadModule=function(g,d){if(typeof g=="string")if(d){var S=p(d.as,d.crossOrigin);s.d.m(g,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:S,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else s.d.m(g)},Tn.requestFormReset=function(g){s.d.r(g)},Tn.unstable_batchedUpdates=function(g,d){return g(d)},Tn.useFormState=function(g,d,S){return h.H.useFormState(g,d,S)},Tn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Tn.version="19.2.4",Tn}var D0;function bS(){if(D0)return rh.exports;D0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),rh.exports=ES(),rh.exports}var U0;function TS(){if(U0)return Do;U0=1;var o=MS(),e=Od(),i=bS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function g(t){if(u(t)!==t)throw Error(s(188))}function d(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return g(c),t;if(f===r)return g(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var _=!1,A=c.child;A;){if(A===a){_=!0,a=c,r=f;break}if(A===r){_=!0,r=c,a=f;break}A=A.sibling}if(!_){for(A=f.child;A;){if(A===a){_=!0,a=f,r=c;break}if(A===r){_=!0,r=f,a=c;break}A=A.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function S(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=S(t),n!==null)return n;t=t.sibling}return null}var y=Object.assign,v=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),P=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),ht=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function Q(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var st=Symbol.for("react.client.reference");function ot(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===st?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case x:return"Profiler";case M:return"StrictMode";case X:return"Suspense";case H:return"SuspenseList";case U:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case P:return t.displayName||"Context";case D:return(t._context.displayName||"Context")+".Consumer";case N:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return n=t.displayName||null,n!==null?n:ot(t.type)||"Memo";case T:n=t._payload,t=t._init;try{return ot(t(n))}catch{}}return null}var J=Array.isArray,L=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,lt={pending:!1,data:null,method:null,action:null},mt=[],Et=-1;function O(t){return{current:t}}function Y(t){0>Et||(t.current=mt[Et],mt[Et]=null,Et--)}function _t(t,n){Et++,mt[Et]=t.current,t.current=n}var At=O(null),Ot=O(null),et=O(null),vt=O(null);function St(t,n){switch(_t(et,n),_t(Ot,t),_t(At,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?qg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=qg(n),t=Yg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Y(At),_t(At,t)}function Gt(){Y(At),Y(Ot),Y(et)}function Zt(t){t.memoizedState!==null&&_t(vt,t);var n=At.current,a=Yg(n,t.type);n!==a&&(_t(Ot,t),_t(At,a))}function $t(t){Ot.current===t&&(Y(At),Y(Ot)),vt.current===t&&(Y(vt),To._currentValue=lt)}var Ye,ge;function me(t){if(Ye===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ye=n&&n[1]||"",ge=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ye+t+ge}var be=!1;function ae(t,n){if(!t||be)return"";be=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(ut){var it=ut}Reflect.construct(t,[],xt)}else{try{xt.call()}catch(ut){it=ut}t.call(xt.prototype)}}else{try{throw Error()}catch(ut){it=ut}(xt=t())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(ut){if(ut&&it&&typeof ut.stack=="string")return[ut.stack,it.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),_=f[0],A=f[1];if(_&&A){var I=_.split(`
`),tt=A.split(`
`);for(c=r=0;r<I.length&&!I[r].includes("DetermineComponentFrameRoot");)r++;for(;c<tt.length&&!tt[c].includes("DetermineComponentFrameRoot");)c++;if(r===I.length||c===tt.length)for(r=I.length-1,c=tt.length-1;1<=r&&0<=c&&I[r]!==tt[c];)c--;for(;1<=r&&0<=c;r--,c--)if(I[r]!==tt[c]){if(r!==1||c!==1)do if(r--,c--,0>c||I[r]!==tt[c]){var pt=`
`+I[r].replace(" at new "," at ");return t.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",t.displayName)),pt}while(1<=r&&0<=c);break}}}finally{be=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?me(a):""}function ke(t,n){switch(t.tag){case 26:case 27:case 5:return me(t.type);case 16:return me("Lazy");case 13:return t.child!==n&&n!==null?me("Suspense Fallback"):me("Suspense");case 19:return me("SuspenseList");case 0:case 15:return ae(t.type,!1);case 11:return ae(t.type.render,!1);case 1:return ae(t.type,!0);case 31:return me("Activity");default:return""}}function V(t){try{var n="",a=null;do n+=ke(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Ve=Object.prototype.hasOwnProperty,ye=o.unstable_scheduleCallback,Te=o.unstable_cancelCallback,Xt=o.unstable_shouldYield,w=o.unstable_requestPaint,m=o.unstable_now,z=o.unstable_getCurrentPriorityLevel,Z=o.unstable_ImmediatePriority,ft=o.unstable_UserBlockingPriority,rt=o.unstable_NormalPriority,Dt=o.unstable_LowPriority,Rt=o.unstable_IdlePriority,qt=o.log,Jt=o.unstable_setDisableYieldValue,bt=null,yt=null;function Pt(t){if(typeof qt=="function"&&Jt(t),yt&&typeof yt.setStrictMode=="function")try{yt.setStrictMode(bt,t)}catch{}}var Nt=Math.clz32?Math.clz32:q,zt=Math.log,ue=Math.LN2;function q(t){return t>>>=0,t===0?32:31-(zt(t)/ue|0)|0}var Ct=256,Tt=262144,Ft=4194304;function Mt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function dt(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var c=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var A=r&134217727;return A!==0?(r=A&~f,r!==0?c=Mt(r):(_&=A,_!==0?c=Mt(_):a||(a=A&~t,a!==0&&(c=Mt(a))))):(A=r&~f,A!==0?c=Mt(A):_!==0?c=Mt(_):a||(a=r&~t,a!==0&&(c=Mt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function It(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ie(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pe(){var t=Ft;return Ft<<=1,(Ft&62914560)===0&&(Ft=4194304),t}function Ae(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function wn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function gi(t,n,a,r,c,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,I=t.expirationTimes,tt=t.hiddenUpdates;for(a=_&~a;0<a;){var pt=31-Nt(a),xt=1<<pt;A[pt]=0,I[pt]=-1;var it=tt[pt];if(it!==null)for(tt[pt]=null,pt=0;pt<it.length;pt++){var ut=it[pt];ut!==null&&(ut.lane&=-536870913)}a&=~xt}r!==0&&Ir(t,r,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function Ir(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-Nt(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function Ns(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-Nt(a),c=1<<r;c&n|t[r]&n&&(t[r]|=n),a&=~c}}function Zo(t,n){var a=n&-n;return a=(a&42)!==0?1:Os(a),(a&(t.suspendedLanes|n))!==0?0:a}function Os(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ps(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ni(){var t=F.p;return t!==0?t:(t=window.event,t===void 0?32:g0(t.type))}function zs(t,n){var a=F.p;try{return F.p=t,n()}finally{F.p=a}}var _i=Math.random().toString(36).slice(2),an="__reactFiber$"+_i,dn="__reactProps$"+_i,qi="__reactContainer$"+_i,ya="__reactEvents$"+_i,Ko="__reactListeners$"+_i,Qo="__reactHandles$"+_i,Jo="__reactResources$"+_i,ns="__reactMarker$"+_i;function Hr(t){delete t[an],delete t[dn],delete t[ya],delete t[Ko],delete t[Qo]}function Ma(t){var n=t[an];if(n)return n;for(var a=t.parentNode;a;){if(n=a[qi]||a[an]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=t0(t);t!==null;){if(a=t[an])return a;t=t0(t)}return n}t=a,a=t.parentNode}return null}function Ea(t){if(t=t[an]||t[qi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function is(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function R(t){var n=t[Jo];return n||(n=t[Jo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function W(t){t[ns]=!0}var ct=new Set,nt={};function K(t,n){wt(t,n),wt(t+"Capture",n)}function wt(t,n){for(nt[t]=n,t=0;t<n.length;t++)ct.add(n[t])}var Bt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ut={},Wt={};function jt(t){return Ve.call(Wt,t)?!0:Ve.call(Ut,t)?!1:Bt.test(t)?Wt[t]=!0:(Ut[t]=!0,!1)}function ee(t,n,a){if(jt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function re(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ht(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+r)}}function fe(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function je(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ze(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ce(t){if(!t._valueTracker){var n=je(t)?"checked":"value";t._valueTracker=Ze(t,n,""+t[n])}}function pn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=je(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}function kt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Dn=/[\n"\\]/g;function se(t){return t.replace(Dn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Un(t,n,a,r,c,f,_,A){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+fe(n)):t.value!==""+fe(n)&&(t.value=""+fe(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?vi(t,_,fe(n)):a!=null?vi(t,_,fe(a)):r!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+fe(A):t.removeAttribute("name")}function Wn(t,n,a,r,c,f,_,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Ce(t);return}a=a!=null?""+fe(a):"",n=n!=null?""+fe(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=A?t.checked:!!r,t.defaultChecked=!!r,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),Ce(t)}function vi(t,n,a){n==="number"&&kt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function qn(t,n,a,r){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&r&&(t[a].defaultSelected=!0)}else{for(a=""+fe(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,r&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Oe(t,n,a){if(n!=null&&(n=""+fe(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+fe(a):""}function sn(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(J(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=fe(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),Ce(t)}function Ln(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var rn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function xi(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||rn.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Yi(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&xi(t,c,r)}else for(var f in n)n.hasOwnProperty(f)&&xi(t,f,n[f])}function Fs(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),mv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $o(t){return mv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ji(){}var Qc=null;function Jc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Bs=null,Is=null;function Wd(t){var n=Ea(t);if(n&&(t=n.stateNode)){var a=t[dn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Un(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+se(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var c=r[dn]||null;if(!c)throw Error(s(90));Un(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&pn(r)}break t;case"textarea":Oe(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&qn(t,!!a.multiple,n,!1)}}}var $c=!1;function qd(t,n,a){if($c)return t(n,a);$c=!0;try{var r=t(n);return r}finally{if($c=!1,(Bs!==null||Is!==null)&&(Hl(),Bs&&(n=Bs,t=Is,Is=Bs=null,Wd(n),t)))for(n=0;n<t.length;n++)Wd(t[n])}}function Gr(t,n){var a=t.stateNode;if(a===null)return null;var r=a[dn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tu=!1;if(Zi)try{var Vr={};Object.defineProperty(Vr,"passive",{get:function(){tu=!0}}),window.addEventListener("test",Vr,Vr),window.removeEventListener("test",Vr,Vr)}catch{tu=!1}var ba=null,eu=null,tl=null;function Yd(){if(tl)return tl;var t,n=eu,a=n.length,r,c="value"in ba?ba.value:ba.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var _=a-t;for(r=1;r<=_&&n[a-r]===c[f-r];r++);return tl=c.slice(t,1<r?1-r:void 0)}function el(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function nl(){return!0}function jd(){return!1}function zn(t){function n(a,r,c,f,_){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?nl:jd,this.isPropagationStopped=jd,this}return y(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=nl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=nl)},persist:function(){},isPersistent:nl}),n}var as={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},il=zn(as),Xr=y({},as,{view:0,detail:0}),gv=zn(Xr),nu,iu,kr,al=y({},Xr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:su,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==kr&&(kr&&t.type==="mousemove"?(nu=t.screenX-kr.screenX,iu=t.screenY-kr.screenY):iu=nu=0,kr=t),nu)},movementY:function(t){return"movementY"in t?t.movementY:iu}}),Zd=zn(al),_v=y({},al,{dataTransfer:0}),vv=zn(_v),xv=y({},Xr,{relatedTarget:0}),au=zn(xv),Sv=y({},as,{animationName:0,elapsedTime:0,pseudoElement:0}),yv=zn(Sv),Mv=y({},as,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ev=zn(Mv),bv=y({},as,{data:0}),Kd=zn(bv),Tv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Av={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Rv[t])?!!n[t]:!1}function su(){return Cv}var wv=y({},Xr,{key:function(t){if(t.key){var n=Tv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=el(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Av[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:su,charCode:function(t){return t.type==="keypress"?el(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?el(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Dv=zn(wv),Uv=y({},al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qd=zn(Uv),Lv=y({},Xr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:su}),Nv=zn(Lv),Ov=y({},as,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pv=zn(Ov),zv=y({},al,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Fv=zn(zv),Bv=y({},as,{newState:0,oldState:0}),Iv=zn(Bv),Hv=[9,13,27,32],ru=Zi&&"CompositionEvent"in window,Wr=null;Zi&&"documentMode"in document&&(Wr=document.documentMode);var Gv=Zi&&"TextEvent"in window&&!Wr,Jd=Zi&&(!ru||Wr&&8<Wr&&11>=Wr),$d=" ",tp=!1;function ep(t,n){switch(t){case"keyup":return Hv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function np(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hs=!1;function Vv(t,n){switch(t){case"compositionend":return np(n);case"keypress":return n.which!==32?null:(tp=!0,$d);case"textInput":return t=n.data,t===$d&&tp?null:t;default:return null}}function Xv(t,n){if(Hs)return t==="compositionend"||!ru&&ep(t,n)?(t=Yd(),tl=eu=ba=null,Hs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Jd&&n.locale!=="ko"?null:n.data;default:return null}}var kv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ip(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!kv[t.type]:n==="textarea"}function ap(t,n,a,r){Bs?Is?Is.push(r):Is=[r]:Bs=r,n=Yl(n,"onChange"),0<n.length&&(a=new il("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var qr=null,Yr=null;function Wv(t){Hg(t,0)}function sl(t){var n=is(t);if(pn(n))return t}function sp(t,n){if(t==="change")return n}var rp=!1;if(Zi){var ou;if(Zi){var lu="oninput"in document;if(!lu){var op=document.createElement("div");op.setAttribute("oninput","return;"),lu=typeof op.oninput=="function"}ou=lu}else ou=!1;rp=ou&&(!document.documentMode||9<document.documentMode)}function lp(){qr&&(qr.detachEvent("onpropertychange",cp),Yr=qr=null)}function cp(t){if(t.propertyName==="value"&&sl(Yr)){var n=[];ap(n,Yr,t,Jc(t)),qd(Wv,n)}}function qv(t,n,a){t==="focusin"?(lp(),qr=n,Yr=a,qr.attachEvent("onpropertychange",cp)):t==="focusout"&&lp()}function Yv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return sl(Yr)}function jv(t,n){if(t==="click")return sl(n)}function Zv(t,n){if(t==="input"||t==="change")return sl(n)}function Kv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Yn=typeof Object.is=="function"?Object.is:Kv;function jr(t,n){if(Yn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!Ve.call(n,c)||!Yn(t[c],n[c]))return!1}return!0}function up(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function fp(t,n){var a=up(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=up(a)}}function hp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?hp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function dp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=kt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=kt(t.document)}return n}function cu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Qv=Zi&&"documentMode"in document&&11>=document.documentMode,Gs=null,uu=null,Zr=null,fu=!1;function pp(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;fu||Gs==null||Gs!==kt(r)||(r=Gs,"selectionStart"in r&&cu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zr&&jr(Zr,r)||(Zr=r,r=Yl(uu,"onSelect"),0<r.length&&(n=new il("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=Gs)))}function ss(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Vs={animationend:ss("Animation","AnimationEnd"),animationiteration:ss("Animation","AnimationIteration"),animationstart:ss("Animation","AnimationStart"),transitionrun:ss("Transition","TransitionRun"),transitionstart:ss("Transition","TransitionStart"),transitioncancel:ss("Transition","TransitionCancel"),transitionend:ss("Transition","TransitionEnd")},hu={},mp={};Zi&&(mp=document.createElement("div").style,"AnimationEvent"in window||(delete Vs.animationend.animation,delete Vs.animationiteration.animation,delete Vs.animationstart.animation),"TransitionEvent"in window||delete Vs.transitionend.transition);function rs(t){if(hu[t])return hu[t];if(!Vs[t])return t;var n=Vs[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in mp)return hu[t]=n[a];return t}var gp=rs("animationend"),_p=rs("animationiteration"),vp=rs("animationstart"),Jv=rs("transitionrun"),$v=rs("transitionstart"),tx=rs("transitioncancel"),xp=rs("transitionend"),Sp=new Map,du="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");du.push("scrollEnd");function Si(t,n){Sp.set(t,n),K(n,[t])}var rl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ii=[],Xs=0,pu=0;function ol(){for(var t=Xs,n=pu=Xs=0;n<t;){var a=ii[n];ii[n++]=null;var r=ii[n];ii[n++]=null;var c=ii[n];ii[n++]=null;var f=ii[n];if(ii[n++]=null,r!==null&&c!==null){var _=r.pending;_===null?c.next=c:(c.next=_.next,_.next=c),r.pending=c}f!==0&&yp(a,c,f)}}function ll(t,n,a,r){ii[Xs++]=t,ii[Xs++]=n,ii[Xs++]=a,ii[Xs++]=r,pu|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function mu(t,n,a,r){return ll(t,n,a,r),cl(t)}function os(t,n){return ll(t,null,null,n),cl(t)}function yp(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Nt(a),t=f.hiddenUpdates,r=t[c],r===null?t[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function cl(t){if(50<vo)throw vo=0,Tf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var ks={};function ex(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,n,a,r){return new ex(t,n,a,r)}function gu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ki(t,n){var a=t.alternate;return a===null?(a=jn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Mp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function ul(t,n,a,r,c,f){var _=0;if(r=t,typeof t=="function")gu(t)&&(_=1);else if(typeof t=="string")_=rS(t,a,At.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case U:return t=jn(31,a,n,c),t.elementType=U,t.lanes=f,t;case C:return ls(a.children,c,f,n);case M:_=8,c|=24;break;case x:return t=jn(12,a,n,c|2),t.elementType=x,t.lanes=f,t;case X:return t=jn(13,a,n,c),t.elementType=X,t.lanes=f,t;case H:return t=jn(19,a,n,c),t.elementType=H,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case P:_=10;break t;case D:_=9;break t;case N:_=11;break t;case B:_=14;break t;case T:_=16,r=null;break t}_=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=jn(_,a,n,c),n.elementType=t,n.type=r,n.lanes=f,n}function ls(t,n,a,r){return t=jn(7,t,r,n),t.lanes=a,t}function _u(t,n,a){return t=jn(6,t,null,n),t.lanes=a,t}function Ep(t){var n=jn(18,null,null,0);return n.stateNode=t,n}function vu(t,n,a){return n=jn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var bp=new WeakMap;function ai(t,n){if(typeof t=="object"&&t!==null){var a=bp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:V(n)},bp.set(t,n),n)}return{value:t,source:n,stack:V(n)}}var Ws=[],qs=0,fl=null,Kr=0,si=[],ri=0,Ta=null,Oi=1,Pi="";function Qi(t,n){Ws[qs++]=Kr,Ws[qs++]=fl,fl=t,Kr=n}function Tp(t,n,a){si[ri++]=Oi,si[ri++]=Pi,si[ri++]=Ta,Ta=t;var r=Oi;t=Pi;var c=32-Nt(r)-1;r&=~(1<<c),a+=1;var f=32-Nt(n)+c;if(30<f){var _=c-c%5;f=(r&(1<<_)-1).toString(32),r>>=_,c-=_,Oi=1<<32-Nt(n)+c|a<<c|r,Pi=f+t}else Oi=1<<f|a<<c|r,Pi=t}function xu(t){t.return!==null&&(Qi(t,1),Tp(t,1,0))}function Su(t){for(;t===fl;)fl=Ws[--qs],Ws[qs]=null,Kr=Ws[--qs],Ws[qs]=null;for(;t===Ta;)Ta=si[--ri],si[ri]=null,Pi=si[--ri],si[ri]=null,Oi=si[--ri],si[ri]=null}function Ap(t,n){si[ri++]=Oi,si[ri++]=Pi,si[ri++]=Ta,Oi=n.id,Pi=n.overflow,Ta=t}var Sn=null,We=null,Me=!1,Aa=null,oi=!1,yu=Error(s(519));function Ra(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Qr(ai(n,t)),yu}function Rp(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[an]=t,n[dn]=r,a){case"dialog":ve("cancel",n),ve("close",n);break;case"iframe":case"object":case"embed":ve("load",n);break;case"video":case"audio":for(a=0;a<So.length;a++)ve(So[a],n);break;case"source":ve("error",n);break;case"img":case"image":case"link":ve("error",n),ve("load",n);break;case"details":ve("toggle",n);break;case"input":ve("invalid",n),Wn(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":ve("invalid",n);break;case"textarea":ve("invalid",n),sn(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||kg(n.textContent,a)?(r.popover!=null&&(ve("beforetoggle",n),ve("toggle",n)),r.onScroll!=null&&ve("scroll",n),r.onScrollEnd!=null&&ve("scrollend",n),r.onClick!=null&&(n.onclick=ji),n=!0):n=!1,n||Ra(t,!0)}function Cp(t){for(Sn=t.return;Sn;)switch(Sn.tag){case 5:case 31:case 13:oi=!1;return;case 27:case 3:oi=!0;return;default:Sn=Sn.return}}function Ys(t){if(t!==Sn)return!1;if(!Me)return Cp(t),Me=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Hf(t.type,t.memoizedProps)),a=!a),a&&We&&Ra(t),Cp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));We=$g(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));We=$g(t)}else n===27?(n=We,Ga(t.type)?(t=Wf,Wf=null,We=t):We=n):We=Sn?ci(t.stateNode.nextSibling):null;return!0}function cs(){We=Sn=null,Me=!1}function Mu(){var t=Aa;return t!==null&&(Hn===null?Hn=t:Hn.push.apply(Hn,t),Aa=null),t}function Qr(t){Aa===null?Aa=[t]:Aa.push(t)}var Eu=O(null),us=null,Ji=null;function Ca(t,n,a){_t(Eu,n._currentValue),n._currentValue=a}function $i(t){t._currentValue=Eu.current,Y(Eu)}function bu(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function Tu(t,n,a,r){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var _=c.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=c;for(var I=0;I<n.length;I++)if(A.context===n[I]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),bu(f.return,a,t),r||(_=null);break t}f=A.next}}else if(c.tag===18){if(_=c.return,_===null)throw Error(s(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),bu(_,a,t),_=null}else _=c.child;if(_!==null)_.return=c;else for(_=c;_!==null;){if(_===t){_=null;break}if(c=_.sibling,c!==null){c.return=_.return,_=c;break}_=_.return}c=_}}function js(t,n,a,r){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var _=c.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var A=c.type;Yn(c.pendingProps.value,_.value)||(t!==null?t.push(A):t=[A])}}else if(c===vt.current){if(_=c.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(To):t=[To])}c=c.return}t!==null&&Tu(n,t,a,r),n.flags|=262144}function hl(t){for(t=t.firstContext;t!==null;){if(!Yn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function fs(t){us=t,Ji=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function yn(t){return wp(us,t)}function dl(t,n){return us===null&&fs(t),wp(t,n)}function wp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ji===null){if(t===null)throw Error(s(308));Ji=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ji=Ji.next=n;return a}var nx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},ix=o.unstable_scheduleCallback,ax=o.unstable_NormalPriority,on={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Au(){return{controller:new nx,data:new Map,refCount:0}}function Jr(t){t.refCount--,t.refCount===0&&ix(ax,function(){t.controller.abort()})}var $r=null,Ru=0,Zs=0,Ks=null;function sx(t,n){if($r===null){var a=$r=[];Ru=0,Zs=Uf(),Ks={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Ru++,n.then(Dp,Dp),n}function Dp(){if(--Ru===0&&$r!==null){Ks!==null&&(Ks.status="fulfilled");var t=$r;$r=null,Zs=0,Ks=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function rx(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var Up=L.S;L.S=function(t,n){pg=m(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&sx(t,n),Up!==null&&Up(t,n)};var hs=O(null);function Cu(){var t=hs.current;return t!==null?t:Xe.pooledCache}function pl(t,n){n===null?_t(hs,hs.current):_t(hs,n.pool)}function Lp(){var t=Cu();return t===null?null:{parent:on._currentValue,pool:t}}var Qs=Error(s(460)),wu=Error(s(474)),ml=Error(s(542)),gl={then:function(){}};function Np(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Op(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ji,ji),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,zp(t),t;default:if(typeof n.status=="string")n.then(ji,ji);else{if(t=Xe,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,zp(t),t}throw ps=n,Qs}}function ds(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ps=a,Qs):a}}var ps=null;function Pp(){if(ps===null)throw Error(s(459));var t=ps;return ps=null,t}function zp(t){if(t===Qs||t===ml)throw Error(s(483))}var Js=null,to=0;function _l(t){var n=to;return to+=1,Js===null&&(Js=[]),Op(Js,t,n)}function eo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function vl(t,n){throw n.$$typeof===v?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Fp(t){function n(j,k){if(t){var $=j.deletions;$===null?(j.deletions=[k],j.flags|=16):$.push(k)}}function a(j,k){if(!t)return null;for(;k!==null;)n(j,k),k=k.sibling;return null}function r(j){for(var k=new Map;j!==null;)j.key!==null?k.set(j.key,j):k.set(j.index,j),j=j.sibling;return k}function c(j,k){return j=Ki(j,k),j.index=0,j.sibling=null,j}function f(j,k,$){return j.index=$,t?($=j.alternate,$!==null?($=$.index,$<k?(j.flags|=67108866,k):$):(j.flags|=67108866,k)):(j.flags|=1048576,k)}function _(j){return t&&j.alternate===null&&(j.flags|=67108866),j}function A(j,k,$,gt){return k===null||k.tag!==6?(k=_u($,j.mode,gt),k.return=j,k):(k=c(k,$),k.return=j,k)}function I(j,k,$,gt){var Qt=$.type;return Qt===C?pt(j,k,$.props.children,gt,$.key):k!==null&&(k.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===T&&ds(Qt)===k.type)?(k=c(k,$.props),eo(k,$),k.return=j,k):(k=ul($.type,$.key,$.props,null,j.mode,gt),eo(k,$),k.return=j,k)}function tt(j,k,$,gt){return k===null||k.tag!==4||k.stateNode.containerInfo!==$.containerInfo||k.stateNode.implementation!==$.implementation?(k=vu($,j.mode,gt),k.return=j,k):(k=c(k,$.children||[]),k.return=j,k)}function pt(j,k,$,gt,Qt){return k===null||k.tag!==7?(k=ls($,j.mode,gt,Qt),k.return=j,k):(k=c(k,$),k.return=j,k)}function xt(j,k,$){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=_u(""+k,j.mode,$),k.return=j,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case E:return $=ul(k.type,k.key,k.props,null,j.mode,$),eo($,k),$.return=j,$;case b:return k=vu(k,j.mode,$),k.return=j,k;case T:return k=ds(k),xt(j,k,$)}if(J(k)||Q(k))return k=ls(k,j.mode,$,null),k.return=j,k;if(typeof k.then=="function")return xt(j,_l(k),$);if(k.$$typeof===P)return xt(j,dl(j,k),$);vl(j,k)}return null}function it(j,k,$,gt){var Qt=k!==null?k.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Qt!==null?null:A(j,k,""+$,gt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case E:return $.key===Qt?I(j,k,$,gt):null;case b:return $.key===Qt?tt(j,k,$,gt):null;case T:return $=ds($),it(j,k,$,gt)}if(J($)||Q($))return Qt!==null?null:pt(j,k,$,gt,null);if(typeof $.then=="function")return it(j,k,_l($),gt);if($.$$typeof===P)return it(j,k,dl(j,$),gt);vl(j,$)}return null}function ut(j,k,$,gt,Qt){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return j=j.get($)||null,A(k,j,""+gt,Qt);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case E:return j=j.get(gt.key===null?$:gt.key)||null,I(k,j,gt,Qt);case b:return j=j.get(gt.key===null?$:gt.key)||null,tt(k,j,gt,Qt);case T:return gt=ds(gt),ut(j,k,$,gt,Qt)}if(J(gt)||Q(gt))return j=j.get($)||null,pt(k,j,gt,Qt,null);if(typeof gt.then=="function")return ut(j,k,$,_l(gt),Qt);if(gt.$$typeof===P)return ut(j,k,$,dl(k,gt),Qt);vl(k,gt)}return null}function Vt(j,k,$,gt){for(var Qt=null,we=null,Yt=k,he=k=0,Se=null;Yt!==null&&he<$.length;he++){Yt.index>he?(Se=Yt,Yt=null):Se=Yt.sibling;var De=it(j,Yt,$[he],gt);if(De===null){Yt===null&&(Yt=Se);break}t&&Yt&&De.alternate===null&&n(j,Yt),k=f(De,k,he),we===null?Qt=De:we.sibling=De,we=De,Yt=Se}if(he===$.length)return a(j,Yt),Me&&Qi(j,he),Qt;if(Yt===null){for(;he<$.length;he++)Yt=xt(j,$[he],gt),Yt!==null&&(k=f(Yt,k,he),we===null?Qt=Yt:we.sibling=Yt,we=Yt);return Me&&Qi(j,he),Qt}for(Yt=r(Yt);he<$.length;he++)Se=ut(Yt,j,he,$[he],gt),Se!==null&&(t&&Se.alternate!==null&&Yt.delete(Se.key===null?he:Se.key),k=f(Se,k,he),we===null?Qt=Se:we.sibling=Se,we=Se);return t&&Yt.forEach(function(qa){return n(j,qa)}),Me&&Qi(j,he),Qt}function te(j,k,$,gt){if($==null)throw Error(s(151));for(var Qt=null,we=null,Yt=k,he=k=0,Se=null,De=$.next();Yt!==null&&!De.done;he++,De=$.next()){Yt.index>he?(Se=Yt,Yt=null):Se=Yt.sibling;var qa=it(j,Yt,De.value,gt);if(qa===null){Yt===null&&(Yt=Se);break}t&&Yt&&qa.alternate===null&&n(j,Yt),k=f(qa,k,he),we===null?Qt=qa:we.sibling=qa,we=qa,Yt=Se}if(De.done)return a(j,Yt),Me&&Qi(j,he),Qt;if(Yt===null){for(;!De.done;he++,De=$.next())De=xt(j,De.value,gt),De!==null&&(k=f(De,k,he),we===null?Qt=De:we.sibling=De,we=De);return Me&&Qi(j,he),Qt}for(Yt=r(Yt);!De.done;he++,De=$.next())De=ut(Yt,j,he,De.value,gt),De!==null&&(t&&De.alternate!==null&&Yt.delete(De.key===null?he:De.key),k=f(De,k,he),we===null?Qt=De:we.sibling=De,we=De);return t&&Yt.forEach(function(_S){return n(j,_S)}),Me&&Qi(j,he),Qt}function Ge(j,k,$,gt){if(typeof $=="object"&&$!==null&&$.type===C&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case E:t:{for(var Qt=$.key;k!==null;){if(k.key===Qt){if(Qt=$.type,Qt===C){if(k.tag===7){a(j,k.sibling),gt=c(k,$.props.children),gt.return=j,j=gt;break t}}else if(k.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===T&&ds(Qt)===k.type){a(j,k.sibling),gt=c(k,$.props),eo(gt,$),gt.return=j,j=gt;break t}a(j,k);break}else n(j,k);k=k.sibling}$.type===C?(gt=ls($.props.children,j.mode,gt,$.key),gt.return=j,j=gt):(gt=ul($.type,$.key,$.props,null,j.mode,gt),eo(gt,$),gt.return=j,j=gt)}return _(j);case b:t:{for(Qt=$.key;k!==null;){if(k.key===Qt)if(k.tag===4&&k.stateNode.containerInfo===$.containerInfo&&k.stateNode.implementation===$.implementation){a(j,k.sibling),gt=c(k,$.children||[]),gt.return=j,j=gt;break t}else{a(j,k);break}else n(j,k);k=k.sibling}gt=vu($,j.mode,gt),gt.return=j,j=gt}return _(j);case T:return $=ds($),Ge(j,k,$,gt)}if(J($))return Vt(j,k,$,gt);if(Q($)){if(Qt=Q($),typeof Qt!="function")throw Error(s(150));return $=Qt.call($),te(j,k,$,gt)}if(typeof $.then=="function")return Ge(j,k,_l($),gt);if($.$$typeof===P)return Ge(j,k,dl(j,$),gt);vl(j,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,k!==null&&k.tag===6?(a(j,k.sibling),gt=c(k,$),gt.return=j,j=gt):(a(j,k),gt=_u($,j.mode,gt),gt.return=j,j=gt),_(j)):a(j,k)}return function(j,k,$,gt){try{to=0;var Qt=Ge(j,k,$,gt);return Js=null,Qt}catch(Yt){if(Yt===Qs||Yt===ml)throw Yt;var we=jn(29,Yt,null,j.mode);return we.lanes=gt,we.return=j,we}}}var ms=Fp(!0),Bp=Fp(!1),wa=!1;function Du(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Uu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Da(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ua(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Le&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=cl(t),yp(t,null,a),n}return ll(t,r,n,a),cl(t)}function no(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Ns(t,a)}}function Lu(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Nu=!1;function io(){if(Nu){var t=Ks;if(t!==null)throw t}}function ao(t,n,a,r){Nu=!1;var c=t.updateQueue;wa=!1;var f=c.firstBaseUpdate,_=c.lastBaseUpdate,A=c.shared.pending;if(A!==null){c.shared.pending=null;var I=A,tt=I.next;I.next=null,_===null?f=tt:_.next=tt,_=I;var pt=t.alternate;pt!==null&&(pt=pt.updateQueue,A=pt.lastBaseUpdate,A!==_&&(A===null?pt.firstBaseUpdate=tt:A.next=tt,pt.lastBaseUpdate=I))}if(f!==null){var xt=c.baseState;_=0,pt=tt=I=null,A=f;do{var it=A.lane&-536870913,ut=it!==A.lane;if(ut?(xe&it)===it:(r&it)===it){it!==0&&it===Zs&&(Nu=!0),pt!==null&&(pt=pt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Vt=t,te=A;it=n;var Ge=a;switch(te.tag){case 1:if(Vt=te.payload,typeof Vt=="function"){xt=Vt.call(Ge,xt,it);break t}xt=Vt;break t;case 3:Vt.flags=Vt.flags&-65537|128;case 0:if(Vt=te.payload,it=typeof Vt=="function"?Vt.call(Ge,xt,it):Vt,it==null)break t;xt=y({},xt,it);break t;case 2:wa=!0}}it=A.callback,it!==null&&(t.flags|=64,ut&&(t.flags|=8192),ut=c.callbacks,ut===null?c.callbacks=[it]:ut.push(it))}else ut={lane:it,tag:A.tag,payload:A.payload,callback:A.callback,next:null},pt===null?(tt=pt=ut,I=xt):pt=pt.next=ut,_|=it;if(A=A.next,A===null){if(A=c.shared.pending,A===null)break;ut=A,A=ut.next,ut.next=null,c.lastBaseUpdate=ut,c.shared.pending=null}}while(!0);pt===null&&(I=xt),c.baseState=I,c.firstBaseUpdate=tt,c.lastBaseUpdate=pt,f===null&&(c.shared.lanes=0),za|=_,t.lanes=_,t.memoizedState=xt}}function Ip(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Hp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Ip(a[t],n)}var $s=O(null),xl=O(0);function Gp(t,n){t=la,_t(xl,t),_t($s,n),la=t|n.baseLanes}function Ou(){_t(xl,la),_t($s,$s.current)}function Pu(){la=xl.current,Y($s),Y(xl)}var Zn=O(null),li=null;function La(t){var n=t.alternate;_t(tn,tn.current&1),_t(Zn,t),li===null&&(n===null||$s.current!==null||n.memoizedState!==null)&&(li=t)}function zu(t){_t(tn,tn.current),_t(Zn,t),li===null&&(li=t)}function Vp(t){t.tag===22?(_t(tn,tn.current),_t(Zn,t),li===null&&(li=t)):Na()}function Na(){_t(tn,tn.current),_t(Zn,Zn.current)}function Kn(t){Y(Zn),li===t&&(li=null),Y(tn)}var tn=O(0);function Sl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Xf(a)||kf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ta=0,ce=null,Ie=null,ln=null,yl=!1,tr=!1,gs=!1,Ml=0,so=0,er=null,ox=0;function Qe(){throw Error(s(321))}function Fu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Yn(t[a],n[a]))return!1;return!0}function Bu(t,n,a,r,c,f){return ta=f,ce=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,L.H=t===null||t.memoizedState===null?Tm:$u,gs=!1,f=a(r,c),gs=!1,tr&&(f=kp(n,a,r,c)),Xp(t),f}function Xp(t){L.H=lo;var n=Ie!==null&&Ie.next!==null;if(ta=0,ln=Ie=ce=null,yl=!1,so=0,er=null,n)throw Error(s(300));t===null||cn||(t=t.dependencies,t!==null&&hl(t)&&(cn=!0))}function kp(t,n,a,r){ce=t;var c=0;do{if(tr&&(er=null),so=0,tr=!1,25<=c)throw Error(s(301));if(c+=1,ln=Ie=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}L.H=Am,f=n(a,r)}while(tr);return f}function lx(){var t=L.H,n=t.useState()[0];return n=typeof n.then=="function"?ro(n):n,t=t.useState()[0],(Ie!==null?Ie.memoizedState:null)!==t&&(ce.flags|=1024),n}function Iu(){var t=Ml!==0;return Ml=0,t}function Hu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Gu(t){if(yl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}yl=!1}ta=0,ln=Ie=ce=null,tr=!1,so=Ml=0,er=null}function Nn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?ce.memoizedState=ln=t:ln=ln.next=t,ln}function en(){if(Ie===null){var t=ce.alternate;t=t!==null?t.memoizedState:null}else t=Ie.next;var n=ln===null?ce.memoizedState:ln.next;if(n!==null)ln=n,Ie=t;else{if(t===null)throw ce.alternate===null?Error(s(467)):Error(s(310));Ie=t,t={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},ln===null?ce.memoizedState=ln=t:ln=ln.next=t}return ln}function El(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ro(t){var n=so;return so+=1,er===null&&(er=[]),t=Op(er,t,n),n=ce,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,L.H=n===null||n.memoizedState===null?Tm:$u),t}function bl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ro(t);if(t.$$typeof===P)return yn(t)}throw Error(s(438,String(t)))}function Vu(t){var n=null,a=ce.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=ce.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=El(),ce.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=ht;return n.index++,a}function ea(t,n){return typeof n=="function"?n(t):n}function Tl(t){var n=en();return Xu(n,Ie,t)}function Xu(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=t.baseQueue,f=r.pending;if(f!==null){if(c!==null){var _=c.next;c.next=f.next,f.next=_}n.baseQueue=c=f,r.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var A=_=null,I=null,tt=n,pt=!1;do{var xt=tt.lane&-536870913;if(xt!==tt.lane?(xe&xt)===xt:(ta&xt)===xt){var it=tt.revertLane;if(it===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),xt===Zs&&(pt=!0);else if((ta&it)===it){tt=tt.next,it===Zs&&(pt=!0);continue}else xt={lane:0,revertLane:tt.revertLane,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},I===null?(A=I=xt,_=f):I=I.next=xt,ce.lanes|=it,za|=it;xt=tt.action,gs&&a(f,xt),f=tt.hasEagerState?tt.eagerState:a(f,xt)}else it={lane:xt,revertLane:tt.revertLane,gesture:tt.gesture,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},I===null?(A=I=it,_=f):I=I.next=it,ce.lanes|=xt,za|=xt;tt=tt.next}while(tt!==null&&tt!==n);if(I===null?_=f:I.next=A,!Yn(f,t.memoizedState)&&(cn=!0,pt&&(a=Ks,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=I,r.lastRenderedState=f}return c===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function ku(t){var n=en(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var _=c=c.next;do f=t(f,_.action),_=_.next;while(_!==c);Yn(f,n.memoizedState)||(cn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Wp(t,n,a){var r=ce,c=en(),f=Me;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!Yn((Ie||c).memoizedState,a);if(_&&(c.memoizedState=a,cn=!0),c=c.queue,Yu(jp.bind(null,r,c,t),[t]),c.getSnapshot!==n||_||ln!==null&&ln.memoizedState.tag&1){if(r.flags|=2048,nr(9,{destroy:void 0},Yp.bind(null,r,c,a,n),null),Xe===null)throw Error(s(349));f||(ta&127)!==0||qp(r,n,a)}return a}function qp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ce.updateQueue,n===null?(n=El(),ce.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Yp(t,n,a,r){n.value=a,n.getSnapshot=r,Zp(n)&&Kp(t)}function jp(t,n,a){return a(function(){Zp(n)&&Kp(t)})}function Zp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Yn(t,a)}catch{return!0}}function Kp(t){var n=os(t,2);n!==null&&Gn(n,t,2)}function Wu(t){var n=Nn();if(typeof t=="function"){var a=t;if(t=a(),gs){Pt(!0);try{a()}finally{Pt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:t},n}function Qp(t,n,a,r){return t.baseState=a,Xu(t,Ie,typeof r=="function"?r:ea)}function cx(t,n,a,r,c){if(Cl(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};L.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,Jp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Jp(t,n){var a=n.action,r=n.payload,c=t.state;if(n.isTransition){var f=L.T,_={};L.T=_;try{var A=a(c,r),I=L.S;I!==null&&I(_,A),$p(t,n,A)}catch(tt){qu(t,n,tt)}finally{f!==null&&_.types!==null&&(f.types=_.types),L.T=f}}else try{f=a(c,r),$p(t,n,f)}catch(tt){qu(t,n,tt)}}function $p(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){tm(t,n,r)},function(r){return qu(t,n,r)}):tm(t,n,a)}function tm(t,n,a){n.status="fulfilled",n.value=a,em(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Jp(t,a)))}function qu(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,em(n),n=n.next;while(n!==r)}t.action=null}function em(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function nm(t,n){return n}function im(t,n){if(Me){var a=Xe.formState;if(a!==null){t:{var r=ce;if(Me){if(We){e:{for(var c=We,f=oi;c.nodeType!==8;){if(!f){c=null;break e}if(c=ci(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){We=ci(c.nextSibling),r=c.data==="F!";break t}}Ra(r)}r=!1}r&&(n=a[0])}}return a=Nn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:nm,lastRenderedState:n},a.queue=r,a=Mm.bind(null,ce,r),r.dispatch=a,r=Wu(!1),f=Ju.bind(null,ce,!1,r.queue),r=Nn(),c={state:n,dispatch:null,action:t,pending:null},r.queue=c,a=cx.bind(null,ce,c,f,a),c.dispatch=a,r.memoizedState=t,[n,a,!1]}function am(t){var n=en();return sm(n,Ie,t)}function sm(t,n,a){if(n=Xu(t,n,nm)[0],t=Tl(ea)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=ro(n)}catch(_){throw _===Qs?ml:_}else r=n;n=en();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ce.flags|=2048,nr(9,{destroy:void 0},ux.bind(null,c,a),null)),[r,f,t]}function ux(t,n){t.action=n}function rm(t){var n=en(),a=Ie;if(a!==null)return sm(n,a,t);en(),n=n.memoizedState,a=en();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function nr(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=ce.updateQueue,n===null&&(n=El(),ce.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function om(){return en().memoizedState}function Al(t,n,a,r){var c=Nn();ce.flags|=t,c.memoizedState=nr(1|n,{destroy:void 0},a,r===void 0?null:r)}function Rl(t,n,a,r){var c=en();r=r===void 0?null:r;var f=c.memoizedState.inst;Ie!==null&&r!==null&&Fu(r,Ie.memoizedState.deps)?c.memoizedState=nr(n,f,a,r):(ce.flags|=t,c.memoizedState=nr(1|n,f,a,r))}function lm(t,n){Al(8390656,8,t,n)}function Yu(t,n){Rl(2048,8,t,n)}function fx(t){ce.flags|=4;var n=ce.updateQueue;if(n===null)n=El(),ce.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function cm(t){var n=en().memoizedState;return fx({ref:n,nextImpl:t}),function(){if((Le&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function um(t,n){return Rl(4,2,t,n)}function fm(t,n){return Rl(4,4,t,n)}function hm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function dm(t,n,a){a=a!=null?a.concat([t]):null,Rl(4,4,hm.bind(null,n,t),a)}function ju(){}function pm(t,n){var a=en();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Fu(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function mm(t,n){var a=en();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Fu(n,r[1]))return r[0];if(r=t(),gs){Pt(!0);try{t()}finally{Pt(!1)}}return a.memoizedState=[r,n],r}function Zu(t,n,a){return a===void 0||(ta&1073741824)!==0&&(xe&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=gg(),ce.lanes|=t,za|=t,a)}function gm(t,n,a,r){return Yn(a,n)?a:$s.current!==null?(t=Zu(t,a,r),Yn(t,n)||(cn=!0),t):(ta&42)===0||(ta&1073741824)!==0&&(xe&261930)===0?(cn=!0,t.memoizedState=a):(t=gg(),ce.lanes|=t,za|=t,n)}function _m(t,n,a,r,c){var f=F.p;F.p=f!==0&&8>f?f:8;var _=L.T,A={};L.T=A,Ju(t,!1,n,a);try{var I=c(),tt=L.S;if(tt!==null&&tt(A,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var pt=rx(I,r);oo(t,n,pt,$n(t))}else oo(t,n,r,$n(t))}catch(xt){oo(t,n,{then:function(){},status:"rejected",reason:xt},$n())}finally{F.p=f,_!==null&&A.types!==null&&(_.types=A.types),L.T=_}}function hx(){}function Ku(t,n,a,r){if(t.tag!==5)throw Error(s(476));var c=vm(t).queue;_m(t,c,n,lt,a===null?hx:function(){return xm(t),a(r)})}function vm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:lt,baseState:lt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:lt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function xm(t){var n=vm(t);n.next===null&&(n=t.alternate.memoizedState),oo(t,n.next.queue,{},$n())}function Qu(){return yn(To)}function Sm(){return en().memoizedState}function ym(){return en().memoizedState}function dx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=$n();t=Da(a);var r=Ua(n,t,a);r!==null&&(Gn(r,n,a),no(r,n,a)),n={cache:Au()},t.payload=n;return}n=n.return}}function px(t,n,a){var r=$n();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Cl(t)?Em(n,a):(a=mu(t,n,a,r),a!==null&&(Gn(a,t,r),bm(a,n,r)))}function Mm(t,n,a){var r=$n();oo(t,n,a,r)}function oo(t,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Cl(t))Em(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,A=f(_,a);if(c.hasEagerState=!0,c.eagerState=A,Yn(A,_))return ll(t,n,c,0),Xe===null&&ol(),!1}catch{}if(a=mu(t,n,c,r),a!==null)return Gn(a,t,r),bm(a,n,r),!0}return!1}function Ju(t,n,a,r){if(r={lane:2,revertLane:Uf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Cl(t)){if(n)throw Error(s(479))}else n=mu(t,a,r,2),n!==null&&Gn(n,t,2)}function Cl(t){var n=t.alternate;return t===ce||n!==null&&n===ce}function Em(t,n){tr=yl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function bm(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Ns(t,a)}}var lo={readContext:yn,use:bl,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe};lo.useEffectEvent=Qe;var Tm={readContext:yn,use:bl,useCallback:function(t,n){return Nn().memoizedState=[t,n===void 0?null:n],t},useContext:yn,useEffect:lm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Al(4194308,4,hm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Al(4194308,4,t,n)},useInsertionEffect:function(t,n){Al(4,2,t,n)},useMemo:function(t,n){var a=Nn();n=n===void 0?null:n;var r=t();if(gs){Pt(!0);try{t()}finally{Pt(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Nn();if(a!==void 0){var c=a(n);if(gs){Pt(!0);try{a(n)}finally{Pt(!1)}}}else c=n;return r.memoizedState=r.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},r.queue=t,t=t.dispatch=px.bind(null,ce,t),[r.memoizedState,t]},useRef:function(t){var n=Nn();return t={current:t},n.memoizedState=t},useState:function(t){t=Wu(t);var n=t.queue,a=Mm.bind(null,ce,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:ju,useDeferredValue:function(t,n){var a=Nn();return Zu(a,t,n)},useTransition:function(){var t=Wu(!1);return t=_m.bind(null,ce,t.queue,!0,!1),Nn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=ce,c=Nn();if(Me){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Xe===null)throw Error(s(349));(xe&127)!==0||qp(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,lm(jp.bind(null,r,f,t),[t]),r.flags|=2048,nr(9,{destroy:void 0},Yp.bind(null,r,f,a,n),null),a},useId:function(){var t=Nn(),n=Xe.identifierPrefix;if(Me){var a=Pi,r=Oi;a=(r&~(1<<32-Nt(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Ml++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=ox++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Qu,useFormState:im,useActionState:im,useOptimistic:function(t){var n=Nn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Ju.bind(null,ce,!0,a),a.dispatch=n,[t,n]},useMemoCache:Vu,useCacheRefresh:function(){return Nn().memoizedState=dx.bind(null,ce)},useEffectEvent:function(t){var n=Nn(),a={impl:t};return n.memoizedState=a,function(){if((Le&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},$u={readContext:yn,use:bl,useCallback:pm,useContext:yn,useEffect:Yu,useImperativeHandle:dm,useInsertionEffect:um,useLayoutEffect:fm,useMemo:mm,useReducer:Tl,useRef:om,useState:function(){return Tl(ea)},useDebugValue:ju,useDeferredValue:function(t,n){var a=en();return gm(a,Ie.memoizedState,t,n)},useTransition:function(){var t=Tl(ea)[0],n=en().memoizedState;return[typeof t=="boolean"?t:ro(t),n]},useSyncExternalStore:Wp,useId:Sm,useHostTransitionStatus:Qu,useFormState:am,useActionState:am,useOptimistic:function(t,n){var a=en();return Qp(a,Ie,t,n)},useMemoCache:Vu,useCacheRefresh:ym};$u.useEffectEvent=cm;var Am={readContext:yn,use:bl,useCallback:pm,useContext:yn,useEffect:Yu,useImperativeHandle:dm,useInsertionEffect:um,useLayoutEffect:fm,useMemo:mm,useReducer:ku,useRef:om,useState:function(){return ku(ea)},useDebugValue:ju,useDeferredValue:function(t,n){var a=en();return Ie===null?Zu(a,t,n):gm(a,Ie.memoizedState,t,n)},useTransition:function(){var t=ku(ea)[0],n=en().memoizedState;return[typeof t=="boolean"?t:ro(t),n]},useSyncExternalStore:Wp,useId:Sm,useHostTransitionStatus:Qu,useFormState:rm,useActionState:rm,useOptimistic:function(t,n){var a=en();return Ie!==null?Qp(a,Ie,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Vu,useCacheRefresh:ym};Am.useEffectEvent=cm;function tf(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:y({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var ef={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=$n(),c=Da(r);c.payload=n,a!=null&&(c.callback=a),n=Ua(t,c,r),n!==null&&(Gn(n,t,r),no(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=$n(),c=Da(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Ua(t,c,r),n!==null&&(Gn(n,t,r),no(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=$n(),r=Da(a);r.tag=2,n!=null&&(r.callback=n),n=Ua(t,r,a),n!==null&&(Gn(n,t,a),no(n,t,a))}};function Rm(t,n,a,r,c,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,_):n.prototype&&n.prototype.isPureReactComponent?!jr(a,r)||!jr(c,f):!0}function Cm(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&ef.enqueueReplaceState(n,n.state,null)}function _s(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=y({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function wm(t){rl(t)}function Dm(t){console.error(t)}function Um(t){rl(t)}function wl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Lm(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function nf(t,n,a){return a=Da(a),a.tag=3,a.payload={element:null},a.callback=function(){wl(t,n)},a}function Nm(t){return t=Da(t),t.tag=3,t}function Om(t,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;t.payload=function(){return c(f)},t.callback=function(){Lm(n,a,r)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){Lm(n,a,r),typeof c!="function"&&(Fa===null?Fa=new Set([this]):Fa.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})})}function mx(t,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&js(n,a,c,!0),a=Zn.current,a!==null){switch(a.tag){case 31:case 13:return li===null?Gl():a.alternate===null&&Je===0&&(Je=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===gl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Cf(t,r,c)),!1;case 22:return a.flags|=65536,r===gl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Cf(t,r,c)),!1}throw Error(s(435,a.tag))}return Cf(t,r,c),Gl(),!1}if(Me)return n=Zn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==yu&&(t=Error(s(422),{cause:r}),Qr(ai(t,a)))):(r!==yu&&(n=Error(s(423),{cause:r}),Qr(ai(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,r=ai(r,a),c=nf(t.stateNode,r,c),Lu(t,c),Je!==4&&(Je=2)),!1;var f=Error(s(520),{cause:r});if(f=ai(f,a),_o===null?_o=[f]:_o.push(f),Je!==4&&(Je=2),n===null)return!0;r=ai(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=nf(a.stateNode,r,t),Lu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Fa===null||!Fa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Nm(c),Om(c,t,a,r),Lu(a,c),!1}a=a.return}while(a!==null);return!1}var af=Error(s(461)),cn=!1;function Mn(t,n,a,r){n.child=t===null?Bp(n,null,a,r):ms(n,t.child,a,r)}function Pm(t,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var _={};for(var A in r)A!=="ref"&&(_[A]=r[A])}else _=r;return fs(n),r=Bu(t,n,a,_,f,c),A=Iu(),t!==null&&!cn?(Hu(t,n,c),na(t,n,c)):(Me&&A&&xu(n),n.flags|=1,Mn(t,n,r,c),n.child)}function zm(t,n,a,r,c){if(t===null){var f=a.type;return typeof f=="function"&&!gu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Fm(t,n,f,r,c)):(t=ul(a.type,null,r,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!hf(t,c)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:jr,a(_,r)&&t.ref===n.ref)return na(t,n,c)}return n.flags|=1,t=Ki(f,r),t.ref=n.ref,t.return=n,n.child=t}function Fm(t,n,a,r,c){if(t!==null){var f=t.memoizedProps;if(jr(f,r)&&t.ref===n.ref)if(cn=!1,n.pendingProps=r=f,hf(t,c))(t.flags&131072)!==0&&(cn=!0);else return n.lanes=t.lanes,na(t,n,c)}return sf(t,n,a,r,c)}function Bm(t,n,a,r){var c=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~f}else r=0,n.child=null;return Im(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&pl(n,f!==null?f.cachePool:null),f!==null?Gp(n,f):Ou(),Vp(n);else return r=n.lanes=536870912,Im(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(pl(n,f.cachePool),Gp(n,f),Na(),n.memoizedState=null):(t!==null&&pl(n,null),Ou(),Na());return Mn(t,n,c,a),n.child}function co(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Im(t,n,a,r,c){var f=Cu();return f=f===null?null:{parent:on._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&pl(n,null),Ou(),Vp(n),t!==null&&js(t,n,r,!0),n.childLanes=c,null}function Dl(t,n){return n=Ll({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Hm(t,n,a){return ms(n,t.child,null,a),t=Dl(n,n.pendingProps),t.flags|=2,Kn(n),n.memoizedState=null,t}function gx(t,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Me){if(r.mode==="hidden")return t=Dl(n,r),n.lanes=536870912,co(null,t);if(zu(n),(t=We)?(t=Jg(t,oi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ta!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=Ep(t),a.return=n,n.child=a,Sn=n,We=null)):t=null,t===null)throw Ra(n);return n.lanes=536870912,null}return Dl(n,r)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(zu(n),c)if(n.flags&256)n.flags&=-257,n=Hm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(cn||js(t,n,a,!1),c=(a&t.childLanes)!==0,cn||c){if(r=Xe,r!==null&&(_=Zo(r,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,os(t,_),Gn(r,t,_),af;Gl(),n=Hm(t,n,a)}else t=f.treeContext,We=ci(_.nextSibling),Sn=n,Me=!0,Aa=null,oi=!1,t!==null&&Ap(n,t),n=Dl(n,r),n.flags|=4096;return n}return t=Ki(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Ul(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function sf(t,n,a,r,c){return fs(n),a=Bu(t,n,a,r,void 0,c),r=Iu(),t!==null&&!cn?(Hu(t,n,c),na(t,n,c)):(Me&&r&&xu(n),n.flags|=1,Mn(t,n,a,c),n.child)}function Gm(t,n,a,r,c,f){return fs(n),n.updateQueue=null,a=kp(n,r,a,c),Xp(t),r=Iu(),t!==null&&!cn?(Hu(t,n,f),na(t,n,f)):(Me&&r&&xu(n),n.flags|=1,Mn(t,n,a,f),n.child)}function Vm(t,n,a,r,c){if(fs(n),n.stateNode===null){var f=ks,_=a.contextType;typeof _=="object"&&_!==null&&(f=yn(_)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=ef,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Du(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?yn(_):ks,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(tf(n,a,_,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&ef.enqueueReplaceState(f,f.state,null),ao(n,r,f,c),io(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var A=n.memoizedProps,I=_s(a,A);f.props=I;var tt=f.context,pt=a.contextType;_=ks,typeof pt=="object"&&pt!==null&&(_=yn(pt));var xt=a.getDerivedStateFromProps;pt=typeof xt=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,pt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||tt!==_)&&Cm(n,f,r,_),wa=!1;var it=n.memoizedState;f.state=it,ao(n,r,f,c),io(),tt=n.memoizedState,A||it!==tt||wa?(typeof xt=="function"&&(tf(n,a,xt,r),tt=n.memoizedState),(I=wa||Rm(n,a,I,r,it,tt,_))?(pt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=tt),f.props=r,f.state=tt,f.context=_,r=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Uu(t,n),_=n.memoizedProps,pt=_s(a,_),f.props=pt,xt=n.pendingProps,it=f.context,tt=a.contextType,I=ks,typeof tt=="object"&&tt!==null&&(I=yn(tt)),A=a.getDerivedStateFromProps,(tt=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==xt||it!==I)&&Cm(n,f,r,I),wa=!1,it=n.memoizedState,f.state=it,ao(n,r,f,c),io();var ut=n.memoizedState;_!==xt||it!==ut||wa||t!==null&&t.dependencies!==null&&hl(t.dependencies)?(typeof A=="function"&&(tf(n,a,A,r),ut=n.memoizedState),(pt=wa||Rm(n,a,pt,r,it,ut,I)||t!==null&&t.dependencies!==null&&hl(t.dependencies))?(tt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,ut,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,ut,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&it===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&it===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ut),f.props=r,f.state=ut,f.context=I,r=pt):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&it===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&it===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,Ul(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=ms(n,t.child,null,c),n.child=ms(n,null,a,c)):Mn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=na(t,n,c),t}function Xm(t,n,a,r){return cs(),n.flags|=256,Mn(t,n,a,r),n.child}var rf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function of(t){return{baseLanes:t,cachePool:Lp()}}function lf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Jn),t}function km(t,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(tn.current&2)!==0),_&&(c=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(Me){if(c?La(n):Na(),(t=We)?(t=Jg(t,oi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ta!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=Ep(t),a.return=n,n.child=a,Sn=n,We=null)):t=null,t===null)throw Ra(n);return kf(t)?n.lanes=32:n.lanes=536870912,null}var A=r.children;return r=r.fallback,c?(Na(),c=n.mode,A=Ll({mode:"hidden",children:A},c),r=ls(r,c,a,null),A.return=n,r.return=n,A.sibling=r,n.child=A,r=n.child,r.memoizedState=of(a),r.childLanes=lf(t,_,a),n.memoizedState=rf,co(null,r)):(La(n),cf(n,A))}var I=t.memoizedState;if(I!==null&&(A=I.dehydrated,A!==null)){if(f)n.flags&256?(La(n),n.flags&=-257,n=uf(t,n,a)):n.memoizedState!==null?(Na(),n.child=t.child,n.flags|=128,n=null):(Na(),A=r.fallback,c=n.mode,r=Ll({mode:"visible",children:r.children},c),A=ls(A,c,a,null),A.flags|=2,r.return=n,A.return=n,r.sibling=A,n.child=r,ms(n,t.child,null,a),r=n.child,r.memoizedState=of(a),r.childLanes=lf(t,_,a),n.memoizedState=rf,n=co(null,r));else if(La(n),kf(A)){if(_=A.nextSibling&&A.nextSibling.dataset,_)var tt=_.dgst;_=tt,r=Error(s(419)),r.stack="",r.digest=_,Qr({value:r,source:null,stack:null}),n=uf(t,n,a)}else if(cn||js(t,n,a,!1),_=(a&t.childLanes)!==0,cn||_){if(_=Xe,_!==null&&(r=Zo(_,a),r!==0&&r!==I.retryLane))throw I.retryLane=r,os(t,r),Gn(_,t,r),af;Xf(A)||Gl(),n=uf(t,n,a)}else Xf(A)?(n.flags|=192,n.child=t.child,n=null):(t=I.treeContext,We=ci(A.nextSibling),Sn=n,Me=!0,Aa=null,oi=!1,t!==null&&Ap(n,t),n=cf(n,r.children),n.flags|=4096);return n}return c?(Na(),A=r.fallback,c=n.mode,I=t.child,tt=I.sibling,r=Ki(I,{mode:"hidden",children:r.children}),r.subtreeFlags=I.subtreeFlags&65011712,tt!==null?A=Ki(tt,A):(A=ls(A,c,a,null),A.flags|=2),A.return=n,r.return=n,r.sibling=A,n.child=r,co(null,r),r=n.child,A=t.child.memoizedState,A===null?A=of(a):(c=A.cachePool,c!==null?(I=on._currentValue,c=c.parent!==I?{parent:I,pool:I}:c):c=Lp(),A={baseLanes:A.baseLanes|a,cachePool:c}),r.memoizedState=A,r.childLanes=lf(t,_,a),n.memoizedState=rf,co(t.child,r)):(La(n),a=t.child,t=a.sibling,a=Ki(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function cf(t,n){return n=Ll({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ll(t,n){return t=jn(22,t,null,n),t.lanes=0,t}function uf(t,n,a){return ms(n,t.child,null,a),t=cf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Wm(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),bu(t.return,n,a)}function ff(t,n,a,r,c,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=r,_.tail=a,_.tailMode=c,_.treeForkCount=f)}function qm(t,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;r=r.children;var _=tn.current,A=(_&2)!==0;if(A?(_=_&1|2,n.flags|=128):_&=1,_t(tn,_),Mn(t,n,r,a),r=Me?Kr:0,!A&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Wm(t,a,n);else if(t.tag===19)Wm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&Sl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),ff(n,!1,c,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&Sl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}ff(n,!0,a,null,f,r);break;case"together":ff(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function na(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),za|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(js(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Ki(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ki(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function hf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&hl(t)))}function _x(t,n,a){switch(n.tag){case 3:St(n,n.stateNode.containerInfo),Ca(n,on,t.memoizedState.cache),cs();break;case 27:case 5:Zt(n);break;case 4:St(n,n.stateNode.containerInfo);break;case 10:Ca(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,zu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(La(n),n.flags|=128,null):(a&n.child.childLanes)!==0?km(t,n,a):(La(n),t=na(t,n,a),t!==null?t.sibling:null);La(n);break;case 19:var c=(t.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(js(t,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return qm(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),_t(tn,tn.current),r)break;return null;case 22:return n.lanes=0,Bm(t,n,a,n.pendingProps);case 24:Ca(n,on,t.memoizedState.cache)}return na(t,n,a)}function Ym(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)cn=!0;else{if(!hf(t,a)&&(n.flags&128)===0)return cn=!1,_x(t,n,a);cn=(t.flags&131072)!==0}else cn=!1,Me&&(n.flags&1048576)!==0&&Tp(n,Kr,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=ds(n.elementType),n.type=t,typeof t=="function")gu(t)?(r=_s(t,r),n.tag=1,n=Vm(null,n,t,r,a)):(n.tag=0,n=sf(null,n,t,r,a));else{if(t!=null){var c=t.$$typeof;if(c===N){n.tag=11,n=Pm(null,n,t,r,a);break t}else if(c===B){n.tag=14,n=zm(null,n,t,r,a);break t}}throw n=ot(t)||t,Error(s(306,n,""))}}return n;case 0:return sf(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=_s(r,n.pendingProps),Vm(t,n,r,c,a);case 3:t:{if(St(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,Uu(t,n),ao(n,r,null,a);var _=n.memoizedState;if(r=_.cache,Ca(n,on,r),r!==f.cache&&Tu(n,[on],a,!0),io(),r=_.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Xm(t,n,r,a);break t}else if(r!==c){c=ai(Error(s(424)),n),Qr(c),n=Xm(t,n,r,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,We=ci(t.firstChild),Sn=n,Me=!0,Aa=null,oi=!0,a=Bp(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(cs(),r===c){n=na(t,n,a);break t}Mn(t,n,r,a)}n=n.child}return n;case 26:return Ul(t,n),t===null?(a=a0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Me||(a=n.type,t=n.pendingProps,r=jl(et.current).createElement(a),r[an]=n,r[dn]=t,En(r,a,t),W(r),n.stateNode=r):n.memoizedState=a0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Zt(n),t===null&&Me&&(r=n.stateNode=e0(n.type,n.pendingProps,et.current),Sn=n,oi=!0,c=We,Ga(n.type)?(Wf=c,We=ci(r.firstChild)):We=c),Mn(t,n,n.pendingProps.children,a),Ul(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Me&&((c=r=We)&&(r=Yx(r,n.type,n.pendingProps,oi),r!==null?(n.stateNode=r,Sn=n,We=ci(r.firstChild),oi=!1,c=!0):c=!1),c||Ra(n)),Zt(n),c=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,r=f.children,Hf(c,f)?r=null:_!==null&&Hf(c,_)&&(n.flags|=32),n.memoizedState!==null&&(c=Bu(t,n,lx,null,null,a),To._currentValue=c),Ul(t,n),Mn(t,n,r,a),n.child;case 6:return t===null&&Me&&((t=a=We)&&(a=jx(a,n.pendingProps,oi),a!==null?(n.stateNode=a,Sn=n,We=null,t=!0):t=!1),t||Ra(n)),null;case 13:return km(t,n,a);case 4:return St(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=ms(n,null,r,a):Mn(t,n,r,a),n.child;case 11:return Pm(t,n,n.type,n.pendingProps,a);case 7:return Mn(t,n,n.pendingProps,a),n.child;case 8:return Mn(t,n,n.pendingProps.children,a),n.child;case 12:return Mn(t,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,Ca(n,n.type,r.value),Mn(t,n,r.children,a),n.child;case 9:return c=n.type._context,r=n.pendingProps.children,fs(n),c=yn(c),r=r(c),n.flags|=1,Mn(t,n,r,a),n.child;case 14:return zm(t,n,n.type,n.pendingProps,a);case 15:return Fm(t,n,n.type,n.pendingProps,a);case 19:return qm(t,n,a);case 31:return gx(t,n,a);case 22:return Bm(t,n,a,n.pendingProps);case 24:return fs(n),r=yn(on),t===null?(c=Cu(),c===null&&(c=Xe,f=Au(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},Du(n),Ca(n,on,c)):((t.lanes&a)!==0&&(Uu(t,n),ao(n,null,null,a),io()),c=t.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Ca(n,on,r)):(r=f.cache,Ca(n,on,r),r!==c.cache&&Tu(n,[on],a,!0))),Mn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ia(t){t.flags|=4}function df(t,n,a,r,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(Sg())t.flags|=8192;else throw ps=gl,wu}else t.flags&=-16777217}function jm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!c0(n))if(Sg())t.flags|=8192;else throw ps=gl,wu}function Nl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Pe():536870912,t.lanes|=n,rr|=n)}function uo(t,n){if(!Me)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function qe(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function vx(t,n,a){var r=n.pendingProps;switch(Su(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(n),null;case 1:return qe(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),$i(on),Gt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ys(n)?ia(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Mu())),qe(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(ia(n),f!==null?(qe(n),jm(n,f)):(qe(n),df(n,c,null,r,a))):f?f!==t.memoizedState?(ia(n),qe(n),jm(n,f)):(qe(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&ia(n),qe(n),df(n,c,t,r,a)),null;case 27:if($t(n),a=et.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ia(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return qe(n),null}t=At.current,Ys(n)?Rp(n):(t=e0(c,r,a),n.stateNode=t,ia(n))}return qe(n),null;case 5:if($t(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ia(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return qe(n),null}if(f=At.current,Ys(n))Rp(n);else{var _=jl(et.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?_.createElement("select",{is:r.is}):_.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?_.createElement(c,{is:r.is}):_.createElement(c)}}f[an]=n,f[dn]=r;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;t:switch(En(f,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&ia(n)}}return qe(n),df(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&ia(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=et.current,Ys(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,c=Sn,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}t[an]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||kg(t.nodeValue,a)),t||Ra(n,!0)}else t=jl(t).createTextNode(r),t[an]=n,n.stateNode=t}return qe(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=Ys(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[an]=n}else cs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),t=!1}else a=Mu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Kn(n),n):(Kn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return qe(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Ys(n),r!==null&&r.dehydrated!==null){if(t===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[an]=n}else cs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),c=!1}else c=Mu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Kn(n),n):(Kn(n),null)}return Kn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Nl(n,n.updateQueue),qe(n),null);case 4:return Gt(),t===null&&Pf(n.stateNode.containerInfo),qe(n),null;case 10:return $i(n.type),qe(n),null;case 19:if(Y(tn),r=n.memoizedState,r===null)return qe(n),null;if(c=(n.flags&128)!==0,f=r.rendering,f===null)if(c)uo(r,!1);else{if(Je!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Sl(t),f!==null){for(n.flags|=128,uo(r,!1),t=f.updateQueue,n.updateQueue=t,Nl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Mp(a,t),a=a.sibling;return _t(tn,tn.current&1|2),Me&&Qi(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&m()>Bl&&(n.flags|=128,c=!0,uo(r,!1),n.lanes=4194304)}else{if(!c)if(t=Sl(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Nl(n,t),uo(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!Me)return qe(n),null}else 2*m()-r.renderingStartTime>Bl&&a!==536870912&&(n.flags|=128,c=!0,uo(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=m(),t.sibling=null,a=tn.current,_t(tn,c?a&1|2:a&1),Me&&Qi(n,r.treeForkCount),t):(qe(n),null);case 22:case 23:return Kn(n),Pu(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(qe(n),n.subtreeFlags&6&&(n.flags|=8192)):qe(n),a=n.updateQueue,a!==null&&Nl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&Y(hs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),$i(on),qe(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function xx(t,n){switch(Su(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return $i(on),Gt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return $t(n),null;case 31:if(n.memoizedState!==null){if(Kn(n),n.alternate===null)throw Error(s(340));cs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Kn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));cs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Y(tn),null;case 4:return Gt(),null;case 10:return $i(n.type),null;case 22:case 23:return Kn(n),Pu(),t!==null&&Y(hs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return $i(on),null;case 25:return null;default:return null}}function Zm(t,n){switch(Su(n),n.tag){case 3:$i(on),Gt();break;case 26:case 27:case 5:$t(n);break;case 4:Gt();break;case 31:n.memoizedState!==null&&Kn(n);break;case 13:Kn(n);break;case 19:Y(tn);break;case 10:$i(n.type);break;case 22:case 23:Kn(n),Pu(),t!==null&&Y(hs);break;case 24:$i(on)}}function fo(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&t)===t){r=void 0;var f=a.create,_=a.inst;r=f(),_.destroy=r}a=a.next}while(a!==c)}}catch(A){Fe(n,n.return,A)}}function Oa(t,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&t)===t){var _=r.inst,A=_.destroy;if(A!==void 0){_.destroy=void 0,c=n;var I=a,tt=A;try{tt()}catch(pt){Fe(c,I,pt)}}}r=r.next}while(r!==f)}}catch(pt){Fe(n,n.return,pt)}}function Km(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Hp(n,a)}catch(r){Fe(t,t.return,r)}}}function Qm(t,n,a){a.props=_s(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){Fe(t,n,r)}}function ho(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(c){Fe(t,n,c)}}function zi(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){Fe(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Fe(t,n,c)}else a.current=null}function Jm(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){Fe(t,t.return,c)}}function pf(t,n,a){try{var r=t.stateNode;Gx(r,t.type,a,n),r[dn]=n}catch(c){Fe(t,t.return,c)}}function $m(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ga(t.type)||t.tag===4}function mf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||$m(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ga(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function gf(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ji));else if(r!==4&&(r===27&&Ga(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(gf(t,n,a),t=t.sibling;t!==null;)gf(t,n,a),t=t.sibling}function Ol(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(r!==4&&(r===27&&Ga(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Ol(t,n,a),t=t.sibling;t!==null;)Ol(t,n,a),t=t.sibling}function tg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);En(n,r,a),n[an]=t,n[dn]=a}catch(f){Fe(t,t.return,f)}}var aa=!1,un=!1,_f=!1,eg=typeof WeakSet=="function"?WeakSet:Set,vn=null;function Sx(t,n){if(t=t.containerInfo,Bf=ec,t=dp(t),cu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var c=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var _=0,A=-1,I=-1,tt=0,pt=0,xt=t,it=null;e:for(;;){for(var ut;xt!==a||c!==0&&xt.nodeType!==3||(A=_+c),xt!==f||r!==0&&xt.nodeType!==3||(I=_+r),xt.nodeType===3&&(_+=xt.nodeValue.length),(ut=xt.firstChild)!==null;)it=xt,xt=ut;for(;;){if(xt===t)break e;if(it===a&&++tt===c&&(A=_),it===f&&++pt===r&&(I=_),(ut=xt.nextSibling)!==null)break;xt=it,it=xt.parentNode}xt=ut}a=A===-1||I===-1?null:{start:A,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(If={focusedElem:t,selectionRange:a},ec=!1,vn=n;vn!==null;)if(n=vn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,vn=t;else for(;vn!==null;){switch(n=vn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Vt=_s(a.type,c);t=r.getSnapshotBeforeUpdate(Vt,f),r.__reactInternalSnapshotBeforeUpdate=t}catch(te){Fe(a,a.return,te)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Vf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Vf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,vn=t;break}vn=n.return}}function ng(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ra(t,a),r&4&&fo(5,a);break;case 1:if(ra(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){Fe(a,a.return,_)}else{var c=_s(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){Fe(a,a.return,_)}}r&64&&Km(a),r&512&&ho(a,a.return);break;case 3:if(ra(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Hp(t,n)}catch(_){Fe(a,a.return,_)}}break;case 27:n===null&&r&4&&tg(a);case 26:case 5:ra(t,a),n===null&&r&4&&Jm(a),r&512&&ho(a,a.return);break;case 12:ra(t,a);break;case 31:ra(t,a),r&4&&sg(t,a);break;case 13:ra(t,a),r&4&&rg(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=wx.bind(null,a),Zx(t,a))));break;case 22:if(r=a.memoizedState!==null||aa,!r){n=n!==null&&n.memoizedState!==null||un,c=aa;var f=un;aa=r,(un=n)&&!f?oa(t,a,(a.subtreeFlags&8772)!==0):ra(t,a),aa=c,un=f}break;case 30:break;default:ra(t,a)}}function ig(t){var n=t.alternate;n!==null&&(t.alternate=null,ig(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Hr(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ke=null,Fn=!1;function sa(t,n,a){for(a=a.child;a!==null;)ag(t,n,a),a=a.sibling}function ag(t,n,a){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(bt,a)}catch{}switch(a.tag){case 26:un||zi(a,n),sa(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:un||zi(a,n);var r=Ke,c=Fn;Ga(a.type)&&(Ke=a.stateNode,Fn=!1),sa(t,n,a),Mo(a.stateNode),Ke=r,Fn=c;break;case 5:un||zi(a,n);case 6:if(r=Ke,c=Fn,Ke=null,sa(t,n,a),Ke=r,Fn=c,Ke!==null)if(Fn)try{(Ke.nodeType===9?Ke.body:Ke.nodeName==="HTML"?Ke.ownerDocument.body:Ke).removeChild(a.stateNode)}catch(f){Fe(a,n,f)}else try{Ke.removeChild(a.stateNode)}catch(f){Fe(a,n,f)}break;case 18:Ke!==null&&(Fn?(t=Ke,Kg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),pr(t)):Kg(Ke,a.stateNode));break;case 4:r=Ke,c=Fn,Ke=a.stateNode.containerInfo,Fn=!0,sa(t,n,a),Ke=r,Fn=c;break;case 0:case 11:case 14:case 15:Oa(2,a,n),un||Oa(4,a,n),sa(t,n,a);break;case 1:un||(zi(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Qm(a,n,r)),sa(t,n,a);break;case 21:sa(t,n,a);break;case 22:un=(r=un)||a.memoizedState!==null,sa(t,n,a),un=r;break;default:sa(t,n,a)}}function sg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{pr(t)}catch(a){Fe(n,n.return,a)}}}function rg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{pr(t)}catch(a){Fe(n,n.return,a)}}function yx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new eg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new eg),n;default:throw Error(s(435,t.tag))}}function Pl(t,n){var a=yx(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=Dx.bind(null,t,r);r.then(c,c)}})}function Bn(t,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r],f=t,_=n,A=_;t:for(;A!==null;){switch(A.tag){case 27:if(Ga(A.type)){Ke=A.stateNode,Fn=!1;break t}break;case 5:Ke=A.stateNode,Fn=!1;break t;case 3:case 4:Ke=A.stateNode.containerInfo,Fn=!0;break t}A=A.return}if(Ke===null)throw Error(s(160));ag(f,_,c),Ke=null,Fn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)og(n,t),n=n.sibling}var yi=null;function og(t,n){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Bn(n,t),In(t),r&4&&(Oa(3,t,t.return),fo(3,t),Oa(5,t,t.return));break;case 1:Bn(n,t),In(t),r&512&&(un||a===null||zi(a,a.return)),r&64&&aa&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var c=yi;if(Bn(n,t),In(t),r&512&&(un||a===null||zi(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){t:{r=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(r){case"title":f=c.getElementsByTagName("title")[0],(!f||f[ns]||f[an]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(r),c.head.insertBefore(f,c.querySelector("head > title"))),En(f,r,a),f[an]=t,W(f),r=f;break t;case"link":var _=o0("link","href",c).get(r+(a.href||""));if(_){for(var A=0;A<_.length;A++)if(f=_[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(A,1);break e}}f=c.createElement(r),En(f,r,a),c.head.appendChild(f);break;case"meta":if(_=o0("meta","content",c).get(r+(a.content||""))){for(A=0;A<_.length;A++)if(f=_[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(A,1);break e}}f=c.createElement(r),En(f,r,a),c.head.appendChild(f);break;default:throw Error(s(468,r))}f[an]=t,W(f),r=f}t.stateNode=r}else l0(c,t.type,t.stateNode);else t.stateNode=r0(c,r,t.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?l0(c,t.type,t.stateNode):r0(c,r,t.memoizedProps)):r===null&&t.stateNode!==null&&pf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Bn(n,t),In(t),r&512&&(un||a===null||zi(a,a.return)),a!==null&&r&4&&pf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Bn(n,t),In(t),r&512&&(un||a===null||zi(a,a.return)),t.flags&32){c=t.stateNode;try{Ln(c,"")}catch(Vt){Fe(t,t.return,Vt)}}r&4&&t.stateNode!=null&&(c=t.memoizedProps,pf(t,c,a!==null?a.memoizedProps:c)),r&1024&&(_f=!0);break;case 6:if(Bn(n,t),In(t),r&4){if(t.stateNode===null)throw Error(s(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(Vt){Fe(t,t.return,Vt)}}break;case 3:if(Ql=null,c=yi,yi=Zl(n.containerInfo),Bn(n,t),yi=c,In(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{pr(n.containerInfo)}catch(Vt){Fe(t,t.return,Vt)}_f&&(_f=!1,lg(t));break;case 4:r=yi,yi=Zl(t.stateNode.containerInfo),Bn(n,t),In(t),yi=r;break;case 12:Bn(n,t),In(t);break;case 31:Bn(n,t),In(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Pl(t,r)));break;case 13:Bn(n,t),In(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Fl=m()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Pl(t,r)));break;case 22:c=t.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,tt=aa,pt=un;if(aa=tt||c,un=pt||I,Bn(n,t),un=pt,aa=tt,In(t),r&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||I||aa||un||vs(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(f=I.stateNode,c)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{A=I.stateNode;var xt=I.memoizedProps.style,it=xt!=null&&xt.hasOwnProperty("display")?xt.display:null;A.style.display=it==null||typeof it=="boolean"?"":(""+it).trim()}}catch(Vt){Fe(I,I.return,Vt)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=c?"":I.memoizedProps}catch(Vt){Fe(I,I.return,Vt)}}}else if(n.tag===18){if(a===null){I=n;try{var ut=I.stateNode;c?Qg(ut,!0):Qg(I.stateNode,!1)}catch(Vt){Fe(I,I.return,Vt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Pl(t,a))));break;case 19:Bn(n,t),In(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Pl(t,r)));break;case 30:break;case 21:break;default:Bn(n,t),In(t)}}function In(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if($m(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=mf(t);Ol(t,f,c);break;case 5:var _=a.stateNode;a.flags&32&&(Ln(_,""),a.flags&=-33);var A=mf(t);Ol(t,A,_);break;case 3:case 4:var I=a.stateNode.containerInfo,tt=mf(t);gf(t,tt,I);break;default:throw Error(s(161))}}catch(pt){Fe(t,t.return,pt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function lg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;lg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ra(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)ng(t,n.alternate,n),n=n.sibling}function vs(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Oa(4,n,n.return),vs(n);break;case 1:zi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Qm(n,n.return,a),vs(n);break;case 27:Mo(n.stateNode);case 26:case 5:zi(n,n.return),vs(n);break;case 22:n.memoizedState===null&&vs(n);break;case 30:vs(n);break;default:vs(n)}t=t.sibling}}function oa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,c=t,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:oa(c,f,a),fo(4,f);break;case 1:if(oa(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(tt){Fe(r,r.return,tt)}if(r=f,c=r.updateQueue,c!==null){var A=r.stateNode;try{var I=c.shared.hiddenCallbacks;if(I!==null)for(c.shared.hiddenCallbacks=null,c=0;c<I.length;c++)Ip(I[c],A)}catch(tt){Fe(r,r.return,tt)}}a&&_&64&&Km(f),ho(f,f.return);break;case 27:tg(f);case 26:case 5:oa(c,f,a),a&&r===null&&_&4&&Jm(f),ho(f,f.return);break;case 12:oa(c,f,a);break;case 31:oa(c,f,a),a&&_&4&&sg(c,f);break;case 13:oa(c,f,a),a&&_&4&&rg(c,f);break;case 22:f.memoizedState===null&&oa(c,f,a),ho(f,f.return);break;case 30:break;default:oa(c,f,a)}n=n.sibling}}function vf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Jr(a))}function xf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Jr(t))}function Mi(t,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)cg(t,n,a,r),n=n.sibling}function cg(t,n,a,r){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Mi(t,n,a,r),c&2048&&fo(9,n);break;case 1:Mi(t,n,a,r);break;case 3:Mi(t,n,a,r),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Jr(t)));break;case 12:if(c&2048){Mi(t,n,a,r),t=n.stateNode;try{var f=n.memoizedProps,_=f.id,A=f.onPostCommit;typeof A=="function"&&A(_,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(I){Fe(n,n.return,I)}}else Mi(t,n,a,r);break;case 31:Mi(t,n,a,r);break;case 13:Mi(t,n,a,r);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?Mi(t,n,a,r):po(t,n):f._visibility&2?Mi(t,n,a,r):(f._visibility|=2,ir(t,n,a,r,(n.subtreeFlags&10256)!==0||!1)),c&2048&&vf(_,n);break;case 24:Mi(t,n,a,r),c&2048&&xf(n.alternate,n);break;default:Mi(t,n,a,r)}}function ir(t,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,A=a,I=r,tt=_.flags;switch(_.tag){case 0:case 11:case 15:ir(f,_,A,I,c),fo(8,_);break;case 23:break;case 22:var pt=_.stateNode;_.memoizedState!==null?pt._visibility&2?ir(f,_,A,I,c):po(f,_):(pt._visibility|=2,ir(f,_,A,I,c)),c&&tt&2048&&vf(_.alternate,_);break;case 24:ir(f,_,A,I,c),c&&tt&2048&&xf(_.alternate,_);break;default:ir(f,_,A,I,c)}n=n.sibling}}function po(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,c=r.flags;switch(r.tag){case 22:po(a,r),c&2048&&vf(r.alternate,r);break;case 24:po(a,r),c&2048&&xf(r.alternate,r);break;default:po(a,r)}n=n.sibling}}var mo=8192;function ar(t,n,a){if(t.subtreeFlags&mo)for(t=t.child;t!==null;)ug(t,n,a),t=t.sibling}function ug(t,n,a){switch(t.tag){case 26:ar(t,n,a),t.flags&mo&&t.memoizedState!==null&&oS(a,yi,t.memoizedState,t.memoizedProps);break;case 5:ar(t,n,a);break;case 3:case 4:var r=yi;yi=Zl(t.stateNode.containerInfo),ar(t,n,a),yi=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=mo,mo=16777216,ar(t,n,a),mo=r):ar(t,n,a));break;default:ar(t,n,a)}}function fg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function go(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];vn=r,dg(r,t)}fg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)hg(t),t=t.sibling}function hg(t){switch(t.tag){case 0:case 11:case 15:go(t),t.flags&2048&&Oa(9,t,t.return);break;case 3:go(t);break;case 12:go(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,zl(t)):go(t);break;default:go(t)}}function zl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];vn=r,dg(r,t)}fg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Oa(8,n,n.return),zl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,zl(n));break;default:zl(n)}t=t.sibling}}function dg(t,n){for(;vn!==null;){var a=vn;switch(a.tag){case 0:case 11:case 15:Oa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Jr(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,vn=r;else t:for(a=t;vn!==null;){r=vn;var c=r.sibling,f=r.return;if(ig(r),r===a){vn=null;break t}if(c!==null){c.return=f,vn=c;break t}vn=f}}}var Mx={getCacheForType:function(t){var n=yn(on),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return yn(on).controller.signal}},Ex=typeof WeakMap=="function"?WeakMap:Map,Le=0,Xe=null,_e=null,xe=0,ze=0,Qn=null,Pa=!1,sr=!1,Sf=!1,la=0,Je=0,za=0,xs=0,yf=0,Jn=0,rr=0,_o=null,Hn=null,Mf=!1,Fl=0,pg=0,Bl=1/0,Il=null,Fa=null,mn=0,Ba=null,or=null,ca=0,Ef=0,bf=null,mg=null,vo=0,Tf=null;function $n(){return(Le&2)!==0&&xe!==0?xe&-xe:L.T!==null?Uf():Ni()}function gg(){if(Jn===0)if((xe&536870912)===0||Me){var t=Tt;Tt<<=1,(Tt&3932160)===0&&(Tt=262144),Jn=t}else Jn=536870912;return t=Zn.current,t!==null&&(t.flags|=32),Jn}function Gn(t,n,a){(t===Xe&&(ze===2||ze===9)||t.cancelPendingCommit!==null)&&(lr(t,0),Ia(t,xe,Jn,!1)),wn(t,a),((Le&2)===0||t!==Xe)&&(t===Xe&&((Le&2)===0&&(xs|=a),Je===4&&Ia(t,xe,Jn,!1)),Fi(t))}function _g(t,n,a){if((Le&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||It(t,n),c=r?Ax(t,n):Rf(t,n,!0),f=r;do{if(c===0){sr&&!r&&Ia(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!bx(a)){c=Rf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var A=t;c=_o;var I=A.current.memoizedState.isDehydrated;if(I&&(lr(A,_).flags|=256),_=Rf(A,_,!1),_!==2){if(Sf&&!I){A.errorRecoveryDisabledLanes|=f,xs|=f,c=4;break t}f=Hn,Hn=c,f!==null&&(Hn===null?Hn=f:Hn.push.apply(Hn,f))}c=_}if(f=!1,c!==2)continue}}if(c===1){lr(t,0),Ia(t,n,0,!0);break}t:{switch(r=t,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ia(r,n,Jn,!Pa);break t;case 2:Hn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Fl+300-m(),10<c)){if(Ia(r,n,Jn,!Pa),dt(r,0,!0)!==0)break t;ca=n,r.timeoutHandle=jg(vg.bind(null,r,a,Hn,Il,Mf,n,Jn,xs,rr,Pa,f,"Throttled",-0,0),c);break t}vg(r,a,Hn,Il,Mf,n,Jn,xs,rr,Pa,f,null,-0,0)}}break}while(!0);Fi(t)}function vg(t,n,a,r,c,f,_,A,I,tt,pt,xt,it,ut){if(t.timeoutHandle=-1,xt=n.subtreeFlags,xt&8192||(xt&16785408)===16785408){xt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ji},ug(n,f,xt);var Vt=(f&62914560)===f?Fl-m():(f&4194048)===f?pg-m():0;if(Vt=lS(xt,Vt),Vt!==null){ca=f,t.cancelPendingCommit=Vt(Ag.bind(null,t,n,f,a,r,c,_,A,I,pt,xt,null,it,ut)),Ia(t,f,_,!tt);return}}Ag(t,n,f,a,r,c,_,A,I)}function bx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!Yn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ia(t,n,a,r){n&=~yf,n&=~xs,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var c=n;0<c;){var f=31-Nt(c),_=1<<f;r[f]=-1,c&=~_}a!==0&&Ir(t,a,n)}function Hl(){return(Le&6)===0?(xo(0),!1):!0}function Af(){if(_e!==null){if(ze===0)var t=_e.return;else t=_e,Ji=us=null,Gu(t),Js=null,to=0,t=_e;for(;t!==null;)Zm(t.alternate,t),t=t.return;_e=null}}function lr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,kx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ca=0,Af(),Xe=t,_e=a=Ki(t.current,null),xe=n,ze=0,Qn=null,Pa=!1,sr=It(t,n),Sf=!1,rr=Jn=yf=xs=za=Je=0,Hn=_o=null,Mf=!1,(n&8)!==0&&(n|=n&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=n;0<r;){var c=31-Nt(r),f=1<<c;n|=t[c],r&=~f}return la=n,ol(),a}function xg(t,n){ce=null,L.H=lo,n===Qs||n===ml?(n=Pp(),ze=3):n===wu?(n=Pp(),ze=4):ze=n===af?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Qn=n,_e===null&&(Je=1,wl(t,ai(n,t.current)))}function Sg(){var t=Zn.current;return t===null?!0:(xe&4194048)===xe?li===null:(xe&62914560)===xe||(xe&536870912)!==0?t===li:!1}function yg(){var t=L.H;return L.H=lo,t===null?lo:t}function Mg(){var t=L.A;return L.A=Mx,t}function Gl(){Je=4,Pa||(xe&4194048)!==xe&&Zn.current!==null||(sr=!0),(za&134217727)===0&&(xs&134217727)===0||Xe===null||Ia(Xe,xe,Jn,!1)}function Rf(t,n,a){var r=Le;Le|=2;var c=yg(),f=Mg();(Xe!==t||xe!==n)&&(Il=null,lr(t,n)),n=!1;var _=Je;t:do try{if(ze!==0&&_e!==null){var A=_e,I=Qn;switch(ze){case 8:Af(),_=6;break t;case 3:case 2:case 9:case 6:Zn.current===null&&(n=!0);var tt=ze;if(ze=0,Qn=null,cr(t,A,I,tt),a&&sr){_=0;break t}break;default:tt=ze,ze=0,Qn=null,cr(t,A,I,tt)}}Tx(),_=Je;break}catch(pt){xg(t,pt)}while(!0);return n&&t.shellSuspendCounter++,Ji=us=null,Le=r,L.H=c,L.A=f,_e===null&&(Xe=null,xe=0,ol()),_}function Tx(){for(;_e!==null;)Eg(_e)}function Ax(t,n){var a=Le;Le|=2;var r=yg(),c=Mg();Xe!==t||xe!==n?(Il=null,Bl=m()+500,lr(t,n)):sr=It(t,n);t:do try{if(ze!==0&&_e!==null){n=_e;var f=Qn;e:switch(ze){case 1:ze=0,Qn=null,cr(t,n,f,1);break;case 2:case 9:if(Np(f)){ze=0,Qn=null,bg(n);break}n=function(){ze!==2&&ze!==9||Xe!==t||(ze=7),Fi(t)},f.then(n,n);break t;case 3:ze=7;break t;case 4:ze=5;break t;case 7:Np(f)?(ze=0,Qn=null,bg(n)):(ze=0,Qn=null,cr(t,n,f,7));break;case 5:var _=null;switch(_e.tag){case 26:_=_e.memoizedState;case 5:case 27:var A=_e;if(_?c0(_):A.stateNode.complete){ze=0,Qn=null;var I=A.sibling;if(I!==null)_e=I;else{var tt=A.return;tt!==null?(_e=tt,Vl(tt)):_e=null}break e}}ze=0,Qn=null,cr(t,n,f,5);break;case 6:ze=0,Qn=null,cr(t,n,f,6);break;case 8:Af(),Je=6;break t;default:throw Error(s(462))}}Rx();break}catch(pt){xg(t,pt)}while(!0);return Ji=us=null,L.H=r,L.A=c,Le=a,_e!==null?0:(Xe=null,xe=0,ol(),Je)}function Rx(){for(;_e!==null&&!Xt();)Eg(_e)}function Eg(t){var n=Ym(t.alternate,t,la);t.memoizedProps=t.pendingProps,n===null?Vl(t):_e=n}function bg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Gm(a,n,n.pendingProps,n.type,void 0,xe);break;case 11:n=Gm(a,n,n.pendingProps,n.type.render,n.ref,xe);break;case 5:Gu(n);default:Zm(a,n),n=_e=Mp(n,la),n=Ym(a,n,la)}t.memoizedProps=t.pendingProps,n===null?Vl(t):_e=n}function cr(t,n,a,r){Ji=us=null,Gu(n),Js=null,to=0;var c=n.return;try{if(mx(t,c,n,a,xe)){Je=1,wl(t,ai(a,t.current)),_e=null;return}}catch(f){if(c!==null)throw _e=c,f;Je=1,wl(t,ai(a,t.current)),_e=null;return}n.flags&32768?(Me||r===1?t=!0:sr||(xe&536870912)!==0?t=!1:(Pa=t=!0,(r===2||r===9||r===3||r===6)&&(r=Zn.current,r!==null&&r.tag===13&&(r.flags|=16384))),Tg(n,t)):Vl(n)}function Vl(t){var n=t;do{if((n.flags&32768)!==0){Tg(n,Pa);return}t=n.return;var a=vx(n.alternate,n,la);if(a!==null){_e=a;return}if(n=n.sibling,n!==null){_e=n;return}_e=n=t}while(n!==null);Je===0&&(Je=5)}function Tg(t,n){do{var a=xx(t.alternate,t);if(a!==null){a.flags&=32767,_e=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){_e=t;return}_e=t=a}while(t!==null);Je=6,_e=null}function Ag(t,n,a,r,c,f,_,A,I){t.cancelPendingCommit=null;do Xl();while(mn!==0);if((Le&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=pu,gi(t,a,f,_,A,I),t===Xe&&(_e=Xe=null,xe=0),or=n,Ba=t,ca=a,Ef=f,bf=c,mg=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Ux(rt,function(){return Ug(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=L.T,L.T=null,c=F.p,F.p=2,_=Le,Le|=4;try{Sx(t,n,a)}finally{Le=_,F.p=c,L.T=r}}mn=1,Rg(),Cg(),wg()}}function Rg(){if(mn===1){mn=0;var t=Ba,n=or,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=L.T,L.T=null;var r=F.p;F.p=2;var c=Le;Le|=4;try{og(n,t);var f=If,_=dp(t.containerInfo),A=f.focusedElem,I=f.selectionRange;if(_!==A&&A&&A.ownerDocument&&hp(A.ownerDocument.documentElement,A)){if(I!==null&&cu(A)){var tt=I.start,pt=I.end;if(pt===void 0&&(pt=tt),"selectionStart"in A)A.selectionStart=tt,A.selectionEnd=Math.min(pt,A.value.length);else{var xt=A.ownerDocument||document,it=xt&&xt.defaultView||window;if(it.getSelection){var ut=it.getSelection(),Vt=A.textContent.length,te=Math.min(I.start,Vt),Ge=I.end===void 0?te:Math.min(I.end,Vt);!ut.extend&&te>Ge&&(_=Ge,Ge=te,te=_);var j=fp(A,te),k=fp(A,Ge);if(j&&k&&(ut.rangeCount!==1||ut.anchorNode!==j.node||ut.anchorOffset!==j.offset||ut.focusNode!==k.node||ut.focusOffset!==k.offset)){var $=xt.createRange();$.setStart(j.node,j.offset),ut.removeAllRanges(),te>Ge?(ut.addRange($),ut.extend(k.node,k.offset)):($.setEnd(k.node,k.offset),ut.addRange($))}}}}for(xt=[],ut=A;ut=ut.parentNode;)ut.nodeType===1&&xt.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<xt.length;A++){var gt=xt[A];gt.element.scrollLeft=gt.left,gt.element.scrollTop=gt.top}}ec=!!Bf,If=Bf=null}finally{Le=c,F.p=r,L.T=a}}t.current=n,mn=2}}function Cg(){if(mn===2){mn=0;var t=Ba,n=or,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=L.T,L.T=null;var r=F.p;F.p=2;var c=Le;Le|=4;try{ng(t,n.alternate,n)}finally{Le=c,F.p=r,L.T=a}}mn=3}}function wg(){if(mn===4||mn===3){mn=0,w();var t=Ba,n=or,a=ca,r=mg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?mn=5:(mn=0,or=Ba=null,Dg(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Fa=null),Ps(a),n=n.stateNode,yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(bt,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=L.T,c=F.p,F.p=2,L.T=null;try{for(var f=t.onRecoverableError,_=0;_<r.length;_++){var A=r[_];f(A.value,{componentStack:A.stack})}}finally{L.T=n,F.p=c}}(ca&3)!==0&&Xl(),Fi(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===Tf?vo++:(vo=0,Tf=t):vo=0,xo(0)}}function Dg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Jr(n)))}function Xl(){return Rg(),Cg(),wg(),Ug()}function Ug(){if(mn!==5)return!1;var t=Ba,n=Ef;Ef=0;var a=Ps(ca),r=L.T,c=F.p;try{F.p=32>a?32:a,L.T=null,a=bf,bf=null;var f=Ba,_=ca;if(mn=0,or=Ba=null,ca=0,(Le&6)!==0)throw Error(s(331));var A=Le;if(Le|=4,hg(f.current),cg(f,f.current,_,a),Le=A,xo(0,!1),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(bt,f)}catch{}return!0}finally{F.p=c,L.T=r,Dg(t,n)}}function Lg(t,n,a){n=ai(a,n),n=nf(t.stateNode,n,2),t=Ua(t,n,2),t!==null&&(wn(t,2),Fi(t))}function Fe(t,n,a){if(t.tag===3)Lg(t,t,a);else for(;n!==null;){if(n.tag===3){Lg(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Fa===null||!Fa.has(r))){t=ai(a,t),a=Nm(2),r=Ua(n,a,2),r!==null&&(Om(a,r,n,t),wn(r,2),Fi(r));break}}n=n.return}}function Cf(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new Ex;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(Sf=!0,c.add(a),t=Cx.bind(null,t,n,a),n.then(t,t))}function Cx(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Xe===t&&(xe&a)===a&&(Je===4||Je===3&&(xe&62914560)===xe&&300>m()-Fl?(Le&2)===0&&lr(t,0):yf|=a,rr===xe&&(rr=0)),Fi(t)}function Ng(t,n){n===0&&(n=Pe()),t=os(t,n),t!==null&&(wn(t,n),Fi(t))}function wx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Ng(t,a)}function Dx(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),Ng(t,a)}function Ux(t,n){return ye(t,n)}var kl=null,ur=null,wf=!1,Wl=!1,Df=!1,Ha=0;function Fi(t){t!==ur&&t.next===null&&(ur===null?kl=ur=t:ur=ur.next=t),Wl=!0,wf||(wf=!0,Nx())}function xo(t,n){if(!Df&&Wl){Df=!0;do for(var a=!1,r=kl;r!==null;){if(t!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var _=r.suspendedLanes,A=r.pingedLanes;f=(1<<31-Nt(42|t)+1)-1,f&=c&~(_&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Fg(r,f))}else f=xe,f=dt(r,r===Xe?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||It(r,f)||(a=!0,Fg(r,f));r=r.next}while(a);Df=!1}}function Lx(){Og()}function Og(){Wl=wf=!1;var t=0;Ha!==0&&Xx()&&(t=Ha);for(var n=m(),a=null,r=kl;r!==null;){var c=r.next,f=Pg(r,n);f===0?(r.next=null,a===null?kl=c:a.next=c,c===null&&(ur=a)):(a=r,(t!==0||(f&3)!==0)&&(Wl=!0)),r=c}mn!==0&&mn!==5||xo(t),Ha!==0&&(Ha=0)}function Pg(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-Nt(f),A=1<<_,I=c[_];I===-1?((A&a)===0||(A&r)!==0)&&(c[_]=ie(A,n)):I<=n&&(t.expiredLanes|=A),f&=~A}if(n=Xe,a=xe,a=dt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(ze===2||ze===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&Te(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||It(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&Te(r),Ps(a)){case 2:case 8:a=ft;break;case 32:a=rt;break;case 268435456:a=Rt;break;default:a=rt}return r=zg.bind(null,t),a=ye(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&Te(r),t.callbackPriority=2,t.callbackNode=null,2}function zg(t,n){if(mn!==0&&mn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Xl()&&t.callbackNode!==a)return null;var r=xe;return r=dt(t,t===Xe?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(_g(t,r,n),Pg(t,m()),t.callbackNode!=null&&t.callbackNode===a?zg.bind(null,t):null)}function Fg(t,n){if(Xl())return null;_g(t,n,!0)}function Nx(){Wx(function(){(Le&6)!==0?ye(Z,Lx):Og()})}function Uf(){if(Ha===0){var t=Zs;t===0&&(t=Ct,Ct<<=1,(Ct&261888)===0&&(Ct=256)),Ha=t}return Ha}function Bg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:$o(""+t)}function Ig(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Ox(t,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=Bg((c[dn]||null).action),_=r.submitter;_&&(n=(n=_[dn]||null)?Bg(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var A=new il("action","action",null,r,c);t.push({event:A,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Ha!==0){var I=_?Ig(c,_):new FormData(c);Ku(a,{pending:!0,data:I,method:c.method,action:f},null,I)}}else typeof f=="function"&&(A.preventDefault(),I=_?Ig(c,_):new FormData(c),Ku(a,{pending:!0,data:I,method:c.method,action:f},f,I))},currentTarget:c}]})}}for(var Lf=0;Lf<du.length;Lf++){var Nf=du[Lf],Px=Nf.toLowerCase(),zx=Nf[0].toUpperCase()+Nf.slice(1);Si(Px,"on"+zx)}Si(gp,"onAnimationEnd"),Si(_p,"onAnimationIteration"),Si(vp,"onAnimationStart"),Si("dblclick","onDoubleClick"),Si("focusin","onFocus"),Si("focusout","onBlur"),Si(Jv,"onTransitionRun"),Si($v,"onTransitionStart"),Si(tx,"onTransitionCancel"),Si(xp,"onTransitionEnd"),wt("onMouseEnter",["mouseout","mouseover"]),wt("onMouseLeave",["mouseout","mouseover"]),wt("onPointerEnter",["pointerout","pointerover"]),wt("onPointerLeave",["pointerout","pointerover"]),K("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),K("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),K("onBeforeInput",["compositionend","keypress","textInput","paste"]),K("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),K("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),K("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var So="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(So));function Hg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],c=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var _=r.length-1;0<=_;_--){var A=r[_],I=A.instance,tt=A.currentTarget;if(A=A.listener,I!==f&&c.isPropagationStopped())break t;f=A,c.currentTarget=tt;try{f(c)}catch(pt){rl(pt)}c.currentTarget=null,f=I}else for(_=0;_<r.length;_++){if(A=r[_],I=A.instance,tt=A.currentTarget,A=A.listener,I!==f&&c.isPropagationStopped())break t;f=A,c.currentTarget=tt;try{f(c)}catch(pt){rl(pt)}c.currentTarget=null,f=I}}}}function ve(t,n){var a=n[ya];a===void 0&&(a=n[ya]=new Set);var r=t+"__bubble";a.has(r)||(Gg(n,t,2,!1),a.add(r))}function Of(t,n,a){var r=0;n&&(r|=4),Gg(a,t,r,n)}var ql="_reactListening"+Math.random().toString(36).slice(2);function Pf(t){if(!t[ql]){t[ql]=!0,ct.forEach(function(a){a!=="selectionchange"&&(Fx.has(a)||Of(a,!1,t),Of(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[ql]||(n[ql]=!0,Of("selectionchange",!1,n))}}function Gg(t,n,a,r){switch(g0(n)){case 2:var c=fS;break;case 8:c=hS;break;default:c=Kf}a=c.bind(null,n,a,t),c=void 0,!tu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function zf(t,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var _=r.tag;if(_===3||_===4){var A=r.stateNode.containerInfo;if(A===c)break;if(_===4)for(_=r.return;_!==null;){var I=_.tag;if((I===3||I===4)&&_.stateNode.containerInfo===c)return;_=_.return}for(;A!==null;){if(_=Ma(A),_===null)return;if(I=_.tag,I===5||I===6||I===26||I===27){r=f=_;continue t}A=A.parentNode}}r=r.return}qd(function(){var tt=f,pt=Jc(a),xt=[];t:{var it=Sp.get(t);if(it!==void 0){var ut=il,Vt=t;switch(t){case"keypress":if(el(a)===0)break t;case"keydown":case"keyup":ut=Dv;break;case"focusin":Vt="focus",ut=au;break;case"focusout":Vt="blur",ut=au;break;case"beforeblur":case"afterblur":ut=au;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=Zd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=vv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=Nv;break;case gp:case _p:case vp:ut=yv;break;case xp:ut=Pv;break;case"scroll":case"scrollend":ut=gv;break;case"wheel":ut=Fv;break;case"copy":case"cut":case"paste":ut=Ev;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=Qd;break;case"toggle":case"beforetoggle":ut=Iv}var te=(n&4)!==0,Ge=!te&&(t==="scroll"||t==="scrollend"),j=te?it!==null?it+"Capture":null:it;te=[];for(var k=tt,$;k!==null;){var gt=k;if($=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||$===null||j===null||(gt=Gr(k,j),gt!=null&&te.push(yo(k,gt,$))),Ge)break;k=k.return}0<te.length&&(it=new ut(it,Vt,null,a,pt),xt.push({event:it,listeners:te}))}}if((n&7)===0){t:{if(it=t==="mouseover"||t==="pointerover",ut=t==="mouseout"||t==="pointerout",it&&a!==Qc&&(Vt=a.relatedTarget||a.fromElement)&&(Ma(Vt)||Vt[qi]))break t;if((ut||it)&&(it=pt.window===pt?pt:(it=pt.ownerDocument)?it.defaultView||it.parentWindow:window,ut?(Vt=a.relatedTarget||a.toElement,ut=tt,Vt=Vt?Ma(Vt):null,Vt!==null&&(Ge=u(Vt),te=Vt.tag,Vt!==Ge||te!==5&&te!==27&&te!==6)&&(Vt=null)):(ut=null,Vt=tt),ut!==Vt)){if(te=Zd,gt="onMouseLeave",j="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(te=Qd,gt="onPointerLeave",j="onPointerEnter",k="pointer"),Ge=ut==null?it:is(ut),$=Vt==null?it:is(Vt),it=new te(gt,k+"leave",ut,a,pt),it.target=Ge,it.relatedTarget=$,gt=null,Ma(pt)===tt&&(te=new te(j,k+"enter",Vt,a,pt),te.target=$,te.relatedTarget=Ge,gt=te),Ge=gt,ut&&Vt)e:{for(te=Bx,j=ut,k=Vt,$=0,gt=j;gt;gt=te(gt))$++;gt=0;for(var Qt=k;Qt;Qt=te(Qt))gt++;for(;0<$-gt;)j=te(j),$--;for(;0<gt-$;)k=te(k),gt--;for(;$--;){if(j===k||k!==null&&j===k.alternate){te=j;break e}j=te(j),k=te(k)}te=null}else te=null;ut!==null&&Vg(xt,it,ut,te,!1),Vt!==null&&Ge!==null&&Vg(xt,Ge,Vt,te,!0)}}t:{if(it=tt?is(tt):window,ut=it.nodeName&&it.nodeName.toLowerCase(),ut==="select"||ut==="input"&&it.type==="file")var we=sp;else if(ip(it))if(rp)we=Zv;else{we=Yv;var Yt=qv}else ut=it.nodeName,!ut||ut.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?tt&&Fs(tt.elementType)&&(we=sp):we=jv;if(we&&(we=we(t,tt))){ap(xt,we,a,pt);break t}Yt&&Yt(t,it,tt),t==="focusout"&&tt&&it.type==="number"&&tt.memoizedProps.value!=null&&vi(it,"number",it.value)}switch(Yt=tt?is(tt):window,t){case"focusin":(ip(Yt)||Yt.contentEditable==="true")&&(Gs=Yt,uu=tt,Zr=null);break;case"focusout":Zr=uu=Gs=null;break;case"mousedown":fu=!0;break;case"contextmenu":case"mouseup":case"dragend":fu=!1,pp(xt,a,pt);break;case"selectionchange":if(Qv)break;case"keydown":case"keyup":pp(xt,a,pt)}var he;if(ru)t:{switch(t){case"compositionstart":var Se="onCompositionStart";break t;case"compositionend":Se="onCompositionEnd";break t;case"compositionupdate":Se="onCompositionUpdate";break t}Se=void 0}else Hs?ep(t,a)&&(Se="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Se="onCompositionStart");Se&&(Jd&&a.locale!=="ko"&&(Hs||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&Hs&&(he=Yd()):(ba=pt,eu="value"in ba?ba.value:ba.textContent,Hs=!0)),Yt=Yl(tt,Se),0<Yt.length&&(Se=new Kd(Se,t,null,a,pt),xt.push({event:Se,listeners:Yt}),he?Se.data=he:(he=np(a),he!==null&&(Se.data=he)))),(he=Gv?Vv(t,a):Xv(t,a))&&(Se=Yl(tt,"onBeforeInput"),0<Se.length&&(Yt=new Kd("onBeforeInput","beforeinput",null,a,pt),xt.push({event:Yt,listeners:Se}),Yt.data=he)),Ox(xt,t,tt,a,pt)}Hg(xt,n)})}function yo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Yl(t,n){for(var a=n+"Capture",r=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Gr(t,a),c!=null&&r.unshift(yo(t,c,f)),c=Gr(t,n),c!=null&&r.push(yo(t,c,f))),t.tag===3)return r;t=t.return}return[]}function Bx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Vg(t,n,a,r,c){for(var f=n._reactName,_=[];a!==null&&a!==r;){var A=a,I=A.alternate,tt=A.stateNode;if(A=A.tag,I!==null&&I===r)break;A!==5&&A!==26&&A!==27||tt===null||(I=tt,c?(tt=Gr(a,f),tt!=null&&_.unshift(yo(a,tt,I))):c||(tt=Gr(a,f),tt!=null&&_.push(yo(a,tt,I)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var Ix=/\r\n?/g,Hx=/\u0000|\uFFFD/g;function Xg(t){return(typeof t=="string"?t:""+t).replace(Ix,`
`).replace(Hx,"")}function kg(t,n){return n=Xg(n),Xg(t)===n}function He(t,n,a,r,c,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||Ln(t,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&Ln(t,""+r);break;case"className":re(t,"class",r);break;case"tabIndex":re(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":re(t,a,r);break;case"style":Yi(t,r,f);break;case"data":if(n!=="object"){re(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=$o(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&He(t,n,"name",c.name,c,null),He(t,n,"formEncType",c.formEncType,c,null),He(t,n,"formMethod",c.formMethod,c,null),He(t,n,"formTarget",c.formTarget,c,null)):(He(t,n,"encType",c.encType,c,null),He(t,n,"method",c.method,c,null),He(t,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=$o(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=ji);break;case"onScroll":r!=null&&ve("scroll",t);break;case"onScrollEnd":r!=null&&ve("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=$o(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":ve("beforetoggle",t),ve("toggle",t),ee(t,"popover",r);break;case"xlinkActuate":Ht(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Ht(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Ht(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Ht(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Ht(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Ht(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Ht(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Ht(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Ht(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":ee(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=pv.get(a)||a,ee(t,a,r))}}function Ff(t,n,a,r,c,f){switch(a){case"style":Yi(t,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof r=="string"?Ln(t,r):(typeof r=="number"||typeof r=="bigint")&&Ln(t,""+r);break;case"onScroll":r!=null&&ve("scroll",t);break;case"onScrollEnd":r!=null&&ve("scrollend",t);break;case"onClick":r!=null&&(t.onclick=ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!nt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[dn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof r=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,r,c);break t}a in t?t[a]=r:r===!0?t.setAttribute(a,""):ee(t,a,r)}}}function En(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",t),ve("load",t);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:He(t,n,f,_,a,null)}}c&&He(t,n,"srcSet",a.srcSet,a,null),r&&He(t,n,"src",a.src,a,null);return;case"input":ve("invalid",t);var A=f=_=c=null,I=null,tt=null;for(r in a)if(a.hasOwnProperty(r)){var pt=a[r];if(pt!=null)switch(r){case"name":c=pt;break;case"type":_=pt;break;case"checked":I=pt;break;case"defaultChecked":tt=pt;break;case"value":f=pt;break;case"defaultValue":A=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(s(137,n));break;default:He(t,n,r,pt,a,null)}}Wn(t,f,A,I,tt,_,c,!1);return;case"select":ve("invalid",t),r=_=f=null;for(c in a)if(a.hasOwnProperty(c)&&(A=a[c],A!=null))switch(c){case"value":f=A;break;case"defaultValue":_=A;break;case"multiple":r=A;default:He(t,n,c,A,a,null)}n=f,a=_,t.multiple=!!r,n!=null?qn(t,!!r,n,!1):a!=null&&qn(t,!!r,a,!0);return;case"textarea":ve("invalid",t),f=c=r=null;for(_ in a)if(a.hasOwnProperty(_)&&(A=a[_],A!=null))switch(_){case"value":r=A;break;case"defaultValue":c=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:He(t,n,_,A,a,null)}sn(t,r,c,f);return;case"option":for(I in a)a.hasOwnProperty(I)&&(r=a[I],r!=null)&&(I==="selected"?t.selected=r&&typeof r!="function"&&typeof r!="symbol":He(t,n,I,r,a,null));return;case"dialog":ve("beforetoggle",t),ve("toggle",t),ve("cancel",t),ve("close",t);break;case"iframe":case"object":ve("load",t);break;case"video":case"audio":for(r=0;r<So.length;r++)ve(So[r],t);break;case"image":ve("error",t),ve("load",t);break;case"details":ve("toggle",t);break;case"embed":case"source":case"link":ve("error",t),ve("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in a)if(a.hasOwnProperty(tt)&&(r=a[tt],r!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:He(t,n,tt,r,a,null)}return;default:if(Fs(n)){for(pt in a)a.hasOwnProperty(pt)&&(r=a[pt],r!==void 0&&Ff(t,n,pt,r,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(r=a[A],r!=null&&He(t,n,A,r,a,null))}function Gx(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,_=null,A=null,I=null,tt=null,pt=null;for(ut in a){var xt=a[ut];if(a.hasOwnProperty(ut)&&xt!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":I=xt;default:r.hasOwnProperty(ut)||He(t,n,ut,null,r,xt)}}for(var it in r){var ut=r[it];if(xt=a[it],r.hasOwnProperty(it)&&(ut!=null||xt!=null))switch(it){case"type":f=ut;break;case"name":c=ut;break;case"checked":tt=ut;break;case"defaultChecked":pt=ut;break;case"value":_=ut;break;case"defaultValue":A=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:ut!==xt&&He(t,n,it,ut,r,xt)}}Un(t,_,A,I,tt,pt,f,c);return;case"select":ut=_=A=it=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":ut=I;default:r.hasOwnProperty(f)||He(t,n,f,null,r,I)}for(c in r)if(f=r[c],I=a[c],r.hasOwnProperty(c)&&(f!=null||I!=null))switch(c){case"value":it=f;break;case"defaultValue":A=f;break;case"multiple":_=f;default:f!==I&&He(t,n,c,f,r,I)}n=A,a=_,r=ut,it!=null?qn(t,!!a,it,!1):!!r!=!!a&&(n!=null?qn(t,!!a,n,!0):qn(t,!!a,a?[]:"",!1));return;case"textarea":ut=it=null;for(A in a)if(c=a[A],a.hasOwnProperty(A)&&c!=null&&!r.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:He(t,n,A,null,r,c)}for(_ in r)if(c=r[_],f=a[_],r.hasOwnProperty(_)&&(c!=null||f!=null))switch(_){case"value":it=c;break;case"defaultValue":ut=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&He(t,n,_,c,r,f)}Oe(t,it,ut);return;case"option":for(var Vt in a)it=a[Vt],a.hasOwnProperty(Vt)&&it!=null&&!r.hasOwnProperty(Vt)&&(Vt==="selected"?t.selected=!1:He(t,n,Vt,null,r,it));for(I in r)it=r[I],ut=a[I],r.hasOwnProperty(I)&&it!==ut&&(it!=null||ut!=null)&&(I==="selected"?t.selected=it&&typeof it!="function"&&typeof it!="symbol":He(t,n,I,it,r,ut));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)it=a[te],a.hasOwnProperty(te)&&it!=null&&!r.hasOwnProperty(te)&&He(t,n,te,null,r,it);for(tt in r)if(it=r[tt],ut=a[tt],r.hasOwnProperty(tt)&&it!==ut&&(it!=null||ut!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(s(137,n));break;default:He(t,n,tt,it,r,ut)}return;default:if(Fs(n)){for(var Ge in a)it=a[Ge],a.hasOwnProperty(Ge)&&it!==void 0&&!r.hasOwnProperty(Ge)&&Ff(t,n,Ge,void 0,r,it);for(pt in r)it=r[pt],ut=a[pt],!r.hasOwnProperty(pt)||it===ut||it===void 0&&ut===void 0||Ff(t,n,pt,it,r,ut);return}}for(var j in a)it=a[j],a.hasOwnProperty(j)&&it!=null&&!r.hasOwnProperty(j)&&He(t,n,j,null,r,it);for(xt in r)it=r[xt],ut=a[xt],!r.hasOwnProperty(xt)||it===ut||it==null&&ut==null||He(t,n,xt,it,r,ut)}function Wg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Vx(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],f=c.transferSize,_=c.initiatorType,A=c.duration;if(f&&A&&Wg(_)){for(_=0,A=c.responseEnd,r+=1;r<a.length;r++){var I=a[r],tt=I.startTime;if(tt>A)break;var pt=I.transferSize,xt=I.initiatorType;pt&&Wg(xt)&&(I=I.responseEnd,_+=pt*(I<A?1:(A-tt)/(I-tt)))}if(--r,n+=8*(f+_)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Bf=null,If=null;function jl(t){return t.nodeType===9?t:t.ownerDocument}function qg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Yg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Hf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Gf=null;function Xx(){var t=window.event;return t&&t.type==="popstate"?t===Gf?!1:(Gf=t,!0):(Gf=null,!1)}var jg=typeof setTimeout=="function"?setTimeout:void 0,kx=typeof clearTimeout=="function"?clearTimeout:void 0,Zg=typeof Promise=="function"?Promise:void 0,Wx=typeof queueMicrotask=="function"?queueMicrotask:typeof Zg<"u"?function(t){return Zg.resolve(null).then(t).catch(qx)}:jg;function qx(t){setTimeout(function(){throw t})}function Ga(t){return t==="head"}function Kg(t,n){var a=n,r=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(c),pr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Mo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Mo(a);for(var f=a.firstChild;f;){var _=f.nextSibling,A=f.nodeName;f[ns]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&Mo(t.ownerDocument.body);a=c}while(a);pr(n)}function Qg(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function Vf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Vf(a),Hr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Yx(t,n,a,r){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[ns])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ci(t.nextSibling),t===null)break}return null}function jx(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ci(t.nextSibling),t===null))return null;return t}function Jg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=ci(t.nextSibling),t===null))return null;return t}function Xf(t){return t.data==="$?"||t.data==="$~"}function kf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Zx(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function ci(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Wf=null;function $g(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return ci(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function t0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function e0(t,n,a){switch(n=jl(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Mo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Hr(t)}var ui=new Map,n0=new Set;function Zl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ua=F.d;F.d={f:Kx,r:Qx,D:Jx,C:$x,L:tS,m:eS,X:iS,S:nS,M:aS};function Kx(){var t=ua.f(),n=Hl();return t||n}function Qx(t){var n=Ea(t);n!==null&&n.tag===5&&n.type==="form"?xm(n):ua.r(t)}var fr=typeof document>"u"?null:document;function i0(t,n,a){var r=fr;if(r&&typeof n=="string"&&n){var c=se(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),n0.has(c)||(n0.add(c),t={rel:t,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),En(n,"link",t),W(n),r.head.appendChild(n)))}}function Jx(t){ua.D(t),i0("dns-prefetch",t,null)}function $x(t,n){ua.C(t,n),i0("preconnect",t,n)}function tS(t,n,a){ua.L(t,n,a);var r=fr;if(r&&t&&n){var c='link[rel="preload"][as="'+se(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+se(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+se(a.imageSizes)+'"]')):c+='[href="'+se(t)+'"]';var f=c;switch(n){case"style":f=hr(t);break;case"script":f=dr(t)}ui.has(f)||(t=y({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ui.set(f,t),r.querySelector(c)!==null||n==="style"&&r.querySelector(Eo(f))||n==="script"&&r.querySelector(bo(f))||(n=r.createElement("link"),En(n,"link",t),W(n),r.head.appendChild(n)))}}function eS(t,n){ua.m(t,n);var a=fr;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+se(r)+'"][href="'+se(t)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=dr(t)}if(!ui.has(f)&&(t=y({rel:"modulepreload",href:t},n),ui.set(f,t),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(bo(f)))return}r=a.createElement("link"),En(r,"link",t),W(r),a.head.appendChild(r)}}}function nS(t,n,a){ua.S(t,n,a);var r=fr;if(r&&t){var c=R(r).hoistableStyles,f=hr(t);n=n||"default";var _=c.get(f);if(!_){var A={loading:0,preload:null};if(_=r.querySelector(Eo(f)))A.loading=5;else{t=y({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ui.get(f))&&qf(t,a);var I=_=r.createElement("link");W(I),En(I,"link",t),I._p=new Promise(function(tt,pt){I.onload=tt,I.onerror=pt}),I.addEventListener("load",function(){A.loading|=1}),I.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Kl(_,n,r)}_={type:"stylesheet",instance:_,count:1,state:A},c.set(f,_)}}}function iS(t,n){ua.X(t,n);var a=fr;if(a&&t){var r=R(a).hoistableScripts,c=dr(t),f=r.get(c);f||(f=a.querySelector(bo(c)),f||(t=y({src:t,async:!0},n),(n=ui.get(c))&&Yf(t,n),f=a.createElement("script"),W(f),En(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function aS(t,n){ua.M(t,n);var a=fr;if(a&&t){var r=R(a).hoistableScripts,c=dr(t),f=r.get(c);f||(f=a.querySelector(bo(c)),f||(t=y({src:t,async:!0,type:"module"},n),(n=ui.get(c))&&Yf(t,n),f=a.createElement("script"),W(f),En(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function a0(t,n,a,r){var c=(c=et.current)?Zl(c):null;if(!c)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=hr(a.href),a=R(c).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=hr(a.href);var f=R(c).hoistableStyles,_=f.get(t);if(_||(c=c.ownerDocument||c,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=c.querySelector(Eo(t)))&&!f._p&&(_.instance=f,_.state.loading=5),ui.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ui.set(t,a),f||sS(c,t,a,_.state))),n&&r===null)throw Error(s(528,""));return _}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=dr(a),a=R(c).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function hr(t){return'href="'+se(t)+'"'}function Eo(t){return'link[rel="stylesheet"]['+t+"]"}function s0(t){return y({},t,{"data-precedence":t.precedence,precedence:null})}function sS(t,n,a,r){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=t.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),En(n,"link",a),W(n),t.head.appendChild(n))}function dr(t){return'[src="'+se(t)+'"]'}function bo(t){return"script[async]"+t}function r0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+se(a.href)+'"]');if(r)return n.instance=r,W(r),r;var c=y({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),W(r),En(r,"style",c),Kl(r,a.precedence,t),n.instance=r;case"stylesheet":c=hr(a.href);var f=t.querySelector(Eo(c));if(f)return n.state.loading|=4,n.instance=f,W(f),f;r=s0(a),(c=ui.get(c))&&qf(r,c),f=(t.ownerDocument||t).createElement("link"),W(f);var _=f;return _._p=new Promise(function(A,I){_.onload=A,_.onerror=I}),En(f,"link",r),n.state.loading|=4,Kl(f,a.precedence,t),n.instance=f;case"script":return f=dr(a.src),(c=t.querySelector(bo(f)))?(n.instance=c,W(c),c):(r=a,(c=ui.get(f))&&(r=y({},a),Yf(r,c)),t=t.ownerDocument||t,c=t.createElement("script"),W(c),En(c,"link",r),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Kl(r,a.precedence,t));return n.instance}function Kl(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,_=0;_<r.length;_++){var A=r[_];if(A.dataset.precedence===n)f=A;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function qf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Yf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Ql=null;function o0(t,n,a){if(Ql===null){var r=new Map,c=Ql=new Map;c.set(a,r)}else c=Ql,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[ns]||f[an]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var A=r.get(_);A?A.push(f):r.set(_,[f])}}return r}function l0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function rS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function c0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function oS(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=hr(r.href),f=n.querySelector(Eo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Jl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,W(f);return}f=n.ownerDocument||n,r=s0(r),(c=ui.get(c))&&qf(r,c),f=f.createElement("link"),W(f);var _=f;_._p=new Promise(function(A,I){_.onload=A,_.onerror=I}),En(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Jl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var jf=0;function lS(t,n){return t.stylesheets&&t.count===0&&tc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&tc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&jf===0&&(jf=62500*Vx());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&tc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>jf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function Jl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)tc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var $l=null;function tc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,$l=new Map,n.forEach(cS,t),$l=null,Jl.call(t))}function cS(t,n){if(!(n.state.loading&4)){var a=$l.get(t);if(a)var r=a.get(null);else{a=new Map,$l.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var _=c[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),r=_)}r&&a.set(null,r)}c=n.instance,_=c.getAttribute("data-precedence"),f=a.get(_)||r,f===r&&a.set(null,c),a.set(_,c),this.count++,r=Jl.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var To={$$typeof:P,Provider:null,Consumer:null,_currentValue:lt,_currentValue2:lt,_threadCount:0};function uS(t,n,a,r,c,f,_,A,I){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ae(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ae(0),this.hiddenUpdates=Ae(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function u0(t,n,a,r,c,f,_,A,I,tt,pt,xt){return t=new uS(t,n,a,_,I,tt,pt,xt,A),n=1,f===!0&&(n|=24),f=jn(3,null,null,n),t.current=f,f.stateNode=t,n=Au(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Du(f),t}function f0(t){return t?(t=ks,t):ks}function h0(t,n,a,r,c,f){c=f0(c),r.context===null?r.context=c:r.pendingContext=c,r=Da(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=Ua(t,r,n),a!==null&&(Gn(a,t,n),no(a,t,n))}function d0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Zf(t,n){d0(t,n),(t=t.alternate)&&d0(t,n)}function p0(t){if(t.tag===13||t.tag===31){var n=os(t,67108864);n!==null&&Gn(n,t,67108864),Zf(t,67108864)}}function m0(t){if(t.tag===13||t.tag===31){var n=$n();n=Os(n);var a=os(t,n);a!==null&&Gn(a,t,n),Zf(t,n)}}var ec=!0;function fS(t,n,a,r){var c=L.T;L.T=null;var f=F.p;try{F.p=2,Kf(t,n,a,r)}finally{F.p=f,L.T=c}}function hS(t,n,a,r){var c=L.T;L.T=null;var f=F.p;try{F.p=8,Kf(t,n,a,r)}finally{F.p=f,L.T=c}}function Kf(t,n,a,r){if(ec){var c=Qf(r);if(c===null)zf(t,n,r,nc,a),_0(t,r);else if(pS(c,t,n,a,r))r.stopPropagation();else if(_0(t,r),n&4&&-1<dS.indexOf(t)){for(;c!==null;){var f=Ea(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Mt(f.pendingLanes);if(_!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;_;){var I=1<<31-Nt(_);A.entanglements[1]|=I,_&=~I}Fi(f),(Le&6)===0&&(Bl=m()+500,xo(0))}}break;case 31:case 13:A=os(f,2),A!==null&&Gn(A,f,2),Hl(),Zf(f,2)}if(f=Qf(r),f===null&&zf(t,n,r,nc,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else zf(t,n,r,null,a)}}function Qf(t){return t=Jc(t),Jf(t)}var nc=null;function Jf(t){if(nc=null,t=Ma(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return nc=t,null}function g0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(z()){case Z:return 2;case ft:return 8;case rt:case Dt:return 32;case Rt:return 268435456;default:return 32}default:return 32}}var $f=!1,Va=null,Xa=null,ka=null,Ao=new Map,Ro=new Map,Wa=[],dS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function _0(t,n){switch(t){case"focusin":case"focusout":Va=null;break;case"dragenter":case"dragleave":Xa=null;break;case"mouseover":case"mouseout":ka=null;break;case"pointerover":case"pointerout":Ao.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(n.pointerId)}}function Co(t,n,a,r,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Ea(n),n!==null&&p0(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function pS(t,n,a,r,c){switch(n){case"focusin":return Va=Co(Va,t,n,a,r,c),!0;case"dragenter":return Xa=Co(Xa,t,n,a,r,c),!0;case"mouseover":return ka=Co(ka,t,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return Ao.set(f,Co(Ao.get(f)||null,t,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,Ro.set(f,Co(Ro.get(f)||null,t,n,a,r,c)),!0}return!1}function v0(t){var n=Ma(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,zs(t.priority,function(){m0(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,zs(t.priority,function(){m0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ic(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Qf(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);Qc=r,a.target.dispatchEvent(r),Qc=null}else return n=Ea(a),n!==null&&p0(n),t.blockedOn=a,!1;n.shift()}return!0}function x0(t,n,a){ic(t)&&a.delete(n)}function mS(){$f=!1,Va!==null&&ic(Va)&&(Va=null),Xa!==null&&ic(Xa)&&(Xa=null),ka!==null&&ic(ka)&&(ka=null),Ao.forEach(x0),Ro.forEach(x0)}function ac(t,n){t.blockedOn===n&&(t.blockedOn=null,$f||($f=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,mS)))}var sc=null;function S0(t){sc!==t&&(sc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){sc===t&&(sc=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],c=t[n+2];if(typeof r!="function"){if(Jf(r||a)===null)continue;break}var f=Ea(a);f!==null&&(t.splice(n,3),n-=3,Ku(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function pr(t){function n(I){return ac(I,t)}Va!==null&&ac(Va,t),Xa!==null&&ac(Xa,t),ka!==null&&ac(ka,t),Ao.forEach(n),Ro.forEach(n);for(var a=0;a<Wa.length;a++){var r=Wa[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Wa.length&&(a=Wa[0],a.blockedOn===null);)v0(a),a.blockedOn===null&&Wa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],_=c[dn]||null;if(typeof f=="function")_||S0(a);else if(_){var A=null;if(f&&f.hasAttribute("formAction")){if(c=f,_=f[dn]||null)A=_.formAction;else if(Jf(c)!==null)continue}else A=_.action;typeof A=="function"?a[r+1]=A:(a.splice(r,3),r-=3),S0(a)}}}function y0(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return c=_})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function th(t){this._internalRoot=t}rc.prototype.render=th.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=$n();h0(a,r,t,n,null,null)},rc.prototype.unmount=th.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;h0(t.current,2,null,t,null,null),Hl(),n[qi]=null}};function rc(t){this._internalRoot=t}rc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ni();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Wa.length&&n!==0&&n<Wa[a].priority;a++);Wa.splice(a,0,t),a===0&&v0(t)}};var M0=e.version;if(M0!=="19.2.4")throw Error(s(527,M0,"19.2.4"));F.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=d(n),t=t!==null?S(t):null,t=t===null?null:t.stateNode,t};var gS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oc.isDisabled&&oc.supportsFiber)try{bt=oc.inject(gS),yt=oc}catch{}}return Do.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",c=wm,f=Dm,_=Um;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=u0(t,1,!1,null,null,a,r,null,c,f,_,y0),t[qi]=n.current,Pf(t),new th(n)},Do.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,c="",f=wm,_=Dm,A=Um,I=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=u0(t,1,!0,n,a??null,r,c,I,f,_,A,y0),n.context=f0(null),a=n.current,r=$n(),r=Os(r),c=Da(r),c.callback=null,Ua(a,c,r),a=r,n.current.lanes=a,wn(n,a),Fi(n),t[qi]=n.current,Pf(t),new rc(n)},Do.version="19.2.4",Do}var L0;function AS(){if(L0)return ih.exports;L0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),ih.exports=TS(),ih.exports}var RS=AS();const Pd="183",CS=0,N0=1,wS=2,Oc=1,DS=2,Io=3,es=0,Xn=1,ga=2,_a=0,wr=1,Gh=2,O0=3,P0=4,US=5,Rs=100,LS=101,NS=102,OS=103,PS=104,zS=200,FS=201,BS=202,IS=203,Vh=204,Xh=205,HS=206,GS=207,VS=208,XS=209,kS=210,WS=211,qS=212,YS=213,jS=214,kh=0,Wh=1,qh=2,Ur=3,Yh=4,jh=5,Zh=6,Kh=7,L_=0,ZS=1,KS=2,Vi=0,N_=1,O_=2,P_=3,z_=4,F_=5,B_=6,I_=7,H_=300,Ls=301,Lr=302,oh=303,lh=304,Yc=306,Qh=1e3,ni=1001,Jh=1002,bn=1003,QS=1004,lc=1005,hn=1006,ch=1007,ws=1008,di=1009,G_=1010,V_=1011,Vo=1012,zd=1013,Xi=1014,Ci=1015,ki=1016,Fd=1017,Bd=1018,Xo=1020,X_=35902,k_=35899,W_=1021,q_=1022,pi=1023,xa=1026,Ds=1027,Y_=1028,Id=1029,Nr=1030,Hd=1031,Gd=1033,Pc=33776,zc=33777,Fc=33778,Bc=33779,$h=35840,td=35841,ed=35842,nd=35843,id=36196,ad=37492,sd=37496,rd=37488,od=37489,ld=37490,cd=37491,ud=37808,fd=37809,hd=37810,dd=37811,pd=37812,md=37813,gd=37814,_d=37815,vd=37816,xd=37817,Sd=37818,yd=37819,Md=37820,Ed=37821,bd=36492,Td=36494,Ad=36495,Rd=36283,Cd=36284,wd=36285,Dd=36286,JS=3200,$S=0,ty=1,$a="",hi="srgb",Or="srgb-linear",Hc="linear",Be="srgb",mr=7680,z0=519,ey=512,ny=513,iy=514,Vd=515,ay=516,sy=517,Xd=518,ry=519,F0=35044,B0="300 es",Gi=2e3,Gc=2001;function oy(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Vc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function ly(){const o=Vc("canvas");return o.style.display="block",o}const I0={};function H0(...o){const e="THREE."+o.shift();console.log(e,...o)}function j_(o){const e=o[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function ne(...o){o=j_(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...o)}}function Ue(...o){o=j_(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...o)}}function Xc(...o){const e=o.join(" ");e in I0||(I0[e]=!0,ne(...o))}function cy(o,e,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}const uy={[kh]:Wh,[qh]:Zh,[Yh]:Kh,[Ur]:jh,[Wh]:kh,[Zh]:qh,[Kh]:Yh,[jh]:Ur};class zr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],uh=Math.PI/180,Ud=180/Math.PI;function Wo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(An[o&255]+An[o>>8&255]+An[o>>16&255]+An[o>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[i&63|128]+An[i>>8&255]+"-"+An[i>>16&255]+An[i>>24&255]+An[s&255]+An[s>>8&255]+An[s>>16&255]+An[s>>24&255]).toLowerCase()}function Ee(o,e,i){return Math.max(e,Math.min(i,o))}function fy(o,e){return(o%e+e)%e}function fh(o,e,i){return(1-i)*o+i*e}function Uo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Vn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class le{constructor(e=0,i=0){le.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Ee(this.x,e.x,i.x),this.y=Ee(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Ee(this.x,e,i),this.y=Ee(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ee(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Ee(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*s-h*l+e.x,this.y=u*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fr{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,u,h,p){let g=s[l+0],d=s[l+1],S=s[l+2],y=s[l+3],v=u[h+0],E=u[h+1],b=u[h+2],C=u[h+3];if(y!==C||g!==v||d!==E||S!==b){let M=g*v+d*E+S*b+y*C;M<0&&(v=-v,E=-E,b=-b,C=-C,M=-M);let x=1-p;if(M<.9995){const D=Math.acos(M),P=Math.sin(D);x=Math.sin(x*D)/P,p=Math.sin(p*D)/P,g=g*x+v*p,d=d*x+E*p,S=S*x+b*p,y=y*x+C*p}else{g=g*x+v*p,d=d*x+E*p,S=S*x+b*p,y=y*x+C*p;const D=1/Math.sqrt(g*g+d*d+S*S+y*y);g*=D,d*=D,S*=D,y*=D}}e[i]=g,e[i+1]=d,e[i+2]=S,e[i+3]=y}static multiplyQuaternionsFlat(e,i,s,l,u,h){const p=s[l],g=s[l+1],d=s[l+2],S=s[l+3],y=u[h],v=u[h+1],E=u[h+2],b=u[h+3];return e[i]=p*b+S*y+g*E-d*v,e[i+1]=g*b+S*v+d*y-p*E,e[i+2]=d*b+S*E+p*v-g*y,e[i+3]=S*b-p*y-g*v-d*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,u=e._z,h=e._order,p=Math.cos,g=Math.sin,d=p(s/2),S=p(l/2),y=p(u/2),v=g(s/2),E=g(l/2),b=g(u/2);switch(h){case"XYZ":this._x=v*S*y+d*E*b,this._y=d*E*y-v*S*b,this._z=d*S*b+v*E*y,this._w=d*S*y-v*E*b;break;case"YXZ":this._x=v*S*y+d*E*b,this._y=d*E*y-v*S*b,this._z=d*S*b-v*E*y,this._w=d*S*y+v*E*b;break;case"ZXY":this._x=v*S*y-d*E*b,this._y=d*E*y+v*S*b,this._z=d*S*b+v*E*y,this._w=d*S*y-v*E*b;break;case"ZYX":this._x=v*S*y-d*E*b,this._y=d*E*y+v*S*b,this._z=d*S*b-v*E*y,this._w=d*S*y+v*E*b;break;case"YZX":this._x=v*S*y+d*E*b,this._y=d*E*y+v*S*b,this._z=d*S*b-v*E*y,this._w=d*S*y-v*E*b;break;case"XZY":this._x=v*S*y-d*E*b,this._y=d*E*y-v*S*b,this._z=d*S*b+v*E*y,this._w=d*S*y+v*E*b;break;default:ne("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],u=i[8],h=i[1],p=i[5],g=i[9],d=i[2],S=i[6],y=i[10],v=s+p+y;if(v>0){const E=.5/Math.sqrt(v+1);this._w=.25/E,this._x=(S-g)*E,this._y=(u-d)*E,this._z=(h-l)*E}else if(s>p&&s>y){const E=2*Math.sqrt(1+s-p-y);this._w=(S-g)/E,this._x=.25*E,this._y=(l+h)/E,this._z=(u+d)/E}else if(p>y){const E=2*Math.sqrt(1+p-s-y);this._w=(u-d)/E,this._x=(l+h)/E,this._y=.25*E,this._z=(g+S)/E}else{const E=2*Math.sqrt(1+y-s-p);this._w=(h-l)/E,this._x=(u+d)/E,this._y=(g+S)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ee(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,u=e._z,h=e._w,p=i._x,g=i._y,d=i._z,S=i._w;return this._x=s*S+h*p+l*d-u*g,this._y=l*S+h*g+u*p-s*d,this._z=u*S+h*d+s*g-l*p,this._w=h*S-s*p-l*g-u*d,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,u=e._z,h=e._w,p=this.dot(e);p<0&&(s=-s,l=-l,u=-u,h=-h,p=-p);let g=1-i;if(p<.9995){const d=Math.acos(p),S=Math.sin(d);g=Math.sin(g*d)/S,i=Math.sin(i*d)/S,this._x=this._x*g+s*i,this._y=this._y*g+l*i,this._z=this._z*g+u*i,this._w=this._w*g+h*i,this._onChangeCallback()}else this._x=this._x*g+s*i,this._y=this._y*g+l*i,this._z=this._z*g+u*i,this._w=this._w*g+h*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class at{constructor(e=0,i=0,s=0){at.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(G0.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(G0.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,u=e.x,h=e.y,p=e.z,g=e.w,d=2*(h*l-p*s),S=2*(p*i-u*l),y=2*(u*s-h*i);return this.x=i+g*d+h*y-p*S,this.y=s+g*S+p*d-u*y,this.z=l+g*y+u*S-h*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Ee(this.x,e.x,i.x),this.y=Ee(this.y,e.y,i.y),this.z=Ee(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Ee(this.x,e,i),this.y=Ee(this.y,e,i),this.z=Ee(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ee(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,u=e.z,h=i.x,p=i.y,g=i.z;return this.x=l*g-u*p,this.y=u*h-s*g,this.z=s*p-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return hh.copy(this).projectOnVector(e),this.sub(hh)}reflect(e){return this.sub(hh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Ee(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hh=new at,G0=new Fr;class de{constructor(e,i,s,l,u,h,p,g,d){de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,h,p,g,d)}set(e,i,s,l,u,h,p,g,d){const S=this.elements;return S[0]=e,S[1]=l,S[2]=p,S[3]=i,S[4]=u,S[5]=g,S[6]=s,S[7]=h,S[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,h=s[0],p=s[3],g=s[6],d=s[1],S=s[4],y=s[7],v=s[2],E=s[5],b=s[8],C=l[0],M=l[3],x=l[6],D=l[1],P=l[4],N=l[7],X=l[2],H=l[5],B=l[8];return u[0]=h*C+p*D+g*X,u[3]=h*M+p*P+g*H,u[6]=h*x+p*N+g*B,u[1]=d*C+S*D+y*X,u[4]=d*M+S*P+y*H,u[7]=d*x+S*N+y*B,u[2]=v*C+E*D+b*X,u[5]=v*M+E*P+b*H,u[8]=v*x+E*N+b*B,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],p=e[5],g=e[6],d=e[7],S=e[8];return i*h*S-i*p*d-s*u*S+s*p*g+l*u*d-l*h*g}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],p=e[5],g=e[6],d=e[7],S=e[8],y=S*h-p*d,v=p*g-S*u,E=d*u-h*g,b=i*y+s*v+l*E;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=y*C,e[1]=(l*d-S*s)*C,e[2]=(p*s-l*h)*C,e[3]=v*C,e[4]=(S*i-l*g)*C,e[5]=(l*u-p*i)*C,e[6]=E*C,e[7]=(s*g-d*i)*C,e[8]=(h*i-s*u)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,u,h,p){const g=Math.cos(u),d=Math.sin(u);return this.set(s*g,s*d,-s*(g*h+d*p)+h+e,-l*d,l*g,-l*(-d*h+g*p)+p+i,0,0,1),this}scale(e,i){return this.premultiply(dh.makeScale(e,i)),this}rotate(e){return this.premultiply(dh.makeRotation(-e)),this}translate(e,i){return this.premultiply(dh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const dh=new de,V0=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),X0=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hy(){const o={enabled:!0,workingColorSpace:Or,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Be&&(l.r=va(l.r),l.g=va(l.g),l.b=va(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Be&&(l.r=Dr(l.r),l.g=Dr(l.g),l.b=Dr(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===$a?Hc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Xc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Xc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Or]:{primaries:e,whitePoint:s,transfer:Hc,toXYZ:V0,fromXYZ:X0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:e,whitePoint:s,transfer:Be,toXYZ:V0,fromXYZ:X0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),o}const Re=hy();function va(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Dr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let gr;class dy{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{gr===void 0&&(gr=Vc("canvas")),gr.width=e.width,gr.height=e.height;const l=gr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=gr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Vc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=va(u[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(va(i[s]/255)*255):i[s]=va(i[s]);return{data:i,width:e.width,height:e.height}}else return ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let py=0;class kd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:py++}),this.uuid=Wo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,p=l.length;h<p;h++)l[h].isDataTexture?u.push(ph(l[h].image)):u.push(ph(l[h]))}else u=ph(l);s.url=u}return i||(e.images[this.uuid]=s),s}}function ph(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?dy.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ne("Texture: Unable to serialize Texture."),{})}let my=0;const mh=new at;class Pn extends zr{constructor(e=Pn.DEFAULT_IMAGE,i=Pn.DEFAULT_MAPPING,s=ni,l=ni,u=hn,h=ws,p=pi,g=di,d=Pn.DEFAULT_ANISOTROPY,S=$a){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:my++}),this.uuid=Wo(),this.name="",this.source=new kd(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=d,this.format=p,this.internalFormat=null,this.type=g,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(mh).x}get height(){return this.source.getSize(mh).y}get depth(){return this.source.getSize(mh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){ne(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ne(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==H_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qh:e.x=e.x-Math.floor(e.x);break;case ni:e.x=e.x<0?0:1;break;case Jh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qh:e.y=e.y-Math.floor(e.y);break;case ni:e.y=e.y<0?0:1;break;case Jh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=H_;Pn.DEFAULT_ANISOTROPY=1;class $e{constructor(e=0,i=0,s=0,l=1){$e.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,u;const g=e.elements,d=g[0],S=g[4],y=g[8],v=g[1],E=g[5],b=g[9],C=g[2],M=g[6],x=g[10];if(Math.abs(S-v)<.01&&Math.abs(y-C)<.01&&Math.abs(b-M)<.01){if(Math.abs(S+v)<.1&&Math.abs(y+C)<.1&&Math.abs(b+M)<.1&&Math.abs(d+E+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(d+1)/2,N=(E+1)/2,X=(x+1)/2,H=(S+v)/4,B=(y+C)/4,T=(b+M)/4;return P>N&&P>X?P<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(P),l=H/s,u=B/s):N>X?N<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(N),s=H/l,u=T/l):X<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(X),s=B/u,l=T/u),this.set(s,l,u,i),this}let D=Math.sqrt((M-b)*(M-b)+(y-C)*(y-C)+(v-S)*(v-S));return Math.abs(D)<.001&&(D=1),this.x=(M-b)/D,this.y=(y-C)/D,this.z=(v-S)/D,this.w=Math.acos((d+E+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Ee(this.x,e.x,i.x),this.y=Ee(this.y,e.y,i.y),this.z=Ee(this.z,e.z,i.z),this.w=Ee(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Ee(this.x,e,i),this.y=Ee(this.y,e,i),this.z=Ee(this.z,e,i),this.w=Ee(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ee(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gy extends zr{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new $e(0,0,e,i),this.scissorTest=!1,this.viewport=new $e(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},u=new Pn(l),h=s.count;for(let p=0;p<h;p++)this.textures[p]=u.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:hn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new kd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wi extends gy{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class Z_ extends Pn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=bn,this.minFilter=bn,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _y extends Pn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=bn,this.minFilter=bn,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nn{constructor(e,i,s,l,u,h,p,g,d,S,y,v,E,b,C,M){nn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,h,p,g,d,S,y,v,E,b,C,M)}set(e,i,s,l,u,h,p,g,d,S,y,v,E,b,C,M){const x=this.elements;return x[0]=e,x[4]=i,x[8]=s,x[12]=l,x[1]=u,x[5]=h,x[9]=p,x[13]=g,x[2]=d,x[6]=S,x[10]=y,x[14]=v,x[3]=E,x[7]=b,x[11]=C,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nn().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/_r.setFromMatrixColumn(e,0).length(),u=1/_r.setFromMatrixColumn(e,1).length(),h=1/_r.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,u=e.z,h=Math.cos(s),p=Math.sin(s),g=Math.cos(l),d=Math.sin(l),S=Math.cos(u),y=Math.sin(u);if(e.order==="XYZ"){const v=h*S,E=h*y,b=p*S,C=p*y;i[0]=g*S,i[4]=-g*y,i[8]=d,i[1]=E+b*d,i[5]=v-C*d,i[9]=-p*g,i[2]=C-v*d,i[6]=b+E*d,i[10]=h*g}else if(e.order==="YXZ"){const v=g*S,E=g*y,b=d*S,C=d*y;i[0]=v+C*p,i[4]=b*p-E,i[8]=h*d,i[1]=h*y,i[5]=h*S,i[9]=-p,i[2]=E*p-b,i[6]=C+v*p,i[10]=h*g}else if(e.order==="ZXY"){const v=g*S,E=g*y,b=d*S,C=d*y;i[0]=v-C*p,i[4]=-h*y,i[8]=b+E*p,i[1]=E+b*p,i[5]=h*S,i[9]=C-v*p,i[2]=-h*d,i[6]=p,i[10]=h*g}else if(e.order==="ZYX"){const v=h*S,E=h*y,b=p*S,C=p*y;i[0]=g*S,i[4]=b*d-E,i[8]=v*d+C,i[1]=g*y,i[5]=C*d+v,i[9]=E*d-b,i[2]=-d,i[6]=p*g,i[10]=h*g}else if(e.order==="YZX"){const v=h*g,E=h*d,b=p*g,C=p*d;i[0]=g*S,i[4]=C-v*y,i[8]=b*y+E,i[1]=y,i[5]=h*S,i[9]=-p*S,i[2]=-d*S,i[6]=E*y+b,i[10]=v-C*y}else if(e.order==="XZY"){const v=h*g,E=h*d,b=p*g,C=p*d;i[0]=g*S,i[4]=-y,i[8]=d*S,i[1]=v*y+C,i[5]=h*S,i[9]=E*y-b,i[2]=b*y-E,i[6]=p*S,i[10]=C*y+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vy,e,xy)}lookAt(e,i,s){const l=this.elements;return ti.subVectors(e,i),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Ya.crossVectors(s,ti),Ya.lengthSq()===0&&(Math.abs(s.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Ya.crossVectors(s,ti)),Ya.normalize(),cc.crossVectors(ti,Ya),l[0]=Ya.x,l[4]=cc.x,l[8]=ti.x,l[1]=Ya.y,l[5]=cc.y,l[9]=ti.y,l[2]=Ya.z,l[6]=cc.z,l[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,h=s[0],p=s[4],g=s[8],d=s[12],S=s[1],y=s[5],v=s[9],E=s[13],b=s[2],C=s[6],M=s[10],x=s[14],D=s[3],P=s[7],N=s[11],X=s[15],H=l[0],B=l[4],T=l[8],U=l[12],ht=l[1],G=l[5],Q=l[9],st=l[13],ot=l[2],J=l[6],L=l[10],F=l[14],lt=l[3],mt=l[7],Et=l[11],O=l[15];return u[0]=h*H+p*ht+g*ot+d*lt,u[4]=h*B+p*G+g*J+d*mt,u[8]=h*T+p*Q+g*L+d*Et,u[12]=h*U+p*st+g*F+d*O,u[1]=S*H+y*ht+v*ot+E*lt,u[5]=S*B+y*G+v*J+E*mt,u[9]=S*T+y*Q+v*L+E*Et,u[13]=S*U+y*st+v*F+E*O,u[2]=b*H+C*ht+M*ot+x*lt,u[6]=b*B+C*G+M*J+x*mt,u[10]=b*T+C*Q+M*L+x*Et,u[14]=b*U+C*st+M*F+x*O,u[3]=D*H+P*ht+N*ot+X*lt,u[7]=D*B+P*G+N*J+X*mt,u[11]=D*T+P*Q+N*L+X*Et,u[15]=D*U+P*st+N*F+X*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],u=e[12],h=e[1],p=e[5],g=e[9],d=e[13],S=e[2],y=e[6],v=e[10],E=e[14],b=e[3],C=e[7],M=e[11],x=e[15],D=g*E-d*v,P=p*E-d*y,N=p*v-g*y,X=h*E-d*S,H=h*v-g*S,B=h*y-p*S;return i*(C*D-M*P+x*N)-s*(b*D-M*X+x*H)+l*(b*P-C*X+x*B)-u*(b*N-C*H+M*B)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],p=e[5],g=e[6],d=e[7],S=e[8],y=e[9],v=e[10],E=e[11],b=e[12],C=e[13],M=e[14],x=e[15],D=i*p-s*h,P=i*g-l*h,N=i*d-u*h,X=s*g-l*p,H=s*d-u*p,B=l*d-u*g,T=S*C-y*b,U=S*M-v*b,ht=S*x-E*b,G=y*M-v*C,Q=y*x-E*C,st=v*x-E*M,ot=D*st-P*Q+N*G+X*ht-H*U+B*T;if(ot===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/ot;return e[0]=(p*st-g*Q+d*G)*J,e[1]=(l*Q-s*st-u*G)*J,e[2]=(C*B-M*H+x*X)*J,e[3]=(v*H-y*B-E*X)*J,e[4]=(g*ht-h*st-d*U)*J,e[5]=(i*st-l*ht+u*U)*J,e[6]=(M*N-b*B-x*P)*J,e[7]=(S*B-v*N+E*P)*J,e[8]=(h*Q-p*ht+d*T)*J,e[9]=(s*ht-i*Q-u*T)*J,e[10]=(b*H-C*N+x*D)*J,e[11]=(y*N-S*H-E*D)*J,e[12]=(p*U-h*G-g*T)*J,e[13]=(i*G-s*U+l*T)*J,e[14]=(C*P-b*X-M*D)*J,e[15]=(S*X-y*P+v*D)*J,this}scale(e){const i=this.elements,s=e.x,l=e.y,u=e.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,h=e.x,p=e.y,g=e.z,d=u*h,S=u*p;return this.set(d*h+s,d*p-l*g,d*g+l*p,0,d*p+l*g,S*p+s,S*g-l*h,0,d*g-l*p,S*g+l*h,u*g*g+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,u,h){return this.set(1,s,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,u=i._x,h=i._y,p=i._z,g=i._w,d=u+u,S=h+h,y=p+p,v=u*d,E=u*S,b=u*y,C=h*S,M=h*y,x=p*y,D=g*d,P=g*S,N=g*y,X=s.x,H=s.y,B=s.z;return l[0]=(1-(C+x))*X,l[1]=(E+N)*X,l[2]=(b-P)*X,l[3]=0,l[4]=(E-N)*H,l[5]=(1-(v+x))*H,l[6]=(M+D)*H,l[7]=0,l[8]=(b+P)*B,l[9]=(M-D)*B,l[10]=(1-(v+C))*B,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const u=this.determinant();if(u===0)return s.set(1,1,1),i.identity(),this;let h=_r.set(l[0],l[1],l[2]).length();const p=_r.set(l[4],l[5],l[6]).length(),g=_r.set(l[8],l[9],l[10]).length();u<0&&(h=-h),Ei.copy(this);const d=1/h,S=1/p,y=1/g;return Ei.elements[0]*=d,Ei.elements[1]*=d,Ei.elements[2]*=d,Ei.elements[4]*=S,Ei.elements[5]*=S,Ei.elements[6]*=S,Ei.elements[8]*=y,Ei.elements[9]*=y,Ei.elements[10]*=y,i.setFromRotationMatrix(Ei),s.x=h,s.y=p,s.z=g,this}makePerspective(e,i,s,l,u,h,p=Gi,g=!1){const d=this.elements,S=2*u/(i-e),y=2*u/(s-l),v=(i+e)/(i-e),E=(s+l)/(s-l);let b,C;if(g)b=u/(h-u),C=h*u/(h-u);else if(p===Gi)b=-(h+u)/(h-u),C=-2*h*u/(h-u);else if(p===Gc)b=-h/(h-u),C=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return d[0]=S,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=y,d[9]=E,d[13]=0,d[2]=0,d[6]=0,d[10]=b,d[14]=C,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,i,s,l,u,h,p=Gi,g=!1){const d=this.elements,S=2/(i-e),y=2/(s-l),v=-(i+e)/(i-e),E=-(s+l)/(s-l);let b,C;if(g)b=1/(h-u),C=h/(h-u);else if(p===Gi)b=-2/(h-u),C=-(h+u)/(h-u);else if(p===Gc)b=-1/(h-u),C=-u/(h-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return d[0]=S,d[4]=0,d[8]=0,d[12]=v,d[1]=0,d[5]=y,d[9]=0,d[13]=E,d[2]=0,d[6]=0,d[10]=b,d[14]=C,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const _r=new at,Ei=new nn,vy=new at(0,0,0),xy=new at(1,1,1),Ya=new at,cc=new at,ti=new at,k0=new nn,W0=new Fr;class Sa{constructor(e=0,i=0,s=0,l=Sa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,u=l[0],h=l[4],p=l[8],g=l[1],d=l[5],S=l[9],y=l[2],v=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(Ee(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-S,E),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(p,E),this._z=Math.atan2(g,d)):(this._y=Math.atan2(-y,u),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-y,E),this._z=Math.atan2(-h,d)):(this._y=0,this._z=Math.atan2(g,u));break;case"ZYX":this._y=Math.asin(-Ee(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(v,E),this._z=Math.atan2(g,u)):(this._x=0,this._z=Math.atan2(-h,d));break;case"YZX":this._z=Math.asin(Ee(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-S,d),this._y=Math.atan2(-y,u)):(this._x=0,this._y=Math.atan2(p,E));break;case"XZY":this._z=Math.asin(-Ee(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(p,u)):(this._x=Math.atan2(-S,E),this._y=0);break;default:ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return k0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(k0,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return W0.setFromEuler(this),this.setFromQuaternion(W0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sa.DEFAULT_ORDER="XYZ";class K_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sy=0;const q0=new at,vr=new Fr,fa=new nn,uc=new at,Lo=new at,yy=new at,My=new Fr,Y0=new at(1,0,0),j0=new at(0,1,0),Z0=new at(0,0,1),K0={type:"added"},Ey={type:"removed"},xr={type:"childadded",child:null},gh={type:"childremoved",child:null};class kn extends zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sy++}),this.uuid=Wo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kn.DEFAULT_UP.clone();const e=new at,i=new Sa,s=new Fr,l=new at(1,1,1);function u(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new nn},normalMatrix:{value:new de}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new K_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return vr.setFromAxisAngle(e,i),this.quaternion.multiply(vr),this}rotateOnWorldAxis(e,i){return vr.setFromAxisAngle(e,i),this.quaternion.premultiply(vr),this}rotateX(e){return this.rotateOnAxis(Y0,e)}rotateY(e){return this.rotateOnAxis(j0,e)}rotateZ(e){return this.rotateOnAxis(Z0,e)}translateOnAxis(e,i){return q0.copy(e).applyQuaternion(this.quaternion),this.position.add(q0.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Y0,e)}translateY(e){return this.translateOnAxis(j0,e)}translateZ(e){return this.translateOnAxis(Z0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fa.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?uc.copy(e):uc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fa.lookAt(Lo,uc,this.up):fa.lookAt(uc,Lo,this.up),this.quaternion.setFromRotationMatrix(fa),l&&(fa.extractRotation(l.matrixWorld),vr.setFromRotationMatrix(fa),this.quaternion.premultiply(vr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Ue("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(K0),xr.child=e,this.dispatchEvent(xr),xr.child=null):Ue("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Ey),gh.child=e,this.dispatchEvent(gh),gh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fa.multiply(e.parent.matrixWorld)),e.applyMatrix4(fa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(K0),xr.child=e,this.dispatchEvent(xr),xr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,e,yy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,My,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,u=this.matrix.elements;u[12]+=i-u[0]*i-u[4]*s-u[8]*l,u[13]+=s-u[1]*i-u[5]*s-u[9]*l,u[14]+=l-u[2]*i-u[6]*s-u[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(p,g){return p[g.uuid]===void 0&&(p[g.uuid]=g.toJSON(e)),g.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const g=p.shapes;if(Array.isArray(g))for(let d=0,S=g.length;d<S;d++){const y=g[d];u(e.shapes,y)}else u(e.shapes,g)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let g=0,d=this.material.length;g<d;g++)p.push(u(e.materials,this.material[g]));l.material=p}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const g=this.animations[p];l.animations.push(u(e.animations,g))}}if(i){const p=h(e.geometries),g=h(e.materials),d=h(e.textures),S=h(e.images),y=h(e.shapes),v=h(e.skeletons),E=h(e.animations),b=h(e.nodes);p.length>0&&(s.geometries=p),g.length>0&&(s.materials=g),d.length>0&&(s.textures=d),S.length>0&&(s.images=S),y.length>0&&(s.shapes=y),v.length>0&&(s.skeletons=v),E.length>0&&(s.animations=E),b.length>0&&(s.nodes=b)}return s.object=l,s;function h(p){const g=[];for(const d in p){const S=p[d];delete S.metadata,g.push(S)}return g}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}kn.DEFAULT_UP=new at(0,1,0);kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class fc extends kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const by={type:"move"};class _h{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new at,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new at),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new at,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new at),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,u=null,h=null;const p=this._targetRay,g=this._grip,d=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(d&&e.hand){h=!0;for(const C of e.hand.values()){const M=i.getJointPose(C,s),x=this._getHandJoint(d,C);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const S=d.joints["index-finger-tip"],y=d.joints["thumb-tip"],v=S.position.distanceTo(y.position),E=.02,b=.005;d.inputState.pinching&&v>E+b?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&v<=E-b&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else g!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,s),u!==null&&(g.matrix.fromArray(u.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,u.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(u.linearVelocity)):g.hasLinearVelocity=!1,u.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(u.angularVelocity)):g.hasAngularVelocity=!1));p!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(by)))}return p!==null&&(p.visible=l!==null),g!==null&&(g.visible=u!==null),d!==null&&(d.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new fc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const Q_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ja={h:0,s:0,l:0},hc={h:0,s:0,l:0};function vh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ne{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=hi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Re.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Re.workingColorSpace){return this.r=e,this.g=i,this.b=s,Re.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Re.workingColorSpace){if(e=fy(e,1),i=Ee(i,0,1),s=Ee(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,h=2*s-u;this.r=vh(h,u,e+1/3),this.g=vh(h,u,e),this.b=vh(h,u,e-1/3)}return Re.colorSpaceToWorking(this,l),this}setStyle(e,i=hi){function s(u){u!==void 0&&parseFloat(u)<1&&ne("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],p=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:ne("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=hi){const s=Q_[e.toLowerCase()];return s!==void 0?this.setHex(s,i):ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=va(e.r),this.g=va(e.g),this.b=va(e.b),this}copyLinearToSRGB(e){return this.r=Dr(e.r),this.g=Dr(e.g),this.b=Dr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hi){return Re.workingToColorSpace(Rn.copy(this),e),Math.round(Ee(Rn.r*255,0,255))*65536+Math.round(Ee(Rn.g*255,0,255))*256+Math.round(Ee(Rn.b*255,0,255))}getHexString(e=hi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Re.workingColorSpace){Re.workingToColorSpace(Rn.copy(this),i);const s=Rn.r,l=Rn.g,u=Rn.b,h=Math.max(s,l,u),p=Math.min(s,l,u);let g,d;const S=(p+h)/2;if(p===h)g=0,d=0;else{const y=h-p;switch(d=S<=.5?y/(h+p):y/(2-h-p),h){case s:g=(l-u)/y+(l<u?6:0);break;case l:g=(u-s)/y+2;break;case u:g=(s-l)/y+4;break}g/=6}return e.h=g,e.s=d,e.l=S,e}getRGB(e,i=Re.workingColorSpace){return Re.workingToColorSpace(Rn.copy(this),i),e.r=Rn.r,e.g=Rn.g,e.b=Rn.b,e}getStyle(e=hi){Re.workingToColorSpace(Rn.copy(this),e);const i=Rn.r,s=Rn.g,l=Rn.b;return e!==hi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(ja),this.setHSL(ja.h+e,ja.s+i,ja.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(ja),e.getHSL(hc);const s=fh(ja.h,hc.h,i),l=fh(ja.s,hc.s,i),u=fh(ja.l,hc.l,i);return this.setHSL(s,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rn=new Ne;Ne.NAMES=Q_;class Q0 extends kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sa,this.environmentIntensity=1,this.environmentRotation=new Sa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const bi=new at,ha=new at,xh=new at,da=new at,Sr=new at,yr=new at,J0=new at,Sh=new at,yh=new at,Mh=new at,Eh=new $e,bh=new $e,Th=new $e;class Ri{constructor(e=new at,i=new at,s=new at){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),bi.subVectors(e,i),l.cross(bi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,s,l,u){bi.subVectors(l,i),ha.subVectors(s,i),xh.subVectors(e,i);const h=bi.dot(bi),p=bi.dot(ha),g=bi.dot(xh),d=ha.dot(ha),S=ha.dot(xh),y=h*d-p*p;if(y===0)return u.set(0,0,0),null;const v=1/y,E=(d*g-p*S)*v,b=(h*S-p*g)*v;return u.set(1-E-b,b,E)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,da)===null?!1:da.x>=0&&da.y>=0&&da.x+da.y<=1}static getInterpolation(e,i,s,l,u,h,p,g){return this.getBarycoord(e,i,s,l,da)===null?(g.x=0,g.y=0,"z"in g&&(g.z=0),"w"in g&&(g.w=0),null):(g.setScalar(0),g.addScaledVector(u,da.x),g.addScaledVector(h,da.y),g.addScaledVector(p,da.z),g)}static getInterpolatedAttribute(e,i,s,l,u,h){return Eh.setScalar(0),bh.setScalar(0),Th.setScalar(0),Eh.fromBufferAttribute(e,i),bh.fromBufferAttribute(e,s),Th.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(Eh,u.x),h.addScaledVector(bh,u.y),h.addScaledVector(Th,u.z),h}static isFrontFacing(e,i,s,l){return bi.subVectors(s,i),ha.subVectors(e,i),bi.cross(ha).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bi.subVectors(this.c,this.b),ha.subVectors(this.a,this.b),bi.cross(ha).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ri.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,u){return Ri.getInterpolation(e,this.a,this.b,this.c,i,s,l,u)}containsPoint(e){return Ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,u=this.c;let h,p;Sr.subVectors(l,s),yr.subVectors(u,s),Sh.subVectors(e,s);const g=Sr.dot(Sh),d=yr.dot(Sh);if(g<=0&&d<=0)return i.copy(s);yh.subVectors(e,l);const S=Sr.dot(yh),y=yr.dot(yh);if(S>=0&&y<=S)return i.copy(l);const v=g*y-S*d;if(v<=0&&g>=0&&S<=0)return h=g/(g-S),i.copy(s).addScaledVector(Sr,h);Mh.subVectors(e,u);const E=Sr.dot(Mh),b=yr.dot(Mh);if(b>=0&&E<=b)return i.copy(u);const C=E*d-g*b;if(C<=0&&d>=0&&b<=0)return p=d/(d-b),i.copy(s).addScaledVector(yr,p);const M=S*b-E*y;if(M<=0&&y-S>=0&&E-b>=0)return J0.subVectors(u,l),p=(y-S)/(y-S+(E-b)),i.copy(l).addScaledVector(J0,p);const x=1/(M+C+v);return h=C*x,p=v*x,i.copy(s).addScaledVector(Sr,h).addScaledVector(yr,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class qo{constructor(e=new at(1/0,1/0,1/0),i=new at(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Ti.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Ti.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Ti.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,p=u.count;h<p;h++)e.isMesh===!0?e.getVertexPosition(h,Ti):Ti.fromBufferAttribute(u,h),Ti.applyMatrix4(e.matrixWorld),this.expandByPoint(Ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),dc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),dc.copy(s.boundingBox)),dc.applyMatrix4(e.matrixWorld),this.union(dc)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ti),Ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(No),pc.subVectors(this.max,No),Mr.subVectors(e.a,No),Er.subVectors(e.b,No),br.subVectors(e.c,No),Za.subVectors(Er,Mr),Ka.subVectors(br,Er),Ss.subVectors(Mr,br);let i=[0,-Za.z,Za.y,0,-Ka.z,Ka.y,0,-Ss.z,Ss.y,Za.z,0,-Za.x,Ka.z,0,-Ka.x,Ss.z,0,-Ss.x,-Za.y,Za.x,0,-Ka.y,Ka.x,0,-Ss.y,Ss.x,0];return!Ah(i,Mr,Er,br,pc)||(i=[1,0,0,0,1,0,0,0,1],!Ah(i,Mr,Er,br,pc))?!1:(mc.crossVectors(Za,Ka),i=[mc.x,mc.y,mc.z],Ah(i,Mr,Er,br,pc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const pa=[new at,new at,new at,new at,new at,new at,new at,new at],Ti=new at,dc=new qo,Mr=new at,Er=new at,br=new at,Za=new at,Ka=new at,Ss=new at,No=new at,pc=new at,mc=new at,ys=new at;function Ah(o,e,i,s,l){for(let u=0,h=o.length-3;u<=h;u+=3){ys.fromArray(o,u);const p=l.x*Math.abs(ys.x)+l.y*Math.abs(ys.y)+l.z*Math.abs(ys.z),g=e.dot(ys),d=i.dot(ys),S=s.dot(ys);if(Math.max(-Math.max(g,d,S),Math.min(g,d,S))>p)return!1}return!0}const fn=new at,gc=new le;let Ty=0;class Di{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ty++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=F0,this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)gc.fromBufferAttribute(this,i),gc.applyMatrix3(e),this.setXY(i,gc.x,gc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix3(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix4(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyNormalMatrix(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.transformDirection(e),this.setXYZ(i,fn.x,fn.y,fn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Uo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Vn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Uo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Uo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Uo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Uo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array),l=Vn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,u){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array),l=Vn(l,this.array),u=Vn(u,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==F0&&(e.usage=this.usage),e}}class J_ extends Di{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class $_ extends Di{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Ui extends Di{constructor(e,i,s){super(new Float32Array(e),i,s)}}const Ay=new qo,Oo=new at,Rh=new at;class jc{constructor(e=new at,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):Ay.setFromPoints(e).getCenter(s);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,s.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Oo.subVectors(e,this.center);const i=Oo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Oo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Oo.copy(e.center).add(Rh)),this.expandByPoint(Oo.copy(e.center).sub(Rh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Ry=0;const fi=new nn,Ch=new kn,Tr=new at,ei=new qo,Po=new qo,xn=new at;class Li extends zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ry++}),this.uuid=Wo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(oy(e)?$_:J_)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new de().getNormalMatrix(e);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,i,s){return fi.makeTranslation(e,i,s),this.applyMatrix4(fi),this}scale(e,i,s){return fi.makeScale(e,i,s),this.applyMatrix4(fi),this}lookAt(e){return Ch.lookAt(e),Ch.updateMatrix(),this.applyMatrix4(Ch.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Tr).negate(),this.translate(Tr.x,Tr.y,Tr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Ui(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new at(-1/0,-1/0,-1/0),new at(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];ei.setFromBufferAttribute(u),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new at,1/0);return}if(e){const s=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const p=i[u];Po.setFromBufferAttribute(p),this.morphTargetsRelative?(xn.addVectors(ei.min,Po.min),ei.expandByPoint(xn),xn.addVectors(ei.max,Po.max),ei.expandByPoint(xn)):(ei.expandByPoint(Po.min),ei.expandByPoint(Po.max))}ei.getCenter(s);let l=0;for(let u=0,h=e.count;u<h;u++)xn.fromBufferAttribute(e,u),l=Math.max(l,s.distanceToSquared(xn));if(i)for(let u=0,h=i.length;u<h;u++){const p=i[u],g=this.morphTargetsRelative;for(let d=0,S=p.count;d<S;d++)xn.fromBufferAttribute(p,d),g&&(Tr.fromBufferAttribute(e,d),xn.add(Tr)),l=Math.max(l,s.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Di(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),p=[],g=[];for(let T=0;T<s.count;T++)p[T]=new at,g[T]=new at;const d=new at,S=new at,y=new at,v=new le,E=new le,b=new le,C=new at,M=new at;function x(T,U,ht){d.fromBufferAttribute(s,T),S.fromBufferAttribute(s,U),y.fromBufferAttribute(s,ht),v.fromBufferAttribute(u,T),E.fromBufferAttribute(u,U),b.fromBufferAttribute(u,ht),S.sub(d),y.sub(d),E.sub(v),b.sub(v);const G=1/(E.x*b.y-b.x*E.y);isFinite(G)&&(C.copy(S).multiplyScalar(b.y).addScaledVector(y,-E.y).multiplyScalar(G),M.copy(y).multiplyScalar(E.x).addScaledVector(S,-b.x).multiplyScalar(G),p[T].add(C),p[U].add(C),p[ht].add(C),g[T].add(M),g[U].add(M),g[ht].add(M))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let T=0,U=D.length;T<U;++T){const ht=D[T],G=ht.start,Q=ht.count;for(let st=G,ot=G+Q;st<ot;st+=3)x(e.getX(st+0),e.getX(st+1),e.getX(st+2))}const P=new at,N=new at,X=new at,H=new at;function B(T){X.fromBufferAttribute(l,T),H.copy(X);const U=p[T];P.copy(U),P.sub(X.multiplyScalar(X.dot(U))).normalize(),N.crossVectors(H,U);const G=N.dot(g[T])<0?-1:1;h.setXYZW(T,P.x,P.y,P.z,G)}for(let T=0,U=D.length;T<U;++T){const ht=D[T],G=ht.start,Q=ht.count;for(let st=G,ot=G+Q;st<ot;st+=3)B(e.getX(st+0)),B(e.getX(st+1)),B(e.getX(st+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Di(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let v=0,E=s.count;v<E;v++)s.setXYZ(v,0,0,0);const l=new at,u=new at,h=new at,p=new at,g=new at,d=new at,S=new at,y=new at;if(e)for(let v=0,E=e.count;v<E;v+=3){const b=e.getX(v+0),C=e.getX(v+1),M=e.getX(v+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,C),h.fromBufferAttribute(i,M),S.subVectors(h,u),y.subVectors(l,u),S.cross(y),p.fromBufferAttribute(s,b),g.fromBufferAttribute(s,C),d.fromBufferAttribute(s,M),p.add(S),g.add(S),d.add(S),s.setXYZ(b,p.x,p.y,p.z),s.setXYZ(C,g.x,g.y,g.z),s.setXYZ(M,d.x,d.y,d.z)}else for(let v=0,E=i.count;v<E;v+=3)l.fromBufferAttribute(i,v+0),u.fromBufferAttribute(i,v+1),h.fromBufferAttribute(i,v+2),S.subVectors(h,u),y.subVectors(l,u),S.cross(y),s.setXYZ(v+0,S.x,S.y,S.z),s.setXYZ(v+1,S.x,S.y,S.z),s.setXYZ(v+2,S.x,S.y,S.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)xn.fromBufferAttribute(e,i),xn.normalize(),e.setXYZ(i,xn.x,xn.y,xn.z)}toNonIndexed(){function e(p,g){const d=p.array,S=p.itemSize,y=p.normalized,v=new d.constructor(g.length*S);let E=0,b=0;for(let C=0,M=g.length;C<M;C++){p.isInterleavedBufferAttribute?E=g[C]*p.data.stride+p.offset:E=g[C]*S;for(let x=0;x<S;x++)v[b++]=d[E++]}return new Di(v,S,y)}if(this.index===null)return ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Li,s=this.index.array,l=this.attributes;for(const p in l){const g=l[p],d=e(g,s);i.setAttribute(p,d)}const u=this.morphAttributes;for(const p in u){const g=[],d=u[p];for(let S=0,y=d.length;S<y;S++){const v=d[S],E=e(v,s);g.push(E)}i.morphAttributes[p]=g}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let p=0,g=h.length;p<g;p++){const d=h[p];i.addGroup(d.start,d.count,d.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const g=this.parameters;for(const d in g)g[d]!==void 0&&(e[d]=g[d]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const g in s){const d=s[g];e.data.attributes[g]=d.toJSON(e.data)}const l={};let u=!1;for(const g in this.morphAttributes){const d=this.morphAttributes[g],S=[];for(let y=0,v=d.length;y<v;y++){const E=d[y];S.push(E.toJSON(e.data))}S.length>0&&(l[g]=S,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const d in l){const S=l[d];this.setAttribute(d,S.clone(i))}const u=e.morphAttributes;for(const d in u){const S=[],y=u[d];for(let v=0,E=y.length;v<E;v++)S.push(y[v].clone(i));this.morphAttributes[d]=S}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let d=0,S=h.length;d<S;d++){const y=h[d];this.addGroup(y.start,y.count,y.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const g=e.boundingSphere;return g!==null&&(this.boundingSphere=g.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Cy=0;class Yo extends zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cy++}),this.uuid=Wo(),this.name="",this.type="Material",this.blending=wr,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vh,this.blendDst=Xh,this.blendEquation=Rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=Ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=z0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mr,this.stencilZFail=mr,this.stencilZPass=mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){ne(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ne(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==wr&&(s.blending=this.blending),this.side!==es&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Vh&&(s.blendSrc=this.blendSrc),this.blendDst!==Xh&&(s.blendDst=this.blendDst),this.blendEquation!==Rs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Ur&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==z0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==mr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==mr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const h=[];for(const p in u){const g=u[p];delete g.metadata,h.push(g)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(s.textures=u),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ma=new at,wh=new at,_c=new at,Qa=new at,Dh=new at,vc=new at,Uh=new at;class tv{constructor(e=new at,i=new at(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ma)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ma.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ma.copy(this.origin).addScaledVector(this.direction,i),ma.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){wh.copy(e).add(i).multiplyScalar(.5),_c.copy(i).sub(e).normalize(),Qa.copy(this.origin).sub(wh);const u=e.distanceTo(i)*.5,h=-this.direction.dot(_c),p=Qa.dot(this.direction),g=-Qa.dot(_c),d=Qa.lengthSq(),S=Math.abs(1-h*h);let y,v,E,b;if(S>0)if(y=h*g-p,v=h*p-g,b=u*S,y>=0)if(v>=-b)if(v<=b){const C=1/S;y*=C,v*=C,E=y*(y+h*v+2*p)+v*(h*y+v+2*g)+d}else v=u,y=Math.max(0,-(h*v+p)),E=-y*y+v*(v+2*g)+d;else v=-u,y=Math.max(0,-(h*v+p)),E=-y*y+v*(v+2*g)+d;else v<=-b?(y=Math.max(0,-(-h*u+p)),v=y>0?-u:Math.min(Math.max(-u,-g),u),E=-y*y+v*(v+2*g)+d):v<=b?(y=0,v=Math.min(Math.max(-u,-g),u),E=v*(v+2*g)+d):(y=Math.max(0,-(h*u+p)),v=y>0?u:Math.min(Math.max(-u,-g),u),E=-y*y+v*(v+2*g)+d);else v=h>0?-u:u,y=Math.max(0,-(h*v+p)),E=-y*y+v*(v+2*g)+d;return s&&s.copy(this.origin).addScaledVector(this.direction,y),l&&l.copy(wh).addScaledVector(_c,v),E}intersectSphere(e,i){ma.subVectors(e.center,this.origin);const s=ma.dot(this.direction),l=ma.dot(ma)-s*s,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),p=s-h,g=s+h;return g<0?null:p<0?this.at(g,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,u,h,p,g;const d=1/this.direction.x,S=1/this.direction.y,y=1/this.direction.z,v=this.origin;return d>=0?(s=(e.min.x-v.x)*d,l=(e.max.x-v.x)*d):(s=(e.max.x-v.x)*d,l=(e.min.x-v.x)*d),S>=0?(u=(e.min.y-v.y)*S,h=(e.max.y-v.y)*S):(u=(e.max.y-v.y)*S,h=(e.min.y-v.y)*S),s>h||u>l||((u>s||isNaN(s))&&(s=u),(h<l||isNaN(l))&&(l=h),y>=0?(p=(e.min.z-v.z)*y,g=(e.max.z-v.z)*y):(p=(e.max.z-v.z)*y,g=(e.min.z-v.z)*y),s>g||p>l)||((p>s||s!==s)&&(s=p),(g<l||l!==l)&&(l=g),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,ma)!==null}intersectTriangle(e,i,s,l,u){Dh.subVectors(i,e),vc.subVectors(s,e),Uh.crossVectors(Dh,vc);let h=this.direction.dot(Uh),p;if(h>0){if(l)return null;p=1}else if(h<0)p=-1,h=-h;else return null;Qa.subVectors(this.origin,e);const g=p*this.direction.dot(vc.crossVectors(Qa,vc));if(g<0)return null;const d=p*this.direction.dot(Dh.cross(Qa));if(d<0||g+d>h)return null;const S=-p*Qa.dot(Uh);return S<0?null:this.at(S/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ev extends Yo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sa,this.combine=L_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $0=new nn,Ms=new tv,xc=new jc,t_=new at,Sc=new at,yc=new at,Mc=new at,Lh=new at,Ec=new at,e_=new at,bc=new at;class mi extends kn{constructor(e=new Li,i=new ev){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const p=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=u}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(u&&p){Ec.set(0,0,0);for(let g=0,d=u.length;g<d;g++){const S=p[g],y=u[g];S!==0&&(Lh.fromBufferAttribute(y,e),h?Ec.addScaledVector(Lh,S):Ec.addScaledVector(Lh.sub(i),S))}i.add(Ec)}return i}raycast(e,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),xc.copy(s.boundingSphere),xc.applyMatrix4(u),Ms.copy(e.ray).recast(e.near),!(xc.containsPoint(Ms.origin)===!1&&(Ms.intersectSphere(xc,t_)===null||Ms.origin.distanceToSquared(t_)>(e.far-e.near)**2))&&($0.copy(u).invert(),Ms.copy(e.ray).applyMatrix4($0),!(s.boundingBox!==null&&Ms.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Ms)))}_computeIntersections(e,i,s){let l;const u=this.geometry,h=this.material,p=u.index,g=u.attributes.position,d=u.attributes.uv,S=u.attributes.uv1,y=u.attributes.normal,v=u.groups,E=u.drawRange;if(p!==null)if(Array.isArray(h))for(let b=0,C=v.length;b<C;b++){const M=v[b],x=h[M.materialIndex],D=Math.max(M.start,E.start),P=Math.min(p.count,Math.min(M.start+M.count,E.start+E.count));for(let N=D,X=P;N<X;N+=3){const H=p.getX(N),B=p.getX(N+1),T=p.getX(N+2);l=Tc(this,x,e,s,d,S,y,H,B,T),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,E.start),C=Math.min(p.count,E.start+E.count);for(let M=b,x=C;M<x;M+=3){const D=p.getX(M),P=p.getX(M+1),N=p.getX(M+2);l=Tc(this,h,e,s,d,S,y,D,P,N),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(g!==void 0)if(Array.isArray(h))for(let b=0,C=v.length;b<C;b++){const M=v[b],x=h[M.materialIndex],D=Math.max(M.start,E.start),P=Math.min(g.count,Math.min(M.start+M.count,E.start+E.count));for(let N=D,X=P;N<X;N+=3){const H=N,B=N+1,T=N+2;l=Tc(this,x,e,s,d,S,y,H,B,T),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,E.start),C=Math.min(g.count,E.start+E.count);for(let M=b,x=C;M<x;M+=3){const D=M,P=M+1,N=M+2;l=Tc(this,h,e,s,d,S,y,D,P,N),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function wy(o,e,i,s,l,u,h,p){let g;if(e.side===Xn?g=s.intersectTriangle(h,u,l,!0,p):g=s.intersectTriangle(l,u,h,e.side===es,p),g===null)return null;bc.copy(p),bc.applyMatrix4(o.matrixWorld);const d=i.ray.origin.distanceTo(bc);return d<i.near||d>i.far?null:{distance:d,point:bc.clone(),object:o}}function Tc(o,e,i,s,l,u,h,p,g,d){o.getVertexPosition(p,Sc),o.getVertexPosition(g,yc),o.getVertexPosition(d,Mc);const S=wy(o,e,i,s,Sc,yc,Mc,e_);if(S){const y=new at;Ri.getBarycoord(e_,Sc,yc,Mc,y),l&&(S.uv=Ri.getInterpolatedAttribute(l,p,g,d,y,new le)),u&&(S.uv1=Ri.getInterpolatedAttribute(u,p,g,d,y,new le)),h&&(S.normal=Ri.getInterpolatedAttribute(h,p,g,d,y,new at),S.normal.dot(s.direction)>0&&S.normal.multiplyScalar(-1));const v={a:p,b:g,c:d,normal:new at,materialIndex:0};Ri.getNormal(Sc,yc,Mc,v.normal),S.face=v,S.barycoord=y}return S}class nv extends Pn{constructor(e=null,i=1,s=1,l,u,h,p,g,d=bn,S=bn,y,v){super(null,h,p,g,d,S,l,u,y,v),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Nh=new at,Dy=new at,Uy=new de;class As{constructor(e=new at(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Nh.subVectors(s,i).cross(Dy.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Nh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(s,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||Uy.getNormalMatrix(e),l=this.coplanarPoint(Nh).applyMatrix4(e),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Es=new jc,Ly=new le(.5,.5),Ac=new at;class iv{constructor(e=new As,i=new As,s=new As,l=new As,u=new As,h=new As){this.planes=[e,i,s,l,u,h]}set(e,i,s,l,u,h){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(u),p[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Gi,s=!1){const l=this.planes,u=e.elements,h=u[0],p=u[1],g=u[2],d=u[3],S=u[4],y=u[5],v=u[6],E=u[7],b=u[8],C=u[9],M=u[10],x=u[11],D=u[12],P=u[13],N=u[14],X=u[15];if(l[0].setComponents(d-h,E-S,x-b,X-D).normalize(),l[1].setComponents(d+h,E+S,x+b,X+D).normalize(),l[2].setComponents(d+p,E+y,x+C,X+P).normalize(),l[3].setComponents(d-p,E-y,x-C,X-P).normalize(),s)l[4].setComponents(g,v,M,N).normalize(),l[5].setComponents(d-g,E-v,x-M,X-N).normalize();else if(l[4].setComponents(d-g,E-v,x-M,X-N).normalize(),i===Gi)l[5].setComponents(d+g,E+v,x+M,X+N).normalize();else if(i===Gc)l[5].setComponents(g,v,M,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Es.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Es)}intersectsSprite(e){Es.center.set(0,0,0);const i=Ly.distanceTo(e.center);return Es.radius=.7071067811865476+i,Es.applyMatrix4(e.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Ac.x=l.normal.x>0?e.max.x:e.min.x,Ac.y=l.normal.y>0?e.max.y:e.min.y,Ac.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Ac)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ny extends Yo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const kc=new at,Wc=new at,n_=new nn,zo=new tv,Rc=new jc,Oh=new at,i_=new at;class Oy extends kn{constructor(e=new Li,i=new Ny){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,u=i.count;l<u;l++)kc.fromBufferAttribute(i,l-1),Wc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=kc.distanceTo(Wc);e.setAttribute("lineDistance",new Ui(s,1))}else ne("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,u=e.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Rc.copy(s.boundingSphere),Rc.applyMatrix4(l),Rc.radius+=u,e.ray.intersectsSphere(Rc)===!1)return;n_.copy(l).invert(),zo.copy(e.ray).applyMatrix4(n_);const p=u/((this.scale.x+this.scale.y+this.scale.z)/3),g=p*p,d=this.isLineSegments?2:1,S=s.index,v=s.attributes.position;if(S!==null){const E=Math.max(0,h.start),b=Math.min(S.count,h.start+h.count);for(let C=E,M=b-1;C<M;C+=d){const x=S.getX(C),D=S.getX(C+1),P=Cc(this,e,zo,g,x,D,C);P&&i.push(P)}if(this.isLineLoop){const C=S.getX(b-1),M=S.getX(E),x=Cc(this,e,zo,g,C,M,b-1);x&&i.push(x)}}else{const E=Math.max(0,h.start),b=Math.min(v.count,h.start+h.count);for(let C=E,M=b-1;C<M;C+=d){const x=Cc(this,e,zo,g,C,C+1,C);x&&i.push(x)}if(this.isLineLoop){const C=Cc(this,e,zo,g,b-1,E,b-1);C&&i.push(C)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const p=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=u}}}}}function Cc(o,e,i,s,l,u,h){const p=o.geometry.attributes.position;if(kc.fromBufferAttribute(p,l),Wc.fromBufferAttribute(p,u),i.distanceSqToSegment(kc,Wc,Oh,i_)>s)return;Oh.applyMatrix4(o.matrixWorld);const d=e.ray.origin.distanceTo(Oh);if(!(d<e.near||d>e.far))return{distance:d,point:i_.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}const a_=new at,s_=new at;class Py extends Oy{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,u=i.count;l<u;l+=2)a_.fromBufferAttribute(i,l),s_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+a_.distanceTo(s_);e.setAttribute("lineDistance",new Ui(s,1))}else ne("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class av extends Pn{constructor(e=[],i=Ls,s,l,u,h,p,g,d,S){super(e,i,s,l,u,h,p,g,d,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ko extends Pn{constructor(e,i,s=Xi,l,u,h,p=bn,g=bn,d,S=xa,y=1){if(S!==xa&&S!==Ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:i,depth:y};super(v,l,u,h,p,g,S,s,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new kd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class zy extends ko{constructor(e,i=Xi,s=Ls,l,u,h=bn,p=bn,g,d=xa){const S={width:e,height:e,depth:1},y=[S,S,S,S,S,S];super(e,e,i,s,l,u,h,p,g,d),this.image=y,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class sv extends Pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class jo extends Li{constructor(e=1,i=1,s=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:h};const p=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const g=[],d=[],S=[],y=[];let v=0,E=0;b("z","y","x",-1,-1,s,i,e,h,u,0),b("z","y","x",1,-1,s,i,-e,h,u,1),b("x","z","y",1,1,e,s,i,l,h,2),b("x","z","y",1,-1,e,s,-i,l,h,3),b("x","y","z",1,-1,e,i,s,l,u,4),b("x","y","z",-1,-1,e,i,-s,l,u,5),this.setIndex(g),this.setAttribute("position",new Ui(d,3)),this.setAttribute("normal",new Ui(S,3)),this.setAttribute("uv",new Ui(y,2));function b(C,M,x,D,P,N,X,H,B,T,U){const ht=N/B,G=X/T,Q=N/2,st=X/2,ot=H/2,J=B+1,L=T+1;let F=0,lt=0;const mt=new at;for(let Et=0;Et<L;Et++){const O=Et*G-st;for(let Y=0;Y<J;Y++){const _t=Y*ht-Q;mt[C]=_t*D,mt[M]=O*P,mt[x]=ot,d.push(mt.x,mt.y,mt.z),mt[C]=0,mt[M]=0,mt[x]=H>0?1:-1,S.push(mt.x,mt.y,mt.z),y.push(Y/B),y.push(1-Et/T),F+=1}}for(let Et=0;Et<T;Et++)for(let O=0;O<B;O++){const Y=v+O+J*Et,_t=v+O+J*(Et+1),At=v+(O+1)+J*(Et+1),Ot=v+(O+1)+J*Et;g.push(Y,_t,Ot),g.push(_t,At,Ot),lt+=6}p.addGroup(E,lt,U),E+=lt,v+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Us extends Li{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const u=e/2,h=i/2,p=Math.floor(s),g=Math.floor(l),d=p+1,S=g+1,y=e/p,v=i/g,E=[],b=[],C=[],M=[];for(let x=0;x<S;x++){const D=x*v-h;for(let P=0;P<d;P++){const N=P*y-u;b.push(N,-D,0),C.push(0,0,1),M.push(P/p),M.push(1-x/g)}}for(let x=0;x<g;x++)for(let D=0;D<p;D++){const P=D+d*x,N=D+d*(x+1),X=D+1+d*(x+1),H=D+1+d*x;E.push(P,N,H),E.push(N,X,H)}this.setIndex(E),this.setAttribute("position",new Ui(b,3)),this.setAttribute("normal",new Ui(C,3)),this.setAttribute("uv",new Ui(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Us(e.width,e.height,e.widthSegments,e.heightSegments)}}function Pr(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function On(o){const e={};for(let i=0;i<o.length;i++){const s=Pr(o[i]);for(const l in s)e[l]=s[l]}return e}function Fy(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function rv(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Re.workingColorSpace}const By={clone:Pr,merge:On};var Iy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wi extends Yo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Iy,this.fragmentShader=Hy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pr(e.uniforms),this.uniformsGroups=Fy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Ho extends Wi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Gy extends Yo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=JS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Vy extends Yo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const wc=new at,Dc=new Fr,Bi=new at;class qc extends kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=Gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(wc,Dc,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wc,Dc,Bi.set(1,1,1)).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorld.decompose(wc,Dc,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wc,Dc,Bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ja=new at,r_=new le,o_=new le;class Ai extends qc{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Ud*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(uh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ud*2*Math.atan(Math.tan(uh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){Ja.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ja.x,Ja.y).multiplyScalar(-e/Ja.z),Ja.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ja.x,Ja.y).multiplyScalar(-e/Ja.z)}getViewSize(e,i){return this.getViewBounds(e,r_,o_),i.subVectors(o_,r_)}setViewOffset(e,i,s,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(uh*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const g=h.fullWidth,d=h.fullHeight;u+=h.offsetX*l/g,i-=h.offsetY*s/d,l*=h.width/g,s*=h.height/d}const p=this.filmOffset;p!==0&&(u+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class ov extends qc{constructor(e=-1,i=1,s=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-e,h=s+e,p=l+i,g=l-i;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=d*this.view.offsetX,h=u+d*this.view.width,p-=S*this.view.offsetY,g=p-S*this.view.height}this.projectionMatrix.makeOrthographic(u,h,p,g,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Ar=-90,Rr=1;class Xy extends kn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ai(Ar,Rr,e,i);l.layers=this.layers,this.add(l);const u=new Ai(Ar,Rr,e,i);u.layers=this.layers,this.add(u);const h=new Ai(Ar,Rr,e,i);h.layers=this.layers,this.add(h);const p=new Ai(Ar,Rr,e,i);p.layers=this.layers,this.add(p);const g=new Ai(Ar,Rr,e,i);g.layers=this.layers,this.add(g);const d=new Ai(Ar,Rr,e,i);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,u,h,p,g]=i;for(const d of i)this.remove(d);if(e===Gi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),g.up.set(0,1,0),g.lookAt(0,0,-1);else if(e===Gc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),g.up.set(0,-1,0),g.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of i)this.add(d),d.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,p,g,d,S]=this.children,y=e.getRenderTarget(),v=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,u),e.setRenderTarget(s,1,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(s,2,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(s,3,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,g),e.setRenderTarget(s,4,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),s.texture.generateMipmaps=C,e.setRenderTarget(s,5,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,S),e.setRenderTarget(y,v,E),e.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class ky extends Ai{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Wy{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ne("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function l_(o,e,i,s){const l=qy(s);switch(i){case W_:return o*e;case Y_:return o*e/l.components*l.byteLength;case Id:return o*e/l.components*l.byteLength;case Nr:return o*e*2/l.components*l.byteLength;case Hd:return o*e*2/l.components*l.byteLength;case q_:return o*e*3/l.components*l.byteLength;case pi:return o*e*4/l.components*l.byteLength;case Gd:return o*e*4/l.components*l.byteLength;case Pc:case zc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Fc:case Bc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case td:case nd:return Math.max(o,16)*Math.max(e,8)/4;case $h:case ed:return Math.max(o,8)*Math.max(e,8)/2;case id:case ad:case rd:case od:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case sd:case ld:case cd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ud:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case fd:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case hd:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case dd:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case pd:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case md:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case gd:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case _d:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case vd:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case xd:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Sd:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case yd:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Md:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Ed:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case bd:case Td:case Ad:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Rd:case Cd:return Math.ceil(o/4)*Math.ceil(e/4)*8;case wd:case Dd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function qy(o){switch(o){case di:case G_:return{byteLength:1,components:1};case Vo:case V_:case ki:return{byteLength:2,components:1};case Fd:case Bd:return{byteLength:2,components:4};case Xi:case zd:case Ci:return{byteLength:4,components:1};case X_:case k_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pd}}));typeof window<"u"&&(window.__THREE__?ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pd);function lv(){let o=null,e=!1,i=null,s=null;function l(u,h){i(u,h),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function Yy(o){const e=new WeakMap;function i(p,g){const d=p.array,S=p.usage,y=d.byteLength,v=o.createBuffer();o.bindBuffer(g,v),o.bufferData(g,d,S),p.onUploadCallback();let E;if(d instanceof Float32Array)E=o.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)E=o.HALF_FLOAT;else if(d instanceof Uint16Array)p.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)E=o.SHORT;else if(d instanceof Uint32Array)E=o.UNSIGNED_INT;else if(d instanceof Int32Array)E=o.INT;else if(d instanceof Int8Array)E=o.BYTE;else if(d instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:E,bytesPerElement:d.BYTES_PER_ELEMENT,version:p.version,size:y}}function s(p,g,d){const S=g.array,y=g.updateRanges;if(o.bindBuffer(d,p),y.length===0)o.bufferSubData(d,0,S);else{y.sort((E,b)=>E.start-b.start);let v=0;for(let E=1;E<y.length;E++){const b=y[v],C=y[E];C.start<=b.start+b.count+1?b.count=Math.max(b.count,C.start+C.count-b.start):(++v,y[v]=C)}y.length=v+1;for(let E=0,b=y.length;E<b;E++){const C=y[E];o.bufferSubData(d,C.start*S.BYTES_PER_ELEMENT,S,C.start,C.count)}g.clearUpdateRanges()}g.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function u(p){p.isInterleavedBufferAttribute&&(p=p.data);const g=e.get(p);g&&(o.deleteBuffer(g.buffer),e.delete(p))}function h(p,g){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const S=e.get(p);(!S||S.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const d=e.get(p);if(d===void 0)e.set(p,i(p,g));else if(d.version<p.version){if(d.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,p,g),d.version=p.version}}return{get:l,remove:u,update:h}}var jy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zy=`#ifdef USE_ALPHAHASH
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
#endif`,Ky=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$y=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tM=`#ifdef USE_AOMAP
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
#endif`,eM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nM=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,iM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,aM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,oM=`#ifdef USE_IRIDESCENCE
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
#endif`,lM=`#ifdef USE_BUMPMAP
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
#endif`,cM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,uM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,pM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,mM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,gM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,_M=`#define PI 3.141592653589793
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
} // validated`,vM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xM=`vec3 transformedNormal = objectNormal;
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
#endif`,SM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,MM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,EM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bM="gl_FragColor = linearToOutputTexel( gl_FragColor );",TM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,AM=`#ifdef USE_ENVMAP
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
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,RM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,CM=`#ifdef USE_ENVMAP
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
#endif`,wM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,DM=`#ifdef USE_ENVMAP
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
#endif`,UM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,LM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,NM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,OM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,PM=`#ifdef USE_GRADIENTMAP
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
}`,zM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,FM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,BM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,IM=`uniform bool receiveShadow;
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
#endif`,HM=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,GM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,VM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,XM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,WM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,qM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,YM=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#endif`,jM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,ZM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,KM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,QM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$M=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,iE=`#if defined( USE_POINTS_UV )
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
#endif`,aE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,oE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cE=`#ifdef USE_MORPHTARGETS
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
#endif`,uE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gE=`#ifdef USE_NORMALMAP
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
#endif`,_E=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,SE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ME=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,EE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,TE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,AE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,RE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,CE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,DE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,UE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,LE=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,NE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,OE=`#ifdef USE_SKINNING
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
#endif`,PE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zE=`#ifdef USE_SKINNING
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
#endif`,FE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,BE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,IE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,HE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,GE=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,VE=`#ifdef USE_TRANSMISSION
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
#endif`,XE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const YE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jE=`uniform sampler2D t2D;
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
}`,ZE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,QE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$E=`#include <common>
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
}`,tb=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,eb=`#define DISTANCE
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
}`,nb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ib=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ab=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sb=`uniform float scale;
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
}`,rb=`uniform vec3 diffuse;
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
}`,ob=`#include <common>
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
}`,lb=`uniform vec3 diffuse;
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
}`,cb=`#define LAMBERT
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
}`,ub=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,fb=`#define MATCAP
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
}`,hb=`#define MATCAP
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
}`,db=`#define NORMAL
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
}`,pb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mb=`#define PHONG
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
}`,gb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,_b=`#define STANDARD
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
}`,vb=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,xb=`#define TOON
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
}`,Sb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,yb=`uniform float size;
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
}`,Mb=`uniform vec3 diffuse;
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
}`,Eb=`#include <common>
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
}`,bb=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,Tb=`uniform float rotation;
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
}`,Ab=`uniform vec3 diffuse;
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
}`,pe={alphahash_fragment:jy,alphahash_pars_fragment:Zy,alphamap_fragment:Ky,alphamap_pars_fragment:Qy,alphatest_fragment:Jy,alphatest_pars_fragment:$y,aomap_fragment:tM,aomap_pars_fragment:eM,batching_pars_vertex:nM,batching_vertex:iM,begin_vertex:aM,beginnormal_vertex:sM,bsdfs:rM,iridescence_fragment:oM,bumpmap_pars_fragment:lM,clipping_planes_fragment:cM,clipping_planes_pars_fragment:uM,clipping_planes_pars_vertex:fM,clipping_planes_vertex:hM,color_fragment:dM,color_pars_fragment:pM,color_pars_vertex:mM,color_vertex:gM,common:_M,cube_uv_reflection_fragment:vM,defaultnormal_vertex:xM,displacementmap_pars_vertex:SM,displacementmap_vertex:yM,emissivemap_fragment:MM,emissivemap_pars_fragment:EM,colorspace_fragment:bM,colorspace_pars_fragment:TM,envmap_fragment:AM,envmap_common_pars_fragment:RM,envmap_pars_fragment:CM,envmap_pars_vertex:wM,envmap_physical_pars_fragment:HM,envmap_vertex:DM,fog_vertex:UM,fog_pars_vertex:LM,fog_fragment:NM,fog_pars_fragment:OM,gradientmap_pars_fragment:PM,lightmap_pars_fragment:zM,lights_lambert_fragment:FM,lights_lambert_pars_fragment:BM,lights_pars_begin:IM,lights_toon_fragment:GM,lights_toon_pars_fragment:VM,lights_phong_fragment:XM,lights_phong_pars_fragment:kM,lights_physical_fragment:WM,lights_physical_pars_fragment:qM,lights_fragment_begin:YM,lights_fragment_maps:jM,lights_fragment_end:ZM,logdepthbuf_fragment:KM,logdepthbuf_pars_fragment:QM,logdepthbuf_pars_vertex:JM,logdepthbuf_vertex:$M,map_fragment:tE,map_pars_fragment:eE,map_particle_fragment:nE,map_particle_pars_fragment:iE,metalnessmap_fragment:aE,metalnessmap_pars_fragment:sE,morphinstance_vertex:rE,morphcolor_vertex:oE,morphnormal_vertex:lE,morphtarget_pars_vertex:cE,morphtarget_vertex:uE,normal_fragment_begin:fE,normal_fragment_maps:hE,normal_pars_fragment:dE,normal_pars_vertex:pE,normal_vertex:mE,normalmap_pars_fragment:gE,clearcoat_normal_fragment_begin:_E,clearcoat_normal_fragment_maps:vE,clearcoat_pars_fragment:xE,iridescence_pars_fragment:SE,opaque_fragment:yE,packing:ME,premultiplied_alpha_fragment:EE,project_vertex:bE,dithering_fragment:TE,dithering_pars_fragment:AE,roughnessmap_fragment:RE,roughnessmap_pars_fragment:CE,shadowmap_pars_fragment:wE,shadowmap_pars_vertex:DE,shadowmap_vertex:UE,shadowmask_pars_fragment:LE,skinbase_vertex:NE,skinning_pars_vertex:OE,skinning_vertex:PE,skinnormal_vertex:zE,specularmap_fragment:FE,specularmap_pars_fragment:BE,tonemapping_fragment:IE,tonemapping_pars_fragment:HE,transmission_fragment:GE,transmission_pars_fragment:VE,uv_pars_fragment:XE,uv_pars_vertex:kE,uv_vertex:WE,worldpos_vertex:qE,background_vert:YE,background_frag:jE,backgroundCube_vert:ZE,backgroundCube_frag:KE,cube_vert:QE,cube_frag:JE,depth_vert:$E,depth_frag:tb,distance_vert:eb,distance_frag:nb,equirect_vert:ib,equirect_frag:ab,linedashed_vert:sb,linedashed_frag:rb,meshbasic_vert:ob,meshbasic_frag:lb,meshlambert_vert:cb,meshlambert_frag:ub,meshmatcap_vert:fb,meshmatcap_frag:hb,meshnormal_vert:db,meshnormal_frag:pb,meshphong_vert:mb,meshphong_frag:gb,meshphysical_vert:_b,meshphysical_frag:vb,meshtoon_vert:xb,meshtoon_frag:Sb,points_vert:yb,points_frag:Mb,shadow_vert:Eb,shadow_frag:bb,sprite_vert:Tb,sprite_frag:Ab},Lt={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},Hi={basic:{uniforms:On([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:On([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Ne(0)},envMapIntensity:{value:1}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:On([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:On([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:On([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Ne(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:On([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:On([Lt.points,Lt.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:On([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:On([Lt.common,Lt.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:On([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:On([Lt.sprite,Lt.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distance:{uniforms:On([Lt.common,Lt.displacementmap,{referencePosition:{value:new at},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distance_vert,fragmentShader:pe.distance_frag},shadow:{uniforms:On([Lt.lights,Lt.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};Hi.physical={uniforms:On([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const Uc={r:0,b:0,g:0},bs=new Sa,Rb=new nn;function Cb(o,e,i,s,l,u){const h=new Ne(0);let p=l===!0?0:1,g,d,S=null,y=0,v=null;function E(D){let P=D.isScene===!0?D.background:null;if(P&&P.isTexture){const N=D.backgroundBlurriness>0;P=e.get(P,N)}return P}function b(D){let P=!1;const N=E(D);N===null?M(h,p):N&&N.isColor&&(M(N,1),P=!0);const X=o.xr.getEnvironmentBlendMode();X==="additive"?i.buffers.color.setClear(0,0,0,1,u):X==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(o.autoClear||P)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function C(D,P){const N=E(P);N&&(N.isCubeTexture||N.mapping===Yc)?(d===void 0&&(d=new mi(new jo(1,1,1),new Wi({name:"BackgroundCubeMaterial",uniforms:Pr(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(X,H,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),bs.copy(P.backgroundRotation),bs.x*=-1,bs.y*=-1,bs.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),d.material.uniforms.envMap.value=N,d.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Rb.makeRotationFromEuler(bs)),d.material.toneMapped=Re.getTransfer(N.colorSpace)!==Be,(S!==N||y!==N.version||v!==o.toneMapping)&&(d.material.needsUpdate=!0,S=N,y=N.version,v=o.toneMapping),d.layers.enableAll(),D.unshift(d,d.geometry,d.material,0,0,null)):N&&N.isTexture&&(g===void 0&&(g=new mi(new Us(2,2),new Wi({name:"BackgroundMaterial",uniforms:Pr(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(g)),g.material.uniforms.t2D.value=N,g.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,g.material.toneMapped=Re.getTransfer(N.colorSpace)!==Be,N.matrixAutoUpdate===!0&&N.updateMatrix(),g.material.uniforms.uvTransform.value.copy(N.matrix),(S!==N||y!==N.version||v!==o.toneMapping)&&(g.material.needsUpdate=!0,S=N,y=N.version,v=o.toneMapping),g.layers.enableAll(),D.unshift(g,g.geometry,g.material,0,0,null))}function M(D,P){D.getRGB(Uc,rv(o)),i.buffers.color.setClear(Uc.r,Uc.g,Uc.b,P,u)}function x(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return h},setClearColor:function(D,P=1){h.set(D),p=P,M(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,M(h,p)},render:b,addToRenderList:C,dispose:x}}function wb(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=v(null);let u=l,h=!1;function p(G,Q,st,ot,J){let L=!1;const F=y(G,ot,st,Q);u!==F&&(u=F,d(u.object)),L=E(G,ot,st,J),L&&b(G,ot,st,J),J!==null&&e.update(J,o.ELEMENT_ARRAY_BUFFER),(L||h)&&(h=!1,N(G,Q,st,ot),J!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function g(){return o.createVertexArray()}function d(G){return o.bindVertexArray(G)}function S(G){return o.deleteVertexArray(G)}function y(G,Q,st,ot){const J=ot.wireframe===!0;let L=s[Q.id];L===void 0&&(L={},s[Q.id]=L);const F=G.isInstancedMesh===!0?G.id:0;let lt=L[F];lt===void 0&&(lt={},L[F]=lt);let mt=lt[st.id];mt===void 0&&(mt={},lt[st.id]=mt);let Et=mt[J];return Et===void 0&&(Et=v(g()),mt[J]=Et),Et}function v(G){const Q=[],st=[],ot=[];for(let J=0;J<i;J++)Q[J]=0,st[J]=0,ot[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:st,attributeDivisors:ot,object:G,attributes:{},index:null}}function E(G,Q,st,ot){const J=u.attributes,L=Q.attributes;let F=0;const lt=st.getAttributes();for(const mt in lt)if(lt[mt].location>=0){const O=J[mt];let Y=L[mt];if(Y===void 0&&(mt==="instanceMatrix"&&G.instanceMatrix&&(Y=G.instanceMatrix),mt==="instanceColor"&&G.instanceColor&&(Y=G.instanceColor)),O===void 0||O.attribute!==Y||Y&&O.data!==Y.data)return!0;F++}return u.attributesNum!==F||u.index!==ot}function b(G,Q,st,ot){const J={},L=Q.attributes;let F=0;const lt=st.getAttributes();for(const mt in lt)if(lt[mt].location>=0){let O=L[mt];O===void 0&&(mt==="instanceMatrix"&&G.instanceMatrix&&(O=G.instanceMatrix),mt==="instanceColor"&&G.instanceColor&&(O=G.instanceColor));const Y={};Y.attribute=O,O&&O.data&&(Y.data=O.data),J[mt]=Y,F++}u.attributes=J,u.attributesNum=F,u.index=ot}function C(){const G=u.newAttributes;for(let Q=0,st=G.length;Q<st;Q++)G[Q]=0}function M(G){x(G,0)}function x(G,Q){const st=u.newAttributes,ot=u.enabledAttributes,J=u.attributeDivisors;st[G]=1,ot[G]===0&&(o.enableVertexAttribArray(G),ot[G]=1),J[G]!==Q&&(o.vertexAttribDivisor(G,Q),J[G]=Q)}function D(){const G=u.newAttributes,Q=u.enabledAttributes;for(let st=0,ot=Q.length;st<ot;st++)Q[st]!==G[st]&&(o.disableVertexAttribArray(st),Q[st]=0)}function P(G,Q,st,ot,J,L,F){F===!0?o.vertexAttribIPointer(G,Q,st,J,L):o.vertexAttribPointer(G,Q,st,ot,J,L)}function N(G,Q,st,ot){C();const J=ot.attributes,L=st.getAttributes(),F=Q.defaultAttributeValues;for(const lt in L){const mt=L[lt];if(mt.location>=0){let Et=J[lt];if(Et===void 0&&(lt==="instanceMatrix"&&G.instanceMatrix&&(Et=G.instanceMatrix),lt==="instanceColor"&&G.instanceColor&&(Et=G.instanceColor)),Et!==void 0){const O=Et.normalized,Y=Et.itemSize,_t=e.get(Et);if(_t===void 0)continue;const At=_t.buffer,Ot=_t.type,et=_t.bytesPerElement,vt=Ot===o.INT||Ot===o.UNSIGNED_INT||Et.gpuType===zd;if(Et.isInterleavedBufferAttribute){const St=Et.data,Gt=St.stride,Zt=Et.offset;if(St.isInstancedInterleavedBuffer){for(let $t=0;$t<mt.locationSize;$t++)x(mt.location+$t,St.meshPerAttribute);G.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let $t=0;$t<mt.locationSize;$t++)M(mt.location+$t);o.bindBuffer(o.ARRAY_BUFFER,At);for(let $t=0;$t<mt.locationSize;$t++)P(mt.location+$t,Y/mt.locationSize,Ot,O,Gt*et,(Zt+Y/mt.locationSize*$t)*et,vt)}else{if(Et.isInstancedBufferAttribute){for(let St=0;St<mt.locationSize;St++)x(mt.location+St,Et.meshPerAttribute);G.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let St=0;St<mt.locationSize;St++)M(mt.location+St);o.bindBuffer(o.ARRAY_BUFFER,At);for(let St=0;St<mt.locationSize;St++)P(mt.location+St,Y/mt.locationSize,Ot,O,Y*et,Y/mt.locationSize*St*et,vt)}}else if(F!==void 0){const O=F[lt];if(O!==void 0)switch(O.length){case 2:o.vertexAttrib2fv(mt.location,O);break;case 3:o.vertexAttrib3fv(mt.location,O);break;case 4:o.vertexAttrib4fv(mt.location,O);break;default:o.vertexAttrib1fv(mt.location,O)}}}}D()}function X(){U();for(const G in s){const Q=s[G];for(const st in Q){const ot=Q[st];for(const J in ot){const L=ot[J];for(const F in L)S(L[F].object),delete L[F];delete ot[J]}}delete s[G]}}function H(G){if(s[G.id]===void 0)return;const Q=s[G.id];for(const st in Q){const ot=Q[st];for(const J in ot){const L=ot[J];for(const F in L)S(L[F].object),delete L[F];delete ot[J]}}delete s[G.id]}function B(G){for(const Q in s){const st=s[Q];for(const ot in st){const J=st[ot];if(J[G.id]===void 0)continue;const L=J[G.id];for(const F in L)S(L[F].object),delete L[F];delete J[G.id]}}}function T(G){for(const Q in s){const st=s[Q],ot=G.isInstancedMesh===!0?G.id:0,J=st[ot];if(J!==void 0){for(const L in J){const F=J[L];for(const lt in F)S(F[lt].object),delete F[lt];delete J[L]}delete st[ot],Object.keys(st).length===0&&delete s[Q]}}}function U(){ht(),h=!0,u!==l&&(u=l,d(u.object))}function ht(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:U,resetDefaultState:ht,dispose:X,releaseStatesOfGeometry:H,releaseStatesOfObject:T,releaseStatesOfProgram:B,initAttributes:C,enableAttribute:M,disableUnusedAttributes:D}}function Db(o,e,i){let s;function l(d){s=d}function u(d,S){o.drawArrays(s,d,S),i.update(S,s,1)}function h(d,S,y){y!==0&&(o.drawArraysInstanced(s,d,S,y),i.update(S,s,y))}function p(d,S,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,d,0,S,0,y);let E=0;for(let b=0;b<y;b++)E+=S[b];i.update(E,s,1)}function g(d,S,y,v){if(y===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let b=0;b<d.length;b++)h(d[b],S[b],v[b]);else{E.multiDrawArraysInstancedWEBGL(s,d,0,S,0,v,0,y);let b=0;for(let C=0;C<y;C++)b+=S[C]*v[C];i.update(b,s,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=g}function Ub(o,e,i,s){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(B){return!(B!==pi&&s.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(B){const T=B===ki&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==di&&s.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Ci&&!T)}function g(B){if(B==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const S=g(d);S!==d&&(ne("WebGLRenderer:",d,"not supported, using",S,"instead."),d=S);const y=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),E=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),D=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),P=o.getParameter(o.MAX_VARYING_VECTORS),N=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),X=o.getParameter(o.MAX_SAMPLES),H=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:g,textureFormatReadable:h,textureTypeReadable:p,precision:d,logarithmicDepthBuffer:y,reversedDepthBuffer:v,maxTextures:E,maxVertexTextures:b,maxTextureSize:C,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:D,maxVaryings:P,maxFragmentUniforms:N,maxSamples:X,samples:H}}function Lb(o){const e=this;let i=null,s=0,l=!1,u=!1;const h=new As,p=new de,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(y,v){const E=y.length!==0||v||s!==0||l;return l=v,s=y.length,E},this.beginShadows=function(){u=!0,S(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(y,v){i=S(y,v,0)},this.setState=function(y,v,E){const b=y.clippingPlanes,C=y.clipIntersection,M=y.clipShadows,x=o.get(y);if(!l||b===null||b.length===0||u&&!M)u?S(null):d();else{const D=u?0:s,P=D*4;let N=x.clippingState||null;g.value=N,N=S(b,v,P,E);for(let X=0;X!==P;++X)N[X]=i[X];x.clippingState=N,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=D}};function d(){g.value!==i&&(g.value=i,g.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function S(y,v,E,b){const C=y!==null?y.length:0;let M=null;if(C!==0){if(M=g.value,b!==!0||M===null){const x=E+C*4,D=v.matrixWorldInverse;p.getNormalMatrix(D),(M===null||M.length<x)&&(M=new Float32Array(x));for(let P=0,N=E;P!==C;++P,N+=4)h.copy(y[P]).applyMatrix4(D,p),h.normal.toArray(M,N),M[N+3]=h.constant}g.value=M,g.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,M}}const ts=4,c_=[.125,.215,.35,.446,.526,.582],Cs=20,Nb=256,Fo=new ov,u_=new Ne;let Ph=null,zh=0,Fh=0,Bh=!1;const Ob=new at;class f_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,u={}){const{size:h=256,position:p=Ob}=u;Ph=this._renderer.getRenderTarget(),zh=this._renderer.getActiveCubeFace(),Fh=this._renderer.getActiveMipmapLevel(),Bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const g=this._allocateTargets();return g.depthBuffer=!0,this._sceneToCubeUV(e,s,l,g,p),i>0&&this._blur(g,0,0,i),this._applyPMREM(g),this._cleanup(g),g}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=p_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=d_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ph,zh,Fh),this._renderer.xr.enabled=Bh,e.scissorTest=!1,Cr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ls||e.mapping===Lr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ph=this._renderer.getRenderTarget(),zh=this._renderer.getActiveCubeFace(),Fh=this._renderer.getActiveMipmapLevel(),Bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:ki,format:pi,colorSpace:Or,depthBuffer:!1},l=h_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=h_(e,i,s);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Pb(u)),this._blurMaterial=Fb(u,e,i),this._ggxMaterial=zb(u,e,i)}return l}_compileMaterial(e){const i=new mi(new Li,e);this._renderer.compile(i,Fo)}_sceneToCubeUV(e,i,s,l,u){const g=new Ai(90,1,i,s),d=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],y=this._renderer,v=y.autoClear,E=y.toneMapping;y.getClearColor(u_),y.toneMapping=Vi,y.autoClear=!1,y.state.buffers.depth.getReversed()&&(y.setRenderTarget(l),y.clearDepth(),y.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new mi(new jo,new ev({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,M=C.material;let x=!1;const D=e.background;D?D.isColor&&(M.color.copy(D),e.background=null,x=!0):(M.color.copy(u_),x=!0);for(let P=0;P<6;P++){const N=P%3;N===0?(g.up.set(0,d[P],0),g.position.set(u.x,u.y,u.z),g.lookAt(u.x+S[P],u.y,u.z)):N===1?(g.up.set(0,0,d[P]),g.position.set(u.x,u.y,u.z),g.lookAt(u.x,u.y+S[P],u.z)):(g.up.set(0,d[P],0),g.position.set(u.x,u.y,u.z),g.lookAt(u.x,u.y,u.z+S[P]));const X=this._cubeSize;Cr(l,N*X,P>2?X:0,X,X),y.setRenderTarget(l),x&&y.render(C,g),y.render(e,g)}y.toneMapping=E,y.autoClear=v,e.background=D}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Ls||e.mapping===Lr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=p_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=d_());const u=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=u;const p=u.uniforms;p.envMap.value=e;const g=this._cubeSize;Cr(i,0,0,3*g,2*g),s.setRenderTarget(i),s.render(h,Fo)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(e,u-1,u);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,u=this._pingPongRenderTarget,h=this._ggxMaterial,p=this._lodMeshes[s];p.material=h;const g=h.uniforms,d=s/(this._lodMeshes.length-1),S=i/(this._lodMeshes.length-1),y=Math.sqrt(d*d-S*S),v=0+d*1.25,E=y*v,{_lodMax:b}=this,C=this._sizeLods[s],M=3*C*(s>b-ts?s-b+ts:0),x=4*(this._cubeSize-C);g.envMap.value=e.texture,g.roughness.value=E,g.mipInt.value=b-i,Cr(u,M,x,3*C,2*C),l.setRenderTarget(u),l.render(p,Fo),g.envMap.value=u.texture,g.roughness.value=0,g.mipInt.value=b-s,Cr(e,M,x,3*C,2*C),l.setRenderTarget(e),l.render(p,Fo)}_blur(e,i,s,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",u),this._halfBlur(h,e,s,s,l,"longitudinal",u)}_halfBlur(e,i,s,l,u,h,p){const g=this._renderer,d=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Ue("blur direction must be either latitudinal or longitudinal!");const S=3,y=this._lodMeshes[l];y.material=d;const v=d.uniforms,E=this._sizeLods[s]-1,b=isFinite(u)?Math.PI/(2*E):2*Math.PI/(2*Cs-1),C=u/b,M=isFinite(u)?1+Math.floor(S*C):Cs;M>Cs&&ne(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Cs}`);const x=[];let D=0;for(let B=0;B<Cs;++B){const T=B/C,U=Math.exp(-T*T/2);x.push(U),B===0?D+=U:B<M&&(D+=2*U)}for(let B=0;B<x.length;B++)x[B]=x[B]/D;v.envMap.value=e.texture,v.samples.value=M,v.weights.value=x,v.latitudinal.value=h==="latitudinal",p&&(v.poleAxis.value=p);const{_lodMax:P}=this;v.dTheta.value=b,v.mipInt.value=P-s;const N=this._sizeLods[l],X=3*N*(l>P-ts?l-P+ts:0),H=4*(this._cubeSize-N);Cr(i,X,H,3*N,2*N),g.setRenderTarget(i),g.render(y,Fo)}}function Pb(o){const e=[],i=[],s=[];let l=o;const u=o-ts+1+c_.length;for(let h=0;h<u;h++){const p=Math.pow(2,l);e.push(p);let g=1/p;h>o-ts?g=c_[h-o+ts-1]:h===0&&(g=0),i.push(g);const d=1/(p-2),S=-d,y=1+d,v=[S,S,y,S,y,y,S,S,y,y,S,y],E=6,b=6,C=3,M=2,x=1,D=new Float32Array(C*b*E),P=new Float32Array(M*b*E),N=new Float32Array(x*b*E);for(let H=0;H<E;H++){const B=H%3*2/3-1,T=H>2?0:-1,U=[B,T,0,B+2/3,T,0,B+2/3,T+1,0,B,T,0,B+2/3,T+1,0,B,T+1,0];D.set(U,C*b*H),P.set(v,M*b*H);const ht=[H,H,H,H,H,H];N.set(ht,x*b*H)}const X=new Li;X.setAttribute("position",new Di(D,C)),X.setAttribute("uv",new Di(P,M)),X.setAttribute("faceIndex",new Di(N,x)),s.push(new mi(X,null)),l>ts&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function h_(o,e,i){const s=new wi(o,e,i);return s.texture.mapping=Yc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Cr(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function zb(o,e,i){return new Wi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Nb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Zc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:_a,depthTest:!1,depthWrite:!1})}function Fb(o,e,i){const s=new Float32Array(Cs),l=new at(0,1,0);return new Wi({name:"SphericalGaussianBlur",defines:{n:Cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Zc(),fragmentShader:`

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
		`,blending:_a,depthTest:!1,depthWrite:!1})}function d_(){return new Wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zc(),fragmentShader:`

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
		`,blending:_a,depthTest:!1,depthWrite:!1})}function p_(){return new Wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_a,depthTest:!1,depthWrite:!1})}function Zc(){return`

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
	`}class cv extends wi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new av(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new jo(5,5,5),u=new Wi({name:"CubemapFromEquirect",uniforms:Pr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Xn,blending:_a});u.uniforms.tEquirect.value=i;const h=new mi(l,u),p=i.minFilter;return i.minFilter===ws&&(i.minFilter=hn),new Xy(1,10,this).update(e,h),i.minFilter=p,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(u)}}function Bb(o){let e=new WeakMap,i=new WeakMap,s=null;function l(v,E=!1){return v==null?null:E?h(v):u(v)}function u(v){if(v&&v.isTexture){const E=v.mapping;if(E===oh||E===lh)if(e.has(v)){const b=e.get(v).texture;return p(b,v.mapping)}else{const b=v.image;if(b&&b.height>0){const C=new cv(b.height);return C.fromEquirectangularTexture(o,v),e.set(v,C),v.addEventListener("dispose",d),p(C.texture,v.mapping)}else return null}}return v}function h(v){if(v&&v.isTexture){const E=v.mapping,b=E===oh||E===lh,C=E===Ls||E===Lr;if(b||C){let M=i.get(v);const x=M!==void 0?M.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==x)return s===null&&(s=new f_(o)),M=b?s.fromEquirectangular(v,M):s.fromCubemap(v,M),M.texture.pmremVersion=v.pmremVersion,i.set(v,M),M.texture;if(M!==void 0)return M.texture;{const D=v.image;return b&&D&&D.height>0||C&&D&&g(D)?(s===null&&(s=new f_(o)),M=b?s.fromEquirectangular(v):s.fromCubemap(v),M.texture.pmremVersion=v.pmremVersion,i.set(v,M),v.addEventListener("dispose",S),M.texture):null}}}return v}function p(v,E){return E===oh?v.mapping=Ls:E===lh&&(v.mapping=Lr),v}function g(v){let E=0;const b=6;for(let C=0;C<b;C++)v[C]!==void 0&&E++;return E===b}function d(v){const E=v.target;E.removeEventListener("dispose",d);const b=e.get(E);b!==void 0&&(e.delete(E),b.dispose())}function S(v){const E=v.target;E.removeEventListener("dispose",S);const b=i.get(E);b!==void 0&&(i.delete(E),b.dispose())}function y(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:y}}function Ib(o){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=o.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Xc("WebGLRenderer: "+s+" extension not supported."),l}}}function Hb(o,e,i,s){const l={},u=new WeakMap;function h(y){const v=y.target;v.index!==null&&e.remove(v.index);for(const b in v.attributes)e.remove(v.attributes[b]);v.removeEventListener("dispose",h),delete l[v.id];const E=u.get(v);E&&(e.remove(E),u.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function p(y,v){return l[v.id]===!0||(v.addEventListener("dispose",h),l[v.id]=!0,i.memory.geometries++),v}function g(y){const v=y.attributes;for(const E in v)e.update(v[E],o.ARRAY_BUFFER)}function d(y){const v=[],E=y.index,b=y.attributes.position;let C=0;if(b===void 0)return;if(E!==null){const D=E.array;C=E.version;for(let P=0,N=D.length;P<N;P+=3){const X=D[P+0],H=D[P+1],B=D[P+2];v.push(X,H,H,B,B,X)}}else{const D=b.array;C=b.version;for(let P=0,N=D.length/3-1;P<N;P+=3){const X=P+0,H=P+1,B=P+2;v.push(X,H,H,B,B,X)}}const M=new(b.count>=65535?$_:J_)(v,1);M.version=C;const x=u.get(y);x&&e.remove(x),u.set(y,M)}function S(y){const v=u.get(y);if(v){const E=y.index;E!==null&&v.version<E.version&&d(y)}else d(y);return u.get(y)}return{get:p,update:g,getWireframeAttribute:S}}function Gb(o,e,i){let s;function l(v){s=v}let u,h;function p(v){u=v.type,h=v.bytesPerElement}function g(v,E){o.drawElements(s,E,u,v*h),i.update(E,s,1)}function d(v,E,b){b!==0&&(o.drawElementsInstanced(s,E,u,v*h,b),i.update(E,s,b))}function S(v,E,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,E,0,u,v,0,b);let M=0;for(let x=0;x<b;x++)M+=E[x];i.update(M,s,1)}function y(v,E,b,C){if(b===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<v.length;x++)d(v[x]/h,E[x],C[x]);else{M.multiDrawElementsInstancedWEBGL(s,E,0,u,v,0,C,0,b);let x=0;for(let D=0;D<b;D++)x+=E[D]*C[D];i.update(x,s,1)}}this.setMode=l,this.setIndex=p,this.render=g,this.renderInstances=d,this.renderMultiDraw=S,this.renderMultiDrawInstances=y}function Vb(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,h,p){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=p*(u/3);break;case o.LINES:i.lines+=p*(u/2);break;case o.LINE_STRIP:i.lines+=p*(u-1);break;case o.LINE_LOOP:i.lines+=p*u;break;case o.POINTS:i.points+=p*u;break;default:Ue("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function Xb(o,e,i){const s=new WeakMap,l=new $e;function u(h,p,g){const d=h.morphTargetInfluences,S=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,y=S!==void 0?S.length:0;let v=s.get(p);if(v===void 0||v.count!==y){let ht=function(){T.dispose(),s.delete(p),p.removeEventListener("dispose",ht)};var E=ht;v!==void 0&&v.texture.dispose();const b=p.morphAttributes.position!==void 0,C=p.morphAttributes.normal!==void 0,M=p.morphAttributes.color!==void 0,x=p.morphAttributes.position||[],D=p.morphAttributes.normal||[],P=p.morphAttributes.color||[];let N=0;b===!0&&(N=1),C===!0&&(N=2),M===!0&&(N=3);let X=p.attributes.position.count*N,H=1;X>e.maxTextureSize&&(H=Math.ceil(X/e.maxTextureSize),X=e.maxTextureSize);const B=new Float32Array(X*H*4*y),T=new Z_(B,X,H,y);T.type=Ci,T.needsUpdate=!0;const U=N*4;for(let G=0;G<y;G++){const Q=x[G],st=D[G],ot=P[G],J=X*H*4*G;for(let L=0;L<Q.count;L++){const F=L*U;b===!0&&(l.fromBufferAttribute(Q,L),B[J+F+0]=l.x,B[J+F+1]=l.y,B[J+F+2]=l.z,B[J+F+3]=0),C===!0&&(l.fromBufferAttribute(st,L),B[J+F+4]=l.x,B[J+F+5]=l.y,B[J+F+6]=l.z,B[J+F+7]=0),M===!0&&(l.fromBufferAttribute(ot,L),B[J+F+8]=l.x,B[J+F+9]=l.y,B[J+F+10]=l.z,B[J+F+11]=ot.itemSize===4?l.w:1)}}v={count:y,texture:T,size:new le(X,H)},s.set(p,v),p.addEventListener("dispose",ht)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)g.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let b=0;for(let M=0;M<d.length;M++)b+=d[M];const C=p.morphTargetsRelative?1:1-b;g.getUniforms().setValue(o,"morphTargetBaseInfluence",C),g.getUniforms().setValue(o,"morphTargetInfluences",d)}g.getUniforms().setValue(o,"morphTargetsTexture",v.texture,i),g.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:u}}function kb(o,e,i,s,l){let u=new WeakMap;function h(d){const S=l.render.frame,y=d.geometry,v=e.get(d,y);if(u.get(v)!==S&&(e.update(v),u.set(v,S)),d.isInstancedMesh&&(d.hasEventListener("dispose",g)===!1&&d.addEventListener("dispose",g),u.get(d)!==S&&(i.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&i.update(d.instanceColor,o.ARRAY_BUFFER),u.set(d,S))),d.isSkinnedMesh){const E=d.skeleton;u.get(E)!==S&&(E.update(),u.set(E,S))}return v}function p(){u=new WeakMap}function g(d){const S=d.target;S.removeEventListener("dispose",g),s.releaseStatesOfObject(S),i.remove(S.instanceMatrix),S.instanceColor!==null&&i.remove(S.instanceColor)}return{update:h,dispose:p}}const Wb={[N_]:"LINEAR_TONE_MAPPING",[O_]:"REINHARD_TONE_MAPPING",[P_]:"CINEON_TONE_MAPPING",[z_]:"ACES_FILMIC_TONE_MAPPING",[B_]:"AGX_TONE_MAPPING",[I_]:"NEUTRAL_TONE_MAPPING",[F_]:"CUSTOM_TONE_MAPPING"};function qb(o,e,i,s,l){const u=new wi(e,i,{type:o,depthBuffer:s,stencilBuffer:l}),h=new wi(e,i,{type:ki,depthBuffer:!1,stencilBuffer:!1}),p=new Li;p.setAttribute("position",new Ui([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new Ui([0,2,0,0,2,0],2));const g=new Ho({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new mi(p,g),S=new ov(-1,1,1,-1,0,1);let y=null,v=null,E=!1,b,C=null,M=[],x=!1;this.setSize=function(D,P){u.setSize(D,P),h.setSize(D,P);for(let N=0;N<M.length;N++){const X=M[N];X.setSize&&X.setSize(D,P)}},this.setEffects=function(D){M=D,x=M.length>0&&M[0].isRenderPass===!0;const P=u.width,N=u.height;for(let X=0;X<M.length;X++){const H=M[X];H.setSize&&H.setSize(P,N)}},this.begin=function(D,P){if(E||D.toneMapping===Vi&&M.length===0)return!1;if(C=P,P!==null){const N=P.width,X=P.height;(u.width!==N||u.height!==X)&&this.setSize(N,X)}return x===!1&&D.setRenderTarget(u),b=D.toneMapping,D.toneMapping=Vi,!0},this.hasRenderPass=function(){return x},this.end=function(D,P){D.toneMapping=b,E=!0;let N=u,X=h;for(let H=0;H<M.length;H++){const B=M[H];if(B.enabled!==!1&&(B.render(D,X,N,P),B.needsSwap!==!1)){const T=N;N=X,X=T}}if(y!==D.outputColorSpace||v!==D.toneMapping){y=D.outputColorSpace,v=D.toneMapping,g.defines={},Re.getTransfer(y)===Be&&(g.defines.SRGB_TRANSFER="");const H=Wb[v];H&&(g.defines[H]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=N.texture,D.setRenderTarget(C),D.render(d,S),C=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){u.dispose(),h.dispose(),p.dispose(),g.dispose()}}const uv=new Pn,Ld=new ko(1,1),fv=new Z_,hv=new _y,dv=new av,m_=[],g_=[],__=new Float32Array(16),v_=new Float32Array(9),x_=new Float32Array(4);function Br(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let u=m_[l];if(u===void 0&&(u=new Float32Array(l),m_[l]=u),e!==0){s.toArray(u,0);for(let h=1,p=0;h!==e;++h)p+=i,o[h].toArray(u,p)}return u}function gn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function _n(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function Kc(o,e){let i=g_[e];i===void 0&&(i=new Int32Array(e),g_[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function Yb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function jb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;o.uniform2fv(this.addr,e),_n(i,e)}}function Zb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(gn(i,e))return;o.uniform3fv(this.addr,e),_n(i,e)}}function Kb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;o.uniform4fv(this.addr,e),_n(i,e)}}function Qb(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(gn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),_n(i,e)}else{if(gn(i,s))return;x_.set(s),o.uniformMatrix2fv(this.addr,!1,x_),_n(i,s)}}function Jb(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(gn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),_n(i,e)}else{if(gn(i,s))return;v_.set(s),o.uniformMatrix3fv(this.addr,!1,v_),_n(i,s)}}function $b(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(gn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),_n(i,e)}else{if(gn(i,s))return;__.set(s),o.uniformMatrix4fv(this.addr,!1,__),_n(i,s)}}function tT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function eT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;o.uniform2iv(this.addr,e),_n(i,e)}}function nT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;o.uniform3iv(this.addr,e),_n(i,e)}}function iT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;o.uniform4iv(this.addr,e),_n(i,e)}}function aT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function sT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;o.uniform2uiv(this.addr,e),_n(i,e)}}function rT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;o.uniform3uiv(this.addr,e),_n(i,e)}}function oT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;o.uniform4uiv(this.addr,e),_n(i,e)}}function lT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(Ld.compareFunction=i.isReversedDepthBuffer()?Xd:Vd,u=Ld):u=uv,i.setTexture2D(e||u,l)}function cT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||hv,l)}function uT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||dv,l)}function fT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||fv,l)}function hT(o){switch(o){case 5126:return Yb;case 35664:return jb;case 35665:return Zb;case 35666:return Kb;case 35674:return Qb;case 35675:return Jb;case 35676:return $b;case 5124:case 35670:return tT;case 35667:case 35671:return eT;case 35668:case 35672:return nT;case 35669:case 35673:return iT;case 5125:return aT;case 36294:return sT;case 36295:return rT;case 36296:return oT;case 35678:case 36198:case 36298:case 36306:case 35682:return lT;case 35679:case 36299:case 36307:return cT;case 35680:case 36300:case 36308:case 36293:return uT;case 36289:case 36303:case 36311:case 36292:return fT}}function dT(o,e){o.uniform1fv(this.addr,e)}function pT(o,e){const i=Br(e,this.size,2);o.uniform2fv(this.addr,i)}function mT(o,e){const i=Br(e,this.size,3);o.uniform3fv(this.addr,i)}function gT(o,e){const i=Br(e,this.size,4);o.uniform4fv(this.addr,i)}function _T(o,e){const i=Br(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function vT(o,e){const i=Br(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function xT(o,e){const i=Br(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function ST(o,e){o.uniform1iv(this.addr,e)}function yT(o,e){o.uniform2iv(this.addr,e)}function MT(o,e){o.uniform3iv(this.addr,e)}function ET(o,e){o.uniform4iv(this.addr,e)}function bT(o,e){o.uniform1uiv(this.addr,e)}function TT(o,e){o.uniform2uiv(this.addr,e)}function AT(o,e){o.uniform3uiv(this.addr,e)}function RT(o,e){o.uniform4uiv(this.addr,e)}function CT(o,e,i){const s=this.cache,l=e.length,u=Kc(i,l);gn(s,u)||(o.uniform1iv(this.addr,u),_n(s,u));let h;this.type===o.SAMPLER_2D_SHADOW?h=Ld:h=uv;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||h,u[p])}function wT(o,e,i){const s=this.cache,l=e.length,u=Kc(i,l);gn(s,u)||(o.uniform1iv(this.addr,u),_n(s,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||hv,u[h])}function DT(o,e,i){const s=this.cache,l=e.length,u=Kc(i,l);gn(s,u)||(o.uniform1iv(this.addr,u),_n(s,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||dv,u[h])}function UT(o,e,i){const s=this.cache,l=e.length,u=Kc(i,l);gn(s,u)||(o.uniform1iv(this.addr,u),_n(s,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||fv,u[h])}function LT(o){switch(o){case 5126:return dT;case 35664:return pT;case 35665:return mT;case 35666:return gT;case 35674:return _T;case 35675:return vT;case 35676:return xT;case 5124:case 35670:return ST;case 35667:case 35671:return yT;case 35668:case 35672:return MT;case 35669:case 35673:return ET;case 5125:return bT;case 36294:return TT;case 36295:return AT;case 36296:return RT;case 35678:case 36198:case 36298:case 36306:case 35682:return CT;case 35679:case 36299:case 36307:return wT;case 35680:case 36300:case 36308:case 36293:return DT;case 36289:case 36303:case 36311:case 36292:return UT}}class NT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=hT(i.type)}}class OT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=LT(i.type)}}class PT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const p=l[u];p.setValue(e,i[p.id],s)}}}const Ih=/(\w+)(\])?(\[|\.)?/g;function S_(o,e){o.seq.push(e),o.map[e.id]=e}function zT(o,e,i){const s=o.name,l=s.length;for(Ih.lastIndex=0;;){const u=Ih.exec(s),h=Ih.lastIndex;let p=u[1];const g=u[2]==="]",d=u[3];if(g&&(p=p|0),d===void 0||d==="["&&h+2===l){S_(i,d===void 0?new NT(p,o,e):new OT(p,o,e));break}else{let y=i.map[p];y===void 0&&(y=new PT(p),S_(i,y)),i=y}}}class Ic{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const p=e.getActiveUniform(i,h),g=e.getUniformLocation(i,p.name);zT(p,g,this)}const l=[],u=[];for(const h of this.seq)h.type===e.SAMPLER_2D_SHADOW||h.type===e.SAMPLER_CUBE_SHADOW||h.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(h):u.push(h);l.length>0&&(this.seq=l.concat(u))}setValue(e,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let u=0,h=i.length;u!==h;++u){const p=i[u],g=s[p.id];g.needsUpdate!==!1&&p.setValue(e,g.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function y_(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const FT=37297;let BT=0;function IT(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const p=h+1;s.push(`${p===e?">":" "} ${p}: ${i[h]}`)}return s.join(`
`)}const M_=new de;function HT(o){Re._getMatrix(M_,Re.workingColorSpace,o);const e=`mat3( ${M_.elements.map(i=>i.toFixed(4))} )`;switch(Re.getTransfer(o)){case Hc:return[e,"LinearTransferOETF"];case Be:return[e,"sRGBTransferOETF"];default:return ne("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function E_(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),u=(o.getShaderInfoLog(e)||"").trim();if(s&&u==="")return"";const h=/ERROR: 0:(\d+)/.exec(u);if(h){const p=parseInt(h[1]);return i.toUpperCase()+`

`+u+`

`+IT(o.getShaderSource(e),p)}else return u}function GT(o,e){const i=HT(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const VT={[N_]:"Linear",[O_]:"Reinhard",[P_]:"Cineon",[z_]:"ACESFilmic",[B_]:"AgX",[I_]:"Neutral",[F_]:"Custom"};function XT(o,e){const i=VT[e];return i===void 0?(ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Lc=new at;function kT(){Re.getLuminanceCoefficients(Lc);const o=Lc.x.toFixed(4),e=Lc.y.toFixed(4),i=Lc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function WT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Go).join(`
`)}function qT(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function YT(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(e,l),h=u.name;let p=1;u.type===o.FLOAT_MAT2&&(p=2),u.type===o.FLOAT_MAT3&&(p=3),u.type===o.FLOAT_MAT4&&(p=4),i[h]={type:u.type,location:o.getAttribLocation(e,h),locationSize:p}}return i}function Go(o){return o!==""}function b_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function T_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nd(o){return o.replace(jT,KT)}const ZT=new Map;function KT(o,e){let i=pe[e];if(i===void 0){const s=ZT.get(e);if(s!==void 0)i=pe[s],ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Nd(i)}const QT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function A_(o){return o.replace(QT,JT)}function JT(o,e,i,s){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function R_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const $T={[Oc]:"SHADOWMAP_TYPE_PCF",[Io]:"SHADOWMAP_TYPE_VSM"};function t1(o){return $T[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const e1={[Ls]:"ENVMAP_TYPE_CUBE",[Lr]:"ENVMAP_TYPE_CUBE",[Yc]:"ENVMAP_TYPE_CUBE_UV"};function n1(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":e1[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const i1={[Lr]:"ENVMAP_MODE_REFRACTION"};function a1(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":i1[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const s1={[L_]:"ENVMAP_BLENDING_MULTIPLY",[ZS]:"ENVMAP_BLENDING_MIX",[KS]:"ENVMAP_BLENDING_ADD"};function r1(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":s1[o.combine]||"ENVMAP_BLENDING_NONE"}function o1(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function l1(o,e,i,s){const l=o.getContext(),u=i.defines;let h=i.vertexShader,p=i.fragmentShader;const g=t1(i),d=n1(i),S=a1(i),y=r1(i),v=o1(i),E=WT(i),b=qT(u),C=l.createProgram();let M,x,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Go).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Go).join(`
`),x.length>0&&(x+=`
`)):(M=[R_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Go).join(`
`),x=[R_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+S:"",i.envMap?"#define "+y:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Vi?"#define TONE_MAPPING":"",i.toneMapping!==Vi?pe.tonemapping_pars_fragment:"",i.toneMapping!==Vi?XT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,GT("linearToOutputTexel",i.outputColorSpace),kT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Go).join(`
`)),h=Nd(h),h=b_(h,i),h=T_(h,i),p=Nd(p),p=b_(p,i),p=T_(p,i),h=A_(h),p=A_(p),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,M=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===B0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===B0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const P=D+M+h,N=D+x+p,X=y_(l,l.VERTEX_SHADER,P),H=y_(l,l.FRAGMENT_SHADER,N);l.attachShader(C,X),l.attachShader(C,H),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function B(G){if(o.debug.checkShaderErrors){const Q=l.getProgramInfoLog(C)||"",st=l.getShaderInfoLog(X)||"",ot=l.getShaderInfoLog(H)||"",J=Q.trim(),L=st.trim(),F=ot.trim();let lt=!0,mt=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(lt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,X,H);else{const Et=E_(l,X,"vertex"),O=E_(l,H,"fragment");Ue("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+J+`
`+Et+`
`+O)}else J!==""?ne("WebGLProgram: Program Info Log:",J):(L===""||F==="")&&(mt=!1);mt&&(G.diagnostics={runnable:lt,programLog:J,vertexShader:{log:L,prefix:M},fragmentShader:{log:F,prefix:x}})}l.deleteShader(X),l.deleteShader(H),T=new Ic(l,C),U=YT(l,C)}let T;this.getUniforms=function(){return T===void 0&&B(this),T};let U;this.getAttributes=function(){return U===void 0&&B(this),U};let ht=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ht===!1&&(ht=l.getProgramParameter(C,FT)),ht},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=BT++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=X,this.fragmentShader=H,this}let c1=0;class u1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new f1(e),i.set(e,s)),s}}class f1{constructor(e){this.id=c1++,this.code=e,this.usedTimes=0}}function h1(o,e,i,s,l,u){const h=new K_,p=new u1,g=new Set,d=[],S=new Map,y=s.logarithmicDepthBuffer;let v=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return g.add(T),T===0?"uv":`uv${T}`}function C(T,U,ht,G,Q){const st=G.fog,ot=Q.geometry,J=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,L=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,F=e.get(T.envMap||J,L),lt=F&&F.mapping===Yc?F.image.height:null,mt=E[T.type];T.precision!==null&&(v=s.getMaxPrecision(T.precision),v!==T.precision&&ne("WebGLProgram.getParameters:",T.precision,"not supported, using",v,"instead."));const Et=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,O=Et!==void 0?Et.length:0;let Y=0;ot.morphAttributes.position!==void 0&&(Y=1),ot.morphAttributes.normal!==void 0&&(Y=2),ot.morphAttributes.color!==void 0&&(Y=3);let _t,At,Ot,et;if(mt){const Ae=Hi[mt];_t=Ae.vertexShader,At=Ae.fragmentShader}else _t=T.vertexShader,At=T.fragmentShader,p.update(T),Ot=p.getVertexShaderID(T),et=p.getFragmentShaderID(T);const vt=o.getRenderTarget(),St=o.state.buffers.depth.getReversed(),Gt=Q.isInstancedMesh===!0,Zt=Q.isBatchedMesh===!0,$t=!!T.map,Ye=!!T.matcap,ge=!!F,me=!!T.aoMap,be=!!T.lightMap,ae=!!T.bumpMap,ke=!!T.normalMap,V=!!T.displacementMap,Ve=!!T.emissiveMap,ye=!!T.metalnessMap,Te=!!T.roughnessMap,Xt=T.anisotropy>0,w=T.clearcoat>0,m=T.dispersion>0,z=T.iridescence>0,Z=T.sheen>0,ft=T.transmission>0,rt=Xt&&!!T.anisotropyMap,Dt=w&&!!T.clearcoatMap,Rt=w&&!!T.clearcoatNormalMap,qt=w&&!!T.clearcoatRoughnessMap,Jt=z&&!!T.iridescenceMap,bt=z&&!!T.iridescenceThicknessMap,yt=Z&&!!T.sheenColorMap,Pt=Z&&!!T.sheenRoughnessMap,Nt=!!T.specularMap,zt=!!T.specularColorMap,ue=!!T.specularIntensityMap,q=ft&&!!T.transmissionMap,Ct=ft&&!!T.thicknessMap,Tt=!!T.gradientMap,Ft=!!T.alphaMap,Mt=T.alphaTest>0,dt=!!T.alphaHash,It=!!T.extensions;let ie=Vi;T.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(ie=o.toneMapping);const Pe={shaderID:mt,shaderType:T.type,shaderName:T.name,vertexShader:_t,fragmentShader:At,defines:T.defines,customVertexShaderID:Ot,customFragmentShaderID:et,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:v,batching:Zt,batchingColor:Zt&&Q._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&Q.instanceColor!==null,instancingMorph:Gt&&Q.morphTexture!==null,outputColorSpace:vt===null?o.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:Or,alphaToCoverage:!!T.alphaToCoverage,map:$t,matcap:Ye,envMap:ge,envMapMode:ge&&F.mapping,envMapCubeUVHeight:lt,aoMap:me,lightMap:be,bumpMap:ae,normalMap:ke,displacementMap:V,emissiveMap:Ve,normalMapObjectSpace:ke&&T.normalMapType===ty,normalMapTangentSpace:ke&&T.normalMapType===$S,metalnessMap:ye,roughnessMap:Te,anisotropy:Xt,anisotropyMap:rt,clearcoat:w,clearcoatMap:Dt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:qt,dispersion:m,iridescence:z,iridescenceMap:Jt,iridescenceThicknessMap:bt,sheen:Z,sheenColorMap:yt,sheenRoughnessMap:Pt,specularMap:Nt,specularColorMap:zt,specularIntensityMap:ue,transmission:ft,transmissionMap:q,thicknessMap:Ct,gradientMap:Tt,opaque:T.transparent===!1&&T.blending===wr&&T.alphaToCoverage===!1,alphaMap:Ft,alphaTest:Mt,alphaHash:dt,combine:T.combine,mapUv:$t&&b(T.map.channel),aoMapUv:me&&b(T.aoMap.channel),lightMapUv:be&&b(T.lightMap.channel),bumpMapUv:ae&&b(T.bumpMap.channel),normalMapUv:ke&&b(T.normalMap.channel),displacementMapUv:V&&b(T.displacementMap.channel),emissiveMapUv:Ve&&b(T.emissiveMap.channel),metalnessMapUv:ye&&b(T.metalnessMap.channel),roughnessMapUv:Te&&b(T.roughnessMap.channel),anisotropyMapUv:rt&&b(T.anisotropyMap.channel),clearcoatMapUv:Dt&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:qt&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Jt&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&b(T.sheenRoughnessMap.channel),specularMapUv:Nt&&b(T.specularMap.channel),specularColorMapUv:zt&&b(T.specularColorMap.channel),specularIntensityMapUv:ue&&b(T.specularIntensityMap.channel),transmissionMapUv:q&&b(T.transmissionMap.channel),thicknessMapUv:Ct&&b(T.thicknessMap.channel),alphaMapUv:Ft&&b(T.alphaMap.channel),vertexTangents:!!ot.attributes.tangent&&(ke||Xt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!ot.attributes.uv&&($t||Ft),fog:!!st,useFog:T.fog===!0,fogExp2:!!st&&st.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||ot.attributes.normal===void 0&&ke===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:St,skinning:Q.isSkinnedMesh===!0,morphTargets:ot.morphAttributes.position!==void 0,morphNormals:ot.morphAttributes.normal!==void 0,morphColors:ot.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:Y,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&ht.length>0,shadowMapType:o.shadowMap.type,toneMapping:ie,decodeVideoTexture:$t&&T.map.isVideoTexture===!0&&Re.getTransfer(T.map.colorSpace)===Be,decodeVideoTextureEmissive:Ve&&T.emissiveMap.isVideoTexture===!0&&Re.getTransfer(T.emissiveMap.colorSpace)===Be,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ga,flipSided:T.side===Xn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:It&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&T.extensions.multiDraw===!0||Zt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Pe.vertexUv1s=g.has(1),Pe.vertexUv2s=g.has(2),Pe.vertexUv3s=g.has(3),g.clear(),Pe}function M(T){const U=[];if(T.shaderID?U.push(T.shaderID):(U.push(T.customVertexShaderID),U.push(T.customFragmentShaderID)),T.defines!==void 0)for(const ht in T.defines)U.push(ht),U.push(T.defines[ht]);return T.isRawShaderMaterial===!1&&(x(U,T),D(U,T),U.push(o.outputColorSpace)),U.push(T.customProgramCacheKey),U.join()}function x(T,U){T.push(U.precision),T.push(U.outputColorSpace),T.push(U.envMapMode),T.push(U.envMapCubeUVHeight),T.push(U.mapUv),T.push(U.alphaMapUv),T.push(U.lightMapUv),T.push(U.aoMapUv),T.push(U.bumpMapUv),T.push(U.normalMapUv),T.push(U.displacementMapUv),T.push(U.emissiveMapUv),T.push(U.metalnessMapUv),T.push(U.roughnessMapUv),T.push(U.anisotropyMapUv),T.push(U.clearcoatMapUv),T.push(U.clearcoatNormalMapUv),T.push(U.clearcoatRoughnessMapUv),T.push(U.iridescenceMapUv),T.push(U.iridescenceThicknessMapUv),T.push(U.sheenColorMapUv),T.push(U.sheenRoughnessMapUv),T.push(U.specularMapUv),T.push(U.specularColorMapUv),T.push(U.specularIntensityMapUv),T.push(U.transmissionMapUv),T.push(U.thicknessMapUv),T.push(U.combine),T.push(U.fogExp2),T.push(U.sizeAttenuation),T.push(U.morphTargetsCount),T.push(U.morphAttributeCount),T.push(U.numDirLights),T.push(U.numPointLights),T.push(U.numSpotLights),T.push(U.numSpotLightMaps),T.push(U.numHemiLights),T.push(U.numRectAreaLights),T.push(U.numDirLightShadows),T.push(U.numPointLightShadows),T.push(U.numSpotLightShadows),T.push(U.numSpotLightShadowsWithMaps),T.push(U.numLightProbes),T.push(U.shadowMapType),T.push(U.toneMapping),T.push(U.numClippingPlanes),T.push(U.numClipIntersection),T.push(U.depthPacking)}function D(T,U){h.disableAll(),U.instancing&&h.enable(0),U.instancingColor&&h.enable(1),U.instancingMorph&&h.enable(2),U.matcap&&h.enable(3),U.envMap&&h.enable(4),U.normalMapObjectSpace&&h.enable(5),U.normalMapTangentSpace&&h.enable(6),U.clearcoat&&h.enable(7),U.iridescence&&h.enable(8),U.alphaTest&&h.enable(9),U.vertexColors&&h.enable(10),U.vertexAlphas&&h.enable(11),U.vertexUv1s&&h.enable(12),U.vertexUv2s&&h.enable(13),U.vertexUv3s&&h.enable(14),U.vertexTangents&&h.enable(15),U.anisotropy&&h.enable(16),U.alphaHash&&h.enable(17),U.batching&&h.enable(18),U.dispersion&&h.enable(19),U.batchingColor&&h.enable(20),U.gradientMap&&h.enable(21),T.push(h.mask),h.disableAll(),U.fog&&h.enable(0),U.useFog&&h.enable(1),U.flatShading&&h.enable(2),U.logarithmicDepthBuffer&&h.enable(3),U.reversedDepthBuffer&&h.enable(4),U.skinning&&h.enable(5),U.morphTargets&&h.enable(6),U.morphNormals&&h.enable(7),U.morphColors&&h.enable(8),U.premultipliedAlpha&&h.enable(9),U.shadowMapEnabled&&h.enable(10),U.doubleSided&&h.enable(11),U.flipSided&&h.enable(12),U.useDepthPacking&&h.enable(13),U.dithering&&h.enable(14),U.transmission&&h.enable(15),U.sheen&&h.enable(16),U.opaque&&h.enable(17),U.pointsUvs&&h.enable(18),U.decodeVideoTexture&&h.enable(19),U.decodeVideoTextureEmissive&&h.enable(20),U.alphaToCoverage&&h.enable(21),T.push(h.mask)}function P(T){const U=E[T.type];let ht;if(U){const G=Hi[U];ht=By.clone(G.uniforms)}else ht=T.uniforms;return ht}function N(T,U){let ht=S.get(U);return ht!==void 0?++ht.usedTimes:(ht=new l1(o,U,T,l),d.push(ht),S.set(U,ht)),ht}function X(T){if(--T.usedTimes===0){const U=d.indexOf(T);d[U]=d[d.length-1],d.pop(),S.delete(T.cacheKey),T.destroy()}}function H(T){p.remove(T)}function B(){p.dispose()}return{getParameters:C,getProgramCacheKey:M,getUniforms:P,acquireProgram:N,releaseProgram:X,releaseShaderCache:H,programs:d,dispose:B}}function d1(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let p=o.get(h);return p===void 0&&(p={},o.set(h,p)),p}function s(h){o.delete(h)}function l(h,p,g){o.get(h)[p]=g}function u(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:u}}function p1(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.materialVariant!==e.materialVariant?o.materialVariant-e.materialVariant:o.z!==e.z?o.z-e.z:o.id-e.id}function C_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function w_(){const o=[];let e=0;const i=[],s=[],l=[];function u(){e=0,i.length=0,s.length=0,l.length=0}function h(v){let E=0;return v.isInstancedMesh&&(E+=2),v.isSkinnedMesh&&(E+=1),E}function p(v,E,b,C,M,x){let D=o[e];return D===void 0?(D={id:v.id,object:v,geometry:E,material:b,materialVariant:h(v),groupOrder:C,renderOrder:v.renderOrder,z:M,group:x},o[e]=D):(D.id=v.id,D.object=v,D.geometry=E,D.material=b,D.materialVariant=h(v),D.groupOrder=C,D.renderOrder=v.renderOrder,D.z=M,D.group=x),e++,D}function g(v,E,b,C,M,x){const D=p(v,E,b,C,M,x);b.transmission>0?s.push(D):b.transparent===!0?l.push(D):i.push(D)}function d(v,E,b,C,M,x){const D=p(v,E,b,C,M,x);b.transmission>0?s.unshift(D):b.transparent===!0?l.unshift(D):i.unshift(D)}function S(v,E){i.length>1&&i.sort(v||p1),s.length>1&&s.sort(E||C_),l.length>1&&l.sort(E||C_)}function y(){for(let v=e,E=o.length;v<E;v++){const b=o[v];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:g,unshift:d,finish:y,sort:S}}function m1(){let o=new WeakMap;function e(s,l){const u=o.get(s);let h;return u===void 0?(h=new w_,o.set(s,[h])):l>=u.length?(h=new w_,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function g1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new at,color:new Ne};break;case"SpotLight":i={position:new at,direction:new at,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new at,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":i={direction:new at,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":i={color:new Ne,position:new at,halfWidth:new at,halfHeight:new at};break}return o[e.id]=i,i}}}function _1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let v1=0;function x1(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function S1(o){const e=new g1,i=_1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new at);const l=new at,u=new nn,h=new nn;function p(d){let S=0,y=0,v=0;for(let U=0;U<9;U++)s.probe[U].set(0,0,0);let E=0,b=0,C=0,M=0,x=0,D=0,P=0,N=0,X=0,H=0,B=0;d.sort(x1);for(let U=0,ht=d.length;U<ht;U++){const G=d[U],Q=G.color,st=G.intensity,ot=G.distance;let J=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Nr?J=G.shadow.map.texture:J=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)S+=Q.r*st,y+=Q.g*st,v+=Q.b*st;else if(G.isLightProbe){for(let L=0;L<9;L++)s.probe[L].addScaledVector(G.sh.coefficients[L],st);B++}else if(G.isDirectionalLight){const L=e.get(G);if(L.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const F=G.shadow,lt=i.get(G);lt.shadowIntensity=F.intensity,lt.shadowBias=F.bias,lt.shadowNormalBias=F.normalBias,lt.shadowRadius=F.radius,lt.shadowMapSize=F.mapSize,s.directionalShadow[E]=lt,s.directionalShadowMap[E]=J,s.directionalShadowMatrix[E]=G.shadow.matrix,D++}s.directional[E]=L,E++}else if(G.isSpotLight){const L=e.get(G);L.position.setFromMatrixPosition(G.matrixWorld),L.color.copy(Q).multiplyScalar(st),L.distance=ot,L.coneCos=Math.cos(G.angle),L.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),L.decay=G.decay,s.spot[C]=L;const F=G.shadow;if(G.map&&(s.spotLightMap[X]=G.map,X++,F.updateMatrices(G),G.castShadow&&H++),s.spotLightMatrix[C]=F.matrix,G.castShadow){const lt=i.get(G);lt.shadowIntensity=F.intensity,lt.shadowBias=F.bias,lt.shadowNormalBias=F.normalBias,lt.shadowRadius=F.radius,lt.shadowMapSize=F.mapSize,s.spotShadow[C]=lt,s.spotShadowMap[C]=J,N++}C++}else if(G.isRectAreaLight){const L=e.get(G);L.color.copy(Q).multiplyScalar(st),L.halfWidth.set(G.width*.5,0,0),L.halfHeight.set(0,G.height*.5,0),s.rectArea[M]=L,M++}else if(G.isPointLight){const L=e.get(G);if(L.color.copy(G.color).multiplyScalar(G.intensity),L.distance=G.distance,L.decay=G.decay,G.castShadow){const F=G.shadow,lt=i.get(G);lt.shadowIntensity=F.intensity,lt.shadowBias=F.bias,lt.shadowNormalBias=F.normalBias,lt.shadowRadius=F.radius,lt.shadowMapSize=F.mapSize,lt.shadowCameraNear=F.camera.near,lt.shadowCameraFar=F.camera.far,s.pointShadow[b]=lt,s.pointShadowMap[b]=J,s.pointShadowMatrix[b]=G.shadow.matrix,P++}s.point[b]=L,b++}else if(G.isHemisphereLight){const L=e.get(G);L.skyColor.copy(G.color).multiplyScalar(st),L.groundColor.copy(G.groundColor).multiplyScalar(st),s.hemi[x]=L,x++}}M>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Lt.LTC_FLOAT_1,s.rectAreaLTC2=Lt.LTC_FLOAT_2):(s.rectAreaLTC1=Lt.LTC_HALF_1,s.rectAreaLTC2=Lt.LTC_HALF_2)),s.ambient[0]=S,s.ambient[1]=y,s.ambient[2]=v;const T=s.hash;(T.directionalLength!==E||T.pointLength!==b||T.spotLength!==C||T.rectAreaLength!==M||T.hemiLength!==x||T.numDirectionalShadows!==D||T.numPointShadows!==P||T.numSpotShadows!==N||T.numSpotMaps!==X||T.numLightProbes!==B)&&(s.directional.length=E,s.spot.length=C,s.rectArea.length=M,s.point.length=b,s.hemi.length=x,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=N,s.spotShadowMap.length=N,s.directionalShadowMatrix.length=D,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=N+X-H,s.spotLightMap.length=X,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=B,T.directionalLength=E,T.pointLength=b,T.spotLength=C,T.rectAreaLength=M,T.hemiLength=x,T.numDirectionalShadows=D,T.numPointShadows=P,T.numSpotShadows=N,T.numSpotMaps=X,T.numLightProbes=B,s.version=v1++)}function g(d,S){let y=0,v=0,E=0,b=0,C=0;const M=S.matrixWorldInverse;for(let x=0,D=d.length;x<D;x++){const P=d[x];if(P.isDirectionalLight){const N=s.directional[y];N.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(M),y++}else if(P.isSpotLight){const N=s.spot[E];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(M),N.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(M),E++}else if(P.isRectAreaLight){const N=s.rectArea[b];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(M),h.identity(),u.copy(P.matrixWorld),u.premultiply(M),h.extractRotation(u),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),N.halfWidth.applyMatrix4(h),N.halfHeight.applyMatrix4(h),b++}else if(P.isPointLight){const N=s.point[v];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(M),v++}else if(P.isHemisphereLight){const N=s.hemi[C];N.direction.setFromMatrixPosition(P.matrixWorld),N.direction.transformDirection(M),C++}}}return{setup:p,setupView:g,state:s}}function D_(o){const e=new S1(o),i=[],s=[];function l(S){d.camera=S,i.length=0,s.length=0}function u(S){i.push(S)}function h(S){s.push(S)}function p(){e.setup(i)}function g(S){e.setupView(i,S)}const d={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:d,setupLights:p,setupLightsView:g,pushLight:u,pushShadow:h}}function y1(o){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let p;return h===void 0?(p=new D_(o),e.set(l,[p])):u>=h.length?(p=new D_(o),h.push(p)):p=h[u],p}function s(){e=new WeakMap}return{get:i,dispose:s}}const M1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,E1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,b1=[new at(1,0,0),new at(-1,0,0),new at(0,1,0),new at(0,-1,0),new at(0,0,1),new at(0,0,-1)],T1=[new at(0,-1,0),new at(0,-1,0),new at(0,0,1),new at(0,0,-1),new at(0,-1,0),new at(0,-1,0)],U_=new nn,Bo=new at,Hh=new at;function A1(o,e,i){let s=new iv;const l=new le,u=new le,h=new $e,p=new Gy,g=new Vy,d={},S=i.maxTextureSize,y={[es]:Xn,[Xn]:es,[ga]:ga},v=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:M1,fragmentShader:E1}),E=v.clone();E.defines.HORIZONTAL_PASS=1;const b=new Li;b.setAttribute("position",new Di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new mi(b,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oc;let x=this.type;this.render=function(H,B,T){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||H.length===0)return;this.type===DS&&(ne("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Oc);const U=o.getRenderTarget(),ht=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),Q=o.state;Q.setBlending(_a),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const st=x!==this.type;st&&B.traverse(function(ot){ot.material&&(Array.isArray(ot.material)?ot.material.forEach(J=>J.needsUpdate=!0):ot.material.needsUpdate=!0)});for(let ot=0,J=H.length;ot<J;ot++){const L=H[ot],F=L.shadow;if(F===void 0){ne("WebGLShadowMap:",L,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;l.copy(F.mapSize);const lt=F.getFrameExtents();l.multiply(lt),u.copy(F.mapSize),(l.x>S||l.y>S)&&(l.x>S&&(u.x=Math.floor(S/lt.x),l.x=u.x*lt.x,F.mapSize.x=u.x),l.y>S&&(u.y=Math.floor(S/lt.y),l.y=u.y*lt.y,F.mapSize.y=u.y));const mt=o.state.buffers.depth.getReversed();if(F.camera._reversedDepth=mt,F.map===null||st===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Io){if(L.isPointLight){ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new wi(l.x,l.y,{format:Nr,type:ki,minFilter:hn,magFilter:hn,generateMipmaps:!1}),F.map.texture.name=L.name+".shadowMap",F.map.depthTexture=new ko(l.x,l.y,Ci),F.map.depthTexture.name=L.name+".shadowMapDepth",F.map.depthTexture.format=xa,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=bn,F.map.depthTexture.magFilter=bn}else L.isPointLight?(F.map=new cv(l.x),F.map.depthTexture=new zy(l.x,Xi)):(F.map=new wi(l.x,l.y),F.map.depthTexture=new ko(l.x,l.y,Xi)),F.map.depthTexture.name=L.name+".shadowMap",F.map.depthTexture.format=xa,this.type===Oc?(F.map.depthTexture.compareFunction=mt?Xd:Vd,F.map.depthTexture.minFilter=hn,F.map.depthTexture.magFilter=hn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=bn,F.map.depthTexture.magFilter=bn);F.camera.updateProjectionMatrix()}const Et=F.map.isWebGLCubeRenderTarget?6:1;for(let O=0;O<Et;O++){if(F.map.isWebGLCubeRenderTarget)o.setRenderTarget(F.map,O),o.clear();else{O===0&&(o.setRenderTarget(F.map),o.clear());const Y=F.getViewport(O);h.set(u.x*Y.x,u.y*Y.y,u.x*Y.z,u.y*Y.w),Q.viewport(h)}if(L.isPointLight){const Y=F.camera,_t=F.matrix,At=L.distance||Y.far;At!==Y.far&&(Y.far=At,Y.updateProjectionMatrix()),Bo.setFromMatrixPosition(L.matrixWorld),Y.position.copy(Bo),Hh.copy(Y.position),Hh.add(b1[O]),Y.up.copy(T1[O]),Y.lookAt(Hh),Y.updateMatrixWorld(),_t.makeTranslation(-Bo.x,-Bo.y,-Bo.z),U_.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),F._frustum.setFromProjectionMatrix(U_,Y.coordinateSystem,Y.reversedDepth)}else F.updateMatrices(L);s=F.getFrustum(),N(B,T,F.camera,L,this.type)}F.isPointLightShadow!==!0&&this.type===Io&&D(F,T),F.needsUpdate=!1}x=this.type,M.needsUpdate=!1,o.setRenderTarget(U,ht,G)};function D(H,B){const T=e.update(C);v.defines.VSM_SAMPLES!==H.blurSamples&&(v.defines.VSM_SAMPLES=H.blurSamples,E.defines.VSM_SAMPLES=H.blurSamples,v.needsUpdate=!0,E.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new wi(l.x,l.y,{format:Nr,type:ki})),v.uniforms.shadow_pass.value=H.map.depthTexture,v.uniforms.resolution.value=H.mapSize,v.uniforms.radius.value=H.radius,o.setRenderTarget(H.mapPass),o.clear(),o.renderBufferDirect(B,null,T,v,C,null),E.uniforms.shadow_pass.value=H.mapPass.texture,E.uniforms.resolution.value=H.mapSize,E.uniforms.radius.value=H.radius,o.setRenderTarget(H.map),o.clear(),o.renderBufferDirect(B,null,T,E,C,null)}function P(H,B,T,U){let ht=null;const G=T.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(G!==void 0)ht=G;else if(ht=T.isPointLight===!0?g:p,o.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const Q=ht.uuid,st=B.uuid;let ot=d[Q];ot===void 0&&(ot={},d[Q]=ot);let J=ot[st];J===void 0&&(J=ht.clone(),ot[st]=J,B.addEventListener("dispose",X)),ht=J}if(ht.visible=B.visible,ht.wireframe=B.wireframe,U===Io?ht.side=B.shadowSide!==null?B.shadowSide:B.side:ht.side=B.shadowSide!==null?B.shadowSide:y[B.side],ht.alphaMap=B.alphaMap,ht.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,ht.map=B.map,ht.clipShadows=B.clipShadows,ht.clippingPlanes=B.clippingPlanes,ht.clipIntersection=B.clipIntersection,ht.displacementMap=B.displacementMap,ht.displacementScale=B.displacementScale,ht.displacementBias=B.displacementBias,ht.wireframeLinewidth=B.wireframeLinewidth,ht.linewidth=B.linewidth,T.isPointLight===!0&&ht.isMeshDistanceMaterial===!0){const Q=o.properties.get(ht);Q.light=T}return ht}function N(H,B,T,U,ht){if(H.visible===!1)return;if(H.layers.test(B.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&ht===Io)&&(!H.frustumCulled||s.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,H.matrixWorld);const st=e.update(H),ot=H.material;if(Array.isArray(ot)){const J=st.groups;for(let L=0,F=J.length;L<F;L++){const lt=J[L],mt=ot[lt.materialIndex];if(mt&&mt.visible){const Et=P(H,mt,U,ht);H.onBeforeShadow(o,H,B,T,st,Et,lt),o.renderBufferDirect(T,null,st,Et,H,lt),H.onAfterShadow(o,H,B,T,st,Et,lt)}}}else if(ot.visible){const J=P(H,ot,U,ht);H.onBeforeShadow(o,H,B,T,st,J,null),o.renderBufferDirect(T,null,st,J,H,null),H.onAfterShadow(o,H,B,T,st,J,null)}}const Q=H.children;for(let st=0,ot=Q.length;st<ot;st++)N(Q[st],B,T,U,ht)}function X(H){H.target.removeEventListener("dispose",X);for(const T in d){const U=d[T],ht=H.target.uuid;ht in U&&(U[ht].dispose(),delete U[ht])}}}function R1(o,e){function i(){let q=!1;const Ct=new $e;let Tt=null;const Ft=new $e(0,0,0,0);return{setMask:function(Mt){Tt!==Mt&&!q&&(o.colorMask(Mt,Mt,Mt,Mt),Tt=Mt)},setLocked:function(Mt){q=Mt},setClear:function(Mt,dt,It,ie,Pe){Pe===!0&&(Mt*=ie,dt*=ie,It*=ie),Ct.set(Mt,dt,It,ie),Ft.equals(Ct)===!1&&(o.clearColor(Mt,dt,It,ie),Ft.copy(Ct))},reset:function(){q=!1,Tt=null,Ft.set(-1,0,0,0)}}}function s(){let q=!1,Ct=!1,Tt=null,Ft=null,Mt=null;return{setReversed:function(dt){if(Ct!==dt){const It=e.get("EXT_clip_control");dt?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),Ct=dt;const ie=Mt;Mt=null,this.setClear(ie)}},getReversed:function(){return Ct},setTest:function(dt){dt?vt(o.DEPTH_TEST):St(o.DEPTH_TEST)},setMask:function(dt){Tt!==dt&&!q&&(o.depthMask(dt),Tt=dt)},setFunc:function(dt){if(Ct&&(dt=uy[dt]),Ft!==dt){switch(dt){case kh:o.depthFunc(o.NEVER);break;case Wh:o.depthFunc(o.ALWAYS);break;case qh:o.depthFunc(o.LESS);break;case Ur:o.depthFunc(o.LEQUAL);break;case Yh:o.depthFunc(o.EQUAL);break;case jh:o.depthFunc(o.GEQUAL);break;case Zh:o.depthFunc(o.GREATER);break;case Kh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ft=dt}},setLocked:function(dt){q=dt},setClear:function(dt){Mt!==dt&&(Mt=dt,Ct&&(dt=1-dt),o.clearDepth(dt))},reset:function(){q=!1,Tt=null,Ft=null,Mt=null,Ct=!1}}}function l(){let q=!1,Ct=null,Tt=null,Ft=null,Mt=null,dt=null,It=null,ie=null,Pe=null;return{setTest:function(Ae){q||(Ae?vt(o.STENCIL_TEST):St(o.STENCIL_TEST))},setMask:function(Ae){Ct!==Ae&&!q&&(o.stencilMask(Ae),Ct=Ae)},setFunc:function(Ae,wn,gi){(Tt!==Ae||Ft!==wn||Mt!==gi)&&(o.stencilFunc(Ae,wn,gi),Tt=Ae,Ft=wn,Mt=gi)},setOp:function(Ae,wn,gi){(dt!==Ae||It!==wn||ie!==gi)&&(o.stencilOp(Ae,wn,gi),dt=Ae,It=wn,ie=gi)},setLocked:function(Ae){q=Ae},setClear:function(Ae){Pe!==Ae&&(o.clearStencil(Ae),Pe=Ae)},reset:function(){q=!1,Ct=null,Tt=null,Ft=null,Mt=null,dt=null,It=null,ie=null,Pe=null}}}const u=new i,h=new s,p=new l,g=new WeakMap,d=new WeakMap;let S={},y={},v=new WeakMap,E=[],b=null,C=!1,M=null,x=null,D=null,P=null,N=null,X=null,H=null,B=new Ne(0,0,0),T=0,U=!1,ht=null,G=null,Q=null,st=null,ot=null;const J=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,F=0;const lt=o.getParameter(o.VERSION);lt.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(lt)[1]),L=F>=1):lt.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(lt)[1]),L=F>=2);let mt=null,Et={};const O=o.getParameter(o.SCISSOR_BOX),Y=o.getParameter(o.VIEWPORT),_t=new $e().fromArray(O),At=new $e().fromArray(Y);function Ot(q,Ct,Tt,Ft){const Mt=new Uint8Array(4),dt=o.createTexture();o.bindTexture(q,dt),o.texParameteri(q,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(q,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let It=0;It<Tt;It++)q===o.TEXTURE_3D||q===o.TEXTURE_2D_ARRAY?o.texImage3D(Ct,0,o.RGBA,1,1,Ft,0,o.RGBA,o.UNSIGNED_BYTE,Mt):o.texImage2D(Ct+It,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Mt);return dt}const et={};et[o.TEXTURE_2D]=Ot(o.TEXTURE_2D,o.TEXTURE_2D,1),et[o.TEXTURE_CUBE_MAP]=Ot(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[o.TEXTURE_2D_ARRAY]=Ot(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),et[o.TEXTURE_3D]=Ot(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),p.setClear(0),vt(o.DEPTH_TEST),h.setFunc(Ur),ae(!1),ke(N0),vt(o.CULL_FACE),me(_a);function vt(q){S[q]!==!0&&(o.enable(q),S[q]=!0)}function St(q){S[q]!==!1&&(o.disable(q),S[q]=!1)}function Gt(q,Ct){return y[q]!==Ct?(o.bindFramebuffer(q,Ct),y[q]=Ct,q===o.DRAW_FRAMEBUFFER&&(y[o.FRAMEBUFFER]=Ct),q===o.FRAMEBUFFER&&(y[o.DRAW_FRAMEBUFFER]=Ct),!0):!1}function Zt(q,Ct){let Tt=E,Ft=!1;if(q){Tt=v.get(Ct),Tt===void 0&&(Tt=[],v.set(Ct,Tt));const Mt=q.textures;if(Tt.length!==Mt.length||Tt[0]!==o.COLOR_ATTACHMENT0){for(let dt=0,It=Mt.length;dt<It;dt++)Tt[dt]=o.COLOR_ATTACHMENT0+dt;Tt.length=Mt.length,Ft=!0}}else Tt[0]!==o.BACK&&(Tt[0]=o.BACK,Ft=!0);Ft&&o.drawBuffers(Tt)}function $t(q){return b!==q?(o.useProgram(q),b=q,!0):!1}const Ye={[Rs]:o.FUNC_ADD,[LS]:o.FUNC_SUBTRACT,[NS]:o.FUNC_REVERSE_SUBTRACT};Ye[OS]=o.MIN,Ye[PS]=o.MAX;const ge={[zS]:o.ZERO,[FS]:o.ONE,[BS]:o.SRC_COLOR,[Vh]:o.SRC_ALPHA,[kS]:o.SRC_ALPHA_SATURATE,[VS]:o.DST_COLOR,[HS]:o.DST_ALPHA,[IS]:o.ONE_MINUS_SRC_COLOR,[Xh]:o.ONE_MINUS_SRC_ALPHA,[XS]:o.ONE_MINUS_DST_COLOR,[GS]:o.ONE_MINUS_DST_ALPHA,[WS]:o.CONSTANT_COLOR,[qS]:o.ONE_MINUS_CONSTANT_COLOR,[YS]:o.CONSTANT_ALPHA,[jS]:o.ONE_MINUS_CONSTANT_ALPHA};function me(q,Ct,Tt,Ft,Mt,dt,It,ie,Pe,Ae){if(q===_a){C===!0&&(St(o.BLEND),C=!1);return}if(C===!1&&(vt(o.BLEND),C=!0),q!==US){if(q!==M||Ae!==U){if((x!==Rs||N!==Rs)&&(o.blendEquation(o.FUNC_ADD),x=Rs,N=Rs),Ae)switch(q){case wr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Gh:o.blendFunc(o.ONE,o.ONE);break;case O0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case P0:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Ue("WebGLState: Invalid blending: ",q);break}else switch(q){case wr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Gh:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case O0:Ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case P0:Ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ue("WebGLState: Invalid blending: ",q);break}D=null,P=null,X=null,H=null,B.set(0,0,0),T=0,M=q,U=Ae}return}Mt=Mt||Ct,dt=dt||Tt,It=It||Ft,(Ct!==x||Mt!==N)&&(o.blendEquationSeparate(Ye[Ct],Ye[Mt]),x=Ct,N=Mt),(Tt!==D||Ft!==P||dt!==X||It!==H)&&(o.blendFuncSeparate(ge[Tt],ge[Ft],ge[dt],ge[It]),D=Tt,P=Ft,X=dt,H=It),(ie.equals(B)===!1||Pe!==T)&&(o.blendColor(ie.r,ie.g,ie.b,Pe),B.copy(ie),T=Pe),M=q,U=!1}function be(q,Ct){q.side===ga?St(o.CULL_FACE):vt(o.CULL_FACE);let Tt=q.side===Xn;Ct&&(Tt=!Tt),ae(Tt),q.blending===wr&&q.transparent===!1?me(_a):me(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),h.setFunc(q.depthFunc),h.setTest(q.depthTest),h.setMask(q.depthWrite),u.setMask(q.colorWrite);const Ft=q.stencilWrite;p.setTest(Ft),Ft&&(p.setMask(q.stencilWriteMask),p.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),p.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Ve(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?vt(o.SAMPLE_ALPHA_TO_COVERAGE):St(o.SAMPLE_ALPHA_TO_COVERAGE)}function ae(q){ht!==q&&(q?o.frontFace(o.CW):o.frontFace(o.CCW),ht=q)}function ke(q){q!==CS?(vt(o.CULL_FACE),q!==G&&(q===N0?o.cullFace(o.BACK):q===wS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):St(o.CULL_FACE),G=q}function V(q){q!==Q&&(L&&o.lineWidth(q),Q=q)}function Ve(q,Ct,Tt){q?(vt(o.POLYGON_OFFSET_FILL),(st!==Ct||ot!==Tt)&&(st=Ct,ot=Tt,h.getReversed()&&(Ct=-Ct),o.polygonOffset(Ct,Tt))):St(o.POLYGON_OFFSET_FILL)}function ye(q){q?vt(o.SCISSOR_TEST):St(o.SCISSOR_TEST)}function Te(q){q===void 0&&(q=o.TEXTURE0+J-1),mt!==q&&(o.activeTexture(q),mt=q)}function Xt(q,Ct,Tt){Tt===void 0&&(mt===null?Tt=o.TEXTURE0+J-1:Tt=mt);let Ft=Et[Tt];Ft===void 0&&(Ft={type:void 0,texture:void 0},Et[Tt]=Ft),(Ft.type!==q||Ft.texture!==Ct)&&(mt!==Tt&&(o.activeTexture(Tt),mt=Tt),o.bindTexture(q,Ct||et[q]),Ft.type=q,Ft.texture=Ct)}function w(){const q=Et[mt];q!==void 0&&q.type!==void 0&&(o.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function m(){try{o.compressedTexImage2D(...arguments)}catch(q){Ue("WebGLState:",q)}}function z(){try{o.compressedTexImage3D(...arguments)}catch(q){Ue("WebGLState:",q)}}function Z(){try{o.texSubImage2D(...arguments)}catch(q){Ue("WebGLState:",q)}}function ft(){try{o.texSubImage3D(...arguments)}catch(q){Ue("WebGLState:",q)}}function rt(){try{o.compressedTexSubImage2D(...arguments)}catch(q){Ue("WebGLState:",q)}}function Dt(){try{o.compressedTexSubImage3D(...arguments)}catch(q){Ue("WebGLState:",q)}}function Rt(){try{o.texStorage2D(...arguments)}catch(q){Ue("WebGLState:",q)}}function qt(){try{o.texStorage3D(...arguments)}catch(q){Ue("WebGLState:",q)}}function Jt(){try{o.texImage2D(...arguments)}catch(q){Ue("WebGLState:",q)}}function bt(){try{o.texImage3D(...arguments)}catch(q){Ue("WebGLState:",q)}}function yt(q){_t.equals(q)===!1&&(o.scissor(q.x,q.y,q.z,q.w),_t.copy(q))}function Pt(q){At.equals(q)===!1&&(o.viewport(q.x,q.y,q.z,q.w),At.copy(q))}function Nt(q,Ct){let Tt=d.get(Ct);Tt===void 0&&(Tt=new WeakMap,d.set(Ct,Tt));let Ft=Tt.get(q);Ft===void 0&&(Ft=o.getUniformBlockIndex(Ct,q.name),Tt.set(q,Ft))}function zt(q,Ct){const Ft=d.get(Ct).get(q);g.get(Ct)!==Ft&&(o.uniformBlockBinding(Ct,Ft,q.__bindingPointIndex),g.set(Ct,Ft))}function ue(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),S={},mt=null,Et={},y={},v=new WeakMap,E=[],b=null,C=!1,M=null,x=null,D=null,P=null,N=null,X=null,H=null,B=new Ne(0,0,0),T=0,U=!1,ht=null,G=null,Q=null,st=null,ot=null,_t.set(0,0,o.canvas.width,o.canvas.height),At.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),p.reset()}return{buffers:{color:u,depth:h,stencil:p},enable:vt,disable:St,bindFramebuffer:Gt,drawBuffers:Zt,useProgram:$t,setBlending:me,setMaterial:be,setFlipSided:ae,setCullFace:ke,setLineWidth:V,setPolygonOffset:Ve,setScissorTest:ye,activeTexture:Te,bindTexture:Xt,unbindTexture:w,compressedTexImage2D:m,compressedTexImage3D:z,texImage2D:Jt,texImage3D:bt,updateUBOMapping:Nt,uniformBlockBinding:zt,texStorage2D:Rt,texStorage3D:qt,texSubImage2D:Z,texSubImage3D:ft,compressedTexSubImage2D:rt,compressedTexSubImage3D:Dt,scissor:yt,viewport:Pt,reset:ue}}function C1(o,e,i,s,l,u,h){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new le,S=new WeakMap;let y;const v=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(w,m){return E?new OffscreenCanvas(w,m):Vc("canvas")}function C(w,m,z){let Z=1;const ft=Xt(w);if((ft.width>z||ft.height>z)&&(Z=z/Math.max(ft.width,ft.height)),Z<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const rt=Math.floor(Z*ft.width),Dt=Math.floor(Z*ft.height);y===void 0&&(y=b(rt,Dt));const Rt=m?b(rt,Dt):y;return Rt.width=rt,Rt.height=Dt,Rt.getContext("2d").drawImage(w,0,0,rt,Dt),ne("WebGLRenderer: Texture has been resized from ("+ft.width+"x"+ft.height+") to ("+rt+"x"+Dt+")."),Rt}else return"data"in w&&ne("WebGLRenderer: Image in DataTexture is too big ("+ft.width+"x"+ft.height+")."),w;return w}function M(w){return w.generateMipmaps}function x(w){o.generateMipmap(w)}function D(w){return w.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?o.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function P(w,m,z,Z,ft=!1){if(w!==null){if(o[w]!==void 0)return o[w];ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let rt=m;if(m===o.RED&&(z===o.FLOAT&&(rt=o.R32F),z===o.HALF_FLOAT&&(rt=o.R16F),z===o.UNSIGNED_BYTE&&(rt=o.R8)),m===o.RED_INTEGER&&(z===o.UNSIGNED_BYTE&&(rt=o.R8UI),z===o.UNSIGNED_SHORT&&(rt=o.R16UI),z===o.UNSIGNED_INT&&(rt=o.R32UI),z===o.BYTE&&(rt=o.R8I),z===o.SHORT&&(rt=o.R16I),z===o.INT&&(rt=o.R32I)),m===o.RG&&(z===o.FLOAT&&(rt=o.RG32F),z===o.HALF_FLOAT&&(rt=o.RG16F),z===o.UNSIGNED_BYTE&&(rt=o.RG8)),m===o.RG_INTEGER&&(z===o.UNSIGNED_BYTE&&(rt=o.RG8UI),z===o.UNSIGNED_SHORT&&(rt=o.RG16UI),z===o.UNSIGNED_INT&&(rt=o.RG32UI),z===o.BYTE&&(rt=o.RG8I),z===o.SHORT&&(rt=o.RG16I),z===o.INT&&(rt=o.RG32I)),m===o.RGB_INTEGER&&(z===o.UNSIGNED_BYTE&&(rt=o.RGB8UI),z===o.UNSIGNED_SHORT&&(rt=o.RGB16UI),z===o.UNSIGNED_INT&&(rt=o.RGB32UI),z===o.BYTE&&(rt=o.RGB8I),z===o.SHORT&&(rt=o.RGB16I),z===o.INT&&(rt=o.RGB32I)),m===o.RGBA_INTEGER&&(z===o.UNSIGNED_BYTE&&(rt=o.RGBA8UI),z===o.UNSIGNED_SHORT&&(rt=o.RGBA16UI),z===o.UNSIGNED_INT&&(rt=o.RGBA32UI),z===o.BYTE&&(rt=o.RGBA8I),z===o.SHORT&&(rt=o.RGBA16I),z===o.INT&&(rt=o.RGBA32I)),m===o.RGB&&(z===o.UNSIGNED_INT_5_9_9_9_REV&&(rt=o.RGB9_E5),z===o.UNSIGNED_INT_10F_11F_11F_REV&&(rt=o.R11F_G11F_B10F)),m===o.RGBA){const Dt=ft?Hc:Re.getTransfer(Z);z===o.FLOAT&&(rt=o.RGBA32F),z===o.HALF_FLOAT&&(rt=o.RGBA16F),z===o.UNSIGNED_BYTE&&(rt=Dt===Be?o.SRGB8_ALPHA8:o.RGBA8),z===o.UNSIGNED_SHORT_4_4_4_4&&(rt=o.RGBA4),z===o.UNSIGNED_SHORT_5_5_5_1&&(rt=o.RGB5_A1)}return(rt===o.R16F||rt===o.R32F||rt===o.RG16F||rt===o.RG32F||rt===o.RGBA16F||rt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),rt}function N(w,m){let z;return w?m===null||m===Xi||m===Xo?z=o.DEPTH24_STENCIL8:m===Ci?z=o.DEPTH32F_STENCIL8:m===Vo&&(z=o.DEPTH24_STENCIL8,ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===Xi||m===Xo?z=o.DEPTH_COMPONENT24:m===Ci?z=o.DEPTH_COMPONENT32F:m===Vo&&(z=o.DEPTH_COMPONENT16),z}function X(w,m){return M(w)===!0||w.isFramebufferTexture&&w.minFilter!==bn&&w.minFilter!==hn?Math.log2(Math.max(m.width,m.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?m.mipmaps.length:1}function H(w){const m=w.target;m.removeEventListener("dispose",H),T(m),m.isVideoTexture&&S.delete(m)}function B(w){const m=w.target;m.removeEventListener("dispose",B),ht(m)}function T(w){const m=s.get(w);if(m.__webglInit===void 0)return;const z=w.source,Z=v.get(z);if(Z){const ft=Z[m.__cacheKey];ft.usedTimes--,ft.usedTimes===0&&U(w),Object.keys(Z).length===0&&v.delete(z)}s.remove(w)}function U(w){const m=s.get(w);o.deleteTexture(m.__webglTexture);const z=w.source,Z=v.get(z);delete Z[m.__cacheKey],h.memory.textures--}function ht(w){const m=s.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),s.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(m.__webglFramebuffer[Z]))for(let ft=0;ft<m.__webglFramebuffer[Z].length;ft++)o.deleteFramebuffer(m.__webglFramebuffer[Z][ft]);else o.deleteFramebuffer(m.__webglFramebuffer[Z]);m.__webglDepthbuffer&&o.deleteRenderbuffer(m.__webglDepthbuffer[Z])}else{if(Array.isArray(m.__webglFramebuffer))for(let Z=0;Z<m.__webglFramebuffer.length;Z++)o.deleteFramebuffer(m.__webglFramebuffer[Z]);else o.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&o.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&o.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let Z=0;Z<m.__webglColorRenderbuffer.length;Z++)m.__webglColorRenderbuffer[Z]&&o.deleteRenderbuffer(m.__webglColorRenderbuffer[Z]);m.__webglDepthRenderbuffer&&o.deleteRenderbuffer(m.__webglDepthRenderbuffer)}const z=w.textures;for(let Z=0,ft=z.length;Z<ft;Z++){const rt=s.get(z[Z]);rt.__webglTexture&&(o.deleteTexture(rt.__webglTexture),h.memory.textures--),s.remove(z[Z])}s.remove(w)}let G=0;function Q(){G=0}function st(){const w=G;return w>=l.maxTextures&&ne("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l.maxTextures),G+=1,w}function ot(w){const m=[];return m.push(w.wrapS),m.push(w.wrapT),m.push(w.wrapR||0),m.push(w.magFilter),m.push(w.minFilter),m.push(w.anisotropy),m.push(w.internalFormat),m.push(w.format),m.push(w.type),m.push(w.generateMipmaps),m.push(w.premultiplyAlpha),m.push(w.flipY),m.push(w.unpackAlignment),m.push(w.colorSpace),m.join()}function J(w,m){const z=s.get(w);if(w.isVideoTexture&&ye(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&z.__version!==w.version){const Z=w.image;if(Z===null)ne("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)ne("WebGLRenderer: Texture marked for update but image is incomplete");else{et(z,w,m);return}}else w.isExternalTexture&&(z.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,z.__webglTexture,o.TEXTURE0+m)}function L(w,m){const z=s.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){et(z,w,m);return}else w.isExternalTexture&&(z.__webglTexture=w.sourceTexture?w.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,z.__webglTexture,o.TEXTURE0+m)}function F(w,m){const z=s.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){et(z,w,m);return}i.bindTexture(o.TEXTURE_3D,z.__webglTexture,o.TEXTURE0+m)}function lt(w,m){const z=s.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&z.__version!==w.version){vt(z,w,m);return}i.bindTexture(o.TEXTURE_CUBE_MAP,z.__webglTexture,o.TEXTURE0+m)}const mt={[Qh]:o.REPEAT,[ni]:o.CLAMP_TO_EDGE,[Jh]:o.MIRRORED_REPEAT},Et={[bn]:o.NEAREST,[QS]:o.NEAREST_MIPMAP_NEAREST,[lc]:o.NEAREST_MIPMAP_LINEAR,[hn]:o.LINEAR,[ch]:o.LINEAR_MIPMAP_NEAREST,[ws]:o.LINEAR_MIPMAP_LINEAR},O={[ey]:o.NEVER,[ry]:o.ALWAYS,[ny]:o.LESS,[Vd]:o.LEQUAL,[iy]:o.EQUAL,[Xd]:o.GEQUAL,[ay]:o.GREATER,[sy]:o.NOTEQUAL};function Y(w,m){if(m.type===Ci&&e.has("OES_texture_float_linear")===!1&&(m.magFilter===hn||m.magFilter===ch||m.magFilter===lc||m.magFilter===ws||m.minFilter===hn||m.minFilter===ch||m.minFilter===lc||m.minFilter===ws)&&ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(w,o.TEXTURE_WRAP_S,mt[m.wrapS]),o.texParameteri(w,o.TEXTURE_WRAP_T,mt[m.wrapT]),(w===o.TEXTURE_3D||w===o.TEXTURE_2D_ARRAY)&&o.texParameteri(w,o.TEXTURE_WRAP_R,mt[m.wrapR]),o.texParameteri(w,o.TEXTURE_MAG_FILTER,Et[m.magFilter]),o.texParameteri(w,o.TEXTURE_MIN_FILTER,Et[m.minFilter]),m.compareFunction&&(o.texParameteri(w,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(w,o.TEXTURE_COMPARE_FUNC,O[m.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===bn||m.minFilter!==lc&&m.minFilter!==ws||m.type===Ci&&e.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||s.get(m).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");o.texParameterf(w,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,l.getMaxAnisotropy())),s.get(m).__currentAnisotropy=m.anisotropy}}}function _t(w,m){let z=!1;w.__webglInit===void 0&&(w.__webglInit=!0,m.addEventListener("dispose",H));const Z=m.source;let ft=v.get(Z);ft===void 0&&(ft={},v.set(Z,ft));const rt=ot(m);if(rt!==w.__cacheKey){ft[rt]===void 0&&(ft[rt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,z=!0),ft[rt].usedTimes++;const Dt=ft[w.__cacheKey];Dt!==void 0&&(ft[w.__cacheKey].usedTimes--,Dt.usedTimes===0&&U(m)),w.__cacheKey=rt,w.__webglTexture=ft[rt].texture}return z}function At(w,m,z){return Math.floor(Math.floor(w/z)/m)}function Ot(w,m,z,Z){const rt=w.updateRanges;if(rt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,m.width,m.height,z,Z,m.data);else{rt.sort((bt,yt)=>bt.start-yt.start);let Dt=0;for(let bt=1;bt<rt.length;bt++){const yt=rt[Dt],Pt=rt[bt],Nt=yt.start+yt.count,zt=At(Pt.start,m.width,4),ue=At(yt.start,m.width,4);Pt.start<=Nt+1&&zt===ue&&At(Pt.start+Pt.count-1,m.width,4)===zt?yt.count=Math.max(yt.count,Pt.start+Pt.count-yt.start):(++Dt,rt[Dt]=Pt)}rt.length=Dt+1;const Rt=o.getParameter(o.UNPACK_ROW_LENGTH),qt=o.getParameter(o.UNPACK_SKIP_PIXELS),Jt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,m.width);for(let bt=0,yt=rt.length;bt<yt;bt++){const Pt=rt[bt],Nt=Math.floor(Pt.start/4),zt=Math.ceil(Pt.count/4),ue=Nt%m.width,q=Math.floor(Nt/m.width),Ct=zt,Tt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ue),o.pixelStorei(o.UNPACK_SKIP_ROWS,q),i.texSubImage2D(o.TEXTURE_2D,0,ue,q,Ct,Tt,z,Z,m.data)}w.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Rt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,qt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Jt)}}function et(w,m,z){let Z=o.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(Z=o.TEXTURE_2D_ARRAY),m.isData3DTexture&&(Z=o.TEXTURE_3D);const ft=_t(w,m),rt=m.source;i.bindTexture(Z,w.__webglTexture,o.TEXTURE0+z);const Dt=s.get(rt);if(rt.version!==Dt.__version||ft===!0){i.activeTexture(o.TEXTURE0+z);const Rt=Re.getPrimaries(Re.workingColorSpace),qt=m.colorSpace===$a?null:Re.getPrimaries(m.colorSpace),Jt=m.colorSpace===$a||Rt===qt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,m.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,m.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let bt=C(m.image,!1,l.maxTextureSize);bt=Te(m,bt);const yt=u.convert(m.format,m.colorSpace),Pt=u.convert(m.type);let Nt=P(m.internalFormat,yt,Pt,m.colorSpace,m.isVideoTexture);Y(Z,m);let zt;const ue=m.mipmaps,q=m.isVideoTexture!==!0,Ct=Dt.__version===void 0||ft===!0,Tt=rt.dataReady,Ft=X(m,bt);if(m.isDepthTexture)Nt=N(m.format===Ds,m.type),Ct&&(q?i.texStorage2D(o.TEXTURE_2D,1,Nt,bt.width,bt.height):i.texImage2D(o.TEXTURE_2D,0,Nt,bt.width,bt.height,0,yt,Pt,null));else if(m.isDataTexture)if(ue.length>0){q&&Ct&&i.texStorage2D(o.TEXTURE_2D,Ft,Nt,ue[0].width,ue[0].height);for(let Mt=0,dt=ue.length;Mt<dt;Mt++)zt=ue[Mt],q?Tt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,zt.width,zt.height,yt,Pt,zt.data):i.texImage2D(o.TEXTURE_2D,Mt,Nt,zt.width,zt.height,0,yt,Pt,zt.data);m.generateMipmaps=!1}else q?(Ct&&i.texStorage2D(o.TEXTURE_2D,Ft,Nt,bt.width,bt.height),Tt&&Ot(m,bt,yt,Pt)):i.texImage2D(o.TEXTURE_2D,0,Nt,bt.width,bt.height,0,yt,Pt,bt.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){q&&Ct&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ft,Nt,ue[0].width,ue[0].height,bt.depth);for(let Mt=0,dt=ue.length;Mt<dt;Mt++)if(zt=ue[Mt],m.format!==pi)if(yt!==null)if(q){if(Tt)if(m.layerUpdates.size>0){const It=l_(zt.width,zt.height,m.format,m.type);for(const ie of m.layerUpdates){const Pe=zt.data.subarray(ie*It/zt.data.BYTES_PER_ELEMENT,(ie+1)*It/zt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,ie,zt.width,zt.height,1,yt,Pe)}m.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,zt.width,zt.height,bt.depth,yt,zt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Mt,Nt,zt.width,zt.height,bt.depth,0,zt.data,0,0);else ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?Tt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,zt.width,zt.height,bt.depth,yt,Pt,zt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Mt,Nt,zt.width,zt.height,bt.depth,0,yt,Pt,zt.data)}else{q&&Ct&&i.texStorage2D(o.TEXTURE_2D,Ft,Nt,ue[0].width,ue[0].height);for(let Mt=0,dt=ue.length;Mt<dt;Mt++)zt=ue[Mt],m.format!==pi?yt!==null?q?Tt&&i.compressedTexSubImage2D(o.TEXTURE_2D,Mt,0,0,zt.width,zt.height,yt,zt.data):i.compressedTexImage2D(o.TEXTURE_2D,Mt,Nt,zt.width,zt.height,0,zt.data):ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?Tt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,zt.width,zt.height,yt,Pt,zt.data):i.texImage2D(o.TEXTURE_2D,Mt,Nt,zt.width,zt.height,0,yt,Pt,zt.data)}else if(m.isDataArrayTexture)if(q){if(Ct&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ft,Nt,bt.width,bt.height,bt.depth),Tt)if(m.layerUpdates.size>0){const Mt=l_(bt.width,bt.height,m.format,m.type);for(const dt of m.layerUpdates){const It=bt.data.subarray(dt*Mt/bt.data.BYTES_PER_ELEMENT,(dt+1)*Mt/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,dt,bt.width,bt.height,1,yt,Pt,It)}m.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,yt,Pt,bt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Nt,bt.width,bt.height,bt.depth,0,yt,Pt,bt.data);else if(m.isData3DTexture)q?(Ct&&i.texStorage3D(o.TEXTURE_3D,Ft,Nt,bt.width,bt.height,bt.depth),Tt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,yt,Pt,bt.data)):i.texImage3D(o.TEXTURE_3D,0,Nt,bt.width,bt.height,bt.depth,0,yt,Pt,bt.data);else if(m.isFramebufferTexture){if(Ct)if(q)i.texStorage2D(o.TEXTURE_2D,Ft,Nt,bt.width,bt.height);else{let Mt=bt.width,dt=bt.height;for(let It=0;It<Ft;It++)i.texImage2D(o.TEXTURE_2D,It,Nt,Mt,dt,0,yt,Pt,null),Mt>>=1,dt>>=1}}else if(ue.length>0){if(q&&Ct){const Mt=Xt(ue[0]);i.texStorage2D(o.TEXTURE_2D,Ft,Nt,Mt.width,Mt.height)}for(let Mt=0,dt=ue.length;Mt<dt;Mt++)zt=ue[Mt],q?Tt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,yt,Pt,zt):i.texImage2D(o.TEXTURE_2D,Mt,Nt,yt,Pt,zt);m.generateMipmaps=!1}else if(q){if(Ct){const Mt=Xt(bt);i.texStorage2D(o.TEXTURE_2D,Ft,Nt,Mt.width,Mt.height)}Tt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,yt,Pt,bt)}else i.texImage2D(o.TEXTURE_2D,0,Nt,yt,Pt,bt);M(m)&&x(Z),Dt.__version=rt.version,m.onUpdate&&m.onUpdate(m)}w.__version=m.version}function vt(w,m,z){if(m.image.length!==6)return;const Z=_t(w,m),ft=m.source;i.bindTexture(o.TEXTURE_CUBE_MAP,w.__webglTexture,o.TEXTURE0+z);const rt=s.get(ft);if(ft.version!==rt.__version||Z===!0){i.activeTexture(o.TEXTURE0+z);const Dt=Re.getPrimaries(Re.workingColorSpace),Rt=m.colorSpace===$a?null:Re.getPrimaries(m.colorSpace),qt=m.colorSpace===$a||Dt===Rt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,m.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,m.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);const Jt=m.isCompressedTexture||m.image[0].isCompressedTexture,bt=m.image[0]&&m.image[0].isDataTexture,yt=[];for(let dt=0;dt<6;dt++)!Jt&&!bt?yt[dt]=C(m.image[dt],!0,l.maxCubemapSize):yt[dt]=bt?m.image[dt].image:m.image[dt],yt[dt]=Te(m,yt[dt]);const Pt=yt[0],Nt=u.convert(m.format,m.colorSpace),zt=u.convert(m.type),ue=P(m.internalFormat,Nt,zt,m.colorSpace),q=m.isVideoTexture!==!0,Ct=rt.__version===void 0||Z===!0,Tt=ft.dataReady;let Ft=X(m,Pt);Y(o.TEXTURE_CUBE_MAP,m);let Mt;if(Jt){q&&Ct&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ft,ue,Pt.width,Pt.height);for(let dt=0;dt<6;dt++){Mt=yt[dt].mipmaps;for(let It=0;It<Mt.length;It++){const ie=Mt[It];m.format!==pi?Nt!==null?q?Tt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+dt,It,0,0,ie.width,ie.height,Nt,ie.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+dt,It,ue,ie.width,ie.height,0,ie.data):ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+dt,It,0,0,ie.width,ie.height,Nt,zt,ie.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+dt,It,ue,ie.width,ie.height,0,Nt,zt,ie.data)}}}else{if(Mt=m.mipmaps,q&&Ct){Mt.length>0&&Ft++;const dt=Xt(yt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ft,ue,dt.width,dt.height)}for(let dt=0;dt<6;dt++)if(bt){q?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,yt[dt].width,yt[dt].height,Nt,zt,yt[dt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,ue,yt[dt].width,yt[dt].height,0,Nt,zt,yt[dt].data);for(let It=0;It<Mt.length;It++){const Pe=Mt[It].image[dt].image;q?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+dt,It+1,0,0,Pe.width,Pe.height,Nt,zt,Pe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+dt,It+1,ue,Pe.width,Pe.height,0,Nt,zt,Pe.data)}}else{q?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Nt,zt,yt[dt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,ue,Nt,zt,yt[dt]);for(let It=0;It<Mt.length;It++){const ie=Mt[It];q?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+dt,It+1,0,0,Nt,zt,ie.image[dt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+dt,It+1,ue,Nt,zt,ie.image[dt])}}}M(m)&&x(o.TEXTURE_CUBE_MAP),rt.__version=ft.version,m.onUpdate&&m.onUpdate(m)}w.__version=m.version}function St(w,m,z,Z,ft,rt){const Dt=u.convert(z.format,z.colorSpace),Rt=u.convert(z.type),qt=P(z.internalFormat,Dt,Rt,z.colorSpace),Jt=s.get(m),bt=s.get(z);if(bt.__renderTarget=m,!Jt.__hasExternalTextures){const yt=Math.max(1,m.width>>rt),Pt=Math.max(1,m.height>>rt);ft===o.TEXTURE_3D||ft===o.TEXTURE_2D_ARRAY?i.texImage3D(ft,rt,qt,yt,Pt,m.depth,0,Dt,Rt,null):i.texImage2D(ft,rt,qt,yt,Pt,0,Dt,Rt,null)}i.bindFramebuffer(o.FRAMEBUFFER,w),Ve(m)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Z,ft,bt.__webglTexture,0,V(m)):(ft===o.TEXTURE_2D||ft>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ft<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,Z,ft,bt.__webglTexture,rt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Gt(w,m,z){if(o.bindRenderbuffer(o.RENDERBUFFER,w),m.depthBuffer){const Z=m.depthTexture,ft=Z&&Z.isDepthTexture?Z.type:null,rt=N(m.stencilBuffer,ft),Dt=m.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Ve(m)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,V(m),rt,m.width,m.height):z?o.renderbufferStorageMultisample(o.RENDERBUFFER,V(m),rt,m.width,m.height):o.renderbufferStorage(o.RENDERBUFFER,rt,m.width,m.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Dt,o.RENDERBUFFER,w)}else{const Z=m.textures;for(let ft=0;ft<Z.length;ft++){const rt=Z[ft],Dt=u.convert(rt.format,rt.colorSpace),Rt=u.convert(rt.type),qt=P(rt.internalFormat,Dt,Rt,rt.colorSpace);Ve(m)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,V(m),qt,m.width,m.height):z?o.renderbufferStorageMultisample(o.RENDERBUFFER,V(m),qt,m.width,m.height):o.renderbufferStorage(o.RENDERBUFFER,qt,m.width,m.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Zt(w,m,z){const Z=m.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,w),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ft=s.get(m.depthTexture);if(ft.__renderTarget=m,(!ft.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),Z){if(ft.__webglInit===void 0&&(ft.__webglInit=!0,m.depthTexture.addEventListener("dispose",H)),ft.__webglTexture===void 0){ft.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,ft.__webglTexture),Y(o.TEXTURE_CUBE_MAP,m.depthTexture);const Jt=u.convert(m.depthTexture.format),bt=u.convert(m.depthTexture.type);let yt;m.depthTexture.format===xa?yt=o.DEPTH_COMPONENT24:m.depthTexture.format===Ds&&(yt=o.DEPTH24_STENCIL8);for(let Pt=0;Pt<6;Pt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,yt,m.width,m.height,0,Jt,bt,null)}}else J(m.depthTexture,0);const rt=ft.__webglTexture,Dt=V(m),Rt=Z?o.TEXTURE_CUBE_MAP_POSITIVE_X+z:o.TEXTURE_2D,qt=m.depthTexture.format===Ds?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(m.depthTexture.format===xa)Ve(m)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,qt,Rt,rt,0,Dt):o.framebufferTexture2D(o.FRAMEBUFFER,qt,Rt,rt,0);else if(m.depthTexture.format===Ds)Ve(m)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,qt,Rt,rt,0,Dt):o.framebufferTexture2D(o.FRAMEBUFFER,qt,Rt,rt,0);else throw new Error("Unknown depthTexture format")}function $t(w){const m=s.get(w),z=w.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==w.depthTexture){const Z=w.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),Z){const ft=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,Z.removeEventListener("dispose",ft)};Z.addEventListener("dispose",ft),m.__depthDisposeCallback=ft}m.__boundDepthTexture=Z}if(w.depthTexture&&!m.__autoAllocateDepthBuffer)if(z)for(let Z=0;Z<6;Z++)Zt(m.__webglFramebuffer[Z],w,Z);else{const Z=w.texture.mipmaps;Z&&Z.length>0?Zt(m.__webglFramebuffer[0],w,0):Zt(m.__webglFramebuffer,w,0)}else if(z){m.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(i.bindFramebuffer(o.FRAMEBUFFER,m.__webglFramebuffer[Z]),m.__webglDepthbuffer[Z]===void 0)m.__webglDepthbuffer[Z]=o.createRenderbuffer(),Gt(m.__webglDepthbuffer[Z],w,!1);else{const ft=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,rt=m.__webglDepthbuffer[Z];o.bindRenderbuffer(o.RENDERBUFFER,rt),o.framebufferRenderbuffer(o.FRAMEBUFFER,ft,o.RENDERBUFFER,rt)}}else{const Z=w.texture.mipmaps;if(Z&&Z.length>0?i.bindFramebuffer(o.FRAMEBUFFER,m.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=o.createRenderbuffer(),Gt(m.__webglDepthbuffer,w,!1);else{const ft=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,rt=m.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,rt),o.framebufferRenderbuffer(o.FRAMEBUFFER,ft,o.RENDERBUFFER,rt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ye(w,m,z){const Z=s.get(w);m!==void 0&&St(Z.__webglFramebuffer,w,w.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),z!==void 0&&$t(w)}function ge(w){const m=w.texture,z=s.get(w),Z=s.get(m);w.addEventListener("dispose",B);const ft=w.textures,rt=w.isWebGLCubeRenderTarget===!0,Dt=ft.length>1;if(Dt||(Z.__webglTexture===void 0&&(Z.__webglTexture=o.createTexture()),Z.__version=m.version,h.memory.textures++),rt){z.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(m.mipmaps&&m.mipmaps.length>0){z.__webglFramebuffer[Rt]=[];for(let qt=0;qt<m.mipmaps.length;qt++)z.__webglFramebuffer[Rt][qt]=o.createFramebuffer()}else z.__webglFramebuffer[Rt]=o.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){z.__webglFramebuffer=[];for(let Rt=0;Rt<m.mipmaps.length;Rt++)z.__webglFramebuffer[Rt]=o.createFramebuffer()}else z.__webglFramebuffer=o.createFramebuffer();if(Dt)for(let Rt=0,qt=ft.length;Rt<qt;Rt++){const Jt=s.get(ft[Rt]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=o.createTexture(),h.memory.textures++)}if(w.samples>0&&Ve(w)===!1){z.__webglMultisampledFramebuffer=o.createFramebuffer(),z.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Rt=0;Rt<ft.length;Rt++){const qt=ft[Rt];z.__webglColorRenderbuffer[Rt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,z.__webglColorRenderbuffer[Rt]);const Jt=u.convert(qt.format,qt.colorSpace),bt=u.convert(qt.type),yt=P(qt.internalFormat,Jt,bt,qt.colorSpace,w.isXRRenderTarget===!0),Pt=V(w);o.renderbufferStorageMultisample(o.RENDERBUFFER,Pt,yt,w.width,w.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,z.__webglColorRenderbuffer[Rt])}o.bindRenderbuffer(o.RENDERBUFFER,null),w.depthBuffer&&(z.__webglDepthRenderbuffer=o.createRenderbuffer(),Gt(z.__webglDepthRenderbuffer,w,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(rt){i.bindTexture(o.TEXTURE_CUBE_MAP,Z.__webglTexture),Y(o.TEXTURE_CUBE_MAP,m);for(let Rt=0;Rt<6;Rt++)if(m.mipmaps&&m.mipmaps.length>0)for(let qt=0;qt<m.mipmaps.length;qt++)St(z.__webglFramebuffer[Rt][qt],w,m,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,qt);else St(z.__webglFramebuffer[Rt],w,m,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);M(m)&&x(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Dt){for(let Rt=0,qt=ft.length;Rt<qt;Rt++){const Jt=ft[Rt],bt=s.get(Jt);let yt=o.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(yt=w.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(yt,bt.__webglTexture),Y(yt,Jt),St(z.__webglFramebuffer,w,Jt,o.COLOR_ATTACHMENT0+Rt,yt,0),M(Jt)&&x(yt)}i.unbindTexture()}else{let Rt=o.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Rt=w.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Rt,Z.__webglTexture),Y(Rt,m),m.mipmaps&&m.mipmaps.length>0)for(let qt=0;qt<m.mipmaps.length;qt++)St(z.__webglFramebuffer[qt],w,m,o.COLOR_ATTACHMENT0,Rt,qt);else St(z.__webglFramebuffer,w,m,o.COLOR_ATTACHMENT0,Rt,0);M(m)&&x(Rt),i.unbindTexture()}w.depthBuffer&&$t(w)}function me(w){const m=w.textures;for(let z=0,Z=m.length;z<Z;z++){const ft=m[z];if(M(ft)){const rt=D(w),Dt=s.get(ft).__webglTexture;i.bindTexture(rt,Dt),x(rt),i.unbindTexture()}}}const be=[],ae=[];function ke(w){if(w.samples>0){if(Ve(w)===!1){const m=w.textures,z=w.width,Z=w.height;let ft=o.COLOR_BUFFER_BIT;const rt=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Dt=s.get(w),Rt=m.length>1;if(Rt)for(let Jt=0;Jt<m.length;Jt++)i.bindFramebuffer(o.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Jt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Dt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Jt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer);const qt=w.texture.mipmaps;qt&&qt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let Jt=0;Jt<m.length;Jt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ft|=o.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ft|=o.STENCIL_BUFFER_BIT)),Rt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Dt.__webglColorRenderbuffer[Jt]);const bt=s.get(m[Jt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,bt,0)}o.blitFramebuffer(0,0,z,Z,0,0,z,Z,ft,o.NEAREST),g===!0&&(be.length=0,ae.length=0,be.push(o.COLOR_ATTACHMENT0+Jt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(be.push(rt),ae.push(rt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ae)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,be))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Rt)for(let Jt=0;Jt<m.length;Jt++){i.bindFramebuffer(o.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Jt,o.RENDERBUFFER,Dt.__webglColorRenderbuffer[Jt]);const bt=s.get(m[Jt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Dt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Jt,o.TEXTURE_2D,bt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&g){const m=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[m])}}}function V(w){return Math.min(l.maxSamples,w.samples)}function Ve(w){const m=s.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function ye(w){const m=h.render.frame;S.get(w)!==m&&(S.set(w,m),w.update())}function Te(w,m){const z=w.colorSpace,Z=w.format,ft=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||z!==Or&&z!==$a&&(Re.getTransfer(z)===Be?(Z!==pi||ft!==di)&&ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ue("WebGLTextures: Unsupported texture color space:",z)),m}function Xt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(d.width=w.naturalWidth||w.width,d.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(d.width=w.displayWidth,d.height=w.displayHeight):(d.width=w.width,d.height=w.height),d}this.allocateTextureUnit=st,this.resetTextureUnits=Q,this.setTexture2D=J,this.setTexture2DArray=L,this.setTexture3D=F,this.setTextureCube=lt,this.rebindTextures=Ye,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=St,this.useMultisampledRTT=Ve,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function w1(o,e){function i(s,l=$a){let u;const h=Re.getTransfer(l);if(s===di)return o.UNSIGNED_BYTE;if(s===Fd)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Bd)return o.UNSIGNED_SHORT_5_5_5_1;if(s===X_)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===k_)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===G_)return o.BYTE;if(s===V_)return o.SHORT;if(s===Vo)return o.UNSIGNED_SHORT;if(s===zd)return o.INT;if(s===Xi)return o.UNSIGNED_INT;if(s===Ci)return o.FLOAT;if(s===ki)return o.HALF_FLOAT;if(s===W_)return o.ALPHA;if(s===q_)return o.RGB;if(s===pi)return o.RGBA;if(s===xa)return o.DEPTH_COMPONENT;if(s===Ds)return o.DEPTH_STENCIL;if(s===Y_)return o.RED;if(s===Id)return o.RED_INTEGER;if(s===Nr)return o.RG;if(s===Hd)return o.RG_INTEGER;if(s===Gd)return o.RGBA_INTEGER;if(s===Pc||s===zc||s===Fc||s===Bc)if(h===Be)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Pc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===zc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Fc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Bc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Pc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===zc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Fc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Bc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===$h||s===td||s===ed||s===nd)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===$h)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===td)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ed)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===nd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===id||s===ad||s===sd||s===rd||s===od||s===ld||s===cd)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(s===id||s===ad)return h===Be?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===sd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(s===rd)return u.COMPRESSED_R11_EAC;if(s===od)return u.COMPRESSED_SIGNED_R11_EAC;if(s===ld)return u.COMPRESSED_RG11_EAC;if(s===cd)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===ud||s===fd||s===hd||s===dd||s===pd||s===md||s===gd||s===_d||s===vd||s===xd||s===Sd||s===yd||s===Md||s===Ed)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(s===ud)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===fd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===hd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===dd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===pd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===md)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===gd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===_d)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===vd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===xd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Sd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===yd)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Md)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ed)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===bd||s===Td||s===Ad)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(s===bd)return h===Be?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Td)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ad)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Rd||s===Cd||s===wd||s===Dd)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(s===Rd)return u.COMPRESSED_RED_RGTC1_EXT;if(s===Cd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===wd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Dd)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Xo?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const D1=`
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

}`;class L1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new sv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Wi({vertexShader:D1,fragmentShader:U1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new mi(new Us(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class N1 extends zr{constructor(e,i){super();const s=this;let l=null,u=1,h=null,p="local-floor",g=1,d=null,S=null,y=null,v=null,E=null,b=null;const C=typeof XRWebGLBinding<"u",M=new L1,x={},D=i.getContextAttributes();let P=null,N=null;const X=[],H=[],B=new le;let T=null;const U=new Ai;U.viewport=new $e;const ht=new Ai;ht.viewport=new $e;const G=[U,ht],Q=new ky;let st=null,ot=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let vt=X[et];return vt===void 0&&(vt=new _h,X[et]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function(et){let vt=X[et];return vt===void 0&&(vt=new _h,X[et]=vt),vt.getGripSpace()},this.getHand=function(et){let vt=X[et];return vt===void 0&&(vt=new _h,X[et]=vt),vt.getHandSpace()};function J(et){const vt=H.indexOf(et.inputSource);if(vt===-1)return;const St=X[vt];St!==void 0&&(St.update(et.inputSource,et.frame,d||h),St.dispatchEvent({type:et.type,data:et.inputSource}))}function L(){l.removeEventListener("select",J),l.removeEventListener("selectstart",J),l.removeEventListener("selectend",J),l.removeEventListener("squeeze",J),l.removeEventListener("squeezestart",J),l.removeEventListener("squeezeend",J),l.removeEventListener("end",L),l.removeEventListener("inputsourceschange",F);for(let et=0;et<X.length;et++){const vt=H[et];vt!==null&&(H[et]=null,X[et].disconnect(vt))}st=null,ot=null,M.reset();for(const et in x)delete x[et];e.setRenderTarget(P),E=null,v=null,y=null,l=null,N=null,Ot.stop(),s.isPresenting=!1,e.setPixelRatio(T),e.setSize(B.width,B.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){u=et,s.isPresenting===!0&&ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){p=et,s.isPresenting===!0&&ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||h},this.setReferenceSpace=function(et){d=et},this.getBaseLayer=function(){return v!==null?v:E},this.getBinding=function(){return y===null&&C&&(y=new XRWebGLBinding(l,i)),y},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(et){if(l=et,l!==null){if(P=e.getRenderTarget(),l.addEventListener("select",J),l.addEventListener("selectstart",J),l.addEventListener("selectend",J),l.addEventListener("squeeze",J),l.addEventListener("squeezestart",J),l.addEventListener("squeezeend",J),l.addEventListener("end",L),l.addEventListener("inputsourceschange",F),D.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(B),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,Gt=null,Zt=null;D.depth&&(Zt=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,St=D.stencil?Ds:xa,Gt=D.stencil?Xo:Xi);const $t={colorFormat:i.RGBA8,depthFormat:Zt,scaleFactor:u};y=this.getBinding(),v=y.createProjectionLayer($t),l.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),N=new wi(v.textureWidth,v.textureHeight,{format:pi,type:di,depthTexture:new ko(v.textureWidth,v.textureHeight,Gt,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const St={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:u};E=new XRWebGLLayer(l,i,St),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),N=new wi(E.framebufferWidth,E.framebufferHeight,{format:pi,type:di,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(g),d=null,h=await l.requestReferenceSpace(p),Ot.setContext(l),Ot.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function F(et){for(let vt=0;vt<et.removed.length;vt++){const St=et.removed[vt],Gt=H.indexOf(St);Gt>=0&&(H[Gt]=null,X[Gt].disconnect(St))}for(let vt=0;vt<et.added.length;vt++){const St=et.added[vt];let Gt=H.indexOf(St);if(Gt===-1){for(let $t=0;$t<X.length;$t++)if($t>=H.length){H.push(St),Gt=$t;break}else if(H[$t]===null){H[$t]=St,Gt=$t;break}if(Gt===-1)break}const Zt=X[Gt];Zt&&Zt.connect(St)}}const lt=new at,mt=new at;function Et(et,vt,St){lt.setFromMatrixPosition(vt.matrixWorld),mt.setFromMatrixPosition(St.matrixWorld);const Gt=lt.distanceTo(mt),Zt=vt.projectionMatrix.elements,$t=St.projectionMatrix.elements,Ye=Zt[14]/(Zt[10]-1),ge=Zt[14]/(Zt[10]+1),me=(Zt[9]+1)/Zt[5],be=(Zt[9]-1)/Zt[5],ae=(Zt[8]-1)/Zt[0],ke=($t[8]+1)/$t[0],V=Ye*ae,Ve=Ye*ke,ye=Gt/(-ae+ke),Te=ye*-ae;if(vt.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(Te),et.translateZ(ye),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),Zt[10]===-1)et.projectionMatrix.copy(vt.projectionMatrix),et.projectionMatrixInverse.copy(vt.projectionMatrixInverse);else{const Xt=Ye+ye,w=ge+ye,m=V-Te,z=Ve+(Gt-Te),Z=me*ge/w*Xt,ft=be*ge/w*Xt;et.projectionMatrix.makePerspective(m,z,Z,ft,Xt,w),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function O(et,vt){vt===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(vt.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(l===null)return;let vt=et.near,St=et.far;M.texture!==null&&(M.depthNear>0&&(vt=M.depthNear),M.depthFar>0&&(St=M.depthFar)),Q.near=ht.near=U.near=vt,Q.far=ht.far=U.far=St,(st!==Q.near||ot!==Q.far)&&(l.updateRenderState({depthNear:Q.near,depthFar:Q.far}),st=Q.near,ot=Q.far),Q.layers.mask=et.layers.mask|6,U.layers.mask=Q.layers.mask&-5,ht.layers.mask=Q.layers.mask&-3;const Gt=et.parent,Zt=Q.cameras;O(Q,Gt);for(let $t=0;$t<Zt.length;$t++)O(Zt[$t],Gt);Zt.length===2?Et(Q,U,ht):Q.projectionMatrix.copy(U.projectionMatrix),Y(et,Q,Gt)};function Y(et,vt,St){St===null?et.matrix.copy(vt.matrixWorld):(et.matrix.copy(St.matrixWorld),et.matrix.invert(),et.matrix.multiply(vt.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(vt.projectionMatrix),et.projectionMatrixInverse.copy(vt.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=Ud*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(v===null&&E===null))return g},this.setFoveation=function(et){g=et,v!==null&&(v.fixedFoveation=et),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=et)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(Q)},this.getCameraTexture=function(et){return x[et]};let _t=null;function At(et,vt){if(S=vt.getViewerPose(d||h),b=vt,S!==null){const St=S.views;E!==null&&(e.setRenderTargetFramebuffer(N,E.framebuffer),e.setRenderTarget(N));let Gt=!1;St.length!==Q.cameras.length&&(Q.cameras.length=0,Gt=!0);for(let ge=0;ge<St.length;ge++){const me=St[ge];let be=null;if(E!==null)be=E.getViewport(me);else{const ke=y.getViewSubImage(v,me);be=ke.viewport,ge===0&&(e.setRenderTargetTextures(N,ke.colorTexture,ke.depthStencilTexture),e.setRenderTarget(N))}let ae=G[ge];ae===void 0&&(ae=new Ai,ae.layers.enable(ge),ae.viewport=new $e,G[ge]=ae),ae.matrix.fromArray(me.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(me.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(be.x,be.y,be.width,be.height),ge===0&&(Q.matrix.copy(ae.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),Gt===!0&&Q.cameras.push(ae)}const Zt=l.enabledFeatures;if(Zt&&Zt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){y=s.getBinding();const ge=y.getDepthInformation(St[0]);ge&&ge.isValid&&ge.texture&&M.init(ge,l.renderState)}if(Zt&&Zt.includes("camera-access")&&C){e.state.unbindTexture(),y=s.getBinding();for(let ge=0;ge<St.length;ge++){const me=St[ge].camera;if(me){let be=x[me];be||(be=new sv,x[me]=be);const ae=y.getCameraImage(me);be.sourceTexture=ae}}}}for(let St=0;St<X.length;St++){const Gt=H[St],Zt=X[St];Gt!==null&&Zt!==void 0&&Zt.update(Gt,vt,d||h)}_t&&_t(et,vt),vt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:vt}),b=null}const Ot=new lv;Ot.setAnimationLoop(At),this.setAnimationLoop=function(et){_t=et},this.dispose=function(){}}}const Ts=new Sa,O1=new nn;function P1(o,e){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function s(M,x){x.color.getRGB(M.fogColor.value,rv(o)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,D,P,N){x.isMeshBasicMaterial?u(M,x):x.isMeshLambertMaterial?(u(M,x),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(u(M,x),y(M,x)):x.isMeshPhongMaterial?(u(M,x),S(M,x),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(u(M,x),v(M,x),x.isMeshPhysicalMaterial&&E(M,x,N)):x.isMeshMatcapMaterial?(u(M,x),b(M,x)):x.isMeshDepthMaterial?u(M,x):x.isMeshDistanceMaterial?(u(M,x),C(M,x)):x.isMeshNormalMaterial?u(M,x):x.isLineBasicMaterial?(h(M,x),x.isLineDashedMaterial&&p(M,x)):x.isPointsMaterial?g(M,x,D,P):x.isSpriteMaterial?d(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function u(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===Xn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===Xn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const D=e.get(x),P=D.envMap,N=D.envMapRotation;P&&(M.envMap.value=P,Ts.copy(N),Ts.x*=-1,Ts.y*=-1,Ts.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Ts.y*=-1,Ts.z*=-1),M.envMapRotation.value.setFromMatrix4(O1.makeRotationFromEuler(Ts)),M.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function h(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function p(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function g(M,x,D,P){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*D,M.scale.value=P*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function d(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function S(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function y(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function v(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function E(M,x,D){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Xn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=D.texture,M.transmissionSamplerSize.value.set(D.width,D.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,x){x.matcap&&(M.matcap.value=x.matcap)}function C(M,x){const D=e.get(x).light;M.referencePosition.value.setFromMatrixPosition(D.matrixWorld),M.nearDistance.value=D.shadow.camera.near,M.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function z1(o,e,i,s){let l={},u={},h=[];const p=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function g(D,P){const N=P.program;s.uniformBlockBinding(D,N)}function d(D,P){let N=l[D.id];N===void 0&&(b(D),N=S(D),l[D.id]=N,D.addEventListener("dispose",M));const X=P.program;s.updateUBOMapping(D,X);const H=e.render.frame;u[D.id]!==H&&(v(D),u[D.id]=H)}function S(D){const P=y();D.__bindingPointIndex=P;const N=o.createBuffer(),X=D.__size,H=D.usage;return o.bindBuffer(o.UNIFORM_BUFFER,N),o.bufferData(o.UNIFORM_BUFFER,X,H),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,P,N),N}function y(){for(let D=0;D<p;D++)if(h.indexOf(D)===-1)return h.push(D),D;return Ue("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(D){const P=l[D.id],N=D.uniforms,X=D.__cache;o.bindBuffer(o.UNIFORM_BUFFER,P);for(let H=0,B=N.length;H<B;H++){const T=Array.isArray(N[H])?N[H]:[N[H]];for(let U=0,ht=T.length;U<ht;U++){const G=T[U];if(E(G,H,U,X)===!0){const Q=G.__offset,st=Array.isArray(G.value)?G.value:[G.value];let ot=0;for(let J=0;J<st.length;J++){const L=st[J],F=C(L);typeof L=="number"||typeof L=="boolean"?(G.__data[0]=L,o.bufferSubData(o.UNIFORM_BUFFER,Q+ot,G.__data)):L.isMatrix3?(G.__data[0]=L.elements[0],G.__data[1]=L.elements[1],G.__data[2]=L.elements[2],G.__data[3]=0,G.__data[4]=L.elements[3],G.__data[5]=L.elements[4],G.__data[6]=L.elements[5],G.__data[7]=0,G.__data[8]=L.elements[6],G.__data[9]=L.elements[7],G.__data[10]=L.elements[8],G.__data[11]=0):(L.toArray(G.__data,ot),ot+=F.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,Q,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(D,P,N,X){const H=D.value,B=P+"_"+N;if(X[B]===void 0)return typeof H=="number"||typeof H=="boolean"?X[B]=H:X[B]=H.clone(),!0;{const T=X[B];if(typeof H=="number"||typeof H=="boolean"){if(T!==H)return X[B]=H,!0}else if(T.equals(H)===!1)return T.copy(H),!0}return!1}function b(D){const P=D.uniforms;let N=0;const X=16;for(let B=0,T=P.length;B<T;B++){const U=Array.isArray(P[B])?P[B]:[P[B]];for(let ht=0,G=U.length;ht<G;ht++){const Q=U[ht],st=Array.isArray(Q.value)?Q.value:[Q.value];for(let ot=0,J=st.length;ot<J;ot++){const L=st[ot],F=C(L),lt=N%X,mt=lt%F.boundary,Et=lt+mt;N+=mt,Et!==0&&X-Et<F.storage&&(N+=X-Et),Q.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=N,N+=F.storage}}}const H=N%X;return H>0&&(N+=X-H),D.__size=N,D.__cache={},this}function C(D){const P={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(P.boundary=4,P.storage=4):D.isVector2?(P.boundary=8,P.storage=8):D.isVector3||D.isColor?(P.boundary=16,P.storage=12):D.isVector4?(P.boundary=16,P.storage=16):D.isMatrix3?(P.boundary=48,P.storage=48):D.isMatrix4?(P.boundary=64,P.storage=64):D.isTexture?ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ne("WebGLRenderer: Unsupported uniform value type.",D),P}function M(D){const P=D.target;P.removeEventListener("dispose",M);const N=h.indexOf(P.__bindingPointIndex);h.splice(N,1),o.deleteBuffer(l[P.id]),delete l[P.id],delete u[P.id]}function x(){for(const D in l)o.deleteBuffer(l[D]);h=[],l={},u={}}return{bind:g,update:d,dispose:x}}const F1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ii=null;function B1(){return Ii===null&&(Ii=new nv(F1,16,16,Nr,ki),Ii.name="DFG_LUT",Ii.minFilter=hn,Ii.magFilter=hn,Ii.wrapS=ni,Ii.wrapT=ni,Ii.generateMipmaps=!1,Ii.needsUpdate=!0),Ii}class I1{constructor(e={}){const{canvas:i=ly(),context:s=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:p=!1,premultipliedAlpha:g=!0,preserveDrawingBuffer:d=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:y=!1,reversedDepthBuffer:v=!1,outputBufferType:E=di}=e;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=h;const C=E,M=new Set([Gd,Hd,Id]),x=new Set([di,Xi,Vo,Xo,Fd,Bd]),D=new Uint32Array(4),P=new Int32Array(4);let N=null,X=null;const H=[],B=[];let T=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let ht=!1;this._outputColorSpace=hi;let G=0,Q=0,st=null,ot=-1,J=null;const L=new $e,F=new $e;let lt=null;const mt=new Ne(0);let Et=0,O=i.width,Y=i.height,_t=1,At=null,Ot=null;const et=new $e(0,0,O,Y),vt=new $e(0,0,O,Y);let St=!1;const Gt=new iv;let Zt=!1,$t=!1;const Ye=new nn,ge=new at,me=new $e,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ae=!1;function ke(){return st===null?_t:1}let V=s;function Ve(R,W){return i.getContext(R,W)}try{const R={alpha:!0,depth:l,stencil:u,antialias:p,premultipliedAlpha:g,preserveDrawingBuffer:d,powerPreference:S,failIfMajorPerformanceCaveat:y};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Pd}`),i.addEventListener("webglcontextlost",It,!1),i.addEventListener("webglcontextrestored",ie,!1),i.addEventListener("webglcontextcreationerror",Pe,!1),V===null){const W="webgl2";if(V=Ve(W,R),V===null)throw Ve(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Ue("WebGLRenderer: "+R.message),R}let ye,Te,Xt,w,m,z,Z,ft,rt,Dt,Rt,qt,Jt,bt,yt,Pt,Nt,zt,ue,q,Ct,Tt,Ft;function Mt(){ye=new Ib(V),ye.init(),Ct=new w1(V,ye),Te=new Ub(V,ye,e,Ct),Xt=new R1(V,ye),Te.reversedDepthBuffer&&v&&Xt.buffers.depth.setReversed(!0),w=new Vb(V),m=new d1,z=new C1(V,ye,Xt,m,Te,Ct,w),Z=new Bb(U),ft=new Yy(V),Tt=new wb(V,ft),rt=new Hb(V,ft,w,Tt),Dt=new kb(V,rt,ft,Tt,w),zt=new Xb(V,Te,z),yt=new Lb(m),Rt=new h1(U,Z,ye,Te,Tt,yt),qt=new P1(U,m),Jt=new m1,bt=new y1(ye),Nt=new Cb(U,Z,Xt,Dt,b,g),Pt=new A1(U,Dt,Te),Ft=new z1(V,w,Te,Xt),ue=new Db(V,ye,w),q=new Gb(V,ye,w),w.programs=Rt.programs,U.capabilities=Te,U.extensions=ye,U.properties=m,U.renderLists=Jt,U.shadowMap=Pt,U.state=Xt,U.info=w}Mt(),C!==di&&(T=new qb(C,i.width,i.height,l,u));const dt=new N1(U,V);this.xr=dt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=ye.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ye.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(R){R!==void 0&&(_t=R,this.setSize(O,Y,!1))},this.getSize=function(R){return R.set(O,Y)},this.setSize=function(R,W,ct=!0){if(dt.isPresenting){ne("WebGLRenderer: Can't change size while VR device is presenting.");return}O=R,Y=W,i.width=Math.floor(R*_t),i.height=Math.floor(W*_t),ct===!0&&(i.style.width=R+"px",i.style.height=W+"px"),T!==null&&T.setSize(i.width,i.height),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(O*_t,Y*_t).floor()},this.setDrawingBufferSize=function(R,W,ct){O=R,Y=W,_t=ct,i.width=Math.floor(R*ct),i.height=Math.floor(W*ct),this.setViewport(0,0,R,W)},this.setEffects=function(R){if(C===di){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let W=0;W<R.length;W++)if(R[W].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(L)},this.getViewport=function(R){return R.copy(et)},this.setViewport=function(R,W,ct,nt){R.isVector4?et.set(R.x,R.y,R.z,R.w):et.set(R,W,ct,nt),Xt.viewport(L.copy(et).multiplyScalar(_t).round())},this.getScissor=function(R){return R.copy(vt)},this.setScissor=function(R,W,ct,nt){R.isVector4?vt.set(R.x,R.y,R.z,R.w):vt.set(R,W,ct,nt),Xt.scissor(F.copy(vt).multiplyScalar(_t).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(R){Xt.setScissorTest(St=R)},this.setOpaqueSort=function(R){At=R},this.setTransparentSort=function(R){Ot=R},this.getClearColor=function(R){return R.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor(...arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha(...arguments)},this.clear=function(R=!0,W=!0,ct=!0){let nt=0;if(R){let K=!1;if(st!==null){const wt=st.texture.format;K=M.has(wt)}if(K){const wt=st.texture.type,Bt=x.has(wt),Ut=Nt.getClearColor(),Wt=Nt.getClearAlpha(),jt=Ut.r,ee=Ut.g,re=Ut.b;Bt?(D[0]=jt,D[1]=ee,D[2]=re,D[3]=Wt,V.clearBufferuiv(V.COLOR,0,D)):(P[0]=jt,P[1]=ee,P[2]=re,P[3]=Wt,V.clearBufferiv(V.COLOR,0,P))}else nt|=V.COLOR_BUFFER_BIT}W&&(nt|=V.DEPTH_BUFFER_BIT),ct&&(nt|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),nt!==0&&V.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",It,!1),i.removeEventListener("webglcontextrestored",ie,!1),i.removeEventListener("webglcontextcreationerror",Pe,!1),Nt.dispose(),Jt.dispose(),bt.dispose(),m.dispose(),Z.dispose(),Dt.dispose(),Tt.dispose(),Ft.dispose(),Rt.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",Os),dt.removeEventListener("sessionend",Ps),Ni.stop()};function It(R){R.preventDefault(),H0("WebGLRenderer: Context Lost."),ht=!0}function ie(){H0("WebGLRenderer: Context Restored."),ht=!1;const R=w.autoReset,W=Pt.enabled,ct=Pt.autoUpdate,nt=Pt.needsUpdate,K=Pt.type;Mt(),w.autoReset=R,Pt.enabled=W,Pt.autoUpdate=ct,Pt.needsUpdate=nt,Pt.type=K}function Pe(R){Ue("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ae(R){const W=R.target;W.removeEventListener("dispose",Ae),wn(W)}function wn(R){gi(R),m.remove(R)}function gi(R){const W=m.get(R).programs;W!==void 0&&(W.forEach(function(ct){Rt.releaseProgram(ct)}),R.isShaderMaterial&&Rt.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,ct,nt,K,wt){W===null&&(W=be);const Bt=K.isMesh&&K.matrixWorld.determinant()<0,Ut=Jo(R,W,ct,nt,K);Xt.setMaterial(nt,Bt);let Wt=ct.index,jt=1;if(nt.wireframe===!0){if(Wt=rt.getWireframeAttribute(ct),Wt===void 0)return;jt=2}const ee=ct.drawRange,re=ct.attributes.position;let Ht=ee.start*jt,fe=(ee.start+ee.count)*jt;wt!==null&&(Ht=Math.max(Ht,wt.start*jt),fe=Math.min(fe,(wt.start+wt.count)*jt)),Wt!==null?(Ht=Math.max(Ht,0),fe=Math.min(fe,Wt.count)):re!=null&&(Ht=Math.max(Ht,0),fe=Math.min(fe,re.count));const je=fe-Ht;if(je<0||je===1/0)return;Tt.setup(K,nt,Ut,ct,Wt);let Ze,Ce=ue;if(Wt!==null&&(Ze=ft.get(Wt),Ce=q,Ce.setIndex(Ze)),K.isMesh)nt.wireframe===!0?(Xt.setLineWidth(nt.wireframeLinewidth*ke()),Ce.setMode(V.LINES)):Ce.setMode(V.TRIANGLES);else if(K.isLine){let pn=nt.linewidth;pn===void 0&&(pn=1),Xt.setLineWidth(pn*ke()),K.isLineSegments?Ce.setMode(V.LINES):K.isLineLoop?Ce.setMode(V.LINE_LOOP):Ce.setMode(V.LINE_STRIP)}else K.isPoints?Ce.setMode(V.POINTS):K.isSprite&&Ce.setMode(V.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Xc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ce.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(ye.get("WEBGL_multi_draw"))Ce.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const pn=K._multiDrawStarts,kt=K._multiDrawCounts,Dn=K._multiDrawCount,se=Wt?ft.get(Wt).bytesPerElement:1,Un=m.get(nt).currentProgram.getUniforms();for(let Wn=0;Wn<Dn;Wn++)Un.setValue(V,"_gl_DrawID",Wn),Ce.render(pn[Wn]/se,kt[Wn])}else if(K.isInstancedMesh)Ce.renderInstances(Ht,je,K.count);else if(ct.isInstancedBufferGeometry){const pn=ct._maxInstanceCount!==void 0?ct._maxInstanceCount:1/0,kt=Math.min(ct.instanceCount,pn);Ce.renderInstances(Ht,je,kt)}else Ce.render(Ht,je)};function Ir(R,W,ct){R.transparent===!0&&R.side===ga&&R.forceSinglePass===!1?(R.side=Xn,R.needsUpdate=!0,ya(R,W,ct),R.side=es,R.needsUpdate=!0,ya(R,W,ct),R.side=ga):ya(R,W,ct)}this.compile=function(R,W,ct=null){ct===null&&(ct=R),X=bt.get(ct),X.init(W),B.push(X),ct.traverseVisible(function(K){K.isLight&&K.layers.test(W.layers)&&(X.pushLight(K),K.castShadow&&X.pushShadow(K))}),R!==ct&&R.traverseVisible(function(K){K.isLight&&K.layers.test(W.layers)&&(X.pushLight(K),K.castShadow&&X.pushShadow(K))}),X.setupLights();const nt=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const wt=K.material;if(wt)if(Array.isArray(wt))for(let Bt=0;Bt<wt.length;Bt++){const Ut=wt[Bt];Ir(Ut,ct,K),nt.add(Ut)}else Ir(wt,ct,K),nt.add(wt)}),X=B.pop(),nt},this.compileAsync=function(R,W,ct=null){const nt=this.compile(R,W,ct);return new Promise(K=>{function wt(){if(nt.forEach(function(Bt){m.get(Bt).currentProgram.isReady()&&nt.delete(Bt)}),nt.size===0){K(R);return}setTimeout(wt,10)}ye.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let Ns=null;function Zo(R){Ns&&Ns(R)}function Os(){Ni.stop()}function Ps(){Ni.start()}const Ni=new lv;Ni.setAnimationLoop(Zo),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(R){Ns=R,dt.setAnimationLoop(R),R===null?Ni.stop():Ni.start()},dt.addEventListener("sessionstart",Os),dt.addEventListener("sessionend",Ps),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){Ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(ht===!0)return;const ct=dt.enabled===!0&&dt.isPresenting===!0,nt=T!==null&&(st===null||ct)&&T.begin(U,st);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(W),W=dt.getCamera()),R.isScene===!0&&R.onBeforeRender(U,R,W,st),X=bt.get(R,B.length),X.init(W),B.push(X),Ye.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Gt.setFromProjectionMatrix(Ye,Gi,W.reversedDepth),$t=this.localClippingEnabled,Zt=yt.init(this.clippingPlanes,$t),N=Jt.get(R,H.length),N.init(),H.push(N),dt.enabled===!0&&dt.isPresenting===!0){const Bt=U.xr.getDepthSensingMesh();Bt!==null&&zs(Bt,W,-1/0,U.sortObjects)}zs(R,W,0,U.sortObjects),N.finish(),U.sortObjects===!0&&N.sort(At,Ot),ae=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,ae&&Nt.addToRenderList(N,R),this.info.render.frame++,Zt===!0&&yt.beginShadows();const K=X.state.shadowsArray;if(Pt.render(K,R,W),Zt===!0&&yt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(nt&&T.hasRenderPass())===!1){const Bt=N.opaque,Ut=N.transmissive;if(X.setupLights(),W.isArrayCamera){const Wt=W.cameras;if(Ut.length>0)for(let jt=0,ee=Wt.length;jt<ee;jt++){const re=Wt[jt];an(Bt,Ut,R,re)}ae&&Nt.render(R);for(let jt=0,ee=Wt.length;jt<ee;jt++){const re=Wt[jt];_i(N,R,re,re.viewport)}}else Ut.length>0&&an(Bt,Ut,R,W),ae&&Nt.render(R),_i(N,R,W)}st!==null&&Q===0&&(z.updateMultisampleRenderTarget(st),z.updateRenderTargetMipmap(st)),nt&&T.end(U),R.isScene===!0&&R.onAfterRender(U,R,W),Tt.resetDefaultState(),ot=-1,J=null,B.pop(),B.length>0?(X=B[B.length-1],Zt===!0&&yt.setGlobalState(U.clippingPlanes,X.state.camera)):X=null,H.pop(),H.length>0?N=H[H.length-1]:N=null};function zs(R,W,ct,nt){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)ct=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)X.pushLight(R),R.castShadow&&X.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Gt.intersectsSprite(R)){nt&&me.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ye);const Bt=Dt.update(R),Ut=R.material;Ut.visible&&N.push(R,Bt,Ut,ct,me.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Gt.intersectsObject(R))){const Bt=Dt.update(R),Ut=R.material;if(nt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),me.copy(R.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),me.copy(Bt.boundingSphere.center)),me.applyMatrix4(R.matrixWorld).applyMatrix4(Ye)),Array.isArray(Ut)){const Wt=Bt.groups;for(let jt=0,ee=Wt.length;jt<ee;jt++){const re=Wt[jt],Ht=Ut[re.materialIndex];Ht&&Ht.visible&&N.push(R,Bt,Ht,ct,me.z,re)}}else Ut.visible&&N.push(R,Bt,Ut,ct,me.z,null)}}const wt=R.children;for(let Bt=0,Ut=wt.length;Bt<Ut;Bt++)zs(wt[Bt],W,ct,nt)}function _i(R,W,ct,nt){const{opaque:K,transmissive:wt,transparent:Bt}=R;X.setupLightsView(ct),Zt===!0&&yt.setGlobalState(U.clippingPlanes,ct),nt&&Xt.viewport(L.copy(nt)),K.length>0&&dn(K,W,ct),wt.length>0&&dn(wt,W,ct),Bt.length>0&&dn(Bt,W,ct),Xt.buffers.depth.setTest(!0),Xt.buffers.depth.setMask(!0),Xt.buffers.color.setMask(!0),Xt.setPolygonOffset(!1)}function an(R,W,ct,nt){if((ct.isScene===!0?ct.overrideMaterial:null)!==null)return;if(X.state.transmissionRenderTarget[nt.id]===void 0){const Ht=ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float");X.state.transmissionRenderTarget[nt.id]=new wi(1,1,{generateMipmaps:!0,type:Ht?ki:di,minFilter:ws,samples:Te.samples,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Re.workingColorSpace})}const wt=X.state.transmissionRenderTarget[nt.id],Bt=nt.viewport||L;wt.setSize(Bt.z*U.transmissionResolutionScale,Bt.w*U.transmissionResolutionScale);const Ut=U.getRenderTarget(),Wt=U.getActiveCubeFace(),jt=U.getActiveMipmapLevel();U.setRenderTarget(wt),U.getClearColor(mt),Et=U.getClearAlpha(),Et<1&&U.setClearColor(16777215,.5),U.clear(),ae&&Nt.render(ct);const ee=U.toneMapping;U.toneMapping=Vi;const re=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),X.setupLightsView(nt),Zt===!0&&yt.setGlobalState(U.clippingPlanes,nt),dn(R,ct,nt),z.updateMultisampleRenderTarget(wt),z.updateRenderTargetMipmap(wt),ye.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let fe=0,je=W.length;fe<je;fe++){const Ze=W[fe],{object:Ce,geometry:pn,material:kt,group:Dn}=Ze;if(kt.side===ga&&Ce.layers.test(nt.layers)){const se=kt.side;kt.side=Xn,kt.needsUpdate=!0,qi(Ce,ct,nt,pn,kt,Dn),kt.side=se,kt.needsUpdate=!0,Ht=!0}}Ht===!0&&(z.updateMultisampleRenderTarget(wt),z.updateRenderTargetMipmap(wt))}U.setRenderTarget(Ut,Wt,jt),U.setClearColor(mt,Et),re!==void 0&&(nt.viewport=re),U.toneMapping=ee}function dn(R,W,ct){const nt=W.isScene===!0?W.overrideMaterial:null;for(let K=0,wt=R.length;K<wt;K++){const Bt=R[K],{object:Ut,geometry:Wt,group:jt}=Bt;let ee=Bt.material;ee.allowOverride===!0&&nt!==null&&(ee=nt),Ut.layers.test(ct.layers)&&qi(Ut,W,ct,Wt,ee,jt)}}function qi(R,W,ct,nt,K,wt){R.onBeforeRender(U,W,ct,nt,K,wt),R.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(U,W,ct,nt,R,wt),K.transparent===!0&&K.side===ga&&K.forceSinglePass===!1?(K.side=Xn,K.needsUpdate=!0,U.renderBufferDirect(ct,W,nt,K,R,wt),K.side=es,K.needsUpdate=!0,U.renderBufferDirect(ct,W,nt,K,R,wt),K.side=ga):U.renderBufferDirect(ct,W,nt,K,R,wt),R.onAfterRender(U,W,ct,nt,K,wt)}function ya(R,W,ct){W.isScene!==!0&&(W=be);const nt=m.get(R),K=X.state.lights,wt=X.state.shadowsArray,Bt=K.state.version,Ut=Rt.getParameters(R,K.state,wt,W,ct),Wt=Rt.getProgramCacheKey(Ut);let jt=nt.programs;nt.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?W.environment:null,nt.fog=W.fog;const ee=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;nt.envMap=Z.get(R.envMap||nt.environment,ee),nt.envMapRotation=nt.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,jt===void 0&&(R.addEventListener("dispose",Ae),jt=new Map,nt.programs=jt);let re=jt.get(Wt);if(re!==void 0){if(nt.currentProgram===re&&nt.lightsStateVersion===Bt)return Qo(R,Ut),re}else Ut.uniforms=Rt.getUniforms(R),R.onBeforeCompile(Ut,U),re=Rt.acquireProgram(Ut,Wt),jt.set(Wt,re),nt.uniforms=Ut.uniforms;const Ht=nt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ht.clippingPlanes=yt.uniform),Qo(R,Ut),nt.needsLights=Hr(R),nt.lightsStateVersion=Bt,nt.needsLights&&(Ht.ambientLightColor.value=K.state.ambient,Ht.lightProbe.value=K.state.probe,Ht.directionalLights.value=K.state.directional,Ht.directionalLightShadows.value=K.state.directionalShadow,Ht.spotLights.value=K.state.spot,Ht.spotLightShadows.value=K.state.spotShadow,Ht.rectAreaLights.value=K.state.rectArea,Ht.ltc_1.value=K.state.rectAreaLTC1,Ht.ltc_2.value=K.state.rectAreaLTC2,Ht.pointLights.value=K.state.point,Ht.pointLightShadows.value=K.state.pointShadow,Ht.hemisphereLights.value=K.state.hemi,Ht.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ht.spotLightMatrix.value=K.state.spotLightMatrix,Ht.spotLightMap.value=K.state.spotLightMap,Ht.pointShadowMatrix.value=K.state.pointShadowMatrix),nt.currentProgram=re,nt.uniformsList=null,re}function Ko(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=Ic.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function Qo(R,W){const ct=m.get(R);ct.outputColorSpace=W.outputColorSpace,ct.batching=W.batching,ct.batchingColor=W.batchingColor,ct.instancing=W.instancing,ct.instancingColor=W.instancingColor,ct.instancingMorph=W.instancingMorph,ct.skinning=W.skinning,ct.morphTargets=W.morphTargets,ct.morphNormals=W.morphNormals,ct.morphColors=W.morphColors,ct.morphTargetsCount=W.morphTargetsCount,ct.numClippingPlanes=W.numClippingPlanes,ct.numIntersection=W.numClipIntersection,ct.vertexAlphas=W.vertexAlphas,ct.vertexTangents=W.vertexTangents,ct.toneMapping=W.toneMapping}function Jo(R,W,ct,nt,K){W.isScene!==!0&&(W=be),z.resetTextureUnits();const wt=W.fog,Bt=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial?W.environment:null,Ut=st===null?U.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Or,Wt=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial&&!nt.envMap||nt.isMeshPhongMaterial&&!nt.envMap,jt=Z.get(nt.envMap||Bt,Wt),ee=nt.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,re=!!ct.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Ht=!!ct.morphAttributes.position,fe=!!ct.morphAttributes.normal,je=!!ct.morphAttributes.color;let Ze=Vi;nt.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Ze=U.toneMapping);const Ce=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,pn=Ce!==void 0?Ce.length:0,kt=m.get(nt),Dn=X.state.lights;if(Zt===!0&&($t===!0||R!==J)){const rn=R===J&&nt.id===ot;yt.setState(nt,R,rn)}let se=!1;nt.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Dn.state.version||kt.outputColorSpace!==Ut||K.isBatchedMesh&&kt.batching===!1||!K.isBatchedMesh&&kt.batching===!0||K.isBatchedMesh&&kt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&kt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&kt.instancing===!1||!K.isInstancedMesh&&kt.instancing===!0||K.isSkinnedMesh&&kt.skinning===!1||!K.isSkinnedMesh&&kt.skinning===!0||K.isInstancedMesh&&kt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&kt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&kt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&kt.instancingMorph===!1&&K.morphTexture!==null||kt.envMap!==jt||nt.fog===!0&&kt.fog!==wt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==yt.numPlanes||kt.numIntersection!==yt.numIntersection)||kt.vertexAlphas!==ee||kt.vertexTangents!==re||kt.morphTargets!==Ht||kt.morphNormals!==fe||kt.morphColors!==je||kt.toneMapping!==Ze||kt.morphTargetsCount!==pn)&&(se=!0):(se=!0,kt.__version=nt.version);let Un=kt.currentProgram;se===!0&&(Un=ya(nt,W,K));let Wn=!1,vi=!1,qn=!1;const Oe=Un.getUniforms(),sn=kt.uniforms;if(Xt.useProgram(Un.program)&&(Wn=!0,vi=!0,qn=!0),nt.id!==ot&&(ot=nt.id,vi=!0),Wn||J!==R){Xt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Oe.setValue(V,"projectionMatrix",R.projectionMatrix),Oe.setValue(V,"viewMatrix",R.matrixWorldInverse);const xi=Oe.map.cameraPosition;xi!==void 0&&xi.setValue(V,ge.setFromMatrixPosition(R.matrixWorld)),Te.logarithmicDepthBuffer&&Oe.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&Oe.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),J!==R&&(J=R,vi=!0,qn=!0)}if(kt.needsLights&&(Dn.state.directionalShadowMap.length>0&&Oe.setValue(V,"directionalShadowMap",Dn.state.directionalShadowMap,z),Dn.state.spotShadowMap.length>0&&Oe.setValue(V,"spotShadowMap",Dn.state.spotShadowMap,z),Dn.state.pointShadowMap.length>0&&Oe.setValue(V,"pointShadowMap",Dn.state.pointShadowMap,z)),K.isSkinnedMesh){Oe.setOptional(V,K,"bindMatrix"),Oe.setOptional(V,K,"bindMatrixInverse");const rn=K.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),Oe.setValue(V,"boneTexture",rn.boneTexture,z))}K.isBatchedMesh&&(Oe.setOptional(V,K,"batchingTexture"),Oe.setValue(V,"batchingTexture",K._matricesTexture,z),Oe.setOptional(V,K,"batchingIdTexture"),Oe.setValue(V,"batchingIdTexture",K._indirectTexture,z),Oe.setOptional(V,K,"batchingColorTexture"),K._colorsTexture!==null&&Oe.setValue(V,"batchingColorTexture",K._colorsTexture,z));const Ln=ct.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&zt.update(K,ct,Un),(vi||kt.receiveShadow!==K.receiveShadow)&&(kt.receiveShadow=K.receiveShadow,Oe.setValue(V,"receiveShadow",K.receiveShadow)),(nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial)&&nt.envMap===null&&W.environment!==null&&(sn.envMapIntensity.value=W.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=B1()),vi&&(Oe.setValue(V,"toneMappingExposure",U.toneMappingExposure),kt.needsLights&&ns(sn,qn),wt&&nt.fog===!0&&qt.refreshFogUniforms(sn,wt),qt.refreshMaterialUniforms(sn,nt,_t,Y,X.state.transmissionRenderTarget[R.id]),Ic.upload(V,Ko(kt),sn,z)),nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(Ic.upload(V,Ko(kt),sn,z),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&Oe.setValue(V,"center",K.center),Oe.setValue(V,"modelViewMatrix",K.modelViewMatrix),Oe.setValue(V,"normalMatrix",K.normalMatrix),Oe.setValue(V,"modelMatrix",K.matrixWorld),nt.isShaderMaterial||nt.isRawShaderMaterial){const rn=nt.uniformsGroups;for(let xi=0,Yi=rn.length;xi<Yi;xi++){const Fs=rn[xi];Ft.update(Fs,Un),Ft.bind(Fs,Un)}}return Un}function ns(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function Hr(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return st},this.setRenderTargetTextures=function(R,W,ct){const nt=m.get(R);nt.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,nt.__autoAllocateDepthBuffer===!1&&(nt.__useRenderToTexture=!1),m.get(R.texture).__webglTexture=W,m.get(R.depthTexture).__webglTexture=nt.__autoAllocateDepthBuffer?void 0:ct,nt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,W){const ct=m.get(R);ct.__webglFramebuffer=W,ct.__useDefaultFramebuffer=W===void 0};const Ma=V.createFramebuffer();this.setRenderTarget=function(R,W=0,ct=0){st=R,G=W,Q=ct;let nt=null,K=!1,wt=!1;if(R){const Ut=m.get(R);if(Ut.__useDefaultFramebuffer!==void 0){Xt.bindFramebuffer(V.FRAMEBUFFER,Ut.__webglFramebuffer),L.copy(R.viewport),F.copy(R.scissor),lt=R.scissorTest,Xt.viewport(L),Xt.scissor(F),Xt.setScissorTest(lt),ot=-1;return}else if(Ut.__webglFramebuffer===void 0)z.setupRenderTarget(R);else if(Ut.__hasExternalTextures)z.rebindTextures(R,m.get(R.texture).__webglTexture,m.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ee=R.depthTexture;if(Ut.__boundDepthTexture!==ee){if(ee!==null&&m.has(ee)&&(R.width!==ee.image.width||R.height!==ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(R)}}const Wt=R.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(wt=!0);const jt=m.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(jt[W])?nt=jt[W][ct]:nt=jt[W],K=!0):R.samples>0&&z.useMultisampledRTT(R)===!1?nt=m.get(R).__webglMultisampledFramebuffer:Array.isArray(jt)?nt=jt[ct]:nt=jt,L.copy(R.viewport),F.copy(R.scissor),lt=R.scissorTest}else L.copy(et).multiplyScalar(_t).floor(),F.copy(vt).multiplyScalar(_t).floor(),lt=St;if(ct!==0&&(nt=Ma),Xt.bindFramebuffer(V.FRAMEBUFFER,nt)&&Xt.drawBuffers(R,nt),Xt.viewport(L),Xt.scissor(F),Xt.setScissorTest(lt),K){const Ut=m.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ut.__webglTexture,ct)}else if(wt){const Ut=W;for(let Wt=0;Wt<R.textures.length;Wt++){const jt=m.get(R.textures[Wt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Wt,jt.__webglTexture,ct,Ut)}}else if(R!==null&&ct!==0){const Ut=m.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ut.__webglTexture,ct)}ot=-1},this.readRenderTargetPixels=function(R,W,ct,nt,K,wt,Bt,Ut=0){if(!(R&&R.isWebGLRenderTarget)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Wt=m.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Bt!==void 0&&(Wt=Wt[Bt]),Wt){Xt.bindFramebuffer(V.FRAMEBUFFER,Wt);try{const jt=R.textures[Ut],ee=jt.format,re=jt.type;if(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ut),!Te.textureFormatReadable(ee)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Te.textureTypeReadable(re)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-nt&&ct>=0&&ct<=R.height-K&&V.readPixels(W,ct,nt,K,Ct.convert(ee),Ct.convert(re),wt)}finally{const jt=st!==null?m.get(st).__webglFramebuffer:null;Xt.bindFramebuffer(V.FRAMEBUFFER,jt)}}},this.readRenderTargetPixelsAsync=async function(R,W,ct,nt,K,wt,Bt,Ut=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Wt=m.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Bt!==void 0&&(Wt=Wt[Bt]),Wt)if(W>=0&&W<=R.width-nt&&ct>=0&&ct<=R.height-K){Xt.bindFramebuffer(V.FRAMEBUFFER,Wt);const jt=R.textures[Ut],ee=jt.format,re=jt.type;if(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ut),!Te.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Te.textureTypeReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ht=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Ht),V.bufferData(V.PIXEL_PACK_BUFFER,wt.byteLength,V.STREAM_READ),V.readPixels(W,ct,nt,K,Ct.convert(ee),Ct.convert(re),0);const fe=st!==null?m.get(st).__webglFramebuffer:null;Xt.bindFramebuffer(V.FRAMEBUFFER,fe);const je=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await cy(V,je,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Ht),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,wt),V.deleteBuffer(Ht),V.deleteSync(je),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,W=null,ct=0){const nt=Math.pow(2,-ct),K=Math.floor(R.image.width*nt),wt=Math.floor(R.image.height*nt),Bt=W!==null?W.x:0,Ut=W!==null?W.y:0;z.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,ct,0,0,Bt,Ut,K,wt),Xt.unbindTexture()};const Ea=V.createFramebuffer(),is=V.createFramebuffer();this.copyTextureToTexture=function(R,W,ct=null,nt=null,K=0,wt=0){let Bt,Ut,Wt,jt,ee,re,Ht,fe,je;const Ze=R.isCompressedTexture?R.mipmaps[wt]:R.image;if(ct!==null)Bt=ct.max.x-ct.min.x,Ut=ct.max.y-ct.min.y,Wt=ct.isBox3?ct.max.z-ct.min.z:1,jt=ct.min.x,ee=ct.min.y,re=ct.isBox3?ct.min.z:0;else{const sn=Math.pow(2,-K);Bt=Math.floor(Ze.width*sn),Ut=Math.floor(Ze.height*sn),R.isDataArrayTexture?Wt=Ze.depth:R.isData3DTexture?Wt=Math.floor(Ze.depth*sn):Wt=1,jt=0,ee=0,re=0}nt!==null?(Ht=nt.x,fe=nt.y,je=nt.z):(Ht=0,fe=0,je=0);const Ce=Ct.convert(W.format),pn=Ct.convert(W.type);let kt;W.isData3DTexture?(z.setTexture3D(W,0),kt=V.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(z.setTexture2DArray(W,0),kt=V.TEXTURE_2D_ARRAY):(z.setTexture2D(W,0),kt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,W.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,W.unpackAlignment);const Dn=V.getParameter(V.UNPACK_ROW_LENGTH),se=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Un=V.getParameter(V.UNPACK_SKIP_PIXELS),Wn=V.getParameter(V.UNPACK_SKIP_ROWS),vi=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ze.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ze.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,jt),V.pixelStorei(V.UNPACK_SKIP_ROWS,ee),V.pixelStorei(V.UNPACK_SKIP_IMAGES,re);const qn=R.isDataArrayTexture||R.isData3DTexture,Oe=W.isDataArrayTexture||W.isData3DTexture;if(R.isDepthTexture){const sn=m.get(R),Ln=m.get(W),rn=m.get(sn.__renderTarget),xi=m.get(Ln.__renderTarget);Xt.bindFramebuffer(V.READ_FRAMEBUFFER,rn.__webglFramebuffer),Xt.bindFramebuffer(V.DRAW_FRAMEBUFFER,xi.__webglFramebuffer);for(let Yi=0;Yi<Wt;Yi++)qn&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,m.get(R).__webglTexture,K,re+Yi),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,m.get(W).__webglTexture,wt,je+Yi)),V.blitFramebuffer(jt,ee,Bt,Ut,Ht,fe,Bt,Ut,V.DEPTH_BUFFER_BIT,V.NEAREST);Xt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||m.has(R)){const sn=m.get(R),Ln=m.get(W);Xt.bindFramebuffer(V.READ_FRAMEBUFFER,Ea),Xt.bindFramebuffer(V.DRAW_FRAMEBUFFER,is);for(let rn=0;rn<Wt;rn++)qn?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,sn.__webglTexture,K,re+rn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,sn.__webglTexture,K),Oe?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ln.__webglTexture,wt,je+rn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ln.__webglTexture,wt),K!==0?V.blitFramebuffer(jt,ee,Bt,Ut,Ht,fe,Bt,Ut,V.COLOR_BUFFER_BIT,V.NEAREST):Oe?V.copyTexSubImage3D(kt,wt,Ht,fe,je+rn,jt,ee,Bt,Ut):V.copyTexSubImage2D(kt,wt,Ht,fe,jt,ee,Bt,Ut);Xt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Oe?R.isDataTexture||R.isData3DTexture?V.texSubImage3D(kt,wt,Ht,fe,je,Bt,Ut,Wt,Ce,pn,Ze.data):W.isCompressedArrayTexture?V.compressedTexSubImage3D(kt,wt,Ht,fe,je,Bt,Ut,Wt,Ce,Ze.data):V.texSubImage3D(kt,wt,Ht,fe,je,Bt,Ut,Wt,Ce,pn,Ze):R.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,wt,Ht,fe,Bt,Ut,Ce,pn,Ze.data):R.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,wt,Ht,fe,Ze.width,Ze.height,Ce,Ze.data):V.texSubImage2D(V.TEXTURE_2D,wt,Ht,fe,Bt,Ut,Ce,pn,Ze);V.pixelStorei(V.UNPACK_ROW_LENGTH,Dn),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,se),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Un),V.pixelStorei(V.UNPACK_SKIP_ROWS,Wn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,vi),wt===0&&W.generateMipmaps&&V.generateMipmap(kt),Xt.unbindTexture()},this.initRenderTarget=function(R){m.get(R).__webglFramebuffer===void 0&&z.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?z.setTextureCube(R,0):R.isData3DTexture?z.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?z.setTexture2DArray(R,0):z.setTexture2D(R,0),Xt.unbindTexture()},this.resetState=function(){G=0,Q=0,st=null,Xt.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Re._getDrawingBufferColorSpace(e),i.unpackColorSpace=Re._getUnpackColorSpace()}}function H1({mouseForce:o=20,cursorSize:e=100,isViscous:i=!1,viscous:s=30,iterationsViscous:l=32,iterationsPoisson:u=32,dt:h=.014,BFECC:p=!0,resolution:g=.5,isBounce:d=!1,colors:S=["#5227FF","#FF9FFC","#B19EEF"],style:y={},className:v="",autoDemo:E=!0,autoSpeed:b=.5,autoIntensity:C=2.2,takeoverDuration:M=.25,autoResumeDelay:x=1e3,autoRampDuration:D=.6}){const P=Cn.useRef(null),N=Cn.useRef(null),X=Cn.useRef(null),H=Cn.useRef(null),B=Cn.useRef(null),T=Cn.useRef(!0),U=Cn.useRef(null);return Cn.useEffect(()=>{if(!P.current)return;function ht(w){let m;Array.isArray(w)&&w.length>0?w.length===1?m=[w[0],w[0]]:m=w:m=["#ffffff","#ffffff"];const z=m.length,Z=new Uint8Array(z*4);for(let rt=0;rt<z;rt++){const Dt=new Ne(m[rt]);Z[rt*4+0]=Math.round(Dt.r*255),Z[rt*4+1]=Math.round(Dt.g*255),Z[rt*4+2]=Math.round(Dt.b*255),Z[rt*4+3]=255}const ft=new nv(Z,z,1,pi);return ft.magFilter=hn,ft.minFilter=hn,ft.wrapS=ni,ft.wrapT=ni,ft.generateMipmaps=!1,ft.needsUpdate=!0,ft}const G=ht(S),Q=new $e(0,0,0,0);class st{constructor(){this.width=0,this.height=0,this.aspect=1,this.pixelRatio=1,this.isMobile=!1,this.breakpoint=768,this.fboWidth=null,this.fboHeight=null,this.time=0,this.delta=0,this.container=null,this.renderer=null,this.clock=null}init(m){this.container=m,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new I1({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new Ne(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.clock=new Wy,this.clock.start()}resize(){if(!this.container)return;const m=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(m.width)),this.height=Math.max(1,Math.floor(m.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.delta=this.clock.getDelta(),this.time+=this.delta}}const ot=new st;class J{constructor(){this.mouseMoved=!1,this.coords=new le,this.coords_old=new le,this.diff=new le,this.timer=null,this.container=null,this.docTarget=null,this.listenerTarget=null,this.isHoverInside=!1,this.hasUserControl=!1,this.isAutoActive=!1,this.autoIntensity=2,this.takeoverActive=!1,this.takeoverStartTime=0,this.takeoverDuration=.25,this.takeoverFrom=new le,this.takeoverTo=new le,this.onInteract=null,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this._onDocumentLeave=this.onDocumentLeave.bind(this)}init(m){this.container=m,this.docTarget=m.ownerDocument||null;const z=this.docTarget&&this.docTarget.defaultView||(typeof window<"u"?window:null);z&&(this.listenerTarget=z,this.listenerTarget.addEventListener("mousemove",this._onMouseMove),this.listenerTarget.addEventListener("touchstart",this._onTouchStart,{passive:!0}),this.listenerTarget.addEventListener("touchmove",this._onTouchMove,{passive:!0}),this.listenerTarget.addEventListener("touchend",this._onTouchEnd),this.docTarget&&this.docTarget.addEventListener("mouseleave",this._onDocumentLeave))}dispose(){this.listenerTarget&&(this.listenerTarget.removeEventListener("mousemove",this._onMouseMove),this.listenerTarget.removeEventListener("touchstart",this._onTouchStart),this.listenerTarget.removeEventListener("touchmove",this._onTouchMove),this.listenerTarget.removeEventListener("touchend",this._onTouchEnd)),this.docTarget&&this.docTarget.removeEventListener("mouseleave",this._onDocumentLeave),this.listenerTarget=null,this.docTarget=null,this.container=null}isPointInside(m,z){if(!this.container)return!1;const Z=this.container.getBoundingClientRect();return Z.width===0||Z.height===0?!1:m>=Z.left&&m<=Z.right&&z>=Z.top&&z<=Z.bottom}updateHoverState(m,z){return this.isHoverInside=this.isPointInside(m,z),this.isHoverInside}setCoords(m,z){if(!this.container)return;this.timer&&window.clearTimeout(this.timer);const Z=this.container.getBoundingClientRect();if(Z.width===0||Z.height===0)return;const ft=(m-Z.left)/Z.width,rt=(z-Z.top)/Z.height;this.coords.set(ft*2-1,-(rt*2-1)),this.mouseMoved=!0,this.timer=window.setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(m,z){this.coords.set(m,z),this.mouseMoved=!0}onDocumentMouseMove(m){if(this.updateHoverState(m.clientX,m.clientY)){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){if(!this.container)return;const z=this.container.getBoundingClientRect();if(z.width===0||z.height===0)return;const Z=(m.clientX-z.left)/z.width,ft=(m.clientY-z.top)/z.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set(Z*2-1,-(ft*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(m.clientX,m.clientY),this.hasUserControl=!0}}onDocumentTouchStart(m){if(m.touches.length!==1)return;const z=m.touches[0];this.updateHoverState(z.clientX,z.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(z.clientX,z.clientY),this.hasUserControl=!0)}onDocumentTouchMove(m){if(m.touches.length!==1)return;const z=m.touches[0];this.updateHoverState(z.clientX,z.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(z.clientX,z.clientY))}onTouchEnd(){this.isHoverInside=!1}onDocumentLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const m=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(m>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const z=m*m*(3-2*m);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,z)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const L=new J;class F{constructor(m,z,Z){this.mouse=m,this.manager=z,this.enabled=Z.enabled,this.speed=Z.speed,this.resumeDelay=Z.resumeDelay||3e3,this.rampDurationMs=(Z.rampDuration||0)*1e3,this.active=!1,this.current=new le(0,0),this.target=new le,this.lastTime=performance.now(),this.activationTime=0,this.margin=.2,this._tmpDir=new le,this.pickNewTarget()}pickNewTarget(){const m=Math.random;this.target.set((m()*2-1)*(1-this.margin),(m()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const m=performance.now();if(m-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=m,this.activationTime=m),!this.active)return;this.mouse.isAutoActive=!0;let Z=(m-this.lastTime)/1e3;this.lastTime=m,Z>.2&&(Z=.016);const ft=this._tmpDir.subVectors(this.target,this.current),rt=ft.length();if(rt<.01){this.pickNewTarget();return}ft.normalize();let Dt=1;if(this.rampDurationMs>0){const Jt=Math.min(1,(m-this.activationTime)/this.rampDurationMs);Dt=Jt*Jt*(3-2*Jt)}const Rt=this.speed*Z*Dt,qt=Math.min(Rt,rt);this.current.addScaledVector(ft,qt),this.mouse.setNormalized(this.current.x,this.current.y)}}const lt=`
  attribute vec3 position;
  uniform vec2 px;
  uniform vec2 boundarySpace;
  varying vec2 uv;
  precision highp float;
  void main(){
  vec3 pos = position;
  vec2 scale = 1.0 - boundarySpace * 2.0;
  pos.xy = pos.xy * scale;
  uv = vec2(0.5)+(pos.xy)*0.5;
  gl_Position = vec4(pos, 1.0);
}
`,mt=`
  attribute vec3 position;
  uniform vec2 px;
  precision highp float;
  varying vec2 uv;
  void main(){
  vec3 pos = position;
  uv = 0.5 + pos.xy * 0.5;
  vec2 n = sign(pos.xy);
  pos.xy = abs(pos.xy) - px * 1.0;
  pos.xy *= n;
  gl_Position = vec4(pos, 1.0);
}
`,Et=`
    precision highp float;
    attribute vec3 position;
    attribute vec2 uv;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 pos = position.xy * scale * 2.0 * px + center;
    vUv = uv;
    gl_Position = vec4(pos, 0.0, 1.0);
}
`,O=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform bool isBFECC;
    uniform vec2 fboSize;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;
    if(isBFECC == false){
        vec2 vel = texture2D(velocity, uv).xy;
        vec2 uv2 = uv - vel * dt * ratio;
        vec2 newVel = texture2D(velocity, uv2).xy;
        gl_FragColor = vec4(newVel, 0.0, 0.0);
    } else {
        vec2 spot_new = uv;
        vec2 vel_old = texture2D(velocity, uv).xy;
        vec2 spot_old = spot_new - vel_old * dt * ratio;
        vec2 vel_new1 = texture2D(velocity, spot_old).xy;
        vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;
        vec2 error = spot_new2 - spot_new;
        vec2 spot_new3 = spot_new - error / 2.0;
        vec2 vel_2 = texture2D(velocity, spot_new3).xy;
        vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;
        vec2 newVel2 = texture2D(velocity, spot_old2).xy; 
        gl_FragColor = vec4(newVel2, 0.0, 0.0);
    }
}
`,Y=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D palette;
    uniform vec4 bgColor;
    varying vec2 uv;
    void main(){
    vec2 vel = texture2D(velocity, uv).xy;
    float lenv = clamp(length(vel), 0.0, 1.0);
    vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb;
    vec3 outRGB = mix(bgColor.rgb, c, lenv);
    float outA = mix(bgColor.a, 1.0, lenv);
    gl_FragColor = vec4(outRGB, outA);
}
`,_t=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float x0 = texture2D(velocity, uv-vec2(px.x, 0.0)).x;
    float x1 = texture2D(velocity, uv+vec2(px.x, 0.0)).x;
    float y0 = texture2D(velocity, uv-vec2(0.0, px.y)).y;
    float y1 = texture2D(velocity, uv+vec2(0.0, px.y)).y;
    float divergence = (x1 - x0 + y1 - y0) / 2.0;
    gl_FragColor = vec4(divergence / dt);
}
`,At=`
    precision highp float;
    uniform vec2 force;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 circle = (vUv - 0.5) * 2.0;
    float d = 1.0 - min(length(circle), 1.0);
    d *= d;
    gl_FragColor = vec4(force * d, 0.0, 1.0);
}
`,Ot=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D divergence;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float p0 = texture2D(pressure, uv + vec2(px.x * 2.0, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * 2.0, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * 2.0)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * 2.0)).r;
    float div = texture2D(divergence, uv).r;
    float newP = (p0 + p1 + p2 + p3) / 4.0 - div;
    gl_FragColor = vec4(newP);
}
`,et=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D velocity;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    float step = 1.0;
    float p0 = texture2D(pressure, uv + vec2(px.x * step, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * step, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * step)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * step)).r;
    vec2 v = texture2D(velocity, uv).xy;
    vec2 gradP = vec2(p0 - p1, p2 - p3) * 0.5;
    v = v - gradP * dt;
    gl_FragColor = vec4(v, 0.0, 1.0);
}
`,vt=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D velocity_new;
    uniform float v;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    vec2 old = texture2D(velocity, uv).xy;
    vec2 new0 = texture2D(velocity_new, uv + vec2(px.x * 2.0, 0.0)).xy;
    vec2 new1 = texture2D(velocity_new, uv - vec2(px.x * 2.0, 0.0)).xy;
    vec2 new2 = texture2D(velocity_new, uv + vec2(0.0, px.y * 2.0)).xy;
    vec2 new3 = texture2D(velocity_new, uv - vec2(0.0, px.y * 2.0)).xy;
    vec2 newv = 4.0 * old + v * dt * (new0 + new1 + new2 + new3);
    newv /= 4.0 * (1.0 + v * dt);
    gl_FragColor = vec4(newv, 0.0, 0.0);
}
`;class St{constructor(m){this.props=m||{},this.uniforms=this.props.material?.uniforms,this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null}init(){this.scene=new Q0,this.camera=new qc,this.uniforms&&(this.material=new Ho(this.props.material),this.geometry=new Us(2,2),this.plane=new mi(this.geometry,this.material),this.scene.add(this.plane))}update(){ot.renderer.setRenderTarget(this.props.output||null),ot.renderer.render(this.scene,this.camera),ot.renderer.setRenderTarget(null)}}class Gt extends St{constructor(m){super({material:{vertexShader:lt,fragmentShader:O,uniforms:{boundarySpace:{value:m.cellScale},px:{value:m.cellScale},fboSize:{value:m.fboSize},velocity:{value:m.src.texture},dt:{value:m.dt},isBFECC:{value:!0}}},output:m.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const m=new Li,z=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);m.setAttribute("position",new Di(z,3));const Z=new Ho({vertexShader:mt,fragmentShader:O,uniforms:this.uniforms});this.line=new Py(m,Z),this.scene.add(this.line)}update({dt:m,isBounce:z,BFECC:Z}){this.uniforms.dt.value=m,this.line.visible=z,this.uniforms.isBFECC.value=Z,super.update()}}class Zt extends St{constructor(m){super({output:m.dst}),this.init(m)}init(m){super.init();const z=new Us(1,1),Z=new Ho({vertexShader:Et,fragmentShader:At,blending:Gh,depthWrite:!1,uniforms:{px:{value:m.cellScale},force:{value:new le(0,0)},center:{value:new le(0,0)},scale:{value:new le(m.cursor_size,m.cursor_size)}}});this.mouse=new mi(z,Z),this.scene.add(this.mouse)}update(m){const z=L.diff.x/2*m.mouse_force,Z=L.diff.y/2*m.mouse_force,ft=m.cursor_size*m.cellScale.x,rt=m.cursor_size*m.cellScale.y,Dt=Math.min(Math.max(L.coords.x,-1+ft+m.cellScale.x*2),1-ft-m.cellScale.x*2),Rt=Math.min(Math.max(L.coords.y,-1+rt+m.cellScale.y*2),1-rt-m.cellScale.y*2),qt=this.mouse.material.uniforms;qt.force.value.set(z,Z),qt.center.value.set(Dt,Rt),qt.scale.value.set(m.cursor_size,m.cursor_size),super.update()}}class $t extends St{constructor(m){super({material:{vertexShader:lt,fragmentShader:vt,uniforms:{boundarySpace:{value:m.boundarySpace},velocity:{value:m.src.texture},velocity_new:{value:m.dst_.texture},v:{value:m.viscous},px:{value:m.cellScale},dt:{value:m.dt}}},output:m.dst,output0:m.dst_,output1:m.dst}),this.init()}update({viscous:m,iterations:z,dt:Z}){let ft,rt;this.uniforms.v.value=m;for(let Dt=0;Dt<z;Dt++)Dt%2===0?(ft=this.props.output0,rt=this.props.output1):(ft=this.props.output1,rt=this.props.output0),this.uniforms.velocity_new.value=ft.texture,this.props.output=rt,this.uniforms.dt.value=Z,super.update();return rt}}class Ye extends St{constructor(m){super({material:{vertexShader:lt,fragmentShader:_t,uniforms:{boundarySpace:{value:m.boundarySpace},velocity:{value:m.src.texture},px:{value:m.cellScale},dt:{value:m.dt}}},output:m.dst}),this.init()}update({vel:m}){this.uniforms.velocity.value=m.texture,super.update()}}class ge extends St{constructor(m){super({material:{vertexShader:lt,fragmentShader:Ot,uniforms:{boundarySpace:{value:m.boundarySpace},pressure:{value:m.dst_.texture},divergence:{value:m.src.texture},px:{value:m.cellScale}}},output:m.dst,output0:m.dst_,output1:m.dst}),this.init()}update({iterations:m}){let z,Z;for(let ft=0;ft<m;ft++)ft%2===0?(z=this.props.output0,Z=this.props.output1):(z=this.props.output1,Z=this.props.output0),this.uniforms.pressure.value=z.texture,this.props.output=Z,super.update();return Z}}class me extends St{constructor(m){super({material:{vertexShader:lt,fragmentShader:et,uniforms:{boundarySpace:{value:m.boundarySpace},pressure:{value:m.src_p.texture},velocity:{value:m.src_v.texture},px:{value:m.cellScale},dt:{value:m.dt}}},output:m.dst}),this.init()}update({vel:m,pressure:z}){this.uniforms.velocity.value=m.texture,this.uniforms.pressure.value=z.texture,super.update()}}class be{constructor(m){this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,...m},this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new le,this.cellScale=new le,this.boundarySpace=new le,this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?ki:Ci}createAllFBO(){const z={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:hn,magFilter:hn,wrapS:ni,wrapT:ni};for(let Z in this.fbos)this.fbos[Z]=new wi(this.fboSize.x,this.fboSize.y,z)}createShaderPass(){this.advection=new Gt({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new Zt({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new $t({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new Ye({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new ge({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new me({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const m=Math.max(1,Math.round(this.options.resolution*ot.width)),z=Math.max(1,Math.round(this.options.resolution*ot.height)),Z=1/m,ft=1/z;this.cellScale.set(Z,ft),this.fboSize.set(m,z)}resize(){this.calcSize();for(let m in this.fbos)this.fbos[m].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let m=this.fbos.vel_1;this.options.isViscous&&(m=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:m});const z=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:m,pressure:z})}}class ae{constructor(){this.init()}init(){this.simulation=new be,this.scene=new Q0,this.camera=new qc,this.output=new mi(new Us(2,2),new Ho({vertexShader:lt,fragmentShader:Y,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new le},palette:{value:G},bgColor:{value:Q}}})),this.scene.add(this.output)}addScene(m){this.scene.add(m)}resize(){this.simulation.resize()}render(){ot.renderer.setRenderTarget(null),ot.renderer.render(this.scene,this.camera)}update(){this.simulation.update(),this.render()}}class ke{constructor(m){this.props=m,ot.init(m.$wrapper),L.init(m.$wrapper),L.autoIntensity=m.autoIntensity,L.takeoverDuration=m.takeoverDuration,this.lastUserInteraction=performance.now(),L.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new F(L,this,{enabled:m.autoDemo,speed:m.autoSpeed,resumeDelay:m.autoResumeDelay,rampDuration:m.autoRampDuration}),this.init(),this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():T.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility),this.running=!1}init(){this.props.$wrapper.prepend(ot.renderer.domElement),this.output=new ae}resize(){ot.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),L.update(),ot.update(),this.output.update()}loop(){this.running&&(this.render(),H.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,H.current&&(cancelAnimationFrame(H.current),H.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),document.removeEventListener("visibilitychange",this._onVisibility),L.dispose(),ot.renderer){const m=ot.renderer.domElement;m&&m.parentNode&&m.parentNode.removeChild(m),ot.renderer.dispose()}}catch{}}}const V=P.current;V.style.position=V.style.position||"relative",V.style.overflow=V.style.overflow||"hidden";const Ve=new ke({$wrapper:V,autoDemo:E,autoSpeed:b,autoIntensity:C,takeoverDuration:M,autoResumeDelay:x,autoRampDuration:D});N.current=Ve,(()=>{if(!N.current)return;const w=N.current.output?.simulation;if(!w)return;const m=w.options.resolution;Object.assign(w.options,{mouse_force:o,cursor_size:e,isViscous:i,viscous:s,iterations_viscous:l,iterations_poisson:u,dt:h,BFECC:p,resolution:g,isBounce:d}),g!==m&&w.resize()})(),Ve.start();const Te=new IntersectionObserver(w=>{const m=w[0],z=m.isIntersecting&&m.intersectionRatio>0;T.current=z,N.current&&(z&&!document.hidden?N.current.start():N.current.pause())},{threshold:[0,.01,.1]});Te.observe(V),B.current=Te;const Xt=new ResizeObserver(()=>{N.current&&(U.current&&cancelAnimationFrame(U.current),U.current=requestAnimationFrame(()=>{N.current&&N.current.resize()}))});return Xt.observe(V),X.current=Xt,()=>{if(H.current&&cancelAnimationFrame(H.current),X.current)try{X.current.disconnect()}catch{}if(B.current)try{B.current.disconnect()}catch{}N.current&&N.current.dispose(),N.current=null}},[p,e,h,d,i,u,l,o,g,s,S,E,b,C,M,x,D]),Cn.useEffect(()=>{const ht=N.current;if(!ht)return;const G=ht.output?.simulation;if(!G)return;const Q=G.options.resolution;Object.assign(G.options,{mouse_force:o,cursor_size:e,isViscous:i,viscous:s,iterations_viscous:l,iterations_poisson:u,dt:h,BFECC:p,resolution:g,isBounce:d}),ht.autoDriver&&(ht.autoDriver.enabled=E,ht.autoDriver.speed=b,ht.autoDriver.resumeDelay=x,ht.autoDriver.rampDurationMs=D*1e3,ht.autoDriver.mouse&&(ht.autoDriver.mouse.autoIntensity=C,ht.autoDriver.mouse.takeoverDuration=M)),g!==Q&&G.resize()},[o,e,i,s,l,u,h,p,g,d,E,b,C,M,x,D]),Kt.jsx("div",{ref:P,className:`liquid-ether-container ${v||""}`,style:y})}const Nc=o=>new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR"}).format(o),G1=[];function V1(){const[o,e]=Cn.useState(G1),[i,s]=Cn.useState(""),[l,u]=Cn.useState(""),[h,p]=Cn.useState("income"),[g,d]=Cn.useState(""),[S,y]=Cn.useState(null),v=o.filter(x=>x.type==="income").reduce((x,D)=>x+D.amount,0),E=o.filter(x=>x.type==="expense").reduce((x,D)=>x+D.amount,0),b=v-E,C=()=>{if(!i.trim()){d("Please enter a description.");return}const x=parseFloat(l);if(!l||isNaN(x)||x<=0){d("Please enter a positive amount.");return}d("");const D={id:Date.now(),description:i.trim(),amount:x,type:h};e([D,...o]),s(""),u(""),y(D.id),setTimeout(()=>y(null),600)},M=x=>{e(o.filter(D=>D.id!==x))};return Kt.jsxs("div",{style:{fontFamily:"'DM Mono', 'Courier New', monospace",minHeight:"100vh",position:"relative",color:"#f0ece4",padding:"0"},children:[Kt.jsx("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:0},children:Kt.jsx(H1,{colors:["#c8f060","#BAFca2","#e0f79d"],mouseForce:20,cursorSize:100,isViscous:!0,viscous:30,iterationsViscous:32,iterationsPoisson:32,resolution:.5,isBounce:!1,autoDemo:!0,autoSpeed:.5,autoIntensity:2.2,takeoverDuration:.25,autoResumeDelay:3e3,autoRampDuration:.6,color0:"#c8f060",color1:"#BAFca2",color2:"#e0f79d"})}),Kt.jsxs("div",{style:{position:"relative",zIndex:1},children:[Kt.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Playfair+Display:wght@700;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #0d0d0d; }
        .ticker-tape {
          background: #c8f060;
          color: #0d0d0d;
          padding: 6px 0;
          overflow: hidden;
          white-space: nowrap;
          font-size: 11px;
          letter-spacing: 0.12em;
          font-weight: 500;
        }
        .ticker-inner {
          display: inline-block;
          animation: ticker 35s linear infinite;
        }
        @keyframes ticker {
          0% { transform: translateX(100vw); }
          100% { transform: translateX(-100%); }
        }
        .header {
          padding: 48px 40px 32px;
          border-bottom: 1px solid #222;
        }
        .header-eyebrow {
          font-size: 10px;
          letter-spacing: 0.25em;
          color: #666;
          margin-bottom: 8px;
          text-transform: uppercase;
        }
        .header-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(42px, 7vw, 80px);
          font-weight: 900;
          line-height: 0.95;
          color: #f0ece4;
          letter-spacing: -0.02em;
        }
        .header-title span {
          color: #c8f060;
        }
        .summary-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-bottom: 1px solid #222;
        }
        .summary-card {
          padding: 32px 40px;
          border-right: 1px solid #222;
          position: relative;
          overflow: hidden;
        }
        .summary-card:last-child { border-right: none; }
        .summary-label {
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #555;
          margin-bottom: 12px;
        }
        .summary-amount {
          font-family: 'Playfair Display', serif;
          font-size: clamp(24px, 3vw, 38px);
          font-weight: 700;
          line-height: 1;
        }
        .summary-card.balance .summary-amount { color: ${b>=0?"#c8f060":"#ff5f5f"}; }
        .summary-card.income .summary-amount { color: #c8f060; }
        .summary-card.expenses .summary-amount { color: #ff5f5f; }
        .summary-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          height: 2px;
          background: currentColor;
          opacity: 0.2;
          width: 100%;
        }
        .main-layout {
          display: grid;
          grid-template-columns: 380px 1fr;
          min-height: calc(100vh - 280px);
        }
        .form-panel {
          padding: 40px;
          border-right: 1px solid #222;
          position: sticky;
          top: 0;
          height: fit-content;
        }
        .form-title {
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #555;
          margin-bottom: 28px;
        }
        .form-group {
          margin-bottom: 20px;
        }
        .form-label {
          display: block;
          font-size: 10px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #555;
          margin-bottom: 8px;
        }
        .form-input, .form-select {
          width: 100%;
          background: #161616;
          border: 1px solid #2a2a2a;
          color: #f0ece4;
          padding: 14px 16px;
          font-family: 'DM Mono', monospace;
          font-size: 14px;
          outline: none;
          transition: border-color 0.2s;
          appearance: none;
        }
        .form-input:focus, .form-select:focus {
          border-color: #c8f060;
        }
        .form-input::placeholder { color: #3a3a3a; }
        .type-toggle {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          border: 1px solid #2a2a2a;
        }
        .type-btn {
          padding: 14px;
          background: #161616;
          border: none;
          cursor: pointer;
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #555;
          transition: all 0.2s;
        }
        .type-btn.active-income {
          background: #c8f060;
          color: #0d0d0d;
        }
        .type-btn.active-expense {
          background: #ff5f5f;
          color: #fff;
        }
        .add-btn {
          width: 100%;
          padding: 16px;
          background: #c8f060;
          color: #0d0d0d;
          border: none;
          cursor: pointer;
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          transition: all 0.2s;
          margin-top: 8px;
        }
        .add-btn:hover { background: #d4f57a; transform: translateY(-1px); }
        .add-btn:active { transform: translateY(0); }
        .error-msg {
          font-size: 11px;
          color: #ff5f5f;
          margin-top: 12px;
          letter-spacing: 0.05em;
        }
        .list-panel {
          padding: 40px;
        }
        .list-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid #1e1e1e;
        }
        .list-title {
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #555;
        }
        .list-count {
          font-size: 10px;
          color: #333;
          letter-spacing: 0.1em;
        }
        .tx-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 0;
          border-bottom: 1px solid #161616;
          transition: all 0.3s;
          animation: slideIn 0.4s ease;
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(-12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .tx-new {
          background: #161e07;
          padding: 18px 16px;
          margin: 0 -16px;
          border-radius: 2px;
        }
        .tx-left {
          display: flex;
          align-items: center;
          gap: 16px;
          flex: 1;
          min-width: 0;
        }
        .tx-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .tx-dot.income { background: #c8f060; }
        .tx-dot.expense { background: #ff5f5f; }
        .tx-desc {
          font-size: 14px;
          color: #d0ccc4;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .tx-right {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-shrink: 0;
        }
        .tx-amount {
          font-size: 15px;
          font-weight: 500;
          letter-spacing: 0.03em;
        }
        .tx-amount.income { color: #c8f060; }
        .tx-amount.expense { color: #ff5f5f; }
        .tx-delete {
          background: none;
          border: none;
          cursor: pointer;
          color: #888;
          font-size: 18px;
          line-height: 1;
          padding: 4px 8px;
          transition: all 0.2s;
          font-family: monospace;
          opacity: 0.7;
        }
        .tx-delete:hover { color: #ff5f5f; opacity: 1; }
        .empty-state {
          text-align: center;
          padding: 80px 0;
          color: #2a2a2a;
        }
        .empty-icon {
          font-size: 48px;
          margin-bottom: 16px;
          opacity: 0.4;
        }
        .empty-text {
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }
        @media (max-width: 768px) {
          .summary-grid { grid-template-columns: 1fr; }
          .summary-card { border-right: none; border-bottom: 1px solid #222; }
          .main-layout { grid-template-columns: 1fr; }
          .form-panel { border-right: none; border-bottom: 1px solid #222; position: relative; }
          .header { padding: 32px 24px 24px; }
          .form-panel, .list-panel { padding: 28px 24px; }
          .summary-card { padding: 24px; }
        }
      `}),Kt.jsx("div",{className:"ticker-tape",children:Kt.jsx("span",{className:"ticker-inner",children:"   EXPENSE TRACKER ▸ TRACK YOUR MONEY ▸ INCOME & EXPENSES ▸ STAY IN CONTROL ▸ FINANCIAL CLARITY ▸ EXPENSE TRACKER ▸ TRACK YOUR MONEY ▸ INCOME & EXPENSES ▸ "})}),Kt.jsxs("div",{className:"header",children:[Kt.jsx("p",{className:"header-eyebrow",children:"Personal Finance"}),Kt.jsxs("h1",{className:"header-title",children:["Expense",Kt.jsx("br",{}),Kt.jsx("span",{children:"Tracker."})]})]}),Kt.jsxs("div",{className:"summary-grid",children:[Kt.jsxs("div",{className:"summary-card balance",children:[Kt.jsx("p",{className:"summary-label",children:"Net Balance"}),Kt.jsx("p",{className:"summary-amount",children:Nc(b)})]}),Kt.jsxs("div",{className:"summary-card income",children:[Kt.jsx("p",{className:"summary-label",children:"Total Income"}),Kt.jsx("p",{className:"summary-amount",children:Nc(v)})]}),Kt.jsxs("div",{className:"summary-card expenses",children:[Kt.jsx("p",{className:"summary-label",children:"Total Expenses"}),Kt.jsx("p",{className:"summary-amount",children:Nc(E)})]})]}),Kt.jsxs("div",{className:"main-layout",children:[Kt.jsxs("div",{className:"form-panel",children:[Kt.jsx("p",{className:"form-title",children:" New Transaction"}),Kt.jsxs("div",{className:"form-group",children:[Kt.jsx("label",{className:"form-label",children:"Type"}),Kt.jsxs("div",{className:"type-toggle",children:[Kt.jsx("button",{className:`type-btn ${h==="income"?"active-income":""}`,onClick:()=>p("income"),children:"+ Income"}),Kt.jsx("button",{className:`type-btn ${h==="expense"?"active-expense":""}`,onClick:()=>p("expense"),children:"− Expense"})]})]}),Kt.jsxs("div",{className:"form-group",children:[Kt.jsx("label",{className:"form-label",children:"Description"}),Kt.jsx("input",{className:"form-input",placeholder:"e.g. Monthly Salary",value:i,onChange:x=>s(x.target.value),onKeyDown:x=>x.key==="Enter"&&C()})]}),Kt.jsxs("div",{className:"form-group",children:[Kt.jsx("label",{className:"form-label",children:"Amount (₹)"}),Kt.jsx("input",{className:"form-input",type:"number",min:"0.01",step:"0.01",placeholder:"0.00",value:l,onChange:x=>u(x.target.value),onKeyDown:x=>x.key==="Enter"&&C()})]}),Kt.jsx("button",{className:"add-btn",onClick:C,children:"Add Transaction →"}),g&&Kt.jsxs("p",{className:"error-msg",children:["⚠ ",g]})]}),Kt.jsxs("div",{className:"list-panel",children:[Kt.jsxs("div",{className:"list-header",children:[Kt.jsx("p",{className:"list-title",children:" Transactions"}),Kt.jsxs("p",{className:"list-count",children:[o.length," records"]})]}),o.length===0?Kt.jsxs("div",{className:"empty-state",children:[Kt.jsx("div",{className:"empty-icon",children:"◎"}),Kt.jsx("p",{className:"empty-text",children:"No transactions yet"})]}):o.map(x=>Kt.jsxs("div",{className:`tx-item ${S===x.id?"tx-new":""}`,children:[Kt.jsxs("div",{className:"tx-left",children:[Kt.jsx("div",{className:`tx-dot ${x.type}`}),Kt.jsx("span",{className:"tx-desc",children:x.description})]}),Kt.jsxs("div",{className:"tx-right",children:[Kt.jsxs("span",{className:`tx-amount ${x.type}`,children:[x.type==="income"?"+":"−",Nc(x.amount)]}),Kt.jsx("button",{className:"tx-delete",onClick:()=>M(x.id),title:"Delete",children:"×"})]})]},x.id))]})]})]})]})}function X1(){return Kt.jsx(V1,{})}RS.createRoot(document.getElementById("root")).render(Kt.jsx(Cn.StrictMode,{children:Kt.jsx(X1,{})}));
