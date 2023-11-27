"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[9603],{3905:(e,t,i)=>{i.d(t,{Zo:()=>h,kt:()=>m});var o=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,o,r=function(e,t){if(null==e)return{};var i,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var c=o.createContext({}),p=function(e){var t=o.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},h=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var i=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=p(i),m=r,l=d["".concat(c,".").concat(m)]||d[m]||u[m]||n;return i?o.createElement(l,a(a({ref:t},h),{},{components:i})):o.createElement(l,a({ref:t},h))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=i.length,a=new Array(n);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var p=2;p<n;p++)a[p]=i[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,i)}d.displayName="MDXCreateElement"},3915:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var o=i(3117),r=(i(7294),i(3905)),n=i(4996);const a={id:"contributors-wiki",sidebar_label:"Using Wikis (Markdown)",date:20220513},s="Using Wikis",c={unversionedId:"manuals/contributor/contributors-wiki",id:"manuals/contributor/contributors-wiki",title:"Using Wikis",description:"<img",source:"@site/docs/manuals/contributor/20-contributors-wiki.md",sourceDirName:"manuals/contributor",slug:"/manuals/contributor/contributors-wiki",permalink:"/tev2-specifications/docs/manuals/contributor/contributors-wiki",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/manuals/contributor/20-contributors-wiki.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1701100300,formattedLastUpdatedAt:"Nov 27, 2023",sidebarPosition:20,frontMatter:{id:"contributors-wiki",sidebar_label:"Using Wikis (Markdown)",date:20220513},sidebar:"tev2SideBar",previous:{title:"Using Git Repo Markdown",permalink:"/tev2-specifications/docs/manuals/contributor/contributors-repo"},next:{title:"Using LaTeX",permalink:"/tev2-specifications/docs/manuals/contributor/contributors-LaTeX"}},p={},h=[{value:"Users contributions",id:"users-contributions",level:2},{value:"Curators tasks",id:"curators-tasks",level:2}],u={toc:h};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-wikis"},"Using Wikis"),(0,r.kt)("img",{alt:"This page is under construction",src:(0,n.Z)("images/wip/wip-under-construction.png")}),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,"One way in which ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/curator",hovertext:"Curator: a person responsible for curating, managing, and maintaining the Terminologies, to ensure shared understanding among a Community working together on a particular set of objectives."},"curators")," may decide that ",(0,r.kt)("a",{parentName:"p",href:"@"},"users")," can contribute, is by providing a ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Wiki"},"wiki")," that the ",(0,r.kt)("a",{parentName:"p",href:"@"},"users")," are encouraged to edit, discuss, and evolve to a level of maturity that warrants the text to be ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/ingestion-process",hovertext:"Ingestion Process: the process that is run by a Terms-community, in which their members suggest, draft, and discuss Definitions (Terms + Criteria) that are relevant for a particular Scope, and converting such contributions into Curated Texts that accurately document the Concepts and other Terminologic Artifacts and that adhere to the [TEv2-specifications](/docs/spec-files/ctext-file)."},"ingested")," into the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope's")," ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/corpus",hovertext:"Corpus: the documentation that describes the Knowledge around a set of Terms and Concepts."},"corpus"),". The ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/curator",hovertext:"Curator: a person responsible for curating, managing, and maintaining the Terminologies, to ensure shared understanding among a Community working together on a particular set of objectives."},"curators")," SHOULD specify the procedures, the code of conduct, etc. that support and enable the maturing of these texts, and how it is decided that such texts can become part of the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope's")," ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/corpus",hovertext:"Corpus: the documentation that describes the Knowledge around a set of Terms and Concepts."},"corpus"),". That's outside the scope of this document."),(0,r.kt)("h2",{id:"users-contributions"},"Users contributions"),(0,r.kt)("p",null,"From the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/tev2",hovertext:"TEv2: a set of specifications and tools that caters for the Curation of Terminologies, as well as for its subsequent use in publications of different types (e.g. websites, whitepapers) and formats (e.g. html, LaTeX), as appropriate for different, individual Scopes."},"TEv2")," perspective, ",(0,r.kt)("a",{parentName:"p",href:"@"},"users")," may contribute by ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/communities/documenting-your-project-with-wikis/adding-or-editing-wiki-pages"},"creating or editing wiki-pages")," for a specific ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",hovertext:"a basic building block of meaning or representation that exists within the 'mind' of a party, e.g., a concept, relation, or property. Parties use terms (words/phrases) to refer to these intangible building blocks."},"semantic unit"),". The ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/curator",hovertext:"Curator: a person responsible for curating, managing, and maintaining the Terminologies, to ensure shared understanding among a Community working together on a particular set of objectives."},"curators")," would typically already have various wiki-pages, each of which serves as a template for e.g. the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/definition",hovertext:"Definition: the combination of a Term and a descriptive text, where the Term refers to a Concept or other Semantic Unit, and the descriptive text enables a set of Parties to have the same understanding about that Concept. Ideally, the descriptive text is a criterion that such Parties can use to determine what is, and what is not, an instance (or example) of that Concept."},"definition")," of a ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/concept",hovertext:"Concept: a Semantic Unit that captures the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same')."},"concept")," or ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"term"),", a ",(0,r.kt)("a",{parentName:"p",href:"@"},"use-case"),", a ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/mental-model",hovertext:"Mental Model: a Semantic Unit that relates a set of Concepts (ideas), Relations between them, and constraints about a certain topic, into a coherent and consistent whole (sometimes called 'viewpoint', or 'way of thinking')."},"mental model"),", or any other kind of ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",hovertext:"a basic building block of meaning or representation that exists within the 'mind' of a party, e.g., a concept, relation, or property. Parties use terms (words/phrases) to refer to these intangible building blocks."},"semantic unit")," that is relevant within the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),"."),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{parentName:"p",href:"@"},"user")," can take the template, and follow the associated instructions (e.g. provide content for the various sections). That's basically it."),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{parentName:"p",href:"@"},"user")," can use ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",hovertext:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRefs")," to mark the terms that it wants to be linked to a specific meaning (",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",hovertext:"a basic building block of meaning or representation that exists within the 'mind' of a party, e.g., a concept, relation, or property. Parties use terms (words/phrases) to refer to these intangible building blocks."},"semantic unit"),")."),(0,r.kt)("h2",{id:"curators-tasks"},"Curators tasks"),(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/curator",hovertext:"Curator: a person responsible for curating, managing, and maintaining the Terminologies, to ensure shared understanding among a Community working together on a particular set of objectives."},"Curators")," that have decided to use a [wiki](https://en.wikipedia.org/wiki/Wiki) as a means for [users](@) to contribute to the development of it's ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope's")," ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/corpus",hovertext:"Corpus: the documentation that describes the Knowledge around a set of Terms and Concepts."},"corpus"),", should do the following:",(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you do not already have one, ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/get-started/signing-up-for-github/signing-up-for-a-new-github-account"},"create a git account"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/get-started/quickstart/create-a-repo"},"Create a (git) repository"),", either a brand new one, or ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template"},"from a template"),"."))),(0,r.kt)("admonition",{title:"Editor's note:",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Additional steps need to be written here.\nThe idea is")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"(etc.)")))}d.isMDXComponent=!0}}]);