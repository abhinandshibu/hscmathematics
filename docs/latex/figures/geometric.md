---
sidebar_position: 1
title: Geometric Figures
---

import ImportantAdmonition from '@site/src/components/Admonitions/Important';

# Geometric Figures

To draw geometric figures the go-to package is `tikz`.

Drawing diagrams in TikZ makes use of coordinates to draw lines and shapes, for example:

```latex
\documentclass[margin=1mm]{standalone}
\usepackage{tikz}
\begin{document}
\begin{tikzpicture}
\draw (0,0) -- (0,3) -- (5,0) -- (0,0) -- cycle;
\end{tikzpicture}
\end{document}
```

Produces the following:

![](./files/img/triangle_light.png#light-mode-only-md)![](./files/img/triangle_dark.png#dark-mode-only-md)

Notice the coordinates of the vertices of the triangle are `(0,0)`, `(0,3)` and `(5,0)`. The `--` in between the coordinates indicates that a line will be drawn between the points. The `-- cycle` at the end is not entirely necessary, but it *does* make the corners neater.

## Customising tikzpictures

Diagrams drawn in tikz can be modified by adding options directly after beginning the `tikzpicture`, i.e.

```latex
\begin{tikzpicture}[options]
```

Options include:

* `scale` increases or decreases the size of the diagram, e.g. `scale=.8`
* `rotate` rotates the image counterclockwise by a specified number of degrees, e.g. `rotate=200`
* `thick` makes all lines thicker

<ImportantAdmonition>

When appling multiple options you **must** separate them with a comma (`,`)

</ImportantAdmonition>

For example,

```latex
\documentclass[margin=1mm]{standalone}
\usepackage{tikz}
\begin{document}
\begin{tikzpicture}[thick,scale=.9,rotate=200]
\draw (0,0) -- (0,3) -- (5,0) -- (0,0) -- cycle;
\end{tikzpicture}
\end{document}
```

Produces the following:

![](./files/img/triangle_customised_light.png#light-mode-only-md)![](./files/img/triangle_customised_dark.png#dark-mode-only-md)

Some options can also be added to `\draw`, such as:

* `color` to change the colour of the line
* `dashed` to draw a dashed line
* `dotted` to draw a dotted line

## Adding side lengths

To add side lengths to your diagram the easiest way is to add a node along the line. To do this, after each line segment in your code add a `node[options]{label}`. For the options you will want to set it `midway` and then a direction (`above`, `below`, `left`, `right`, `above right`, `above left`, `below right`, `below left`). Then in you can add a side length in the label.

```latex
\documentclass[margin=1mm]{standalone}
\usepackage{tikz}
\begin{document}
\begin{tikzpicture}[thick,scale=.9,rotate=200]
\draw (0,0) -- (0,3) node[midway,right]{3 cm} -- (5,0) node[midway,below]{$x$ cm} -- (0,0) node[midway,above left]{5 cm} -- cycle;
\end{tikzpicture}
\end{document}
```
Produces the following:

![](./files/img/triangle_labelled_light.png#light-mode-only-md)![](./files/img/triangle_labelled_dark.png#dark-mode-only-md)

## Neatening up your code

You may have noticed that the code is getting harder to read with it being so long. To make things easier to read it is good practice to get into the habit of keeping your code neat. There are a few different ways you could choose to neaten it up. For example, you could just add a line break with an indent (just hit tab!) after every `--`, i.e.

```latex
\documentclass[margin=1mm]{standalone}
\usepackage{tikz}
\begin{document}
\begin{tikzpicture}[thick,scale=.9,rotate=200]
\draw (0,0) --
    (0,3) node[midway,right]{3 cm} --
    (5,0) node[midway,below]{$x$ cm} --
    (0,0) node[midway,above left]{5 cm} --
    cycle;
\end{tikzpicture}
\end{document}
```

This is a fine option for simple diagrams, but if you are going to be referencing a point multiple times (in more elaborate diagrams?) it can also be good to first set your coordinates, and then draw using the specified coordinates. This can be done using `\coordinate` within your tikzpicture. i.e.

```latex
\documentclass[margin=1mm]{standalone}
\usepackage{tikz}
\begin{document}
\begin{tikzpicture}[thick,scale=.9,rotate=200]
\coordinate (A) at (0,0);
\coordinate (B) at (0,3);
\coordinate (C) at (5,0);
\draw (A) --
    (B) node[midway,right]{3 cm} --
    (C) node[midway,below]{$x$ cm} --
    (A) node[midway,above left]{5 cm} --
    cycle;
\end{tikzpicture}
\end{document}
```

:::note

You can also define a new point using nodes!

```latex
 node(P)[options]{label}
 ```

 Where `P` is your new point.

:::

## Adding markings

Often in geometric questions you want to add markings to indicate that lines are equal in length, parallel, or identify right-angles. You *could* manually go ahead and work out the coordinates to draw a little square or draw a segment perpendicular to a length, but that is too much hassle. Instead the `tkz-euclide` package can do it all for us.

* `\tkzMarkRightAngle` marks right angles
* `\tkzMarkSegment` can be used to mark line segments at equal or parallel
* `\tkzLabelAngle` helps label angles with consistent positioning

Below is an isosceles triangle that I have added markings to:

```latex
\documentclass[margin=1mm]{standalone}
\usepackage{tikz}
    // highlight-next-line
\usepackage{tkz-euclide}
\begin{document}
\begin{tikzpicture}
\coordinate (O) at (0,0);
\coordinate (A) at (0,3);
\coordinate (B) at (-1,0);
\coordinate (C) at (1,0);
\draw (A) -- node[midway,above left]{3 cm}
    (B) -- node[midway,below]{$x$ cm}
    (C) -- 
    (A) -- 
    cycle;
\draw[dashed] (O) -- (A);
    // highlight-next-line
\tkzMarkRightAngle(A,O,B);
    // highlight-next-line
\tkzLabelAngle[pos=.5](A,C,B){$67^\circ$};
    // highlight-next-line
\tkzMarkSegments[mark=||](A,B A,C);
\end{tikzpicture}
\end{document}
```

Produces the following:

![](./files/img/isosceles_triangle_light.png#light-mode-only-sm)![](./files/img/isosceles_triangle_dark.png#dark-mode-only-sm)