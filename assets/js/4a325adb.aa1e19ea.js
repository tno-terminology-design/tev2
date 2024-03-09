"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[9487],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var i=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,o=function(e,t){if(null==e)return{};var a,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=i.createContext({}),l=function(e){var t=i.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(a),f=o,h=m["".concat(c,".").concat(f)]||m[f]||d[f]||n;return a?i.createElement(h,r(r({ref:t},p),{},{components:a})):i.createElement(h,r({ref:t},p))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,r=new Array(n);r[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<n;l++)r[l]=a[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4875:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>r,mark:()=>d,metadata:()=>c,toc:()=>p});var i=a(3117),o=(a(7294),a(3905)),n=a(4996);const r={id:"hrdt",sidebar_label:"HR Dictionary Generation",date:20220801},s="Human Readable Dictionary Generation Tool",c={unversionedId:"specs/tools-envisaged/hrdt",id:"specs/tools-envisaged/hrdt",title:"Human Readable Dictionary Generation Tool",description:"<img",source:"@site/docs/specs/tools-envisaged/32-hrdt.md",sourceDirName:"specs/tools-envisaged",slug:"/specs/tools-envisaged/hrdt",permalink:"/tev2-specifications/docs/specs/tools-envisaged/hrdt",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/specs/tools-envisaged/32-hrdt.md",tags:[],version:"current",lastUpdatedBy:"Ca5e",lastUpdatedAt:1710001438,formattedLastUpdatedAt:"Mar 9, 2024",sidebarPosition:32,frontMatter:{id:"hrdt",sidebar_label:"HR Dictionary Generation",date:20220801},sidebar:"tev2SideBar",previous:{title:"MR Dictionary Generation",permalink:"/tev2-specifications/docs/specs/tools-envisaged/mrdt"},next:{title:"Glossary",permalink:"/tev2-specifications/docs/tev2-glossary"}},l={},p=[],d=e=>{let{children:t}=e;return(0,o.kt)("span",{style:{color:"black",backgroundColor:"yellow",padding:"0.2rem",borderRadius:"2px"}},t)},m={toc:p,mark:d};function f(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"human-readable-dictionary-generation-tool"},"Human Readable Dictionary Generation Tool"),(0,o.kt)("img",{alt:"This page is under construction",src:(0,n.Z)("images/wip/wip-under-construction.png")}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Human Readable Dictionary generation Tool (",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/hrdt",title:"Human Readable Dictionary Tool: a software tool designed to create, manage, and process Human Readable Dictionaries (HRDs)."},"HRDT"),")")," generates a Human Readable ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/dictionary",title:"Dictionary: an alphabetically sorted list of Terms with various meanings that they may have in different contexts."},"Dictionary")," (",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/hrd",title:"Human Readable Dictionary: a Dictionary that presents terms and their meanings in a format that is easily understandable and accessible to humans, typically organized alphabetically."},"HRD"),"), that renders the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (identify) a specific Semantic Unit (in some Scope)."},"terms")," from a ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/mrd",title:"Machine Readable Dictionary: a type of Dictionary that is formatted in a way that can be easily processed and interpreted by computers or software programs. It uses the YAML format to represent the Terms and their meanings."},"machine readable dictionary (MRD)")," into one of several formats, e.g. HTML, or PDF. This rendering may be subject to further processing by third-party rendering tools, such as ",(0,o.kt)("a",{parentName:"p",href:"https://pages.github.com/"},"github pages")," or ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/docs-introduction"},"Docusaurus"),", etc. (see also: ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-toolbox",title:"TEv2 Toolbox: the collection of tools designed to support and facilitate the process of terminology management following the TEv2 Specifications."},"Using the Tools"),")."),(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/hrd",title:"Human Readable Dictionary: a Dictionary that presents terms and their meanings in a format that is easily understandable and accessible to humans, typically organized alphabetically."},"HRDs")," can be created for different purposes, e.g. to",(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"compare ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",title:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminologies")," between different ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scopes"),", which helps e.g. when aligning ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",title:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminologies")," between them."),(0,o.kt)("li",{parentName:"ul"},"provide an overview of what various ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scopes")," utilize specific ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (identify) a specific Semantic Unit (in some Scope)."},"terms")," for (education).")),(0,o.kt)("p",null,"And there's certainly going to be more such purposes."),(0,o.kt)("admonition",{title:"Editor's note",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Before this tool can really be properly specified, it may help to do some experiments to see what is really needed in order to keep it as simple as possible, and only then start proper specifications.")))}f.isMDXComponent=!0}}]);