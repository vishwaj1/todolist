import { createTodo } from "./createTodo";
import { displayTodoToday } from "./Today";

export function todoForms(){
    const modal = document.createElement('div');
    modal.innerHTML = `
    <div id="popup" style="display:none; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
                            background-color: white; padding: 20px; border: 1px solid #ccc; box-shadow: 0 0 10px rgba(0,0,0,0.5)">
        <h2>Enter Details</h2>
        <form id="popupForm">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required><br><br>

            <label for="desc">Description:</label>
            <input type="text" id="desc" name="Description" required><br><br>

            <label for="duDate">DueDate:</label>
            <input type="date" id="DueDate" name="DueDate" required><br><br>

            <label for="notes">Notes:</label>
            <input type="text" id="notes" name="notes" required><br><br>

            <button type="submit">Submit</button>
            <button type="button" id="closeForm">Close</button>
        </form>
    </div>
    `;
    document.body.appendChild(modal);

    const popup = document.getElementById('popup');

    let add = document.querySelector('.add');
    add.addEventListener('click',()=>{
        popup.style.display = 'block';
    });

    const form = document.getElementById('popupForm');
    form.addEventListener('submit',(e)=>{
        popup.style.display = 'none';
        e.preventDefault();
        
        let name = document.getElementById('name').value;
        let desc = document.getElementById('desc').value;
        let due = document.getElementById('DueDate').value;
        let note = document.getElementById('notes').value;

        createTodo(name,desc,due,note);


    })

    let today = document.querySelector('.today');
    today.addEventListener('click',()=>{
        displayTodoToday();
    })

}