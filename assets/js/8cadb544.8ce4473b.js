"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[2879],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var i=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=i.createContext({}),l=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),u=a,h=d["".concat(c,".").concat(u)]||d[u]||m[u]||n;return r?i.createElement(h,o(o({ref:t},p),{},{components:r})):i.createElement(h,o({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<n;l++)o[l]=r[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6754:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var i=r(3117),a=(r(7294),r(3905));const n={id:"dictionary",displayed_sidebar:"tev2SideBar",term:"dictionary",termType:"concept",isa:null,glossaryTerm:null,glossaryText:"an alphabetically sorted list of [terms](@) with various meanings that they may have in different contexts.",grouptags:null,formPhrases:["dictionar{yies}"],status:"proposed",created:20220606,updated:20220606,contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},o="Dictionary",s={unversionedId:"terms/dictionary",id:"terms/dictionary",title:"Dictionary",description:"Summary",source:"@site/docs/terms/dictionary.md",sourceDirName:"terms",slug:"/terms/dictionary",permalink:"/tev2-specifications/docs/terms/dictionary",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/terms/dictionary.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1706596268,formattedLastUpdatedAt:"Jan 30, 2024",frontMatter:{id:"dictionary",displayed_sidebar:"tev2SideBar",term:"dictionary",termType:"concept",isa:null,glossaryTerm:null,glossaryText:"an alphabetically sorted list of [terms](@) with various meanings that they may have in different contexts.",grouptags:null,formPhrases:["dictionar{yies}"],status:"proposed",created:20220606,updated:20220606,contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},sidebar:"tev2SideBar"},c={},l=[{value:"Summary",id:"summary",level:3},{value:"Purpose",id:"purpose",level:3},{value:"Criteria",id:"criteria",level:3},{value:"Examples",id:"examples",level:3}],p={toc:l};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dictionary"},"Dictionary"),(0,a.kt)("h3",{id:"summary"},"Summary"),(0,a.kt)("p",null,"A Dictionary is an alphabetically sorted list of ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"terms")," with explanations. Each term may have multiple such explanations, which come from different ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scopes/contexts"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",title:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology pattern")," provides an overview of how this ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/concept",title:"Concept: a Semantic Unit that captures the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same')."},"concept")," fits in with related ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/concept",title:"Concept: a Semantic Unit that captures the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same')."},"concepts"),"."),(0,a.kt)("h3",{id:"purpose"},"Purpose"),(0,a.kt)("p",null,"A dictionary helps people to get introduced in the domain for which the dictionary is created. Usually, this is a larger domain e.g. of some language, or about computer security."),(0,a.kt)("h3",{id:"criteria"},"Criteria"),(0,a.kt)("p",null,"an alphabetical list of words or phrases with possibly multiple, short explanations, that exists for the purpose of helping people to find out what a word may mean in various ",(0,a.kt)("a",{parentName:"p",href:"@"},"scopes/contexts"),"."),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Examples include the ",(0,a.kt)("a",{parentName:"p",href:"https://csrc.nist.gov/glossary"},"NIST Computer Security Resource Center"),", ",(0,a.kt)("a",{parentName:"p",href:"https://www.merriam-webster.com/dictionary/"},"Merriam-Webster"),"."))}m.isMDXComponent=!0}}]);