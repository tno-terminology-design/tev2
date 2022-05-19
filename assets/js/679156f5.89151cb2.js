"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[8764],{2360:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),r=a(6010),i="tabItem_OmH5";function o(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:a},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(3117),r=a(7294),i=a(2389),o=a(7392),s=a(7094),l=a(2466),d=a(6010),u="tabList_uSqn",p="tabItem_LplD";function c(e){var t,a,i,c=e.lazy,h=e.block,m=e.defaultValue,f=e.values,k=e.groupId,g=e.className,N=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=f?f:N.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,o.l)(b,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(a=N.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(i=N[0])?void 0:i.props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),x=w.tabGroupChoices,T=w.setTabGroupChoices,C=(0,r.useState)(y),D=C[0],E=C[1],I=[],H=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var L=x[k];null!=L&&L!==D&&b.some((function(e){return e.value===L}))&&E(L)}var Z=function(e){var t=e.currentTarget,a=I.indexOf(t),n=b[a].value;n!==D&&(H(t),E(n),null!=k&&T(k,n))},_=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=I.indexOf(e.currentTarget)+1;a=I[n]||I[0];break;case"ArrowLeft":var r=I.indexOf(e.currentTarget)-1;a=I[r]||I[I.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,d.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":h},g)},b.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:D===t?0:-1,"aria-selected":D===t,key:t,ref:function(e){return I.push(e)},onKeyDown:_,onFocus:Z,onClick:Z},i,{className:(0,d.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":D===t})}),null!=a?a:t)}))),c?(0,r.cloneElement)(N.filter((function(e){return e.props.value===D}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},N.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==D})}))))}function h(e){var t=(0,i.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}},1208:function(e,t,a){a.r(t),a.d(t,{Mark:function(){return c},assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var n=a(3117),r=a(102),i=(a(7294),a(3905)),o=(a(4996),a(9877),a(2360),["components"]),s={id:"ctext-use-case",title:"Curated Texts of type `use-case`",sidebar_label:"Use Cases",scopetag:"tev2",date:20220303},l=void 0,d={unversionedId:"tev2/ctext-use-case",id:"tev2/ctext-use-case",title:"Curated Texts of type `use-case`",description:"text to mark",source:"@site/docs/tev2/ctext-use-case.md",sourceDirName:"tev2",slug:"/tev2/ctext-use-case",permalink:"/framework/docs/tev2/ctext-use-case",draft:!1,editUrl:"https://github.com/essif-lab/framework/-/tree/master/docs/tev2/ctext-use-case.md",tags:[],version:"current",frontMatter:{id:"ctext-use-case",title:"Curated Texts of type `use-case`",sidebar_label:"Use Cases",scopetag:"tev2",date:20220303}},u={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Header",id:"header",level:2},{value:"Body",id:"body",level:2}],c=function(e){var t=e.children;return(0,i.kt)("span",{style:{color:"black",backgroundColor:"yellow",padding:"0.2rem",borderRadius:"2px"}},t)},h={toc:p,Mark:c};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction"))),(0,i.kt)("p",null,"This document specifies what specifics of ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated texts")," that describe ",(0,i.kt)("a",{parentName:"p",href:"@"},"terminological artifacts")," of type ",(0,i.kt)("inlineCode",{parentName:"p"},"use-case"),". The reader is assumed to be familiar with the ",(0,i.kt)("a",{parentName:"p",href:"ctext"},"generic structure of a curated text"),"."),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"@"},"Use-case")," is a description of a situation that illustrates the needs (or specifies requirements) for having something, e.g. capabilities, or things that enable one to do something. A use-case describes a situation in which the use of something (e.g. a ",(0,i.kt)("a",{parentName:"p",href:"@"},"concept"),", ",(0,i.kt)("a",{parentName:"p",href:"@"},"pattern"),", software system, etc.) is beneficial."),(0,i.kt)("p",null,"A good description helps ",(0,i.kt)("a",{parentName:"p",href:"@"},"readers")," to illustrate the benefits of ",(0,i.kt)("a",{parentName:"p",href:"@"},"concepts")," and ",(0,i.kt)("a",{parentName:"p",href:"@"},"patterns"),", test ",(0,i.kt)("a",{parentName:"p",href:"@"},"definitions"),", and identify ",(0,i.kt)("a",{parentName:"p",href:"@essif-lab"},"risks"),". In short, it augments one understanding."),(0,i.kt)("h2",{id:"header"},"Header"),(0,i.kt)("p",null," In this section, we describe the header fields that are specific for ",(0,i.kt)("a",{parentName:"p",href:"@"},"terminological artifacts")," of type ",(0,i.kt)("inlineCode",{parentName:"p"},"use-case"),":"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Legend"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Name"))," contains the field name;"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Req'd"))," specifies whether (",(0,i.kt)("inlineCode",{parentName:"li"},"Y"),") or not (",(0,i.kt)("inlineCode",{parentName:"li"},"n"),") the field is required to be present as a header field."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Description"))," specifies the meaning of the field, and other things you may need to know, e.g. why it is needed, a required syntax, etc."))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Req'd"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"term")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Y"),(0,i.kt)("td",{parentName:"tr",align:null},"Text that is the name of the ",(0,i.kt)("a",{parentName:"td",href:"@"},"use-case")," in (human readable) texts. It is typically used to represent the ",(0,i.kt)("a",{parentName:"td",href:"@"},"use-case")," itself, but also to represent arbitrary/unspecified instances thereof. This text will show as an entry in the ",(0,i.kt)("a",{parentName:"td",href:"@"},"HRG"),".",(0,i.kt)("br",null),"Examples: ",'["Handling a contribution", "Glossary generation"]')))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Example of a complete Use-case Header"),(0,i.kt)(c,{mdxType:"Mark"},"Revise the YAML code below"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"---\n"))),(0,i.kt)("h2",{id:"body"},"Body"),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/basic-syntax/"},"markdown")," body consists of one or more sections that each have a ",(0,i.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/basic-syntax/#headings"},"heading"),", optionally followed by a ",(0,i.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/extended-syntax/#heading-ids"},"heading id"),". We provide suggestions for a variety of sections, that we think help ",(0,i.kt)("a",{parentName:"p",href:"@"},"readers")," get a good understanding of the ",(0,i.kt)("a",{parentName:"p",href:"@"},"concept")," that is described."),(0,i.kt)("p",null,"We have placed the suggestions in an order that we think makes for good reading. However, if you think otherwise, you are free to change this order, leave out sections, and/or add your own."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Legend (and suggestions for using your own headings)"),(0,i.kt)("p",null,"The body is expected to consist of sections of text, for which we provide suggestions for the ",(0,i.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/basic-syntax/#headings"},"section headings"),". A section consists of a header and further text, as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},"## <Heading> {#<heading-id>}\n\nfurther text goes here.\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"heading-id")," is important, as authors can use it in a ",(0,i.kt)("a",{parentName:"p",href:"@"},"term ref")," to refer to this particular section. Therefore, you SHOULD stick to the suggestions for the ",(0,i.kt)("inlineCode",{parentName:"p"},"heading-id")," if you write such a section."),(0,i.kt)("p",null,"The table that contains the suggestions has the following columns:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Heading")," shows a name we suggest for a particular section. If you use this suggestion, you do not need to also provide the ",(0,i.kt)("inlineCode",{parentName:"li"},"Heading ID")," (because it is automatically arranged for)."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"heading-id")," specifies the text to be used as a ",(0,i.kt)("a",{parentName:"li",href:"https://www.markdownguide.org/extended-syntax/#heading-id"},"heading id")," in the case that the author of the section decides to use a different heading as the one that is suggested."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Description")," describes the kinds of content you may want to put in the section, and what ",(0,i.kt)("a",{parentName:"li",href:"@"},"readers")," expect that they would know, or could do after having read the text."))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Heading"),(0,i.kt)("th",{parentName:"tr",align:null},"heading-id"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Purpose"),(0,i.kt)("td",{parentName:"tr",align:null},"purpose"),(0,i.kt)("td",{parentName:"tr",align:null},"Text that describes why the ",(0,i.kt)("a",{parentName:"td",href:"@"},"use-case")," is needed. What purposes does it serve? What can you do with it that you cannot do (as well) without it? What ",(0,i.kt)("a",{parentName:"td",href:"@essif-lab"},"objectives")," does it help realize? Why is this ",(0,i.kt)("a",{parentName:"td",href:"@"},"use-case")," relevant within its scope of definition?")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Introduction"),(0,i.kt)("td",{parentName:"tr",align:null},"introduction"),(0,i.kt)("td",{parentName:"tr",align:null},"Text that gently introduces the ",(0,i.kt)("a",{parentName:"td",href:"@"},"use-case")," and its context to the ",(0,i.kt)("a",{parentName:"td",href:"@"},"reader")," - preferably in casual terms. You can state whatever you think your audience needs to keep on reading and, ultimately, change their minds.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Informal Description"),(0,i.kt)("td",{parentName:"tr",align:null},"informal-description"),(0,i.kt)("td",{parentName:"tr",align:null},"Text that describes the ",(0,i.kt)("a",{parentName:"td",href:"@"},"use-case")," in a colloquial way, meant to ensure the ",(0,i.kt)("a",{parentName:"td",href:"@"},"reader")," will not face any surprises if she continues to read to the more formal parts.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Formal Description"),(0,i.kt)("td",{parentName:"tr",align:null},"formal-description"),(0,i.kt)("td",{parentName:"tr",align:null},"Text that describes the ",(0,i.kt)("a",{parentName:"td",href:"@"},"use-case")," in a formal way, possibly with a figure and formal notations. This text would enable people to create formal models, e.g. in RDFS, OWL or other semantic languages.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Notes"),(0,i.kt)("td",{parentName:"tr",align:null},"notes"),(0,i.kt)("td",{parentName:"tr",align:null},"Text that may be of importance to ",(0,i.kt)("a",{parentName:"td",href:"@"},"readers"),", but that doesn't fit anywhere else.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"References"),(0,i.kt)("td",{parentName:"tr",align:null},"references"),(0,i.kt)("td",{parentName:"tr",align:null},"List references to other texts, standards, (scientific) articles, applicable legislation, git repo's, etc., as appropriate.")))))}m.isMDXComponent=!0}}]);