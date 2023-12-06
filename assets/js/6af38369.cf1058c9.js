"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[3356],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(o),h=r,u=d["".concat(l,".").concat(h)]||d[h]||m[h]||i;return o?n.createElement(u,a(a({ref:t},c),{},{components:o})):n.createElement(u,a({ref:t},c))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var p=2;p<i;p++)a[p]=o[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},9635:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=o(3117),r=(o(7294),o(3905));const i={},a="Testing",s={unversionedId:"spec-tools/tool-docs/mrg-import/testing",id:"spec-tools/tool-docs/mrg-import/testing",title:"Testing",description:"When cloning the entire MRG Import Tool repository, you will also get certain files to test the behavior of the tool. These test files are located in the tests directory, and include a content folder and an automated test written for the mocha test framework and chai assertion library. This automated test can be executed by running the following command inside the MRG Import Tool repository clone:",source:"@site/docs/spec-tools/tool-docs/mrg-import/5-testing.md",sourceDirName:"spec-tools/tool-docs/mrg-import",slug:"/spec-tools/tool-docs/mrg-import/testing",permalink:"/tev2-specifications/docs/spec-tools/tool-docs/mrg-import/testing",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/spec-tools/tool-docs/mrg-import/5-testing.md",tags:[],version:"current",lastUpdatedBy:"Rieks",lastUpdatedAt:1701892704,formattedLastUpdatedAt:"Dec 6, 2023",sidebarPosition:5,frontMatter:{},sidebar:"tev2SideBar",previous:{title:"Error Reporting",permalink:"/tev2-specifications/docs/spec-tools/tool-docs/mrg-import/error-reporting"},next:{title:"Installation",permalink:"/tev2-specifications/docs/spec-tools/tool-docs/trrt/installation"}},l={},p=[],c={toc:p};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"testing"},"Testing"),(0,r.kt)("p",null,"When cloning the entire ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tno-terminology-design/mrg-import"},"MRG Import Tool repository"),", you will also get certain files to test the behavior of the tool. These test files are located in the ",(0,r.kt)("inlineCode",{parentName:"p"},"__tests__")," directory, and include a ",(0,r.kt)("inlineCode",{parentName:"p"},"content")," folder and an automated test written for the ",(0,r.kt)("a",{parentName:"p",href:"https://mochajs.org/"},"mocha")," test framework and ",(0,r.kt)("a",{parentName:"p",href:"https://www.chaijs.com/"},"chai")," assertion library. This automated test can be executed by running the following command inside the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tno-terminology-design/mrg-import"},"MRG Import Tool repository")," clone: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm test\n")),(0,r.kt)("p",null,"which should execute the ",(0,r.kt)("inlineCode",{parentName:"p"},"mocha __tests__/**/*.test.js")," command and run all available unit tests.\nKeep in mind that working with a clone of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tno-terminology-design/mrg-import"},"MRG Import Tool repository")," instead of the ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@tno-terminoloy-design/mrg-import"},"npm package")," will result in an uncompiled version of the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/spec-tools/mrg-import",hovertext:"MRG Import (Tool): is a tool in the TEv2 toolbox that is run within a particular Scope for the purpose of obtaining MRGs from other Scopes, as specified in the Scope's SAF, and putting them in the Scope's Glossarydir."},"MRG Import Tool")," as the built files are not stored in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tno-terminology-design/mrg-import"},"MRG Import Tool repository"),". This uncompiled version will need the dependencies to be compiled, which in addition to compiling/building can be achieved by executing:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\nnpm run build\n")),(0,r.kt)("p",null,"after which the tool can be installed using:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g\n")),(0,r.kt)("p",null,"If you are planning on modifying any code: a rebuild command is also available, which uninstalls the latest package, removes the build folder, re-builds, and re-installs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run rebuild\n")),(0,r.kt)("p",null,"The current available test (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tno-terminology-design/mrg-import/blob/main/__tests__/mrg-import.test.js"},"_","_tests__/mrg-import.test.js"),"), runs the ",(0,r.kt)("a",{href:"/tev2-specifications/docs/spec-tools/mrg-import",hovertext:"MRG Import (Tool): is a tool in the TEv2 toolbox that is run within a particular Scope for the purpose of obtaining MRGs from other Scopes, as specified in the Scope's SAF, and putting them in the Scope's Glossarydir."},"MRG Import Tool")," on the test files located in the ",(0,r.kt)("inlineCode",{parentName:"p"},"content")," folder and checks if the number of terms that have been converted correspond with the amount of terms found by the external regex matching of the test script."))}m.isMDXComponent=!0}}]);