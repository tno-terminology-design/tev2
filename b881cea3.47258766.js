(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{189:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return h})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return l}));var n=a(2),i=a(6),r=(a(0),a(231)),s=a(232),o=a.n(s),d=a(235),h={id:"pattern-guardianship",title:"Guardianship",scopeid:"essifLab",type:"pattern",typeid:"guardianship",stage:"draft",hoverText:"The Guardianships pattern captures the Concepts and relations that explain what a generic Guardianshipconsists of, and how it relates to Guardians, Dependents, Jurisdictions, etc.",date:20210601},c={unversionedId:"terms/pattern-guardianship",id:"terms/pattern-guardianship",isDocsHomePage:!1,title:"Guardianship",description:"Purpose",source:"@site/docs/terms/pattern-guardianship.md",slug:"/terms/pattern-guardianship",permalink:"/framework/docs/terms/pattern-guardianship",editUrl:"https://github.com/essif-lab/framework/-/tree/master/docs/terms/pattern-guardianship.md",version:"current",sidebar:"sidebar_for_essifLab",previous:{title:"Jurisdictions",permalink:"/framework/docs/terms/pattern-jurisdiction"},next:{title:"Terminology Pattern",permalink:"/framework/docs/terms/pattern-terminology"}},p=[{value:"Purpose",id:"purpose",children:[]},{value:"Introduction",id:"introduction",children:[]},{value:"Formalized model",id:"formalized-model",children:[]}],u={rightToc:p};function l(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"purpose"},"Purpose"),Object(r.b)("p",null,"The ",Object(r.b)("strong",{parentName:"p"},"Guardianship pattern")," captures the concepts and relations that explain how generic guardianships work, and can be constructed. It shows that ",Object(r.b)(o.a,{popup:"Guardianship Arrangement (in a Jurisdiction): a set of rights and duties between Legal Entities of the Jurisdiction that have been established and are enforced within that Jurisdiction for the purpose of caring for and/or protecting/guarding/defending one or more of these Entities.",reference:"/framework/docs/terms/guardianship-arrangement",mdxType:"Term"},"guardianship arrangements")," are embedded in a ",Object(r.b)(o.a,{popup:"Jurisdiction: the composition of a Legal System (legislation, enforcement thereof, and conflict resolution), a Party that governs that Legal System, a scope within which that Legal System is operational, and one or more Objectives for the purpose of which the Legal System is operated.",reference:"/framework/docs/terms/jurisdiction",mdxType:"Term"},"jurisdiction")," that govern such arrangements."),Object(r.b)("p",null,"The contribution of this pattern is to establish a building block and terminology for constructing a consistent, coherent and sufficiently complete mental model that allows ",Object(r.b)(o.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"parties")," to convey guardianship-related ideas to other parties, without running the risk of being misunderstood, by expressing any guardianship-related use-case in terms of the model. This will enable us to draft requirements and specifications for infrastructural IT, and make a start with specifying standardizable data structures (schemas) for use in combination with VCs."),Object(r.b)("h3",{id:"introduction"},"Introduction"),Object(r.b)("p",null,"The term 'guardianship' has many definitions/descriptions, such as:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u201cThe position of protecting or defending something\u201d or \u201cThe position of being legally responsible for the care of someone who is unable to manage their own affairs.\u201d (both from the ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.lexico.com/en/definition/guardianship"}),"Oxford dictionary"),"),"),Object(r.b)("li",{parentName:"ul"},"\u201cOne who has the care of the person or property of another\u201d or \u201cOne that guards\u201d (both from ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.merriam-webster.com/dictionary/guardianship"}),"Merriam-Webster"),"),"),Object(r.b)("li",{parentName:"ul"},"\u201cThe state or duty of being a guardian\u201d, where 'guardian' is defined as \u201cA person who has the legal right and responsibility of taking care of someone who cannot take care of himself or herself\u201d or \u201cSomeone who protects something\u201d (",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://dictionary.cambridge.org/dictionary/english/"}),"Cambridge Dictionary"),"), or"),Object(r.b)("li",{parentName:"ul"},"\u201cThe status of being a protector, advocate, or proxy for a person\u201d (",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://sovrin.org/wp-content/uploads/Guardianship-Whitepaper.pdf"}),"Sovrin Guardianship Task Force whitepaper"),"), which defines 'guardian' as \u201cAn organization or person protecting another person and possibly their property\u201d."),Object(r.b)("li",{parentName:"ul"},"\u201cThe legal, social, or organizational responsibility of serving as a Guardian\u201d (",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.google.com/document/d/1gfIz5TT0cNp2kxGMLFXr19x1uoZsruUe_0glHst2fZ8/edit"}),"Sovrin Glossary"),"), which also defines 'guardian' as  \u201cAn Identity Owner who administers identity Data, Wallets, and/or Agents on behalf of a dependent\u201d.")),Object(r.b)("p",null,"So, it seems that most people will acknowledge that 'guardianship' is an arrangement between"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"someone (or an organization, collectively referred to as a '",Object(r.b)(o.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party"),"') or something that is 'under ",Object(r.b)(o.a,{popup:"Guardianship Arrangement (in a Jurisdiction): a set of rights and duties between Legal Entities of the Jurisdiction that have been established and are enforced within that Jurisdiction for the purpose of caring for and/or protecting/guarding/defending one or more of these Entities.",reference:"/framework/docs/terms/guardianship-arrangement",mdxType:"Term"},"guardianship"),"', i.e. being cared for, guarded, protected or defended - we call this the '",Object(r.b)(o.a,{popup:"Dependent (in a Guardianship Arrangement): an Entity for the caring for and/or protecting/guarding/defending of which a Guardianship Arrangement has been established.",reference:"/framework/docs/terms/dependent",mdxType:"Term"},"dependent"),"', and"),Object(r.b)("li",{parentName:"ul"},"one or more ",Object(r.b)(o.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"parties")," that do this caring, guarding, protecting or defending - we call them '",Object(r.b)(o.a,{popup:"Guardian: a Party that has been assigned rights and duties in a Guardianship Arrangement for the purpose of caring for and/or protecting/guarding/defending the Entity that is the Dependent in that Guardianship Arrangement.",reference:"/framework/docs/terms/guardian",mdxType:"Term"},"guardians"),"'.")),Object(r.b)("p",null,"Note that '",Object(r.b)(o.a,{popup:"Dependent (in a Guardianship Arrangement): an Entity for the caring for and/or protecting/guarding/defending of which a Guardianship Arrangement has been established.",reference:"/framework/docs/terms/dependent",mdxType:"Term"},"dependent"),"' and '",Object(r.b)(o.a,{popup:"Guardian: a Party that has been assigned rights and duties in a Guardianship Arrangement for the purpose of caring for and/or protecting/guarding/defending the Entity that is the Dependent in that Guardianship Arrangement.",reference:"/framework/docs/terms/guardian",mdxType:"Term"},"guardian"),"' are roles in a specific ",Object(r.b)(o.a,{popup:"Guardianship Arrangement (in a Jurisdiction): a set of rights and duties between Legal Entities of the Jurisdiction that have been established and are enforced within that Jurisdiction for the purpose of caring for and/or protecting/guarding/defending one or more of these Entities.",reference:"/framework/docs/terms/guardianship-arrangement",mdxType:"Term"},"guardianship arrangement"),". They do not have an independent existence (as e.g. a human being does). A 'dependent' or 'guardian' only exists for as long as the arrangement exists and the arrangement has assigned such roles."),Object(r.b)("p",null,"The actual activities that a ",Object(r.b)(o.a,{popup:"Guardian: a Party that has been assigned rights and duties in a Guardianship Arrangement for the purpose of caring for and/or protecting/guarding/defending the Entity that is the Dependent in that Guardianship Arrangement.",reference:"/framework/docs/terms/guardian",mdxType:"Term"},"guardian")," performs as (s)he cares for, guards, or \u2026 its ",Object(r.b)(o.a,{popup:"Dependent (in a Guardianship Arrangement): an Entity for the caring for and/or protecting/guarding/defending of which a Guardianship Arrangement has been established.",reference:"/framework/docs/terms/dependent",mdxType:"Term"},"dependent")," (in a specific ",Object(r.b)(o.a,{popup:"Guardianship Arrangement (in a Jurisdiction): a set of rights and duties between Legal Entities of the Jurisdiction that have been established and are enforced within that Jurisdiction for the purpose of caring for and/or protecting/guarding/defending one or more of these Entities.",reference:"/framework/docs/terms/guardianship-arrangement",mdxType:"Term"},"guardianship arrangement"),") differ from case to case, and from situation to situation. Still, in general we can say that a guardianship arrangement comes with ",Object(r.b)(o.a,{popup:"The Duties and Rights pattern captures the Concepts and relations that explain what a generic duties and rights consists of (based on Hofeld's theories), and relates it to Jurisdictions, Parties and Legal Entities.",reference:"/framework/docs/terms/pattern-duties-and-rights",mdxType:"Term"},"rights and duties")," that enable (or force) a guardian to execute (or refrain from executing) specific actions - for the purpose of caring/guarding/\u2026 its dependent."),Object(r.b)("p",null,"A guardianship arrangement may also impose rights and duties to the dependent. For example, a guardianship arrangement that exists for the purpose of taking care of the financial situation of the dependent may impose a duty on the dependent to not engage in acts that may have significant financial consequences, such as committing itself to a loan."),Object(r.b)("p",null,"A guardianship arrangement is meaningful to the extent in which such rights and duties are actually upheld and/or enforced. Defining and enforcing rights and duties, as well as resolving conflicts that may arise, are the very essence of a ",Object(r.b)(o.a,{popup:"Jurisdiction: the composition of a Legal System (legislation, enforcement thereof, and conflict resolution), a Party that governs that Legal System, a scope within which that Legal System is operational, and one or more Objectives for the purpose of which the Legal System is operated.",reference:"/framework/docs/terms/jurisdiction",mdxType:"Term"},"jurisdiction")," - for details see the ",Object(r.b)(o.a,{popup:"The Jurisdictions pattern captures the Concepts and relations that explain what a generic Jurisdiction consists of, and relates it to Parties and Legal Entities.",reference:"/framework/docs/terms/pattern-jurisdiction",mdxType:"Term"},"Jurisdictions pattern")),Object(r.b)("p",null,"The wealth in varieties in guardianship arrangements can now easily be explained by observing that the various ",Object(r.b)(o.a,{popup:"Jurisdiction: the composition of a Legal System (legislation, enforcement thereof, and conflict resolution), a Party that governs that Legal System, a scope within which that Legal System is operational, and one or more Objectives for the purpose of which the Legal System is operated.",reference:"/framework/docs/terms/jurisdiction",mdxType:"Term"},"Jurisdictions")," all exercise their self-sovereignty as they operate their ",Object(r.b)(o.a,{popup:"Legal-system: a system in which rules are defined, and mechanisms for their enforcement and conflict resolution are (implicitly or explicitly) specified.",reference:"/framework/docs/terms/legal-system",mdxType:"Term"},"legal systems"),"."),Object(r.b)("p",null,"For a guardianship arrangement to be meaningful and relevant, it must be associated to a (single) jurisdiction that creates, modifies and dissolves the relation, specifies who the guardian and dependent are, and assigns each of them a set of rights and duties (including 'negative' rights and duties, i.e. what they may/must NOT do). A jurisdiction is implicitly tasked to enforce such rights and duties, and provide for the resolution of conflicts, yet is (and remains) self-sovereign in determining the extent in which it does so."),Object(r.b)("h3",{id:"formalized-model"},"Formalized model"),Object(r.b)("p",null,"Here is a visual representation of this pattern, using the following ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",Object(n.a)({parentName:"strong"},{href:"../notations-and-conventions#pattern-diagram-notations"}),"notations and conventions")),":"),Object(r.b)("img",{alt:"Conceptual model of the 'Guardianship' pattern",src:Object(d.a)("images/patterns/pattern-guardianship-arrangement.png")}),Object(r.b)("p",null,"In the figure, concepts are placed in one of three areas that are elaborated in subsections."),Object(r.b)("h4",{id:"guardianship-governance"},"Guardianship Governance"),Object(r.b)(o.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"Parties")," that pursue ",Object(r.b)(o.a,{popup:"Objective: Something toward which a Party (its Owner) directs effort (an aim, goal, or end of action).",reference:"/framework/docs/terms/objective",mdxType:"Term"},"objectives")," related to the caring for, defending of specific ",Object(r.b)(o.a,{popup:"Entity: someone or something that is known to exist.",reference:"/framework/docs/terms/entity",mdxType:"Term"},"entities"),", need to specify the kinds of entities that are to be cared for (which we call a ",Object(r.b)(o.a,{popup:"Dependent (in a Guardianship Arrangement): an Entity for the caring for and/or protecting/guarding/defending of which a Guardianship Arrangement has been established.",reference:"/framework/docs/terms/dependent",mdxType:"Term"},"dependent"),"), establish the rules that specify what this care consists of and how it comes to pass, ensure that these rules are enforced, and provide a mechanism to resolve any disputes or unforeseen circumstances. In other words: such parties are ",Object(r.b)(o.a,{popup:"Jurisdiction: the composition of a Legal System (legislation, enforcement thereof, and conflict resolution), a Party that governs that Legal System, a scope within which that Legal System is operational, and one or more Objectives for the purpose of which the Legal System is operated.",reference:"/framework/docs/terms/jurisdiction",mdxType:"Term"},"jurisdictions")," whose ",Object(r.b)(o.a,{popup:"Legal-system: a system in which rules are defined, and mechanisms for their enforcement and conflict resolution are (implicitly or explicitly) specified.",reference:"/framework/docs/terms/legal-system",mdxType:"Term"},"legal system")," provides the rules, enforcement, and resolution mechanisms.",Object(r.b)("p",null,"Different objectives lead to different kinds of guardianships. For example, the objective that children should be taken care of, get a good education etc. may lead to a guardianship type called 'Parenthood'. Others may lead to guardianship types such as 'Curatorship', 'Financial Administration', 'Legal Custody', etc."),Object(r.b)("p",null,"Note that dependents need not always be"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"people that are somehow very needy. The ",Object(r.b)(o.a,{popup:"Management: the act or process of managing or actually realizing of (the results associated with) a set of Objectives by the Owner of these Objectives.",reference:"/framework/docs/terms/management",mdxType:"Term"},"manager")," of a department in a company may be tasked to care for the wellbeing of the workers in his department, which doesn't require such workers to be incapable of doing that for themselves."),Object(r.b)("li",{parentName:"ul"},"people. Enterprises can have curators that care for an enterprise that has trouble to continue its existence. A historical heritage site might also become a dependent in a specific kind of guardianship type. Even some kinds of ",Object(r.b)(o.a,{popup:"Ownership (of an Entity over another in a Jurisdiction): the rights and duties, as defined and enforced in that Jurisdiction, of that Entity to enjoy, dispose of, and control the other Entity.",reference:"/framework/docs/terms/ownership",mdxType:"Term"},"ownership")," may qualify as a guardianship, which is the case when the rights and duties that the ",Object(r.b)(o.a,{popup:"Owner (of an Entity): the role that a Party performs when it is exercizing its legal, rightful or natural title to control that Entity.",reference:"/framework/docs/terms/owner",mdxType:"Term"},"owner")," has to enjoy, dispose of, and control the (",Object(r.b)(o.a,{popup:"Owned (by an Owner, in some Jurisdiction): an Entity over which another Entity (its Owner) has the power (duty, right) to enjoy it, dispose of it and control it; that power is limited to (the scope of) that Jurisdiction, and by its rules.",reference:"/framework/docs/terms/owned",mdxType:"Term"},"owned"),") entity also serve to care for, or defend that entity.")),Object(r.b)("p",null,"Guardianship ",Object(r.b)(o.a,{popup:"Governance: the act or process of governing or overseeing the realization of (the results associated with) a set of Objectives by the Owner of these Objectives.",reference:"/framework/docs/terms/governance",mdxType:"Term"},"governance")," is the acts/processes of governing/overseeing the control and direction of whatever relates to guardianships. It oversees and directs the establishment of ",Object(r.b)(o.a,{popup:"Guardianship-type (in a Jurisdiction): a class of Guardianship Arrangements within the Jurisdiction that governs and manages them.",reference:"/framework/docs/terms/guardianship-type",mdxType:"Term"},"guardianship types"),", defining the various stakeholder roles and associating their rights and duties towards one another."),Object(r.b)("p",null,"The ",Object(r.b)(o.a,{popup:"Legal-system: a system in which rules are defined, and mechanisms for their enforcement and conflict resolution are (implicitly or explicitly) specified.",reference:"/framework/docs/terms/legal-system",mdxType:"Term"},"legal system")," of the ",Object(r.b)(o.a,{popup:"Jurisdiction: the composition of a Legal System (legislation, enforcement thereof, and conflict resolution), a Party that governs that Legal System, a scope within which that Legal System is operational, and one or more Objectives for the purpose of which the Legal System is operated.",reference:"/framework/docs/terms/jurisdiction",mdxType:"Term"},"jurisdiction")," that governs a guardianship type would contain (and enforce) the (process) rules for defining and modifying guardianship types."),Object(r.b)("p",null,"Similarly, that legal system would also specify the rules for creating, changing/updating, and destroying ",Object(r.b)(o.a,{popup:"Guardianship Arrangement (in a Jurisdiction): a set of rights and duties between Legal Entities of the Jurisdiction that have been established and are enforced within that Jurisdiction for the purpose of caring for and/or protecting/guarding/defending one or more of these Entities.",reference:"/framework/docs/terms/guardianship-arrangement",mdxType:"Term"},"guardianship arrangements")," that instantiate such a guardianship type."),Object(r.b)("p",null,"It seems obvious that the way in which the legal system enforces these rules, and settles any disputes, is a large part of the impact that guardianship arrangements will, or fail to have."),Object(r.b)("h4",{id:"define-time-guardianship-types"},"Define-time: Guardianship Types"),Object(r.b)("p",null,"The define-time aspect of guardianships is all about about the design of ",Object(r.b)(o.a,{popup:"Guardianship-type (in a Jurisdiction): a class of Guardianship Arrangements within the Jurisdiction that governs and manages them.",reference:"/framework/docs/terms/guardianship-type",mdxType:"Term"},"guardianships types"),", i.e. the specification of a class of (runtim) ",Object(r.b)(o.a,{popup:"Guardianship Arrangement (in a Jurisdiction): a set of rights and duties between Legal Entities of the Jurisdiction that have been established and are enforced within that Jurisdiction for the purpose of caring for and/or protecting/guarding/defending one or more of these Entities.",reference:"/framework/docs/terms/guardianship-arrangement",mdxType:"Term"},"guardianship arrangements"),", which would then serve one or more ",Object(r.b)(o.a,{popup:"Objective: Something toward which a Party (its Owner) directs effort (an aim, goal, or end of action).",reference:"/framework/docs/terms/objective",mdxType:"Term"},"objectives")," of the ",Object(r.b)(o.a,{popup:"Jurisdiction: the composition of a Legal System (legislation, enforcement thereof, and conflict resolution), a Party that governs that Legal System, a scope within which that Legal System is operational, and one or more Objectives for the purpose of which the Legal System is operated.",reference:"/framework/docs/terms/jurisdiction",mdxType:"Term"},"jurisdiction"),' that defines (and further governs) it. For example, a jurisdiction could define a guardianship type called "Financial Guardianship", that would serve the objective of ensuring that the adults that are physically or mentally (partially) incapable of managing their own finances are taken care of, by ensuring support aimed at keeping them out of financial trouble.'),Object(r.b)("p",null,"A guardianship type basically defines a set of duties and rights and a set of stakeholder roles that allow these duties and rights to be assigned to, or directed at. Note that one part of such rights and duties pertain to the realization of the objective(s) that the guardianship type was created for, while another part pertains to the management- and governance processes."),Object(r.b)("p",null,"Every guardianship type has one stakeholder role that is (also) referred to as its dependent (role). The other roles may be referred to as guardian roles. Different guardianship types may use different role(name)s to refer to their respective dependent roles."),Object(r.b)("p",null,'In our example of a \'Financial Guardianship\', we could have stakeholder roles such as "Financial Administrator", "Judge" and "Party placed under administration" (which is the dependent role), and associate rights and duties e.g. as follows:'),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},'"',"[Financial Administrator]"," must ensure that ","[Party placed under administration]",' has sufficient funds to pay for housing and food";'),Object(r.b)("li",{parentName:"ol"},'"',"[Party placed under administration]",' may not enter into financial obligations";'),Object(r.b)("li",{parentName:"ol"},'"',"[Financial Administrator]"," has a right to look into, and transfer money out of any bank account of ","[Party placed under administration]",'";'),Object(r.b)("li",{parentName:"ol"},'"',"[Judge]"," must establish the a compenstation arrangement for ","[Financial Administrator]",'";'),Object(r.b)("li",{parentName:"ol"},'"Every year, ',"[Financial Administrator]"," must submit a written report to ","[Judge]",' in which (s)he accounts for all actions taken under the guardianship arrangement";'),Object(r.b)("li",{parentName:"ol"},'"',"[Judge]",' must review the rights and duties of an arrangement each year and update them if such is needed to better realize the objectives for which the arrangement exists".')),Object(r.b)("p",null,"The example shows that"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"there is no such thing as 'the dependent (role)'; in the define-time context, the phrase 'dependent' is specific for a guardianship type, and only serves as a placeholder for one of its stakeholder roles."),Object(r.b)("li",{parentName:"ul"},"names of stakeholder roles only serve as placeholders, that will be assigned ",Object(r.b)(o.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"parties")," when the guardianship type is instantiated;"),Object(r.b)("li",{parentName:"ul"},"the various roles are implicitly defined by the rights and duties that have been assigned to them - there is no real need to explicitly describe them;"),Object(r.b)("li",{parentName:"ul"},"multiple parties may be caring for a dependent in their own specific way (in the example, the Judge cares by ensuring that the Financial Administrator does not prey on the party that is placed under administration);"),Object(r.b)("li",{parentName:"ul"},"'caring for' extends to making sure that due process is being followed, the guardianship arrangement is being properly managed, and supervised - all this can be specified in terms of stakeholder roles, rights and duties;"),Object(r.b)("li",{parentName:"ul"},"one role, that can have an arbitrary name as any other stakeholder role, must be available for the dependent to play. It is called the 'dependent-role'. The other roles are called 'guardian-roles'.")),Object(r.b)("h4",{id:"run-time-guardianship-arrangements"},"Run-time: Guardianship Arrangements"),Object(r.b)("p",null,"The run-time aspect of guardianships is all about about the establishing, using and management of actual ",Object(r.b)(o.a,{popup:"Guardianship Arrangement (in a Jurisdiction): a set of rights and duties between Legal Entities of the Jurisdiction that have been established and are enforced within that Jurisdiction for the purpose of caring for and/or protecting/guarding/defending one or more of these Entities.",reference:"/framework/docs/terms/guardianship-arrangement",mdxType:"Term"},"guardianships arrangements"),". This includes the assignment of ",Object(r.b)(o.a,{popup:"Legal Entity (of a Jurisdiction): an Entity that is known by, recognized to exist, and registered in that Jurisdiction.",reference:"/framework/docs/terms/legal-entity",mdxType:"Term"},"legal entities")," to the various stakeholder roles, and the management of such assignments. It also includes the management of the actual rights and duties or such legal entities."),Object(r.b)("p",null,"Typically, the ",Object(r.b)(o.a,{popup:"Jurisdiction: the composition of a Legal System (legislation, enforcement thereof, and conflict resolution), a Party that governs that Legal System, a scope within which that Legal System is operational, and one or more Objectives for the purpose of which the Legal System is operated.",reference:"/framework/docs/terms/jurisdiction",mdxType:"Term"},"jurisdiction")," that enforces (and governs) a ",Object(r.b)(o.a,{popup:"Guardianship-type (in a Jurisdiction): a class of Guardianship Arrangements within the Jurisdiction that governs and manages them.",reference:"/framework/docs/terms/guardianship-type",mdxType:"Term"},"guardianship type")," has rules that specify the conditions that allow a guardianship arrangement of that type to be created, including the ",Object(r.b)(o.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"parties")," that must do this. When a guardianship arrangement is established, it starts as a copy of the guardianship type that it instantiates. Then, the dependent-role is assigned to the legal entity that will be fulfilling that role (or more legal entities if that is appropriate). Similarly, most, if not all guardianship-roles are assigned to a legal entity. Note that the the rules that govern the guardianship arrangements may specify that a specific guardian-role is reserved for the party that manages the guardianship arrangement itself."),Object(r.b)("p",null,"Next, every duty/right type can now be converted into a duty/right instance, by replacing the role names by the names of the legal entities that fulfill the role. For example, assume that a guardianship arrangement is established in which Dick is assigned the role of 'person placed under administration', Alice the 'financial administrator' and Joe is the 'judge', whose role is to manage and supervise the guardianship arrangement. Then, the rights and duties would become:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},'"Alice must ensure that Dick has sufficient funds to pay for housing and food";'),Object(r.b)("li",{parentName:"ol"},'"Dick may not enter into financial obligations";'),Object(r.b)("li",{parentName:"ol"},'"Alice has a right to look into, and transfer money out of any bank account of Dick";'),Object(r.b)("li",{parentName:"ol"},'"Joe must establish the a compenstation arrangement for Alice";'),Object(r.b)("li",{parentName:"ol"},'"Every year, Alice must submit a written report to Joe in which (s)he accounts for all actions taken under the guardianship arrangement;'),Object(r.b)("li",{parentName:"ol"},'"Joe must review the rights and duties of an arrangement each year and update them if such is needed to better realize the objectives for which the arrangement exists".')),Object(r.b)("p",null,"In the session where the guardianship arrangement is established, these rights and duties may be reviewed and amended as appropriate. In our example, after having established the role assignments (and implicitly the initially associated duties and rights), Joe may decide"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},'to modify rule 3 to read: "Alice has a right to look into, and transfer money out of any bank account of Dick, except for Dick\'s savings account"'),Object(r.b)("li",{parentName:"ul"},"to add a rule that says: \"Alice may only transfer funds out of Dick's savings account if that transfer has been explicity approved by Dick.\nThis allows guardianship arrangements to be created and maintained in a way that is appropriate to the situation of all stakeholders.")),Object(r.b)("p",null,"Note that in general, rights and duties may refer to entities other than the ",Object(r.b)(o.a,{popup:"Guardian: a Party that has been assigned rights and duties in a Guardianship Arrangement for the purpose of caring for and/or protecting/guarding/defending the Entity that is the Dependent in that Guardianship Arrangement.",reference:"/framework/docs/terms/guardian",mdxType:"Term"},"guardian")," or ",Object(r.b)(o.a,{popup:"Dependent (in a Guardianship Arrangement): an Entity for the caring for and/or protecting/guarding/defending of which a Guardianship Arrangement has been established.",reference:"/framework/docs/terms/dependent",mdxType:"Term"},"dependent"),", e.g. a third party against whom a right or duty may or must be exercised. Still, such rights and duties can only be formulated for entities that are recognized to exist, i.e. are legal entities for, the governing jurisdiction."))}l.isMDXComponent=!0},234:function(e,t,a){"use strict";var n=a(0),i=a(20);t.a=function(){var e=Object(n.useContext)(i.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},235:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return s}));var n=a(234),i=a(237);function r(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var r=void 0===n?{}:n,s=r.forcePrependBaseUrl,o=void 0!==s&&s,d=r.absolute,h=void 0!==d&&d;if(!a)return a;if(a.startsWith("#"))return a;if(Object(i.b)(a))return a;if(o)return t+a;var c=a.startsWith(t)?a:t+a.replace(/^\//,"");return h?e+c:c}(r,a,e,t)}}}function s(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},237:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return i}))}}]);