function createDiv(insertObj,id,class_=''){
    let obj = document.createElement('div')
    obj.id=id
    if(class_!=='')
        obj.className=class_
    insertObj.append(obj)
    return obj
}

function setSize(obj,width,height){
    obj.width = width.toString()
    obj.height = height.toString()
}

function setStyle(obj,offLeft,offTop,pos=''){
    obj.style.top = offTop + 'px'
    obj.style.left = offLeft + 'px'
    if(pos!=='')
        obj.style.position = pos
}

function setImgSizeOffset(img,width,height,offLeft,offTop){
    setSize(img,width,height)
    setStyle(img,offLeft,offTop)
}

function createImg(insertObj,id,wayToSource,width,height,offLeft,offTop,class_='',visible=true){
    let obj = document.createElement('img')
    obj.src = wayToSource
    setSize(obj,width,height)
    setStyle(obj,offLeft,offTop,'absolute')
    obj.id = id
    if(class_!=='')
        obj.className=class_
    obj.draggable = false
    setImgVisible(obj,visible)
    insertObj.append(obj)
    return obj
}

function setImgVisible(img,visible){
    if(visible)
        img.style.visibility = "visible"
    else
        img.style.visibility = "hidden"
}

function changeCursorStyle(obj,cursorStyle=0){
    switch (cursorStyle) {
        case 1:
            obj.style.cursor='pointer'
            break
        case 2:
            obj.style.cursor='progress'
            break
        case 3:
            obj.style.cursor='wait'
            break
        default:
            obj.style.cursor='default'
      }
        
    
}

function createText(insertObj, name, str, x, y, size=40, font='Arial'){
    let txt = document.createElement('div')
    txt.id = name
    txt.innerHTML=str
    txt.style.fontFamily=font
    txt.style.fontSize = size+'px'
    setStyle(txt,x,y,'absolute')
    insertObj.append(txt)
    return txt
}


