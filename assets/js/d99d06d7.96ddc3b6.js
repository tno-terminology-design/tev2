"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[4422],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>f});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var c=n.createContext({}),m=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},p=function(e){var t=m(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),l=m(i),f=a,h=l["".concat(c,".").concat(f)]||l[f]||d[f]||s;return i?n.createElement(h,r(r({ref:t},p),{},{components:i})):n.createElement(h,r({ref:t},p))}));function f(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=i.length,r=new Array(s);r[0]=l;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var m=2;m<s;m++)r[m]=i[m];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}l.displayName="MDXCreateElement"},1997:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>m});var n=i(3117),a=(i(7294),i(3905));const s={id:"termid",displayed_sidebar:"tev2SideBar",term:"termid",termType:"concept",isa:"identifier",glossaryTerm:null,glossaryText:"a text of the form `<termType>:<term>` that serves as an unambiguous [identifier](@) for a specific [semantic unit](@) in some given [scope](@).",grouptags:[],formPhrases:["termid{ss}","term-id{ss}"],status:"proposed",created:20220606,updated:20220809,contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},r="Term-ID",o={unversionedId:"terms/termid",id:"terms/termid",title:"Term-ID",description:"A Term-ID is a text of the form : that serves as an unambiguous identifier for a specific semantic unit in some given scope, where ` represents a term type, and ` is a term.",source:"@site/docs/terms/termid.md",sourceDirName:"terms",slug:"/terms/termid",permalink:"/tev2-specifications/docs/terms/termid",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/terms/termid.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1706852624,formattedLastUpdatedAt:"Feb 2, 2024",frontMatter:{id:"termid",displayed_sidebar:"tev2SideBar",term:"termid",termType:"concept",isa:"identifier",glossaryTerm:null,glossaryText:"a text of the form `<termType>:<term>` that serves as an unambiguous [identifier](@) for a specific [semantic unit](@) in some given [scope](@).",grouptags:[],formPhrases:["termid{ss}","term-id{ss}"],status:"proposed",created:20220606,updated:20220809,contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},sidebar:"tev2SideBar"},c={},m=[],p={toc:m};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"term-id"},"Term-ID"),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"Term-ID")," is a text of the form ",(0,a.kt)("inlineCode",{parentName:"p"},"<termType>:<term>")," that serves as an unambiguous ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/identifier",title:"Identifier: a character string that is being used for the identification of some Entity (yet may refer to 0, 1, or more Entities, depending on the context within which it is being used)."},"identifier")," for a specific ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",title:"Semantic Unit: a basic building block of meaning or representation that exists within the 'mind' of a Party (i.e., in its Knowledge). Examples include ideas, or Concepts, Properties of Concepts, Relations between Concepts, constraints over such Concepts and Relations, etc."},"semantic unit")," in some given ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),", where ",(0,a.kt)("inlineCode",{parentName:"p"},"<termType>")," represents a ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/term-type",title:"Term Type: a Text that Identifies a particular *kind* of Semantic Unit within a particular Scope. Examples include `concept`, `relation`, `pattern` (or `mental-model`)."},"term type"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"<term>")," is a ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"term"),"."),(0,a.kt)("p",null,"The reason for having term-ids is that a ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"term")," may be ambiguous within (a ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",title:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology"),") of some ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),". For example, terms such as ",(0,a.kt)("inlineCode",{parentName:"p"},"jurisdiction"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"identifier"),", etc. could refer to a ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/concept",title:"Concept: a Semantic Unit that captures the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same')."},"concept"),", but equally well to a ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/mental-model",title:"Mental Model: a Semantic Unit that relates a set of Concepts (ideas), Relations between them, and constraints about a certain topic, into a coherent and consistent whole (sometimes called 'viewpoint', or 'way of thinking')."},"mental model"),", or a ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/relation",title:"Relation (between Concepts): a (significant) connection or association between two or more Concepts. These connections define the way these Concepts are interrelated, providing insights into how they interact and influence each other."},"relation")," that links some ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/concept",title:"Concept: a Semantic Unit that captures the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same')."},"concepts"),"."),(0,a.kt)("p",null,"Every ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",title:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entry")," in an ",(0,a.kt)("a",{href:"/tev2-specifications/docs/specs/files/mrg",title:"Machine Readable Glossary: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the TEv2 MRG Specifications, to enable automated processing and integration with software systems."},"MRG")," has a field ",(0,a.kt)("inlineCode",{parentName:"p"},"termid")," that contains the ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/termid",title:"Termid: a text of the form `<termType>:<term>` that serves as an unambiguous Identifier for a specific Semantic Unit in some given Scope."},"term-ID")," of the ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",title:"Semantic Unit: a basic building block of meaning or representation that exists within the 'mind' of a Party (i.e., in its Knowledge). Examples include ideas, or Concepts, Properties of Concepts, Relations between Concepts, constraints over such Concepts and Relations, etc."},"semantic unit")," that the ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",title:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entry")," is about. Its value is constructed by the ",(0,a.kt)("a",{href:"/tev2-specifications/docs/specs/tools/mrgt",title:"Machine Readable Glossary Tool: a software tool designed to create, manage, and process Machine Readable Glossaries (MRGs), as Specified By TEv2. MRGTs offer features for selecting Terms that are Curated within the Scope it is run in, or from other Scopes."},"MRGT")," - see"))}d.isMDXComponent=!0}}]);