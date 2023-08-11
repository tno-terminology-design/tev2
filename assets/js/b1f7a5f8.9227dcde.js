"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[3360],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),l=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),f=l(a),h=n,u=f["".concat(s,".").concat(h)]||f[h]||m[h]||o;return a?r.createElement(u,i(i({ref:t},c),{},{components:a})):r.createElement(u,i({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},2868:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return m}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),i=(a(4996),["components"]),p={id:"tev2-toolbox",displayed_sidebar:"tev2SideBar",scopetag:"tev2",date:20220421},s="TEv2 Terminology Toolbox",l={unversionedId:"tev2-toolbox",id:"tev2-toolbox",title:"TEv2 Terminology Toolbox",description:"As mentioned in the TEv2 overview, the toolbox is envisaged to have a variety of tools, including:",source:"@site/docs/tev2-toolbox.md",sourceDirName:".",slug:"/tev2-toolbox",permalink:"/tev2-specifications/docs/tev2-toolbox",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/tev2-toolbox.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1691748622,formattedLastUpdatedAt:"Aug 11, 2023",frontMatter:{id:"tev2-toolbox",displayed_sidebar:"tev2SideBar",scopetag:"tev2",date:20220421},sidebar:"tev2SideBar",previous:{title:"Terminology Construction",permalink:"/tev2-specifications/docs/spec-tools/terminology-construction"},next:{title:"Integrity Checking",permalink:"/tev2-specifications/docs/spec-tools/ict"}},c={},m=[],f={toc:m};function h(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tev2-terminology-toolbox"},"TEv2 Terminology Toolbox"),(0,o.kt)("p",null,"As mentioned in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/tev2-overview"},"TEv2 overview"),", the toolbox is envisaged to have a variety of tools, including:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"the ",(0,o.kt)("strong",{parentName:"p"},"Term Ref(erence) Resolution Tool (",(0,o.kt)("a",{parentName:"strong",href:"trrt@"},"TRRT"),")"),". This tool takes files that contain so-called ",(0,o.kt)("a",{parentName:"p",href:"@"},"TermRefs")," and outputs a copy of these files in which these ",(0,o.kt)("a",{parentName:"p",href:"@"},"TermRefs")," are converted into so-called ",(0,o.kt)("a",{parentName:"p",href:"@"},"renderable refs"),", i.e. texts that can be further processed by tools such as GitHub pages, Docusaurus, etc. The result of this is that the rendered document contains markups that help ",(0,o.kt)("a",{parentName:"p",href:"@"},"readers")," to quickly find more explanations of the ",(0,o.kt)("a",{parentName:"p",href:"@"},"concept")," or other ",(0,o.kt)("a",{parentName:"p",href:"@"},"knowledge artifact")," that is being referenced.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"the ",(0,o.kt)("strong",{parentName:"p"},"MRG Importer (",(0,o.kt)("a",{parentName:"strong",href:"@"},"MRG importer"),")"),". This tool serves to get any ",(0,o.kt)("a",{parentName:"p",href:"@"},"MRG")," that may be needed within a particular ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope"),", and make it available in the ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope's")," ",(0,o.kt)("a",{parentName:"p",href:"@"},"glossarydir"),". The idea behind this is that various tools that may need such ",(0,o.kt)("a",{parentName:"p",href:"@"},"MRGs")," would not need to include such code. Further details are in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/spec-tools/mrg-importer"},"MRG importer specs"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"the ",(0,o.kt)("strong",{parentName:"p"},"Machine Readable Glossary generation Tool (",(0,o.kt)("a",{parentName:"strong",href:"@"},"MRGT"),")"),". This tool reads the ",(0,o.kt)("a",{parentName:"p",href:"@"},"SAF")," of a ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope")," to find the instructions by which it creates an ",(0,o.kt)("a",{parentName:"p",href:"@"},"MRG")," for each of the versions of the ",(0,o.kt)("a",{parentName:"p",href:"@"},"terminology")," that are maintained within that ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"the ",(0,o.kt)("strong",{parentName:"p"},"Human Readable Glossary generation Tool (",(0,o.kt)("a",{parentName:"strong",href:"@"},"HRGT"),")"),". This tool reads the ",(0,o.kt)("a",{parentName:"p",href:"@"},"MRG")," of a ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope"),", resolves any ",(0,o.kt)("a",{parentName:"p",href:"@"},"TermRefs")," as necessary, and creates a rendering that results in a ",(0,o.kt)("a",{parentName:"p",href:"@"},"HRG"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"the ",(0,o.kt)("strong",{parentName:"p"},"Integrity Checker Tool (",(0,o.kt)("a",{parentName:"strong",href:"@"},"ICT"),")"),". This tool enables ",(0,o.kt)("a",{parentName:"p",href:"@"},"curators")," to test the integrity of ",(0,o.kt)("a",{parentName:"p",href:"@"},"SAFs"),", ",(0,o.kt)("a",{parentName:"p",href:"@"},"MRGs"),", and ",(0,o.kt)("a",{parentName:"p",href:"@"},"curated texts")," for integrity, logging any situation that may cause inconvenience or errors, and providing helptexts that are aimed at guiding ",(0,o.kt)("a",{parentName:"p",href:"@"},"curators")," to resolve any such issues.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"the ",(0,o.kt)("strong",{parentName:"p"},"Machine Readable Dictionary generation Tool (",(0,o.kt)("a",{parentName:"strong",href:"@"},"MRDT"),")"),". This tool generates a Machine Readable Inventory (that we call a Machine Readable Dictionary or ",(0,o.kt)("a",{parentName:"p",href:"@"},"MRD"),") of ",(0,o.kt)("a",{parentName:"p",href:"@"},"terms")," that originate from different (versions of) ",(0,o.kt)("a",{parentName:"p",href:"@"},"terminologies"),", from various ",(0,o.kt)("a",{parentName:"p",href:"@"},"scopes"),". ",(0,o.kt)("a",{parentName:"p",href:"@"},"MRDs")," are meant to be processed by a ",(0,o.kt)("a",{parentName:"p",href:"@"},"HRDT"),", which turns it into (a specific format of) ",(0,o.kt)("a",{parentName:"p",href:"@"},"HRD"),").")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"the ",(0,o.kt)("strong",{parentName:"p"},"Human Readable Dictionary generation Tool (",(0,o.kt)("a",{parentName:"strong",href:"@"},"HRDT"),")"),". This tool generates a a Human Readable ",(0,o.kt)("a",{parentName:"p",href:"@"},"Dictionary")," (",(0,o.kt)("a",{parentName:"p",href:"@"},"HRD"),"), that renders the ",(0,o.kt)("a",{parentName:"p",href:"@"},"terms")," from a ",(0,o.kt)("a",{parentName:"p",href:"mrd@"},"machine readable dictionary (MRD)")," into one of several formats, e.g. HTML, or PDF. ",(0,o.kt)("a",{parentName:"p",href:"@"},"HRDs")," can be created for different purposes, e.g. to compare different ",(0,o.kt)("a",{parentName:"p",href:"@"},"terminologies")," (across ",(0,o.kt)("a",{parentName:"p",href:"@"},"scopes"),"), or as a reference of what ",(0,o.kt)("a",{parentName:"p",href:"@"},"terms")," mean in different ",(0,o.kt)("a",{parentName:"p",href:"@"},"scopes"),"."))),(0,o.kt)("p",null,"These tools are intended to be called from the command-line, typically"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"in a context where the user is developing (documents, papers, etc.) locally, and"),(0,o.kt)("li",{parentName:"ol"},"in a github or gitlab context, where the tools are called from within a CI/CD pipeline.")),(0,o.kt)("p",null,"Apart from these tools, a collection of code snippets is envisaged that can be used to automatically generate ",(0,o.kt)("a",{parentName:"p",href:"@"},"MRGs")," and ",(0,o.kt)("a",{parentName:"p",href:"@"},"HRGs")," upon successful commits to the master-branch of an associated repo/wiki, enabling ",(0,o.kt)("a",{parentName:"p",href:"@"},"curators")," to establish CI/CD pipelines."))}h.isMDXComponent=!0}}]);