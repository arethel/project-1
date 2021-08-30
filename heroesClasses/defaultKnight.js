
let hero = require('./classHero')
let action = require('./actions/action')


class Knight extends hero.Hero{


    constructor(name,player1,num){
        super(name,player1,num)
        if(player===player1)
            this.action=new action.Action(this,[0,1,2],'knight')
        this.defShield=2

    }
}


module.exports = {
    Knight: Knight
}






