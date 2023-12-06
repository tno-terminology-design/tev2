"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[5516],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>l});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=r.createContext({}),m=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=m(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,c=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),f=m(a),l=i,p=f["".concat(c,".").concat(l)]||f[l]||d[l]||n;return a?r.createElement(p,s(s({ref:t},h),{},{components:a})):r.createElement(p,s({ref:t},h))}));function l(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,s=new Array(n);s[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var m=2;m<n;m++)s[m]=a[m];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},2369:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>o,toc:()=>m});var r=a(3117),i=(a(7294),a(3905));const n={term:"synonym",termType:"concept",isa:"term",glossaryTerm:null,glossaryText:"a [term](@) that has the same (or sufficiently similar) meaning as another [term](@).",synonymOf:null,grouptags:null,formPhrases:"synonym{ss}",status:"proposed",created:new Date("2022-11-27T00:00:00.000Z"),updated:new Date("2022-11-27T00:00:00.000Z"),contributors:"RieksJ",attribution:"[eSSIF-Lab](https://essif-lab.github.io/framework)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},s="Synonym",o={unversionedId:"terms/synonym",id:"terms/synonym",title:"Synonym",description:"Summary",source:"@site/docs/terms/synonym.md",sourceDirName:"terms",slug:"/terms/synonym",permalink:"/tev2-specifications/docs/terms/synonym",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/terms/synonym.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1701892704,formattedLastUpdatedAt:"Dec 6, 2023",frontMatter:{term:"synonym",termType:"concept",isa:"term",glossaryTerm:null,glossaryText:"a [term](@) that has the same (or sufficiently similar) meaning as another [term](@).",synonymOf:null,grouptags:null,formPhrases:"synonym{ss}",status:"proposed",created:"2022-11-27T00:00:00.000Z",updated:"2022-11-27T00:00:00.000Z",contributors:"RieksJ",attribution:"[eSSIF-Lab](https://essif-lab.github.io/framework)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},sidebar:"tev2SideBar",previous:{title:"Semantics",permalink:"/tev2-specifications/docs/terms/semantics"},next:{title:"Tag",permalink:"/tev2-specifications/docs/terms/tag"}},c={},m=[{value:"Summary",id:"summary",level:2},{value:"The <code>synonymOf</code> field",id:"synonym-of",level:2},{value:"How Synonyms Work",id:"how-synonyms-work",level:2},{value:"Purpose",id:"purpose",level:2}],h={toc:m};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"synonym"},"Synonym"),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"synonym")," is a ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"term")," that has the same (or sufficiently similar) meaning as another ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"term")," (of which it is the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/synonym",hovertext:"Synonym: a Term that has the same (or sufficiently similar) meaning as another Term."},"synonym"),")."),(0,i.kt)("p",null,"While from a theoretical point of view a ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"term")," and its ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/synonym",hovertext:"Synonym: a Term that has the same (or sufficiently similar) meaning as another Term."},"synonyms")," are identical, in practice they are more 'equivalent', i.e. while they have the same meaning, when using one or the other in a sentence, there is often one term that is preferred over the other."),(0,i.kt)("h2",{id:"synonym-of"},"The ",(0,i.kt)("inlineCode",{parentName:"h2"},"synonymOf")," field"),(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",hovertext:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"Curated texts")," have an (optional) `synonymOf`-field in their ",(0,i.kt)("a",{href:"/tev2-specifications/docs/spec-files/curated-text-file",hovertext:"Header (of a Curated Text): the part of a Curated Text, which is at the beginning of that text, that starts with a line that (only) contains three subsequent '-'characters, and that ends with a second occurrance of such a line. Headers live in Curated Text Files."},"headers"),". The contents of that field must be the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/spec-syntax/term-identifier-syntax",hovertext:"Term Identifier: a Text, of the form `<termid>@<terminology-identifier>`, that is used for Identifying a Semantic Unit within a designated Terminology. If `@<terminology-identifier>` is omitted, the current (or default) Terminology is assumed."},"term identifier")," that can be dereferenced from the current ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," to the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",hovertext:"a basic building block of meaning or representation that exists within the 'mind' of a party, e.g., a concept, relation, or property. Parties use terms (words/phrases) to refer to these intangible building blocks."},"semantic unit")," (or associated ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",hovertext:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entry"),") for which the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"term")," that is being documented is a synonym.",(0,i.kt)("h2",{id:"how-synonyms-work"},"How Synonyms Work"),(0,i.kt)("p",null,"Consider a ",(0,i.kt)("inlineCode",{parentName:"p"},"synonym"),", i.e., a ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",hovertext:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated text")," that has a ",(0,i.kt)("inlineCode",{parentName:"p"},"synonymOf")," field that contains a dereferenceable ",(0,i.kt)("a",{href:"/tev2-specifications/docs/spec-syntax/term-identifier-syntax",hovertext:"Term Identifier: a Text, of the form `<termid>@<terminology-identifier>`, that is used for Identifying a Semantic Unit within a designated Terminology. If `@<terminology-identifier>` is omitted, the current (or default) Terminology is assumed."},"term identifier"),". Let's say that the ",(0,i.kt)("inlineCode",{parentName:"p"},"original")," is what the ",(0,i.kt)("inlineCode",{parentName:"p"},"synonym")," is a synonym of. Here's how we construct an ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",hovertext:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entry")," for the ",(0,i.kt)("inlineCode",{parentName:"p"},"synonym")," (assuming that the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",hovertext:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entry")," of the original exists:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Creating a copy of the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",hovertext:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entry")," of the ",(0,i.kt)("inlineCode",{parentName:"li"},"original"),"."),(0,i.kt)("li",{parentName:"ol"},"Copy all fields in the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/spec-files/curated-text-file",hovertext:"Header (of a Curated Text): the part of a Curated Text, which is at the beginning of that text, that starts with a line that (only) contains three subsequent '-'characters, and that ends with a second occurrance of such a line. Headers live in Curated Text Files."},"header")," of the ",(0,i.kt)("inlineCode",{parentName:"li"},"synonym")," into that copy, overwriting fields that already exist."),(0,i.kt)("li",{parentName:"ol"},"Add all required ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",hovertext:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entry")," fields as usual, possibly (again) overwriting fields that already exist.")),(0,i.kt)("p",null,"This way of working allows ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/curator",hovertext:"Curator: a person responsible for curating, managing, and maintaining the Terminologies, to ensure shared understanding among a Community working together on a particular set of objectives."},"curators")," to tailor specific fields, such as the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/glossarytext",hovertext:"Glossarytext: a human readable text that will be used as the Definition for a particular Term, as presented in a HRG."},"glossary texts")," field, or the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/formphrase",hovertext:"Form Phrase (of a Term): a word or phrase, other than the actual Term that, when used in a TermRef would typically also refer to this Term. Form phrases may include plural forms, possessive extensions, verb-conjugation forms, and other variations."},"form phrases")," fields for the ",(0,i.kt)("inlineCode",{parentName:"p"},"synonym"),"."),(0,i.kt)("h2",{id:"purpose"},"Purpose"),(0,i.kt)("p",null,"Within the context of ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/tev2",hovertext:"TEv2: a set of specifications and tools that caters for the Curation of Terminologies, as well as for its subsequent use in publications of different types (e.g. websites, whitepapers) and formats (e.g. html, LaTeX), as appropriate for different, individual Scopes."},"TEv2"),", the ability to ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/define",hovertext:"Define: to provide a criterion and a Term, where the criterion can be used by people to determine whether or not something is an instance/example of a Concept (or other Semantic Unit), and the Term is used to refer to that Concept, or an arbitrary instance thereof."},"define")," ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/synonym",hovertext:"Synonym: a Term that has the same (or sufficiently similar) meaning as another Term."},"synonyms")," for a ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"term")," is needed so that ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/hrg",hovertext:"Human Readable Glossary (HRG): a Glossary that is designed to be easily understandable and accessible to humans. HRGs present terms and their meanings in a format that prioritizes human comprehension and may include additional contextual information to aid understanding."},"HRGs")," can be made better readable without taking away control over the structure of an ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/hrg",hovertext:"Human Readable Glossary (HRG): a Glossary that is designed to be easily understandable and accessible to humans. HRGs present terms and their meanings in a format that prioritizes human comprehension and may include additional contextual information to aid understanding."},"HRG")," entry."))}d.isMDXComponent=!0}}]);