"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[244],{6882:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return m}});var r=a(3117),o=a(102),i=(a(7294),a(3905)),n=(a(4996),["components"]),s={id:"tev2-terminology-curation",sidebar_label:"Terminology Curation",displayed_sidebar:"tev2SideBar",scopetag:"tev2",date:20220303},p="TEv2 - Terminology Curation",l={unversionedId:"tev2/overview/tev2-terminology-curation",id:"tev2/overview/tev2-terminology-curation",title:"TEv2 - Terminology Curation",description:"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",source:"@site/docs/tev2/overview/40-tev2-terminology-curation.md",sourceDirName:"tev2/overview",slug:"/tev2/overview/tev2-terminology-curation",permalink:"/framework/docs/tev2/overview/tev2-terminology-curation",draft:!1,editUrl:"https://github.com/essif-lab/framework/blob/master/docs/tev2/overview/40-tev2-terminology-curation.md",tags:[],version:"current",lastUpdatedBy:"RieksJ",lastUpdatedAt:1660917017,formattedLastUpdatedAt:"Aug 19, 2022",sidebarPosition:40,frontMatter:{id:"tev2-terminology-curation",sidebar_label:"Terminology Curation",displayed_sidebar:"tev2SideBar",scopetag:"tev2",date:20220303},sidebar:"tev2SideBar",previous:{title:"Architecture",permalink:"/framework/docs/tev2/overview/tev2-architecture"},next:{title:"Terminology Support",permalink:"/framework/docs/tev2/terms/patterns/terminology-support"}},c={},m=[],u={toc:m};function d(e){var t=e.components,a=(0,o.Z)(e,n);return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tev2---terminology-curation"},"TEv2 - Terminology Curation"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",(0,i.kt)("br",null),"\nAs TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.",(0,i.kt)("br",null),(0,i.kt)("a",{parentName:"p",href:"@"},"readers")," will need to see through some (currently unprocessed) notational conventions.")),(0,i.kt)("admonition",{title:"Editor's note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This section may need to be revised, and/or moved to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/tev2/manuals/curator"},"Curators Manual"),".")),(0,i.kt)("p",null,"TEv2 assumes that the ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated")," data resides in an existing ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope directory"),", and that ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated files")," are expected to be processable by other tools, including, but not limited to ",(0,i.kt)("a",{parentName:"p",href:"https://pages.github.com/"},"github pages")," or ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/docs-introduction"},"Docusaurus"),", which are static site generators for web sites that document all sorts of guidance, specifications, etc. Such a ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope directory")," must be ",(0,i.kt)("a",{parentName:"p",href:"/docs/tev2/manuals/tev2-installation"},"set up")," in advance."),(0,i.kt)("p",null,"Thus, whenever a ",(0,i.kt)("a",{parentName:"p",href:"@"},"terms-community")," decided that some contribution is to be included in the part of the ",(0,i.kt)("a",{parentName:"p",href:"@"},"corpus")," that is maintained by that ",(0,i.kt)("a",{parentName:"p",href:"terms-community@"},"community"),", the ",(0,i.kt)("a",{parentName:"p",href:"@"},"curators")," of that ",(0,i.kt)("a",{parentName:"p",href:"terms-community@"},"community")," are tasked to"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"create/maintain/update any ",(0,i.kt)("a",{parentName:"li",href:"@"},"scope"),"-related administration in the ",(0,i.kt)("a",{parentName:"li",href:"@"},"scope directory")," that is needed for curation, as specified by a ","[Scope Administration File (SAF)]","/tev2/spec-files/saf;"),(0,i.kt)("li",{parentName:"ol"},"convert that contribution to (a set of) ",(0,i.kt)("a",{parentName:"li",href:"@"},"curated files"),", that comply with the ",(0,i.kt)("a",{parentName:"li",href:"/docs/tev2/spec-files/ctext"},"specifications")," for such files;"),(0,i.kt)("li",{parentName:"ol"},"store them at the location as designated in the ","[SAF]","/tev2/spec-files/saf;"),(0,i.kt)("li",{parentName:"ol"},"generate/update any artifact that the ",(0,i.kt)("a",{parentName:"li",href:"terms-community@"},"community")," wants to automatically maintain, which in particular includes the ",(0,i.kt)("a",{parentName:"li",href:"@"},"MRG")," and associated ",(0,i.kt)("a",{parentName:"li",href:"@"},"HRG"),".")),(0,i.kt)("p",null,"This document provides an overview of the knowledge that ",(0,i.kt)("a",{parentName:"p",href:"@"},"curators")," may need to perform this task, which can be broken up in the following parts:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/tev2/manuals/tev2-installation"},"Setup/installation")," of a ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope directory")," that is suitable for working with TEv2, and the creation of a ","[SAF]","/tev2/spec-files/saf.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"@"},"Curation")," of terminological contributions. This requires knowledge about the ",(0,i.kt)("a",{parentName:"p",href:"/docs/tev2/spec-files/ctext"},"file structure")," of ",(0,i.kt)("a",{parentName:"p",href:"@"},"curated file"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/tev2/tev2-toolbox"},"generation")," of ",(0,i.kt)("a",{parentName:"p",href:"@"},"knowledge artifacts"),". It is typical for a ",(0,i.kt)("a",{parentName:"p",href:"@"},"terms community")," to want to have a ",(0,i.kt)("a",{parentName:"p",href:"@"},"glossary")," of the terms they either have defined themselves, or are defined elsewhere but are to be used within that ",(0,i.kt)("a",{parentName:"p",href:"@"},"community"),". However, other artifacts may be generated as well (a ",(0,i.kt)("a",{parentName:"p",href:"@"},"dictionary"),", white papers, etc.) - this is all up to the ",(0,i.kt)("a",{parentName:"p",href:"@"},"community"),"."))))}d.isMDXComponent=!0}}]);