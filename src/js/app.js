$(document).ready(function () {

    const TASK_STORAGE_KEY = "TASK_STORAGE_KEY";

    showToDoList();

    $('#saveButton').on('click', function () {

        let taskTitle = document.querySelector('#task-title').value;
        let taskDescription = document.querySelector('#task-description').value;

        let task = new Task(taskTitle, taskDescription);

        if (Validator.isTaskValid(task)) {

            $('.table-list-todo').hide(500, function () {

                let storageTaskList = localStorage.getItem(TASK_STORAGE_KEY) ? JSON.parse(localStorage.getItem(TASK_STORAGE_KEY)) : [];

                storageTaskList.push(task.toJson());

                localStorage.setItem(TASK_STORAGE_KEY, JSON.stringify(storageTaskList));

                console.table(storageTaskList);
                console.log("Task was saved successfully.");

                showToDoList();
                $('.table-list-todo').show(500);

            });

        } else {

            alert("All fields are required to create a task");

        }

    });

    $('#cleanButton').on('click', function () {

        $('.table-list-todo').hide(500, function () {

            localStorage.removeItem(TASK_STORAGE_KEY);

            showToDoList();

            $('.table-list-todo').show(1000);

        });

    });

    function showToDoList() {

        let storageTaskList = localStorage.getItem(TASK_STORAGE_KEY) ? JSON.parse(localStorage.getItem(TASK_STORAGE_KEY)) : [];

        let template = `<thead>
                                    <tr><td>Name</td><td>Description</td></tr>
                               </thead>
                               <tbody>`;

        storageTaskList.forEach(rawTask => {

            let task = Task.toTask(rawTask);

            template += `<tr><td>${task.getTitle}</td><td>${task.getDescription}</td></tr>`;

        });

        template += `</tbody>`;

        $('.table-list-todo').html(template);
    }

});
