"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[7711],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var o=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},s=Object.keys(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=o.createContext({}),p=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},l=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=p(r),h=i,d=u["".concat(c,".").concat(h)]||u[h]||f[h]||s;return r?o.createElement(d,n(n({ref:t},l),{},{components:r})):o.createElement(d,n({ref:t},l))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,n=new Array(s);n[0]=u;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,n[1]=a;for(var p=2;p<s;p++)n[p]=r[p];return o.createElement.apply(null,n)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6521:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>f,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var o=r(3117),i=(r(7294),r(3905));const s={id:"interpreter",displayed_sidebar:"tev2SideBar",term:"interpreter",termType:"concept",isa:null,glossaryTerm:"Interpreter",glossaryText:"a [regex](@) that is used to locate a particular text construct (such as a [TermRef](@) or [MRGRef](@)) in a text, and that populates [named capturing groups](@) as specified in the [interpreter profile](@) of the particular [text conversion tool](@) for which it is designed.",grouptags:null,formPhrases:["interpreter{ss}"],status:"proposed",created:20230731,updated:20240108,contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},n="Interpreter",a={unversionedId:"terms/interpreter",id:"terms/interpreter",title:"Interpreter",description:"An interpreter is a regex that is used to locate a particular text construct (such as a TermRef or MRGRef) in a text, and that populates named capturing groups as specified in the interpreter profile of the particular text conversion tool for which it is designed.",source:"@site/docs/terms/interpreter.md",sourceDirName:"terms",slug:"/terms/interpreter",permalink:"/tev2-specifications/docs/terms/interpreter",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/terms/interpreter.md",tags:[],version:"current",lastUpdatedBy:"Ca5e",lastUpdatedAt:1705853396,formattedLastUpdatedAt:"Jan 21, 2024",frontMatter:{id:"interpreter",displayed_sidebar:"tev2SideBar",term:"interpreter",termType:"concept",isa:null,glossaryTerm:"Interpreter",glossaryText:"a [regex](@) that is used to locate a particular text construct (such as a [TermRef](@) or [MRGRef](@)) in a text, and that populates [named capturing groups](@) as specified in the [interpreter profile](@) of the particular [text conversion tool](@) for which it is designed.",grouptags:null,formPhrases:["interpreter{ss}"],status:"proposed",created:20230731,updated:20240108,contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},sidebar:"tev2SideBar"},c={},p=[],l={toc:p};function f(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interpreter"},"Interpreter"),(0,i.kt)("p",null,"An ",(0,i.kt)("strong",{parentName:"p"},"interpreter")," is a ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/regex",title:"Regular Expression: a sequence of characters that specifies a text pattern that can be searched for within other, larger texts, for the purpose of, e.g., replacing the text pattern with some other text. Within TEv2, we use a JavaScript Flavor (ECMAScript 2022)."},"regex")," that is used to locate a particular text construct (such as a ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRef")," or ",(0,i.kt)("a",{href:"/tev2-specifications/docs/specs/syntax/mrg-ref-syntax",title:"MRGRef: a text that is Marked Up (in A Specific Way) so that it refers to a particular Terminology, as well as to a specific way for creating an associated HRG."},"MRGRef"),") in a text, and that populates ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/named-capturing-group",title:"Named Capturing Group: a sub-pattern within a Regex (called a 'Capturing Group') that has been given a name, allowing one to refer to that sub-pattern."},"named capturing groups")," as specified in the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/interpreter-profile",title:"Interpreter Profile: the set of Named Capturing Groups that are an Interpreter is expected to populate when it is used in the context of a specific TEv2 Tool (such as the TRRT or HRGT)."},"interpreter profile")," of the particular ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-text-conversion-tool",title:"TEv2 Text Conversion Tool: a TEv2 Tool whose purpose is to convert particular text constructs (such as TermRefs or MRGRefs) that exist in one or more files with other texts, the contents of which consists of some fixed construct that is populated with elements derived from existing text constructs and/or other resources."},"text conversion tool")," for which it is designed."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-toolbox",title:"TEv2 Toolbox: the collection of tools designed to support and facilitate the process of terminology management following the TEv2 Specifications. These tools assist Curators in various tasks related to the curation, creation, and maintenance of terminological assets."},"specifications")," of the particular ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-text-conversion-tool",title:"TEv2 Text Conversion Tool: a TEv2 Tool whose purpose is to convert particular text constructs (such as TermRefs or MRGRefs) that exist in one or more files with other texts, the contents of which consists of some fixed construct that is populated with elements derived from existing text constructs and/or other resources."},"tool")," tell you which ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/interpreter",title:"Interpreter: a Regex that is used to locate a particular text construct (such as a TermRef or MRGRef) in a text, and that populates Named Capturing Groups as specified in the Interpreter Profile of the particular Text Conversion Tool for which it is designed."},"interpreters")," are predefined for that ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-text-conversion-tool",title:"TEv2 Text Conversion Tool: a TEv2 Tool whose purpose is to convert particular text constructs (such as TermRefs or MRGRefs) that exist in one or more files with other texts, the contents of which consists of some fixed construct that is populated with elements derived from existing text constructs and/or other resources."},"tool"),", and what the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/interpreter-profile",title:"Interpreter Profile: the set of Named Capturing Groups that are an Interpreter is expected to populate when it is used in the context of a specific TEv2 Tool (such as the TRRT or HRGT)."},"interpreter profile")," is that a customized ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/interpreter",title:"Interpreter: a Regex that is used to locate a particular text construct (such as a TermRef or MRGRef) in a text, and that populates Named Capturing Groups as specified in the Interpreter Profile of the particular Text Conversion Tool for which it is designed."},"interpreter")," may use."),(0,i.kt)("admonition",{title:"Editor's note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"We could perhaps add references to appropriate sections of relevant tools, so that readers can see examples of this.")),(0,i.kt)("p",null,"The generic workings of interpreters is documented in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/overview/tev2-text-conversion"},"TEv2 Text Conversion pattern"),"."))}f.isMDXComponent=!0}}]);