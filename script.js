	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list = document.querySelector("#tasks");
    const arr = [];
	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const dataTask = input.value;

		const task = document.createElement('div');
		task.classList.add('dataTask');

		const task_content = document.createElement('div');
		task_content.classList.add('content');

		task.appendChild(task_content);

		const task_input = document.createElement('input');
		task_input.type = 'text';
		task_input.value = dataTask;
		task_input.setAttribute('readonly', 'readonly');
		task_input.classList.add('text');

		task_content.appendChild(task_input);

		const task_actions = document.createElement('div');
		task_actions.classList.add('actions');
		
		const task_edit = document.createElement('button');
		task_edit.classList.add('edit');
		task_edit.innerText = 'Edit';

		const task_delete = document.createElement('button');
		task_delete.classList.add('delete');
		task_delete.innerText = 'Delete';

		task_actions.appendChild(task_edit);
		task_actions.appendChild(task_delete);

		task.appendChild(task_actions);

		list.appendChild(task);
        const id = Math.floor(Math.random() * Date.now()).toString()
        arr.push({dataTask , id });
        console.log("ARR",arr);
		input.value = '';

		task_edit.addEventListener('click', (e) => {
			if (task_edit.innerText.toLowerCase() == "edit") {
				task_edit.innerText = "Save";
				task_input.removeAttribute("readonly");
				task_input.focus();
			} else {
				task_edit.innerText = "Edit";
				task_input.setAttribute("readonly", "readonly");
			}
		});

		task_delete.addEventListener('click', (e) => {
			list.removeChild(task);
		});
	});
