"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[7827],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var i=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function n(e,t){if(null==e)return{};var o,i,r=function(e,t){if(null==e)return{};var o,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)o=s[i],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)o=s[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=i.createContext({}),l=function(e){var t=i.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var o=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,p=n(e,["components","mdxType","originalType","parentName"]),d=l(o),h=r,f=d["".concat(c,".").concat(h)]||d[h]||m[h]||s;return o?i.createElement(f,a(a({ref:t},p),{},{components:o})):i.createElement(f,a({ref:t},p))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=o.length,a=new Array(s);a[0]=d;var n={};for(var c in t)hasOwnProperty.call(t,c)&&(n[c]=t[c]);n.originalType=e,n.mdxType="string"==typeof e?e:r,a[1]=n;for(var l=2;l<s;l++)a[l]=o[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,o)}d.displayName="MDXCreateElement"},3112:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>n,toc:()=>l});var i=o(3117),r=(o(7294),o(3905));const s={id:"mrg-import",displayed_sidebar:"tev2SideBar",term:"mrg-import",termType:"concept",isa:null,bodyFile:"/specs/tools/13-mrg-import.md",glossaryTerm:"MRG Import (Tool)",glossaryText:"is a tool in the [TEv2](@) toolbox that is run within a particular [scope](@) for the purpose of obtaining [MRGs](@) from other [scopes](@), as specified in the [scope's](@) [SAF](@), and putting them in the [scope's](@) [glossarydir](@).",grouptags:["glossary-entries","terminology-management-tools"],formPhrases:["mrg-import","mrg-importer","mrg-import-tool","mrg-importer-tool"],status:"proposed",created:20230731,updated:20230731,contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},a="MRG Importer",n={unversionedId:"terms/mrg-import",id:"terms/mrg-import",title:"MRG Importer",description:"The MRG Importer is a tool in the TEv2 toolbox that is run within a particular scope for the purpose of obtaining MRGs from other scopes, as specified in the scope's SAF, and putting them in the scope's glossarydir.",source:"@site/docs/terms/mrg-import.md",sourceDirName:"terms",slug:"/terms/mrg-import",permalink:"/tev2-specifications/docs/terms/mrg-import",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/terms/mrg-import.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1724925355,formattedLastUpdatedAt:"Aug 29, 2024",frontMatter:{id:"mrg-import",displayed_sidebar:"tev2SideBar",term:"mrg-import",termType:"concept",isa:null,bodyFile:"/specs/tools/13-mrg-import.md",glossaryTerm:"MRG Import (Tool)",glossaryText:"is a tool in the [TEv2](@) toolbox that is run within a particular [scope](@) for the purpose of obtaining [MRGs](@) from other [scopes](@), as specified in the [scope's](@) [SAF](@), and putting them in the [scope's](@) [glossarydir](@).",grouptags:["glossary-entries","terminology-management-tools"],formPhrases:["mrg-import","mrg-importer","mrg-import-tool","mrg-importer-tool"],status:"proposed",created:20230731,updated:20230731,contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},sidebar:"tev2SideBar"},c={},l=[{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2}],p={toc:l};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mrg-importer"},"MRG Importer"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"MRG Importer")," is a tool in the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/tev2",title:"TEv2: a set of specifications and Tools that caters for the Curation of Terminologies, as well as for its subsequent use in publications of different types (e.g. websites, whitepapers) and formats (e.g. html, LaTeX), as appropriate for different, individual Scopes."},"TEv2")," toolbox that is run within a particular ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (or Party, which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," for the purpose of obtaining ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/files/mrg",title:"Machine Readable Glossary: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the TEv2 MRG Specifications, to enable automated processing and integration with software systems."},"MRGs")," from other ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (or Party, which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scopes"),", as specified in the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (or Party, which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope's")," ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/files/saf",title:"Scope Administration File: a YAML file that contains essential data about a particular Scope (e.g., specifying where its Curated Texts, Glossaries etc. live), the relationships this Scope has with other Scopes, and the specifications of the different Terminologies that are Curated within that Scope. The SAF of a Scope is located in its Scopedir."},"SAF"),", and putting them in the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (or Party, which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope's")," ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/glossarydir",title:"Glossarydir: a directory within a Scopedir within which the different versions of its (Machine Readable and Human Readable) Glossaries are created and maintained."},"glossarydir"),". "),(0,r.kt)("p",null,"The MRG importer ensures that within the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (or Party, which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),", all ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/files/mrg",title:"Machine Readable Glossary: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the TEv2 MRG Specifications, to enable automated processing and integration with software systems."},"MRGs")," are available that other tools (such as the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/tools/trrt",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT"),", ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/tools/mrgt",title:"Machine Readable Glossary Tool: a software tool designed to create, manage, and process Machine Readable Glossaries (MRGs), as Specified By TEv2."},"MRGT"),", ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/tools/hrgt",title:"Human Readable Glossary Tool: a software tool designed to create, manage, and process Human Readable Glossaries (HRGs), as Specified By TEv2. HRGTs offer features for selecting Terms that are Curated within the Scope it is run in, or from other Scopes."},"HRGT"),", etc.) may need to accomplish their tasks."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In a collaborative terminology project with multiple scopes, the MRG importer retrieves and consolidates MRGs from individual scopes, making them available for querying and use."),(0,r.kt)("li",{parentName:"ol"},"The MRG importer is used to synchronize MRGs across multiple collaborating organizations, ensuring consistent terminology usage and interpretation.")),(0,r.kt)("h2",{id:"notes"},"Notes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The MRG importer simplifies the process of obtaining necessary MRGs, and ensures that any problems that might arise in that context, e.g. the need for providing credentials for obtaining MRGs from private repos, are handled in one place. Also, it reduces the need for manual data collection and copying."),(0,r.kt)("li",{parentName:"ul"},"The availability of local copies of MRGs enhances the efficiency and reliability of terminology management activities.")))}m.isMDXComponent=!0}}]);