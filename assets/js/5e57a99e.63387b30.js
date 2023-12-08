"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[4499],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>y});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=p(r),y=n,u=m["".concat(c,".").concat(y)]||m[y]||f[y]||i;return r?a.createElement(u,s(s({ref:t},l),{},{components:r})):a.createElement(u,s({ref:t},l))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var p=2;p<i;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8287:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=r(3117),n=(r(7294),r(3905));r(4996);const i={id:"overview-spec-syntax",sidebar_label:"Overview",date:20220819},s="Overview - TEv2 Syntax",o={unversionedId:"spec-syntax/overview-spec-syntax",id:"spec-syntax/overview-spec-syntax",title:"Overview - TEv2 Syntax",description:"TEv2 uses specific syntaxes:",source:"@site/docs/spec-syntax/00-overview-spec-syntax.md",sourceDirName:"spec-syntax",slug:"/spec-syntax/overview-spec-syntax",permalink:"/tev2-specifications/docs/spec-syntax/overview-spec-syntax",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/spec-syntax/00-overview-spec-syntax.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1702049334,formattedLastUpdatedAt:"Dec 8, 2023",sidebarPosition:0,frontMatter:{id:"overview-spec-syntax",sidebar_label:"Overview",date:20220819},sidebar:"tev2SideBar",previous:{title:"TEv2 Config Files",permalink:"/tev2-specifications/docs/spec-files/configuration-file"},next:{title:"Overview",permalink:"/tev2-specifications/docs/spec-syntax/overview-spec-syntax"}},c={},p=[],l={toc:p};function f(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"overview---tev2-syntax"},"Overview - TEv2 Syntax"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"@"},"TEv2")," uses specific syntaxes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/docs/spec-syntax/term-ref-syntax"},"TermReference Syntax"))," is the syntax that enables ",(0,n.kt)("a",{parentName:"li",href:"@"},"authors")," to mark ",(0,n.kt)("a",{parentName:"li",href:"@"},"terms")," that they use such that ",(0,n.kt)("a",{parentName:"li",href:"@"},"readers")," will be informed about their specific meaning while reading, and can learn more about such ",(0,n.kt)("a",{parentName:"li",href:"@"},"terms")," by clicking on them. You can see how that works in this sentence, by hovering over this ",(0,n.kt)("a",{parentName:"li",href:"@"},"term"),", and clicking on it if you want to know more about it;"),(0,n.kt)("li",{parentName:"ul"},"the ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/docs/spec-syntax/term-identifier-syntax"},"Term Identifier Syntax"))," enables ",(0,n.kt)("a",{parentName:"li",href:"@"},"authors")," to refer to a particular ",(0,n.kt)("a",{parentName:"li",href:"@"},"term")," in a specific version of a ",(0,n.kt)("a",{parentName:"li",href:"@"},"terminology"),". This syntax is also used in the ",(0,n.kt)("a",{parentName:"li",href:"/docs/spec-syntax/term-ref-syntax"},"TermReference Syntax"),"."),(0,n.kt)("li",{parentName:"ul"},"the ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/docs/spec-syntax/terminology-identifier-syntax"},"Terminology Identifier Syntax"))," enables ",(0,n.kt)("a",{parentName:"li",href:"@"},"authors")," to refer to a specific version of a ",(0,n.kt)("a",{parentName:"li",href:"@"},"terminology"),", as documented by an ",(0,n.kt)("a",{parentName:"li",href:"@"},"MRG"),". This syntax can be used, e.g., as part of the ",(0,n.kt)("a",{parentName:"li",href:"/docs/spec-syntax/term-identifier-syntax"},"Term Identifier Syntax"),"."),(0,n.kt)("li",{parentName:"ul"},"the ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/docs/spec-syntax/form-phrase-syntax"},"Form Phrases Syntax"))," is the syntax that ",(0,n.kt)("a",{parentName:"li",href:"@"},"authors")," need to specify ",(0,n.kt)("a",{parentName:"li",href:"@"},"form phrases")," (in the ",(0,n.kt)("inlineCode",{parentName:"li"},"formPhrases")," field of ",(0,n.kt)("a",{parentName:"li",href:"@"},"curated texts")," - see the ",(0,n.kt)("a",{parentName:"li",href:"/docs/spec-files/ctext-file"},"curated text file specs"),");"),(0,n.kt)("li",{parentName:"ul"},"the ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/docs/spec-tools/mrg-terminology-construction"},"MRG Term Selection Syntax"))," is used by ",(0,n.kt)("a",{parentName:"li",href:"@"},"curators")," to define the contents of (a particular version) of a ",(0,n.kt)("a",{parentName:"li",href:"@"},"terminology")," that they ",(0,n.kt)("a",{parentName:"li",href:"@"},"curate"),". This syntax appears in the ",(0,n.kt)("a",{parentName:"li",href:"/docs/spec-files/saf#versions"},(0,n.kt)("inlineCode",{parentName:"a"},"versions")," section")," of a ",(0,n.kt)("a",{parentName:"li",href:"@"},"SAF"),".")))}f.isMDXComponent=!0}}]);