"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[3360],{3905:function(e,t,o){o.d(t,{Zo:function(){return d},kt:function(){return p}});var i=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,i,a=function(e,t){if(null==e)return{};var o,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)o=n[i],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)o=n[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=i.createContext({}),h=function(e){var t=i.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},d=function(e){var t=h(e.components);return i.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=h(o),p=a,f=m["".concat(c,".").concat(p)]||m[p]||l[p]||n;return o?i.createElement(f,r(r({ref:t},d),{},{components:o})):i.createElement(f,r({ref:t},d))}));function p(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,r=new Array(n);r[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var h=2;h<n;h++)r[h]=o[h];return i.createElement.apply(null,r)}return i.createElement.apply(null,o)}m.displayName="MDXCreateElement"},2868:function(e,t,o){o.r(t),o.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return s},metadata:function(){return h},toc:function(){return l}});var i=o(7462),a=o(3366),n=(o(7294),o(3905)),r=(o(4996),["components"]),s={id:"tev2-toolbox",date:20220421},c="TEv2 Terminology Toolbox",h={unversionedId:"tev2-toolbox",id:"tev2-toolbox",title:"TEv2 Terminology Toolbox",description:"As mentioned in the TEv2 overview, the toolbox is envisaged to have a variety of tools, including:",source:"@site/docs/tev2-toolbox.md",sourceDirName:".",slug:"/tev2-toolbox",permalink:"/tev2-specifications/docs/tev2-toolbox",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/tev2-toolbox.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1695710108,formattedLastUpdatedAt:"Sep 26, 2023",frontMatter:{id:"tev2-toolbox",date:20220421},sidebar:"tev2SideBar",previous:{title:"Terminology Construction",permalink:"/tev2-specifications/docs/spec-tools/terminology-construction"},next:{title:"Integrity Checking",permalink:"/tev2-specifications/docs/spec-tools/ict"}},d={},l=[],m={toc:l};function p(e){var t=e.components,o=(0,a.Z)(e,r);return(0,n.kt)("wrapper",(0,i.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"tev2-terminology-toolbox"},"TEv2 Terminology Toolbox"),(0,n.kt)("p",null,"As mentioned in the ",(0,n.kt)("a",{parentName:"p",href:"/docs/tev2-overview"},"TEv2 overview"),", the toolbox is envisaged to have a variety of tools, including:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"the ",(0,n.kt)("strong",{parentName:"p"},"Term Ref(erence) Resolution Tool (",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/trrt",hovertext:"TRRT (TermRef Rendering Tool): a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT"),")"),". This tool takes files that contain so-called ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/term-ref",hovertext:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRefs")," and outputs a copy of these files in which these ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/term-ref",hovertext:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRefs")," are converted into so-called ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/renderable-ref",hovertext:"Renderable Ref: a text with which the TRRT replaces a TermRef, that can be processed by specific third party rendering tools, the result of which is a rendering of the original TermRef that has additional characteristics that help Readers to (better) understand the intention of its Author."},"renderable refs"),", i.e. texts that can be further processed by tools such as GitHub pages, Docusaurus, etc. The result of this is that the rendered document contains markups that help ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/reader",hovertext:"Reader: a person that reads a text that is authored by another person (its Author]), and that tries to understand the meaning of this text in the way its Author intended."},"readers")," to quickly find more explanations of the ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/concept",hovertext:"Concept: a Semantic Unit that captures the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same')."},"concept")," or other ",(0,n.kt)("a",{parentName:"p",href:"@"},"semantic unit")," that is being referenced.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"the ",(0,n.kt)("strong",{parentName:"p"},"MRG Importer (",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/mrg-importer",hovertext:"MRG Importer: is a tool in the TEv2 toolbox that is run within a particular Scope for the purpose of obtaining MRGs from other Scopes, as specified in the Scope's SAF, and putting them in the Scope's Glossarydir."},"MRG importer"),")"),". This tool serves to get any ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/mrg",hovertext:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems."},"MRG")," that may be needed within a particular ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),", and make it available in the ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope's")," ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/glossarydir",hovertext:"Glossarydir: a directory within a Scopedir within which the different versions of its (Machine Readable and Human Readable) Glossaries are created and maintained."},"glossarydir"),". The idea behind this is that various tools that may need such ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/mrg",hovertext:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems."},"MRGs")," would not need to include such code. Further details are in the ",(0,n.kt)("a",{parentName:"p",href:"/docs/spec-tools/mrg-importer"},"MRG importer specs"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"the ",(0,n.kt)("strong",{parentName:"p"},"Machine Readable Glossary generation Tool (",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/mrgt",hovertext:"MRGT: a software tool designed to create, manage, and process Machine Readable Glossaries (MRGs), as [specified by TEv2](/docs/spec-tools/mrgt). MRGTs offer features for selecting Terms that are Curated within the Scope it is run in, or from other Scopes."},"MRGT"),")"),". This tool reads the ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/saf",hovertext:"SAF: a YAML file that contains essential data about a particular Scope (e.g., specifying where its Curated Texts, Glossaries etc. live), the relationships this Scope has with other Scopes, and the specifications of the different Terminologies that are Curated within that Scope."},"SAF")," of a ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," to find the instructions by which it creates an ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/mrg",hovertext:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems."},"MRG")," for each of the versions of the ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/terminology",hovertext:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology")," that are maintained within that ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"the ",(0,n.kt)("strong",{parentName:"p"},"Human Readable Glossary generation Tool (",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/hrgt",hovertext:"Human Readable Glossary Tool (HRGT): a software tool designed to create, manage, and process Human Readable Glossaries (HRGs), as Specified By TEv2. HRGTs offer features for selecting Terms that are Curated within the Scope it is run in, or from other Scopes."},"HRGT"),")"),". This tool reads the ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/mrg",hovertext:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems."},"MRG")," of a ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),", resolves any ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/term-ref",hovertext:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRefs")," as necessary, and creates a rendering that results in a ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/hrg",hovertext:"Human Readable Glossary (HRG): a Glossary that is designed to be easily understandable and accessible to humans. HRGs present terms and their meanings in a format that prioritizes human comprehension and may include additional contextual information to aid understanding."},"HRG"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"the ",(0,n.kt)("strong",{parentName:"p"},"Integrity Checker Tool (",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/ict",hovertext:"Integrity Checker Tool (ICT): a software tool designed to check the integrity and conformity of various files used in the curation and management of Glossaries, Dictionaries, Curated Texts, and other data within a terminology project. The ICT verifies that the files adhere to the TEv2 File Specifications, ensuring the consistency and accuracy of the terminology data."},"ICT"),")"),". This tool enables ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/curator",hovertext:"Curator: a person responsible for curating, managing, and maintaining the Terminologies, to ensure shared understanding among a Community working together on a particular set of objectives."},"curators")," to test the integrity of ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/saf",hovertext:"SAF: a YAML file that contains essential data about a particular Scope (e.g., specifying where its Curated Texts, Glossaries etc. live), the relationships this Scope has with other Scopes, and the specifications of the different Terminologies that are Curated within that Scope."},"SAFs"),", ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/mrg",hovertext:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems."},"MRGs"),", and ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/curated-text",hovertext:"Curated Text: a text that documents a Concept or other Semantic Unit of a specific Community or other Party, and is located within a Scope that is owned by that Community/Party."},"curated texts")," for integrity, logging any situation that may cause inconvenience or errors, and providing helptexts that are aimed at guiding ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/curator",hovertext:"Curator: a person responsible for curating, managing, and maintaining the Terminologies, to ensure shared understanding among a Community working together on a particular set of objectives."},"curators")," to resolve any such issues.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"the ",(0,n.kt)("strong",{parentName:"p"},"Machine Readable Dictionary generation Tool (",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/mrdt",hovertext:"Machine Readable Dictionary Tool (MRDT): a software tool designed to create, manage, and process Machine Readable Dictionaries (MRDs)."},"MRDT"),")"),". This tool generates a Machine Readable Inventory (that we call a Machine Readable Dictionary or ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/mrd",hovertext:"Machine Readable Dictionary (MRD): a type of Dictionary that is formatted in a way that can be easily processed and interpreted by computers or software programs. It uses the YAML format to represent the Terms and their Meanings."},"MRD"),") of ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"terms")," that originate from different (versions of) ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/terminology",hovertext:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminologies"),", from various ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scopes"),". ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/mrd",hovertext:"Machine Readable Dictionary (MRD): a type of Dictionary that is formatted in a way that can be easily processed and interpreted by computers or software programs. It uses the YAML format to represent the Terms and their Meanings."},"MRDs")," are meant to be processed by a ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/hrdt",hovertext:"Human Readable Dictionary Tool (HRDT): a software tool designed to create, manage, and process Human Readable Dictionaries (HRDs)."},"HRDT"),", which turns it into (a specific format of) ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/hrd",hovertext:"Human Readable Dictionary (HRD): a Dictionary that presents terms and their meanings in a format that is easily understandable and accessible to humans, typically organized alphabetically."},"HRD"),").")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"the ",(0,n.kt)("strong",{parentName:"p"},"Human Readable Dictionary generation Tool (",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/hrdt",hovertext:"Human Readable Dictionary Tool (HRDT): a software tool designed to create, manage, and process Human Readable Dictionaries (HRDs)."},"HRDT"),")"),". This tool generates a a Human Readable ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/dictionary",hovertext:"Dictionary: an alphabetically sorted list of Terms with various meanings that they may have in different contexts."},"Dictionary")," (",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/hrd",hovertext:"Human Readable Dictionary (HRD): a Dictionary that presents terms and their meanings in a format that is easily understandable and accessible to humans, typically organized alphabetically."},"HRD"),"), that renders the ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"terms")," from a ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/mrd",hovertext:"Machine Readable Dictionary (MRD): a type of Dictionary that is formatted in a way that can be easily processed and interpreted by computers or software programs. It uses the YAML format to represent the Terms and their Meanings."},"machine readable dictionary (MRD)")," into one of several formats, e.g. HTML, or PDF. ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/hrd",hovertext:"Human Readable Dictionary (HRD): a Dictionary that presents terms and their meanings in a format that is easily understandable and accessible to humans, typically organized alphabetically."},"HRDs")," can be created for different purposes, e.g. to compare different ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/terminology",hovertext:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminologies")," (across ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scopes"),"), or as a reference of what ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"terms")," mean in different ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scopes"),"."))),(0,n.kt)("p",null,"These tools are intended to be called from the command-line, typically"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"in a context where the user is developing (documents, papers, etc.) locally, and"),(0,n.kt)("li",{parentName:"ol"},"in a github or gitlab context, where the tools are called from within a CI/CD pipeline.")),(0,n.kt)("p",null,"Apart from these tools, a collection of code snippets is envisaged that can be used to automatically generate ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/mrg",hovertext:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems."},"MRGs")," and ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/hrg",hovertext:"Human Readable Glossary (HRG): a Glossary that is designed to be easily understandable and accessible to humans. HRGs present terms and their meanings in a format that prioritizes human comprehension and may include additional contextual information to aid understanding."},"HRGs")," upon successful commits to the master-branch of an associated repo/wiki, enabling ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/curator",hovertext:"Curator: a person responsible for curating, managing, and maintaining the Terminologies, to ensure shared understanding among a Community working together on a particular set of objectives."},"curators")," to establish CI/CD pipelines."))}p.isMDXComponent=!0}}]);