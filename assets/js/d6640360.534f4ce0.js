"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[1680],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(n),p=a,h=c["".concat(l,".").concat(p)]||c[p]||m[p]||r;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5746:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=n(3117),a=(n(7294),n(3905));n(4996);const r={id:"tev2-requirements",sidebar_label:"Thoughts on Tool Development",description:"Some early-time requirements for doing TermRefs.",date:20220303},i="Towards a usable Terminology Tool",s={unversionedId:"miscellaneous/tev2-requirements",id:"miscellaneous/tev2-requirements",title:"Towards a usable Terminology Tool",description:"Some early-time requirements for doing TermRefs.",source:"@site/docs/miscellaneous/90-tev2-requirements.md",sourceDirName:"miscellaneous",slug:"/miscellaneous/tev2-requirements",permalink:"/tev2-specifications/docs/miscellaneous/tev2-requirements",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/miscellaneous/90-tev2-requirements.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1731663339,formattedLastUpdatedAt:"Nov 15, 2024",sidebarPosition:90,frontMatter:{id:"tev2-requirements",sidebar_label:"Thoughts on Tool Development",description:"Some early-time requirements for doing TermRefs.",date:20220303},sidebar:"tev2SideBar",previous:{title:"Backgrounds",permalink:"/tev2-specifications/docs/miscellaneous/tev2-background"},next:{title:"Making Hovertexts Work",permalink:"/tev2-specifications/docs/miscellaneous/making-hovertexts-work"}},l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Helpful for readers",id:"helpful-for-readers",level:2},{value:"Easy to write for non-technical users",id:"easy-to-write-for-non-technical-users",level:2},{value:"Immediate feedback",id:"immediate-feedback",level:2},{value:"Sane defaults",id:"sane-defaults",level:2},{value:"Separation of concerns",id:"separation-of-concerns",level:2},{value:"Reuse of existing tools",id:"reuse-of-existing-tools",level:2},{value:"Extensibility",id:"extensibility",level:2}],u={toc:d};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"towards-a-usable-terminology-tool"},"Towards a usable Terminology Tool"),(0,a.kt)("p",null,"Referencing terms and concepts within and from outside of eSSIF-lab"),(0,a.kt)("p",null,"Author: Hidde-Jan Jongsma"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This text has been created prior to the specification and further development of TEv2.\nWe leave it here so that we can look back and see what has come of all this (or not).")),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"We want a good tool for terminology for a number of reasons, such as"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"sharing a single, good terminology within a group of people, is that it enables them to use its terms in a single meaning that is understood by all members of the group. It helps coming to grips with, e.g., conflation of terms which is an all too common cause of misunderstandings, inefficiencies, etc."),(0,a.kt)("li",{parentName:"ol"},"terms that are defined using ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/criterion",title:"Criterion: (aka: criteria) a text that people can evaluate to base a judgment or decision on."},"criteria")," that enable readers to determine whether or not something is an instance (example) of the concept to which the term refers, enables such concepts to be referenced in documents - even if within the context of that document, another term would be used to refer to that concept."),(0,a.kt)("li",{parentName:"ol"},"\u2026")),(0,a.kt)("p",null,"We need a technical solution that"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"is helpful for readers"),(0,a.kt)("li",{parentName:"ul"},"is easy to write for non-technical users"),(0,a.kt)("li",{parentName:"ul"},"provides immediate feedback"),(0,a.kt)("li",{parentName:"ul"},"has sane defaults"),(0,a.kt)("li",{parentName:"ul"},"supports separation of concerns"),(0,a.kt)("li",{parentName:"ul"},"enables reuse of existing tools"),(0,a.kt)("li",{parentName:"ul"},"is extensible")),(0,a.kt)("p",null,"Note: in this document we assume the use of a docusaurus project, in combination with MDX (markdown with JSX)."),(0,a.kt)("p",null,"Note: we use the ",(0,a.kt)("a",{parentName:"p",href:"https://essif-lab.github.io/framework/docs/terms/pattern-terminology"},"eSSIF-Lab Terminology Pattern")," as the conceptual basis for this tool. In short, this means that:\nevery document is considered part of a scope, the terminology of which it uses by default.\na document may also use terms defined in another scope (to be explicitly annotated as such)"),(0,a.kt)("h2",{id:"helpful-for-readers"},"Helpful for readers"),(0,a.kt)("p",null,"The main reason for using terminology tooling is to improve the process of a reader that attempts to understand the meanings that the document (s)he is reading attempts to convey. It is beneficial to a reader to quickly determine the meaning of a term in a document, especially when reading a highly technical document or a document that concerns complex conceptual models."),(0,a.kt)("p",null,"To this end, we need a terminology tool to enable a user to quickly identify a technical term, to instantly obtain a summary or short description of the term, and to be able to easily reach a place where the term is described in more detail."),(0,a.kt)("p",null,"The most straightforward solution, that builds on established UI components, is some kind of combination of a (distinctly colored) hyperlink in combination with some popup or modal component."),(0,a.kt)("h2",{id:"easy-to-write-for-non-technical-users"},"Easy to write for non-technical users"),(0,a.kt)("p",null,"A solution should minimize the amount of new things users need to learn before being able to use the terminology stack. For a docusaurus-based project, this could mean a few things:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use a syntax that looks very similar to existing markdown markup. For example, use a link-like syntax ",(0,a.kt)("inlineCode",{parentName:"p"},"[like this](%some-term@scope)")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"%[like that](scope@v1/some-other-term)"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use a React component with a minimal interface, for example"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-react"},"import Term from \u201csome-package\u201d\n\nUse it in MDX <Term label=\u201dsome-term\u201d>like this</Term>\n")),(0,a.kt)("p",null,"Both options have positive and negative aspects. The first option would probably be more suitable for people who are unfamiliar with React. However, the second option is more easily implemented, since it does not introduce new markdown syntax. A first step would be to support option 2, then add markdown parsing functionality enabling option 1."),(0,a.kt)("p",null,"What should be clear is that there should be only one syntax that can be used in any context that \u201cnormal\u201d markdown input is acceptable."),(0,a.kt)("p",null,"The syntax should also try to reduce friction and be ergonomic for the writer. For instance, if the referenced term can be inferred from the content of the link, a reader should be allowed to omit an explicit label for the term. The table below gives examples of what such a normalization step could look like:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Content"),(0,a.kt)("th",{parentName:"tr",align:null},"Possible inferred label"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"document"),(0,a.kt)("td",{parentName:"tr",align:null},"document")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Mental model"),(0,a.kt)("td",{parentName:"tr",align:null},"mental-model")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Mental Models"),(0,a.kt)("td",{parentName:"tr",align:null},"mental-model")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"DID Document"),(0,a.kt)("td",{parentName:"tr",align:null},"did-document")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"DID-Documents"),(0,a.kt)("td",{parentName:"tr",align:null},"did-document")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"DID-Document(s)"),(0,a.kt)("td",{parentName:"tr",align:null},"did-document")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"DID"),(0,a.kt)("td",{parentName:"tr",align:null},"did")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"..."),(0,a.kt)("td",{parentName:"tr",align:null},"...")))),(0,a.kt)("p",null,"Terms should also be able to specify multiple equivalent labels that point to a single term, allowing much used aliases, synonyms or irregular plurals to be used as the content of a reference without needing to add an explicit label. For instance \u201cperson\u201d and \u201cpeople\u201d, or \u201cDID\u201d and \u201cdecentralized identifier\u201d. See ",(0,a.kt)("a",{parentName:"p",href:"https://respec.org/docs/#definitions-and-linking"},"https://respec.org/docs/#definitions-and-linking")," for inspiration."),(0,a.kt)("h2",{id:"immediate-feedback"},"Immediate feedback"),(0,a.kt)("p",null,"An important feature of docusaurus projects is the ability to (hot-)reload a page after a writer has updated the corresponding markdown file. The change is immediately presented back to the writer, providing a very short write-view-revision feedback loop."),(0,a.kt)("p",null,"This means if a term is added to a markdown page, the term should immediately resolve (to the final version) and be visible to the writer. The only thing a writer should have to do is save the markdown file (and possibly) reload the corresponding page."),(0,a.kt)("p",null,"A process that modifies the markdown files or does not work in development mode is unacceptable. Necessary reindexing of terms or regeneration of glossary pages should be done in the background of the development server and should not require extra user interaction."),(0,a.kt)("p",null,"If a term cannot be resolved (a wrong label or typo) then the writer should notice this immediately, without breaking the rendering of the rest of the markdown page. This could mean logging an error in the terminal of the development server and visual feedback on the rendered markdown page (red color, highlighting, or something similar)."),(0,a.kt)("h2",{id:"sane-defaults"},"Sane defaults"),(0,a.kt)("p",null,"When adding the tool to a new (or existing) docusaurus project, the terminology stack \u201cshould just work\u201d, preferring convention over configuration. This means looking for term definitions in sensible default locations and publishing glossary pages at paths that are unlikely to lead to conflicts with existing pages."),(0,a.kt)("p",null,"It should also behave as other docusaurus plugins, being configurable in docusaurus.config.js, in the plugin section. Here a technical savvy user could replace default term locations, glossary page paths, used react components, etc."),(0,a.kt)("h2",{id:"separation-of-concerns"},"Separation of concerns"),(0,a.kt)("p",null,"The terminology plugin should have a modular design that separates the different components and functions into different modules, each with a well defined purpose and boundary. These functions include, but are not limited to:\nExtending markdown syntax and parsing into new AST nodes\nConverting AST nodes to some terminology based react component(s)\nBuilding an index of terms, labels and summaries\nResolving a term from the index and returning needed data for term components\nGenerating glossary related pages from the term index\nGenerating dictionaries from glossaries of different scopes"),(0,a.kt)("h2",{id:"reuse-of-existing-tools"},"Reuse of existing tools"),(0,a.kt)("p",null,"This document assumes that we are working on a docusaurus project. This means that there is a certain tool available already, providing Link components, and possibly popup or modal components. We should not reinvent the wheel and rely on these existing libraries and packages."),(0,a.kt)("p",null,"Furthermore, the current version of docusaurus relies on (an older version of) remark.js for markdown parsing and rendering. Anything dealing with markdown should probably be written as a plugin for that system."),(0,a.kt)("h2",{id:"extensibility"},"Extensibility"),(0,a.kt)("p",null,"The first version of this tool should aim to reproduce and improve upon the capabilities of the existing @docusaurus-terminology/parser package created by GrNet. However, in the future, we would like to support functionality such as external terminology references/glossaries, namespaces and versioning of term/glossaries."))}m.isMDXComponent=!0}}]);