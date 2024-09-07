---
id: ict
sidebar_label: Integrity Checker Tool (ICT)
date: 20220421
---

# Integrity Checker Tool (ICT)

import useBaseUrl from '@docusaurus/useBaseUrl'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<!-- Use 'Mark' as an HTML tag, e.g. <mark>text to mark</Mark?-->
export const mark = ({children}) => (
  <span style={{ color:'black', backgroundColor:'yellow', padding:'0.2rem', borderRadius:'2px', }}>
    {children}
  </span> );

:::info Editor's note
The text below will need a thorough revision due to various changes that have not yet been taken into account
:::

# Integrity Checker Tool (ICT)

The **Integrity Checker Tool ([ICT](@))** tests the integrity of (a selection of) the data in files that are [curated](@) within a particular [scope](@), i.e. the [SAF](@), the [MRGs](@), and [curated texts](@). The integrity checking of other data, e.g. [formatted texts](@), such as [HRGs](@), is outside the scope of the [ICT](@).

In order for the [ICT](@) to be used optimally, it will assume for specific kinds of files that the integrity of other files is guaranteed, as follows:

| When testing a ... , | the integrity is assumed of |
| :------------------- | :-------------------------- |
| [MRG](@)             | [SAF](@)                    |
| [curated file](@)    | [MRG](@) and [SAF](@)       |

The idea behind this is to enable [curators](@) to only test changes they have made rather than testing the entire set of files.

:::info Editor's Note
As the tool hasn't been made, and no practical experience has been gained, many of these optimizations may not work in the first versions.
:::

:::info Editor's Note
There's a lot of duplication in syntax specs. For example, the [SAF spec](docs/specs/files/saf) and [MRG spec](/docs/specs/files/mrg) define the [regex](@) for various kinds of tags all over the place. It would be nice to have a way by which syntax can be specified in one location that is 'naturally predictable' so that both readers and maintainers of the documentation can easily find it. One way might be to include the syntax in a 'popover', i.e. that we define stuff with particular syntax as a [concept](@) and have the syntax be included in its 'popover text'.
:::


## Installing the Tool

The tool can be installed from the command line and made globally available by executing

<details>
  <summary><mark>This section is written when there's an actual tool to install</mark></summary>

We expect that it will be something like

~~~
npm install -g @tno-terminology-design/ict
~~~

</details>

<details>
  <summary>Before running the tool from the command line, make sure you have met the necessary prerequisites depending on your operating environment.</summary>

<Tabs
  defaultValue="cmd.exe"
  values={[
    {label: 'CMD.exe (Windows)', value: 'cmd.exe'},
    {label: 'PowerShell(Windows)', value: 'powershell'},
    {label: 'Bash (Linux/Mac)', value: 'bash'},
  ]}>
  
<TabItem value="cmd.exe"><br/>

1. **Node.js and NPM**: Ensure Node.js and NPM are installed.
2. **Global Installation**: If you have installed the package globally, confirm the global NPM modules path by running `npm config get prefix`. The global modules are usually stored under `<prefix>/node_modules`.
3. **Environment Variables**: Add the path to global NPM binaries to your system's PATH environment variable. This should be `<prefix>` on Windows. To add to PATH, you can edit your environment variables or run `set PATH=%PATH%;<prefix>` in the CMD.

</TabItem>
<TabItem value="powershell"><br/>

1. **Node.js and NPM**: Ensure Node.js and NPM are installed.
2. **Global Installation**: Check the global NPM modules path as in CMD.
3. **Environment Variables**: Update the PATH environment variable as in CMD. You can also use `$env:Path += ";<prefix>"` to update the PATH temporarily in the current PowerShell session.

</TabItem>
<TabItem value="bash"><br/>

1. **Node.js and NPM**: Ensure Node.js and NPM are installed.
2. **Global Installation**: If globally installed, run `npm config get prefix` to get the global modules path, usually `<prefix>/lib/node_modules`.
3. **Environment Variables**: Add the `<prefix>/bin` directory to your `PATH` if it's not already. You can do this by adding `export PATH=$PATH:<prefix>/bin` to your `~/.bashrc` or `~/.zshrc` file.

</TabItem>
</Tabs>
</details>

## Calling the Tool

The behavior of the [ICT](@) can be configured per call e.g. by a configuration file and/or command-line parameters. Examples include specifications for:

The command-line syntax is as follows:

~~~
ict [ <scopedir> ] <cmd> [ <paramlist> ]
~~~

