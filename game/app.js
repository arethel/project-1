

function addScript(name){
    return new Promise(resolve => {
        const script = document.createElement('script')
        script.src = name+'.js'
        document.body.appendChild(script)
        
        script.onload = function(){ resolve(true)}
    });
}


  
async function f1() {
    await addScript('socketRedirect')
    await addScript('functions/functions')
    await addScript('classes/normal')
    await addScript('classes/hexagon')
    await addScript('classes/grid')
    
    //await addScript('sets/setGrid')
    await addScript('classes/timer')
    await addScript('classes/action')
    await addScript('classes/classHero')
    await addScript('modules/defaultKnight')
    await addScript('testScene')

    await addScript('onEvents/onMouseClickHero')
    await addScript('onEvents/onResize')
    await addScript('socketSyncTimer')

}

f1();



