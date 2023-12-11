"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[6870],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>u});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},l=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),l=p(r),u=n,m=l["".concat(c,".").concat(u)]||l[u]||d[u]||o;return r?a.createElement(m,i(i({ref:t},f),{},{components:r})):a.createElement(m,i({ref:t},f))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=l;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}l.displayName="MDXCreateElement"},8550:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=r(3117),n=(r(7294),r(3905));r(4996);const o={id:"term-refs-introduction",sidebar_label:"TermRefs - Introduction",date:20220303},i="Term References - Introduction",s={unversionedId:"spec-syntax/term-refs-introduction",id:"spec-syntax/term-refs-introduction",title:"Term References - Introduction",description:"As an author or curator, you want to be able to mark words or phrases, and have them refer to (the documentation of) a particular concept or other semantic unit. Such marked-up words or phrases are called TermRefs.",source:"@site/docs/spec-syntax/10-term-ref-introduction.md",sourceDirName:"spec-syntax",slug:"/spec-syntax/term-refs-introduction",permalink:"/tev2-specifications/docs/spec-syntax/term-refs-introduction",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/spec-syntax/10-term-ref-introduction.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1702288678,formattedLastUpdatedAt:"Dec 11, 2023",sidebarPosition:10,frontMatter:{id:"term-refs-introduction",sidebar_label:"TermRefs - Introduction",date:20220303},sidebar:"tev2SideBar",previous:{title:"Overview",permalink:"/tev2-specifications/docs/spec-syntax/overview-spec-syntax"},next:{title:"TermRefs - Default Syntax",permalink:"/tev2-specifications/docs/spec-syntax/term-ref-default-syntax"}},c={},p=[{value:"Customizing TermRef Syntax",id:"customizing-termref-syntax",level:2}],f={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"term-references---introduction"},"Term References - Introduction"),(0,n.kt)("p",null,"As an ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/author",title:"Author: a person that creates a text that is meant to be read and understood by others - usually, a particular audience."},"author")," or ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/curator",title:"Curator: a person responsible for curating, managing, and maintaining the Terminologies, to ensure shared understanding among a Community working together on a particular set of objectives."},"curator"),", you want to be able to mark words or phrases, and have them refer to (the documentation of) a particular ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/concept",title:"Concept: a Semantic Unit that captures the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same')."},"concept")," or other ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",title:"a basic building block of meaning or representation that exists within the 'mind' of a party, e.g., a concept, relation, or property. Parties use terms (words/phrases) to refer to these intangible building blocks."},"semantic unit"),". Such marked-up words or phrases are called ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRefs"),"."),(0,n.kt)("p",null,"The following syntaxes can be used out-of-the-box for ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRefs"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"./term-ref-default-syntax"},"basic (default) syntax")),", and"),(0,n.kt)("li",{parentName:"ul"},"the ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"./term-ref-alt-syntax"},"alternative syntax")),".")),(0,n.kt)("h2",{id:"customizing-termref-syntax"},"Customizing TermRef Syntax"),(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/tev2",title:"TEv2: a set of specifications and tools that caters for the Curation of Terminologies, as well as for its subsequent use in publications of different types (e.g. websites, whitepapers) and formats (e.g. html, LaTeX), as appropriate for different, individual Scopes."},"TEv2")," allows ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/curator",title:"Curator: a person responsible for curating, managing, and maintaining the Terminologies, to ensure shared understanding among a Community working together on a particular set of objectives."},"curators")," or ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/author",title:"Author: a person that creates a text that is meant to be read and understood by others - usually, a particular audience."},"authors")," to specify their own syntaxes for ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRefs"),", as well as associated output formats. This enables them to specify what a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRef")," will look like after it has been rendered.",(0,n.kt)("p",null,"Selecting and/or specifying the way in which a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRef")," will be rendered is done by properly instructing the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/spec-tools/trrt",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TermRef resolution tool")," when your text is processed for rendering."),(0,n.kt)("admonition",{title:"Editor's note",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"We need some text here that points to the documentation for doing so. This could be e.g. in the ",(0,n.kt)("a",{parentName:"p",href:"/docs/manuals/author"},"authors manual")," and ",(0,n.kt)("a",{parentName:"p",href:"/docs/manuals/curator"},"curators manual"),", but also in the ",(0,n.kt)("a",{parentName:"p",href:"/docs/spec-tools/trrt"},"TRRT specifications"),", or in some manual that deals with adding rendering plugins.")))}d.isMDXComponent=!0}}]);