---
sidebar_position: 1
title: Expressions
---

import { BlockMath } from 'react-katex';
import { InlineMath } from 'react-katex';

# Expressions

<BlockMath>\int_0^\infty x^2 dx</BlockMath>

Quik maff $ax^2$ 

Hi $$there$$

$boo$

:::tip

$$
    \begin{aligned}
    ax^2+bx+c&=0\\
    ax^2+bx&=-c
    \end{aligned}   
$$

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="apple" label="Apple" default>
    $$ax$$
  </TabItem>
  <TabItem value="orange" label="Orange">
    <InlineMath>ax^3</InlineMath>
  </TabItem>
  <TabItem value="banana" label="Banana">
    <BlockMath>ax^3</BlockMath>
  </TabItem>
</Tabs>