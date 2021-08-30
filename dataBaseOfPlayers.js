class Player{
    heroes = new Map()

    constructor(numOfPlayer){
        this.numOfPlayer = numOfPlayer
    }


    addHero(hero) {
        this.heroes.set(hero.name, hero)
    }
}

let players = []