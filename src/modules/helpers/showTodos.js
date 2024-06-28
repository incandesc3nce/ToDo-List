import addTodo from "../builders/addTodo";
import removeTodo from "../builders/removeTodo";

export default function showTodos(project) {
  for (let projectTodo of project.todos) {
    addTodo(projectTodo, project);
  }
}