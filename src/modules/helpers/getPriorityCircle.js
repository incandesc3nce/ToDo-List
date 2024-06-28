export default function getPriorityCircle(priority) {
  switch (priority) {
    case 'High':
      return "🔴";
    case 'Medium':
      return "🟡";
    case 'Low':
      return "🟢";
  }
}