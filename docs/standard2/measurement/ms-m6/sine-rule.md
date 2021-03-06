---
sidebar_position: 4
title: Sine Rule
draft: true
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

# Sine Rule

<SyllabusAdmonition>

solve problems involving non-right-angled triangles using the sine rule, $\dfrac{a}{\sin A}=\dfrac{b}{\sin B}=\dfrac{c}{\sin C}$ (ambiguous case excluded)
* find the size of an obtuse angle, given that it is obtuse

</SyllabusAdmonition>

For non-right angled trigonometry, we label the triangles as shown below:

![](./files/img/labelled-non-right_light.png#light-mode-only-md)![](./files/img/labelled-non-right_dark.png#dark-mode-only-md)

<ImportantAdmonition>

Sides are denoted with a lowercase letter and angles uppercase. $\angle A$ is opposite $a$, $\angle B$ is opposite $b$ and $\angle C$ is opposite $c$.

:::note

A labelled triangle is *not* on your reference sheet.

:::
</ImportantAdmonition>

## Deriving The Sine Rule (Extension)

Previously we have seen that the [area of a triangle](/standard2/measurement/ms-m6/area-of-triangle#deriving-the-formula-extension) is given by the formula $A=\frac{1}{2}ab\sin C$

Rewriting the formula for $\angle A$ and $\angle B$ gives $A=\frac{1}{2}ab\sin C=\frac{1}{2}ac\sin B=\frac{1}{2}bc\sin A$.

Dividing by $\frac{1}{2}abc$ gives:

$$\begin{aligned}
\frac{1}{2}ab\sin C&&&=\quad\frac{1}{2}ac\sin B&&=\quad\frac{1}{2}bc\sin A\\
\frac{\frac{1}{2}ab\sin C}{\frac{1}{2}abc}&&&=\quad\frac{\frac{1}{2}ac\sin B}{\frac{1}{2}abc}&&=\quad\frac{\frac{1}{2}bc\sin A}{\frac{1}{2}abc}\\
\frac{\sin C}{c}&&&=\quad\quad\frac{\sin B}{b}&&=\quad\frac{\sin A}{a}
\end{aligned}$$

Which can also be written as $\dfrac{c}{\sin C}=\dfrac{b}{\sin B}=\dfrac{a}{\sin A}$ by taking the reciprocal.

## Finding Side Legnths

<ImportantAdmonition>

$$\dfrac{a}{\sin A}=\dfrac{b}{\sin B}=\dfrac{c}{\sin C}$$

:::note

This is <a to="https://educationstandards.nsw.edu.au/wps/wcm/connect/f2eb9621-9b03-4d1a-a76c-099b0a4d7c3d/mathematics-standard-1-and-2-reference-sheet-nov-2019.pdf?MOD=AJPERES&CVID=">reference sheet<IconExternalLink /></a>

:::
</ImportantAdmonition>

<!-- To apply the formula you will first need to label the side lengths and angles of a given triangle appropriately. -->

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

This is a banana ????

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


## Finding Angles

<ImportantAdmonition>

$$\dfrac{a}{\sin A}=\dfrac{b}{\sin B}=\dfrac{c}{\sin C}$$

:::note

This is <a to="https://educationstandards.nsw.edu.au/wps/wcm/connect/f2eb9621-9b03-4d1a-a76c-099b0a4d7c3d/mathematics-standard-1-and-2-reference-sheet-nov-2019.pdf?MOD=AJPERES&CVID=">reference sheet<IconExternalLink /></a>

:::
</ImportantAdmonition>

<!-- To apply the formula you will first need to label the side lengths and angles of a given triangle appropriately. -->

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

This is a banana ????

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
