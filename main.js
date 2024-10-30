let addToDobutton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}

// Example usage:
const randomString = generateRandomString(10); // Generate a random string of length 10
console.log(randomString);


addToDobutton.addEventListener('click', function () {

    const listIteElementId = generateRandomString(8);
    const listIteElement = `
    <li class="todo-item" id="${listIteElementId}"><div 
    style="display: flex; flex-direction: row; justify-content: space-between; width: -webkit-fill-available;">
      <div>
        <span class="paragraph-styling">${inputField.value}</span>
      </div>
      <div style="display: flex; justify-content: right">
        <i class="fas fa-edit edit-icon" data-id="${listIteElementId}"></i>
        <i class="fas fa-trash delete-icon" data-id="${listIteElementId}"></i>
      </div>
    </div></li>
    `;

    toDoContainer.innerHTML += listIteElement;
    inputField.value = "";

    toDoContainer.addEventListener('click', function (event) {
        const target = event.target;

        //Handle edit button click
        if (target.classList.contains('edit-icon')) {
            // Read item ID
            const itemId = target.getAttribute('data-id');
            // Select the todo item using the item ID
            const todoItem = document.getElementById(itemId);

            // Update todo text
            const paragraph = todoItem.querySelector('.paragraph-styling');

            const newText = prompt("Edit your task:", paragraph.innerText);
            if (newText !== null) {
                paragraph.innerText = newText;
            }
        }

        //Handle delete button click
        if (target.classList.contains('delete-icon')) {
            const itemId = target.getAttribute('data-id');
            const todoItem = document.getElementById(itemId);
            toDoContainer.removeChild(todoItem);
        }

    });

    // Mark item as done
    // paragraph.addEventListener('click', function() {
    //     paragraph.style.textDecoration = "line-through";
    // });

    // Edit button functionality
    // editIcon.addEventListener('click', function() {
    //     var newText = prompt("Edit your task:", paragraph.innerText);
    //     if (newText !== null) {
    //         paragraph.innerText = newText;
    //     }
    // });

    // Delete button functionality
    // deleteIcon.addEventListener('click', function() {
    //     toDoContainer.removeChild(todoItem);
    // });
});
