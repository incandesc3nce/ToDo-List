import createProject from './builders/createProject';
import createTodo from './builders/createTodo';

export const projectsContainer = (function() {
  let projects = [];

  const getProject = (index) => {
    return projects[index];
  };

  const getProjects = () => {
    return projects;
  };

  const addProject = (project) => {
    projects.push(project);
  };

  const removeProject = (project) => {
    const index = projects.indexOf(project);
    projects.splice(index, 1);
  };

  return {addProject, removeProject, getProject, getProjects};
})();


const project = createProject('Home Chores');

projectsContainer.addProject(project);

const todo = createTodo('Buy milk', 'We need to buy milk, it is very important.', '13.12.2024', 'Low', 'must do this asap!');
const todo2 = createTodo('Wash dishes', 'Sink is full of dirty dishes, time to free the sink.', '13.12.2024', 'Medium', '');
const todo3 = createTodo('Make dinner', 'Dinner needs to be made this evening, no one wants to stay hungry!', '13.12.2024', 'High', 'would like to make some lasagna');
project.addTodo(todo);
project.addTodo(todo2);
project.addTodo(todo3);