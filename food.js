import {onSnake,expandSnake} from './snake.js'
import {randomGrid} from './grid.js'
let food={x:10,y:1}
const expand=5;

export function update()
{
    if(onSnake(food))
    {
        expandSnake(expand)
        food=getRandomPos()
    }
}

export function draw(gameBoard)
{
    
        const foodElement=document.createElement('div')
        foodElement.style.gridRowStart=food.y;
        foodElement.style.gridColumnStart=food.x;
        foodElement.classList.add('food')
        gameBoard.appendChild(foodElement);
 
}

function getRandomPos()
{
    let newPos;
    while(newPos==null || onSnake(newPos))
    {
        newPos=randomGrid()
    }
    return newPos;
}