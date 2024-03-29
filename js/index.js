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
bgArticles[1].style.backgroundImage = "url('img/imgarticles/crossmuscle.jpeg')";
bgArticles[2].style.backgroundImage = "url('img/imgarticles/biset.jpeg')";
bgArticles[3].style.backgroundImage = "url('img/imgarticles/trainingdivision.jpeg')";
bgArticles[4].style.backgroundImage = "url('img/imgarticles/resultadostreino.jpg')";
bgArticles[5].style.backgroundImage = "url('img/imgarticles/crossover.jpg')";

//recomendação

var articles = document.querySelectorAll('.c-article');
articles.forEach(element => {
    let link =  element.children[0].href;
    let background = element.children[0].children[0].children[0].style.backgroundImage;
    let title = element.children[1].textContent;
    let text = element.children[2].textContent;
    if(title.substring(0,5) != 'Lorem' && text.substring(0,5) != 'lorem'){
        /* console.log('TITLE: ',title);
        console.log('TEXTO: ',text);*/
        let articles = new Articles(title,text,link,background);
        console.log(articles);
        
    };
});

