"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[4499],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>m});var r=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,s=function(e,t){if(null==e)return{};var a,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var c=r.createContext({}),p=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,s=e.mdxType,n=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=s,h=d["".concat(c,".").concat(m)]||d[m]||f[m]||n;return a?r.createElement(h,i(i({ref:t},l),{},{components:a})):r.createElement(h,i({ref:t},l))}));function m(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=a.length,i=new Array(n);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var p=2;p<n;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8287:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var r=a(3117),s=(a(7294),a(3905));a(4996);const n={id:"overview-spec-syntax",sidebar_label:"Overview",date:20220819},i="Overview - TEv2 Syntax",o={unversionedId:"spec-syntax/overview-spec-syntax",id:"spec-syntax/overview-spec-syntax",title:"Overview - TEv2 Syntax",description:"TEv2 uses specific syntaxes:",source:"@site/docs/spec-syntax/00-overview-spec-syntax.md",sourceDirName:"spec-syntax",slug:"/spec-syntax/overview-spec-syntax",permalink:"/tev2-specifications/docs/spec-syntax/overview-spec-syntax",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/spec-syntax/00-overview-spec-syntax.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1702288678,formattedLastUpdatedAt:"Dec 11, 2023",sidebarPosition:0,frontMatter:{id:"overview-spec-syntax",sidebar_label:"Overview",date:20220819},sidebar:"tev2SideBar",previous:{title:"TEv2 Config Files",permalink:"/tev2-specifications/docs/spec-files/configuration-file"},next:{title:"Overview",permalink:"/tev2-specifications/docs/spec-syntax/overview-spec-syntax"}},c={},p=[],l={toc:p};function f(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"overview---tev2-syntax"},"Overview - TEv2 Syntax"),(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/tev2",title:"TEv2: a set of specifications and tools that caters for the Curation of Terminologies, as well as for its subsequent use in publications of different types (e.g. websites, whitepapers) and formats (e.g. html, LaTeX), as appropriate for different, individual Scopes."},"TEv2")," uses specific syntaxes:",(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"the ",(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("a",{parentName:"strong",href:"/docs/spec-syntax/term-ref-syntax"},"TermReference Syntax"))," is the syntax that enables ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/author",title:"Author: a person that creates a text that is meant to be read and understood by others - usually, a particular audience."},"authors")," to mark ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"terms")," that they use such that ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/reader",title:"Reader: a person that reads a text that is authored by another person (its Author), and that tries to understand the meaning of this text in the way its Author intended."},"readers")," will be informed about their specific meaning while reading, and can learn more about such ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"terms")," by clicking on them. You can see how that works in this sentence, by hovering over this ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"term"),", and clicking on it if you want to know more about it;"),(0,s.kt)("li",{parentName:"ul"},"the ",(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("a",{parentName:"strong",href:"/docs/spec-syntax/term-identifier-syntax"},"Term Identifier Syntax"))," enables ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/author",title:"Author: a person that creates a text that is meant to be read and understood by others - usually, a particular audience."},"authors")," to refer to a particular ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"term")," in a specific version of a ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",title:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology"),". This syntax is also used in the ",(0,s.kt)("a",{parentName:"li",href:"/docs/spec-syntax/term-ref-syntax"},"TermReference Syntax"),"."),(0,s.kt)("li",{parentName:"ul"},"the ",(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("a",{parentName:"strong",href:"/docs/spec-syntax/terminology-identifier-syntax"},"Terminology Identifier Syntax"))," enables ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/author",title:"Author: a person that creates a text that is meant to be read and understood by others - usually, a particular audience."},"authors")," to refer to a specific version of a ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",title:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology"),", as documented by an ",(0,s.kt)("a",{href:"/tev2-specifications/docs/spec-files/mrg",title:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems."},"MRG"),". This syntax can be used, e.g., as part of the ",(0,s.kt)("a",{parentName:"li",href:"/docs/spec-syntax/term-identifier-syntax"},"Term Identifier Syntax"),"."),(0,s.kt)("li",{parentName:"ul"},"the ",(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("a",{parentName:"strong",href:"/docs/spec-syntax/form-phrase-syntax"},"Form Phrases Syntax"))," is the syntax that ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/author",title:"Author: a person that creates a text that is meant to be read and understood by others - usually, a particular audience."},"authors")," need to specify ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/formphrase",title:"Form Phrase (of a Term): a word or phrase, other than the actual Term that, when used in a TermRef would typically also refer to this Term. Form phrases may include plural forms, possessive extensions, verb-conjugation forms, and other variations."},"form phrases")," (in the ",(0,s.kt)("inlineCode",{parentName:"li"},"formPhrases")," field of ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",title:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated texts")," - see the ",(0,s.kt)("a",{parentName:"li",href:"/docs/spec-files/ctext-file"},"curated text file specs"),");"),(0,s.kt)("li",{parentName:"ul"},"the ",(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("a",{parentName:"strong",href:"/docs/spec-tools/mrg-terminology-construction"},"MRG Term Selection Syntax"))," is used by ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/curator",title:"Curator: a person responsible for curating, managing, and maintaining the Terminologies, to ensure shared understanding among a Community working together on a particular set of objectives."},"curators")," to define the contents of (a particular version) of a ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",title:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology")," that they ",(0,s.kt)("a",{href:"/tev2-specifications/docs/terms/curate",title:"Curate: to select, organize, and present Terms, Definitions, and other, related content in a thoughtful and purposeful manner to establish shared understanding among a Community working together on a particular set of objectives."},"curate"),". This syntax appears in the ",(0,s.kt)("a",{parentName:"li",href:"/docs/spec-files/saf#versions"},(0,s.kt)("inlineCode",{parentName:"a"},"versions")," section")," of a ",(0,s.kt)("a",{href:"/tev2-specifications/docs/spec-files/saf",title:"SAF: a YAML file that contains essential data about a particular scope, such as the locations of the scope's curated texts, glossaries, and the specifications of the curated terminologies. The SAF is located in the so-called scopedir."},"SAF"),".")))}f.isMDXComponent=!0}}]);