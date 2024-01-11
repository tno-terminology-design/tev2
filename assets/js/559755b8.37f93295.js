"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[2277],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),h=i,f=d["".concat(l,".").concat(h)]||d[h]||m[h]||o;return a?n.createElement(f,r(r({ref:t},c),{},{components:a})):n.createElement(f,r({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294),i=a(6010);const o="tabItem_Ymn6";function r(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(o,r),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(3117),i=a(7294),o=a(6010),r=a(2466),s=a(6775),l=a(1980),p=a(7392),c=a(12);function m(e){return function(e){return i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:i}}=e;return{value:t,label:a,attributes:n,default:i}}))}function d(e){const{values:t,children:a}=e;return(0,i.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(o),(0,i.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function u(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[r,s]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[l,p]=f({queryString:a,groupId:n}),[m,u]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(a);return[n,(0,i.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),k=(()=>{const e=l??m;return h({value:e,tabValues:o})?e:null})();(0,i.useLayoutEffect)((()=>{k&&s(k)}),[k]);return{selectedValue:r,selectValue:(0,i.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),p(e),u(e)}),[p,u,o]),tabValues:o}}var k=a(2389);const g="tabList__CuJ",N="tabItem_LNqP";function y(e){let{className:t,block:a,selectedValue:s,selectValue:l,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,r.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=p[a].value;n!==s&&(m(t),l(n))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:r}=e;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:h,onClick:d},r,{className:(0,o.Z)("tabs__item",N,r?.className,{"tabs__item--active":s===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function b(e){const t=u(e);return i.createElement("div",{className:(0,o.Z)("tabs-container",g)},i.createElement(y,(0,n.Z)({},e,t)),i.createElement(v,(0,n.Z)({},e,t)))}function w(e){const t=(0,k.Z)();return i.createElement(b,(0,n.Z)({key:String(t)},e))}},3127:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,mark:()=>d,metadata:()=>p,toc:()=>m});var n=a(3117),i=(a(7294),a(3905)),o=(a(4996),a(4866)),r=a(5162);const s={id:"mrg-import",sidebar_label:"MRG Import",date:20230731},l="MRG Import Tool",p={unversionedId:"specs/tools/mrg-import",id:"specs/tools/mrg-import",title:"MRG Import Tool",description:"text to mark",source:"@site/docs/40-specs/tools/13-mrg-import.md",sourceDirName:"40-specs/tools",slug:"/specs/tools/mrg-import",permalink:"/tev2-specifications/docs/specs/tools/mrg-import",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/40-specs/tools/13-mrg-import.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1704966130,formattedLastUpdatedAt:"Jan 11, 2024",sidebarPosition:13,frontMatter:{id:"mrg-import",sidebar_label:"MRG Import",date:20230731},sidebar:"tev2SideBar",previous:{title:"TRRT - Term Ref Resolution",permalink:"/tev2-specifications/docs/specs/tools/trrt"},next:{title:"MRG Terminology Construction",permalink:"/tev2-specifications/docs/specs/tools/terminology-construction"}},c={},m=[{value:"MRG files",id:"mrg-files",level:2},{value:"Installing the Tool",id:"installing-the-tool",level:2},{value:"Calling the Tool",id:"calling-the-tool",level:2},{value:"Processing, Errors and Warnings",id:"processing-errors-and-warnings",level:2},{value:"Deploying the Tool",id:"deploying-the-tool",level:2}],d=e=>{let{children:t}=e;return(0,i.kt)("span",{style:{color:"black",backgroundColor:"yellow",padding:"0.2rem",borderRadius:"2px"}},t)},h={toc:m,mark:d};function f(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"mrg-import-tool"},"MRG Import Tool"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"@"},"MRG")," Import Tool (",(0,i.kt)("a",{parentName:"strong",href:"@"},"MRG importer"),")")," ensures that the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," within which it is run, obtains a local copy of all ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRGs")," that are available in the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scopes")," that are mentioned in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/40-specs/files/saf#scopes"},(0,i.kt)("inlineCode",{parentName:"a"},"scopes")," section")," of its ",(0,i.kt)("a",{parentName:"p",href:"@"},"SAF"),". This makes life easy for various tools, e.g., the ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRGT")," and the ",(0,i.kt)("a",{parentName:"p",href:"@"},"TRRT"),", that can now assume that all ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRGs")," that they may need to consult in order to do their job, are readily available."),(0,i.kt)("h2",{id:"mrg-files"},"MRG files"),(0,i.kt)("p",null,"This means concretely that within the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/glossarydir",title:"Glossarydir: a directory within a Scopedir within which the different versions of its (Machine Readable and Human Readable) Glossaries are created and maintained."},"glossarydir")," of a ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," that has run the ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG importer"),", the following files are available for every ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/scopetag",title:"Scopetag: a Tag that is used to Identify Scopes from within a specific Scope"},"scopetag")," ",(0,i.kt)("inlineCode",{parentName:"p"},"st")," that exists in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/40-specs/files/saf#scopes"},(0,i.kt)("inlineCode",{parentName:"a"},"scopes")," section")," of its ",(0,i.kt)("a",{parentName:"p",href:"@"},"SAF"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mrg.st.<vsntag>.yaml")," contains the actual ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/mrg-entry",title:"MRG Entry: A machine-readable (and interpretable) artifact that contains (pointers to) data and meta-data about a particular  Semantic Unit, such as the associated Term(s), its Definition, etc., to make it easy for IT-tools to create, e.g. documentation, Glossaries, Dictionaries, whitepapers, etc. that uses such Terms (Definitions, etc.)."},"MRG entries")," for the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",title:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology")," specified in the ",(0,i.kt)("a",{parentName:"li",href:"/docs/40-specs/files/saf#versions"},(0,i.kt)("inlineCode",{parentName:"a"},"versions"),"-section")," whose ",(0,i.kt)("inlineCode",{parentName:"li"},"vsntag")," field contains ",(0,i.kt)("inlineCode",{parentName:"li"},"<vsntag>"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mrg.st.<altvsntag>.yaml")," is a copy of the ",(0,i.kt)("inlineCode",{parentName:"li"},"mrg.st.<vsntag>.yaml")," file  where ",(0,i.kt)("inlineCode",{parentName:"li"},"<altvsntag>")," is one of the alternative ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/versiontag",title:"Versiontag: a Tag that is used to Identify a specific version of a Terminology from within a specific Scope."},"versiontags")," by which the ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG")," can be referenced.",(0,i.kt)("sup",{parentName:"li",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mrg.st.yaml")," is a copy of the ",(0,i.kt)("inlineCode",{parentName:"li"},"mrg.st.<vsntag>.yaml")," file  where ",(0,i.kt)("inlineCode",{parentName:"li"},"<vsntag>")," is the value of the ",(0,i.kt)("inlineCode",{parentName:"li"},"defaultvsn"),"-field in the ",(0,i.kt)("a",{parentName:"li",href:"/docs/40-specs/files/saf#scope-section"},(0,i.kt)("inlineCode",{parentName:"a"},"scope"),"-section")," of the ",(0,i.kt)("a",{parentName:"li",href:"@"},"SAF")," of ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," ",(0,i.kt)("inlineCode",{parentName:"li"},"st"),".")),(0,i.kt)("h2",{id:"installing-the-tool"},"Installing the Tool"),(0,i.kt)("p",null,"The tool can be installed from the command line and made globally available by executing"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm install -g @tno-terminology-design/mrg-import\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Before running the tool from the command line, make sure you have met the necessary prerequisites depending on your operating environment."),(0,i.kt)(o.Z,{defaultValue:"cmd.exe",values:[{label:"CMD.exe (Windows)",value:"cmd.exe"},{label:"PowerShell(Windows)",value:"powershell"},{label:"Bash (Linux/Mac)",value:"bash"}],mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"cmd.exe",mdxType:"TabItem"},(0,i.kt)("br",null),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Node.js and NPM"),": Ensure Node.js and NPM are installed."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Global Installation"),": If you have installed the package globally, confirm the global NPM modules path by running ",(0,i.kt)("inlineCode",{parentName:"li"},"npm config get prefix"),". The global modules are usually stored under ",(0,i.kt)("inlineCode",{parentName:"li"},"<prefix>/node_modules"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Environment Variables"),": Add the path to global NPM binaries to your system's PATH environment variable. This should be ",(0,i.kt)("inlineCode",{parentName:"li"},"<prefix>")," on Windows. To add to PATH, you can edit your environment variables or run ",(0,i.kt)("inlineCode",{parentName:"li"},"set PATH=%PATH%;<prefix>")," in the CMD."))),(0,i.kt)(r.Z,{value:"powershell",mdxType:"TabItem"},(0,i.kt)("br",null),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Node.js and NPM"),": Ensure Node.js and NPM are installed."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Global Installation"),": Check the global NPM modules path as in CMD."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Environment Variables"),": Update the PATH environment variable as in CMD. You can also use ",(0,i.kt)("inlineCode",{parentName:"li"},'$env:Path += ";<prefix>"')," to update the PATH temporarily in the current PowerShell session."))),(0,i.kt)(r.Z,{value:"bash",mdxType:"TabItem"},(0,i.kt)("br",null),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Node.js and NPM"),": Ensure Node.js and NPM are installed."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Global Installation"),": If globally installed, run ",(0,i.kt)("inlineCode",{parentName:"li"},"npm config get prefix")," to get the global modules path, usually ",(0,i.kt)("inlineCode",{parentName:"li"},"<prefix>/lib/node_modules"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Environment Variables"),": Add the ",(0,i.kt)("inlineCode",{parentName:"li"},"<prefix>/bin")," directory to your ",(0,i.kt)("inlineCode",{parentName:"li"},"PATH")," if it's not already. You can do this by adding ",(0,i.kt)("inlineCode",{parentName:"li"},"export PATH=$PATH:<prefix>/bin")," to your ",(0,i.kt)("inlineCode",{parentName:"li"},"~/.bashrc")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"~/.zshrc")," file."))))),(0,i.kt)("h2",{id:"calling-the-tool"},"Calling the Tool"),(0,i.kt)("p",null,"The behavior of the ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG importer")," can be configured per call e.g. by a configuration file and/or command-line parameters. The command-line syntax is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mrg-import [ <paramlist> ]\n")),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},"<paramlist>")," is an (optional) list of parameters."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Legend"),(0,i.kt)("p",null,"The columns in the following table are defined as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Parameter"))," specifies the parameter and further specifications"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Req'd"))," specifies whether (",(0,i.kt)("inlineCode",{parentName:"li"},"Y"),") or not (",(0,i.kt)("inlineCode",{parentName:"li"},"n"),") the field is required to be present when the tool is being called. If required, it MUST either be present in the configuration file, or as a command-line parameter."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Description"))," specifies the meaning of the ",(0,i.kt)("inlineCode",{parentName:"li"},"Value")," field, and other things you may need to know, e.g. why it is needed, a required syntax, etc.")),(0,i.kt)("p",null,"If a configuration file used, the long version of the parameter must be used (without the preceding ",(0,i.kt)("inlineCode",{parentName:"p"},"--"),").")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Key"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Req'd"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"-c"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"--config <path>")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Path (including the filename) of the tool's (YAML) configuration file.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"-s"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"--scopedir <path>")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Path of the scope directory from which the tool is called.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"-o"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"--onNotExist <action>")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The action in case an MRG file unexpectedly does not exist.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"-V"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"--version")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:"left"},"output the version number of the tool.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"-h"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"--help")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:"left"},"display help for command.")))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"<action>")," parameter can take the following values:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"th"},"<action>")),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"'throw'")),(0,i.kt)("td",{parentName:"tr",align:"left"},"an error is thrown (an exception is raised), and processing will stop.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"'warn'")),(0,i.kt)("td",{parentName:"tr",align:"left"},"a message is displayed (and logged) and processing continues.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"'log'")),(0,i.kt)("td",{parentName:"tr",align:"left"},"a message is written to a log(file) and processing continues.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"'ignore'")),(0,i.kt)("td",{parentName:"tr",align:"left"},"processing continues as if nothing happened.")))),(0,i.kt)("h2",{id:"processing-errors-and-warnings"},"Processing, Errors and Warnings"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG importer")," starts by reading its command-line and configuration file. If the command-line has a key that is also found in the configuration file, the command-line key-value pair takes precedence. The resulting set of key-value pairs is tested for proper syntax and validity. Every improper syntax and every invalidity found will be logged. Improper syntax may be e.g. an invalid ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Glob_(programming)#Syntax"},"globpattern"),". Invalid conditions include non-existing directories or files, lack of write-permissions where needed, etc."),(0,i.kt)("p",null,"Then, the ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG importer")," reads the ",(0,i.kt)("a",{parentName:"p",href:"@"},"SAF")," of the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," from which the ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG importer")," is called. We will use the following names for values that are in the ",(0,i.kt)("a",{parentName:"p",href:"@"},"SAF"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{my-own-scopetag}")," = ",(0,i.kt)("inlineCode",{parentName:"li"},"scopetag"),"-field from the ",(0,i.kt)("inlineCode",{parentName:"li"},"scope"),"-section"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{my-own-scopedir}")," = ",(0,i.kt)("inlineCode",{parentName:"li"},"scopedir"),"-field from the ",(0,i.kt)("inlineCode",{parentName:"li"},"scope"),"-section"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{my-own-glossarydir}")," = ",(0,i.kt)("inlineCode",{parentName:"li"},"glossarydir"),"-field from the ",(0,i.kt)("inlineCode",{parentName:"li"},"scope"),"-section")),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG importer")," also reads the ",(0,i.kt)("a",{parentName:"p",href:"/docs/40-specs/files/saf#scopes"},(0,i.kt)("inlineCode",{parentName:"a"},"scopes")," section")," of the ",(0,i.kt)("a",{parentName:"p",href:"@"},"SAF"),", which specifies the 'other' ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scopes")," from which the actively maintained ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRGs")," have to be imported. This ",(0,i.kt)("a",{parentName:"p",href:"/docs/40-specs/files/saf#scopes"},(0,i.kt)("inlineCode",{parentName:"a"},"scopes")," section")," contains elements that consist of two parts, whose values we will refer to by the following names:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{import-scopetag}")," = ",(0,i.kt)("inlineCode",{parentName:"li"},"scopetag"),"-field from the ",(0,i.kt)("inlineCode",{parentName:"li"},"scopes"),"-section of the ",(0,i.kt)("a",{parentName:"li",href:"@"},"SAF")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{import-scopedir}")," = ",(0,i.kt)("inlineCode",{parentName:"li"},"scopedir"),"-field from the ",(0,i.kt)("inlineCode",{parentName:"li"},"scopes"),"-section of the ",(0,i.kt)("a",{parentName:"li",href:"@"},"SAF"))),(0,i.kt)("p",null,"For every ",(0,i.kt)("inlineCode",{parentName:"p"},"{import-scopedir}"),", the ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG importer")," will read its ",(0,i.kt)("a",{parentName:"p",href:"@"},"SAF")," to find out which ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",title:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminologies")," are being actively maintained (we will use ",(0,i.kt)("inlineCode",{parentName:"p"},"{import-saf}")," to refer to the contents of this ",(0,i.kt)("a",{parentName:"p",href:"@"},"SAF"),")."),(0,i.kt)("admonition",{title:"Editor's note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Reading a SAF may require authentication, e.g. when the scopedir of the other scope is in a private or enterprise repo. How the MRG importer will be dealing with this remains to be specified.")),(0,i.kt)("p",null,"We will use:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{other-scopetag}")," = the ",(0,i.kt)("inlineCode",{parentName:"li"},"scopetag"),"-field in the ",(0,i.kt)("inlineCode",{parentName:"li"},"scope")," section of ",(0,i.kt)("inlineCode",{parentName:"li"},"{import-saf}"),";"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{other-glossarydir}")," = the ",(0,i.kt)("inlineCode",{parentName:"li"},"glossarydir"),"-field in the ",(0,i.kt)("inlineCode",{parentName:"li"},"scope")," section of ",(0,i.kt)("inlineCode",{parentName:"li"},"{import-saf}"),";")),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/docs/40-specs/files/saf#versions"},(0,i.kt)("inlineCode",{parentName:"a"},"versions")," section")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"{import-saf}")," specifies which ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",title:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminologies")," are actively maintained within the other ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),", and hence have to be imported. Every such ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",title:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology")," is specified by an entry in this section, and must hence be processed to import the associated ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRGs"),". "),(0,i.kt)("p",null,"To specify one such process, we will use:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{other-vsntag}")," = ",(0,i.kt)("inlineCode",{parentName:"li"},"vsntag"),"-field in the element of the ",(0,i.kt)("inlineCode",{parentName:"li"},"versions")," section of ",(0,i.kt)("inlineCode",{parentName:"li"},"{import-saf}")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{other-altvsntags}")," = ",(0,i.kt)("inlineCode",{parentName:"li"},"altvsntags"),"-field in an element of the ",(0,i.kt)("inlineCode",{parentName:"li"},"versions")," section of ",(0,i.kt)("inlineCode",{parentName:"li"},"{import-saf}")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{other-defaultvsn}")," = ",(0,i.kt)("inlineCode",{parentName:"li"},"defaultvsn"),"-field in the ",(0,i.kt)("inlineCode",{parentName:"li"},"scope")," section of ",(0,i.kt)("inlineCode",{parentName:"li"},"{import-saf}"))),(0,i.kt)("p",null,"To import the associated ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRGs"),", here is what we do:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"read the file ",(0,i.kt)("inlineCode",{parentName:"p"},"{import-scopedir}/{import-glossarydir}/mrg.{other-scopetag}.{other-vsntag}.yaml"),", which is the file that contains the ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG")," that needs to be imported. If that file doesn't exist, this results in the behavior as specified by the ",(0,i.kt)("inlineCode",{parentName:"p"},"<action>")," value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"onNotExist")," parameter. Default is ",(0,i.kt)("inlineCode",{parentName:"p"},"throw"),"."),(0,i.kt)("admonition",{parentName:"li",title:"Editor's note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"It may well be possible that contents of the mrg may need to be processed.\nThis is due to the fact that ",(0,i.kt)("inlineCode",{parentName:"p"},"scopetag"),"s are 'local' names for referring to scopes and every scope gets to decide on its own scopetag names. So the meaning of 'scopetags' cannot be transferred across scopes. We have to use universal/fixed identifiers, such as a ",(0,i.kt)("inlineCode",{parentName:"p"},"scopedir"),"-URL to identify scopes. Still, local names can be useful (and are necessary), so we'll have to figure out what the impact of this is."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"write the contents to ",(0,i.kt)("inlineCode",{parentName:"p"},"{my-scopedir}/{my-glossarydir}/mrg.{import-scopetag}.{other-vsntag}.yaml"),", overwriting a file that has the same name if that were to exist.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"for every ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/versiontag",title:"Versiontag: a Tag that is used to Identify a specific version of a Terminology from within a specific Scope."},"versiontag")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"{other-altvsntags}")," (which we call ",(0,i.kt)("inlineCode",{parentName:"p"},"{other-altvsntag}"),"), a symbolic link ",(0,i.kt)("inlineCode",{parentName:"p"},"mrg.{import-scopetag}.{other-altvsntag}.yaml")," is created in the ",(0,i.kt)("inlineCode",{parentName:"p"},"{my-scopedir}/{my-glossarydir}/")," directory, that links to the ",(0,i.kt)("inlineCode",{parentName:"p"},"mrg.{import-scopetag}.{other-vsntag}.yaml")," file that was just created in that same directory."))),(0,i.kt)("admonition",{title:"Editor's note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"check the paragraph below to see if it is correct, because MRG files are no longer symbolic links, but copies of the MRGs that such symbolic links used to refer to.")),(0,i.kt)("p",null,"After all ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRGs")," are imported a symbolic link ",(0,i.kt)("inlineCode",{parentName:"p"},"{my-scopedir}/{my-glossarydir}/mrg.{import-scopetag}.yaml")," is created (or overwritten if it already exists), which points to the file ",(0,i.kt)("inlineCode",{parentName:"p"},"mrg.{import-scopetag}.{other-defaultvsn}.yaml"),". "),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"NOTE the change of the ",(0,i.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"scopetag")," part in the filename!"),(0,i.kt)("p",{parentName:"admonition"},"The name of the ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG")," in the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," from which it is imported may differ from the name of the ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG")," that is imported. The reason for this is that the names (",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/scopetag",title:"Scopetag: a Tag that is used to Identify Scopes from within a specific Scope"},"scopetags")," that are used in these ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scopes")," to refer to the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope")," from where ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRGs")," are imported, may differ.")),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG importer")," logs every error- and/or warning condition that it comes across while processing its configuration file, command-line parameters, and input files, in a way that helps tool-operators and document ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/author",title:"Author: a person that creates a text that is meant to be read and understood by others - usually, a particular audience."},"authors")," to identify and fix such conditions."),(0,i.kt)("h2",{id:"deploying-the-tool"},"Deploying the Tool"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG importer")," comes with documentation that enables developers to ascertain its correct functioning (e.g. by using a test set of files, test scripts that exercise its parameters, etc.), and also enables them to deploy the tool in a git repo and author/modify CI-pipes to use that deployment."),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Previous versions of the specifications said this would be a symbolic link to the ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG")," rather than a copy thereof. However, symbolic links created for the purpose of functioning in a (Git) repo would not work in a local development context (e.g. on a Windows machine), and vice versa. To remedy this, and taking into consideration that ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRGs")," are relatively small in size, made us decide to use actual copies. Note that you can still see which files are copies by inspecting the first section of the ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRGs"),", which lists the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/versiontag",title:"Versiontag: a Tag that is used to Identify a specific version of a Terminology from within a specific Scope."},"versiontag")," and the ",(0,i.kt)("inlineCode",{parentName:"li"},"altvsntags")," (alternative ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/versiontag",title:"Versiontag: a Tag that is used to Identify a specific version of a Terminology from within a specific Scope."},"versiontags")," that can be used) of the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/terms/terminology",title:"Terminology: a set of Terms that are used within a single Scope to refer to Concepts and other Semantic Units of a single Party (e.g. a Community), enabling Parties to reason and communicate ideas they have about one or more specific topics."},"terminology")," that the ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG")," documents.",(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0}}]);