---
sidebar_position: 2
title: Right-Angled Trigonometry
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

# Right-Angled Trigonometry

<SyllabusAdmonition>

review and use the trigonometric ratios to find the length of an unknown side or the size of an unknown angle in a right-angled triangle

</SyllabusAdmonition>

Trigonometry is used to calculate unknown side lengths and angles of triangles.

Before you can perform any trigonometric calculations you need to be able to identify the sides of a right-angled triangle. The sides are labeled relative to the position of the given angle as shown below:

![Angles](./files/img/labelled-right-triangle_light.png#light-mode-only-md)![Angles](./files/img/labelled-right-triangle_dark.png#dark-mode-only-md)

<ImportantAdmonition>

The trigonometric ratios are as follows:

* $\sin A=\dfrac{\text{Opposite (opp)}}{\text{Hypotenuse (hyp)}}$
   

* $\cos A=\dfrac{\text{Adjacent (adj)}}{\text{Hypotenuse (hyp)}}$
   

* $\tan A=\dfrac{\text{Opposite (opp)}}{\text{Adjacent (adj)}}$

:::note

These are available on your <a to="https://educationstandards.nsw.edu.au/wps/wcm/connect/f2eb9621-9b03-4d1a-a76c-099b0a4d7c3d/mathematics-standard-1-and-2-reference-sheet-nov-2019.pdf?MOD=AJPERES&CVID=">reference sheet<IconExternalLink /></a>

:::
</ImportantAdmonition>

## Finding Side Lengths

To find an unknown side length using right-angled trigonometry you need to know at least one acute angle and one side length. Using the known variables and the unknown side, choose the appropriate ratio and substitute in your values. Solve the equation to find the unknown length.

:::note

If you know two sides of a right-angled triangle you can use Pythagoras' theorem ($c^2=a^2+b^2$, where $c$ is the hypotenuse) to find the last side.

:::

<ExampleBox>

<Tabs>
<TabItem value="ex1" label="Example 1" default>

Find the value of $x$ rounded to 3 significant figures.

![Angles](./files/img/right-angled-ex1_light.png#light-mode-only-sm)![Angles](./files/img/right-angled-ex1_dark.png#dark-mode-only-sm)

<SolutionAdmonition>

$$
\begin{aligned}
\tan\theta&=\frac{\text{opp}}{\text{adj}}&&\text{(Choose the appropriate ratio)}\\
\tan37^\circ&=\frac{x}{11}&&\text{(Substitute)}\\
11\times\tan37^\circ&=x&&\text{(Multiply both sides by 11)}\\
x&=8.289...&&\text{(Unrounded value)}\\
x&\approx8.29\text{ mm}&&\text{(Rounded to appropraite number}\\
&&&\text{of s.f. and include units)}
\end{aligned}
$$

</SolutionAdmonition>

</TabItem>
<TabItem value="ex2" label="Example 2">

Find the value of $n$ rounded to 2 decimal places.

![Angles](./files/img/right-angled-ex2_light.png#light-mode-only-sm)![Angles](./files/img/right-angled-ex2_dark.png#dark-mode-only-sm)

<SolutionAdmonition>

$$
\begin{aligned}
\sin\theta&=\frac{\text{opp}}{\text{hyp}}&&\text{(Choose the appropriate ratio)}\\
\sin28^\circ&=\frac{3}{n}&&\text{(Substitute)}\\
n&=\frac{3}{\sin28^\circ}&&\text{(Multiply both sides by $n$ and}\\
&&&\text{divide by $\sin28^\circ$)}\\
n&=6.390...&&\text{(Unrounded value)}\\
n&\approx6.39&&\text{(Rounded to appropraite number of d.p.)}
\end{aligned}
$$

:::note

In the diagram, $n$ already has units so you do not need to include them.

:::

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

<!-- ## Finding Angles

To find an unknown angle using right-angled trigonometry you need to know at least two side lengths. Using the known sides, choose the appropriate ratio and substitute in your values. Solve the equation to find the unknown angle.

:::note

If you know an acute angle in a right-angled triangle you can use angle sum of a triangle ($180^\circ$) to find the last angle.

::: -->

<!-- 

<ExampleBox>

<Tabs>
<TabItem value="ex1" label="Example 1" default>

Expand and simplify $4x+2x\left(2+\frac{1}{x}\right)$.

<SolutionAdmonition>

$$
\begin{aligned}
4x+2x\left(2+\frac{1}{x}\right)&=4x+2x\times2+2x\times\frac{1}{x}\qquad&&\text{(Expand brackets)}\\
&=4x+4x+2&&\text{(Simplify)}\\
&=8x+2&&\text{(Collect like terms)}
\end{aligned}
$$

</SolutionAdmonition>

</TabItem>
<TabItem value="ex2" label="Example 2">

This is an orange 🍊

</TabItem>
<TabItem value="ex3" label=<span><IconPractice/> Practice</span>>

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

</TabItem>
</Tabs>

</ExampleBox>

<DefinitionAdmonition>

ok

</DefinitionAdmonition>

$$
\begin{aligned}
\cos\theta&=\dfrac{3}{5}\\
\theta&=\cos^{-1}\left(\dfrac{3}{5}\right)&&{\text{\htmlClass{casio}{qk3P5)=}}}\\
\theta&=53.1^\circ \text{\ (1 d.p.)}
\end{aligned}
$$ -->