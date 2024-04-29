---
# Docusaurus header
id: terminology
displayed_sidebar: tev2SideBar
# TEv2 Curated Text Header
term: terminology
termType: concept
glossaryTerm:
glossaryText: "a set of [terms](scoped-term@) that are used within a single [scope](@) to refer to [concepts](@) and other [semantic units](@) of a single [party](@) (e.g. a [community](@)), enabling [parties](@) to reason and communicate ideas they have about one or more specific topics."
grouptags: [ ]
formPhrases: [ "terminolog{yies}" ]
# Origins/Acknowledgements
attribution: "[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)"
originalLicense: "[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"
---

# Terminology

### Summary
A **terminology** is a set of [terms](scoped-term@) that are used within a single [scope](@) to refer to [concepts](@) and other [semantic units](@) of a single [party](@) (e.g. a [community](@)), enabling [parties](@) to reason and communicate ideas they have about one or more specific topics. It may be viewed as a topic-specific subset of that [party's](@) [vocabulary](@).

As each [term](@) in the [terminology](@) comes with all sorts of related data, such as a [definition](@), [documentation](curated-text@) about the [semantic unit](@) that it represents, [terms](@) that can be used as synonyms, etc., and since (pointers to) all that data is gathered in a single [MRG entry](@), we can also say that a [terminology](@) consists of the set of [MRG entries](@) that hold such data of the [terms](@) that the [terminology](@) consists of.

As a consequence, it is easy [to generate](mrgt@) an [MRG](@) for a [terminology](@), as this is basically the collection of the [MRG entries](@) that constitute the [terminology](@) (apart from [some meta-data](/docs/specs/files/mrg#structure), of course). And from there, [human readable glossaries](hrg@) can be [derived](hrgt@).

A [terminology](@) may be versioned, i.e. associated with a [versiontag](@). This allows multiple [terminologies](@) to exist within a single [scope](@), enabling the [scope](@) to have one for specific purposes (e.g. for the further development of its [terms](@), or for use within a whitepaper).

A [terminology](@) can be documented by (at most) one [machine-readable glossary](mrg@), from which [human readable glossaries](hrg@) can be derived. Selecting the [(scoped) terms](@) that are part of a [terminology](@) and generating the various [glossaries](@) is done by the [curator(s)](@) of its [scope](@).

The [terminology pattern](pattern:terminology@) provides an overview of how this concept fits in with related concepts.

The [terminology construction manual](/docs/manuals/curator/terminology-construction) describes how to construct a [terminology](@) by selecting (groups of) [terms](scoped-term@), and manipulating such selections.

### Purpose
In order for [parties](@) to properly reason and/or communicate ideas ([concepts](@) and other [semantic units](@)) about some topic - in particular when it is a specialist topic - they have to establish a set of [terms](@), the meaning of which should be [defined](@) (or otherwise documented) in such a way that the likelihood of misunderstandings between them is minimized. This set of terms is called a `**terminology**`
