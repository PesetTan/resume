(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var a=n("q1tI"),i=r(a),o=r(n("Gytx"));function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function d(){u=e(s.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return u},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var l=a.prototype;return l.shouldComponentUpdate=function(e){return!o(e,this.props)},l.componentWillMount=function(){s.push(this),d()},l.componentDidUpdate=function(){d()},l.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),d()},l.render=function(){return i.createElement(r,this.props)},a}(a.Component);return l(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),l(f,"canUseDOM",c),f}}},"8ypT":function(e,t,n){},Bl7J:function(e,t,n){"use strict";var r={personal:{name:"Sam (Peset) Tan",title:"Software Engineer",github:"https://github.com/PesetTan/resume",contact:{address:"4558 Lodovico CT.",city:"Fremont",state:"CA",zipcode:"94555",cell:"510-862-8179",email:"pesettan@gmail.com"}},skills:[{type:"Languages",items:[{name:"C#",value:5},{name:"Javascript",value:3},{name:"Typescript",value:4},{name:"SQL",value:4},{name:"VBS",value:3}]},{type:"Software",items:[{name:"ASP.net",value:5},{name:"GIT",value:4},{name:"MS TFS",value:4},{name:"MS SQL DB",value:4},{name:"MySQL DB",value:3},{name:"Oracle DB",value:3},{name:"Visual Studio",value:4},{name:"VS Code",value:4},{name:"D3.js",value:4},{name:"Node.js",value:2},{name:"Angular",value:4},{name:"React.js",value:1}]}],experience:[{company:"Omnicell",location:"Mountain View, CA",date:"2018 - Now",title:"Software Engineer III",bullets:["\n                Implemented Active-Directory Sync feature, easing account management of hospital workers. \n                In effect, this allows an account manager to manage authentication on just the LDAP server.\n                ","\n                Major player in migration and rewrite of library code and services from .Net Framework to .Net Core. \n                This allows the use of smaller containers for each service reducing cloud storage costs.\n                ","\n                Frontend developer for an enterprise-level application. \n                Used Angular and RXJS to allow users to operate the hospital-grade medication \n                dispensary. Key activities include; implementing UI design requirements to the \n                pixel and constructing UI components.\n                ","\n                Backend developer for the enterprise-level application. \n                Built a connection from database to ASP.net RESTful API, created \n                new micro-services for the system, developed and publish new requirements, managed \n                database requirements, handled communications between legacy and current system \n                with queuing system\n                ","\n                Worked with architects to implement new patterns in code and update and evolve\n                the common library used by all micro-services.\n                ","\n                Troubleshoot production systems on customer sites, assessed problems, found\n                root causes and developed solutions.\n                "]},{company:"ATAC",location:"Santa Clara, CA",date:"2015 - 2018",title:"Web Application Developer / Senior Data Analyst",bullets:["\n                Frontend developer for ongoing research-level Angular-application for NASA, \n                illustrated knowledge in interface design and proficiency in handling large\n                data sets. The application compared different data sets using interactive charts, \n                diagrams and animated ground traffic using the D3.js API.        \n                "]},{company:"ATAC",location:"Santa Clara, CA",date:"2007 - 2015",title:"Data Analyst",bullets:["\n                Primary developer for desktop applications that filters large \n                amounts of flight radar, greatly increasing workflow among colleagues and \n                government clients. The program filters and aggregates data with an interface that is easy \n                to comprehend and manipulate. \n                ","\n                Database administrator for multiple NASA projects using MySQL. The \n                database integrated flight data and multiple FAA data sources into an \n                accessible format that is easy to consolidate into different aggregations.\n                "]}],education:[{degree:"Masters, Software Engineering",school:"Penn State University",address:"University Park, PA"},{degree:"Bachelors, Electrical Engineering",school:"San Jose State University",address:"San Jose, CA"}]},a=n("q1tI"),i=n.n(a),o=n("TJpk"),l=n.n(o),c=n("Wbzz"),u=function(e){var t=e.item;return i.a.createElement("div",{style:{backgroundImage:"linear-gradient(45deg, rgb(0,80,200), rgb(100,0,255))"}},i.a.createElement("div",{style:{padding:"1rem 1rem 0 1rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement("div",{style:{color:"white",textDecoration:"none"}},t.name))),i.a.createElement("div",{style:{padding:"0.3rem 1rem"}},i.a.createElement("h3",{style:{color:"lightgrey"}},t.title)))},s=(n("8ypT"),function(e){var t=e.items;return i.a.createElement("div",null,i.a.createElement("h4",null,"Experience"),t.map((function(e){return i.a.createElement("div",{key:e.date,style:{display:"flex"}},i.a.createElement("div",{style:{minWidth:"100px",padding:"1rem"}},e.date),i.a.createElement("div",null,i.a.createElement("div",{style:{fontWeight:"bold"}},e.title),i.a.createElement("div",null,e.company,", ",e.location),i.a.createElement("ul",null,e.bullets.map((function(e,t){return i.a.createElement("li",{key:t},e)})))))})))}),d=function(e){var t=e.items;return i.a.createElement("div",null,i.a.createElement("h4",null,"Education"),i.a.createElement("ul",null,t.map((function(e){return i.a.createElement("li",{key:e.degree},i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("span",null,e.degree,", "),i.a.createElement("span",null,e.school)),i.a.createElement("div",null,e.address)))}))))},f=function(e){var t=e.item;return i.a.createElement("div",{style:{padding:"1rem"}},i.a.createElement("h4",null,"Personal"),i.a.createElement("div",null,"Phone:"),i.a.createElement("div",null,t.contact.cell),i.a.createElement("br",null),i.a.createElement("div",null,"E-mail:"),i.a.createElement("div",null,t.contact.email))},T=function(e){for(var t=e.value,n=[],r=1;r<=5;r++)n.push(i.a.createElement("span",{key:r,style:{height:"1rem",width:"1rem",backgroundColor:r>t?"lightgrey":"rgb(100,0,255)",borderRadius:"50%",display:"inline-block",border:r>t?"lightgrey":"rgb(100,0,255)",borderStyle:"solid",margin:"0 0.05rem"}}));return n},p=function(e){var t=e.item;return i.a.createElement("div",{style:{display:"flex",flexDirection:"column",width:"250",padding:"1rem"}},i.a.createElement("h4",null,t.type),t.items.map((function(e){return i.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",padding:"0.4rem"},key:e.name},i.a.createElement("span",{style:{width:"100px"}},e.name),i.a.createElement("div",{style:{width:"100px"}},i.a.createElement(T,{value:e.value})))})))},E=function(e){e.item;return i.a.createElement("div",{style:{backgroundColor:"rgb(250,250,250)"}},i.a.createElement("div",{style:{padding:"1rem 1rem 0 1rem",textDecoration:"none"}},"This site was created using ",i.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"Gatsby"),", an application stack incorporating ",i.a.createElement("a",{href:"https://reactjs.org/"},"React"),". The code for this site can be found here: ",i.a.createElement("a",{href:"https://github.com/PesetTan/resume"},"https://github.com/PesetTan/resume")))},m=function(e){e.item;return i.a.createElement("div",{style:{display:"flex",flexDirection:"column",width:"250",padding:"1rem"}},i.a.createElement("h4",null,"Github"),i.a.createElement("a",{href:"https://github.com/PesetTan"},"https://github.com/PesetTan"))};t.a=function(e){e.children;return i.a.createElement(c.b,{query:"3649515864",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{title:e.site.siteMetadata.title},i.a.createElement("html",{lang:"en"})),i.a.createElement(u,{item:r.personal}),i.a.createElement("div",{style:{display:"flex"}},i.a.createElement("div",{style:{padding:"1rem"}},i.a.createElement(s,{items:r.experience}),i.a.createElement(d,{items:r.education})),i.a.createElement("div",{style:{background:"rgb(230,230,230)",padding:"1rem"}},i.a.createElement(f,{item:r.personal}),i.a.createElement(p,{item:r.skills[0]}),i.a.createElement(p,{item:r.skills[1]}),i.a.createElement(m,null))),i.a.createElement(E,null))}})}},Gytx:function(e,t){e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),o=Object.keys(t);if(i.length!==o.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),c=0;c<i.length;c++){var u=i[c];if(!l(u))return!1;var s=e[u],d=t[u];if(!1===(a=n?n.call(r,s,d,u):void 0)||void 0===a&&s!==d)return!1}return!0}},TJpk:function(e,t,n){t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=d(n("q1tI")),o=d(n("17x9")),l=d(n("8+s/")),c=d(n("bmMU")),u=n("v1p5"),s=n("hFT/");function d(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function T(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var E,m,A,h=(0,l.default)(u.reducePropsToState,u.handleClientStateChange,u.mapStateOnServer)((function(){return null})),y=(E=h,A=m=function(e){function t(){return T(this,t),p(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,c.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case s.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,a=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return r({},a,((t={})[n.type]=[].concat(a[n.type]||[],[r({},i,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,a=e.child,i=e.newProps,o=e.newChildProps,l=e.nestedChildren;switch(a.type){case s.TAG_NAMES.TITLE:return r({},i,((t={})[a.type]=l,t.titleAttributes=r({},o),t));case s.TAG_NAMES.BODY:return r({},i,{bodyAttributes:r({},o)});case s.TAG_NAMES.HTML:return r({},i,{htmlAttributes:r({},o)})}return r({},i,((n={})[a.type]=r({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var a;n=r({},n,((a={})[t]=e[t],a))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return i.default.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=f(a,["children"]),l=(0,u.convertReactPropstoHtmlAttributes)(o);switch(n.warnOnInvalidChildren(e,i),e.type){case s.TAG_NAMES.LINK:case s.TAG_NAMES.META:case s.TAG_NAMES.NOSCRIPT:case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:l,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:l,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=f(e,["children"]),a=r({},n);return t&&(a=this.mapChildrenToProps(t,a)),i.default.createElement(E,a)},a(t,null,[{key:"canUseDOM",set:function(e){E.canUseDOM=e}}]),t}(i.default.Component),m.propTypes={base:o.default.object,bodyAttributes:o.default.object,children:o.default.oneOfType([o.default.arrayOf(o.default.node),o.default.node]),defaultTitle:o.default.string,defer:o.default.bool,encodeSpecialCharacters:o.default.bool,htmlAttributes:o.default.object,link:o.default.arrayOf(o.default.object),meta:o.default.arrayOf(o.default.object),noscript:o.default.arrayOf(o.default.object),onChangeClientState:o.default.func,script:o.default.arrayOf(o.default.object),style:o.default.arrayOf(o.default.object),title:o.default.string,titleAttributes:o.default.object,titleTemplate:o.default.string},m.defaultProps={defer:!0,encodeSpecialCharacters:!0},m.peek=E.peek,m.rewind=function(){var e=E.rewind();return e||(e=(0,u.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},A);y.renderStatic=y.rewind,t.Helmet=y,t.default=y},bmMU:function(e,t,n){"use strict";var r=Array.isArray,a=Object.keys,i=Object.prototype.hasOwnProperty,o="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var l,c,u,s=r(t),d=r(n);if(s&&d){if((c=t.length)!=n.length)return!1;for(l=c;0!=l--;)if(!e(t[l],n[l]))return!1;return!0}if(s!=d)return!1;var f=t instanceof Date,T=n instanceof Date;if(f!=T)return!1;if(f&&T)return t.getTime()==n.getTime();var p=t instanceof RegExp,E=n instanceof RegExp;if(p!=E)return!1;if(p&&E)return t.toString()==n.toString();var m=a(t);if((c=m.length)!==a(n).length)return!1;for(l=c;0!=l--;)if(!i.call(n,m[l]))return!1;if(o&&t instanceof Element&&n instanceof Element)return t===n;for(l=c;0!=l--;)if(!("_owner"===(u=m[l])&&t.$$typeof||e(t[u],n[u])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},"hFT/":function(e,t){t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var n=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},r=(t.VALID_TAG_NAMES=Object.keys(n).map((function(e){return n[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce((function(e,t){return e[r[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},v1p5:function(e,t,n){(function(e){t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=c(n("q1tI")),o=c(n("6qGY")),l=n("hFT/");function c(e){return e&&e.__esModule?e:{default:e}}var u,s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},d=function(e){var t=m(e,l.TAG_NAMES.TITLE),n=m(e,l.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=m(e,l.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},f=function(e){return m(e,l.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},T=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return a({},e,t)}),{})},p=function(e,t){return t.filter((function(e){return void 0!==e[l.TAG_NAMES.BASE]})).map((function(e){return e[l.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var i=r[a].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},E=function(e,t,n){var a={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&S("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),o=0;o<i.length;o++){var c=i[o],u=c.toLowerCase();-1===t.indexOf(u)||n===l.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||u===l.TAG_PROPERTIES.REL&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==l.TAG_PROPERTIES.INNER_HTML&&c!==l.TAG_PROPERTIES.CSS_TEXT&&c!==l.TAG_PROPERTIES.ITEM_PROP||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return a[n]||(a[n]={}),r[n]||(r[n]={}),!a[n][s]&&(r[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(r),c=0;c<i.length;c++){var u=i[c],s=(0,o.default)({},a[u],r[u]);a[u]=s}return e}),[]).reverse()},m=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},A=(u=Date.now(),function(e){var t=Date.now();t-u>16?(u=t,e(t)):setTimeout((function(){A(e)}),0)}),h=function(e){return clearTimeout(e)},y="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||A:e.requestAnimationFrame||A,v="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||h:e.cancelAnimationFrame||h,S=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},g=null,b=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,d=e.styleTags,f=e.title,T=e.titleAttributes;R(l.TAG_NAMES.BODY,r),R(l.TAG_NAMES.HTML,a),P(f,T);var p={baseTag:w(l.TAG_NAMES.BASE,n),linkTags:w(l.TAG_NAMES.LINK,i),metaTags:w(l.TAG_NAMES.META,o),noscriptTags:w(l.TAG_NAMES.NOSCRIPT,c),scriptTags:w(l.TAG_NAMES.SCRIPT,s),styleTags:w(l.TAG_NAMES.STYLE,d)},E={},m={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(E[e]=n),r.length&&(m[e]=p[e].oldTags)})),t&&t(),u(e,E,m)},_=function(e){return Array.isArray(e)?e.join(""):e},P=function(e,t){void 0!==e&&document.title!==e&&(document.title=_(e)),R(l.TAG_NAMES.TITLE,t)},R=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(l.HELMET_ATTRIBUTE),a=r?r.split(","):[],i=[].concat(a),o=Object.keys(t),c=0;c<o.length;c++){var u=o[c],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===a.indexOf(u)&&a.push(u);var d=i.indexOf(u);-1!==d&&i.splice(d,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);a.length===i.length?n.removeAttribute(l.HELMET_ATTRIBUTE):n.getAttribute(l.HELMET_ATTRIBUTE)!==o.join(",")&&n.setAttribute(l.HELMET_ATTRIBUTE,o.join(","))}},w=function(e,t){var n=document.head||document.querySelector(l.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+l.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(r),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===l.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===l.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(l.HELMET_ATTRIBUTE,"true"),a.some((function(e,t){return o=t,n.isEqualNode(e)}))?a.splice(o,1):i.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:i}},M=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[l.REACT_TAG_MAP[n]||n]=e[n],t}),t)},C=function(e,t,n){switch(e){case l.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[l.HELMET_ATTRIBUTE]=!0,a=O(n,r),[i.default.createElement(l.TAG_NAMES.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=M(n),i=_(t);return a?"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+a+">"+s(i,r)+"</"+e+">":"<"+e+" "+l.HELMET_ATTRIBUTE+'="true">'+s(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case l.ATTRIBUTE_NAMES.BODY:case l.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return O(t)},toString:function(){return M(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[l.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=l.REACT_TAG_MAP[e]||e;if(n===l.TAG_PROPERTIES.INNER_HTML||n===l.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),i.default.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===l.TAG_PROPERTIES.INNER_HTML||e===l.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+s(r[t],n)+'"';return e?e+" "+a:a}),""),i=r.innerHTML||r.cssText||"",o=-1===l.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[l.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){g&&v(g),e.defer?g=y((function(){b(e,(function(){g=null}))})):(b(e),g=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,d=e.title,f=void 0===d?"":d,T=e.titleAttributes;return{base:C(l.TAG_NAMES.BASE,t,r),bodyAttributes:C(l.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:C(l.ATTRIBUTE_NAMES.HTML,a,r),link:C(l.TAG_NAMES.LINK,i,r),meta:C(l.TAG_NAMES.META,o,r),noscript:C(l.TAG_NAMES.NOSCRIPT,c,r),script:C(l.TAG_NAMES.SCRIPT,u,r),style:C(l.TAG_NAMES.STYLE,s,r),title:C(l.TAG_NAMES.TITLE,{title:f,titleAttributes:T},r)}},t.reducePropsToState=function(e){return{baseTag:p([l.TAG_PROPERTIES.HREF],e),bodyAttributes:T(l.ATTRIBUTE_NAMES.BODY,e),defer:m(e,l.HELMET_PROPS.DEFER),encode:m(e,l.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(l.ATTRIBUTE_NAMES.HTML,e),linkTags:E(l.TAG_NAMES.LINK,[l.TAG_PROPERTIES.REL,l.TAG_PROPERTIES.HREF],e),metaTags:E(l.TAG_NAMES.META,[l.TAG_PROPERTIES.NAME,l.TAG_PROPERTIES.CHARSET,l.TAG_PROPERTIES.HTTPEQUIV,l.TAG_PROPERTIES.PROPERTY,l.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:E(l.TAG_NAMES.NOSCRIPT,[l.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:f(e),scriptTags:E(l.TAG_NAMES.SCRIPT,[l.TAG_PROPERTIES.SRC,l.TAG_PROPERTIES.INNER_HTML],e),styleTags:E(l.TAG_NAMES.STYLE,[l.TAG_PROPERTIES.CSS_TEXT],e),title:d(e),titleAttributes:T(l.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=y,t.warn=S}).call(this,n("yLpj"))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=bfc3b393f484e8017a4ce6b216c744361b202e15-2e9298dd595d9dcc538c.js.map