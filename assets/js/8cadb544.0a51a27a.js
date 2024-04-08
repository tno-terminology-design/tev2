"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[2879],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>u});var r=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function n(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,r,a=function(e,t){if(null==e)return{};var i,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):n(n({},t),e)),i},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(i),u=a,h=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return i?r.createElement(h,n(n({ref:t},p),{},{components:i})):r.createElement(h,n({ref:t},p))}));function u(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,n=new Array(o);n[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,n[1]=s;for(var l=2;l<o;l++)n[l]=i[l];return r.createElement.apply(null,n)}return r.createElement.apply(null,i)}m.displayName="MDXCreateElement"},6754:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=i(3117),a=(i(7294),i(3905));const o={id:"dictionary",displayed_sidebar:"tev2SideBar",term:"dictionary",termType:"concept",isa:null,glossaryTerm:"Dictionary",glossaryText:"an alphabetically sorted list of [terms](@) with various meanings that they may have in different contexts.",grouptags:[],formPhrases:["dictionar{yies}"],status:"proposed",created:20220606,updated:20220606,contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},n="Dictionary",s={unversionedId:"terms/dictionary",id:"terms/dictionary",title:"Dictionary",description:"Summary",source:"@site/docs/terms/dictionary.md",sourceDirName:"terms",slug:"/terms/dictionary",permalink:"/tev2-specifications/docs/terms/dictionary",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/terms/dictionary.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1712565027,formattedLastUpdatedAt:"Apr 8, 2024",frontMatter:{id:"dictionary",displayed_sidebar:"tev2SideBar",term:"dictionary",termType:"concept",isa:null,glossaryTerm:"Dictionary",glossaryText:"an alphabetically sorted list of [terms](@) with various meanings that they may have in different contexts.",grouptags:[],formPhrases:["dictionar{yies}"],status:"proposed",created:20220606,updated:20220606,contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},sidebar:"tev2SideBar"},c={},l=[{value:"Summary",id:"summary",level:3},{value:"Purpose",id:"purpose",level:3},{value:"Criteria",id:"criteria",level:3},{value:"Examples",id:"examples",level:3}],p={toc:l};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dictionary"},"Dictionary"),(0,a.kt)("h3",{id:"summary"},"Summary"),(0,a.kt)("p",null,"A Dictionary is an alphabetically sorted list of ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent Concepts."},"terms")," with explanations. Each term may have multiple such explanations, which come from different ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (or Party, which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scopes/contexts"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/patterns/terminology",title:"Terminology Pattern: a Mental Model that describes the relations between a Community, its (intangible) Knowledge, and the artifacts we use to document that Knowledge, such as Terms, Definitions, Mental Models, Glossaries, etc."},"terminology pattern")," provides an overview of how this ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/concept",title:"Concept: a Semantic Unit that captures the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same')."},"concept")," fits in with related ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/concept",title:"Concept: a Semantic Unit that captures the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same')."},"concepts"),"."),(0,a.kt)("h3",{id:"purpose"},"Purpose"),(0,a.kt)("p",null,"A dictionary helps people to get introduced in the domain for which the dictionary is created. Usually, this is a larger domain e.g. of some language, or about computer security."),(0,a.kt)("h3",{id:"criteria"},"Criteria"),(0,a.kt)("p",null,"an alphabetical list of words or phrases with possibly multiple, short explanations, that exists for the purpose of helping people to find out what a word may mean in various ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (or Party, which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scopes/contexts"),"."),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Examples include the ",(0,a.kt)("a",{parentName:"p",href:"https://csrc.nist.gov/glossary"},"NIST Computer Security Resource Center"),", ",(0,a.kt)("a",{parentName:"p",href:"https://www.merriam-webster.com/dictionary/"},"Merriam-Webster"),"."))}d.isMDXComponent=!0}}]);