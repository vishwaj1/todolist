import { divforTodo } from "./createDivforTodo";
import { addTodoToToday } from "./Today";
import { isToday, isTomorrow, isAfter, addDays, parse } from 'date-fns';
import { addTodoToUpcoming } from "./Upcoming";
import { addTodoToSomeday } from "./Someday";


function compareDate(date){
    if(isToday(date)){
        return 0;
    }
    else if(isTomorrow(date)){
        return 1;
    }
    else{return 2;}

}


export function createTodo(name,desc,dueDate,notes){

    const newDate = parse(dueDate, "yyyy-MM-dd", new Date());

    const checkDate = compareDate(newDate);
    console.log(checkDate,newDate);

    if(checkDate==0){
        addTodoToToday(name,desc,dueDate,notes);
    }
    else if(checkDate==1){
        addTodoToUpcoming(name,desc,dueDate,notes);
    }
    else if(checkDate==2){
        addTodoToSomeday(name,desc,dueDate,notes);
    }
    


}