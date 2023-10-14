"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[2174],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return f}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(a),f=n,h=m["".concat(l,".").concat(f)]||m[f]||c[f]||i;return a?r.createElement(h,o(o({ref:t},p),{},{components:a})):r.createElement(h,o({ref:t},p))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var d=2;d<i;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3894:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),o=a(4996),s=["components"],l={id:"profile-templates",sidebar_label:"Profile Templates",date:20220816},d="Profile Templates",p={unversionedId:"spec-files/profile-templates",id:"spec-files/profile-templates",title:"Profile Templates",description:"<img",source:"@site/docs/spec-files/20-profile-templates.md",sourceDirName:"spec-files",slug:"/spec-files/profile-templates",permalink:"/tev2-specifications/docs/spec-files/profile-templates",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/spec-files/20-profile-templates.md",tags:[],version:"current",lastUpdatedBy:"Ca5e",lastUpdatedAt:1697303141,formattedLastUpdatedAt:"Oct 14, 2023",sidebarPosition:20,frontMatter:{id:"profile-templates",sidebar_label:"Profile Templates",date:20220816},sidebar:"tev2SideBar",previous:{title:"SAF (Scope Admin File)",permalink:"/tev2-specifications/docs/spec-files/saf"},next:{title:"MRG (Machine Readable Glossary)",permalink:"/tev2-specifications/docs/spec-files/mrg"}},c={},m=[{value:"Ingestion Profile",id:"ingestion-profile",level:2},{value:"Transformation profile",id:"transformation-profile",level:2}],f={toc:m};function h(e){var t=e.components,a=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"profile-templates"},"Profile Templates"),(0,i.kt)("img",{alt:"This page is under construction",src:(0,o.Z)("images/wip/wip-under-construction.png")}),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("p",null,"We use a generic pattern for the profile-based transformation of texts from one form into another. The idea is"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"to specify a profile, i.e. a  set of so-called 'moustache'-variables;"),(0,i.kt)("li",{parentName:"ul"},"to create various text interpreters, each of which can read and process a particular kind of file, and populate the 'moustache'-variables;"),(0,i.kt)("li",{parentName:"ul"},"to create various text transformers, each of which can write a new file based on the contents of the input file and the value of the variables.")),(0,i.kt)("p",null,"This pattern allows us, e.g."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"to write various text interpreters for ingestable files, and have one text transformer make sure they are all converted into a valid ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",hovertext:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated text"),"."),(0,i.kt)("li",{parentName:"ul"},"to write various text transformers that produce different flavours of ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/hrg",hovertext:"Human Readable Glossary (HRG): a Glossary that is designed to be easily understandable and accessible to humans. HRGs present terms and their meanings in a format that prioritizes human comprehension and may include additional contextual information to aid understanding."},"HRGs")," from an existing ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/mrg",hovertext:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems."},"MRG"),"."),(0,i.kt)("li",{parentName:"ul"},"to produce code snippets that can be used in CI/CD-streets for all sorts of conversions that may be needed as ",(0,i.kt)("a",{parentName:"li",href:"@"},"communities")," seek to produce rendered artifacts (e.g. static websites, PDFs, etc.)")),(0,i.kt)("h2",{id:"ingestion-profile"},"Ingestion Profile"),(0,i.kt)("p",null,"This ingestion profile specifies the set of 'moustache'-variables that ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/interpreter",hovertext:"Interpreter: a software component that reads a (source) text of a specific format, such as a wiki-page or JSON file, and produces a set of Moustache Variables based on a predefined profile. These Variables represent extracted data or metadata from the source text."},"interpreters")," for ingestible content is expected to  populate, and pass on to the ",(0,i.kt)("a",{parentName:"p",href:"@"},"transformer")," that will create a copy of that ingestible content and transform it into a (syntactically) correct ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",hovertext:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated text"),". There is a ",(0,i.kt)("a",{parentName:"p",href:"docs/spec-files/ingestion.profile"},"template")," file that can be used."),(0,i.kt)("admonition",{title:"Editor's note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("a",{parentName:"p",href:"@"},"transformer")," that outputs a ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",hovertext:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated text")," still needs to be specified. Specifically, the specification should document what needs to be done in case a ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",hovertext:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated text")," exists whose ",(0,i.kt)("inlineCode",{parentName:"p"},"term")," field matches the ",(0,i.kt)("inlineCode",{parentName:"p"},"term")," field of the newly ingested file. Answers should be given for questions like:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"is the entire front matter going to be constructed from scratch, or is the front matter of the existing ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",hovertext:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated text")," going to be reused, and if so:"),(0,i.kt)("li",{parentName:"ul"},"what if a field is specified with a value that differs from the field in the existing ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",hovertext:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated text")," - this has to be answered for each field individually."),(0,i.kt)("li",{parentName:"ul"},"etc."))),(0,i.kt)("p",null,"This template allows ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/interpreter",hovertext:"Interpreter: a software component that reads a (source) text of a specific format, such as a wiki-page or JSON file, and produces a set of Moustache Variables based on a predefined profile. These Variables represent extracted data or metadata from the source text."},"interpreters")," for ingestible content to be created, e.g., for ingesting wiki-pages, regular markdown files, etc."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Legend"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Name"))," contains the field name;"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Moustache"))," specifies the name of the variable, in so-called ",(0,i.kt)("a",{parentName:"li",href:"https://mustache.github.io/mustache.5.html"},"moustache")," format"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Req'd"))," specifies whether (",(0,i.kt)("inlineCode",{parentName:"li"},"Y"),") or not (",(0,i.kt)("inlineCode",{parentName:"li"},"n"),", or ",(0,i.kt)("inlineCode",{parentName:"li"},"F"),") the field is required to be present as a header field. The ",(0,i.kt)("inlineCode",{parentName:"li"},"F")," means that we reserve this field for Future Use.\n4/ ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Default")),' specifies the value that the interpreter must use as a default value for the variable in case the interpreted text does not specify a value. If no default is specified, the default value is "empty" or "void".'),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Description"))," specifies the meaning of the field, and other things you may need to know, e.g. why it is needed, a required syntax, etc."))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Moustache"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Req'd?"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Default"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"term")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{{",(0,i.kt)("inlineCode",{parentName:"td"},"term"),"}}"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"word/phrase that represents a concept.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"termType")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{{",(0,i.kt)("inlineCode",{parentName:"td"},"termType"),"}}"),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"concept")),(0,i.kt)("td",{parentName:"tr",align:"left"},"kind of concept (e.g. ",(0,i.kt)("inlineCode",{parentName:"td"},"concept")," (default), or ",(0,i.kt)("inlineCode",{parentName:"td"},"mental model"),").")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"isa")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{{",(0,i.kt)("inlineCode",{parentName:"td"},"isa"),"}}"),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"semantic unit of which this is a specialization.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"glossaryText")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{{",(0,i.kt)("inlineCode",{parentName:"td"},"glossaryText"),"}}"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"text that summarizes the meaning of the term.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"synonyms")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{{",(0,i.kt)("inlineCode",{parentName:"td"},"synonymsList"),"}}"),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"other words/phrases that mean the same.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"grouptags")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{{",(0,i.kt)("inlineCode",{parentName:"td"},"grouptagsList"),"}}"),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"comma-separated list of tags/keywords to which the term belongs.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"formPhrases")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{{",(0,i.kt)("inlineCode",{parentName:"td"},"formPhrasesList"),"}}"),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"comma-separated list of ",(0,i.kt)("a",{parentName:"td",href:"https://tno-terminology-design.github.io/tev2-specifications/docs/spec-syntax/form-phrase-syntax"},"formPhrases"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"status")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{{",(0,i.kt)("inlineCode",{parentName:"td"},"status"),"}}"),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"proposed")),(0,i.kt)("td",{parentName:"tr",align:"left"},"status/phase in the lifecycle of the term.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"created")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{{",(0,i.kt)("inlineCode",{parentName:"td"},"created"),"}}"),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:"center"},"today"),(0,i.kt)("td",{parentName:"tr",align:"left"},"date when the term was first conceived/documented.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"updated")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{{",(0,i.kt)("inlineCode",{parentName:"td"},"updated"),"}}"),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:"center"},"today"),(0,i.kt)("td",{parentName:"tr",align:"left"},"date when the term was last updated.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"contributors")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{{",(0,i.kt)("inlineCode",{parentName:"td"},"ContributorsList"),"}}"),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"comma-separated list of texts, each of which somehow represents a contributor.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"attribution")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{{",(0,i.kt)("inlineCode",{parentName:"td"},"attribution"),"}}"),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"text that credits the original creation of the texts in the document.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"originalLicense")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{{",(0,i.kt)("inlineCode",{parentName:"td"},"originalLicense"),"}}"),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"reference to the license of the work from which the texts were derived.")))),(0,i.kt)("h2",{id:"transformation-profile"},"Transformation profile"),(0,i.kt)("admonition",{title:"Editor's note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Content for this section is needed.")))}h.isMDXComponent=!0}}]);