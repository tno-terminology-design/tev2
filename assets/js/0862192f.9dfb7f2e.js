"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[8668],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(a),f=r,u=m["".concat(s,".").concat(f)]||m[f]||c[f]||i;return a?n.createElement(u,o(o({ref:t},d),{},{components:a})):n.createElement(u,o({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(3117),r=a(7294),i=a(6010),o=a(2466),l=a(6775),s=a(1980),p=a(7392),d=a(12);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function f(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function u(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=m(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[s,p]=u({queryString:a,groupId:n}),[c,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,d.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),g=(()=>{const e=s??c;return f({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),h(e)}),[p,h,i]),tabValues:i}}var g=a(2389);const k="tabList__CuJ",b="tabItem_LNqP";function N(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:p}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),m=e=>{const t=e.currentTarget,a=d.indexOf(t),n=p[a].value;n!==l&&(c(t),s(n))},f=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>d.push(e),onKeyDown:f,onClick:m},o,{className:(0,i.Z)("tabs__item",b,o?.className,{"tabs__item--active":l===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=h(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",k)},r.createElement(N,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},7095:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=a(3117),r=(a(7294),a(3905)),i=(a(4996),a(4866)),o=a(5162);const l={id:"configuration-file",sidebar_label:"TEv2 Config Files",date:20231129},s="Configuration Files for TEv2 tools",p={unversionedId:"spec-files/configuration-file",id:"spec-files/configuration-file",title:"Configuration Files for TEv2 tools",description:"Every TEv2 tool can be called using a (YAML) configuration file that specifies the parameters (arguments) that otherwise would need to be supplied on the commandline. This is done by using the command line parameter -c  or --config  (where `` is the path (including the filename) of the configuration file that is to be used.",source:"@site/docs/spec-files/90-configuration-file.md",sourceDirName:"spec-files",slug:"/spec-files/configuration-file",permalink:"/tev2-specifications/docs/spec-files/configuration-file",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/spec-files/90-configuration-file.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1701161631,formattedLastUpdatedAt:"Nov 28, 2023",sidebarPosition:90,frontMatter:{id:"configuration-file",sidebar_label:"TEv2 Config Files",date:20231129},sidebar:"tev2SideBar",previous:{title:"HRD (Human Readable Dictionary)",permalink:"/tev2-specifications/docs/spec-files/hrd"},next:{title:"Overview",permalink:"/tev2-specifications/docs/spec-syntax/overview-spec-syntax"}},d={},c=[],m={toc:c};function f(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuration-files-for-tev2-tools"},"Configuration Files for TEv2 tools"),(0,r.kt)("p",null,"Every ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-tool",hovertext:"TEv2 Tool: any software application or utility designed to support and streamline various tasks related to terminology management following the TEv2 specifications."},"TEv2 tool")," can be called using a (YAML) configuration file that specifies the parameters (arguments) that otherwise would need to be supplied on the commandline. This is done by using the command line parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"-c <path>")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"--config <path>")," (where ",(0,r.kt)("inlineCode",{parentName:"p"},"<path>")," is the path (including the filename) of the configuration file that is to be used."),(0,r.kt)("p",null,"The configuration file is in a ",(0,r.kt)("a",{parentName:"p",href:"https://yaml.org/spec/"},"YAML format"),". When the ",(0,r.kt)("inlineCode",{parentName:"p"},"-c")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"--config")," option is specified when calling a ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/tev2-tool",hovertext:"TEv2 Tool: any software application or utility designed to support and streamline various tasks related to terminology management following the TEv2 specifications."},"TEv2 tool"),", reads the specified file and evaluates all fields that are not in a specific section, as well as all fields that are in a tool-specific section. A field whose name is defined in the specifications for that tool will be interpreted as specified there. All other fields are ignored."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example configuration file"),"The following file has been used in the context of developing this documentation, and put in the root directory of the Github repository. In that root, there is a `docs` directory that contains the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/curated-text",hovertext:"Curated Text: a text that documents a Concept or other Semantic Unit of a particular Party, and specifies, e.g., the Term(s) by which the Party refers thereto, its Definition, and any other relevant information."},"curated texts"),".",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# TNO Terminology Design tools configuration file (yaml)\n\n## General\nscopedir: docs      # path of the scope directory where the SAF is located\nonNotExist: warn    # the action in case something that is necessary for further processing didn\'t exist\n\n## Machine Readable Glossary Tool\nmrgt\n  vsntag:             # versiontag for which the MRG needs to be (re)generated. Leave empty to process all versions\n\n## Human Readable Glossary Tool\nhrgt\n  output: .           # (root) directory for output files to be written\n  interpreter: basic  # type of interpreter (predefined, or PCRE regex)\n  converter: essiflab # type of converter (predefined, or a handlebars expression)\n  force: true         # toggle overwriting of existing files\n  input:              # glob pattern strings for files to be processed by the HRGT\n    - "**/*.md"\n\n## Term Reference Resolution Tool\ntrrt\n  output: .           # (root) directory for output files to be written\n  interpreter: basic  # type of interpreter (predefined, or PCRE regex)\n  converter: >-       # type of converter (predefined, or a handlebars expression)\n    <a\n    href="{{localize navurl}}{{#if trait}}#{{trait}}{{/if}}"\n    hovertext="{{#if hoverText}}{{hoverText}}{{else}}{{#if glossaryTerm}}{{glossaryTerm}}{{else}}{{capFirst term}}{{/if}}: {{noRefs glossaryText type="markdown"}}{{/if}}"\n    >{{showtext}}</a>\n  force: true         # toggle overwriting of existing files\n  input:              # glob pattern strings for files to be processed by the TRRT\n    - "**/*.md"\n'))),(0,r.kt)("p",null,"Here below, you can find the items you can specify in the various configuration sections."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Legend"),(0,r.kt)("p",null,"The columns in the following table are defined as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Parameter"))," specifies the parameter and further specifications."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Req'd"))," specifies whether (",(0,r.kt)("inlineCode",{parentName:"li"},"Y"),") or not (",(0,r.kt)("inlineCode",{parentName:"li"},"n"),") the parameter is required to be present when the tool is being called for actual processing (so not in case a ",(0,r.kt)("inlineCode",{parentName:"li"},"help")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"version")," parameter is specified). If ",(0,r.kt)("inlineCode",{parentName:"li"},"Y"),", the parameter MUST either be present in the configuration file, or as a command-line parameter."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Description"))," specifies the meaning of the ",(0,r.kt)("inlineCode",{parentName:"li"},"Value")," field, and other things you may need to know, e.g. why it is needed, a required syntax, etc.")),(0,r.kt)("p",null,"If a parameter is specified on the command line, it must be preceeded by the ",(0,r.kt)("inlineCode",{parentName:"p"},"--")," (e.g., as in ",(0,r.kt)("inlineCode",{parentName:"p"},"--scopedir"),"), or the alternative short form can be used as described in the specifications of the individual tools.")),(0,r.kt)(i.Z,{defaultValue:"mrg-import",values:[{label:"Generic",value:"generic"},{label:"MRG Import",value:"mrg-import"},{label:"TRRT",value:"trrt"},{label:"MRGT",value:"mrgt"},{label:"HRGT",value:"hrgt"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"generic",mdxType:"TabItem"},(0,r.kt)("p",null,"Parameters that can be used by most, if not all tools can be put both in tool-specific sections, or in the 'root' of the YAML file:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Generic Parameters"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Req'd"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"scopedir: <path>")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Path of the scope directory where the SAF is located.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"version: <bool>")),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specify whether or not the version number of the tool must be output.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"onNotExist: <action>")),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:"left"},"the action in case something that is necessary for further processing didn't exist")))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<action>")," parameter can take the following values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"th"},"<action>")),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"'throw'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"an error is thrown (an exception is raised), and processing will stop.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"'warn'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"a message is displayed (and logged) and processing continues.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"'log'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"a message is written to a log(file) and processing continues.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"'ignore'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"processing continues as if nothing happened."))))),(0,r.kt)(o.Z,{value:"mrg-import",mdxType:"TabItem"},(0,r.kt)("p",null,"Parameters that are specific to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/spec-tools/mrg-import"},"MRG Import")," tool can be put in the YAML section ",(0,r.kt)("inlineCode",{parentName:"p"},"mrg-import"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"MRG Import Parameters"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Req'd"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"onNotExist: <action>")),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The action in case an MRG file unexpectedly does not exist.")))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<action>")," parameter can take the following values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"th"},"<action>")),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"'throw'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"an error is thrown (an exception is raised), and processing will stop.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"'warn'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"a message is displayed (and logged) and processing continues.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"'log'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"a message is written to a log(file) and processing continues.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"'ignore'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"processing continues as if nothing happened."))))),(0,r.kt)(o.Z,{value:"trrt",mdxType:"TabItem"},(0,r.kt)("p",null,"Parameters that are specific to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/spec-tools/trrt"},"TRRT")," can be put in the YAML section ",(0,r.kt)("inlineCode",{parentName:"p"},"trrt"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"TRRT Parameters"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Req'd"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"output: <dir>")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(Root) directory for output files to be written.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"interpreter: <type> or <regex>")),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specifies the interpreter to be used to detect ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",hovertext:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRefs"),". This can either be a predefined interpreter, or a ",(0,r.kt)("a",{parentName:"td",href:"https://www.debuggex.com/cheatsheet/regex/pcre"},"(PCRE) regex"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"converter: <type> or <hexpr>")),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specifies the converter to be used to produce the converted ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",hovertext:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"TermRef"),". This can either be a predefined converter, or a ",(0,r.kt)("a",{parentName:"td",href:"https://handlebarsjs.com/guide/#what-is-handlebars"},"handlebars expression"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"force: <bool>")),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:"left"},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"<bool>")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", allow files in the output directory to be overwritten. If ",(0,r.kt)("inlineCode",{parentName:"td"},"<bool>")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"false")," or unspecified, output files will not overwrite existing files."))))),(0,r.kt)(o.Z,{value:"mrgt",mdxType:"TabItem"},(0,r.kt)("p",null,"Parameters that are specific to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/spec-tools/mrgt"},"mrgt")," can be put in the YAML section ",(0,r.kt)("inlineCode",{parentName:"p"},"mrgt"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Key"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Req'd"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"onNotExist: <action>")),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The action in case a ",(0,r.kt)("inlineCode",{parentName:"td"},"vsntag")," was specified, but wasn't found in the SAF.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"vsntag: <vsntag>")),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Versiontag for which the MRG needs to be (re)generated.")))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<action>")," parameter can take the following values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"th"},"<action>")),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"'throw'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"an error is thrown (an exception is raised), and processing will stop.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"'warn'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"a message is displayed (and logged) and processing continues.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"'log'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"a message is written to a log(file) and processing continues.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"'ignore'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"processing continues as if nothing happened."))))),(0,r.kt)(o.Z,{value:"hrgt",mdxType:"TabItem"},(0,r.kt)("p",null,"Parameters that are specific to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/spec-tools/hrgt"},"hrgt")," can be put in the YAML section ",(0,r.kt)("inlineCode",{parentName:"p"},"hrgt")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Req'd"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"output: <dir>")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(Root) directory for output files to be written.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"interpreter: <type> or <regex>")),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specifies the interpreter to be used to detect ",(0,r.kt)("a",{href:"/tev2-specifications/docs/spec-syntax/mrg-ref-syntax",hovertext:"MRGRef: a text that is Marked Up (in A Specific Way) so that it refers to a particular Terminology, as well as to a specific way for creating an associated HRG."},"MRGRefs"),". This can either be a predefined interpreter, or a ",(0,r.kt)("a",{parentName:"td",href:"https://www.debuggex.com/cheatsheet/regex/pcre"},"(PCRE) regex"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"converter: <type> or <hexpr>")),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specifies the converter to be used to produce ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/hrg-list",hovertext:"HRG List: a list of alphabetically sorted HRG Entries that can be further processed by tools such as the TRRT, as well as rendering tools such as GitHub pages, Docusaurus, etc."},"HRG lists"),". This can either be a predefined converter, or a ",(0,r.kt)("a",{parentName:"td",href:"https://handlebarsjs.com/guide/#what-is-handlebars"},"handlebars expression"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"force: <bool>")),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:"left"},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"<bool>")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", allow files in the output directory to be overwritten. If ",(0,r.kt)("inlineCode",{parentName:"td"},"<bool>")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"false")," or unspecified, output files will not overwrite existing files.")))))),(0,r.kt)("hr",null))}f.isMDXComponent=!0}}]);