const taskBox = document.querySelector(".taskbox");
const userTask = document.querySelector(".usertask");

// console.log(taskBox);
// console.log(userTask.value);

// Varibable to track the id of each elem
let idOfTasks = 0;


function addTask() {
    if (userTask.value === "") {
        alert("Enter some task to add to the list")
    } else {
        idOfTasks += 1;
        const div = document.createElement('div')
        const input = document.createElement('input')
        input.setAttribute("type", "checkbox");
        input.id = 'check';
        const h3 = document.createElement('h3');
        const textnodeh3 = document.createTextNode(userTask.value);
        h3.appendChild(textnodeh3)
        const btn = document.createElement('button');
        const textnodebtn = document.createTextNode("Delete");
        btn.setAttribute("onclick", "removeTask(this)");
        btn.className = "delete";
        btn.appendChild(textnodebtn);
        div.appendChild(input);
        div.appendChild(h3);
        div.appendChild(btn);
        div.className = "task"
        div.id = `task${idOfTasks}`;
        div.setAttribute("onclick", "checkTaskComplete(this)");
        taskBox.appendChild(div);
        userTask.value = "";
    }
}


// Function to strike the tasks if completed
function checkTaskComplete(checkbox) {
    const checkedId = checkbox.id;
    const check = document.getElementById(checkedId).children[0].checked;
    const innerText = document.getElementById(checkedId).children[1].innerHTML;
    if (check) {
        const deletedText = "<del>" + innerText + "</del>";
        document.getElementById(checkedId).children[1].innerHTML = deletedText;
    } else {
        const resumeText = innerText.substring(5, innerText.length - 6);
        document.getElementById(checkedId).children[1].innerHTML = resumeText;
    }
}


const removeElem = document.getElementsByClassName("delete");
function removeTask() {
    for (let i = 0; i < removeElem.length; i++) {
        removeElem[i].onclick = () => {
            let div = removeElem[i].parentElement;
            // div.remove();
            div.style.display = "none";
        }
    }
}