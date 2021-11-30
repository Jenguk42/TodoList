let i = 0;

function addNewToDo() {
    const toDoElement = document.getElementById("inputText").value;
    document.getElementById('inputText').value=''

    // Add the element if the input is not empty
    if (toDoElement == null || toDoElement === "") {
        window.alert("You have to be productive today!");
    } else {
        // Create a new element
        let element = document.createElement("li");
        element.id = 'list'+i;
        element.className = 'listElement'

        let elementContent = document.createElement("span");
        elementContent.textContent = toDoElement;
        elementContent.className = 'content';
        elementContent.id = 'content' + i;
        element.appendChild(elementContent);

        const currentI = i;

        // Create an edit button
        element.appendChild(
            createButton(currentI, 'edit', 'fa-edit', function() {
                clickEditButton(currentI)
            }));

        // Create a done button
        element.appendChild(
            createButton(i, 'done', 'fa-check', function() {
                clickDoneButton(currentI);
            }));

        // Create a delete button
        element.appendChild(
            createButton(i, 'delete', 'fa-trash', function() {
                document.getElementById(element.id).remove();
                // window.alert('You finished task ' + (i+1) + '!');
            }));

        // Add the element to the list
        let list = document.getElementById("toDoList");
        list.appendChild(element);

        i += 1;
        // window.alert("Your plan is added to your list!");
    }
}

function createButton(i, type, icon, ftype) {
    // Create an 'edit' button that edits the element
    const button = document.createElement("button");
    button.type = "button";
    button.className = 'button';
    button.id = type + i;
    button.innerHTML = '<i class="fas ' + icon + '"></i>';
    button.addEventListener("click", function() {
        ftype();
    });
    return button;
}

function clickEditButton(i) {
    const element = document.getElementById('list' + i);
    const context = document.getElementById('content' + i).textContent;
    let list = document.getElementById("toDoList");

    // Create a node that will replace the context while editing
    let editElement = document.createElement("li");

    // Get the current content and show it in a text box
    const editBox = document.createElement("input");
    editBox.type = "text";
    editBox.value = context;
    editBox.id = 'editBox' + i;
    editElement.appendChild(editBox);

    // Add an enter button
    editElement.appendChild(
        createButton(i, 'enter', 'fa-check', function() {
            element.firstChild.textContent = document.getElementById('editBox' + i).value;
            list.replaceChild(element, editElement);
        }
    ));

    // Replace the node
    list.replaceChild(editElement, element);
}

function clickDoneButton(i) {
    // Makes the element into 'done mode'
    document.getElementById('content'+i).setAttribute("class","taskFinished");
    document.getElementById('edit'+i).setAttribute("class","finishedButton");
    document.getElementById('done'+i).remove();
    document.getElementById('delete'+i).setAttribute("class","finishedButton");
}