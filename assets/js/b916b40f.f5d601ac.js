"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[8127],{3905:(e,a,t)=>{t.d(a,{Zo:()=>h,kt:()=>l});var s=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,s)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,s,r=function(e,a){if(null==e)return{};var t,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)t=o[s],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)t=o[s],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var n=s.createContext({}),m=function(e){var a=s.useContext(n),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},h=function(e){var a=m(e.components);return s.createElement(n.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return s.createElement(s.Fragment,{},a)}},f=s.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,n=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),f=m(t),l=r,d=f["".concat(n,".").concat(l)]||f[l]||p[l]||o;return t?s.createElement(d,i(i({ref:a},h),{},{components:t})):s.createElement(d,i({ref:a},h))}));function l(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var n in a)hasOwnProperty.call(a,n)&&(c[n]=a[n]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var m=2;m<o;m++)i[m]=t[m];return s.createElement.apply(null,i)}return s.createElement.apply(null,t)}f.displayName="MDXCreateElement"},40:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>n,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var s=t(3117),r=(t(7294),t(3905));const o={id:"form-phrase-macro-map",displayed_sidebar:"tev2SideBar",term:"form-phrase-macro-map",termType:"concept",isa:null,glossaryAbbr:"Macro Map",glossaryTerm:"Form Phrase Macro Map",glossaryText:"a list of [form phrase macros](@); these maps are used by tools such as the [MRGT](@) and the [TRRT](@).",glossaryNotes:["[Form-phrase macro maps can be specified in the `scope` section of a [SAF](@)","[Form-phrase macro maps can be specified in (the `mrgt` section) of a [configuration file](/docs/specs/files/configuration-file) that is used when  calling the [MRGT](@) and/or [TRRT](@)."],formPhrases:["formphrase macro map{ss}","formphrase macromap{ss}","form-phrase macro map{ss}","form-phrase macromap{ss}","macro map{ss}","macromap{ss}"],status:"proposed",created:20240228,updated:20240228,contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},i="Form Phrase Macro Maps",c={unversionedId:"terms/form-phrase-macro-map",id:"terms/form-phrase-macro-map",title:"Form Phrase Macro Maps",description:"A Form Phrase Macro Map is a list of form phrase macros. Such lists are used by tools such as the MRGT and the TRRT.",source:"@site/docs/terms/form-phrase-macro-map.md",sourceDirName:"terms",slug:"/terms/form-phrase-macro-map",permalink:"/tev2-specifications/docs/terms/form-phrase-macro-map",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/terms/form-phrase-macro-map.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1709191073,formattedLastUpdatedAt:"Feb 29, 2024",frontMatter:{id:"form-phrase-macro-map",displayed_sidebar:"tev2SideBar",term:"form-phrase-macro-map",termType:"concept",isa:null,glossaryAbbr:"Macro Map",glossaryTerm:"Form Phrase Macro Map",glossaryText:"a list of [form phrase macros](@); these maps are used by tools such as the [MRGT](@) and the [TRRT](@).",glossaryNotes:["[Form-phrase macro maps can be specified in the `scope` section of a [SAF](@)","[Form-phrase macro maps can be specified in (the `mrgt` section) of a [configuration file](/docs/specs/files/configuration-file) that is used when  calling the [MRGT](@) and/or [TRRT](@)."],formPhrases:["formphrase macro map{ss}","formphrase macromap{ss}","form-phrase macro map{ss}","form-phrase macromap{ss}","macro map{ss}","macromap{ss}"],status:"proposed",created:20240228,updated:20240228,contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},sidebar:"tev2SideBar"},n={},m=[{value:"Purpose",id:"purpose",level:2},{value:"Specifying and Using Form Phrase Macro Maps",id:"usage",level:2},{value:"Example",id:"example",level:2}],h={toc:m};function p(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,s.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"form-phrase-macro-maps"},"Form Phrase Macro Maps"),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"Form Phrase Macro Map")," is a list of ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/form-phrase-macro",title:"Form Phrase Macro: a sequence of characters (the macro name) that Identifies a sequence (map) of character strings that specify typical variations of a Form Phrase, such as plural forms, possessie extensions, verb-conjugation forms, etc."},"form phrase macros"),". Such lists are used by tools such as the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/tools/mrgt",title:"Machine Readable Glossary Tool: a software tool designed to create, manage, and process Machine Readable Glossaries (MRGs), as Specified By TEv2. MRGTs offer features for selecting Terms that are Curated within the Scope it is run in, or from other Scopes."},"MRGT")," and the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/tools/trrt",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT"),"."),(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/form-phrase-macro",title:"Form Phrase Macro: a sequence of characters (the macro name) that Identifies a sequence (map) of character strings that specify typical variations of a Form Phrase, such as plural forms, possessie extensions, verb-conjugation forms, etc."},"Form phrase macros")," are typically useful in a limited set of languages. One might even say that for a given language, a specific set of useful ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/form-phrase-macro",title:"Form Phrase Macro: a sequence of characters (the macro name) that Identifies a sequence (map) of character strings that specify typical variations of a Form Phrase, such as plural forms, possessie extensions, verb-conjugation forms, etc."},"Form phrase macros")," would exist.",(0,r.kt)("h2",{id:"purpose"},"Purpose"),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/form-phrase-macro-map",title:"Form Phrase Macro Map: a list of Form Phrase Macros; these maps are used by tools such as the MRGT and the TRRT."},"form phrase macro map")," enables ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/curator",title:"Curator (of a Scope): a person responsible for curating, managing, and maintaining the Terminologies, to ensure shared understanding among a Community working together on a particular set of Objectives."},"curators")," to define a set of ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/form-phrase-macro",title:"Form Phrase Macro: a sequence of characters (the macro name) that Identifies a sequence (map) of character strings that specify typical variations of a Form Phrase, such as plural forms, possessie extensions, verb-conjugation forms, etc."},"form phrase macros")," that is particularly suited for creating ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/form-phrase",title:"Form Phrase (for a Term): a word or phrase that occurs in oral or written texts and that refers to a particular Semantic Unit, yet is not (necessarily) the  Term that is used in the Definition of that Semantic Unit. Form phrases can be, e.g., plural forms, possessive extensions, verb-conjugation forms, abbreviations, and other variations."},"form phrases")," for the language that is used within the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," they ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/curate",title:"Curate: to select, organize, and present Terms, Definitions, and other, related content in a thoughtful and purposeful manner to establish shared understanding among a Community working together on a particular set of Objectives."},"curate"),"."),(0,r.kt)("h2",{id:"usage"},"Specifying and Using Form Phrase Macro Maps"),(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/form-phrase-macro-map",title:"Form Phrase Macro Map: a list of Form Phrase Macros; these maps are used by tools such as the MRGT and the TRRT."},"Form phrase macro maps")," can be specified in",(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"scope")," section of the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/files/saf",title:"Scope Administration File: a YAML file that contains essential data about a particular Scope (e.g., specifying where its Curated Texts, Glossaries etc. live), the relationships this Scope has with other Scopes, and the specifications of the different Terminologies that are Curated within that Scope. The SAF of a Scope is located in its Scopedir."},"SAF")," of such ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scopes"),", or"),(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("a",{parentName:"li",href:"/docs/specs/files/configuration-file"},"configuration file")," that is used when  calling the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/tools/mrgt",title:"Machine Readable Glossary Tool: a software tool designed to create, manage, and process Machine Readable Glossaries (MRGs), as Specified By TEv2. MRGTs offer features for selecting Terms that are Curated within the Scope it is run in, or from other Scopes."},"MRGT")," and/or ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/tools/trrt",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT"),".")),(0,r.kt)("p",null,"Whenever a ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-tool",title:"TEv2 Tool: any software application or utility designed to support and streamline various tasks related to terminology management following the TEv2 specifications."},"TEv2 tool")," (e.g., the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/tools/mrgt",title:"Machine Readable Glossary Tool: a software tool designed to create, manage, and process Machine Readable Glossaries (MRGs), as Specified By TEv2. MRGTs offer features for selecting Terms that are Curated within the Scope it is run in, or from other Scopes."},"MRGT"),") needs a ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/form-phrase-macro-map",title:"Form Phrase Macro Map: a list of Form Phrase Macros; these maps are used by tools such as the MRGT and the TRRT."},"form phrase macro map"),", this ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/form-phrase-macro-map",title:"Form Phrase Macro Map: a list of Form Phrase Macros; these maps are used by tools such as the MRGT and the TRRT."},"macro map")," is constructed as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"An initial ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/form-phrase-macro-map",title:"Form Phrase Macro Map: a list of Form Phrase Macros; these maps are used by tools such as the MRGT and the TRRT."},"macro map")," consists of the default one, which is specified in the ",(0,r.kt)("a",{parentName:"li",href:"#example"},"example section")," below."),(0,r.kt)("li",{parentName:"ol"},"If the (the scope section of) the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/files/saf",title:"Scope Administration File: a YAML file that contains essential data about a particular Scope (e.g., specifying where its Curated Texts, Glossaries etc. live), the relationships this Scope has with other Scopes, and the specifications of the different Terminologies that are Curated within that Scope. The SAF of a Scope is located in its Scopedir."},"SAF")," contains a ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/form-phrase-macro-map",title:"Form Phrase Macro Map: a list of Form Phrase Macros; these maps are used by tools such as the MRGT and the TRRT."},"form phrase macro map"),", this replaces the initial ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/form-phrase-macro-map",title:"Form Phrase Macro Map: a list of Form Phrase Macros; these maps are used by tools such as the MRGT and the TRRT."},"macro map"),". So, all ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/form-phrase-macro",title:"Form Phrase Macro: a sequence of characters (the macro name) that Identifies a sequence (map) of character strings that specify typical variations of a Form Phrase, such as plural forms, possessie extensions, verb-conjugation forms, etc."},"form phrase macros")," that are used within the scope must then appear in the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/form-phrase-macro-map",title:"Form Phrase Macro Map: a list of Form Phrase Macros; these maps are used by tools such as the MRGT and the TRRT."},"macro map")," of that ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/files/saf",title:"Scope Administration File: a YAML file that contains essential data about a particular Scope (e.g., specifying where its Curated Texts, Glossaries etc. live), the relationships this Scope has with other Scopes, and the specifications of the different Terminologies that are Curated within that Scope. The SAF of a Scope is located in its Scopedir."},"SAF"),"."),(0,r.kt)("li",{parentName:"ol"},"If the ",(0,r.kt)("a",{parentName:"li",href:"/docs/specs/files/configuration-file"},"configuration file")," that is used to call the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-tool",title:"TEv2 Tool: any software application or utility designed to support and streamline various tasks related to terminology management following the TEv2 specifications."},"TEv2 tool")," contains a ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/form-phrase-macro-map",title:"Form Phrase Macro Map: a list of Form Phrase Macros; these maps are used by tools such as the MRGT and the TRRT."},"form phrase macro map"),", the contents of this ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/form-phrase-macro-map",title:"Form Phrase Macro Map: a list of Form Phrase Macros; these maps are used by tools such as the MRGT and the TRRT."},"macro map")," overwrites the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/form-phrase-macro-map",title:"Form Phrase Macro Map: a list of Form Phrase Macros; these maps are used by tools such as the MRGT and the TRRT."},"macro map")," that is being constructed. This means that when a ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/form-phrase-macro-map",title:"Form Phrase Macro Map: a list of Form Phrase Macros; these maps are used by tools such as the MRGT and the TRRT."},"macro map")," in the ",(0,r.kt)("a",{parentName:"li",href:"/docs/specs/files/configuration-file"},"configuration file")," contains a ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/form-phrase-macro",title:"Form Phrase Macro: a sequence of characters (the macro name) that Identifies a sequence (map) of character strings that specify typical variations of a Form Phrase, such as plural forms, possessie extensions, verb-conjugation forms, etc."},"macro"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"that doesn't yet exist, it will be added to the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/form-phrase-macro-map",title:"Form Phrase Macro Map: a list of Form Phrase Macros; these maps are used by tools such as the MRGT and the TRRT."},"macro map"),";"),(0,r.kt)("li",{parentName:"ul"},"that already exists, it will overwrite the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/form-phrase-macro",title:"Form Phrase Macro: a sequence of characters (the macro name) that Identifies a sequence (map) of character strings that specify typical variations of a Form Phrase, such as plural forms, possessie extensions, verb-conjugation forms, etc."},"macro")," that existed;"),(0,r.kt)("li",{parentName:"ul"},"whose value is ",(0,r.kt)("inlineCode",{parentName:"li"},'""')," (empty), this means that the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/form-phrase-macro",title:"Form Phrase Macro: a sequence of characters (the macro name) that Identifies a sequence (map) of character strings that specify typical variations of a Form Phrase, such as plural forms, possessie extensions, verb-conjugation forms, etc."},"macro")," is rendered ineffective (it doesn't do anything).")))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"Here is an example of a ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/form-phrase-macro-map",title:"Form Phrase Macro Map: a list of Form Phrase Macros; these maps are used by tools such as the MRGT and the TRRT."},"macro map")," that specifies a set of ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/form-phrase-macro",title:"Form Phrase Macro: a sequence of characters (the macro name) that Identifies a sequence (map) of character strings that specify typical variations of a Form Phrase, such as plural forms, possessie extensions, verb-conjugation forms, etc."},"form phrase macros")," that were designed to support English ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/form-phrase",title:"Form Phrase (for a Term): a word or phrase that occurs in oral or written texts and that refers to a particular Semantic Unit, yet is not (necessarily) the  Term that is used in the Definition of that Semantic Unit. Form phrases can be, e.g., plural forms, possessive extensions, verb-conjugation forms, abbreviations, and other variations."},"form phrases"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'macros:\n- "{ss}":   ["", "s", "\'s", "(s)"],      // "act{ss}" --\x3e "act", "acts", "act\'s", "act(s)"\n- "{ess}":  ["", "es", "\'s", "(es)"],    // "regex{es}" --\x3e "regex", "regexes", "regex\'s", "regex(es"\n- "{yies}": ["y", "y\'s", "ies"],         // "part{yies}" --\x3e "party", "party\'s", "parties"\n- "{ying}": ["y", "ying", "ies", "ied"], // "identif{ying}" --\x3e "identify", "identifying", "identifies", "identified"\n- "{es}":   ["e", "es", "ed", "ing"],    // "mangag{es}" --\x3e "manage", "manages", "managed", "managing"\n- "{able}": ["able", "ability"]          // "cap{able}" --\x3e "capable", "capability"\n')))}p.isMDXComponent=!0}}]);