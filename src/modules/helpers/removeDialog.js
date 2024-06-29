export default function removeDialog(dialog) {
  const body = document.querySelector("body");
  body.removeChild(dialog);
}