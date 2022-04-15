class Knight extends Hero{

    #wayToHero='sources/knight/knight.png'
    name = 'knight'
    constructor(player1,num){
        super(player1,num)
        this.wayToHero = this.#wayToHero
        if(player===player1)
            this.action=new Action(this,[0,1,2],this.name)

    }

}









