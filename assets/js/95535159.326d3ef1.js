"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[5544],{5162:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(7294),n=a(6010),i="tabItem_Ymn6";function o(e){var t=e.children,a=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(i,o),hidden:a},t)}},4866:function(e,t,a){a.d(t,{Z:function(){return w}});var r=a(3117),n=a(7294),i=a(6010),o=a(2466),l=a(6775),s=a(1980),p=a(7392),h=a(12);function u(e){return function(e){var t,a;return null!=(t=null==(a=n.Children.map(e,(function(e){if(!e||(0,n.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function m(e){var t=e.values,a=e.children;return(0,n.useMemo)((function(){var e=null!=t?t:u(a);return function(e){var t=(0,p.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function c(e){var t=e.queryString,a=void 0!==t&&t,r=e.groupId,i=(0,l.k6)(),o=function(e){var t=e.queryString,a=void 0!==t&&t,r=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:a,groupId:r});return[(0,s._X)(o),(0,n.useCallback)((function(e){if(o){var t=new URLSearchParams(i.location.search);t.set(o,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[o,i])]}function f(e){var t,a,r,i,o=e.defaultValue,l=e.queryString,s=void 0!==l&&l,p=e.groupId,u=m(e),f=(0,n.useState)((function(){return function(e){var t,a=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!d({value:a,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var n=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:o,tabValues:u})})),k=f[0],N=f[1],g=c({queryString:s,groupId:p}),v=g[0],y=g[1],b=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:p}.groupId),a=(0,h.Nk)(t),r=a[0],i=a[1],[r,(0,n.useCallback)((function(e){t&&i.set(e)}),[t,i])]),w=b[0],G=b[1],R=function(){var e=null!=v?v:w;return d({value:e,tabValues:u})?e:null}();return(0,n.useLayoutEffect)((function(){R&&N(R)}),[R]),{selectedValue:k,selectValue:(0,n.useCallback)((function(e){if(!d({value:e,tabValues:u}))throw new Error("Can't select invalid tab value="+e);N(e),y(e),G(e)}),[y,G,u]),tabValues:u}}var k=a(2389),N="tabList__CuJ",g="tabItem_LNqP";function v(e){var t=e.className,a=e.block,l=e.selectedValue,s=e.selectValue,p=e.tabValues,h=[],u=(0,o.o5)().blockElementScrollPositionUntilNextRender,m=function(e){var t=e.currentTarget,a=h.indexOf(t),r=p[a].value;r!==l&&(u(t),s(r))},d=function(e){var t,a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var r,n=h.indexOf(e.currentTarget)+1;a=null!=(r=h[n])?r:h[0];break;case"ArrowLeft":var i,o=h.indexOf(e.currentTarget)-1;a=null!=(i=h[o])?i:h[h.length-1]}null==(t=a)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},p.map((function(e){var t=e.value,a=e.label,o=e.attributes;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return h.push(e)},onKeyDown:d,onClick:m},o,{className:(0,i.Z)("tabs__item",g,null==o?void 0:o.className,{"tabs__item--active":l===t})}),null!=a?a:t)})))}function y(e){var t=e.lazy,a=e.children,r=e.selectedValue,i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){var o=i.find((function(e){return e.props.value===r}));return o?(0,n.cloneElement)(o,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},i.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function b(e){var t=f(e);return n.createElement("div",{className:(0,i.Z)("tabs-container",N)},n.createElement(v,(0,r.Z)({},e,t)),n.createElement(y,(0,r.Z)({},e,t)))}function w(e){var t=(0,k.Z)();return n.createElement(b,(0,r.Z)({key:String(t)},e))}},265:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},mark:function(){return m},metadata:function(){return p},toc:function(){return u}});var r=a(3117),n=a(102),i=(a(7294),a(3905)),o=(a(4996),a(4866),a(5162),["components"]),l={id:"mrgt",sidebar_label:"MR Glossary Generation",displayed_sidebar:"tev2SideBar",hide_table_of_contents:!0,scopetag:"tev2",date:20221127},s="Machine Readable Glossary Generation Tool",p={unversionedId:"tev2/spec-tools/mrgt",id:"tev2/spec-tools/mrgt",title:"Machine Readable Glossary Generation Tool",description:"text to mark",source:"@site/docs/tev2/spec-tools/21-mrgt.md",sourceDirName:"tev2/spec-tools",slug:"/tev2/spec-tools/mrgt",permalink:"/framework/docs/tev2/spec-tools/mrgt",draft:!1,editUrl:"https://github.com/essif-lab/framework/blob/master/docs/tev2/spec-tools/21-mrgt.md",tags:[],version:"current",lastUpdatedBy:"RieksJ",lastUpdatedAt:1672745670,formattedLastUpdatedAt:"Jan 3, 2023",sidebarPosition:21,frontMatter:{id:"mrgt",sidebar_label:"MR Glossary Generation",displayed_sidebar:"tev2SideBar",hide_table_of_contents:!0,scopetag:"tev2",date:20221127},sidebar:"tev2SideBar",previous:{title:"Terminology Construction",permalink:"/framework/docs/tev2/spec-tools/terminology-construction"},next:{title:"HR Glossary Generation (previous version)",permalink:"/framework/docs/tev2/spec-tools/hrgt-old"}},h={},u=[{value:"Generating an MRG",id:"generating-an-mrg",level:2},{value:"Creating an MRG Entry",id:"creating-an-mrg-entry",level:3},{value:"Copying an MRG Entry from an existing MRG",id:"copying-an-mrg-entry-from-an-existing-mrg",level:4},{value:"Constructing an MRG Entry from a Curated Text",id:"constructing-an-mrg-entry-from-a-curated-text",level:4},{value:"Exceptions, Warnings, and Logging",id:"exceptions",level:2},{value:"Notes",id:"notes",level:2}],m=function(e){var t=e.children;return(0,i.kt)("span",{style:{color:"black",backgroundColor:"yellow",padding:"0.2rem",borderRadius:"2px"}},t)},d={toc:u,mark:m};function c(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"machine-readable-glossary-generation-tool"},"Machine Readable Glossary Generation Tool"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",(0,i.kt)("br",null),"\nAs TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.",(0,i.kt)("br",null),(0,i.kt)("a",{parentName:"p",href:"@"},"readers")," will need to see through some (currently unprocessed) notational conventions.")),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Machine Readable Glossary generation Tool (",(0,i.kt)("a",{parentName:"strong",href:"@"},"MRGT"),")")," generates a Machine Readable Glossary or ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG"),") for (a specific version of) the ",(0,i.kt)("a",{parentName:"p",href:"@"},"terminology")," of a specific ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope")," into a specific, well-defined ",(0,i.kt)("a",{parentName:"p",href:"/docs/tev2/spec-files/mrg"},"format"),". An ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG")," contains so-called ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG entries")," for every ",(0,i.kt)("a",{parentName:"p",href:"@"},"term")," in its ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope"),", which represent not only ",(0,i.kt)("a",{parentName:"p",href:"@"},"concepts")," but also other ",(0,i.kt)("a",{parentName:"p",href:"@"},"knowledge artifacts")," of other kinds, such as ",(0,i.kt)("a",{parentName:"p",href:"@"},"mental models")," and ",(0,i.kt)("a",{parentName:"p",href:"@"},"use cases"),"."),(0,i.kt)("p",null,"The (newly generated) ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG")," is meant to be processed by the other tools in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/tev2/tev2-toolbox"},"toolbox"),", regardless of whether such tools are called from within the context of another ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope"),". As it contains every ",(0,i.kt)("a",{parentName:"p",href:"@"},"term")," that is used in the ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope"),", and includes all the relevant meta-data, an ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG")," serves as the single, authoritative source of that (version of the) ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope's")," ",(0,i.kt)("a",{parentName:"p",href:"@"},"terminology"),"."),(0,i.kt)("p",null,"There is currently one implementation of the tool:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the repo is ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/trustoverip/ctwg-toolkit-mrg/"},"here")),(0,i.kt)("li",{parentName:"ul"},"the documentation is ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/trustoverip/ctwg-toolkit-mrg#readme"},"here"))),(0,i.kt)("h2",{id:"generating-an-mrg"},"Generating an MRG"),(0,i.kt)("p",null,"As input, the ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRGT")," is provided a ",(0,i.kt)("a",{parentName:"p",href:"@"},"SAF"),", is pointed to the particular entry in its ",(0,i.kt)("a",{parentName:"p",href:"/docs/tev2/spec-files/saf#versions"},(0,i.kt)("inlineCode",{parentName:"a"},"versions")," section")," that specifies (a specific version of) a ",(0,i.kt)("a",{parentName:"p",href:"@"},"terminology"),". This section not only includes meta-data for that ",(0,i.kt)("a",{parentName:"p",href:"@"},"terminology"),", but also the set of '",(0,i.kt)("a",{parentName:"p",href:"@"},"term selection criteria"),"' that specify how the ",(0,i.kt)("a",{parentName:"p",href:"@"},"terminology")," needs to be ",(0,i.kt)("a",{parentName:"p",href:"/docs/tev2/spec-tools/terminology-construction"},"constructed"),", and the file to which the result needs to be written."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG")," is then created as follows (starting with an empty file):"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG")," ",(0,i.kt)("inlineCode",{parentName:"li"},"terminology")," section is created, by copying relevant fields from the appropriate ",(0,i.kt)("inlineCode",{parentName:"li"},"versions")," element in the ",(0,i.kt)("a",{parentName:"li",href:"@"},"SAF"),"."),(0,i.kt)("li",{parentName:"ol"},"Then, the ",(0,i.kt)("a",{parentName:"li",href:"/docs/tev2/spec-tools/terminology-construction"},"terminology construction")," takes place, which can be thought of as constructing a set of tuples ",(0,i.kt)("inlineCode",{parentName:"li"},"{ [term, grouptags] }"),", where ",(0,i.kt)("inlineCode",{parentName:"li"},"term")," ",(0,i.kt)("a",{parentName:"li",href:"@"},"identifies")," (the ",(0,i.kt)("a",{parentName:"li",href:"@"},"curated text")," that documents) the particular ",(0,i.kt)("a",{parentName:"li",href:"@"},"knowledge artifact"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"grouptags")," is a set of ",(0,i.kt)("a",{parentName:"li",href:"@"},"grouptags")," that the tuple is associated with."),(0,i.kt)("li",{parentName:"ol"},"For every tuple in this set, an ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG entry")," is created, and added to the ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG")," under construction. The structure of each such ",(0,i.kt)("a",{parentName:"li",href:"mrg-entry@"},"entry")," depends on the type of the ",(0,i.kt)("a",{parentName:"li",href:"@"},"knowledge artifact")," that the ",(0,i.kt)("a",{parentName:"li",href:"@"},"term")," represents, as the ",(0,i.kt)("a",{parentName:"li",href:"@"},"header")," of a ",(0,i.kt)("a",{parentName:"li",href:"@"},"curated text")," depends on that type."),(0,i.kt)("li",{parentName:"ol"},"By default, the result is put at the location as specified by the ",(0,i.kt)("a",{parentName:"li",href:"@"},"SAF"),", i.e. in the directory as specified by the ",(0,i.kt)("inlineCode",{parentName:"li"},"glossarydir")," field (in the ",(0,i.kt)("a",{parentName:"li",href:"/docs/tev2/spec-files/saf#terminology"},(0,i.kt)("inlineCode",{parentName:"a"},"scope")," section"),"), and using the filename as specified by the ",(0,i.kt)("inlineCode",{parentName:"li"},"mrgfile")," field of the specific version (in the ",(0,i.kt)("a",{parentName:"li",href:"/docs/tev2/spec-files/saf#versions"},(0,i.kt)("inlineCode",{parentName:"a"},"versions")," section")," of the ",(0,i.kt)("a",{parentName:"li",href:"@"},"SAF"),"). However, the tool may specify ways to override this default.")),(0,i.kt)("h3",{id:"creating-an-mrg-entry"},"Creating an MRG Entry"),(0,i.kt)("p",null,"An ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG entry")," is either"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a copy of an (existing) ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG entry")," that is found in an ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG")," that lives in another ",(0,i.kt)("a",{parentName:"li",href:"@"},"scope"),", or"),(0,i.kt)("li",{parentName:"ul"},"it is constructed from a ",(0,i.kt)("a",{parentName:"li",href:"@"},"curated text"),", which lives in a file in (one of the subdirectories of) the ",(0,i.kt)("a",{parentName:"li",href:"@"},"curatedir")," of the current ",(0,i.kt)("a",{parentName:"li",href:"@"},"scope"),", as ",(0,i.kt)("a",{parentName:"li",href:"/docs/tev2/spec-files/saf#terminology"},"specified")," in the ",(0,i.kt)("inlineCode",{parentName:"li"},"curatedir")," field of the ",(0,i.kt)("a",{parentName:"li",href:"@"},"SAF"),".")),(0,i.kt)("h4",{id:"copying-an-mrg-entry-from-an-existing-mrg"},"Copying an MRG Entry from an existing MRG"),(0,i.kt)("p",null,"In case the ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG entry")," is a copy, the ",(0,i.kt)("inlineCode",{parentName:"p"},"vsntag")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/tev2/spec-files/mrg#mrg-entries"},"field")," of that ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG entry")," should be given the value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"vsntag")," field that is found in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/tev2/spec-files/mrg#mrg-terminology"},"'terminology' section")," of the ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG")," from which ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG entry")," contents was copied."),(0,i.kt)("h4",{id:"constructing-an-mrg-entry-from-a-curated-text"},"Constructing an MRG Entry from a Curated Text"),(0,i.kt)("p",null,"Constructing an ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRG entry")," from a ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated text")," is done as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"create an empty/new ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG entry"),";"),(0,i.kt)("li",{parentName:"ol"},"if the ",(0,i.kt)("inlineCode",{parentName:"li"},"synonymOf")," field contains a ",(0,i.kt)("a",{parentName:"li",href:"@"},"term identifier")," that ",(0,i.kt)("a",{parentName:"li",href:"@"},"identifies"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"a ",(0,i.kt)("a",{parentName:"li",href:"@"},"curated text")," in the ",(0,i.kt)("a",{parentName:"li",href:"@"},"scope")," in which the ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG")," is being created, then copy the entire front matter of that ",(0,i.kt)("a",{parentName:"li",href:"@"},"curated text")," into the ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG entry"),";",(0,i.kt)("sup",{parentName:"li",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("li",{parentName:"ul"},"an ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG entry")," in an ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG")," other than the ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG")," that is being created, then copy that ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG entry")," into the ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG entry")," that has just been created;"))),(0,i.kt)("li",{parentName:"ol"},"if the ",(0,i.kt)("inlineCode",{parentName:"li"},"synonymOf")," field contains a text that is not a ",(0,i.kt)("a",{parentName:"li",href:"@"},"term identifier"),", raise an ",(0,i.kt)("a",{parentName:"li",href:"#exceptions"},"appropriate warning"),";"),(0,i.kt)("li",{parentName:"ol"},"copy every field in the front-matter of the ",(0,i.kt)("a",{parentName:"li",href:"@"},"curated text")," into the ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG entry"),"; if the field already exists in the ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG entry"),", it will be overwritten;"),(0,i.kt)("li",{parentName:"ol"},"discard every field that has a field name that, when converted into lowercase, matches any of the field names in the table below;"),(0,i.kt)("li",{parentName:"ol"},"add the fields in the below table with the specified contents, as follows:")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Value(s) that are assigned to the fields"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"scopetag")),(0,i.kt)("td",{parentName:"tr",align:"left"},"overwrite the ",(0,i.kt)("inlineCode",{parentName:"td"},"scopetag")," field with the ",(0,i.kt)("inlineCode",{parentName:"td"},"scopetag")," field as found in the ",(0,i.kt)("inlineCode",{parentName:"td"},"scope")," section of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"SAF"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"locator")),(0,i.kt)("td",{parentName:"tr",align:"left"},"path, relative to ",(0,i.kt)("inlineCode",{parentName:"td"},"scopedir"),"/",(0,i.kt)("inlineCode",{parentName:"td"},"curatedir"),"/, of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"curated text"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"navurl")),(0,i.kt)("td",{parentName:"tr",align:"left"},"path, relative to the URL as specified in the ",(0,i.kt)("inlineCode",{parentName:"td"},"website")," field in the ",(0,i.kt)("a",{parentName:"td",href:"/docs/tev2/spec-files/saf#terminology"},(0,i.kt)("inlineCode",{parentName:"a"},"scope")," section")," of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"SAF"),", where the rendered version of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"curated text")," is located.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"headingids")),(0,i.kt)("td",{parentName:"tr",align:"left"},"a list of the ",(0,i.kt)("a",{parentName:"td",href:"https://www.markdownguide.org/basic-syntax/#headings"},"markdown headings")," and/or ",(0,i.kt)("a",{parentName:"td",href:"https://www.markdownguide.org/extended-syntax/#linking-to-heading-ids"},"heading ids")," that are found in the ",(0,i.kt)("a",{parentName:"td",href:"@"},"curated text"),".")))),(0,i.kt)("h2",{id:"exceptions"},"Exceptions, Warnings, and Logging"),(0,i.kt)("p",null,"The general principle is that the ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRGT")," helps its users to do their jobs. This means that errors that terminate the processing are limited to the max, that warnings (perhaps at different 'levels' of detail/severity) are given output whenever possible (yet may be limited by command-line options), and that texts are tailored for the envisaged users of the tool."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRGT")," logs conditions that prevent it from properly:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"obtaining the ",(0,i.kt)("a",{parentName:"li",href:"@"},"scopedir")," from a ",(0,i.kt)("a",{parentName:"li",href:"@"},"scopetag"),";"),(0,i.kt)("li",{parentName:"ul"},"parsing a ",(0,i.kt)("a",{parentName:"li",href:"@"},"curated text")," (e.g. because it is not in the expected format);"),(0,i.kt)("li",{parentName:"ul"},"resolving ",(0,i.kt)("a",{parentName:"li",href:"@"},"terms"),", ",(0,i.kt)("a",{parentName:"li",href:"@"},"scope tags"),", ",(0,i.kt)("a",{parentName:"li",href:"@"},"group tags"),", or ",(0,i.kt)("a",{parentName:"li",href:"@"},"version tags"),";"),(0,i.kt)("li",{parentName:"ul"},"writing the output (e.g. because it has no write-permission for the designated location);"),(0,i.kt)("li",{parentName:"ul"},"etc.;")),(0,i.kt)("p",null,"Also, the ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRGT")," provides suggestions that help tool-operators (",(0,i.kt)("a",{parentName:"p",href:"@"},"curators"),") to not only identify, but also fix any problems."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"@"},"MRGT")," comes with documentation that enables developers to ascertain its correct functioning (e.g. by using a test set of files, test scripts that exercise its parameters, etc.), and also enables them to deploy the tool in a git repo and author/modify CI-pipes to use that deployment."),(0,i.kt)("h2",{id:"notes"},"Notes"),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"The algorithm ensures that an ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG entry")," for a ",(0,i.kt)("a",{parentName:"li",href:"@"},"term")," that is a ",(0,i.kt)("a",{parentName:"li",href:"@"},"synonym")," of another ",(0,i.kt)("a",{parentName:"li",href:"@"},"term")," identical to the ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG entry")," for that other ",(0,i.kt)("a",{parentName:"li",href:"@"},"term"),", but if the ",(0,i.kt)("a",{parentName:"li",href:"@"},"curated text")," that specifies the ",(0,i.kt)("a",{parentName:"li",href:"@"},"synonym")," has additional front matter (e.g. a slightly modified ",(0,i.kt)("inlineCode",{parentName:"li"},"glossaryText")," field), that front matter is retained in the ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG entry"),". It is up to the ",(0,i.kt)("a",{parentName:"li",href:"@"},"author")," of the ",(0,i.kt)("a",{parentName:"li",href:"@"},"curated text")," to make sure this does not pose any problems, and up to the ",(0,i.kt)("a",{parentName:"li",href:"@"},"ICTT")," to do appropriate checks.",(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}c.isMDXComponent=!0}}]);