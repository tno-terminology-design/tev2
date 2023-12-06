"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[7485],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=p(n),h=a,u=f["".concat(c,".").concat(h)]||f[h]||m[h]||i;return n?r.createElement(u,o(o({ref:t},l),{},{components:n})):r.createElement(u,o({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3466:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(3117),a=(n(7294),n(3905));const i={term:"concept",termType:"concept",isa:"semantic-unit",glossaryTerm:null,glossaryText:"a [semantic unit](@) that captures the ideas/thoughts behind a classification of [entities](@) (what makes [entities](@) in that class 'the same').",synonymOf:null,grouptags:null,formPhrases:"concept{ss}",status:"proposed",created:new Date("2022-06-06T00:00:00.000Z"),updated:new Date("2022-06-06T00:00:00.000Z"),contributors:"RieksJ",attribution:"[eSSIF-Lab](https://essif-lab.github.io/framework)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},o="Concept",s={unversionedId:"terms/concept",id:"terms/concept",title:"Concept",description:"Summary",source:"@site/docs/terms/concept.md",sourceDirName:"terms",slug:"/terms/concept",permalink:"/tev2-specifications/docs/terms/concept",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/terms/concept.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1695710108,formattedLastUpdatedAt:"Sep 26, 2023",frontMatter:{term:"concept",termType:"concept",isa:"semantic-unit",glossaryTerm:null,glossaryText:"a [semantic unit](@) that captures the ideas/thoughts behind a classification of [entities](@) (what makes [entities](@) in that class 'the same').",synonymOf:null,grouptags:null,formPhrases:"concept{ss}",status:"proposed",created:"2022-06-06T00:00:00.000Z",updated:"2022-06-06T00:00:00.000Z",contributors:"RieksJ",attribution:"[eSSIF-Lab](https://essif-lab.github.io/framework)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"}},c={},p=[{value:"Summary",id:"summary",level:3},{value:"Purpose",id:"purpose",level:3},{value:"Criteria",id:"criteria",level:3},{value:"Notes",id:"notes",level:3}],l={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"concept"},"Concept"),(0,a.kt)("h3",{id:"summary"},"Summary"),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"Concept")," is a ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",hovertext:"a basic building block of meaning or representation that exists within the 'mind' of a party, e.g., a concept, relation, or property. Parties use terms (words/phrases) to refer to these intangible building blocks."},"semantic unit")," that tries to capture the idea behind a classification of entities",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),", allowing us to reason about everything in the class as if it were one thing. For example, the ideas (",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Mental_representation"},"mental representations"),") you have when processing the sentences \"I can drink beer from a beer glass' and 'I can drink beer from a coffee mug' shows that the concepts that are behind 'beer glass' and 'coffee mug' differ. Note that in order to communicate about this idea, we also need a word or phrase (i.e.: a ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"term"),(0,a.kt)("sup",{parentName:"p",id:"fnref-2"},(0,a.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," that we can use to refer to (instances of) this idea)."),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"pattern-terminology@"},"terminology pattern")," provides an overview of how this concept fits in with related concepts (as a specialization of a ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",hovertext:"a basic building block of meaning or representation that exists within the 'mind' of a party, e.g., a concept, relation, or property. Parties use terms (words/phrases) to refer to these intangible building blocks."},"semantic unit"),")."),(0,a.kt)("h3",{id:"purpose"},"Purpose"),(0,a.kt)("p",null,"Working together is easier when you and your peers share the same ideas. We need a way to test and ensure, that you and your peers ",(0,a.kt)("em",{parentName:"p"},"actually")," have the same understanding, for the purpose of making cooperation easier. Doing so is expected to not only reduce the number of terminological discussions, but also improve the efficiency and effectiveness of the remaining discussions."),(0,a.kt)("h3",{id:"criteria"},"Criteria"),(0,a.kt)("p",null,"A (description/specification of a) Concept MUST be ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Extensional_and_intensional_definitions"},"intensionally defined"),", i.e. associated with a criterion that can be used to determine whether or not someone or something qualifies as (an instance of) that Concept, and that has the property that it has been shown that the vast majority of contributors and other users apply it in the same manner in different situations (i.e. they arrive at the same conclusion as to whether or not someone or something qualifies under that criterion in any given situation)."),(0,a.kt)("h3",{id:"notes"},"Notes"),(0,a.kt)("p",null,"There is an important ",(0,a.kt)("a",{parentName:"p",href:"https://simple.wikipedia.org/wiki/Concept"},"distinction between concepts and the (multitude of) terms")," (names, labels) that we need to be able to talk and reason (argue) about them. Please consider that"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"different terms are used in different contexts for the same concept"),(0,a.kt)("li",{parentName:"ul"},"in different contexts, a single term may refer to different concepts"),(0,a.kt)("li",{parentName:"ul"},"to resolve terminological disputes, which usually are about the 'correct' meaning of a term, try to establish the criteria that the different participants use for the concept behind the term. That helps participants understand each others (different) positions, and provides a better basis for resolving the conflict.")),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"WikiPedia has a concise ",(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Concept"},"explanation of concepts"),". We use the term 'concept' as a ",(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Mental_representation"},"mental representation"),".",(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-2"},"For the difference between 'Concept' and 'Term', see ",(0,a.kt)("a",{parentName:"li",href:"https://simple.wikipedia.org/wiki/Concept"},"https://simple.wikipedia.org/wiki/Concept"),".",(0,a.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0}}]);