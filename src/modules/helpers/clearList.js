export default function clearList(list) {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}