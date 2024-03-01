"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[5532],{3905:(e,t,i)=>{i.d(t,{Zo:()=>f,kt:()=>m});var a=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},f=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,f=r(e,["components","mdxType","originalType","parentName"]),h=l(i),m=n,p=h["".concat(c,".").concat(m)]||h[m]||d[m]||o;return i?a.createElement(p,s(s({ref:t},f),{},{components:i})):a.createElement(p,s({ref:t},f))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,s=new Array(o);s[0]=h;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:n,s[1]=r;for(var l=2;l<o;l++)s[l]=i[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,i)}h.displayName="MDXCreateElement"},5752:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var a=i(3117),n=(i(7294),i(3905));const o={id:"terminology-identifiers",sidebar_label:"Terminology Identifiers",date:20230929},s="Terminology Identifiers",r={unversionedId:"specs/syntax/terminology-identifiers",id:"specs/syntax/terminology-identifiers",title:"Terminology Identifiers",description:"A Terminology Identifier a text that identifies a terminology from within a particular scope, and can also be used to find the MRG file (in the glossarydir of that same scope) that contains entries for every term contained in that terminology.",source:"@site/docs/specs/syntax/31-terminology-identifiers.md",sourceDirName:"specs/syntax",slug:"/specs/syntax/terminology-identifiers",permalink:"/tev2-specifications/docs/specs/syntax/terminology-identifiers",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/specs/syntax/31-terminology-identifiers.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1709287192,formattedLastUpdatedAt:"Mar 1, 2024",sidebarPosition:31,frontMatter:{id:"terminology-identifiers",sidebar_label:"Terminology Identifiers",date:20230929},sidebar:"tev2SideBar",previous:{title:"Term Identifiers",permalink:"/tev2-specifications/docs/specs/syntax/term-identifiers"},next:{title:"MRG References (MRGRefs)",permalink:"/tev2-specifications/docs/specs/syntax/mrg-refs"}},c={},l=[{value:"Syntax",id:"syntax",level:2},{value:'Finding the <a href="/tev2-specifications/docs/specs/files/mrg" title="Machine Readable Glossary: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the TEv2 MRG Specifications, to enable automated processing and integration with software systems.">MRG</a> that corresponds with a <a href="/tev2-specifications/docs/specs/syntax/terminology-identifiers" title="Terminology Identifier: a Text, of the form `<scopetag>:<vsntag>`, that Identifies a Terminology from within a particular Scope, and can also be used to find the MRG file (in the Glossarydir of that same Scope) that contains Entries for every Term contained in that Terminology.">Terminology Identifier</a>',id:"finding-the-mrg-that-corresponds-with-a-terminology-identifier",level:2},{value:"Examples",id:"examples",level:2}],f={toc:l};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},f,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"terminology-identifiers"},"Terminology Identifiers"),(0,n.kt)("p",null,"A ",(0,n.kt)("strong",{parentName:"p"},"Terminology Identifier")," a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/identifier",title:"Identifier: a character string that is being used for the identification of some Entity (yet may refer to 0, 1, or more Entities, depending on the context within which it is being used)."},"text")," that ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/identify",title:"Identify: an Act, by or on behalf of a Party, that results in the selection of either\n- a single Partial Identity that the party Owns, given some (observed or received) data, or\n- a single Entity from a given set of entities that is the Subject of a specified Partial Identity that the party Owns."},"identifies")," a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",title:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology")," from within a particular ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),", and can also be used to find the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/specs/files/mrg",title:"Machine Readable Glossary: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the TEv2 MRG Specifications, to enable automated processing and integration with software systems."},"MRG")," file (in the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/glossarydir",title:"Glossarydir: a directory within a Scopedir within which the different versions of its (Machine Readable and Human Readable) Glossaries are created and maintained."},"glossarydir")," of that same ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),") that contains ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",title:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"entries")," for every ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"term")," contained in that ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",title:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology"),"."),(0,n.kt)("h2",{id:"syntax"},"Syntax"),(0,n.kt)("p",null,"The syntaxes that can be used for a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/specs/syntax/terminology-identifiers",title:"Terminology Identifier: a Text, of the form `<scopetag>:<vsntag>`, that Identifies a Terminology from within a particular Scope, and can also be used to find the MRG file (in the Glossarydir of that same Scope) that contains Entries for every Term contained in that Terminology."},"terminology identifier")," are as follows (note that such syntax is typically preceded by the ",(0,n.kt)("inlineCode",{parentName:"p"},"@"),"-character): "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"(empty string, null)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"scopetag")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"scopetag"),":",(0,n.kt)("inlineCode",{parentName:"li"},"vsntag")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},":vsntag"))),(0,n.kt)("p",null,"where"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the empty string (null) ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/identify",title:"Identify: an Act, by or on behalf of a Party, that results in the selection of either\n- a single Partial Identity that the party Owns, given some (observed or received) data, or\n- a single Entity from a given set of entities that is the Subject of a specified Partial Identity that the party Owns."},"identifies")," the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",title:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology")," that is being used by default in the context in which the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/specs/syntax/terminology-identifiers",title:"Terminology Identifier: a Text, of the form `<scopetag>:<vsntag>`, that Identifies a Terminology from within a particular Scope, and can also be used to find the MRG file (in the Glossarydir of that same Scope) that contains Entries for every Term contained in that Terminology."},"terminology identifier")," is being used. Typically, that would be the default version of the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",title:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology")," in the current ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),". ",(0,n.kt)("sup",{parentName:"li",id:"fnref-1"},(0,n.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"scopetag"))," is a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/scopetag",title:"Scopetag: a Tag that is used to Identify Scopes from within a specific Scope"},"scopetag")," that ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/identify",title:"Identify: an Act, by or on behalf of a Party, that results in the selection of either\n- a single Partial Identity that the party Owns, given some (observed or received) data, or\n- a single Entity from a given set of entities that is the Subject of a specified Partial Identity that the party Owns."},"identifies")," the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," of the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",title:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology"),". If ",(0,n.kt)("inlineCode",{parentName:"p"},"scopetag")," is omitted, the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," defaults to the current ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"vsntag"))," is a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/versiontag",title:"Versiontag: a Tag that is used to Identify a specific version of a Terminology from within a specific Scope."},"versiontag")," that ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/identify",title:"Identify: an Act, by or on behalf of a Party, that results in the selection of either\n- a single Partial Identity that the party Owns, given some (observed or received) data, or\n- a single Entity from a given set of entities that is the Subject of a specified Partial Identity that the party Owns."},"identifies")," the  version of the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",title:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology")," to be used. If ",(0,n.kt)("inlineCode",{parentName:"p"},":vsntag")," (including the ",(0,n.kt)("inlineCode",{parentName:"p"},":"),") is omitted, the default version of the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",title:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology")," is assumed, as specified in the ",(0,n.kt)("inlineCode",{parentName:"p"},"defaultvsn")," field in the ",(0,n.kt)("a",{parentName:"p",href:"/docs/specs/files/saf#scope-section"},(0,n.kt)("inlineCode",{parentName:"a"},"scope"),"-section")," of the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/specs/files/saf",title:"Scope Administration File: a YAML file that contains essential data about a particular Scope (e.g., specifying where its Curated Texts, Glossaries etc. live), the relationships this Scope has with other Scopes, and the specifications of the different Terminologies that are Curated within that Scope. The SAF of a Scope is located in its Scopedir."},"SAF")," of the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," in which the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",title:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology")," is maintained."))),(0,n.kt)("h2",{id:"finding-the-mrg-that-corresponds-with-a-terminology-identifier"},"Finding the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/specs/files/mrg",title:"Machine Readable Glossary: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the TEv2 MRG Specifications, to enable automated processing and integration with software systems."},"MRG")," that corresponds with a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/specs/syntax/terminology-identifiers",title:"Terminology Identifier: a Text, of the form `<scopetag>:<vsntag>`, that Identifies a Terminology from within a particular Scope, and can also be used to find the MRG file (in the Glossarydir of that same Scope) that contains Entries for every Term contained in that Terminology."},"Terminology Identifier")),(0,n.kt)("p",null,"First, we assume that all ",(0,n.kt)("a",{href:"/tev2-specifications/docs/specs/files/mrg",title:"Machine Readable Glossary: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the TEv2 MRG Specifications, to enable automated processing and integration with software systems."},"MRGs")," (that have one or more ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",title:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entries"),") that need to be referred to, are available in the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/glossarydir",title:"Glossarydir: a directory within a Scopedir within which the different versions of its (Machine Readable and Human Readable) Glossaries are created and maintained."},"glossarydir")," of the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/current-scope",title:"Current Scope: the Scope that is the context within which a Curator is acting, or a tool is being called."},"current scope"),"."),(0,n.kt)("p",null,"Next, we have seen that every ",(0,n.kt)("a",{href:"/tev2-specifications/docs/specs/syntax/terminology-identifiers",title:"Terminology Identifier: a Text, of the form `<scopetag>:<vsntag>`, that Identifies a Terminology from within a particular Scope, and can also be used to find the MRG file (in the Glossarydir of that same Scope) that contains Entries for every Term contained in that Terminology."},"terminology identifier")," can be resolved into a valid ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/scopetag",title:"Scopetag: a Tag that is used to Identify Scopes from within a specific Scope"},"scopetag")," and ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/versiontag",title:"Versiontag: a Tag that is used to Identify a specific version of a Terminology from within a specific Scope."},"versiontag"),"."),(0,n.kt)("p",null,"Since all ",(0,n.kt)("a",{href:"/tev2-specifications/docs/specs/files/mrg",title:"Machine Readable Glossary: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the TEv2 MRG Specifications, to enable automated processing and integration with software systems."},"MRGs")," follow the ",(0,n.kt)("a",{parentName:"p",href:"/docs/specs/files/mrg#file-naming-conventions"},"MRG naming conventions"),", it follows that the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/specs/files/mrg",title:"Machine Readable Glossary: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the TEv2 MRG Specifications, to enable automated processing and integration with software systems."},"MRG")," that corresponds with a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/specs/syntax/terminology-identifiers",title:"Terminology Identifier: a Text, of the form `<scopetag>:<vsntag>`, that Identifies a Terminology from within a particular Scope, and can also be used to find the MRG file (in the Glossarydir of that same Scope) that contains Entries for every Term contained in that Terminology."},"terminology identifier")," is in the file ",(0,n.kt)("inlineCode",{parentName:"p"},"mrg.<scopetag>.<versiontag>.yaml")," in the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/glossarydir",title:"Glossarydir: a directory within a Scopedir within which the different versions of its (Machine Readable and Human Readable) Glossaries are created and maintained."},"glossarydir")," of the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/current-scope",title:"Current Scope: the Scope that is the context within which a Curator is acting, or a tool is being called."},"current scope"),"."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"In the following examples, we assume that "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"tev2")," is a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/scopetag",title:"Scopetag: a Tag that is used to Identify Scopes from within a specific Scope"},"scopetag")," that ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/identify",title:"Identify: an Act, by or on behalf of a Party, that results in the selection of either\n- a single Partial Identity that the party Owns, given some (observed or received) data, or\n- a single Entity from a given set of entities that is the Subject of a specified Partial Identity that the party Owns."},"identifies")," the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," in which the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/tev2",title:"TEv2: a set of specifications and Tools that caters for the Curation of Terminologies, as well as for its subsequent use in publications of different types (e.g. websites, whitepapers) and formats (e.g. html, LaTeX), as appropriate for different, individual Scopes."},"TEv2")," ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",title:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology")," is being ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/curate",title:"Curate: to select, organize, and present Terms, Definitions, and other, related content in a thoughtful and purposeful manner to establish shared understanding among a Community working together on a particular set of Objectives."},"curated"),". "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"terms")," is a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/versiontag",title:"Versiontag: a Tag that is used to Identify a specific version of a Terminology from within a specific Scope."},"vsntag")," that ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/identify",title:"Identify: an Act, by or on behalf of a Party, that results in the selection of either\n- a single Partial Identity that the party Owns, given some (observed or received) data, or\n- a single Entity from a given set of entities that is the Subject of a specified Partial Identity that the party Owns."},"identifies")," the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",title:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology")," that consists of all ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"terms")," that are ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/define",title:"Define: to provide a criterion and a Term, where the criterion can be used by people to determine whether or not something is an instance/example of a Concept (or other Semantic Unit), and the Term is used to refer to that Concept, or an arbitrary instance thereof."},"defined")," within the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," identified by ",(0,n.kt)("inlineCode",{parentName:"li"},"tev2"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"myscope")," is a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/scopetag",title:"Scopetag: a Tag that is used to Identify Scopes from within a specific Scope"},"scopetag")," that ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/identify",title:"Identify: an Act, by or on behalf of a Party, that results in the selection of either\n- a single Partial Identity that the party Owns, given some (observed or received) data, or\n- a single Entity from a given set of entities that is the Subject of a specified Partial Identity that the party Owns."},"identifies")," the current ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),".")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"terminology-identifier"),(0,n.kt)("th",{parentName:"tr",align:"left"},"refers to"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"@")),(0,n.kt)("td",{parentName:"tr",align:"left"},"the default terminology of the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/current-scope",title:"Current Scope: the Scope that is the context within which a Curator is acting, or a tool is being called."},"current scope")," (i.e., ",(0,n.kt)("inlineCode",{parentName:"td"},"myscope"),").")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"@tev2")),(0,n.kt)("td",{parentName:"tr",align:"left"},"the default terminology of the scope ",(0,n.kt)("inlineCode",{parentName:"td"},"tev2"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"@tev2:terms")),(0,n.kt)("td",{parentName:"tr",align:"left"},"the terminology that contains all ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"terms")," that are defined within the scope ",(0,n.kt)("inlineCode",{parentName:"td"},"tev2"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"@:terms")),(0,n.kt)("td",{parentName:"tr",align:"left"},"the terminology that contains all ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"terms")," that are defined within the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/current-scope",title:"Current Scope: the Scope that is the context within which a Curator is acting, or a tool is being called."},"current scope")," (i.e.: ",(0,n.kt)("inlineCode",{parentName:"td"},"myscope"),").")))),(0,n.kt)("div",{className:"footnotes"},(0,n.kt)("hr",{parentName:"div"}),(0,n.kt)("ol",{parentName:"div"},(0,n.kt)("li",{parentName:"ol",id:"fn-1"},"When a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",title:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology")," is being constructed, the empty string ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/identify",title:"Identify: an Act, by or on behalf of a Party, that results in the selection of either\n- a single Partial Identity that the party Owns, given some (observed or received) data, or\n- a single Entity from a given set of entities that is the Subject of a specified Partial Identity that the party Owns."},"identifies")," the ","[terminology that is under construction]","(provisional MRG)(@).",(0,n.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0}}]);