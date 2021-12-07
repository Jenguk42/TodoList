import React from 'react'
import Task from './Task'

const Tasks = ({tasks, onDelete, onEdit}) => {

    return (
        <div className="tasks">
            {tasks.map((task)=>(
                <Task key={task.id} 
                    task={task}
                    onDelete={onDelete}
                    onEdit={onEdit}
                />)
            )}
        </div>
    )
}

export default Tasks
