
let hero = require('./classHero')
let action = require('../heroesClasses/actions/action')


class Knight extends hero.Hero{
    name='knight'

    constructor(num,grid){
        super(num,grid)
        this.action=new action.Action(this,[0,1,2])
        this.defShield=2

    }
}


module.exports = {
    Knight: Knight
}






