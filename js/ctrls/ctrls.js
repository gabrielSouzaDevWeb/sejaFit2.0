class Ctrls{
    constructor(){
        this._allContainer = document.querySelectorAll('.jsContainer');//dento do método
        this._dots = document.querySelectorAll('.jsDots li');//dentro do método
        this._index = 0;   
        this.toggleMenu();
        this.toggleHeroWithTime();
        this.btnNextPrevious();
        this.selectDot();
    }

    selectDot(){
        this._dots.forEach((element, i) => {
            element.addEventListener('click', e=>{
                this.resetBgDots();
                element.style.backgroundColor = 'rgb(94, 83, 83)';
                this.resetAllIndex();
                this.setIndex(i);
            });
        });
    }


    btnNextPrevious(){
        this.btnNext();
        this.btnPrevious();
    }

    btnNext(){
        let btnNext = document.querySelector('.jsBtnNext');        
        btnNext.addEventListener('click',e=>{
            this.resetAllIndex();
            (this._index == this._allContainer.length -1) ? this._index=0: this._index++;
            this.setIndex();
            this.bgDot();
        });
    }

    btnPrevious(){
        let btnNext =document.querySelector('.jsBtnPrevious');
        btnNext.addEventListener('click',e=>{
            this.resetAllIndex();
            (this._index == 0) ? this._index=this._allContainer.length -1: this._index--;
            this.setIndex();
            this.bgDot();
        });
    }

    toggleHeroWithTime(){
        this.bgDot();
        setInterval(() => {
            this.changeIndex();
            this.bgDot();
        }, 5000);
    }
    bgDot(){
        this.resetBgDots();
        this._dots[this._index].style.backgroundColor = 'rgb(94, 83, 83)';
    }
    resetBgDots(){
        this._dots.forEach(element => {
            element.style.backgroundColor= "white";            
        });
    }
    changeIndex(){
        this.resetAllIndex();
        this.setIndex();
        (this._index == this._allContainer.length -1) ? this._index=0: this._index++;
    }

    setIndex(value = this._index){
        this._allContainer[value].style.zIndex= `${this._allContainer.length}`;
    }

    resetAllIndex(){
        this._allContainer.forEach(e => {
            e.style.zIndex= '0';
        });
    }

    toggleMenu(){
        let btnMenuMobile = document.querySelector('.jsBtnMenuMobile');
        let menuMobile = document.querySelector('.jsMenuMobile');
        let marginTopValueAfter = this.getStyleValue(menuMobile, 'margin-top')
        btnMenuMobile.addEventListener('click', e=>{
            let marginTopValue= this.getStyleValue(menuMobile, 'margin-top');
            if(parseInt(marginTopValue) <= parseInt(marginTopValueAfter)){
                menuMobile.style.marginTop = '0%';
            } else {
                menuMobile.style.marginTop = '-120%';
            }   
        });
    }
    

    getStyleValue(tag, cssAtr){
        return window.getComputedStyle(tag, null).getPropertyValue(cssAtr);
    }

    getWidthDisplay(){        
        if (window.innerWidth){
            return  window.innerWidth;
        } else if(document.documentElement && document.documentElement.clientWidth){
            return document.documentElement.clientWidth;
        } else if(document.body){
            return document.body;
        }
    }
}