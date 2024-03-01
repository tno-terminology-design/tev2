---
id: mrgt
sidebar_label: MRGT - MRG Generation
date: 20231006
---

# Machine Readable Glossary Generation Tool

import useBaseUrl from '@docusaurus/useBaseUrl'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info Editor's note
Documentation needs to be adjusted for:
- Converting formPhrases: MRGT will write expanded formPhrase macros into MRGEntry `formPhrases` field
:::

The **Machine Readable Glossary generation Tool ([MRGT](@))** generates Machine Readable Glossaries ([MRGs](@)) for one specific, or all [terminology](@) versions that are [curated](@) within a specific [scope](@). [MRGs](@) come in a specific, well-defined [format](/docs/specs/files/mrg). They contain some meta-data, followed by a list of so-called [MRG entries](@), one for every [term](@) in its [scope](@), which represent [concepts](@) and other [semantic units](@) that are known within that [scope](@).

The (newly generated) [MRG(s)](@) are meant to be processed by the other tools in the [toolbox](toolbox@), regardless of whether such tools are called from within the context of another [scope](@). As they contain every [term](@) that is used in the [scope](@), and include all the relevant meta-data, an [MRG](@) serves as the single, authoritative source of that (version of the) [scope's](@) [terminology](@).

## Installing the Tool

The tool can be installed from the command line and made globally available by executing

~~~
npm install -g @tno-terminology-design/mrgt
~~~

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

The behavior of the [MRGT](@) can be configured per call e.g. by a configuration file and/or command-line parameters. The command-line syntax is as follows:

~~~
mrgt [ <paramlist> ]
~~~

where `<paramlist>` is an (optional) list of parameters.

<details>
  <summary>Legend</summary>

The columns in the following table are defined as follows:
1. **`Parameter`** specifies the parameter and further specifications
2. **`Req'd`** specifies whether (`Y`) or not (`n`) the field is required to be present when the tool is being called. If required, it MUST either be present in the configuration file, or as a command-line parameter.
3. **`Description`** specifies the meaning of the `Value` field, and other things you may need to know, e.g. why it is needed, a required syntax, etc.

If a configuration file used, the long version of the parameter must be used (without the preceding `--`).
</details>

| Key                         | Req'd | Description |
| :-------------------------- | :---: | :---------- |
| `-c`, `--config <path>`       | n | Path (including the filename) of the tool's (YAML) configuration file. |
| `-h`, `--help`                | n | display help for command. |
| `-o`, `--onNotExist <action>` | n | The action in case a `vsntag` was specified, but wasn't found in the SAF. |
| `-s`, `--scopedir <path>`     | n | Path of the scope directory from which the tool is called. |
| `-v`, `--vsntag <vsntag>`     | n | Versiontag for which the MRG needs to be (re)generated. |
| `-V`, `--version`             | n | output the version number of the tool. |

The `<action>` parameter can take the following values:

| `<action>` | Description |
| :--------- | :---------- |
| `'throw'`  | an error is thrown (an exception is raised), and processing will stop. |
| `'warn'`   | a message is displayed (and logged) and processing continues. |
| `'log'`    | a message is written to a log(file) and processing continues. |
| `'ignore'` | processing continues as if nothing happened. |

:::info
Some parameters may only be configurable through the use of a [configuration file](/docs/specs/files/configuration-file). In this case `macros`, for use in [form phrases](@), is an example. See the [configuration file](/docs/specs/files/configuration-file) page for details.
:::

## Running the Tool

One run of the [MRGT](@) either

- generates an [MRG](@) for one specific [terminology](@) version within the [current scope](@) (which is the case when the `version` parameter was specified), or it
- generates multiple [MRGs](@), i.e., one for every version of the [terminology](@) that is [curated](@) within the [current scope](@) (which is the case when the `version` parameter is omitted).

Running the tool comprises the following phases:[^1]
1. Constructing a [provisional MRG](@);
2. Post-processing the [entries](provisional-mrg-entry@) in that [provisional MRG](@);
3. Creating/overwriting [MRG](@) file(s) in the [glossarydir](@) of the [current scope](@).

[^1]: The [MRGT](@) MUST NOT start by overwriting files that contain an [MRG](@), as they should remain available as a (possible) source for copying [MRG entries](@) from during the construction of one or more [provisional MRGs](@). Writing the actual files should be done after all [provisional MRGs](@) have been constructed.

### Phase 1: constructing a [provisional MRG](@) {#constructing-provisional-mrg}

Generating an [MRG](@) for a particular version of a [terminology](@) starts by reading the [SAF](@) of the [scope](@) within which that [terminology](@) is curated, which exists in the [scopedir](@) that was provided as one of the calling parameters. If a `vsntag` argument is provided, it will search the [versions section](/docs/specs/files/saf#versions) of the [SAF](@) to find the corresponding entry. This corresponding entry will have the value of the `vsntag` parameter either in its `vsntag` field, or it is one of the elements in the `altvsntags` field. If the [SAF](@) does not have a corresponding entry, the action specified in the `onNotExist` parameter will determine whether or not (and how) to proceed.

In this phase, for every [terminology](@) version that is to be created, one [provisional MRG](@) is created, that contains a [provisional MRG entry](@) for every [term](@) contained in the particular version of the [terminology](@). This [provisional MRG entry](@) either contains:

- all fields in the [header](@) of the [curated text](@) that documents its [term](@), or 
- all fields in the [MRG entry](@) that comes from another [MRG](@) (typically, but not necessarily, from another [scope](@)).

#### Creating a provisional MRG

Creating a provisional MRG starts with an empty set of [MRG entries](@) - we use the term "[provisional MRG](@)" to refer to this set.

Then, the list of [term selection instructions](@) as specified in the appropriate entry of the [`versions` section](/docs/specs/files/saf#versions) of the [SAF](@) is processed. This is done by subsequently processing each instruction, in the order as specified. 

[Instructions](term selection instructions@) exist for:

  - [adding](/docs/specs/syntax/term-selection#add-terms) [MRG entries](@) to the [provisional MRG](@); these can either be [entries](mrg-entry@) that have been created from [curated texts](@), or [entries](mrg-entry@) whose contents are obtained from an [MRG](@) other than the one that is being created.[^1]

  - [removing](/docs/specs/syntax/term-selection#remove-terms) [MRG entries](@) from the [provisional MRG](@);

  - [modifying attributes](/docs/specs/syntax/term-selection#rename-terms) of a specific [MRG entry](@) in the [provisional MRG](@), e.g. for renaming a term that originated from another [scope](@).

[^1]: Two (or more) [MRG entries](@) cannot have the same value in their `termid` fields. Therefore, if an [MRG entry](@) is added whose value in its `termid` field already exists with an [MRG entry](@) that is already in the [provisional MRG](@), then this latter [entry](mrg-entry@) will be discarded, after which the new [entry](mrg-entry@) is added.

#### Processing FormPhrases

[Form phrases](@) that are specified in a [curated text](@) may include uppercase characters, special characters, spaces etc., all of which make their use by tools cumbersome. In order to make it easier for [TEv2 tools](@) to use them, they need to be converted into [regularized form phrases](@).

Converting the set of [form phrases](@) (as specified in the `formPhrases` field from a [curated text](@)) into [regularized form phrases](@) (for storage in an [MRG entry](@)) is done as follows: 

1. every [form phrase](@) (in the set of [form phrases](@)) that contains a [form phrase macro](@), is replaced with one or more [form phrases](@) that are the result of processing that [macro](form-phrase-macro@) - see [Form Phrase Macro Expansion](form-phrase-macro#expansion-process@) for the details and examples.
2. as a single [form phrase](@) may contain multiple [macros](form-phrase-macro@), step 1 must be repeated until all [macros](form-phrase-macro@) are processed and the set of [form phrases](@) no longer contains any [macro](form-phrase-macro@).
3. all [form phrases](@) in the resulting set are now [regularized](regularized-text#regularization-process@), i.e., turned into [regularized form phrases](@).
4. a [regularized form phrases](@) is added, the value of which is the same as the value of the `term` field of the [curated text](@). Thus, [tools](tev2-tool@) that work with [form phrases](regularized form phrase@) from [MRG entries](@) can find all forms, including that of the [term](@) itself, as an element in the `formPhrases` field of the [MRG entry](@).
5. finally, the resulting set of [regularized form phrases](@) is pruned, such that every [regularized form phrase](@) appears only once in the end result.
6. this end-result is then written into the `formPhrases` field of the [MRG entry](@).

:::tip
An [MRG](@) SHOULD NOT have two (or more) [MRG entries](@) that have a same element in their `formPhrases` field, because that would mean that the form phrase is ambiguous, as it refers to two different [semantic units](@).
:::

#### Storing a [provisional MRG](@) in the [glossarydir](@) {#mrg-filenames}

When the creation of a [provisional MRG](@) is complete, a filename `mrg.<scopetag>.<vsntag>.yaml` is constructed, where:

- `<scopetag>` is the [scopetag](@) that is used within the [current scope](@) to refer to itself. Its value can be found in the `scopetag`-field in the [`scope` section](docs/specs/files/saf#terminology) of the [SAF](@).
- `<vsntag>` is the [versiontag](@) that identifies the version of the [terminology](@) for which the [MRG](@) contains [entries](mrg-entry@). Its value must be equal to that found in the `vsntag`-field of the element in the [versions section](/docs/specs/files/saf#versions) of the [SAF](@) from which the [MRG](@) was generated.

If a file with that name already exists in the [glossarydir](@) of the [current scope](@), it will be deleted. Then, a new file with that name will be created, which will contain:

- a [`terminology` section](/docs/specs/files/mrg#terminology), the contents of which is obtained by copying relevant fields from the [`terminology` section](/docs/specs/files/saf#terminology) in the [SAF](@);
- a [`scopes` section](/docs/specs/files/mrg#scopes), the contents of which is obtained by copying relevant fields from the [`scopes` section](/tev2-specifications/docs/specs/files/saf#scopes) in the [SAF](@);
- an [`entries` section]((/docs/specs/files/mrg#terminology)), the contents of which consists of the [provisional MRG entries](@) of the [provisional MRG](@).

Then, if the `<vsntag>` part of the filename equals the value of the `defaultvsn` field in the [`scope` section](docs/specs/files/saf#terminology) of the [SAF](@), a copy of that file is created in the [glossarydir](@) whose filename is `mrg.<scopetag>.yaml`, which is the name by which the default [MRG](@) of the [current scope](@) is referred to.

Next, the [MRGT](@) will create a copy of the [MRG](@) file for every [versiontag](@) that exists in the `altvsntags`-field of the element in the [versions section](/docs/specs/files/saf#versions) of the [SAF](@) from which the [MRG](@) was generated. The copy will contain the same [MRG](@) as the file that has just been written. The name of this copied file is `mrg.<scopetag>.<altvsntag>.yaml`, which is the same name as the [MRG](@) file, except that the `<vsntag>` part of that filename is replaced with the value of the [versiontag](@) found in the `altvsntags`-field.

### Phase 2: post processing Synonyms {#post-processing}

This phase starts only after all [provisional MRGs](@) are created that the [MRGT](@) was instructed to build in this run, and the corresponding files have been added to the [glossarydir](@) of the [current scope](@). This allows post processing, e.g. of [synonyms](#synonym-processing@), to use the newly generated [provisional MRG entries](@)

When a [provisional MRG entry](@) in (one of) the created [provisional MRGs](@) has a `synonymOf` field that contains a [term identifier](@), this will now refer to either

- an [MRG entry](@) in one of the [MRGs](@) that either already existed, or
- a [provisional MRG entry](@) in a [provisional MRG] that has just been created.
This (possibly [provisional](provisional-mrg-entry@)) [MRG entry](@) is then copied, after which all fields in the [provisional MRG entry](@) that contained the [term identifier](@) are added thereto, overwriting any already existing fields, or adding fields that did not yet exist. Then, the resulting data is used to replace the [provisional MRG entry](@) that contained the [term identifier](@).

Effectively, this means that whenever a [term](@) is defined as a `synonym of` some other [term](@), the corresponding [MRG entry](@) will have all fields of this other [term](@), except for those that were specified in the [header](@) of the [term](@) that is defined as a synonym of that other [term](@).

### Phase 3: post processing other fields

Now, all [provisional MRG entries](@) in all [provisional MRGs] are processed so as to become useable from the context within which they have been selected. This means that every field in such a [provisional MRG entry](@) is discarded if the field name (when converted into lowercase), matches any of the field names in the table below, after which the fields in the below table are added with the contents as specified. The [MRGT](@) run is concluded after all these modifications have been written to their appropriate [MRG](@) files.

| Field          | Value(s) that are assigned to the fields |
| -------------- | :---------- |
| `scopetag`     | overwrite the `scopetag` field with the `scopetag` field as found in the [`scope` section](/docs/specs/files/saf#scope-section) of the [SAF](@). |
| `locator`      | path, relative to `scopedir`/`curatedir`/, of the file that contains the ([header](@) of) the [curated text](@). |
| `navurl`       | (localized) path to which browsers navigate in order to see the rendered version of the [curated text](@).  |
| `headingids`   | a list of the [markdown headings](https://www.markdownguide.org/basic-syntax/#headings) and/or [heading ids](https://www.markdownguide.org/extended-syntax/#linking-to-heading-ids) that are found in the [body](@) of the [curated text](@). Note that this [body](@) can be either in the [curated text file](@) or in a separate [body file](@). |

The following sections elaborate on the construction of (the contents) of some of these fields.

#### Constructing the `navurl` field {#navurl-construction}

The `navurl` field is constructed by concatenating `website`/`navpath`/`curatedir`/`id`, where `website`, `navpath` and `curatedir` are given by the contents of the respective fields in the [`scope` section](/docs/specs/files/saf#terminology) of the [SAF](@). In cases where the [`bodyFile` field](/docs/specs/files/curated-text-file#header-fields) in the [header](@) of the [curated text file](@) is set, the path to the [body file](@) is used instead of the `navpath` and `curatedir`.

The `id` part is one of the following:

1. if the [`scope` section](/docs/specs/files/saf#scope-section) of the [SAF](@) contains the field `navid`, then its contents specify the name of the field in the [header](@) of the [curated text](@) or [body file](@) that will be used to create the `id` part. Thus, static site generators such as Docusaurus, which use the `id` field to specify this value, can be accommodated.
2. if the [SAF](@) does not specify the `navid` field, or the `navid` field in a [curated text](@) or [body file](@) is not set, then `id` will be based on the name of the [curated text file](@) or the name of the [body file](@).

#### Constructing the `headingid` fields (#headingids-construction)

The `headingids` field is constructed by finding all [markdown headings](https://www.markdownguide.org/basic-syntax/#headings) in the [body-file](@) (or the [curated text file](@) if there is no separate [body file](@)), and making a list out of them.

<details>
  <summary>Example of Markdown Headers and their `headingid` fields</summary>

<Tabs
  defaultValue="default"
  values={[
    {label: 'Default Markdown Headers',  value: 'default'},
    {label: 'Custom Heading IDs',        value: 'custom'},
  ]}>

<TabItem value="default">

[Markdown headings](https://www.markdownguide.org/basic-syntax/#headings) are only recognized when they are preceded with number signs (#) at the beginning of a line.

Here is an example of a markdown header:

```markdown

## This is a Markdown Header

```

This header will result in the text `this-is-a-markdown-header` being added as an element in the `headingids` field.

</TabItem>

<TabItem value="custom">

A markdown heading may also contain a (custom) [heading id](https://www.markdownguide.org/extended-syntax/#heading-ids) that allows you to link directly to headings and modify them with CSS.

Here is an example of a markdown header with a custom heading-id:

```markdown

# This is a Markdown Header {#custom-id}

```

This header will result in the text `custom-id` being added as an element in the `headingids` field.

</TabItem>

</Tabs>

</details>

### Phase 4: checking the result

The last step consists of checking crucial properties that [MRGs](@) are relied on to have, and raising appropriate exceptions in case something is wrong. This helps [curators](@) that check the log outputs to become aware of things they may need to fix before these [MRGs](@) are further used (or published).

In this step, the following checks are done (as a minimum):
- The value of the `termid` field in one [MRG Entry](@) differs from the value of the `termid` field of all other [MRG Entries](@). This ensures that `termid` contains a unique identifier (primary key) within the context of the [MRG](@).
- When a [regularized form phrase](@) is an element of the `formPhrases` field of an [MRG entry](@), there MUST NOT be another [MRG entry](@) in the same [MRG](@) that has this [regularized form phrase](@) in its `formPhrases` field.

## Exceptions, Warnings, and Logging {#exceptions}

:::info Editor's note
This section needs to be reviewed/revised so as to enable a consistent way of error checking and logging, similar to what is done in the TRRT
:::

The general principle is that the [MRGT](@) helps its users to do their jobs. This means that errors that terminate the processing are limited to the max, that warnings (perhaps at different 'levels' of detail/severity) are given output whenever possible (yet may be limited by command-line options), and that texts are tailored for the envisaged users of the tool.

The [MRGT](@) logs conditions that prevent it from properly:

- obtaining the [scopedir](@) from a [scopetag](@);
- parsing a [curated text](@) (e.g. because it is not in the expected format);
- resolving [terms](@), [scope tags](@), [group tags](@), or [version tags](@);
- writing the output (e.g. because it has no write-permission for the designated location);
- etc.;

Also, the [MRGT](@) provides suggestions that help tool-operators ([curators](@)) to not only identify, but also fix any problems.

The [MRGT](@) comes with documentation that enables developers to ascertain its correct functioning (e.g. by using a test set of files, test scripts that exercise its parameters, etc.), and also enables them to deploy the tool in a git repo and author/modify CI-pipes to use that deployment.

## Notes

[^previous]: The algorithm ensures that an [MRG entry](@) for a [term](@) that is a [synonym](@) of another [term](@) identical to the [MRG entry](@) for that other [term](@), but if the [curated text](@) that specifies the [synonym](@) has additional [front matter](@) (e.g. a slightly modified `glossaryText` field), that [front matter](@) is retained in the [MRG entry](@). It is up to the [author](@) of the [curated text](@) to make sure this does not pose any problems, and up to the [ICT](@) to do appropriate checks.