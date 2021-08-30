class Knight extends Hero{

    #wayToHero='sources/knight/knight.png'

    constructor(name,player1,num){
        super(name,player1,num)
        this.wayToHero = this.#wayToHero
        if(player===player1)
            this.action=new Action(this,[0,1,2],'knight')

    }

    

    
    


}









