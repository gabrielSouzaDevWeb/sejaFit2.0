window.article = new Main();

article.toggleMenu();
article.hasHover('ion-icon[name=bookmark]','orange','white');
article.hasHover('.jsSocial','white','orange');

var title = document.querySelector('.jsArticleTitle');

document.querySelector('.jsPagTitle').innerText = title.textContent;

//
var article = new Articles
var suggestions = document.querySelectorAll('.l-article-suggestions__wrap a');
suggestions.forEach(element => {
    element.children[0].children[0].setAttribute('scr',article.background);
});

