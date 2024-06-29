export default class Todo {
  constructor(title, description, dueDate, priority, notes, done) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.done = done;
  }

  toggleDone() {
    this.done = !this.done;
  }
}