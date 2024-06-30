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