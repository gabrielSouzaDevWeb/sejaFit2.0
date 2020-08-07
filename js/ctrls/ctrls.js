class Ctrls{
    constructor(){
        this._allContainer = document.querySelectorAll(".jsContainer");
        this._index = 0;
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

    getStyleValue(tag, cssAtr){
        return window.getComputedStyle(tag, null).getPropertyValue(cssAtr);
    }
}