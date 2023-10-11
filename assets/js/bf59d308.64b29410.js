"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[8572],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(r),h=o,m=p["".concat(c,".").concat(h)]||p[h]||f[h]||i;return r?n.createElement(m,a(a({ref:t},d),{},{components:r})):n.createElement(m,a({ref:t},d))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9464:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return f}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],s={id:"trrt",term:"trrt",termType:"concept",isa:null,bodyFile:"/spec-tools/12-trrt.md",glossaryTerm:"TermRef Rendering Tool",glossaryAlias:"TRRT",glossaryText:"a [TEv2 tool](@) that is designed to facilitate the visualization and rendering of [TermRefs](@).",synonymOf:null,grouptags:"tev2-tool, tev2-toolbox",formPhrases:"trrt{ss}, termref-rendering-tool{ss}, term-ref-rendering-tool{ss}",status:"proposed",created:new Date("2023-07-31T00:00:00.000Z"),updated:new Date("2023-07-31T00:00:00.000Z"),contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},c="TRRT - TermRef Rendering Tool",l={unversionedId:"terms/trrt",id:"terms/trrt",title:"TRRT - TermRef Rendering Tool",description:"The TRRT (TermRef Rendering Tool) is an essential component of the TEv2 toolbox, designed to facilitate the visualization and rendering of semantic units and their interrelationships within a specific terminology. The TRRT takes a TermRef as input, finds the MRG and the entry therin that is being referenced, and replaces that with a renderable ref, thus enabling the term to be rendered with various decorations and other characteristics.",source:"@site/docs/terms/trrt.md",sourceDirName:"terms",slug:"/terms/trrt",permalink:"/tev2-specifications/docs/terms/trrt",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/terms/trrt.md",tags:[],version:"current",lastUpdatedBy:"Ca5e",lastUpdatedAt:1697021452,formattedLastUpdatedAt:"Oct 11, 2023",frontMatter:{id:"trrt",term:"trrt",termType:"concept",isa:null,bodyFile:"/spec-tools/12-trrt.md",glossaryTerm:"TermRef Rendering Tool",glossaryAlias:"TRRT",glossaryText:"a [TEv2 tool](@) that is designed to facilitate the visualization and rendering of [TermRefs](@).",synonymOf:null,grouptags:"tev2-tool, tev2-toolbox",formPhrases:"trrt{ss}, termref-rendering-tool{ss}, term-ref-rendering-tool{ss}",status:"proposed",created:"2023-07-31T00:00:00.000Z",updated:"2023-07-31T00:00:00.000Z",contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},sidebar:"tev2SideBar",previous:{title:"TEv2 (Terminology Engine, version 2)",permalink:"/tev2-specifications/docs/terms/tev2"},next:{title:"Versiontag",permalink:"/tev2-specifications/docs/terms/versiontag"}},d={},f=[],p={toc:f};function h(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"trrt---termref-rendering-tool"},"TRRT - TermRef Rendering Tool"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"TRRT")," (",(0,i.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/term-ref",hovertext:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author.",target:"_self"},"TermRef")," Rendering Tool) is an essential component of the TEv2 toolbox, designed to facilitate the visualization and rendering of ",(0,i.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/semantic-unit",hovertext:"a basic building block of meaning or representation that exists within the 'mind' of a party, e.g., a concept, relation, or property. Parties use terms (words/phrases) to refer to these intangible building blocks.",target:"_self"},"semantic units")," and their interrelationships within a specific ",(0,i.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/terminology",hovertext:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics.",target:"_self"},"terminology"),". The TRRT takes a ",(0,i.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/term-ref",hovertext:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author.",target:"_self"},"TermRef")," as input, finds the ",(0,i.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/mrg",hovertext:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems.",target:"_self"},"MRG")," and the ",(0,i.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/mrg-entry",hovertext:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.).",target:"_self"},"entry")," therin that is being referenced, and replaces that with a ",(0,i.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/renderable-ref",hovertext:"Renderable Ref: a text with which the TRRT replaces a TermRef, that can be processed by specific third party rendering tools, the result of which is a rendering of the original TermRef that has additional characteristics that help Readers to (better) understand the intention of its Author.",target:"_self"},"renderable ref"),", thus enabling the term to be rendered with various decorations and other characteristics."))}h.isMDXComponent=!0}}]);