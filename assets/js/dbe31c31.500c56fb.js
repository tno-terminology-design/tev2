"use strict";(self.webpackChunkessif_lab=self.webpackChunkessif_lab||[]).push([[6731],{9103:function(e,t,o){o.r(t),o.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return r},metadata:function(){return h},toc:function(){return m}});var n=o(3117),a=o(102),i=(o(7294),o(3905)),s=["components"],r={id:"mental-model",scope:"tev2",termtype:"concept",termid:"mental-model",formphrases:"mental-model{ss}, pattern{ss}, conceptual-model{ss}",grouptags:null,status:"proposed",created:new Date("2022-06-06T00:00:00.000Z"),updated:new Date("2022-06-07T00:00:00.000Z"),vsntag:"v0.1",contributors:"RieksJ",isa:null,term:"Mental Model",fullterm:"Mental Model (Conceptual Model, Pattern)",shorterm:null,synonyms:["Pattern","Conceptual Model"],glossaryText:"A description, both casual and formal, of a set of [concepts](@) (ideas), relations between them, and constraints, that together form a coherent and consistent 'viewpoint', or 'way of thinking' about a certain topic.",title:"Mental Model (Conceptual Model, Pattern)",hoverText:"A description, both casual and formal, of a set of Concepts (ideas), relations between them, and constraints, that together form a coherent and consistent 'viewpoint', or 'way of thinking' about a certain topic."},l=void 0,h={unversionedId:"tev2/terms/patterns/mental-model",id:"tev2/terms/patterns/mental-model",title:"Mental Model (Conceptual Model, Pattern)",description:"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",source:"@site/docs/tev2/terms/patterns/mental-model.md",sourceDirName:"tev2/terms/patterns",slug:"/tev2/terms/patterns/mental-model",permalink:"/framework/docs/tev2/terms/patterns/mental-model",draft:!1,editUrl:"https://github.com/essif-lab/framework/-/tree/master/docs/tev2/terms/patterns/mental-model.md",tags:[],version:"current",frontMatter:{id:"mental-model",scope:"tev2",termtype:"concept",termid:"mental-model",formphrases:"mental-model{ss}, pattern{ss}, conceptual-model{ss}",grouptags:null,status:"proposed",created:"2022-06-06T00:00:00.000Z",updated:"2022-06-07T00:00:00.000Z",vsntag:"v0.1",contributors:"RieksJ",isa:null,term:"Mental Model",fullterm:"Mental Model (Conceptual Model, Pattern)",shorterm:null,synonyms:["Pattern","Conceptual Model"],glossaryText:"A description, both casual and formal, of a set of [concepts](@) (ideas), relations between them, and constraints, that together form a coherent and consistent 'viewpoint', or 'way of thinking' about a certain topic.",title:"Mental Model (Conceptual Model, Pattern)",hoverText:"A description, both casual and formal, of a set of Concepts (ideas), relations between them, and constraints, that together form a coherent and consistent 'viewpoint', or 'way of thinking' about a certain topic."},sidebar:"tev2SideBar",previous:{title:"Terminology Pattern",permalink:"/framework/docs/tev2/terms/pattern-terminology"},next:{title:"Mental Models",permalink:"/framework/docs/tev2/terms/patterns/pattern-mental-model"}},d={},m=[{value:"Summary",id:"summary",level:3},{value:"Purpose",id:"purpose",level:3},{value:"Criteria",id:"criteria",level:3},{value:"Notes",id:"notes",level:3},{value:"On Using (existing) Mental models",id:"on-using-existing-mental-models",level:3},{value:"On the Construction of Mental Models",id:"on-the-construction-of-mental-models",level:3}],c={toc:m};function p(e){var t=e.components,o=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The entire section on Terminology Engine v 2 (TEv2) is still under construction.",(0,i.kt)("br",null),"\nAs TEv2 is not (yet) available, the texts that specify the tool are still 'raw', i.e. not yet processed.",(0,i.kt)("br",null),(0,i.kt)("a",{parentName:"p",href:"@"},"readers")," will need to see through some (currently unprocessed) notational conventions."))),(0,i.kt)("h3",{id:"summary"},"Summary"),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"Pattern"),", ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://en.wikipedia.org/wiki/Mental_model"},"mental model"))," or ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://en.wikipedia.org/wiki/Conceptual_model"},"conceptual model")),") captures a limited set of ",(0,i.kt)("a",{parentName:"p",href:"@"},"concepts")," (ideas), relations between them, and constraints, such that together they form a coherent and consistent whole. They have been crafted so that they may serve as a basis for architecting, designing, and implementing IT components and their ",(0,i.kt)("a",{parentName:"p",href:"@"},"governance")," processes."),(0,i.kt)("p",null,"Mental models use (tangible) ",(0,i.kt)("a",{parentName:"p",href:"@"},"terms")," to refer to these (intangible) concepts and relations, so in order to be consistent, a mental model must reside in the scope that defines these concepts and relations. A mental model may also 'connect' concepts of different scopes (preferably no more than two), which you might call an 'interconnection pattern' between these scopes."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"pattern-terminology@"},"terminology pattern")," provides an overview of how this concept fits in with related concepts."),(0,i.kt)("h3",{id:"purpose"},"Purpose"),(0,i.kt)("p",null,"A (good) mental model can be used"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"to facilitate one's thinking and reasoning about a specific topic, and/or deepen one's understanding of it."),(0,i.kt)("li",{parentName:"ul"},"to effectively explain backgrounds of one's reasoning/understanding of the mental model's topic."),(0,i.kt)("li",{parentName:"ul"},"to efficiently discuss and improve ",(0,i.kt)("a",{parentName:"li",href:"@"},"definitions")," of the ",(0,i.kt)("a",{parentName:"li",href:"@"},"concepts")," and relations in the mental model."),(0,i.kt)("li",{parentName:"ul"},"to write texts using precisely defined language.")),(0,i.kt)("h3",{id:"criteria"},"Criteria"),(0,i.kt)("p",null,"A limited set of ",(0,i.kt)("a",{parentName:"p",href:"@"},"concepts")," (preferably not exceeding 7+/-2)",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),", relations between such concepts, and constraints, such that together they form a coherent and consistent whole that can be used to explain one's thinking about a specific topic within a specific ",(0,i.kt)("a",{parentName:"p",href:"@"},"scope"),"."),(0,i.kt)("h3",{id:"notes"},"Notes"),(0,i.kt)("p",null,"The first purpose of a mental model is to help us think and reason about a certain topic or issue.\nOne signal that indicates the need of such a model is when we're running circles in our thoughts, and we have this feeling of not understanding, of the topic being (too) complex. Often, we are thinking in terms of concepts that are not fit for the objectives we pursue."),(0,i.kt)("h3",{id:"on-using-existing-mental-models"},"On Using (existing) Mental models"),(0,i.kt)("p",null,"A notorious ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/All_models_are_wrong#Quotations_of_George_Box"},"quotation of George Box"),' is that "all models are wrong", to which he later added "but some are useful". While he was talking about statistical models, his reasoning applies equally well to mental models. Paraphrasing this argument: *The real world is never ',(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"exactly")),' represented by any model. However, cunningly chosen simple models often do provide remarkably useful approximations. We should not ask "Is the model true?". If "truth" is to be the "whole truth" the answer must be "No". The only question of interest is "Is the model illuminating and useful?"*. That\'s what we have tried to craft our models to.'),(0,i.kt)("p",null,"In other words: your choice of mental model isn't going to change the world for a bit. It only provides you with a particular perspective on reality. If you like the perspective, keep using the model. If not, use another one."),(0,i.kt)("p",null,"Having said that, the crux of using a mental model is that you commit to it for as long as you use it. This means you take whatever the model says to be the case, and you do not allow (parts of) other models or ways of thinking interfere, because it will make you inconsistent and incoherent."),(0,i.kt)("p",null,"For some people this is really easy:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mathematicians have loads of models, a notorious set are the three geometries (",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Euclidean_geometry"},"Euclidian"),", ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Non-Euclidean_geometry#Elliptic_geometry"},"Elliptic")," and ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Non-Euclidean_geometry#Hyperbolic_geometry"},"Hyperbolic"),"). Depending on what they are doing, they choose one of the three, i.e. the one that fits their purpose best."),(0,i.kt)("li",{parentName:"ul"},"Physicists have them too, e.g. in the ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Wave%E2%80%93particle_duality"},"duality principle of light")),(0,i.kt)("li",{parentName:"ul"},"Historians and astronomers are aware of the ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Geocentric_model"},"geocentric world model")," that was used to prepare astrological and astronomical charts for over 1500 years. Copernic, Galileo and Kepler came with the ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Heliocentrism"},"heliocentric model of the universe"),", which is only taking another perspective on reality (making it easier to prepare such charts).")),(0,i.kt)("p",null,"For other people, it is very difficult. The introduction of the heliocentric model encountered lots of opposition, for various reasons that did not have anything to do with the model's merits. We, too, find that some of our models (specifically: the ",(0,i.kt)("a",{parentName:"p",href:"@"},"party-actor-action model"),") is sometimes opposed, where the arguments do not come from within the model itself (in attempts to falsify the model), but have other roots, setting the stage for incoherent and inconsistent argumentations."),(0,i.kt)("p",null,"Perhaps this is comparable with optical illusions, such as that of the ",(0,i.kt)("a",{parentName:"p",href:"https://www.google.com/search?source=univ&tbm=isch&q=optical+illusions+old+young+woman&fir=YIllsD9jihWxTM%252C1sZUL2jWNPvfxM%252C_%253BhsIzlU__RDe_nM%252Cyfw5Hii3UEmJHM%252C_%253Bk64g32oWxpYe8M%252CkqkPUja_z9NllM%252C_%253BFKMuqWLTX2wGtM%252CnTNCHp33apIpSM%252C_%253BEFfy6TSa8qgljM%252CPC_q2aBWJ95QfM%252C_%253BkFbAhDyYIR5MVM%252CWj0wk8hGQLHjWM%252C_%253BAX8XJjwDWQtyUM%252CiGJDEv3hShV9hM%252C_%253BeTsHDY5hHaPs9M%252CGOdBzeJDaJHS-M%252C_%253ByLBf8y95TCv1EM%252C0ZRLesUL5FW6sM%252C_%253Bg99V52yd0J1rOM%252CcYAag1F1qB6TaM%252C_%253BZHfvJXZFxHA4ZM%252CSqZ2N1ZFJLtPbM%252C_%253BXRMAn-j0tsUCvM%252C6vFweEnwB6_V1M%252C_%253BAoZByG4INAwYSM%252Cjhtnii31U6mWzM%252C_%253BCLrz5N2Kp8uAHM%252CmyjTMkeibmtg0M%252C_%253BpWT4mSz6-j-KOM%252CI0eh7eHVJVtHJM%252C_%253BPXcirTX8iQKiJM%252CP20yLZuYAjqV4M%252C_&usg=AI4_-kSPSjX9ixQFqsKa-4GnaDABoPxuKQ&sa=X&ved=2ahUKEwjr1tLOxZH4AhXfwAIHHSnuCXMQjJkEegQIAhAC&biw=1396&bih=665&dpr=1.38"},"old and young women")," let you experience first hand what difficulties you may have in relinquishing ideas you hold (about whether the picture represents one or the other). Only if you can do that, you can see from both perspectives, and at any point in time choose which is the most beneficial for you."),(0,i.kt)("p",null,"Most people may be between these extremes. The bottom line is that you should be decisive: you either use the model, or you don't. There is no in-between. Also, you should be attentive, and watch for any thoughts that may come up that might interfere, and cause you to become incoherent/inconsistent."),(0,i.kt)("p",null,"When assessing a model, start simple. Read the text, try to picture (or hear) what it says: try to follow (understand) the author. Try to figure out how the model would work in situations that the author did not describe (not: how the model is flawed because you cannot think of how it would work). Then find increasingly complex situations, and figure out how the model would work there. If you get stuck (anywhere during this process), then don't jump to conclusions, but rather find others that have used the model, and ask them how it might work."),(0,i.kt)("h3",{id:"on-the-construction-of-mental-models"},"On the Construction of Mental Models"),(0,i.kt)("p",null,"If you're acquianted with using mental models, you may want to construct your own. That is a task that needs to be taken on with care. You must allow the choices for its elements to be validated against many use-cases. Such validation instills trust that our model elements (concepts, relations, rules) are well-chosen. It also provides us with the experience (usually after some time) that it has made our thinking easier, and we are better equipped to resolve issues."),(0,i.kt)("p",null,"The careful construction is comparable to a quest: it takes time, multiple versions, and careful reflection. And it needs continuous validation of its parts, by throwing use-cases at it and verifying that the model can describe such cases, and do some reasoning with them."),(0,i.kt)("p",null,"This careful construction must ensure that the mental model gets different properties. For starters, the mental model must be able to reason in (all) static situations, where things do not change, and the so-called 'invariant' rules/constraints must  hold. Also, the model must be able to cope with time-dependencies and changes, for which other kinds of rules apply."),(0,i.kt)("p",null,"In the end, the mental model needs to be expressed in several, different ways, depending on whom we want to convey the ideas behind it to. Business people generally need simple models that allow them to (roughly) grasp its gist. Software architects need models with precise definitions that allow them to use its elements in a (formal) reasoning. Software engineers (programmers) need all the details that allow them to create applications and databases that work according to the model's intent. So the level of detail that an expression of the model provides, makes it useful or useless to different audiences."))}p.isMDXComponent=!0}}]);