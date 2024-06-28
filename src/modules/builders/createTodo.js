import Todo from "../todo.js";

export default function createTodo(title, description, dueDate, priority, notes) {
  return new Todo(title, description, dueDate, priority, notes);
}