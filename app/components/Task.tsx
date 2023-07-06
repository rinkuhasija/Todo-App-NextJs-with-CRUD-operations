import { ITask } from "@/types/tasks";

interface TaskProps {
  task: ITask
}

const Task: React.FC<TaskProps> = ({ task }) => {
  
  return (
    <tr key={task.id}>
      <td>{task.title}</td>
      <td>{task.description}</td>
      <td>{ task.status !== 'completed' ? task.status : task.status + " ✅"}</td>
    </tr>
  )
}

export default Task;