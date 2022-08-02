"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[7330],{3735:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return h}});var o=a(3117),i=a(102),n=(a(7294),a(3905)),r=a(4996),s=["components"],l={id:"tev2-installation",title:"Installation",hide_table_of_contents:!0,scopetag:"tev2",date:20220303},p=void 0,c={unversionedId:"tev2/tev2-installation",id:"tev2/tev2-installation",title:"Installation",description:"<img",source:"@site/docs/tev2/tev2-installation.md",sourceDirName:"tev2",slug:"/tev2/tev2-installation",permalink:"/framework/docs/tev2/tev2-installation",draft:!1,editUrl:"https://github.com/essif-lab/framework/blob/master/docs/tev2/tev2-installation.md",tags:[],version:"current",lastUpdatedBy:"RieksJ",lastUpdatedAt:1659358059,formattedLastUpdatedAt:"Aug 1, 2022",frontMatter:{id:"tev2-installation",title:"Installation",hide_table_of_contents:!0,scopetag:"tev2",date:20220303},sidebar:"tev2SideBar",previous:{title:"Curators Manual",permalink:"/framework/docs/tev2/man-curators"},next:{title:"Using the tools",permalink:"/framework/docs/tev2/toolbox-specs/"}},d={},h=[{value:"Structure of Scope Directories",id:"structure-of-scope-directories",level:3},{value:"Integrating Scope Directories and the ToIP Terminology Toolbox",id:"integrating-scope-directories-and-the-toip-terminology-toolbox",level:3},{value:"Integrating Scope Directories and Third Party Rendering Tools",id:"integrating-scope-directories-and-third-party-rendering-tools",level:3}],u={toc:h};function m(t){var e=t.components,a=(0,i.Z)(t,s);return(0,n.kt)("wrapper",(0,o.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("img",{alt:"This page is under construction",src:(0,r.Z)("images/wip/wip-under-construction.png")}),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",(0,n.kt)("br",null),"\nAs TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.",(0,n.kt)("br",null),(0,n.kt)("a",{parentName:"p",href:"@"},"readers")," will need to see through some (currently unprocessed) notational conventions.")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This section on 'Installation' can really be written only after the rest is complete. The contents of this page is just a set of ideas that may well have been deprecated already.")),(0,n.kt)("admonition",{title:"Editor's note",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This page should only document the generic stuff. Any installation details that are specific to a tool SHOULD be documented in the page(s) that document the particular tool. Obviously, this page could mention the tools for which that is the case, and link to the associated sections.")),(0,n.kt)("p",null,"TEv2 is a tool for ",(0,n.kt)("a",{parentName:"p",href:"@"},"curating")," ",(0,n.kt)("a",{parentName:"p",href:"@"},"terminology"),"-related data from the perspective of a single ",(0,n.kt)("a",{parentName:"p",href:"@"},"scope"),". Installation comprises"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"setting up, or appointing an (online) directory that will serve as a ",(0,n.kt)("a",{parentName:"li",href:"@"},"scope directory"),";"),(0,n.kt)("li",{parentName:"ul"},"creating a ",(0,n.kt)("a",{parentName:"li",href:"tev2-spec-saf"},"Scope Administration File (SAF)"),", and providing the configuration of the ",(0,n.kt)("a",{parentName:"li",href:"@"},"scope")," and its ",(0,n.kt)("a",{parentName:"li",href:"@"},"terminology"),";"),(0,n.kt)("li",{parentName:"ul"},"installing the ",(0,n.kt)("a",{parentName:"li",href:"tev2-toolbox"},"tev2-toolbox"),";"),(0,n.kt)("li",{parentName:"ul"},"integrating the ",(0,n.kt)("a",{parentName:"li",href:"tev2-toolbox"},"tools")," with other tools, such as a CI/CD pipeline on github or gitlab, static site generators such as ",(0,n.kt)("a",{parentName:"li",href:"https://pages.github.com/"},"github pages")," or ",(0,n.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/docs-introduction"},"Docusaurus"),", etc. See also: ",(0,n.kt)("a",{parentName:"li",href:"toolbox-specs/readme"},"Using the Tools"),".")),(0,n.kt)("h3",{id:"structure-of-scope-directories"},"Structure of Scope Directories"),(0,n.kt)("p",null,"Depending on the other tooling that is going to be used, a ",(0,n.kt)("a",{parentName:"p",href:"@"},"scope directory")," has to be specified that is part of the (online) directory in which the ",(0,n.kt)("a",{parentName:"p",href:"@"},"terminology")," has to be used. The ",(0,n.kt)("a",{parentName:"p",href:"@"},"scope's")," ",(0,n.kt)("a",{parentName:"p",href:"saf@"},"scope administration file (SAF)")," specifies whatever needs to be administered for that ",(0,n.kt)("a",{parentName:"p",href:"@"},"scope"),"; this file is maintained by the ",(0,n.kt)("a",{parentName:"p",href:"@"},"curators")," of the scope (using a regular text editor)."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"@"},"Curators")," must also specify a location (directory) within the ",(0,n.kt)("a",{parentName:"p",href:"@"},"scope directory")," where ",(0,n.kt)("a",{parentName:"p",href:"@"},"glossaries")," are being maintained. This location holds the ",(0,n.kt)("a",{parentName:"p",href:"gdf@"},"Glossary Definition Files (GDFs)")," that are used to generate ",(0,n.kt)("a",{parentName:"p",href:"@"},"glossaries")," for different purposes, as needed. Also, this directory will (by default) contain the ",(0,n.kt)("a",{parentName:"p",href:"@"},"glossaries")," that are generated."),(0,n.kt)("h3",{id:"integrating-scope-directories-and-the-toip-terminology-toolbox"},"Integrating Scope Directories and the ToIP Terminology Toolbox"),(0,n.kt)("admonition",{title:"Editor's Note",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Content to be produced")),(0,n.kt)("h3",{id:"integrating-scope-directories-and-third-party-rendering-tools"},"Integrating Scope Directories and Third Party Rendering Tools"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"@"},"Knowledge artifacts")," are intended to also be used by/within third party rendering tools, such as ",(0,n.kt)("a",{parentName:"p",href:"https://pages.github.com/"},"github pages"),", ",(0,n.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/docs-introduction"},"Docusaurus"),", or LaTex"),(0,n.kt)("admonition",{title:"Editor's Note",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Content to be produced")))}m.isMDXComponent=!0}}]);