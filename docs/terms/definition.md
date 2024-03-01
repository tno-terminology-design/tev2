---
# Docusaurus header
id: definition
displayed_sidebar: tev2SideBar
# TEv2 Curated Text Header
term: definition
termType: concept
isa:
glossaryTerm:
glossaryText: "the combination of a [term](@) and a descriptive text, where the [term](@) refers to a [concept](@) or other [semantic unit](@), and the descriptive text enables a set of [parties](@) to have the same understanding about that [concept](@). Ideally, the descriptive text is a criterion that such [parties](@) can use to determine what is, and what is not, an instance (or example) of that [concept](@)."
grouptags: [ ]
formPhrases: [ "definition{ss}", "good-definition{ss}" ]
# Curation status
status: proposed
created: 20220606
updated: 20220606
# Origins/Acknowledgements
contributors: RieksJ
attribution: "[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)"
originalLicense: "[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"
---

# Definition

### Summary
A **Definition** is the combination of a [term](@) and a descriptive text, where the [term](@) refers to a [concept](@) or other [semantic unit](@), and the descriptive text enables a set of [parties](@) to have the same understanding about that [concept](@). Ideally, the descriptive text is a criterion that such [parties](@) can use to determine what is, and what is not, an instance (or example) of that [concept](@). The quality of a definition is the extent in which [parties](@) can use it to actually demonstrate that they have the same understanding.

The problem that definitions (as we see them) contribute to solving is misunderstandings that may arise as every [party](@) has its own [knowledge](@essif-lab) and autonomously determines the [semantics](@) it uses to express itself in texts/speech/pictures, and interpret that of other parties. The fact that the semantics of parties is subjective makes it realistic to assume that the meaning that a party intends to convey as it expresses itself is not the same as how another party interprets that expression - a 'misunderstanding'.

All parties have learned, with varying degrees of sophistication, to identify misunderstandings, and ways to recover from that.

A common mechanism for reducing the likelihood of misunderstandings to occur, is to associate terms with texts that are crafted to help parties have the same understanding, i.e. definitions. This mechanism is sometimes overrated in the sense that definitions are often considered to be universally valid rather than only useful in specific [scopes](@).

Therefore, we insist that such texts

- are associated with a [scope](@) within which they are considered to be valid/useful (for the [objectives](@essif-lab) that [parties](@) pursue in that [scope](@));
- are phrased as a [criterion](https://www.lexico.com/definition/criterion) that every such [party](@) can evaluate so as to determine whether or not something qualifies to be referred to by that term.
The quality of such texts is the extent in which parties reach the same conclusion as they evaluate the criterion in an arbitrary use-case that is relevant for the scope.

The [terminology pattern](pattern:terminology@) provides an overview of how this concept fits in with related concepts.

The eSSIF-Lab [terminology process](@) provides guidance for making and maintaining quality definitions.
Practical guidance is provided by the report "[On Terminology, and the Resolution of Related Issues](http://resolver.tudelft.nl/uuid:964a90da-da81-4d38-9f45-84f3f5fa96b3)".

### Purpose
Working together is easier when you and your peers share the same ideas. We need a way to test and ensure, that you and your peers _actually_ have the same understanding, for the purpose of making cooperation easier. Doing so is expected to not only reduce the number of terminological discussions, but also improve the efficiency and effectiveness of the remaining discussions.

### Criteria
A **definition** is a text that comprises at a minimum:

- a [scope](@) that is [curated](@) by a [party](@), and that is related to (the pursuit of) a non-empty set of [objectives](@essif-lab);
- a [criterion](https://www.lexico.com/definition/criterion) that specifies the necessary and sufficient conditions for determining what does and what does not constitute some [concept](@) (idea, class of [entities](@));
- a [name or phrase](term@) that is used within the [scope](@) to refer to (unidentified, or arbitrary, or specific) [entities](@) that satisfy the criterion.

### Examples

- The definition of the term [definition](@) (a) is defined in, and hence valid in the scope `eSSIFLab`, (b) specifies a criterion (see the `Criteria` section above), and (d) has a name (i.e. `definition`) associated with it. Since it satisfies the criteria of `definition`, it can be referred to as 'the definition of `definition`'.
- The [concepts](@) defined within a particular [scope](@) have definitions associated with them, where the criteria, relevance and [terms](@) are typically specified in the [curated text](@) for that [concept](@).

### Notes

Note that this definition satisfies itself. Also note that a definition may be used in multiple scopes, where a scope that wants to use the definition that has been defined in another scope, may replace that name with one of its own choosing. This way the meaning expressed by the definition remains preserved.

You may want to create definitions that are both acceptable for business people (for whom it usually suffices that they get the gist of it) as for engineers (that need much more precision, up to the point where they can use it for formal reasoning). You face the challenge of conveying your intangible ideas or [concepts](@) with tangible words or phrases. You can do this by using [intensional definitions](https://en.wikipedia.org/wiki/Extensional_and_intensional_definitions), i.e. by defining criteria that specify *the necessary and sufficient conditions* for when the term you define should (not) be used. When defining such criteria, make sure they have the following properties:

- you are convinced that the vast majority of people in your audience will *make the same judgments as you do when applying these criteria* in a situation that you and your audience consider relevant; and
- the *ability to make this distinction is relevant* for one or more purposes of your intended audience.

Note that the actual word or phrase you choose as the [term](@) name for a [concept](@) is much less important than the criteria you define. If in a particular context another name would be more suitable, you can define another [term](@) for that other context (scope) that still refers to the concept you created the definition for.

The [Terminology Corpus](@) provides templates that help you do that, e.g. for [defining](@) [concepts](@) and for [defining](@) [terms](@). The report [On Terminology, and the Resolution of Related Issues](http://resolver.tudelft.nl/uuid:964a90da-da81-4d38-9f45-84f3f5fa96b3) provides further practical guidance for establishing and maintaining unambiguous and relevant terminology.

The difficulty of creating good definitions is widely recognized, and illustrated by an anecdote involving the ancient Greek philosophers Plato and Diogenes. According to the [tale](https://en.wikipedia.org/wiki/Diogenes#:~:text=According%20to%20Diogenes%20La%C3%ABrtius%2C%20when,flat%20nails%22%20to%20the%20definition.), Plato defined humans as "featherless bipeds." Diogenes, in a move to demonstrate the inadequacy of this definition, is said to have plucked a chicken and brought it into Plato's Academy, declaring, "Behold! I've brought you a man." As a response to this critique, the story goes, "with broad flat nails" was added to Plato's definition.
