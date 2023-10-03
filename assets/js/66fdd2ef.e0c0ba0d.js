"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[8830],{3905:function(e,t,i){i.d(t,{Zo:function(){return d},kt:function(){return f}});var n=i(7294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var c=n.createContext({}),h=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},d=function(e){var t=h(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=h(i),f=o,l=p["".concat(c,".").concat(f)]||p[f]||m[f]||a;return i?n.createElement(l,r(r({ref:t},d),{},{components:i})):n.createElement(l,r({ref:t},d))}));function f(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=i.length,r=new Array(a);r[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var h=2;h<a;h++)r[h]=i[h];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},9513:function(e,t,i){i.r(t),i.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return h},toc:function(){return m}});var n=i(7462),o=i(3366),a=(i(7294),i(3905)),r=["components"],s={id:"term-identifier-syntax",sidebar_label:"Term Identifiers",date:20230915},c="Term Identifier",h={unversionedId:"spec-syntax/term-identifier-syntax",id:"spec-syntax/term-identifier-syntax",title:"Term Identifier",description:"A Term Identifier is a text that identifies a semantic unit within a particular scope, and hence also the curated text that describes it, which includes its definition.",source:"@site/docs/spec-syntax/12-term-identifier-syntax.md",sourceDirName:"spec-syntax",slug:"/spec-syntax/term-identifier-syntax",permalink:"/tev2-specifications/docs/spec-syntax/term-identifier-syntax",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/spec-syntax/12-term-identifier-syntax.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1696338614,formattedLastUpdatedAt:"Oct 3, 2023",sidebarPosition:12,frontMatter:{id:"term-identifier-syntax",sidebar_label:"Term Identifiers",date:20230915},sidebar:"tev2SideBar",previous:{title:"Term References",permalink:"/tev2-specifications/docs/spec-syntax/term-ref-syntax"},next:{title:"Terminology Identifiers",permalink:"/tev2-specifications/docs/spec-syntax/terminology-identifier-syntax"}},d={},m=[{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2}],p={toc:m};function f(e){var t=e.components,i=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"term-identifier"},"Term Identifier"),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"Term Identifier")," is a ",(0,a.kt)("a",{parentName:"p",href:"identifier@"},"text")," that ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/identify",hovertext:"Identify: an Act, by or on behalf of a Party, that results in the selection of either\n- a single Partial Identity that the party Owns, given some (observed or received) data, or\n- a single Entity from a given set of entities that is the Subject of a specified Partial Identity that the party Owns."},"identifies")," a ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/semantic-unit",hovertext:"Semantic Unit: something that can be thought of as existing in a particular Knowledge, e.g. a Concept, or a Mental Model."},"semantic unit")," within a particular ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),", and hence also the ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/curated-text",hovertext:"Curated Text: a text that documents a Concept or other Semantic Unit of a specific Community or other Party, and is located within a Scope that is owned by that Community/Party."},"curated text")," that describes it, which includes its ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/definition",hovertext:"Definition: a text that helps Parties to have the same understanding about the meaning of (and Concepts behind) a Term, ideally in such a way that these Parties can determine whether or not they make the same distinction."},"definition"),". "),(0,a.kt)("p",null,"Term identifiers are typically used to ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/identify",hovertext:"Identify: an Act, by or on behalf of a Party, that results in the selection of either\n- a single Partial Identity that the party Owns, given some (observed or received) data, or\n- a single Entity from a given set of entities that is the Subject of a specified Partial Identity that the party Owns."},"identify")," the ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scoped-term",hovertext:"Scoped Term: a Term that represents (and Identifies) a specific Semantic Unit of a particular Community (or Party)."},"scoped term")," to which a ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/term-ref",hovertext:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRef")," refers. Thus, the ",(0,a.kt)("a",{parentName:"p",href:"/docs/spec-syntax/term-ref-syntax#term"},(0,a.kt)("inlineCode",{parentName:"a"},"term"),"-field")," of any ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/term-ref",hovertext:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRef")," that refers to (the ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/curated-text",hovertext:"Curated Text: a text that documents a Concept or other Semantic Unit of a specific Community or other Party, and is located within a Scope that is owned by that Community/Party."},"curated text")," of) this ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/semantic-unit",hovertext:"Semantic Unit: something that can be thought of as existing in a particular Knowledge, e.g. a Concept, or a Mental Model."},"semantic unit")," must match the value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"term"),"-field in the ",(0,a.kt)("a",{parentName:"p",href:"@"},"frontmatter")," of the ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/curated-text",hovertext:"Curated Text: a text that documents a Concept or other Semantic Unit of a specific Community or other Party, and is located within a Scope that is owned by that Community/Party."},"curated text")," that describes th ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/semantic-unit",hovertext:"Semantic Unit: something that can be thought of as existing in a particular Knowledge, e.g. a Concept, or a Mental Model."},"semantic unit"),"."),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,"The syntaxes that can be used for a ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/term-identifier",hovertext:"Term Identifier: a Text that Identifies a Semantic Unit within a particular Scope, and hence also the Curated Text that describes it. The part between the parentheses `(` and `)` of Term Refs contains a term identifier (if it doesn't have a `#`)."},"term identifier")," are: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"term")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"term"),"@",(0,a.kt)("inlineCode",{parentName:"li"},"terminology-identifier"))),(0,a.kt)("p",null,"where"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"term"))," is the value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"term")," field in the ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/mrg-entry",hovertext:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entry")," of the ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/terminology",hovertext:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology")," ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/identify",hovertext:"Identify: an Act, by or on behalf of a Party, that results in the selection of either\n- a single Partial Identity that the party Owns, given some (observed or received) data, or\n- a single Entity from a given set of entities that is the Subject of a specified Partial Identity that the party Owns."},"identified")," by ",(0,a.kt)("inlineCode",{parentName:"p"},"terminology-identifier"),". This value can also be found in the ",(0,a.kt)("inlineCode",{parentName:"p"},"term")," field of the ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/curated-text",hovertext:"Curated Text: a text that documents a Concept or other Semantic Unit of a specific Community or other Party, and is located within a Scope that is owned by that Community/Party."},"curated text")," that documents the associated ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/semantic-unit",hovertext:"Semantic Unit: something that can be thought of as existing in a particular Knowledge, e.g. a Concept, or a Mental Model."},"semantic unit"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"terminology-identifier"))," is the combination of a ",(0,a.kt)("inlineCode",{parentName:"p"},"scopetag"),":",(0,a.kt)("inlineCode",{parentName:"p"},"vsntag"),", where"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"scopetag"))," is a ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scopetag",hovertext:"Scopetag: a Tag that is used to Identify Scopes from within a specific Scope"},"scopetag")," that ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/identify",hovertext:"Identify: an Act, by or on behalf of a Party, that results in the selection of either\n- a single Partial Identity that the party Owns, given some (observed or received) data, or\n- a single Entity from a given set of entities that is the Subject of a specified Partial Identity that the party Owns."},"identifies")," the ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," of the ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/terminology",hovertext:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology"),". If ",(0,a.kt)("inlineCode",{parentName:"li"},"scopetag")," is omitted, the ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," defaults to the current ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"vsntag"))," is a ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/versiontag",hovertext:"Versiontag: a Tag that is used to Identify a specific version of a Terminology from within a specific Scope."},"versiontag")," that ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/identify",hovertext:"Identify: an Act, by or on behalf of a Party, that results in the selection of either\n- a single Partial Identity that the party Owns, given some (observed or received) data, or\n- a single Entity from a given set of entities that is the Subject of a specified Partial Identity that the party Owns."},"identifies")," the  version of the ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/terminology",hovertext:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology")," to be used. If ",(0,a.kt)("inlineCode",{parentName:"li"},":vsntag")," (including the ",(0,a.kt)("inlineCode",{parentName:"li"},":"),") is omitted, the default version of the ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/terminology",hovertext:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology")," is assumed, as specified in the ",(0,a.kt)("inlineCode",{parentName:"li"},"defaultvsn")," field in the ",(0,a.kt)("a",{parentName:"li",href:"/docs/spec-files/saf#terminology"},"scope section")," of the ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/saf",hovertext:"SAF: a YAML file that contains essential data about a particular Scope (e.g., specifying where its Curated Texts, Glossaries etc. live), the relationships this Scope has with other Scopes, and the specifications of the different Terminologies that are Curated within that Scope."},"SAF")," of the ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," in which the ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/terminology",hovertext:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology")," is maintained.")))),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"In the following examples, we assume that "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tev2")," is a ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scopetag",hovertext:"Scopetag: a Tag that is used to Identify Scopes from within a specific Scope"},"scopetag")," that ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/identify",hovertext:"Identify: an Act, by or on behalf of a Party, that results in the selection of either\n- a single Partial Identity that the party Owns, given some (observed or received) data, or\n- a single Entity from a given set of entities that is the Subject of a specified Partial Identity that the party Owns."},"identifies")," the ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," in which the ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/tev2",hovertext:"Tev2: a set of specifications and tools that caters for the Curation of Terminologies, as well as for its subsequent use in publications of different types (e.g. websites, whitepapers) and formats (e.g. html, LaTeX), as appropriate for different, individual Scopes."},"TEv2")," ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/terminology",hovertext:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology")," is being ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/curate",hovertext:"Curate: to select, organize, and present Terms, Definitions, and other, related content in a thoughtful and purposeful manner to establish shared understanding among a Community working together on a particular set of objectives."},"curated"),". "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"terms")," is a ",(0,a.kt)("a",{parentName:"li",href:"@"},"vsntag")," that ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/identify",hovertext:"Identify: an Act, by or on behalf of a Party, that results in the selection of either\n- a single Partial Identity that the party Owns, given some (observed or received) data, or\n- a single Entity from a given set of entities that is the Subject of a specified Partial Identity that the party Owns."},"identifies")," the ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/terminology",hovertext:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology")," that consists of all ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"terms")," that are ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/define",hovertext:"Define: to provide a criterion and a Term, where the criterion can be used by people to determine whether or not something is an instance/example of a Concept (or other Terminological Artifact), and the Term is used to refer to that Concept, or an arbitrary instance thereof."},"defined")," within the ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," identified by ",(0,a.kt)("inlineCode",{parentName:"li"},"tev2"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"myscope")," is a ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scopetag",hovertext:"Scopetag: a Tag that is used to Identify Scopes from within a specific Scope"},"scopetag")," that ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/identify",hovertext:"Identify: an Act, by or on behalf of a Party, that results in the selection of either\n- a single Partial Identity that the party Owns, given some (observed or received) data, or\n- a single Entity from a given set of entities that is the Subject of a specified Partial Identity that the party Owns."},"identifies")," the current ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),".")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"terminology-identifier"),(0,a.kt)("th",{parentName:"tr",align:"left"},"refers to"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"scope")),(0,a.kt)("td",{parentName:"tr",align:"left"},"the ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"term")," ",(0,a.kt)("inlineCode",{parentName:"td"},"scope"),", as defined in the default ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/terminology",hovertext:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology")," of the current scope (i.e., ",(0,a.kt)("inlineCode",{parentName:"td"},"myscope"),").")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"concept@tev2")),(0,a.kt)("td",{parentName:"tr",align:"left"},"the ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"term")," ",(0,a.kt)("inlineCode",{parentName:"td"},"concept"),", as defined in the default ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/terminology",hovertext:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology")," of the scope ",(0,a.kt)("inlineCode",{parentName:"td"},"tev2"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"pic@tev2:terms")),(0,a.kt)("td",{parentName:"tr",align:"left"},"the ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"term")," ",(0,a.kt)("inlineCode",{parentName:"td"},"pic"),", as defined in the ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/terminology",hovertext:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology")," that contains all ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"terms")," that are defined within the scope ",(0,a.kt)("inlineCode",{parentName:"td"},"tev2"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"atjar@:terms")),(0,a.kt)("td",{parentName:"tr",align:"left"},"the ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"term")," ",(0,a.kt)("inlineCode",{parentName:"td"},"atjar"),", as defined in the ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/terminology",hovertext:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology")," that contains all ",(0,a.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"terms")," that are defined within the current scope (i.e.: ",(0,a.kt)("inlineCode",{parentName:"td"},"myscope"),").")))))}f.isMDXComponent=!0}}]);