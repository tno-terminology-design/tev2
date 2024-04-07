"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[2943],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>m});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(i),m=r,f=d["".concat(c,".").concat(m)]||d[m]||l[m]||o;return i?n.createElement(f,a(a({ref:t},u),{},{components:i})):n.createElement(f,a({ref:t},u))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var p=2;p<o;p++)a[p]=i[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},5997:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=i(3117),r=(i(7294),i(3905)),o=i(4996);const a={id:"contributors-repo",sidebar_label:"Using Git Repo Markdown",date:20220513},s="Using Markdown files in a Git Repo",c={unversionedId:"manuals/contributor/contributors-repo",id:"manuals/contributor/contributors-repo",title:"Using Markdown files in a Git Repo",description:"<img",source:"@site/docs/manuals/contributor/10-contributors-repo.md",sourceDirName:"manuals/contributor",slug:"/manuals/contributor/contributors-repo",permalink:"/tev2-specifications/docs/manuals/contributor/contributors-repo",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/manuals/contributor/10-contributors-repo.md",tags:[],version:"current",lastUpdatedBy:"Ca5e",lastUpdatedAt:1712494678,formattedLastUpdatedAt:"Apr 7, 2024",sidebarPosition:10,frontMatter:{id:"contributors-repo",sidebar_label:"Using Git Repo Markdown",date:20220513},sidebar:"tev2SideBar",previous:{title:"Contributor Overview",permalink:"/tev2-specifications/docs/manuals/contributor/contributor-overview"},next:{title:"Using Wikis (Markdown)",permalink:"/tev2-specifications/docs/manuals/contributor/contributors-wiki"}},p={},u=[{value:"Users contributions",id:"users-contributions",level:2},{value:"Curators tasks",id:"curators-tasks",level:2}],l={toc:u};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-markdown-files-in-a-git-repo"},"Using Markdown files in a Git Repo"),(0,r.kt)("img",{alt:"This page is under construction",src:(0,o.Z)("images/wip/wip-under-construction.png")}),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,"One way in which ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/curator",title:"Curator (of a Scope): a person responsible for curating, managing, and maintaining the Terminologies, to ensure shared understanding among a Community working together on a particular set of Objectives."},"curators")," may decide that people can contribute, is by enabling them to ",(0,r.kt)("a",{parentName:"p",href:"https://opensource.com/article/19/7/create-pull-request-github"},"create pull requests")," to the repository that contains the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (or Party, which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope's")," ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/corpus",title:"Corpus: the documentation that describes the Knowledge around a set of Terms and Concepts."},"corpus"),". The ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/curator",title:"Curator (of a Scope): a person responsible for curating, managing, and maintaining the Terminologies, to ensure shared understanding among a Community working together on a particular set of Objectives."},"curators")," SHOULD specify the procedures, the code of conduct, etc. that support and enable the maturing of these texts, and how it is decided that such texts can become part of the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (or Party, which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope's")," ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/corpus",title:"Corpus: the documentation that describes the Knowledge around a set of Terms and Concepts."},"corpus"),". That's outside the scope of this document."),(0,r.kt)("h2",{id:"users-contributions"},"Users contributions"),(0,r.kt)("p",null,"From the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/tev2",title:"TEv2: a set of specifications and Tools that caters for the Curation of Terminologies, as well as for its subsequent use in publications of different types (e.g. websites, whitepapers) and formats (e.g. html, LaTeX), as appropriate for different, individual Scopes."},"TEv2")," perspective, people contribute by creating and changing the markdown pages that describe the various ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",title:"Semantic Unit: a basic building block of meaning or representation that exists within the 'mind' of a Party (i.e., in its Knowledge)."},"semantic units"),", such as  ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/concept",title:"Concept: a Semantic Unit that captures the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same')."},"concepts")," , ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/use-case",title:"Use-Case: a Semantic Unit that captures a specific situation or example used to illustrate how a Mental Model (or other Semantic Units) can be used."},"use-cases"),", ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/mental-model",title:"Mental Model: a Semantic Unit that relates a set of Concepts (ideas), Relations between them, and constraints about a certain topic, into a coherent and consistent whole (sometimes called 'viewpoint', or 'way of thinking')."},"mental models"),", etc."),(0,r.kt)("p",null,"A user can use ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRefs")," to mark the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent Concepts."},"terms")," that it wants to be linked to a specific meaning (",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",title:"Semantic Unit: a basic building block of meaning or representation that exists within the 'mind' of a Party (i.e., in its Knowledge)."},"semantic unit"),")."),(0,r.kt)("h2",{id:"curators-tasks"},"Curators tasks"),(0,r.kt)("admonition",{title:"Editor's note:",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Text has to be provided here")))}d.isMDXComponent=!0}}]);