---
# Docusaurus header
id: terminology
displayed_sidebar: tev2SideBar
# TEv2 Curated Text Header
term: terminology
termType: pattern
isa:
glossaryTerm: "Terminology Pattern"
glossaryText: "a [mental model](@) that describes the relations between a [community](@), its (intangible) [knowledge](@essif-lab), and the artifacts we use to document that [knowledge](@essif-lab), such as [terms](@), [definitions](@), [mental models](@), [glossaries](@), etc."
grouptags: [ ]
formPhrases: [ "terminology-pattern{ss}" ]
# Curation status
status: proposed
created: 20220606
updated: 20220606
# Origins/Acknowledgements
contributors: RieksJ
attribution: "[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)"
originalLicense: "[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"
---

# The TEv2 Mental Model for Terminologies

import useBaseUrl from '@docusaurus/useBaseUrl'

This [mental model](@) describes the relations between a [community](@), its (intangible) [knowledge](@essif-lab), and the artifacts we use to document that [knowledge](@essif-lab), such as [terms](@), [definitions](@), [mental models](@), [glossaries](@), etc.

It aims to serve the following purposes:

- enabling members of a [community](@), as well as other [parties](@), to document their understanding of the [concepts](@) and other [semantic units](@) (e.g., [mental models](@)) that are relevant for their purposes (i.e., for realizing their [objectives](@essif-lab)).
- provide a solid basis for the design and development of a [set of IT tools](/docs-overview) that support [communities](@) as they document their [knowledge](@essif-lab).

### Introduction

This pattern has two basic parts:

1. the [management](@essif-lab)-related part. This part consists of a [community](@) that [owns](@essif-lab) its particular set of [objectives](@essif-lab) which exist for establishing cooperation between its members, and for which it needs to establish and maintain, a [terminology](@). [Managing, or curating](curate@) a [terminology](@) consists of realizing the [objectives](@essif-lab) that the terminology is intended to serve, i.e. to establish a set of [concepts](@), [definitions](@), [terms](@) and [mental models](@), the quality of which is meant to be such that
  - members of the [community](@) use them in the same, single meaning, thereby preventing difficulties in their cooperation, caused by differences in the individual understandings of words or phrases, and
  - non non-members of the [community](@) can obtain a precise understanding of the communications within that community.
Also, this [management](@essif-lab) may cause reference documents to be created and maintained, e.g. a [glossary](@) that lists the [terminology](@) of the [community](@), a [dictionary](@) that includes its [terminology](@) as well as [terminologies](@) from other, related [communities](@).

2. the terminology-related part. This is where [concepts](@), [definitions](@), [terms](@), [glossaries](@) etc. live. This part is what one needs to create tools/support for managing and maintaining a [terminology](@). Here, we have [concepts](@) with their [definitions](@) and [terms](@) as a means to refer to either. A [concept](@), its [definition](@) live in the same [scope](@), and within that [scope](@) there must be a [term](@) to refer to that [concept](@) and its [definition](@). Within a specific [scope](@), every [term](@) is associated with precisely one such [concept](@) and [definition](@). However, within a [scope](@), a [concept](@)/[definition](@) pair may be referred to by multiple [terms](@), which are then synonyms or aliases of each other.

