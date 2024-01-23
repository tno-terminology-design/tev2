"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[2511],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(r),d=i,p=f["".concat(c,".").concat(d)]||f[d]||h[d]||n;return r?a.createElement(p,o(o({ref:t},u),{},{components:r})):a.createElement(p,o({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<n;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(7294),i=r(6010);const n="tabItem_Ymn6";function o(e){let{children:t,hidden:r,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(n,o),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>T});var a=r(3117),i=r(7294),n=r(6010),o=r(2466),s=r(6775),c=r(1980),l=r(7392),u=r(12);function h(e){return function(e){return i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:i}}=e;return{value:t,label:r,attributes:a,default:i}}))}function f(e){const{values:t,children:r}=e;return(0,i.useMemo)((()=>{const e=t??h(r);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function d(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const a=(0,s.k6)(),n=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,c._X)(n),(0,i.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(a.location.search);t.set(n,e),a.replace({...a.location,search:t.toString()})}),[n,a])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,n=f(e),[o,s]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:n}))),[c,l]=p({queryString:r,groupId:a}),[h,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,n]=(0,u.Nk)(r);return[a,(0,i.useCallback)((e=>{r&&n.set(e)}),[r,n])]}({groupId:a}),b=(()=>{const e=c??h;return d({value:e,tabValues:n})?e:null})();(0,i.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!d({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);s(e),l(e),m(e)}),[l,m,n]),tabValues:n}}var b=r(2389);const g="tabList__CuJ",y="tabItem_LNqP";function v(e){let{className:t,block:r,selectedValue:s,selectValue:c,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:h}=(0,o.o5)(),f=e=>{const t=e.currentTarget,r=u.indexOf(t),a=l[r].value;a!==s&&(h(t),c(a))},d=e=>{let t=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":r},t)},l.map((e=>{let{value:t,label:r,attributes:o}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:f},o,{className:(0,n.Z)("tabs__item",y,o?.className,{"tabs__item--active":s===t})}),r??t)})))}function k(e){let{lazy:t,children:r,selectedValue:a}=e;const n=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=n.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=m(e);return i.createElement("div",{className:(0,n.Z)("tabs-container",g)},i.createElement(v,(0,a.Z)({},e,t)),i.createElement(k,(0,a.Z)({},e,t)))}function T(e){const t=(0,b.Z)();return i.createElement(w,(0,a.Z)({key:String(t)},e))}},8020:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var a=r(3117),i=(r(7294),r(3905)),n=r(4996);r(4866),r(5162);const o={id:"fixing-links",date:20240112},s="Fixing Links",c={unversionedId:"faqs/fixing-links",id:"faqs/fixing-links",title:"Fixing Links",description:"<img",source:"@site/docs/faqs/fixing-links.md",sourceDirName:"faqs",slug:"/faqs/fixing-links",permalink:"/tev2-specifications/docs/faqs/fixing-links",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/faqs/fixing-links.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1705045269,formattedLastUpdatedAt:"Jan 12, 2024",frontMatter:{id:"fixing-links",date:20240112}},l={},u=[],h={toc:u};function f(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"fixing-links"},"Fixing Links"),(0,i.kt)("img",{alt:"This page is under construction",src:(0,n.Z)("images/wip/wip-under-construction.png")}),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("p",null,"After (raw) texts have been authored, they will be rendered into some other form, typically a static web site. Particularly when a set of such texts have been authored, it may happen that references turn out not to be properly resolvable at runtime. Also, after some time in which such texts evolve, 'link rot' may kick in, which means that due to changes in some places, links that used to be properly resolvable no longer are."),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"Term Refs")," are not resolved - they link to `@`"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"showtext")," part of the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"term ref")," is not a specified ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/form-phrase",title:"Form Phrase (for a Term): a word or phrase that occurs in oral or written texts and that refers to a particular Semantic Unit, yet is not (necessarily) the  Term that is used in the Definition of that Semantic Unit. Form phrases can be, e.g., plural forms, possessive extensions, verb-conjugation forms, abbreviations, and other variations."},"form phrase"),". ",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Add an ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," part to the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"term ref"),", i.e., add ",(0,i.kt)("inlineCode",{parentName:"li"},"<id>")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"[my showtext](<id>@)"),", where ",(0,i.kt)("inlineCode",{parentName:"li"},"<id>")," needs to be the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent (Identify) a specific Semantic Unit (in some Scope)."},"term")," or a properly specified ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/form-phrase",title:"Form Phrase (for a Term): a word or phrase that occurs in oral or written texts and that refers to a particular Semantic Unit, yet is not (necessarily) the  Term that is used in the Definition of that Semantic Unit. Form phrases can be, e.g., plural forms, possessive extensions, verb-conjugation forms, abbreviations, and other variations."},"form phrase"),"."),(0,i.kt)("li",{parentName:"ol"},"Specify a ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/form-phrase",title:"Form Phrase (for a Term): a word or phrase that occurs in oral or written texts and that refers to a particular Semantic Unit, yet is not (necessarily) the  Term that is used in the Definition of that Semantic Unit. Form phrases can be, e.g., plural forms, possessive extensions, verb-conjugation forms, abbreviations, and other variations."},"form phrase")," in the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",title:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated text")," of the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",title:"a basic building block of meaning or representation that exists within the 'mind' of a party, e.g., a concept, relation, or property. Parties use terms (words/phrases) to refer to these intangible building blocks."},"semantic unit")," that you want ",(0,i.kt)("inlineCode",{parentName:"li"},"showtext")," to link to."))),(0,i.kt)("li",{parentName:"ol"},"There is no ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",title:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated text")," for the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",title:"a basic building block of meaning or representation that exists within the 'mind' of a party, e.g., a concept, relation, or property. Parties use terms (words/phrases) to refer to these intangible building blocks."},"semantic unit")," that you want ",(0,i.kt)("inlineCode",{parentName:"li"},"showtext")," to reference.",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Add a ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",title:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated text")," for that ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",title:"a basic building block of meaning or representation that exists within the 'mind' of a party, e.g., a concept, relation, or property. Parties use terms (words/phrases) to refer to these intangible building blocks."},"semantic unit"),", ensuring its ",(0,i.kt)("a",{href:"/tev2-specifications/docs/specs/files/curated-text-file",title:"Header (of a Curated Text): the part of a Curated Text, which is at the beginning of that text, that starts with a line that (only) contains three subsequent '-'characters, and that ends with a second occurrence of such a line. Headers live in Curated Text Files."},"header")," contains appropriate ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/form-phrase",title:"Form Phrase (for a Term): a word or phrase that occurs in oral or written texts and that refers to a particular Semantic Unit, yet is not (necessarily) the  Term that is used in the Definition of that Semantic Unit. Form phrases can be, e.g., plural forms, possessive extensions, verb-conjugation forms, abbreviations, and other variations."},"form phrases")))),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("a",{href:"/tev2-specifications/docs/specs/files/mrg",title:"Machine Readable Glossary: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the TEv2 MRG Specifications, to enable automated processing and integration with software systems."},"(machine readable) glossary")," that the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"term ref")," uses (either implied, or explicitly specified), does not (yet) contain an ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",title:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entry")," for the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",title:"a basic building block of meaning or representation that exists within the 'mind' of a party, e.g., a concept, relation, or property. Parties use terms (words/phrases) to refer to these intangible building blocks."},"semantic unit")," that the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"term ref")," is expected to refer to.",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Make sure the implied, or explicitly specified ",(0,i.kt)("a",{href:"/tev2-specifications/docs/specs/files/mrg",title:"Machine Readable Glossary: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the TEv2 MRG Specifications, to enable automated processing and integration with software systems."},"mrg")," exists in the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/glossarydir",title:"Glossarydir: a directory within a Scopedir within which the different versions of its (Machine Readable and Human Readable) Glossaries are created and maintained."},"glossarydir"),", and that it is up-to-date. For an ",(0,i.kt)("a",{href:"/tev2-specifications/docs/specs/files/mrg",title:"Machine Readable Glossary: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the TEv2 MRG Specifications, to enable automated processing and integration with software systems."},"mrg")," that is curated outside of the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/current-scope",title:"Current Scope: the Scope that is the context within which a Curator is acting, or a tool is being called."},"current scope"),", you should ",(0,i.kt)("a",{href:"/tev2-specifications/docs/specs/tools/mrg-import",title:"MRG Import (Tool): is a tool in the TEv2 toolbox that is run within a particular Scope for the purpose of obtaining MRGs from other Scopes, as specified in the Scope's SAF, and putting them in the Scope's Glossarydir."},"import")," it (again). For an ",(0,i.kt)("a",{href:"/tev2-specifications/docs/specs/files/mrg",title:"Machine Readable Glossary: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the TEv2 MRG Specifications, to enable automated processing and integration with software systems."},"mrg")," that is curated within the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/current-scope",title:"Current Scope: the Scope that is the context within which a Curator is acting, or a tool is being called."},"current scope"),", you should ",(0,i.kt)("a",{href:"/tev2-specifications/docs/specs/tools/mrgt",title:"Machine Readable Glossary Tool: a software tool designed to create, manage, and process Machine Readable Glossaries (MRGs), as Specified By TEv2. MRGTs offer features for selecting Terms that are Curated within the Scope it is run in, or from other Scopes."},"generate")," it (again)."))))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"Term Refs")," are not resolved to their ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",title:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated text")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"You forgot to include the ",(0,i.kt)("inlineCode",{parentName:"li"},"@")," character int the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"term ref"),". "),(0,i.kt)("li",{parentName:"ol"},"The URLs and/or paths in the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/specs/files/saf",title:"SAF: a YAML file that contains essential data about a particular scope, such as the locations of the scope's curated texts, glossaries, and the specifications of the curated terminologies. The SAF is located in the so-called scopedir."},"SAF")," are incorrect.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Check the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/specs/files/saf",title:"SAF: a YAML file that contains essential data about a particular scope, such as the locations of the scope's curated texts, glossaries, and the specifications of the curated terminologies. The SAF is located in the so-called scopedir."},"SAF"),", and ensure all URLs and paths that need to be configured have their correct values."))),(0,i.kt)("li",{parentName:"ol"},"The static website generator that you use meddles with ",(0,i.kt)("inlineCode",{parentName:"li"},"id"),"s, or filenames.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Docusaurus, for example, uses markdown files (with extensions ",(0,i.kt)("inlineCode",{parentName:"li"},".md"),", or ",(0,i.kt)("inlineCode",{parentName:"li"},".mdx"),"), and allows them to contain front matter in which an ",(0,i.kt)("inlineCode",{parentName:"li"},"id"),"-field can be specified that it uses for routing. In order for Docusaurus to route the links that the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/specs/tools/trrt",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT")," produces, the ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," field of ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",title:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated texts")," MUST be identitical to the filename without its extension. You should make sure this is the case."))))))}f.isMDXComponent=!0}}]);