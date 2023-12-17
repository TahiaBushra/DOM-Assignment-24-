"use strict"
// const btn = document.querySelector(".btn");
// btn.addEventListener("mouseover", () => {
//     console.log("Button Hover");
// });
// btn.addEventListener("mouseout", () => {
//     console.log("Button Unhover");
// });
// btn.addEventListener("mouseup", () => {
//     console.log("Clicked");
// });
// document.addEventListener("keypress", (event) => {
//     if (event.key === "Enter") {
//         console.log("Enter is pressed");
//     }
// });

// const btnOpenModel = document.querySelector(".btn_open_model");
// const btnCloseModel = document.querySelector(".btn_close_model");
// const model = document.querySelector(".model");

// const openModel = () => {
//     model.classList.remove("hidden");
// };
// const closeModel = () => {
//     model.classList.add("hidden");
// };

// btnOpenModel.addEventListener("click", openModel);
// btnCloseModel.addEventListener("click", closeModel);
// document.addEventListener("keydown", (event) => {
//     if (event.key === "Escape") {
//         closeModel();
//     }
// });

// // Event Propagation: Event Bubling + Event Deligation = Event Propagation.
// const outer = document.querySelector(".outer");
// const inner = document.querySelector(".inner");
// outer.addEventListener("click", () => {
//     console.log("Outer Div");
// })
// inner.addEventListener("click", () => {
//     console.log("Inner div");
// });

// Theme
// const btnLight = document.querySelector(".light_theme");
// btnLight.addEventListener("click", () => {
//     document.body.style.backgroundColor = "white";
// });

// const btnDark = document.querySelector(".dark_theme");
// btnDark.addEventListener("click", () => {
//     document.body.style.backgroundColor = "black";
// });

// const theme = document.querySelector(".theme");

// theme.addEventListener("click", (event) => {
//     if (event.target.classList.contains("light_theme")) {
//         document.body.style.backgroundColor = "white";
//     }
//     if (event.target.classList.contains("dark_theme")) {
//         document.body.style.backgroundColor = "black";
//     }
// })

// To-Do List
const todoInput = document.querySelector(".todo-input");
const addButton = document.querySelector(".add-button");
const todoList = document.querySelector(".todo-list");

function createTodoItem(task) {
    const li = document.createElement("li");
    li.textContent = task;
    todoList.appendChild(li);
}

addButton.addEventListener("click", addTask);

function addTask() {
    const task = todoInput.value.trim();
    if (task !== "") {
        createTodoItem(task);
        todoInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}

todoList.addEventListener("click", removeTask);

function removeTask(event) {
    if (event.target.tagName === "LI") {
        event.target.remove();
    }
}

todoInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});