### Formalized model
Here is a visual representation of this pattern, using the following **[notations and conventions](/docs/miscellaneous/notations-and-conventions#pattern-diagram-notations)**:

<img
  alt="Conceptual model of the 'pattern-terminology' pattern"
  src={useBaseUrl('images/pattern-terminology-support.png')}
/>

The figure shows three areas:

- the [white area](#white) has the [concepts](@) that deal with the organization of this.
- the [green area](#green) represents a [scope](@), in which at most one [terminology](@) lives, and that also includes [tags](@), [scoped terms](@) and [definitions](@). The (contents of the) [scope](@) is curated (developed, maintained) by a single so-called [terms-community](@).
- the [yellow area](#yellow) represents a [knowledge](@essif-lab), in which intangible artifacts such as [objectives](@essif-lab) and [concepts](@) reside.

#### White: Parties, Communities {#white}

Members of a [community](@) that want or need to collaborate with each other may feel the need for a [terminology](@) that helps to effectively prevent any misunderstandings within the [community](@) that may hamper collaboration. [Communities](@) typically express this need as a wish for creating a [glossary](@).

Our [model](mental-model@) expresses this idea by saying that a [community](@) can commit to use a [terminology](@), that can be represented/rendered as a [(human readable) glossary (HRG)](hrg@) (which can not only be generated in different formats (e.g. as a PDF, HTML website, etc.), but also have customized data in its entries). When a [community](@) is committed to use a [terminology](@), this means that whenever any of its members uses a [term](@) from that [terminology](@) in some communication, then the meaning of that [term](@) is documented (by means of artifacts in the [green area](#green).

A [terms-community](@) is a [community](@) (whose members are called [curators](@)) that aims to serve/support specific [communities](@) (including perhaps itself) by enabling them to:
  - prevent misunderstandings amongst their members, and
  - [author](@) communications in such a way that the likelihood of non-members misunderstanding such communications is minimized.
- [manages](@essif-lab) these [objectives](@essif-lab) itself, producing results that include:
  - one or more [HRGs](@) that each render the [terminology](@) of the [scope](@) that it curates;
  - the specification of (any number of) [tags](@) that either
    - identify a [scope](@) (and thereby implicitly also its [terminology](@)) - the so-called [scope tags](@), or
    - can be associated with [definitions](@) as a means of grouping the [concepts](@) such [definitions](@) define - the so-called [group tags](@).
    - identify a specific version of the [terminology](@) - the so-called [version tags](@).

We refer the reader to

- the [Curators Manual](/docs/manuals/curator/curator-overview), for further details about [curation](@).
- the [governance and management pattern](pattern:governance-and-management@essif-lab) to learn more about ways in which different [communities](@) can seek to serve each other.

Note that for a [terms-community](@) to serve itself, it may want to commit to a [terminology](@) such as the one we are developing here.

#### Green: Scopes - Data Artifacts for Referencing and Documenting Knowledge {#green}

Every [terminology](@) is scoped, i.e. part of a [scope](@). This [scope](@) consists of various other things, including [definitions](@), ([typed](term-type@)) [scoped terms](@), [curated texts](@), [MRG entries](@), various kinds of [tags](@), and more (see the figure above). These components of the [scope](@) exist for as long as the [scope](@) exists.

The central [concept](@) in this part is the [curated text](@), as it [documents](/docs/specs/files/curated-text-file) a specific [semantic unit](@), provides its [definition](@) (when appropriate), and specifies the [scoped term](@) that represents such [semantic unit](@) as well as its [synonyms](@). It also contains various other data, e.g. the [term type](@) (which is also the type of the [semantic unit](@)),  the list of [grouptags](@) that identify the groups of [semantic units](@) to which (the [semantic unit](@) that) it (documents,) belongs, etc. Basically, *any* changes to documentation or attributes related to a particular [semantic unit](@) are done in its [curated text](@).

Another important [concept](@) is the [MRG entry](@), i.e. a [(machine readable) representation](/docs/specs/files/mrg#entries) of the meta data of a [semantic unit](@) that it refers to. Note that this [semantic unit](@) need not reside in the [knowledge](@essif-lab) of the [community](@) that owns the [scope](@) (in which case it would mainly consists of the header data of the [curated text](@) that documents the [semantic unit](@)), but can also reside in another [knowledge](@essif-lab) (in which case it would be a copy of an [MRG entry](@) in an [MRG](@) of a [scope](@) that documents that [semantic unit](@)).

The [MRG](@) for a specific [terminology](@) of the [scope](@) is a [structure](/docs/specs/files/mrg#structure) that consists of some meta-data followed by a set of such [MRG entries](@) (with some meta data added). Within a [scope](@), multiple [terminologies](@) (and hence also multiple [MRGs](@)) can exist, e.g., which are distinguished between by their [version tags](@).

A [community](@) will typically a [HRG](@) - the human readable equivalent of an [MRG](@). However, [HRGs](@) may be created from the different [MRGs](@) that exist. Also, different renderings of an [MRG](@) may lead to the creation of different [HRGs](@). The kinds of [HRGs](@) to be generated depend on the specific needs of the [community](@) that will be using it.

Note that a [HRG](@) is derived from a single [MRG](@). We foresee that in the future, [dictionaries](@), which document [terms](@) from multiple [terminologies](@), can also be generated, but that would not be part of a specific [scope](@), but rather an activity that a [terms community](@) could do itself.

Apart from the multiplicity constrained that are showed in the figure, some additional rules apply:

- every [scoped term](@) should identify at least one [MRG entry](@), and hence be part of (at least) one of the [scope's](@) [terminologies](@).
- The [scoped term](@) (and every of its [synonyms](@)) that is specified by a [curated text](@), represents the [semantic unit](@) that this [curated text](@) documents.
- If a [curated text](@) contains a [definition](@), then that [definition](@) defines the [semantic unit](@) that the [curated text](@) documents, and the [scoped term](@) (and every of its [synonyms](@)) that is specified by that [curated text](@) will (implicitly) refer to that definition.

When we say that a [terms-community](@) [curates](@) a [scope](@), this means that the [terms-community](@)

- [manages](@essif-lab) (creates/maintains) the set of [definitions](@) that define [concepts](@) that are relevant for realizing its [objectives](@essif-lab);
- [manages](@essif-lab) (creates/maintains) all [terminologies](@) of the [scope](@), and designate which of them is to be considered the default [terminology](@).
- ensures that a [terminology](@) consists of:
  - at least one term for every [definition](@) that is part of the [scope](@), and
  - at least one term for any other [definition](@) (which is part of *another* [scope](@), i.e. curated by another [terms-community](@)) that defines a concept that is relevant for realizing one or more [objectives](@essif-lab) of the [terms-community](@).
- [manages](@essif-lab) (creates/maintains) the various [tags](@) in the scope, i.e. defines a [scopetag](@) for the [scope](@), [versiontags](@) (if necessary) for the different versions of the [terminology](@) of that [scope](@), and (optionally) any [grouptags](@) for grouping sets of [terms](@).

#### Yellow: Intangible Concepts {#yellow}
The intangible [semantic units](@) (e.g., [concepts](@), [relations](@), [patterns](@) etc.) are important because this is where the misunderstandings live. The [knowledge](@essif-lab) of a [party](@) uses a subjective [conceptualization](@) of the world (that the [party](@) has perceived to be living in for as long as it exists) for its individual reasoning, arguing, communicating, decision making etc. Because of this, two [parties](@) that collaborate (i.e.: form a [community](@)) cannot be expected to have the same conceptualizations. However, it is a common belief that if one uses a [term](@) to refer to a [concept](@) in its [knowledge](@essif-lab), the other will then relate it to 'the same' [concept](@) within its own knowledge, that we should not assume actually exists. For example, when one of them uses the [term](@) 'identity', it knows which [concept](@) that relates to within its own [knowledge](@essif-lab). However, others need to hallucinate as to what that [concept](@) might be, and typically respond by thinking that the [concept](@) that the [term](@) refers to in their own [knowledge](@essif-lab) would be its intended meaning. In many cases that doesn't pose a problem, because the [concepts](@) of both [knowledges](@essif-lab) are 'sufficiently the same'. In other cases, the differences in meaning may be such that it disrupts the collaboration between the [parties](@). And that is when it helps to have 'good [definitions](@)', because they have the property that collaborators can assess whether or not the [concepts](@) in their [knowledge](@essif-lab) (that a well-defined [term](@) refers to) are 'sufficiently the same'.

In order to keep the work of devising [definitions](@) to a minimum, it helps to know the [objectives](@essif-lab) that the members of the [community](@) collaboratively seek to realize. Any [definition](@) should define a [concept](@) that is relevant for that collaboration. Other definitions are just useless work.
