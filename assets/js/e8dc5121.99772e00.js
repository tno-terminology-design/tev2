"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[1571],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),f=p(a),m=r,h=f["".concat(s,".").concat(m)]||f[m]||c[m]||i;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},1838:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(3117),r=(a(7294),a(3905));const i={},o="Usage",l={unversionedId:"spec-tools/tool-docs/trrt/usage",id:"spec-tools/tool-docs/trrt/usage",title:"Usage",description:"The behavior of the TRRT can be configured per call e.g. by a configuration file and/or command-line parameters. The command-line syntax is as follows:",source:"@site/docs/spec-tools/tool-docs/trrt/2-usage.md",sourceDirName:"spec-tools/tool-docs/trrt",slug:"/spec-tools/tool-docs/trrt/usage",permalink:"/tev2-specifications/docs/spec-tools/tool-docs/trrt/usage",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/spec-tools/tool-docs/trrt/2-usage.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1702288678,formattedLastUpdatedAt:"Dec 11, 2023",sidebarPosition:2,frontMatter:{},sidebar:"tev2SideBar",previous:{title:"Installation",permalink:"/tev2-specifications/docs/spec-tools/tool-docs/trrt/installation"},next:{title:"Customization",permalink:"/tev2-specifications/docs/spec-tools/tool-docs/trrt/customization"}},s={},p=[{value:"Parameters and options",id:"parameters-and-options",level:2},{value:"Configuration File",id:"configuration-file",level:3},{value:"Master Configuration",id:"master-configuration",level:4}],d={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"usage"},"Usage"),(0,r.kt)("p",null,"The behavior of the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/spec-tools/trrt",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT")," can be configured per call e.g. by a ",(0,r.kt)("a",{parentName:"p",href:"#configuration-file"},"configuration file")," and/or command-line parameters. The command-line syntax is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"trrt [ <paramlist> ] [ <globpattern> ]\n")),(0,r.kt)("p",null,"where:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<paramlist>")," (optional) is a list of key-value pairs"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Glob_(programming)#Syntax"},(0,r.kt)("inlineCode",{parentName:"a"},"globpattern"))," (optional) specifies a set of (input) files that are to be processed. If a ",(0,r.kt)("a",{parentName:"li",href:"#configuration-file"},"configuration file")," is used, its contents may specify an additional set of input files to be processed.")),(0,r.kt)("h2",{id:"parameters-and-options"},"Parameters and options"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Legend"),(0,r.kt)("p",null,"The columns in the following table are defined as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Key"))," is the text to be used as a key."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Value"))," represents the kind of value to be used."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Req'd"))," specifies whether (",(0,r.kt)("inlineCode",{parentName:"li"},"Y"),") or not (",(0,r.kt)("inlineCode",{parentName:"li"},"n"),") the field is required to be present when the tool is being called. If required, it MUST either be present in the configuration file, or as a command-line parameter."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Description"))," specifies the meaning of the ",(0,r.kt)("inlineCode",{parentName:"li"},"Value")," field, and other things you may need to know, e.g. why it is needed, a required syntax, etc."))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Key"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Value"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Req'd"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"-c"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"--config")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"<path>")),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Path (including the filename) of the tool's (YAML) configuration file as an absolute or relative path from where the tool is called. This file contains the key-value pairs to be used. Allowed keys (and the associated values) are documented in this table. Command-line arguments override key-value pairs specified in the configuration file. This parameter MUST NOT appear in the configuration file itself.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"input")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"<globpattern>")),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Glob_(programming)#Syntax"},"Globpattern")," string that specifies the set of (input) files that are to be processed as an absolute or relative path from where the tool is called.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"-o"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"--output")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"<dir>")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Directory where output files are to be written. This directory is specified as an absolute or relative path from where the tool is called.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"-s"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"--scopedir")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"<path>")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Path of the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/scopedir",title:"Scopedir: a directory in a computer file system that contains all files that are either being Curated within a particular Scope, or generated to serve some purpose within that Scope."},"scope directory")," from which the tool is called. It MUST contain the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/spec-files/saf",title:"SAF: a YAML file that contains essential data about a particular scope, such as the locations of the scope's curated texts, glossaries, and the specifications of the curated terminologies. The SAF is located in the so-called scopedir."},"SAF")," for that ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),", which we will refer to as the 'current scope' for the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/spec-tools/trrt",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"-int"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"--interpreter")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"<type>")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"<regex>")),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Allows for the switching between existing and custom interpreter types. By default ",(0,r.kt)("inlineCode",{parentName:"td"},"alt")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"basic")," are available, but a custom regex pattern may be provided. When this parameter is omitted, the basic ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"term ref")," syntax is interpreted. See the ",(0,r.kt)("a",{parentName:"td",href:"customization#interpreter"},"interpreter")," section for more information.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"-con"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"--converter")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"<type>")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"<mustache>")),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The type of ",(0,r.kt)("a",{parentName:"td",href:"customization#converter"},"converter")," which creates the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/renderable-ref",title:"Renderable Ref: a text with which the TRRT replaces a TermRef, that can be processed by specific third party rendering tools, the result of which is a rendering of the original TermRef that has additional characteristics that help Readers to (better) understand the intention of its Author."},"renderable refs"),". Allows for the switching between existing and custom converter types. By default ",(0,r.kt)("inlineCode",{parentName:"td"},"html"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"essif")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"markdown")," are available, but a custom ",(0,r.kt)("a",{parentName:"td",href:"https://handlebarsjs.com/guide/"},"Mustache template")," may be provided. When this parameter is omitted, the Markdown converter is used. See the ",(0,r.kt)("a",{parentName:"td",href:"customization#converter"},"converter")," section for more information.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"-V"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"--version")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Output the version number of the tool.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"-f"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"--force")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Allow overwriting of existing files. Meant to prevent accidental overwriting of files that include ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"term refs"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"-h"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"--help")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"n"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Display usage and options help text.")))),(0,r.kt)("h3",{id:"configuration-file"},"Configuration File"),(0,r.kt)("p",null,"Every parameter specified in the ",(0,r.kt)("a",{parentName:"p",href:"#parameters-and-options"},"options")," table above (except for ",(0,r.kt)("inlineCode",{parentName:"p"},"config"),") can be set inside a yaml file. As an example, running the tool with the following command with the use of the ",(0,r.kt)("inlineCode",{parentName:"p"},"__tests__")," files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"trrt --config __tests__/content/config.yaml\n")),(0,r.kt)("p",null,"uses the example ",(0,r.kt)("inlineCode",{parentName:"p"},"config.yaml")," file shown below. As a general guideline, we recommend storing the config files related to all terminology tools in the root of the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/terms/scopedir",title:"Scopedir: a directory in a computer file system that contains all files that are either being Curated within a particular Scope, or generated to serve some purpose within that Scope."},"scope directory")," where the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/spec-files/saf",title:"SAF: a YAML file that contains essential data about a particular scope, such as the locations of the scope's curated texts, glossaries, and the specifications of the curated terminologies. The SAF is located in the so-called scopedir."},"SAF")," resides as well."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="__tests__/content/config.yaml"',title:'"__tests__/content/config.yaml"'},"# TRRT configuration file (yaml)\noutput: '__tests__/output'\nscopedir: '__tests__/content'\ninterpreter: '(?:(?<=[^`\\\\])|^)\\[(?=[^@\\]]+\\]\\([#a-z0-9_-]*@[:a-z0-9_-]*\\))(?<showtext>[^\\n\\]@]+)\\]\\((?:(?<id>[a-z0-9_-]*)?(?:#(?<trait>[a-z0-9_-]+))?)?@(?<scopetag>[a-z0-9_-]*)(?::(?<vsntag>[a-z0-9_-]+))?\\)' # `alt` or `basic` are also valid values\nconverter: '<a href=\"{{navurl}}{{#trait}}#{{/trait}}{{trait}}\" title=\"{{glossaryText}}\">{{showtext}}</a>' # `http`, `essif` or `markdown` are also valid values\n\n# glob pattern strings for files to be processed\ninput:\n\xa0 - '__tests__/content/terminology/*.md'\n")),(0,r.kt)("h4",{id:"master-configuration"},"Master Configuration"),(0,r.kt)("p",null,"The tool only interprets keys from the configuration file that are part of the defined ",(0,r.kt)("a",{parentName:"p",href:"#parameters-and-options"},"parameters"),". Using this knowledge, we are able to create one configuration file to control all of the terminology tools. The configuration file of the tev2-specifications repository can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tno-terminology-design/tev2-specifications/blob/main/docs/config.yaml"},"here"),". In addition to using the options in the general section, the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/spec-tools/trrt",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT")," interprets it's own section. In this section, the yaml ",(0,r.kt)("a",{parentName:"p",href:"https://yaml-multiline.info/"},"block style indicator")," ",(0,r.kt)("inlineCode",{parentName:"p"},">-")," (replace newlines with spaces), is used to provide better readability of the converter option. In addition, the ",(0,r.kt)("inlineCode",{parentName:"p"},"--force")," flag is provided as ",(0,r.kt)("inlineCode",{parentName:"p"},"force: true"),"."),(0,r.kt)("p",null,"For more practical examples, visit ",(0,r.kt)("a",{parentName:"p",href:"deployment"},"deployment"),", or continue reading in ",(0,r.kt)("a",{parentName:"p",href:"customization"},"customization")," for information about the ",(0,r.kt)("a",{parentName:"p",href:"customization#interpreter"},"interpreter")," and ",(0,r.kt)("a",{parentName:"p",href:"customization#converter"},"converter"),"."))}c.isMDXComponent=!0}}]);