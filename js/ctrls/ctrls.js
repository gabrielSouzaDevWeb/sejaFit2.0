class Ctrls{
    constructor(){
        this._allContainer = document.querySelectorAll(".jsContainer");//inside changeIndex();
        this._index = 0;   
        this.toggleMenu();
        this.toggleHeroWithTime();      
       
    }

    toggleHeroWithTime(){
        setInterval(() => {
            this.changeIndex();
        }, 5000);
    }

    changeIndex(){
        this.resetAllIndex();
        this._allContainer[this._index].style.zIndex= `${this._allContainer.length}`;
        (this._index == this._allContainer.length -1) ? this._index=0: this._index++;
    }

    resetAllIndex(){
        this._allContainer.forEach(e => {
            e.style.zIndex= "0";
        });
    }

    toggleMenu(){
        let btnMenuMobile = document.querySelector(".jsBtnMenuMobile");
        let menuMobile = document.querySelector(".jsMenuMobile");
        let marginTopValueAfter = this.getStyleValue(menuMobile, "margin-top")
        btnMenuMobile.addEventListener("click", e=>{
            let marginTopValue= this.getStyleValue(menuMobile, "margin-top");
            if(parseInt(marginTopValue) <= parseInt(marginTopValueAfter)){
                menuMobile.style.marginTop = "0%";
            } else {
                menuMobile.style.marginTop = "-120%";
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