"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[2352],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>u});var o=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,s=function(e,t){if(null==e)return{};var r,o,s={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=o.createContext({}),p=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},l=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,s=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),m=p(r),u=s,h=m["".concat(c,".").concat(u)]||m[u]||d[u]||i;return r?o.createElement(h,n(n({ref:t},l),{},{components:r})):o.createElement(h,n({ref:t},l))}));function u(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=r.length,n=new Array(i);n[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:s,n[1]=a;for(var p=2;p<i;p++)n[p]=r[p];return o.createElement.apply(null,n)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2206:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var o=r(3117),s=(r(7294),r(3905));const i={id:"corpus",displayed_sidebar:"tev2SideBar",term:"corpus",termType:"concept",isa:null,glossaryTerm:null,glossaryText:"the documentation that describes the [knowledge](@essif-lab) around a set of [terms](@) and [concepts](@).",grouptags:[],formPhrases:["corpus","corpora","corpus-of-terminology","corpus-of-a-terminology","terminology corpus"],status:"proposed",created:20220606,updated:20220606,contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},n="Corpus",a={unversionedId:"terms/corpus",id:"terms/corpus",title:"Corpus",description:"Short Description",source:"@site/docs/terms/corpus.md",sourceDirName:"terms",slug:"/terms/corpus",permalink:"/tev2-specifications/docs/terms/corpus",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/terms/corpus.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1710496018,formattedLastUpdatedAt:"Mar 15, 2024",frontMatter:{id:"corpus",displayed_sidebar:"tev2SideBar",term:"corpus",termType:"concept",isa:null,glossaryTerm:null,glossaryText:"the documentation that describes the [knowledge](@essif-lab) around a set of [terms](@) and [concepts](@).",grouptags:[],formPhrases:["corpus","corpora","corpus-of-terminology","corpus-of-a-terminology","terminology corpus"],status:"proposed",created:20220606,updated:20220606,contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},sidebar:"tev2SideBar"},c={},p=[{value:"Short Description",id:"short-description",level:2},{value:"Purpose",id:"purpose",level:2},{value:"Acknowledgements",id:"acknowledgements",level:2}],l={toc:p};function d(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"corpus"},"Corpus"),(0,s.kt)("h2",{id:"short-description"},"Short Description"),(0,s.kt)("p",null,"The ",(0,s.kt)("strong",{parentName:"p"},"Corpus")," or ",(0,s.kt)("strong",{parentName:"p"},"Corpus of Terminology")," is the documentation that describes the ",(0,s.kt)("a",{href:"/framework/docs/terms/knowledge",title:"Knowledge: The (intangible) sum of what is known by a specific Party, as well as the familiarity, awareness or understanding of someone or something by that Party."},"knowledge")," around a set of ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent Concepts."},"terms")," and ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/concept",title:"Concept: a Semantic Unit that captures the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same')."},"concepts"),". It is typically governed by conventions that are specified by a group of ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/terms-community",title:"Terms Community: a Community that maintains a Terminology for the purpose of avoiding misunderstandings between its members as they collaborate."},"terms communities"),", such as ",(0,s.kt)("a",{parentName:"p",href:"https://wiki.trustoverip.org/pages/viewpage.action?pageId=65700"},"TOIP's Concepts and Terminology Working Group"),"."),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/patterns/terminology",title:"Terminology Pattern: a Mental Model that describes the relations between a Community, its (intangible) Knowledge, and the artifacts we use to document that Knowledge, such as Terms, Definitions, Mental Models, Glossaries, etc."},"terminology pattern")," relates this concept with other terminological ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/concept",title:"Concept: a Semantic Unit that captures the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same')."},"concepts"),"."),(0,s.kt)("h2",{id:"purpose"},"Purpose"),(0,s.kt)("p",null,"The purpose of having a ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/corpus",title:"Corpus: the documentation that describes the Knowledge around a set of Terms and Concepts."},"corpus")," is that it allows for the development of tools that support ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/author",title:"Author: a person that creates a text that is meant to be read and understood by others - usually, a particular audience."},"authors")," and groups of people to better communicate, by enabling them to refer to the ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/definition",title:"Definition: the combination of a Term and a descriptive text, where the Term refers to a Concept or other Semantic Unit, and the descriptive text enables a set of Parties to have the same understanding about that Concept. Ideally, the descriptive text is a criterion that such Parties can use to determine what is, and what is not, an instance (or example) of that Concept."},"definition")," of a ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent Concepts."},"term")," whenever that ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent Concepts."},"term")," is used. This is particularly beneficial when a specific ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent Concepts."},"term")," can be interpreted in different ways (according to different ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/definition",title:"Definition: the combination of a Term and a descriptive text, where the Term refers to a Concept or other Semantic Unit, and the descriptive text enables a set of Parties to have the same understanding about that Concept. Ideally, the descriptive text is a criterion that such Parties can use to determine what is, and what is not, an instance (or example) of that Concept."},"definitions"),")."),(0,s.kt)("p",null,"Tools that we envisage will query for ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent Concepts."},"terms")," from the ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/corpus",title:"Corpus: the documentation that describes the Knowledge around a set of Terms and Concepts."},"corpus"),", and use that e.g. to create a custom ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/glossary",title:"Glossary: an alphabetically sorted list of Terms with the (single) meaning it has in (at least) one context."},"glossary")," document, a ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",title:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology")," appendix in a paper you write, or as a resource from which you generate pop-up balloons in a website you create."),(0,s.kt)("h2",{id:"acknowledgements"},"Acknowledgements"),(0,s.kt)("p",null,"Part of the description is taken from ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/trustoverip/ctwg/wiki//corpus"},"TOIP CTWG")))}d.isMDXComponent=!0}}]);