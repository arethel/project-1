class Hero{
    name= 'hero'
    num=[0,0]
    health= 1
    shield= 0
    commonShield=0
    defShield=0
    dmgAttack=1
    exDmgAttack=0
    cellForAttack=[0,0]
    cellForMove=[0,0]
    actionCharge=1

    hexesForMove=1
    hexesNearForMove=null

    hexesForAttack=1
    hexesNearForAttack=null
    grid = null
    action = null

    constructor(num, grid){
        this.num = num
        this.grid = grid
        this.#createHero()
    }

    #createHero(){

        this.hexesNearForMove=this.#getHexesNear(this.hexesForMove,this.num)
        this.hexesNearForAttack=this.#getHexesNear(this.hexesForAttack,this.num)
    }


    // set num(num){
    //     this.num = num
    //     this.hexesNearForMove=this.#getHexesNear(this.hexesForMove,this.num)
    //     this.hexesNearForAttack=this.#getHexesNear(this.hexesForAttack,this.num)
    // }

    createData() {
        return  {
            name: this.name,
            num: this.num,
            health: this.health,
            shield: this.shield,
            commonShield: this.commonShield,
            defShield: this.defShield,
            dmgAttack: this.dmgAttack,
            exDmgAttack: this.exDmgAttack,
            cellForAttack: this.cellForAttack,
            cellForMove: this.cellForMove,
            actionCharge: this.actionCharge,
        }
    }


    #getHexesNear(distance,num){
        let hexsNumber=[]
        for(let i =-distance;i<=distance;i++){
            let kof = distance-Math.trunc(Math.abs(i)/2)

            let kofDn1 = Math.abs(i)%2===1?-1:0
            let kofDn2 = 0
            if(Math.abs(num[1])%2!==1){
                kofDn2= -kofDn1
                kofDn1=0
            }
            
            for(let j =-kof+kofDn2;j<=kof+kofDn1;j++){
                if(i===0&&j===0)
                    continue
                hexsNumber.push([num[0]+j,num[1]+i])
            }
        }
        return Array.from(this.grid.allHexes.values()).filter(item1=>hexsNumber.findIndex(item2=>item1.num[0]===item2[0]&&item1.num[1]===item2[1])>-1)
    }

}

module.exports = {
    Hero: Hero
}



