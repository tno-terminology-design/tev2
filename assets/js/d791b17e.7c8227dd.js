"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[8366],{3905:function(e,t,r){r.d(t,{Zo:function(){return f},kt:function(){return u}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),h=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},f=function(e){var t=h(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),p=h(r),u=n,l=p["".concat(c,".").concat(u)]||p[u]||d[u]||s;return r?o.createElement(l,a(a({ref:t},f),{},{components:r})):o.createElement(l,a({ref:t},f))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,a=new Array(s);a[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var h=2;h<s;h++)a[h]=r[h];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5440:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return c},default:function(){return l},frontMatter:function(){return i},mark:function(){return p},metadata:function(){return h},toc:function(){return d}});var o=r(7462),n=r(3366),s=(r(7294),r(3905)),a=(r(4996),["components"]),i={id:"tev2-syntax",date:20220819},c="TEv2 - Syntax (Specs)",h={unversionedId:"tev2-syntax",id:"tev2-syntax",title:"TEv2 - Syntax (Specs)",description:"TEv2 uses specific syntaxes:",source:"@site/docs/tev2-syntax.md",sourceDirName:".",slug:"/tev2-syntax",permalink:"/tev2-specifications/docs/tev2-syntax",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/tev2-syntax.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1697175562,formattedLastUpdatedAt:"Oct 13, 2023",frontMatter:{id:"tev2-syntax",date:20220819},sidebar:"tev2SideBar",previous:{title:"HRD (Human Readable Dictionary)",permalink:"/tev2-specifications/docs/spec-files/hrd"},next:{title:"Term References",permalink:"/tev2-specifications/docs/spec-syntax/term-ref-syntax"}},f={},d=[],p=function(e){var t=e.children;return(0,s.kt)("span",{style:{color:"black",backgroundColor:"yellow",padding:"0.2rem",borderRadius:"2px"}},t)},u={toc:d,mark:p};function l(e){var t=e.components,r=(0,n.Z)(e,a);return(0,s.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"tev2---syntax-specs"},"TEv2 - Syntax (Specs)"),(0,s.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/tev2",hovertext:"TEv2: a set of specifications and tools that caters for the Curation of Terminologies, as well as for its subsequent use in publications of different types (e.g. websites, whitepapers) and formats (e.g. html, LaTeX), as appropriate for different, individual Scopes.",target:"_self"},"TEv2")," uses specific syntaxes: - the **[TermReference Syntax](/docs/spec-syntax/term-ref-syntax)** is the syntax that enables ",(0,s.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/author",hovertext:"Author: a person that creates a text that is meant to be read and understood by others - usually, a particular audience.",target:"_self"},"authors")," to mark ",(0,s.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope).",target:"_self"},"terms")," that they use such that ",(0,s.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/reader",hovertext:"Reader: a person that reads a text that is authored by another person (its Author), and that tries to understand the meaning of this text in the way its Author intended.",target:"_self"},"readers")," will be informed about their specific meaning while reading, and can learn more about such ",(0,s.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope).",target:"_self"},"terms")," by clicking on them. You can see how that works in this sentence, by hovering over this ",(0,s.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope).",target:"_self"},"term"),", and clicking on it if you want to know more about it; - the **[Term Identifier Syntax](/docs/spec-syntax/term-identifier-syntax)** enables ",(0,s.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/author",hovertext:"Author: a person that creates a text that is meant to be read and understood by others - usually, a particular audience.",target:"_self"},"authors")," to refer to a particular ",(0,s.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope).",target:"_self"},"term")," in a specific version of a ",(0,s.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/terminology",hovertext:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics.",target:"_self"},"terminology"),". This syntax is also used in the [TermReference Syntax](/docs/spec-syntax/term-ref-syntax). - the **[Terminology Identifier Syntax](/docs/spec-syntax/terminology-identifier-syntax)** enables ",(0,s.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/author",hovertext:"Author: a person that creates a text that is meant to be read and understood by others - usually, a particular audience.",target:"_self"},"authors")," to refer to a specific version of a ",(0,s.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/terminology",hovertext:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics.",target:"_self"},"terminology"),", as documented by an ",(0,s.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/mrg",hovertext:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems.",target:"_self"},"MRG"),". This syntax can be used, e.g., as part of the [Term Identifier Syntax](/docs/spec-syntax/term-identifier-syntax). - the **[Form Phrases Syntax](/docs/spec-syntax/form-phrase-syntax)** is the syntax that ",(0,s.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/author",hovertext:"Author: a person that creates a text that is meant to be read and understood by others - usually, a particular audience.",target:"_self"},"authors")," need to specify ",(0,s.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/formphrase",hovertext:"Form Phrase (of a [term](@)): a word or phrase, other than the actual Term that, when used in a TermRef would typically also refer to this Term. Form phrases may include plural forms, possessive extensions, verb-conjugation forms, and other variations.",target:"_self"},"form phrases")," (in the `formPhrases` field of ",(0,s.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/curated-text",hovertext:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information.",target:"_self"},"curated texts")," - see the [curated text file specs](/docs/spec-files/ctext-file)); - the **[MRG Term Selection Syntax](/docs/spec-tools/mrg-terminology-construction)** is used by ",(0,s.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/curator",hovertext:"Curator: a person responsible for curating, managing, and maintaining the Terminologies, to ensure shared understanding among a Community working together on a particular set of objectives.",target:"_self"},"curators")," to define the contents of (a particular version) of a ",(0,s.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/terminology",hovertext:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics.",target:"_self"},"terminology")," that they ",(0,s.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/curate",hovertext:"Curate: to select, organize, and present Terms, Definitions, and other, related content in a thoughtful and purposeful manner to establish shared understanding among a Community working together on a particular set of objectives.",target:"_self"},"curate"),". This syntax appears in the [`versions` section](/docs/spec-files/saf#versions) of a ",(0,s.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/saf",hovertext:"SAF: a YAML file that contains essential data about a particular scope, such as the locations of the scope's curated texts, glossaries, and the specifications of the curated terminologies. The SAF is located in the so-called scopedir.",target:"_self"},"SAF"),".")}l.isMDXComponent=!0}}]);