"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[4069],{3905:function(e,t,o){o.d(t,{Zo:function(){return d},kt:function(){return u}});var i=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function n(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,i,a=function(e,t){if(null==e)return{};var o,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=i.createContext({}),l=function(e){var t=i.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):n(n({},t),e)),o},d=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(o),u=a,m=p["".concat(c,".").concat(u)]||p[u]||h[u]||r;return o?i.createElement(m,n(n({ref:t},d),{},{components:o})):i.createElement(m,n({ref:t},d))}));function u(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,n=new Array(r);n[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,n[1]=s;for(var l=2;l<r;l++)n[l]=o[l];return i.createElement.apply(null,n)}return i.createElement.apply(null,o)}p.displayName="MDXCreateElement"},7883:function(e,t,o){o.r(t),o.d(t,{assets:function(){return h},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return p}});var i=o(7462),a=o(3366),r=(o(7294),o(3905)),n=o(4996),s=["components"],c={id:"tev2-installation",date:20220303},l="Installation",d={unversionedId:"manuals/curator/tev2-installation",id:"manuals/curator/tev2-installation",title:"Installation",description:"<img",source:"@site/docs/manuals/curator/10-curator-tev2-installation.md",sourceDirName:"manuals/curator",slug:"/manuals/curator/tev2-installation",permalink:"/tev2-specifications/docs/manuals/curator/tev2-installation",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/manuals/curator/10-curator-tev2-installation.md",tags:[],version:"current",lastUpdatedBy:"Ca5e",lastUpdatedAt:1697303141,formattedLastUpdatedAt:"Oct 14, 2023",sidebarPosition:10,frontMatter:{id:"tev2-installation",date:20220303},sidebar:"tev2SideBar",previous:{title:"Curators",permalink:"/tev2-specifications/docs/manuals/curator/curator-overview"},next:{title:"Contributors",permalink:"/tev2-specifications/docs/manuals/contributor/contributor-overview"}},h={},p=[{value:"Structure of Scope Directories",id:"structure-of-scope-directories",level:3},{value:"Integrating Scope Directories and the ToIP Terminology Toolbox",id:"integrating-scope-directories-and-the-toip-terminology-toolbox",level:3},{value:"Integrating Scope Directories and Third Party Rendering Tools",id:"integrating-scope-directories-and-third-party-rendering-tools",level:3}],u={toc:p};function m(e){var t=e.components,o=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation"},"Installation"),(0,r.kt)("img",{alt:"This page is under construction",src:(0,n.Z)("images/wip/wip-under-construction.png")}),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This section on 'Installation' can really be written only after the rest is complete. The contents of this page is just a set of ideas that may well have been deprecated already.")),(0,r.kt)("admonition",{title:"Editor's note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This page should only document the generic stuff. Any installation details that are specific to a tool SHOULD be documented in the page(s) that document the particular tool. Obviously, this page could mention the tools for which that is the case, and link to the associated sections.")),(0,r.kt)("p",null,"TEv2 is a tool for ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/curate",hovertext:"Curate: to select, organize, and present Terms, Definitions, and other, related content in a thoughtful and purposeful manner to establish shared understanding among a Community working together on a particular set of objectives."},"curating")," ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",hovertext:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology"),"-related data from the perspective of a single ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),". Installation comprises"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"setting up, or appointing an (online) directory that will serve as a ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/scopedir",hovertext:"Scopedir: a directory in a computer file system that contains all files that are either being Curated within a particular Scope, or generated to serve some purpose within that Scope."},"scope directory"),";"),(0,r.kt)("li",{parentName:"ul"},"creating a ",(0,r.kt)("a",{parentName:"li",href:"docs/spec-files/saf"},"Scope Administration File (SAF)"),", and providing the configuration of the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," and its ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",hovertext:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology"),";"),(0,r.kt)("li",{parentName:"ul"},"installing the ",(0,r.kt)("a",{parentName:"li",href:"/docs/tev2-toolbox"},"tev2-toolbox"),";"),(0,r.kt)("li",{parentName:"ul"},"integrating the ",(0,r.kt)("a",{parentName:"li",href:"/docs/tev2-toolbox"},"tools")," with other tools, such as a CI/CD pipeline on github or gitlab, static site generators such as ",(0,r.kt)("a",{parentName:"li",href:"https://pages.github.com/"},"github pages")," or ",(0,r.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/docs-introduction"},"Docusaurus"),", etc. See also: ",(0,r.kt)("a",{parentName:"li",href:"/docs/tev2-toolbox"},"Using the Tools"),".")),(0,r.kt)("h3",{id:"structure-of-scope-directories"},"Structure of Scope Directories"),(0,r.kt)("p",null,"Depending on the other tooling that is going to be used, a ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/scopedir",hovertext:"Scopedir: a directory in a computer file system that contains all files that are either being Curated within a particular Scope, or generated to serve some purpose within that Scope."},"scope directory")," has to be specified that is part of the (online) directory in which the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",hovertext:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology")," has to be used. The ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope's")," ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/saf",hovertext:"SAF: a YAML file that contains essential data about a particular scope, such as the locations of the scope's curated texts, glossaries, and the specifications of the curated terminologies. The SAF is located in the so-called scopedir."},"scope administration file (SAF)")," specifies whatever needs to be administered for that ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),"; this file is maintained by the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/curator",hovertext:"Curator: a person responsible for curating, managing, and maintaining the Terminologies, to ensure shared understanding among a Community working together on a particular set of objectives."},"curators")," of the scope (using a regular text editor)."),(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/curator",hovertext:"Curator: a person responsible for curating, managing, and maintaining the Terminologies, to ensure shared understanding among a Community working together on a particular set of objectives."},"Curators")," must also specify a location (directory) within the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/scopedir",hovertext:"Scopedir: a directory in a computer file system that contains all files that are either being Curated within a particular Scope, or generated to serve some purpose within that Scope."},"scope directory")," where ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/glossary",hovertext:"Glossary: an alphabetically sorted list of Terms with the (single) meaning it has in (at least) one context."},"glossaries")," will be located. This directory, which is called the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/glossarydir",hovertext:"Glossarydir: a directory within a Scopedir within which the different versions of its (Machine Readable and Human Readable) Glossaries are created and maintained."},"glossary directory")," or ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/glossarydir",hovertext:"Glossarydir: a directory within a Scopedir within which the different versions of its (Machine Readable and Human Readable) Glossaries are created and maintained."},"glossarydir")," is located within the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/scopedir",hovertext:"Scopedir: a directory in a computer file system that contains all files that are either being Curated within a particular Scope, or generated to serve some purpose within that Scope."},"scopedir"),", and contains all ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/glossary",hovertext:"Glossary: an alphabetically sorted list of Terms with the (single) meaning it has in (at least) one context."},"glossaries")," that are generated by and/or needed within the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," - as well as perhaps some other stuff.",(0,r.kt)("h3",{id:"integrating-scope-directories-and-the-toip-terminology-toolbox"},"Integrating Scope Directories and the ToIP Terminology Toolbox"),(0,r.kt)("admonition",{title:"Editor's Note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Content to be produced")),(0,r.kt)("h3",{id:"integrating-scope-directories-and-third-party-rendering-tools"},"Integrating Scope Directories and Third Party Rendering Tools"),(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",hovertext:"a basic building block of meaning or representation that exists within the 'mind' of a party, e.g., a concept, relation, or property. Parties use terms (words/phrases) to refer to these intangible building blocks."},"Semantic units")," are intended to also be used by/within third party rendering tools, such as [github pages](https://pages.github.com/), [Docusaurus](https://docusaurus.io/docs/docs-introduction), or LaTeX",(0,r.kt)("admonition",{title:"Editor's Note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Content to be produced")))}m.isMDXComponent=!0}}]);