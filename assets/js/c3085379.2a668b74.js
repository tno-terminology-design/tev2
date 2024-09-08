"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[2511],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>d});var i=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=i.createContext({}),l=function(e){var t=i.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},h=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=l(a),d=r,p=u["".concat(c,".").concat(d)]||u[d]||f[d]||n;return a?i.createElement(p,o(o({ref:t},h),{},{components:a})):i.createElement(p,o({ref:t},h))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<n;l++)o[l]=a[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var i=a(7294),r=a(6010);const n="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return i.createElement("div",{role:"tabpanel",className:(0,r.Z)(n,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>S});var i=a(3117),r=a(7294),n=a(6010),o=a(2466),s=a(6775),c=a(1980),l=a(7392),h=a(12);function f(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:i,default:r}}=e;return{value:t,label:a,attributes:i,default:r}}))}function u(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??f(a);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const i=(0,s.k6)(),n=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,c._X)(n),(0,r.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(i.location.search);t.set(n,e),i.replace({...i.location,search:t.toString()})}),[n,i])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:i}=e,n=u(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=a.find((e=>e.default))??a[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:n}))),[c,l]=p({queryString:a,groupId:i}),[f,m]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,n]=(0,h.Nk)(a);return[i,(0,r.useCallback)((e=>{a&&n.set(e)}),[a,n])]}({groupId:i}),b=(()=>{const e=c??f;return d({value:e,tabValues:n})?e:null})();(0,r.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);s(e),l(e),m(e)}),[l,m,n]),tabValues:n}}var b=a(2389);const y="tabList__CuJ",g="tabItem_LNqP";function v(e){let{className:t,block:a,selectedValue:s,selectValue:c,tabValues:l}=e;const h=[],{blockElementScrollPositionUntilNextRender:f}=(0,o.o5)(),u=e=>{const t=e.currentTarget,a=h.indexOf(t),i=l[a].value;i!==s&&(f(t),c(i))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=h.indexOf(e.currentTarget)+1;t=h[a]??h[0];break}case"ArrowLeft":{const a=h.indexOf(e.currentTarget)-1;t=h[a]??h[h.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":a},t)},l.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,i.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>h.push(e),onKeyDown:d,onClick:u},o,{className:(0,n.Z)("tabs__item",g,o?.className,{"tabs__item--active":s===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:i}=e;const n=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=n.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i}))))}function w(e){const t=m(e);return r.createElement("div",{className:(0,n.Z)("tabs-container",y)},r.createElement(v,(0,i.Z)({},e,t)),r.createElement(k,(0,i.Z)({},e,t)))}function S(e){const t=(0,b.Z)();return r.createElement(w,(0,i.Z)({key:String(t)},e))}},8020:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var i=a(3117),r=(a(7294),a(3905)),n=a(4996);a(4866),a(5162);const o={id:"fixing-links",date:20240112},s="Fixing Links",c={unversionedId:"faqs/fixing-links",id:"faqs/fixing-links",title:"Fixing Links",description:"<img",source:"@site/docs/faqs/fixing-links.md",sourceDirName:"faqs",slug:"/faqs/fixing-links",permalink:"/tev2-specifications/docs/faqs/fixing-links",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/faqs/fixing-links.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1725805967,formattedLastUpdatedAt:"Sep 8, 2024",frontMatter:{id:"fixing-links",date:20240112},sidebar:"tev2SideBar",previous:{title:"Frequently Asked Questions",permalink:"/tev2-specifications/docs/categories/faqs"},next:{title:"Manuals",permalink:"/tev2-specifications/docs/categories/manuals"}},l={},h=[],f={toc:h};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"fixing-links"},"Fixing Links"),(0,r.kt)("img",{alt:"This page is under construction",src:(0,n.Z)("images/wip/wip-under-construction.png")}),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,"After (raw) texts have been authored, they will be rendered into some other form, typically a static web site. Particularly when a set of such texts have been authored, it may happen that references turn out not to be properly resolvable at runtime. Also, after some time in which such texts evolve, 'link rot' may kick in, which means that due to changes in some places, links that used to be properly resolvable no longer are."),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"Term Refs")," are not resolved - they link to `@`"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"showtext")," part of the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"term ref")," is not a specified ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/form-phrase",title:"Form Phrase (for a Semantic Unit): a word or phrase that refers to a particular Semantic Unit, yet is not (necessarily) the Term that is used in the Definition of that Semantic Unit. Form phrases can be, e.g., plural forms, possessive extensions, verb-conjugation forms, abbreviations, and other variations."},"form phrase"),". ",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Add an ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," part to the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"term ref"),", i.e., add ",(0,r.kt)("inlineCode",{parentName:"li"},"<id>")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"[my showtext](<id>@)"),", where ",(0,r.kt)("inlineCode",{parentName:"li"},"<id>")," needs to be the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/term",title:"Term: a word or phrase (i.e.: text) that is used to represent Concepts."},"term")," or a properly specified ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/form-phrase",title:"Form Phrase (for a Semantic Unit): a word or phrase that refers to a particular Semantic Unit, yet is not (necessarily) the Term that is used in the Definition of that Semantic Unit. Form phrases can be, e.g., plural forms, possessive extensions, verb-conjugation forms, abbreviations, and other variations."},"form phrase"),"."),(0,r.kt)("li",{parentName:"ol"},"Specify a ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/form-phrase",title:"Form Phrase (for a Semantic Unit): a word or phrase that refers to a particular Semantic Unit, yet is not (necessarily) the Term that is used in the Definition of that Semantic Unit. Form phrases can be, e.g., plural forms, possessive extensions, verb-conjugation forms, abbreviations, and other variations."},"form phrase")," in the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",title:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated text")," of the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",title:"Semantic Unit: a basic building block of meaning or representation that exists within the 'mind' of a Party (i.e., in its Knowledge)."},"semantic unit")," that you want ",(0,r.kt)("inlineCode",{parentName:"li"},"showtext")," to link to."))),(0,r.kt)("li",{parentName:"ol"},"There is no ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",title:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated text")," for the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",title:"Semantic Unit: a basic building block of meaning or representation that exists within the 'mind' of a Party (i.e., in its Knowledge)."},"semantic unit")," that you want ",(0,r.kt)("inlineCode",{parentName:"li"},"showtext")," to reference.",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Add a ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",title:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated text")," for that ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",title:"Semantic Unit: a basic building block of meaning or representation that exists within the 'mind' of a Party (i.e., in its Knowledge)."},"semantic unit"),", ensuring its ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/files/curated-text-file",title:"Header (of a Curated Text): the part of a Curated Text, which is at the beginning of that text, that starts with a line that (only) contains three subsequent '-'characters, and that ends with a second occurrence of such a line."},"header")," contains appropriate ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/form-phrase",title:"Form Phrase (for a Semantic Unit): a word or phrase that refers to a particular Semantic Unit, yet is not (necessarily) the Term that is used in the Definition of that Semantic Unit. Form phrases can be, e.g., plural forms, possessive extensions, verb-conjugation forms, abbreviations, and other variations."},"form phrases")))),(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/files/mrg",title:"Machine Readable Glossary: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the TEv2 MRG Specifications, to enable automated processing and integration with software systems."},"(machine readable) glossary")," that the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"term ref")," uses (either implied, or explicitly specified), does not (yet) contain an ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",title:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entry")," for the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/semantic-unit",title:"Semantic Unit: a basic building block of meaning or representation that exists within the 'mind' of a Party (i.e., in its Knowledge)."},"semantic unit")," that the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"term ref")," is expected to refer to.",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Make sure the implied, or explicitly specified ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/files/mrg",title:"Machine Readable Glossary: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the TEv2 MRG Specifications, to enable automated processing and integration with software systems."},"mrg")," exists in the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/glossarydir",title:"Glossarydir: a directory within a Scopedir within which the different versions of its (Machine Readable and Human Readable) Glossaries are created and maintained."},"glossarydir"),", and that it is up-to-date. For an ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/files/mrg",title:"Machine Readable Glossary: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the TEv2 MRG Specifications, to enable automated processing and integration with software systems."},"mrg")," that is curated outside of the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/current-scope",title:"Current Scope: the Scope that is the context within which a Curator is acting, or a tool is being called."},"current scope"),", you should ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/tools/mrg-import",title:"MRG Import (Tool): is a tool in the TEv2 toolbox that is run within a particular Scope for the purpose of obtaining MRGs from other Scopes, as specified in the Scope's SAF, and putting them in the Scope's Glossarydir."},"import")," it (again). For an ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/files/mrg",title:"Machine Readable Glossary: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the TEv2 MRG Specifications, to enable automated processing and integration with software systems."},"mrg")," that is curated within the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/current-scope",title:"Current Scope: the Scope that is the context within which a Curator is acting, or a tool is being called."},"current scope"),", you should ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/tools/mrgt",title:"Machine Readable Glossary Tool: a software tool designed to create, manage, and process Machine Readable Glossaries (MRGs), as Specified By TEv2."},"generate")," it (again)."))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"Term Refs")," are not resolved to their ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",title:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated text")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"You forgot to include the ",(0,r.kt)("inlineCode",{parentName:"li"},"@")," character int the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"term ref"),". "),(0,r.kt)("li",{parentName:"ol"},"The URLs and/or paths in the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/files/saf",title:"Scope Administration File: a YAML file that contains essential data about a particular Scope (e.g., specifying where its Curated Texts, Glossaries etc. live), the relationships this Scope has with other Scopes, and the specifications of the different Terminologies that are Curated within that Scope. The SAF of a Scope is located in its Scopedir."},"SAF")," are incorrect.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Check the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/files/saf",title:"Scope Administration File: a YAML file that contains essential data about a particular Scope (e.g., specifying where its Curated Texts, Glossaries etc. live), the relationships this Scope has with other Scopes, and the specifications of the different Terminologies that are Curated within that Scope. The SAF of a Scope is located in its Scopedir."},"SAF"),", and ensure all URLs and paths that need to be configured have their correct values."))),(0,r.kt)("li",{parentName:"ol"},"The static website generator that you use meddles with ",(0,r.kt)("inlineCode",{parentName:"li"},"id"),"s, or filenames.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Docusaurus, for example, uses markdown files (with extensions ",(0,r.kt)("inlineCode",{parentName:"li"},".md"),", or ",(0,r.kt)("inlineCode",{parentName:"li"},".mdx"),"), and allows them to contain ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/front-matter",title:"Front Matter: a section at the top of a file that contains YAML (or similarly formatted) metadata, such as title, description, tags, and more."},"front matter")," in which an ",(0,r.kt)("inlineCode",{parentName:"li"},"id"),"-field can be specified that it uses for routing. In order for Docusaurus to route the links that the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/specs/tools/trrt",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT")," produces, the ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," field of ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",title:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated texts")," MUST be identitical to the filename without its extension. You should make sure this is the case."))))))}u.isMDXComponent=!0}}]);