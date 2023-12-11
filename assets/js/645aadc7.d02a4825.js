"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[5025],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var n=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(o),m=i,u=f["".concat(l,".").concat(m)]||f[m]||d[m]||a;return o?n.createElement(u,r(r({ref:t},p),{},{components:o})):n.createElement(u,r({ref:t},p))}));function m(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=o.length,r=new Array(a);r[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<a;c++)r[c]=o[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}f.displayName="MDXCreateElement"},2559:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=o(3117),i=(o(7294),o(3905));const a={},r="Installation",s={unversionedId:"spec-tools/tool-docs/trrt/installation",id:"spec-tools/tool-docs/trrt/installation",title:"Installation",description:"Prerequisites",source:"@site/docs/spec-tools/tool-docs/trrt/1-installation.md",sourceDirName:"spec-tools/tool-docs/trrt",slug:"/spec-tools/tool-docs/trrt/installation",permalink:"/tev2-specifications/docs/spec-tools/tool-docs/trrt/installation",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/spec-tools/tool-docs/trrt/1-installation.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1702288678,formattedLastUpdatedAt:"Dec 11, 2023",sidebarPosition:1,frontMatter:{},sidebar:"tev2SideBar",previous:{title:"Testing",permalink:"/tev2-specifications/docs/spec-tools/tool-docs/mrg-import/testing"},next:{title:"Usage",permalink:"/tev2-specifications/docs/spec-tools/tool-docs/trrt/usage"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Quick Installation",id:"quick-installation",level:2}],p={toc:c};function d(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installation"},"Installation"),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Before proceeding with the installation, ensure that you have the following prerequisites installed on your system:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"http://nodejs.org/"},"Node.js"),": The ",(0,i.kt)("a",{href:"/tev2-specifications/docs/spec-tools/trrt",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT")," is a Node.js-based tool, so you need to have ",(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"Node.js")," installed on your system. You can download Node.js from the official website: ",(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"Node.js Download Page")," or use ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/nvm-sh/nvm"},"nvm")," for managing multiple Node versions on a single machine installed."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/get-npm"},"npm"),": npm (Node Package Manager) is bundled with Node.js and is used to manage dependencies and packages for Node.js applications. Although you could install the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/spec-tools/trrt",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT")," using ",(0,i.kt)("inlineCode",{parentName:"li"},"git clone")," and build the package yourself (see ",(0,i.kt)("a",{parentName:"li",href:"testing"},"testing"),"), obtaining/installing the built package through npm is documented below.")),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{href:"/tev2-specifications/docs/spec-tools/trrt",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT")," has been tested on ",(0,i.kt)("a",{parentName:"p",href:"http://nodejs.org/"},"Node.js")," v18 (LTS) through v20. While the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/spec-tools/trrt",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT")," should work with newer versions of ",(0,i.kt)("a",{parentName:"p",href:"http://nodejs.org/"},"Node.js"),", it is essential to be aware of potential compatibility issues with older versions. If you encounter any problems or unexpected behavior while using the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/spec-tools/trrt",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT")," with a different ",(0,i.kt)("a",{parentName:"p",href:"http://nodejs.org/"},"Node.js")," version, consider using any of the versions specified above."),(0,i.kt)("h2",{id:"quick-installation"},"Quick Installation"),(0,i.kt)("p",null,"Refer to ",(0,i.kt)("a",{parentName:"p",href:"deployment"},"deployment")," for a complete example of how the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/spec-tools/trrt",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT")," and its prerequisites may be installed and deployed."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install the latest version of the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/spec-tools/trrt",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT")," globally by running the following ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@tno-terminoloy-design/trrt"},"npm")," command."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g @tno-terminology-design/trrt\n")),(0,i.kt)("p",{parentName:"li"},"This will install the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/spec-tools/trrt",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT")," globally on your system, making it available as a command-line tool.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Verify that the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/spec-tools/trrt",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT")," is installed correctly by running the following command."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"trrt --version\n")),(0,i.kt)("p",{parentName:"li"},"This should display the version number of the ",(0,i.kt)("a",{href:"/tev2-specifications/docs/spec-tools/trrt",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT"),", confirming that the installation was successful."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"For configuration and usage of the tool please refer to the ",(0,i.kt)("a",{parentName:"strong",href:"usage"},"usage")," section next.")))}d.isMDXComponent=!0}}]);