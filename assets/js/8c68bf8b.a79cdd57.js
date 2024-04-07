"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[7552],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),c=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(a),f=n,u=h["".concat(l,".").concat(f)]||h[f]||p[f]||r;return a?i.createElement(u,o(o({ref:t},d),{},{components:a})):i.createElement(u,o({ref:t},d))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var i=a(7294),n=a(6010);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return i.createElement("div",{role:"tabpanel",className:(0,n.Z)(r,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>T});var i=a(3117),n=a(7294),r=a(6010),o=a(2466),s=a(6775),l=a(1980),c=a(7392),d=a(12);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:i,default:n}}=e;return{value:t,label:a,attributes:i,default:n}}))}function h(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function f(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function u(e){let{queryString:t=!1,groupId:a}=e;const i=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(r),(0,n.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(i.location.search);t.set(r,e),i.replace({...i.location,search:t.toString()})}),[r,i])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:i}=e,r=h(e),[o,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=a.find((e=>e.default))??a[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:r}))),[l,c]=u({queryString:a,groupId:i}),[p,m]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,r]=(0,d.Nk)(a);return[i,(0,n.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:i}),k=(()=>{const e=l??p;return f({value:e,tabValues:r})?e:null})();(0,n.useLayoutEffect)((()=>{k&&s(k)}),[k]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!f({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),m(e)}),[c,m,r]),tabValues:r}}var k=a(2389);const y="tabList__CuJ",b="tabItem_LNqP";function g(e){let{className:t,block:a,selectedValue:s,selectValue:l,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),h=e=>{const t=e.currentTarget,a=d.indexOf(t),i=c[a].value;i!==s&&(p(t),l(i))},f=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,i.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>d.push(e),onKeyDown:f,onClick:h},o,{className:(0,r.Z)("tabs__item",b,o?.className,{"tabs__item--active":s===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:i}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==i}))))}function w(e){const t=m(e);return n.createElement("div",{className:(0,r.Z)("tabs-container",y)},n.createElement(g,(0,i.Z)({},e,t)),n.createElement(v,(0,i.Z)({},e,t)))}function T(e){const t=(0,k.Z)();return n.createElement(w,(0,i.Z)({key:String(t)},e))}},9050:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var i=a(3117),n=(a(7294),a(3905)),r=(a(4996),a(4866)),o=a(5162);const s={id:"term-refs",sidebar_label:"Term References (TermRefs)",date:20220303},l="TermRefs - Syntax",c={unversionedId:"specs/syntax/term-refs",id:"specs/syntax/term-refs",title:"TermRefs - Syntax",description:"As an author or curator, you want to be able to mark words or phrases and have them refer to (the documentation of) a particular concept or other semantic unit. Such marked-up words or phrases are called TermRefs.",source:"@site/docs/specs/syntax/10-term-refs.md",sourceDirName:"specs/syntax",slug:"/specs/syntax/term-refs",permalink:"/tev2-specifications/docs/specs/syntax/term-refs",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/specs/syntax/10-term-refs.md",tags:[],version:"current",lastUpdatedBy:"Ca5e",lastUpdatedAt:1712494678,formattedLastUpdatedAt:"Apr 7, 2024",sidebarPosition:10,frontMatter:{id:"term-refs",sidebar_label:"Term References (TermRefs)",date:20220303},sidebar:"tev2SideBar",previous:{title:"Specifications - Syntax",permalink:"/tev2-specifications/docs/categories/specs-syntax"},next:{title:"Term Identifiers",permalink:"/tev2-specifications/docs/specs/syntax/term-identifiers"}},d={},p=[{value:"Default TermRef Syntax",id:"default",level:2},{value:"Examples",id:"examples",level:3},{value:"Motivation for the chosen syntax",id:"motivation-for-the-chosen-syntax",level:3},{value:"Alternative TermRef Syntax",id:"alt",level:2},{value:"Customizing TermRef Syntax (#customize)",id:"customizing-termref-syntax-customize",level:2}],h={toc:p};function f(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"termrefs---syntax"},"TermRefs - Syntax"),(0,n.kt)("p",null,"As an ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/author",title:"Author: a person that creates a text that is meant to be read and understood by others - usually, a particular audience."},"author")," or ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/curator",title:"Curator (of a Scope): a person responsible for curating, managing, and maintaining the Terminologies, to ensure shared understanding among a Community working together on a particular set of Objectives."},"curator"),", you want to be able to mark words or phrases and have them refer to (the documentation of) a particular ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/concept",title:"Concept: a Semantic Unit that captures the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same')."},"concept")," or other ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",title:"Semantic Unit: a basic building block of meaning or representation that exists within the 'mind' of a Party (i.e., in its Knowledge)."},"semantic unit"),". Such marked-up words or phrases are called ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRefs"),"."),(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRefs")," can be converted (by the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/specs/tools/trrt",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT"),") into so-called ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/renderable-ref",title:"Renderable Ref: a text with which the TRRT replaces a TermRef, that can be processed by specific third party rendering tools, the result of which is a rendering of the original TermRef that has additional characteristics that help Readers to (better) understand the intention of its Author."},"renderable refs"),", which are texts that are being rendered in a way that helps readers better understand the words/phrases that you marked up. For example, when the document you authored is used in a website, the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRef")," could be rendered en an emphasized way, and have a popup balloon that has its definition when a reader hovers its mouse over it.",(0,n.kt)("p",null,"The ",(0,n.kt)("a",{href:"/tev2-specifications/docs/specs/tools/trrt#term-ref-resolution",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT specifications")," specify"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"how ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRefs")," are converted;"),(0,n.kt)("li",{parentName:"ul"},"how you can customize the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRef")," syntax to your needs;"),(0,n.kt)("li",{parentName:"ul"},"how you can customize the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/renderable-ref",title:"Renderable Ref: a text with which the TRRT replaces a TermRef, that can be processed by specific third party rendering tools, the result of which is a rendering of the original TermRef that has additional characteristics that help Readers to (better) understand the intention of its Author."},"renderable refs")," to look like what you want.")),(0,n.kt)("p",null,"The following tabs-table tells you which syntaxes are predefined:"),(0,n.kt)(r.Z,{defaultValue:"default",values:[{label:"`default` TermRef syntax",value:"default"},{label:"`alternative` TermRef syntax",value:"alternative"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"default",mdxType:"TabItem"},(0,n.kt)("h2",{id:"default"},"Default TermRef Syntax"),(0,n.kt)("p",null,"By default a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRef")," can be thought of as a special kind of ",(0,n.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/basic-syntax/#links"},"Markdown link"),". It link-part does not contain a URL or fragment, but contains text that refers to (a specific trait of) a specific ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/concept",title:"Concept: a Semantic Unit that captures the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same')."},"concept")," or other ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",title:"Semantic Unit: a basic building block of meaning or representation that exists within the 'mind' of a Party (i.e., in its Knowledge)."},"semantic unit"),", as defined in a particular ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",title:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology"),"."),(0,n.kt)("p",null,"The most general form of the default syntax is:"),(0,n.kt)("p",null,"["," ",(0,n.kt)("inlineCode",{parentName:"p"},"show text")," ","]","( ",(0,n.kt)("inlineCode",{parentName:"p"},"termType"),":",(0,n.kt)("inlineCode",{parentName:"p"},"term"),"#",(0,n.kt)("inlineCode",{parentName:"p"},"trait"),"@",(0,n.kt)("inlineCode",{parentName:"p"},"terminology-identifier")," )"),(0,n.kt)("p",null,"where: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"show text")," (required) is the text that will be highlighted/emphasized to indicate it is linked. It must not contain the characters ",(0,n.kt)("inlineCode",{parentName:"li"},"@")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"]")," (this is needed to distinguish ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRefs")," from regular ",(0,n.kt)("a",{parentName:"li",href:"https://www.markdownguide.org/basic-syntax/#links"},"markdown links"),")."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"termType")," (optional) is a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term-type",title:"Term Type: a Text that identifies a particular *kind* of Semantic Unit within a particular Scope. Examples include `concept`, `relation`, `pattern` (or `mental-model`)."},"term type"),". When not specified, it is given the default type for ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",title:"Semantic Unit: a basic building block of meaning or representation that exists within the 'mind' of a Party (i.e., in its Knowledge)."},"semantic units")," in the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/current-scope",title:"Current Scope: the Scope that is the context within which a Curator is acting, or a tool is being called."},"current scope"),", which usually would be ",(0,n.kt)("inlineCode",{parentName:"li"},"concept"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"term")," (optional) is a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent Concepts."},"term"),". If not specified, its value is constructed based on the value of ",(0,n.kt)("inlineCode",{parentName:"li"},"showtext"),", as specified in the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/specs/tools/trrt#id",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"trait")," (optional) refers to a particular characteristic of the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",title:"Semantic Unit: a basic building block of meaning or representation that exists within the 'mind' of a Party (i.e., in its Knowledge)."},"semantic unit"),". If specified, it must be the ",(0,n.kt)("a",{parentName:"li",href:"https://www.markdownguide.org/extended-syntax/#heading-ids"},"heading id")," of the section in the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/body",title:"Body (of a Curated Text): the part of a Curated Text that contains arbitrarily structured documentation about the Semantic Unit that the Curated Text documents."},"body")," of a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",title:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated text")," that describes the characteristic. If not specified it refers to the whole of (the documentation of) the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",title:"Semantic Unit: a basic building block of meaning or representation that exists within the 'mind' of a Party (i.e., in its Knowledge)."},"semantic unit"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"terminology-identifier")," is a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/specs/syntax/terminology-identifiers",title:"Terminology Identifier: a Text, of the form `<scopetag>:<vsntag>`, that identifies a Terminology from within a particular Scope, and can also be used to find the MRG file (in the Glossarydir of that same Scope) that contains Entries for every Term contained in that Terminology."},"terminology identifier"),". If not specified, its value is taken to be the default ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",title:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology")," of the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/current-scope",title:"Current Scope: the Scope that is the context within which a Curator is acting, or a tool is being called."},"current scope"),".")),(0,n.kt)("h3",{id:"examples"},"Examples"),(0,n.kt)("admonition",{title:"Editor's note",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"vanaf hier tekst reviseren.\nMerk op dat de conversie spullen naar de TRRT specs moeten verhuizen!")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"[TermRef Examples](term-ref#example)")," ")),(0,n.kt)("p",null,"This ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRef")," refers to the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",title:"Semantic Unit: a basic building block of meaning or representation that exists within the 'mind' of a Party (i.e., in its Knowledge)."},"semantic unit")," that is identified by the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/specs/syntax/term-identifiers",title:"Term Identifier: a Text, of the form `<termid>@<terminology-identifier>`, that is used for identifying a Semantic Unit within a designated Terminology."},"term identifier")," ",(0,n.kt)("inlineCode",{parentName:"p"},"<termType>:<term>@<terminology-identifier>"),".  When all optional fields are specified, this "),(0,n.kt)("p",null,"The par"),(0,n.kt)("p",null," that identifies the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",title:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology")," in which ",(0,n.kt)("inlineCode",{parentName:"p"},"termid")," identifies a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",title:"Semantic Unit: a basic building block of meaning or representation that exists within the 'mind' of a Party (i.e., in its Knowledge)."},"semantic unit"),"."),(0,n.kt)("p",null,"Here is an example of a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRef"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"[definitions](definition@)"),". When this text is rendered into a human readable form, it will show the text ",(0,n.kt)("inlineCode",{parentName:"p"},"definitions")," (plural) enhanced, and it will link to the text that describes (or defines) the term ",(0,n.kt)("inlineCode",{parentName:"p"},"definition")," (singular). If you would want to use this term as it is defined in the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (or Party, which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," called ",(0,n.kt)("inlineCode",{parentName:"p"},"essif-lab"),", you could do that by writing ",(0,n.kt)("inlineCode",{parentName:"p"},"[definitions](definition@essif-lab)")," (provided that ",(0,n.kt)("inlineCode",{parentName:"p"},"essif-lab")," is a defined ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/scopetag",title:"Scopetag: a Tag that is used to identify Scopes from within a specific Scope"},"scopetag")," within the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (or Party, which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," that you operate in)."),(0,n.kt)("h3",{id:"motivation-for-the-chosen-syntax"},"Motivation for the chosen syntax"),(0,n.kt)("p",null,"We want to enable ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/author",title:"Author: a person that creates a text that is meant to be read and understood by others - usually, a particular audience."},"authors")," to use ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRefs")," pervasively, which means it must be easy to use, and mistakes should be (relatively) hard to make, yet easy to detect, identify, and correct. ",(0,n.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/basic-syntax/#links"},"Markdown links")," are of the form ","[",(0,n.kt)("inlineCode",{parentName:"p"},"show text"),"]","(",(0,n.kt)("inlineCode",{parentName:"p"},"ref-text"),"), where ",(0,n.kt)("inlineCode",{parentName:"p"},"show text")," is the text that is rendered and emphasized so that a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/reader",title:"Reader: a person that reads a text that is authored by another person (its Author), and that tries to understand the meaning of this text in the way its Author intended."},"reader")," knows it can be clicked, and ",(0,n.kt)("inlineCode",{parentName:"p"},"ref-text")," is a (relative or absolute) URL, or a ",(0,n.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/extended-syntax/#linking-to-heading-ids"},"heading ID"),", that identifies the resource (e.g. web page, or place therein) that is being referenced. So, we need a syntax for ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRefs")," that is",(0,n.kt)("br",null),"- sufficiently similar to a ",(0,n.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/basic-syntax/#links"},"Markdown link"),",",(0,n.kt)("br",null),"- 'humanly interpretable' when it isn't processed by the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/specs/tools/trrt",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT"),",",(0,n.kt)("br",null),"- easy to use for ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/author",title:"Author: a person that creates a text that is meant to be read and understood by others - usually, a particular audience."},"authors"),", and",(0,n.kt)("br",null),"- sufficiently distinct from a Markdown link so that the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/specs/tools/trrt",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT")," will not process Markdown links yet will process the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRefs"),".")),(0,n.kt)(o.Z,{value:"alternative",mdxType:"TabItem"},(0,n.kt)("h2",{id:"alt"},"Alternative TermRef Syntax"),(0,n.kt)("p",null,"It is convenient for ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/author",title:"Author: a person that creates a text that is meant to be read and understood by others - usually, a particular audience."},"authors")," to be able to use the '@",(0,n.kt)("inlineCode",{parentName:"p"},"scopetag"),"' part of a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRef")," immediately behind the ",(0,n.kt)("inlineCode",{parentName:"p"},"show text")," within the square brackets (",(0,n.kt)("inlineCode",{parentName:"p"},"[")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"]"),"), and leave out the parentheses and the text in between if all the other items are omitted."),(0,n.kt)("p",null,"This is particularly useful in the vast majority of cases, where the default processing of ",(0,n.kt)("inlineCode",{parentName:"p"},"showtext")," results in ",(0,n.kt)("inlineCode",{parentName:"p"},"term")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"trait")," is absent. Examples of this are ",(0,n.kt)("inlineCode",{parentName:"p"},"[definition](@)"),", or ",(0,n.kt)("inlineCode",{parentName:"p"},"[TermRef](@)"),"."),(0,n.kt)("p",null,"The usefulness becomes even greater as the ",(0,n.kt)("a",{href:"/tev2-specifications/docs/specs/tools/trrt",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT")," also implements more sophisticated ways to derive a ",(0,n.kt)("inlineCode",{parentName:"p"},"term")," from a ",(0,n.kt)("inlineCode",{parentName:"p"},"show text"),", e.g. to accommodate for plural forms (of nouns), or conjugate forms (for verbs)."),(0,n.kt)("admonition",{title:"Editor's note",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This alternative notation will assume that the ",(0,n.kt)("inlineCode",{parentName:"p"},"showtext")," part of a ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRef")," won't contain the ",(0,n.kt)("inlineCode",{parentName:"p"},"@")," character. However, it is likely that some ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/author",title:"Author: a person that creates a text that is meant to be read and understood by others - usually, a particular audience."},"authors")," will want to use an email address as the ",(0,n.kt)("inlineCode",{parentName:"p"},"showtext")," part of a ",(0,n.kt)("em",{parentName:"p"},"regular")," link, e.g. as in ",(0,n.kt)("inlineCode",{parentName:"p"},"[rieks.joosten@tno.nl](mailto:rieks.joosten@tno.nl)"),". However, since ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/scopetag",title:"Scopetag: a Tag that is used to identify Scopes from within a specific Scope"},"scopetags")," should not contain ",(0,n.kt)("inlineCode",{parentName:"p"},"."),"-characters, ",(0,n.kt)("inlineCode",{parentName:"p"},"[rieks.joosten@tno.nl]")," does not qualify as a ",(0,n.kt)("inlineCode",{parentName:"p"},"showtext")," in our syntax. ",(0,n.kt)("a",{href:"/tev2-specifications/docs/terms/author",title:"Author: a person that creates a text that is meant to be read and understood by others - usually, a particular audience."},"Authors")," should ",(0,n.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/basic-syntax/#urls-and-email-addresses"},"use angle brackets to link to email addresses"),", as in ",(0,n.kt)("inlineCode",{parentName:"p"},"<rieks.joosten@tno.nl>"),".")),(0,n.kt)("p",null,"This leads to an alternative notation that can be used in addition to the previously specified notation. Here is the alternative syntax and its equivalent counterpart:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Alternative syntax"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Equivalent regular syntax"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"[",(0,n.kt)("inlineCode",{parentName:"td"},"show text"),"@","]"),(0,n.kt)("td",{parentName:"tr",align:"center"},"[",(0,n.kt)("inlineCode",{parentName:"td"},"show text"),"]","(@)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"[",(0,n.kt)("inlineCode",{parentName:"td"},"show text"),"@",(0,n.kt)("inlineCode",{parentName:"td"},"scopetag"),"]"),(0,n.kt)("td",{parentName:"tr",align:"center"},"[",(0,n.kt)("inlineCode",{parentName:"td"},"show text"),"]","(",(0,n.kt)("inlineCode",{parentName:"td"},"showtext"),"@",(0,n.kt)("inlineCode",{parentName:"td"},"scopetag"),")")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"[",(0,n.kt)("inlineCode",{parentName:"td"},"show text"),"@",(0,n.kt)("inlineCode",{parentName:"td"},"scopetag"),":",(0,n.kt)("inlineCode",{parentName:"td"},"vsntag"),"]","(",(0,n.kt)("inlineCode",{parentName:"td"},"term"),"#",(0,n.kt)("inlineCode",{parentName:"td"},"trait"),")"),(0,n.kt)("td",{parentName:"tr",align:"center"},"[",(0,n.kt)("inlineCode",{parentName:"td"},"show text"),"]","(",(0,n.kt)("inlineCode",{parentName:"td"},"term"),"#",(0,n.kt)("inlineCode",{parentName:"td"},"trait"),"@",(0,n.kt)("inlineCode",{parentName:"td"},"scopetag"),":",(0,n.kt)("inlineCode",{parentName:"td"},"vsntag"),")")))),(0,n.kt)("p",null,"In the last row of the above table, ",(0,n.kt)("inlineCode",{parentName:"p"},"term")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"#trait")," are optional. Thus, ",(0,n.kt)("inlineCode",{parentName:"p"},"[definition@]()")," is equivalent with ",(0,n.kt)("inlineCode",{parentName:"p"},"[definition](@)")," and with ",(0,n.kt)("inlineCode",{parentName:"p"},"[definition](@)"),"."))),(0,n.kt)("h2",{id:"customizing-termref-syntax-customize"},"Customizing TermRef Syntax (#customize)"),(0,n.kt)("admonition",{title:"Editor's note",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"this section needs to be written.")))}f.isMDXComponent=!0}}]);