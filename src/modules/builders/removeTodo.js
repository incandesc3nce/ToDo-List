export default function removeTodo(element) {
  const todoList = document.getElementById("list");
  todoList.removeChild(element);
}