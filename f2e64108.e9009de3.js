(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{226:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return m})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return u}));var n=a(2),r=a(6),o=(a(0),a(235)),s=a(236),i=a.n(s),c=a(239),p={id:"pattern-party-representation",title:"Party Representation",scopeid:"essifLab",type:"pattern",typeid:"party-representation",stage:"draft",hoverText:"The Party Representation pattern captures the foundational concepts and relations that we need for thinking about how Parties can be represented in various circumstances.",glossaryText:"The Party Representation pattern captures the foundational concepts and relations that we need for thinking about how %%parties^party%% can be represented in various circumstances.",date:20210601},m={unversionedId:"terms/pattern-party-representation",id:"terms/pattern-party-representation",isDocsHomePage:!1,title:"Party Representation",description:"This pattern is still under development",source:"@site/docs/terms/pattern-party-representation.md",slug:"/terms/pattern-party-representation",permalink:"/framework/docs/terms/pattern-party-representation",editUrl:"https://github.com/essif-lab/framework/-/tree/master/docs/terms/pattern-party-representation.md",version:"current",sidebar:"sidebar_for_essifLab",previous:{title:"Decentralized Risk Management, Governance and Compliance",permalink:"/framework/docs/terms/pattern-decentralized-grc"},next:{title:"Mandates, Delegation and Hiring",permalink:"/framework/docs/terms/pattern-mandates-delegation-hiring"}},d=[{value:"Summary",id:"summary",children:[]},{value:"Purpose",id:"purpose",children:[]},{value:"Introduction",id:"introduction",children:[]},{value:"Formalized model",id:"formalized-model",children:[]},{value:"Miscellaneous",id:"miscellaneous",children:[]}],h={rightToc:d};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},h,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Editor's note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This pattern is still under development"))),Object(o.b)("h3",{id:"summary"},"Summary"),Object(o.b)("p",null,"This pattern captures the essence of how ",Object(o.b)(i.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"parties")," can be represented in various circumstances, thereby extending the ",Object(o.b)(i.a,{popup:"The Parties, Actors and Actions pattern captures the foundational concepts and relations that we need for thinking about how things get done. It answers questions such as: 'Who/what does things?', 'How are their actions being guided/controlled?', 'Who controls whom/what?', 'Who/what may be held accountable?'.",reference:"/framework/docs/terms/pattern-party-actor-action",mdxType:"Term"},"parties, actors, actions pattern"),"."),Object(o.b)("h3",{id:"purpose"},"Purpose"),Object(o.b)("p",null,"Within the context of ",Object(o.b)(i.a,{popup:"Self-Sovereign Identity (or SSI): a term that has many different interpretations, and that we use to refer to concepts/ideas, architectures, processes and technologies that aim to support (autonomous) Parties as they negotiate and execute electronic Transactions with one another.",reference:"/framework/docs/terms/self-sovereign-identity",mdxType:"Term"},"SSI"),", we are interested in coming to grips with (answering) the questions such as 'in what ways can ",Object(o.b)(i.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"parties")," be represented?', 'what kind(s) of ",Object(o.b)(i.a,{popup:"Entity: someone or something that is known to exist.",reference:"/framework/docs/terms/entity",mdxType:"Term"},"entities")," can represent ",Object(o.b)(i.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"parties"),"', 'how can we deal with representation constraints, i.e. provide guarantees that the represented ",Object(o.b)(i.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," isn't completely at the mercy of the one representing it?'."),Object(o.b)("p",null,"This model attempts to provide answers to such questions."),Object(o.b)("h3",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"There are very many different forms of representation. ",Object(o.b)(i.a,{popup:"Assertion: a declaration/statement, made by a specific Party, that something is the case.",reference:"/framework/docs/terms/assertion",mdxType:"Term"},"Claims"),", for example, represent characteristics attributed to ",Object(o.b)(i.a,{popup:"Entity: someone or something that is known to exist.",reference:"/framework/docs/terms/entity",mdxType:"Term"},"entities"),", ",Object(o.b)(i.a,{popup:"Term: a word or phrase that is used in at least one Scope/context to refer to (the Definition of) a specific Concept.",reference:"/framework/docs/terms/term",mdxType:"Term"},"Terms")," represent (intangible) ",Object(o.b)(i.a,{popup:"Concept: the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same').",reference:"/framework/docs/terms/concept",mdxType:"Term"},"concepts"),", ",Object(o.b)(i.a,{popup:"Legal Entity (of a Jurisdiction): an Entity that is known by, recognized to exist, and registered in that Jurisdiction.",reference:"/framework/docs/terms/legal-entity",mdxType:"Term"},"legal entities")," are represented in the ",Object(o.b)(i.a,{popup:"Knowledge: The (intangible) sum of what is known by a specific Party, as well as the familiarity, awareness or understanding of someone or something by that Party.",reference:"/framework/docs/terms/knowledge",mdxType:"Term"},"knowledge")," of a ",Object(o.b)(i.a,{popup:"Jurisdiction: the composition of a Legal System (legislation, enforcement thereof, and conflict resolution), a Party that governs that Legal System, a scope within which that Legal System is operational, and one or more Objectives for the purpose of which the Legal System is operated.",reference:"/framework/docs/terms/jurisdiction",mdxType:"Term"},"jurisdiction"),", ",Object(o.b)(i.a,{popup:"Agent (of a Party): an Actor that is executing an Action on behalf of a Party (called the Principal of that Actor).",reference:"/framework/docs/terms/agent",mdxType:"Term"},"agents")," represent ",Object(o.b)(i.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"parties")," as they execute ",Object(o.b)(i.a,{popup:"Action: something that is actually done/executed - by a single Actor (on behalf of a given Party), as a single operation in a specific context.",reference:"/framework/docs/terms/action",mdxType:"Term"},"actions"),", and so on. We specifically focus on"),Object(o.b)("p",null," ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.merriam-webster.com/dictionary/representation"}),"Merriam-Webster")," considers both 'the action of representing', i.e. the action or fact of one ",Object(o.b)(i.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," standing for another so as to have the rights and duties of the ",Object(o.b)(i.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," represented, or the substitution of one ",Object(o.b)(i.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," in place of another, e.g. a child taking the place of a deceased parent), and 'the fact of being represented', which is its passive counterpart."),Object(o.b)("p",null,"Representation can take an active and a more passive form."),Object(o.b)("p",null,"In the active form, a ",Object(o.b)(i.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," is represented by an ",Object(o.b)(i.a,{popup:"Actor: Entity that can act (do things), e.g. people, machines, but not Organizations.",reference:"/framework/docs/terms/actor",mdxType:"Term"},"actor")," that executes an ",Object(o.b)(i.a,{popup:"Action: something that is actually done/executed - by a single Actor (on behalf of a given Party), as a single operation in a specific context.",reference:"/framework/docs/terms/action",mdxType:"Term"},"action")," on behalf of that ",Object(o.b)(i.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party"),", as described in the ",Object(o.b)(i.a,{popup:"The Parties, Actors and Actions pattern captures the foundational concepts and relations that we need for thinking about how things get done. It answers questions such as: 'Who/what does things?', 'How are their actions being guided/controlled?', 'Who controls whom/what?', 'Who/what may be held accountable?'.",reference:"/framework/docs/terms/pattern-party-actor-action",mdxType:"Term"},"parties, actors, action pattern"),". In that pattern, the ",Object(o.b)(i.a,{popup:"Actor: Entity that can act (do things), e.g. people, machines, but not Organizations.",reference:"/framework/docs/terms/actor",mdxType:"Term"},"actor")," is said to be an ",Object(o.b)(i.a,{popup:"Agent (of a Party): an Actor that is executing an Action on behalf of a Party (called the Principal of that Actor).",reference:"/framework/docs/terms/agent",mdxType:"Term"},"agent")," of the ",Object(o.b)(i.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," that it represents as it is executing the ",Object(o.b)(i.a,{popup:"Action: something that is actually done/executed - by a single Actor (on behalf of a given Party), as a single operation in a specific context.",reference:"/framework/docs/terms/action",mdxType:"Term"},"action"),". This kind of representation is short-lived: it exists for the time that the ",Object(o.b)(i.a,{popup:"Action: something that is actually done/executed - by a single Actor (on behalf of a given Party), as a single operation in a specific context.",reference:"/framework/docs/terms/action",mdxType:"Term"},"action")," is being executed."),Object(o.b)("p",null,"In the more passive form, a ",Object(o.b)(i.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," can be represented by an ",Object(o.b)(i.a,{popup:"Actor: Entity that can act (do things), e.g. people, machines, but not Organizations.",reference:"/framework/docs/terms/actor",mdxType:"Term"},"actor")," in an employment, or 'works for' relation, which is also described in the ",Object(o.b)(i.a,{popup:"The Parties, Actors and Actions pattern captures the foundational concepts and relations that we need for thinking about how things get done. It answers questions such as: 'Who/what does things?', 'How are their actions being guided/controlled?', 'Who controls whom/what?', 'Who/what may be held accountable?'.",reference:"/framework/docs/terms/pattern-party-actor-action",mdxType:"Term"},"parties, actors, action pattern"),". In that pattern, the ",Object(o.b)(i.a,{popup:"Actor: Entity that can act (do things), e.g. people, machines, but not Organizations.",reference:"/framework/docs/terms/actor",mdxType:"Term"},"actor")," is said to be an ",Object(o.b)(i.a,{popup:"Employee (of a Party): an Actor for whom/which it is realistic that it might execute Actions on behalf of that Party (called the Employer of that Actor).",reference:"/framework/docs/terms/employee",mdxType:"Term"},"employee")," of that ",Object(o.b)(i.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party"),", which (in our context) only means that it is realistic to expect that the ",Object(o.b)(i.a,{popup:"Actor: Entity that can act (do things), e.g. people, machines, but not Organizations.",reference:"/framework/docs/terms/actor",mdxType:"Term"},"actor")," will be executing ",Object(o.b)(i.a,{popup:"Action: something that is actually done/executed - by a single Actor (on behalf of a given Party), as a single operation in a specific context.",reference:"/framework/docs/terms/action",mdxType:"Term"},"actions")," on behalf of that ",Object(o.b)(i.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party"),"."),Object(o.b)(i.a,{popup:"Actor: Entity that can act (do things), e.g. people, machines, but not Organizations.",reference:"/framework/docs/terms/actor",mdxType:"Term"},"Actors")," typically do not represent a ",Object(o.b)(i.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," for everything. ",Object(o.b)(i.a,{popup:"Employee (of a Party): an Actor for whom/which it is realistic that it might execute Actions on behalf of that Party (called the Employer of that Actor).",reference:"/framework/docs/terms/employee",mdxType:"Term"},"Employees")," for example are typically assigned a *function* that requires them to do certain kinds of ",Object(o.b)(i.a,{popup:"Action: something that is actually done/executed - by a single Actor (on behalf of a given Party), as a single operation in a specific context.",reference:"/framework/docs/terms/action",mdxType:"Term"},"actions"),", yet at the same time limits them thereto. An (",Object(o.b)(i.a,{popup:"Actor: Entity that can act (do things), e.g. people, machines, but not Organizations.",reference:"/framework/docs/terms/actor",mdxType:"Term"},"actor")," in its role of) ",Object(o.b)(i.a,{popup:"Employee (of a Party): an Actor for whom/which it is realistic that it might execute Actions on behalf of that Party (called the Employer of that Actor).",reference:"/framework/docs/terms/employee",mdxType:"Term"},"employee")," can, or should therefore limit its ",Object(o.b)(i.a,{popup:"Agent (of a Party): an Actor that is executing an Action on behalf of a Party (called the Principal of that Actor).",reference:"/framework/docs/terms/agent",mdxType:"Term"},"agency")," to ",Object(o.b)(i.a,{popup:"Action: something that is actually done/executed - by a single Actor (on behalf of a given Party), as a single operation in a specific context.",reference:"/framework/docs/terms/action",mdxType:"Term"},"actions")," of the type that its ",Object(o.b)(i.a,{popup:"Employer (of an Actor): a Party on whose behalf this Actor (called an Employee of that Party) might execute Actions.",reference:"/framework/docs/terms/employer",mdxType:"Term"},"employer")," has assigned as the tasks for the functions is employed to fulfill.",Object(o.b)("p",null,"This pattern also describes how ",Object(o.b)(i.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"parties")," can be said to perform an ",Object(o.b)(i.a,{popup:"Action: something that is actually done/executed - by a single Actor (on behalf of a given Party), as a single operation in a specific context.",reference:"/framework/docs/terms/action",mdxType:"Term"},"action"),", which is shorthand parlance for saying that there is an ",Object(o.b)(i.a,{popup:"Actor: Entity that can act (do things), e.g. people, machines, but not Organizations.",reference:"/framework/docs/terms/actor",mdxType:"Term"},"actor")," that executes this ",Object(o.b)(i.a,{popup:"Action: something that is actually done/executed - by a single Actor (on behalf of a given Party), as a single operation in a specific context.",reference:"/framework/docs/terms/action",mdxType:"Term"},"action")," on behalf of that ",Object(o.b)(i.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party"),". In that sense, ",Object(o.b)(i.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"parties")," can be said to perform an ",Object(o.b)(i.a,{popup:"Action: something that is actually done/executed - by a single Actor (on behalf of a given Party), as a single operation in a specific context.",reference:"/framework/docs/terms/action",mdxType:"Term"},"action")," on behalf of other ",Object(o.b)(i.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"parties"),", effectively representing such ",Object(o.b)(i.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"parties"),"."),Object(o.b)("p",null,"In this model, we do not consider ",Object(o.b)(i.a,{popup:"Actor: Entity that can act (do things), e.g. people, machines, but not Organizations.",reference:"/framework/docs/terms/actor",mdxType:"Term"},"actors")," representing ",Object(o.b)(i.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"parties"),", as this is already elaborated on in the ",Object(o.b)(i.a,{popup:"The Parties, Actors and Actions pattern captures the foundational concepts and relations that we need for thinking about how things get done. It answers questions such as: 'Who/what does things?', 'How are their actions being guided/controlled?', 'Who controls whom/what?', 'Who/what may be held accountable?'.",reference:"/framework/docs/terms/pattern-party-actor-action",mdxType:"Term"},"parties, actors, action model"),", which defines notions such as ",Object(o.b)(i.a,{popup:"Agent (of a Party): an Actor that is executing an Action on behalf of a Party (called the Principal of that Actor).",reference:"/framework/docs/terms/agent",mdxType:"Term"},"agents")," (and ",Object(o.b)(i.a,{popup:"Principal (of an Actor): the Party for whom, or on behalf of whom, the Actor is executing an Action (this Actor is then called an Agent of that Party).",reference:"/framework/docs/terms/principal",mdxType:"Term"},"principals"),")"),Object(o.b)("h3",{id:"formalized-model"},"Formalized model"),Object(o.b)("p",null,"Here is a visual representation of this pattern, using the following ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"../notations-and-conventions#pattern-diagram-notations"}),"notations and conventions")),":"),Object(o.b)("img",{alt:"Conceptual model of the 'Representation' pattern",src:Object(c.a)("images/patterns/pattern-party-representation.png")}),Object(o.b)("h3",{id:"miscellaneous"},"Miscellaneous"),Object(o.b)("p",null,"The seemingly simple notion of 'representation' turns out to be quite elusive in various circumstances. The painter ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/The_Treachery_of_Images"}),"Rene Magritte was heavily reproached"),' for writing "Ceci n\'est pas une pipe" (this is not a pipe) under a painting that showed a pipe. But he was right: you cannot stuff the image of a pipe in the same way you stuff the pipe that it represents.'),Object(o.b)("p",null,"In general, representation is quite complex, as can be readily experienced when diving into ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Semiotics"}),"Semiotics"),", that studies the workings of ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Sign_(semiotics)"}),"signs")," (i.e. anything that communicates a meaning that is not the sign itself). Our ",Object(o.b)(i.a,{popup:"The eSSIF-Lab Terminology Pattern describes the relations between Terminology Terms such as 'Concept', 'Term', 'Pattern', 'Mental Model', 'Glossary' etc.",reference:"/framework/docs/terms/pattern-terminology",mdxType:"Term"},"terminology model")," specifies that a ",Object(o.b)(i.a,{popup:"Term: a word or phrase that is used in at least one Scope/context to refer to (the Definition of) a specific Concept.",reference:"/framework/docs/terms/term",mdxType:"Term"},"term")," (within a specific ",Object(o.b)(i.a,{popup:"Scope: the extent of the area or subject matter (which we use to define Patterns, Concepts, Terms and Glossaries in).",reference:"/framework/docs/terms/scope",mdxType:"Term"},"scope"),"/context) refers to (the ",Object(o.b)(i.a,{popup:"Definition: a text that helps Parties to have the same understanding about the meaning of (and Concepts behind) a Term, ideally in such a way that these Parties can determine whether or not they make the same distinction.",reference:"/framework/docs/terms/definition",mdxType:"Term"},"definition")," of) a ",Object(o.b)(i.a,{popup:"Concept: the ideas/thoughts behind a classification of Entities (what makes Entities in that class 'the same').",reference:"/framework/docs/terms/concept",mdxType:"Term"},"concept"),", which is one way of representing (intangible) ideas."),Object(o.b)("p",null,"'Representation' is a notion that seems simple enough to grasp, but turns out to be more elusive when trying to formalize it. ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.merriam-webster.com/dictionary/representation"}),"Merriam-Webster")," has several definitions"))}u.isMDXComponent=!0},238:function(e,t,a){"use strict";var n=a(0),r=a(20);t.a=function(){var e=Object(n.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},239:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return s}));var n=a(238),r=a(240);function o(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var o=void 0===n?{}:n,s=o.forcePrependBaseUrl,i=void 0!==s&&s,c=o.absolute,p=void 0!==c&&c;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(i)return t+a;var m=a.startsWith(t)?a:t+a.replace(/^\//,"");return p?e+m:m}(o,a,e,t)}}}function s(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},240:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))}}]);