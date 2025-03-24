import { createTodo } from "./createTodo";
import { displayTodoSomeday } from "./Someday";
import "./styles.css"
import { displayTodoToday } from "./Today";
import { todoForms } from "./todoForm";
import { displayTodoUpcoming } from "./Upcoming";
console.log("Helllo");




export function clickmenu(){

}
document.addEventListener('DOMContentLoaded',todoForms());

const today = document.querySelector('.today');
today.addEventListener('click',()=>{
    displayTodoToday();
})
today.click();

const upcoming = document.querySelector('.Upcoming');
upcoming.addEventListener('click',()=>{
    displayTodoUpcoming();
})

const someday = document.querySelector('.Someday');
someday.addEventListener('click',()=>{
    displayTodoSomeday();
})
let toggle = true;
const menu = document.querySelector('.menu')
const menubar = document.querySelector('.menubar');


menubar.addEventListener('click',()=>{
    if(toggle){
        menu.style.display = 'flex';
    }
    else{
        menu.style.display = 'none';
    }
    toggle = !toggle;
})

