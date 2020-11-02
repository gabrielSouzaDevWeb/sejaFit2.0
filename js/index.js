window.index = new Main();

index._allContainer = document.querySelectorAll('.jsContainer');//dento do método
index._dots = document.querySelectorAll('.jsDots li');//dentro do método
index._index = 0;

index.toggleMenu();
index.toggleHeroWithTime();
index.btnNextPrevious();
index.selectDot();
index.displayChangeArticle('ion-icon[name=reader-outline]');

/*thumbnails dos artigos from index*/
var bgArticles = document.querySelectorAll('.c-article__bg');

bgArticles[0].style.backgroundImage = "url('img/imgarticles/legpress.jpg')";