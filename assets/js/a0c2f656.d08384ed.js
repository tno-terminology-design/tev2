"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[1226],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),f=o,h=m["".concat(s,".").concat(f)]||m[f]||d[f]||i;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3968:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(3117),o=(a(7294),a(3905));const i={},r="Usage",l={unversionedId:"spec-tools/tool-docs/mrg-import/usage",id:"spec-tools/tool-docs/mrg-import/usage",title:"Usage",description:"The behavior of the MRG importer can be configured per call e.g. by a configuration file and/or command-line parameters. The command-line syntax is as follows.",source:"@site/docs/spec-tools/tool-docs/mrg-import/2-usage.md",sourceDirName:"spec-tools/tool-docs/mrg-import",slug:"/spec-tools/tool-docs/mrg-import/usage",permalink:"/tev2-specifications/docs/spec-tools/tool-docs/mrg-import/usage",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/spec-tools/tool-docs/mrg-import/2-usage.md",tags:[],version:"current",lastUpdatedBy:"Ca5e",lastUpdatedAt:1700853879,formattedLastUpdatedAt:"Nov 24, 2023",sidebarPosition:2,frontMatter:{},sidebar:"tev2SideBar",previous:{title:"Installation",permalink:"/tev2-specifications/docs/spec-tools/tool-docs/mrg-import/installation"},next:{title:"Deployment",permalink:"/tev2-specifications/docs/spec-tools/tool-docs/mrg-import/deployment"}},s={},p=[{value:"Parameters and Options",id:"parameters-and-options",level:2},{value:"(URL) Handling",id:"url-handling",level:3},{value:"Configuration File",id:"configuration-file",level:3},{value:"Master Configuration",id:"master-configuration",level:4}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"usage"},"Usage"),(0,o.kt)("p",null,"The behavior of the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/spec-tools/mrg-import",title:"MRG Import (Tool): is a tool in the TEv2 toolbox that is run within a particular Scope for the purpose of obtaining MRGs from other Scopes, as specified in the Scope's SAF, and putting them in the Scope's Glossarydir."},"MRG importer")," can be configured per call e.g. by a configuration file and/or command-line parameters. The command-line syntax is as follows."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mrg-import [ <paramlist> ]\n")),(0,o.kt)("p",null,"where:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<paramlist>")," (optional) is a list of key-value pairs")),(0,o.kt)("h2",{id:"parameters-and-options"},"Parameters and Options"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Legend"),(0,o.kt)("p",null,"The columns in the following table are defined as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"Key"))," is the text to be used as a key."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"Value"))," represents the kind of value to be used."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"Req'd"))," specifies whether (",(0,o.kt)("inlineCode",{parentName:"li"},"Y"),") or not (",(0,o.kt)("inlineCode",{parentName:"li"},"n"),") the field is required to be present when the tool is being called. If required, it MUST either be present in the configuration file, or as a command-line parameter."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"Description"))," specifies the meaning of the ",(0,o.kt)("inlineCode",{parentName:"li"},"Value")," field, and other things you may need to know, e.g. why it is needed, a required syntax, etc."))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Key"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Value"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Req'd"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"-c"),(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"td"},"--config")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"<path>")),(0,o.kt)("td",{parentName:"tr",align:"center"},"n"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Path (including the filename) of the tool's (YAML) ",(0,o.kt)("a",{parentName:"td",href:"#configuration-file"},"configuration file")," as an absolute or relative path from where the tool is called. This file contains the key-value pairs to be used. Allowed keys (and the associated values) are documented in this table. Command-line arguments override key-value pairs specified in the ",(0,o.kt)("a",{parentName:"td",href:"#configuration-file"},"configuration file"),". This parameter MUST NOT appear in the ",(0,o.kt)("a",{parentName:"td",href:"#configuration-file"},"configuration file")," itself.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"-s"),(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"td"},"--scopedir")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"<path>")),(0,o.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Path of the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/scopedir",title:"Scopedir: a directory in a computer file system that contains all files that are either being Curated within a particular Scope, or generated to serve some purpose within that Scope."},"scope directory")," from which the tool is called. It MUST contain the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/spec-files/saf",title:"SAF: a YAML file that contains essential data about a particular scope, such as the locations of the scope's curated texts, glossaries, and the specifications of the curated terminologies. The SAF is located in the so-called scopedir."},"SAF")," for that ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/scope",title:"Scope: the extent of the Terms, Definitions and other documentation that a Community (which we call the Owner of the Scope) needs to express, communicate and validate its Knowledge as relevant to achieving a specific subset of its Objectives."},"scope"),", which we will refer to as the 'own scope' for the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/spec-tools/mrg-import",title:"MRG Import (Tool): is a tool in the TEv2 toolbox that is run within a particular Scope for the purpose of obtaining MRGs from other Scopes, as specified in the Scope's SAF, and putting them in the Scope's Glossarydir."},"MRG Import Tool"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"-o"),(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"td"},"--onNotExist")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"<action>")),(0,o.kt)("td",{parentName:"tr",align:"center"},"n"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Specifies the action to take in case an ",(0,o.kt)("a",{href:"/tev2-specifications/docs/spec-files/mrg",title:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems."},"MRG")," file that was expected to exist, does not exist. Default is ",(0,o.kt)("inlineCode",{parentName:"td"},"throw"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"-V"),(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"td"},"--version")),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"center"},"n"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Output the version number of the tool.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"-h"),(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"td"},"--help")),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"center"},"n"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Display usage and options help text.")))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"<action>")," parameter can take the following values."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"th"},"<action>")),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"'throw'")),(0,o.kt)("td",{parentName:"tr",align:"left"},"An error is thrown (an exception is raised), and processing will stop.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"'warn'")),(0,o.kt)("td",{parentName:"tr",align:"left"},"A message is displayed (and logged) and processing continues.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"'log'")),(0,o.kt)("td",{parentName:"tr",align:"left"},"A message is written to a log(file) and processing continues.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"'ignore'")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Processing continues as if nothing happened.")))),(0,o.kt)("h3",{id:"url-handling"},"(URL) Handling"),(0,o.kt)("p",null,"The use of URL's are very important within the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/spec-tools/mrg-import",title:"MRG Import (Tool): is a tool in the TEv2 toolbox that is run within a particular Scope for the purpose of obtaining MRGs from other Scopes, as specified in the Scope's SAF, and putting them in the Scope's Glossarydir."},"MRG importer"),". Where possible, URL's that the tool uses are used as parsed URL's so they can be clicked on inside the console output. As of right now, HTTP requests for obtaining files from import scopes do not support authentication. The download function is able to determine the 'raw' URL from a normal Git URL through the use of the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/git-url-parse"},"git-url-parse")," package, after which the raw URL contents are requested through the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/axios"},"axios")," HTTP client."),(0,o.kt)("p",null,"The conversion of normal URL's to raw URL's is currently supported for the following platforms."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/"},"GitHub")," (no authentication)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://gitlab.com/"},"GitLab")," (no authentication)")),(0,o.kt)("p",null,"If an unsupported platform is used, no conversion is done and the tool assumes a URL points to a raw file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Example conversion"',title:'"Example','conversion"':!0},"https://github.com/essif-lab/framework/tree/master/docs/saf.yaml\n# to\nhttps://raw.githubusercontent.com/essif-lab/framework/master/docs/saf.yaml\n")),(0,o.kt)("h3",{id:"configuration-file"},"Configuration File"),(0,o.kt)("p",null,"Every parameter specified in the ",(0,o.kt)("a",{parentName:"p",href:"#parameters-and-options"},"options")," table above (except for ",(0,o.kt)("inlineCode",{parentName:"p"},"config"),") can be set inside a yaml file. As an example, running the tool with the following command with the use of the ",(0,o.kt)("inlineCode",{parentName:"p"},"__tests__")," files:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mrg-import --config __tests__/content/config.yaml\n")),(0,o.kt)("p",null,"uses the example ",(0,o.kt)("inlineCode",{parentName:"p"},"config.yaml")," file shown below. As a general guideline, we recommend storing the config files related to all terminology tools in the root of the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/terms/scopedir",title:"Scopedir: a directory in a computer file system that contains all files that are either being Curated within a particular Scope, or generated to serve some purpose within that Scope."},"scope directory")," where the ",(0,o.kt)("a",{href:"/tev2-specifications/docs/spec-files/saf",title:"SAF: a YAML file that contains essential data about a particular scope, such as the locations of the scope's curated texts, glossaries, and the specifications of the curated terminologies. The SAF is located in the so-called scopedir."},"SAF")," resides as well."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="__tests__/content/config.yaml"',title:'"__tests__/content/config.yaml"'},"# MRG Import Tool configuration file (yaml)\nscopedir: __tests__/content\nonNotExist: throw\n")),(0,o.kt)("h4",{id:"master-configuration"},"Master Configuration"),(0,o.kt)("p",null,"The tool only interprets keys from the configuration file that are part of the defined ",(0,o.kt)("a",{parentName:"p",href:"#parameters-and-options"},"parameters"),". Using this knowledge, we are able to create one configuration file to control all of the terminology tools. The configuration file of the tev2-specifications repository can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tno-terminology-design/tev2-specifications/blob/main/docs/config.yaml"},"here"),". In the file, no seperate configuration section is dedicated to the mrg-import tool as the general ",(0,o.kt)("inlineCode",{parentName:"p"},"scopedir")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"onNotExist")," options are enough to execute the tool."),(0,o.kt)("p",null,"For more practical examples, continue reading in ",(0,o.kt)("a",{parentName:"p",href:"deployment"},"deployment"),"."))}d.isMDXComponent=!0}}]);