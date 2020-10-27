window.article = new Main();

article.toggleMenu();
article.hasHover('ion-icon[name=bookmark]','orange','white');
article.hasHover('.jsSocial','white','orange');

var title = document.querySelector('.jsArticleTitle');

document.querySelector('.jsPagTitle').innerText = title.textContent;