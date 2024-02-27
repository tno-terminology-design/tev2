"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[7211],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,h=m["".concat(c,".").concat(d)]||m[d]||p[d]||n;return r?a.createElement(h,s(s({ref:t},u),{},{components:r})):a.createElement(h,s({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<n;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9624:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var a=r(3117),o=(r(7294),r(3905));const n={id:"moustache-variable",displayed_sidebar:"tev2SideBar",term:"moustache-variable",termType:"concept",isa:null,glossaryTerm:"Moustache Variable",glossaryText:"a placeholder in the form of a 'moustache' tag, e.g.: `{{variable_name}}`, that are used by [converters](@) to produce a text by which a text construct that is located by an [interpreter](@) will be replaced. See also https://mustache.github.io/mustache.5.html",grouptags:[],formPhrases:["moustache-variable{ss}"],status:"proposed",created:20230731,updated:20240108,contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},s="Moustache Variable",i={unversionedId:"terms/moustache-variable",id:"terms/moustache-variable",title:"Moustache Variable",description:"A moustache variable is a placeholder in the form of a 'moustache' tag, e.g.: {}, that are used by converters to produce a text by which a text construct that is located by an interpreter will be replaced.",source:"@site/docs/terms/moustache-variable.md",sourceDirName:"terms",slug:"/terms/moustache-variable",permalink:"/tev2-specifications/docs/terms/moustache-variable",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/terms/moustache-variable.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1706704099,formattedLastUpdatedAt:"Jan 31, 2024",frontMatter:{id:"moustache-variable",displayed_sidebar:"tev2SideBar",term:"moustache-variable",termType:"concept",isa:null,glossaryTerm:"Moustache Variable",glossaryText:"a placeholder in the form of a 'moustache' tag, e.g.: `{{variable_name}}`, that are used by [converters](@) to produce a text by which a text construct that is located by an [interpreter](@) will be replaced. See also https://mustache.github.io/mustache.5.html",grouptags:[],formPhrases:["moustache-variable{ss}"],status:"proposed",created:20230731,updated:20240108,contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},sidebar:"tev2SideBar"},c={},l=[{value:"Notes",id:"notes",level:2}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"moustache-variable"},"Moustache Variable"),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"moustache variable")," is a placeholder in the form of a 'moustache' tag, e.g.: ",(0,o.kt)("inlineCode",{parentName:"p"},"{{variable_name}}"),", that are used by ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/converter",title:"Converter: a specification, in the form of a Handlebars Expression, for constructing a text that a particular Text Conversion Tool uses to create its output."},"converters")," to produce a text by which a text construct that is located by an ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/interpreter",title:"Interpreter: a Regex that is used to locate a particular text construct (such as a TermRef or MRGRef) in a text, and that populates Named Capturing Groups as specified in the Interpreter Profile of the particular Text Conversion Tool for which it is designed."},"interpreter")," will be replaced."),(0,o.kt)("h2",{id:"notes"},"Notes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Moustache variables serve as dynamic placeholders that allow flexible text transformation based on extracted information."),(0,o.kt)("li",{parentName:"ul"},"The use of moustache variables enables separation of concerns between data extraction and text conversion.")))}p.isMDXComponent=!0}}]);