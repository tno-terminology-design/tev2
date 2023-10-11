"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[9446],{3905:function(e,t,i){i.d(t,{Zo:function(){return p},kt:function(){return f}});var o=i(7294);function s(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){s(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,o,s=function(e,t){if(null==e)return{};var i,o,s={},n=Object.keys(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||(s[i]=e[i]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(s[i]=e[i])}return s}var c=o.createContext({}),h=function(e){var t=o.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},p=function(e){var t=h(e.components);return o.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var i=e.components,s=e.mdxType,n=e.originalType,c=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),m=h(i),f=s,d=m["".concat(c,".").concat(f)]||m[f]||l[f]||n;return i?o.createElement(d,a(a({ref:t},p),{},{components:i})):o.createElement(d,a({ref:t},p))}));function f(e,t){var i=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=i.length,a=new Array(n);a[0]=m;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:s,a[1]=r;for(var h=2;h<n;h++)a[h]=i[h];return o.createElement.apply(null,a)}return o.createElement.apply(null,i)}m.displayName="MDXCreateElement"},1334:function(e,t,i){i.r(t),i.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return r},metadata:function(){return h},toc:function(){return l}});var o=i(7462),s=i(3366),n=(i(7294),i(3905)),a=["components"],r={term:"tag",termType:"concept",isa:"identifier",glossaryTerm:null,glossaryText:"an alphanumeric string that is used to identify [scopes](@) (so called 'scopetags'), group [terms](@) (so called 'grouptags'), or identify a specific version of a [terminology](@) (so called 'versiontags') from within a specific [scope](@).",synonymOf:null,grouptags:null,formPhrases:"tag{ss}",status:"proposed",created:new Date("2022-06-06T00:00:00.000Z"),updated:new Date("2022-06-06T00:00:00.000Z"),contributors:"RieksJ",attribution:"[eSSIF-Lab](https://essif-lab.github.io/framework)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},c="Tag",h={unversionedId:"terms/tag",id:"terms/tag",title:"Tag",description:"Summary",source:"@site/docs/terms/tag.md",sourceDirName:"terms",slug:"/terms/tag",permalink:"/tev2-specifications/docs/terms/tag",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/terms/tag.md",tags:[],version:"current",lastUpdatedBy:"Ca5e",lastUpdatedAt:1697021452,formattedLastUpdatedAt:"Oct 11, 2023",frontMatter:{term:"tag",termType:"concept",isa:"identifier",glossaryTerm:null,glossaryText:"an alphanumeric string that is used to identify [scopes](@) (so called 'scopetags'), group [terms](@) (so called 'grouptags'), or identify a specific version of a [terminology](@) (so called 'versiontags') from within a specific [scope](@).",synonymOf:null,grouptags:null,formPhrases:"tag{ss}",status:"proposed",created:"2022-06-06T00:00:00.000Z",updated:"2022-06-06T00:00:00.000Z",contributors:"RieksJ",attribution:"[eSSIF-Lab](https://essif-lab.github.io/framework)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},sidebar:"tev2SideBar",previous:{title:"Synonym",permalink:"/tev2-specifications/docs/terms/synonym"},next:{title:"term-identifier",permalink:"/tev2-specifications/docs/terms/term-identifier"}},p={},l=[{value:"Summary",id:"summary",level:3},{value:"Criteria",id:"criteria",level:3},{value:"Examples",id:"examples",level:3},{value:"Notes",id:"notes",level:3}],m={toc:l};function f(e){var t=e.components,i=(0,s.Z)(e,a);return(0,n.kt)("wrapper",(0,o.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"tag"},"Tag"),(0,n.kt)("h3",{id:"summary"},"Summary"),(0,n.kt)("p",null,"A ",(0,n.kt)("strong",{parentName:"p"},"Tag")," is an alphanumeric string that satisfies the regex ",(0,n.kt)("inlineCode",{parentName:"p"},"[a-z0-9_-]+"),", and that is used to identify ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives.",target:"_self"},"scopes")," (so called 'scopetags'), group ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope).",target:"_self"},"terms")," (so called 'grouptags'), or identify a specific version of a ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/terminology",hovertext:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics.",target:"_self"},"terminology")," (so called 'versiontags') from within a specific ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives.",target:"_self"},"scope"),"."),(0,n.kt)("p",null,"Scopetags ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/identify",hovertext:"Identify: an Act, by or on behalf of a Party, that results in the selection of either\n- a single Partial Identity that the party Owns, given some (observed or received) data, or\n- a single Entity from a given set of entities that is the Subject of a specified Partial Identity that the party Owns.",target:"_self"},"identify")," a ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives.",target:"_self"},"scope")," (from within a given ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives.",target:"_self"},"scope"),"), and hence can be used (within that given ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives.",target:"_self"},"scope"),") to disambiguate ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope).",target:"_self"},"terms"),". For example, ",(0,n.kt)("inlineCode",{parentName:"p"},"essiflab:term")," is an ",(0,n.kt)("a",{parentName:"p",href:"@"},"identifier")," for the ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/concept",hovertext:"Concept: a Semantic Unit that captures the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same').",target:"_self"},"concept")," that within the ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives.",target:"_self"},"scope")," ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/identify",hovertext:"Identify: an Act, by or on behalf of a Party, that results in the selection of either\n- a single Partial Identity that the party Owns, given some (observed or received) data, or\n- a single Entity from a given set of entities that is the Subject of a specified Partial Identity that the party Owns.",target:"_self"},"identified")," by the scopetag ",(0,n.kt)("inlineCode",{parentName:"p"},"essiflab")," is referred to by the ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope).",target:"_self"},"term")," 'term'."),(0,n.kt)("p",null,"Grouptags may be used within a ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives.",target:"_self"},"scope")," to tag various sorts or ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/semantic-unit",hovertext:"a basic building block of meaning or representation that exists within the 'mind' of a party, e.g., a concept, relation, or property. Parties use terms (words/phrases) to refer to these intangible building blocks.",target:"_self"},"semantic units")," such as ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/term",hovertext:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope).",target:"_self"},"terms"),", ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/concept",hovertext:"Concept: a Semantic Unit that captures the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same').",target:"_self"},"concepts"),", ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/mental-model",hovertext:"Mental Model: A Semantic Unit that relates a set of Concepts (ideas), Relations between them, and constraints about a certain topic, into a coherent and consistent whole (sometimes called 'viewpoint', or 'way of thinking').",target:"_self"},"patterns")," and the like. One can then say that this grouptag represents the group of ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/semantic-unit",hovertext:"a basic building block of meaning or representation that exists within the 'mind' of a party, e.g., a concept, relation, or property. Parties use terms (words/phrases) to refer to these intangible building blocks.",target:"_self"},"semantic units")," that are associated with that tag. This may be used for different purposes. One example is to tag every term that is part of a ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/mental-model",hovertext:"Mental Model: A Semantic Unit that relates a set of Concepts (ideas), Relations between them, and constraints about a certain topic, into a coherent and consistent whole (sometimes called 'viewpoint', or 'way of thinking').",target:"_self"},"pattern")," with a pattern-specific tag."),(0,n.kt)("p",null,"Versiontags are used to identify a specific version of the ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/terminology",hovertext:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics.",target:"_self"},"terminology")," of the ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives.",target:"_self"},"scope")," within which the versiontag lives. It may have various forms, and would typically be chosen such that it comes in handy with the tools that the ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/terms-community",hovertext:"Terms Community: a Community that maintains a Terminology for the purpose of avoiding misunderstandings between its members as they collaborate.",target:"_self"},"terms community")," has decided to use to curate that ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives.",target:"_self"},"scope"),"."),(0,n.kt)("h3",{id:"criteria"},"Criteria"),(0,n.kt)("p",null,"is an alphanumeric string that is used within a specific ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives.",target:"_self"},"scope")," to identify ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scope",hovertext:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives.",target:"_self"},"scopes")," and/or group ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/semantic-unit",hovertext:"a basic building block of meaning or representation that exists within the 'mind' of a party, e.g., a concept, relation, or property. Parties use terms (words/phrases) to refer to these intangible building blocks.",target:"_self"},"semantic units"),", and/or identify a version of its ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/terminology",hovertext:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics.",target:"_self"},"terminology"),". The alphanumeric string satisfies the regex ",(0,n.kt)("inlineCode",{parentName:"p"},"[a-z0-9_-]+"),"."),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"pattern-terminology@"},"terminology pattern")," provides an overview of how this concept fits in with related concepts."),(0,n.kt)("h3",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Examples of scopetags are ",(0,n.kt)("inlineCode",{parentName:"p"},"essif-lab"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"essiflab"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"toip"),", or ",(0,n.kt)("inlineCode",{parentName:"p"},"ctwg")),(0,n.kt)("h3",{id:"notes"},"Notes"),(0,n.kt)("p",null,"Discussions about which regex a tag should satisfy must be held with care. For example, one might argue that allowing the ",(0,n.kt)("inlineCode",{parentName:"p"},".")," character for ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/versiontag",hovertext:"Versiontag: a Tag that is used to Identify a specific version of a Terminology from within a specific Scope.",target:"_self"},"versiontags")," might be beneficial. However, allowing a ",(0,n.kt)("inlineCode",{parentName:"p"},".")," character in a ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/scopetag",hovertext:"Scopetag: a Tag that is used to Identify Scopes from within a specific Scope",target:"_self"},"scopetag")," may cause problems with (the alternative syntax) of ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/term-ref",hovertext:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author.",target:"_self"},"TermRefs"),", as email address in square brackets might then qualify as a ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/term-ref",hovertext:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author.",target:"_self"},"TermRef")," while that is very likely not the ",(0,n.kt)("a",{href:"https://tno-terminology-design.github.io/tev2-specifications/docs/terms/author",hovertext:"Author: a person that creates a text that is meant to be read and understood by others - usually, a particular audience.",target:"_self"},"author"),"'s intention."))}f.isMDXComponent=!0}}]);