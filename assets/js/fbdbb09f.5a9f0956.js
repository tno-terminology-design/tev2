"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[9936],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(r),u=o,h=f["".concat(c,".").concat(u)]||f[u]||d[u]||a;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7294),o=r(6010);const a="tabItem_Ymn6";function i(e){let{children:t,hidden:r,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,i),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>x});var n=r(3117),o=r(7294),a=r(6010),i=r(2466),s=r(6775),c=r(1980),l=r(7392),p=r(12);function d(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:o}}=e;return{value:t,label:r,attributes:n,default:o}}))}function f(e){const{values:t,children:r}=e;return(0,o.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function u(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const n=(0,s.k6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,c._X)(a),(0,o.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(n.location.search);t.set(a,e),n.replace({...n.location,search:t.toString()})}),[a,n])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,a=f(e),[i,s]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[c,l]=h({queryString:r,groupId:n}),[d,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,a]=(0,p.Nk)(r);return[n,(0,o.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:n}),v=(()=>{const e=c??d;return u({value:e,tabValues:a})?e:null})();(0,o.useLayoutEffect)((()=>{v&&s(v)}),[v]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!u({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);s(e),l(e),m(e)}),[l,m,a]),tabValues:a}}var v=r(2389);const g="tabList__CuJ",b="tabItem_LNqP";function y(e){let{className:t,block:r,selectedValue:s,selectValue:c,tabValues:l}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),f=e=>{const t=e.currentTarget,r=p.indexOf(t),n=l[r].value;n!==s&&(d(t),c(n))},u=e=>{let t=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":{const r=p.indexOf(e.currentTarget)+1;t=p[r]??p[0];break}case"ArrowLeft":{const r=p.indexOf(e.currentTarget)-1;t=p[r]??p[p.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t)},l.map((e=>{let{value:t,label:r,attributes:i}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:u,onClick:f},i,{className:(0,a.Z)("tabs__item",b,i?.className,{"tabs__item--active":s===t})}),r??t)})))}function k(e){let{lazy:t,children:r,selectedValue:n}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function T(e){const t=m(e);return o.createElement("div",{className:(0,a.Z)("tabs-container",g)},o.createElement(y,(0,n.Z)({},e,t)),o.createElement(k,(0,n.Z)({},e,t)))}function x(e){const t=(0,v.Z)();return o.createElement(T,(0,n.Z)({key:String(t)},e))}},869:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(7294),o=r(6775);const a="apiTable_e8hp";function i(e,t){let{name:r,children:a}=e;const i=function(e){let t=e;for(;(0,n.isValidElement)(t);)[t]=n.Children.toArray(t.props.children);return t}(a),s=r?`${r}-${i}`:i,c=`#${s}`,l=(0,o.k6)();return n.createElement("tr",{id:s,tabIndex:0,ref:l.location.hash===c?t:void 0,onClick:e=>{"A"===e.target.tagName.toUpperCase()||l.push(c)},onKeyDown:e=>{"Enter"===e.key&&l.push(c)}},a.props.children)}const s=n.forwardRef(i);function c(e){let{children:t,name:r}=e;const[o,i]=n.Children.toArray(t.props.children),c=(0,n.useRef)(null);(0,n.useEffect)((()=>{c.current?.focus()}),[c]);const l=n.Children.map(i.props.children,(e=>n.createElement(s,{name:r,ref:c},e)));return n.createElement("table",{className:a},o,n.createElement("tbody",null,l))}},8236:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(3117),o=(r(7294),r(3905)),a=(r(4996),r(4866),r(5162),r(869));const i={id:"converter-profile",displayed_sidebar:"tev2SideBar",term:"converter-profile",termType:"concept",glossaryTerm:"Converter Profile",glossaryText:"the specification of a class of data objects, instances of which are used by specific [text conversion tools](@) to generate text fragments from.",glossaryNotes:["Converter profiles exist, e.g., for the [TRRT](@) and the [HRGT](@).","Converter profiles are used by [converters](@), which are (predefined or custom) [handlebars templates](@) that produce the generated text fragments."],grouptags:[],formPhrases:["converter-profile{ss}","profile{ss}"],status:"proposed",created:20231218,updated:20240301,contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},s="Converter Profile",c={unversionedId:"terms/converter-profile",id:"terms/converter-profile",title:"Converter Profile",description:"A converter profile is the test string that cannot be found specification of a class of data objects, instances of which are used by specific text conversion tools to generate text fragments from. Converter profiles exist, e.g., for the TRRT and the HRGT.",source:"@site/docs/terms/converter-profile.md",sourceDirName:"terms",slug:"/terms/converter-profile",permalink:"/tev2-specifications/docs/terms/converter-profile",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/terms/converter-profile.md",tags:[],version:"current",lastUpdatedBy:"Ca5e",lastUpdatedAt:1710001438,formattedLastUpdatedAt:"Mar 9, 2024",frontMatter:{id:"converter-profile",displayed_sidebar:"tev2SideBar",term:"converter-profile",termType:"concept",glossaryTerm:"Converter Profile",glossaryText:"the specification of a class of data objects, instances of which are used by specific [text conversion tools](@) to generate text fragments from.",glossaryNotes:["Converter profiles exist, e.g., for the [TRRT](@) and the [HRGT](@).","Converter profiles are used by [converters](@), which are (predefined or custom) [handlebars templates](@) that produce the generated text fragments."],grouptags:[],formPhrases:["converter-profile{ss}","profile{ss}"],status:"proposed",created:20231218,updated:20240301,contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},sidebar:"tev2SideBar"},l={},p=[{value:"Converter Profile Object",id:"object",level:2},{value:"<code>err</code> fields",id:"err-fields",level:3}],d={toc:p};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"converter-profile"},"Converter Profile"),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"converter profile")," is the ",(0,o.kt)("a",{parentName:"p",href:"@"},(0,o.kt)("strong",{parentName:"a"},"test string that cannot be found"))," specification of a class of data objects, instances of which are used by specific ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-text-conversion-tool",title:"TEv2 Text Conversion Tool: a TEv2 Tool whose purpose is to convert particular text constructs (such as TermRefs or MRGRefs) that exist in one or more files with other texts, the contents of which consists of some fixed construct that is populated with elements derived from existing text constructs and/or other resources."},"text conversion tools")," to generate text fragments from. ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/converter-profile",title:"Converter Profile: the specification of a class of data objects, instances of which are used by specific Text Conversion Tools to generate text fragments from."},"Converter profiles")," exist, e.g., for the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/specs/tools/trrt",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT")," and the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/specs/tools/hrgt",title:"Human Readable Glossary Tool: a software tool designed to create, manage, and process Human Readable Glossaries (HRGs), as Specified By TEv2. HRGTs offer features for selecting Terms that are Curated within the Scope it is run in, or from other Scopes."},"HRGT"),"."),(0,o.kt)("p",null,"The text fragments that are generated by the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-text-conversion-tool",title:"TEv2 Text Conversion Tool: a TEv2 Tool whose purpose is to convert particular text constructs (such as TermRefs or MRGRefs) that exist in one or more files with other texts, the contents of which consists of some fixed construct that is populated with elements derived from existing text constructs and/or other resources."},"text conversion tool")," are created by executing a (predefined, or custom) ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/handlebars-template",title:"Handlebars Template: a blueprint/template that uses the Handlebars Language to define where and how variable information can be inserted into a predetermined text structure."},"handlebars template")," that works on a converter profile object. The object defines the available information that ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/converter",title:"Converter: a specification, in the form of a Handlebars Template, for constructing a text that a particular Text Conversion Tool uses to create its output."},"converters")," and their ",(0,o.kt)("a",{href:"/tev2-specifications/docs/specs/syntax/handlebars-helper-functions",title:"Handlebars Helper Function: a function that can be used in a Handlebars Expression to manipulate or format the data before displaying it within a template."},"helper functions")," can use to create texts."),(0,o.kt)("p",null,"The generic workings of ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/converter-profile",title:"Converter Profile: the specification of a class of data objects, instances of which are used by specific Text Conversion Tools to generate text fragments from."},"converter profiles")," is documented in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/overview/tev2-text-conversion"},"TEv2 Text Conversion pattern"),"."),(0,o.kt)("h2",{id:"object"},"Converter Profile Object"),(0,o.kt)("p",null,"The converter profile object can be envisaged as a YAML object, that has a number of sections. Every converter profile object has the following sections, but individual ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-text-conversion-tool",title:"TEv2 Text Conversion Tool: a TEv2 Tool whose purpose is to convert particular text constructs (such as TermRefs or MRGRefs) that exist in one or more files with other texts, the contents of which consists of some fixed construct that is populated with elements derived from existing text constructs and/or other resources."},"text-conversion-tool"),' may specify additional sections (or fields), which can be found in the section "Converter Profile" of their specifications.'),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Example"),"Here is an example of what a converter profile object might look like for the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRef")," `[converter profile object](converter-profile#object@)`",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'int:\n  type: "default"\n  regex: /(?:(?<=[^`\\\\])|^)\\[(?=[^@\\n\\]]+\\]\\([^@)]*@[:a-z0-9_-]*\\))(?<showtext>[^@\\n\\]]+)\\]\\((?:(?:(?<type>[a-z0-9_-]*):)?)(?:(?<term>[^@\\n:#)]*?)?(?:#(?<trait>[^@\\n:#)]*))?)?@(?<scopetag>[a-z0-9_-]*)(?::(?<vsntag>[a-z0-9_-]*))?\\)/g\nref:\n  showtext: "converter profile object"\n  type: ""\n  term: "converter-profile"\n  trait: "object"\n  scopetag: ""\n  vsntag: ""\nentry:\n  id: "converter-profile"\n  displayed_sidebar: "tev2SideBar"\n  term: "converter-profile"\n  termType: "concept"\n  glossaryTerm: "Converter Profile"\n  glossaryText: "a data object, of a type that is specific for a <a href="/tev2-specifications/docs/terms/tev2-text-conversion-tool" title="TEv2 Text Conversion Tool: a TEv2 Tool whose purpose is to convert particular text constructs (such as TermRefs or MRGRefs) that exist in one or more files with other texts, the contents of which consists of some fixed construct that is populated with elements derived from existing text constructs and/or other resources.">text conversion tool</a>, that <a href="/tev2-specifications/docs/terms/converter" title="Converter: a specification, in the form of a Handlebars Template, for constructing a text that a particular Text Conversion Tool uses to create its output.">converters</a> use to create texts by which the <a href="/tev2-specifications/docs/terms/tev2-text-conversion-tool" title="TEv2 Text Conversion Tool: a TEv2 Tool whose purpose is to convert particular text constructs (such as TermRefs or MRGRefs) that exist in one or more files with other texts, the contents of which consists of some fixed construct that is populated with elements derived from existing text constructs and/or other resources.">tool</a> will replace the text constructs that are located by its <a href="/tev2-specifications/docs/terms/interpreter" title="Interpreter: a Regex that is used to locate a particular text construct (such as a TermRef or MRGRef) in a text, and that populates Named Capturing Groups as specified in the Interpreter Profile of the particular Text Conversion Tool for which it is designed.">interpreter</a>."\n  grouptags: []\n  formPhrases:\n    - "converter-profile"\n    - "converter-profiles"\n    - "converter-profile-s"\n  status: "proposed"\n  scopetag: "termdsn"\n  locator: "converter-profile.md"\n  navurl: "https://tno-terminology-design.github.io/tev2-specifications/docs/terms/converter-profile"\n  headingids:\n    - "converter-profile"\n    - "object"\n    - "`err`-fields"\n    - "helpers"\n    - "capfirst"\n    - "ifvalue"\n    - "localize"\n    - "norefs"\n    - "regularize"\n  termid: "concept:converter-profile"\n  vsntag: "documentation"\nmrg:\n  scopetag: "tev2"\n  scopedir: "https://github.com/tno-terminology-design/tev2-specifications/tree/master/docs"\n  curatedir: "terms"\n  glossarydir: "glossaries"\n  defaultvsn: "documentation"\n  website: "https://tno-terminology-design.github.io/tev2-specifications/docs"\n  navpath: "/terms"\n  navid: "id"\n  license: "LICENSE.md"\n  statuses:\n    - "proposed"\n    - "approved"\n    - "deprecated"\n  defaulttype: "concept"\n  vsntag: "documentation"\n  altvsntags:\n    - "latest"\nerr:\n  file: "12-trrt.md"\n  dir: "/specs/tools"\n  line: 73\n  pos: 9\n  cause: ""\n'))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Section"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"int")),(0,o.kt)("td",{parentName:"tr",align:null},"(interpreter): includes the interpreter type ",(0,o.kt)("inlineCode",{parentName:"td"},"int.type"),' (either the name of a predefined interpreter, or "custom"), and the regex used to locate the reference ',(0,o.kt)("inlineCode",{parentName:"td"},"int.regex"),". The ",(0,o.kt)("inlineCode",{parentName:"td"},"noRefs")," helper, for instance, accesses the ",(0,o.kt)("inlineCode",{parentName:"td"},"int.regex")," to be used as the default type.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ref")),(0,o.kt)("td",{parentName:"tr",align:null},"(reference): the set of properties derived from the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/named-capturing-group",title:"Named Capturing Group: a sub-pattern within a Regex (called a 'Capturing Group') that has been given a name, allowing one to refer to that sub-pattern."},"named capturing groups")," by the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/interpreter",title:"Interpreter: a Regex that is used to locate a particular text construct (such as a TermRef or MRGRef) in a text, and that populates Named Capturing Groups as specified in the Interpreter Profile of the particular Text Conversion Tool for which it is designed."},"interpreter"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"entry")),(0,o.kt)("td",{parentName:"tr",align:null},"(MRG entry): all fields from the specific ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",title:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entry")," that was selected.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"mrg")),(0,o.kt)("td",{parentName:"tr",align:null},"(MRG): all fields from the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/specs/files/mrg#terminology",title:"Machine Readable Glossary: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the TEv2 MRG Specifications, to enable automated processing and integration with software systems."},"terminology section")," of the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/specs/files/mrg",title:"Machine Readable Glossary: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the TEv2 MRG Specifications, to enable automated processing and integration with software systems."},"mrg")," from which the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",title:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entry")," was taken.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"err")),(0,o.kt)("td",{parentName:"tr",align:null},"(error): various fields, as specified below, that can be used to construct output that helps users identify an error, and fix it.")))),(0,o.kt)("p",null,"Fields from the ",(0,o.kt)("inlineCode",{parentName:"p"},"entry")," section may also be used in ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/converter",title:"Converter: a specification, in the form of a Handlebars Template, for constructing a text that a particular Text Conversion Tool uses to create its output."},"converters")," without specifying ",(0,o.kt)("inlineCode",{parentName:"p"},"entry")," as a prefix (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"entry.term")," becomes ",(0,o.kt)("inlineCode",{parentName:"p"},"term"),"). Properties of ",(0,o.kt)("inlineCode",{parentName:"p"},"entry")," with identical names to sections of the converter profile object, are overwritten by the defined sections."),(0,o.kt)("h3",{id:"err-fields"},(0,o.kt)("inlineCode",{parentName:"h3"},"err")," fields"),(0,o.kt)("p",null,"When a file is being processed by a ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-text-conversion-tool",title:"TEv2 Text Conversion Tool: a TEv2 Tool whose purpose is to convert particular text constructs (such as TermRefs or MRGRefs) that exist in one or more files with other texts, the contents of which consists of some fixed construct that is populated with elements derived from existing text constructs and/or other resources."},"text conversion tool"),", it can happen that an input structure is found that cannot be associated with an ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",title:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entry"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"err")," section in a converter profile object contains fields that can help construct outputs that help users to identify, and fix, such errors, as follows."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Legend"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"Field"))," contains the field name;"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"Req'd"))," specifies whether (",(0,o.kt)("inlineCode",{parentName:"li"},"Y"),") or not (",(0,o.kt)("inlineCode",{parentName:"li"},"n"),", or ",(0,o.kt)("inlineCode",{parentName:"li"},"F"),") the field is always populated, or optional."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"Description"))," specifies the meaning of the field, and other things you may need to know, e.g. why it is needed, a required syntax, etc."))),(0,o.kt)(a.Z,{mdxType:"APITable"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Req'd"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"file")),(0,o.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Name of the file, including the extension, where the specific reference was found.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"dir")),(0,o.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Relative directory path from the location the tool was called to the directory where the ",(0,o.kt)("inlineCode",{parentName:"td"},"file")," was found.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"line")),(0,o.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Linenumber in the file where the reference was found.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"pos")),(0,o.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Position on the line of the start of the reference that was found.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"cause")),(0,o.kt)("td",{parentName:"tr",align:"center"},"n"),(0,o.kt)("td",{parentName:"tr",align:"left"},"A description of the cause of a possible error."))))))}f.isMDXComponent=!0}}]);