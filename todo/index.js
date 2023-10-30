function addRow() {
    let taskName = document.getElementById("task").value;
    let priority = document.getElementById("priority").value;

    let tbody = document.querySelector("table tbody");

    let newRow = document.createElement("tr");
    let taskCell = document.createElement("td");
    let priorityCell = document.createElement("td");
    let favoriteCell = document.createElement("td");

    taskCell.textContent = taskName;
    priorityCell.textContent = priority;
    favoriteCell.textContent = "No"; 

    // Append cells to the row
    newRow.appendChild(taskCell);
    newRow.appendChild(priorityCell);
    newRow.appendChild(favoriteCell);

    tbody.appendChild(newRow);

    document.getElementById("task").value = "";
    document.getElementById("priority").value = "";
  }

  
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission
    addRow();
  });