(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Q,u,He,B,fe,Ae,re,Oe,D={},ze=[],Ze=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,J=Array.isArray;function A(e,t){for(var n in t)e[n]=t[n];return e}function Be(e){var t=e.parentNode;t&&t.removeChild(e)}function _e(e,t,n){var r,i,o,s={};for(o in t)o=="key"?r=t[o]:o=="ref"?i=t[o]:s[o]=t[o];if(arguments.length>2&&(s.children=arguments.length>3?Q.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)s[o]===void 0&&(s[o]=e.defaultProps[o]);return q(e,s,r,i,null)}function q(e,t,n,r,i){var o={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i??++He};return i==null&&u.vnode!=null&&u.vnode(o),o}function M(e){return e.children}function H(e,t){this.props=e,this.context=t}function R(e,t){if(t==null)return e.__?R(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?R(e):null}function Me(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Me(e)}}function ie(e){(!e.__d&&(e.__d=!0)&&B.push(e)&&!K.__r++||fe!==u.debounceRendering)&&((fe=u.debounceRendering)||Ae)(K)}function K(){var e,t,n,r,i,o,s,l,c;for(B.sort(re);e=B.shift();)e.__d&&(t=B.length,r=void 0,i=void 0,o=void 0,l=(s=(n=e).__v).__e,(c=n.__P)&&(r=[],i=[],(o=A({},s)).__v=s.__v+1,ce(c,s,o,n.__n,c.ownerSVGElement!==void 0,s.__h!=null?[l]:null,r,l??R(s),s.__h,i),We(r,s,i),s.__e!=l&&Me(s)),B.length>t&&B.sort(re));K.__r=0}function Ue(e,t,n,r,i,o,s,l,c,y,v){var _,d,f,a,h,S,k,x,T,b=0,m=r&&r.__k||ze,w=m.length,g=w,C=t.length;for(n.__k=[],_=0;_<C;_++)(a=n.__k[_]=(a=t[_])==null||typeof a=="boolean"||typeof a=="function"?null:typeof a=="string"||typeof a=="number"||typeof a=="bigint"?q(null,a,null,null,a):J(a)?q(M,{children:a},null,null,null):a.__b>0?q(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):a)!=null?(a.__=n,a.__b=n.__b+1,(x=Qe(a,m,k=_+b,g))===-1?f=D:(f=m[x]||D,m[x]=void 0,g--),ce(e,a,f,i,o,s,l,c,y,v),h=a.__e,(d=a.ref)&&f.ref!=d&&(f.ref&&ae(f.ref,null,a),v.push(d,a.__c||h,a)),h!=null&&(S==null&&(S=h),(T=f===D||f.__v===null)?x==-1&&b--:x!==k&&(x===k+1?b++:x>k?g>C-k?b+=x-k:b--:b=x<k&&x==k-1?x-k:0),k=_+b,typeof a.type!="function"||x===k&&f.__k!==a.__k?typeof a.type=="function"||x===k&&!T?a.__d!==void 0?(c=a.__d,a.__d=void 0):c=h.nextSibling:c=Fe(e,h,c):c=De(a,c,e),typeof n.type=="function"&&(n.__d=c))):(f=m[_])&&f.key==null&&f.__e&&(f.__e==c&&(c=R(f)),se(f,f,!1),m[_]=null);for(n.__e=S,_=w;_--;)m[_]!=null&&(typeof n.type=="function"&&m[_].__e!=null&&m[_].__e==n.__d&&(n.__d=m[_].__e.nextSibling),se(m[_],m[_]))}function De(e,t,n){for(var r,i=e.__k,o=0;i&&o<i.length;o++)(r=i[o])&&(r.__=e,t=typeof r.type=="function"?De(r,t,n):Fe(n,r.__e,t));return t}function X(e,t){return t=t||[],e==null||typeof e=="boolean"||(J(e)?e.some(function(n){X(n,t)}):t.push(e)),t}function Fe(e,t,n){return n==null||n.parentNode!==e?e.insertBefore(t,null):t==n&&t.parentNode!=null||e.insertBefore(t,n),t.nextSibling}function Qe(e,t,n,r){var i=e.key,o=e.type,s=n-1,l=n+1,c=t[n];if(c===null||c&&i==c.key&&o===c.type)return n;if(r>(c!=null?1:0))for(;s>=0||l<t.length;){if(s>=0){if((c=t[s])&&i==c.key&&o===c.type)return s;s--}if(l<t.length){if((c=t[l])&&i==c.key&&o===c.type)return l;l++}}return-1}function Je(e,t,n,r,i){var o;for(o in n)o==="children"||o==="key"||o in t||Y(e,o,null,n[o],r);for(o in t)i&&typeof t[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||n[o]===t[o]||Y(e,o,t[o],n[o],r)}function pe(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Ze.test(t)?n:n+"px"}function Y(e,t,n,r,i){var o;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||pe(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||pe(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/(PointerCapture)$|Capture$/,"$1")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?r||e.addEventListener(t,o?he:de,o):e.removeEventListener(t,o?he:de,o);else if(t!=="dangerouslySetInnerHTML"){if(i)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t!=="rowSpan"&&t!=="colSpan"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,n))}}function de(e){return this.l[e.type+!1](u.event?u.event(e):e)}function he(e){return this.l[e.type+!0](u.event?u.event(e):e)}function ce(e,t,n,r,i,o,s,l,c,y){var v,_,d,f,a,h,S,k,x,T,b,m,w,g,C,P=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(c=n.__h,l=t.__e=n.__e,t.__h=null,o=[l]),(v=u.__b)&&v(t);e:if(typeof P=="function")try{if(k=t.props,x=(v=P.contextType)&&r[v.__c],T=v?x?x.props.value:v.__:r,n.__c?S=(_=t.__c=n.__c).__=_.__E:("prototype"in P&&P.prototype.render?t.__c=_=new P(k,T):(t.__c=_=new H(k,T),_.constructor=P,_.render=tt),x&&x.sub(_),_.props=k,_.state||(_.state={}),_.context=T,_.__n=r,d=_.__d=!0,_.__h=[],_._sb=[]),_.__s==null&&(_.__s=_.state),P.getDerivedStateFromProps!=null&&(_.__s==_.state&&(_.__s=A({},_.__s)),A(_.__s,P.getDerivedStateFromProps(k,_.__s))),f=_.props,a=_.state,_.__v=t,d)P.getDerivedStateFromProps==null&&_.componentWillMount!=null&&_.componentWillMount(),_.componentDidMount!=null&&_.__h.push(_.componentDidMount);else{if(P.getDerivedStateFromProps==null&&k!==f&&_.componentWillReceiveProps!=null&&_.componentWillReceiveProps(k,T),!_.__e&&(_.shouldComponentUpdate!=null&&_.shouldComponentUpdate(k,_.__s,T)===!1||t.__v===n.__v)){for(t.__v!==n.__v&&(_.props=k,_.state=_.__s,_.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(L){L&&(L.__=t)}),b=0;b<_._sb.length;b++)_.__h.push(_._sb[b]);_._sb=[],_.__h.length&&s.push(_);break e}_.componentWillUpdate!=null&&_.componentWillUpdate(k,_.__s,T),_.componentDidUpdate!=null&&_.__h.push(function(){_.componentDidUpdate(f,a,h)})}if(_.context=T,_.props=k,_.__P=e,_.__e=!1,m=u.__r,w=0,"prototype"in P&&P.prototype.render){for(_.state=_.__s,_.__d=!1,m&&m(t),v=_.render(_.props,_.state,_.context),g=0;g<_._sb.length;g++)_.__h.push(_._sb[g]);_._sb=[]}else do _.__d=!1,m&&m(t),v=_.render(_.props,_.state,_.context),_.state=_.__s;while(_.__d&&++w<25);_.state=_.__s,_.getChildContext!=null&&(r=A(A({},r),_.getChildContext())),d||_.getSnapshotBeforeUpdate==null||(h=_.getSnapshotBeforeUpdate(f,a)),Ue(e,J(C=v!=null&&v.type===M&&v.key==null?v.props.children:v)?C:[C],t,n,r,i,o,s,l,c,y),_.base=t.__e,t.__h=null,_.__h.length&&s.push(_),S&&(_.__E=_.__=null)}catch(L){t.__v=null,(c||o!=null)&&(t.__e=l,t.__h=!!c,o[o.indexOf(l)]=null),u.__e(L,t,n)}else o==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=et(n.__e,t,n,r,i,o,s,c,y);(v=u.diffed)&&v(t)}function We(e,t,n){for(var r=0;r<n.length;r++)ae(n[r],n[++r],n[++r]);u.__c&&u.__c(t,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(o){o.call(i)})}catch(o){u.__e(o,i.__v)}})}function et(e,t,n,r,i,o,s,l,c){var y,v,_,d=n.props,f=t.props,a=t.type,h=0;if(a==="svg"&&(i=!0),o!=null){for(;h<o.length;h++)if((y=o[h])&&"setAttribute"in y==!!a&&(a?y.localName===a:y.nodeType===3)){e=y,o[h]=null;break}}if(e==null){if(a===null)return document.createTextNode(f);e=i?document.createElementNS("http://www.w3.org/2000/svg",a):document.createElement(a,f.is&&f),o=null,l=!1}if(a===null)d===f||l&&e.data===f||(e.data=f);else{if(o=o&&Q.call(e.childNodes),v=(d=n.props||D).dangerouslySetInnerHTML,_=f.dangerouslySetInnerHTML,!l){if(o!=null)for(d={},h=0;h<e.attributes.length;h++)d[e.attributes[h].name]=e.attributes[h].value;(_||v)&&(_&&(v&&_.__html==v.__html||_.__html===e.innerHTML)||(e.innerHTML=_&&_.__html||""))}if(Je(e,f,d,i,l),_)t.__k=[];else if(Ue(e,J(h=t.props.children)?h:[h],t,n,r,i&&a!=="foreignObject",o,s,o?o[0]:n.__k&&R(n,0),l,c),o!=null)for(h=o.length;h--;)o[h]!=null&&Be(o[h]);l||("value"in f&&(h=f.value)!==void 0&&(h!==e.value||a==="progress"&&!h||a==="option"&&h!==d.value)&&Y(e,"value",h,d.value,!1),"checked"in f&&(h=f.checked)!==void 0&&h!==e.checked&&Y(e,"checked",h,d.checked,!1))}return e}function ae(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){u.__e(r,n)}}function se(e,t,n){var r,i;if(u.unmount&&u.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||ae(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){u.__e(o,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&se(r[i],t,n||typeof e.type!="function");n||e.__e==null||Be(e.__e),e.__=e.__e=e.__d=void 0}function tt(e,t,n){return this.constructor(e,n)}function nt(e,t,n){var r,i,o,s;u.__&&u.__(e,t),i=(r=typeof n=="function")?null:n&&n.__k||t.__k,o=[],s=[],ce(t,e=(!r&&n||t).__k=_e(M,null,[e]),i||D,D,t.ownerSVGElement!==void 0,!r&&n?[n]:i?null:t.firstChild?Q.call(t.childNodes):null,o,!r&&n?n:i?i.__e:t.firstChild,r,s),We(o,e,s)}function ot(e,t){var n={__c:t="__cC"+Oe++,__:e,Consumer:function(r,i){return r.children(i)},Provider:function(r){var i,o;return this.getChildContext||(i=[],(o={})[t]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(s){this.props.value!==s.value&&i.some(function(l){l.__e=!0,ie(l)})},this.sub=function(s){i.push(s);var l=s.componentWillUnmount;s.componentWillUnmount=function(){i.splice(i.indexOf(s),1),l&&l.call(s)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}Q=ze.slice,u={__e:function(e,t,n,r){for(var i,o,s;t=t.__;)if((i=t.__c)&&!i.__)try{if((o=i.constructor)&&o.getDerivedStateFromError!=null&&(i.setState(o.getDerivedStateFromError(e)),s=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),s=i.__d),s)return i.__E=i}catch(l){e=l}throw e}},He=0,H.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=A({},this.state),typeof e=="function"&&(e=e(A({},n),this.props)),e&&A(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),ie(this))},H.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),ie(this))},H.prototype.render=M,B=[],Ae=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,re=function(e,t){return e.__v.__b-t.__v.__b},K.__r=0,Oe=0;var F,N,ne,ve,Z=0,Re=[],j=[],me=u.__b,ye=u.__r,ge=u.diffed,be=u.__c,ke=u.unmount;function ee(e,t){u.__h&&u.__h(N,e,Z||t),Z=0;var n=N.__H||(N.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:j}),n.__[e]}function $(e){return Z=1,rt(qe,e)}function rt(e,t,n){var r=ee(F++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):qe(void 0,t),function(l){var c=r.__N?r.__N[0]:r.__[0],y=r.t(c,l);c!==y&&(r.__N=[y,r.__[1]],r.__c.setState({}))}],r.__c=N,!N.u)){var i=function(l,c,y){if(!r.__c.__H)return!0;var v=r.__c.__H.__.filter(function(d){return d.__c});if(v.every(function(d){return!d.__N}))return!o||o.call(this,l,c,y);var _=!1;return v.forEach(function(d){if(d.__N){var f=d.__[0];d.__=d.__N,d.__N=void 0,f!==d.__[0]&&(_=!0)}}),!(!_&&r.__c.props===l)&&(!o||o.call(this,l,c,y))};N.u=!0;var o=N.shouldComponentUpdate,s=N.componentWillUpdate;N.componentWillUpdate=function(l,c,y){if(this.__e){var v=o;o=void 0,i(l,c,y),o=v}s&&s.call(this,l,c,y)},N.shouldComponentUpdate=i}return r.__N||r.__}function W(e,t){var n=ee(F++,3);!u.__s&&Ve(n.__H,t)&&(n.__=e,n.i=t,N.__H.__h.push(n))}function _t(e){return Z=5,it(function(){return{current:e}},[])}function it(e,t){var n=ee(F++,7);return Ve(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function ue(e){var t=N.context[e.__c],n=ee(F++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(N)),t.props.value):e.__}function st(){for(var e;e=Re.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(G),e.__H.__h.forEach(le),e.__H.__h=[]}catch(t){e.__H.__h=[],u.__e(t,e.__v)}}u.__b=function(e){N=null,me&&me(e)},u.__r=function(e){ye&&ye(e),F=0;var t=(N=e.__c).__H;t&&(ne===N?(t.__h=[],N.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=j,n.__N=n.i=void 0})):(t.__h.forEach(G),t.__h.forEach(le),t.__h=[],F=0)),ne=N},u.diffed=function(e){ge&&ge(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Re.push(t)!==1&&ve===u.requestAnimationFrame||((ve=u.requestAnimationFrame)||lt)(st)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==j&&(n.__=n.__V),n.i=void 0,n.__V=j})),ne=N=null},u.__c=function(e,t){t.some(function(n){try{n.__h.forEach(G),n.__h=n.__h.filter(function(r){return!r.__||le(r)})}catch(r){t.some(function(i){i.__h&&(i.__h=[])}),t=[],u.__e(r,n.__v)}}),be&&be(e,t)},u.unmount=function(e){ke&&ke(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{G(r)}catch(i){t=i}}),n.__H=void 0,t&&u.__e(t,n.__v))};var xe=typeof requestAnimationFrame=="function";function lt(e){var t,n=function(){clearTimeout(r),xe&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);xe&&(t=requestAnimationFrame(n))}function G(e){var t=N,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),N=t}function le(e){var t=N;e.__c=e.__(),N=t}function Ve(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function qe(e,t){return typeof t=="function"?t(e):t}const ct="_filterWidget_1xal0_1",at="_filterCategory_1xal0_13",ut="_active_1xal0_20",ft="_fcList_1xal0_20",pt="_fcHeader_1xal0_28",dt="_fcName_1xal0_39",ht="_fcToggle_1xal0_40",vt="_fcListItem_1xal0_52",mt="_activeTerm_1xal0_64",yt="_fcTerm_1xal0_67",gt="_fcInfoIcon_1xal0_72",bt="_resetFilters_1xal0_1",kt="_scrollbar_1xal0_98",I={filterWidget:ct,filterCategory:at,active:ut,fcList:ft,fcHeader:pt,fcName:dt,fcToggle:ht,fcListItem:vt,activeTerm:mt,fcTerm:yt,fcInfoIcon:gt,resetFilters:bt,scrollbar:kt},xt="_tooltip_1pwp8_1",Ce={tooltip:xt};var Ct=0;function p(e,t,n,r,i,o){var s,l,c={};for(l in t)l=="ref"?s=t[l]:c[l]=t[l];var y={type:e,props:c,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Ct,__source:i,__self:o};if(typeof e=="function"&&(s=e.defaultProps))for(l in s)c[l]===void 0&&(c[l]=s[l]);return u.vnode&&u.vnode(y),y}function Pt({description:e,style:t}){return p("div",{className:Ce.tooltip,style:t,children:p("div",{className:Ce.tooltipContent,children:e})})}const te=ot(),Nt=({children:e})=>{const[t,n]=$(null),[r,i]=$(!1),[o,s]=$([]),l=c=>{var y=new DOMParser().parseFromString(c,"text/html");return y.body.textContent};return p(te.Provider,{value:{activeProvider:t,setActiveProvider:n,isInfoBoxOpen:r,setIsInfoBoxOpen:i,clickedTerms:o,setClickedTerms:s,decodeHTMLEntitites:l},children:e})},wt=({filterCategoryData:e})=>{if(!e)return null;const{clickedTerms:t,setClickedTerms:n}=ue(te),[r,i]=$({0:!0}),[o,s]=$({show:!1,content:"",x:0,y:0}),l=_=>{i({...r,[_]:!r[_]})},c=(_,d)=>{d.clientX,d.clientY;const f=d.target.parentNode,{width:a,height:h,top:S,left:k}=f.getBoundingClientRect(),x=k+a+20,T=S+h/2-20;s({show:!0,content:_,x,y:T})},y=()=>{console.log("hidden"),s({show:!1})},v=_=>{const d=t.some(f=>f.parent===_.parent&&f.child===_.child);n(d?t.filter(f=>!(f.parent===_.parent&&f.child===_.child)):[...t,_])};return p("div",{id:I.filterWidget,children:[p("h2",{children:"Explore the Tercera 30"}),o.show&&p(Pt,{description:o.content,style:{position:"absolute",left:`${o.x}px`,top:`${o.y}px`}}),e.map((_,d)=>{var f;return p("div",{className:I.filterCategory+" "+(r[d]?I.active:""),children:[p("div",{className:I.fcHeader,onClick:()=>l(d),children:[p("div",{className:I.fcName,children:_==null?void 0:_.name}),p("span",{className:I.fcToggle,children:r[d]?"-":"+"})]}),p("div",{className:I.fcList+" "+I.scrollbar,children:(f=_==null?void 0:_.terms)==null?void 0:f.map(a=>{const h=t.some(S=>S.parent===_.name&&S.child===a.name);return p("div",{className:I.fcListItem+" "+(h?I.activeTerm:""),onClick:()=>v({parent:_.name,child:a.name}),children:[p("label",{children:a.name}),p("div",{className:I.fcInfoIcon,onMouseEnter:S=>{_.name.includes("Tercera 30")&&c(a.description,S)},onMouseLeave:y})]})})})]})}),p("div",{id:I.resetFilters,class:t.length>0?I.active:"",onClick:()=>n([]),children:"Reset Filters"})]})};function St(e,t){for(var n in t)e[n]=t[n];return e}function Pe(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var r in t)if(r!=="__source"&&e[r]!==t[r])return!0;return!1}function Ne(e){this.props=e}(Ne.prototype=new H).isPureReactComponent=!0,Ne.prototype.shouldComponentUpdate=function(e,t){return Pe(this.props,e)||Pe(this.state,t)};var we=u.__b;u.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),we&&we(e)};var Tt=u.__e;u.__e=function(e,t,n,r){if(e.then){for(var i,o=t;o=o.__;)if((i=o.__c)&&i.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),i.__c(e,t)}Tt(e,t,n,r)};var Se=u.unmount;function je(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c()}),e.__c.__H=null),(e=St({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map(function(r){return je(r,t,n)})),e}function Ge(e,t,n){return e&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(r){return Ge(r,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.insertBefore(e.__e,e.__d),e.__c.__e=!0,e.__c.__P=n)),e}function oe(){this.__u=0,this.t=null,this.__b=null}function Ke(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function V(){this.u=null,this.o=null}u.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),Se&&Se(e)},(oe.prototype=new H).__c=function(e,t){var n=t.__c,r=this;r.t==null&&(r.t=[]),r.t.push(n);var i=Ke(r.__v),o=!1,s=function(){o||(o=!0,n.__R=null,i?i(l):l())};n.__R=s;var l=function(){if(!--r.__u){if(r.state.__a){var y=r.state.__a;r.__v.__k[0]=Ge(y,y.__c.__P,y.__c.__O)}var v;for(r.setState({__a:r.__b=null});v=r.t.pop();)v.forceUpdate()}},c=t.__h===!0;r.__u++||c||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(s,s)},oe.prototype.componentWillUnmount=function(){this.t=[]},oe.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=je(this.__b,n,r.__O=r.__P)}this.__b=null}var i=t.__a&&_e(M,null,e.fallback);return i&&(i.__h=null),[_e(M,null,t.__a?null:e.children),i]};var Te=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};(V.prototype=new H).__a=function(e){var t=this,n=Ke(t.__v),r=t.o.get(e);return r[0]++,function(i){var o=function(){t.props.revealOrder?(r.push(i),Te(t,e,r)):i()};n?n(o):o()}},V.prototype.render=function(e){this.u=null,this.o=new Map;var t=X(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},V.prototype.componentDidUpdate=V.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){Te(e,n,t)})};var It=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,$t=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Et=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Lt=/[A-Z0-9]/g,Ht=typeof document<"u",At=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};H.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(H.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var Ie=u.event;function Ot(){}function zt(){return this.cancelBubble}function Bt(){return this.defaultPrevented}u.event=function(e){return Ie&&(e=Ie(e)),e.persist=Ot,e.isPropagationStopped=zt,e.isDefaultPrevented=Bt,e.nativeEvent=e};var Mt={enumerable:!1,configurable:!0,get:function(){return this.class}},$e=u.vnode;u.vnode=function(e){typeof e.type=="string"&&function(t){var n=t.props,r=t.type,i={};for(var o in n){var s=n[o];if(!(o==="value"&&"defaultValue"in n&&s==null||Ht&&o==="children"&&r==="noscript"||o==="class"||o==="className")){var l=o.toLowerCase();o==="defaultValue"&&"value"in n&&n.value==null?o="value":o==="download"&&s===!0?s="":l==="ondoubleclick"?o="ondblclick":l!=="onchange"||r!=="input"&&r!=="textarea"||At(n.type)?l==="onfocus"?o="onfocusin":l==="onblur"?o="onfocusout":Et.test(o)?o=l:r.indexOf("-")===-1&&$t.test(o)?o=o.replace(Lt,"-$&").toLowerCase():s===null&&(s=void 0):l=o="oninput",l==="oninput"&&i[o=l]&&(o="oninputCapture"),i[o]=s}}r=="select"&&i.multiple&&Array.isArray(i.value)&&(i.value=X(n.children).forEach(function(c){c.props.selected=i.value.indexOf(c.props.value)!=-1})),r=="select"&&i.defaultValue!=null&&(i.value=X(n.children).forEach(function(c){c.props.selected=i.multiple?i.defaultValue.indexOf(c.props.value)!=-1:i.defaultValue==c.props.value})),n.class&&!n.className?(i.class=n.class,Object.defineProperty(i,"className",Mt)):(n.className&&!n.class||n.class&&n.className)&&(i.class=i.className=n.className),t.props=i}(e),e.$$typeof=It,$e&&$e(e)};var Ee=u.__r;u.__r=function(e){Ee&&Ee(e),e.__c};var Le=u.diffed;u.diffed=function(e){Le&&Le(e);var t=e.props,n=e.__e;n!=null&&e.type==="textarea"&&"value"in t&&t.value!==n.value&&(n.value=t.value==null?"":t.value)};const Ut="_infoBoxOverlay_k16sn_1",Dt="_infoBoxInner_k16sn_13",Ft="_infoBoxImage_k16sn_30",Wt="_infoBoxClose_k16sn_41",Rt="_publicOrPrivate_k16sn_66",Vt="_partnerSiteLink_k16sn_73",U={infoBoxOverlay:Ut,infoBoxInner:Dt,infoBoxImage:Ft,infoBoxClose:Wt,publicOrPrivate:Rt,partnerSiteLink:Vt};function qt(){const{isInfoBoxOpen:e,setIsInfoBoxOpen:t,activeProvider:n,setActiveProvider:r,decodeHTMLEntitites:i}=ue(te),[o,s]=$(!1),l=()=>{t(!1),setTimeout(()=>{r(null)},330)},{imgSrc:c,tickerType:y,partnerSiteLabel:v,partnerEcoSystemMaturity:_,servicesIntensity:d,marketCategory:f,tercera30Category:a,partnerSiteLink:h}=n||{},S=()=>{s(!0)},k={opacity:o&&e?1:0,pointerEvents:o&&e?"auto":"none",transition:"opacity 0.33s ease-in-out"},x=g=>{if(!g)return null;const C=g.split(",");return C.length>1?C.map(P=>i(P)).join(", "):i(g)},[T,b,m,w]=[a,f,d,_].map(x);return p("div",{className:U.infoBoxOverlay,style:k,children:p("div",{className:U.infoBoxInner,children:[p("div",{className:U.infoBoxClose,onClick:l,children:"✕"}),p("div",{className:U.infoBoxImage,children:p("img",{src:c,alt:v,onLoad:S})}),p("p",{class:U.publicOrPrivate,children:y??"Not yet supplied"}),p("p",{children:[p("strong",{children:"Tercera 30 category:"})," ",p("span",{children:T??"Not yet supplied"})]}),p("p",{children:[p("strong",{children:"Market Segment:"})," ",p("span",{children:b??"Not yet supplied"})]}),p("p",{children:[p("strong",{children:"Services Intensity:"})," ",p("span",{children:m??"Not yet supplied"})]}),p("p",{children:[p("strong",{children:"Partner Ecosystem Maturity:"})," ",p("span",{children:w??"Not yet supplied"})]}),h?p("p",{children:p("a",{class:U.partnerSiteLink,href:h,target:"_blank",children:v||"Partner Site"})}):null]})})}const jt="_puzzle_1ufm7_9",Gt="_puzzleInner_1ufm7_9",Kt="_hidden_1ufm7_23",Xt="_vignette_1ufm7_30",Yt="_shadow_1ufm7_50",Zt="_reset_1ufm7_62",E={puzzle:jt,puzzleInner:Gt,hidden:Kt,vignette:Xt,shadow:Yt,reset:Zt,"path-animation":"_path-animation_1ufm7_1"},Qt=""+new URL("puzzle-60b05ba2.svg",import.meta.url).href,Jt=({providers:e,filterCategoryData:t})=>{const{activeProvider:n,setActiveProvider:r,setIsInfoBoxOpen:i,clickedTerms:o,decodeHTMLEntitites:s}=ue(te),[l,c]=$(!1),[y,v]=$(!1),[_,d]=$(!1),[f,a]=$(null),h=_t(null);W(()=>{(async()=>{d(!0);let w=await(await fetch(Qt)).text(),P=new DOMParser().parseFromString(w,"image/svg+xml").getElementsByTagName("svg");P.length&&(P=P[0],a(P.outerHTML)),d(!1)})()},[]),W(()=>{n&&console.log("activeProvider",n)},[n]);const S=b=>{console.log("clicked");const m=b.target;if(m.tagName==="path"){const w=m.getAttribute("data-pid"),g=e.find(C=>C.id===w);console.log(g),g&&(r(g),i(!0))}},k=t.map(b=>b.keyName),x=k.map(b=>"data-"+b);console.log("possibleAttributeNames",x),W(()=>{const b=document.querySelectorAll("#"+E.puzzle+" path");if(b.forEach(m=>{const w=m.getAttribute("data-pid"),g=e.find(C=>C.id===w);g&&k.forEach(C=>{g.hasOwnProperty(C)&&(console.log(g.title+" has "+C),console.log('with a value of "'+s(g[C])+'"'),m.setAttribute("data-"+C,s(g[C])))})}),b){const m=Array.from(b).map(g=>g.dataset.pid).filter(Boolean);console.log("usedPaths",m);const w=e.filter(g=>!m.includes(g.id)).map(g=>g==null?void 0:g.title);console.log("filteredProviders",w),setUnusedProviders(w)}},[f,e,t]),W(()=>{const b=document.querySelectorAll("#"+E.puzzle+" path");o.length>0?(console.log("HAS "),b.forEach(m=>{const w=m.getAttribute("data-pid");e.find(C=>C.id===w)&&(x.some(P=>{const L=m.getAttribute(P);if(L){const O=L.split(",").map(z=>s(z.trim()));return o.some(z=>O.includes(z.child))}})?m.classList.remove(E.hidden):m.classList.add(E.hidden))})):b.forEach(m=>{m.classList.remove(E.hidden)})},[o]);const T=b=>{if(b.target.tagName==="path"){const O=b.target,z=O.parentElement,Xe=z.lastElementChild===O,Ye=O.getAttribute("data-pid");!Xe&&Ye&&(z.removeChild(O),z.appendChild(O)),c(!0)}else c(!1);const{clientX:m,clientY:w}=b,{left:g,top:C,right:P,bottom:L}=h.current.getBoundingClientRect();m>=g&&m<=P&&w>=C&&w<=L?v(!0):v(!1)};return p("div",{id:E.puzzle,children:_?p("div",{children:"Loading..."}):p(M,{children:[p("div",{onMouseMove:T,ref:h,class:E.puzzleInner+" "+(l?E.vignette:"")+" "+(y?"":E.reset),onClick:S,dangerouslySetInnerHTML:{__html:f}}),p("div",{class:E.shadow+" "+(y?"":E.reset)})]})})},en=()=>{const[e,t]=$([]),[n,r]=$([]),i={method:"GET",cache:"no-cache",headers:{Accept:"application/json","Content-Type":"application/json"}};return W(()=>{const o=async()=>{const c=await(await fetch("https://tercera.io/wp-json/providers/v1/all?q="+Math.random()*1e4,i)).json();t(c)},s=async()=>{const c=await(await fetch("https://tercera.io/wp-json/providers/v1/terms?q"+Math.random()*1e4,i)).json(),v=["tercera30Category","marketCategory","servicesIntensity","partnerEcosystemMaturity"].map(_=>c.find(d=>d.keyName===_));r(v)};o(),s()},[]),e?p("div",{id:"puzzle-app",children:p(Nt,{children:[p(qt,{}),p(wt,{filterCategoryData:n}),p(Jt,{providers:e,filterCategoryData:n})]})}):null};nt(p(en,{}),document.getElementById("app"));
