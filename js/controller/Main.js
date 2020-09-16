class Main{
    constructor(){
         /*this._allContainer = document.querySelectorAll('.jsContainer');//dento do método
        this._dots = document.querySelectorAll('.jsDots li');//dentro do método
        this._index = 0; 
        this._video = document.querySelector('.jsVideo');   
        this.toggleMenu();
        this.toggleHeroWithTime();
        this.btnNextPrevious();
        this.selectDot();
        this.startVideo();*/
        //
       
        //if(toggleViewPort){refresh;}

    }

    videoSection(){
        this.startVideo();
        this.resizeVideo();
    }
    
    startVideo(){
        let oneRound = true;
        window.addEventListener('scroll',e=>{
            if(window.scrollY >= 200 && oneRound){                
                this._video.setAttribute('src','https://www.youtube.com/embed/eRsGyueVLvQ?controls=0;autoplay=0;start');
                oneRound = false;
            }
        });        
    }

    resizeVideo(){
        this.addAllEventListener(window,'load resize', e=>{
            if (this.getWidthDisplay() <= 927) {
                this._video.setAttribute('width', '380em');
                this._video.setAttribute('height', '200em');
                //alert(this.getWidthDisplay());
            } else if(this.getWidthDisplay() <= 1200){
                this._video.setAttribute('width', '700rem');
                this._video.setAttribute('height', '350em');
            }
        });
    }

    startVideo(){
        window.addEventListener('scroll',e=>{
            window.scrollY;
        })
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

    addAllEventListener(element,events,fun){
        events.split(' ').forEach(event => {
            element.addEventListener(event,fun);
            console.log(event);
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