"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[9111],{3905:(t,e,a)=>{a.d(e,{Zo:()=>h,kt:()=>p});var i=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,i,r=function(t,e){if(null==t)return{};var a,i,r={},n=Object.keys(t);for(i=0;i<n.length;i++)a=n[i],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(i=0;i<n.length;i++)a=n[i],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var c=i.createContext({}),d=function(t){var e=i.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},h=function(t){var e=d(t.components);return i.createElement(c.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},f=i.forwardRef((function(t,e){var a=t.components,r=t.mdxType,n=t.originalType,c=t.parentName,h=o(t,["components","mdxType","originalType","parentName"]),f=d(a),p=r,m=f["".concat(c,".").concat(p)]||f[p]||l[p]||n;return a?i.createElement(m,s(s({ref:e},h),{},{components:a})):i.createElement(m,s({ref:e},h))}));function p(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var n=a.length,s=new Array(n);s[0]=f;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o.mdxType="string"==typeof t?t:r,s[1]=o;for(var d=2;d<n;d++)s[d]=a[d];return i.createElement.apply(null,s)}return i.createElement.apply(null,a)}f.displayName="MDXCreateElement"},869:(t,e,a)=>{a.d(e,{Z:()=>c});var i=a(7294),r=a(6775);const n="apiTable_e8hp";function s(t,e){let{name:a,children:n}=t;const s=function(t){let e=t;for(;(0,i.isValidElement)(e);)[e]=i.Children.toArray(e.props.children);return e}(n),o=a?`${a}-${s}`:s,c=`#${o}`,d=(0,r.k6)();return i.createElement("tr",{id:o,tabIndex:0,ref:d.location.hash===c?e:void 0,onClick:t=>{"A"===t.target.tagName.toUpperCase()||d.push(c)},onKeyDown:t=>{"Enter"===t.key&&d.push(c)}},n.props.children)}const o=i.forwardRef(s);function c(t){let{children:e,name:a}=t;const[r,s]=i.Children.toArray(e.props.children),c=(0,i.useRef)(null);(0,i.useEffect)((()=>{c.current?.focus()}),[c]);const d=i.Children.map(s.props.children,(t=>i.createElement(o,{name:a,ref:c},t)));return i.createElement("table",{className:n},r,i.createElement("tbody",null,d))}},297:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var i=a(3117),r=(a(7294),a(3905)),n=(a(4996),a(869));const s={id:"curated-text-file",date:20231009},o="Curated Text Files",c={unversionedId:"specs/files/curated-text-file",id:"specs/files/curated-text-file",title:"Curated Text Files",description:"Every curated text consists of two parts:",source:"@site/docs/specs/files/10-curated-text-file.md",sourceDirName:"specs/files",slug:"/specs/files/curated-text-file",permalink:"/tev2-specifications/docs/specs/files/curated-text-file",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/specs/files/10-curated-text-file.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1710496018,formattedLastUpdatedAt:"Mar 15, 2024",sidebarPosition:10,frontMatter:{id:"curated-text-file",date:20231009},sidebar:"tev2SideBar",previous:{title:"Specifications - Files",permalink:"/tev2-specifications/docs/categories/specs-files"},next:{title:"Body Files",permalink:"/tev2-specifications/docs/specs/files/body-file"}},d={},h=[{value:"Header Structure",id:"header",level:2},{value:"Predefined TEv2 Header Fields",id:"header-fields",level:2}],l={toc:h};function f(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,i.Z)({},l,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"curated-text-files"},"Curated Text Files"),(0,r.kt)("p",null,"Every ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",title:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated text")," consists of two parts:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/files/curated-text-file",title:"Header (of a Curated Text): the part of a Curated Text, which is at the beginning of that text, that starts with a line that (only) contains three subsequent '-'characters, and that ends with a second occurrence of such a line."},"header")," (also called the '",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/front-matter",title:"Front Matter: a section at the top of a file that contains YAML (or similarly formatted) metadata, such as title, description, tags, and more."},"front matter"),"' of the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",title:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated text"),"). It a set of (",(0,r.kt)("a",{parentName:"li",href:"https://yaml.org/spec/1.2.2/"},"YAML"),") key-value pairs that contain meta data about the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",title:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated text")," and/or data that could also have been part of the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/body",title:"Body (of a Curated Text): the part of a Curated Text that contains arbitrarily structured documentation about the Semantic Unit that the Curated Text documents."},"body"),", but is so small that it doesn't warrant to have a dedicated section for it."),(0,r.kt)("li",{parentName:"ol"},"the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/body",title:"Body (of a Curated Text): the part of a Curated Text that contains arbitrarily structured documentation about the Semantic Unit that the Curated Text documents."},"body"),", that contains all other documentation. It has no fixed structure. When the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",title:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated text")," is to processed using a static site generator such as ",(0,r.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs"},"Docusaurus v2"),", or ",(0,r.kt)("a",{parentName:"li",href:"https://pages.github.com/"},"github pages"),", it would typically contain (",(0,r.kt)("a",{parentName:"li",href:"https://www.markdownguide.org/basic-syntax/"},"markdown"),").")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example of a ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/files/curated-text-file",title:"Curated Text File: a file that contains either a (complete) Curated Text, or the Header of that Curated Text and a reference to the File that contains its Body."},"curated text file")," that contains a complete ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",title:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated text")),(0,r.kt)("div",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'---\n# Docusaurus <a href="/tev2-specifications/docs/terms/front-matter" title="Front Matter: a section at the top of a file that contains YAML (or similarly formatted) metadata, such as title, description, tags, and more.">front matter</a>\nid: ctext\nsidebar_label: Curated Texts\n# TEv2 Curated Text Header\nterm: curated-text\ntermType: concept\nglossaryTerm: Curated Text\nglossaryText: a text that documents a <a href="/tev2-specifications/docs/terms/concept" title="Concept: a Semantic Unit that captures the ideas/thoughts behind a classification of Entities (what makes Entities in that class \'the same\').">concept</a> or other <a href="/tev2-specifications/docs/terms/semantic-unit" title="Semantic Unit: a basic building block of meaning or representation that exists within the \'mind\' of a Party (i.e., in its Knowledge).">semantic unit</a> of a particular <a href="https://essif-lab.github.io/framework/docs/terms/party" title="Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.">party</a>, and specifies, e.g., the <a href="/tev2-specifications/docs/terms/term" title="Term: a word or phrase (i.e.: text) that is used to represent Concepts.">term(s)</a> by which the <a href="https://essif-lab.github.io/framework/docs/terms/party" title="Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.">party</a> refers thereto, its <a href="/tev2-specifications/docs/terms/definition" title="Definition: the combination of a Term and a descriptive text, where the Term refers to a Concept or other Semantic Unit, and the descriptive text enables a set of Parties to have the same understanding about that Concept. Ideally, the descriptive text is a criterion that such Parties can use to determine what is, and what is not, an instance (or example) of that Concept.">definition</a>, and any other relevant information.\nformPhrases: [ "curated-text{ss}" ]\n# TEv2 Curation status\nstatus: proposed\ncreated: 20220602\nupdated: 20230814\n# Origins/Acknowledgements\ncontributors: RieksJ\nattribution: "[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)"\noriginalLicense: "[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"\n---\n\n# Curated Text\n\nA curated text starts with three dashes `---`.\nThis indicates the start of its (YAML) header.\nTypically, the header consists of a sequence of key-value pairs.\nThe header is terminated with another three dashes and a new line.\n\nThe body of the curated text typically starts behind the header block,\nbut it can also be placed in another file within the `scopedir`.\nThe body is typically markdown, but other constructs may be inserted\nthat contribute to the rendering of these texts in a (static) website.\nAn example of this is [MDX](https://mdxjs.com/).\nA discussion on these other constructs is outside the scope of this document.\n')))),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/files/curated-text-file",title:"Curated Text File: a file that contains either a (complete) Curated Text, or the Header of that Curated Text and a reference to the File that contains its Body."},"curated text file")," typically contains the complete ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",title:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated text"),". However, the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/body",title:"Body (of a Curated Text): the part of a Curated Text that contains arbitrarily structured documentation about the Semantic Unit that the Curated Text documents."},"body")," can be stored in a separate ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/files/body-file",title:"Body File: a file that is located somewhere within the Scopedir, and that contains the Body of a Curated Text."},"file"),", in which case, the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/files/curated-text-file",title:"Header (of a Curated Text): the part of a Curated Text, which is at the beginning of that text, that starts with a line that (only) contains three subsequent '-'characters, and that ends with a second occurrence of such a line."},"header")," specifies where the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/files/body-file",title:"Body File: a file that is located somewhere within the Scopedir, and that contains the Body of a Curated Text."},"body file")," is located."),(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/files/curated-text-file",title:"Curated Text File: a file that contains either a (complete) Curated Text, or the Header of that Curated Text and a reference to the File that contains its Body."},"Curated text files")," live in a (sub)directory of the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/scopedir",title:"Scopedir: a directory in a computer file system that contains all files that are either being Curated within a particular Scope, or generated to serve some purpose within that Scope."},"scopedir"),", which we call its ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/curatedir",title:"Curatedir: a directory within a Scopedir within which every file contains a Curated Text for that Scope."},"curatedir"),". The path of the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/curatedir",title:"Curatedir: a directory within a Scopedir within which every file contains a Curated Text for that Scope."},"curatedir")," (relative to the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/scopedir",title:"Scopedir: a directory in a computer file system that contains all files that are either being Curated within a particular Scope, or generated to serve some purpose within that Scope."},"scopedir"),") can be found in the `curatedir` field of the [scope section](/docs/specs/files/saf#scope-section) in the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/files/saf",title:"Scope Administration File: a YAML file that contains essential data about a particular Scope (e.g., specifying where its Curated Texts, Glossaries etc. live), the relationships this Scope has with other Scopes, and the specifications of the different Terminologies that are Curated within that Scope. The SAF of a Scope is located in its Scopedir."},"SAF"),".",(0,r.kt)("p",null,"This page specifies the syntax for ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",title:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated texts"),", which boils down to specifying the structure of their ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/files/curated-text-file",title:"Header (of a Curated Text): the part of a Curated Text, which is at the beginning of that text, that starts with a line that (only) contains three subsequent '-'characters, and that ends with a second occurrence of such a line."},"headers"),", as ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/body",title:"Body (of a Curated Text): the part of a Curated Text that contains arbitrarily structured documentation about the Semantic Unit that the Curated Text documents."},"bodies")," do not have any requirements for their structure that the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-tool",title:"TEv2 Tool: any software application or utility designed to support and streamline various tasks related to terminology management following the TEv2 specifications."},"TEv2 tools")," need."),(0,r.kt)("h2",{id:"header"},"Header Structure"),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",title:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated text")," starts with three dashes ",(0,r.kt)("inlineCode",{parentName:"p"},"---"),", which indicates the start of its (YAML) ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/files/curated-text-file",title:"Header (of a Curated Text): the part of a Curated Text, which is at the beginning of that text, that starts with a line that (only) contains three subsequent '-'characters, and that ends with a second occurrence of such a line."},"header"),". This is followed by a sequence of key-value pairs (and comments). The ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/files/curated-text-file",title:"Header (of a Curated Text): the part of a Curated Text, which is at the beginning of that text, that starts with a line that (only) contains three subsequent '-'characters, and that ends with a second occurrence of such a line."},"header")," is terminated with another three dashes and a new line."),(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/files/curated-text-file",title:"Header (of a Curated Text): the part of a Curated Text, which is at the beginning of that text, that starts with a line that (only) contains three subsequent '-'characters, and that ends with a second occurrence of such a line."},"Headers")," of ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",title:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated texts")," are used by ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/tev2",title:"TEv2: a set of specifications and Tools that caters for the Curation of Terminologies, as well as for its subsequent use in publications of different types (e.g. websites, whitepapers) and formats (e.g. html, LaTeX), as appropriate for different, individual Scopes."},"TEv2")," tools, but may also contain entries that are used by other tools, such as static site generators. The example above shows some entries that are used by (the static site generator) Docusaurus. In order to avoid confusion about which entries serve what purposes, it is advised to put them in different sections and separate these with comments, as shown in the example.",(0,r.kt)("h2",{id:"header-fields"},"Predefined TEv2 Header Fields"),(0,r.kt)("p",null,"Different ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-tool",title:"TEv2 Tool: any software application or utility designed to support and streamline various tasks related to terminology management following the TEv2 specifications."},"TEv2 tools")," use header fields in ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/files/curated-text-file",title:"Header (of a Curated Text): the part of a Curated Text, which is at the beginning of that text, that starts with a line that (only) contains three subsequent '-'characters, and that ends with a second occurrence of such a line."},"headers")," for various purposes. Below is a list of fields that are known to be used by tools that either exist or are under construction. This list is by no means complete, because as tools may be extended, and new tools can be added, it is possible that other fields may have be in use in particular ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (or Party, which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scopes"),"."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Legend"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Name"))," contains the field name;"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Req'd"))," specifies whether (",(0,r.kt)("inlineCode",{parentName:"li"},"Y"),") or not (",(0,r.kt)("inlineCode",{parentName:"li"},"n"),", or ",(0,r.kt)("inlineCode",{parentName:"li"},"F"),") the field is required to be present as a header field. The ",(0,r.kt)("inlineCode",{parentName:"li"},"F")," means that we reserve this field for Future Use."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Description"))," specifies the meaning of the field, and other things you may need to know, e.g. why it is needed, a required syntax, etc."))),(0,r.kt)(n.Z,{mdxType:"APITable"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Req'd"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"termType")),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/term-type",title:"Term Type: a Text that identifies a particular *kind* of Semantic Unit within a particular Scope. Examples include `concept`, `relation`, `pattern` (or `mental-model`)."},"Text")," that identifies the kind of ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",title:"Semantic Unit: a basic building block of meaning or representation that exists within the 'mind' of a Party (i.e., in its Knowledge)."},"semantic unit")," that this ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",title:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated text")," describes. Typical values would be ",(0,r.kt)("inlineCode",{parentName:"td"},"concept"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"relation"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"pattern")," (or ",(0,r.kt)("inlineCode",{parentName:"td"},"mental-model"),"), or ",(0,r.kt)("inlineCode",{parentName:"td"},"usecase"),". If not specified, its value defaults to the ",(0,r.kt)("inlineCode",{parentName:"td"},"defaulttype"),"-field in the ",(0,r.kt)("a",{parentName:"td",href:"/docs/specs/files/saf#scope-section"},"scope section")," of the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/files/saf",title:"Scope Administration File: a YAML file that contains essential data about a particular Scope (e.g., specifying where its Curated Texts, Glossaries etc. live), the relationships this Scope has with other Scopes, and the specifications of the different Terminologies that are Curated within that Scope. The SAF of a Scope is located in its Scopedir."},"SAF"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"term")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"text that is used to refer to the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",title:"Semantic Unit: a basic building block of meaning or representation that exists within the 'mind' of a Party (i.e., in its Knowledge)."},"semantic unit")," that is documented by this ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",title:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated text"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"isa")),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/syntax/term-identifiers",title:"Term Identifier: a Text, of the form `<termid>@<terminology-identifier>`, that is used for identifying a Semantic Unit within a designated Terminology."},"Term identifier")," that identifies the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",title:"Semantic Unit: a basic building block of meaning or representation that exists within the 'mind' of a Party (i.e., in its Knowledge)."},"semantic unit")," of which this is a specialization.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bodyFile")),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:null},"Path, relative to the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/scopedir",title:"Scopedir: a directory in a computer file system that contains all files that are either being Curated within a particular Scope, or generated to serve some purpose within that Scope."},"scopedir"),", that contains the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/body",title:"Body (of a Curated Text): the part of a Curated Text that contains arbitrarily structured documentation about the Semantic Unit that the Curated Text documents."},"body")," of this ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",title:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated text"),". If not specified, the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/body",title:"Body (of a Curated Text): the part of a Curated Text that contains arbitrarily structured documentation about the Semantic Unit that the Curated Text documents."},"body")," in this file serves as the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/body",title:"Body (of a Curated Text): the part of a Curated Text that contains arbitrarily structured documentation about the Semantic Unit that the Curated Text documents."},"body")," of the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",title:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated text"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"glossaryTerm")),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:null},"Text that is used for the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent Concepts."},"term")," in a human readable ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/glossary",title:"Glossary: an alphabetically sorted list of Terms with the (single) meaning it has in (at least) one context."},"glossary"),". For example, for a ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent Concepts."},"term")," called ",(0,r.kt)("inlineCode",{parentName:"td"},"member"),", you may want to specify a glossaryTerm ",(0,r.kt)("inlineCode",{parentName:"td"},'member (of a <a href="https://essif-lab.github.io/framework/docs/terms/community" title="Community: a Party, consisting of at least two different Parties (the members of the Community) that seek to collaborate with each other so that each of them can achieve its individual Objectives more efficiently and/or effectively.">community</a>)'),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"glossaryText")),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:null},"Text that is used as the (raw) contents for the entry of this ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent Concepts."},"term")," in a human readable ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/glossary",title:"Glossary: an alphabetically sorted list of Terms with the (single) meaning it has in (at least) one context."},"glossary"),". This text MUST be expected to contain ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRefs"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"synonymOf")),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/syntax/term-identifiers",title:"Term Identifier: a Text, of the form `<termid>@<terminology-identifier>`, that is used for identifying a Semantic Unit within a designated Terminology."},"Term identifier")," that identifies the defined ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent Concepts."},"term")," of the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",title:"Semantic Unit: a basic building block of meaning or representation that exists within the 'mind' of a Party (i.e., in its Knowledge)."},"semantic unit")," for which this is a ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/synonym",title:"Synonym (of a [term](@)): a Term that has the same (or sufficiently similar) meaning as another Term (i.e., the Term of which it is a Synonym."},"synonym"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"grouptags")),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:null},"List of ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/grouptag",title:"Grouptag: a Tag that is used to group Terms within a specific Scope."},"grouptags"),", each of which signifies that the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/scoped-term",title:"Scoped Term: a Term that represents (and identifies) a specific Semantic Unit of a particular Community (or Party)."},"(scoped) term")," that this ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",title:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated text")," documents, is part of the group of ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent Concepts."},"terms")," that it represents.",(0,r.kt)("br",null),"Example: ",(0,r.kt)("inlineCode",{parentName:"td"},"[tev2, management]"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"formPhrases")),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:null},"List of ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/form-phrase",title:"Form Phrase (for a Term): a word or phrase that occurs in oral or written texts and that refers to a particular Semantic Unit, yet is not (necessarily) the  Term that is used in the Definition of that Semantic Unit. Form phrases can be, e.g., plural forms, possessive extensions, verb-conjugation forms, abbreviations, and other variations."},"texts")," that are ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/tools/trrt#id",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"used to convert")," the ",(0,r.kt)("inlineCode",{parentName:"td"},"show text")," parts of ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRefs")," into ",(0,r.kt)("inlineCode",{parentName:"td"},"term"),"s, for the purpose of accommodating plural forms (for nouns) or conjugate forms (for verbs). For details, see ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/form-phrase#specifying",title:"Form Phrase (for a Term): a word or phrase that occurs in oral or written texts and that refers to a particular Semantic Unit, yet is not (necessarily) the  Term that is used in the Definition of that Semantic Unit. Form phrases can be, e.g., plural forms, possessive extensions, verb-conjugation forms, abbreviations, and other variations."},"specifying form phrases"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"status")),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:null},"Text that identifies the status of the term. (",(0,r.kt)("a",{href:"https://essif-lab.github.io/framework/docs/terms/community",title:"Community: a Party, consisting of at least two different Parties (the members of the Community) that seek to collaborate with each other so that each of them can achieve its individual Objectives more efficiently and/or effectively."},"Communities")," of) ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (or Party, which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scopes")," may specify values for this field. An example is the ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/trustoverip/concepts-and-terminology-wg/blob/master/docs/status-tags.md"},"status tags used by ToIP"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"created")),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:null},"Date at which of the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",title:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated text")," was created, in the date format as used within this ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (or Party, which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"updated")),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:null},"Date at which of the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",title:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated text")," was last modified, in the date format as used within this ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (or Party, which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"contributors")),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:null},"Text that shows (or refers to) the people that have contributed to this ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",title:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated text"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"attribution")),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:null},"Text that credits the original creation of the texts in the document.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"originalLicense")),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:null},"Reference to the license of the work from which the texts were derived."))))),(0,r.kt)("admonition",{title:"Editor's note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Do we need to provide more guidance, e.g., regarding the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/front-matter",title:"Front Matter: a section at the top of a file that contains YAML (or similarly formatted) metadata, such as title, description, tags, and more."},"front matter")," fields that may be used by the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/tools/trrt",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT")," for converting ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRefs"),", e.g. with popovers?")))}f.isMDXComponent=!0}}]);