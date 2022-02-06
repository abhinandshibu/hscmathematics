# Geometric Figures

To draw geometric figures the go-to package is `tikz`.

Drawing diagrams in tikz makes use of coordinates to draw lines and shapes, for example:

```latex title="triangle.tex"
\documentclass[margin=1mm]{standalone}
\usepackage{tikz}
\begin{document}
\begin{tikzpicture}
\draw (0,0) -- (0,3) -- (5,0) -- (0,0) -- cycle;
\end{tikzpicture}
\end{document}
```

Notice the coordinates of the vertices of the triangle are `(0,0)`, `(0,3)` and `(5,0)`. The `--` in between the coordinates indicates that a line will be drawn between the points. The `-- cycle` at the end is not entirely necessary, but it *does* make the corners.