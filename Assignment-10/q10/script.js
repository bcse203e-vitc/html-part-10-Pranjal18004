const addButton = document.getElementById('addButton');
        addButton.addEventListener('click', addTodo);

        function addTodo() {
            const todoInput = document.getElementById('todoInput');
            const todoText = todoInput.value.trim();
            if (todoText !== '') {
                const li = document.createElement('li');
                li.textContent = todoText;

                const removeButton = document.createElement('button');
                removeButton.textContent = 'Remove';
                removeButton.addEventListener('click', () => {
                    li.remove();
                });

                li.appendChild(removeButton);
                document.getElementById('todoList').appendChild(li);

                todoInput.value = '';
            }
        }