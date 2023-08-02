import{__spreadArray as e,__assign as t}from"tslib";import n,{useMemo as r,useContext as o,createElement as i}from"react";import"shallowequal";import*as s from"stylis";import a from"@emotion/unitless";import c from"css-to-react-native";import{parse as u}from"postcss";var l=Object.freeze([]),p=Object.freeze({}),h="production"!==process.env.NODE_ENV?{1:"Cannot create styled-component for component: %s.\n\n",2:"Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",3:"Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",4:"The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",5:"The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",6:"Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",7:'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',8:'ThemeProvider: Please make your "theme" prop an object.\n\n',9:"Missing document `<head>`\n\n",10:"Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",11:"_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",12:"It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",13:"%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",14:'ThemeProvider: "theme" prop is required.\n\n',15:"A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",16:"Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",17:"CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n",18:"ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`"}:{};function f(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n=e[0],r=[],o=1,i=e.length;o<i;o+=1)r.push(e[o]);return r.forEach(function(e){n=n.replace(/%[a-z]/,e)}),n}function d(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];return"production"===process.env.NODE_ENV?new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(n.length>0?" Args: ".concat(n.join(", ")):"")):new Error(f.apply(void 0,e([h[t]],n,!1)).trim())}function y(e,t){Object.defineProperty(e,"toString",{value:t})}var m="undefined"!=typeof process&&void 0!==process.env&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",v="undefined"!=typeof window&&"HTMLElement"in window,g=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY?"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY:"production"!==process.env.NODE_ENV),S=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)if((o<<=1)<0)throw d(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var i=r;i<o;i++)this.groupSizes[i]=0}for(var s=this.indexOfGroup(e+1),a=(i=0,t.length);i<a;i++)this.tag.insertRule(s,t[i])&&(this.groupSizes[e]++,s++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,i=r;i<o;i++)t+="".concat(this.tag.getRule(i)).concat("/*!sc*/\n");return t},e}(),w=new Map,E=new Map,b=1,P=function(e){if(w.has(e))return w.get(e);for(;E.has(b);)b++;var t=b++;if("production"!==process.env.NODE_ENV&&((0|t)<0||t>1073741824))throw d(16,"".concat(t));return w.set(e,t),E.set(t,e),t},A=function(e,t){w.set(e,t),E.set(t,e)},_="style[".concat(m,"][").concat("data-styled-version",'="').concat("6.0.6",'"]'),N=new RegExp("^".concat(m,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),C=function(e,t,n){for(var r,o=n.split(","),i=0,s=o.length;i<s;i++)(r=o[i])&&e.registerName(t,r)},T=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split("/*!sc*/\n"),o=[],i=0,s=r.length;i<s;i++){var a=r[i].trim();if(a){var c=a.match(N);if(c){var u=0|parseInt(c[1],10),l=c[2];0!==u&&(A(l,u),C(e,l,c[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(a)}}},D=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){var t=Array.from(e.querySelectorAll("style[".concat(m,"]")));return t[t.length-1]}(n),i=void 0!==o?o.nextSibling:null;r.setAttribute(m,"active"),r.setAttribute("data-styled-version","6.0.6");var s="undefined"!=typeof __webpack_nonce__?__webpack_nonce__:null;return s&&r.setAttribute("nonce",s),n.insertBefore(r,i),r},O=function(){function e(e){this.element=D(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}throw d(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),R=function(){function e(e){this.element=D(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),j=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),x=v,I={isServer:!v,useCSSOMInjection:!g},B=function(){function e(e,n,r){void 0===e&&(e=p),void 0===n&&(n={});var o=this;this.options=t(t({},I),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&v&&x&&(x=!1,function(e){for(var t=document.querySelectorAll(_),n=0,r=t.length;n<r;n++){var o=t[n];o&&"active"!==o.getAttribute(m)&&(T(e,o),o.parentNode&&o.parentNode.removeChild(o))}}(this)),y(this,function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=function(n){var o=function(e){return E.get(e)}(n);if(void 0===o)return"continue";var i=e.names.get(o),s=t.getGroup(n);if(void 0===i||0===s.length)return"continue";var a="".concat(m,".g").concat(n,'[id="').concat(o,'"]'),c="";void 0!==i&&i.forEach(function(e){e.length>0&&(c+="".concat(e,","))}),r+="".concat(s).concat(a,'{content:"').concat(c,'"}').concat("/*!sc*/\n")},i=0;i<n;i++)o(i);return r}(o)})}return e.registerId=function(e){return P(e)},e.prototype.reconstructWithOptions=function(n,r){return void 0===r&&(r=!0),new e(t(t({},this.options),n),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new j(n):t?new O(n):new R(n)}(this.options),new S(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(P(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(P(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(P(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),L=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},V=/&/g,z=/^\s*\/\/.*$/gm;function k(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=k(e.children,t)),e})}var $=new B,F=function(e){var t,n,r,o=p.options,i=void 0===o?p:o,a=p.plugins,c=void 0===a?l:a,u=function(e,r,o){return o===n||o.startsWith(n)&&o.endsWith(n)&&o.replaceAll(n,"").length>0?".".concat(t):e},h=c.slice();h.push(function(e){e.type===s.RULESET&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(V,n).replace(r,u))}),i.prefix&&h.push(s.prefixer),h.push(s.stringify);var f=function(e,o,a,c){void 0===o&&(o=""),void 0===a&&(a=""),void 0===c&&(c="&"),t=c,n=o,r=new RegExp("\\".concat(n,"\\b"),"g");var u=e.replace(z,""),l=s.compile(a||o?"".concat(a," ").concat(o," { ").concat(u," }"):u);i.namespace&&(l=k(l,i.namespace));var p=[];return s.serialize(l,s.middleware(h.concat(s.rulesheet(function(e){return p.push(e)})))),p};return f.hash=c.length?c.reduce(function(e,t){return t.name||d(15),L(e,t.name)},5381).toString():"",f}(),M=(n.createContext({shouldForwardProp:void 0,styleSheet:$,stylis:F}),n.createContext(void 0),function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=F);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,y(this,function(){throw d(12,String(n.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=F),this.name+e.hash},e}());function Y(e){return"production"!==process.env.NODE_ENV&&"string"==typeof e&&e||e.displayName||e.name||"Component"}var G=function(e){return e>="A"&&e<="Z"};function q(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;G(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}function W(e){return"function"==typeof e}function H(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function U(e){return"object"==typeof e&&"styledComponentId"in e}var K=function(e){return null==e||!1===e||""===e},Z=function(t){var n,r,o=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!K(s)&&(Array.isArray(s)&&s.isCss||W(s)?o.push("".concat(q(i),":"),s,";"):H(s)?o.push.apply(o,e(e(["".concat(i," {")],Z(s),!1),["}"],!1)):o.push("".concat(q(i),": ").concat((n=i,null==(r=s)||"boolean"==typeof r||""===r?"":"number"!=typeof r||0===r||n in a||n.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return o};function J(e,t,n,r){if(K(e))return[];if(U(e))return[".".concat(e.styledComponentId)];if(W(e)){if(!W(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return"production"===process.env.NODE_ENV||"object"!=typeof o||Array.isArray(o)||o instanceof M||H(o)||null===o||console.error("".concat(Y(e)," is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")),J(o,t,n,r)}var i;return e instanceof M?n?(e.inject(n,r),[e.getName(r)]):[e]:H(e)?Z(e):Array.isArray(e)?Array.prototype.concat.apply(l,e.map(function(e){return J(e,t,n,r)})):[e.toString()]}function Q(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var X=function(e){return Object.assign(e,{isCss:!0})};function ee(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];if(W(t)||H(t)){var o=t;return X(J(Q(l,e([o],n,!0))))}var i=t;return 0===n.length&&1===i.length&&"string"==typeof i[0]?J(i):X(J(Q(i,n)))}function te(n,r,o){if(void 0===o&&(o=p),!r)throw d(1,r);var i=function(t){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return n(r,o,ee.apply(void 0,e([t],i,!1)))};return i.attrs=function(e){return te(n,r,t(t({},o),{attrs:Array.prototype.concat(o.attrs,e).filter(Boolean)}))},i.withConfig=function(e){return te(n,r,t(t({},o),e))},i}var ne,re=n.createContext(void 0),oe=re.Consumer;function ie(){var e=o(re);if(!e)throw d(18);return e}function se(e){var o=n.useContext(re),i=r(function(){return function(e,n){if(!e)throw d(14);if(W(e)){var r=e(n);if("production"!==process.env.NODE_ENV&&(null===r||Array.isArray(r)||"object"!=typeof r))throw d(7);return r}if(Array.isArray(e)||"object"!=typeof e)throw d(8);return n?t(t({},n),e):e}(e.theme,o)},[e.theme,o]);return e.children?n.createElement(re.Provider,{value:i},e.children):null}function ae(e,t,n){return void 0===n&&(n=p),e.theme!==n.theme&&e.theme||t||n.theme}var ce="function"==typeof Symbol&&Symbol.for,ue=ce?Symbol.for("react.memo"):60115,le=ce?Symbol.for("react.forward_ref"):60112,pe={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},he={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},fe={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},de=((ne={})[le]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ne[ue]=fe,ne);function ye(e){return("type"in(t=e)&&t.type.$$typeof)===ue?fe:"$$typeof"in e?de[e.$$typeof]:pe;var t}var me=Object.defineProperty,ve=Object.getOwnPropertyNames,ge=Object.getOwnPropertySymbols,Se=Object.getOwnPropertyDescriptor,we=Object.getPrototypeOf,Ee=Object.prototype;function be(e,t,n){if("string"!=typeof t){if(Ee){var r=we(t);r&&r!==Ee&&be(e,r,n)}var o=ve(t);ge&&(o=o.concat(ge(t)));for(var i=ye(e),s=ye(t),a=0;a<o.length;++a){var c=o[a];if(!(c in he||n&&n[c]||s&&c in s||i&&c in i)){var u=Se(t,c);try{me(e,c,u)}catch(e){}}}}return e}function Pe(e){var r=n.forwardRef(function(r,o){var i=ae(r,n.useContext(re),e.defaultProps);return"production"!==process.env.NODE_ENV&&void 0===i&&console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "'.concat(Y(e),'"')),n.createElement(e,t({},r,{theme:i,ref:o}))});return"production"!==process.env.NODE_ENV&&(r.displayName="WithTheme(".concat(Y(e),")")),be(r,e)}var Ae=/(a)(d)/gi,_e=function(e){return String.fromCharCode(e+(e>25?39:97))},Ne={};function Ce(e,t,n){if(void 0===n&&(n=!1),!n&&!H(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Ce(e[r],t[r]);else if(H(t))for(var r in t)e[r]=Ce(e[r],t[r]);return e}var Te,De,Oe=require("react-native"),Re=(Te=Oe.StyleSheet,De=function(){function e(e){this.rules=e}return e.prototype.generateStyleObject=function(e){var t=function(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}(J(this.rules,e)),n=function(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=_e(t%52)+n;return(_e(t%52)+n).replace(Ae,"$1-$2")}(L(5381,t)>>>0);if(!Ne[n]){var r=u(t),o=[];r.each(function(e){"decl"===e.type?o.push([e.prop,e.value]):"production"!==process.env.NODE_ENV&&"comment"!==e.type&&console.warn("Node of type ".concat(e.type," not supported as an inline style"))});var i=c(o),s=Te.create({generated:i});Ne[n]=s.generated}return Ne[n]},e}(),function(e,o,s){var a=U(e),c=e,u=o.displayName,h=void 0===u?function(e){return function(e){return"string"==typeof e&&("production"===process.env.NODE_ENV||e.charAt(0)===e.charAt(0).toLowerCase())}(e)?"styled.".concat(e):"Styled(".concat(Y(e),")")}(e):u,f=o.attrs,d=void 0===f?l:f,y=a&&c.attrs?c.attrs.concat(d).filter(Boolean):d,m=o.shouldForwardProp;if(a&&c.shouldForwardProp){var v=c.shouldForwardProp;if(o.shouldForwardProp){var g=o.shouldForwardProp;m=function(e,t){return v(e,t)&&g(e,t)}}else m=v}var S=function(e,o){return function(e,o,s){var a=e.attrs,c=e.inlineStyle,u=e.defaultProps,l=e.shouldForwardProp,h=e.target,f=n.useContext(re),d=function(e,n,r){void 0===e&&(e=p);var o=t(t({},n),{theme:e}),i={};return r.forEach(function(e){var t,n=W(e)?e(o):e;for(t in n)o[t]=i[t]=n[t]}),[o,i]}(ae(o,f,u)||p,o,a),y=d[1],m=c.generateStyleObject(d[0]),v=s,g=y.as||o.as||h,S=y!==o?t(t({},o),y):o,w={};for(var E in S)"$"!==E[0]&&"as"!==E&&("forwardedAs"===E?w.as=S[E]:l&&!l(E,g)||(w[E]=S[E]));return w.style=r(function(){return W(o.style)?function(e){return[m].concat(o.style(e))}:o.style?[m].concat(o.style):m},[o.style,m]),w.ref=v,i(g,w)}(w,e,o)};"production"!==process.env.NODE_ENV&&(S.displayName=h);var w=n.forwardRef(S);return w.attrs=y,w.inlineStyle=new De(a?c.inlineStyle.rules.concat(s):s),w.shouldForwardProp=m,"production"!==process.env.NODE_ENV&&(w.displayName=h),w.styledComponentId=!0,w.target=a?c.target:e,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=a?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,o=t;r<o.length;r++)Ce(e,o[r],!0);return e}({},c.defaultProps,e):e}}),be(w,e,{attrs:!0,inlineStyle:!0,displayName:!0,shouldForwardProp:!0,target:!0}),w}),je=function(e){return te(Re,e)};["ActivityIndicator","Button","DatePickerIOS","DrawerLayoutAndroid","FlatList","Image","ImageBackground","KeyboardAvoidingView","Modal","Pressable","ProgressBarAndroid","ProgressViewIOS","RefreshControl","SafeAreaView","ScrollView","SectionList","Slider","Switch","Text","TextInput","TouchableHighlight","TouchableOpacity","View","VirtualizedList"].forEach(function(e){return Object.defineProperty(je,e,{enumerable:!0,configurable:!1,get:function(){if(e in Oe&&Oe[e])return je(Oe[e]);throw new Error("".concat(e," is not available in the currently-installed version of react-native"))}})});export{oe as ThemeConsumer,re as ThemeContext,se as ThemeProvider,ee as css,je as default,U as isStyledComponent,je as styled,ie as useTheme,Pe as withTheme};
//# sourceMappingURL=styled-components.native.esm.js.map