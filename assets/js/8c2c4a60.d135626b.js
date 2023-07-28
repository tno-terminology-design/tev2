"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[5201],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=p(r),m=a,d=f["".concat(c,".").concat(m)]||f[m]||l[m]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},923:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return f}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=r(4996),s=["components"],c={id:"contributors-repo",sidebar_label:"Using Git Repo Markdown",scopetag:"tev2",date:20220513},p="Using Markdown files in a Git Repo",u={unversionedId:"tev2/manuals/contributors-repo",id:"tev2/manuals/contributors-repo",title:"Using Markdown files in a Git Repo",description:"<img",source:"@site/docs/tev2/manuals/contributors-repo.md",sourceDirName:"tev2/manuals",slug:"/tev2/manuals/contributors-repo",permalink:"/tev2-specifications/docs/tev2/manuals/contributors-repo",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/tev2/manuals/contributors-repo.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1690553588,formattedLastUpdatedAt:"Jul 28, 2023",frontMatter:{id:"contributors-repo",sidebar_label:"Using Git Repo Markdown",scopetag:"tev2",date:20220513},sidebar:"tev2SideBar",previous:{title:"Using Wikis (Markdown)",permalink:"/tev2-specifications/docs/tev2/manuals/contributors-wiki"},next:{title:"Using LaTeX",permalink:"/tev2-specifications/docs/tev2/manuals/contributors-LaTeX"}},l={},f=[{value:"Users contributions",id:"users-contributions",level:2},{value:"Curators tasks",id:"curators-tasks",level:2}],m={toc:f};function d(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-markdown-files-in-a-git-repo"},"Using Markdown files in a Git Repo"),(0,o.kt)("img",{alt:"This page is under construction",src:(0,i.Z)("images/wip/wip-under-construction.png")}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",(0,o.kt)("br",null),"\nAs TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.",(0,o.kt)("br",null),(0,o.kt)("a",{parentName:"p",href:"@"},"readers")," will need to see through some (currently unprocessed) notational conventions.")),(0,o.kt)("p",null,"One way in which ",(0,o.kt)("a",{parentName:"p",href:"@"},"curators")," may decide that ",(0,o.kt)("a",{parentName:"p",href:"@"},"users")," can contribute, is by enabling them to ",(0,o.kt)("a",{parentName:"p",href:"https://opensource.com/article/19/7/create-pull-request-github"},"create pull requests")," to the repository that contains the ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope's")," ",(0,o.kt)("a",{parentName:"p",href:"@"},"corpus"),". The ",(0,o.kt)("a",{parentName:"p",href:"@"},"curators")," SHOULD specify the procedures, the code of conduct, etc. that support and enable the maturing of these texts, and how it is decided that such texts can become part of the ",(0,o.kt)("a",{parentName:"p",href:"@"},"scope's")," ",(0,o.kt)("a",{parentName:"p",href:"@"},"corpus"),". That's outside the scope of this document."),(0,o.kt)("h2",{id:"users-contributions"},"Users contributions"),(0,o.kt)("p",null,"From the ",(0,o.kt)("a",{parentName:"p",href:"@"},"TEv2")," perspective, ",(0,o.kt)("a",{parentName:"p",href:"@"},"users")," contribute by creating and changing the markdown pages that describe the various ",(0,o.kt)("a",{parentName:"p",href:"@"},"knowledge artifacts"),", such as  ",(0,o.kt)("a",{parentName:"p",href:"@"},"concepts")," , ",(0,o.kt)("a",{parentName:"p",href:"@"},"use-cases"),", ",(0,o.kt)("a",{parentName:"p",href:"@"},"mental models"),", etc."),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"@"},"user")," can use ",(0,o.kt)("a",{parentName:"p",href:"@"},"term refs")," to mark the ",(0,o.kt)("a",{parentName:"p",href:"@"},"terms")," that it wants to be linked to a specific meaning (",(0,o.kt)("a",{parentName:"p",href:"@"},"knowledge artifact"),")."),(0,o.kt)("h2",{id:"curators-tasks"},"Curators tasks"),(0,o.kt)("admonition",{title:"Editor's note:",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Text has to be provided here")))}d.isMDXComponent=!0}}]);