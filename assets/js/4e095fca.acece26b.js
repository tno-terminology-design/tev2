"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[5516],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>d});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=i.createContext({}),m=function(e){var t=i.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=m(e.components);return i.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),f=m(a),d=n,p=f["".concat(c,".").concat(d)]||f[d]||l[d]||r;return a?i.createElement(p,s(s({ref:t},h),{},{components:a})):i.createElement(p,s({ref:t},h))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var m=2;m<r;m++)s[m]=a[m];return i.createElement.apply(null,s)}return i.createElement.apply(null,a)}f.displayName="MDXCreateElement"},2369:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var i=a(3117),n=(a(7294),a(3905));const r={term:"synonym",termType:"concept",isa:"term",glossaryTerm:"Synonym (of a [term](@))",glossaryText:"a [term](@) that has the same (or sufficiently similar) meaning as another [term](@) (i.e., the [term](@) of which it is a [synonym](@).",synonymOf:null,grouptags:null,formPhrases:["synonym{ss}"],status:"proposed",created:20221127,updated:20221127,contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},s="Synonym",o={unversionedId:"terms/synonym",id:"terms/synonym",title:"Synonym",description:"Summary",source:"@site/docs/terms/synonym.md",sourceDirName:"terms",slug:"/terms/synonym",permalink:"/tev2-specifications/docs/terms/synonym",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/terms/synonym.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1704966130,formattedLastUpdatedAt:"Jan 11, 2024",frontMatter:{term:"synonym",termType:"concept",isa:"term",glossaryTerm:"Synonym (of a [term](@))",glossaryText:"a [term](@) that has the same (or sufficiently similar) meaning as another [term](@) (i.e., the [term](@) of which it is a [synonym](@).",synonymOf:null,grouptags:null,formPhrases:["synonym{ss}"],status:"proposed",created:20221127,updated:20221127,contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"}},c={},m=[{value:"Summary",id:"summary",level:2},{value:"The <code>synonymOf</code> field",id:"synonym-of",level:2},{value:"How Synonyms Work",id:"how-synonyms-work",level:2},{value:"Purpose",id:"purpose",level:2}],h={toc:m};function l(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"synonym"},"Synonym"),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("p",null,"A ",(0,n.kt)("strong",{parentName:"p"},"synonym")," is a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"term")," that has the same (or sufficiently similar) meaning as another ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"term")," (i.e., the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"term")," of which it is a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/synonym",title:"Synonym (of a [term](@)): a Term that has the same (or sufficiently similar) meaning as another Term (i.e., the Term of which it is a Synonym."},"synonym"),"."),(0,n.kt)("p",null,"While from a theoretical point of view a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"term")," and its ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/synonym",title:"Synonym (of a [term](@)): a Term that has the same (or sufficiently similar) meaning as another Term (i.e., the Term of which it is a Synonym."},"synonyms")," are identical, in practice they are more 'equivalent', i.e. while they have the same meaning, when using one or the other in a sentence, there is often one term that is preferred over the other."),(0,n.kt)("h2",{id:"synonym-of"},"The ",(0,n.kt)("inlineCode",{parentName:"h2"},"synonymOf")," field"),(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",title:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"Curated texts")," have an (optional) `synonymOf`-field in their [headers](@). The contents of that field must be the [term identifier](@) that can be dereferenced from the current ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," to the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",title:"a basic building block of meaning or representation that exists within the 'mind' of a party, e.g., a concept, relation, or property. Parties use terms (words/phrases) to refer to these intangible building blocks."},"semantic unit")," (or associated ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",title:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entry"),") for which the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"term")," that is being documented is a synonym.",(0,n.kt)("h2",{id:"how-synonyms-work"},"How Synonyms Work"),(0,n.kt)("p",null,"Consider a ",(0,n.kt)("inlineCode",{parentName:"p"},"synonym"),", i.e., a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",title:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated text")," that has a ",(0,n.kt)("inlineCode",{parentName:"p"},"synonymOf")," field that contains a dereferenceable ",(0,n.kt)("a",{parentName:"p",href:"@"},"term identifier"),". Let's say that the ",(0,n.kt)("inlineCode",{parentName:"p"},"original")," is what the ",(0,n.kt)("inlineCode",{parentName:"p"},"synonym")," is a synonym of. Here's how we construct an ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",title:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entry")," for the ",(0,n.kt)("inlineCode",{parentName:"p"},"synonym")," (assuming that the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",title:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entry")," of the original exists:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Creating a copy of the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",title:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entry")," of the ",(0,n.kt)("inlineCode",{parentName:"li"},"original"),"."),(0,n.kt)("li",{parentName:"ol"},"Copy all fields in the ",(0,n.kt)("a",{parentName:"li",href:"@"},"header")," of the ",(0,n.kt)("inlineCode",{parentName:"li"},"synonym")," into that copy, overwriting fields that already exist."),(0,n.kt)("li",{parentName:"ol"},"Add all required ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",title:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entry")," fields as usual, possibly (again) overwriting fields that already exist.")),(0,n.kt)("p",null,"This way of working allows ",(0,n.kt)("a",{parentName:"p",href:"@"},"curators")," to tailor specific fields, such as the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/glossarytext",title:"Glossary Text: a human readable text that will be used as the Definition for a particular Term, as presented in a HRG."},"glossary texts")," field, or the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/form-phrase",title:"Form Phrase (for a Term): a word or phrase that occurs in oral or written texts and that refers to a particular Semantic Unit, yet is not (necessarily) the  Term that is used in the Definition of that Semantic Unit. Form phrases can be, e.g., plural forms, possessive extensions, verb-conjugation forms, abbreviations, and other variations."},"form phrases")," fields for the ",(0,n.kt)("inlineCode",{parentName:"p"},"synonym"),"."),(0,n.kt)("h2",{id:"purpose"},"Purpose"),(0,n.kt)("p",null,"Within the context of ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/tev2",title:"TEv2: a set of specifications and Tools that caters for the Curation of Terminologies, as well as for its subsequent use in publications of different types (e.g. websites, whitepapers) and formats (e.g. html, LaTeX), as appropriate for different, individual Scopes."},"TEv2"),", the ability to ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/define",title:"Define: to provide a criterion and a Term, where the criterion can be used by people to determine whether or not something is an instance/example of a Concept (or other Semantic Unit), and the Term is used to refer to that Concept, or an arbitrary instance thereof."},"define")," ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/synonym",title:"Synonym (of a [term](@)): a Term that has the same (or sufficiently similar) meaning as another Term (i.e., the Term of which it is a Synonym."},"synonyms")," for a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"term")," is needed so that ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/hrg",title:"Human Readable Glossary (HRG): a Glossary that is designed to be easily understandable and accessible to humans. HRGs present terms and their meanings in a format that prioritizes human comprehension and may include additional contextual information to aid understanding."},"HRGs")," can be made better readable without taking away control over the structure of an ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/hrg",title:"Human Readable Glossary (HRG): a Glossary that is designed to be easily understandable and accessible to humans. HRGs present terms and their meanings in a format that prioritizes human comprehension and may include additional contextual information to aid understanding."},"HRG")," entry."))}l.isMDXComponent=!0}}]);