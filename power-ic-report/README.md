# power-ic-report

This is the report I wrote for Power IC course, written totally with web technologies. Check out the PDF for preview in this directory.

This demo is, however, a little different from other demos, because I used JavaScript in it, and thus I had to use Chrome to print the PDF. I did not use WeasyPrint because I found that WeasyPrint can not handle too many formulas, otherwise it takes a few minutes to output. For papers that do not require a header or a footer (or any CSS Page Media spec Chrome has not yet implemented), print with Chrome is a good idea because
- JavaScript is availablec (for auto numbering, and auto referencing)
- Formulas come out quickly (takes seconds vs. minutes with WeasyPrint)

I am still trying to reach a workaround for WeasyPrint to process documents with *many* formulas within acceptable duration.

## Usage

Open `main.html` in Chrome, and print to PDF.