"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[8421],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>d});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(o),d=r,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return o?n.createElement(f,a(a({ref:t},p),{},{components:o})):n.createElement(f,a({ref:t},p))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=o[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},6527:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=o(3117),r=(o(7294),o(3905));const i={id:"tev2-readme",sidebar_label:"Contributing",date:20220402},a="Contributing to TEv2 Tools",s={unversionedId:"tev2-readme",id:"tev2-readme",title:"Contributing to TEv2 Tools",description:"This documentation is based on the ToIP TT-Tools Proposal memo, which we currently keep as a reference.",source:"@site/docs/README.md",sourceDirName:".",slug:"/",permalink:"/tev2-specifications/docs/",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/README.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1711961297,formattedLastUpdatedAt:"Apr 1, 2024",frontMatter:{id:"tev2-readme",sidebar_label:"Contributing",date:20220402}},c={},l=[],p={toc:l};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"contributing-to-tev2-tools"},"Contributing to TEv2 Tools"),(0,r.kt)("admonition",{title:"Editor's note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This documentation is based on the ",(0,r.kt)("a",{parentName:"p",href:"https://tno-terminology-design.github.io/tev2-specifications/docs/toip-terminology-toolbox"},"ToIP TT-Tools Proposal")," memo, which we currently keep as a reference.")),(0,r.kt)("p",null,"The '",(0,r.kt)("a",{parentName:"p",href:"https://tno-terminology-design.github.io/tev2-specifications/docs/category/introduction-overview"},"Terminology Engine v2 (TEv2)"),"' consists of two parts:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("a",{parentName:"li",href:"https://tno-terminology-design.github.io/tev2-specifications/docs/category/specs/tools"},"Terminology Toolbox")," is a set of (extendable) command-line tools that can be used for generic purposes, such as resolving ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermReferences"),", and creating glossaries."),(0,r.kt)("li",{parentName:"ol"},"The use of these, and other tools (in our case: ",(0,r.kt)("a",{parentName:"li",href:"https://docusaurus.io/"},"Docusaurus"),", and ",(0,r.kt)("a",{parentName:"li",href:"https://resources.github.com/ci-cd/"},"github CI/CD"),"), for facilitating the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/curate",title:"Curate: to select, organize, and present Terms, Definitions, and other, related content in a thoughtful and purposeful manner to establish shared understanding among a Community working together on a particular set of Objectives."},"curation")," of ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",title:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminologies")," by ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/terms-community",title:"Terms Community: a Community that maintains a Terminology for the purpose of avoiding misunderstandings between its members as they collaborate."},"terms communities"),".")),(0,r.kt)("p",null,"We are seeking parties that can contribute to the development of these (extendable) command-line tools, and do so in close collaboration with the eSSIF-Lab consortium. Please express your interest as an ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tno-terminology-design/tev2-specifications/issues"},"issue in the eSSIF-Lab repo"),"."))}u.isMDXComponent=!0}}]);