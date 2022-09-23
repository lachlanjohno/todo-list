const userInput = document.querySelector(".todo-input");
const addItemBtn = document.querySelector(".additem-btn");
const editBtn = document.querySelector(".edit-btn");
const removeBtn = document.querySelector(".remove-btn");
const templateContainer = document.querySelector(".template-container");

addItemBtn.onclick = (todo) => {
  if (userInput.value.length < 1) return;
  let listItem = userInput.value;

  renderTodo(listItem);
  userInput.value = "";
};

templateContainer.addEventListener("click", (e) => {
  if (e.target.matches(".remove-btn")) {
    const parent = e.target.closest(".todo-list");
    parent.remove();
  } else if (e.target.matches(".edit-btn")) {
    let newUserInput = prompt("Enter something");
    if (newUserInput.length === 0) {
      alert("You need to enter something");
      return;
    }
    let parent = e.target.closest(".todo-list");
    let listItem = parent.childNodes[1];
    listItem.innerHTML = newUserInput;
  }
});

function renderTodo(todo) {
  const templateClone = template.content.cloneNode(true);
  const textElement = templateClone.querySelector(".list-item");
  textElement.innerText = todo;
  templateContainer.appendChild(templateClone);
}
