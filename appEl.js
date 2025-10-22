const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  // Create list item
  const li = document.createElement('li');

  // Checkbox for completion
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('checkbox');

  // Task text
  const span = document.createElement('span');
  span.textContent = taskText;

  // Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');

  // Toggle completed class
  checkbox.addEventListener('change', () => {
    li.classList.toggle('completed', checkbox.checked);
  });

  // Delete task
  deleteBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    li.remove();
  });

  // Build the task element
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  // Add to list
  taskList.appendChild(li);
  taskInput.value = '';
});
