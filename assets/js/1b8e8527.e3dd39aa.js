"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[8004],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),h=l(a),f=r,c=h["".concat(p,".").concat(f)]||h[f]||d[f]||i;return a?n.createElement(c,o(o({ref:t},m),{},{components:a})):n.createElement(c,o({ref:t},m))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1175:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=a(3117),r=(a(7294),a(3905));a(4996);const i={id:"term-ref-alt-syntax",sidebar_label:"TermRefs - Alt Syntax",date:20231123},o="Term References - Alternative Syntax",s={unversionedId:"spec-syntax/term-ref-alt-syntax",id:"spec-syntax/term-ref-alt-syntax",title:"Term References - Alternative Syntax",description:"As an author or curator, you want to be able to mark words or phrases, and have them refer to (the documentation of) a particular concept or other semantic unit. Such marked-up words or phrases are called TermRefs. This text specifies the syntax that you can use to author TermRefs.",source:"@site/docs/spec-syntax/12-term-ref-alt-syntax.md",sourceDirName:"spec-syntax",slug:"/spec-syntax/term-ref-alt-syntax",permalink:"/tev2-specifications/docs/spec-syntax/term-ref-alt-syntax",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/spec-syntax/12-term-ref-alt-syntax.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1702049334,formattedLastUpdatedAt:"Dec 8, 2023",sidebarPosition:12,frontMatter:{id:"term-ref-alt-syntax",sidebar_label:"TermRefs - Alt Syntax",date:20231123},sidebar:"tev2SideBar",previous:{title:"TermRefs - Basic Syntax",permalink:"/tev2-specifications/docs/spec-syntax/term-ref-basic-syntax"},next:{title:"Term Identifiers",permalink:"/tev2-specifications/docs/spec-syntax/term-identifier-syntax"}},p={},l=[{value:"Term References (Original/Default Syntax)",id:"basic-syntax",level:2},{value:"<code>showtext</code>",id:"showtext",level:3},{value:"<code>term</code>",id:"term",level:3},{value:"<code>trait</code>",id:"trait",level:3},{value:"<code>scopetag</code>",id:"scopetag",level:3},{value:"<code>vsntag</code>",id:"vsntag",level:3},{value:"Alternative notation",id:"alternative-syntax",level:3}],m={toc:l};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"term-references---alternative-syntax"},"Term References - Alternative Syntax"),(0,r.kt)("p",null,"As an ",(0,r.kt)("a",{parentName:"p",href:"@"},"author")," or ",(0,r.kt)("a",{parentName:"p",href:"@"},"curator"),", you want to be able to mark words or phrases, and have them refer to (the documentation of) a particular ",(0,r.kt)("a",{parentName:"p",href:"@"},"concept")," or other ",(0,r.kt)("a",{parentName:"p",href:"@"},"semantic unit"),". Such marked-up words or phrases are called ",(0,r.kt)("a",{parentName:"p",href:"@"},"TermRefs"),". This text specifies the syntax that you can use to ",(0,r.kt)("a",{parentName:"p",href:"@"},"author")," ",(0,r.kt)("a",{parentName:"p",href:"@"},"TermRefs"),"."),(0,r.kt)("admonition",{title:"Editor's note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Also, you will want to (and actually can) control the effect that your ",(0,r.kt)("a",{parentName:"p",href:"@"},"TermRefs")," must have when it is rendered. After all, the effect you seek it to have as part of a rendered static website (e.g. so that it produces a popup with its definition) would be quite different form when it would be part of a PDF (in which case you may want it to become part of an automatically generated ",(0,r.kt)("a",{parentName:"p",href:"@"},"glossary")," in one of the papers annexes). Selecting the effect is done by properly instructing the ",(0,r.kt)("a",{parentName:"p",href:"trrt@"},"TermRef resolution tool")," when your text is processed for rendering."),(0,r.kt)("p",{parentName:"admonition"},"We need some text here that points to the documentation for doing so. This could be e.g. in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/manuals/author"},"authors manual")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/manuals/curator"},"curators manual"),", but also in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/spec-tools/trrt"},"TRRT specifications"),", or in some manual that deals with adding rendering plugins.")),(0,r.kt)("p",null,"while at the same time referring to the ",(0,r.kt)("a",{parentName:"p",href:"@"},"definition")," that defines its meaning. i.e. the syntax that you need to use in such texts. The way in which the ",(0,r.kt)("a",{parentName:"p",href:"@"},"term")," (and its ",(0,r.kt)("a",{parentName:"p",href:"@"},"definition"),") may be rendered depends on the artifact that is being generated. For example, when a ",(0,r.kt)("a",{parentName:"p",href:"@"},"term")," is rendered in a web-site, it may be enhanced, showing a popup that contains its ",(0,r.kt)("a",{parentName:"p",href:"@"},"definition")," when a ",(0,r.kt)("a",{parentName:"p",href:"@"},"reader")," hovers the mouse over it, and that hyperlinks to the page in the website that explains the term in more detail when the ",(0,r.kt)("a",{parentName:"p",href:"@"},"reader")," clicks on it. When a ",(0,r.kt)("a",{parentName:"p",href:"@"},"term")," is rendered in a PDF file, its definition may appear as an entry in a ",(0,r.kt)("a",{parentName:"p",href:"@"},"glossary")," that is added somewhere in the PDF. It all depends on the rendering tools that are being used, and this is out of scope for this specification."),(0,r.kt)("p",null,"This file specifies the syntax of ",(0,r.kt)("a",{parentName:"p",href:"@"},"TermRefs"),". The ",(0,r.kt)("a",{parentName:"p",href:"@"},"TRRT")," describes ",(0,r.kt)("a",{parentName:"p",href:"/docs/spec-tools/trrt#term-ref-resolution"},"how they are processed (resolved)"),"."),(0,r.kt)("h2",{id:"basic-syntax"},"Term References (Original/Default Syntax)"),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{parentName:"p",href:"@"},"TermRef")," can be thought of as a ",(0,r.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/basic-syntax/#links"},"Markdown link"),", but rather than linking to some URL or fragment, it refers/links to a specific descriptive text (e.g. a ",(0,r.kt)("a",{parentName:"p",href:"@"},"definition"),", purpose, or example) that is associated with (a specific version of) a ",(0,r.kt)("a",{parentName:"p",href:"scoped-term@"},"(scoped) term"),", which is ",(0,r.kt)("a",{parentName:"p",href:"@"},"identified")," by its ",(0,r.kt)("a",{parentName:"p",href:"@"},"scope")," and the ",(0,r.kt)("a",{parentName:"p",href:"@"},"term")," (label, text)."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Motivation for the chosen syntax"),(0,r.kt)("p",null,"We want to enable ",(0,r.kt)("a",{parentName:"p",href:"@"},"authors")," to use ",(0,r.kt)("a",{parentName:"p",href:"@"},"TermRefs")," pervasively, which means it must be easy to use, and mistakes should be (relatively) hard to make, yet easy to detect, identify, and correct. ",(0,r.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/basic-syntax/#links"},"Markdown links")," are of the form ","[",(0,r.kt)("inlineCode",{parentName:"p"},"show text"),"]","(",(0,r.kt)("inlineCode",{parentName:"p"},"ref-text"),"), where ",(0,r.kt)("inlineCode",{parentName:"p"},"show text")," is the text that is rendered and emphasized so that a ",(0,r.kt)("a",{parentName:"p",href:"@"},"reader")," knows it can be clicked, and ",(0,r.kt)("inlineCode",{parentName:"p"},"ref-text")," is a (relative or absolute) URL, or a ",(0,r.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/extended-syntax/#linking-to-heading-ids"},"heading ID"),", that identifies the resource (e.g. web page, or place therein) that is being referenced. So, we need a syntax for ",(0,r.kt)("a",{parentName:"p",href:"@"},"TermRefs")," that is",(0,r.kt)("br",null),"- sufficiently similar to a ",(0,r.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/basic-syntax/#links"},"Markdown link"),",",(0,r.kt)("br",null),"- 'humanly interpretable' when it isn't processed by the ",(0,r.kt)("a",{parentName:"p",href:"@"},"TRRT"),",",(0,r.kt)("br",null),"- easy to use for ",(0,r.kt)("a",{parentName:"p",href:"@"},"authors"),", and",(0,r.kt)("br",null),"- sufficiently distinct from a Markdown link so that the ",(0,r.kt)("a",{parentName:"p",href:"@"},"TRRT")," will not process Markdown links yet will process the ",(0,r.kt)("a",{parentName:"p",href:"@"},"TermRefs"),".")),(0,r.kt)("p",null,"Here is an example of a ",(0,r.kt)("a",{parentName:"p",href:"@"},"TermRef"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"[definitions](definition@)"),". When this text is rendered into a human readable form, it will show the text ",(0,r.kt)("inlineCode",{parentName:"p"},"definitions")," (plural) enhanced, and it will link to the text that describes (or defines) the term ",(0,r.kt)("inlineCode",{parentName:"p"},"definition")," (singular). If you would want to use this term as it is defined in the ",(0,r.kt)("a",{parentName:"p",href:"@"},"scope")," called ",(0,r.kt)("inlineCode",{parentName:"p"},"essif-lab"),", you could do that by wrinting ",(0,r.kt)("inlineCode",{parentName:"p"},"[definitions](definition@essif-lab)")," (provided that ",(0,r.kt)("inlineCode",{parentName:"p"},"essif-lab")," is a defined ",(0,r.kt)("a",{parentName:"p",href:"@"},"scopetag")," within the ",(0,r.kt)("a",{parentName:"p",href:"@"},"scope")," that you operate in)."),(0,r.kt)("p",null,"The complete, generic structure of a ",(0,r.kt)("a",{parentName:"p",href:"@"},"TermRef")," is: ",(0,r.kt)("strong",{parentName:"p"},"[",(0,r.kt)("inlineCode",{parentName:"strong"},"show text"),"]","(",(0,r.kt)("inlineCode",{parentName:"strong"},"term"),"#",(0,r.kt)("inlineCode",{parentName:"strong"},"trait"),"@",(0,r.kt)("inlineCode",{parentName:"strong"},"scopetag"),":",(0,r.kt)("inlineCode",{parentName:"strong"},"vsntag"),")"),". However, all of its elements (except for ",(0,r.kt)("inlineCode",{parentName:"p"},"show text"),") are optional, so as to limit the 'extra work' that ",(0,r.kt)("a",{parentName:"p",href:"@"},"authors")," need to do to a minimum."),(0,r.kt)("h3",{id:"showtext"},(0,r.kt)("inlineCode",{parentName:"h3"},"showtext")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"showtext"))," is the text that will be highlighted/emphasized to indicate it is linked.\nIt must not contain the characters ",(0,r.kt)("inlineCode",{parentName:"p"},"@")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"]")," (this is needed to distinguish ",(0,r.kt)("a",{parentName:"p",href:"@"},"TermRefs")," from regular ",(0,r.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/basic-syntax/#links"},"markdown links"),")."),(0,r.kt)("h3",{id:"term"},(0,r.kt)("inlineCode",{parentName:"h3"},"term")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"term"))," is the ",(0,r.kt)("a",{parentName:"p",href:"@"},"(scoped) term")," that ",(0,r.kt)("a",{parentName:"p",href:"@"},"identifies")," the ",(0,r.kt)("a",{parentName:"p",href:"@"},"semantic unit")," that is to be referred to.",(0,r.kt)("br",null),"It must satisfy the regex ",(0,r.kt)("inlineCode",{parentName:"p"},"[a-z0-9_-]+"),"."),(0,r.kt)("p",null,"If omitted, its value is assumed to be ",(0,r.kt)("a",{parentName:"p",href:"/docs/spec-tools/trrt#id"},"derivable from ",(0,r.kt)("inlineCode",{parentName:"a"},"showtext")),".\nAt a minimum, this is the case if the ",(0,r.kt)("inlineCode",{parentName:"p"},"term")," equals the result of processing ",(0,r.kt)("inlineCode",{parentName:"p"},"showtext")," by first converting every character in the range ",(0,r.kt)("inlineCode",{parentName:"p"},"[A-Z]")," to lower-case, and then replacing every sequence of characters specified by regex ",(0,r.kt)("inlineCode",{parentName:"p"},"[^A-Za-z_-]+")," with (a single) ",(0,r.kt)("inlineCode",{parentName:"p"},"-")," character."),(0,r.kt)("h3",{id:"trait"},(0,r.kt)("inlineCode",{parentName:"h3"},"trait")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"trait"))," is a text that ",(0,r.kt)("a",{parentName:"p",href:"@"},"identifies")," a particular (kind of) characteristic (feature, attribute, particularity) that is associated with the ",(0,r.kt)("a",{parentName:"p",href:"@"},"term"),", and to a description of which is to be referred.",(0,r.kt)("br",null),"It must satisfy the regex ",(0,r.kt)("inlineCode",{parentName:"p"},"[a-z0-9_-]+"),"."),(0,r.kt)("p",null,"If omitted (in which case the preceding ",(0,r.kt)("inlineCode",{parentName:"p"},"#"),"-character may also be omitted), the ",(0,r.kt)("a",{parentName:"p",href:"@"},"TermRef")," will by default resolve to the text of its ",(0,r.kt)("a",{parentName:"p",href:"@"},"glossary")," entry. While it is envisaged that ",(0,r.kt)("inlineCode",{parentName:"p"},"trait")," must be a text from a predefined set of allowed/supported texts (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"purpose"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"criteria"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"example-3"),"), the precise semantics remain to be specified."),(0,r.kt)("admonition",{title:"Editor's note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The semantics of ",(0,r.kt)("inlineCode",{parentName:"p"},"trait")," need to be better specified.")),(0,r.kt)("h3",{id:"scopetag"},(0,r.kt)("inlineCode",{parentName:"h3"},"scopetag")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"scopetag"))," is a ",(0,r.kt)("a",{parentName:"p",href:"@"},"tag")," that ",(0,r.kt)("a",{parentName:"p",href:"@"},"identifies")," the ",(0,r.kt)("a",{parentName:"p",href:"@"},"scope")," of the ",(0,r.kt)("a",{parentName:"p",href:"@"},"terminology")," that contains the ",(0,r.kt)("a",{parentName:"p",href:"scoped-term@"},"(scoped) term")," that is being referenced.",(0,r.kt)("br",null),"It must satisfy the regex ",(0,r.kt)("inlineCode",{parentName:"p"},"[a-z0-9_-]+"),". Also, it must appear as such in the ",(0,r.kt)("inlineCode",{parentName:"p"},"scopes")," section of the ",(0,r.kt)("a",{parentName:"p",href:"@"},"SAF")," of the ",(0,r.kt)("a",{parentName:"p",href:"@"},"scope")," within which the document containing the ",(0,r.kt)("a",{parentName:"p",href:"@"},"TermRef")," is being maintained, or it must be the ",(0,r.kt)("a",{parentName:"p",href:"@"},"scopetag")," of the ",(0,r.kt)("a",{parentName:"p",href:"@"},"scope")," itself."),(0,r.kt)("p",null,"If omitted, a default ",(0,r.kt)("a",{parentName:"p",href:"@"},"scope")," will be used, which is the ",(0,r.kt)("a",{parentName:"p",href:"@"},"scope")," from which the ",(0,r.kt)("a",{parentName:"p",href:"@"},"TRRT")," is being called, which SHOULD be the ",(0,r.kt)("a",{parentName:"p",href:"@"},"scope")," within which the document containing the ",(0,r.kt)("a",{parentName:"p",href:"@"},"TermRef")," is being maintained. Note that the preceding ",(0,r.kt)("inlineCode",{parentName:"p"},"@")," sign MUST NOT be omitted because as it serves the purpose to distinguish ",(0,r.kt)("a",{parentName:"p",href:"@"},"TermRefs")," from other ",(0,r.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/basic-syntax/#links"},"markdown links"),"."),(0,r.kt)("h3",{id:"vsntag"},(0,r.kt)("inlineCode",{parentName:"h3"},"vsntag")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"vsntag"))," is a ",(0,r.kt)("a",{parentName:"p",href:"@"},"versiontag")," that ",(0,r.kt)("a",{parentName:"p",href:"@"},"identifies")," the specific version of the ",(0,r.kt)("a",{parentName:"p",href:"@"},"terminology")," in the ",(0,r.kt)("a",{parentName:"p",href:"@"},"scope")," that contains the ",(0,r.kt)("a",{parentName:"p",href:"scoped-term@"},"(scoped) term")," that is being referenced.",(0,r.kt)("br",null),"It must satisfy the regex ",(0,r.kt)("inlineCode",{parentName:"p"},"[a-z0-9_-\\.]+"),"."),(0,r.kt)("p",null,"If omitted (in which case the preceding ",(0,r.kt)("inlineCode",{parentName:"p"},":"),"-character may also be omitted), its value will be the default, which is determined by the ",(0,r.kt)("a",{parentName:"p",href:"@"},"curators")," of that ",(0,r.kt)("a",{parentName:"p",href:"@"},"scope")," (the ",(0,r.kt)("a",{parentName:"p",href:"@"},"MRG")," that has the ",(0,r.kt)("a",{parentName:"p",href:"@"},"terminology")," that contains the (scoped) term](scoped-term@) that is being referenced, is specified in the ",(0,r.kt)("a",{parentName:"p",href:"@"},"SAF")," of that ",(0,r.kt)("a",{parentName:"p",href:"@"},"scope"),", in the appropriate ",(0,r.kt)("inlineCode",{parentName:"p"},"scopes.mrgfile"),"-field). A ",(0,r.kt)("inlineCode",{parentName:"p"},"vsntag")," is only valid if it appears as the value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"vsntag")," field or an element of the ",(0,r.kt)("inlineCode",{parentName:"p"},"altvsntags")," field in one of the list-elements of the ",(0,r.kt)("inlineCode",{parentName:"p"},"versions")," field in the ",(0,r.kt)("a",{parentName:"p",href:"@"},"SAF")," of the ",(0,r.kt)("a",{parentName:"p",href:"@"},"scope"),"."),(0,r.kt)("admonition",{title:"Editor's note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"It has been suggested to provide ",(0,r.kt)("a",{parentName:"p",href:"@"},"TermRef")," syntax that allows one to refer to a ",(0,r.kt)("a",{parentName:"p",href:"@"},"semantic unit")," from a ",(0,r.kt)("a",{parentName:"p",href:"@"},"terminology")," that was 'current'/'latest'/... at a particular date. The ",(0,r.kt)("a",{parentName:"p",href:"@"},"SAF")," ",(0,r.kt)("a",{parentName:"p",href:"/docs/spec-files/saf#versions"},"versioning specifications")," already cater for ",(0,r.kt)("inlineCode",{parentName:"p"},"from")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"to")," dates, but everything else needs to be worked out.")),(0,r.kt)("h3",{id:"alternative-syntax"},"Alternative notation"),(0,r.kt)("p",null,"It is convenient for ",(0,r.kt)("a",{parentName:"p",href:"@"},"authors")," to be able to use the '@",(0,r.kt)("inlineCode",{parentName:"p"},"scopetag"),"' part of a ",(0,r.kt)("a",{parentName:"p",href:"@"},"TermRef")," immediately behind the ",(0,r.kt)("inlineCode",{parentName:"p"},"show text")," within the square brackets (",(0,r.kt)("inlineCode",{parentName:"p"},"[")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"]"),"), and leave out the parentheses and the text in between if all the other items are omitted."),(0,r.kt)("p",null,"This is particularly useful in the vast majority of cases, where the default processing of ",(0,r.kt)("inlineCode",{parentName:"p"},"showtext")," results in ",(0,r.kt)("inlineCode",{parentName:"p"},"term")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"trait")," is absent. Examples of this are ",(0,r.kt)("inlineCode",{parentName:"p"},"[definition](@)"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"[TermRef](@)"),"."),(0,r.kt)("p",null,"The usefulness becomes even greater as the ",(0,r.kt)("a",{parentName:"p",href:"@"},"TRRT")," also implements more sophisticated ways to derive a ",(0,r.kt)("inlineCode",{parentName:"p"},"term")," from a ",(0,r.kt)("inlineCode",{parentName:"p"},"show text"),", e.g. to accommodate for plural forms (of nouns), or conjugate forms (for verbs)."),(0,r.kt)("admonition",{title:"Editor's note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This alternative notation will assume that the ",(0,r.kt)("inlineCode",{parentName:"p"},"showtext")," part of a ",(0,r.kt)("a",{parentName:"p",href:"@"},"TermRef")," won't contain the ",(0,r.kt)("inlineCode",{parentName:"p"},"@")," character. However, it is likely that some ",(0,r.kt)("a",{parentName:"p",href:"@"},"authors")," will want to use an email address as the ",(0,r.kt)("inlineCode",{parentName:"p"},"showtext")," part of a ",(0,r.kt)("em",{parentName:"p"},"regular")," link, e.g. as in ",(0,r.kt)("inlineCode",{parentName:"p"},"[rieks.joosten@tno.nl](mailto:rieks.joosten@tno.nl)"),". However, since ",(0,r.kt)("a",{parentName:"p",href:"@"},"scopetags")," should not contain ",(0,r.kt)("inlineCode",{parentName:"p"},"."),"-characters, ",(0,r.kt)("inlineCode",{parentName:"p"},"[rieks.joosten@tno.nl]")," does not qualify as a ",(0,r.kt)("inlineCode",{parentName:"p"},"showtext")," in our syntax. ",(0,r.kt)("a",{parentName:"p",href:"@"},"Authors")," should ",(0,r.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/basic-syntax/#urls-and-email-addresses"},"use angle brackets to link to email addresses"),", as in ",(0,r.kt)("inlineCode",{parentName:"p"},"<rieks.joosten@tno.nl>"),".")),(0,r.kt)("p",null,"This leads to an alternative notation that can be used in addition to the previously specified notation. Here is the alternative syntax and its equivalent counterpart:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Alternative syntax"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Equivalent regular syntax"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"[",(0,r.kt)("inlineCode",{parentName:"td"},"show text"),"@","]"),(0,r.kt)("td",{parentName:"tr",align:"center"},"[",(0,r.kt)("inlineCode",{parentName:"td"},"show text"),"]","(@)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"[",(0,r.kt)("inlineCode",{parentName:"td"},"show text"),"@",(0,r.kt)("inlineCode",{parentName:"td"},"scopetag"),"]"),(0,r.kt)("td",{parentName:"tr",align:"center"},"[",(0,r.kt)("inlineCode",{parentName:"td"},"show text"),"]","(",(0,r.kt)("inlineCode",{parentName:"td"},"showtext"),"@",(0,r.kt)("inlineCode",{parentName:"td"},"scopetag"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"[",(0,r.kt)("inlineCode",{parentName:"td"},"show text"),"@",(0,r.kt)("inlineCode",{parentName:"td"},"scopetag"),":",(0,r.kt)("inlineCode",{parentName:"td"},"vsntag"),"]","(",(0,r.kt)("inlineCode",{parentName:"td"},"term"),"#",(0,r.kt)("inlineCode",{parentName:"td"},"trait"),")"),(0,r.kt)("td",{parentName:"tr",align:"center"},"[",(0,r.kt)("inlineCode",{parentName:"td"},"show text"),"]","(",(0,r.kt)("inlineCode",{parentName:"td"},"term"),"#",(0,r.kt)("inlineCode",{parentName:"td"},"trait"),"@",(0,r.kt)("inlineCode",{parentName:"td"},"scopetag"),":",(0,r.kt)("inlineCode",{parentName:"td"},"vsntag"),")")))),(0,r.kt)("p",null,"In the last row of the above table, ",(0,r.kt)("inlineCode",{parentName:"p"},"term")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"#trait")," are optional. Thus, ",(0,r.kt)("inlineCode",{parentName:"p"},"[definition@]()")," is equivalent with ",(0,r.kt)("inlineCode",{parentName:"p"},"[definition](@)")," and with ",(0,r.kt)("inlineCode",{parentName:"p"},"[definition](@)"),"."))}d.isMDXComponent=!0}}]);