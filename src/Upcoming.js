import { divforTodo } from "./createDivforTodo";

class Details{
    constructor(name,desc,dueDate,notes){
        this.name = name;
        this.desc = desc;
        this.dueDate = dueDate;
        this.notes = notes;
    }

}
let listoftodos = []

export function addTodoToUpcoming(todoname,desc,dueDate,notes){
    let todo = new Details(todoname,desc,dueDate,notes)
    listoftodos.push(todo);

}

export function displayTodoUpcoming(){
    let cont = document.querySelector('#container');
    cont.innerHTML='';
    if(listoftodos.length == 0 ){
        cont.innerHTML = 'No Todos to Display';
    }
    else
    {
        for(let i=0;i<listoftodos.length;i++){
            let div = divforTodo(listoftodos[i].name,listoftodos[i].desc,listoftodos[i].dueDate,listoftodos[i].notes);
            let cont = document.querySelector('#container');
            cont.appendChild(div);
        }
    }
}