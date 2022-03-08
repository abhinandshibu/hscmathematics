---
sidebar_position: 3
title: Graphing Functions
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ExampleBox from '@site/src/components/Examples/Box';
import IconExternalLink from '@theme/IconExternalLink';
import ImportantAdmonition from '@site/src/components/Admonitions/Important';

# Graphing Functions

To graph functions there are two options for packages: `tikz` and `pgfplots`. TikZ is familiar if you regularly use it for drawing diagrams, but PGFPlots is a lot more powerful. Below is an example of using each package.

<div className="alert alert--secondary margin-bottom--md">

<Tabs>
<TabItem value="tikz" label="TikZ" default>

```latex
\documentclass[margin=1mm]{standalone}
\usepackage{tikz}
\begin{document}
\begin{tikzpicture}
    \draw[->] (-3,0) -- (3,0) node[above] {$x$};
    \draw[->] (0,-3) -- (0,3) node[right] {$y$};
    \draw[<->,
        domain=-1:3,
        smooth,
        variable=\x
    ] plot ({\x}, {\x*\x-2*\x});
\end{tikzpicture}
\end{document}
```

Produces the following:

![](./files/img/x2-2x_tikz_light.png#light-mode-only-md)![Angles](./files/img/x2-2x_tikz_dark.png#dark-mode-only-md)

</TabItem>

<TabItem value="pgfplots" label="PGFPlots">

```latex
\documentclass[margin=1mm]{standalone}
\usepackage{pgfplots}
    \pgfplotsset{compat=newest}
\begin{document}
\begin{tikzpicture}
    \begin{axis}[
        axis lines=center,
        xmin=-3,
        xmax=3,
        ymin=-3,
        ymax=3,
        xlabel={$x$},
        ylabel={$y$},
        ticks=none,
    ]
        \addplot[
            <->,
            domain=-.97:2.97,
            smooth,
        ] {x^2-2*x};
    \end{axis}
\end{tikzpicture}
\end{document}
```

Produces the following:

![](./files/img/x2-2x_pgfplots_light.png#light-mode-only-md)![](./files/img/x2-2x_pgfplots_dark.png#dark-mode-only-md)

</TabItem>
</Tabs>

</div>

From here on I will be focusing on drawing graphs with PGFPlots. If you're interested in learning how to draw using TikZ, see the <a to="https://mirror.aarnet.edu.au/pub/CTAN/graphics/pgf/base/doc/pgfmanual.pdf">documentation<IconExternalLink /></a>.

## Configuring the axes

By default PGFPlots draws its axis around the edge of the graph like so:

```latex
\documentclass[margin=1mm]{standalone}
\usepackage{pgfplots}
    \pgfplotsset{compat=newest}
\begin{document}
\begin{tikzpicture}
    \begin{axis}
        \addplot[
            <->,
            domain=-2:4,
            smooth,
        ] {x^2-2*x};
    \end{axis}
\end{tikzpicture}
\end{document}
```

![](./files/img/default_pgfplots_light.png#light-mode-only-md)![](./files/img/default_pgfplots_dark.png#dark-mode-only-md)

To draw the axes so they pass through the origin, add `axis lines=center` to the options for the axis. For example:

```latex
\documentclass[margin=1mm]{standalone}
\usepackage{pgfplots}
    \pgfplotsset{compat=newest}
\begin{document}
\begin{tikzpicture}
    \begin{axis}[
    // highlight-next-line
        axis lines=center
    ]
        \addplot[
            <->,
            domain=-2:4,
            smooth,
        ] {x^2-2*x};
    \end{axis}
\end{tikzpicture}
\end{document}
```

![](./files/img/centre_pgfplots_light.png#light-mode-only-md)![](./files/img/centre_pgfplots_dark.png#dark-mode-only-md)

 If you look closely this has caused a few problems:
 * the arrowheads of the function can get cut off.
 * there is a tick drawn on the same point as the arrowhead for each axis.
 * the parabola's turning point is being cut off very slightly
 
In my opinion, the cleanest fix for these issues is to adjust axes to be slightly larger than the range and domain of the function being drawn. This can be done by changing the `ymin`, `xmin`, `ymax`, and `xmax` in the axis options. Observe:

```latex
\documentclass[margin=1mm]{standalone}
\usepackage{pgfplots}
    \pgfplotsset{compat=newest}
\begin{document}
\begin{tikzpicture}
    \begin{axis}[
        axis lines=center,
    // highlight-next-line
        ymin=-1.5,
    // highlight-next-line
        xmin=-2.25,
    // highlight-next-line
        ymax=8.5,
    // highlight-next-line
        xmax=4.25,
    ]
        \addplot[
            <->,
            domain=-2:4,
            smooth,
        ] {x^2-2*x};
    \end{axis}
\end{tikzpicture}
\end{document}
```

![](./files/img/centre_adjusted_pgfplots_light.png#light-mode-only-md)![](./files/img/centre_adjusted_pgfplots_dark.png#dark-mode-only-md)

Other useful options for the axes are:

* `axis line style` changes the style of the axis line e.g. `axis line style=thick`
* `x` changes the length of $x$ e.g. `x=.5cm`
* `y` similar to `x`
* `xlabel` adds a label to the $x$-axis e.g. `xlabel=$x$`
* `ylabel` similar to `xlabel`
* `xtick` specifies where to place ticks on $x$ axis e.g. `xtick={0,pi/2,pi,3*pi/2,2*pi}`
* `ytick` similar to `xtick`
* `xticklabels` specifies what labels to use for each `xtick` e.g. `xticklabels = {$\frac{\pi}{2}$, $\pi$, $\frac{3\pi}{2}$, $2\pi$}`
* `yticklabels` similar to `xticklabels`
* `xtick distance` changes the frequency of ticks along the $x$-axis e.g. `xtick distance = .5`
* `ytick distance` similar to `xtick distance`
* `grid` enables grid lines, either `major`, `minor` or `both`
* `major grid style` changes the style of the major grid lines e.g. `major grid style = {dashed, blue}`
* `minor grid style` similar to `major grid style`
* `width` specifies the width of the graph e.g. `width=10cm`
* `height` similar to `width`

## Drawing functions

To draw functions you `addplot`s to your axis. Functions must be written within curly brackets after  `\addplot`. Functions you can draw include:

* `\addplot {x^2}`
* `\addplot {2*x-1}`
* `\addplot {2^x}`
* `\addplot {sin(\x)}` sine wave in degrees
* `\addplot {sin(\x r)}` sine wave in radians

`addplot` also has options you can use including:

* `<->` to add arrowheads on both ends
* `thick` or `line width=size` (`size` can be `2pt`, `.5pt` etc.) to adjust the thickness of the line
* `domain=min:max` to adjust the domain 
* `smooth` to smooth out a curve
* `samples=n` (where `n` the number of samples) to change the number of points that are calculated for plotting the function.

<ImportantAdmonition>

When a function has asymptotes the graph can play up a bit. I would suggest adding multiple plots and adjust the domains to avoid drawing any asymptotes.

</ImportantAdmonition>

For example, graphing $f(x)=\tan(x)\quad 0<x<2\pi$:

```latex
\documentclass[margin=1mm]{standalone}
\usepackage{pgfplots}
    \pgfplotsset{compat=newest}
\begin{document}
\begin{tikzpicture}
    \begin{axis}[
        axis lines = center,
        axis line style = thick,
        xlabel = $x$,
        ylabel = $f(x)$,
        xmin = 0, xmax = 6.5,
        ymin = -6.5, ymax = 6.5,
        xtick = {pi/2, pi, 3*pi/2, 2*pi},
        xticklabels = {$\frac{\pi}{2}$, $\pi$, $\frac{3\pi}{2}$, $2\pi$},
    ]
        \addplot[
    // highlight-next-line
            domain = 0:pi/2-.1,
            samples = 200,
        ] {tan(\x r)};
        \addplot[
    // highlight-next-line
            domain = pi/2+.1:3*pi/2-.1,
            samples = 200,
        ] {tan(\x r)};
        \addplot[
    // highlight-next-line
            domain = 3*pi/2+.1:2*pi,
            samples = 200,
        ] {tan(\x r)};
    \end{axis}
\end{tikzpicture}
\end{document}
```

![](./files/img/tan_pgfplots_light.png#light-mode-only-lg)![](./files/img/tan_pgfplots_dark.png#dark-mode-only-lg)

Notice there are three plots, and the domains have been made to end and start on either side of the asymptotes.

## Drawing asymptotes

`\addplot` also be used for drawing lines between two points which can be styled to represent an asymptote.

To draw a line between points the syntax is as follows:

```latex
\addplot[options] coordinates {(x1,y1)(x2,y2)};
```

As demonstrated below:

```latex
\documentclass[margin=1mm]{standalone}
\usepackage{pgfplots}
    \pgfplotsset{compat=newest}
\begin{document}
\begin{tikzpicture}
    \begin{axis}[
        axis lines = center,
        axis line style = thick,
        xlabel = $x$,
        ylabel = $f(x)$,
        xmin = 0, xmax = 6.5,
        ymin = -6.5, ymax = 6.5,
        xtick = {pi/2, pi, 3*pi/2, 2*pi},
        xticklabels = {$\frac{\pi}{2}$, $\pi$, $\frac{3\pi}{2}$, $2\pi$},
    ]
        \addplot[
            domain = 0:pi/2-.1,
            samples = 200,
        ] {tan(\x r)};
        \addplot[
            domain = pi/2+.1:3*pi/2-.1,
            samples = 200,
        ] {tan(\x r)};
        \addplot[
            domain = 3*pi/2+.1:2*pi,
            samples = 200,
        ] {tan(\x r)};
    // highlight-next-line
        \addplot[
    // highlight-next-line
            dashed,
    // highlight-next-line
            samples=50,
    // highlight-next-line
        ] coordinates {(pi/2,-6.5)(pi/2,6.5)};
    // highlight-next-line
        \addplot[
    // highlight-next-line
            dashed,
    // highlight-next-line
            samples=50,
    // highlight-next-line
        ] coordinates {(3*pi/2,-6.5)(3*pi/2,6.5)};
    \end{axis}
\end{tikzpicture}
\end{document}
```

![](./files/img/tan_asymptotes_pgfplots_light.png#light-mode-only-lg)![](./files/img/tan_asymptotes_pgfplots_dark.png#dark-mode-only-lg)

## Shading the area between curves

To shade the area between curves the first thing to do is to add a second plot and name each of them. In the example below I have named them curve1 and curve2 respectively.

```latex
\documentclass[margin=1mm]{standalone}
\usepackage{pgfplots}
    \pgfplotsset{compat=newest}
\begin{document}
\begin{tikzpicture}
    \begin{axis}[
        axis lines = center,
        axis line style = thick,
        xlabel = $x$,
        ylabel = $y$,
        ymax = 7.5,
        ymin = -0.0075,
        xmax = 3.5,
        xmin = -0.0075,
        ytick distance = 1,
        xtick distance = 1,
    ]
        \addplot[
    // highlight-next-line
            name path = curve1,
            ->,
            domain = 0:3.3,
            samples = 200,
        ] {x};
    // highlight-next-line
        \addplot[
    // highlight-next-line
            name path = curve2,
    // highlight-next-line
            ->,
    // highlight-next-line
            domain = 0:pi,
    // highlight-next-line
            samples = 200,
    // highlight-next-line
        ] {sin(\x r)*e^x};
    \end{axis}
\end{tikzpicture}
\end{document}
```

![](./files/img/two_curves_pgfplots_light.png#light-mode-only-lg)![](./files/img/two_curves_pgfplots_dark.png#dark-mode-only-lg)

Next we will add a plot which fills between curve1 and curve2. To do this we need to add the `fillbetween` PGFPlots library to our preamble by adding `\usepgfplotslibrary{fillbetween}`.

Note you can specify the domain you want highlighted using `soft clip = {domain = min:max}`.

```latex
\documentclass[margin=1mm]{standalone}
\usepackage{pgfplots}
    \pgfplotsset{compat=newest}
    // highlight-next-line
    \usepgfplotslibrary{fillbetween}
\begin{document}
\begin{tikzpicture}
    \begin{axis}[
        axis lines = center,
        axis line style = thick,
        xlabel = $x$,
        ylabel = $y$,
        ymax = 7.5,
        ymin = -0.0075,
        xmax = 3.5,
        xmin = -0.0075,
        ytick distance = 1,
        xtick distance = 1,
    ]
        \addplot[
            name path = curve1,
            ->,
            domain = 0:3.3,
            samples = 200,
        ] {x};
        \addplot[
            name path = curve2,
            ->,
            domain = 0:pi,
            samples = 200,
        ] {sin(\x r)*e^x};
    // highlight-next-line
        \addplot[
    // highlight-next-line
            fill = black,
    // highlight-next-line
            opacity = 0.25,
    // highlight-next-line
        ]
    // highlight-next-line
        fill between [
    // highlight-next-line
            of = curve1 and curve2,
    // highlight-next-line
            soft clip = {
    // highlight-next-line
                domain = 0:2.99
    // highlight-next-line
            }
    // highlight-next-line
        ];
    \end{axis}
\end{tikzpicture}
\end{document}
```

![](./files/img/two_curves_shaded_pgfplots_light.png#light-mode-only-lg)![](./files/img/two_curves_shaded_pgfplots_dark.png#dark-mode-only-lg)

Finally, you may also want to shade the area between a curve and the $x$-axis. We can do this by adding a plot along the $x$-axis which we already know how to do:

```latex
\documentclass[margin=1mm]{standalone}
\usepackage{pgfplots}
    \pgfplotsset{compat=newest}
    \usepgfplotslibrary{fillbetween}
\begin{document}
\begin{tikzpicture}
    \begin{axis}[
        axis lines = center,
        axis line style = thick,
        xlabel = $x$,
        ylabel = $f(x)$,
        xmin = -1.5, xmax = 3.5,
        ymin = 0, ymax = 21.5,
        ytick distance = 5,
        y = 5,
    ]
        \addplot[
            name path = f(x),
            <->,
            domain = -1.2:3,
            samples = 200,
        ] {e^x};
    // highlight-next-line
        \addplot[
    // highlight-next-line
            name path = xaxis,
    // highlight-next-line
        ] coordinates {(-1,0)(3,0)};
        \addplot[
            fill = black,
            opacity = 0.125,
        ]
        fill between [
            of = f(x) and xaxis,
            soft clip={
                domain=1:2
            }
        ];
    \end{axis}
\end{tikzpicture}
\end{document}
```

![](./files/img/shading_xaxis_pgfplots_light.png#light-mode-only-lg)![](./files/img/shading_xaxis_pgfplots_dark.png#dark-mode-only-lg)