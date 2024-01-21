"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[8466],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=c(a),h=s,p=m["".concat(l,".").concat(h)]||m[h]||u[h]||i;return a?n.createElement(p,r(r({ref:t},d),{},{components:a})):n.createElement(p,r({ref:t},d))}));function h(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=a.length,r=new Array(i);r[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,r[1]=o;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294),s=a(6010);const i="tabItem_Ymn6";function r(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,s.Z)(i,r),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>G});var n=a(3117),s=a(7294),i=a(6010),r=a(2466),o=a(6775),l=a(1980),c=a(7392),d=a(12);function u(e){return function(e){return s.Children.map(e,(e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:s}}=e;return{value:t,label:a,attributes:n,default:s}}))}function m(e){const{values:t,children:a}=e;return(0,s.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(i),(0,s.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=m(e),[r,o]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[l,c]=p({queryString:a,groupId:n}),[u,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,d.Nk)(a);return[n,(0,s.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),g=(()=>{const e=l??u;return h({value:e,tabValues:i})?e:null})();(0,s.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:r,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),f(e)}),[c,f,i]),tabValues:i}}var g=a(2389);const b="tabList__CuJ",y="tabItem_LNqP";function v(e){let{className:t,block:a,selectedValue:o,selectValue:l,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.o5)(),m=e=>{const t=e.currentTarget,a=d.indexOf(t),n=c[a].value;n!==o&&(u(t),l(n))},h=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:r}=e;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>d.push(e),onKeyDown:h,onClick:m},r,{className:(0,i.Z)("tabs__item",y,r?.className,{"tabs__item--active":o===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:n}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return s.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=f(e);return s.createElement("div",{className:(0,i.Z)("tabs-container",b)},s.createElement(v,(0,n.Z)({},e,t)),s.createElement(k,(0,n.Z)({},e,t)))}function G(e){const t=(0,g.Z)();return s.createElement(w,(0,n.Z)({key:String(t)},e))}},8833:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=a(3117),s=(a(7294),a(3905)),i=a(4996);a(4866),a(5162);const r={id:"hrg",sidebar_label:"HRG (Human Readable Glossary)",date:20220503},o="Human Readable Glossary (HRG)",l={unversionedId:"specs/files/hrg",id:"specs/files/hrg",title:"Human Readable Glossary (HRG)",description:"<img",source:"@site/docs/specs/files/32-hrg.md",sourceDirName:"specs/files",slug:"/specs/files/hrg",permalink:"/tev2-specifications/docs/specs/files/hrg",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/specs/files/32-hrg.md",tags:[],version:"current",lastUpdatedBy:"Ca5e",lastUpdatedAt:1705853396,formattedLastUpdatedAt:"Jan 21, 2024",sidebarPosition:32,frontMatter:{id:"hrg",sidebar_label:"HRG (Human Readable Glossary)",date:20220503},sidebar:"tev2SideBar",previous:{title:"SAF (Scope Admin File)",permalink:"/tev2-specifications/docs/specs/files/saf"},next:{title:"MRG (Machine Readable Glossary)",permalink:"/tev2-specifications/docs/specs/files/mrg"}},c={},d=[{value:"File naming conventions",id:"file-naming-conventions",level:2}],u={toc:d};function m(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"human-readable-glossary-hrg"},"Human Readable Glossary (HRG)"),(0,s.kt)("img",{alt:"This page is under construction",src:(0,i.Z)("images/wip/wip-under-construction.png")}),(0,s.kt)("br",null),(0,s.kt)("br",null),(0,s.kt)("p",null,"This document specifies the contents of the ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/hrg",title:"Human Readable Glossary: a Glossary that is designed to be easily understandable and accessible to humans. HRGs present terms and their meanings in a format that prioritizes human comprehension and may include additional contextual information to aid understanding."},"Human Readable Glossary")," file (",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/hrg",title:"Human Readable Glossary: a Glossary that is designed to be easily understandable and accessible to humans. HRGs present terms and their meanings in a format that prioritizes human comprehension and may include additional contextual information to aid understanding."},"HRG"),")."),(0,s.kt)("p",null,"A ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/hrg",title:"Human Readable Glossary: a Glossary that is designed to be easily understandable and accessible to humans. HRGs present terms and their meanings in a format that prioritizes human comprehension and may include additional contextual information to aid understanding."},"HRG")," is a ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/glossary",title:"Glossary: an alphabetically sorted list of Terms with the (single) meaning it has in (at least) one context."},"glossary")," is meant to be readable by humans, so that they can find out the meaning of ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"terms")," as they are used in the context in which that ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/glossary",title:"Glossary: an alphabetically sorted list of Terms with the (single) meaning it has in (at least) one context."},"glossary")," is valid. Thus, ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/hrg",title:"Human Readable Glossary: a Glossary that is designed to be easily understandable and accessible to humans. HRGs present terms and their meanings in a format that prioritizes human comprehension and may include additional contextual information to aid understanding."},"HRGs")," come in human readable formats, such as HTML or PDF."),(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/hrg",title:"Human Readable Glossary: a Glossary that is designed to be easily understandable and accessible to humans. HRGs present terms and their meanings in a format that prioritizes human comprehension and may include additional contextual information to aid understanding."},"HRGs")," are generated by the ",(0,s.kt)("a",{href:"/tev2-specifications/docs/specs/tools/hrgt",title:"Human Readable Glossary Tool: a software tool designed to create, manage, and process Human Readable Glossaries (HRGs), as Specified By TEv2. HRGTs offer features for selecting Terms that are Curated within the Scope it is run in, or from other Scopes."},"HRGT")," ",(0,s.kt)("a",{href:"/tev2-specifications/docs/specs/tools/hrgt",title:"Human Readable Glossary Tool: a software tool designed to create, manage, and process Human Readable Glossaries (HRGs), as Specified By TEv2. HRGTs offer features for selecting Terms that are Curated within the Scope it is run in, or from other Scopes."},"tool"),", which allows its output to be highly customized. For example, the tool expects that its user specifies",(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"the set of ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"terms")," that need to be included;"),(0,s.kt)("li",{parentName:"ul"},"the particular way in which a ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"term")," (and its description) appear in the ",(0,s.kt)("a",{href:"/tev2-specifications/docs/specs/tools/hrgt",title:"Human Readable Glossary Tool: a software tool designed to create, manage, and process Human Readable Glossaries (HRGs), as Specified By TEv2. HRGTs offer features for selecting Terms that are Curated within the Scope it is run in, or from other Scopes."},"HRGT")," "),(0,s.kt)("li",{parentName:"ul"},"any attributes (e.g. contributors, authors, license information etc.) need to be part of such a description, or need to be mentioned in the beginning or the end of the ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/hrg",title:"Human Readable Glossary: a Glossary that is designed to be easily understandable and accessible to humans. HRGs present terms and their meanings in a format that prioritizes human comprehension and may include additional contextual information to aid understanding."},"HRG")),(0,s.kt)("li",{parentName:"ul"},"etc.")),(0,s.kt)("h2",{id:"file-naming-conventions"},"File naming conventions"),(0,s.kt)("p",null,"Within (the ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/glossarydir",title:"Glossarydir: a directory within a Scopedir within which the different versions of its (Machine Readable and Human Readable) Glossaries are created and maintained."},"glossarydir")," of) a particular ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/scopedir",title:"Scopedir: a directory in a computer file system that contains all files that are either being Curated within a particular Scope, or generated to serve some purpose within that Scope."},"scopedir"),", we can generate (or import) and hence find all ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/hrg",title:"Human Readable Glossary: a Glossary that is designed to be easily understandable and accessible to humans. HRGs present terms and their meanings in a format that prioritizes human comprehension and may include additional contextual information to aid understanding."},"HRG"),"-files that are needed within that ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),". We use the following file naming convention:"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"hrg.<scopetag>.<vsntag>.<output>"))," is the name of a file that contains an actual ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/hrg",title:"Human Readable Glossary: a Glossary that is designed to be easily understandable and accessible to humans. HRGs present terms and their meanings in a format that prioritizes human comprehension and may include additional contextual information to aid understanding."},"HRG"),", or it is a file that links (references) such a file, where:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"strong"},"<scopetag>.<vsntag>"))," is taken from the ",(0,s.kt)("a",{href:"/tev2-specifications/docs/specs/files/mrg",title:"Machine Readable Glossary: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the TEv2 MRG Specifications, to enable automated processing and integration with software systems."},"MRG"),"-file from which the ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/hrg",title:"Human Readable Glossary: a Glossary that is designed to be easily understandable and accessible to humans. HRGs present terms and their meanings in a format that prioritizes human comprehension and may include additional contextual information to aid understanding."},"HRG")," is generated. See ",(0,s.kt)("a",{parentName:"li",href:"/docs/specs/files/mrg#file-naming-conventions"},"MRG file naming")," for details."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"strong"},"<output>"))," is a text that has been provided by the user that generated the ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/hrg",title:"Human Readable Glossary: a Glossary that is designed to be easily understandable and accessible to humans. HRGs present terms and their meanings in a format that prioritizes human comprehension and may include additional contextual information to aid understanding."},"HRG"),". It includes the file extension (e.g., PDF, HTML, etc.) that is appropriate for its contents. See ",(0,s.kt)("a",{href:"/tev2-specifications/docs/specs/tools/hrgt#calling-the-tool",title:"Human Readable Glossary Tool: a software tool designed to create, manage, and process Human Readable Glossaries (HRGs), as Specified By TEv2. HRGTs offer features for selecting Terms that are Curated within the Scope it is run in, or from other Scopes."},"HRG generation")," for details.")),(0,s.kt)("p",null,"This naming convention enables tools (as well as ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/curator",title:"Curator (of a Scope): a person responsible for curating, managing, and maintaining the Terminologies, to ensure shared understanding among a Community working together on a particular set of Objectives."},"curators")," and others) that operate within a particular ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),", to quickly find a particular ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/hrg",title:"Human Readable Glossary: a Glossary that is designed to be easily understandable and accessible to humans. HRGs present terms and their meanings in a format that prioritizes human comprehension and may include additional contextual information to aid understanding."},"HRG")," that is relevant for that ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),"."),(0,s.kt)("admonition",{title:"Editor's note",type:"info"},(0,s.kt)("p",{parentName:"admonition"},"We need to decide whether this document actually describes "),(0,s.kt)("ul",{parentName:"admonition"},(0,s.kt)("li",{parentName:"ul"},"(the possible structures of) HRGs, or"),(0,s.kt)("li",{parentName:"ul"},"the ways in which the generation of an HRG can be specified"))))}m.isMDXComponent=!0}}]);