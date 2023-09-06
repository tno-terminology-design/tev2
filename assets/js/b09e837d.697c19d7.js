"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[5418],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(n),u=a,d=f["".concat(c,".").concat(u)]||f[u]||h[u]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9401:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=n(4996),s=["components"],c={id:"tev2-design-principles",sidebar_label:"Design Principles",date:20220303},l="TEv2 - Design Principles",p={unversionedId:"overview/tev2-design-principles",id:"overview/tev2-design-principles",title:"TEv2 - Design Principles",description:"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",source:"@site/docs/overview/20-tev2-design-principles.md",sourceDirName:"overview",slug:"/overview/tev2-design-principles",permalink:"/tev2-specifications/docs/overview/tev2-design-principles",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/overview/20-tev2-design-principles.md",tags:[],version:"current",lastUpdatedBy:"Ca5e",lastUpdatedAt:1693993989,formattedLastUpdatedAt:"Sep 6, 2023",sidebarPosition:20,frontMatter:{id:"tev2-design-principles",sidebar_label:"Design Principles",date:20220303},sidebar:"tev2SideBar",previous:{title:"Purpose of TEv2",permalink:"/tev2-specifications/docs/overview/tev2-purpose"},next:{title:"Architecture",permalink:"/tev2-specifications/docs/overview/tev2-architecture"}},h={},f=[{value:"Text Conversion",id:"text-conversion",level:2},{value:"Text Conversion Steps",id:"text-conversion-steps",level:2}],u={toc:f};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tev2---design-principles"},"TEv2 - Design Principles"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",(0,o.kt)("br",null),"\nAs TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.",(0,o.kt)("br",null),(0,o.kt)("a",{parentName:"p",href:"@"},"readers")," will need to see through some (currently unprocessed) notational conventions.")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"@"},"TEv2")," not only contributes to dealing with (",(0,o.kt)("a",{parentName:"p",href:"@"},"authors"),"/groups that have their) individual ",(0,o.kt)("a",{parentName:"p",href:"@"},"terminologies"),", it specifically also contributes to the re-use of ",(0,o.kt)("a",{parentName:"p",href:"@"},"terms")," across ",(0,o.kt)("a",{parentName:"p",href:"@"},"scopes"),", and the production of (documentary) artifacts in which such ",(0,o.kt)("a",{parentName:"p",href:"@"},"terms")," are used. All this is done while respecting the autonomy of the ",(0,o.kt)("a",{parentName:"p",href:"@"},"communities")," that ",(0,o.kt)("a",{parentName:"p",href:"@essiflab"},"own")," these ",(0,o.kt)("a",{parentName:"p",href:"@"},"scopes"),". This is what we call a Self-Sovereign Terminology."),(0,o.kt)("h2",{id:"text-conversion"},"Text Conversion"),(0,o.kt)("p",null,"The (documentary) artifacts we envisage are typically in the form of e.g. a (static) website, or documents in formats such as PDF, ODT, DOCX, etc., that is: in an arbitrary form that is readable for humans. However, they are typically (but not always) authored in much simpler, raw formats, such as plain ASCII text, markdown, LaTeX, etc., and one or more conversion steps are required to turn these 'raw texts' into nicely 'rendered texts'. ",(0,o.kt)("a",{parentName:"p",href:"@"},"TEv2")," specifies a set of tools (a '",(0,o.kt)("a",{parentName:"p",href:"/docs-toolbox"},"toolbox"),"') that can be used in the conversion process, as illustrated (in a simplified way) in the figure below:"),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{alt:"Converting raw texts into formatted texts",src:(0,i.Z)("images/tev2-overview-without-toolbox.png")}),(0,o.kt)("i",null,"Figure 1: Converting raw texts into formatted texts and curated texts")),(0,o.kt)("p",null,"Many things that can be done with tools in the ",(0,o.kt)("a",{parentName:"p",href:"/docs-toolbox"},"toolbox"),", such as the generation of ",(0,o.kt)("a",{parentName:"p",href:"@"},"glossaries")," or ",(0,o.kt)("a",{parentName:"p",href:"@"},"dictionaries"),", the contents of which can be tailored, and they can be rendered in various formats. The toolbox has been designed to be extensible, which means that if at one point in time some tailoring or rendering features are missing, they can be added later, as needed."),(0,o.kt)("p",null,"A particularly nice feature of the ",(0,o.kt)("a",{parentName:"p",href:"/docs-toolbox"},"toolbox")," is its capability of working with so-called ",(0,o.kt)("a",{parentName:"p",href:"@"},"TermRefs"),", which are pieces of text that are ",(0,o.kt)("a",{parentName:"p",href:"/docs/spec-syntax/term-ref-syntax"},"annotated")," to refer to a particular ",(0,o.kt)("a",{parentName:"p",href:"@"},"term"),", the effect of which in the rendered version of the text can help ",(0,o.kt)("a",{parentName:"p",href:"@"},"readers")," understand the meaning in which the ",(0,o.kt)("a",{parentName:"p",href:"@"},"term")," was used. The figure below shows an example of this: at the left you see a raw (markdown) text, where the terms ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"community")),", ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"own"))," and ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"terminology"))," have been annotated to refer to ",(0,o.kt)("a",{parentName:"p",href:"@"},"curated")," ",(0,o.kt)("a",{parentName:"p",href:"@"},"terms")," (from specific ",(0,o.kt)("a",{parentName:"p",href:"@"},"scopes"),"). At the right side you see the effect that tools from the ",(0,o.kt)("a",{parentName:"p",href:"/docs-toolbox"},"toolbox")," and other third party tools had as they rendered this text into an (HTML) web page: the texts are highlighted, and when the ",(0,o.kt)("a",{parentName:"p",href:"@"},"reader")," hovers its mouse over that text, a popup-balloon shows that contains the definition of the ",(0,o.kt)("a",{parentName:"p",href:"@"},"term")," that was referenced."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{alt:"The effect of annotating texts with a Term Reference",src:(0,i.Z)("images/tev2-overview-enhanced-term.png")}),(0,o.kt)("i",null,"Figure 2: The effect of annotating texts with a Term Reference")),(0,o.kt)("p",null,"If you are familiar with ",(0,o.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/basic-syntax/"},"markdown"),", you will notice that the raw text contains syntax that resembles ",(0,o.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/basic-syntax/#links"},"markdown links"),", but it's not quite conformant: it contains the ",(0,o.kt)("inlineCode",{parentName:"p"},"@")," character, which signals (within TEv2) that this is not an ordinary link, but a link that will be resolved by the ",(0,o.kt)("a",{parentName:"p",href:"@"},"TRRT"),". The ",(0,o.kt)("a",{parentName:"p",href:"@"},"TRRT")," will convert these links (which we call ",(0,o.kt)("a",{parentName:"p",href:"@"},"TermRefs"),") such that they are rendered as shown in the right of the figure: that is: in purple boldface, and when you hover your mouse over the term, it will show the definition of that term."),(0,o.kt)("h2",{id:"text-conversion-steps"},"Text Conversion Steps"),(0,o.kt)("p",null,"Figure 1 shows how (raw) texts are converted into other formats, and that this is a sequence of conversion steps, part of which can be accommodated by using tools from the ",(0,o.kt)("a",{parentName:"p",href:"/docs-toolbox"},"TEv2 toolbox"),", while other conversions are performed by other tools. The tools in the ",(0,o.kt)("a",{parentName:"p",href:"/docs-toolbox"},"toolbox")," that contribute to a conversion step are typically constructed following the pattern as shown in the figure below:"),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{alt:"The generic text conversion pattern on which the toolbox is based",src:(0,i.Z)("images/tev2-text-conversion-pattern.png")}),(0,o.kt)("i",null,"Figure 3: The generic text conversion pattern on which the toolbox is based")),(0,o.kt)("p",null,"This pattern shows that conversion consists of two generic parts"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"an interpreter, that is capable of interpreting a (source) file of a particular format (e.g. a wiki-page), and that then produces a set of so-called ",(0,o.kt)("a",{parentName:"li",href:"https://mustache.github.io/mustache.5.html"},'"moustache"-variables'),', that are specified by a ("moustache") profile.'),(0,o.kt)("li",{parentName:"ol"},'a convertor, that is capable of converting the source text into another (converted) text, thereby using the values that the interpreter has assigned to the "moustache"-variables.')),(0,o.kt)("p",null,"Using this pattern is beneficial e.g.,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"in cases where source texts of different formats or layouts are being used that must be converted to a particular and well structured file, as is the case when ingesting texts that are contributions e.g. to a ",(0,o.kt)("a",{parentName:"li",href:"@"},"scope's")," ",(0,o.kt)("a",{parentName:"li",href:"@"},"terminology"),". Different interpreters can be used for different layouts, and after using a particular converter, they can all be said to result in a converted text of a specific layout and contents."),(0,o.kt)("li",{parentName:"ul"},"in cases where a specific kind of source needs to be converted into various different kinds of rendered texts. For example, creating a ",(0,o.kt)("a",{parentName:"li",href:"@"},"human readable glossary")," from a ",(0,o.kt)("a",{parentName:"li",href:"@"},"machine readable glossary")," can be done in many ways, e.g. as a webpage, or as a piece of LaTeX that can be included (as an appendix) in a paper; also, the contents of such a glossary may differ: you could have simple lists of ",(0,o.kt)("a",{parentName:"li",href:"@"},"terms")," and explanations, but you could also opt to add meta-data, e.g. list the ",(0,o.kt)("a",{parentName:"li",href:"@"},"grouptags")," of each ",(0,o.kt)("a",{parentName:"li",href:"@"},"term"),", (references to) attributions and/or licensing data, people that contributed to the documentation of the ",(0,o.kt)("a",{parentName:"li",href:"@"},"term"),", etc.")))}d.isMDXComponent=!0}}]);