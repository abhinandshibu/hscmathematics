---
sidebar_position: 3
title: Area of a Triangle
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import IconExternalLink from '@theme/IconExternalLink';
import IconDefinition from '@site/src/components/IconDefinition';
import IconPresentation from '@site/src/components/IconPresentation';
import HSAButtons from '@site/src/components/Examples/HSAButtons';
import ExampleBox from '@site/src/components/Examples/Box';
import Hint from '@site/src/components/Hint';
import IconPlay from '@site/src/components/IconPlay';
import IconPractice from '@site/src/components/IconPractice';
import DefinitionAdmonition from '@site/src/components/Admonitions/Definition';
import HintAdmonition from '@site/src/components/Admonitions/Hint';
import SolutionAdmonition from '@site/src/components/Admonitions/Solution';
import SyllabusAdmonition from '@site/src/components/Admonitions/Syllabus';
import ImportantAdmonition from '@site/src/components/Admonitions/Important';
import ThemedImage from '@theme/ThemedImage';

# Area of a Triangle

<SyllabusAdmonition>

determine the area of any triangle, given two sides and an included angle, by using the rule $A=\frac{1}{2}ab\sin C$, and solve related practical problems

</SyllabusAdmonition>

For non-right angled trigonometry, we label the triangles as shown below:

![](./files/img/labelled-non-right_light.png#light-mode-only-md)![](./files/img/labelled-non-right_dark.png#dark-mode-only-md)

<ImportantAdmonition>

Sides are denoted with a lowercase letter and angles uppercase. $\angle A$ is opposite $a$, $\angle B$ is opposite $b$ and $\angle C$ is opposite $c$.

:::note

A labelled triangle is *not* on your reference sheet.

:::
</ImportantAdmonition>

## Deriving The Formula (Extension)

In stages 4 and 5.2, to calculate the area of a triangle you would have used the formula $$A=\frac{1}{2}bh$$ where $b$ is the length of the base and $h$ is the perpendicular height.

Using right-angled trigonometry we can express $h$ in terms of the side lengths and angles of the triangle.

![](./files/img/area-of-triangle-derivation_light.png#light-mode-only-md)![](./files/img/area-of-triangle-derivation_dark.png#dark-mode-only-md)

$$\begin{aligned}\sin C&=\frac{\text{opp}}{\text{hyp}}\\\sin C&=\frac{h}{a}\\
a\sin C&=h\\h&=a\sin C\end{aligned}$$

Which can be substituted into $A=\frac{1}{2}bh$ to give $A=\frac{1}{2}ab\sin C$

## Applying The Formula

<ImportantAdmonition>

$$\text{Area}=\frac{1}{2}ab\sin C$$

:::note

This is <a to="https://educationstandards.nsw.edu.au/wps/wcm/connect/f2eb9621-9b03-4d1a-a76c-099b0a4d7c3d/mathematics-standard-1-and-2-reference-sheet-nov-2019.pdf?MOD=AJPERES&CVID=">reference sheet<IconExternalLink /></a>

:::
</ImportantAdmonition>

<!-- To apply the formula you will first need to label the side lengths and angles of a given triangle appropriately. -->

:::note

Don't forget that $A=\frac{1}{2}bh$ is still a valid way of calculating the area of a triangle.

:::

<ExampleBox>

<Tabs>
<TabItem value="ex1" label="Example 1" default>

Calculate the area of the triangle below. Answer correct to 3 significant figures.

![](./files/img/area-ex1_light.png#light-mode-only-sm)![](./files/img/area-ex1_dark.png#dark-mode-only-sm)

<SolutionAdmonition>

$$
\begin{aligned}
A&=\frac{1}{2}ab\sin C\\
A&=\frac{1}{2}(8.2)(10.7)\sin 32^\circ&&\text{(Substitute)}\\
A&=23.247...\\
A&\approx23.2\text{ cm}^2&&\text{(Rounded to appropraite number}\\
&&&\text{of s.f. and include units)}
\end{aligned}
$$

</SolutionAdmonition>

</TabItem>
<TabItem value="ex2" label="Example 2">

Calculate the area of the triangle below. Answer correct to 3 significant figures.

![](./files/img/area-ex2_light.png#light-mode-only-sm)![](./files/img/area-ex2_dark.png#dark-mode-only-sm)

<SolutionAdmonition>

Since the two provided sides are the same, the triangle must be isosceles. This means that both of the base angles must be $70^\circ$.

![](./files/img/area-ex2-sol1_light.png#light-mode-only-sm)![](./files/img/area-ex2-sol1_dark.png#dark-mode-only-sm)

The required angle must therefore be $40^\circ$ (all angles in a triangle sum to $180^\circ$).

$$
\begin{aligned}
A&=\frac{1}{2}ab\sin C\\
A&=\frac{1}{2}(9)(9)\sin 40^\circ&&\text{(Substitute)}\\
A&=26.032...\\
A&\approx26.0\text{ cm}^2&&\text{(Rounded to appropraite number}\\
&&&\text{of s.f. and include units)}
\end{aligned}
$$

</SolutionAdmonition>

</TabItem>

<!-- <TabItem value="practice" label=<span><IconPractice/> Practice</span>>

This is a banana 🍌

<HSAButtons
hint={<div>

$hint$

</div>}
answer={<div>

answer

</div>}
url={'https://www.youtube.com/watch?v=j9D7Ooyyr5M'}
/>

</TabItem> -->

</Tabs>

</ExampleBox>