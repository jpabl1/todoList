
$(document).ready( function () {
  
  showToDoList();

  $('#createTaskButton').on('click', function () {

    let todo = [
            document.querySelector("#task-title").value,
            document.querySelector("#task-description").value
          ];

    if(Validator.isValueFieldValid(todo[0]) && Validator.isValueFieldValid(todo[1])) {

      $('.table-list-todo').hide(500, function () {
            let todoList = localStorage.getItem("todoStorage") ? JSON.parse(localStorage.getItem("todoStorage")) : [];
            todoList.push(todo);
            localStorage.setItem("todoStorage", JSON.stringify(todoList));
            console.table( todoList );
            console.log("Se ha guardado exitosamente.");
            showToDoList();
            $('.table-list-todo').show(500);
          });

    } else {

      alert("All fields are required to create a task");

    }

  });

  $('#cleanButton').on('click', function () {
    $('.table-list-todo').hide(500, function () {
      localStorage.removeItem("todoStorage");
      showToDoList();
      $('.table-list-todo').show(1000);
    });
  });

  function showToDoList () {
    let todoList = localStorage.getItem("todoStorage") ? JSON.parse(localStorage.getItem("todoStorage")) : [];
    
    let template = `
    <thead>
      <tr><td>Name</td><td>Description</td></tr>
    </thead>
    <tbody>
    `;
    
    todoList.forEach(todo => {
      template += `<tr><td>${ todo[0] }</td><td>${ todo[1] }</td></tr>`;
    });
    
    template += `</tbody>`;
    
    $('.table-list-todo').html(template);
  }

});




// const button = document.querySelector("button");

// button.addEventListener("click", (event) => {
//   button.textContent = `Click count: ${event.detail}`;
// });

// const boxWrapper = document.getElementById("box-wrapper");

// const box = document.createElement("div");
// box.innerHTML = 'div <br> 5';
// box.style.backgroundColor = "orange";
// box.classList.add("box");

// boxWrapper.appendChild(box);