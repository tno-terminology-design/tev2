"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[6854],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>h});var s=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,s)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,s,n=function(e,t){if(null==e)return{};var i,s,n={},a=Object.keys(e);for(s=0;s<a.length;s++)i=a[s],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)i=a[s],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var c=s.createContext({}),m=function(e){var t=s.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},p=function(e){var t=m(e.components);return s.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=m(i),h=n,u=d["".concat(c,".").concat(h)]||d[h]||l[h]||a;return i?s.createElement(u,r(r({ref:t},p),{},{components:i})):s.createElement(u,r({ref:t},p))}));function h(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,r=new Array(a);r[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,r[1]=o;for(var m=2;m<a;m++)r[m]=i[m];return s.createElement.apply(null,r)}return s.createElement.apply(null,i)}d.displayName="MDXCreateElement"},5525:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>a,metadata:()=>o,toc:()=>m});var s=i(3117),n=(i(7294),i(3905));const a={id:"semantics",displayed_sidebar:"tev2SideBar",term:"semantics",termType:"concept",isa:null,glossaryTerm:null,glossaryText:"a mapping between the (tangible/textual) [terms](@) and (intangible) ideas/[concepts](@) - their meaning.",grouptags:[],formPhrases:["semantics"],status:"proposed",created:20220606,updated:20220606,contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},r="Semantics",o={unversionedId:"terms/semantics",id:"terms/semantics",title:"Semantics",description:"Summary",source:"@site/docs/terms/semantics.md",sourceDirName:"terms",slug:"/terms/semantics",permalink:"/tev2-specifications/docs/terms/semantics",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/terms/semantics.md",tags:[],version:"current",lastUpdatedBy:"Ca5e",lastUpdatedAt:1710001438,formattedLastUpdatedAt:"Mar 9, 2024",frontMatter:{id:"semantics",displayed_sidebar:"tev2SideBar",term:"semantics",termType:"concept",isa:null,glossaryTerm:null,glossaryText:"a mapping between the (tangible/textual) [terms](@) and (intangible) ideas/[concepts](@) - their meaning.",grouptags:[],formPhrases:["semantics"],status:"proposed",created:20220606,updated:20220606,contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},sidebar:"tev2SideBar"},c={},m=[{value:"Summary",id:"summary",level:3},{value:"Purpose",id:"purpose",level:3},{value:"Criteria",id:"criteria",level:3}],p={toc:m};function l(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,s.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"semantics"},"Semantics"),(0,n.kt)("h3",{id:"summary"},"Summary"),(0,n.kt)("p",null,"We use the term ",(0,n.kt)("strong",{parentName:"p"},"semantics")," to refer to the mapping between (tangible) ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (identify) a specific Semantic Unit (in some Scope)."},"terms")," and (intangible) ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/concept",title:"Concept: a Semantic Unit that captures the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same')."},"concepts")," (their meaning, the ideas behind it). Semantics are scoped, i.e. every ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," has its own semantic mapping. This implies that every ",(0,n.kt)("a",{href:"https://essif-lab.github.io/framework/docs/terms/party",title:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples."},"party")," has - and maintains - its own (subjective) semantics, which is its subjective mapping of a set of terms onto the concepts/ideas in its ",(0,n.kt)("a",{href:"/framework/docs/terms/knowledge",title:"Knowledge: The (intangible) sum of what is known by a specific Party, as well as the familiarity, awareness or understanding of someone or something by that Party."},"knowledge"),". The (erroneous) assumption that ",(0,n.kt)("a",{href:"https://essif-lab.github.io/framework/docs/terms/party",title:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples."},"parties")," would (automagically) share a semantics is the cause of many misunderstandings, and hence should be identified and deleted as soon as possible."),(0,n.kt)("p",null,"In the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/patterns/terminology",title:"Terminology Pattern: a Mental Model that describes the relations between a Community, its (intangible) Knowledge, and the artifacts we use to document that Knowledge, such as Terms, Definitions, Mental Models, Glossaries, etc."},"terminology pattern"),", the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/relation",title:"Relation (between Concepts): a (significant) connection or association between two or more Concepts."},"relation")," ",(0,n.kt)("inlineCode",{parentName:"p"},"refers to")," from ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/scoped-term",title:"Scoped Term: a Term that represents (and identifies) a specific Semantic Unit of a particular Community (or Party)."},"scoped term")," to ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/concept",title:"Concept: a Semantic Unit that captures the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same')."},"concept")," represents the semantics of ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/scoped-term",title:"Scoped Term: a Term that represents (and identifies) a specific Semantic Unit of a particular Community (or Party)."},"scoped terms"),"."),(0,n.kt)("h3",{id:"purpose"},"Purpose"),(0,n.kt)("p",null,"The ability to distinguish between (non)semantics helps us to better understand one another, because it makes one aware of the fact that semantics is subjective, and its owner can update it. This allows such an owner to (temporarily) use terms in the same meaning as another ",(0,n.kt)("a",{href:"https://essif-lab.github.io/framework/docs/terms/party",title:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples."},"party"),", specifically if they agree to use ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/definition",title:"Definition: the combination of a Term and a descriptive text, where the Term refers to a Concept or other Semantic Unit, and the descriptive text enables a set of Parties to have the same understanding about that Concept. Ideally, the descriptive text is a criterion that such Parties can use to determine what is, and what is not, an instance (or example) of that Concept."},"good definitions"),"."),(0,n.kt)("h3",{id:"criteria"},"Criteria"),(0,n.kt)("p",null,"A semantics is a mapping, in a specific ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),", between (tangible) ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (identify) a specific Semantic Unit (in some Scope)."},"terms")," and (intangible) ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/concept",title:"Concept: a Semantic Unit that captures the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same')."},"concepts")," (their meaning, the ideas behind it)."))}l.isMDXComponent=!0}}]);