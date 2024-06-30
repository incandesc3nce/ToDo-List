import createProject from '../builders/createProject';
import createTodo from '../builders/createTodo';
import { projectsContainer } from '../projectContainer';

export const storageHandler = (function() {
  let storage;

  function storageAvailable() {
    try {
      storage = window.localStorage;
      const x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    }
    catch(err) {
      alert('Error: Local Storage is not available. Your changes will not be saved.');
      console.log(err);
      return false;
    }
  }

  function getProjects() {
    return storage.getItem('projects');
  }

  function setProjects(projects) {
    storage.setItem('projects', JSON.stringify(projects));
  }

  function start() {
    if (storageAvailable()) {
      const projects = getProjects();
      if (projects) {
        const objects = JSON.parse(projects);
        objects.forEach(object => {
          const project = createProject(object.title);
          projectsContainer.addProject(project);
    
          object.todos.forEach(todo => {
            const todoObject = createTodo(todo.title, todo.description, todo.dueDate, todo.priority, todo.notes, todo.done);
            project.addTodo(todoObject);
          })
      })
      } else {
        const defaultProject = createProject('Home Chores');
        projectsContainer.addProject(defaultProject);
    
        const todo = createTodo('Buy milk', 'We need to buy milk, it is very important.', '2024-07-01', 'Low', 'must do this asap!');
        const todo2 = createTodo('Wash dishes', 'Sink is full of dirty dishes, time to free the sink.', '2024-07-01', 'Medium', '');
        const todo3 = createTodo('Make dinner', 'Dinner needs to be made this evening, no one wants to stay hungry!', '2024-07-01', 'High', 'would like to make some lasagna');
        defaultProject.addTodo(todo);
        defaultProject.addTodo(todo2);
        defaultProject.addTodo(todo3);
    
        setProjects(projectsContainer.getProjects());
      }
    }
  }

  start();

  return {setProjects};
})();