"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[2943],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||l[f]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5997:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=r(3117),o=(r(7294),r(3905)),i=r(4996);const a={id:"contributors-repo",sidebar_label:"Using Git Repo Markdown",date:20220513},s="Using Markdown files in a Git Repo",c={unversionedId:"manuals/contributor/contributors-repo",id:"manuals/contributor/contributors-repo",title:"Using Markdown files in a Git Repo",description:"<img",source:"@site/docs/manuals/contributor/10-contributors-repo.md",sourceDirName:"manuals/contributor",slug:"/manuals/contributor/contributors-repo",permalink:"/tev2-specifications/docs/manuals/contributor/contributors-repo",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/manuals/contributor/10-contributors-repo.md",tags:[],version:"current",lastUpdatedBy:"Ca5e",lastUpdatedAt:1706092613,formattedLastUpdatedAt:"Jan 24, 2024",sidebarPosition:10,frontMatter:{id:"contributors-repo",sidebar_label:"Using Git Repo Markdown",date:20220513}},p={},u=[{value:"Users contributions",id:"users-contributions",level:2},{value:"Curators tasks",id:"curators-tasks",level:2}],l={toc:u};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-markdown-files-in-a-git-repo"},"Using Markdown files in a Git Repo"),(0,o.kt)("img",{alt:"This page is under construction",src:(0,i.Z)("images/wip/wip-under-construction.png")}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,"One way in which ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/curator",title:"Curator (of a Scope): a person responsible for curating, managing, and maintaining the Terminologies, to ensure shared understanding among a Community working together on a particular set of Objectives."},"curators")," may decide that ",(0,o.kt)("a",{parentName:"p",href:"@"},"users")," can contribute, is by enabling them to ",(0,o.kt)("a",{parentName:"p",href:"https://opensource.com/article/19/7/create-pull-request-github"},"create pull requests")," to the repository that contains the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope's")," ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/corpus",title:"Corpus: the documentation that describes the Knowledge around a set of Terms and Concepts."},"corpus"),". The ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/curator",title:"Curator (of a Scope): a person responsible for curating, managing, and maintaining the Terminologies, to ensure shared understanding among a Community working together on a particular set of Objectives."},"curators")," SHOULD specify the procedures, the code of conduct, etc. that support and enable the maturing of these texts, and how it is decided that such texts can become part of the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope's")," ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/corpus",title:"Corpus: the documentation that describes the Knowledge around a set of Terms and Concepts."},"corpus"),". That's outside the scope of this document."),(0,o.kt)("h2",{id:"users-contributions"},"Users contributions"),(0,o.kt)("p",null,"From the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/tev2",title:"TEv2: a set of specifications and Tools that caters for the Curation of Terminologies, as well as for its subsequent use in publications of different types (e.g. websites, whitepapers) and formats (e.g. html, LaTeX), as appropriate for different, individual Scopes."},"TEv2")," perspective, ",(0,o.kt)("a",{parentName:"p",href:"@"},"users")," contribute by creating and changing the markdown pages that describe the various ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",title:"a basic building block of meaning or representation that exists within the 'mind' of a party, e.g., a concept, relation, or property. Parties use terms (words/phrases) to refer to these intangible building blocks."},"semantic units"),", such as  ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/concept",title:"Concept: a Semantic Unit that captures the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same')."},"concepts")," , ",(0,o.kt)("a",{parentName:"p",href:"@"},"use-cases"),", ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/mental-model",title:"Mental Model: a Semantic Unit that relates a set of Concepts (ideas), Relations between them, and constraints about a certain topic, into a coherent and consistent whole (sometimes called 'viewpoint', or 'way of thinking')."},"mental models"),", etc."),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"@"},"user")," can use ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRefs")," to mark the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"terms")," that it wants to be linked to a specific meaning (",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",title:"a basic building block of meaning or representation that exists within the 'mind' of a party, e.g., a concept, relation, or property. Parties use terms (words/phrases) to refer to these intangible building blocks."},"semantic unit"),")."),(0,o.kt)("h2",{id:"curators-tasks"},"Curators tasks"),(0,o.kt)("admonition",{title:"Editor's note:",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Text has to be provided here")))}d.isMDXComponent=!0}}]);