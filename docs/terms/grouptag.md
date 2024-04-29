---
# Docusaurus header
id: grouptag
displayed_sidebar: tev2SideBar
# TEv2 Curated Text Header
term: grouptag
termType: concept
isa: tag
glossaryTerm:
glossaryText: "a [tag](@) that is used to group [terms](@) within a specific [scope](@)."
grouptags: [ ]
formPhrases: [ "grouptag{ss}", "group-tag{ss}" ]
# Origins/Acknowledgements
attribution: "[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)"
originalLicense: "[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"
---

# Grouptag

### Summary
A **Grouptag** is a [tag](@) that is used to group [terms](@) within a specific [scope](@).

Grouptags may be used within a [scope](@) to tag various sorts or [terms](@), thus representing the set of [terms](@) that are associated with that [tag](@). This may be used for different purposes. One example is to tag every [term](@) that is part of a [pattern](@) with a pattern-specific tag.

The [terminology pattern](pattern:terminology@) provides an overview of how this concept fits in with related concepts.

### Criteria
A **Grouptag** (of/within a [scope](@)) is a [tag](@) that is used within that [scope](@) to group [terms](@). It satisfies the [regex](@) `[a-z0-9_-]+`.

### Examples
Examples of grouptags are `meta-terms`, `governance-terms`, `paa-pattern-terms`, `essif-lab`, or `ctwg`
