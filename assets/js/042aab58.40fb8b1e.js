"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[6854],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),m=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=m(e.components);return i.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},l=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),l=m(n),d=a,u=l["".concat(c,".").concat(d)]||l[d]||h[d]||s;return n?i.createElement(u,r(r({ref:t},p),{},{components:n})):i.createElement(u,r({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,r=new Array(s);r[0]=l;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var m=2;m<s;m++)r[m]=n[m];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}l.displayName="MDXCreateElement"},5525:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>m});var i=n(3117),a=(n(7294),n(3905));const s={term:"semantics",termType:"concept",isa:null,glossaryTerm:null,glossaryText:"a mapping between the (tangible/textual) [terms](@) and (intangible) ideas/[concepts](@) - their meaning.",synonymOf:null,grouptags:null,formPhrases:"semantics",status:"proposed",created:new Date("2022-06-06T00:00:00.000Z"),updated:new Date("2022-06-06T00:00:00.000Z"),contributors:"RieksJ",attribution:"[eSSIF-Lab](https://essif-lab.github.io/framework)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},r="Semantics",o={unversionedId:"terms/semantics",id:"terms/semantics",title:"Semantics",description:"Summary",source:"@site/docs/terms/semantics.md",sourceDirName:"terms",slug:"/terms/semantics",permalink:"/tev2-specifications/docs/terms/semantics",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/terms/semantics.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1701892704,formattedLastUpdatedAt:"Dec 6, 2023",frontMatter:{term:"semantics",termType:"concept",isa:null,glossaryTerm:null,glossaryText:"a mapping between the (tangible/textual) [terms](@) and (intangible) ideas/[concepts](@) - their meaning.",synonymOf:null,grouptags:null,formPhrases:"semantics",status:"proposed",created:"2022-06-06T00:00:00.000Z",updated:"2022-06-06T00:00:00.000Z",contributors:"RieksJ",attribution:"[eSSIF-Lab](https://essif-lab.github.io/framework)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},sidebar:"tev2SideBar",previous:{title:"Semantic Unit",permalink:"/tev2-specifications/docs/terms/semantic-unit"},next:{title:"Synonym",permalink:"/tev2-specifications/docs/terms/synonym"}},c={},m=[{value:"Summary",id:"summary",level:3},{value:"Purpose",id:"purpose",level:3},{value:"Criteria",id:"criteria",level:3}],p={toc:m};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"semantics"},"Semantics"),(0,a.kt)("h3",{id:"summary"},"Summary"),(0,a.kt)("p",null,"We use the term ",(0,a.kt)("strong",{parentName:"p"},"semantics")," to refer to the mapping between (tangible) ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"terms")," and (intangible) ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/concept",hovertext:"Concept: a Semantic Unit that captures the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same')."},"concepts")," (their meaning, the ideas behind it). Semantics are scoped, i.e. every ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," has its own semantic mapping. This implies that every ",(0,a.kt)("a",{href:"https://essif-lab.github.io/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples."},"party")," has - and maintains - its own (subjective) semantics, which is its subjective mapping of a set of terms onto the concepts/ideas in its ",(0,a.kt)("a",{href:"https://essif-lab.github.io/framework/docs/terms/knowledge",hovertext:"Knowledge: The (intangible) sum of what is known by a specific Party, as well as the familiarity, awareness or understanding of someone or something by that Party."},"knowledge"),". The (erroneous) assumption that ",(0,a.kt)("a",{href:"https://essif-lab.github.io/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples."},"parties")," would (automagically) share a semantics is the cause of many misunderstandings, and hence should be identified and deleted as soon as possible."),(0,a.kt)("p",null,"In the ",(0,a.kt)("a",{parentName:"p",href:"pattern-terminology@"},"terminology pattern"),", the ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/relation",hovertext:"Relation (between Concepts): a (significant) connection or association between two or more Concepts. These connections define the way these Concepts are interrelated, providing insights into how they interact and influence each other."},"relation")," ",(0,a.kt)("inlineCode",{parentName:"p"},"refers to")," from ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/scoped-term",hovertext:"Scoped Term: a Term that represents (and Identifies) a specific Semantic Unit of a particular Community (or Party)."},"scoped term")," to ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/concept",hovertext:"Concept: a Semantic Unit that captures the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same')."},"concept")," represents the semantics of ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/scoped-term",hovertext:"Scoped Term: a Term that represents (and Identifies) a specific Semantic Unit of a particular Community (or Party)."},"scoped terms"),"."),(0,a.kt)("h3",{id:"purpose"},"Purpose"),(0,a.kt)("p",null,"The ability to distinguish between (non)semantics helps us to better understand one another, because it makes one aware of the fact that semantics is subjective, and its owner can update it. This allows such an owner to (temporarily) use terms in the same meaning as another ",(0,a.kt)("a",{href:"https://essif-lab.github.io/framework/docs/terms/party",hovertext:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples."},"party"),", specifically if they agree to use ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/definition",hovertext:"Definition: the combination of a Term and a descriptive text, where the Term refers to a Concept or other Semantic Unit, and the descriptive text enables a set of Parties to have the same understanding about that Concept. Ideally, the descriptive text is a criterion that such Parties can use to determine what is, and what is not, an instance (or example) of that Concept."},"good definitions"),"."),(0,a.kt)("h3",{id:"criteria"},"Criteria"),(0,a.kt)("p",null,"A semantics is a mapping, in a specific ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),", between (tangible) ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"terms")," and (intangible) ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/concept",hovertext:"Concept: a Semantic Unit that captures the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same')."},"concepts")," (their meaning, the ideas behind it)."))}h.isMDXComponent=!0}}]);