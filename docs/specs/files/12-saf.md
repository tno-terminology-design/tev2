---
id: saf
sidebar_label: SAF (Scope Admin File)
date: 20230103
---

import useBaseUrl from '@docusaurus/useBaseUrl'
import APITable from '@site/src/components/APITable';

# Scope Administration File (SAF)

A **Scope Administration File (SAF)** is a [YAML](https://yaml.org/) file, named `saf.yaml`, that provides a centralized record of the resources available in that [scope](@), facilitating their access by various tools involved in terminology management. It specifies where its [curated texts](@), [glossaries](@) etc. live, the relationships it has with other [scopes](@), and the specifications of the different [terminologies](@) that are [curated](@) within that [scope](@). The SAF of a [scope](@) is located in its [scopedir](@).

The directory within which the [SAF](@) lives, is the [scopedir](@) of the [scope](@) that it serves.

## Scope Administration File Field Descriptions

A [SAF](@) has three main parts, which we refer to as 'sections':
1. The **`scope`** (singular) section defines meta-data concerning the [scope](@) itself, both for technical use and human use. It shows where directories and files live that ar part of the [scope](@), and also ways in which people can contribute, raise issues, see what's going on, discuss, etc.
2. The **`scopes`** (plural) section contains a mapping between [scopetags](@) that are used within the [scope](@), and the associated [scopedirs](@). This enables tools to find the [SAF](@) of these [scopes](@), and from there all other directories, files etc. that live within them, e.g. to use/import their data.
3. The **`versions`** section specifies all versions of the [terminology](@) that are actively maintained by the [curators](@) of the [scope](@), and for each of them, the set of [terms](@) that constitute this [terminology](@).

The following sections specify the fields for each of these parts.

### SAF Terminology - Defining the Scope itself {#scope-section}

<details>
  <summary>Example of a `scope` section</summary>

~~~ yaml
#
# This is a Scope Administration File that can be used in conjunction with TEv2.
#
# The first section defines meta-data concerning the scope itself, both for technical use and human use.
# It shows where directories and files live that ar part of the scope, and also
# ways in which people can contribute, raise issues, see what's going on, discuss, etc.
#
scope:
  scopetag: tev2 # identifier that curators have determined for this terminology
  scopedir: https://github.com/tno-terminology-design/tev2-specifications/tree/master/docs  # URL of the scope-directory
  curatedir: terms # directory where all curated files are located. Full URL is `scopedir`/`curatedir`
  defaulttype: concept # text that is used to identify the default kind of [semantic unit](@) for a [curated text](@).
  glossarydir: glossaries # directory where all glossary files and related stuff are located. Full URL is `scopedir`/`glossarydir`
  defaultvsn: latest # vsntag that identifies the default terminology. MRG is located at `scopedir`/`glossarydir`/mrg.`scopetag`.`defaultvsn`.yaml
  license: LICENSE.md # file that contains the (default) licensing conditions. Full URL is `scopedir`/`license`
  statuses: [ proposed, approved, deprecated ] # list of status tags that are defined for semantic units in this scope
  issues: https://github.com/tno-terminology-design/tev2-specifications/issues # URL where issues can be raised and handled
  website: https://tno-terminology-design.github.io/tev2-specifications/docs-overview # base URL for creating links to rendered versions of Curated Texts
  curators: # contacting individual curators
  - name: RieksJ
    email: # we split up the email address to reduce the likelihood of the address being harvested for spamming
      id: rieks.joosten
      at: tno.nl
~~~

</details>

The following fields are defined for the `scope` section of a [SAF](@):

<details>
  <summary>Legend</summary>

1. **`Name`** contains the field name;
2. **`Req'd`** specifies whether (`Y`) or not (`n`, or `F`) the field is required to be present as a header field. The `F` means that we reserve this field for Future Use.
3. **`Description`** specifies the meaning of the field, and other things you may need to know, e.g. why it is needed, a required syntax, etc.

</details>

```mdx-code-block
<APITable>
```

| Name        | Req'd | Description |
| :---------- | :---: | :---------- |
| `scopetag`    | Y | [Scopetag](@) that [curators](@) of this scope have determined for this [terminology](@). The associated [scopedir](@) is specified in the section `scopes`. |
| `scopedir`    | Y | URL of the location of the [scopedir](@) associated with the [scopetags](@) listed in the `scopetags` field. |
| `curatedir`   | Y | Path to the directory where all [curated files](@) are located. This directory may contain subdirectories to allow [curators](@) to organize the files in any way they see fit. Full URL is `<scopedir>`/`<curatedir>`. `curatedir` may also be an empty string. |
| `glossarydir` | Y | Path to the directory where all [glossary](@)-related files are located. Full URL is `<scopedir>`/`<glossarydir>`. This directory SHOULD contain one [MRG](@) for every element in the version-section in the [SAF](@), and one or multiple [HRGs](@). It MAY contain other files, e.g. containing instructions, headers, footers or other things that are necessary for generating specific [glossaries](@). |
| `defaultvsn`  | Y | [versiontag](@) that [identifies](@) the default [terminology](@) for this [scope](@). The associated [MRG](@) is located at `scopedir`/`glossarydir`/mrg.`scopetag`.`defaultvsn`.yaml |
| `defaulttype` | n | Text that is used to identify the default kind of [semantic unit](@) for a [curated text](@). It is the default value for the `termType`-field in [curated texts](@). Default value for `defaulttype` is `concept`. |
| `website`     | n | Base URL for creating links to rendered versions of [Curated Texts](@). It should also serve as the home page of the [terminology](@). If not specified, it is assumed to be the empty string. |
| `navpath`     | n | Path to the directory where [Curated Texts](@) are rendered, relative to the value of `website`. What `curatedir` is for [Curated Texts](@), is `navpath` for the rendered versions of [Curated Texts](@). If not specified, it is assumed to be the empty string. |
| `navid`       | n | Name of the field in the [front matter](@) of a [body file](@) used by your static site generator in a URL, to uniquely identify that file (e.g., "id", "slug", "permalink"). If not specified, the filename of the [body file](@) will be used. | 
| `macros`      | n | [Form phrase macro map](@) that is to be used (overrides the default [macro map](#example@)) |
| `license`     | n | File in the root of the [scopedir](@) that contains the (default) licensing data. |
| `statuses`    | n | Ordered list of [tags](@) that are defined in this [scope](@) for specifying stages in the life-cycle of [semantic units](@). The first element in the list represents the first stage, and the last element the last stage in the life-cycle. |
| `issues`      | n | URL where issues can be reported and handled.|
| `curators`    | n | Data that can be used to contact individual [curators](@). |
| ...           | n | [Curators](@) are free to add additional, [scope](@)-specific fields if they like to. |

```mdx-code-block
</APITable>
```

### SAF Scopes - Mapping Scopetags and Scopedirs {#scopes}

The `scopes` section is a list that specifies a mapping between a [scopetag](@) as they are used in this [scope](@), and its  associated [scopedir](@). If you want to use multiple [scopetags](@) to refer to one particular (other) [scope](@), each of them needs its own mapping.

<details>
  <summary>Example of a `scopes` section</summary>

~~~ yaml
#
# The second section contains a mapping between scopetags that are used within the scope, and the associated scopedirs.
# This enables tools to find the [SAF](@) of these [scopes](@), and from there all other directories, files etc.
# that live within them, e.g. to use/import their data.
#
scopes:  #

- scopetag: essiflab # definition of (scope) tag(s) that are used within this scope to refer to a specific terminology
  scopedir: https://github.com/essif-lab/framework/tree/master/docs # URL of the scope-directory

- scopetag: essif-lab # define another scopetag for the same scopedir (just because you can)
  scopedir: https://github.com/essif-lab/framework/tree/master/docs # URL of the scope-directory

- scopetag: ctwg # definition of (scope)tag(s) that are used within this scope to refer to a specific terminology
  scopedir: https://github.com/trustoverip/ctwg # URL of the scope-directory
~~~

</details>

The following fields are defined for the `scopes` section of a [SAF](@):

<details>
  <summary>Legend</summary>

1. **`Name`** contains the field name;
2. **`Req'd`** specifies whether (`Y`) or not (`n`, or `F`) the field is required to be present as a header field. The `F` means that we reserve this field for Future Use.
3. **`Description`** specifies the meaning of the field, and other things you may need to know, e.g. why it is needed, a required syntax, etc.

</details>

:::info Editor's note
It may be simpler to change the `scopetags`-field, which is currently a list of scopetags, into a `scopetag`-field, which would specify a single scopetag. This would encourage curators to use no more than one scopetag for each scope they refer to, but if they really wanted to, they could make multiple entries with different scopetags that refer to the same scopedir.
:::

| Name        | Req'd | Description |
| ----------- | :---: | ----------- |
| `scopetag`    | Y | A (single) [scopetag](@), that the [curator(s)](@) of this [scope](@) has decided to use to refer to (the [terminology](@) of) a specific [scope](@). |
| `scopedir`    | Y | URL of the associated [scopedir](@). |

### SAF Versions - Enabling changes and updates in a scope's Terminology {#versions}

The third section (called `versions`) in the [SAF](@) specifies the [terminologies](@) that are actively maintained by the [curators](@) of the [scope](@). Each such [terminology](@) is [identified](@) (within that [scope](@)) by a (main) [versiontag](@) and optionally also alternative [versiontags](@). The contents of a [terminology](@) is specified by so-called [term selection instructions](@). See the [Terminology Construction page](/docs/manuals/curator/terminology-construction) and the [term selection syntax page](/docs/specs/syntax/term-selection) for details.

This `versions` section contains a list of fields that each specify one [terminology](@) and some meta-data, e.g., regarding the state/validity of the [terminology](@) over time. This may be of interest to the [curators](@) of other [scopes](@) as they need to decide whether or not to import [terms](@) from such a [terminology](@).

There must be at least one such field in the `versions` section, namely a field that specifies the default [terminology](@) of the scope, i.e., the [terminology](@) that is identified by the [versiontag](@) that is specified in the `defaultvsn` field of [the `scope` section](/docs/specs/files/saf#scope-section) of the [SAF](@).

<details>
  <summary>Example of a `versions` section</summary>

~~~ yaml
#
# The third section specifies the versions that are actively maintained by the curators.
# For each version, the set of terms is selected that constitute the terminology.
# See the Glossary Generation Tool (GGT) for details about the syntax and semantics.
#
versions:
  - vsntag: v0.9.4 # a versiontag that identifies this version from all other versions in the SAF
    altvsntags: # alternative verstiontags
      - latest
      - 0x921456
    termselection:
      - "tags[management]@essif-lab" # import all terms from the mrg of `essif-lab:latest` that have grouptag `management`.
      - "terms[party,community](@essif-lab:0.9.4)" # import the terms `party` and `community` from the mrg of `essif-lab:0.9.4`.
      - "*@tev2" # import all terms defined in the scope `tev2`
    status: proposed
    from: 20220312
    to:
  - vsntag: test # a versiontag that identifies this version from all other versions in the SAF
    altvsntags: # alternative verstiontags
      - 0x654129
    termselection:
      - "*@essif-lab" # import all terms defined in the scope `essif-lab`
      - "-tags[terminology]" # remove all terms tagged with the grouptag `terminology`
      - "*@tev2" # import all terms defined in the scope `tev2`
~~~

</details>

The following fields are defined for the `versions` section of a [SAF](@):

<details>
  <summary>Legend</summary>

1. **`Name`** contains the field name;
2. **`Req'd`** specifies whether (`Y`) or not (`n`, or `F`) the field is required to be present as a header field. The `F` means that we reserve this field for Future Use.
3. **`Description`** specifies the meaning of the field, and other things you may need to know, e.g. why it is needed, a required syntax, etc.

</details>

```mdx-code-block
<APITable>
```

| Name        | Req'd | Description |
| ----------- | :---: | ----------- |
| `vsntag`      | Y | [Versiontag](@) that that is used to [identify](@) this version within the set of all other versions that are maintained within this [scope](@). in this [SAF](@). It MUST NOT be changed during the lifetime of this version. |
| `altvsntags`  | n | List of alternative [versiontags](@) that may be used to refer to this version of the [scope's](@) [terminology](@). A typical use of this field would be to tag a version as the 'latest' version. |
| `license`     | n | File that contains the (default) licensing conditions. Full URL is `scopedir`/`license`. If not specified, its value defaults to the value of the `license` field in the `scope` section (of this [SAF](@)). The purpose of this field is to allow different versions of the [scope's](@) [terminology](@) to have different licenses. |
| `termselection` | Y | List of [term selection instructions](@) that are used to generate (this version of) the [scope's](@) [terminology](@). See the [Terminology Construction page](/docs/manuals/curator/terminology-construction) and the [term selection syntax page](/docs/specs/syntax/term-selection) for details. |
| `status`      | n | Text that [identifies](@) the status of the [term](@). ([Communities](@) of) [scopes](@) may specify values for this field. If not specified, the status SHOULD be assumed to be 'concept', 'draft', 'proposed', or similar. An example is the [status tags used by ToIP](https://github.com/trustoverip/concepts-and-terminology-wg/blob/master/docs/status-tags.md). |
| `from`        | F | Date at which it was decided to establish this version. |
| `to`          | F | Date at which this version will expire (or has expired). |

```mdx-code-block
</APITable>
```
:::info Editor's note
The `from` and `to` dates have been included to (in future) enable one to refer to a specific version of the terminology that was valid at a particular date. This feature needs to be worked out.
:::

## Notes