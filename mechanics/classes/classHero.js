class Hero{
    #name= 'hero'
    #fullName
    #num=[0,0]
    #xOy=[0,0]
    #player= 0
    #wayToHero = null
    #img=null
    #allHeroesFolder = null
    #heroesFolder=null
    #heroFolder=null


    #hexesForMove = 1
    #hexesNearForMove=null

    #hexesForAttack=1
    #hexesNearForAttack=null

    #canUseAction = false
    #focused = false

    #action = null
    #actionsFolder

    constructor(name,player,num){
        this.#name=name
        this.#num=num
        this.#player=player
        this.#createHero()
        
        this.#actionsFolder = createDiv(this.heroFolder, '', 'actions')
    }

    #createHero(){
        this.#fullName = this.#name+this.#player
        this.#xOy = grid.allHexes.get(JSON.stringify([this.#num[0],this.#num[1]])).xOy
        

        this.#hexesNearForMove=this.#getHexesNear(this.#hexesForMove,this.#num)
        this.#hexesNearForAttack=this.#getHexesNear(this.#hexesForAttack,this.#num)

        let normalBigger=normal.normal+2
        let sizeOfHexBigger = Normal.getSizeOfHex(normal.normal+2)

        let allHeroes = document.getElementById('heroes')
        let heroes = document.getElementById(this.#name)
        let hero = document.getElementsByClassName(this.#fullName)[0]

        if(allHeroes===null)
            allHeroes=createDiv(document.body,'heroes')
        this.#allHeroesFolder=allHeroes
        if(heroes===null)
            heroes = createDiv(allHeroes,this.#name)
        this.#heroesFolder=heroes
        if(hero===undefined)
            hero = createDiv(heroes,'',this.#fullName)
        this.#heroFolder=hero
        
        this.#img=createImg(hero,this.#fullName,this.#wayToHero,
            sizeOfHexBigger*2,normalBigger*2,
            this.#xOy[0]-normal.sizeOfHex,this.#xOy[1]-normal.normal,this.#name+' player'+this.#player)
        grid.addObj(this,this.#player)

        if(this.#player===player){
            this.#canUseAction=true
            changeCursorStyle(this.#img,1)
            this.#OnKnightClickFunction()
        }


    }


    #OnKnightClickFunction(){
        let thisHero = this
        $(thisHero.#img).on('click',function(){
            
            thisHero.focused=true
            function docClick(){
                thisHero.#OnKnightClickFunction()
                thisHero.focused=false
                $(document).off('click',docClick);
            }
            window.setTimeout(()=>{$(document).on('click',docClick)},0)
            $(thisHero.#img).off('click');
        })
    }

    set focused(focused){
        if(this.#focused!==focused&&this.#canUseAction){
            this.#focused = focused
            if(focused){
                grid.extraObjects.get(this.#player).forEach(item=>{
                    if(item!==this)
                        item.focused=false
                })
                changeCursorStyle(this.#img,0)
                this.#setActionsActive(true)
            }
            else{
                changeCursorStyle(this.#img,1)
                this.#setActionsActive(false)
            }
        }
    }

    #setActionsActive(active){
        this.#action.active=active
    }

    set num(num){
        this.#num = num
        this.#hexesNearForMove=this.#getHexesNear(this.#hexesForMove,this.#num)
        this.#hexesNearForAttack=this.#getHexesNear(this.#hexesForAttack,this.#num)
        this.xOy = grid.allHexes.get(JSON.stringify(num)).xOy
    }

    set xOy(xOy){
        this.#xOy = xOy
        setImgSizeOffset(this.#img,(Normal.getSizeOfHex(normal.normal+2) * 2)
        ,((normal.normal+2) * 2),(this.#xOy[0]  - normal.sizeOfHex),(this.#xOy[1] - normal.normal))
        if(this.#action!==null)
            this.#action.xOy=xOy
    }

    set wayToHero(wayToHero){
        this.#wayToHero=wayToHero
        this.#img.src = wayToHero
    }

    set action(action){
        this.#action = action
    }

    get action(){return this.#action}
    get actionsFolder(){return this.#actionsFolder}
    get focused(){ return this.#focused }
    get hexesForMove(){ return this.#hexesForMove }
    get hexesNearForMove(){ return this.#hexesNearForMove }
    get hexesForAttack(){ return this.#hexesForAttack }
    get hexesNearForAttack(){ return this.#hexesNearForAttack }
    get wayToHero(){ return this.#wayToHero }
    get xOy(){ return this.#xOy }
    get num(){ return this.#num }
    get heroFolder(){ return this.#heroFolder }
    get heroesFolder(){ return this.#heroesFolder }
    get allHeroesFolder(){ return this.#allHeroesFolder }
    get img(){ return this.#img }
    get player(){ return this.#player }
    get name(){ return this.#name }
    get fullName(){ return this.#fullName }
    get canUseAction(){ return this.#canUseAction }


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
        return Array.from(grid.allHexes.values()).filter(item1=>hexsNumber.findIndex(item2=>item1.num[0]===item2[0]&&item1.num[1]===item2[1])>-1)
    }

    delete(){
        this.#img.parentNode.removeChild(this.#img)
    }

}




