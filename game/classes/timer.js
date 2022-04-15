class Timer{

    #counter
    txt
    #folder

    constructor(){
        this.#counter=-1
        this.#folder = createDiv(document.body, 'timer')
        this.txt = createText(this.#folder, 'time', '--', centerOfSetGridX, 20)
        
        setInterval(() => {
            if (this.#counter>0) {
                this.counter=this.#counter-0.1
            }
        },100)
    }


    set counter(counter){
        this.#counter = counter
        if(this.#counter<5)
            this.txt.innerHTML=this.#counter.toFixed(1).toString()
        else
            this.txt.innerHTML=this.#counter.toFixed(0).toString()

        // if(this.#counter<=0){
        //     grid.extraObjects.get(player).forEach(hero=>{
        //         let action = hero.action.actions.get(hero.action.selected)
        //         if(action!==undefined)
        //             action.funOnTimer()
        //     })
        //     grid.extraObjects.get(player).forEach(hero=>{
        //         let action = hero.action.actions.get(hero.action.selected)
        //         if(action!==undefined)
        //             action.funAfterTimer()
        //         hero.focused=false
        //     })
        // }
    }
}


