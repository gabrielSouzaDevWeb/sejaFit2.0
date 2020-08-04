class Ctrls{
    constructor(){
       this.toggleWithTime();
    }

    toggleWithTime(){
        let att = document.querySelector(".jsContainer-1");
        setInterval(() => {
           att.style.zIndex = "-10";
        }, 5000);
    }
}