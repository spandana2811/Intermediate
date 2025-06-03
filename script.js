// JavaScript Form Validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const name = document.getElementById('name').value;
  const message = document.getElementById('formMessage');

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !emailPattern.test(email)) {
    message.textContent = "Please enter a valid name and email.";
    message.style.color = "red";
  } else {
    message.textContent = "Form submitted successfully!";
    message.style.color = "green";
    this.reset();
  }
});

// Dynamic To-Do List
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  const taskList = document.getElementById("taskList");

  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  const removeBtn = document.createElement("button");
  addTask.textContent="✅";
  removeBtn.textContent = "❌";
  removeBtn.onclick = () => li.remove();
  li.appendChild(removeBtn);

  taskList.appendChild(li);
  taskInput.value = "";
}
