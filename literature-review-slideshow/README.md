# literature-review-slideshow

This is a slideshow I wrote for a weekly group meeting, again written totally with web technologies. Check out the PDF for preview in this directory.

This demo uses JavaScript, mostly MathJax, because it contains *many* formulas and it takes some seconds even for Chrome to process all of them. 

## Usage

If you want to create your own slideshow based on this, you can refer to `main.html`. Basically, a frame is defined in html like
```html
<div class="frame">
    <h1 class="frame__title"><cite><a href="#shi"></a></cite></h1>
    <h2 class="frame__subtitle">Conclusion</h2>
    <div class="frame__content">
        <ul>
            <li>Very explicit rules that are suitable for programming implementation. I like it</li>
            <li>Over-exaggerated, misleading title</li>
        </ul>
    </div>
</div>
```
Put frame title in `.frame__title`, frame subtitle in `.frame__subtitle` and frame content wrapped in `.frame__content`.