class Action{
    #hero
    #selected=-1
    #active = false
    #folder
    #src
    #xOy=[0,0]
    #amountOfActions

    #actions = new Map()
    #chosenActions

    kofOfSize= 0.75

    constructor(hero,actions,src){
        this.#hero=hero
        this.#folder=hero.actionsFolder
        this.#amountOfActions=actions.length
        this.#chosenActions=actions
        this.#src=src

        this.createActions()
    }



    fillActions(){
        let action = this

        let move = {
            name: 'move',
            src: 'sources/'+action.src+'/move.png',
            num: 0,
            img: null,
            xOy: [0,0],
            
            setxOy: function(){
                this.xOy[0]=action.hero.xOy[0]+normal.normal*2*Math.sin(Math.PI*2*this.num/action.amountOfActions)
                this.xOy[1]=action.hero.xOy[1]-normal.normal*2*Math.cos(Math.PI*2*this.num/action.amountOfActions)
                setImgSizeOffset(this.img,action.kofOfSize*(Normal.getSizeOfHex(normal.normal+2) * 2)
                ,action.kofOfSize*((normal.normal+2) * 2),(this.xOy[0]  - action.kofOfSize*normal.sizeOfHex),
                (this.xOy[1] - action.kofOfSize*normal.normal))
            },
            funImmediately: function(){
                let ths = this
                action.hero.hexesNearForMove.forEach(hex=>{
                    hex.src = 'sources/grayHex.png'
                    changeCursorStyle(hex.img,1)
                    $(hex.img).on('click',function(){
                        ths.funOnTimer=function(){
                            action.hero.num=hex.num
                        }
                    })
                })
            
                function docClickInHeroMove(){
                    action.hero.hexesNearForMove.forEach(hex=>{
                        hex.src = 'sources/hex.png'
                        changeCursorStyle(hex.img,0)
                        $(hex.img).off('click')
                    })
                    $(document).off('click',docClickInHeroMove);
                }
                $(document).on('click',docClickInHeroMove)
            },
            funToUndo: function(){
                this.funOnTimer=function(){}
            },
            funOnTimer: function(){

            },
            funAfterTimer: function(){
                this.funOnTimer=function(){}
                action.hero.hexesNearForMove.forEach(hex=>{
                    hex.src = 'sources/hex.png'
                    changeCursorStyle(hex.img,0)
                    $(hex.img).off('click')
                })
                action.selected=-1
            },
            createThis: function(){
                this.xOy[0]=action.hero.xOy[0]+normal.normal*2*Math.sin(Math.PI*2*this.num/action.amountOfActions)
                this.xOy[1]=action.hero.xOy[1]-normal.normal*2*Math.cos(Math.PI*2*this.num/action.amountOfActions)
                this.img=createImg(action.folder, '', this.src, 
                action.kofOfSize*(Normal.getSizeOfHex(normal.normal+2) * 2),
                action.kofOfSize*((normal.normal+2) * 2),
                (this.xOy[0]  - action.kofOfSize*normal.sizeOfHex),
                (this.xOy[1] - action.kofOfSize*normal.normal),this.name,false
                )
                changeCursorStyle(this.img,1)
                this.img.style.zIndex=10
            }
        }
        this.#actions.set(move.num,move)
        
        let attack = {
            name: 'attack',
            src: 'sources/'+action.src+'/attack.png',
            num: 1,
            img: null,
            xOy: [0,0],
            setxOy: function(){
                this.xOy[0]=action.hero.xOy[0]+normal.normal*2*Math.sin(Math.PI*2*this.num/action.amountOfActions)
                this.xOy[1]=action.hero.xOy[1]-normal.normal*2*Math.cos(Math.PI*2*this.num/action.amountOfActions)
                setImgSizeOffset(this.img,action.kofOfSize*(Normal.getSizeOfHex(normal.normal+2) * 2)
                ,action.kofOfSize*((normal.normal+2) * 2),(this.xOy[0]  - action.kofOfSize*normal.sizeOfHex),
                (this.xOy[1] - action.kofOfSize*normal.normal))
            },
            funImmediately: function(){

            },
            funToUndo: function(){

            },
            funOnTimer: function(){

            },
            funAfterTimer: function(){

            },
            createThis: function(){
                this.xOy[0]=action.hero.xOy[0]+normal.normal*2*Math.sin(Math.PI*2*this.num/action.amountOfActions)
                this.xOy[1]=action.hero.xOy[1]-normal.normal*2*Math.cos(Math.PI*2*this.num/action.amountOfActions)
                this.img=createImg(action.folder, '', this.src, 
                action.kofOfSize*(Normal.getSizeOfHex(normal.normal+2) * 2),
                action.kofOfSize*((normal.normal+2) * 2),
                (this.xOy[0]  - action.kofOfSize*normal.sizeOfHex),
                (this.xOy[1] - action.kofOfSize*normal.normal),this.name,false
                )
                changeCursorStyle(this.img,1)
                this.img.style.zIndex=10
            }
        }
        this.#actions.set(attack.num,attack)

        let shield = {
            name: 'shield',
            src: 'sources/'+action.src+'/shield.png',
            num: 2,
            img: null,
            xOy: [0,0],
            setxOy: function(){
                this.xOy[0]=action.hero.xOy[0]+normal.normal*2*Math.sin(Math.PI*2*this.num/action.amountOfActions)
                this.xOy[1]=action.hero.xOy[1]-normal.normal*2*Math.cos(Math.PI*2*this.num/action.amountOfActions)
                setImgSizeOffset(this.img,action.kofOfSize*(Normal.getSizeOfHex(normal.normal+2) * 2)
                ,action.kofOfSize*((normal.normal+2) * 2),(this.xOy[0]  - action.kofOfSize*normal.sizeOfHex),
                (this.xOy[1] - action.kofOfSize*normal.normal))
            },
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
            },
            createThis: function(){
                this.xOy[0]=action.hero.xOy[0]+normal.normal*2*Math.sin(Math.PI*2*this.num/action.amountOfActions)
                this.xOy[1]=action.hero.xOy[1]-normal.normal*2*Math.cos(Math.PI*2*this.num/action.amountOfActions)
                this.img=createImg(action.folder, '', this.src, 
                action.kofOfSize*(Normal.getSizeOfHex(normal.normal+2) * 2),
                action.kofOfSize*((normal.normal+2) * 2),
                (this.xOy[0]  - action.kofOfSize*normal.sizeOfHex),
                (this.xOy[1] - action.kofOfSize*normal.normal),this.name,false
                )
                changeCursorStyle(this.img,1)
                this.img.style.zIndex=10
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
        window.setTimeout(()=>
        this.#chosenActions.forEach(num=>{
            if(num===selected){
                this.#actions.get(num).funImmediately()
            }
            else{
                this.#actions.get(num).funToUndo()
            }

        }),0)

        this.active=false
    }

    set active(active){
        let thisAction = this
        if(this.#active!==active){
            this.#active=active 

            this.#chosenActions.forEach(num=>{
                let act = this.#actions.get(num)
                if(act!==undefined){
                    setImgVisible(act.img,active)
                    if(active){
                        $(act.img).on('click',function(){
                            thisAction.selected=act.num
                            thisAction.hero.focused=false
                            $(act.img).off('click')
                        })
                    }
                    else{
                        $(act.img).off('click')
                    }
                }
            })

            
        }
    }

    set xOy(xOy){
        this.#chosenActions.forEach(num=>{
            let act = this.#actions.get(num)
            if(act!==undefined){
                act.setxOy()
            }
        })
    }

    get actions(){return this.#actions}
    get src(){return this.#src}
    get active(){return this.#active}
    get amountOfActions(){return this.#amountOfActions}
    get xOy(){return this.#xOy}
    get folder(){return this.#folder}
    get selected(){return this.#selected}
    get hero(){return this.#hero}

}





