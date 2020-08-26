class ConsultoriaCtrl{
    constructor(){
        this._video = document.querySelector('.jsVideo');
        this._oneRound = true;
        this.toggleMenu();
        this.videoSection();
        
    }

    videoSection(){
        this.startVideo();
        this.resizeVideo();
    }
    startVideo(){
        window.addEventListener('scroll',e=>{
            if(window.scrollY >= 200 && this._oneRound){                
                this._video.setAttribute('src','https://www.youtube.com/embed/eRsGyueVLvQ?controls=0;autoplay=0;start');
                this._oneRound = false;
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

    addAllEventListener(element,events,fun){
        events.split(' ').forEach(event => {
            element.addEventListener(event,fun);
            console.log(event);
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