document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");
  const tasksList = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Get the value from the input field
    const inputValue = document.querySelector("#new-task-description").value;

    // Create a new list item
    const listItem = document.createElement("li");
    listItem.textContent = inputValue;

    // Create a remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove Task";
    removeButton.addEventListener("click", (e) => {
      // Remove the parent <li> element when the button is clicked
      listItem.remove();
    });

    // Append the remove button to the list item
    listItem.appendChild(removeButton);

    // Append the list item to the tasks list
    tasksList.appendChild(listItem);

    // Reset the form input
    form.reset();
  });
});
