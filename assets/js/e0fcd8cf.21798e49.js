"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[2635],{5162:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),r=a(6010),i="tabItem_Ymn6";function o(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:a},t)}},4866:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(3117),r=a(7294),i=a(6010),o=a(2466),l=a(6775),s=a(1980),p=a(7392),d=a(12);function u(e){return function(e){var t,a;return null!=(t=null==(a=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function h(e){var t=e.values,a=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:u(a);return function(e){var t=(0,p.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function c(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId,i=(0,l.k6)(),o=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((function(e){if(o){var t=new URLSearchParams(i.location.search);t.set(o,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[o,i])]}function f(e){var t,a,n,i,o=e.defaultValue,l=e.queryString,s=void 0!==l&&l,p=e.groupId,u=h(e),f=(0,r.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:u})})),k=f[0],g=f[1],N=c({queryString:s,groupId:p}),b=N[0],y=N[1],v=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:p}.groupId),a=(0,d.Nk)(t),n=a[0],i=a[1],[n,(0,r.useCallback)((function(e){t&&i.set(e)}),[t,i])]),w=v[0],T=v[1],R=function(){var e=null!=b?b:w;return m({value:e,tabValues:u})?e:null}();return(0,r.useLayoutEffect)((function(){R&&g(R)}),[R]),{selectedValue:k,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:u}))throw new Error("Can't select invalid tab value="+e);g(e),y(e),T(e)}),[y,T,u]),tabValues:u}}var k=a(2389),g="tabList__CuJ",N="tabItem_LNqP";function b(e){var t=e.className,a=e.block,l=e.selectedValue,s=e.selectValue,p=e.tabValues,d=[],u=(0,o.o5)().blockElementScrollPositionUntilNextRender,h=function(e){var t=e.currentTarget,a=d.indexOf(t),n=p[a].value;n!==l&&(u(t),s(n))},m=function(e){var t,a=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":var n,r=d.indexOf(e.currentTarget)+1;a=null!=(n=d[r])?n:d[0];break;case"ArrowLeft":var i,o=d.indexOf(e.currentTarget)-1;a=null!=(i=d[o])?i:d[d.length-1]}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},p.map((function(e){var t=e.value,a=e.label,o=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return d.push(e)},onKeyDown:m,onClick:h},o,{className:(0,i.Z)("tabs__item",N,null==o?void 0:o.className,{"tabs__item--active":l===t})}),null!=a?a:t)})))}function y(e){var t=e.lazy,a=e.children,n=e.selectedValue,i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){var o=i.find((function(e){return e.props.value===n}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function v(e){var t=f(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",g)},r.createElement(b,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function w(e){var t=(0,k.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},1748:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},mark:function(){return h},metadata:function(){return p},toc:function(){return u}});var n=a(3117),r=a(102),i=(a(7294),a(3905)),o=(a(4996),a(4866),a(5162),["components"]),l={id:"hrgt",sidebar_label:"HR Glossary Generation",displayed_sidebar:"tev2SideBar","// hide_table_of_contents":!0,scopetag:"tev2",date:20230103},s="Human Readable Glossary Generation Tool",p={unversionedId:"tev2/spec-tools/hrgt",id:"tev2/spec-tools/hrgt",title:"Human Readable Glossary Generation Tool",description:"text to mark",source:"@site/docs/tev2/spec-tools/22-hrgt.md",sourceDirName:"tev2/spec-tools",slug:"/tev2/spec-tools/hrgt",permalink:"/framework/docs/tev2/spec-tools/hrgt",draft:!1,editUrl:"https://github.com/essif-lab/framework/blob/master/docs/tev2/spec-tools/22-hrgt.md",tags:[],version:"current",lastUpdatedBy:"RieksJ",lastUpdatedAt:1672745670,formattedLastUpdatedAt:"Jan 3, 2023",sidebarPosition:22,frontMatter:{id:"hrgt",sidebar_label:"HR Glossary Generation",displayed_sidebar:"tev2SideBar","// hide_table_of_contents":!0,scopetag:"tev2",date:20230103},sidebar:"tev2SideBar",previous:{title:"HR Glossary Generation (previous version)",permalink:"/framework/docs/tev2/spec-tools/hrgt-old"},next:{title:"MR Dictionary Generation",permalink:"/framework/docs/tev2/spec-tools/mrdt"}},d={},u=[{value:"Calling the Tool",id:"calling-the-tool",level:2},{value:"Processing, Errors and Warnings",id:"processing-errors-and-warnings",level:2},{value:"Deploying the Tool",id:"deploying-the-tool",level:2},{value:"Discussion Notes",id:"discussion-notes",level:2}],h=function(e){var t=e.children;return(0,i.kt)("span",{style:{color:"black",backgroundColor:"yellow",padding:"0.2rem",borderRadius:"2px"}},t)},m={toc:u,mark:h};function c(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"human-readable-glossary-generation-tool"},"Human Readable Glossary Generation Tool"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",(0,i.kt)("br",null),"\nAs TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.",(0,i.kt)("br",null),(0,i.kt)("a",{parentName:"p",href:"@"},"readers")," will need to see through some (currently unprocessed) notational conventions.")),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Human Readable Glossary generation Tool (",(0,i.kt)("a",{parentName:"strong",href:"@"},"HRGT"),")")," generates a Human Readable ",(0,i.kt)("a",{parentName:"p",href:"@"},"Glossary")," (",(0,i.kt)("a",{parentName:"p",href:"@"},"HRG"),") that consists of (a selection of) the ",(0,i.kt)("a",{parentName:"p",href:"@"},"terms")," that are part of the ",(0,i.kt)("a",{parentName:"p",href:"@"},"terminology")," of a specific ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope"),". The ",(0,i.kt)("a",{parentName:"p",href:"@"},"HRGT")," takes one specific ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG")," as its input, and converts (a selection of) its ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG entries")," into one of the supported output formats, e.g. HTML, or PDF. The selection of the ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG entries"),", as well as the specification of the output format, headers, footers, etc., can be configured as well as customized. Thus, the ",(0,i.kt)("a",{parentName:"p",href:"@"},"HRGT")," provides a flexible means for creating all sorts of outputs that are either already human readable or can be processed further by third-party rendering tools, such as ",(0,i.kt)("a",{parentName:"p",href:"https://pages.github.com/"},"github pages")," or ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/docs-introduction"},"Docusaurus"),", etc. (see also: ",(0,i.kt)("a",{parentName:"p",href:"/docs/tev2/tev2-toolbox"},"Using the Tools"),")."),(0,i.kt)("p",null,"There is currently one implementation of the tool underway:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the repo in which the tool is being developed is ","[",(0,i.kt)("mark",null,"tbd"),"]","."),(0,i.kt)("li",{parentName:"ul"},"the documentation is ","[",(0,i.kt)("mark",null,"tbd"),"]",".")),(0,i.kt)("h2",{id:"calling-the-tool"},"Calling the Tool"),(0,i.kt)("p",null,"The behavior of the ",(0,i.kt)("a",{parentName:"p",href:"@"},"HRGT")," can be configured per call e.g. by a configuration file and/or command-line parameters. The command-line syntax is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"hrgt [ <paramlist> ] [ <globpattern> ]\n")),(0,i.kt)("p",null,"where:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<paramlist>")," (optional) is a list of key-value pairs"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Glob_(programming)#Syntax"},(0,i.kt)("inlineCode",{parentName:"a"},"globpattern"))," (optional) specifies a set of (input) files that are to be processed. If a configuration file is used, its contents may specify an additional set of input files to be processed.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Legend"),(0,i.kt)("p",null,"The columns in the following table are defined as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Key"))," is the text to be used as a key."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Value"))," represents the kind of value to be used."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Req'd"))," specifies whether (",(0,i.kt)("inlineCode",{parentName:"li"},"Y"),") or not (",(0,i.kt)("inlineCode",{parentName:"li"},"n"),") the field is required to be present when the tool is being called. If required, it MUST either be present in the configuration file, or as a command-line parameter."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Description"))," specifies the meaning of the ",(0,i.kt)("inlineCode",{parentName:"li"},"Value")," field, and other things you may need to know, e.g. why it is needed, a required syntax, etc."))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Key"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Req'd"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"config")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Path (including the filename) of the tool's (YAML) configuration file. This file contains the default key-value pairs to be used. Allowed keys (and the associated values) are documented in this table. Command-line arguments override key-value pairs specified in the configuration file. This parameter MUST NOT appear in the configuration file itself.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"scopedir")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Path of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"scope directory")," from which the tool is called. It MUST contain the ",(0,i.kt)("a",{parentName:"td",href:"@"},"SAF")," for that ",(0,i.kt)("a",{parentName:"td",href:"@"},"scope"),", which we will refer to as the 'current scope' for the ",(0,i.kt)("a",{parentName:"td",href:"@"},"HRGT"),". If omitted, the current directory is assumed to tbe the ",(0,i.kt)("a",{parentName:"td",href:"@"},"scope directory"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"input")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Glob_(programming)#Syntax"},"Globpattern")," that specifies the set of (input) files (",(0,i.kt)("a",{parentName:"td",href:"@"},"MRGs"),") that are to be processed. If omitted, the ",(0,i.kt)("a",{parentName:"td",href:"@"},"HRG")," is generated for the default ",(0,i.kt)("a",{parentName:"td",href:"@"},"MRG")," of the current scope (as specified in the ",(0,i.kt)("inlineCode",{parentName:"td"},"mrgfile")," field of the ",(0,i.kt)("inlineCode",{parentName:"td"},"scope")," section in its ",(0,i.kt)("a",{parentName:"td",href:"@"},"SAF"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"output")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:"left"},"text that is used as the first part of the name of the file(s) that contain(s) the generated ",(0,i.kt)("a",{parentName:"td",href:"@"},"HRG(s)"),". If omitted, the text ",(0,i.kt)("inlineCode",{parentName:"td"},"glossary-")," will be used. Thus, output file names consists of the concatenation of ",(0,i.kt)("inlineCode",{parentName:"td"},"output")," and the input filename, where the file extension depends on the type of output that will be written (e.g.: ",(0,i.kt)("inlineCode",{parentName:"td"},".html"),", ",(0,i.kt)("inlineCode",{parentName:"td"},".pdf"),", etc.).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"termselcrit")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:"left"},"List of ",(0,i.kt)("a",{parentName:"td",href:"@"},"term selection criteria")," that are used to generate (this version of) the ",(0,i.kt)("a",{parentName:"td",href:"@"},"scope's")," ",(0,i.kt)("a",{parentName:"td",href:"@"},"terminology"),". If omitted, all ",(0,i.kt)("a",{parentName:"td",href:"@"},"MRG entries")," from the source ",(0,i.kt)("a",{parentName:"td",href:"@"},"MRG")," will be selected. See ",(0,i.kt)("a",{parentName:"td",href:"/docs/tev2/spec-tools/terminology-construction"},"Terminology Construction")," for details.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"method")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("mark",null,"Text, the syntax and semantics of which remain to be specified (see also the Editor's note below).")," When this parameter is omitted, the ",(0,i.kt)("a",{parentName:"td",href:"@"},"HRG")," is generated as an HTML file.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"license")),(0,i.kt)("td",{parentName:"tr",align:"center"},"n"),(0,i.kt)("td",{parentName:"tr",align:"left"},"File that contains the (default) licensing conditions. Full URL is ",(0,i.kt)("inlineCode",{parentName:"td"},"scopedir"),"/",(0,i.kt)("inlineCode",{parentName:"td"},"license"),". If not specified, its value defaults to the value of the ",(0,i.kt)("inlineCode",{parentName:"td"},"license")," field in the ",(0,i.kt)("inlineCode",{parentName:"td"},"scope")," section (of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"SAF")," of the current scope). The purpose of this field is to enable different ",(0,i.kt)("a",{parentName:"td",href:"@"},"HRGs")," to have different licenses.")))),(0,i.kt)("admonition",{title:"Editor's Note:",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"We may want to consider:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"changing the ",(0,i.kt)("inlineCode",{parentName:"li"},"input")," parameter from a globpattern to a list of versiontags for which the HRG is to be generated."),(0,i.kt)("li",{parentName:"ul"},"revising the spec of the ",(0,i.kt)("inlineCode",{parentName:"li"},"output")," parameter, depending on the kind of control that ",(0,i.kt)("a",{parentName:"li",href:"@"},"curators")," need."),(0,i.kt)("li",{parentName:"ul"},"add a ",(0,i.kt)("inlineCode",{parentName:"li"},"version")," parameter, the value of which is a ",(0,i.kt)("a",{parentName:"li",href:"@"},"versiontag"),", and the meaning of which is that (a) the input file is the ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG")," associated with that ",(0,i.kt)("a",{parentName:"li",href:"@"},"versiontag"),", and (b) the output file will be registered in the ",(0,i.kt)("inlineCode",{parentName:"li"},"hrgfile")," entry of the appropriate element of the ",(0,i.kt)("inlineCode",{parentName:"li"},"versions")," section of the ",(0,i.kt)("a",{parentName:"li",href:"@"},"SAF"),", and also, if appropriate, in the ",(0,i.kt)("inlineCode",{parentName:"li"},"scope")," section of the ",(0,i.kt)("a",{parentName:"li",href:"@"},"SAF"),". Doing this requires additional texts in subsequent sections."))),(0,i.kt)("admonition",{title:"Editor's Note:",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Various ",(0,i.kt)("inlineCode",{parentName:"p"},"method"),"s are envisaged, yet remain to be properly specified. A method may specify:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"what a single entry contains"),(0,i.kt)("li",{parentName:"ul"},"that the contents of particular files are to be used as header or footer;"),(0,i.kt)("li",{parentName:"ul"},"that a particular kind of navigation bar is to be inserted at specific places (e.g. between two subsequent entries that start with a different character);"),(0,i.kt)("li",{parentName:"ul"},"..."))),(0,i.kt)("h2",{id:"processing-errors-and-warnings"},"Processing, Errors and Warnings"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"@"},"HRGT")," starts by reading its command-line and configuration file. If the command-line has a key that is also found in the configuration file, the command-line key-value pair takes precedence. The resulting set of key-value pairs is tested for proper syntax and validity. Every improper syntax and every invalidity found will be logged. Improper syntax may be e.g. an invalid ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Glob_(programming)#Syntax"},"globpattern"),". Invalidities include non-existing directories or files, lack of write-permissions where needed, etc."),(0,i.kt)("p",null,"Then, the ",(0,i.kt)("a",{parentName:"p",href:"@"},"HRGT")," reads the specified input files (in arbitrary order), and processes each of them, as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"select the actual ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG")," that is to be used as an input;"),(0,i.kt)("li",{parentName:"ul"},"select the (subset of) ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG entries")," from that ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG")," that must appear in the ",(0,i.kt)("a",{parentName:"li",href:"@"},"HRG")," - see ",(0,i.kt)("a",{parentName:"li",href:"/docs/tev2/spec-syntax/hrg-termselcrit"},"HRG Term Selection")," for details. Conceptually, this will result in an ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG")," that only contains ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG entries")," that need to appear in the ",(0,i.kt)("a",{parentName:"li",href:"@"},"HRG")," as well;"),(0,i.kt)("li",{parentName:"ul"},"(alphabetically) sort these entries;"),(0,i.kt)("li",{parentName:"ul"},"convert each entry into a specific 'rendered' format (as specified by the user), thereby resolving any ",(0,i.kt)("a",{parentName:"li",href:"@"},"term refs")," (by appropriately calling the ",(0,i.kt)("a",{parentName:"li",href:"@"},"TRRT"),")",(0,i.kt)("sup",{parentName:"li",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),", adding hyperlinks to the ",(0,i.kt)("a",{parentName:"li",href:"@"},"curated text")," that the entry relates to, 'meta-data' (e.g. the associated ",(0,i.kt)("a",{parentName:"li",href:"@"},"grouptags"),", contributors, etc.), and anything else, as required for the particular kind of ",(0,i.kt)("a",{parentName:"li",href:"@"},"HRG")," that is being generated;"),(0,i.kt)("li",{parentName:"ul"},"concatenate these rendered entries, optionally including/inserting some navigation bars (e.g. before a new letter starts);"),(0,i.kt)("li",{parentName:"ul"},"construct the ",(0,i.kt)("a",{parentName:"li",href:"@"},"HRG")," by adding (rendered) header- and footer-material and (optionally) licensing information;"),(0,i.kt)("li",{parentName:"ul"},"write the ",(0,i.kt)("a",{parentName:"li",href:"@"},"HRG")," to the designated output file.")),(0,i.kt)("admonition",{title:"Editor's Note:",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"A special case of ",(0,i.kt)("a",{parentName:"p",href:"@"},"HRG")," generation is when the default ",(0,i.kt)("a",{parentName:"p",href:"@"},"HRG")," is created for a particular ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG"),", which typically consists of all ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG entries")," of that ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG"),". In that case, the contents of the ",(0,i.kt)("inlineCode",{parentName:"p"},"hrgfile")," field in ",(0,i.kt)("inlineCode",{parentName:"p"},"versions")," section of the ",(0,i.kt)("a",{parentName:"p",href:"@"},"SAF")," whose ",(0,i.kt)("inlineCode",{parentName:"p"},"mrgfile")," field ",(0,i.kt)("a",{parentName:"p",href:"@"},"identifies")," the ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG")," should become the name of the file that contains the generated ",(0,i.kt)("a",{parentName:"p",href:"@"},"HRG"),". Additionally, if the ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG")," happens to be the default one for the scope (as can be seen by comparing its filename with the contents of the ",(0,i.kt)("inlineCode",{parentName:"p"},"mrgfile")," field in the ",(0,i.kt)("inlineCode",{parentName:"p"},"scope")," section of the ",(0,i.kt)("a",{parentName:"p",href:"@"},"SAF"),"), then the contents of the ",(0,i.kt)("inlineCode",{parentName:"p"},"hrgfile")," field in ",(0,i.kt)("inlineCode",{parentName:"p"},"scope")," section of the ",(0,i.kt)("a",{parentName:"p",href:"@"},"SAF")," must also become the name of the file that contains the generated ",(0,i.kt)("a",{parentName:"p",href:"@"},"HRG"),". Whether or not the ",(0,i.kt)("a",{parentName:"p",href:"@"},"HRGT")," is expected to operate in this mode is an option that can be provided at the commandline or in the configuration file.")),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"@"},"HRGT")," logs every error- and/or warning condition that it comes across while processing its configuration file, commandline parameters, and input files, in a way that helps tool-operators and document ",(0,i.kt)("a",{parentName:"p",href:"@"},"authors")," to identify and fix such conditions."),(0,i.kt)("h2",{id:"deploying-the-tool"},"Deploying the Tool"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"@"},"HRGT")," comes with documentation that enables developers to ascertain its correct functioning (e.g. by using a test set of files, test scripts that exercise its parameters, etc.), and also enables them to deploy the tool in a git repo and author/modify CI-pipes to use that deployment."),(0,i.kt)("h2",{id:"discussion-notes"},"Discussion Notes"),(0,i.kt)("p",null,"This section contains some notes of a discussion between Daniel and Rieks on these matters of some time ago, which pertains to glossaries in the context of ToIP."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A ToIP ",(0,i.kt)("a",{parentName:"li",href:"@"},"glossary")," will be put by default at ",(0,i.kt)("inlineCode",{parentName:"li"},"http://trustoverip.github.io/<terms-community>/glossary"),", where ",(0,i.kt)("inlineCode",{parentName:"li"},"<terms-community>")," is the name of the ",(0,i.kt)("a",{parentName:"li",href:"@"},"terms-community"),". This allows every  ",(0,i.kt)("a",{parentName:"li",href:"@"},"terms-community")," to have its own ",(0,i.kt)("a",{parentName:"li",href:"@"},"glossary"),". However, the above specifications allow ",(0,i.kt)("a",{parentName:"li",href:"terms-community@"},"terms-communities")," to ",(0,i.kt)("a",{parentName:"li",href:"@"},"curate")," multiple ",(0,i.kt)("a",{parentName:"li",href:"scope@"},"scopes"),"."),(0,i.kt)("li",{parentName:"ul"},"Storing ",(0,i.kt)("a",{parentName:"li",href:"glossary@"},"glossaries")," elsewhere was seen to break the (basic workings of the postprocessing tool, but the above specifications would fix that."),(0,i.kt)("li",{parentName:"ul"},"Entries, e.g. 'foo' can be referenced as ",(0,i.kt)("inlineCode",{parentName:"li"},"http://trustoverip.github.io/<community>/[glossary](@)#foo")," (in case of a standalone glossary), and ",(0,i.kt)("inlineCode",{parentName:"li"},"http://trustoverip.github.io/<community>/document-that-includes-glossary-fragment#foo")," (in case of a fragmented glossary)."),(0,i.kt)("li",{parentName:"ul"},"We could also see GGT and TRRT to be extended, e.g. to work in conjunction with LaTeX or word-processor documents. This needs some looking into, but ",(0,i.kt)("a",{parentName:"li",href:"https://pandoc.org/"},"pandoc")," may be useful here.")),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"if the rendered output is such that ",(0,i.kt)("a",{parentName:"li",href:"@"},"term refs")," can still be recognized by the ",(0,i.kt)("a",{parentName:"li",href:"@"},"TRRT"),", it may be more efficient to defer the resolution of ",(0,i.kt)("a",{parentName:"li",href:"@"},"term refs")," until after the ",(0,i.kt)("a",{parentName:"li",href:"@"},"HRG")," is completely generated.",(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}c.isMDXComponent=!0}}]);