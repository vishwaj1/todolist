
export function divforTodo(name,desc,dueDate,notes){
    let div = document.createElement('div');

    let h1 = document.createElement('H1')
    h1.textContent = name;
    div.appendChild(h1);

    let des = document.createElement('p');
    des.textContent = desc;
    div.appendChild(des);

    let duedate = document.createElement('H3');
    duedate.textContent = dueDate;
    div.appendChild(duedate);

    let note = document.createElement('p');
    note.textContent = notes;
    div.appendChild(note);

    return div;
}