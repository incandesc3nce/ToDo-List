import showTodo from "../builders/showTodo";
import removeTodo from "../builders/removeTodo";

export default function showTodos(project) {
  for (let projectTodo of project.todos) {
    showTodo(projectTodo, project);
  }
}
