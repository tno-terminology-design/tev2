---
id: mrgref-syntax
sidebar_label: MRG References
date: 20231029
---

import useBaseUrl from '@docusaurus/useBaseUrl'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# MRG References - Syntax

[MRG References](@) (or [MRGRefs](@) for short) are textual constructs that refer to a specific [terminology](@) within a particular [scope](@), and that can be converted (by the [HRGT](@)) into a text that contains a [human readable glossary](@) of the [terms](@) contained in that [terminology](@).

An [MRGRef](@) (currently) has the following syntax:

~~~ markdown
...
<!--<hrg={tid}>-->{text to be replaced with hrg-list}<!--</hrg>-->
...
~~~

<details>
  <summary>Examples of MRGRefs</summary>

<Tabs
  defaultValue="default"
  values={[
    {label: 'Glossary template', value: 'default'},
    {label: 'Existing glossary', value: 'revised'},
    {label: 'Multiple glossaries', value: 'multiple'},
  ]}>
  
<TabItem value="default">

This example shows a markdown file that can serve as a [glossary](@) template. It is basically a markdown file that has an [MRGRef](@) that specifies the [terminology](@) for which an [HRG](@) is to be created, and also the location in the file where that needs to be done. 

After this is processed by the [HRGT](@), a copy of this file will have been created, where the text `This is where the glossary will be generated by the HRGT` will have been replaced with a [human readable glossary](@) for the specified [terminology](@). 

This [MRGRef](@) identifies the default [terminology](@) of the [current scope](@) as the source of the [HRG](@).

~~~ markdown
---
id: default-glossary
sidebar_label: Glossary
---

# Glossary

<!--<hrg=>-->
This is where the glossary will be generated by the HRGT
<!--</hrg>-->

The texts in this glossary are licensed under CC BY-SA 4.0.
~~~

</TabItem>
<TabItem value="revised"><br/>

This example shows what the result of processing the glossary template of the previous example could look like, assuming the default [terminology](@) of the current scope had just the two terms `entity` and `identifier` we could expect if the [glossary](@) of the previous example were generated by the [HRGT](@). 

Note that it still contains an [MRGRef](@) that specifies the [terminology](@) for which it was the [HRG](@) was created. This means that whenever the [HRGT](@) is run again on this file, any updates to the terminology will be reflected in the newly generated version.

~~~ markdown
---
id: default-glossary
sidebar_label: Glossary
---

# Glossary

<!--<hrg=>-->
## [Entity](/docs/terms/entity)
something that is known to exist.

## [Identifier](/docs/terms/identifier)
a character string that is being used for the identification of some [entity](@) (yet may refer to 0, 1, or more [entities](@), depending on the context within which it is being used).
<!--</hrg>-->

The texts in this glossary are licensed under CC BY-SA 4.0.
~~~

</TabItem>
<TabItem value="multiple"><br/>

This example shows that one can have multiple glossaries in a single file. Also, it shows the result of using a different converter, which in this case produces tables. 

~~~ markdown
---
id: multiple-glossaries
---

# My First Glossary

<!--<hrg=>-->
| Term | Criterion |
| :--- | :-------- |
| [Entity](/docs/terms/entity) | something that is known to exist. |
| [Identifier](/docs/terms/identifier) | a character string that is being used for the identification of some [entity](@) (yet may refer to 0, 1, or more [entities](@), depending on the context within which it is being used). |
<!--</hrg>-->

# My Second Glossary

<!--<hrg=essif-lab>-->
| Term | Criterion |
| :--- | :-------- |
| [Action](https://essif-lab.github.io/framework/docs/terms/action) | something that is actually done (a 'unit of work' that is executed) by a single [actor](@essif-lab) (on behalf of a given [party](@essif-lab)), as a single operation, in a specific context. |
| [Actor](https://essif-lab.github.io/framework/docs/terms/actor) | [Entity](@essif-lab) that can [act](@essif-lab) (do things/execute action), e.g. people, machines, but not [organizations](@essiflab). |
(etcetera)
<!--</hrg>-->

The texts in this glossary are licensed under CC BY-SA 4.0.
~~~

</TabItem>
</Tabs>
</details>




Interpretation of an [MRGRef](@) leads to the population of the following variables (or, in case regexes are used, named capturing groups):

| Name      | Description |
| :-------- | :---------- |
| `leader`  | the character string that is used at the start of a [HRG](@), which must be expected to include newlines. If empty (not specified), there will be no leading texts. |
| `tid`     | a [terminology identifier](@), that identifies a [terminology](@) (and implies an associated [MRG](@)) within the [current scope](@). If empty, it defaults to the default [terminology](@) of the [current scope](@). |
| `trailer` | the character string that is used at the end of a [HRG](@), which must be expected to include newlines. If empty (not specified), there will be no leading texts. |

<details>
<summary>Using regexes to find the values for the variables</summary>

Finding an [MRGRef](@) in a file can be done by using a regular expressions (regexes - you can use [debuggex](https://www.debuggex.com/) to see what these regexps do). 

The following [(PCRE) regex](https://www.debuggex.com/r/HF7mLksu-zQBNbeO) will do this for the specified syntax:

~~~ regex
(^(?P<leader><!--<hrg=(?P<delim>|'|")(?P<tid>[a-z0-9_-]+(?::[a-z0-9_-]+)?)?(\g<delim>)>-->)(?:.*?\n)*(?:.*?)(?P<trailer><!--</hrg>-->))
~~~

Empty named capturing groups may be given a (default) value.
</details>

The [HRGT] will convert this into the following markdown:

~~~ markdown
...
{leader}
{hrg-list}
{trailer}
...
~~~