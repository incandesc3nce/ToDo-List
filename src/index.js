import './index.html';
import './style.css';
import showProject from './modules/builders/showProject';
import Project from './modules/project';
import Todo from './modules/todo';
import createProject from './modules/builders/createProject';
import createTodo from './modules/builders/createTodo';
import { projectsContainer } from './modules/projectContainer';
import { storageHandler } from './modules/localStorage/storage';

const storageAvailable = storageHandler.storageAvailable();

if (storageAvailable) {
  const projects = storageHandler.getProjects();
  if (projects) {
    const objects = JSON.parse(projects);
    objects.forEach(object => {
      const project = createProject(object.title);
      projectsContainer.addProject(project);

      object.todos.forEach(todo => {
        const todoObject = createTodo(todo.title, todo.description, todo.dueDate, todo.priority, todo.notes);
        project.addTodo(todoObject);
      })
    })
  } else {
    const defaultProject = createProject('Home Chores');
    projectsContainer.addProject(defaultProject);

    const todo = createTodo('Buy milk', 'We need to buy milk, it is very important.', '13.12.2024', 'Low', 'must do this asap!');
    const todo2 = createTodo('Wash dishes', 'Sink is full of dirty dishes, time to free the sink.', '13.12.2024', 'Medium', '');
    const todo3 = createTodo('Make dinner', 'Dinner needs to be made this evening, no one wants to stay hungry!', '13.12.2024', 'High', 'would like to make some lasagna');
    defaultProject.addTodo(todo);
    defaultProject.addTodo(todo2);
    defaultProject.addTodo(todo3);

    storageHandler.setProjects(projectsContainer.getProjects());
  }
}

projectsContainer.getProjects().forEach(project => {
  showProject(project);
})