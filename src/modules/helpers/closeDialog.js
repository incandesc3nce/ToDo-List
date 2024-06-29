import removeDialog from "./removeDialog";

export default function closeDialog(dialog) {
  dialog.close();
  removeDialog(dialog); 
}