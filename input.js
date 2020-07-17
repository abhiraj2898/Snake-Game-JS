let input={x:0,y:0}
let last={x:0,y:0}
window.addEventListener('keydown',e=>{
    switch(e.key)
    {
        case 'ArrowUp':
            if(last.y!==0) break
            input={x:0,y:-1}
            break
        case 'ArrowDown':
            if(last.y!==0) break
            input={x:0,y:1}
            break
        case 'ArrowLeft':
            if(last.x!==0) break
            input={x:-1,y:0}
            break
        case 'ArrowRight':
            if(last.x!==0) break
            input={x:1,y:0}
            break

    }
})

export function getDirection(){
    last=input
    return input;
}