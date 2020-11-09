class Articles{
    constructor(title,text,link,background){
        this._title = title;
        this._text = text;
        this._link = link;
        this._background = background;
    }

    get title(){
        return this._title;
    }
    set title(e){
        this._title = e;
    }
    get text(){
        return this._text;
    }
    set text(e){
        this._text = e;
    }
    get link(){
        return this._link;
    }
    set link(e){
        this._link = e;
    }
    get background(){
        return this._background;
    }
    set background(e){
        this._background = e;
    }
}