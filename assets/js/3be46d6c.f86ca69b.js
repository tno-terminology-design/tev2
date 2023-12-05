"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[8490],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),h=i,f=d["".concat(p,".").concat(h)]||d[h]||m[h]||n;return r?a.createElement(f,o(o({ref:t},c),{},{components:r})):a.createElement(f,o({ref:t},c))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<n;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7552:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var a=r(3117),i=(r(7294),r(3905));const n={},o="Error Reporting",s={unversionedId:"spec-tools/tool-docs/trrt/error-reporting",id:"spec-tools/tool-docs/trrt/error-reporting",title:"Error Reporting",description:"During execution the TRRT outputs information about the state of the tool to the console. After succesful execution, a resulution report is output as well, which attempts to give more insight into the terminology design through help messages. In addition to the help and error messages listed in the sections below, the messages include timestamps, information about the type of message, the filename, and linenumber of the object which caused the message. Error messages may also supply additional information about the error supplied by Node.js directly.",source:"@site/docs/spec-tools/tool-docs/trrt/5-error-reporting.md",sourceDirName:"spec-tools/tool-docs/trrt",slug:"/spec-tools/tool-docs/trrt/error-reporting",permalink:"/tev2-specifications/docs/spec-tools/tool-docs/trrt/error-reporting",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/spec-tools/tool-docs/trrt/5-error-reporting.md",tags:[],version:"current",lastUpdatedBy:"Ca5e",lastUpdatedAt:1701781594,formattedLastUpdatedAt:"Dec 5, 2023",sidebarPosition:5,frontMatter:{},sidebar:"tev2SideBar",previous:{title:"Deployment",permalink:"/tev2-specifications/docs/spec-tools/tool-docs/trrt/deployment"},next:{title:"Testing",permalink:"/tev2-specifications/docs/spec-tools/tool-docs/trrt/testing"}},p={},l=[{value:"Help Messages",id:"help-messages",level:2},{value:"Error Messages",id:"error-messages",level:2}],c={toc:l};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"error-reporting"},"Error Reporting"),(0,i.kt)("p",null,"During execution the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/spec-tools/trrt",hovertext:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT")," outputs information about the state of the tool to the console. After succesful execution, a resulution report is output as well, which attempts to give more insight into the terminology design through ",(0,i.kt)("a",{parentName:"p",href:"#help-messages"},"help messages"),". In addition to the ",(0,i.kt)("a",{parentName:"p",href:"#help-messages"},"help")," and ",(0,i.kt)("a",{parentName:"p",href:"#error-messages"},"error")," messages listed in the sections below, the messages include timestamps, information about the type of message, the filename, and linenumber of the object which caused the message. ",(0,i.kt)("a",{parentName:"p",href:"#error-messages"},"Error messages")," may also supply additional information about the error supplied by ",(0,i.kt)("a",{parentName:"p",href:"http://nodejs.org/"},"Node.js")," directly."),(0,i.kt)("p",null,"The list of messages below gives additional information about the messages reported in the console. Most messages include some kind of placeholder to give more specific details. All placeholders are marked in ",(0,i.kt)("inlineCode",{parentName:"p"},"this")," format, and most are also surrounded by apostrophes ('')."),(0,i.kt)("h2",{id:"help-messages"},"Help Messages"),(0,i.kt)("p",null,"When the process of resoluting completes, a resolution report is outputted which displays information about the tool's execution. In these cases, ",(0,i.kt)("inlineCode",{parentName:"p"},"TERM HELP")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"MRG HELP")," is displayed as well. Below is a list of possible help messages that may be displayed."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"TERM HELP Term ref '",(0,i.kt)("inlineCode",{parentName:"em"},"match"),"' > '",(0,i.kt)("inlineCode",{parentName:"em"},"termRef"),"', resulted in an empty string, check the converter")),(0,i.kt)("br",null),"\nThe supplied converter would result in a ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",hovertext:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"term ref")," being replaced by an empty string. Placeholder ",(0,i.kt)("inlineCode",{parentName:"p"},"match")," is the selection of the input file that has been matched by the ",(0,i.kt)("a",{parentName:"p",href:"customization#interpreter"},"interpreter")," to be a ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",hovertext:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"term ref"),", placeholder ",(0,i.kt)("inlineCode",{parentName:"p"},"termRef")," shows the ",(0,i.kt)("inlineCode",{parentName:"p"},"term"),"@",(0,i.kt)("inlineCode",{parentName:"p"},"scopetag"),":",(0,i.kt)("inlineCode",{parentName:"p"},"vsntag")," as it is being interpreted by the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/spec-tools/trrt",hovertext:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"TERM HELP Term ref '",(0,i.kt)("inlineCode",{parentName:"em"},"match"),"' > '",(0,i.kt)("inlineCode",{parentName:"em"},"termRef"),"', has multiple matching MRG entries in MRG ",(0,i.kt)("inlineCode",{parentName:"em"},"source"))),(0,i.kt)("br",null),"\nThe combination of ",(0,i.kt)("inlineCode",{parentName:"p"},"term"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"scopetag"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"vsntag")," resulted in multiple matching ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",hovertext:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entries")," located inside ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/mrg",hovertext:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems."},"MRG(s)")," listed at the ",(0,i.kt)("inlineCode",{parentName:"p"},"source")," placeholder. Placeholder ",(0,i.kt)("inlineCode",{parentName:"p"},"match")," is the selection of the input file that has been matched by the ",(0,i.kt)("a",{parentName:"p",href:"customization#interpreter"},"interpreter")," to be a ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",hovertext:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"term ref"),", placeholder ",(0,i.kt)("inlineCode",{parentName:"p"},"termRef")," shows the ",(0,i.kt)("inlineCode",{parentName:"p"},"term"),"@",(0,i.kt)("inlineCode",{parentName:"p"},"scopetag"),":",(0,i.kt)("inlineCode",{parentName:"p"},"vsntag")," as it is being interpreted by the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/spec-tools/trrt",hovertext:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"TERM HELP Term ref '",(0,i.kt)("inlineCode",{parentName:"em"},"match"),"' > '",(0,i.kt)("inlineCode",{parentName:"em"},"termRef"),"', could not be matched with an MRG entry")),(0,i.kt)("br",null),"\nThe combination of ",(0,i.kt)("inlineCode",{parentName:"p"},"term"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"scopetag"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"vsntag")," resulted in no matching ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",hovertext:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entry")," inside the loaded ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/mrg",hovertext:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems."},"MRG(s)"),". Placeholder ",(0,i.kt)("inlineCode",{parentName:"p"},"match")," is the selection of the input file that has been matched by the ",(0,i.kt)("a",{parentName:"p",href:"customization#interpreter"},"interpreter")," to be a ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",hovertext:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"term ref"),", placeholder ",(0,i.kt)("inlineCode",{parentName:"p"},"termRef")," shows the ",(0,i.kt)("inlineCode",{parentName:"p"},"term"),"@",(0,i.kt)("inlineCode",{parentName:"p"},"scopetag"),":",(0,i.kt)("inlineCode",{parentName:"p"},"vsntag")," as it is being interpreted by the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/spec-tools/trrt",hovertext:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"MRG HELP MRG entry missing required property: '",(0,i.kt)("inlineCode",{parentName:"em"},"missingProperties"),"'. Entry starts with values ",(0,i.kt)("inlineCode",{parentName:"em"},"reference"))),(0,i.kt)("br",null),"\nAn ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",hovertext:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entry")," inside the specified ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/mrg",hovertext:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems."},"MRG")," is missing certain properties. The missing properties are reported as placeholder ",(0,i.kt)("inlineCode",{parentName:"p"},"missingProperties"),". The first three key-value pairs of the entry causing the help message are reported as placeholder ",(0,i.kt)("inlineCode",{parentName:"p"},"reference"),"."))),(0,i.kt)("h2",{id:"error-messages"},"Error Messages"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"ERROR E002 Missing required property in SAF at '",(0,i.kt)("inlineCode",{parentName:"em"},"safURL"),"': '",(0,i.kt)("inlineCode",{parentName:"em"},"missingProperties"),"'")),(0,i.kt)("br",null),"\nA required property could not be located in the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/saf",hovertext:"SAF: a YAML file that contains essential data about a particular scope, such as the locations of the scope's curated texts, glossaries, and the specifications of the curated terminologies. The SAF is located in the so-called scopedir."},"SAF"),"'s scope section at ",(0,i.kt)("inlineCode",{parentName:"p"},"safURL"),", the error message should state the missing properties at the ",(0,i.kt)("inlineCode",{parentName:"p"},"missingProperties")," placeholder. See the ",(0,i.kt)("a",{parentName:"p",href:"specifications"},"specifications")," to see information about the required ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/saf",hovertext:"SAF: a YAML file that contains essential data about a particular scope, such as the locations of the scope's curated texts, glossaries, and the specifications of the curated terminologies. The SAF is located in the so-called scopedir."},"SAF")," properties.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"ERROR E003 Missing required property in MRG at '",(0,i.kt)("inlineCode",{parentName:"em"},"mrgURL"),"': '",(0,i.kt)("inlineCode",{parentName:"em"},"missingProperties"),"'")),(0,i.kt)("br",null),"\nA required property could not be located in the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/mrg",hovertext:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems."},"MRG"),"'s terminology section at ",(0,i.kt)("inlineCode",{parentName:"p"},"mrgURL"),", the error message should state the missing properties at the ",(0,i.kt)("inlineCode",{parentName:"p"},"missingProperties")," placeholder. Check the ",(0,i.kt)("a",{parentName:"p",href:"specifications"},"specifications")," to see information about the required ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/mrg",hovertext:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems."},"MRG")," properties.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"ERROR E004 An error occurred while attempting to load the SAF at '",(0,i.kt)("inlineCode",{parentName:"em"},"safURL"),"'")),(0,i.kt)("br",null),"\nThe ",(0,i.kt)("a",{href:"/tev2-specifications/docs/spec-tools/trrt",hovertext:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT")," has failed to process the supplied ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/saf",hovertext:"SAF: a YAML file that contains essential data about a particular scope, such as the locations of the scope's curated texts, glossaries, and the specifications of the curated terminologies. The SAF is located in the so-called scopedir."},"SAF")," at ",(0,i.kt)("inlineCode",{parentName:"p"},"safURL"),". Some additional information on the cause of this error should be displayed underneath this message and the program should be stopped.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"ERROR E005 An error occurred while attempting to load an MRG at '",(0,i.kt)("inlineCode",{parentName:"em"},"mrgURL"),"'")),(0,i.kt)("br",null),"\nThe ",(0,i.kt)("a",{href:"/tev2-specifications/docs/spec-tools/trrt",hovertext:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT")," has failed to process a supplied ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/mrg",hovertext:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems."},"MRG")," at ",(0,i.kt)("inlineCode",{parentName:"p"},"mrgURL"),". Some additional information on the cause of this error should be displayed underneath this message.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"ERROR E006 An error occurred while attempting to process the MRG at '",(0,i.kt)("inlineCode",{parentName:"em"},"mrgURL"),"'")),(0,i.kt)("br",null),"\nPopulating the runtime glossary with the specified ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/mrg",hovertext:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems."},"MRG")," at ",(0,i.kt)("inlineCode",{parentName:"p"},"mrgURL")," has failed. Some additional information on the cause of this error should be displayed underneath this message.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"ERROR E007 Error creating directory '",(0,i.kt)("inlineCode",{parentName:"em"},"dirPath"),"'")),(0,i.kt)("br",null),"\nCreating the specified (sub)directory path ",(0,i.kt)("inlineCode",{parentName:"p"},"dirPath")," has failed. Some additional information on the cause of this error should be displayed underneath this message.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"ERROR E008 Error writing file '",(0,i.kt)("inlineCode",{parentName:"em"},"filePath"),"'")),(0,i.kt)("br",null),"\nWriting the specified file ",(0,i.kt)("inlineCode",{parentName:"p"},"filePath")," has failed. Some additional information on the cause of this error should be displayed underneath this message.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"ERROR E009 Could not read file '",(0,i.kt)("inlineCode",{parentName:"em"},"filePath"),"'")),(0,i.kt)("br",null),"\nReading the specified file ",(0,i.kt)("inlineCode",{parentName:"p"},"filePath")," has failed. Some additional information on the cause of this error should be displayed underneath this message.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"ERROR E010 Could not interpret and convert file '",(0,i.kt)("inlineCode",{parentName:"em"},"filePath"),"'")),(0,i.kt)("br",null),"\nThe interpretation and conversion steps related to the specific file ",(0,i.kt)("inlineCode",{parentName:"p"},"filePath")," have failed in a way which caused an error. Some additional information on the cause of this error should be displayed underneath this message.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"ERROR E011 Failed to read or parse the config file '",(0,i.kt)("inlineCode",{parentName:"em"},"filePath"),"'")),(0,i.kt)("br",null),"\nSomething went wrong during the interpretation of the config file at ",(0,i.kt)("inlineCode",{parentName:"p"},"filePath"),". Some additional information on the cause of this error should be displayed underneath this message.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"ERROR E012 Something unexpected went wrong while resoluting terms")),(0,i.kt)("br",null),"\nThis error message should only be seen when an error occurs that results in resolution not being able to complete. Some additional information on the cause of this error should be displayed underneath this message.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"ERROR E013 File '",(0,i.kt)("inlineCode",{parentName:"em"},"filePath"),"' already exists. Use --force to overwrite")),(0,i.kt)("br",null),"\nThe --force flag must be used when overwriting is necessary, specifically to overwrite file ",(0,i.kt)("inlineCode",{parentName:"p"},"filePath"),". Meant to prevent accidental overwriting of files that include ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",hovertext:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"term refs"),"."))))}m.isMDXComponent=!0}}]);