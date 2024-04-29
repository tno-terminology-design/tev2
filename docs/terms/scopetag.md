---
# Docusaurus header
id: scopetag
displayed_sidebar: tev2SideBar
# TEv2 Curated Text Header
term: scopetag
termType: concept
isa: tag
glossaryTerm:
glossaryText: "a [tag](@) that is used to identify [scopes](@) from within a specific [scope](@)"
grouptags: [ ]
formPhrases: [ "scopetag{ss}", "scope-tag{ss}" ]
# Origins/Acknowledgements
attribution: "[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)"
originalLicense: "[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"
---

# Scopetag

### Summary
A **Scopetag** is a [tag](@) that is used to identify [scopes](@), e.g. in [TermRefs](@).

Scopetags identify a [scope](@) (from within a given [scope](@)), and hence can be used (within that given [scope](@)) to disambiguate [terms](@).

The [terminology pattern](pattern:terminology@) provides an overview of how this concept fits in with related concepts.

### Criteria
A **Scopetag** (of/within a [scope](@)) is a [tag](@) that is used within that [scope](@) to identify itself or other [scopes](@). It satisfies the [regex](@) `[a-z0-9_-]+`.

### Examples
Examples of scopetags are `essif-lab`, `toip`, or `ctwg`.

### Notes
Discussions about which [regex](@) a tag should satisfy must be held with care. For example, one might argue that allowing the `.` character for [versiontags](@) might be beneficial. However, allowing a `.` character in a [scopetag](@) may cause problems with (the alternative syntax) of [TermRefs](@), as email address in square brackets might then qualify as a [TermRef](@) while that is very likely not the [author](@)'s intention.