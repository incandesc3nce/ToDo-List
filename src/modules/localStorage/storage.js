import { add } from "date-fns";

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
    catch(e) {
      return false;
    }
  }

  function getProjects() {
    return storage.getItem('projects');
  }

  function setProjects(projects) {
    storage.setItem('projects', JSON.stringify(projects));
  }

  function removeProject(project) {
    storage.removeItem();
  }

  return {storageAvailable, getProjects, setProjects, removeProject};
})();