| Where: |        |
| :----- | :----- |
| `<scopedir>` | (optional) specifies the [scopedir](@) of the [scope](@) whose integrity is to be tested. If `<scopedir>` is omitted and a configuration file is used, its value is read from that file. If cases where `<scopedir>` isn't specified, the current directory is assumed to be the [scopedir](@).<br/>In this document, we use the term "**this scopedir**" to refer to the value of `<scopedir>`, and **this scope**" to refer to the associated [scope](@). |
| `<cmd>` | The following commands are valid:<br/><ul><li>`-saf`: check the integrity of the [scope's](@) [SAF](@). It does not take any further parameters.</li><li>`-mrg`: check the integrity of (one of) the [scope's](@) [MRG(s)](@). Additional parameters can be used, e.g. to specify a particular version of the [MRG](@) to be checked.</li><li>`-txt`: check the integrity of _this scope's_ [curated files](@). Additional parameters can be used, e.g. to select a particular subset of these files.</li><li>`-all`: check all [curated](@) files within _this scope_. Additional parameters may be used, e.g. to skip the checking of specific files.</li></ul> |
| `<paramlist>` | a list of parameters that provide further specifications for what the [ICT](@) should be checking. |

### Parameters (Command-line arguments)

:::info Editor's Note
The current set of parameters is just an initial suggestion. We'll need to see what will actually be needed in practice.
:::

<details>
  <summary>Legend</summary>

The columns in the following table are defined as follows:
1. **`Key`** is the text to be used as a key.
2. **`Value`** represents the kind of value to be used.
3. **`Req'd`** specifies whether (`Y`) or not (`n`) the field is required to be present when the tool is being called. If (always) required, it MUST either be present in the configuration file, or as a command-line parameter.
4. **`Cmd`** specifies a `<cmd>` value: if the [ICT](@) is called with this `<cmd>`, then this parameter will be used by the tool as described. A `*` in this field indicates that this parameter can be used with every command.
5. **`Description`** specifies the meaning of the `Value` field, and other things you may need to know, e.g. why it is needed, a required syntax, etc.

</details>

| Key      | Value      | Req'd | Cmds | Description |
| :--      | :----      | :---: | :--: | :---------- |
| `config` | `<path>`   | n | * | Path (including the filename) of the tool's (YAML) configuration file. This file contains the default key-value pairs to be used. Allowed keys (and the associated values) are documented in this table. Command-line arguments override key-value pairs specified in the configuration file. This parameter SHOULD NOT appear in the configuration file itself. |
| `scopedir` | `<path>` | Y | * | Path to the [scopedir](@) within which the tool is to operate, i.e.: _this scopedir_. |
| `syntax` | | n | * | This argument has no value. If present, the syntax of all (YAML) fields in the file is checked against their specifications (see e.g. [SAF specs](docs/specs/files/saf), [Curated Texts](/docs/specs/files/curated-text-file), [TermRefs](/docs/specs/syntax/term-refs)), etc., etc. |
| `vsntag` | `<vsntag>` | | `-mrg` | [versiontag](@) that is used to select the version of the [MRG](@) to be checked. The [MRG](@) that is selected will either have `<vsntag>` as the contents of the field `terminology.vsntag`, or as an element in the list of `terminology.altvsntags`.  |
| `term` | `<term>` | n | -txt | [term](@) that identifies a particular [curated file](@). The [curated file](@), whose (front-matter) field `term` matches this parameter, will be integrity-checked. |
| `grouptags` | `<grouptags>` | n | -txt | List of [grouptags](@). Every [curated file](@), whose (front-matter) field `grouptags` has an element that also appears as an element in the `<grouptags>` list, will be integrity-checked. |

## Integrity Checks

The checks that are done on files depend on the kind of file that is being checked. This section lists the tests for the various kinds of files. Every file is assumed to be part of _this scope_, and reside in the associated [scopedir](@) (i.e.: _this scopedir_).

### SAF integrity

The [SAF](@) must be a file that contains valid YAML syntax.

The integrity of a [SAF](@) requires the following conditions to be satisfied for the key's in the `scope` section:

- `scopedir` must point to the directory in which the [SAF](@) is stored for public use (i.e. in this scopedir).
- `curatedir`, when appended to the value of "`scopedir`/", must point to the directory that stores the [curated files](@).
- `glossarydir` must point to an existing directory.
- `mrgfile` must be an existing file in directory "`scopedir`/" (note that an empty [terminology](@) is still a [terminology](@) that can have an [MRG](@)).
- `hrgfile` must be an existing file in directory "`scopedir`/" (note that an empty [terminology](@) is still a [terminology](@) that can have a [HRG](@)).
- `license` must be an existing file in the directory pointed to by `scopedir`.

The integrity of a [SAF](@) requires the following conditions to be satisfied for every element in the `scopes` section:

- `scopetags` must be a nonempty list of [scopetags](@).
- `scopedir` must be a valid URL, that points to an existing directory resource.

The integrity of a [SAF](@) requires the following conditions to be satisfied for every element in the `versions` section:

- `vsntag` SHOULD not appear as an element in the `altvsntags` field of this `version` element, and it MUST NOT appear in the `vsntag` or `altvsntags` fields of any other element in the `versions` section.
- `altvsntags` must be a (possibly empty) list of [versiontags](@), each of which SHOULD not appear in the `vsntag` field of the element, and MUST NOT appear in the `vsntag` or `altvsntags` fields of any other element in the `versions` section.
- `termselection` must be a non-empty list of [term selection instructions](@).
- `status` SHOULD be a non-empty field.

### MRG integrity

