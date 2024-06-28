export default class Project {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeTodo(todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
}