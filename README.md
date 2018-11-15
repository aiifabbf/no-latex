# no-latex

An experimental alternative to LaTeX in scientific writing, using web technologies.

This is a demo showing how web technologies like HTML, CSS can smooth your scientific writing experience

- [Quickstart](#Quickstart)
- [How it works](#How-it-works)
- [Why](#Why)
- [Future](#Future)

## Quickstart

This workflow depends on
- [WeasyPrint](https://github.com/Kozea/WeasyPrint) to convert HTML to PDF,
- [mathjax-node-page](https://github.com/pkra/mathjax-node-page/) to preprocess HTMLs containing math formulas delimited in `$$` or written in MathML.

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

To be updated.

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

## Future

- Magazines and publishing houses can accept articles written in Markdown or HTML or any markup language they like that can be converted to HTML (one language that comes to my mind is reStructuredText).
- Reviewing and editing scientific writings becomes easy. Scientists have less worries to write because there is no LaTeX to worry about (except the math formulas which I pretty enjoy typing them).
- My mind is now limited and I need a good sleep to recover.