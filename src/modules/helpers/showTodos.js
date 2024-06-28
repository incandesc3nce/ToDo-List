import addTodo from "../builders/addTodo";

export default function showTodos(project) {
  for (let projectTodo of project.todos) {
    addTodo(projectTodo);
  }
}