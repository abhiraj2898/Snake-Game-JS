const sz=21;

export function randomGrid()
{
return {
    x:Math.floor(Math.random()*sz)+1,
    y:Math.floor(Math.random()*sz)+1
}
}

export function outside(pos)
{
    return(
        pos.x<1 || pos.x>sz || pos.y<1 || pos.y>sz
    )
}