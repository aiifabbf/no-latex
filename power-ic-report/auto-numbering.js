document.addEventListener("readystatechange", () => {

    var figures = Array.from(document.querySelectorAll("figure > img")).map(s => s.parentElement) // find all figures
    var tables = Array.from(document.querySelectorAll("figure > table")).map(s => s.parentElement) // find all tables
    var bibitems = Array.from(document.querySelectorAll(".bibliography__item")) // find all bibitems

    var references = Array.from(document.querySelectorAll("a[href^='#']")) // find all clickable references and citations hyperlinks

    figures.map(figure => {
        var target = figure.querySelector("figcaption")
        if(target) {
            target.setAttribute("data-id", figures.indexOf(figure) + 1)
        }
    })

    tables.map(table => {
        var target = table.querySelector("figcaption")
        if(target) {
            target.setAttribute("data-id", tables.indexOf(table) + 1)
        }
    })

    bibitems.map(bibitem => {
        bibitem.setAttribute("data-id", bibitems.indexOf(bibitem) + 1)
    })

    references.map(reference => {
        var target = document.querySelector(reference.getAttribute("href"))
        if (target) { // target might not exist at all
            [figures, tables, bibitems].map(typeSet => {
                if (typeSet.indexOf(target) !== -1) {
                    if (typeSet === bibitems) { // it is referring to a bibitem, which has [data-id] on the li
                        caption = target
                    } else { // it is referring to a figure or table, which has [data-id] not on the figure, but on the figcaption
                        caption = target.querySelector("figcaption")
                    }
                    reference.setAttribute("data-target-id", caption.getAttribute("data-id"))
                }
            })
        }
    })
})