"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[5706],{9784:function(e,t,a){a.r(t),a.d(t,{Mark:function(){return d},assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return m}});var r=a(3117),n=a(102),i=(a(7294),a(3905)),o=a(4996),s=["components"],p={id:"curator",title:"Curators Manual - Overview",sidebar_label:"Curators",displayed_sidebar:"tev2SideBar",scopetag:"tev2",date:20220513},l=void 0,c={unversionedId:"tev2/manuals/curator",id:"tev2/manuals/curator",title:"Curators Manual - Overview",description:"<img",source:"@site/docs/tev2/manuals/curator.md",sourceDirName:"tev2/manuals",slug:"/tev2/manuals/curator",permalink:"/framework/docs/tev2/manuals/curator",draft:!1,editUrl:"https://github.com/essif-lab/framework/blob/master/docs/tev2/manuals/curator.md",tags:[],version:"current",lastUpdatedBy:"RieksJ",lastUpdatedAt:1659451841,formattedLastUpdatedAt:"Aug 2, 2022",frontMatter:{id:"curator",title:"Curators Manual - Overview",sidebar_label:"Curators",displayed_sidebar:"tev2SideBar",scopetag:"tev2",date:20220513},sidebar:"tev2SideBar",previous:{title:"Authors",permalink:"/framework/docs/tev2/manuals/author"},next:{title:"Installation",permalink:"/framework/docs/tev2/manuals/tev2-installation"}},u={},m=[],d=function(e){var t=e.children;return(0,i.kt)("span",{style:{color:"black",backgroundColor:"yellow",padding:"0.2rem",borderRadius:"2px"}},t)},h={toc:m,Mark:d};function f(e){var t=e.components,a=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("img",{alt:"This page is under construction",src:(0,o.Z)("images/wip/wip-under-construction.png")}),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",(0,i.kt)("br",null),"\nAs TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.",(0,i.kt)("br",null),(0,i.kt)("a",{parentName:"p",href:"@"},"readers")," will need to see through some (currently unprocessed) notational conventions.")),(0,i.kt)("p",null,"The Terminology Engine (v2) is a set of specifications and tools that caters for the creation and maintenance (i.e. ",(0,i.kt)("a",{parentName:"p",href:"@"},"curation"),") of ",(0,i.kt)("a",{parentName:"p",href:"@"},"terminologies"),", as well as for its subsequent use in publications of different types (e.g. websites, whitepapers) and formats (e.g. html, LaTex), as appropriate for different, individual ",(0,i.kt)("a",{parentName:"p",href:"@"},"scopes"),"."),(0,i.kt)("p",null,"The task of ",(0,i.kt)("a",{parentName:"p",href:"@"},"curators")," is to create/maintain the ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope directory")," that they are tasked to ",(0,i.kt)("a",{parentName:"p",href:"@"},"curate"),". This Curators Manual is intended to help them do this."),(0,i.kt)("admonition",{title:"Editor's note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This section needs to be revised from here onward")),(0,i.kt)("p",null,"TEv2 assumes that the ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated")," data resides in an existing ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope directory"),", and that ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated files")," are expected to be processable by other tools, including, but not limited to ",(0,i.kt)("a",{parentName:"p",href:"https://pages.github.com/"},"github pages")," or ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/docs-introduction"},"Docusaurus"),", which are static site generators for web sites that document all sorts of guidance, specifications, etc. Such a ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope directory")," must be ",(0,i.kt)("a",{parentName:"p",href:"/docs/tev2/manuals/tev2-installation"},"set up")," in advance."),(0,i.kt)("p",null,"Thus, whenever a ",(0,i.kt)("a",{parentName:"p",href:"@"},"terms-community")," decided that some contribution is to be included in the part of the ",(0,i.kt)("a",{parentName:"p",href:"@"},"corpus")," that is maintained by that ",(0,i.kt)("a",{parentName:"p",href:"terms-community@"},"community"),", the ",(0,i.kt)("a",{parentName:"p",href:"@"},"curators")," of that ",(0,i.kt)("a",{parentName:"p",href:"terms-community@"},"community")," are tasked to"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"create/maintain/update any ",(0,i.kt)("a",{parentName:"li",href:"@"},"scope"),"-related administration in the ",(0,i.kt)("a",{parentName:"li",href:"@"},"scope directory")," that is needed for curation, as specified by a ","[Scope Administration File (SAF)]","/tev2/spec-files/saf;"),(0,i.kt)("li",{parentName:"ol"},"convert that contribution to (a set of) ",(0,i.kt)("a",{parentName:"li",href:"@"},"curated files"),", that comply with the ",(0,i.kt)("a",{parentName:"li",href:"/docs/tev2/ctext"},"specifications")," for such files;"),(0,i.kt)("li",{parentName:"ol"},"store them at the location as designated in the ","[SAF]","/tev2/spec-files/saf;"),(0,i.kt)("li",{parentName:"ol"},"generate/update any artifact that the ",(0,i.kt)("a",{parentName:"li",href:"terms-community@"},"community")," wants to automatically maintain, which in particular includes the ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG")," and associated ",(0,i.kt)("a",{parentName:"li",href:"@"},"HRG"),".")),(0,i.kt)("p",null,"This document provides an overview of the knowledge that ",(0,i.kt)("a",{parentName:"p",href:"@"},"curators")," may need to perform this task, which can be broken up in the following parts:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/tev2/manuals/tev2-installation"},"Setup/installation")," of a ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope directory")," that is suitable for working with TEv2, and the creation of a ","[SAF]","/tev2/spec-files/saf.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"@"},"Curation")," of terminological contributions. This requires knowledge about the ",(0,i.kt)("a",{parentName:"p",href:"/docs/tev2/ctext"},"file structure")," of ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated file"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/tev2/spec-tools/readme"},"generation")," of ",(0,i.kt)("a",{parentName:"p",href:"@"},"knowledge artifacts"),". It is typical for a ",(0,i.kt)("a",{parentName:"p",href:"@"},"terms community")," to want to have a ",(0,i.kt)("a",{parentName:"p",href:"@"},"glossary")," of the terms they either have defined themselves, or are defined elsewhere but are to be used within that ",(0,i.kt)("a",{parentName:"p",href:"@"},"community"),". However, other artifacts may be generated as well (a ",(0,i.kt)("a",{parentName:"p",href:"@"},"dictionary"),", white papers, etc.) - this is all up to the ",(0,i.kt)("a",{parentName:"p",href:"@"},"community"),"."))))}f.isMDXComponent=!0}}]);