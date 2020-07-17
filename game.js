import {update as updateSnake,draw as drawSnake,speed,intersect,getHead} from './snake.js'
import {update as updateFood, draw as drawFood} from './food.js'
import {outside} from './grid.js'
let lastTime=0
let over =false;
const gameBoard=document.getElementById('gameBoard')

function main(time)
{
    if(over)
    {
        if(confirm('You Lost,Press OK to restart'))
        {
            window.location='/'
        }
        return 
    }
    window.requestAnimationFrame(main)
    //console.log('IM 1st');
    let diff=(time-lastTime)/1000
    if(diff<(1/speed)) return;
    //console.log('im 2nd');
    lastTime=time;

    update()
    draw()
}

window.requestAnimationFrame(main);

function update()
{
    updateSnake()
    updateFood()
    checkdeath()
}

function draw()
{
    gameBoard.innerHTML='' //erases previous part of snake
    drawSnake(gameBoard)
    drawFood(gameBoard)
}


function checkdeath()
{
    over=outside(getHead()) || intersect()
}