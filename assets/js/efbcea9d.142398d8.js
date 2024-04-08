"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[1895],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,h=u["".concat(c,".").concat(d)]||u[d]||f[d]||s;return r?o.createElement(h,a(a({ref:t},p),{},{components:r})):o.createElement(h,a({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,a=new Array(s);a[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var l=2;l<s;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6352:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var o=r(3117),n=(r(7294),r(3905));const s={id:"converter",displayed_sidebar:"tev2SideBar",term:"converter",termType:"concept",isa:null,glossaryTerm:"Converter",glossaryText:"a specification, in the form of a [handlebars template](@), for constructing a text that a particular [text conversion tool](@) uses to create its output.",glossaryNotes:["A [TRRT](@) converter constructs a text that replaces a [TermRef](@). That text, when rendered in a static website, would typically link to the page that documents the term. Also, it may provide a popup that shows its definition.","A [HRGT](@) converter constructs a text that replaces an [MRGRef](@). That text typically renders as a [human readable glossary](@)."],grouptags:[],formPhrases:["converter{ss}"],status:"proposed",created:20230731,updated:20240108,contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},a="Converter",i={unversionedId:"terms/converter",id:"terms/converter",title:"Converter",description:"A converter is a specification, in the form of a handlebars template, for constructing a text that a particular text conversion tool uses to create its output.",source:"@site/docs/terms/converter.md",sourceDirName:"terms",slug:"/terms/converter",permalink:"/tev2-specifications/docs/terms/converter",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/terms/converter.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1712565027,formattedLastUpdatedAt:"Apr 8, 2024",frontMatter:{id:"converter",displayed_sidebar:"tev2SideBar",term:"converter",termType:"concept",isa:null,glossaryTerm:"Converter",glossaryText:"a specification, in the form of a [handlebars template](@), for constructing a text that a particular [text conversion tool](@) uses to create its output.",glossaryNotes:["A [TRRT](@) converter constructs a text that replaces a [TermRef](@). That text, when rendered in a static website, would typically link to the page that documents the term. Also, it may provide a popup that shows its definition.","A [HRGT](@) converter constructs a text that replaces an [MRGRef](@). That text typically renders as a [human readable glossary](@)."],grouptags:[],formPhrases:["converter{ss}"],status:"proposed",created:20230731,updated:20240108,contributors:"RieksJ",attribution:"[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)",originalLicense:"[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"},sidebar:"tev2SideBar"},c={},l=[],p={toc:l};function f(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"converter"},"Converter"),(0,n.kt)("p",null,"A ",(0,n.kt)("strong",{parentName:"p"},"converter")," is a specification, in the form of a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/handlebars-template",title:"Handlebars Template: a blueprint/template that uses the Handlebars Language to define where and how variable information can be inserted into a predetermined text structure."},"handlebars template"),", for constructing a text that a particular ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-text-conversion-tool",title:"TEv2 Text Conversion Tool: a TEv2 Tool whose purpose is to convert particular text constructs (such as TermRefs or MRGRefs) that exist in one or more files with other texts, the contents of which consists of some fixed construct that is populated with elements derived from existing text constructs and/or other resources."},"text conversion tool")," uses to create its output."),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-toolbox",title:"TEv2 Toolbox: the collection of tools designed to support and facilitate the process of terminology management following the TEv2 Specifications."},"specifications")," of the particular ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-text-conversion-tool",title:"TEv2 Text Conversion Tool: a TEv2 Tool whose purpose is to convert particular text constructs (such as TermRefs or MRGRefs) that exist in one or more files with other texts, the contents of which consists of some fixed construct that is populated with elements derived from existing text constructs and/or other resources."},"tool")," tell you which ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/converter",title:"Converter: a specification, in the form of a Handlebars Template, for constructing a text that a particular Text Conversion Tool uses to create its output."},"converters")," are predefined for that ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-text-conversion-tool",title:"TEv2 Text Conversion Tool: a TEv2 Tool whose purpose is to convert particular text constructs (such as TermRefs or MRGRefs) that exist in one or more files with other texts, the contents of which consists of some fixed construct that is populated with elements derived from existing text constructs and/or other resources."},"tool"),", and what the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/converter-profile",title:"Converter Profile: the specification of a class of Data Objects, instances of which are used by specific Text Conversion Tools to generate text fragments from."},"converter profile")," is that a customized ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/converter",title:"Converter: a specification, in the form of a Handlebars Template, for constructing a text that a particular Text Conversion Tool uses to create its output."},"converter")," may use."),(0,n.kt)("admonition",{title:"Editor's note",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"We could perhaps add references to appropriate sections of relevant tools, so that readers can see examples of this.")),(0,n.kt)("p",null,"The generic workings of converters is documented in the ",(0,n.kt)("a",{parentName:"p",href:"/docs/overview/tev2-text-conversion"},"TEv2 Text Conversion pattern"),"."))}f.isMDXComponent=!0}}]);