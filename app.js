window.addEventListener("load", () => {
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const list_el = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = input.value;
    if (!task) {
      alert("Please enter a task");
      return;
    }

    const task_el = document.createElement("div");
    task_el.classList.add("task");

    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content");
    // task_content_el.innerText = task;

    task_el.appendChild(task_content_el);

    const task_input_el = document.createElement("input");
    task_input_el.classList.add("text");
    task_input_el.type = "text";
    task_input_el.value = task;
    task_input_el.setAttribute("readonly", "readonly");

    task_content_el.appendChild(task_input_el);

    const task_actions_el = document.createElement("div");
    task_actions_el.classList.add("actions");

    const task_actions_edit = document.createElement("button");
    task_actions_edit.classList.add("edit");
    task_actions_edit.innerHTML = "Edit";

    const task_actions_delete = document.createElement("button");
    task_actions_delete.classList.add("delete");
    task_actions_delete.innerHTML = "Delete";

    task_actions_el.appendChild(task_actions_edit);
    task_actions_el.appendChild(task_actions_delete);

    localStorage.setItem("task", task_el);

    task_el.appendChild(task_actions_el);

    list_el.appendChild(task_el);

    console.log("This is new branch");

    input.value = "";

    task_actions_edit.addEventListener("click", () => {
      if (task_actions_edit.innerText.toLowerCase() === "edit") {
        task_input_el.removeAttribute("readonly");
        task_input_el.focus();
        task_actions_edit.innerText = "Save";
      } else {
        task_input_el.setAttribute("readonly", "readonly");
        task_actions_edit.innerText = "Edit";
      }
    });

    task_actions_delete.addEventListener("click", () => {
      list_el.removeChild(task_el);
    });
  });
});
