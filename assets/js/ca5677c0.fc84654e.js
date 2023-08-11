"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[1550],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(r),f=n,d=m["".concat(p,".").concat(f)]||m[f]||l[f]||i;return r?a.createElement(d,o(o({ref:t},u),{},{components:r})):a.createElement(d,o({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9529:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return m}});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),o=r(4996),s=["components"],p={id:"contributors-wiki",sidebar_label:"Using Wikis (Markdown)",scopetag:"tev2",date:20220513},c="Using Wikis",u={unversionedId:"manuals/contributors-wiki",id:"manuals/contributors-wiki",title:"Using Wikis",description:"<img",source:"@site/docs/manuals/contributors-wiki.md",sourceDirName:"manuals",slug:"/manuals/contributors-wiki",permalink:"/tev2-specifications/docs/manuals/contributors-wiki",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/manuals/contributors-wiki.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1691748622,formattedLastUpdatedAt:"Aug 11, 2023",frontMatter:{id:"contributors-wiki",sidebar_label:"Using Wikis (Markdown)",scopetag:"tev2",date:20220513},sidebar:"tev2SideBar",previous:{title:"Contributors",permalink:"/tev2-specifications/docs/manuals/contributor"},next:{title:"Using Git Repo Markdown",permalink:"/tev2-specifications/docs/manuals/contributors-repo"}},l={},m=[{value:"Users contributions",id:"users-contributions",level:2},{value:"Curators tasks",id:"curators-tasks",level:2}],f={toc:m};function d(e){var t=e.components,r=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"using-wikis"},"Using Wikis"),(0,i.kt)("img",{alt:"This page is under construction",src:(0,o.Z)("images/wip/wip-under-construction.png")}),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",(0,i.kt)("br",null),"\nAs TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.",(0,i.kt)("br",null),(0,i.kt)("a",{parentName:"p",href:"@"},"readers")," will need to see through some (currently unprocessed) notational conventions.")),(0,i.kt)("p",null,"One way in which ",(0,i.kt)("a",{parentName:"p",href:"@"},"curators")," may decide that ",(0,i.kt)("a",{parentName:"p",href:"@"},"users")," can contribute, is by providing a ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Wiki"},"wiki")," that the ",(0,i.kt)("a",{parentName:"p",href:"@"},"users")," are encouraged to edit, discuss, and evolve to a level of maturity that warrants the text to be ",(0,i.kt)("a",{parentName:"p",href:"@"},"ingested")," into the ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope's")," ",(0,i.kt)("a",{parentName:"p",href:"@"},"corpus"),". The ",(0,i.kt)("a",{parentName:"p",href:"@"},"curators")," SHOULD specify the procedures, the code of conduct, etc. that support and enable the maturing of these texts, and how it is decided that such texts can become part of the ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope's")," ",(0,i.kt)("a",{parentName:"p",href:"@"},"corpus"),". That's outside the scope of this document."),(0,i.kt)("h2",{id:"users-contributions"},"Users contributions"),(0,i.kt)("p",null,"From the ",(0,i.kt)("a",{parentName:"p",href:"@"},"TEv2")," perspective, ",(0,i.kt)("a",{parentName:"p",href:"@"},"users")," may contribute by ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/communities/documenting-your-project-with-wikis/adding-or-editing-wiki-pages"},"creating or editing wiki-pages")," for a specific ",(0,i.kt)("a",{parentName:"p",href:"@"},"knowledge artifact"),". The ",(0,i.kt)("a",{parentName:"p",href:"@"},"curators")," would typically already have various wiki-pages, each of which serves as a template for e.g. the ",(0,i.kt)("a",{parentName:"p",href:"@"},"definition")," of a ",(0,i.kt)("a",{parentName:"p",href:"@"},"concept")," or ",(0,i.kt)("a",{parentName:"p",href:"@"},"term"),", a ",(0,i.kt)("a",{parentName:"p",href:"@"},"use-case"),", a ",(0,i.kt)("a",{parentName:"p",href:"@"},"mental model"),", or any other kind of ",(0,i.kt)("a",{parentName:"p",href:"@"},"knowledge artifact")," that is relevant within the ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope"),"."),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"@"},"user")," can take the template, and follow the associated instructions (e.g. provide content for the various sections). That's basically it."),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"@"},"user")," can use ",(0,i.kt)("a",{parentName:"p",href:"@"},"TermRefs")," to mark the terms that it wants to be linked to a specific meaning (",(0,i.kt)("a",{parentName:"p",href:"@"},"knowledge artifact"),")."),(0,i.kt)("h2",{id:"curators-tasks"},"Curators tasks"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"@"},"Curators")," that have decided to use a ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Wiki"},"wiki")," as a means for ",(0,i.kt)("a",{parentName:"p",href:"@"},"users")," to contribute to the development of it's ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope's")," ",(0,i.kt)("a",{parentName:"p",href:"@"},"corpus"),", should do the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If you do not already have one, ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/get-started/signing-up-for-github/signing-up-for-a-new-github-account"},"create a git account"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/get-started/quickstart/create-a-repo"},"Create a (git) repository"),", either a brand new one, or ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template"},"from a template"),"."))),(0,i.kt)("admonition",{title:"Editor's note:",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Additional steps need to be written here.\nThe idea is")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"(etc.)")))}d.isMDXComponent=!0}}]);