import { getDirection } from "./input.js";

export const speed=5

const snakeBody=[
    {x:11,y:11},
];

export function update()
{
    addSegments()
    for(let i=snakeBody.length-2;i>=0;i--)
    {
        snakeBody[i+1]={...snakeBody[i]};
    }
    const dir=getDirection()
    snakeBody[0].x+=dir.x;
    snakeBody[0].y+=dir.y;
}

export function draw(gameBoard)
{
    snakeBody.forEach(i=>{
        const element=document.createElement('div')
        element.style.gridRowStart=i.y;
        element.style.gridColumnStart=i.x;
        element.classList.add('snake')
        gameBoard.appendChild(element);
    })
}
let segment=0;
export function expandSnake(amount)
{
    segment+=amount;
}

export function onSnake(pos,{ignoreHead=false}={})
{
    return snakeBody.some((i,idx)=>{
        if(ignoreHead && idx===0) return false;
        return equalPosition(i,pos)
    })
}

function equalPosition(p1,p2)
{
    return p1.x ===p2.x && p1.y===p2.y
}

function addSegments()
{
    for(let i=0;i<segment;i++)
    {
        snakeBody.push({...snakeBody[snakeBody.length-1]})
    }
    segment=0;
}

export function intersect()
{
    return onSnake(snakeBody[0],{ignoreHead:true})
}

export function getHead()
{
    return snakeBody[0];
}