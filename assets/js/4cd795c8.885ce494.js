"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[2766],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>p});var i=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,o=function(e,t){if(null==e)return{};var a,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=i.createContext({}),l=function(e){var t=i.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},m=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=l(a),p=o,f=u["".concat(c,".").concat(p)]||u[p]||d[p]||r;return a?i.createElement(f,n(n({ref:t},m),{},{components:a})):i.createElement(f,n({ref:t},m))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,n=new Array(r);n[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,n[1]=s;for(var l=2;l<r;l++)n[l]=a[l];return i.createElement.apply(null,n)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3402:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=a(3117),o=(a(7294),a(3905));a(4996);const r={id:"tev2-terminology-curation",sidebar_label:"Terminology Curation",date:20220303},n="TEv2 - Terminology Curation",s={unversionedId:"overview/tev2-terminology-curation",id:"overview/tev2-terminology-curation",title:"TEv2 - Terminology Curation",description:"This section may need to be revised, and/or moved to the Curators Manual.",source:"@site/docs/overview/40-tev2-terminology-curation.md",sourceDirName:"overview",slug:"/overview/tev2-terminology-curation",permalink:"/tev2-specifications/docs/overview/tev2-terminology-curation",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/overview/40-tev2-terminology-curation.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1705060769,formattedLastUpdatedAt:"Jan 12, 2024",sidebarPosition:40,frontMatter:{id:"tev2-terminology-curation",sidebar_label:"Terminology Curation",date:20220303},sidebar:"tev2SideBar",previous:{title:"Text Conversions",permalink:"/tev2-specifications/docs/overview/tev2-text-conversion"},next:{title:"Backgrounds",permalink:"/tev2-specifications/docs/overview/tev2-background"}},c={},l=[],m={toc:l};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tev2---terminology-curation"},"TEv2 - Terminology Curation"),(0,o.kt)("admonition",{title:"Editor's note",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This section may need to be revised, and/or moved to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/manuals/curator/curator-overview"},"Curators Manual"),".")),(0,o.kt)("p",null,"TEv2 assumes that the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/curate",title:"Curate: to select, organize, and present Terms, Definitions, and other, related content in a thoughtful and purposeful manner to establish shared understanding among a Community working together on a particular set of Objectives."},"curated")," data resides in an existing ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/scopedir",title:"Scopedir: a directory in a computer file system that contains all files that are either being Curated within a particular Scope, or generated to serve some purpose within that Scope."},"scope directory"),", and that ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/curated-file",title:"Curated File: a file that is located in the Scopedir of a specific Scope, and is (therefore) Curated by (one of) the Curators of that Scope."},"curated files")," are expected to be processable by other tools, including, but not limited to ",(0,o.kt)("a",{parentName:"p",href:"https://pages.github.com/"},"github pages")," or ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/docs-introduction"},"Docusaurus"),", which are static site generators for web sites that document all sorts of guidance, specifications, etc. Such a ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/scopedir",title:"Scopedir: a directory in a computer file system that contains all files that are either being Curated within a particular Scope, or generated to serve some purpose within that Scope."},"scope directory")," must be ",(0,o.kt)("a",{parentName:"p",href:"/docs/manuals/curator/tev2-installation"},"set up")," in advance."),(0,o.kt)("p",null,"Thus, whenever a ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/terms-community",title:"Terms Community: a Community that maintains a Terminology for the purpose of avoiding misunderstandings between its members as they collaborate."},"terms-community")," decided that some contribution is to be included in the part of the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/corpus",title:"Corpus: the documentation that describes the Knowledge around a set of Terms and Concepts."},"corpus")," that is maintained by that ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/terms-community",title:"Terms Community: a Community that maintains a Terminology for the purpose of avoiding misunderstandings between its members as they collaborate."},"community"),", the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/curator",title:"Curator (of a Scope): a person responsible for curating, managing, and maintaining the Terminologies, to ensure shared understanding among a Community working together on a particular set of Objectives."},"curators")," of that ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/terms-community",title:"Terms Community: a Community that maintains a Terminology for the purpose of avoiding misunderstandings between its members as they collaborate."},"community")," are tasked to"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"create/maintain/update any ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),"-related administration in the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/scopedir",title:"Scopedir: a directory in a computer file system that contains all files that are either being Curated within a particular Scope, or generated to serve some purpose within that Scope."},"scope directory")," that is needed for curation, as specified by a ",(0,o.kt)("a",{parentName:"li",href:"docs/specs/files/saf"},"Scope Administration File (SAF)"),";"),(0,o.kt)("li",{parentName:"ol"},"convert that contribution to (a set of) ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/curated-file",title:"Curated File: a file that is located in the Scopedir of a specific Scope, and is (therefore) Curated by (one of) the Curators of that Scope."},"curated files"),", that comply with the ",(0,o.kt)("a",{parentName:"li",href:"/docs/specs/files/curated-text-file"},"specifications")," for such files;"),(0,o.kt)("li",{parentName:"ol"},"store them at the location as designated in the ",(0,o.kt)("a",{parentName:"li",href:"docs/specs/files/saf"},"SAF"),";"),(0,o.kt)("li",{parentName:"ol"},"generate/update any artifact that the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/terms-community",title:"Terms Community: a Community that maintains a Terminology for the purpose of avoiding misunderstandings between its members as they collaborate."},"community")," wants to automatically maintain, which in particular includes the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/specs/files/mrg",title:"Machine Readable Glossary: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the TEv2 MRG Specifications, to enable automated processing and integration with software systems."},"MRG")," and associated ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/hrg",title:"Human Readable Glossary: a Glossary that is designed to be easily understandable and accessible to humans. HRGs present terms and their meanings in a format that prioritizes human comprehension and may include additional contextual information to aid understanding."},"HRG"),".")),(0,o.kt)("p",null,"This document provides an overview of the knowledge that ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/curator",title:"Curator (of a Scope): a person responsible for curating, managing, and maintaining the Terminologies, to ensure shared understanding among a Community working together on a particular set of Objectives."},"curators")," may need to perform this task, which can be broken up in the following parts:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/docs/manuals/curator/tev2-installation"},"Setup/installation")," of a ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/scopedir",title:"Scopedir: a directory in a computer file system that contains all files that are either being Curated within a particular Scope, or generated to serve some purpose within that Scope."},"scope directory")," that is suitable for working with TEv2, and the creation of a ",(0,o.kt)("a",{parentName:"p",href:"docs/specs/files/saf"},"SAF"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/curate",title:"Curate: to select, organize, and present Terms, Definitions, and other, related content in a thoughtful and purposeful manner to establish shared understanding among a Community working together on a particular set of Objectives."},"Curation")," of terminological contributions. This requires knowledge about the [file structure](/docs/specs/files/curated-text-file) of ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/curated-file",title:"Curated File: a file that is located in the Scopedir of a specific Scope, and is (therefore) Curated by (one of) the Curators of that Scope."},"curated file"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Generation of documentation (artifacts). It is typical for a ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/terms-community",title:"Terms Community: a Community that maintains a Terminology for the purpose of avoiding misunderstandings between its members as they collaborate."},"terms community")," to want to have a ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/glossary",title:"Glossary: an alphabetically sorted list of Terms with the (single) meaning it has in (at least) one context."},"glossary")," of the terms they either have defined themselves, or are defined elsewhere but are to be used within that ",(0,o.kt)("a",{href:"https://essif-lab.github.io/framework/docs/terms/community",title:"Community: a Party, consisting of at least two different Parties (the members of the Community) that seek to collaborate with each other so that each of them can achieve its individual Objectives more efficiently and/or effectively."},"community"),". However, other artifacts may be generated as well (a ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/dictionary",title:"Dictionary: an alphabetically sorted list of Terms with various meanings that they may have in different contexts."},"dictionary"),", white papers, etc.) - this is all up to the ",(0,o.kt)("a",{href:"https://essif-lab.github.io/framework/docs/terms/community",title:"Community: a Party, consisting of at least two different Parties (the members of the Community) that seek to collaborate with each other so that each of them can achieve its individual Objectives more efficiently and/or effectively."},"community"),"."))))}d.isMDXComponent=!0}}]);