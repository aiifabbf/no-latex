# no-latex

An experimental alternative to LaTeX in scientific writing, using web technologies.

This is a demo showing how web technologies like HTML, CSS can smooth your scientific writing experience.

- [Quickstart](#Quickstart)
- [How it works](#How-it-works)
- [Why](#Why)
- [Feature checklist](#Feature-checklist)
- [Future](#Future)

## Quickstart

1. `cd` to this project directory
1. Install WeasyPrint

    I recommend using a virtual environment by
    ```bash
    python3 -m venv .
    ```
    activate the virtual environment by
    ```bash
    source ./bin/activate
    ```
    and install WeasyPrint by
    ```bash
    pip install weasyprint
    ```

1. Install mathjax-node-page

    ```bash
    npm install mathjax-node-page
    ```

    Note that you have to get a working(I mean latest) nodejs. For Debian/Ubuntu users, installation with `apt install nodejs` will get you an ancient version of nodejs and npm.

1. See the demo

    ```bash
    bash generate.bash
    ```

## How it works

This workflow depends on
- [WeasyPrint](https://github.com/Kozea/WeasyPrint) to convert HTML to PDF
- [mathjax-node-page](https://github.com/pkra/mathjax-node-page/) to preprocess HTMLs containing raw LaTeX math formula or written in MathML

### Math formulas

WeasyPrint currently does not support JavaScript (and probably will never support it by its nature), so any raw math formulas can only be converted to static HTML or SVG by some preprocessing programs outside it, rather than simply inserting a `<script>` in the HTML to help us take care of it. This is what the first line in `generate.bash` does. Hooray.

However, it is not the whole story yet. Because WeasyPrint does NOT support inline SVG, I have to use commonHTML as the output format of math formulas. This is the purpose of `--output=CommonHTML` flag. The `--dollars` flag is to convert also inline formulas (such as `$ a = b^2 $`)

Also note that it will take a ridiculously long time when you have a lot of 

### Auto-numbering

Currently I use the `counter` feature in CSS to produce auto-numbered figure caption prefix like `Figure 2` and table caption prefix like `Table 2`.

### Figure and table reference

In LaTeX, if you want to refer to an aforementioned figure or table, first you need to assign name to it such as `fig:heat`, by adding `\label{fig:heat}` right after `\caption{}` in a `figure` environment. Then you can refer to the figure somewhere else in the article by referring to its previously assigned name. For example, when you write `As Figure~\ref{fig:heat} shows`, LaTeX outputs `As Figure 2 shows`.

Referring to an object is even simpler in HTML. You put an attribute `id` on the element that you would like to refer to later, e.g. `<img id="fig:heat" src="..."/>`, and then you put a hyperlink somewhere else that has its `href` set to the `id`, e.g. `<a href="#fig:heat">Figure</a>`. In WeasyPrint with cairo version >= 1.15, hyperlinks will be converted correctly when output to PDF. Nothing you need to worry about.

However, I have not come up with a pure HTML/CSS approach that can give you the figure number when you refer to it. And this feature is crucial because your potential readers might read your PDF on a real paper sheet instead of a computer screen, and the clickable hyperlinks would become totally meaningless.

### Bibliography citation

The same problem as figure and table reference.

Then we have a preprocessed HTML, and it is ready to be input to WeasyPrint to produce a PDF. So far so good.

## Why

I write a lot of reports and homework, and when I am writing, I sometimes wish that LaTeX were never created. I feel at least that
- LaTeX comes with a *huge* package.

    To get a working binary of LaTeX for your daily writing, you have to install a lot of things.

- Preview not on time.

    You have to `xelatex main` and wait a long time until it gets your output out.

    In this workflow, you make changes, and can view your changes and debug quickly in the browser, then you can decide whether to convert it to PDF.

- LaTex is not doing a good job at separation of concerns.

    This is big topic. I will just talk about things I have felt so far.

    The original TeX language was more like a markup language with some styling functionality to me. LaTeX tried to hide those trivial things and to let authors focus just on the content, by providing many macros like `\section{}`. 

    If you strictly stick to the default style that LaTeX provides to you, it is OK forever. However, when you are the boss of a publishing house and you want your books to have a totally different style, it will be a lot of pain to you to change it.

- LaTeX requires some really magic tricks to achieve the style that you think would otherwise be easy to accomplish.
  
    Theoretically, there is probably nothing you can achieve *only* with CSS but not with TeX, but the effort to make them happen is quite different. Some styles can be done with 1-line CSS but hundreds of `\magic{}`.

- Poor support for modern character sets.

    Yes, in order to display text written in other languages than English, you have to `\usepackage` a lot.

While LaTeX has its advantage(s)
- Remarkable simplicity, at least for me, in formatting math formulas.

    That is why I hope to make use of their good parts. In web technologies, we have a so-called MathML as an alternative to display math formulas, but it is hardly human-readable and human-writable.

## Feature checklist

- [x] Styling with CSS (headers, footers, anything)
- [x] Display math formulas e.g. `$$ a = b^2 $$`
- [x] Inline math formulas e.g. `$ a = b^2 $`
- [ ] Formula auto-numbering
- [ ] Formula reference e.g. `\ref{eq:heat}`
- [x] Figure and table auto-numbering e.g. `Figure 1`
- [ ] Figure and table reference e.g. `\ref{tab:heat}`
- [x] Columned layout e.g. `\twocolumn`
- [ ] Floats e.g. `\begin{float}`
- [ ] Table of Content auto-generation e.g. `\tableofcontents`
- [x] Bibliography auto-numbering e.g. `\bibitem`
- [ ] Bibliography citation e.g. `\cite{shi2018}`
- [ ] Bibliography auto-generation

## Future

- Magazines and publishing houses can accept articles written in Markdown or HTML or any markup language they like that can be converted to HTML (one language that comes to my mind is reStructuredText).
- Reviewing and editing scientific writings becomes easy. 
- Scientists have less worries because there is no LaTeX to worry about (except the math formulas which I pretty enjoy typing them), and they can even write in Markdown which will save them plenty of time in writing. We will see tons more progress in science and technology!
- **Mainstream browsers add complete support for CSS Paged Media Specification.**