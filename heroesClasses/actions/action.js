class Action{
    #hero
    #selected=-1

    #actions = new Map()
    #chosenActions


    constructor(hero,actions){
        this.#hero=hero
        this.#chosenActions=actions

        this.createActions()
    }



    fillActions(){
        let action = this

        let move = {
            name: 'move',
            num: 0,
            funImmediately: function(){
                let ths = this
                ths.funOnTimer=function(){
                    action.hero.num=hex.num
                }
            },
            funToUndo: function(){
                this.funOnTimer=function(){}
            },
            funOnTimer: function(){

            },
            funAfterTimer: function(){
                this.funOnTimer=function(){}
                action.selected=-1
            }
        }
        this.#actions.set(move.num,move)
        
        let attack = {
            name: 'attack',
            num: 1,
            funImmediately: function(){

            },
            funToUndo: function(){

            },
            funOnTimer: function(){

            },
            funAfterTimer: function(){

            }
        }
        this.#actions.set(attack.num,attack)

        let shield = {
            name: 'shield',
            num: 2,
            funImmediately: function(){
                action.hero.shield=action.hero.commonShield+action.hero.defShield
            },
            funToUndo: function(){
                action.hero.shield=action.hero.commonShield
            },
            funOnTimer: function(){

            },
            funAfterTimer: function(){
                action.hero.shield=action.hero.commonShield
                action.selected=-1
            }
        }
        this.#actions.set(shield.num,shield)

    }

    createActions(){
        this.fillActions()
        this.#chosenActions.forEach(num=>{
            let act = this.#actions.get(num)
            if(act!==undefined){
                act.createThis()
            }
        })
    }


    set selected(selected){
        this.#selected = selected
        this.#chosenActions.forEach(num=>{
            if(num===selected){
                this.#actions.get(num).funImmediately()
            }
            else{
                this.#actions.get(num).funToUndo()
            }

        })
    }

    


    get actions(){return this.#actions}
    get selected(){return this.#selected}
    get hero(){return this.#hero}

}


module.exports = {
    Action: Action
}


