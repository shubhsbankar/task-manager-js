//Global Const declaration
const addForm = document.querySelector(".add-form");
const taskList = document.querySelector(".task-list");
const msg = document.querySelector(".msg");
const clear = document.querySelector(".clear");
const search = document.querySelector(".search-form");
// Update the message
function updateMessage()
{
    msg.textContent = `You have ${taskList.children.length} pending task.`
}
// Update the message on page load
updateMessage();
//Add the new pending task in the list
addForm.addEventListener("submit",event => {
    event.preventDefault();
   const newTask = addForm.task.value.trim();
   if (newTask)
   {
    taskList.innerHTML +=`<li class="task"><span>${newTask}</span>
    <i class="bi bi-trash-fill delete"></i></li>`;
    addForm.reset();
    updateMessage();
   }
});
//Remove the task list item from list
taskList.addEventListener("click",event => {
    if (event.target.classList.contains("delete"))
    {
        event.target.parentElement.remove();
        updateMessage();
    }

});
// Delete all the list items on Clear All click
clear.addEventListener("click", event => {
    const list = taskList.querySelectorAll("li");
    list.forEach(item => {
        item.remove();
    });
    updateMessage();
});
// Update the task list as per enter text in serach form
search.addEventListener("keyup", event => {
    Array.from(taskList.children).filter((task) => {
        return !task.textContent.toLowerCase().includes(search.searchtask.value.trim().toLowerCase());
      })
      .forEach((task) => {
            task.classList.add("hide");
      });
 
      Array.from(taskList.children).filter((task) => {
         return task.textContent.toLowerCase().includes(search.searchtask.value.trim().toLowerCase());
       })
       .forEach((task) => {
             task.classList.remove("hide");
       });
});
// Update the task list on resetting search form
search.addEventListener("click", event => {
    if (event.target.classList.contains("reset"))
    {
        Array.from(taskList.children)
        .forEach(task => task.classList.remove("hide"));
        search.reset();
    }
});