The integrity checking for [MRG](@) files assumes that the integrity conditions of a [SAF](@) file are satisfied, and that the [MRG](@) file itself contains valid YAML syntax.

The integrity checking comprises every (group of) test(s) as specified in this sub-section.

The [MRG](@) MUST have sections named `terminology`, `scopes`, and `entries`.

Integrity checks for the `terminology` section include:

- `scopedir` must point to the directory in which the [SAF](@) is stored for public use (i.e. in this scopedir).
- `vsntag` must be a [versiontag](@) that SHOULD not appear as an element in the `altvsntags` field.
- `altvsntags` must be a (possibly empty) list of [versiontags](@), none of which appear in the `vsntag` field.
- `license` must be an existing file in the directory pointed to by `scopedir`.

Integrity checks for the `scopes` section include:

- `scopetags` must be a nonempty list of [scopetags](@).
- `scopedir` must be a valid URL, that points to an existing directory resource other than the [scopedir](@) of the current [scope](@). This directory MUST contain a [SAF](@). <mark>Do we need an option to test the integrity of such [SAFs](@)?</mark>

Integrity checks for the `entries` section consist of one part that is generic for all entries, and another part that depends on the value of the `termType` field (so that checking of e.g. entries of type `concept` and of type `pattern` can have different checks.) The checks that every entry must pass include the following:

- `scopetag` MUST also appear as the value of `terminology.scopetag`, or as an element in one of the `scopes.scopetags` elements.
- `termType` SHOULD be <mark>tbd.</mark>
- `grouptags` MUST be a list of [grouptag](@) elements.
- `license` MUST be an existing file in the directory pointed to by `scopedir`.
- `status` SHOULD match an element in the list `scope.statuses` of the [SAF](@).
- `locator`, if specified, MUST have a readable resource (file) at `scopedir`/`curatedir`/`locator`, where `scopedir` and `curatedir` are specified in the [SAF](@).
- `navurl`, if specified, MUST return an HTML-resource when specified as the URL in a HTTP(S) request method `GET` or `HEAD`.

For specific kinds of [MRG entries](@), the following additional constraints MUST be satisfied:

<Tabs
  defaultValue="concept"
  values={[
    {label: 'Terms', value: 'term'},
    {label: 'Concepts', value: 'concept'},
    {label: 'Relations', value: 'relation'},
    {label: 'Mental Models', value: 'pattern'},
  ]}>

<TabItem value="concept"><br/>

The following constraints MUST hold for [MRG entries](@) of type `concept`:

- if a `glossaryText` contains a [TermRef](@), then the [TermRef](@) SHOULD be resolvable <mark>(reference to the term-ref-integrity checks)</mark>.
- `hoverText` MUST NOT contain any [TermRef](@), nor any other [markdown links](https://www.markdownguide.org/basic-syntax/#links).

</TabItem>
<TabItem value="term"><br/>

:::info Editor's note
As header fields for `term` termTypes need to be discussed, we do not yet specify any constraints
:::

</TabItem>
<TabItem value="relation"><br/>

### Header fields for `termType: relation`

:::info Editor's note
As `relation`s need to be discussed, we do not yet specify any constraints.
:::

</TabItem>
<TabItem value="pattern"><br/>

:::info Editor's note
As `pattern`s need to be discussed, we do not yet specify any constraints.
:::

</TabItem>
</Tabs>

:::info Editor's note
Checks need to be added to ensure congruence between terms and any synonyms that are defined for them. For example, they should have the same value in various fields, e.g., `termType`, `isa` (but not `glossaryText` or `synonymOf`)
:::
### Curated Text integrity

The integrity of any [curated text](@) file requires the integrity conditions of the [MRG](@) file to be satisfied, as well as the following conditions:

-  <mark>TBD</mark>

#### Concepts

The integrity of any [curated text](@) file that has `termType: concept` requires the integrity conditions of a [curated text](@) file to be satisfied, as well as the following conditions:

-  <mark>TBD</mark>

#### Patterns

The integrity of any [curated text](@) file that has `termType: concept` requires the integrity conditions of a [curated text](@) file to be satisfied, as well as the following conditions:

-  <mark>TBD</mark>


## Processing, Errors and Warnings

The [ICT](@) starts by reading its command-line and configuration file. If the command-line has a key that is also found in the configuration file, the command-line key-value pair takes precedence. The resulting set of key-value pairs is tested for proper syntax and validity. Every improper syntax and every invalidity found will be logged.

Then, the [ICT](@) <mark>TBD</mark>

The [ICT](@) logs every error- and/or warning condition that it comes across while processing its configuration file, command-line parameters, and input files, in a way that helps tool-operators and document [authors](@) to identify and fix such conditions.

## Deploying the Tool

The [ICT](@) comes with documentation that enables developers to ascertain its correct functioning (e.g. by using a test set of files, test scripts that exercise its parameters, etc.), and also enables them to deploy the tool in a git repo and [author](@)/modify CI-pipes to use that deployment.

## Discussion Notes

This section lists the topics that may need further discussion
