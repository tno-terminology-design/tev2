"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[1482],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>d});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=i.createContext({}),p=function(e){var t=i.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,f=m["".concat(c,".").concat(d)]||m[d]||l[d]||r;return a?i.createElement(f,s(s({ref:t},h),{},{components:a})):i.createElement(f,s({ref:t},h))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var p=2;p<r;p++)s[p]=a[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6166:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var i=a(3117),n=(a(7294),a(3905));const r={term:"term-type",termType:"concept",isa:"identifier",glossaryTerm:"Term Type",glossaryText:"a [text](identifier@) that [identifies](@) a particular *kind* of [semantic unit](@) within a particular [scope](@). Examples include `concept`, `relation`, `pattern` (or `mental-model`).",synonymOf:null,grouptags:null,formPhrases:"term-type{ss}",status:"proposed",created:new Date("2022-06-06T00:00:00.000Z"),updated:new Date("2023-08-01T00:00:00.000Z"),contributors:"RieksJ",attribution:"[eSSIF-Lab](https://essif-lab.github.io/framework)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},s="Term Type",o={unversionedId:"terms/term-type",id:"terms/term-type",title:"Term Type",description:"A Term Type is an identifier that is used to identify a particular kind of semantic unit. Examples include concept, relation, pattern (or mental-model).",source:"@site/docs/terms/term-type.md",sourceDirName:"terms",slug:"/terms/term-type",permalink:"/tev2-specifications/docs/terms/term-type",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/terms/term-type.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1701095441,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{term:"term-type",termType:"concept",isa:"identifier",glossaryTerm:"Term Type",glossaryText:"a [text](identifier@) that [identifies](@) a particular *kind* of [semantic unit](@) within a particular [scope](@). Examples include `concept`, `relation`, `pattern` (or `mental-model`).",synonymOf:null,grouptags:null,formPhrases:"term-type{ss}",status:"proposed",created:"2022-06-06T00:00:00.000Z",updated:"2023-08-01T00:00:00.000Z",contributors:"RieksJ",attribution:"[eSSIF-Lab](https://essif-lab.github.io/framework)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},sidebar:"tev2SideBar",previous:{title:"Term Selection Instruction",permalink:"/tev2-specifications/docs/terms/term-selection-instruction"},next:{title:"Term",permalink:"/tev2-specifications/docs/terms/term"}},c={},p=[{value:"Default Term Type",id:"default-term-type",level:2},{value:"Recommended Term Types",id:"recommended-term-types",level:2}],h={toc:p};function l(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"term-type"},"Term Type"),(0,n.kt)("p",null,"A ",(0,n.kt)("strong",{parentName:"p"},"Term Type")," is an ",(0,n.kt)("a",{parentName:"p",href:"@"},"identifier")," that is used to ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/identify",hovertext:"Identify: an Act, by or on behalf of a Party, that results in the selection of either\n- a single Partial Identity that the party Owns, given some (observed or received) data, or\n- a single Entity from a given set of entities that is the Subject of a specified Partial Identity that the party Owns."},"identify")," a particular ",(0,n.kt)("em",{parentName:"p"},"kind")," of ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",hovertext:"a basic building block of meaning or representation that exists within the 'mind' of a party, e.g., a concept, relation, or property. Parties use terms (words/phrases) to refer to these intangible building blocks."},"semantic unit"),". Examples include ",(0,n.kt)("inlineCode",{parentName:"p"},"concept"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"relation"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"pattern")," (or ",(0,n.kt)("inlineCode",{parentName:"p"},"mental-model"),")."),(0,n.kt)("p",null,"The ability to specify a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term-type",hovertext:"Term Type: a Text that Identifies a particular *kind* of Semantic Unit within a particular Scope. Examples include `concept`, `relation`, `pattern` (or `mental-model`)."},"term type")," as part of a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"term")," mimicks the common practice of disambiguating semantically overloaded ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"terms"),". With in the context of ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/tev2",hovertext:"TEv2: a set of specifications and tools that caters for the Curation of Terminologies, as well as for its subsequent use in publications of different types (e.g. websites, whitepapers) and formats (e.g. html, LaTeX), as appropriate for different, individual Scopes."},"TEv2"),", this is currently not used."),(0,n.kt)("h2",{id:"default-term-type"},"Default Term Type"),(0,n.kt)("p",null,"Every ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",hovertext:"a basic building block of meaning or representation that exists within the 'mind' of a party, e.g., a concept, relation, or property. Parties use terms (words/phrases) to refer to these intangible building blocks."},"semantic unit")," that is described in a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",hovertext:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated text")," may be classified as a particular kind, by specifying the class in the ",(0,n.kt)("inlineCode",{parentName:"p"},"termtype"),"-field of its ",(0,n.kt)("a",{href:"/tev2-specifications/docs/spec-files/00-curated-text-file",hovertext:"Header (of a Curated Text): the part of a Curated Text, which is at the beginning of that text, that starts with a line that (only) contains three subsequent '-'characters, and that ends with a second occurrance of such a line. Headers live in Curated Text Files."},"header"),"."),(0,n.kt)("p",null,"Whenever the ",(0,n.kt)("inlineCode",{parentName:"p"},"termtype"),"-field is left empty, or is omitted, and the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",hovertext:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated text")," is used for generating an ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",hovertext:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entry"),", this ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",hovertext:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entry")," will include a ",(0,n.kt)("inlineCode",{parentName:"p"},"termtype")," field that has the default value for that scope. "),(0,n.kt)("p",null,"The default value is specified in the ",(0,n.kt)("inlineCode",{parentName:"p"},"defaulttype"),"-field in the ",(0,n.kt)("a",{parentName:"p",href:"/docs/spec-files/saf#scope-section"},"scope section")," of the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/saf",hovertext:"SAF: a YAML file that contains essential data about a particular scope, such as the locations of the scope's curated texts, glossaries, and the specifications of the curated terminologies. The SAF is located in the so-called scopedir."},"SAF"),". "),(0,n.kt)("h2",{id:"recommended-term-types"},"Recommended Term Types"),(0,n.kt)("p",null,"Every ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," is free to choose its own term type values. However, in order to ensure interoperability as much as possible, we recommend to use any of the ones as defined below:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"name"),(0,n.kt)("th",{parentName:"tr",align:null},"this is a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",hovertext:"a basic building block of meaning or representation that exists within the 'mind' of a party, e.g., a concept, relation, or property. Parties use terms (words/phrases) to refer to these intangible building blocks."},"semantic unit")," that captures"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"concept")),(0,n.kt)("td",{parentName:"tr",align:null},"an idea/thought behind a classification of ",(0,n.kt)("a",{href:"https://essif-lab.github.io/framework/docs/terms/entity",hovertext:"Entity: someone or something that is known to exist."},"entities")," (what makes ",(0,n.kt)("a",{href:"https://essif-lab.github.io/framework/docs/terms/entity",hovertext:"Entity: someone or something that is known to exist."},"entities")," in that class 'the same') (see: ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/concept",hovertext:"Concept: a Semantic Unit that captures the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same')."},"concept"),").")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"relation")),(0,n.kt)("td",{parentName:"tr",align:null},"a (significant) connection or association between two or more ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/concept",hovertext:"Concept: a Semantic Unit that captures the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same')."},"concepts")," (see: ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/relation",hovertext:"Relation (between Concepts): a (significant) connection or association between two or more Concepts. These connections define the way these Concepts are interrelated, providing insights into how they interact and influence each other."},"relation"),").")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"property")),(0,n.kt)("td",{parentName:"tr",align:null},"a connection or association between a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/concept",hovertext:"Concept: a Semantic Unit that captures the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same')."},"concept")," and a primitive data element, such as a text or a number, that represents some characteristic that instances of the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/concept",hovertext:"Concept: a Semantic Unit that captures the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same')."},"concept")," may have (see: ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/property",hovertext:"Property (of a Concept): a connection or association between a Concept and a primitive data element, such as a text or a number, that represents some characteristic that instances of the Concept may have."},"property"),").")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"pattern")),(0,n.kt)("td",{parentName:"tr",align:null},"a (coherent) set ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/concept",hovertext:"Concept: a Semantic Unit that captures the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same')."},"concepts")," (ideas), ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/property",hovertext:"Property (of a Concept): a connection or association between a Concept and a primitive data element, such as a text or a number, that represents some characteristic that instances of the Concept may have."},"properties"),", ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/relation",hovertext:"Relation (between Concepts): a (significant) connection or association between two or more Concepts. These connections define the way these Concepts are interrelated, providing insights into how they interact and influence each other."},"relations")," between ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/concept",hovertext:"Concept: a Semantic Unit that captures the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same')."},"concepts"),", and constraints, which together apply to a certain topic (see: ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/mental-model",hovertext:"Mental Model: a Semantic Unit that relates a set of Concepts (ideas), Relations between them, and constraints about a certain topic, into a coherent and consistent whole (sometimes called 'viewpoint', or 'way of thinking')."},"pattern"),").")))))}l.isMDXComponent=!0}}]);