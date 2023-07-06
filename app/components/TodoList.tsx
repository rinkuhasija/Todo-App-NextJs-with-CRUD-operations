import { ITask } from '@/types/tasks'
import React from 'react'
import Task from './Task'

interface TodoListProps {
    tasks: ITask[]
}
const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>

                        <th>Name</th>
                        <th>Description</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>

                    {tasks.map(task => {
                        
                        return (
                            <Task key={task.id} task={task} />
                        )
                    })}
                    {/* row 1 */}

                </tbody>
            </table>
        </div>
    )
}

export default TodoList