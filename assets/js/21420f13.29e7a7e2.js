"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[2685],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>l});var i=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=i.createContext({}),h=function(e){var t=i.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},m=function(e){var t=h(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),f=h(a),l=r,d=f["".concat(c,".").concat(l)]||f[l]||p[l]||s;return a?i.createElement(d,n(n({ref:t},m),{},{components:a})):i.createElement(d,n({ref:t},m))}));function l(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,n=new Array(s);n[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,n[1]=o;for(var h=2;h<s;h++)n[h]=a[h];return i.createElement.apply(null,n)}return i.createElement.apply(null,a)}f.displayName="MDXCreateElement"},2120:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>h});var i=a(3117),r=(a(7294),a(3905));const s={id:"form-phrase",displayed_sidebar:"tev2SideBar",term:"form-phrase",termType:"concept",isa:null,glossaryTerm:"Form Phrase (for a Semantic Unit)",glossaryText:"a word or phrase that refers to a particular [semantic unit](@), yet is not (necessarily) the [term](@) that is used in the [definition](@) of that [semantic unit](@). Form phrases can be, e.g., plural forms, possessive extensions, verb-conjugation forms, abbreviations, and other variations.",glossaryNotes:["The set of [form phrases](@) that [TEv2 tools](@) can recognize, is specified in the [curated text](@) that documents that [unit](semantic-unit@). Such specifications may contain [form-phrase macros](@).","For looking up the [semantic unit](@) (documentation, as specified in its corresponding [MRG entry](@)), [TEv2 tools](@) can match words or phrases they encounter with the [regularized texts](@) that are listed in the `formPhrases` field of [MRG entries](@). Such [regularized texts](@) do not contain [form-phrase macros](@).","The [MRGT](@) ensures that the texts in the `formPhrases` field of a [curated text](@) are [properly converted](mrgt#processing-form-phrases@), and listed in the `formPhrases` field of the corresponding [MRG entry](@)."],formPhrases:["formphrase{ss}","form-phrase{ss}"],status:"proposed",created:20230731,updated:20230731,contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},n="Form Phrase",o={unversionedId:"terms/form-phrase",id:"terms/form-phrase",title:"Form Phrase",description:"A Form Phrase is a word or phrase that occurs in oral or written texts and that refers to a particular semantic unit, yet is not (necessarily) the  term that is used in the definition of that semantic unit. Form phrases can be, e.g., plural forms, possessive extensions, verb-conjugation forms, abbreviations, and other variations.",source:"@site/docs/terms/form-phrase.md",sourceDirName:"terms",slug:"/terms/form-phrase",permalink:"/tev2-specifications/docs/terms/form-phrase",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/terms/form-phrase.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1711961297,formattedLastUpdatedAt:"Apr 1, 2024",frontMatter:{id:"form-phrase",displayed_sidebar:"tev2SideBar",term:"form-phrase",termType:"concept",isa:null,glossaryTerm:"Form Phrase (for a Semantic Unit)",glossaryText:"a word or phrase that refers to a particular [semantic unit](@), yet is not (necessarily) the [term](@) that is used in the [definition](@) of that [semantic unit](@). Form phrases can be, e.g., plural forms, possessive extensions, verb-conjugation forms, abbreviations, and other variations.",glossaryNotes:["The set of [form phrases](@) that [TEv2 tools](@) can recognize, is specified in the [curated text](@) that documents that [unit](semantic-unit@). Such specifications may contain [form-phrase macros](@).","For looking up the [semantic unit](@) (documentation, as specified in its corresponding [MRG entry](@)), [TEv2 tools](@) can match words or phrases they encounter with the [regularized texts](@) that are listed in the `formPhrases` field of [MRG entries](@). Such [regularized texts](@) do not contain [form-phrase macros](@).","The [MRGT](@) ensures that the texts in the `formPhrases` field of a [curated text](@) are [properly converted](mrgt#processing-form-phrases@), and listed in the `formPhrases` field of the corresponding [MRG entry](@)."],formPhrases:["formphrase{ss}","form-phrase{ss}"],status:"proposed",created:20230731,updated:20230731,contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},sidebar:"tev2SideBar"},c={},h=[{value:"Purpose",id:"purpose",level:2},{value:"Specifying Form Phrases in Curated Texts",id:"specifying",level:2},{value:"Matching Form Phrases",id:"matching",level:2},{value:"Guidance for Specifying Form Phrases in Curated Texts",id:"guidance",level:2}],m={toc:h};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"form-phrase"},"Form Phrase"),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"Form Phrase")," is a word or phrase that occurs in oral or written texts and that refers to a particular ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",title:"Semantic Unit: a basic building block of meaning or representation that exists within the 'mind' of a Party (i.e., in its Knowledge)."},"semantic unit"),", yet is not (necessarily) the  ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent Concepts."},"term")," that is used in the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/definition",title:"Definition: the combination of a Term and a descriptive text, where the Term refers to a Concept or other Semantic Unit, and the descriptive text enables a set of Parties to have the same understanding about that Concept. Ideally, the descriptive text is a criterion that such Parties can use to determine what is, and what is not, an instance (or example) of that Concept."},"definition")," of that ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",title:"Semantic Unit: a basic building block of meaning or representation that exists within the 'mind' of a Party (i.e., in its Knowledge)."},"semantic unit"),". Form phrases can be, e.g., plural forms, possessive extensions, verb-conjugation forms, abbreviations, and other variations."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Examples"),(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRefs")," such as `[party](@)`, `[parties](@)` or `[party(s)](@)` should all refer to the same ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",title:"Semantic Unit: a basic building block of meaning or representation that exists within the 'mind' of a Party (i.e., in its Knowledge)."},"semantic unit"),'. This is achieved by specifiying "party", "parties", and "party(s)" as ',(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/form-phrase",title:"Form Phrase (for a Semantic Unit): a word or phrase that refers to a particular Semantic Unit, yet is not (necessarily) the Term that is used in the Definition of that Semantic Unit. Form phrases can be, e.g., plural forms, possessive extensions, verb-conjugation forms, abbreviations, and other variations."},"form phrases")," for that ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",title:"Semantic Unit: a basic building block of meaning or representation that exists within the 'mind' of a Party (i.e., in its Knowledge)."},"semantic unit")," in the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",title:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated text")," that documents that [unit](@)."),(0,r.kt)("h2",{id:"purpose"},"Purpose"),(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/form-phrase",title:"Form Phrase (for a Semantic Unit): a word or phrase that refers to a particular Semantic Unit, yet is not (necessarily) the Term that is used in the Definition of that Semantic Unit. Form phrases can be, e.g., plural forms, possessive extensions, verb-conjugation forms, abbreviations, and other variations."},"Form phrases")," serve as (standardized, human readable) identifiers for ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",title:"Semantic Unit: a basic building block of meaning or representation that exists within the 'mind' of a Party (i.e., in its Knowledge)."},"semantic units"),", enabling consistent and unambiguous references across various texts such as manuals, specifications, and guidelines. This is particularly useful (if not vital) in fields where precise terminology is key, ensuring that all stakeholders have a common understanding of the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent Concepts."},"terms")," used and thereby reducing the potential for misinterpretation or confusion.",(0,r.kt)("h2",{id:"specifying"},"Specifying Form Phrases in Curated Texts"),(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/form-phrase",title:"Form Phrase (for a Semantic Unit): a word or phrase that refers to a particular Semantic Unit, yet is not (necessarily) the Term that is used in the Definition of that Semantic Unit. Form phrases can be, e.g., plural forms, possessive extensions, verb-conjugation forms, abbreviations, and other variations."},"Form phrases")," are to be specified in (the `formPhrases` field of) the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/files/curated-text-file",title:"Header (of a Curated Text): the part of a Curated Text, which is at the beginning of that text, that starts with a line that (only) contains three subsequent '-'characters, and that ends with a second occurrence of such a line."},"header")," of the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",title:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated text")," that describes the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",title:"Semantic Unit: a basic building block of meaning or representation that exists within the 'mind' of a Party (i.e., in its Knowledge)."},"semantic unit")," to which it refers. Here is an example:",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'formPhrases: [ "actor", "actors", "actor\'s", "actor(s)", "human actor", "machine actor" ]\n')),(0,r.kt)("p",null,"This specifies that whenever a ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRef")," is being converted by the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/tools/trrt",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT"),", and the ",(0,r.kt)("inlineCode",{parentName:"p"},"showtext")," or the ",(0,r.kt)("inlineCode",{parentName:"p"},"term")," parts of that ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRef")," are any of these ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/form-phrase",title:"Form Phrase (for a Semantic Unit): a word or phrase that refers to a particular Semantic Unit, yet is not (necessarily) the Term that is used in the Definition of that Semantic Unit. Form phrases can be, e.g., plural forms, possessive extensions, verb-conjugation forms, abbreviations, and other variations."},"formPhrases"),", then the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRef")," refers to the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",title:"Semantic Unit: a basic building block of meaning or representation that exists within the 'mind' of a Party (i.e., in its Knowledge)."},"semantic unit")," that is documented by that ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",title:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated text"),". "),(0,r.kt)("p",null,"Note that the specification of a ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/form-phrase",title:"Form Phrase (for a Semantic Unit): a word or phrase that refers to a particular Semantic Unit, yet is not (necessarily) the Term that is used in the Definition of that Semantic Unit. Form phrases can be, e.g., plural forms, possessive extensions, verb-conjugation forms, abbreviations, and other variations."},"form phrase")," may include a ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/form-phrase-macro",title:"Form Phrase Macro: a sequence of characters (the macro name) that identifies a sequence (map) of character strings that specify typical variations of a Form Phrase, such as plural forms, possessie extensions, verb-conjugation forms, etc."},"form-phrase-macro"),", for which several are ",(0,r.kt)("a",{parentName:"p",href:"/docs/terms/form-phrase-macro#predefineds"},"predefined"),". The example below is the equivalent specification as above:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'formPhrases: [ "actor{ss}", "human actor", "machine actor" ]\n')),(0,r.kt)("p",null,"The same varieties can easily be added for the human and machine actors, as follows"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'formPhrases: [ "actor{ss}", "human actor{ss}", "machine actor{ss}" ]\n')),(0,r.kt)("h2",{id:"matching"},"Matching Form Phrases"),(0,r.kt)("p",null,"Using (or: matching) ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/form-phrase",title:"Form Phrase (for a Semantic Unit): a word or phrase that refers to a particular Semantic Unit, yet is not (necessarily) the Term that is used in the Definition of that Semantic Unit. Form phrases can be, e.g., plural forms, possessive extensions, verb-conjugation forms, abbreviations, and other variations."},"form phrases")," is the process in which for a given word or phrase, it is determined whether or not it refers to a particular ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",title:"Semantic Unit: a basic building block of meaning or representation that exists within the 'mind' of a Party (i.e., in its Knowledge)."},"semantic unit"),". This is done, e.g., by the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/tools/trrt",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT")," as it ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/tools/trrt#finding-mrg-entry",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"tries to find")," an ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",title:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entry")," that corresponds with the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/tools/trrt#interpreter-profile",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},(0,r.kt)("inlineCode",{parentName:"p"},"showtext"))," field of a ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRef"),"."),(0,r.kt)("p",null,"This matching process uses the contents of the ",(0,r.kt)("inlineCode",{parentName:"p"},"formPhrases")," field of ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",title:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entries"),", which are ",(0,r.kt)("a",{parentName:"p",href:"mrgt#processing-form-phrases"},"derived from")," the contents of the ",(0,r.kt)("inlineCode",{parentName:"p"},"formPhrases")," field of ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",title:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated texts"),", and proceeds as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/regularized-form-phrase#regularization-process",title:"Regularized Form Phrase: a Regularized Text that is derived from, and represents a Form Phrase. They typically appear in the `formPhrases` field of an MRG Entry."},"Regularize")," the given word or phrase;"),(0,r.kt)("li",{parentName:"ol"},"Find all ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",title:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entries")," that have the result an an entry in its ",(0,r.kt)("inlineCode",{parentName:"li"},"formPhrases"),"-field;"),(0,r.kt)("li",{parentName:"ol"},"If there is a single such an ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",title:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entry"),", then the text is a ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/form-phrase",title:"Form Phrase (for a Semantic Unit): a word or phrase that refers to a particular Semantic Unit, yet is not (necessarily) the Term that is used in the Definition of that Semantic Unit. Form phrases can be, e.g., plural forms, possessive extensions, verb-conjugation forms, abbreviations, and other variations."},"form phrase")," for the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",title:"Semantic Unit: a basic building block of meaning or representation that exists within the 'mind' of a Party (i.e., in its Knowledge)."},"semantic unit")," described by that ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",title:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entry"),".")),(0,r.kt)("p",null,"It is possible that there is no matching ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",title:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entries"),"."),(0,r.kt)("p",null,"If multiple ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",title:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entries")," match, that is an error condition - that should not happen. Such conditions are typically flagged, e.g., as an error by the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/tools/mrgt",title:"Machine Readable Glossary Tool: a software tool designed to create, manage, and process Machine Readable Glossaries (MRGs), as Specified By TEv2."},"MRGT"),", and they need to be resolved."),(0,r.kt)("h2",{id:"guidance"},"Guidance for Specifying Form Phrases in Curated Texts"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Character Composition"),': A form phrase is composed of a sequence of characters that may include letters, numbers, and spaces. Spaces are permissible if they are a standard part of the term (e.g., "hard drive").')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Limited Special Characters"),': Generally, a form phrase should not contain special characters like punctuation marks (.,;:!? etc.), except for hyphens, underscores, or other characters if they are an integral part of the term (e.g., "non-refundable", "e-mail").')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Case Sensitivity"),": While a form phrase may include uppercase or lowercase letters, it is typically treated as case-insensitive during the matching process. This ensures that variations in capitalization do not affect the identification of the term.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Adherence to Language Rules"),": A form phrase should conform to the grammatical and morphological rules of the language it's used in, including correct spelling and, where applicable, pluralization or possessive forms.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Uniqueness within Context"),": Each form phrase must be unique within its context or domain to avoid ambiguities. It should not overlap with or be a substring of another form phrase within the same set of terms.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Contextual Relevance"),": The form phrase should be relevant to its context and accurately represent the term or concept it's associated with, aligning with domain-specific terminology and usage."))))}p.isMDXComponent=!0}}]);