---
sidebar_position: 1
title: Introduction
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Introduction

$\LaTeX$ is software used for preparing documents with excellent support for including Mathematics.

It can be used for making diagrams, writing exams and booklets, or preparing slides.

It is **not** a word processor like MS Word or Google docs! Rather than typing into a *What You See Is What You Get* (WYSIWYG) editor, you type plain text which is exported to a `.pdf` when compiled.

For example,

<div className="alert alert--secondary margin-bottom--md">

<Tabs>
<TabItem value="ex1" label="Hello World!" default>

```latex
\documentclass[a4paper]{article}
\begin{document}
Hello World!
\end{document}
```

Results in the following:

<iframe src="/latex/intro_01.pdf#toolbar=0" width="100%" height="400px"></iframe>

</TabItem>
<TabItem value="ex2" label="Deriving Quadratic Formula">

```latex
\documentclass{article}
\usepackage{amsmath}
\begin{document}
\[
\begin{aligned}
    ax^2+bx+c&=0\\
    x^2+\frac{b}{a}x+\frac{c}{a}&=0\\
    x^2+\frac{b}{a}x&=-\frac{c}{a}\\
    x^2+\frac{b}{a}x+\left(\frac{b}{2a}\right)^2&=-\frac{c}{a}+\left(\frac{b}{2a}\right)^2\\
    \left(x+\frac{b}{2a}\right)^2&=\frac{b^2-4ac}{4a^2}\\
    x+\frac{b}{2a}&=\pm\sqrt{\frac{b^2-4ac}{4a^2}}\\
    x+\frac{b}{2a}&=\pm\frac{\sqrt{b^2-4ac}}{2a}\\
    x&=\frac{-b\pm\sqrt{b^2-4ac}}{2a}
\end{aligned}
\]
\end{document}
```

Results in the following:

<iframe src="/latex/intro_02.pdf#toolbar=0" width="100%" height="400px"></iframe>

</TabItem>
</Tabs>

</div>