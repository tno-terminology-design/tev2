(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{96:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return m})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return l}));var s=a(2),r=a(6),n=(a(0),a(231)),i=a(232),o=a.n(i),c={id:"credential",title:"Credential",scopeid:"essifLab",type:"concept",typeid:"credential",stage:"draft",hoverText:"Credential: data, representing a set of Assertions (claims, statements), authored and signed by, or on behalf of, a specific Party.",glossaryText:"data, representing a set of %%assertions^assertion%% (claims, statements), authored and signed by, or on behalf of, a specific %%party^party%%.",date:20210601},m={unversionedId:"terms/credential",id:"terms/credential",isDocsHomePage:!1,title:"Credential",description:"Short Description",source:"@site/docs/terms/credential.md",slug:"/terms/credential",permalink:"/framework/docs/terms/credential",editUrl:"https://github.com/essif-lab/framework/-/tree/master/docs/terms/credential.md",version:"current"},d=[{value:"Short Description",id:"short-description",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Purpose",id:"purpose",children:[]},{value:"Criteria",id:"criteria",children:[]},{value:"Notes",id:"notes",children:[]},{value:"Related Concepts",id:"related-concepts",children:[]},{value:"References:",id:"references",children:[]}],p={rightToc:d};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(s.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h3",{id:"short-description"},"Short Description"),Object(n.b)("p",null,"A ",Object(n.b)("strong",{parentName:"p"},"credential")," is a set of (related) ",Object(n.b)(o.a,{popup:"Assertion: a declaration/statement, made by a specific Party, that something is the case.",reference:"/framework/docs/terms/assertion",mdxType:"Term"},"assertions")," (also referred to as claims, or statements), to which metadata is added (e.g. date of issuing), and a number of proofs, which typically include a  proof of provenance (i.e. proof that it was created on behalf of a specific ",Object(n.b)(o.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party"),"), and a proof of integrity (i.e. proof that the data hasn't changed since it was issued)."),Object(n.b)("h3",{id:"examples"},"Examples"),Object(n.b)("p",null,"In physical credentials, such as drivers licenses and passports, proofs of integrity usually apply to the physical document itself. They come in a variety of forms, such as the structure of the paper, holograms, watermarks, or (embedded) chips. The proof of provenance usually consists of the form-format of the credential and ",Object(n.b)(o.a,{popup:"Assertion: a declaration/statement, made by a specific Party, that something is the case.",reference:"/framework/docs/terms/assertion",mdxType:"Term"},"assertions")," about the document issuer."),Object(n.b)("p",null,"In digital credentials, such as (digital) certificates or ",Object(n.b)("a",Object(s.a)({parentName:"p"},{href:"https://www.w3.org/TR/vc-data-model/#dfn-verifiable-credentials"}),"verifiable credentials"),", the basic proofs (of provenance and integrity) usually consist of a digital signature of some kind. It therefor only 'works' for as long as the associated private/secret key actually remains a secret of the issuing ",Object(n.b)(o.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party"),"."),Object(n.b)("p",null,"Credentials whose ",Object(n.b)(o.a,{popup:"Assertion: a declaration/statement, made by a specific Party, that something is the case.",reference:"/framework/docs/terms/assertion",mdxType:"Term"},"assertions")," refer to some ",Object(n.b)(o.a,{popup:"Entity: someone or something that is known to exist.",reference:"/framework/docs/terms/entity",mdxType:"Term"},"entity"),", e.g. a person, an organization, an animal, a shipment, etc. In such cases, it must be possible for arbitrary ",Object(n.b)(o.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"parties")," to identify that ",Object(n.b)(o.a,{popup:"Entity: someone or something that is known to exist.",reference:"/framework/docs/terms/entity",mdxType:"Term"},"entity"),", and/or ",Object(n.b)(o.a,{popup:"Verify/verification of data: the act, by or on behalf of a Party, of determining whether that data is authentic (i.e. originates from the Party that authored it), timely (i.e. has not expired), and conforms to other specifications that apply to its structure.",reference:"/framework/docs/terms/verify",mdxType:"Term"},"verify")," an ",Object(n.b)(o.a,{popup:"Assertion: a declaration/statement, made by a specific Party, that something is the case.",reference:"/framework/docs/terms/assertion",mdxType:"Term"},"assertion")," by some other ",Object(n.b)(o.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," that identifies that ",Object(n.b)(o.a,{popup:"Entity: someone or something that is known to exist.",reference:"/framework/docs/terms/entity",mdxType:"Term"},"entity"),". To this end, credentials may contain ",Object(n.b)(o.a,{popup:"Assertion: a declaration/statement, made by a specific Party, that something is the case.",reference:"/framework/docs/terms/assertion",mdxType:"Term"},"assertions")," about characteristics of that ",Object(n.b)(o.a,{popup:"Entity: someone or something that is known to exist.",reference:"/framework/docs/terms/entity",mdxType:"Term"},"entity"),", the idea being that if a ",Object(n.b)(o.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," establishes that some ",Object(n.b)(o.a,{popup:"Entity: someone or something that is known to exist.",reference:"/framework/docs/terms/entity",mdxType:"Term"},"entity")," has (a sufficient number of) these characteristics, that ",Object(n.b)(o.a,{popup:"Entity: someone or something that is known to exist.",reference:"/framework/docs/terms/entity",mdxType:"Term"},"entity")," is the one bound to the credential. Attributes typically include one or more names, various dates, a photograph, etc. Other attributes might include biometrics, RFID-codes, bar-codes, etc."),Object(n.b)("h3",{id:"purpose"},"Purpose"),Object(n.b)("p",null,"A ",Object(n.b)("strong",{parentName:"p"},"credential")," serves to provide assurances regarding the provenance and integrity of data as it is being transferred between ",Object(n.b)(o.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"parties"),". Specializations of the generic credential concept may be created for the purpose of providing additional assurances."),Object(n.b)("h3",{id:"criteria"},"Criteria"),Object(n.b)("p",null,"A ",Object(n.b)("strong",{parentName:"p"},"credential")," is the composition of"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"a non-empty set of arbitrary statements (claims, ",Object(n.b)(o.a,{popup:"Assertion: a declaration/statement, made by a specific Party, that something is the case.",reference:"/framework/docs/terms/assertion",mdxType:"Term"},"assertions"),") that originate from a single ",Object(n.b)(o.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party"),";"),Object(n.b)("li",{parentName:"ul"},"a set of metadata (data about the credential itself);"),Object(n.b)("li",{parentName:"ul"},"a set of proofs, which includes at least proofs of provenance and integrity.")),Object(n.b)("h3",{id:"notes"},"Notes"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The term '",Object(n.b)(o.a,{popup:"Subject (of some coherent data set): the (single) Entity to which a coherent data set relates/pertains, such as attributes, Claims/Assertions, files/dossiers, (verifiable) credentials, Partial Identities, etc.",reference:"/framework/docs/terms/subject",mdxType:"Term"},"subject"),"' is often used in conjunction with a credential, as in 'the ",Object(n.b)(o.a,{popup:"Subject (of some coherent data set): the (single) Entity to which a coherent data set relates/pertains, such as attributes, Claims/Assertions, files/dossiers, (verifiable) credentials, Partial Identities, etc.",reference:"/framework/docs/terms/subject",mdxType:"Term"},"subject")," of the credential'. This phrase is ambiguous. It may refer to the ",Object(n.b)(o.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," (or ",Object(n.b)(o.a,{popup:"Actor: Entity that can act (do things), e.g. people, machines, but not Organizations.",reference:"/framework/docs/terms/actor",mdxType:"Term"},"actor"),") to which the credential was issued. It may also be used to indicate the ",Object(n.b)(o.a,{popup:"Entity: someone or something that is known to exist.",reference:"/framework/docs/terms/entity",mdxType:"Term"},"entity")," that every claim is made about, which needs not be the same."),Object(n.b)("li",{parentName:"ul"},"Anyone can create credentials containing arbitrary statements about anyone or anything. The mere fact that a statement comes in the form of a credential (i.e. with a signature) doesn't imply that it is true."),Object(n.b)("li",{parentName:"ul"},"The signature on a credential may have other meanings as well. For example, a ",Object(n.b)(o.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party")," may choose to only sign the credential data if it is convinced of the truth of the statements, in which case the credential 'payload' can be seen as an excerpt of the ",Object(n.b)(o.a,{popup:"Knowledge: The (intangible) sum of what is known by a specific Party, as well as the familiarity, awareness or understanding of someone or something by that Party.",reference:"/framework/docs/terms/knowledge",mdxType:"Term"},"knowledge")," of that ",Object(n.b)(o.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"party"),". ",Object(n.b)(o.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"Parties")," that sign credential data need to advertise what (other) meaning(s) their signature has, so that other ",Object(n.b)(o.a,{popup:"Party: an Entity that sets its Objectives, maintains its Knowledge, and uses that Knowledge to pursue its Objectives in an autonomous (sovereign) manner. Humans and Organizations are the typical examples.",reference:"/framework/docs/terms/party",mdxType:"Term"},"parties")," may decide whether or not they want to use that data for specific purposes.")),Object(n.b)("h3",{id:"related-concepts"},"Related Concepts"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(s.a)({parentName:"li"},{href:"https://www.w3.org/TR/vc-data-model/#dfn-verifiable-credentials"}),"verifiable credentials"))),Object(n.b)("h3",{id:"references"},"References:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"W3C VC ",Object(n.b)("a",Object(s.a)({parentName:"li"},{href:"https://www.w3.org/TR/vc-data-model/#dfn-credential"}),"definition of 'credential'")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(s.a)({parentName:"li"},{href:"https://www.w3.org/TR/vc-data-model/"}),"W3C Verifiable Credentials Data Model"))))}l.isMDXComponent=!0}}]);