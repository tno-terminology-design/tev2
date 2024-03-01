---
# Docusaurus header
id: mrg-import
displayed_sidebar: tev2SideBar
# TEv2 Curated Text Header
term: mrg-import
termType: concept
isa:
bodyFile: /specs/tools/13-mrg-import.md
glossaryTerm: "MRG Import (Tool)"
glossaryText: "is a tool in the [TEv2](@) toolbox that is run within a particular [scope](@) for the purpose of obtaining [MRGs](@) from other [scopes](@), as specified in the [scope's](@) [SAF](@), and putting them in the [scope's](@) [glossarydir](@)."
grouptags: [ "glossary-entries", "terminology-management-tools" ]
formPhrases: [ "mrg-import", "mrg-importer", "mrg-import-tool", "mrg-importer-tool" ]
# Curation status
status: proposed
created: 20230731
updated: 20230731
# Origins/Acknowledgements
contributors: RieksJ
attribution: "[TNO Terminology Design](https://tno-terminology-design.github.io/tev2-specifications/docs)"
originalLicense: "[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1)"
---

# MRG Importer

The **MRG Importer** is a tool in the [TEv2](@) toolbox that is run within a particular [scope](@) for the purpose of obtaining [MRGs](@) from other [scopes](@), as specified in the [scope's](@) [SAF](@), and putting them in the [scope's](@) [glossarydir](@). 

The MRG importer ensures that within the [scope](@), all [MRGs](@) are available that other tools (such as the [TRRT](@), [MRGT](@), [HRGT](@), etc.) may need to accomplish their tasks.

## Examples

1. In a collaborative terminology project with multiple scopes, the MRG importer retrieves and consolidates MRGs from individual scopes, making them available for querying and use.
2. The MRG importer is used to synchronize MRGs across multiple collaborating organizations, ensuring consistent terminology usage and interpretation.

## Notes

- The MRG importer simplifies the process of obtaining necessary MRGs, and ensures that any problems that might arise in that context, e.g. the need for providing credentials for obtaining MRGs from private repos, are handled in one place. Also, it reduces the need for manual data collection and copying.
- The availability of local copies of MRGs enhances the efficiency and reliability of terminology management activities.
