"use strict";(self.webpackChunktev2_specifications=self.webpackChunktev2_specifications||[]).push([[5720],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var i=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,i,a=function(e,t){if(null==e)return{};var o,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)o=n[i],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)o=n[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(o),m=a,h=f["".concat(l,".").concat(m)]||f[m]||d[m]||n;return o?i.createElement(h,r(r({ref:t},p),{},{components:o})):i.createElement(h,r({ref:t},p))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,r=new Array(n);r[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<n;c++)r[c]=o[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,o)}f.displayName="MDXCreateElement"},9187:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var i=o(3117),a=(o(7294),o(3905));const n={},r="Deployment",s={unversionedId:"spec-tools/tool-docs/trrt/deployment",id:"spec-tools/tool-docs/trrt/deployment",title:"Deployment",description:"TRRT Example",source:"@site/docs/spec-tools/tool-docs/trrt/4-deployment.md",sourceDirName:"spec-tools/tool-docs/trrt",slug:"/spec-tools/tool-docs/trrt/deployment",permalink:"/tev2-specifications/docs/spec-tools/tool-docs/trrt/deployment",draft:!1,editUrl:"https://github.com/tno-terminology-design/tev2-specifications/blob/master/docs/spec-tools/tool-docs/trrt/4-deployment.md",tags:[],version:"current",lastUpdatedBy:"Ca5e",lastUpdatedAt:1700853879,formattedLastUpdatedAt:"Nov 24, 2023",sidebarPosition:4,frontMatter:{},sidebar:"tev2SideBar",previous:{title:"Customization",permalink:"/tev2-specifications/docs/spec-tools/tool-docs/trrt/customization"},next:{title:"Error Reporting",permalink:"/tev2-specifications/docs/spec-tools/tool-docs/trrt/error-reporting"}},l={},c=[{value:"TRRT Example",id:"trrt-example",level:2},{value:"Example Deployment Case",id:"example-deployment-case",level:2},{value:"Executed Steps",id:"executed-steps",level:3}],p={toc:c};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deployment"},"Deployment"),(0,a.kt)("h2",{id:"trrt-example"},"TRRT Example"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{href:"/tev2-specifications/docs/spec-tools/trrt",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT")," is designed to be usable in both a command-line interface and a CI/CD pipeline. Features like the ",(0,a.kt)("a",{parentName:"p",href:"usage#configuration-file"},"configuration file"),", make the execution of the tool easily maintainable, and ",(0,a.kt)("a",{parentName:"p",href:"error-reporting"},"error reporting")," is available to assist further in the resolution of terms."),(0,a.kt)("p",null,"The GitHub repository of the ",(0,a.kt)("a",{href:"/tev2-specifications/docs/spec-tools/trrt",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT"),", located ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tno-terminology-design/trrt"},"here")," acts as an example of the tool's deployment. Within the ",(0,a.kt)("inlineCode",{parentName:"p"},".github/workflows/docs-deploy.yml")," GitHub Actions Workflow file are the following lines of code. This code is located in the deploy job before the website is built, modifying the input files in runtime before they are used to build the Docusaurus site."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"  # Terminology reference resolution\n- name: Install TRRT\n  run: npm install -g @tno-terminology-design/trrt@1.x\n- name: Run TRRT\n  run: trrt --output . --scopedir __tests__/content '**/*.md' --force\n")),(0,a.kt)("p",null,"This execution of the ",(0,a.kt)("a",{href:"/tev2-specifications/docs/spec-tools/trrt",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT")," is run from the root of the repository, any input files that contain successfully converted ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"term refs")," will be output starting from that location as well. The ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/scopedir",title:"Scopedir: a directory in a computer file system that contains all files that are either being Curated within a particular Scope, or generated to serve some purpose within that Scope."},"scope directory")," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"__tests__/content"),", as this is where the SAF resides. Every file that matches the ",(0,a.kt)("inlineCode",{parentName:"p"},"'**/*.md'")," glob pattern string is given to the ",(0,a.kt)("a",{href:"/tev2-specifications/docs/spec-tools/trrt",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT"),", in this case meaning every file in every directory ending with ",(0,a.kt)("inlineCode",{parentName:"p"},".md")," is seen as input.\nAs the output directory is the same as the current directory, converted files will overwrite the existing files when we use the ",(0,a.kt)("inlineCode",{parentName:"p"},"force")," flag. This forceful behavior is useful for deployment inside pipelines where the original files are usually not modified, but should be avoided during local use in order to preserve the original documents that include ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/term-ref",title:"TermRef: a word or phrase that is Marked Up (in A Specific Way) so that it refers to a particular Concept (or other Semantic Unit), enabling it to be rendered in a variety of ways for the purpose of helping Readers to (better) understand the intention of its Author."},"term refs"),"."),(0,a.kt)("h2",{id:"example-deployment-case"},"Example Deployment Case"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{href:"/tev2-specifications/docs/spec-tools/trrt",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT")," needs one ",(0,a.kt)("a",{href:"/tev2-specifications/docs/spec-files/saf",title:"SAF: a YAML file that contains essential data about a particular scope, such as the locations of the scope's curated texts, glossaries, and the specifications of the curated terminologies. The SAF is located in the so-called scopedir."},"SAF")," and one or more ",(0,a.kt)("a",{href:"/tev2-specifications/docs/spec-files/mrg",title:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems."},"MRG's")," in order to function and will check to make sure the required properties within these files are set. Not being able to load a ",(0,a.kt)("a",{href:"/tev2-specifications/docs/spec-files/saf",title:"SAF: a YAML file that contains essential data about a particular scope, such as the locations of the scope's curated texts, glossaries, and the specifications of the curated terminologies. The SAF is located in the so-called scopedir."},"SAF")," will cause the program to exit. Not being able to load a complete ",(0,a.kt)("a",{href:"/tev2-specifications/docs/spec-files/mrg",title:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems."},"MRG"),", or finding an invalid entry within an ",(0,a.kt)("a",{href:"/tev2-specifications/docs/spec-files/mrg",title:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems."},"MRG"),", will not cause the program to be stopped, but will be displayed as a ",(0,a.kt)("inlineCode",{parentName:"p"},"MRG HELP")," item (see ",(0,a.kt)("a",{parentName:"p",href:"error-reporting"},"Error Reporting"),")."),(0,a.kt)("p",null,"To demonstrate the tool's possibilities, lets imagine the following scenario.\nYou are part of a community that wishes to curate their terminologies. You have read up on the ",(0,a.kt)("a",{parentName:"p",href:"@"},"TNO Terminology Design")," specifications and have constructed a ",(0,a.kt)("a",{href:"/tev2-specifications/docs/spec-files/saf",title:"SAF: a YAML file that contains essential data about a particular scope, such as the locations of the scope's curated texts, glossaries, and the specifications of the curated terminologies. The SAF is located in the so-called scopedir."},"SAF")," to fit your needs. The ",(0,a.kt)("a",{href:"/tev2-specifications/docs/spec-files/saf",title:"SAF: a YAML file that contains essential data about a particular scope, such as the locations of the scope's curated texts, glossaries, and the specifications of the curated terminologies. The SAF is located in the so-called scopedir."},"SAF")," includes information about the scopes you and your colleagues would want to be able to reference. Inside the written texts of your community, the ",(0,a.kt)("a",{parentName:"p",href:"specifications#interpretation-of-the-term-ref"},"basic term ref syntax")," has been used to reference terms. All of the used terms are located in an ",(0,a.kt)("a",{href:"/tev2-specifications/docs/spec-files/mrg",title:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems."},"MRG"),", which is located in the ",(0,a.kt)("inlineCode",{parentName:"p"},"glossarydir")," as defined in the ",(0,a.kt)("a",{href:"/tev2-specifications/docs/spec-files/saf",title:"SAF: a YAML file that contains essential data about a particular scope, such as the locations of the scope's curated texts, glossaries, and the specifications of the curated terminologies. The SAF is located in the so-called scopedir."},"SAF"),".\nThe standard converters of the ",(0,a.kt)("a",{href:"/tev2-specifications/docs/spec-tools/trrt",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT")," do not fit the needs of your community. Your colleagues have already set up a website to display the files and have done some work to streamline existing terms using a custom JavaScript element. The custom element they made looks like this while being used inline:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<term-info\n    definition="A\xa0mishmash\xa0is a confused mess of different things."\n    img="img/mismash.png"\n    more-info="docs/terms/mishmash.html">mishmash\n</term-info>\n')),(0,a.kt)("p",null,"Assuming the term 'mishmash' is part of an ",(0,a.kt)("a",{href:"/tev2-specifications/docs/spec-files/mrg",title:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems."},"MRG"),", and the default scope and version tag have been set, mishmash can be referenced by using the syntax ",(0,a.kt)("inlineCode",{parentName:"p"},"[mishmash](@)"),". Running the ",(0,a.kt)("a",{href:"/tev2-specifications/docs/spec-tools/trrt",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT")," with the following config example should achieve the wanted results. ",(0,a.kt)("em",{parentName:"p"},"Pay special attention to the converter.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="__tests__/content/config.yaml"',title:'"__tests__/content/config.yaml"'},"# TRRT configuration file (yaml)\noutput: .\nscopedir: .\ninterpreter: 'basic' # `alt` or `basic` are also valid\n# highlight-next-line\nconverter: '<term-info definition=\"{{glossaryText}}\" img=\"img/{{term}}.png\" more-info=\"{{navurl}}\">{{showtext}}</term-info>' # `http`, `essif` or `markdown` are also valid\n\n# glob pattern strings for files to be processed\ninput:\n\xa0 - '**/*.md'\n")),(0,a.kt)("p",null,"As the ",(0,a.kt)("inlineCode",{parentName:"p"},"output")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"scopedir")," arguments are the same, it might be necessary to call the tool with the ",(0,a.kt)("inlineCode",{parentName:"p"},"force")," ",(0,a.kt)("a",{parentName:"p",href:"specifications#calling-the-tool"},"flag")," in order to overwrite the existing files. While testing, it may be more useful to supply a separate ",(0,a.kt)("inlineCode",{parentName:"p"},"output")," directory and not use the ",(0,a.kt)("inlineCode",{parentName:"p"},"force")," flag."),(0,a.kt)("h3",{id:"executed-steps"},"Executed Steps"),(0,a.kt)("p",null,"The following steps have been executed to reach a working implementation of the tool based on the ",(0,a.kt)("a",{parentName:"p",href:"#example-deployment"},"example deployment")," above. Multiple approaches are possible, like using ",(0,a.kt)("inlineCode",{parentName:"p"},"wget")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"curl"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"npm"),", but these have not been documented."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Make sure the ",(0,a.kt)("a",{parentName:"strong",href:"installation#prerequisites"},"prerequisites")," are met.")," ",(0,a.kt)("br",null),"\nPlease refer to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm"},"nvm's")," installation and usage for the latest details about these commands. This step will likely not be necessary if you are integrating the ",(0,a.kt)("a",{href:"/tev2-specifications/docs/spec-tools/trrt",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT")," inside a pipeline."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# Download and install nvm\ncurl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash\n# Download and install node.js\nnvm install node # "node" is an alias for the latest version\nnvm use node # Use the installed node.js version\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Install the latest version of the ",(0,a.kt)("a",{href:"/tev2-specifications/docs/spec-tools/trrt",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT")," and its dependencies globally.")," ",(0,a.kt)("br",null),"\nThis makes the ",(0,a.kt)("a",{href:"/tev2-specifications/docs/spec-tools/trrt",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT")," CLI command available all throughout your system and does not initialize the current working directory with ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com"},"npm")," files."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g @tno-terminology-design/trrt\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Configure the ",(0,a.kt)("a",{href:"/tev2-specifications/docs/spec-files/saf",title:"SAF: a YAML file that contains essential data about a particular scope, such as the locations of the scope's curated texts, glossaries, and the specifications of the curated terminologies. The SAF is located in the so-called scopedir."},"SAF")," and make sure the necessary ",(0,a.kt)("a",{href:"/tev2-specifications/docs/spec-files/mrg",title:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems."},"MRG"),"'s are present.")," ",(0,a.kt)("br",null),"\nOur example deployment ",(0,a.kt)("inlineCode",{parentName:"p"},"saf.yaml")," can be viewed ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tno-terminology-design/trrt/blob/main/__tests__/content/saf.yaml"},"here")," within the ",(0,a.kt)("inlineCode",{parentName:"p"},"__tests__/content")," directory, with the ",(0,a.kt)("a",{href:"/tev2-specifications/docs/spec-files/mrg",title:"MRG: a Glossary for a particular (version of a) Terminology that is formatted in YAML, according to the [TEv2 MRG specifications](/docs/spec-files/mrg), to enable automated processing and integration with software systems."},"MRG's")," located in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tno-terminology-design/trrt/tree/main/__tests__/content/terminology"},"glossarydir")," at ",(0,a.kt)("inlineCode",{parentName:"p"},"__tests__/content/terminology"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Setup the ",(0,a.kt)("a",{href:"/tev2-specifications/docs/spec-tools/trrt",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT")," behavior per ",(0,a.kt)("a",{parentName:"strong",href:"usage#configuration-file"},"configuration file")," and/or command-line parameters.")," ",(0,a.kt)("br",null),"\nSee the ",(0,a.kt)("a",{parentName:"p",href:"#example-deployment"},"example deployment")," above for the yaml configuration file that is used. In this case we will be executing the ",(0,a.kt)("a",{href:"/tev2-specifications/docs/spec-tools/trrt",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT")," from the root of our repository and not the root of the ",(0,a.kt)("a",{href:"/tev2-specifications/docs/terms/scopedir",title:"Scopedir: a directory in a computer file system that contains all files that are either being Curated within a particular Scope, or generated to serve some purpose within that Scope."},"scopedir"),". Make sure to confirm your working directory and adjust any of the path related parameters before continuing to step 5.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Execute the ",(0,a.kt)("a",{href:"/tev2-specifications/docs/spec-tools/trrt",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT"),".")," ",(0,a.kt)("br",null),"\nWe will use the following command to run the tool according to the ",(0,a.kt)("inlineCode",{parentName:"p"},"__tests__/content/config.yaml")," config file. As the ",(0,a.kt)("a",{parentName:"p",href:"#example-deployment"},"example deployment")," is executed within a CI/CD pipeline we will be using the ",(0,a.kt)("inlineCode",{parentName:"p"},"force")," flag to overwrite the input files with their renderable counterparts. The configured paths are relative to the working directory where the ",(0,a.kt)("a",{href:"/tev2-specifications/docs/spec-tools/trrt",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT")," is executed."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"trrt --config __tests__/content/config.yaml --force\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Verify successful execution.")," ",(0,a.kt)("br",null),"\nThe ",(0,a.kt)("a",{href:"/tev2-specifications/docs/spec-tools/trrt",title:"TermRef Rendering Tool: a TEv2 Tool that is designed to facilitate the visualization and rendering of TermRefs."},"TRRT")," CLI outputs information about its execution to the console according to the ",(0,a.kt)("a",{parentName:"p",href:"error-reporting"},"Error Reporting")," messages. The output should provide enough information to resolve issues surrounding the execution of the tool and the related terminology design."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-n/a",metastring:'title="Sample console output"',title:'"Sample',console:!0,'output"':!0},"INFO    Converter.js    Using essif template: '<a href=\"{{navurl}}{{#trait}}#{{/trait}}{{trait}}\" title=\"{{capFirst term}}: {{noRefs glossaryText type=\"markdown\"}}\">{{showtext}}</a>'\nINFO    Interpreter.js  Using basic interpreter: '/(?:(?<=[^`\\\\])|^)\\[(?=[^@\\]]+\\]\\([#a-z0-9_-]*@[:a-z0-9_-]*\\))(?<showtext>[^\\n\\]@]+)\\]\\((?:(?<id>[a-z0-9_-]*)?(?:#(?<trait>[a-z0-9_-]+))?)?@(?<scopetag>[a-z0-9_-]*)(?::(?<vsntag>[a-z0-9_-]+))?\\)/g'\nINFO    Resolver.js     Reading files using pattern string '**/*.md'\nINFO    Resolver.js     Found 111 files\nINFO    Run.js          Resolution complete...\n\nResolution Report:\n      Number of files modified: 110\n      Number of terms converted: 3224\n  Term Errors:\nTERM HELP    Term ref '[frontmatter](@)' > 'frontmatter@tev2:terms', could not be matched with an MRG entry:\n docs/terms/term-identifier.md:8\nTERM HELP    Term ref '<a href=\"https://essif-lab.github.io/framework/docs/terms/owner\" title=\"Owner (of an Entity): the role that a Party performs when it is exercising its legal, rightful or natural title to control that Entity.\">owner</a>' > 'owner@tev2:terms', could not be matched with an MRG entry:\n docs/terms/scope.md:7:7\n docs/terms/knowledge-artifact.md:29\n")))))}d.isMDXComponent=!0}}]);