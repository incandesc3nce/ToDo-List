import Todo from "../todo.js";

export default function createTodo(title, description, dueDate, priority, notes, done) {
  return new Todo(title, description, dueDate, priority, notes, done);
}